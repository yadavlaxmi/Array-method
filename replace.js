let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText)

let text1 = "Please visit Microsoft!";
let newText1 = text1.replace("MICROSOFT", "W3Schools");
console.log(newText1)

let text2 = "Please visit Microsoft!";
let newText2 = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText2)

let text3 = "Please visit Microsoft and Microsoft!";
let newText3 = text.replace(/Microsoft/g, "W3Schools");
console.log(newText3)