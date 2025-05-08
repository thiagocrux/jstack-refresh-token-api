import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export class RefreshToken {
  static generate(accountId: string) {
    return jwt.sign({ sub: accountId }, env.REFRESH_TOKEN_SECRET, {
      expiresIn: '10d',
    });
  }

  static validate() {}
}
