import React from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import { Product } from '@/types/global';

interface ProductCardAgregadoProps {
  product: Product;
}

export default function ProductCardAgregado({ product }: ProductCardAgregadoProps) {
  const [carrito, setCarrito] = useLocalStorage<Product[]>("carrito", []);

  const handleIncrease = () => {
    setCarrito(carrito.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = () => {
    setCarrito(carrito.map(item =>
      item.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleRemove = () => {
    setCarrito(carrito.filter(item => item.id !== product.id));
  };

  const totalPrice = product.price * product.quantity;
  const totalQuantity = carrito.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="border-2 border-gray-200 p-4 rounded-lg flex shadow-lg w-[300px] hover:shadow-xl transition-shadow duration-300">
      <div className="mr-4">
        <img src={product.images[0].url} alt={product.name} className="w-20 h-20 object-cover rounded" /> //-------revisar aca
      </div>
      <div className="w-full">
        <div className="flex justify-between items-start">
          <h2 className="text-sm font-semibold text-gray-700">{product.name}</h2>
          <button onClick={handleRemove} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-colors duration-300">Eliminar</button>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2">
            <button onClick={handleDecrease} className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors duration-300">-</button>
            <span className="text-sm font-semibold text-gray-700">{product.quantity}</span>
            <button onClick={handleIncrease} className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors duration-300">+</button>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-700">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}