import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  discordBotSidebar: [
    {
      type: 'html',
      value: 'Discord ボット',
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: '目次',
      collapsed: false,
      link: { 
        type: 'generated-index',
        title: '目次',
      },
      items: [
        {
          type: 'category',
          label: '基本設計',
          description: "このセクションでは、機能や使い方について解説します。",
          link: {
            type: 'doc',
            id: 'discord-bot/functional_design/index',
          },
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'スラッシュコマンド',
              link: {
                type: 'doc',
                id: 'discord-bot/functional_design/slash_command/index',
              },
              items: [
                {
                  type: 'doc',
                  label: '/ch グループ',
                  id: 'discord-bot/functional_design/slash_command/ch',
                },
                {
                  type: 'doc',
                  label: '/dm グループ',
                  id: 'discord-bot/functional_design/slash_command/dm'
                }
              ]
            },
            {
              type: 'doc',
              label: 'メッセージコマンド',
              id: 'discord-bot/functional_design/message_command',
            },
            {
              type: 'doc',
              label: 'ユーザーコマンド',
              id: 'discord-bot/functional_design/user_command'
            },
            {
              type: 'doc',
              label: 'その他の機能',
              id: 'discord-bot/functional_design/others'
            }
          ],
        },
        {
          type: 'category',
          label: '詳細設計',
          description: "このセクションでは、ソフトウェアの構築方法について解説します。",
          link: {
            type: 'generated-index',
            title: '詳細設計'
          },
          collapsible: true,
          items: [
            {
              type: 'doc',
              id: 'discord-bot/details_design/environment',
            },
            {
              type: 'doc',
              id: 'discord-bot/details_design/server'
            }
          ],
        },
        {
          type: 'category',
          label: 'リファレンス',
          description: "このセクションは、コードの参照にご活用ください。",
          link: {
            type: 'generated-index',
            title: 'リファレンス', 
          },
          collapsible: true,
          items: [
            {
              type: 'doc',
              label: 'ディレクトリ構造',
              id: 'discord-bot/reference/directory'
            },
          ]
        }
      ]
    },
    {
      type: 'link',
      label: 'MITライセンス',
      href: 'https://github.com/dOtOb9/tus-orchestra-discord-bot/blob/main/LICENSE',
    },
    {
      type: 'link',
      label: 'GitHubリポジトリ',
      href: 'https://github.com/dOtOb9/tus-orchestra-discord-bot',
    },
  ],
  
  attendanceManagementSystemSidebar: [
    {
      type: 'html',
      value: '出欠管理システム',
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: '目次',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: '目次'
      },
      items: [
        {
          type: "doc",
          label: "基本設計",
          id: 'attendance-management-system/functionDesign',
        },
        {
          type: "doc",
          label: "詳細設計",
          id: "attendance-management-system/detailsDesign",
        },
        {
          type: "category",
          label: "リファレンス",
          description: "このセクションは、コードの参照にご活用ください。",
          link: {
            type: 'generated-index',
            title: 'リファレンス'
          },
          items: [
            {
              type: 'doc',
              label: '関数',
              id: 'attendance-management-system/reference/functionInfo'
            },
            {
              type: 'doc',
              label: 'インターフェース',
              id: 'attendance-management-system/reference/interfaceInfo'
            },
            {
              type: 'doc',
              label: 'クラス',
              id: 'attendance-management-system/reference/classInfo'
            },
          ]
        }
      ]
    },
    {
      type: 'link',
      label: 'MITライセンス',
      href: 'https://github.com/dOtOb9/attendance-management-system-for-tus-orchestra/blob/main/LICENSE',
    },
    {
      type: 'link',
      label: 'GitHubリポジトリ',
      href: 'https://github.com/dOtOb9/attendance-management-system-for-tus-orchestra',
    },
  ]
}

export default sidebars;
