import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import StyleOne from "./components/StyleOne/StyleOneProduct";
import StyleTwo from "./components/StyleTwo/StyleTwoProduct";
import StyleThree from "./components/StyleThree/StyleThreeProduct";
import StyleFour from "./components/StyleFour/StyleFourProduct";
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Navbar/>
     <Navigation/>
     <StyleOne/>
     <StyleTwo/>
     <StyleThree/>
     <StyleFour/>
     <Footer/>
    </>
  )
}

export default App;