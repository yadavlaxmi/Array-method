var b=7;
const a=new Promise(function(resolve,reject){
    if (b==7){
        resolve()
    }
    else{
        reject()
    }
}
)
a.then(()=>console.log("I am resolve"))
.catch(()=>console.log("I am not resolved"))
