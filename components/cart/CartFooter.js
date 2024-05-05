"use client"

import { useSelector } from "react-redux";

const CartFooter = () => {
    const { cart } = useSelector((state) => state.cart);
    const subTotal = cart.reduce((accumulator, product) => accumulator + (product.oldPrice * product.quantity), 0);
    const mainPrice = cart.reduce((accumulator, product) => accumulator + (product.newPrice * product.quantity), 0);

    return (
        <section className="w-full fixed bottom-[44px] left-0 bg-white z-10 px-3 md:px-4 pt-4 pb-8 shadow-[0_0px_15px_rgb(0,0,0,0.1)] flex flex-col gap-5">
            <div className="flex flex-col gap-[6px]">
                <div className="flex justify-between">
                    <p className="text-[13px] font-semibold leading-tight text-paragraph">Subtotal</p>
                    <p className="text-[13px] font-semibold leading-tight text-paragraph">ট {subTotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-[13px] font-semibold leading-tight text-paragraph">Discount (-)</p>
                    <p className="text-[13px] font-semibold leading-tight text-paragraph">ট {(subTotal - mainPrice).toFixed(2)}</p>
                </div>
            </div>
            <button className="text-sm font-semibold leading-7 px-5 py-3 bg-primary hover:bg-black transition-all duration-300 ease-out text-white w-full rounded-md">Continue to checkout ট {mainPrice.toFixed(2)}</button>
        </section>
    );
};

export default CartFooter;