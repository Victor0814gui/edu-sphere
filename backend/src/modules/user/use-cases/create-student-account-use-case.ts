import { ICreateUserAccountRepository } from "../repositories/i-create-student-account-repository";


namespace ICreateStudentAccountUseCaseParams {
  export interface Params {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }
}


export class CreateStudentAccountUseCase {
  constructor(
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation
  ) { }
  async execute(props: ICreateStudentAccountUseCaseParams.Params) {

  }
}