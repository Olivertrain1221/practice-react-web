import React from 'react';
import Tab from './Tab'

function Tabs(props) {
    return (
        <>
        {props.items.map((item) => (
            <Tab onTabClick={props.onTabClick} key={item.id} item={item}/>
        ))}
        </>
    )
}

export default Tabs;    