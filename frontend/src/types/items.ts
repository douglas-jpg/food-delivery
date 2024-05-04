import { Dispatch, SetStateAction } from 'react';

export type AssetImages = {
    [key: string]: string;
};

export type MenuItem = {
    menu_name: string;
    menu_image: string;
};

export type FoodItem = {
    _id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
};

export type CartItems = {
    [item: string]: number;
};

export type PropsStoreContext = {
    food_list: FoodItem[];
    cartItems?: CartItems;
    setCartItems: Dispatch<SetStateAction<CartItems>>;
    addToCart: (itemId: string) => void;
    removeFromCart: (itemId: string) => void;
    getTotalCartAmount: () => number;
};
