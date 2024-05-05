import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <label htmlFor='search' className="border border-primary rounded-full py-3 px-5 flex items-center gap-4 transition-all ease-out duration-300 focus-within:border-black my-3">
            <FaSearch className="w-5 h-5 text-primary" />
            <input id="search" type="text" placeholder="Search" className="flex-1 text-sm border-none focus:outline-none placeholder:text-paragraph" />
        </label>
    );
};

export default SearchBar;