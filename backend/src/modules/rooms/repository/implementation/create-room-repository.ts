import { injectable, inject } from "tsyringe";
import { ICreateRoomRepository } from "../i-create-room-repository";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();



export class CreateRoomRepository implements ICreateRoomRepository.Implementation {
  async create(props: ICreateRoomRepository.Create.Params): Promise<ICreateRoomRepository.Create.Response> {
    const responseQuestions: ICreateRoomRepository.Create.Response = {
      id: crypto.randomUUID(),
      name: props.name,
      teacherId: props.teacherId,
      description: props.description,
      createdAt: new Date(),
      studentList: [],
      title: props.title,
      updatedAt: null
    }
    return responseQuestions;
  }

  async update(props: ICreateRoomRepository.Update.Params): Promise<ICreateRoomRepository.Update.Response> {
    const responseQuestions: ICreateRoomRepository.Update.Response = {
      id: crypto.randomUUID(),
      name: props.name,
      teacherId: props.teacherId,
      description: props.description,
      createdAt: new Date(),
      studentList: [],
      title: props.title,
      updatedAt: null
    }
    return responseQuestions;
  }

  async delete(props: ICreateRoomRepository.Delete.Params):
    Promise<ICreateRoomRepository.Delete.Response> {

    const response = {} as Promise<ICreateRoomRepository.Delete.Response>;
    return response;
  }
  async listMany(props: ICreateRoomRepository.ListMany.Params):
    Promise<ICreateRoomRepository.ListMany.Response> {

    const response = {} as Promise<ICreateRoomRepository.ListMany.Response>;
    return response;
  }

  async listUnique(props: ICreateRoomRepository.ListUnique.Params):
    Promise<ICreateRoomRepository.ListUnique.Response> {

    const response = {} as Promise<ICreateRoomRepository.ListUnique.Response>;
    return response;
  }

}