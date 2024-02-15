import { randomUUID } from "crypto";
import { inject, injectable } from "tsyringe";
import { IInvoicePaymentSucceededUseCase } from "@purchases/interfaces/i-invoice-payment-succeeded-use-case";
import { IInvoicePaymentSucceededRepository } from "../repositories/i-invoice-payment-succeeded-repository";
import stripe from "stripe";


@injectable()
export class InvoicePaymentSucceededUseCase
  implements IInvoicePaymentSucceededUseCase.Implementation {
  constructor(
    @inject("InvoicePaymentSucceededRepository")
    private invoicePaymentSucceededRepository: IInvoicePaymentSucceededRepository.Implementation,
  ) { }
  public async execute(params: IInvoicePaymentSucceededUseCase.Params):
  IInvoicePaymentSucceededUseCase.Response{
  const invoicePaymentSucceededUseCaseResponse = {} as IInvoicePaymentSucceededUseCase.Response

    console.log({
      invoicePaymentSucceededUseCaseResponse: params
    });
    // const invoicePaymentSucceededUseCaseResponse =
    //   await this.invoicePaymentSucceededUseCase.create({
    //     ...params,
    //     id: randomUUID(),
    //     createdAt: new Date(),
    //     status: "active",
    //   });

    return invoicePaymentSucceededUseCaseResponse;
  };
}