import React from 'react'
import './NewsCard.css'
import { Route, Switch } from 'react-router-dom'
import MainApi from '../../utils/MainApi'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function NewsCard(props) {
    const [isHover, setIsHover] = React.useState(false)
    const [isHoverBtn, setIsHoverBtn] = React.useState(false)
    const [isClickBtn, setIsClickBtn] = React.useState(false)
    const mainApi = new MainApi()


    function handleIsHover() {
        setIsHover(true)
        setIsHoverBtn(true)
    }

    function handleIsHoverClose() {
        setIsHover(false)
        setIsHoverBtn(false)
    }

    function clickBtn() {
        if (isClickBtn) {
            setIsClickBtn(false)
            props.removeCard(props.article, props.sawedArticle)
            props.update()
        } else {
            setIsClickBtn(true)
            mainApi.addingCard(props.keyword, props.title, props.description, props.source, props.urlCard, props.imageCard, props.date)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            props.update()
        }
    }

    function getDate(value) {
        const now = new Date(value);
        const month = [
            "января",
            "февраля",
            "марта",
            "апреля",
            "мая",
            "июнья",
            "июля",
            "августа",
            "сентября",
            "октября",
            "ноября",
            "декабря",
        ];

        const correctDate = `${now.getDate()} ${month[now.getMonth()]}, ${now.getFullYear()}`;
        return correctDate;
    }

    function deleteSawedCard(){
        props.removeCard(props.article, props.sawedArticle)
    }

    React.useEffect(() => {
        if(props.sawedNews){
            const wasSawedArticle = props.sawedNews.find((c) => c.title === props.title)
            wasSawedArticle ? setIsClickBtn(true) : setIsClickBtn(false)
        }
    }, [props.sawedNews])

    return <Switch>
        <Route path="*" exact>
            <div className="newsCard">
                <Route path="/" exact>
                    {props.isLoggedIn === true ?
                        <button onClick={clickBtn} onPointerLeave={handleIsHoverClose} onPointerMove={handleIsHover} className="newsCard__button">
                            {isClickBtn ? <button className='newsCard__button-img newsCard__button-img_click' /> : <button className={isHoverBtn ? `newsCard__button-img newsCard__button-img_hover` : `newsCard__button-img`} />}
                        </button>
                        :
                        <button onPointerLeave={handleIsHoverClose} onPointerMove={handleIsHover} className="newsCard__button">
                            <div className={isHoverBtn ? `newsCard__button-img newsCard__button-img_hover` : `newsCard__button-img`} />
                            <div className={isHover ? `newsCard__button-hover newsCard__hover_active` : `newsCard__button-hover`}>Войдите, чтобы сохранять статьи</div>
                        </button>
                    }
                </Route>
                <ProtectedRoute loggedIn={props.isLoggedIn} path="/sawed-news">
                    <div className="newsCard__sawed-news-subtitle">{props.keyword}</div>
                    <button onClick={deleteSawedCard} onPointerLeave={handleIsHoverClose} onPointerMove={handleIsHover} className="newsCard__button">
                        <div className={isHoverBtn ? `newsCard__button-img-sawed-news newsCard__button-img newsCard__button-img_hover newsCard__button-img_hover-sawed-news` : `newsCard__button-img-sawed-news newsCard__button-img`} />
                        <div className={isHover ? `newsCard__button-hover-sawed-news newsCard__button-hover newsCard__hover_active` : `newsCard__button-hover-sawed-news newsCard__button-hover`}>Убрать из сохранённых</div>
                    </button>
                </ProtectedRoute>
                <a className="newsCard__link" href={props.urlCard} target="_blank" rel="noreferrer">
                    <div className="newsCard__image">
                        <img className="newsCard__img" src={props.imageCard} alt="фотография не загрузилась :(" />
                    </div>
                    <div className="newsCard__content">
                        <h4 className="newsCard__content-date">{getDate(props.date)}</h4>
                        <h2 className="newsCard__content-title">{props.title}</h2>
                        <p className="newsCard__content-description">{props.description}</p>
                        <p className="newsCard__content__author">{props.source}</p>
                    </div>
                </a>
            </div>
        </Route>
    </Switch>
}

export default NewsCard;