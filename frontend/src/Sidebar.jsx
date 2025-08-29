import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      {/* new chat button */}
      <button>
        <img src="/assets/blacklogo.png" alt="logo" className="logo" />
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      {/* history */}
      <ul className="history">
        <li>History1</li>
        <li>History1</li>
        <li>History1</li>
      </ul>
      {/* sign */}
      <div className="sign">
        <p>By Atharv Mudse</p>
      </div>
    </section>
  );
}
export default Sidebar;
