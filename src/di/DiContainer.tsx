import { AccountRepository } from "../api/rest/AccountRepository";
import { LoginRepository } from "../api/rest/LoginRepository";
import { createDependencyRegistrar } from "./DependencyRegistrar";

/* create DI container */

// define DI container to register
type Dependencies = {
  accountRepo: AccountRepository;
  loginRepo: LoginRepository;
};

// register Bean and define Context
const registrar = createDependencyRegistrar<Dependencies>();
registrar.register("accountRepo", new AccountRepository());
registrar.register("loginRepo", new LoginRepository());

export const DiContainer = Object.freeze(registrar);
