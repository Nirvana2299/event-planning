import { Link } from "react-router-dom";

export default function Planning() {
  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },

    {
      url:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div id="eventSection">
      <div className="flex justify-center pt-8 sm:pt-16">
        <p className="sm:text-4xl text-5xl text-bisque-900 subpixel-antialiased cursive font-bold">Services</p>
      </div>

      <div className="flex flex-row py-4 sm:py-16 sm:px-4 justify-center flex-wrap">
        <Link to='weddingPlanning'>
          <div className='w-auto h-auto py-0.5 sm:h-96 object-filled pr-2 pl-2 md:pr-6 md:pl-6 transition ease-in-out delay-150 bg-bisque-100 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300' >
            <img className='rounded-lg h-44 w-44 sm:h-80 sm:w-80 object-cover' src={images[0].url} alt='image1' />
            <h3 className="flex justify-center text-2xl text-bisque-800 leading-8 py-1">Wedding Planning</h3>
          </div>
        </Link>
        <Link to='corperateEvent'>
          <div className='w-auto h-auto py-0.5 sm:h-96 object-filled pr-2 pl-2 md:pr-6 md:pl-6 transition ease-in-out delay-150 bg-bisque-100 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300' >
            <img className='rounded-lg h-44 w-44 sm:h-80 sm:w-80 object-cover' src={images[1].url} alt='image1' />
            <h3 className="flex justify-center text-2xl text-bisque-800 leading-8 py-1">Corporate Event</h3>
          </div>
        </Link>
        <Link to='privateParties'>
          <div className='w-auto h-auto py-0.5 sm:h-96 object-filled pr-2 pl-2 md:pr-6 md:pl-6 transition ease-in-out delay-150 bg-bisque-100 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300' >
            <img className='rounded-lg h-44 w-44 sm:h-80 sm:w-80 object-cover' src={images[2].url} alt='image1' />
            <h3 className="flex justify-center text-2xl text-bisque-800 leading-8 py-1">Private Parties</h3>
          </div>
        </Link>
        <Link to='farewellParties'>
          <div className='w-auto h-auto py-0.5 sm:h-96 object-filled pr-2 pl-2 md:pr-6 md:pl-6 transition ease-in-out delay-150 bg-bisque-100 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300' >
            <img className='rounded-lg h-44 w-44 sm:h-80 sm:w-80 object-cover' src={images[3].url} alt='image1' />
            <h3 className="flex justify-center text-2xl text-bisque-800 leading-8 py-1">Farewell Parties</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}