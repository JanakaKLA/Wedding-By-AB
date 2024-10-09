// import wedModel from "../models/wedModel.js";
// import fs from "fs";

// // add wedding menu


// const addWed = async (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ success: false, message: "No image uploaded" });
//     }

//     let image_filename = `${req.file.filename}`;

//     const wedding = new wedModel({
//         name: req.body.name,
//         description: req.body.description,
//         category: req.body.category,
//         image: image_filename,
//         fbLink: req.body.fbLink, 
//         instagramLink: req.body.instagramLink 
//     });

//     try {
//         await wedding.save();
//         res.json({ success: true, message: "Wedding added" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Error saving wedding" });
//     }
// };


// //all place list
// const listPlace = async (req,res) => {
//     try {
//         const weddings = await wedModel.find({});
//         res.json({success:true,data:weddings})
//     }catch (error){
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// //remove placeItem
// const removePlace = async (req,res) => {
//     try{
//             const wedding = await wedModel.findById(req.body.id);
//             fs.unlink(`uploads/${wedding.image}`,()=>{})

//             await wedModel.findByIdAndDelete(req.body.id);
//             res.json({success:true,message:"Food Removed"})

//     }catch (error){
//             console.log(error);
//             res.json({success:false,message:"Error"})
//     }
// }

// export { addWed,listPlace,removePlace };


import wedModel from "../models/wedModel.js";
import fs from "fs";

// add wedding item
const addWed = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    let image_filename = `${req.file.filename}`;

    const wedding = new wedModel({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image: image_filename,
        fbLink: req.body.fbLink, 
        instagramLink: req.body.instagramLink 
    });

    try {
        await wedding.save();
        res.json({ success: true, message: "Wedding item added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error saving wedding item" });
    }
};

// All wedding list
const listPlace = async (req, res) => {
    try {
        const weddings = await wedModel.find({});
        res.json({ success: true, data: weddings });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching wedding items" });
    }
};

// Remove wedding item
const removePlace = async (req, res) => {
    try {
        const wedding = await wedModel.findById(req.body.id);
        fs.unlink(`uploads/${wedding.image}`, () => {});

        await wedModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Item removed successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing item" });
    }
};

export { addWed, listPlace, removePlace };
