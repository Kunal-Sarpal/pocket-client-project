import React from 'react'
import Homepage from './pages/Homepage'
import { PaymentProvider } from './paymentContext'
import Admin from './pages/Admin'
import { Route, Routes } from 'react-router-dom'

const App = () => {


  return (
    <PaymentProvider>

      <div className=' transition-all ease-in-out duration-300 '>
        
        <Routes>
       
          <Route path='/' element={<Homepage />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>

    </PaymentProvider>
  )
}

export default App