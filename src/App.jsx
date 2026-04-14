import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Reviews from './Reviews';
import ContactForm from './ContactForm';
import './App.css';

export default function App() {
    const [theme, setTheme] = useState('light');

    // Автоматичне встановлення теми при завантаженні
    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 7 && currentHour < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []); // Порожній масив означає виконання лише при монтуванні

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`app-container ${theme}`}>
            <header>
                <button onClick={toggleTheme} className="theme-toggle-btn">
                    Змінити тему (Поточна: {theme === 'light' ? 'Денна' : 'Нічна'})
                </button>
            </header>

            <main>
                <h1>Проєкт React</h1>
                <Reviews />
            </main>

            <ContactForm />
            <Footer />
        </div>
    );
}
