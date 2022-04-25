var b="hi";
const a=new Promise(function(resolve,reject){
    if (b){
        resolve()
    }
    else{
        reject()
    }
}
)
a.then(()=>console.log("I am resolve"))
.catch(()=>console.log("I am not resolved"))
