import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeNews = () => {
    return (
        <div className="p-2 bg-gray-100">
            <section className="flex gap-2">
                <div>
                <button className="btn-one">latest</button>
            </div>
            <Marquee pauseOnHover={true} speed={50}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex quis eligendi nostrum? Debitis cupiditate dicta minima doloribus sint esse sed expedita fugiat numquam pariatur!
            </Marquee>
            </section>
        </div>
    );
};

export default MarqueeNews;