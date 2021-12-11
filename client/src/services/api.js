
const getImagesFromAPI = async (currentPage, pageSize) => {
  const res=await fetch(`/api/images/${currentPage}/${pageSize}`)
  const data=await res.json()
  return data.data
}

export default getImagesFromAPI