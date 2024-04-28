import {
    Dispatch,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from 'react';
import { FoodItem } from '../types/items';
import { food_list } from '../assets/assets';

type PropsCardItems = {
    [itemId: string]: number;
};

type PropsStoreContext = {
    food_list: FoodItem[];
    cartItems?: PropsCardItems;
    setCartItems: Dispatch<SetStateAction<PropsCardItems>>;
    addToCart: (itemId: string) => void;
    removeFromCart: (itemId: string) => void;
};

const DEFAULT_VALUE: PropsStoreContext = {
    food_list: [],
    setCartItems: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
};

export const StoreContext = createContext<PropsStoreContext>(DEFAULT_VALUE);

const StoreContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [cartItems, setCartItems] = useState<PropsCardItems>(() => ({}));

    const addToCart = (itemId: string): void => {
        if (cartItems) {
            if (!cartItems[itemId]) {
                setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
            } else {
                setCartItems((prev) => ({
                    ...prev,
                    [itemId]: prev[itemId] + 1,
                }));
            }
        }
    };

    const removeFromCart = (itemId: string): void => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
