import "./App.css";
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import { MyContext } from "./MyContext.jsx";
import { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]); //stores all chats of curr threads
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);

  const providerValues = {
    prompt,
    setPrompt,
    reply,
    setReply,
    currThreadId,
    setCurrThreadId,
    newChat,
    setNewChat,
    prevChats,
    setPrevChats,
    allThreads,
    setAllThreads,
  };

  const { isSignedIn, user } = useUser();

  if (isSignedIn) {
    return (
      <div className="app">
        <MyContext.Provider value={providerValues}>
          <Sidebar></Sidebar>
          <ChatWindow></ChatWindow>
        </MyContext.Provider>
      </div>
    );
  }

  return (
    <div className="landing-page">
      <div className="hero-content">
        <h1>Welcome to ChatterJi</h1>
        <p>Your place to connect and chat with friends.</p>
        <div className="hero-buttons">
          <SignInButton mode="modal">
            <button className="hero-btn signin">Sign In</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="hero-btn signup">Sign Up</button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}

export default App;
