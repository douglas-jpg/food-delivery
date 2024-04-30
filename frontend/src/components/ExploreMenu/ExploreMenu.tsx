import { Dispatch } from 'react';
import { menu_list } from '../../assets/assets';
import Item from './Item';

type PropsExploreMenu = {
    category: string;
    setCategory: Dispatch<string>;
};

const ExploreMenu = ({ category, setCategory }: PropsExploreMenu) => {
    return (
        <div id='explore-menu' className='flex flex-col gap-5'>
            <h1 className='text-slate-700 text-2xl font-semibold'>
                Explore nosso menu
            </h1>
            <p className='max-w-full md:max-w-[50%] text-slate-700'>
                Escolha entre um menu diversificado com uma deliciosa variedade
                de pratos. nossa missão é satisfazer seus desejos e elevar sua
                experiência gastronômica, uma refeição deliciosa de cada vez
            </p>
            <div className='flex justify-between items-center gap-7 text-center my-5 overflow-x-scroll'>
                {menu_list.map((item, index) => {
                    return (
                        <Item
                            key={index}
                            item={item}
                            category={category}
                            setCategory={setCategory}
                        />
                    );
                })}
            </div>
            <hr className='my-2 h-1 bg-slate-300' />
        </div>
    );
};

export default ExploreMenu;
