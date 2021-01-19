import React from 'react'
import './Main.css'
import SearchForm from '../SearchForm/SearchForm'
import { Route, Switch } from 'react-router-dom'

function Main(props) {
    return <Switch>
        <Route path="/" exact>
            <main className="main">
                <div className="main__page">
                    <h2 className="main__title">Что творится в мире?</h2>
                    <p className="main__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                    <SearchForm />
                </div>
            </main>
        </Route>
        <Route path="/sawed-news">
            <main className="main__sawed-news">
                <div className="main__page-sawed-news">
                    <h3 className="main__sawed-news-subtitle">Сохранённые статьи</h3>
                    <h2 className="main__title-sawed-news">{`${props.userName}, у вас ${props.numberSawedNews} сохранённых статей`}</h2>
                    <div className="main__sawed-news-box">
                        <p className="main__description-sawed-news">{`По ключевым словам:`}</p>
                        <p className="main__found-article">Природа, тайга <p className="main__and">и</p> 2-м другим</p>
                    </div>
                </div>
            </main>
        </Route>
    </Switch>
}

export default Main;