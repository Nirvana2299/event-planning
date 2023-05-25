import { Transition, Popover } from '@headlessui/react';
import { Fragment } from 'react';
import { IoChatbubblesSharp } from 'react-icons/io5'


export default function FloatButton() {
    const handleAction1Click = () => {
        // Handle action 1 click event
    };

    const handleAction2Click = () => {
        // Handle action 2 click event
    };

    return (
        <div className="fixed bottom-4 left-4">
        <Popover.Group>
            <Popover className="relative">
                <Popover.Button>
                    <IoChatbubblesSharp className="w-12 h-12 rounded-lg bg-transperent text-bisque-700">
                    </IoChatbubblesSharp>
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
                    <Popover.Panel className='absolute -left-8 top-full z-10' >
                        <div className="absolute top-full right-0 mt-2 flex flex-col gap-2 p-2 bg-gray-100 rounded">
                            <button
                                className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded"
                                onClick={handleAction1Click}
                            >
                                Action 1
                            </button>
                            <button
                                className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded"
                                onClick={handleAction2Click}
                            >
                                Action 2
                            </button>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
            </Popover.Group>
        </div>

    );
}
