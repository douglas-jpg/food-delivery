import { Dispatch } from 'react';
import { MenuItem } from '../../assets/assets';

type PropsItem = {
    item: MenuItem;
    category: string;
    setCategory: Dispatch<string>;
};

const Item = ({ item, category, setCategory }: PropsItem) => {
    return (
        <div
            onClick={() =>
                setCategory(
                    item.menu_name === category ? 'All' : item.menu_name
                )
            }
            className='cursor-pointer'
        >
            <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`w-[7.5vw] min-w-20 rounded-full transition transform duration-300 ${
                    category === item.menu_name
                        ? 'border-4 border-orange-600 p-1'
                        : ''
                }`}
            />
            <p className='mt-2 text-slate-700 sm:text-[16px] md:text-[1.4vw]'>
                {item.menu_name}
            </p>
        </div>
    );
};

export default Item;
