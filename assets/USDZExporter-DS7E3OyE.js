import{D as Ir,a_ as Zr}from"./ImportStudio-CqrfV2QG.js";import{d as Br}from"./TextureUtils-B18buExe.js";import"./index-CzRFJ1pM.js";/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var $r=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL($r(""))}catch{$r=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var C=Uint8Array,S=Uint16Array,G=Uint32Array,cr=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),vr=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Mr=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ur=function(r,e){for(var t=new S(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var o=new G(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)o[a]=a-t[n]<<5|n;return[t,o]},Pr=Ur(cr,2),zr=Pr[0],ir=Pr[1];zr[28]=258,ir[258]=28;var Nr=Ur(vr,0),xr=Nr[1],sr=new S(32768);for(var g=0;g<32768;++g){var N=(g&43690)>>>1|(g&21845)<<1;N=(N&52428)>>>2|(N&13107)<<2,N=(N&61680)>>>4|(N&3855)<<4,sr[g]=((N&65280)>>>8|(N&255)<<8)>>>1}var J=function(r,e,t){for(var n=r.length,o=0,a=new S(e);o<n;++o)++a[r[o]-1];var s=new S(e);for(o=0;o<e;++o)s[o]=s[o-1]+a[o-1]<<1;var l;if(t){l=new S(1<<e);var u=15-e;for(o=0;o<n;++o)if(r[o])for(var c=o<<4|r[o],i=e-r[o],f=s[r[o]-1]++<<i,p=f|(1<<i)-1;f<=p;++f)l[sr[f]>>>u]=c}else for(l=new S(n),o=0;o<n;++o)r[o]&&(l[o]=sr[s[r[o]-1]++]>>>15-r[o]);return l},W=new C(288);for(var g=0;g<144;++g)W[g]=8;for(var g=144;g<256;++g)W[g]=9;for(var g=256;g<280;++g)W[g]=7;for(var g=280;g<288;++g)W[g]=8;var rr=new C(32);for(var g=0;g<32;++g)rr[g]=5;var Vr=J(W,9,0),Wr=J(rr,5,0),Er=function(r){return(r/8|0)+(r&7&&1)},kr=function(r,e,t){(t==null||t>r.length)&&(t=r.length);var n=new(r instanceof S?S:r instanceof G?G:C)(t-e);return n.set(r.subarray(e,t)),n},B=function(r,e,t){t<<=e&7;var n=e/8|0;r[n]|=t,r[n+1]|=t>>>8},Y=function(r,e,t){t<<=e&7;var n=e/8|0;r[n]|=t,r[n+1]|=t>>>8,r[n+2]|=t>>>16},ar=function(r,e){for(var t=[],n=0;n<r.length;++n)r[n]&&t.push({s:n,f:r[n]});var o=t.length,a=t.slice();if(!o)return[Ar,0];if(o==1){var s=new C(t[0].s+1);return s[t[0].s]=1,[s,1]}t.sort(function(A,T){return A.f-T.f}),t.push({s:-1,f:25001});var l=t[0],u=t[1],c=0,i=1,f=2;for(t[0]={s:-1,f:l.f+u.f,l,r:u};i!=o-1;)l=t[t[c].f<t[f].f?c++:f++],u=t[c!=i&&t[c].f<t[f].f?c++:f++],t[i++]={s:-1,f:l.f+u.f,l,r:u};for(var p=a[0].s,n=1;n<o;++n)a[n].s>p&&(p=a[n].s);var v=new S(p+1),d=ur(t[i-1],v,0);if(d>e){var n=0,$=0,x=d-e,U=1<<x;for(a.sort(function(T,M){return v[M.s]-v[T.s]||T.f-M.f});n<o;++n){var P=a[n].s;if(v[P]>e)$+=U-(1<<d-v[P]),v[P]=e;else break}for($>>>=x;$>0;){var Z=a[n].s;v[Z]<e?$-=1<<e-v[Z]++-1:++n}for(;n>=0&&$;--n){var _=a[n].s;v[_]==e&&(--v[_],++$)}d=e}return[new C(v),d]},ur=function(r,e,t){return r.s==-1?Math.max(ur(r.l,e,t+1),ur(r.r,e,t+1)):e[r.s]=t},wr=function(r){for(var e=r.length;e&&!r[--e];);for(var t=new S(++e),n=0,o=r[0],a=1,s=function(u){t[n++]=u},l=1;l<=e;++l)if(r[l]==o&&l!=e)++a;else{if(!o&&a>2){for(;a>138;a-=138)s(32754);a>2&&(s(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(s(o),--a;a>6;a-=6)s(8304);a>2&&(s(a-3<<5|8208),a=0)}for(;a--;)s(o);a=1,o=r[l]}return[t.subarray(0,n),e]},q=function(r,e){for(var t=0,n=0;n<e.length;++n)t+=r[n]*e[n];return t},fr=function(r,e,t){var n=t.length,o=Er(e+2);r[o]=n&255,r[o+1]=n>>>8,r[o+2]=r[o]^255,r[o+3]=r[o+1]^255;for(var a=0;a<n;++a)r[o+a+4]=t[a];return(o+4+n)*8},mr=function(r,e,t,n,o,a,s,l,u,c,i){B(e,i++,t),++o[256];for(var f=ar(o,15),p=f[0],v=f[1],d=ar(a,15),$=d[0],x=d[1],U=wr(p),P=U[0],Z=U[1],_=wr($),A=_[0],T=_[1],M=new S(19),h=0;h<P.length;++h)M[P[h]&31]++;for(var h=0;h<A.length;++h)M[A[h]&31]++;for(var V=ar(M,7),R=V[0],K=V[1],E=19;E>4&&!R[Mr[E-1]];--E);var b=c+5<<3,D=q(o,W)+q(a,rr)+s,O=q(o,p)+q(a,$)+s+14+3*E+q(M,R)+(2*M[16]+3*M[17]+7*M[18]);if(b<=D&&b<=O)return fr(e,i,r.subarray(u,u+c));var L,w,F,z;if(B(e,i,1+(O<D)),i+=2,O<D){L=J(p,v,0),w=p,F=J($,x,0),z=$;var nr=J(R,K,0);B(e,i,Z-257),B(e,i+5,T-1),B(e,i+10,E-4),i+=14;for(var h=0;h<E;++h)B(e,i+3*h,R[Mr[h]]);i+=3*E;for(var H=[P,A],X=0;X<2;++X)for(var j=H[X],h=0;h<j.length;++h){var I=j[h]&31;B(e,i,nr[I]),i+=R[I],I>15&&(B(e,i,j[h]>>>5&127),i+=j[h]>>>12)}}else L=Vr,w=W,F=Wr,z=rr;for(var h=0;h<l;++h)if(n[h]>255){var I=n[h]>>>18&31;Y(e,i,L[I+257]),i+=w[I+257],I>7&&(B(e,i,n[h]>>>23&31),i+=cr[I]);var k=n[h]&31;Y(e,i,F[k]),i+=z[k],k>3&&(Y(e,i,n[h]>>>5&8191),i+=vr[k])}else Y(e,i,L[n[h]]),i+=w[n[h]];return Y(e,i,L[256]),i+w[256]},br=new G([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ar=new C(0),jr=function(r,e,t,n,o,a){var s=r.length,l=new C(n+s+5*(1+Math.ceil(s/7e3))+o),u=l.subarray(n,l.length-o),c=0;if(!e||s<8)for(var i=0;i<=s;i+=65535){var f=i+65535;f<s?c=fr(u,c,r.subarray(i,f)):(u[i]=a,c=fr(u,c,r.subarray(i,s)))}else{for(var p=br[e-1],v=p>>>13,d=p&8191,$=(1<<t)-1,x=new S(32768),U=new S($+1),P=Math.ceil(t/3),Z=2*P,_=function(or){return(r[or]^r[or+1]<<P^r[or+2]<<Z)&$},A=new G(25e3),T=new S(288),M=new S(32),h=0,V=0,i=0,R=0,K=0,E=0;i<s;++i){var b=_(i),D=i&32767,O=U[b];if(x[D]=O,U[b]=D,K<=i){var L=s-i;if((h>7e3||R>24576)&&L>423){c=mr(r,u,0,A,T,M,V,R,E,i-E,c),R=h=V=0,E=i;for(var w=0;w<286;++w)T[w]=0;for(var w=0;w<30;++w)M[w]=0}var F=2,z=0,nr=d,H=D-O&32767;if(L>2&&b==_(i-H))for(var X=Math.min(v,L)-1,j=Math.min(32767,i),I=Math.min(258,L);H<=j&&--nr&&D!=O;){if(r[i+F]==r[i+F-H]){for(var k=0;k<I&&r[i+k]==r[i+k-H];++k);if(k>F){if(F=k,z=H,k>X)break;for(var Lr=Math.min(H,k-2),pr=0,w=0;w<Lr;++w){var tr=i-H+w+32768&32767,Hr=x[tr],hr=tr-Hr+32768&32767;hr>pr&&(pr=hr,O=tr)}}}D=O,O=x[D],H+=D-O+32768&32767}if(z){A[R++]=268435456|ir[F]<<18|xr[z];var dr=ir[F]&31,gr=xr[z]&31;V+=cr[dr]+vr[gr],++T[257+dr],++M[gr],K=i+F,++h}else A[R++]=r[i],++T[r[i]]}}c=mr(r,u,a,A,T,M,V,R,E,i-E,c)}return kr(l,0,n+Er(c)+o)},Gr=function(){for(var r=new G(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;r[e]=t}return r}(),Xr=function(){var r=-1;return{p:function(e){for(var t=r,n=0;n<e.length;++n)t=Gr[t&255^e[n]]^t>>>8;r=t},d:function(){return~r}}},Yr=function(r,e,t,n,o){return jr(r,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(r.length)))*1.5):12+e.mem,t,n,!0)},Rr=function(r,e){var t={};for(var n in r)t[n]=r[n];for(var n in e)t[n]=e[n];return t},m=function(r,e,t){for(;t;++e)r[e]=t,t>>>=8};function qr(r,e){return Yr(r,e||{},0,0)}var Dr=function(r,e,t,n){for(var o in r){var a=r[o],s=e+o;a instanceof C?t[s]=[a,n]:Array.isArray(a)?t[s]=[a[0],Rr(n,a[1])]:Dr(a,s+"/",t,n)}},yr=typeof TextEncoder<"u"&&new TextEncoder,Jr=typeof TextDecoder<"u"&&new TextDecoder,Kr=0;try{Jr.decode(Ar,{stream:!0}),Kr=1}catch{}function er(r,e){var t;if(yr)return yr.encode(r);for(var n=r.length,o=new C(r.length+(r.length>>1)),a=0,s=function(c){o[a++]=c},t=0;t<n;++t){if(a+5>o.length){var l=new C(a+8+(n-t<<1));l.set(o),o=l}var u=r.charCodeAt(t);u<128||e?s(u):u<2048?(s(192|u>>6),s(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|r.charCodeAt(++t)&1023,s(240|u>>18),s(128|u>>12&63),s(128|u>>6&63),s(128|u&63)):(s(224|u>>12),s(128|u>>6&63),s(128|u&63))}return kr(o,0,a)}var lr=function(r){var e=0;if(r)for(var t in r){var n=r[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},Sr=function(r,e,t,n,o,a,s,l){var u=n.length,c=t.extra,i=l&&l.length,f=lr(c);m(r,e,s!=null?33639248:67324752),e+=4,s!=null&&(r[e++]=20,r[e++]=t.os),r[e]=20,e+=2,r[e++]=t.flag<<1|(a==null&&8),r[e++]=o&&8,r[e++]=t.compression&255,r[e++]=t.compression>>8;var p=new Date(t.mtime==null?Date.now():t.mtime),v=p.getFullYear()-1980;if(v<0||v>119)throw"date not in range 1980-2099";if(m(r,e,v<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>>1),e+=4,a!=null&&(m(r,e,t.crc),m(r,e+4,a),m(r,e+8,t.size)),m(r,e+12,u),m(r,e+14,f),e+=16,s!=null&&(m(r,e,i),m(r,e+6,t.attrs),m(r,e+10,s),e+=14),r.set(n,e),e+=u,f)for(var d in c){var $=c[d],x=$.length;m(r,e,+d),m(r,e+2,x),r.set($,e+4),e+=4+x}return i&&(r.set(l,e),e+=i),e},Qr=function(r,e,t,n,o){m(r,e,101010256),m(r,e+8,t),m(r,e+10,t),m(r,e+12,n),m(r,e+16,o)};function re(r,e){e||(e={});var t={},n=[];Dr(r,"",t,e);var o=0,a=0;for(var s in t){var l=t[s],u=l[0],c=l[1],i=c.level==0?0:8,f=er(s),p=f.length,v=c.comment,d=v&&er(v),$=d&&d.length,x=lr(c.extra);if(p>65535)throw"filename too long";var U=i?qr(u,c):u,P=U.length,Z=Xr();Z.p(u),n.push(Rr(c,{size:u.length,crc:Z.d(),c:U,f,m:d,u:p!=s.length||d&&v.length!=$,o,compression:i})),o+=30+p+x+P,a+=76+2*(p+x)+($||0)+P}for(var _=new C(a+22),A=o,T=a-o,M=0;M<n.length;++M){var f=n[M];Sr(_,f.o,f,f.f,f.u,f.c.length);var h=30+f.f.length+lr(f.extra);_.set(f.c,f.o+h),Sr(_,o,f,f.f,f.u,f.c.length,f.o,f.m),o+=16+h+(f.m?f.m.length:0)}return Qr(_,o,n.length,T,A),_}class xe{async parse(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},quickLookCompatible:!1},t);const n={},o="model.usda";n[o]=null;let a=Or();a+=ne(t);const s={},l={};e.traverseVisible(c=>{if(c.isMesh){const i=c.geometry,f=c.material;if(f.isMeshStandardMaterial){const p="geometries/Geometry_"+i.id+".usda";if(!(p in n)){const v=ie(i);n[p]=oe(v)}f.uuid in s||(s[f.uuid]=f),a+=ae(c,i,f)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(a+=de(c))}),a+=te(),a+=ve(s,l,t.quickLookCompatible),n[o]=er(a),a=null;for(const c in l){let i=l[c];i.isCompressedTexture===!0&&(i=Br(i));const f=ee(i.image,i.flipY),p=await new Promise(v=>f.toBlob(v,"image/png",1));n[`textures/Texture_${c}.png`]=new Uint8Array(await p.arrayBuffer())}let u=0;for(const c in n){const i=n[c],f=34+c.length;u+=f;const p=u&63;if(p!==4){const v=64-p,d=new Uint8Array(v);n[c]=[i,{extra:{12345:d}}]}u=i.length}return re(n,{level:0})}}function ee(r,e){if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&r instanceof ImageBitmap){const t=1024/Math.max(r.width,r.height),n=document.createElement("canvas");n.width=r.width*Math.min(1,t),n.height=r.height*Math.min(1,t);const o=n.getContext("2d");return e===!0&&(o.translate(0,n.height),o.scale(1,-1)),o.drawImage(r,0,0,n.width,n.height),n}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const y=7;function Or(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function ne(r){return`def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{
		token preliminary:anchoring:type = "${r.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${r.ar.planeAnchoring.alignment}"

`}function te(){return`
		}
	}
}

`}function oe(r){let e=Or();return e+=r,er(e)}function ae(r,e,t){const n="Object_"+r.id,o=Fr(r.matrixWorld);return r.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",r),`def Xform "${n}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${o}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function Fr(r){const e=r.elements;return`( ${Q(e,0)}, ${Q(e,4)}, ${Q(e,8)}, ${Q(e,12)} )`}function Q(r,e){return`(${r[e+0]}, ${r[e+1]}, ${r[e+2]}, ${r[e+3]})`}function ie(r){return`
def "Geometry"
{
${se(r)}
}
`}function se(r){const e="Geometry",t=r.attributes,n=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${ue(r)}]
		int[] faceVertexIndices = [${fe(r)}]
		normal3f[] normals = [${_r(t.normal,n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${_r(t.position,n)}]
${ce(t)}
		uniform token subdivisionScheme = "none"
	}
`}function ue(r){const e=r.index!==null?r.index.count:r.attributes.position.count;return Array(e/3).fill(3).join(", ")}function fe(r){const e=r.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{const n=r.attributes.position.count;for(let o=0;o<n;o++)t.push(o)}return t.join(", ")}function _r(r,e){if(r===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const t=[];for(let n=0;n<r.count;n++){const o=r.getX(n),a=r.getY(n),s=r.getZ(n);t.push(`(${o.toPrecision(y)}, ${a.toPrecision(y)}, ${s.toPrecision(y)})`)}return t.join(", ")}function le(r){const e=[];for(let t=0;t<r.count;t++){const n=r.getX(t),o=r.getY(t);e.push(`(${n.toPrecision(y)}, ${1-o.toPrecision(y)})`)}return e.join(", ")}function ce(r){let e="";for(let t=0;t<4;t++){const n=t>0?t:"",o=r["uv"+n];o!==void 0&&(e+=`
		texCoord2f[] primvars:st${n} = [${le(o)}] (
			interpolation = "vertex"
		)`)}return e}function ve(r,e,t=!1){const n=[];for(const o in r){const a=r[o];n.push(pe(a,e,t))}return`def "Materials"
{
${n.join("")}
}

`}function pe(r,e,t=!1){const n="			",o=[],a=[];function s(l,u,c){const i=l.source.id+"_"+l.flipY;e[i]=l;const f=l.channel>0?"st"+l.channel:"st",p={1e3:"repeat",1001:"clamp",1002:"mirror"},v=l.repeat.clone(),d=l.offset.clone(),$=l.rotation,x=Math.sin($),U=Math.cos($);return d.y=1-d.y-v.y,t?(d.x=d.x/v.x,d.y=d.y/v.y,d.x+=x/v.x,d.y+=U-1):(d.x+=x*v.x,d.y+=(1-U)*v.y),`
		def Shader "PrimvarReader_${u}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${f}"
			float2 outputs:result
		}

		def Shader "Transform2d_${u}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${r.id}/PrimvarReader_${u}.outputs:result>
			float inputs:rotation = ${($*(180/Math.PI)).toFixed(y)}
			float2 inputs:scale = ${Cr(v)}
			float2 inputs:translation = ${Cr(d)}
			float2 outputs:result
		}

		def Shader "Texture_${l.id}_${u}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${i}.png@
			float2 inputs:st.connect = </Materials/Material_${r.id}/Transform2d_${u}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+he(c):""}
			token inputs:sourceColorSpace = "${l.colorSpace===Zr?"raw":"sRGB"}"
			token inputs:wrapS = "${p[l.wrapS]}"
			token inputs:wrapT = "${p[l.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${r.transparent||r.alphaTest>0?"float outputs:a":""}
		}`}return r.side===Ir&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",r),r.map!==null?(o.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${r.id}/Texture_${r.map.id}_diffuse.outputs:rgb>`),r.transparent?o.push(`${n}float inputs:opacity.connect = </Materials/Material_${r.id}/Texture_${r.map.id}_diffuse.outputs:a>`):r.alphaTest>0&&(o.push(`${n}float inputs:opacity.connect = </Materials/Material_${r.id}/Texture_${r.map.id}_diffuse.outputs:a>`),o.push(`${n}float inputs:opacityThreshold = ${r.alphaTest}`)),a.push(s(r.map,"diffuse",r.color))):o.push(`${n}color3f inputs:diffuseColor = ${Tr(r.color)}`),r.emissiveMap!==null?(o.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${r.id}/Texture_${r.emissiveMap.id}_emissive.outputs:rgb>`),a.push(s(r.emissiveMap,"emissive"))):r.emissive.getHex()>0&&o.push(`${n}color3f inputs:emissiveColor = ${Tr(r.emissive)}`),r.normalMap!==null&&(o.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${r.id}/Texture_${r.normalMap.id}_normal.outputs:rgb>`),a.push(s(r.normalMap,"normal"))),r.aoMap!==null&&(o.push(`${n}float inputs:occlusion.connect = </Materials/Material_${r.id}/Texture_${r.aoMap.id}_occlusion.outputs:r>`),a.push(s(r.aoMap,"occlusion"))),r.roughnessMap!==null&&r.roughness===1?(o.push(`${n}float inputs:roughness.connect = </Materials/Material_${r.id}/Texture_${r.roughnessMap.id}_roughness.outputs:g>`),a.push(s(r.roughnessMap,"roughness"))):o.push(`${n}float inputs:roughness = ${r.roughness}`),r.metalnessMap!==null&&r.metalness===1?(o.push(`${n}float inputs:metallic.connect = </Materials/Material_${r.id}/Texture_${r.metalnessMap.id}_metallic.outputs:b>`),a.push(s(r.metalnessMap,"metallic"))):o.push(`${n}float inputs:metallic = ${r.metalness}`),r.alphaMap!==null?(o.push(`${n}float inputs:opacity.connect = </Materials/Material_${r.id}/Texture_${r.alphaMap.id}_opacity.outputs:r>`),o.push(`${n}float inputs:opacityThreshold = 0.0001`),a.push(s(r.alphaMap,"opacity"))):o.push(`${n}float inputs:opacity = ${r.opacity}`),r.isMeshPhysicalMaterial&&(o.push(`${n}float inputs:clearcoat = ${r.clearcoat}`),o.push(`${n}float inputs:clearcoatRoughness = ${r.clearcoatRoughness}`),o.push(`${n}float inputs:ior = ${r.ior}`)),`
	def Material "Material_${r.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${o.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${r.id}/PreviewSurface.outputs:surface>

${a.join(`
`)}

	}
`}function Tr(r){return`(${r.r}, ${r.g}, ${r.b})`}function he(r){return`(${r.r}, ${r.g}, ${r.b}, 1.0)`}function Cr(r){return`(${r.x}, ${r.y})`}function de(r){const e=r.name?r.name:"Camera_"+r.id,t=Fr(r.matrixWorld);return r.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",r),r.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${r.near.toPrecision(y)}, ${r.far.toPrecision(y)})
			float horizontalAperture = ${((Math.abs(r.left)+Math.abs(r.right))*10).toPrecision(y)}
			float verticalAperture = ${((Math.abs(r.top)+Math.abs(r.bottom))*10).toPrecision(y)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${r.near.toPrecision(y)}, ${r.far.toPrecision(y)})
			float focalLength = ${r.getFocalLength().toPrecision(y)}
			float focusDistance = ${r.focus.toPrecision(y)}
			float horizontalAperture = ${r.getFilmWidth().toPrecision(y)}
			token projection = "perspective"
			float verticalAperture = ${r.getFilmHeight().toPrecision(y)}
		}
	
	`}export{xe as USDZExporter};
