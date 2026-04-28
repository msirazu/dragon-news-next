import { getNewsData } from "@/lib/allApiData";
import NewsCardDetails from "@/pages/home/NewsCardDetails";

export const generateMetadata = async({params}) => {
    const { id } = await params;
    const allNews = getNewsData();
    const findNews = allNews.find(news => news.id == id);
    return {
        title: `${findNews.title}`,
        description: `${findNews.details.slice(0, 50)}`
    }
}

const NewsDetailPage = async({params}) => {
    const { id } = await params;
    const allNews = getNewsData();
    const findNews = allNews.find(news => news.id === id);
    return (
        <div>
           <NewsCardDetails news={findNews}/>
        </div>
    );
};

export default NewsDetailPage;