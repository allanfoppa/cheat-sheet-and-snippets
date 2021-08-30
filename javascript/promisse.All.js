import {
  fetchSomeInformation
} from '../services/fetchSomeInformation.service'

import {
  fetchAnotherInformation
} from '../services/fetchAnotherInformation.service'

export default async function useFetchAllInformations (
  someParameter
) {

  try {
    let [some, another] = await Promise.all([
      somePromisse(someParameter),
      aotherPromisse(someParameter),
    ])

    let response = {
      some: some,
      another: another,
    }

    return response
  } catch (error) {
    return console.error('Houve um problema com a requisição Fetch: ' + error.message)
  }
}

const somePromisse = async (someParameter) => {
  let some = await fetchSomeInformation(someParameter)
  let someData = await some.json()

  return someData
}

const aotherPromisse = async (someParameter) => {
  let another = await fetchAnotherInformation(someParameter)
  let anotherData = await another.json()

  return anotherData
}