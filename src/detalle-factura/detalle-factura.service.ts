import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateDetalleFacturaDto } from './dto/create-detalle-factura.dto';
import { UpdateDetalleFacturaDto } from './dto/update-detalle-factura.dto';
import { PrismaClient } from 'generated/prisma';


@Injectable()
export class DetalleFacturaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  async create(createDetalleFacturaDto: CreateDetalleFacturaDto) {
    return await this.detalleFactura.create({
      data: createDetalleFacturaDto,
    });
  }

  async findAll() {
    return await this.detalleFactura.findMany();
  }

  async findOne(id: number) {
    const detalle = await this.detalleFactura.findUnique({
      where: { id },
    });

    if (!detalle) {
      throw new NotFoundException(`DetalleFactura con id ${id} no encontrado`);
    }

    return detalle;
  }

  async update(id: number, updateDetalleFacturaDto: UpdateDetalleFacturaDto) {
    // Verifica si existe antes de actualizar
    await this.findOne(id);

    return await this.detalleFactura.update({
      where: { id },
      data: updateDetalleFacturaDto,
    });
  }

  
  async remove(id: number) {
    // Verifica si existe antes de eliminar
    await this.findOne(id);

    return await this.detalleFactura.delete({
      where: { id },
    });
  }}
