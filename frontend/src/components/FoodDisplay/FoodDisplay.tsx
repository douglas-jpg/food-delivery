import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import CardFoodItem from '../CardFoodItem/CardFoodItem';

type PropsFoodDisplay = {
    category: string;
};

const FoodDisplay = ({ category }: PropsFoodDisplay) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='mt-7'>
            <h2 className='text-xl font-bold sm:text-6 md:text-[2vw]'>Pratos principais perto de você</h2>
            <div className='grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 gap-y-12 mt-7'>
                {food_list.map((item, index) => {
                    if(category === "All" || category === item.category){
                        return (
                            <CardFoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
