import { randomUUID } from "crypto";
import { inject, injectable } from "tsyringe";
import { IInvoicePaymentSucceededUseCase } from "@purchases/interfaces/i-invoice-payment-succeeded-use-case";
import { IInvoicePaymentSucceededRepository } from "../repositories/i-invoice-payment-succeeded-repository";


@injectable()
export class InvoicePaymentSucceededUseCase
  implements IInvoicePaymentSucceededUseCase.Implementation {
  constructor(
    @inject("InvoicePaymentSucceededUseCase")
    private invoicePaymentSucceededUseCase: IInvoicePaymentSucceededRepository.Implementation,
  ) { }
  public async execute(params: IInvoicePaymentSucceededUseCase.Params):
    IInvoicePaymentSucceededUseCase.Response {

    const invoicePaymentSucceededUseCaseResponse =
      await this.invoicePaymentSucceededUseCase.create({
        ...params,
        id: randomUUID(),
        createdAt: new Date(),
        status: "active",
      });

    return invoicePaymentSucceededUseCaseResponse;
  };
}