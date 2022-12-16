// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


// Notes
// Prime... divisible only by itself and one
// first day: countPrime is complex and doesn't return the correct value. The halveTheWork and isPrime functions appear to be working correctly.
// TODO https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

function countPrime(value) {
  let count = 0
  let n = halveTheWork(value)

  for (let i = n; i > 0; i--) {
    if (value % i === 0) {
      //60 % 30
      for (let j = halveTheWork(i); j > 0; j--) {
        //30 / 1
        if (isPrime(j)) {
          return j
        }
      }
    }
  }
}

//Splits the number if even or adds one then splits if odd. 
const halveTheWork = (num) => (num % 2 === 0) ? num / 2 : (num + 1) / 2;

function isPrime(num) {
  let count = 0
  for (let i = 2; i <= halveTheWork(num); i++) {
    if (num % i === 0) {
      count++
      if (count > 0) {
        return false;
      }
    }
  }
  return true;
}

// start refactor
// function isPrime(num){
//   let factor = false
//   for (let i = 2; i <= halveTheWork(num); i++){
//     if (num % i === 0){
//       if (factor){
//         return false;  
//       }
//       factor = true
//     }
//   }
//   return true;
// }


// tests 

// console.log(countPrime(13195)) //outputs 1319?? 

for (let i = 0; i < 100; i++) {
  console.log(isPrime(i), i)
}
