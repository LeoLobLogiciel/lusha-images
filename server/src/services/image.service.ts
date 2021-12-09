import { Request, Response } from 'express'
import { getImages_DALC } from "../DALC/image.dalc"


export const getImages_Service = async (): Promise <any> => {
  const response = await getImages_DALC()
  return response

}
