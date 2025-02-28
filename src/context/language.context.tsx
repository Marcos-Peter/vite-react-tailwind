import React, { createContext, ReactNode, useContext, useState } from 'react';

type languagesTypes = 'en-US' | 'pt-BR';

interface LanguageContextProps {
    language: languagesTypes;
    setLanguage: (lang: languagesTypes) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
    language: 'en-US',
    setLanguage: () => {},
});

export const useLanguage = () => {
    return useContext(LanguageContext);
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<languagesTypes>('en-US');

    const value: LanguageContextProps = {
        language,
        setLanguage,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
