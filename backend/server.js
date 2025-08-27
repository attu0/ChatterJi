import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import mongoose from "mongoose";
import "dotenv/config";
import chatRoutes from "./routes/chat.js"

const app = express();
const PORT = 8080;

// Middleware to parse JSON and enable CORS will be used in frontend integration
app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`);
    connnectDB();
});

const connnectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected with database");
    }catch(err){
        console.log("Failed to connect ",err);
    }
}

// app.post("/test", async (req, res) => {
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             model: "llama3.1:8b",
//             messages: [{
//                 role: "user",
//                 content: req.body.messages
//             }],
//             stream: false, 
//         })
//     };
//     try {
//         const response = await fetch("http://localhost:11434/api/chat", options);
//         const data = await response.json();
//         res.send(data.message.content);
//         console.log(data.message.content);

//     } catch (err) {
//         console.error(err);
//     }
// });