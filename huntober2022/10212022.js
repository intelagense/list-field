// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

//create an array
//iterate through the array in reverse
//check new arr length vs count
//check condition of digits for even and unshift them into new array

const arrLastEvenNums = (arr, count) => arr.filter(e=> e%2===0).slice(-count)

// function arrLastEvenNums(arr, count){
//     let evenArr = []
//     for (let i = arr.length - 1; i>=0; i--){
  
//       if(evenArr.length < count){
//         if(arr[i] % 2 === 0){
//           // console.log(evenArr, 'before')
//           evenArr.unshift(arr[i])
//           // console.log(evenArr, 'after')
//         }
        
//       }else{
//         console.log(evenArr)
//         return evenArr
//       }
//     }
//     console.log(evenArr)
//     return evenArr
//   }
  
  arrLastEvenNums([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) //=> [6]
  arrLastEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) //=> [4, 6, 8]
  arrLastEvenNum([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) //=> [-8, 26]
  
      
