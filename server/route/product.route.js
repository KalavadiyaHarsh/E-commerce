import { Router } from "express";
import auth from '../middleware/auth.js';
import upload from '../middleware/multer.js';
import { createProduct, deleteMultipleProduct, deleteProduct, filters, getAllFeatureProducts, getAllProducts, getAllProductsByCatId, getAllProductsByCatName, getAllProductsByPrice, getAllProductsByRating, getAllProductsBySubCatId, getAllProductsBySubCatName, getAllProductsByThirdLavelCatId, getAllProductsByThirdLavelCatName, getProduct, getProductsCount, removeImageFromCloudinary, updateProduct, uploadImages } from "../controllers/product.controller.js";


const productRouter = Router();

//productRouter.post('/uploadImages',auth,upload.array('images'), uploadImages)
productRouter.post('/uploadImages',upload.array('images'), uploadImages)   //temporary solution to allow image upload without auth

//productRouter.post('/create',auth,createProduct)
productRouter.post('/create',createProduct) //temp

productRouter.get('/getAllProducts',getAllProducts)
productRouter.get('/getAllProductsByCatId/:id',getAllProductsByCatId)
productRouter.get('/getAllProductsByCatName',getAllProductsByCatName)
productRouter.get('/getAllProductsBySubCatId/:id',getAllProductsBySubCatId)
productRouter.get('/getAllProductsBySubCatName',getAllProductsBySubCatName)
productRouter.get('/getAllProductsByThirdLavelCatId/:id',getAllProductsByThirdLavelCatId)
productRouter.get('/getAllProductsByThirdLavelCatName',getAllProductsByThirdLavelCatName)
productRouter.get('/getAllProductsByPrice',getAllProductsByPrice)
productRouter.get('/getAllProductsByRating',getAllProductsByRating)
productRouter.get('/getAllProductsCount',getProductsCount)
productRouter.get('/getAllFeatureProducts',getAllFeatureProducts)
productRouter.delete('/deleteMultiple', deleteMultipleProduct)
productRouter.delete('/:id',deleteProduct)
productRouter.get('/:id',getProduct)
//productRouter.delete('/deleteImage',auth,removeImageFromCloudinary)
productRouter.delete('/deleteImage',removeImageFromCloudinary) //temp
productRouter.post('/filters', filters);

//productRouter.put('/updateProduct',auth,updateProduct)
productRouter.put('/:id',updateProduct) //temp


export default productRouter
