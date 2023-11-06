import React from 'react';
import { Product } from '../../types/global';

interface CartSummaryProps {
  carrito: Product[];
}

export default function CartSummary({ carrito }: CartSummaryProps) {
  const totalQuantity = carrito.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = carrito.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleViewCart = () => {
    // Aquí puedes agregar la lógica para ver el carrito
  };

  const handlePurchase = () => {
    // Aquí puedes agregar la lógica para realizar la compra
  };

  return (
    <div className="items-center p-5">
      <div className='p-2 w-full'>
        <p className="text-2xl font-bold text-blue-500">Precio total: ${totalPrice.toFixed(2)}</p>
      </div>
      <div className='flex justify-center gap-4'>
        <button onClick={handleViewCart} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300 mr-2">Ver carrito</button>
        <button onClick={handlePurchase} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-300">Comprar</button>
      </div>
    </div>
  );
}