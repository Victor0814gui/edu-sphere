import { IConvertStringInDate } from './interfaces/i-convert-string-in-date';




export class ConvertStringInDate
  implements IConvertStringInDate.Implementation {
  public format(format: IConvertStringInDate.Params):
    IConvertStringInDate.Response {
    const regex = /^(\d+)d$/; // Expressão regular para capturar o número de dias
    const match = format.match(regex);

    if (match && match[1]) {
      const numeroDias = parseInt(match[1], 10);
      const dataAtual = new Date(); // Obtém a data atual
      const dataConvertida = new Date(dataAtual.getTime() + numeroDias * 24 * 60 * 60 * 1000); // Adiciona os dias em milissegundos

      return dataConvertida;
    } else {
      throw new Error('Formato inválido. Use o formato "30d".');
    }
  }
}