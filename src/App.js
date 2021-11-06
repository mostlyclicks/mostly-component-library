import Layout from './Layout/Layout'
import TopNav from './Navs/TopNav'
import Card from './Layout/Card'
import Card2 from './Layout/Card2'
import Header from './Layout/Header'
import Hero from './Layout/Hero'
import Footer from './Layout/Footer'

import { topNavLinks, mainNavLinks } from './DummyData/NavData'


function App({props}) {

  return (
    <>
    <TopNav links={topNavLinks} />
    <Layout>
      
      <Header links={mainNavLinks} />
      <Hero />
      
        {/*
          Add routing for pages
          - start with home
        */}
        <div className="flex gap-3 flex-col md:flex-row container mx-auto mb-4">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex gap-3 flex-col md:flex-row container mx-auto">
          <Card2 />
          <Card2 />
          
          
          
        </div>
        
      <Footer primaryLinks={mainNavLinks} secondaryLinks={topNavLinks} />
    </Layout>
    </>
  );
}

export default App;
