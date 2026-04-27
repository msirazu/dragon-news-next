import Link from "next/link";

const Category = ({ category}) => {
    if (!category) return null;

    const { name, id } = category;
    
    return (
        <>
        <Link href={`/category/${id}`}>
        <li className="text-text-two text-sm">{name}</li>
        </Link>
        </>
    );
};

export default Category;