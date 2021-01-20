import React from 'react'
import Navigation from '../Navigation/Navigation'
import './SavedNewsHeader.css'
import { Route, Switch, Link } from 'react-router-dom'
import iconc from '../../images/logout.svg'

function SavedNewsHeader(props) {
    const [isClicked, setIsClicked] = React.useState(false)

    function handleClick() {
        if (isClicked === true) {
            setIsClicked(false)
        } else {
            setIsClicked(true)
        }
    }
    return <Switch>
        <Route path="*" exact>
        <header className="header header__sawed-news">
            <h1 className={isClicked ? `header__title header__title-sawed-news header__title_white` : `header__title-sawed-news`}>NewsExplorer</h1>
            <Navigation click={props.onClickOut} handleClick={props.onClick} loggedIn={props.loggedInHeader} userName={props.userNameHeader} />
            <div onClick={handleClick} className={isClicked ? `header__mobile header__mobile_white header__mobile_active header__mobile_white_active` : `header__mobile header__mobile_white`}>
                    <div className={isClicked ? `header__mobile-popup header__mobile-popup_active` : `header__mobile-popup`}> 
                     <div className={isClicked ? `header__mobile-container header__mobile-container_active` : `header__mobile-container`}></div>
                        <div className={isClicked ? `header__mobile-box header__mobile-box_active` : `header__mobile-box`}>
                            <div className="header__mobile-content">
                                <Link className="header__mobile-main-page" to="/">Главная</Link>
                                {props.loggedInHeader ?
                                    <Link className="header__mobile-sawed-news" to="/sawed-news">Сохраненные статьи</Link>
                                    : ''}
                                {props.loggedInHeader ?
                                    <Link to="/" onClick={props.onClickOut} className="navigation__sawed-box-light navigation__sawed-box">
                                        <p className="navigation__sawed-exit navigation__sawed-exit_light">{props.userNameHeader}</p>
                                        <img className="navigation__sawed-image" src={iconc} alt="кнопка выхода" />
                                    </Link>
                                    :
                                    <p onClick={props.onClick} className="navigation__auth">Авторизоваться</p>
                                }
                            </div>
                        </div>
                    </div>

                </div>
        </header>
        </Route>
    </Switch>
}

export default SavedNewsHeader;