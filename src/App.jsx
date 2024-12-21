
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
import Navbar from './components/navbar/Navbar'
import Section from './components/section/Section'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'

const Mycomponent = () =>{
  return(
    <div>
  <Navbar/>
  <Section/>
  <div className={styles.cardContainer}>
            <Card />
            <Card />
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
  <Footer/>
    </div>
  )
}
const App = () => {
return (
  <>
  <Mycomponent/>
  </>
)
}




export default App;
