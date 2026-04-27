import { getNewsData } from "@/lib/allApiData";
import Marquee from "react-fast-marquee";

const MarqueeNews = () => {
    const newsData = getNewsData();
    return (
        <div className="p-2 bg-gray-100">
            <section className="flex gap-2">
                <div>
                <button className="btn-one">latest</button>
            </div>
            <Marquee pauseOnHover={true} speed={50}>
                {newsData.map(news => <p className="mr-5 text-sm" key={news.id}>{news.title}</p>)}
            </Marquee>
            </section>
        </div>
    );
};

export default MarqueeNews;