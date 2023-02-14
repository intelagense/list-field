// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


// Notes
// Prime... divisible only by itself and one
// first attempt: countPrime is complex and doesn't return the correct value. The halveTheWork and isPrime functions appear to be working correctly.
// second attempt: was "halving the work" too many times, misunderstood the original question, now using sqrt, etc.
// totally misunderstood everything. 

// TODO https://en.wikipedia.org/wiki/Sieve_of_Era;tosthenes

// function countPrime(value) {
//   for (let i = Math.ceil(Math.sqrt(value)); i > 0; i--) {
//     if (isPrime(i)) {
//       if (value % i === 0) {
//         return i
//       }
//     }
//   }
// }

// function isPrime(num) {
//   // let lastDigit = +num.toString().slice(-1);
//   // if (lastDigit === 5 || lastDigit % 2 === 0) {
//   //   return false;
//   // }
//   for (let i = 3; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }





// //tests the functions
// for (let i = 0; i < 100; i++) {
//   console.log(isPrime(i), i)
// }
// console.log(countPrime(600851475143), performance.now())
// console.log(countPrime(100), performance.now())
// console.log(countPrime(1000000000), performance.now())
// console.log(isPrime(13195))


// prime factor... is a factor of a number that is prime 
// largest prime factor, highest number that is a factor that is prime
// return is the largest prime factor
//
// starting with an int.. 
// loop up from 2 to generate pri
// divide it by the smallest prime factor.
// divide the quotient by the smallest prime factor
// 
// value will be the start number

function largestPrimeFactor(value) {
  let highestValue = value
  let highestPrime = 1
  for (let i = 2; i <= highestValue; i++) {
    if (isPrime(i)) {
      if (highestValue % i === 0) {
        highestValue = highestValue / i
        highestPrime = i
      }
    }
  }
  return highestPrime
}

function isPrime(num) {
  let lastDigit = +num.toString().slice(-1);
  if (num > 2 && lastDigit % 2 === 0) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


// console.log(largestPrimeFactor(10), performance.now())
// console.log(largestPrimeFactor(100), performance.now())
// console.log(largestPrimeFactor(1000), performance.now())
// console.log(largestPrimeFactor(1_000_000), performance.now())
console.log(largestPrimeFactor(600851475143), performance.now())
// console.log(isPrime(10))