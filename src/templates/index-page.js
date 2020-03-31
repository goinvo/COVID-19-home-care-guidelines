import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

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
        padding: '20px 30px'
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
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
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
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
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
                {/* <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div> */}
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {aboutSection.title}
                    </h3>
                    <p>{aboutSection.text}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {useSection.title}
                    </h3>
                    <p>{useSection.text}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <p>Home Care Guide</p>
                    <ul>
                      {versions.map(v => {
                        return (
                          <li><a href={v.link}>{v.language}</a></li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {shareSection.title}
                    </h3>
                    <p>{shareSection.text}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {translateSection.title}
                    </h3>
                    <p>{translateSection.text}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-6">
                    <p>Translations in Progress</p>
                    <ul>
                      {inProgress.map(l => {
                        return (
                          <li>{l}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className="column is-6">
                    <p>Current Translation Requests</p>
                    <ul>
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
                    <p>Contributors</p>
                    <ul>
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
