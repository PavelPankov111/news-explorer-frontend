import React from 'react'
import './Main.css'
import SearchForm from '../SearchForm/SearchForm'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function Main(props) {
    const arrKeywords = props.sawedNews.map(card => card = card.keyword);
    const keywords = [...new Set(arrKeywords)];
    const [numberSawedNews, setNumberSawedNews] = React.useState(0)

    const sawedArticlesNumber = () => {
        if (numberSawedNews >= 5 || numberSawedNews === 0) {
            return 'сохраненных статей';
          } else if (numberSawedNews > 1 && numberSawedNews < 5) {
            return 'сохраненные статьи';
          } else if (numberSawedNews === 1) {
            return 'сохраненная статья';
          }
    }

    const sawedArticleText = () => {
        if (keywords.length === 1) {
            return 'По ключевому слову';
        }
        if (keywords.length > 1) {
            return 'По ключевым словам';
        }
    }

    function stringArr(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    const oneKeyword = stringArr(keywords[0])
    const twoKeyword = stringArr(keywords[1])
    const keyNumber = keywords.length - 2
    const keyDescription = () => {
        if (keyNumber === 1) {
            return '-у другому'
        }
        if (keyNumber > 1) {
            return '-м другим'
        }
        if (keyNumber > 4) {
            return '-ю другим'
        }
    }

    React.useEffect(() => {
        console.log(props.numberSawedNews)
        setNumberSawedNews(props.numberSawedNews)
    }, [props.loggedIn, props.numberSawedNews])

    return <Switch>
        <Route path="/" exact>
            <main className="main">
                <div className="main__page">
                    <h2 className="main__title">Что творится в мире?</h2>
                    <p className="main__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                    <SearchForm inputSearchForm={props.inputSearchForm} />
                    <span className={props.errorInputSearch ? `input__error input__error_hidden` : `input__error`}>Вы не можете искать пустоту</span>
                </div>
            </main>
        </Route>
        <ProtectedRoute path="/sawed-news" loggedIn={props.loggedIn}>
            <main className="main__sawed-news">
                <div className="main__page-sawed-news">
                    <h3 className="main__sawed-news-subtitle">Сохранённые статьи</h3>
                    <h2 className="main__title-sawed-news">{`${props.userName}, у вас ${numberSawedNews} ${sawedArticlesNumber()}`}</h2>
                    <div className={numberSawedNews > 0 ? `main__sawed-news-box main__sawed-news-box_visible` : `main__sawed-news-box`}>
                        <p className="main__description-sawed-news">{sawedArticleText()}</p>
                        <p className="main__found-article">{keywords.length > 1 ? `${oneKeyword}, ${twoKeyword}` : `${oneKeyword}`}<p className="main__and">{keywords.length > 2 ? 'и' : ''}</p>{keywords.length > 2 ? `${keyNumber}${keyDescription()}` : ''}</p>
                    </div>
                </div>
            </main>
        </ProtectedRoute>
    </Switch>
}

export default Main;