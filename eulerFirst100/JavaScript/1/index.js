// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


// steps
// create a general purpose function where the input is an integer
// generate a list of numbers iterating from 0 to the input(non inclusive) that are divisble by either 3 or 5
// return the sum of the of the numbers


//expensive solution
function sumThreeAndFiveMultiples(n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
        if ((i % 5 === 0) || (i % 3 === 0)) {
            sum += i
        }
    }
    return sum
}


//test inputs 
console.log(sumThreeAndFiveMultiples(10), "23")
console.log(sumThreeAndFiveMultiples(6), "8")
console.log(sumThreeAndFiveMultiples(1000), "Your answer")