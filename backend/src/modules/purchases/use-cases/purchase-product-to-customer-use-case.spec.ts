import { mock, instance, when, verify } from 'ts-mockito';
import { PurchaseProductToCustomerUseCase } from './purchase-product-to-customer-use-case';
import { IPurchaseProductToCustomerRepository } from '@purchases/repositories/i-purchase-product-to-customer-repository';
import { ISessionPurchaseProductGateway } from '@purchases/infra/gateways/contracts/i-sessions-purchase-product-gateway';
import { Customer } from '@/src/shared/application/entities/user';
import { randomUUID } from 'crypto';
import { IPurchaseProductToCustomerUseCase } from '../interfaces/i-purchase-product-to-customer-use-case';

describe('PurchaseProductToCustomerUseCase', () => {
  const customerId = randomUUID();
  let useCase: IPurchaseProductToCustomerUseCase.Implementation;
  let mockRepo: IPurchaseProductToCustomerRepository.Implementation;
  let mockGateway: ISessionPurchaseProductGateway.Implementation;
  let customer = {
    id: customerId,
    avatarUrl: "https://youravatar@cdn.com/avatar.png",
    createdAt: new Date(),
    email: "youravatar@gmail.com",
    name: "youravatar",
    password: "youravatar1234",
    status: "pending",
    updatedAt: null,
  } as Customer;

  beforeEach(() => {
    mockRepo = mock<IPurchaseProductToCustomerRepository.Implementation>();
    mockGateway = mock<ISessionPurchaseProductGateway.Implementation>();
    useCase = new PurchaseProductToCustomerUseCase(instance(mockRepo), instance(mockGateway));
  });

  it('should throw error if customer does not exist', async () => {
    const params = { customerId: '1', productId: '1' };
    when(mockRepo.findCustomer({ customerId: params.customerId })).thenResolve(null);

    await expect(useCase.execute(params)).rejects.toThrow('Customer does not exists');
    verify(mockRepo.findCustomer({ customerId: params.customerId })).once();
  });

  it('should throw error if product does not exist', async () => {
    const params = { customerId: '1', productId: '1' };
    when(mockRepo.findCustomer({ customerId: params.customerId })).thenResolve(customer);
    when(mockRepo.findProduct({ productId: params.productId })).thenResolve(null);

    await expect(useCase.execute(params)).rejects.toThrow('Product does not exists');
    verify(mockRepo.findCustomer({ customerId: params.customerId })).once();
    verify(mockRepo.findProduct({ productId: params.productId })).once();
  });

  // Adicione mais testes para os outros cenários
});
