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
          link: {
            type: 'generated-index',
            title: 'リファレンス'
          },
          items: [
            {
              type: 'category',
              label: '関数',
              link: {
                type: 'generated-index',
                title: '関数'
              },
              items: [
                {
                  type: 'doc',
                  label: 'regular',
                  id: 'attendance-management-system/reference/function/regular'
                },
                {
                  type: 'doc',
                  label: 'doGet',
                  id: 'attendance-management-system/reference/function/doGet'
                },
                {
                  type: 'doc',
                  label: 'doPost',
                  id: 'attendance-management-system/reference/function/doPost'
                },
                {
                  type: 'doc',
                  label: 'setEventInfo',
                  id: 'attendance-management-system/reference/function/setEventInfo'
                },
                {
                  type: 'doc',
                  label: 'startEventFlow',
                  id: 'attendance-management-system/reference/function/startEventFlow'
                }
              ]
            },
            {
              type: 'category',
              label: 'クラス',
              link: {
                type: 'generated-index',
                title: 'クラス'
              },
              items: []
            },
            {
              type: 'category',
              label: 'インターフェース',
              link: {
                type: 'generated-index',
                title: 'インターフェース'
              },
              items: []
            }
          ]
        },
        {
          type: 'category',
          label: '機能詳細',
          link: {
            type: 'generated-index',
            title: '機能詳細'
          },
          items: [
            {
              type: 'category',
              label: '関数',
              link: {
                type: 'generated-index',
                title: '関数'
              },
              items: [
                {
                  type: 'doc',
                  label: 'regular',
                  id: 'attendance-management-system/feature/function/regular'
                },
                {
                  type: 'doc',
                  label: 'doGet',
                  id: 'attendance-management-system/feature/function/doGet'
                },
                {
                  type: 'doc',
                  label: 'doPost',
                  id: 'attendance-management-system/feature/function/doPost'
                },
                {
                  type: 'doc',
                  label: 'setEventInfo',
                  id: 'attendance-management-system/feature/function/setEventInfo'
                },
                {
                  type: 'doc',
                  label: 'startEventFlow',
                  id: 'attendance-management-system/feature/function/startEventFlow'
                }
              ]
            },
            {
              type: 'category',
              label: 'クラス',
              link: {
                type: 'generated-index',
                title: 'クラス'
              },
              items: []
            },
            {
              type: 'category',
              label: 'インターフェース',
              link: {
                type: 'generated-index',
                title: 'インターフェース'
              },
              items: []
            }
          ]
        },
        {
          type: 'category',
          label: 'ソースコード',
          link: {
            type: 'generated-index',
            title: 'ソースコード'
          },
          items: [
            {
              type: 'category',
              label: '関数',
              link: {
                type: 'generated-index',
                title: '関数'
              },
              items: [
                {
                  type: 'doc',
                  label: 'regular',
                  id: 'attendance-management-system/source/function/regular'
                },
                {
                  type: 'doc',
                  label: 'doGet',
                  id: 'attendance-management-system/source/function/doGet'
                },
                {
                  type: 'doc',
                  label: 'doPost',
                  id: 'attendance-management-system/source/function/doPost'
                },
                {
                  type: 'doc',
                  label: 'setEventInfo',
                  id: 'attendance-management-system/source/function/setEventInfo'
                },
                {
                  type: 'doc',
                  label: 'startEventFlow',
                  id: 'attendance-management-system/source/function/startEventFlow'
                }
              ]
            }
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
