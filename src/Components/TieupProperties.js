export default function TieupProperties() {
  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1521543387600-c745f8e83d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1505944357431-27579db47558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1613089347756-366a788dacf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
    },

    {
      url:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1625619080917-7d6ff39e0675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <div>
      <div className="pr-20 pl-20">
        <hr className="border-black"></hr>
      </div>
      <div className="flex justify-center pt-16">
        <p className="text-4xl subpixel-antialiased cursive font-bold">Our Tieup Properties</p>
      </div>
      <div className="flex flex-row py-16 px-4 justify-center flex-wrap">
        <div className='w-auto h-96 object-filled pr-6 pl-6 transition ease-in-out delay-150 bg-bisque-100 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300' >
          <img className='rounded-lg h-80 w-80 object-cover' src={images[0].url} alt='image1' />
          <h3 className="flex justify-center mt-2">Green House</h3>
        </div>
        <div className='w-auto h-96 object-filled pr-6 pl-6 transition ease-in-out delay-150 bg-bisque-100 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300' >
          <img className='rounded-lg h-80 w-80 object-cover' src={images[1].url} alt='image1' />
          <h3 className="flex justify-center mt-2">Lake Placid</h3>
        </div>
        <div className='w-auto h-96 object-filled pr-6 pl-6 transition ease-in-out delay-150 bg-bisque-100 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300' >
          <img className='rounded-lg h-80 w-80 object-cover' src={images[2].url} alt='image1' />
          <h3 className="flex justify-center mt-2">Green Gables Wedding Estate</h3>
        </div>
        <div className='w-auto h-96 object-filled pr-6 pl-6 transition ease-in-out delay-150 bg-bisque-100 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300' >
          <img className='rounded-lg h-80 w-80 object-cover' src={images[3].url} alt='image1' />
          <h3 className="flex justify-center mt-2">BentonVille</h3>
        </div>
      </div>
      <div className="pr-20 pl-20">
        <hr className="border-black"></hr>
      </div>
    </div>
  )
}