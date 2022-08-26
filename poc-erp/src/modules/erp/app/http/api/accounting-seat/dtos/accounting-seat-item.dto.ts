import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  Min,
  IsOptional,
  IsString,
} from 'class-validator';

export class AccountingSeatItemDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @ApiProperty()
  public accountingSeatId: number;

  @IsNotEmpty()
  @ApiProperty()
  public description: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  public comment: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  public debit: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  public credit: number;
}
