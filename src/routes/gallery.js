import { useRouteError } from "react-router-dom";
import ImageGallery from "../components/imageGallery/imageGallery";

export default function Gallery() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="gallery-page">
      <ImageGallery />
    </div>
  );
}
