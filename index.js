
//named import
import {add,pi} from "./math.js";

//default
import multiply from "./math.js";

//all ->namespace
import * as math from "./math.js";
math.add(2,3);
console.log(math.default(3,7));//declared default 


//from node.js ->require
