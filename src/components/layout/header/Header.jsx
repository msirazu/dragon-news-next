import Image from "next/image";
import logoImg from "@/assets/icons/logo.png";
import Link from "next/link";
import DateDisplay from "./DateDisplay";
import Navbar from "./Navbar";
import MarqueeNews from "./MarqueeNews";

const Header = () => {
  return (
    <div className="flex justify-center py-10 flex-col">
      <section className="flex flex-col gap-2 justify-center items-center">
        <Link href={"/"}>
          <Image
            alt="logo"
            src={logoImg}
            width={300}
            height={100}
            loading="eager"
          />
        </Link>
        <h4 className="text-text-one">Journalism Without Fear or Favour</h4>
       <DateDisplay/>
      </section>

      <section className="py-5">
        <MarqueeNews/>
      </section>

      <section>
        <Navbar/>
      </section>
    </div>
  );
};

export default Header;
