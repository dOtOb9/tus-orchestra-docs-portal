"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2478,6795],{4486:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var l=s(4848),d=s(8453),r=s(7707),c=s(7408);const i={},t=void 0,o={id:"attendance-management-system/feature/class/Sheet",title:"Sheet",description:"---",source:"@site/docs/attendance-management-system/feature/class/Sheet.md",sourceDirName:"attendance-management-system/feature/class",slug:"/attendance-management-system/feature/class/Sheet",permalink:"/docs/attendance-management-system/feature/class/Sheet",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/attendance-management-system/feature/class/Sheet.md",tags:[],version:"current",frontMatter:{},sidebar:"attendanceManagementSystemSidebar",previous:{title:"SetAttendance",permalink:"/docs/attendance-management-system/feature/class/SetAttendance"},next:{title:"StringsAttendanceBook",permalink:"/docs/attendance-management-system/feature/class/StringsAttendanceBook"}},h={},a=[{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"sheet",id:"sheet",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",level:4},{value:"\u30c7\u30fc\u30bf\u578b",id:"\u30c7\u30fc\u30bf\u578b",level:4},...c.toc,{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",level:4},{value:"data",id:"data",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",level:4},{value:"\u30c7\u30fc\u30bf\u578b",id:"\u30c7\u30fc\u30bf\u578b-1",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-1",level:4},{value:"SheetName",id:"sheetname",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",level:4},{value:"\u30c7\u30fc\u30bf\u578b",id:"\u30c7\u30fc\u30bf\u578b-2",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-2",level:4},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9",level:2},{value:"constructor ( sheet )",id:"constructor--sheet-",level:3},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-3",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf",level:4},...c.toc,{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024",level:4},{value:"createColumnsLeft ( value, cols, rows )",id:"createcolumnsleft--value-cols-rows-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-3",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-4",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-1",level:4},{value:"setValue ( row, col, value )",id:"setvalue--row-col-value-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-4",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-5",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-2",level:4},{value:"setValues ( startRow, startCol, NumRows, NumCols, values )",id:"setvalues--startrow-startcol-numrows-numcols-values-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-5",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-6",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-3",level:4},{value:"appendRow( row )",id:"appendrow-row-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-6",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-7",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-4",level:4},{value:"sortCol ( row, type )",id:"sortcol--row-type-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-7",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-8",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-5",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-4",level:4}];function x(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.A,{component:"Sheet",type:"class",project:"attendance-management-system"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,l.jsx)(n.h3,{id:"sheet",children:"sheet"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"private"})}),"\n",(0,l.jsx)(n.h4,{id:"\u30c7\u30fc\u30bf\u578b",children:"\u30c7\u30fc\u30bf\u578b"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GoogleAppsScript.Spreadsheet.Sheet"})}),"\n",(0,l.jsx)(c.default,{}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u64cd\u4f5c\u5bfe\u8c61\u306e Google Sheets \u306e\u30b7\u30fc\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"data",children:"data"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u30c7\u30fc\u30bf\u578b-1",children:"\u30c7\u30fc\u30bf\u578b"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"string[][]"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-1",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u30b7\u30fc\u30c8\u4e0a\u306e\u30c7\u30fc\u30bf\u3092\u8868\u3057\u305f\u4e8c\u6b21\u5143\u914d\u5217\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"sheetname",children:"SheetName"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u30c7\u30fc\u30bf\u578b-2",children:"\u30c7\u30fc\u30bf\u578b"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"string"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-2",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u30b7\u30fc\u30c8\u306e\u540d\u524d\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u30e1\u30bd\u30c3\u30c9",children:"\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,l.jsx)(n.h3,{id:"constructor--sheet-",children:"constructor ( sheet )"}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-3",children:"\u6a5f\u80fd"}),"\n",(0,l.jsxs)(n.p,{children:["\u30b7\u30fc\u30c8\u3092\u53d6\u5f97\u3057\u3066",(0,l.jsx)(n.code,{children:"Sheet"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u683c\u7d0d\u3057\u3001\u305d\u306e\u540d\u524d\u3092",(0,l.jsx)(n.code,{children:"SheetName"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u683c\u7d0d\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30b7\u30fc\u30c8\u306e\u30c7\u30fc\u30bf\u306e\u4e8c\u6b21\u5143\u914d\u5217\u306b\u884c\u756a\u53f7\u3068\u5217\u756a\u53f7\u3092\u8ffd\u52a0\u3057\u3066 ",(0,l.jsx)(n.code,{children:"data"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sheet"})," :",(0,l.jsx)(n.code,{children:"GoogleAppsScript.Spreadsheet.Sheet"})]}),"\n",(0,l.jsx)(n.p,{children:"\u53d6\u5f97\u3059\u308b\u30b7\u30fc\u30c8\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(c.default,{}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"createcolumnsleft--value-cols-rows-",children:"createColumnsLeft ( value, cols, rows )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-3",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-4",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u5217\u306e\u5de6\u306b\u65b0\u3057\u3044\u5217\u3092\u8ffd\u52a0\u3057\u3001\u6700\u521d\u306e\u30bb\u30eb\u306b\u6307\u5b9a\u3057\u305f\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"value"})," :",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsx)(n.p,{children:"\u65b0\u3057\u304f\u8ffd\u52a0\u3057\u305f\u5217\u306e\u6700\u521d\u306e\u30bb\u30eb\u306b\u8a2d\u5b9a\u3059\u308b\u5024\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"col"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5217\u3092\u8ffd\u52a0\u3059\u308b\u4f4d\u7f6e\uff081\u304b\u3089\u59cb\u307e\u308b\uff09\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"rows"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8ffd\u52a0\u3059\u308b\u5217\u306e\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-1",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"number"})}),"\n",(0,l.jsx)(n.p,{children:"\u66f4\u65b0\u5f8c\u306e\u5217\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"setvalue--row-col-value-",children:"setValue ( row, col, value )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-4",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-5",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u30bb\u30eb\u306b\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"row"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u30bb\u30eb\u306e\u884c\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"col"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u30bb\u30eb\u306e\u5217\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"value"})," :",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u5024\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-2",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"setvalues--startrow-startcol-numrows-numcols-values-",children:"setValues ( startRow, startCol, NumRows, NumCols, values )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-5",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-6",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u7bc4\u56f2\u306e\u30bb\u30eb\u306b\u8907\u6570\u306e\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"startRow"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u958b\u59cb\u884c\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"startCol"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u958b\u59cb\u5217\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"NumRows"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u884c\u6570\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"NumCols"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u5217\u6570\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"values"})," :",(0,l.jsx)(n.code,{children:"Array<Array<string>>"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u5024\u306e 2 \u6b21\u5143\u914d\u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-3",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"appendrow-row-",children:"appendRow( row )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-6",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-7",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u65b0\u3057\u3044\u884c\u3092\u30b7\u30fc\u30c8\u306e\u6700\u5f8c\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-4",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"row"})," :",(0,l.jsx)(n.code,{children:"Array<string>"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8ffd\u52a0\u3059\u308b\u884c\u306e\u30c7\u30fc\u30bf\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"sortcol--row-type-",children:"sortCol ( row, type )"}),"\n",(0,l.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-7",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"protected"})}),"\n",(0,l.jsx)(n.h4,{id:"\u6a5f\u80fd-8",children:"\u6a5f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u7279\u5b9a\u306e\u5217\u3092\u30bd\u30fc\u30c8\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-5",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ColNumber"})," :",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsx)(n.p,{children:"\u30bd\u30fc\u30c8\u3059\u308b\u884c\u4f4d\u7f6e"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"type"})," :",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u6607\u9806\u306e\u5834\u5408\u306f",(0,l.jsx)(n.code,{children:"true"}),"\u3001\u964d\u9806\u306e\u5834\u5408\u306f",(0,l.jsx)(n.code,{children:"false"}),"\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f",(0,l.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u623b\u308a\u5024-4",children:"\u623b\u308a\u5024"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u3057"})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},7408:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var l=s(4848),d=s(8453);const r={},c=void 0,i={id:"components/GoogleAppsScript/Sheet",title:"Sheet",description:"GoogleAppsScript.Spreadsheet.Sheet\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306fApps Script\u304c\u63d0\u4f9b\u3059\u308b\u3001\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u306e\u30b7\u30fc\u30c8\u304c\u6271\u3046\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002",source:"@site/docs/components/GoogleAppsScript/Sheet.md",sourceDirName:"components/GoogleAppsScript",slug:"/components/GoogleAppsScript/Sheet",permalink:"/docs/components/GoogleAppsScript/Sheet",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/components/GoogleAppsScript/Sheet.md",tags:[],version:"current",frontMatter:{}},t={},o=[];function h(e){const n={admonition:"admonition",code:"code",p:"p",...(0,d.R)(),...e.components};return(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"GoogleAppsScript.Spreadsheet.Sheet"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306fApps Script\u304c\u63d0\u4f9b\u3059\u308b\u3001\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u306e\u30b7\u30fc\u30c8\u304c\u6271\u3046\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"]})})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7707:(e,n,s)=>{s.d(n,{A:()=>r});s(6540);var l=s(9900),d=s(4848);const r=e=>{let{component:n,type:s,project:r}=e;return(0,d.jsxs)("div",{children:[(0,d.jsx)(l.A,{href:`/tus-orchestra-docs-portal/docs/${r}/source/${s}/${n}`,children:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",backgroundColor:"#25c2a0"}),(0,d.jsx)("span",{style:{margin:"5px"}}),(0,d.jsx)(l.A,{href:`/tus-orchestra-docs-portal/docs/${r}/philosophy/${s}/${n}`,children:"\u8a2d\u8a08\u601d\u60f3",backgroundColor:"#0080ff"})]})}},9900:(e,n,s)=>{s.d(n,{A:()=>d});s(6540);var l=s(4848);const d=e=>{let{href:n,children:s,backgroundColor:d}=e;return(0,l.jsx)("a",{href:n,rel:"noopener noreferrer",style:{backgroundColor:d||"#25c2a0",borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:s})}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var l=s(6540);const d={},r=l.createContext(d);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);