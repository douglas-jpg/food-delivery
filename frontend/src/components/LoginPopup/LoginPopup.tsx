import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import Input from './Input';

type PropsLoginPopup = {
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginPopup = ({ setShowLogin }: PropsLoginPopup) => {
    const [currState, setCurrState] = useState('Criar Conta');

    return (
        <div className='fixed grid z-50 w-full h-[100%] bg-black bg-opacity-60 animate-fadeIn'>
            <form className='place-self-center flex flex-col w-full sm:w-4/5 md:w-2/3 lg:w-2/6 py-6 px-8 gap-6 rounded-md bg-white text-slate-700'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-bold text-slate-800'>
                        {currState}
                    </h2>
                    <RxCross1
                        onClick={() => setShowLogin(false)}
                        className='w-6 h-6 cursor-pointer'
                    />
                </div>
                <div className='flex flex-col gap-4'>
                    {currState !== 'Entrar' && (
                        <Input
                            label='Digite Seu nome:'
                            type='text'
                            id='name'
                            placeholder='Seu nome'
                            required
                        />
                    )}
                    <Input
                        label='Digite seu Email:'
                        type='email'
                        id='email'
                        placeholder='SeuAquiEmail@Email.com'
                        required
                    />
                    <Input
                        label='Digite sua senha:'
                        type='password'
                        id='password'
                        placeholder='Sua senha'
                        required
                    />
                </div>
                <div className='flex items-start -mt-2'>
                    <input type='checkbox' id='condition' required />
                    <label htmlFor='condition' className='ml-2 -mt-1 text-sm'>
                        Ao continuar, estou de acordo com os termos de uso e
                        política de privacidade.
                    </label>
                </div>
                <button
                    type='submit'
                    className='p-2 bg-orange-600 text-white cursor-pointer rounded'
                >
                    {currState === 'Criar Conta' ? 'Criar Conta' : 'Entrar'}
                </button>
                <div className='flex justify-center text-center'>
                    {currState === 'Entrar' ? (
                        <p>
                            Criar uma nova conta?{' '}
                            <span
                                onClick={() => setCurrState('Criar Conta')}
                                className='cursor-pointer text-orange-600 font-semibold'
                            >
                                Cadastre aqui
                            </span>
                        </p>
                    ) : (
                        <p>
                            Já tem uma conta?{' '}
                            <span
                                onClick={() => setCurrState('Entrar')}
                                className='cursor-pointer text-orange-600 font-semibold'
                            >
                                Entar
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;
