import React from 'react'
import './About.css'
import myPhoto from '../../images/me.jpg'
import { Route, Switch } from 'react-router-dom'


function About() {
    return <Switch>
        <Route path="/" exact>
        <section className="about">
            <img className="about__image" src={myPhoto} alt="Фото автора" />
            <div className="about__box">
                <p className="about__title">Об авторе</p>
                <p className="about__description">Добрый день, меня зовут Павел, я - фронтенд разработчик. Я хорошо умею верстать и знаю: JavaScript, Git, nginx, ionic, cordova, HTML5, CSS3, ООП, React, Webpack, babel, HTTP протокол, express, ES8, ES9, Node.js, NoSQL и MongoDB</p>
            </div>
        </section>
        </Route>
    </Switch>
}

export default About;