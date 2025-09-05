import { Link } from "react-router-dom";


function Navbar() {
 return (
   <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#f2f2f2" }}>
     <Link to="/">Home</Link>
     <Link to="/budget">Budget</Link>
     <Link to="/tips">Tips</Link>
     {/* Add more links for any pages */}
   </nav>
 );
}


export default Navbar;
