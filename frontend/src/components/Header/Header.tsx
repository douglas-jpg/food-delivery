const Header = () => {
    return (
        <header className="h-[33vw] lg:h-[34vw] my-5 mx-auto bg-[url('../../../public/header_img.png')] bg-cover relative">
            <div className="absolute flex flex-col items-start gap-[1.5vw] md:max-w-[55%] lg:max-w-[50%] bottom-[10%] left-[2vw] sm:left-[6vw] text-white">
                <h2 className="text-[25px] md:text-[3vw] lg:text-[4vw] font-semibold">Encomende aqui a sua comida preferida</h2>
                <p className="text-[0.65rem] lg:text-sm hidden md:block">
                    Escolha entre um menu diversificado com uma deliciosa
                    variedade de pratos elaborados com os melhores ingredientes
                    e conhecimentos culinários. Nossa missão é satisfazer seus
                    desejos e elevar sua experiência gastronômica, uma refeição
                    deliciosa de cada vez.
                </p>
                <button className="text-[0.55rem] py-[0.65vw] px-[2vw] md:text-sm lg:py-[0.95vw] lg:px-[2.2vw] lg:text-lg font-semibold text-slate-700 bg-white rounded-full">Visualisar menu</button>
            </div>
        </header>
    );
};

export default Header;
