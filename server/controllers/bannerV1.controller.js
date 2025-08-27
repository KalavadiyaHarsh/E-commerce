import bannerV1Model from '../models/bannerV1.model.js'

import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";


cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret, // Click 'View API Keys' above to copy your API secret
    secure: true
});


//upload Image
var imagesArr = [];
export async function uploadImages(req, res) {
    try {
        imagesArr = [];

        const image = req.files;

        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: false,
        };

        for (let i = 0; i < image?.length; i++) {

            try {
                const result = await cloudinary.uploader.upload(image[i].path, options);
                imagesArr.push(result.secure_url);

                // Delete the local file after successful upload
                fs.unlinkSync(`uploads/${image[i].filename}`);
                console.log(`Deleted: ${image[i].filename}`);
            } catch (error) {
                console.error(`Error uploading ${image[i].filename}:`, error);
            }
        }


        return res.status(200).json({
            image: imagesArr
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


//create Banner
export async function addBanner(req, res) {
    try {
        let banner = new bannerV1Model({
            bannerTitle: req.body.bannerTitle,
            images: imagesArr,
            catId: req.body.catId,
            subCatId: req.body.subCatId,
            thirdsubCatId: req.body.thirdsubCatId,
            price: req.body.price,
        })

        if (!banner) {
            return res.status(400).json({
                message: "Banner not created",
                error: true,
                success: false
            })
        }

        banner = await banner.save();
        imagesArr = [];


        return res.status(200).json({
            message: "Banner created",
            error: false,
            success: true,
            banner: banner
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


//get Banners
export async function getBanners(req, res) {
    try {

        const Banners = await bannerV1Model.find();

        if (!Banners) {
            res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            success: true,
            error: false,
            data: Banners
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Something went wrong",
        });
    }
}

//get single category
export async function getBanner(req, res) {
    try {
        const banner = await bannerV1Model.findById(req.params.id);

        if (!banner) {
            return res.status(500).json({
                message: "The banner with the given ID was not found.",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            error: false,
            success: true,
            banner: banner
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: true,
            success: false
        });
    }
}


export async function removeImageFromCloudinary(req, res) {
    try {
        const imageUrl = req.query.img;

        if (!imageUrl) {
            return res.status(400).json({ error: "Image URL is required" });
        }

        const urlArr = imageUrl.split("/");  //urlSegments 
        const image = urlArr[urlArr.length - 1];  //filenameWithExtension
        const imageName = image.split(".")[0];

        const cloudinaryresult = await cloudinary.uploader.destroy(imageName);

        if (cloudinaryresult.result === "ok") {
            return res.status(200).json({
                message: "Image deleted successfully",
                data: cloudinaryresult
            });
        } else {
            return res.status(404).json({
                error: "Image not found or already deleted",
                data: cloudinaryresult
            });
        }
    } catch (error) {
        console.error("Error deleting image:", error);
        return res.status(500).json({
            error: "Internal server error",
            details: error.message
        });
    }
}


export const deleteBanner = async (req, res) => {
    try {

        const banner = await bannerV1Model.findById(req.params.id);
        if (!banner) {
            return res.status(404).json({
                message: "Banner not found!",
                success: false,
            });
        }

        const images = banner.images;
        for (const imgUrl of images) {
            const urlArr = imgUrl.split("/");
            const image = urlArr[urlArr.length - 1];
            const imageName = image.split(".")[0];

            if (imageName) {
                cloudinary.uploader.destroy(imageName, (error, result) => {

                });
            }
        }

        const deletedBanner = await bannerV1Model.findByIdAndDelete(req.params.id);

        if (!deletedBanner) {
            return res.status(404).json({
                message: "Banner not found!",
                success: false,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Banner Deleted!",
        });
    } catch (error) {
        console.error("Delete Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


export async function updatedBanner(req, res) {
    try {
        const banner = await bannerV1Model.findByIdAndUpdate(
            req.params.id,
            {
                bannerTitle: req.body.bannerTitle,
                images: imagesArr.length > 0 ? imagesArr[0] : req.body.images,
                catId: req.body.catId,
                subCatId: req.body.subCatId,
                thirdsubCatId: req.body.thirdsubCatId,
                price: req.body.price,
            },
            { new: true } // return updated document
        );

        if (!banner) {
            return res.status(500).json({
                message: "Banner cannot be updated!",
                success: false,
                error: true,
            });
        }

        // Optional: declared but unused array (can remove if unnecessary)
        imagesArr = [];

        return res.status(200).json({
            error: false,
            success: true,
            banner: banner,
            message: "Banner updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            success: false,
            error: true,
            details: error.message,
        });
    }
}