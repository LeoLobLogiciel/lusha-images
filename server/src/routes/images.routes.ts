import { Router } from 'express'
import { getImages_controller } from '../controllers/images.controller'

const router = Router();

router.get('/images', getImages_controller)

export default router