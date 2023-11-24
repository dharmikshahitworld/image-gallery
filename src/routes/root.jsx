import { Container, ModalHeader } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div id="root">
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Link to={"/gallery"} className="text-decoration-none">
          <ModalHeader>Exercise 1: Image Gallery</ModalHeader>
        </Link>
      </Container>
    </div>
  );
}
