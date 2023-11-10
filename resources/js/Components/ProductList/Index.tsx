import React, { useState } from "react";
import ProductCard from "../CardProduct/Index";
import { CategoryProps, HomeProps, Product } from "@/types/global";
import { log } from "console";

// interface ProductListProps {
//     products: Product[];
//     category:string;
// }

export default function ProductList({products}:{products:Product[]}) {
   
            
    return (
        <div className="p-4">
           
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 p-10 mt-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
