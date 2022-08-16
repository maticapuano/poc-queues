import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { PullEventQueue } from '../../enums/pull-event-queue.enum';
import { TodoTokenizationConsumerInterface } from '../../interfaces/todo.interface';

@Processor(PullEventQueue.TOKENIZATION)
export class PullTokenizationConsumer {
  @Process()
  public async execute(
    job: Job<TodoTokenizationConsumerInterface>,
  ): Promise<void> {
    let retryNro = job.attemptsMade;

    job.data.data.forEach(() => {
      if (retryNro != 3) {
        console.log(`Job: ${job.id} retry nro #${job.attemptsMade}`);

        throw new Error('Something went wrong');
      }
    });

    console.log(`retry nro ${job.attemptsMade} processed`);

    console.log(job.data.data.find((todo) => todo.id === 1));

    retryNro = 0;
  }
}
