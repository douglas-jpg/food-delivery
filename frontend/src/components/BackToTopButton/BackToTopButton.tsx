import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const BackToTopButton = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            onClick={scrollTop}
            className={`fixed bottom-4 right-4 z-50 bg-orange-50 text-orange-700 border shadow-lg text-3xl rounded-full w-14 h-14 cursor-pointer ${
                !backToTop ? 'hidden' : ''
            }`}
        >
            <FaArrowUp className='flex justify-center items-center w-full h-full p-3' />
        </div>
    );
};

export default BackToTopButton;
// !backToTop ? 'hidden' : ''
