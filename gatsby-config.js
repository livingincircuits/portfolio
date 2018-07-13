module.exports = {
  siteMetadata: {
    title: 'Emily Young',
    url: 'https://livingincircuits.co.uk',
    description: 'Emily Young is a UX Designer/Developer from Yorkshire who loves to create clean, simple and inclusive experiences',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-100446901-1',
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 534080,
        sv: 6
      },
    },
  ],
};
