const path = require('path');

console.log("path.join() : ", path.join());
// outputs .
console.log("path.resolve() : ", path.resolve());
// outputs current directory or equivalent to __dirname

console.log("path.join() : " ,path.join(__dirname,'/1','/2','/3'));//will add slashes in itself.
console.log("path.join() : " ,path.join(__dirname,'1','2','3'));
console.log("path.join() : " ,path.join(__dirname,'public/images',"../../private"));//concatinates ../ will bring it back up one



console.log("path.resolve() : ",path.resolve(__dirname,'temp'));
console.log("path.resolve() : " ,path.resolve(__dirname,'/public',"../private"));//  /means aboslute bath so it ignores previous stuff and it is lost.
console.log("path.resolve() : " ,path.resolve('static',"images"));//just keeps going one folder down




console.log(__dirname)

//path itself will mod ify so slashes are in correct direction

//path.join is easy to understand
//just concatinates the strings and then simlifies is needed

//path.resolve is more complex
//acts as if each part is a cd command and then simlifies if needed
