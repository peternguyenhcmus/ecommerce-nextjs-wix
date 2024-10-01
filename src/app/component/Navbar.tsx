import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import SearchBar from "./Search";
import NavIcons from "./NavIcon";

const NavBar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            {/* MOBILE */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <div>
                        <Image src="/logo-web.svg" alt="" width={60} height={60} />
                    </div>
                </Link>
                <Menu />
            </div>
            {/* Bigger Screens */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href="/">
                        <div>
                            <Image src="/logo-web.svg" alt="" width={65} height={65}/>
                        </div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href="/">Home</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    );
}

export default NavBar