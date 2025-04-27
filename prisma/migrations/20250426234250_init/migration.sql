/*
  Warnings:

  - You are about to drop the `cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `detalleFactura` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `factura` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `producto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cliente" DROP CONSTRAINT "cliente_legalOrganizationId_fkey";

-- DropForeignKey
ALTER TABLE "cliente" DROP CONSTRAINT "cliente_municipalityId_fkey";

-- DropForeignKey
ALTER TABLE "cliente" DROP CONSTRAINT "cliente_tributeId_fkey";

-- DropForeignKey
ALTER TABLE "detalleFactura" DROP CONSTRAINT "detalleFactura_facturaId_fkey";

-- DropForeignKey
ALTER TABLE "detalleFactura" DROP CONSTRAINT "detalleFactura_productoId_fkey";

-- DropForeignKey
ALTER TABLE "factura" DROP CONSTRAINT "factura_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "factura" DROP CONSTRAINT "factura_companyId_fkey";

-- DropTable
DROP TABLE "cliente";

-- DropTable
DROP TABLE "company";

-- DropTable
DROP TABLE "detalleFactura";

-- DropTable
DROP TABLE "factura";

-- DropTable
DROP TABLE "producto";

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ruc" TEXT NOT NULL,
    "dv" TEXT,
    "graphicRepresentationName" TEXT NOT NULL,
    "tradeName" TEXT,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "company" TEXT,
    "existe" BOOLEAN NOT NULL DEFAULT true,
    "legalOrganizationId" INTEGER NOT NULL,
    "tributeId" INTEGER NOT NULL,
    "municipalityId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NumberingRange" (
    "id" SERIAL NOT NULL,
    "prefix" TEXT NOT NULL,
    "from" INTEGER NOT NULL,
    "to" INTEGER NOT NULL,
    "resolutionNumber" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "months" INTEGER NOT NULL,

    CONSTRAINT "NumberingRange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Factura" (
    "id" SERIAL NOT NULL,
    "documentCode" TEXT NOT NULL,
    "documentName" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "referenceCode" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "sendEmail" BOOLEAN NOT NULL,
    "qr" TEXT NOT NULL,
    "cufe" TEXT NOT NULL,
    "validated" TIMESTAMP(3) NOT NULL,
    "discountRate" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "grossValue" DOUBLE PRECISION NOT NULL,
    "taxableAmount" DOUBLE PRECISION NOT NULL,
    "taxAmount" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clienteId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "numberingRangeId" INTEGER NOT NULL,

    CONSTRAINT "Factura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetalleFactura" (
    "id" SERIAL NOT NULL,
    "facturaId" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DetalleFactura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "urlLogo" TEXT NOT NULL,
    "nit" TEXT NOT NULL,
    "dv" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "graphicRepresentationName" TEXT NOT NULL,
    "registrationCode" TEXT NOT NULL,
    "economicActivity" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_correo_key" ON "Cliente"("correo");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_legalOrganizationId_fkey" FOREIGN KEY ("legalOrganizationId") REFERENCES "LegalOrganization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_tributeId_fkey" FOREIGN KEY ("tributeId") REFERENCES "Tribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_numberingRangeId_fkey" FOREIGN KEY ("numberingRangeId") REFERENCES "NumberingRange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleFactura" ADD CONSTRAINT "DetalleFactura_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleFactura" ADD CONSTRAINT "DetalleFactura_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
