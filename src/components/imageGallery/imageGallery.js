import React, { useState, useEffect } from "react";
import { Row, Col, Modal, Container, Card, Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ImageSlider from "./imageSlider/imageSlider";
import imageData from "../../data.json";
import "./imageGallery.scss";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setImages(imageData.images);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setShowModal(true);
    setSelectedImage(image);
  };

  return (
    <div className="image-gallery">
      <Container className="py-4 bg-light">
        <h1>Gallery</h1>
        <div className="mt-4 text-primary">
          <Link className="text-decoration-none" to={"/"}>
            PAGE
          </Link>{" "}
          <FontAwesomeIcon icon={faArrowRightLong} /> GALLERY
        </div>
        <div className="my-4 text-center">
          <h2>Photo Gallery</h2>
          <p className="text-secondary">
            Create an Image gallery with thumbnail view to view the images in a
            grid. The grid must be like below mockup style.
          </p>
        </div>
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          className="mb-3 d-flex justify-content-center"
        >
          <Tab eventKey="all" title="All">
            <Row xs={1} md={2} lg={4}>
              {images.length
                ? images.map((image) => (
                    <Col key={image.id} className="d-flex mb-4">
                      <Card.Img
                        variant="top"
                        src={image.thumbnail}
                        onClick={() => handleImageClick(image)}
                      />
                    </Col>
                  ))
                : "No Image Found"}
            </Row>
          </Tab>
          <Tab eventKey="branding" title="branding"></Tab>
          <Tab eventKey="design" title="Design"></Tab>
          <Tab eventKey="development" title="Development"></Tab>
        </Tabs>

        {/* Image Modal */}
        <Modal
          show={showModal}
          size="xl"
          centered
          onHide={() => setShowModal(false)}
        >
          <Modal.Body>
            <ImageSlider images={images} selectedImage={selectedImage} />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default ImageGallery;
