import { Router } from 'express'
import auth from '../middleware/auth.js';
import upload from '../middleware/multer.js';
import { addBanner, deleteBanner, getBanner, getBanners, removeImageFromCloudinary, updatedBanner, uploadImages } from '../controllers/bannerV1.controller.js';


const bannerV1Router = Router();

//bannerV1Router.post('/uploadImages',auth,upload.array('images'), uploadImages)
bannerV1Router.post('/uploadImages',upload.array('images'), uploadImages)   //temp

//bannerV1Router.post('/create',auth,createCategory)
bannerV1Router.post('/create',addBanner)  // temp

bannerV1Router.get('/',getBanners)

bannerV1Router.get('/:id',getBanner)

//bannerV1Router.delete('/deleteImage',auth,removeImageFromCloudinary)
bannerV1Router.delete('/deleteImage',removeImageFromCloudinary)  // temp

//bannerV1Router.delete('/:id',auth,deleteCategory)
bannerV1Router.delete('/:id',deleteBanner) // temp

//bannerV1Router.put('/:id',auth,updatedCategory)
bannerV1Router.put('/:id',updatedBanner)  // temp


export default bannerV1Router;