import { IsDateString, IsNumber } from 'class-validator';
export class CreateFacturaDto {
    @IsDateString()
    fecha 
    @IsNumber()     
    total     
}
