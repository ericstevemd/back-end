import { IsNumber } from "class-validator"

export class CreateDetalleFacturaDto {
    @IsNumber()
    facturaId: number;
  
    @IsNumber()
    productoId: number;
  
    @IsNumber()
    cantidad: number;
  
    @IsNumber()
    precioUnitario: number;
  
    @IsNumber()
    subtotal: number;
}
