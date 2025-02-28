import React from 'react';

import { strings } from '@pages/home/strings';
import { BR, US } from 'country-flag-icons/react/1x1';

import { useLanguage } from '@context/language.context';

export const HomeHeader: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = () => {
        setLanguage(language === 'en-US' ? 'pt-BR' : 'en-US');
    };

    return (
        <header className='fixed flex top-0 w-full bg-gray-200 dark:bg-gray-700 bg-opacity-80 shadow-md py-4 min-h-10'>
            <div className='absolute right-4 w-fit h-8 flex cursor-pointer rounded-full bg-blue-950' onClick={handleLanguageChange}>
                <US
                    hidden={language !== 'pt-BR'}
                    className={` rounded-full max-h-full p-1 top-0 transition-all duration-500 ease-in-out `}
                />
                <BR
                    hidden={language !== 'en-US'}
                    className={` rounded-full max-h-full p-1 top-0 transition-all duration-500 ease-in-out `}
                />
            </div>
            <div className='mx-auto flex px-4 text-center'>
                <h1 className='text-2xl font-bold text-blue-400 dark:text-blue-200'>{strings[language].title}</h1>
            </div>
        </header>
    );
};
