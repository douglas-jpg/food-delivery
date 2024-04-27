import { useState } from 'react';

const Nav = () => {
    const [menu, setMenu] = useState<string>('inicio');

    return (
        <nav>
            <ul className='flex gap-5 text-slate-500 text-lg cursor-pointer'>
                <li
                    onClick={() => setMenu('inicio')}
                    className={
                        menu === 'inicio' ? 'border-b-2 border-slate-500' : ''
                    }
                >
                    inicio
                </li>
                <li
                    onClick={() => setMenu('menu')}
                    className={
                        menu === 'menu' ? 'border-b-2 border-slate-500' : ''
                    }
                >
                    menu
                </li>
                <li
                    onClick={() => setMenu('app-mobile')}
                    className={
                        menu === 'app-mobile'
                            ? 'border-b-2 border-slate-500'
                            : ''
                    }
                >
                    app-mobile
                </li>
                <li
                    onClick={() => setMenu('contacte-nos')}
                    className={
                        menu === 'contacte-nos'
                            ? 'border-b-2 border-slate-500'
                            : ''
                    }
                >
                    contacte-nos
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
