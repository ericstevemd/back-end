import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaClient } from 'generated/prisma';


@Injectable()
export class ProductoService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createProductoDto: CreateProductoDto) {
    return this.producto.create({
      data: createProductoDto, // ✅ Aquí debe ir `data`
    });
  }

  findAll() {
  return this.producto.findMany({});
  }

  findOne(id: number) {
    return this.producto.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return this.producto.update({
      where: { id },
      data: updateProductoDto,
    });
  }

  remove(id: number) {
    return this.producto.delete({
      where: { id },
    });
  }
}
