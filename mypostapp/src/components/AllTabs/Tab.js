import React from 'react'

function Tab({ item, onTabClick }) {
    return (
        <a id={item.id} onClick={onTabClick}
            className="hover:text-white font-semibold uppercase tracking-wide cursor-pointer text-xs w-auto text-[#ffffff99]">
            {item.title}
        </a>
    )
}

export default Tab