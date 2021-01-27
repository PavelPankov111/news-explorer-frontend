import React from 'react'
import './NewsCardList.css'
import NewsCard from '../NewsCard/NewsCard'

function NewsCardList(props) {
    const { isLoadind, cards } = props
    const [articles, setArticles] = React.useState(cards)
    const [showBtn, setShowBtn] = React.useState(false)

    React.useEffect(() => {
        setArticles(cards.slice(0, 3))
        if (cards.length > 3) {
            setShowBtn(true)
        } else{
            setShowBtn(false)
        }
    }, [cards])

    function handleClick() {
        setArticles(cards.slice(0, articles.length + 3))
    }

    return (
        <section className={isLoadind ? `newsCardList newsCardList_disable` : `newsCardList`}>
            <h2 className="newsCardList__title">Результаты поиска</h2>
            <div className="newsCardList__items">
                {articles.map((whatever, key) =>  <NewsCard key={key} article={whatever} sawedNews={props.sawedNews} update={props.update} removeCard={props.removeCard} urlCard={whatever.url} source={whatever.source.name} description={whatever.description} title={whatever.title} date={whatever.publishedAt} keyword={props.keyword} imageCard={whatever.urlToImage} isLoggedIn={props.isLoggedIn} />)}
            </div>
            <button onClick={handleClick} className={showBtn ? `newsCardList__button newsCardList__button_visible` : `newsCardList__button`}>
                Показать еще
        </button>
        </section>
    )
}

export default NewsCardList;