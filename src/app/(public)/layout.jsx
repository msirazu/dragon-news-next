import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

const PublicLayout = ({ children }) => {
    return (
        <div>
            <header className="w-11/12 lg:w-10/12 mx-auto pt-10">
                <Header/>
            </header>
            <main className="w-11/12 lg:w-10/12 mx-auto py-5">
                {children}
            </main>
            <footer className="w-11/12 lg:w-10/12 mx-auto">
                <Footer/>
            </footer>
        </div>
    );
};

export default PublicLayout;