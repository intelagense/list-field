//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


function divByTwenty(){
let num = 1
  
  while(true){
    for (let i = 1; i <= 20; i++){
      if (num % i === 0){
        if (i === 20){
          console.log(num)
          return;
        }
      } else {
        break;
      }
    }
    num += 1;
  }
}
  
divByTwenty()
