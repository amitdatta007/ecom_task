import { catagories } from "@/constant/data";
import NavLink from "../ui/NavLink";

const Catagories = () => {
    return (
        <section className="my-6 overflow-x-hidden hover:overflow-x-scroll scrollbar-thin h-14">
            <div className="flex gap-1">
                {
                    catagories.map((catagory, i) => (<NavLink
                        key={i}
                        href={`?catagory=${catagory}`}
                        className='py-[5px] px-[14px] bg-background text-[13px] font-medium leading-[27px] border border-border rounded hover:text-white hover:bg-black'
                        data={catagory}
                        activeClassName='bg-black text-white'
                    >
                        <span className="capitalize">{catagory}</span>
                    </NavLink>))
                }
            </div>
        </section>
    );
};

export default Catagories;