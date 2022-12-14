import React from 'react'
import './Search.css'

const Search = ({placeholder,search,handleSearchChange}) => {
  return (
    <>
        <input type="text" placeholder={placeholder} value={search} className='search__input' onChange={(event)=>handleSearchChange(event.target.value)} required/>
    </>
  )
}

export default Search