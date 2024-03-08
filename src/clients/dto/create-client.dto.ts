import { IsBoolean, IsNotEmpty, IsOptional, Max, Min } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @Min(50)
  @Max(1000)
  dataLimit: number;

  @IsBoolean()
  @IsOptional()
  hasCable?: boolean;
}
