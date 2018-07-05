module.exports = {
  siteMetadata: {
    title: 'Networktables',
  },
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`,
    },
  }],
};
