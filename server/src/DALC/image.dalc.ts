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

  const headers={'x-api-key': 'api-key-69d6587b-eadb-4902-8076-30e738ec8613'}
  try {
    let response=await axios('https://api.jonathanczyzyk.com/api/v1/images/small', {headers})
    let index=0
    for (const unaImagen of response.data) {
      index++
      unaImagen.id=index
    }
    // let response={data: Array.from({length: 100}, (v,k)=>k+1)}

    //Remove the previous and the last images
    response.data.splice(0, (page-1)*pageSize)
    response.data.splice(pageSize)

    return response.data

  } catch (error) {
    return `Error: ${error}`
  }
}

