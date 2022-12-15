import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const Photo = () => {
  const { id } = useParams();
  const [singlePhoto, setSinglePhoto] = useState({});

  useEffect(() => {
    axios
      .get(`https://picsum.photos/id/${id}/info`)
      .then((res) => setSinglePhoto(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {Object.keys(singlePhoto).length ? (
        <Container>
          <img
            src={singlePhoto.download_url}
            alt="enlarged-img"
            style={{
              width: "100%",
              height: "90vh",
              margin: "10px",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          />
        </Container>
      ) : (
        <Spinner
          animation="border"
          role="status"
          style={{ display: "block", margin: "200px auto" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default Photo;