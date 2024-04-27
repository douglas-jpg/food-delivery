import basket_icon from './basket_icon.png';
import logo from './logo.png';
import search_icon from './search_icon.png';

import menu_1 from './menu_1.png';
import menu_2 from './menu_2.png';
import menu_3 from './menu_3.png';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';
import menu_6 from './menu_6.png';
import menu_7 from './menu_7.png';
import menu_8 from './menu_8.png';

import food_1 from './food_1.png';
import food_2 from './food_2.png';
import food_3 from './food_3.png';
import food_4 from './food_4.png';
import food_5 from './food_5.png';
import food_6 from './food_6.png';
import food_7 from './food_7.png';
import food_8 from './food_8.png';
import food_9 from './food_9.png';
import food_10 from './food_10.png';
import food_11 from './food_11.png';
import food_12 from './food_12.png';
import food_13 from './food_13.png';
import food_14 from './food_14.png';
import food_15 from './food_15.png';
import food_16 from './food_16.png';
import food_17 from './food_17.png';
import food_18 from './food_18.png';
import food_19 from './food_19.png';
import food_20 from './food_20.png';
import food_21 from './food_21.png';
import food_22 from './food_22.png';
import food_23 from './food_23.png';
import food_24 from './food_24.png';
import food_25 from './food_25.png';
import food_26 from './food_26.png';
import food_27 from './food_27.png';
import food_28 from './food_28.png';
import food_29 from './food_29.png';
import food_30 from './food_30.png';
import food_31 from './food_31.png';
import food_32 from './food_32.png';

import add_icon_white from './add_icon_white.png';
import add_icon_green from './add_icon_green.png';
import remove_icon_red from './remove_icon_red.png';
import app_store from './app_store.png';
import play_store from './play_store.png';
import linkedin_icon from './linkedin_icon.png';
import facebook_icon from './facebook_icon.png';
import twitter_icon from './twitter_icon.png';
import cross_icon from './cross_icon.png';
import selector_icon from './selector_icon.png';
import rating_starts from './rating_starts.png';
import profile_icon from './profile_icon.png';
import bag_icon from './bag_icon.png';
import logout_icon from './logout_icon.png';
import parcel_icon from './parcel_icon.png';

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

export const assets: AssetImages = {
    logo,
    basket_icon,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
};

export const menu_list: MenuItem[] = [
    {
        menu_name: 'Salada',
        menu_image: menu_1,
    },
    {
        menu_name: 'Pães',
        menu_image: menu_2,
    },
    {
        menu_name: 'Sobremesas',
        menu_image: menu_3,
    },
    {
        menu_name: 'Sanduíche',
        menu_image: menu_4,
    },
    {
        menu_name: 'Bolo',
        menu_image: menu_5,
    },
    {
        menu_name: 'Vegetariano',
        menu_image: menu_6,
    },
    {
        menu_name: 'Massa',
        menu_image: menu_7,
    },
    {
        menu_name: 'Macarrão',
        menu_image: menu_8,
    },
];

export const food_list: FoodItem[] = [
    {
        _id: '1',
        name: 'Salada Grega',
        image: food_1,
        price: 12,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Salada',
    },
    {
        _id: '2',
        name: 'Salada Vegana',
        image: food_2,
        price: 18,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Salada',
    },
    {
        _id: '3',
        name: 'Salada de Trevo',
        image: food_3,
        price: 16,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Salada',
    },
    {
        _id: '4',
        name: 'Salada de Frango',
        image: food_4,
        price: 24,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Salada',
    },
    {
        _id: '5',
        name: 'Rocambole de Lasanha',
        image: food_5,
        price: 14,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Pães',
    },
    {
        _id: '6',
        name: 'Rocambole de Peri Peri',
        image: food_6,
        price: 12,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Pães',
    },
    {
        _id: '7',
        name: 'Rocambole de Frango',
        image: food_7,
        price: 20,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Pães',
    },
    {
        _id: '8',
        name: 'Rocambole Vegano',
        image: food_8,
        price: 15,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Pães',
    },
    {
        _id: '9',
        name: 'Sorvete de Ripple',
        image: food_9,
        price: 14,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Sobremesas',
    },
    {
        _id: '10',
        name: 'Sorvete de Frutas',
        image: food_10,
        price: 22,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Sobremesas',
    },
    {
        _id: '11',
        name: 'Sorvete de Jarra',
        image: food_11,
        price: 10,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Sobremesas',
    },
    {
        _id: '12',
        name: 'Sorvete de Baunilha',
        image: food_12,
        price: 12,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Sobremesas',
    },
    {
        _id: '13',
        name: 'Sanduíche de Frango',
        image: food_13,
        price: 12,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Sanduíche',
    },
    {
        _id: '14',
        name: 'Sanduíche Vegano',
        image: food_14,
        price: 18,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Sanduíche',
    },
    {
        _id: '15',
        name: 'Sanduíche Grelhado',
        image: food_15,
        price: 16,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Sanduíche',
    },
    {
        _id: '16',
        name: 'Sanduíche de Pão',
        image: food_16,
        price: 24,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Sanduíche',
    },
    {
        _id: '17',
        name: 'Cupcake',
        image: food_17,
        price: 14,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Bolo',
    },
    {
        _id: '18',
        name: 'Bolo Vegano',
        image: food_18,
        price: 12,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Bolo',
    },
    {
        _id: '19',
        name: 'Bolo de Caramelo',
        image: food_19,
        price: 20,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Bolo',
    },
    {
        _id: '20',
        name: 'Bolo Fatiado',
        image: food_20,
        price: 15,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Bolo',
    },
    {
        _id: '21',
        name: 'Cogumelo Alho',
        image: food_21,
        price: 14,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Vegetariano',
    },
    {
        _id: '22',
        name: 'Couve-flor Frita',
        image: food_22,
        price: 22,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Vegetariano',
    },
    {
        _id: '23',
        name: 'Mix Veg Pulao',
        image: food_23,
        price: 10,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Vegetariano',
    },
    {
        _id: '24',
        name: 'Rice Zucchini',
        image: food_24,
        price: 12,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Vegetariano',
    },
    {
        _id: '25',
        name: 'Pasta de Queijo',
        image: food_25,
        price: 12,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Massa',
    },
    {
        _id: '26',
        name: 'Pasta de Tomate',
        image: food_26,
        price: 18,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Massa',
    },
    {
        _id: '27',
        name: 'Pasta Cremosa',
        image: food_27,
        price: 16,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Massa',
    },
    {
        _id: '28',
        name: 'Pasta de Frango',
        image: food_28,
        price: 24,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Massa',
    },
    {
        _id: '29',
        name: 'Macarrão de Manteiga',
        image: food_29,
        price: 14,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Macarrão',
    },
    {
        _id: '30',
        name: 'Macarrão Vegetariano',
        image: food_30,
        price: 12,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Macarrão',
    },
    {
        _id: '31',
        name: 'Macarrão de Somen',
        image: food_31,
        price: 20,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Macarrão',
    },
    {
        _id: '32',
        name: 'Macarrão Cozido',
        image: food_32,
        price: 15,
        description:
            'A comida fornece nutrientes essenciais para a saúde geral e o bem-estar',
        category: 'Macarrão',
    },
];
