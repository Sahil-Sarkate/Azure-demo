import React from 'react'

const Sidebar = ({sidebar}) => {
  return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
      <li><i className="ri-home-line"></i>Home</li>
      <li><i className="ri-todo-line"></i>My Projects</li>
      <li><i className="ri-file-add-line"></i>Create new Project</li>
      <li><i className="ri-layout-top-line"></i>Top Templates</li>
      <li><i className="ri-settings-5-line"></i>Configuration Settings</li>
      <li><i className="ri-question-line"></i>Help Tutorials</li>

    </div>
  )
}

export default Sidebar
