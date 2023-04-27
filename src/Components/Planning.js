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
    <div>
      <div className="flex justify-center pt-16">
        <p className="text-4xl subpixel-antialiased cursive font-cursive">Event Planning</p>
      </div>
      <div className="flex flex-row py-16 px-4 justify-center flex-wrap gap-y-0.5">
        <div className='w-auto h-96 object-filled pr-4 pl-4' >
          <img className='rounded-lg h-80 w-80' src={images[0].url} alt='image1' />
          <h3 className="flex justify-center mt-2">Ring</h3>
        </div>
        <div className='w-auto h-96 object-filled pr-4 pl-4' >
          <img className='rounded-lg h-80 w-80' src={images[1].url} alt='image1' />
          <h3 className="flex justify-center mt-2">Engagement</h3>
        </div>
        <div className='w-auto h-96 object-filled pr-4 pl-4' >
          <img className='rounded-lg h-80 w-80' src={images[2].url} alt='image1' />
          <h3 className="flex justify-center mt-2">Dine</h3>
        </div>
        <div className='w-auto h-96 object-filled pr-4 pl-4' >
          <img className='rounded-lg h-80 w-80' src={images[3].url} alt='image1' />
          <h3 className="flex justify-center mt-2">isle</h3>
        </div>
      </div>
    </div>
  )
}