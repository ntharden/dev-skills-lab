import { Router } from 'express'
import { index } from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', index)
router.get('/new', )

export {
  router
}
