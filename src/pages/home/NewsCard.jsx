import Image from "next/image";

const NewsCard = ({ news }) => {
    const {title, rating, author, details, image_url, others, tags, total_view} = news;
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-sm font-bold">
            {title}
            </h2>
            <Image width={400} height={150} alt={title} src={image_url}/>
        </div>
    );
};

export default NewsCard;