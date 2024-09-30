import { useState } from 'react'

import './App.css'
import Bonjour from "./pages/Bonjour.tsx";
import './index.css'

function App() {
  const [count, setCount] = useState(0)
    return (
        <div className="App">
            <div className="flex flex-col  min-h-screen ">
                <main className="flex-grow   ">
                    <Bonjour />

                </main>
            </div>
            </div>

  )
}

export default App
