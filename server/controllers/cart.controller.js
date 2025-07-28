import CartProductModel from '../models/cartproduct.model.js';
import UserModel from '../models/user.model.js';

export async function addToCartItemController(req, res) {
    try {
        const userId = req.userId;
        const { productId } = req.body;

        if (!productId) {
            return res.status(402).json({
                message: "Provide ProductId",
                error: true,
                success: false
            })
        }

        const checkItemCart = await CartProductModel.findOne({
            userId: userId,
            productId: productId
        })

        if (checkItemCart) {
            return res.status(400).json({
                message: "Item already in cart"
            })
        }

        const cartItem = new CartProductModel({
            quantity: 1,
            userId: userId,
            productId: productId
        })

        const save = await cartItem.save()

        const updateCartUser = await UserModel.updateOne({ _id: userId }, {
            $push: {
                shopping_cart: productId
            }
        })

        return res.status(200).json({
            data: save,
            message: "Item add Successfully",
            success: true,
            error: false
        })



    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


export async function getCartItemController(req, res) {
    try {
        const userId = req.userId;

        const cartItem = await CartProductModel.find({
            userId: userId
        }).populate('productId')

        return res.status(200).json({
            data: cartItem,
            error: false,
            success: true
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


export async function updateCartItemQtyController(req, res) {
    try {
        const userId = req.userId;
        const { _id, qty } = req.body

        if (!_id || !qty) {
            return res.status(400).json({
                message: "Provide _id. qty"
            })
        }

        const updateCartitem = await CartProductModel.updateOne({
            _id: _id,
            userId: userId
        },
            {
                quantity: qty
            }
        )

        return res.status(200).json({
            message: "Update cart",
            success: true,
            error: false,
            data: updateCartitem
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


export async function deleteCartItemQtyController(req, res) {
    try {
        const userId = req.userId;
        const { _id, productId } = req.body;

        if (!_id) {
            return res.status(400).json({
                message: "Provide _id",
                error: true,
                success: false
            })
        }

        const deleteCartItem = await CartProductModel.deleteOne({ _id: _id, userId: userId })

        if (!deleteCartItem) {
            return res.status(404).json({
                message: "The product  in the cart not found",
                error: true,
                success: false
            })
        }

        const user = await UserModel.findOne({
            _id: userId
        })

        const cartItem = user?.shopping_cart;

        const updatedUserCart = [...cartItem.slice(0, cartItem.indexOf(productId)), ...cartItem.slice(cartItem.indexOf(productId) + 1)];

        user.shopping_cart = updatedUserCart;

        await user.save();

        return res.status(200).json({
            message: "Item remove",
            error: false,
            success: true,
            data: deleteCartItem
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}