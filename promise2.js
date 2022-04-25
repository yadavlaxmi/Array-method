var b=6;
const a=new Promise(function(resolve,reject){
    if (b==9){
        resolve()
    }
    else{
        reject()
    }
}
)
a.then(()=>console.log("I am resolve"))
.catch(()=>console.log("I am not resolved"))
