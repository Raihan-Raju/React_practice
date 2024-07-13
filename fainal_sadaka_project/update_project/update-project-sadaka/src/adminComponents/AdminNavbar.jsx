import "./AdminNav.css";

function AdminNavbar() {
  return (
    <div className="flex">
      <h1>Logo</h1>
      <div style={{ display: "flex" }}>
        <input className="search" type="text" />
        <button>Search</button>
      </div>

      <h1>man image</h1>
    </div>
  );
}

export default AdminNavbar;
