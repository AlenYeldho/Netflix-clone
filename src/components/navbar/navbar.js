import React from 'react'
import "./navbar.css"


function NavbarM() {
  return (
    <div className='navbar'>
      <div><img className="logo"src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='netflix '/></div>
     <div className='trailers'><h2 className='tailer'>TRAILERS</h2></div>
     
<div className='homeset'>
<a className='navtxt' href=''>Home</a>
<a className='navtxt'href=''>TV Shows</a>
<a className='navtxt'href=''>Play List</a>
<a className='navtxt'href=''>Login</a>
<select className='lang' >
  <option>Language</option>
  <option>English</option>
  <option>Malayalam</option>
  <option>Hindi</option>
  <option>Tamil</option>
</select>
    <form >
        <input className='search' type="text" name="search" placeholder="Search..."/>
        <input className='searchbtn' type="submit" value="Search"/>
    </form>      
    
</div>

      <img className="avathar"src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'  alt='avatar'/>
    </div>
  )
}

export default NavbarM;
