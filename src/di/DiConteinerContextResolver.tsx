import { DependencyRegistrar } from "./DependencyRegistrar";

function isDependencyRegistrar(arg: unknown): arg is DependencyRegistrar {
  return arg !== null && typeof arg === "object";
}
// get DI container from context
export function resolveDiConteinerContext(arg: unknown): DependencyRegistrar {
  if (isDependencyRegistrar(arg)) {
    return arg as DependencyRegistrar;
  } else {
    throw Error("Not found context.");
  }
}
