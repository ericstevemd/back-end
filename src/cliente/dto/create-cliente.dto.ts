import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateClienteDto {

@IsString()
@IsNotEmpty()
  nombre:string
  @IsString()
  Ruc:string
  @IsEmail()
  @IsNotEmpty()
  correo:string 
  @IsString()
  @IsNotEmpty()
  password :string
  @IsString()
  telefono:string
  existe?: boolean; 
}
