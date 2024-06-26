import { assets } from '../../assets/assets';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            id='footer'
            className='flex flex-col items-center gap-5 py-5 px-[8vw] pt-10 lg:pt-20 mt-24 text-zinc-200 bg-zinc-900'
        >
            <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-7 lg:gap-20'>
                <div className='col-span-2 flex flex-col items-start gap-3 lg:gap-5'>
                    <img src={assets.logo} alt='Logo rango' />
                    <p>
                        Lorem Ipsum é um texto simplesmente fictício da
                        indústria de impressão e composição tipográfica. Lorem
                        Ipsum tem sido o texto fictício padrão da indústria
                        desde 1500, quando um impressor desconhecido pegou uma
                        galeria de tipos e a embaralhou para fazer um livro de
                        espécimes de tipos.
                    </p>
                    <div className=' flex gap-4'>
                        <div className='w-10 cursor-pointer h-10 border rounded-full p-2 hover:text-zinc-900 hover:bg-white transition'>
                            <FaFacebookF className='flex items-center justify-center w-full h-full' />
                        </div>
                        <div className='w-10 cursor-pointer h-10 border rounded-full p-2 hover:text-zinc-900 hover:bg-white transition'>
                            <FaTwitter className='flex items-center justify-center w-full h-full' />
                        </div>

                        <div className='w-10 cursor-pointer h-10 border rounded-full p-2 hover:text-zinc-900 hover:bg-white transition'>
                            <FaLinkedinIn className='flex items-center justify-center w-full h-full' />
                        </div>
                    </div>
                </div>
                <div className='col-span-3 md:col-span-1 flex flex-col items-start gap-3 lg:gap-5 '>
                    <h2 className='text-white text-xl font-bold'>EMPRESA</h2>
                    <ul className='flex flex-col gap-0 lg:gap-2'>
                        <li>Inicio</li>
                        <li>Sobre nos</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='col-span-2 md:col-span-1 flex flex-col items-start gap-3 lg:gap-5'>
                    <h2 className='text-white text-xl font-bold'>
                        ENTRAR EM CONTATO
                    </h2>
                    <ul className='flex flex-col gap-0 lg:gap-2'>
                        <li>+00 0 0000-0000</li>
                        <li>contato@email.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full h-[2px] my-5 bg-zinc-400 border-none' />
            <p>Copyright 2024 © Rango.com - Todos os direitos resevados.</p>
        </footer>
    );
};

export default Footer;
