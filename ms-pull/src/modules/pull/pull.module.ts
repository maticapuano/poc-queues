import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { PullHttpController } from "./app/http/api/pull-http.controller";
import {
  EventConsumerType,
  PullEventQueue,
} from "./domain/enums/pull-event-queue.enum";
import { PullEventConsumer } from "./domain/jobs/consumers/pull.consumer";
import { TokenizationEventService } from "./domain/services/tokenization-event.service";
import { TradeEventService } from "./domain/services/trade-event.service";
import { PaymentEventService } from "./domain/services/payment-event.service";

@Module({
  imports: [
    BullModule.registerQueue({
      name: PullEventQueue.TOKENIZATION,
    }),
    BullModule.registerQueue({
      name: PullEventQueue.PAYMENT,
    }),
    BullModule.registerQueue({
      name: PullEventQueue.TRADE,
    }),
    BullModule.registerQueue({
      name: EventConsumerType.PULL,
    }),
  ],
  controllers: [PullHttpController],
  providers: [
    TokenizationEventService,
    PaymentEventService,
    TradeEventService,
    PullEventConsumer,
  ],
})
export class PullModule {}
