import { container } from "tsyringe";
import { CreateNewDateService } from "../services/create-new-date-service";
import { CreateUUIDTokenService } from "../services/create-uuid-token-service";
import { ICreateUUIDTokenService } from "../services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../services/contracts/i-create-new-date-service";






container.registerSingleton<ICreateUUIDTokenService.Implementation>(
  "CreateUUIDTokenService",
  CreateUUIDTokenService,
);

container.registerSingleton<ICreateNewDateService.Implementation>(
  "CreateNewDateService",
  CreateNewDateService,
);