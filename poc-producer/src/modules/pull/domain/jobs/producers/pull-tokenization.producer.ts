import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import axios from 'axios';
import { PullEventQueue } from '../../enums/pull-event-queue.enum';
import { TodoInterface } from '../../interfaces/todo.interface';

@Injectable()
export class PullTokenizationProducer {
  public constructor(
    @InjectQueue(PullEventQueue.TOKENIZATION)
    private tokenizationQueue: Queue,
  ) {}

  public async execute(id: number): Promise<void> {
    const baseUrl = `https://jsonplaceholder.typicode.com`;
    const { data: todos } = await axios.get<TodoInterface>(`${baseUrl}/todos`, {
      params: {
        id,
      },
    });
    const results = {
      type: 'tokenizations',
      data: !Array.isArray(todos) ? [todos] : todos,
    };

    const delayFactor = 1000;
    const seconds = 3;
    const delayInMsSeconds = seconds * delayFactor;

    this.tokenizationQueue.add(results, {
      delay: delayInMsSeconds,
    });
  }
}
