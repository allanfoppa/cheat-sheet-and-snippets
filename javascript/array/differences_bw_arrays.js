
// WITH NUMBERS
const arrNum1 = [ 1, 2, 3, 4, 5, 6 ]
const arrNum2 = [ 3, 8, 7, 5, 4, 6 ]

// WITH STRINGS
const arrNum3 = [ 'Hi', 'Hi2', 'Hi3' ]
const arrNum4 = [ 'Hi', 'Hi2' ]

const diff = ({
  target,
  compare,
  text
}) => console.log(`${text}`, target.filter((e) => !compare.includes(e)))

document.addEventListener("DOMContentLoaded", function() {
  // COMPARE ARRAY NUMBER 1 WITH 2
  diff({
    target: arrNum1,
    compare: arrNum2,
    text: 'Compare arrNum1 with arrNum2'
  })
  // COMPARE ARRAY NUMBER 2 WITH 1
  diff({
    target: arrNum2,
    compare: arrNum1,
    text: 'Compare arrNum2 with arrNum1'
  })
  // COMPARE ARRAY NUMBER 3 WITH 4
  diff({
    target: arrNum3,
    compare: arrNum4,
    text: 'Compare arrNum3 with arrNum4'
  })
  // COMPARE ARRAY NUMBER 3 WITH 4
  diff({
    target: arrNum4,
    compare: arrNum3,
    text: 'Compare arrNum4 with arrNum3'
  })
})