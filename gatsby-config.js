module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.com',
    title: 'Frontend masters Intro To Gatsby',
    description: 'Frontend masters Intro to Gatsby course project',
    image: 'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    //this set of plugins is to enable creating MDX blog posts from the src/posts folder
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),

        },
      },
    },
    //end of MDX configurations
  ],
};