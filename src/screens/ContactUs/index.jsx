import React from 'react'
import BannerSection from './BannerSection'
import GetInTouch from '../Home/GetInTouch'
import LetsGotoWork from '../Home/LetsGotoWork'
import Testimonials from '../Home/Testimonials'

function ContactUs() {
    return <React.Fragment>
        <BannerSection />
        <GetInTouch />
        <LetsGotoWork />
        <Testimonials />
    </React.Fragment>
}

export default ContactUs