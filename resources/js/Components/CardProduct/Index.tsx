import { Product } from "@/types/global";
import { Link } from "@inertiajs/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useState, useEffect } from "react";

export default function ProductCard({ product }:{product:Product}) {
    const [carrito, setCarrito] = useLocalStorage<Product[]>("carrito", []);

    const handleAdd = () => {
        if (carrito.some((item) => item.id === product.id)) {
            setCarrito(
                carrito.map((item) =>
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCarrito([...carrito, { ...product, quantity: 1 }]);
        }
    };

    // Resto de tu componente...
    return (
        <div className="border-2 border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            {
                
                product.images.length >= 0 ? (
                    <Link href={ route("products.show", product.slug) }>
                    <img
                    src={product.images[0].url}
                    alt={product.name}
                    className="w-full h-64 object-cover mb-4 rounded"
                />
                </Link>
                ) : (
                    <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-lg">
                        No hay imagen
                    </div>
                )
            }
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
                {product.name}
            </h2>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-blue-500">
                    ${product.price}
                </span>
                <button
                    onClick={
                        handleAdd
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300"
                >
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
}
