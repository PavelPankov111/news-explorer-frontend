import React from 'react'
import './SearchForm.css'

function SearchForm(){
    return(
        <form className="search__form">
            <input placeholder="Введите тему новости" className="search__input" type="text" />
            <button type="submit" className="search__button">Искать</button>
        </form>
    )
}

export default SearchForm;