// EcmaScript Modules

// mod.js
const x = 42;
export const foo = () => "toto";
export function bar() {}
export default 3.141592654;

// index.js
import { foo as foo2, bar } from "./mod.js";
foo2();

// index2.js
import pi from "./mod.js";
