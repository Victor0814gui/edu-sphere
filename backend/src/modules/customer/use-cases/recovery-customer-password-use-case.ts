import { inject, injectable } from "tsyringe";
import { IRecoveryCustomerPasswordUseCase } from "../interfaces/i-recovery-customer-password-use-case";
import { IRecoveryCustomerPasswordRepository } from "../repositories/i-recovery-customer-password-repository";
import { EmailGateway } from "../infra/gateways/email-gateway";
import { resolve } from "path";

 
@injectable()
export class RecoveryCustomerPasswordUseCase
  implements IRecoveryCustomerPasswordUseCase.Implementation{
    constructor(
      @inject("RecoveryCustomerPasswordRepository")
      private recoveryCustomerPasswordRepository: IRecoveryCustomerPasswordRepository.Implementation,
      @inject("EmailGateway")
      private emailGateway: EmailGateway
    ){}
  public async execute(params: IRecoveryCustomerPasswordUseCase.Params):
  IRecoveryCustomerPasswordUseCase.Response{

    const templatePath = resolve(
      __dirname,
      "..",
      "views",
      "emails",
      "recovery-password.hbs"
    );


    const verifyCustomerAlreadyExists =  
      await this.recoveryCustomerPasswordRepository.findCustomer({
        email: params.email,
      })

    await this.emailGateway.send({
      email: params.email,
      subject: "código de verificação EduSphere",
      path: templatePath,
      variables:{
        link: process.env.FRONTEND_HOST_RECOVERY_PASSWORD,
        name: verifyCustomerAlreadyExists?.name,
      }
    })

    const response = {} as IRecoveryCustomerPasswordUseCase.Response;
    return response;
  }
}