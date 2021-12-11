
const getImagesFromAPI = async (currentPage, pageSize) => {
  try {
    console.log(currentPage)
    const res=await fetch(`/api/images/${currentPage}/${pageSize}`)
    const data=await res.json()
    return {status: 'OK', data: data.data}
  } catch (error) {
    return {status: 'ERROR', data: error}
  }
}

export default getImagesFromAPI