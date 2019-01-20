module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Billys Blog', // Navigation and Site Title
  titleAlt: 'Billys Blog', // Title for JSONLD
  description: 'Random Billy thoughts by Billy',
  headline: 'Random Billy thoughts by Billy', // Headline for schema.org JSONLD
  url: 'https://sugarobjects.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Billy', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Billy', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
