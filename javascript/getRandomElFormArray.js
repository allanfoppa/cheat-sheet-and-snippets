
const getRandomItem = (items) => {

  const item = Math.floor(
    Math.random() * items.length
  )

  return items[item]
}

console.log(getRandomItem([1, 3, 5, 988, 15]))