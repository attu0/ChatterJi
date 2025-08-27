import express from "express";
import Thread from "../models/Thread.js"

const router = express.Router();

//test 
router.post("/test", async(req,res) =>{
    try{
        const thread = new Thread({
            threadId : "abc",
            title : "test2"
        });

        const resposne =await thread.save();
        res.send(resposne);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"failed to connect db"});
    }
});

export default router;