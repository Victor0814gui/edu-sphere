import { container } from "tsyringe";
import { CreateNewDateService } from "../services/create-new-date-service";
import { CreateUUIDTokenService } from "../services/create-uuid-token-service";
import { ICreateUUIDTokenService } from "../services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../services/contracts/i-create-new-date-service";
import { IEncryptDataService } from "../services/contracts/i-encrypt-data-service";
import { EncryptDataService } from "../services/encrypt-data-service";
import { ICompareEncryptDataService } from "../services/contracts/i-compare-encrypt-data-service";
import { CompareEncryptDataService } from "../services/compare-encrypt-data-service";






container.registerSingleton<ICreateUUIDTokenService.Implementation>(
  "CreateUUIDTokenService",
  CreateUUIDTokenService,
);

container.registerSingleton<ICreateNewDateService.Implementation>(
  "CreateNewDateService",
  CreateNewDateService,
);

container.registerSingleton<IEncryptDataService.Implementation>(
  "EncryptDataService",
  EncryptDataService,
);

container.registerSingleton<ICompareEncryptDataService.Implementation>(
  "CompareEncryptDataService",
  CompareEncryptDataService,
);