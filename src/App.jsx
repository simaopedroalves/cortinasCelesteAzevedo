import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BuildingWebsite from './Components/BuildingWebsite.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
   <main className='bg-navy w-screen h-screen grid items-center justify-center'>
      <BuildingWebsite />

   </main>
  )
}

export default App
