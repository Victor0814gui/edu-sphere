import crypto from "crypto";
import { CreateSessionTokenSecurity, ICreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
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
import { IAuthenticationCustomerRepository } from "../repositories/i-authentication-customer-repository";
import { IGenerateRefreshToken } from "../infra/security/contracts/i-create-refresh-tocken-security";
import { ICompareEncryptDataService } from "../infra/services/contracts/i-compare-encrypt-data-service";
import { CompareEncryptDataService } from "../infra/services/compare-encrypt-data-service";
import { GenerateRefreshToken } from "../infra/security/create-refresh-token-security";
import { AuthenticationCustomerRepository } from "../repositories/implementation/authentication-customer-repository";
import { IAuthenticationCustomerUserCase } from "../interfaces/i-authenticate-customer-use-case";
import { IEncryptDataService } from "../infra/services/contracts/i-encrypt-data-service";

let createCustomerAccountUseCase: ICreateCustomerAccountUseCase.Implementation;
let authenticationCustomerRepository: IAuthenticationCustomerRepository.Implementation;
let createSessionTokenSecurity: ICreateSessionTokenSecurity.Implementation;
let generateRefreshToken: IGenerateRefreshToken.Implementation;
let compareEncryptDataService: ICompareEncryptDataService.Implementation;



let customerValidatorParams: CustomerValidatorParams;
let createCustomerAccountRepository: ICreateCustomerAccountRepository.Implementation;
let createUUIDTokenService: ICreateUUIDTokenService.Implementation;
let createNewDateService: ICreateNewDateService.Implementation;
let encryptDataService: IEncryptDataService.Implementation;


let customerId: string;
let subscriptionId: string;
let customerData: Customer;

describe("Create new Customer", () => {
  it("should be able to create new Customer", async () => {

    authenticationCustomerRepository = new AuthenticationCustomerRepository();
    createSessionTokenSecurity = new CreateSessionTokenSecurity();
    generateRefreshToken = new GenerateRefreshToken();
    compareEncryptDataService = new CompareEncryptDataService();


    createCustomerAccountUseCase = new CreateCustomerAccountUseCase(
      customerValidatorParams,
      createCustomerAccountRepository,
      createUUIDTokenService,
      createNewDateService,
      encryptDataService,
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
    }

    const createRoomImMemoryRepositoryResult = await createCustomerAccountUseCase.execute({
      avatarUrl: customerData.avatarUrl,
      email: customerData.email,
      name: customerData.name,
      password: customerData.password,
      role: customerData.roleName,
    })

    expect(createRoomImMemoryRepositoryResult)
      .toEqual(customerData)

  })
})