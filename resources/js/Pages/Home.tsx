import EcommerceLayout from '@/Layouts/EcommerceLayout'
import React, { useState } from 'react'
import ProductCard from '@/Components/CardProduct/Index';
import { usePage } from '@inertiajs/react';
import Cart from '@/Components/Cart/Idex';
import ProductList from '@/Components/ProductList/Index';
import { log } from 'console';
import { CategoryProps, HomeProps, Product } from '@/types/global';

export default function Home({ products, categories }:{products:Product[], categories:CategoryProps[]}) {
    console.log(products[0]);  
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };
    const filteredProducts = selectedCategory
        ? products.filter(
              (product) => String(product.category_id) === selectedCategory
          )
        : products;
            console.log(products[0].category_id);
    
    return (
      <EcommerceLayout>
            <div>
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
                <ProductList products={filteredProducts} />
            </div>
        </EcommerceLayout>
    )
}