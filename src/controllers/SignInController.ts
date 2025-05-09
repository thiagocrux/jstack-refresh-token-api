import { compare } from 'bcryptjs';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { REFRESH_TOKEN_LIMIT_IN_DAYS } from '../config/constants';
import { AccountsRepository } from '../repositories/AccountsRepository';
import { RefreshTokenRespository } from '../repositories/RefreshTokenRepository';

export class SignInController {
  static schema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(8),
  });

  static handle = async (request: FastifyRequest, reply: FastifyReply) => {
    const result = this.schema.safeParse(request.body);

    if (!result.success) {
      return reply.code(400).send({ errors: result.error.issues });
    }

    const { email, password } = result.data;
    const account = await AccountsRepository.findByEmail(email);

    if (!account) {
      return reply.code(401).send({ errors: 'Invalid credentials.' });
    }

    const isPasswordValid = await compare(password, account.password);

    if (!isPasswordValid) {
      return reply.code(400).send({ errors: 'Invalid credentials.' });
    }

    const accessToken = await reply.jwtSign({ sub: account.id });

    // Refresh token creation
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + REFRESH_TOKEN_LIMIT_IN_DAYS);

    const { id } = await RefreshTokenRespository.create({
      accountId: account.id,
      expiresAt,
    });

    return reply.code(200).send({ accessToken, refreshToken: id });
  };
}
