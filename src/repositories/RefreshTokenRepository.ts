import { prismaClient } from '../lib/prisma';

interface ICreateDTO {
  accountId: string;
  expiresAt: Date;
}

export class RefreshTokenRespository {
  static findById(id: string) {
    return prismaClient.refreshToken.findUnique({ where: { id } });
  }

  static create({ accountId, expiresAt }: ICreateDTO) {
    return prismaClient.refreshToken.create({
      data: {
        accountId,
        expiresAt,
      },
    });
  }

  static deleteById(id: string) {
    console.log('DELETOU');
    return prismaClient.refreshToken.delete({ where: { id } });
  }
}
