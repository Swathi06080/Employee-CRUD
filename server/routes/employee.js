import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import {addEmployee,upload,getEmployees, deleteEmployee} from '../controllers/employeeController.js'


const router =express.Router()

router.get('/',authMiddleware,getEmployees)
router.post('/add',authMiddleware,upload.single('image'),addEmployee)
router.delete('/api/employees/:id',deleteEmployee)

export default router