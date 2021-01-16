import React from 'react'
import './PopupWithForm.css'
import closeBtn from '../../images/close.svg'

function PopupWithForm(props) {
    const pupupRef = React.useRef(null)

    function handleOverlayClose(evt) {
        if (pupupRef.current && !pupupRef.current.contains(evt.target)) {
            props.close();
        }
    }

    React.useEffect(() => {
        function handleCloseEsc(event) {
            if (event.key === "Escape") {
                props.close()
            }
        }

        document.addEventListener('keyup', handleCloseEsc)
    })

    return (
        <div onClick={handleOverlayClose} className={`popup ${props.isOpen ? 'popup_opened' : ''} `}>
            <form ref={pupupRef} /*onSubmit={props.onSubmit}*/ method="get" action="#" className={`popup${props.namePopup}__form`} noValidate>
                <button type="reset" className="popup__close-btn" onClick={props.close} >
                    <img className="popup__close-img" src={closeBtn} alt="кнопка закрытия" />
                </button>
                <div className={`popup${props.namePopup}__content`}>
                    <h3 className={`popup${props.namePopup}__title`}>{props.title}</h3>
                    {props.children}
                    {props.showBtn === true ? <button type="submit" className={`popup${props.namePopup}__button popup${props.namePopup}__button-disable`}>
                        {props.titleButton}
                    </button> : ''}
                    <div className={`popup${props.namePopup}__author`}>
                        {props.showOr === true ? <p className={`popup${props.namePopup}__or`}>Или<a onClick={props.onClickRoute} className={`popup${props.namePopup}__route`}>{props.nameRoute}</a></p> : <p onClick={props.routeClick} className={`popup${props.namePopup}__route`} href="*">{props.nameRoute}</p>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PopupWithForm;