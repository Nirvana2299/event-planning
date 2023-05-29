import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { IoChatbubblesSharp, IoCloseCircleSharp, IoLogoWhatsapp, IoCallOutline } from 'react-icons/io5';

const FloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 left-4">
      <button
        className="bg-transparent h-12 w-12 text-bisque-700 rounded-lg"
        onClick={toggleOptions}
      >
        {isOpen ? (
          <IoCloseCircleSharp className="h-full w-full" />
        ) : (
          <IoChatbubblesSharp className="h-full w-full" />
        )}
      </button>
      <Transition
        show={isOpen}
        enter="transition duration-300 ease-in-out transform origin-bottom"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-200 ease-in-out transform origin-bottom"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute bottom-16 left-0 w-44">
          {/* <div className="bg-white border border-gray-200 rounded-lg shadow-lg"> */}
          <IoCallOutline className="bg-bisque-700 h-12 w-12 text-bisque-100 mb-2 py-2 px-2 rounded-full">
              Option 1
            </IoCallOutline>
            <IoLogoWhatsapp className="bg-bisque-700 h-12 w-12 text-bisque-100 py-2 px-2 rounded-full">
              Option 2
            </IoLogoWhatsapp>
          {/* </div> */}
        </div>
      </Transition>
    </div>
  );
};

export default FloatButton;
