import { useState } from 'react'
import { Route,BrowserRouter, Routes} from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Courses from './pages/Courses'
import HomePage from './pages/HomePage'
import Footer from './pages/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup'element={<Signup/>}></Route>
          <Route path='/Courses'element={<Courses/>}></Route>
          <Route path='/HomePage'element={<HomePage/>}></Route>
          <Route path='/Footer'element={<Footer/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
