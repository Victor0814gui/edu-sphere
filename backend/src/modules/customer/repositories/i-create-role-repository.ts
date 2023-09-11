import { Role } from "@/src/aplication/entities/role";








export namespace ICreateRoleRepository {

  export namespace FindUnique {
    export type Params = {
      name: string;
    }
    export type Response = Promise<Role | null>;
  }

  export namespace Create {
    export type Params = {
      id: string;
      name: string;
      description: string;
      level: number;
      createdAt: Date;
    }
    export type Response = Promise<Role>;
  }

  export namespace Delete {
    export type Params = {
      name: string;
    }
    export type Response = Promise<Role>;
  }

  export namespace List {
    export type Params = void;

    export type Response = Promise<Role[]>
  }

  export type Implementation = {
    delete: (props: ICreateRoleRepository.Delete.Params)
      => ICreateRoleRepository.Delete.Response;
    findUnique: (props: ICreateRoleRepository.FindUnique.Params)
      => ICreateRoleRepository.FindUnique.Response;
    create: (props: ICreateRoleRepository.Create.Params)
      => ICreateRoleRepository.Create.Response;
    list: (props: ICreateRoleRepository.List.Params)
      => ICreateRoleRepository.List.Response
  }
}