import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
import Thread from "../../backend/models/Thread";


function Sidebar() {

  const {allThreads,setAllThreads,currThreadId} = useContext(MyContext);
  const getAllThreads = async ()=>{
    try{
      const response = await fetch("http://localhost:8080/api/thread");
      const res = await response.json();
      const filterData = res.map(thread => ({threadId:thread.threadId,title : thread.title}));
      console.log(filterData);
      setAllThreads(filterData)
    }catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    getAllThreads();
  },[currThreadId])

  return (
    <section className="sidebar">
      {/* new chat button */}
      <button>
        <img src="/assets/blacklogo.png" alt="logo" className="logo" />
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      {/* history */}
      <ul className="history">
        {
          allThreads?.map((thread,idx) =>(
            <li key={idx}>{thread.title}</li>
          ))
        }
      </ul>
      {/* sign */}
      <div className="sign">
        <p>By Atharv Mudse</p>
      </div>
    </section>
  );
}
export default Sidebar;
