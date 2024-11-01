import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing user order from frontend
const placeOrder = async (req, res) => {
    try {
        // Extract userId from token (authMiddleware adds req.userId)
        const userId = req.body.userId; // This comes from the authMiddleware
        
        
        // Create a new order
        const newOrder = new orderModel({
            userId: userId, // Use the extracted userId
            items: req.body.items,
            //amount: req.body.amount, // You can also calculate this on the backend for security
            address: req.body.address // Customer's shipping address
        });

        // Save the order to the database
        await newOrder.save();

        // Clear the user's cart (this is optional)
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        // Create a session_url (could be for payment or order confirmation)
        //const session_url = `http://localhost:5173/order/confirmation/${newOrder._id}`; // Adjust this URL

        // Send a success response
        res.json({
            success: true,
            message: "Order placed successfully",
            order: newOrder
        });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({
            success: false,
            message: "Error placing order"
        });
    }
};

//user orders for frontend

const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({
            userId:req.body.userId
        });
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
    }
}


//<Listing orders for admin panel
const listOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    }catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//api for updating order status
const updateStatus = async (req,res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:"Status Updated"})
    }catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export { placeOrder,userOrders,listOrders,updateStatus };






