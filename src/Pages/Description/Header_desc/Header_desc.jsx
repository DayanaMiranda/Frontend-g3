import React from "react";
import { BsStarFill, BsChevronLeft, BsFillGeoAltFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./Header_desc.css";

export default function Header_desc() {
  return (
    <div className="description_all">
      <div className="description_header_all">
        <Navbar className="Header_description_All">
          <Navbar.Brand className="text-white">
            <h5 title="Categoria" alt="Categoria">
              Categoria
            </h5>
            <h4 title="Titulo Carro" alt="Titulo Carro">
              Titulo Carro
            </h4>
          </Navbar.Brand>
          <Link className="link-to" to="/home" alt="Voltar" title="Voltar">
            <div className="text-white">
              <BsChevronLeft className="icon_back_header_description" />
            </div>
          </Link>
        </Navbar>
      </div>

      <div className="description_localidade_avaliacao_color">
        <Navbar className="description_localidade_avaliacao">
          <Navbar.Brand>
            <h6 title="Titulo Carro" alt="Titulo Carro">
              <BsFillGeoAltFill />
              Localizacao do carro
            </h6>
          </Navbar.Brand>
          <div>
            <h5 title="Categoria" alt="Categoria">
              Muito bom
            </h5>
            <div className="">
              <BsStarFill className="icon_star_header_description" />
              <BsStarFill className="icon_star_header_description" />
              <BsStarFill className="icon_star_header_description" />
              <BsStarFill className="icon_star_header_description" />
              <BsStarFill className="icon_star_header_description_not" />
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
}
