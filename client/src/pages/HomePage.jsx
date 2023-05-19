import React from 'react'

import Announcement from '../components/Announcement'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import Calender from '../components/Calender';

function HomePage() {

  return (
    <div className="content">
      <div className="div1"><Header/></div>
      <div className="div2"><SideBar/></div>
      <div className="div3"><Announcement/></div>
      <div className="div4"><Calender/></div>
      <div className="div5"><Footer/></div>
    </div>
  )
}

export default HomePage;