import { useEffect, useState } from 'react'
import './App.css'
import CrudApi from './assets/Components/CrudApi'

function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
      <CrudApi></CrudApi>
      
    </>
  )
}

export default App
