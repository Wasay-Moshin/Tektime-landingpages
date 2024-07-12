import React from 'react'
import Pricingandplans from '../Component/Element/Pricingandplans'
import Checkourfeatures from '../Component/Element/Checkourfeatures'

function Planandpricing() {
  return (
    <div className='mt-5 pt-5'>
      <div className="why-choose-us py-5">
        <div className="text-center">
          <h5 className="main-heading fw-bold mb-4">Pricing & Plans</h5>
          <p className="description">With TekTime, you can easily manage your meetings with real-time <br className="d-none d-md-block" /> updates, scheduling, and detailed participant insights.</p>
        </div>
        <Pricingandplans/>
        <Checkourfeatures/>
      </div>
    </div>
  )
}

export default Planandpricing