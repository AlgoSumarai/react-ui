import Home from './pages/Home'
import Header from './components/Header'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
