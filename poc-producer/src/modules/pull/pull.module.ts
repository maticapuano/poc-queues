import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { PullHttpController } from './app/http/api/pull-http.controller';
import { PullEventQueue } from './domain/enums/pull-event-queue.enum';
import { PullTokenizationProducer } from './domain/jobs/producers/pull-tokenization.producer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: PullEventQueue.TOKENIZATION,
    }),
  ],
  controllers: [PullHttpController],
  providers: [PullTokenizationProducer],
})
export class PullModule {}
