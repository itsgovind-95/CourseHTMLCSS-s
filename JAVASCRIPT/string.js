
let str = " Bal Govind ";
let str1 = "Chaurasia"
let str2 = "   Universe   ";
let str3 = " Linux ";
const str4 = "Uinversity of Lucknow";

console.log("printing Str1 : ",str);
console.log("calculating str length : ",str.length);
console.log("method at() : ",str.at(0));
console.log("method charAt() : ",str.charAt(1));
console.log("str last Index : ",str.length-1);
console.log("str last index value : ",str.at(str.length-1));
console.log("last index using charAt() : ",str.charAt(str.length-1));
console.log("str substring : ",str.substring(0,5));
console.log("str slice : ",str.slice(1,5));
console.log("str substr : ",str.substr(1,9));
console.log("slice negative : ",str.slice(-5));
console.log("slice negative range : ",str.slice(-6,-1));
console.log("upperCase : ",str1.toUpperCase());
console.log("lowercase : ",str.toLowerCase());
console.log("concat : ",str.concat(" ", str1));
console.log("str2 : ",str2);
console.log("trim method : ",str2.trim( ));
console.log("trim end : ", str2.trimEnd( ));
console.log("trim start : ",str2.trimStart( ));
console.log("padStart : ",str3.padStart(15,"*"));
console.log("padEnd : ",str3.padEnd(15,"*"));
console.log("repeat : ",str3.repeat(2));
console.log("replace : ",str4.replace("Lucknow","Lucknow, Uttar Pradesh"));
console.log("replace global match : ",str4.replace(/Lucknow/g,"Lucknow, UP"));
console.log(" replace insensitive : ",str4.replace(/Lucknow/i,"lucknow, UP"));
console.log("splite array of single characters : ",str4.split(""));
