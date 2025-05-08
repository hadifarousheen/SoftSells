import { ClockIcon, ZapIcon, DollarSignIcon, MousePointerClickIcon } from "lucide-react";

const Choose = () => {
    return (
        <div className="px-6 py-12 bg-blue-50">
            <h1 className="text-4xl text-center text-blue-900 font-bold mb-12">Features</h1>
            <div className="max-w-screen-md mx-auto grid gap-6">
                <div className="flex items-start gap-4 bg-white p-6 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition">
                    <ClockIcon className="h-8 w-8 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-2xl text-blue-800 font-semibold mb-1">Fast Valuation</h3>
                        <p className="text-blue-700 text-base">
                            Your license is evaluated quickly so you don’t have to wait long for approval.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition">
                    <ZapIcon className="h-8 w-8 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-2xl text-blue-800 font-semibold mb-1">Quick Transaction</h3>
                        <p className="text-blue-700 text-base">
                            Once your license is approved, payment is transferred to your bank account immediately.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition">
                    <DollarSignIcon className="h-8 w-8 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-2xl text-blue-800 font-semibold mb-1">Best Price</h3>
                        <p className="text-blue-700 text-base">
                            We ensure you get the best value for your unused license — it's worth it!
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition">
                <MousePointerClickIcon className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                        <h3 className="text-2xl text-blue-800 font-semibold mb-1">Easy to Use</h3>
                        <p className="text-blue-700 text-base">
                            Our website has a user-friendly interface that makes everything simple and smooth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;
