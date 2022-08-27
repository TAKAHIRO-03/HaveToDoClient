import { AccountRepository } from "../api/rest/AccountRepository";
import { LoginRepository } from "../api/rest/LoginRepository";
import { TaskRepository } from "../api/rest/TaskRepository";
import { createDependencyRegistrar } from "./DependencyRegistrar";

/* create DI container */

// define DI container to register
type Dependencies = {
  accountRepo: AccountRepository;
  loginRepo: LoginRepository;
  taskRepo: TaskRepository;
};

// register Bean and define Context
const registrar = createDependencyRegistrar<Dependencies>();
registrar.register("accountRepo", new AccountRepository());
registrar.register("loginRepo", new LoginRepository());
registrar.register("taskRepo", new TaskRepository());

export const DiContainer = Object.freeze(registrar);
