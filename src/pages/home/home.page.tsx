import React from 'react';

import { Footer } from '@components/ui/footer.component';
import { useLanguage } from '@context/language.context';
import { HomeHeader } from '@pages/home/header.component';
import { strings } from '@pages/home/strings';

const Home: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6'>
            <HomeHeader />
            <main className='flex-1 flex flex-col items-center justify-center text-center text-gray-900'>
                <h2 className='text-4xl font-bold mb-4 text-gray-400'>{strings[language].h1}</h2>
                <p className='text-lg text-gray-400 mb-6'>{strings[language].description}</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
