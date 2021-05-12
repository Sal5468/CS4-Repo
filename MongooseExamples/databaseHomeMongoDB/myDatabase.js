

var express = require("express");
var mongoose = require("mongoose");
var HomeModel = require("./models/Home");
const Home = require('./Home');

let myDatabase = function() {
}



myDatabase.prototype.postHome = function(home,res) {
  let obj = {id:home.id,style:home.style,cost:home.cost,view:home.view};
  HomeModel.create(obj,function(error,info) {
      if (error) {
          return res.json({retVal:false});
      }
      return res.json({retVal:true});
  });
}

myDatabase.prototype.getHome = function(ident,res) {
  console.log(ident)
  HomeModel.find({ident:ident},function(error,info) {
      if (error) {
          return res.json({retVal:null});
      }
      else if (info == null) {
          return res.json({retVal:null});
      }

      if (info.length == 1)
        return res.json({ retVal: new Home(ident,info[0].name) });
      else
          return res.json({retVal:null});
   });
}



myDatabase.prototype.putHome = function(home,res) {
  let obj = {id:home.id,style:home.style,cost:home.cost,view:home.view};
  HomeModel.findOneAndUpdate({id:home.id},{style:home.style,cost:home.cost,view:home.view},function(error,oldHome) {
    if (error) {
      return res.json({retVal:false});
    }
    else if (oldHome == null) {
      return res.json({retVal:false});
    }
    return res.json({retVal:true});
  });
}

myDatabase.prototype.deleteHome = function(ident,res) {
    HomeModel.remove({ident:ident},function(error,removed) {
        if (error) {
            return res.json({retVal:false});
        }
        if (removed.result.n == 0)
          return res.json({retVal:false});
        return res.json({retVal:true});
    });
}

module.exports = myDatabase;
