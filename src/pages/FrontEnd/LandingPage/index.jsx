import React from 'react'
import Header from '../../../components/Header';
import LandingPage from './LandingPage';
function index() {
  return (
    <div className='d-flex flex-column'>
      <Header />
      <main>
        <LandingPage />
      </main>
      </div>
  )
}

export default index