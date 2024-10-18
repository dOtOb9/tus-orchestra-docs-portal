"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5808,2478,6795],{4461:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var l=s(4848),d=s(8453),i=s(7707),r=s(4486);const c={},t=void 0,h={id:"attendance-management-system/feature/class/ScheduleSheet",title:"ScheduleSheet",description:"---",source:"@site/docs/attendance-management-system/feature/class/ScheduleSheet.md",sourceDirName:"attendance-management-system/feature/class",slug:"/attendance-management-system/feature/class/ScheduleSheet",permalink:"/docs/attendance-management-system/feature/class/ScheduleSheet",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/attendance-management-system/feature/class/ScheduleSheet.md",tags:[],version:"current",frontMatter:{},sidebar:"attendanceManagementSystemSidebar",previous:{title:"Property",permalink:"/docs/attendance-management-system/feature/class/Property"},next:{title:"SetAttendance",permalink:"/docs/attendance-management-system/feature/class/SetAttendance"}},a={},o=[{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9",level:2},{value:"getNowTermRow",id:"getnowtermrow",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024",level:4},{value:"setActivityDate ( memberIds )",id:"setactivitydate--memberids-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-1",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-1",level:4},{value:"isActivityDate ( today )",id:"isactivitydate--today-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-2",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-2",level:4},{value:"prepareActivityDate ( date, section, slots )",id:"prepareactivitydate--date-section-slots-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-3",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-3",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-3",level:4},{value:"\u89aa\u30af\u30e9\u30b9",id:"\u89aa\u30af\u30e9\u30b9",level:2},{value:"Sheet",id:"sheet",level:3},...r.toc];function x(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{component:"ScheduleSheet",type:"class",project:"attendance-management-system"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u30e1\u30bd\u30c3\u30c9",children:"\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,l.jsx)(n.h3,{id:"getnowtermrow",children:"getNowTermRow"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"public"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u73fe\u5728\u306e\u7df4\u7fd2\u30b3\u30de\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u4eca\u65e5\u306e\u65e5\u4ed8\u3068\u6642\u9593\u5e2f\uff08\u5348\u524d\u307e\u305f\u306f\u5348\u5f8c\uff09\u306b\u57fa\u3065\u3044\u3066\u3001\u8a72\u5f53\u3059\u308b\u884c\u3092\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Array<Array<string>>"})}),"\n",(0,l.jsx)(n.p,{children:"\u73fe\u5728\u306e\u7df4\u7fd2\u30b3\u30de\u306b\u8a72\u5f53\u3059\u308b\u884c\u306e\u30c7\u30fc\u30bf\u3092\u542b\u3080 2 \u6b21\u5143\u914d\u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"setactivitydate--memberids-",children:"setActivityDate ( memberIds )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"public"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-1",children:"\u6a5f\u80fd"}),"\n",(0,l.jsxs)(n.p,{children:["\u5217\u540d\u304c\u7a7a\u767d\u306e\u884c\u3092\u53d6\u5f97\u3057\u3001\u901a\u5e38\u7df4\u7fd2\u307e\u305f\u306f Tutti \u7df4\u7fd2\u306b\u5bfe\u3057\u3066\u6d3b\u52d5\u65e5\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u5404\u7df4\u7fd2\u306e\u66f2\u540d\u306b\u57fa\u3065\u3044\u3066\u3001\u5bfe\u5fdc\u3059\u308b\u51fa\u6b20\u30b7\u30fc\u30c8\u306b\u6d3b\u52d5\u65e5\u3092\u8a2d\u5b9a\u3057\u3001\u305d\u306e\u5217\u306e\u4f4d\u7f6e\u3092",(0,l.jsx)(n.code,{children:"\u7df4\u7fd2\u4e88\u5b9a"}),"\u30b7\u30fc\u30c8\u8a18\u9332\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["memberIds: ",(0,l.jsx)(n.code,{children:"MemberIdsByTuneName"})]}),"\n",(0,l.jsx)(n.p,{children:"\u66f2\u6bce\u306e\u4e57\u308a\u756a\u3092\u8868\u3059\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-1",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"isactivitydate--today-",children:"isActivityDate ( today )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"public"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-2",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u4eca\u65e5\u304c\u6d3b\u52d5\u65e5\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"today"})," :",(0,l.jsx)(n.code,{children:"Today"})]}),"\n",(0,l.jsx)(n.p,{children:"\u4eca\u65e5\u306e\u65e5\u4ed8\u3092\u8868\u3059\u30af\u30e9\u30b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-2",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"boolean"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4eca\u65e5\u304c\u6d3b\u52d5\u65e5\u3067\u3042\u308c\u3070 ",(0,l.jsx)(n.code,{children:"true"}),"\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u3070 ",(0,l.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"prepareactivitydate--date-section-slots-",children:"prepareActivityDate ( date, section, slots )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-3",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"public"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-3",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u65e5\u4ed8\u3001\u30bb\u30af\u30b7\u30e7\u30f3\u3001Tutti \u7df4\u7fd2\u306e\u6709\u7121\u3001\u304a\u3088\u3073\u30b9\u30ed\u30c3\u30c8\u306b\u57fa\u3065\u3044\u3066\u65b0\u3057\u3044\u6d3b\u52d5\u65e5\u3092\u30b7\u30fc\u30c8\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"date"})," :",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsx)(n.p,{children:"\u6d3b\u52d5\u65e5\u306e\u65e5\u4ed8\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"section"})," :",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsx)(n.p,{children:"\u6d3b\u52d5\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"slots"})," :",(0,l.jsx)(n.code,{children:"Array<string>"})]}),"\n",(0,l.jsx)(n.p,{children:"\u30b9\u30ed\u30c3\u30c8\u60c5\u5831\u306e\u914d\u5217\u3002\u5404\u30b9\u30ed\u30c3\u30c8\u306b\u5bfe\u3057\u3066\u65b0\u3057\u3044\u884c\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-3",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u89aa\u30af\u30e9\u30b9",children:"\u89aa\u30af\u30e9\u30b9"}),"\n",(0,l.jsx)(n.h3,{id:"sheet",children:"Sheet"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(r.default,{}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},4486:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var l=s(4848),d=s(8453),i=s(7707),r=s(7408);const c={},t=void 0,h={id:"attendance-management-system/feature/class/Sheet",title:"Sheet",description:"---",source:"@site/docs/attendance-management-system/feature/class/Sheet.md",sourceDirName:"attendance-management-system/feature/class",slug:"/attendance-management-system/feature/class/Sheet",permalink:"/docs/attendance-management-system/feature/class/Sheet",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/attendance-management-system/feature/class/Sheet.md",tags:[],version:"current",frontMatter:{},sidebar:"attendanceManagementSystemSidebar",previous:{title:"SetAttendance",permalink:"/docs/attendance-management-system/feature/class/SetAttendance"},next:{title:"StringsAttendanceBook",permalink:"/docs/attendance-management-system/feature/class/StringsAttendanceBook"}},a={},o=[{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"sheet",id:"sheet",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",level:4},{value:"\u30c7\u30fc\u30bf\u578b",id:"\u30c7\u30fc\u30bf\u578b",level:4},...r.toc,{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",level:4},{value:"data",id:"data",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",level:4},{value:"\u30c7\u30fc\u30bf\u578b",id:"\u30c7\u30fc\u30bf\u578b-1",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-1",level:4},{value:"SheetName",id:"sheetname",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",level:4},{value:"\u30c7\u30fc\u30bf\u578b",id:"\u30c7\u30fc\u30bf\u578b-2",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-2",level:4},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9",level:2},{value:"constructor ( sheet )",id:"constructor--sheet-",level:3},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-3",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf",level:4},...r.toc,{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024",level:4},{value:"createColumnsLeft ( value, cols, rows )",id:"createcolumnsleft--value-cols-rows-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-3",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-4",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-1",level:4},{value:"setValue ( row, col, value )",id:"setvalue--row-col-value-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-4",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-5",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-2",level:4},{value:"setValues ( startRow, startCol, NumRows, NumCols, values )",id:"setvalues--startrow-startcol-numrows-numcols-values-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-5",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-6",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-3",level:4},{value:"appendRow( row )",id:"appendrow-row-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-6",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-7",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-4",level:4},{value:"sortCol ( row, type )",id:"sortcol--row-type-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-7",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-8",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-5",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-4",level:4}];function x(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{component:"Sheet",type:"class",project:"attendance-management-system"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,l.jsx)(n.h3,{id:"sheet",children:"sheet"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"private"})}),"\n",(0,l.jsx)(n.h4,{id:"\u30c7\u30fc\u30bf\u578b",children:"\u30c7\u30fc\u30bf\u578b"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GoogleAppsScript.Spreadsheet.Sheet"})}),"\n",(0,l.jsx)(r.default,{}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u64cd\u4f5c\u5bfe\u8c61\u306e Google Sheets \u306e\u30b7\u30fc\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"data",children:"data"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u30c7\u30fc\u30bf\u578b-1",children:"\u30c7\u30fc\u30bf\u578b"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"string[][]"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-1",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u30b7\u30fc\u30c8\u4e0a\u306e\u30c7\u30fc\u30bf\u3092\u8868\u3057\u305f\u4e8c\u6b21\u5143\u914d\u5217\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"sheetname",children:"SheetName"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u30c7\u30fc\u30bf\u578b-2",children:"\u30c7\u30fc\u30bf\u578b"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"string"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-2",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u30b7\u30fc\u30c8\u306e\u540d\u524d\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u30e1\u30bd\u30c3\u30c9",children:"\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,l.jsx)(n.h3,{id:"constructor--sheet-",children:"constructor ( sheet )"}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-3",children:"\u6a5f\u80fd"}),"\n",(0,l.jsxs)(n.p,{children:["\u30b7\u30fc\u30c8\u3092\u53d6\u5f97\u3057\u3066",(0,l.jsx)(n.code,{children:"Sheet"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u683c\u7d0d\u3057\u3001\u305d\u306e\u540d\u524d\u3092",(0,l.jsx)(n.code,{children:"SheetName"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u683c\u7d0d\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30b7\u30fc\u30c8\u306e\u30c7\u30fc\u30bf\u306e\u4e8c\u6b21\u5143\u914d\u5217\u306b\u884c\u756a\u53f7\u3068\u5217\u756a\u53f7\u3092\u8ffd\u52a0\u3057\u3066 ",(0,l.jsx)(n.code,{children:"data"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sheet"})," :",(0,l.jsx)(n.code,{children:"GoogleAppsScript.Spreadsheet.Sheet"})]}),"\n",(0,l.jsx)(n.p,{children:"\u53d6\u5f97\u3059\u308b\u30b7\u30fc\u30c8\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(r.default,{}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"createcolumnsleft--value-cols-rows-",children:"createColumnsLeft ( value, cols, rows )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-3",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-4",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u5217\u306e\u5de6\u306b\u65b0\u3057\u3044\u5217\u3092\u8ffd\u52a0\u3057\u3001\u6700\u521d\u306e\u30bb\u30eb\u306b\u6307\u5b9a\u3057\u305f\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"value"})," :",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsx)(n.p,{children:"\u65b0\u3057\u304f\u8ffd\u52a0\u3057\u305f\u5217\u306e\u6700\u521d\u306e\u30bb\u30eb\u306b\u8a2d\u5b9a\u3059\u308b\u5024\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"col"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5217\u3092\u8ffd\u52a0\u3059\u308b\u4f4d\u7f6e\uff081\u304b\u3089\u59cb\u307e\u308b\uff09\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"rows"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8ffd\u52a0\u3059\u308b\u5217\u306e\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-1",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"number"})}),"\n",(0,l.jsx)(n.p,{children:"\u66f4\u65b0\u5f8c\u306e\u5217\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"setvalue--row-col-value-",children:"setValue ( row, col, value )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-4",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-5",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u30bb\u30eb\u306b\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"row"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u30bb\u30eb\u306e\u884c\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"col"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u30bb\u30eb\u306e\u5217\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"value"})," :",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u5024\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-2",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"setvalues--startrow-startcol-numrows-numcols-values-",children:"setValues ( startRow, startCol, NumRows, NumCols, values )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-5",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-6",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u7bc4\u56f2\u306e\u30bb\u30eb\u306b\u8907\u6570\u306e\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"startRow"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u958b\u59cb\u884c\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"startCol"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u958b\u59cb\u5217\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"NumRows"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u884c\u6570\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"NumCols"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u5217\u6570\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"values"})," :",(0,l.jsx)(n.code,{children:"Array<Array<string>>"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u5024\u306e 2 \u6b21\u5143\u914d\u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-3",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"appendrow-row-",children:"appendRow( row )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-6",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-7",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u65b0\u3057\u3044\u884c\u3092\u30b7\u30fc\u30c8\u306e\u6700\u5f8c\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-4",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"row"})," :",(0,l.jsx)(n.code,{children:"Array<string>"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8ffd\u52a0\u3059\u308b\u884c\u306e\u30c7\u30fc\u30bf\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"sortcol--row-type-",children:"sortCol ( row, type )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-7",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-8",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u7279\u5b9a\u306e\u5217\u3092\u30bd\u30fc\u30c8\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-5",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ColNumber"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u30bd\u30fc\u30c8\u3059\u308b\u884c\u4f4d\u7f6e"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"type"})," :",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u6607\u9806\u306e\u5834\u5408\u306f",(0,l.jsx)(n.code,{children:"true"}),"\u3001\u964d\u9806\u306e\u5834\u5408\u306f",(0,l.jsx)(n.code,{children:"false"}),"\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f",(0,l.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-4",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},7408:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var l=s(4848),d=s(8453);const i={},r=void 0,c={id:"components/GoogleAppsScript/Sheet",title:"Sheet",description:"GoogleAppsScript.Spreadsheet.Sheet\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306fApps Script\u304c\u63d0\u4f9b\u3059\u308b\u3001\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u306e\u30b7\u30fc\u30c8\u304c\u6271\u3046\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002",source:"@site/docs/components/GoogleAppsScript/Sheet.md",sourceDirName:"components/GoogleAppsScript",slug:"/components/GoogleAppsScript/Sheet",permalink:"/docs/components/GoogleAppsScript/Sheet",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/components/GoogleAppsScript/Sheet.md",tags:[],version:"current",frontMatter:{}},t={},h=[];function a(e){const n={admonition:"admonition",code:"code",p:"p",...(0,d.R)(),...e.components};return(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"GoogleAppsScript.Spreadsheet.Sheet"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306fApps Script\u304c\u63d0\u4f9b\u3059\u308b\u3001\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u306e\u30b7\u30fc\u30c8\u304c\u6271\u3046\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"]})})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},7707:(e,n,s)=>{s.d(n,{A:()=>i});s(6540);var l=s(9900),d=s(4848);const i=e=>{let{component:n,type:s,project:i}=e;return(0,d.jsxs)("div",{children:[(0,d.jsx)(l.A,{href:`/docs/${i}/source/${s}/${n}`,children:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",backgroundColor:"#25c2a0"}),(0,d.jsx)("span",{style:{margin:"5px"}}),(0,d.jsx)(l.A,{href:`/docs/${i}/philosophy/${s}/${n}`,children:"\u8a2d\u8a08\u601d\u60f3",backgroundColor:"#0080ff"})]})}},9900:(e,n,s)=>{s.d(n,{A:()=>d});s(6540);var l=s(4848);const d=e=>{let{href:n,children:s,backgroundColor:d}=e;return(0,l.jsx)("a",{href:n,rel:"noopener noreferrer",style:{backgroundColor:d||"#25c2a0",borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:s})}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var l=s(6540);const d={},i=l.createContext(d);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);