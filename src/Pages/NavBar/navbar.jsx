import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../img/logo.svg";
import "./navbar.css";
import useAuth from "../Login/hooks/useAuth";
import { MdLogout } from "react-icons/md";

function gettingFirstLetters(user) {
  if (typeof user !== "undefined") {
    return user.split(' ').map(word => word[0]).join('');
  } else {
    return "";
  }
}

export default function NavBar() {
  const { isLogin, setIsLogin, user } = useAuth();
  return (
    <Navbar expand="md" className="header_all sticky-top">
      <Navbar.Brand href="#home">
        <Link className="link-to" to="/">
          <img src={logo} alt="Logo Digital Booking" title="Logo Digital Booking"/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        
        {isLogin ?
          <>
            <div className="circle"><span>{gettingFirstLetters(user.login)}</span></div>
            <div className="authenticatedUser"><p className="hello">Olá,</p> <p className="nameUser">{user.login}</p></div>
            <MdLogout className="logoutIcon" onClick={() => setIsLogin(false)}/>
          </>
        :
        <Nav>
          <Nav.Link>
            <Link className="text-decoration-none" to="/Register" alt="Criar conta" title="Criar conta">
              <button className="buttons_header" role="button">
                Criar conta
              </button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-decoration-none" to="/login" alt="Iniciar sessão" title="Iniciar sessão">
              <button className="buttons_header" role="button">
                Iniciar sessão
              </button>
            </Link>
          </Nav.Link>
        </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );
}
