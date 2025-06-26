import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap-icons"; // Bootstrap Icon
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const images = [1, 2, 3, 4]; // Dummy items or image URLs

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-light h-100">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={null}
        className="w-100"
      >
        {images.map((_, i) => (
          <Carousel.Item key={i}>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "240px" }}
            >
              <Image size={60} className="text-muted" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Indicators & Arrows */}
      <div className="d-flex align-items-center justify-content-center mt-3">
        <button
          onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
          className="btn btn-link text-dark p-0 me-3"
        >
          <ArrowLeft size={18} />
        </button>

        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)} // Make dots clickable
            className="mx-1 rounded-circle"
            style={{
              width: 8,
              height: 8,
              cursor: "pointer",
              backgroundColor: index === i ? "#000" : "#e0e0e0",
            }}
          />
        ))}

        <button
          onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
          className="btn btn-link text-dark p-0 ms-3"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
