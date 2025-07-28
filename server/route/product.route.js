import { Router } from "express";
import auth from '../middleware/auth.js';
import upload from '../middleware/multer.js';
import { createProduct, deleteProduct, getAllFeatureProducts, getAllProducts, getAllProductsByCatId, getAllProductsByCatName, getAllProductsByPrice, getAllProductsByRating, getAllProductsBySubCatId, getAllProductsBySubCatName, getAllProductsByThirdLavelCatId, getAllProductsByThirdLavelCatName, getProduct, getProductsCount, removeImageFromCloudinary, updateProduct, uploadImages } from "../controllers/product.controller.js";


const productRouter = Router();

productRouter.post('/uploadImages',auth,upload.array('images'), uploadImages)
productRouter.post('/create',auth,createProduct)
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
productRouter.delete('/:id',deleteProduct)
productRouter.get('/:id',getProduct)
productRouter.delete('/deleteImage',auth,removeImageFromCloudinary)
productRouter.put('/updateProduct',auth,updateProduct)

export default productRouter
