import React from 'react'
import './NewsCardList.css'
import NewsCard from '../NewsCard/NewsCard'

function NewsCardList(props) {
    return (
        <section className={props.isLoadind ? `newsCardList newsCardList_disable` : `newsCardList`}>
            <h2 className="newsCardList__title">Результаты поиска</h2>
            <div className="newsCardList__items">
                <NewsCard isLoggedIn={false}/>
                <NewsCard isLoggedIn={false}/>
                <NewsCard isLoggedIn={false}/>
            </div>
        <button className="newsCardList__button">
            Показать еще
        </button>
        </section>
    )
}

export default NewsCardList;