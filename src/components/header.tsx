import React from "react";
import { useNavigate } from "react-router";
import "../styles/header.css";

function Header(){
    const navigate=useNavigate();

    return(
<header className="header-box">
    <button onClick={()=>navigate("/")} className="header-button">TO GARAGE</button>
    <button onClick={()=>navigate("/winners")} className="header-button">TO WINNERS</button>
</header>);
}
export default Header;