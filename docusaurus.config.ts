import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '東京理科大学管弦楽団ドキュメントポータル',
  tagline: 'ドキュメントポータル',
  favicon: 'img/tus_orchestra_logo.png',

  // Set the production url of your site here
  url: 'https://dOtOb9.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tus-orchestra-docs-portal/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dOtOb9', // Usually your GitHub org/user name.
  projectName: 'tus-orchestra-docs-portal', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja-jp',
    locales: ['ja-jp'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '東京理科大学管弦楽団',
      logo: {
        alt: 'My Site Logo',
        src: 'img/tus_orchestra_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'discordBotSidebar',
          position: 'left',
          label: 'Discordボット',
        },
        {
          type: 'docSidebar',
          sidebarId: 'attendanceManagementSystemSidebar',
          position: 'left',
          label: '出欠管理システム',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/dOtOb9/tus-orchestra-docs-portal',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Infomation',
          items: [
            {
              label: 'GPL-3.0 License',
              href: 'https://github.com/dOtOb9/tus-orchestra-docs-portal/blob/main/LICENSE',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/TusOrche',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/tusorche/',
            }
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
              label: 'GitHub',
              href: 'https://github.com/dOtOb9/tus-orchestra-docs-portal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TUS Orchestra Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
