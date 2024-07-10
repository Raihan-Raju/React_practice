import { NavLink } from "react-router-dom";
import "./AdminNav.css";

function AdminNavbar() {
  return (
   
           <div className="flex">
      <NavLink to ="/"><img src="assets/images/sadaka-logo.png" alt="logo Sadaka" /></NavLink>
      <div style={{ display: "flex" }}>
        <input className="search" type="text" placeholder="Donner searching....."/>
        <button className="baton">Search</button>
      </div>

      <h1>man image</h1>
    </div>
    
  );
}

export default AdminNavbar;
