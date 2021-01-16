import React from 'react'
import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header(props) {
    return (
            <header className="header">
                <h1 className="header_title">NewsExplorer</h1>
                <Navigation handleClick={props.onClick} loggedIn={props.loggedInHeader} userName={props.userNameHeader}/>
            </header>
    )
}

export default Header;