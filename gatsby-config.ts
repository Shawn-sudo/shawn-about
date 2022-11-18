import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `About Seihyun Lee`,
    siteUrl: `https://seihyun.atrable.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `About Seihyun Lee`,
        short_name: `About Seihyun Lee`,
        start_url: `/`,
        background_color: `#69f0ae`,
        theme_color: `#69f0ae`,
        display: `standalone`,
        icon: "src/assets/profile/profile2.png",
      },
    },
  ],
};

export default config;
