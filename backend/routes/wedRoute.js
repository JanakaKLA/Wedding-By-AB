// import express from "express";
// import { addWed,listPlace,removePlace } from "../controllers/wedController.js";
// import multer from "multer";
// import path from "path";

// const wedRouter = express.Router();

// // Image storage Engine
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.resolve("uploads"));
//     },
//     filename: (req, file, cb) => {
//         return cb(null, `${Date.now()}${file.originalname}`);
//     },
// });

// const upload = multer({ storage: storage });

// wedRouter.post("/add", upload.single("image"), addWed);
// wedRouter.get("/list",listPlace)
// wedRouter.post("/remove",removePlace);



// export default wedRouter;

import express from "express";
import { addWed, listPlace, removePlace } from "../controllers/wedController.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Router
const wedRouter = express.Router();

// Ensure uploads folder exists
const uploadPath = path.resolve("uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Image storage engine with error handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);  // Ensure path exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Routes
wedRouter.post("/add", upload.single("image"), addWed);
wedRouter.get("/list", listPlace);

// Option 1: Using DELETE (RESTful)
wedRouter.delete("/remove/:id", removePlace);

// Option 2: Keeping POST for deletion (If using POST method in frontend)
wedRouter.post("/remove", removePlace);

export default wedRouter;

