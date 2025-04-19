import { BadRequestException, Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaClient } from 'generated/prisma';


@Injectable()
export class ClienteService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createClienteDto: CreateClienteDto) {
    return this.cliente.create({data:createClienteDto});
  }

  findAll() {
    return this.cliente.findMany({});
  }

  findOne(id: number) {
    return this.cliente.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateClienteDto) {
    // Verifica si el correo ya existe en otro cliente
    if (data.correo) {
      const existente = await this.cliente.findUnique({
        where: { correo: data.correo },
      });
  
      if (existente && existente.id !== id) {
        throw new BadRequestException('Este correo ya está registrado en otro cliente.');
      }
    }
  
    return this.cliente.update({
      where: { id },
      data,
    });
  }


  async remove(id: number) {
    // Verifica si el cliente existe
    const cliente = await this.cliente.findUnique({
      where: { id },
    });
  
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${id} ya fue elimnado Con exito `);
    }
  
    // Elimina si existe
    return this.cliente.delete({
      where: { id },
    });
  }
}
