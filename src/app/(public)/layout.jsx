import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

const PublicLayout = ({ children }) => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default PublicLayout;