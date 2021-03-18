let x = 'abc'

if(x === 'abc' || x === 'def' || x === 'ghi' || x === 'jkl') {
    console.log(true)
}

if(['abc', 'def', 'ghi', 'jkl'].includes(x)) {
    console.log(true)
}

let a = ['abc', 'def', 'ghi', 'jkl'].includes(x)