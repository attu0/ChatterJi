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

//Get all threads
router.get("/thread", async(req,res) =>{
    try{
        const threads = await Thread.find({}).sort({updatedAt : -1}); // to get all threads in descinedg sorted fashion 
        res.json(threads);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"failed to fetch thread"});
    }
});

//get particular thread
router.get("/thread/:threadId", async(req,res)=>{

    const {threadId} = req.params;

    try{
        const thread = await Thread.findOne({threadId});

        if(thread){
            res.status(404).json({error: "Thread not found"});
        }

        res.json(thread.messages);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"failed to fetch thread chat"});
    }
});

export default router;