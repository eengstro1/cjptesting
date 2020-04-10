import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../style/index.scss'

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
    <div className="Container">
      <div className="Header">
        <div className="Wrap" >
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}
              </Link>
            </h1>
            <div class="header_actions">
              <button class="header__cheackout snipcart-checkout">
                <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.123 491.123">
                  <path d="M470.223.561h-89.7c-9.4 0-16.7 6.3-19.8 14.6l-83.4 263.8h-178.3l-50-147h187.7c11.5 0 20.9-9.4 20.9-20.9s-9.4-20.9-20.9-20.9h-215.9c-18.5.9-23.2 18-19.8 26.1l63.6 189.7c3.1 8.3 11.5 13.6 19.8 13.6h207.5c9.4 0 17.7-5.2 19.8-13.6l83.4-263.8h75.1c11.5 0 20.9-9.4 20.9-20.9s-9.5-20.7-20.9-20.7zM103.223 357.161c-36.5 0-66.7 30.2-66.7 66.7s30.2 66.7 66.7 66.7 66.7-30.2 66.7-66.7-30.2-66.7-66.7-66.7zm25 67.7c0 14.6-11.5 26.1-25 26.1-13.6 0-25-11.5-25-26.1s11.5-26.1 25-26.1c14.6.1 26.1 11.5 25 26.1zM265.823 357.161c-36.5 0-66.7 30.2-66.7 66.7s30.2 66.7 66.7 66.7c37.5 0 66.7-30.2 66.7-66.7.1-36.5-30.2-66.7-66.7-66.7zm25.1 67.7c0 14.6-11.5 26.1-25 26.1s-25-11.5-25-26.1 11.5-26.1 25-26.1c14.5.1 26 11.5 25 26.1z"/>
                </svg>
                <span class="snipcart-total-price">$0.00</span>
                (<span class="snipcart-items-count">0</span>)                
              </button>
            </div>
            {/* <div className="Header__summary snipcart-summary snipcart-checkout">
              <div className="Header__summary__title">
                🛍 MY CART 🛍
              </div>
              <div className="Header__summary__line">
                Number of items: <span className="snipcart-items-count"></span>
              </div>
              <div className="Header__summary__line">
                Total price: <span className="snipcart-total-price"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="Wrap" >
        {children}
      </div>
      <div className="Wrap" >
        <div className="Footer">
          This website is just an example project to demonstrate how you can 
          integrate <a href="https://www.gatsbyjs.org/">Gatsby</a>, <a href="https://snipcart.com/">Snipcart</a> and <a href="https://www.datocms.com">DatoCMS</a>.
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

