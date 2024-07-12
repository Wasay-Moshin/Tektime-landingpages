import React from 'react'
import Heros from '../Component/Element/Heros'
import Brands from '../Component/Element/Brands'
import Whatistektime from '../Component/Element/Whatistektime'
import Trackmoment from '../Component/Element/Trackmoment'
import Participantsandassign from '../Component/Element/Participantsandassign'
import Givingservices from '../Component/Element/Givingservices'
import Pricingandplans from '../Component/Element/Pricingandplans'
import Whychooseus from '../Component/Element/Whychooseus'
import Features from '../Component/Element/Features'
import Streamllineyourmeeting from '../Component/Element/Streamllineyourmeeting'
import Testimonials from '../Component/Element/Testimonials'

function Home() {
  return (
    <div>
      <Heros />
      <Brands />
      <Whatistektime />
      <Trackmoment />
      <Participantsandassign />
      <Givingservices />
      <Pricingandplans heading="Our Pricing and plans" mainheading={
        <>
          We offer a comprehensive meeting <br className="d-none d-md-block" /> platform designed for your needs.
        </>
      } />
      <Whychooseus />
      <Features />
      <Streamllineyourmeeting />
      <Testimonials />
    </div>
  )
}

export default Home