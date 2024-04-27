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