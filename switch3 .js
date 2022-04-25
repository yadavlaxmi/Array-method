var a=require("readline-sync")
var age=a.questionInt("enter the age==")
switch(age){
  case 18:
  console.log("study")
  break
  case 22:
    console.log("vote")
    break
default:
  console.log("not")
}