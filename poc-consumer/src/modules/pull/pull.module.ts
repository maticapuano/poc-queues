import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { PullEventQueue } from './domain/enums/pull-event-queue.enum';
import { PullTokenizationConsumer } from './domain/jobs/consumers/pull-tokenization.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: PullEventQueue.TOKENIZATION,
    }),
  ],
  providers: [PullTokenizationConsumer],
})
export class PullModule {}
