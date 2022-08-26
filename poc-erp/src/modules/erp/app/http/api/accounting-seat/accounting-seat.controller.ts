import { AccountingProducer } from '@modules/erp/domain/jobs/producers/accounting/accounting.producer';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAccountingSeatDto } from './dtos/create-accounting-seat.dto';

@Controller('/accounting')
@ApiTags('accounting')
export class AccountingSeat {
  public constructor(private accountingProducer: AccountingProducer) {}

  @Post('/seat')
  @HttpCode(HttpStatus.ACCEPTED)
  public createSeat(@Body() payload: CreateAccountingSeatDto) {
    this.accountingProducer.create(payload);
  }
}
