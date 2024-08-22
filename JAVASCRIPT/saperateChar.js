// //count how manny unque charactor present in the given string
// const str = "Universe";
// let obj = {};

// for(let i = 0; i < str.length; i++){
//     if(obj[str[i]] == undefined){
//         obj[str[i]] = 1;
//     }
// }

// console.log(obj);

// //count frequency of each charactors in the given string
// const str1 = "Google";
// let obj1 = {};

// for(let i = 0; i < str1.length; i++){
//     if(obj1[str1[i]] == undefined){
//         obj1[str1[i]] = 1;
//     } else {
//         obj1[str1[i]]++;
//     }
// }
// console.log(obj1);

// //count array elements frequency

// const arr = [1,3,2,3,4,4,7,2,6,9,0];
// let objArr = {};

// for(let i = 0; i < arr.length; i++){
//     if(objArr[arr[i]] == undefined){
//         objArr[arr[i]] = 1;
//     } else {
//         objArr[arr[i]]++;
//     }
// }
// console.log(objArr);

//console whose elements frequincies is greater than 1

const arr1 = [1, 2, 3, 4, 3, 2, 5, 6, 7, 6, 8, 9, 0, 0];
let objArr1 = {};

for (let i = 0; i < arr1.length; i++) {
    if (objArr1[arr1[i]] == undefined) {
        objArr1[arr1[i]] = 1;
    } else {
        objArr1[arr1[i]]++;
    }
}

for (let key in objArr1) {
    if (objArr1[key] > 1) {
        console.log(key + " " + objArr1[key]);
    }
}
