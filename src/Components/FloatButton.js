import { Transition, Popover } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { IoChatbubblesSharp, IoCloseCircleSharp, IoLogoWhatsapp, IoCallOutline } from 'react-icons/io5';
import { BsTelephoneFill } from 'react-icons/bs'

const FloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 left-4">
      <Popover>
        <Popover.Button>
          {isOpen ? (
            <IoCloseCircleSharp className="bg-transparent h-12 w-12 text-bisque-700" />
          ) : (
            <IoChatbubblesSharp className="bg-transparent h-12 w-12 text-bisque-700" />
          )}
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="flex flex-col gap-2 mt-2">
            <IoCallOutline className="bg-bisque-700 h-12 w-12 text-bisque-100 py-2 px-2 rounded-full">
              Option 1
            </IoCallOutline>
            <IoLogoWhatsapp className="bg-bisque-700 h-12 w-12 text-bisque-100 py-2 px-2 rounded-full">
              Option 2
            </IoLogoWhatsapp>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default FloatButton;
