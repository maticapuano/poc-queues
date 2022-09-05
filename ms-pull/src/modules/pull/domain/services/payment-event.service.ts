import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";
import { PullEventQueue } from "../enums/pull-event-queue.enum";

@Injectable()
export class PaymentEventService {
  public constructor(
    @InjectQueue(PullEventQueue.PAYMENT) private eventQueue: Queue
  ) {}

  public async requestPayment(): Promise<void> {
    await this.eventQueue.add({});
  }
}
