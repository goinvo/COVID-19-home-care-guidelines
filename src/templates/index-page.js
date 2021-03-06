import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Markdown from 'react-commonmark'

import Layout from '../components/Layout'

import cover from '../../static/img/cover.jpg';

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
  .extra-margin-top {
    margin-top: 20px;
  }
  .smol-link {
    font-size: 14px;
  }
  .disclaimer {
    padding-top: 50px;
    font-size: 14px;
  }
  .comic-img {
    width: 180px;
  }
`

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-10273473-32');
}

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
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-10273473-32"></script>
      <script>{ injectGA() }</script>
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
                    <img className="comic-img" src={cover} alt="The cover of 'A COVID-19 Guide to Home Care' comic."/>
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
                    <h4 className="is-size-5 extra-margin-top">
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
                    <h4 className="is-size-5 extra-margin-top">
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
                    <h4 className="is-size-5 extra-margin-top">
                      <span className="underline--purple">Become a translator</span>
                    </h4>
                    <p><strong>Contact us first</strong> at <a href="mailto:coronavirus@goinvo.com">coronavirus@goinvo.com</a> to let us know for what language you want to translate or update. We'll let you know if we have someone working on it already or if that person can be you!</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h4 className="is-size-5 extra-margin-top">
                      <span className="underline--purple">Make your Translation</span>
                    </h4>
                    <p>
                      You can either...<br/>
                      <strong>A) Work in Google Docs directly</strong><br/>
                      1. Go to the <a href="https://docs.google.com/document/d/1yThBEOwwhT2EQNmnuoaebv-Hpdd7hIcOew399JMBByA/">English version</a> of the guide in Google Docs<br/>
                      2. File > Make a Copy<br/>
                      3. Edit the text directly<br/>
                      4. Let us know you are done and send the Google Doc link to <a href="mailto:coronavirus@goinvo.com">coronavirus@goinvo.com</a><br/>
                      <br />
                      OR<br/>
                      <br />
                      <strong>B) Work on a local file and upload after</strong><br/>
                      1. Go to the <a href="https://docs.google.com/document/d/1yThBEOwwhT2EQNmnuoaebv-Hpdd7hIcOew399JMBByA/">English version</a> of the guide in Google Docs<br/>
                      2. File > Download > Microsoft Word (.docx)<br/>
                      3. Edit the text in Microsoft Word<br/>
                      4. Go to Google Docs, then File > Open > Select your finished translated file<br/>
                      5. Review and fix any formatting issues the document has from being transferred to Google Docs<br/>
                      6. Let us know you are done and send the Google Doc link to <a href="mailto:coronavirus@goinvo.com">coronavirus@goinvo.com</a>
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h4 className="is-size-5 extra-margin-top">
                      <span className="underline--purple">Update your Translation</span>
                    </h4>
                    <p>
                      We realize our translators are volunteers, so there is no obligation to continue to be responsible for continuing to update the translation. However, should you want to help update a translation, please check this <a href="https://docs.google.com/spreadsheets/d/1uWbWgoXDzAxWuQnK5xCUYQgj9xIFHg0gUPP0JLDpPdA/">Google Spreadsheet</a>. Here you can easily track any of the changes made to the English guide, which will generally serve as the main source of content for the other translations. We recommend checking this spreadsheet <strong>once a week or biweekly</strong>. After making an update, please <strong>update the date</strong> at the beginning of the document to let readers know the extent to which the translation is updated.
                    </p>
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
                <div className="columns section-margin">
                  <div className="column is-12">
                    <p className="disclaimer">
                      <strong>This website does not provide medical advice.</strong>
                      <br />
                      You assume full responsibility for using the information on this site, and you understand that this site and contributors are not responsible or liable for any claim, loss or damage resulting from its use by you or any user.
                    </p>
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
