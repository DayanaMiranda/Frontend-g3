import React from "react";
import "./img_galeria.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function img_galeria() {
  return (
    <div>
      <div className="img_galeria_all">
        <div className="img_galeria_grande">
          <Card.Img
            className="img_all_caract"
            src={
              "https://quatrorodas.abril.com.br/wp-content/uploads/2021/10/LX_Ultra_Luxury_9-e1634242331439.jpg?quality=70&strip=info&w=1024&resize=1200,800"
            }
          />
        </div>
        <div className="img_galeria_col">
          <div className="img_galeria_row">
            <div className="img_all_padd">
              <Card.Img
                className="img_all_caract"
                src={
                  "https://quatrorodas.abril.com.br/wp-content/uploads/2021/10/LX_Ultra_Luxury_9-e1634242331439.jpg?quality=70&strip=info&w=1024&resize=1200,800"
                }
              />
            </div>
            <div className="img_all_padd">
              <Card.Img
                className="img_all_caract"
                src={
                  "https://quatrorodas.abril.com.br/wp-content/uploads/2021/10/LX_Ultra_Luxury_9-e1634242331439.jpg?quality=70&strip=info&w=1024&resize=1200,800"
                }
              />
            </div>
          </div>
          <div className="img_galeria_row">
            <div className="img_all_padd">
              <Card.Img
                className="img_all_caract"
                src={
                  "https://quatrorodas.abril.com.br/wp-content/uploads/2021/10/LX_Ultra_Luxury_9-e1634242331439.jpg?quality=70&strip=info&w=1024&resize=1200,800"
                }
              />
            </div>
            <div className="img_all_padd img_all_padd_1">
              <div className="img_escrito_mais">
                <Link
                  className="text-decoration-none"
                  to="/Home"
                  alt="Ver mais"
                  title="Ver mais"
                >
                  <p>Ver mais</p>
                </Link>
              </div>
              <Card.Img
                className="img_all_caract"
                src={
                  "https://quatrorodas.abril.com.br/wp-content/uploads/2021/10/LX_Ultra_Luxury_9-e1634242331439.jpg?quality=70&strip=info&w=1024&resize=1200,800"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
