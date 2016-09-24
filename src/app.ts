import { ModuleA } from './ModuleA';

console.log(new ModuleA().toString());
console.log(new ModuleA("Nshen").toString());


let x: number;
let y: number | null;
let z: number | undefined;
// x;  // Error, reference not preceded by assignment
// y;  // Error, reference not preceded by assignment
// z;  // Ok
// x = 1;
// x = undefined // Error
// y = null;
// x;  // Ok
// y;  // Ok
