import crypto from "crypto";
import { inject, injectable } from "tsyringe"
import { CustomerBusinessException } from "@customer/infra/exceptions/business-exception";
import { ICreateCustomerAccountRepository } from "../repositories/i-create-customer-account-repository";
import { ICreateCustomerAccountUseCase } from "../interfaces/i-create-customer-account-use-case";
import { AccountStatusEnum } from "../interfaces/enums/account-status-enum";
import { ICreateUUIDTokenService } from "../infra/services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../infra/services/contracts/i-create-new-date-service";
import { IEncryptDataService } from "../infra/services/contracts/i-encrypt-data-service";
import { PurchaseBusinessException } from "../../purchases/infra/exceptions/business-exception";
import { EmailGateway } from "../infra/gateways/email-gateway";


function generateAlphanumericCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  return code;
}

@injectable()
export class CreateCustomerAccountUseCase
  implements ICreateCustomerAccountUseCase.Implementation {
  constructor(
    @inject("CreateCustomerAccountRepository")
    private createCustomerAccountRepository: ICreateCustomerAccountRepository.Implementation,
    @inject("CreateUUIDTokenService")
    private createUUIDTokenService: ICreateUUIDTokenService.Implementation,
    @inject("CreateNewDateService")
    private createNewDateService: ICreateNewDateService.Implementation,
    @inject("EncryptDataService")
    private encryptDataService: IEncryptDataService.Implementation,
  ) { }

  public async execute(props: ICreateCustomerAccountUseCase.Params):
    ICreateCustomerAccountUseCase.Response {

    if (!props.name || !props.email || !props.avatarUrl || !props.password) {
      throw new PurchaseBusinessException("data is missin", 403);
    }

    const verifyCustomerAlreadyExists =
      await this.createCustomerAccountRepository.findUnique({
        email: props.email
      });

    if (verifyCustomerAlreadyExists?.id) {
      throw new CustomerBusinessException("Customer already exists", 400);
    }

    const customerId = this.createUUIDTokenService.create();
    const createNewDate = this.createNewDateService.create();

    const passwordHash = await this.encryptDataService.execute(props.password);

    if (!passwordHash) {
      throw new CustomerBusinessException("Hash password error", 400);
    }

    const createCustomerAccountResponse =
      await this.createCustomerAccountRepository.create({
        ...props,
        id: customerId,
        password: passwordHash,
        createdAt: createNewDate,
        status: AccountStatusEnum.Pending,
      });

    const code = generateAlphanumericCode();

    await this.createCustomerAccountRepository.code({
      id: crypto.randomUUID(),
      code,
      createdAt: new Date(),
      userId: createCustomerAccountResponse.id,
      activatedAt: null,
    });

    const emailGateway = new EmailGateway();
    await emailGateway.send({
      email: props.email,
      subject: "codigo de verificação",
      text: "seu codigo não deve ser compartilhado com mais ninguém",
      code,
    })

    return createCustomerAccountResponse;
  }
}