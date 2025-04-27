import { IsEmail, IsNotEmpty, IsOptional, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateClienteDto {

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  ruc: string;

  @IsString()
  @IsOptional()
  dv?: string;

  @IsString()
  @IsNotEmpty()
  graphicRepresentationName: string;

  @IsString()
  @IsOptional()
  tradeName?: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;

  @IsString()
  @IsNotEmpty()
  direccion: string;

  @IsString()
  @IsOptional()
  company?: string;

  @IsBoolean()
  @IsOptional()
  existe?: boolean;

  @IsNumber()
  @IsNotEmpty()
  legalOrganizationId: number;

  @IsNumber()
  @IsNotEmpty()
  tributeId: number;

  @IsNumber()
  @IsNotEmpty()
  municipalityId: number;
}
