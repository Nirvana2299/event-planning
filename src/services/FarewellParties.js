import Line from './../Components/Line'

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

export default function FarewellParties() {
    return (
        <div className=" text-bisque-900">
            <div className="pt-28 text-bisque-900 relative">

                <img className="sm:h-80 w-screen object-cover brightness-50" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=8" />

                <h1 className="absolute inset-0 flex items-center pt-[96px] font-sans justify-center text-2xl sm:text-5xl font-medium pl-12 end-auto text-bisque-100">
                    Farewell Parties
                </h1>
            </div>


            <div className="px-10">


                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="">
                            <p className=" mt-6 text-xl text-center leading-8 text-bisque-700 sm:text-lg sm:text-left">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                        </div>
                    </div>
                    <div className='mt-6 border-dashed border-2 border-gentlecare-100' >
                        <div className='py-4 px-4'>
                            <h2 className="text-3xl text-center cursive font-bold tracking-tight text-bisque-900 sm:text-4xl">What We Do</h2>
                            <div className='pl-10'>
                                <ul className='list-disc list-inside'>
                                    <li className='font-medium text-xl my-2'>someIMAGE</li>
                                    <li className='font-medium text-xl my-2'>djdsb</li>
                                    <li className='font-medium text-xl my-2'>snfs</li>
                                    <li className='font-medium text-xl my-2'>sfsfks</li>
                                    <li className='font-medium text-xl my-2'>s fsmf </li>
                                    <li className='font-medium text-xl my-2'>s fms</li>
                                    <li className='font-medium text-xl my-2'>s fmss</li>
                                    <li className='font-medium text-xl my-2'>le</li>
                                </ul>
                            </div>
                        </div>

                        {/* 
                            <dl class="mt-8 gap-x-6 py-8 gap-y-10">
                                <div class="pt-8">
                                    <dt class="text-center font-medium text-xl text-bisque-900">Origin</dt>
                                    <dd class="mt-2 text-sm text-bisque-500">Designed by Good Goods, Inc.</dd>
                                </div>
                                <div class="pt-8">
                                    <dt class="text-center font-medium text-xl text-bisque-900">Material</dt>
                                    <dd class="mt-2 text-sm text-bisque-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
                                </div>
                                <div class="pt-8">
                                    <dt class="text-center font-medium text-xl text-bisque-900">Dimensions</dt>
                                    <dd class="mt-2 text-sm text-bisque-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
                                </div>
                                <div class="pt-8">
                                    <dt class="text-center font-medium text-xl text-bisque-900">Finish</dt>
                                    <dd class="mt-2 text-sm text-bisque-500">Hand sanded and finished with natural oil</dd>
                                </div>
                                <div class="pt-8">
                                    <dt class="text-center font-medium text-xl text-bisque-900">Includes</dt>
                                    <dd class="mt-2 text-sm text-bisque-500">Wood card tray and 3 refill packs</dd>
                                </div>
                                <div class="pt-8">
                                    <dt class="text-center font-medium text-xl text-bisque-900">Considerations</dt>
                                    <dd class="mt-2 text-sm text-bisque-500">Made from natural materials. Grain and color vary with each item.</dd>
                                </div>
                            </dl>
                        */}
                    </div>

                </div>
                <div>
                    <div className="flex justify-center pt-8 sm:pt-16 pb-6">
                        <p className="sm:text-4xl text-5xl text-bisque-900 subpixel-antialiased cursive font-bold">View Gallery</p>
                    </div>
                    <Line />
                    <div className="flex flex-row py-4 sm:py-16 sm:px-4 justify-center flex-wrap">
                        {images.map((image) => (
                            <div className='w-auto h-auto py-0.5 sm:h-96 object-filled pr-1 pl-1 md:pr-6 md:pl-6 transition ease-in-out delay-150 bg-bisque-100 duration-300' >
                                <img className='rounded-lg h-44 w-screen sm:h-80 sm:w-80 object-cover bg-bisque-100 hover:opacity-75' src={image.url} alt='' />
                                <h3 className="flex justify-center text-2xl text-bisque-800 leading-8 pt-2">{image.image}</h3>
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