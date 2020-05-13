import React, { Component } from 'react';
import { MdBook, MdBookmark, MdGroup, MdInfo } from 'react-icons/md';

import classes from './Header.module.css';
import NavItems from './Items/NavItems/NavItems';
import SearchBar from './Items/SearchBar/SearchBar';

import Logo from '../../../assets/navbar.svg';

class Header extends Component {

    render() {

        return (
            <div className={classes.Wrapper}>
                <nav className={classes.NavLinks}>
                    <img src={Logo} alt="Logo" height="85%" style={{ marginRight: "20px" }} />
                    <p style={{ marginRight: "10px" }}> MangaDex </p>
                    <span onClick={()=>this.dropDownToggleHandler('Manga')}> <MdBook /> Manga</span>
                    <span> <MdBookmark /> Follows</span>
                    <span> <MdGroup /> Community</span>
                    <span> <MdInfo /> Info</span>
                </nav>
                <div className={classes.Items}>
                    <SearchBar />
                    <NavItems type="settings" />
                    <NavItems type="login" />
                </div>
            </div>
        )
    }
}

export default Header