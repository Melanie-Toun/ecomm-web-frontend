import Header from "./components/Header"
import Banner from "./components/Banner"
import About from "./components/About"
import FeaturedTrends from "./components/FeaturedTrends"
import { EcomProvider } from "./context/EcomContext"
import Products from "./components/pages/Products"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Aboutt from "./components/pages/Aboutt"
import Contactt from "./components/pages/Contactt"
import Pricing from "./components/pages/Pricing"
import ProductDetails from "./components/pages/ProductDetails"
import Cart from "./components/pages/Cart"
import CheckOut from "./components/pages/CheckOut"
import ThankYou from "./components/pages/ThankYou"
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"
import Alert from "./components/shared/Alert"
import { useEffect, useState } from "react"
import Loader from "./components/shared/Loader"
import { AuthProvider } from "./context/AuthContext"
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
  const [loading, setLoading] = useState(true);
  const { getItem } = useLocalStorage("auth-token");
  const token = getItem("auth-token");
  const authInitialToken = { accessToken: token ?? null }
  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
    {loading ? (<Loader />) : (

    
      <AuthProvider defaultState={authInitialToken}>
    <EcomProvider>
      <Router>
          <Header/>
          <Alert/>
          <Banner/>
        <Routes>
          <Route path="/"
          element={
            <>
            <About/>
            <FeaturedTrends/>
            <Contact/>
            </>
          }
          />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<Aboutt />} />
        <Route path="/contactt" element={<Contactt />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thankyou" element={<ThankYou />} />

        </Routes>
        <Footer/>
      </Router>
      </EcomProvider>
      </AuthProvider>
      )}
    </>
  )
}

export default App
