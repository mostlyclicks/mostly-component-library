import Layout from './Layout/Layout'
import TopNav from './Navs/TopNav'
import Card from './Layout/Card'
import Header from './Layout/Header'
import Footer from './Layout/Footer'

import { topNavLinks, mainNavLinks } from './DummyData/NavData'


function App({props}) {

  return (
    <Layout>
      <TopNav links={topNavLinks} />
      <Header links={mainNavLinks} />
        <h1>Hello</h1>
        {/*
          Add routing for pages
          - start with home
        */}
        <div className="flex-auto flex-col">
          <Card />
          <Card />
          <Card />
        </div>
        
      <Footer primaryLinks={mainNavLinks} secondaryLinks={topNavLinks} />
    </Layout>
  );
}

export default App;
