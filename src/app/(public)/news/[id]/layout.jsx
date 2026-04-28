import RightSidebar from "@/pages/home/RightSidebar";

const NewsDetailPageLayout = ({children}) => {
    return (
        <div>
            <header>

            </header>
            <main className="grid grid-cols-1 md:grid-cols-12">
                <section className="col-span-10">
                {children}
                </section>
                <aside className="col-span-2">
                    <RightSidebar/>
                </aside>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default NewsDetailPageLayout;