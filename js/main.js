// 1-rasm 

// 1-task
// let person = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+998944683325",
//     username: "AU"
// }
// function findObj(obj){
//     for(let [key, value] of Object.entries(obj)){
//         console.log(`${key} - ${value}`);
//     }
// }
// findObj(person)

// 2-task

// const person1 = {
//     name: "Abdulloh",
//     age: 19
// }
// const person2 = {
//     hobby: "sleep",
//     interest: "game"
// }
// function findObj(obj1,obj2){
//     let obj = Object.assign(obj1, obj2)
//     console.log(obj);
// }
// findObj(person1, person2)

// 3-task
// let numbers = [4,5,6,7,8,9]
// function findArr(arr){
//     arr[arr.length - 1] +=1
//     console.log(arr);
// }
// findArr(numbers)

// 4-task
// let numbers = [2,5,4,87,6,3,2] ---------
// function findArr(arr){
//     let evenRes = 0
//     for(let num of arr){
//         evenRes += num
//     }
//     return evenRes
// }
// const result = findArr(numbers)
// console.log(result);

// 5-task
// let numbers = [45,6,8,7,9,5]
// function replaceArr(arr){
//     arr.push(arr[0])
//     arr.shift(arr[0])
//     arr.unshift(arr[arr.length - 2])
//     arr.unshift(arr[arr.length - 1])
//     arr.pop(arr[arr.length - 1])
//     arr.pop(arr[arr.length - 1])
//     arr.push(arr[0])
//     arr.shift(arr[0])
//     console.log(arr);
// }
// replaceArr(numbers)

// 6-task

// function createWord(a = 6, all = []){
//     if (a === 0) {
//       return all;
//     }
//     const word = prompt("Enter random 6 words");
//     words.push(word);
//     return createWord(a - 1, all);
// }
// const result = createWord();
// console.log(result);

// 2-rasm

// 1-task
// let arrList  = [12,"salom", true , 456,"nma gap"]
// function createArr(arr){
//     let newWord = prompt("enter something")
//     arr.push(newWord)
//     return arr
// }
// const result = createArr(arrList)
// console.log(result);

// 2-task
// let arrList1  = [15, "salom", 48, true, 460, "yaxshi"]
// let arrList2  = [19, "yaxshi", 460, false, 456, "nima"]
// function compareArr(arr1, arr2){
//     let all = []
//     let el = []
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] == arr2[j]){
//                 all.push(arr1[i])
//             }
            
//         }
//     }

//     for(element of all){
//         arr1.unshift(element);
//         arr2.unshift(element);
//     }
//     el.push(arr1 , arr2)
//     return el;
// }
// console.log(compareArr(arrList1, arrList2));

// 3-task

// let obj = {
//     name: "John",
//     age: "30",
//     job: "Mehanic",
//     study: "none",
//     travel: "US"
// }
// function findArr(arr){
//     for(let key of Object.keys(arr)){
//         console.log(`${key}`);
//     }
// }
// findArr(obj)

// 4-task
// function saySome(x){
//     if(x === 0){
//         return x
//     }
//     let all = [];
//     let evenRes = 0;
//     for(let i = 0; i < x; i++){
//         let b = prompt("enter number !!!") - 0
//         all.push(b)
//         evenRes += b
//     }
    
//     return evenRes
// }
// const result = saySome(4)
// console.log(`Answer = ${result}`);

// 5-task
// let obj1 = {name: "Abdulloh"}
// let obj2 = { age: 19}
// function findArr(object1 , object2){
//     let all = Object.assign(object1 , object2)
//     console.log(Object.values(all));
// }
// findArr(obj1 ,obj2)