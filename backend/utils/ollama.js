import fetch from "node-fetch";

const getOllamaAPIResponse = async (message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "llama3.1:8b",
            messages: [{
                role: "user",
                content: message
            }],
            stream: false,
        })
    };
    try {
        const response = await fetch("http://localhost:11434/api/chat", options);
        const data = await response.json();
        return res.send(data.message.content); //reply
        // console.log(data.message.content); 

    } catch (err) {
        console.error(err);
    }
}

export default getOllamaAPIResponse;