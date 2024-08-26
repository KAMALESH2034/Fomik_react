import Form from './Form'
import './App.css'
import Submited from './Submited'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
  <>
    <Router> 
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/submited" element={<Submited/>}/>
      </Routes>
    </Router>
   
    
  </>
  )
}

export default App
