import Navbar from '../../components/Navbar/Navbar'
import Welcome from '../../components/Welcome/Welcome'
import Partner from '../../components/Partner/Partner'
import Store from '../../components/Store/Store'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div className="home">
        <Navbar />
        <Welcome />
        <Partner />
        <Store />
        <Footer />
    </div>
  )
}

export default Home
