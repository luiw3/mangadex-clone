import React from 'react';
import {MdBook, MdBookmark , MdGroup , MdInfo} from 'react-icons/md'

import classes from './Header.module.css';
import Logo from '../../../assets/navbar.svg';

const header = () => (
 <div className={classes.Wrapper}>
     <nav className={classes.NavLinks}> 
         <img src={Logo} alt="Logo" height="85%" style={{marginRight: "20px"}}/>
         <p style={{marginRight:"10px"}}> MangaDex </p>
         <span> <MdBook/> Manga</span>
         <span> <MdBookmark/> Follows</span>
         <span> <MdGroup/> Community</span>
         <span> <MdInfo/> Info</span>
     </nav>
     <div className={classes.Items}>
         <span>Search</span>
         <span>settings</span>
         <span>login</span>
     </div>
 </div>
)

export default header