import { PrismaClient } from "@prisma/client";
import { ICreateRefreshTokenRepository } from "../i-create-refresh-token-repository";

const client = new PrismaClient();

enum RefreshTokenState {
  Active = "active",
  Expired = "expired",
  Warning = "warning"
}

export class CreateRefreshTokenRepository
  implements ICreateRefreshTokenRepository.Implementation {

  async create(props: ICreateRefreshTokenRepository.Create.Params):
    Promise<ICreateRefreshTokenRepository.Create.Response> {

    const savedRefreshToken = await client.refreshToken.create({
      data: {
        id: crypto.randomUUID(),
        state: RefreshTokenState.Active,
        expiryDate: props.expiryDate,
        refreshToken: crypto.randomUUID(),
      },
    });

    return savedRefreshToken;
  }

  async findById(props: ICreateRefreshTokenRepository.FindUnique.Params):
    Promise<ICreateRefreshTokenRepository.FindUnique.Response | null> {

    const foundRefreshToken = await client.refreshToken.findFirst({
      where: {
        id: props.refreshTokenId,
      },
    });

    return foundRefreshToken;
  }

  async deleteMany(props: ICreateRefreshTokenRepository.DeleteMany.Params):
    Promise<ICreateRefreshTokenRepository.DeleteMany.Response> {
    const response = await client.refreshToken.deleteMany({
      where: {
      },
    });

    return response;
  }
}