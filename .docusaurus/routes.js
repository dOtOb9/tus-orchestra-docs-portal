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
    component: ComponentCreator('/tus-orchestra-docs-portal/docs', 'e5e'),
    routes: [
      {
        path: '/tus-orchestra-docs-portal/docs',
        component: ComponentCreator('/tus-orchestra-docs-portal/docs', '5e7'),
        routes: [
          {
            path: '/tus-orchestra-docs-portal/docs',
            component: ComponentCreator('/tus-orchestra-docs-portal/docs', '99d'),
            routes: [
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/abstract',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/abstract', 'fac'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/BrussAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/BrussAttendanceBook', '2d3'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/MembersInfoSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/MembersInfoSheet', '4a3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/MembersSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/MembersSheet', 'f65'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/PercussionAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/PercussionAttendanceBook', 'db3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/Property',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/Property', '65d'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/StringsAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/StringsAttendanceBook', 'f97'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/WoodwindAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/class/WoodwindAttendanceBook', 'dcf'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/registerAttendance',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/feature/function/registerAttendance', 'db9'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/AdminActivityBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/AdminActivityBook', '211'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/AttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/AttendanceBook', '9fd'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/AttendanceCodeSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/AttendanceCodeSheet', '3ba'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/AttendanceSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/AttendanceSheet', '4c3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/Book',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/Book', '32c'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/BrussAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/BrussAttendanceBook', '5f4'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/MembersInfoSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/MembersInfoSheet', '378'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/MembersSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/MembersSheet', 'eb7'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/PercussionAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/PercussionAttendanceBook', '23f'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/Property',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/Property', 'da0'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/ScheduleSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/ScheduleSheet', '09a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/Sheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/Sheet', '56a'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/StringsAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/StringsAttendanceBook', '7d3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/SystemBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/SystemBook', 'dcb'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/Today',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/Today', 'df5'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/TuttiAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/TuttiAttendanceBook', '8d0'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/UserInfoSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/UserInfoSheet', '4d6'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/WoodwindAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/class/WoodwindAttendanceBook', '2dc'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/function/registerAttendance',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/function/registerAttendance', '2f4'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/interface/AttendRateData',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/interface/AttendRateData', 'ed4'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/interface/AttendRateInfo',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/philosophy/interface/AttendRateInfo', 'eb0'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/BrussAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/BrussAttendanceBook', '430'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/MembersInfoSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/MembersInfoSheet', '6e8'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/MembersSheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/MembersSheet', '7d3'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/PercussionAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/PercussionAttendanceBook', '987'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
              },
              {
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Property',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Property', '7db'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/StringsAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/StringsAttendanceBook', 'a98'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Today',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Today', '826'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/WoodwindAttendanceBook',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/WoodwindAttendanceBook', 'b8e'),
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
                path: '/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/registerAttendance',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/attendance-management-system/source/function/registerAttendance', 'a63'),
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
                path: '/tus-orchestra-docs-portal/docs/category/設計思想',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/category/設計思想', 'f06'),
                exact: true,
                sidebar: "attendanceManagementSystemSidebar"
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
                path: '/tus-orchestra-docs-portal/docs/components/GoogleAppsScript/ScriptProperty',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/components/GoogleAppsScript/ScriptProperty', 'b9b'),
                exact: true
              },
              {
                path: '/tus-orchestra-docs-portal/docs/components/GoogleAppsScript/Sheet',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/components/GoogleAppsScript/Sheet', 'c7c'),
                exact: true
              },
              {
                path: '/tus-orchestra-docs-portal/docs/components/TypeScript/ConstructorDescription',
                component: ComponentCreator('/tus-orchestra-docs-portal/docs/components/TypeScript/ConstructorDescription', '19d'),
                exact: true
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
    component: ComponentCreator('/tus-orchestra-docs-portal/', '230'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
