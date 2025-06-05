
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ConsentForm from './components/ConsentForm';

function App() {

  return (
 <Router>
<div className='App'>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/consent-form" element={<ConsentForm />} />
  </Routes>
</div>
 </Router>
  )
}

export default App
