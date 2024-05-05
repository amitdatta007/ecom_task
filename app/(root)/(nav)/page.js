import Catagories from "@/components/home/Catagories";
import Products from "@/components/home/Products";
import SearchBar from "@/components/home/SearchBar";

const HomePage = () => {
    return (
        <>
            <SearchBar />
            <Catagories />
            <Products />
        </>
    );
};

export default HomePage;