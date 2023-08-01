// Common JS sytax

// import {myFunction} from "./esmodules";
// console.log(myFunction);

/*

ES modules
const newModule = require("./module");

console.log(newModule);
*/

// imports the os module that handle OS-level logic & functionality.
const os = require("os");
const fs = require("fs");
const path = require("path");
const { error } = require("console");
// logs the CPU's on your system.
// console.log(os.cpus());

// creates a text file and writes to it using the standard I/O.
// (error) => {console.log(error)} -> handles errors. 
fs.writeFile("./test.txt", "this is my document", (error) => {console.log(error)});
// writeFile overrides changes done to a file.

// appendFile appends changes done to a file.
fs.appendFile("./test.txt", "this is my document", (error) => {console.log(error)});

