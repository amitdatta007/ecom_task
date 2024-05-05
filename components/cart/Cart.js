"use client"

import { useSelector } from "react-redux";
import SingleCartProduct from "./SingleCartProduct";
import { compareAsc, format } from "date-fns";


const Cart = () => {
    const { cart } = useSelector((state) => state.cart);
    const newCart = [...cart].sort((a, b) => a._id - b._id);
    const d = new Date();

    return (
        <section className="mt-6">
            <div>
                <h3 className="text-center text-lg font-semibold leading-tight">My Cart</h3>
                <p className="text-center text-sm font-medium leading-7">
                    {format(new Date(), "E, MMM dd, yyyy")}
                </p>
            </div>
            <div className="flex flex-col my-6 pb-60 gap-2">               
                {
                    newCart?.map((product) => <SingleCartProduct key={product._id} product={product}  />)
                }
            </div>
        </section>
    );
};

export default Cart;