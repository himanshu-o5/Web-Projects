import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'


const App = () => {
  return (
    <div>
      <Navbar/>
      <News pageSize={8}/>
    </div>
  )
}

export default App
