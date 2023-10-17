import { PurchaseBusinessException } from "../infra/exceptions/business-exception";
import { IInvoicePaymentFailedUseCase } from "../interfaces/i-invoice-invoice-payment-failed-use-case";






export class InvoicePaymentFailedUseCase
  implements IInvoicePaymentFailedUseCase.Implementation {
  public async execute(params: IInvoicePaymentFailedUseCase.Params):
    IInvoicePaymentFailedUseCase.Response {

    const event = params;
    const eventResponse = event.data.object;
    /**
     * Verificar melhores maneiras de notificar
     * Implementar resposta ao cliente
    */
    console.log(eventResponse);
    throw new PurchaseBusinessException("The purchase operation failed", 500);
  }
};