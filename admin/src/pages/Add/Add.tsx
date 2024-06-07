import { useState, ChangeEvent, FormEvent } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';

interface FormData {
    name: string;
    description: string;
    price: string;
    category: string;
}

const Add = () => {
    const url = 'http://localhost:4000';
    const [image, setImage] = useState<File | null>(null);
    const [data, setData] = useState<FormData>({
        name: '',
        description: '',
        price: '',
        category: 'salada',
    });

    const onChangeHandler = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const onSubmitHandle = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('category', data.category);
        if (image) {
            formData.append('image', image);
        }

        const response = axios.post(`${url}/api/food/post`, formData);
        if ((await response).status == 200) {
            setData({
                name: '',
                description: '',
                price: '',
                category: 'salada',
            });
            setImage(null);
        } else {
            console.log((await response).status);
        }
    };

    return (
        <div className='w-1/2 ml-10 mt-3 text-slate-700'>
            <form className='gap-5 flex flex-col' onSubmit={onSubmitHandle}>
                <div className='gap-2 flex flex-col'>
                    <label htmlFor='image' className='w-fit cursor-pointer'>
                        <p className='text-lg mb-2'>Upload Image</p>
                        <img
                            src={
                                image
                                    ? URL.createObjectURL(image)
                                    : assets.upload_area
                            }
                            alt='upload de imagens'
                            className='w-32 hover:shadow-md'
                        />
                    </label>
                    <input
                        onChange={onImageChange}
                        type='file'
                        id='image'
                        className='hidden'
                        accept='image/*'
                    />
                </div>
                <div className='gap-2 flex flex-col'>
                    <label htmlFor='product-name'>Nome do Produto</label>
                    <input
                        required
                        type='text'
                        id='product-name'
                        name='name'
                        placeholder='Digite Aqui'
                        onChange={onChangeHandler}
                        value={data.name}
                        className='border border-slate-700 p-1 rounded-md w-full focus:border-orange-600 focus:outline-none'
                    />
                </div>
                <div className='gap-2 flex flex-col'>
                    <label htmlFor='product-description'>
                        Descrição do Produto
                    </label>
                    <textarea
                        required
                        name='description'
                        rows={6}
                        id='product-description'
                        placeholder='Escreva o Conteúdo Aqui'
                        onChange={onChangeHandler}
                        value={data.description}
                        className='border border-slate-700 p-1 rounded-md w-full focus:border-orange-600 focus:outline-none'
                    ></textarea>
                </div>
                <div className='md:flex md:gap-7 w-fit '>
                    <div className='gap-2 flex flex-col mb-5 md:mb-0'>
                        <label htmlFor='category'>Categoria do Produto</label>
                        <select
                            required
                            name='category'
                            id='category'
                            onChange={onChangeHandler}
                            value={data.category}
                            className='border border-slate-700 p-2 rounded-md cursor-pointer focus:border-orange-700 focus:outline-none'
                        >
                            <option value='salada'>Salada</option>
                            <option value='paes'>Pães</option>
                            <option value='sobremesa'>Sobremesa</option>
                            <option value='sanduiche'>Sanduíche</option>
                            <option value='bolo'>Bolo</option>
                            <option value='vegetariano'>Vegetariano</option>
                            <option value='massa'>Massa</option>
                            <option value='macarrao'>Macarrão</option>
                        </select>
                    </div>
                    <div className='gap-2 flex flex-col'>
                        <label htmlFor='price'>Preço do Produto</label>
                        <input
                            required
                            type='number'
                            name='price'
                            id='price'
                            placeholder='R$ 20'
                            min='1'
                            onChange={onChangeHandler}
                            value={data.price}
                            className='border border-slate-700 p-2 rounded-md cursor-pointer focus:border-orange-700 focus:outline-none'
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='justify-start bg-orange-600 w-fit py-2 px-4 rounded-md text-white text-lg hover:bg-orange-700'
                >
                    Adicionar
                </button>
            </form>
        </div>
    );
};

export default Add;
