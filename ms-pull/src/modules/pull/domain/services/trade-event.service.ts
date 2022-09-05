import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";
import { PullEventQueue } from "../enums/pull-event-queue.enum";

@Injectable()
export class TradeEventService {
  public constructor(
    @InjectQueue(PullEventQueue.TRADE) private eventQueue: Queue
  ) {}

  public async requestTrade(): Promise<void> {
    await this.eventQueue.add({});
  }
}
