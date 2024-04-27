import { assets } from '../../assets/assets';
import Nav from './Nav';

const Navbar = () => {
    return (
        <div className='flex justify-between py-5 items-center'>
            <img src={assets.logo} alt='logo do site' className='' />
            <Nav />
            <div className='flex items-center gap-10 cursor-pointer'>
                <img src={assets.search_icon} alt='' />
                <div className='relative'>
                    <img src={assets.basket_icon} alt='' />
                    <span className='absolute top-0 right-0 -mt-2 -mr-2 inline-block h-3 w-3 bg-red-500 rounded-full'></span>
                </div>
                <button className='bg-transparent text-slate-700 border border-orange-600 py-2 px-7 rounded-full hover:bg-orange-50 transition duration-300 ease-in-out'>
                    Entrar
                </button>
            </div>
        </div>
    );
};

export default Navbar;
