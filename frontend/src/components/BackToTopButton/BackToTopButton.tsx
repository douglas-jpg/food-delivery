import { useEffect, useState } from 'react';

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
            <a className='flex items-center justify-center'>^</a>
        </div>
    );
};

export default BackToTopButton;
// !backToTop ? 'hidden' : ''
