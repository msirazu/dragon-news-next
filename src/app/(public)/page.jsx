import LeftSidebar from "@/pages/home/LeftSidebar";
import NewsContent from "@/pages/home/NewsContent";
import RightSidebar from "@/pages/home/RightSidebar";

export const metadata = {
  title: 'Homepage | The Dragon News',
  description: 'the dragon news homepage'
}

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 gap-5">

      <section className="col-span-12 md:col-span-3 lg:col-span-2 p-5 border border-gray-200">
        <LeftSidebar/>
      </section>

      <section className="col-span-12 md:col-span-6 lg:col-span-8 p-5 border border-gray-200">
        <NewsContent/>
      </section>

      <section className="col-span-12 md:col-span-3 lg:col-span-2 p-5 border border-gray-200">
        <RightSidebar/>
      </section>

    </div>
  );
};

export default Homepage;