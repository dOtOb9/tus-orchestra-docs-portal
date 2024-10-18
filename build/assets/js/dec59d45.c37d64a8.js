"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9892],{5090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var s=n(4848),r=n(8453),a=n(5146);const o={},c=void 0,d={id:"attendance-management-system/source/class/Member",title:"Member",description:"---",source:"@site/docs/attendance-management-system/source/class/Member.md",sourceDirName:"attendance-management-system/source/class",slug:"/attendance-management-system/source/class/Member",permalink:"/docs/attendance-management-system/source/class/Member",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/attendance-management-system/source/class/Member.md",tags:[],version:"current",frontMatter:{},sidebar:"attendanceManagementSystemSidebar",previous:{title:"EventAttendanceSheet",permalink:"/docs/attendance-management-system/source/class/EventAttendanceSheet"},next:{title:"MembersInfoSheet",permalink:"/docs/attendance-management-system/source/class/MembersInfoSheet"}},i={},m=[];function l(e){const t={code:"code",hr:"hr",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{component:"Member",type:"class",project:"attendance-management-system"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="/src/main.ts"',children:"class Member {\n    public readonly attendanceStatus: AttendanceStatus;\n    public readonly id: string;\n    public readonly name: string;\n    public readonly part: string;\n    public readonly grade: string;\n\n    constructor(id: string, name: string = \"\", part: string = \"\", grade: string = \"\") {\n        this.id = id;\n        this.name = name;\n        this.part = part;\n        this.grade = grade;\n        this.attendanceStatus = new AttendanceStatus(id);\n    }\n\n    public addContactList() {\n        const membersInfoSheet = new AdminBook().getMembersInfoSheet();\n\n        membersInfoSheet.addContactList(this.id);\n    }\n\n    public edit() {\n        const displayName = `=HYPERLINK(\"https://discord.com/users/${this.id}\", \"${this.name}\")`;\n\n        const memberRow = [displayName, this.id, this.part, this.grade];\n\n        const memberInfoSheet = new AdminBook().getMembersInfoSheet();\n\n        memberInfoSheet.editMember(memberRow);\n\n        const stringsAttendanceBook = new StringsAttendanceBook();\n        const tuttiAttendanceBook = new TuttiAttendanceBook();\n\n        [stringsAttendanceBook, tuttiAttendanceBook].forEach(book => {\n            ['\u524d\u66f2', '\u4e2d\u66f2', '\u30e1\u30a4\u30f3\uff11', `\u30e1\u30a4\u30f3\uff12`, '\u30e1\u30a4\u30f3\uff13', '\u30e1\u30a4\u30f3\uff14'].forEach(tuneName => {\n                const attendanceSheet = book.getSheet(tuneName);\n\n                attendanceSheet.editMember(memberRow);\n            })\n        })\n    }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9900:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4848);const r=e=>{let{href:t,children:n,backgroundColor:r}=e;return(0,s.jsx)("a",{href:t,rel:"noopener noreferrer",style:{backgroundColor:r||"#25c2a0",borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:n})}},5146:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var s=n(9900),r=n(4848);const a=e=>{let{component:t,type:n,project:a}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.A,{href:`/tus-orchestra-docs-portal/docs/${a}/feature/${n}/${t}`,children:"\u6a5f\u80fd\u8a73\u7d30",backgroundColor:"#999900"}),(0,r.jsx)("span",{style:{margin:"5px"}}),(0,r.jsx)(s.A,{href:`/tus-orchestra-docs-portal/docs/${a}/philosophy/${n}/${t}`,children:"\u8a2d\u8a08\u601d\u60f3",backgroundColor:"#0080ff"})]})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);