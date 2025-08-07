import { Router } from 'express'
import auth from '../middleware/auth.js';
import upload from '../middleware/multer.js';
import { createCategory, deleteCategory, getCategories, getCategoriesCount, getCategory, getSubCategoriesCount, removeImageFromCloudinary, updatedCategory, uploadImages } from '../controllers/category.controller.js';


const categoryRouter = Router();
//categoryRouter.post('/uploadImages',auth,upload.array('images'), uploadImages)
categoryRouter.post('/uploadImages',upload.array('images'), uploadImages)   //temp
categoryRouter.post('/create',auth,createCategory)
categoryRouter.get('/',getCategories)
categoryRouter.get('/get/count',getCategoriesCount)
categoryRouter.get('/get/count/subCategories',getSubCategoriesCount)
categoryRouter.get('/:id',getCategory)
//categoryRouter.delete('/deleteImage',auth,removeImageFromCloudinary)
categoryRouter.delete('/deleteImage',removeImageFromCloudinary)  // temp
categoryRouter.delete('/:id',auth,deleteCategory)
categoryRouter.put('/:id',auth,updatedCategory)


export default categoryRouter;