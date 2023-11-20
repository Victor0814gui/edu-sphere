import { Transaction } from "@/src/shared/application/entities/transaction";
import { IInvoicePaymentSucceededUseCase } from "../interfaces/i-invoice-payment-succeeded-use-case"
import { IInvoicePaymentSucceededRepository } from "../repositories/i-invoice-payment-succeeded-repository";
import { InvoicePaymentSucceededRepository } from "../repositories/implementation/invoice-payment-succeeded-repository";
import { InvoicePaymentSucceededUseCase } from "./invoice-payment-succeeded-use-case";

type TransactionParams = {
  userId: string;
  paymentIntent?: string | null
  subscriptionId?: string | null
  amount: number;
  currency: string
}
let transaction: TransactionParams;
let transactionResult: Transaction;
let invoicePaymentSucceededUseCase: IInvoicePaymentSucceededUseCase.Implementation;
let invoicePaymentSucceededRepository: IInvoicePaymentSucceededRepository.Implementation;
let invoicePaymentSucceededUseCaseResponse: Transaction | null;

describe("Invoice Payment Succeeded Customer Account", () => {
  it("It should be possible to authorize customer account", async () => {

    invoicePaymentSucceededRepository = new InvoicePaymentSucceededRepository();
    invoicePaymentSucceededUseCase = new InvoicePaymentSucceededUseCase(
      invoicePaymentSucceededRepository
    )

    transaction = {
      amount: 1900,
      currency: "asdfasdfadsf",
      userId: "addfasdfasdf",
      paymentIntent: "qerqwerqwer",
      subscriptionId: "sdflkasdfkjasdf",
    }

    invoicePaymentSucceededUseCaseResponse =
      await invoicePaymentSucceededUseCase.execute(transaction);

    expect(invoicePaymentSucceededUseCaseResponse)
      .toEqual(transactionResult)

  })
})