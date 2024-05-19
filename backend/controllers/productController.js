const Product = require("../models/productModel");

//Create Product -- Admin

exports.createProduct = async (req,resp,next) => {
    const product = await Product.create(req.body);

    resp.status(201).json({
        success : true,
        product
    })
}

// Get all products

exports.getAllProducts = async (req,resp,next) => {
    const products = await Product.find();
    resp.status(201).json({
        success : true,
        products
    })    
}

// Get Single Product 

exports.getProductDetails = async (req,resp,next) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return resp.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    resp.status(200).json({
        success:true,
        product
    })
}

// Update Product -- Admin

exports.updateProduct = async (req,resp,next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return resp.status(500).json({
            success : false,
            message : "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators : true,
        useFindAndModify:false
    });
    resp.status(200).json({
        success:true,
        product
    })
}

// Delete Product

exports.deleteProduct = async (req,resp,next) => {

    const product = await Product.findById(req.params.id);
    
    if(!product){
        return resp.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    await product.remove();

    resp.status(200).json({
        success:true,
        message: "Product deleted Successfully"
    })
}