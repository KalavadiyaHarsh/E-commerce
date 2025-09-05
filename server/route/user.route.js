import { Router } from 'express'
import { addReview, authWithGoogle, forgotPasswordController, getReviews, loginUserController, logoutController, refreshToken, registerUserController, removeImageFromCloudinary, resetPassword, updateUserDetails, userAvatarController, userDetails, verifyEmailController, verifyForgotPasswordOtp } from '../controllers/user.controller.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/multer.js';


const userRouter = Router()
userRouter.post('/register',registerUserController)
userRouter.post('/verifyEmail',verifyEmailController)
userRouter.post('/login',loginUserController)
userRouter.post('/authWithGoogle',authWithGoogle)
userRouter.get('/logout',auth,logoutController)
userRouter.put('/user-avatar',auth,upload.array('avatar'),userAvatarController)
userRouter.delete('/deleteImage',auth,removeImageFromCloudinary)
userRouter.post('/forgot-password', forgotPasswordController)
userRouter.post('/verify-forgot-password-otp',verifyForgotPasswordOtp)
userRouter.put('/:id',auth,updateUserDetails)
userRouter.post('/reset-password', resetPassword)
userRouter.post('/refresh-token', refreshToken)
userRouter.get('/user-details',auth,userDetails)
userRouter.post('/addReview',auth,addReview)
userRouter.get('/getReviews',getReviews)

export default userRouter;