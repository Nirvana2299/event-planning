import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function About() {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="bg-dark py-4 px-8 sm:py-8 lg:px-4 border-dashed border-2 border-gentlecare-100">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl cursive font-bold tracking-tight text-bisque-900 sm:text-4xl">Contact sales</h2>
                {/* <p className="mt-2 text-lg leading-8 text-bisque-600">
                    Aute magna irure deserunt veniam aliqua magna enim voluptate.
                </p> */}
            </div>
            <form action="#" method="POST" className="mx-auto mt-12 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-bisque-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-bisque-900 shadow-sm ring-1 ring-inset ring-bisque-300 placeholder:text-bisque-400 focus:ring-2 focus:ring-inset focus:ring-bisque-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-bisque-900">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-bisque-900 shadow-sm ring-1 ring-inset ring-bisque-300 placeholder:text-bisque-400 focus:ring-2 focus:ring-inset focus:ring-bisque-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-bisque-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full bg-dark rounded-md border-0 px-3.5 py-2 text-bisque-900 shadow-sm ring-1 ring-inset ring-bisque-300 placeholder:text-bisque-400 focus:ring-2 focus:ring-inset focus:ring-bisque-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-bisque-900">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-bisque-900 shadow-sm ring-1 ring-inset ring-bisque-300 placeholder:text-bisque-400 focus:ring-2 focus:ring-inset focus:ring-bisque-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-bisque-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-bisque-900 shadow-sm ring-1 ring-inset ring-bisque-300 placeholder:text-bisque-400 focus:ring-2 focus:ring-inset focus:ring-bisque-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-bisque-500' : 'bg-bisque-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-bisque-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bisque-600'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-bisque-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-bisque-600">
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold text-bisque-900">
                                privacy&nbsp;policy
                            </a>
                            .
                        </Switch.Label>
                    </Switch.Group> */}
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm bg-gradient-to-r from-gentlecare-100 to-gentlecare-100 hover:from-gentlecare-100 hover:to-gentlecare-200 ... focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bisque-600"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    )
}
