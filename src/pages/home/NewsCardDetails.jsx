import Image from "next/image";

const NewsCardDetails = ({news}) => {
    if (!news) return null;
    const {title, rating, author, details, image_url, others, tags, total_view, id} = news;

    return (
        <div className="space-y-5">
            <section className="flex justify-center">
                <Image width={750} height={500} alt={title} src={image_url}/>
            </section>
            <h1 className="font-bold">{title}</h1>
            <p className="text-sm">{details}</p>
        </div>
    );
};

export default NewsCardDetails;