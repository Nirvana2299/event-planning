export default function Footer() {
    return (
        <footer>
            
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3 bg-black text-white">
                    <div className="w-auto md:text-center py-6 px-6">
                        <h3 className="font-bold">Quick Links</h3>
                        <ul className="text-left pt-4">
                            <li>Home</li>
                            <li>Who We Are</li>
                            <li>Success Story</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="w-auto md:text-center py-6 px-6">
                        <h3 className="font-bold">Head Office</h3>
                        <p className="text-left pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="w-auto md:text-center py-6 px-6">
                        <h3 className="font-bold">Mobile & E-Mail</h3>
                        <ul className="text-left pt-4">
                            <li>987456321</li>
                            <li>123456789</li>
                            <li>example@email</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-items-center bg-black align-center py-4 border-dashed border-2 border-gentlecare-100" >
                    <h3 className="cursive text-center text-md sm:text-xl bg-gradient-to-r from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text font-bold mx-auto">
                        Made with ❤️ by Shoaib
                    </h3>
                </div>
        </footer>
    )
} 