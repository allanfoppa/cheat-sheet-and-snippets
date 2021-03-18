// good
const odd = [ 1, 3, 5 ]
const nums = [ 2, 4, 6 ].concat(odd)

// better
const odd = [ 1, 3, 5 ]
const nums = [ 2, 4, 6, ...odd]

console.log(nums)