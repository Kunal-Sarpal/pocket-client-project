import React from 'react'
import Homepage from './pages/Homepage'
import { PaymentProvider } from './paymentContext'

const App = () => {
  return (
    <PaymentProvider>

      <div className=' transition-all ease-in-out duration-300 '>
        <Homepage/>
      </div>

    </PaymentProvider>
  )
}

export default App