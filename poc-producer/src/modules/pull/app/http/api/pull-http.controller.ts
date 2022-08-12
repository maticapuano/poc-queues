import { PullEventQueue } from '@modules/pull/domain/enums/pull-event-queue.enum';
import { PullTokenizationProducer } from '@modules/pull/domain/jobs/producers/pull-tokenization.producer';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/pull')
export class PullHttpController {
  public constructor(
    private pullTokenizationProducer: PullTokenizationProducer,
  ) {}

  @Get('/:id?')
  public execute(@Param('id') id: number) {
    this.pullTokenizationProducer.execute(id);

    return {
      message: 'Tokenization job has been sent to the queue!',
      queue: PullEventQueue.TOKENIZATION,
    };
  }
}
