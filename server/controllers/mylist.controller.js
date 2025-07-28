import MyListModel from "../models/myList.model.js";

export async function addtoMyListController(req, res) {
    try {
        const userId = req.userId;
        const {
            productId,
            productTitle,
            image,
            rating,
            price,
            oldprice,
            brand,
            discount
        } = req.body;

        const item = await MyListModel.findOne({
            userId: userId,
            productId: productId
        })

        if (item) {
            return res.status(400).json({
                message: "Item already in my list"
            })
        }

        const myList = new MyListModel({
            productId,
            productTitle,
            image,
            rating,
            price,
            oldprice,
            brand,
            discount,
            userId
        })

        const save = await myList.save();

        return res.status(200).json({
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


export async function deleteToMyListController(req, res) {
    try {
        const myListItem = await MyListModel.findById(req.params.id);

        if (!myListItem) {
            return res.status(404).json({
                error: true,
                success: false,
                message: "the item with this given id was not found"
            })
        }

        const deleteitem = await MyListModel.findByIdAndDelete(req.params.id);

        if (!deleteitem) {
            return res.status(404).json({
                error: true,
                success: false,
                message: "the item is not deleted"
            })
        }

        return res.status(200).json({
            message: "The Item remove from My List",
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


export async function getMyListController(req, res) {
    try {
        const userId = req.userId;

        const myListItems = await MyListModel.find({
            userId : userId
        })

        return res.status(200).json({
            error: false,
            success: true,
            data: myListItems
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}