import React, { Component } from 'react';
import { MdBook, MdBookmark, MdGroup, MdInfo } from 'react-icons/md';

import classes from './Header.module.css';
import NavItems from './Items/NavItems/NavItems';
import SearchBar from './Items/SearchBar/SearchBar';
import Dropdown from '../../ui/Dropdown/Dropdown';

import Logo from '../../../assets/navbar.svg';

class Header extends Component {
    container = React.createRef();
    state = {
        dropDownClicked: ''
    }


    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    dropDownToggleHandler = (id) => {
      this.setState(state => {
          return{
              dropDownClicked: id
          }
      })
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            dropDownClicked: '',
          });
        }
      };

    render() {
        console.log(this.state.dropDownClicked);
        return (
            <div className={classes.Wrapper} ref={this.container}>
                <nav className={classes.NavLinks}>
                    <img src={Logo} alt="Logo" height="85%" style={{ marginRight: "20px" }} />
                    <p style={{ marginRight: "10px" }}> MangaDex </p>
                    <span>
                        <div style={{ display: "block", alignItems: "center",}} onClick={()=>this.dropDownToggleHandler('Manga')}>
                            <MdBook /> Manga
                        </div>
                        <Dropdown visible={this.state.dropDownClicked} id='Manga'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, laborum assumenda quibusdam nobis, in rem obcaecati deserunt enim autem amet maiores labore animi eos eaque! Expedita eaque numquam ad iusto.</Dropdown>
                    </span>
                    <span>
                        <div style={{ display: "flex", alignItems: "center" }} >
                            <MdBookmark /> Follows
                    </div>
                    </span>
                    <span>
                        <div style={{ display: "flex", alignItems: "center" }} onClick={()=>this.dropDownToggleHandler('Community')}>
                            <MdGroup /> Community
                        </div>
                        <Dropdown visible={this.state.dropDownClicked} id='Community'>teste</Dropdown>
                    </span>
                    <span>
                        <div style={{ display: "flex", alignItems: "center" }} onClick={()=>this.dropDownToggleHandler('Info')}>
                            <MdInfo /> Info
                        </div>
                        <Dropdown visible={this.state.dropDownClicked} id='Info'>teste</Dropdown>
                    </span>
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