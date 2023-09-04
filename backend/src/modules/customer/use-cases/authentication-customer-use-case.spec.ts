import crypto from "crypto";
import { CreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { CustomerValidatorParams } from "../infra/validators/create";
import { ICreateCustomerAccountUseCase } from "../interfaces/i-create-customer-account-use-case";
import { CreateCustomerAccountRepositoryFake } from "../repositories/fakes/create-customer-account-repository-fake";
import { ICreateCustomerAccountRepository } from "../repositories/i-create-customer-account-repository";
import { CreateCustomerAccountUseCase } from "./create-customer-account-use-case";
import { Customer } from "@/src/aplication/entities/user";
import { ICreateUUIDTokenService } from "../infra/services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../infra/services/contracts/i-create-new-date-service";
import { CreateUUIDTokenService } from "../infra/services/create-uuid-token-service";
import { CreateNewDateService } from "../infra/services/create-new-date-service";


let createCustomerAccountUseCase: ICreateCustomerAccountUseCase.Implementation;
let createCustomerAccountRepository: ICreateCustomerAccountRepository.Implementation;
let createUUIDTokenService: ICreateUUIDTokenService.Implementation;
let createNewDateService: ICreateNewDateService.Implementation;

let customerValidatorParams: CustomerValidatorParams;
let customerId: string;
let subscriptionId: string;
let customerData: Customer;

describe("Create new Customer", () => {
  it("should be able to create new Customer", async () => {

    customerValidatorParams = new CustomerValidatorParams();
    createCustomerAccountRepository = new CreateCustomerAccountRepositoryFake();
    createUUIDTokenService = new CreateUUIDTokenService();
    createNewDateService = new CreateNewDateService();


    createCustomerAccountUseCase = new CreateCustomerAccountUseCase(
      customerValidatorParams,
      createCustomerAccountRepository,
      createUUIDTokenService,
      createNewDateService,
    );

    customerId = crypto.randomUUID();
    subscriptionId = crypto.randomUUID();

    customerData = {
      id: customerId,
      name: "asdfa asdf asdfa sdfas",
      email: "asdfasdfasdf@gmail.com",
      password: "asdfasdfasdfasdfasdf",
      createdAt: new Date(),
      updatedAt: null,
      avatarUrl: "https://fasdfasdfasdfasdfadsf.com/image.png",
      roleName: "customer",
      subscriptionId: subscriptionId,
    }

    const createRoomImMemoryRepositoryResult = await createCustomerAccountUseCase.execute({
      avatarUrl: customerData.avatarUrl,
      email: customerData.email,
      name: customerData.name,
      password: customerData.password,
      role: customerData.roleName,
      subscriptionId: subscriptionId,
    })

    expect(createRoomImMemoryRepositoryResult)
      .toEqual(customerData)

  })
})