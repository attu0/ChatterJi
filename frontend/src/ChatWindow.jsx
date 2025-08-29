import "./ChatWindow.css";
import Chat from "./Chat.jsx";

function ChatWindow(){
    return (
        <div className="Chatwindow">
            <div className="navbar">
                <span>ChatterJi <i class="fa-solid fa-arrow-down"></i></span>
                <div className="userIconDiv" ><span><i class="fa-solid fa-user"></i></span></div>
            </div>
            <Chat></Chat>
            <div className="chatInput">
                <div className="userInput">
                    <input placeholder="ask anything...">

                    </input>
                    <div id="submit"><i class="fa-solid fa-paper-plane"></i></div>
                </div>
                <p className="info">
                    i am very dangerous i can make some mistakes that can vanish you.
                </p>
            </div>
        </div>
    )
}
export default ChatWindow;