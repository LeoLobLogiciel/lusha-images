import axios from 'axios'

export const getAllImages_DALC = async () => {

  const headers={'x-api-key': 'api-key-69d6587b-eadb-4902-8076-30e738ec8613'}
  try {
    const response=await axios('https://api.jonathanczyzyk.com/api/v1/images/small', {headers})
    return response.data
  } catch (error) {
    return `Error: ${error}`
  }
}

export const getPaginatedImages_DALC = async (page: number, pageSize: number) => {


  // console.log(page, pageSize)

  const headers={'x-api-key': 'api-key-69d6587b-eadb-4902-8076-30e738ec8613'}
  try {
    let response=await axios('https://api.jonathanczyzyk.com/api/v1/images/small', {headers})

    let paginatedResponse=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    paginatedResponse.splice(0, (page-1)*pageSize)
    paginatedResponse.splice(pageSize)
    return paginatedResponse

  } catch (error) {
    return `Error: ${error}`
  }
}

