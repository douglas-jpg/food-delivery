import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <footer className='flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-24 text-zinc-200 bg-zinc-900'>
            <div className='w-full grid grid-cols-4 gap-20'>
                <div className='col-span-2 flex flex-col items-start gap-5'>
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
                        <img
                            src={assets.facebook_icon}
                            alt='Icone facebool'
                            className='w-10 cursor-pointer'
                        />
                        <img
                            src={assets.twitter_icon}
                            alt='Icone twitter'
                            className='w-10 cursor-pointer'
                        />
                        <img
                            src={assets.linkedin_icon}
                            alt='Icone linkedin'
                            className='w-10 cursor-pointer'
                        />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-5 '>
                    <h2 className='text-white text-xl font-bold'>EMPRESA</h2>
                    <ul className='flex flex-col gap-2'>
                        <li>Inicio</li>
                        <li>Sobre nos</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start gap-5'>
                    <h2 className='text-white text-xl font-bold'>
                        ENTRAR EM CONTATO
                    </h2>
                    <ul className='flex flex-col gap-2'>
                        <li>+00 0 0000-0000</li>
                        <li>contato@email.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full h-[2px] my-5 bg-zinc-400 border-none'/>
            <p>Copyright 2024 © Rango.com - Todos os direitos resevados.</p>
        </footer>
    );
};

export default Footer;
