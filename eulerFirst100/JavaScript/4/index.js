// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 
// Find the largest palindrome made from the product of two 3-digit numbers.


let sum = 0

function main(){
  let i = 999
  let j = 999
 
  for (; i > 0; i--){
    for (; j > 0; j--){
        isDrome(i * j)
    }
    j = 999
  }
  console.log(sum)
}

function isDrome(n){
  let compareString = n.toString()
  if (compareString === n.toString().split('').reverse().join('')){
    if (n > sum){ sum = n}
  }
}

main()
