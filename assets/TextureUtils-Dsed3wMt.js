import{I as u,x as g,bf as w,s as h,z as p,a7 as S,N as C,a4 as T,r as _}from"./ImportStudio-DFx7ScM2.js";let t,c,i,s;function U(e,m=1/0,a=null){c||(c=new u(2,2,1,1)),i||(i=new g({uniforms:{blitTexture:new w(e)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),i.uniforms.blitTexture.value=e,i.defines.IS_SRGB=e.colorSpace==h,i.needsUpdate=!0,s||(s=new p(c,i),s.frustrumCulled=!1);const d=new S,v=new C;v.add(s),a===null&&(a=t=new T({antialias:!1}));const r=Math.min(e.image.width,m),o=Math.min(e.image.height,m);a.setSize(r,o),a.clear(),a.render(v,d);const l=document.createElement("canvas"),f=l.getContext("2d");l.width=r,l.height=o,f.drawImage(a.domElement,0,0,r,o);const n=new _(l);return n.minFilter=e.minFilter,n.magFilter=e.magFilter,n.wrapS=e.wrapS,n.wrapT=e.wrapT,n.name=e.name,t&&(t.forceContextLoss(),t.dispose(),t=null),n}export{U as d};
