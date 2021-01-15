import React from 'react'
import './PopupWithForm.css'
import closeBtn from '../../images/close.svg'

function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''} `}>
            <form /*onSubmit={props.onSubmit}*/ method="get" action="#" className={`popup${props.namePopup}__form`} noValidate>
                <button type="reset" className="popup__close-btn" /*onClick={props.close}*/ >
                    <img className="popup__close-img" src={closeBtn} alt="кнопка закрытия" />
                </button>
                <div className={`popup${props.namePopup}__content`}>
                    <h3 className={`popup${props.namePopup}__title`}>{props.title}</h3>
                    {props.children}
                    { props.showBtn === true ? <button type="submit" className={`popup${props.namePopup}__button popup${props.namePopup}__button-disable`}>
                        {props.titleButton}
                    </button> : '' }
                    <div className={`popup${props.namePopup}__author`}>
                        {props.showOr === true ? <p className={`popup${props.namePopup}__or`}>Или <a className={`popup${props.namePopup}__route`} href="*">{props.nameRoute}</a> </p> : <a className={`popup${props.namePopup}__route`} href="*">{props.nameRoute}</a>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PopupWithForm;