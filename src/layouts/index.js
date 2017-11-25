import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Nav from '../components/Nav';

import './index.css'
import 'tachyons/css/tachyons.css';


const Header = () => (
  <div
    style={{
        position: 'absolute',
        width: '100%',
        background: 'rgba(10, 0, 0, 0.5)',
      // marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
          position: 'absolute',
        background: 'rgba(155, 155, 155, 0.0)',
          display: 'flex',
          flexDirection: 'row',
        // margin: '0 auto',
        // width: '100%',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#be4dee',
            textDecoration: 'none',
          }}
        >
          Bright Ideas
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Bright Ideas Digital"
      meta={[
        { name: 'description', content: 'Bright Ideas Digital: We Craft Innovative Experiences' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
