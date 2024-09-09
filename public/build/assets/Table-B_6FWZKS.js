var Ee=t=>{throw TypeError(t)};var le=(t,e,s)=>e.has(t)||Ee("Cannot "+s);var a=(t,e,s)=>(le(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?Ee("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s,n)=>(le(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s),x=(t,e,s)=>(le(t,e,"access private method"),s);import{S as ke,d as F,s as oe,e as te,n as Ye,i as De,f as Me,t as et,g as tt,h as st,k as Pe,l as Z,m as rt,r as j,o as $,U as z,u as A,j as r,c as nt}from"./app-BUZjzQpe.js";import{_ as Oe}from"./index-Bwj8TwnJ.js";var R,d,J,S,L,B,P,X,G,H,T,q,_,K,p,V,ce,ue,he,de,fe,me,pe,ze,qe,Ce=(qe=class extends ke{constructor(e,s){super();v(this,p);v(this,R);v(this,d);v(this,J);v(this,S);v(this,L);v(this,B);v(this,P);v(this,X);v(this,G);v(this,H);v(this,T);v(this,q);v(this,_);v(this,K,new Set);this.options=s,f(this,R,e),f(this,P,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(a(this,d).addObserver(this),Fe(a(this,d),this.options)?x(this,p,V).call(this):this.updateResult(),x(this,p,de).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return be(a(this,d),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return be(a(this,d),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,x(this,p,fe).call(this),x(this,p,me).call(this),a(this,d).removeObserver(this)}setOptions(e,s){const n=this.options,o=a(this,d);if(this.options=a(this,R).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof F(this.options.enabled,a(this,d))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");x(this,p,pe).call(this),a(this,d).setOptions(this.options),n._defaulted&&!oe(this.options,n)&&a(this,R).getQueryCache().notify({type:"observerOptionsUpdated",query:a(this,d),observer:this});const c=this.hasListeners();c&&Ie(a(this,d),o,this.options,n)&&x(this,p,V).call(this),this.updateResult(s),c&&(a(this,d)!==o||F(this.options.enabled,a(this,d))!==F(n.enabled,a(this,d))||te(this.options.staleTime,a(this,d))!==te(n.staleTime,a(this,d)))&&x(this,p,ce).call(this);const l=x(this,p,ue).call(this);c&&(a(this,d)!==o||F(this.options.enabled,a(this,d))!==F(n.enabled,a(this,d))||l!==a(this,_))&&x(this,p,he).call(this,l)}getOptimisticResult(e){const s=a(this,R).getQueryCache().build(a(this,R),e),n=this.createResult(s,e);return it(this,n)&&(f(this,S,n),f(this,B,this.options),f(this,L,a(this,d).state)),n}getCurrentResult(){return a(this,S)}trackResult(e,s){const n={};return Object.keys(e).forEach(o=>{Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(o),s==null||s(o),e[o])})}),n}trackProp(e){a(this,K).add(e)}getCurrentQuery(){return a(this,d)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=a(this,R).defaultQueryOptions(e),n=a(this,R).getQueryCache().build(a(this,R),s);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,s))}fetch(e){return x(this,p,V).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),a(this,S)))}createResult(e,s){var Qe;const n=a(this,d),o=this.options,c=a(this,S),l=a(this,L),u=a(this,B),h=e!==n?e.state:a(this,J),{state:O}=e;let i={...O},g=!1,C;if(s._optimisticResults){const D=this.hasListeners(),ie=!D&&Fe(e,s),Xe=D&&Ie(e,n,s,o);(ie||Xe)&&(i={...i,...st(O.data,e.options)}),s._optimisticResults==="isRestoring"&&(i.fetchStatus="idle")}let{error:y,errorUpdatedAt:w,status:N}=i;if(s.select&&i.data!==void 0)if(c&&i.data===(l==null?void 0:l.data)&&s.select===a(this,X))C=a(this,G);else try{f(this,X,s.select),C=s.select(i.data),C=Pe(c==null?void 0:c.data,C,s),f(this,G,C),f(this,P,null)}catch(D){f(this,P,D)}else C=i.data;if(s.placeholderData!==void 0&&C===void 0&&N==="pending"){let D;if(c!=null&&c.isPlaceholderData&&s.placeholderData===(u==null?void 0:u.placeholderData))D=c.data;else if(D=typeof s.placeholderData=="function"?s.placeholderData((Qe=a(this,H))==null?void 0:Qe.state.data,a(this,H)):s.placeholderData,s.select&&D!==void 0)try{D=s.select(D),f(this,P,null)}catch(ie){f(this,P,ie)}D!==void 0&&(N="success",C=Pe(c==null?void 0:c.data,D,s),g=!0)}a(this,P)&&(y=a(this,P),C=a(this,G),w=Date.now(),N="error");const b=i.fetchStatus==="fetching",I=N==="pending",ae=N==="error",Se=I&&b,Re=C!==void 0;return{status:N,fetchStatus:i.fetchStatus,isPending:I,isSuccess:N==="success",isError:ae,isInitialLoading:Se,isLoading:Se,data:C,dataUpdatedAt:i.dataUpdatedAt,error:y,errorUpdatedAt:w,failureCount:i.fetchFailureCount,failureReason:i.fetchFailureReason,errorUpdateCount:i.errorUpdateCount,isFetched:i.dataUpdateCount>0||i.errorUpdateCount>0,isFetchedAfterMount:i.dataUpdateCount>h.dataUpdateCount||i.errorUpdateCount>h.errorUpdateCount,isFetching:b,isRefetching:b&&!I,isLoadingError:ae&&!Re,isPaused:i.fetchStatus==="paused",isPlaceholderData:g,isRefetchError:ae&&Re,isStale:Ne(e,s),refetch:this.refetch}}updateResult(e){const s=a(this,S),n=this.createResult(a(this,d),this.options);if(f(this,L,a(this,d).state),f(this,B,this.options),a(this,L).data!==void 0&&f(this,H,a(this,d)),oe(n,s))return;f(this,S,n);const o={},c=()=>{if(!s)return!0;const{notifyOnChangeProps:l}=this.options,u=typeof l=="function"?l():l;if(u==="all"||!u&&!a(this,K).size)return!0;const m=new Set(u??a(this,K));return this.options.throwOnError&&m.add("error"),Object.keys(a(this,S)).some(h=>{const O=h;return a(this,S)[O]!==s[O]&&m.has(O)})};(e==null?void 0:e.listeners)!==!1&&c()&&(o.listeners=!0),x(this,p,ze).call(this,{...o,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&x(this,p,de).call(this)}},R=new WeakMap,d=new WeakMap,J=new WeakMap,S=new WeakMap,L=new WeakMap,B=new WeakMap,P=new WeakMap,X=new WeakMap,G=new WeakMap,H=new WeakMap,T=new WeakMap,q=new WeakMap,_=new WeakMap,K=new WeakMap,p=new WeakSet,V=function(e){x(this,p,pe).call(this);let s=a(this,d).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(Ye)),s},ce=function(){x(this,p,fe).call(this);const e=te(this.options.staleTime,a(this,d));if(De||a(this,S).isStale||!Me(e))return;const n=et(a(this,S).dataUpdatedAt,e)+1;f(this,T,setTimeout(()=>{a(this,S).isStale||this.updateResult()},n))},ue=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(a(this,d)):this.options.refetchInterval)??!1},he=function(e){x(this,p,me).call(this),f(this,_,e),!(De||F(this.options.enabled,a(this,d))===!1||!Me(a(this,_))||a(this,_)===0)&&f(this,q,setInterval(()=>{(this.options.refetchIntervalInBackground||tt.isFocused())&&x(this,p,V).call(this)},a(this,_)))},de=function(){x(this,p,ce).call(this),x(this,p,he).call(this,x(this,p,ue).call(this))},fe=function(){a(this,T)&&(clearTimeout(a(this,T)),f(this,T,void 0))},me=function(){a(this,q)&&(clearInterval(a(this,q)),f(this,q,void 0))},pe=function(){const e=a(this,R).getQueryCache().build(a(this,R),this.options);if(e===a(this,d))return;const s=a(this,d);f(this,d,e),f(this,J,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},ze=function(e){Z.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(a(this,S))}),a(this,R).getQueryCache().notify({query:a(this,d),type:"observerResultsUpdated"})})},qe);function at(t,e){return F(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Fe(t,e){return at(t,e)||t.state.data!==void 0&&be(t,e,e.refetchOnMount)}function be(t,e,s){if(F(e.enabled,t)!==!1){const n=typeof s=="function"?s(t):s;return n==="always"||n!==!1&&Ne(t,e)}return!1}function Ie(t,e,s,n){return(t!==e||F(n.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&Ne(t,s)}function Ne(t,e){return F(e.enabled,t)!==!1&&t.isStaleByTime(te(e.staleTime,t))}function it(t,e){return!oe(t.getCurrentResult(),e)}function _e(t,e){return t.filter(s=>!e.includes(s))}function lt(t,e,s){const n=t.slice(0);return n[e]=s,n}var U,M,W,Q,k,Y,ee,E,Ae,xe,ge,ye,Ue,ot=(Ue=class extends ke{constructor(e,s,n){super();v(this,E);v(this,U);v(this,M);v(this,W);v(this,Q);v(this,k);v(this,Y);v(this,ee);f(this,U,e),f(this,W,[]),f(this,Q,[]),f(this,M,[]),this.setQueries(s)}onSubscribe(){this.listeners.size===1&&a(this,Q).forEach(e=>{e.subscribe(s=>{x(this,E,ge).call(this,e,s)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,a(this,Q).forEach(e=>{e.destroy()})}setQueries(e,s,n){f(this,W,e),Z.batch(()=>{const o=a(this,Q),c=x(this,E,xe).call(this,a(this,W));c.forEach(h=>h.observer.setOptions(h.defaultedQueryOptions,n));const l=c.map(h=>h.observer),u=l.map(h=>h.getCurrentResult()),m=l.some((h,O)=>h!==o[O]);o.length===l.length&&!m||(f(this,Q,l),f(this,M,u),this.hasListeners()&&(_e(o,l).forEach(h=>{h.destroy()}),_e(l,o).forEach(h=>{h.subscribe(O=>{x(this,E,ge).call(this,h,O)})}),x(this,E,ye).call(this)))})}getCurrentResult(){return a(this,M)}getQueries(){return a(this,Q).map(e=>e.getCurrentQuery())}getObservers(){return a(this,Q)}getOptimisticResult(e,s){const n=x(this,E,xe).call(this,e),o=n.map(c=>c.observer.getOptimisticResult(c.defaultedQueryOptions));return[o,c=>x(this,E,Ae).call(this,c??o,s),()=>n.map((c,l)=>{const u=o[l];return c.defaultedQueryOptions.notifyOnChangeProps?u:c.observer.trackResult(u,m=>{n.forEach(h=>{h.observer.trackProp(m)})})})]}},U=new WeakMap,M=new WeakMap,W=new WeakMap,Q=new WeakMap,k=new WeakMap,Y=new WeakMap,ee=new WeakMap,E=new WeakSet,Ae=function(e,s){return s?((!a(this,k)||a(this,M)!==a(this,ee)||s!==a(this,Y))&&(f(this,Y,s),f(this,ee,a(this,M)),f(this,k,rt(a(this,k),s(e)))),a(this,k)):e},xe=function(e){const s=a(this,Q),n=new Map(s.map(i=>[i.options.queryHash,i])),o=e.map(i=>a(this,U).defaultQueryOptions(i)),c=o.flatMap(i=>{const g=n.get(i.queryHash);return g!=null?[{defaultedQueryOptions:i,observer:g}]:[]}),l=new Set(c.map(i=>i.defaultedQueryOptions.queryHash)),u=o.filter(i=>!l.has(i.queryHash)),m=i=>{const g=a(this,U).defaultQueryOptions(i);return a(this,Q).find(y=>y.options.queryHash===g.queryHash)??new Ce(a(this,U),g)},h=u.map(i=>({defaultedQueryOptions:i,observer:m(i)})),O=(i,g)=>o.indexOf(i.defaultedQueryOptions)-o.indexOf(g.defaultedQueryOptions);return c.concat(h).sort(O)},ge=function(e,s){const n=a(this,Q).indexOf(e);n!==-1&&(f(this,M,lt(a(this,M),n,s)),x(this,E,ye).call(this))},ye=function(){Z.batch(()=>{this.listeners.forEach(e=>{e(a(this,M))})})},Ue),Be=j.createContext(!1),Ge=()=>j.useContext(Be);Be.Provider;function ct(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var ut=j.createContext(ct()),He=()=>j.useContext(ut);function ht(t,e){return typeof t=="function"?t(...e):!!t}var Ke=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},We=t=>{j.useEffect(()=>{t.clearReset()},[t])},$e=({result:t,errorResetBoundary:e,throwOnError:s,query:n})=>t.isError&&!e.isReset()&&!t.isFetching&&n&&ht(s,[t.error,n]),Ve=t=>{t.suspense&&(typeof t.staleTime!="number"&&(t.staleTime=1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},dt=(t,e)=>t.isLoading&&t.isFetching&&!e,ve=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,je=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function Ft({queries:t,...e},s){const n=$(),o=Ge(),c=He(),l=j.useMemo(()=>t.map(y=>{const w=n.defaultQueryOptions(y);return w._optimisticResults=o?"isRestoring":"optimistic",w}),[t,n,o]);l.forEach(y=>{Ve(y),Ke(y,c)}),We(c);const[u]=j.useState(()=>new ot(n,l,e)),[m,h,O]=u.getOptimisticResult(l,e.combine);j.useSyncExternalStore(j.useCallback(y=>o?()=>{}:u.subscribe(Z.batchCalls(y)),[u,o]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),j.useEffect(()=>{u.setQueries(l,e,{listeners:!1})},[l,e,u]);const g=m.some((y,w)=>ve(l[w],y))?m.flatMap((y,w)=>{const N=l[w];if(N){const b=new Ce(n,N);if(ve(N,y))return je(N,b,c);dt(y,o)&&je(N,b,c)}return[]}):[];if(g.length>0)throw Promise.all(g);const C=m.find((y,w)=>{const N=l[w];return N&&$e({result:y,errorResetBoundary:c,throwOnError:N.throwOnError,query:n.getQueryCache().get(N.queryHash)})});if(C!=null&&C.error)throw C.error;return h(O())}function ft(t,e,s){var h,O,i,g;const n=$(),o=Ge(),c=He(),l=n.defaultQueryOptions(t);(O=(h=n.getDefaultOptions().queries)==null?void 0:h._experimental_beforeQuery)==null||O.call(h,l),l._optimisticResults=o?"isRestoring":"optimistic",Ve(l),Ke(l,c),We(c);const[u]=j.useState(()=>new e(n,l)),m=u.getOptimisticResult(l);if(j.useSyncExternalStore(j.useCallback(C=>{const y=o?()=>{}:u.subscribe(Z.batchCalls(C));return u.updateResult(),y},[u,o]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),j.useEffect(()=>{u.setOptions(l,{listeners:!1})},[l,u]),ve(l,m))throw je(l,u,c);if($e({result:m,errorResetBoundary:c,throwOnError:l.throwOnError,query:n.getQueryCache().get(l.queryHash)}))throw m.error;return(g=(i=n.getDefaultOptions().queries)==null?void 0:i._experimental_afterQuery)==null||g.call(i,l,m),l.notifyOnChangeProps?m:u.trackResult(m)}function mt(t,e){return ft(t,Ce)}var Ze={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Le=z.createContext&&z.createContext(Ze),pt=["attr","size","title"];function bt(t,e){if(t==null)return{};var s=xt(t,e),n,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function xt(t,e){if(t==null)return{};var s={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;s[n]=t[n]}return s}function se(){return se=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},se.apply(this,arguments)}function Te(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),s.push.apply(s,n)}return s}function re(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Te(Object(s),!0).forEach(function(n){gt(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Te(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}function gt(t,e,s){return e=yt(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function yt(t){var e=vt(t,"string");return typeof e=="symbol"?e:e+""}function vt(t,e){if(typeof t!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var n=s.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Je(t){return t&&t.map((e,s)=>z.createElement(e.tag,re({key:s},e.attr),Je(e.child)))}function jt(t){return e=>z.createElement(Ot,se({attr:re({},t.attr)},e),Je(t.child))}function Ot(t){var e=s=>{var{attr:n,size:o,title:c}=t,l=bt(t,pt),u=o||s.size||"1em",m;return s.className&&(m=s.className),t.className&&(m=(m?m+" ":"")+t.className),z.createElement("svg",se({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,n,l,{className:m,style:re(re({color:t.color||s.color},s.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&z.createElement("title",null,c),t.children)};return Le!==void 0?z.createElement(Le.Consumer,null,s=>e(s)):e(Ze)}function ne(t){return jt({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(t)}const we=({children:t})=>{const{mainModal:e,setMainModal:s}=A();return r.jsxs("dialog",{className:`modal ${e?"modal-open":""}`,children:[r.jsx("div",{className:"modal-box bg-white w-11/12",children:t}),r.jsx("form",{method:"dialog",className:"modal-backdrop",children:r.jsx("button",{onClick:()=>s(!1),children:"close"})})]})},Ct=()=>{const{setMainModal:t}=A(),e=$(),[s,n]=j.useState(""),[o,c]=j.useState(""),[l,u]=j.useState(""),[m,h]=j.useState(""),[O,i]=j.useState(""),[g,C]=j.useState(""),y=e.getQueryData(["fetchDatagrades"]),w=e.getQueryData(["fetchDatasections"]),N=async b=>{b.preventDefault();try{const{data:I}=await axios.post("/api/students",{studentFirstName:s,studentLastName:o,studentEmailName:l,studentPasswordName:m,gradeId:O,sectionId:g});I&&(n(""),c(""),u(""),h(""),i(""),C(""),e.invalidateQueries({queryKey:["fetchDatastudents"]}),t(!1)),Oe.success(I.message)}catch(I){console.error(I)}};return r.jsxs(we,{children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("h1",{className:"text-xl",children:"Add Student"}),r.jsx("button",{className:"btn btn-xs btn-error",onClick:()=>t(!1),children:r.jsx(ne,{})})]}),r.jsx("div",{className:"divider"}),r.jsxs("form",{onSubmit:N,children:[r.jsx("input",{name:"studentFirstName",type:"text",placeholder:"First Name",className:"input input-bordered w-full bg-transparent my-1",value:s,onChange:b=>n(b.target.value)}),r.jsx("input",{name:"studentLastName",type:"text",placeholder:"Last Name",className:"input input-bordered w-full bg-transparent my-1",value:o,onChange:b=>c(b.target.value)}),r.jsx("input",{name:"studentEmailName",type:"text",placeholder:"Email",className:"input input-bordered w-full bg-transparent my-1",value:l,onChange:b=>u(b.target.value)}),r.jsx("input",{name:"studentPasswordName",type:"password",placeholder:"Password",className:"input input-bordered w-full bg-transparent my-1",value:m,onChange:b=>h(b.target.value)}),r.jsxs("select",{className:"select select-bordered w-full bg-transparent my-1",onChange:b=>i(b.target.value),children:[r.jsx("option",{value:"",children:"--Grade--"}),y==null?void 0:y.map(b=>r.jsx("option",{value:b.id,children:b.level},b.level))]}),r.jsxs("select",{className:"select select-bordered w-full bg-transparent my-1",onChange:b=>C(b.target.value),children:[r.jsx("option",{value:"",children:"--Section--"}),w==null?void 0:w.map(b=>r.jsx("option",{value:b.id,children:b.name},b.name))]}),r.jsx("button",{className:"btn btn-primary w-full text-white mt-10",children:"Create"})]})]})},Nt=()=>{const{setMainModal:t}=A(),e=$(),[s,n]=j.useState(""),o=async c=>{c.preventDefault();try{const{data:l}=await axios.post("/api/sections",{sectionName:s});l&&(n(""),e.invalidateQueries({queryKey:["fetchDatasections"]}),t(!1)),Oe.success(l.message)}catch(l){console.error(l)}};return r.jsxs(we,{children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("h1",{className:"text-xl",children:"Add Section"}),r.jsx("button",{className:"btn btn-xs btn-error",onClick:()=>t(!1),children:r.jsx(ne,{})})]}),r.jsx("div",{className:"divider"}),r.jsxs("form",{onSubmit:o,children:[r.jsx("input",{name:"setSectionName",type:"text",placeholder:"Section Name",className:"input input-bordered w-full bg-transparent my-1",value:s,onChange:c=>n(c.target.value)}),r.jsx("button",{className:"btn btn-primary w-full text-white mt-10",children:"Create"})]})]})},wt=()=>{const{setMainModal:t}=A(),e=$(),[s,n]=j.useState(""),o=async c=>{c.preventDefault();try{const{data:l}=await axios.post("/api/grades",{gradeId:s});l&&(n(""),e.invalidateQueries({queryKey:["fetchDatagrades"]}),t(!1)),Oe.success(l.message)}catch(l){console.error(l)}};return r.jsxs(we,{children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("h1",{className:"text-xl",children:"Add Grade"}),r.jsx("button",{className:"btn btn-xs btn-error",onClick:()=>t(!1),children:r.jsx(ne,{})})]}),r.jsx("div",{className:"divider"}),r.jsxs("form",{onSubmit:o,children:[r.jsx("input",{name:"setGradeId",type:"text",placeholder:"Grade",className:"input input-bordered w-full bg-transparent my-1",value:s,onChange:c=>n(c.target.value)}),r.jsx("button",{className:"btn btn-primary w-full text-white mt-10",children:"Create"})]})]})},St=({children:t})=>{const{contentModal:e,setContentModal:s}=A();return r.jsxs("dialog",{className:`modal ${e?"modal-open":""}`,children:[r.jsx("div",{className:"modal-box bg-white w-11/12",children:t}),r.jsx("form",{method:"dialog",className:"modal-backdrop",children:r.jsx("button",{onClick:()=>s(!1),children:"close"})})]})},Rt=({model:t,id:e})=>{const{setContentModal:s}=A(),n=async()=>{try{const{data:l}=await nt.get("/api/"+t+"/"+e);return console.log(l),l}catch{}},{data:o,isLoading:c}=mt({queryKey:["fetchSingleData"+t+e],queryFn:n,enabled:!!(t&&e)});return r.jsx(St,{children:c?r.jsx(r.Fragment,{}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("h1",{className:"font-bold text-2xl",children:"Details:"}),r.jsx("button",{className:"btn btn-xs btn-error",onClick:()=>s(!1),children:r.jsx(ne,{})})]}),r.jsx("div",{className:"divider"}),t=="students"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"justify",children:[" ",r.jsx("span",{className:"font-semibold",children:"Name:"})," ",o.first_name+" "+o.last_name]}),r.jsxs("p",{className:"justify",children:[" ",r.jsx("span",{className:"font-semibold",children:"Email:"})," ",o.email]}),r.jsxs("p",{className:"justify",children:[" ",r.jsx("span",{className:"font-semibold",children:"Grade:"})," ",o.grade.level]}),r.jsxs("p",{className:"justify",children:[" ",r.jsx("span",{className:"font-semibold",children:"Section:"})," ",o.section.name]})]}):null,t=="grades"?r.jsx(r.Fragment,{children:r.jsxs("p",{className:"justify",children:[" ",r.jsx("span",{className:"font-semibold",children:"Name:"})," ",o.level]})}):null,t=="sections"?r.jsx(r.Fragment,{children:r.jsxs("p",{className:"justify",children:[" ",r.jsx("span",{className:"font-semibold",children:"Name:"})," ",o.name]})}):null]})})},Qt=()=>{var O;const{selectedMenu:t,setMainModal:e,setContentModal:s}=A(),n=$(),o=n.getQueryData(["fetchDatastudents"]),c=n.getQueryData(["fetchDatagrades"]),l=n.getQueryData(["fetchDatasections"]),u=n.getQueryData(["fetchDataQuiz1"]),[m,h]=j.useState(null);return r.jsxs("div",{className:"overflow-x-auto",children:[t=="students"?r.jsx(Ct,{}):null,t=="grades"?r.jsx(wt,{}):null,t=="sections"?r.jsx(Nt,{}):null,m?r.jsx(Rt,{model:t,id:m}):null,r.jsx("div",{className:"flex justify-end",children:t!="quiz 1"?r.jsx("button",{className:"btn btn-sm btn-primary text-white",onClick:()=>{e(!0)},children:"Add"}):null}),r.jsxs("table",{className:"table table-xs",children:[r.jsxs("thead",{children:[t=="students"?r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Grade"}),r.jsx("th",{children:"Section"}),r.jsx("th",{})]}):null,t=="grades"?r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Level"}),r.jsx("th",{})]}):null,t=="sections"?r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Name"}),r.jsx("th",{})]}):null,t=="quiz 1"?r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Score"})]}):null]}),r.jsxs("tbody",{children:[t=="students"?r.jsx(r.Fragment,{children:o.map((i,g)=>r.jsxs("tr",{className:"hover:bg-slate-300 transition-all duration-300 ease-in-out",children:[r.jsx("th",{children:g+1}),r.jsx("td",{children:i.first_name+" "+i.last_name}),r.jsxs("td",{children:[" ",i.email]}),r.jsxs("td",{children:[" ",i.grade.level]}),r.jsxs("td",{children:[" ",i.section.name]}),r.jsx("td",{children:r.jsx("button",{className:"btn btn-xs btn-ghost",onClick:()=>{h(i.id),s(!0)},children:"view"})})]},i.id))}):null,t=="grades"?r.jsx(r.Fragment,{children:c.map((i,g)=>r.jsxs("tr",{className:"hover:bg-slate-300 transition-all duration-300 ease-in-out",children:[r.jsx("th",{children:g+1}),r.jsxs("td",{children:[" ",i.level]}),r.jsx("td",{children:r.jsx("button",{className:"btn btn-xs btn-ghost",onClick:()=>{h(i.id),s(!0)},children:"view"})})]},i.id))}):null,t=="sections"?r.jsx(r.Fragment,{children:l.map((i,g)=>r.jsxs("tr",{className:"hover:bg-slate-300 transition-all duration-300 ease-in-out",children:[r.jsx("th",{children:g+1}),r.jsxs("td",{children:[" ",i.name]}),r.jsx("td",{children:r.jsx("button",{className:"btn btn-xs btn-ghost",onClick:()=>{h(i.id),s(!0)},children:"view"})})]},i.id))}):null,t=="quiz 1"?r.jsx(r.Fragment,{children:(O=u.scores)==null?void 0:O.map((i,g)=>r.jsxs("tr",{className:"hover:bg-slate-300 transition-all duration-300 ease-in-out",children:[r.jsx("th",{children:g+1}),r.jsx("td",{children:i.student.first_name+" "+i.student.last_name}),r.jsx("td",{children:i.score})]},i.id))}):null]})]})]})},It=Qt;export{It as T,Ft as u};
