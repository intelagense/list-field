const fs = require('fs')
const filename = './testinput.txt'

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err
    data.split('\n').forEach((line) => {
        console.log(line)
    })
})




// destination source range
// 50          98     2

// 
// Grab the seed value
// loop through each map and check if the seed in the range between the source and source + range
// if the seed is in the range return the seed number +- the difference of source and dest
// go to the next value and rinse and repeat.
// store the final values and compare them for the lowest
//
// 