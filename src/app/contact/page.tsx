

export default function Contact (){
    return (
        <div className="bg-orange-400 w-full h-screen">
            <h2 className="text-center text-black-950 text-4xl font-extrabold p-4">Contact With Us</h2>
            <div className="w-full bg-slate-500 p-5 shadow-lg rounded-lg justify-center ">
                        <div className="flex justify-between flex-col sm:flex-col md:flex-row">
                            <input type="text" placeholder="Your Name" className="bg-[#F5F5F5] p-4" />
                            <input type="text" placeholder="Your Email" className="bg-[#F5F5F5] p-4" />
                            <input type="text" placeholder="Your Phone number" className="bg-[#F5F5F5] p-4" />
                        </div>
                        <textarea  placeholder="Your Feed back"  className="bg-[#F5F5F5] py-20 px-5 rounded-md  focus:outline-none border-2 focus:border-white mt-5 w-[100%]" > </textarea>
                        <button className='bg-orange-400 text-white p-2 text-xl sm:text-xl md:text-xl ml-80 mt-16 hover:bg-gray-400 rounded-md'>Send Message</button>
            </div>

        </div>
    )
}