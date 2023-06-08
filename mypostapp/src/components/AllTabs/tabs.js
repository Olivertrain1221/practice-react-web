import React from 'react';

function Tabs(props) {
    console.log("WORK")
    return (
        <>
        <a id={Math.random().toString()}
            class="hover:text-white font-semibold uppercase tracking-wide cursor-pointer text-xs w-auto text-[#ffffff99]">
            {props.items[0].title}
        </a>
        </>
    )
}

export default Tabs;    