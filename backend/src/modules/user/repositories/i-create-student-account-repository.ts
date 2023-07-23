import { Permission } from "../../../aplication/entities/permission";




export namespace ICreateStudentAccountRepository {

  export namespace FindUniqueRole {
    export interface Params {
      level: number;
    }

    export interface Response {
      id: string;
      name: string;
      level: number;
      description: string;
      createdAt: Date;
      updatedAt: Date | null;
    }
  }

  export namespace FindPermissions {
    export interface Params {
    }

    export interface Response extends Array<Permission> { }
  }

  export namespace FindUnique {
    export interface Params {
      id: string;
    }

    export interface Response {
      id: string;
      name: string;
      email: string;
      createtAt: Date;
      udpatedAt: Date | null;
      avatarUrl: string;
      password: string;
    }
  }

  export namespace Create {
    export interface Params {
      name: string;
      email: string;
      password: string
      avatarUrl: string;
      level: number
    }

    export interface Response {
      id: string;
      name: string;
      email: string;
      password: string;
      createtAt: Date;
    }
  }

  export interface Implementation {
    findPermissions: (props: FindPermissions.Params) => Promise<FindPermissions.Response | null>
    findUniqueRole: (props: FindUniqueRole.Params) => Promise<FindUniqueRole.Response | null>
    findUnique: (props: FindUnique.Params) => Promise<FindUnique.Response | null>
    create: (props: Create.Params) => Promise<Create.Response>
  }
}