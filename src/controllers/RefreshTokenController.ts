import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { REFRESH_TOKEN_LIMIT_IN_DAYS } from '../config/constants';
import { RefreshTokenRespository } from '../repositories/RefreshTokenRepository';

export class RefreshTokenController {
  static schema = z.object({
    refreshToken: z.string().uuid(),
  });

  static handle = async (request: FastifyRequest, reply: FastifyReply) => {
    const result = this.schema.safeParse(request.body);

    if (!result.success) {
      return reply.code(400).send({ errors: result.error.issues });
    }

    const { refreshToken: refreshTokenId } = result.data;
    const refreshToken = await RefreshTokenRespository.findById(refreshTokenId);

    if (!refreshToken) {
      return reply.code(401).send({ errors: 'Invalid refresh token.' });
    }

    if (Date.now() > refreshToken.expiresAt.getTime()) {
      return reply.code(401).send({ errors: 'Expired refresh token.' });
    }

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + REFRESH_TOKEN_LIMIT_IN_DAYS);

    const [accessToken, newRefreshToken] = await Promise.all([
      await reply.jwtSign({ sub: refreshToken.accountId }),
      await RefreshTokenRespository.create({
        accountId: refreshToken.accountId,
        expiresAt,
      }),
      await RefreshTokenRespository.deleteById(refreshToken.id),
    ]);

    return reply
      .code(200)
      .send({ accessToken, refreshToken: newRefreshToken.id });
  };
}
