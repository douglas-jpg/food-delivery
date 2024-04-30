import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [menu, setMenu] = useState<string>('inicio');

    return (
        <nav>
            <ul className='hidden gap-3 text-base md:flex md:gap-5 xl:text-xl text-slate-500 cursor-pointer'>
                <Link
                    to={'/'}
                    onClick={() => setMenu('inicio')}
                    className={
                        menu === 'inicio' ? 'border-b-2 border-slate-500' : ''
                    }
                >
                    inicio
                </Link>
                <a
                    href='#explore-menu'
                    onClick={() => setMenu('menu')}
                    className={
                        menu === 'menu' ? 'border-b-2 border-slate-500' : ''
                    }
                >
                    menu
                </a>
                <a
                    href='#app-download'
                    onClick={() => setMenu('app-mobile')}
                    className={
                        menu === 'app-mobile'
                            ? 'border-b-2 border-slate-500'
                            : ''
                    }
                >
                    app-mobile
                </a>
                <a
                    href='#footer'
                    onClick={() => setMenu('contacte-nos')}
                    className={
                        menu === 'contacte-nos'
                            ? 'border-b-2 border-slate-500'
                            : ''
                    }
                >
                    contacte-nos
                </a>
            </ul>
        </nav>
    );
};

export default Nav;
