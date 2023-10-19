import { stripe } from "@/src/shared/infra/services/stripe";
import { ICreatePromotionalCodeUseCase } from "../interfaces/i-create-promotional-code-use-case";



export class CreatePromotionalCodeUseCase
  implements ICreatePromotionalCodeUseCase.Implementation {
  public async execute(params: ICreatePromotionalCodeUseCase.Params):
    ICreatePromotionalCodeUseCase.Response {

    const coupon = await stripe.coupons.create({
      percent_off: 25.5,
      duration: 'repeating',
      duration_in_months: 3,
    });

    const promotionCode = await stripe.promotionCodes.create({
      coupon: coupon.id,
    });


    return promotionCode;
  }
}