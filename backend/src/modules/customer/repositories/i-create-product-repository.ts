import { Product } from "@/src/aplication/entities/product";






interface Permission {
  name: string;
}

export namespace ICreateProductRepository {
  
  export namespace FindByName {
    export type Params  = {
      name: string;
    };

    export type Response = Promise<Product | null>
  }

  export namespace Create {
    export type Params  = Product & {
      permissions: Permission[];
    };

    export type Response = Promise<Product & {
      permissions: Permission[];
    }>
  }

  export type Implementation = {
    findByName: (props: ICreateProductRepository.FindByName.Params) 
    => ICreateProductRepository.FindByName.Response;
    
    create: (props: ICreateProductRepository.Create.Params)
    => ICreateProductRepository.Create.Response;
  }
}