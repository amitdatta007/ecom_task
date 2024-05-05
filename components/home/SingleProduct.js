import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import productImg from '@/assets/pr-3.png';

const SingleProduct = ({ product }) => {
    return (
        <div
            key={product.map}
            className="w-full border border-border hover:border-primary rounded-lg overflow-hidden transition-all duration-300 ease-out"
        >
            <Image src={productImg} alt="" className="w-full" />
            <div className="px-3 flex flex-col my-2">
                <Link href='#' className="text-sm font-semibold">{product.name}</Link>
                <span className="text-xs font-medium text-paragraph leading-7">{product.menufacturer}</span>
                <div className="flex items-end">
                    <span className="text-sm font-semibold">ট</span>
                    &nbsp;
                    <span className="text-sm font-semibold">{product.newPrice.toFixed(2)}</span>
                    &nbsp;&nbsp;
                    <span className="text-xs font-medium text-paragraph line-through">ট{product.oldPrice.toFixed(2)}</span>
                </div>
            </div>
            <button className="bg-primary w-full text-white font-medium text-[13px] leading-[27px] py-1 px-2 flex justify-center items-center gap-1">
                <FaCartPlus className="w-4 h-4 mb-[2px]" />
                Add To Cart
            </button>
        </div>
    );
};

export default SingleProduct;