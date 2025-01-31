import Image from "next/image";

function About() {
  return (
    <div className="bg-orange-400 w-full min-h-screen flex flex-col items-center p-4">
      <div className="flex flex-col justify-center items-center max-w-4xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold py-6 sm:py-8">
          How We Work?
        </h2>
        <p className="text-lg sm:text-xl px-4 sm:px-6">
          Finding the perfect gift can be challenging, but with{" "}
          <span className="font-bold">FYLO</span>, it&apos;s now easier than ever!
          Whether it&apos;s a birthday, anniversary, festival, or just a special
          surprise, Our Gift Finder tool is here to help you discover the ideal
          present for your loved ones.
        </p>
      </div>
      <div className="flex justify-center w-full">
        <Image
          src="/pic3.png"
          alt="picture"
          width={400}
          height={400}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto"
        />
      </div>
    </div>
  );
}

export default About;
