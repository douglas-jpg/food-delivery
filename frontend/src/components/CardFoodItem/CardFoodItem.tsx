import { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { FaPlus, FaMinus } from 'react-icons/fa6';

type PropsCardFoodItem = {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
};

const CardFoodItem = ({
    id,
    name,
    price,
    description,
    image,
}: PropsCardFoodItem) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='w-full m-auto border rounded-t-md shadow-md animate-fadeIn'>
            <figure>
                <div className='relative select-none'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full rounded-t-md'
                    />
                    {cartItems && !cartItems[id] ? (
                        <FaPlus
                            onClick={() => addToCart(id)}
                            className='w-8 h-8 p-2 absolute bottom-4 right-4 cursor-pointer rounded-full bg-white text-slate-700'
                        />
                    ) : (
                        <div className='absolute bottom-4 right-4 flex items-center gap-2 p-1 rounded-full bg-white'>
                            <FaMinus
                                onClick={() => removeFromCart(id)}
                                className='rounded-full p-2 w-8 h-8 bg-red-200 text-red-500 cursor-pointer'
                            />
                            <p className='select-none'>
                                {cartItems && cartItems[id]}
                            </p>
                            <FaPlus
                                onClick={() => addToCart(id)}
                                className='rounded-full p-2 w-8 h-8 bg-green-200 text-green-500 cursor-pointer'
                            />
                        </div>
                    )}
                </div>
                <figcaption className='p-5'>
                    <p className='text-lg font-medium '>{name}</p>
                    <img src={assets.rating_starts} className='w-[70px] mb-2' />
                    <p className='text-slate-700 text-sm'>{description}</p>
                    <p className='text-orange-600 font-medium my-2'>${price}</p>
                </figcaption>
            </figure>
        </div>
    );
};

export default CardFoodItem;
