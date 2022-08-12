import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { PullEventQueue } from '../../enums/pull-event-queue.enum';
import { TodoTokenizationConsumerInterface } from '../../interfaces/todo.interface';

@Processor(PullEventQueue.TOKENIZATION)
export class PullTokenizationConsumer {
  private retryNro = 0;

  @Process()
  public async execute(
    job: Job<TodoTokenizationConsumerInterface>,
  ): Promise<void> {
    // job.data.data.forEach(() => {
    //   if (this.retryNro != 5) {
    //     this.retryNro = job.attemptsMade;

    //     console.log(`Job: ${job.id} retry nro #${job.attemptsMade}`);

    //     throw new Error('Something went wrong');
    //   }
    // });

    console.log(`retry nro ${job.attemptsMade} processed`);

    console.log(job.data.data.find((todo) => todo.id === 1));
  }
}
