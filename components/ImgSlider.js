import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ImgSlider() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={5000}
      className="pt-5 carousel"
    >
      <div className="cursor-pointer">
        <img
          src="https://rb.gy/x0n86o"
          alt=""
          className="w-full h-full rounded shadow-image"
        />
      </div>
      <div className="cursor-pointer">
        <img
          src="https://rb.gy/ceoqlc"
          alt=""
          className="w-full h-full rounded shadow-image"
        />
      </div>
      <div className="cursor-pointer">
        <img
          src="https://rb.gy/3f3agx"
          alt=""
          className="w-full h-full rounded shadow-image"
        />
      </div>
    </Carousel>
  );
}

export default ImgSlider;
