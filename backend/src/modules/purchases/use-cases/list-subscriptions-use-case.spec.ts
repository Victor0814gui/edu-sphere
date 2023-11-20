import { Product } from "@/src/shared/application/entities/product";
import { ListSubscriptionsRepository } from "../repositories/implementation/list-subscriptions-repository";
import { ListSubscriptionsUseCase } from "./list-subscriptions-use-case";
import { IListSubscriptionsRepository } from "../repositories/i-list-subscriptions-repository";
import { IListSubscriptionsUseCase } from "../interfaces/i-list-subscriptions-use-case";


let subscriptions: Product[];
let listSubscriptionsUseCase: IListSubscriptionsUseCase.Implementation
let listSubscriptionsRepository: IListSubscriptionsRepository.Implementation

describe("List all Subscriptions", () => {
  it("It should be possible to list all Subscriptions", async () => {

    listSubscriptionsRepository = new ListSubscriptionsRepository();
    listSubscriptionsUseCase = new ListSubscriptionsUseCase(
      listSubscriptionsRepository,
    );

    expect(listSubscriptionsUseCase)
      .toEqual(subscriptions)

  })
})