import { IsString } from "class-validator"

export class CreateClienteDto {

@IsString()
  nombre:string
  @IsString()
  Ruc:string
  @IsString()
  correo:string 
  @IsString()
  telefono:string
}
