const HeroSection = () => {
    return (
        <section className="bg-gray-50 py-16 md:py-24">

            <div className="
            container mx-auto px-4 md:px-6
            flex flex-col md:flex-row items-center justify-between
            gap-12
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

            </div>
        </section>

    );
};

export default HeroSection;