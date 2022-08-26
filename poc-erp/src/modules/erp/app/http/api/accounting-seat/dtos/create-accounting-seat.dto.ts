import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { AccountingSeatItemDto } from './accounting-seat-item.dto';

export class CreateAccountingSeatDto {
  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  public date: Date;

  @IsNotEmpty()
  @IsNotEmpty()
  @ApiProperty()
  public description: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  public debit: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  public credit: number;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => AccountingSeatItemDto)
  @ApiProperty({
    isArray: true,
    type: AccountingSeatItemDto,
  })
  @ValidateNested({ each: true })
  public items: AccountingSeatItemDto[];
}
