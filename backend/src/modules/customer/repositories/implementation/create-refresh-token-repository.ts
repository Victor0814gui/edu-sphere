import { PrismaClient } from "@prisma/client";
import { ICreateRefreshTokenRepository } from "../i-create-refresh-token-repository";

const database = new PrismaClient();

export class CreateRefreshTokenRepository
  implements ICreateRefreshTokenRepository.Implementation {

  async create(props: ICreateRefreshTokenRepository.Create.Params):
    ICreateRefreshTokenRepository.Create.Response {

    const savedRefreshToken = await database.refreshToken.create({
      data: {
        id: props.id,
        state: props.state,
        expiryDate: props.expiryDate,
        refreshToken: props.refreshToken,
        customerId: props.customerId,
      },
    });

    return savedRefreshToken;
  }

  async findByIdUser(props: ICreateRefreshTokenRepository.FindUniqueUser.Params):
    ICreateRefreshTokenRepository.FindUniqueUser.Response {

    const foundRefreshToken = await database.user.findFirst({
      where: {
        id: props.customerId,
      },
      include: {
        refreshTokens: true,
      }
    });

    foundRefreshToken

    return foundRefreshToken?.refreshTokens!;
  }

  async deleteMany(props: ICreateRefreshTokenRepository.DeleteMany.Params):
    ICreateRefreshTokenRepository.DeleteMany.Response {

    await database.refreshToken.deleteMany({
      where: {
      },
    });
  }
}