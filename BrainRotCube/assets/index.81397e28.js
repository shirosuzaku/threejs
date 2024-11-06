const Pc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};Pc();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="128",Cn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dc=0,Da=1,Ic=2,pl=1,Nc=2,Si=3,Fr=0,Qe=1,Or=2,ml=1,Ai=0,Li=1,Ia=2,Na=3,Fa=4,Fc=5,jn=100,Oc=101,Bc=102,Oa=103,Ba=104,zc=200,kc=201,Hc=202,Uc=203,gl=204,_l=205,Vc=206,Gc=207,Wc=208,Xc=209,qc=210,Yc=0,jc=1,Zc=2,Os=3,Jc=4,$c=5,Qc=6,Kc=7,Br=0,eh=1,th=2,Ci=0,nh=1,ih=2,rh=3,sh=4,ah=5,vl=300,Qs=301,Ks=302,za=303,ka=304,ea=306,ta=307,Bs=1e3,Lt=1001,zs=1002,ut=1003,Ha=1004,Ua=1005,gt=1006,oh=1007,na=1008,ia=1009,lh=1010,ch=1011,Sr=1012,hh=1013,Mr=1014,rn=1015,Er=1016,uh=1017,dh=1018,fh=1019,Ri=1020,ph=1021,sn=1022,Ct=1023,mh=1024,gh=1025,ni=1026,Fi=1027,_h=1028,vh=1029,xh=1030,yh=1031,bh=1032,wh=1033,Va=33776,Ga=33777,Wa=33778,Xa=33779,qa=35840,Ya=35841,ja=35842,Za=35843,Mh=36196,Ja=37492,$a=37496,Sh=37808,Eh=37809,Th=37810,Ah=37811,Lh=37812,Ch=37813,Rh=37814,Ph=37815,Dh=37816,Ih=37817,Nh=37818,Fh=37819,Oh=37820,Bh=37821,zh=36492,kh=37840,Hh=37841,Uh=37842,Vh=37843,Gh=37844,Wh=37845,Xh=37846,qh=37847,Yh=37848,jh=37849,Zh=37850,Jh=37851,$h=37852,Qh=37853,Kh=2200,eu=2201,tu=2202,Tr=2300,Ar=2301,Jr=2302,$n=2400,Qn=2401,Lr=2402,ra=2500,xl=2501,nu=0,Gi=3e3,yl=3001,iu=3007,ru=3002,su=3003,au=3004,ou=3005,lu=3006,cu=3200,hu=3201,si=0,uu=1,$r=7680,du=519,Oi=35044,Cr=35048,Qa="300 es";class pn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const st=[];for(let r=0;r<256;r++)st[r]=(r<16?"0":"")+r.toString(16);const Qr=Math.PI/180,ks=180/Math.PI;function zt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[t&63|128]+st[t>>8&255]+"-"+st[t>>16&255]+st[t>>24&255]+st[n&255]+st[n>>8&255]+st[n>>16&255]+st[n>>24&255]).toUpperCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function fu(r,e){return(r%e+e)%e}function Kr(r,e,t){return(1-t)*r+t*e}function Ka(r){return(r&r-1)===0&&r!==0}function pu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class ${constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}$.prototype.isVector2=!0;class at{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],v=i[3],g=i[6],p=i[1],T=i[4],C=i[7],A=i[2],x=i[5],F=i[8];return s[0]=a*_+o*p+l*A,s[3]=a*v+o*T+l*x,s[6]=a*g+o*C+l*F,s[1]=c*_+h*p+u*A,s[4]=c*v+h*T+u*x,s[7]=c*g+h*C+u*F,s[2]=d*_+f*p+m*A,s[5]=d*v+f*T+m*x,s[8]=d*g+f*C+m*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*h,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}at.prototype.isMatrix3=!0;let Pn;class ai{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pn===void 0&&(Pn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Pn.width=e.width,Pn.height=e.height;const n=Pn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let gu=0;class ot extends pn{constructor(e=ot.DEFAULT_IMAGE,t=ot.DEFAULT_MAPPING,n=Lt,i=Lt,s=gt,a=na,o=Ct,l=ia,c=1,h=Gi){super(),Object.defineProperty(this,"id",{value:gu++}),this.uuid=zt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=zt()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(es(i[a].image)):s.push(es(i[a]))}else s=es(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ot.DEFAULT_IMAGE=void 0;ot.DEFAULT_MAPPING=vl;ot.prototype.isTexture=!0;function es(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?ai.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Be{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],v=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+v)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,C=(f+1)/2,A=(g+1)/2,x=(h+d)/4,F=(u+_)/4,B=(m+v)/4;return T>C&&T>A?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=x/n,s=F/n):C>A?C<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(C),n=x/i,s=B/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=F/s,i=B/s),this.set(n,i,s,t),this}let p=Math.sqrt((v-m)*(v-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(v-m)/p,this.y=(u-_)/p,this.z=(d-h)/p,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Be.prototype.isVector4=!0;class En extends pn{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Be(0,0,e,t),this.scissorTest=!1,this.viewport=new Be(0,0,e,t),n=n||{},this.texture=new ot(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}En.prototype.isWebGLRenderTarget=!0;class _u extends En{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}_u.prototype.isWebGLMultisampleRenderTarget=!0;class Ke{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],m=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let v=1-o;const g=l*d+c*f+h*m+u*_,p=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const A=Math.sqrt(T),x=Math.atan2(A,g*p);v=Math.sin(v*x)/A,o=Math.sin(o*x)/A}const C=o*p;if(l=l*v+d*C,c=c*v+f*C,h=h*v+m*C,u=u*v+_*C,v===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ke.prototype.isQuaternion=!0;class w{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-s*i,u=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ts.copy(this).projectOnVector(e),this.sub(ts)}reflect(e){return this.sub(ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}w.prototype.isVector3=!0;const ts=new w,eo=new Ke;class wt{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),ns.copy(t.boundingBox),ns.applyMatrix4(e.matrixWorld),this.union(ns));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new w),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fi),qi.subVectors(this.max,fi),Dn.subVectors(e.a,fi),In.subVectors(e.b,fi),Nn.subVectors(e.c,fi),Zt.subVectors(In,Dn),Jt.subVectors(Nn,In),bn.subVectors(Dn,Nn);let t=[0,-Zt.z,Zt.y,0,-Jt.z,Jt.y,0,-bn.z,bn.y,Zt.z,0,-Zt.x,Jt.z,0,-Jt.x,bn.z,0,-bn.x,-Zt.y,Zt.x,0,-Jt.y,Jt.x,0,-bn.y,bn.x,0];return!is(t,Dn,In,Nn,qi)||(t=[1,0,0,0,1,0,0,0,1],!is(t,Dn,In,Nn,qi))?!1:(Yi.crossVectors(Zt,Jt),t=[Yi.x,Yi.y,Yi.z],is(t,Dn,In,Nn,qi))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new w),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return di.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(di).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}wt.prototype.isBox3=!0;const Gt=[new w,new w,new w,new w,new w,new w,new w,new w],di=new w,ns=new wt,Dn=new w,In=new w,Nn=new w,Zt=new w,Jt=new w,bn=new w,fi=new w,qi=new w,Yi=new w,wn=new w;function is(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){wn.fromArray(r,s);const o=i.x*Math.abs(wn.x)+i.y*Math.abs(wn.y)+i.z*Math.abs(wn.z),l=e.dot(wn),c=t.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vu=new wt,to=new w,rs=new w,ss=new w;class oi{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new w),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new wt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ss.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return rs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(to.copy(e.center).add(rs)),this.expandByPoint(to.copy(e.center).sub(rs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wt=new w,as=new w,ji=new w,$t=new w,os=new w,Zi=new w,ls=new w;class Tn{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new w),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new w),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wt.copy(this.direction).multiplyScalar(t).add(this.origin),Wt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){as.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),$t.copy(this.origin).sub(as);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ji),o=$t.dot(this.direction),l=-$t.dot(ji),c=$t.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(ji).multiplyScalar(d).add(as),f}intersectSphere(e,t){Wt.subVectors(e.center,this.origin);const n=Wt.dot(this.direction),i=Wt.dot(Wt)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wt)!==null}intersectTriangle(e,t,n,i,s){os.subVectors(t,e),Zi.subVectors(n,e),ls.crossVectors(os,Zi);let a=this.direction.dot(ls),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$t.subVectors(this.origin,e);const l=o*this.direction.dot(Zi.crossVectors($t,Zi));if(l<0)return null;const c=o*this.direction.dot(os.cross($t));if(c<0||l+c>a)return null;const h=-o*$t.dot(ls);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,h,u,d,f,m,_,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fn.setFromMatrixColumn(e,0).length(),s=1/Fn.setFromMatrixColumn(e,1).length(),a=1/Fn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,yu)}lookAt(e,t,n){const i=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),Qt.crossVectors(n,_t),Qt.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),Qt.crossVectors(n,_t)),Qt.normalize(),Ji.crossVectors(_t,Qt),i[0]=Qt.x,i[4]=Ji.x,i[8]=_t.x,i[1]=Qt.y,i[5]=Ji.y,i[9]=_t.y,i[2]=Qt.z,i[6]=Ji.z,i[10]=_t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],v=n[10],g=n[14],p=n[3],T=n[7],C=n[11],A=n[15],x=i[0],F=i[4],B=i[8],z=i[12],W=i[1],j=i[5],H=i[9],L=i[13],P=i[2],D=i[6],R=i[10],Z=i[14],te=i[3],K=i[7],le=i[11],oe=i[15];return s[0]=a*x+o*W+l*P+c*te,s[4]=a*F+o*j+l*D+c*K,s[8]=a*B+o*H+l*R+c*le,s[12]=a*z+o*L+l*Z+c*oe,s[1]=h*x+u*W+d*P+f*te,s[5]=h*F+u*j+d*D+f*K,s[9]=h*B+u*H+d*R+f*le,s[13]=h*z+u*L+d*Z+f*oe,s[2]=m*x+_*W+v*P+g*te,s[6]=m*F+_*j+v*D+g*K,s[10]=m*B+_*H+v*R+g*le,s[14]=m*z+_*L+v*Z+g*oe,s[3]=p*x+T*W+C*P+A*te,s[7]=p*F+T*j+C*D+A*K,s[11]=p*B+T*H+C*R+A*le,s[15]=p*z+T*L+C*Z+A*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],v=e[11],g=e[15];return m*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+v*(+t*c*u-t*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+g*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],v=e[14],g=e[15],p=u*v*c-_*d*c+_*l*f-o*v*f-u*l*g+o*d*g,T=m*d*c-h*v*c-m*l*f+a*v*f+h*l*g-a*d*g,C=h*_*c-m*u*c+m*o*f-a*_*f-h*o*g+a*u*g,A=m*u*l-h*_*l-m*o*d+a*_*d+h*o*v-a*u*v,x=t*p+n*T+i*C+s*A;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/x;return e[0]=p*F,e[1]=(_*d*s-u*v*s-_*i*f+n*v*f+u*i*g-n*d*g)*F,e[2]=(o*v*s-_*l*s+_*i*c-n*v*c-o*i*g+n*l*g)*F,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*F,e[4]=T*F,e[5]=(h*v*s-m*d*s+m*i*f-t*v*f-h*i*g+t*d*g)*F,e[6]=(m*l*s-a*v*s-m*i*c+t*v*c+a*i*g-t*l*g)*F,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*f+t*l*f)*F,e[8]=C*F,e[9]=(m*u*s-h*_*s-m*n*f+t*_*f+h*n*g-t*u*g)*F,e[10]=(a*_*s-m*o*s+m*n*c-t*_*c-a*n*g+t*o*g)*F,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*f-t*o*f)*F,e[12]=A*F,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*v+t*u*v)*F,e[14]=(m*o*i-a*_*i-m*n*l+t*_*l+a*n*v-t*o*v)*F,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,_=a*h,v=a*u,g=o*u,p=l*c,T=l*h,C=l*u,A=n.x,x=n.y,F=n.z;return i[0]=(1-(_+g))*A,i[1]=(f+C)*A,i[2]=(m-T)*A,i[3]=0,i[4]=(f-C)*x,i[5]=(1-(d+g))*x,i[6]=(v+p)*x,i[7]=0,i[8]=(m+T)*F,i[9]=(v-p)*F,i[10]=(1-(d+_))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Fn.set(i[0],i[1],i[2]).length();const a=Fn.set(i[4],i[5],i[6]).length(),o=Fn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],St.copy(this);const c=1/s,h=1/a,u=1/o;return St.elements[0]*=c,St.elements[1]*=c,St.elements[2]*=c,St.elements[4]*=h,St.elements[5]*=h,St.elements[6]*=h,St.elements[8]*=u,St.elements[9]*=u,St.elements[10]*=u,t.setFromRotationMatrix(St),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-s),u=(t+e)*l,d=(n+i)*c,f=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ge.prototype.isMatrix4=!0;const Fn=new w,St=new ge,xu=new w(0,0,0),yu=new w(1,1,1),Qt=new w,Ji=new w,_t=new w,no=new ge,io=new Ke;class li{constructor(e=0,t=0,n=0,i=li.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return no.makeRotationFromQuaternion(e),this.setFromRotationMatrix(no,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return io.setFromEuler(this),this.setFromQuaternion(io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}li.prototype.isEuler=!0;li.DefaultOrder="XYZ";li.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bl{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let bu=0;const ro=new w,On=new Ke,Xt=new ge,$i=new w,pi=new w,wu=new w,Mu=new Ke,so=new w(1,0,0),ao=new w(0,1,0),oo=new w(0,0,1),Su={type:"added"},lo={type:"removed"};class De extends pn{constructor(){super(),Object.defineProperty(this,"id",{value:bu++}),this.uuid=zt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DefaultUp.clone();const e=new w,t=new li,n=new Ke,i=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new at}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=De.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.multiply(On),this}rotateOnWorldAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.premultiply(On),this}rotateX(e){return this.rotateOnAxis(so,e)}rotateY(e){return this.rotateOnAxis(ao,e)}rotateZ(e){return this.rotateOnAxis(oo,e)}translateOnAxis(e,t){return ro.copy(e).applyQuaternion(this.quaternion),this.position.add(ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(so,e)}translateY(e){return this.translateOnAxis(ao,e)}translateZ(e){return this.translateOnAxis(oo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(pi,$i,this.up):Xt.lookAt($i,pi,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),On.setFromRotationMatrix(Xt),this.quaternion.premultiply(On.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Su)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lo)),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(lo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new Ke),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,e,wu),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,Mu,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}De.DefaultUp=new w(0,1,0);De.DefaultMatrixAutoUpdate=!0;De.prototype.isObject3D=!0;const cs=new w,Eu=new w,Tu=new at;class Ft{constructor(e=new w(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cs.subVectors(n,t).cross(Eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new w),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new w);const n=e.delta(cs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new w),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tu.getNormalMatrix(e),i=this.coplanarPoint(cs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Ft.prototype.isPlane=!0;const Et=new w,qt=new w,hs=new w,Yt=new w,Bn=new w,zn=new w,co=new w,us=new w,ds=new w,fs=new w;class Ze{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new w),i.subVectors(n,t),Et.subVectors(e,t),i.cross(Et);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Et.subVectors(i,t),qt.subVectors(n,t),hs.subVectors(e,t);const a=Et.dot(Et),o=Et.dot(qt),l=Et.dot(hs),c=qt.dot(qt),h=qt.dot(hs),u=a*c-o*o;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new w),u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yt),Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Yt),l.set(0,0),l.addScaledVector(s,Yt.x),l.addScaledVector(a,Yt.y),l.addScaledVector(o,Yt.z),l}static isFrontFacing(e,t,n,i){return Et.subVectors(n,t),qt.subVectors(e,t),Et.cross(qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Et.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Et.cross(qt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new w),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ze.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Ft),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ze.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ze.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ze.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ze.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new w);const n=this.a,i=this.b,s=this.c;let a,o;Bn.subVectors(i,n),zn.subVectors(s,n),us.subVectors(e,n);const l=Bn.dot(us),c=zn.dot(us);if(l<=0&&c<=0)return t.copy(n);ds.subVectors(e,i);const h=Bn.dot(ds),u=zn.dot(ds);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Bn,a);fs.subVectors(e,s);const f=Bn.dot(fs),m=zn.dot(fs);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(zn,o);const v=h*m-f*u;if(v<=0&&u-h>=0&&f-m>=0)return co.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(co,o);const g=1/(v+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(Bn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Au=0;function it(){Object.defineProperty(this,"id",{value:Au++}),this.uuid=zt(),this.name="",this.type="Material",this.fog=!0,this.blending=Li,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}it.prototype=Object.assign(Object.create(pn.prototype),{constructor:it,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(r){if(r!==void 0)for(const e in r){const t=r[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===ml;continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(r){const e=r===void 0||typeof r=="string";e&&(r={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(r).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(r).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(r).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(r).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(r).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(r).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(t.blending=this.blending),this.side!==Fr&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){const s=[];for(const a in i){const o=i[a];delete o.metadata,s.push(o)}return s}if(e){const i=n(r.textures),s=n(r.images);i.length>0&&(t.textures=i),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(r){this.name=r.name,this.fog=r.fog,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;const e=r.clippingPlanes;let t=null;if(e!==null){const n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(it.prototype,"needsUpdate",{set:function(r){r===!0&&this.version++}});const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tt={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function ps(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ms(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class de{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=fu(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=ps(s,i,e+1/3),this.g=ps(s,i,e),this.b=ps(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=wl[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case t:o=(n-i)/h+(n<i?6:0);break;case n:o=(i-t)/h+2;break;case i:o=(t-n)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Tt),Tt.h+=e,Tt.s+=t,Tt.l+=n,this.setHSL(Tt.h,Tt.s,Tt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tt),e.getHSL(Qi);const n=Kr(Tt.h,Qi.h,t),i=Kr(Tt.s,Qi.s,t),s=Kr(Tt.l,Qi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}de.NAMES=wl;de.prototype.isColor=!0;de.prototype.r=1;de.prototype.g=1;de.prototype.b=1;class zr extends it{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}zr.prototype.isMeshBasicMaterial=!0;const He=new w,Ki=new $;class et{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Oi,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new de),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new $),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new w),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Be),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.applyMatrix3(e),this.setXY(t,Ki.x,Ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oi&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}et.prototype.isBufferAttribute=!0;class Ml extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sl extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lu extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Lu.prototype.isFloat16BufferAttribute=!0;class tt extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}}function El(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}let Cu=0;const It=new ge,_s=new De,kn=new w,vt=new wt,mi=new wt,$e=new w;class Ue extends pn{constructor(){super(),Object.defineProperty(this,"id",{value:Cu++}),this.uuid=zt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(El(e)>65535?Sl:Ml)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return _s.lookAt(e),_s.updateMatrix(),this.applyMatrix4(_s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];vt.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];mi.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(vt.min,mi.min),vt.expandByPoint($e),$e.addVectors(vt.max,mi.max),vt.expandByPoint($e)):(vt.expandByPoint(mi.min),vt.expandByPoint(mi.max))}vt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)$e.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($e));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$e.fromBufferAttribute(o,c),l&&(kn.fromBufferAttribute(e,c),$e.add(kn)),i=Math.max(i,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new et(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let W=0;W<o;W++)c[W]=new w,h[W]=new w;const u=new w,d=new w,f=new w,m=new $,_=new $,v=new $,g=new w,p=new w;function T(W,j,H){u.fromArray(i,W*3),d.fromArray(i,j*3),f.fromArray(i,H*3),m.fromArray(a,W*2),_.fromArray(a,j*2),v.fromArray(a,H*2),d.sub(u),f.sub(u),_.sub(m),v.sub(m);const L=1/(_.x*v.y-v.x*_.y);!isFinite(L)||(g.copy(d).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(L),p.copy(f).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(L),c[W].add(g),c[j].add(g),c[H].add(g),h[W].add(p),h[j].add(p),h[H].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let W=0,j=C.length;W<j;++W){const H=C[W],L=H.start,P=H.count;for(let D=L,R=L+P;D<R;D+=3)T(n[D+0],n[D+1],n[D+2])}const A=new w,x=new w,F=new w,B=new w;function z(W){F.fromArray(s,W*3),B.copy(F);const j=c[W];A.copy(j),A.sub(F.multiplyScalar(F.dot(j))).normalize(),x.crossVectors(B,j);const L=x.dot(h[W])<0?-1:1;l[W*4]=A.x,l[W*4+1]=A.y,l[W*4+2]=A.z,l[W*4+3]=L}for(let W=0,j=C.length;W<j;++W){const H=C[W],L=H.start,P=H.count;for(let D=L,R=L+P;D<R;D+=3)z(n[D+0]),z(n[D+1]),z(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,s=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,h=Math.min(l.length,a.length-c);for(let u=0,d=c;u<h;u++,d++)a[d]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$e.fromBufferAttribute(e,t),$e.normalize(),e.setXYZ(t,$e.x,$e.y,$e.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,v=l.length;_<v;_++){f=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ue,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new Ue().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.prototype.isBufferGeometry=!0;const ho=new ge,Hn=new Tn,vs=new oi,Kt=new w,en=new w,tn=new w,xs=new w,ys=new w,bs=new w,er=new w,tr=new w,nr=new w,ir=new $,rr=new $,sr=new $,ws=new w,ar=new w;class yt extends De{constructor(e=new Ue,t=new zr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(s),e.ray.intersectsSphere(vs)===!1)||(ho.copy(s).invert(),Hn.copy(e.ray).applyMatrix4(ho),n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=i[g.materialIndex],T=Math.max(g.start,m.start),C=Math.min(g.start+g.count,m.start+m.count);for(let A=T,x=C;A<x;A+=3){const F=o.getX(A),B=o.getX(A+1),z=o.getX(A+2);a=or(this,p,e,Hn,l,c,h,u,d,F,B,z),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const T=o.getX(g),C=o.getX(g+1),A=o.getX(g+2);a=or(this,i,e,Hn,l,c,h,u,d,T,C,A),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=i[g.materialIndex],T=Math.max(g.start,m.start),C=Math.min(g.start+g.count,m.start+m.count);for(let A=T,x=C;A<x;A+=3){const F=A,B=A+1,z=A+2;a=or(this,p,e,Hn,l,c,h,u,d,F,B,z),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const T=g,C=g+1,A=g+2;a=or(this,i,e,Hn,l,c,h,u,d,T,C,A),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}yt.prototype.isMesh=!0;function Ru(r,e,t,n,i,s,a,o){let l;if(e.side===Qe?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==Or,o),l===null)return null;ar.copy(o),ar.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ar);return c<t.near||c>t.far?null:{distance:c,point:ar.clone(),object:r}}function or(r,e,t,n,i,s,a,o,l,c,h,u){Kt.fromBufferAttribute(i,c),en.fromBufferAttribute(i,h),tn.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(e.morphTargets&&s&&d){er.set(0,0,0),tr.set(0,0,0),nr.set(0,0,0);for(let m=0,_=s.length;m<_;m++){const v=d[m],g=s[m];v!==0&&(xs.fromBufferAttribute(g,c),ys.fromBufferAttribute(g,h),bs.fromBufferAttribute(g,u),a?(er.addScaledVector(xs,v),tr.addScaledVector(ys,v),nr.addScaledVector(bs,v)):(er.addScaledVector(xs.sub(Kt),v),tr.addScaledVector(ys.sub(en),v),nr.addScaledVector(bs.sub(tn),v)))}Kt.add(er),en.add(tr),tn.add(nr)}r.isSkinnedMesh&&e.skinning&&(r.boneTransform(c,Kt),r.boneTransform(h,en),r.boneTransform(u,tn));const f=Ru(r,e,t,n,Kt,en,tn,ws);if(f){o&&(ir.fromBufferAttribute(o,c),rr.fromBufferAttribute(o,h),sr.fromBufferAttribute(o,u),f.uv=Ze.getUV(ws,Kt,en,tn,ir,rr,sr,new $)),l&&(ir.fromBufferAttribute(l,c),rr.fromBufferAttribute(l,h),sr.fromBufferAttribute(l,u),f.uv2=Ze.getUV(ws,Kt,en,tn,ir,rr,sr,new $));const m={a:c,b:h,c:u,normal:new w,materialIndex:0};Ze.getNormal(Kt,en,tn,m.normal),f.face=m}return f}class sa extends Ue{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function m(_,v,g,p,T,C,A,x,F,B,z){const W=C/F,j=A/B,H=C/2,L=A/2,P=x/2,D=F+1,R=B+1;let Z=0,te=0;const K=new w;for(let le=0;le<R;le++){const oe=le*j-L;for(let fe=0;fe<D;fe++){const _e=fe*W-H;K[_]=_e*p,K[v]=oe*T,K[g]=P,c.push(K.x,K.y,K.z),K[_]=0,K[v]=0,K[g]=x>0?1:-1,h.push(K.x,K.y,K.z),u.push(fe/F),u.push(1-le/B),Z+=1}}for(let le=0;le<B;le++)for(let oe=0;oe<F;oe++){const fe=d+oe+D*le,_e=d+oe+D*(le+1),U=d+(oe+1)+D*(le+1),Ne=d+(oe+1)+D*le;l.push(fe,_e,Ne),l.push(_e,U,Ne),te+=6}o.addGroup(f,te,z),f+=te,d+=Z}}}function ii(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function lt(r){const e={};for(let t=0;t<r.length;t++){const n=ii(r[t]);for(const i in n)e[i]=n[i]}return e}const Pu={clone:ii,merge:lt};var Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends it{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Du,this.fragmentShader=Iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ii(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}ln.prototype.isShaderMaterial=!0;class aa extends De{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}aa.prototype.isCamera=!0;class mt extends aa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}mt.prototype.isPerspectiveCamera=!0;const Un=90,Vn=1;class oa extends De{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new mt(Un,Vn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const s=new mt(Un,Vn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new w(-1,0,0)),this.add(s);const a=new mt(Un,Vn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new w(0,1,0)),this.add(a);const o=new mt(Un,Vn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new w(0,-1,0)),this.add(o);const l=new mt(Un,Vn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,1)),this.add(l);const c=new mt(Un,Vn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class kr extends ot{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qs,o=o!==void 0?o:sn,super(e,t,n,i,s,a,o,l,c,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}kr.prototype.isCubeTexture=!0;class Tl extends En{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new kr(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Ct,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new sa(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Ai});s.uniforms.tEquirect.value=t;const a=new yt(i,s),o=t.minFilter;return t.minFilter===na&&(t.minFilter=gt),new oa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}Tl.prototype.isWebGLCubeRenderTarget=!0;class Al extends ot{constructor(e,t,n,i,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,s,u,d),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:ut,this.minFilter=h!==void 0?h:ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Al.prototype.isDataTexture=!0;const Gn=new oi,lr=new w;class Hr{constructor(e=new Ft,t=new Ft,n=new Ft,i=new Ft,s=new Ft,a=new Ft){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],m=n[10],_=n[11],v=n[12],g=n[13],p=n[14],T=n[15];return t[0].setComponents(o-i,u-l,_-d,T-v).normalize(),t[1].setComponents(o+i,u+l,_+d,T+v).normalize(),t[2].setComponents(o+s,u+c,_+f,T+g).normalize(),t[3].setComponents(o-s,u-c,_-f,T-g).normalize(),t[4].setComponents(o-a,u-h,_-m,T-p).normalize(),t[5].setComponents(o+a,u+h,_+m,T+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lr.x=i.normal.x>0?e.max.x:e.min.x,lr.y=i.normal.y>0?e.max.y:e.min.y,lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ll(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Nu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:u instanceof Uint8Array&&(m=5121),{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class la extends Ue{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],_=[],v=[];for(let g=0;g<h;g++){const p=g*d-a;for(let T=0;T<c;T++){const C=T*u-s;m.push(C,-p,0),_.push(0,0,1),v.push(T/o),v.push(1-g/l)}}for(let g=0;g<l;g++)for(let p=0;p<o;p++){const T=p+c*g,C=p+c*(g+1),A=p+1+c*(g+1),x=p+1+c*g;f.push(T,C,x),f.push(C,A,x)}this.setIndex(f),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(v,2))}}var Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,zu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu="vec3 transformed = vec3( position );",Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ad=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,od=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,_d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,yd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,bd=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Md=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ld=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fd=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
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
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Xd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Yd=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rf=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,sf=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,af=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,of=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
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
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,_f=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,vf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,xf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,yf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,bf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Mf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ef=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Xf=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Yf=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,Zf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
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
}`,Jf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Kf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ep=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,np=`uniform float rotation;
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
}`;const Ee={alphamap_fragment:Fu,alphamap_pars_fragment:Ou,alphatest_fragment:Bu,aomap_fragment:zu,aomap_pars_fragment:ku,begin_vertex:Hu,beginnormal_vertex:Uu,bsdfs:Vu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:ju,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:$u,common:Qu,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:ed,displacementmap_pars_vertex:td,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:rd,encodings_fragment:sd,encodings_pars_fragment:ad,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:bd,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_fragment:_d,lightmap_pars_fragment:vd,lights_lambert_vertex:xd,lights_pars_begin:yd,lights_toon_fragment:wd,lights_toon_pars_fragment:Md,lights_phong_fragment:Sd,lights_phong_pars_fragment:Ed,lights_physical_fragment:Td,lights_physical_pars_fragment:Ad,lights_fragment_begin:Ld,lights_fragment_maps:Cd,lights_fragment_end:Rd,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Id,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:Od,map_particle_fragment:Bd,map_particle_pars_fragment:zd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Hd,morphnormal_vertex:Ud,morphtarget_pars_vertex:Vd,morphtarget_vertex:Gd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normalmap_pars_fragment:qd,clearcoat_normal_fragment_begin:Yd,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:$d,project_vertex:Qd,dithering_fragment:Kd,dithering_pars_fragment:ef,roughnessmap_fragment:tf,roughnessmap_pars_fragment:nf,shadowmap_pars_fragment:rf,shadowmap_pars_vertex:sf,shadowmap_vertex:af,shadowmask_pars_fragment:of,skinbase_vertex:lf,skinning_pars_vertex:cf,skinning_vertex:hf,skinnormal_vertex:uf,specularmap_fragment:df,specularmap_pars_fragment:ff,tonemapping_fragment:pf,tonemapping_pars_fragment:mf,transmissionmap_fragment:gf,transmissionmap_pars_fragment:_f,uv_pars_fragment:vf,uv_pars_vertex:xf,uv_vertex:yf,uv2_pars_fragment:bf,uv2_pars_vertex:wf,uv2_vertex:Mf,worldpos_vertex:Sf,background_frag:Ef,background_vert:Tf,cube_frag:Af,cube_vert:Lf,depth_frag:Cf,depth_vert:Rf,distanceRGBA_frag:Pf,distanceRGBA_vert:Df,equirect_frag:If,equirect_vert:Nf,linedashed_frag:Ff,linedashed_vert:Of,meshbasic_frag:Bf,meshbasic_vert:zf,meshlambert_frag:kf,meshlambert_vert:Hf,meshmatcap_frag:Uf,meshmatcap_vert:Vf,meshtoon_frag:Gf,meshtoon_vert:Wf,meshphong_frag:Xf,meshphong_vert:qf,meshphysical_frag:Yf,meshphysical_vert:jf,normal_frag:Zf,normal_vert:Jf,points_frag:$f,points_vert:Qf,shadow_frag:Kf,shadow_vert:ep,sprite_frag:tp,sprite_vert:np},ie={common:{diffuse:{value:new de(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new at},uv2Transform:{value:new at},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new at}},sprite:{diffuse:{value:new de(15658734)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new at}}},Ot={basic:{uniforms:lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.fog,ie.lights,{emissive:{value:new de(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:lt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:lt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new de(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:lt([ie.points,ie.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:lt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:lt([ie.common,ie.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.normal_vert,fragmentShader:Ee.normal_frag},sprite:{uniforms:lt([ie.sprite,ie.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},cube:{uniforms:lt([ie.envmap,{opacity:{value:1}}]),vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:lt([ie.common,ie.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:lt([ie.lights,ie.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Ot.physical={uniforms:lt([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new de(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function ip(r,e,t,n,i){const s=new de(0);let a=0,o,l,c=null,h=0,u=null;function d(m,_,v,g){let p=_.isScene===!0?_.background:null;p&&p.isTexture&&(p=e.get(p));const T=r.xr,C=T.getSession&&T.getSession();C&&C.environmentBlendMode==="additive"&&(p=null),p===null?f(s,a):p&&p.isColor&&(f(p,1),g=!0),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ea)?(l===void 0&&(l=new yt(new sa(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:ii(Ot.cube.uniforms),vertexShader:Ot.cube.vertexShader,fragmentShader:Ot.cube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,x,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(c!==p||h!==p.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,c=p,h=p.version,u=r.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new yt(new la(2,2),new ln({name:"BackgroundMaterial",uniforms:ii(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||h!==p.version||u!==r.toneMapping)&&(o.material.needsUpdate=!0,c=p,h=p.version,u=r.toneMapping),m.unshift(o,o.geometry,o.material,0,0,null))}function f(m,_){t.buffers.color.setClear(m.r,m.g,m.b,_,i)}return{getClearColor:function(){return s},setClearColor:function(m,_=1){s.set(m),a=_,f(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,f(s,a)},render:d}}function rp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=_(null);let c=l;function h(L,P,D,R,Z){let te=!1;if(a){const K=m(R,D,P);c!==K&&(c=K,d(c.object)),te=v(R,Z),te&&g(R,Z)}else{const K=P.wireframe===!0;(c.geometry!==R.id||c.program!==D.id||c.wireframe!==K)&&(c.geometry=R.id,c.program=D.id,c.wireframe=K,te=!0)}L.isInstancedMesh===!0&&(te=!0),Z!==null&&t.update(Z,34963),te&&(F(L,P,D,R),Z!==null&&r.bindBuffer(34963,t.get(Z).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function f(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,P,D){const R=D.wireframe===!0;let Z=o[L.id];Z===void 0&&(Z={},o[L.id]=Z);let te=Z[P.id];te===void 0&&(te={},Z[P.id]=te);let K=te[R];return K===void 0&&(K=_(u()),te[R]=K),K}function _(L){const P=[],D=[],R=[];for(let Z=0;Z<i;Z++)P[Z]=0,D[Z]=0,R[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:R,object:L,attributes:{},index:null}}function v(L,P){const D=c.attributes,R=L.attributes;let Z=0;for(const te in R){const K=D[te],le=R[te];if(K===void 0||K.attribute!==le||K.data!==le.data)return!0;Z++}return c.attributesNum!==Z||c.index!==P}function g(L,P){const D={},R=L.attributes;let Z=0;for(const te in R){const K=R[te],le={};le.attribute=K,K.data&&(le.data=K.data),D[te]=le,Z++}c.attributes=D,c.attributesNum=Z,c.index=P}function p(){const L=c.newAttributes;for(let P=0,D=L.length;P<D;P++)L[P]=0}function T(L){C(L,0)}function C(L,P){const D=c.newAttributes,R=c.enabledAttributes,Z=c.attributeDivisors;D[L]=1,R[L]===0&&(r.enableVertexAttribArray(L),R[L]=1),Z[L]!==P&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,P),Z[L]=P)}function A(){const L=c.newAttributes,P=c.enabledAttributes;for(let D=0,R=P.length;D<R;D++)P[D]!==L[D]&&(r.disableVertexAttribArray(D),P[D]=0)}function x(L,P,D,R,Z,te){n.isWebGL2===!0&&(D===5124||D===5125)?r.vertexAttribIPointer(L,P,D,Z,te):r.vertexAttribPointer(L,P,D,R,Z,te)}function F(L,P,D,R){if(n.isWebGL2===!1&&(L.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const Z=R.attributes,te=D.getAttributes(),K=P.defaultAttributeValues;for(const le in te){const oe=te[le];if(oe>=0){const fe=Z[le];if(fe!==void 0){const _e=fe.normalized,U=fe.itemSize,Ne=t.get(fe);if(Ne===void 0)continue;const Te=Ne.buffer,ve=Ne.type,pe=Ne.bytesPerElement;if(fe.isInterleavedBufferAttribute){const Ae=fe.data,Me=Ae.stride,Se=fe.offset;Ae&&Ae.isInstancedInterleavedBuffer?(C(oe,Ae.meshPerAttribute),R._maxInstanceCount===void 0&&(R._maxInstanceCount=Ae.meshPerAttribute*Ae.count)):T(oe),r.bindBuffer(34962,Te),x(oe,U,ve,_e,Me*pe,Se*pe)}else fe.isInstancedBufferAttribute?(C(oe,fe.meshPerAttribute),R._maxInstanceCount===void 0&&(R._maxInstanceCount=fe.meshPerAttribute*fe.count)):T(oe),r.bindBuffer(34962,Te),x(oe,U,ve,_e,0,0)}else if(le==="instanceMatrix"){const _e=t.get(L.instanceMatrix);if(_e===void 0)continue;const U=_e.buffer,Ne=_e.type;C(oe+0,1),C(oe+1,1),C(oe+2,1),C(oe+3,1),r.bindBuffer(34962,U),r.vertexAttribPointer(oe+0,4,Ne,!1,64,0),r.vertexAttribPointer(oe+1,4,Ne,!1,64,16),r.vertexAttribPointer(oe+2,4,Ne,!1,64,32),r.vertexAttribPointer(oe+3,4,Ne,!1,64,48)}else if(le==="instanceColor"){const _e=t.get(L.instanceColor);if(_e===void 0)continue;const U=_e.buffer,Ne=_e.type;C(oe,1),r.bindBuffer(34962,U),r.vertexAttribPointer(oe,3,Ne,!1,12,0)}else if(K!==void 0){const _e=K[le];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(oe,_e);break;case 3:r.vertexAttrib3fv(oe,_e);break;case 4:r.vertexAttrib4fv(oe,_e);break;default:r.vertexAttrib1fv(oe,_e)}}}}A()}function B(){j();for(const L in o){const P=o[L];for(const D in P){const R=P[D];for(const Z in R)f(R[Z].object),delete R[Z];delete P[D]}delete o[L]}}function z(L){if(o[L.id]===void 0)return;const P=o[L.id];for(const D in P){const R=P[D];for(const Z in R)f(R[Z].object),delete R[Z];delete P[D]}delete o[L.id]}function W(L){for(const P in o){const D=o[P];if(D[L.id]===void 0)continue;const R=D[L.id];for(const Z in R)f(R[Z].object),delete R[Z];delete D[L.id]}}function j(){H(),c!==l&&(c=l,d(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:H,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfProgram:W,initAttributes:p,enableAttribute:T,disableUnusedAttributes:A}}function sp(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function ap(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),u=r.getParameter(35660),d=r.getParameter(3379),f=r.getParameter(34076),m=r.getParameter(34921),_=r.getParameter(36347),v=r.getParameter(36348),g=r.getParameter(36349),p=u>0,T=a||e.has("OES_texture_float"),C=p&&T,A=a?r.getParameter(36183):0;return{isWebGL2:a,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:A}}function op(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ft,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const m=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,v=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!v)s?h(null):c();else{const p=s?0:n,T=p*4;let C=g.clippingState||null;l.value=C,C=h(m,d,T,f);for(let A=0;A!==T;++A)C[A]=t[A];g.clippingState=C,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let v=null;if(_!==0){if(v=l.value,m!==!0||v===null){const g=f+_*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(v===null||v.length<g)&&(v=new Float32Array(g));for(let T=0,C=f;T!==_;++T,C+=4)a.copy(u[T]).applyMatrix4(p,o),a.normal.toArray(v,C),v[C+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function lp(r){let e=new WeakMap;function t(a,o){return o===za?a.mapping=Qs:o===ka&&(a.mapping=Ks),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===za||o===ka)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=r.getRenderTarget(),h=new Tl(l.height/2);return h.fromEquirectangularTexture(r,a),e.set(a,h),r.setRenderTarget(c),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function cp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hp(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],34962);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let v=0,g=_.length;v<g;v++)e.update(_[v],34962)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const p=f.array;_=f.version;for(let T=0,C=p.length;T<C;T+=3){const A=p[T+0],x=p[T+1],F=p[T+2];d.push(A,x,x,F,F,A)}}else{const p=m.array;_=m.version;for(let T=0,C=p.length/3-1;T<C;T+=3){const A=T+0,x=T+1,F=T+2;d.push(A,x,x,F,F,A)}}const v=new(El(d)>65535?Sl:Ml)(d,1);v.version=_;const g=s.get(u);g&&e.remove(g),s.set(u,v)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function up(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,o,d*l),t.update(f,s,1)}function u(d,f,m){if(m===0)return;let _,v;if(i)_=r,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,f,o,d*l,m),t.update(f,s,m)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function dp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fp(r,e){return r[0]-e[0]}function pp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function mp(r){const e={},t=new Float32Array(8),n=[];for(let s=0;s<8;s++)n[s]=[s,0];function i(s,a,o,l){const c=s.morphTargetInfluences,h=c===void 0?0:c.length;let u=e[a.id];if(u===void 0){u=[];for(let v=0;v<h;v++)u[v]=[v,0];e[a.id]=u}for(let v=0;v<h;v++){const g=u[v];g[0]=v,g[1]=c[v]}u.sort(pp);for(let v=0;v<8;v++)v<h&&u[v][1]?(n[v][0]=u[v][0],n[v][1]=u[v][1]):(n[v][0]=Number.MAX_SAFE_INTEGER,n[v][1]=0);n.sort(fp);const d=o.morphTargets&&a.morphAttributes.position,f=o.morphNormals&&a.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const g=n[v],p=g[0],T=g[1];p!==Number.MAX_SAFE_INTEGER&&T?(d&&a.getAttribute("morphTarget"+v)!==d[p]&&a.setAttribute("morphTarget"+v,d[p]),f&&a.getAttribute("morphNormal"+v)!==f[p]&&a.setAttribute("morphNormal"+v,f[p]),t[v]=T,m+=T):(d&&a.hasAttribute("morphTarget"+v)===!0&&a.deleteAttribute("morphTarget"+v),f&&a.hasAttribute("morphNormal"+v)===!0&&a.deleteAttribute("morphNormal"+v),t[v]=0)}const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",t)}return{update:i}}function gp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Cl extends ot{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Cl.prototype.isDataTexture2DArray=!0;class Rl extends ot{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Rl.prototype.isDataTexture3D=!0;const Pl=new ot,_p=new Cl,vp=new Rl,Dl=new kr,uo=[],fo=[],po=new Float32Array(16),mo=new Float32Array(9),go=new Float32Array(4);function ci(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=uo[i];if(s===void 0&&(s=new Float32Array(i),uo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Il(r,e){let t=fo[e];t===void 0&&(t=new Int32Array(e),fo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function xp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),ct(t,e)}}function bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),ct(t,e)}}function wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),ct(t,e)}}function Mp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(dt(t,n))return;go.set(n),r.uniformMatrix2fv(this.addr,!1,go),ct(t,n)}}function Sp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(dt(t,n))return;mo.set(n),r.uniformMatrix3fv(this.addr,!1,mo),ct(t,n)}}function Ep(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(dt(t,n))return;po.set(n),r.uniformMatrix4fv(this.addr,!1,po),ct(t,n)}}function Tp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ap(r,e){const t=this.cache;dt(t,e)||(r.uniform2iv(this.addr,e),ct(t,e))}function Lp(r,e){const t=this.cache;dt(t,e)||(r.uniform3iv(this.addr,e),ct(t,e))}function Cp(r,e){const t=this.cache;dt(t,e)||(r.uniform4iv(this.addr,e),ct(t,e))}function Rp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Pp(r,e){const t=this.cache;dt(t,e)||(r.uniform2uiv(this.addr,e),ct(t,e))}function Dp(r,e){const t=this.cache;dt(t,e)||(r.uniform3uiv(this.addr,e),ct(t,e))}function Ip(r,e){const t=this.cache;dt(t,e)||(r.uniform4uiv(this.addr,e),ct(t,e))}function Np(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Pl,i)}function Fp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vp,i)}function Op(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Dl,i)}function Bp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_p,i)}function zp(r){switch(r){case 5126:return xp;case 35664:return yp;case 35665:return bp;case 35666:return wp;case 35674:return Mp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return Ap;case 35668:case 35672:return Lp;case 35669:case 35673:return Cp;case 5125:return Rp;case 36294:return Pp;case 36295:return Dp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}function kp(r,e){r.uniform1fv(this.addr,e)}function Hp(r,e){const t=ci(e,this.size,2);r.uniform2fv(this.addr,t)}function Up(r,e){const t=ci(e,this.size,3);r.uniform3fv(this.addr,t)}function Vp(r,e){const t=ci(e,this.size,4);r.uniform4fv(this.addr,t)}function Gp(r,e){const t=ci(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Wp(r,e){const t=ci(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Xp(r,e){const t=ci(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function qp(r,e){r.uniform1iv(this.addr,e)}function Yp(r,e){r.uniform2iv(this.addr,e)}function jp(r,e){r.uniform3iv(this.addr,e)}function Zp(r,e){r.uniform4iv(this.addr,e)}function Jp(r,e){r.uniform1uiv(this.addr,e)}function $p(r,e){r.uniform2uiv(this.addr,e)}function Qp(r,e){r.uniform3uiv(this.addr,e)}function Kp(r,e){r.uniform4uiv(this.addr,e)}function em(r,e,t){const n=e.length,i=Il(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Pl,i[s])}function tm(r,e,t){const n=e.length,i=Il(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Dl,i[s])}function nm(r){switch(r){case 5126:return kp;case 35664:return Hp;case 35665:return Up;case 35666:return Vp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return jp;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return $p;case 36295:return Qp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35680:case 36300:case 36308:case 36293:return tm}}function im(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=zp(e.type)}function Nl(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=nm(e.type)}Nl.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),ct(e,r)};function Fl(r){this.id=r,this.seq=[],this.map={}}Fl.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const Ms=/(\w+)(\])?(\[|\.)?/g;function _o(r,e){r.seq.push(e),r.map[e.id]=e}function rm(r,e,t){const n=r.name,i=n.length;for(Ms.lastIndex=0;;){const s=Ms.exec(n),a=Ms.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_o(t,c===void 0?new im(o,r,e):new Nl(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Fl(o),_o(t,u)),t=u}}}function an(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);rm(i,s,this)}}an.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};an.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};an.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};an.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function vo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let sm=0;function am(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Ol(r){switch(r){case Gi:return["Linear","( value )"];case yl:return["sRGB","( value )"];case ru:return["RGBE","( value )"];case au:return["RGBM","( value, 7.0 )"];case ou:return["RGBM","( value, 16.0 )"];case lu:return["RGBD","( value, 256.0 )"];case iu:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case su:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function xo(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=r.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+am(s)}function gi(r,e){const t=Ol(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function om(r,e){const t=Ol(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function lm(r,e){let t;switch(e){case nh:t="Linear";break;case ih:t="Reinhard";break;case rh:t="OptimizedCineon";break;case sh:t="ACESFilmic";break;case ah:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cm(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ei).join(`
`)}function hm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function um(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const a=r.getActiveAttrib(e,i).name;t[a]=r.getAttribLocation(e,a)}return t}function Ei(r){return r!==""}function yo(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(r){return r.replace(dm,fm)}function fm(r,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Hs(t)}const pm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wo(r){return r.replace(mm,Bl).replace(pm,gm)}function gm(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Bl(r,e,t,n)}function Bl(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _m(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Nc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function vm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qs:case Ks:e="ENVMAP_TYPE_CUBE";break;case ea:case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ks:case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function ym(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Br:e="ENVMAP_BLENDING_MULTIPLY";break;case eh:e="ENVMAP_BLENDING_MIX";break;case th:e="ENVMAP_BLENDING_ADD";break}return e}function bm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_m(t),c=vm(t),h=xm(t),u=ym(t),d=r.gammaFactor>0?r.gammaFactor:1,f=t.isWebGL2?"":cm(t),m=hm(s),_=i.createProgram();let v,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[m].filter(Ei).join(`
`),v.length>0&&(v+=`
`),g=[f,m].filter(Ei).join(`
`),g.length>0&&(g+=`
`)):(v=[Mo(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),g=[f,Mo(t),"#define SHADER_NAME "+t.shaderName,m,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Ci?lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Ee.encodings_pars_fragment,t.map?gi("mapTexelToLinear",t.mapEncoding):"",t.matcap?gi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?gi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?gi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?gi("lightMapTexelToLinear",t.lightMapEncoding):"",om("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ei).join(`
`)),a=Hs(a),a=yo(a,t),a=bo(a,t),o=Hs(o),o=yo(o,t),o=bo(o,t),a=wo(a),o=wo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Qa?"":"out highp vec4 pc_fragColor;",t.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=p+v+a,C=p+g+o,A=vo(i,35633,T),x=vo(i,35632,C);if(i.attachShader(_,A),i.attachShader(_,x),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),W=i.getShaderInfoLog(A).trim(),j=i.getShaderInfoLog(x).trim();let H=!0,L=!0;if(i.getProgramParameter(_,35714)===!1){H=!1;const P=xo(i,A,"vertex"),D=xo(i,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(_,35715),"gl.getProgramInfoLog",z,P,D)}else z!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",z):(W===""||j==="")&&(L=!1);L&&(this.diagnostics={runnable:H,programLog:z,vertexShader:{log:W,prefix:v},fragmentShader:{log:j,prefix:g}})}i.deleteShader(A),i.deleteShader(x);let F;this.getUniforms=function(){return F===void 0&&(F=new an(i,_)),F};let B;return this.getAttributes=function(){return B===void 0&&(B=um(i,_)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=x,this}function wm(r,e,t,n,i,s){const a=[],o=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,h=n.maxVertexUniforms,u=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function _(x){const B=x.skeleton.bones;if(c)return 1024;{const W=Math.floor((h-20)/4),j=Math.min(W,B.length);return j<B.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+B.length+" bones. This GPU supports "+j+"."),0):j}}function v(x){let F;return x&&x.isTexture?F=x.encoding:x&&x.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),F=x.texture.encoding):F=Gi,F}function g(x,F,B,z,W){const j=z.fog,H=x.isMeshStandardMaterial?z.environment:null,L=e.get(x.envMap||H),P=f[x.type],D=W.isSkinnedMesh?_(W):0;x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let R,Z;if(P){const le=Ot[P];R=le.vertexShader,Z=le.fragmentShader}else R=x.vertexShader,Z=x.fragmentShader;const te=r.getRenderTarget();return{isWebGL2:o,shaderID:P,shaderName:x.type,vertexShader:R,fragmentShader:Z,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:u,outputEncoding:te!==null?v(te.texture):r.outputEncoding,map:!!x.map,mapEncoding:v(x.map),matcap:!!x.matcap,matcapEncoding:v(x.matcap),envMap:!!L,envMapMode:L&&L.mapping,envMapEncoding:v(L),envMapCubeUV:!!L&&(L.mapping===ea||L.mapping===ta),lightMap:!!x.lightMap,lightMapEncoding:v(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:v(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===uu,tangentSpaceNormalMap:x.normalMapType===si,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,transmissionMap:!!x.transmissionMap,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&W.geometry&&W.geometry.attributes.color&&W.geometry.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.transmissionMap)&&!!x.displacementMap,fog:!!j,useFog:x.fog,fogExp2:j&&j.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:l,skinning:x.skinning&&D>0,maxBones:D,useVertexTexture:c,morphTargets:x.morphTargets,morphNormals:x.morphNormals,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:Ci,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===Or,flipSided:x.side===Qe,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||t.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const F=[];if(x.shaderID?F.push(x.shaderID):(F.push(x.fragmentShader),F.push(x.vertexShader)),x.defines!==void 0)for(const B in x.defines)F.push(B),F.push(x.defines[B]);if(x.isRawShaderMaterial===!1){for(let B=0;B<m.length;B++)F.push(x[m[B]]);F.push(r.outputEncoding),F.push(r.gammaFactor)}return F.push(x.customProgramCacheKey),F.join()}function T(x){const F=f[x.type];let B;if(F){const z=Ot[F];B=Pu.clone(z.uniforms)}else B=x.uniforms;return B}function C(x,F){let B;for(let z=0,W=a.length;z<W;z++){const j=a[z];if(j.cacheKey===F){B=j,++B.usedTimes;break}}return B===void 0&&(B=new bm(r,F,x,i),a.push(B)),B}function A(x){if(--x.usedTimes===0){const F=a.indexOf(x);a[F]=a[a.length-1],a.pop(),x.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:C,releaseProgram:A,programs:a}}function Mm(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Sm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Em(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function So(r){const e=[];let t=0;const n=[],i=[],s={id:-1};function a(){t=0,n.length=0,i.length=0}function o(d,f,m,_,v,g){let p=e[t];const T=r.get(m);return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,program:T.program||s,groupOrder:_,renderOrder:d.renderOrder,z:v,group:g},e[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.program=T.program||s,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=v,p.group=g),t++,p}function l(d,f,m,_,v,g){const p=o(d,f,m,_,v,g);(m.transparent===!0?i:n).push(p)}function c(d,f,m,_,v,g){const p=o(d,f,m,_,v,g);(m.transparent===!0?i:n).unshift(p)}function h(d,f){n.length>1&&n.sort(d||Sm),i.length>1&&i.sort(f||Em)}function u(){for(let d=t,f=e.length;d<f;d++){const m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:n,transparent:i,init:a,push:l,unshift:c,finish:u,sort:h}}function Tm(r){let e=new WeakMap;function t(i,s){let a;return e.has(i)===!1?(a=new So(r),e.set(i,[a])):s>=e.get(i).length?(a=new So(r),e.get(i).push(a)):a=e.get(i)[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Am(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new de};break;case"SpotLight":t={position:new w,direction:new w,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function Lm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Cm=0;function Rm(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Pm(r,e){const t=new Am,n=Lm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new w);const s=new w,a=new ge,o=new ge;function l(h){let u=0,d=0,f=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let m=0,_=0,v=0,g=0,p=0,T=0,C=0,A=0;h.sort(Rm);for(let F=0,B=h.length;F<B;F++){const z=h[F],W=z.color,j=z.intensity,H=z.distance,L=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)u+=W.r*j,d+=W.g*j,f+=W.b*j;else if(z.isLightProbe)for(let P=0;P<9;P++)i.probe[P].addScaledVector(z.sh.coefficients[P],j);else if(z.isDirectionalLight){const P=t.get(z);if(P.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const D=z.shadow,R=n.get(z);R.shadowBias=D.bias,R.shadowNormalBias=D.normalBias,R.shadowRadius=D.radius,R.shadowMapSize=D.mapSize,i.directionalShadow[m]=R,i.directionalShadowMap[m]=L,i.directionalShadowMatrix[m]=z.shadow.matrix,T++}i.directional[m]=P,m++}else if(z.isSpotLight){const P=t.get(z);if(P.position.setFromMatrixPosition(z.matrixWorld),P.color.copy(W).multiplyScalar(j),P.distance=H,P.coneCos=Math.cos(z.angle),P.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),P.decay=z.decay,z.castShadow){const D=z.shadow,R=n.get(z);R.shadowBias=D.bias,R.shadowNormalBias=D.normalBias,R.shadowRadius=D.radius,R.shadowMapSize=D.mapSize,i.spotShadow[v]=R,i.spotShadowMap[v]=L,i.spotShadowMatrix[v]=z.shadow.matrix,A++}i.spot[v]=P,v++}else if(z.isRectAreaLight){const P=t.get(z);P.color.copy(W).multiplyScalar(j),P.halfWidth.set(z.width*.5,0,0),P.halfHeight.set(0,z.height*.5,0),i.rectArea[g]=P,g++}else if(z.isPointLight){const P=t.get(z);if(P.color.copy(z.color).multiplyScalar(z.intensity),P.distance=z.distance,P.decay=z.decay,z.castShadow){const D=z.shadow,R=n.get(z);R.shadowBias=D.bias,R.shadowNormalBias=D.normalBias,R.shadowRadius=D.radius,R.shadowMapSize=D.mapSize,R.shadowCameraNear=D.camera.near,R.shadowCameraFar=D.camera.far,i.pointShadow[_]=R,i.pointShadowMap[_]=L,i.pointShadowMatrix[_]=z.shadow.matrix,C++}i.point[_]=P,_++}else if(z.isHemisphereLight){const P=t.get(z);P.skyColor.copy(z.color).multiplyScalar(j),P.groundColor.copy(z.groundColor).multiplyScalar(j),i.hemi[p]=P,p++}}g>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==T||x.numPointShadows!==C||x.numSpotShadows!==A)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=C,i.spotShadowMatrix.length=A,x.directionalLength=m,x.pointLength=_,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=T,x.numPointShadows=C,x.numSpotShadows=A,i.version=Cm++)}function c(h,u){let d=0,f=0,m=0,_=0,v=0;const g=u.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){const C=h[p];if(C.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(C.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),m++}else if(C.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(g),o.identity(),a.copy(C.matrixWorld),a.premultiply(g),o.extractRotation(a),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(C.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(g),f++}else if(C.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(g),A.direction.normalize(),v++}}}return{setup:l,setupView:c,state:i}}function Eo(r,e){const t=new Pm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(){t.setup(n)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dm(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new Eo(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new Eo(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class zl extends it{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=cu,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}zl.prototype.isMeshDepthMaterial=!0;class kl extends it{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}kl.prototype.isMeshDistanceMaterial=!0;var Im=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Hl(r,e,t){let n=new Hr;const i=new $,s=new $,a=new Be,o=[],l=[],c={},h=t.maxTextureSize,u={0:Qe,1:Fr,2:Or},d=new ln({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:Nm,fragmentShader:Im}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ue;m.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new yt(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl,this.render=function(x,F,B){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||x.length===0)return;const z=r.getRenderTarget(),W=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Ai),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let L=0,P=x.length;L<P;L++){const D=x[L],R=D.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const Z=R.getFrameExtents();if(i.multiply(Z),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,R.mapSize.y=s.y)),R.map===null&&!R.isPointLightShadow&&this.type===Si){const K={minFilter:gt,magFilter:gt,format:Ct};R.map=new En(i.x,i.y,K),R.map.texture.name=D.name+".shadowMap",R.mapPass=new En(i.x,i.y,K),R.camera.updateProjectionMatrix()}if(R.map===null){const K={minFilter:ut,magFilter:ut,format:Ct};R.map=new En(i.x,i.y,K),R.map.texture.name=D.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const te=R.getViewportCount();for(let K=0;K<te;K++){const le=R.getViewport(K);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),H.viewport(a),R.updateMatrices(D,K),n=R.getFrustum(),A(F,B,R.camera,D,this.type)}!R.isPointLightShadow&&this.type===Si&&g(R,B),R.needsUpdate=!1}v.needsUpdate=!1,r.setRenderTarget(z,W,j)};function g(x,F){const B=e.update(_);d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(F,null,B,d,_,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(F,null,B,f,_,null)}function p(x,F,B){const z=x<<0|F<<1|B<<2;let W=o[z];return W===void 0&&(W=new zl({depthPacking:hu,morphTargets:x,skinning:F}),o[z]=W),W}function T(x,F,B){const z=x<<0|F<<1|B<<2;let W=l[z];return W===void 0&&(W=new kl({morphTargets:x,skinning:F}),l[z]=W),W}function C(x,F,B,z,W,j,H){let L=null,P=p,D=x.customDepthMaterial;if(z.isPointLight===!0&&(P=T,D=x.customDistanceMaterial),D===void 0){let R=!1;B.morphTargets===!0&&(R=F.morphAttributes&&F.morphAttributes.position&&F.morphAttributes.position.length>0);let Z=!1;x.isSkinnedMesh===!0&&(B.skinning===!0?Z=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",x));const te=x.isInstancedMesh===!0;L=P(R,Z,te)}else L=D;if(r.localClippingEnabled&&B.clipShadows===!0&&B.clippingPlanes.length!==0){const R=L.uuid,Z=B.uuid;let te=c[R];te===void 0&&(te={},c[R]=te);let K=te[Z];K===void 0&&(K=L.clone(),te[Z]=K),L=K}return L.visible=B.visible,L.wireframe=B.wireframe,H===Si?L.side=B.shadowSide!==null?B.shadowSide:B.side:L.side=B.shadowSide!==null?B.shadowSide:u[B.side],L.clipShadows=B.clipShadows,L.clippingPlanes=B.clippingPlanes,L.clipIntersection=B.clipIntersection,L.wireframeLinewidth=B.wireframeLinewidth,L.linewidth=B.linewidth,z.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(z.matrixWorld),L.nearDistance=W,L.farDistance=j),L}function A(x,F,B,z,W){if(x.visible===!1)return;if(x.layers.test(F.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&W===Si)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld);const L=e.update(x),P=x.material;if(Array.isArray(P)){const D=L.groups;for(let R=0,Z=D.length;R<Z;R++){const te=D[R],K=P[te.materialIndex];if(K&&K.visible){const le=C(x,L,K,z,B.near,B.far,W);r.renderBufferDirect(B,null,L,le,x,te)}}}else if(P.visible){const D=C(x,L,P,z,B.near,B.far,W);r.renderBufferDirect(B,null,L,D,x,null)}}const H=x.children;for(let L=0,P=H.length;L<P;L++)A(H[L],F,B,z,W)}}function Fm(r,e,t){const n=t.isWebGL2;function i(){let S=!1;const Y=new Be;let J=null;const he=new Be(0,0,0,0);return{setMask:function(q){J!==q&&!S&&(r.colorMask(q,q,q,q),J=q)},setLocked:function(q){S=q},setClear:function(q,me,Re,Ie,rt){rt===!0&&(q*=Ie,me*=Ie,Re*=Ie),Y.set(q,me,Re,Ie),he.equals(Y)===!1&&(r.clearColor(q,me,Re,Ie),he.copy(Y))},reset:function(){S=!1,J=null,he.set(-1,0,0,0)}}}function s(){let S=!1,Y=null,J=null,he=null;return{setTest:function(q){q?fe(2929):_e(2929)},setMask:function(q){Y!==q&&!S&&(r.depthMask(q),Y=q)},setFunc:function(q){if(J!==q){if(q)switch(q){case Yc:r.depthFunc(512);break;case jc:r.depthFunc(519);break;case Zc:r.depthFunc(513);break;case Os:r.depthFunc(515);break;case Jc:r.depthFunc(514);break;case $c:r.depthFunc(518);break;case Qc:r.depthFunc(516);break;case Kc:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);J=q}},setLocked:function(q){S=q},setClear:function(q){he!==q&&(r.clearDepth(q),he=q)},reset:function(){S=!1,Y=null,J=null,he=null}}}function a(){let S=!1,Y=null,J=null,he=null,q=null,me=null,Re=null,Ie=null,rt=null;return{setTest:function(qe){S||(qe?fe(2960):_e(2960))},setMask:function(qe){Y!==qe&&!S&&(r.stencilMask(qe),Y=qe)},setFunc:function(qe,Ut,Mt){(J!==qe||he!==Ut||q!==Mt)&&(r.stencilFunc(qe,Ut,Mt),J=qe,he=Ut,q=Mt)},setOp:function(qe,Ut,Mt){(me!==qe||Re!==Ut||Ie!==Mt)&&(r.stencilOp(qe,Ut,Mt),me=qe,Re=Ut,Ie=Mt)},setLocked:function(qe){S=qe},setClear:function(qe){rt!==qe&&(r.clearStencil(qe),rt=qe)},reset:function(){S=!1,Y=null,J=null,he=null,q=null,me=null,Re=null,Ie=null,rt=null}}}const o=new i,l=new s,c=new a;let h={},u=null,d={},f=null,m=!1,_=null,v=null,g=null,p=null,T=null,C=null,A=null,x=!1,F=null,B=null,z=null,W=null,j=null;const H=r.getParameter(35661);let L=!1,P=0;const D=r.getParameter(7938);D.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(D)[1]),L=P>=1):D.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),L=P>=2);let R=null,Z={};const te=new Be(0,0,r.canvas.width,r.canvas.height),K=new Be(0,0,r.canvas.width,r.canvas.height);function le(S,Y,J){const he=new Uint8Array(4),q=r.createTexture();r.bindTexture(S,q),r.texParameteri(S,10241,9728),r.texParameteri(S,10240,9728);for(let me=0;me<J;me++)r.texImage2D(Y+me,0,6408,1,1,0,6408,5121,he);return q}const oe={};oe[3553]=le(3553,3553,1),oe[34067]=le(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(2929),l.setFunc(Os),Se(!1),Q(Da),fe(2884),Ae(Ai);function fe(S){h[S]!==!0&&(r.enable(S),h[S]=!0)}function _e(S){h[S]!==!1&&(r.disable(S),h[S]=!1)}function U(S){S!==u&&(r.bindFramebuffer(36160,S),u=S)}function Ne(S,Y){Y===null&&u!==null&&(Y=u),d[S]!==Y&&(r.bindFramebuffer(S,Y),d[S]=Y,n&&(S===36009&&(d[36160]=Y),S===36160&&(d[36009]=Y)))}function Te(S){return f!==S?(r.useProgram(S),f=S,!0):!1}const ve={[jn]:32774,[Oc]:32778,[Bc]:32779};if(n)ve[Oa]=32775,ve[Ba]=32776;else{const S=e.get("EXT_blend_minmax");S!==null&&(ve[Oa]=S.MIN_EXT,ve[Ba]=S.MAX_EXT)}const pe={[zc]:0,[kc]:1,[Hc]:768,[gl]:770,[qc]:776,[Wc]:774,[Vc]:772,[Uc]:769,[_l]:771,[Xc]:775,[Gc]:773};function Ae(S,Y,J,he,q,me,Re,Ie){if(S===Ai){m===!0&&(_e(3042),m=!1);return}if(m===!1&&(fe(3042),m=!0),S!==Fc){if(S!==_||Ie!==x){if((v!==jn||T!==jn)&&(r.blendEquation(32774),v=jn,T=jn),Ie)switch(S){case Li:r.blendFuncSeparate(1,771,1,771);break;case Ia:r.blendFunc(1,1);break;case Na:r.blendFuncSeparate(0,0,769,771);break;case Fa:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Li:r.blendFuncSeparate(770,771,1,771);break;case Ia:r.blendFunc(770,1);break;case Na:r.blendFunc(0,769);break;case Fa:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}g=null,p=null,C=null,A=null,_=S,x=Ie}return}q=q||Y,me=me||J,Re=Re||he,(Y!==v||q!==T)&&(r.blendEquationSeparate(ve[Y],ve[q]),v=Y,T=q),(J!==g||he!==p||me!==C||Re!==A)&&(r.blendFuncSeparate(pe[J],pe[he],pe[me],pe[Re]),g=J,p=he,C=me,A=Re),_=S,x=null}function Me(S,Y){S.side===Or?_e(2884):fe(2884);let J=S.side===Qe;Y&&(J=!J),Se(J),S.blending===Li&&S.transparent===!1?Ae(Ai):Ae(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.premultipliedAlpha),l.setFunc(S.depthFunc),l.setTest(S.depthTest),l.setMask(S.depthWrite),o.setMask(S.colorWrite);const he=S.stencilWrite;c.setTest(he),he&&(c.setMask(S.stencilWriteMask),c.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),c.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ne(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?fe(32926):_e(32926)}function Se(S){F!==S&&(S?r.frontFace(2304):r.frontFace(2305),F=S)}function Q(S){S!==Dc?(fe(2884),S!==B&&(S===Da?r.cullFace(1029):S===Ic?r.cullFace(1028):r.cullFace(1032))):_e(2884),B=S}function ee(S){S!==z&&(L&&r.lineWidth(S),z=S)}function ne(S,Y,J){S?(fe(32823),(W!==Y||j!==J)&&(r.polygonOffset(Y,J),W=Y,j=J)):_e(32823)}function ue(S){S?fe(3089):_e(3089)}function ae(S){S===void 0&&(S=33984+H-1),R!==S&&(r.activeTexture(S),R=S)}function M(S,Y){R===null&&ae();let J=Z[R];J===void 0&&(J={type:void 0,texture:void 0},Z[R]=J),(J.type!==S||J.texture!==Y)&&(r.bindTexture(S,Y||oe[S]),J.type=S,J.texture=Y)}function b(){const S=Z[R];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function V(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function X(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function re(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ce(S){te.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),te.copy(S))}function Le(S){K.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),K.copy(S))}function E(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},R=null,Z={},u=null,d={},f=null,m=!1,_=null,v=null,g=null,p=null,T=null,C=null,A=null,x=!1,F=null,B=null,z=null,W=null,j=null,te.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:_e,bindFramebuffer:Ne,bindXRFramebuffer:U,useProgram:Te,setBlending:Ae,setMaterial:Me,setFlipSided:Se,setCullFace:Q,setLineWidth:ee,setPolygonOffset:ne,setScissorTest:ue,activeTexture:ae,bindTexture:M,unbindTexture:b,compressedTexImage2D:V,texImage2D:X,texImage3D:re,scissor:ce,viewport:Le,reset:E}}function Om(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap;let f,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,b){return m?new OffscreenCanvas(M,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(M,b,V,X){let re=1;if((M.width>X||M.height>X)&&(re=X/Math.max(M.width,M.height)),re<1||b===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){const ce=b?mu:Math.floor,Le=ce(re*M.width),E=ce(re*M.height);f===void 0&&(f=_(Le,E));const S=V?_(Le,E):f;return S.width=Le,S.height=E,S.getContext("2d").drawImage(M,0,0,Le,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Le+"x"+E+")."),S}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function g(M){return Ka(M.width)&&Ka(M.height)}function p(M){return o?!1:M.wrapS!==Lt||M.wrapT!==Lt||M.minFilter!==ut&&M.minFilter!==gt}function T(M,b){return M.generateMipmaps&&b&&M.minFilter!==ut&&M.minFilter!==gt}function C(M,b,V,X){r.generateMipmap(M);const re=n.get(b);re.__maxMipLevel=Math.log2(Math.max(V,X))}function A(M,b,V){if(o===!1)return b;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=b;return b===6403&&(V===5126&&(X=33326),V===5131&&(X=33325),V===5121&&(X=33321)),b===6407&&(V===5126&&(X=34837),V===5131&&(X=34843),V===5121&&(X=32849)),b===6408&&(V===5126&&(X=34836),V===5131&&(X=34842),V===5121&&(X=32856)),(X===33325||X===33326||X===34842||X===34836)&&e.get("EXT_color_buffer_float"),X}function x(M){return M===ut||M===Ha||M===Ua?9728:9729}function F(M){const b=M.target;b.removeEventListener("dispose",F),z(b),b.isVideoTexture&&d.delete(b),a.memory.textures--}function B(M){const b=M.target;b.removeEventListener("dispose",B),W(b),a.memory.textures--}function z(M){const b=n.get(M);b.__webglInit!==void 0&&(r.deleteTexture(b.__webglTexture),n.remove(M))}function W(M){const b=M.texture,V=n.get(M),X=n.get(b);if(!!M){if(X.__webglTexture!==void 0&&r.deleteTexture(X.__webglTexture),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(V.__webglFramebuffer[re]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[re]);else r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer&&r.deleteRenderbuffer(V.__webglColorRenderbuffer),V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer);n.remove(b),n.remove(M)}}let j=0;function H(){j=0}function L(){const M=j;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),j+=1,M}function P(M,b){const V=n.get(M);if(M.isVideoTexture&&Q(M),M.version>0&&V.__version!==M.version){const X=M.image;if(X===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(V,M,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,V.__webglTexture)}function D(M,b){const V=n.get(M);if(M.version>0&&V.__version!==M.version){fe(V,M,b);return}t.activeTexture(33984+b),t.bindTexture(35866,V.__webglTexture)}function R(M,b){const V=n.get(M);if(M.version>0&&V.__version!==M.version){fe(V,M,b);return}t.activeTexture(33984+b),t.bindTexture(32879,V.__webglTexture)}function Z(M,b){const V=n.get(M);if(M.version>0&&V.__version!==M.version){_e(V,M,b);return}t.activeTexture(33984+b),t.bindTexture(34067,V.__webglTexture)}const te={[Bs]:10497,[Lt]:33071,[zs]:33648},K={[ut]:9728,[Ha]:9984,[Ua]:9986,[gt]:9729,[oh]:9985,[na]:9987};function le(M,b,V){if(V?(r.texParameteri(M,10242,te[b.wrapS]),r.texParameteri(M,10243,te[b.wrapT]),(M===32879||M===35866)&&r.texParameteri(M,32882,te[b.wrapR]),r.texParameteri(M,10240,K[b.magFilter]),r.texParameteri(M,10241,K[b.minFilter])):(r.texParameteri(M,10242,33071),r.texParameteri(M,10243,33071),(M===32879||M===35866)&&r.texParameteri(M,32882,33071),(b.wrapS!==Lt||b.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,10240,x(b.magFilter)),r.texParameteri(M,10241,x(b.minFilter)),b.minFilter!==ut&&b.minFilter!==gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(b.type===rn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(M,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function oe(M,b){M.__webglInit===void 0&&(M.__webglInit=!0,b.addEventListener("dispose",F),M.__webglTexture=r.createTexture(),a.memory.textures++)}function fe(M,b,V){let X=3553;b.isDataTexture2DArray&&(X=35866),b.isDataTexture3D&&(X=32879),oe(M,b),t.activeTexture(33984+V),t.bindTexture(X,M.__webglTexture),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const re=p(b)&&g(b.image)===!1,ce=v(b.image,re,!1,h),Le=g(ce)||o,E=s.convert(b.format);let S=s.convert(b.type),Y=A(b.internalFormat,E,S);le(X,b,Le);let J;const he=b.mipmaps;if(b.isDepthTexture)Y=6402,o?b.type===rn?Y=36012:b.type===Mr?Y=33190:b.type===Ri?Y=35056:Y=33189:b.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ni&&Y===6402&&b.type!==Sr&&b.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Sr,S=s.convert(b.type)),b.format===Fi&&Y===6402&&(Y=34041,b.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ri,S=s.convert(b.type))),t.texImage2D(3553,0,Y,ce.width,ce.height,0,E,S,null);else if(b.isDataTexture)if(he.length>0&&Le){for(let q=0,me=he.length;q<me;q++)J=he[q],t.texImage2D(3553,q,Y,J.width,J.height,0,E,S,J.data);b.generateMipmaps=!1,M.__maxMipLevel=he.length-1}else t.texImage2D(3553,0,Y,ce.width,ce.height,0,E,S,ce.data),M.__maxMipLevel=0;else if(b.isCompressedTexture){for(let q=0,me=he.length;q<me;q++)J=he[q],b.format!==Ct&&b.format!==sn?E!==null?t.compressedTexImage2D(3553,q,Y,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,Y,J.width,J.height,0,E,S,J.data);M.__maxMipLevel=he.length-1}else if(b.isDataTexture2DArray)t.texImage3D(35866,0,Y,ce.width,ce.height,ce.depth,0,E,S,ce.data),M.__maxMipLevel=0;else if(b.isDataTexture3D)t.texImage3D(32879,0,Y,ce.width,ce.height,ce.depth,0,E,S,ce.data),M.__maxMipLevel=0;else if(he.length>0&&Le){for(let q=0,me=he.length;q<me;q++)J=he[q],t.texImage2D(3553,q,Y,E,S,J);b.generateMipmaps=!1,M.__maxMipLevel=he.length-1}else t.texImage2D(3553,0,Y,E,S,ce),M.__maxMipLevel=0;T(b,Le)&&C(X,b,ce.width,ce.height),M.__version=b.version,b.onUpdate&&b.onUpdate(b)}function _e(M,b,V){if(b.image.length!==6)return;oe(M,b),t.activeTexture(33984+V),t.bindTexture(34067,M.__webglTexture),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const X=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),re=b.image[0]&&b.image[0].isDataTexture,ce=[];for(let q=0;q<6;q++)!X&&!re?ce[q]=v(b.image[q],!1,!0,c):ce[q]=re?b.image[q].image:b.image[q];const Le=ce[0],E=g(Le)||o,S=s.convert(b.format),Y=s.convert(b.type),J=A(b.internalFormat,S,Y);le(34067,b,E);let he;if(X){for(let q=0;q<6;q++){he=ce[q].mipmaps;for(let me=0;me<he.length;me++){const Re=he[me];b.format!==Ct&&b.format!==sn?S!==null?t.compressedTexImage2D(34069+q,me,J,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,me,J,Re.width,Re.height,0,S,Y,Re.data)}}M.__maxMipLevel=he.length-1}else{he=b.mipmaps;for(let q=0;q<6;q++)if(re){t.texImage2D(34069+q,0,J,ce[q].width,ce[q].height,0,S,Y,ce[q].data);for(let me=0;me<he.length;me++){const Ie=he[me].image[q].image;t.texImage2D(34069+q,me+1,J,Ie.width,Ie.height,0,S,Y,Ie.data)}}else{t.texImage2D(34069+q,0,J,S,Y,ce[q]);for(let me=0;me<he.length;me++){const Re=he[me];t.texImage2D(34069+q,me+1,J,S,Y,Re.image[q])}}M.__maxMipLevel=he.length}T(b,E)&&C(34067,b,Le.width,Le.height),M.__version=b.version,b.onUpdate&&b.onUpdate(b)}function U(M,b,V,X){const re=b.texture,ce=s.convert(re.format),Le=s.convert(re.type),E=A(re.internalFormat,ce,Le);X===32879||X===35866?t.texImage3D(X,0,E,b.width,b.height,b.depth,0,ce,Le,null):t.texImage2D(X,0,E,b.width,b.height,0,ce,Le,null),t.bindFramebuffer(36160,M),r.framebufferTexture2D(36160,V,X,n.get(re).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(M,b,V){if(r.bindRenderbuffer(36161,M),b.depthBuffer&&!b.stencilBuffer){let X=33189;if(V){const re=b.depthTexture;re&&re.isDepthTexture&&(re.type===rn?X=36012:re.type===Mr&&(X=33190));const ce=Se(b);r.renderbufferStorageMultisample(36161,ce,X,b.width,b.height)}else r.renderbufferStorage(36161,X,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,M)}else if(b.depthBuffer&&b.stencilBuffer){if(V){const X=Se(b);r.renderbufferStorageMultisample(36161,X,35056,b.width,b.height)}else r.renderbufferStorage(36161,34041,b.width,b.height);r.framebufferRenderbuffer(36160,33306,36161,M)}else{const X=b.texture,re=s.convert(X.format),ce=s.convert(X.type),Le=A(X.internalFormat,re,ce);if(V){const E=Se(b);r.renderbufferStorageMultisample(36161,E,Le,b.width,b.height)}else r.renderbufferStorage(36161,Le,b.width,b.height)}r.bindRenderbuffer(36161,null)}function Te(M,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),P(b.depthTexture,0);const X=n.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===ni)r.framebufferTexture2D(36160,36096,3553,X,0);else if(b.depthTexture.format===Fi)r.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function ve(M){const b=n.get(M),V=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Te(b.__webglFramebuffer,M)}else if(V){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]=r.createRenderbuffer(),Ne(b.__webglDepthbuffer[X],M,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),Ne(b.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function pe(M){const b=M.texture,V=n.get(M),X=n.get(b);M.addEventListener("dispose",B),X.__webglTexture=r.createTexture(),X.__version=b.version,a.memory.textures++;const re=M.isWebGLCubeRenderTarget===!0,ce=M.isWebGLMultisampleRenderTarget===!0,Le=b.isDataTexture3D||b.isDataTexture2DArray,E=g(M)||o;if(o&&b.format===sn&&(b.type===rn||b.type===Er)&&(b.format=Ct,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),re){V.__webglFramebuffer=[];for(let S=0;S<6;S++)V.__webglFramebuffer[S]=r.createFramebuffer()}else if(V.__webglFramebuffer=r.createFramebuffer(),ce)if(o){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer);const S=s.convert(b.format),Y=s.convert(b.type),J=A(b.internalFormat,S,Y),he=Se(M);r.renderbufferStorageMultisample(36161,he,J,M.width,M.height),t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,V.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),M.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(V.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(re){t.bindTexture(34067,X.__webglTexture),le(34067,b,E);for(let S=0;S<6;S++)U(V.__webglFramebuffer[S],M,36064,34069+S);T(b,E)&&C(34067,b,M.width,M.height),t.bindTexture(34067,null)}else{let S=3553;Le&&(o?S=b.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(S,X.__webglTexture),le(S,b,E),U(V.__webglFramebuffer,M,36064,S),T(b,E)&&C(3553,b,M.width,M.height),t.bindTexture(3553,null)}M.depthBuffer&&ve(M)}function Ae(M){const b=M.texture,V=g(M)||o;if(T(b,V)){const X=M.isWebGLCubeRenderTarget?34067:3553,re=n.get(b).__webglTexture;t.bindTexture(X,re),C(X,b,M.width,M.height),t.bindTexture(X,null)}}function Me(M){if(M.isWebGLMultisampleRenderTarget)if(o){const b=M.width,V=M.height;let X=16384;M.depthBuffer&&(X|=256),M.stencilBuffer&&(X|=1024);const re=n.get(M);t.bindFramebuffer(36008,re.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,re.__webglFramebuffer),r.blitFramebuffer(0,0,b,V,0,0,b,V,X,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,re.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Se(M){return o&&M.isWebGLMultisampleRenderTarget?Math.min(u,M.samples):0}function Q(M){const b=a.render.frame;d.get(M)!==b&&(d.set(M,b),M.update())}let ee=!1,ne=!1;function ue(M,b){M&&M.isWebGLRenderTarget&&(ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ee=!0),M=M.texture),P(M,b)}function ae(M,b){M&&M.isWebGLCubeRenderTarget&&(ne===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ne=!0),M=M.texture),Z(M,b)}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.setTexture2D=P,this.setTexture2DArray=D,this.setTexture3D=R,this.setTextureCube=Z,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Me,this.safeSetTexture2D=ue,this.safeSetTextureCube=ae}function Bm(r,e,t){const n=t.isWebGL2;function i(s){let a;if(s===ia)return 5121;if(s===uh)return 32819;if(s===dh)return 32820;if(s===fh)return 33635;if(s===lh)return 5120;if(s===ch)return 5122;if(s===Sr)return 5123;if(s===hh)return 5124;if(s===Mr)return 5125;if(s===rn)return 5126;if(s===Er)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ph)return 6406;if(s===sn)return 6407;if(s===Ct)return 6408;if(s===mh)return 6409;if(s===gh)return 6410;if(s===ni)return 6402;if(s===Fi)return 34041;if(s===_h)return 6403;if(s===vh)return 36244;if(s===xh)return 33319;if(s===yh)return 33320;if(s===bh)return 36248;if(s===wh)return 36249;if(s===Va||s===Ga||s===Wa||s===Xa)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Va)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ga)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qa||s===Ya||s===ja||s===Za)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===qa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ya)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Za)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Ja||s===$a)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===Ja)return a.COMPRESSED_RGB8_ETC2;if(s===$a)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===Sh||s===Eh||s===Th||s===Ah||s===Lh||s===Ch||s===Rh||s===Ph||s===Dh||s===Ih||s===Nh||s===Fh||s===Oh||s===Bh||s===kh||s===Hh||s===Uh||s===Vh||s===Gh||s===Wh||s===Xh||s===qh||s===Yh||s===jh||s===Zh||s===Jh||s===$h||s===Qh)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===zh)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===Ri)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Ul extends mt{constructor(e=[]){super(),this.cameras=e}}Ul.prototype.isArrayCamera=!0;class Kn extends De{constructor(){super(),this.type="Group"}}Kn.prototype.isGroup=!0;const zm={type:"move"};class Ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zm))),c&&e.hand){a=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,n);if(c.joints[_.jointName]===void 0){const p=new Kn;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[_.jointName]=p,c.add(p)}const g=c.joints[_.jointName];v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=v.radius),g.visible=v!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class km extends pn{constructor(e,t){super();const n=this,i=e.state;let s=null,a=1,o=null,l="local-floor",c=null;const h=[],u=new Map,d=new mt;d.layers.enable(1),d.viewport=new Be;const f=new mt;f.layers.enable(2),f.viewport=new Be;const m=[d,f],_=new Ul;_.layers.enable(1),_.layers.enable(2);let v=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let L=h[H];return L===void 0&&(L=new Ss,h[H]=L),L.getTargetRaySpace()},this.getControllerGrip=function(H){let L=h[H];return L===void 0&&(L=new Ss,h[H]=L),L.getGripSpace()},this.getHand=function(H){let L=h[H];return L===void 0&&(L=new Ss,h[H]=L),L.getHandSpace()};function p(H){const L=u.get(H.inputSource);L&&L.dispatchEvent({type:H.type,data:H.inputSource})}function T(){u.forEach(function(H,L){H.disconnect(L)}),u.clear(),v=null,g=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){l=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){s.addEventListener("select",p),s.addEventListener("selectstart",p),s.addEventListener("selectend",p),s.addEventListener("squeeze",p),s.addEventListener("squeezestart",p),s.addEventListener("squeezeend",p),s.addEventListener("end",T),s.addEventListener("inputsourceschange",C);const L=t.getContextAttributes();L.xrCompatible!==!0&&await t.makeXRCompatible();const P={antialias:L.antialias,alpha:L.alpha,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:a},D=new XRWebGLLayer(s,t,P);s.updateRenderState({baseLayer:D}),o=await s.requestReferenceSpace(l),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function C(H){const L=s.inputSources;for(let P=0;P<h.length;P++)u.set(L[P],h[P]);for(let P=0;P<H.removed.length;P++){const D=H.removed[P],R=u.get(D);R&&(R.dispatchEvent({type:"disconnected",data:D}),u.delete(D))}for(let P=0;P<H.added.length;P++){const D=H.added[P],R=u.get(D);R&&R.dispatchEvent({type:"connected",data:D})}}const A=new w,x=new w;function F(H,L,P){A.setFromMatrixPosition(L.matrixWorld),x.setFromMatrixPosition(P.matrixWorld);const D=A.distanceTo(x),R=L.projectionMatrix.elements,Z=P.projectionMatrix.elements,te=R[14]/(R[10]-1),K=R[14]/(R[10]+1),le=(R[9]+1)/R[5],oe=(R[9]-1)/R[5],fe=(R[8]-1)/R[0],_e=(Z[8]+1)/Z[0],U=te*fe,Ne=te*_e,Te=D/(-fe+_e),ve=Te*-fe;L.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ve),H.translateZ(Te),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const pe=te+Te,Ae=K+Te,Me=U-ve,Se=Ne+(D-ve),Q=le*K/Ae*pe,ee=oe*K/Ae*pe;H.projectionMatrix.makePerspective(Me,Se,Q,ee,pe,Ae)}function B(H,L){L===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(L.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.getCamera=function(H){_.near=f.near=d.near=H.near,_.far=f.far=d.far=H.far,(v!==_.near||g!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,g=_.far);const L=H.parent,P=_.cameras;B(_,L);for(let R=0;R<P.length;R++)B(P[R],L);H.matrixWorld.copy(_.matrixWorld),H.matrix.copy(_.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const D=H.children;for(let R=0,Z=D.length;R<Z;R++)D[R].updateMatrixWorld(!0);return P.length===2?F(_,d,f):_.projectionMatrix.copy(d.projectionMatrix),_};let z=null;function W(H,L){if(c=L.getViewerPose(o),c!==null){const D=c.views,R=s.renderState.baseLayer;i.bindXRFramebuffer(R.framebuffer);let Z=!1;D.length!==_.cameras.length&&(_.cameras.length=0,Z=!0);for(let te=0;te<D.length;te++){const K=D[te],le=R.getViewport(K),oe=m[te];oe.matrix.fromArray(K.transform.matrix),oe.projectionMatrix.fromArray(K.projectionMatrix),oe.viewport.set(le.x,le.y,le.width,le.height),te===0&&_.matrix.copy(oe.matrix),Z===!0&&_.cameras.push(oe)}}const P=s.inputSources;for(let D=0;D<h.length;D++){const R=h[D],Z=P[D];R.update(Z,L,o)}z&&z(H,L)}const j=new Ll;j.setAnimationLoop(W),this.setAnimationLoop=function(H){z=H},this.dispose=function(){}}}function Hm(r){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function t(g,p,T,C){p.isMeshBasicMaterial?n(g,p):p.isMeshLambertMaterial?(n(g,p),l(g,p)):p.isMeshToonMaterial?(n(g,p),h(g,p)):p.isMeshPhongMaterial?(n(g,p),c(g,p)):p.isMeshStandardMaterial?(n(g,p),p.isMeshPhysicalMaterial?d(g,p):u(g,p)):p.isMeshMatcapMaterial?(n(g,p),f(g,p)):p.isMeshDepthMaterial?(n(g,p),m(g,p)):p.isMeshDistanceMaterial?(n(g,p),_(g,p)):p.isMeshNormalMaterial?(n(g,p),v(g,p)):p.isLineBasicMaterial?(i(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?a(g,p,T,C):p.isSpriteMaterial?o(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);const T=r.get(p).envMap;if(T){g.envMap.value=T,g.flipEnvMap.value=T.isCubeTexture&&T._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;const x=r.get(T).__maxMipLevel;x!==void 0&&(g.maxMipLevel.value=x)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let C;p.map?C=p.map:p.specularMap?C=p.specularMap:p.displacementMap?C=p.displacementMap:p.normalMap?C=p.normalMap:p.bumpMap?C=p.bumpMap:p.roughnessMap?C=p.roughnessMap:p.metalnessMap?C=p.metalnessMap:p.alphaMap?C=p.alphaMap:p.emissiveMap?C=p.emissiveMap:p.clearcoatMap?C=p.clearcoatMap:p.clearcoatNormalMap?C=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(C=p.clearcoatRoughnessMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),g.uvTransform.value.copy(C.matrix));let A;p.aoMap?A=p.aoMap:p.lightMap&&(A=p.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uv2Transform.value.copy(A.matrix))}function i(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function a(g,p,T,C){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=C*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let A;p.map?A=p.map:p.alphaMap&&(A=p.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix))}function l(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),r.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p){u(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Qe&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function f(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function _(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function v(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Um(){const r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return r.style.display="block",r}function ke(r){r=r||{};const e=r.canvas!==void 0?r.canvas:Um(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Gi,this.physicallyCorrectLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;const _=this;let v=!1,g=0,p=0,T=null,C=-1,A=null;const x=new Be,F=new Be;let B=null,z=e.width,W=e.height,j=1,H=null,L=null;const P=new Be(0,0,z,W),D=new Be(0,0,z,W);let R=!1;const Z=new Hr;let te=!1,K=!1;const le=new ge,oe=new w,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return T===null?j:1}let U=t;function Ne(y,O){for(let I=0;I<y.length;I++){const k=y[I],se=e.getContext(k,O);if(se!==null)return se}return null}try{const y={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",Re,!1),U===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),U=Ne(O,y),U===null)throw Ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Te,ve,pe,Ae,Me,Se,Q,ee,ne,ue,ae,M,b,V,X,re,ce,Le,E,S,Y,J;function he(){Te=new cp(U),ve=new ap(U,Te,r),Te.init(ve),Y=new Bm(U,Te,ve),pe=new Fm(U,Te,ve),Ae=new dp,Me=new Mm,Se=new Om(U,Te,pe,Me,ve,Y,Ae),Q=new lp(_),ee=new Nu(U,ve),J=new rp(U,Te,ee,ve),ne=new hp(U,ee,Ae,J),ue=new gp(U,ne,ee,Ae),Le=new mp(U),X=new op(Me),ae=new wm(_,Q,Te,ve,J,X),M=new Hm(Me),b=new Tm(Me),V=new Dm(Te,ve),ce=new ip(_,Q,pe,ue,o),re=new Hl(_,ue,ve),E=new sp(U,Te,Ae,ve),S=new up(U,Te,Ae,ve),Ae.programs=ae.programs,_.capabilities=ve,_.extensions=Te,_.properties=Me,_.renderLists=b,_.shadowMap=re,_.state=pe,_.info=Ae}he();const q=new km(_,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=Te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(z,W,!1))},this.getSize=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),y=new $),y.set(z,W)},this.setSize=function(y,O,I){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=y,W=O,e.width=Math.floor(y*j),e.height=Math.floor(O*j),I!==!1&&(e.style.width=y+"px",e.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),y=new $),y.set(z*j,W*j).floor()},this.setDrawingBufferSize=function(y,O,I){z=y,W=O,j=I,e.width=Math.floor(y*I),e.height=Math.floor(O*I),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),y=new Be),y.copy(x)},this.getViewport=function(y){return y.copy(P)},this.setViewport=function(y,O,I,k){y.isVector4?P.set(y.x,y.y,y.z,y.w):P.set(y,O,I,k),pe.viewport(x.copy(P).multiplyScalar(j).floor())},this.getScissor=function(y){return y.copy(D)},this.setScissor=function(y,O,I,k){y.isVector4?D.set(y.x,y.y,y.z,y.w):D.set(y,O,I,k),pe.scissor(F.copy(D).multiplyScalar(j).floor())},this.getScissorTest=function(){return R},this.setScissorTest=function(y){pe.setScissorTest(R=y)},this.setOpaqueSort=function(y){H=y},this.setTransparentSort=function(y){L=y},this.getClearColor=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),y=new de),y.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(y,O,I){let k=0;(y===void 0||y)&&(k|=16384),(O===void 0||O)&&(k|=256),(I===void 0||I)&&(k|=1024),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",Re,!1),b.dispose(),V.dispose(),Me.dispose(),Q.dispose(),ue.dispose(),J.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ea),q.removeEventListener("sessionend",Ta),vn.stop()};function me(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const y=Ae.autoReset,O=re.enabled,I=re.autoUpdate,k=re.needsUpdate,se=re.type;he(),Ae.autoReset=y,re.enabled=O,re.autoUpdate=I,re.needsUpdate=k,re.type=se}function Ie(y){const O=y.target;O.removeEventListener("dispose",Ie),rt(O)}function rt(y){qe(y),Me.remove(y)}function qe(y){const O=Me.get(y).programs;O!==void 0&&O.forEach(function(I){ae.releaseProgram(I)})}function Ut(y,O){y.render(function(I){_.renderBufferImmediate(I,O)})}this.renderBufferImmediate=function(y,O){J.initAttributes();const I=Me.get(y);y.hasPositions&&!I.position&&(I.position=U.createBuffer()),y.hasNormals&&!I.normal&&(I.normal=U.createBuffer()),y.hasUvs&&!I.uv&&(I.uv=U.createBuffer()),y.hasColors&&!I.color&&(I.color=U.createBuffer());const k=O.getAttributes();y.hasPositions&&(U.bindBuffer(34962,I.position),U.bufferData(34962,y.positionArray,35048),J.enableAttribute(k.position),U.vertexAttribPointer(k.position,3,5126,!1,0,0)),y.hasNormals&&(U.bindBuffer(34962,I.normal),U.bufferData(34962,y.normalArray,35048),J.enableAttribute(k.normal),U.vertexAttribPointer(k.normal,3,5126,!1,0,0)),y.hasUvs&&(U.bindBuffer(34962,I.uv),U.bufferData(34962,y.uvArray,35048),J.enableAttribute(k.uv),U.vertexAttribPointer(k.uv,2,5126,!1,0,0)),y.hasColors&&(U.bindBuffer(34962,I.color),U.bufferData(34962,y.colorArray,35048),J.enableAttribute(k.color),U.vertexAttribPointer(k.color,3,5126,!1,0,0)),J.disableUnusedAttributes(),U.drawArrays(4,0,y.count),y.count=0},this.renderBufferDirect=function(y,O,I,k,se,Ce){O===null&&(O=fe);const xe=se.isMesh&&se.matrixWorld.determinant()<0,we=Pa(y,O,k,se);pe.setMaterial(k,xe);let ze=I.index;const be=I.attributes.position;if(ze===null){if(be===void 0||be.count===0)return}else if(ze.count===0)return;let Pe=1;k.wireframe===!0&&(ze=ne.getWireframeAttribute(I),Pe=2),(k.morphTargets||k.morphNormals)&&Le.update(se,I,k,we),J.setup(se,k,we,I,ze);let ye,Fe=E;ze!==null&&(ye=ee.get(ze),Fe=S,Fe.setIndex(ye));const Dt=ze!==null?ze.count:be.count,ht=I.drawRange.start*Pe,xn=I.drawRange.count*Pe,Je=Ce!==null?Ce.start*Pe:0,yn=Ce!==null?Ce.count*Pe:1/0,je=Math.max(ht,Je),Zr=Math.min(Dt,ht+xn,Je+yn)-1,ft=Math.max(0,Zr-je+1);if(ft!==0){if(se.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*_e()),Fe.setMode(1)):Fe.setMode(4);else if(se.isLine){let Vt=k.linewidth;Vt===void 0&&(Vt=1),pe.setLineWidth(Vt*_e()),se.isLineSegments?Fe.setMode(1):se.isLineLoop?Fe.setMode(2):Fe.setMode(3)}else se.isPoints?Fe.setMode(0):se.isSprite&&Fe.setMode(4);if(se.isInstancedMesh)Fe.renderInstances(je,ft,se.count);else if(I.isInstancedBufferGeometry){const Vt=Math.min(I.instanceCount,I._maxInstanceCount);Fe.renderInstances(je,ft,Vt)}else Fe.render(je,ft)}},this.compile=function(y,O){d=V.get(y),d.init(),y.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(),y.traverse(function(I){const k=I.material;if(k)if(Array.isArray(k))for(let se=0;se<k.length;se++){const Ce=k[se];jr(Ce,y,I)}else jr(k,y,I)})};let Mt=null;function Ac(y){Mt&&Mt(y)}function Ea(){vn.stop()}function Ta(){vn.start()}const vn=new Ll;vn.setAnimationLoop(Ac),typeof window!="undefined"&&vn.setContext(window),this.setAnimationLoop=function(y){Mt=y,q.setAnimationLoop(y),y===null?vn.stop():vn.start()},q.addEventListener("sessionstart",Ea),q.addEventListener("sessionend",Ta),this.render=function(y,O){let I,k;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),I=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),k=arguments[3]),O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(O=q.getCamera(O)),y.isScene===!0&&y.onBeforeRender(_,y,O,I||T),d=V.get(y,m.length),d.init(),m.push(d),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(le),K=this.localClippingEnabled,te=X.init(this.clippingPlanes,K,O),u=b.get(y,f.length),u.init(),f.push(u),Aa(y,O,0,_.sortObjects),u.finish(),_.sortObjects===!0&&u.sort(H,L),te===!0&&X.beginShadows();const se=d.state.shadowsArray;re.render(se,y,O),d.setupLights(),d.setupLightsView(O),te===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),I!==void 0&&this.setRenderTarget(I),ce.render(u,y,O,k);const Ce=u.opaque,xe=u.transparent;Ce.length>0&&La(Ce,y,O),xe.length>0&&La(xe,y,O),T!==null&&(Se.updateRenderTargetMipmap(T),Se.updateMultisampleRenderTarget(T)),y.isScene===!0&&y.onAfterRender(_,y,O),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1),J.resetDefaultState(),C=-1,A=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Aa(y,O,I,k){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)I=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){k&&oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(le);const xe=ue.update(y),we=y.material;we.visible&&u.push(y,xe,we,I,oe.z,null)}}else if(y.isImmediateRenderObject)k&&oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(le),u.push(y,null,y.material,I,oe.z,null);else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Ae.render.frame&&(y.skeleton.update(),y.skeleton.frame=Ae.render.frame),!y.frustumCulled||Z.intersectsObject(y))){k&&oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(le);const xe=ue.update(y),we=y.material;if(Array.isArray(we)){const ze=xe.groups;for(let be=0,Pe=ze.length;be<Pe;be++){const ye=ze[be],Fe=we[ye.materialIndex];Fe&&Fe.visible&&u.push(y,xe,Fe,I,oe.z,ye)}}else we.visible&&u.push(y,xe,we,I,oe.z,null)}}const Ce=y.children;for(let xe=0,we=Ce.length;xe<we;xe++)Aa(Ce[xe],O,I,k)}function La(y,O,I){const k=O.isScene===!0?O.overrideMaterial:null;for(let se=0,Ce=y.length;se<Ce;se++){const xe=y[se],we=xe.object,ze=xe.geometry,be=k===null?xe.material:k,Pe=xe.group;if(I.isArrayCamera){const ye=I.cameras;for(let Fe=0,Dt=ye.length;Fe<Dt;Fe++){const ht=ye[Fe];we.layers.test(ht.layers)&&(pe.viewport(x.copy(ht.viewport)),d.setupLightsView(ht),Ca(we,O,ht,ze,be,Pe))}}else Ca(we,O,I,ze,be,Pe)}}function Ca(y,O,I,k,se,Ce){if(y.onBeforeRender(_,O,I,k,se,Ce),y.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),y.isImmediateRenderObject){const xe=Pa(I,O,se,y);pe.setMaterial(se),J.reset(),Ut(y,xe)}else _.renderBufferDirect(I,O,k,se,y,Ce);y.onAfterRender(_,O,I,k,se,Ce)}function jr(y,O,I){O.isScene!==!0&&(O=fe);const k=Me.get(y),se=d.state.lights,Ce=d.state.shadowsArray,xe=se.state.version,we=ae.getParameters(y,se.state,Ce,O,I),ze=ae.getProgramCacheKey(we);let be=k.programs;k.environment=y.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=Q.get(y.envMap||k.environment),be===void 0&&(y.addEventListener("dispose",Ie),be=new Map,k.programs=be);let Pe=be.get(ze);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===xe)return Ra(y,we),Pe}else we.uniforms=ae.getUniforms(y),y.onBuild(we,_),y.onBeforeCompile(we,_),Pe=ae.acquireProgram(we,ze),be.set(ze,Pe),k.uniforms=we.uniforms;const ye=k.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ye.clippingPlanes=X.uniform),Ra(y,we),k.needsLights=Cc(y),k.lightsStateVersion=xe,k.needsLights&&(ye.ambientLightColor.value=se.state.ambient,ye.lightProbe.value=se.state.probe,ye.directionalLights.value=se.state.directional,ye.directionalLightShadows.value=se.state.directionalShadow,ye.spotLights.value=se.state.spot,ye.spotLightShadows.value=se.state.spotShadow,ye.rectAreaLights.value=se.state.rectArea,ye.ltc_1.value=se.state.rectAreaLTC1,ye.ltc_2.value=se.state.rectAreaLTC2,ye.pointLights.value=se.state.point,ye.pointLightShadows.value=se.state.pointShadow,ye.hemisphereLights.value=se.state.hemi,ye.directionalShadowMap.value=se.state.directionalShadowMap,ye.directionalShadowMatrix.value=se.state.directionalShadowMatrix,ye.spotShadowMap.value=se.state.spotShadowMap,ye.spotShadowMatrix.value=se.state.spotShadowMatrix,ye.pointShadowMap.value=se.state.pointShadowMap,ye.pointShadowMatrix.value=se.state.pointShadowMatrix);const Fe=Pe.getUniforms(),Dt=an.seqWithValue(Fe.seq,ye);return k.currentProgram=Pe,k.uniformsList=Dt,Pe}function Ra(y,O){const I=Me.get(y);I.outputEncoding=O.outputEncoding,I.instancing=O.instancing,I.numClippingPlanes=O.numClippingPlanes,I.numIntersection=O.numClipIntersection,I.vertexAlphas=O.vertexAlphas}function Pa(y,O,I,k){O.isScene!==!0&&(O=fe),Se.resetTextureUnits();const se=O.fog,Ce=I.isMeshStandardMaterial?O.environment:null,xe=T===null?_.outputEncoding:T.texture.encoding,we=Q.get(I.envMap||Ce),ze=I.vertexColors===!0&&k.geometry&&k.geometry.attributes.color&&k.geometry.attributes.color.itemSize===4,be=Me.get(I),Pe=d.state.lights;if(te===!0&&(K===!0||y!==A)){const je=y===A&&I.id===C;X.setState(I,y,je)}let ye=!1;I.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Pe.state.version||be.outputEncoding!==xe||k.isInstancedMesh&&be.instancing===!1||!k.isInstancedMesh&&be.instancing===!0||be.envMap!==we||I.fog&&be.fog!==se||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==X.numPlanes||be.numIntersection!==X.numIntersection)||be.vertexAlphas!==ze)&&(ye=!0):(ye=!0,be.__version=I.version);let Fe=be.currentProgram;ye===!0&&(Fe=jr(I,O,k));let Dt=!1,ht=!1,xn=!1;const Je=Fe.getUniforms(),yn=be.uniforms;if(pe.useProgram(Fe.program)&&(Dt=!0,ht=!0,xn=!0),I.id!==C&&(C=I.id,ht=!0),Dt||A!==y){if(Je.setValue(U,"projectionMatrix",y.projectionMatrix),ve.logarithmicDepthBuffer&&Je.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),A!==y&&(A=y,ht=!0,xn=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const je=Je.map.cameraPosition;je!==void 0&&je.setValue(U,oe.setFromMatrixPosition(y.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Je.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||I.skinning)&&Je.setValue(U,"viewMatrix",y.matrixWorldInverse)}if(I.skinning){Je.setOptional(U,k,"bindMatrix"),Je.setOptional(U,k,"bindMatrixInverse");const je=k.skeleton;if(je){const Zr=je.bones;if(ve.floatVertexTextures){if(je.boneTexture===null){let ft=Math.sqrt(Zr.length*4);ft=pu(ft),ft=Math.max(ft,4);const Vt=new Float32Array(ft*ft*4);Vt.set(je.boneMatrices);const Rc=new Al(Vt,ft,ft,Ct,rn);je.boneMatrices=Vt,je.boneTexture=Rc,je.boneTextureSize=ft}Je.setValue(U,"boneTexture",je.boneTexture,Se),Je.setValue(U,"boneTextureSize",je.boneTextureSize)}else Je.setOptional(U,je,"boneMatrices")}}return(ht||be.receiveShadow!==k.receiveShadow)&&(be.receiveShadow=k.receiveShadow,Je.setValue(U,"receiveShadow",k.receiveShadow)),ht&&(Je.setValue(U,"toneMappingExposure",_.toneMappingExposure),be.needsLights&&Lc(yn,xn),se&&I.fog&&M.refreshFogUniforms(yn,se),M.refreshMaterialUniforms(yn,I,j,W),an.upload(U,be.uniformsList,yn,Se)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(an.upload(U,be.uniformsList,yn,Se),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Je.setValue(U,"center",k.center),Je.setValue(U,"modelViewMatrix",k.modelViewMatrix),Je.setValue(U,"normalMatrix",k.normalMatrix),Je.setValue(U,"modelMatrix",k.matrixWorld),Fe}function Lc(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Cc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return T},this.setRenderTarget=function(y,O=0,I=0){T=y,g=O,p=I,y&&Me.get(y).__webglFramebuffer===void 0&&Se.setupRenderTarget(y);let k=null,se=!1,Ce=!1;if(y){const xe=y.texture;(xe.isDataTexture3D||xe.isDataTexture2DArray)&&(Ce=!0);const we=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(k=we[O],se=!0):y.isWebGLMultisampleRenderTarget?k=Me.get(y).__webglMultisampledFramebuffer:k=we,x.copy(y.viewport),F.copy(y.scissor),B=y.scissorTest}else x.copy(P).multiplyScalar(j).floor(),F.copy(D).multiplyScalar(j).floor(),B=R;if(pe.bindFramebuffer(36160,k),pe.viewport(x),pe.scissor(F),pe.setScissorTest(B),se){const xe=Me.get(y.texture);U.framebufferTexture2D(36160,36064,34069+O,xe.__webglTexture,I)}else if(Ce){const xe=Me.get(y.texture),we=O||0;U.framebufferTextureLayer(36160,36064,xe.__webglTexture,I||0,we)}},this.readRenderTargetPixels=function(y,O,I,k,se,Ce,xe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){pe.bindFramebuffer(36160,we);try{const ze=y.texture,be=ze.format,Pe=ze.type;if(be!==Ct&&Y.convert(be)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ye=Pe===Er&&(Te.has("EXT_color_buffer_half_float")||ve.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Pe!==ia&&Y.convert(Pe)!==U.getParameter(35738)&&!(Pe===rn&&(ve.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U.checkFramebufferStatus(36160)===36053?O>=0&&O<=y.width-k&&I>=0&&I<=y.height-se&&U.readPixels(O,I,k,se,Y.convert(be),Y.convert(Pe),Ce):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const ze=T!==null?Me.get(T).__webglFramebuffer:null;pe.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(y,O,I=0){const k=Math.pow(2,-I),se=Math.floor(O.image.width*k),Ce=Math.floor(O.image.height*k),xe=Y.convert(O.format);Se.setTexture2D(O,0),U.copyTexImage2D(3553,I,xe,y.x,y.y,se,Ce,0),pe.unbindTexture()},this.copyTextureToTexture=function(y,O,I,k=0){const se=O.image.width,Ce=O.image.height,xe=Y.convert(I.format),we=Y.convert(I.type);Se.setTexture2D(I,0),U.pixelStorei(37440,I.flipY),U.pixelStorei(37441,I.premultiplyAlpha),U.pixelStorei(3317,I.unpackAlignment),O.isDataTexture?U.texSubImage2D(3553,k,y.x,y.y,se,Ce,xe,we,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(3553,k,y.x,y.y,O.mipmaps[0].width,O.mipmaps[0].height,xe,O.mipmaps[0].data):U.texSubImage2D(3553,k,y.x,y.y,xe,we,O.image),k===0&&I.generateMipmaps&&U.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(y,O,I,k,se=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:Ce,height:xe,data:we}=I.image,ze=Y.convert(k.format),be=Y.convert(k.type);let Pe;if(k.isDataTexture3D)Se.setTexture3D(k,0),Pe=32879;else if(k.isDataTexture2DArray)Se.setTexture2DArray(k,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,k.flipY),U.pixelStorei(37441,k.premultiplyAlpha),U.pixelStorei(3317,k.unpackAlignment);const ye=U.getParameter(3314),Fe=U.getParameter(32878),Dt=U.getParameter(3316),ht=U.getParameter(3315),xn=U.getParameter(32877);U.pixelStorei(3314,Ce),U.pixelStorei(32878,xe),U.pixelStorei(3316,y.min.x),U.pixelStorei(3315,y.min.y),U.pixelStorei(32877,y.min.z),U.texSubImage3D(Pe,se,O.x,O.y,O.z,y.max.x-y.min.x+1,y.max.y-y.min.y+1,y.max.z-y.min.z+1,ze,be,we),U.pixelStorei(3314,ye),U.pixelStorei(32878,Fe),U.pixelStorei(3316,Dt),U.pixelStorei(3315,ht),U.pixelStorei(32877,xn),se===0&&k.generateMipmaps&&U.generateMipmap(Pe),pe.unbindTexture()},this.initTexture=function(y){Se.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){g=0,p=0,T=null,pe.reset(),J.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Vl extends ke{}Vl.prototype.isWebGL1Renderer=!0;class ca extends De{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}ca.prototype.isScene=!0;class An{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=zt(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new An(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}An.prototype.isInterleavedBuffer=!0;const Ye=new w;class Bi{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Bi.prototype.isInterleavedBufferAttribute=!0;class Gl extends it{constructor(e){super(),this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Gl.prototype.isSpriteMaterial=!0;let Wn;const _i=new w,Xn=new w,qn=new w,Yn=new $,vi=new $,Wl=new ge,cr=new w,xi=new w,hr=new w,To=new $,Es=new $,Ao=new $;class Vm extends De{constructor(e){if(super(),this.type="Sprite",Wn===void 0){Wn=new Ue;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new An(t,5);Wn.setIndex([0,1,2,0,2,3]),Wn.setAttribute("position",new Bi(n,3,0,!1)),Wn.setAttribute("uv",new Bi(n,2,3,!1))}this.geometry=Wn,this.material=e!==void 0?e:new Gl,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xn.setFromMatrixScale(this.matrixWorld),Wl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xn.multiplyScalar(-qn.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ur(cr.set(-.5,-.5,0),qn,a,Xn,i,s),ur(xi.set(.5,-.5,0),qn,a,Xn,i,s),ur(hr.set(.5,.5,0),qn,a,Xn,i,s),To.set(0,0),Es.set(1,0),Ao.set(1,1);let o=e.ray.intersectTriangle(cr,xi,hr,!1,_i);if(o===null&&(ur(xi.set(-.5,.5,0),qn,a,Xn,i,s),Es.set(0,1),o=e.ray.intersectTriangle(cr,hr,xi,!1,_i),o===null))return;const l=e.ray.origin.distanceTo(_i);l<e.near||l>e.far||t.push({distance:l,point:_i.clone(),uv:Ze.getUV(_i,cr,xi,hr,To,Es,Ao,new $),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Vm.prototype.isSprite=!0;function ur(r,e,t,n,i,s){Yn.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(vi.x=s*Yn.x-i*Yn.y,vi.y=i*Yn.x+s*Yn.y):vi.copy(Yn),r.copy(e),r.x+=vi.x,r.y+=vi.y,r.applyMatrix4(Wl)}const Lo=new w,Co=new Be,Ro=new Be,Gm=new w,Po=new ge;class Xl extends yt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ge,this.bindMatrixInverse=new ge}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Be,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Co.fromBufferAttribute(i.attributes.skinIndex,e),Ro.fromBufferAttribute(i.attributes.skinWeight,e),Lo.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Ro.getComponent(s);if(a!==0){const o=Co.getComponent(s);Po.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Gm.copy(Lo).applyMatrix4(Po),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Xl.prototype.isSkinnedMesh=!0;class Wm extends De{constructor(){super(),this.type="Bone"}}Wm.prototype.isBone=!0;const Do=new ge,Io=new ge,dr=[],yi=new yt;class Xm extends yt{constructor(e,t,n){super(e,t),this.instanceMatrix=new et(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(yi.geometry=this.geometry,yi.material=this.material,yi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Do),Io.multiplyMatrices(n,Do),yi.matrixWorld=Io,yi.raycast(e,dr);for(let a=0,o=dr.length;a<o;a++){const l=dr[a];l.instanceId=s,l.object=this,t.push(l)}dr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new et(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Xm.prototype.isInstancedMesh=!0;class Wi extends it{constructor(e){super(),this.type="LineBasicMaterial",this.color=new de(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}Wi.prototype.isLineBasicMaterial=!0;const No=new w,Fo=new w,Oo=new ge,Ts=new Tn,fr=new oi;class ha extends De{constructor(e=new Ue,t=new Wi){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)No.fromBufferAttribute(t,i-1),Fo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=No.distanceTo(Fo);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(i),fr.radius+=s,e.ray.intersectsSphere(fr)===!1)return;Oo.copy(i).invert(),Ts.copy(e.ray).applyMatrix4(Oo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new w,h=new w,u=new w,d=new w,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,v=n.attributes.position;if(m!==null){const g=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let T=g,C=p-1;T<C;T+=f){const A=m.getX(T),x=m.getX(T+1);if(c.fromBufferAttribute(v,A),h.fromBufferAttribute(v,x),Ts.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),p=Math.min(v.count,a.start+a.count);for(let T=g,C=p-1;T<C;T+=f){if(c.fromBufferAttribute(v,T),h.fromBufferAttribute(v,T+1),Ts.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ha.prototype.isLine=!0;const Bo=new w,zo=new w;class ua extends ha{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Bo.fromBufferAttribute(t,i),zo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bo.distanceTo(zo);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}ua.prototype.isLineSegments=!0;class qm extends ha{constructor(e,t){super(e,t),this.type="LineLoop"}}qm.prototype.isLineLoop=!0;class ql extends it{constructor(e){super(),this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}ql.prototype.isPointsMaterial=!0;const ko=new ge,Us=new Tn,pr=new oi,mr=new w;class Ym extends De{constructor(e=new Ue,t=new ql){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=s,e.ray.intersectsSphere(pr)===!1)return;ko.copy(i).invert(),Us.copy(e.ray).applyMatrix4(ko);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const v=c.getX(m);mr.fromBufferAttribute(u,v),Ho(mr,v,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)mr.fromBufferAttribute(u,m),Ho(mr,m,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ym.prototype.isPoints=!0;function Ho(r,e,t,n,i,s,a){const o=Us.distanceSqToPoint(r);if(o<t){const l=new w;Us.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Yl extends ot{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.format=o!==void 0?o:sn,this.minFilter=a!==void 0?a:gt,this.magFilter=s!==void 0?s:gt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Yl.prototype.isVideoTexture=!0;class jm extends ot{constructor(e,t,n,i,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,s,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}jm.prototype.isCompressedTexture=!0;class Zm extends ot{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.needsUpdate=!0}}Zm.prototype.isCanvasTexture=!0;class Jm extends ot{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:ni,h!==ni&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ni&&(n=Sr),n===void 0&&h===Fi&&(n=Ri),super(null,i,s,a,o,l,h,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:ut,this.minFilter=l!==void 0?l:ut,this.flipY=!1,this.generateMipmaps=!1}}Jm.prototype.isDepthTexture=!0;new w;new w;new w;new Ze;const $m={triangulate:function(r,e,t){t=t||2;const n=e&&e.length,i=n?e[0]*t:r.length;let s=jl(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(n&&(s=ng(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)u=r[m],d=r[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?1/f:0}return zi(s,a,t,o,l,f),a}};function jl(r,e,t,n,i){let s,a;if(i===fg(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Uo(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Uo(s,r[s],r[s+1],a);return a&&Ur(a,a.next)&&(Hi(a),a=a.next),a}function cn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ur(t,t.next)||We(t.prev,t,t.next)===0)){if(Hi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zi(r,e,t,n,i,s,a){if(!r)return;!a&&s&&og(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Km(r,n,i,s):Qm(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Hi(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=eg(cn(r),e,t),zi(r,e,t,n,i,s,2)):a===2&&tg(r,e,t,n,i,s):zi(cn(r),e,t,n,i,s,1);break}}}function Qm(r){const e=r.prev,t=r,n=r.next;if(We(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(ei(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&We(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Km(r,e,t,n){const i=r.prev,s=r,a=r.next;if(We(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,h=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,u=Vs(o,l,e,t,n),d=Vs(c,h,e,t,n);let f=r.prevZ,m=r.nextZ;for(;f&&f.z>=u&&m&&m.z<=d;){if(f!==r.prev&&f!==r.next&&ei(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&We(f.prev,f,f.next)>=0||(f=f.prevZ,m!==r.prev&&m!==r.next&&ei(i.x,i.y,s.x,s.y,a.x,a.y,m.x,m.y)&&We(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=u;){if(f!==r.prev&&f!==r.next&&ei(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&We(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=d;){if(m!==r.prev&&m!==r.next&&ei(i.x,i.y,s.x,s.y,a.x,a.y,m.x,m.y)&&We(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function eg(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Ur(i,s)&&Zl(i,n,n.next,s)&&ki(i,s)&&ki(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Hi(n),Hi(n.next),n=r=s),n=n.next}while(n!==r);return cn(n)}function tg(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hg(a,o)){let l=Jl(a,o);a=cn(a,a.next),l=cn(l,l.next),zi(a,e,t,n,i,s),zi(l,e,t,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function ng(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=jl(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(cg(c));for(i.sort(ig),s=0;s<i.length;s++)rg(i[s],t),t=cn(t,t.next);return t}function ig(r,e){return r.x-e.x}function rg(r,e){if(e=sg(r,e),e){const t=Jl(e,r);cn(e,e.next),cn(t,t.next)}}function sg(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let h=1/0,u;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&ei(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),ki(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&ag(a,t)))&&(a=t,h=u)),t=t.next;while(t!==o);return a}function ag(r,e){return We(r.prev,r,e.prev)<0&&We(e.next,r,r.next)<0}function og(r,e,t,n){let i=r;do i.z===null&&(i.z=Vs(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,lg(i)}function lg(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function Vs(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function cg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ei(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function hg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!ug(r,e)&&(ki(r,e)&&ki(e,r)&&dg(r,e)&&(We(r.prev,r,e.prev)||We(r,e.prev,e))||Ur(r,e)&&We(r.prev,r,r.next)>0&&We(e.prev,e,e.next)>0)}function We(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ur(r,e){return r.x===e.x&&r.y===e.y}function Zl(r,e,t,n){const i=_r(We(r,e,t)),s=_r(We(r,e,n)),a=_r(We(t,n,r)),o=_r(We(t,n,e));return!!(i!==s&&a!==o||i===0&&gr(r,t,e)||s===0&&gr(r,n,e)||a===0&&gr(t,r,n)||o===0&&gr(t,e,n))}function gr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function _r(r){return r>0?1:r<0?-1:0}function ug(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Zl(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ki(r,e){return We(r.prev,r,r.next)<0?We(r,e,r.next)>=0&&We(r,r.prev,e)>=0:We(r,e,r.prev)<0||We(r,r.next,e)<0}function dg(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Jl(r,e){const t=new Gs(r.i,r.x,r.y),n=new Gs(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Uo(r,e,t,n){const i=new Gs(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Hi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Gs(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fg(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class on{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return on.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Vo(e),Go(n,e);let a=e.length;t.forEach(Vo);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Go(n,t[l]);const o=$m.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Vo(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Go(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Vr extends Ue{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new tt(i,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:f-2,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:pg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let T,C=!1,A,x,F,B;g&&(T=g.getSpacedPoints(h),C=!0,d=!1,A=g.computeFrenetFrames(h,!1),x=new w,F=new w,B=new w),d||(v=0,f=0,m=0,_=0);const z=o.extractPoints(c);let W=z.shape;const j=z.holes;if(!on.isClockWise(W)){W=W.reverse();for(let Q=0,ee=j.length;Q<ee;Q++){const ne=j[Q];on.isClockWise(ne)&&(j[Q]=ne.reverse())}}const L=on.triangulateShape(W,j),P=W;for(let Q=0,ee=j.length;Q<ee;Q++){const ne=j[Q];W=W.concat(ne)}function D(Q,ee,ne){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().multiplyScalar(ne).add(Q)}const R=W.length,Z=L.length;function te(Q,ee,ne){let ue,ae,M;const b=Q.x-ee.x,V=Q.y-ee.y,X=ne.x-Q.x,re=ne.y-Q.y,ce=b*b+V*V,Le=b*re-V*X;if(Math.abs(Le)>Number.EPSILON){const E=Math.sqrt(ce),S=Math.sqrt(X*X+re*re),Y=ee.x-V/E,J=ee.y+b/E,he=ne.x-re/S,q=ne.y+X/S,me=((he-Y)*re-(q-J)*X)/(b*re-V*X);ue=Y+b*me-Q.x,ae=J+V*me-Q.y;const Re=ue*ue+ae*ae;if(Re<=2)return new $(ue,ae);M=Math.sqrt(Re/2)}else{let E=!1;b>Number.EPSILON?X>Number.EPSILON&&(E=!0):b<-Number.EPSILON?X<-Number.EPSILON&&(E=!0):Math.sign(V)===Math.sign(re)&&(E=!0),E?(ue=-V,ae=b,M=Math.sqrt(ce)):(ue=b,ae=V,M=Math.sqrt(ce/2))}return new $(ue/M,ae/M)}const K=[];for(let Q=0,ee=P.length,ne=ee-1,ue=Q+1;Q<ee;Q++,ne++,ue++)ne===ee&&(ne=0),ue===ee&&(ue=0),K[Q]=te(P[Q],P[ne],P[ue]);const le=[];let oe,fe=K.concat();for(let Q=0,ee=j.length;Q<ee;Q++){const ne=j[Q];oe=[];for(let ue=0,ae=ne.length,M=ae-1,b=ue+1;ue<ae;ue++,M++,b++)M===ae&&(M=0),b===ae&&(b=0),oe[ue]=te(ne[ue],ne[M],ne[b]);le.push(oe),fe=fe.concat(oe)}for(let Q=0;Q<v;Q++){const ee=Q/v,ne=f*Math.cos(ee*Math.PI/2),ue=m*Math.sin(ee*Math.PI/2)+_;for(let ae=0,M=P.length;ae<M;ae++){const b=D(P[ae],K[ae],ue);ve(b.x,b.y,-ne)}for(let ae=0,M=j.length;ae<M;ae++){const b=j[ae];oe=le[ae];for(let V=0,X=b.length;V<X;V++){const re=D(b[V],oe[V],ue);ve(re.x,re.y,-ne)}}}const _e=m+_;for(let Q=0;Q<R;Q++){const ee=d?D(W[Q],fe[Q],_e):W[Q];C?(F.copy(A.normals[0]).multiplyScalar(ee.x),x.copy(A.binormals[0]).multiplyScalar(ee.y),B.copy(T[0]).add(F).add(x),ve(B.x,B.y,B.z)):ve(ee.x,ee.y,0)}for(let Q=1;Q<=h;Q++)for(let ee=0;ee<R;ee++){const ne=d?D(W[ee],fe[ee],_e):W[ee];C?(F.copy(A.normals[Q]).multiplyScalar(ne.x),x.copy(A.binormals[Q]).multiplyScalar(ne.y),B.copy(T[Q]).add(F).add(x),ve(B.x,B.y,B.z)):ve(ne.x,ne.y,u/h*Q)}for(let Q=v-1;Q>=0;Q--){const ee=Q/v,ne=f*Math.cos(ee*Math.PI/2),ue=m*Math.sin(ee*Math.PI/2)+_;for(let ae=0,M=P.length;ae<M;ae++){const b=D(P[ae],K[ae],ue);ve(b.x,b.y,u+ne)}for(let ae=0,M=j.length;ae<M;ae++){const b=j[ae];oe=le[ae];for(let V=0,X=b.length;V<X;V++){const re=D(b[V],oe[V],ue);C?ve(re.x,re.y+T[h-1].y,T[h-1].x+ne):ve(re.x,re.y,u+ne)}}}U(),Ne();function U(){const Q=i.length/3;if(d){let ee=0,ne=R*ee;for(let ue=0;ue<Z;ue++){const ae=L[ue];pe(ae[2]+ne,ae[1]+ne,ae[0]+ne)}ee=h+v*2,ne=R*ee;for(let ue=0;ue<Z;ue++){const ae=L[ue];pe(ae[0]+ne,ae[1]+ne,ae[2]+ne)}}else{for(let ee=0;ee<Z;ee++){const ne=L[ee];pe(ne[2],ne[1],ne[0])}for(let ee=0;ee<Z;ee++){const ne=L[ee];pe(ne[0]+R*h,ne[1]+R*h,ne[2]+R*h)}}n.addGroup(Q,i.length/3-Q,0)}function Ne(){const Q=i.length/3;let ee=0;Te(P,ee),ee+=P.length;for(let ne=0,ue=j.length;ne<ue;ne++){const ae=j[ne];Te(ae,ee),ee+=ae.length}n.addGroup(Q,i.length/3-Q,1)}function Te(Q,ee){let ne=Q.length;for(;--ne>=0;){const ue=ne;let ae=ne-1;ae<0&&(ae=Q.length-1);for(let M=0,b=h+v*2;M<b;M++){const V=R*M,X=R*(M+1),re=ee+ue+V,ce=ee+ae+V,Le=ee+ae+X,E=ee+ue+X;Ae(re,ce,Le,E)}}}function ve(Q,ee,ne){l.push(Q),l.push(ee),l.push(ne)}function pe(Q,ee,ne){Me(Q),Me(ee),Me(ne);const ue=i.length/3,ae=p.generateTopUV(n,i,ue-3,ue-2,ue-1);Se(ae[0]),Se(ae[1]),Se(ae[2])}function Ae(Q,ee,ne,ue){Me(Q),Me(ee),Me(ue),Me(ee),Me(ne),Me(ue);const ae=i.length/3,M=p.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);Se(M[0]),Se(M[1]),Se(M[3]),Se(M[1]),Se(M[2]),Se(M[3])}function Me(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Se(Q){s.push(Q.x),s.push(Q.y)}}}toJSON(){const e=Ue.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return mg(t,n,e)}}const pg={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new $(s,a),new $(o,l),new $(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],_=e[s*3],v=e[s*3+1],g=e[s*3+2];return Math.abs(o-h)<.01?[new $(a,1-l),new $(c,1-u),new $(d,1-m),new $(_,1-g)]:[new $(o,1-l),new $(h,1-u),new $(f,1-m),new $(v,1-g)]}};function mg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class gg extends Ue{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new tt(i,3)),this.setAttribute("normal",new tt(s,3)),this.setAttribute("uv",new tt(a,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;on.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,g=m.length;v<g;v++){const p=m[v];on.isClockWise(p)===!0&&(m[v]=p.reverse())}const _=on.triangulateShape(f,m);for(let v=0,g=m.length;v<g;v++){const p=m[v];f=f.concat(p)}for(let v=0,g=f.length;v<g;v++){const p=f[v];i.push(p.x,p.y,0),s.push(0,0,1),a.push(p.x,p.y)}for(let v=0,g=_.length;v<g;v++){const p=_[v],T=p[0]+u,C=p[1]+u,A=p[2]+u;n.push(T,C,A),l+=3}}}toJSON(){const e=Ue.prototype.toJSON.call(this),t=this.parameters.shapes;return _g(t,e)}}function _g(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class vg extends it{constructor(e){super(),this.type="ShadowMaterial",this.color=new de(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}vg.prototype.isShadowMaterial=!0;class xg extends ln{constructor(e){super(e),this.type="RawShaderMaterial"}}xg.prototype.isRawShaderMaterial=!0;class $l extends it{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}$l.prototype.isMeshStandardMaterial=!0;class yg extends $l{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=pt(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new de).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}}yg.prototype.isMeshPhysicalMaterial=!0;class bg extends it{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}bg.prototype.isMeshPhongMaterial=!0;class wg extends it{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}wg.prototype.isMeshToonMaterial=!0;class Mg extends it{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Mg.prototype.isMeshNormalMaterial=!0;class Sg extends it{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Sg.prototype.isMeshLambertMaterial=!0;class Eg extends it{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new de(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Eg.prototype.isMeshMatcapMaterial=!0;class Tg extends Wi{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Tg.prototype.isLineDashedMaterial=!0;const Ge={arraySlice:function(r,e,t){return Ge.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<t||m>=n)){u.push(c.times[f]);for(let _=0;_<h;++_)d.push(c.values[f*h+_])}}u.length!==0&&(c.times=Ge.convertArray(u,c.times.constructor),c.values=Ge.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=o.times.length-1;let _;if(s<=o.times[0]){const g=h,p=u-h;_=Ge.arraySlice(o.values,g,p)}else if(s>=o.times[m]){const g=m*u+h,p=g+u-h;_=Ge.arraySlice(o.values,g,p)}else{const g=o.createInterpolant(),p=h,T=u-h;g.evaluate(s),_=Ge.arraySlice(g.resultBuffer,p,T)}l==="quaternion"&&new Ke().fromArray(_).normalize().conjugate().toArray(_);const v=c.times.length;for(let g=0;g<v;++g){const p=g*f+d;if(l==="quaternion")Ke.multiplyQuaternionsFlat(c.values,p,_,0,c.values,p);else{const T=f-d*2;for(let C=0;C<T;++C)c.values[p+C]-=_[C]}}}return r.blendMode=xl,r}};class hn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}hn.prototype.beforeStart_=hn.prototype.copySampleValue_;hn.prototype.afterEnd_=hn.prototype.copySampleValue_;class Ag extends hn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$n,endingEnd:$n}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qn:s=e,o=2*t-n;break;case Lr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qn:a=e,l=2*n-t;break;case Lr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,v=_*m,g=-d*v+2*d*_-d*m,p=(1+d)*v+(-1.5-2*d)*_+(-.5+d)*m+1,T=(-1-f)*v+(1.5+f)*_+.5*m,C=f*v-f*_;for(let A=0;A!==o;++A)s[A]=g*a[h+A]+p*a[c+A]+T*a[l+A]+C*a[u+A];return s}}class Ql extends hn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class Lg extends hn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ht{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ge.convertArray(t,this.TimeBufferType),this.values=Ge.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ge.convertArray(e.times,Array),values:Ge.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ag(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case Jr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return Jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Ge.arraySlice(n,s,a),this.values=Ge.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Ge.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ge.arraySlice(this.times),t=Ge.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Jr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Ge.arraySlice(e,0,a),this.values=Ge.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Ge.arraySlice(this.times,0),t=Ge.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ht.prototype.TimeBufferType=Float32Array;Ht.prototype.ValueBufferType=Float32Array;Ht.prototype.DefaultInterpolation=Ar;class hi extends Ht{}hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Tr;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Kl extends Ht{}Kl.prototype.ValueTypeName="color";class Rr extends Ht{}Rr.prototype.ValueTypeName="number";class Cg extends hn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ke.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Xi extends Ht{InterpolantFactoryMethodLinear(e){return new Cg(this.times,this.values,this.getValueSize(),e)}}Xi.prototype.ValueTypeName="quaternion";Xi.prototype.DefaultInterpolation=Ar;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class ui extends Ht{}ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Tr;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Pr extends Ht{}Pr.prototype.ValueTypeName="vector";class Wo{constructor(e,t=-1,n,i=ra){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Pg(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Ht.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Ge.getKeyframeOrder(l);l=Ge.sortedArray(l,1,h),c=Ge.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Rr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const v=[],g=[];Ge.flattenJSON(f,v,g,m),v.length!==0&&_.push(new u(d,v,g))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const v=[],g=[];for(let p=0;p!==d[m].morphTargets.length;++p){const T=d[m];v.push(T.time),g.push(T.morphTarget===_?1:0)}i.push(new Rr(".morphTargetInfluence["+_+"]",v,g))}l=f.length*(a||1)}else{const f=".bones["+t[u].name+"]";n(Pr,f+".position",d,"pos",i),n(Xi,f+".quaternion",d,"rot",i),n(Pr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rr;case"vector":case"vector2":case"vector3":case"vector4":return Pr;case"color":return Kl;case"quaternion":return Xi;case"bool":case"boolean":return hi;case"string":return ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Pg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rg(r.type);if(r.times===void 0){const t=[],n=[];Ge.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ri={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Dg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Ig=new Dg;class mn{constructor(e){this.manager=e!==void 0?e:Ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const At={};class Ng extends mn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ri.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;if(At[e]!==void 0){At[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(o);let c;if(l){const h=l[1],u=!!l[2];let d=l[3];d=decodeURIComponent(d),u&&(d=atob(d));try{let f;const m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":const _=new Uint8Array(d.length);for(let g=0;g<d.length;g++)_[g]=d.charCodeAt(g);m==="blob"?f=new Blob([_.buffer],{type:h}):f=_.buffer;break;case"document":f=new DOMParser().parseFromString(d,h);break;case"json":f=JSON.parse(d);break;default:f=d;break}setTimeout(function(){t&&t(f),s.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{At[e]=[],At[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(h){const u=this.response,d=At[e];if(delete At[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ri.add(e,u);for(let f=0,m=d.length;f<m;f++){const _=d[f];_.onLoad&&_.onLoad(u)}s.manager.itemEnd(e)}else{for(let f=0,m=d.length;f<m;f++){const _=d[f];_.onError&&_.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(h){const u=At[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onProgress&&m.onProgress(h)}},!1),c.addEventListener("error",function(h){const u=At[e];delete At[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),c.addEventListener("abort",function(h){const u=At[e];delete At[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const h in this.requestHeader)c.setRequestHeader(h,this.requestHeader[h]);c.send(null)}return s.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ec extends mn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ri.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),ri.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Fg extends mn{constructor(e){super(e)}load(e,t,n,i){const s=new kr,a=new ec(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Og extends mn{constructor(e){super(e)}load(e,t,n,i){const s=new ot,a=new ec(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o;const l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=l?sn:Ct,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class bt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new $:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],s=[],a=[],o=new w,l=new ge;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new w),i[f].normalize()}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(pt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(pt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gr extends bt{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new $,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Gr.prototype.isEllipseCurve=!0;class tc extends Gr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}tc.prototype.isArcCurve=!0;function da(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const vr=new w,As=new da,Ls=new da,Cs=new da;class nc extends bt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(vr.subVectors(i[0],i[1]).add(i[0]),c=vr);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(vr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),v<1e-4&&(v=_),As.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,v),Ls.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,v),Cs.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,v)}else this.curveType==="catmullrom"&&(As.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ls.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Cs.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(As.calc(l),Ls.calc(l),Cs.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}nc.prototype.isCatmullRomCurve3=!0;function Xo(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function Bg(r,e){const t=1-r;return t*t*e}function zg(r,e){return 2*(1-r)*r*e}function kg(r,e){return r*r*e}function Pi(r,e,t,n){return Bg(r,e)+zg(r,t)+kg(r,n)}function Hg(r,e){const t=1-r;return t*t*t*e}function Ug(r,e){const t=1-r;return 3*t*t*r*e}function Vg(r,e){return 3*(1-r)*r*r*e}function Gg(r,e){return r*r*r*e}function Di(r,e,t,n,i){return Hg(r,e)+Ug(r,t)+Vg(r,n)+Gg(r,i)}class fa extends bt{constructor(e=new $,t=new $,n=new $,i=new $){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Di(e,i.x,s.x,a.x,o.x),Di(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}fa.prototype.isCubicBezierCurve=!0;class ic extends bt{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Di(e,i.x,s.x,a.x,o.x),Di(e,i.y,s.y,a.y,o.y),Di(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ic.prototype.isCubicBezierCurve3=!0;class Wr extends bt{constructor(e=new $,t=new $){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Wr.prototype.isLineCurve=!0;class Wg extends bt{constructor(e=new w,t=new w){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pa extends bt{constructor(e=new $,t=new $,n=new $){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Pi(e,i.x,s.x,a.x),Pi(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}pa.prototype.isQuadraticBezierCurve=!0;class rc extends bt{constructor(e=new w,t=new w,n=new w){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Pi(e,i.x,s.x,a.x),Pi(e,i.y,s.y,a.y),Pi(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}rc.prototype.isQuadraticBezierCurve3=!0;class ma extends bt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new $){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Xo(o,l.x,c.x,h.x,u.x),Xo(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new $().fromArray(i))}return this}}ma.prototype.isSplineCurve=!0;var Xg=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:nc,CubicBezierCurve:fa,CubicBezierCurve3:ic,EllipseCurve:Gr,LineCurve:Wr,LineCurve3:Wg,QuadraticBezierCurve:pa,QuadraticBezierCurve3:rc,SplineCurve:ma});class qg extends bt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Wr(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const s=n[i]-t,a=this.curves[i],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Xg[i.type]().fromJSON(i))}return this}}class Ws extends qg{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Wr(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new pa(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new fa(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ma(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Gr(e,t,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ga extends Ws{constructor(e){super(e),this.uuid=zt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ws().fromJSON(i))}return this}}class kt extends De{constructor(e,t=1){super(),this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}kt.prototype.isLight=!0;class Yg extends kt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(De.DefaultUp),this.updateMatrix(),this.groundColor=new de(t)}copy(e){return kt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Yg.prototype.isHemisphereLight=!0;const qo=new ge,Yo=new w,jo=new w;class _a{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yo),jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jo),t.updateMatrixWorld(),qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sc extends _a{constructor(){super(new mt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=ks*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}sc.prototype.isSpotLightShadow=!0;class jg extends kt{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(De.DefaultUp),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new sc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}jg.prototype.isSpotLight=!0;const Zo=new ge,bi=new w,Rs=new w;class ac extends _a{constructor(){super(new mt(90,1,.5,500)),this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bi.setFromMatrixPosition(e.matrixWorld),n.position.copy(bi),Rs.copy(n.position),Rs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rs),n.updateMatrixWorld(),i.makeTranslation(-bi.x,-bi.y,-bi.z),Zo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo)}}ac.prototype.isPointLightShadow=!0;class oc extends kt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ac}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}oc.prototype.isPointLight=!0;class lc extends aa{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}lc.prototype.isOrthographicCamera=!0;class cc extends _a{constructor(){super(new lc(-5,5,5,-5,.5,500))}}cc.prototype.isDirectionalLightShadow=!0;class Zg extends kt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(De.DefaultUp),this.updateMatrix(),this.target=new De,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Zg.prototype.isDirectionalLight=!0;class Jg extends kt{constructor(e,t){super(e,t),this.type="AmbientLight"}}Jg.prototype.isAmbientLight=!0;class $g extends kt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}$g.prototype.isRectAreaLight=!0;class hc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}hc.prototype.isSphericalHarmonics3=!0;class va extends kt{constructor(e=new hc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}va.prototype.isLightProbe=!0;class Qg{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class Kg extends Ue{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Kg.prototype.isInstancedBufferGeometry=!0;class e_ extends et{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}e_.prototype.isInstancedBufferAttribute=!0;class t_ extends mn{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ri.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ri.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}t_.prototype.isImageBitmapLoader=!0;let xr;const uc={getContext:function(){return xr===void 0&&(xr=new(window.AudioContext||window.webkitAudioContext)),xr},setContext:function(r){xr=r}};class dc extends mn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Ng(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);uc.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class n_ extends va{constructor(e,t,n=1){super(void 0,n);const i=new de().set(e),s=new de().set(t),a=new w(i.r,i.g,i.b),o=new w(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}n_.prototype.isHemisphereLightProbe=!0;class i_ extends va{constructor(e,t=1){super(void 0,t);const n=new de().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}i_.prototype.isAmbientLightProbe=!0;class r_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jo(){return(typeof performance=="undefined"?Date:performance).now()}const Mn=new w,$o=new Ke,s_=new w,Sn=new w;class a_ extends De{constructor(){super(),this.type="AudioListener",this.context=uc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new r_}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Mn,$o,s_),Sn.set(0,0,-1).applyQuaternion($o),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Mn.x,i),t.positionY.linearRampToValueAtTime(Mn.y,i),t.positionZ.linearRampToValueAtTime(Mn.z,i),t.forwardX.linearRampToValueAtTime(Sn.x,i),t.forwardY.linearRampToValueAtTime(Sn.y,i),t.forwardZ.linearRampToValueAtTime(Sn.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Mn.x,Mn.y,Mn.z),t.setOrientation(Sn.x,Sn.y,Sn.z,n.x,n.y,n.z)}}class fc extends De{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class o_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ke.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Ke.multiplyQuaternionsFlat(e,a,e,t,e,n),Ke.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const xa="\\[\\]\\.:\\/",l_=new RegExp("["+xa+"]","g"),ya="[^"+xa+"]",c_="[^"+xa.replace("\\.","")+"]",h_=/((?:WC+[\/:])*)/.source.replace("WC",ya),u_=/(WCOD+)?/.source.replace("WCOD",c_),d_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ya),f_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ya),p_=new RegExp("^"+h_+u_+d_+f_+"$"),m_=["material","materials","bones"];class g_{constructor(e,t,n){const i=n||Oe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Oe{constructor(e,t,n){this.path=t,this.parsedPath=n||Oe.parseTrackName(t),this.node=Oe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Oe.Composite(e,t,n):new Oe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l_,"")}static parseTrackName(e){const t=p_.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);m_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Oe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Oe.Composite=g_;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class __{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:$n,endingEnd:$n};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=eu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case xl:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ra:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===tu;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Kh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Qn,i.endingEnd=Qn):(e?i.endingStart=this.zeroSlopeAtStart?Qn:$n:i.endingStart=Lr,t?i.endingEnd=this.zeroSlopeAtEnd?Qn:$n:i.endingEnd=Lr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class v_ extends pn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new o_(Oe.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ql(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Wo.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ra),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new __(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Wo.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}v_.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class x_ extends An{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}x_.prototype.isInstancedInterleavedBuffer=!0;class y_{constructor(e,t,n=0,i=1/0){this.ray=new Tn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return Xs(e,this,n,t),n.sort(Qo),n}intersectObjects(e,t=!1,n=[]){for(let i=0,s=e.length;i<s;i++)Xs(e[i],this,n,t);return n.sort(Qo),n}}function Qo(r,e){return r.distance-e.distance}function Xs(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Xs(i[s],e,t,!0)}}class Ko{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class b_ extends De{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}b_.prototype.isImmediateRenderObject=!0;const nn=new w,yr=new ge,Ps=new ge;class w_ extends ua{constructor(e){const t=pc(e),n=new Ue,i=[],s=[],a=new de(0,0,1),o=new de(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new tt(i,3)),n.setAttribute("color",new tt(s,3));const l=new Wi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ps.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(yr.multiplyMatrices(Ps,o.matrixWorld),nn.setFromMatrixPosition(yr),i.setXYZ(a,nn.x,nn.y,nn.z),yr.multiplyMatrices(Ps,o.parent.matrixWorld),nn.setFromMatrixPosition(yr),i.setXYZ(a+1,nn.x,nn.y,nn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function pc(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,pc(r.children[t]));return e}class mc extends ua{constructor(e=10,t=10,n=4473924,i=8947848){n=new de(n),i=new de(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const _=d===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new Ue;h.setAttribute("position",new tt(l,3)),h.setAttribute("color",new tt(c,3));const u=new Wi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const M_=new Float32Array(1);new Int32Array(M_.buffer);const S_=new zr({side:Qe,depthWrite:!1,depthTest:!1});new yt(new sa,S_);bt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(bt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};Ws.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};mc.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};w_.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};mn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Qg.extractUrlBase(r)};mn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};wt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};wt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};wt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};wt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};wt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};oi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Hr.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};at.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};at.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};at.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};at.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};at.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};at.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};ge.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};ge.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};ge.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)};ge.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};ge.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ge.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ge.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ge.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ge.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};ge.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ge.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ge.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ge.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ge.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ge.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ge.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ge.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ge.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};ge.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Ft.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Ke.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Ke.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Tn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Tn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Tn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Ze.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Ze.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};Ze.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};Ze.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};Ze.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};Ze.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Ze.getBarycoord(r,e,t,n,i)};Ze.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Ze.getNormal(r,e,t,n)};ga.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};ga.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Vr(this,r)};ga.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new gg(this,r)};$.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};$.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};$.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};w.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};w.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};w.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};w.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};w.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};w.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Be.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Be.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};De.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};De.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};De.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};De.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};De.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(De.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});yt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(yt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),nu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Xl.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};mt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(kt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(et.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Cr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Cr)}}});et.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Cr:Oi),this};et.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},et.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ue.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Ue.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new et(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};Ue.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};Ue.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ue.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ue.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Ue.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ue.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});An.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Cr:Oi),this};An.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Vr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Vr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Vr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};ca.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(it.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new de}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===ml}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}}});Object.defineProperties(ln.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});ke.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};ke.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};ke.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};ke.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};ke.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};ke.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};ke.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};ke.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};ke.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};ke.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};ke.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};ke.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};ke.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};ke.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};ke.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};ke.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};ke.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};ke.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};ke.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};ke.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};ke.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};ke.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};ke.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};ke.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};ke.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(ke.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?yl:Gi}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Hl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(En.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});fc.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new dc().load(r,function(n){e.setBuffer(n)}),this};oa.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};oa.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};ai.crossOrigin=void 0;ai.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Og;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};ai.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Fg;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};ai.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ai.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);const el={type:"change"},Ds={type:"start"},Is={type:"end"};class E_ extends pn{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cn.ROTATE,MIDDLE:Cn.DOLLY,RIGHT:Cn.PAN},this.touches={ONE:Rn.ROTATE,TWO:Rn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.listenToKeyEvents=function(E){E.addEventListener("keydown",V),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(el),n.update(),s=i.NONE},this.update=function(){const E=new w,S=new Ke().setFromUnitVectors(e.up,new w(0,1,0)),Y=S.clone().invert(),J=new w,he=new Ke,q=2*Math.PI;return function(){const Re=n.object.position;E.copy(Re).sub(n.target),E.applyQuaternion(S),o.setFromVector3(E),n.autoRotate&&s===i.NONE&&F(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ie=n.minAzimuthAngle,rt=n.maxAzimuthAngle;return isFinite(Ie)&&isFinite(rt)&&(Ie<-Math.PI?Ie+=q:Ie>Math.PI&&(Ie-=q),rt<-Math.PI?rt+=q:rt>Math.PI&&(rt-=q),Ie<=rt?o.theta=Math.max(Ie,Math.min(rt,o.theta)):o.theta=o.theta>(Ie+rt)/2?Math.max(Ie,o.theta):Math.min(rt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),E.setFromSpherical(o),E.applyQuaternion(Y),Re.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||J.distanceToSquared(n.object.position)>a||8*(1-he.dot(n.object.quaternion))>a?(n.dispatchEvent(el),J.copy(n.object.position),he.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Le),n.domElement.removeEventListener("pointerdown",Q),n.domElement.removeEventListener("wheel",b),n.domElement.removeEventListener("touchstart",X),n.domElement.removeEventListener("touchend",ce),n.domElement.removeEventListener("touchmove",re),n.domElement.ownerDocument.removeEventListener("pointermove",ee),n.domElement.ownerDocument.removeEventListener("pointerup",ne),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",V)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Ko,l=new Ko;let c=1;const h=new w;let u=!1;const d=new $,f=new $,m=new $,_=new $,v=new $,g=new $,p=new $,T=new $,C=new $;function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function F(E){l.theta-=E}function B(E){l.phi-=E}const z=function(){const E=new w;return function(Y,J){E.setFromMatrixColumn(J,0),E.multiplyScalar(-Y),h.add(E)}}(),W=function(){const E=new w;return function(Y,J){n.screenSpacePanning===!0?E.setFromMatrixColumn(J,1):(E.setFromMatrixColumn(J,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(Y),h.add(E)}}(),j=function(){const E=new w;return function(Y,J){const he=n.domElement;if(n.object.isPerspectiveCamera){const q=n.object.position;E.copy(q).sub(n.target);let me=E.length();me*=Math.tan(n.object.fov/2*Math.PI/180),z(2*Y*me/he.clientHeight,n.object.matrix),W(2*J*me/he.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(Y*(n.object.right-n.object.left)/n.object.zoom/he.clientWidth,n.object.matrix),W(J*(n.object.top-n.object.bottom)/n.object.zoom/he.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(E){n.object.isPerspectiveCamera?c/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function L(E){n.object.isPerspectiveCamera?c*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(E){d.set(E.clientX,E.clientY)}function D(E){p.set(E.clientX,E.clientY)}function R(E){_.set(E.clientX,E.clientY)}function Z(E){f.set(E.clientX,E.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const S=n.domElement;F(2*Math.PI*m.x/S.clientHeight),B(2*Math.PI*m.y/S.clientHeight),d.copy(f),n.update()}function te(E){T.set(E.clientX,E.clientY),C.subVectors(T,p),C.y>0?H(x()):C.y<0&&L(x()),p.copy(T),n.update()}function K(E){v.set(E.clientX,E.clientY),g.subVectors(v,_).multiplyScalar(n.panSpeed),j(g.x,g.y),_.copy(v),n.update()}function le(E){E.deltaY<0?L(x()):E.deltaY>0&&H(x()),n.update()}function oe(E){let S=!1;switch(E.code){case n.keys.UP:j(0,n.keyPanSpeed),S=!0;break;case n.keys.BOTTOM:j(0,-n.keyPanSpeed),S=!0;break;case n.keys.LEFT:j(n.keyPanSpeed,0),S=!0;break;case n.keys.RIGHT:j(-n.keyPanSpeed,0),S=!0;break}S&&(E.preventDefault(),n.update())}function fe(E){if(E.touches.length==1)d.set(E.touches[0].pageX,E.touches[0].pageY);else{const S=.5*(E.touches[0].pageX+E.touches[1].pageX),Y=.5*(E.touches[0].pageY+E.touches[1].pageY);d.set(S,Y)}}function _e(E){if(E.touches.length==1)_.set(E.touches[0].pageX,E.touches[0].pageY);else{const S=.5*(E.touches[0].pageX+E.touches[1].pageX),Y=.5*(E.touches[0].pageY+E.touches[1].pageY);_.set(S,Y)}}function U(E){const S=E.touches[0].pageX-E.touches[1].pageX,Y=E.touches[0].pageY-E.touches[1].pageY,J=Math.sqrt(S*S+Y*Y);p.set(0,J)}function Ne(E){n.enableZoom&&U(E),n.enablePan&&_e(E)}function Te(E){n.enableZoom&&U(E),n.enableRotate&&fe(E)}function ve(E){if(E.touches.length==1)f.set(E.touches[0].pageX,E.touches[0].pageY);else{const Y=.5*(E.touches[0].pageX+E.touches[1].pageX),J=.5*(E.touches[0].pageY+E.touches[1].pageY);f.set(Y,J)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const S=n.domElement;F(2*Math.PI*m.x/S.clientHeight),B(2*Math.PI*m.y/S.clientHeight),d.copy(f)}function pe(E){if(E.touches.length==1)v.set(E.touches[0].pageX,E.touches[0].pageY);else{const S=.5*(E.touches[0].pageX+E.touches[1].pageX),Y=.5*(E.touches[0].pageY+E.touches[1].pageY);v.set(S,Y)}g.subVectors(v,_).multiplyScalar(n.panSpeed),j(g.x,g.y),_.copy(v)}function Ae(E){const S=E.touches[0].pageX-E.touches[1].pageX,Y=E.touches[0].pageY-E.touches[1].pageY,J=Math.sqrt(S*S+Y*Y);T.set(0,J),C.set(0,Math.pow(T.y/p.y,n.zoomSpeed)),H(C.y),p.copy(T)}function Me(E){n.enableZoom&&Ae(E),n.enablePan&&pe(E)}function Se(E){n.enableZoom&&Ae(E),n.enableRotate&&ve(E)}function Q(E){if(n.enabled!==!1)switch(E.pointerType){case"mouse":case"pen":ue(E);break}}function ee(E){if(n.enabled!==!1)switch(E.pointerType){case"mouse":case"pen":ae(E);break}}function ne(E){switch(E.pointerType){case"mouse":case"pen":M();break}}function ue(E){E.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus();let S;switch(E.button){case 0:S=n.mouseButtons.LEFT;break;case 1:S=n.mouseButtons.MIDDLE;break;case 2:S=n.mouseButtons.RIGHT;break;default:S=-1}switch(S){case Cn.DOLLY:if(n.enableZoom===!1)return;D(E),s=i.DOLLY;break;case Cn.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;R(E),s=i.PAN}else{if(n.enableRotate===!1)return;P(E),s=i.ROTATE}break;case Cn.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;P(E),s=i.ROTATE}else{if(n.enablePan===!1)return;R(E),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",ee),n.domElement.ownerDocument.addEventListener("pointerup",ne),n.dispatchEvent(Ds))}function ae(E){if(n.enabled!==!1)switch(E.preventDefault(),s){case i.ROTATE:if(n.enableRotate===!1)return;Z(E);break;case i.DOLLY:if(n.enableZoom===!1)return;te(E);break;case i.PAN:if(n.enablePan===!1)return;K(E);break}}function M(E){n.domElement.ownerDocument.removeEventListener("pointermove",ee),n.domElement.ownerDocument.removeEventListener("pointerup",ne),n.enabled!==!1&&(n.dispatchEvent(Is),s=i.NONE)}function b(E){n.enabled===!1||n.enableZoom===!1||s!==i.NONE&&s!==i.ROTATE||(E.preventDefault(),n.dispatchEvent(Ds),le(E),n.dispatchEvent(Is))}function V(E){n.enabled===!1||n.enablePan===!1||oe(E)}function X(E){if(n.enabled!==!1){switch(E.preventDefault(),E.touches.length){case 1:switch(n.touches.ONE){case Rn.ROTATE:if(n.enableRotate===!1)return;fe(E),s=i.TOUCH_ROTATE;break;case Rn.PAN:if(n.enablePan===!1)return;_e(E),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Rn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ne(E),s=i.TOUCH_DOLLY_PAN;break;case Rn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(E),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ds)}}function re(E){if(n.enabled!==!1)switch(E.preventDefault(),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;pe(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(E),n.update();break;default:s=i.NONE}}function ce(E){n.enabled!==!1&&(n.dispatchEvent(Is),s=i.NONE)}function Le(E){n.enabled!==!1&&E.preventDefault()}n.domElement.addEventListener("contextmenu",Le),n.domElement.addEventListener("pointerdown",Q),n.domElement.addEventListener("wheel",b,{passive:!1}),n.domElement.addEventListener("touchstart",X,{passive:!1}),n.domElement.addEventListener("touchend",ce),n.domElement.addEventListener("touchmove",re,{passive:!1}),this.update()}}function T_(r){if(!!r&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function ti(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),a=r.a,o=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=r.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+a+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+a+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var tl=Array.prototype.forEach,wi=Array.prototype.slice,G={BREAK:{},extend:function(e){return this.each(wi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(wi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=wi.call(arguments);return function(){for(var t=wi.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(tl&&e.forEach&&e.forEach===tl)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var a in e)if(t.call(n,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,a=arguments;function o(){i=null,n||e.apply(s,a)}var l=n||!i;clearTimeout(i),i=setTimeout(o,t),l&&e.apply(s,a)}},toArray:function(e){return e.toArray?e.toArray():wi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},A_=[{litmus:G.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ti},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ti},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ti},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ti}}},{litmus:G.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:G.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:G.isObject,conversions:{RGBA_OBJ:{read:function(e){return G.isNumber(e.r)&&G.isNumber(e.g)&&G.isNumber(e.b)&&G.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return G.isNumber(e.r)&&G.isNumber(e.g)&&G.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return G.isNumber(e.h)&&G.isNumber(e.s)&&G.isNumber(e.v)&&G.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return G.isNumber(e.h)&&G.isNumber(e.s)&&G.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Mi=void 0,br=void 0,qs=function(){br=!1;var e=arguments.length>1?G.toArray(arguments):arguments[0];return G.each(A_,function(t){if(t.litmus(e))return G.each(t.conversions,function(n,i){if(Mi=n.read(e),br===!1&&Mi!==!1)return br=Mi,Mi.conversionName=i,Mi.conversion=n,G.BREAK}),G.BREAK}),br},nl=void 0,Dr={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),a=n*(1-t),o=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,a],[o,n,a],[a,n,l],[a,o,n],[l,a,n],[n,a,o]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),a=s-i,o=void 0,l=void 0;if(s!==0)l=a/s;else return{h:NaN,s:0,v:0};return e===s?o=(t-n)/a:t===s?o=2+(n-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(nl=t*8)|e&~(255<<nl)}},L_=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Rt=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Pt=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),un=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var a=i.get;return a===void 0?void 0:a.call(n)}},gn=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},_n=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},nt=function(){function r(){if(Rt(this,r),this.__state=qs.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Pt(r,[{key:"toString",value:function(){return ti(this)}},{key:"toHexString",value:function(){return ti(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function ba(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(nt.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(nt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function wa(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(nt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(nt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}nt.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=Dr.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")G.extend(r.__state,Dr.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};nt.recalculateHSV=function(r){var e=Dr.rgb_to_hsv(r.r,r.g,r.b);G.extend(r.__state,{s:e.s,v:e.v}),G.isNaN(e.h)?G.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};nt.COMPONENTS=["r","g","b","h","s","v","hex","a"];ba(nt.prototype,"r",2);ba(nt.prototype,"g",1);ba(nt.prototype,"b",0);wa(nt.prototype,"h");wa(nt.prototype,"s");wa(nt.prototype,"v");Object.defineProperty(nt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(nt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Dr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Ln=function(){function r(e,t){Rt(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Pt(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),C_={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},gc={};G.each(C_,function(r,e){G.each(r,function(t){gc[t]=e})});var R_=/(\d+(\.\d+)?)px/;function Nt(r){if(r==="0"||G.isUndefined(r))return 0;var e=r.match(R_);return G.isNull(e)?0:parseFloat(e[1])}var N={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;G.isUndefined(s)&&(s=!0),G.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},a=gc[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=o.initKeyboardEvent||o.initKeyEvent;G.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}G.defaults(o,i),e.dispatchEvent(o)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),N},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),N},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return N},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return N},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Nt(t["border-left-width"])+Nt(t["border-right-width"])+Nt(t["padding-left"])+Nt(t["padding-right"])+Nt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Nt(t["border-top-width"])+Nt(t["border-bottom-width"])+Nt(t["padding-top"])+Nt(t["padding-bottom"])+Nt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},_c=function(r){gn(e,r);function e(t,n){Rt(this,e);var i=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function a(){s.setValue(!s.__prev)}return N.bind(i.__checkbox,"change",a,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Pt(e,[{key:"setValue",value:function(n){var i=un(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),un(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ln),P_=function(r){gn(e,r);function e(t,n,i){Rt(this,e);var s=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i,o=s;if(s.__select=document.createElement("select"),G.isArray(a)){var l={};G.each(a,function(c){l[c]=c}),a=l}return G.each(a,function(c,h){var u=document.createElement("option");u.innerHTML=h,u.setAttribute("value",c),o.__select.appendChild(u)}),s.updateDisplay(),N.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return Pt(e,[{key:"setValue",value:function(n){var i=un(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return N.isActive(this.__select)?this:(this.__select.value=this.getValue(),un(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Ln),D_=function(r){gn(e,r);function e(t,n){Rt(this,e);var i=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function a(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),N.bind(i.__input,"keyup",a),N.bind(i.__input,"change",a),N.bind(i.__input,"blur",o),N.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Pt(e,[{key:"updateDisplay",value:function(){return N.isActive(this.__input)||(this.__input.value=this.getValue()),un(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ln);function il(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var vc=function(r){gn(e,r);function e(t,n,i){Rt(this,e);var s=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i||{};return s.__min=a.min,s.__max=a.max,s.__step=a.step,G.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=il(s.__impliedStep),s}return Pt(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),un(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=il(n),this}}]),e}(Ln);function I_(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Ir=function(r){gn(e,r);function e(t,n,i){Rt(this,e);var s=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var a=s,o=void 0;function l(){var m=parseFloat(a.__input.value);G.isNaN(m)||a.setValue(m)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function h(){c()}function u(m){var _=o-m.clientY;a.setValue(a.getValue()+_*a.__impliedStep),o=m.clientY}function d(){N.unbind(window,"mousemove",u),N.unbind(window,"mouseup",d),c()}function f(m){N.bind(window,"mousemove",u),N.bind(window,"mouseup",d),o=m.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),N.bind(s.__input,"change",l),N.bind(s.__input,"blur",h),N.bind(s.__input,"mousedown",f),N.bind(s.__input,"keydown",function(m){m.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Pt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():I_(this.getValue(),this.__precision),un(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(vc);function rl(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var Ys=function(r){gn(e,r);function e(t,n,i,s,a){Rt(this,e);var o=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),N.bind(o.__background,"mousedown",c),N.bind(o.__background,"touchstart",d),N.addClass(o.__background,"slider"),N.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),N.bind(window,"mousemove",h),N.bind(window,"mouseup",u),h(_)}function h(_){_.preventDefault();var v=l.__background.getBoundingClientRect();return l.setValue(rl(_.clientX,v.left,v.right,l.__min,l.__max)),!1}function u(){N.unbind(window,"mousemove",h),N.unbind(window,"mouseup",u),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(_){_.touches.length===1&&(N.bind(window,"touchmove",f),N.bind(window,"touchend",m),f(_))}function f(_){var v=_.touches[0].clientX,g=l.__background.getBoundingClientRect();l.setValue(rl(v,g.left,g.right,l.__min,l.__max))}function m(){N.unbind(window,"touchmove",f),N.unbind(window,"touchend",m),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Pt(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",un(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(vc),xc=function(r){gn(e,r);function e(t,n,i){Rt(this,e);var s=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,N.bind(s.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),N.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Pt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Ln),js=function(r){gn(e,r);function e(t,n){Rt(this,e);var i=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new nt(i.getValue()),i.__temp=new nt(0);var s=i;i.domElement=document.createElement("div"),N.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",N.bind(i.__input,"keydown",function(_){_.keyCode===13&&u.call(this)}),N.bind(i.__input,"blur",u),N.bind(i.__selector,"mousedown",function(){N.addClass(this,"drag").bind(window,"mouseup",function(){N.removeClass(s.__selector,"drag")})}),N.bind(i.__selector,"touchstart",function(){N.addClass(this,"drag").bind(window,"touchend",function(){N.removeClass(s.__selector,"drag")})});var a=document.createElement("div");G.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),G.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),G.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),G.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),G.extend(a.style,{width:"100%",height:"100%",background:"none"}),sl(a,"top","rgba(0,0,0,0)","#000"),G.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),F_(i.__hue_field),G.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),N.bind(i.__saturation_field,"mousedown",o),N.bind(i.__saturation_field,"touchstart",o),N.bind(i.__field_knob,"mousedown",o),N.bind(i.__field_knob,"touchstart",o),N.bind(i.__hue_field,"mousedown",l),N.bind(i.__hue_field,"touchstart",l);function o(_){f(_),N.bind(window,"mousemove",f),N.bind(window,"touchmove",f),N.bind(window,"mouseup",c),N.bind(window,"touchend",c)}function l(_){m(_),N.bind(window,"mousemove",m),N.bind(window,"touchmove",m),N.bind(window,"mouseup",h),N.bind(window,"touchend",h)}function c(){N.unbind(window,"mousemove",f),N.unbind(window,"touchmove",f),N.unbind(window,"mouseup",c),N.unbind(window,"touchend",c),d()}function h(){N.unbind(window,"mousemove",m),N.unbind(window,"touchmove",m),N.unbind(window,"mouseup",h),N.unbind(window,"touchend",h),d()}function u(){var _=qs(this.value);_!==!1?(s.__color.__state=_,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(a),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function f(_){_.type.indexOf("touch")===-1&&_.preventDefault();var v=s.__saturation_field.getBoundingClientRect(),g=_.touches&&_.touches[0]||_,p=g.clientX,T=g.clientY,C=(p-v.left)/(v.right-v.left),A=1-(T-v.top)/(v.bottom-v.top);return A>1?A=1:A<0&&(A=0),C>1?C=1:C<0&&(C=0),s.__color.v=A,s.__color.s=C,s.setValue(s.__color.toOriginal()),!1}function m(_){_.type.indexOf("touch")===-1&&_.preventDefault();var v=s.__hue_field.getBoundingClientRect(),g=_.touches&&_.touches[0]||_,p=g.clientY,T=1-(p-v.top)/(v.bottom-v.top);return T>1?T=1:T<0&&(T=0),s.__color.h=T*360,s.setValue(s.__color.toOriginal()),!1}return i}return Pt(e,[{key:"updateDisplay",value:function(){var n=qs(this.getValue());if(n!==!1){var i=!1;G.each(nt.COMPONENTS,function(o){if(!G.isUndefined(n[o])&&!G.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return i=!0,{}},this),i&&G.extend(this.__color.__state,n)}G.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,a=255-s;G.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,sl(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),G.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(Ln),N_=["-moz-","-o-","-webkit-","-ms-",""];function sl(r,e,t,n){r.style.background="",G.each(N_,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function F_(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var O_={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},B_=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,z_=function(e,t){var n=e[t];return G.isArray(arguments[2])||G.isObject(arguments[2])?new P_(e,t,arguments[2]):G.isNumber(n)?G.isNumber(arguments[2])&&G.isNumber(arguments[3])?G.isNumber(arguments[4])?new Ys(e,t,arguments[2],arguments[3],arguments[4]):new Ys(e,t,arguments[2],arguments[3]):G.isNumber(arguments[4])?new Ir(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Ir(e,t,{min:arguments[2],max:arguments[3]}):G.isString(n)?new D_(e,t):G.isFunction(n)?new xc(e,t,""):G.isBoolean(n)?new _c(e,t):null};function k_(r){setTimeout(r,1e3/60)}var H_=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||k_,U_=function(){function r(){Rt(this,r),this.backgroundElement=document.createElement("div"),G.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),N.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),G.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;N.bind(this.backgroundElement,"click",function(){e.hide()})}return Pt(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),G.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",N.unbind(t.domElement,"webkitTransitionEnd",i),N.unbind(t.domElement,"transitionend",i),N.unbind(t.domElement,"oTransitionEnd",i)};N.bind(this.domElement,"webkitTransitionEnd",n),N.bind(this.domElement,"transitionend",n),N.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-N.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-N.getHeight(this.domElement)/2+"px"}}]),r}(),V_=T_(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);O_.inject(V_);var al="dg",ol=72,ll=20,Ui="Default",Ti=function(){try{return!!window.localStorage}catch{return!1}}(),Ii=void 0,cl=!0,Zn=void 0,Ns=!1,yc=[],Ve=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),N.addClass(this.domElement,al),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=G.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=G.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),G.isUndefined(n.load)?n.load={preset:Ui}:n.preset&&(n.load.preset=n.preset),G.isUndefined(n.parent)&&n.hideable&&yc.push(this),n.resizable=G.isUndefined(n.parent)&&n.resizable,n.autoPlace&&G.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Ti&&localStorage.getItem(Jn(this,"isLocal"))==="true",s=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,q_(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,$s(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?N.addClass(t.__ul,r.CLASS_CLOSED):N.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){Ti&&(i=d,d?N.bind(window,"unload",s):N.unbind(window,"unload",s),localStorage.setItem(Jn(t,"isLocal"),d))}}}),G.isUndefined(n.parent)){if(this.closed=n.closed||!1,N.addClass(this.domElement,r.CLASS_MAIN),N.makeSelectable(this.domElement,!1),Ti&&i){t.useLocalStorage=!0;var o=localStorage.getItem(Jn(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,N.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(N.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(N.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),N.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);N.addClass(l,"controller-name"),a=Ma(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};N.addClass(this.__ul,r.CLASS_CLOSED),N.addClass(a,"title"),N.bind(a,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(G.isUndefined(n.parent)&&(cl&&(Zn=document.createElement("div"),N.addClass(Zn,al),N.addClass(Zn,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Zn),cl=!1),Zn.appendChild(this.domElement),N.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||$s(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},N.bind(window,"resize",this.__resizeHandler),N.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),N.bind(this.__ul,"transitionend",this.__resizeHandler),N.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&X_(this),s=function(){Ti&&localStorage.getItem(Jn(t,"isLocal"))==="true"&&localStorage.setItem(Jn(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function h(){var u=t.getRoot();u.width+=1,G.defer(function(){u.width-=1})}n.parent||h()};Ve.toggleHide=function(){Ns=!Ns,G.each(yc,function(r){r.domElement.style.display=Ns?"none":""})};Ve.CLASS_AUTO_PLACE="a";Ve.CLASS_AUTO_PLACE_CONTAINER="ac";Ve.CLASS_MAIN="main";Ve.CLASS_CONTROLLER_ROW="cr";Ve.CLASS_TOO_TALL="taller-than-window";Ve.CLASS_CLOSED="closed";Ve.CLASS_CLOSE_BUTTON="close-button";Ve.CLASS_CLOSE_TOP="close-top";Ve.CLASS_CLOSE_BOTTOM="close-bottom";Ve.CLASS_DRAG="drag";Ve.DEFAULT_WIDTH=245;Ve.TEXT_CLOSED="Close Controls";Ve.TEXT_OPEN="Open Controls";Ve._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===ol||r.keyCode===ol)&&Ve.toggleHide()};N.bind(window,"keydown",Ve._keydownHandler,!1);G.extend(Ve.prototype,{add:function(e,t){return Ni(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Ni(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;G.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Zn.removeChild(this.domElement);var e=this;G.each(this.__folders,function(t){e.removeFolder(t)}),N.unbind(window,"keydown",Ve._keydownHandler,!1),hl(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Ve(t);this.__folders[e]=n;var i=Ma(this,n.domElement);return N.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],hl(e);var t=this;G.each(e.__folders,function(n){e.removeFolder(n)}),G.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=N.getOffset(e.__ul).top,n=0;G.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=N.getHeight(i))}),window.innerHeight-t-ll<n?(N.addClass(e.domElement,Ve.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-ll+"px"):(N.removeClass(e.domElement,Ve.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&G.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:G.debounce(function(){this.onResize()},50),remember:function(){if(G.isUndefined(Ii)&&(Ii=new U_,Ii.domElement.innerHTML=B_),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;G.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&W_(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&$s(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=wr(this)),e.folders={},G.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=wr(this),Zs(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ui]=wr(this,!0)),this.load.remembered[e]=wr(this),this.preset=e,Js(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){G.each(this.__controllers,function(t){this.getRoot().load.remembered?bc(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),G.each(this.__folders,function(t){t.revert(t)}),e||Zs(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&wc(this.__listening)},updateDisplay:function(){G.each(this.__controllers,function(e){e.updateDisplay()}),G.each(this.__folders,function(e){e.updateDisplay()})}});function Ma(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function hl(r){N.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&N.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function Zs(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function G_(r,e,t){if(t.__li=e,t.__gui=r,G.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),Ni(r,t.object,t.property,{before:o,factoryArgs:[G.toArray(arguments)]})}if(G.isArray(a)||G.isObject(a)){var l=t.__li.nextElementSibling;return t.remove(),Ni(r,t.object,t.property,{before:l,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Ys){var n=new Ir(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});G.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var a=t[s],o=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),a.apply(t,l)}}),N.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Ir){var i=function(a){if(G.isNumber(t.__min)&&G.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Ni(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return a};t.min=G.compose(i,t.min),t.max=G.compose(i,t.max)}else t instanceof _c?(N.bind(e,"click",function(){N.fakeEvent(t.__checkbox,"click")}),N.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof xc?(N.bind(e,"click",function(){N.fakeEvent(t.__button,"click")}),N.bind(e,"mouseover",function(){N.addClass(t.__button,"hover")}),N.bind(e,"mouseout",function(){N.removeClass(t.__button,"hover")})):t instanceof js&&(N.addClass(e,"color"),t.updateDisplay=G.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=G.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&Zs(r.getRoot(),!0),s},t.setValue)}function bc(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,a=void 0;if(s[r.preset])a=s[r.preset];else if(s[Ui])a=s[Ui];else return;if(a[n]&&a[n][e.property]!==void 0){var o=a[n][e.property];e.initialValue=o,e.setValue(o)}}}}function Ni(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new js(e,t);else{var s=[e,t].concat(n.factoryArgs);i=z_.apply(r,s)}n.before instanceof Ln&&(n.before=n.before.__li),bc(r,i),N.addClass(i.domElement,"c");var a=document.createElement("span");N.addClass(a,"property-name"),a.innerHTML=i.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(i.domElement);var l=Ma(r,o,n.before);return N.addClass(l,Ve.CLASS_CONTROLLER_ROW),i instanceof js?N.addClass(l,"color"):N.addClass(l,L_(i.getValue())),G_(r,l,i),r.__controllers.push(i),i}function Jn(r,e){return document.location.href+"."+e}function Js(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function ul(r,e){e.style.display=r.useLocalStorage?"block":"none"}function W_(r){var e=r.__save_row=document.createElement("li");N.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),N.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",N.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",N.addClass(n,"button"),N.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",N.addClass(i,"button"),N.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",N.addClass(s,"button"),N.addClass(s,"revert");var a=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?G.each(r.load.remembered,function(u,d){Js(r,d,d===r.preset)}):Js(r,Ui,!1),N.bind(a,"change",function(){for(var u=0;u<r.__preset_select.length;u++)r.__preset_select[u].innerHTML=r.__preset_select[u].value;r.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),Ti){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Jn(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),ul(r,o),N.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,ul(r,o)})}var h=document.getElementById("dg-new-constructor");N.bind(h,"keydown",function(u){u.metaKey&&(u.which===67||u.keyCode===67)&&Ii.hide()}),N.bind(t,"click",function(){h.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Ii.show(),h.focus(),h.select()}),N.bind(n,"click",function(){r.save()}),N.bind(i,"click",function(){var u=prompt("Enter a new preset name.");u&&r.saveAs(u)}),N.bind(s,"click",function(){r.revert()})}function X_(r){var e=void 0;r.__resize_handle=document.createElement("div"),G.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){N.removeClass(r.__closeButton,Ve.CLASS_DRAG),N.unbind(window,"mousemove",t),N.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,N.addClass(r.__closeButton,Ve.CLASS_DRAG),N.bind(window,"mousemove",t),N.bind(window,"mouseup",n),!1}N.bind(r.__resize_handle,"mousedown",i),N.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function $s(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function wr(r,e){var t={};return G.each(r.__rememberedObjects,function(n,i){var s={},a=r.__rememberedObjectIndecesToControllers[i];G.each(a,function(o,l){s[l]=e?o.initialValue:o.getValue()}),t[i]=s}),t}function q_(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function wc(r){r.length!==0&&H_.call(window,function(){wc(r)}),G.each(r,function(e){e.updateDisplay()})}const Y_=document.getElementById("bg"),Bt={width:window.innerWidth,height:window.innerHeight},Xr=new ca,dn=new Vl({canvas:Y_});dn.setPixelRatio(window.devicePixelRatio);dn.setSize(Bt.width,Bt.height);dn.setClearColor(11524476);const fn=new mt(75,Bt.width/Bt.height,1,100);fn.position.set(5,4,5);const qr=new E_(fn,dn.domElement);qr.target.set(0,0,0);qr.enableDamping=!0;qr.dampingFactor=.05;dn.render(Xr,fn);let Xe=[],Mc=["top","left","right","bottom","forward","backward"],j_=["./static/1.mp4","./static/2.mp4","./static/3.mp4","./static/4.mp4","./static/5.mp4","./static/6.mp4"],jt=5,Nr=Math.PI*.5,Vi=-Math.PI*.5;const Yr=new Kn,Z_=["./static/mp3/top.mp3","./static/mp3/left.mp3","./static/mp3/right.mp3","./static/mp3/bottom.mp3","./static/mp3/forward.mp3","./static/mp3/backward.mp3"],Sc=Z_.map(r=>{const e=new dc,t=new fc(new a_);return e.load(r,n=>{t.setBuffer(n),t.setLoop(!0),t.isLoaded=!0}),t});Mc.forEach((r,e)=>{const t=document.createElement("video");t.src=j_[e],t.load(),t.muted=!0,t.play(),t.loop=!0;const n=new Yl(t);n.minFilter=gt,n.magFilter=gt,n.format=sn,n.center.set(.5,.5);const i=new yt(new la(jt,jt),new zr({map:n}));switch(Xe.push(i),Yr.add(Xe[e]),Xe[e].name=r,e){case 0:Xe[e].rotation.x=Vi,Xe[e].position.y+=jt*.5;break;case 1:Xe[e].rotation.y=Vi,Xe[e].position.x-=jt*.5;break;case 2:Xe[e].rotation.y=Nr,Xe[e].position.x+=jt*.5;break;case 3:Xe[e].rotation.x=Nr,Xe[e].position.y-=jt*.5;break;case 4:Xe[e].position.z+=jt*.5;break;case 5:Xe[e].rotation.y=Math.PI,Xe[e].position.z-=jt*.5;break}});Xr.add(Yr);const J_=new ln({uniforms:{uColor1:{value:new de(7836501)},uColor2:{value:new de(0)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;

    void main() {
      // Calculate radial gradient based on distance from center
      float dist = distance(vUv, vec2(0.5, 0.5)) * 3.0; // Scale by 2.0 to reduce radius to half the plane
      
      // Clamp distance to prevent gradient from exceeding halfway
      dist = clamp(dist, 0.0, 1.0);

      // Interpolate color
      vec3 color = mix(uColor1, uColor2, dist);
      
      // Interpolate alpha from 1.0 (opaque) at the center to 0.0 (transparent) at halfway
      float alpha = mix(1.0, 0.0, dist);

      // Set the fragment color with alpha
      gl_FragColor = vec4(color, alpha);
    }
  `,transparent:!0});let Sa=new yt(new la(20,20),J_);Sa.rotation.x=Vi;Sa.position.y-=jt;Xr.add(Sa);new mc(10,10);const $_=new oc(16777215,3);$_.position.set(3,3,3);const xt=new w,Fs=new $,dl=new y_;function Ec(){window.requestAnimationFrame(Ec),xt.subVectors(Yr.position,fn.position).normalize(),xt.x=Math.round(xt.x),xt.z=Math.round(xt.z),xt.z==-1&&xt.x==0?(Xe[0].material.map.rotation=0,Xe[3].material.map.rotation=0):xt.z==0&&xt.x==1?(Xe[0].material.map.rotation=Vi,Xe[3].material.map.rotation=Nr):xt.z==1&&xt.x==0?(Xe[0].material.map.rotation=Math.PI,Xe[3].material.map.rotation=Math.PI):xt.z==0&&xt.x==-1&&(Xe[0].material.map.rotation=Nr,Xe[3].material.map.rotation=Vi),Q_(),qr.update(),dn.render(Xr,fn)}Ec();const Tc=()=>{Bt.width=window.innerWidth,Bt.height=window.innerHeight,fn.aspect=Bt.width/Bt.height,fn.updateProjectionMatrix(),dn.setPixelRatio(Math.min(window.devicePixelRatio,2)),dn.setSize(Bt.width,Bt.height)};window.addEventListener("resize",Tc);Tc();function Q_(){Fs.x=0,Fs.y=0,dl.setFromCamera(Fs,fn);const r=dl.intersectObjects(Yr.children);if(r.length>0){const e=r[0],t=Mc.indexOf(e.object.name);Sc[t]&&K_(t)}}function K_(r){Sc.forEach((e,t)=>{e.isLoaded&&(e.pause(),t===r&&e.play())})}
