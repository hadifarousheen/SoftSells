const Testimonials = () => {
    return (
        <div className="px-6 py-12 bg-white">
            <h1 className="text-4xl text-center text-blue-900 font-bold mb-12">Testimonials</h1>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl shadow-md w-80 p-6 text-center hover:shadow-lg transition">
                    <img
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?semt=ais_hybrid&w=740"
                        alt="Daniel"
                    />
                    <h2 className="text-xl text-blue-800 font-semibold">Daniel</h2>
                    <p className="text-blue-700 mt-2 text-base">
                        Amazing service! I loved it. Got the best price and the process was very easy. I highly recommend it to everyone.
                    </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl shadow-md w-80 p-6 text-center hover:shadow-lg transition">
                    <img
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWzvUtMmTcJaReSK-33fyhxxIFCdax_9kAA&s"
                        alt="Emma Watson"
                    />
                    <h2 className="text-xl text-blue-800 font-semibold">Emma Watson</h2>
                    <p className="text-blue-700 mt-2 text-base">
                        Excellent platform! Very smooth experience and instant payout after approval. Would definitely use again!
                    </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl shadow-md w-80 p-6 text-center hover:shadow-lg transition">
                    <img
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLa3ZawmmZG2JUGqgRwNEfoBF_1RCHEkxbw&s"
                        alt="Camila"
                    />
                    <h2 className="text-xl text-blue-800 font-semibold">Camila</h2>
                    <p className="text-blue-700 mt-2 text-base">
                        Loved the user-friendly interface and how quickly everything was handled. Highly satisfied!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
