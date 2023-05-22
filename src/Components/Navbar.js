import domino from './../image/domino-mask-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  CakeIcon,
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const services = [
  { name: 'Birthday Party', description: 'Get a better understanding of your traffic', to: '/birthdayParty', icon: CakeIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', to: '/engagement', icon: CursorArrowRaysIcon },
  { name: 'Anniversary', description: 'Your customers’ data will be safe and secure', to: '/anniversary', icon: FingerPrintIcon },
  { name: 'Baby Shower', description: 'Connect with third-party tools', to: '/babyShower', icon: SquaresPlusIcon },
  { name: 'Cultural Event', description: 'Build strategic funnels that will convert', to: '/culturalEvent', icon: ArrowPathIcon },
  { name: 'Annual Function', description: 'Build strategic funnels that will convert', to: '/annualFunction', icon: ArrowPathIcon }
]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-bisque backdrop-blur-3xl bg-bisque-100/80 left-0 right-0 top-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="cursive font-bold text-xl">Night Heaven</span>
            <img className="h-8 w-auto text-bisque-600" src={domino} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-bisque-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">

          <Link to='/' className="text-md font-semibold leading-6 text-bisque-900 hover:text-white">
            Home
          </Link>
          <a href="#aboutUsSection" className="text-md font-semibold leading-6 text-bisque-900">
            About Us
          </a>
          {/* <a href="#eventSection" className="text-md font-semibold leading-6 text-bisque-900">
            Services
          </a> */}

          {/* ////////////////////////////////////////////////////////////////////////////////////////////// Services popup panel ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <a href="#eventSection">
          <Popover className="relative">
          
              <Popover.Button className="flex items-center gap-x-1 text-md font-semibold leading-6 text-bisque-900">

                Services

                <ChevronDownIcon className="h-5 w-5 flex-none text-bisque-400" aria-hidden="true" />
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
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-xl backdrop-blur-3xl bg-bisque-100 shadow-lg ring-1 ring-bisque-900/5">
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-bisque-100">
                        <item.icon className="h-6 w-6 text-bisque-600 group-hover:text-bisque-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.to} className="block font-semibold text-bisque-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-bisque-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          </a>

          <a href="#portfolioSection" className="text-md font-semibold leading-6 text-bisque-900">
            Portfolio
          </a>
        </Popover.Group>
      </nav>


      <Dialog as="div" className="lg:hidden transition ease-in-out duration-200" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />


        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto backdrop-blur-3xl bg-bisque-100/60 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={domino}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-bisque-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                <Link
                  to='/'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-bisque-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <a
                  href="#aboutUsSection"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-bisque-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-bisque-900 hover:bg-gray-50"
                >
                  Services
                </a> */}

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...services].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.to}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-bisque-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="#portfolioSection"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-bisque-900 hover:bg-gray-50"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
