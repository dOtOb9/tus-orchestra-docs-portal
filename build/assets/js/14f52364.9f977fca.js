"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7024,6853,2478,6795],{9391:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var d=s(4848),l=s(8453),r=s(7707),i=s(663);const c={},t=void 0,h={id:"attendance-management-system/feature/class/AttendanceSheet",title:"AttendanceSheet",description:"---",source:"@site/docs/attendance-management-system/feature/class/AttendanceSheet.md",sourceDirName:"attendance-management-system/feature/class",slug:"/attendance-management-system/feature/class/AttendanceSheet",permalink:"/docs/attendance-management-system/feature/class/AttendanceSheet",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/attendance-management-system/feature/class/AttendanceSheet.md",tags:[],version:"current",frontMatter:{},sidebar:"attendanceManagementSystemSidebar",previous:{title:"AttendanceCodeSheet",permalink:"/docs/attendance-management-system/feature/class/AttendanceCodeSheet"},next:{title:"AttendanceStatus",permalink:"/docs/attendance-management-system/feature/class/AttendanceStatus"}},a={},o=[{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf",level:2},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9",level:2},{value:"editMemberInfoValues ( memberRow )",id:"editmemberinfovalues--memberrow-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024",level:4},{value:"createAttendanceCol ( date, memberIds )",id:"createattendancecol--date-memberids-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-1",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-1",level:4},{value:"setAttend ( id, datePos )",id:"setattend--id-datepos-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-2",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-2",level:4},{value:"setAbsense ( dateColNumber )",id:"setabsense--datecolnumber-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-3",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-3",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-4",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-3",level:4},{value:"setOffMembers ( dateColNumber, memberIds )",id:"setoffmembers--datecolnumber-memberids-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-4",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-4",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-5",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-4",level:4},{value:"getMemberAttendanceRateAndBase ( id )",id:"getmemberattendancerateandbase--id-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-5",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-5",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-6",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-5",level:4},{value:"\u89aa\u30af\u30e9\u30b9",id:"\u89aa\u30af\u30e9\u30b9",level:2},{value:"MembersSheet",id:"memberssheet",level:3},...i.toc];function x(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.A,{component:"AttendanceSheet",type:"class",project:"attendance-management-system"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"\u30e1\u30bd\u30c3\u30c9",children:"\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,d.jsx)(n.h3,{id:"editmemberinfovalues--memberrow-",children:"editMemberInfoValues ( memberRow )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"public"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u30e1\u30f3\u30d0\u30fc\u306e\u60c5\u5831\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\u65b0\u3057\u3044\u884c\u3092\u8ffd\u52a0\u3057\u3001\u51fa\u5e2d\u56de\u6570\u3001\u51fa\u5e2d\u7387\u306a\u3069\u306e\u8a08\u7b97\u5f0f\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"memberRow"})," :",(0,d.jsx)(n.code,{children:"Array<string>"})]}),"\n",(0,d.jsx)(n.p,{children:"\u66f4\u65b0\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306e\u60c5\u5831\u3092\u542b\u3080\u914d\u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"createattendancecol--date-memberids-",children:"createAttendanceCol ( date, memberIds )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"public"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-1",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u65e5\u4ed8\u306b\u5bfe\u5fdc\u3059\u308b\u5217\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u5217\u306e\u4f4d\u7f6e\u3092\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"date"})," :",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6d3b\u52d5\u65e5\u306e\u65e5\u4ed8\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"memberIds"})," :",(0,d.jsx)(n.code,{children:"Array<string>"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4e57\u308a\u756a\u306e",(0,d.jsx)(n.code,{children:"Discord ID"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-1",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"number"})}),"\n",(0,d.jsx)(n.p,{children:"\u751f\u6210\u3057\u305f\u5217\u306e\u4f4d\u7f6e\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"setattend--id-datepos-",children:"setAttend ( id, datePos )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"public"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-2",children:"\u6a5f\u80fd"}),"\n",(0,d.jsxs)(n.p,{children:["\u30e1\u30f3\u30d0\u30fc\u306e\u51fa\u5e2d\u72b6\u6cc1\u3092\u300c\u6b20\u5e2d\u300d\u304b\u3089\u300c\u51fa\u5e2d\u300d\u306b\u5909\u66f4\u3057\u307e\u3059\u3002\u5909\u66f4\u304c\u6210\u529f\u3057\u305f\u5834\u5408\u306f ",(0,d.jsx)(n.code,{children:"true"})," \u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"id"})," :",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:"\u51fa\u5e2d\u3092\u8a2d\u5b9a\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306eID\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"datePos"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6d3b\u52d5\u65e5\u5217\u306e\u4f4d\u7f6e\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-2",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"boolean"})}),"\n",(0,d.jsxs)(n.p,{children:["\u51fa\u5e2d\u72b6\u6cc1\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306f ",(0,d.jsx)(n.code,{children:"true"}),"\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f ",(0,d.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"setabsense--datecolnumber-",children:"setAbsense ( dateColNumber )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-3",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"private"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-3",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u5217\u306b\u5bfe\u3057\u3066\u5168\u30e1\u30f3\u30d0\u30fc\u306e\u51fa\u5e2d\u72b6\u6cc1\u3092\u300c\u6b20\u5e2d\u300d\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-4",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dateColNumber"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6b20\u5e2d\u3092\u8a2d\u5b9a\u3059\u308b\u5217\u306e\u4f4d\u7f6e\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-3",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"setoffmembers--datecolnumber-memberids-",children:"setOffMembers ( dateColNumber, memberIds )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-4",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"private"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-4",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u5217\u306b\u5bfe\u3057\u3066\u964d\u308a\u756a\u306e\u51fa\u5e2d\u72b6\u6cc1\u3092\u300c\u964d\u308a\u756a\u300d\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-5",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dateColNumber"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u964d\u308a\u756a\u3092\u8a2d\u5b9a\u3059\u308b\u5217\u306e\u4f4d\u7f6e\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"memberIds"})," :",(0,d.jsx)(n.code,{children:"Array<string>"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u964d\u308a\u756a\u306e",(0,d.jsx)(n.code,{children:"Discord ID"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-4",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057\u3002"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"getmemberattendancerateandbase--id-",children:"getMemberAttendanceRateAndBase ( id )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-5",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"public"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-5",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u30e1\u30f3\u30d0\u30fc\u306e\u51fa\u5e2d\u7387\u3068\u57fa\u6e96\u51fa\u5e2d\u56de\u6570\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-6",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"id"})," :",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:"\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306eID\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-5",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"{ rate: string, base: string }"})}),"\n",(0,d.jsx)(n.p,{children:"\u30e1\u30f3\u30d0\u30fc\u306e\u51fa\u5e2d\u7387\u3068\u57fa\u6e96\u51fa\u5e2d\u56de\u6570\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"\u89aa\u30af\u30e9\u30b9",children:"\u89aa\u30af\u30e9\u30b9"}),"\n",(0,d.jsx)(n.h3,{id:"memberssheet",children:"MembersSheet"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(i.default,{}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},663:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var d=s(4848),l=s(8453),r=s(7707),i=s(4486);const c={},t=void 0,h={id:"attendance-management-system/feature/class/MembersSheet",title:"MembersSheet",description:"---",source:"@site/docs/attendance-management-system/feature/class/MembersSheet.md",sourceDirName:"attendance-management-system/feature/class",slug:"/attendance-management-system/feature/class/MembersSheet",permalink:"/docs/attendance-management-system/feature/class/MembersSheet",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/attendance-management-system/feature/class/MembersSheet.md",tags:[],version:"current",frontMatter:{},sidebar:"attendanceManagementSystemSidebar",previous:{title:"MembersInfoSheet",permalink:"/docs/attendance-management-system/feature/class/MembersInfoSheet"},next:{title:"PercussionAttendanceBook",permalink:"/docs/attendance-management-system/feature/class/PercussionAttendanceBook"}},a={},o=[{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9",level:2},{value:"editMember( memberRow )",id:"editmember-memberrow-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024",level:4},{value:"addMember( memberRow )",id:"addmember-memberrow-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-1",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-1",level:4},{value:"searchMember( id )",id:"searchmember-id-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-2",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-2",level:4},{value:"\u89aa\u30af\u30e9\u30b9",id:"\u89aa\u30af\u30e9\u30b9",level:2},{value:"Sheet",id:"sheet",level:3},...i.toc];function x(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.A,{component:"MembersSheet",type:"class",project:"attendance-management-system"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"\u30e1\u30bd\u30c3\u30c9",children:"\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,d.jsx)(n.h3,{id:"editmember-memberrow-",children:"editMember( memberRow )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"public"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u30e1\u30f3\u30d0\u30fc\u60c5\u5831\u3092\u7de8\u96c6\u3057\u307e\u3059\u3002\u6307\u5b9a\u3055\u308c\u305f\u30e1\u30f3\u30d0\u30fc\u304c\u65e2\u5b58\u306e\u30e1\u30f3\u30d0\u30fc\u3068\u3057\u3066\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u3001\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc\u3068\u3057\u3066\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"memberRow"})," :",(0,d.jsx)(n.code,{children:"Array<string>"})]}),"\n",(0,d.jsx)(n.p,{children:"\u7de8\u96c6\u307e\u305f\u306f\u8ffd\u52a0\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306e\u30c7\u30fc\u30bf\u3092\u542b\u3080\u914d\u5217\u3002\u914d\u5217\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306f\u30e1\u30f3\u30d0\u30fc\u306e\u5c5e\u6027\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"addmember-memberrow-",children:"addMember( memberRow )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"private"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-1",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc\u3092\u30b7\u30fc\u30c8\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"memberRow"})," :",(0,d.jsx)(n.code,{children:"Array<string>"})]}),"\n",(0,d.jsx)(n.p,{children:"\u8ffd\u52a0\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306e\u30c7\u30fc\u30bf\u3092\u542b\u3080\u914d\u5217\u3002\u914d\u5217\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306f\u30e1\u30f3\u30d0\u30fc\u306e\u5c5e\u6027\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-1",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"searchmember-id-",children:"searchMember( id )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"protected"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-2",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u6307\u5b9a\u3055\u308c\u305f ID \u3092\u6301\u3064\u30e1\u30f3\u30d0\u30fc\u3092\u30b7\u30fc\u30c8\u304b\u3089\u691c\u7d22\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"id"})," :",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:"\u691c\u7d22\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306e ID\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-2",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"string[] | undefined"})}),"\n",(0,d.jsxs)(n.p,{children:["\u30e1\u30f3\u30d0\u30fc\u304c\u898b\u3064\u304b\u3063\u305f\u5834\u5408\u306f\u305d\u306e\u884c\u306e\u30c7\u30fc\u30bf\u3092\u542b\u3080\u914d\u5217\u3001\u898b\u3064\u304b\u3089\u306a\u3051\u308c\u3070 ",(0,d.jsx)(n.code,{children:"undefined"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"\u89aa\u30af\u30e9\u30b9",children:"\u89aa\u30af\u30e9\u30b9"}),"\n",(0,d.jsx)(n.h3,{id:"sheet",children:"Sheet"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(i.default,{}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},4486:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var d=s(4848),l=s(8453),r=s(7707),i=s(7408);const c={},t=void 0,h={id:"attendance-management-system/feature/class/Sheet",title:"Sheet",description:"---",source:"@site/docs/attendance-management-system/feature/class/Sheet.md",sourceDirName:"attendance-management-system/feature/class",slug:"/attendance-management-system/feature/class/Sheet",permalink:"/docs/attendance-management-system/feature/class/Sheet",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/attendance-management-system/feature/class/Sheet.md",tags:[],version:"current",frontMatter:{},sidebar:"attendanceManagementSystemSidebar",previous:{title:"SetAttendance",permalink:"/docs/attendance-management-system/feature/class/SetAttendance"},next:{title:"StringsAttendanceBook",permalink:"/docs/attendance-management-system/feature/class/StringsAttendanceBook"}},a={},o=[{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"sheet",id:"sheet",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",level:4},{value:"\u30c7\u30fc\u30bf\u578b",id:"\u30c7\u30fc\u30bf\u578b",level:4},...i.toc,{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",level:4},{value:"data",id:"data",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",level:4},{value:"\u30c7\u30fc\u30bf\u578b",id:"\u30c7\u30fc\u30bf\u578b-1",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-1",level:4},{value:"SheetName",id:"sheetname",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",level:4},{value:"\u30c7\u30fc\u30bf\u578b",id:"\u30c7\u30fc\u30bf\u578b-2",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-2",level:4},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9",level:2},{value:"constructor ( sheet )",id:"constructor--sheet-",level:3},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-3",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf",level:4},...i.toc,{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024",level:4},{value:"createColumnsLeft ( value, cols, rows )",id:"createcolumnsleft--value-cols-rows-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-3",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-4",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-1",level:4},{value:"setValue ( row, col, value )",id:"setvalue--row-col-value-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-4",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-5",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-2",level:4},{value:"setValues ( startRow, startCol, NumRows, NumCols, values )",id:"setvalues--startrow-startcol-numrows-numcols-values-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-5",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-6",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-3",level:4},{value:"appendRow( row )",id:"appendrow-row-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-6",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-7",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-4",level:4},{value:"sortCol ( row, type )",id:"sortcol--row-type-",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-7",level:4},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd-8",level:4},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-5",level:4},{value:"\u623b\u308a\u5024",id:"\u623b\u308a\u5024-4",level:4}];function x(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.A,{component:"Sheet",type:"class",project:"attendance-management-system"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,d.jsx)(n.h3,{id:"sheet",children:"sheet"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"private"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30c7\u30fc\u30bf\u578b",children:"\u30c7\u30fc\u30bf\u578b"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GoogleAppsScript.Spreadsheet.Sheet"})}),"\n",(0,d.jsx)(i.default,{}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u64cd\u4f5c\u5bfe\u8c61\u306e Google Sheets \u306e\u30b7\u30fc\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"data",children:"data"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-1",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"protected"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30c7\u30fc\u30bf\u578b-1",children:"\u30c7\u30fc\u30bf\u578b"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"string[][]"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-1",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u30b7\u30fc\u30c8\u4e0a\u306e\u30c7\u30fc\u30bf\u3092\u8868\u3057\u305f\u4e8c\u6b21\u5143\u914d\u5217\u3002"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"sheetname",children:"SheetName"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-2",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"protected"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30c7\u30fc\u30bf\u578b-2",children:"\u30c7\u30fc\u30bf\u578b"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"string"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-2",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u30b7\u30fc\u30c8\u306e\u540d\u524d\u3002"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"\u30e1\u30bd\u30c3\u30c9",children:"\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,d.jsx)(n.h3,{id:"constructor--sheet-",children:"constructor ( sheet )"}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-3",children:"\u6a5f\u80fd"}),"\n",(0,d.jsxs)(n.p,{children:["\u30b7\u30fc\u30c8\u3092\u53d6\u5f97\u3057\u3066",(0,d.jsx)(n.code,{children:"Sheet"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u683c\u7d0d\u3057\u3001\u305d\u306e\u540d\u524d\u3092",(0,d.jsx)(n.code,{children:"SheetName"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u683c\u7d0d\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30b7\u30fc\u30c8\u306e\u30c7\u30fc\u30bf\u306e\u4e8c\u6b21\u5143\u914d\u5217\u306b\u884c\u756a\u53f7\u3068\u5217\u756a\u53f7\u3092\u8ffd\u52a0\u3057\u3066 ",(0,d.jsx)(n.code,{children:"data"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"sheet"})," :",(0,d.jsx)(n.code,{children:"GoogleAppsScript.Spreadsheet.Sheet"})]}),"\n",(0,d.jsx)(n.p,{children:"\u53d6\u5f97\u3059\u308b\u30b7\u30fc\u30c8\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(i.default,{}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"createcolumnsleft--value-cols-rows-",children:"createColumnsLeft ( value, cols, rows )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-3",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"protected"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-4",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u5217\u306e\u5de6\u306b\u65b0\u3057\u3044\u5217\u3092\u8ffd\u52a0\u3057\u3001\u6700\u521d\u306e\u30bb\u30eb\u306b\u6307\u5b9a\u3057\u305f\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"value"})," :",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:"\u65b0\u3057\u304f\u8ffd\u52a0\u3057\u305f\u5217\u306e\u6700\u521d\u306e\u30bb\u30eb\u306b\u8a2d\u5b9a\u3059\u308b\u5024\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"col"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5217\u3092\u8ffd\u52a0\u3059\u308b\u4f4d\u7f6e\uff081\u304b\u3089\u59cb\u307e\u308b\uff09\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"rows"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u8ffd\u52a0\u3059\u308b\u5217\u306e\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-1",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"number"})}),"\n",(0,d.jsx)(n.p,{children:"\u66f4\u65b0\u5f8c\u306e\u5217\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"setvalue--row-col-value-",children:"setValue ( row, col, value )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-4",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"protected"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-5",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u30bb\u30eb\u306b\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"row"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u30bb\u30eb\u306e\u884c\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"col"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u30bb\u30eb\u306e\u5217\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"value"})," :",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u5024\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-2",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"setvalues--startrow-startcol-numrows-numcols-values-",children:"setValues ( startRow, startCol, NumRows, NumCols, values )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-5",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"protected"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-6",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305f\u7bc4\u56f2\u306e\u30bb\u30eb\u306b\u8907\u6570\u306e\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"startRow"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u958b\u59cb\u884c\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"startCol"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u958b\u59cb\u5217\u756a\u53f7\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"NumRows"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u884c\u6570\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"NumCols"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u7bc4\u56f2\u306e\u5217\u6570\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"values"})," :",(0,d.jsx)(n.code,{children:"Array<Array<string>>"})]}),"\n",(0,d.jsx)(n.p,{children:"\u8a2d\u5b9a\u3059\u308b\u5024\u306e 2 \u6b21\u5143\u914d\u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-3",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"appendrow-row-",children:"appendRow( row )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-6",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"protected"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-7",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u65b0\u3057\u3044\u884c\u3092\u30b7\u30fc\u30c8\u306e\u6700\u5f8c\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-4",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"row"})," :",(0,d.jsx)(n.code,{children:"Array<string>"})]}),"\n",(0,d.jsx)(n.p,{children:"\u8ffd\u52a0\u3059\u308b\u884c\u306e\u30c7\u30fc\u30bf\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"sortcol--row-type-",children:"sortCol ( row, type )"}),"\n",(0,d.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50-7",children:"\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"protected"})}),"\n",(0,d.jsx)(n.h4,{id:"\u6a5f\u80fd-8",children:"\u6a5f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u7279\u5b9a\u306e\u5217\u3092\u30bd\u30fc\u30c8\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-5",children:"\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ColNumber"})," :",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"\u30bd\u30fc\u30c8\u3059\u308b\u884c\u4f4d\u7f6e"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"type"})," :",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6607\u9806\u306e\u5834\u5408\u306f",(0,d.jsx)(n.code,{children:"true"}),"\u3001\u964d\u9806\u306e\u5834\u5408\u306f",(0,d.jsx)(n.code,{children:"false"}),"\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f",(0,d.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u623b\u308a\u5024-4",children:"\u623b\u308a\u5024"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u3057"})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},7408:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var d=s(4848),l=s(8453);const r={},i=void 0,c={id:"components/GoogleAppsScript/Sheet",title:"Sheet",description:"GoogleAppsScript.Spreadsheet.Sheet\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306fApps Script\u304c\u63d0\u4f9b\u3059\u308b\u3001\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u306e\u30b7\u30fc\u30c8\u304c\u6271\u3046\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002",source:"@site/docs/components/GoogleAppsScript/Sheet.md",sourceDirName:"components/GoogleAppsScript",slug:"/components/GoogleAppsScript/Sheet",permalink:"/docs/components/GoogleAppsScript/Sheet",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/components/GoogleAppsScript/Sheet.md",tags:[],version:"current",frontMatter:{}},t={},h=[];function a(e){const n={admonition:"admonition",code:"code",p:"p",...(0,l.R)(),...e.components};return(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"GoogleAppsScript.Spreadsheet.Sheet"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306fApps Script\u304c\u63d0\u4f9b\u3059\u308b\u3001\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u306e\u30b7\u30fc\u30c8\u304c\u6271\u3046\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"]})})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},7707:(e,n,s)=>{s.d(n,{A:()=>r});s(6540);var d=s(9900),l=s(4848);const r=e=>{let{component:n,type:s,project:r}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(d.A,{href:`/docs/${r}/source/${s}/${n}`,children:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",backgroundColor:"#25c2a0"}),(0,l.jsx)("span",{style:{margin:"5px"}}),(0,l.jsx)(d.A,{href:`/docs/${r}/philosophy/${s}/${n}`,children:"\u8a2d\u8a08\u601d\u60f3",backgroundColor:"#0080ff"})]})}},9900:(e,n,s)=>{s.d(n,{A:()=>l});s(6540);var d=s(4848);const l=e=>{let{href:n,children:s,backgroundColor:l}=e;return(0,d.jsx)("a",{href:n,rel:"noopener noreferrer",style:{backgroundColor:l||"#25c2a0",borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:s})}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var d=s(6540);const l={},r=d.createContext(l);function i(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);