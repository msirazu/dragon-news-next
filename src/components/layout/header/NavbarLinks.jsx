'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = ({path, title, style}) => {
    
    const pathname = usePathname();
    
    return (
        <Link className={`${style}`} href={path}>
            {title}
        </Link>
    );
};

export default NavbarLinks;