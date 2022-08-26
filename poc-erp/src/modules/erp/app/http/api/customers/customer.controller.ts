import { CustomerProducer } from '@modules/erp/domain/jobs/producers/customers/customer.producer';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateCustomerDto,
  CustomerFilterDto,
} from './dtos/create-customer.dto';

@Controller('/customers')
@ApiTags('customers')
export class CustomerController {
  public constructor(private customerProducer: CustomerProducer) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  public create(@Body() payload: CreateCustomerDto): void {
    this.customerProducer.create(payload);
  }

  @Get('/')
  @HttpCode(HttpStatus.ACCEPTED)
  public getByTaxId(@Query() payload: CustomerFilterDto): void {
    this.customerProducer.findByTaxId(payload.taxId);
  }
}
