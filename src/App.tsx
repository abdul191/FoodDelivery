
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Features/Navbar"
const App = () => {
  return (
<Router>
  <Routes>
  <Route path="/" element={<Navbar />} />
  </Routes>
</Router>
  )
}

export default App
