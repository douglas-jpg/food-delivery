import { createContext, useState } from 'react';
import { CartItems, FoodItem, PropsStoreContext } from '../types/items';
import { food_list } from '../assets/assets';

const DEFAULT_VALUE: PropsStoreContext = {
    food_list: [],
    setCartItems: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    getTotalCartAmount: () => 0,
};

export const StoreContext = createContext<PropsStoreContext>(DEFAULT_VALUE);

const StoreContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [cartItems, setCartItems] = useState<CartItems>(() => ({}));

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

    const getTotalCartAmount = (): number => {
        let totalAmount: number = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo: FoodItem | undefined = food_list.find(
                    (product) => product._id === item
                );
                if (itemInfo) {
                    totalAmount += itemInfo?.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
