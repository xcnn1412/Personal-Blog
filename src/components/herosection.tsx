import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="bg-gray-50 py-16 md:py-24">

            <div className="
            container mx-auto px-4 md:px-6
            flex flex-col md:flex-row items-center justify-between
            ">

                <div className="flex-1 text-center md:text-left">

                    <h1 className="
                    text-4xl md:text-6xl font-extrabold text-gray-900
                    leading-tight
                    ">
                        Stay ,<br />
                        Informed<br />
                        Stay Inspired<br />
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0">
                        Discover a World of Knowledge at Your Fingertips. 
                        Your Daily Dose of Inspiration and Information.
                    </p>

                </div>

                <div className="">
                    <div className="md:-ml-50">

                        <div className="md:-ml-50">
                            <Image
                                src="/images/mypersonal.jpg"
                                alt="VeryHandSome Guy"
                                width={500}
                                height={600}
                                className=""
                                priority
                            />
                        </div>

                    </div>
                </div>

                <div className="
                    bg-white p-6 rounded-2xl shadow-xl
                    w-65 hidden lg:block
                ">
                    <span className="
                    text-sm font-medium text-gray-500 block mb-2"> 
                    - Author
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Thompson P.
                    </h3>
            
                    <p className="text-sm text-gray-700 mb-4">
                    I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
                    </p>
            
            
                    <p className="text-sm text-gray-700">
                    When I'm not writing, I spends time volunteering at my local 
                    animal shelter, helping cats find loving homes.
                    </p>

                </div>

            </div>
        </section>

    );
};

export default HeroSection;