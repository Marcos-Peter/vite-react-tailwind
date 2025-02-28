import React from 'react';

import { Tooltip } from '@components/ui/tooltip.component';
import { useLanguage } from '@context/language.context';
import { strings } from '@pages/home/strings';

export const Footer: React.FC = () => {
    const { language } = useLanguage();

    return (
        <footer className='w-full py-6 text-center text-gray-500 text-sm'>
            <Tooltip content={strings[language].footer.tooltip} position='upCenter'>
                <div className='max-w-fit self-center'>
                    <p>
                        {strings[language].footer.text}
                        <a
                            className='text-gray-400 font-bold'
                            href={strings[language].footer.link}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {strings[language].footer.anchor}
                        </a>
                    </p>
                </div>
            </Tooltip>
        </footer>
    );
};
