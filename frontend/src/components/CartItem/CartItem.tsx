import { CartItems, FoodItem } from '../../types/items';

type PropsCartItem = {
    item: FoodItem;
    cartItems: CartItems;
    remove: (itemId: string) => void;
};

const CartItem = ({ item, cartItems, remove }: PropsCartItem) => {
    return (
        <div>
            <div className='grid grid-cols-7 items-center text-slate-950 text-sm md:text-[1vw] my-2'>
                <img
                    src={item.image}
                    alt='imagem do produto'
                    className='col-span-1 w-12'
                />
                <p className='md:col-span-2 col-span-1'>{item.name}</p>
                <p className='col-span-1'>{item.price} R$</p>
                <p className='col-span-1'>{cartItems[item._id]}</p>
                <p className='col-span-1'>{item.price * cartItems[item._id]}  R$</p>
                <p onClick={() => remove(item._id)} className='w-1/5 cursor-pointer'>X</p>
            </div>
            <hr className='h-px bg-slate-600'/>
        </div>
    );
};

export default CartItem;
