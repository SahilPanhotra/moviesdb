import React from 'react'
import './Header.css'
import headerImg from '../assets/headerImg.svg'
import Search from './ui/Search'

const Header = () => {
  return (
    <section className='header'>
        <div className="row row__header">
        <h1 className="header__title">
            All Your Favourite Movie details Found here
        </h1>
        <h2 className='header__subtitle'>
            Just Press the Search button on <span className='brand-color bold'>MoviesDB</span>
        </h2>
        <Search/>
        <figure className='header__image--wrapper'>
            <img src={headerImg} alt="header image"  className='header__img'/>
        </figure>
        </div>
    </section>
  )
}

export default Header