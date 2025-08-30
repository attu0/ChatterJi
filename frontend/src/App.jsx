import "./App.css";
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import { MyContext } from "./MyContext.jsx";
import { useState } from "react";
import {v1 as uuid} from "uuid";

function App() {
  const [prompt,setPrompt] = useState("");
  const [reply,setReply] = useState(null);
  const [currThreadId, setcurrThreadId] = useState(uuid());
  const [prevChats,setPrevChats] = useState([]); // Changed: prevChat -> prevChats
  const [newChat,setNewChat] = useState(true);

  const providerValue = {
    prompt, setPrompt,
    reply, setReply,
    newChat, setNewChat,
    prevChats, setPrevChats // Changed: prevChat, setPrevChat -> prevChats, setPrevChats
  };
  return (
    <div className="app">
      <MyContext.Provider value={providerValue}>
        <Sidebar></Sidebar>
        <ChatWindow></ChatWindow>
      </MyContext.Provider>
    </div>
  );
}

export default App;
