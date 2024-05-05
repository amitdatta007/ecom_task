const CartFooter = () => {
    return (
        <section className="w-full fixed bottom-[44px] left-0 -z-20 px-3 md:px-4 pt-4 pb-8 shadow-[0_0px_15px_rgb(0,0,0,0.1)] flex flex-col gap-5">
            <div className="flex flex-col gap-[6px]">
                <div className="flex justify-between">
                    <p className="text-[13px] font-semibold leading-tight text-paragraph">Subtotal</p>
                    <p className="text-[13px] font-semibold leading-tight text-paragraph">ট 00.00</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-[13px] font-semibold leading-tight text-paragraph">Discount (-)</p>
                    <p className="text-[13px] font-semibold leading-tight text-paragraph">ট 00.00</p>
                </div>
            </div>
            <button className="text-sm font-semibold leading-7 px-5 py-3 bg-primary hover:bg-black transition-all duration-300 ease-out text-white w-full rounded-md">Continue to checkout ট 00.00</button>
        </section>
    );
};

export default CartFooter;