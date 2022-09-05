import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { EventType } from "../../enums/event-type.enum";
import { EventConsumerType } from "../../enums/pull-event-queue.enum";
import { appendJson } from "./utils/append-json";

@Processor(EventConsumerType.PULL)
export class PullEventConsumer {
  @Process()
  public async processAll({ data: { type, data } }: Job): Promise<void> {
    appendJson(type, data);
  }
}
