import Navbar from "@/components/ui/Navbar";

const NavLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default NavLayout;