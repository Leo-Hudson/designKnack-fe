// You can set the constant variables here.
import { primaryPhone, primaryMail, primaryLocation } from "../assets/icons"

export const fonts = {
    clashDisplayMedium: "ClashDisplayMedium", 
    clashDisplaySemibold : "ClashDisplaySemibold", 
    montSerratRegular : "MontSerratRegular", 
    montSerratMedium : "MontSerratMedium", 
    montSerratSemibold : "MontSerratSemibold", 
}

export const rootColors = {
    primary: "var(--primary)",
    primaryRGB15: "var(--primaryRGB15)",
    primaryRGB30: "var(--primaryRGB30)",
    secondary: "var(--secondary)",
    paragraphBlack: "var(--paragraphBlack)",
    headingBlack: "var(--headingBlack)",
    grey: "var(--grey)",
    white: "var(--white)",
  
}

export const layout = {
    mobile: '280px',
    tablet: '768px',
    laptop: '1001px',
    desktop: '1368px',
}

export const menus = {
    quickLinks:[
        {
            name:"Home",
            path:"/"
        },
        {
            name:"How We Work",
            path:"/how-we-work"
        },
        {
            name:"Contact Us",
            path:"/contact-us"
        },
        {
            name: "Get a Quote",
            path: "/get-quote"
        }
    ],
    services:[
        {
            name:"Web App Development",
            path:"/web-app-development"
        },
        {
            name:"Mobile App Development",
            path:"/mobile-app-development"
        },
        {
            name:"Front End Development",
            path:"/front-end-development"
        },
        {
            name:"Hire Dedicated Developers",
            path:"/hire-dedicated-developers"
        }
    ],
    contactUs:[
        {
            name:"9550 S. Eastern Ave, Suite 237 Las Vegas, Nevada 89123",
            path: "/",
            icon: primaryLocation
        },
        {
            name:"info@designknack@gmail.com",
            path: "/",
            icon: primaryMail
        },
        {
            name:"123-456-7890",
            path: "/",
            icon: primaryPhone
        }
    ]
}
