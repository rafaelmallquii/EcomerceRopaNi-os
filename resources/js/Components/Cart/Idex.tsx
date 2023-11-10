import React, { useState, useEffect } from 'react';
import ProductCardAgregado from '../ProductCardAgregado/Index';
import { useLocalStorage } from '@uidotdev/usehooks';
import CartSummary from '../CartSummary/Index';
import { Product } from '../../types/global';

export default function Cart() {

  const [carrito] = useLocalStorage<Product[]>("carrito", []);
  return (
  <>
      {carrito.map((producto: Product, index: number) => (
        <ProductCardAgregado key={index} product={producto} />
        ))}
    <CartSummary carrito={carrito} />
    </>
  );
}
