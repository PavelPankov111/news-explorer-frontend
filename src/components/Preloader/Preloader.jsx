import React from 'react'
import './Preloader.css'

function Preloader(props) {
    return (
        <div className={props.isVisible? `preloader` : `preloader__hidden`}>    
            <i className="preloader__icon"></i>
            <p className="preloader__text">{props.textLoading}</p> : ''
        </div>

    )
}

export default Preloader;