export type Food = {
    name: string;
    description: string;
    price: number;
    image: string;
    category: FoodCategory;
};

export type FoodCategory =
    | 'salada'
    | 'paes'
    | 'sobremesa'
    | 'sanduiche'
    | 'bolo'
    | 'vegetariano'
    | 'massa'
    | 'macarrao';
