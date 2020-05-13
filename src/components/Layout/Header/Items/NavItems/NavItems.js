import React from 'react';
import { MdSettings } from 'react-icons/md';



const navItems = (props) => {

    let items = null

    if(props.type === 'login') {
        items = <span ><button>Login</button></span>

    }

    if(props.type === 'settings'){
        items = <span style={{marginRight:"10px"}}><button><MdSettings /></button></span>

    }

    return items
}



export default navItems;