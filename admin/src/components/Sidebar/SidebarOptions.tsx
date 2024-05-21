import { NavLink } from 'react-router-dom';

type SidebarOptionProps = {
    icon: string;
    alt: string;
    text: string;
    link: string;
    activeLink: string;
    setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

const SidebarOptions = ({
    icon,
    alt,
    text,
    link,
    activeLink,
    setActiveLink,
}: SidebarOptionProps) => {
    const handleClick = () => {
        setActiveLink(link);
    };

    return (
        <NavLink
            to={link}
            className={`flex items-center gap-3 border border-slate-400 border-r-0 py-2 px-2 rounded-l cursor-pointer ${
                activeLink === link ? 'bg-orange-500 text-white' : ''
            }`}
            onClick={handleClick}
        >
            <img src={icon} alt={alt} />
            <p className='hidden md:block'>{text}</p>
        </NavLink>
    );
};

export default SidebarOptions;
