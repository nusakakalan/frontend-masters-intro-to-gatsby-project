import * as  React from 'react';
import { Link } from 'gatsby';
import Layout  from '../components/layout';

export default function AboutPage() {
  return (
      <Layout title='About This Site' description='More about this site.'>
        <h1>Hello about Gatsby</h1>
        <Link to='/'>Go Back To Home</Link>
      </Layout>
  );
}