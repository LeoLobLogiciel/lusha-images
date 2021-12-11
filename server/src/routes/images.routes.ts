import { Router } from 'express'
import { getAllImages_controller, getPaginatedImages_controller } from '../controllers/images.controller'

const router = Router()

router.get('/images', getAllImages_controller)
router.get('/images/:page/:pageSize', getPaginatedImages_controller)

export default router