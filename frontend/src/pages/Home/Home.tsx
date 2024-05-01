import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Header from '../../components/Header/Header';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';

const Home = () => {
    const [category, setCategory] = useState<string>('All');

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload />
            <BackToTopButton />
        </div>
    );
};

export default Home;
