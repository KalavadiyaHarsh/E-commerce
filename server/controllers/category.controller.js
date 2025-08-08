import CategoryModel from "../models/category.model.js";

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

            // const img = await cloudinary.uploader.upload(
            //     image[i].path,
            //     options,
            //     function(error, result){
            //         imagesArr.push(result.secure_url);
            //         fs.unlinkSync(`uploads/${image[i].filename}`);
            //         console.log(image[i].filename)
            //     }
            // );

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


//create Category
export async function createCategory(req, res) {
    try {
        let category = new CategoryModel({
            name: req.body.name,
            images: imagesArr,
            parentId: req.body.parentId,
            parentCatName: req.body.parentCatName
        })

        if (!category) {
            return res.status(500).json({
                message: "Category not created",
                error: true,
                success: false
            })
        }

        category = await category.save();
        imagesArr = [];


        return res.status(200).json({
            message: "Category created",
            error: false,
            success: true,
            category: category
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


//get Category
export async function getCategories(req, res) {
    try {
        // Fetch all categories from MongoDB
        const categories = await CategoryModel.find();

        const categoryMap = {};

        // Step 1: Initialize map with each category and a children array
        categories.forEach(cat => {
            categoryMap[cat._id] = { ...cat._doc, children: [] };
        });

        const rootCategories = [];

        // Step 2: Organize hierarchy
        categories.forEach(cat => {
            if (cat.parentId) {
                // If it has a parent, push it to its parent's children
                categoryMap[cat.parentId]?.children.push(categoryMap[cat._id]);
            } else {
                // No parentId means root category
                rootCategories.push(categoryMap[cat._id]);
            }
        });

        // Step 3: Respond with nested categories
        return res.status(200).json({
            success: true,
            error: false,
            data: rootCategories
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Something went wrong",
        });
    }
}


// Get category count where parentId is undefined
export async function getCategoriesCount(req, res) {
    try {
        const categoryCount = await CategoryModel.countDocuments({ parentId: undefined });

        if (categoryCount === 0) {
            return res.status(404).json({
                success: false,
                message: "No categories found",
                categoryCount: 0
            });
        }

        return res.status(200).json({
            success: true,
            categoryCount
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal server error",
            error: true,
            success: false
        });
    }
}

//Get sub-category count
export async function getSubCategoriesCount(req, res) {
    try {
        const categories = await CategoryModel.find();

        if (!categories) {
            res.status(500).json({ success: false, error: true });
        } else {
            const subcatArr = [];
            for (let cat of categories) {
                if (cat.parentId !== undefined) {
                    subcatArr.push(cat);
                }
            }

            res.status(200).json({
                success: true,
                subCategoryCount: subcatArr.length
            });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: true });
    }
}


//get single category
export async function getCategory(req, res) {
    try {
        const category = await CategoryModel.findById(req.params.id);

        if (!category) {
            return res.status(500).json({
                message: "The category with the given ID was not found.",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            error: false,
            success: true,
            category: category
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


export const deleteCategory = async (req, res) => {
    try {
        // 1. Get the main category to delete
        const category = await CategoryModel.findById(req.params.id);
        if (!category) {
            return res.status(404).json({
                message: "Category not found!",
                success: false,
            });
        }

        // 2. Delete Cloudinary images
        const images = category.images;
        for (const imgUrl of images) {
            const urlArr = imgUrl.split("/");
            const image = urlArr[urlArr.length - 1];
            const imageName = image.split(".")[0];

            if (imageName) {
                cloudinary.uploader.destroy(imageName, (error, result) => {

                });
            }
        }

        // 3. Delete subcategories and their third-level subcategories
        const subCategory = await CategoryModel.find({ parentId: req.params.id });

        for (let i = 0; i < subCategory.length; i++) {
            const thirdSubCategory = await CategoryModel.find({
                parentId: subCategory[i]._id,
            });

            for (let j = 0; j < thirdSubCategory.length; j++) {
                await CategoryModel.findByIdAndDelete(thirdSubCategory[j]._id);
            }

            await CategoryModel.findByIdAndDelete(subCategory[i]._id);
        }

        // 4. Delete the main category
        const deletedCat = await CategoryModel.findByIdAndDelete(req.params.id);
        
        if (!deletedCat) {
            return res.status(404).json({
                message: "Category not found!",
                success: false,
            });
        }

        // 5. Return success response
        return res.status(200).json({
            success: true,
            message: "Category Deleted!",
        });
    } catch (error) {
        console.error("Delete Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


export async function updatedCategory(req, res) {
  try {
    const category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        images: imagesArr.length>0 ? imagesArr[0] : req.body.images,
        parentId: req.body.parentId,
        parentCatName: req.body.parentCatName,
      },
      { new: true } // return updated document
    );

    if (!category) {
      return res.status(500).json({
        message: "Category cannot be updated!",
        success: false,
        error: true,
      });
    }

    // Optional: declared but unused array (can remove if unnecessary)
    imagesArr = [];

    return res.status(200).json({
      error: false,
      success: true,
      category: category,
      message: "Category updated successfully",
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
