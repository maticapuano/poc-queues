import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ErpModule } from './modules/erp/erp.module';

@Module({
  imports: [
    ErpModule,
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
