import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie-consent';

function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) {
            // 稍微延遲顯示，讓頁面先完成初次渲染
            const timer = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(STORAGE_KEY, 'accepted');
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem(STORAGE_KEY, 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className="cookie-banner"
            role="dialog"
            aria-modal="false"
            aria-label="Cookie 同意通知"
        >
            <div className="cookie-banner__inner">
                <div className="cookie-banner__content">
                    <span className="cookie-banner__icon" aria-hidden="true">🍪</span>
                    <p className="cookie-banner__text">
                        我們使用 Cookie 提升您的瀏覽體驗，並分析網站流量。繼續使用本網站即表示您同意我們的{' '}
                        <a href="#" className="cookie-banner__link" onClick={(e) => e.preventDefault()}>
                            Cookie 政策
                        </a>
                        。
                    </p>
                </div>
                <div className="cookie-banner__actions">
                    <button className="btn btn--outline btn--sm cookie-banner__decline" onClick={handleDecline}>
                        拒絕
                    </button>
                    <button className="btn btn--primary btn--sm cookie-banner__accept" onClick={handleAccept}>
                        接受所有 Cookie
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
