//index.js============================

const express = require('express');

const app = express();

var fs = require('fs');
var path = require("path");

let fileName = path.join(__dirname, "public","file.txt");

let fileExists = false;
try {
  if (fs.existsSync(fileName)) {
    fileExists = true;
  }
} catch(err) {
  console.error(err)
}

if (fileExists)
  console.log("file.txt does exist");
else
  console.log("file.txt does not exist");


if (fileExists) {
  let data = 'None';
  let stats = fs.statSync(fileName);
  console.log(stats);

  if (typeof stats != 'undefined') {
    if (stats.isFile())
      console.log("it is a file");//for next line with the ones without sync they are non blocking
      //this one is blocking
    data = fs.readFileSync(fileName,{encoding:'utf8', flag:'r'});//getting entire data from file
    console.log(data);//why it prints everything here
    console.log(typeof data);//the type of the data
    console.log(data.length);//then the length

    while ((m = data.indexOf('\n')) != -1) {
      let line = data.substring(0,m-1);
      parseLine(line);
      data = data.substring(m+1);
    }
    parseLine(data);
  }

}
else
  console.log("file does not exist");



function parseLine(line)//just pharsing it out to each word
{
    while ((i = line.indexOf(' ')) != -1) {
      console.log("|" + line.substring(0,line.indexOf(' ')) + "|" );
      line = line.substring(i+1);
    }
    console.log("||" + line + "||" );
}

fs.writeFile('./public/empty.txt', 'Hello content! But I changed', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
