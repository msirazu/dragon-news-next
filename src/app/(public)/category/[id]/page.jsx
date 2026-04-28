import { getCategoriesData
    , getCategoryNewsById } from "@/lib/allApiData";
import NewsContent from "@/pages/home/NewsContent";
const NewsCategoryPage = async({params}) => {
    const { id } = await params;
    const categories = await getCategoriesData();
    const catNews = await getCategoryNewsById(id);

    return (
        <>
<div>
{catNews.map(news => <NewsContent key={news._id} allNews={news}/>)}
</div>
        </>
    );
};

export default NewsCategoryPage;