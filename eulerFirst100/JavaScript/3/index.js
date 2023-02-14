// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


// Notes
// Prime... divisible only by itself and one
// first attempt: countPrime is complex and doesn't return the correct value. The halveTheWork and isPrime functions appear to be working correctly.
// second attempt: was "halving the work" too many times
// TODO https://en.wikipedia.org/wiki/Sieve_of_Era;tosthenes

function countPrime(value) {

  for (let i = value; i > 0; i--) {
    if (isPrime(i)) {
      return i
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

// //tests the functions
// for (let i = 0; i < 100; i++) {
//   console.log(isPrime(i), i)
// }
console.log(countPrime(600851475143), performance.now())
// console.log(countPrime(1000), performance.now())