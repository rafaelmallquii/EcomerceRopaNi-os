import EcommerceLayout from '@/Layouts/EcommerceLayout'
import React from 'react'
import ProductCard from '@/Components/CardProduct/Index';
import { usePage } from '@inertiajs/react';
import Cart from '@/Components/Cart/Idex';
import ProductList from '@/Components/ProductList/Index';
import { Product } from './Products/types/show';

export default function Home({ products, categories }:any) {
    return (
      <EcommerceLayout>
            <div>
                <ProductList products={products} categories={categories} />
            </div>
        </EcommerceLayout>
    )
}