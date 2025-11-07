import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://72.61.6.58:4000/api/message")
    .then((res)=> res.json())
    .then((data)=> setMessage(data.message))
    .catch((err) => {
      console.error("error fetching message", err)
    })
  }, [])

  return (
    <>

    <h1>Welcome to Ashish's frontend</h1>
      <h2>
        data {message}
      </h2>
    </>
  )
}

export default App
