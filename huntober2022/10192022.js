// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


function getAverage(arr, test){
    let total = 0
    arr.forEach(element => total += element);
    
    console.log(total/(arr.length) ,test)
}




getAverage([2,2,2,2],2)
getAverage([1,2,3,4,5,],3)
getAverage([1,1,1,1,1,1,1,2],1)