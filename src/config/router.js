import {
    BrowserRouter,
    Routes, Route
} from "react-router-dom";

import Header from "../components/Header";
import Home from '../screens/Home';
import Services from "../screens/Services";
import Footer from "../components/Footer";


export default function Router() {

    // const [user, setUser] = useState()

    // const protectedRoute = (component) => {
    //     if (!user) {
    //         return <Login />
    //     }
    //     else {
    //         return component
    //     }
    // }

    // // Protected Routes For check the user is logged in or not | if loggedin show redirect to member page else show login or signup page.
    // const protectedAuthRoute = (component) => {
    //     if (user) {
    //         return <Dashboard />
    //     }
    //     else {
    //         return component
    //     }
    // }

    // useEffect(() => {
    //     // Calling a auth function if user logged in setUser with id or something. Else setUser to null.
    // }, [])

    return <div>
        <BrowserRouter>
            <div>
                <Header />
                {/* {user ? <DashboardHeader /> : <Header />} */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services name="Services" />} />
                    <Route path="/how-we-work" element={<Services name="How We Work" />} />
                    <Route path="/contact-us" element={<Services name="Contact Us" />} />
                    <Route path="/get-quote" element={<Services name="Get a Quote" />} />
                    <Route path="/web-app-development" element={<Services name="Web App Development" />} />
                    <Route path="/mobile-app-development" element={<Services name="Mobile App Development" />} />
                    <Route path="/front-end-development" element={<Services name="Front End Development" />} />
                    <Route path="/hire-dedicated-developers" element={<Services name="Hire Dedicated Developers" />} />

                    {/* <Route path="/" element={protectedAuthRoute(<Login />)} />
                <Route path="/login" element={protectedAuthRoute(<Login />)} />
                <Route path="/signup" element={protectedAuthRoute(<Signup />)} />

                <Route path="/dashboard" element={protectedRoute(<Dashboard />)} />
                <Route path="/createAd" element={protectedRoute(<CreateAd />)} />
                <Route path="/productDetails/:adId" element={protectedRoute(<ProductDetails />)} /> */}

                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    </div>
}
