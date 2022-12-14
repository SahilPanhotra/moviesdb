import React from 'react'
import './Search.css'

const Search = ({placeholder,search,handleSearchChange,error}) => {
  return (
    <>
        <input type="text" placeholder={error.length>0?error:placeholder} value={search} className='search__input' onChange={(event)=>handleSearchChange(event.target.value)} required/>
    </>
  )
}

export default Search