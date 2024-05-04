import { useNavigate } from 'react-router-dom';
import Cupom from './Cupom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { PropsStoreContext } from '../../types/items';

type PropsCartCheckout = {
    buttonText: string;
    navigateTo: string;
    cupom?: boolean;
};

const CartCheckout = ({ buttonText, cupom, navigateTo }: PropsCartCheckout) => {
    const { getTotalCartAmount } = useContext<PropsStoreContext>(StoreContext);

    const navigate = useNavigate();

    return (
        <div className='flex flex-col-reverse md:flex-row justify-between gap-4 md:gap-[6vw] xl:gap[12vw]'>
            <div className='flex-1 flex flex-col gap-4 mt-6 md:mt-0'>
                <h2 className='text-xl font-semibold'>Total:</h2>
                <div className='flex flex-col gap-2 font-semibold text-slate-600'>
                    <div className='flex justify-between'>
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()} R$</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <p>Taxa de Entrega</p>
                        <p>{getTotalCartAmount() === 0 ? 0 : 2} R$</p>
                    </div>
                    <hr />
                    <div className='flex justify-between text-black'>
                        <p>Total</p>
                        <p>
                            {getTotalCartAmount() === 0
                                ? 0
                                : getTotalCartAmount() + 2}{' '}
                            R$
                        </p>
                    </div>
                </div>
                <button
                    type='submit'
                    onClick={() => navigate(navigateTo)}
                    className='uppercase text-white py-2 rounded max-w-xs bg-orange-500 hover:bg-orange-600'
                >
                    {buttonText}
                </button>
            </div>
            {cupom && <Cupom />}
        </div>
    );
};

export default CartCheckout;
