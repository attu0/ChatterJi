import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState } from "react";
import { v1 as uuid } from "uuid";

function ChatWindow() {
  const { prompt, setPrompt, reply, setReply } = useContext(MyContext);
  const [currThreadId, setcurrThreadId] = useState(uuid());

  const getReply = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Fixed: was "applicaton/json"
      },
      body: JSON.stringify({
        message: prompt,
        threadId: currThreadId,
      })
    };

    try {
      const response = await fetch("http://localhost:8080/api/chat",options);
      const res = await response.json();
      console.log(res);
      setReply(res.reply);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Chatwindow">
      <div className="navbar">
        <span>
          ChatterJi <i className="fa-solid fa-arrow-down"></i>
        </span>
        <div className="userIconDiv">
          <span className="userIcon">
            <i className="fa-solid fa-user"></i>
          </span>
        </div>
      </div>
      <Chat></Chat>
      <div className="chatInput">
        <div className="InputBox">
          <input
            placeholder="ask anything..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onClick={(e) => e.key == 'Enter' ? getReply() : ''}
          ></input>
          <div id="submit" onClick={getReply}>
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
        <p className="info">
          i am very dangerous i can make some mistakes that can vanish you.
        </p>
      </div>
    </div>
  );
}
export default ChatWindow;