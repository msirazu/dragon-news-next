import fallbackImg from '@/assets/images/demo-card-thumbnail.png';
import Image from 'next/image';

const NewsCard = ({ news }) => {
    if (!news) return null;

    const {title, rating, author, details, image_url, others, tags, total_view} = news;

    return (
        <div className="flex flex-col gap-5 pb-5">
            <h2 className="text-sm font-bold">
            {title || 'no-title'}
            </h2>
            <Image loading="eager" width={400} height={150} alt={title || "news"} src={image_url || fallbackImg} unoptimized/>
        </div>
    );
};

export default NewsCard;