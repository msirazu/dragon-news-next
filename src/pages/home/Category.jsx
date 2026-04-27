import Link from "next/link";

const Category = ({ category}) => {

    const { name, id } = category;
    if (!category) return null;
    return (
        <>
        <Link href={`/category/${id}`}>
        <li className="text-text-two text-sm">{name}</li>
        </Link>
        </>
    );
};

export default Category;