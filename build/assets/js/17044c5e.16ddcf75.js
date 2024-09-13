"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8346],{1575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var r=n(4848),s=n(8453),a=n(3449),o=n(7406);const c={},m=void 0,d={id:"attendance-management-system/source/class/MemberInfoSheet",title:"MemberInfoSheet",description:"",source:"@site/docs/attendance-management-system/source/class/MemberInfoSheet.md",sourceDirName:"attendance-management-system/source/class",slug:"/attendance-management-system/source/class/MemberInfoSheet",permalink:"/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/MemberInfoSheet",draft:!1,unlisted:!1,editUrl:"https://github.com/dOtOb9/tus-orchestra-docs-portal/tree/main/docs/attendance-management-system/source/class/MemberInfoSheet.md",tags:[],version:"current",frontMatter:{},sidebar:"attendanceManagementSystemSidebar",previous:{title:"Member",permalink:"/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/Member"},next:{title:"MemberSheet",permalink:"/tus-orchestra-docs-portal/docs/attendance-management-system/source/class/MemberSheet"}},i={},l=[];function u(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{href:"/docs/attendance-management-system/reference/class/MemberInfoSheet"}),"\n",(0,r.jsx)(o.A,{href:"/docs/attendance-management-system/feature/class/MemberInfoSheet"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="/src/main.ts"',children:'class MembersInfoSheet extends MemberSheet {\n    \n    public addContactList(id: string) {\n        const userRow = this.searchMember(id);\n        \n        this.setValue(Number(userRow[0]), 8, "TRUE");\n    }\n    \n    public getContactListRows(): Array<Array<string>> {\n        const MemberRows = this.data.filter((row) => row[9] === "TRUE");\n\n        return MemberRows;\n    }\n\n    public getMemberIsPracticeContact(id: string) {\n        const memberRow =  this.searchMember(id);\n\n        return memberRow[9];\n    }\n}\n'})})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7406:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4848);function s(e){let{href:t}=e;return(0,r.jsx)("a",{href:t,rel:"noopener noreferrer",style:{backgroundColor:"#999900",borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:"\u6a5f\u80fd\u8a73\u7d30"})}},3449:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4848);function s(e){let{href:t,children:n}=e;return(0,r.jsx)("a",{href:t,rel:"noopener noreferrer",style:{backgroundColor:"#0080ff",borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);