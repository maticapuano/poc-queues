import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateInvoiceDto } from './dtos/create-invoice.dto';

@Controller('/invoices')
@ApiTags('invoices')
export class InvoiceController {
  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  public create(@Body() data: CreateInvoiceDto) {
    return data;
  }
}
