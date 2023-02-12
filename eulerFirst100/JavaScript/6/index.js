//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumSquared(total) {
  let runningSum = 0;
  let runningSquare = 0
  for (i = 1; i <= total; i++) {
    runningSum += i ** 2;
    runningSquare += i
  }

  console.log(Math.abs(runningSum - runningSquare ** 2))

  return
}

sumSquared(100)
