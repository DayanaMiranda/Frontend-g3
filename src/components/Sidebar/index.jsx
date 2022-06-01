// import { Box, List, ListItem, ListItemButton, ListItemText, styled } from '@mui/material';
import React from 'react'
import './style.css'
import { Container, Button} from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';

function Sidebar() {
  return (
    <Container>
      <div className="wrapper">
        <nav className="sidebar">
          <ul className="list-unstyled components">
            <li className="sidebar-li">Conversível</li>
            <li className="sidebar-li">Coupe</li>
            <li className="sidebar-li">Sedan</li>
            <li className="sidebar-li">Suv</li>
            <li className="sidebar-li-search">
              <input type="search" className="sidebar-input form-control rounded sidebar-input" placeholder="Busque por cidade" aria-label="Search" aria-describedby="search-addon" /> 
              <button className="sidebar-input-button input-group-text border-0" id="search-addon">
              <Search />
            </button>
          </li>
        </ul>
      </nav>
    </div>
    </Container >
  )
}
export default Sidebar;
