import mongoose from "mongoose";

const wedSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    fbLink: { type: String, required: false }, 
    instagramLink: { type: String, required: false } 
});

const wedModel = mongoose.models.wedding || mongoose.model("wedding", wedSchema);

export default wedModel;

