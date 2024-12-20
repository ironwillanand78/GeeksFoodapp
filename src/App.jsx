import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'

const App = () => {
return (
  <div>
  <Navbar/>
  <Body/>
    </div>
)
}




export default App;
