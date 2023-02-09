// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Joey Ma',
  tagline: 'Software Engineer',
  url: 'https://yoyoyojoe.github.io',
  // GitHub Pages adds a trailing slash to Docusaurus URLs by default
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/jam.png',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yoyoyojoe', // Usually your GitHub org/user name.
  projectName: 'yoyoyojoe.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yoyoyojoe/yoyoyojoe.github.io/tree/main/',
          exclude: [ '**/README.md**', '**/CONTRIBUTING.md**', '**/CODE_OF_CONDUCT.md**', '**/TYPES_OF_CONTRIBUTIONS.md**' ]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yoyoyojoe/yoyoyojoe.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Joey Ma',
        logo: {
          alt: 'My Site Logo',
          src: 'img/jam.png',
          height: 32,
          width: 32,
        },
        items: [
          {to: '/about', label: 'About', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'Docs (Alpha)',
            docId: 'about',
            position: 'left',
            type: 'doc',
          },
          {
            label: 'Catch',
            docId: 'catch',
            position: 'left',
            to: 'https://github.com/yoyoyojoe/catch',
          },
          {
            label: 'Recoilize',
            docId: 'recoilize',
            position: 'left',
            to: 'https://github.com/open-source-labs/Recoilize',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/yoyoyojoe/',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yoyoyojoe',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/joeyma',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CodesmithX (CSX) Slack',
                href: 'https://codesmithx.slack.com/join/shared_invite/zt-1l0ofirua-S57oCIKkC~IvYL0i1tUFfg#/shared-invite/email',
              },
              {
                label: 'Hack for LA',
                href: 'https://www.hackforla.org/join',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/16330123/yoyoyojoe',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joey Ma. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      // todo: add an algolia search bar
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.APP_ID,
        // Public API key: it is safe to commit it
        apiKey: process.env.API_KEY,
        indexName: process.env.INDEX_NAME,
        // Optional: see doc section below
        contextualSearch: true,
        // searchPagePath: 'search',
        debug: false
      },
    }),
};

module.exports = config;
