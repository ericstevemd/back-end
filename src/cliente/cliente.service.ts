import { BadRequestException, Injectable, NotFoundException, OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaClient } from 'generated/prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClienteService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createClienteDto: CreateClienteDto) {
    if (!createClienteDto.password) {
      throw new BadRequestException('La contraseña es obligatoria.');
    }
  
    const hashedPassword = bcrypt.hashSync(createClienteDto.password, 10);
  
    return this.cliente.create({
      data: {
        ...createClienteDto,
        password: hashedPassword,
        existe: true,
      },
    });
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

  async login(correo: string, password: string) {
    if (!correo || !password) {
      throw new BadRequestException('Correo y contraseña son requeridos.');
    }
  
    const cliente = await this.cliente.findUnique({ where: { correo } });
  
    if (!cliente || !cliente.password) {
      throw new UnauthorizedException('Correo o contraseña incorrectos.');
    }
  
    const passwordValid = bcrypt.compareSync(password, cliente.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Correo o contraseña incorrectos.');
    }
  
    return {
      mensaje: 'Login exitoso',
      cliente: {
        id: cliente.id,
        nombre: cliente.nombre,
        correo: cliente.correo,
      },
    };
  }
  

}
