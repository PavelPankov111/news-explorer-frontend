import React from 'react'
import Main from '../Main/Main'
import './App.css'
import About from '../About/About'
import Footer from '../Footer/Footer'
import '../../fonts/roboto/roboto.css'
import '../../fonts/roboto-slab/robotoslab.css'
import '../../fonts/source_sans_pro/source_sans_pro.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import NewsCardList from '../NewsCardList/NewsCardList'
import Preloader from '../Preloader/Preloader'
import NotFound from '../NotFound/NotFound'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import SavedNews from '../SavedNews/SavedNews'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import NewsApi from '../../utils/NewsApi'
import MainApi from '../../utils/MainApi'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App() {
    const mainApi = new MainApi()
    const [isLoggedInHeader, setIsLoggedInHeader] = React.useState(false)
    const [renderPage, setRenderPage] = React.useState(false)
    const [sawedCards, setSawedCards] = React.useState([])
    const [numberSawedNews, setNumberSawedNews] = React.useState(0)

    React.useEffect(() => {
        if (localStorage.getItem('jwt')) {
            getSawedCards()
            setNumberSawedNews(sawedCards.length)
            setIsLoggedInHeader(true)
            setRenderPage(true)

            mainApi.tokenCheck(localStorage.getItem('jwt'))
                .then((res) => {
                    setCurrentUser({
                        name: res.name,
                        email: res.email,
                        id: res._id
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            setIsLoggedInHeader(false)
            setRenderPage(true)
        }
    }, [renderPage, isLoggedInHeader, sawedCards])

    const regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/

    // Register validation
    const [isLenghtRegisterEmailError, setIsLenghtRegisterEmailError] = React.useState(false)
    const [isLenghtRegisterPasswordError, setIsLenghtRegisterPasswordError] = React.useState(false)
    const [isLenghtRegisterNameError, setIsLenghtRegisterNameError] = React.useState(false)
    const [isButtonRegisterDisable, setIsButtonRegisterDisable] = React.useState(true)

    const [errorRegisterEmail, setErrorRegisterEmail] = React.useState(false)
    const [formRegisterValues, setFormRegisterValues] = React.useState({
        emailRegister: '',
        passwordRegister: '',
        nameRegister: ''
    })

    const handleInputRegisterChange = React.useCallback((e) => {
        const { name, value } = e.target;
        setFormRegisterValues(prevState => ({ ...prevState, [name]: value }))
        setIsConflict(false)
    }, [setFormRegisterValues])

    React.useEffect(function () {
        const isEmaiRegisterlFiled = formRegisterValues.emailRegister.length > 4
        const isPasswordRegisterFiled = formRegisterValues.passwordRegister.length > 7
        const isNameRegisterFiled = formRegisterValues.nameRegister.length > 1
        const isEmailRegisterTypeEmail = regExpEmail.test(formRegisterValues.emailRegister)

        if (isEmailRegisterTypeEmail) {
            setErrorRegisterEmail(false)
        } else {
            setErrorRegisterEmail(true)
        }

        if (isEmaiRegisterlFiled) {
            setIsLenghtRegisterEmailError(false)
        } else {
            setIsLenghtRegisterEmailError(true)
        }

        if (isPasswordRegisterFiled) {
            setIsLenghtRegisterPasswordError(false)
        } else {
            setIsLenghtRegisterPasswordError(true)
        }

        if (isNameRegisterFiled) {
            setIsLenghtRegisterNameError(false)
        } else {
            setIsLenghtRegisterNameError(true)
        }

        if (errorRegisterEmail === false && isLenghtRegisterPasswordError === false && isLenghtRegisterNameError === false) {
            setIsButtonRegisterDisable(false)
        } else {
            setIsButtonRegisterDisable(true)
        }

        if (formRegisterValues.emailRegister.length === 0) {
            setIsButtonRegisterDisable(true)
            setErrorRegisterEmail(false)
        }

        if (formRegisterValues.passwordRegister.length === 0) {
            setIsButtonRegisterDisable(true)
            setIsLenghtRegisterPasswordError(false)
        }

        if (formRegisterValues.nameRegister.length === 0) {
            setIsButtonRegisterDisable(true)
            setIsLenghtRegisterNameError(false)
        }

    }, [formRegisterValues, regExpEmail, errorRegisterEmail, isLenghtRegisterPasswordError, isLenghtRegisterNameError])

    // Auth validation
    const [errorAuthEmail, setErrorAuthEmail] = React.useState(false)
    const [isButtonDisable, setIsButtonDisable] = React.useState(true)
    const [errorPassword, setErrorPassword] = React.useState(false)
    const [isLenghtEmailError, setIsLenghtEmailError] = React.useState(false)
    const [isLenghtPasswordError, setIsLenghtPasswordError] = React.useState(false)
    const [formValues, setFormValues] = React.useState({
        email: '',
        password: '',
    })

    const handleInputChange = React.useCallback((event) => {
        const { name, value } = event.target;
        setFormValues(prevState => ({ ...prevState, [name]: value }))
        setIsSigninErr(false)
    }, [setFormValues])

    React.useEffect(function validationInputs() {
        const isEmailTypeEmail = regExpEmail.test(formValues.email)
        const isEmailFiled = formValues.email.length > 4
        const isPasswordFiled = formValues.password.length > 7

        if (isEmailTypeEmail) {
            setErrorAuthEmail(false)
        } else {
            setErrorAuthEmail(true)
        }

        if (isEmailFiled) {
            setIsLenghtEmailError(false)
        } else {
            setIsLenghtEmailError(true)
        }

        if (isPasswordFiled) {
            setErrorPassword(false)
            setErrorPassword(false)
        } else {
            setIsLenghtPasswordError(true)
            setErrorPassword(true)
        }

        if (errorAuthEmail === false && errorPassword === false) {
            setIsButtonDisable(false)
        } else {
            setIsButtonDisable(true)
        }

        if (formValues.password.length === 0) {
            setIsButtonDisable(true)
            setErrorPassword(false)
        }

        if (formValues.email.length === 0) {
            setErrorAuthEmail(false)
            setIsButtonDisable(true)
        }

    }, [formValues, errorAuthEmail, errorPassword, regExpEmail])

    function clearInputs() {
        setFormValues({
            email: '',
            password: ''
        });
        setFormRegisterValues({
            emailRegister: '',
            passwordRegister: '',
            nameRegister: ''
        })
    }

    const { email, password } = formValues
    const { emailRegister, passwordRegister, nameRegister } = formRegisterValues

    const burger = document.querySelector('.header__mobile')
    const [authPopupState, setAuthPopupState] = React.useState(false)
    const [registerPopupState, setregisterPopupState] = React.useState(false)
    const [successfulPopupState, setSuccessfulPopupState] = React.useState(false)
    const [isClicked, setIsClicked] = React.useState(false)
    const [currentUser, setCurrentUser] = React.useState({
        name: 'Имя',
        email: '',
        id: ''
    });

    function handleAuthPopupOpen() {
        setAuthPopupState(true)
        setErrorAuthEmail(false)
        setErrorPassword(false)
        setIsButtonDisable(true)
    }

    function handleClose() {
        setAuthPopupState(false)
        setregisterPopupState(false)
        setSuccessfulPopupState(false)
        clearInputs()
    }

    function handleRegisterPopupOpen() {
        setAuthPopupState(false)
        setregisterPopupState(true)
    }

    function handleRegisterRote() {
        setregisterPopupState(false)
        setAuthPopupState(true)
    }

    function handleSuccessfulPopupState() {
        setSuccessfulPopupState(false)
        setAuthPopupState(true)
    }

    function handleOut() {
        setIsLoggedInHeader(false)
        setCurrentUser({
            name: 'Имя',
            email: '',
            password: ''
        })
        localStorage.clear()
    }

    React.useEffect(() => {
        if (authPopupState || registerPopupState || successfulPopupState) {
            if (burger !== null) {
                burger.classList.add('header__mobile-popup_hidden')
            }
        } else {
            if (burger !== null) {
                burger.classList.remove('header__mobile-popup_hidden')
            }
        }
    })

    function handleClick() {
        if (isClicked === true) {
            setIsClicked(false)
        } else {
            setIsClicked(true)
        }
    }

    const [stateNewsCardList, setStateNewsCardList] = React.useState(true)
    const [statePreloader, setStatePreloader] = React.useState(false)
    const [stateNotFound, setStateNotFound] = React.useState(false)
    const [cards, setCards] = React.useState([])
    const [keyword, setKeyword] = React.useState('')
    const [errorInputSearch, setErrorInputSearch] = React.useState(true)

    function submitSearchForm(value) {
        if (value !== '') {
            setErrorInputSearch(true)
            const news = new NewsApi()
            setStatePreloader(true)
            setStateNotFound(false)
            setStateNewsCardList(true)
            news.request(value)
                .then((cards) => {
                    setKeyword(value)
                    setCards(cards.articles)
                    setStateNewsCardList(false)
                    if (cards.articles.length === 0) {
                        setStateNotFound(true)
                        setStateNewsCardList(true)
                    }
                })
                .catch((err) => {
                    console.log(err)
                    setStateNotFound(true)
                })
                .finally(() => {
                    setStatePreloader(false)
                })
        } else {
            setErrorInputSearch(false)
        }
    }

    const [isConflict, setIsConflict] = React.useState(false)
    const [isSigninErr, setIsSigninErr] = React.useState(false)

    function register(e) {
        e.preventDefault()
        mainApi.signup(nameRegister, emailRegister, passwordRegister)
            .then(() => {
                handleClose()
                setSuccessfulPopupState(true)
                localStorage.setItem('name', nameRegister)
            })
            .catch((err) => {
                const errStr = String(err)
                if (errStr === 'Conflict') {
                    setIsConflict(true)
                }
            })
    }

    function signin(e) {
        e.preventDefault()
        mainApi.signin(email, password)
            .then((token) => {
                if (token.token) {
                    handleClose()
                    localStorage.setItem('jwt', token.token)
                    setCurrentUser({
                        name: localStorage.getItem('name'),
                        email: email,
                        password: password
                    })
                    setIsLoggedInHeader(true)
                } else {
                    setIsSigninErr(true)
                }
            })
            .catch((err) => {
                console.log(err)
                setIsSigninErr(true)
            })
    }

    function getSawedCards() {
        mainApi.getCards()
            .then((cards) => {
                setSawedCards(cards)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function deleteArticle(id) {
        mainApi.deleteCard(id)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleRemoveCard(card, myCard) {
        getSawedCards()

        const mySavedArticle = sawedCards.find((c) => {
            if (myCard) {
                return c.title === myCard.title && c.text === myCard.text;
            }

            if (card) {
                return c.title === card.title && c.text === card.description;
            }
        });

        if (mySavedArticle) {
            deleteArticle(mySavedArticle._id)
        }
    }

    React.useEffect(() => {
        getSawedCards()
    }, [isLoggedInHeader])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            {renderPage ?
                <section className="page">
                    <Switch>
                        <ProtectedRoute path="/sawed-news" loggedIn={isLoggedInHeader}>
                            <SavedNewsHeader onClickOut={handleOut} onClick={handleAuthPopupOpen} loggedInHeader={isLoggedInHeader} userNameHeader={currentUser.name} />
                            <Main sawedNews={sawedCards} loggedIn={isLoggedInHeader} inputSearchForm={submitSearchForm} userName={currentUser.name} numberSawedNews={numberSawedNews} />
                            {sawedCards.length === 0 ?
                                <NotFound noSawedCards={true} isVisible={true} />
                                :
                                <SavedNews removeCard={handleRemoveCard} keyword={keyword} cards={sawedCards} isLoggedIn={isLoggedInHeader} />
                            }
                        </ProtectedRoute>
                        <Route path="/" exact>
                            <Header handleClick={handleClick} isClicked={isClicked} onClickOut={handleOut} onClick={handleAuthPopupOpen} loggedInHeader={isLoggedInHeader} userNameHeader={currentUser.name} />
                            <Main sawedNews={sawedCards} errorInputSearch={errorInputSearch} loggedIn={isLoggedInHeader} inputSearchForm={submitSearchForm} userName={currentUser.name} numberSawedNews={numberSawedNews} />
                            <NewsCardList sawedNews={sawedCards} update={getSawedCards} removeCard={handleRemoveCard} keyword={keyword} cards={cards} isLoggedIn={isLoggedInHeader} isLoadind={stateNewsCardList} />
                        </Route>
                    </Switch>
                    <Preloader isVisible={statePreloader} textLoading="Идет поиск новостей.." />
                    <NotFound noSawedCards={false} isVisible={stateNotFound} />
                    <About />
                    <PopupWithForm onSubmit={signin} isButtonDisable={isButtonDisable} onClickRoute={handleRegisterPopupOpen} close={handleClose} showBtn={true} showOr={true} isOpen={authPopupState} namePopup="-auth" title="Вход" titleButton="Войти" nameRoute="Зарегестрироваться">
                        <div className="popup-auth__box">
                            <span className="popup-auth__email-name">Email</span>
                            <input autoComplete="true" name="email" value={email} onChange={handleInputChange} placeholder="Введите почту" className="popup__input popup-auth__email" type="email" required minLength="5" maxLength="60" />
                            <span className={errorAuthEmail ? `popup-auth__email-error popup-auth__email-error_visible` : `popup-auth__email-error`}>{isLenghtEmailError ? 'Минимальное количество символов - 5' : 'Неправильный формат email'}</span>
                            <span className="popup-auth__password-name">Пароль</span>
                            <input autoComplete="true" name="password" value={password} onChange={handleInputChange} className="popup__input popup-auth__password" placeholder="Введите пароль" type="password" required minLength="8" maxLength="60" />
                            <span className={errorPassword ? `popup-auth__password-error popup-auth__password-error_visible` : `popup-auth__password-error`}>{isLenghtPasswordError ? 'Минимальное количество символов - 8' : 'Неправильный пароль'}</span>
                        </div>
                        <span className={isSigninErr ? `popup-register__сonflict-error popup-register__сonflict-error_visible` : `popup-register__сonflict-error`}>Неправильный email или пароль</span>
                    </PopupWithForm>
                    <PopupWithForm onSubmit={register} isButtonDisable={isButtonRegisterDisable} onClickRoute={handleRegisterRote} close={handleClose} showBtn={true} showOr={true} isOpen={registerPopupState} namePopup="-register" title="Регистрация" titleButton="Зарегестрироваться" nameRoute="Войти">
                        <div className="popup-register__box">
                            <span className="popup-register__email-name">Email</span>
                            <input autoComplete="true" name="emailRegister" value={emailRegister} onChange={handleInputRegisterChange} placeholder="Введите почту" className="popup__input popup-register__email" type="email" required minLength="5" maxLength="60" />
                            <span className={errorRegisterEmail ? `popup-register__email-error popup-register__email-error_visible` : `popup-register__email-error`}>{isLenghtRegisterEmailError ? `Минимальное количество символов - 5` : 'Неправильный формат email'} </span>
                            <span className="popup-register__password-name">Пароль</span>
                            <input value={passwordRegister} name="passwordRegister" onChange={handleInputRegisterChange} className="popup__input popup-register__password" placeholder="Введите пароль" type="password" required minLength="8" maxLength="60" />
                            <span className={isLenghtRegisterPasswordError ? `popup-register__password-error popup-register__password-error_visible` : 'popup-register__password-error'}>Минимальное количество символов - 8</span>
                            <span className="popup-register__name-name">Имя</span>
                            <input value={nameRegister} name="nameRegister" onChange={handleInputRegisterChange} className="popup__input popup-register__name" placeholder="Введите своё имя" type="text" minLength="2" maxLength="40" required />
                            <span className={isLenghtRegisterNameError ? `popup-register__name-error popup-register__name-error_visible` : 'popup-register__name-error'}>Минимальное количество символов - 2</span>
                        </div>
                        <span className={isConflict ? `popup-register__submit-error popup-register__submit-error_visible` : `popup-register__submit-error`}>Такой пользователь уже есть</span>
                    </PopupWithForm>
                    <PopupWithForm close={handleClose} routeClick={handleSuccessfulPopupState} showBtn={false} showOr={false} isOpen={successfulPopupState} namePopup="-successful" title="Пользователь успешно зарегистрирован!" nameRoute="Войти" />
                    <Footer />
                </section>
                : ''}
        </CurrentUserContext.Provider>
    )
}

export default App;