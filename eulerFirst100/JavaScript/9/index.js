//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

//a2 + b2 = c2
//For example, 32 + 42 = 9 + 16 = 25 = 52.

//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.

for (let i = 1; i < 501; i ++){
  for (let j = 1; j < 501; j ++){
    if ((i ** 2 + j ** 2) ** .5 + i + j == 1000){
      console.log(i * j * ((i ** 2 + j ** 2) ** .5))
    }
  }
}
