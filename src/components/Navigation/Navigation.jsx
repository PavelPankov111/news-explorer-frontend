import React from 'react'
import './Navigation.css'
import { Link, Route, Switch } from 'react-router-dom'
import image from '../../images/logout.svg'

function Navigation(props) {
    return <Switch>
        <Route path="/" exact>
            {props.loggedIn ?
                <div className="navigation__descriptions-sawed-news">
                    <Link to="/" className="navigation__main-page">Главная</Link>
                    <Link to="/sawed-news" onClick={props.redirectSawedNews} className="navigation__sawed-news">Сохранённые статьи</Link>
                    <div className="navigation__sawed-box">
                        <p className="navigation__sawed-exit">{props.userName}</p>
                        <img className="navigation__sawed-image" src={image} alt="кнопка выхода" />
                    </div>
                </div>
                :
                <div className="navigation__descriptions">
                    <Link to="/" className="navigation__main-page">Главная</Link>
                    <p onClick={props.handleClick} className="navigation__auth">Авторизоваться</p>
                </div>
            }</Route>
        <Route path="/sawed-news">
            <div className="navigation__descriptions-sawed-news">
                <Link to="/" className="navigation__main-page_active">Главная</Link>
                <Link to="/sawed-news" onClick={props.redirectSawedNews} className="navigation__sawed-news_active">Сохранённые статьи</Link>
                <div className="navigation__sawed-box">
                    <p className="navigation__sawed-exit">{props.userName}</p>
                    <img className="navigation__sawed-image" src={image} alt="кнопка выхода" />
                </div>
            </div>
        </Route>
    </Switch>
}

export default Navigation;