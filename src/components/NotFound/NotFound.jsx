import React from 'react'
import './NotFound.css'
import img from '../../images/not-found_v1.svg'

function NotFound(props) {
    return(
        <div className={props.isVisible ? `notFound` : `notFound notFound__disable`}>
            <img className="notFound__image" src={img} alt="ничего не найдено"/>
            <h2 className="notFound__title">{props.noSawedCards ? `У вас пока нет сохраненых статей` : `Ничего не найдено`}</h2>
            <p className="notFound__description">{props.noSawedCards ? `` : `К сожалению по вашему запросу ничего не найдено.`} </p>
        </div>
    )
}

export default NotFound;