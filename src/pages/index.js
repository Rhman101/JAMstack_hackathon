import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to Ruan Huysen's online site!</p>
    <p>Ruan Huysen admits: I have no idea what Gatsby is... YET. Mwhahahahaaaaa!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
