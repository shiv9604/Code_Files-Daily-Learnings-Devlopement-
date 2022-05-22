
import React from 'react'
import PropTypes from 'prop-types' 

// Creating prop component to reuse this componenet and to shorten the navbar code in the single function.
export default function Navbar(props) {
  return (
        <nav className="navbar">
        <ul>
        <h2 className='headername'>{props.title}</h2>
          <li>{props.hometext}</li>
          <li>{props.abouttext}</li>
          <li>{props.servicestext}</li>
          <li>{props.contacttext}</li>
        </ul>
      </nav>
  )
}

// We are declaring the proptypes here for the all the props in our component
Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  hometext : PropTypes.string.isRequired,
  servicestext : PropTypes.string.isRequired,
  contacttext : PropTypes.string.isRequired,
}

// We are declaring default values to our props when values will not given then this valus will appar on the page.
Navbar.defaultProps = {
  title : "Title",
  hometext : "Home",
  abouttext : "About",
  servicestext : "Services",
  contacttext : "Contact",
}
