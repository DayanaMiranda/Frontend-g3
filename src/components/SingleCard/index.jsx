import { Card, Row, Container } from 'react-bootstrap'
import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


const data = [
  {
    "id": 1,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 2,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 3,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 4,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 5,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 6,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 7,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 8,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 9,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 10,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 11,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
  {
    "id": 12,
    "title": "modelo x",
    "text": "motor xz",
    "image": "https://dreamexoticrentalcars.com/wp-content/uploads/lambo-huracan-green-1.jpg",
    "alt": "image description",
  },
]

function SingleCard() {
  return (
    <div className="singleCard-container">
      <Container >
        <div className='d-flex'>
          <Row>
            {data.slice(0, 12).map(data => (
              <div key={data.id} className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-4">
                <Link className="cardCategory-link" to={"/description"}>
                  <Card className="singleCard">
                    <div className="singleCard-img-content">
                      <Card.Img
                        className="singleCard-img img-fluid"
                        src={data.image}
                        alt={data.alt}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="singleCard-title">{data.title}</Card.Title>
                      <Card.Text className="singleCard-text">{data.text}</Card.Text>
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

export default SingleCard;
