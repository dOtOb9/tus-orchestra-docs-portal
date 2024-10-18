import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs', 'ee7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2ad'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f3d'),
            routes: [
              {
                path: '/docs/attendance-management-system/detailsDesign',
                component: ComponentCreator('/docs/attendance-management-system/detailsDesign', '9d1'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/AdminBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/AdminBook', '4e6'),
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
                path: '/docs/attendance-management-system/feature/class/BrussAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/BrussAttendanceBook', '22e'),
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
                path: '/docs/attendance-management-system/feature/class/MembersInfoSheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/MembersInfoSheet', '029'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/MembersSheet',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/MembersSheet', 'c66'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/PercussionAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/PercussionAttendanceBook', '078'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/feature/class/Property',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/Property', '9d8'),
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
                path: '/docs/attendance-management-system/feature/class/SetAttendance',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/SetAttendance', '341'),
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
                path: '/docs/attendance-management-system/feature/class/StringsAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/StringsAttendanceBook', '449'),
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
                path: '/docs/attendance-management-system/feature/class/WoodwindAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/feature/class/WoodwindAttendanceBook', '5f1'),
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
                path: '/docs/attendance-management-system/feature/function/registerAttendance',
                component: ComponentCreator('/docs/attendance-management-system/feature/function/registerAttendance', 'c0a'),
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
                path: '/docs/attendance-management-system/guide',
                component: ComponentCreator('/docs/attendance-management-system/guide', 'e66'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/AdminBook',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/AdminBook', '32f'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/AttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/AttendanceBook', '360'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/AttendanceCodeSheet',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/AttendanceCodeSheet', '8f3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/AttendanceSheet',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/AttendanceSheet', '619'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/AttendanceStatus',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/AttendanceStatus', 'aa7'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/Book',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/Book', '93b'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/BrussAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/BrussAttendanceBook', '245'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/Member',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/Member', '290'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/MembersInfoSheet',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/MembersInfoSheet', 'ed5'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/MembersSheet',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/MembersSheet', '2cf'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/PercussionAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/PercussionAttendanceBook', '3ba'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/Property',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/Property', 'cc4'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/ScheduleSheet',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/ScheduleSheet', '7c8'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/SetAttendance',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/SetAttendance', '8ee'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/Sheet',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/Sheet', '93f'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/StringsAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/StringsAttendanceBook', '6c4'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/Today',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/Today', '7f7'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/TuttiAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/TuttiAttendanceBook', '72a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/UserInfoSheet',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/UserInfoSheet', '4f1'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/class/WoodwindAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/class/WoodwindAttendanceBook', '46e'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/function/doGet',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/function/doGet', '294'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/function/doPost',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/function/doPost', '2d2'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/function/registerAttendance',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/function/registerAttendance', '34a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/interface/AttendRateData',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/interface/AttendRateData', '909'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/philosophy/interface/AttendRateInfo',
                component: ComponentCreator('/docs/attendance-management-system/philosophy/interface/AttendRateInfo', '9bb'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/AdminBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/AdminBook', '705'),
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
                path: '/docs/attendance-management-system/source/class/BrussAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/BrussAttendanceBook', '4cf'),
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
                path: '/docs/attendance-management-system/source/class/MembersInfoSheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/MembersInfoSheet', 'ea3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/MembersSheet',
                component: ComponentCreator('/docs/attendance-management-system/source/class/MembersSheet', 'd53'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/PercussionAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/PercussionAttendanceBook', '944'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/Property',
                component: ComponentCreator('/docs/attendance-management-system/source/class/Property', 'b4c'),
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
                path: '/docs/attendance-management-system/source/class/SetAttendance',
                component: ComponentCreator('/docs/attendance-management-system/source/class/SetAttendance', '977'),
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
                path: '/docs/attendance-management-system/source/class/StringsAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/StringsAttendanceBook', '70a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/docs/attendance-management-system/source/class/Today',
                component: ComponentCreator('/docs/attendance-management-system/source/class/Today', '019'),
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
                path: '/docs/attendance-management-system/source/class/WoodwindAttendanceBook',
                component: ComponentCreator('/docs/attendance-management-system/source/class/WoodwindAttendanceBook', '4cc'),
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
                path: '/docs/attendance-management-system/source/function/registerAttendance',
                component: ComponentCreator('/docs/attendance-management-system/source/function/registerAttendance', '296'),
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
                path: '/docs/category/設計思想',
                component: ComponentCreator('/docs/category/設計思想', 'b83'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
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
                path: '/docs/components/GoogleAppsScript/ScriptProperty',
                component: ComponentCreator('/docs/components/GoogleAppsScript/ScriptProperty', '1ac'),
                exact: true
              },
              {
                path: '/docs/components/GoogleAppsScript/Sheet',
                component: ComponentCreator('/docs/components/GoogleAppsScript/Sheet', '100'),
                exact: true
              },
              {
                path: '/docs/components/TypeScript/ConstructorDescription',
                component: ComponentCreator('/docs/components/TypeScript/ConstructorDescription', '03c'),
                exact: true
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
                path: '/docs/discord-bot/functional_design/slash_command/dev',
                component: ComponentCreator('/docs/discord-bot/functional_design/slash_command/dev', 'e2b'),
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
                path: '/docs/discord-bot/functional_design/slash_command/others',
                component: ComponentCreator('/docs/discord-bot/functional_design/slash_command/others', '247'),
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
