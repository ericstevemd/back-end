import { IsNumber, IsString } from 'class-validator';
export class CreateProductoDto {
@IsString()

    nombre:string
    @IsNumber()
    precio: number

    @IsNumber()
    stock:number

}
