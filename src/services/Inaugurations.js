import Line from './../Components/Line'

const image = 'https://images.unsplash.com/photo-1625619080917-7d6ff39e0675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'

const images = [
    {
        url:
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        image: 'image1'
    },
    {
        url:
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        image: 'image2'
    },
    {
        url:
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        image: 'image3'
    },

    {
        url:
            "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        image: 'image4'
    },
    {
        url:
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        image: 'image5'
    }
];

export default function Inauguration() {
    return (
        <div className=" text-bisque-900">
            <div className="pt-24 text-bisque-900 relative">

                <img className="sm:h-80 w-screen object-cover brightness-50" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=8" />

                <h1 className="absolute inset-0 flex items-center pt-[96px] font-sans justify-center text-3xl sm:text-5xl font-medium md:pl-12 text-center md:end-auto text-bisque-100">
                    Inauguration
                </h1>
            </div>


            <div className='lg:px-10 px-4'>
                <div className="mx-auto grid max-w-2xl grid-cols-1 lg:gap-x-8 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                
                        <div className="col-span-2 lg:pr-10">
                            <p className=" mt-6 text-xl text-center leading-8 text-bisque-700 sm:text-lg sm:text-left pb-4">
                            Inauguration events typically include a swearing-in ceremony, inaugural address, parade, and inaugural balls. They mark the beginning of a new leader's term in office and provide an opportunity for the public to celebrate and witness the peaceful transition of power.
                            </p>
                            <img className='w-screen h-64 object-cover rounded-lg' src={image}/>
                        </div>
            
                    <div className='mt-6 border-dashed border-2 border-gentlecare-100 lg:w-auto' >
                        <div className='py-4 px-4'>
                            <h2 className="text-3xl text-center cursive font-bold tracking-tight text-bisque-900 sm:text-4xl pb-2">What We Do</h2>
                            <div className='pl-10'>
                                <ul className='list-disc list-inside'>
                                    <li className='font-medium text-xl my-2'>Venue Selection</li>
                                    <li className='font-medium text-xl my-2'>Logistics & Hospitality</li>
                                    <li className='font-medium text-xl my-2'>Decor</li>
                                    <li className='font-medium text-xl my-2'>Catering</li>
                                    <li className='font-medium text-xl my-2'>Entertainment</li>
                                    <li className='font-medium text-xl my-2'>Conceptual</li>
                                    <li className='font-medium text-xl my-2'>Entries</li>
                                    <li className='font-medium text-xl my-2'>Makeover Artist</li>
                                    <li className='font-medium text-xl my-2'>Choreography</li>
                                    <li className='font-medium text-xl my-2'>Photography</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center pt-8 sm:pt-16 pb-6">
                        <p className="sm:text-4xl text-5xl text-bisque-900 subpixel-antialiased cursive font-bold">View Gallery</p>
                    </div>
                    <Line />
                    <div className="flex flex-row py-4 sm:py-16 sm:px-4 justify-center flex-wrap">
                        {images.map((image) => (
                            <div className='w-auto h-auto py-2 sm:h-96 object-filled pr-1 pl-1 md:pr-6 md:pl-6 transition ease-in-out delay-150 bg-bisque-100 duration-300' >
                                <img className='rounded-lg h-56 w-screen md:h-80 md:w-80 sm:h-80 sm:w-96 object-cover bg-bisque-100 hover:opacity-75' src={image.url} alt='' />
                                {/* <h3 className="flex justify-center text-2xl text-bisque-800 leading-8 pt-2">{image.image}</h3> */}
                            </div>
                        )
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}