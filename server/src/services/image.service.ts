import { Request, Response } from 'express'
import { getPaginatedImages_controller } from '../controllers/images.controller'
import { getAllImages_DALC, getPaginatedImages_DALC } from "../DALC/image.dalc"


export const getAllImages_Service = async (): Promise <any> => {

  //Logic of getting all images here
  
  const response = await getAllImages_DALC()
  return response
}

export const getImagesPaginated_Service = async (page: number, pageSize: number): Promise <any> => {

  //Logic of getting all images here
  
  const response = await getPaginatedImages_DALC(page, pageSize)
  return response

}
