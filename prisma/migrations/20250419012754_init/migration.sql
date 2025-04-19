-- CreateTable
CREATE TABLE "cliente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "factura" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clienteId" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "factura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalleFactura" (
    "id" SERIAL NOT NULL,
    "facturaId" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "detalleFactura_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_correo_key" ON "cliente"("correo");

-- AddForeignKey
ALTER TABLE "factura" ADD CONSTRAINT "factura_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalleFactura" ADD CONSTRAINT "detalleFactura_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "factura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalleFactura" ADD CONSTRAINT "detalleFactura_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
