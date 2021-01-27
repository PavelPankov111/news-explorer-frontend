import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import '../NewsCardList/NewsCardList.css'

function SavedNews(props) {
    const { cards } = props

    return (
        <section className={props.isLoadind ? `newsCardList newsCardList_disable` : `newsCardList`}>
            <div className="newsCardList__items">
                {cards.map((whatever, key) => <NewsCard keyword={whatever.keyword} key={key} removeCard={props.removeCard} sawedArticle={whatever} urlCard={whatever.link} source={whatever.source} description={whatever.text} title={whatever.title} date={whatever.date} author={whatever.author} imageCard={whatever.image} isLoggedIn={props.isLoggedIn} />)}
            </div>
        </section>
    )
}

export default SavedNews;