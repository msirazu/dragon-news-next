import Link from "next/link";

export const metadata = {
    title: 'Not Found | The Dragon News'
}

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen flex-col gap-10">
            <h1 className="text-3xl font-bold capitalize">page not found</h1>
            <button className="btn capitalize">
                <Link href={'/'}>back to home</Link>
            </button>
        </div>
    );
};

export default NotFound;