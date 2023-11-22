import { randomUUID } from "crypto";
import { Customer } from "@/src/shared/application/entities/user";
import { ICustomerAuthorizationAccountUseCase } from "../interfaces/i-customer-authorization-account-use-case";
import { ICustomerAuthorizationAccountRepository } from "../repositories/i-customer-authorization-account-repository";
import { CustomerAuthorizationAccountUseCase } from "./customer-authorization-account-use-case";

let customer: Customer;
let token: string;
let customerAuthorizationAccountUseCase: ICustomerAuthorizationAccountUseCase.Implementation;
let customerAuthorizationAccountRepositoryFake: ICustomerAuthorizationAccountRepository.Implementation;

describe("Authorization Customer Account", () => {
  it("It should be possible to authorize customer account", async () => {

    customerAuthorizationAccountRepositoryFake = new CreateCustomerAccountRepositoryFake();
    customerAuthorizationAccountUseCase = new CustomerAuthorizationAccountUseCase(
      customerAuthorizationAccountRepositoryFake,
    );

    token = randomUUID();

    const result = await customerAuthorizationAccountUseCase.execute({
      token,
    })

    expect(result)
      .toEqual(customer)

  })
})