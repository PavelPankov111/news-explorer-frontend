import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import '../NewsCardList/NewsCardList.css'

function SavedNews(props) {
    return (
        <section className={props.isLoadind ? `newsCardList newsCardList_disable` : `newsCardList`}>
            <div className="newsCardList__items">
                <NewsCard isLoggedIn={false} />
                <NewsCard isLoggedIn={false} />
                <NewsCard isLoggedIn={false} />
                <NewsCard isLoggedIn={false} />
                <NewsCard isLoggedIn={false} />
            </div>
        </section>
    )
}

export default SavedNews;