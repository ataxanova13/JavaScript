import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Practice from "./components/Practice"
import About from './components/About';
import Firm from './components/Firm';
import Articles from './components/Articles';
import Free from './components/Free';




function App() {
  return (
    <>
     <Header /> 
     <main className="main">
      <Banner />
      <Practice />
      <About/>
     <Firm/>
     <Articles/>
     <Free/>
     </main>
     <Footer/>
    </>
  )
}

export default App
