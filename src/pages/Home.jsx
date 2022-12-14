import React from 'react'
import Header from '../components/Header'

const Home = ({search,handleSearchChange,handleSearch,loading}) => {
  return (
    <>
        <Header search={search} handleSearchChange={handleSearchChange} handleSearch={handleSearch} loading={loading}/>
    </>
  )
}

export default Home