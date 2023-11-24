import React from "react";
import { Image, Modal } from "react-bootstrap";

const ImageModal = ({ showModal, handleCloseModal, selectedImage }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Body>
        <Image
          src={selectedImage && selectedImage.fullSize}
          alt={selectedImage && selectedImage.title}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
