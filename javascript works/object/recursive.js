var pattern="ABABBC"
var wc={}
// for (let char of pattern){
//     if(char in wc){
//         wc[char]+=1;
//         console.log("first recursive character:",char);
//         break;
//     }
//     else{
//         wc[char]=1
//     }
// }

//or

var op=[]
// pattern.split("").map(char=>char in wc? op.push(char):wc[char]=1)

//or
Array.from(pattern).map(char=>char in wc? op.push(char):wc[char]=1)
console.log(op[0]);