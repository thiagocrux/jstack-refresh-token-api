-- CreateTable
CREATE TABLE "refresh-tokens" (
    "id" UUID NOT NULL,
    "accountId" UUID NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "refresh-tokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "refresh-tokens" ADD CONSTRAINT "refresh-tokens_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
