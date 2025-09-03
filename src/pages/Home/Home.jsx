import Navbar from '../../components/Navbar/Navbar'
import Welcome from '../../components/Welcome/Welcome'
import Partner from '../../components/Partner/Partner'
import Store from '../../components/Store/Store'
import Footer from '../../components/Footer/Footer'
import { useStore } from '../../components/StoreContext/StoreContext'

function Home() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useStore();
  return (
    <div className="home">
        <div id="navbar">
          <Navbar />
        </div>
        <Welcome />
        <Partner />
        <div id="boutique">
          <Store />
        </div>
        <Footer />
    </div>
  )
}

export default Home
