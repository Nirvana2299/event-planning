import { Fragment, useState } from 'react';
import Line from './../Components/Line'
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ViewGallery(props) {
    const [open, setOpen] = useState(false);
    const [selectedCallout, setSelectedCallout] = useState(null);

    function switchOn(callout) {
        setOpen(true);
        setSelectedCallout(callout);
    }
    return (
        <div>
            <div className="flex justify-center pt-8 pb-4 sm:py-12">
                <p className="sm:text-4xl text-5xl text-bisque-900 subpixel-antialiased cursive font-bold">View Gallery</p>
            </div>
            <Line />
            <div className="bg-bisque-100">
                <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-8 sm:py-10 lg:max-w-none">
                        <div className="mt-6 mb-6 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {props.images.map((image) => (
                                <div key={image.name} className="group relative md:pb-4" onClick={() => switchOn(image)} >
                                    <div className="relative h-60 w-full overflow-hidden rounded-lg shadow-lg bg-bisque-100 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 hover:shadow-xl transform transition duration-300 ease-in-out">
                                        {/* image array, Loops through all the image provided in the callouts variable */}
                                        <img
                                            src={image.url}
                                            alt={image.name}
                                            className="h-full w-full object-cover object-center"

                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
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
                        <div className="fixed inset-0 hidden backdrop-blur bg-bisque-600 bg-opacity-90 transition-opacity md:block" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <button
                            type="button"
                            className="absolute right-4 top-4 text-bisque-100 hover:text-red-400 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                            onClick={() => setOpen(false)}
                        >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
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
                                    <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-4xl md:px-4 lg:max-w-5xl">
                                        <div className="relative flex w-full items-center overflow-hidden backdrop-blur-xl bg-bisque-100 bg-opacity-40 sm:bg-opacity-0 px-1 pb-1 pt-1 shadow-2xl sm:px-6 sm:pt-8 md:p-1 lg:p-1 rounded-lg">
                                            <button
                                                type="button"
                                                className="absolute right-4 top-4 text-bisque-600 hover:text-bisque-900 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">Close</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8">
                                                <div className="rotate-0 sm:rotate-0 aspect-video sm:aspect-w-4 lg:aspect-h-6 lg:aspect-w-9 sm:aspect-h-3 rounded-lg overflow-hidden sm:col-span-2 lg:col-span-1">
                                                    <img
                                                        src={selectedCallout && selectedCallout.url}
                                                        alt={selectedCallout && selectedCallout.name}
                                                        className="object-cover"
                                                    />
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
    )
}