import jwt, { JwtPayload } from 'jsonwebtoken';
import { env } from '../config/env';

export class RefreshToken {
  static secret = env.REFRESH_TOKEN_SECRET;

  static generate(accountId: string) {
    return jwt.sign({ sub: accountId }, this.secret, {
      expiresIn: '10d',
    });
  }

  static validate(token: string) {
    try {
      const payload = jwt.verify(token, this.secret) as JwtPayload;
      return payload.sub;
    } catch {
      return;
    }
  }
}
