import React from 'react'
import './Main.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'

function Main(props) {
    return(
        <main className="main">
            <Header onClick={props.handleClick} loggedInHeader={props.loggedIn} userNameHeader={props.userName}/>
            <div className="main__page">
                <h2 className="main__title">Что творится в мире?</h2>
                <p className="main__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <SearchForm />
            </div>
        </main>
    )
}

export default Main;