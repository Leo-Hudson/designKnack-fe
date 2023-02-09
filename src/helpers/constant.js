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

export const footerMenus = {
    quickLinks:[
        {
            name:"Home",
            path:"/"
        },
        {
            name:"Services",
            path:"/Services"
        },
        {
            name:"How We Work",
            path:"/howwework"
        },
        {
            name:"Contact Us",
            path:"/contact"
        }
    ],
    services:[
        {
            name:"Web App Development",
            path:"/"
        },
        {
            name:"Mobile App Development",
            path:"/Services"
        },
        {
            name:"Front End Development",
            path:"/howwework"
        },
        {
            name:"Hire Dedicated Developers",
            path:"/contact"
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
            path: "/Services",
            icon: primaryMail
        },
        {
            name:"123-456-7890",
            path: "/howwework",
            icon: primaryPhone
        }
    ]
}
