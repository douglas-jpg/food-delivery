import { assets } from '../../assets/assets';
import { BiSolidBasket } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import Nav from './Nav';

const Navbar = () => {
    return (
        <div id='navbar' className='flex justify-between py-5 items-center'>
            <img
                src={assets.logo}
                alt='logo do site'
                className='w-24 md:w-auto'
            />
            <Nav />
            <div className='gap-5 lg:gap-10 flex items-center cursor-pointer'>
                <CiSearch className='w-6 h-6 md:w-7 md:h-7 text-slate-700' />
                <div className='relative'>
                    <BiSolidBasket className='w-6 h-6 md:w-7 md:h-7 text-slate-700' />
                    <span className='absolute top-0 right-0 -mt-1 -mr-1 inline-block h-2 w-2 bg-red-500 rounded-full'></span>
                </div>
                <button className='py-1 px-4 lg:py-2 lg:px-7 text-sm md:text-base bg-transparent text-slate-700 border border-orange-600 rounded-full hover:bg-orange-50 transition duration-300 ease-in-out'>
                    Entrar
                </button>
            </div>
        </div>
    );
};

export default Navbar;
