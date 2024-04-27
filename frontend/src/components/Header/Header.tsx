const Header = () => {
    return (
        <header className="h-[34vw] my-5 mx-auto bg-[url('../../../public/header_img.png')] bg-cover relative">
            <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] text-white">
                <h2 className="font-semibold md:text-[4vw] sm:text-[22px]">Encomende aqui a sua comida preferida</h2>
                <p className="text-[1vw]">
                    Escolha entre um menu diversificado com uma deliciosa
                    variedade de pratos elaborados com os melhores ingredientes
                    e conhecimentos culinários. Nossa missão é satisfazer seus
                    desejos e elevar sua experiência gastronômica, uma refeição
                    deliciosa de cada vez.
                </p>
                <button className="font-semibold text-slate-700 sm:text-[13px] md:text-[1vw] py-[1vw] px-[2.3vw] bg-white rounded-full">Visualisar menu</button>
            </div>
        </header>
    );
};

export default Header;
