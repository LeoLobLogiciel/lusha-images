import axios from "axios"

export const getImages_DALC = async () => {

  const headers={'x-api-key': 'api-key-69d6587b-eadb-4902-8076-30e738ec8613'}
  try {
    const response=await axios("https://api.jonathanczyzyk.com/api/v1/images/small", {headers})
    // const dataReturn = `${response.data.length} images found!`
    return response.data
  } catch (error) {
    console.log(error)
    return `Error: ${error}`
  }

}

