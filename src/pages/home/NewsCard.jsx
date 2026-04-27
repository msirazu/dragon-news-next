import fallbackImg from '@/assets/images/demo-card-thumbnail.png';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ news }) => {
    if (!news) return null;

    const {title, rating, author, details, image_url, others, tags, total_view, id} = news;

    return (
        <>
        <div className="flex flex-col gap-5 pb-5">
            <h2 className="text-sm font-bold">
            {title || 'no-title'}
            </h2>
            <div className='flex justify-center items-center'>
            <Image loading="eager" width={500} height={150} alt={title || "news"} src={image_url || fallbackImg}/>
            </div>
            <p>{details.slice(0, 250)}...</p>
            <Link href={`/news/${id}`}className='btn capitalize'>read more</Link>
        </div>
        </>
    );
};

export default NewsCard;