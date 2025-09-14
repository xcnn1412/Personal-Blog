import Link from "next/link";

const Navbar = () => {
    return(
        <header className="bg-white border-b border-gray-200">

            <div className="container mx-auto flex justify-between items-center p-4">
                <div>
                    <Link href="/" className="text-2xl font-bold text-gray-800">
                    hh <span className="text-green-500">.</span>
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Link href="/login"
                    className="px-6 py-2 text-gray-800 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors duration-300">
                    Login
                    </Link>

                    <Link href="/signup" 
                    className="px-6 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                    Sign up
                    </Link>
                </div>
            </div>


        </header>


    );
};

export default Navbar;