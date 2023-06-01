import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { IoMailOutline, IoCloseCircleSharp, IoLogoWhatsapp, IoCall, IoChatbubbleSharp } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa'
import { IoLogoFacebook } from 'react-icons/io'

const FloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-transparent h-12 w-12 text-[#4A503D] rounded-full transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 noSelect"
        onClick={toggleOptions}
      >
        {isOpen ? (
          <IoCloseCircleSharp className="h-full w-full" />
        ) : (
          <IoChatbubbleSharp className="h-full w-full" />
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
          <IoCall className="bg-blue-500 h-12 w-12 text-black mb-2 py-2 px-2 rounded-full transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
              Option 1
            </IoCall>
            <IoMailOutline className="bg-[#8e8e93] h-12 w-12 text-black mb-2 py-2 px-2 rounded-full transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
              Option 2
            </IoMailOutline>
            <IoLogoWhatsapp className="bg-[#77DD77] h-12 w-12 text-black mb-2 py-2 px-2 rounded-full transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
              Option 2
            </IoLogoWhatsapp>
            <IoLogoFacebook className="bg-[#177BF2] h-12 w-12 text-black mb-2 py-2 px-2 rounded-full transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
              Option 1
            </IoLogoFacebook>
            <FaInstagram className="bg-[#962fbf] h-12 w-12 text-black mb-2 py-2 px-2 rounded-full transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
              Option 2
            </FaInstagram>
          {/* </div> */}
        </div>
      </Transition>
    </div>
  );
};

export default FloatButton;
