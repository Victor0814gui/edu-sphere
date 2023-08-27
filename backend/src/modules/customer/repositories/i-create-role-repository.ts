import { Role } from "@/src/aplication/entities/role";








export namespace ICreateRoleRepository {


  export namespace FindUnique {
    export interface Params {
      name: string;
    }
    export interface Response extends Role { }
  }

  export namespace Create {
    export interface Params {
      id: string;
      name: string;
      description: string;
      level: number;
      createdAt: Date;
    }
    export interface Response extends Role { }
  }

  export namespace Delete {
    export interface Params {
      name: string;
    }
    export interface Response { }
  }

  export namespace List {
    export interface Params { }

    export interface Response extends Array<Role> { }
  }

  export interface Implementation {
    delete: (props: Delete.Params) => Promise<Delete.Response>;
    findUnique: (props: FindUnique.Params) => Promise<FindUnique.Response | null>;
    create: (props: Create.Params) => Promise<Create.Response>;
    list: (props: List.Params) => Promise<List.Response | null>;
  }
}