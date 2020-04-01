import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Markdown from 'react-commonmark'

import Layout from '../components/Layout'

const styles = `
  body {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
  }
  strong {
    font-weight: 600;
  }
  .underline--blue {
    border-bottom: 6px solid #B3CBE1;
  }
  .underline--purple {
    border-bottom: 6px solid #B193AB;
  }
  .content .simple-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .section-margin {
    margin-top: 50px;
  }
  .smol-link {
    font-size: 14px;
  }
`

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  aboutSection,
  useSection,
  versions,
  shareSection,
  translateSection,
  inProgress,
  requested,
  contributors
}) => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,900;1,400;1,600&display=swap" rel="stylesheet" />
      <style>{styles}</style>
    </Helmet>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top center`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 'auto',
        padding: '20px 30px',
        minHeight: '12vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-uppercase"
          style={{
            textShadow:
              '3px 1px white',
            color: 'black',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-6-mobile is-size-5-tablet is-size-4-widescreen is-uppercase"
          style={{
            color: 'black',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-bold is-size-3 is-uppercase">
                      <span className="underline--blue">{aboutSection.title}</span>
                    </h3>
                    <p><Markdown source={aboutSection.text} /></p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-bold is-size-3 is-uppercase section-margin">
                      <span className="underline--blue">{useSection.title}</span>
                    </h3>
                    <p><Markdown source={useSection.text} /></p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h4 className="is-size-5">
                      <span className="underline--purple">Home Care Guide</span>
                    </h4>
                    <ul className="simple-list">
                      {versions.map(v => {
                        return (
                          <li className="has-text-weight-semibold">
                            {v.language} <a href={v.link + '/export?format=pdf'}>PDF</a> | <a href={v.link}>Google Doc</a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-bold is-size-3 is-uppercase section-margin">
                      <span className="underline--blue">{shareSection.title}</span>
                    </h3>
                    <p><Markdown source={shareSection.text} /></p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-bold is-size-3 is-uppercase section-margin">
                      <span className="underline--blue">{translateSection.title}</span>
                    </h3>
                    <p><Markdown source={translateSection.text} /></p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-6">
                    <h4 className="is-size-5">
                      <span className="underline--purple">Translations in Progress</span>
                    </h4>
                    <ul className="simple-list">
                      {inProgress.map(l => {
                        return (
                          <li>{l}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className="column is-6">
                    <h4 className="is-size-5">
                      <span className="underline--purple">Current Translation Requests</span>
                    </h4>
                    <ul className="simple-list">
                      {requested.map(l => {
                        return (
                          <li>{l}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-bold is-size-3 is-uppercase section-margin">
                      <span className="underline--blue">Contributors</span>
                    </h3>
                    <ul className="simple-list">
                      {contributors.map(c => {
                        return (
                          <li>{c}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  aboutSection: PropTypes.object,
  useSection: PropTypes.object,
  versions: PropTypes.array,
  shareSection: PropTypes.object,
  translateSection: PropTypes.object,
  inProgress: PropTypes.array,
  requested: PropTypes.array,
  contributors: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        aboutSection={frontmatter.aboutSection}
        useSection={frontmatter.useSection}
        versions={frontmatter.versions}
        shareSection={frontmatter.shareSection}
        translateSection={frontmatter.translateSection}
        inProgress={frontmatter.inProgress}
        requested={frontmatter.requested}
        contributors={frontmatter.contributors}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        aboutSection {
          title
          text
        }
        useSection {
          title
          text
        }
        versions {
          language
          link
        }
        shareSection {
          title
          text
        }
        translateSection {
          title
          text
        }
        inProgress
        requested
        contributors
      }
    }
  }
`
