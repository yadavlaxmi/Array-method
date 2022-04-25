const promi=new Promise((resolve, reject)=>{
  var a=70
  if (a==70){
    resolve("yes")
  }
  else{
    reject("no")
  }
})
promi.then(()=>console.log("I am resolve"))
.catch(()=>console.log("I am not resolved"))
