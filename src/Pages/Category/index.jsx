import Sidebar from '../../components/Sidebar';
import SingleCard from '../../components/SingleCard'
import { Container, Navbar,  } from 'react-bootstrap';
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./style.css"

function Category() {
  return (
    <>
       <div className="description_header_all">
        <Navbar className="Header_description_All">
          <Navbar.Brand className="text-white">
            <h4 title="Categoria" alt="Categoria">
              Categoria
            </h4>
          </Navbar.Brand>
          <Link className="link-to" to="/home" alt="Voltar" title="Voltar">
            <div className="text-white">
              <BsChevronLeft className="icon_back_header_description" />
            </div>
          </Link>
        </Navbar>
      </div>

      <Container >
        <div className='d-flex category-container'>
          <aside className='category-aside'>
            <Sidebar />
          </aside>
          <div className="justify-content-between category-singleCard">
            <SingleCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Category;