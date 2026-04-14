import React, { useState, useEffect } from 'react';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    // ВАЖЛИВО: Замініть 1 на ваш номер варіанту
    const variantNumber = 1;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${2}/comments`)
            .then((response) => response.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Помилка завантаження відгуків:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Завантаження коментарів...</p>;
    }

    return (
        <div className="reviews-section">
            <h2>Коментарі роботодавців</h2>
            <div className="comments-container">
                {reviews.map((review) => (
                    <div key={review.id} className="comment-card">
                        <p><strong>Ім'я:</strong> {review.name}</p>
                        <p><strong>Email:</strong> {review.email}</p>
                        <p><em>{review.body}</em></p>
                    </div>
                ))}
            </div>
        </div>
    );
}