import { getCategoryNewsById } from "@/lib/allApiData";
import Link from "next/link";

const Category = async({ category}) => {
    const { category_id, category_name} = category;
    const category2 = await getCategoryNewsById('01');

    return (
        <>
        <Link href={`/category/${category_id}`}>
        <li className="text-text-two text-sm">{category_name}</li>
        </Link>
        </>
    );
};

export default Category;