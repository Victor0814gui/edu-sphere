import crypto from "crypto";
import { CreateSessionTokenSecurity, ICreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { ICreateCustomerAccountUseCase } from "../interfaces/i-create-customer-account-use-case";
import { ICreateCustomerAccountRepository } from "../repositories/i-create-customer-account-repository";
import { CreateCustomerAccountUseCase } from "./create-customer-account-use-case";
import { Customer } from "@/src/shared/application/entities/user";
import { ICreateUUIDTokenService } from "../infra/services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../infra/services/contracts/i-create-new-date-service";
import { CreateUUIDTokenService } from "../infra/services/create-uuid-token-service";
import { IAuthenticationCustomerRepository } from "../repositories/i-authentication-customer-repository";
import { IGenerateRefreshToken } from "../infra/security/contracts/i-create-refresh-tocken-security";
import { ICompareEncryptDataService } from "../infra/services/contracts/i-compare-encrypt-data-service";
import { CompareEncryptDataService } from "../infra/services/compare-encrypt-data-service";
import { GenerateRefreshToken } from "../infra/security/create-refresh-token-security";
import { AuthenticationCustomerRepository } from "../repositories/implementation/authentication-customer-repository";
import { IEncryptDataService } from "../infra/services/contracts/i-encrypt-data-service";
import { ICreateRefreshTokenRepository } from "@customer/repositories/i-create-refresh-token-repository";
import { CreateRefreshTokenRepository } from "../repositories/implementation/create-refresh-token-repository";


let createCustomerAccountUseCase: ICreateCustomerAccountUseCase.Implementation;
let authenticationCustomerRepository: IAuthenticationCustomerRepository.Implementation;
let createSessionTokenSecurity: ICreateSessionTokenSecurity.Implementation;
let generateRefreshToken: IGenerateRefreshToken.Implementation;
let compareEncryptDataService: ICompareEncryptDataService.Implementation;



let createRefreshTokenRepository: ICreateRefreshTokenRepository.Implementation;
let createCustomerAccountRepository: ICreateCustomerAccountRepository.Implementation;
let createUUIDTokenService: ICreateUUIDTokenService.Implementation;
let createNewDateService: ICreateNewDateService.Implementation;
let encryptDataService: IEncryptDataService.Implementation;


let customerId: string;
let subscriptionId: string;
let customerData: Customer;

describe("Create new Customer", () => {
  it("It should not be possible to create a client without data", async () => {

    authenticationCustomerRepository = new AuthenticationCustomerRepository();
    createSessionTokenSecurity = new CreateSessionTokenSecurity();
    createRefreshTokenRepository = new CreateRefreshTokenRepository()
    createUUIDTokenService = new CreateUUIDTokenService();
    generateRefreshToken = new GenerateRefreshToken(
      createRefreshTokenRepository,
      createUUIDTokenService,
    );
    compareEncryptDataService = new CompareEncryptDataService();


    createCustomerAccountUseCase = new CreateCustomerAccountUseCase(
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
    }

    const createRoomImMemoryRepositoryResult = await createCustomerAccountUseCase.execute({
      avatarUrl: customerData.avatarUrl,
      email: customerData.email,
      name: customerData.name,
      password: customerData.password,
    })

    expect(createRoomImMemoryRepositoryResult)
      .toEqual(customerData)

  })
})