import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-orange-400 w-full min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl w-full">
        {/* Text Content */}
        <div className="text-xl text-center p-8 sm:p-12 bg-slate-300 max-w-md w-full">
          <h1 className="font-bold text-2xl sm:text-3xl">
            Find a gift for your wife or your loved ones
          </h1>
          <p className="mt-6 sm:mt-8">
            Struggling to find a gift for your wife or your loved ones?{" "}
            <span className="font-bold">No Problem!</span>
          </p>
          <button className="font-bold mt-6 sm:mt-8 p-4 border bg-orange-400 hover:bg-slate-500 w-full">
            Find Gift Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full max-w-md">
          <Image
            src="/pic1.png"
            alt="picture"
            width={500}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
