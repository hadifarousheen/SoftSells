const Contact = () => {
    return (
        <div className="px-6 py-12 bg-white">
            <h1 className="text-4xl text-center text-blue-900 font-bold mb-8">Contact Us</h1>
            <form className="max-w-xl mx-auto bg-blue-50 p-8 rounded-xl shadow-md">
                <div className="flex flex-col gap-4 text-lg text-blue-800">
                    <input
                        className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        placeholder="Your Email"
                        required
                    />
                    <input
                        className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Company Name"
                    />
                    <select
                        className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select License Type</option>
                        <option value="personal">Personal</option>
                        <option value="enterprise">Enterprise</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea
                        className="border border-blue-300 rounded-md p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
