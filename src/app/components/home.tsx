import Image from "next/image"


export default function home () {
  return (
    <div className="bg-orange-400 w-full h-screen">
      <div className="flex flex-raw justify-center p-8 lg:items-start">
        <div className="text-xl sm:text-xl md:text-xl text-center p-20 h-[530px] w-[500px] bg-slate-300">
            <h1 className="font-bold text-2xl">Find a gift for your wife or your loved ones</h1>
            <p className="mt-8 pt-2 pb-2">Struggling to find a gift for your wife or your loved ones? <span className="font-bold">No Problem!</span></p>
            <button className="font-bold mt-8 p-4 border bg-orange-400  hover:bg-slate-500">Find Gift Now</button>
        </div>
        <div className="">
            <Image src="/pic1.png" alt="picture" width={0} height={0} className="flex justify-around items-center w-[550px] h-[600px]:" sizes="100%" />
        </div>
      </div>
      </div>
  )
}


 