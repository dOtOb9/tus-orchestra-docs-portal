import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2b0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '93c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '285'),
            routes: [
              {
                path: '/docs/attendance-management-system/detailsDesign',
                component: ComponentCreator('/docs/attendance-management-system/detailsDesign', '9d1'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/AdminActivityBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/AdminActivityBook', '324'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/AdminEventBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/AdminEventBook', 'cec'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/AdminEventSheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/AdminEventSheet', '5c1'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/AttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/AttendanceBook', '063'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/AttendanceCodeSheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/AttendanceCodeSheet', '4ec'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/AttendanceSheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/AttendanceSheet', '41a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/AttendanceStatus',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/AttendanceStatus', '548'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/Book',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/Book', '219'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/classInfo',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/classInfo', '4fa'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/EventAttendanceSheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/EventAttendanceSheet', '219'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/Member',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/Member', '2a8'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/MemberInfoSheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/MemberInfoSheet', 'e51'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/MemberSheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/MemberSheet', 'd5a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/NormalAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/NormalAttendanceBook', '074'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/ScheduleSheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/ScheduleSheet', '56b'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/Sheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/Sheet', '435'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/SystemBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/SystemBook', 'c54'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/Today',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/Today', '805'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/TuttiAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/TuttiAttendanceBook', '869'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/UserInfoSheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/UserInfoSheet', 'f76'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/verifyAttendance',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/verifyAttendance', 'ad5'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/function/doGet',
                component: ComponentCreator('/docs/attendance-management-system/feature/function/doGet', '768'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/function/doPost',
                component: ComponentCreator('/docs/attendance-management-system/feature/function/doPost', '704'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/function/regular',
                component: ComponentCreator('/docs/attendance-management-system/feature/function/regular', 'c98'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/function/setEventInfo',
                component: ComponentCreator('/docs/attendance-management-system/feature/function/setEventInfo', 'a4a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/function/startEventFlow',
                component: ComponentCreator('/docs/attendance-management-system/feature/function/startEventFlow', '7c0'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/interface/AttendRateData',
                component: ComponentCreator('/docs/attendance-management-system/feature/interface/AttendRateData', '3ab'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/interface/AttendRateInfo',
                component: ComponentCreator('/docs/attendance-management-system/feature/interface/AttendRateInfo', '81e'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/functionDesign',
                component: ComponentCreator('/docs/attendance-management-system/functionDesign', 'e85'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/AdminActivityBook',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/AdminActivityBook', 'a79'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/AdminEventBook',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/AdminEventBook', 'dc5'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/AdminEventSheet',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/AdminEventSheet', '5fd'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/AttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/AttendanceBook', '8e3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/AttendanceCodeSheet',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/AttendanceCodeSheet', '4e0'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/AttendanceSheet',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/AttendanceSheet', 'f90'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/AttendanceStatus',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/AttendanceStatus', '011'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/Book',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/Book', '0cb'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/EventAttendanceSheet',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/EventAttendanceSheet', '08a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/Member',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/Member', '119'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/MemberInfoSheet',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/MemberInfoSheet', '935'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/MemberSheet',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/MemberSheet', 'd9e'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/NormalAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/NormalAttendanceBook', 'bdc'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/ScheduleSheet',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/ScheduleSheet', 'd81'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/Sheet',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/Sheet', 'd4b'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/SystemBook',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/SystemBook', '4d6'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/Today',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/Today', '985'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/TuttiAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/TuttiAttendanceBook', 'e29'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/UserInfoSheet',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/UserInfoSheet', 'eca'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/class/verifyAttendance',
                component: ComponentCreator('/docs/attendance-management-system/reference/class/verifyAttendance', 'b71'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/function/doGet',
                component: ComponentCreator('/docs/attendance-management-system/reference/function/doGet', '6a8'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/function/doPost',
                component: ComponentCreator('/docs/attendance-management-system/reference/function/doPost', '3a5'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/function/regular',
                component: ComponentCreator('/docs/attendance-management-system/reference/function/regular', '8fa'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/function/setEventInfo',
                component: ComponentCreator('/docs/attendance-management-system/reference/function/setEventInfo', 'd8d'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/function/startEventFlow',
                component: ComponentCreator('/docs/attendance-management-system/reference/function/startEventFlow', 'ead'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/interface/AttendRateData',
                component: ComponentCreator('/docs/attendance-management-system/reference/interface/AttendRateData', '5ec'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/reference/interface/AttendRateInfo',
                component: ComponentCreator('/docs/attendance-management-system/reference/interface/AttendRateInfo', '217'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/AdminActivityBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/AdminActivityBook', 'd46'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/AdminEventBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/AdminEventBook', 'b70'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/AdminEventSheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/AdminEventSheet', '1ca'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/AttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/AttendanceBook', '74e'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/AttendanceCodeSheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/AttendanceCodeSheet', '776'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/AttendanceSheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/AttendanceSheet', 'bf1'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/AttendanceStatus',
                component: ComponentCreator('/docs/attendance-management-system/source/class/AttendanceStatus', '5a5'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/Book',
                component: ComponentCreator('/docs/attendance-management-system/source/class/Book', '7d3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/EventAttendanceSheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/EventAttendanceSheet', '30d'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/Member',
                component: ComponentCreator('/docs/attendance-management-system/source/class/Member', '9ba'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/MemberInfoSheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/MemberInfoSheet', 'e1f'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/MemberSheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/MemberSheet', 'a27'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/NormalAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/NormalAttendanceBook', 'fc4'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/ScheduleSheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/ScheduleSheet', 'f48'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/Sheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/Sheet', 'c90'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/SystemBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/SystemBook', 'f15'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/TuttiAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/TuttiAttendanceBook', 'e7f'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/UserInfoSheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/UserInfoSheet', '7b6'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/verifyAttendance',
                component: ComponentCreator('/docs/attendance-management-system/source/class/verifyAttendance', '2f8'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/function/doGet',
                component: ComponentCreator('/docs/attendance-management-system/source/function/doGet', '228'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/function/doPost',
                component: ComponentCreator('/docs/attendance-management-system/source/function/doPost', 'a6a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/function/regular',
                component: ComponentCreator('/docs/attendance-management-system/source/function/regular', '372'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/function/setEventInfo',
                component: ComponentCreator('/docs/attendance-management-system/source/function/setEventInfo', 'd0f'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/function/startEventFlow',
                component: ComponentCreator('/docs/attendance-management-system/source/function/startEventFlow', '3d4'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/interface/AttendRateData',
                component: ComponentCreator('/docs/attendance-management-system/source/interface/AttendRateData', 'c85'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/interface/AttendRateInfo',
                component: ComponentCreator('/docs/attendance-management-system/source/interface/AttendRateInfo', '82e'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/インターフェース',
                component: ComponentCreator('/docs/category/インターフェース', 'e37'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/インターフェース-1',
                component: ComponentCreator('/docs/category/インターフェース-1', '13a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/インターフェース-2',
                component: ComponentCreator('/docs/category/インターフェース-2', '71b'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/クラス',
                component: ComponentCreator('/docs/category/クラス', '312'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/クラス-1',
                component: ComponentCreator('/docs/category/クラス-1', '6fd'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/クラス-2',
                component: ComponentCreator('/docs/category/クラス-2', 'f91'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/ソースコード',
                component: ComponentCreator('/docs/category/ソースコード', 'a07'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/リファレンス',
                component: ComponentCreator('/docs/category/リファレンス', '933'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/category/リファレンス-1',
                component: ComponentCreator('/docs/category/リファレンス-1', '1e9'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/関数',
                component: ComponentCreator('/docs/category/関数', 'e37'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/関数-1',
                component: ComponentCreator('/docs/category/関数-1', '365'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/関数-2',
                component: ComponentCreator('/docs/category/関数-2', 'd06'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/機能詳細',
                component: ComponentCreator('/docs/category/機能詳細', '544'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/category/詳細設計',
                component: ComponentCreator('/docs/category/詳細設計', '685'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/category/目次',
                component: ComponentCreator('/docs/category/目次', '5ae'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/category/目次-1',
                component: ComponentCreator('/docs/category/目次-1', '23d'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/discord-bot/details_design/',
                component: ComponentCreator('/docs/discord-bot/details_design/', '49b'),
                exact: true
              },
              {
                path: '/docs/discord-bot/details_design/environment',
                component: ComponentCreator('/docs/discord-bot/details_design/environment', 'd97'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/discord-bot/details_design/server',
                component: ComponentCreator('/docs/discord-bot/details_design/server', '77a'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/discord-bot/functional_design/',
                component: ComponentCreator('/docs/discord-bot/functional_design/', '563'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/discord-bot/functional_design/message_command',
                component: ComponentCreator('/docs/discord-bot/functional_design/message_command', 'ba7'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/discord-bot/functional_design/others',
                component: ComponentCreator('/docs/discord-bot/functional_design/others', '892'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/discord-bot/functional_design/slash_command/',
                component: ComponentCreator('/docs/discord-bot/functional_design/slash_command/', 'b78'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/discord-bot/functional_design/slash_command/ch',
                component: ComponentCreator('/docs/discord-bot/functional_design/slash_command/ch', '9fe'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/discord-bot/functional_design/slash_command/dm',
                component: ComponentCreator('/docs/discord-bot/functional_design/slash_command/dm', 'a28'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/discord-bot/functional_design/user_command',
                component: ComponentCreator('/docs/discord-bot/functional_design/user_command', 'c15'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/docs/discord-bot/reference/directory',
                component: ComponentCreator('/docs/discord-bot/reference/directory', '253'),
                exact: true,
                sidebar: "discordBotSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2bc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
