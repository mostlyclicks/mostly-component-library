import React, { useState } from "react"
import { Routes, Route, Link, Outlet } from "react-router-dom"
import Layout from './Layout/Layout'
import TopNav from './Navs/TopNav'
import Card from './Layout/Card'
import Card2 from './Layout/Card2'
import Card2A from './Layout/Card2a'
import Popup from './Layout/Popup'
import SectionOne from "./Layout/SectionOne"
import Header from './Layout/Header'
import Hero from './Layout/Hero'
import Footer from './Layout/Footer'

import { topNavLinks, mainNavLinks } from './DummyData/NavData'


function App({props}) {

  const [modalOpen, setModalOpen] = useState(false)

  const buttonHandler = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <>
    {modalOpen ? <Popup closeModal={handleCloseModal} title="Popup Title" /> : ""}
    
    <TopNav links={topNavLinks} />
    <Layout>
      
      <Header links={mainNavLinks} />
      <Hero />
      <button onClick={buttonHandler}>Click for modal</button>
      <main className="container mx-auto">
        <SectionOne />
        
        <Routes>
          
          
          <Route path="/bike-cards" element={
            <div className="flex gap-3 flex-col md:flex-row container mx-auto mb-4">
              <Card />
              <Card />
              <Card />
            </div> 
          }/>
          <Route path="/bike-cards-large" element={
            <div className="flex gap-3 flex-col md:flex-row container mx-auto">
              <Card2 />
              <Card2 />
              <Outlet />
            </div>
          }>
            <Route path="card-2-a" element={<Card2 />} />
            
          </Route>
        </Routes>
      </main>
    
        
      <Footer primaryLinks={mainNavLinks} secondaryLinks={topNavLinks} />
    </Layout>
    </>
  );
}

export default App;
