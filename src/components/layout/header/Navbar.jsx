import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    return (
        <nav className="flex justify-between flex-col md:flex-row items-center">
            <div></div>
            <div className="flex gap-2">
                <NavbarLinks path={'/'} title={'Home'}/>
                <NavbarLinks path={'/about'} title={'About'}/>
                <NavbarLinks path={'/career'} title={'Career'}/>
            </div>
            <div>

            </div>
        </nav>
    );
};

export default Navbar;