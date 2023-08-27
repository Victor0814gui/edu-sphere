import { CreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { CustomerValidatorParams } from "../infra/validators/create";
import { ICreateCustomerAccountUseCase } from "../interfaces/i-create-customer-account-use-case";
import { CreateCustomerAccountRepositoryFake } from "../repositories/fakes/create-customer-account-repository-fake";
import { ICreateCustomerAccountRepository } from "../repositories/i-create-customer-repository";
import { CreateCustomerAccountUseCase } from "./create-customer-account-use-case";


let createCustomerAccountUseCase: ICreateCustomerAccountUseCase.Implementation;
let createCustomerAccountRepository: ICreateCustomerAccountRepository.Implementation;
let customerValidatorParams: CustomerValidatorParams;
let createSessionTokenSecurity: CreateSessionTokenSecurity;

describe("Create new Customer", () => {
  it("should be able to create new Customer", async () => {

    customerValidatorParams = new CustomerValidatorParams();
    createSessionTokenSecurity = new CreateSessionTokenSecurity();
    createCustomerAccountRepository = new CreateCustomerAccountRepositoryFake();

    createCustomerAccountUseCase = new CreateCustomerAccountUseCase(
      customerValidatorParams,
      createCustomerAccountRepository,
      createSessionTokenSecurity,
    );

    const createRoomImMemoryRepositoryResult = await createCustomerAccountUseCase.execute({
      avatarUrl: "http://asdjkfçlkasçdlfk.png",
      email: "askjdfçkasdf@gmail.com",
      name: "asdfjlkasd fas df asdfasdf",
      password: "asdjfçklajsdfasdf",
      role: "aksjdçflkasdf"
    })
  })
})