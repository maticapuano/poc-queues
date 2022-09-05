import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { PullModule } from "./modules/pull/pull.module";

@Module({
  imports: [
    BullModule.forRoot({
      url: "redis://127.0.0.1:6379",
    }),
    PullModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
