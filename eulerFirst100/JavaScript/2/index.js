//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// create fibonacci generator from 1 to n
// sum all even numbers in the sequence

function fibEvenSum(n1, n2, max) {
    let temp = 0;
    let evenSum = 0;
    do {
        if (!(n1 % 2)) evenSum += n1
        temp = n1 + n2
        n1 = n2
        n2 = temp
    } while (n2 < max);
    if (!(n1 % 2)) evenSum += n1
    console.log(evenSum, "sum");
}

fibEvenSum(1, 2, 4000000)

//3000ms runtime
//notes for refactor: destructing?