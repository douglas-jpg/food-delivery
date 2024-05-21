import { assets } from '../../assets/assets';
import SidebarOptions from './SidebarOptions';

const SideBar = () => {
    return (
        <div
            className='w-[18%] h-screen border border-t-0 border-slate-300'
            style={{ fontSize: 'max(1vw, 10px)' }}>
            <div className='flex flex-col gap-5 pt-12 pl-[20%]'>
                <SidebarOptions
                    icon={assets.add_icon}
                    alt='Icone de adicioanr item'
                    text='Adicionar item'
                />
                <SidebarOptions
                    icon={assets.order_icon}
                    alt='Icone de listar pedidos'
                    text='Listar item'
                />
                <SidebarOptions
                    icon={assets.order_icon}
                    alt='Icone de visualisar todos os pedidos'
                    text='Pedidos'
                />
            </div>
        </div>
    );
};

export default SideBar;
