import { AxiosInstance } from 'axios';
import ziggyRoute, { Config as ZiggyConfig } from 'ziggy-js';
import Home from '../Pages/Home';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var route: typeof ziggyRoute;
    var Ziggy: ZiggyConfig;
}
export interface Product {
    id: number;
    category_id: number;
    quantity: number;
    description: string;
    name: string;
    slug: string;
    price: number;
    created_at: string;
    updated_at: string;
    images: Image[];
    category: CategoryProps;
   
}
export interface Image {
    url: string;
}

interface HomeProps {
    products: Product[];
}

interface CategoryProps {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}