export function convertUnitAmountForReal(amount: number): string {
  const amountFormat = amount / 100;
  const precoFormatado = amountFormat.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return precoFormatado;
}
