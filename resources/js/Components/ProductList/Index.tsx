import React, { useState } from "react";
import ProductCard from "../CardProduct/Index";
import { Product } from "@/types/global";

export default function ProductList({
    products,
    categories,
}: {
    products: Product[];
    categories: [{ id: number; name: string }];
}) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };
    const filteredProducts = selectedCategory
        ? products.filter(
              (product) => String(product.category_id) === selectedCategory
          )
        : products;

    return (
        <div className="p-4">
            <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-[20%] p-2 border border-gray-300 rounded-md"
            >
                <option value="">Todas las categorías</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 p-10 mt-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
