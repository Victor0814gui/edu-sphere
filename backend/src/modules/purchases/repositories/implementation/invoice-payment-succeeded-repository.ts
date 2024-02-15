import { PrismaClient } from "@prisma/client";
import { IInvoicePaymentSucceededRepository } from "../i-invoice-payment-succeeded-repository";


const database = new PrismaClient();

export class InvoicePaymentSucceededRepository
  implements IInvoicePaymentSucceededRepository.Implementation {

  public async create(params: IInvoicePaymentSucceededRepository.Create.Params):
    IInvoicePaymentSucceededRepository.Create.Response {

    const createTransactionResponse = await database.transaction.create({
      data: params,
    })

    return createTransactionResponse;
  };
} 