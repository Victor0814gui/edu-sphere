import { container } from "tsyringe";
import { CreateSessionTokenSecurity, ICreateSessionTokenSecurity } from "../security/create-session-token-security";
import { GenerateRefreshToken } from "../security/create-refresh-token-security";


container.registerSingleton<ICreateSessionTokenSecurity.Implementation>(
  'CreateSessionTokenSecurity',
  CreateSessionTokenSecurity
);

container.registerSingleton<GenerateRefreshToken>(
  'GenerateRefreshToken',
  GenerateRefreshToken
);