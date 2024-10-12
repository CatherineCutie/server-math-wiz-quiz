var U=t=>{throw TypeError(t)};var G=(t,s,n)=>s.has(t)||U("Cannot "+n);var h=(t,s,n)=>(G(t,s,"read from private field"),n?n.call(t):s.get(t)),S=(t,s,n)=>s.has(t)?U("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,n),N=(t,s,n,r)=>(G(t,s,"write to private field"),r?r.call(t,n):s.set(t,n),n),C=(t,s,n)=>(G(t,s,"access private method"),n);import{S as ae,n as H,d as le,e as F,r as j,U as M,u as P,j as e,_ as $,c as ie}from"./app-CHkETxEX.js";import{Q as ee,a as ce,b as oe,e as ue,c as de,d as he,s as W,f as Z,w as me,g as xe,h as fe,u as be}from"./useResponsive-ofB4A6bE.js";function J(t,s){return t.filter(n=>!s.includes(n))}function pe(t,s,n){const r=t.slice(0);return r[s]=n,r}var Q,O,R,g,E,q,_,y,te,A,B,T,Y,je=(Y=class extends ae{constructor(s,n,r){super();S(this,y);S(this,Q);S(this,O);S(this,R);S(this,g);S(this,E);S(this,q);S(this,_);N(this,Q,s),N(this,R,[]),N(this,g,[]),N(this,O,[]),this.setQueries(n)}onSubscribe(){this.listeners.size===1&&h(this,g).forEach(s=>{s.subscribe(n=>{C(this,y,B).call(this,s,n)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,h(this,g).forEach(s=>{s.destroy()})}setQueries(s,n,r){N(this,R,s),H.batch(()=>{const a=h(this,g),l=C(this,y,A).call(this,h(this,R));l.forEach(d=>d.observer.setOptions(d.defaultedQueryOptions,r));const i=l.map(d=>d.observer),o=i.map(d=>d.getCurrentResult()),b=i.some((d,w)=>d!==a[w]);a.length===i.length&&!b||(N(this,g,i),N(this,O,o),this.hasListeners()&&(J(a,i).forEach(d=>{d.destroy()}),J(i,a).forEach(d=>{d.subscribe(w=>{C(this,y,B).call(this,d,w)})}),C(this,y,T).call(this)))})}getCurrentResult(){return h(this,O)}getQueries(){return h(this,g).map(s=>s.getCurrentQuery())}getObservers(){return h(this,g)}getOptimisticResult(s,n){const r=C(this,y,A).call(this,s),a=r.map(l=>l.observer.getOptimisticResult(l.defaultedQueryOptions));return[a,l=>C(this,y,te).call(this,l??a,n),()=>r.map((l,i)=>{const o=a[i];return l.defaultedQueryOptions.notifyOnChangeProps?o:l.observer.trackResult(o,b=>{r.forEach(d=>{d.observer.trackProp(b)})})})]}},Q=new WeakMap,O=new WeakMap,R=new WeakMap,g=new WeakMap,E=new WeakMap,q=new WeakMap,_=new WeakMap,y=new WeakSet,te=function(s,n){return n?((!h(this,E)||h(this,O)!==h(this,_)||n!==h(this,q))&&(N(this,q,n),N(this,_,h(this,O)),N(this,E,le(h(this,E),n(s)))),h(this,E)):s},A=function(s){const n=h(this,g),r=new Map(n.map(u=>[u.options.queryHash,u])),a=s.map(u=>h(this,Q).defaultQueryOptions(u)),l=a.flatMap(u=>{const p=r.get(u.queryHash);return p!=null?[{defaultedQueryOptions:u,observer:p}]:[]}),i=new Set(l.map(u=>u.defaultedQueryOptions.queryHash)),o=a.filter(u=>!i.has(u.queryHash)),b=u=>{const p=h(this,Q).defaultQueryOptions(u);return h(this,g).find(m=>m.options.queryHash===p.queryHash)??new ee(h(this,Q),p)},d=o.map(u=>({defaultedQueryOptions:u,observer:b(u)})),w=(u,p)=>a.indexOf(u.defaultedQueryOptions)-a.indexOf(p.defaultedQueryOptions);return l.concat(d).sort(w)},B=function(s,n){const r=h(this,g).indexOf(s);r!==-1&&(N(this,O,pe(h(this,O),r,n)),C(this,y,T).call(this))},T=function(){H.batch(()=>{this.listeners.forEach(s=>{s(h(this,O))})})},Y);function ke({queries:t,...s},n){const r=F(),a=ce(),l=oe(),i=j.useMemo(()=>t.map(m=>{const c=r.defaultQueryOptions(m);return c._optimisticResults=a?"isRestoring":"optimistic",c}),[t,r,a]);i.forEach(m=>{ue(m),de(m,l)}),he(l);const[o]=j.useState(()=>new je(r,i,s)),[b,d,w]=o.getOptimisticResult(i,s.combine);j.useSyncExternalStore(j.useCallback(m=>a?()=>{}:o.subscribe(H.batchCalls(m)),[o,a]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),j.useEffect(()=>{o.setQueries(i,s,{listeners:!1})},[i,s,o]);const p=b.some((m,c)=>W(i[c],m))?b.flatMap((m,c)=>{const x=i[c];if(x){const D=new ee(r,x);if(W(x,m))return Z(x,D,l);me(m,a)&&Z(x,D,l)}return[]}):[];if(p.length>0)throw Promise.all(p);const v=b.find((m,c)=>{const x=i[c];return x&&xe({result:m,errorResetBoundary:l,throwOnError:x.throwOnError,query:r.getQueryCache().get(x.queryHash)})});if(v!=null&&v.error)throw v.error;return d(w())}var se={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V=M.createContext&&M.createContext(se),ge=["attr","size","title"];function ye(t,s){if(t==null)return{};var n=ve(t,s),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ve(t,s){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(s.indexOf(r)>=0)continue;n[r]=t[r]}return n}function I(){return I=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},I.apply(this,arguments)}function X(t,s){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);s&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?X(Object(n),!0).forEach(function(r){Ne(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ne(t,s,n){return s=we(s),s in t?Object.defineProperty(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n,t}function we(t){var s=Oe(t,"string");return typeof s=="symbol"?s:s+""}function Oe(t,s){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,s||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(t)}function ne(t){return t&&t.map((s,n)=>M.createElement(s.tag,L({key:n},s.attr),ne(s.child)))}function Se(t){return s=>M.createElement(Ce,I({attr:L({},t.attr)},s),ne(t.child))}function Ce(t){var s=n=>{var{attr:r,size:a,title:l}=t,i=ye(t,ge),o=a||n.size||"1em",b;return n.className&&(b=n.className),t.className&&(b=(b?b+" ":"")+t.className),M.createElement("svg",I({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:b,style:L(L({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&M.createElement("title",null,l),t.children)};return V!==void 0?M.createElement(V.Consumer,null,n=>s(n)):s(se)}function z(t){return Se({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(t)}const K=({children:t})=>{const{mainModal:s,setMainModal:n}=P();return e.jsxs("dialog",{className:`modal ${s?"modal-open":""}`,children:[e.jsx("div",{className:"modal-box bg-white w-11/12",children:t}),e.jsx("form",{method:"dialog",className:"modal-backdrop",children:e.jsx("button",{onClick:()=>n(!1),children:"close"})})]})},Qe=()=>{const{setMainModal:t}=P(),s=F(),[n,r]=j.useState(""),[a,l]=j.useState(""),[i,o]=j.useState(""),[b,d]=j.useState(""),[w,u]=j.useState(""),[p,v]=j.useState(""),[m,c]=j.useState("single"),x=s.getQueryData(["fetchDatagrades"]),D=s.getQueryData(["fetchDatasections"]),re=async f=>{f.preventDefault();try{const{data:k}=await axios.post("/api/students",{studentFirstName:n,studentLastName:a,studentEmailName:i,studentPasswordName:b,gradeId:w,sectionId:p});k&&(r(""),l(""),o(""),d(""),u(""),v(""),s.invalidateQueries({queryKey:["fetchDatastudents"]}),t(!1)),$.success(k.message)}catch(k){console.error(k)}};return e.jsxs(K,{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{className:"text-xl",children:"Add Student"}),e.jsx("button",{className:"btn btn-xs btn-error",onClick:()=>t(!1),children:e.jsx(z,{})})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{role:"tablist",className:"tabs tabs-boxed",children:[e.jsx("div",{role:"tab",onClick:()=>c("single"),className:`tab ${m=="single"?"tab-active":""}`,children:"Single"}),e.jsx("div",{role:"tab",onClick:()=>c("batch"),className:`tab ${m=="batch"?"tab-active":""}`,children:"Batch"})]}),e.jsxs("form",{onSubmit:re,children:[e.jsx("input",{name:"studentFirstName",type:"text",placeholder:"First Name",className:"input input-bordered w-full bg-transparent my-1",value:n,onChange:f=>r(f.target.value)}),e.jsx("input",{name:"studentLastName",type:"text",placeholder:"Last Name",className:"input input-bordered w-full bg-transparent my-1",value:a,onChange:f=>l(f.target.value)}),e.jsx("input",{name:"studentEmailName",type:"text",placeholder:"Email",className:"input input-bordered w-full bg-transparent my-1",value:i,onChange:f=>o(f.target.value)}),e.jsx("input",{name:"studentPasswordName",type:"password",placeholder:"Password",className:"input input-bordered w-full bg-transparent my-1",value:b,onChange:f=>d(f.target.value)}),e.jsxs("select",{className:"select select-bordered w-full bg-transparent my-1",onChange:f=>u(f.target.value),children:[e.jsx("option",{value:"",children:"--Grade--"}),x==null?void 0:x.map(f=>e.jsx("option",{value:f.id,children:f.level},f.level))]}),e.jsxs("select",{className:"select select-bordered w-full bg-transparent my-1",onChange:f=>v(f.target.value),children:[e.jsx("option",{value:"",children:"--Section--"}),D==null?void 0:D.map(f=>e.jsx("option",{value:f.id,children:f.name},f.name))]}),e.jsx("button",{className:"btn btn-primary w-full text-white mt-10",children:"Create"})]})]})},Ee=()=>{const{setMainModal:t}=P(),s=F(),[n,r]=j.useState(""),a=async l=>{l.preventDefault();try{const{data:i}=await axios.post("/api/sections",{sectionName:n});i&&(r(""),s.invalidateQueries({queryKey:["fetchDatasections"]}),t(!1)),$.success(i.message)}catch(i){console.error(i)}};return e.jsxs(K,{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{className:"text-xl",children:"Add Section"}),e.jsx("button",{className:"btn btn-xs btn-error",onClick:()=>t(!1),children:e.jsx(z,{})})]}),e.jsx("div",{className:"divider"}),e.jsxs("form",{onSubmit:a,children:[e.jsx("input",{name:"setSectionName",type:"text",placeholder:"Section Name",className:"input input-bordered w-full bg-transparent my-1",value:n,onChange:l=>r(l.target.value)}),e.jsx("button",{className:"btn btn-primary w-full text-white mt-10",children:"Create"})]})]})},Me=()=>{const{setMainModal:t}=P(),s=F(),[n,r]=j.useState(""),a=async l=>{l.preventDefault();try{const{data:i}=await axios.post("/api/grades",{gradeId:n});i&&(r(""),s.invalidateQueries({queryKey:["fetchDatagrades"]}),t(!1)),$.success(i.message)}catch(i){console.error(i)}};return e.jsxs(K,{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{className:"text-xl",children:"Add Grade"}),e.jsx("button",{className:"btn btn-xs btn-error",onClick:()=>t(!1),children:e.jsx(z,{})})]}),e.jsx("div",{className:"divider"}),e.jsxs("form",{onSubmit:a,children:[e.jsx("input",{name:"setGradeId",type:"text",placeholder:"Grade",className:"input input-bordered w-full bg-transparent my-1",value:n,onChange:l=>r(l.target.value)}),e.jsx("button",{className:"btn btn-primary w-full text-white mt-10",children:"Create"})]})]})},Pe=({children:t})=>{const{contentModal:s,setContentModal:n}=P();return e.jsxs("dialog",{className:`modal ${s?"modal-open":""}`,children:[e.jsx("div",{className:"modal-box bg-white w-11/12",children:t}),e.jsx("form",{method:"dialog",className:"modal-backdrop",children:e.jsx("button",{onClick:()=>n(!1),children:"close"})})]})},De=({model:t,id:s})=>{const{setContentModal:n}=P(),r=async()=>{try{const{data:i}=await ie.get("/api/"+t+"/"+s);return console.log(i),i}catch{}},{data:a,isLoading:l}=fe({queryKey:["fetchSingleData"+t+s],queryFn:r,enabled:!!(t&&s)});return e.jsx(Pe,{children:l?e.jsx(e.Fragment,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{className:"font-bold text-2xl",children:"Details:"}),e.jsx("button",{className:"btn btn-xs btn-error",onClick:()=>n(!1),children:e.jsx(z,{})})]}),e.jsx("div",{className:"divider"}),t=="students"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"justify",children:[" ",e.jsx("span",{className:"font-semibold",children:"Name:"})," ",a.first_name+" "+a.last_name]}),e.jsxs("p",{className:"justify",children:[" ",e.jsx("span",{className:"font-semibold",children:"Email:"})," ",a.email]}),e.jsxs("p",{className:"justify",children:[" ",e.jsx("span",{className:"font-semibold",children:"Grade:"})," ",a.grade.level]}),e.jsxs("p",{className:"justify",children:[" ",e.jsx("span",{className:"font-semibold",children:"Section:"})," ",a.section.name]})]}):null,t=="grades"?e.jsx(e.Fragment,{children:e.jsxs("p",{className:"justify",children:[" ",e.jsx("span",{className:"font-semibold",children:"Name:"})," ",a.level]})}):null,t=="sections"?e.jsx(e.Fragment,{children:e.jsxs("p",{className:"justify",children:[" ",e.jsx("span",{className:"font-semibold",children:"Name:"})," ",a.name]})}):null]})})},Re=()=>{var m;const{selectedMenu:t,setMainModal:s,setContentModal:n,setSelectedMenu:r}=P(),{isSmallScreen:a,isMediumScreen:l,isLargeScreen:i}=be(),o=F(),b=o.getQueryData(["fetchDatastudents"]),d=o.getQueryData(["fetchDatagrades"]),w=o.getQueryData(["fetchDatasections"]),u=o.getQueryData(["fetchDataQuiz1"]),[p,v]=j.useState(null);return e.jsxs("div",{className:"overflow-x-auto",children:[t=="students"?e.jsx(Qe,{}):null,t=="grades"?e.jsx(Me,{}):null,t=="sections"?e.jsx(Ee,{}):null,p?e.jsx(De,{model:t,id:p}):null,e.jsx("div",{className:`flex ${a?"justify-between gap-2":"justify-end"}`,children:t!="quiz"?e.jsxs(e.Fragment,{children:[a?e.jsxs("select",{className:"select select-sm select-bordered bg-white w-full text-xs",onChange:c=>r(c.target.value),children:[e.jsx("option",{value:"students",children:"Student"}),e.jsx("option",{value:"grades",children:"Grade"}),e.jsx("option",{value:"sections",children:"Section"})]}):null,e.jsx("button",{className:"btn btn-sm btn-primary text-white",onClick:()=>{s(!0)},children:"Add"})]}):null}),e.jsx("div",{className:"h-[50vh] overflow-y-auto my-2",children:e.jsxs("table",{className:"table table-xs  rounded-t-md",children:[e.jsxs("thead",{className:"sticky top-0 bg-slate-400 shadow-lg text-white",children:[t=="students"?e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Grade"}),e.jsx("th",{children:"Section"}),e.jsx("th",{})]}):null,t=="grades"?e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Level"}),e.jsx("th",{})]}):null,t=="sections"?e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Name"}),e.jsx("th",{})]}):null,t=="quiz"?e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Score"})]}):null]}),e.jsxs("tbody",{children:[t=="students"?e.jsx(e.Fragment,{children:b.map((c,x)=>e.jsxs("tr",{className:"hover:bg-slate-300 transition-all duration-300 ease-in-out",children:[e.jsx("th",{children:x+1}),e.jsx("td",{children:c.first_name+" "+c.last_name}),e.jsxs("td",{children:[" ",c.email]}),e.jsxs("td",{children:[" ",c.grade.level]}),e.jsxs("td",{children:[" ",c.section.name]}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-xs btn-ghost",onClick:()=>{v(c.id),n(!0)},children:"view"})})]},c.id))}):null,t=="grades"?e.jsx(e.Fragment,{children:d.map((c,x)=>e.jsxs("tr",{className:"hover:bg-slate-300 transition-all duration-300 ease-in-out",children:[e.jsx("th",{children:x+1}),e.jsxs("td",{children:[" ",c.level]}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-xs btn-ghost",onClick:()=>{v(c.id),n(!0)},children:"view"})})]},c.id))}):null,t=="sections"?e.jsx(e.Fragment,{children:w.map((c,x)=>e.jsxs("tr",{className:"hover:bg-slate-300 transition-all duration-300 ease-in-out",children:[e.jsx("th",{children:x+1}),e.jsxs("td",{children:[" ",c.name]}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-xs btn-ghost",onClick:()=>{v(c.id),n(!0)},children:"view"})})]},c.id))}):null,t=="quiz"?e.jsx(e.Fragment,{children:(m=u.scores)==null?void 0:m.map((c,x)=>e.jsxs("tr",{className:"hover:bg-slate-300 transition-all duration-300 ease-in-out",children:[e.jsx("th",{children:x+1}),e.jsx("td",{children:c.student.first_name+" "+c.student.last_name}),e.jsxs("td",{children:[c.score,"/",u.questions_count]})]},c.id))}):null]})]})})]})},Ie=Re;export{Se as G,Ie as T,ke as u};
