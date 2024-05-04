const Cupom = () => {
    return (
        <div>
            <p className='text-slate-700'>
                Se você tiver um código promocional, insira-o aqui.
            </p>
            <div className='flex items-center justify-start rounded-md mt-2'>
                <input
                    type='text'
                    placeholder='Codigo promocional'
                    className='p-2 rounded-l-md border outline-none focus:border-black'
                />
                <button className='bg-black text-white rounded-r-md py-2 px-4 border-2 border-black'>
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default Cupom;
