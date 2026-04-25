import Image from "next/image";
import logoImg from '@/assets/icons/logo.png';
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <Link href={'/'}>
            <Image alt="logo" src={logoImg} width={300} height={100} loading="eager"/>
            </Link>
            <h4>Journalism Without Fear or Favour</h4>
        </div>
    );
};

export default Header;