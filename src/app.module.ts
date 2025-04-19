import { cliente } from './../generated/prisma/index.d';
import { Module } from '@nestjs/common';

import { FacturaModule } from './factura/factura.module';
import { ClienteModule, } from './cliente/cliente.module';
import { DetalleFacturaModule } from './detalle-factura/detalle-factura.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [FacturaModule ,ClienteModule ,DetalleFacturaModule,ProductoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
