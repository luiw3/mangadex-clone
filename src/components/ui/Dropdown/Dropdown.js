import React from 'react';
import classes from './Dropdown.module.css';

const dropwdown = (props) => {
    console.log(props)
    let clss = [classes.Dropdown]
    if(props.visible === props.id) {
        clss.push(classes.Visible)
    }
    return(
        <div className={clss.join(' ')}>
            {props.children}
        </div>
    )
}

export default dropwdown