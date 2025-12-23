import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataDisplay from'./components/Dashboard.jsx'
import Dashboard from './components/Dashboard.jsx'
import Counter from './components/Counter.jsx'

function App(){
    const[name,setName]=useState("Himaaya")
    const[occ,setOcc]=useState("developer")
    function nameChange(){
        setName("maaya")
        console.log(name)
    }
    return(
        <>
            <Dashboard name={name}occ={occ}nameChange={nameChange}/>
           <Counter/> 
        </>
    )
}

export default App