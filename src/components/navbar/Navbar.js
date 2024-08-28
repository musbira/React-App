import React from 'react'
import './navbar.styles.css';
import LOGOS from './images/LOGOS.png'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-0 fixed-top " >
  <div class="container-fluid" id="navbar">
    <a class="navbar-brand" href='/'><img id='logo' src={LOGOS} alt='...'></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a  id='navlinks' class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a id='navlinks' class="nav-link" href="about">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a id='navlinks' class="nav-link" href="menu">MENU</a>
        </li>
       
        <li class="nav-item">
          <a id='navlinks' class="nav-link" href="contact">CONTACT</a>
        </li>
        <li class="nav-item">
          <a id='navlinks' class="nav-link" href="signup">SIGN UP</a>
        </li>
        <button type="button" class="btn btn-warning" id='login'>Log In</button>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar