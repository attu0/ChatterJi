import express from "express";
import Thread from "../models/Thread.js"
import getOllamaAPIResponse from "../utils/ollama.js"

const router = express.Router();

//test 
router.post("/test", async (req, res) => {
    try {
        const thread = new Thread({
            threadId: "abc",
            title: "test2"
        });

        const resposne = await thread.save();
        res.send(resposne);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "failed to connect db" });
    }
});

//Get all threads
router.get("/thread", async (req, res) => {
    try {
        const threads = await Thread.find({}).sort({ updatedAt: -1 }); // to get all threads in descinedg sorted fashion 
        res.json(threads);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "failed to fetch thread" });
    }
});

//get particular thread
router.get("/thread/:threadId", async (req, res) => {

    const { threadId } = req.params;

    try {
        let thread = await Thread.findOne({ threadId });

        if (!thread) {
            res.status(404).json({ error: "Thread not found" });
        }

        res.json(thread.messages);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "failed to fetch thread chat" });
    }
});

//delete thread
router.delete("/thread/:threadId", async (req, res) => {

    const { threadId } = req.params;

    try {

        const deleteThread = await Thread.findOneAndDelete({ threadId });

        if (!deleteThread) {
            return res.status(404).json({ error: "Thread not found" });
        }

        res.status(200).json({ success: "Thread deleted" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "failed to delete thread" });
    }
});

//chat 
router.post("/chat", async (req, res) => {

    const { threadId, message } = req.body;

    //step 1 validate
    if (!threadId || !message) {
        res.status(400).json({ errro: "missing required fields" });
    }

    //step 2 if thread is not present then create else access the chat

    try {
        let thread = await Thread.findOne({threadId});

        if(!thread){
            //create a new thread
            thread = new Thread({
                threadId,
                title : message,
                messages : [{role:"user",content : message}]
            });
        }else{
            thread.messages.push({role:"user",content : message});
        }

        //step 3 save the user message in thread get ollama response

        const asssistantReply = await getOllamaAPIResponse(message);

        thread.messages.push({role:"assistant",content:asssistantReply});
        thread.updatedAt = new Date();

        await thread.save();
        res.json({reply:asssistantReply});

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "something went wrong" });
    }
});

export default router;