import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"
import axios from "axios"
import { Link } from 'react-router-dom'

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        {photos.length ? (
          photos.map((photo) => (
            <Col md={3} className="mt-2 mb-2" key={photo.id}>
              <Card style={{ width: "18rem", textAlign: "center" }}>
                <Card.Img
                  variant="top"
                  src={photo.download_url}
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{photo.author}</Card.Title>
                  <a
                    href={photo.url}
                    className="btn btn-dark btn-sm"
                    style={{ margin: "0 5px" }}
                  >
                    View details
                  </a>
                  <Link
                    to={`/photos/${photo.id}`}
                    className="btn btn-dark btn-sm"
                    style={{ margin: "0 5px" }}
                  >
                    View enlarged
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Spinner
            animation="border"
            role="status"
            style={{ margin: "200px auto" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}  
      </Row>
    </Container>
  );
};

export default Photos;

// Various types of request method/ HTTP methods - GET, POST, etc