
import Form from './Form'

export default function AboutAndForm() {
  return (
    <div id='aboutUsSection' className="overflow-hidden md:px-4 bg-bisque py-8 sm:py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-8 lg:px-2">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg ">
              <h1 className="font cursive text-5xl text-center font-bold tracking-tight text-bisque-900 sm:text-6xl sm:text-left subpixel-antialiased">
                About Us
              </h1>
              <p className="mt-2 cursive text-3xl text-center font-bold tracking-tight text-bisque-900 sm:text-4xl sm:text-left subpixel-antialiased">A better workflow</p>
              <p className="mt-6 text-xl text-justify leading-6 text-bisque-800 sm:text-2xl sm:text-left">
                 Tyohaar Event has provided full service event management, entertainment, promotion and association management services. Over the years, we have developed a sound reputation within our industry for creativity, efficiency, ability to meet deadlines and flawless execution of Tyohaar Event and for providing superior association services.
              </p>
              <p className="mt-6 text-xl text-justify leading-6 text-bisque-800 sm:text-2xl sm:text-left">
               started with a purpose to provide ‘ONE STOP SOLUTIONS’ for all your Wedding- related worries. customer or staff,  Tyohaar Event assures to handle every part of it with finesse. We step in right at the stage of Idea Generation to its flawless execution. Here, you’ll find a platform that will be unique to you and your brand – a platform that will define your success. Current success stories at “ Tyohaar Event”
              </p>
            </div>
          </div>
          {/* form part*/}
          <Form />
        </div>
      </div>
    </div>

  )
}
