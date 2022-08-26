import { InvoiceLetterType } from '@modules/erp/domain/enums/invoice-letter-type.enum';
import { InvoiceType } from '@modules/erp/domain/enums/invoice-type.enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

export class CreateInvoiceDto {
  @ApiProperty({
    enum: InvoiceType,
  })
  @IsNotEmpty()
  @IsEnum(InvoiceType)
  public type: InvoiceType;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  public date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  public customerId: number;

  @ApiProperty({
    enum: InvoiceLetterType,
  })
  @IsNotEmpty()
  @IsEnum(InvoiceLetterType)
  public letter: InvoiceLetterType;

  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  public invoicePointNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  public invoiceNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested({
    each: true,
  })
  public items: NoteInvoiceItemEntity[];
}

export class NoteInvoiceItemEntity {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  public quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  public price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public taxPercentage: number;
}
