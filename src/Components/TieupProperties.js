export default function TieupProperties() {
  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1521543387600-c745f8e83d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name: 'Green House'
    },
    {
      url:
        "https://images.unsplash.com/photo-1505944357431-27579db47558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
        name: 'Lake Placid'
    },
    {
      url:
        "https://images.unsplash.com/photo-1613089347756-366a788dacf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        name: 'Green Gables'
    },

    {
      url:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name: 'BentonVille'
    },
    {
      url:
        "https://images.unsplash.com/photo-1625619080917-7d6ff39e0675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        name: 'null'
    }
  ];

  return (
    <div>
      <div className="flex justify-center text-center pt-8 sm:pt-16">
        <p className="sm:text-4xl text-5xl text-bisque-900 subpixel-antialiased cursive font-bold">Our Tieup Properties</p>
      </div>
      
      <div className="flex flex-row py-4 sm:py-16 sm:px-4 justify-center flex-wrap">
      {images.map((image) => (
        <div className='w-auto h-auto pb-0.5 sm:h-96 object-filled pr-2 pl-2 md:pr-6 md:pl-6 transition ease-in-out delay-150 bg-bisque-100 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300' >
          <img className='rounded-lg h-44 w-44 sm:h-80 sm:w-80 object-cover' src={image.url} alt='image1' />
          <h3 className="flex justify-center text-bisque-800 text-2xl leading-8 py-1">{image.name}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}