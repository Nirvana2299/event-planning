import { useEffect, useState } from "react";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp
} from "react-icons/io5";
import { useSwipeable } from "react-swipeable";

export default function Carousel() {
  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: previousImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const slideStyles = {
    transform: `translateX(-${currentImage * (100 / images.length)}%)`,
    transition: "transform 0.8s ease-in-out",
    display: "flex",
    width: `${images.length * 100}%`,
    zIndex: 0 
  };

  const imageStyles = {
    flexBasis: `${100 / images.length}%`,
    maxWidth: `${100 / images.length}%`
  };

  return (
    <div
      id="slideSection"
      className="max-w-fit m-auto relative group left-0 right-0 overflow-hidden"
      {...handlers}
    >
      <div className="carousel">
        <div className="slides" style={slideStyles}>
          {images.map((image, index) => (
            <div key={index} className="slide" style={imageStyles}>
              <img
                className="image h-[330px] w-screen sm:h-128 object-cover"
                src={image.url}
                alt={`${index}`}
              />
            </div>
          ))}
        </div>
        <div className="hidden md:group-hover:block absolute sm:top-[50%] top-[50%] -translate-x-0 translate-y-[-50%] rounded-full left-5 text-4xl sm:text-4xl md:text-6xl backdrop-blur bg-white-100/20 text-bisque-100 cursor-pointer">
          <IoArrowBackCircleSharp
            onClick={previousImage}
          ></IoArrowBackCircleSharp>
        </div>
        <div className="hidden md:group-hover:block absolute sm:top-[50%] top-[50%] -translate-x-0 translate-y-[-50%] rounded-full right-5 text-4xl sm:text-4xl md:text-6xl backdrop-blur bg-white-100/20 text-bisque-100 cursor-pointer">
          <IoArrowForwardCircleSharp
            onClick={nextImage}
          ></IoArrowForwardCircleSharp>
        </div>
      </div>
    </div>
  );
}
