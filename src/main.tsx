import { LanguageProvider } from '@context/language.context.tsx';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </React.StrictMode>,
);
