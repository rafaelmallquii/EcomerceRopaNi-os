import { AxiosInstance } from 'axios';
import ziggyRoute, { Config as ZiggyConfig } from 'ziggy-js';

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
}
export interface Image {
    url: string;
}
