import Layout from './Layout/Layout'
import TopNav from './Navs/TopNav'
import Header from './Layout/Header'
import { topNavLinks, mainNavLinks } from './DummyData/NavData'


function App({props}) {

  return (
    <Layout>
      <TopNav links={topNavLinks} />
      <Header links={mainNavLinks} />
      <h1>Hello</h1>
    </Layout>
  );
}

export default App;
