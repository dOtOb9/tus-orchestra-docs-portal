import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tus-orchestra-docs-portal/__docusaurus/debug',
    component: ComponentCreator('/tus-orchestra-docs-portal/__docusaurus/debug', '6f2'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/__docusaurus/debug/config',
    component: ComponentCreator('/tus-orchestra-docs-portal/__docusaurus/debug/config', 'f82'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/__docusaurus/debug/content',
    component: ComponentCreator('/tus-orchestra-docs-portal/__docusaurus/debug/content', '31a'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/__docusaurus/debug/globalData',
    component: ComponentCreator('/tus-orchestra-docs-portal/__docusaurus/debug/globalData', '645'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/__docusaurus/debug/metadata',
    component: ComponentCreator('/tus-orchestra-docs-portal/__docusaurus/debug/metadata', '3c7'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/__docusaurus/debug/registry',
    component: ComponentCreator('/tus-orchestra-docs-portal/__docusaurus/debug/registry', '200'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/__docusaurus/debug/routes',
    component: ComponentCreator('/tus-orchestra-docs-portal/__docusaurus/debug/routes', '3e8'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog', '74a'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/archive',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/archive', 'db2'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/authors',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/authors', 'ea9'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/authors/all-sebastien-lorber-articles', 'e15'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/authors/yangshun',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/authors/yangshun', '47f'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/first-blog-post',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/first-blog-post', '69a'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/long-blog-post',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/long-blog-post', 'e72'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/mdx-blog-post',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/mdx-blog-post', '54f'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/tags',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/tags', '454'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/tags/docusaurus',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/tags/docusaurus', '082'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/tags/facebook',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/tags/facebook', '9b6'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/tags/hello',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/tags/hello', 'd95'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/tags/hola',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/tags/hola', '2e8'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/blog/welcome',
    component: ComponentCreator('/tus-orchestra-docs-portal/blog/welcome', 'c53'),
    exact: true
  },
  {
    path: '/tus-orchestra-docs-portal/docs',
    component: ComponentCreator('/tus-orchestra-docs-portal/docs', '269'),
    routes: [
      {
        path: '/tus-orchestra-docs-portal/docs',
        component: ComponentCreator('/tus-orchestra-docs-portal/docs', 'e0a'),
        routes: [
          {
            path: '/tus-orchestra-docs-portal/docs',
            component: ComponentCreator('/tus-orchestra-docs-portal/docs', '4d0'),
            routes: [
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/detailsDesign',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/detailsDesign', '229'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AdminActivityBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AdminActivityBook', 'a87'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AdminEventBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AdminEventBook', 'a4b'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AdminEventSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AdminEventSheet', '7e1'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AttendanceBook', 'cd4'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AttendanceCodeSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AttendanceCodeSheet', '873'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AttendanceSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AttendanceSheet', '993'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AttendanceStatus',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/AttendanceStatus', '04b'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/Book',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/Book', '8d2'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/classInfo',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/classInfo', '754'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/EventAttendanceSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/EventAttendanceSheet', '346'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/Member',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/Member', '5da'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/MemberInfoSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/MemberInfoSheet', '1f5'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/MemberSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/MemberSheet', '00b'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/NormalAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/NormalAttendanceBook', '5c7'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/ScheduleSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/ScheduleSheet', '175'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/Sheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/Sheet', '39a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/SystemBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/SystemBook', '856'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/Today',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/Today', '350'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/TuttiAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/TuttiAttendanceBook', '723'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/UserInfoSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/UserInfoSheet', 'a25'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/verifyAttendance',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/verifyAttendance', '31c'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/doGet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/doGet', '2b2'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/doPost',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/doPost', '1d3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/regular',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/regular', 'c72'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/setEventInfo',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/setEventInfo', 'dba'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/startEventFlow',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/startEventFlow', '6a4'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/interface/AttendRateData',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/interface/AttendRateData', '963'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/interface/AttendRateInfo',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/interface/AttendRateInfo', 'aef'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/functionDesign',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/functionDesign', 'dab'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/HowToUse',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/HowToUse', 'dd4'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AdminActivityBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AdminActivityBook', 'd0d'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AdminEventBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AdminEventBook', 'eef'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AdminEventSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AdminEventSheet', '8f0'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AttendanceBook', 'aac'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AttendanceCodeSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AttendanceCodeSheet', '3d1'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AttendanceSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AttendanceSheet', 'f80'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AttendanceStatus',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/AttendanceStatus', '09e'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/Book',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/Book', '3c6'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/EventAttendanceSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/EventAttendanceSheet', 'ecf'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/Member',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/Member', '9fb'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/MemberInfoSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/MemberInfoSheet', '094'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/MemberSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/MemberSheet', '965'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/NormalAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/NormalAttendanceBook', '236'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/ScheduleSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/ScheduleSheet', 'e5a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/Sheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/Sheet', '640'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/SystemBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/SystemBook', 'ce3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/Today',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/Today', '714'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/TuttiAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/TuttiAttendanceBook', '3fa'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/UserInfoSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/UserInfoSheet', '1b8'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/verifyAttendance',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/class/verifyAttendance', '06a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/function/doGet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/function/doGet', 'fe1'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/function/doPost',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/function/doPost', 'aa0'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/function/regular',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/function/regular', '392'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/function/setEventInfo',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/function/setEventInfo', '43a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/function/startEventFlow',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/function/startEventFlow', '356'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/interface/AttendRateData',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/interface/AttendRateData', '97d'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/reference/interface/AttendRateInfo',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/reference/interface/AttendRateInfo', '8fa'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AdminActivityBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AdminActivityBook', '623'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AdminEventBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AdminEventBook', '583'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AdminEventSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AdminEventSheet', '507'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AttendanceBook', 'b21'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AttendanceCodeSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AttendanceCodeSheet', '166'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AttendanceSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AttendanceSheet', 'f7a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AttendanceStatus',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/AttendanceStatus', 'b46'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Book',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Book', '201'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/EventAttendanceSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/EventAttendanceSheet', '844'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Member',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Member', '94c'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/MemberInfoSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/MemberInfoSheet', 'bfa'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/MemberSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/MemberSheet', 'f62'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/NormalAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/NormalAttendanceBook', '938'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/ScheduleSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/ScheduleSheet', 'deb'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Sheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Sheet', '5ea'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/SystemBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/SystemBook', '70c'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/TuttiAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/TuttiAttendanceBook', 'd35'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/UserInfoSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/UserInfoSheet', '3f0'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/verifyAttendance',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/verifyAttendance', 'd67'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/doGet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/doGet', 'a73'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/doPost',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/doPost', '6f0'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/regular',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/regular', '815'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/setEventInfo',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/setEventInfo', 'f02'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/startEventFlow',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/startEventFlow', '6db'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/interface/AttendRateData',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/interface/AttendRateData', 'f8b'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/interface/AttendRateInfo',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/interface/AttendRateInfo', '4b3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/インターフェース',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/インターフェース', 'b7e'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/インターフェース-1',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/インターフェース-1', '40f'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/インターフェース-2',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/インターフェース-2', 'a9c'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/クラス',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/クラス', '04c'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/クラス-1',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/クラス-1', 'ca9'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/クラス-2',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/クラス-2', 'a98'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/ソースコード',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/ソースコード', 'c0f'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/リファレンス',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/リファレンス', '4f7'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/リファレンス-1',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/リファレンス-1', '4a5'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/関数',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/関数', 'e98'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/関数-1',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/関数-1', 'd8e'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/関数-2',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/関数-2', 'b18'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/機能詳細',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/機能詳細', '8e7'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/詳細設計',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/詳細設計', 'c6c'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/目次',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/目次', 'cda'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/category/目次-1',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/目次-1', '843'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/details_design/',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/details_design/', '224'),
                exact: true
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/details_design/environment',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/details_design/environment', '98f'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/details_design/server',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/details_design/server', '500'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/functional_design/',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/functional_design/', '634'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/functional_design/message_command',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/functional_design/message_command', 'a04'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/functional_design/others',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/functional_design/others', '2d1'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/functional_design/slash_command/',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/functional_design/slash_command/', '5fe'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/functional_design/slash_command/ch',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/functional_design/slash_command/ch', 'b08'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/functional_design/slash_command/dm',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/functional_design/slash_command/dm', 'b7e'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/functional_design/user_command',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/functional_design/user_command', 'dca'),
                exact: true,
                sidebar: "discordBotSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/discord-bot/reference/directory',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/discord-bot/reference/directory', 'ba5'),
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
    path: '/tus-orchestra-docs-portal/',
    component: ComponentCreator('/tus-orchestra-docs-portal/', 'c5c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
