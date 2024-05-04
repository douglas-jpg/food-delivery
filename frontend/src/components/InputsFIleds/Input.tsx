import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = ({ label, ...inputProps }: InputProps) => {
    return (
        <div className='flex flex-col w-full '>
            <label htmlFor={inputProps.id}>{label ? label : ''}</label>
            <input
                {...inputProps}
                className='p-2 border-2 mt-1 rounded-md outline-none focus:border-orange-600'
            />
        </div>
    );
};

export default Input;
