import { CreateAccountingSeatDto } from '@modules/erp/app/http/api/accounting-seat/dtos/create-accounting-seat.dto';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { ErpEventQueue } from '../../enums/erp-event-queue.enum';

@Injectable()
export class AccountingProducer {
  public constructor(
    @InjectQueue(ErpEventQueue.ACCOUNTING_SEAT) private accountingQueue: Queue,
  ) {}

  public create(data: CreateAccountingSeatDto): void {
    this.accountingQueue.add({
      data,
    });
  }
}
