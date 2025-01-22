import Link from "next/link"

export default function Header() {
    return (
        <div className="flex justify-between mx-auto bg-black py-4 px-2">
            <h3 className="text-xl sm:text-xl md:text-2xl text-orange-400 font-bold">FYLO</h3>
            <div className="flex space-x-8 text-orange-400">
                <Link href="/" className="text-xl sm:text-xl md:text-2xl md:font-bold">Home</Link>
                <Link href="about" className="text-xl sm:text-xl md:text-2xl md:font-bold">About</Link>
                <Link href="contact" className="text-xl sm:text-xl md:text-2xl md:font-bold">Contact</Link>
            </div>
        </div>
    )
}