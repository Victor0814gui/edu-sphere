import { container } from "tsyringe";
import { ConvertStringInDate } from "../services/convert-string-in-date";
import { IConvertStringInDate } from "../services/interfaces/i-convert-string-in-date";


container.registerSingleton<IConvertStringInDate.Implementation>(
  "ConvertStringInDate",
  ConvertStringInDate
)