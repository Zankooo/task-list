//z rfce se nardi template v katerega nafukavas notr stvari pol
import './Header.css'
import { FaSun, FaMoon } from 'react-icons/fa';
import {React, useEffect, useState} from 'react'




function Header({functionToChhangeTheme, theeeeme}) {


  return (
    <header className='header'>
        <h1>Task manager</h1>
        <div className='theme-switch' onClick={functionToChhangeTheme}>{ theeeeme === "light" ?  <FaMoon></FaMoon> : <FaSun></FaSun> } </div>
        

    </header>
  )
}

export default Header