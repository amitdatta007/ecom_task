
import logo from "@/assets/logo.png"
import Image from "next/image";
import Filter from "./Filter";

const Navbar = () => {
    return (
        <nav className="py-3 flex justify-between">
            <Image src={logo} alt="logo" width={50} />
            <Filter />
        </nav>
    );
};

export default Navbar;