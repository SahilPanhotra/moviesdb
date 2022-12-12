import React from 'react'
import './Search.css'

const Search = ({search}) => {
  return (
    <>
        <input type="text" placeholder={search} className='search__input' required/>
    </>
  )
}

export default Search