import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const NavBar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {/* MOBILE */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <div>
                        <Image src="/logo-web.svg" alt="" width={60} height={60}/>
                    </div>
                </Link>
                <Menu />
            </div>
            {/* Bigger Screens */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* RIGHT */}
                <div className="w-2/3"></div>
            </div>
        </div>
    );
}

export default NavBar