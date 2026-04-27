'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = ({path, children, style}) => {
    
    const pathname = usePathname();

    const isActive = pathname === path;
    
    return (
        <Link className={`${isActive ? 'text-blue-500 font-bold' : ''} text-sm ${style}`} href={path}>
            {children}
        </Link>
    );
};

export default NavbarLinks;