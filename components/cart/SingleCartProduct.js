"use client"

import img from '@/assets/pr-3.png'
import { addToCart, changeQuantity, removeFromCart } from '@/lib/features/cart/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';

const SingleCartProduct = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="px-[15px] py-[10px] flex items-center gap-6 shadow-[0_0px_10px_rgb(0,0,0,0.1)] rounded-md">
            <Image src={img} alt='' className='w-[100px] h-full' />
            <div className='flex-1 flex flex-col'>
                <span className="text-xs font-medium text-paragraph leading-7">{product.menufacturer}</span>
                <Link href='#' className="font-semibold">{product.name}</Link>
                <div className="flex items-end">
                    <span className="text-sm font-semibold">ট</span>
                    &nbsp;
                    <span className="text-sm font-semibold">{(product.newPrice * product.quantity).toFixed(2)}</span>
                    &nbsp;
                    <span className="text-sm font-medium">{`(${product.newPrice} x ${product.quantity})`}</span>
                    &nbsp;&nbsp;
                    <span className="text-xs font-medium text-paragraph line-through">ট {product.oldPrice.toFixed(2)}</span>
                </div>
                <div className='mt-2 flex justify-between'>
                    <div className='bg-background rounded p-1 flex gap-2'>
                        <button
                            className='font-semibold w-[25px] h-[22px] flex justify-center items-center leading-none bg-[#F9E3C3] border border-primary rounded'
                            onClick={() => dispatch(removeFromCart(product))}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            className='w-[25px] h-[22px] rounded focus:outline-none text-center text-sm font-medium leading-7'
                            defaultValue={product.quantity}
                            value={product.quantity}
                            onChange={(e) => dispatch(changeQuantity({ ...product, quantity: parseInt(e.target.value) }))}
                        />
                        <button
                            className='font-semibold w-[25px] h-[22px] flex justify-center items-center leading-none bg-[#F9E3C3] border border-primary rounded'
                            onClick={() => dispatch(addToCart(product))}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className='bg-secondary h-7 w-7 grid place-items-center text-white rounded'
                        onClick={() => dispatch(removeFromCart({ ...product, quantity: 1 }))}
                    >
                        <FaTrashAlt className='text-sm' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCartProduct;