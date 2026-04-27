import { getCategoriesData, getCategoriesData2 } from "@/lib/allApiData";
import Category from "./Category";

const LeftSidebar = async() => {
    const categories = getCategoriesData();
    const categoriesData = await getCategoriesData2();
    const categories2 = categoriesData.data.news_category;

    return (
        <div className="space-y-3">
            <section>
                <h4 className="capitalize font-bold text-center text-lg">all category</h4>
            </section>

            <ul>
                {categories.map(category => <Category key={category.id} category={category}/>)}
            </ul>
        </div>
    );
};

export default LeftSidebar;