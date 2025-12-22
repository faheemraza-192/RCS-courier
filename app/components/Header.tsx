import React from 'react'
import Link from 'next/link'
export default function Header() {
    return (
        <div>
          <header className='header'>
            <div className='navbarContent col-12'>
              {/* Left navigation bar */}
              <div className='nav-links col-4 mx-auto'>
                <a href=""><button>Services</button></a>
                <a href=""><button>About Us</button></a>
                <a href=""><button>Conttact Us</button></a>
              </div>

              {/* Center banner image */}
              <div className='navbarBanner col-4 '><img className='imgBanner' src="images/rapidimg.png" alt="" /></div>

              {/* Right navigation Call to Action */}
              <div className='navbarQuoteBtn col-4 mx-auto'><a href=""><button>GET A  QUOTE</button></a></div>
            </div>
          </header>
{/* <h3 className='mt-5'>hello world...</h3> */}

          {/* /////////////////vvv */}
          {/* /////////////////vvv */}
          {/* /////////////////vvv */}
          {/* /////////////////vvv */}





        

        </div>
    )
}
