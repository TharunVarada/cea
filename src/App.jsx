import React from 'react'
import Login from './components/Login'
import SignIn from './components/SignIn'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<SignIn/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
      
           
  )
}

export default App