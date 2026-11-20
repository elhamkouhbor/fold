const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Fold3DView-Dp1is4Bs.js","assets/index-BTtZtgaC.js","assets/index-BGjdqUlO.css"])))=>i.map(i=>d[i]);
var Qu=Object.defineProperty;var Ju=(n,e,t)=>e in n?Qu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Rn=(n,e,t)=>Ju(n,typeof e!="symbol"?e+"":e,t);import{r as te,j as f,a as ef,B as _s,L as tf,b as nf,c as sf,_ as rf}from"./index-BTtZtgaC.js";function Bl(n,e,t=.01){if(!n||!e)return[{severity:"error",code:"canvas-unavailable",message:"Both files need valid physical canvas metadata."}];const i=Math.abs(n.widthMm-e.widthMm)<=t&&Math.abs(n.heightMm-e.heightMm)<=t,s=n.sourceToMm.every((r,o)=>Math.abs(r-e.sourceToMm[o])<=1e-6);return!i||!s?[{severity:"error",code:"canvas-mismatch",message:"Canvas size or viewBox mapping differs; files were not auto-fitted."}]:[]}const Ps={"black-red":{cut:["#000000"],crease:["#ff0000"],ignore:[],tolerance:24},"blue-red":{cut:["#0000ff"],crease:["#ff0000"],ignore:[],tolerance:24}},af=/(?:^|[\s_-])(cut|crease|perf)(?:$|[\s_-])/i;function of(n){const e=n.trim().match(af);return e?e[1].toLowerCase():null}const zl={black:[0,0,0],white:[255,255,255],red:[255,0,0],lime:[0,255,0],green:[0,128,0],blue:[0,0,255],yellow:[255,255,0],cyan:[0,255,255],aqua:[0,255,255],magenta:[255,0,255],fuchsia:[255,0,255],gray:[128,128,128],grey:[128,128,128],silver:[192,192,192],maroon:[128,0,0],darkred:[139,0,0],navy:[0,0,128],orange:[255,165,0],purple:[128,0,128],olive:[128,128,0],teal:[0,128,128],crimson:[220,20,60]},lf=n=>n.endsWith("%")?Number(n.slice(0,-1))*2.55:Number(n);function lo(n){const e=n.trim().toLowerCase();if(zl[e])return[...zl[e]];const t=e.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/);if(t)return t.slice(1,4).map(u=>parseInt(u+u,16));const i=e.match(/^#([0-9a-f]{6})([0-9a-f]{2})?$/);if(i)return[0,2,4].map(u=>parseInt(i[1].slice(u,u+2),16));const s=e.match(/^rgba?\(\s*([\d.]+%?)\s*[, ]\s*([\d.]+%?)\s*[, ]\s*([\d.]+%?)/);if(s)return s.slice(1,4).map(lf);const r=e.match(/^hsla?\(\s*([\d.]+)(?:deg)?\s*[, ]\s*([\d.]+)%\s*[, ]\s*([\d.]+)%/);if(!r)return null;const o=(Number(r[1])%360+360)%360/360,a=Number(r[2])/100,l=Number(r[3])/100,c=(u,x,g)=>{let v=g;return v<0&&v++,v>1&&v--,v<1/6?u+(x-u)*6*v:v<1/2?x:v<2/3?u+(x-u)*(2/3-v)*6:u};if(!a)return[l*255,l*255,l*255];const h=l<.5?l*(1+a):l+a-l*a,d=2*l-h;return[c(d,h,o+1/3)*255,c(d,h,o)*255,c(d,h,o-1/3)*255]}function Bs(n){const e=lo(n);return e?`#${e.map(t=>Math.round(Math.max(0,Math.min(255,t))).toString(16).padStart(2,"0")).join("")}`:n.trim().toLowerCase()}function cf(n,e=Ps["black-red"]){const t=lo(n);if(!t)return"unknown";const i=[["cut",e.cut],["crease",e.crease],["ignored",e.ignore||[]]];let s="unknown",r=1/0;for(const[o,a]of i)for(const l of a){const c=lo(l);if(!c)continue;const h=Math.hypot(t[0]-c[0],t[1]-c[1],t[2]-c[2]);h<r&&(r=h,s=o)}return r<=e.tolerance?s:"unknown"}function hf(n,e,t){const i=Bs(e),s=o=>o.filter(a=>Bs(a)!==i),r={...n,cut:s(n.cut),crease:s(n.crease),ignore:s(n.ignore||[])};return t==="cut"?r.cut.push(i):t==="crease"?r.crease.push(i):t==="ignored"&&r.ignore.push(i),r}const co=[1,0,0,1,0,0],xi=(n,e)=>[n[0]*e[0]+n[2]*e[1],n[1]*e[0]+n[3]*e[1],n[0]*e[2]+n[2]*e[3],n[1]*e[2]+n[3]*e[3],n[0]*e[4]+n[2]*e[5]+n[4],n[1]*e[4]+n[3]*e[5]+n[5]],nd=(n,e)=>[n[0]*e[0]+n[2]*e[1]+n[4],n[1]*e[0]+n[3]*e[1]+n[5]],df=n=>Math.sqrt(Math.abs(n[0]*n[3]-n[1]*n[2]));function ho(n){let e=co;for(const t of n.matchAll(/([a-z]+)\s*\(([^)]*)\)/gi)){const i=t[2].trim().split(/[\s,]+/).filter(Boolean).map(Number);let s=co;switch(t[1].toLowerCase()){case"matrix":i.length>=6&&(s=i.slice(0,6));break;case"translate":s=[1,0,0,1,i[0]||0,i[1]||0];break;case"scale":s=[i[0]??1,0,0,i[1]??i[0]??1,0,0];break;case"rotate":{const r=(i[0]||0)*Math.PI/180,o=Math.cos(r),a=Math.sin(r),l=[o,a,-a,o,0,0];s=i.length>2?xi(xi([1,0,0,1,i[1],i[2]],l),[1,0,0,1,-i[1],-i[2]]):l;break}case"skewx":s=[1,0,Math.tan((i[0]||0)*Math.PI/180),1,0,0];break;case"skewy":s=[1,Math.tan((i[0]||0)*Math.PI/180),0,1,0,0];break}if(s.some(r=>!Number.isFinite(r)))throw new Error(`Invalid transform "${t[0]}".`);e=xi(e,s)}return e}const uo=(n,e)=>{const t=(n.getAttribute("style")||"").match(new RegExp(`(?:^|;)\\s*${e}\\s*:\\s*([^;!]+)`,"i"));return t?t[1].trim():null};function zo(n,e){for(let t=n;t;t=t.parentElement){const i=uo(t,e)??t.getAttribute(e);if(i&&i.toLowerCase()!=="inherit")return i.trim()}return""}function uf(n){for(let e=n;e;e=e.parentElement)for(const t of[e.id,e.getAttribute("class")||"",e.getAttribute("aria-label")||"",e.getAttribute("inkscape:label")||""]){const i=of(t||"");if(i)return i}return null}const ff=new Set(["path","line","polyline","polygon","rect","circle","ellipse"]),pf=new Set(["defs","clippath","mask","symbol","marker","pattern","metadata","title","desc","lineargradient","radialgradient","filter","style","script"]),mf=new Set(["use","image","svg","foreignobject","switch"]),gf=n=>{const e=uo(n,"display")??n.getAttribute("display"),t=uo(n,"visibility")??n.getAttribute("visibility");return(e==null?void 0:e.toLowerCase())==="none"||(t==null?void 0:t.toLowerCase())==="hidden"};function id(n,e,t){const i={elements:[],unstroked:0,text:0,unsupported:{},hidden:0,transformErrors:[]},s=(r,o,a)=>{const l=r.localName.toLowerCase();if(pf.has(l))return;if(gf(r)){i.hidden++;return}if(!a&&mf.has(l)){i.unsupported[l]=(i.unsupported[l]||0)+1;return}if(l==="text"){i.text++;return}let c=o;try{c=a?o:xi(o,ho(r.getAttribute("transform")||""))}catch(h){i.transformErrors.push(h instanceof Error?h.message:String(h));return}if(ff.has(l)){const h=zo(r,"stroke"),d=uf(r),u=cf(h,e);h.toLowerCase()==="none"||!h&&!d?i.unstroked++:i.elements.push({element:r,tag:l,stroke:h,named:d,colorRole:u,role:d??u,matrix:c})}for(const h of Array.from(r.children))s(h,c,!1)};return s(n,t,!0),i}const fo=(n,e,t)=>{const i=t[0]-e[0],s=t[1]-e[1],r=i*i+s*s||1,o=((n[0]-e[0])*i+(n[1]-e[1])*s)/r;return Math.hypot(n[0]-(e[0]+o*i),n[1]-(e[1]+o*s))},In=(n,e)=>[(n[0]+e[0])/2,(n[1]+e[1])/2];function zr(n,e,t,i,s,r,o=0){if(o>12||Math.max(fo(e,n,i),fo(t,n,i))<=s){r.push(i);return}const a=In(n,e),l=In(e,t),c=In(t,i),h=In(a,l),d=In(l,c),u=In(h,d);zr(n,a,h,u,s,r,o+1),zr(u,d,c,i,s,r,o+1)}function Gr(n,e,t,i,s,r=0){if(r>12||fo(e,n,t)<=i){s.push(t);return}const o=In(n,e),a=In(e,t),l=In(o,a);Gr(n,o,l,i,s,r+1),Gr(l,a,t,i,s,r+1)}const sd=(n,e,t)=>{const i=e>t?2*Math.acos(Math.max(-1,1-t/e)):Math.PI/2;return Math.max(2,Math.min(512,Math.ceil(Math.abs(n)/Math.max(i,.001))))};function xf(n,e,t,i,s,r,o,a,l){let c=Math.abs(t),h=Math.abs(i);if(!c||!h){l.push(e);return}const d=Math.cos(s),u=Math.sin(s),x=(n[0]-e[0])/2,g=(n[1]-e[1])/2,v=d*x+u*g,p=-u*x+d*g;let m=v*v/(c*c)+p*p/(h*h);m>1&&(m=Math.sqrt(m),c*=m,h*=m);const S=r===o?-1:1,_=Math.max(0,c*c*h*h-c*c*p*p-h*h*v*v),T=c*c*p*p+h*h*v*v||1,P=S*Math.sqrt(_/T),C=P*c*p/h,b=-P*h*v/c,U=d*C-u*b+(n[0]+e[0])/2,E=u*C+d*b+(n[1]+e[1])/2,A=(W,$,Z,ae)=>Math.atan2(W*ae-$*Z,W*Z+$*ae),k=(v-C)/c,D=(p-b)/h,N=(-v-C)/c,L=(-p-b)/h,O=Math.atan2(D,k);let z=A(k,D,N,L);!o&&z>0&&(z-=2*Math.PI),o&&z<0&&(z+=2*Math.PI);const Q=sd(z,Math.max(c,h),a);for(let W=1;W<Q;W++){const $=O+z*W/Q;l.push([U+d*c*Math.cos($)-u*h*Math.sin($),E+u*c*Math.cos($)+d*h*Math.sin($)])}l.push(e)}function Gl(n,e=.1){const t=n.match(/[a-zA-Z]|[-+]?(?:\d*\.\d+|\d+\.?)(?:e[-+]?\d+)?/g)||[];let i=0,s="",r=[0,0],o=[0,0],a=null,l=null;const c=[];let h=null;const d=()=>{const g=Number(t[i++]);if(!Number.isFinite(g))throw new Error("Malformed SVG path data.");return g},u=g=>{const v=[d(),d()];return g?[r[0]+v[0],r[1]+v[1]]:v},x=()=>(h||(h={points:[r],closed:!1},c.push(h)),h);for(;i<t.length;){if(/[a-z]/i.test(t[i])&&(s=t[i++]),!s)throw new Error("SVG path data must start with a command.");const g=s===s.toLowerCase(),v=s.toUpperCase();if(v==="Z"){const m=x();m.closed=!0,r=o,h=null,s="",a=l=null;continue}if(v==="M"){r=u(g),o=r,h={points:[r],closed:!1},c.push(h),s=g?"l":"L",a=l=null;continue}const p=x();if(v==="L")r=u(g),p.points.push(r),a=l=null;else if(v==="H"){const m=d();r=[g?r[0]+m:m,r[1]],p.points.push(r),a=l=null}else if(v==="V"){const m=d();r=[r[0],g?r[1]+m:m],p.points.push(r),a=l=null}else if(v==="C"){const m=u(g),S=u(g),_=u(g);zr(r,m,S,_,e,p.points),r=_,a=S,l=null}else if(v==="S"){const m=a?[2*r[0]-a[0],2*r[1]-a[1]]:r,S=u(g),_=u(g);zr(r,m,S,_,e,p.points),r=_,a=S,l=null}else if(v==="Q"){const m=u(g),S=u(g);Gr(r,m,S,e,p.points),r=S,l=m,a=null}else if(v==="T"){const m=l?[2*r[0]-l[0],2*r[1]-l[1]]:r,S=u(g);Gr(r,m,S,e,p.points),r=S,l=m,a=null}else if(v==="A"){const m=Math.abs(d()),S=Math.abs(d()),_=d()*Math.PI/180,T=d()?1:0,P=d()?1:0,C=u(g);xf(r,C,m,S,_,T,P,e,p.points),r=C,a=l=null}else throw new Error(`Unsupported SVG path command ${s}`)}return c.filter(g=>g.points.length>1)}const It=(n,e,t=0)=>{const i=parseFloat(n.getAttribute(e)??"");return Number.isFinite(i)?i:t};function Hl(n,e,t,i,s){const r=Math.max(12,sd(2*Math.PI,Math.max(t,i),s));return Array.from({length:r},(o,a)=>[n+t*Math.cos(a*2*Math.PI/r),e+i*Math.sin(a*2*Math.PI/r)])}function vf(n,e){var i;const t=n.localName.toLowerCase();if(t==="path")return Gl(n.getAttribute("d")||"",e);if(t==="line")return[{points:[[It(n,"x1"),It(n,"y1")],[It(n,"x2"),It(n,"y2")]],closed:!1}];if(t==="polyline"||t==="polygon"){const s=(((i=n.getAttribute("points"))==null?void 0:i.match(/[-+]?(?:\d*\.\d+|\d+\.?)(?:e[-+]?\d+)?/gi))||[]).map(Number),r=[];for(let o=0;o+1<s.length;o+=2)r.push([s[o],s[o+1]]);return r.length>1?[{points:r,closed:t==="polygon"}]:[]}if(t==="rect"){const s=It(n,"x"),r=It(n,"y"),o=It(n,"width"),a=It(n,"height");if(o<=0||a<=0)return[];let l=It(n,"rx",NaN),c=It(n,"ry",NaN);if(Number.isNaN(l)&&(l=Number.isNaN(c)?0:c),Number.isNaN(c)&&(c=l),l=Math.min(l,o/2),c=Math.min(c,a/2),l<=0||c<=0)return[{points:[[s,r],[s+o,r],[s+o,r+a],[s,r+a]],closed:!0}];const h=`M${s+l} ${r}H${s+o-l}A${l} ${c} 0 0 1 ${s+o} ${r+c}V${r+a-c}A${l} ${c} 0 0 1 ${s+o-l} ${r+a}H${s+l}A${l} ${c} 0 0 1 ${s} ${r+a-c}V${r+c}A${l} ${c} 0 0 1 ${s+l} ${r}Z`;return Gl(h,e)}if(t==="circle"){const s=It(n,"r");return s>0?[{points:Hl(It(n,"cx"),It(n,"cy"),s,s,e),closed:!0}]:[]}if(t==="ellipse"){const s=It(n,"rx"),r=It(n,"ry");return s>0&&r>0?[{points:Hl(It(n,"cx"),It(n,"cy"),s,r,e),closed:!0}]:[]}return[]}function _f(n,e,t,i=.1){const s=new DOMParser().parseFromString(n,"image/svg+xml"),r=s.documentElement,o=[],a=[],l=id(r,t,e.sourceToMm);let c=0;for(const h of l.elements){if(h.role!=="cut"&&h.role!=="crease")continue;const d=h.element.getAttribute("id")||`${h.tag}-${c}`;c++;try{const u=i/Math.max(df(h.matrix),1e-12);vf(h.element,u).forEach((x,g)=>a.push({id:g?`${d}#${g}`:d,kind:h.role,closed:x.closed,points:x.points.map(v=>nd(h.matrix,v)),sourcePoints:x.points.map(v=>[v[0],v[1]]),sourceElementId:h.element.getAttribute("id")||void 0}))}catch(u){o.push(`${d}: ${u instanceof Error?u.message:String(u)}`)}}return{polylines:a,warnings:o}}const Mf=new Set(["script","foreignobject","iframe","object","embed","link","audio","video","animate","animatemotion","animatetransform","set","handler","listener"]),yf=new Set(["href","xlink:href","src"]),Sf=/^data:image\/(png|jpeg|jpg|webp);base64,([A-Za-z0-9+/=\s]+)$/i,bf={png:n=>n.startsWith(`PNG\r

`),jpeg:n=>n.startsWith("ÿØÿ"),jpg:n=>n.startsWith("ÿØÿ"),webp:n=>n.startsWith("RIFF")&&n.slice(8,12)==="WEBP"};function jl(n){const e=n.trim().match(Sf);if(!e)return!1;try{const t=atob(e[2].replace(/\s+/g,"").slice(0,24));return bf[e[1].toLowerCase()](t)}catch{return!1}}function fa(n){let e=n.replace(/@import[^;]*;?/gi,"");return e=e.replace(/url\(\s*(['"]?)(.*?)\1\s*\)/gi,(t,i,s)=>s.trim().startsWith("#")?t:"none"),e=e.replace(/expression\s*\(|javascript\s*:|vbscript\s*:|-moz-binding\s*:|behavior\s*:/gi,"blocked("),{css:e,changed:e!==n}}function rd(n){var c;const e=new DOMParser().parseFromString(n,"image/svg+xml"),t=e.querySelector("parsererror");if(t)throw new Error(`Invalid SVG XML: ${((c=t.textContent)==null?void 0:c.trim().slice(0,180))||"parse error"}`);const i=e.documentElement;if(!i||i.localName.toLowerCase()!=="svg")throw new Error("The file must have an <svg> root element.");const s=[];let r=0,o=0,a=0,l=0;for(const h of[i,...Array.from(i.querySelectorAll("*"))]){if(!h.parentNode&&h!==i)continue;const d=h.localName.toLowerCase();if(Mf.has(d)){h.remove(),r++;continue}if(d==="image"){const u=h.getAttribute("href")??h.getAttribute("xlink:href")??"";if(!jl(u)){h.remove(),o++;continue}a++}if(d==="style"){const{css:u,changed:x}=fa(h.textContent||"");x&&(h.textContent=u,r++)}l++;for(const u of Array.from(h.attributes)){const x=u.name.toLowerCase();if(x.startsWith("on")){h.removeAttribute(u.name),r++;continue}const g=u.value;if(yf.has(x)){const v=g.trim();if(v===""||v.startsWith("#")||d==="image"&&jl(v))continue;h.removeAttribute(u.name),r++;continue}if(!(g.indexOf("(")<0&&g.indexOf(":")<0)){if(x==="style"){const{css:v,changed:p}=fa(g);p&&(h.setAttribute(u.name,v),r++)}else if(/url\s*\(/i.test(g)||/(?:java|vb)script\s*:/i.test(g)){const{css:v,changed:p}=fa(g);(p||/(?:java|vb)script\s*:/i.test(v))&&(h.removeAttribute(u.name),r++)}}}}return r&&s.push({severity:"warning",code:"unsafe-content-removed",message:`${r} unsafe SVG element${r===1?"":"s"}/attribute${r===1?"":"s"} removed or neutralised.`}),o&&s.push({severity:"warning",code:"image-rejected",message:`${o} image${o===1?"":"s"} removed: only embedded PNG/JPEG/WebP data is allowed (no linked files, no embedded SVG/HTML).`}),a&&s.push({severity:"info",code:"embedded-images",message:`${a} embedded raster image${a===1?"":"s"} kept (verified PNG/JPEG/WebP).`}),{svg:new XMLSerializer().serializeToString(i),document:e,messages:s,elementCount:l,embeddedImages:a}}const Ef=/^\s*([+]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[-+]?\d+)?)\s*(mm|cm|in|pt|pc|px|q)?\s*$/i,po={mm:1,cm:10,q:.25,in:25.4,pt:25.4/72,pc:25.4/6,px:25.4/96};function Hr(n,e="px"){const t=mo(n);return t?t.value*po[t.unit??e]:null}function mo(n){var i;if(!n)return null;const e=n.match(Ef);if(!e)return null;const t=Number(e[1]);return Number.isFinite(t)&&t>0?{value:t,unit:((i=e[2])==null?void 0:i.toLowerCase())??null}:null}function ad(n,e,t,i,s="px",r=null){const o=mo(e),a=mo(t),l=!i&&!!o&&!!a&&(!o.unit||!a.unit);let c=null;if(n&&n.trim()){if(c=n.trim().split(/[\s,]+/).map(Number),c.length!==4||c.some(P=>!Number.isFinite(P))||c[2]<=0||c[3]<=0)return{canvas:null,error:"invalid-viewbox",unitless:l}}else if(o&&a){const P=C=>C.unit?C.value*po[C.unit]/po.px:C.value;c=[0,0,P(o),P(a)]}else if(!i)return{canvas:null,error:"invalid-viewbox",unitless:l};const h=(i==null?void 0:i.width)||Hr(e,s),d=(i==null?void 0:i.height)||Hr(t,s);if(!h||!d)return{canvas:null,error:"physical-size-required",unitless:l};c||(c=[0,0,h,d]);const[u,x,g,v]=c;let p=h/g,m=d/v,S=0,_=0;const T=(r||"xMidYMid meet").trim().split(/\s+/);if(T[0]!=="none"){const P=T[1]==="slice"?Math.max(p,m):Math.min(p,m),C=T[0].match(/x(Min|Mid|Max)Y(Min|Mid|Max)/)||["","Mid","Mid"],b=U=>U==="Min"?0:U==="Mid"?.5:1;S=(h-g*P)*b(C[1]),_=(d-v*P)*b(C[2]),p=m=P}return{canvas:{viewBox:[u,x,g,v],widthMm:h,heightMm:d,sourceToMm:[p,0,0,m,S-u*p,_-x*m]},unitless:l}}const Vl=n=>n.toFixed(1);function wf(n,e,t){const i=t.userUnit??"px",s=[n.getAttribute("viewBox"),n.getAttribute("width"),n.getAttribute("height")],r=ad(...s,t.manualSizeMm,i,n.getAttribute("preserveAspectRatio"));if(r.error==="invalid-viewbox"&&e.push({severity:"error",code:r.error,message:"A finite, positive four-number viewBox (or absolute width/height) is required."}),r.error==="physical-size-required"&&e.push({severity:"error",code:r.error,message:"Physical size is unknown (missing or percentage width/height). Enter the canvas width and height in millimetres."}),r.unitless&&r.canvas){const o=a=>`${Vl(Hr(s[1],a))} × ${Vl(Hr(s[2],a))} mm`;e.push({severity:"warning",code:"unitless-size",message:`Width/height have no unit; read as ${i} → ${o(i)}. As CSS px it would be ${o("px")}; as PDF points ${o("pt")}. Confirm the unit against a known dimension before trusting the scale.`})}return r}function od(n,e,t={}){const i=rd(n),s=[...i.messages],r=i.document.documentElement,{canvas:o,unitless:a}=wf(r,s,t),l={cut:0,crease:0,perf:0,unknown:0,ignored:0},c=new Map;{const d=t.colors||Ps["black-red"],u=o?o.sourceToMm:[1,0,0,1,0,0],x=id(r,d,u);let g=0;const v=new Set;for(const m of x.elements){l[m.role]+=1;const S=Bs(m.stroke||"(inherited none)"),_=c.get(S)||{color:S,count:0,role:m.colorRole};_.count++,c.set(S,_),m.named&&m.colorRole!=="unknown"&&m.colorRole!=="ignored"&&m.named!==m.colorRole&&g++,m.role==="unknown"&&v.add(S)}g&&s.push({severity:"warning",code:"layer-color-conflict",message:`${g} layer/color conflict${g===1?"":"s"}; named CUT/CREASE layers took precedence.`}),l.unknown&&s.push({severity:"warning",code:"unclassified-stroke",message:`${l.unknown} shape${l.unknown===1?"":"s"} excluded as unclassified (${[...v].join(", ")}). Assign a role or mark as ignored.`}),l.ignored&&s.push({severity:"info",code:"ignored-stroke",message:`${l.ignored} shape${l.ignored===1?"":"s"} ignored by your colour mapping (annotations/dimensions).`}),l.perf&&s.push({severity:"warning",code:"perf-reserved",message:`${l.perf} PERF shape${l.perf===1?"":"s"} excluded; perforation is not supported yet.`}),x.text&&s.push({severity:"info",code:"text-ignored",message:`${x.text} text element${x.text===1?"":"s"} ignored (text is never structural).`});const p=Object.entries(x.unsupported);p.length&&s.push({severity:"warning",code:"unsupported-element",message:`Unsupported elements skipped: ${p.map(([m,S])=>`${S}× <${m}>`).join(", ")}.`}),x.transformErrors.length&&s.push({severity:"error",code:"invalid-transform",message:x.transformErrors[0]}),l.cut||s.push({severity:"error",code:"missing-cuts",message:"No CUT geometry matches the selected mapping."}),l.crease||s.push({severity:"warning",code:"missing-creases",message:"No CREASE geometry matches the selected mapping."})}const h=[...c.values()].sort((d,u)=>u.count-d.count);return{sanitizedSvg:i.svg,canvas:o,counts:l,strokeColors:h,unitless:a,messages:s,elementCount:i.elementCount,sourceSvg:n}}function Or(n){var r;const e=rd(n),t=e.document.documentElement,i=new Set;for(const o of Array.from(t.querySelectorAll("text, tspan"))){const a=((r=(o.getAttribute("style")||"").match(/font-family\s*:\s*([^;]+)/i))==null?void 0:r[1])??o.getAttribute("font-family");a&&i.add(a.replace(/['"]/g,"").trim())}const s=[...e.messages];return i.size&&s.push({severity:"info",code:"artwork-fonts",message:`Artwork contains live text in ${[...i].join(", ")}. It is rendered with fonts installed in this browser (missing ones are substituted); convert text to outlines for exact typography.`}),{sanitizedSvg:e.svg,messages:s,elementCount:e.elementCount,embeddedImages:e.embeddedImages,bytes:n.length,root:{viewBox:t.getAttribute("viewBox"),width:t.getAttribute("width"),height:t.getAttribute("height"),preserveAspectRatio:t.getAttribute("preserveAspectRatio")}}}function Wl(n,e={}){const t=ad(n.root.viewBox,n.root.width,n.root.height,e.manualSizeMm,e.userUnit??"px",n.root.preserveAspectRatio),i=[];return t.error==="invalid-viewbox"&&i.push({severity:"error",code:t.error,message:"Artwork: a finite, positive viewBox (or absolute width/height) is required."}),t.error==="physical-size-required"&&i.push({severity:"error",code:t.error,message:"Artwork: physical size is unknown (missing or percentage width/height). Enter the canvas size in millimetres."}),{canvas:t.canvas,unitless:t.unitless,messages:i}}class Tf{constructor(e){Rn(this,"nodes",[]);Rn(this,"grid",new Map);this.tol=e}cell(e,t){return[Math.floor(e/this.tol),Math.floor(t/this.tol)]}find(e){const[t,i]=this.cell(e[0],e[1]);let s=-1,r=this.tol;for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)for(const l of this.grid.get(`${t+o},${i+a}`)||[]){const c=Math.hypot(this.nodes[l][0]-e[0],this.nodes[l][1]-e[1]);c<=r&&(r=c,s=l)}return s}add(e){const t=this.find(e);if(t>=0)return t;const i=this.nodes.length;this.nodes.push([e[0],e[1]]);const[s,r]=this.cell(e[0],e[1]),o=`${s},${r}`;return(this.grid.get(o)||this.grid.set(o,[]).get(o)).push(i),i}inBox(e,t,i,s){const[r,o]=this.cell(Math.min(e,i)-this.tol,Math.min(t,s)-this.tol),[a,l]=this.cell(Math.max(e,i)+this.tol,Math.max(t,s)+this.tol),c=[];if((a-r+1)*(l-o+1)>this.nodes.length*4){for(let h=0;h<this.nodes.length;h++)c.push(h);return c}for(let h=r;h<=a;h++)for(let d=o;d<=l;d++)c.push(...this.grid.get(`${h},${d}`)||[]);return c}}function Af(n,{snapMm:e=.05,gapMm:t=.2}={}){const i=[];for(const a of n){if(a.kind!=="cut"&&a.kind!=="crease")continue;const l=a.points.length+(a.closed?1:0);for(let c=0;c+1<l;c++){const h=a.points[c%a.points.length],d=a.points[(c+1)%a.points.length];Math.hypot(d[0]-h[0],d[1]-h[1])<=1e-9||i.push({a:h,b:d,kind:a.kind,source:a.id})}}let s=$l(i,e);const r=t>e?Rf(s,i,t):[];r.length&&(s=$l(i,e));const o=s.messages;if(r.length){const a=Math.max(...r.map(l=>l.distanceMm));o.push({severity:"warning",code:"gap-repaired",message:`${r.length} dangling line end${r.length===1?"":"s"} bridged across gaps up to ${a.toFixed(3)} mm (limit ${t} mm). Check the marked spots in the drawing.`})}return{nodes:s.nodes,edges:s.edges,repairs:r,messages:o}}function Rf(n,e,t){const i=n.nodes.map(()=>0);n.edges.forEach(l=>{i[l.a]++,i[l.b]++});const s=n.nodes.map((l,c)=>c).filter(l=>i[l]===1),r=new Set,o=[],a=l=>n.edges.find(c=>c.a===l||c.b===l).kind;for(const l of s){if(r.has(l))continue;const c=n.nodes[l],h=n.edges.find(g=>g.a===l||g.b===l);let d=null,u=t,x=-1;for(const g of s){if(g===l||r.has(g)||g===h.a||g===h.b)continue;const v=Math.hypot(n.nodes[g][0]-c[0],n.nodes[g][1]-c[1]);v<=u&&(u=v,d=n.nodes[g],x=g)}if(!d)for(const g of n.edges){if(g===h||g.a===l||g.b===l)continue;const v=n.nodes[g.a],p=n.nodes[g.b],m=p[0]-v[0],S=p[1]-v[1],_=m*m+S*S,T=Math.max(0,Math.min(1,((c[0]-v[0])*m+(c[1]-v[1])*S)/_)),P=[v[0]+T*m,v[1]+T*S],C=Math.hypot(P[0]-c[0],P[1]-c[1]);C<=u&&(u=C,d=P,x=-1)}d&&(r.add(l),x>=0&&r.add(x),e.forEach((g,v)=>{n.ends[v][0]===l&&(g.a=[d[0],d[1]]),n.ends[v][1]===l&&(g.b=[d[0],d[1]])}),o.push({from:[c[0],c[1]],to:[d[0],d[1]],distanceMm:u,kind:a(l)}))}return o}function $l(n,e){const t=[];let i=0;const s=new Tf(e),r=n.map(h=>[s.add(h.a),s.add(h.b)]),o=n.map((h,d)=>d).sort((h,d)=>Math.min(n[h].a[0],n[h].b[0])-Math.min(n[d].a[0],n[d].b[0]));for(let h=0;h<o.length;h++){const d=n[o[h]],u=Math.max(d.a[0],d.b[0]);for(let x=h+1;x<o.length;x++){const g=n[o[x]];if(Math.min(g.a[0],g.b[0])>u+e)break;if(Math.max(d.a[1],d.b[1])<Math.min(g.a[1],g.b[1])-e||Math.max(g.a[1],g.b[1])<Math.min(d.a[1],d.b[1])-e)continue;const v=Cf(d,g,e);v&&s.add(v)}}const a=new Map;let l=0;n.forEach((h,d)=>{const[u,x]=r[d];if(u===x){i++;return}const g=s.nodes[u],v=s.nodes[x],p=v[0]-g[0],m=v[1]-g[1],S=Math.hypot(p,m),_=[{t:0,i:u},{t:S,i:x}];for(const T of s.inBox(g[0],g[1],v[0],v[1])){if(T===u||T===x)continue;const P=s.nodes[T],C=((P[0]-g[0])*p+(P[1]-g[1])*m)/S;if(C<=0||C>=S)continue;Math.abs((P[0]-g[0])*m-(P[1]-g[1])*p)/S<=e&&_.push({t:C,i:T})}_.sort((T,P)=>T.t-P.t);for(let T=0;T+1<_.length;T++){const P=_[T].i,C=_[T+1].i;if(P===C)continue;const b=P<C?`${P}|${C}`:`${C}|${P}`,U=a.get(b);if(!U){a.set(b,{id:"",a:Math.min(P,C),b:Math.max(P,C),kind:h.kind,sources:[h.source]});continue}U.sources.includes(h.source)||U.sources.push(h.source),U.kind!==h.kind&&(l++,U.kind="cut")}});const c=[...a.values()];return c.forEach((h,d)=>{h.id=`e${d}`}),i&&t.push({severity:"info",code:"micro-segment",message:`${i} segment${i===1?"":"s"} shorter than the ${e} mm snap tolerance collapsed to a point.`}),l&&t.push({severity:"warning",code:"cut-crease-overlap",message:`${l} edge piece${l===1?"":"s"} drawn as both cut and crease; treated as CUT.`}),{nodes:s.nodes,edges:c,ends:r,messages:t}}function Cf(n,e,t){const i=n.b[0]-n.a[0],s=n.b[1]-n.a[1],r=e.b[0]-e.a[0],o=e.b[1]-e.a[1],a=i*o-s*r,l=Math.hypot(i,s),c=Math.hypot(r,o);if(Math.abs(a)<=1e-12*l*c)return null;const h=e.a[0]-n.a[0],d=e.a[1]-n.a[1],u=(h*o-d*r)/a,x=(h*s-d*i)/a;return u*l<=t||(1-u)*l<=t||x*c<=t||(1-x)*c<=t?null:[n.a[0]+u*i,n.a[1]+u*s]}const Fr=n=>n.reduce((e,t,i)=>{const s=n[(i+1)%n.length];return e+t[0]*s[1]-s[0]*t[1]},0)/2;function Xl(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(36).padStart(7,"0")}const Zl=n=>(Math.round(n*100)/100).toFixed(2),pa=n=>`${Zl(n[0])},${Zl(n[1])}`;function Si(n,e){let t=!1;for(let i=0,s=e.length-1;i<e.length;s=i++){const[r,o]=e[i],[a,l]=e[s];o>n[1]!=l>n[1]&&n[0]<(a-r)*(n[1]-o)/(l-o)+r&&(t=!t)}return t}function Lf(n){const e=Fr(n);if(Math.abs(e)<1e-12)return n.reduce((s,r)=>[s[0]+r[0]/n.length,s[1]+r[1]/n.length],[0,0]);let t=0,i=0;return n.forEach((s,r)=>{const o=n[(r+1)%n.length],a=s[0]*o[1]-o[0]*s[1];t+=(s[0]+o[0])*a,i+=(s[1]+o[1])*a}),[t/(6*e),i/(6*e)]}function Pf(n,e={}){const t=e.snapMm??.05,i=Math.sin((e.collinearDeg??.5)*Math.PI/180),s=Af(n.filter(y=>y.kind==="cut"||y.kind==="crease"),{snapMm:t,gapMm:e.gapMm}),{nodes:r,edges:o}=s,a=[...s.messages],l=(y,M,I="warning")=>a.push({severity:I,code:y,message:M}),c=y=>y&1?o[y>>1].b:o[y>>1].a,h=y=>y&1?o[y>>1].a:o[y>>1].b,d=r.map(()=>[]);o.forEach((y,M)=>{d[o[M].a].push(2*M),d[o[M].b].push(2*M+1)});const u=y=>{const M=r[c(y)],I=r[h(y)];return Math.atan2(I[1]-M[1],I[0]-M[0])};for(const y of d)y.sort((M,I)=>u(M)-u(I));const x=new Map;d.forEach(y=>y.forEach((M,I)=>x.set(M,I)));const g=y=>{const M=y^1,I=d[h(y)];return I[(x.get(M)-1+I.length)%I.length]},v=r.map((y,M)=>M),p=y=>{for(;v[y]!==y;)v[y]=v[v[y]],y=v[y];return y};for(const y of o)v[p(y.a)]=p(y.b);const m=new Int32Array(o.length*2).fill(-1),S=[];for(let y=0;y<o.length*2;y++){if(m[y]>=0)continue;const M=[];let I=y;for(let j=0;j<=o.length*2&&m[I]<0;j++)m[I]=S.length,M.push(I),I=g(I);S.push({half:M,area:Fr(M.map(j=>r[c(j)])),component:p(c(y))})}const _=new Map;S.forEach((y,M)=>{const I=_.get(y.component);(I==null||y.area<S[I].area)&&_.set(y.component,M)});const T=new Set(_.values()),P=t*t,C=S.map((y,M)=>!T.has(M)&&y.area>P?M:-1).filter(y=>y>=0),b=y=>S[y].half.map(M=>r[c(M)]),U=new Map;for(const y of C)U.set(S[y].component,(U.get(S[y].component)||0)+S[y].area);for(const[y,M]of U){const I=Math.abs(S[_.get(y)].area);Math.abs(M-I)>Math.max(1e-6*I,P)&&l("area-mismatch",`Face areas (${M.toFixed(2)} mm²) do not sum to the outline area (${I.toFixed(2)} mm²); geometry may be non-planar.`,"error")}const E=[..._.keys()],A=new Map;for(const y of E){const M=r[c(S[_.get(y)].half[0])];let I=-1;for(const j of C)S[j].component!==y&&Si(M,b(j))&&(I<0||S[j].area<S[I].area)&&(I=j);I>=0&&A.set(y,I)}const k=y=>{let M=0,I=y;const j=new Set;for(;A.has(I)&&!j.has(I);)j.add(I),I=S[A.get(I)].component,M++;return M},D=S.map((y,M)=>M),N=y=>{for(;D[y]!==y;)D[y]=D[D[y]],y=D[y];return y};o.forEach((y,M)=>{y.kind==="crease"&&(D[N(m[2*M])]=N(m[2*M+1]))});const L=new Set,O=new Set,z=new Set;for(const y of[...E].sort((M,I)=>k(M)-k(I))){const M=A.get(y);(M==null||!O.has(M))&&L.add(_.get(y));const I=new Set;for(const j of C)S[j].component===y&&S[j].half.some(ie=>L.has(m[ie^1]))&&I.add(N(j));for(const j of C)S[j].component===y&&(I.has(N(j))?O:z).add(j)}if(A.size){const y=[...A.entries()].filter(([,M])=>!O.has(M)).length;y&&l("nested-piece",`${y} cut component${y===1?"":"s"} sit inside a waste region and are treated as separate pieces.`)}const Q=y=>{const M=[],I=[];for(const j of y)M.length&&M[M.length-1]===(j^1)?I.push(M.pop()):M.push(j);for(;M.length>1&&M[0]===(M[M.length-1]^1);)I.push(M.pop()),M.shift();return{kept:M,removed:I}},W=y=>{const M=y.map(j=>[c(j),h(j)]),I=[];for(const[j,ie]of M){const re=I.find(xe=>xe[xe.length-1]===j);re?re.push(ie):I.push([j,ie])}return I.map(j=>j.map(ie=>r[ie]))};let $=0;const ae=[...O].map(y=>{const{kept:M,removed:I}=Q(S[y].half),j=[],ie=[];for(const he of I)o[he>>1].kind==="crease"&&$++;ie.push(...W(I.filter(he=>o[he>>1].kind==="cut")));for(const[he,ve]of A){if(ve!==y)continue;const Se=Q(S[_.get(he)].half);Se.kept.length>=3&&j.push(Se.kept.map(Oe=>r[c(Oe)]));for(const Oe of Se.removed)o[Oe>>1].kind==="crease"&&$++;ie.push(...W(Se.removed.filter(Oe=>o[Oe>>1].kind==="cut")))}const re=M.map(he=>r[c(he)]),xe=j.reduce((he,ve)=>he+Math.abs(Fr(ve)),0);return{fi:y,outer:re,holes:j,slits:ie,areaMm2:Math.abs(Fr(re))-xe,centroid:Lf(re)}});$&&l("dangling-crease",`${$} crease piece${$===1?"":"s"} end inside a panel without separating it; not used as hinges.`);const ue=ae.map((y,M)=>M).sort((y,M)=>ae[y].centroid[1]-ae[M].centroid[1]||ae[y].centroid[0]-ae[M].centroid[0]),J=new Map,se=ue.map((y,M)=>{const I=ae[y],j=`P-${Xl(I.outer.map(pa).sort().join("|"))}`;return J.set(I.fi,j),{id:j,label:`P${M+1}`,outer:I.outer,holes:I.holes,slits:I.slits,areaMm2:I.areaMm2,centroid:I.centroid,piece:-1}}),pe=se.length-new Set(se.map(y=>y.id)).size;pe&&l("duplicate-panel-id",`${pe} panels share a geometry signature; ids may not be unique.`,"error");const ye=new Map;let Ee=0,Be=0;o.forEach((y,M)=>{if(y.kind!=="crease")return;const I=m[2*M],j=m[2*M+1];if(I===j)return;const ie=O.has(I),re=O.has(j);if(ie&&re){const[xe,he]=I<j?[I,j]:[j,I],ve=`${xe}|${he}`,Se=ye.get(ve)||ye.set(ve,{fa:xe,fb:he,edges:[],halves:[]}).get(ve);Se.edges.push(y),Se.halves.push(2*M)}else ie||re?Ee++:Be++}),Be&&l("waste-crease",`${Be} crease piece${Be===1?"":"s"} lie inside cut-out waste; ignored.`),Ee&&l("boundary-crease",`${Ee} crease piece${Ee===1?"":"s"} lie on the material boundary (outside or a cut-out) and cannot hinge.`);const Ne=[];let Ce=0,Xe=0;for(const y of ye.values()){const M=[];for(const Ve of y.halves){const je=r[c(Ve)],de=r[h(Ve)],F=Math.hypot(de[0]-je[0],de[1]-je[1]),fe=[(de[0]-je[0])/F,(de[1]-je[1])/F],me=M.find(Pe=>Math.abs(Pe.dir[0]*fe[1]-Pe.dir[1]*fe[0])<=i&&[je,de].every(De=>Math.abs((De[0]-Pe.origin[0])*Pe.dir[1]-(De[1]-Pe.origin[1])*Pe.dir[0])<=2*t));me?(me.halves.push(Ve),me.length+=F):M.push({dir:fe,origin:je,halves:[Ve],length:F})}M.sort((Ve,je)=>je.length-Ve.length);for(const Ve of M.slice(1))Ce+=Ve.halves.length,Xe+=Ve.length;const I=M[0];let j=I.dir;(Math.abs(j[0])>=Math.abs(j[1])?j[0]<0:j[1]<0)&&(j=[-j[0],-j[1]]);const ie=I.halves.flatMap(Ve=>[r[c(Ve)],r[h(Ve)]]).map(Ve=>(Ve[0]-I.origin[0])*j[0]+(Ve[1]-I.origin[1])*j[1]),re=Math.min(...ie),xe=Math.max(...ie),he=[I.origin[0]+j[0]*re,I.origin[1]+j[1]*re],ve=[I.origin[0]+j[0]*xe,I.origin[1]+j[1]*xe],Se=I.halves[0],Oe=r[c(Se)],le=r[h(Se)],Qe=(le[0]-Oe[0])*j[0]+(le[1]-Oe[1])*j[1]>0,Ze=m[Qe?Se:Se^1],Fe=m[Qe?Se^1:Se],Le=J.get(Ze),Me=J.get(Fe),He=[...new Set(I.halves.flatMap(Ve=>o[Ve>>1].sources))].sort(),it=I.halves.map(Ve=>[r[c(Ve)],r[h(Ve)]]);Ne.push({id:`H-${Xl([Le,Me].sort().join("|")+"|"+pa(he)+"|"+pa(ve))}`,label:"",panelA:Le,panelB:Me,a:he,b:ve,axis:[j[0],j[1]],lengthMm:I.length,segments:it,sourceCreaseIds:He,sourceCreaseId:He[0]})}Ce&&l("non-collinear-crease",`${Ce} crease piece${Ce===1?"":"s"} (${Xe.toFixed(2)} mm) join two panels off their main hinge line; excluded from hinges.`),Ne.sort((y,M)=>Math.min(y.a[1],y.b[1])-Math.min(M.a[1],M.b[1])||Math.min(y.a[0],y.b[0])-Math.min(M.a[0],M.b[0])),Ne.forEach((y,M)=>{y.label=`H${M+1}`});const X=[],G=new Map;for(const y of se){if(G.has(y.id))continue;const M=X.length,I=[],j=[y.id];for(G.set(y.id,M);j.length;){const ie=j.pop();I.push(ie);for(const re of Ne){const xe=re.panelA===ie?re.panelB:re.panelB===ie?re.panelA:null;xe&&!G.has(xe)&&(G.set(xe,M),j.push(xe))}}X.push(I)}se.forEach(y=>{y.piece=G.get(y.id)});const ne=r.map(()=>0);o.forEach(y=>{ne[y.a]++,ne[y.b]++});const oe=[];o.forEach((y,M)=>{if(y.kind==="cut")for(const I of[y.a,y.b])ne[I]===1&&L.has(m[2*M])&&oe.push(r[I])});const ce=[...z].map(y=>({outer:b(y),areaMm2:S[y].area}));if(!se.length){const y=oe.length?` Nearest open cut end at (${oe[0][0].toFixed(1)}, ${oe[0][1].toFixed(1)}) mm.`:"";throw new Error(`No closed CUT outline was found; close the material boundary before panel extraction.${y}`)}oe.length&&l("open-cut-end",`${oe.length} cut line end${oe.length===1?"":"s"} stop on the outside of the sheet (dangling cuts or outline gaps larger than ${t} mm).`),ce.length&&l("waste-region",`${ce.length} fully enclosed cut-only region${ce.length===1?"":"s"} treated as waste (removed material).`,"info"),X.length>1&&l("multiple-pieces",`${X.length} separate material pieces (no crease connects them).`);const Ie=Ne.length-se.length+X.length;Ie>0&&l("hinge-cycle",`Hinge graph has ${Ie} cycle${Ie===1?"":"s"}; folding must choose a spanning tree and treat remaining hinges as closure constraints.`);const Ae=se.reduce((y,M)=>y+M.areaMm2,0);return{panels:se,hinges:Ne,waste:ce,pieces:X,graph:s,openEnds:oe,materialAreaMm2:Ae,messages:a,warnings:a.filter(y=>y.severity!=="info").map(y=>y.message)}}function Nf(n,e){const[t,i]=n;let s=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){const[a,l]=e[r],[c,h]=e[o];l>i!=h>i&&t<(c-a)*(i-l)/(h-l)+a&&(s=!s)}return s}const Df=()=>new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0]);function Uf(n,e){const t=new Float64Array(12);for(let i=0;i<3;i++){for(let s=0;s<3;s++)t[i*4+s]=n[i*4]*e[s]+n[i*4+1]*e[4+s]+n[i*4+2]*e[8+s];t[i*4+3]=n[i*4]*e[3]+n[i*4+1]*e[7]+n[i*4+2]*e[11]+n[i*4+3]}return t}function If(n,e,t,i,s,r,o){const a=Math.cos(o),l=Math.sin(o),c=1-a,h=c*i*i+a,d=c*i*s-l*r,u=c*i*r+l*s,x=c*i*s+l*r,g=c*s*s+a,v=c*s*r-l*i,p=c*i*r-l*s,m=c*s*r+l*i,S=c*r*r+a,_=n-(h*n+d*e+u*t),T=e-(x*n+g*e+v*t),P=t-(p*n+m*e+S*t);return new Float64Array([h,d,u,_,x,g,v,T,p,m,S,P])}const ql=n=>[n[0],-n[1],0];function Of(n,e){const t=n.panels.findIndex(a=>Nf(e.root,a.outline));if(t<0)throw new Error("fold: spec.root is not inside any panel");const i=n.panels.map(()=>null),s=[t],r=new Set([t]),o=[];for(let a=0;a<s.length;a++){const l=s[a];n.hinges.forEach((c,h)=>{const d=c.a===l?c.b:c.b===l?c.a:-1;if(d<0||r.has(d))return;r.add(d),s.push(d),i[d]=h;const u=c.creaseId;(!u||!e.hinges[u])&&o.push(u??`<unnamed hinge ${h}>`)})}if(o.length)throw new Error(`fold: hinges without a FoldSpec entry: ${o.join(", ")}`);return{graph:n,spec:e,rootPanel:t,parentHinge:i,order:s}}function ld(n,e){if(n.fixed)return n.angle;const t=n.t0??0,i=n.t1??1,s=Math.max(0,Math.min(1,(e-t)/Math.max(i-t,1e-9))),r=n.ease==="linear"?s:s*s*(3-2*s),o=n.openAngle??0;return n.angle+(o-n.angle)*r}function Ff(n,e){const{graph:t,spec:i}=n,s=t.panels.map(()=>Df());for(const r of n.order){const o=n.parentHinge[r];if(o==null)continue;const a=t.hinges[o],l=a.a===r?a.b:a.a,c=i.hinges[a.creaseId],[h,d,u]=ql(a.p0),[x,g,v]=ql(a.p1);let p=x-h,m=g-d,S=v-u;const _=Math.hypot(p,m,S)||1;p/=_,m/=_,S/=_;const T=If(h,d,u,p,m,S,ld(c,e));s[r]=Uf(s[l],T)}return s}const cd=72,kf=25.4,qn=cd/kf,zM=n=>n*cd,GM=n=>n*qn,Pi=n=>[n[0]*qn,n[1]*qn];function Bf(n){return[...n.panels].sort((e,t)=>t.areaMm2-e.areaMm2||e.id.localeCompare(t.id))[0].id}function nr(n,e=Bf(n)){const t=new Map(n.panels.map((g,v)=>[g.id,v])),i=n.panels[t.get(e)??-1];if(!i)throw new Error(`fold: unknown root panel ${e}`);const s={panels:n.panels.map((g,v)=>({id:v,outline:g.outer.map(Pi),holes:g.holes.map(p=>p.map(Pi)),slits:g.slits.map(p=>p.map(Pi)),area:g.areaMm2*qn*qn})),hinges:n.hinges.map(g=>({a:t.get(g.panelA),b:t.get(g.panelB),p0:Pi(g.a),p1:Pi(g.b),creaseId:g.id}))},r={root:Pi(Gf(i.outer,i.holes)),hinges:Object.fromEntries(n.hinges.map(g=>[g.id,{angle:0,ease:"linear"}]))},o=Of(s,r);if(o.rootPanel!==t.get(e))throw new Error("fold: root probe landed in the wrong panel");const a={},l={},c={},h={},d={};n.panels.forEach(g=>{a[g.id]=null,l[g.id]=null,c[g.id]=[]});const u=new Set(o.order.map(g=>n.panels[g].id));for(const g of o.order){const v=o.parentHinge[g];if(v==null)continue;const p=n.hinges[v],m=n.panels[g],S=p.panelA===m.id?p.panelB:p.panelA;a[m.id]=p.id,l[m.id]=S,c[S].push(m.id),d[p.id]=m.id,h[p.id]=zf(p.a,p.b,m.outer,m.holes)}const x=new Set(Object.values(a).filter(Boolean));return{graph:n,rootId:e,model:o,parentHinge:a,parent:l,children:c,sign:h,childOf:d,closureHinges:n.hinges.filter(g=>!x.has(g.id)&&u.has(g.panelA)&&u.has(g.panelB)).map(g=>g.id),unreachable:n.panels.filter(g=>!u.has(g.id)).map(g=>g.id)}}function zf(n,e,t,i){const s=Math.hypot(e[0]-n[0],e[1]-n[1]),r=[(e[0]-n[0])/s,-(e[1]-n[1])/s],o=[-(e[1]-n[1])/s,(e[0]-n[0])/s],a=d=>Si(d,t)&&!i.some(u=>Si(d,u));let l=0;for(const d of[.5,.25,.75,.1,.9]){const u=[n[0]+(e[0]-n[0])*d,n[1]+(e[1]-n[1])*d];for(const x of[.05,.2,1]){const g=a([u[0]+o[0]*x,u[1]+o[1]*x]),v=a([u[0]-o[0]*x,u[1]-o[1]*x]);if(g!==v){l=g?1:-1;break}}if(l)break}if(!l)throw new Error("fold: cannot tell which side of a hinge its child panel is on");const c=[o[0]*l,-o[1]*l];return r[0]*c[1]-r[1]*c[0]>0?-1:1}function Gf(n,e){const t=n.map(c=>c[0]),i=n.map(c=>c[1]),[s,r,o,a]=[Math.min(...t),Math.max(...t),Math.min(...i),Math.max(...i)],l=c=>Si(c,n)&&!e.some(h=>Si(c,h));for(let c=2;c<=64;c*=2)for(let h=1;h<c;h+=2)for(let d=1;d<c;d+=2){const u=[s+(r-s)*h/c,o+(a-o)*d/c];if(l(u))return u}throw new Error("fold: could not find a point inside the root panel")}function hd(n,e,t){for(const i of n.graph.hinges){const s=n.model.spec.hinges[i.id],r=Math.max(-180,Math.min(180,e[i.id]??0));s.angle=n.childOf[i.id]?r*Math.PI/180*n.sign[i.id]:0;const[o,a]=[0,1];s.ease="linear",s.t0=1-Math.max(o,a),s.t1=1-Math.min(o,a),s.openAngle=0}}function is(n,e,t=1,i){const s=Math.max(0,Math.min(1,t));hd(n,e);const r=Ff(n.model,1-s),o={};return n.graph.panels.forEach((a,l)=>{const c=new Float64Array(r[l]);c[3]/=qn,c[7]/=qn,c[11]/=qn,o[a.id]=c}),o}function Hf(n,e,t=1,i){hd(n,e);const s=1-Math.max(0,Math.min(1,t)),r={};for(const o of n.graph.hinges)r[o.id]=n.childOf[o.id]?ld(n.model.spec.hinges[o.id],s)*180/Math.PI*n.sign[o.id]:0;return r}function vi(n,e){const t=e[0],i=-e[1];return[n[0]*t+n[1]*i+n[3],n[4]*t+n[5]*i+n[7],n[8]*t+n[9]*i+n[11]]}const es=n=>[n[2],n[6],n[10]],Ns=()=>({angles:{},timeline:[],mode:"simultaneous",manual:{},suggestion:{},rootId:null}),Yl=n=>Math.max(-180,Math.min(180,Math.round(n*10)/10));function jf(n,e){switch(e.type){case"setAngle":return{...n,angles:{...n.angles,[e.hingeId]:Yl(e.deg)},manual:{...n.manual,[e.hingeId]:!0}};case"flip":return{...n,angles:{...n.angles,[e.hingeId]:Yl(-(n.angles[e.hingeId]??0))},manual:{...n.manual,[e.hingeId]:!0}};case"setMode":return{...n,mode:e.mode};case"setRoot":return{...n,rootId:e.rootId};case"setTimeline":return{...n,timeline:e.timeline,mode:"sequence"};case"clearManual":{const t={...n.manual};delete t[e.hingeId];const i=n.suggestion[e.hingeId];return{...n,manual:t,angles:{...n.angles,[e.hingeId]:i?i.angleDeg:0}}}case"applySuggestion":{const t={...n.angles},i={};for(const s of e.proposals)i[s.hingeId]=s,n.manual[s.hingeId]||(t[s.hingeId]=s.angleDeg);return{...n,angles:t,suggestion:i,timeline:e.timeline??n.timeline,mode:e.timeline?"sequence":n.mode}}case"resetAll":return{...Ns(),rootId:n.rootId}}}const dd=(n=Ns())=>({past:[],present:n,future:[],lastKey:null}),Vf=n=>n.type==="setAngle"?`setAngle:${n.hingeId}`:n.type==="setTimeline"&&n.coalesce?`tl:${n.coalesce}`:null;function Wf(n,e){if(e.type==="load")return dd(e.present);if(e.type==="undo")return n.past.length?{past:n.past.slice(0,-1),present:n.past[n.past.length-1],future:[n.present,...n.future],lastKey:null}:n;if(e.type==="redo")return n.future.length?{past:[...n.past,n.present],present:n.future[0],future:n.future.slice(1),lastKey:null}:n;if(e.type==="endGesture")return{...n,lastKey:null};const t=jf(n.present,e);if(JSON.stringify(t)===JSON.stringify(n.present))return n;const i=Vf(e);return i&&i===n.lastKey?{...n,present:t,future:[]}:{past:[...n.past,n.present].slice(-200),present:t,future:[],lastKey:i}}const Go={linear:n=>n,smooth:n=>n*n*(3-2*n),easeIn:n=>n*n,easeOut:n=>1-(1-n)*(1-n),easeInOut:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2},ud=1200;function ls(n){let e=0;return{windows:n.map(i=>{const s=e+Math.max(0,i.delayMs),r=s+Math.max(1,i.durationMs);return e=r,{stepId:i.id,start:s,end:r}}),totalMs:e}}function fd(n,e,t,i){const{windows:s}=ls(n),r=Object.fromEntries(i.map(o=>[o,0]));return n.forEach((o,a)=>{const l=s[a],c=t<=l.start?0:t>=l.end?1:Go[o.easing]((t-l.start)/(l.end-l.start));for(const h of o.ops){if(!(h.hingeId in r))continue;const d=r[h.hingeId],u=h.angleDeg??e[h.hingeId]??0;r[h.hingeId]=d+(u-d)*c}}),r}const $f=(n,e,t)=>fd(n,e,ls(n).totalMs,t),Xf=(n,e)=>{const t=new Set(n.flatMap(i=>i.ops.map(s=>s.hingeId)));return e.filter(i=>!t.has(i))};function Zf(n,e){const{windows:t,totalMs:i}=ls(n),s={};n.forEach((r,o)=>{for(const a of r.ops){const l=t[o],c=s[a.hingeId];s[a.hingeId]=[c?c[0]:l.start/i,l.end/i]}});for(const r of e)s[r]??(s[r]=[0,1]);return s}let qf=0;const pd=n=>{let e;do e=`s${(++qf).toString(36)}`;while(n.some(t=>t.id===e));return e};function qi(n,e,t){const i=n.findIndex(o=>o.id===e);if(i<0)return n;const s=n.slice(),[r]=s.splice(i,1);return s.splice(Math.max(0,Math.min(s.length,t)),0,r),s}function Ds(n,e,t,i){let s;const r=n.map(o=>{if(i&&o.id!==i)return o;const a=o.ops.find(l=>l.hingeId===e);return a?(s??(s=a),{...o,ops:o.ops.filter(l=>l.hingeId!==e)}):o});return t?r.map(o=>o.id===t&&!o.ops.some(a=>a.hingeId===e)?{...o,ops:[...o.ops,s??{hingeId:e}]}:o):r}function Yf(n,e=`Step ${n.length+1}`,t=n.length,i=[]){const s={id:pd(n),name:e,ops:i.map(o=>({hingeId:o})),durationMs:ud,delayMs:0,easing:"smooth"},r=n.slice();return r.splice(t,0,s),r}function Kf(n,e){const t=n.findIndex(r=>r.id===e);if(t<0)return n;const i={...n[t],id:pd(n),name:`${n[t].name} (copy)`,ops:n[t].ops.map(r=>({...r}))},s=n.slice();return s.splice(t+1,0,i),s}const md=(n,e)=>n.filter(t=>t.id!==e),ir=(n,e,t)=>n.map(i=>i.id===e?{...i,...t,durationMs:Math.max(50,t.durationMs??i.durationMs),delayMs:Math.max(0,t.delayMs??i.delayMs)}:i),Kl=(n,e,t,i)=>n.map(s=>s.id===e?{...s,ops:s.ops.map(r=>r.hingeId===t?i==null?{hingeId:t}:{hingeId:t,angleDeg:Math.max(-180,Math.min(180,i))}:r)}:s),Qf={wall:"Raise walls","glue-flap":"Glue flap",closure:"Close end","dust-flap":"Dust flaps","tuck-flap":"Tuck flap",tab:"Tabs","inner-wall":"Roll inner walls","corner-flap":"Corner flaps","lock-tab":"Lock tabs",unknown:"Other folds"};function Jf(n,e){const t=e.map(c=>n.hinges.find(h=>h.id===c)).filter(Boolean),i=n.panels.flatMap(c=>c.outer.map(h=>h[0])),s=n.panels.flatMap(c=>c.outer.map(h=>h[1])),r=(Math.min(...i)+Math.max(...i))/2,o=(Math.min(...s)+Math.max(...s))/2,a=new Set(t.map(c=>{const h=(c.a[0]+c.b[0])/2,d=(c.a[1]+c.b[1])/2;return Math.abs(c.axis[0])>=Math.abs(c.axis[1])?d<o?"top":"bottom":h<r?"left":"right"})),l=["top","bottom","left","right"];return[...a].sort((c,h)=>l.indexOf(c)-l.indexOf(h)).join(" & ")}function Ql(n,e){const t=o=>{var a;return((a=e.hinges.find(l=>l.id===o))==null?void 0:a.label)??o},i=new Map;for(const o of Object.values(n.hinges).sort((a,l)=>a.step-l.step||t(a.hingeId).localeCompare(t(l.hingeId),void 0,{numeric:!0})))(i.get(o.step)??i.set(o.step,[]).get(o.step)).push(o.hingeId);const s=[...i.entries()].sort((o,a)=>o[0]-a[0]).map(([o,a])=>{const l=[...new Set(a.map(c=>n.hinges[c].role))];return{id:`auto-${o}`,name:l.map(c=>Qf[c]).join(" + "),ops:a.map(c=>({hingeId:c})),durationMs:ud,delayMs:0,easing:"smooth"}}),r=new Map;for(const o of s)r.set(o.name,(r.get(o.name)??0)+1);return s.map(o=>r.get(o.name)>1?{...o,name:`${o.name} (${Jf(e,o.ops.map(a=>a.hingeId))})`}:o)}const gd=/^(reg|registration|passer|passmark|pass-mark|target)\b|registration[-_ ]?mark|\breg[-_ ]?mark/i,go=n=>[n.getAttribute("id"),n.getAttribute("inkscape:label"),n.getAttribute("data-name"),n.getAttribute("class")].filter(Boolean).join(" "),ep=n=>gd.test(go(n));function tp(n){var i;const e=[],t=s=>{for(const r of Array.from(s.children))ep(r)?e.push(r):t(r)};t(n);for(const s of e)(i=s.parentNode)==null||i.removeChild(s);return e.length}const vn=["foil","spotUv","emboss"],Ot={foil:{sv:"Foliering",en:"metallic foil"},spotUv:{sv:"UV-lack",en:"spot UV"},emboss:{sv:"Prägling",en:"emboss / deboss"}},np=new Set(["path","line","polyline","polygon","rect","circle","ellipse","text","tspan","textPath","image","use"]),ip=new Set(["defs","clippath","mask","symbol","marker","pattern","metadata","title","desc","lineargradient","radialgradient","filter","style"]),xo="#ffffff",vo=n=>!n||n==="none"||n==="transparent";function _o(n,e){const t=zo(n,e).trim().toLowerCase();return t?vo(t)?"none":t.startsWith("url(")?"pattern":Bs(t):e==="fill"?"#000000":"none"}const sp=n=>{const e=parseFloat(zo(n,"stroke-width")||"1");return Number.isFinite(e)?e:1};function*xd(n){const e=[n];for(;e.length;){const t=e.pop(),i=t.localName.toLowerCase();if(!ip.has(i)){np.has(t.localName)&&(yield t);for(let s=t.children.length-1;s>=0;s--)e.push(t.children[s])}}}function ma(n){const e=Or(n),t=new DOMParser().parseFromString(e.sanitizedSvg,"image/svg+xml"),i=tp(t.documentElement),s=i?new XMLSerializer().serializeToString(t.documentElement):e.sanitizedSvg,r=new Map;let o=0;const a=(d,u,x=!1)=>{const g=r.get(d)??{color:d,fills:0,strokes:0,hairlines:0};g[u]++,x&&g.hairlines++,r.set(d,g)};for(const d of xd(t.documentElement)){if(d.localName==="image"){o++;continue}if(d.localName==="tspan"||d.localName==="textPath")continue;const u=_o(d,"fill"),x=_o(d,"stroke");!vo(u)&&!["line","polyline"].includes(d.localName)&&a(u,"fills"),vo(x)||a(x,"strokes",sp(d)<=.5)}const l=[...r.values()].sort((d,u)=>u.fills+u.strokes-(d.fills+d.strokes)),c=[...e.messages];i&&c.push({severity:"info",code:"finish-registration-marks",message:`${i} registration mark${i===1?"":"s"} found: used for alignment, not part of the finish.`});const h=l.filter(d=>d.color!==xo&&d.hairlines>0&&d.fills===0);return h.length&&c.push({severity:"warning",code:"finish-hairlines",message:`Hairline strokes in ${h.map(d=>d.color).join(", ")} (${h.reduce((d,u)=>d+u.hairlines,0)}×) look like crop marks or a copy of the dieline. Exclude those colours if they are not part of the finish.`}),!l.some(d=>d.color!==xo&&d.color!=="none")&&!o&&c.push({severity:"warning",code:"finish-empty",message:"This layer has no visible non-white paint, so it produces no finish."}),{...e,messages:c,paints:l,images:o,maskBase:s,registrationMarks:i}}const ga=()=>[xo];function xa(n,e){var r;const t=new Set(e.map(o=>o==="image"||o==="pattern"?o:Bs(o))),i=n.maskBase??n.sanitizedSvg;if(!t.size)return i;const s=new DOMParser().parseFromString(i,"image/svg+xml");for(const o of[...xd(s.documentElement)]){if(o.localName==="image"){t.has("image")&&((r=o.parentNode)==null||r.removeChild(o));continue}for(const a of["fill","stroke"]){const l=_o(o,a);t.has(l)&&(o.setAttribute(a,"none"),o.setAttribute("style",`${o.getAttribute("style")??""};${a}:none`))}}return new XMLSerializer().serializeToString(s.documentElement)}const As=()=>({offsetMm:[0,0],rotationDeg:0,scale:1}),jr={gold:"#ffc356",silver:"#e9eaec",copper:"#f2a07b"},Vr=()=>({printVisible:!0,foil:{preset:"gold",color:jr.gold,roughness:.22,intensity:1,interaction:"over",texture:"mirror"},spotUv:{strength:1,roughness:.06,overFoil:!0},emboss:{mode:"emboss",depth:.6,softnessMm:.35},layers:{foil:{visible:!0,exclude:ga(),...As()},spotUv:{visible:!0,exclude:ga(),...As()},emboss:{visible:!0,exclude:ga(),...As()}},printAlign:As()}),vd="elham-fold-studio/project",Jl=2,rp=".elham.json",Ho=["construction","print","foil","emboss","spotUv"],_d=()=>({...Vr(),finishesOn:!0});function ap(n,e=2){const t=i=>Array.isArray(i)?i.map(t):i&&typeof i=="object"?Object.fromEntries(Object.keys(i).sort().filter(s=>i[s]!==void 0).map(s=>[s,t(i[s])])):i;return JSON.stringify(t(n),null,e)+`
`}const Md=n=>({panelIds:n.panels.map(e=>e.id).sort(),hingeIds:n.hinges.map(e=>e.id).sort()});function yd(n){return ap(n)}class Mo extends Error{}const Mt=n=>!!n&&typeof n=="object"&&!Array.isArray(n),ht=(n,e)=>{if(!n)throw new Mo(`Invalid project file: ${e}.`)};function ec(n,e,t){if(!t&&n==null)return;ht(Mt(n),`layer "${e}" must be an object`);const i=n;ht(typeof i.svg=="string"&&i.svg.length>0,`layer "${e}" has no SVG source`),ht(typeof i.fileName=="string",`layer "${e}" has no file name`),ht(typeof i.enabled=="boolean",`layer "${e}" has no enabled flag`)}function op(n){ht(Array.isArray(n),"fold.timeline must be a list");const e=new Set;for(const t of n){ht(Mt(t),"a timeline step is not an object");const i=t;ht(typeof i.id=="string"&&!e.has(i.id),"timeline step ids must be unique strings"),e.add(i.id),ht(typeof i.name=="string","a timeline step has no name"),ht(Number.isFinite(i.durationMs)&&Number.isFinite(i.delayMs),"a timeline step has invalid timing"),ht(["linear","smooth","easeIn","easeOut","easeInOut"].includes(i.easing),`unknown easing "${String(i.easing)}"`),ht(Array.isArray(i.ops)&&i.ops.every(s=>Mt(s)&&typeof s.hingeId=="string"&&(s.angleDeg===void 0||Number.isFinite(s.angleDeg))),"a timeline step has invalid hinge operations")}}function lp(n){let e=n;return e.schemaVersion===1&&(e={...e,schemaVersion:2,finishes:_d()}),e}function cp(n){const e=_d(),t=Mt(n)?n:{},i=(r,o)=>({...o,...Mt(t[r])?t[r]:{}}),s=Mt(t.layers)?t.layers:{};return{printVisible:typeof t.printVisible=="boolean"?t.printVisible:e.printVisible,finishesOn:typeof t.finishesOn=="boolean"?t.finishesOn:e.finishesOn,foil:i("foil",e.foil),spotUv:i("spotUv",e.spotUv),emboss:i("emboss",e.emboss),printAlign:i("printAlign",e.printAlign),layers:{foil:{...e.layers.foil,...Mt(s.foil)?s.foil:{}},spotUv:{...e.layers.spotUv,...Mt(s.spotUv)?s.spotUv:{}},emboss:{...e.layers.emboss,...Mt(s.emboss)?s.emboss:{}}}}}function Sd(n){var l,c,h;let e;try{e=JSON.parse(n)}catch(d){throw new Mo(`Not a valid project file (JSON error: ${d instanceof Error?d.message:String(d)}).`)}ht(Mt(e),"top level must be an object");const t=e;if(ht(t.format===vd,`this is not an Elham Fold Studio project (format "${String(t.format)}")`),ht(Number.isInteger(t.schemaVersion)&&t.schemaVersion>=1,"missing schema version"),t.schemaVersion>Jl)throw new Mo(`This project was saved by a newer version (schema ${String(t.schemaVersion)}; this app reads up to ${Jl}). Please update the app.`);const i=lp(t);ht(Mt(i.layers),"missing layers");const s=i.layers;ec(s.construction,"construction",!0);const r=s.construction.importSettings;ht(Mt(r)&&Mt(r.colors)&&typeof r.userUnit=="string","construction layer has no import settings");for(const d of Ho.slice(1))ec(s[d],d,!1);ht(Mt(i.fold),"missing fold state");const o=i.fold;if(ht(Mt(o.angles)&&Object.values(o.angles).every(Number.isFinite),"fold.angles must map hinge ids to numbers"),ht(o.mode==="simultaneous"||o.mode==="sequence","fold.mode must be simultaneous or sequence"),ht(Mt(o.manual)&&Mt(o.suggestion),"fold.manual / fold.suggestion missing"),op(o.timeline),ht(Mt(i.geometry)&&Array.isArray(i.geometry.panelIds)&&Array.isArray(i.geometry.hingeIds),"missing geometry signature"),ht(Mt(i.appearance),"missing appearance"),ht(i.title===void 0||typeof i.title=="string","title must be text"),i.finishes!==void 0){const d=i.finishes;ht(Mt(d),"finishes must be an object");for(const x of["foil","spotUv","emboss"])ht(d[x]===void 0||Mt(d[x]),`finishes.${x} must be an object`);const u=[(l=d.foil)==null?void 0:l.roughness,(c=d.spotUv)==null?void 0:c.strength,(h=d.emboss)==null?void 0:h.depth];ht(u.every(x=>x===void 0||Number.isFinite(x)),"finish parameters must be numbers")}const a=i;return{...a,layers:{construction:a.layers.construction,print:a.layers.print??null,foil:a.layers.foil??null,emboss:a.layers.emboss??null,spotUv:a.layers.spotUv??null},fold:{...a.fold,rootId:a.fold.rootId??null},finishes:cp(i.finishes)}}function hp(n,e,t){const i=new Set(e.hinges.map(u=>u.id)),s=new Set(e.panels.map(u=>u.id)),r=[],o=Md(e);(t.hingeIds.length+t.panelIds.length>0&&o.hingeIds.join()!==[...t.hingeIds].sort().join()||o.panelIds.join()!==[...t.panelIds].sort().join())&&r.push("The dieline's detected structure differs from when the project was saved (different file or import settings). Edits for hinges that no longer exist were dropped.");const l=u=>Object.fromEntries(Object.entries(u).filter(([x])=>i.has(x))),c=Object.keys(n.angles).filter(u=>!i.has(u)).length;c&&r.push(`${c} hinge angle${c===1?"":"s"} did not match the current dieline and were dropped.`);const h=n.timeline.map(u=>({...u,ops:u.ops.filter(x=>i.has(x.hingeId))})),d=n.rootId&&s.has(n.rootId)?n.rootId:null;return n.rootId&&!d&&r.push("The saved root panel no longer exists; the default root is used."),{fold:{...n,angles:l(n.angles),manual:l(n.manual),suggestion:l(n.suggestion),timeline:h,rootId:d},warnings:r}}const va=n=>`${n.replace(/\.svg$/i,"").replace(/[\\/:*?"<>|\u0000-\u001f]+/g,"_").trim()||"project"}${rp}`,tc=1,dp=3,yo="@src:",Ms=new Map;function up(n){const e=Ms.get(n);if(e)return e;let t=2166136261,i=5381;for(let r=0;r<n.length;r++){const o=n.charCodeAt(r);t=Math.imul(t^o,16777619),i=Math.imul(i,33)+o|0}const s=`${n.length.toString(36)}-${(t>>>0).toString(36)}-${(i>>>0).toString(36)}`;return Ms.size>16&&Ms.delete(Ms.keys().next().value),Ms.set(n,s),s}function fp(n){const e=[],t=Object.fromEntries(Ho.map(i=>{const s=n.layers[i];if(!s)return[i,null];const r=up(s.svg);return e.push({id:r,text:s.svg}),[i,{...s,svg:yo+r}]}));return{json:yd({...n,layers:t}),sources:e}}async function pp(n,e){var i;const t=JSON.parse(n);for(const s of Ho){const r=(i=t.layers)==null?void 0:i[s];if(r&&typeof r.svg=="string"&&r.svg.startsWith(yo)){const o=await e(r.svg.slice(yo.length));if(o==null)throw new Error(`the ${s} SVG is missing from browser storage`);r.svg=o}}return Sd(JSON.stringify(t))}const mp=n=>n instanceof DOMException&&(n.name==="QuotaExceededError"||n.code===22)||/quota/i.test(String((n==null?void 0:n.message)??n));class nc{constructor(e,t,i={}){Rn(this,"timer",null);Rn(this,"pending",null);Rn(this,"chain",Promise.resolve());Rn(this,"lastRevision",0);Rn(this,"known",new Set);Rn(this,"ready");this.store=e,this.onStatus=t,this.opts=i,this.ready=e?Promise.all([e.drafts(),e.sourceIds()]).then(([s,r])=>{var o;this.lastRevision=((o=s[0])==null?void 0:o.revision)??0,r.forEach(a=>this.known.add(a))}).catch(()=>{}):Promise.resolve()}get available(){return!!this.store}schedule(e){this.store&&(this.pending=e,this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.timer=null,this.flush()},this.opts.delayMs??700))}cancel(){this.timer&&clearTimeout(this.timer),this.timer=null,this.pending=null}flush(){this.timer&&(clearTimeout(this.timer),this.timer=null);const e=this.pending;if(this.pending=null,e&&this.store){const t=this.store;this.chain=this.chain.then(async()=>{await this.ready;let i;try{i=e()}catch(c){this.onStatus({state:"failed",message:`could not capture the project (${c.message})`,quota:!1});return}const s=(this.opts.now??Date.now)(),r=Math.max(s,this.lastRevision+1);this.lastRevision=r;const o=i.project?fp(i.project):null,a={revision:r,format:tc,projectId:i.projectId,savedAt:s,empty:i.empty,project:(o==null?void 0:o.json)??null,ui:i.ui,sources:(o==null?void 0:o.sources.map(c=>c.id))??[]},l=((o==null?void 0:o.sources)??[]).filter(c=>!this.known.has(c.id));this.onStatus({state:"saving"});try{await t.write(a,l,this.opts.keep??dp),l.forEach(c=>this.known.add(c.id));for(const c of[...this.known])a.sources.includes(c)||this.known.delete(c);this.onStatus({state:"saved",at:s,revision:r})}catch(c){l.forEach(d=>this.known.delete(d.id));const h=mp(c);this.onStatus({state:"failed",quota:h,message:h?"browser storage is full":(c==null?void 0:c.message)||String(c)})}})}return this.chain}async restore(){const e=[];if(!this.store)return{draft:null,project:null,failures:e};const t=this.store;let i;try{i=await t.drafts()}catch(s){return{draft:null,project:null,failures:[{revision:0,savedAt:0,message:`browser storage could not be read (${s.message})`}]}}for(const s of i)try{if(s.format!==tc)throw new Error(`autosave format ${s.format} is not supported by this version`);if(s.empty)return{draft:s,project:null,failures:e};if(!s.project)throw new Error("the draft has no project data");const r=await pp(s.project,o=>t.source(o));return{draft:s,project:r,failures:e}}catch(r){e.push({revision:s.revision,savedAt:s.savedAt,message:(r==null?void 0:r.message)||String(r)})}return{draft:null,project:null,failures:e}}async exportRaw(e){if(!this.store)return null;const t=(await this.store.drafts()).find(s=>s.revision===e);if(!t)return null;const i={};for(const s of t.sources)i[s]=await this.store.source(s)??null;return JSON.stringify({draft:t,sources:i},null,2)}async clearAll(){var e;this.cancel(),await this.chain,await((e=this.store)==null?void 0:e.clear()),this.known.clear()}}const ys=n=>new Promise((e,t)=>{n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)}),ic=n=>new Promise((e,t)=>{n.oncomplete=()=>e(),n.onabort=()=>t(n.error??new Error("transaction aborted")),n.onerror=()=>t(n.error)});async function gp(n="elham-fold-studio"){if(typeof indexedDB>"u")throw new Error("IndexedDB is not available in this browser");const e=indexedDB.open(n,1);e.onupgradeneeded=()=>{const i=e.result;i.objectStoreNames.contains("drafts")||i.createObjectStore("drafts",{keyPath:"revision"}),i.objectStoreNames.contains("sources")||i.createObjectStore("sources",{keyPath:"id"})};const t=await new Promise((i,s)=>{e.onsuccess=()=>i(e.result),e.onerror=()=>s(e.error),e.onblocked=()=>s(new Error("browser storage is blocked by another tab"))});return{async write(i,s,r){const o=t.transaction(["drafts","sources"],"readwrite"),a=ic(o),l=o.objectStore("drafts"),c=o.objectStore("sources");for(const u of s)c.put(u);l.put(i);const h=await ys(l.getAll());h.sort((u,x)=>x.revision-u.revision);for(const u of h.slice(r))l.delete(u.revision);const d=new Set(h.slice(0,r).flatMap(u=>u.sources));for(const u of await ys(c.getAllKeys()))d.has(u)||c.delete(u);await a},async drafts(){return(await ys(t.transaction("drafts").objectStore("drafts").getAll())).sort((s,r)=>r.revision-s.revision)},async source(i){const s=await ys(t.transaction("sources").objectStore("sources").get(i));return s==null?void 0:s.text},async sourceIds(){return await ys(t.transaction("sources").objectStore("sources").getAllKeys())},async clear(){const i=t.transaction(["drafts","sources"],"readwrite");i.objectStore("drafts").clear(),i.objectStore("sources").clear(),await ic(i)}}}const So="elham.autosave.had",sc=n=>{try{n?localStorage.setItem(So,"1"):localStorage.removeItem(So)}catch{}},xp=()=>{try{return localStorage.getItem(So)==="1"}catch{return!1}},ri=n=>`${(n/1e3).toFixed(1)} s`;function vp(n){const{graph:e,edit:t,dispatch:i,totalMs:s,progress:r,setProgress:o,playing:a,setPlaying:l,selectedStepId:c,setSelectedStepId:h,selectedHingeId:d,onSelectHinge:u,autoTimeline:x}=n,g=t.timeline,v=t.mode==="sequence",p=te.useMemo(()=>new Map(e.hinges.map(G=>[G.id,G.label])),[e]),m=te.useMemo(()=>e.hinges.map(G=>G.id),[e]),S=te.useRef(null),[_,T]=te.useState(800),[P,C]=te.useState(1),[b,U]=te.useState(null),[E,A]=te.useState(!1),k=te.useRef(null);te.useEffect(()=>{const G=k.current;if(!G)return;const ne=()=>T(Math.max(0,G.clientWidth-28)),oe=new ResizeObserver(ne);return oe.observe(G),ne(),()=>oe.disconnect()},[]);const{windows:D}=te.useMemo(()=>ls(g),[g]),N=Math.max(1,s),L=Math.max(200,_-24)/N*P,O=G=>12+G*L,z=Xf(g,m),Q=!!x&&JSON.stringify(x)!==JSON.stringify(g),W=(G,ne)=>i({type:"setTimeline",timeline:G,coalesce:ne}),$=G=>{const ne=S.current.getBoundingClientRect(),oe=(G-ne.left+S.current.scrollLeft-12)/L;o(Math.max(0,Math.min(1,oe/N)))},Z=(G,ne)=>{const oe=g.filter(Ie=>Ie.id!==G);let ce=0;for(const Ie of oe){const Ae=D[g.findIndex(y=>y.id===Ie.id)];ne>O((Ae.start-Ie.delayMs+Ae.end)/2)&&ce++}return ce},ae=(G,ne)=>{if(G.target.closest(".tl-chip"))return;G.currentTarget.setPointerCapture(G.pointerId);const oe=g.findIndex(ce=>ce.id===ne);U({kind:"step",stepId:ne,x0:G.clientX,dx:0,active:!1,target:oe})},ue=(G,ne,oe)=>{G.stopPropagation(),G.currentTarget.setPointerCapture(G.pointerId),U({kind:"hinge",hingeId:ne,fromStepId:oe,x0:G.clientX,y0:G.clientY,x:G.clientX,y:G.clientY,active:!1,over:null})},J=(G,ne)=>{var ce;const oe=(ce=document.elementFromPoint(G,ne))==null?void 0:ce.closest("[data-step-id], [data-unassigned]");return oe?oe.dataset.stepId??"unassigned":null},se=G=>{if(b){if(b.kind==="scrub"){$(G.clientX);return}if(b.kind==="step"){const ne=G.clientX-b.x0,oe=b.active||Math.abs(ne)>5,ce=g.findIndex(M=>M.id===b.stepId),Ie=D[ce],Ae=g[ce],y=O((Ie.start-Ae.delayMs+Ie.end)/2)+ne;U({...b,dx:ne,active:oe,target:oe?Z(b.stepId,y):ce})}else{const ne=b.active||Math.hypot(G.clientX-b.x0,G.clientY-b.y0)>5;U({...b,x:G.clientX,y:G.clientY,active:ne,over:ne?J(G.clientX,G.clientY):null})}}},pe=()=>{b&&(b.kind==="step"?b.active?b.target!==g.findIndex(G=>G.id===b.stepId)&&W(qi(g,b.stepId,b.target)):ye(b.stepId):b.kind==="hinge"&&(b.active&&b.over&&b.over!==(b.fromStepId??"unassigned")?W(Ds(g,b.hingeId,b.over==="unassigned"?null:b.over,b.fromStepId??void 0)):b.active||u(b.hingeId)),U(null))},ye=G=>{h(G);const ne=g.findIndex(oe=>oe.id===G);ne>=0&&o(D[ne].end/N)},Ee=(G,ne)=>{var ce,Ie;const oe=g.findIndex(Ae=>Ae.id===ne);if(G.key==="ArrowLeft"||G.key==="ArrowRight"){G.preventDefault();const Ae=G.key==="ArrowLeft"?-1:1;G.altKey?W(qi(g,ne,Math.max(0,Math.min(g.length-1,oe+Ae)))):g[oe+Ae]&&(ye(g[oe+Ae].id),(Ie=(ce=G.currentTarget.parentElement)==null?void 0:ce.children[oe+Ae])==null||Ie.focus())}else G.key==="Delete"||G.key==="Backspace"?(G.preventDefault(),W(md(g,ne)),h(null)):(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),ye(ne))},Be=(G,ne,oe)=>{if((G.key==="ArrowLeft"||G.key==="ArrowRight")&&G.altKey){G.preventDefault();const ce=oe?g.findIndex(Ae=>Ae.id===oe):G.key==="ArrowLeft"?g.length:-1,Ie=g[ce+(G.key==="ArrowLeft"?-1:1)];Ie&&W(Ds(g,ne,Ie.id,oe??void 0))}else(G.key==="Delete"||G.key==="Backspace")&&oe?(G.preventDefault(),W(Ds(g,ne,null,oe))):(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),u(ne))},Ne=(G,ne)=>f.jsx("button",{className:`tl-chip ${d===G?"on":""} ${(b==null?void 0:b.kind)==="hinge"&&b.active&&b.hingeId===G?"dragging":""}`,"data-hinge-chip":p.get(G),onPointerDown:oe=>ue(oe,G,ne),onKeyDown:oe=>Be(oe,G,ne),title:`${p.get(G)} — drag to another step · Alt+←/→ moves · Delete unassigns`,children:p.get(G)},G),Ce=O(r*N),Xe=_<720,X=te.useMemo(()=>{const G=N>2e4?5e3:N>8e3?2e3:1e3;return Array.from({length:Math.floor(N/G)+1},(ne,oe)=>oe*G)},[N]);return f.jsxs("section",{ref:k,className:`assembly-timeline ${Xe?"compact":""}`,"aria-label":"Assembly timeline",onPointerMove:se,onPointerUp:pe,onPointerCancel:()=>U(null),children:[f.jsxs("div",{className:"tl-transport",children:[f.jsx("button",{className:"tl-icon",onClick:()=>{o(0)},"aria-label":"Restart",title:"Restart",children:"⏮"}),f.jsx("button",{className:"tl-icon play",onClick:()=>l(!a),"aria-label":a?"Pause":"Play",title:a?"Pause":"Play",children:a?"❚❚":"▶"}),f.jsxs("span",{className:"tl-time","data-testid":"tl-time",children:[ri(r*N)," / ",ri(N)]}),f.jsxs("label",{className:"progress-row tl-progress",children:[f.jsx("input",{type:"range",min:0,max:100,step:"any",value:r*100,onChange:G=>o(Number(G.target.value)/100),"aria-label":"Fold progress"}),f.jsxs("output",{children:[Math.round(r*100),"%"]})]}),f.jsxs("div",{className:"segmented tl-mode",role:"radiogroup","aria-label":"Fold timing",children:[f.jsx("button",{role:"radio","aria-checked":v,className:v?"on":"",onClick:()=>i({type:"setMode",mode:"sequence"}),children:"Sequence"}),f.jsx("button",{role:"radio","aria-checked":!v,className:v?"":"on",onClick:()=>i({type:"setMode",mode:"simultaneous"}),children:"All together"})]}),f.jsxs("div",{className:"tl-actions",children:[f.jsx("button",{className:"chip",onClick:()=>{const G=Yf(g,`Step ${g.length+1}`,c?g.findIndex(ne=>ne.id===c)+1:g.length);W(G),h(G[c?g.findIndex(ne=>ne.id===c)+1:g.length].id)},children:"+ Step"}),x&&(g.length===0?f.jsx("button",{className:"chip primary",onClick:()=>W(x),children:"Use suggested sequence"}):Q&&!E&&f.jsx("button",{className:"chip",onClick:()=>A(!0),children:"Reset to suggested…"})),f.jsx("button",{className:"tl-icon",onClick:()=>C(G=>Math.max(1,G/1.5)),"aria-label":"Zoom out",disabled:P<=1,children:"−"}),f.jsx("button",{className:"tl-icon",onClick:()=>C(G=>Math.min(8,G*1.5)),"aria-label":"Zoom in",children:"+"})]})]}),E&&x&&f.jsxs("div",{className:"tl-confirm",role:"alertdialog","aria-label":"Replace custom sequence",children:["Replace your custom sequence (",g.length," steps) with the suggested one (",x.length," steps)? Your version stays until you confirm, and Undo brings it back.",f.jsx("button",{className:"chip primary",onClick:()=>{W(x),A(!1),h(null)},children:"Replace"}),f.jsx("button",{className:"chip",onClick:()=>A(!1),children:"Keep mine"})]}),Xe&&v&&f.jsxs("ol",{className:"tl-list","aria-label":"Assembly steps",children:[g.length===0&&f.jsx("li",{className:"tl-empty-row",children:"No steps yet — use the suggested sequence or + Step."}),g.map((G,ne)=>{const oe=D[ne],ce=r*N>=oe.start-G.delayMs&&r*N<=oe.end;return f.jsxs("li",{"data-step-id":G.id,className:`tl-row ${c===G.id?"on":""} ${ce?"active":""}`,children:[f.jsxs("div",{className:"tl-row-move",children:[f.jsx("button",{className:"tl-icon","aria-label":`Move step ${ne+1} earlier`,disabled:ne===0,onClick:()=>W(qi(g,G.id,ne-1)),children:"▲"}),f.jsx("button",{className:"tl-icon","aria-label":`Move step ${ne+1} later`,disabled:ne===g.length-1,onClick:()=>W(qi(g,G.id,ne+1)),children:"▼"})]}),f.jsxs("button",{className:"tl-row-main",onClick:()=>ye(G.id),"aria-label":`Step ${ne+1}: ${G.name}`,children:[f.jsx("span",{className:"tl-num",children:ne+1}),f.jsx("b",{children:G.name}),f.jsxs("span",{className:"tl-row-dur",children:[ri(G.durationMs),G.delayMs?` +${ri(G.delayMs)}`:""]})]}),f.jsx("div",{className:"tl-chips",children:G.ops.map(Ie=>f.jsx("button",{className:`tl-chip ${d===Ie.hingeId?"on":""}`,"data-hinge-chip":p.get(Ie.hingeId),onClick:()=>u(Ie.hingeId),children:p.get(Ie.hingeId)},Ie.hingeId))})]},G.id)})]}),f.jsx("div",{className:"tl-track-wrap",ref:S,hidden:Xe&&v,children:f.jsxs("div",{className:"tl-inner",style:{width:Math.max(_,O(N)+24)},children:[f.jsx("div",{className:"tl-ruler",onPointerDown:G=>{G.currentTarget.setPointerCapture(G.pointerId),U({kind:"scrub"}),$(G.clientX)},children:X.map(G=>f.jsxs("span",{style:{left:O(G)},children:[G/1e3,"s"]},G))}),f.jsxs("div",{className:"tl-track",onPointerDown:G=>{G.target===G.currentTarget&&(G.currentTarget.setPointerCapture(G.pointerId),U({kind:"scrub"}),$(G.clientX))},children:[!v&&f.jsxs("div",{className:"tl-step tl-all",style:{left:O(0),width:N*L},children:[f.jsxs("div",{className:"tl-step-head",children:[f.jsx("b",{children:"All hinges together"}),f.jsx("span",{children:ri(N)})]}),f.jsx("p",{children:"Every hinge folds from flat to its target at once. Switch to Sequence to edit the order."})]}),v&&g.length===0&&f.jsxs("div",{className:"tl-empty",children:["No steps yet. Click ",f.jsx("b",{children:"Suggest folding"})," (then “Use suggested sequence”) or ",f.jsx("b",{children:"+ Step"}),", then drag hinges into steps."]}),v&&g.map((G,ne)=>{const oe=D[ne],ce=(b==null?void 0:b.kind)==="step"&&b.stepId===G.id&&b.active,Ie=O(oe.start-G.delayMs),Ae=(oe.end-oe.start+G.delayMs)*L,y=(b==null?void 0:b.kind)==="hinge"&&b.active&&b.over===G.id;return f.jsxs("div",{role:"button",tabIndex:0,"data-step-id":G.id,"aria-label":`Step ${ne+1}: ${G.name}, ${G.ops.length} hinge${G.ops.length===1?"":"s"}`,className:`tl-step ${c===G.id?"on":""} ${ce?"dragging":""} ${y?"drop":""}`,style:{left:Ie,width:Math.max(28,Ae),transform:ce?`translateX(${b.kind==="step"?b.dx:0}px)`:void 0,"--delay":`${G.delayMs*L}px`},onPointerDown:M=>ae(M,G.id),onKeyDown:M=>Ee(M,G.id),children:[G.delayMs>0&&f.jsx("i",{className:"tl-delay",style:{width:G.delayMs*L},title:`delay ${ri(G.delayMs)}`}),f.jsxs("div",{className:"tl-step-head",children:[f.jsx("span",{className:"tl-num",children:ne+1}),f.jsx("b",{children:G.name}),f.jsx("span",{children:ri(G.durationMs)})]}),f.jsxs("div",{className:"tl-chips",children:[G.ops.map(M=>Ne(M.hingeId,G.id)),!G.ops.length&&f.jsx("em",{children:"drop hinges here"})]})]},G.id)}),(b==null?void 0:b.kind)==="step"&&b.active&&(()=>{const G=g.filter(ce=>ce.id!==b.stepId),ne=G[b.target],oe=O(ne?D[g.findIndex(ce=>ce.id===ne.id)].start-ne.delayMs:N);return f.jsx("i",{className:"tl-insert",style:{left:oe-2}})})(),f.jsx("i",{className:"tl-playhead",style:{left:Ce}})]})]})}),v&&f.jsxs("div",{className:`tl-unassigned ${(b==null?void 0:b.kind)==="hinge"&&b.active&&b.over==="unassigned"?"drop":""}`,"data-unassigned":"true",children:[f.jsx("span",{children:"Not in any step (stays flat):"}),z.length?z.map(G=>Ne(G,null)):f.jsx("em",{children:"none — every hinge has a step"})]}),(b==null?void 0:b.kind)==="hinge"&&b.active&&f.jsx("span",{className:"tl-ghost",style:{left:b.x+8,top:b.y+8},children:p.get(b.hingeId)})]})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bd=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=te.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:r,iconNode:o,...a},l)=>te.createElement("svg",{ref:l,...Mp,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:bd("lucide",s),...a},[...o.map(([c,h])=>te.createElement(c,h)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(n,e)=>{const t=te.forwardRef(({className:i,...s},r)=>te.createElement(yp,{ref:r,iconNode:e,className:bd(`lucide-${_p(n)}`,i),...s}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=Ke("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=Ke("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=Ke("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=Ke("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=Ke("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=Ke("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=Ke("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=Ke("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=Ke("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=Ke("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=Ke("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=Ke("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=Ke("ListOrdered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=Ke("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=Ke("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Ke("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=Ke("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=Ke("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=Ke("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=Ke("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=Ke("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=Ke("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=Ke("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=Ke("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=Ke("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=Ke("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=Ke("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=Ke("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=Ke("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=Ke("SaveAll",[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5",key:"1xspal"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",key:"1ra60u"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",key:"1yve0x"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=Ke("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=Ke("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Ke("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Ke("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Ke("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=Ke("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=Ke("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=Ke("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=Ke("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=Ke("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),qp={ok:Ep,info:bo,warn:Xp};function fc({id:n,label:e,align:t,set:i,checks:s,canAuto:r,onAuto:o,overlay:a}){const l=(c,h=0)=>Number.isFinite(Number(c))&&c!==""?Number(c):h;return f.jsxs("div",{className:"registration","data-testid":`registration-${n}`,children:[f.jsx("span",{className:"field-label",children:"Registration on the dieline"}),f.jsxs("div",{className:"mm-fields four",children:[f.jsxs("label",{children:["Offset X mm",f.jsx("input",{type:"number",step:".05",value:t.offsetMm[0],onChange:c=>i({offsetMm:[l(c.target.value),t.offsetMm[1]]}),"aria-label":"Layer offset X mm"})]}),f.jsxs("label",{children:["Offset Y mm",f.jsx("input",{type:"number",step:".05",value:t.offsetMm[1],onChange:c=>i({offsetMm:[t.offsetMm[0],l(c.target.value)]}),"aria-label":"Layer offset Y mm"})]}),f.jsxs("label",{children:["Rotation °",f.jsx("input",{type:"number",step:".05",value:t.rotationDeg,onChange:c=>i({rotationDeg:l(c.target.value)}),"aria-label":"Layer rotation degrees"})]}),f.jsxs("label",{children:["Scale %",f.jsx("input",{type:"number",step:".05",min:"10",max:"1000",value:+(t.scale*100).toFixed(4),onChange:c=>i({scale:Math.max(.1,l(c.target.value,100)/100)}),"aria-label":"Layer scale percent"})]})]}),f.jsxs("div",{className:"chips",children:[f.jsxs("button",{className:"chip",onClick:()=>i(As()),"aria-label":`Reset ${e} alignment`,children:[f.jsx(Ed,{size:13})," Reset alignment"]}),f.jsxs("button",{className:"chip",disabled:!r,onClick:o,title:r?"Solve offset, rotation and scale from the shared registration marks":"Needs at least two registration marks shared by the dieline and this layer",children:[f.jsx(Tp,{size:13})," Align to registration marks"]})]}),f.jsx(hi,{label:"Overlay opacity (2D)",value:a.opacity,min:.1,max:1,step:.05,onChange:a.setOpacity}),f.jsxs("label",{className:"toggle",children:[f.jsx("input",{type:"checkbox",checked:a.showMarks,onChange:c=>a.setShowMarks(c.target.checked)})," Show registration marks"]}),f.jsx("ul",{className:"preflight-list","aria-label":`${e} preflight`,children:s.map(c=>{const h=qp[c.level];return f.jsxs("li",{className:`pf-${c.level}`,"data-code":c.code,children:[f.jsx(h,{size:14}),f.jsx("span",{children:c.text})]},c.code+c.text)})})]})}const Ni=["foil","spotUv","emboss"],Yp=n=>`${Math.round(n*100)}%`;function hi({label:n,value:e,min:t=0,max:i=1,step:s=.01,onChange:r,fmt:o=Yp}){return f.jsxs("label",{className:"slider-field",children:[f.jsxs("span",{children:[n,f.jsx("output",{children:o(e)})]}),f.jsx("input",{type:"range",min:t,max:i,step:s,value:e,onChange:a=>r(Number(a.target.value)),"aria-label":n})]})}function Kp(n){const{settings:e,setSettings:t}=n,i=(a,l)=>t(c=>({...c,layers:{...c.layers,[a]:{...c.layers[a],...l}}})),s=(a,l,c,h,d)=>f.jsxs("li",{className:`layer-row selectable ${n.selected===a?"on":""} ${d.loaded?"ok":""}`,children:[f.jsxs("button",{className:"layer-main",onClick:()=>n.setSelected(n.selected===a?null:a),"aria-expanded":n.selected===a,"aria-label":`${l} layer`,children:[f.jsx("i",{className:`layer-dot ${a}`}),f.jsxs("span",{children:[f.jsxs("b",{children:[l," ",f.jsxs("small",{className:"layer-sub",children:["· ",c]})]}),f.jsx("small",{children:h})]})]}),d.onToggle&&f.jsx("button",{className:"tb-btn icon-only",disabled:!d.loaded,onClick:d.onToggle,"aria-pressed":d.visible,"aria-label":`${d.visible?"Hide":"Show"} ${l}`,title:d.visible?"Hide layer":"Show layer",children:d.visible?f.jsx(Rp,{size:16}):f.jsx(Ap,{size:16})})]},a),r=n.selected&&n.selected!=="print"&&n.selected!=="construction"?n.selected:null,o=r?n.files[r]:void 0;return f.jsxs("div",{className:"production-layers",children:[Ni.some(a=>n.files[a])&&f.jsx("div",{className:"quick-preview",role:"group","aria-label":"Finish preview",children:[["Print only",[]],["Foil",["foil"]],["Spot UV",["spotUv"]],["Emboss",["emboss"]],["All finishes",Ni]].map(([a,l])=>{const c=l.length===0?!n.finishesOn||Ni.every(h=>!e.layers[h].visible):n.finishesOn&&Ni.every(h=>e.layers[h].visible===l.includes(h));return f.jsx("button",{className:`chip ${c?"on":""}`,"aria-pressed":c,onClick:()=>{n.setFinishesOn(l.length>0||n.finishesOn),t(h=>({...h,printVisible:!0,layers:Object.fromEntries(Ni.map(d=>[d,{...h.layers[d],visible:l.includes(d)}]))}))},children:a},a)})}),f.jsxs("label",{className:"toggle finishes-master",children:[f.jsx("input",{type:"checkbox",checked:n.finishesOn,onChange:a=>n.setFinishesOn(a.target.checked)})," Show finishes ",f.jsx("span",{className:"muted",children:"(off = print artwork only)"})]}),f.jsxs("ul",{className:"layer-list",children:[s("construction","Konstruktion","dieline",n.dielineName??"required — not loaded",{loaded:!!n.dielineName}),s("print","Tryck","print",n.printName??"optional — plain board",{loaded:!!n.printName,visible:e.printVisible,onToggle:()=>t(a=>({...a,printVisible:!a.printVisible}))}),Ni.map(a=>s(a,Ot[a].sv,Ot[a].en,n.files[a]?`${n.files[a].file.name}${n.aligned[a]===!1?" · not aligned":""}`:"optional — empty",{loaded:!!n.files[a],visible:e.layers[a].visible,onToggle:()=>i(a,{visible:!e.layers[a].visible})}))]}),n.selected==="print"&&f.jsxs("div",{className:"layer-editor card","data-testid":"layer-editor-print",children:[f.jsxs("div",{className:"card-title",children:["Tryck ",f.jsx("span",{className:"tag",children:"print"})]}),n.printName?f.jsx(fc,{id:"print",label:"Tryck",align:e.printAlign,set:a=>t(l=>({...l,printAlign:{...l.printAlign,...a}})),checks:n.preflight.print??[],canAuto:!!n.autoAlignable.print,onAuto:()=>n.onAutoAlign("print"),overlay:n.overlay}):f.jsxs("p",{className:"legend-note",children:["Upload print artwork under ",f.jsx("b",{children:"Artwork & board"}),"."]}),f.jsx("p",{className:"legend-note",children:"The eye toggle shows finishes over plain board."})]}),n.selected==="construction"&&f.jsx("p",{className:"legend-note",children:"The dieline defines panels and creases. Finishing layers never change the structure."}),r&&f.jsxs("div",{className:"layer-editor card","data-testid":`layer-editor-${r}`,children:[f.jsxs("div",{className:"card-title",children:[Ot[r].sv," ",f.jsx("span",{className:"tag",children:Ot[r].en})]}),f.jsxs("div",{className:"layer-file",children:[f.jsxs("label",{className:"btn file-chip",children:[f.jsx(wd,{size:15})," ",o?"Replace SVG":"Upload SVG",f.jsx("input",{type:"file",accept:"image/svg+xml,.svg","aria-label":`Upload ${Ot[r].sv} SVG`,onChange:a=>{var c;const l=(c=a.target.files)==null?void 0:c[0];l&&n.onUpload(r,l),a.target.value=""}})]}),o&&f.jsxs("button",{className:"btn",onClick:()=>n.onRemove(r),"aria-label":`Remove ${Ot[r].sv}`,children:[f.jsx(Td,{size:15})," Remove"]})]}),!o&&f.jsxs("p",{className:"legend-note",children:["An SVG on the same canvas as the dieline. Coloured paint marks the ",Ot[r].en," area; white and transparent areas are ignored. It never creates panels or creases."]}),o&&f.jsxs(f.Fragment,{children:[f.jsx(fc,{id:r,label:Ot[r].sv,align:e.layers[r],set:a=>i(r,a),checks:n.preflight[r]??[],canAuto:!!n.autoAlignable[r],onAuto:()=>n.onAutoAlign(r),overlay:n.overlay}),f.jsxs("div",{className:"paint-list",role:"group","aria-label":"Paint colours used as the mask",children:[f.jsx("span",{className:"field-label",children:"Paint used as mask"}),o.prepared.paints.filter(a=>a.color!=="none").map(a=>{const l=!e.layers[r].exclude.includes(a.color);return f.jsxs("label",{className:"paint-row",children:[f.jsx("input",{type:"checkbox",checked:l,onChange:()=>i(r,{exclude:l?[...e.layers[r].exclude,a.color]:e.layers[r].exclude.filter(c=>c!==a.color)}),"aria-label":`Use ${a.color} as mask`}),f.jsx("i",{className:"swatch",style:{background:a.color.startsWith("#")?a.color:"transparent"}}),f.jsx("code",{children:a.color}),f.jsxs("small",{children:[a.fills?`${a.fills} fill`:"",a.fills&&a.strokes?" · ":"",a.strokes?`${a.strokes} stroke${a.hairlines?` (${a.hairlines} hairline)`:""}`:""]})]},a.color)})]})]}),r==="foil"&&f.jsxs("div",{className:"appearance",children:[f.jsx("span",{className:"field-label",children:"Foil"}),f.jsx("div",{className:"chips",children:["gold","silver","copper","custom"].map(a=>f.jsxs("button",{className:`chip swatch-chip ${e.foil.preset===a?"on":""}`,onClick:()=>t(l=>({...l,foil:{...l.foil,preset:a,color:a==="custom"?l.foil.color:jr[a]}})),"aria-pressed":e.foil.preset===a,children:[f.jsx("i",{className:"swatch",style:{background:a==="custom"?e.foil.color:jr[a]}}),a[0].toUpperCase()+a.slice(1)]},a))}),e.foil.preset==="custom"&&f.jsxs("label",{className:"field",children:["Custom metal colour",f.jsx("input",{type:"color",value:e.foil.color,onChange:a=>t(l=>({...l,foil:{...l.foil,color:a.target.value}})),"aria-label":"Custom foil colour"})]}),f.jsx("div",{className:"chips",role:"radiogroup","aria-label":"Foil surface",children:["mirror","brushed","satin"].map(a=>f.jsx("button",{role:"radio","aria-checked":(e.foil.texture??"mirror")===a,className:`chip ${(e.foil.texture??"mirror")===a?"on":""}`,onClick:()=>t(l=>({...l,foil:{...l.foil,texture:a}})),children:a[0].toUpperCase()+a.slice(1)},a))}),f.jsx(hi,{label:"Roughness",value:e.foil.roughness,min:.02,max:.8,onChange:a=>t(l=>({...l,foil:{...l.foil,roughness:a}}))}),f.jsx(hi,{label:"Metallic intensity",value:e.foil.intensity,onChange:a=>t(l=>({...l,foil:{...l.foil,intensity:a}}))}),f.jsxs("label",{className:"field",children:["Foil and print",f.jsxs("select",{value:e.foil.interaction,onChange:a=>t(l=>({...l,foil:{...l.foil,interaction:a.target.value}})),"aria-label":"Foil and print interaction",children:[f.jsx("option",{value:"over",children:"Foil stamped over print (hot foil)"}),f.jsx("option",{value:"tinted",children:"Print tints the foil (cold foil)"})]})]})]}),r==="spotUv"&&f.jsxs("div",{className:"appearance",children:[f.jsx("span",{className:"field-label",children:"Spot UV"}),f.jsx(hi,{label:"Gloss strength",value:e.spotUv.strength,onChange:a=>t(l=>({...l,spotUv:{...l.spotUv,strength:a}}))}),f.jsx(hi,{label:"Coat roughness",value:e.spotUv.roughness,min:0,max:.5,onChange:a=>t(l=>({...l,spotUv:{...l.spotUv,roughness:a}}))}),f.jsxs("label",{className:"toggle",children:[f.jsx("input",{type:"checkbox",checked:e.spotUv.overFoil,onChange:a=>t(l=>({...l,spotUv:{...l.spotUv,overFoil:a.target.checked}}))})," Coat foil areas too"]})]}),r==="emboss"&&f.jsxs("div",{className:"appearance",children:[f.jsx("span",{className:"field-label",children:"Relief"}),f.jsx("div",{className:"segmented",role:"radiogroup","aria-label":"Relief direction",children:["emboss","deboss"].map(a=>f.jsx("button",{role:"radio","aria-checked":e.emboss.mode===a,className:e.emboss.mode===a?"on":"",onClick:()=>t(l=>({...l,emboss:{...l.emboss,mode:a}})),children:a==="emboss"?"Emboss (raised)":"Deboss (recessed)"},a))}),f.jsx(hi,{label:"Apparent depth",value:e.emboss.depth,onChange:a=>t(l=>({...l,emboss:{...l.emboss,depth:a}}))}),f.jsx(hi,{label:"Edge softness",value:e.emboss.softnessMm,min:0,max:1.5,step:.05,onChange:a=>t(l=>({...l,emboss:{...l.emboss,softnessMm:a}})),fmt:a=>`${a.toFixed(2)} mm`}),f.jsx("p",{className:"legend-note",children:"Visual relief (bump shading) only. The folding geometry and board are not deformed."})]}),f.jsxs("button",{className:"chip",onClick:()=>t(a=>{const l=Vr();return r==="foil"?{...a,foil:l.foil}:r==="spotUv"?{...a,spotUv:l.spotUv}:{...a,emboss:l.emboss}}),children:[f.jsx(Ed,{size:13})," Reset appearance"]})]})]})}const Qp=Math.sin(3*Math.PI/180),sr=n=>Math.hypot(n.b[0]-n.a[0],n.b[1]-n.a[1]),gi=(n,e)=>Math.abs(n[0]*e[1]-n[1]*e[0])<=Qp,en=(n,e)=>(e[0]-n.a[0])*-n.axis[1]+(e[1]-n.a[1])*n.axis[0],Yi=(n,e)=>{const t=Math.sign(en(n,e.centroid))||1;return Math.max(...e.outer.map(i=>t*en(n,i)))},fi=(n,e)=>e[0]*n[0]+e[1]*n[1],Wr=(n,e,t)=>Math.abs(n-e)<=t;function pc(n){const e=Jp(n);return e.tube?e:em(n)??e}function Jp(n){const{graph:e}=n,t=new Map(e.panels.map(N=>[N.id,N])),i=N=>t.get(N).label,s={},r={},o=[],a=(N,L,O,z,Q,W)=>{s[N.id]={hingeId:N.id,angleDeg:L,confidence:O,role:z,reason:Q,step:W},r[n.childOf[N.id]??N.panelB]=z},l=" Direction assumes the drawn side faces outward; the mirror (negative) is geometrically equivalent.";if(!e.hinges.length)return{family:"unknown",tray:null,hinges:s,roles:r,tube:null,notes:["No hinges to fold."]};const c=[...e.hinges].sort((N,L)=>sr(L)-sr(N))[0],h=e.hinges.filter(N=>gi(N.axis,c.axis)&&sr(N)>=.6*sr(c)&&n.childOf[N.id]),d=N=>h.filter(L=>L.panelA===N||L.panelB===N),u=new Set([n.rootId]);for(let N=!0;N;){N=!1;for(const L of h)for(const[O,z]of[[L.panelA,L.panelB],[L.panelB,L.panelA]])u.has(O)&&!u.has(z)&&(u.add(z),N=!0)}const x=[...u].every(N=>d(N).length<=2);let g=[];if(x&&u.size>1){let N=[...u].find(O=>d(O).length===1)??n.rootId,L=null;for(;N;){g.push(N);const O=d(N).map(z=>z.panelA===N?z.panelB:z.panelA).find(z=>z!==L&&u.has(z)&&!g.includes(z));L=N,N=O}}else u.size>1&&o.push("Walls do not form a simple chain (branching parallel creases); wall angles are low-confidence.");const v=(N,L)=>h.find(O=>O.panelA===N&&O.panelB===L||O.panelA===L&&O.panelB===N),p=g.map((N,L)=>{const O=[L>0?v(g[L-1],N):null,L<g.length-1?v(N,g[L+1]):null].filter(Boolean);return O.length===2?Math.abs(en(O[0],O[1].a)+en(O[0],O[1].b))/2:Yi(O[0],t.get(N))}),m=[...p].sort((N,L)=>N-L)[Math.floor(p.length/2)]??0,S=new Set(g.filter((N,L)=>(L===0||L===g.length-1)&&N!==n.rootId&&p[L]<.5*m)),_=g.filter(N=>!S.has(N)),T=_.map(N=>p[g.indexOf(N)]);let P=null,C=-1;const b=_.indexOf(n.rootId);if(_.length>=4&&b>=0)for(let N=Math.max(0,b-3);N<=Math.min(_.length-4,b);N++){const L=T.slice(N,N+4),O=Math.abs(L[0]-L[2])+Math.abs(L[1]-L[3]),z=Math.max(3,.04*(L[0]+L[1])/2);O<=z&&(!P||O<P.residualMm)&&(P={walls:_.slice(N,N+4),widthMm:(L[0]+L[2])/2,depthMm:(L[1]+L[3])/2,residualMm:O,lidEvidence:0},C=N)}const U=N=>P?((_.indexOf(N)-C)%2+2)%2===0?P.depthMm:P.widthMm:NaN,E=N=>Math.max(2,.03*N),A=c.axis,k=[];for(const N of e.hinges){if(s[N.id]||h.includes(N))continue;const L=n.childOf[N.id],O=L?n.parent[L]:null;if(!L||!O||!u.has(O)||S.has(O)||gi(N.axis,A))continue;const z=t.get(O),Q=t.get(L),W=Yi(N,Q),$=U(O),Z=Math.sign(fi(A,[(N.a[0]+N.b[0])/2,(N.a[1]+N.b[1])/2])-fi(A,z.centroid));if(P&&Wr(W,$,E($))){P.lidEvidence++,k.push({h:N,deg:90,c:"high",role:"closure",end:Z,order:1,why:`${Q.label} is ${W.toFixed(1)} mm deep = tube dimension ${$.toFixed(1)} mm: it exactly closes this end of the tube at 90°.${l}`});for(const ae of e.hinges)n.parent[n.childOf[ae.id]]!==L||!gi(ae.axis,N.axis)||!Wr(Math.abs(en(N,ae.a)),W,E(W))||k.push({h:ae,deg:90,c:"medium",role:"tuck-flap",end:Z,order:2,why:`${i(n.childOf[ae.id])} hangs on the far edge of closure ${Q.label}: a tuck flap, folded 90° into the tube against the opposite wall. Tucking vs. leaving it out is an assembly choice.${l}`})}else P&&W<$-E($)?k.push({h:N,deg:90,c:"medium",role:"dust-flap",end:Z,order:0,why:`${Q.label} is ${W.toFixed(1)} mm deep, shorter than the ${$.toFixed(1)} mm tube dimension: a dust flap folded 90° inward under the closure. Inward is the usual choice, not a geometric necessity.${l}`}):k.push({h:N,deg:90,c:"low",role:"unknown",end:Z,order:1,why:`${Q.label} sits on a wall end but its depth (${W.toFixed(1)} mm) matches no tube dimension; 90° is a guess.${l}`})}if(g.length>1)for(let N=0;N+1<g.length;N++){const L=v(g[N],g[N+1]),O=g[N],z=g[N+1];if(S.has(O)||S.has(z)){const Q=S.has(O)?O:z,W=S.has(O)?z:O;a(L,90,P?"medium":"low","glue-flap",`${i(Q)} is a ${p[g.indexOf(Q)].toFixed(1)} mm end panel (< half a wall): a glue flap, folded 90° to lie against the wall it meets. Glued inside vs. outside is not encoded in the drawing.${l}`,1),r[Q]="glue-flap",r[W]=r[W]??"wall";continue}if(r[O]="wall",r[z]="wall",P){const Q=P.walls.includes(O)&&P.walls.includes(z),W=P.lidEvidence?` ${P.lidEvidence} end closure(s) match the ${P.widthMm.toFixed(1)} × ${P.depthMm.toFixed(1)} mm cross-section.`:" No end closure confirms the cross-section.";a(L,90,Q&&P.lidEvidence?"high":"medium","wall",Q?`Walls ${P.walls.map(i).join("–")} have widths a,b,a,b (residual ${P.residualMm.toFixed(2)} mm): 90° is the angle that closes a rectangle.${W}${l}`:`${i(P.walls.includes(O)?z:O)} lies beyond the 4-wall tube; folding 90° wraps it onto an existing face (double wall / overlap).${l}`,0)}else _.length<3?a(L,0,"low","unknown",`Only ${_.length} panels share this crease direction: no wall structure to infer from; left flat.`,0):a(L,90,_.length===3?"medium":"low","wall",`${_.length} parallel walls without a matching rectangular loop; 90° is a tray/sleeve guess.${l}`,0)}r[n.rootId]=u.size>1?"wall":r[n.rootId]??"unknown";const D=[...new Set(k.map(N=>N.end))].sort((N,L)=>L-N);for(const N of k)a(N.h,N.deg,N.c,N.role,N.why,2+D.indexOf(N.end)*3+N.order);for(const N of e.hinges){if(s[N.id])continue;const L=n.childOf[N.id];if(!L)continue;const O=n.parent[L];u.has(O)&&gi(N.axis,A)?a(N,90,"low","tab",`${i(L)} is a small flap on the free edge of wall ${i(O)}: likely a glue or lock tab; its role and angle are not determined by the geometry.${l}`,1):a(N,0,"low","unknown",`No structural rule matched ${i(L)}; left flat for manual folding.`,1)}return P&&o.push(`Rectangular tube candidate ${P.walls.map(i).join("–")}: ${P.widthMm.toFixed(1)} × ${P.depthMm.toFixed(1)} mm (width residual ${P.residualMm.toFixed(2)} mm).`),_.length===5&&!(P!=null&&P.lidEvidence)&&o.push("Five similar walls could also close as a pentagon; no closure panel decides between them."),_.length>4&&P&&o.push(`${_.length-4} wall(s) beyond the tube wrap onto an existing face; which layer is inside is not encoded in the drawing.`),{family:P?"tube":"unknown",tray:null,hinges:s,roles:r,tube:P,notes:o}}function em(n){const{graph:e}=n,t=new Map(e.panels.map(U=>[U.id,U])),i=U=>t.get(U).label,s=n.rootId,r=t.get(s),o=U=>e.hinges.filter(E=>n.childOf[E.id]&&n.parent[n.childOf[E.id]]===U),a=o(s);if(a.length<3||!a.some(U=>!gi(U.axis,a[0].axis)))return null;const l=a.map(U=>Yi(U,t.get(n.childOf[U.id]))),c=[...l].sort((U,E)=>U-E)[Math.floor(l.length/2)],h=r.outer.map(U=>U[0]),d=r.outer.map(U=>U[1]),u=[Math.max(...h)-Math.min(...h),Math.max(...d)-Math.min(...d)],x=a.filter((U,E)=>Wr(l[E],c,Math.max(1.5,.1*c)));if(x.length<3||c>.6*Math.min(...u))return null;const g={},v={[s]:"wall"},p=[],m={},S=" Direction assumes the drawn side is the tray's outside; the mirror is geometrically equivalent.",_=(U,E,A,k,D,N)=>{g[U.id]={hingeId:U.id,angleDeg:E,confidence:A,role:k,reason:D,step:N},v[n.childOf[U.id]]=k,m[U.id]=E},T=(U,E,A)=>{const k=n.childOf[U.id],D=n.parent[k],N=A??e.panels.map(W=>W.id).filter(W=>W!==k&&W!==D),L=W=>{const $=is(n,{...m,[U.id]:W},1),Z=Cd(t.get(k));return Math.max(0,...N.map(ae=>Eo($,t.get(k),t.get(ae),Z)))},O=L(E),z=L(-E);return{deg:z>O+.05?-E:E,contact:Math.max(O,z),decided:Math.abs(O-z)>.05}},P=new Set(x.map(U=>n.childOf[U.id])),C=new Set;for(const U of a){const E=n.childOf[U.id],A=P.has(E);_(U,90,A?"high":"low","wall",A?`${i(E)} is one of ${x.length} walls of equal height ${c.toFixed(1)} mm around the ${u.map(k=>k.toFixed(1)).join(" × ")} mm base: at 90° neighbouring walls meet at the corners.${S}`:`${i(E)} is ${Yi(U,t.get(E)).toFixed(1)} mm, unlike the ${c.toFixed(1)} mm walls; 90° is a guess.${S}`,2)}const b=[];for(const U of x){const E=n.childOf[U.id];for(const A of o(E)){const k=n.childOf[A.id],D=Yi(A,t.get(k));if(gi(A.axis,U.axis))if(Wr(Math.abs(en(U,A.a)),c,Math.max(1.5,.1*c)))if(D<=c+.5&&D>=c-Math.max(3,.2*c))_(A,180,"high","inner-wall",`${i(k)} is ${D.toFixed(1)} mm, just under the ${c.toFixed(1)} mm wall it hangs from: it rolls over the rim and lies flat against the inside (180°), forming a double wall.${S}`,3),b.push({hg:A,inner:k});else{const N=T(A,90);_(A,N.deg,"low","unknown",`${i(k)} (${D.toFixed(1)} mm) on the rim of ${i(E)} does not match an inner wall; ${N.deg}° is a guess.`,3)}else _(A,0,"low","unknown",`No tray rule matched ${i(k)}; left flat.`,3);else{const N=T(A,90,[...P].filter(L=>L!==E));_(A,N.deg,N.decided?"medium":"low","corner-flap",N.decided?`${i(k)} is a ${D.toFixed(1)} mm corner flap on the end of wall ${i(E)}: folded ${N.deg>0?"+":""}${N.deg}° it lies flat against the neighbouring wall (${Math.round(N.contact*100)}% contact, chosen over the opposite direction). Glued or locked behind an inner wall: not encoded.`:`${i(k)} is a corner flap on wall ${i(E)}, but neither direction lands on a neighbouring wall; 90° is a guess.`,1),C.add(E)}}}for(const U of x)C.has(n.childOf[U.id])&&(g[U.id].step=0);for(const{inner:U}of b)for(const E of o(U)){const A=n.childOf[E.id],k=Yi(E,t.get(A)),D=T(E,90,[s]);_(E,D.decided?D.deg:0,D.decided?"medium":"low","lock-tab",D.decided?`${i(A)} (${k.toFixed(1)} mm) on the bottom edge of inner wall ${i(U)}: folded ${D.deg>0?"+":""}${D.deg}° it lies flat on the base (${Math.round(D.contact*100)}% contact) — a lock/anchor tab. Whether it locks into a slot is not encoded.`:`${i(A)} hangs on inner wall ${i(U)} but lands on nothing in either direction; left flat.`,4)}for(const U of e.hinges)!g[U.id]&&n.childOf[U.id]&&_(U,0,"low","unknown",`No tray rule matched ${i(n.childOf[U.id])}; left flat for manual folding.`,5);return p.push(`Tray: base ${i(s)} ${u.map(U=>U.toFixed(1)).join(" × ")} mm with ${x.length} walls of ${c.toFixed(1)} mm.`),b.length&&p.push(`${b.length} wall(s) roll over into double walls; board thickness is not modelled, so inner and outer walls coincide.`),{family:"tray",tray:{base:s,walls:x.map(U=>n.childOf[U.id]),heightMm:c,baseMm:u},hinges:g,roles:v,tube:null,notes:p}}function tm(n,e,t){const i=is(n,t,1),s=new Map(n.graph.panels.map(c=>[c.id,c]));let r=null,o=null;const a=e.tube;if(a){const c=(T,P)=>n.graph.hinges.find(C=>C.panelA===T&&C.panelB===P||C.panelA===P&&C.panelB===T),[h,,,d]=a.walls,u=(T,P)=>{const C=c(T,P),b=s.get(T),U=Math.sign(en(C,b.centroid))||1,E=Math.max(...b.outer.map(L=>U*en(C,L))),A=b.outer.filter(L=>Math.abs(U*en(C,L)-E)<.75),k=A.map(L=>fi(C.axis,L)),D=(Math.min(...k)+Math.max(...k))/2,N=A.reduce((L,O)=>Math.abs(fi(C.axis,O)-D)<Math.abs(fi(C.axis,L)-D)?O:L);return vi(i[T],[N[0]-C.axis[0]*(fi(C.axis,N)-D),N[1]-C.axis[1]*(fi(C.axis,N)-D)])},x=u(h,a.walls[1]),g=u(d,a.walls[2]);r=Math.hypot(x[0]-g[0],x[1]-g[1],x[2]-g[2]);const v=im(i[a.walls[0]],c(a.walls[0],a.walls[1]).axis),p=es(i[a.walls[0]]),m=nm(v,p),S=a.walls.flatMap(T=>s.get(T).outer.map(P=>vi(i[T],P))),_=T=>{const P=S.map(C=>Ad(C,T));return Math.max(...P)-Math.min(...P)};o=[_(m),_(p)]}let l=null;if(e.tray){const c=e.tray.walls.map(h=>{const d=n.graph.hinges.find(v=>n.childOf[v.id]===h),u=s.get(h),x=Math.sign(en(d,u.centroid))||1,g=Math.max(...u.outer.map(v=>x*en(d,v)));return{hg:d,pts:u.outer.filter(v=>g-x*en(d,v)<.75).map(v=>vi(i[h],v))}});for(let h=0;h<c.length;h++)for(let d=h+1;d<c.length;d++){if(gi(c[h].hg.axis,c[d].hg.axis))continue;let u=1/0;for(const x of c[h].pts)for(const g of c[d].pts)u=Math.min(u,Math.hypot(x[0]-g[0],x[1]-g[1],x[2]-g[2]));l=Math.max(l??0,u)}}return{tubeGapMm:r,crossSectionMm:o,trayCornerGapMm:l,overlaps:Ld(n,i)}}const Ad=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],nm=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],im=(n,e)=>[n[0]*e[0]-n[1]*e[1],n[4]*e[0]-n[5]*e[1],n[8]*e[0]-n[9]*e[1]];function sm(n,e){const t=[e[0]-n[3],e[1]-n[7],e[2]-n[11]];return[[n[0]*t[0]+n[4]*t[1]+n[8]*t[2],-(n[1]*t[0]+n[5]*t[1]+n[9]*t[2])],n[2]*t[0]+n[6]*t[1]+n[10]*t[2]]}const Rd=(n,e)=>Si(e,n.outer)&&!n.holes.some(t=>Si(e,t));function Cd(n,e=14){const t=n.outer.map(c=>c[0]),i=n.outer.map(c=>c[1]),s=[],[r,o,a,l]=[Math.min(...t),Math.max(...t),Math.min(...i),Math.max(...i)];for(let c=0;c<e;c++)for(let h=0;h<e;h++){const d=[r+(o-r)*(c+.5)/e,a+(l-a)*(h+.5)/e];Rd(n,d)&&s.push(d)}return s}function Eo(n,e,t,i,s=2){if(!i.length)return 0;const r=es(n[e.id]),o=es(n[t.id]);if(Math.abs(Ad(r,o))<Math.cos(2*Math.PI/180))return 0;let a=0;for(const l of i){const[c,h]=sm(n[t.id],vi(n[e.id],l));Math.abs(h)<=s&&Rd(t,c)&&a++}return a/i.length}function Ld(n,e,t=2,i=.05){const s=n.graph.panels,r=[],o=new Map(s.map(a=>[a.id,Cd(a)]));for(let a=0;a<s.length;a++)for(let l=a+1;l<s.length;l++){const c=s[a],h=s[l],d=Math.max(Eo(e,c,h,o.get(c.id),t),Eo(e,h,c,o.get(h.id),t));d>=i&&r.push({a:c.id,b:h.id,fraction:d})}return r.sort((a,l)=>l.fraction-a.fraction)}const rm=(n,e)=>[n[0]*e[0]+n[1]*e[3],n[0]*e[1]+n[1]*e[4],n[0]*e[2]+n[1]*e[5]+n[2],n[3]*e[0]+n[4]*e[3],n[3]*e[1]+n[4]*e[4],n[3]*e[2]+n[4]*e[5]+n[5],0,0,1],am=(n,[e,t])=>[n[0]*e+n[1]*t+n[2],n[3]*e+n[4]*t+n[5]];function $s(n,e){const t=e[0]/2,i=e[1]/2,s=n.rotationDeg*Math.PI/180,r=n.scale||1,o=Math.cos(s)*r,a=Math.sin(s)*r;return[o,-a,t+n.offsetMm[0]-(o*t-a*i),a,o,i+n.offsetMm[1]-(a*t+o*i),0,0,1]}function om(n){const e=n[0]*n[4]-n[1]*n[3],t=n[4]/e,i=-n[1]/e,s=-n[3]/e,r=n[0]/e;return[t,i,-(t*n[2]+i*n[5]),s,r,-(s*n[2]+r*n[5]),0,0,1]}function HM(n,e,t){const i=[1/t.w,0,-t.x/t.w,0,1/t.h,-t.y/t.h,0,0,1];return rm(i,om($s(n,e)))}const Pd=15;function lm(n,e,t=Pd){const i=Math.max(0,n.x-t),s=Math.max(0,n.y-t),r=Math.min(e[0],n.x+n.w+t),o=Math.min(e[1],n.y+n.h+t);return{x:i,y:s,w:Math.max(1,r-i),h:Math.max(1,o-s)}}function jM(n,e,t,i){const s=e==="print"?.64:.12,r=e==="print"?4:1,o=14,a=t/Math.max(n.w,n.h),l=Math.sqrt(i*s/(r*4/3*n.w*n.h)),c=Math.max(.5,Math.min(o,a,l));return{pxPerMm:c,w:Math.max(1,Math.round(n.w*c)),h:Math.max(1,Math.round(n.h*c)),limitedBy:c===o?"quality":c===a?"gpu":"memory",bytes:Math.round(n.w*c*n.h*c*r*4/3)}}const cm=n=>n.preset==="custom"?n.color:jr[n.preset],hm=1,dm=.05;function VM(n,e,t){const i=s=>t&&e[s]&&n.layers[s].visible?1:0;return{printOn:e.print&&n.printVisible?1:0,foilOn:i("foil"),uvOn:i("spotUv"),embOn:i("emboss"),foilHex:cm(n.foil),foilTinted:n.foil.interaction==="tinted"?1:0,foilRough:Math.min(1,Math.max(.02,n.foil.roughness)),foilMetal:Math.min(1,Math.max(0,n.foil.intensity)),foilTexture:n.foil.texture==="brushed"?1:n.foil.texture==="satin"?2:0,uvStrength:Math.min(1,Math.max(0,n.spotUv.strength)),uvRough:Math.min(1,Math.max(0,n.spotUv.roughness)),uvOverFoil:n.spotUv.overFoil?1:0,embScale:(n.emboss.mode==="emboss"?1:-1)*Math.max(0,n.emboss.depth)*hm,grainScale:dm}}const _n=(n,e)=>Number(n.getAttribute(e)??0)||0;function um(n){const e=n.tagName.toLowerCase();return e==="circle"||e==="ellipse"?[_n(n,"cx"),_n(n,"cy")]:e==="rect"?[_n(n,"x")+_n(n,"width")/2,_n(n,"y")+_n(n,"height")/2]:e==="line"?[(_n(n,"x1")+_n(n,"x2"))/2,(_n(n,"y1")+_n(n,"y2"))/2]:null}function Ma(n,e){const i=new DOMParser().parseFromString(n,"image/svg+xml").documentElement;if(!i||i.tagName.toLowerCase()!=="svg")return[];const s=e.sourceToMm,r=[],o=(l,c)=>{const h=um(l);if(h)return nd(xi(s,c),h);for(const d of Array.from(l.children)){const u=d.getAttribute("transform"),x=o(d,u?xi(c,ho(u)):c);if(x)return x}return null},a=(l,c)=>{const h=l.getAttribute("transform"),d=h?xi(c,ho(h)):c;if(gd.test(go(l))){const u=o(l,d);u&&r.push({name:l.getAttribute("id")||l.getAttribute("inkscape:label")||go(l),x:u[0],y:u[1]});return}for(const u of Array.from(l.children))a(u,d)};for(const l of Array.from(i.children))a(l,co);return r}const fm=.3;function Nd(n,e,t,i){const s=$s(t,i),r=e.map(l=>({name:l.name,raw:[l.x,l.y],p:am(s,[l.x,l.y])})),o=[],a=new Set;for(const l of n){let c=r.findIndex((d,u)=>!a.has(u)&&d.name===l.name);if(c<0){let d=25;r.forEach((u,x)=>{const g=Math.hypot(u.p[0]-l.x,u.p[1]-l.y);!a.has(x)&&g<d&&(d=g,c=x)})}if(c<0)continue;a.add(c);const h=r[c];o.push({name:l.name,die:[l.x,l.y],layer:h.p,raw:h.raw,errorMm:Math.hypot(h.p[0]-l.x,h.p[1]-l.y)})}return o}function pm(n,e,t,i){const s=Nd(n,e,t,i).map(({raw:l,...c})=>c);if(s.length<2)return{state:"unverified",pairs:s,maxErrorMm:NaN,meanErrorMm:NaN};const r=s.map(l=>l.errorMm),o=Math.max(...r),a=r.reduce((l,c)=>l+c,0)/r.length;return{state:o<=fm?"verified":"misaligned",pairs:s,maxErrorMm:o,meanErrorMm:a}}function mm(n,e,t,i){const s=Nd(n,e,i,t);if(s.length<2)return null;const r=s.map(T=>T.raw),o=s.map(T=>T.die),a=r.length,l=t[0]/2,c=t[1]/2,h=r.reduce((T,P)=>[T[0]+P[0]/a,T[1]+P[1]/a],[0,0]),d=o.reduce((T,P)=>[T[0]+P[0]/a,T[1]+P[1]/a],[0,0]);let u=0,x=0,g=0;for(let T=0;T<a;T++){const P=r[T][0]-h[0],C=r[T][1]-h[1],b=o[T][0]-d[0],U=o[T][1]-d[1];u+=P*b+C*U,x+=P*U-C*b,g+=P*P+C*C}const v=Math.atan2(x,u),p=g>0?Math.hypot(u,x)/g:1,m=Math.cos(v)*p,S=Math.sin(v)*p,_=[d[0]-l-(m*(h[0]-l)-S*(h[1]-c)),d[1]-c-(S*(h[0]-l)+m*(h[1]-c))];return{offsetMm:[+_[0].toFixed(4),+_[1].toFixed(4)],rotationDeg:+(v*180/Math.PI).toFixed(4),scale:+p.toFixed(6)}}const Mn=n=>n.toFixed(1),yn=n=>n.toFixed(2),gm=[[.75,"px vs pt"],[4/3,"pt vs px"],[96/25.4,"mm vs px"],[25.4/96,"px vs mm"],[72/25.4,"mm vs pt"],[25.4/72,"pt vs mm"],[25.4,"mm vs in"],[1/25.4,"in vs mm"]];function xm(n){const e=[],{die:t,layer:i,align:s}=n,r=i.widthMm-t.widthMm,o=i.heightMm-t.heightMm;if(Math.abs(r)<=.1&&Math.abs(o)<=.1)e.push({level:"ok",code:"size",text:`Physical size matches the dieline (${Mn(i.widthMm)} × ${Mn(i.heightMm)} mm).`});else{const c=i.widthMm/t.widthMm,h=i.heightMm/t.heightMm,d=Math.abs(c-h)<.002?gm.find(([u])=>Math.abs(c/u-1)<.01):void 0;e.push({level:"warn",code:d?"scale-units":"size",text:d?`Size is ${yn(c)}× the dieline (${Mn(i.widthMm)} × ${Mn(i.heightMm)} mm) — looks like a unit mismatch (${d[1]}). Check the unit settings or correct the scale.`:`Size differs from the dieline: ${Mn(i.widthMm)} × ${Mn(i.heightMm)} mm vs ${Mn(t.widthMm)} × ${Mn(t.heightMm)} mm. Placed by its physical size at the dieline origin — check the overlay.`})}const a=i.viewBox;if((a[0]!==0||a[1]!==0)&&e.push({level:"info",code:"viewbox-origin",text:`viewBox starts at (${yn(a[0])}, ${yn(a[1])}); mapped exactly, not shifted.`}),n.unitless&&e.push({level:"warn",code:"unitless",text:"Width/height have no unit; the chosen unit was applied. Confirm against a known dimension."}),n.reg.state==="verified"?e.push({level:"ok",code:"registration",text:`Registration verified with ${n.reg.pairs.length} shared marks (max error ${yn(n.reg.maxErrorMm)} mm).`}):n.reg.state==="misaligned"?e.push({level:"warn",code:"registration",text:`Registration marks disagree by up to ${yn(n.reg.maxErrorMm)} mm (mean ${yn(n.reg.meanErrorMm)} mm). Use “Align to registration marks” or correct manually.`}):e.push({level:"info",code:"registration",text:"Registration unverified: no shared registration marks in the dieline and this layer. Matching sizes alone are not proof — check the overlay."}),s.offsetMm[0]!==0||s.offsetMm[1]!==0||s.rotationDeg!==0||s.scale!==1){const c=Math.hypot(...s.offsetMm)>10||Math.abs(s.rotationDeg)>3||Math.abs(s.scale-1)>.03;e.push({level:c?"warn":"info",code:"manual-alignment",text:`Manual correction: offset ${yn(s.offsetMm[0])}, ${yn(s.offsetMm[1])} mm · rotation ${yn(s.rotationDeg)}° · scale ${yn(s.scale*100)} %${c?" — unusually large; check that the right file is loaded.":"."}`})}if(n.mask&&n.stats){const c=n.stats;c.paintedMm2<.5?e.push({level:"warn",code:"empty",text:`${n.label} paints nothing after exclusions — the finish has no effect.`}):(e.push({level:"ok",code:"area",text:`Painted area ${Mn(c.paintedMm2/100)} cm², ${Math.round(c.onMaterial*100)} % of it on the package.`}),c.onMaterial<.95&&e.push({level:"warn",code:"outside-material",text:`${Math.round((1-c.onMaterial)*100)} % of the painted area lies outside the package (cut-outs or off the sheet) and is never visible.`}),c.outsideRaster>.005&&e.push({level:"warn",code:"clipped",text:`${Mn(c.outsideRaster*100)} % of the painted area is beyond the rendered area (package + 15 mm) and is clipped in 3D.`}),c.materialCovered>.9&&e.push({level:"warn",code:"full-sheet",text:`Covers ${Math.round(c.materialCovered*100)} % of the package — check that a background was not exported as part of the mask.`}))}for(const c of n.messages??[])c.severity!=="info"&&e.push({level:"warn",code:c.code,text:c.message});return e}function Dd(n){const[e,t]=te.useState(null);return te.useEffect(()=>{const i=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"}));return t(i),()=>URL.revokeObjectURL(i)},[n]),e}const vm=(n,e)=>{const t=$s(n,e);return`matrix(${t[0]} ${t[3]} ${t[1]} ${t[4]} ${t[2]} ${t[5]})`};function _m({l:n,opacity:e}){const t=Dd(n.svg);return!t||!n.visible?null:f.jsx("image",{href:t,x:0,y:0,width:n.layerMm[0],height:n.layerMm[1],preserveAspectRatio:"none",transform:vm(n.align,n.layerMm),opacity:e,className:`align-layer ${n.id}`,"data-layer":n.id})}function Mm({canvas:n,graph:e,dielineSvg:t,layers:i,selectedId:s,opacity:r,showMarks:o,dieMarks:a,onMove:l}){var k;const c=n.widthMm,h=n.heightMm,d=Math.max(c,h)*.04,u=[-d,-d,c+2*d,h+2*d],[x,g]=te.useState(u);te.useEffect(()=>g(u),[c,h]);const v=te.useRef(null),p=te.useRef(null),m=Dd(t??"<svg xmlns='http://www.w3.org/2000/svg'/>"),S=i.find(D=>D.id===s),_=(D,N)=>{const L=v.current.getBoundingClientRect(),O=Math.max(x[2]/L.width,x[3]/L.height),z=x[0]+x[2]/2-L.width*O/2,Q=x[1]+x[3]/2-L.height*O/2;return[z+(D-L.left)*O,Q+(N-L.top)*O]},T=(D,N)=>g(([L,O,z,Q])=>{const W=N??[L+z/2,O+Q/2],$=Math.min(u[2]*4,Math.max(2,z*D)),Z=$/z;return[W[0]-(W[0]-L)*Z,W[1]-(W[1]-O)*Z,$,Q*Z]}),[P,C]=te.useState(null),b=Math.round(u[2]/x[2]*100),U=x[2]/900,E=S?$s(S.align,S.layerMm):null,A=S?[[0,0],[S.layerMm[0],0],[S.layerMm[0],S.layerMm[1]],[0,S.layerMm[1]]].map(([D,N])=>[E[0]*D+E[1]*N+E[2],E[3]*D+E[4]*N+E[5]]):[];return f.jsxs("div",{className:"align-view","data-testid":"alignment-view",children:[f.jsxs("svg",{ref:v,viewBox:x.join(" "),role:"img","aria-label":`Alignment of ${(S==null?void 0:S.label)??"layers"} on the dieline`,onWheel:D=>{D.preventDefault(),T(D.deltaY>0?1.15:1/1.15,_(D.clientX,D.clientY))},onPointerDown:D=>{var N,L;(L=(N=D.target).setPointerCapture)==null||L.call(N,D.pointerId),p.current={x:D.clientX,y:D.clientY,mode:D.shiftKey&&S?"move":"pan",moved:[0,0]}},onPointerMove:D=>{C(_(D.clientX,D.clientY));const N=p.current;if(!N)return;const L=_(N.x,N.y),O=_(D.clientX,D.clientY),z=O[0]-L[0],Q=O[1]-L[1];N.x=D.clientX,N.y=D.clientY,N.mode==="pan"?g(([W,$,Z,ae])=>[W-z,$-Q,Z,ae]):(N.moved=[N.moved[0]+z,N.moved[1]+Q],l(S.id,z,Q,!1))},onPointerUp:()=>{const D=p.current;p.current=null,(D==null?void 0:D.mode)==="move"&&l(S.id,0,0,!0)},onPointerLeave:()=>C(null),children:[f.jsx("rect",{x:0,y:0,width:c,height:h,className:"align-sheet"}),i.map(D=>f.jsx(_m,{l:D,opacity:D.id===s?r:Math.min(r,.55)},D.id)),e&&f.jsx("g",{className:"align-panels",children:e.panels.map(D=>f.jsx("path",{d:[D.outer,...D.holes].map(N=>`M${N.map(L=>L.join(" ")).join("L")}Z`).join(" "),strokeWidth:U},D.id))}),m&&f.jsx("image",{href:m,x:0,y:0,width:c,height:h,preserveAspectRatio:"none",className:"align-dieline"}),f.jsx("rect",{x:0,y:0,width:c,height:h,className:"align-guide sheet",strokeWidth:U}),S&&f.jsx("polygon",{points:A.map(D=>D.join(",")).join(" "),className:"align-guide layer",strokeWidth:U*1.2,strokeDasharray:`${U*6} ${U*4}`}),S&&(()=>{const D=[E[0]*S.layerMm[0]/2+E[1]*S.layerMm[1]/2+E[2],E[3]*S.layerMm[0]/2+E[4]*S.layerMm[1]/2+E[5]];return f.jsxs("g",{className:"align-guide centre",strokeWidth:U,children:[f.jsx("line",{x1:D[0]-6,y1:D[1],x2:D[0]+6,y2:D[1]}),f.jsx("line",{x1:D[0],y1:D[1]-6,x2:D[0],y2:D[1]+6})]})})(),o&&f.jsxs("g",{className:"align-marks",children:[a.map(D=>f.jsxs("g",{className:"mark die",children:[f.jsx("circle",{cx:D.x,cy:D.y,r:2.2,strokeWidth:U*1.5}),f.jsx("line",{x1:D.x-3.5,y1:D.y,x2:D.x+3.5,y2:D.y,strokeWidth:U}),f.jsx("line",{x1:D.x,y1:D.y-3.5,x2:D.x,y2:D.y+3.5,strokeWidth:U})]},`d${D.name}`)),(k=S==null?void 0:S.reg)==null?void 0:k.pairs.map(D=>f.jsxs("g",{className:"mark layer",children:[f.jsx("line",{x1:D.layer[0]-2.5,y1:D.layer[1]-2.5,x2:D.layer[0]+2.5,y2:D.layer[1]+2.5,strokeWidth:U*1.5}),f.jsx("line",{x1:D.layer[0]-2.5,y1:D.layer[1]+2.5,x2:D.layer[0]+2.5,y2:D.layer[1]-2.5,strokeWidth:U*1.5}),D.errorMm>.05&&f.jsx("line",{x1:D.die[0],y1:D.die[1],x2:D.layer[0],y2:D.layer[1],className:"err",strokeWidth:U}),f.jsxs("text",{x:D.die[0]+3,y:D.die[1]-3,fontSize:Math.max(2,x[2]/70),children:[D.errorMm.toFixed(2)," mm"]})]},`l${D.name}`))]})]}),f.jsxs("div",{className:"align-tools",children:[f.jsx("button",{className:"tb-btn icon-only",onClick:()=>T(1/1.4),"aria-label":"Zoom in alignment view",children:f.jsx(zp,{size:15})}),f.jsx("button",{className:"tb-btn icon-only",onClick:()=>T(1.4),"aria-label":"Zoom out alignment view",children:f.jsx(Up,{size:15})}),f.jsx("button",{className:"tb-btn icon-only",onClick:()=>g(u),"aria-label":"Fit alignment view",children:f.jsx(Np,{size:15})}),f.jsxs("span",{className:"muted",children:[b," %",P?` · ${P[0].toFixed(1)}, ${P[1].toFixed(1)} mm`:""]})]}),f.jsxs("p",{className:"align-hint",children:["Drag to pan · wheel to zoom · Shift+drag moves ",S?S.label:"the layer"]})]})}function ym(n){const e=n.length/4,t=new Uint8Array(e);for(let i=0;i<e;i++){const s=n[i*4],r=n[i*4+1],o=n[i*4+2],a=n[i*4+3]/255;if(a<=.004)continue;const l=Math.min(s,r,o)/255,c=l<=.86?0:l>=.97?1:(l-.86)/.11,h=a*(1-c);t[i]=Math.round(255*Math.min(1,h*6))}return t}function WM(n,e,t,i){const s=Math.max(0,Math.round(i));if(!s)return n;const r=2*s+1,o=e*t,a=new Uint32Array(o),l=new Uint32Array(o);for(let d=0;d<o;d++)a[d]=n[d]<<8;const c=new Uint32Array(Math.max(e,t)+2*s);for(let d=0;d<2;d++){for(let x=0;x<t;x++){const g=x*e;for(let p=0;p<s;p++)c[p]=a[g],c[e+s+p]=a[g+e-1];for(let p=0;p<e;p++)c[s+p]=a[g+p];let v=0;for(let p=0;p<r;p++)v+=c[p];for(let p=0;p<e;p++)l[g+p]=v/r|0,v+=c[p+r]-c[p]}const u=new Float64Array(e);for(let x=-s;x<=s;x++){const g=Math.min(t-1,Math.max(0,x))*e;for(let v=0;v<e;v++)u[v]+=l[g+v]}for(let x=0;x<t;x++){const g=x*e,v=Math.min(t-1,x+s+1)*e,p=Math.max(0,x-s)*e;for(let m=0;m<e;m++)a[g+m]=u[m]/r|0,u[m]+=l[v+m]-l[p+m]}}const h=new Uint8Array(o);for(let d=0;d<o;d++)h[d]=a[d]+128>>8;return h}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="160",$M={ROTATE:0,DOLLY:1,PAN:2},XM={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sm=0,mc=1,bm=2,Ud=1,Em=2,Un=3,Jn=0,jt=1,fn=2,Yn=0,ts=1,gc=2,xc=3,vc=4,wm=5,pi=100,Tm=101,Am=102,_c=103,Mc=104,Rm=200,Cm=201,Lm=202,Pm=203,wo=204,To=205,Nm=206,Dm=207,Um=208,Im=209,Om=210,Fm=211,km=212,Bm=213,zm=214,Gm=0,Hm=1,jm=2,$r=3,Vm=4,Wm=5,$m=6,Xm=7,Id=0,Zm=1,qm=2,Kn=0,Ym=1,Km=2,Qm=3,Jm=4,eg=5,tg=6,Od=300,ss=301,rs=302,Ao=303,Ro=304,ta=306,zs=1e3,pn=1001,Co=1002,Ft=1003,yc=1004,ya=1005,tn=1006,ng=1007,Gs=1008,Qn=1009,ig=1010,sg=1011,Vo=1012,Fd=1013,Xn=1014,Zn=1015,Hs=1016,kd=1017,Bd=1018,_i=1020,rg=1021,mn=1023,ag=1024,og=1025,Mi=1026,as=1027,lg=1028,zd=1029,cg=1030,Gd=1031,Hd=1033,Sa=33776,ba=33777,Ea=33778,wa=33779,Sc=35840,bc=35841,Ec=35842,wc=35843,jd=36196,Tc=37492,Ac=37496,Rc=37808,Cc=37809,Lc=37810,Pc=37811,Nc=37812,Dc=37813,Uc=37814,Ic=37815,Oc=37816,Fc=37817,kc=37818,Bc=37819,zc=37820,Gc=37821,Ta=36492,Hc=36494,jc=36495,hg=36283,Vc=36284,Wc=36285,$c=36286,Vd=3e3,yi=3001,dg=3200,ug=3201,Wd=0,fg=1,sn="",Pt="srgb",Fn="srgb-linear",Wo="display-p3",na="display-p3-linear",Xr="linear",ut="srgb",Zr="rec709",qr="p3",Di=7680,Xc=519,pg=512,mg=513,gg=514,$d=515,xg=516,vg=517,_g=518,Mg=519,Zc=35044,qc="300 es",Lo=1035,On=2e3,Yr=2001;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Us=Math.PI/180,Po=180/Math.PI;function hs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function yg(n,e){return(n%e+e)%e}function Aa(n,e,t){return(1-t)*n+t*e}function Yc(n){return(n&n-1)===0&&n!==0}function No(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ss(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ZM={DEG2RAD:Us};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,s,r,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],x=i[5],g=i[8],v=s[0],p=s[3],m=s[6],S=s[1],_=s[4],T=s[7],P=s[2],C=s[5],b=s[8];return r[0]=o*v+a*S+l*P,r[3]=o*p+a*_+l*C,r[6]=o*m+a*T+l*b,r[1]=c*v+h*S+d*P,r[4]=c*p+h*_+d*C,r[7]=c*m+h*T+d*b,r[2]=u*v+x*S+g*P,r[5]=u*p+x*_+g*C,r[8]=u*m+x*T+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,x=c*r-o*l,g=t*d+i*u+s*x;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=x*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new et;function Xd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sg(){const n=Kr("canvas");return n.style.display="block",n}const Kc={};function Is(n){n in Kc||(Kc[n]=!0,console.warn(n))}const Qc=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jc=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[Fn]:{transfer:Xr,primaries:Zr,toReference:n=>n,fromReference:n=>n},[Pt]:{transfer:ut,primaries:Zr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[na]:{transfer:Xr,primaries:qr,toReference:n=>n.applyMatrix3(Jc),fromReference:n=>n.applyMatrix3(Qc)},[Wo]:{transfer:ut,primaries:qr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Jc),fromReference:n=>n.applyMatrix3(Qc).convertLinearToSRGB()}},bg=new Set([Fn,na]),ct={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!bg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=rr[e].toReference,s=rr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return rr[n].primaries},getTransfer:function(n){return n===sn?Xr:rr[n].transfer}};function ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ca(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ui;class Zd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=Kr("canvas")),Ui.width=e.width,Ui.height=e.height;const i=Ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ns(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ns(t[i]/255)*255):t[i]=ns(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eg=0;class qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=hs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(La(s[o].image)):r.push(La(s[o]))}else r=La(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function La(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wg=0;class Vt extends cs{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=pn,s=pn,r=tn,o=Gs,a=mn,l=Qn,c=Vt.DEFAULT_ANISOTROPY,h=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=hs(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===yi?Pt:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?yi:Vd}set encoding(e){Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yi?Pt:sn}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Od;Vt.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,s=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],x=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+x+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,T=(x+1)/2,P=(m+1)/2,C=(h+u)/4,b=(d+v)/4,U=(g+p)/4;return _>T&&_>P?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=C/i,r=b/i):T>P?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=C/s,r=U/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=b/r,s=U/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+x+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tg extends cs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yi?Pt:sn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Vt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Tg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yd extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ag extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=r[o+0],x=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=x,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==x||h!==g){let p=1-a;const m=l*u+c*x+h*g+d*v,S=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const P=Math.sqrt(_),C=Math.atan2(P,m*S);p=Math.sin(p*C)/P,a=Math.sin(a*C)/P}const T=a*S;if(l=l*p+u*T,c=c*p+x*T,h=h*p+g*T,d=d*p+v*T,p===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],x=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*x-c*u,e[t+1]=l*g+h*u+c*d-a*x,e[t+2]=c*g+h*x+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),x=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*x*g,this._y=c*x*d-u*h*g,this._z=c*h*g+u*x*d,this._w=c*h*d-u*x*g;break;case"YXZ":this._x=u*h*d+c*x*g,this._y=c*x*d-u*h*g,this._z=c*h*g-u*x*d,this._w=c*h*d+u*x*g;break;case"ZXY":this._x=u*h*d-c*x*g,this._y=c*x*d+u*h*g,this._z=c*h*g+u*x*d,this._w=c*h*d-u*x*g;break;case"ZYX":this._x=u*h*d-c*x*g,this._y=c*x*d+u*h*g,this._z=c*h*g-u*x*d,this._w=c*h*d+u*x*g;break;case"YZX":this._x=u*h*d+c*x*g,this._y=c*x*d+u*h*g,this._z=c*h*g-u*x*d,this._w=c*h*d-u*x*g;break;case"XZY":this._x=u*h*d-c*x*g,this._y=c*x*d-u*h*g,this._z=c*h*g+u*x*d,this._w=c*h*d+u*x*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){const x=.5/Math.sqrt(u+1);this._w=.25/x,this._x=(h-l)*x,this._y=(r-c)*x,this._z=(o-s)*x}else if(i>a&&i>d){const x=2*Math.sqrt(1+i-a-d);this._w=(h-l)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+c)/x}else if(a>d){const x=2*Math.sqrt(1+a-i-d);this._w=(r-c)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(l+h)/x}else{const x=2*Math.sqrt(1+d-i-a);this._w=(o-s)/x,this._x=(r+c)/x,this._y=(l+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const x=1-t;return this._w=x*o+t*this._w,this._x=x*i+t*this._x,this._y=x*s+t*this._y,this._z=x*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new H,eh=new Xs;class Zs{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ar.copy(i.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),or.subVectors(this.max,bs),Ii.subVectors(e.a,bs),Oi.subVectors(e.b,bs),Fi.subVectors(e.c,bs),Gn.subVectors(Oi,Ii),Hn.subVectors(Fi,Oi),ai.subVectors(Ii,Fi);let t=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-ai.z,ai.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,ai.z,0,-ai.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-ai.y,ai.x,0];return!Na(t,Ii,Oi,Fi,or)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Ii,Oi,Fi,or))?!1:(lr.crossVectors(Gn,Hn),t=[lr.x,lr.y,lr.z],Na(t,Ii,Oi,Fi,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new H,new H,new H,new H,new H,new H,new H,new H],cn=new H,ar=new Zs,Ii=new H,Oi=new H,Fi=new H,Gn=new H,Hn=new H,ai=new H,bs=new H,or=new H,lr=new H,oi=new H;function Na(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){oi.fromArray(n,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=i.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Rg=new Zs,Es=new H,Da=new H;class ia{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Es,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(Da)),this.expandByPoint(Es.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new H,Ua=new H,cr=new H,jn=new H,Ia=new H,hr=new H,Oa=new H;class $o{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ua.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Ua);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=jn.dot(this.direction),l=-jn.dot(cr),c=jn.lengthSq(),h=Math.abs(1-o*o);let d,u,x,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,x=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),x=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),x=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),x=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),x=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),x=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),x=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ua).addScaledVector(cr,u),x}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),s=Ln.dot(Ln)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,s,r){Ia.subVectors(t,e),hr.subVectors(i,e),Oa.crossVectors(Ia,hr);let o=this.direction.dot(Oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(hr.crossVectors(jn,hr));if(l<0)return null;const c=a*this.direction.dot(Ia.cross(jn));if(c<0||l+c>o)return null;const h=-a*jn.dot(Oa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,s,r,o,a,l,c,h,d,u,x,g,v,p){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,x,g,v,p)}set(e,t,i,s,r,o,a,l,c,h,d,u,x,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=x,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,x=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=x+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+x*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,x=l*d,g=c*h,v=c*d;t[0]=u+v*a,t[4]=g*a-x,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=x*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,x=l*d,g=c*h,v=c*d;t[0]=u-v*a,t[4]=-o*d,t[8]=g+x*a,t[1]=x+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,x=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-x,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=x*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,x=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+x,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=x*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=o*l,x=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=o*h,t[9]=x*d-g,t[2]=g*d-x,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cg,e,Lg)}lookAt(e,t,i){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Vn.crossVectors(i,qt),Vn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Vn.crossVectors(i,qt)),Vn.normalize(),dr.crossVectors(qt,Vn),s[0]=Vn.x,s[4]=dr.x,s[8]=qt.x,s[1]=Vn.y,s[5]=dr.y,s[9]=qt.y,s[2]=Vn.z,s[6]=dr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],x=i[13],g=i[2],v=i[6],p=i[10],m=i[14],S=i[3],_=i[7],T=i[11],P=i[15],C=s[0],b=s[4],U=s[8],E=s[12],A=s[1],k=s[5],D=s[9],N=s[13],L=s[2],O=s[6],z=s[10],Q=s[14],W=s[3],$=s[7],Z=s[11],ae=s[15];return r[0]=o*C+a*A+l*L+c*W,r[4]=o*b+a*k+l*O+c*$,r[8]=o*U+a*D+l*z+c*Z,r[12]=o*E+a*N+l*Q+c*ae,r[1]=h*C+d*A+u*L+x*W,r[5]=h*b+d*k+u*O+x*$,r[9]=h*U+d*D+u*z+x*Z,r[13]=h*E+d*N+u*Q+x*ae,r[2]=g*C+v*A+p*L+m*W,r[6]=g*b+v*k+p*O+m*$,r[10]=g*U+v*D+p*z+m*Z,r[14]=g*E+v*N+p*Q+m*ae,r[3]=S*C+_*A+T*L+P*W,r[7]=S*b+_*k+T*O+P*$,r[11]=S*U+_*D+T*z+P*Z,r[15]=S*E+_*N+T*Q+P*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],x=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*x-i*l*x)+v*(+t*l*x-t*c*u+r*o*u-s*o*x+s*c*h-r*l*h)+p*(+t*c*d-t*a*x-r*o*d+i*o*x+r*a*h-i*c*h)+m*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],x=e[11],g=e[12],v=e[13],p=e[14],m=e[15],S=d*p*c-v*u*c+v*l*x-a*p*x-d*l*m+a*u*m,_=g*u*c-h*p*c-g*l*x+o*p*x+h*l*m-o*u*m,T=h*v*c-g*d*c+g*a*x-o*v*x-h*a*m+o*d*m,P=g*d*l-h*v*l-g*a*u+o*v*u+h*a*p-o*d*p,C=t*S+i*_+s*T+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=S*b,e[1]=(v*u*r-d*p*r-v*s*x+i*p*x+d*s*m-i*u*m)*b,e[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*m+i*l*m)*b,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*x-i*l*x)*b,e[4]=_*b,e[5]=(h*p*r-g*u*r+g*s*x-t*p*x-h*s*m+t*u*m)*b,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*b,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*x+t*l*x)*b,e[8]=T*b,e[9]=(g*d*r-h*v*r-g*i*x+t*v*x+h*i*m-t*d*m)*b,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*m+t*a*m)*b,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*x-t*a*x)*b,e[12]=P*b,e[13]=(h*v*s-g*d*s+g*i*u-t*v*u-h*i*p+t*d*p)*b,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*p-t*a*p)*b,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*b,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,x=r*h,g=r*d,v=o*h,p=o*d,m=a*d,S=l*c,_=l*h,T=l*d,P=i.x,C=i.y,b=i.z;return s[0]=(1-(v+m))*P,s[1]=(x+T)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(x-T)*C,s[5]=(1-(u+m))*C,s[6]=(p+S)*C,s[7]=0,s[8]=(g+_)*b,s[9]=(p-S)*b,s[10]=(1-(u+v))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const c=1/r,h=1/o,d=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=On){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s);let x,g;if(a===On)x=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yr)x=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=On){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,x=(i+s)*h;let g,v;if(a===On)g=(o+r)*d,v=-2*d;else if(a===Yr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-x,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new H,hn=new yt,Cg=new H(0,0,0),Lg=new H(1,1,1),Vn=new H,dr=new H,qt=new H,th=new yt,nh=new Xs;class sa{constructor(e=0,t=0,i=0,s=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,x),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,x),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pg=0;const ih=new H,Bi=new Xs,Pn=new yt,ur=new H,ws=new H,Ng=new H,Dg=new Xs,sh=new H(1,0,0),rh=new H(0,1,0),ah=new H(0,0,1),Ug={type:"added"},Ig={type:"removed"};class Ut extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new H,t=new sa,i=new Xs,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new et}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ur.copy(e):ur.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ws,ur,this.up):Pn.lookAt(ur,ws,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ug)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ig)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),x=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),x.length>0&&(i.animations=x),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new H(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new H,Nn=new H,Fa=new H,Dn=new H,zi=new H,Gi=new H,oh=new H,ka=new H,Ba=new H,za=new H;let fr=!1;class nn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){dn.subVectors(s,t),Nn.subVectors(i,t),Fa.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Nn),l=dn.dot(Fa),c=Nn.dot(Nn),h=Nn.dot(Fa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,x=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-x-g,g,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,i,s,r,o,a,l){return fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static isFrontFacing(e,t,i,s){return dn.subVectors(i,t),Nn.subVectors(e,t),dn.cross(Nn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),dn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fr=!0),nn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;zi.subVectors(s,i),Gi.subVectors(r,i),ka.subVectors(e,i);const l=zi.dot(ka),c=Gi.dot(ka);if(l<=0&&c<=0)return t.copy(i);Ba.subVectors(e,s);const h=zi.dot(Ba),d=Gi.dot(Ba);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(zi,o);za.subVectors(e,r);const x=zi.dot(za),g=Gi.dot(za);if(g>=0&&x<=g)return t.copy(r);const v=x*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Gi,a);const p=h*g-x*d;if(p<=0&&d-h>=0&&x-g>=0)return oh.subVectors(r,s),a=(d-h)/(d-h+(x-g)),t.copy(s).addScaledVector(oh,a);const m=1/(p+v+u);return o=v*m,a=u*m,t.copy(i).addScaledVector(zi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ga(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=yg(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ga(o,r,e+1/3),this.g=Ga(o,r,e),this.b=Ga(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Pt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const i=Kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return ct.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Nt(Bt.r*255,0,255))*65536+Math.round(Nt(Bt.g*255,0,255))*256+Math.round(Nt(Bt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Pt){ct.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,s=Bt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(pr);const i=Aa(Wn.h,pr.h,t),s=Aa(Wn.s,pr.s,t),r=Aa(Wn.l,pr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Je;Je.NAMES=Kd;let Og=0;class Ti extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=ts,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=To,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qr extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new H,mr=new Re;class En{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}}class Qd extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jd extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fg=0;const Jt=new yt,Ha=new Ut,Hi=new H,Yt=new Zs,Ts=new Zs,Lt=new H;class gn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xd(e)?Jd:Qd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(Yt.min,Ts.min),Yt.expandByPoint(Lt),Lt.addVectors(Yt.max,Ts.max),Yt.expandByPoint(Lt)):(Yt.expandByPoint(Ts.min),Yt.expandByPoint(Ts.max))}Yt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(e,c),Lt.add(Hi)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new H,h[A]=new H;const d=new H,u=new H,x=new H,g=new Re,v=new Re,p=new Re,m=new H,S=new H;function _(A,k,D){d.fromArray(s,A*3),u.fromArray(s,k*3),x.fromArray(s,D*3),g.fromArray(o,A*2),v.fromArray(o,k*2),p.fromArray(o,D*2),u.sub(d),x.sub(d),v.sub(g),p.sub(g);const N=1/(v.x*p.y-p.x*v.y);isFinite(N)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(x,-v.y).multiplyScalar(N),S.copy(x).multiplyScalar(v.x).addScaledVector(u,-p.x).multiplyScalar(N),c[A].add(m),c[k].add(m),c[D].add(m),h[A].add(S),h[k].add(S),h[D].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let A=0,k=T.length;A<k;++A){const D=T[A],N=D.start,L=D.count;for(let O=N,z=N+L;O<z;O+=3)_(i[O+0],i[O+1],i[O+2])}const P=new H,C=new H,b=new H,U=new H;function E(A){b.fromArray(r,A*3),U.copy(b);const k=c[A];P.copy(k),P.sub(b.multiplyScalar(b.dot(k))).normalize(),C.crossVectors(U,k);const N=C.dot(h[A])<0?-1:1;l[A*4]=P.x,l[A*4+1]=P.y,l[A*4+2]=P.z,l[A*4+3]=N}for(let A=0,k=T.length;A<k;++A){const D=T[A],N=D.start,L=D.count;for(let O=N,z=N+L;O<z;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,x=i.count;u<x;u++)i.setXYZ(u,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,d=new H;if(e)for(let u=0,x=e.count;u<x;u+=3){const g=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,x=t.count;u<x;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let x=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?x=l[v]*a.data.stride+a.offset:x=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[x++]}return new En(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],x=e(u,i);l.push(x)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const x=c[d];h.push(x.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,x=d.length;u<x;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new yt,li=new $o,gr=new ia,ch=new H,ji=new H,Vi=new H,Wi=new H,ja=new H,xr=new H,vr=new Re,_r=new Re,Mr=new Re,hh=new H,dh=new H,uh=new H,yr=new H,Sr=new H;class bn extends Ut{constructor(e=new gn,t=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(ja.fromBufferAttribute(d,e),o?xr.addScaledVector(ja,h):xr.addScaledVector(ja.sub(t),h))}t.add(xr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(r),li.copy(e.ray).recast(e.near),!(gr.containsPoint(li.origin)===!1&&(li.intersectSphere(gr,ch)===null||li.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(lh.copy(r).invert(),li.copy(e.ray).applyMatrix4(lh),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],S=Math.max(p.start,x.start),_=Math.min(a.count,Math.min(p.start+p.count,x.start+x.count));for(let T=S,P=_;T<P;T+=3){const C=a.getX(T),b=a.getX(T+1),U=a.getX(T+2);s=br(this,m,e,i,c,h,d,C,b,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,x.start),v=Math.min(a.count,x.start+x.count);for(let p=g,m=v;p<m;p+=3){const S=a.getX(p),_=a.getX(p+1),T=a.getX(p+2);s=br(this,o,e,i,c,h,d,S,_,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],S=Math.max(p.start,x.start),_=Math.min(l.count,Math.min(p.start+p.count,x.start+x.count));for(let T=S,P=_;T<P;T+=3){const C=T,b=T+1,U=T+2;s=br(this,m,e,i,c,h,d,C,b,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,x.start),v=Math.min(l.count,x.start+x.count);for(let p=g,m=v;p<m;p+=3){const S=p,_=p+1,T=p+2;s=br(this,o,e,i,c,h,d,S,_,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function kg(n,e,t,i,s,r,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:n}}function br(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ji),n.getVertexPosition(l,Vi),n.getVertexPosition(c,Wi);const h=kg(n,e,t,i,ji,Vi,Wi,yr);if(h){s&&(vr.fromBufferAttribute(s,a),_r.fromBufferAttribute(s,l),Mr.fromBufferAttribute(s,c),h.uv=nn.getInterpolation(yr,ji,Vi,Wi,vr,_r,Mr,new Re)),r&&(vr.fromBufferAttribute(r,a),_r.fromBufferAttribute(r,l),Mr.fromBufferAttribute(r,c),h.uv1=nn.getInterpolation(yr,ji,Vi,Wi,vr,_r,Mr,new Re),h.uv2=h.uv1),o&&(hh.fromBufferAttribute(o,a),dh.fromBufferAttribute(o,l),uh.fromBufferAttribute(o,c),h.normal=nn.getInterpolation(yr,ji,Vi,Wi,hh,dh,uh,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};nn.getNormal(ji,Vi,Wi,d.normal),h.face=d}return h}class qs extends gn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,x=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function g(v,p,m,S,_,T,P,C,b,U,E){const A=T/b,k=P/U,D=T/2,N=P/2,L=C/2,O=b+1,z=U+1;let Q=0,W=0;const $=new H;for(let Z=0;Z<z;Z++){const ae=Z*k-N;for(let ue=0;ue<O;ue++){const J=ue*A-D;$[v]=J*S,$[p]=ae*_,$[m]=L,c.push($.x,$.y,$.z),$[v]=0,$[p]=0,$[m]=C>0?1:-1,h.push($.x,$.y,$.z),d.push(ue/b),d.push(1-Z/U),Q+=1}}for(let Z=0;Z<U;Z++)for(let ae=0;ae<b;ae++){const ue=u+ae+O*Z,J=u+ae+O*(Z+1),se=u+(ae+1)+O*(Z+1),pe=u+(ae+1)+O*Z;l.push(ue,J,pe),l.push(J,se,pe),W+=6}a.addGroup(x,W,E),x+=W,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=os(n[t]);for(const s in i)e[s]=i[s]}return e}function Bg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eu(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}const zg={clone:os,merge:Ht};var Gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tu extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends tu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Xi=1;class jg extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un($i,Xi,e,t);s.layers=this.layers,this.add(s);const r=new un($i,Xi,e,t);r.layers=this.layers,this.add(r);const o=new un($i,Xi,e,t);o.layers=this.layers,this.add(o);const a=new un($i,Xi,e,t);a.layers=this.layers,this.add(a);const l=new un($i,Xi,e,t);l.layers=this.layers,this.add(l);const c=new un($i,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,x),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nu extends Vt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vg extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yi?Pt:sn),this.texture=new nu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qs(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Yn});r.uniforms.tEquirect.value=t;const o=new bn(s,r),a=t.minFilter;return t.minFilter===Gs&&(t.minFilter=tn),new jg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Va=new H,Wg=new H,$g=new et;class di{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Va.subVectors(i,t).cross(Wg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Va),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$g.getNormalMatrix(e),s=this.coplanarPoint(Va).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new ia,Er=new H;class Zo{constructor(e=new di,t=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],x=s[8],g=s[9],v=s[10],p=s[11],m=s[12],S=s[13],_=s[14],T=s[15];if(i[0].setComponents(l-r,u-c,p-x,T-m).normalize(),i[1].setComponents(l+r,u+c,p+x,T+m).normalize(),i[2].setComponents(l+o,u+h,p+g,T+S).normalize(),i[3].setComponents(l-o,u-h,p-g,T-S).normalize(),i[4].setComponents(l-a,u-d,p-v,T-_).normalize(),t===On)i[5].setComponents(l+a,u+d,p+v,T+_).normalize();else if(t===Yr)i[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Er.x=s.normal.x>0?e.max.x:e.min.x,Er.y=s.normal.y>0?e.max.y:e.min.y,Er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Xg(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,h){const d=c.array,u=c.usage,x=d.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,u),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:x}}function r(c,h,d){const u=h.array,x=h._updateRange,g=h.updateRanges;if(n.bindBuffer(d,c),x.count===-1&&g.length===0&&n.bufferSubData(d,0,u),g.length!==0){for(let v=0,p=g.length;v<p;v++){const m=g[v];t?n.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count):n.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}x.count!==-1&&(t?n.bufferSubData(d,x.offset*u.BYTES_PER_ELEMENT,u,x.offset,x.count):n.bufferSubData(d,x.offset*u.BYTES_PER_ELEMENT,u.subarray(x.offset,x.offset+x.count)),x.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class ra extends gn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,x=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const S=m*u-o;for(let _=0;_<c;_++){const T=_*d-r;g.push(T,-S,0),v.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const _=S+c*m,T=S+c*(m+1),P=S+1+c*(m+1),C=S+1+c*m;x.push(_,T,C),x.push(T,P,C)}this.setIndex(x),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,x0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,T0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,G0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ox=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ux=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,e1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,t1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,u1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Zg,alphahash_pars_fragment:qg,alphamap_fragment:Yg,alphamap_pars_fragment:Kg,alphatest_fragment:Qg,alphatest_pars_fragment:Jg,aomap_fragment:e0,aomap_pars_fragment:t0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:a0,iridescence_fragment:o0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:u0,color_fragment:f0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:x0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:_0,displacementmap_pars_vertex:M0,displacementmap_vertex:y0,emissivemap_fragment:S0,emissivemap_pars_fragment:b0,colorspace_fragment:E0,colorspace_pars_fragment:w0,envmap_fragment:T0,envmap_common_pars_fragment:A0,envmap_pars_fragment:R0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:G0,envmap_vertex:L0,fog_vertex:P0,fog_pars_vertex:N0,fog_fragment:D0,fog_pars_fragment:U0,gradientmap_pars_fragment:I0,lightmap_fragment:O0,lightmap_pars_fragment:F0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:B0,lights_pars_begin:z0,lights_toon_fragment:H0,lights_toon_pars_fragment:j0,lights_phong_fragment:V0,lights_phong_pars_fragment:W0,lights_physical_fragment:$0,lights_physical_pars_fragment:X0,lights_fragment_begin:Z0,lights_fragment_maps:q0,lights_fragment_end:Y0,logdepthbuf_fragment:K0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:J0,logdepthbuf_vertex:ex,map_fragment:tx,map_pars_fragment:nx,map_particle_fragment:ix,map_particle_pars_fragment:sx,metalnessmap_fragment:rx,metalnessmap_pars_fragment:ax,morphcolor_vertex:ox,morphnormal_vertex:lx,morphtarget_pars_vertex:cx,morphtarget_vertex:hx,normal_fragment_begin:dx,normal_fragment_maps:ux,normal_pars_fragment:fx,normal_pars_vertex:px,normal_vertex:mx,normalmap_pars_fragment:gx,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:vx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:Mx,opaque_fragment:yx,packing:Sx,premultiplied_alpha_fragment:bx,project_vertex:Ex,dithering_fragment:wx,dithering_pars_fragment:Tx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Rx,shadowmap_pars_fragment:Cx,shadowmap_pars_vertex:Lx,shadowmap_vertex:Px,shadowmask_pars_fragment:Nx,skinbase_vertex:Dx,skinning_pars_vertex:Ux,skinning_vertex:Ix,skinnormal_vertex:Ox,specularmap_fragment:Fx,specularmap_pars_fragment:kx,tonemapping_fragment:Bx,tonemapping_pars_fragment:zx,transmission_fragment:Gx,transmission_pars_fragment:Hx,uv_pars_fragment:jx,uv_pars_vertex:Vx,uv_vertex:Wx,worldpos_vertex:$x,background_vert:Xx,background_frag:Zx,backgroundCube_vert:qx,backgroundCube_frag:Yx,cube_vert:Kx,cube_frag:Qx,depth_vert:Jx,depth_frag:e1,distanceRGBA_vert:t1,distanceRGBA_frag:n1,equirect_vert:i1,equirect_frag:s1,linedashed_vert:r1,linedashed_frag:a1,meshbasic_vert:o1,meshbasic_frag:l1,meshlambert_vert:c1,meshlambert_frag:h1,meshmatcap_vert:d1,meshmatcap_frag:u1,meshnormal_vert:f1,meshnormal_frag:p1,meshphong_vert:m1,meshphong_frag:g1,meshphysical_vert:x1,meshphysical_frag:v1,meshtoon_vert:_1,meshtoon_frag:M1,points_vert:y1,points_frag:S1,shadow_vert:b1,shadow_frag:E1,sprite_vert:w1,sprite_frag:T1},ge={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Sn={basic:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ht([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ht([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ht([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ht([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ht([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ht([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Ht([ge.common,ge.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Ht([ge.lights,ge.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Sn.physical={uniforms:Ht([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const wr={r:0,b:0,g:0};function A1(n,e,t,i,s,r,o){const a=new Je(0);let l=r===!0?0:1,c,h,d=null,u=0,x=null;function g(p,m){let S=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),S=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ta)?(h===void 0&&(h=new bn(new qs(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:os(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=ct.getTransfer(_.colorSpace)!==ut,(d!==_||u!==_.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,x=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new bn(new ra(2,2),new Ei({name:"BackgroundMaterial",uniforms:os(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ct.getTransfer(_.colorSpace)!==ut,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||x!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,x=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,m){p.getRGB(wr,eu(n)),i.buffers.color.setClear(wr.r,wr.g,wr.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:g}}function R1(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function d(L,O,z,Q,W){let $=!1;if(o){const Z=v(Q,z,O);c!==Z&&(c=Z,x(c.object)),$=m(L,Q,z,W),$&&S(L,Q,z,W)}else{const Z=O.wireframe===!0;(c.geometry!==Q.id||c.program!==z.id||c.wireframe!==Z)&&(c.geometry=Q.id,c.program=z.id,c.wireframe=Z,$=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,U(L,O,z,Q),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function u(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function x(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function v(L,O,z){const Q=z.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let $=W[O.id];$===void 0&&($={},W[O.id]=$);let Z=$[Q];return Z===void 0&&(Z=p(u()),$[Q]=Z),Z}function p(L){const O=[],z=[],Q=[];for(let W=0;W<s;W++)O[W]=0,z[W]=0,Q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:Q,object:L,attributes:{},index:null}}function m(L,O,z,Q){const W=c.attributes,$=O.attributes;let Z=0;const ae=z.getAttributes();for(const ue in ae)if(ae[ue].location>=0){const se=W[ue];let pe=$[ue];if(pe===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),se===void 0||se.attribute!==pe||pe&&se.data!==pe.data)return!0;Z++}return c.attributesNum!==Z||c.index!==Q}function S(L,O,z,Q){const W={},$=O.attributes;let Z=0;const ae=z.getAttributes();for(const ue in ae)if(ae[ue].location>=0){let se=$[ue];se===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(se=L.instanceColor));const pe={};pe.attribute=se,se&&se.data&&(pe.data=se.data),W[ue]=pe,Z++}c.attributes=W,c.attributesNum=Z,c.index=Q}function _(){const L=c.newAttributes;for(let O=0,z=L.length;O<z;O++)L[O]=0}function T(L){P(L,0)}function P(L,O){const z=c.newAttributes,Q=c.enabledAttributes,W=c.attributeDivisors;z[L]=1,Q[L]===0&&(n.enableVertexAttribArray(L),Q[L]=1),W[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),W[L]=O)}function C(){const L=c.newAttributes,O=c.enabledAttributes;for(let z=0,Q=O.length;z<Q;z++)O[z]!==L[z]&&(n.disableVertexAttribArray(z),O[z]=0)}function b(L,O,z,Q,W,$,Z){Z===!0?n.vertexAttribIPointer(L,O,z,W,$):n.vertexAttribPointer(L,O,z,Q,W,$)}function U(L,O,z,Q){if(i.isWebGL2===!1&&(L.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const W=Q.attributes,$=z.getAttributes(),Z=O.defaultAttributeValues;for(const ae in $){const ue=$[ae];if(ue.location>=0){let J=W[ae];if(J===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const se=J.normalized,pe=J.itemSize,ye=t.get(J);if(ye===void 0)continue;const Ee=ye.buffer,Be=ye.type,Ne=ye.bytesPerElement,Ce=i.isWebGL2===!0&&(Be===n.INT||Be===n.UNSIGNED_INT||J.gpuType===Fd);if(J.isInterleavedBufferAttribute){const Xe=J.data,X=Xe.stride,G=J.offset;if(Xe.isInstancedInterleavedBuffer){for(let ne=0;ne<ue.locationSize;ne++)P(ue.location+ne,Xe.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ne=0;ne<ue.locationSize;ne++)T(ue.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let ne=0;ne<ue.locationSize;ne++)b(ue.location+ne,pe/ue.locationSize,Be,se,X*Ne,(G+pe/ue.locationSize*ne)*Ne,Ce)}else{if(J.isInstancedBufferAttribute){for(let Xe=0;Xe<ue.locationSize;Xe++)P(ue.location+Xe,J.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Xe=0;Xe<ue.locationSize;Xe++)T(ue.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Xe=0;Xe<ue.locationSize;Xe++)b(ue.location+Xe,pe/ue.locationSize,Be,se,pe*Ne,pe/ue.locationSize*Xe*Ne,Ce)}}else if(Z!==void 0){const se=Z[ae];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(ue.location,se);break;case 3:n.vertexAttrib3fv(ue.location,se);break;case 4:n.vertexAttrib4fv(ue.location,se);break;default:n.vertexAttrib1fv(ue.location,se)}}}}C()}function E(){D();for(const L in a){const O=a[L];for(const z in O){const Q=O[z];for(const W in Q)g(Q[W].object),delete Q[W];delete O[z]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const z in O){const Q=O[z];for(const W in Q)g(Q[W].object),delete Q[W];delete O[z]}delete a[L.id]}function k(L){for(const O in a){const z=a[O];if(z[L.id]===void 0)continue;const Q=z[L.id];for(const W in Q)g(Q[W].object),delete Q[W];delete z[L.id]}}function D(){N(),h=!0,c!==l&&(c=l,x(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:T,disableUnusedAttributes:C}}function C1(n,e,t,i){const s=i.isWebGL2;let r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let x,g;if(s)x=n,g="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{x.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function L1(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,T=o||e.has("OES_texture_float"),P=_&&T,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:x,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:C}}function P1(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new di,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const x=d.length!==0||u||i!==0||s;return s=u,i=d.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,x){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:i,_=S*4;let T=m.clippingState||null;l.value=T,T=h(g,u,_,x);for(let P=0;P!==_;++P)T[P]=t[P];m.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,x,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=x+v*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,T=x;_!==v;++_,T+=4)o.copy(d[_]).applyMatrix4(S,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function N1(n){let e=new WeakMap;function t(o,a){return a===Ao?o.mapping=ss:a===Ro&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ao||a===Ro)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vg(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class su extends tu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ki=4,fh=[.125,.215,.35,.446,.526,.582],mi=20,Wa=new su,ph=new Je;let $a=null,Xa=0,Za=0;const ui=(1+Math.sqrt(5))/2,Zi=1/ui,mh=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,ui,Zi),new H(0,ui,-Zi),new H(Zi,0,ui),new H(-Zi,0,ui),new H(ui,Zi,0),new H(-ui,Zi,0)];class Do{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$a=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($a,Xa,Za),e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$a=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Hs,format:mn,colorSpace:Fn,depthBuffer:!1},s=gh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D1(r)),this._blurMaterial=U1(r,e,t)}return s}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,i,s){const a=new un(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ph),h.toneMapping=Kn,h.autoClear=!1;const x=new Qr({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new bn(new qs,x);let v=!1;const p=e.background;p?p.isColor&&(x.color.copy(p),e.background=null,v=!0):(x.color.copy(ph),v=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;Tr(s,S*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ss||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=mh[(s-1)%mh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new bn(this._lodPlanes[s],c),u=c.uniforms,x=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*x):2*Math.PI/(2*mi-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):mi;p>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mi}`);const m=[];let S=0;for(let b=0;b<mi;++b){const U=b/v,E=Math.exp(-U*U/2);m.push(E),b===0?S+=E:b<p&&(S+=2*E)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const T=this._sizeLods[s],P=3*T*(s>_-Ki?s-_+Ki:0),C=4*(this._cubeSize-T);Tr(t,P,C,3*T,2*T),l.setRenderTarget(t),l.render(d,Wa)}}function D1(n){const e=[],t=[],i=[];let s=n;const r=n-Ki+1+fh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ki?l=fh[o-n+Ki-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],x=6,g=6,v=3,p=2,m=1,S=new Float32Array(v*g*x),_=new Float32Array(p*g*x),T=new Float32Array(m*g*x);for(let C=0;C<x;C++){const b=C%3*2/3-1,U=C>2?0:-1,E=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];S.set(E,v*g*C),_.set(u,p*g*C);const A=[C,C,C,C,C,C];T.set(A,m*g*C)}const P=new gn;P.setAttribute("position",new En(S,v)),P.setAttribute("uv",new En(_,p)),P.setAttribute("faceIndex",new En(T,m)),e.push(P),s>Ki&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gh(n,e,t){const i=new bi(n,e,t);return i.texture.mapping=ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function U1(n,e,t){const i=new Float32Array(mi),s=new H(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function xh(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function vh(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ao||l===Ro,h=l===ss||l===rs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Do(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Do(n));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function O1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function F1(n,e,t,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}u.removeEventListener("dispose",o),delete s[u.id];const x=r.get(u);x&&(e.remove(x),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const x=d.morphAttributes;for(const g in x){const v=x[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(d){const u=[],x=d.index,g=d.attributes.position;let v=0;if(x!==null){const S=x.array;v=x.version;for(let _=0,T=S.length;_<T;_+=3){const P=S[_+0],C=S[_+1],b=S[_+2];u.push(P,C,C,b,b,P)}}else if(g!==void 0){const S=g.array;v=g.version;for(let _=0,T=S.length/3-1;_<T;_+=3){const P=_+0,C=_+1,b=_+2;u.push(P,C,C,b,b,P)}}else return;const p=new(Xd(u)?Jd:Qd)(u,1);p.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const x=d.index;x!==null&&u.version<x.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function k1(n,e,t,i){const s=i.isWebGL2;let r;function o(x){r=x}let a,l;function c(x){a=x.type,l=x.bytesPerElement}function h(x,g){n.drawElements(r,g,a,x*l),t.update(g,r,1)}function d(x,g,v){if(v===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,x*l,v),t.update(g,r,v)}function u(x,g,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<v;m++)this.render(x[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,x,0,v);let m=0;for(let S=0;S<v;S++)m+=g[S];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function B1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function z1(n,e){return n[0]-e[0]}function G1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function H1(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new Dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let L=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();const S=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let U=0;S===!0&&(U=1),_===!0&&(U=2),T===!0&&(U=3);let E=h.attributes.position.count*U,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const k=new Float32Array(E*A*4*g),D=new Yd(k,E,A,g);D.type=Zn,D.needsUpdate=!0;const N=U*4;for(let O=0;O<g;O++){const z=P[O],Q=C[O],W=b[O],$=E*A*4*O;for(let Z=0;Z<z.count;Z++){const ae=Z*N;S===!0&&(o.fromBufferAttribute(z,Z),k[$+ae+0]=o.x,k[$+ae+1]=o.y,k[$+ae+2]=o.z,k[$+ae+3]=0),_===!0&&(o.fromBufferAttribute(Q,Z),k[$+ae+4]=o.x,k[$+ae+5]=o.y,k[$+ae+6]=o.z,k[$+ae+7]=0),T===!0&&(o.fromBufferAttribute(W,Z),k[$+ae+8]=o.x,k[$+ae+9]=o.y,k[$+ae+10]=o.z,k[$+ae+11]=W.itemSize===4?o.w:1)}}v={count:g,texture:D,size:new Re(E,A)},r.set(h,v),h.addEventListener("dispose",L)}let p=0;for(let S=0;S<u.length;S++)p+=u[S];const m=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",m),d.getUniforms().setValue(n,"morphTargetInfluences",u),d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const x=u===void 0?0:u.length;let g=i[h.id];if(g===void 0||g.length!==x){g=[];for(let _=0;_<x;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<x;_++){const T=g[_];T[0]=_,T[1]=u[_]}g.sort(G1);for(let _=0;_<8;_++)_<x&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(z1);const v=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const T=a[_],P=T[0],C=T[1];P!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+_)!==v[P]&&h.setAttribute("morphTarget"+_,v[P]),p&&h.getAttribute("morphNormal"+_)!==p[P]&&h.setAttribute("morphNormal"+_,p[P]),s[_]=C,m+=C):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}const S=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function j1(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class ru extends Vt{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Mi,h!==Mi&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Mi&&(i=Xn),i===void 0&&h===as&&(i=_i),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const au=new Vt,ou=new ru(1,1);ou.compareFunction=$d;const lu=new Yd,cu=new Ag,hu=new nu,_h=[],Mh=[],yh=new Float32Array(16),Sh=new Float32Array(9),bh=new Float32Array(4);function ds(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=_h[s];if(r===void 0&&(r=new Float32Array(s),_h[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function aa(n,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function V1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function W1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function $1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function X1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Z1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;bh.set(i),n.uniformMatrix2fv(this.addr,!1,bh),At(t,i)}}function q1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Sh.set(i),n.uniformMatrix3fv(this.addr,!1,Sh),At(t,i)}}function Y1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),At(t,i)}}function K1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function J1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function tv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function rv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?ou:au;t.setTexture2D(e||r,s)}function av(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cu,s)}function ov(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hu,s)}function lv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lu,s)}function cv(n){switch(n){case 5126:return V1;case 35664:return W1;case 35665:return $1;case 35666:return X1;case 35674:return Z1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return K1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(n,e){n.uniform1fv(this.addr,e)}function dv(n,e){const t=ds(e,this.size,2);n.uniform2fv(this.addr,t)}function uv(n,e){const t=ds(e,this.size,3);n.uniform3fv(this.addr,t)}function fv(n,e){const t=ds(e,this.size,4);n.uniform4fv(this.addr,t)}function pv(n,e){const t=ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mv(n,e){const t=ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gv(n,e){const t=ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xv(n,e){n.uniform1iv(this.addr,e)}function vv(n,e){n.uniform2iv(this.addr,e)}function _v(n,e){n.uniform3iv(this.addr,e)}function Mv(n,e){n.uniform4iv(this.addr,e)}function yv(n,e){n.uniform1uiv(this.addr,e)}function Sv(n,e){n.uniform2uiv(this.addr,e)}function bv(n,e){n.uniform3uiv(this.addr,e)}function Ev(n,e){n.uniform4uiv(this.addr,e)}function wv(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||au,r[o])}function Tv(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cu,r[o])}function Av(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hu,r[o])}function Rv(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lu,r[o])}function Cv(n){switch(n){case 5126:return hv;case 35664:return dv;case 35665:return uv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return xv;case 35667:case 35671:return vv;case 35668:case 35672:return _v;case 35669:case 35673:return Mv;case 5125:return yv;case 36294:return Sv;case 36295:return bv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}class Lv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}}class Pv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cv(t.type)}}class Nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Eh(n,e){n.seq.push(e),n.map[e.id]=e}function Dv(n,e,t){const i=n.name,s=i.length;for(qa.lastIndex=0;;){const r=qa.exec(i),o=qa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Eh(t,c===void 0?new Lv(a,n,e):new Pv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Nv(a),Eh(t,d)),t=d}}}class kr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Dv(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function wh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Uv=37297;let Iv=0;function Ov(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Fv(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===qr&&t===Zr?i="LinearDisplayP3ToLinearSRGB":e===Zr&&t===qr&&(i="LinearSRGBToLinearDisplayP3"),n){case Fn:case na:return[i,"LinearTransferOETF"];case Pt:case Wo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Th(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ov(n.getShaderSource(e),o)}else return s}function kv(n,e){const t=Fv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Bv(n,e){let t;switch(e){case Ym:t="Linear";break;case Km:t="Reinhard";break;case Qm:t="OptimizedCineon";break;case Jm:t="ACESFilmic";break;case tg:t="AgX";break;case eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qi).join(`
`)}function Gv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qi).join(`
`)}function Hv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qi(n){return n!==""}function Ah(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(n){return n.replace(Vv,$v)}const Wv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $v(n,e){let t=Ye[e];if(t===void 0){const i=Wv.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uo(t)}const Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(Xv,Zv)}function Zv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Em?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function Yv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case rs:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function Qv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Id:e="ENVMAP_BLENDING_MULTIPLY";break;case Zm:e="ENVMAP_BLENDING_MIX";break;case qm:e="ENVMAP_BLENDING_ADD";break}return e}function Jv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function e_(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qv(t),c=Yv(t),h=Kv(t),d=Qv(t),u=Jv(t),x=t.isWebGL2?"":zv(t),g=Gv(t),v=Hv(r),p=s.createProgram();let m,S,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qi).join(`
`),m.length>0&&(m+=`
`),S=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qi).join(`
`),S.length>0&&(S+=`
`)):(m=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),S=[x,Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Kn?Bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),o=Uo(o),o=Ah(o,t),o=Rh(o,t),a=Uo(a),a=Ah(a,t),a=Rh(a,t),o=Ch(o),a=Ch(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const T=_+m+o,P=_+S+a,C=wh(s,s.VERTEX_SHADER,T),b=wh(s,s.FRAGMENT_SHADER,P);s.attachShader(p,C),s.attachShader(p,b),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function U(D){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(C).trim(),O=s.getShaderInfoLog(b).trim();let z=!0,Q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,C,b);else{const W=Th(s,C,"vertex"),$=Th(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+W+`
`+$)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||O==="")&&(Q=!1);Q&&(D.diagnostics={runnable:z,programLog:N,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:S}})}s.deleteShader(C),s.deleteShader(b),E=new kr(s,p),A=jv(s,p)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(p,Uv)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=b,this}let t_=0;class n_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new i_(e),t.set(e,i)),i}}class i_{constructor(e){this.id=t_++,this.code=e,this.usedTimes=0}}function s_(n,e,t,i,s,r,o){const a=new Xo,l=new n_,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures;let x=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,A,k,D,N){const L=D.fog,O=N.geometry,z=E.isMeshStandardMaterial?D.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),W=Q&&Q.mapping===ta?Q.image.height:null,$=g[E.type];E.precision!==null&&(x=s.getMaxPrecision(E.precision),x!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",x,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=Z!==void 0?Z.length:0;let ue=0;O.morphAttributes.position!==void 0&&(ue=1),O.morphAttributes.normal!==void 0&&(ue=2),O.morphAttributes.color!==void 0&&(ue=3);let J,se,pe,ye;if($){const wt=Sn[$];J=wt.vertexShader,se=wt.fragmentShader}else J=E.vertexShader,se=E.fragmentShader,l.update(E),pe=l.getVertexShaderID(E),ye=l.getFragmentShaderID(E);const Ee=n.getRenderTarget(),Be=N.isInstancedMesh===!0,Ne=N.isBatchedMesh===!0,Ce=!!E.map,Xe=!!E.matcap,X=!!Q,G=!!E.aoMap,ne=!!E.lightMap,oe=!!E.bumpMap,ce=!!E.normalMap,Ie=!!E.displacementMap,Ae=!!E.emissiveMap,y=!!E.metalnessMap,M=!!E.roughnessMap,I=E.anisotropy>0,j=E.clearcoat>0,ie=E.iridescence>0,re=E.sheen>0,xe=E.transmission>0,he=I&&!!E.anisotropyMap,ve=j&&!!E.clearcoatMap,Se=j&&!!E.clearcoatNormalMap,Oe=j&&!!E.clearcoatRoughnessMap,le=ie&&!!E.iridescenceMap,Qe=ie&&!!E.iridescenceThicknessMap,Ze=re&&!!E.sheenColorMap,Fe=re&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Me=!!E.specularColorMap,He=!!E.specularIntensityMap,it=xe&&!!E.transmissionMap,Ve=xe&&!!E.thicknessMap,je=!!E.gradientMap,de=!!E.alphaMap,F=E.alphaTest>0,fe=!!E.alphaHash,me=!!E.extensions,Pe=!!O.attributes.uv1,De=!!O.attributes.uv2,at=!!O.attributes.uv3;let st=Kn;return E.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:J,fragmentShader:se,defines:E.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:x,batching:Ne,instancing:Be,instancingColor:Be&&N.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Fn,map:Ce,matcap:Xe,envMap:X,envMapMode:X&&Q.mapping,envMapCubeUVHeight:W,aoMap:G,lightMap:ne,bumpMap:oe,normalMap:ce,displacementMap:u&&Ie,emissiveMap:Ae,normalMapObjectSpace:ce&&E.normalMapType===fg,normalMapTangentSpace:ce&&E.normalMapType===Wd,metalnessMap:y,roughnessMap:M,anisotropy:I,anisotropyMap:he,clearcoat:j,clearcoatMap:ve,clearcoatNormalMap:Se,clearcoatRoughnessMap:Oe,iridescence:ie,iridescenceMap:le,iridescenceThicknessMap:Qe,sheen:re,sheenColorMap:Ze,sheenRoughnessMap:Fe,specularMap:Le,specularColorMap:Me,specularIntensityMap:He,transmission:xe,transmissionMap:it,thicknessMap:Ve,gradientMap:je,opaque:E.transparent===!1&&E.blending===ts,alphaMap:de,alphaTest:F,alphaHash:fe,combine:E.combine,mapUv:Ce&&v(E.map.channel),aoMapUv:G&&v(E.aoMap.channel),lightMapUv:ne&&v(E.lightMap.channel),bumpMapUv:oe&&v(E.bumpMap.channel),normalMapUv:ce&&v(E.normalMap.channel),displacementMapUv:Ie&&v(E.displacementMap.channel),emissiveMapUv:Ae&&v(E.emissiveMap.channel),metalnessMapUv:y&&v(E.metalnessMap.channel),roughnessMapUv:M&&v(E.roughnessMap.channel),anisotropyMapUv:he&&v(E.anisotropyMap.channel),clearcoatMapUv:ve&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Se&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(E.sheenRoughnessMap.channel),specularMapUv:Le&&v(E.specularMap.channel),specularColorMapUv:Me&&v(E.specularColorMap.channel),specularIntensityMapUv:He&&v(E.specularIntensityMap.channel),transmissionMapUv:it&&v(E.transmissionMap.channel),thicknessMapUv:Ve&&v(E.thicknessMap.channel),alphaMapUv:de&&v(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ce||I),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:De,vertexUv3s:at,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Ce||de),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&E.map.isVideoTexture===!0&&ct.getTransfer(E.map.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fn,flipSided:E.side===jt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:me&&E.extensions.derivatives===!0,extensionFragDepth:me&&E.extensions.fragDepth===!0,extensionDrawBuffers:me&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)A.push(k),A.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(S(A,E),_(A,E),A.push(n.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function S(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function _(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function T(E){const A=g[E.type];let k;if(A){const D=Sn[A];k=zg.clone(D.uniforms)}else k=E.uniforms;return k}function P(E,A){let k;for(let D=0,N=c.length;D<N;D++){const L=c[D];if(L.cacheKey===A){k=L,++k.usedTimes;break}}return k===void 0&&(k=new e_(n,A,E,r),c.push(k)),k}function C(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:P,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:U}}function r_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function a_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ph(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,x,g,v,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:x,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=x,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=p),e++,m}function a(d,u,x,g,v,p){const m=o(d,u,x,g,v,p);x.transmission>0?i.push(m):x.transparent===!0?s.push(m):t.push(m)}function l(d,u,x,g,v,p){const m=o(d,u,x,g,v,p);x.transmission>0?i.unshift(m):x.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||a_),i.length>1&&i.sort(u||Ph),s.length>1&&s.sort(u||Ph)}function h(){for(let d=e,u=n.length;d<u;d++){const x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function o_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Nh,n.set(i,[o])):s>=r.length?(o=new Nh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function l_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Je};break;case"SpotLight":t={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function c_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let h_=0;function d_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function u_(n,e){const t=new l_,i=c_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new H);const r=new H,o=new yt,a=new yt;function l(h,d){let u=0,x=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let v=0,p=0,m=0,S=0,_=0,T=0,P=0,C=0,b=0,U=0,E=0;h.sort(d_);const A=d===!0?Math.PI:1;for(let D=0,N=h.length;D<N;D++){const L=h[D],O=L.color,z=L.intensity,Q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*z*A,x+=O.g*z*A,g+=O.b*z*A;else if(L.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(L.sh.coefficients[$],z);E++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const Z=L.shadow,ae=i.get(L);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,s.directionalShadow[v]=ae,s.directionalShadowMap[v]=W,s.directionalShadowMatrix[v]=L.shadow.matrix,T++}s.directional[v]=$,v++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(O).multiplyScalar(z*A),$.distance=Q,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,s.spot[m]=$;const Z=L.shadow;if(L.map&&(s.spotLightMap[b]=L.map,b++,Z.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[m]=Z.matrix,L.castShadow){const ae=i.get(L);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,s.spotShadow[m]=ae,s.spotShadowMap[m]=W,C++}m++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(O).multiplyScalar(z),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),s.rectArea[S]=$,S++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*A),$.distance=L.distance,$.decay=L.decay,L.castShadow){const Z=L.shadow,ae=i.get(L);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,ae.shadowCameraNear=Z.camera.near,ae.shadowCameraFar=Z.camera.far,s.pointShadow[p]=ae,s.pointShadowMap[p]=W,s.pointShadowMatrix[p]=L.shadow.matrix,P++}s.point[p]=$,p++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(z*A),$.groundColor.copy(L.groundColor).multiplyScalar(z*A),s.hemi[_]=$,_++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=x,s.ambient[2]=g;const k=s.hash;(k.directionalLength!==v||k.pointLength!==p||k.spotLength!==m||k.rectAreaLength!==S||k.hemiLength!==_||k.numDirectionalShadows!==T||k.numPointShadows!==P||k.numSpotShadows!==C||k.numSpotMaps!==b||k.numLightProbes!==E)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=S,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+b-U,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=E,k.directionalLength=v,k.pointLength=p,k.spotLength=m,k.rectAreaLength=S,k.hemiLength=_,k.numDirectionalShadows=T,k.numPointShadows=P,k.numSpotShadows=C,k.numSpotMaps=b,k.numLightProbes=E,s.version=h_++)}function c(h,d){let u=0,x=0,g=0,v=0,p=0;const m=d.matrixWorldInverse;for(let S=0,_=h.length;S<_;S++){const T=h[S];if(T.isDirectionalLight){const P=s.directional[u];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(m),u++}else if(T.isSpotLight){const P=s.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(m),g++}else if(T.isRectAreaLight){const P=s.rectArea[v];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(m),a.identity(),o.copy(T.matrixWorld),o.premultiply(m),a.extractRotation(o),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const P=s.point[x];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(m),x++}else if(T.isHemisphereLight){const P=s.hemi[p];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function Dh(n,e){const t=new u_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function f_(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Dh(n,e),t.set(r,[l])):o>=a.length?(l=new Dh(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class p_ extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m_ extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function v_(n,e,t){let i=new Zo;const s=new Re,r=new Re,o=new Dt,a=new p_({depthPacking:ug}),l=new m_,c={},h=t.maxTextureSize,d={[Jn]:jt,[jt]:Jn,[fn]:fn},u=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:g_,fragmentShader:x_}),x=u.clone();x.defines.HORIZONTAL_PASS=1;const g=new gn;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bn(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud;let m=this.type;this.render=function(C,b,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),A=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Yn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=m!==Un&&this.type===Un,L=m===Un&&this.type!==Un;for(let O=0,z=C.length;O<z;O++){const Q=C[O],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const $=W.getFrameExtents();if(s.multiply($),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,W.mapSize.y=r.y)),W.map===null||N===!0||L===!0){const ae=this.type!==Un?{minFilter:Ft,magFilter:Ft}:{};W.map!==null&&W.map.dispose(),W.map=new bi(s.x,s.y,ae),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Z=W.getViewportCount();for(let ae=0;ae<Z;ae++){const ue=W.getViewport(ae);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),D.viewport(o),W.updateMatrices(Q,ae),i=W.getFrustum(),T(b,U,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Un&&S(W,U),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(E,A,k)};function S(C,b){const U=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,x.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,x.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new bi(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,U,u,v,null),x.uniforms.shadow_pass.value=C.mapPass.texture,x.uniforms.resolution.value=C.mapSize,x.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,U,x,v,null)}function _(C,b,U,E){let A=null;const k=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)A=k;else if(A=U.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=A.uuid,N=b.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let O=L[N];O===void 0&&(O=A.clone(),L[N]=O,b.addEventListener("dispose",P)),A=O}if(A.visible=b.visible,A.wireframe=b.wireframe,E===Un?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,U.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=n.properties.get(A);D.light=U}return A}function T(C,b,U,E,A){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===Un)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const N=e.update(C),L=C.material;if(Array.isArray(L)){const O=N.groups;for(let z=0,Q=O.length;z<Q;z++){const W=O[z],$=L[W.materialIndex];if($&&$.visible){const Z=_(C,$,E,A);C.onBeforeShadow(n,C,b,U,N,Z,W),n.renderBufferDirect(U,null,N,Z,C,W),C.onAfterShadow(n,C,b,U,N,Z,W)}}}else if(L.visible){const O=_(C,L,E,A);C.onBeforeShadow(n,C,b,U,N,O,null),n.renderBufferDirect(U,null,N,O,C,null),C.onAfterShadow(n,C,b,U,N,O,null)}}const D=C.children;for(let N=0,L=D.length;N<L;N++)T(D[N],b,U,E,A)}function P(C){C.target.removeEventListener("dispose",P);for(const U in c){const E=c[U],A=C.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function __(n,e,t){const i=t.isWebGL2;function s(){let F=!1;const fe=new Dt;let me=null;const Pe=new Dt(0,0,0,0);return{setMask:function(De){me!==De&&!F&&(n.colorMask(De,De,De,De),me=De)},setLocked:function(De){F=De},setClear:function(De,at,st,St,wt){wt===!0&&(De*=St,at*=St,st*=St),fe.set(De,at,st,St),Pe.equals(fe)===!1&&(n.clearColor(De,at,st,St),Pe.copy(fe))},reset:function(){F=!1,me=null,Pe.set(-1,0,0,0)}}}function r(){let F=!1,fe=null,me=null,Pe=null;return{setTest:function(De){De?Ne(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(De){fe!==De&&!F&&(n.depthMask(De),fe=De)},setFunc:function(De){if(me!==De){switch(De){case Gm:n.depthFunc(n.NEVER);break;case Hm:n.depthFunc(n.ALWAYS);break;case jm:n.depthFunc(n.LESS);break;case $r:n.depthFunc(n.LEQUAL);break;case Vm:n.depthFunc(n.EQUAL);break;case Wm:n.depthFunc(n.GEQUAL);break;case $m:n.depthFunc(n.GREATER);break;case Xm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=De}},setLocked:function(De){F=De},setClear:function(De){Pe!==De&&(n.clearDepth(De),Pe=De)},reset:function(){F=!1,fe=null,me=null,Pe=null}}}function o(){let F=!1,fe=null,me=null,Pe=null,De=null,at=null,st=null,St=null,wt=null;return{setTest:function(ze){F||(ze?Ne(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(ze){fe!==ze&&!F&&(n.stencilMask(ze),fe=ze)},setFunc:function(ze,_t,rt){(me!==ze||Pe!==_t||De!==rt)&&(n.stencilFunc(ze,_t,rt),me=ze,Pe=_t,De=rt)},setOp:function(ze,_t,rt){(at!==ze||st!==_t||St!==rt)&&(n.stencilOp(ze,_t,rt),at=ze,st=_t,St=rt)},setLocked:function(ze){F=ze},setClear:function(ze){wt!==ze&&(n.clearStencil(ze),wt=ze)},reset:function(){F=!1,fe=null,me=null,Pe=null,De=null,at=null,st=null,St=null,wt=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let u={},x={},g=new WeakMap,v=[],p=null,m=!1,S=null,_=null,T=null,P=null,C=null,b=null,U=null,E=new Je(0,0,0),A=0,k=!1,D=null,N=null,L=null,O=null,z=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=$>=2);let ae=null,ue={};const J=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),pe=new Dt().fromArray(J),ye=new Dt().fromArray(se);function Ee(F,fe,me,Pe){const De=new Uint8Array(4),at=n.createTexture();n.bindTexture(F,at),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<me;st++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(fe,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(fe+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return at}const Be={};Be[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Be[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(n.DEPTH_TEST),l.setFunc($r),Ae(!1),y(mc),Ne(n.CULL_FACE),ce(Yn);function Ne(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ce(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Xe(F,fe){return x[F]!==fe?(n.bindFramebuffer(F,fe),x[F]=fe,i&&(F===n.DRAW_FRAMEBUFFER&&(x[n.FRAMEBUFFER]=fe),F===n.FRAMEBUFFER&&(x[n.DRAW_FRAMEBUFFER]=fe)),!0):!1}function X(F,fe){let me=v,Pe=!1;if(F)if(me=g.get(fe),me===void 0&&(me=[],g.set(fe,me)),F.isWebGLMultipleRenderTargets){const De=F.texture;if(me.length!==De.length||me[0]!==n.COLOR_ATTACHMENT0){for(let at=0,st=De.length;at<st;at++)me[at]=n.COLOR_ATTACHMENT0+at;me.length=De.length,Pe=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,Pe=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,Pe=!0);Pe&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function G(F){return p!==F?(n.useProgram(F),p=F,!0):!1}const ne={[pi]:n.FUNC_ADD,[Tm]:n.FUNC_SUBTRACT,[Am]:n.FUNC_REVERSE_SUBTRACT};if(i)ne[_c]=n.MIN,ne[Mc]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(ne[_c]=F.MIN_EXT,ne[Mc]=F.MAX_EXT)}const oe={[Rm]:n.ZERO,[Cm]:n.ONE,[Lm]:n.SRC_COLOR,[wo]:n.SRC_ALPHA,[Om]:n.SRC_ALPHA_SATURATE,[Um]:n.DST_COLOR,[Nm]:n.DST_ALPHA,[Pm]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[Im]:n.ONE_MINUS_DST_COLOR,[Dm]:n.ONE_MINUS_DST_ALPHA,[Fm]:n.CONSTANT_COLOR,[km]:n.ONE_MINUS_CONSTANT_COLOR,[Bm]:n.CONSTANT_ALPHA,[zm]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(F,fe,me,Pe,De,at,st,St,wt,ze){if(F===Yn){m===!0&&(Ce(n.BLEND),m=!1);return}if(m===!1&&(Ne(n.BLEND),m=!0),F!==wm){if(F!==S||ze!==k){if((_!==pi||C!==pi)&&(n.blendEquation(n.FUNC_ADD),_=pi,C=pi),ze)switch(F){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,P=null,b=null,U=null,E.set(0,0,0),A=0,S=F,k=ze}return}De=De||fe,at=at||me,st=st||Pe,(fe!==_||De!==C)&&(n.blendEquationSeparate(ne[fe],ne[De]),_=fe,C=De),(me!==T||Pe!==P||at!==b||st!==U)&&(n.blendFuncSeparate(oe[me],oe[Pe],oe[at],oe[st]),T=me,P=Pe,b=at,U=st),(St.equals(E)===!1||wt!==A)&&(n.blendColor(St.r,St.g,St.b,wt),E.copy(St),A=wt),S=F,k=!1}function Ie(F,fe){F.side===fn?Ce(n.CULL_FACE):Ne(n.CULL_FACE);let me=F.side===jt;fe&&(me=!me),Ae(me),F.blending===ts&&F.transparent===!1?ce(Yn):ce(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Pe=F.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),I(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(F){D!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),D=F)}function y(F){F!==Sm?(Ne(n.CULL_FACE),F!==N&&(F===mc?n.cullFace(n.BACK):F===bm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),N=F}function M(F){F!==L&&(W&&n.lineWidth(F),L=F)}function I(F,fe,me){F?(Ne(n.POLYGON_OFFSET_FILL),(O!==fe||z!==me)&&(n.polygonOffset(fe,me),O=fe,z=me)):Ce(n.POLYGON_OFFSET_FILL)}function j(F){F?Ne(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function ie(F){F===void 0&&(F=n.TEXTURE0+Q-1),ae!==F&&(n.activeTexture(F),ae=F)}function re(F,fe,me){me===void 0&&(ae===null?me=n.TEXTURE0+Q-1:me=ae);let Pe=ue[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},ue[me]=Pe),(Pe.type!==F||Pe.texture!==fe)&&(ae!==me&&(n.activeTexture(me),ae=me),n.bindTexture(F,fe||Be[F]),Pe.type=F,Pe.texture=fe)}function xe(){const F=ue[ae];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(F){pe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),pe.copy(F))}function it(F){ye.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ye.copy(F))}function Ve(F,fe){let me=d.get(fe);me===void 0&&(me=new WeakMap,d.set(fe,me));let Pe=me.get(F);Pe===void 0&&(Pe=n.getUniformBlockIndex(fe,F.name),me.set(F,Pe))}function je(F,fe){const Pe=d.get(fe).get(F);h.get(fe)!==Pe&&(n.uniformBlockBinding(fe,Pe,F.__bindingPointIndex),h.set(fe,Pe))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,ue={},x={},g=new WeakMap,v=[],p=null,m=!1,S=null,_=null,T=null,P=null,C=null,b=null,U=null,E=new Je(0,0,0),A=0,k=!1,D=null,N=null,L=null,O=null,z=null,pe.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:Ce,bindFramebuffer:Xe,drawBuffers:X,useProgram:G,setBlending:ce,setMaterial:Ie,setFlipSided:Ae,setCullFace:y,setLineWidth:M,setPolygonOffset:I,setScissorTest:j,activeTexture:ie,bindTexture:re,unbindTexture:xe,compressedTexImage2D:he,compressedTexImage3D:ve,texImage2D:Le,texImage3D:Me,updateUBOMapping:Ve,uniformBlockBinding:je,texStorage2D:Ze,texStorage3D:Fe,texSubImage2D:Se,texSubImage3D:Oe,compressedTexSubImage2D:le,compressedTexSubImage3D:Qe,scissor:He,viewport:it,reset:de}}function M_(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,M){return x?new OffscreenCanvas(y,M):Kr("canvas")}function v(y,M,I,j){let ie=1;if((y.width>j||y.height>j)&&(ie=j/Math.max(y.width,y.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const re=M?No:Math.floor,xe=re(ie*y.width),he=re(ie*y.height);d===void 0&&(d=g(xe,he));const ve=I?g(xe,he):d;return ve.width=xe,ve.height=he,ve.getContext("2d").drawImage(y,0,0,xe,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+xe+"x"+he+")."),ve}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Yc(y.width)&&Yc(y.height)}function m(y){return a?!1:y.wrapS!==pn||y.wrapT!==pn||y.minFilter!==Ft&&y.minFilter!==tn}function S(y,M){return y.generateMipmaps&&M&&y.minFilter!==Ft&&y.minFilter!==tn}function _(y){n.generateMipmap(y)}function T(y,M,I,j,ie=!1){if(a===!1)return M;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let re=M;if(M===n.RED&&(I===n.FLOAT&&(re=n.R32F),I===n.HALF_FLOAT&&(re=n.R16F),I===n.UNSIGNED_BYTE&&(re=n.R8)),M===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(re=n.R8UI),I===n.UNSIGNED_SHORT&&(re=n.R16UI),I===n.UNSIGNED_INT&&(re=n.R32UI),I===n.BYTE&&(re=n.R8I),I===n.SHORT&&(re=n.R16I),I===n.INT&&(re=n.R32I)),M===n.RG&&(I===n.FLOAT&&(re=n.RG32F),I===n.HALF_FLOAT&&(re=n.RG16F),I===n.UNSIGNED_BYTE&&(re=n.RG8)),M===n.RGBA){const xe=ie?Xr:ct.getTransfer(j);I===n.FLOAT&&(re=n.RGBA32F),I===n.HALF_FLOAT&&(re=n.RGBA16F),I===n.UNSIGNED_BYTE&&(re=xe===ut?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function P(y,M,I){return S(y,I)===!0||y.isFramebufferTexture&&y.minFilter!==Ft&&y.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?M.mipmaps.length:1}function C(y){return y===Ft||y===yc||y===ya?n.NEAREST:n.LINEAR}function b(y){const M=y.target;M.removeEventListener("dispose",b),E(M),M.isVideoTexture&&h.delete(M)}function U(y){const M=y.target;M.removeEventListener("dispose",U),k(M)}function E(y){const M=i.get(y);if(M.__webglInit===void 0)return;const I=y.source,j=u.get(I);if(j){const ie=j[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(y),Object.keys(j).length===0&&u.delete(I)}i.remove(y)}function A(y){const M=i.get(y);n.deleteTexture(M.__webglTexture);const I=y.source,j=u.get(I);delete j[M.__cacheKey],o.memory.textures--}function k(y){const M=y.texture,I=i.get(y),j=i.get(M);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(I.__webglFramebuffer[ie]))for(let re=0;re<I.__webglFramebuffer[ie].length;re++)n.deleteFramebuffer(I.__webglFramebuffer[ie][re]);else n.deleteFramebuffer(I.__webglFramebuffer[ie]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[ie])}else{if(Array.isArray(I.__webglFramebuffer))for(let ie=0;ie<I.__webglFramebuffer.length;ie++)n.deleteFramebuffer(I.__webglFramebuffer[ie]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ie=0;ie<I.__webglColorRenderbuffer.length;ie++)I.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[ie]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ie=0,re=M.length;ie<re;ie++){const xe=i.get(M[ie]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(M[ie])}i.remove(M),i.remove(y)}let D=0;function N(){D=0}function L(){const y=D;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),D+=1,y}function O(y){const M=[];return M.push(y.wrapS),M.push(y.wrapT),M.push(y.wrapR||0),M.push(y.magFilter),M.push(y.minFilter),M.push(y.anisotropy),M.push(y.internalFormat),M.push(y.format),M.push(y.type),M.push(y.generateMipmaps),M.push(y.premultiplyAlpha),M.push(y.flipY),M.push(y.unpackAlignment),M.push(y.colorSpace),M.join()}function z(y,M){const I=i.get(y);if(y.isVideoTexture&&Ie(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const j=y.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(I,y,M);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+M)}function Q(y,M){const I=i.get(y);if(y.version>0&&I.__version!==y.version){pe(I,y,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+M)}function W(y,M){const I=i.get(y);if(y.version>0&&I.__version!==y.version){pe(I,y,M);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+M)}function $(y,M){const I=i.get(y);if(y.version>0&&I.__version!==y.version){ye(I,y,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+M)}const Z={[zs]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[Co]:n.MIRRORED_REPEAT},ae={[Ft]:n.NEAREST,[yc]:n.NEAREST_MIPMAP_NEAREST,[ya]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[ng]:n.LINEAR_MIPMAP_NEAREST,[Gs]:n.LINEAR_MIPMAP_LINEAR},ue={[pg]:n.NEVER,[Mg]:n.ALWAYS,[mg]:n.LESS,[$d]:n.LEQUAL,[gg]:n.EQUAL,[_g]:n.GEQUAL,[xg]:n.GREATER,[vg]:n.NOTEQUAL};function J(y,M,I){if(I?(n.texParameteri(y,n.TEXTURE_WRAP_S,Z[M.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,Z[M.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,Z[M.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ae[M.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ae[M.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==pn||M.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,C(M.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==Ft&&M.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ft||M.minFilter!==ya&&M.minFilter!==Gs||M.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Hs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(y,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function se(y,M){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,M.addEventListener("dispose",b));const j=M.source;let ie=u.get(j);ie===void 0&&(ie={},u.set(j,ie));const re=O(M);if(re!==y.__cacheKey){ie[re]===void 0&&(ie[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ie[re].usedTimes++;const xe=ie[y.__cacheKey];xe!==void 0&&(ie[y.__cacheKey].usedTimes--,xe.usedTimes===0&&A(M)),y.__cacheKey=re,y.__webglTexture=ie[re].texture}return I}function pe(y,M,I){let j=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=n.TEXTURE_3D);const ie=se(y,M),re=M.source;t.bindTexture(j,y.__webglTexture,n.TEXTURE0+I);const xe=i.get(re);if(re.version!==xe.__version||ie===!0){t.activeTexture(n.TEXTURE0+I);const he=ct.getPrimaries(ct.workingColorSpace),ve=M.colorSpace===sn?null:ct.getPrimaries(M.colorSpace),Se=M.colorSpace===sn||he===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Oe=m(M)&&p(M.image)===!1;let le=v(M.image,Oe,!1,s.maxTextureSize);le=Ae(M,le);const Qe=p(le)||a,Ze=r.convert(M.format,M.colorSpace);let Fe=r.convert(M.type),Le=T(M.internalFormat,Ze,Fe,M.colorSpace,M.isVideoTexture);J(j,M,Qe);let Me;const He=M.mipmaps,it=a&&M.isVideoTexture!==!0&&Le!==jd,Ve=xe.__version===void 0||ie===!0,je=P(M,le,Qe);if(M.isDepthTexture)Le=n.DEPTH_COMPONENT,a?M.type===Zn?Le=n.DEPTH_COMPONENT32F:M.type===Xn?Le=n.DEPTH_COMPONENT24:M.type===_i?Le=n.DEPTH24_STENCIL8:Le=n.DEPTH_COMPONENT16:M.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Mi&&Le===n.DEPTH_COMPONENT&&M.type!==Vo&&M.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Xn,Fe=r.convert(M.type)),M.format===as&&Le===n.DEPTH_COMPONENT&&(Le=n.DEPTH_STENCIL,M.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=_i,Fe=r.convert(M.type))),Ve&&(it?t.texStorage2D(n.TEXTURE_2D,1,Le,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Le,le.width,le.height,0,Ze,Fe,null));else if(M.isDataTexture)if(He.length>0&&Qe){it&&Ve&&t.texStorage2D(n.TEXTURE_2D,je,Le,He[0].width,He[0].height);for(let de=0,F=He.length;de<F;de++)Me=He[de],it?t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Ze,Fe,Me.data):t.texImage2D(n.TEXTURE_2D,de,Le,Me.width,Me.height,0,Ze,Fe,Me.data);M.generateMipmaps=!1}else it?(Ve&&t.texStorage2D(n.TEXTURE_2D,je,Le,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Ze,Fe,le.data)):t.texImage2D(n.TEXTURE_2D,0,Le,le.width,le.height,0,Ze,Fe,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Le,He[0].width,He[0].height,le.depth);for(let de=0,F=He.length;de<F;de++)Me=He[de],M.format!==mn?Ze!==null?it?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,le.depth,Ze,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Le,Me.width,Me.height,le.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,le.depth,Ze,Fe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Le,Me.width,Me.height,le.depth,0,Ze,Fe,Me.data)}else{it&&Ve&&t.texStorage2D(n.TEXTURE_2D,je,Le,He[0].width,He[0].height);for(let de=0,F=He.length;de<F;de++)Me=He[de],M.format!==mn?Ze!==null?it?t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Ze,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Le,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Ze,Fe,Me.data):t.texImage2D(n.TEXTURE_2D,de,Le,Me.width,Me.height,0,Ze,Fe,Me.data)}else if(M.isDataArrayTexture)it?(Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Le,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ze,Fe,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,Ze,Fe,le.data);else if(M.isData3DTexture)it?(Ve&&t.texStorage3D(n.TEXTURE_3D,je,Le,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ze,Fe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,Ze,Fe,le.data);else if(M.isFramebufferTexture){if(Ve)if(it)t.texStorage2D(n.TEXTURE_2D,je,Le,le.width,le.height);else{let de=le.width,F=le.height;for(let fe=0;fe<je;fe++)t.texImage2D(n.TEXTURE_2D,fe,Le,de,F,0,Ze,Fe,null),de>>=1,F>>=1}}else if(He.length>0&&Qe){it&&Ve&&t.texStorage2D(n.TEXTURE_2D,je,Le,He[0].width,He[0].height);for(let de=0,F=He.length;de<F;de++)Me=He[de],it?t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ze,Fe,Me):t.texImage2D(n.TEXTURE_2D,de,Le,Ze,Fe,Me);M.generateMipmaps=!1}else it?(Ve&&t.texStorage2D(n.TEXTURE_2D,je,Le,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ze,Fe,le)):t.texImage2D(n.TEXTURE_2D,0,Le,Ze,Fe,le);S(M,Qe)&&_(j),xe.__version=re.version,M.onUpdate&&M.onUpdate(M)}y.__version=M.version}function ye(y,M,I){if(M.image.length!==6)return;const j=se(y,M),ie=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const re=i.get(ie);if(ie.version!==re.__version||j===!0){t.activeTexture(n.TEXTURE0+I);const xe=ct.getPrimaries(ct.workingColorSpace),he=M.colorSpace===sn?null:ct.getPrimaries(M.colorSpace),ve=M.colorSpace===sn||xe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,Oe=M.image[0]&&M.image[0].isDataTexture,le=[];for(let de=0;de<6;de++)!Se&&!Oe?le[de]=v(M.image[de],!1,!0,s.maxCubemapSize):le[de]=Oe?M.image[de].image:M.image[de],le[de]=Ae(M,le[de]);const Qe=le[0],Ze=p(Qe)||a,Fe=r.convert(M.format,M.colorSpace),Le=r.convert(M.type),Me=T(M.internalFormat,Fe,Le,M.colorSpace),He=a&&M.isVideoTexture!==!0,it=re.__version===void 0||j===!0;let Ve=P(M,Qe,Ze);J(n.TEXTURE_CUBE_MAP,M,Ze);let je;if(Se){He&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,Me,Qe.width,Qe.height);for(let de=0;de<6;de++){je=le[de].mipmaps;for(let F=0;F<je.length;F++){const fe=je[F];M.format!==mn?Fe!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,0,0,fe.width,fe.height,Fe,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,Me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,0,0,fe.width,fe.height,Fe,Le,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,Me,fe.width,fe.height,0,Fe,Le,fe.data)}}}else{je=M.mipmaps,He&&it&&(je.length>0&&Ve++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,Me,le[0].width,le[0].height));for(let de=0;de<6;de++)if(Oe){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,le[de].width,le[de].height,Fe,Le,le[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Me,le[de].width,le[de].height,0,Fe,Le,le[de].data);for(let F=0;F<je.length;F++){const me=je[F].image[de].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,0,0,me.width,me.height,Fe,Le,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,Me,me.width,me.height,0,Fe,Le,me.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe,Le,le[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Me,Fe,Le,le[de]);for(let F=0;F<je.length;F++){const fe=je[F];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,0,0,Fe,Le,fe.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,Me,Fe,Le,fe.image[de])}}}S(M,Ze)&&_(n.TEXTURE_CUBE_MAP),re.__version=ie.version,M.onUpdate&&M.onUpdate(M)}y.__version=M.version}function Ee(y,M,I,j,ie,re){const xe=r.convert(I.format,I.colorSpace),he=r.convert(I.type),ve=T(I.internalFormat,xe,he,I.colorSpace);if(!i.get(M).__hasExternalTextures){const Oe=Math.max(1,M.width>>re),le=Math.max(1,M.height>>re);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,ve,Oe,le,M.depth,0,xe,he,null):t.texImage2D(ie,re,ve,Oe,le,0,xe,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ce(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ie,i.get(I).__webglTexture,0,oe(M)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ie,i.get(I).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(y,M,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),M.depthBuffer&&!M.stencilBuffer){let j=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(I||ce(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Zn?j=n.DEPTH_COMPONENT32F:ie.type===Xn&&(j=n.DEPTH_COMPONENT24));const re=oe(M);ce(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,j,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,j,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(M.depthBuffer&&M.stencilBuffer){const j=oe(M);I&&ce(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,M.width,M.height):ce(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const j=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0;ie<j.length;ie++){const re=j[ie],xe=r.convert(re.format,re.colorSpace),he=r.convert(re.type),ve=T(re.internalFormat,xe,he,re.colorSpace),Se=oe(M);I&&ce(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ve,M.width,M.height):ce(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(y,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const j=i.get(M.depthTexture).__webglTexture,ie=oe(M);if(M.depthTexture.format===Mi)ce(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(M.depthTexture.format===as)ce(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ce(y){const M=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!M.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,y)}else if(I){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=n.createRenderbuffer(),Be(M.__webglDepthbuffer[j],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Be(M.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(y,M,I){const j=i.get(y);M!==void 0&&Ee(j.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ce(y)}function X(y){const M=y.texture,I=i.get(y),j=i.get(M);y.addEventListener("dispose",U),y.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=M.version,o.memory.textures++);const ie=y.isWebGLCubeRenderTarget===!0,re=y.isWebGLMultipleRenderTargets===!0,xe=p(y)||a;if(ie){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let ve=0;ve<M.mipmaps.length;ve++)I.__webglFramebuffer[he][ve]=n.createFramebuffer()}else I.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)I.__webglFramebuffer[he]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(re)if(s.drawBuffers){const he=y.texture;for(let ve=0,Se=he.length;ve<Se;ve++){const Oe=i.get(he[ve]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&ce(y)===!1){const he=re?M:[M];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ve=0;ve<he.length;ve++){const Se=he[ve];I.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ve]);const Oe=r.convert(Se.format,Se.colorSpace),le=r.convert(Se.type),Qe=T(Se.internalFormat,Oe,le,Se.colorSpace,y.isXRRenderTarget===!0),Ze=oe(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Qe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,I.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),J(n.TEXTURE_CUBE_MAP,M,xe);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Ee(I.__webglFramebuffer[he][ve],y,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else Ee(I.__webglFramebuffer[he],y,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);S(M,xe)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const he=y.texture;for(let ve=0,Se=he.length;ve<Se;ve++){const Oe=he[ve],le=i.get(Oe);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),J(n.TEXTURE_2D,Oe,xe),Ee(I.__webglFramebuffer,y,Oe,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),S(Oe,xe)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?he=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,j.__webglTexture),J(he,M,xe),a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Ee(I.__webglFramebuffer[ve],y,M,n.COLOR_ATTACHMENT0,he,ve);else Ee(I.__webglFramebuffer,y,M,n.COLOR_ATTACHMENT0,he,0);S(M,xe)&&_(he),t.unbindTexture()}y.depthBuffer&&Ce(y)}function G(y){const M=p(y)||a,I=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let j=0,ie=I.length;j<ie;j++){const re=I[j];if(S(re,M)){const xe=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(re).__webglTexture;t.bindTexture(xe,he),_(xe),t.unbindTexture()}}}function ne(y){if(a&&y.samples>0&&ce(y)===!1){const M=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],I=y.width,j=y.height;let ie=n.COLOR_BUFFER_BIT;const re=[],xe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(y),ve=y.isWebGLMultipleRenderTargets===!0;if(ve)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){re.push(n.COLOR_ATTACHMENT0+Se),y.depthBuffer&&re.push(xe);const Oe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Oe===!1&&(y.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Se]),Oe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),ve){const le=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,I,j,0,0,I,j,ie,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,he.__webglColorRenderbuffer[Se]);const Oe=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function oe(y){return Math.min(s.maxSamples,y.samples)}function ce(y){const M=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(y){const M=o.render.frame;h.get(y)!==M&&(h.set(y,M),y.update())}function Ae(y,M){const I=y.colorSpace,j=y.format,ie=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Lo||I!==Fn&&I!==sn&&(ct.getTransfer(I)===ut?a===!1?e.has("EXT_sRGB")===!0&&j===mn?(y.format=Lo,y.minFilter=tn,y.generateMipmaps=!1):M=Zd.sRGBToLinear(M):(j!==mn||ie!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),M}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=Q,this.setTexture3D=W,this.setTextureCube=$,this.rebindTextures=Xe,this.setupRenderTarget=X,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ce}function y_(n,e,t){const i=t.isWebGL2;function s(r,o=sn){let a;const l=ct.getTransfer(o);if(r===Qn)return n.UNSIGNED_BYTE;if(r===kd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Bd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===ig)return n.BYTE;if(r===sg)return n.SHORT;if(r===Vo)return n.UNSIGNED_SHORT;if(r===Fd)return n.INT;if(r===Xn)return n.UNSIGNED_INT;if(r===Zn)return n.FLOAT;if(r===Hs)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===rg)return n.ALPHA;if(r===mn)return n.RGBA;if(r===ag)return n.LUMINANCE;if(r===og)return n.LUMINANCE_ALPHA;if(r===Mi)return n.DEPTH_COMPONENT;if(r===as)return n.DEPTH_STENCIL;if(r===Lo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===lg)return n.RED;if(r===zd)return n.RED_INTEGER;if(r===cg)return n.RG;if(r===Gd)return n.RG_INTEGER;if(r===Hd)return n.RGBA_INTEGER;if(r===Sa||r===ba||r===Ea||r===wa)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Sa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Sa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sc||r===bc||r===Ec||r===wc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Sc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ec)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tc||r===Ac)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Tc)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ac)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rc||r===Cc||r===Lc||r===Pc||r===Nc||r===Dc||r===Uc||r===Ic||r===Oc||r===Fc||r===kc||r===Bc||r===zc||r===Gc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Rc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ic)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Oc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ta||r===Hc||r===jc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ta)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hg||r===Vc||r===Wc||r===$c)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ta)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Vc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$c)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_i?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class S_ extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ar extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b_={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),x=.02,g=.005;c.inputState.pinching&&u>x+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=x-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class E_ extends cs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,x=null,g=null;const v=t.getContextAttributes();let p=null,m=null;const S=[],_=[],T=new Re;let P=null;const C=new un;C.layers.enable(1),C.viewport=new Dt;const b=new un;b.layers.enable(2),b.viewport=new Dt;const U=[C,b],E=new S_;E.layers.enable(1),E.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=S[J];return se===void 0&&(se=new Ya,S[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=S[J];return se===void 0&&(se=new Ya,S[J]=se),se.getGripSpace()},this.getHand=function(J){let se=S[J];return se===void 0&&(se=new Ya,S[J]=se),se.getHandSpace()};function D(J){const se=_.indexOf(J.inputSource);if(se===-1)return;const pe=S[se];pe!==void 0&&(pe.update(J.inputSource,J.frame,c||o),pe.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",L);for(let J=0;J<S.length;J++){const se=_[J];se!==null&&(_[J]=null,S[J].disconnect(se))}A=null,k=null,e.setRenderTarget(p),x=null,u=null,d=null,s=null,m=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:x},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),m=new bi(x.framebufferWidth,x.framebufferHeight,{format:mn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let se=null,pe=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?as:Mi,pe=v.stencil?_i:Xn);const Ee={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ee),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),m=new bi(u.textureWidth,u.textureHeight,{format:mn,type:Qn,depthTexture:new ru(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Be=e.properties.get(m);Be.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(J){for(let se=0;se<J.removed.length;se++){const pe=J.removed[se],ye=_.indexOf(pe);ye>=0&&(_[ye]=null,S[ye].disconnect(pe))}for(let se=0;se<J.added.length;se++){const pe=J.added[se];let ye=_.indexOf(pe);if(ye===-1){for(let Be=0;Be<S.length;Be++)if(Be>=_.length){_.push(pe),ye=Be;break}else if(_[Be]===null){_[Be]=pe,ye=Be;break}if(ye===-1)break}const Ee=S[ye];Ee&&Ee.connect(pe)}}const O=new H,z=new H;function Q(J,se,pe){O.setFromMatrixPosition(se.matrixWorld),z.setFromMatrixPosition(pe.matrixWorld);const ye=O.distanceTo(z),Ee=se.projectionMatrix.elements,Be=pe.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),Ce=Ee[14]/(Ee[10]+1),Xe=(Ee[9]+1)/Ee[5],X=(Ee[9]-1)/Ee[5],G=(Ee[8]-1)/Ee[0],ne=(Be[8]+1)/Be[0],oe=Ne*G,ce=Ne*ne,Ie=ye/(-G+ne),Ae=Ie*-G;se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ae),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const y=Ne+Ie,M=Ce+Ie,I=oe-Ae,j=ce+(ye-Ae),ie=Xe*Ce/M*y,re=X*Ce/M*y;J.projectionMatrix.makePerspective(I,j,ie,re,y,M),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function W(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;E.near=b.near=C.near=J.near,E.far=b.far=C.far=J.far,(A!==E.near||k!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,k=E.far);const se=J.parent,pe=E.cameras;W(E,se);for(let ye=0;ye<pe.length;ye++)W(pe[ye],se);pe.length===2?Q(E,C,b):E.projectionMatrix.copy(C.projectionMatrix),$(J,E,se)};function $(J,se,pe){pe===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(pe.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Po*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&x===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)};let Z=null;function ae(J,se){if(h=se.getViewerPose(c||o),g=se,h!==null){const pe=h.views;x!==null&&(e.setRenderTargetFramebuffer(m,x.framebuffer),e.setRenderTarget(m));let ye=!1;pe.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let Ee=0;Ee<pe.length;Ee++){const Be=pe[Ee];let Ne=null;if(x!==null)Ne=x.getViewport(Be);else{const Xe=d.getViewSubImage(u,Be);Ne=Xe.viewport,Ee===0&&(e.setRenderTargetTextures(m,Xe.colorTexture,u.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(m))}let Ce=U[Ee];Ce===void 0&&(Ce=new un,Ce.layers.enable(Ee),Ce.viewport=new Dt,U[Ee]=Ce),Ce.matrix.fromArray(Be.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Be.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ee===0&&(E.matrix.copy(Ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(Ce)}}for(let pe=0;pe<S.length;pe++){const ye=_[pe],Ee=S[pe];ye!==null&&Ee!==void 0&&Ee.update(ye,se,c||o)}Z&&Z(J,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const ue=new iu;ue.setAnimationLoop(ae),this.setAnimationLoop=function(J){Z=J},this.dispose=function(){}}}function w_(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,eu(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,_,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&x(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function x(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function T_(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,_){const T=_.program;i.uniformBlockBinding(S,T)}function c(S,_){let T=s[S.id];T===void 0&&(g(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",p));const P=_.program;i.updateUBOMapping(S,P);const C=e.render.frame;r[S.id]!==C&&(u(S),r[S.id]=C)}function h(S){const _=d();S.__bindingPointIndex=_;const T=n.createBuffer(),P=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,T),T}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const _=s[S.id],T=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,b=T.length;C<b;C++){const U=Array.isArray(T[C])?T[C]:[T[C]];for(let E=0,A=U.length;E<A;E++){const k=U[E];if(x(k,C,E,P)===!0){const D=k.__offset,N=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let O=0;O<N.length;O++){const z=N[O],Q=v(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,D+L,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,L),L+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(S,_,T,P){const C=S.value,b=_+"_"+T;if(P[b]===void 0)return typeof C=="number"||typeof C=="boolean"?P[b]=C:P[b]=C.clone(),!0;{const U=P[b];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return P[b]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(S){const _=S.uniforms;let T=0;const P=16;for(let b=0,U=_.length;b<U;b++){const E=Array.isArray(_[b])?_[b]:[_[b]];for(let A=0,k=E.length;A<k;A++){const D=E[A],N=Array.isArray(D.value)?D.value:[D.value];for(let L=0,O=N.length;L<O;L++){const z=N[L],Q=v(z),W=T%P;W!==0&&P-W<Q.boundary&&(T+=P-W),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=Q.storage}}}const C=T%P;return C>0&&(T+=P-C),S.__size=T,S.__cache={},this}function v(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function p(S){const _=S.target;_.removeEventListener("dispose",p);const T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class A_{constructor(e={}){const{canvas:t=Sg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;const x=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;const _=this;let T=!1,P=0,C=0,b=null,U=-1,E=null;const A=new Dt,k=new Dt;let D=null;const N=new Je(0);let L=0,O=t.width,z=t.height,Q=1,W=null,$=null;const Z=new Dt(0,0,O,z),ae=new Dt(0,0,O,z);let ue=!1;const J=new Zo;let se=!1,pe=!1,ye=null;const Ee=new yt,Be=new Re,Ne=new H,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return b===null?Q:1}let X=i;function G(R,B){for(let Y=0;Y<R.length;Y++){const K=R[Y],q=t.getContext(K,B);if(q!==null)return q}return null}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jo}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",fe,!1),X===null){const B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),X=G(B,R),X===null)throw G(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ne,oe,ce,Ie,Ae,y,M,I,j,ie,re,xe,he,ve,Se,Oe,le,Qe,Ze,Fe,Le,Me,He,it;function Ve(){ne=new O1(X),oe=new L1(X,ne,e),ne.init(oe),Me=new y_(X,ne,oe),ce=new __(X,ne,oe),Ie=new B1(X),Ae=new r_,y=new M_(X,ne,ce,Ae,oe,Me,Ie),M=new N1(_),I=new I1(_),j=new Xg(X,oe),He=new R1(X,ne,j,oe),ie=new F1(X,j,Ie,He),re=new j1(X,ie,j,Ie),Ze=new H1(X,oe,y),Oe=new P1(Ae),xe=new s_(_,M,I,ne,oe,He,Oe),he=new w_(_,Ae),ve=new o_,Se=new f_(ne,oe),Qe=new A1(_,M,I,ce,re,u,l),le=new v_(_,re,oe),it=new T_(X,Ie,oe,ce),Fe=new C1(X,ne,Ie,oe),Le=new k1(X,ne,Ie,oe),Ie.programs=xe.programs,_.capabilities=oe,_.extensions=ne,_.properties=Ae,_.renderLists=ve,_.shadowMap=le,_.state=ce,_.info=Ie}Ve();const je=new E_(_,X);this.xr=je,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(O,z,!1))},this.getSize=function(R){return R.set(O,z)},this.setSize=function(R,B,Y=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,z=B,t.width=Math.floor(R*Q),t.height=Math.floor(B*Q),Y===!0&&(t.style.width=R+"px",t.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(O*Q,z*Q).floor()},this.setDrawingBufferSize=function(R,B,Y){O=R,z=B,Q=Y,t.width=Math.floor(R*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(Z)},this.setViewport=function(R,B,Y,K){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,B,Y,K),ce.viewport(A.copy(Z).multiplyScalar(Q).floor())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,B,Y,K){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,B,Y,K),ce.scissor(k.copy(ae).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(R){ce.setScissorTest(ue=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){$=R},this.getClearColor=function(R){return R.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(R=!0,B=!0,Y=!0){let K=0;if(R){let q=!1;if(b!==null){const _e=b.texture.format;q=_e===Hd||_e===Gd||_e===zd}if(q){const _e=b.texture.type,we=_e===Qn||_e===Xn||_e===Vo||_e===_i||_e===kd||_e===Bd,ke=Qe.getClearColor(),Ge=Qe.getClearAlpha(),qe=ke.r,$e=ke.g,We=ke.b;we?(x[0]=qe,x[1]=$e,x[2]=We,x[3]=Ge,X.clearBufferuiv(X.COLOR,0,x)):(g[0]=qe,g[1]=$e,g[2]=We,g[3]=Ge,X.clearBufferiv(X.COLOR,0,g))}else K|=X.COLOR_BUFFER_BIT}B&&(K|=X.DEPTH_BUFFER_BIT),Y&&(K|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ve.dispose(),Se.dispose(),Ae.dispose(),M.dispose(),I.dispose(),re.dispose(),He.dispose(),it.dispose(),xe.dispose(),je.dispose(),je.removeEventListener("sessionstart",wt),je.removeEventListener("sessionend",ze),ye&&(ye.dispose(),ye=null),_t.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Ie.autoReset,B=le.enabled,Y=le.autoUpdate,K=le.needsUpdate,q=le.type;Ve(),Ie.autoReset=R,le.enabled=B,le.autoUpdate=Y,le.needsUpdate=K,le.type=q}function fe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function me(R){const B=R.target;B.removeEventListener("dispose",me),Pe(B)}function Pe(R){De(R),Ae.remove(R)}function De(R){const B=Ae.get(R).programs;B!==void 0&&(B.forEach(function(Y){xe.releaseProgram(Y)}),R.isShaderMaterial&&xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,Y,K,q,_e){B===null&&(B=Ce);const we=q.isMesh&&q.matrixWorld.determinant()<0,ke=Ri(R,B,Y,K,q);ce.setMaterial(K,we);let Ge=Y.index,qe=1;if(K.wireframe===!0){if(Ge=ie.getWireframeAttribute(Y),Ge===void 0)return;qe=2}const $e=Y.drawRange,We=Y.attributes.position;let mt=$e.start*qe,Ct=($e.start+$e.count)*qe;_e!==null&&(mt=Math.max(mt,_e.start*qe),Ct=Math.min(Ct,(_e.start+_e.count)*qe)),Ge!==null?(mt=Math.max(mt,0),Ct=Math.min(Ct,Ge.count)):We!=null&&(mt=Math.max(mt,0),Ct=Math.min(Ct,We.count));const gt=Ct-mt;if(gt<0||gt===1/0)return;He.setup(q,K,ke,Y,Ge);let an,Ue=Fe;if(Ge!==null&&(an=j.get(Ge),Ue=Le,Ue.setIndex(an)),q.isMesh)K.wireframe===!0?(ce.setLineWidth(K.wireframeLinewidth*Xe()),Ue.setMode(X.LINES)):Ue.setMode(X.TRIANGLES);else if(q.isLine){let Te=K.linewidth;Te===void 0&&(Te=1),ce.setLineWidth(Te*Xe()),q.isLineSegments?Ue.setMode(X.LINES):q.isLineLoop?Ue.setMode(X.LINE_LOOP):Ue.setMode(X.LINE_STRIP)}else q.isPoints?Ue.setMode(X.POINTS):q.isSprite&&Ue.setMode(X.TRIANGLES);if(q.isBatchedMesh)Ue.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Ue.renderInstances(mt,gt,q.count);else if(Y.isInstancedBufferGeometry){const Te=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ti=Math.min(Y.instanceCount,Te);Ue.renderInstances(mt,gt,ti)}else Ue.render(mt,gt)};function at(R,B,Y){R.transparent===!0&&R.side===fn&&R.forceSinglePass===!1?(R.side=jt,R.needsUpdate=!0,Kt(R,B,Y),R.side=Jn,R.needsUpdate=!0,Kt(R,B,Y),R.side=fn):Kt(R,B,Y)}this.compile=function(R,B,Y=null){Y===null&&(Y=R),p=Se.get(Y),p.init(),S.push(p),Y.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),R!==Y&&R.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(_._useLegacyLights);const K=new Set;return R.traverse(function(q){const _e=q.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const ke=_e[we];at(ke,Y,q),K.add(ke)}else at(_e,Y,q),K.add(_e)}),S.pop(),p=null,K},this.compileAsync=function(R,B,Y=null){const K=this.compile(R,B,Y);return new Promise(q=>{function _e(){if(K.forEach(function(we){Ae.get(we).currentProgram.isReady()&&K.delete(we)}),K.size===0){q(R);return}setTimeout(_e,10)}ne.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let st=null;function St(R){st&&st(R)}function wt(){_t.stop()}function ze(){_t.start()}const _t=new iu;_t.setAnimationLoop(St),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(R){st=R,je.setAnimationLoop(R),R===null?_t.stop():_t.start()},je.addEventListener("sessionstart",wt),je.addEventListener("sessionend",ze),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(B),B=je.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,B,b),p=Se.get(R,S.length),p.init(),S.push(p),Ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(Ee),pe=this.localClippingEnabled,se=Oe.init(this.clippingPlanes,pe),v=ve.get(R,m.length),v.init(),m.push(v),rt(R,B,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(W,$),this.info.render.frame++,se===!0&&Oe.beginShadows();const Y=p.state.shadowsArray;if(le.render(Y,R,B),se===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(v,R),p.setupLights(_._useLegacyLights),B.isArrayCamera){const K=B.cameras;for(let q=0,_e=K.length;q<_e;q++){const we=K[q];kn(v,R,we,we.viewport)}}else kn(v,R,B);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(_,R,B),He.resetDefaultState(),U=-1,E=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function rt(R,B,Y,K){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){K&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);const we=re.update(R),ke=R.material;ke.visible&&v.push(R,we,ke,Y,Ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const we=re.update(R),ke=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ne.copy(we.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(ke)){const Ge=we.groups;for(let qe=0,$e=Ge.length;qe<$e;qe++){const We=Ge[qe],mt=ke[We.materialIndex];mt&&mt.visible&&v.push(R,we,mt,Y,Ne.z,We)}}else ke.visible&&v.push(R,we,ke,Y,Ne.z,null)}}const _e=R.children;for(let we=0,ke=_e.length;we<ke;we++)rt(_e[we],B,Y,K)}function kn(R,B,Y,K){const q=R.opaque,_e=R.transmissive,we=R.transparent;p.setupLightsView(Y),se===!0&&Oe.setGlobalState(_.clippingPlanes,Y),_e.length>0&&ei(q,_e,B,Y),K&&ce.viewport(A.copy(K)),q.length>0&&Bn(q,B,Y),_e.length>0&&Bn(_e,B,Y),we.length>0&&Bn(we,B,Y),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function ei(R,B,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const _e=oe.isWebGL2;ye===null&&(ye=new bi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Hs:Qn,minFilter:Gs,samples:_e?4:0})),_.getDrawingBufferSize(Be),_e?ye.setSize(Be.x,Be.y):ye.setSize(No(Be.x),No(Be.y));const we=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(N),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const ke=_.toneMapping;_.toneMapping=Kn,Bn(R,Y,K),y.updateMultisampleRenderTarget(ye),y.updateRenderTargetMipmap(ye);let Ge=!1;for(let qe=0,$e=B.length;qe<$e;qe++){const We=B[qe],mt=We.object,Ct=We.geometry,gt=We.material,an=We.group;if(gt.side===fn&&mt.layers.test(K.layers)){const Ue=gt.side;gt.side=jt,gt.needsUpdate=!0,Rt(mt,Y,K,Ct,gt,an),gt.side=Ue,gt.needsUpdate=!0,Ge=!0}}Ge===!0&&(y.updateMultisampleRenderTarget(ye),y.updateRenderTargetMipmap(ye)),_.setRenderTarget(we),_.setClearColor(N,L),_.toneMapping=ke}function Bn(R,B,Y){const K=B.isScene===!0?B.overrideMaterial:null;for(let q=0,_e=R.length;q<_e;q++){const we=R[q],ke=we.object,Ge=we.geometry,qe=K===null?we.material:K,$e=we.group;ke.layers.test(Y.layers)&&Rt(ke,B,Y,Ge,qe,$e)}}function Rt(R,B,Y,K,q,_e){R.onBeforeRender(_,B,Y,K,q,_e),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(_,B,Y,K,R,_e),q.transparent===!0&&q.side===fn&&q.forceSinglePass===!1?(q.side=jt,q.needsUpdate=!0,_.renderBufferDirect(Y,B,K,q,R,_e),q.side=Jn,q.needsUpdate=!0,_.renderBufferDirect(Y,B,K,q,R,_e),q.side=fn):_.renderBufferDirect(Y,B,K,q,R,_e),R.onAfterRender(_,B,Y,K,q,_e)}function Kt(R,B,Y){B.isScene!==!0&&(B=Ce);const K=Ae.get(R),q=p.state.lights,_e=p.state.shadowsArray,we=q.state.version,ke=xe.getParameters(R,q.state,_e,B,Y),Ge=xe.getProgramCacheKey(ke);let qe=K.programs;K.environment=R.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(R.isMeshStandardMaterial?I:M).get(R.envMap||K.environment),qe===void 0&&(R.addEventListener("dispose",me),qe=new Map,K.programs=qe);let $e=qe.get(Ge);if($e!==void 0){if(K.currentProgram===$e&&K.lightsStateVersion===we)return Ai(R,ke),$e}else ke.uniforms=xe.getUniforms(R),R.onBuild(Y,ke,_),R.onBeforeCompile(ke,_),$e=xe.acquireProgram(ke,Ge),qe.set(Ge,$e),K.uniforms=ke.uniforms;const We=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Oe.uniform),Ai(R,ke),K.needsLights=us(R),K.lightsStateVersion=we,K.needsLights&&(We.ambientLightColor.value=q.state.ambient,We.lightProbe.value=q.state.probe,We.directionalLights.value=q.state.directional,We.directionalLightShadows.value=q.state.directionalShadow,We.spotLights.value=q.state.spot,We.spotLightShadows.value=q.state.spotShadow,We.rectAreaLights.value=q.state.rectArea,We.ltc_1.value=q.state.rectAreaLTC1,We.ltc_2.value=q.state.rectAreaLTC2,We.pointLights.value=q.state.point,We.pointLightShadows.value=q.state.pointShadow,We.hemisphereLights.value=q.state.hemi,We.directionalShadowMap.value=q.state.directionalShadowMap,We.directionalShadowMatrix.value=q.state.directionalShadowMatrix,We.spotShadowMap.value=q.state.spotShadowMap,We.spotLightMatrix.value=q.state.spotLightMatrix,We.spotLightMap.value=q.state.spotLightMap,We.pointShadowMap.value=q.state.pointShadowMap,We.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=$e,K.uniformsList=null,$e}function Ys(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=kr.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Ai(R,B){const Y=Ae.get(R);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Ri(R,B,Y,K,q){B.isScene!==!0&&(B=Ce),y.resetTextureUnits();const _e=B.fog,we=K.isMeshStandardMaterial?B.environment:null,ke=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Fn,Ge=(K.isMeshStandardMaterial?I:M).get(K.envMap||we),qe=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$e=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!Y.morphAttributes.position,mt=!!Y.morphAttributes.normal,Ct=!!Y.morphAttributes.color;let gt=Kn;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=_.toneMapping);const an=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ue=an!==void 0?an.length:0,Te=Ae.get(K),ti=p.state.lights;if(se===!0&&(pe===!0||R!==E)){const Wt=R===E&&K.id===U;Oe.setState(K,R,Wt)}let ft=!1;K.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ti.state.version||Te.outputColorSpace!==ke||q.isBatchedMesh&&Te.batching===!1||!q.isBatchedMesh&&Te.batching===!0||q.isInstancedMesh&&Te.instancing===!1||!q.isInstancedMesh&&Te.instancing===!0||q.isSkinnedMesh&&Te.skinning===!1||!q.isSkinnedMesh&&Te.skinning===!0||q.isInstancedMesh&&Te.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Te.instancingColor===!1&&q.instanceColor!==null||Te.envMap!==Ge||K.fog===!0&&Te.fog!==_e||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Oe.numPlanes||Te.numIntersection!==Oe.numIntersection)||Te.vertexAlphas!==qe||Te.vertexTangents!==$e||Te.morphTargets!==We||Te.morphNormals!==mt||Te.morphColors!==Ct||Te.toneMapping!==gt||oe.isWebGL2===!0&&Te.morphTargetsCount!==Ue)&&(ft=!0):(ft=!0,Te.__version=K.version);let on=Te.currentProgram;ft===!0&&(on=Kt(K,B,q));let Ci=!1,Tn=!1,An=!1;const pt=on.getUniforms(),ln=Te.uniforms;if(ce.useProgram(on.program)&&(Ci=!0,Tn=!0,An=!0),K.id!==U&&(U=K.id,Tn=!0),Ci||E!==R){pt.setValue(X,"projectionMatrix",R.projectionMatrix),pt.setValue(X,"viewMatrix",R.matrixWorldInverse);const Wt=pt.map.cameraPosition;Wt!==void 0&&Wt.setValue(X,Ne.setFromMatrixPosition(R.matrixWorld)),oe.logarithmicDepthBuffer&&pt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&pt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Tn=!0,An=!0)}if(q.isSkinnedMesh){pt.setOptional(X,q,"bindMatrix"),pt.setOptional(X,q,"bindMatrixInverse");const Wt=q.skeleton;Wt&&(oe.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),pt.setValue(X,"boneTexture",Wt.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(pt.setOptional(X,q,"batchingTexture"),pt.setValue(X,"batchingTexture",q._matricesTexture,y));const fs=Y.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0&&oe.isWebGL2===!0)&&Ze.update(q,Y,on),(Tn||Te.receiveShadow!==q.receiveShadow)&&(Te.receiveShadow=q.receiveShadow,pt.setValue(X,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ln.envMap.value=Ge,ln.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Tn&&(pt.setValue(X,"toneMappingExposure",_.toneMappingExposure),Te.needsLights&&Ks(ln,An),_e&&K.fog===!0&&he.refreshFogUniforms(ln,_e),he.refreshMaterialUniforms(ln,K,Q,z,ye),kr.upload(X,Ys(Te),ln,y)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(kr.upload(X,Ys(Te),ln,y),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&pt.setValue(X,"center",q.center),pt.setValue(X,"modelViewMatrix",q.modelViewMatrix),pt.setValue(X,"normalMatrix",q.normalMatrix),pt.setValue(X,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Wt=K.uniformsGroups;for(let ot=0,tt=Wt.length;ot<tt;ot++)if(oe.isWebGL2){const ps=Wt[ot];it.update(ps,on),it.bind(ps,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function Ks(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function us(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,B,Y){Ae.get(R.texture).__webglTexture=B,Ae.get(R.depthTexture).__webglTexture=Y;const K=Ae.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,B){const Y=Ae.get(R);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,Y=0){b=R,P=B,C=Y;let K=!0,q=null,_e=!1,we=!1;if(R){const Ge=Ae.get(R);Ge.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(X.FRAMEBUFFER,null),K=!1):Ge.__webglFramebuffer===void 0?y.setupRenderTarget(R):Ge.__hasExternalTextures&&y.rebindTextures(R,Ae.get(R.texture).__webglTexture,Ae.get(R.depthTexture).__webglTexture);const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(we=!0);const $e=Ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[B])?q=$e[B][Y]:q=$e[B],_e=!0):oe.isWebGL2&&R.samples>0&&y.useMultisampledRTT(R)===!1?q=Ae.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?q=$e[Y]:q=$e,A.copy(R.viewport),k.copy(R.scissor),D=R.scissorTest}else A.copy(Z).multiplyScalar(Q).floor(),k.copy(ae).multiplyScalar(Q).floor(),D=ue;if(ce.bindFramebuffer(X.FRAMEBUFFER,q)&&oe.drawBuffers&&K&&ce.drawBuffers(R,q),ce.viewport(A),ce.scissor(k),ce.setScissorTest(D),_e){const Ge=Ae.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ge.__webglTexture,Y)}else if(we){const Ge=Ae.get(R.texture),qe=B||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ge.__webglTexture,Y||0,qe)}U=-1},this.readRenderTargetPixels=function(R,B,Y,K,q,_e,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(ke=ke[we]),ke){ce.bindFramebuffer(X.FRAMEBUFFER,ke);try{const Ge=R.texture,qe=Ge.format,$e=Ge.type;if(qe!==mn&&Me.convert(qe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=$e===Hs&&(ne.has("EXT_color_buffer_half_float")||oe.isWebGL2&&ne.has("EXT_color_buffer_float"));if($e!==Qn&&Me.convert($e)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Zn&&(oe.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-K&&Y>=0&&Y<=R.height-q&&X.readPixels(B,Y,K,q,Me.convert(qe),Me.convert($e),_e)}finally{const Ge=b!==null?Ae.get(b).__webglFramebuffer:null;ce.bindFramebuffer(X.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(R,B,Y=0){const K=Math.pow(2,-Y),q=Math.floor(B.image.width*K),_e=Math.floor(B.image.height*K);y.setTexture2D(B,0),X.copyTexSubImage2D(X.TEXTURE_2D,Y,0,0,R.x,R.y,q,_e),ce.unbindTexture()},this.copyTextureToTexture=function(R,B,Y,K=0){const q=B.image.width,_e=B.image.height,we=Me.convert(Y.format),ke=Me.convert(Y.type);y.setTexture2D(Y,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,K,R.x,R.y,q,_e,we,ke,B.image.data):B.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,K,R.x,R.y,B.mipmaps[0].width,B.mipmaps[0].height,we,B.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,K,R.x,R.y,we,ke,B.image),K===0&&Y.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(R,B,Y,K,q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=R.max.x-R.min.x+1,we=R.max.y-R.min.y+1,ke=R.max.z-R.min.z+1,Ge=Me.convert(K.format),qe=Me.convert(K.type);let $e;if(K.isData3DTexture)y.setTexture3D(K,0),$e=X.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)y.setTexture2DArray(K,0),$e=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const We=X.getParameter(X.UNPACK_ROW_LENGTH),mt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ct=X.getParameter(X.UNPACK_SKIP_PIXELS),gt=X.getParameter(X.UNPACK_SKIP_ROWS),an=X.getParameter(X.UNPACK_SKIP_IMAGES),Ue=Y.isCompressedTexture?Y.mipmaps[q]:Y.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ue.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ue.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,R.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,R.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,R.min.z),Y.isDataTexture||Y.isData3DTexture?X.texSubImage3D($e,q,B.x,B.y,B.z,_e,we,ke,Ge,qe,Ue.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D($e,q,B.x,B.y,B.z,_e,we,ke,Ge,Ue.data)):X.texSubImage3D($e,q,B.x,B.y,B.z,_e,we,ke,Ge,qe,Ue),X.pixelStorei(X.UNPACK_ROW_LENGTH,We),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ct),X.pixelStorei(X.UNPACK_SKIP_ROWS,gt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,an),q===0&&K.generateMipmaps&&X.generateMipmap($e),ce.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?y.setTextureCube(R,0):R.isData3DTexture?y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?y.setTexture2DArray(R,0):y.setTexture2D(R,0),ce.unbindTexture()},this.resetState=function(){P=0,C=0,b=null,ce.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wo?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===na?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?yi:Vd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yi?Pt:Fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class R_ extends A_{}R_.prototype.isWebGL1Renderer=!0;class C_ extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class qM extends Vt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Ft,h=Ft,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class L_ extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uh=new H,Ih=new H,Oh=new yt,Ka=new $o,Rr=new ia;class P_ extends Ut{constructor(e=new gn,t=new L_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Uh.fromBufferAttribute(t,s-1),Ih.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Uh.distanceTo(Ih);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;Oh.copy(s).invert(),Ka.copy(e.ray).applyMatrix4(Oh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,h=new H,d=new H,u=new H,x=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let _=m,T=S-1;_<T;_+=x){const P=g.getX(_),C=g.getX(_+1);if(c.fromBufferAttribute(p,P),h.fromBufferAttribute(p,C),Ka.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(u);U<e.near||U>e.far||t.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let _=m,T=S-1;_<T;_+=x){if(c.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),Ka.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(u);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Fh=new H,kh=new H;class YM extends P_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Fh.fromBufferAttribute(t,s),kh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Fh.distanceTo(kh);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yo extends Vt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,x=(o-h)/u;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Re:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new H,s=[],r=[],o=[],a=new H,l=new yt;for(let x=0;x<=e;x++){const g=x/e;s[x]=this.getTangentAt(g,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),a.crossVectors(s[x-1],s[x]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Nt(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(l.makeRotationAxis(a,g))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(Nt(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(x=-x);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],x*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ko extends wn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new Re,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,x=c-this.aY;l=u*h-x*d+this.aX,c=u*d+x*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class N_ extends Ko{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qo(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,x=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,x*=h,s(o,a,u,x)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Cr=new H,Qa=new Qo,Ja=new Qo,eo=new Qo;class D_ extends wn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),c=Cr);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),x),v=Math.pow(d.distanceToSquared(u),x),p=Math.pow(u.distanceToSquared(h),x);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Qa.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,p),Ja.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,p),eo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ja.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),eo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Qa.calc(l),Ja.calc(l),eo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function U_(n,e){const t=1-n;return t*t*e}function I_(n,e){return 2*(1-n)*n*e}function O_(n,e){return n*n*e}function Os(n,e,t,i){return U_(n,e)+I_(n,t)+O_(n,i)}function F_(n,e){const t=1-n;return t*t*t*e}function k_(n,e){const t=1-n;return 3*t*t*n*e}function B_(n,e){return 3*(1-n)*n*n*e}function z_(n,e){return n*n*n*e}function Fs(n,e,t,i,s){return F_(n,e)+k_(n,t)+B_(n,i)+z_(n,s)}class du extends wn{constructor(e=new Re,t=new Re,i=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Re){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fs(e,s.x,r.x,o.x,a.x),Fs(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class G_ extends wn{constructor(e=new H,t=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new H){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fs(e,s.x,r.x,o.x,a.x),Fs(e,s.y,r.y,o.y,a.y),Fs(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uu extends wn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H_ extends wn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fu extends wn{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Os(e,s.x,r.x,o.x),Os(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j_ extends wn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Os(e,s.x,r.x,o.x),Os(e,s.y,r.y,o.y),Os(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pu extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Bh(a,l.x,c.x,h.x,d.x),Bh(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Re().fromArray(s))}return this}}var zh=Object.freeze({__proto__:null,ArcCurve:N_,CatmullRomCurve3:D_,CubicBezierCurve:du,CubicBezierCurve3:G_,EllipseCurve:Ko,LineCurve:uu,LineCurve3:H_,QuadraticBezierCurve:fu,QuadraticBezierCurve3:j_,SplineCurve:pu});class V_ extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new zh[s.type]().fromJSON(s))}return this}}class Gh extends V_{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new uu(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new fu(this.currentPoint.clone(),new Re(e,t),new Re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new du(this.currentPoint.clone(),new Re(e,t),new Re(i,s),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new pu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Ko(e,t,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const Lr=new H,Pr=new H,to=new H,Nr=new nn;class KM extends gn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Us*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},x=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:p,c:m}=Nr;if(v.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Nr.getNormal(to),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){const _=(S+1)%3,T=d[S],P=d[_],C=Nr[h[S]],b=Nr[h[_]],U=`${T}_${P}`,E=`${P}_${T}`;E in u&&u[E]?(to.dot(u[E].normal)<=r&&(x.push(C.x,C.y,C.z),x.push(b.x,b.y,b.z)),u[E]=null):U in u||(u[U]={index0:c[S],index1:c[_],normal:to.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:p}=u[g];Lr.fromBufferAttribute(a,v),Pr.fromBufferAttribute(a,p),x.push(Lr.x,Lr.y,Lr.z),x.push(Pr.x,Pr.y,Pr.z)}this.setAttribute("position",new zt(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class W_ extends Gh{constructor(e){super(e),this.uuid=hs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Gh().fromJSON(s))}return this}}const $_={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=mu(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,x;if(i&&(r=K_(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)d=n[g],u=n[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);x=Math.max(c-a,h-l),x=x!==0?32767/x:0}return js(r,o,t,a,l,x,0),o}};function mu(n,e,t,i,s){let r,o;if(s===lM(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Hh(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Hh(r,n[r],n[r+1],o);return o&&oa(o,o.next)&&(Ws(o),o=o.next),o}function wi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(oa(t,t.next)||vt(t.prev,t,t.next)===0)){if(Ws(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function js(n,e,t,i,s,r,o){if(!n)return;!o&&r&&nM(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Z_(n,i,s,r):X_(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Ws(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=q_(wi(n),e,t),js(n,e,t,i,s,r,2)):o===2&&Y_(n,e,t,i,s,r):js(wi(n),e,t,i,s,r,1);break}}}function X_(n){const e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,x=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=x&&Ji(s,a,r,l,o,c,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Z_(n,e,t,i){const s=n.prev,r=n,o=n.next;if(vt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,x=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,v=a>l?a>c?a:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,m=Io(x,g,e,t,i),S=Io(v,p,e,t,i);let _=n.prevZ,T=n.nextZ;for(;_&&_.z>=m&&T&&T.z<=S;){if(_.x>=x&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Ji(a,h,l,d,c,u,_.x,_.y)&&vt(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=x&&T.x<=v&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&Ji(a,h,l,d,c,u,T.x,T.y)&&vt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=m;){if(_.x>=x&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Ji(a,h,l,d,c,u,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=S;){if(T.x>=x&&T.x<=v&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&Ji(a,h,l,d,c,u,T.x,T.y)&&vt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function q_(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!oa(s,r)&&gu(s,i,i.next,r)&&Vs(s,r)&&Vs(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Ws(i),Ws(i.next),i=n=r),i=i.next}while(i!==n);return wi(i)}function Y_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rM(o,a)){let l=xu(o,a);o=wi(o,o.next),l=wi(l,l.next),js(o,e,t,i,s,r,0),js(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function K_(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=mu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(sM(c));for(s.sort(Q_),r=0;r<s.length;r++)t=J_(s[r],t);return t}function Q_(n,e){return n.x-e.x}function J_(n,e){const t=eM(n,e);if(!t)return e;const i=xu(t,n);return wi(i,i.next),wi(t,t.next)}function eM(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ji(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Vs(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&tM(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function tM(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function nM(n,e,t,i){let s=n;do s.z===0&&(s.z=Io(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,iM(s)}function iM(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Io(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function sM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ji(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function rM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!aM(n,e)&&(Vs(n,e)&&Vs(e,n)&&oM(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||oa(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function oa(n,e){return n.x===e.x&&n.y===e.y}function gu(n,e,t,i){const s=Ur(vt(n,e,t)),r=Ur(vt(n,e,i)),o=Ur(vt(t,i,n)),a=Ur(vt(t,i,e));return!!(s!==r&&o!==a||s===0&&Dr(n,t,e)||r===0&&Dr(n,i,e)||o===0&&Dr(t,n,i)||a===0&&Dr(t,e,i))}function Dr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ur(n){return n>0?1:n<0?-1:0}function aM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&gu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Vs(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function oM(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xu(n,e){const t=new Oo(n.i,n.x,n.y),i=new Oo(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Hh(n,e,t,i){const s=new Oo(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ws(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Oo(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lM(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class ks{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ks.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];jh(e),Vh(i,e);let o=e.length;t.forEach(jh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Vh(i,t[l]);const a=$_.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function jh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Vh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class vu extends gn{constructor(e=new W_([new Re(0,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(r,3)),this.setAttribute("uv",new zt(o,2));function c(h){const d=s.length/3,u=h.extractPoints(t);let x=u.shape;const g=u.holes;ks.isClockWise(x)===!1&&(x=x.reverse());for(let p=0,m=g.length;p<m;p++){const S=g[p];ks.isClockWise(S)===!0&&(g[p]=S.reverse())}const v=ks.triangulateShape(x,g);for(let p=0,m=g.length;p<m;p++){const S=g[p];x=x.concat(S)}for(let p=0,m=x.length;p<m;p++){const S=x[p];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=v.length;p<m;p++){const S=v[p],_=S[0]+d,T=S[1]+d,P=S[2]+d;i.push(_,T,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return cM(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new vu(i,e.curveSegments)}}function cM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Jo extends gn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new H,u=new H,x=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const S=[],_=m/i;let T=0;m===0&&o===0?T=.5/t:m===i&&l===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){const C=P/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(C+T,1-_),S.push(c++)}h.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){const _=h[m][S+1],T=h[m][S],P=h[m+1][S],C=h[m+1][S+1];(m!==0||o>0)&&x.push(_,T,C),(m!==i-1||l<Math.PI)&&x.push(T,P,C)}this.setIndex(x),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class QM extends Ti{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class hM extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wd,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dM extends hM{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _u extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class JM extends _u{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const no=new yt,Wh=new H,$h=new H;class uM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),no.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fM extends uM{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ey extends _u{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new fM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ty{constructor(e,t,i=0,s=1/0){this.ray=new $o(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Fo(e,this,i,t),i.sort(Xh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Fo(e[s],this,i,t);return i.sort(Xh),i}}function Xh(n,e){return n.distance-e.distance}function Fo(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Fo(s[r],e,t,!0)}}class ny{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);const ko=[{id:"kraft",name:"Natural kraft",outer:{base:"#b98b5c",fiber:"#8f6339",speckle:"#5d3f22",grain:.9,roughness:.9,metalness:0},inner:{base:"#c9a479",fiber:"#a47b50",speckle:"#6f5032",grain:.7,roughness:.95,metalness:0},edge:"#9b7448"},{id:"white",name:"White coated board",outer:{base:"#f4f2ec",fiber:"#e3ded2",speckle:"#cfc8b8",grain:.25,roughness:.45,metalness:0,clearcoat:.3},inner:{base:"#d8d3c8",fiber:"#c3bcac",speckle:"#9f977f",grain:.6,roughness:.92,metalness:0},edge:"#e3ddd0"},{id:"black",name:"Black board",outer:{base:"#202022",fiber:"#2c2c30",speckle:"#121214",grain:.35,roughness:.62,metalness:0},inner:{base:"#2b2a28",fiber:"#363431",speckle:"#161514",grain:.5,roughness:.9,metalness:0},edge:"#1a1a1b"}],iy=n=>ko.find(e=>e.id===n)??ko[0],Jr=120,rn=1024;function pM(n){let e=n>>>0;return()=>(e=Math.imul(e^e>>>15,2246822519)+2654435769>>>0)/4294967296}function Mu(n,e,t,i,s=7,r=!0){const o=pM(s),a=i.grain;n.fillStyle=i.base,n.fillRect(0,0,e,t);const l=d=>{for(const u of r?[-e,0,e]:[0])for(const x of r?[-t,0,t]:[0])d(u,x)};for(let d=0;d<70;d++){const u=o()*e,x=o()*t,g=(.04+o()*.12)*Math.max(e,t),v=(.015+o()*.03)*a,p=o()>.5?`rgba(255,255,255,${v})`:`rgba(0,0,0,${v})`;l((m,S)=>{const _=n.createRadialGradient(u+m,x+S,0,u+m,x+S,g);_.addColorStop(0,p),_.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=_,n.fillRect(u+m-g,x+S-g,g*2,g*2)})}n.lineCap="round";const c=Math.round(10400*a*(e*t)/(rn*rn));for(let d=0;d<c;d++){const u=o()*e,x=o()*t,g=3+o()*14,v=(o()-.5)*.9;n.strokeStyle=i.fiber,n.globalAlpha=(.08+o()*.22)*a,n.lineWidth=.4+o()*1.1,l((p,m)=>{n.beginPath(),n.moveTo(u+p,x+m),n.lineTo(u+p+Math.cos(v)*g,x+m+Math.sin(v)*g),n.stroke()})}const h=Math.round(1680*a*(e*t)/(rn*rn));n.fillStyle=i.speckle;for(let d=0;d<h;d++){const u=o()*e,x=o()*t,g=.4+o()*1.3,v=g*(.4+o()*.6),p=o()*Math.PI;n.globalAlpha=(.15+o()*.45)*a,l((m,S)=>{n.beginPath(),n.ellipse(u+m,x+S,g,v,p,0,Math.PI*2),n.fill()})}n.globalAlpha=1}function mM(n,e,t,i=11){n.fillStyle="#808080",n.fillRect(0,0,e,t),Mu(n,e,t,{base:"rgba(0,0,0,0)",fiber:"#ffffff",speckle:"#000000",grain:1},i)}const el=(n,e)=>{const t=document.createElement("canvas");return t.width=n,t.height=e,t};function sy(n,e){const t=el(rn,rn);Mu(t.getContext("2d"),rn,rn,n,e);const i=new Yo(t);return i.wrapS=i.wrapT=zs,i.repeat.set(1/Jr,1/Jr),i.colorSpace=Pt,i.anisotropy=4,i}function ry(n=11){const e=el(rn,rn);mM(e.getContext("2d"),rn,rn,n);const t=new Yo(e);return t.wrapS=t.wrapT=zs,t.repeat.set(1/Jr,1/Jr),t}function ay(n,e,t){return new dM({map:e,bumpMap:t,bumpScale:.35,roughness:n.roughness,metalness:n.metalness,clearcoat:n.clearcoat??0,clearcoatRoughness:.4,side:fn})}function oy(n=1){const e=navigator.deviceMemory;return(e==null?64:e<=2?24:e<=4?48:96)*1024*1024*n}function gM(n){return new Promise((e,t)=>{const i=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"})),s=new Image;s.onload=()=>{URL.revokeObjectURL(i),e(s)},s.onerror=()=>{URL.revokeObjectURL(i),t(new Error("the browser could not render this SVG as an image"))},s.src=i})}function ly(n){const e=new C_,t=new bn(new Jo(20,32,16),new Qr({color:new Je(.16,.165,.18),side:jt}));e.add(t);const i=el(128,128),s=i.getContext("2d"),r=s.createRadialGradient(64,64,4,64,64,64);r.addColorStop(0,"#ffffff"),r.addColorStop(.55,"#bdbdbd"),r.addColorStop(1,"#3a3a3a"),s.fillStyle=r,s.fillRect(0,0,128,128);const o=new Yo(i),a=(h,d,u,x,g=!1)=>{const v=new bn(new ra(h,d),new Qr({color:new Je(u,u,u*.98),map:g?o:null,side:fn}));v.position.set(...x),v.lookAt(0,0,0),e.add(v)};a(13,9,2.4,[0,2.6,9],!0),a(1.6,8,3,[-9,1,2]),a(6,3,1.8,[7,3,-6]),a(16,6,1.1,[0,-6,4]);const l=new Do(n),c=l.fromScene(e,.015).texture;return l.dispose(),e.traverse(h=>{var u,x;const d=h;(u=d.geometry)==null||u.dispose(),(x=d.material)==null||x.dispose()}),o.dispose(),c}const Et=2,$n=40;async function xM(n,e,t,i,s){const r=await gM(n),o=Math.ceil((s[0]+2*$n)*Et),a=Math.ceil((s[1]+2*$n)*Et),l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0}),h=$s(t,e);c.setTransform(Et*h[0],Et*h[3],Et*h[1],Et*h[4],Et*(h[2]+$n),Et*(h[5]+$n)),c.drawImage(r,0,0,e[0],e[1]);const d=ym(c.getImageData(0,0,o,a).data),u=document.createElement("canvas");u.width=o,u.height=a;const x=u.getContext("2d",{willReadFrequently:!0});x.setTransform(Et,0,0,Et,Et*$n,Et*$n),x.fillStyle="#000";for(const k of i.panels){x.beginPath();for(const D of[k.outer,...k.holes])D.forEach(([N,L],O)=>O?x.lineTo(N,L):x.moveTo(N,L)),x.closePath();x.fill("evenodd")}const g=x.getImageData(0,0,o,a).data,v=i.panels.flatMap(k=>k.outer.map(D=>D[0])),p=i.panels.flatMap(k=>k.outer.map(D=>D[1])),m={x:Math.min(...v),y:Math.min(...p),w:Math.max(...v)-Math.min(...v),h:Math.max(...p)-Math.min(...p)},S=lm(m,e,Pd),_=document.createElement("canvas");_.width=o,_.height=a;const T=_.getContext("2d",{willReadFrequently:!0});T.setTransform(Et*h[0],Et*h[3],Et*h[1],Et*h[4],Et*(h[2]+$n),Et*(h[5]+$n)),T.fillStyle="#000",T.fillRect(S.x,S.y,S.w,S.h);const P=T.getImageData(0,0,o,a).data;let C=0,b=0,U=0,E=0;for(let k=0;k<d.length;k++){const D=d[k]/255,N=g[k*4+3]>127;N&&E++,D&&(C+=D,N&&(b+=D),P[k*4+3]<128&&(U+=D))}const A=1/(Et*Et);return{paintedMm2:C*A,onMaterial:C?b/C:1,materialCovered:E?b/E:0,outsideRaster:C?U/C:0}}function vM(n,e,t=.5,i,s){const r={},o=is(n,e,1),a=Ld(n,o);if(!a.length)return r;const l=new Map;n.model.order.forEach((v,p)=>l.set(n.graph.panels[v].id,p));const c=v=>{var m;let p=0;for(let S=v;S&&n.parentHinge[S];S=n.parent[S])p=Math.max(p,((m=i==null?void 0:i[n.parentHinge[S]])==null?void 0:m[1])??1);return p},h=(v,p)=>c(v)-c(p)||(l.get(v)??0)-(l.get(p)??0),d=v=>{const p=n.parentHinge[v];return p?is(n,{...e,[p]:(e[p]??0)*.97},1):o},u=new Map(n.graph.panels.map(v=>[v.id,v])),x=new Map;for(const v of a)(x.get(v.a)??x.set(v.a,new Set).get(v.a)).add(v.b),(x.get(v.b)??x.set(v.b,new Set).get(v.b)).add(v.a);const g=new Set;for(const v of[...x.keys()].sort(h)){if(g.has(v))continue;const p=[],m=[v];for(g.add(v);m.length;){const b=m.pop();p.push(b);for(const U of x.get(b))g.has(U)||(g.add(U),m.push(U))}p.sort((b,U)=>(s!=null&&s.has(b)?1:0)-(s!=null&&s.has(U)?1:0)||h(b,U));const S=p[0],_=es(o[S]),T=vi(o[S],u.get(S).centroid),P=b=>{const U=vi(o[b],u.get(b).centroid);return(U[0]-T[0])*_[0]+(U[1]-T[1])*_[1]+(U[2]-T[2])*_[2]},C=new Map([[S,0]]);for(const b of p.slice(1)){const U=s!=null&&s.has(b)?[...x.get(b)].find(N=>C.has(N)&&!s.has(N)):void 0;let E;if(U){const N=es(o[U]);E=-Math.sign(N[0]*_[0]+N[1]*_[1]+N[2]*_[2])||-1}else{const N=vi(d(b)[b],u.get(b).centroid);E=Math.sign((N[0]-T[0])*_[0]+(N[1]-T[1])*_[1]+(N[2]-T[2])*_[2])||1}const A=[...x.get(b)].filter(N=>C.has(N)).map(N=>C.get(N)),k=P(b),D=E>0?Math.max(k,...A.map(N=>N+t)):Math.min(k,...A.map(N=>N-t));C.set(b,D)}for(const[b,U]of C){const E=U-(b===S?0:P(b));if(Math.abs(E)<1e-9)continue;const A=es(o[b]);r[b]=E/t*Math.sign(A[0]*_[0]+A[1]*_[1]+A[2]*_[2])}}return r}const _M=({className:n,children:e})=>f.jsx("div",{className:n,children:e}),MM={linear:"Linear",smooth:"Smooth",easeIn:"Ease in",easeOut:"Ease out",easeInOut:"Ease in-out"},yM=n=>Array.from({length:21},(e,t)=>`${t*2},${20-Go[n](t/20)*18-1}`).join(" ");function SM({graph:n,edit:e,dispatch:t,stepId:i,setSelectedStepId:s,setProgress:r,totalMs:o,setSelected:a}){const l=e.timeline,c=l.findIndex(p=>p.id===i),h=l[c];if(!h)return null;const d=ls(l).windows[c],u=p=>{var m;return((m=n.hinges.find(S=>S.id===p))==null?void 0:m.label)??p},x=(p,m)=>t({type:"setTimeline",timeline:p,coalesce:m}),g=p=>l.find(m=>m.ops.some(S=>S.hingeId===p)),v=n.hinges.filter(p=>!h.ops.some(m=>m.hingeId===p.id));return f.jsxs("section",{className:"step-inspector","data-testid":"step-inspector",children:[f.jsxs("div",{className:"step-head",children:[f.jsxs("h3",{children:["Step ",c+1]}),f.jsxs("span",{className:"step-move",children:[f.jsx("button",{className:"chip",disabled:c===0,onClick:()=>x(qi(l,h.id,c-1)),"aria-label":"Move step earlier",children:"↑ Earlier"}),f.jsx("button",{className:"chip",disabled:c===l.length-1,onClick:()=>x(qi(l,h.id,c+1)),"aria-label":"Move step later",children:"↓ Later"})]})]}),f.jsxs("label",{className:"field",children:["Name",f.jsx("input",{value:h.name,onChange:p=>x(ir(l,h.id,{name:p.target.value}),`name:${h.id}`),onBlur:()=>t({type:"endGesture"}),"aria-label":"Step name"})]}),f.jsxs("div",{className:"timing-grid",children:[f.jsxs("label",{className:"field",children:["Duration (s)",f.jsx("input",{type:"number",min:.05,step:.1,value:h.durationMs/1e3,onChange:p=>x(ir(l,h.id,{durationMs:Number(p.target.value)*1e3||50}),`dur:${h.id}`),onBlur:()=>t({type:"endGesture"}),"aria-label":"Step duration seconds"})]}),f.jsxs("label",{className:"field",children:["Delay (s)",f.jsx("input",{type:"number",min:0,step:.1,value:h.delayMs/1e3,onChange:p=>x(ir(l,h.id,{delayMs:Number(p.target.value)*1e3||0}),`delay:${h.id}`),onBlur:()=>t({type:"endGesture"}),"aria-label":"Step delay seconds"})]}),f.jsxs("label",{className:"field",children:["Easing",f.jsxs("span",{className:"easing-row",children:[f.jsx("select",{value:h.easing,onChange:p=>x(ir(l,h.id,{easing:p.target.value})),"aria-label":"Step easing",children:Object.keys(Go).map(p=>f.jsx("option",{value:p,children:MM[p]},p))}),f.jsx("svg",{viewBox:"0 0 40 20",className:"easing-curve","aria-hidden":"true",children:f.jsx("polyline",{points:yM(h.easing)})})]})]})]}),f.jsxs("div",{className:"chips",children:[f.jsx("button",{className:"chip",onClick:()=>r((d.start-h.delayMs)/o),children:"Preview start"}),f.jsx("button",{className:"chip",onClick:()=>r(d.end/o),children:"Preview end"}),f.jsx("button",{className:"chip",onClick:()=>{const p=Kf(l,h.id);x(p),s(p[c+1].id)},children:"Duplicate"}),f.jsx("button",{className:"chip danger",onClick:()=>{x(md(l,h.id)),s(null)},children:"Delete step"})]}),f.jsxs("h4",{children:["Hinges folded in this step ",f.jsx("small",{children:"(in parallel)"})]}),!h.ops.length&&f.jsx("p",{className:"legend-note",children:"No hinges yet: drag chips here on the timeline, or add one below."}),h.ops.map(p=>{const m=e.angles[p.hingeId]??0,S=p.angleDeg!=null;return f.jsxs("div",{className:"op-row",children:[f.jsxs("div",{className:"op-head",children:[f.jsx("button",{className:"chip hinge",onClick:()=>a({kind:"hinge",id:p.hingeId}),children:u(p.hingeId)}),f.jsxs("label",{className:"toggle",children:[f.jsx("input",{type:"checkbox",checked:S,onChange:_=>x(Kl(l,h.id,p.hingeId,_.target.checked?m:void 0))})," own angle in this step"]}),f.jsx("button",{className:"chip",onClick:()=>x(Ds(l,p.hingeId,null,h.id)),"aria-label":`Remove ${u(p.hingeId)} from step`,children:"✕"})]}),S?f.jsx(Bo,{id:p.hingeId,label:u(p.hingeId),value:p.angleDeg,onChange:_=>x(Kl(l,h.id,p.hingeId,_),`op:${h.id}:${p.hingeId}`),onDone:()=>t({type:"endGesture"}),kind:"step"}):f.jsxs("p",{className:"legend-note",children:["folds to the hinge target ",Rs(m)," (edit in the hinge list)"]})]},p.hingeId)}),v.length>0&&f.jsxs("select",{value:"",onChange:p=>{var m;return p.target.value&&x(Ds(l,p.target.value,h.id,(m=g(p.target.value))==null?void 0:m.id))},"aria-label":"Add hinge to step",children:[f.jsx("option",{value:"",children:"+ Add hinge…"}),v.map(p=>{const m=g(p.id);return f.jsxs("option",{value:p.id,children:[p.label,m?` (move from “${m.name}”)`:" (unassigned)"]},p.id)})]}),f.jsx("button",{className:"chip",onClick:()=>s(null),children:"Close step"})]})}const Xt=(n,e=2)=>n.toFixed(e),Rs=n=>`${n>0?"+":""}${Math.round(n*10)/10}°`,bM=n=>{const e=n.map(i=>i[0]),t=n.map(i=>i[1]);return[Math.max(...e)-Math.min(...e),Math.max(...t)-Math.min(...t)]};function Bo({id:n,label:e,value:t,onChange:i,onDone:s,kind:r="target"}){return f.jsxs("div",{className:"angle-control",children:[f.jsx("span",{className:"angle-label",children:e}),f.jsx("input",{type:"range",min:-180,max:180,step:1,value:t,onChange:o=>i(Number(o.target.value)),onPointerUp:s,onKeyUp:s,"aria-label":`${e} ${r} angle slider`}),f.jsx("input",{type:"number",min:-180,max:180,step:1,value:t,onChange:o=>i(Number(o.target.value)||0),onBlur:s,"aria-label":`${e} ${r} angle degrees`,"data-hinge":n})]})}const EM={high:"High: forced by the measured geometry (e.g. walls that close a rectangle).",medium:"Medium: the usual assembly choice; geometry allows alternatives.",low:"Low: a guess, or left flat — check this crease."},Zh=({c:n})=>n?f.jsx("span",{className:`conf conf-${n}`,title:EM[n],children:n}):null;function qh(n){var P,C;const e=n.parts??["fold","selection","hinges"],{graph:t,rig:i,rigError:s,edit:r,dispatch:o,current:a,setProgress:l,selected:c,setSelected:h,proposal:d,check:u}=n,x=new Map(t.panels.map(b=>[b.id,b.label])),g=(c==null?void 0:c.kind)==="panel"?t.panels.find(b=>b.id===c.id):void 0,v=(c==null?void 0:c.kind)==="hinge"?t.hinges.find(b=>b.id===c.id):void 0,p=b=>r.angles[b]??0,m=()=>o({type:"endGesture"}),S=(b,U)=>o({type:"setAngle",hingeId:b,deg:U}),_=r.mode==="sequence",T=b=>{const U=r.timeline.findIndex(E=>E.ops.some(A=>A.hingeId===b));return U<0?null:U+1};return f.jsxs(_M,{className:e.includes("selection")?"inspector":"fold-panel",children:[e.includes("selection")&&n.selectedStepId&&f.jsx(SM,{graph:t,edit:r,dispatch:o,stepId:n.selectedStepId,setSelectedStepId:n.setSelectedStepId,setProgress:l,totalMs:n.totalMs,setSelected:h}),e.includes("selection")&&!n.selectedStepId&&!g&&!v&&f.jsxs("div",{className:"inspector-empty",children:[f.jsx("b",{children:"Nothing selected"}),f.jsx("span",{children:"Click a panel or crease in 2D or 3D, or a step in the timeline, to inspect and edit it."})]}),e.includes("fold")&&f.jsxs(f.Fragment,{children:[f.jsxs("section",{className:"fold-controls",children:[f.jsx("h3",{children:"Fold"}),f.jsxs("div",{className:"chips",children:[f.jsx("button",{className:"chip primary",onClick:n.onSuggest,disabled:!i,children:"Suggest folding"}),f.jsx("button",{className:"chip",onClick:()=>l(1),children:"Preview assembled pose"}),f.jsx("button",{className:"chip",onClick:()=>l(0),children:"Return to flat"})]}),f.jsxs("label",{className:"toggle",children:[f.jsx("input",{type:"checkbox",checked:n.liveEdits,onChange:b=>n.setLiveEdits(b.target.checked)})," Show angle edits immediately (jumps to 100%)"]}),f.jsxs("p",{className:"legend-note",children:[f.jsx("b",{children:"Target"})," = the angle a hinge reaches when assembled. ",f.jsx("b",{children:"Now"})," = the angle at the timeline playhead",_?" (sequence)":" (all together)",". Positive folds the child away from you (drawn side outward)."]}),i&&f.jsxs("label",{className:"root-row",children:["Root panel",f.jsx("select",{value:i.rootId,onChange:b=>o({type:"setRoot",rootId:b.target.value}),"aria-label":"Root panel",children:t.panels.map(b=>f.jsx("option",{value:b.id,children:b.label},b.id))})]}),s&&f.jsx("p",{className:"error",children:s}),i&&i.closureHinges.length>0&&f.jsxs("p",{className:"warning",children:[i.closureHinges.length," hinge(s) close a cycle and are not rotated (closure constraints)."]}),i&&i.unreachable.length>0&&f.jsxs("p",{className:"warning",children:[i.unreachable.length," panel(s) are on another piece and stay flat."]}),f.jsx("button",{className:"chip",onClick:()=>o({type:"resetAll"}),children:"Reset all to 0°"})]}),d&&Object.keys(r.suggestion).length>0&&f.jsxs("section",{className:"proposal-report",children:[f.jsx("h3",{children:"Proposal"}),d.tube&&f.jsxs("p",{children:["Rectangular tube ",f.jsx("b",{children:d.tube.walls.map(b=>x.get(b)).join("–")}),": ",Xt(d.tube.widthMm,1)," × ",Xt(d.tube.depthMm,1)," mm, confirmed by ",d.tube.lidEvidence," end closure(s)."]}),d.tray&&f.jsxs("p",{children:["Tray: base ",f.jsx("b",{children:x.get(d.tray.base)})," ",d.tray.baseMm.map(b=>Xt(b,1)).join(" × ")," mm, walls ",f.jsx("b",{children:d.tray.walls.map(b=>x.get(b)).join(", ")})," of ",Xt(d.tray.heightMm,1)," mm."]}),d.family==="unknown"&&f.jsx("p",{className:"warning",children:"No known family (rectangular tube or tray) recognised; most hinges are low-confidence guesses or left flat."}),(u==null?void 0:u.trayCornerGapMm)!=null&&f.jsxs("p",{children:["At the current targets: largest wall-corner gap ",f.jsxs("b",{children:[Xt(u.trayCornerGapMm,1)," mm"]}),"."]}),(u==null?void 0:u.tubeGapMm)!=null&&f.jsxs("p",{children:["At the current targets: seam gap ",f.jsxs("b",{children:[Xt(u.tubeGapMm,1)," mm"]}),", outer section ",u.crossSectionMm.map(b=>Xt(b,1)).join(" × ")," mm."]}),d.notes.map((b,U)=>f.jsx("p",{className:"legend-note",children:b},U)),u&&u.overlaps.length>0&&f.jsxs("p",{className:"legend-note",children:[f.jsx("b",{children:"Surfaces that meet at 100%"})," (glue, double wall, tucks, or a clash; not checked for thickness): ",u.overlaps.map(b=>`${x.get(b.a)}/${x.get(b.b)}`).join(", ")]}),f.jsx("p",{className:"legend-note",children:"This is a geometric candidate, not a verified assembly. Gluing, locking, board thickness and collisions are not checked. Every value below can be overridden."})]})]}),e.includes("selection")&&g&&f.jsxs("section",{children:[f.jsxs("h3",{children:["Panel ",g.label,r.suggestion&&Object.values(r.suggestion).find(b=>(i==null?void 0:i.childOf[b.hingeId])===g.id)?f.jsxs("span",{className:"role",children:[" ",Object.values(r.suggestion).find(b=>(i==null?void 0:i.childOf[b.hingeId])===g.id).role]}):null]}),f.jsx("code",{children:g.id}),f.jsxs("dl",{children:[f.jsx("dt",{children:"Size (bbox)"}),f.jsxs("dd",{children:[bM(g.outer).map(b=>Xt(b)).join(" × ")," mm"]}),f.jsx("dt",{children:"Area"}),f.jsxs("dd",{children:[Xt(g.areaMm2)," mm²"]}),f.jsx("dt",{children:"Vertices · holes · slits"}),f.jsxs("dd",{children:[g.outer.length," · ",g.holes.length," · ",g.slits.length]}),i&&f.jsxs(f.Fragment,{children:[f.jsx("dt",{children:"Parent"}),f.jsx("dd",{children:i.parent[g.id]?f.jsxs(f.Fragment,{children:[x.get(i.parent[g.id])," via ",f.jsx("button",{className:"chip hinge",onClick:()=>h({kind:"hinge",id:i.parentHinge[g.id]}),children:(P=t.hinges.find(b=>b.id===i.parentHinge[g.id]))==null?void 0:P.label})]}):"— (root)"})]}),f.jsx("dt",{children:"Hinges"}),f.jsx("dd",{children:t.hinges.filter(b=>b.panelA===g.id||b.panelB===g.id).map(b=>f.jsxs("button",{className:"chip hinge",onClick:()=>h({kind:"hinge",id:b.id}),children:[b.label," → ",x.get(b.panelA===g.id?b.panelB:b.panelA)]},b.id))})]}),i&&i.rootId!==g.id&&f.jsx("button",{className:"chip",onClick:()=>o({type:"setRoot",rootId:g.id}),children:"Make root"})]}),e.includes("selection")&&v&&f.jsxs("section",{className:"hinge-detail",children:[f.jsxs("h3",{children:["Hinge ",v.label," ",f.jsx(Zh,{c:(C=r.suggestion[v.id])==null?void 0:C.confidence}),r.manual[v.id]&&f.jsx("span",{className:"manual",children:"manual"})]}),f.jsx("code",{children:v.id}),(i==null?void 0:i.childOf[v.id])&&f.jsxs("p",{className:"legend-note",children:["Rotates ",f.jsx("b",{children:x.get(i.childOf[v.id])})," (and its subtree) about this crease, relative to ",f.jsx("b",{children:x.get(i.parent[i.childOf[v.id]])}),"."]}),f.jsxs("div",{className:"target-now",children:[f.jsxs("span",{children:["Target ",f.jsx("b",{"data-testid":"sel-target",children:Rs(p(v.id))})]}),f.jsxs("span",{children:["Now ",f.jsx("b",{"data-testid":"sel-now",children:Rs(a[v.id]??0)})]})]}),f.jsx(Bo,{id:v.id,label:v.label,value:p(v.id),onChange:b=>S(v.id,b),onDone:m}),f.jsxs("div",{className:"chips",children:[[-180,-90,0,90,180].map(b=>f.jsxs("button",{className:"chip",onClick:()=>{S(v.id,b),m()},children:[b>0?"+":"",b,"°"]},b)),f.jsx("button",{className:"chip",onClick:()=>o({type:"flip",hingeId:v.id}),children:"Flip direction"}),r.manual[v.id]&&r.suggestion[v.id]&&f.jsxs("button",{className:"chip",onClick:()=>o({type:"clearManual",hingeId:v.id}),children:["Use suggestion (",Rs(r.suggestion[v.id].angleDeg),")"]})]}),r.suggestion[v.id]&&f.jsx("p",{className:"reason",children:r.suggestion[v.id].reason}),r.suggestion[v.id]&&r.suggestion[v.id].confidence!=="high"&&!r.manual[v.id]&&f.jsxs("p",{className:"why-uncertain",children:[f.jsx("b",{children:"Why not certain?"})," ",r.suggestion[v.id].confidence==="low"?"The drawing gives no reliable clue for this crease: an SVG only says where to fold, not which way, how far, or in which order. Check it against a physical sample and set the angle and direction here.":"Geometry allows this fold, but direction or angle is a common convention rather than a necessity (e.g. flaps tucked inside). Flip it or change the angle if your design differs."]}),f.jsxs("dl",{children:[f.jsx("dt",{children:"Panels"}),f.jsxs("dd",{children:[f.jsx("button",{className:"chip",onClick:()=>h({kind:"panel",id:v.panelA}),children:x.get(v.panelA)}),f.jsx("button",{className:"chip",onClick:()=>h({kind:"panel",id:v.panelB}),children:x.get(v.panelB)})]}),f.jsx("dt",{children:"Length"}),f.jsxs("dd",{children:[Xt(v.lengthMm)," mm",v.segments.length>1?` in ${v.segments.length} pieces`:""]}),f.jsx("dt",{children:"Axis (flat mm)"}),f.jsxs("dd",{children:["(",Xt(v.a[0]),", ",Xt(v.a[1]),") → (",Xt(v.b[0]),", ",Xt(v.b[1]),")"]}),f.jsx("dt",{children:"Source crease"}),f.jsx("dd",{children:v.sourceCreaseIds.join(", ")})]})]}),e.includes("hinges")&&f.jsxs("section",{children:[f.jsx("h3",{children:"Hinge angles"}),f.jsx("div",{className:"hinge-list",children:t.hinges.map(b=>{var U;return f.jsxs("div",{className:`hinge-row ${(c==null?void 0:c.kind)==="hinge"&&c.id===b.id?"on":""}`,children:[f.jsxs("div",{className:"hinge-row-head",children:[f.jsxs("button",{className:"chip hinge",onClick:()=>h({kind:"hinge",id:b.id}),title:b.id,children:[b.label," ",x.get(b.panelA),"–",x.get(b.panelB)]}),f.jsx(Zh,{c:(U=r.suggestion[b.id])==null?void 0:U.confidence}),r.manual[b.id]&&f.jsx("span",{className:"manual",children:"manual"}),f.jsxs("span",{className:"now","data-testid":`now-${b.label}`,children:["now ",Rs(a[b.id]??0)]}),_&&f.jsx("span",{className:"step-tag",children:T(b.id)?`step ${T(b.id)}`:"no step"})]}),f.jsx(Bo,{id:b.id,label:b.label,value:p(b.id),onChange:E=>S(b.id,E),onDone:m})]},b.id)})}),f.jsx("p",{className:"legend-note",children:"Hatched = cut-out waste. Green ring = drawing gap bridged. Amber ring = open cut end."})]})]})}const Cs=[],Yh=2e3,la=()=>typeof performance<"u"?performance.now():Date.now();function tl(n,e,t){var s;const i=la();Cs.push({label:n,ms:i-e,at:i,detail:t}),Cs.length>Yh&&Cs.splice(0,Cs.length-Yh);try{(s=performance.measure)==null||s.call(performance,`elham:${n}`,{start:e,end:i})}catch{}}function Gt(n,e,t){const i=la();try{return e()}finally{tl(n,i,t)}}async function Ir(n,e,t){const i=la();try{return await e()}finally{tl(n,i,t)}}function cy(n,e){tl(n,la(),e)}typeof window<"u"&&(window.__elhamPerf=Cs);const wM=n=>Math.round(n*137.508%360),TM=n=>`hsl(${wM(n)}, 70%, 80%)`,Kh=n=>n.map(e=>`${e[0]},${e[1]}`).join(" "),AM=n=>`M${n.map(e=>`${e[0]} ${e[1]}`).join("L")}Z`;function RM({graph:n,canvas:e,selected:t,onSelect:i,uncertain:s}){const r=Math.max(e.widthMm,e.heightMm)/300,o=(t==null?void 0:t.kind)==="hinge"?n.hinges.find(a=>a.id===t.id):void 0;return f.jsxs("svg",{className:"panel-debug",viewBox:`0 0 ${e.widthMm} ${e.heightMm}`,role:"img","aria-label":`${n.panels.length} detected panels and ${n.hinges.length} hinges`,onClick:()=>i(null),children:[f.jsx("defs",{children:f.jsxs("pattern",{id:"waste-hatch",width:2*r,height:2*r,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[f.jsx("rect",{width:2*r,height:2*r,fill:"#f1f5f9"}),f.jsx("line",{x1:"0",y1:"0",x2:"0",y2:2*r,stroke:"#94a3b8",strokeWidth:r*.5})]})}),n.panels.map((a,l)=>{const c=(t==null?void 0:t.kind)==="panel"&&t.id===a.id,h=o&&(o.panelA===a.id||o.panelB===a.id);return f.jsxs("g",{className:"dbg-panel",onClick:d=>{d.stopPropagation(),i({kind:"panel",id:a.id})},children:[f.jsx("path",{d:[a.outer,...a.holes].map(AM).join(" "),fillRule:"evenodd",fill:TM(l),fillOpacity:c||h?.95:.72,stroke:c?"#111827":"#334155",strokeWidth:c?r*.7:r*.22}),a.slits.map((d,u)=>f.jsx("polyline",{points:Kh(d),fill:"none",stroke:"#0f172a",strokeWidth:r*.5},u))]},a.id)}),n.waste.map((a,l)=>f.jsx("polygon",{points:Kh(a.outer),fill:"url(#waste-hatch)",stroke:"#64748b",strokeWidth:r*.2,children:f.jsxs("title",{children:["Waste (cut-out) · ",a.areaMm2.toFixed(1)," mm²"]})},l)),n.hinges.map(a=>{const l=(t==null?void 0:t.kind)==="hinge"&&t.id===a.id,c=[(a.a[0]+a.b[0])/2,(a.a[1]+a.b[1])/2];return f.jsxs("g",{className:"dbg-hinge",onClick:h=>{h.stopPropagation(),i({kind:"hinge",id:a.id})},children:[a.segments.map(([h,d],u)=>f.jsxs("g",{children:[f.jsx("line",{x1:h[0],y1:h[1],x2:d[0],y2:d[1],stroke:"transparent",strokeWidth:r*4}),f.jsx("line",{x1:h[0],y1:h[1],x2:d[0],y2:d[1],stroke:l?"#7c3aed":"#e11d48",strokeWidth:l?r*2:r*1.1,strokeLinecap:"round"})]},u)),f.jsxs("text",{x:c[0],y:c[1],className:"dbg-hinge-label",fontSize:r*3.6,strokeWidth:r*.8,children:[a.label,s!=null&&s[a.id]?"?":""]})]},a.id)}),n.panels.map(a=>f.jsx("text",{x:a.centroid[0],y:a.centroid[1],className:"dbg-panel-label",fontSize:r*5,strokeWidth:r,children:a.label},a.id)),n.graph.repairs.map((a,l)=>f.jsx("circle",{cx:a.to[0],cy:a.to[1],r:r*2.5,fill:"none",stroke:"#16a34a",strokeWidth:r*.6,children:f.jsxs("title",{children:["Gap of ",a.distanceMm.toFixed(3)," mm bridged"]})},`r${l}`)),n.openEnds.map((a,l)=>f.jsx("circle",{cx:a[0],cy:a[1],r:r*2,fill:"none",stroke:"#f59e0b",strokeWidth:r*.6,children:f.jsx("title",{children:"Open cut end"})},`o${l}`))]})}function CM({messages:n,ready:e}){const t=n.filter(r=>r.severity==="error"),i=n.filter(r=>r.severity==="warning"),s={error:"Error",warning:"Warning",info:"Note"};return f.jsxs("section",{className:"preflight","aria-live":"polite",children:[f.jsxs("div",{className:"preflight-head",children:[f.jsx("strong",{children:"Preflight"}),f.jsx("span",{className:`badge ${t.length?"bad":e?"good":"neutral"}`,children:t.length?`${t.length} error${t.length===1?"":"s"}`:e?i.length?`${i.length} warning${i.length===1?"":"s"}`:"Clean":"Waiting"})]}),!n.length&&f.jsx("p",{children:e?"No issues found.":"Upload a dieline SVG to begin."}),n.map((r,o)=>f.jsxs("p",{className:r.severity,children:[f.jsxs("strong",{children:[s[r.severity],":"]})," ",r.message]},`${r.code}-${o}`))]})}function Qh({label:n,acceptLabel:e,file:t,result:i,onFile:s}){return f.jsxs("section",{className:"import-card",children:[f.jsxs("div",{className:"import-card-title",children:[f.jsx("span",{children:n}),t&&f.jsx("span",{className:"status-dot ok","aria-label":"loaded"})]}),f.jsxs("label",{className:"svg-dropzone",children:[f.jsx("input",{type:"file",accept:"image/svg+xml,.svg","aria-label":e,onChange:r=>{var a;const o=(a=r.target.files)==null?void 0:a[0];o&&s(o),r.target.value=""}}),f.jsx("strong",{children:t?"Replace SVG":e}),f.jsx("span",{children:t?`${t.name} · ${(t.size/1024).toFixed(1)} KB`:"Any size SVG"})]}),(i==null?void 0:i.canvas)&&f.jsxs("div",{className:"file-facts",children:[i.canvas.widthMm.toFixed(2)," × ",i.canvas.heightMm.toFixed(2)," mm · ",i.elementCount," elements"]}),i&&n.toLowerCase().includes("dieline")&&f.jsxs("div",{className:"count-row",children:[f.jsxs("span",{className:"cut",children:[i.counts.cut," cut"]}),f.jsxs("span",{className:"crease",children:[i.counts.crease," crease"]}),f.jsxs("span",{children:[i.counts.ignored," ignored"]}),f.jsxs("span",{className:i.counts.unknown?"unknown":"",children:[i.counts.unknown," unclassified"]})]})]})}const Jh=`<svg xmlns="http://www.w3.org/2000/svg" width="285mm" height="300mm" viewBox="0 0 285 300">
  <!-- Original synthetic dieline (Elham Fold Studio sample). Black = cut, red = crease. Public domain (CC0). -->
  <g id="CUT" fill="none" stroke="#000000" stroke-width="0.25"><path d="M10 74L25 70M25 220L10 216M10 216L10 74M195 70L265 70M265 70L265 220M265 220L195 220M145 20L145 70M75 70L75 20M145 220L145 270M75 270L75 220M75 20L79 5M79 5L141 5M141 5L145 20M145 270L141 285M141 285L79 285M79 285L75 270M25 70L27 45M27 45L67 45M67 45L75 70M145 70L147 45M147 45L187 45M187 45L195 70M75 220L67 245M67 245L27 245M27 245L25 220M195 220L187 245M187 245L147 245M147 245L145 220"/><path d="M210 110H250V180H210Z"/></g>
  <g id="CREASE" fill="none" stroke="#ff0000" stroke-width="0.25"><path d="M25 70L25 220M75 70L75 220M145 70L145 220M195 70L195 220M75 70L145 70M75 220L145 220M75 20L145 20M75 270L145 270M25 70L75 70M145 70L195 70M25 220L75 220M145 220L195 220"/></g>
  <g id="print-marks" fill="#1a1a1a"><g id="reg-tl"><path fill-rule="evenodd" d="M3.6 6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM4.1 6a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="2.4" y="5.88" width="7.2" height=".24"/><rect x="5.88" y="2.4" width=".24" height="7.2"/></g><g id="reg-tr"><path fill-rule="evenodd" d="M276.6 6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM277.1 6a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="275.4" y="5.88" width="7.2" height=".24"/><rect x="278.88" y="2.4" width=".24" height="7.2"/></g><g id="reg-bl"><path fill-rule="evenodd" d="M3.6 294a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM4.1 294a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="2.4" y="293.88" width="7.2" height=".24"/><rect x="5.88" y="290.4" width=".24" height="7.2"/></g><g id="reg-br"><path fill-rule="evenodd" d="M276.6 294a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM277.1 294a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="275.4" y="293.88" width="7.2" height=".24"/><rect x="278.88" y="290.4" width=".24" height="7.2"/></g></g>
</svg>
`,io=`<svg xmlns="http://www.w3.org/2000/svg" width="285mm" height="300mm" viewBox="0 0 285 300">
  <!-- Print (Tryck). Original artwork for the Elham Fold Studio public sample (fictional brand). CC0. -->
  <path d="M25 70H75V220H25Z" fill="#6e1d2c" stroke="#6e1d2c" stroke-width="3" stroke-linejoin="round"/>
  <path d="M75 70H145V220H75Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <path d="M145 70H195V220H145Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <path d="M195 70H265V220H195Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <path d="M75 20H145V70H75Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <path d="M75 220H145V270H75Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <path d="M75 20L79 5H141L145 20Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <path d="M75 270H145L141 285H79Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <path d="M25 70L27 45H67L75 70Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <path d="M145 70L147 45H187L195 70Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <path d="M25 220H75L67 245H27Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <path d="M145 220H195L187 245H147Z" fill="#142039" stroke="#142039" stroke-width="3" stroke-linejoin="round"/>
  <g id="front">
  <circle cx="230" cy="87" r="8.835" fill="none" stroke="#efe6d2" stroke-width="0.855"/><path fill="#c9a85a" d="M235.301 86.548L237.6 87L235.301 87.452ZM235.07 88.611L236.319 89.618L234.724 89.446ZM234.068 90.429L235.374 92.374L233.429 91.068ZM232.446 91.724L232.618 93.319L231.611 92.07ZM230.452 92.301L230 94.6L229.548 92.301ZM228.389 92.07L227.382 93.319L227.554 91.724ZM226.571 91.068L224.626 92.374L225.932 90.429ZM225.276 89.446L223.681 89.618L224.93 88.611ZM224.699 87.452L222.4 87L224.699 86.548ZM224.93 85.389L223.681 84.382L225.276 84.554ZM225.932 83.571L224.626 81.626L226.571 82.932ZM227.554 82.276L227.382 80.681L228.389 81.93ZM229.548 81.699L230 79.4L230.452 81.699ZM231.611 81.93L232.618 80.681L232.446 82.276ZM233.429 82.932L235.374 81.626L234.068 83.571ZM234.724 84.554L236.319 84.382L235.07 85.389Z"/><path fill="#efe6d2" transform="rotate(-35 230 87)" d="M230 82.63Q234.104 87 230 91.37Q225.896 87 230 82.63Z"/><path fill="none" stroke="#142039" stroke-width="0.333" transform="rotate(-35 230 87)" d="M230 83.285L230 91.151"/>
  <text x="230" y="104.2" font-size="6.6" fill="#efe6d2" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="1.188" >AURELIA</text>
  <rect x="207.5" y="107.5" width="45" height="75" rx="2" fill="none" stroke="#efe6d2" stroke-width=".35"/>
  <text x="230" y="192" font-size="5.2" fill="#efe6d2" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing=".5">EARL GREY</text>
  <text x="230" y="198.6" font-size="3.2" fill="#c9a85a" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="1.1">RESERVE</text>
  <rect x="195" y="203" width="70" height="7.5" fill="#6e1d2c"/>
  <text x="230" y="208" font-size="2.3" fill="#efe6d2" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing=".3">LOOSE LEAF BLACK TEA · BERGAMOT</text>
  <text x="230" y="215.5" font-size="2.4" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >100 g ℮</text>
  </g>
  <g id="back">
  <g id="leaves"><path fill="#1d2c4d" transform="rotate(0 84 84)" d="M84 79.4Q87.4 84 84 88.6Q80.6 84 84 79.4Z"/><path fill="#1d2c4d" transform="rotate(53 101.5 84)" d="M101.5 79.4Q104.9 84 101.5 88.6Q98.1 84 101.5 79.4Z"/><path fill="#1d2c4d" transform="rotate(106 119 84)" d="M119 79.4Q122.4 84 119 88.6Q115.6 84 119 79.4Z"/><path fill="#1d2c4d" transform="rotate(159 136.5 84)" d="M136.5 79.4Q139.9 84 136.5 88.6Q133.1 84 136.5 79.4Z"/><path fill="#1d2c4d" transform="rotate(37 92.75 97.2)" d="M92.75 92.6Q96.15 97.2 92.75 101.8Q89.35 97.2 92.75 92.6Z"/><path fill="#1d2c4d" transform="rotate(90 110.25 97.2)" d="M110.25 92.6Q113.65 97.2 110.25 101.8Q106.85 97.2 110.25 92.6Z"/><path fill="#1d2c4d" transform="rotate(143 127.75 97.2)" d="M127.75 92.6Q131.15 97.2 127.75 101.8Q124.35 97.2 127.75 92.6Z"/><path fill="#1d2c4d" transform="rotate(74 84 110.4)" d="M84 105.8Q87.4 110.4 84 115Q80.6 110.4 84 105.8Z"/><path fill="#1d2c4d" transform="rotate(127 101.5 110.4)" d="M101.5 105.8Q104.9 110.4 101.5 115Q98.1 110.4 101.5 105.8Z"/><path fill="#1d2c4d" transform="rotate(180 119 110.4)" d="M119 105.8Q122.4 110.4 119 115Q115.6 110.4 119 105.8Z"/><path fill="#1d2c4d" transform="rotate(233 136.5 110.4)" d="M136.5 105.8Q139.9 110.4 136.5 115Q133.1 110.4 136.5 105.8Z"/><path fill="#1d2c4d" transform="rotate(111 92.75 123.6)" d="M92.75 119Q96.15 123.6 92.75 128.2Q89.35 123.6 92.75 119Z"/><path fill="#1d2c4d" transform="rotate(164 110.25 123.6)" d="M110.25 119Q113.65 123.6 110.25 128.2Q106.85 123.6 110.25 119Z"/><path fill="#1d2c4d" transform="rotate(217 127.75 123.6)" d="M127.75 119Q131.15 123.6 127.75 128.2Q124.35 123.6 127.75 119Z"/><path fill="#1d2c4d" transform="rotate(148 84 136.8)" d="M84 132.2Q87.4 136.8 84 141.4Q80.6 136.8 84 132.2Z"/><path fill="#1d2c4d" transform="rotate(201 101.5 136.8)" d="M101.5 132.2Q104.9 136.8 101.5 141.4Q98.1 136.8 101.5 132.2Z"/><path fill="#1d2c4d" transform="rotate(254 119 136.8)" d="M119 132.2Q122.4 136.8 119 141.4Q115.6 136.8 119 132.2Z"/><path fill="#1d2c4d" transform="rotate(307 136.5 136.8)" d="M136.5 132.2Q139.9 136.8 136.5 141.4Q133.1 136.8 136.5 132.2Z"/><path fill="#1d2c4d" transform="rotate(185 92.75 150)" d="M92.75 145.4Q96.15 150 92.75 154.6Q89.35 150 92.75 145.4Z"/><path fill="#1d2c4d" transform="rotate(238 110.25 150)" d="M110.25 145.4Q113.65 150 110.25 154.6Q106.85 150 110.25 145.4Z"/><path fill="#1d2c4d" transform="rotate(291 127.75 150)" d="M127.75 145.4Q131.15 150 127.75 154.6Q124.35 150 127.75 145.4Z"/><path fill="#1d2c4d" transform="rotate(222 84 163.2)" d="M84 158.6Q87.4 163.2 84 167.8Q80.6 163.2 84 158.6Z"/><path fill="#1d2c4d" transform="rotate(275 101.5 163.2)" d="M101.5 158.6Q104.9 163.2 101.5 167.8Q98.1 163.2 101.5 158.6Z"/><path fill="#1d2c4d" transform="rotate(328 119 163.2)" d="M119 158.6Q122.4 163.2 119 167.8Q115.6 163.2 119 158.6Z"/><path fill="#1d2c4d" transform="rotate(21 136.5 163.2)" d="M136.5 158.6Q139.9 163.2 136.5 167.8Q133.1 163.2 136.5 158.6Z"/></g>
  <circle cx="110" cy="80" r="3.906" fill="none" stroke="#c9a85a" stroke-width="0.378"/><path fill="#c9a85a" transform="rotate(-35 110 80)" d="M110 78.068Q111.814 80 110 81.932Q108.186 80 110 78.068Z"/>
  <text x="110" y="176" font-size="3.4" fill="#efe6d2" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" font-style="italic">A quiet cup at dusk</text>
  <text x="110" y="182.5" font-size="2.2" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >Ceylon black tea scented with cold-pressed</text>
  <text x="110" y="186.1" font-size="2.2" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >bergamot, rolled by hand and dried slowly</text>
  <text x="110" y="189.7" font-size="2.2" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >over cedar. Steep, breathe, and stay a while.</text>
  <rect x="118" y="199" width="22" height="15" fill="#efe6d2"/>
  <g fill="#142039"><rect x="120" y="200.5" width="0.8" height="10.2"/><rect x="121.1" y="200.5" width="0.45" height="10.2"/><rect x="121.7" y="200.5" width="0.45" height="10.2"/><rect x="123" y="200.5" width="0.8" height="10.2"/><rect x="123.6" y="200.5" width="0.45" height="10.2"/><rect x="124.9" y="200.5" width="0.45" height="10.2"/><rect x="126.2" y="200.5" width="0.8" height="10.2"/><rect x="126.8" y="200.5" width="0.45" height="10.2"/><rect x="128.3" y="200.5" width="0.45" height="10.2"/><rect x="129.2" y="200.5" width="0.8" height="10.2"/><rect x="130.1" y="200.5" width="0.45" height="10.2"/><rect x="131.5" y="200.5" width="0.45" height="10.2"/><rect x="132.6" y="200.5" width="0.8" height="10.2"/><rect x="133.2" y="200.5" width="0.45" height="10.2"/><rect x="134.8" y="200.5" width="0.45" height="10.2"/><rect x="135.7" y="200.5" width="0.8" height="10.2"/><rect x="136.9" y="200.5" width="0.45" height="10.2"/><rect x="137.6" y="200.5" width="0.45" height="10.2"/><rect x="138.9" y="200.5" width="0.8" height="10.2"/></g>
  <text x="129" y="213.2" font-size="1.7" fill="#142039" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >0 12345 67890 5</text>
  <text x="96" y="207" font-size="2" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >Store cool and dry.</text>
  <text x="96" y="210.5" font-size="2" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >Best before: see base.</text>
  </g>
  <g id="side-left">
  <rect x="32" y="79.5" width="36" height=".5" fill="#c9a85a"/><rect x="32" y="210" width="36" height=".5" fill="#c9a85a"/>
  <text x="50" y="145" font-size="10.5" fill="#efe6d2" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="1.89" transform="rotate(-90 50 145)" dominant-baseline="middle">AURELIA</text>
  </g>
  <g id="side-right">
  <text x="170" y="92" font-size="3.3" fill="#c9a85a" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="1">BREWING</text>
  <circle cx="170" cy="112" r="10" fill="none" stroke="#8fa8c8" stroke-width=".4"/><text x="170" y="113" font-size="4" fill="#efe6d2" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >95 °C</text><text x="170" y="117.5" font-size="2.2" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >water</text>
  <circle cx="170" cy="142" r="10" fill="none" stroke="#8fa8c8" stroke-width=".4"/><text x="170" y="143" font-size="4" fill="#efe6d2" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >4 min</text><text x="170" y="147.5" font-size="2.2" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >steep</text>
  <circle cx="170" cy="172" r="10" fill="none" stroke="#8fa8c8" stroke-width=".4"/><text x="170" y="173" font-size="4" fill="#efe6d2" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >2.5 g</text><text x="170" y="177.5" font-size="2.2" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >per cup</text>
  <text x="170" y="210" font-size="2" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >elham fold studio · sample</text>
  </g>
  <g id="lid" transform="rotate(180 110 45)">
  <rect x="79" y="24" width="62" height="42" rx="1.5" fill="none" stroke="#c9a85a" stroke-width=".3"/>
  <circle cx="110" cy="41" r="10.695" fill="none" stroke="#efe6d2" stroke-width="1.035"/><path fill="#c9a85a" d="M116.417 40.453L119.2 41L116.417 41.547ZM116.138 42.95L117.65 44.169L115.719 43.961ZM114.924 45.151L116.505 47.505L114.151 45.924ZM112.961 46.719L113.169 48.65L111.95 47.138ZM110.547 47.417L110 50.2L109.453 47.417ZM108.05 47.138L106.831 48.65L107.039 46.719ZM105.849 45.924L103.495 47.505L105.076 45.151ZM104.281 43.961L102.35 44.169L103.862 42.95ZM103.583 41.547L100.8 41L103.583 40.453ZM103.862 39.05L102.35 37.831L104.281 38.039ZM105.076 36.849L103.495 34.495L105.849 36.076ZM107.039 35.281L106.831 33.35L108.05 34.862ZM109.453 34.583L110 31.8L110.547 34.583ZM111.95 34.862L113.169 33.35L112.961 35.281ZM114.151 36.076L116.505 34.495L114.924 36.849ZM115.719 38.039L117.65 37.831L116.138 39.05Z"/><path fill="#efe6d2" transform="rotate(-35 110 41)" d="M110 35.71Q114.968 41 110 46.29Q105.032 41 110 35.71Z"/><path fill="none" stroke="#142039" stroke-width="0.403" transform="rotate(-35 110 41)" d="M110 36.504L110 46.026"/>
  <text x="110" y="61" font-size="4.6" fill="#efe6d2" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="0.828" >AURELIA</text>
  </g>
  <g id="base" transform="rotate(180 110 245)"><text x="110" y="243" font-size="2.3" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >Packed in a recyclable carton</text><text x="110" y="247" font-size="2.3" fill="#8fa8c8" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" >LOT A-0423 · BB 2028-11</text></g>
  <g id="print-marks" fill="#1a1a1a"><g id="reg-tl"><path fill-rule="evenodd" d="M3.6 6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM4.1 6a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="2.4" y="5.88" width="7.2" height=".24"/><rect x="5.88" y="2.4" width=".24" height="7.2"/></g><g id="reg-tr"><path fill-rule="evenodd" d="M276.6 6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM277.1 6a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="275.4" y="5.88" width="7.2" height=".24"/><rect x="278.88" y="2.4" width=".24" height="7.2"/></g><g id="reg-bl"><path fill-rule="evenodd" d="M3.6 294a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM4.1 294a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="2.4" y="293.88" width="7.2" height=".24"/><rect x="5.88" y="290.4" width=".24" height="7.2"/></g><g id="reg-br"><path fill-rule="evenodd" d="M276.6 294a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM277.1 294a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="275.4" y="293.88" width="7.2" height=".24"/><rect x="278.88" y="290.4" width=".24" height="7.2"/></g></g>
</svg>
`,LM=`<svg xmlns="http://www.w3.org/2000/svg" width="285mm" height="300mm" viewBox="0 0 285 300">
  <!-- Foliering (gold foil mask). Original artwork for the Elham Fold Studio public sample (fictional brand). CC0. -->
  <g id="foil" fill="#000000">
  <circle cx="230" cy="87" r="8.835" fill="none" stroke="#000000" stroke-width="0.855"/><path fill="#000000" d="M235.301 86.548L237.6 87L235.301 87.452ZM235.07 88.611L236.319 89.618L234.724 89.446ZM234.068 90.429L235.374 92.374L233.429 91.068ZM232.446 91.724L232.618 93.319L231.611 92.07ZM230.452 92.301L230 94.6L229.548 92.301ZM228.389 92.07L227.382 93.319L227.554 91.724ZM226.571 91.068L224.626 92.374L225.932 90.429ZM225.276 89.446L223.681 89.618L224.93 88.611ZM224.699 87.452L222.4 87L224.699 86.548ZM224.93 85.389L223.681 84.382L225.276 84.554ZM225.932 83.571L224.626 81.626L226.571 82.932ZM227.554 82.276L227.382 80.681L228.389 81.93ZM229.548 81.699L230 79.4L230.452 81.699ZM231.611 81.93L232.618 80.681L232.446 82.276ZM233.429 82.932L235.374 81.626L234.068 83.571ZM234.724 84.554L236.319 84.382L235.07 85.389Z"/>
  <text x="230" y="104.2" font-size="6.6" fill="#000000" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="1.188" >AURELIA</text>
  <rect x="207.5" y="107.5" width="45" height="75" rx="2" fill="none" stroke="#000000" stroke-width=".9"/>
  <text x="230" y="198.6" font-size="3.2" fill="#000000" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="1.1">RESERVE</text>
  <rect x="32" y="79.5" width="36" height=".5"/><rect x="32" y="210" width="36" height=".5"/>
  <circle cx="110" cy="80" r="3.906" fill="none" stroke="#000000" stroke-width="0.378"/><path fill="#000000" transform="rotate(-35 110 80)" d="M110 78.068Q111.814 80 110 81.932Q108.186 80 110 78.068Z"/>
  <g transform="rotate(180 110 45)"><rect x="79" y="24" width="62" height="42" rx="1.5" fill="none" stroke="#000000" stroke-width=".7"/><circle cx="110" cy="41" r="10.695" fill="none" stroke="#000000" stroke-width="1.035"/><path fill="#000000" d="M116.417 40.453L119.2 41L116.417 41.547ZM116.138 42.95L117.65 44.169L115.719 43.961ZM114.924 45.151L116.505 47.505L114.151 45.924ZM112.961 46.719L113.169 48.65L111.95 47.138ZM110.547 47.417L110 50.2L109.453 47.417ZM108.05 47.138L106.831 48.65L107.039 46.719ZM105.849 45.924L103.495 47.505L105.076 45.151ZM104.281 43.961L102.35 44.169L103.862 42.95ZM103.583 41.547L100.8 41L103.583 40.453ZM103.862 39.05L102.35 37.831L104.281 38.039ZM105.076 36.849L103.495 34.495L105.849 36.076ZM107.039 35.281L106.831 33.35L108.05 34.862ZM109.453 34.583L110 31.8L110.547 34.583ZM111.95 34.862L113.169 33.35L112.961 35.281ZM114.151 36.076L116.505 34.495L114.924 36.849ZM115.719 38.039L117.65 37.831L116.138 39.05Z"/><text x="110" y="61" font-size="4.6" fill="#000000" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="0.828" >AURELIA</text></g>
  </g>
  <g id="print-marks" fill="#1a1a1a"><g id="reg-tl"><path fill-rule="evenodd" d="M3.6 6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM4.1 6a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="2.4" y="5.88" width="7.2" height=".24"/><rect x="5.88" y="2.4" width=".24" height="7.2"/></g><g id="reg-tr"><path fill-rule="evenodd" d="M276.6 6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM277.1 6a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="275.4" y="5.88" width="7.2" height=".24"/><rect x="278.88" y="2.4" width=".24" height="7.2"/></g><g id="reg-bl"><path fill-rule="evenodd" d="M3.6 294a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM4.1 294a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="2.4" y="293.88" width="7.2" height=".24"/><rect x="5.88" y="290.4" width=".24" height="7.2"/></g><g id="reg-br"><path fill-rule="evenodd" d="M276.6 294a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM277.1 294a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="275.4" y="293.88" width="7.2" height=".24"/><rect x="278.88" y="290.4" width=".24" height="7.2"/></g></g>
</svg>
`,PM=`<svg xmlns="http://www.w3.org/2000/svg" width="285mm" height="300mm" viewBox="0 0 285 300">
  <!-- UV-lack (spot UV mask). Original artwork for the Elham Fold Studio public sample (fictional brand). CC0. -->
  <g id="leaves"><path fill="#000000" transform="rotate(0 84 84)" d="M84 79.4Q87.4 84 84 88.6Q80.6 84 84 79.4Z"/><path fill="#000000" transform="rotate(53 101.5 84)" d="M101.5 79.4Q104.9 84 101.5 88.6Q98.1 84 101.5 79.4Z"/><path fill="#000000" transform="rotate(106 119 84)" d="M119 79.4Q122.4 84 119 88.6Q115.6 84 119 79.4Z"/><path fill="#000000" transform="rotate(159 136.5 84)" d="M136.5 79.4Q139.9 84 136.5 88.6Q133.1 84 136.5 79.4Z"/><path fill="#000000" transform="rotate(37 92.75 97.2)" d="M92.75 92.6Q96.15 97.2 92.75 101.8Q89.35 97.2 92.75 92.6Z"/><path fill="#000000" transform="rotate(90 110.25 97.2)" d="M110.25 92.6Q113.65 97.2 110.25 101.8Q106.85 97.2 110.25 92.6Z"/><path fill="#000000" transform="rotate(143 127.75 97.2)" d="M127.75 92.6Q131.15 97.2 127.75 101.8Q124.35 97.2 127.75 92.6Z"/><path fill="#000000" transform="rotate(74 84 110.4)" d="M84 105.8Q87.4 110.4 84 115Q80.6 110.4 84 105.8Z"/><path fill="#000000" transform="rotate(127 101.5 110.4)" d="M101.5 105.8Q104.9 110.4 101.5 115Q98.1 110.4 101.5 105.8Z"/><path fill="#000000" transform="rotate(180 119 110.4)" d="M119 105.8Q122.4 110.4 119 115Q115.6 110.4 119 105.8Z"/><path fill="#000000" transform="rotate(233 136.5 110.4)" d="M136.5 105.8Q139.9 110.4 136.5 115Q133.1 110.4 136.5 105.8Z"/><path fill="#000000" transform="rotate(111 92.75 123.6)" d="M92.75 119Q96.15 123.6 92.75 128.2Q89.35 123.6 92.75 119Z"/><path fill="#000000" transform="rotate(164 110.25 123.6)" d="M110.25 119Q113.65 123.6 110.25 128.2Q106.85 123.6 110.25 119Z"/><path fill="#000000" transform="rotate(217 127.75 123.6)" d="M127.75 119Q131.15 123.6 127.75 128.2Q124.35 123.6 127.75 119Z"/><path fill="#000000" transform="rotate(148 84 136.8)" d="M84 132.2Q87.4 136.8 84 141.4Q80.6 136.8 84 132.2Z"/><path fill="#000000" transform="rotate(201 101.5 136.8)" d="M101.5 132.2Q104.9 136.8 101.5 141.4Q98.1 136.8 101.5 132.2Z"/><path fill="#000000" transform="rotate(254 119 136.8)" d="M119 132.2Q122.4 136.8 119 141.4Q115.6 136.8 119 132.2Z"/><path fill="#000000" transform="rotate(307 136.5 136.8)" d="M136.5 132.2Q139.9 136.8 136.5 141.4Q133.1 136.8 136.5 132.2Z"/><path fill="#000000" transform="rotate(185 92.75 150)" d="M92.75 145.4Q96.15 150 92.75 154.6Q89.35 150 92.75 145.4Z"/><path fill="#000000" transform="rotate(238 110.25 150)" d="M110.25 145.4Q113.65 150 110.25 154.6Q106.85 150 110.25 145.4Z"/><path fill="#000000" transform="rotate(291 127.75 150)" d="M127.75 145.4Q131.15 150 127.75 154.6Q124.35 150 127.75 145.4Z"/><path fill="#000000" transform="rotate(222 84 163.2)" d="M84 158.6Q87.4 163.2 84 167.8Q80.6 163.2 84 158.6Z"/><path fill="#000000" transform="rotate(275 101.5 163.2)" d="M101.5 158.6Q104.9 163.2 101.5 167.8Q98.1 163.2 101.5 158.6Z"/><path fill="#000000" transform="rotate(328 119 163.2)" d="M119 158.6Q122.4 163.2 119 167.8Q115.6 163.2 119 158.6Z"/><path fill="#000000" transform="rotate(21 136.5 163.2)" d="M136.5 158.6Q139.9 163.2 136.5 167.8Q133.1 163.2 136.5 158.6Z"/></g>
  <g fill="#000000"><text x="50" y="145" font-size="10.5" fill="#000000" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="1.89" transform="rotate(-90 50 145)" dominant-baseline="middle">AURELIA</text>
  <text x="230" y="192" font-size="5.2" fill="#000000" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing=".5">EARL GREY</text>
  <rect x="195" y="203" width="70" height="7.5"/>
  <path fill="#000000" transform="rotate(-35 230 87)" d="M230 82.63Q234.104 87 230 91.37Q225.896 87 230 82.63Z"/><g transform="rotate(180 110 45)"><path fill="#000000" transform="rotate(-35 110 41)" d="M110 35.71Q114.968 41 110 46.29Q105.032 41 110 35.71Z"/></g></g>
  <g id="print-marks" fill="#1a1a1a"><g id="reg-tl"><path fill-rule="evenodd" d="M3.6 6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM4.1 6a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="2.4" y="5.88" width="7.2" height=".24"/><rect x="5.88" y="2.4" width=".24" height="7.2"/></g><g id="reg-tr"><path fill-rule="evenodd" d="M276.6 6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM277.1 6a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="275.4" y="5.88" width="7.2" height=".24"/><rect x="278.88" y="2.4" width=".24" height="7.2"/></g><g id="reg-bl"><path fill-rule="evenodd" d="M3.6 294a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM4.1 294a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="2.4" y="293.88" width="7.2" height=".24"/><rect x="5.88" y="290.4" width=".24" height="7.2"/></g><g id="reg-br"><path fill-rule="evenodd" d="M276.6 294a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM277.1 294a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="275.4" y="293.88" width="7.2" height=".24"/><rect x="278.88" y="290.4" width=".24" height="7.2"/></g></g>
</svg>
`,NM=`<svg xmlns="http://www.w3.org/2000/svg" width="285mm" height="300mm" viewBox="0 0 285 300">
  <!-- Prägling (emboss mask; raised by default). Original artwork for the Elham Fold Studio public sample (fictional brand). CC0. -->
  <g fill="#000000">
  <circle cx="230" cy="87" r="8.835" fill="none" stroke="#000000" stroke-width="0.855"/><path fill="#000000" d="M235.301 86.548L237.6 87L235.301 87.452ZM235.07 88.611L236.319 89.618L234.724 89.446ZM234.068 90.429L235.374 92.374L233.429 91.068ZM232.446 91.724L232.618 93.319L231.611 92.07ZM230.452 92.301L230 94.6L229.548 92.301ZM228.389 92.07L227.382 93.319L227.554 91.724ZM226.571 91.068L224.626 92.374L225.932 90.429ZM225.276 89.446L223.681 89.618L224.93 88.611ZM224.699 87.452L222.4 87L224.699 86.548ZM224.93 85.389L223.681 84.382L225.276 84.554ZM225.932 83.571L224.626 81.626L226.571 82.932ZM227.554 82.276L227.382 80.681L228.389 81.93ZM229.548 81.699L230 79.4L230.452 81.699ZM231.611 81.93L232.618 80.681L232.446 82.276ZM233.429 82.932L235.374 81.626L234.068 83.571ZM234.724 84.554L236.319 84.382L235.07 85.389Z"/><path fill="#000000" transform="rotate(-35 230 87)" d="M230 82.63Q234.104 87 230 91.37Q225.896 87 230 82.63Z"/>
  <text x="230" y="104.2" font-size="6.6" fill="#000000" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="1.188" >AURELIA</text>
  <g transform="rotate(180 110 45)"><circle cx="110" cy="41" r="10.695" fill="none" stroke="#000000" stroke-width="1.035"/><path fill="#000000" d="M116.417 40.453L119.2 41L116.417 41.547ZM116.138 42.95L117.65 44.169L115.719 43.961ZM114.924 45.151L116.505 47.505L114.151 45.924ZM112.961 46.719L113.169 48.65L111.95 47.138ZM110.547 47.417L110 50.2L109.453 47.417ZM108.05 47.138L106.831 48.65L107.039 46.719ZM105.849 45.924L103.495 47.505L105.076 45.151ZM104.281 43.961L102.35 44.169L103.862 42.95ZM103.583 41.547L100.8 41L103.583 40.453ZM103.862 39.05L102.35 37.831L104.281 38.039ZM105.076 36.849L103.495 34.495L105.849 36.076ZM107.039 35.281L106.831 33.35L108.05 34.862ZM109.453 34.583L110 31.8L110.547 34.583ZM111.95 34.862L113.169 33.35L112.961 35.281ZM114.151 36.076L116.505 34.495L114.924 36.849ZM115.719 38.039L117.65 37.831L116.138 39.05Z"/><path fill="#000000" transform="rotate(-35 110 41)" d="M110 35.71Q114.968 41 110 46.29Q105.032 41 110 35.71Z"/><text x="110" y="61" font-size="4.6" fill="#000000" text-anchor="middle" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" letter-spacing="0.828" >AURELIA</text></g>
  <rect x="207.5" y="107.5" width="45" height="75" rx="2" fill="none" stroke="#000000" stroke-width="1.6"/>
  </g>
  <g id="print-marks" fill="#1a1a1a"><g id="reg-tl"><path fill-rule="evenodd" d="M3.6 6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM4.1 6a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="2.4" y="5.88" width="7.2" height=".24"/><rect x="5.88" y="2.4" width=".24" height="7.2"/></g><g id="reg-tr"><path fill-rule="evenodd" d="M276.6 6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM277.1 6a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="275.4" y="5.88" width="7.2" height=".24"/><rect x="278.88" y="2.4" width=".24" height="7.2"/></g><g id="reg-bl"><path fill-rule="evenodd" d="M3.6 294a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM4.1 294a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="2.4" y="293.88" width="7.2" height=".24"/><rect x="5.88" y="290.4" width=".24" height="7.2"/></g><g id="reg-br"><path fill-rule="evenodd" d="M276.6 294a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0ZM277.1 294a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z"/><rect x="275.4" y="293.88" width="7.2" height=".24"/><rect x="278.88" y="290.4" width=".24" height="7.2"/></g></g>
</svg>
`,DM=te.lazy(()=>rf(()=>import("./Fold3DView-Dp1is4Bs.js"),__vite__mapDeps([0,1,2]))),UM={cut:"Cut",crease:"Crease",ignored:"Ignore",unknown:"Unclassified",perf:"Perf"};function so({svg:n,label:e,className:t}){const[i,s]=te.useState(null);return te.useEffect(()=>{const r=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"}));return s(r),()=>URL.revokeObjectURL(r)},[n]),i?f.jsx("img",{src:i,alt:e,className:t,draggable:!1}):null}function IM(n,e,t){if(!n)return{result:null};try{return{result:Gt(e?"preflight:dieline":"preflight:artwork",()=>od(n.source,e,t))}}catch(i){return{result:null,error:{severity:"error",code:"file-read",message:`${n.file.name}: ${i instanceof Error?i.message:String(i)}`}}}}const ro=(n,e=2)=>n.toFixed(e),ed=()=>new Promise(n=>requestAnimationFrame(()=>setTimeout(n,0))),OM=2400,ao=()=>typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`p-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;let Br=null,ea=()=>{};const oo=()=>Br??(Br=gp().then(n=>new nc(n,e=>ea(e)),n=>{const e=new nc(null,()=>{});return ea({state:"unavailable",message:n instanceof Error?n.message:String(n)}),e})),Ls=()=>{Br==null||Br.then(n=>n.flush())},td=(n,e)=>{const t=e instanceof Error?e.message:String(e);return e instanceof RangeError||/memory|allocation|too large|invalid string length/i.test(t)?`${n}: the browser ran out of memory while processing this file (${t}). Try closing other tabs or exporting a flattened/simplified SVG.`:`${n}: ${t}`};function FM({onNavigate:n}){var wl,Tl,Al,Rl,Cl,Ll,Pl,Nl,Dl,Ul,Il,Ol,Fl;const[e,t]=te.useState(null),[i,s]=te.useState(null),[r,o]=te.useState(null),a=te.useRef(0),[l,c]=te.useState(null),[h,d]=te.useState("black-red"),[u,x]=te.useState(Ps["black-red"]),[g,v]=te.useState("px"),[p,m]=te.useState(""),[S,_]=te.useState(""),[T,P]=te.useState(.05),[C,b]=te.useState(.2),[U,E]=te.useState(!0),[A,k]=te.useState({mode:"board",presetId:"kraft"}),[D,N]=te.useState({state:"none"}),[L,O]=te.useState(void 0),[z,Q]=te.useState(null),[W,$]=te.useReducer(Wf,void 0,()=>dd()),Z=W.present,ae=Z.rootId,[ue,J]=te.useState(1),[se,pe]=te.useState(null),[ye,Ee]=te.useState({epoch:0,budget:1}),[Be,Ne]=te.useState([]),Ce=te.useRef(null),[Xe,X]=te.useState(0),[G,ne]=te.useState(!0),[oe,ce]=te.useState(!1),[Ie,Ae]=te.useState(null),y=te.useRef(ue);y.current=ue;const M=te.useCallback(w=>{ce(!1),J(w)},[]),I=te.useCallback(w=>{$(w),G&&(w.type==="setAngle"||w.type==="flip")&&y.current<1&&M(1)},[G,M]),[j,ie]=te.useState("split"),[re,xe]=te.useState("Untitled project"),he=()=>typeof window>"u"||window.innerWidth>1060,[ve,Se]=te.useState(he),[Oe,le]=te.useState(he),[Qe,Ze]=te.useState(!0),[Fe,Le]=te.useState(!1),[Me,He]=te.useState("stage"),[it,Ve]=te.useState("sec-import"),[je,de]=te.useState(!1),[F,fe]=te.useState(!1),[me,Pe]=te.useState(""),[De,at]=te.useState(!1),[st,St]=te.useState(ef),wt=te.useRef(!1),[ze,_t]=te.useState({}),[rt,kn]=te.useState(Vr),[ei,Bn]=te.useState(!0),[Rt,Kt]=te.useState(null),[Ys,Ai]=te.useState(0),[Ri,Ks]=te.useState(ao),[us,R]=te.useState(null),[B,Y]=te.useState({state:"idle"}),[K,q]=te.useState(!0),[_e,we]=te.useState(null),[ke,Ge]=te.useState(null),[qe,$e]=te.useState(void 0),We=te.useRef(null),[mt,Ct]=te.useState(!1),gt=Number(p)>0&&Number(S)>0?{width:Number(p),height:Number(S)}:void 0,an={colors:u,userUnit:g,manualSizeMm:gt},Ue=te.useMemo(()=>IM(e,!0,an),[e,u,g,p,S]),Te=te.useMemo(()=>{if(!i)return{result:null};const w=i.prepared,V=Wl(w,{userUnit:g,manualSizeMm:gt});return{result:{sanitizedSvg:w.sanitizedSvg,canvas:V.canvas,unitless:V.unitless,counts:{cut:0,crease:0,perf:0,unknown:0,ignored:0},strokeColors:[],messages:[...w.messages,...V.messages],elementCount:w.elementCount,sourceSvg:""}}},[i,g,p,S]),ti=Ue.result&&Te.result?Bl(Ue.result.canvas,Te.result.canvas):[],ft=te.useMemo(()=>{var w,V;return(w=Te.result)!=null&&w.canvas&&((V=Ue.result)!=null&&V.canvas)?{svg:Te.result.sanitizedSvg,canvas:Te.result.canvas}:null},[(wl=Te.result)==null?void 0:wl.sanitizedSvg,(Tl=Te.result)==null?void 0:Tl.canvas,(Al=Ue.result)==null?void 0:Al.canvas]),on=te.useMemo(()=>ze.foil?Gt("mask:foil",()=>xa(ze.foil.prepared,rt.layers.foil.exclude)):null,[ze.foil,rt.layers.foil.exclude.join()]),Ci=te.useMemo(()=>ze.spotUv?Gt("mask:spotUv",()=>xa(ze.spotUv.prepared,rt.layers.spotUv.exclude)):null,[ze.spotUv,rt.layers.spotUv.exclude.join()]),Tn=te.useMemo(()=>ze.emboss?Gt("mask:emboss",()=>xa(ze.emboss.prepared,rt.layers.emboss.exclude)):null,[ze.emboss,rt.layers.emboss.exclude.join()]),An={foil:on,spotUv:Ci,emboss:Tn},pt=te.useMemo(()=>Object.fromEntries(vn.map(w=>[w,ze[w]?Wl(ze[w].prepared,{userUnit:g,manualSizeMm:gt}).canvas:null])),[ze,g,p,S]),ln=Object.fromEntries(vn.filter(w=>ze[w]).map(w=>{var V;return[w,!!pt[w]&&!!((V=Ue.result)!=null&&V.canvas)&&Bl(Ue.result.canvas,pt[w]).length===0]})),fs=te.useMemo(()=>{var V;if(!((V=Ue.result)!=null&&V.canvas))return null;const w={};for(const ee of vn)An[ee]&&pt[ee]&&(w[ee]={svg:An[ee],canvas:pt[ee]});return{settings:rt,finishesOn:ei,layers:w}},[ei,(Rl=Ue.result)==null?void 0:Rl.canvas,on,Ci,Tn,pt,rt]),Wt=vn.filter(w=>ze[w]).flatMap(w=>[...ln[w]===!1?[{severity:"warning",code:`finish-align-${w}`,message:`${Ot[w].sv}: canvas differs from the dieline; placed by its physical size. See its preflight in Production layers.`}]:[],...ze[w].prepared.messages.filter(V=>V.severity!=="info").map(V=>({...V,message:`${Ot[w].sv}: ${V.message}`}))]),ot=te.useMemo(()=>{const w=Ue.result;if(!(w!=null&&w.canvas)||w.messages.some(V=>V.severity==="error"))return null;try{const V=Gt("geometry:extract",()=>_f(w.sanitizedSvg,w.canvas,u)),ee=Gt("geometry:panelGraph",()=>Pf(V.polylines,{snapMm:T,gapMm:C}));return{graph:ee,error:"",messages:[...V.warnings.map(be=>({severity:"warning",code:"extract",message:be})),...ee.messages]}}catch(V){return{graph:null,error:V instanceof Error?V.message:String(V),messages:[]}}},[Ue.result,T,C]);te.useEffect(()=>Q(null),[ot]);const tt=(ot==null?void 0:ot.graph)||null,[ps,yu]=te.useState(.85),[nl,Su]=te.useState(!0),Qs=te.useMemo(()=>{var w;return(w=Ue.result)!=null&&w.canvas?Ma(Ue.result.sanitizedSvg,Ue.result.canvas):[]},[Ue.result]),Zt=te.useMemo(()=>{var V;const w={};i&&((V=Te.result)!=null&&V.canvas)&&(w.print={svg:Te.result.sanitizedSvg,display:Te.result.sanitizedSvg,canvas:Te.result.canvas,unitless:Te.result.unitless,marks:Ma(Te.result.sanitizedSvg,Te.result.canvas)});for(const ee of vn){const be=ze[ee],nt=pt[ee];be&&nt&&(w[ee]={svg:be.prepared.sanitizedSvg,display:An[ee]??be.prepared.sanitizedSvg,canvas:nt,unitless:!1,marks:Ma(be.prepared.sanitizedSvg,nt)})}return w},[i,Te.result,ze,pt,on,Ci,Tn]),ms=w=>w==="print"?rt.printAlign:rt.layers[w],ca=Object.fromEntries(Object.entries(Zt).map(([w,V])=>[w,pm(Qs,V.marks,ms(w),[V.canvas.widthMm,V.canvas.heightMm])])),[il,sl]=te.useState({}),bu=JSON.stringify(vn.map(w=>{var V;return[w,!!Zt[w],(V=Zt[w])==null?void 0:V.display.length,rt.layers[w].offsetMm,rt.layers[w].rotationDeg,rt.layers[w].scale,rt.layers[w].exclude]}));te.useEffect(()=>{var nt;const w=ot==null?void 0:ot.graph,V=(nt=Ue.result)==null?void 0:nt.canvas;if(!w||!V){sl({});return}let ee=!1;const be=setTimeout(async()=>{const dt={};for(const xt of vn){const xn=Zt[xt];if(xn!=null&&xn.canvas)try{dt[xt]=await Ir(`preflight:measure:${xt}`,()=>xM(xn.display,[xn.canvas.widthMm,xn.canvas.heightMm],rt.layers[xt],w,[V.widthMm,V.heightMm]))}catch{}if(ee)return}ee||sl(dt)},300);return()=>{ee=!0,clearTimeout(be)}},[bu,ot==null?void 0:ot.graph]);const Eu=te.useMemo(()=>{var ee;const w={},V=(ee=Ue.result)==null?void 0:ee.canvas;if(!V)return w;for(const[be,nt]of Object.entries(Zt))w[be]=xm({label:be==="print"?"Tryck":Ot[be].sv,die:V,layer:nt.canvas,unitless:nt.unitless,align:ms(be),reg:ca[be],stats:be==="print"?null:il[be]??null,mask:be!=="print",messages:be==="print"?[]:ze[be].prepared.messages});return w},[Zt,rt,il,Qs,(Cl=Ue.result)==null?void 0:Cl.canvas]),wu=Object.fromEntries(Object.entries(ca).map(([w,V])=>[w,V.pairs.length>=2])),rl=(w,V)=>kn(ee=>w==="print"?{...ee,printAlign:{...ee.printAlign,...V}}:{...ee,layers:{...ee.layers,[w]:{...ee.layers[w],...V}}}),Tu=w=>{const V=Zt[w];if(!(V!=null&&V.canvas))return;const ee=mm(Qs,V.marks,[V.canvas.widthMm,V.canvas.heightMm],ms(w));ee&&rl(w,ee)},Au=(w,V,ee)=>{if(V||ee){const be=ms(w);rl(w,{offsetMm:[+(be.offsetMm[0]+V).toFixed(3),+(be.offsetMm[1]+ee).toFixed(3)]})}},Ru=["print",...vn].filter(w=>Zt[w]).map(w=>({id:w,label:w==="print"?"Tryck":Ot[w].sv,svg:Zt[w].display,layerMm:[Zt[w].canvas.widthMm,Zt[w].canvas.heightMm],align:ms(w),visible:w==="print"?rt.printVisible:rt.layers[w].visible,tone:w,reg:ca[w],marks:Zt[w].marks})),Js=Rt&&Rt!=="construction"&&Zt[Rt]?Rt:null;te.useEffect(()=>{z&&Js&&Kt(null)},[z]);const{rig:Qt,rigError:ha}=te.useMemo(()=>{if(!tt)return{rig:null,rigError:""};try{const w=ae&&tt.panels.some(V=>V.id===ae)?ae:void 0;return{rig:nr(tt,w),rigError:""}}catch(w){return{rig:null,rigError:w instanceof Error?w.message:String(w)}}},[tt,ae]),Li=te.useMemo(()=>(tt==null?void 0:tt.hinges.map(w=>w.id))??[],[tt]),ni=Z.mode==="sequence",ii=ni?Math.max(1,ls(Z.timeline).totalMs):OM,gs=te.useMemo(()=>ni?fd(Z.timeline,Z.angles,ue*ii,Li):null,[ni,Z.timeline,Z.angles,ue,ii,Li]),al=te.useMemo(()=>Qt?Gt("pose",()=>gs?is(Qt,gs,1):is(Qt,Z.angles,ue)):null,[Qt,gs,Z.angles,ue]),ol=te.useMemo(()=>gs??(Qt?Hf(Qt,Z.angles,ue):{}),[gs,Qt,Z.angles,ue]),ll=te.useMemo(()=>ni?$f(Z.timeline,Z.angles,Li):Z.angles,[ni,Z.timeline,Z.angles,Li]),cl=te.useMemo(()=>ni?Zf(Z.timeline,Li):void 0,[ni,Z.timeline,Li]),hl=te.useMemo(()=>{if(!tt)return new Set;try{const w=pc(nr(tt)).roles;return new Set(Object.keys(w).filter(V=>w[V]==="glue-flap"||w[V]==="tuck-flap"))}catch{return new Set}},[tt]),Cu=te.useMemo(()=>{if(!Qt)return{};try{return vM(Qt,ll,.5,cl,hl)}catch{return{}}},[Qt,ll,cl,hl]);te.useCallback(w=>{var V;return((V=tt==null?void 0:tt.hinges.find(ee=>ee.id===w))==null?void 0:V.label)??w},[tt]);const er=()=>{if(!tt)return;const w=pc(nr(tt));Ae({graph:tt,p:w}),$({type:"applySuggestion",proposals:Object.values(w.hinges),timeline:Z.timeline.length?void 0:Ql(w,tt)}),M(1)},zn=Ie&&Ie.graph===tt?Ie.p:null,Lu=te.useMemo(()=>zn?Ql(zn,tt):null,[zn,tt]),dl=te.useMemo(()=>{if(!tt||!zn||!Object.keys(Z.suggestion).length)return null;try{return tm(nr(tt),zn,Z.angles)}catch{return null}},[tt,zn,Z.angles,Z.suggestion]),ul=te.useRef(ii);ul.current=ii,te.useEffect(()=>{if(!oe)return;let w=0,V=performance.now();const ee=be=>{const nt=Math.min(1,y.current+(be-V)/ul.current);V=be,J(nt),nt<1?w=requestAnimationFrame(ee):ce(!1)};return y.current>=1&&(y.current=0,J(0)),w=requestAnimationFrame(ee),()=>cancelAnimationFrame(w)},[oe]),te.useEffect(()=>{se&&!Z.timeline.some(w=>w.id===se)&&pe(null)},[Z.timeline,se]),te.useLayoutEffect(()=>{const w=Ce.current;if(!w||!tt)return;Ce.current=null;const V=hp(w.fold,tt,w.geometry);$({type:"load",present:V.fold}),Ne(V.warnings.map(be=>({severity:"warning",code:"project-reconcile",message:be})));const ee=We.current;if(We.current=null,pe((ee==null?void 0:ee.selectedStepId)??null),J(typeof(ee==null?void 0:ee.progress)=="number"?Math.min(1,Math.max(0,ee.progress)):1),ee!=null&&ee.camera){const be=ee.camera;Ge(be),setTimeout(()=>$e(nt=>({...be,n:((nt==null?void 0:nt.n)??0)+1})),0)}else setTimeout(()=>Ai(be=>be+1),0)},[tt,Xe]),te.useEffect(()=>{const w=V=>{var ee;!(V.ctrlKey||V.metaKey)||((ee=V.target)==null?void 0:ee.tagName)==="INPUT"&&V.target.type==="number"||(V.key.toLowerCase()==="z"?(V.preventDefault(),$({type:V.shiftKey?"redo":"undo"})):V.key.toLowerCase()==="y"&&(V.preventDefault(),$({type:"redo"})))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[]);const Pu=D.state==="error"?{severity:"warning",code:"artwork-render",message:`Artwork could not be rendered (${D.message}); the 3D view uses the plain board material. Folding and editing are unaffected.`}:null,Nu=ti.map(w=>w.code==="canvas-mismatch"?{severity:"warning",code:w.code,message:"Artwork canvas differs from the dieline: placed by its physical size at the dieline origin, not stretched. Check it in Production layers → Tryck."}:w),Du=[l,Pu,...Be,...Wt,Ue.error,Te.error,...((Ll=Ue.result)==null?void 0:Ll.messages)||[],...((Pl=Te.result)==null?void 0:Pl.messages)||[],...Nu,...(ot==null?void 0:ot.messages)||[]].filter(Boolean),fl=[Ue.error,...((Nl=Ue.result)==null?void 0:Nl.messages)||[],...(ot==null?void 0:ot.messages)||[]].some(w=>(w==null?void 0:w.severity)==="error")||!!(ot!=null&&ot.error),lt=(ot==null?void 0:ot.graph)||null,si=(Dl=Ue.result)==null?void 0:Dl.canvas,Uu=[Ue.result,Te.result].some(w=>w==null?void 0:w.messages.some(V=>V.code==="physical-size-required")),Iu=!!((Ul=Ue.result)!=null&&Ul.unitless||(Il=Te.result)!=null&&Il.unitless),da=w=>async V=>{if(!V.name.toLowerCase().endsWith(".svg")&&V.type!=="image/svg+xml"){c({severity:"error",code:"file-read",message:`${V.name}: choose an SVG file.`});return}c(null);const ee=++a.current,be=w?"dieline":"artwork",nt=xt=>{a.current===ee&&o({id:ee,name:V.name,kind:be,stage:xt,bytes:V.size})},dt=()=>a.current===ee;try{nt("Reading file…");const xt=await Ir("file:read",()=>V.text(),`${V.size}`);if(!dt()||(nt(w?"Parsing and sanitizing dieline…":"Sanitizing artwork (scripts, external links and unsafe images are removed)…"),await ed(),!dt()))return;if(w){if(Gt("preflight:validate",()=>od(xt,!0,{colors:u,userUnit:"px"})),!dt())return;v("px"),xt!==(e==null?void 0:e.source)&&($({type:"load",present:Ns()}),pe(null),J(1),Ne([])),t({file:V,source:xt})}else{const xn=Gt("sanitize:artwork",()=>Or(xt));if(!dt())return;s({file:V,prepared:xn,source:xt})}}catch(xt){if(!dt())return;c({severity:"error",code:"file-read",message:td(V.name,xt)+(w?"":" Continuing with the default cardboard material.")}),w||s(null)}finally{dt()&&o(null)}},Ou=()=>{a.current++,o(null)},Fu=async(w,V)=>{if(!V.name.toLowerCase().endsWith(".svg")&&V.type!=="image/svg+xml"){c({severity:"error",code:"file-read",message:`${V.name}: choose an SVG file.`});return}const ee=++a.current,be=()=>a.current===ee;c(null);try{o({id:ee,name:V.name,kind:"artwork",stage:`Reading ${Ot[w].sv} layer…`,bytes:V.size});const nt=await V.text();if(!be()||(o({id:ee,name:V.name,kind:"artwork",stage:`Sanitizing ${Ot[w].sv} mask…`,bytes:V.size}),await ed(),!be()))return;const dt=Gt(`sanitize:${w}`,()=>ma(nt));if(!be())return;_t(xt=>({...xt,[w]:{file:V,prepared:dt,source:nt}})),kn(xt=>({...xt,layers:{...xt.layers,[w]:{...xt.layers[w],visible:!0}}})),Kt(w)}catch(nt){be()&&c({severity:"error",code:"file-read",message:`${td(V.name,nt)} The ${Ot[w].sv} layer was not changed.`})}finally{be()&&o(null)}},ku=w=>_t(V=>{const ee={...V};return delete ee[w],ee}),Bu=w=>{d(w),x(Ps[w])},pl=w=>{a.current++,o(null),c(null),Ne([]),$({type:"load",present:Ns()}),Q(null),pe(null),J(1),ce(!1),x(Ps["black-red"]),d("black-red"),v("px"),m(""),_(""),P(.05),b(.2),xe(w),_t({}),kn(Vr()),Bn(!0),Kt(null),Ks(ao()),R(null),Ge(null),we(null),Ct(!1),We.current=null},ml=()=>{pl("Untitled project"),t(null),s(null),at(!1)},gl=()=>{pl("Sample · tuck-end carton");const w=(ee,be)=>new File([ee],be,{type:"image/svg+xml"});t({file:w(Jh,"tuck-carton-konstruktion.svg"),source:Jh}),s({file:w(io,"tuck-carton-tryck.svg"),prepared:Gt("sanitize:artwork",()=>Or(io)),source:io});const V=(ee,be,nt)=>({file:w(ee,be),prepared:Gt(`sanitize:${nt}`,()=>ma(ee)),source:ee});_t({foil:V(LM,"tuck-carton-foliering.svg","foil"),spotUv:V(PM,"tuck-carton-uv-lack.svg","spotUv"),emboss:V(NM,"tuck-carton-pragling.svg","emboss")}),k({mode:"board",presetId:"white"}),R("tuck-carton"),ie("3d"),wt.current=!0,tr.current=!0,He("stage")},tr=te.useRef(!1);te.useEffect(()=>{if(!(!wt.current||!tt)){if(wt.current=!1,tr.current){const w=tt.panels.find(V=>V.holes.length>0);w&&$({type:"load",present:{...Ns(),rootId:w.id}})}er(),tr.current?(tr.current=!1,O(w=>({view:"hero",n:((w==null?void 0:w.n)??0)+1}))):Ai(w=>w+1)}},[tt]);const ua=(w=!1)=>!e||!tt&&!w?null:{format:vd,schemaVersion:2,title:re||void 0,layers:{construction:{fileName:e.file.name,svg:e.source,enabled:!0,importSettings:{colors:u,userUnit:g,manualSizeMm:gt??null,snapMm:T,gapMm:C}},print:i?{fileName:i.file.name,svg:i.source,enabled:!0}:null,...Object.fromEntries(vn.map(V=>[V,ze[V]?{fileName:ze[V].file.name,svg:ze[V].source,enabled:rt.layers[V].visible}:null]))},finishes:{...rt,finishesOn:ei},geometry:tt?Md(tt):{panelIds:[],hingeIds:[]},fold:Z,appearance:{boardPresetId:A.presetId,mode:A.mode}},xl=(w,V)=>{const ee=URL.createObjectURL(new Blob([yd(w)],{type:"application/json"})),be=document.createElement("a");be.href=ee,be.download=V,be.click(),setTimeout(()=>URL.revokeObjectURL(ee),1e3)},zu=()=>{const w=ua();w&&xl(w,va(re||e.file.name))},Gu=w=>{const V=ua();!V||!w.trim()||(xe(w.trim()),xl({...V,title:w.trim()},va(w.trim())),fe(!1))},vl=(w,V,ee,be)=>{var kl;const nt=w.layers.construction,dt=nt.importSettings;a.current++,o(null),c(null),x(dt.colors),v(dt.userUnit),P(dt.snapMm),b(dt.gapMm),m(dt.manualSizeMm?String(dt.manualSizeMm.width):""),_(dt.manualSizeMm?String(dt.manualSizeMm.height):""),k({mode:w.appearance.mode,presetId:w.appearance.boardPresetId}),s((kl=w.layers.print)!=null&&kl.enabled?{file:new File([w.layers.print.svg],w.layers.print.fileName,{type:"image/svg+xml"}),prepared:Gt("sanitize:artwork",()=>Or(w.layers.print.svg)),source:w.layers.print.svg}:null);const xt={};for(const xs of vn){const vs=w.layers[xs];vs&&(xt[xs]={file:new File([vs.svg],vs.fileName,{type:"image/svg+xml"}),prepared:Gt(`sanitize:${xs}`,()=>ma(vs.svg)),source:vs.svg})}_t(xt);const{finishesOn:xn,...Ku}=w.finishes;kn(Ku),Bn(xn),Kt(null),Ne([]),xe(w.title||V),Ce.current=w,We.current=ee,Ks(be),R((ee==null?void 0:ee.sampleId)??null),Ge((ee==null?void 0:ee.camera)??null),Ct(!1),ee!=null&&ee.view&&ie(ee.view),(ee==null?void 0:ee.selectedLayer)!==void 0&&Kt(ee.selectedLayer??null),typeof(ee==null?void 0:ee.dockOpen)=="boolean"&&Ze(ee.dockOpen),typeof(ee==null?void 0:ee.liveEdits)=="boolean"&&ne(ee.liveEdits),ee!=null&&ee.activeSection&&Ve(ee.activeSection),t({file:new File([nt.svg],nt.fileName,{type:"image/svg+xml"}),source:nt.svg}),X(xs=>xs+1),He("stage")},_l=async w=>{const V=++a.current;try{const ee=await w.text();if(a.current!==V)return;const be=Sd(ee);vl(be,w.name.replace(/\.elham\.json$|\.json$/i,""),null,ao()),we(null)}catch(ee){c({severity:"error",code:"project-open",message:`${w.name}: ${ee instanceof Error?ee.message:String(ee)}`})}};te.useEffect(()=>(ea=w=>{Y(w),w.state==="saved"&&sc(!0)},()=>{ea=()=>{}}),[]),te.useEffect(()=>{let w=!1;const V=a.current;return(async()=>{const ee=await Ir("restore:open-db",oo),be=await Ir("restore:read",()=>ee.restore());if(!w){if(a.current!==V){q(!1);return}if(be.project&&be.draft&&Gt("restore:apply",()=>vl(be.project,"Recovered project",be.draft.ui,be.draft.projectId)),be.failures.length){const nt=be.failures[0],dt=nt.savedAt?new Date(nt.savedAt).toLocaleString():"";we({revision:nt.revision||void 0,message:be.project?`The latest autosave${dt?` (${dt})`:""} could not be read (${nt.message}). An earlier autosave${be.draft?` from ${new Date(be.draft.savedAt).toLocaleString()}`:""} was restored instead.`:`The autosaved project${dt?` (${dt})`:""} could not be restored (${nt.message}). You can download the damaged autosave for inspection or start again.`})}else!be.draft&&xp()&&ee.available&&(we({message:"Your browser removed the locally autosaved project (site data was cleared or evicted). Open a downloaded .elham.json file to continue."}),sc(!1));q(!1)}})(),()=>{w=!0}},[]);const Hu=()=>({view:j,progress:ue,selectedStepId:se,selectedLayer:Rt,camera:ke,dockOpen:Qe,liveEdits:G,activeSection:it,sampleId:us}),Ml=()=>{const w=ua(!0);return{projectId:Ri,empty:!w,project:w,ui:Hu()}},yl=te.useRef(Ml);yl.current=Ml;const Sl=te.useRef(null);te.useEffect(()=>{if(K)return;const w=Sl.current!==Ri;Sl.current=Ri,oo().then(V=>{V.schedule(()=>yl.current()),w&&V.flush()})},[K,Ri,e,i,ze,rt,ei,u,g,p,S,T,C,A,Z,tt,re,j,oe?-1:ue,se,Rt,ke,Qe,G,us]),te.useEffect(()=>{const w=()=>{document.visibilityState==="hidden"&&Ls()};return window.addEventListener("pagehide",Ls),document.addEventListener("visibilitychange",w),()=>{window.removeEventListener("pagehide",Ls),document.removeEventListener("visibilitychange",w),Ls()}},[]);const ju=async()=>{if(!(_e!=null&&_e.revision))return;const w=await(await oo()).exportRaw(_e.revision);if(!w)return;const V=URL.createObjectURL(new Blob([w],{type:"application/json"})),ee=document.createElement("a");ee.href=V,ee.download="damaged-autosave.json",ee.click(),setTimeout(()=>URL.revokeObjectURL(V),1e3)},bl=K?"Restoring…":B.state==="saving"?"Saving…":B.state==="saved"?"Saved locally":B.state==="failed"?"Autosave failed":B.state==="unavailable"?"Autosave off":"",Vu=B.state==="saved"?`Autosaved in this browser at ${new Date(B.at).toLocaleTimeString()}. Download the project (.elham.json) for a portable backup.`:B.state==="failed"?`Autosave failed: ${B.message}. Your work is still open; download the project (.elham.json) to keep a copy.`:B.state==="unavailable"?`Browser storage is unavailable (${B.message}); work is not autosaved. Download the project to keep it.`:"Autosave",Wu=()=>{const w=st==="system"?"light":st==="light"?"dark":"system";St(w),sf(w)},$u=st==="light"?$p:st==="dark"?Op:Ip,Xu=w=>{Se(!0),Ve(w),He("panel"),requestAnimationFrame(()=>{var V;return(V=document.getElementById(w))==null?void 0:V.scrollIntoView({behavior:"smooth",block:"start"})})},Zu=Object.keys(Z.suggestion).length>0,El=w=>{Q(w),w&&window.innerWidth>760&&le(!0)},qu=lt&&!fl?`${lt.panels.length} panels · ${lt.hinges.length} hinges`:e?"Needs attention":"No dieline",Yu=[{id:"sec-import",label:"Dieline",icon:uc},{id:"sec-artwork",label:"Artwork & board",icon:cc},{id:"sec-layers",label:"Layers",icon:oc},{id:"sec-structure",label:"Structure",icon:lc},{id:"sec-fold",label:"Folding",icon:_a}];return f.jsxs("div",{className:`app-shell ${ve?"":"left-closed"} ${Oe?"":"right-closed"} ${Qe?"":"dock-closed"} ${Fe?"focus-mode":""} ${e?"":"is-empty"}`,"data-pane":Me,children:[f.jsxs("header",{className:"topbar",children:[f.jsx("button",{className:"brand-btn",onClick:()=>n==null?void 0:n("/"),"aria-label":`${_s.name} home`,children:f.jsx(tf,{})}),f.jsx("input",{className:"project-title",value:re,onChange:w=>xe(w.target.value),"aria-label":"Project title",spellCheck:!1}),f.jsxs("nav",{className:"top-actions","aria-label":"Project",children:[f.jsxs("button",{className:"tb-btn",onClick:()=>e||W.past.length?at(!0):ml(),title:"New project",children:[f.jsx(Cp,{size:17}),f.jsx("span",{children:"New"})]}),f.jsxs("label",{className:"tb-btn file-chip",title:"Open a .elham.json project",children:[f.jsx(ac,{size:17}),f.jsx("span",{children:"Open project"}),f.jsx("input",{type:"file",accept:".json,application/json",onChange:w=>{var ee;const V=(ee=w.target.files)==null?void 0:ee[0];V&&_l(V),w.target.value=""},"aria-label":"Open project file"})]}),f.jsxs("button",{className:"tb-btn",onClick:zu,disabled:!lt,title:"Download the project as .elham.json",children:[f.jsx(jp,{size:17}),f.jsx("span",{children:"Save project"})]}),f.jsx("button",{className:"tb-btn icon-only",onClick:()=>{Pe(re),fe(!0)},disabled:!lt,title:"Save as…","aria-label":"Save as",children:f.jsx(Hp,{size:17})}),f.jsx("span",{className:"tb-sep"}),f.jsxs("div",{className:"undo-redo",children:[f.jsx("button",{className:"tb-btn icon-only",onClick:()=>$({type:"undo"}),disabled:!W.past.length,title:"Undo (Ctrl+Z)","aria-label":"Undo",children:f.jsx(Zp,{size:17})}),f.jsx("button",{className:"tb-btn icon-only",onClick:()=>$({type:"redo"}),disabled:!W.future.length,title:"Redo (Ctrl+Shift+Z)","aria-label":"Redo",children:f.jsx(Gp,{size:17})})]}),f.jsx("span",{className:"tb-sep"}),f.jsxs("div",{className:"preview-group",role:"group","aria-label":"Preview",children:[f.jsx("button",{className:"tb-btn icon-only",onClick:()=>M(0),disabled:!lt,title:"Flat","aria-label":"Show flat",children:f.jsx(Wp,{size:16})}),f.jsx("button",{className:"tb-btn icon-only",onClick:()=>M(1),disabled:!lt,title:"Assembled","aria-label":"Show assembled",children:f.jsx(rc,{size:17})}),f.jsx("button",{className:"tb-btn icon-only accent",onClick:()=>ce(!oe),disabled:!lt,title:oe?"Pause":"Play assembly","aria-label":oe?"Pause assembly":"Play assembly",children:oe?f.jsx(hc,{size:16}):f.jsx(dc,{size:16})})]})]}),f.jsxs("div",{className:"top-right",children:[bl&&f.jsx("span",{className:`save-status ${B.state}`,role:"status","aria-live":"polite",title:Vu,"data-testid":"save-status","data-revision":B.state==="saved"?B.revision:void 0,children:bl}),f.jsx("span",{className:`validation-pill ${lt&&!fl?"ready":e?"warn":""}`,children:qu}),f.jsx("button",{className:"tb-btn icon-only hide-mobile",onClick:()=>Se(!ve),"aria-pressed":ve,title:"Toggle tools panel","aria-label":"Toggle tools panel",children:f.jsx(kp,{size:17})}),f.jsx("button",{className:"tb-btn icon-only hide-mobile",onClick:()=>le(!Oe),"aria-pressed":Oe,title:"Toggle inspector","aria-label":"Toggle inspector",children:f.jsx(Bp,{size:17})}),f.jsx("button",{className:"tb-btn icon-only",onClick:Wu,title:`Theme: ${st}`,"aria-label":`Theme: ${st}. Switch theme`,children:f.jsx($u,{size:17})}),f.jsx("button",{className:"tb-btn icon-only",onClick:()=>de(!0),title:"Help","aria-label":"Help",children:f.jsx(wp,{size:17})}),f.jsx("button",{className:"tb-btn icon-only",onClick:()=>n==null?void 0:n("/about"),title:"About & licenses","aria-label":"About and licenses",children:f.jsx(bo,{size:17})})]})]}),f.jsxs("div",{className:"banners",children:[De&&f.jsxs("div",{className:"banner warn",role:"alertdialog","aria-label":"Start a new project",children:[f.jsxs("span",{children:["Start a new project? Unsaved changes to “",re,"” will be lost."]}),f.jsx("button",{className:"btn danger",onClick:ml,children:"Discard and start new"}),f.jsx("button",{className:"btn",onClick:()=>at(!1),children:"Cancel"})]}),_e&&f.jsxs("div",{className:"banner warn",role:"alert","data-testid":"recovery-banner",children:[f.jsx("span",{children:_e.message}),_e.revision&&f.jsx("button",{className:"btn",onClick:ju,children:"Download damaged autosave"}),f.jsx("button",{className:"btn",onClick:()=>we(null),children:"Dismiss"})]}),B.state==="failed"&&e&&f.jsx("div",{className:"banner error",role:"alert",children:f.jsxs("span",{children:["Autosave failed (",B.message,"). Your project is still open — use ",f.jsx("b",{children:"Save project"})," to download a backup."]})}),mt&&f.jsxs("div",{className:"banner warn",role:"alertdialog","aria-label":"Reset the sample",children:[f.jsxs("span",{children:["Reset “",re,"” to the original Tuck-end carton sample? Your changes to it will be lost."]}),f.jsx("button",{className:"btn danger",onClick:gl,children:"Reset to original"}),f.jsx("button",{className:"btn",onClick:()=>Ct(!1),children:"Cancel"})]})]}),f.jsxs("aside",{className:"leftbar","aria-label":"Tools",children:[f.jsx("nav",{className:"rail","aria-label":"Tool sections",children:Yu.map(w=>{const V=w.icon;return f.jsxs("button",{className:`rail-btn ${it===w.id?"on":""}`,onClick:()=>Xu(w.id),title:w.label,"aria-label":w.label,children:[f.jsx(V,{size:19}),f.jsx("span",{children:w.label})]},w.id)})}),f.jsxs("div",{className:"import-sidebar left-panel",children:[r&&f.jsxs("section",{className:"card job-card",role:"status","aria-live":"polite","data-testid":"import-job",children:[f.jsxs("div",{className:"card-title",children:[f.jsxs("span",{children:[f.jsx("i",{className:"spinner"})," Importing ",r.kind]}),f.jsx("button",{className:"chip",onClick:Ou,children:"Cancel"})]}),f.jsxs("p",{children:[f.jsx("b",{children:r.name})," · ",(r.bytes/1048576).toFixed(2)," MB"]}),f.jsx("p",{className:"muted",children:r.stage})]}),f.jsxs("section",{className:"panel-section",id:"sec-import",children:[f.jsxs("h2",{className:"section-title",children:[f.jsx(uc,{size:15})," Dieline ",f.jsx("span",{className:"tag",children:"Konstruktion · required"})]}),us&&f.jsxs("div",{className:"card sample-card",children:[f.jsxs("div",{className:"card-title",children:["Sample project ",f.jsx("span",{className:"tag",children:"local copy"})]}),f.jsx("p",{className:"muted",children:"Your edits are saved in this browser. The bundled original is never changed."}),f.jsx("button",{className:"chip",onClick:()=>Ct(!0),children:"Reset to original sample…"})]}),f.jsx(Qh,{label:"Dieline SVG",acceptLabel:"Upload dieline SVG",file:(e==null?void 0:e.file)||null,result:Ue.result,onFile:da(!0)}),e&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"card mapping-card",children:[f.jsxs("div",{className:"card-title",children:["Stroke colours ",f.jsx("span",{className:"hint",title:"Choose what each stroke colour means. Named CUT/CREASE layers in the SVG take precedence. Ignored and unclassified strokes never become geometry.",children:"?"})]}),f.jsxs("select",{value:h,onChange:w=>Bu(w.target.value),"aria-label":"Colour preset",children:[f.jsx("option",{value:"black-red",children:"Preset A · black cut / red crease"}),f.jsx("option",{value:"blue-red",children:"Preset B · blue cut / red crease"})]}),!!((Ol=Ue.result)!=null&&Ol.strokeColors.length)&&f.jsx("table",{className:"color-roles",children:f.jsx("tbody",{children:Ue.result.strokeColors.map(w=>f.jsxs("tr",{children:[f.jsxs("td",{children:[f.jsx("i",{className:"swatch",style:{background:w.color.startsWith("#")?w.color:"transparent"}}),w.color]}),f.jsxs("td",{children:[w.count,"×"]}),f.jsx("td",{children:f.jsx("select",{value:w.role,onChange:V=>x(ee=>hf(ee,w.color,V.target.value)),"aria-label":`Role for ${w.color}`,className:`role-${w.role}`,children:["cut","crease","ignored","unknown"].map(V=>f.jsx("option",{value:V,children:UM[V]},V))})})]},w.color))})})]}),Iu&&f.jsxs("div",{className:"card attention",children:[f.jsx("div",{className:"card-title",children:"Unitless SVG size"}),f.jsx("p",{children:"Width and height have no unit. Choose what one unit means and check it against a known dimension. PDF exports are usually points."}),f.jsxs("select",{value:g,onChange:w=>v(w.target.value),"aria-label":"Unit for unitless size",children:[f.jsx("option",{value:"px",children:"CSS px (96 / inch)"}),f.jsx("option",{value:"pt",children:"PDF points (72 / inch)"}),f.jsx("option",{value:"mm",children:"Millimetres"}),f.jsx("option",{value:"in",children:"Inches"})]}),si&&f.jsxs("div",{className:"file-facts",children:["→ ",ro(si.widthMm,1)," × ",ro(si.heightMm,1)," mm"]})]}),Uu&&f.jsxs("div",{className:"card attention",children:[f.jsx("div",{className:"card-title",children:"Physical canvas size"}),f.jsx("p",{children:"Enter verified dimensions. They apply to dieline and artwork."}),f.jsxs("div",{className:"mm-fields",children:[f.jsxs("label",{children:["Width mm",f.jsx("input",{type:"number",min:"0",step:"0.01",value:p,onChange:w=>m(w.target.value)})]}),f.jsxs("label",{children:["Height mm",f.jsx("input",{type:"number",min:"0",step:"0.01",value:S,onChange:w=>_(w.target.value)})]})]})]}),f.jsxs("details",{className:"card",children:[f.jsx("summary",{className:"card-title",children:"Tolerances"}),f.jsxs("div",{className:"mm-fields",children:[f.jsxs("label",{children:["Snap mm",f.jsx("input",{type:"number",min:"0.001",max:"1",step:"0.01",value:T,onChange:w=>P(Math.max(.001,Number(w.target.value)||.05))})]}),f.jsxs("label",{children:["Gap repair mm",f.jsx("input",{type:"number",min:"0",max:"2",step:"0.05",value:C,onChange:w=>b(Math.max(0,Number(w.target.value)||0))})]})]})]})]})]}),f.jsxs("section",{className:"panel-section",id:"sec-artwork",children:[f.jsxs("h2",{className:"section-title",children:[f.jsx(cc,{size:15})," Artwork & board ",f.jsx("span",{className:"tag",children:"optional"})]}),f.jsx(Qh,{label:"Artwork SVG (optional)",acceptLabel:"Upload artwork SVG",file:(i==null?void 0:i.file)||null,result:Te.result,onFile:da(!1)}),i?f.jsx("button",{className:"chip remove-artwork",onClick:()=>s(null),children:"Remove artwork (use plain board)"}):f.jsx("p",{className:"legend-note",children:"No artwork: the 3D model uses the board material below."}),f.jsxs("label",{className:"field",children:["Board material",f.jsxs("select",{value:A.mode==="debug"?"debug":A.presetId,onChange:w=>k(w.target.value==="debug"?{...A,mode:"debug"}:{mode:"board",presetId:w.target.value}),"aria-label":"3D appearance",children:[ko.map(w=>f.jsx("option",{value:w.id,children:w.name},w.id)),f.jsx("option",{value:"debug",children:"Panel colours (inspection)"})]})]})]}),f.jsxs("section",{className:"panel-section",id:"sec-layers",children:[f.jsxs("h2",{className:"section-title",children:[f.jsx(oc,{size:15})," Production layers"]}),f.jsx(Kp,{dielineName:(e==null?void 0:e.file.name)??null,printName:(i==null?void 0:i.file.name)??null,files:ze,settings:rt,setSettings:kn,finishesOn:ei,setFinishesOn:Bn,selected:Rt,setSelected:Kt,aligned:ln,onUpload:Fu,onRemove:ku,preflight:Eu,autoAlignable:wu,onAutoAlign:Tu,overlay:{opacity:ps,setOpacity:yu,showMarks:nl,setShowMarks:Su}})]}),f.jsxs("section",{className:"panel-section",id:"sec-structure",children:[f.jsxs("h2",{className:"section-title",children:[f.jsx(lc,{size:15})," Structure"]}),lt?f.jsxs("p",{className:"stats",children:[lt.panels.length," panels · ",lt.hinges.length," hinges · ",lt.waste.length," cut-outs · ",lt.pieces.length," piece",lt.pieces.length===1?"":"s"," · ",ro(lt.materialAreaMm2/100,1)," cm²"]}):f.jsx("p",{className:"legend-note",children:"Load a dieline to detect panels and creases."}),f.jsx(CM,{messages:Du,ready:!!lt})]}),f.jsxs("section",{className:"panel-section",id:"sec-fold",children:[f.jsxs("h2",{className:"section-title",children:[f.jsx(_a,{size:15})," Folding"]}),lt?f.jsx(qh,{parts:["fold"],graph:lt,rig:Qt,rigError:ha,edit:Z,dispatch:I,current:ol,progress:ue,setProgress:M,liveEdits:G,setLiveEdits:ne,onSuggest:er,proposal:zn,check:dl,selected:z,setSelected:Q,selectedStepId:se,setSelectedStepId:pe,totalMs:ii}):f.jsx("p",{className:"legend-note",children:"Folding tools appear after a dieline is loaded."})]})]})]}),f.jsx("main",{className:"stage overlay-workspace","aria-label":"Workspace",onPointerDown:()=>{!he()&&window.innerWidth>760&&(Se(!1),le(!1))},children:!e&&K?f.jsxs("div",{className:"restoring",role:"status","data-testid":"restoring",children:[f.jsx("i",{className:"spinner"})," Restoring your project…"]}):e?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"stage-toolbar workspace-toolbar",children:[f.jsx("div",{className:"segmented",role:"tablist","aria-label":"View",children:["split","2d","3d"].map(w=>f.jsx("button",{role:"tab","aria-selected":j===w,className:j===w?"on":"",onClick:()=>ie(w),children:w==="split"?"Split":w.toUpperCase()},w))}),lt&&!Zu&&f.jsxs("button",{className:"btn primary next-step",onClick:er,"aria-label":"Next step: suggest folding",children:[f.jsx(_a,{size:15})," Suggest folding"]}),f.jsxs("div",{className:"toolbar-right",children:[f.jsxs("label",{className:"toggle",children:[f.jsx("input",{type:"checkbox",checked:U,onChange:w=>E(w.target.checked)})," Source lines"]}),f.jsx("button",{className:"tb-btn icon-only",onClick:()=>Le(!Fe),"aria-pressed":Fe,title:Fe?"Exit focus view":"Focus view (hide panels)","aria-label":Fe?"Exit focus view":"Focus view",children:Fe?f.jsx(Dp,{size:16}):f.jsx(Pp,{size:16})})]})]}),f.jsx("div",{className:"workspace-body",children:f.jsxs("div",{className:`views view-${j}`,children:[j!=="3d"&&Js&&si&&f.jsxs("div",{className:"overlay-stage align-stage",children:[f.jsx(Mm,{canvas:si,graph:lt,dielineSvg:((Fl=Ue.result)==null?void 0:Fl.sanitizedSvg)??null,layers:Ru,selectedId:Js,opacity:ps,showMarks:nl,dieMarks:Qs,onMove:(w,V,ee)=>Au(w,V,ee)}),f.jsx("button",{className:"chip align-close",onClick:()=>Kt(null),children:"Close alignment view"})]}),j!=="3d"&&!Js&&f.jsxs("div",{className:"overlay-stage",children:[i&&Te.result&&f.jsx(so,{svg:Te.result.sanitizedSvg,label:"Sanitized artwork preview"}),lt&&si&&f.jsx(RM,{graph:lt,canvas:si,selected:z,onSelect:El,uncertain:Object.fromEntries(Object.values(Z.suggestion).map(w=>[w.hingeId,w.confidence!=="high"&&!Z.manual[w.hingeId]]))}),e&&Ue.result&&U&&f.jsx(so,{svg:Ue.result.sanitizedSvg,label:"Sanitized dieline preview",className:"source-lines"}),Rt&&Rt!=="print"&&Rt!=="construction"&&An[Rt]&&ln[Rt]!==!1&&f.jsx(so,{svg:An[Rt],label:`${Ot[Rt].sv} mask overlay`,className:`finish-overlay ${Rt}`}),(ot==null?void 0:ot.error)&&f.jsxs("div",{className:"geometry-error",children:["Panel extraction: ",ot.error]}),!!ti.length&&f.jsx("div",{className:"mismatch-overlay",children:"Canvas mismatch — preview shown without stretching or shifting"})]}),j!=="2d"&&f.jsxs("div",{className:"fold-stage",children:[ye.epoch>0&&f.jsxs("div",{className:"gl-note",children:["The graphics card reset (often GPU memory). The 3D view was restarted with a ",Math.round(ye.budget*100),"% texture budget."]}),lt&&al?f.jsxs(te.Suspense,{fallback:f.jsx("div",{className:"empty-overlay",children:"Loading 3D…"}),children:[f.jsx(DM,{textureBudgetScale:ye.budget,onContextLost:()=>Ee(w=>({epoch:w.epoch+1,budget:Math.max(.125,w.budget/2)})),graph:lt,pose:al,selected:z,onSelect:El,fitSignal:Ys,appearance:A,artwork:ft,layers:Cu,onArtworkStatus:N,viewRequest:L,finishes:fs,cameraRequest:qe,onCameraChange:Ge},ye.epoch),f.jsx("div",{className:"view-bar",children:["hero","front","back","top","bottom","iso"].map(w=>f.jsx("button",{onClick:()=>O(V=>({view:w,n:((V==null?void 0:V.n)??0)+1})),title:w==="front"?"Drawn side of the sheet":w==="back"?"Reverse side":void 0,children:w==="iso"?"3/4":w==="hero"?"Showcase":w[0].toUpperCase()+w.slice(1)},w))}),f.jsx("div",{className:"material-bar","data-testid":"material-bar",children:f.jsx("span",{className:"art-status","data-testid":"art-status",children:A.mode==="debug"?"inspection view":D.state==="ready"?`${D.finishes.length?`${D.finishes.map(w=>Ot[w].sv).join(" + ")} · `:""}${i?"artwork on outer faces":"board"} · ${D.pxPerMm.toFixed(1)} px/mm · ${D.textureSize.join("×")} (${D.mb.toFixed(0)} MB${D.limitedBy==="quality"?"":`, limited by ${D.limitedBy}`})`:D.state==="loading"?"rasterising artwork…":D.state==="error"?`artwork failed: ${D.message}`:i&&ti.length?"artwork not aligned — plain board":"plain board (no artwork)"})}),f.jsx("button",{className:"fit-button",onClick:()=>Ai(w=>w+1),children:"Fit"}),f.jsxs("div",{className:"mini-transport","aria-label":"Fold preview",children:[f.jsx("button",{className:"tl-icon play",onClick:()=>ce(!oe),"aria-label":oe?"Pause preview":"Play preview",children:oe?f.jsx(hc,{size:16}):f.jsx(dc,{size:16})}),f.jsx("input",{type:"range",min:0,max:100,step:"any",value:ue*100,onChange:w=>M(Number(w.target.value)/100),"aria-label":"Preview progress"})]})]}):f.jsxs("div",{className:"empty-overlay",children:[f.jsx("strong",{children:"3D fold preview"}),f.jsx("span",{children:ha||"Appears once panels and hinges are detected."})]})]})]})})]}):f.jsx("div",{className:"welcome",children:f.jsxs("div",{className:"welcome-inner",children:[f.jsx(nf,{size:56}),f.jsx("h1",{children:"Fold a dieline into a 3D package"}),f.jsxs("p",{className:"lead",children:["Upload a structural SVG (black cuts, red creases). ",_s.name," finds the panels and creases, proposes how they fold and shows the package in 3D. Artwork is optional."]}),f.jsxs("div",{className:"welcome-cards",children:[f.jsxs("label",{className:"welcome-card primary",children:[f.jsx(wd,{size:22}),f.jsx("b",{children:"Upload a dieline SVG"}),f.jsx("span",{children:"The only required file. Any size; cleaned of scripts and links."}),f.jsx("input",{type:"file",accept:"image/svg+xml,.svg","aria-label":"Choose a dieline SVG file",onChange:w=>{var ee;const V=(ee=w.target.files)==null?void 0:ee[0];V&&da(!0)(V),w.target.value=""}})]}),f.jsxs("label",{className:"welcome-card",children:[f.jsx(ac,{size:22}),f.jsx("b",{children:"Open a project"}),f.jsxs("span",{children:["Continue from a saved ",f.jsx("code",{children:_s.projectExtension})," file."]}),f.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Choose a project file",onChange:w=>{var ee;const V=(ee=w.target.files)==null?void 0:ee[0];V&&_l(V),w.target.value=""}})]}),f.jsxs("div",{className:"welcome-card samples",children:[f.jsx(Fp,{size:22}),f.jsx("b",{children:"Try a sample"}),f.jsx("span",{children:"Original demo files. They fold automatically."}),f.jsx("div",{className:"sample-buttons",children:f.jsx("button",{className:"btn",onClick:gl,children:"Tuck-end carton"})})]})]}),f.jsxs("ol",{className:"how-steps",children:[f.jsxs("li",{children:[f.jsx("b",{children:"1"}),"Upload the dieline"]}),f.jsxs("li",{children:[f.jsx("b",{children:"2"}),"Check units & colours"]}),f.jsxs("li",{children:[f.jsx("b",{children:"3"}),"Suggest folding"]}),f.jsxs("li",{children:[f.jsx("b",{children:"4"}),"Edit the sequence & save"]})]}),l&&f.jsx("p",{className:"banner error inline",children:l.message})]})})}),f.jsx("aside",{className:"inspector-col","aria-label":"Inspector",children:lt?f.jsx(qh,{parts:["selection","hinges"],graph:lt,rig:Qt,rigError:ha,edit:Z,dispatch:I,current:ol,progress:ue,setProgress:M,liveEdits:G,setLiveEdits:ne,onSuggest:er,proposal:zn,check:dl,selected:z,setSelected:Q,selectedStepId:se,setSelectedStepId:pe,totalMs:ii}):f.jsx("div",{className:"inspector inspector-empty-col",children:f.jsxs("div",{className:"inspector-empty",children:[f.jsx("b",{children:"Inspector"}),f.jsx("span",{children:"Panel, crease and step details appear here."})]})})}),f.jsxs("section",{className:"dock","aria-label":"Assembly dock",children:[f.jsxs("div",{className:"dock-head",children:[f.jsxs("button",{className:"dock-toggle",onClick:()=>Ze(!Qe),"aria-expanded":Qe,children:[Qe?f.jsx(Sp,{size:16}):f.jsx(bp,{size:16}),f.jsx("b",{children:"Assembly timeline"})]}),f.jsx("span",{className:"muted",children:lt?Z.mode==="sequence"?`${Z.timeline.length} steps`:"all hinges together":"load a dieline to begin"})]}),lt&&Qe&&f.jsx(vp,{graph:lt,edit:Z,dispatch:I,totalMs:ii,progress:ue,setProgress:M,playing:oe,setPlaying:ce,selectedStepId:se,setSelectedStepId:w=>{pe(w),w&&(le(!0),He("inspect"))},selectedHingeId:(z==null?void 0:z.kind)==="hinge"?z.id:null,onSelectHinge:w=>Q({kind:"hinge",id:w}),autoTimeline:Lu})]}),f.jsx("nav",{className:"mobile-tabs","aria-label":"Workspace areas",children:[["stage","View",rc],["panel","Tools",Vp],["inspect","Inspect",bo],["timeline","Timeline",Lp]].map(([w,V,ee])=>f.jsxs("button",{className:Me===w?"on":"",onClick:()=>He(w),"aria-pressed":Me===w,children:[f.jsx(ee,{size:19}),f.jsx("span",{children:V})]},w))}),F&&f.jsx("div",{className:"modal-backdrop",onClick:()=>fe(!1),children:f.jsxs("form",{className:"modal",role:"dialog","aria-label":"Save project as",onClick:w=>w.stopPropagation(),onSubmit:w=>{w.preventDefault(),Gu(me)},children:[f.jsx("h2",{children:"Save project as"}),f.jsxs("label",{className:"field",children:["Project name",f.jsx("input",{autoFocus:!0,value:me,onChange:w=>Pe(w.target.value),"aria-label":"Project name"})]}),f.jsxs("p",{className:"muted",children:["Downloads ",f.jsx("code",{children:va(me||"project")})," to your device."]}),f.jsxs("div",{className:"modal-actions",children:[f.jsx("button",{type:"button",className:"btn",onClick:()=>fe(!1),children:"Cancel"}),f.jsx("button",{type:"submit",className:"btn primary",children:"Save"})]})]})}),je&&f.jsx("div",{className:"modal-backdrop",onClick:()=>de(!1),children:f.jsxs("div",{className:"modal help",role:"dialog","aria-label":"Help",onClick:w=>w.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsxs("h2",{children:["How ",_s.name," works"]}),f.jsx("button",{className:"tb-btn icon-only",onClick:()=>de(!1),"aria-label":"Close help",children:f.jsx(Td,{size:17})})]}),f.jsxs("ol",{className:"help-list",children:[f.jsxs("li",{children:[f.jsx("b",{children:"Dieline."})," Upload an SVG with cut lines and crease lines (default: black = cut, red = crease; change roles per colour). Unitless files ask which unit they use."]}),f.jsxs("li",{children:[f.jsx("b",{children:"Structure."})," Panels and creases are detected automatically. Hatched areas are cut-outs; green rings mark tiny drawing gaps that were bridged."]}),f.jsxs("li",{children:[f.jsx("b",{children:"Suggest folding."})," A geometric proposal with a confidence per crease. ",f.jsx("em",{children:"High"})," = forced by measured geometry (e.g. walls that close a rectangle). ",f.jsx("em",{children:"Medium"})," = the usual assembly choice. ",f.jsx("em",{children:"Low"})," = a guess or left flat. The SVG alone does not say mountain vs. valley, final angle, or locking order, so check low-confidence creases."]}),f.jsxs("li",{children:[f.jsx("b",{children:"Angles."})," 0° is flat. Positive folds a panel away from you (the drawn side stays outside); negative folds toward you. Every value can be overridden."]}),f.jsxs("li",{children:[f.jsx("b",{children:"Timeline."})," Drag steps and crease chips, or use ▲/▼ on narrow screens. Keyboard: ←/→ select, Alt+←/→ move, Delete remove. Play or scrub to preview."]}),f.jsxs("li",{children:[f.jsx("b",{children:"Save."})," Projects download as ",f.jsx("code",{children:_s.projectExtension})," files that embed your SVGs. Nothing leaves your device."]})]}),f.jsx("p",{className:"muted",children:"Shortcuts: Ctrl/⌘+Z undo · Ctrl/⌘+Shift+Z redo. The preview does not check collisions, glue, locks or board thickness."})]})})]})}const hy=Object.freeze(Object.defineProperty({__proto__:null,ImportStudio:FM,flushAutosave:Ls},Symbol.toStringTag,{value:"Module"}));export{Ir as $,Jm as A,gn as B,pn as C,fn as D,cs as E,zt as F,ra as G,JM as H,QM as I,Ar as J,YM as K,Gs as L,$M as M,L_ as N,hM as O,di as P,Xs as Q,$o as R,ny as S,XM as T,Qn as U,H as V,A_ as W,wM as X,qs as Y,lm as Z,jM as _,Re as a,Gt as a0,ty as a1,up as a2,VM as a3,iy as a4,HM as a5,Ot as a6,vn as a7,cy as a8,oy as a9,Zs as aa,ia as ab,Vr as ac,ry as ad,sy as ae,ay as af,gM as ag,yt as ah,hy as ai,ZM as b,KM as c,W_ as d,Gh as e,vu as f,Qr as g,ym as h,zM as i,WM as j,dM as k,qM as l,GM as m,lg as n,tn as o,Yo as p,Pt as q,Je as r,mn as s,et as t,Em as u,C_ as v,ly as w,un as x,ey as y,bn as z};
