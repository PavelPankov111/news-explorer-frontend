import React from 'react'
import Main from '../Main/Main'
import './App.css'
import About from '../About/About'
import Footer from '../Footer/Footer'
import '../../fonts/roboto/roboto.css'
import '../../fonts/roboto-slab/robotoslab.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import NewsCardList from '../NewsCardList/NewsCardList'
import Preloader from '../Preloader/Preloader'
import NotFound from '../NotFound/NotFound'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import SavedNews from '../SavedNews/SavedNews'

function App() {
    const [authPopupState, setAuthPopupState] = React.useState(false)
    const [registerPopupState, setregisterPopupState] = React.useState(false)
    const [successfulPopupState, setSuccessfulPopupState] = React.useState(false)

    function handleAuthPopupOpen() {
        setAuthPopupState(true)
    }

    function handleClose() {
        setAuthPopupState(false)
        setregisterPopupState(false)
        setSuccessfulPopupState(false)
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

    return <Switch>
        <section className="page">
            <Route path="*" exact>
                <Route path="/sawed-news">
                    <SavedNewsHeader onClick={handleAuthPopupOpen} loggedInHeader={true} userNameHeader="Павел"/>
                    <Main userName="Павел" numberSawedNews="5" />
                    <SavedNews isLoadind={false} />
                </Route>
                <Route path="/" exact>
                    <Header onClick={handleAuthPopupOpen} loggedInHeader={true} userNameHeader="Павел"/>
                    <Main userName="Павел" numberSawedNews="5" />
                    <NewsCardList isLoadind={false} />
                </Route>
                <Preloader isVisible={false} textLoading="Идет поиск новостей.." />
                <NotFound isVisible={false} />
                <About />
                <PopupWithForm onClickRoute={handleRegisterPopupOpen} close={handleClose} showBtn={true} showOr={true} isOpen={authPopupState} namePopup="-auth" title="Вход" titleButton="Войти" nameRoute="Зарегестрироваться">
                    <div className="popup-auth__box">
                        <span className="popup-auth__email-name">Email</span>
                        <input placeholder="Введите почту" className="popup-auth__email" type="email" />
                        <span className="popup-auth__email-error">Неправильный формат email</span>
                        <span className="popup-auth__password-name">Пароль</span>
                        <input className="popup-auth__password" placeholder="Введите пароль" type="password" />
                        <span className="popup-auth__password-error">1111111</span>
                    </div>
                </PopupWithForm>
                <PopupWithForm onClickRoute={handleRegisterRote} close={handleClose} showBtn={true} showOr={true} isOpen={registerPopupState} namePopup="-register" title="Регистрация" titleButton="Зарегестрироваться" nameRoute="Войти">
                    <div className="popup-register__box">
                        <span className="popup-register__email-name">Email</span>
                        <input placeholder="Введите почту" className="popup-register__email" type="email" />
                        <span className="popup-register__email-error">Неправильный формат email</span>
                        <span className="popup-register__password-name">Пароль</span>
                        <input className="popup-register__password" placeholder="Введите пароль" type="password" />
                        <span className="popup-register__password-error">1111111</span>
                        <span className="popup-register__name-name">Имя</span>
                        <input className="popup-register__name" placeholder="Введите своё имя" type="text" minLength="2" maxLength="30" />
                        <span className="popup-register__name-error">1111111</span>
                    </div>
                </PopupWithForm>
                <PopupWithForm close={handleClose} routeClick={handleSuccessfulPopupState} showBtn={false} showOr={false} isOpen={successfulPopupState} namePopup="-successful" title="Пользователь успешно зарегистрирован!" nameRoute="Войти" />
            </Route>
            <Footer />
        </section>
    </Switch>
}

export default App;