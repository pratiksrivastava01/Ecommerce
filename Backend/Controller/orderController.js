import Order from "../Models/orderModel.js";
import Product from "../Models/productModels.js";
import ErrorHandler from "../Utils/errorHandler.js";
import catchAsyncErrors from "../Middleware/catchAsyncErrors.js"


// Create new Order 
const newOrder = catchAsyncErrors(async (req, res, next) =>{
 
    const {shippingInfo,
        orderItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    })

    res.status(201).json({
        sucess: true,
        order,
    })
})

export {newOrder};