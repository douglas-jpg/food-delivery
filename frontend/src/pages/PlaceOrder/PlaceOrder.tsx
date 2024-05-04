import CartCheckout from '../../components/CartCheckout/CartCheckout';
import Input from '../../components/InputsFIleds/Input';

const PlaceOrder = () => {
    return (
        <form className='flex items-start justify-between gap-12 mt-16'>
            <div className=' w-full'>
                <p className='text-2xl font-semibold mb-4'>
                    Informações de entrega
                </p>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <Input type='text' placeholder='Primeiro Nome' />
                        <Input type='text' placeholder='Sobrenome' />
                    </div>
                    <Input type='email' placeholder='Endereço de Email' />
                    <Input type='text' placeholder='Rua' />
                    <div className='flex gap-2'>
                        <Input type='text' placeholder='Cidade' />
                        <Input type='text' placeholder='Estado' />
                    </div>
                    <div className='flex gap-2'>
                        <Input type='text' placeholder='CEP' />
                        <Input type='text' placeholder='País' />
                    </div>
                    <Input type='tel' placeholder='Telefone' />
                </div>
            </div>
            <div className=' w-full'>
                <CartCheckout
                    buttonText='Prossiga para o pagamento'
                    navigateTo=''
                />
            </div>
        </form>
    );
};

export default PlaceOrder;
