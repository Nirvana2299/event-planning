import { useEffect, useState } from 'react';
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from 'react-icons/io5';
import { useSwipeable } from 'react-swipeable';

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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: previousImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      id='slideSection'
      className='max-w-fit m-auto pt-[6.80rem] sm:pt-28 relative group left-0 right-0'
      {...handlers}
    >
      <div className="carousel">   
              <img
                className='image h-80 w-screen sm:h-128 object-cover'
                src={images[currentIndex].url}
                alt={`${currentIndex}`}
              />
        </div>
        <div className='hidden md:group-hover:block absolute sm:top-[55%] top-[62%] -translate-x-0 translate-y-[-50%] rounded-full left-5 text-4xl sm:text-4xl md:text-6xl backdrop-blur bg-white-100/20 text-black cursor-pointer'>
          <IoArrowBackCircleSharp onClick={previousImage}></IoArrowBackCircleSharp>
        </div>
        <div className='hidden md:group-hover:block absolute sm:top-[55%] top-[62%] -translate-x-0 translate-y-[-50%] rounded-full right-5 text-4xl sm:text-4xl md:text-6xl backdrop-blur bg-white-100/20 text-bisque-100 cursor-pointer'>
          <IoArrowForwardCircleSharp onClick={nextImage}></IoArrowForwardCircleSharp>
        </div>
      </div>
   
  );
}
