//7
// let arr = [3, 5, 9, 4, 2, 6]
// const max = Math.max(...arr)
// const index = arr.indexOf(max)
// console.log(max);
// console.log(index);

//8
// let arr= []
// while(true){
//     let a = +prompt('Num')

//     arr.push(a)
//     let sum = arr.reduce((acc , val)=>acc+val , 0)
//     if(sum>50){
//         break
//     }
//     if(a === 0){
//         break
//     }
// }
// console.log(arr);

//9
// const arr = Array.from(
//       { length: 20 },
//       () => Math.floor(Math.random() * 100) - 50
//     );
// console.log(arr);
// let arr2 = []
// arr.forEach(item=>{
//     if(item<5 &&  item>-5){
//         arr2.push(item)
//     }
// })
// console.log(arr2);

// 10
// const arr = Array.from(
//   { length: 20 },
//   () => Math.floor(Math.random() * 100) - 50
// );
// console.log(arr);
// let sum = arr.filter((item) => item < 0).reduce((num, acc) => num + acc, 0);
// if (sum < -100) {
//   let min = Math.min(...arr.filter((item) => item > 0));
//   console.log(sum +=min);

// } else {
//   console.log(sum);
// }
//11
// let arr = Array.from(
//   { length: 20 },
//   () => Math.floor(Math.random() * 201) + 100
// );
// arr.filter((num) => {
//   let digitSum = num
//     .toString()
//     .split("")
//     .reduce((sum, digit) => sum + parseInt(digit), 0);
//   return digitSum % 2 === 0;
// });
// console.log(arr);
//12
// let arr = Array.from({length:10}, ()=>Math.floor(Math.random()*4))
// console.log(arr);
// let count = 0
// for(let i = 0; i<=arr.length; i++){
//     if(arr[i] === arr[i+1]){
//         count++
//     }
// }
// console.log(count);
//13
// let arr = Array.from({length:10}, ()=>Math.floor(Math.random()*100))
// console.log(arr);
// for(let i =0; i<arr.length; i++){
//     if(arr[i] === 5){
//         console.log(`5 found 1`)
//     }
// }
// for(let i =0; i<arr.length/2; i++){
//     if(arr[i] === 5){
//         console.log(`5 found 2`)
//     }
// }
// for(let i =arr.length/2; i<arr.length; i++){
//     if(arr[i] === 5){
//         console.log(`5 found 3`)
//     }
// }

//14
// let arr = Array.from({length:10}, ()=>Math.floor(Math.random()*21)-10)
// console.log(arr.reverse());
//15
// let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 25) - 12);
// let arr2 = [];
// let arr3 = []
// for (let i = arr.length - 4; i < arr.length; i++) {
//   console.log(arr[i]);
//   arr2.push(arr[i]);
//   if (arr2.length === 4) {
//     arr.splice(-4, 4);
//     arr3 = arr2.concat(arr)

//   }
// }
// console.log(arr2);

// console.log(arr);
// console.log(arr3);
//16
// let arr = [3, 9, 8, 4, 5, 1]
// let arr2 = []
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<arr[i+1]){
//         arr2.push(arr[i+1])
//     }
// }
// console.log(arr2);
//17
// let arr = [3, 9, 8, 4, 5, 1]
// let max = arr.reduce((acc, val)=>{
//     if(acc<val){
//         acc = val
//     }
//     return acc
// }, 0)
// let divided  = []
// arr.forEach(item=>{
//     const pushing = item/max
//     divided.push(pushing)
// })
// console.log(divided);
//18
// let arr = [-5, -3, 0, -2, 7, 3, 4];
// for (let i = 0; arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log(arr[i]);
//     console.log(i);
//     break;
//   }
// }
//19
// let arr = [-5, -3, 0, -2, 7, 3, 4]; 
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<0){
//         arr[i] = Math.abs(arr[i])
//     }
//     else{
//         arr[i] = -arr[i]
//     }
// }
// console.log(arr);

//20
// let arr = [3, 5, 9, 4, 2, 6]
// let max= Math.max(...arr)
// let min = Math.min(...arr)
// let sum = max-min
// console.log(sum);

// 21 
// let arr = [3, -5, -2, 4, -8, 0]
// let negative = []
// arr.forEach(item=>{
//     if(item<0){
//         const positive = Math.abs(item)
//         if(positive % 2 ===0){
//             negative.push(-positive)
//         }
        
//     }
// })
// let  sum = negative.reduce((acc , val)=>acc+val , 0)
// console.log(sum);
//22
// let arr = [3, 5, 9, 4, 2, 6]
// let odd = arr.filter(item=> item%2 != 0)
// let min = Math.min(...odd)
// console.log(min);
//23

// let arr = [3, 5, 9, 4, 2, 6]
// let sum = Math.floor(arr.reduce((acc , val)=> acc+val, 0) /arr.length)
// arr.forEach(item=>{
//     if(item>sum){
//         console.log(item);
        
//     }
// })
//24
