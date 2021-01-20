import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import '../NewsCardList/NewsCardList.css'

function SavedNews(props) {
    return (
        <section className={props.isLoadind ? `newsCardList newsCardList_disable` : `newsCardList`}>
            <div className="newsCardList__items">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </section>
    )
}

export default SavedNews;