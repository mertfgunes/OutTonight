import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/OnBoarding'
import{ BrowserRouter, Routes, Route } from 'react-route-dom'
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/" element ={<Dashboard/>}/>
          <Route path="/" element ={<OnBoarding/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
