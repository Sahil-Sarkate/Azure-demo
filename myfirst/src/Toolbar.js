import React from 'react'

const ToolBar = ({openSidebar}) =>{
    return(
        <div className="tool-bar">
            <div className="burger" onClick={openSidebar}>
            <i className="ri-menu-line"></i>
            </div>
            <div className="title">Microsoft Azure</div>
        </div>
    )
}

export default ToolBar