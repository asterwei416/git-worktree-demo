import { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';

function FAQItem({ item, isOpen, onToggle }) {
    return (
        <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
            <button
                className="faq__question"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
            >
                <span>{item.question}</span>
                <span className="faq__icon" aria-hidden="true">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </span>
            </button>
            <div
                id={`faq-answer-${item.id}`}
                className="faq__answer"
                role="region"
                aria-hidden={!isOpen}
            >
                <p className="faq__answer-text">{item.answer}</p>
            </div>
        </div>
    );
}

function FAQ() {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="faq section" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">常見問題</span>
                    <h2 className="section-header__title" id="faq-title">
                        您可能想知道的事
                    </h2>
                    <p className="section-header__desc">
                        找不到答案？隨時透過下方聯絡表單與我們聯繫。
                    </p>
                </div>

                <div className="faq__list" role="list">
                    {FAQ_ITEMS.map((item) => (
                        <FAQItem
                            key={item.id}
                            item={item}
                            isOpen={openId === item.id}
                            onToggle={() => handleToggle(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
