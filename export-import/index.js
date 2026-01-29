
//named import
import {add,pi} from "./math.js";

//from default export
import multiply from "./math.js";

//all ->namespace
import * as math from "./math.js";
math.add(2,3);
console.log(math.default(3,7));//declared default in math.js


//combination of both
import multiply, { add, pi } from "./math.js";

