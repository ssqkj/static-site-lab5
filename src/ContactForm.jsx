import React, { useState, useEffect } from 'react';

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Встановлюємо таймер на 60 секунд (60000 мс)
        // Для тестування можна змінити на 3000 мс
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);

        // Очищення таймера, якщо компонент буде розмонтовано
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null; // Умовний рендеринг: якщо false, нічого не показуємо

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                    &times;
                </button>
                <h2>Зворотний зв'язок</h2>
                <form action="https://formspree.io/f/xbdpdlro" method="POST">
                    <div className="form-group">
                        <label>Ім'я:</label>
                        <input type="text" name="name" required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label>Номер телефону:</label>
                        <input type="tel" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label>Ваше повідомлення:</label>
                        <textarea name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Відправити</button>
                </form>
            </div>
        </div>
    );
}