
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
              <p className="mt-6 text-xl text-center leading-8 text-bisque-600 sm:text-lg sm:text-left">
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
          {/* form part*/}
        <Form />
        </div>
      </div>
    </div>
    
  )
}
