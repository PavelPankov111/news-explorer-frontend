import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">© Pankov Pavel</h3>
            <div className="footer__box">
                <div className="footer__links">
                    <a className="footer__route" href="/">Главная</a>
                    <a className="footer__link" href="https://praktikum.yandex.ru/profile/web/">Яндекс.Практикум</a>
                </div>
                <div className="footer__pages">
                    <a className="footer__git" href="https://github.com/PavelPankov111" />
                    <a className="footer__fb" href="https://www.facebook.com/pavel.pankov.5203/" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;