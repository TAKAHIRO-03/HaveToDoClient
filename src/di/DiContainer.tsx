import { AccountRepository } from "../api/rest/AccountRepository";
import { LoginRepository } from "../api/rest/LoginRepository";
import { PlannedTaskRepository } from "../api/rest/PlannedTaskRepository";
import { createDependencyRegistrar } from "./DependencyRegistrar";

/* create DI container */

// define DI container to register
type Dependencies = {
  accountRepo: AccountRepository;
  loginRepo: LoginRepository;
  plannedTaskRepo: PlannedTaskRepository;
};

// register Bean and define Context
const registrar = createDependencyRegistrar<Dependencies>();
registrar.register("accountRepo", new AccountRepository());
registrar.register("loginRepo", new LoginRepository());
registrar.register("plannedTaskRepo", new PlannedTaskRepository());

export const DiContainer = Object.freeze(registrar);
