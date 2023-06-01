import { Link } from "react-router-dom";

export default function Planning() {
  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: 'Wedding Planning',
      alt: 'Wedding Planning',
      to: 'wedding-planning'
    },
    {
      url:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: 'Corporate Event',
      alt: 'Corporate Event',
      to: 'corperate-event'
    },
    {
      url:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: 'Private Parties',
      alt: 'Private Parties',
      to: 'private-parties'
    },

    {
      url:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: 'Farewell Parties',
      alt: 'Farewell Parties',
      to: 'farewell-parties'
    },
  ];

  return (
    <div id="eventSection">
      <div className="flex justify-center pt-8 sm:pt-16">
        <p className="sm:text-4xl text-5xl text-bisque-900 subpixel-antialiased cursive font-bold">Services</p>
      </div>

      <div className="flex flex-row py-4 sm:py-16 sm:px-4 justify-around flex-wrap ">
        {images.map((image, index) => (
          <div>
            <Link to={image.to}>
              <div className='h-auto py-0.5 lg:pb-4 sm:h-80 object-filled md:pr-6 md:pl-6 transform transition ease-in-out bg-bisque-100 hover:opacity-60 transform transition duration-300 ease-in-out hover:bg-transparent duration-300' >
                <img className='shadow-lg rounded-lg h-72 w-48 sm:h-80 sm:w-80 object-cover' src={image.url} alt={index} />

              </div>
            </Link>
            <div>
              <h3 className="flex justify-center text-xl text-bisque-800 leading-6 py-1">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}