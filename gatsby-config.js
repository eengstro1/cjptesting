require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Define site URL here
let URL;
if (process.env.NODE_ENV === 'production') {
  URL = 'https://cjpdeploy.netlify.com';
} else {
  URL = 'http://localhost:8000';
}

module.exports = {
  siteMetadata: {
    siteName: 'Dog Fur For Sale',
    siteUrl: URL
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_API_TOKEN,
        autopop: true,
        js: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js',
        styles: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css'
      }
    },
  ],
}
