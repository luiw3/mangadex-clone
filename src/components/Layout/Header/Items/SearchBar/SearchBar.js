import React from 'react';
import { MdSearch } from 'react-icons/md';


import Button from '../../../../ui/Button/Button';
import classes from './SearchBar.module.css';

const searchBar = () => (
    <form className={classes.Form}>
        <select name="select">
            <option value="All">All</option>
            <option value="Manga" selected>Manga</option>
            <option value="Groups">Groups</option>
            <option value="Users">Users</option>
        </select>
        <input type="text" placeholder="Search" />
        <Button btnType="Search"><span className={classes.SearchButton}> <MdSearch /> </span></Button>
    </form>
)


export default searchBar