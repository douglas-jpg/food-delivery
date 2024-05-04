import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import CartItem from '../../components/CartItem/CartItem';
import CartCheckout from '../../components/CartCheckout/CartCheckout';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
        useContext(StoreContext);
    return (
        <div className='mt-24'>
            <div>
                <div className='grid grid-cols-7 items-center text-slate-500 text-sm md:text-[1vw]'>
                    <p className='col-span-1'>Itens</p>
                    <p className='md:col-span-2 col-span-1'>Nome</p>
                    <p className='col-span-1'>Preço</p>
                    <p className='col-span-1'>Quantidade</p>
                    <p className='col-span-1'>Total</p>
                    <p className='w-1/5'>Remover</p>
                </div>
                <br />
                <hr className='bg-slate-500 h-[2px]' />
                {food_list.map((item, index) => {
                    if (cartItems && cartItems[item._id] > 0) {
                        return (
                            <CartItem
                                key={index}
                                item={item}
                                remove={removeFromCart}
                                cartItems={cartItems}
                            />
                        );
                    }
                })}
            </div>
            <CartCheckout
                subtotal={getTotalCartAmount()}
                desconto={2}
                total={getTotalCartAmount() + 2}
            />
        </div>
    );
};

export default Cart;
