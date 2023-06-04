import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useSwipeable } from 'react-swipeable';


const imgURL1 =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
const imgURL2 =
  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
const imgURL3 =
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
const imgURL4 =
  'https://images.unsplash.com/photo-1480455454781-1af590be2a58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
const imgURL5 =
  'https://images.unsplash.com/photo-1484156818044-c040038b0719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';

const info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


const callouts = [
  {
    name: 'Customized wedding packages offered',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageSrc: {
      image: [imgURL1, imgURL2, imgURL3],
    },
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Fun activities and entertainment options',
    description: info + info + info,
    imageSrc: {
      image: [imgURL4, imgURL5, imgURL4],
    },
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Memorable anniversary themes and decorations',
    description: info + info,
    imageSrc: {
      image: [imgURL3, imgURL1, imgURL2],
    },
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [selectedCallout, setSelectedCallout] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % callouts.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  function switchOn(callout) {
    setOpen(true);
    setSelectedCallout(callout);
    setCurrentIndex(0);
  }

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % callouts.length);
  };

  const previousImage = () => {
    setCurrentIndex(currentIndex === 0 ? callouts.length - 1 : currentIndex - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: previousImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // const handleImageChange = (index) => {
  //   setCurrentIndex(index);
  // };


  return (
    <div id="portfolioSection">
      <div className="bg-bisque-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-8 sm:py-10 lg:max-w-none">
            <h2 className="text-3xl cursive font-bold text-bisque-900">Portfolio</h2>
            <div className="mt-6 space-y-4 sm:space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative" onClick={() => switchOn(callout)} >
                  <div className="relative h-70 w-full overflow-hidden rounded-lg shadow-lg bg-bisque-100 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64 hover:shadow-xl group-hover:opacity-60 transform transition duration-300 ease-in-out">
                    <div
                      className="flex"
                      style={{
                        transform: `translateX(-${currentIndex * (100 / callout.imageSrc.image.length)}%)`,
                        transition: 'transform 0.8s ease-in-out',
                        display: 'flex',
                        width: `${callout.imageSrc.image.length * 100}%`,
                      }}
                    >
                      {/* image array, Loops through all the image provided in the callouts variable */}
                      {callout.imageSrc.image.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="flex-shrink-0 h-full w-full object-cover"
                          style={{ flexBasis: `${100 / callout.imageSrc.image.length}%` }}
                        >
                          <img src={image} alt={callout.imageAlt} className="object-cover h-full w-full" />
                        </div>
                      ))}
                    </div>

                    {/* <p className="text-base font-semibold text-bisque-900">{callout.description}</p> */}
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-bisque-900">
                    <a>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*PopUp section*/}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
          {/* Popup Animation  */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden backdrop-blur bg-bisque-600 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <button
              type="button"
              className="fixed right-4 top-4 text-bisque-100 hover:text-red-400 sm:right-6 sm:top-8 md:right-10 md:top-6 lg:right-12 lg:top-8"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4" {...handlers}>
              {selectedCallout && (
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                  enterTo="opacity-100 translate-y-0 md:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 md:scale-100"
                  leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                >
                  {/* Popout Menu */}
                  <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-xl md:px-4 lg:max-w-6xl">
                    <div className="relative flex w-full items-center overflow-hidden backdrop-blur bg-bisque-100/90 px-2 pb-4 pt-14 shadow-2xl sm:px-4 sm:pt-8 md:p-4 lg:p-8 rounded-lg">
                      <button
                        type="button"
                        className="sm:hidden absolute my-2 right-4 top-2 text-bisque-600"
                        onClick={() => setOpen(false)}
                      >
                        {/* <span className="sr-only">Close</span> */}
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      <div className="grid w-full grid-cols-1 items-start gap-x-2 sm:gap-x-0 gap-y-4 lg:grid-cols-1">
                        <div className="aspect-w-3 aspect-h-2 lg:aspect-h-3 lg:aspect-w-7 md:aspect-h-2 md:aspect-w-3 rounded-lg overflow-hidden sm:col-span-2 lg:col-span-1">
                          <div
                            className="flex"
                            style={{
                              transform: `translateX(-${currentIndex * (100 / selectedCallout.imageSrc.image.length)}%)`,
                              transition: 'transform 0.8s ease-in-out',
                              display: 'flex',
                              width: `${selectedCallout.imageSrc.image.length * 100}%`,
                            }}
                          >
                            {selectedCallout.imageSrc.image.map((image, index) => (
                              <div
                                key={index}
                                // className="flex-shrink-0"
                                style={{ flexBasis: `${100 / selectedCallout.imageSrc.image.length}%` }}
                              >
                                <img src={image} alt={index} className="object-cover h-full w-full" />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="sm:col-span-2 lg:col-span-2">
                          <h3 className="text-lg text-center sm:text-left leading-6 font-medium text-bisque-900">{selectedCallout.name}</h3>
                          <p className="mt-4 text-sm text-bisque-900 text-justify">{selectedCallout.description}</p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              )}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
