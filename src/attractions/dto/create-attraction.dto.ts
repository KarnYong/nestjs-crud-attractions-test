import { IsNotEmpty } from 'class-validator';

export class CreateAttractionDto {
  @IsNotEmpty()
  readonly name: string;
  
  @IsNotEmpty()
  readonly detail: string;

  @IsNotEmpty()
  readonly coverimage: string;
  
  @IsNotEmpty()
  readonly latitude: number;
  
  @IsNotEmpty()
  readonly longitude: number;
}
