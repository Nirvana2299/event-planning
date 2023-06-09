import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className='bg-black'>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3 bg-black text-bisque-100 sm:pb-56">
                    <div className="w-auto py-6 px-6 md:px-12 md:py-12">
                        <h3 className="font-bold">Quick Links</h3>
                        <ul className="text-left pt-4">
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#aboutUsSection">Who We Are</a></li>
                            <li>Success Story</li>
                            <li><a href="#aboutUsSection">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="w-auto py-6 px-6 md:px-12 md:py-12">
                        <h3 className="font-bold">Mobile & E-Mail</h3>
                        <ul className="text-left pt-4">
                            <li>987456321</li>
                            <li>123456789</li>
                            <li>example@email</li>
                        </ul>
                    </div>
                    <div className="w-auto py-6 px-6 md:px-12 md:py-12">
                        <h3 className="font-bold">Head Office</h3>
                        <p className="text-left pt-4">Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678 </p>
                    </div>


                </div>
                {/* <div className='bg-black align-center py-2'>
                    <p className='text-bisque-100 text-center'>Copyright © Tyohaar Events</p>
                </div> */}
            </div>
            <div class="mx-auto flex items-center justify-center">
                <div class="h-12 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
            <div className="flex justify-items-center bg-black align-center pt-2 h-full w-full" >
                    <h3 className="cursive text-center text-xl sm:text-xl bg-gradient-to-r from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text font-bold mx-auto">
                    Made with ❤️ by <a href='https://www.linkedin.com/in/shoaibmoosa/'>Shoaib</a>
                    </h3>
                </div>
                </div>
            </div>
        </footer>
    )
} 