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
  const providerValue = {
    prompt, setPrompt,
    reply, setReply
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
