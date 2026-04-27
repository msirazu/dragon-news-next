import { getNewsData } from "@/lib/allApiData";
import NewsCard from "./NewsCard";

const NewsContent = () => {
    const allNews = getNewsData();
    return (
        <div>
            <section className="mb-3">
                <h4 className="text-center font-bold text-lg capitalize">dragon news home</h4>
            </section>

            <section>
                {allNews?.map(news => news && <NewsCard key={news.id} news={news}/>)}
            </section>
        </div>
    );
};

export default NewsContent;