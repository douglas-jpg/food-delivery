import { useState } from 'react';
import { assets } from '../../assets/assets';

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
    const [itemCount, setItemCount] = useState<number>(0);

    return (
        <div className='w-full m-auto border rounded-t-md shadow-md '>
            <figure>
                <div className='relative'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full rounded-t-md'
                    />
                    {!itemCount ? (
                        <img
                        className='w-8 absolute bottom-4 right-4 cursor-pointer rounded-full'
                            src={assets.add_icon_white}
                            alt='Add icon'
                            onClick={() => setItemCount((prev) => ++prev)}
                        />
                    ) : (
                        <div className='absolute bottom-4 right-4 flex items-center gap-2 p-1 rounded-full bg-white'>
                            <img
                            className='w-8'
                                onClick={() => setItemCount((prev) => --prev)}
                                src={assets.remove_icon_red}
                                alt='remove icon'
                            />
                            <p>{itemCount}</p>
                            <img
                            className='w-8'
                                onClick={() => setItemCount((prev) => ++prev)}
                                src={assets.add_icon_green}
                                alt=''
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