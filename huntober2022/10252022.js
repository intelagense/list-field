// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

function solve(arr){
    console.log(arr.map(el=>new Set(el).size).reduce((a,c) => a *=c ))
  }
  
  // function solve(arr){
  //   let noDupes = [];
  //   let total = 1;
  //   for(let i = 0; i < arr.length; i++){
  //     noDupes.push(arr[i].filter((num, index) => {
  //       if(arr[i].lastIndexOf(num) === index)
  //         return num;
  //       })
  //     )
  //   }
  //   for(let i = 0; i< noDupes.length; i++){
  //     total *= noDupes[i].length;
  //   }
  //   console.log(total) //return
  // }
  
  solve(([[1,2],[4],[5,6]]),4)
  solve(([[1,2],[4,4],[5,6,6]]),4)
  solve(([[1,2],[3,4],[5,6]]),8)
  solve(([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)