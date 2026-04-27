import Image from "next/image";
import NavbarLinks from "./NavbarLinks";
import avatarIcon from '@/assets/icons/user.png';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between flex-col md:flex-row items-center">
            <div></div>
            <div className="flex gap-2">
                <NavbarLinks path={'/'}>Home</NavbarLinks>
                <NavbarLinks path={'/about'}>About</NavbarLinks>
                <NavbarLinks path={'/career'}>Career</NavbarLinks>
            </div>
            <div className="flex gap-2 items-center">
                <Image width={25} height={25} alt={'avatar icon'} src={avatarIcon}/>
                <Link href={'/auth/login'} className="btn-two">login</Link>
            </div>
        </nav>
    );
};

export default Navbar;