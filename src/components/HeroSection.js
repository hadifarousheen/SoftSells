const HeroSection = () => {
    return (
        <div className="bg-blue-100 h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl m-2 p-2 text-blue-900 font-bold">
                    Sell Your Software License Quickly
                </h1>
                <h2 className="text-3xl m-2 p-2 text-blue-700">
                    SoftSell can convert your license into Cash easily in 3 simple steps
                </h2>
                <button className="text-2xl m-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Sell My License
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
