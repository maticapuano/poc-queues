import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AccountingSeat } from './app/http/api/accounting-seat/accounting-seat.controller';
import { CustomerController } from './app/http/api/customers/customer.controller';
import { InvoiceController } from './app/http/api/invoices/invoices.controller';
import { ErpEventQueue } from './domain/jobs/enums/erp-event-queue.enum';
import { AccountingProducer } from './domain/jobs/producers/accounting/accounting.producer';
import { CustomerProducer } from './domain/jobs/producers/customers/customer.producer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: ErpEventQueue.CUSTOMER,
    }),
    BullModule.registerQueue({
      name: ErpEventQueue.ACCOUNTING_SEAT,
    }),
  ],
  controllers: [CustomerController, AccountingSeat, InvoiceController],
  providers: [CustomerProducer, AccountingProducer],
})
export class ErpModule {}
