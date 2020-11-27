ar = [1, 2, 3 , 4, 10, 11]

simpleArraySum = (ar) => {
    let sum = 0
    for (var iterator of ar) sum += iterator
    return sum
}

console.log(simpleArraySum(ar))