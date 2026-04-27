import { getCategoriesData } from "@/lib/allApiData";
import Category from "./Category";

const LeftSidebar = () => {
    const categories = getCategoriesData();
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