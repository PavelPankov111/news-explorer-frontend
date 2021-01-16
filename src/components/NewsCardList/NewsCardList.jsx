import React from 'react'
import './NewsCardList.css'
import NewsCard from '../NewsCard/NewsCard'

function NewsCardList() {
    return (
        <section className="newsCardList">
            <h2 className="newsCardList__title">Результаты поиска</h2>
            <div className="newsCardList__items">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        <button className="newsCardList__button">
            Показать еще
        </button>
        </section>
    )
}

export default NewsCardList;