import { products } from "@/constant/data";
import SingleProduct from "./SingleProduct";

const Products = () => {
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-20">
            {
                products.map((product) => <SingleProduct product={product} key={product._id} />)
            }
        </section>
    );
};

export default Products;