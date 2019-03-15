/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Customer 1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/logo-nav.png',
    infoLink: 'https://www.nanocosmos.de',
    pinned: true,
  },
    {
    caption: 'Customer 2',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/logo-nav.png',
    infoLink: 'https://www.nanocosmos.de',
    pinned: true,
  },
    {
    caption: 'Customer 3',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/logo-nav.png',
    infoLink: 'https://www.nanocosmos.de',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Documentation', // Title for your website.
  tagline: 'A website for testing',
  url: 'https://docs.nanocosmos.de/', // Your website URL
  //baseUrl: './', // Base URL for your project */
  //baseUrl: '/docs', // Base URL for your project */
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'nanocosmos-documentaion',
  organizationName: 'nanocosmos GmbH',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'nanoplayer/nanoplayer_introduction', label: 'H5Live Player'},
    {doc: 'cloud', label: 'Cloud'},
    {doc: 'webrtc', label: 'WebRTC'},
    {doc: 'sdks', label: 'Apps and SDKs'},
    {doc: 'faq/encoding_and_streaming', label: 'FAQ'}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/nanocosmos_header_logo.png',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon_nano.png',

  /* Colors for website */
  colors: {
    primaryColor: '#ed7d0e',
    secondaryColor: '#205C3B',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */
  //docsSideNavCollapsible : true,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} nanocosmos GmbH`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
     repoUrl: 'https://github.com/nanocosmos/demo',
};

module.exports = siteConfig;
