import Image from "next/image";
import Link from "next/link";
import Logo from "../_icons/logoPort.png";

export default function Navbar() {
    return (
        <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} width={25} height={25} alt="logo" />
                    <div className="text-green-400 font-semibold text-lg">OnionDev</div>
                </Link>
                <nav>
                    <ul className="flex items-center gap-x-8">
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-purple-400 duration-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="hover:text-purple-400 duration-300"
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}