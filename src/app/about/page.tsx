import Image from "next/image";
function About() {
    return(
        <div className="bg-orange-400 w-full h-screen">
            <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-4xl font-extrabold py-8">How We Work?</h2>
            <p className="text-xl p-6">Finding the perfect gift can be challenging, but with <span className="font-bold text-xl">FYLO</span>, it’s now easier than ever! Whether it’s a birthday, anniversary, festival, or just a special surprise, Our Gift Finder tool is here to help you discover the ideal present for your loved ones.</p>
        </div>
        <div className="flex justify-center">
                    <Image src="/pic3.png" alt="picture" width={400} height={400}/>
                </div>
        </div>
    )
}
export default About;