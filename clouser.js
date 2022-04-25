var a=5;
function outer(){
  function inner(){
    console.log("laxmi")
  }
  inner()
  console.log("hello")
}
outer(a)