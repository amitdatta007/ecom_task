import Link from "next/link";
import { FaHome, FaUser, FaCartPlus, FaLuggageCart, FaStroopwafel } from "react-icons/fa";
import NavLink from "./NavLink";

const MenuBar = () => {
    return (
        <section className="fixed z-20 bg-white w-full bottom-0 shadow-[0_0px_10px_rgb(0,0,0,0.1)] rounded-t-2xl">
            <div className="px-3 sm:px-0 w-full max-w-[532px] md:max-w-[712px] lg:max-w-[952px] xl:max-w-[1132px] 2xl:max-w-[1332px] mx-auto flex justify-between">
                <NavLink
                    href='/'
                    className="h-[60px] flex gap-1 flex-col items-center justify-center text-paragraph hover:text-black"
                    activeClassName="text-primary"
                    exact={true}
                >
                    <FaHome className="w-4 h-4" />
                    <span className="font-medium text-xs leading-5">Home</span>
                </NavLink>
                <NavLink
                    href='/cart'
                    className="h-[60px] flex gap-1 flex-col items-center justify-center text-paragraph hover:text-black"
                    activeClassName="text-primary"
                >
                    <FaCartPlus className="w-4 h-4" />
                    <span className="font-medium text-xs leading-5">Cart</span>
                </NavLink>
                <NavLink
                    href='/notifications'
                    className="h-[60px] flex gap-1 flex-col items-center justify-center text-paragraph hover:text-black"
                    activeClassName="text-primary"
                >
                    <FaStroopwafel className="w-4 h-4" />
                    <span className="font-medium text-xs leading-5">Notifications</span>
                </NavLink>
                <NavLink
                    href='/history'
                    className="h-[60px] flex gap-1 flex-col items-center justify-center text-paragraph hover:text-black"
                    activeClassName="text-primary"
                >
                    <FaLuggageCart className="w-4 h-4" />
                    <span className="font-medium text-xs leading-5">History</span>
                </NavLink>
                <NavLink
                    href='/profile'
                    className="h-[60px] flex gap-1 flex-col items-center justify-center text-paragraph hover:text-black"
                    activeClassName="text-primary"
                >
                    <FaUser className="w-4 h-4" />
                    <span className="font-medium text-xs leading-5">Profile</span>
                </NavLink>
            </div>
        </section>
    );
};

export default MenuBar;