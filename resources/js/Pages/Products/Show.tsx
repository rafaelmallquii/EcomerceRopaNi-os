import React from "react";
import { Product } from "./types/show";
import EcommerceLayout from "@/Layouts/EcommerceLayout";

export default function Show({
    product,
    favorites,
}: {
    product: Product;
    favorites: any;
}) {
    console.log(favorites);

    const [currentImage, setCurrentImage] = React.useState(
        product.images[0].url
    );
    return (
        <EcommerceLayout>
        <div className="container mx-auto pb-32">
            <div className="grid lg:grid-cols-2">
                <img src={currentImage} alt="" />

                <section className="space-y-4">
                    <h4 className="text-xl font-bold">{product.name}</h4>

                    <p className="text-gray-500">$ {product.price}</p>

                    <p>* * * * *</p>
                </section>
            </div>

            {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 py-4">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image.url}
                            alt="Image"
                            className="cursor-pointer"
                            onClick={() => setCurrentImage(image.url)}
                        />
                    ))}
                </div>
            )}

            <div className="flex flex-wrap gap-4 justify-between">
                {favorites.map(({ id, name, images }: any) => (
                    <div key={id}>
                        <h4>{name}</h4>

                        <div className="relative group/hover">
                            <img
                                className="h-64"
                                src={images[0].url}
                                alt="Image"
                            />
                            <button className="bg-blue-500 transition-all duration-200 opacity-0  text-white px-4 py-2 invisible group-hover/hover:opacity-100  group-hover/hover:visible rounded absolute -translate-x-1/2 left-1/2 bottom-8">
                                Add to cart
                            </button>
                        </div>

                        <p>* * * * *</p>
                    </div>
                ))}
            </div>

            <div className="bg-blue-50  h-[220px] overflow-hidden group/hover ">
                <img
                    className="h-44 group-hover/hover:block hidden"
                    src={product.images[0].url}
                    alt=""
                />
                <img
                    className="h-44 group-hover/hover:hidden"
                    src={product.images[1].url}
                    alt=""
                />

                <div className=" group-hover/hover:-translate-y-8 bg-white transition-all duration-300">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Numquam, quidem nobis aperiam placeat consequuntur
                        beatae quis consequatur itaque voluptatem? Provident
                        animi voluptatem similique labore nam maiores magni sed
                        debitis quasi, facilis suscipit perferendis architecto
                        deleniti officia odio temporibus magnam accusamus
                        voluptatum, eaque
                    </p>

                    <button className="bg-slate-900 text-white">
                        ADD CARD
                    </button>
                </div>
            </div>
        </div>
        </EcommerceLayout>
    );
}
