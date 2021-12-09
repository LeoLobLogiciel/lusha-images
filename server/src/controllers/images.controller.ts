import { Request, Response } from 'express'
import { getImages_Service } from '../services/image.service'

// Controller: get all images
export const getImages_controller = async (req: Request, res: Response): Promise <Response> => {
    const response = await getImages_Service()
    return res.json(require('lsi-util-node/API').getFormatedResponse(response))
}

