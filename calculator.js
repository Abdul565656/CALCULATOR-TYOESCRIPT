"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promp = require("prompt-sync")();
var value1 = parseInt(promp("ENTER THE FIRST NUMBER..."));
var value2 = parseInt(promp("ENTER THE LAST NUMBER..."));
var operate = (promp("ENTER THE OPERATOR (+,-,*,/)"));
if (operate = "+") {
    console.log("YOUR ANSWER IS ".concat(value1, " ").concat(operate, " ").concat(value2, " = ").concat(value1 + value2));
}
if (operate = "-") {
    console.log("YOUR ANSWER IS ".concat(value1, " ").concat(operate, " ").concat(value2, " = ").concat(value1 - value2));
}
if (operate = "*") {
    console.log("YOUR ANSWER IS ".concat(value1, " ").concat(operate, " ").concat(value2, " = ").concat(value1 * value2));
}
if (operate = "/") {
    console.log("YOUR ANSWER IS ".concat(value1, " ").concat(operate, " ").concat(value2, " = ").concat(value1 / value2));
}
else {
    console.log("PLEASE SELECT A NUMBER");
}
