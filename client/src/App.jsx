import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Notes from './component/Notes/Notes'
import { Route, Routes} from 'react-router-dom'
import Home from './page/Home/Home'
import AddNote from './page/AddNote/AddNote'
import Login from './page/Login/Login'


const App = () => {

  const [signUp, setSignUp] = useState(false)



  return (
    <div id='app'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addnote' element={<AddNote />} />
          <Route path={signUp?"/signup":"/login"} element={<Login signUp={signUp} setSignUp={setSignUp} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App