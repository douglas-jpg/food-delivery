import { FoodItem } from '../types/items';
import { createContext } from 'react';
import { food_list } from '../assets/assets';

type PropsStoreContext = {
    food_list: FoodItem[]
}

const DEFAULT_VALUE: PropsStoreContext = {
    food_list: []
}

export const StoreContext = createContext<PropsStoreContext>(DEFAULT_VALUE);

const StoreContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const contextValue = {
        food_list,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;