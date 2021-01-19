import React from 'react'
import './NewsCard.css'
import { Route, Switch } from 'react-router-dom'

function NewsCard(props) {
    const [isHover, setIsHover] = React.useState(false)
    const [isHoverBtn, setIsHoverBtn] = React.useState(false)
    const [isClickBtn, setIsClickBtn] = React.useState(false)

    function handleIsHover() {
        setIsHover(true)
        setIsHoverBtn(true)
    }

    function handleIsHoverClose() {
        setIsHover(false)
        setIsHoverBtn(false)
    }

    function clickBtn() {
        setIsClickBtn(true)
    }

    return <Switch>
        <Route path="*" exact>
            <div className="newsCard">
                <div className="newsCard__image">
                    <Route path="/" exact>
                        {props.isLoggedIn === true ?
                            <div onClick={clickBtn} onPointerLeave={handleIsHoverClose} onPointerMove={handleIsHover} className="newsCard__button">
                                {isClickBtn ? <button className='newsCard__button-img newsCard__button-img_click' /> : <button className={isHoverBtn ? `newsCard__button-img newsCard__button-img_hover` : `newsCard__button-img`} />}
                            </div>
                            :
                            <div onPointerLeave={handleIsHoverClose} onPointerMove={handleIsHover} className="newsCard__button">
                                <div className={isHoverBtn ? `newsCard__button-img newsCard__button-img_hover` : `newsCard__button-img`} />
                                <div className={isHover ? `newsCard__button-hover newsCard__hover_active` : `newsCard__button-hover`}>Войдите, чтобы сохранять статьи</div>
                            </div>
                        }
                    </Route>
                    <Route path="/sawed-news">
                        <div className="newsCard__sawed-news-subtitle">Фотография111111111111</div>
                        <div onPointerLeave={handleIsHoverClose} onPointerMove={handleIsHover} className="newsCard__button">
                            <div className={isHoverBtn ? `newsCard__button-img-sawed-news newsCard__button-img newsCard__button-img_hover newsCard__button-img_hover-sawed-news` : `newsCard__button-img-sawed-news newsCard__button-img`} />
                            <div className={isHover ? `newsCard__button-hover-sawed-news newsCard__button-hover newsCard__hover_active` : `newsCard__button-hover-sawed-news newsCard__button-hover`}>Убрать из сохранённых</div>
                        </div>
                    </Route>
                </div>
                <div className="newsCard__content">
                    <h4 className="newsCard__content-date">2 августа, 2019</h4>
                    <h2 className="newsCard__content-title">Национальное достояние – парки</h2>
                    <p className="newsCard__content-description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе</p>
                    <p className="newsCard__content__author">Лента.ру</p>
                </div>
            </div>
        </Route>
    </Switch>
}

export default NewsCard;