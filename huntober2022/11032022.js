//extra credit
const input =['glove', 'bat', 'ball', 'glove', 'bat', 'ball', 'glove', 'bat']

//tally all the elements of the array and display the tally next to the name

function tally(arr){
  let tallyObj = {}
  for (item of arr){
    tallyObj[item] ? tallyObj[item]+=1 : tallyObj[item]=1
  }
  return tallyObj
}

// function tally(arr){
//   //initialize empty array
//   let tallyArr = [] 
//   for (let i = 0; i < arr.length; i++){
//     if (i === arr.indexOf(arr[i])){
//       tallyArr.push(arr[i], 1) 
//     }else if (i <= arr.lastIndexOf(arr[i])){
//       (tallyArr[tallyArr.indexOf(arr[i]) + 1]) += 1
//     }
//   }
//   console.log(tallyArr)
// }


tally(input)