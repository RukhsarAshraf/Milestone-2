import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-black py-4 px-4">
      <div className="flex flex-wrap items-center justify-between max-w-7xl w-full mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-orange-400 font-bold">
          FYLO
        </h3>
        <div className="flex flex-wrap gap-x-4 sm:gap-x-8 text-orange-400">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-semibold">
            Home
          </Link>
          <Link href="/about" className="text-lg sm:text-xl md:text-2xl font-semibold">
            About
          </Link>
          <Link href="/contact" className="text-lg sm:text-xl md:text-2xl font-semibold">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
