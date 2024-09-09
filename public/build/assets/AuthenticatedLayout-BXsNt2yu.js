import{r as a,j as e,a as l}from"./app-DtDMgu8o.js";import{A as p}from"./ApplicationLogo-eMIQY_J6.js";import{X as f}from"./transition-Ch4ShWBt.js";const m=a.createContext(),c=({children:s})=>{const[n,r]=a.useState(!1),t=()=>{r(o=>!o)};return e.jsx(m.Provider,{value:{open:n,setOpen:r,toggleOpen:t},children:e.jsx("div",{className:"relative",children:s})})},j=({children:s})=>{const{open:n,setOpen:r,toggleOpen:t}=a.useContext(m);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:t,children:s}),n&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},v=({align:s="right",width:n="48",contentClasses:r="py-1 bg-white",children:t})=>{const{open:o,setOpen:x}=a.useContext(m);let h="origin-top";s==="left"?h="ltr:origin-top-left rtl:origin-top-right start-0":s==="right"&&(h="ltr:origin-top-right rtl:origin-top-left end-0");let g="";return n==="48"&&(g="w-48"),e.jsx(e.Fragment,{children:e.jsx(f,{show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${h} ${g}`,onClick:()=>x(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:t})})})})},b=({className:s="",children:n,...r})=>e.jsx(l,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+s,children:n});c.Trigger=j;c.Content=v;c.Link=b;const i=c;function u({active:s=!1,className:n="",children:r,...t}){return e.jsx(l,{...t,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(s?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+n,children:r})}function d({active:s=!1,className:n="",children:r,...t}){return e.jsx(l,{...t,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${s?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${n}`,children:r})}function k({user:s,header:n,children:r}){const[t,o]=a.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(l,{href:"/",children:e.jsx("div",{className:"h-10 w-10",children:e.jsx(p,{className:"block w-auto fill-current text-gray-800"})})})}),e.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[e.jsx(u,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e.jsx(u,{href:route("uploads"),active:route().current("uploads"),children:"Uploads"}),e.jsx(u,{href:route("scores"),active:route().current("scores"),children:"Scores"})]})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[s.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(i.Content,{children:[e.jsx(i.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(i.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>o(x=>!x),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:t?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:t?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(t?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(d,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(d,{href:route("dashboard"),active:route().current("dashboard"),children:"Uploads"})}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:s.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:s.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(d,{href:route("profile.edit"),children:"Profile"}),e.jsx(d,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),e.jsx("main",{children:r})]})}export{k as A};
