import { useState } from 'react'
import './App.css'
import { MyContext } from './MyContext';
import MyComponent from './MyComponent';

function App() {
  const [ input, setInput ] = useState("");
  return (
      <div>
          <MyContext.Provider value={{input, setInput}}>
              <MyComponent/>
          </MyContext.Provider>
      </div>    
  )
}

export default App
