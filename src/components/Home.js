import React from 'react'
import './Pages.css'

const Home = () => {
  return (
    <div className="homeSection" id='home'>
      <div className='left'>
          <img src="icons/avatar.svg" />
          <h2>Piotr Chodkowski</h2>
          <p>Web Developer</p>
      </div>

      <div className='right'>
          <h1>Welcome !</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a orci dolor. Vivamus laoreet leo quis dui bibendum, sed tempus diam maximus. Integer ac sollicitudin lectus. Sed porta aliquam dictum. Nulla sit amet lectus quis tortor scelerisque malesuada a vitae risus.</p>

      </div>
    </div>
  )
}

export default Home