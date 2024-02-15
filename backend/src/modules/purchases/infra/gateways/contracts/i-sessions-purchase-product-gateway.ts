import { PaymentIntent as PaymentIntentType } from "@/src/shared/application/entities/payment-intent"

import { ProductStatus } from "@/src/shared/application/entities/enums/i-product-status";
import { Product } from "@/src/shared/application/entities/product";

type ProductInfo = {
  transactionId: string | null;
}


declare namespace ISessionPurchaseProductGateway { }

namespace ISessionPurchaseProductGateway {
  export namespace Purchase {
    export type Params = {
      priceId: string;
    }

    export type Response = Promise<{
      id: string | null;
      transactionId: string | null;
      currency: string | null
      amount: number | null
    }>;
  }
}

namespace ISessionPurchaseProductGateway {
  export namespace PaymentIntent {
    export type Params = {
      amount: number;
      currency: string;
    }

    export type Response = Promise<PaymentIntentType | null>;
  }
}

namespace ISessionPurchaseProductGateway {
  export namespace FindProduct {
    export type Params = {
      priceId: string;
    }

    export type Response = Promise<{
      id: string | null;
      priceId: string | null;
      name: string | null;
      description: string | null;
      status: string | null;
      amount: number | null;
      createdAt: number | null
      productId: string | null;
      type: "product" | "subscription" | null;
    }>;
  }
}

namespace ISessionPurchaseProductGateway {
  export namespace Create {
    export type Params = {
      thumbnailUrl: string;
      description: string;
      name: string;
      status: ProductStatus;
      amount: number;
    }

    export type Response = Promise<{
      priceId: string;
      productId: string;
      name: string;
      description: string;
      amount: number;
    }>;
  }
}

namespace ISessionPurchaseProductGateway {
  export type Implementation = {
    purchase: (props: ISessionPurchaseProductGateway.Purchase.Params)
      => ISessionPurchaseProductGateway.Purchase.Response;
    findProduct: (props: ISessionPurchaseProductGateway.FindProduct.Params)
      => ISessionPurchaseProductGateway.FindProduct.Response;
    create: (props: ISessionPurchaseProductGateway.Create.Params)
      => ISessionPurchaseProductGateway.Create.Response;
    paymentIntent: (props: ISessionPurchaseProductGateway.PaymentIntent.Params)
    => ISessionPurchaseProductGateway.PaymentIntent.Response;
  }
}

export { ISessionPurchaseProductGateway };