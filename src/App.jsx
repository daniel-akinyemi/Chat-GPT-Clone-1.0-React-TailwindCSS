import { useState } from 'react'
import { Aside } from './components/Aside'
import { ChatSection } from './components/ChatSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App block sm:flex text-white">
      <Aside/>
      <ChatSection/>
    </div>
  )
}

export default App
