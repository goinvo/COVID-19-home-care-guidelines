import React from 'react'
import { Helmet } from 'react-helmet'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@goinvo" />
        <meta name="twitter:creator" content="@goinvo" />
        <meta property="twitter:title" content="A Coronavirus Guide For At Home Care" />
        <meta property="twitter:description" content="An illustrated guide for how to help someone who has COVID-19 at home." />
        <meta property="twitter:image" content={`${withPrefix('/')}img/og-image.jpg`} />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="A Coronavirus Guide For At Home Care" />
        <meta property="og:description" content="An illustrated guide for how to help someone who has COVID-19 at home." />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />

      </Helmet>
      {/* <Navbar /> */}
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper
