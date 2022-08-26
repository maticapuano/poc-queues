import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { ErpEventQueue } from '../../enums/erp-event-queue.enum';
import { CreateCustomer } from '../../../interfaces/create-customer.interface';
import { CustomerOperationType } from './enums/customer-operation-type.enum';

@Injectable()
export class CustomerProducer {
  public constructor(
    @InjectQueue(ErpEventQueue.CUSTOMER) private customerQueue: Queue,
  ) {}

  public create(data: CreateCustomer): void {
    this.customerQueue.add({
      data,
    });
  }

  public findByTaxId(taxId: string): void {
    this.customerQueue.add(CustomerOperationType.FIND_BY_TAX_ID, taxId);
  }
}
