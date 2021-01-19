import React from 'react'
import Navigation from '../Navigation/Navigation'
import './SavedNewsHeader.css'

function SavedNewsHeader(props) {
    return (
        <header className="header__sawed-news">
            <h1 className="header__title-sawed-news">NewsExplorer</h1>
            <Navigation handleClick={props.onClick} loggedIn={props.loggedInHeader} userName={props.userNameHeader} />
        </header>
    )
}

export default SavedNewsHeader;