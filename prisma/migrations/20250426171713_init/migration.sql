/*
  Warnings:

  - You are about to drop the column `tributeID` on the `cliente` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `factura` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cliente" DROP COLUMN "tributeID";

-- AlterTable
ALTER TABLE "factura" ADD COLUMN     "companyId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "factura" ADD CONSTRAINT "factura_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
