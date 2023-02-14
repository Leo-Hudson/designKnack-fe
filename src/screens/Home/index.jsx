import React from 'react'
import HeroSection from "./HeroSection"
import OurServices from './OurServices'
import AboutUs from './AboutUs'
import Portfolio from './Portfolio'
import LetsGotoWork from './LetsGotoWork'
import Testimonials from './Testimonials'
import GetInTouch from './GetInTouch'
import HowWeWork from './HowWeWork'

function Home() {

    return (
        <React.Fragment>
            <HeroSection />
            <OurServices />
            <AboutUs />
            <Portfolio />
            <HowWeWork />
            <LetsGotoWork />
            <Testimonials />
            <GetInTouch />
        </React.Fragment>
    )
}

export default Home
