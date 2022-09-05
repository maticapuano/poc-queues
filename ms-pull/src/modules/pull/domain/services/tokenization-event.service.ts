import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";
import { PullEventQueue } from "../enums/pull-event-queue.enum";

@Injectable()
export class TokenizationEventService {
  public constructor(
    @InjectQueue(PullEventQueue.TOKENIZATION) private eventQueue: Queue
  ) {}

  public async requestTokenization(): Promise<void> {
    await this.eventQueue.add({});
  }
}
