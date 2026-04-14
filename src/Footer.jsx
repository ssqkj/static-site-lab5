import React, { useState, useEffect } from 'react';

export default function Footer() {
    const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

    useEffect(() => {
        const browserInfo = navigator.userAgent;
        const platformInfo = navigator.platform || "Невідома платформа";

        // Зберігаємо в localStorage
        localStorage.setItem('user_browser', browserInfo);
        localStorage.setItem('user_os', platformInfo);

        // Оновлюємо стан для відображення
        setSysInfo({
            os: localStorage.getItem('user_os'),
            browser: localStorage.getItem('user_browser')
        });
    }, []);

    return (
        <footer>
            <h3>Інформація про систему</h3>
            <p><strong>ОС/Платформа:</strong> {sysInfo.os}</p>
            <p><strong>Браузер:</strong> {sysInfo.browser}</p>
        </footer>
    );
}