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
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
