import Line from '../Components/Line'

const images = [
    {
        url:
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        image: 'image'
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

export default function Decoration() {
    return (
        <div className=" text-bisque-900">
            <div className="pt-28 text-bisque-900 relative">

                <img className="sm:h-80 w-screen object-cover brightness-50" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=8" />
      
                <h1 className="absolute inset-0 flex items-center pt-[96px] font-sans justify-center text-2xl sm:text-5xl font-medium pl-12 end-auto text-bisque-100">
                    Decoration
                </h1>
            </div>

            <div className="px-6">
                <div>
                    <p className=" mt-6 text-xl text-center leading-8 text-bisque-700 sm:text-lg sm:text-left">
                    Welcome to Elegant Events, your premier destination for exquisite decorations that transform any venue into a magical wonderland. From enchanting floral arrangements to captivating lighting designs, our expert team creates an ambiance that leaves a lasting impression. Elevate your special occasions with our impeccable attention to detail and unrivaled creativity. Discover the perfect fusion of elegance and style, tailored to your unique vision. Experience the magic of Elegant Events today.
                    </p>
                </div>
                <div>
                    <div className="flex justify-center pt-8 sm:pt-16 pb-6">
                        <p className="sm:text-4xl text-5xl text-bisque-900 subpixel-antialiased cursive font-bold">View Gallery</p>
                    </div>
                    <Line/>
                    <div className="flex flex-row py-4 sm:py-16 sm:px-4 justify-center flex-wrap">
                        {images.map((image) => (
                            <div className='w-auto h-auto py-0.5 sm:h-96 object-filled pr-1 pl-1 md:pr-6 md:pl-6 transition ease-in-out delay-150 bg-bisque-100 duration-300' >
                                <img className='rounded-lg h-44 w-screen sm:h-80 sm:w-80 object-cover bg-bisque-100 hover:opacity-75' src={image.url} alt='someIMAGE' />
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