import mongoose from "mongoose";

const bannerV1Schema = new mongoose.Schema({
    bannerTitle: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    catId: {
        type: String,
        default: ''
    },
    subCatId: {
        type: String,
        default: ''
    },
    thirdsubCatId: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

const bannerV1Model = mongoose.model('BannerV1', bannerV1Schema)

export default bannerV1Model;