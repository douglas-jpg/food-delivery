import Cupom from './Cupom';

type PropsCartCheckout = {
    subtotal: number;
    desconto: number;
    total: number;
};

const CartCheckout = ({ subtotal, desconto, total }: PropsCartCheckout) => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between gap-4 md:gap-[6vw] xl:gap[12vw] mt-20'>
            <div className='flex-1 flex flex-col gap-4 mt-6 md:mt-0'>
                <h2 className='text-xl font-semibold'>Total:</h2>
                <div className='flex flex-col gap-2 font-semibold text-slate-600'>
                    <div className='flex justify-between'>
                        <p>Subtotal</p>
                        <p>{subtotal} R$</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <p>Desconto do Delivery</p>
                        <p>{desconto} R$</p>
                    </div>
                    <hr />
                    <div className='flex justify-between text-black'>
                        <p>Total</p>
                        <p>{total} R$</p>
                    </div>
                </div>
                <button className='uppercase text-white py-2 rounded w-52 bg-orange-500 hover:bg-orange-600'>
                    fazer o check-out
                </button>
            </div>
            <Cupom />
        </div>
    );
};

export default CartCheckout;
