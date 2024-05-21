import { assets } from '../../assets/assets';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-2 px-[4%]'>
            <img src={assets.logo} alt='Logo do site rango'/>
            <img
                src={assets.profile_image}
                alt='icone de item de perfil do administrador'
                className='w-10'
            />
        </div>
    );
};

export default Navbar;
