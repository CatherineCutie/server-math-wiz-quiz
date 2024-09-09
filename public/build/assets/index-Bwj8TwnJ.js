import{u as _,j,r as d}from"./app-BUZjzQpe.js";const C=({items:t})=>{const{setSelectedMenu:e,selectedMenu:a}=_();return j.jsx("div",{className:"",children:j.jsx("ul",{className:"menu rounded-box w-56 gap-1",children:t.map(o=>j.jsx("li",{onClick:()=>e(o.name),className:`${a==o.name?"bg-slate-300":""} select-none hover:bg-slate-300 hover:cursor-pointer p-2 rounded-md capitalize transition-all duration-500 ease-in-out`,children:o.name},o.name))})})},ht=C;let D={data:""},F=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||D,O=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,P=/\/\*[^]*?\*\/|  +/g,S=/\n+/g,g=(t,e)=>{let a="",o="",s="";for(let r in t){let i=t[r];r[0]=="@"?r[1]=="i"?a=r+" "+i+";":o+=r[1]=="f"?g(i,r):r+"{"+g(i,r[1]=="k"?"":e)+"}":typeof i=="object"?o+=g(i,e?e.replace(/([^,])+/g,n=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):r):i!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=g.p?g.p(r,i):r+":"+i+";")}return a+(e&&s?e+"{"+s+"}":s)+o},m={},M=t=>{if(typeof t=="object"){let e="";for(let a in t)e+=a+M(t[a]);return e}return t},L=(t,e,a,o,s)=>{let r=M(t),i=m[r]||(m[r]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(r));if(!m[i]){let l=r!==t?t:(c=>{let p,y,h=[{}];for(;p=O.exec(c.replace(P,""));)p[4]?h.shift():p[3]?(y=p[3].replace(S," ").trim(),h.unshift(h[0][y]=h[0][y]||{})):h[0][p[1]]=p[2].replace(S," ").trim();return h[0]})(t);m[i]=g(s?{["@keyframes "+i]:l}:l,a?"":"."+i)}let n=a&&m.g?m.g:null;return a&&(m.g=m[i]),((l,c,p,y)=>{y?c.data=c.data.replace(y,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(m[i],e,o,n),i},q=(t,e,a)=>t.reduce((o,s,r)=>{let i=e[r];if(i&&i.call){let n=i(a),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;i=l?"."+l:n&&typeof n=="object"?n.props?"":g(n,""):n===!1?"":n}return o+s+(i??"")},"");function w(t){let e=this||{},a=t.call?t(e.p):t;return L(a.unshift?a.raw?q(a,[].slice.call(arguments,1),e.p):a.reduce((o,s)=>Object.assign(o,s&&s.call?s(e.p):s),{}):a,F(e.target),e.g,e.o,e.k)}let T,k,z;w.bind({g:1});let f=w.bind({k:1});function G(t,e,a,o){g.p=e,T=t,k=a,z=o}function b(t,e){let a=this||{};return function(){let o=arguments;function s(r,i){let n=Object.assign({},r),l=n.className||s.className;a.p=Object.assign({theme:k&&k()},n),a.o=/ *go\d+/.test(l),n.className=w.apply(a,o)+(l?" "+l:"");let c=t;return t[0]&&(c=n.as||t,delete n.as),z&&c[0]&&z(n),T(c,n)}return s}}var H=t=>typeof t=="function",A=(t,e)=>H(t)?t(e):t,J=(()=>{let t=0;return()=>(++t).toString()})(),Q=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),R=20,v=new Map,U=1e3,I=t=>{if(v.has(t))return;let e=setTimeout(()=>{v.delete(t),$({type:4,toastId:t})},U);v.set(t,e)},V=t=>{let e=v.get(t);e&&clearTimeout(e)},N=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,R)};case 1:return e.toast.id&&V(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:a}=e;return t.toasts.find(r=>r.id===a.id)?N(t,{type:1,toast:a}):N(t,{type:0,toast:a});case 3:let{toastId:o}=e;return o?I(o):t.toasts.forEach(r=>{I(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===o||o===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},W=[],E={toasts:[],pausedAt:void 0},$=t=>{E=N(E,t),W.forEach(e=>{e(E)})},X=(t,e="blank",a)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...a,id:(a==null?void 0:a.id)||J()}),x=t=>(e,a)=>{let o=X(e,t,a);return $({type:2,toast:o}),o.id},u=(t,e)=>x("blank")(t,e);u.error=x("error");u.success=x("success");u.loading=x("loading");u.custom=x("custom");u.dismiss=t=>{$({type:3,toastId:t})};u.remove=t=>$({type:4,toastId:t});u.promise=(t,e,a)=>{let o=u.loading(e.loading,{...a,...a==null?void 0:a.loading});return t.then(s=>(u.success(A(e.success,s),{id:o,...a,...a==null?void 0:a.success}),s)).catch(s=>{u.error(A(e.error,s),{id:o,...a,...a==null?void 0:a.error})}),t};var Z=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B=f`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=f`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${K} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,tt=f`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,et=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${tt} 1s linear infinite;
`,at=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,rt=f`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ot=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${at} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${rt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,st=b("div")`
  position: absolute;
`,it=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,nt=f`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,lt=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${nt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ct=({toast:t})=>{let{icon:e,type:a,iconTheme:o}=t;return e!==void 0?typeof e=="string"?d.createElement(lt,null,e):e:a==="blank"?null:d.createElement(it,null,d.createElement(et,{...o}),a!=="loading"&&d.createElement(st,null,a==="error"?d.createElement(Y,{...o}):d.createElement(ot,{...o})))},dt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,ut="0%{opacity:0;} 100%{opacity:1;}",mt="0%{opacity:1;} 100%{opacity:0;}",ft=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,gt=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,bt=(t,e)=>{let a=t.includes("top")?1:-1,[o,s]=Q()?[ut,mt]:[dt(a),pt(a)];return{animation:e?`${f(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${f(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};d.memo(({toast:t,position:e,style:a,children:o})=>{let s=t.height?bt(t.position||e||"top-center",t.visible):{opacity:0},r=d.createElement(ct,{toast:t}),i=d.createElement(gt,{...t.ariaProps},A(t.message,t));return d.createElement(ft,{className:t.className,style:{...s,...a,...t.style}},typeof o=="function"?o({icon:r,message:i}):d.createElement(d.Fragment,null,r,i))});G(d.createElement);w`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var xt=u;export{ht as S,xt as _};
