type SidebarOptionProps = {
    icon: string,
    alt: string,
    text: string
}

const SidebarOptions = ({icon, alt, text}: SidebarOptionProps) => {
    return (
        <div className='flex item-center gap-3 border border-slate-400 border-r-0 py-2 px-2 rounded-l cursor-pointer'>
            <img src={icon} alt={alt} />
            <p className="hidden md:block">{text}</p>
        </div>
    );
};

export default SidebarOptions;
