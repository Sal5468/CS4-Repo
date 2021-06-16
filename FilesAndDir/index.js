//index.js============================

const express = require('express');

const app = express();

var fs = require('fs');
var path = require("path");

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    path.resolve(__dirname, file);
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
};

function getFiles(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    path.resolve(__dirname, file);
    return fs.statSync(path.join(srcpath, file)).isFile();
  });
};



//simple recursion

/*
rout1(3);
function rout1(val)
{
  console.log(val);
  if (val > 8)
    return;
  val++;
  rout1(val);
}
*/

//directory structure recursion

//goes and finds files and sub folders of public
rout1(path.join(__dirname, "public"));
function rout1(currPath)
{
  console.log("==========" + currPath);
  var files = getFiles(currPath);
  for (var i = files.length - 1; i >= 0; i--) {
    console.log(files[i]);
  }

  var dirs = getDirectories(currPath);
  for (var j = dirs.length - 1; j >= 0; j--) {
    let newPath = path.join(currPath, dirs[j]);
    rout1(newPath);
  }
}
