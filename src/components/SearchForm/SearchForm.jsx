import React from 'react'
import './SearchForm.css'

function SearchForm(props){
    const { inputSearchForm } = props
    const inputRef = React.useRef()

    function submitSearchForm(e){
        e.preventDefault()
        inputSearchForm(inputRef.current.value)
    }

    return(
        <form onSubmit={submitSearchForm} className="search__form">
            <input autoComplete="off" ref={inputRef} placeholder="Введите тему новости" className="search__input" type="text" />
            <button type="submit" className="search__button">Искать</button>
        </form>
    )
}

export default SearchForm;