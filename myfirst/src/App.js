import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ToolBar from './Toolbar'
import Sidebar from './Sidebar'
import Backdrop from './Backdrop'
import 'remixicon/fonts/remixicon.css'

const App =()=> {

  const [sidebar,setSideBar]= useState(false);

  const toggleSidebar = () =>{
    setSideBar((prevState) =>!prevState)
  }
  return (
    <div className="App">
      <ToolBar openSidebar={toggleSidebar}/>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <Sidebar sidebar={sidebar}/>
    </div>
  )
}

export default App
