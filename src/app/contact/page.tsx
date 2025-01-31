export default function Contact() {
    return (
      <div className="bg-orange-400 w-full min-h-screen flex flex-col items-center p-4">
        <h2 className="text-center text-black text-3xl sm:text-4xl font-extrabold p-4">
          Contact With Us
        </h2>
        <div className="w-full max-w-3xl bg-gray-400 p-6 shadow-lg rounded-lg">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#F5F5F5] p-4 w-full sm:w-[48%] md:w-[32%] rounded-md"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="bg-[#F5F5F5] p-4 w-full sm:w-[48%] md:w-[32%] rounded-md"
            />
            <input
              type="text"
              placeholder="Your Phone number"
              className="bg-[#F5F5F5] p-4 w-full sm:w-[48%] md:w-[32%] rounded-md"
            />
          </div>
          <textarea
            placeholder="Your Feedback"
            className="bg-[#F5F5F5] py-16 px-5 rounded-md focus:outline-none border-2 focus:border-white mt-5 w-full"
          ></textarea>
          <div className="flex justify-center mt-6">
            <button className="bg-orange-400 text-white px-6 py-3 text-lg sm:text-xl hover:bg-gray-400 rounded-md w-full sm:w-auto">
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  }
  