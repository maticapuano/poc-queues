import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { PullModule } from './modules/pull/pull.module';

@Module({
  imports: [
    PullModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
      defaultJobOptions: {
        attempts: 6,
        backoff: 1000,
        removeOnComplete: true,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
