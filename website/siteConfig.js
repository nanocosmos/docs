/*
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

var configs = [];
var configGithub = {
  url: 'https://docs.nanocosmos.de', // Your website URL
  baseUrl: '/', // Base URL for your project - should be absolute */

  // For github.io type URLs, you would set the url and baseUrl like:
  //url: 'https://nanocosmos.github.io', // Your website URL
  //baseUrl: '/docs/', // Base URL for your project */

  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  cname: 'nanocosmos.github.io',
};

const configGitlab = {
  url: 'https://doc.pages.nanocosmos.de', // Your website URL
  baseUrl: '/docs/docs/', // Base URL for your project - should be absolute */
  cname: 'nanocosmos.github.io',
};

const configDocs1 = {
  url: 'https://docs1.nanocosmos.de', // Your website URL
  baseUrl: '/', // Base URL for your project - should be absolute */
  cname: 'nanocosmos.github.io',
};

var configs = [];
configs["gitlab"] = configGitlab;
configs["github"] = configGithub;
configs["docs1"] = configDocs1;

// override from environment variable
// example: DOCS_ENV=github && docusaurus-build
var configName   = process.env.DOCS_ENV;
if(!configName || configName.length==0) {
  //configName = "docs1";
  configName = "gitlab";
  configName = "github";
}

console.log("Using config " + configName);
var myConfig = configs[configName];

const siteConfig = {
  title: 'nanocosmos Documentation', // Title for your website.	
  tagline: 'nanoStream Cloud & H5Live Player - Around The World in 1 Second',
  title: 'nanocosmos Documentation',  

  url: myConfig.url, // Your website URL
  baseUrl: myConfig.baseUrl, // Base URL for your project - should be absolute */
  
  cname: myConfig.cname,

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'nanocosmos',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'cloud/cloud_overview', label: 'nanoStream Cloud'},
    //{doc: 'cloud', label: 'Cloud'},
    {doc: 'nanoplayer/nanoplayer_introduction', label: 'H5Live Player'},
    {doc: 'webrtc/nanostream_webrtc_introduction', label: 'nanoStream Webcaster'},
    //{doc: 'webrtc', label: 'WebRTC'},
    {doc: 'nanostream/nanostream', label: 'nanoStream Apps and SDKs'},
    {doc: 'samples/samples', label: 'Samples'},
    {doc: 'faq/faq_streaming', label: 'FAQ'}
  ],

  gaTrackingId: 'UA-552140-1',

  /* path to images for header/footer */
  headerIcon: 'img/nanocosmos_header_logo.png',
  footerIcon: 'img/nanocosmos_header_logo.png',
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
  copyright: `Copyright © ${new Date().getFullYear()} nanocosmos GmbH - doc version ${new Date()}`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', '/js/search.js'],

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
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
     repoUrl: 'https://github.com/nanocosmos/docs',

     editUrl: 'https://github.com/nanocosmos/docs/tree/master/docs/'
};

console.log("Using config " + configName + "  URL: " + siteConfig.url);

module.exports = siteConfig;
