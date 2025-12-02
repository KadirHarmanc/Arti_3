import React from 'react'
import { Helmet } from 'react-helmet-async'
import './NotFound.css'

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 | Error</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="not-found-page">
        <div className="not-found-content">
          <span className="not-found-code">404</span>
          <span className="not-found-divider">|</span>
          <span className="not-found-text">Error</span>
        </div>
      </div>
    </>
  )
}

export default NotFound

