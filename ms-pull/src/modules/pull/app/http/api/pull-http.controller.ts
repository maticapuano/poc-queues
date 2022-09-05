import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiAcceptedResponse, ApiTags } from "@nestjs/swagger";
import { TokenizationEventService } from "src/modules/pull/domain/services/tokenization-event.service";
import { TradeEventService } from "src/modules/pull/domain/services/trade-event.service";
import { PaymentEventService } from "src/modules/pull/domain/services/payment-event.service";

@Controller("/pull")
@ApiTags("pull")
export class PullHttpController {
  public constructor(
    private tokenizationEventService: TokenizationEventService,
    private transactionEventService: PaymentEventService,
    private tradeEventService: TradeEventService
  ) {}

  @Get("/tokenizations")
  @ApiAcceptedResponse({
    description: "Event tokenization has been published successfully",
  })
  @HttpCode(HttpStatus.ACCEPTED)
  public async executeByTokenizations(): Promise<void> {
    await this.tokenizationEventService.requestTokenization();
  }

  @Get("/payments")
  @ApiAcceptedResponse({
    description: "Event payment has been published successfully",
  })
  @HttpCode(HttpStatus.ACCEPTED)
  public async executeByPayments(): Promise<void> {
    await this.transactionEventService.requestPayment();
  }

  @Get("/trade")
  @ApiAcceptedResponse({
    description: "Event trade has been published successfully",
  })
  @HttpCode(HttpStatus.ACCEPTED)
  public async executeByTrade(): Promise<void> {
    await this.tradeEventService.requestTrade();
  }
}
