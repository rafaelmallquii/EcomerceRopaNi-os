export interface Product {
    id: number;
    category_id: number;
    name: string;
    slug: string;
    price: string;
    created_at: string;
    updated_at: string;
    images: Image[];
}

export interface Image {
    url: string;
}
