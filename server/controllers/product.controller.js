import ProductModel from "../models/product.model.js";

import { v2 as cloudinary } from 'cloudinary';
import { error } from "console";
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


// create product
export async function createProduct(req, res) {
    try {
        let product = new ProductModel({
            name: req.body.name,
            description: req.body.description,
            // images: imagesArr,
            images: req.body.images,
            brand: req.body.brand,
            price: req.body.price,
            oldPrice: req.body.oldPrice,
            catName: req.body.catName,
            catId: req.body.catId,
            category: req.body.category,
            subCatId: req.body.subCatId,
            subCat: req.body.subCat,
            thirdsubCat: req.body.thirdsubCat,
            thirdsubCatId: req.body.thirdsubCatId,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            isFeatured: req.body.isFeatured,
            discount: req.body.discount,
            sale: req.body.sale,
            productRam: req.body.productRam,
            size: req.body.size,
            productWeight: req.body.productWeight
        });

        // ❌ MISTAKE: You used ProductModel.save() instead of product.save()
        product = await product.save();

        if (!product) {
            return res.status(500).json({
                error: true,
                success: false,
                message: "Product not created"
            });
        }

        // ✅ Clear images array if it's global
        imagesArr = [];

        return res.status(200).json({
            message: "Product Created Successfully",
            error: false,
            success: true,
            data: product
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}


//get all products
export async function getAllProducts(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;

        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages) {
            return res.status(404).json({
                message: "Page not found",
                success: false,
                error: true,
            });
        }

        // const products = await ProductModel.find()
        //     .populate("category")
        //     .skip((page - 1) * perPage)
        //     .limit(perPage)
        //     .exec();

        const products = await ProductModel.find().populate("category");

        if (!products) {
            res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }

}



//get all products by category id
export async function getAllProductsByCatId(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 1000;
        const catId = req.params.id;

        // ✅ Filter total count by catId
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages && totalPages > 0) {
            return res.status(404).json({
                message: "Page not found",
                success: false,
                error: true,
            });
        }

        const products = await ProductModel.find({ catId })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage);

        return res.status(200).json({
            error: false,
            success: true,
            data: products,
            totalPages: totalPages,
            currentPage: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}


//get all products by category name
export async function getAllProductsByCatName(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 1000;
        const catName = req.query.catName;

        if (!catName) {
            return res.status(400).json({
                message: "catName query parameter is required",
                success: false,
                error: true,
            });
        }

        // ✅ Filter total count by catId
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages && totalPages > 0) {
            return res.status(404).json({
                message: "Page not found",
                success: false,
                error: true,
            });
        }

        const products = await ProductModel.find({ catName: catName })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage);

        return res.status(200).json({
            error: false,
            success: true,
            data: products,
            totalPages: totalPages,
            currentPage: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}



//get all products by Sub category id
export async function getAllProductsBySubCatId(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 1000;
        const subCatId = req.params.id;

        // ✅ Filter total count by catId
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages && totalPages > 0) {
            return res.status(404).json({
                message: "Page not found",
                success: false,
                error: true,
            });
        }

        const products = await ProductModel.find({ subCatId })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage);

        return res.status(200).json({
            error: false,
            success: true,
            data: products,
            totalPages: totalPages,
            currentPage: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}


//get all products by sub category name
export async function getAllProductsBySubCatName(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 1000;
        const subCat = req.query.subCat;

        if (!catName) {
            return res.status(400).json({
                message: "catName query parameter is required",
                success: false,
                error: true,
            });
        }

        // ✅ Filter total count by catId
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages && totalPages > 0) {
            return res.status(404).json({
                message: "Page not found",
                success: false,
                error: true,
            });
        }

        const products = await ProductModel.find({ subCat: subCat })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage);

        return res.status(200).json({
            error: false,
            success: true,
            data: products,
            totalPages: totalPages,
            currentPage: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}



//get all products by third Sub category id
export async function getAllProductsByThirdLavelCatId(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 1000;
        const thirdsubCatId = req.params.id;

        // ✅ Filter total count by catId
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages && totalPages > 0) {
            return res.status(404).json({
                message: "Page not found",
                success: false,
                error: true,
            });
        }

        const products = await ProductModel.find({ thirdsubCatId })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage);

        return res.status(200).json({
            error: false,
            success: true,
            data: products,
            totalPages: totalPages,
            currentPage: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}


//get all products by third sub category name
export async function getAllProductsByThirdLavelCatName(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 1000;
        const thirdsubCat = req.query.thirdsubCat;

        if (!catName) {
            return res.status(400).json({
                message: "catName query parameter is required",
                success: false,
                error: true,
            });
        }

        // ✅ Filter total count by catId
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages && totalPages > 0) {
            return res.status(404).json({
                message: "Page not found",
                success: false,
                error: true,
            });
        }

        const products = await ProductModel.find({ thirdsubCat: thirdsubCat })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage);

        return res.status(200).json({
            error: false,
            success: true,
            data: products,
            totalPages: totalPages,
            currentPage: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}



//get all products by price
export async function getAllProductsByPrice(req, res) {
    let productList = [];

    if (req.query.catId !== "" && req.query.catId !== undefined) {
        const productListArr = await ProductModel.find({
            catId: req.query.catId,
        }).populate("category");

        productList = productListArr;
    }

    if (req.query.subCatId !== "" && req.query.subCatId !== undefined) {
        const productListArr = await ProductModel.find({
            subCatId: req.query.subCatId,
        }).populate("category");

        productList = productListArr;
    }

    if (req.query.thirdsubCatId !== "" && req.query.thirdsubCatId !== undefined) {
        const productListArr = await ProductModel.find({
            thirdsubCatId: req.query.thirdsubCatId,
        }).populate("category");

        productList = productListArr;
    }


    const filteredProducts = productList.filter((product) => {
        if (req.query.minPrice && product.price < parseInt(+req.query.minPrice)) {
            return false;
        }
        if (req.query.maxPrice && product.price > parseInt(+req.query.maxPrice)) {
            return false;
        }
        return true;
    })

    return res.status(200).json({
        error: false,
        success: true,
        products: filteredProducts,
        total: 0,
        page: 0,
    })

}



//get all products by rating
export async function getAllProductsByRating(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 1000;
        const rating = req.query.rating;

        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages && totalPages > 0) {
            return res.status(404).json({
                message: "Page not found",
                success: false,
                error: true,
            });
        }

        let products = [];

        if (req.query.catId !== undefined) {
            products = await ProductModel.find({
                rating: rating,
                catId: req.query.catId,

            })
                .populate("category")
                .skip((page - 1) * perPage)
                .limit(perPage)
                .exec();
        }

        if (req.query.subCatId !== undefined) {
            products = await ProductModel.find({
                rating: rating,
                subCatId: req.query.subCatId,

            })
                .populate("category")
                .skip((page - 1) * perPage)
                .limit(perPage)
                .exec();
        }

        if (req.query.thirdsubCatId !== undefined) {
            products = await ProductModel.find({
                rating: rating,
                thirdsubCatId: req.query.thirdsubCatId,

            })
                .populate("category")
                .skip((page - 1) * perPage)
                .limit(perPage)
                .exec();
        }


        return res.status(200).json({
            error: false,
            success: true,
            data: products,
            totalPages: totalPages,
            currentPage: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}



//get all product count
export async function getProductsCount(req, res) {
    try {
        const productsCount = await ProductModel.countDocuments();

        if (!productsCount) {
            res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: false,
            success: true,
            productsCount: productsCount
        });


    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}



//get all feature products
export async function getAllFeatureProducts(req, res) {
    try {

        const products = await ProductModel.find({ isFeatured: true })
            .populate("category");

        if (!products) {
            res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: false,
            success: true,
            products: products,

        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}


//delete product
export async function deleteProduct(req, res) {
    try {
        const product = await ProductModel.findById(req.params.id).populate("category");

        // ❌ Typo fixed: req.params.is → req.params.id
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }

        // ✅ Loop through and delete images from Cloudinary
        const images = product.images || [];
        for (const img of images) {
            const urlArr = img.split("/");
            const image = urlArr[urlArr.length - 1];           // e.g., "image.jpg"
            const imageName = image.split(".")[0];             // e.g., "image"

            if (imageName) {
                await cloudinary.uploader.destroy(imageName);   // Await async deletion
            }
        }

        // ✅ Delete product from DB
        const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not deleted",
                success: false,
                error: true
            });
        }

        return res.status(200).json({
            message: "Product deleted!",
            success: true,
            error: false
        });

    } catch (err) {
        console.error("Error in deleteProduct:", err);
        return res.status(500).json({
            message: "Internal server error",
            error: true,
            success: false
        });
    }
}


//delete multiple products
export async function deleteMultipleProduct(req, res) {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({
            message: "Invalid or empty IDs array",
            error: true,
            success: false
        });
    }

    for (let i = 0; i < ids.length; i++) {
        const product = await ProductModel.findById(ids[i]);

        const images = product.images;
        let img = "";

        for (img of images) {

            const imgUrl = img;
            const urlArr = imgUrl.split("/");
            const image = urlArr[urlArr.length - 1];

            // e.g., "image.jpg"
            const imageName = image.split(".")[0];  // e.g., "image"
            if (imageName) {
                cloudinary.uploader.destroy(imageName, (error, result) => {

                });
            }

        }

    }

    try {
        await ProductModel.deleteMany({ _id: { $in: ids } });

        return res.status(200).json({
            message: "Products deleted successfully",
            success: true,
            error: false
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: true,
            success: false
        })
    }

}
// get single product
export async function getProduct(req, res) {
    try {
        const product = await ProductModel.findById(req.params.id).populate("category");

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            success: true,
            error: false,
            product: product
        })


    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: true,
            success: false
        });
    }
}


//delete image
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


//Updated Product
export async function updateProduct(req, res) {
    try {
        const product = await ProductModel.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                images: req.body.images,
                brand: req.body.brand,
                price: req.body.price,
                oldPrice: req.body.oldPrice,
                catId: req.body.catId,
                catName: req.body.catName,
                subCat: req.body.subCat,
                subCatId: req.body.subCatId,
                thirdsubCat: req.body.thirdsubCat,
                thirdsubCatId: req.body.thirdsubCatId,
                category: req.body.category,
                countInStock: req.body.countInStock,
                rating: req.body.rating,
                isFeatured: req.body.isFeatured,
                discount: req.body.discount,
                productRam: req.body.productRam,
                size: req.body.size,
                productWeight: req.body.productWeight
            },
            { new: true }
        );

        if (!product) {
            return res.status(404).json({
                message: "the Product can not be updated!",
                error: true,
                success: false
            });
        }

        imagesArr = [];

        return res.status(200).json({
            message: "The product is updated",
            success: true,
            error: false,
            product: product
        })


    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: true,
            success: false
        });
    }
}

export async function filters(req, res) {
    const { catId, subCatId, thirdsubCatId, minPrice, maxPrice, rating, page, limit } = req.body;

    const filters = {}

    if (catId?.length) {
        filters.catId = { $in: catId }
    }

    if (subCatId?.length) {
        filters.subCatId = { $in: subCatId }
    }

    if (thirdsubCatId?.length) {
        filters.thirdsubCatId = { $in: thirdsubCatId }
    }

    if (minPrice || maxPrice) {
        filters.price = { $gte: +minPrice || 0, $lte: +maxPrice || Infinity }
    }

    if (rating?.length) {
        filters.rating = { $in: rating }
    }

    try {
        const products = await ProductModel.find(filters)
            .populate("category")
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await ProductModel.countDocuments(filters);

        return res.status(200).json({
            error: false,
            success: true,
            products: products,
            total: total,
            page: parseInt(page),
            totalPages: Math.ceil(total / limit)
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: true,
            success: false
        });
    }

}


const sortItems = (products, sortBy, order) => {
    return products.sort((a, b) => {
        if (sortBy === 'name') {
            return order === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }

        if (sortBy === 'price') {
            return order === 'asc'
                ? a.price - b.price
                : b.price - a.price;
        }

        return 0; // default case
    });
};
export async function sortBy(req, res) {
    const { products, sortBy, order } = req.body;
    const sortedItems = sortItems([...products?.products], sortBy, order);

    return res.status(200).json({
            error: false,
            success: true,
            products: sortedItems,
            page: 0,
            totalPages: 0
        })
}