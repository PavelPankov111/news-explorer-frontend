import React from 'react'
import './NewsCard.css'

function NewsCard() {
    const [isHover, setIsHover] = React.useState(false)
    const [isHoverBtn, setIsHoverBtn] = React.useState(false)

    function handleIsHover(){
        setIsHover(true)
        setIsHoverBtn(true)
    }

    function handleIsHoverClose(){
        setIsHover(false)
        setIsHoverBtn(false)
    }
    
    return(
        <div className="newsCard">
            <div className="newsCard__image">
                <div onPointerLeave={handleIsHoverClose} onPointerMove={handleIsHover} className="newsCard__button">
                    <div className={isHoverBtn ? `newsCard__button-img newsCard__button-img_hover` : `newsCard__button-img`}/>
                </div>
                <div className={isHover ? `newsCard__button-hover newsCard__hover_active` : `newsCard__button-hover`}>Войдите, чтобы сохранять статьи</div>
            </div>
            <div className="newsCard__content">
                <h4 className="newsCard__content-date">2 августа, 2019</h4>
                <h2 className="newsCard__content-title">Национальное достояние – парки</h2>
                <p className="newsCard__content-description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе</p>
                <p className="newsCard__content__author">Лента.ру</p>
            </div>
        </div>
    )
}

export default NewsCard;