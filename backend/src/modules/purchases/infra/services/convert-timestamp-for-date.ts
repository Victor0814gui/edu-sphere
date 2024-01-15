


export function convertTimestampForDate(timestamp: number): Date {
  return new Date(timestamp * 1000); // Multiplicação por 1000 para converter segundos para milissegundos
}