import { assets } from '../../assets/assets';
import Nav from './Nav';

const Navbar = () => {
    // sm: 640 md: 768 lg: 1024 xl: 1280 2xl: 1538
    return (
        <div className='flex justify-between py-5 items-center'>
            <img src={assets.logo} alt='logo do site' className='w-24 md:w-auto' />
            <Nav />
            <div className='gap-5 lg:gap-10 flex items-center cursor-pointer'>
                <img src={assets.search_icon} alt='search icon'  className='w-5 md:w-6 lg:w-auto'/>
                <div className='relative'>
                    <img src={assets.basket_icon} alt='basket icon'  className='w-5 md:w-6 lg:w-auto'/>
                    <span className='absolute top-0 right-0 -mt-2 -mr-2 inline-block h-3 w-3 bg-red-500 rounded-full'></span>
                </div>
                <button className='py-1 px-4 lg:py-2 lg:px-7 text-sm md:text-base bg-transparent text-slate-700 border border-orange-600 rounded-full hover:bg-orange-50 transition duration-300 ease-in-out'>
                    Entrar
                </button>
            </div>
        </div>
    );
};

export default Navbar;
