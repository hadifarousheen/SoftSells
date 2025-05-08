import { UploadIcon, BadgeDollarSignIcon, BanknoteIcon } from 'lucide-react'; // Alternatively use Heroicons if preferred

const Work = () => {
    return (
        <div className="px-6 py-12 bg-white">
            <h1 className="text-4xl text-center text-blue-900 font-bold mb-12">
                How It Works?
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl shadow-md p-6 w-80 hover:shadow-xl transition duration-300 text-center">
                    <UploadIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-2xl text-blue-800 font-semibold mb-2">
                        Upload License
                    </h2>
                    <p className="text-blue-700 text-base">
                        Share your license details with us by uploading them on our platform.
                    </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl shadow-md p-6 w-80 hover:shadow-xl transition duration-300 text-center">
                    <BadgeDollarSignIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-2xl text-blue-800 font-semibold mb-2">
                        Get Valuation
                    </h2>
                    <p className="text-blue-700 text-base">
                        We quickly evaluate your license and offer you the best possible price.
                    </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl shadow-md p-6 w-80 hover:shadow-xl transition duration-300 text-center">
                    <BanknoteIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-2xl text-blue-800 font-semibold mb-2">
                        Get Paid
                    </h2>
                    <p className="text-blue-700 text-base">
                        Receive your payment instantly once your license is approved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Work;
