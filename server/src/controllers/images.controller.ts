import { Request, Response } from 'express'
import { getAllImages_Service, getImagesPaginated_Service } from '../services/image.service'

// Controller: get all images
export const getAllImages_controller = async (req: Request, res: Response): Promise <Response> => {

    // Validation of parameters logic here

    const response = await getAllImages_Service()
    return res.json(require('lsi-util-node/API').getFormatedResponse(response))
}

// Controller: get paginated images
export const getPaginatedImages_controller = async (req: Request, res: Response): Promise <Response> => {

    // Validation of parameters logic here
    if (!req.params.page) {
        return res.status(404).json(require('lsi-util-node/API').getFormatedResponse('', 'Missing parameter: page'))
    }
    if (!req.params.pageSize) {
        return res.status(404).json(require('lsi-util-node/API').getFormatedResponse('', 'Missing parameter: pageSize'))
    }    

    const response = await getImagesPaginated_Service(Number(req.params.page), Number(req.params.pageSize))
    return res.json(require('lsi-util-node/API').getFormatedResponse(response))
}
