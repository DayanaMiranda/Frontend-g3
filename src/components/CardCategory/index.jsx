import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { api } from "../../Service/api.js";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CardCategory() {

  const [productCategory, setProductCategory] = useState([]);

  useEffect(() => {
    api.get('/products-category').then((response) => {
      setProductCategory(response.data);
    });
  }, []);

  return (
    <div className="cardCategory-container">
      <Container >
        <h2 className="cardCategory-h2"><span>Buscar por categoria</span></h2>
        <div className='d-flex'>
          <Row>
            {productCategory.slice(0, 4).map(productCategory => (
              <div key={productCategory.id} className="col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-4">
                <Link className="cardCategory-link" to={"/category"}>
                  <Card className="cardCategory-card">
                    <div className="cardCategory-img-content">
                      <Card.Img
                        className="cardCategory-img img-fluid"
                        src={productCategory.image}
                        alt={productCategory.alt}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="cardCategory-title">{productCategory.title}</Card.Title>
                      <Card.Text className="cardCategory-text">{productCategory.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </Row>
        </div>
      </Container>

    </div>
  )
}

export default CardCategory;

