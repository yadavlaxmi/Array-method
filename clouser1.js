var a=5;
function outer(){
  var a=59;
  function inner(){
    var b=8
    console.log(b)
  }
  inner()
  console.log(a)
}
outer()