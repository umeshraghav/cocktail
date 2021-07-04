import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-cotainer">
        <h1>404 Error Occured </h1>

        <Link to="/" className="btn btn-primary"> Back Home
        </Link>
      </div>
    </section>
  )
}

export default Error
