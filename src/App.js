import Layout from './Layout/Layout'
import TopNav from './Navs/TopNav'
import MainNav from './Navs/MainNav'
import { topNavLinks, mainNavLinks } from './DummyData/NavData'


function App({props}) {

  return (
    <Layout>
      <TopNav links={topNavLinks} />
      <MainNav links={mainNavLinks} />

      <h1>Hello</h1>
    </Layout>
  );
}

export default App;
