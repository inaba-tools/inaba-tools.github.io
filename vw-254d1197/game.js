(()=>{var Up=0,Zd=1,Fp=2;var pr=1,hl=2,mr=3,gs=0,En=1,hn=2,es=0,gr=1,Vs=2,Jd=3,Kd=4,Bp=5;var Jr=100,Op=101,Hp=102,kp=103,Gp=104,zp=200,Vp=201,Wp=202,Xp=203,Qd=204,jd=205,qp=206,Yp=207,$p=208,Zp=209,Jp=210,Kp=211,Qp=212,jp=213,tm=214,Vc=0,Wc=1,Xc=2,Lo=3,qc=4,Yc=5,$c=6,Zc=7,Eh=0,em=1,nm=2,xs=0,ul=1,dl=2,fl=3,xr=4,pl=5,ml=6,gl=7;var tf=300,Kr=301,qo=302,wh=303,Sh=304,ds=1e3,hs=1001,Jc=1002,gn=1003,im=1004;var xl=1005;var ci=1006,Th=1007;var Ws=1008;var bi=1009,ef=1010,nf=1011,Yo=1012,Rh=1013,ns=1014,qi=1015,Ln=1016,Ah=1017,Ch=1018,Qr=1020,sf=35902,rf=35899,of=1021,af=1022,is=1023,ks=1026,Xs=1027,$o=1028,Ph=1029,yr=1030,Ih=1031;var Lh=1033,yl=33776,Ml=33777,vl=33778,_l=33779,Dh=35840,Nh=35841,Uh=35842,Fh=35843,Bh=36196,Oh=37492,Hh=37496,kh=37488,Gh=37489,bl=37490,zh=37491,Vh=37808,Wh=37809,Xh=37810,qh=37811,Yh=37812,$h=37813,Zh=37814,Jh=37815,Kh=37816,Qh=37817,jh=37818,tu=37819,eu=37820,nu=37821,iu=36492,su=36494,ru=36495,ou=36283,au=36284,El=36285,lu=36286;var Ua=2300,Kc=2301,Gc=2302,Od=2303,Hd=2400,kd=2401,Gd=2402;var sm=3200,lf=3201;var Zo=0,rm=1,qs="",Mn="srgb",Fa="srgb-linear",Ba="linear",Ge="srgb";var zc=7680;var om=519,am=512,lm=513,cm=514,cf=515,hm=516,um=517,hf=518,uf=519,df=35044;var ff="300 es",Vi=2e3,Do=2001;function L1(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function D1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dm(){let n=Oa("canvas");return n.style.display="block",n}var ep={},No=null;function Ha(...n){let t="THREE."+n.shift();No?No("log",t,...n):console.log(t,...n)}function fm(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function pe(...n){n=fm(n);let t="THREE."+n.shift();if(No)No("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function me(...n){n=fm(n);let t="THREE."+n.shift();if(No)No("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Gr(...n){let t=n.join(" ");t in ep||(ep[t]=!0,pe(...n))}function pm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var mm={[Vc]:Vc,[Xc]:$c,[qc]:qc,[Lo]:Yc,[Wc]:Wc,[$c]:Xc,[Zc]:Zc,[Yc]:Lo},fs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dd=Math.PI/180,Qc=180/Math.PI;function Mr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[e&63|128]+Kn[e>>8&255]+"-"+Kn[e>>16&255]+Kn[e>>24&255]+Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]).toLowerCase()}function Pe(n,t,e){return Math.max(t,Math.min(e,n))}function N1(n,t){return(n%t+t)%t}function fd(n,t,e){return(1-e)*n+e*t}function gm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xm(n,t){if(t.constructor===Float32Array)return n;let e=cu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function ym(n,t){if(t.constructor===Float32Array)return n;let e=cu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Mf=class Mf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mf.prototype.isVector2=!0;var lt=Mf,_n=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(u!==g||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*g;m<0&&(d=-d,f=-f,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);x=Math.sin(x*M)/w,a=Math.sin(a*M)/w,l=l*x+d*a,c=c*x+f*a,h=h*x+p*a,u=u*x+g*a}else{l=l*x+d*a,c=c*x+f*a,h=h*x+p*a,u=u*x+g*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vf=class vf{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(np.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(np.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this.z=Pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this.z=Pe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pd.copy(this).projectOnVector(t),this.sub(pd)}reflect(t){return this.sub(pd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vf.prototype.isVector3=!0;var F=vf,pd=new F,np=new _n,_f=class _f{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],g=s[0],m=s[3],x=s[6],M=s[1],w=s[4],E=s[7],R=s[2],S=s[5],_=s[8];return r[0]=o*g+a*M+l*R,r[3]=o*m+a*w+l*S,r[6]=o*x+a*E+l*_,r[1]=c*g+h*M+u*R,r[4]=c*m+h*w+u*S,r[7]=c*x+h*E+u*_,r[2]=d*g+f*M+p*R,r[5]=d*m+f*w+p*S,r[8]=d*x+f*E+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=u*g,t[1]=(s*c-h*i)*g,t[2]=(a*i-s*o)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(t,e)),this}rotate(t){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-t)),this}translate(t,e){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_f.prototype.isMatrix3=!0;var ve=_f,md=new ve,ip=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sp=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U1(){let n={enabled:!0,workingColorSpace:Fa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ge&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ge&&(s.r=Io(s.r),s.g=Io(s.g),s.b=Io(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qs?Ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fa]:{primaries:t,whitePoint:i,transfer:Ba,toXYZ:ip,fromXYZ:sp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:i,transfer:Ge,toXYZ:ip,fromXYZ:sp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}var Le=U1();function Hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fo,jc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fo===void 0&&(fo=Oa("canvas")),fo.width=t.width,fo.height=t.height;let s=fo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=fo}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hs(e[i]/255)*255):e[i]=Hs(e[i]);return{data:e,width:t.width,height:t.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},F1=0,Uo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=Mr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gd(s[o].image)):r.push(gd(s[o]))}else r=gd(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function gd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}var B1=0,xd=new F,hi=class n extends fs{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=hs,s=hs,r=ci,o=Ws,a=is,l=bi,c=n.DEFAULT_ANISOTROPY,h=qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=Mr(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){pe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){pe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case hs:t.x=t.x<0?0:1;break;case Jc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case hs:t.y=t.y<0?0:1;break;case Jc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=tf;hi.DEFAULT_ANISOTROPY=1;var bf=class bf{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,E=(f+1)/2,R=(x+1)/2,S=(h+d)/4,_=(u+g)/4,v=(p+m)/4;return w>E&&w>R?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=_/i):E>R?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=S/s,r=v/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=_/r,s=v/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this.z=Pe(this.z,t.z,e.z),this.w=Pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this.z=Pe(this.z,t,e),this.w=Pe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bf.prototype.isVector4=!0;var ln=bf,th=class extends fs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ln(0,0,t,e),this.scissorTest=!1,this.viewport=new ln(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new hi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Uo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends th{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ka=class extends hi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eh=class extends hi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var bh=class bh{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,g,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,g,m){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bh().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/po.setFromMatrixColumn(t,0).length(),r=1/po.setFromMatrixColumn(t,1).length(),o=1/po.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,g=c*u;e[0]=d+g*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(O1,t,H1)}lookAt(t,e,i){let s=this.elements;return Ci.subVectors(t,e),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),er.crossVectors(i,Ci),er.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),er.crossVectors(i,Ci)),er.normalize(),mc.crossVectors(Ci,er),s[0]=er.x,s[4]=mc.x,s[8]=Ci.x,s[1]=er.y,s[5]=mc.y,s[9]=Ci.y,s[2]=er.z,s[6]=mc.z,s[10]=Ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],g=i[6],m=i[10],x=i[14],M=i[3],w=i[7],E=i[11],R=i[15],S=s[0],_=s[4],v=s[8],C=s[12],P=s[1],L=s[5],B=s[9],U=s[13],I=s[2],k=s[6],q=s[10],V=s[14],Q=s[3],Y=s[7],j=s[11],nt=s[15];return r[0]=o*S+a*P+l*I+c*Q,r[4]=o*_+a*L+l*k+c*Y,r[8]=o*v+a*B+l*q+c*j,r[12]=o*C+a*U+l*V+c*nt,r[1]=h*S+u*P+d*I+f*Q,r[5]=h*_+u*L+d*k+f*Y,r[9]=h*v+u*B+d*q+f*j,r[13]=h*C+u*U+d*V+f*nt,r[2]=p*S+g*P+m*I+x*Q,r[6]=p*_+g*L+m*k+x*Y,r[10]=p*v+g*B+m*q+x*j,r[14]=p*C+g*U+m*V+x*nt,r[3]=M*S+w*P+E*I+R*Q,r[7]=M*_+w*L+E*k+R*Y,r[11]=M*v+w*B+E*q+R*j,r[15]=M*C+w*U+E*V+R*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],g=t[7],m=t[11],x=t[15],M=l*f-c*d,w=a*f-c*u,E=a*d-l*u,R=o*f-c*h,S=o*d-l*h,_=o*u-a*h;return e*(g*M-m*w+x*E)-i*(p*M-m*R+x*S)+s*(p*w-g*R+x*_)-r*(p*E-g*S+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],g=t[13],m=t[14],x=t[15],M=e*a-i*o,w=e*l-s*o,E=e*c-r*o,R=i*l-s*a,S=i*c-r*a,_=s*c-r*l,v=h*g-u*p,C=h*m-d*p,P=h*x-f*p,L=u*m-d*g,B=u*x-f*g,U=d*x-f*m,I=M*U-w*B+E*L+R*P-S*C+_*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(a*U-l*B+c*L)*k,t[1]=(s*B-i*U-r*L)*k,t[2]=(g*_-m*S+x*R)*k,t[3]=(d*S-u*_-f*R)*k,t[4]=(l*P-o*U-c*C)*k,t[5]=(e*U-s*P+r*C)*k,t[6]=(m*E-p*_-x*w)*k,t[7]=(h*_-d*E+f*w)*k,t[8]=(o*B-a*P+c*v)*k,t[9]=(i*P-e*B-r*v)*k,t[10]=(p*S-g*E+x*M)*k,t[11]=(u*E-h*S-f*M)*k,t[12]=(a*C-o*L-l*v)*k,t[13]=(e*L-i*C+s*v)*k,t[14]=(g*w-p*R-m*M)*k,t[15]=(h*R-u*w+d*M)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,g=o*h,m=o*u,x=a*u,M=l*c,w=l*h,E=l*u,R=i.x,S=i.y,_=i.z;return s[0]=(1-(g+x))*R,s[1]=(f+E)*R,s[2]=(p-w)*R,s[3]=0,s[4]=(f-E)*S,s[5]=(1-(d+x))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(p+w)*_,s[9]=(m-M)*_,s[10]=(1-(d+g))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=po.set(s[0],s[1],s[2]).length(),a=po.set(s[4],s[5],s[6]).length(),l=po.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Zi.copy(this);let c=1/o,h=1/a,u=1/l;return Zi.elements[0]*=c,Zi.elements[1]*=c,Zi.elements[2]*=c,Zi.elements[4]*=h,Zi.elements[5]*=h,Zi.elements[6]*=h,Zi.elements[8]*=u,Zi.elements[9]*=u,Zi.elements[10]*=u,e.setFromRotationMatrix(Zi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Vi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Vi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Do)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Vi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Vi)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Do)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};bh.prototype.isMatrix4=!0;var $t=bh,po=new F,Zi=new $t,O1=new F(0,0,0),H1=new F(1,1,1),er=new F,mc=new F,Ci=new F,rp=new $t,op=new _n,Wi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return op.setFromEuler(this),this.setFromQuaternion(op,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var Ga=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},k1=0,ap=new F,mo=new _n,Ds=new $t,gc=new F,Ea=new F,G1=new F,z1=new _n,lp=new F(1,0,0),cp=new F(0,1,0),hp=new F(0,0,1),up={type:"added"},V1={type:"removed"},go={type:"childadded",child:null},yd={type:"childremoved",child:null},rn=class n extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Wi,i=new _n,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new ve}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mo.setFromAxisAngle(t,e),this.quaternion.multiply(mo),this}rotateOnWorldAxis(t,e){return mo.setFromAxisAngle(t,e),this.quaternion.premultiply(mo),this}rotateX(t){return this.rotateOnAxis(lp,t)}rotateY(t){return this.rotateOnAxis(cp,t)}rotateZ(t){return this.rotateOnAxis(hp,t)}translateOnAxis(t,e){return ap.copy(t).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lp,t)}translateY(t){return this.translateOnAxis(cp,t)}translateZ(t){return this.translateOnAxis(hp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ds.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gc.copy(t):gc.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ds.lookAt(Ea,gc,this.up):Ds.lookAt(gc,Ea,this.up),this.quaternion.setFromRotationMatrix(Ds),s&&(Ds.extractRotation(s.matrixWorld),mo.setFromRotationMatrix(Ds),this.quaternion.premultiply(mo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(up),go.child=t,this.dispatchEvent(go),go.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(V1),yd.child=t,this.dispatchEvent(yd),yd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(up),go.child=t,this.dispatchEvent(go),go.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,t,G1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,z1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new F(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},W1={type:"move"},Fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,i),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Md(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Xt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=i,Le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Le.workingColorSpace){if(t=N1(t,1),e=Pe(e,0,1),i=Pe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Md(o,r,t+1/3),this.g=Md(o,r,t),this.b=Md(o,r,t-1/3)}return Le.colorSpaceToWorking(this,s),this}setStyle(t,e=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&pe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:pe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){let i=Mm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return Le.workingToColorSpace(Qn.copy(this),t),Math.round(Pe(Qn.r*255,0,255))*65536+Math.round(Pe(Qn.g*255,0,255))*256+Math.round(Pe(Qn.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.workingToColorSpace(Qn.copy(this),e);let i=Qn.r,s=Qn.g,r=Qn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.workingToColorSpace(Qn.copy(this),e),t.r=Qn.r,t.g=Qn.g,t.b=Qn.b,t}getStyle(t=Mn){Le.workingToColorSpace(Qn.copy(this),t);let e=Qn.r,i=Qn.g,s=Qn.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(xc);let i=fd(nr.h,xc.h,e),s=fd(nr.s,xc.s,e),r=fd(nr.l,xc.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new Xt;Xt.NAMES=Mm;var za=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gs=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ji=new F,Ns=new F,vd=new F,Us=new F,xo=new F,yo=new F,dp=new F,_d=new F,bd=new F,Ed=new F,wd=new ln,Sd=new ln,Td=new ln,Os=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ji.subVectors(t,e),s.cross(Ji);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ji.subVectors(s,e),Ns.subVectors(i,e),vd.subVectors(t,e);let o=Ji.dot(Ji),a=Ji.dot(Ns),l=Ji.dot(vd),c=Ns.dot(Ns),h=Ns.dot(vd),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Us)===null?!1:Us.x>=0&&Us.y>=0&&Us.x+Us.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Us)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Us.x),l.addScaledVector(o,Us.y),l.addScaledVector(a,Us.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return wd.setScalar(0),Sd.setScalar(0),Td.setScalar(0),wd.fromBufferAttribute(t,e),Sd.fromBufferAttribute(t,i),Td.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wd,r.x),o.addScaledVector(Sd,r.y),o.addScaledVector(Td,r.z),o}static isFrontFacing(t,e,i,s){return Ji.subVectors(i,e),Ns.subVectors(t,e),Ji.cross(Ns).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ji.subVectors(this.c,this.b),Ns.subVectors(this.a,this.b),Ji.cross(Ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;xo.subVectors(s,i),yo.subVectors(r,i),_d.subVectors(t,i);let l=xo.dot(_d),c=yo.dot(_d);if(l<=0&&c<=0)return e.copy(i);bd.subVectors(t,s);let h=xo.dot(bd),u=yo.dot(bd);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(xo,o);Ed.subVectors(t,r);let f=xo.dot(Ed),p=yo.dot(Ed);if(p>=0&&f<=p)return e.copy(r);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(yo,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return dp.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(dp,a);let x=1/(m+g+d);return o=g*x,a=d*x,e.copy(i).addScaledVector(xo,o).addScaledVector(yo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ps=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ki):Ki.fromBufferAttribute(r,o),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yc.copy(i.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wa),Mc.subVectors(this.max,wa),Mo.subVectors(t.a,wa),vo.subVectors(t.b,wa),_o.subVectors(t.c,wa),ir.subVectors(vo,Mo),sr.subVectors(_o,vo),Br.subVectors(Mo,_o);let e=[0,-ir.z,ir.y,0,-sr.z,sr.y,0,-Br.z,Br.y,ir.z,0,-ir.x,sr.z,0,-sr.x,Br.z,0,-Br.x,-ir.y,ir.x,0,-sr.y,sr.x,0,-Br.y,Br.x,0];return!Rd(e,Mo,vo,_o,Mc)||(e=[1,0,0,0,1,0,0,0,1],!Rd(e,Mo,vo,_o,Mc))?!1:(vc.crossVectors(ir,sr),e=[vc.x,vc.y,vc.z],Rd(e,Mo,vo,_o,Mc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fs=[new F,new F,new F,new F,new F,new F,new F,new F],Ki=new F,yc=new ps,Mo=new F,vo=new F,_o=new F,ir=new F,sr=new F,Br=new F,wa=new F,Mc=new F,vc=new F,Or=new F;function Rd(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Or.fromArray(n,r);let a=s.x*Math.abs(Or.x)+s.y*Math.abs(Or.y)+s.z*Math.abs(Or.z),l=t.dot(Or),c=e.dot(Or),h=i.dot(Or);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pn=new F,_c=new lt,X1=0,vn=class extends fs{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=df,this.updateRanges=[],this.gpuType=qi,this.version=0,this._normalizationScale=t!==void 0?cu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_c.fromBufferAttribute(this,e),_c.applyMatrix3(t),this.setXY(e,_c.x,_c.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix3(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix4(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyNormalMatrix(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.transformDirection(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xm(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ym(t,this.array)}};var Va=class extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Wa=class extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ce=class extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}},q1=new ps,Sa=new F,Ad=new F,or=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):q1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sa.subVectors(t,this.center);let e=Sa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sa.copy(t.center).add(Ad)),this.expandByPoint(Sa.copy(t.center).sub(Ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Y1=0,zi=new $t,Cd=new rn,bo=new F,Pi=new ps,Ta=new ps,Hn=new F,je=class n extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(L1(t)?Wa:Va)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ve().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zi.makeRotationFromQuaternion(t),this.applyMatrix4(zi),this}rotateX(t){return zi.makeRotationX(t),this.applyMatrix4(zi),this}rotateY(t){return zi.makeRotationY(t),this.applyMatrix4(zi),this}rotateZ(t){return zi.makeRotationZ(t),this.applyMatrix4(zi),this}translate(t,e,i){return zi.makeTranslation(t,e,i),this.applyMatrix4(zi),this}scale(t,e,i){return zi.makeScale(t,e,i),this.applyMatrix4(zi),this}lookAt(t){return Cd.lookAt(t),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Pi.setFromBufferAttribute(r),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(Pi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(Hn.addVectors(Pi.min,Ta.min),Pi.expandByPoint(Hn),Hn.addVectors(Pi.max,Ta.max),Pi.expandByPoint(Hn)):(Pi.expandByPoint(Ta.min),Pi.expandByPoint(Ta.max))}Pi.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Hn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Hn.fromBufferAttribute(a,c),l&&(bo.fromBufferAttribute(t,c),Hn.add(bo)),s=Math.max(s,i.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new vn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new F,l[C]=new F;let h=new F,u=new F,d=new F,f=new lt,p=new lt,g=new lt,m=new F,x=new F;function M(C,P,L){c[C]=c[P]=c[L]=1,h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,L),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,L),u.sub(h),d.sub(h),p.sub(f),g.sub(f);let B=1/(p.x*g.y-g.x*p.y);isFinite(B)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(B),x.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(B),a[C].add(m),a[P].add(m),a[L].add(m),l[C].add(x),l[P].add(x),l[L].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let C=0,P=w.length;C<P;++C){let L=w[C],B=L.start,U=L.count;for(let I=B,k=B+U;I<k;I+=3)M(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let E=new F,R=new F,S=new F,_=new F;function v(C){S.fromBufferAttribute(s,C),_.copy(S);let P=a[C];E.copy(P),E.sub(S.multiplyScalar(S.dot(P))).normalize(),R.crossVectors(_,P);let B=R.dot(l[C])<0?-1:1;o.setXYZW(C,E.x,E.y,E.z,B)}for(let C=0,P=i.count;C<P;++C)c[C]&&v(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Hn.fromBufferAttribute(t,e),Hn.normalize(),t.setXYZ(e,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let x=0;x<h;x++)d[p++]=c[f++]}return new vn(d,h,u)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=df,this.updateRanges=[],this.version=0,this.uuid=Mr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function fp(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Mr()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var li=new F,Bo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?cu(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)li.fromBufferAttribute(this,e),li.applyMatrix4(t),this.setXYZ(e,li.x,li.y,li.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)li.fromBufferAttribute(this,e),li.applyNormalMatrix(t),this.setXYZ(e,li.x,li.y,li.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)li.fromBufferAttribute(this,e),li.transformDirection(t),this.setXYZ(e,li.x,li.y,li.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xm(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ym(t,this.data.array)}},Pd=new F,$1=new F,Z1=new ve,Qi=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Pd.subVectors(i,e).cross($1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Pd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Z1.getNormalMatrix(t),s=this.coplanarPoint(Pd).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},J1=0,ji=class extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=gr,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=jd,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zc,this.stencilZFail=zc,this.stencilZPass=zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){pe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){pe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Qi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},zr=class extends ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eo,Ra=new F,wo=new F,So=new F,To=new lt,Aa=new lt,vm=new $t,bc=new F,Ca=new F,Ec=new F,pp=new lt,Id=new lt,mp=new lt,Oo=class extends rn{constructor(t=new zr){if(super(),this.isSprite=!0,this.type="Sprite",Eo===void 0){Eo=new je;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xa(e,5);Eo.setIndex([0,1,2,0,2,3]),Eo.setAttribute("position",new Bo(i,3,0,!1)),Eo.setAttribute("uv",new Bo(i,2,3,!1))}this.geometry=Eo,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&me('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wo.setFromMatrixScale(this.matrixWorld),vm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),So.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wo.multiplyScalar(-So.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;wc(bc.set(-.5,-.5,0),So,o,wo,s,r),wc(Ca.set(.5,-.5,0),So,o,wo,s,r),wc(Ec.set(.5,.5,0),So,o,wo,s,r),pp.set(0,0),Id.set(1,0),mp.set(1,1);let a=t.ray.intersectTriangle(bc,Ca,Ec,!1,Ra);if(a===null&&(wc(Ca.set(-.5,.5,0),So,o,wo,s,r),Id.set(0,1),a=t.ray.intersectTriangle(bc,Ec,Ca,!1,Ra),a===null))return;let l=t.ray.origin.distanceTo(Ra);l<t.near||l>t.far||e.push({distance:l,point:Ra.clone(),uv:Os.getInterpolation(Ra,bc,Ca,Ec,pp,Id,mp,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function wc(n,t,e,i,s,r){To.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Aa.x=r*To.x-s*To.y,Aa.y=s*To.x+r*To.y):Aa.copy(To),n.copy(t),n.x+=Aa.x,n.y+=Aa.y,n.applyMatrix4(vm)}var Bs=new F,Ld=new F,Sc=new F,Tc=new F,nh=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bs.copy(this.origin).addScaledVector(this.direction,e),Bs.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ld.copy(t).add(e).multiplyScalar(.5),Sc.copy(e).sub(t).normalize(),Tc.copy(this.origin).sub(Ld);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Sc),a=Tc.dot(this.direction),l=-Tc.dot(Sc),c=Tc.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ld).addScaledVector(Sc,d),f}intersectSphere(t,e){if(t.radius<0)return null;Bs.subVectors(t.center,this.origin);let i=Bs.dot(this.direction),s=Bs.dot(Bs)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Bs)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,g=e.y-o.y,m=e.z-o.z,x=i.x-o.x,M=i.y-o.y,w=i.z-o.z,E=Math.abs(l),R=Math.abs(c),S=Math.abs(h),_,v,C,P,L,B,U,I,k,q,V,Q;if(E>=R&&E>=S?(C=l,B=u,k=p,Q=x,l>=0?(_=c,v=h,P=d,L=f,U=g,I=m,q=M,V=w):(_=h,v=c,P=f,L=d,U=m,I=g,q=w,V=M)):R>=S?(C=c,B=d,k=g,Q=M,c>=0?(_=h,v=l,P=f,L=u,U=m,I=p,q=w,V=x):(_=l,v=h,P=u,L=f,U=p,I=m,q=x,V=w)):(C=h,B=f,k=m,Q=w,h>=0?(_=l,v=c,P=u,L=d,U=p,I=g,q=x,V=M):(_=c,v=l,P=d,L=u,U=g,I=p,q=M,V=x)),C===0)return null;let Y=_/C,j=v/C,nt=1/C,Mt=P-Y*B,qt=L-j*B,st=U-Y*k,Ut=I-j*k,Vt=q-Y*Q,ne=V-j*Q,Ft=Vt*Ut-ne*st,ie=Mt*ne-qt*Vt,nn=st*qt-Ut*Mt;if(s){if(Ft<0||ie<0||nn<0)return null}else if((Ft<0||ie<0||nn<0)&&(Ft>0||ie>0||nn>0))return null;let rt=Ft+ie+nn;if(rt===0)return null;let Qt=nt*(Ft*B+ie*k+nn*Q);return(rt>0?Qt<0:Qt>0)?null:this.at(Qt/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wn=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gp=new $t,Hr=new nh,Rc=new or,xp=new F,Ac=new F,Cc=new F,Pc=new F,Dd=new F,Ic=new F,yp=new F,Lc=new F,D=class extends rn{constructor(t=new je,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ic.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Dd.fromBufferAttribute(u,t),o?Ic.addScaledVector(Dd,h):Ic.addScaledVector(Dd.sub(e),h))}e.add(Ic)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(r),Hr.copy(t.ray).recast(t.near),!(Rc.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Rc,xp)===null||Hr.origin.distanceToSquared(xp)>(t.far-t.near)**2))&&(gp.copy(r).invert(),Hr.copy(t.ray).applyMatrix4(gp),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hr)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,R=w;E<R;E+=3){let S=a.getX(E),_=a.getX(E+1),v=a.getX(E+2);s=Dc(this,x,t,i,c,h,u,S,_,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let M=a.getX(m),w=a.getX(m+1),E=a.getX(m+2);s=Dc(this,o,t,i,c,h,u,M,w,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,R=w;E<R;E+=3){let S=E,_=E+1,v=E+2;s=Dc(this,x,t,i,c,h,u,S,_,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let M=m,w=m+1,E=m+2;s=Dc(this,o,t,i,c,h,u,M,w,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function K1(n,t,e,i,s,r,o,a){let l;if(t.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===gs,a),l===null)return null;Lc.copy(a),Lc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Lc);return c<e.near||c>e.far?null:{distance:c,point:Lc.clone(),object:n}}function Dc(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ac),n.getVertexPosition(l,Cc),n.getVertexPosition(c,Pc);let h=K1(n,t,e,i,Ac,Cc,Pc,yp);if(h){let u=new F;Os.getBarycoord(yp,Ac,Cc,Pc,u),s&&(h.uv=Os.getInterpolatedAttribute(s,a,l,c,u,new lt)),r&&(h.uv1=Os.getInterpolatedAttribute(r,a,l,c,u,new lt)),o&&(h.normal=Os.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};Os.getNormal(Ac,Cc,Pc,d.normal),h.face=d,h.barycoord=u}return h}var Vr=class extends hi{constructor(t=null,e=1,i=1,s,r,o,a,l,c=gn,h=gn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ho=class extends vn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ro=new $t,Mp=new $t,Nc=[],vp=new ps,Q1=new $t,Pa=new D,Ia=new or,ar=class extends D{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Q1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ro),vp.copy(t.boundingBox).applyMatrix4(Ro),this.boundingBox.union(vp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ro),Ia.copy(t.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(i),t.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ro),Mp.multiplyMatrices(i,Ro),Pa.matrixWorld=Mp,Pa.raycast(t,Nc);for(let o=0,a=Nc.length;o<a;o++){let l=Nc[o];l.instanceId=r,l.object=this,e.push(l)}Nc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,$o,qi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},kr=new or,j1=new lt(.5,.5),Uc=new F,lr=class{constructor(t=new Qi,e=new Qi,i=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],m=r[10],x=r[11],M=r[12],w=r[13],E=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,x-p,R-M).normalize(),s[1].setComponents(c+o,f+h,x+p,R+M).normalize(),s[2].setComponents(c+a,f+u,x+g,R+w).normalize(),s[3].setComponents(c-a,f-u,x-g,R-w).normalize(),i)s[4].setComponents(l,d,m,E).normalize(),s[5].setComponents(c-l,f-d,x-m,R-E).normalize();else if(s[4].setComponents(c-l,f-d,x-m,R-E).normalize(),e===Vi)s[5].setComponents(c+l,f+d,x+m,R+E).normalize();else if(e===Do)s[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(t){kr.center.set(0,0,0);let e=j1.distanceTo(t.center);return kr.radius=.7071067811865476+e,kr.applyMatrix4(t.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Uc.x=s.normal.x>0?t.max.x:t.min.x,Uc.y=s.normal.y>0?t.max.y:t.min.y,Uc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_p=new $t,ih=class n{constructor(){this.coordinateSystem=Vi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];_p.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new lr),i[s].setFromProjectionMatrix(_p,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new lr),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var qa=class extends hi{constructor(t=[],e=Kr,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ts=class extends hi{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zs=class extends hi{constructor(t,e,i=ns,s,r,o,a=gn,l=gn,c,h=ks,u=1){if(h!==ks&&h!==Xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ya=class extends zs{constructor(t,e=ns,i=Kr,s,r,o=gn,a=gn,l,c=ks){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$a=class extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},fe=class n extends je{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function p(g,m,x,M,w,E,R,S,_,v,C){let P=E/_,L=R/v,B=E/2,U=R/2,I=S/2,k=_+1,q=v+1,V=0,Q=0,Y=new F;for(let j=0;j<q;j++){let nt=j*L-U;for(let Mt=0;Mt<k;Mt++){let qt=Mt*P-B;Y[g]=qt*M,Y[m]=nt*w,Y[x]=I,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[x]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Mt/_),u.push(1-j/v),V+=1}}for(let j=0;j<v;j++)for(let nt=0;nt<_;nt++){let Mt=d+nt+k*j,qt=d+nt+k*(j+1),st=d+(nt+1)+k*(j+1),Ut=d+(nt+1)+k*j;l.push(Mt,qt,Ut),l.push(qt,st,Ut),Q+=6}a.addGroup(f,Q,C),f+=Q,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ms=class n extends je{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+r,g=s+1,m=new F,x=new F;for(let M=0;M<=p;M++){let w=0,E=0,R=0,S=0;if(M<=i){let C=M/i,P=C*Math.PI/2;E=-h-t*Math.cos(P),R=t*Math.sin(P),S=-t*Math.cos(P),w=C*u}else if(M<=i+r){let C=(M-i)/r;E=-h+C*e,R=t,S=0,w=u+C*d}else{let C=(M-i-r)/i,P=C*Math.PI/2;E=h+t*Math.sin(P),R=t*Math.cos(P),S=t*Math.sin(P),w=u+d+C*u}let _=Math.max(0,Math.min(1,w/f)),v=0;M===0?v=.5/s:M===p&&(v=-.5/s);for(let C=0;C<=s;C++){let P=C/s,L=P*Math.PI*2,B=Math.sin(L),U=Math.cos(L);x.x=-R*U,x.y=E,x.z=R*B,a.push(x.x,x.y,x.z),m.set(-R*U,S,R*B),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+v,_)}if(M>0){let C=(M-1)*g;for(let P=0;P<s;P++){let L=C+P,B=C+P+1,U=M*g+P,I=M*g+P+1;o.push(L,B,U),o.push(B,I,U)}}}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Xi=class n extends je{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new F,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pt=class n extends je{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,g=[],m=i/2,x=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function M(){let E=new F,R=new F,S=0,_=(e-t)/i;for(let v=0;v<=r;v++){let C=[],P=v/r,L=P*(e-t)+t;for(let B=0;B<=s;B++){let U=B/s,I=U*l+a,k=Math.sin(I),q=Math.cos(I);R.x=L*k,R.y=-P*i+m,R.z=L*q,u.push(R.x,R.y,R.z),E.set(k,_,q).normalize(),d.push(E.x,E.y,E.z),f.push(U,1-P),C.push(p++)}g.push(C)}for(let v=0;v<s;v++)for(let C=0;C<r;C++){let P=g[C][v],L=g[C+1][v],B=g[C+1][v+1],U=g[C][v+1];(t>0||C!==0)&&(h.push(P,L,U),S+=3),(e>0||C!==r-1)&&(h.push(L,B,U),S+=3)}c.addGroup(x,S,0),x+=S}function w(E){let R=p,S=new lt,_=new F,v=0,C=E===!0?t:e,P=E===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),p++;let L=p;for(let B=0;B<=s;B++){let I=B/s*l+a,k=Math.cos(I),q=Math.sin(I);_.x=C*q,_.y=m*P,_.z=C*k,u.push(_.x,_.y,_.z),d.push(0,P,0),S.x=k*.5+.5,S.y=q*.5*P+.5,f.push(S.x,S.y),p++}for(let B=0;B<s;B++){let U=R+B,I=L+B;E===!0?h.push(I,I+1,U):h.push(I+1,I,U),v+=3}c.addGroup(x,v,E===!0?1:2),x+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jn=class n extends pt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sh=class n extends je{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let w=new F,E=new F,R=new F;for(let S=0;S<e.length;S+=3)f(e[S+0],w),f(e[S+1],E),f(e[S+2],R),l(w,E,R,M)}function l(M,w,E,R){let S=R+1,_=[];for(let v=0;v<=S;v++){_[v]=[];let C=M.clone().lerp(E,v/S),P=w.clone().lerp(E,v/S),L=S-v;for(let B=0;B<=L;B++)B===0&&v===S?_[v][B]=C:_[v][B]=C.clone().lerp(P,B/L)}for(let v=0;v<S;v++)for(let C=0;C<2*(S-v)-1;C++){let P=Math.floor(C/2);C%2===0?(d(_[v][P+1]),d(_[v+1][P]),d(_[v][P])):(d(_[v][P+1]),d(_[v+1][P+1]),d(_[v+1][P]))}}function c(M){let w=new F;for(let E=0;E<r.length;E+=3)w.x=r[E+0],w.y=r[E+1],w.z=r[E+2],w.normalize().multiplyScalar(M),r[E+0]=w.x,r[E+1]=w.y,r[E+2]=w.z}function h(){let M=new F;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let E=m(M)/2/Math.PI+.5,R=x(M)/Math.PI+.5;o.push(E,1-R)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let w=o[M+0],E=o[M+2],R=o[M+4],S=Math.max(w,E,R),_=Math.min(w,E,R);S>.9&&_<.1&&(w<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,w){let E=M*3;w.x=t[E+0],w.y=t[E+1],w.z=t[E+2]}function p(){let M=new F,w=new F,E=new F,R=new F,S=new lt,_=new lt,v=new lt;for(let C=0,P=0;C<r.length;C+=9,P+=6){M.set(r[C+0],r[C+1],r[C+2]),w.set(r[C+3],r[C+4],r[C+5]),E.set(r[C+6],r[C+7],r[C+8]),S.set(o[P+0],o[P+1]),_.set(o[P+2],o[P+3]),v.set(o[P+4],o[P+5]),R.copy(M).add(w).add(E).divideScalar(3);let L=m(R);g(S,P+0,M,L),g(_,P+2,w,L),g(v,P+4,E,L)}}function g(M,w,E,R){R<0&&M.x===1&&(o[w]=M.x-1),E.x===0&&E.z===0&&(o[w]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function x(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new lt:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new F,s=[],r=[],o=[],a=new F,l=new $t;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Pe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Pe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},ko=class extends Ii{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rh=class extends ko{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pf(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var bp=new F,Ep=new F,Nd=new pf,Ud=new pf,Fd=new pf,cr=class extends Ii{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ep.subVectors(s[0],s[1]).add(s[0]),c=Ep);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Nd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,g,m),Ud.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,g,m),Fd.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(Nd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ud.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fd.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Nd.calc(l),Ud.calc(l),Fd.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wp(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function tx(n,t){let e=1-n;return e*e*t}function ex(n,t){return 2*(1-n)*n*t}function nx(n,t){return n*n*t}function Da(n,t,e,i){return tx(n,t)+ex(n,e)+nx(n,i)}function ix(n,t){let e=1-n;return e*e*e*t}function sx(n,t){let e=1-n;return 3*e*e*n*t}function rx(n,t){return 3*(1-n)*n*n*t}function ox(n,t){return n*n*n*t}function Na(n,t,e,i,s){return ix(n,t)+sx(n,e)+rx(n,i)+ox(n,s)}var Za=class extends Ii{constructor(t=new lt,e=new lt,i=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new lt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Na(t,s.x,r.x,o.x,a.x),Na(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oh=class extends Ii{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Na(t,s.x,r.x,o.x,a.x),Na(t,s.y,r.y,o.y,a.y),Na(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends Ii{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ah=class extends Ii{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends Ii{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Da(t,s.x,r.x,o.x),Da(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends Ii{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Da(t,s.x,r.x,o.x),Da(t,s.y,r.y,o.y),Da(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(wp(a,l.x,c.x,h.x,u.x),wp(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},lh=Object.freeze({__proto__:null,ArcCurve:rh,CatmullRomCurve3:cr,CubicBezierCurve:Za,CubicBezierCurve3:oh,EllipseCurve:ko,LineCurve:Ja,LineCurve3:ah,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:Qa,SplineCurve:ja}),ch=class extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new lh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Wr=class extends ch{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ja(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ka(this.currentPoint.clone(),new lt(t,e),new lt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Za(this.currentPoint.clone(),new lt(t,e),new lt(i,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ja(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new ko(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ui=class extends Wr{constructor(t){super(t),this.uuid=Mr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Wr().fromJSON(s))}return this}};function ax(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=_m(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=dx(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return tl(r,o,e,a,l,c,0),o}function _m(n,t,e,i,s){let r;if(s===Ex(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Sp(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Sp(o/i|0,n[o],n[o+1],r);return r&&Go(r,r.next)&&(nl(r),r=r.next),r}function Xr(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Go(e,e.next)||mn(e.prev,e,e.next)===0)){if(nl(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function tl(n,t,e,i,s,r,o){if(!n)return;!o&&r&&xx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?cx(n,i,s,r):lx(n)){t.push(l.i,n.i,c.i),nl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=hx(Xr(n),t),tl(n,t,e,i,s,r,2)):o===2&&ux(n,t,e,i,s,r):tl(Xr(n),t,e,i,s,r,1);break}}}function lx(n){let t=n.prev,e=n,i=n.next;if(mn(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&La(s,a,r,l,o,c,p.x,p.y)&&mn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(mn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),g=Math.max(a,l,c),m=Math.max(h,u,d),x=zd(f,p,t,e,i),M=zd(g,m,t,e,i),w=n.prevZ,E=n.nextZ;for(;w&&w.z>=x&&E&&E.z<=M;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&La(a,h,l,u,c,d,w.x,w.y)&&mn(w.prev,w,w.next)>=0||(w=w.prevZ,E.x>=f&&E.x<=g&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&La(a,h,l,u,c,d,E.x,E.y)&&mn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;w&&w.z>=x;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&La(a,h,l,u,c,d,w.x,w.y)&&mn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;E&&E.z<=M;){if(E.x>=f&&E.x<=g&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&La(a,h,l,u,c,d,E.x,E.y)&&mn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function hx(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Go(i,s)&&Em(i,e,e.next,s)&&el(i,s)&&el(s,i)&&(t.push(i.i,e.i,s.i),nl(e),nl(e.next),e=n=s),e=e.next}while(e!==n);return Xr(e)}function ux(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vx(o,a)){let l=wm(o,a);o=Xr(o,o.next),l=Xr(l,l.next),tl(o,t,e,i,s,r,0),tl(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function dx(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=_m(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Mx(c))}s.sort(fx);for(let r=0;r<s.length;r++)e=px(s[r],e);return e}function fx(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function px(n,t){let e=mx(n,t);if(!e)return t;let i=wm(e,n);return Xr(i,i.next),Xr(e,e.next)}function mx(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Go(n,e))return e;do{if(Go(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&bm(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);el(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&gx(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function gx(n,t){return mn(n.prev,n,t.prev)<0&&mn(t.next,n,n.next)<0}function xx(n,t,e,i){let s=n;do s.z===0&&(s.z=zd(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,yx(s)}function yx(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function zd(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Mx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function bm(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function La(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&bm(n,t,e,i,s,r,o,a)}function vx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!_x(n,t)&&(el(n,t)&&el(t,n)&&bx(n,t)&&(mn(n.prev,n,t.prev)||mn(n,t.prev,t))||Go(n,t)&&mn(n.prev,n,n.next)>0&&mn(t.prev,t,t.next)>0)}function mn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Go(n,t){return n.x===t.x&&n.y===t.y}function Em(n,t,e,i){let s=Bc(mn(n,t,e)),r=Bc(mn(n,t,i)),o=Bc(mn(e,i,n)),a=Bc(mn(e,i,t));return!!(s!==r&&o!==a||s===0&&Fc(n,e,t)||r===0&&Fc(n,i,t)||o===0&&Fc(e,n,i)||a===0&&Fc(e,t,i))}function Fc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Bc(n){return n>0?1:n<0?-1:0}function _x(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Em(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function el(n,t){return mn(n.prev,n,n.next)<0?mn(n,t,n.next)>=0&&mn(n,n.prev,t)>=0:mn(n,t,n.prev)<0||mn(n,n.next,t)<0}function bx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function wm(n,t){let e=Vd(n.i,n.x,n.y),i=Vd(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Sp(n,t,e,i){let s=Vd(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vd(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ex(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Wd=class{static triangulate(t,e,i=2){return ax(t,e,i)}},us=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Tp(t),Rp(i,t);let o=t.length;e.forEach(Tp);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Rp(i,e[l]);let a=Wd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Tp(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Rp(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var _i=class n extends je{constructor(t=new ui([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,x=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:wx,w,E=!1,R,S,_,v;if(x){w=x.getSpacedPoints(h),E=!0,d=!1;let ht=x.isCatmullRomCurve3?x.closed:!1;R=x.computeFrenetFrames(h,ht),S=new F,_=new F,v=new F}d||(m=0,f=0,p=0,g=0);let C=a.extractPoints(c),P=C.shape,L=C.holes;if(!us.isClockWise(P)){P=P.reverse();for(let ht=0,bt=L.length;ht<bt;ht++){let Et=L[ht];us.isClockWise(Et)&&(L[ht]=Et.reverse())}}function U(ht){let Et=10000000000000001e-36,Wt=ht[0];for(let Bt=1;Bt<=ht.length;Bt++){let Ee=Bt%ht.length,ee=ht[Ee],Ne=ee.x-Wt.x,Ue=ee.y-Wt.y,ke=Ne*Ne+Ue*Ue,W=Math.max(Math.abs(ee.x),Math.abs(ee.y),Math.abs(Wt.x),Math.abs(Wt.y)),An=Et*W*W;if(ke<=An){ht.splice(Ee,1),Bt--;continue}Wt=ee}}U(P),L.forEach(U);let I=L.length,k=P;for(let ht=0;ht<I;ht++){let bt=L[ht];P=P.concat(bt)}function q(ht,bt,Et){return bt||me("ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(bt,Et)}let V=P.length;function Q(ht,bt,Et){let Wt,Bt,Ee,ee=ht.x-bt.x,Ne=ht.y-bt.y,Ue=Et.x-ht.x,ke=Et.y-ht.y,W=ee*ee+Ne*Ne,An=ee*ke-Ne*Ue;if(Math.abs(An)>Number.EPSILON){let Ie=Math.sqrt(W),Ke=Math.sqrt(Ue*Ue+ke*ke),It=bt.x-Ne/Ie,yn=bt.y+ee/Ie,ue=Et.x-ke/Ke,Me=Et.y+Ue/Ke,N=((ue-It)*ke-(Me-yn)*Ue)/(ee*ke-Ne*Ue);Wt=It+ee*N-ht.x,Bt=yn+Ne*N-ht.y;let T=Wt*Wt+Bt*Bt;if(T<=2)return new lt(Wt,Bt);Ee=Math.sqrt(T/2)}else{let Ie=!1;ee>Number.EPSILON?Ue>Number.EPSILON&&(Ie=!0):ee<-Number.EPSILON?Ue<-Number.EPSILON&&(Ie=!0):Math.sign(Ne)===Math.sign(ke)&&(Ie=!0),Ie?(Wt=-Ne,Bt=ee,Ee=Math.sqrt(W)):(Wt=ee,Bt=Ne,Ee=Math.sqrt(W/2))}return new lt(Wt/Ee,Bt/Ee)}let Y=[];for(let ht=0,bt=k.length,Et=bt-1,Wt=ht+1;ht<bt;ht++,Et++,Wt++)Et===bt&&(Et=0),Wt===bt&&(Wt=0),Y[ht]=Q(k[ht],k[Et],k[Wt]);let j=[],nt,Mt=Y.concat();for(let ht=0,bt=I;ht<bt;ht++){let Et=L[ht];nt=[];for(let Wt=0,Bt=Et.length,Ee=Bt-1,ee=Wt+1;Wt<Bt;Wt++,Ee++,ee++)Ee===Bt&&(Ee=0),ee===Bt&&(ee=0),nt[Wt]=Q(Et[Wt],Et[Ee],Et[ee]);j.push(nt),Mt=Mt.concat(nt)}let qt;if(m===0)qt=us.triangulateShape(k,L);else{let ht=[],bt=[];for(let Et=0;Et<m;Et++){let Wt=Et/m,Bt=f*Math.cos(Wt*Math.PI/2),Ee=p*Math.sin(Wt*Math.PI/2)+g;for(let ee=0,Ne=k.length;ee<Ne;ee++){let Ue=q(k[ee],Y[ee],Ee);ie(Ue.x,Ue.y,-Bt),Wt===0&&ht.push(Ue)}for(let ee=0,Ne=I;ee<Ne;ee++){let Ue=L[ee];nt=j[ee];let ke=[];for(let W=0,An=Ue.length;W<An;W++){let Ie=q(Ue[W],nt[W],Ee);ie(Ie.x,Ie.y,-Bt),Wt===0&&ke.push(Ie)}Wt===0&&bt.push(ke)}}qt=us.triangulateShape(ht,bt)}let st=qt.length,Ut=p+g;for(let ht=0;ht<V;ht++){let bt=d?q(P[ht],Mt[ht],Ut):P[ht];E?(_.copy(R.normals[0]).multiplyScalar(bt.x),S.copy(R.binormals[0]).multiplyScalar(bt.y),v.copy(w[0]).add(_).add(S),ie(v.x,v.y,v.z)):ie(bt.x,bt.y,0)}for(let ht=1;ht<=h;ht++)for(let bt=0;bt<V;bt++){let Et=d?q(P[bt],Mt[bt],Ut):P[bt];E?(_.copy(R.normals[ht]).multiplyScalar(Et.x),S.copy(R.binormals[ht]).multiplyScalar(Et.y),v.copy(w[ht]).add(_).add(S),ie(v.x,v.y,v.z)):ie(Et.x,Et.y,u/h*ht)}for(let ht=m-1;ht>=0;ht--){let bt=ht/m,Et=f*Math.cos(bt*Math.PI/2),Wt=p*Math.sin(bt*Math.PI/2)+g;for(let Bt=0,Ee=k.length;Bt<Ee;Bt++){let ee=q(k[Bt],Y[Bt],Wt);ie(ee.x,ee.y,u+Et)}for(let Bt=0,Ee=L.length;Bt<Ee;Bt++){let ee=L[Bt];nt=j[Bt];for(let Ne=0,Ue=ee.length;Ne<Ue;Ne++){let ke=q(ee[Ne],nt[Ne],Wt);E?ie(ke.x,ke.y+w[h-1].y,w[h-1].x+Et):ie(ke.x,ke.y,u+Et)}}}Vt(),ne();function Vt(){let ht=s.length/3;if(d){let bt=0,Et=V*bt;for(let Wt=0;Wt<st;Wt++){let Bt=qt[Wt];nn(Bt[2]+Et,Bt[1]+Et,Bt[0]+Et)}bt=h+m*2,Et=V*bt;for(let Wt=0;Wt<st;Wt++){let Bt=qt[Wt];nn(Bt[0]+Et,Bt[1]+Et,Bt[2]+Et)}}else{for(let bt=0;bt<st;bt++){let Et=qt[bt];nn(Et[2],Et[1],Et[0])}for(let bt=0;bt<st;bt++){let Et=qt[bt];nn(Et[0]+V*h,Et[1]+V*h,Et[2]+V*h)}}i.addGroup(ht,s.length/3-ht,0)}function ne(){let ht=s.length/3,bt=0;Ft(k,bt),bt+=k.length;for(let Et=0,Wt=L.length;Et<Wt;Et++){let Bt=L[Et];Ft(Bt,bt),bt+=Bt.length}i.addGroup(ht,s.length/3-ht,1)}function Ft(ht,bt){let Et=ht.length;for(;--Et>=0;){let Wt=Et,Bt=Et-1;Bt<0&&(Bt=ht.length-1);for(let Ee=0,ee=h+m*2;Ee<ee;Ee++){let Ne=V*Ee,Ue=V*(Ee+1),ke=bt+Wt+Ne,W=bt+Bt+Ne,An=bt+Bt+Ue,Ie=bt+Wt+Ue;rt(ke,W,An,Ie)}}}function ie(ht,bt,Et){l.push(ht),l.push(bt),l.push(Et)}function nn(ht,bt,Et){Qt(ht),Qt(bt),Qt(Et);let Wt=s.length/3,Bt=M.generateTopUV(i,s,Wt-3,Wt-2,Wt-1);he(Bt[0]),he(Bt[1]),he(Bt[2])}function rt(ht,bt,Et,Wt){Qt(ht),Qt(bt),Qt(Wt),Qt(bt),Qt(Et),Qt(Wt);let Bt=s.length/3,Ee=M.generateSideWallUV(i,s,Bt-6,Bt-3,Bt-2,Bt-1);he(Ee[0]),he(Ee[1]),he(Ee[3]),he(Ee[1]),he(Ee[2]),he(Ee[3])}function Qt(ht){s.push(l[ht*3+0]),s.push(l[ht*3+1]),s.push(l[ht*3+2])}function he(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Sx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new lh[s.type]().fromJSON(s)),new n(i,t.options)}},wx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],g=t[r*3],m=t[r*3+1],x=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-u),new lt(d,1-p),new lt(g,1-x)]:[new lt(a,1-l),new lt(h,1-u),new lt(f,1-p),new lt(m,1-x)]}};function Sx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Li=class n extends sh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},qr=class n extends je{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new F,d=new lt,f=new F,p=new F,g=new F,m=0,x=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,x=t[M+1].y-t[M].y,f.x=x*1,f.y=-m,f.z=x*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=t[M+1].x-t[M].x,x=t[M+1].y-t[M].y,f.x=x*1,f.y=-m,f.z=x*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(p)}for(let M=0;M<=e;M++){let w=i+M*h*s,E=Math.sin(w),R=Math.cos(w);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*E,u.y=t[S].y,u.z=t[S].x*R,o.push(u.x,u.y,u.z),d.x=M/e,d.y=S/(t.length-1),a.push(d.x,d.y);let _=l[3*S+0]*E,v=l[3*S+1],C=l[3*S+0]*R;c.push(_,v,C)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){let E=w+M*t.length,R=E,S=E+t.length,_=E+t.length+1,v=E+1;r.push(R,S,v),r.push(_,v,S)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var be=class n extends je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],g=[],m=[];for(let x=0;x<h;x++){let M=x*d-o;for(let w=0;w<c;w++){let E=w*u-r;p.push(E,-M,0),g.push(0,0,1),m.push(w/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let M=0;M<a;M++){let w=M+c*x,E=M+c*(x+1),R=M+1+c*(x+1),S=M+1+c*x;f.push(w,E,S),f.push(E,R,S)}this.setIndex(f),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(g,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var il=class n extends je{constructor(t=new ui([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;us.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,x=p.length;m<x;m++){let M=p[m];us.isClockWise(M)===!0&&(p[m]=M.reverse())}let g=us.triangulateShape(f,p);for(let m=0,x=p.length;m<x;m++){let M=p[m];f=f.concat(M)}for(let m=0,x=f.length;m<x;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,x=g.length;m<x;m++){let M=g[m],w=M[0]+u,E=M[1]+u,R=M[2]+u;i.push(w,E,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Tx(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Tx(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var ge=class n extends je{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,d=new F,f=[],p=[],g=[],m=[];for(let x=0;x<=i;x++){let M=[],w=x/i,E=o+w*a,R=t*Math.cos(E),S=Math.sqrt(t*t-R*R),_=0;x===0&&o===0?_=.5/e:x===i&&l===Math.PI&&(_=-.5/e);for(let v=0;v<=e;v++){let C=v/e,P=s+C*r;u.x=-S*Math.cos(P),u.y=R,u.z=S*Math.sin(P),p.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(C+_,1-w),M.push(c++)}h.push(M)}for(let x=0;x<i;x++)for(let M=0;M<e;M++){let w=h[x][M+1],E=h[x][M],R=h[x+1][M],S=h[x+1][M+1];(x!==0||o>0)&&f.push(w,E,S),(x!==i-1||l<Math.PI)&&f.push(E,R,S)}this.setIndex(f),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(g,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $e=class n extends je{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new F,f=new F,p=new F;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let x=0;x<=s;x++){let M=x/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(x/s),u.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=s;m++){let x=(s+1)*g+m-1,M=(s+1)*(g-1)+m-1,w=(s+1)*(g-1)+m,E=(s+1)*g+m;l.push(x,M,E),l.push(M,w,E)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Yr=class n extends je{constructor(t=new Qa(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,l=new F,c=new lt,h=new F,u=[],d=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function g(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),M(),x()}function m(w){h=t.getPointAt(w/e,h);let E=o.normals[w],R=o.binormals[w];for(let S=0;S<=s;S++){let _=S/s*Math.PI*2,v=Math.sin(_),C=-Math.cos(_);l.x=C*E.x+v*R.x,l.y=C*E.y+v*R.y,l.z=C*E.z+v*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let w=1;w<=e;w++)for(let E=1;E<=s;E++){let R=(s+1)*(w-1)+(E-1),S=(s+1)*w+(E-1),_=(s+1)*w+E,v=(s+1)*(w-1)+E;p.push(R,S,v),p.push(S,_,v)}}function M(){for(let w=0;w<=e;w++)for(let E=0;E<=s;E++)c.x=w/e,c.y=E/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new lh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function jr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Ap(s))s.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ap(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ti(n){let t={};for(let e=0;e<n.length;e++){let i=jr(n[e]);for(let s in i)t[s]=i[s]}return t}function Ap(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rx(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function mf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}var Ui={clone:jr,merge:ti},Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=Rx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Xt().setHex(s.value);break;case"v2":this.uniforms[i].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ln().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ve().fromArray(s.value);break;case"m4":this.uniforms[i].value=new $t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},zo=class extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},te=class extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Di=class extends te{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Gr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Gr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var sl=class extends ji{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var rl=class extends ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Eh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vo=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hh=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ao(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Oc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var hr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},uh=class extends hr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hd,endingEnd:Hd}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kd:r=t,a=2*e-i;break;case Gd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kd:o=t,l=2*i-e;break;case Gd:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),g=p*p,m=g*p,x=-d*m+2*d*g-d*p,M=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,w=(-1-f)*m+(1.5+f)*g+.5*p,E=f*m-f*g;for(let R=0;R!==a;++R)r[R]=x*o[h+R]+M*o[c+R]+w*o[l+R]+E*o[u+R];return r}},dh=class extends hr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},fh=class extends hr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ph=class extends hr{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(s-e),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],x=f*d+p*2,M=u[x],w=u[x+1],E=t*d+p*2,R=h[E],S=h[E+1],_=Ix(i,e,M,R,s);r[p]=Sm(_,g,w,S,m)}return r}};function Sm(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Px(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ix(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Sm(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Px(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ni=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ao(e,this.TimeBufferType),this.values=Ao(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ao(t.times,Array),values:Ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Oc(t.settings)&&(i.settings={inTangents:Ao(t.settings.inTangents,Array),outTangents:Ao(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ph(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ua:e=this.InterpolantFactoryMethodDiscrete;break;case Kc:e=this.InterpolantFactoryMethodLinear;break;case Gc:e=this.InterpolantFactoryMethodSmooth;break;case Od:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return pe("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return Od}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Oc(this.settings)&&(Cp(this.settings.inTangents,t),Cp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Oc(this.settings)&&(Pp(this.settings.inTangents,t),Pp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(me("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(me("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){me("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){me("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&D1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){me("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Gc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let g=e[u+p];if(g!==e[d+p]||g!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Oc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Pp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=Kc;var ur=class extends Ni{constructor(t,e,i){super(t,e,i)}};ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Ua;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var mh=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}};mh.prototype.ValueTypeName="color";var gh=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}};gh.prototype.ValueTypeName="number";var xh=class extends hr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},ol=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new xh(this.times,this.values,this.getValueSize(),t)}};ol.prototype.ValueTypeName="quaternion";ol.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends Ni{constructor(t,e,i){super(t,e,i)}};dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Ua;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var yh=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}};yh.prototype.ValueTypeName="vector";var Mh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tm=new Mh,vh=class{constructor(t){this.manager=t!==void 0?t:Tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};vh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wo=class extends rn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$r=class extends Wo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Bd=new $t,Ip=new F,Lp=new F,al=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ip.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ip),Lp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Bd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Bd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Do||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Bd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hc=new F,kc=new _n,cs=new F,ll=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hc,kc,cs),cs.x===1&&cs.y===1&&cs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,kc,cs.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Hc,kc,cs),cs.x===1&&cs.y===1&&cs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,kc,cs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rr=new F,Dp=new lt,Np=new lt,kn=class extends ll{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rr.x,rr.y).multiplyScalar(-t/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-t/rr.z)}getViewSize(t,e){return this.getViewBounds(t,Dp,Np),e.subVectors(Np,Dp)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dd*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xd=class extends al{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}},tn=class extends Wo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zr=class extends ll{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qd=class extends al{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends Wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new qd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Co=-90,Po=1,Xo=class extends rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kn(Co,Po,t,e);s.layers=this.layers,this.add(s);let r=new kn(Co,Po,t,e);r.layers=this.layers,this.add(r);let o=new kn(Co,Po,t,e);o.layers=this.layers,this.add(o);let a=new kn(Co,Po,t,e);a.layers=this.layers,this.add(a);let l=new kn(Co,Po,t,e);l.layers=this.layers,this.add(l);let c=new kn(Co,Po,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Do)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=g,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},_h=class extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},cl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Lx.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Lx(){this._document.hidden===!1&&this.reset()}var gf="\\[\\]\\.:\\/",Dx=new RegExp("["+gf+"]","g"),xf="[^"+gf+"]",Nx="[^"+gf.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",xf),Fx=/(WCOD+)?/.source.replace("WCOD",Nx),Bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xf),Ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xf),Hx=new RegExp("^"+Ux+Fx+Bx+Ox+"$"),kx=["material","materials","bones","map"],Yd=class{constructor(t,e,i){let s=i||on.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},on=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dx,"")}static parseTrackName(t){let e=Hx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);kx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){me("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){me("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){me("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){me("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){me("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;me("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};on.Composite=Yd;on.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};on.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};on.prototype.GetterByBindingType=[on.prototype._getValue_direct,on.prototype._getValue_array,on.prototype._getValue_arrayElement,on.prototype._getValue_toArray];on.prototype.SetterByBindingTypeAndVersioning=[[on.prototype._setValue_direct,on.prototype._setValue_direct_setNeedsUpdate,on.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[on.prototype._setValue_array,on.prototype._setValue_array_setNeedsUpdate,on.prototype._setValue_array_setMatrixWorldNeedsUpdate],[on.prototype._setValue_arrayElement,on.prototype._setValue_arrayElement_setNeedsUpdate,on.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[on.prototype._setValue_fromArray,on.prototype._setValue_fromArray_setNeedsUpdate,on.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AE=new Float32Array(1);var Ef=class Ef{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ef.prototype.isMatrix2=!0;var $d=Ef;function yf(n,t,e,i){let s=Gx(i);switch(e){case of:return n*t;case $o:return n*t/s.components*s.byteLength;case Ph:return n*t/s.components*s.byteLength;case yr:return n*t*2/s.components*s.byteLength;case Ih:return n*t*2/s.components*s.byteLength;case af:return n*t*3/s.components*s.byteLength;case is:return n*t*4/s.components*s.byteLength;case Lh:return n*t*4/s.components*s.byteLength;case yl:case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vl:case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nh:case Fh:return Math.max(n,16)*Math.max(t,8)/4;case Dh:case Uh:return Math.max(n,8)*Math.max(t,8)/2;case Bh:case Oh:case kh:case Gh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hh:case bl:case zh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $h:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case jh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case tu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case eu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case nu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case iu:case su:case ru:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ou:case au:return Math.ceil(n/4)*Math.ceil(t/4)*8;case El:case lu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gx(n){switch(n){case bi:case ef:return{byteLength:1,components:1};case Yo:case nf:case Ln:return{byteLength:2,components:1};case Ah:case Ch:return{byteLength:2,components:4};case ns:case Rh:case qi:return{byteLength:4,components:1};case sf:case rf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $m(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Yx(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],g=u[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let g=u[f];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var $x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zx=`#ifdef USE_ALPHAHASH
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
#endif`,Jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t2=`#ifdef USE_AOMAP
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
#endif`,e2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,i2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a2=`#ifdef USE_IRIDESCENCE
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
#endif`,l2=`#ifdef USE_BUMPMAP
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
#endif`,c2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,h2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,x2=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,y2=`vec3 transformedNormal = objectNormal;
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
#endif`,M2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E2="gl_FragColor = linearToOutputTexel( gl_FragColor );",w2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,T2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,R2=`#ifdef USE_ENVMAP
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
#endif`,A2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N2=`#ifdef USE_GRADIENTMAP
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
}`,U2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O2=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,H2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,k2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,X2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q2=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z2=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,J2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iy=`#if defined( USE_POINTS_UV )
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
#endif`,sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ay=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gy=`#ifdef USE_NORMALMAP
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
#endif`,xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,by=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Ly=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fy=`#ifdef USE_SKINNING
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
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ky=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gy=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zy=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,tM=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eM=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,nM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,lM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cM=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,hM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,uM=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,dM=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,fM=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,pM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mM=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,gM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xM=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,yM=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,MM=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,vM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_M=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,bM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,wM=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,SM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,TM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Re={alphahash_fragment:$x,alphahash_pars_fragment:Zx,alphamap_fragment:Jx,alphamap_pars_fragment:Kx,alphatest_fragment:Qx,alphatest_pars_fragment:jx,aomap_fragment:t2,aomap_pars_fragment:e2,batching_pars_vertex:n2,batching_vertex:i2,begin_vertex:s2,beginnormal_vertex:r2,bsdfs:o2,iridescence_fragment:a2,bumpmap_pars_fragment:l2,clipping_planes_fragment:c2,clipping_planes_pars_fragment:h2,clipping_planes_pars_vertex:u2,clipping_planes_vertex:d2,color_fragment:f2,color_pars_fragment:p2,color_pars_vertex:m2,color_vertex:g2,common:x2,defaultnormal_vertex:y2,displacementmap_pars_vertex:M2,displacementmap_vertex:v2,emissivemap_fragment:_2,emissivemap_pars_fragment:b2,colorspace_fragment:E2,colorspace_pars_fragment:w2,envmap_fragment:S2,envmap_common_pars_fragment:T2,envmap_pars_fragment:R2,envmap_pars_vertex:A2,envmap_physical_pars_fragment:H2,envmap_vertex:C2,fog_vertex:P2,fog_pars_vertex:I2,fog_fragment:L2,fog_pars_fragment:D2,gradientmap_pars_fragment:N2,lightmap_pars_fragment:U2,lights_lambert_fragment:F2,lights_lambert_pars_fragment:B2,lights_pars_begin:O2,lights_toon_fragment:k2,lights_toon_pars_fragment:G2,lights_phong_fragment:z2,lights_phong_pars_fragment:V2,lights_physical_fragment:W2,lights_physical_pars_fragment:X2,lights_fragment_begin:q2,lights_fragment_maps:Y2,lights_fragment_end:$2,lightprobes_pars_fragment:Z2,logdepthbuf_fragment:J2,logdepthbuf_pars_fragment:K2,logdepthbuf_pars_vertex:Q2,logdepthbuf_vertex:j2,map_fragment:ty,map_pars_fragment:ey,map_particle_fragment:ny,map_particle_pars_fragment:iy,metalnessmap_fragment:sy,metalnessmap_pars_fragment:ry,morphinstance_vertex:oy,morphcolor_vertex:ay,morphnormal_vertex:ly,morphtarget_pars_vertex:cy,morphtarget_vertex:hy,normal_fragment_begin:uy,normal_fragment_maps:dy,normal_pars_fragment:fy,normal_pars_vertex:py,normal_vertex:my,normalmap_pars_fragment:gy,clearcoat_normal_fragment_begin:xy,clearcoat_normal_fragment_maps:yy,clearcoat_pars_fragment:My,iridescence_pars_fragment:vy,opaque_fragment:_y,packing:by,premultiplied_alpha_fragment:Ey,project_vertex:wy,dithering_fragment:Sy,dithering_pars_fragment:Ty,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Ay,shadowmap_pars_fragment:Cy,shadowmap_pars_vertex:Py,shadowmap_vertex:Iy,shadowmask_pars_fragment:Ly,skinbase_vertex:Dy,skinning_pars_vertex:Ny,skinning_vertex:Uy,skinnormal_vertex:Fy,specularmap_fragment:By,specularmap_pars_fragment:Oy,tonemapping_fragment:Hy,tonemapping_pars_fragment:ky,transmission_fragment:Gy,transmission_pars_fragment:zy,uv_pars_fragment:Vy,uv_pars_vertex:Wy,uv_vertex:Xy,worldpos_vertex:qy,background_vert:Yy,background_frag:$y,backgroundCube_vert:Zy,backgroundCube_frag:Jy,cube_vert:Ky,cube_frag:Qy,depth_vert:jy,depth_frag:tM,distance_vert:eM,distance_frag:nM,equirect_vert:iM,equirect_frag:sM,linedashed_vert:rM,linedashed_frag:oM,meshbasic_vert:aM,meshbasic_frag:lM,meshlambert_vert:cM,meshlambert_frag:hM,meshmatcap_vert:uM,meshmatcap_frag:dM,meshnormal_vert:fM,meshnormal_frag:pM,meshphong_vert:mM,meshphong_frag:gM,meshphysical_vert:xM,meshphysical_frag:yM,meshtoon_vert:MM,meshtoon_frag:vM,points_vert:_M,points_frag:bM,shadow_vert:EM,shadow_frag:wM,sprite_vert:SM,sprite_frag:TM},Ot={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Ms={basic:{uniforms:ti([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ti([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ti([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ti([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ti([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ti([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ti([Ot.points,Ot.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ti([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ti([Ot.common,Ot.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ti([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:ti([Ot.sprite,Ot.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distance:{uniforms:ti([Ot.common,Ot.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distance_vert,fragmentShader:Re.distance_frag},shadow:{uniforms:ti([Ot.lights,Ot.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ms.physical={uniforms:ti([Ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};var hu={r:0,b:0,g:0},RM=new $t,Zm=new ve;Zm.set(-1,0,0,0,1,0,0,0,1);function AM(n,t,e,i,s,r){let o=new Xt(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let E=M.backgroundBlurriness>0;w=t.get(w,E)}return w}function p(M){let w=!1,E=f(M);E===null?m(o,a):E&&E.isColor&&(m(E,1),w=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,w){let E=f(w);E&&E.isCubeTexture?(c===void 0&&(c=new D(new fe(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:jr(Ms.backgroundCube.uniforms),vertexShader:Ms.backgroundCube.vertexShader,fragmentShader:Ms.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(RM.makeRotationFromEuler(w.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zm),c.material.toneMapped=Le.getTransfer(E.colorSpace)!==Ge,(h!==E||u!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new D(new be(2,2),new cn({name:"BackgroundMaterial",uniforms:jr(Ms.background.uniforms),vertexShader:Ms.background.vertexShader,fragmentShader:Ms.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Le.getTransfer(E.colorSpace)!==Ge,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,u=E.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(hu,mf(n)),e.buffers.color.setClear(hu.r,hu.g,hu.b,w,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:g,dispose:x}}function CM(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(L,B,U,I,k){let q=!1,V=u(L,I,U,B);r!==V&&(r=V,c(r.object)),q=f(L,I,U,k),q&&p(L,I,U,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(L,B,U,I),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function u(L,B,U,I){let k=I.wireframe===!0,q=i[B.id];q===void 0&&(q={},i[B.id]=q);let V=L.isInstancedMesh===!0?L.id:0,Q=q[V];Q===void 0&&(Q={},q[V]=Q);let Y=Q[U.id];Y===void 0&&(Y={},Q[U.id]=Y);let j=Y[k];return j===void 0&&(j=d(l()),Y[k]=j),j}function d(L){let B=[],U=[],I=[];for(let k=0;k<e;k++)B[k]=0,U[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:U,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,B,U,I){let k=r.attributes,q=B.attributes,V=0,Q=U.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let nt=k[Y],Mt=q[Y];if(Mt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Mt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Mt=L.instanceColor)),nt===void 0||nt.attribute!==Mt||Mt&&nt.data!==Mt.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function p(L,B,U,I){let k={},q=B.attributes,V=0,Q=U.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let nt=q[Y];nt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));let Mt={};Mt.attribute=nt,nt&&nt.data&&(Mt.data=nt.data),k[Y]=Mt,V++}r.attributes=k,r.attributesNum=V,r.index=I}function g(){let L=r.newAttributes;for(let B=0,U=L.length;B<U;B++)L[B]=0}function m(L){x(L,0)}function x(L,B){let U=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;U[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),k[L]!==B&&(n.vertexAttribDivisor(L,B),k[L]=B)}function M(){let L=r.newAttributes,B=r.enabledAttributes;for(let U=0,I=B.length;U<I;U++)B[U]!==L[U]&&(n.disableVertexAttribArray(U),B[U]=0)}function w(L,B,U,I,k,q,V){V===!0?n.vertexAttribIPointer(L,B,U,k,q):n.vertexAttribPointer(L,B,U,I,k,q)}function E(L,B,U,I){g();let k=I.attributes,q=U.getAttributes(),V=B.defaultAttributeValues;for(let Q in q){let Y=q[Q];if(Y.location>=0){let j=k[Q];if(j===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){let nt=j.normalized,Mt=j.itemSize,qt=t.get(j);if(qt===void 0)continue;let st=qt.buffer,Ut=qt.type,Vt=qt.bytesPerElement,ne=Ut===n.INT||Ut===n.UNSIGNED_INT||j.gpuType===Rh;if(j.isInterleavedBufferAttribute){let Ft=j.data,ie=Ft.isInterleavedBuffer===!0?Ft.stride:Ft.itemSize,nn=j.offset;if(Ft.isInstancedInterleavedBuffer||Ft.isInstancedBufferAttribute){for(let rt=0;rt<Y.locationSize;rt++)x(Y.location+rt,Ft.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let rt=0;rt<Y.locationSize;rt++)m(Y.location+rt);n.bindBuffer(n.ARRAY_BUFFER,st);for(let rt=0;rt<Y.locationSize;rt++)w(Y.location+rt,Mt/Y.locationSize,Ut,nt,ie*Vt,(nn+Mt/Y.locationSize*rt)*Vt,ne)}else{if(j.isInstancedBufferAttribute){for(let Ft=0;Ft<Y.locationSize;Ft++)x(Y.location+Ft,j.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ft=0;Ft<Y.locationSize;Ft++)m(Y.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Ft=0;Ft<Y.locationSize;Ft++)w(Y.location+Ft,Mt/Y.locationSize,Ut,nt,Mt*Vt,Mt/Y.locationSize*Ft*Vt,ne)}}else if(V!==void 0){let nt=V[Q];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(Y.location,nt);break;case 3:n.vertexAttrib3fv(Y.location,nt);break;case 4:n.vertexAttrib4fv(Y.location,nt);break;default:n.vertexAttrib1fv(Y.location,nt)}}}}M()}function R(){C();for(let L in i){let B=i[L];for(let U in B){let I=B[U];for(let k in I){let q=I[k];for(let V in q)h(q[V].object),delete q[V];delete I[k]}}delete i[L]}}function S(L){if(i[L.id]===void 0)return;let B=i[L.id];for(let U in B){let I=B[U];for(let k in I){let q=I[k];for(let V in q)h(q[V].object),delete q[V];delete I[k]}}delete i[L.id]}function _(L){for(let B in i){let U=i[B];for(let I in U){let k=U[I];if(k[L.id]===void 0)continue;let q=k[L.id];for(let V in q)h(q[V].object),delete q[V];delete k[L.id]}}}function v(L){for(let B in i){let U=i[B],I=L.isInstancedMesh===!0?L.id:0,k=U[I];if(k!==void 0){for(let q in k){let V=k[q];for(let Q in V)h(V[Q].object),delete V[Q];delete k[q]}delete U[I],Object.keys(U).length===0&&delete i[B]}}}function C(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function PM(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function IM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==is&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let v=_===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==bi&&_!==qi&&!v&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:E,maxSamples:R,samples:S}}function LM(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Qi,a=new ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,x=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,w=M*4,E=x.clippingState||null;l.value=E,E=h(p,d,w,f);for(let R=0;R!==w;++R)E[R]=e[R];x.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let x=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<x)&&(m=new Float32Array(x));for(let w=0,E=f;w!==g;++w,E+=4)o.copy(u[w]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}var Tl=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new qa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fe(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:es});r.uniforms.tEquirect.value=e;let o=new D(s,r),a=e.minFilter;return e.minFilter===Ws&&(e.minFilter=ci),new Xo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Rm=256,DM=3,NM=20,Jm=256,Km=16,UM=3,FM=new F,BM=new Xt,Ko=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xo(1,10,null),this._boxMesh=new D(new fe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=FM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(t.background=l.getClearColor(BM));let m=new Xo(i,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=g,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Rm,gm(t))}_fromTexture(t,e){t.mapping===Kr||t.mapping===qo?this._setSize(t.image.length===0?Rm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Am(t,!1,!1),i=Math.log2(t)-DM;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Am(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Kr||t.mapping===qo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=OM(),this._integrationMaterial=HM());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Km);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-UM)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Jm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=kM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Am(n,t,e){return new Tl(n,{minFilter:Ws,generateMipmaps:t,type:Ln,colorSpace:Fa,depthBuffer:e})}function Al(n,t,e){return new cn({name:n,uniforms:t,vertexShader:Re.cube_vert,fragmentShader:e,side:En,blending:es,depthTest:!1,depthWrite:!1})}function OM(){return Al("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function HM(){return Al("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Km}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kM(){return Al("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${NM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Cm(){return Al("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Pm(){return Al("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function GM(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===wh||f===Sh)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let g=new Tl(p.height);return g.fromEquirectangularTexture(n,d),t.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===wh||f===Sh,g=f===Kr||f===qo;if(p||g){let m=e.get(d),x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Ko(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Ko(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===wh?d.mapping=Kr:f===Sh&&(d.mapping=qo),d}function l(d){let f=0,p=6;for(let g=0;g<p;g++)d[g]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function zM(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Gr("WebGLRenderer: "+i+" extension not supported."),s}}}function VM(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let g=r.get(p);g&&(t.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",a),s[g.id]=new WeakRef(g),o.register(g,g.id,g),e.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)t.update(g[m],n.ARRAY_BUFFER)}function u(p){let g=p.index,m=p.attributes.position,x=0;if(m===void 0)return;let M=g!==null?g.array.length:m.array.length/3-1,w=m.count>=65535?Wa:Va,E=new w(Math.ceil(M/3)*6,1),R=E.array;if(g!==null){let _=g.array;x=g.version;for(let v=0,C=0;v<M;v+=3){let P=_[v+0],L=_[v+1],B=_[v+2];R[C++]=P,R[C++]=L,R[C++]=L,R[C++]=B,R[C++]=B,R[C++]=P}}else{x=m.version;for(let _=0,v=0;_<M;_+=3){let C=_+0,P=_+1,L=_+2;R[v++]=C,R[v++]=P,R[v++]=P,R[v++]=L,R[v++]=L,R[v++]=C}}E.version=x;let S=r.get(p);S&&t.remove(S),r.set(p,E)}function d(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let g=s[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function WM(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];e.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function XM(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:me("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function qM(n,t,e){let i=new WeakMap,s=new ln;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let C=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),g===!0&&(w=3);let E=a.attributes.position.count*w,R=1;E>t.maxTextureSize&&(R=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let S=new Float32Array(E*R*4*u),_=new ka(S,E,R,u);_.type=qi,_.needsUpdate=!0;let v=w*4;for(let P=0;P<u;P++){let L=m[P],B=x[P],U=M[P],I=E*R*4*P;for(let k=0;k<L.count;k++){let q=k*v;f===!0&&(s.fromBufferAttribute(L,k),S[I+q+0]=s.x,S[I+q+1]=s.y,S[I+q+2]=s.z,S[I+q+3]=0),p===!0&&(s.fromBufferAttribute(B,k),S[I+q+4]=s.x,S[I+q+5]=s.y,S[I+q+6]=s.z,S[I+q+7]=0),g===!0&&(s.fromBufferAttribute(U,k),S[I+q+8]=s.x,S[I+q+9]=s.y,S[I+q+10]=s.z,S[I+q+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new lt(E,R)},i.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function YM(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var $M={[ul]:"LINEAR_TONE_MAPPING",[dl]:"REINHARD_TONE_MAPPING",[fl]:"CINEON_TONE_MAPPING",[xr]:"ACES_FILMIC_TONE_MAPPING",[ml]:"AGX_TONE_MAPPING",[gl]:"NEUTRAL_TONE_MAPPING",[pl]:"CUSTOM_TONE_MAPPING"};function ZM(n,t,e,i,s,r){let o=new bn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new je;h.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ce([0,2,0,0,2,0],2));let u=new zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new D(h,u),f=new Zr(-1,1,1,-1,0,1),p=null,g=null,m=!1,x,M=null,w=[],E=!1;this.setSize=function(R,S){o.setSize(R,S),a!==null&&a.setSize(R,S),l!==null&&l.setSize(R,S);for(let _=0;_<w.length;_++){let v=w[_];v.setSize&&v.setSize(R,S)}},this.setEffects=function(R){w=R,E=w.length>0&&w[0].isRenderPass===!0;let S=o.width,_=o.height;w.length>0&&a===null&&(a=new bn(S,_,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new bn(S,_,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&w.some(C=>C.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new zs(S,_),r===!0&&(c.format=Xs,c.type=Qr)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let C=0;C<w.length;C++){let P=w[C];P.setSize&&P.setSize(S,_),v&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,S){if(m||R.toneMapping===xs&&w.length===0)return!1;if(M=S,S!==null){let _=S.width,v=S.height;(o.width!==_||o.height!==v)&&this.setSize(_,v)}return E===!1&&R.setRenderTarget(o),x=R.toneMapping,R.toneMapping=xs,!0},this.hasRenderPass=function(){return E},this.end=function(R,S){R.toneMapping=x,m=!0;let _=o,v=a;for(let C=0;C<w.length;C++){let P=w[C];P.enabled!==!1&&(P.render(R,v,_,S),P.needsSwap!==!1&&(_=v,v=v===a?l:a))}if(p!==R.outputColorSpace||g!==R.toneMapping){p=R.outputColorSpace,g=R.toneMapping,u.defines={},Le.getTransfer(p)===Ge&&(u.defines.SRGB_TRANSFER="");let C=$M[g];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(M),R.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Qm=new hi,jm=new zs(1,1),tg=new Ya(1),eg=new ka,ng=new eh,ig=new qa,Im=[],Lm=[],Dm=new Float32Array(16),Nm=new Float32Array(9),Um=new Float32Array(4);function Qo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Im[s];if(r===void 0&&(r=new Float32Array(s),Im[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Dn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function du(n,t){let e=Lm[t];e===void 0&&(e=new Int32Array(t),Lm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function JM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function KM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;n.uniform2fv(this.addr,t),Nn(e,t)}}function QM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Dn(e,t))return;n.uniform3fv(this.addr,t),Nn(e,t)}}function jM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;n.uniform4fv(this.addr,t),Nn(e,t)}}function tv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Dn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Nn(e,t)}else{if(Dn(e,i))return;Um.set(i),n.uniformMatrix2fv(this.addr,!1,Um),Nn(e,i)}}function ev(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Dn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Nn(e,t)}else{if(Dn(e,i))return;Nm.set(i),n.uniformMatrix3fv(this.addr,!1,Nm),Nn(e,i)}}function nv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Dn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Nn(e,t)}else{if(Dn(e,i))return;Dm.set(i),n.uniformMatrix4fv(this.addr,!1,Dm),Nn(e,i)}}function iv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;n.uniform2iv(this.addr,t),Nn(e,t)}}function rv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dn(e,t))return;n.uniform3iv(this.addr,t),Nn(e,t)}}function ov(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;n.uniform4iv(this.addr,t),Nn(e,t)}}function av(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;n.uniform2uiv(this.addr,t),Nn(e,t)}}function cv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dn(e,t))return;n.uniform3uiv(this.addr,t),Nn(e,t)}}function hv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;n.uniform4uiv(this.addr,t),Nn(e,t)}}function fu(n){return n.version===0&&(n.compareFunction=uf,n.needsUpdate=!0),n}function uv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=fu(jm):r=Qm,e.setTexture2D(t||r,s)}function dv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ng,s)}function fv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=fu(tg):r=ig,e.setTextureCube(t||r,s)}function pv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||eg,s)}function mv(n){switch(n){case 5126:return JM;case 35664:return KM;case 35665:return QM;case 35666:return jM;case 35674:return tv;case 35675:return ev;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return sv;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return av;case 36294:return lv;case 36295:return cv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}function gv(n,t){n.uniform1fv(this.addr,t)}function xv(n,t){let e=Qo(t,this.size,2);n.uniform2fv(this.addr,e)}function yv(n,t){let e=Qo(t,this.size,3);n.uniform3fv(this.addr,e)}function Mv(n,t){let e=Qo(t,this.size,4);n.uniform4fv(this.addr,e)}function vv(n,t){let e=Qo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function _v(n,t){let e=Qo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function bv(n,t){let e=Qo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ev(n,t){n.uniform1iv(this.addr,t)}function wv(n,t){n.uniform2iv(this.addr,t)}function Sv(n,t){n.uniform3iv(this.addr,t)}function Tv(n,t){n.uniform4iv(this.addr,t)}function Rv(n,t){n.uniform1uiv(this.addr,t)}function Av(n,t){n.uniform2uiv(this.addr,t)}function Cv(n,t){n.uniform3uiv(this.addr,t)}function Pv(n,t){n.uniform4uiv(this.addr,t)}function Iv(n,t,e){let i=this.cache,s=t.length,r=du(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=fu(jm):o=Qm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Lv(n,t,e){let i=this.cache,s=t.length,r=du(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ng,r[o])}function Dv(n,t,e){let i=this.cache,s=t.length,r=du(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=fu(tg):o=ig;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Nv(n,t,e){let i=this.cache,s=t.length,r=du(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||eg,r[o])}function Uv(n){switch(n){case 5126:return gv;case 35664:return xv;case 35665:return yv;case 35666:return Mv;case 35674:return vv;case 35675:return _v;case 35676:return bv;case 5124:case 35670:return Ev;case 35667:case 35671:return wv;case 35668:case 35672:return Sv;case 35669:case 35673:return Tv;case 5125:return Rv;case 36294:return Av;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}var Tf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mv(e.type)}},Rf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uv(e.type)}},Af=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},wf=/(\w+)(\])?(\[|\.)?/g;function Fm(n,t){n.seq.push(t),n.map[t.id]=t}function Fv(n,t,e){let i=n.name,s=i.length;for(wf.lastIndex=0;;){let r=wf.exec(i),o=wf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fm(e,c===void 0?new Tf(a,n,t):new Rf(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Af(a),Fm(e,u)),e=u}}}var Jo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Fv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Bm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Bv=37297,Ov=0;function Hv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Om=new ve;function kv(n){Le._getMatrix(Om,Le.workingColorSpace,n);let t=`mat3( ${Om.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(n)){case Ba:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Hm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Hv(n.getShaderSource(t),a)}else return r}function Gv(n,t){let e=kv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var zv={[ul]:"Linear",[dl]:"Reinhard",[fl]:"Cineon",[xr]:"ACESFilmic",[ml]:"AgX",[gl]:"Neutral",[pl]:"Custom"};function Vv(n,t){let e=zv[t];return e===void 0?(pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uu=new F;function Wv(){Le.getLuminanceCoefficients(uu);let n=uu.x.toFixed(4),t=uu.y.toFixed(4),e=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function qv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Yv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Sl(n){return n!==""}function km(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Gm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(n){return n.replace($v,Zv)}function Zv(n,t){let e=Re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Cf(e)}var Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(n){return n.replace(Jv,Kv)}function Kv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vm(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Qv={[pr]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function jv(n){return Qv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var t_={[qo]:"ENVMAP_MODE_REFRACTION"};function e_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":t_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n_={[Eh]:"ENVMAP_BLENDING_MULTIPLY",[em]:"ENVMAP_BLENDING_MIX",[nm]:"ENVMAP_BLENDING_ADD"};function i_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":n_[n.combine]||"ENVMAP_BLENDING_NONE"}function s_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=jv(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=e_(e),u=i_(e),d=Xv(e),f=qv(r),p=s.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Sl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Sl).join(`
`),m.length>0&&(m+=`
`)):(g=[Vm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),m=[Vm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xs?"#define TONE_MAPPING":"",e.toneMapping!==xs?Re.tonemapping_pars_fragment:"",e.toneMapping!==xs?Vv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,Gv("linearToOutputTexel",e.outputColorSpace),Wv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sl).join(`
`)),o=Cf(o),o=km(o,e),o=Gm(o,e),a=Cf(a),a=km(a,e),a=Gm(a,e),o=zm(o),a=zm(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=x+g+o,w=x+m+a,E=Bm(s,s.VERTEX_SHADER,M),R=Bm(s,s.FRAGMENT_SHADER,w);s.attachShader(p,E),s.attachShader(p,R),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(P){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(p)||"",B=s.getShaderInfoLog(E)||"",U=s.getShaderInfoLog(R)||"",I=L.trim(),k=B.trim(),q=U.trim(),V=!0,Q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,E,R);else{let Y=Hm(s,E,"vertex"),j=Hm(s,R,"fragment");me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+Y+`
`+j)}else I!==""?pe("WebGLProgram: Program Info Log:",I):(k===""||q==="")&&(Q=!1);Q&&(P.diagnostics={runnable:V,programLog:I,vertexShader:{log:k,prefix:g},fragmentShader:{log:q,prefix:m}})}s.deleteShader(E),s.deleteShader(R),_=new Jo(s,p),v=Yv(s,p)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,Bv)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ov++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=R,this}var r_=0,Pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new If(t),e.set(t,i)),i}},If=class{constructor(t){this.id=r_++,this.code=t,this.usedTimes=0}};function o_(n){return n===yr||n===bl||n===El}function a_(n,t,e,i,s,r){let o=new Ga,a=new Pf,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,v,C,P,L,B){let U=P.fog,I=L.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||k,q),Q=d[_.type],Y=i.precision;_.precision!==null&&(Y=i.getMaxPrecision(_.precision),Y!==_.precision&&pe("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));let j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,nt=j!==void 0?j.length:0,Mt=0;I.morphAttributes.position!==void 0&&(Mt=1),I.morphAttributes.normal!==void 0&&(Mt=2),I.morphAttributes.color!==void 0&&(Mt=3);let qt,st,Ut,Vt;if(Q){let Ht=Ms[Q];qt=Ht.vertexShader,st=Ht.fragmentShader}else{qt=_.vertexShader,st=_.fragmentShader;let Ht=a.getVertexShaderStage(_),Ye=a.getFragmentShaderStage(_);a.update(_,Ht,Ye),Ut=Ht.id,Vt=Ye.id}let ne=n.getRenderTarget(),Ft=n.state.buffers.depth.getReversed(),ie=L.isInstancedMesh===!0,nn=L.isBatchedMesh===!0,rt=!!_.map,Qt=!!_.matcap,he=!!V,ht=he&&V.isPMREMTexture===!0,bt=!!_.aoMap,Et=!!_.lightMap,Wt=!!_.bumpMap&&_.wireframe===!1,Bt=!!_.normalMap,Ee=!!_.displacementMap,ee=!!_.emissiveMap,Ne=!!_.metalnessMap,Ue=!!_.roughnessMap,ke=_.anisotropy>0,W=_.clearcoat>0,An=_.diffuseRoughness>0,Ie=_.dispersion>0,Ke=_.retroreflectivity>0,It=_.iridescence>0,yn=_.sheen>0,ue=_.transmission>0,Me=ke&&!!_.anisotropyMap,N=W&&!!_.clearcoatMap,T=W&&!!_.clearcoatNormalMap,Z=W&&!!_.clearcoatRoughnessMap,xt=An&&!!_.diffuseRoughnessMap,dt=It&&!!_.iridescenceMap,wt=It&&!!_.iridescenceThicknessMap,Lt=yn&&!!_.sheenColorMap,ot=yn&&!!_.sheenRoughnessMap,at=!!_.specularMap,Tt=!!_.specularColorMap,O=!!_.specularIntensityMap,ct=ue&&!!_.transmissionMap,it=ue&&!!_.thicknessMap,Rt=!!_.gradientMap,_t=!!_.alphaMap,St=_.alphaTest>0,se=!!_.alphaHash,Te=!!_.extensions,vt=xs;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(vt=n.toneMapping);let le=ht?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,we={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:qt,fragmentShader:st,defines:_.defines,customVertexShaderID:Ut,customFragmentShaderID:Vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:nn,batchingColor:nn&&L._colorsTexture!==null,instancing:ie,instancingColor:ie&&L.instanceColor!==null,instancingMorph:ie&&L.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:rt,matcap:Qt,envMap:he,envMapMode:he&&V.mapping,envMapPMREM:ht,envMapMaxLod:ht?le.length-1:null,envMapSize:ht?le[0].width:null,aoMap:bt,lightMap:Et,bumpMap:Wt,normalMap:Bt,displacementMap:Ee,emissiveMap:ee,normalMapObjectSpace:Bt&&_.normalMapType===rm,normalMapTangentSpace:Bt&&_.normalMapType===Zo,packedNormalMap:Bt&&_.normalMapType===Zo&&o_(_.normalMap.format),metalnessMap:Ne,roughnessMap:Ue,anisotropy:ke,anisotropyMap:Me,clearcoat:W,clearcoatMap:N,clearcoatNormalMap:T,clearcoatRoughnessMap:Z,diffuseRoughness:An,diffuseRoughnessMap:xt,dispersion:Ie,retroreflection:Ke,iridescence:It,iridescenceMap:dt,iridescenceThicknessMap:wt,sheen:yn,sheenColorMap:Lt,sheenRoughnessMap:ot,specularMap:at,specularColorMap:Tt,specularIntensityMap:O,transmission:ue,transmissionMap:ct,thicknessMap:it,gradientMap:Rt,opaque:_.transparent===!1&&_.blending===gr&&_.alphaToCoverage===!1,alphaMap:_t,alphaTest:St,alphaHash:se,combine:_.combine,mapUv:rt&&f(_.map.channel),aoMapUv:bt&&f(_.aoMap.channel),lightMapUv:Et&&f(_.lightMap.channel),bumpMapUv:Wt&&f(_.bumpMap.channel),normalMapUv:Bt&&f(_.normalMap.channel),displacementMapUv:Ee&&f(_.displacementMap.channel),emissiveMapUv:ee&&f(_.emissiveMap.channel),metalnessMapUv:Ne&&f(_.metalnessMap.channel),roughnessMapUv:Ue&&f(_.roughnessMap.channel),anisotropyMapUv:Me&&f(_.anisotropyMap.channel),clearcoatMapUv:N&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:dt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ot&&f(_.sheenRoughnessMap.channel),specularMapUv:at&&f(_.specularMap.channel),specularColorMapUv:Tt&&f(_.specularColorMap.channel),specularIntensityMapUv:O&&f(_.specularIntensityMap.channel),transmissionMapUv:ct&&f(_.transmissionMap.channel),thicknessMapUv:it&&f(_.thicknessMap.channel),alphaMapUv:_t&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Bt||ke),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(rt||_t),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&Bt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ft,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Mt,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:B.filter(Ht=>Ht.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:rt&&_.map.isVideoTexture===!0&&Le.getTransfer(_.map.colorSpace)===Ge,decodeVideoTextureEmissive:ee&&_.emissiveMap.isVideoTexture===!0&&Le.getTransfer(_.emissiveMap.colorSpace)===Ge,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===En,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Te&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&_.extensions.multiDraw===!0||nn)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)v.push(C),v.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(v,_),x(v,_),v.push(n.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function m(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function x(_,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let v=d[_.type],C;if(v){let P=Ms[v];C=Ui.clone(P.uniforms)}else C=_.uniforms;return C}function w(_,v){let C=h.get(v);return C!==void 0?++C.usedTimes:(C=new s_(n,v,_,s),c.push(C),h.set(v,C)),C}function E(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){a.remove(_)}function S(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:M,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:S}}function l_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function c_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Wm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xm(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,g,m,x){let M=n[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:x},n[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=o(d),M.groupOrder=g,M.renderOrder=d.renderOrder,M.z=m,M.group=x),t++,M}function l(d,f,p,g,m,x,M){M.reversedDepth===!0&&(m=-m);let w=a(d,f,p,g,m,x);p.transmission>0?i.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(d,f,p,g,m,x){let M=a(d,f,p,g,m,x);p.transmission>0?i.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||c_),i.length>1&&i.sort(f||Wm),s.length>1&&s.sort(f||Wm)}function u(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function h_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Xm,n.set(i,[o])):s>=r.length?(o=new Xm,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function u_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Xt};break;case"SpotLight":e={position:new F,direction:new F,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function d_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var f_=0;function p_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function m_(n){let t=new u_,e=d_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new $t,o=new $t;function a(c){let h=0,u=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,p=0,g=0,m=0,x=0,M=0,w=0,E=0,R=0,S=0,_=0,v=0,C=0,P=0;c.sort(p_);for(let B=0,U=c.length;B<U;B++){let I=c[B],k=I.color,q=I.intensity,V=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===yr?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*q,u+=k.g*q,d+=k.b*q;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],q);P++}else if(I.isSunLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,nt=e.get(I);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[p]=nt,i.sunShadowMap[p]=Q;let Mt=j.getViewportCount();for(let qt=0;qt<Mt;qt++)i.sunShadowMatrix[g+qt]=j.getMatrix(qt),i.sunShadowCascade[g+qt]=j._cascadeData[qt];g+=Mt,p++}i.sun[f]=Y,f++}else if(I.isDirectionalLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,nt=e.get(I);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=I.shadow.matrix,R++}i.directional[m]=Y,m++}else if(I.isSpotLight){let Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(k).multiplyScalar(q),Y.distance=V,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[M]=Y;let j=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,j.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[M]=j.matrix,I.castShadow){let nt=e.get(I);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,i.spotShadow[M]=nt,i.spotShadowMap[M]=Q,_++}M++}else if(I.isRectAreaLight){let Y=t.get(I);Y.color.copy(k).multiplyScalar(q),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=Y,w++}else if(I.isPointLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let j=I.shadow,nt=e.get(I);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,i.pointShadow[x]=nt,i.pointShadowMap[x]=Q,i.pointShadowMatrix[x]=I.shadow.matrix,S++}i.point[x]=Y,x++}else if(I.isHemisphereLight){let Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(q),Y.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[E]=Y,E++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ot.LTC_FLOAT_1,i.rectAreaLTC2=Ot.LTC_FLOAT_2):(i.rectAreaLTC1=Ot.LTC_HALF_1,i.rectAreaLTC2=Ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==x||L.spotLength!==M||L.rectAreaLength!==w||L.hemiLength!==E||L.numSunShadows!==p||L.numDirectionalShadows!==R||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==v||L.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=x,i.hemi.length=E,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+v-C,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,L.sunLength=f,L.directionalLength=m,L.pointLength=x,L.spotLength=M,L.rectAreaLength=w,L.hemiLength=E,L.numSunShadows=p,L.numDirectionalShadows=R,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=v,L.numLightProbes=P,i.version=f_++)}function l(c,h){let u=0,d=0,f=0,p=0,g=0,m=0,x=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let E=c[M];if(E.isSunLight){let R=i.sun[u];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(x),u++}else if(E.isDirectionalLight){let R=i.directional[d];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),d++}else if(E.isSpotLight){let R=i.spot[p];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),p++}else if(E.isRectAreaLight){let R=i.rectArea[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let R=i.point[f];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function qm(n){let t=new m_(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){i.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function g_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qm(n),t.set(s,[a])):r>=o.length?(a=new qm(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,M_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],v_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ym=new $t,wl=new F,Sf=new F;function __(n,t,e){let i=new lr,s=new lt,r=new lt,o=new ln,a=new Vo,l=new hh,c={},h=e.maxTextureSize,u={[gs]:En,[En]:gs,[hn]:hn},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:x_,fragmentShader:y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new je;p.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new D(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pr;let x=this.type;this.render=function(S,_,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===hl&&(pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pr);let C=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(es),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let U=x!==this.type;U&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=S.length;I<k;I++){let q=S[I],V=q.shadow;if(V===void 0){pe("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Q=V.getFrameExtents();s.multiply(Q),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||U===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===mr){if(q.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new bn(s.x,s.y,{format:yr,type:Ln,minFilter:ci,magFilter:ci,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new zs(s.x,s.y,qi),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=ks,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=gn,V.map.depthTexture.magFilter=gn}else q.isPointLight?(V.map=new Tl(s.x),V.map.depthTexture=new Ya(s.x,ns)):(V.map=new bn(s.x,s.y),V.map.depthTexture=new zs(s.x,s.y,ns)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=ks,this.type===pr?(V.map.depthTexture.compareFunction=Y?hf:cf,V.map.depthTexture.minFilter=ci,V.map.depthTexture.magFilter=ci):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=gn,V.map.depthTexture.magFilter=gn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,v);let nt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:v.layers;for(let Mt=0;Mt<j;Mt++){let qt=V.getCamera(Mt);if(q.isPointLight){let st=V.camera,Ut=V.matrix,Vt=q.distance||st.far;Vt!==st.far&&(st.far=Vt,st.updateProjectionMatrix()),wl.setFromMatrixPosition(q.matrixWorld),st.position.copy(wl),Sf.copy(st.position),Sf.add(M_[Mt]),st.up.copy(v_[Mt]),st.lookAt(Sf),st.updateMatrixWorld(),Ut.makeTranslation(-wl.x,-wl.y,-wl.z),Ym.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ym,st.coordinateSystem,st.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Mt),n.clear();else{Mt===0&&(n.setRenderTarget(V.map),n.clear());let st=V.getViewport(Mt);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),B.viewport(o)}i=V.getFrustum(Mt),E(_,v,qt,q,nt,this.type)}V.isPointLightShadow!==!0&&this.type===mr&&M(V,v),V.needsUpdate=!1}x=this.type,m.needsUpdate=!1,n.setRenderTarget(C,P,L)};function M(S,_){let v=t.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new bn(s.x,s.y,{format:yr,type:Ln}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(_,null,v,d,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(_,null,v,f,g,null)}function w(S,_,v,C){let P=null,L=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)P=L;else if(P=v.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=P.uuid,U=_.uuid,I=c[B];I===void 0&&(I={},c[B]=I);let k=I[U];k===void 0&&(k=P.clone(),I[U]=k,_.addEventListener("dispose",R)),P=k}if(P.visible=_.visible,P.wireframe=_.wireframe,C===mr?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let B=n.properties.get(P);B.light=v}return P}function E(S,_,v,C,P,L){if(S.visible===!1)return;if(S.layers.test(P)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===mr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let I=t.update(S),k=S.material;if(Array.isArray(k)){let q=I.groups;for(let V=0,Q=q.length;V<Q;V++){let Y=q[V],j=k[Y.materialIndex];if(j&&j.visible){let nt=w(S,j,C,L);S.onBeforeShadow(n,S,_,v,I,nt,Y),n.renderBufferDirect(v,null,I,nt,S,Y),S.onAfterShadow(n,S,_,v,I,nt,Y)}}}else if(k.visible){let q=w(S,k,C,L);S.onBeforeShadow(n,S,_,v,I,q,null),n.renderBufferDirect(v,null,I,q,S,null),S.onAfterShadow(n,S,_,v,I,q,null)}}let U=S.children;for(let I=0,k=U.length;I<k;I++)E(U[I],_,v,C,P,L)}function R(S){S.target.removeEventListener("dispose",R);for(let v in c){let C=c[v],P=S.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function b_(n,t){function e(){let O=!1,ct=new ln,it=null,Rt=new ln(0,0,0,0);return{setMask:function(_t){it!==_t&&!O&&(n.colorMask(_t,_t,_t,_t),it=_t)},setLocked:function(_t){O=_t},setClear:function(_t,St,se,Te,vt){vt===!0&&(_t*=Te,St*=Te,se*=Te),ct.set(_t,St,se,Te),Rt.equals(ct)===!1&&(n.clearColor(_t,St,se,Te),Rt.copy(ct))},reset:function(){O=!1,it=null,Rt.set(-1,0,0,0)}}}function i(){let O=!1,ct=!1,it=null,Rt=null,_t=null;return{setReversed:function(St){if(ct!==St){let se=t.get("EXT_clip_control");St?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),ct=St;let Te=_t;_t=null,this.setClear(Te)}},getReversed:function(){return ct},setTest:function(St){St?Ft(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(St){it!==St&&!O&&(n.depthMask(St),it=St)},setFunc:function(St){if(ct&&(St=mm[St]),Rt!==St){switch(St){case Vc:n.depthFunc(n.NEVER);break;case Wc:n.depthFunc(n.ALWAYS);break;case Xc:n.depthFunc(n.LESS);break;case Lo:n.depthFunc(n.LEQUAL);break;case qc:n.depthFunc(n.EQUAL);break;case Yc:n.depthFunc(n.GEQUAL);break;case $c:n.depthFunc(n.GREATER);break;case Zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Rt=St}},setLocked:function(St){O=St},setClear:function(St){_t!==St&&(_t=St,ct&&(St=1-St),n.clearDepth(St))},reset:function(){O=!1,it=null,Rt=null,_t=null,ct=!1}}}function s(){let O=!1,ct=null,it=null,Rt=null,_t=null,St=null,se=null,Te=null,vt=null;return{setTest:function(le){O||(le?Ft(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(le){ct!==le&&!O&&(n.stencilMask(le),ct=le)},setFunc:function(le,we,Ht){(it!==le||Rt!==we||_t!==Ht)&&(n.stencilFunc(le,we,Ht),it=le,Rt=we,_t=Ht)},setOp:function(le,we,Ht){(St!==le||se!==we||Te!==Ht)&&(n.stencilOp(le,we,Ht),St=le,se=we,Te=Ht)},setLocked:function(le){O=le},setClear:function(le){vt!==le&&(n.clearStencil(le),vt=le)},reset:function(){O=!1,ct=null,it=null,Rt=null,_t=null,St=null,se=null,Te=null,vt=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],g=null,m=!1,x=null,M=null,w=null,E=null,R=null,S=null,_=null,v=new Xt(0,0,0),C=0,P=!1,L=null,B=null,U=null,I=null,k=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=Q>=2);let j=null,nt={},Mt=n.getParameter(n.SCISSOR_BOX),qt=n.getParameter(n.VIEWPORT),st=new ln().fromArray(Mt),Ut=new ln().fromArray(qt);function Vt(O,ct,it,Rt){let _t=new Uint8Array(4),St=n.createTexture();n.bindTexture(O,St),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<it;se++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,Rt,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(ct+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return St}let ne={};ne[n.TEXTURE_2D]=Vt(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=Vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=Vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=Vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ft(n.DEPTH_TEST),o.setFunc(Lo),Wt(!1),Bt(Zd),Ft(n.CULL_FACE),bt(es);function Ft(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function ie(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function nn(O,ct){return d[O]!==ct?(n.bindFramebuffer(O,ct),d[O]=ct,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ct),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function rt(O,ct){let it=p,Rt=!1;if(O){it=f.get(ct),it===void 0&&(it=[],f.set(ct,it));let _t=O.textures;if(it.length!==_t.length||it[0]!==n.COLOR_ATTACHMENT0){for(let St=0,se=_t.length;St<se;St++)it[St]=n.COLOR_ATTACHMENT0+St;it.length=_t.length,Rt=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,Rt=!0);Rt&&n.drawBuffers(it)}function Qt(O){return g!==O?(n.useProgram(O),g=O,!0):!1}let he={[Jr]:n.FUNC_ADD,[Op]:n.FUNC_SUBTRACT,[Hp]:n.FUNC_REVERSE_SUBTRACT};he[kp]=n.MIN,he[Gp]=n.MAX;let ht={[zp]:n.ZERO,[Vp]:n.ONE,[Wp]:n.SRC_COLOR,[Qd]:n.SRC_ALPHA,[Jp]:n.SRC_ALPHA_SATURATE,[$p]:n.DST_COLOR,[qp]:n.DST_ALPHA,[Xp]:n.ONE_MINUS_SRC_COLOR,[jd]:n.ONE_MINUS_SRC_ALPHA,[Zp]:n.ONE_MINUS_DST_COLOR,[Yp]:n.ONE_MINUS_DST_ALPHA,[Kp]:n.CONSTANT_COLOR,[Qp]:n.ONE_MINUS_CONSTANT_COLOR,[jp]:n.CONSTANT_ALPHA,[tm]:n.ONE_MINUS_CONSTANT_ALPHA};function bt(O,ct,it,Rt,_t,St,se,Te,vt,le){if(O===es){m===!0&&(ie(n.BLEND),m=!1);return}if(m===!1&&(Ft(n.BLEND),m=!0),O!==Bp){if(O!==x||le!==P){if((M!==Jr||R!==Jr)&&(n.blendEquation(n.FUNC_ADD),M=Jr,R=Jr),le)switch(O){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vs:n.blendFunc(n.ONE,n.ONE);break;case Jd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:me("WebGLState: Invalid blending: ",O);break}else switch(O){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jd:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kd:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",O);break}w=null,E=null,S=null,_=null,v.set(0,0,0),C=0,x=O,P=le}return}_t=_t||ct,St=St||it,se=se||Rt,(ct!==M||_t!==R)&&(n.blendEquationSeparate(he[ct],he[_t]),M=ct,R=_t),(it!==w||Rt!==E||St!==S||se!==_)&&(n.blendFuncSeparate(ht[it],ht[Rt],ht[St],ht[se]),w=it,E=Rt,S=St,_=se),(Te.equals(v)===!1||vt!==C)&&(n.blendColor(Te.r,Te.g,Te.b,vt),v.copy(Te),C=vt),x=O,P=!1}function Et(O,ct){O.side===hn?ie(n.CULL_FACE):Ft(n.CULL_FACE);let it=O.side===En;ct&&(it=!it),Wt(it),O.blending===gr&&O.transparent===!1?bt(es):bt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Rt=O.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ft(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function Bt(O){O!==Up?(Ft(n.CULL_FACE),O!==B&&(O===Zd?n.cullFace(n.BACK):O===Fp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),B=O}function Ee(O){O!==U&&(V&&n.lineWidth(O),U=O)}function ee(O,ct,it){O?(Ft(n.POLYGON_OFFSET_FILL),(I!==ct||k!==it)&&(I=ct,k=it,o.getReversed()&&(ct=-ct,it=-it),n.polygonOffset(ct,it))):ie(n.POLYGON_OFFSET_FILL)}function Ne(O){O?Ft(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function Ue(O){O===void 0&&(O=n.TEXTURE0+q-1),j!==O&&(n.activeTexture(O),j=O)}function ke(O,ct,it){it===void 0&&(j===null?it=n.TEXTURE0+q-1:it=j);let Rt=nt[it];Rt===void 0&&(Rt={type:void 0,texture:void 0},nt[it]=Rt),(Rt.type!==O||Rt.texture!==ct)&&(j!==it&&(n.activeTexture(it),j=it),n.bindTexture(O,ct||ne[O]),Rt.type=O,Rt.texture=ct)}function W(){let O=nt[j];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function An(){try{n.compressedTexImage2D(...arguments)}catch(O){me("WebGLState:",O)}}function Ie(){try{n.compressedTexImage3D(...arguments)}catch(O){me("WebGLState:",O)}}function Ke(){try{n.texSubImage2D(...arguments)}catch(O){me("WebGLState:",O)}}function It(){try{n.texSubImage3D(...arguments)}catch(O){me("WebGLState:",O)}}function yn(){try{n.compressedTexSubImage2D(...arguments)}catch(O){me("WebGLState:",O)}}function ue(){try{n.compressedTexSubImage3D(...arguments)}catch(O){me("WebGLState:",O)}}function Me(){try{n.texStorage2D(...arguments)}catch(O){me("WebGLState:",O)}}function N(){try{n.texStorage3D(...arguments)}catch(O){me("WebGLState:",O)}}function T(){try{n.texImage2D(...arguments)}catch(O){me("WebGLState:",O)}}function Z(){try{n.texImage3D(...arguments)}catch(O){me("WebGLState:",O)}}function xt(O){return u[O]!==void 0?u[O]:n.getParameter(O)}function dt(O,ct){u[O]!==ct&&(n.pixelStorei(O,ct),u[O]=ct)}function wt(O){st.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),st.copy(O))}function Lt(O){Ut.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ut.copy(O))}function ot(O,ct){let it=c.get(ct);it===void 0&&(it=new WeakMap,c.set(ct,it));let Rt=it.get(O);Rt===void 0&&(Rt=n.getUniformBlockIndex(ct,O.name),n.uniformBlockBinding(ct,Rt,Rt),it.set(O,Rt))}function at(O,ct,it){let _t=c.get(ct).get(O);l[_t]!==it&&(n.bindBufferBase(n.UNIFORM_BUFFER,_t,it),l[_t]=it)}function Tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,nt={},d={},l={},f=new WeakMap,p=[],g=null,m=!1,x=null,M=null,w=null,E=null,R=null,S=null,_=null,v=new Xt(0,0,0),C=0,P=!1,L=null,B=null,U=null,I=null,k=null,st.set(0,0,n.canvas.width,n.canvas.height),Ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ft,disable:ie,bindFramebuffer:nn,drawBuffers:rt,useProgram:Qt,setBlending:bt,setMaterial:Et,setFlipSided:Wt,setCullFace:Bt,setLineWidth:Ee,setPolygonOffset:ee,setScissorTest:Ne,activeTexture:Ue,bindTexture:ke,unbindTexture:W,compressedTexImage2D:An,compressedTexImage3D:Ie,texImage2D:T,texImage3D:Z,pixelStorei:dt,getParameter:xt,updateUBOMapping:ot,uniformBlockBinding:at,texStorage2D:Me,texStorage3D:N,texSubImage2D:Ke,texSubImage3D:It,compressedTexSubImage2D:yn,compressedTexSubImage3D:ue,scissor:wt,viewport:Lt,reset:Tt}}function E_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,g=new FinalizationRegistry(N=>p.delete(N)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,T){return m?new OffscreenCanvas(N,T):Oa("canvas")}function M(N,T,Z){let xt=1,dt=Me(N);if((dt.width>Z||dt.height>Z)&&(xt=Z/Math.max(dt.width,dt.height)),xt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let wt=Math.floor(xt*dt.width),Lt=Math.floor(xt*dt.height);d===void 0&&(d=x(wt,Lt));let ot=T?x(wt,Lt):d;return ot.width=wt,ot.height=Lt,ot.getContext("2d").drawImage(N,0,0,wt,Lt),pe("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+wt+"x"+Lt+")."),ot}else return"data"in N&&pe("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),N;return N}function w(N){return N.generateMipmaps}function E(N){n.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(N,T,Z,xt,dt,wt=!1){if(N!==null){if(n[N]!==void 0)return n[N];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Lt;xt&&(Lt=t.get("EXT_texture_norm16"),Lt||pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=T;if(T===n.RED&&(Z===n.FLOAT&&(ot=n.R32F),Z===n.HALF_FLOAT&&(ot=n.R16F),Z===n.UNSIGNED_BYTE&&(ot=n.R8),Z===n.UNSIGNED_SHORT&&Lt&&(ot=Lt.R16_EXT),Z===n.SHORT&&Lt&&(ot=Lt.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ot=n.R8UI),Z===n.UNSIGNED_SHORT&&(ot=n.R16UI),Z===n.UNSIGNED_INT&&(ot=n.R32UI),Z===n.BYTE&&(ot=n.R8I),Z===n.SHORT&&(ot=n.R16I),Z===n.INT&&(ot=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(ot=n.RG32F),Z===n.HALF_FLOAT&&(ot=n.RG16F),Z===n.UNSIGNED_BYTE&&(ot=n.RG8),Z===n.UNSIGNED_SHORT&&Lt&&(ot=Lt.RG16_EXT),Z===n.SHORT&&Lt&&(ot=Lt.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ot=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ot=n.RG16UI),Z===n.UNSIGNED_INT&&(ot=n.RG32UI),Z===n.BYTE&&(ot=n.RG8I),Z===n.SHORT&&(ot=n.RG16I),Z===n.INT&&(ot=n.RG32I)),T===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),Z===n.UNSIGNED_INT&&(ot=n.RGB32UI),Z===n.BYTE&&(ot=n.RGB8I),Z===n.SHORT&&(ot=n.RGB16I),Z===n.INT&&(ot=n.RGB32I)),T===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ot=n.RGBA32UI),Z===n.BYTE&&(ot=n.RGBA8I),Z===n.SHORT&&(ot=n.RGBA16I),Z===n.INT&&(ot=n.RGBA32I)),T===n.RGB&&(Z===n.UNSIGNED_SHORT&&Lt&&(ot=Lt.RGB16_EXT),Z===n.SHORT&&Lt&&(ot=Lt.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ot=n.R11F_G11F_B10F)),T===n.RGBA){let at=wt?Ba:Le.getTransfer(dt);Z===n.FLOAT&&(ot=n.RGBA32F),Z===n.HALF_FLOAT&&(ot=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ot=at===Ge?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Lt&&(ot=Lt.RGBA16_EXT),Z===n.SHORT&&Lt&&(ot=Lt.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(N,T){let Z;return N?T===null||T===ns||T===Qr?Z=n.DEPTH24_STENCIL8:T===qi?Z=n.DEPTH32F_STENCIL8:T===Yo&&(Z=n.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ns||T===Qr?Z=n.DEPTH_COMPONENT24:T===qi?Z=n.DEPTH_COMPONENT32F:T===Yo&&(Z=n.DEPTH_COMPONENT16),Z}function v(N,T){return w(N)===!0||N.isFramebufferTexture&&N.minFilter!==gn&&N.minFilter!==ci?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function C(N){let T=new WeakRef(N);i.get(N).__ref=T,p.add(T),g.register(N,T,T)}function P(N){let T=i.get(N).__ref;T!==void 0&&(p.delete(T),g.unregister(T))}function L(N){U(N.target)}function B(N){I(N.target)}function U(N){N.removeEventListener("dispose",L),P(N),q(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&u.delete(N)}function I(N){N.removeEventListener("dispose",B),P(N),Q(N)}function k(){for(let N of p){let T=N.deref();T!==void 0&&(T.isRenderTarget===!0?I(T):U(T))}p.clear(),u.clear()}function q(N){let T=i.get(N);if(T.__webglInit===void 0)return;let Z=N.source,xt=f.get(Z);if(xt){let dt=xt[T.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&V(N),Object.keys(xt).length===0&&f.delete(Z)}i.remove(N)}function V(N){let T=i.get(N);n.deleteTexture(T.__webglTexture);let Z=N.source,xt=f.get(Z);delete xt[T.__cacheKey],o.memory.textures--}function Q(N){let T=i.get(N);T.__depthDisposeCallback&&T.__depthDisposeCallback();let Z=N.depthTexture;if(Z&&Z.renderTarget===N&&U(Z),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let wt=0;wt<T.__webglFramebuffer[dt].length;wt++)n.deleteFramebuffer(T.__webglFramebuffer[dt][wt]);else n.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)n.deleteFramebuffer(T.__webglFramebuffer[dt]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let xt=N.textures;for(let dt=0,wt=xt.length;dt<wt;dt++){let Lt=i.get(xt[dt]);Lt.__webglTexture&&(n.deleteTexture(Lt.__webglTexture),o.memory.textures--),i.remove(xt[dt])}i.remove(N)}let Y=0;function j(){Y=0}function nt(){return Y}function Mt(N){Y=N}function qt(){let N=Y;return N>=s.maxTextures&&pe("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,N}function st(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.mipmapsAutoUpdate),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function Ut(N,T){let Z=i.get(N);if(N.isVideoTexture&&yn(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){let xt=N.image;if(xt===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(Z,N,T);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function Vt(N,T){let Z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Et(Z,N,T);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function ne(N,T){let Z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Et(Z,N,T);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function Ft(N,T){let Z=i.get(N);if(N.version>0&&Z.__version!==N.version){Wt(Z,N,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}let ie={[ds]:n.REPEAT,[hs]:n.CLAMP_TO_EDGE,[Jc]:n.MIRRORED_REPEAT},nn={[gn]:n.NEAREST,[im]:n.NEAREST_MIPMAP_NEAREST,[xl]:n.NEAREST_MIPMAP_LINEAR,[ci]:n.LINEAR,[Th]:n.LINEAR_MIPMAP_NEAREST,[Ws]:n.LINEAR_MIPMAP_LINEAR},rt={[am]:n.NEVER,[uf]:n.ALWAYS,[lm]:n.LESS,[cf]:n.LEQUAL,[cm]:n.EQUAL,[hf]:n.GEQUAL,[hm]:n.GREATER,[um]:n.NOTEQUAL};function Qt(N,T){if(T.type===qi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ci||T.magFilter===Th||T.magFilter===xl||T.magFilter===Ws||T.minFilter===ci||T.minFilter===Th||T.minFilter===xl||T.minFilter===Ws)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,ie[T.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,ie[T.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,ie[T.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,nn[T.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,nn[T.minFilter]),T.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,rt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===gn||T.minFilter!==xl&&T.minFilter!==Ws||T.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function he(N,T){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",L),C(T));let xt=T.source,dt=f.get(xt);dt===void 0&&(dt={},f.set(xt,dt));let wt=st(T);if(wt!==N.__cacheKey){dt[wt]===void 0&&(dt[wt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),dt[wt].usedTimes++;let Lt=dt[N.__cacheKey];Lt!==void 0&&(dt[N.__cacheKey].usedTimes--,Lt.usedTimes===0&&V(T)),N.__cacheKey=wt,N.__webglTexture=dt[wt].texture}return Z}function ht(N,T,Z){return Math.floor(Math.floor(N/Z)/T)}function bt(N,T,Z,xt){let wt=N.updateRanges;if(wt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Z,xt,T.data);else{wt.sort((O,ct)=>O.start-ct.start);let Lt=0;for(let O=1;O<wt.length;O++){let ct=wt[Lt],it=wt[O],Rt=ct.start+ct.count,_t=ht(it.start,T.width,4),St=ht(ct.start,T.width,4);it.start<=Rt+1&&_t===St&&ht(it.start+it.count-1,T.width,4)===_t?ct.count=Math.max(ct.count,it.start+it.count-ct.start):(++Lt,wt[Lt]=it)}wt.length=Lt+1;let ot=e.getParameter(n.UNPACK_ROW_LENGTH),at=e.getParameter(n.UNPACK_SKIP_PIXELS),Tt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let O=0,ct=wt.length;O<ct;O++){let it=wt[O],Rt=Math.floor(it.start/4),_t=Math.ceil(it.count/4),St=Rt%T.width,se=Math.floor(Rt/T.width),Te=_t,vt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,St),e.pixelStorei(n.UNPACK_SKIP_ROWS,se),e.texSubImage2D(n.TEXTURE_2D,0,St,se,Te,vt,Z,xt,T.data)}N.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ot),e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,Tt)}}function Et(N,T,Z){let xt=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xt=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xt=n.TEXTURE_3D);let dt=he(N,T),wt=T.source;e.bindTexture(xt,N.__webglTexture,n.TEXTURE0+Z);let Lt=i.get(wt);if(wt.version!==Lt.__version||dt===!0){if(e.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let vt=Le.getPrimaries(Le.workingColorSpace),le=T.colorSpace===qs?null:Le.getPrimaries(T.colorSpace),we=T.colorSpace===qs||vt===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let at=M(T.image,!1,s.maxTextureSize);at=ue(T,at);let Tt=r.convert(T.format,T.colorSpace),O=r.convert(T.type),ct=S(T.internalFormat,Tt,O,T.normalized,T.colorSpace,T.isVideoTexture);Qt(xt,T);let it,Rt=T.mipmaps,_t=T.isVideoTexture!==!0,St=Lt.__version===void 0||dt===!0,se=wt.dataReady,Te=v(T,at);if(T.isDepthTexture)ct=_(T.format===Xs,T.type),St&&(_t?e.texStorage2D(n.TEXTURE_2D,1,ct,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,ct,at.width,at.height,0,Tt,O,null));else if(T.isDataTexture)if(Rt.length>0){_t&&St&&e.texStorage2D(n.TEXTURE_2D,Te,ct,Rt[0].width,Rt[0].height);for(let vt=0,le=Rt.length;vt<le;vt++)it=Rt[vt],_t?se&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,it.width,it.height,Tt,O,it.data):e.texImage2D(n.TEXTURE_2D,vt,ct,it.width,it.height,0,Tt,O,it.data);T.generateMipmaps=!1}else _t?(St&&e.texStorage2D(n.TEXTURE_2D,Te,ct,at.width,at.height),se&&bt(T,at,Tt,O)):e.texImage2D(n.TEXTURE_2D,0,ct,at.width,at.height,0,Tt,O,at.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){_t&&St&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ct,Rt[0].width,Rt[0].height,at.depth);for(let vt=0,le=Rt.length;vt<le;vt++)if(it=Rt[vt],T.format!==is)if(Tt!==null)if(_t){if(se)if(T.layerUpdates.size>0){let we=yf(it.width,it.height,T.format,T.type);for(let Ht of T.layerUpdates){let Ye=it.data.subarray(Ht*we/it.data.BYTES_PER_ELEMENT,(Ht+1)*we/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,Ht,it.width,it.height,1,Tt,Ye)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,it.width,it.height,at.depth,Tt,it.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,vt,ct,it.width,it.height,at.depth,0,it.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?se&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,it.width,it.height,at.depth,Tt,O,it.data):e.texImage3D(n.TEXTURE_2D_ARRAY,vt,ct,it.width,it.height,at.depth,0,Tt,O,it.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{_t&&St&&e.texStorage2D(n.TEXTURE_2D,Te,ct,Rt[0].width,Rt[0].height);for(let vt=0,le=Rt.length;vt<le;vt++)it=Rt[vt],T.format!==is?Tt!==null?_t?se&&e.compressedTexSubImage2D(n.TEXTURE_2D,vt,0,0,it.width,it.height,Tt,it.data):e.compressedTexImage2D(n.TEXTURE_2D,vt,ct,it.width,it.height,0,it.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?se&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,it.width,it.height,Tt,O,it.data):e.texImage2D(n.TEXTURE_2D,vt,ct,it.width,it.height,0,Tt,O,it.data)}else if(T.isDataArrayTexture)if(_t){if(St&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ct,at.width,at.height,at.depth),se)if(T.layerUpdates.size>0){let vt=yf(at.width,at.height,T.format,T.type);for(let le of T.layerUpdates){let we=at.data.subarray(le*vt/at.data.BYTES_PER_ELEMENT,(le+1)*vt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,at.width,at.height,1,Tt,O,we)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Tt,O,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ct,at.width,at.height,at.depth,0,Tt,O,at.data);else if(T.isData3DTexture)_t?(St&&e.texStorage3D(n.TEXTURE_3D,Te,ct,at.width,at.height,at.depth),se&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Tt,O,at.data)):e.texImage3D(n.TEXTURE_3D,0,ct,at.width,at.height,at.depth,0,Tt,O,at.data);else if(T.isFramebufferTexture){if(St)if(_t)e.texStorage2D(n.TEXTURE_2D,Te,ct,at.width,at.height);else{let vt=at.width,le=at.height;for(let we=0;we<Te;we++)e.texImage2D(n.TEXTURE_2D,we,ct,vt,le,0,Tt,O,null),vt>>=1,le>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let vt=n.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),at.parentNode!==vt){vt.appendChild(at),u.add(T),vt.onpaint=le=>{let we=le.changedElements;for(let Ht of u)we.includes(Ht.image)&&(Ht.needsUpdate=!0)},vt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,at);else{let we=n.RGBA,Ht=n.RGBA,Ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,we,Ht,Ye,at)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(_t&&St){let vt=Me(Rt[0]);e.texStorage2D(n.TEXTURE_2D,Te,ct,vt.width,vt.height)}for(let vt=0,le=Rt.length;vt<le;vt++)it=Rt[vt],_t?se&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,Tt,O,it):e.texImage2D(n.TEXTURE_2D,vt,ct,Tt,O,it);T.generateMipmaps=!1}else if(_t){if(St){let vt=Me(at);e.texStorage2D(n.TEXTURE_2D,Te,ct,vt.width,vt.height)}se&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,O,at)}else e.texImage2D(n.TEXTURE_2D,0,ct,Tt,O,at);w(T)&&T.mipmapsAutoUpdate===!0&&E(xt),Lt.__version=wt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Wt(N,T,Z){if(T.image.length!==6)return;let xt=he(N,T),dt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Z);let wt=i.get(dt);if(dt.version!==wt.__version||xt===!0){e.activeTexture(n.TEXTURE0+Z);let Lt=Le.getPrimaries(Le.workingColorSpace),ot=T.colorSpace===qs?null:Le.getPrimaries(T.colorSpace),at=T.colorSpace===qs||Lt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Tt=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,ct=[];for(let Ht=0;Ht<6;Ht++)!Tt&&!O?ct[Ht]=M(T.image[Ht],!0,s.maxCubemapSize):ct[Ht]=O?T.image[Ht].image:T.image[Ht],ct[Ht]=ue(T,ct[Ht]);let it=ct[0],Rt=r.convert(T.format,T.colorSpace),_t=r.convert(T.type),St=S(T.internalFormat,Rt,_t,T.normalized,T.colorSpace),se=T.isVideoTexture!==!0,Te=wt.__version===void 0||xt===!0,vt=dt.dataReady,le=v(T,it);Qt(n.TEXTURE_CUBE_MAP,T);let we;if(T.isDepthTexture){if(St=_(T.format===Xs,T.type),Te)if(se)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,St,it.width,it.height);else for(let Ht=0;Ht<6;Ht++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,St,it.width,it.height,0,Rt,_t,null)}else if(Tt){se&&Te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,le,St,it.width,it.height);for(let Ht=0;Ht<6;Ht++){we=ct[Ht].mipmaps;for(let Ye=0;Ye<we.length;Ye++){let Bn=we[Ye];T.format!==is?Rt!==null?se?vt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,Ye,0,0,Bn.width,Bn.height,Rt,Bn.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,Ye,St,Bn.width,Bn.height,0,Bn.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,Ye,0,0,Bn.width,Bn.height,Rt,_t,Bn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,Ye,St,Bn.width,Bn.height,0,Rt,_t,Bn.data)}}}else{if(we=T.mipmaps,se&&Te){we.length>0&&le++;let Ht=Me(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,le,St,Ht.width,Ht.height)}for(let Ht=0;Ht<6;Ht++)if(O){se?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,0,0,ct[Ht].width,ct[Ht].height,Rt,_t,ct[Ht].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,St,ct[Ht].width,ct[Ht].height,0,Rt,_t,ct[Ht].data);for(let Ye=0;Ye<we.length;Ye++){let js=we[Ye].image[Ht].image;se?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,Ye+1,0,0,js.width,js.height,Rt,_t,js.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,Ye+1,St,js.width,js.height,0,Rt,_t,js.data)}}else{se?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,0,0,Rt,_t,ct[Ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,St,Rt,_t,ct[Ht]);for(let Ye=0;Ye<we.length;Ye++){let Bn=we[Ye];se?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,Ye+1,0,0,Rt,_t,Bn.image[Ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,Ye+1,St,Rt,_t,Bn.image[Ht])}}}w(T)&&T.mipmapsAutoUpdate===!0&&E(n.TEXTURE_CUBE_MAP),wt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Bt(N,T,Z,xt,dt,wt){let Lt=r.convert(Z.format,Z.colorSpace),ot=r.convert(Z.type),at=S(Z.internalFormat,Lt,ot,Z.normalized,Z.colorSpace),Tt=i.get(T),O=i.get(Z);if(O.__renderTarget=T,!Tt.__hasExternalTextures){let ct=Math.max(1,T.width>>wt),it=Math.max(1,T.height>>wt);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,wt,at,ct,it,T.depth,0,Lt,ot,null):e.texImage2D(dt,wt,at,ct,it,0,Lt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),It(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xt,dt,O.__webglTexture,0,Ke(T)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xt,dt,O.__webglTexture,wt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(N,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,N),T.depthBuffer){let xt=T.depthTexture,dt=xt&&xt.isDepthTexture?xt.type:null,wt=_(T.stencilBuffer,dt),Lt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;It(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke(T),wt,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke(T),wt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,wt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,N)}else{let xt=T.textures;for(let dt=0;dt<xt.length;dt++){let wt=xt[dt],Lt=r.convert(wt.format,wt.colorSpace),ot=r.convert(wt.type),at=S(wt.internalFormat,Lt,ot,wt.normalized,wt.colorSpace);It(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke(T),at,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke(T),at,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,at,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ee(N,T,Z){let xt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=i.get(T.depthTexture);dt.__renderTarget=T;let wt=xt?T.depthTexture.image[0]:T.depthTexture.image;(!dt.__webglTexture||wt.width!==T.width||wt.height!==T.height)&&(wt.width=T.width,wt.height=T.height,T.depthTexture.needsUpdate=!0),xt?Ft(T.depthTexture,0):Ut(T.depthTexture,0);let Lt=dt.__webglTexture,ot=Ke(T),at=xt?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,Tt=T.depthTexture.format===Xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===ks)It(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Tt,at,Lt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,Tt,at,Lt,0);else if(T.depthTexture.format===Xs)It(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Tt,at,Lt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,Tt,at,Lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(N){let T=i.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let xt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xt){let dt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xt.removeEventListener("dispose",dt)};xt.addEventListener("dispose",dt),T.__depthDisposeCallback=dt}T.__boundDepthTexture=xt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let xt=0;xt<6;xt++)ee(T.__webglFramebuffer[xt],N,xt);else N.texture.mipmaps.length>0?ee(T.__webglFramebuffer[0],N,0):ee(T.__webglFramebuffer,N,0);else if(Z){T.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[xt]),T.__webglDepthbuffer[xt]===void 0)T.__webglDepthbuffer[xt]=n.createRenderbuffer(),Ee(T.__webglDepthbuffer[xt],N,!1);else{let dt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=T.__webglDepthbuffer[xt];n.bindRenderbuffer(n.RENDERBUFFER,wt),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,wt)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Ee(T.__webglDepthbuffer,N,!1);else{let dt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,wt),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,wt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(N,T,Z){let xt=i.get(N);T!==void 0&&Bt(xt.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ne(N)}function ke(N){let T=N.texture,Z=i.get(N),xt=i.get(T);N.addEventListener("dispose",B),C(N);let dt=N.textures,wt=N.isWebGLCubeRenderTarget===!0,Lt=dt.length>1;if(Lt||(xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture()),xt.__version=T.version,o.memory.textures++),wt){Z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(T.mipmaps.length>0){Z.__webglFramebuffer[ot]=[];for(let at=0;at<T.mipmaps.length;at++)Z.__webglFramebuffer[ot][at]=n.createFramebuffer()}else Z.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ot=0;ot<T.mipmaps.length;ot++)Z.__webglFramebuffer[ot]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let ot=0,at=dt.length;ot<at;ot++){let Tt=i.get(dt[ot]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&It(N)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ot=0;ot<dt.length;ot++){let at=dt[ot];Z.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ot]);let Tt=r.convert(at.format,at.colorSpace),O=r.convert(at.type),ct=S(at.internalFormat,Tt,O,at.normalized,at.colorSpace,N.isXRRenderTarget===!0),it=Ke(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,it,ct,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(Z.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(wt){e.bindTexture(n.TEXTURE_CUBE_MAP,xt.__webglTexture),Qt(n.TEXTURE_CUBE_MAP,T);for(let ot=0;ot<6;ot++)if(T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)Bt(Z.__webglFramebuffer[ot][at],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,at);else Bt(Z.__webglFramebuffer[ot],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);w(T)?E(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Lt){for(let ot=0,at=dt.length;ot<at;ot++){let Tt=dt[ot],O=i.get(Tt),ct=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ct=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,O.__webglTexture),Qt(ct,Tt),Bt(Z.__webglFramebuffer,N,Tt,n.COLOR_ATTACHMENT0+ot,ct,0),w(Tt)&&E(ct)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ot=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,xt.__webglTexture),Qt(ot,T),T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)Bt(Z.__webglFramebuffer[at],N,T,n.COLOR_ATTACHMENT0,ot,at);else Bt(Z.__webglFramebuffer,N,T,n.COLOR_ATTACHMENT0,ot,0);w(T)?E(ot):T.mipmaps.length>0&&n.texParameteri(ot,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&Ne(N)}function W(N){let T=N.textures;for(let Z=0,xt=T.length;Z<xt;Z++){let dt=T[Z];if(w(dt)&&dt.mipmapsAutoUpdate===!0){let wt=R(N),Lt=i.get(dt).__webglTexture;e.bindTexture(wt,Lt),E(wt),e.unbindTexture()}}}let An=[];function Ie(N){if(N.samples>0){if(It(N)===!1){let T=N.textures,Z=N.width,xt=N.height,dt=n.COLOR_BUFFER_BIT,wt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=i.get(N),ot=T.length>1;if(ot)for(let Tt=0;Tt<T.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<T.length;Tt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);let O=i.get(T[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,Z,xt,0,0,Z,xt,dt,n.NEAREST),l===!0&&(An.length=0,An.push(n.COLOR_ATTACHMENT0+Tt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&An.push(wt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,An))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let Tt=0;Tt<T.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);let O=i.get(T[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,O,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ke(N){return Math.min(s.maxSamples,N.samples)}function It(N){let T=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yn(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function ue(N,T){let Z=N.colorSpace,xt=N.format,dt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Fa&&Z!==qs&&(Le.getTransfer(Z)===Ge?(xt!==is||dt!==bi)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",Z)),T}function Me(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=qt,this.resetTextureUnits=j,this.getTextureUnits=nt,this.setTextureUnits=Mt,this.setTexture2D=Ut,this.setTexture2DArray=Vt,this.setTexture3D=ne,this.setTextureCube=Ft,this.rebindTextures=Ue,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=It,this.dispose=k}function w_(n,t){function e(i,s=qs){let r,o=Le.getTransfer(s);if(i===bi)return n.UNSIGNED_BYTE;if(i===Ah)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ch)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ef)return n.BYTE;if(i===nf)return n.SHORT;if(i===Yo)return n.UNSIGNED_SHORT;if(i===Rh)return n.INT;if(i===ns)return n.UNSIGNED_INT;if(i===qi)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===of)return n.ALPHA;if(i===af)return n.RGB;if(i===is)return n.RGBA;if(i===ks)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===$o)return n.RED;if(i===Ph)return n.RED_INTEGER;if(i===yr)return n.RG;if(i===Ih)return n.RG_INTEGER;if(i===Lh)return n.RGBA_INTEGER;if(i===yl||i===Ml||i===vl||i===_l)if(o===Ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ml)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_l)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dh||i===Nh||i===Uh||i===Fh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Dh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bh||i===Oh||i===Hh||i===kh||i===Gh||i===bl||i===zh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bh||i===Oh)return o===Ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===kh)return r.COMPRESSED_R11_EAC;if(i===Gh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bl)return r.COMPRESSED_RG11_EAC;if(i===zh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vh||i===Wh||i===Xh||i===qh||i===Yh||i===$h||i===Zh||i===Jh||i===Kh||i===Qh||i===jh||i===tu||i===eu||i===nu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$h)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tu)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eu)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nu)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===iu||i===su||i===ru)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===iu)return o===Ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ru)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ou||i===au||i===El||i===lu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ou)return r.COMPRESSED_RED_RGTC1_EXT;if(i===au)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var S_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new $a(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new cn({vertexShader:S_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new be(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Df=class extends fs{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new Lf,x={},M=e.getContextAttributes(),w=null,E=null,R=[],S=[],_=new lt,v=null,C=null,P=new kn;P.viewport=new ln;let L=new kn;L.viewport=new ln;let B=[P,L],U=new _h,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let Ut=R[st];return Ut===void 0&&(Ut=new Fo,R[st]=Ut),Ut.getTargetRaySpace()},this.getControllerGrip=function(st){let Ut=R[st];return Ut===void 0&&(Ut=new Fo,R[st]=Ut),Ut.getGripSpace()},this.getHand=function(st){let Ut=R[st];return Ut===void 0&&(Ut=new Fo,R[st]=Ut),Ut.getHandSpace()};function q(st){let Ut=S.indexOf(st.inputSource);if(Ut===-1)return;let Vt=R[Ut];Vt!==void 0&&(Vt.update(st.inputSource,st.frame,c||o),Vt.dispatchEvent({type:st.type,data:st.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Q);for(let st=0;st<R.length;st++){let Ut=S[st];Ut!==null&&(S[st]=null,R[st].disconnect(Ut))}I=null,k=null,m.reset();for(let st in x)delete x[st];if(t.setRenderTarget(w),f=null,d=null,u=null,s=null,E=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(_.width,_.height,!1),C!==null){let st=C.camera;st.fov=C.fov,st.zoom=C.zoom,st.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(_),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Vt=null,ne=null,Ft=null;M.depth&&(Ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Vt=M.stencil?Xs:ks,ne=M.stencil?Qr:ns);let ie={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ie),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new bn(d.textureWidth,d.textureHeight,{format:is,type:bi,depthTexture:new zs(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new bn(f.framebufferWidth,f.framebufferHeight,{format:is,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(st){for(let Ut=0;Ut<st.removed.length;Ut++){let Vt=st.removed[Ut],ne=S.indexOf(Vt);ne>=0&&(S[ne]=null,R[ne].disconnect(Vt))}for(let Ut=0;Ut<st.added.length;Ut++){let Vt=st.added[Ut],ne=S.indexOf(Vt);if(ne===-1){for(let ie=0;ie<R.length;ie++)if(ie>=S.length){S.push(Vt),ne=ie;break}else if(S[ie]===null){S[ie]=Vt,ne=ie;break}if(ne===-1)break}let Ft=R[ne];Ft&&Ft.connect(Vt)}}function Y(st,Ut){Ut===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(Ut.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let Ut=st.near,Vt=st.far;m.texture!==null&&(m.depthNear>0&&(Ut=m.depthNear),m.depthFar>0&&(Vt=m.depthFar)),U.near=L.near=P.near=Ut,U.far=L.far=P.far=Vt,(I!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,k=U.far),U.layers.mask=st.layers.mask|6,P.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let ne=st.parent,Ft=U.cameras;Y(U,ne);for(let ie=0;ie<Ft.length;ie++)Y(Ft[ie],ne);U.projectionMatrix.copy(P.projectionMatrix),U.projectionMatrixInverse.copy(P.projectionMatrixInverse),C===null&&st.isPerspectiveCamera&&(C={camera:st,fov:st.fov,zoom:st.zoom}),j(st,U,ne)};function j(st,Ut,Vt){Vt===null?st.matrix.copy(Ut.matrixWorld):(st.matrix.copy(Vt.matrixWorld),st.matrix.invert(),st.matrix.multiply(Ut.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(Ut.projectionMatrix),st.projectionMatrixInverse.copy(Ut.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Qc*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(st){l=st,d!==null&&(d.fixedFoveation=st),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(st){return x[st]};let nt=null;function Mt(st,Ut){if(h=Ut.getViewerPose(c||o),p=Ut,h!==null){let Vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ne=!1;Vt.length!==U.cameras.length&&(U.cameras.length=0,ne=!0);for(let rt=0;rt<Vt.length;rt++){let Qt=Vt[rt],he=null;if(f!==null)he=f.getViewport(Qt);else{let bt=u.getViewSubImage(d,Qt);he=bt.viewport,rt===0&&(t.setRenderTargetTextures(E,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(E))}let ht=B[rt];ht===void 0&&(ht=new kn,ht.layers.enable(rt),ht.viewport=new ln,B[rt]=ht),ht.matrix.fromArray(Qt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Qt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(he.x,he.y,he.width,he.height),rt===0&&(U.matrix.copy(ht.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ne===!0&&U.cameras.push(ht)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let rt=u.getDepthInformation(Vt[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(Ft&&Ft.includes("camera-access")&&g){t.state.unbindTexture(),u=i.getBinding();for(let rt=0;rt<Vt.length;rt++){let Qt=Vt[rt].camera;if(Qt){let he=x[Qt];he||(he=new $a,x[Qt]=he);let ht=u.getCameraImage(Qt);he.sourceTexture=ht}}}}for(let Vt=0;Vt<R.length;Vt++){let ne=S[Vt],Ft=R[Vt];ne!==null&&Ft!==void 0&&Ft.update(ne,Ut,c||o)}nt&&nt(st,Ut),Ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ut}),p=null}let qt=new $m;qt.setAnimationLoop(Mt),this.setAnimationLoop=function(st){nt=st},this.dispose=function(){}}},R_=new $t,sg=new ve;sg.set(-1,0,0,0,1,0,0,0,1);function A_(n,t){function e(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,mf(n)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,M,w,E){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),u(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),d(m,x),x.isMeshPhysicalMaterial&&f(m,x,E)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,M,w):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,e(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===En&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,e(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===En&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,e(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,e(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let M=t.get(x),w=M.envMap,E=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(E)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sg),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,M,w){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*M,m.scale.value=w*.5,x.map&&(m.map.value=x.map,e(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function u(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function d(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function f(m,x,M){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,e(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===En&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let M=t.get(x).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function C_(n,t,e,i){let s={},r={};function o(M,w){let E=w.program;i.uniformBlockBinding(M,E,s[M.id])}function a(M,w){let E=s[M.id];E===void 0&&(p(M),E=l(M),s[M.id]=E,M.addEventListener("dispose",m));let R=w.program;i.updateUBOMapping(M,R);let S=t.render.frame;r[M.id]!==S&&(c(M),r[M.id]=S)}function l(M){let w=n.createBuffer(),E=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(M){let w=s[M.id],E=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let S=0,_=E.length;S<_;S++){let v=E[S];if(Array.isArray(v))for(let C=0,P=v.length;C<P;C++)h(v[C],S,C,R);else h(v,S,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,w,E,R){if(d(M,w,E,R)===!0){let S=M.__offset,_=M.value;if(Array.isArray(_)){let v=0;for(let C=0;C<_.length;C++){let P=_[C],L=g(P,!0);u(P,M.__data,v),v+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function u(M,w,E){typeof M=="number"||typeof M=="boolean"?w[E]=M:M.isMatrix3?(w[E]=M.elements[0],w[E+1]=M.elements[1],w[E+2]=M.elements[2],w[E+3]=0,w[E+4]=M.elements[3],w[E+5]=M.elements[4],w[E+6]=M.elements[5],w[E+7]=0,w[E+8]=M.elements[6],w[E+9]=M.elements[7],w[E+10]=M.elements[8],w[E+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-E),E):M.toArray(w,E)}function d(M,w,E,R){let S=M.value,_=w+"_"+E;if(Array.isArray(S)){R[_]===void 0&&(R[_]=[]);let v=R[_],C=!1;for(let P=0;P<S.length;P++)f(S[P],v,P)===!0&&(C=!0);return C}return f(S,R,_)}function f(M,w,E){if(w[E]===void 0)return typeof M=="number"||typeof M=="boolean"?w[E]=M:ArrayBuffer.isView(M)?w[E]=M.slice():w[E]=M.clone(),!0;{let R=w[E];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return w[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function p(M){let w=M.uniforms,E=0,R=16;for(let _=0,v=w.length;_<v;_++){let C=Array.isArray(w[_])?w[_]:[w[_]];for(let P=0,L=C.length;P<L;P++){let B=C[P],U=Array.isArray(B.value)?B.value:[B.value],I=Array.isArray(w[_])||Array.isArray(B.value),k=E;for(let V=0,Q=U.length;V<Q;V++){let Y=U[V],j=g(Y,I),nt=E%R,Mt=nt%j.boundary,qt=nt+Mt;E+=Mt,qt!==0&&R-qt<j.storage&&(E+=R-qt),V===0&&(k=E),E+=j.storage}let q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new q((E-k)/Float32Array.BYTES_PER_ELEMENT),B.__offset=k}}let S=E%R;return S>0&&(E+=R-S),M.__size=E,M.__cache={},this}function g(M,w){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):pe("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(M){let w=M.target;w.removeEventListener("dispose",m),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function x(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:x}}var P_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ys=null;function I_(){return ys===null&&(ys=new Vr(P_,16,16,yr,Ln),ys.name="DFG_LUT",ys.minFilter=ci,ys.magFilter=ci,ys.wrapS=hs,ys.wrapT=hs,ys.generateMipmaps=!1,ys.needsUpdate=!0),ys}var Rl=class{constructor(t={}){let{canvas:e=dm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=f,m=new Set([Lh,Ih,Ph]),x=new Set([bi,ns,Yo,Qr,Ah,Ch]),M=new Uint32Array(4),w=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},R=null,S=null,_=[],v=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,B=null,U=null,I=null,k=null;this._outputColorSpace=Mn;let q=0,V=0,Q=null,Y=-1,j=null,nt=new ln,Mt=new ln,qt=null,st=new Xt(0),Ut=0,Vt=e.width,ne=e.height,Ft=1,ie=null,nn=null,rt=new ln(0,0,Vt,ne),Qt=new ln(0,0,Vt,ne),he=!1,ht=new lr,bt=new ih,Et=!1,Wt=!1,Bt=new $t,Ee=new F,ee=new ln,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function ke(){return Q===null?Ft:1}let W=i;function An(A,z){return e.getContext(A,z)}let Ie,Ke,It,yn,ue,Me,N,T,Z,xt,dt,wt,Lt,ot,at,Tt,O,ct,it,Rt,_t,St,se;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Ht,!1),W===null){let z="webgl2";if(W=An(z,A),W===null)throw An(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(A){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),me("WebGLRenderer: "+A.message),A}function Te(){Ie=new zM(W),Ie.init(),_t=new w_(W,Ie),Ke=new IM(W,Ie,t,_t),It=new b_(W,Ie),Ke.reversedDepthBuffer&&d&&It.buffers.depth.setReversed(!0),U=W.createFramebuffer(),I=W.createFramebuffer(),k=W.createFramebuffer(),yn=new XM(W),ue=new l_,Me=new E_(W,Ie,It,ue,Ke,_t,yn),N=new GM(P),T=new Yx(W),St=new CM(W,T),Z=new VM(W,T,yn,St),xt=new YM(W,Z,T,St,yn),ct=new qM(W,Ke,Me),at=new LM(ue),dt=new a_(P,N,Ie,Ke,St,at),wt=new A_(P,ue),Lt=new h_,ot=new g_(Ie),O=new AM(P,N,It,xt,p,l),Tt=new __(P,xt,Ke),se=new C_(W,yn,Ke,It),it=new PM(W,Ie,yn),Rt=new WM(W,Ie,yn),yn.programs=dt.programs,P.capabilities=Ke,P.extensions=Ie,P.properties=ue,P.renderLists=Lt,P.shadowMap=Tt,P.state=It,P.info=yn}g!==bi&&(C=new ZM(g,e.width,e.height,a,s,r));let vt=new Df(P,W);this.xr=vt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ft},this.setPixelRatio=function(A){A!==void 0&&(Ft=A,this.setSize(Vt,ne,!1))},this.getSize=function(A){return A.set(Vt,ne)},this.setSize=function(A,z,tt=!0){if(vt.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=A,ne=z,e.width=Math.floor(A*Ft),e.height=Math.floor(z*Ft),tt===!0&&(e.style.width=A+"px",e.style.height=z+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Vt*Ft,ne*Ft).floor()},this.setDrawingBufferSize=function(A,z,tt){Vt=A,ne=z,Ft=tt,e.width=Math.floor(A*tt),e.height=Math.floor(z*tt),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(g===bi){me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(nt)},this.getViewport=function(A){return A.copy(rt)},this.setViewport=function(A,z,tt,$){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,z,tt,$),It.viewport(nt.copy(rt).multiplyScalar(ke()).round())},this.getScissor=function(A){return A.copy(Qt)},this.setScissor=function(A,z,tt,$){A.isVector4?Qt.set(A.x,A.y,A.z,A.w):Qt.set(A,z,tt,$),It.scissor(Mt.copy(Qt).multiplyScalar(ke()).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){It.setScissorTest(he=A)},this.setOpaqueSort=function(A){ie=A},this.setTransparentSort=function(A){nn=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,tt=!0){let $=0;if(A){let J=!1;if(Q!==null){let Dt=Q.texture.format;J=m.has(Dt)}if(J){let Dt=Q.texture.type,Yt=x.has(Dt),Ct=O.getClearColor(),kt=O.getClearAlpha(),jt=Ct.r,_e=Ct.g,Fe=Ct.b;Yt?(M[0]=jt,M[1]=_e,M[2]=Fe,M[3]=kt,W.clearBufferuiv(W.COLOR,0,M)):(w[0]=jt,w[1]=_e,w[2]=Fe,w[3]=kt,W.clearBufferiv(W.COLOR,0,w))}else $|=W.COLOR_BUFFER_BIT}z&&($|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&W.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),B=A},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),O.dispose(),Lt.dispose(),ot.dispose(),Me.dispose(),ue.dispose(),N.dispose(),xt.dispose(),Z.dispose(),St.dispose(),se.dispose(),dt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",X0),vt.removeEventListener("sessionend",q0),Nr.stop()};function le(A){A.preventDefault(),Ha("WebGLRenderer: Context Lost."),L=!0}function we(){Ha("WebGLRenderer: Context Restored."),L=!1;let A=yn.autoReset,z=Tt.enabled,tt=Tt.autoUpdate,$=Tt.needsUpdate,J=Tt.type;Te(),yn.autoReset=A,Tt.enabled=z,Tt.autoUpdate=tt,Tt.needsUpdate=$,Tt.type=J}function Ht(A){me("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){let z=A.target;z.removeEventListener("dispose",Ye),Bn(z)}function Bn(A){js(A),ue.remove(A)}function js(A){let z=ue.get(A).programs;z!==void 0&&(z.forEach(function(tt){dt.releaseProgram(tt)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,tt,$,J,Dt){z===null&&(z=Ne);let Yt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ct=C1(A,z,tt,$,J);It.setMaterial($,Yt);let kt=tt.index,jt=1;if($.wireframe===!0){if(kt=Z.getWireframeAttribute(tt),kt===void 0)return;jt=2}let _e=tt.drawRange,Fe=tt.attributes.position,Jt=_e.start*jt,Be=(_e.start+_e.count)*jt;Dt!==null&&(Jt=Math.max(Jt,Dt.start*jt),Be=Math.min(Be,(Dt.start+Dt.count)*jt)),kt!==null?(Jt=Math.max(Jt,0),Be=Math.min(Be,kt.count)):Fe!=null&&(Jt=Math.max(Jt,0),Be=Math.min(Be,Fe.count));let Cn=Be-Jt;if(Cn<0||Cn===1/0)return;St.setup(J,$,Ct,tt,kt);let sn,Qe=it;if(kt!==null&&(sn=T.get(kt),Qe=Rt,Qe.setIndex(sn)),J.isMesh)$.wireframe===!0?(It.setLineWidth($.wireframeLinewidth*ke()),Qe.setMode(W.LINES)):Qe.setMode(W.TRIANGLES);else if(J.isLine){let Zn=$.linewidth;Zn===void 0&&(Zn=1),It.setLineWidth(Zn*ke()),J.isLineSegments?Qe.setMode(W.LINES):J.isLineLoop?Qe.setMode(W.LINE_LOOP):Qe.setMode(W.LINE_STRIP)}else J.isPoints?Qe.setMode(W.POINTS):J.isSprite&&Qe.setMode(W.TRIANGLES);if(J.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))Qe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Zn=J._multiDrawStarts,Kt=J._multiDrawCounts,ai=J._multiDrawCount,ze=kt?T.get(kt).bytesPerElement:1,Ur=ue.get($).currentProgram.getUniforms();for(let Jn=0;Jn<ai;Jn++)Ur.setValue(W,"_gl_DrawID",Jn),Qe.render(Zn[Jn]/ze,Kt[Jn])}else if(J.isInstancedMesh)Qe.renderInstances(Jt,Cn,J.count);else if(tt.isInstancedBufferGeometry){let Zn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Kt=Math.min(tt.instanceCount,Zn);Qe.renderInstances(Jt,Cn,Kt)}else Qe.render(Jt,Cn)};function W0(A,z,tt,$){B!==null&&A.isNodeMaterial&&B.setObject($,A),Et===!0&&at.setState(A,tt,!1),A.transparent===!0&&A.side===hn&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,ba(A,z,$),A.side=gs,A.needsUpdate=!0,ba(A,z,$),A.side=hn):ba(A,z,$)}this.compile=function(A,z,tt=null){tt===null&&(tt=A),B!==null&&B.renderStart(A,z,tt),S=ot.get(tt),S.init(z),v.push(S),tt.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),A!==tt&&A.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights(),B!==null&&B.updateLights(S.state.lightsArray),Wt=this.localClippingEnabled,Et=at.init(this.clippingPlanes,Wt),Et===!0&&at.setGlobalState(this.clippingPlanes,z),B!==null&&Tt.render(S.state.shadowsArray,tt,z);let $=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Dt=J.material;if(Dt)if(Array.isArray(Dt))for(let Yt=0;Yt<Dt.length;Yt++){let Ct=Dt[Yt];W0(Ct,tt,z,J),$.add(Ct)}else W0(Dt,tt,z,J),$.add(Dt)}),S=v.pop(),B!==null&&B.renderEnd(),$},this.compileAsync=function(A,z,tt=null){let $=this.compile(A,z,tt);return new Promise(J=>{function Dt(){if($.forEach(function(Yt){let kt=ue.get(Yt).currentProgram;(kt===void 0||kt.isReady())&&$.delete(Yt)}),$.size===0){J(A);return}setTimeout(Dt,10)}Ie.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let hd=null;function R1(A){hd&&hd(A)}function X0(){Nr.stop()}function q0(){Nr.start()}let Nr=new $m;Nr.setAnimationLoop(R1),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(A){hd=A,vt.setAnimationLoop(A),A===null?Nr.stop():Nr.start()},vt.addEventListener("sessionstart",X0),vt.addEventListener("sessionend",q0),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(A,z);let tt=vt.enabled===!0&&vt.isPresenting===!0,$=C!==null&&(Q===null||tt)&&C.begin(P,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(z),z=vt.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,z,Q),S=ot.get(A,v.length),S.init(z),S.state.textureUnits=Me.getTextureUnits(),v.push(S),Bt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?bt.setFromArrayCamera(z):ht.setFromProjectionMatrix(Bt,Vi,z.reversedDepth),Wt=this.localClippingEnabled,Et=at.init(this.clippingPlanes,Wt),R=Lt.get(A,_.length),R.init(),_.push(R),this.info.render.frame++,vt.enabled===!0&&vt.isPresenting===!0){let Yt=P.xr.getDepthSensingMesh();Yt!==null&&ud(Yt,z,-1/0,P.sortObjects)}ud(A,z,0,P.sortObjects),R.finish(),B!==null&&B.updateLights(S.state.lightsArray),P.sortObjects===!0&&R.sort(ie,nn),Ue=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Ue&&O.addToRenderList(R,A),this.info.autoReset===!0&&this.info.reset(),Et===!0&&at.beginShadows();let J=S.state.shadowsArray;if(Tt.render(J,A,z),Et===!0&&at.endShadows(),($&&C.hasRenderPass())===!1){let Yt=R.opaque,Ct=R.transmissive;if(S.setupLights(),z.isArrayCamera){let kt=z.cameras;if(Ct.length>0)for(let jt=0,_e=kt.length;jt<_e;jt++){let Fe=kt[jt];$0(Yt,Ct,A,Fe)}Ue&&O.render(A);for(let jt=0,_e=kt.length;jt<_e;jt++){let Fe=kt[jt];Y0(R,A,Fe,Fe.viewport)}}else Ct.length>0&&$0(Yt,Ct,A,z),Ue&&O.render(A),Y0(R,A,z)}Q!==null&&V===0&&(Me.updateMultisampleRenderTarget(Q),Me.updateRenderTargetMipmap(Q)),$&&C.end(P),A.isScene===!0&&A.onAfterRender(P,A,z),St.resetDefaultState(),Y=-1,j=null,v.pop(),v.length>0?(S=v[v.length-1],Me.setTextureUnits(S.state.textureUnits),Et===!0&&at.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,B!==null&&B.renderEnd()};function ud(A,z,tt,$){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)tt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let Yt=z.isArrayCamera?bt:ht;if(!A.frustumCulled||A.intersectsFrustum(Yt)){$&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Bt);let Ct=xt.update(A),kt=A.material;kt.visible&&R.push(A,Ct,kt,tt,ee.z,null,z)}}else if(A.isMesh||A.isLine||A.isPoints){let Yt=z.isArrayCamera?bt:ht;if(!A.frustumCulled||A.intersectsFrustum(Yt)){let Ct=xt.update(A),kt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ee.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ee.copy(Ct.boundingSphere.center)),ee.applyMatrix4(A.matrixWorld).applyMatrix4(Bt)),Array.isArray(kt)){let jt=Ct.groups;for(let _e=0,Fe=jt.length;_e<Fe;_e++){let Jt=jt[_e],Be=kt[Jt.materialIndex];Be&&Be.visible&&R.push(A,Ct,Be,tt,ee.z,Jt,z)}}else kt.visible&&R.push(A,Ct,kt,tt,ee.z,null,z)}}}let Dt=A.children;for(let Yt=0,Ct=Dt.length;Yt<Ct;Yt++)ud(Dt[Yt],z,tt,$)}function Y0(A,z,tt,$){let{opaque:J,transmissive:Dt,transparent:Yt}=A;S.setupLightsView(tt),Et===!0&&at.setGlobalState(P.clippingPlanes,tt),$&&It.viewport(nt.copy($)),J.length>0&&fc(J,z,tt),Dt.length>0&&fc(Dt,z,tt),Yt.length>0&&fc(Yt,z,tt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function $0(A,z,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Jt=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new bn(1,1,{generateMipmaps:!0,type:Jt?Ln:bi,minFilter:Ws,samples:Math.max(4,Ke.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}let Dt=S.state.transmissionRenderTarget[$.id],Yt=$.viewport||nt;Dt.setSize(Yt.z*P.transmissionResolutionScale,Yt.w*P.transmissionResolutionScale);let Ct=P.getRenderTarget(),kt=P.getActiveCubeFace(),jt=P.getActiveMipmapLevel();P.setRenderTarget(Dt),P.getClearColor(st),Ut=P.getClearAlpha(),Ut<1&&P.setClearColor(16777215,.5),P.clear(),Ue&&O.render(tt);let _e=P.toneMapping;P.toneMapping=xs;let Fe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),Et===!0&&at.setGlobalState(P.clippingPlanes,$),fc(A,tt,$),Me.updateMultisampleRenderTarget(Dt),Me.updateRenderTargetMipmap(Dt),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Be=0,Cn=z.length;Be<Cn;Be++){let sn=z[Be],{object:Qe,geometry:Zn,material:Kt,group:ai}=sn;if(Kt.side===hn&&Qe.layers.test($.layers)){let ze=Kt.side;Kt.side=En,Kt.needsUpdate=!0,Z0(Qe,tt,$,Zn,Kt,ai),Kt.side=ze,Kt.needsUpdate=!0,Jt=!0}}Jt===!0&&(Me.updateMultisampleRenderTarget(Dt),Me.updateRenderTargetMipmap(Dt))}P.setRenderTarget(Ct,kt,jt),P.setClearColor(st,Ut),Fe!==void 0&&($.viewport=Fe),P.toneMapping=_e}function fc(A,z,tt){let $=z.isScene===!0?z.overrideMaterial:null;for(let J=0,Dt=A.length;J<Dt;J++){let Yt=A[J],{object:Ct,geometry:kt,group:jt}=Yt,_e=Yt.material;_e.allowOverride===!0&&$!==null&&(_e=$),Ct.layers.test(tt.layers)&&Z0(Ct,z,tt,kt,_e,jt)}}function Z0(A,z,tt,$,J,Dt){B!==null&&J.isNodeMaterial&&B.setObject(A,J),A.onBeforeRender(P,z,tt,$,J,Dt),A.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(P,z,tt,$,A,Dt),J.transparent===!0&&J.side===hn&&J.forceSinglePass===!1?(J.side=En,J.needsUpdate=!0,P.renderBufferDirect(tt,z,$,J,A,Dt),J.side=gs,J.needsUpdate=!0,P.renderBufferDirect(tt,z,$,J,A,Dt),J.side=hn):P.renderBufferDirect(tt,z,$,J,A,Dt),A.onAfterRender(P,z,tt,$,J,Dt)}function J0(A){let z=0;for(let tt of A)tt.texture!==null&&z++;return z}function ba(A,z,tt){z.isScene!==!0&&(z=Ne);let $=ue.get(A),J=S.state.lights,Dt=S.state.shadowsArray,Yt=J.state.version,Ct=dt.getParameters(A,J.state,Dt,z,tt,S.state.lightProbeGridArray),kt=dt.getProgramCacheKey(Ct),jt=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,$.fog=z.fog;let _e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=N.get(A.envMap||$.environment,_e),$.envMapRotation=$.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",Ye),jt=new Map,$.programs=jt,$.programVariants=new Map);let Fe=jt.get(kt);if(Fe!==void 0){if($.currentProgram===Fe&&$.lightsStateVersion===Yt)return Q0(A,Ct),Fe}else Ct.uniforms=dt.getUniforms(A),B!==null&&A.isNodeMaterial&&B.build(A,tt,Ct),A.onBeforeCompile(Ct,P),Fe=dt.acquireProgram(Ct,kt),jt.set(kt,Fe),$.uniforms=Ct.uniforms;let Jt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Jt.clippingPlanes=at.uniform),Q0(A,Ct),$.needsLights=I1(A),$.lightsStateVersion=Yt,$.needsLights&&(Jt.ambientLightColor.value=J.state.ambient,Jt.lightProbe.value=J.state.probe,Jt.sunLights.value=J.state.sun,Jt.sunLightShadows.value=J.state.sunShadow,Jt.directionalLights.value=J.state.directional,Jt.directionalLightShadows.value=J.state.directionalShadow,Jt.spotLights.value=J.state.spot,Jt.spotLightShadows.value=J.state.spotShadow,Jt.rectAreaLights.value=J.state.rectArea,Jt.ltc_1.value=J.state.rectAreaLTC1,Jt.ltc_2.value=J.state.rectAreaLTC2,Jt.pointLights.value=J.state.point,Jt.pointLightShadows.value=J.state.pointShadow,Jt.hemisphereLights.value=J.state.hemi,Jt.sunShadowMatrix.value=J.state.sunShadowMatrix,Jt.sunShadowCascade.value=J.state.sunShadowCascade,Jt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Jt.spotLightMatrix.value=J.state.spotLightMatrix,Jt.spotLightMap.value=J.state.spotLightMap,Jt.pointShadowMatrix.value=J.state.pointShadowMatrix),$.numLightProbeGrids=J0(S.state.lightProbeGridArray),$.currentProgram=Fe,$.uniformsList=null,Fe}function A1(A,z,tt,$,J){let Dt=ue.get(A),Yt=Dt.currentProgram.id+","+$+","+J,Ct=Dt.programVariants.get(Yt);return Ct===void 0?(Ct=ba(A,z,tt),Dt.programVariants.set(Yt,Ct)):(Dt.currentProgram=Ct,Dt.uniformsList=null,Dt.outputColorSpace=$,Dt.toneMapping=J),Ct}function K0(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Jo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Q0(A,z){let tt=ue.get(A);tt.outputColorSpace=z.outputColorSpace,tt.batching=z.batching,tt.batchingColor=z.batchingColor,tt.instancing=z.instancing,tt.instancingColor=z.instancingColor,tt.instancingMorph=z.instancingMorph,tt.skinning=z.skinning,tt.morphTargets=z.morphTargets,tt.morphNormals=z.morphNormals,tt.morphColors=z.morphColors,tt.morphTargetsCount=z.morphTargetsCount,tt.numClippingPlanes=z.numClippingPlanes,tt.numIntersection=z.numClipIntersection,tt.vertexAlphas=z.vertexAlphas,tt.vertexTangents=z.vertexTangents,tt.toneMapping=z.toneMapping}function C1(A,z,tt,$,J){z.isScene!==!0&&(z=Ne),Me.resetTextureUnits();let Dt=z.fog,Yt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?z.environment:null,Ct=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Le.workingColorSpace,kt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,jt=N.get($.envMap||Yt,kt),_e=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Fe=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Jt=!!tt.morphAttributes.position,Be=!!tt.morphAttributes.normal,Cn=!!tt.morphAttributes.color,sn=xs;$.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(sn=P.toneMapping);let Qe=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Zn=Qe!==void 0?Qe.length:0,Kt=ue.get($),ai=S.state.lights;if(Et===!0&&(Wt===!0||A!==j)){let pn=A===j&&$.id===Y;at.setState($,A,pn)}let ze=!1,Ur=!1;$.version===Kt.__version?Kt.needsLights&&Kt.lightsStateVersion!==ai.state.version||J.isBatchedMesh&&Kt.batching===!1||!J.isBatchedMesh&&Kt.batching===!0||J.isBatchedMesh&&Kt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Kt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Kt.instancing===!1||!J.isInstancedMesh&&Kt.instancing===!0||J.isSkinnedMesh&&Kt.skinning===!1||!J.isSkinnedMesh&&Kt.skinning===!0||J.isInstancedMesh&&Kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Kt.instancingMorph===!1&&J.morphTexture!==null||Kt.envMap!==jt||$.fog===!0&&Kt.fog!==Dt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==at.numPlanes||Kt.numIntersection!==at.numIntersection)||Kt.vertexAlphas!==_e||Kt.vertexTangents!==Fe||Kt.morphTargets!==Jt||Kt.morphNormals!==Be||Kt.morphColors!==Cn||Kt.morphTargetsCount!==Zn||Kt.numLightProbeGrids!==J0(S.state.lightProbeGridArray)?ze=!0:(Kt.outputColorSpace!==Ct||Kt.toneMapping!==sn)&&(Ur=!0):(ze=!0,Kt.__version=$.version);let Jn=Kt.currentProgram;(ze===!0||Ur===!0)&&(Jn=Ur===!0?A1($,z,J,Ct,sn):ba($,z,J),B&&$.isNodeMaterial&&B.onUpdateProgram($,Jn,Kt));let pc=!1,tr=!1,Fr=!1,He=Jn.getUniforms(),Vn=Kt.uniforms;if(It.useProgram(Jn.program)&&(pc=!0,tr=!0,Fr=!0),$.id!==Y&&(Y=$.id,tr=!0),pc||j!==A){It.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),He.setValue(W,"projectionMatrix",A.projectionMatrix),He.setValue(W,"viewMatrix",A.matrixWorldInverse);let On=He.map.cameraPosition;On!==void 0&&On.setValue(W,Ee.setFromMatrixPosition(A.matrixWorld)),Ke.logarithmicDepthBuffer&&He.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&He.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,tr=!0,Fr=!0)}if(Kt.needsLights&&(ai.state.sunShadowMap.length>0&&He.setValue(W,"sunShadowMap",ai.state.sunShadowMap,Me),ai.state.directionalShadowMap.length>0&&He.setValue(W,"directionalShadowMap",ai.state.directionalShadowMap,Me),ai.state.spotShadowMap.length>0&&He.setValue(W,"spotShadowMap",ai.state.spotShadowMap,Me),ai.state.pointShadowMap.length>0&&He.setValue(W,"pointShadowMap",ai.state.pointShadowMap,Me)),J.isSkinnedMesh){He.setOptional(W,J,"bindMatrix"),He.setOptional(W,J,"bindMatrixInverse");let pn=J.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),He.setValue(W,"boneTexture",pn.boneTexture,Me))}J.isBatchedMesh&&(He.setOptional(W,J,"batchingTexture"),He.setValue(W,"batchingTexture",J._matricesTexture,Me),He.setOptional(W,J,"batchingIdTexture"),He.setValue(W,"batchingIdTexture",J._indirectTexture,Me),He.setOptional(W,J,"batchingColorTexture"),J._colorsTexture!==null&&He.setValue(W,"batchingColorTexture",J._colorsTexture,Me));let $i=tt.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&ct.update(J,tt,Jn),(tr||Kt.receiveShadow!==J.receiveShadow)&&(Kt.receiveShadow=J.receiveShadow,He.setValue(W,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&z.environment!==null&&(Vn.envMapIntensity.value=z.environmentIntensity),Vn.dfgLUT!==void 0&&(Vn.dfgLUT.value=I_()),tr){if(He.setValue(W,"toneMappingExposure",P.toneMappingExposure),Kt.needsLights&&P1(Vn,Fr),Dt&&$.fog===!0&&wt.refreshFogUniforms(Vn,Dt),wt.refreshMaterialUniforms(Vn,$,Ft,ne,S.state.transmissionRenderTarget[A.id]),Kt.needsLights&&Kt.numLightProbeGrids>0){let pn=E,On=0;for(let Ls of S.state.lightProbeGridArray)Ls.texture!==null&&(pn.textures[On]=Ls.texture,pn.min[On]=Ls.boundingBox.min,pn.max[On]=Ls.boundingBox.max,pn.resolution[On]=Ls.resolution,On++);for(let Ls in pn)pn[Ls].length=On;Vn.probesSH.value=pn.textures,Vn.probesMin.value=pn.min,Vn.probesMax.value=pn.max,Vn.probesResolution.value=pn.resolution}Jo.upload(W,K0(Kt),Vn,Me)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Jo.upload(W,K0(Kt),Vn,Me),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&He.setValue(W,"center",J.center),He.setValue(W,"modelViewMatrix",J.modelViewMatrix),He.setValue(W,"normalMatrix",J.normalMatrix),He.setValue(W,"modelMatrix",J.matrixWorld),$.uniformsGroups!==void 0){let pn=$.uniformsGroups;for(let On=0,Ls=pn.length;On<Ls;On++){let tp=pn[On];se.update(tp,Jn),se.bind(tp,Jn)}}return Jn}function P1(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function I1(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,z,tt){let $=ue.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ue.get(A.texture).__webglTexture=z,ue.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let tt=ue.get(A);tt.__webglFramebuffer=z,tt.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,tt=0){Q=A,q=z,V=tt;let $=null,J=!1,Dt=!1;if(A){let Ct=ue.get(A);if(Ct.__useDefaultFramebuffer!==void 0){It.bindFramebuffer(W.FRAMEBUFFER,Ct.__webglFramebuffer),nt.copy(A.viewport),Mt.copy(A.scissor),qt=A.scissorTest,It.viewport(nt),It.scissor(Mt),It.setScissorTest(qt),Y=-1;return}else if(Ct.__webglFramebuffer===void 0)Me.setupRenderTarget(A);else if(Ct.__hasExternalTextures)Me.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let _e=A.depthTexture;if(Ct.__boundDepthTexture!==_e){if(_e!==null&&ue.has(_e)&&(A.width!==_e.image.width||A.height!==_e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(A)}}let kt=A.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Dt=!0);let jt=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[z])?$=jt[z][tt]:$=jt[z],J=!0):A.samples>0&&Me.useMultisampledRTT(A)===!1?$=ue.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?$=jt[tt]:$=jt,nt.copy(A.viewport),Mt.copy(A.scissor),qt=A.scissorTest}else nt.copy(rt).multiplyScalar(Ft).floor(),Mt.copy(Qt).multiplyScalar(Ft).floor(),qt=he;if(tt!==0&&($=U),It.bindFramebuffer(W.FRAMEBUFFER,$)&&It.drawBuffers(A,$),It.viewport(nt),It.scissor(Mt),It.setScissorTest(qt),J){let Ct=ue.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ct.__webglTexture,tt)}else if(Dt){let Ct=z;for(let kt=0;kt<A.textures.length;kt++){let jt=ue.get(A.textures[kt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+kt,jt.__webglTexture,tt,Ct)}}else if(A!==null&&tt!==0){let Ct=ue.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ct.__webglTexture,tt)}Y=-1};function j0(A){let z=ue.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=Ke.textureFormatReadable(A.format),z.__typeReadable=Ke.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,tt,$,J,Dt,Yt,Ct=0){if(!(A&&A.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Yt!==void 0&&(kt=kt[Yt],Array.isArray(kt)&&(kt=kt[0])),kt){It.bindFramebuffer(W.FRAMEBUFFER,kt);try{let jt=A.textures[Ct],_e=jt.format,Fe=jt.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ct);let Jt=j0(jt);if(Jt.__formatReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-$&&tt>=0&&tt<=A.height-J&&W.readPixels(z,tt,$,J,_t.convert(_e),_t.convert(Fe),Dt)}finally{let jt=Q!==null?ue.get(Q).__webglFramebuffer:null;It.bindFramebuffer(W.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(A,z,tt,$,J,Dt,Yt,Ct=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Yt!==void 0&&(kt=kt[Yt],Array.isArray(kt)&&(kt=kt[0])),kt)if(z>=0&&z<=A.width-$&&tt>=0&&tt<=A.height-J){It.bindFramebuffer(W.FRAMEBUFFER,kt);let jt=A.textures[Ct],_e=jt.format,Fe=jt.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ct);let Jt=j0(jt);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Be=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Be),W.bufferData(W.PIXEL_PACK_BUFFER,Dt.byteLength,W.STREAM_READ),W.readPixels(z,tt,$,J,_t.convert(_e),_t.convert(Fe),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let Cn=Q!==null?ue.get(Q).__webglFramebuffer:null;It.bindFramebuffer(W.FRAMEBUFFER,Cn);let sn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await pm(W,sn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Be),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Dt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Be),W.deleteSync(sn),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,tt=0){let $=Math.pow(2,-tt),J=Math.floor(A.image.width*$),Dt=Math.floor(A.image.height*$),Yt=z!==null?z.x:0,Ct=z!==null?z.y:0;Me.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,tt,0,0,Yt,Ct,J,Dt),It.unbindTexture()},this.copyTextureToTexture=function(A,z,tt=null,$=null,J=0,Dt=0){let Yt,Ct,kt,jt,_e,Fe,Jt,Be,Cn,sn=A.isCompressedTexture?A.mipmaps[Dt]:A.image;if(tt!==null)Yt=tt.max.x-tt.min.x,Ct=tt.max.y-tt.min.y,kt=tt.isBox3?tt.max.z-tt.min.z:1,jt=tt.min.x,_e=tt.min.y,Fe=tt.isBox3?tt.min.z:0;else{let He=Math.pow(2,-J);Yt=Math.floor(sn.width*He),Ct=Math.floor(sn.height*He),A.isDataArrayTexture?kt=sn.depth:A.isData3DTexture?kt=Math.floor(sn.depth*He):kt=1,jt=0,_e=0,Fe=0}$!==null?(Jt=$.x,Be=$.y,Cn=$.z):(Jt=0,Be=0,Cn=0);let Qe=_t.convert(z.format),Zn=_t.convert(z.type),Kt;z.isData3DTexture?(Me.setTexture3D(z,0),Kt=W.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Me.setTexture2DArray(z,0),Kt=W.TEXTURE_2D_ARRAY):(Me.setTexture2D(z,0),Kt=W.TEXTURE_2D),It.activeTexture(W.TEXTURE0),It.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,z.flipY),It.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),It.pixelStorei(W.UNPACK_ALIGNMENT,z.unpackAlignment);let ai=It.getParameter(W.UNPACK_ROW_LENGTH),ze=It.getParameter(W.UNPACK_IMAGE_HEIGHT),Ur=It.getParameter(W.UNPACK_SKIP_PIXELS),Jn=It.getParameter(W.UNPACK_SKIP_ROWS),pc=It.getParameter(W.UNPACK_SKIP_IMAGES);It.pixelStorei(W.UNPACK_ROW_LENGTH,sn.width),It.pixelStorei(W.UNPACK_IMAGE_HEIGHT,sn.height),It.pixelStorei(W.UNPACK_SKIP_PIXELS,jt),It.pixelStorei(W.UNPACK_SKIP_ROWS,_e),It.pixelStorei(W.UNPACK_SKIP_IMAGES,Fe);let tr=A.isDataArrayTexture||A.isData3DTexture,Fr=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let He=ue.get(A),Vn=ue.get(z),$i=ue.get(He.__renderTarget),pn=ue.get(Vn.__renderTarget);It.bindFramebuffer(W.READ_FRAMEBUFFER,$i.__webglFramebuffer),It.bindFramebuffer(W.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let On=0;On<kt;On++)tr&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ue.get(A).__webglTexture,J,Fe+On),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ue.get(z).__webglTexture,Dt,Cn+On)),W.blitFramebuffer(jt,_e,jt+Yt,_e+Ct,Jt,Be,Jt+Yt,Be+Ct,W.DEPTH_BUFFER_BIT,W.NEAREST);It.bindFramebuffer(W.READ_FRAMEBUFFER,null),It.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||ue.has(A)){let He=ue.get(A),Vn=ue.get(z);It.bindFramebuffer(W.READ_FRAMEBUFFER,I),It.bindFramebuffer(W.DRAW_FRAMEBUFFER,k);for(let $i=0;$i<kt;$i++)tr?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,He.__webglTexture,J,Fe+$i):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,He.__webglTexture,J),Fr?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Vn.__webglTexture,Dt,Cn+$i):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Vn.__webglTexture,Dt),J!==0?W.blitFramebuffer(jt,_e,jt+Yt,_e+Ct,Jt,Be,Jt+Yt,Be+Ct,W.COLOR_BUFFER_BIT,W.NEAREST):Fr?W.copyTexSubImage3D(Kt,Dt,Jt,Be,Cn+$i,jt,_e,Yt,Ct):W.copyTexSubImage2D(Kt,Dt,Jt,Be,jt,_e,Yt,Ct);It.bindFramebuffer(W.READ_FRAMEBUFFER,null),It.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Fr?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Kt,Dt,Jt,Be,Cn,Yt,Ct,kt,Qe,Zn,sn.data):z.isCompressedArrayTexture?W.compressedTexSubImage3D(Kt,Dt,Jt,Be,Cn,Yt,Ct,kt,Qe,sn.data):W.texSubImage3D(Kt,Dt,Jt,Be,Cn,Yt,Ct,kt,Qe,Zn,sn):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Dt,Jt,Be,Yt,Ct,Qe,Zn,sn.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Dt,Jt,Be,sn.width,sn.height,Qe,sn.data):W.texSubImage2D(W.TEXTURE_2D,Dt,Jt,Be,Yt,Ct,Qe,Zn,sn);It.pixelStorei(W.UNPACK_ROW_LENGTH,ai),It.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ze),It.pixelStorei(W.UNPACK_SKIP_PIXELS,Ur),It.pixelStorei(W.UNPACK_SKIP_ROWS,Jn),It.pixelStorei(W.UNPACK_SKIP_IMAGES,pc),Dt===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&W.generateMipmap(Kt),It.unbindTexture()},this.initRenderTarget=function(A){ue.get(A).__webglFramebuffer===void 0&&Me.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Me.setTextureCube(A,0):A.isData3DTexture?Me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Me.setTexture2DArray(A,0):Me.setTexture2D(A,0),It.unbindTexture()},this.resetState=function(){q=0,V=0,Q=null,It.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}};var pu=class extends Gs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new fe;t.deleteAttribute("uv");let e=new te({side:En}),i=new te,s=new tn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new D(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ar(t,i,6),a=new rn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new D(t,jo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new D(t,jo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new D(t,jo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new D(t,jo(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new D(t,jo(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new D(t,jo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function jo(n){return new rl({color:0,emissive:16777215,emissiveIntensity:n})}var mu=class{constructor(t,e={}){this.enabled=!0;let i=e.defaultThickness!==void 0?e.defaultThickness:.003,s=new Xt().fromArray(e.defaultColor!==void 0?e.defaultColor:[0,0,0]),r=e.defaultAlpha!==void 0?e.defaultAlpha:1,o=e.defaultKeepAlive!==void 0?e.defaultKeepAlive:!1,a={},l=60,c={},h={},u={outlineThickness:{value:i},outlineColor:{value:s},outlineAlpha:{value:r}},d=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),f=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function p(){return new cn({type:"OutlineEffect",uniforms:Ui.merge([Ot.fog,Ot.displacementmap,u]),vertexShader:d,fragmentShader:f,side:En})}function g(v){let C=a[v.uuid];return C===void 0&&(C={material:p(),used:!0,keepAlive:o,count:0},a[v.uuid]=C),C.used=!0,C.material}function m(v){let C=g(v);return c[C.uuid]=v,S(C,v),C}function x(v){let C=v.geometry,P=C!==void 0&&C.attributes.normal!==void 0;return v.isMesh===!0&&v.material!==void 0&&P===!0}function M(v){if(x(v)!==!1){if(Array.isArray(v.material))for(let C=0,P=v.material.length;C<P;C++)v.material[C]=m(v.material[C]);else v.material=m(v.material);h[v.uuid]=v.onBeforeRender,v.onBeforeRender=E}}function w(v){if(x(v)!==!1){if(Array.isArray(v.material))for(let C=0,P=v.material.length;C<P;C++)v.material[C]=c[v.material[C].uuid];else v.material=c[v.material.uuid];v.onBeforeRender=h[v.uuid]}}function E(v,C,P,L,B){let U=c[B.uuid];U!==void 0&&R(B,U)}function R(v,C){let P=C.userData.outlineParameters;v.uniforms.outlineAlpha.value=C.opacity,P!==void 0&&(P.thickness!==void 0&&(v.uniforms.outlineThickness.value=P.thickness),P.color!==void 0&&v.uniforms.outlineColor.value.fromArray(P.color),P.alpha!==void 0&&(v.uniforms.outlineAlpha.value=P.alpha)),C.displacementMap&&(v.uniforms.displacementMap.value=C.displacementMap,v.uniforms.displacementScale.value=C.displacementScale,v.uniforms.displacementBias.value=C.displacementBias)}function S(v,C){if(v.name==="invisible")return;let P=C.userData.outlineParameters;v.fog=C.fog,v.toneMapped=C.toneMapped,v.premultipliedAlpha=C.premultipliedAlpha,v.displacementMap=C.displacementMap,P!==void 0?(C.visible===!1?v.visible=!1:v.visible=P.visible!==void 0?P.visible:!0,v.transparent=P.alpha!==void 0&&P.alpha<1?!0:C.transparent,P.keepAlive!==void 0&&(a[C.uuid].keepAlive=P.keepAlive)):(v.transparent=C.transparent,v.visible=C.visible),(C.wireframe===!0||C.depthTest===!1)&&(v.visible=!1),C.clippingPlanes&&(v.clipping=!0,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.clipShadows=C.clipShadows),v.version=C.version}function _(){let v;v=Object.keys(c);for(let C=0,P=v.length;C<P;C++)c[v[C]]=void 0;v=Object.keys(h);for(let C=0,P=v.length;C<P;C++)h[v[C]]=void 0;v=Object.keys(a);for(let C=0,P=v.length;C<P;C++){let L=v[C];a[L].used===!1?(a[L].count++,a[L].keepAlive===!1&&a[L].count>l&&delete a[L]):(a[L].used=!1,a[L].count=0)}}this.render=function(v,C){if(this.enabled===!1){t.render(v,C);return}let P=t.autoClear;t.autoClear=this.autoClear,t.render(v,C),t.autoClear=P,this.renderOutline(v,C)},this.renderOutline=function(v,C){let P=t.autoClear,L=v.matrixWorldAutoUpdate,B=v.background,U=t.shadowMap.enabled;v.matrixWorldAutoUpdate=!1,v.background=null,t.autoClear=!1,t.shadowMap.enabled=!1,v.traverse(M),t.render(v,C),v.traverse(w),_(),v.matrixWorldAutoUpdate=L,v.background=B,t.autoClear=P,t.shadowMap.enabled=U},this.setSize=function(v,C){t.setSize(v,C)}}};var ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},L_=new Zr(-1,1,1,-1,0,1),Nf=class extends je{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}},D_=new Nf,vs=class{constructor(t){this._mesh=new D(D_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,L_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var gu=class extends di{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof cn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ui.clone(t.uniforms),this.material=new cn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new vs(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Cl=class extends di{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},xu=class extends di{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var yu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new lt);this._width=i.width,this._height=i.height,e=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gu(ta),this.copyPass.material.blending=es,this.timer=new cl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cl!==void 0&&(o instanceof Cl?i=!0:o instanceof xu&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mu=class extends di{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Xt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var rg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ea=class n extends di{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new Xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(r,o,{type:Ln,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new bn(r,o,{type:Ln,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new bn(r,o,{type:Ln,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=rg;this.highPassUniforms=Ui.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ui.clone(ta.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,premultipliedAlpha:!0,blending:Vs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xt,this._oldClearAlpha=1,this._basic=new Wn,this._fsQuad=new vs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new lt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new cn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new cn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ea.BlurDirectionX=new lt(1,0);ea.BlurDirectionY=new lt(0,1);var Pl={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var vu=class extends di{constructor(t,e,i){super(),this.scene=t,this.camera=e;let s=i.focus!==void 0?i.focus:1,r=i.aperture!==void 0?i.aperture:.025,o=i.maxblur!==void 0?i.maxblur:1;this._renderTargetDepth=new bn(1,1,{minFilter:gn,magFilter:gn,type:Ln}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new Vo,this._materialDepth.depthPacking=lf,this._materialDepth.blending=es;let a=Ui.clone(Pl.uniforms);a.tDepth.value=this._renderTargetDepth.texture,a.focus.value=s,a.aspect.value=e.aspect,a.aperture.value=r,a.maxblur.value=o,a.nearClip.value=e.near,a.farClip.value=e.far,this.materialBokeh=new cn({defines:Object.assign({},Pl.defines),uniforms:a,vertexShader:Pl.vertexShader,fragmentShader:Pl.fragmentShader}),this.uniforms=a,this._fsQuad=new vs(this.materialBokeh),this._oldClearColor=new Xt}render(t,e,i){this.scene.overrideMaterial=this._materialDepth,t.getClearColor(this._oldClearColor);let s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this._renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this._fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this._renderTargetDepth.setSize(t,e)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var Il={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var _u=class extends di{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ui.clone(Il.uniforms),this.material=new zo({name:Il.name,uniforms:this.uniforms,vertexShader:Il.vertexShader,fragmentShader:Il.fragmentShader}),this._fsQuad=new vs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===Ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ul?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===pl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var bu=1337;function yt(){return bu=bu*16807%2147483647,(bu-1)/2147483646}function Sn(n){bu=n}function N_(n,t){let e=new Float32Array(n*n);Sn(t);for(let i=0;i<e.length;i++)e[i]=yt();return(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),h=l*l*(3-2*l),u=n,d=(r%u+u)%u,f=(o%u+u)%u,p=(d+1)%u,g=(f+1)%u,m=e[f*u+d],x=e[f*u+p],M=e[g*u+d],w=e[g*u+p];return m+(x-m)*c+(M-m)*h+(m-x-M+w)*c*h}}function Se(n,t=4,e=5){let i=[];for(let s=0;s<e;s++)i.push({f:N_(t<<s,n+s*97),p:t<<s});return(s,r)=>{let o=0,a=.5,l=0;for(let c of i)o+=c.f(s*c.p,r*c.p)*a,l+=a,a*=.5;return o/l}}var Uf={},Eu=4;function og(n){Eu=n}function Ze(n,t,e,i={}){if(Uf[n])return Uf[n];let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createImageData(t,t),a=new Float32Array(t*t);for(let g=0;g<t;g++)for(let m=0;m<t;m++){let x=e(m/t,g/t,m,g),M=(g*t+m)*4;o.data[M]=Math.max(0,Math.min(255,x.r*255)),o.data[M+1]=Math.max(0,Math.min(255,x.g*255)),o.data[M+2]=Math.max(0,Math.min(255,x.b*255)),o.data[M+3]=x.a===void 0?255:x.a*255,a[g*t+m]=x.h===void 0?.5:x.h}r.putImageData(o,0,0),i.post&&i.post(r,t);let l=new ts(s);l.colorSpace=Mn,l.wrapS=l.wrapT=ds,l.anisotropy=Eu;let c=document.createElement("canvas");c.width=c.height=t;let h=c.getContext("2d"),u=h.createImageData(t,t),d=i.normalStrength||2;for(let g=0;g<t;g++)for(let m=0;m<t;m++){let x=a[g*t+(m-1+t)%t],M=a[g*t+(m+1)%t],w=a[(g-1+t)%t*t+m],E=a[(g+1)%t*t+m],R=(x-M)*d,S=(w-E)*d,_=1,v=Math.hypot(R,S,_);R/=v,S/=v,_/=v;let C=(g*t+m)*4;u.data[C]=(R*.5+.5)*255,u.data[C+1]=(-S*.5+.5)*255,u.data[C+2]=(_*.5+.5)*255,u.data[C+3]=255}h.putImageData(u,0,0);let f=new ts(c);f.wrapS=f.wrapT=ds,f.anisotropy=Eu;let p={map:l,normalMap:f,canvas:s};return Uf[n]=p,p}var oe=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],Ff=(n,t,e)=>n+(t-n)*e,Oe=(n,t,e)=>[Ff(n[0],t[0],e),Ff(n[1],t[1],e),Ff(n[2],t[2],e)],fi=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),wn=n=>n-Math.floor(n);function Ve(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}var K={};function ag(n=1){let t=n>=1?512:256,e=n>=1?256:128;{let r=Se(11,4,6),o=Se(12,16,3);K.grass=Ze("grass",t,(a,l)=>{let c=r(a,l),h=o(a,l),u=Ve(Math.floor(a*180),Math.floor(l*60+Ve(Math.floor(a*180),3)*10)),d=Oe(oe(4156970),oe(8037962),fi(c*1.3-.15+u*.25)),f=Oe(d,oe(9075274),fi((h-.62)*3)*.5);return{r:f[0],g:f[1],b:f[2],h:u*.6+c*.4}},{normalStrength:3})}{let r=Se(21,8,5),o=Se(22,4,4);K.asphalt=Ze("asphalt",t,(a,l,c,h)=>{let u=Ve(c,h),d=r(a,l),f=Math.abs(o(a,l)-.5)<.006?1:0,p=.2+d*.12+(u>.93?.12:0)-(u<.05?.06:0)-f*.12;return{r:p,g:p,b:p*1.04,h:u*.5+d*.3-f*.6}},{normalStrength:2.5})}{let r=Se(31,8,5);K.concrete=Ze("concrete",e*2,(o,a,l,c)=>{let h=r(o,a),u=Ve(l,c),d=wn(o*2)<.012||wn(a*2)<.012?1:0,f=wn(o*4)-.5,p=wn(a*4)-.5,g=Math.hypot(f,p)<.025?1:0,m=Math.pow(Ve(Math.floor(o*64),3),6)*fi(1-wn(a*2)*1.6)*.12,x=.62+h*.15+u*.05-d*.25-g*.3-m;return{r:x,g:x*.98,b:x*.94,h:h*.5+u*.2-d*.7-g*.8}})}{let r=Se(41,8,4);K.brick=Ze("brick",t,(o,a,l,c)=>{let d=Math.floor(a*16),f=d%2*.5,p=wn(o*8+f),g=wn(a*16),m=Math.floor(o*8+f)+d*31,x=p<.05||g<.1,M=Ve(m,7),w=Ve(m,13),E=Oe(oe(9059112),oe(11556666),M);w>.9?E=Oe(E,oe(4857880),.55):w<.08&&(E=Oe(E,oe(13141098),.4));let R=r(o,a),S=Ve(l,c);if(x){let L=.62+R*.1+S*.06;return{r:L,g:L*.96,b:L*.9,h:.05+S*.08}}let _=Math.min((p-.05)/.06,(1-p)/.04,(g-.1)/.12,(1-g)/.08),v=Ve(Math.floor(o*160),Math.floor(a*160))>.93&&_<1.2?1:0,C=Oe(E,oe(5909022),fi(R-.45)*1.2);C=Oe(C,oe(15260872),fi((r(o*.5+.2,a*.5)-.62)*3)*.35);let P=(S-.5)*.08;return{r:C[0]+P-v*.08,g:C[1]+P-v*.06,b:C[2]+P-v*.05,h:.45+Math.min(1,_)*.3+R*.2+S*.1-v*.35}},{normalStrength:3})}{let r=Se(51,4,5);K.siding=Ze("siding",e*2,(o,a,l,c)=>{let u=wn(a*10),d=.82+u*.18-(u>.94?.3:0),f=r(o*.5,a)*.08+Ve(l,Math.floor(c/3))*.03,p=fi(d+f-.05);return{r:p,g:p,b:p,h:u}},{normalStrength:4})}{let r=Se(61,8,5);K.plaster=Ze("plaster",e,(o,a)=>{let l=r(o,a),c=.86+l*.12;return{r:c,g:c,b:c,h:l}},{normalStrength:1.2})}{let r=Se(71,2,5);K.floor=Ze("floor",t,(o,a,l,c)=>{let u=Math.floor(a*8),d=Ve(u,1),f=wn(o*2+d),p=Math.floor(o*2+d)*13+u,g=wn(a*8)<.03||f<.006,m=r(o*.5+p*.17,a*6+p*.3),x=Ve(p,4),M=Oe(Oe(oe(8014376),oe(11038783),x),oe(4860436),fi(m-.45)*1.5+Math.sin(m*60)*.06);return g?{r:M[0]*.5,g:M[1]*.5,b:M[2]*.5,h:0}:{r:M[0],g:M[1],b:M[2],h:.6+m*.2}})}{let r=Se(81,8,4);K.roof=Ze("roof",e*2,(o,a,l,c)=>{let u=Math.floor(a*12),d=wn(a*12),f=wn(o*8+u%2*.5),p=Math.floor(o*8+u%2*.5)+u*17,m=.25+Ve(p,3)*.12+r(o,a)*.1-(d>.9?.15:0)-(f<.03?.1:0)+d*.06;return{r:m*1.05,g:m*.92,b:m*.88,h:d}},{normalStrength:4})}{let r=Se(91,2,5);K.wood=Ze("wood",e*2,(o,a,l,c)=>{let h=r(o*.3,a*4),u=Math.sin((h*30+o*3)*3)*.5+.5,d=Oe(oe(11567184),oe(8015920),u*.6+Ve(l,c)*.08);return{r:d[0],g:d[1],b:d[2],h:u*.6}},{normalStrength:2})}{let r=Se(92,2,5),o=Se(93,8,4);K.paintwood=Ze("paintwood",e,(a,l,c,h)=>{let u=r(a*.3,l*4),d=o(a,l)>.8,f=Math.sin(u*60)*.5+.5;if(d){let g=Oe(oe(9071178),oe(6965808),f);return{r:g[0],g:g[1],b:g[2],h:.2}}let p=.88+f*.05;return{r:p,g:p,b:p*.97,h:.6+f*.1}},{normalStrength:2})}{let r=Se(101,8,6);K.dirt=Ze("dirt",e*2,(o,a,l,c)=>{let h=r(o,a),u=Ve(l,c),d=Oe(oe(4862496),oe(8018490),h*1.2-.1+u*.1),f=u>.985;return{r:f?.6:d[0],g:f?.58:d[1],b:f?.55:d[2],h:h+(f?.5:0)}},{normalStrength:3})}K.tile=Ze("tile",e,(r,o,a,l)=>{let c=wn(r*4)<.04||wn(o*4)<.04,h=(Math.floor(r*4)+Math.floor(o*4))%2,u=c?.55:h?.92:.2;return{r:u,g:u,b:u*(h?.98:1.1),h:c?0:1}});{let r=Se(111,16,3);K.carpet=Ze("carpet",e,(o,a,l,c)=>{let h=r(o,a)*.4+Ve(l,c)*.6,u=.75+h*.25;return{r:u,g:u,b:u,h}},{normalStrength:1.5})}{let r=Se(121,4,5),o=Se(122,32,2);K.metal=Ze("metal",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l*.05),f=.82+d*.12-fi(u-.6)*.8;return{r:f,g:f,b:f,h:d*.3+u*.2}},{normalStrength:1})}{let r=Se(131,4,6);K.rust=Ze("rust",e,(o,a)=>{let l=r(o,a),c=Oe(oe(5921370),oe(9062946),fi(l*1.6-.5));return{r:c[0],g:c[1],b:c[2],h:l}},{normalStrength:2})}{let r=Se(141,4,5);K.bark=Ze("bark",e,(o,a,l,c)=>{let h=r(o*2,a*.4),u=Math.abs(Math.sin(o*40+h*8)),d=Oe(oe(3023384),oe(6968384),u*.7+h*.3);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:4})}{let r=Se(151,8,4);K.leaf=Ze("leaf",e,(o,a,l,c)=>{let h=r(o,a),u=Ve(l>>2,c>>2),d=Oe(oe(2775582),oe(6986298),h*.8+u*.4);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:3})}{let r=Se(155,8,5);K.hedge=Ze("hedge",e,(o,a,l,c)=>{let h=r(o,a),u=Ve(l>>1,c>>1),d=Oe(oe(1981974),oe(5933618),h*.9+u*.3-.1);return{r:d[0],g:d[1],b:d[2],h:h*.5+u*.5}},{normalStrength:5})}{let r=Se(201,4,5),o=Se(202,16,3);K.carrot=Ze("carrot",t,(a,l,c,h)=>{let u=Math.pow(Math.abs(Math.sin(l*Math.PI*22+r(a,l)*9)),10)*(.4+r(a*3,l)*.8),d=o(a,l),f=Ve(Math.floor(a*24),Math.floor(l*40))>.93&&wn(l*40)<.35?1:0,p=Oe(oe(15759898),oe(14177804),d*.8+u*.35),g=Math.pow(Math.abs(Math.sin(a*Math.PI*9+r(a,l*.3)*4)),30)*.15,m=(Ve(Math.floor(a*260),Math.floor(l*6))-.5)*.06,x=Oe(p,oe(9062928),u*.35+f*.5+g);return{r:x[0]+m,g:x[1]+m*.6,b:x[2],h:.7-u*.5-f*.4+d*.1+m}},{normalStrength:4})}{let r=Se(211,4,5),o=Se(212,32,2);K.tomato=Ze("tomato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Math.pow(Math.abs(Math.sin(a*Math.PI*6)),8)*.1,p=Oe(oe(14164762),oe(11014670),u*.7+f),g=fi(1-l*6),m=Oe(p,oe(12099616),g*.25),x=d>.75?.035:0,M=l<.22?Math.pow(Math.abs(Math.sin(a*Math.PI*18+u*3)),14)*(1-l/.22)*.25:0,w=Oe(m,oe(15755834),M+fi(.3-l*2)*.2),E=wn(a*140)-.5,R=wn(l*90)-.5,S=Ve(Math.floor(a*140),Math.floor(l*90))>.97&&Math.hypot(E,R)<.22?.07:0;return{r:w[0]+x+S,g:w[1]+x*.6+S,b:w[2]+S*.5,h:u*.3+d*.2-M*.3}},{normalStrength:1.2})}{let r=Se(221,4,6),o=Se(222,16,3);K.potato=Ze("potato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Ve(c,h),p=Oe(oe(13148266),oe(10122308),u*1.1-.1+f*.1);p=Oe(p,oe(6965802),fi((d-.6)*3)*.6);let g=wn(a*5),m=wn(l*4),x=Ve(Math.floor(a*5),Math.floor(l*4)),M=Math.hypot(g-.3-x*.4,m-.5),w=x>.55&&M<.06?1-M/.06:0;p=Oe(p,oe(4861976),w*.8);let E=Math.pow(1-Math.abs(o(a*2.3,l*2.3)-.5)*2,18);p=Oe(p,oe(8018484),E*.45);let R=fi((r(a*3+.3,l*3)-.62)*4);return p=Oe(p,oe(5915696),R*.5),{r:p[0],g:p[1],b:p[2],h:u*.5+d*.3-w*.6+f*.1+E*.2}},{normalStrength:4})}{let r=Se(231,4,5);K.pepper=Ze("pepper",t,(o,a,l,c)=>{let h=r(o,a),u=Math.pow(Math.abs(Math.cos(o*Math.PI*4)),10),d=Math.pow(Math.abs(Math.sin(o*Math.PI*4)),6)*.12,f=Oe(oe(2787870),oe(1268240),h*.7+u*.4-d),p=Ve(l>>1,c>>1)>.992?.1:0,g=a<.12?(1-a/.12)*.25:0,m=Oe(f,oe(5939264),g);return{r:m[0]+p*.5,g:m[1]+p,b:m[2]+p*.4,h:h*.2-u*.3+p}},{normalStrength:1.5})}{let r=Se(241,8,4);K.veggreen=Ze("veggreen",e,(o,a,l,c)=>{let h=r(o,a),u=Math.abs(wn(o*6)-.5)<.04?.15:0,d=Oe(oe(3836452),oe(1989140),h);return{r:d[0]+u,g:d[1]+u,b:d[2]+u*.5,h:h-u}},{normalStrength:2})}{let r=Se(251,8,5),o=Se(252,32,2);K.skin=Ze("skin",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Oe(oe(15775888),oe(13140058),u*.55+d*.25);return{r:f[0],g:f[1],b:f[2],h:d*.4+u*.2}},{normalStrength:1.2})}let i=(r,o,a,l)=>{K[r]=Ze(r,e,(c,h,u,d)=>{let f=c-.5,p=h-.5,g=Math.hypot(f,p)*2,m=Math.atan2(p,f),x=Oe(oe(o),oe(a),fi(g)),M=.5;if(l==="carrot"&&(g<.45&&(x=Oe(x,oe(16298048),.6)),M=Math.abs(Math.sin(m*10))*.2),l==="tomato"){let w=Math.cos(m*3)*.5+.5;g>.35&&g<.78&&w>.4&&(x=Oe(oe(15228992),oe(15777888),.3),Ve(Math.floor(c*40),Math.floor(h*40))>.8&&(x=oe(16310432),M=1))}return l==="pepper"&&g<.3&&Ve(Math.floor(c*50),Math.floor(h*50))>.7&&(x=oe(15788208),M=1),g>.95&&(x=Oe(x,oe(0),.2)),{r:x[0],g:x[1],b:x[2],h:M}},{normalStrength:2})};i("fleshCarrot",16292400,15233050,"carrot"),i("fleshTomato",15751738,13115418,"tomato"),i("fleshPotato",16048808,15257744,"potato"),i("fleshPepper",14217392,4890672,"pepper");{let r=Se(301,32,3);K.polymer=Ze("polymer",e,(o,a,l,c)=>{let h=Ve(l,c)*.5+r(o,a)*.5,u=.85+h*.15;return{r:u,g:u,b:u,h}},{normalStrength:2.5})}{let r=Se(311,4,4);K.gunmetal=Ze("gunmetal",e,(o,a,l,c)=>{let h=Ve(Math.floor(l/1),Math.floor(c/24))*.1,u=Math.abs(Math.sin(o*30+a*90+r(o,a)*20))>.995?.25:0,d=fi(r(o,a)-.65)*1.5,f=.85+h+u+d;return{r:f,g:f,b:f,h:h+u}},{normalStrength:1.2})}K.tire=Ze("tire",e,(r,o,a,l)=>{let c=Math.abs(o-.5)<.22,h=wn(r*48+(Math.abs(o-.5)<.08?.5:0)),u=c&&(h<.18||Math.abs(o-.5)>.2||Math.abs(Math.abs(o-.5)-.08)<.012),d=Math.abs(o-.5)>.3&&Ve(Math.floor(r*90),7)>.6&&Math.abs(Math.abs(o-.5)-.38)<.03,f=.1+(u?-.05:0)+(d?.06:0)+Ve(a,l)*.02;return{r:f,g:f,b:f,h:u?.1:.7}},{normalStrength:4});let s=(r,o,a,l)=>{let c=Se(r.length*13+500,4,4),h=Se(r.length*17+600,4,4);K[r]=Ze(r,e,(u,d,f,p)=>{let g=u,m=d;l&&(g=Math.floor(u*48)/48,m=Math.floor(d*48)/48);let x=c(g*a,m*a),M=h(g*a+.3,m*a),w=x>.56?1:M>.58?2:x<.4?3:0,E=oe(o[w]),R=Ve(f,p)*.05;return{r:E[0]+R,g:E[1]+R,b:E[2]+R,h:w*.1+R}},{normalStrength:1})};return s("camoWood",[5925434,3818532,9075280,2237978],1,!1),s("camoDesert",[13152384,10521178,14733480,8021056],1,!1),s("camoCarrot",[15759898,13129228,3836452,16752704],1,!0),s("camoUrban",[9080466,5922402,13159632,2764338],1,!0),K}function Ei(n,t={}){let e=t.w||256,i=t.h||256,s=document.createElement("canvas");s.width=e,s.height=i;let r=s.getContext("2d");t.bg&&(r.fillStyle=t.bg,r.fillRect(0,0,e,i)),t.draw&&t.draw(r,e,i),r.fillStyle=t.color||"#fff",r.font=`${t.weight||900} ${t.size||180}px ${t.font||"system-ui, sans-serif"}`,r.textAlign="center",r.textBaseline="middle",t.stroke&&(r.lineWidth=t.strokeW||10,r.strokeStyle=t.stroke,r.strokeText(n,e/2,i/2+(t.dy||0))),r.fillText(n,e/2,i/2+(t.dy||0));let o=new ts(s);return o.colorSpace=Mn,o.anisotropy=Eu,o}function wu(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new je;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=lg(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][d]);let p=lg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function lg(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new vn(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let g=h.getComponent(d,p);a.setComponent(d+u,p,g)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function et(n,t,e,i=1,s=[0,0,0]){let r=new fe(n,t,e),o=r.attributes.uv,a=[[e,t,s[2],s[1]],[e,t,-s[2],s[1]],[n,e,s[0],-s[2]],[n,e,s[0],s[2]],[n,t,s[0],s[1]],[n,t,-s[0],s[1]]];for(let l=0;l<6;l++){let[c,h,u,d]=a[l];for(let f=0;f<4;f++){let p=l*4+f;o.setXY(p,(o.getX(p)*c+u)/i,(o.getY(p)*h+d)/i)}}return r}function pi(n,t,e){let i=n.attributes.uv;for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*t,i.getY(s)*e);return n}var Su=class{constructor(){this.buckets=new Map,this.colliders=[],this.noShadow=new Set}addGeo(t,e,i){let s=e.index?e.toNonIndexed():e.clone();i&&s.applyMatrix4(i);for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);s.attributes.uv||s.setAttribute("uv",new vn(new Float32Array(s.attributes.position.count*2),2)),this.buckets.has(t)||this.buckets.set(t,[]),this.buckets.get(t).push(s)}box(t,e,i,s,r,o,a,l={}){let c=et(r,o,a,l.uv||1,l.worldUV===!1?[0,0,0]:[e-r/2,i-o/2,s-a/2]),h=new $t;(l.rotY||l.rotX||l.rotZ)&&h.makeRotationFromEuler(new Wi(l.rotX||0,l.rotY||0,l.rotZ||0)),h.setPosition(e,i,s),this.addGeo(t,c,h),l.collide!==!1&&this.col(e-r/2,i-o/2,s-a/2,e+r/2,i+o/2,s+a/2,l)}col(t,e,i,s,r,o,a={}){this.colliders.push({min:new F(Math.min(t,s),Math.min(e,r),Math.min(i,o)),max:new F(Math.max(t,s),Math.max(e,r),Math.max(i,o)),bullet:a.bullet!==!1,move:a.move!==!1,surf:a.surf||"concrete"})}bake(t){t.updateMatrixWorld(!0),t.traverse(e=>{e.isMesh&&this.addGeo(e.material,e.geometry,e.matrixWorld)})}finish(t){let e=[];for(let[i,s]of this.buckets){let r=wu(s,!1);r.computeBoundingSphere();let o=new D(r,i);o.castShadow=!i.userData.noCast,o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o),e.push(o)}return e}},c3=new F;function cg(n,t,e,i){let s=0,r=i,o=-1,a=0;for(let l=0;l<3;l++){let c=l===0?n.x:l===1?n.y:n.z,h=l===0?t.x:l===1?t.y:t.z,u=l===0?e.min.x:l===1?e.min.y:e.min.z,d=l===0?e.max.x:l===1?e.max.y:e.max.z;if(Math.abs(h)<1e-9){if(c<u||c>d)return null;continue}let f=(u-c)/h,p=(d-c)/h,g=-1;if(f>p){let m=f;f=p,p=m,g=1}if(f>s&&(s=f,o=l,a=g),p<r&&(r=p),s>r)return null}return{t:s,axis:o,sign:a}}function un(n,t=[],e={}){let i=new Set(t.filter(Boolean));n.updateMatrixWorld(!0);let s=new $t().copy(n.matrixWorld).invert(),r=new Map,o=[],a=l=>{for(let c of l.children)i.has(c)||(c.isMesh&&!c.isInstancedMesh&&o.push(c),a(c))};if(a(n),!(o.length<2)){for(let l of o){let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let h of Object.keys(c.attributes))["position","normal","uv"].includes(h)||c.deleteAttribute(h);c.attributes.uv||c.setAttribute("uv",new vn(new Float32Array(c.attributes.position.count*2),2)),c.applyMatrix4(new $t().multiplyMatrices(s,l.matrixWorld)),r.has(l.material)||r.set(l.material,[]),r.get(l.material).push(c)}for(let l of o)for(let c of[...l.children])o.includes(c)||l.parent.attach(c);for(let l of o)l.parent&&l.parent.remove(l);for(let[l,c]of r){let h=new D(wu(c,!1),l);h.castShadow=e.shadow!==!1,h.receiveShadow=!0,n.add(h)}}}var Bi={town:{id:"town",name:"\u30D9\u30B8\u30BF\u30A6\u30F3",desc:`\u901A\u308A\u3092\u631F\u3093\u30602\u8ED2\u306E\u5BB6\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u83DC\u5712(A)\u3068\u6E29\u5BA4(B)\u3002`,map:{minX:-32,maxX:32,minZ:-27,maxZ:27},sites:{A:[-19,-12.5],B:[18.5,-12.5]},spawns:{south:[[-2.5,23],[2.5,23.5]],north:[[-2.5,-23],[2.5,-23.5]]},holds:{A:{def:[[-16.5,-15.5],[-21.5,-12],[-14.5,-10.8],[-19.5,-18]],att:[[-17.5,-10],[-20.5,-13.5]]},B:{def:[[17,-16],[21,-12.8],[15.8,-9.6],[19.5,-14.8]],att:[[18,-10],[19,-13.8]]}},mm:[[-6,-17.5,5.5,-9.5,"#c8b878"],[5.5,-17,10.5,-9.8,"#a89858"],[-5.5,9.5,6,17.5,"#78a0b8"],[-10.5,9.8,-5.5,17,"#5a8098"],[-26.5,-17.1,-22.5,-13.9,"#8a6a4a"],[20.5,18.9,24.5,22.1,"#8a6a4a"],[16,-19.8,21,-16.2,"#c8d8d0"],[-3.3,-2.85,6.3,-.35,"#e0a020"]],lobby:[-6,4.9],ground:"grass"},market:{id:"market",name:"\u9752\u679C\u5E02\u5834",desc:`\u72ED\u30443\u672C\u9053\u3002\u4E2D\u592E\u306F\u5C4B\u6839\u4ED8\u304D\u306E\u5E02\u5834\u30DB\u30FC\u30EB\u3002
2\u968E\u901A\u8DEF\u30FB\u534A\u5206\u9589\u307E\u3063\u305F\u30B7\u30E3\u30C3\u30BF\u30FC\uFF08\u3057\u3083\u304C\u3080\u3068\u304F\u3050\u308C\u308B\uFF09\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u8CC7\u6750\u7F6E\u304D\u5834(A)\u3068\u7A4D\u307F\u4E0B\u308D\u3057\u5834(B)\u3002`,map:{minX:-23.4,maxX:23.4,minZ:-21.4,maxZ:21.4},sites:{A:[-17.5,-11.5],B:[15,-12]},spawns:{south:[[-2.5,18.5],[2.5,19]],north:[[-2.5,-18.5],[2.5,-19]]},holds:{A:{def:[[-14,-13],[-20.5,-9],[-16.5,-4.5],[-21,-16.5]],att:[[-13,-8.5],[-19,-4]]},B:{def:[[17.5,-14.5],[11.5,-12.5],[13.5,-8.5],[20.8,-10]],att:[[11.5,-9],[16,-8]]}},mm:[[-9,-7,9,7,"#b8a888"],[-21,-2,-14.5,6,"#7a9a7a"],[19,-17,23.6,8,"#9a9a9a"],[11.8,-6.8,17.2,-4.4,"#e8e8e4"],[11.8,.6,17.2,3,"#8ab84a"],[-14.6,10.4,-9.4,12.8,"#e8e0d0"]],lobby:[2.5,9.8],ground:"concrete"},station:{id:"station",name:"\u8CA8\u7269\u99C5",desc:`\u4E2D\u592E\u306E\u8CA8\u7269\u5217\u8ECA\u304C\u30DE\u30C3\u30D7\u3092\u5357\u5317\u306B\u5206\u3051\u308B\u3002
\u8ECA\u4E21\u306E\u3059\u304D\u9593\u30FB\u6B69\u9053\u6A4B\u30FB\u4F0F\u305B\u3066\u8ECA\u4E21\u306E\u4E0B\u3092\u304F\u3050\u308B\u9053\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u99C5\u820E\u306E\u5F85\u5408\u5BA4(A)\u3068\u30B3\u30F3\u30C6\u30CA\u7F6E\u304D\u5834(B)\u3002`,map:{minX:-23.4,maxX:23.4,minZ:-20.4,maxZ:20.4},sites:{A:[-19.5,-10],B:[16,-14.6]},spawns:{south:[[-2.5,17.5],[2.5,18]],north:[[-2.5,-17.5],[2.5,-18]]},holds:{A:{def:[[-15.5,-12.5],[-21.5,-7],[-12,-8.5],[-22,-13]],att:[[-15,-7.5],[-20.5,-11.5]]},B:{def:[[19,-16.5],[11.5,-12],[18.6,-9],[14,-8]],att:[[12.5,-12.5],[17.5,-10]]}},mm:[[-23.6,-14,-13,-5.4,"#c8b878"],[-19.5,-1.4,-12,1.4,"#2a5a9a"],[-11.2,-1.4,-4.2,1.4,"#9a3a2a"],[-2.8,-1.4,5.4,1.4,"#3a6a3a"],[6.8,-1.4,14,1.4,"#8a6a3a"],[16,-1.22,22,1.22,"#2a6aa0"],[15.9,-6.5,17.7,6.5,"#aaaaaa"],[10,-17.7,16,-15.3,"#b04a2a"],[19.8,-14.5,22.2,-8.5,"#3a5a9a"],[7.8,-12,10.2,-6,"#c89a2a"],[-20,13.5,-15,17.5,"#78a0b8"]],lobby:[2,11.8],ground:"concrete"},port:{id:"port",name:"\u51FA\u8377\u6E2F",desc:`\u30B3\u30F3\u30C6\u30CA\u304C\u7D30\u3044\u901A\u8DEF\u3092\u3064\u304F\u308B\u6E2F\u3002
\u4E21\u7AEF\u304C\u958B\u3044\u305F\u30B3\u30F3\u30C6\u30CA\u306F\u4E2D\u3092\u901A\u308A\u629C\u3051\u3089\u308C\u308B\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u4E8B\u52D9\u6240\u6A2A(A)\u3068\u5CB8\u58C1(B)\u3002`,map:{minX:-23.4,maxX:23,minZ:-20.4,maxZ:20.4},sites:{A:[-11,-12],B:[16.5,-12.4]},spawns:{south:[[-2.5,18.2],[2.5,18.6]],north:[[-2.5,-18.2],[2.5,-18.6]]},holds:{A:{def:[[-13.6,-14.8],[-8,-9],[-14.5,-7.2],[-9,-17.5]],att:[[-14,-9.5],[-8.5,-14]]},B:{def:[[18.5,-15],[13.5,-12.8],[20.5,-9],[14,-8.5]],att:[[13,-14],[17.5,-9.6]]}},mm:[[-23.6,-16,-16,-7,"#78a0b8"],[-17.5,-5.82,-11.5,-3.38,"#b04a2a"],[-6,-6.42,0,-3.98,"#2a7a5a"],[5.5,-6.02,11.5,-3.58,"#3a5a9a"],[-13,3.78,-7,6.22,"#c89a2a"],[-1.5,3.38,4.5,5.82,"#2a6aa0"],[10,3.98,16,6.42,"#9a3a2a"],[-20.72,3.5,-18.28,9.5,"#7a7a7a"],[17.78,-10,20.22,-4,"#b04a2a"],[-18,15,-15,18,"#7aa07a"]],lobby:[-3,11.5],ground:"concrete"},villa:{id:"villa",name:"\u91CE\u83DC\u5FA1\u6BBF",desc:`\u4E18\u306E\u4E0A\u306E\u8C6A\u90B8\u3002\u4E2D\u592E\u306E\u30D7\u30FC\u30EB\u306F\u898B\u901A\u3057\u304C\u9577\u3044\u3002
\u8C6A\u90B8\u306E\u4E2D\u30FB\u30D7\u30FC\u30EB\u30FB\u30D0\u30B9\u30B1\u30B3\u30FC\u30C8\u306E3\u672C\u9053\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u5317\u306E\u5EAD(A)\u3068\u30D0\u30B9\u30B1\u30B3\u30FC\u30C8(B)\u3002`,map:{minX:-23.4,maxX:22.4,minZ:-20.4,maxZ:20.4},sites:{A:[-16.5,-14],B:[16.5,-13]},spawns:{south:[[-2.5,18.2],[2.5,18.6]],north:[[-2.5,-18.4],[2.5,-18.8]]},holds:{A:{def:[[-12,-15],[-19.5,-12.5],[-14.2,-9.2],[-21.8,-18]],att:[[-14.2,-10],[-19,-10]]},B:{def:[[19,-18],[11,-15],[20.5,-9],[13.5,-8.2]],att:[[12.8,-9],[17.5,-8]]}},mm:[[-23.6,-8,-11,6,"#e8e0d0"],[-23.6,-20.6,-11,-8,"#c8b878"],[-5.6,-5.6,4.6,.6,"#3aa8d8"],[-3,-15,3,-10.6,"#a86a4a"],[8,-1,14,6,"#c8c0b0"],[9,-20.6,22.6,-6,"#2a5a7a"],[-1.4,11.4,1.4,14.2,"#9aa0a4"]],lobby:[-4.5,9],ground:"grass"},ship:{id:"ship",name:"\u91CE\u83DC\u30AF\u30EB\u30FC\u30B6\u30FC",desc:`\u6D77\u306E\u4E0A\u306E\u8C6A\u83EF\u30AF\u30EB\u30FC\u30B6\u30FC\u3002
\u5BA2\u5BA4\u306E\u4E2D\u30FB\u5DE6\u53F3\u306E\u7D30\u3044\u901A\u8DEF\u30FB\u5C4B\u4E0A\u30C7\u30C3\u30AD\u306E3\u672C\u9053\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u8239\u9996\u306E\u8CA8\u7269(A)\u3068\u30B8\u30E3\u30B0\u30B8\u30FC(B)\u3002`,map:{minX:-8.6,maxX:8.6,minZ:-21,maxZ:20.6},sites:{A:[-5.2,-11.6],B:[4.6,-11.8]},spawns:{south:[[-2,18.6],[2,18.6]],north:[[-1.5,-18.6],[1.5,-18.6]]},holds:{A:{def:[[-3.4,-14],[-7.6,-12.4],[-6,-7.4],[-1.8,-10]],att:[[-7,-6.8],[-3.6,-7.2]]},B:{def:[[5.8,-15.4],[7.6,-11.8],[2.6,-12.6],[6.2,-7.2]],att:[[7,-6.8],[3.6,-7.2]]}},mm:[[-5,-6,5,7,"#e8e8e4"],[-2.75,13,2.75,17,"#3ab0e0"],[-8.75,-3.7,-7.25,.7,"#e8701a"],[7.25,.3,8.75,4.7,"#e8701a"],[5.65,-10.75,8.35,-8.05,"#5ad0e0"],[-8.2,-10.9,-7,-8.6,"#8a6a4a"]],lobby:[0,11],ground:"concrete"},border:{id:"border",name:"\u56FD\u5883\u306E\u753A",desc:`\u56FD\u5883\u306E\u691C\u554F\u6240\u304C\u3042\u308B\u7802\u307C\u3053\u308A\u306E\u753A\u3002
\u4E2D\u592E\u306E\u9577\u3044\u5927\u901A\u308A\u30FB\u897F\u306E\u5E02\u5834\u30FB\u6771\u306E\u30AC\u30BD\u30EA\u30F3\u30B9\u30BF\u30F3\u30C9\u306E3\u672C\u9053\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u7A0E\u95A2\u306E\u5009\u5EAB(A)\u3068\u6574\u5099\u5DE5\u5834(B)\u3002`,map:{minX:-23.4,maxX:23.4,minZ:-22.4,maxZ:22.4},sites:{A:[-17,-17.6],B:[17.6,-15.6]},spawns:{south:[[-2.5,19.6],[2.5,19.8]],north:[[-2.5,-20.4],[2.5,-20.6]]},holds:{A:{def:[[-22.4,-18],[-12,-19],[-14,-12],[-20,-12]],att:[[-13.6,-10.4],[-20.2,-10.4]]},B:{def:[[21.6,-20.2],[11,-15.6],[20.8,-13.4],[15,-13.6]],att:[[17.6,-10.4],[13.2,-10.4]]}},mm:[[-3.6,-23,3.6,23,"#5a5a5a"],[-8.6,-16,-4.6,-11,"#e2c494"],[-8.6,-9,-4.6,-1.6,"#d8a878"],[-8.6,1.6,-4.6,9,"#e2c494"],[4.6,-16,8.6,-11.5,"#c8d0b0"],[4.6,-9,8.6,-2,"#e2c494"],[4.6,1.2,8.6,8.5,"#d8a878"],[-1,-1,1,1,"#f0f0f0"],[-23.6,-6,-20.4,6,"#c8d0b0"],[10.5,-4.2,18.3,5.6,"#2a8a4a"],[19.2,-6,23.6,5,"#f0f0f0"],[-22.3,-21.9,-11.7,-14.5,"#707a88"],[10,-21.6,22.6,-12,"#d8a878"],[-22.6,15.4,-15,21.8,"#e2c494"]],lobby:[-6.2,17],ground:"concrete"},slums:{id:"slums",name:"\u30B9\u30E9\u30E0\u8857",desc:`\u5BB6\u304C\u3072\u3057\u3081\u304F\u4E0B\u753A\u3002\u4E2D\u592E\u306F\u5674\u6C34\u5E83\u5834\u3002
\u5DE6\u53F3\u306E\u7D30\u3044\u8DEF\u5730\u30FB\u5BB6\u306E\u4E2D\u30FB\u5E83\u5834\u306E3\u672C\u9053\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u6D17\u6FEF\u7269\u306E\u5E72\u3057\u5834(A)\u3068\u3054\u307F\u96C6\u7A4D\u6240(B)\u3002`,map:{minX:-23.4,maxX:23.4,minZ:-22.4,maxZ:22.4},sites:{A:[-14.4,-17.8],B:[16.4,-15.6]},spawns:{south:[[-2.5,19.6],[2.5,19.8]],north:[[-2.5,-19.6],[2.5,-19.8]]},holds:{A:{def:[[-22.4,-16.4],[-11.2,-20.4],[-11.2,-12],[-18,-12.4]],att:[[-14.5,-9.1],[-19.5,-9.1]]},B:{def:[[21,-15.6],[14.2,-18.4],[10.6,-18.6],[17,-11.6]],att:[[14.8,-9.1],[19.5,-9.1]]}},mm:[[-8,-8,8,8,"#c8c0b0"],[-23.6,-8,-15.5,-1.2,"#d88a6a"],[-23.6,1.2,-15.5,8,"#8ab0d0"],[-13.5,-8,-8,-2,"#e0cc80"],[-13.5,2,-8,8,"#a8c890"],[8,-8,13.5,-3,"#d0a0c0"],[8,-.6,13.5,8,"#e8dcc8"],[15.5,-8,23.6,.4,"#e0cc80"],[15.5,2.8,23.6,8,"#d88a6a"],[-5,-14.2,5,-10.6,"#a8c890"],[-1.6,-1.6,1.6,1.6,"#3a9ac8"],[-23.6,12,-14,20,"#e8dcc8"],[13,13,23.6,20,"#a8c890"],[-1.2,9.6,1.2,11.6,"#e0cc80"],[-23.6,-22.8,-19.6,-18,"#d0a0c0"],[19.6,-22.8,23.6,-17.6,"#8ab0d0"]],lobby:[-3.5,15.5],ground:"concrete"}},re={},We={A:new F,B:new F},Bl={south:[],north:[]},en=Bi.town;function vg(n){en=Bi[n]||Bi.town,Object.assign(re,en.map);for(let t of["A","B"])We[t].set(en.sites[t][0],0,en.sites[t][1]);for(let t of["south","north"])Bl[t]=en.spawns[t].map(([e,i])=>new F(e,0,i));return en}vg("town");var ae=n=>new te(n),y={};function U_(){let n=(i,s)=>{let r=i.map.clone(),o=i.normalMap.clone();return r.needsUpdate=o.needsUpdate=!0,s&&(r.repeat.set(s,s),o.repeat.set(s,s)),[r,o]},[t,e]=[K.grass.map,K.grass.normalMap];y.grass=ae({map:K.grass.map,normalMap:K.grass.normalMap,roughness:.95,color:15269856}),y.asphalt=ae({map:K.asphalt.map,normalMap:K.asphalt.normalMap,roughness:.9}),y.concrete=ae({map:K.concrete.map,normalMap:K.concrete.normalMap,roughness:.85}),y.brick=ae({map:K.brick.map,normalMap:K.brick.normalMap,roughness:.85}),y.sidingY=ae({map:K.siding.map,normalMap:K.siding.normalMap,color:15785114,roughness:.75}),y.sidingB=ae({map:K.siding.map,normalMap:K.siding.normalMap,color:10274012,roughness:.75}),y.sidingG=ae({map:K.siding.map,normalMap:K.siding.normalMap,color:12109984,roughness:.75}),y.plaster=ae({map:K.plaster.map,normalMap:K.plaster.normalMap,color:15920352,roughness:.95}),y.plasterG=ae({map:K.plaster.map,normalMap:K.plaster.normalMap,color:14214352,roughness:.95}),y.floor=ae({map:K.floor.map,normalMap:K.floor.normalMap,roughness:.55}),y.roof=ae({map:K.roof.map,normalMap:K.roof.normalMap,roughness:.85,color:11561562}),y.roof2=ae({map:K.roof.map,normalMap:K.roof.normalMap,roughness:.85,color:7371400}),y.wood=ae({map:K.wood.map,normalMap:K.wood.normalMap,roughness:.8}),y.paintwood=ae({map:K.paintwood.map,normalMap:K.paintwood.normalMap,roughness:.7}),y.dirt=ae({map:K.dirt.map,normalMap:K.dirt.normalMap,roughness:1}),y.tile=ae({map:K.tile.map,normalMap:K.tile.normalMap,roughness:.3}),y.carpetR=ae({map:K.carpet.map,normalMap:K.carpet.normalMap,color:10502208,roughness:1}),y.carpetB=ae({map:K.carpet.map,normalMap:K.carpet.normalMap,color:4217482,roughness:1}),y.trim=ae({color:16052970,roughness:.5,map:K.plaster.map}),y.darkTrim=ae({color:3815994,roughness:.6}),y.metal=ae({map:K.metal.map,normalMap:K.metal.normalMap,color:10133670,metalness:.7,roughness:.4}),y.rust=ae({map:K.rust.map,normalMap:K.rust.normalMap,metalness:.4,roughness:.8}),y.chrome=ae({color:14540253,metalness:1,roughness:.15}),y.glass=ae({color:1714740,metalness:.9,roughness:.05,transparent:!0,opacity:.55}),y.glass.userData.noCast=!0,y.tire=ae({map:K.tire.map,normalMap:K.tire.normalMap,roughness:.92}),y.rim=ae({color:12106944,metalness:.85,roughness:.3}),y.plate=ae({map:Ei("",{w:256,h:128,draw:i=>{i.fillStyle="#f4f4ea",i.fillRect(0,0,256,128),i.strokeStyle="#2a5a3a",i.lineWidth=8,i.strokeRect(4,4,248,120),i.fillStyle="#2a5a3a",i.font="700 34px sans-serif",i.textAlign="center",i.fillText("\u8C4A\u6A4B 400",128,44),i.font="900 64px sans-serif",i.fillText("8-31",140,110),i.font="700 40px sans-serif",i.fillText("\u3084",36,104)}}),roughness:.5}),y.grime=new te({map:Ei("",{w:256,h:128,draw:i=>{let s=i.createLinearGradient(0,0,0,128);s.addColorStop(0,"rgba(70,55,40,0)"),s.addColorStop(.5,"rgba(70,55,40,.16)"),s.addColorStop(1,"rgba(55,42,28,.62)"),i.fillStyle=s,i.fillRect(0,0,256,128),i.filter="blur(3px)";for(let r=0;r<18;r++){let o=Math.random()*256,a=6+Math.random()*18,l=30+Math.random()*60,c=i.createLinearGradient(0,128-l,0,128);c.addColorStop(0,"rgba(60,45,30,0)"),c.addColorStop(1,`rgba(60,45,30,${.15+Math.random()*.2})`),i.fillStyle=c,i.beginPath(),i.ellipse(o,128,a,l,0,0,7),i.fill()}i.filter="none"}}),transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2}),y.grime.userData.noCast=!0,y.grime.map.wrapS=ds,y.streak=new te({map:Ei("",{w:128,h:128,draw:i=>{i.filter="blur(2px)";for(let s=0;s<9;s++){let r=15+Math.random()*98,o=2+Math.random()*5,a=40+Math.random()*80,l=i.createLinearGradient(0,0,0,a);l.addColorStop(0,"rgba(40,36,30,.35)"),l.addColorStop(1,"rgba(40,36,30,0)"),i.fillStyle=l,i.fillRect(r,0,o,a)}i.filter="none"}}),transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2}),y.streak.userData.noCast=!0,y.busYellow=ae({map:K.metal.map,normalMap:K.metal.normalMap,color:15905306,metalness:.3,roughness:.45}),y.carRed=ae({map:K.metal.map,color:11017762,metalness:.5,roughness:.3}),y.carBlue=ae({map:K.metal.map,color:2775712,metalness:.5,roughness:.3}),y.carWhite=ae({map:K.metal.map,color:15263972,metalness:.4,roughness:.35}),y.black=ae({color:1381653,roughness:.7}),y.bark=ae({map:K.bark.map,normalMap:K.bark.normalMap,roughness:1}),y.leaf=ae({map:K.leaf.map,normalMap:K.leaf.normalMap,roughness:.9,color:14221264}),y.hedge=ae({map:K.hedge.map,normalMap:K.hedge.normalMap,roughness:1}),y.fabricG=ae({map:K.carpet.map,normalMap:K.carpet.normalMap,color:5929562,roughness:1}),y.fabricO=ae({map:K.carpet.map,normalMap:K.carpet.normalMap,color:12615744,roughness:1}),y.white=ae({color:15790320,roughness:.4}),y.steel=ae({color:12106944,metalness:.9,roughness:.3}),y.lampGlow=new Wn({color:16773824}),y.screen=ae({color:657936,metalness:.5,roughness:.1}),y.hay=ae({map:K.grass.map,normalMap:K.grass.normalMap,color:15782016,roughness:1}),y.redPaint=ae({color:11542560,roughness:.5,map:K.metal.map}),y.greenPaint=ae({color:2779706,roughness:.6,map:K.metal.map}),y.curtain=ae({map:K.carpet.map,normalMap:K.carpet.normalMap,color:15260864,roughness:.9,side:hn}),y.lineW=ae({color:15790312,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),y.lineY=ae({color:15777824,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),y.paint1=ae({map:Ei("",{w:128,h:128,draw:i=>{let s=i.createLinearGradient(0,0,0,128);s.addColorStop(0,"#6ab0e0"),s.addColorStop(1,"#f0e0a0"),i.fillStyle=s,i.fillRect(0,0,128,128),i.fillStyle="#3a7a3a",i.beginPath(),i.moveTo(0,100),i.quadraticCurveTo(64,50,128,95),i.lineTo(128,128),i.lineTo(0,128),i.fill(),i.fillStyle="#f8f0a0",i.beginPath(),i.arc(95,35,14,0,7),i.fill()}}),roughness:.6}),y.paint2=ae({map:Ei("",{w:128,h:128,draw:i=>{i.fillStyle="#2a2a3a",i.fillRect(0,0,128,128),i.fillStyle="#e86020",i.beginPath(),i.ellipse(64,70,20,44,0,0,7),i.fill(),i.fillStyle="#3a8a2a",i.fillRect(56,14,16,18)}}),roughness:.6})}var b;function Rn(n,t,e,i,s,r,o,a,l=[],c=.22){let h=ku(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[g,m]of p){if(m-g<.01)continue;let x=(g+m)/2,M=m-g;b.box(o,f,x,n+r*c/4,d,M,c/2,{uv:2.5,collide:!1}),b.box(a,f,x,n-r*c/4,d,M,c/2,{uv:2.5,collide:!1}),b.col(u.a,g,n-c/2,u.b,m,n+c/2,{surf:"wood"})}u.op&&F_(n,u.a,u.b,u.op,r,c)}if(o!==a&&i<.6&&y.grime){let u=e-t,d=new $t().makeRotationY(r>0?0:Math.PI);d.setPosition((t+e)/2,i+.4,n+r*(c/2+.008)),b.addGeo(y.grime,Zf(Math.abs(u)),d)}}var Bf={};function Zf(n){let t=Math.round(n*4);if(!Bf[t]){let e=new be(t/4,.8),i=e.attributes.uv;for(let s=0;s<i.count;s++)i.setX(s,i.getX(s)*t/4/3);Bf[t]=e}return Bf[t]}function Un(n,t,e,i,s,r,o,a,l=[],c=.22){let h=ku(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[g,m]of p){if(m-g<.01)continue;let x=(g+m)/2,M=m-g;b.box(o,n+r*c/4,x,f,c/2,M,d,{uv:2.5,collide:!1}),b.box(a,n-r*c/4,x,f,c/2,M,d,{uv:2.5,collide:!1}),b.col(n-c/2,g,u.a,n+c/2,m,u.b,{surf:"wood"})}u.op&&B_(n,u.a,u.b,u.op,r,c)}if(o!==a&&i<.6&&y.grime){let u=e-t,d=new $t().makeRotationY(r>0?Math.PI/2:-Math.PI/2);d.setPosition(n+r*(c/2+.008),i+.4,(t+e)/2),b.addGeo(y.grime,Zf(Math.abs(u)),d)}}function ku(n,t,e){let i=[],s=n,r=[...e].sort((o,a)=>o.c-a.c);for(let o of r){let a=o.c-o.w/2,l=o.c+o.w/2;a>s&&i.push({a:s,b:a}),i.push({a,b:l,op:o}),s=l}return t>s&&i.push({a:s,b:t}),i}function F_(n,t,e,i,s,r){let a=r+.06;if(b.box(y.trim,t-.09/2+0,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),b.box(y.trim,e+.09/2,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),b.box(y.trim,(t+e)/2,i.t+.09/2,n,e-t+.09*2,.09,a,{collide:!1}),i.b>.3&&(b.box(y.trim,(t+e)/2,i.b-.03,n+s*.06,e-t+.2,.06,a+.1,{collide:!1}),y.streak&&i.win)){let l=new $t().makeRotationY(s>0?0:Math.PI);l.setPosition((t+e)/2,i.b-.45,n+s*(r/2+.009)),b.addGeo(y.streak,_g(),l)}if(i.win&&(b.box(y.trim,(t+e)/2,(i.b+i.t)/2,n+s*.02,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])bg(l<0?t-.05:e+.05,i.t+.05,n-s*(r/2+.06),l,!0)}function B_(n,t,e,i,s,r){let a=r+.06;if(b.box(y.trim,n,(i.b+i.t)/2,t-.09/2,a,i.t-i.b,.09,{collide:!1}),b.box(y.trim,n,(i.b+i.t)/2,e+.09/2,a,i.t-i.b,.09,{collide:!1}),b.box(y.trim,n,i.t+.09/2,(t+e)/2,a,.09,e-t+.09*2,{collide:!1}),i.b>.3&&(b.box(y.trim,n+s*.06,i.b-.03,(t+e)/2,a+.1,.06,e-t+.2,{collide:!1}),y.streak&&i.win)){let l=new $t().makeRotationY(s>0?Math.PI/2:-Math.PI/2);l.setPosition(n+s*(r/2+.009),i.b-.45,(t+e)/2),b.addGeo(y.streak,_g(),l)}if(i.win&&(b.box(y.trim,n+s*.02,(i.b+i.t)/2,(t+e)/2,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])bg(n-s*(r/2+.06),i.t+.05,l<0?t-.05:e+.05,l,!1)}var hg;function _g(){return hg||(hg=new be(1,.8))}var na;function bg(n,t,e,i,s){if(!y.curtain)return;if(!na){na=new be(.5,1.6,12,1);let o=na.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a);o.setZ(a,Math.sin(l*40)*.035)}na.computeVertexNormals(),na.translate(0,-.8,0)}let r=new $t().makeRotationY(s?0:Math.PI/2);r.setPosition(s?n+i*.2:n,t,s?e:e+i*.2),b.addGeo(y.curtain,na,r),b.box(y.darkTrim,n,t+.02,e,s?.6:.03,.03,s?.03:.6,{collide:!1})}function O_(n,t,e,i,s,r,o,a){let c=(i-e)/2+.45,h=(e+i)/2,u=Math.atan2(r,(i-e)/2),d=Math.hypot(c,r*c/((i-e)/2));for(let f of[-1,1]){let p=et(t-n+.9,.14,d,2),g=new $t().makeRotationX(f*u);g.setPosition((n+t)/2,s+r/2+.05-.45*Math.tan(u)/2+.02,h+f*(d/2)*Math.cos(u)),b.addGeo(o,p,g);let m=new pt(.07,.07,t-n+.45*2,8);m.rotateZ(Math.PI/2),b.addGeo(y.trim,m,new $t().setPosition((n+t)/2,s-.45*Math.tan(u)+.02,h+f*c))}b.box(o,(n+t)/2,s+r+.1,h,t-n+.45*2,.12,.3,{collide:!1});for(let f of[n,t]){let p=new ui;p.moveTo(e-h,0),p.lineTo(i-h,0),p.lineTo(0,r),p.closePath();let g=new _i(p,{depth:.22,bevelEnabled:!1});pi(g,.4,.4);let m=new $t().makeRotationY(Math.PI/2);m.setPosition(f-.11+0,s,h),b.addGeo(a,g,m)}b.box(y.plaster,(n+t)/2,s+.06,h,t-n,.12,i-e,{uv:3,bullet:!0})}function Er(n,t,e,i){let s=new Pt,r=(a,l,c,h,u)=>{let d=new D(a,l);return d.position.set(c,h,u),s.add(d),d};r(et(2.1,.42,.9,1),i,0,.25,0),r(et(2.1,.6,.22,1),i,0,.7,-.36),r(et(.22,.32,.9,1),i,-1,.6,0),r(et(.22,.32,.9,1),i,1,.6,0);for(let a of[-.48,.48]){let l=r(new ms(.12,.7,4,10),i,a,.52,.08);l.rotation.z=Math.PI/2,l.scale.set(1,1,2.6)}for(let a of[-.5,.5]){let l=r(new fe(.35,.3,.12),y.fabricO,a,.72,-.2);l.rotation.x=-.25}for(let[a,l]of[[-.95,.38],[.95,.38],[-.95,-.38],[.95,-.38]])r(new pt(.03,.02,.08,6),y.wood,a,.03,l);s.position.set(n,.15,t),s.rotation.y=e,b.bake(s);let o=Math.abs(Math.cos(e))>.5?[1.1,.48]:[.48,1.1];b.col(n-o[0],.15,t-o[1],n+o[0],1,t+o[1],{surf:"carpet"})}function an(n,t,e,i,s,r=y.wood){b.box(r,n,.15+s-.03,t,e,.06,i,{collide:!1});for(let o of[-1,1])for(let a of[-1,1])b.box(y.wood,n+o*(e/2-.08),.15+(s-.06)/2,t+a*(i/2-.08),.07,s-.06,.07,{collide:!1});b.col(n-e/2,.15,t-i/2,n+e/2,.15+s,t+i/2,{bullet:!1})}function qn(n,t,e){let i=new Pt,s=(r,o,a,l,c)=>{let h=new D(r,o);return h.position.set(a,l,c),i.add(h),h};s(et(.45,.05,.45,1),y.wood,0,.46,0);for(let r of[-1,1])for(let o of[-1,1])s(et(.04,.46,.04,1),y.wood,r*.19,.23,o*.19);for(let r of[-1,1])s(et(.04,.5,.04,1),y.wood,r*.19,.73,-.2);for(let r=0;r<3;r++)s(et(.4,.05,.03,1),y.wood,0,.62+r*.13,-.2);i.position.set(n,.15,t),i.rotation.y=e,b.bake(i)}function dn(n,t,e,i=1.2,s=1.9){let r=new Pt,o=(l,c,h,u,d)=>{let f=new D(l,c);return f.position.set(h,u,d),r.add(f),f};o(et(i,s,.04,1),y.wood,0,s/2,-.17);for(let l of[-1,1])o(et(.04,s,.36,1),y.wood,l*i/2,s/2,0);for(let l=0;l<5;l++){let c=.05+l*(s-.1)/4;if(o(et(i,.04,.36,1),y.wood,0,c,0),l<4){let h=-i/2+.08;for(;h<i/2-.12;){let u=.04+yt()*.05,d=.22+yt()*.14,f=[9054762,2771578,3828282,13148240,5913194,14209216][Math.floor(yt()*6)],p=new te({color:f,roughness:.8}),g=o(et(u,d,.24,1),Nt(f),h+u/2,c+.02+d/2,.02);yt()<.15&&(g.rotation.z=.2),h+=u+.005}}}r.position.set(n,.15,t),r.rotation.y=e,b.bake(r);let a=Math.abs(Math.cos(e))>.5?[i/2,.2]:[.2,i/2];b.col(n-a[0],.15,t-a[1],n+a[0],.15+s,t+a[1])}var Of={};function Nt(n,t={}){let e=n+JSON.stringify(t);return Of[e]||(Of[e]=ae({color:n,roughness:.75,...t})),Of[e]}var Tu={};function H_(n){if(Tu[n])return Tu[n];let t=512,e=768,i=document.createElement("canvas");i.width=t,i.height=e;let s=i.getContext("2d"),r={office:["#6f8fa8","#2a3e52","#c8d6e0"],brick:["#9a5a44","#26303a","#e8e2d6"],concrete:["#b8b4ac","#2e353c","#8a8680"],apt:["#e4dccb","#3a4650","#ffffff"]}[n];s.fillStyle=r[0],s.fillRect(0,0,t,e);for(let c=0;c<400;c++)s.fillStyle=`rgba(${yt()<.5?"0,0,0":"255,255,255"},${.03+yt()*.04})`,s.fillRect(yt()*t,yt()*e,4+yt()*40,4+yt()*40);if(n==="brick")for(let c=0;c<e;c+=8){s.fillStyle="rgba(230,220,200,0.35)",s.fillRect(0,c,t,1.5);for(let h=c/8%2*9;h<t;h+=18)s.fillRect(h,c,1.5,8)}let o=t/4,a=e/4;for(let c=0;c<4;c++)for(let h=0;h<4;h++){let u=h*o,d=c*a,f=yt()<.18;if(n==="office")s.fillStyle=f?"#e8d8a0":`rgb(${40+yt()*25},${60+yt()*25},${80+yt()*30})`,s.fillRect(u+4,d+20,o-8,a-26),s.fillStyle="rgba(255,255,255,0.12)",s.beginPath(),s.moveTo(u+4,d+a-6),s.lineTo(u+o*.6,d+20),s.lineTo(u+o*.8,d+20),s.lineTo(u+o*.2,d+a-6),s.fill(),s.fillStyle=r[2],s.fillRect(u+o/2-2,d+20,4,a-26),s.fillRect(u,d+14,o,8);else{let p=n==="concrete"?o-18:o*.55,g=a*(n==="concrete"?.42:.55),m=u+(o-p)/2,x=d+a*.22;s.fillStyle=r[2],s.fillRect(m-5,x-5,p+10,g+10),s.fillStyle=f?"#f0dca0":r[1],s.fillRect(m,x,p,g),s.fillStyle="rgba(255,255,255,0.15)",s.fillRect(m,x,p*.35,g),s.fillStyle=r[2],s.fillRect(m+p/2-2,x,4,g),yt()<.5&&(s.fillStyle=`rgba(${200+yt()*55},${200+yt()*55},180,0.85)`,s.fillRect(m,x,p*(.2+yt()*.3),g)),n==="apt"&&(s.fillStyle="#cfc6b4",s.fillRect(u+6,d+a*.8,o-12,a*.18),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(u+6,d+a*.8,o-12,3)),n==="concrete"&&(s.fillStyle="rgba(0,0,0,0.18)",s.fillRect(u,d+a*.75,o,6)),yt()<.15&&(s.fillStyle="#d8d8d4",s.fillRect(u+o*.78,x+g*.4,o*.16,g*.4))}}let l=new ts(i);return l.colorSpace=Mn,l.wrapS=l.wrapT=ds,l.anisotropy=4,Tu[n]=ae({map:l,roughness:n==="office"?.35:.85,metalness:n==="office"?.25:0}),Tu[n]}function k_(n,t,e){let i=new fe(n,t,e),s=i.attributes.uv,r=[e,e,n,n,n,n];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let l=o*4+a;s.setXY(l,s.getX(l)*r[o]/8,s.getY(l)*t/12+(12-t%12)/12)}return i}function aa(n,t,e,i,s,r,o,a){let l=new Pt;l.position.set(t,0,e),l.rotation.y=i;let c=new D(k_(s,r,o),H_(a));c.position.y=r/2,l.add(c);let h=new D(et(s+.3,.5,o+.3,2),y.concrete);h.position.y=r+.1,l.add(h);let u=new D(et(s-.3,.1,o-.3,2),Nt(6974054));u.position.y=r+.3,l.add(u);let d=new D(et(2.6,2.2,2.6,2),y.concrete);if(d.position.set(-s*.2,r+1.4,o*.1),l.add(d),yt()<.7){let f=new D(new pt(.9,.9,1.6,12),Nt(10134696,{metalness:.4,roughness:.5}));f.position.set(s*.22,r+1.9,-o*.15),l.add(f);for(let p of[-.6,.6])for(let g of[-.6,.6]){let m=new D(et(.12,1,.12),Nt(5592405));m.position.set(s*.22+p,r+.7,-o*.15+g),l.add(m)}}for(let f=0;f<3;f++){let p=new D(et(1,.8,.7,1),Nt(13684940));p.position.set((yt()-.5)*s*.7,r+.75,(yt()-.5)*o*.6),l.add(p)}if(yt()<.5){let f=new D(new pt(.04,.06,4,6),y.metal);f.position.set(-s*.2,r+4.5,o*.1),l.add(f)}for(let[f,p]of[[s/2+.08,o/2-.3],[-s/2-.08,-o/2+.3]]){let g=new D(new pt(.07,.07,r,8),Nt(8027776,{metalness:.5,roughness:.5}));g.position.set(f,r/2,p),l.add(g);for(let m=2;m<r;m+=3){let x=new D(et(.2,.06,.2,1),Nt(5922400));x.position.set(f,m,p),l.add(x)}}if(a!=="office")for(let f=3;f<r-1;f+=3){let p=new D(et(s+.12,.1,o+.12,1),y.concrete);p.position.y=f,l.add(p)}if(r>9){let f=new D(et(s+.05,.6,o+.05,2),Nt([2775610,9054762,2767466][Math.floor(yt()*3)]));f.position.y=3.2,l.add(f)}n.add(l)}function Wf(n,t,e,i){let o=e-i*.445;b.box(Nt(15261904),(n+t)/2,.15+.92/2-.02,o,t-n,.92-.04,.65-.02,{surf:"wood"}),b.box(y.tile,(n+t)/2,.15+.92,o,t-n+.04,.04,.65+.04,{collide:!1,uv:.6});for(let h=n+.5;h<t;h+=.6)b.box(y.darkTrim,h,.15+.45,o-i*(.65/2),.02,.7,.01,{collide:!1});for(let h=n+.25;h<t;h+=.6)b.box(y.steel,h,.15+.72,o-i*(.65/2+.02),.12,.02,.03,{collide:!1});b.box(y.steel,n+1,.15+.92+.01,o,.6,.03,.42,{collide:!1});let a=new D(new $e(.12,.02,6,12,Math.PI),y.chrome);a.position.set(n+1,.15+.92+.03,o+i*.2),a.rotation.y=Math.PI/2,b.bake(a);let l=t+.45;b.box(y.white,l,.15+.95,o,.8,1.9,.72,{}),b.box(y.steel,l-.3,.15+1.3,o-i*.37,.03,.5,.04,{collide:!1}),b.box(y.darkTrim,l,.15+1.25,o-i*.365,.8,.012,.01,{collide:!1}),b.box(Nt(15261904),(n+t)/2,.15+2.1,e-i*.3,t-n,.7,.36,{collide:!1});for(let[h,u]of[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]]){let d=new D(new $e(.08,.012,6,16),y.black);d.rotation.x=Math.PI/2,d.position.set(t-.6+h,.15+.92+.03,o+u),b.bake(d)}let c=new D(new pt(.13,.12,.16,16,1,!1),y.steel);c.position.set(t-.75,.15+.92+.1,o-.12),b.bake(c)}function Du(n,t,e){let i=new Pt,s=(o,a,l,c,h)=>{let u=new D(o,a);return u.position.set(l,c,h),i.add(u),u};s(et(1.6,.5,.45,1),y.wood,0,.25,0),s(et(1.3,.75,.06,1),y.black,0,.95,0),s(new be(1.24,.69),y.screen,0,.95,.031),s(et(.3,.06,.2,1),y.black,0,.53,0),i.position.set(n,.15,t),i.rotation.y=e,b.bake(i);let r=Math.abs(Math.cos(e))>.5?[.8,.25]:[.25,.8];b.col(n-r[0],.15,t-r[1],n+r[0],.65,t+r[1])}function sa(n,t,e,i,s){let r=new Pt,o=new D(et(.9,.7,.05,1),y.wood);r.add(o);let a=new D(new be(.78,.58),s);a.position.z=.03,r.add(a),r.position.set(n,t,e),r.rotation.y=i,b.bake(r)}function oa(n,t,e,i,s){b.box(s,n,.155,t,e,.012,i,{collide:!1,uv:1})}function Nu(n,t){let e=new Pt,i=new D(new pt(.15,.18,.04,16),y.black);i.position.y=.02,e.add(i);let s=new D(new pt(.015,.015,1.5,6),y.chrome);s.position.y=.77,e.add(s);let r=new D(new pt(.16,.24,.3,16,1,!0),Nt(15786176,{side:hn,emissive:4206624}));r.position.y=1.55,e.add(r),e.position.set(n,.15,t),b.bake(e)}function _r(n,t,e){let i=new Pt,s=(o,a,l,c,h)=>{let u=new D(o,a);return u.position.set(l,c,h),i.add(u),u};s(et(1.5,.3,2,1),y.wood,0,.2,0),s(et(1.45,.22,1.95,1),y.white,0,.45,0),s(et(1.5,.08,1.4,1),y.carpetB,0,.58,.28),s(et(1.5,.9,.08,1),y.wood,0,.55,-1);for(let o of[-.35,.35]){let a=s(new ms(.1,.3,4,8),y.white,o,.62,-.75);a.rotation.z=Math.PI/2,a.scale.set(1,1,1.8)}i.position.set(n,.15,t),i.rotation.y=e,b.bake(i);let r=Math.abs(Math.cos(e))>.5?[.75,1.05]:[1.05,.75];b.col(n-r[0],.15,t-r[1],n+r[0],.8,t+r[1],{bullet:!0})}function ug(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.18,o=2.9,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;b.box(y.concrete,(t+e)/2,.08,(i+s)/2,e-t+.3,.16,s-i+.3,{collide:!1}),b.box(y.floor,(t+e)/2,r-.01,(i+s)/2,e-t-.1,.02,s-i-.1,{collide:!1,uv:3}),b.col(t,0,i,e,r,s,{bullet:!0,surf:"wood"});let h=(g,m=1.4)=>({c:g,w:m,b:r+.95,t:r+2.15,win:!0}),u=(g,m=1.4)=>({c:g,w:m,b:r,t:r+2.25}),d=n.siding,f=n.inner||y.plaster;Rn(a,t,e,r,o,c,d,f,n.frontOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),Rn(l,t,e,r,o,-c,d,f,n.backOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),Un(t,i+.11,s-.11,r,o,-1,d,f,n.leftOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),Un(e,i+.11,s-.11,r,o,1,d,f,n.rightOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),n.partX!==void 0&&Un(n.partX,n.partZ0,n.partZ1,r,o,1,y.plasterG,f,[u(n.partDoor,1.4)],.14),O_(t,e,i,s,r+o,2,n.roof,d);let p=a+c*.9;b.box(y.concrete,n.doorX,.1,p,2.6,.2,1.6,{surf:"concrete"}),b.box(y.concrete,n.doorX,.05,p+c*1,1.8,.1,.5,{surf:"concrete"}),b.box(n.roof,n.doorX,r+2.55,p,3,.1,1.9,{collide:!1});for(let g of[-1,1]){let m=new D(new pt(.07,.08,2.45,10),y.trim);m.position.set(n.doorX+g*1.3,.2+1.22,p+c*.75),b.bake(m),b.col(n.doorX+g*1.3-.08,0,p+c*.75-.08,n.doorX+g*1.3+.08,2.7,p+c*.75+.08,{surf:"wood"})}for(let g of[-1,1]){let m=new D(new fe(.14,.24,.14),y.lampGlow);m.position.set(n.doorX+g*.95,r+1.9,a+c*.15),b.bake(m)}b.box(y.brick,n.chimX,r+o+1.75,(i+s)/2+1.2,.8,2.9,.8,{collide:!1,uv:1.2}),b.box(y.concrete,n.chimX,r+o+3.25,(i+s)/2+1.2,.95,.12,.95,{collide:!1});for(let g of[i,s])b.box(y.brick,(t+e)/2,.45,g+(g===i?-.13:.13),e-t+.06,.55,.05,{collide:!1,uv:1.2});for(let g of[t,e])b.box(y.brick,g+(g===t?-.13:.13),.45,(i+s)/2,.05,.55,s-i+.06,{collide:!1,uv:1.2})}function dg(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.05,o=2.7,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;b.box(y.concrete,(t+e)/2,.025,(i+s)/2,e-t,.05,s-i,{collide:!1,uv:3}),Rn(a,t,e,r,o,c,n.siding,y.plaster,[{c:(t+e)/2,w:e-t-1,b:r,t:r+2.2}]),b.box(y.white,(t+e)/2,r+2.35,a-c*.05,e-t-1,.3,.06,{collide:!1}),Rn(l,t,e,r,o,-c,n.siding,y.plaster,[{c:(t+e)/2,w:1.2,b:r+1.1,t:r+2,win:!0}]);let h=n.outerX;Un(h,i+.11,s-.11,r,o,h>(t+e)/2?1:-1,n.siding,y.plaster,[{c:(i+s)/2+1.5,w:1.3,b:r,t:r+2.2}]),b.box(n.roof,(t+e)/2,r+o+.1,(i+s)/2,e-t+.6,.2,s-i+.6,{collide:!1,uv:2}),b.box(y.plaster,(t+e)/2,r+o-.03,(i+s)/2,e-t,.06,s-i,{collide:!1,uv:3}),b.col(t,r+o-.05,i,e,r+o+.2,s);let u=l-c*-.5,d=l+(n.frontNeg?.5:-.5);b.box(y.wood,(t+e)/2,.9,d,2.4,.08,.7,{collide:!1});for(let p of[-1,1])b.box(y.wood,(t+e)/2+p*1.1,.45,d,.08,.86,.6,{collide:!1});b.col((t+e)/2-1.2,0,d-.35,(t+e)/2+1.2,.95,d+.35,{bullet:!1});for(let p=0;p<6;p++)b.box(Nt([12595248,3170496,4210752][p%3]),(t+e)/2-.9+p*.35,.98,d,.18,.08,.12,{collide:!1});let f=Nt(11569754,{map:K.wood.map});for(let[p,g,m]of[[.9,1.5,.6],[.9,2.2,.5],[.95,1.8,.45]]){let x=(n.frontNeg,t+p+.2),M=(i+s)/2+(n.frontNeg?-1:1)*(g-2);b.box(f,x,m/2+(g===1.8?.6:.05),M,m,m,m,{surf:"wood"})}}function Nl(n,t,e,i,s=.38,r=.26){let o=new D(new $e(s-.1,.11,12,32),y.tire);o.scale.z=r/.22,o.position.set(t,e,i),n.add(o);let a=new D(new pt(s-.13,s-.13,r*.7,20),y.rim);a.rotation.x=Math.PI/2,a.position.set(t,e,i),n.add(a);let l=i+Math.sign(i||1)*r*.36,c=new D(new pt(s-.17,s-.15,.03,20),y.chrome);c.rotation.x=Math.PI/2,c.position.set(t,e,l),n.add(c);for(let u=0;u<6;u++){let d=u/6*Math.PI*2,f=new D(new pt(.045,.045,.035,8),y.black);f.rotation.x=Math.PI/2,f.position.set(t+Math.cos(d)*(s-.25)*.75,e+Math.sin(d)*(s-.25)*.75,l+Math.sign(i||1)*.004),n.add(f)}let h=new D(new pt(.09,.1,r+.04,10),y.black);h.rotation.x=Math.PI/2,h.position.set(t,e,i),n.add(h);for(let u=0;u<5;u++){let d=u/5*Math.PI*2,f=new D(new pt(.016,.016,.03,6),y.chrome);f.rotation.x=Math.PI/2,f.position.set(t+Math.cos(d)*.065,e+Math.sin(d)*.065,l+Math.sign(i||1)*.03),n.add(f)}}function G_(n,t,e){let i=new Pt,s=(h,u,d,f,p)=>{let g=new D(h,u);return g.position.set(d,f,p),i.add(g),g},r=9.6,o=2.5,a=2.6;s(et(r,a-.6,o,1.5),y.busYellow,0,.6+(a-.6)/2,0),s(et(r-.1,.25,o-.1,1),y.busYellow,0,a+.12,0);for(let h of[-1,1]){s(et(r-2.2,.75,.02),y.glass,-.5,2,h*(o/2+.005));for(let u=0;u<9;u++)s(et(.08,.8,.04),y.busYellow,-4.1+u*.95,2,h*(o/2+.01));s(et(r,.06,.04),y.black,0,1.45,h*(o/2+.02)),s(et(r,.06,.04),y.black,0,1.15,h*(o/2+.02))}s(et(.04,1,o-.3),y.glass,r/2+.01,2,0),s(et(.04,.8,o-.3),y.glass,-r/2-.01,2,0),s(et(.25,.3,o+.1),y.black,r/2+.1,.65,0),s(et(.25,.3,o+.1),y.black,-r/2-.1,.65,0);for(let h of[-1,1])s(new pt(.12,.12,.05,12),y.lampGlow,r/2+.03,1,h*.9).rotation.z=Math.PI/2,s(new pt(.1,.1,.05,12),y.redPaint,-r/2-.03,1,h*.9).rotation.z=Math.PI/2;s(et(.6,.4,.04),y.black,r/2-.1,2.75,.8),s(et(1.6,.25,.03),y.black,1,1.3,o/2+.03);for(let h of[-3,3.2])for(let u of[-1,1])Nl(i,h,.48,u*(o/2-.12),.48,.3);s(et(r-.4,.3,o-.3),y.black,0,.45,0),i.position.set(n,0,t),i.rotation.y=e,b.bake(i);let l=Math.abs(Math.cos(e))>.5?r/2:o/2,c=Math.abs(Math.cos(e))>.5?o/2:r/2;b.col(n-l,.3,t-c,n+l,a+.25,t+c,{surf:"metal"}),b.col(n-l+.3,0,t-c+.3,n+l-.3,.3,t+c-.3,{surf:"metal",bullet:!1})}function fn(n,t,e,i,s=!1){let r=new Pt,o=(U,I,k,q,V)=>{let Q=new D(U,I);return Q.position.set(k,q,V),r.add(Q),Q},a=s?5.2:4.5,l=1.9,c=s?1.9:2.4,h=s?.6:-.1,u=a/2,d=-a/2,f=a/2-.85,p=.47,g=new ui;g.moveTo(d+.05,.36),g.lineTo(-f-p,.36),g.absarc(-f,.38,p,Math.PI,0,!0),g.lineTo(f-p,.36),g.absarc(f,.38,p,Math.PI,0,!0),g.lineTo(u-.05,.36),g.quadraticCurveTo(u+.04,.38,u,.62),g.quadraticCurveTo(u-.05,.9,u-.45,.98),g.lineTo(h+c/2+.45,1.06),g.lineTo(h-c/2-.35,1.06),s?g.lineTo(d+.1,1.06):(g.lineTo(d+.55,1.03),g.quadraticCurveTo(d+.05,1,d,.8)),g.quadraticCurveTo(d-.03,.4,d+.05,.36);let m=new _i(g,{depth:l-.16,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:3,curveSegments:10});m.translate(0,0,-(l-.16)/2),pi(m,.5,.5),o(m,i,0,0,0);let x=new ui;x.moveTo(h+c/2+.42,1.04),x.lineTo(h+c/2-.12,1.62),x.lineTo(h-c/2+.12,1.64),x.lineTo(h-c/2-(s?0:.32),1.04),x.closePath();let M=new _i(x,{depth:l-.3,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});M.translate(0,0,-(l-.3)/2),o(M,y.glass,0,0,0);let w=new ui;w.moveTo(h+c/2-.1,1.6),w.lineTo(h-c/2+.1,1.62),w.lineTo(h-c/2+.14,1.72),w.quadraticCurveTo(h,1.78,h+c/2-.16,1.7),w.closePath();let E=new _i(w,{depth:l-.26,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});E.translate(0,0,-(l-.26)/2),o(E,i,0,0,0);for(let U of[-1,1]){let I=o(et(.07,.68,.06),i,h+c/2+.16,1.33,U*(l/2-.16));I.rotation.z=.78,o(et(.07,.6,.06),i,h+.05,1.33,U*(l/2-.16));let k=o(et(.09,.62,.06),i,h-c/2-(s?-.02:.12),1.33,U*(l/2-.16));k.rotation.z=s?0:-.45}s&&(o(et(2,.5,.08),i,-1.5,1.3,l/2-.04),o(et(2,.5,.08),i,-1.5,1.3,-l/2+.04),o(et(.08,.5,l),i,-a/2+.04,1.3,0),o(et(1.9,.05,l-.15),y.rust,-1.5,1.08,0)),o(et(.15,.22,l+.04),y.chrome,a/2+.05,.55,0),o(et(.15,.22,l+.04),y.chrome,-a/2-.05,.55,0);for(let U of[-1,1])o(et(.04,.14,.32),y.lampGlow,a/2+.01,.85,U*.66),o(et(.04,.14,.28),y.redPaint,-a/2-.01,.85,U*.68);o(et(.03,.2,.7),y.black,a/2+.01,.78,0);for(let U of[-1,1])o(et(.12,.08,.18),i,h+c/2+.2,1.2,U*(l/2+.08));for(let U of[-1,1])o(et(.02,.4,.01),y.black,h,.75,U*(l/2+.006)),o(et(.18,.03,.02),y.chrome,h+.3,.92,U*(l/2+.01)),o(et(.18,.03,.02),y.chrome,h-.7,.92,U*(l/2+.01));o(et(a-1.2,.25,l-.1),y.black,0,.32,0);let R=Nt(3815998,{roughness:.9});for(let U of[-1,1]){o(et(.5,.12,.5),R,h+.25,1.05,U*.42);let I=o(et(.12,.6,.48),R,h-.05,1.32,U*.42);I.rotation.z=-.15,o(et(.1,.16,.26),R,h-.1,1.68,U*.42)}s||o(et(.5,.5,l-.4),R,h-.85,1.2,0),o(et(.4,.18,l-.3),Nt(2236966),h+c/2+.1,1.12,0);{let U=o(new $e(.17,.022,6,16),y.black,h+c/2-.15,1.28,-.42);U.rotation.y=Math.PI/2,U.rotation.x=.4}for(let U of[-1,1]){let I=U*(l/2+.005);o(et(.015,.62,.008),y.black,h+c/2+.25,.75,I),s||o(et(.015,.62,.008),y.black,h-c/2-.2,.75,I),o(et(a-.5,.012,.008),y.black,0,.98,I)}for(let U of[1,-1]){let I=o(new be(.42,.21),y.plate,U*(a/2+.135),.5,0);I.rotation.y=U*Math.PI/2}for(let U of[-1,1]){let I=o(new be(a-.2,.55),y.grime,0,.62,U*(l/2+.07));U<0&&(I.rotation.y=Math.PI)}for(let U of[a/2-.85,-a/2+.85])for(let I of[-1,1])Nl(r,U,.38,I*(l/2-.05));r.position.set(n,0,t),r.rotation.y=e,b.bake(r);let S=Math.abs(Math.cos(e))>.5,_=S?a/2:l/2,v=S?l/2:a/2;b.col(n-_,.25,t-v,n+_,1.08,t+v,{surf:"metal"});let C=n+(S?h*Math.cos(e):0),P=t+(S?0:-h*Math.sin(e)),L=S?c/2+.2:l/2-.1,B=S?l/2-.1:c/2+.2;b.col(C-L,1.08,P-B,C+L,1.75,P+B,{surf:"metal"})}function mi(n,t,e=1,i=1){Sn(i*77+3);let s=new Pt,r=3.2*e,o=new pt(.16*e,.28*e,r,12,4);pi(o,2,2);let a=new D(o,y.bark);a.position.y=r/2,s.add(a);for(let c=0;c<5;c++){let h=new D(new jn(.12*e,.6*e,6),y.bark),u=c/5*Math.PI*2;h.position.set(Math.cos(u)*.2*e,.15,Math.sin(u)*.2*e),h.rotation.set(Math.sin(u)*1.2,0,-Math.cos(u)*1.2),s.add(h)}for(let c=0;c<4;c++){let h=new D(new pt(.04*e,.09*e,1.6*e,6),y.bark),u=c/4*Math.PI*2+.4;h.position.set(Math.cos(u)*.45*e,r*.75,Math.sin(u)*.45*e),h.rotation.set(Math.sin(u)*.9,0,-Math.cos(u)*.9),s.add(h)}let l=Se(i+500,2,3);for(let c=0;c<13;c++){let h=(.75+yt()*.6)*e,u=new Li(h,3),d=u.attributes.position,f=u.attributes.normal;for(let x=0;x<d.count;x++){let M=d.getX(x),w=d.getY(x),E=d.getZ(x),R=1+(l((M/h+1)*.5,(E/h+w/h+2)*.25)-.5)*.55;d.setXYZ(x,M*R,w*R*.85,E*R)}u.computeVertexNormals();for(let x=0;x<d.count;x++){let M=new F(d.getX(x),d.getY(x)/.85,d.getZ(x)).normalize(),w=new F(f.getX(x),f.getY(x),f.getZ(x));M.lerp(w,.35).normalize(),f.setXYZ(x,M.x,M.y,M.z)}pi(u,3,3);let p=new D(u,y.leaf),g=yt()*Math.PI*2,m=c===0?0:(.8+yt()*.6)*e;p.position.set(Math.cos(g)*m,r+(yt()*1.4-.2)*e,Math.sin(g)*m),s.add(p)}s.position.set(n,0,t),b.bake(s),b.col(n-.25*e,0,t-.25*e,n+.25*e,r,t+.25*e,{surf:"wood"})}function Ru(n,t,e,i,s=1,r=[]){let o=Math.hypot(e-n,i-t),a=(e-n)/o,l=(i-t)/o,c=Math.abs(a)>.5,h=new fe(.09,s,.025),u=new jn(.065,.12,4),d=p=>r.some(g=>p>g[0]&&p<g[1]);for(let p=.1;p<o;p+=.16){if(d(p))continue;let g=new $t().makeRotationY(c?0:Math.PI/2);g.setPosition(n+a*p,s/2,t+l*p),b.addGeo(y.paintwood,h,g);let m=new $t().makeRotationY(Math.PI/4+(c?0:Math.PI/2));m.setPosition(n+a*p,s+.06,t+l*p),b.addGeo(y.paintwood,u,m)}let f=[[0,o]];for(let p of r)f=f.flatMap(([g,m])=>p[1]<=g||p[0]>=m?[[g,m]]:[[g,p[0]],[p[1],m]].filter(([x,M])=>M-x>.05));for(let[p,g]of f){for(let E of[s*.25,s*.75]){let R=n+a*(p+g)/2,S=t+l*(p+g)/2;b.box(y.paintwood,R,E,S+(c?-.025:0),c?g-p:.04,.08,c?.04:g-p,{collide:!1})}let m=n+a*p,x=t+l*p,M=n+a*g,w=t+l*g;b.col(Math.min(m,M)-(c?0:.06),0,Math.min(x,w)-(c?.06:0),Math.max(m,M)+(c?0:.06),s,Math.max(x,w)+(c?.06:0),{bullet:!1,surf:"wood"});for(let E=p;E<=g;E+=2.4)b.box(y.paintwood,n+a*E,s/2+.05,t+l*E,.12,s+.1,.12,{collide:!1})}}function ei(n,t,e,i,s=2.6){let r=(n+e)/2,o=(t+i)/2,a=Math.abs(e-n),l=Math.abs(i-t),c=new fe(a,s,l,Math.max(2,Math.round(a*2)),6,Math.max(2,Math.round(l*2))),h=c.attributes.position,u=Se(Math.round(r*7+o*13)+900,4,3);for(let p=0;p<h.count;p++){let g=h.getX(p),m=h.getY(p),x=h.getZ(p),M=(u((g+r)*.05+.5,(m+x+o)*.05+.5)-.5)*.5;h.setXYZ(p,g+Math.sign(g)*M*(Math.abs(g)>a/2-.01?1:0),m+(m>s/2-.01?M:0),x+Math.sign(x)*M*(Math.abs(x)>l/2-.01?1:0))}c.computeVertexNormals();let d=et(a,s,l,1.5,[r,0,o]);c.setAttribute("uv",new vn(new Float32Array(h.count*2),2));let f=c.attributes.uv;for(let p=0;p<h.count;p++)f.setXY(p,(h.getX(p)+r+h.getZ(p)+o)/1.5,h.getY(p)/1.5);b.addGeo(y.hedge,c,new $t().setPosition(r,s/2,o)),b.col(r-a/2,0,o-l/2,r+a/2,s,o+l/2,{surf:"grass"})}function At(n,t,e,i=1,s=0){let r=new Pt,o=(l,c,h,u,d)=>{let f=new D(l,c);return f.position.set(h,u,d),r.add(f),f};o(et(i-.04,i-.04,i-.04,i),y.wood,0,i/2,0);let a=.07*i;for(let l of[-1,1])for(let c of[-1,1])o(et(a,i,a,1),y.wood,l*(i/2-a/2),i/2,c*(i/2-a/2));for(let l of[0,1])for(let c of[-1,1])o(et(a,a,i,1),y.wood,c*(i/2-a/2),l*(i-a)+a/2,0),o(et(i,a,a,1),y.wood,0,l*(i-a)+a/2,c*(i/2-a/2));for(let l of[-1,1]){let c=o(et(i*1.3,a*.8,a*.5,1),y.wood,0,i/2,l*(i/2+.005));c.rotation.z=Math.PI/4}r.position.set(n,t,e),r.rotation.y=s,b.bake(r),b.col(n-i/2,t,e-i/2,n+i/2,t+i,e+i/2,{surf:"wood"})}function wr(n,t,e){b.box(y.wood,n,.2,t,1,.4,.7,{surf:"wood"});let s=Nt(e===0?15231514:e===1?13642266:12095584,{roughness:.5});for(let r=0;r<12;r++){let o=new D(new ge(.1,10,8),s);o.position.set(n-.4+r%4*.26,.45,t-.2+Math.floor(r/4)*.2),o.scale.y=.85,b.bake(o)}}function fg(n,t,e){let i=new Pt,s=new D(et(.1,1.1,.1,1),y.wood);s.position.y=.55,i.add(s);let r=new D(new ms(.15,.35,4,12),y.steel);r.rotation.z=Math.PI/2,r.position.y=1.15,i.add(r);let o=new D(et(.03,.2,.06,1),y.redPaint);o.position.set(.05,1.3,.17),i.add(o),i.position.set(n,0,t),i.rotation.y=e,b.bake(i),b.col(n-.08,0,t-.08,n+.08,1,t+.08,{bullet:!1})}function Uu(n,t){let e=new Pt,i=new D(new pt(.14,.17,.6,14),y.redPaint);i.position.y=.3,e.add(i);let s=new D(new ge(.15,14,8,0,Math.PI*2,0,Math.PI/2),y.redPaint);s.position.y=.6,e.add(s);for(let o of[-1,1]){let a=new D(new pt(.06,.06,.12,10),y.redPaint);a.rotation.z=Math.PI/2,a.position.set(o*.18,.42,0),e.add(a)}let r=new D(new pt(.03,.05,.08,6),y.chrome);r.position.y=.76,e.add(r),e.position.set(n,.15,t),b.bake(e),b.col(n-.17,0,t-.17,n+.17,.9,t+.17,{bullet:!1})}function gi(n,t,e){let i=new Pt,s=new D(new pt(.32,.27,.95,16,3),Nt(e,{map:K.metal.map,normalMap:K.metal.normalMap,metalness:.2,roughness:.6}));s.position.y=.48,i.add(s);let r=new D(new pt(.35,.34,.08,16),Nt(e));r.position.y=1,i.add(r);for(let o=0;o<3;o++){let a=new D(new $e(.3-o*.015,.012,6,24),Nt(e));a.rotation.x=Math.PI/2,a.position.y=.25+o*.3,i.add(a)}i.position.set(n,0,t),b.bake(i),b.col(n-.33,0,t-.33,n+.33,1.04,t+.33,{surf:"metal"})}function _s(n,t,e){let i=new Pt,s=new D(new pt(.06,.1,5.2,10),y.darkTrim);s.position.y=2.6,i.add(s);let r=new D(new pt(.04,.04,1.4,8),y.darkTrim);r.rotation.x=Math.PI/2,r.position.set(0,5.1,e*.7),i.add(r);let o=new D(new pt(.12,.3,.25,12),y.darkTrim);o.position.set(0,5.05,e*1.35),i.add(o);let a=new D(new pt(.22,.22,.04,12),y.lampGlow);a.position.set(0,4.92,e*1.35),i.add(a);let l=new D(new pt(.18,.22,.4,10),y.darkTrim);l.position.y=.2,i.add(l),i.position.set(n,.15,t),b.bake(i),b.col(n-.12,0,t-.12,n+.12,5.3,t+.12,{surf:"metal"})}function Hf(n,t,e,i){b.box(y.wood,n,.25,t,e,.5,i,{surf:"wood"}),b.box(y.dirt,n,.51,t,e-.16,.04,i-.16,{collide:!1});for(let s=0;s<Math.floor(e*i*3);s++){let r=n-e/2+.25+yt()*(e-.5),o=t-i/2+.25+yt()*(i-.5);for(let a=0;a<5;a++){let l=new D(new jn(.05,.4,4),y.leaf);l.position.set(r,.7,o),l.rotation.set((yt()-.5)*1.2,yt()*3,(yt()-.5)*1.2),b.bake(l)}}}function Ll(n,t,e){let i=new D(new pt(.65,.65,1.2,20,2),y.hay);i.rotation.set(0,e,Math.PI/2),i.position.set(n,.65,t),b.bake(i);let s=Math.abs(Math.cos(e))>.5;b.col(n-(s?.6:.65),0,t-(s?.65:.6),n+(s?.6:.65),1.3,t+(s?.65:.6),{surf:"grass"})}function pg(n,t){Rn(t-3.2/2,n-4/2,n+4/2,.05,2.4,-1,y.wood,y.wood,[],.12),Rn(t+3.2/2,n-4/2,n+4/2,.05,2.4,1,y.wood,y.wood,[{c:n+.6,w:1.4,b:.05,t:2.1}],.12),Un(n-4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,-1,y.wood,y.wood,[{c:t,w:.9,b:1.1,t:1.8,win:!0}],.12),Un(n+4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,1,y.wood,y.wood,[{c:t-.3,w:1.2,b:.05,t:2.1}],.12),b.box(y.roof2,n,2.4+.15,t,4+.6,.12,3.2+.6,{rotX:.06,collide:!1}),b.box(y.wood,n,.03,t,4,.06,3.2,{collide:!1}),b.col(n-4/2,2.4,t-3.2/2,n+4/2,2.4+.3,t+3.2/2),b.box(y.wood,n-1.4,.8,t-1.2,1,.05,.5,{collide:!1}),b.col(n-1.9,0,t-1.5,n-.9,1.6,t-.95);for(let r=0;r<3;r++)b.box(Nt(9071162),n-1.7+r*.3,1,t-1.2,.2,.35,.2,{collide:!1})}function z_(n,t){let r=(o,a)=>b.box(y.white,o,1.25,a,.08,2.5,.08,{surf:"metal"});for(let o of[-1,0,1])for(let a of[-1,1])r(n+o*5/2,t+a*3.6/2);for(let o of[-1,1])b.box(y.white,n,2.5,t+o*3.6/2,5,.08,.08,{collide:!1});for(let o of[-1,0,1])b.box(y.white,n+o*5/2,2.5,t,.08,.08,3.6,{collide:!1});for(let o of[-1,1])b.box(y.glass,n,2.5+.45,t+o*3.6/4,5,.03,3.6/2+.1,{rotX:o*.45,collide:!1});b.box(y.white,n,2.5+.9,t,5,.06,.06,{collide:!1}),b.box(y.wood,n,.45,t-3.6/2+.4,5-.4,.06,.7,{collide:!1}),b.col(n-5/2+.2,0,t-3.6/2+.05,n+5/2-.2,.9,t-3.6/2+.75,{bullet:!1});for(let o=0;o<6;o++){let a=new D(new pt(.12,.09,.2,12),Nt(11558970));a.position.set(n-2+o*.8,.58,t-3.6/2+.4),b.bake(a);let l=new D(new Li(.16,1),y.leaf);l.position.set(n-2+o*.8,.78,t-3.6/2+.4),b.bake(l)}}function Xf(n,t){let e=new Pt,i=new D(new ge(.35,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),y.black);i.position.y=.85,e.add(i);let s=new D(new ge(.35,16,10,0,Math.PI*2,0,Math.PI/2),y.black);s.position.y=.87,e.add(s);for(let r=0;r<3;r++){let o=new D(new pt(.02,.02,.85,6),y.steel),a=r/3*Math.PI*2;o.position.set(Math.cos(a)*.2,.4,Math.sin(a)*.2),o.rotation.set(Math.sin(a)*.3,0,-Math.cos(a)*.3),e.add(o)}e.position.set(n,0,t),b.bake(e),b.col(n-.35,0,t-.35,n+.35,1.2,t+.35,{bullet:!1,surf:"metal"})}function qf(n,t){let e=new Pt,i=new D(new pt(.6,.6,.05,20),y.white);i.position.y=.72,e.add(i);let s=new D(new pt(.04,.04,2.3,8),y.steel);s.position.y=1.15,e.add(s);let r=new D(new jn(1.4,.5,8,1,!0),Nt(13647936,{side:hn}));r.position.y=2.2,e.add(r),e.position.set(n,0,t),b.bake(e),b.col(n-.6,0,t-.6,n+.6,.75,t+.6,{bullet:!1});for(let o=0;o<3;o++){let a=o/3*Math.PI*2;V_(n+Math.cos(a)*1,t+Math.sin(a)*1,-a-Math.PI/2)}}function V_(n,t,e){let i=new Pt,s=new D(et(.45,.04,.45,1),y.white);s.position.y=.45,i.add(s);let r=new D(et(.45,.45,.04,1),y.white);r.position.set(0,.7,-.21),i.add(r);for(let o of[-1,1])for(let a of[-1,1]){let l=new D(et(.03,.45,.03,1),y.white);l.position.set(o*.2,.22,a*.2),i.add(l)}i.position.set(n,0,t),i.rotation.y=e,b.bake(i)}function Fn(n,t,e){let i=new ui;i.moveTo(-.3,0),i.lineTo(.3,0),i.lineTo(.12,.3),i.lineTo(.08,.85),i.lineTo(-.08,.85),i.lineTo(-.12,.3),i.closePath();let s=new _i(i,{depth:2.4,bevelEnabled:!1});s.translate(0,0,-1.2),pi(s,.7,.7);let r=new $t().makeRotationY(e);r.setPosition(n,0,t),b.addGeo(y.concrete,s,r);let o=Math.abs(Math.cos(e))>.5;b.col(n-(o?.3:1.2),0,t-(o?1.2:.3),n+(o?.3:1.2),.85,t+(o?1.2:.3))}function ni(n,t,e){let i=Ei(t,{w:256,h:256,size:200,color:"rgba(255,255,255,0.9)",stroke:"rgba(0,0,0,0.35)",strokeW:8,draw:h=>{h.strokeStyle="rgba(255,220,60,0.9)",h.lineWidth=14,h.beginPath(),h.arc(128,128,116,0,7),h.stroke()}}),s=new D(new be(3.4,3.4),new Wn({map:i,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));s.rotation.x=-Math.PI/2,s.position.set(e.x,.06,e.z),s.renderOrder=2,n.add(s);let r=new Pt,o=new D(et(1.3,.7,.9,1),y.greenPaint);o.position.y=.35,r.add(o);for(let h=0;h<4;h++){let u=new D(et(.04,.72,.92,1),y.darkTrim);u.position.set(-.5+h*.33,.35,0),r.add(u)}let a=new D(et(1.35,.06,.95,1),y.darkTrim);a.position.y=.72,r.add(a);let l=new D(new be(.5,.5),new te({map:Ei(t,{w:128,h:128,size:100,bg:"#f0c020",color:"#111"}),roughness:.6}));l.position.set(0,.38,.46),r.add(l);let c=l.clone();c.position.z=-.46,c.rotation.y=Math.PI,r.add(c),r.position.set(e.x,0,e.z),b.bake(r),b.col(e.x-.65,0,e.z-.45,e.x+.65,.75,e.z+.45,{surf:"metal"})}function Eg(n,t){let e=new Pt,i=new D(new pt(.12,.16,8.5,10),y.bark);i.position.y=4.25,e.add(i);let s=new D(et(.12,.12,2,1),y.wood);s.position.y=7.8,e.add(s);for(let o of[-.85,0,.85]){let a=new D(new pt(.04,.05,.14,8),y.white);a.position.set(0,7.93,o),e.add(a)}let r=new D(new pt(.25,.25,.7,12),y.metal);r.position.set(.3,6.6,0),e.add(r),e.position.set(n,0,t),b.bake(e),b.col(n-.16,0,t-.16,n+.16,8.5,t+.16,{surf:"wood"})}function Ul(n,t,e,i){let s=[];for(let o=0;o<=24;o++){let a=o/24;s.push(new F(n+(t-n)*a,e-Math.sin(a*Math.PI)*.6,i))}let r=new Yr(new cr(s),24,.012,4,!1);b.addGeo(y.black,r,new $t)}function Fu(n,t,e){let i=new Pt,s=new D(et(1.2,.8,.05,1),y.white);s.position.set(0,3.2,0),i.add(s);let r=new D(et(.45,.35,.06,1),y.redPaint);r.position.set(0,3.05,.005),i.add(r);let o=new D(et(.37,.27,.07,1),y.white);o.position.set(0,3.05,.006),i.add(o);let a=new D(new $e(.23,.012,6,20),y.redPaint);a.rotation.x=Math.PI/2,a.position.set(0,2.9,.28),i.add(a);let l=new D(new pt(.23,.15,.4,12,1,!0),Nt(16777215,{wireframe:!0}));l.position.set(0,2.7,.28),i.add(l),i.position.set(n,0,t),i.rotation.y=e,b.bake(i)}function W_(n,t){let e=new Pt;for(let s of[-1.4,1.4])for(let r of[-.6,.6]){let o=new D(new pt(.04,.04,2.5,8),y.redPaint);o.position.set(s,1.2,r*.5),o.rotation.x=r*.45,e.add(o)}let i=new D(new pt(.05,.05,3,8),y.redPaint);i.rotation.z=Math.PI/2,i.position.y=2.35,e.add(i);for(let s of[-.6,.6]){for(let o of[-.18,.18]){let a=new D(new pt(.008,.008,1.8,4),y.steel);a.position.set(s+o,1.45,0),e.add(a)}let r=new D(et(.45,.04,.2,1),y.black);r.position.set(s,.55,0),e.add(r)}e.position.set(n,0,t),b.bake(e);for(let s of[-1.4,1.4])b.col(n+s-.1,0,t-.6,n+s+.1,2.4,t+.6,{bullet:!1,surf:"metal"})}function X_(n,t){let e=new Pt,i=new D(new pt(1.6,1.6,.04,28),y.black);i.position.y=.85,e.add(i);let s=new D(new $e(1.65,.1,6,28),Nt(2783968));s.rotation.x=Math.PI/2,s.position.y=.88,e.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new D(new pt(.03,.03,.88,6),y.steel);a.position.set(Math.cos(o)*1.6,.44,Math.sin(o)*1.6),e.add(a)}e.position.set(n,0,t),b.bake(e),b.col(n-1.4,0,t-1.4,n+1.4,.9,t+1.4,{bullet:!1,surf:"carpet"})}function Au(n,t,e,i){let s=new Pt,r=new D(et(1.3,2.2,.05,1),y.paintwood);r.position.set(.65,1.1,0),s.add(r);for(let[a,l]of[[.35,1.55],[.95,1.55],[.35,.6],[.95,.6]]){let c=new D(et(.4,.6,.07,1),y.paintwood);c.position.set(a,l,0),s.add(c)}let o=new D(new ge(.04,8,6),y.chrome);o.position.set(1.15,1,.05),s.add(o),s.position.set(n,.18,t),s.rotation.y=e+i,b.bake(s)}function mg(n,t,e){let i=new D(et(1,.02,.6,1),Nt(9071162,{map:K.carpet.map}));i.position.set(n,.21,t),b.bake(i);for(let s of[-1,1]){let r=new D(new pt(.2,.15,.35,14),Nt(11558970));r.position.set(n+s*1,.38,t+e*.2),b.bake(r);let o=new D(new Li(.28,2),y.leaf);o.position.set(n+s*1,.75,t+e*.2),b.bake(o)}}function Bu(n,t){b.box(y.metal,n,.4,t,.8,.8,.8,{surf:"metal",bullet:!0});let e=new D(new pt(.3,.3,.02,16),y.black);e.position.set(n,.81,t),b.bake(e);for(let i=0;i<7;i++)b.box(y.darkTrim,n-.41,.15+i*.1,t,.01,.03,.7,{collide:!1})}function Fl(n,t,e){let i=new Pt;for(let l of[-.5,.5]){let c=new D(new $e(.3,.025,6,20),y.tire);c.position.set(l,.32,0),i.add(c)}let s=new D(new pt(.02,.02,.9,6),y.carBlue);s.rotation.z=Math.PI/2,s.position.set(0,.6,0),i.add(s);let r=new D(new pt(.02,.02,.6,6),y.carBlue);r.rotation.z=.8,r.position.set(-.2,.45,0),i.add(r);let o=new D(et(.22,.05,.1,1),y.black);o.position.set(-.25,.8,0),i.add(o);let a=new D(new pt(.015,.015,.5,6),y.chrome);a.rotation.x=Math.PI/2,a.position.set(.45,.85,0),i.add(a),i.position.set(n,0,t),i.rotation.set(0,e,.25),b.bake(i)}function gg(n,t){let e=new D(new $e(.22,.06,8,20),Nt(2787882));e.position.set(n,.35,t),b.bake(e);let i=new D(et(.4,.5,.05,1),y.darkTrim);i.position.set(n,.25,t-.08),b.bake(i)}function q_(){for(let e of[-24,-6,12,28])Eg(e,-6.3);for(let[e,i]of[[-24,-6],[-6,12],[12,28]])for(let s of[-.85,0,.85])Ul(e,i,7.93,-6.3+s);Ul(-40,-24,7.93,-6.3),Ul(28,44,7.93,-6.3),Fu(8,-9.85,0),Fu(-8,9.85,Math.PI),W_(14,23),X_(-14,-22.5),Au(-1.7,-9.5,0,-1.2),Au(1.7,9.5,Math.PI,-1.2),Au(1.3,-17.5,Math.PI,1.1),Au(-1.3,17.5,0,1.1),mg(-1,-8.3,1),mg(1,8.3,-1),Bu(6,-18.4),Bu(-6,18.4),Fl(-11.5,-7.8,.3),Fl(11.2,7.8,2.6),gg(-6.5,-18.2),gg(6.5,18.2);let n=new D(new pt(.4,.4,.02,20),y.rust);n.position.set(-6,.012,1.5),b.bake(n);let t=n.clone();t.position.set(18,.012,-1.6),b.bake(t);for(let e of[-18,0,18])for(let i of[-1,1])b.box(y.darkTrim,e,.03,i*3.85,.7,.02,.25,{collide:!1})}function Jf(n,t="town"){vg(t),U_(),b=new Su;{let r=b.box.bind(b),o=new Set([K.brick.map,K.concrete.map,K.siding.map]);b.box=(a,l,c,h,u,d,f,p={})=>{if(r(a,l,c,h,u,d,f,p),!y.grime||p.rotY||p.noGrime||!o.has(a.map)||d<2||c-d/2>.4||a===y.concrete&&u>6&&f>6)return;let g=c-d/2+.4,m=(x,M,w,E)=>{if(x<.6)return;let R=new $t().makeRotationY(M);R.setPosition(w,g,E),b.addGeo(y.grime,Zf(x),R)};m(u,0,l,h+f/2+.008),m(u,Math.PI,l,h-f/2-.008),m(f,Math.PI/2,l+u/2+.008,h),m(f,-Math.PI/2,l-u/2-.008,h)}}if(en.id==="market")return Z_(n);if(en.id==="station")return K_(n);if(en.id==="port")return j_(n);if(en.id==="villa")return tb(n);if(en.id==="ship")return nb(n);if(en.id==="border")return sb(n);if(en.id==="slums")return rb(n);Sn(42);let e=new be(220,220,1,1);e.rotateX(-Math.PI/2),pi(e,220/4,220/4),b.addGeo(y.grass,e,new $t),b.box(y.asphalt,0,.005,0,120,.01,8,{collide:!1,uv:6});for(let r=-58;r<58;r+=4)b.box(y.lineY,r,.012,0,2.2,.004,.14,{collide:!1});for(let r of[-1,1])b.box(y.lineW,0,.012,r*3.6,120,.004,.12,{collide:!1});for(let r of[-1,1])b.box(y.concrete,0,.075,r*4.85,120,.15,1.7,{uv:2,surf:"concrete",bullet:!1}),b.box(y.concrete,0,.08,r*4.03,120,.16,.12,{collide:!1,uv:1});b.box(y.concrete,8,.02,-7.5,5.2,.04,4.4,{collide:!1,uv:2}),b.box(y.concrete,-8,.02,7.5,5.2,.04,4.4,{collide:!1,uv:2}),b.box(y.concrete,-1,.02,-7.6,1.6,.04,3.2,{collide:!1,uv:1}),b.box(y.concrete,1,.02,7.6,1.6,.04,3.2,{collide:!1,uv:1}),ug({x0:-6,x1:5.5,z0:-17.5,z1:-9.5,frontNeg:!0,siding:y.sidingY,roof:y.roof,doorX:-1,chimX:-4.5,frontOps:[{c:-1,d:1},{c:-4,w:1.6},{c:2.6,w:1.8}],backOps:[{c:2,d:1},{c:-3.5,w:1.4},{c:-.2}],leftOps:[{c:-11.5,w:1.4},{c:-15.5,d:1}],rightOps:[{c:-12.5,d:1,w:1.4}],partX:.5,partZ0:-17.4,partZ1:-12.8,partDoor:-14.5}),dg({x0:5.5,x1:10.5,z0:-17,z1:-9.8,frontNeg:!0,siding:y.sidingY,roof:y.roof2,outerX:10.5}),Er(-3.5,-12,0,y.fabricG),an(-3.5,-10.9,1.1,.6,.42),oa(-3.5,-11.6,3.2,2.2,y.carpetR),Du(-3.5,-9.95,Math.PI),dn(-5.6,-14,Math.PI/2),Nu(-5.4,-10.2),sa(-.2,1.7,-17.33,0,y.paint1),Wf(1,3.8,-17.5,-1),an(3,-13.8,1.4,.9,.76),qn(2.4,-14.5,0),qn(3.6,-13.1,Math.PI),qn(2.4,-13.1,Math.PI),sa(-5.85,1.7,-12,Math.PI/2,y.paint2),_r(-3.2,-15.8,Math.PI/2),ug({x0:-5.5,x1:6,z0:9.5,z1:17.5,frontNeg:!1,siding:y.sidingB,roof:y.roof2,doorX:1,chimX:4.5,frontOps:[{c:1,d:1},{c:4,w:1.6},{c:-2.6,w:1.8}],backOps:[{c:-2,d:1},{c:3.5,w:1.4},{c:.2}],leftOps:[{c:12.5,d:1,w:1.4}],rightOps:[{c:11.5,w:1.4},{c:15.5,d:1}],partX:-.5,partZ0:12.8,partZ1:17.4,partDoor:14.5}),dg({x0:-10.5,x1:-5.5,z0:9.8,z1:17,frontNeg:!1,siding:y.sidingB,roof:y.roof,outerX:-10.5}),Er(3.5,12,Math.PI,y.fabricO),an(3.5,10.9,1.1,.6,.42),oa(3.5,11.6,3.2,2.2,y.carpetB),Du(3.5,9.95,0),dn(5.6,14,-Math.PI/2),Nu(5.4,10.2),sa(.2,1.7,17.33,Math.PI,y.paint2),Wf(-3.8,-1,17.5,1),an(-3,13.8,1.4,.9,.76),qn(-2.4,14.5,Math.PI),qn(-3.6,13.1,0),_r(3.2,15.8,-Math.PI/2),G_(1.5,-1.6,0),fn(-13.5,2,0,y.carRed),fn(13,1.8,Math.PI,y.carWhite,!0),fn(8,-7.6,Math.PI/2,y.carBlue),Fn(-26,-1.5,0),Fn(-26,1.5,0),Fn(26,-1.5,0),Fn(26,1.5,0),Fn(-21,0,Math.PI/2+0),At(20.5,0,-2.2,1.1),At(20.5,0,-1,1.1),At(20.5,1.1,-1.6,1.1,.3),_s(-9,-5.4,1),_s(9,5.4,-1),_s(-22,5.4,-1),_s(22,-5.4,1),gi(-4.2,-5,2779706),gi(-3.4,-5,2771594),gi(4.2,5,2779706),gi(5,5,5921370),Uu(-11,-4.9),Uu(11,4.9),fg(-2.5,-6.2,0),fg(2.5,6.2,Math.PI),mi(-9,-12.5,1.1,1),mi(12.5,-19,1,2),mi(-12.5,19,1,3),mi(9,12.5,1.1,4),mi(-27,-8,1.2,5),mi(27,8,1.2,6),mi(-27,12,1,7),mi(27,-21,1,8),Ru(-30,-6.2,-11,-6.2,.9,[[5,6.5]]),Ru(11,6.2,30,6.2,.9,[[12,13.5]]),pg(-24.5,-15.5),Hf(-17,-16.5,3.2,1.2),Hf(-21.5,-9.5,2,1.2),wr(-15.5,-9.2,0),wr(-15.5,-10.2,1),At(-14,0,-13.5,1),At(-14,0,-14.6,1),At(-14,1,-14,.9,.4),ni(n,"A",We.A),z_(18.5,-18),Ll(15,-11,0),Ll(22,-11.5,Math.PI/2),Ll(15.6,-14.2,Math.PI/2),At(22.5,0,-14.5,1.1),At(22.5,1.1,-14.5,.8,.5),wr(20.5,-9,2),ni(n,"B",We.B),Xf(4,20),qf(-4.5,20.5),At(-16,0,13,1.1),At(-16,0,14.1,1.1),At(16,0,12.5,1),At(17.1,0,12.5,1),At(16.5,1,12.5,.9),Ll(-20,10,0),Ll(20,17,Math.PI/2),gi(-11.6,17.5,2771594),gi(-12.3,17.5,2779706),Hf(14.5,20.5,3,1.2),pg(22.5,20.5),Xf(-8.5,-22.5),qf(8.5,-21.5),Ru(-30,-19.5,30,-19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),Ru(-30,19.5,30,19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),ei(-33,-28,33,-26.6),ei(-33,26.6,33,28),ei(-33,-26.6,-31.6,-5.8),ei(-33,5.8,-31.6,26.6),ei(31.6,-26.6,33,-5.8),ei(31.6,5.8,33,26.6),b.col(-31.6,0,-5.8,-30.5,6,5.8,{bullet:!1}),b.col(30.5,0,-5.8,31.6,6,5.8,{bullet:!1}),ei(-12.5,9.5,-11.8,15.5,1.6),ei(11.8,-15.5,12.5,-9.5,1.6),ei(-30.5,-4,-27.5,-3.5,1.2),q_();let i=new Pt;Sn(9);for(let r=0;r<26;r++){let o=r/26*Math.PI*2,a=55+yt()*15,l=Math.cos(o)*a,c=Math.sin(o)*a,h=new D(et(8,5,7,2.5),[y.sidingY,y.sidingB,y.sidingG][r%3]);h.position.set(l,2.5,c),h.rotation.y=-o,i.add(h);let u=new D(new jn(6.2,2.5,4),y.roof2);u.position.set(l,6.2,c),u.rotation.y=-o+Math.PI/4,i.add(u)}b.bake(i);for(let r=0;r<30;r++){let o=r/30*Math.PI*2+.1;mi(Math.cos(o)*(42+yt()*8),Math.sin(o)*(40+yt()*8),1.2+yt()*.5,30+r)}b.colliders=b.colliders.filter(r=>r.min.x>-40&&r.max.x<40&&r.min.z>-36&&r.max.z<36),b.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),b.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),b.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let s=b.finish(n);Y_(n,b.colliders);for(let[r,o]of[[-1.5,-13.5],[1,13.5]]){let a=new tn(16767136,6,9,1.6);a.position.set(r,2.6,o),n.add(a)}return{colliders:b.colliders,meshes:s}}function wg(n,t,e,i){let s=null,r=-1;for(let o of n)t>=o.min.x&&t<=o.max.x&&i>=o.min.z&&i<=o.max.z&&o.max.y<=e+.05&&o.max.y>r&&(r=o.max.y,s=o);return s?s.surf:en.ground==="concrete"||Math.abs(i)<4?"concrete":"grass"}var Kf={time:{value:0}};function Y_(n,t){let e=window.__vwQuality??1,i=e===0?3500:e===1?9e3:16e3,s=[],r=[],o=[];Sn(77);for(let v=0;v<7;v++){let C=yt()*Math.PI,P=.1+yt()*.16,L=.02,B=(yt()-.5)*.15,U=(yt()-.5)*.12,I=(yt()-.5)*.12,k=Math.cos(C),q=Math.sin(C),V=(nt,Mt)=>[U+k*nt*L+B*Mt*k*0,Mt*P,I+q*nt*L+B*Mt],Q=[V(-1,0),V(1,0),V(0,1)],Y=-q,j=k;for(let nt of Q){s.push(...nt),r.push(Y*.3,.9,j*.3);let Mt=nt[1]/P;o.push(.18+Mt*.32,.34+Mt*.38,.1+Mt*.1)}}let a=new je;a.setAttribute("position",new ce(s,3)),a.setAttribute("normal",new ce(r,3)),a.setAttribute("color",new ce(o,3));let l=new te({vertexColors:!0,roughness:.9,side:hn});l.onBeforeCompile=v=>{v.uniforms.time=Kf.time,v.vertexShader=`uniform float time;
`+v.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.);
      float sway = sin(time*1.7 + wp.x*0.35 + wp.z*0.27) * 0.06 + sin(time*3.1 + wp.x*1.3) * 0.02;
      transformed.x += sway * position.y * 3.0; transformed.z += sway * position.y * 1.5;`)};let c=new ar(a,l,i),h=new $t,u=new _n,d=new F,f=new F,p=(v,C)=>{if(Math.abs(C)<5.8)return!0;for(let P of t)if(P.max.y>.12&&v>P.min.x-.1&&v<P.max.x+.1&&C>P.min.z-.1&&C<P.max.z+.1)return!0;return v>5.6&&v<10.6&&C>-9.8&&C<-5.3||v>-10.6&&v<-5.4&&C>5.3&&C<9.8||Math.abs(v+1)<.9&&C>-9.5&&C<-5.8||Math.abs(v-1)<.9&&C<9.5&&C>5.8},g=0,m=0;for(;g<i&&m<i*6;){m++;let v=re.minX+.3+yt()*(re.maxX-re.minX-.6),C=re.minZ+.3+yt()*(re.maxZ-re.minZ-.6);if(p(v,C))continue;let P=.7+yt()*.9;u.setFromAxisAngle(new F(0,1,0),yt()*6.28),d.set(P,P*(.8+yt()*.6),P),f.set(v,0,C),h.compose(f,u,d),c.setMatrixAt(g++,h)}c.count=g,c.receiveShadow=!0,c.castShadow=!1,c.frustumCulled=!1,n.add(c);let x=new Li(.045,0),M=new te({roughness:.6}),w=220,E=new ar(x,M,w),R=new Xt,S=[[-5.6,-8.9,4,.5],[.4,-8.9,4.6,.5],[-5,8.9,4.4,.5],[2.4,8.9,3.4,.5]];for(let v=0;v<w;v++){let C=S[v%S.length],P=C[0]+yt()*C[2],L=C[1]+(yt()-.5)*C[3];h.compose(new F(P,.22+yt()*.18,L),u,new F(1,1,1)),E.setMatrixAt(v,h),E.setColorAt(v,R.setHex([15747690,16764992,16777215,10510560,16747050][Math.floor(yt()*5)]))}n.add(E);let _=new Pt;n.add(_);for(let v of S){let C=new D(new fe(v[2]+.2,.18,v[3]+.2),y.dirt);C.position.set(v[0]+v[2]/2,.09,v[1]),C.receiveShadow=!0,_.add(C);for(let P=0;P<v[2]*6;P++){let L=new D(new Li(.1,1),y.leaf);L.position.set(v[0]+yt()*v[2],.22,v[1]+(yt()-.5)*v[3]),L.scale.y=.7,_.add(L)}}un(_)}var Gt=(n,t=1.3)=>({c:n,w:t,b:0,t:2.2}),de=(n,t=1.6,e=1,i=2)=>({c:n,w:t,b:e,t:i,win:1,noCurtain:1});function Sg(n,t,e,i,s,r){let o=Nt(r,{roughness:.8,side:hn}),a=t-n,l=i-e,c=Math.max(2,Math.round(a/.5));for(let h=0;h<c;h++){let u=h%2?o:y.white;b.box(u,n+(h+.5)*a/c,s,(e+i)/2,a/c,.04,l,{collide:!1})}}function br(n,t,e,i,s){let r=e-t;b.box(y.paintwood,n,.5,(t+e)/2,1.1,1,r,{surf:"wood",uv:1.5});let o=Math.floor(r/.9);for(let a=0;a<o;a++){let l=t+.45+a*(r-.9)/Math.max(1,o-1);b.box(y.wood,n,1.06,l,.95,.12,.8,{collide:!1});let c=Nt(s[a%s.length],{roughness:.45});for(let h=0;h<9;h++){let u=new D(new ge(.11,10,8),c);u.position.set(n-.3+h%3*.3,1.2+(h===4?.08:0),l-.25+Math.floor(h/3)*.25),b.bake(u)}}for(let a of[t+.1,e-.1])b.box(y.steel,n+i*.5,1.3,a,.06,2.6,.06,{collide:!1});Sg(n-.7,n+.7,t,e,2.6,s[0]===15231514?14174762:2787914)}function Xe(n,t,e=1,i=0){b.box(y.wood,n,.07,t,1.2,.14,1,{surf:"wood"});let s=Nt(11569754,{roughness:.9});for(let r=0;r<e;r++)b.box(s,n,.14+.35+r*.7,t,1.1,.7,.92,{surf:"wood"})}function no(n,t,e=0){let i=Math.abs(Math.cos(e))>.5,s=i?1.9:1.2,r=i?1.2:1.9;b.box(y.greenPaint,n,.6,t,s,1.2,r,{surf:"metal"}),b.box(y.black,n,1.23,t,s+.06,.06,r+.06,{collide:!1})}function ra(n,t,e,i){let s=new Pt,r=(L,B,U,I,k)=>{let q=new D(L,B);return q.position.set(U,I,k),s.add(q),q},o=2.3,a=2.22,l=Nt(i,{roughness:.42,metalness:.35}),c=Nt(i===15261904||i===15921902?13159632:i,{roughness:.35,metalness:.55}),h=Nt(15659246,{roughness:.3,metalness:.3}),u=Nt(2105376,{roughness:.8}),d=Nt(5922402,{roughness:.6});for(let L of[-1,1])r(et(7.6,.2,.12),u,.1,.62,L*.52);let f=r(new pt(.26,.26,.9,16),Nt(12106944,{metalness:.8,roughness:.3}),-.6,.6,.85);f.rotation.z=Math.PI/2;for(let L of[-1,1])r(et(2,.05,.04),d,1.9,.62,L*1.08),r(et(2,.05,.04),d,1.9,.42,L*1.08);let p=-3.42,g=-1.42,m=new ui;m.moveTo(g,.5),m.lineTo(-2.4+.56,.5),m.absarc(-2.4,.45,.56,.09,Math.PI-.09,!1),m.lineTo(p+.12,.5),m.quadraticCurveTo(p,.5,p,.7),m.lineTo(p,1.3),m.quadraticCurveTo(p,1.42,p+.05,1.5),m.lineTo(p+.2,2.18),m.quadraticCurveTo(p+.25,2.3,p+.42,2.3),m.lineTo(g,2.3),m.lineTo(g,.5);let x=new _i(m,{depth:a-.12,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:3,curveSegments:8});x.translate(0,0,-(a-.12)/2),pi(x,.5,.5),r(x,h,0,0,0);let M=r(et(.04,.72,a-.2),y.glass,p+.15,1.86,0);M.rotation.z=-.27;for(let L of[-1,1])r(et(.02,.03,.55),y.black,p+.04,1.54,L*.35).rotation.set(L*.15,0,-.27);for(let L of[-1,1]){let B=L*(a/2+.005);r(et(.95,.62,.02),y.glass,p+.95,1.86,B);let U=r(et(.3,.5,.02),y.glass,p+.34,1.8,B);U.rotation.z=-.27,r(et(.02,1.6,.012),y.black,p+.42,1.3,B+L*.004),r(et(.02,1.6,.012),y.black,p+1.5,1.3,B+L*.004),r(et(.2,.04,.03),y.chrome,p+1.3,1.42,B+L*.015),r(et(.5,.06,.25),d,p+.95,.55,L*(a/2+.05));let I=r(et(.03,.03,.32),y.black,p+.3,1.75,L*(a/2+.16));r(et(.06,.38,.2),y.black,p+.3,1.7,L*(a/2+.33)),r(et(.01,.32,.15),y.chrome,p+.265,1.7,L*(a/2+.33))}r(et(.04,.32,1.3),y.black,p-.08,1,0);for(let L=0;L<4;L++)r(et(.03,.03,1.26),y.chrome,p-.1,.88+L*.08,0);for(let L of[-1,1])r(et(.05,.2,.36),y.lampGlow,p-.08,1.02,L*.88),r(et(.05,.08,.2),Nt(16751136,{emissive:8400896}),p-.08,.84,L*.92);r(et(.22,.26,a+.06),d,p-.1,.58,0),r(et(.02,.12,.6),Nt(2775610),p+.02,2,0);let w=-1.32,E=4.18,R=E-w,S=(w+E)/2,_=.75,v=3.2;r(et(R,v-_,o,1),l,S,(_+v)/2,0),r(et(R+.04,.1,o+.04),c,S,v-.05,0),r(et(R+.04,.12,o+.04),c,S,_+.06,0);for(let L=w+.3;L<E-.2;L+=.55)for(let B of[-1,1])r(et(.06,v-_-.2,.03),c,L,(_+v)/2,B*(o/2+.012));for(let L of[-1,1])r(et(.08,v-_,.08),c,w+.04,(_+v)/2,L*(o/2));r(et(.02,v-_-.14,.02),y.black,E+.012,(_+v)/2,0);for(let L of[-1,1]){r(et(.08,v-_,.1),c,E,(_+v)/2,L*(o/2-.02));for(let B of[_+.35,(_+v)/2,v-.35])r(et(.06,.12,.14),d,E+.03,B,L*(o/2-.1));for(let B of[.28,.75])r(new pt(.025,.025,v-_-.1,8),y.chrome,E+.06,(_+v)/2,L*B),r(et(.06,.05,.2),y.chrome,E+.08,1.6,L*B-L*.08);r(et(.06,.16,.3),Nt(13637656,{emissive:5242880}),E+.02,.55,L*.9),r(et(.04,.4,.4),y.black,E-.6,.42,L*(o/2-.2))}r(et(.12,.12,o-.2),d,E+.02,.5,0);for(let L of[-1,1])Nl(s,-2.4,.45,L*.95,.45,.28),Nl(s,2.55,.45,L*.98,.45,.28),Nl(s,2.55,.45,L*.68,.45,.28);let C=Nt(16752672,{emissive:8404992,roughness:.3});for(let L of[-1,1]){for(let B=w+.4;B<E;B+=1.3)r(et(.12,.06,.03),C,B,_+.02,L*(o/2+.03));for(let B=w+.2;B<E;B+=1.1)r(et(.08,.08,.02),Nt(13637656,{emissive:4194304}),B,.62,L*1.1)}for(let L of[-.5,0,.5])r(et(.08,.06,.14),C,p+.5,2.34,L);r(et(.35,.05,a-.1),d,p+.32,2.32,0);{let L=Nt(2764340,{roughness:.9});for(let U of[-.5,.5])r(et(.5,.12,.5),L,p+1.2,1.2,U),r(et(.12,.7,.5),L,g-.15,1.6,U);r(et(.4,.3,a-.3),Nt(2236966),p+.4,1.38,0);let B=r(new $e(.2,.025,6,16),y.black,p+.75,1.55,-.5);B.rotation.set(.3,Math.PI/2,0),B.rotation.z=.9}{let L=r(new be(.42,.21),y.plate,p-.235,.6,0);L.rotation.y=-Math.PI/2;let B=r(new be(.42,.21),y.plate,E+.1,.5,0);B.rotation.y=Math.PI/2}for(let L of[-1,1]){let B=r(new be(R,.9),y.grime,S,_+.45,L*(o/2+.03));L<0&&(B.rotation.y=Math.PI);let U=r(new be(2,.6),y.grime,(p+g)/2,.85,L*(a/2+.07));L<0&&(U.rotation.y=Math.PI)}let P=new D(new be(3.2,1.2),new te({map:Ei("\u9752\u679C\u4FBF",{w:512,h:192,size:120,color:i===9091146?"#ffffff":"#2a6a3a",bg:"rgba(0,0,0,0)"}),transparent:!0,roughness:.6}));for(let L of[-1,1]){let B=P.clone();B.position.set(1.5,2.1,L*(o/2+.035)),B.rotation.y=L>0?0:Math.PI,s.add(B)}s.position.set(n,0,t),s.rotation.y=e,b.bake(s),b.col(n-1.4,.7,t-1.2,n+4.2,3.2,t+1.2,{surf:"metal"}),b.col(n-3.4,.4,t-1.15,n-1.4,2.3,t+1.15,{surf:"metal"})}function Gu(n,t,e){let i=Nt(15773728,{roughness:.5,map:K.metal.map});b.box(i,n,.75,t,1.2,1.1,1,{surf:"metal"}),b.box(y.black,n+.2,1.6,t,.9,.08,1,{collide:!1});for(let s of[-1,1])b.box(y.darkTrim,n-.35,1.2,t+s*.45,.06,2.2,.06,{collide:!1});for(let s of[-1,1])b.box(y.steel,n-.75,.6,t+s*.3,.06,1.8,.1,{collide:!1});for(let s of[-1,1])b.box(y.steel,n-1.1,.06,t+s*.3,.8,.05,.12,{collide:!1})}function io(n,t,e,i){let s=Nt(i,{roughness:.4}),r=Math.abs(Math.cos(e))>.5;b.box(s,n,.9,t,r?1:.8,1.8,r?.8:1,{surf:"metal"});let o=new D(new be(.7,1.1),y.lampGlow);o.position.set(n+(r?0:Math.sin(e)*.41),1.1,t+(r?Math.cos(e)*.41:0)),o.rotation.y=e,b.bake(o)}function Tn(n,t,e,i,s,r=4,o=1,a="#2a5a3a"){let l=new D(new be(r,o),new te({map:Ei(s,{w:512,h:Math.round(512*o/r),size:Math.round(380*o/r),color:"#fff8e0",bg:a}),roughness:.7}));l.position.set(n,t,e),l.rotation.y=i,b.bake(l)}function Gn(n,t,e,i,s){let r=Math.hypot(e-n,i-t),o=Math.abs(e-n)>Math.abs(i-t);b.box(y.steel,(n+e)/2,s+1,(t+i)/2,o?r:.06,.06,o?.06:r,{collide:!1}),b.box(y.steel,(n+e)/2,s+.5,(t+i)/2,o?r:.04,.04,o?.04:r,{collide:!1});let a=Math.ceil(r/1.2);for(let l=0;l<=a;l++){let c=l/a;b.box(y.steel,n+(e-n)*c,s+.5,t+(i-t)*c,.05,1,.05,{collide:!1})}b.col(Math.min(n,e)-.04,s,Math.min(t,i)-.04,Math.max(n,e)+.04,s+1.05,Math.max(t,i)+.04,{bullet:!1,surf:"metal"})}function zn(n,t,e,i){let s=Nt(i,{roughness:.5});for(let r=0;r<e;r++)b.box(s,n,.18+r*.36,t,.62,.34,.44,{surf:"metal",collide:!1}),b.box(y.darkTrim,n,.33+r*.36,t,.64,.03,.46,{collide:!1});b.col(n-.31,0,t-.22,n+.31,e*.36,t+.22,{surf:"metal"})}function Cu(n,t,e,i,s,r="#fff6d0"){let o=new D(new be(.9,.42),new te({map:Ei(s,{w:256,h:120,size:Math.min(64,Math.floor(230/s.length*1.15)),color:"#2a1a0a",bg:r}),roughness:.8,side:hn}));o.position.set(n,t,e),o.rotation.y=i,b.bake(o)}function Xn(n,t,e,i){b.box(y.concrete,n,.35,t,e,.7,i,{surf:"concrete",uv:1}),b.box(y.dirt,n,.69,t,e-.16,.02,i-.16,{collide:!1});for(let s=0;s<Math.round(e*i*3);s++){let r=new D(new Li(.18+yt()*.12,1),y.leaf);r.position.set(n-e/2+.2+yt()*(e-.4),.85+yt()*.2,t-i/2+.2+yt()*(i-.4)),b.bake(r)}}function Qf(n,t){b.box(y.steel,n-1.4,1.2,t,.08,2.4,.08,{collide:!1}),b.box(y.steel,n+1.4,1.2,t,.08,2.4,.08,{collide:!1}),b.box(y.roof2,n,2.45,t+.3,3.2,.08,1.4,{collide:!1}),b.box(y.glass,n,1.3,t-.35,2.8,1.8,.04,{bullet:!1}),b.box(y.wood,n,.45,t,2.4,.08,.4,{collide:!1}),Tn(n,2.15,t-.38,0,"\u5E02\u5834\u524D",1.4,.35,"#2a4a8a")}function kf(n,t,e,i){let s=new pt(.07,.07,Math.abs(e-t),10);s.rotateX(Math.PI/2);let r=new D(s,y.rust);r.position.set(n,i,(t+e)/2),b.bake(r)}function $_(){Sn(311),Cu(-4.3,2,-3.1,Math.PI/2,"\u306B\u3093\u3058\u3093 98\u5186"),Cu(-4.3,2,3.1,Math.PI/2,"\u306A\u3059 3\u672C150\u5186"),Cu(4.6,2,-3.1,-Math.PI/2,"\u30D4\u30FC\u30DE\u30F3 5\u500B100\u5186"),Cu(4.6,2,3.1,-Math.PI/2,"\u30C8\u30DE\u30C8 1\u7BB1500\u5186","#ffe0d0");for(let[t,e]of[[-4,-3],[4,-3],[-4,3],[4,3],[0,0]])b.box(y.darkTrim,t,3.75,e,.02,.7,.02,{collide:!1});b.box(y.paintwood,-5.6,.5,5.4,1.6,1,.7,{surf:"wood"}),b.box(y.black,-5.9,1.12,5.4,.4,.25,.35,{collide:!1}),Tn(-5.6,1.6,5.06,Math.PI,"\u304A\u4F1A\u8A08",.9,.3,"#7a2a1a");for(let[t,e,i]of[[-2.9,-4.6,14174762],[-2.9,4.6,2779856],[3.1,1.6,2793546],[3.1,-1.7,15773728]])zn(t,e,2,i);Tn(-8.86,3.1,.2,Math.PI/2,"\u671D\u3069\u308C\u91CE\u83DC",2.2,.55,"#3a7a2a"),Tn(8.86,3.1,0,-Math.PI/2,"\u7523\u5730\u76F4\u9001",2,.55,"#b0402a");let n=Nt(11569754,{roughness:.9});b.box(n,-3.2,Gf+.4,-6.4,.9,.8,.8,{surf:"wood"}),b.box(n,-5.8,Gf+.35,-6.5,1.2,.7,.7,{surf:"wood"}),b.box(n,-5.8,Gf+.95,-6.5,.8,.5,.6,{surf:"wood"}),Xn(-12,-19.6,3,1),Xn(12.5,-12.6,2.4,1);for(let t of[-20,-4,12])Eg(t,-20.6);for(let[t,e]of[[-20,-4],[-4,12]])for(let i of[-.85,0,.85])Ul(t,e,7.93,-20.6+i);Fl(3.5,-20.4,.2),Fl(4.3,-20.4,.1),Uu(-9.2,-11.9),Qf(-12,20.4),Xn(10.5,20.6,3,1),Xn(-4.5,11.6,2,.9),Fl(19.2,12,1.4),Uu(11.4,11.9),kf(-23.45,-18,18,2.6),kf(-23.45,-18,18,2.85),kf(-21.05,-1.6,5.6,3.6),Bu(-22.9,1),Bu(-22.9,3);for(let[t,e,i,s]of[[22.3,-15,2793546,3],[22.9,-15,14174762,2],[22.6,-6.8,2779856,3],[22.6,3.6,15773728,2]]){let r=Nt(i,{roughness:.5});for(let o=0;o<s;o++)b.box(r,t,1.1+.18+o*.36,e,.62,.34,.44,{surf:"metal"})}Tn(23.18,4.4,-11,-Math.PI/2,"\u642C\u5165\u53E3 1",1.8,.5,"#3a3a3a"),Tn(23.18,4.4,1,-Math.PI/2,"\u642C\u5165\u53E3 2",1.8,.5,"#3a3a3a");for(let t=0;t<18;t++){let e=-20+yt()*40,i=-20+yt()*40;Math.abs(e)<9.5&&Math.abs(i)<7.5||b.box(y.darkTrim,e,.022,i,.6+yt()*1.4,.002,.4+yt()*1,{collide:!1,rotY:yt()*3})}}var Gf=2.4;function Z_(n){Sn(77);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/5,160/5),b.addGeo(y.asphalt,t,new $t),b.box(y.concrete,0,.01,0,48,.02,44,{collide:!1,uv:3});for(let d of[-15,15])for(let f=-20;f<=20;f+=3)b.box(y.lineW,f,.025,d,.1,.004,2.6,{collide:!1});for(let d of[-11.5,11.5])b.box(y.lineY,0,.025,d,40,.004,.14,{collide:!1});let e=(d,f,p,g,m=3.2)=>b.box(y.brick,(d+p)/2,m/2,(f+g)/2,Math.abs(p-d),m,Math.abs(g-f),{uv:2.5,surf:"concrete"});e(-24.6,-22.6,24.6,-21.6),e(-24.6,21.6,24.6,22.6),e(-24.6,-21.6,-23.6,21.6),e(23.6,-21.6,24.6,21.6);for(let d of[-22.1,22.1])for(let f=-24;f<=24;f+=2)b.box(y.steel,f,3.8,d,.05,1.2,.05,{collide:!1});let i=4.2;b.box(y.tile,0,.02,0,18,.04,14,{collide:!1,uv:1.2}),Un(-9,-7,7,0,i,-1,y.brick,y.plaster,[Gt(-4.2,1.4),de(.2,2.2,1.05,2.1),Gt(4.2,1.4)]),Un(9,-7,7,0,i,1,y.brick,y.plaster,[de(-4.2,1.8),Gt(0,1.7),de(4.2,1.8)]),Rn(-7,-9,9,0,i,-1,y.brick,y.plaster,[{c:-6.2,w:1.6,b:2.95,t:3.8,win:1,noCurtain:1},{c:-3.6,w:1.4,b:2.95,t:3.8,win:1,noCurtain:1},{c:2.2,w:4,b:0,t:2.8},de(6.4,1.6)]),Rn(7,-9,9,0,i,1,y.brick,y.plaster,[Gt(-5.6,1.3),{c:.5,w:4,b:0,t:1.3},de(5.8,1.6)]);for(let d=1.35;d<i-.1;d+=.16)b.box(y.metal,.5,d,7,3.96,.13,.05,{collide:!1});b.box(y.darkTrim,.5,1.33,7,4,.06,.12,{collide:!1}),b.box(y.roof2,0,i+.12,0,18.6,.24,14.6,{uv:3,surf:"metal"});for(let d of[-5,0,5])b.box(y.glass,d,i+.3,0,1.6,.12,12,{collide:!1});Tn(2.2,3.4,-7.14,Math.PI,"\u30D9\u30B8\u9752\u679C\u5E02\u5834",4.6,.9,"#2a5a3a"),Tn(.5,4.75,7.14,0,"VEGE MARKET",5.2,.8,"#7a2a1a");let s=[15231514,13642266,3840554],r=[3840554,12095584,9058976];br(-4.3,-5,-1.2,-1,s),br(-4.3,1.2,5,-1,r),br(4.6,-5,-1.2,1,r),br(4.6,1.2,5,1,s),Xe(.2,-2.5,1),At(-.6,0,2.6,.9,.3);let o=2.4;b.box(y.floor,-5.5,o-.08,-6,7,.16,2,{surf:"wood",uv:1.5});for(let d of[-2.1])for(let f of[-5.1])b.box(y.steel,d,(o-.16)/2,f,.14,o-.16,.14,{surf:"metal"});Gn(-2.05,-5,-2.05,-7,o),Gn(-7.6,-5,-2.05,-5,o);let a=8,l=.72;for(let d=0;d<a;d++){let f=(d+1)*(o/a),p=.9-d*l;b.box(y.concrete,-8.25,f/2,p-l/2,1.3,f,l,{surf:"concrete",uv:1})}b.box(y.concrete,-8.25,o/2,-5.6,1.3,o,1.4,{surf:"concrete"}),Gn(-7.55,.9,-7.55,-4.9,0);for(let[d,f]of[[-4,-3],[4,-3],[-4,3],[4,3],[0,0]]){let p=new D(new pt(.35,.45,.2,14),y.lampGlow);p.position.set(d,i-.25,f),b.bake(p)}b.box(y.sidingG,-17.75,2.4,2,6.5,4.8,8,{uv:2.5,surf:"concrete"}),b.box(y.roof,-17.75,4.9,2,7,.2,8.5,{collide:!1,uv:2});for(let d=.2;d<3;d+=.16)b.box(y.metal,-14.47,d,2,.05,.13,3.2,{collide:!1});Tn(-14.4,3.5,2,Math.PI/2,"\u7B2C2\u5009\u5EAB",2.6,.7,"#3a3a3a"),no(-22.4,9.5,Math.PI/2),Xe(-22.3,-5.5,2),At(-22.3,0,13.5,1.1),At(-22.3,1.1,13.5,.9,.4),ra(-11.2,11.6,0,15261904),Xe(-11,4.8,2),Xe(-12.5,-.5,1),At(-10.4,0,-.4,1),At(-11.2,0,8.2,1,.2),Xe(-20,-14,2),Xe(-18.6,-14,1),Xe(-14.4,-9.8,2),At(-19.6,0,-7,1.1),At(-19.6,0,-5.9,1.1),At(-19.6,1.1,-6.45,1,.3),At(-13.6,0,-14.6,1,.2),no(-22.4,-10.5,Math.PI/2),wr(-16,-16.5,0),wr(-17.2,-16.5,2),ni(n,"A",We.A);let c=1.1;b.box(y.concrete,21.3,c/2,-4.5,4.6,c,25,{surf:"concrete",uv:2}),b.box(y.darkTrim,19.02,c-.05,-4.5,.06,.1,25,{collide:!1});for(let d=0;d<4;d++){let f=(d+1)*c/4;b.box(y.concrete,21.3,f/2,8+(3-d)*.5+.25+0,4.6,f,.5,{surf:"concrete"})}b.box(y.sidingB,23.4,c+2.2,-4.5,.4,4.4,25,{uv:2.5}),b.box(y.roof2,21.8,c+3.6,-4.5,3.6,.15,25,{collide:!1,uv:2});for(let d of[-14,-8,-2,4])for(let f=c+.2;f<c+3;f+=.16)b.box(y.metal,23.17,f,d,.05,.13,3,{collide:!1});ra(14.2,-5.6,0,15921902),ra(14.2,1.8,0,9091146),Xe(21,-12,2),Xe(20.4,1,1),Xe(22.4,5.6,2),Gu(13.4,-14,0),Xe(16.6,-16,2),Xe(11,-10.6,1),At(17.4,0,-10.2,1,.3),At(18.4,0,-10.2,1),ni(n,"B",We.B),fn(-6,-15,Math.PI/2,y.carBlue),fn(6.5,-16.5,Math.PI/2,y.carRed,!0),Fn(.5,-11,Math.PI/2),io(-2.4,-20.8,0,13642282),io(-1.3,-20.8,0,2779856),gi(9.8,-19.8,2779706),gi(10.6,-19.8,2771594),fn(-2,15,Math.PI/2,y.carWhite),fn(8.2,13.5,-Math.PI/2,y.carRed),Fn(-7,11,Math.PI/2),Fn(5,10.5,0),io(16,20.8,Math.PI,2793546),gi(-8,20,2779706),Xe(14.5,10.8,1),At(-15.5,0,17,1.1),At(-14.4,0,17,1.1),At(-15,1.1,17,1,.3);for(let d of[-18,-6,6,18])_s(d,d<0?-19.5:19.5,d<0?1:-1);$_();let h=new Pt;Sn(5);for(let d=0;d<22;d++){let f=d/22*Math.PI*2,p=46+yt()*10,g=Math.round((8+yt()*14)/3)*3;aa(h,Math.cos(f)*p,Math.sin(f)*p,-f,9,g,8,["office","brick","apt","concrete"][d%4])}b.bake(h),b.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),b.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),b.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let u=b.finish(n);for(let[d,f]of[[-4,-3],[4,-3],[-4,3],[4,3]]){let p=new tn(16773328,9,10,1.6);p.position.set(d,3.6,f),n.add(p)}{let d=new tn(16769200,5,8,1.6);d.position.set(-17.75,3.5,-6),n.add(d)}return{colliders:b.colliders,meshes:u}}function zf(n,t,e,i){let s=(n+t)/2,r=t-n,o=Nt(e,{roughness:.6,map:K.metal.map});b.box(o,s,2.17,0,r,2.24,2.8,{surf:"metal",uv:2}),b.box(y.darkTrim,s,1,0,r-.4,.1,2.6,{collide:!1});for(let a of[-1,1])b.box(y.darkTrim,s,.82,a*.9,r-.6,.22,.14,{collide:!1});for(let a=n+.5;a<t-.3;a+=.9)for(let l of[-1,1])b.box(y.darkTrim,a,2.17,l*1.42,.06,2.18,.04,{collide:!1});for(let a of[n+1.4,t-1.4]){b.box(y.black,a,.42,0,2,.24,2.2,{collide:!1});for(let l of[-.6,.6])for(let c of[-1,1]){let h=new D(new pt(.36,.36,.14,16),y.steel);h.rotation.x=Math.PI/2,h.position.set(a+l,.36,c*.72),b.bake(h)}}for(let a of[n,t])b.box(y.black,a,.75,0,.5,.2,.3,{collide:!1});if(i)for(let a of[-1,1])Tn(s,2.3,a*1.43,a>0?0:Math.PI,i,3.2,.7,"rgba(0,0,0,0)")}function J_(n,t){let e=(n+t)/2,i=t-n,s=Nt(2775706,{roughness:.45,map:K.metal.map});b.box(s,e+.8,1.8,0,i-1.6,2.4,2.7,{surf:"metal"}),b.box(s,n+.8,2.15,0,1.6,3.1,2.8,{surf:"metal"}),b.box(y.glass,n-.02,2.9,0,.04,.8,2.2,{collide:!1}),b.box(y.lineY,n-.03,1.1,0,.04,.3,2.6,{collide:!1});for(let r of[n+1.6,t-1.6])for(let o of[-.7,.7])for(let a of[-1,1]){let l=new D(new pt(.42,.42,.14,16),y.steel);l.rotation.x=Math.PI/2,l.position.set(r+o,.42,a*.75),b.bake(l)}}function wi(n,t,e,i,s){let r=Nt(s,{roughness:.55,map:K.metal.map}),o=i?6:2.44,a=i?2.44:6;b.box(r,n,t+1.3,e,o,2.6,a,{surf:"metal",uv:2});let l=Math.floor((i?o:a)/.4);for(let c=0;c<l;c++){let h=-((i?o:a)/2)+.2+c*.4;for(let u of[-1,1])b.box(y.darkTrim,n+(i?h:u*(o/2+.01)),t+1.3,e+(i?u*(a/2+.01):h),i?.05:.02,2.5,i?.02:.05,{collide:!1})}}function ss(n,t,e){let i=Math.abs(Math.cos(e))>.5;b.box(y.wood,n,.45,t,i?1.8:.45,.06,i?.45:1.8,{surf:"wood"});for(let s of[-.7,.7])b.box(y.steel,n+(i?s:0),.22,t+(i?0:s),.05,.44,.05,{collide:!1})}function K_(n){Sn(88);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/5,160/5),b.addGeo(y.asphalt,t,new $t),b.box(y.concrete,0,.01,-11,48,.02,20,{collide:!1,uv:3}),b.box(y.concrete,0,.01,11,48,.02,20,{collide:!1,uv:3}),b.box(Nt(6973022,{roughness:1,map:K.concrete.map}),0,.03,0,48,.06,3.6,{collide:!1,uv:1});for(let l=-23.5;l<=23.5;l+=.7)b.box(y.wood,l,.08,0,.22,.06,2.6,{collide:!1});for(let l of[-1,1])b.box(y.steel,0,.14,l*.72,48,.08,.08,{collide:!1});for(let l of[-1,1])b.box(y.concrete,1,.21,l*3.4,30,.42,3,{surf:"concrete",uv:2}),b.box(y.lineY,1,.425,l*2.12,30,.004,.25,{collide:!1});let e=(l,c,h,u,d=3.2)=>b.box(y.brick,(l+h)/2,d/2,(c+u)/2,Math.abs(h-l),d,Math.abs(u-c),{uv:2.5});e(-24.6,-21.6,24.6,-20.6),e(-24.6,20.6,24.6,21.6),e(-24.6,-20.6,-23.6,20.6),e(23.6,-20.6,24.6,20.6),J_(-19.5,-12),zf(-11.2,-4.2,10107434,"VEGE CARGO"),zf(-2.8,5.4,3828282,"\u91CE\u83DC\u4FBF"),zf(6.8,14,9071162,""),wi(19,0,0,!0,2779808),b.box(y.concrete,23,.45,0,1.2,.9,1.6,{surf:"concrete"});let i=4,s=16.8;b.box(y.concrete,s,i-.1,0,1.8,.2,13,{surf:"concrete",uv:1.5});for(let l of[-5,5])b.box(y.concrete,s,(i-.2)/2,l,.4,i-.2,.4,{surf:"concrete"});Gn(s-.9,-6.5,s-.9,6.5,i),Gn(s+.9,-6.5,s+.9,6.5,i);for(let l of[-1,1])for(let c=0;c<10;c++){let h=i-c*.4,u=l*(6.5+c*.6+.3);b.box(y.concrete,s,h/2-0,u,1.8,h,.6,{surf:"concrete"})}Tn(s,i+1.3,0,Math.PI/2,"\u8DE8\u7DDA\u6A4B",1.6,.4,"#2a4a8a"),b.box(y.steel,s,i+.9,0,.06,1.4,.06,{collide:!1});let r=3.6;b.box(y.floor,-18.3,.02,-9.7,10.6,.04,8.6,{collide:!1,uv:1.5}),Rn(-14,-23.6,-13,0,r,-1,y.sidingY,y.plaster,[de(-20.5,1.8),Gt(-15.5,1.4)]),Rn(-5.4,-23.6,-13,0,r,1,y.sidingY,y.plaster,[Gt(-21,1.6),de(-18,2),Gt(-14.6,1.4)]),Un(-13,-14,-5.4,0,r,1,y.sidingY,y.plaster,[de(-11.8,1.6),Gt(-8.2,1.5)]),b.box(y.roof,-18.3,r+.15,-9.7,11.4,.3,9.4,{uv:2}),Tn(-18.3,r-.6,-5.27,0,"\u3079\u3058\u8CA8\u7269\u99C5",3.4,.7,"#3a3a3a"),ss(-20.5,-12.6,0),ss(-17.5,-12.6,0),ss(-21.5,-8.6,Math.PI/2),io(-14.2,-12.8,Math.PI/2,2779856),b.box(y.steel,-16.6,.5,-7.2,.3,1,1.6,{surf:"metal"}),b.box(y.steel,-18.6,.5,-7.2,.3,1,1.6,{surf:"metal"}),b.box(y.paintwood,-22.6,.55,-10.5,1.2,1.1,2.4,{surf:"wood"}),ni(n,"A",We.A);{let l=new tn(16773328,7,10,1.6);l.position.set(-18.3,3.1,-9.7),n.add(l)}wi(13,0,-16.5,!0,11553322),wi(13,2.6,-16.5,!0,2783834),wi(21,0,-11.5,!1,3824282),wi(9,0,-9,!1,13146666),Xe(16.5,-8.4,2),Xe(18.4,-14.5,1),zn(14.2,-11,3,2793546),Ou(9,-6+3.85,0,-1,2.6,1),Gn(7.78,-6,7.78,-12,2.6),Gu(17,-12,0),ni(n,"B",We.B),fn(-4,-17.2,Math.PI/2,y.carWhite),Fn(2.8,-11.5,0),Fn(-6.5,-9.5,Math.PI/2),At(4.2,0,-8,1.1),At(5.3,0,-8,1.1),At(4.75,1.1,-8,1,.3),gi(-10.5,-19.8,2779706),io(.5,-19.9,0,13642282),Xn(8,-19.6,3,1),ss(-1,-4,0),ss(8,-4,0),b.box(y.sidingB,-17.5,1.5,15.5,5,3,4,{uv:2}),b.box(y.roof2,-17.5,3.1,15.2,5.6,.2,4.8,{collide:!1}),Tn(-17.5,2.4,13.48,Math.PI,"\u58F2\u5E97",1.6,.5,"#7a2a1a"),fn(-6,14.5,Math.PI/2,y.carRed),fn(6,15.5,-Math.PI/2,y.carBlue,!0),fn(13,14,Math.PI/2,y.carWhite),Fn(-1,9,0),Fn(9.5,9.5,Math.PI/2),At(-10.5,0,8.2,1.1),At(-10.5,0,9.3,1.1),Xe(3.5,8.5,2),zn(-13.2,8.6,3,14174762),ss(-6,4,0),ss(4,4,0),Qf(14,19.9);for(let l of[-20,0,20])_s(l,l<=0?19.2:-19.2,l<=0?-1:1);for(let l of[-1,1]){b.box(y.roof2,-2,3.4,l*3.6,18,.12,2.6,{collide:!1});for(let c of[-10,-2,6])b.box(y.steel,c,1.9,l*4.3,.16,3,.16,{surf:"metal"})}let o=new Pt;Sn(6);for(let l=0;l<22;l++){let c=l/22*Math.PI*2,h=46+yt()*10,u=Math.round((6+yt()*12)/3)*3;aa(o,Math.cos(c)*h,Math.sin(c)*h,-c,9,u,8,["brick","apt","concrete","office"][l%4])}b.bake(o),b.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),b.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),b.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let a=b.finish(n);return{colliders:b.colliders,meshes:a}}function xg(n,t,e,i){let s=Nt(i,{roughness:.55,map:K.metal.map}),r=6,o=2.44,a=2.6,l=.08;if(e){for(let h of[-1,1])b.box(s,n,a/2,t+h*(o/2-l/2),r,a,l,{surf:"metal"});b.box(s,n,a-l/2,t,r,l,o,{surf:"metal"}),b.box(y.wood,n,.03,t,r-.1,.06,o-.2,{collide:!1});for(let h of[-1,1])for(let u of[-1,1])b.box(s,n+h*(r/2+.25),1.3,t+u*(o/2+.25),.06,2.4,.9,{collide:!1,rotY:u*h*.5})}else{for(let h of[-1,1])b.box(s,n+h*(o/2-l/2),a/2,t,l,a,r,{surf:"metal"});b.box(s,n,a-l/2,t,o,l,r,{surf:"metal"}),b.box(y.wood,n,.03,t,o-.2,.06,r-.1,{collide:!1})}let c=new D(new pt(.12,.12,.05,10),y.lampGlow);c.position.set(n,a-.12,t),b.bake(c)}function Yf(n,t){let e=new D(new pt(.22,.28,.6,12),y.black);e.position.set(n,.3,t),b.bake(e),b.col(n-.25,0,t-.25,n+.25,.6,t+.25,{surf:"metal"})}function Q_(n,t){let e=Nt(15249440,{roughness:.5,map:K.metal.map});for(let i of[-5.5,5.5])for(let s of[-1.6,1.6])b.box(e,n+i,4.75,t+s,.6,9.5,.6,{surf:"metal"});for(let i of[-5.5,5.5])b.box(e,n+i,9.7,t,.7,.5,3.8,{surf:"metal"});for(let i of[-1.6,1.6])b.box(e,n,9.9,t+i,12,.6,.5,{surf:"metal"});b.box(y.darkTrim,n-2,10.6,t,2.4,1.2,2,{collide:!1});for(let i of[-.6,.6])b.box(y.black,n+1.2,8.5,t+i,.03,2.4,.03,{collide:!1});wi(n+1.2,4.6,t,!0,2783904)}function Ou(n,t,e,i,s,r=1.1){let o=Math.ceil(s/.4),a=.55,l=y.steel;for(let h=0;h<o;h++){let u=Math.min(s,(h+1)*(s/o)),d=n+e*(h*a+a/2),f=t+i*(h*a+a/2),p=e!==0?a:r,g=i!==0?a:r;b.box(l,d,u-.04,f,p,.08,g,{collide:!1}),b.col(d-p/2,0,f-g/2,d+p/2,u,f+g/2,{surf:"metal"})}let c=o*a;for(let h of[-1,1]){let u=i!==0?h*r/2:0,d=e!==0?h*r/2:0,f=new pt(.025,.025,Math.hypot(c,s),6),p=new D(f,l);p.position.set(n+e*c/2+u,s/2+.9,t+i*c/2+d),p.rotation.set(i!==0?-Math.sign(i)*Math.atan2(c,s):0,0,e!==0?Math.sign(e)*Math.atan2(c,s):0),b.bake(p)}}function j_(n){Sn(123);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/5,160/5),b.addGeo(y.asphalt,t,new $t);let e=new D(new be(60,160),Nt(2775674,{roughness:.15,metalness:.3}));e.rotation.x=-Math.PI/2,e.position.set(54,-.6,0),b.bake(e),b.box(y.concrete,23.9,-.3,0,.8,.6,46,{collide:!1});for(let c of[-12,12])b.box(y.lineY,0,.02,c,44,.004,.16,{collide:!1});for(let c=-20;c<=20;c+=4)b.box(y.lineW,c,.02,0,.12,.004,3,{collide:!1});let i=(c,h,u,d,f=3)=>b.box(y.concrete,(c+u)/2,f/2,(h+d)/2,Math.abs(u-c),f,Math.abs(d-h),{uv:2.5});i(-24.6,-21.6,23.6,-20.6),i(-24.6,20.6,23.6,21.6),i(-24.6,-20.6,-23.6,20.6),Gn(23.4,-20.6,23.4,20.6,0);for(let c of[-17,-9,-1,7,15])Yf(22.6,c);let s=3.4;b.box(y.floor,-19.8,.02,-11.5,7.6,.04,9,{collide:!1,uv:1.5}),Un(-16,-16,-7,0,s,1,y.sidingB,y.plaster,[Gt(-13.5,1.4),de(-9.6,1.8)]),Rn(-7,-23.6,-16,0,s,1,y.sidingB,y.plaster,[de(-21.5,1.6),Gt(-18,1.4)]),Rn(-16,-23.6,-16,0,s,-1,y.sidingB,y.plaster,[de(-19.8,2)]),b.box(y.roof2,-19.8,s+.15,-11.5,8.2,.3,9.6,{uv:2}),an(-20.5,-12.5,1.6,.8,.76),qn(-20.5,-13.3,0),qn(-19.6,-11.7,Math.PI),dn(-23.2,-9.5,Math.PI/2),Tn(-16.15,2.7,-11.5,Math.PI/2,"\u6E2F\u6E7E\u4E8B\u52D9\u6240",2.4,.55,"#2a4a7a");{let c=new tn(16773328,6,9,1.6);c.position.set(-19.8,3,-11.5),n.add(c)}Xe(-13,-16.8,2),Xe(-11.6,-16.8,1),zn(-9.6,-14.6,3,2779856),At(-12.6,0,-8.6,1.1),At(-12.6,1.1,-8.6,.9,.3),no(-21.5,-4.8,0),ni(n,"A",We.A),xg(-14.5,-4.6,!0,11553322),wi(-3,0,-5.2,!0,2783834),wi(-3,2.6,-5.2,!0,9071162),wi(8.5,0,-4.8,!0,3824282),wi(-10,0,5,!0,13146666),xg(1.5,4.6,!0,2779808),wi(13,0,5.2,!0,10107434),wi(13,2.6,5.2,!0,2783834),wi(-19.5,0,6.5,!1,8026746),wi(19,0,-7,!1,11553322),Ou(-10,6.22+3.85,0,-1,2.6),Ou(8.5,-6.02-3.85,0,1,2.6),Gn(-13,3.78,-7,3.78,2.6),Gn(5.5,-3.58,11.5,-3.58,2.6),Q_(0,0),At(-6,0,.6,1.1),At(-6,0,-.5,1.1),Xe(4.8,-.8,1),Fn(9,.6,0),Gu(-15,.6,0),zn(17.2,.4,3,15773728),Xe(14.8,-15.6,2),Xe(16.2,-15.6,2),At(19.6,0,-12,1.1),At(19.6,0,-10.9,1.1),At(19.6,1.1,-11.45,1,.3),zn(12,-10.4,2,14174762),wr(16,-9.4,1),ni(n,"B",We.B),ra(-4,-15.8,0,15921902),fn(9,-17,Math.PI/2,y.carBlue),io(-14.2,-20,0,13642282),gi(5,-20,2779706),b.box(y.sidingG,-16.5,1.4,16.5,3,2.8,3,{uv:2}),b.box(y.roof2,-16.5,2.95,16.5,3.6,.15,3.6,{collide:!1}),Tn(-16.5,2.3,14.97,Math.PI,"\u5B88\u885B\u5BA4",1.4,.4,"#3a3a3a"),ra(6,15.5,0,9091146),fn(-6.5,14,Math.PI/2,y.carRed),Fn(-1.5,10.5,Math.PI/2),Fn(16,11,0),Xe(-11.5,10.6,2),At(18.5,0,16.5,1.1);for(let c of[-20,-2,16])_s(c,c<0?19.6:-19.6,c<0?-1:1);let r=new Pt;Sn(7);for(let c=0;c<16;c++){let h=Math.PI*.55+c/16*Math.PI*.9,u=46+yt()*8,d=Math.round((7+yt()*9)/3)*3;aa(r,Math.cos(h)*u,Math.sin(h)*u,-h,10,d,9,["concrete","brick","office","apt"][c%4])}let o=new D(et(40,6,9,3),Nt(2767450,{roughness:.6}));o.position.set(48,2,-6),r.add(o);let a=new D(et(8,7,7,3),y.white);a.position.set(62,8.5,-6),r.add(a),b.bake(r),b.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),b.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),b.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let l=b.finish(n);return{colliders:b.colliders,meshes:l}}function vr(n,t,e){let i=new Pt,s=new D(et(.7,.08,1.4,1),y.white);s.position.set(0,.36,.15),i.add(s);let r=new D(et(.7,.08,.7,1),y.white);r.position.set(0,.55,-.75),r.rotation.x=.7,i.add(r);let o=new D(et(.62,.06,1.3,1),Nt(2783920));o.position.set(0,.43,.15),i.add(o);for(let l of[-.3,.3])for(let c of[-.5,.75]){let h=new D(et(.05,.34,.05,1),y.steel);h.position.set(l,.17,c),i.add(h)}i.position.set(n,0,t),i.rotation.y=e,b.bake(i);let a=Math.abs(Math.sin(e))>.5;b.col(n-(a?1:.38),0,t-(a?.38:1),n+(a?1:.38),.6,t+(a?.38:1),{surf:"metal"})}function Hu(n,t,e){let i=new D(new pt(.04,.04,2.4,8),y.steel);i.position.set(n,1.2,t),b.bake(i);let s=new D(new jn(1.4,.5,8,1,!0),Nt(e,{side:hn,roughness:.9}));s.position.set(n,2.45,t),b.bake(s),b.col(n-.05,0,t-.05,n+.05,2.4,t+.05,{surf:"metal"})}function $f(n,t,e,i,s,r=[]){let o=Math.abs(e-n)>Math.abs(i-t),a=o?n:t,l=o?e:i,c=o?t:n,h=Nt(10133668,{wireframe:!0,metalness:.6});for(let u of ku(a,l,r.map(([d,f])=>({c:(d+f)/2,w:f-d})))){if(u.op)continue;let d=u.b-u.a,f=(u.a+u.b)/2,p=new be(d,s,Math.max(1,Math.round(d/.25)),Math.round(s/.25)),g=new D(p,h);g.position.set(o?f:c,s/2,o?c:f),o||(g.rotation.y=Math.PI/2),b.bake(g);for(let m of[u.a,u.b])b.box(y.steel,o?m:c,s/2,o?c:m,.07,s,.07,{collide:!1});b.box(y.steel,o?f:c,s,o?c:f,o?d:.06,.06,o?.06:d,{collide:!1}),o?b.col(u.a,0,c-.05,u.b,s,c+.05,{bullet:!1,surf:"metal"}):b.col(c-.05,0,u.a,c+.05,s,u.b,{bullet:!1,surf:"metal"})}}function Tg(n,t){let e=y.concrete,i=new D(new pt(1.9,2,.6,28),e);i.position.set(n,.3,t),b.bake(i);let s=new D(new pt(1.7,1.7,.05,28),Nt(3840712,{roughness:.08,metalness:.3}));s.position.set(n,.52,t),b.bake(s);let r=new D(new pt(.25,.35,1.6,14),e);r.position.set(n,1.1,t),b.bake(r);let o=new D(new pt(.8,.4,.3,20),e);o.position.set(n,1.95,t),b.bake(o);let a=new D(new ge(.42,16,12),Nt(14191152,{roughness:.6}));a.scale.set(1,.75,1),a.position.set(n,2.38,t),b.bake(a),b.col(n-1.4,0,t-1.4,n+1.4,.6,t+1.4,{surf:"concrete"}),b.col(n-.35,0,t-.35,n+.35,2.6,t+.35,{surf:"concrete"})}function tb(n){Sn(77);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/4,160/4),b.addGeo(y.grass,t,new $t);let e=3.4,i=(l,c,h,u,d=3)=>{b.box(y.plaster,(l+h)/2,d/2,(c+u)/2,Math.abs(h-l),d,Math.abs(u-c),{uv:2.5}),b.box(y.roof,(l+h)/2,d+.08,(c+u)/2,Math.abs(h-l)+.2,.16,Math.abs(u-c)+.2,{collide:!1})};i(-24.6,-21.6,23.6,-20.6),i(-24.6,20.6,-3.5,21.6),i(3.5,20.6,23.6,21.6),i(22.6,-20.6,23.6,20.6),i(-24.6,-20.6,-23.6,20.6);for(let l of[-3.5,3.5])b.box(y.brick,l,1.6,21.1,.9,3.2,1,{uv:1.5});b.box(y.black,0,1.2,21.1,6.1,2.4,.08,{bullet:!1});for(let l=-2.8;l<=2.8;l+=.4)b.box(y.black,l,1.3,21,.05,2.6,.05,{collide:!1});b.box(y.floor,-17.3,.02,-1,12.6,.04,14,{collide:!1,uv:1.5}),Un(-11,-8,6,0,e,1,y.plaster,y.plaster,[Gt(-5,2.6),de(-.6,2.2,.5,2.6),Gt(3.4,1.4)]),Rn(-8,-23.6,-11,0,e,-1,y.plaster,y.plaster,[de(-20.5,1.8),Gt(-14.2,1.4)]),Rn(6,-23.6,-11,0,e,1,y.plaster,y.plaster,[Gt(-20,1.4),de(-14,2)]),Un(-23.6,-8,6,0,e,-1,y.plaster,y.plaster,[]),Un(-17.2,-8,6,0,e,1,y.plasterG,y.plasterG,[Gt(-5.2,1.3),Gt(3,1.3)]),b.box(y.trim,-17.3,e+.15,-1,13.4,.3,14.8,{uv:2}),b.box(y.trim,-17.3,e+.45,-1,13.6,.3,.3,{collide:!1}),Er(-14,1,Math.PI/2,y.fabricO),an(-15,1,.7,1.2,.42),oa(-14.6,1,3,3.4,y.carpetB),Du(-16.95,1,Math.PI/2),Nu(-11.6,5.4),Nu(-16.6,-7.4),an(-14,-4.5,1.8,1,.95,y.tile),qn(-14,-5.4,0),qn(-14,-3.6,Math.PI),sa(-16.95,1.8,-2.5,Math.PI/2,y.paint1),Wf(-23.3,-19,-8,-1),an(-20.4,-4,1.4,.9,.76),qn(-20.4,-4.8,0),qn(-20.4,-3.2,Math.PI),_r(-20.4,3.2,0),dn(-23.2,0,Math.PI/2),sa(-23.45,1.7,3,Math.PI/2,y.paint2);for(let[l,c]of[[-14.2,-1],[-20.4,-1]]){let h=new tn(16769200,6,10,1.6);h.position.set(l,3,c),n.add(h)}b.box(y.tile,-17.3,.02,-14.5,12.6,.04,11,{collide:!1,uv:2}),ni(n,"A",We.A),b.box(y.brick,-21.5,.5,-15.5,2.6,1,.8,{uv:1.5}),b.box(y.tile,-21.5,1.03,-15.5,2.8,.06,1,{collide:!1}),Xf(-20.6,-15.5),qf(-21,-11.5),Xn(-13.5,-18,2.6,1),Xn(-13,-11,1,2.4),At(-18.6,0,-18.8,1.1),At(-17.5,0,-18.8,1.1),At(-18,1.1,-18.8,.9,.3),b.box(y.brick,-9.6,.5,-17.5,.5,1,5,{uv:1.5}),b.box(y.brick,-9.6,.5,-10.6,.5,1,3.6,{uv:1.5}),mi(-22,-19.4,.9,11),b.box(y.tile,-.5,.02,-2.5,16,.04,12,{collide:!1,uv:2});let s=new D(new be(10.2,6.2),Nt(3844312,{roughness:.05,metalness:.2,transparent:!0,opacity:.88}));s.rotation.x=-Math.PI/2,s.position.set(-.5,.22,-2.5),b.bake(s);let r=Nt(8048872,{roughness:.3});b.box(r,-.5,0,-2.5,10.2,.02,6.2,{collide:!1});for(let[l,c,h,u]of[[-.5,-5.8,11,.4],[-.5,.8,11,.4],[-6,-2.5,.4,6.2],[5,-2.5,.4,6.2]])b.box(y.white,l,.18,c,h,.36,u,{surf:"concrete"});b.col(-5.6,0,-5.6,4.6,1,.6,{bullet:!1});for(let l of[-5.2,-2.6,0])vr(-7.6,l,0);for(let l of[-4.6,-1])vr(6.6,l,Math.PI);Hu(-7.6,-3.9,15227450),Hu(6.6,-2.8,15908912);for(let[l,c]of[[-3,-15],[3,-15],[-3,-10.6],[3,-10.6]])b.box(y.wood,l,1.4,c,.25,2.8,.25,{surf:"wood"});b.box(y.roof,0,2.95,-12.8,7,.25,5.4,{uv:2}),b.box(y.wood,0,.55,-15,6,1.1,.2,{surf:"wood"}),b.box(y.wood,-3,.55,-13.6,.2,1.1,2.8,{surf:"wood"}),b.box(y.wood,3,.55,-12,.2,1.1,2.8,{surf:"wood"}),b.box(y.paintwood,0,.55,-12.4,3,1.1,.6,{surf:"wood"}),b.box(y.tile,0,1.12,-12.4,3.2,.05,.7,{collide:!1});for(let l of[-1,0,1]){let c=new D(new pt(.2,.2,.7,12),y.darkTrim);c.position.set(l,.35,-11.5),b.bake(c)}{let l=new tn(16767136,4,7,1.6);l.position.set(0,2.6,-12.8),n.add(l)}ei(-9,3.2,-4,4,1.5),ei(1.5,3.2,6.5,4,1.5),b.box(y.concrete,11,.02,2.5,6,.04,7,{collide:!1,uv:2}),Un(8,-1,6,0,3,-1,y.plaster,y.plaster,[de(2.5,1.6)]),Un(14,-1,6,0,3,1,y.plaster,y.plaster,[]),Rn(-1,8,14,0,3,-1,y.plaster,y.plaster,[Gt(12.2,1.2)]),Rn(6,8,14,0,3,1,y.plaster,y.plaster,[{c:11,w:4.6,b:0,t:2.5}]),b.box(y.roof2,11,3.15,2.5,6.6,.3,7.6,{uv:2}),fn(11,2.4,Math.PI/2,y.carRed),dn(13.6,.5,-Math.PI/2),b.box(Nt(2775674,{roughness:.8}),15.8,.02,-13.3,13.4,.04,14.4,{collide:!1}),b.box(Nt(11556410,{roughness:.8}),15.8,.025,-13.3,11,.04,12,{collide:!1});for(let l of[-19.3,-7.3])b.box(y.lineW,15.8,.05,l,11,.004,.1,{collide:!1});for(let l of[10.3,21.3])b.box(y.lineW,l,.05,-13.3,.1,.004,12,{collide:!1});b.box(y.lineW,15.8,.05,-13.3,11,.004,.1,{collide:!1}),Fu(15.8,-20.2,0),Fu(15.8,-6.4,Math.PI),b.col(15.7,0,-20.4,15.9,3.2,-20,{surf:"metal"}),b.col(15.7,0,-6.6,15.9,3.2,-6.2,{surf:"metal"}),$f(9,-20.6,9,-6,3,[[-17,-15.4],[-10,-8.4]]),$f(9,-6,22.6,-6,3,[[12,13.6],[18.6,20.2]]),ni(n,"B",We.B),ss(11,-18.6,0),ss(20.8,-11,Math.PI/2),At(19.8,0,-16.6,1.1),At(19.8,0,-15.5,1.1),At(19.8,1.1,-16.05,1,.3),zn(12.2,-11,2,15773728),zn(12.9,-11,3,2779856),ei(15,-3.5,22.6,-2.8,1.6),gi(7.2,-1.8,2779706),gi(7.2,-2.6,5921370),ei(-7.5,-18.2,-4,-17.5,1.4),ei(4,-18.2,7.5,-17.5,1.4),mi(6.6,-19.4,.9,12),Xn(-6.5,-8.6,2.4,1),Xn(5.5,-8.6,2.4,1),b.box(y.concrete,0,.02,14,12,.04,13.2,{collide:!1,uv:2}),Tg(0,12.8),fn(-7.8,16.4,0,y.carWhite),fn(8.4,17.2,0,y.carBlue,!0),ei(-23.6,8.6,-12,9.4,1.6),ei(12,8.6,22.6,9.4,1.6),Xn(-10.2,12,1,2.6),Xn(10.2,12,1,2.6),At(-17,0,14.5,1.1),At(-17,0,15.6,1.1),At(16.5,0,13,1.1),Fn(18,17,0),mi(-21.5,18.5,1,13),mi(21,13,1,14),mi(-14.5,19.2,.8,15);for(let[l,c,h]of[[-12,20.2,-1],[12,20.2,-1]])_s(l,c,h);let o=new Pt;Sn(31);for(let l=0;l<18;l++){let c=l/18*Math.PI*2,h=50+yt()*10;aa(o,Math.cos(c)*h,Math.sin(c)*h,-c,9,6+Math.round(yt()*2)*3,8,["apt","concrete","office"][l%3])}b.bake(o);for(let l=0;l<24;l++){let c=l/24*Math.PI*2+.13;mi(Math.cos(c)*(36+yt()*6),Math.sin(c)*(34+yt()*6),1.3+yt()*.5,50+l)}b.colliders=b.colliders.filter(l=>l.min.x>-32&&l.max.x<32&&l.min.z>-30&&l.max.z<30),b.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),b.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),b.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let a=b.finish(n);return{colliders:b.colliders,meshes:a}}function Pu(n,t,e,i,s=0){let r=Math.hypot(e-n,i-t),o=Math.atan2(i-t,e-n),a=(n+e)/2,l=(t+i)/2;for(let h of[.5,1])b.box(y.steel,a,s+h,l,r,.05,.05,{collide:!1,rotY:-o});let c=Math.ceil(r/.45);for(let h=0;h<=c;h++){let u=h/c,d=n+(e-n)*u,f=t+(i-t)*u;h%3===0&&b.box(y.steel,d,s+.5,f,.05,1,.05,{collide:!1}),b.col(d-.25,s,f-.25,d+.25,s+1.05,f+.25,{bullet:!1,surf:"metal"})}}function yg(n,t){let e=new Pt,i=new D(new ms(.75,3,6,14),Nt(15233050,{roughness:.5}));i.rotation.x=Math.PI/2,i.scale.set(1,1,.75),i.position.y=1.4,e.add(i);let s=new D(et(1.3,.1,3.6,1),y.white);s.position.y=1.95,e.add(s);for(let r of[-1.6,1.6]){let o=new D(et(.12,1.8,.12,1),y.steel);o.position.set(.6,1.9,r),e.add(o);let a=new D(et(.9,.1,.1,1),y.steel);a.position.set(.2,2.8,r),e.add(a)}e.position.set(n,0,t),n<0&&(e.rotation.y=Math.PI),b.bake(e),b.col(n-.75,.8,t-2.2,n+.75,2,t+2.2,{surf:"metal"})}function eb(n,t){let e=new D(new pt(1.35,1.4,.75,24),y.wood);e.position.set(n,.375,t),b.bake(e);let i=new D(new pt(1.15,1.15,.04,24),Nt(5951712,{roughness:.05,metalness:.2}));i.position.set(n,.7,t),b.bake(i),b.col(n-1,0,t-1,n+1,.75,t+1,{surf:"wood"})}function nb(n){Sn(201);let t=new D(new be(400,400),Nt(1989254,{roughness:.12,metalness:.35}));t.rotation.x=-Math.PI/2,t.position.y=-2.4,b.bake(t);let e=[[-9,21],[9,21],[9,-14],[6.5,-18.5],[2.8,-21.4],[-2.8,-21.4],[-6.5,-18.5],[-9,-14]],i=new ui(e.map(([f,p])=>new lt(f,-p))),s=new il(i);s.rotateX(-Math.PI/2),pi(s,.5,.5),s.translate(0,.012,0),b.addGeo(y.wood,s,new $t);let r=new _i(i,{depth:3.4,bevelEnabled:!1});r.rotateX(-Math.PI/2),r.translate(0,-3.4,0),b.addGeo(y.white,r,new $t);let o=new _i(i,{depth:.35,bevelEnabled:!1});o.rotateX(-Math.PI/2),o.scale(1.003,1,1.003),o.translate(0,-1.6,0),b.addGeo(Nt(1718890),o,new $t),Gn(-9,-14,-9,21,0),Gn(9,-14,9,21,0),Gn(-9,21,9,21,0),Pu(9,-14,6.5,-18.5),Pu(6.5,-18.5,2.8,-21.4),Gn(-2.8,-21.4,2.8,-21.4,0),Pu(-2.8,-21.4,-6.5,-18.5),Pu(-6.5,-18.5,-9,-14);let a=3.2;b.box(y.carpetB,0,.01,.5,10,.02,13,{collide:!1,uv:2}),Rn(-6,-5,5,0,a,-1,y.white,y.plaster,[Gt(-2.6,1.4),de(1.6,2.4,.9,2.4)]),Rn(7,-5,5,0,a,1,y.white,y.plaster,[Gt(.8,2.4),de(-3,1.6,.9,2.4)]),Un(-5,-6,7,0,a,-1,y.white,y.plaster,[Gt(-3.4,1.3),de(.6,2,.9,2.4),Gt(4.6,1.3)]),Un(5,-6,7,0,a,1,y.white,y.plaster,[Gt(-2,1.3),de(1.8,2,.9,2.4),Gt(5.2,1.3)]),Rn(.6,-5,5,0,a,1,y.plaster,y.plaster,[Gt(-3.4,1.2),Gt(2.6,1.2)]),b.box(y.white,0,a+.15,.7,10.6,.3,13.4,{uv:2}),b.box(y.wood,0,a+.31,.7,10.4,.02,13.2,{collide:!1,uv:2}),b.box(y.darkTrim,0,.55,-5.3,6,1.1,.8,{surf:"metal"}),b.box(y.screen,-1.2,1.15,-5.5,1.2,.5,.05,{collide:!1}),b.box(y.screen,1.2,1.15,-5.5,1.2,.5,.05,{collide:!1});{let f=new D(new $e(.35,.04,8,20),y.wood);f.position.set(0,1.35,-4.85),b.bake(f)}qn(0,-4.2,Math.PI),dn(4.6,-2,-Math.PI/2,1.2,1.6),Er(-3.8,3.5,Math.PI/2,y.fabricO),an(-2.8,3.5,.7,1.2,.42),oa(-3,3.5,2.6,3.2,y.carpetR),b.box(y.paintwood,3.3,.55,3.6,.7,1.1,3.6,{surf:"wood"}),b.box(y.tile,3.3,1.12,3.6,.8,.05,3.7,{collide:!1}),dn(4.6,3.6,-Math.PI/2,1.6,1.9);for(let f of[2.4,3.6,4.8]){let p=new D(new pt(.2,.2,.75,12),y.darkTrim);p.position.set(2.5,.375,f),b.bake(p)}sa(0,1.8,6.85,Math.PI,y.paint1);for(let[f,p]of[[0,-2.5],[0,3.8]]){let g=new tn(16769208,5,9,1.6);g.position.set(f,2.8,p),n.add(g)}let l=a+.3;Gn(-5.3,-6,5.3,-6,l),Gn(-5.3,-6,-5.3,7.4,l),Gn(5.3,-6,5.3,7.4,l),Gn(-5.3,7.4,-4.15,7.4,l),Gn(-2.85,7.4,5.3,7.4,l),Ou(-3.5,7.4+9*.55,0,-1,l,1.2),b.box(y.white,1.5,l+1.2,-2,1.4,2.4,1.4,{surf:"metal",uv:1});{let f=new D(new pt(.1,.14,4.5,10),y.steel);f.position.set(1.5,l+4.6,-2),b.bake(f);let p=new D(et(2.2,.15,.3,1),y.darkTrim);p.position.set(1.5,l+6.2,-2),b.bake(p)}vr(-2.5,3,0),vr(-1.2,3,0),At(3.5,l,4.5,1),yg(-8,-1.5),yg(8,2.5),At(-6.4,0,4.5,1),At(-6.4,1,4.5,.85,.3),At(6.4,0,-4,1);for(let f of[-9,9.5])Yf(-8.3,f),Yf(8.3,f);let c=new D(new be(5.2,5.2),new Wn({map:Ei("H",{w:256,h:256,size:170,color:"rgba(255,255,255,0.85)",draw:f=>{f.strokeStyle="rgba(240,192,32,0.9)",f.lineWidth=12,f.beginPath(),f.arc(128,128,118,0,7),f.stroke()}}),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));c.rotation.x=-Math.PI/2,c.position.set(0,.05,-15),n.add(c),ni(n,"A",We.A),At(-7.6,0,-9.2,1.1),At(-7.6,0,-10.3,1.1),At(-7.6,1.1,-9.75,1,.3),At(-3,0,-12.6,1.1),zn(-6.8,-15.2,3,2779856),Xe(-3.6,-8.4,1),ni(n,"B",We.B),eb(7,-9.4),vr(3.4,-14.6,Math.PI),Hu(7.4,-13.6,15227450),zn(3.2,-9,2,15773728),b.box(y.darkTrim,0,.45,-19.6,2,.9,1,{surf:"metal"}),b.box(y.tile,0,.012,15,9,.02,7,{collide:!1,uv:2});let h=new D(new be(5.2,3.6),Nt(3846368,{roughness:.05,metalness:.2}));h.rotation.x=-Math.PI/2,h.position.set(0,.32,15),b.bake(h);for(let[f,p,g,m]of[[0,13,5.8,.3],[0,17,5.8,.3],[-2.75,15,.3,3.7],[2.75,15,.3,3.7]])b.box(y.white,f,.2,p,g,.4,m,{surf:"concrete"});b.col(-2.6,0,13.1,2.6,1,16.9,{bullet:!1}),vr(-6.2,12.6,0),vr(6.2,12.6,0),vr(-6.2,16.4,Math.PI),Hu(6.8,16.6,15908912),b.box(y.paintwood,-4.5,.55,19.4,3.2,1.1,.6,{surf:"wood"}),b.box(y.tile,-4.5,1.12,19.4,3.4,.05,.7,{collide:!1}),Xn(4.6,19.6,2.4,.8),At(6.8,0,9.8,1.1),At(-7,0,9.4,1);for(let[f,p]of[[-3.2,9.6],[3.2,9.6]]){let g=new tn(16769208,3,7,1.6);g.position.set(f,2.6,p),n.add(g)}let u=new Pt;Sn(17);for(let f=0;f<7;f++){let p=f/7*Math.PI*2+.4,g=90+yt()*30,m=new D(new jn(14+yt()*10,10+yt()*8,9),Nt(4880970,{roughness:1,flatShading:!0}));m.position.set(Math.cos(p)*g,1,Math.sin(p)*g),u.add(m)}for(let f=0;f<12;f++){let p=Math.PI*1.15+f/12*.7,g=130;aa(u,Math.cos(p)*g,Math.sin(p)*g,-p,10,12+Math.round(yt()*6)*3,9,["office","apt","concrete"][f%3])}b.bake(u),b.col(-40,-5,-40,re.minX-.6,20,40,{bullet:!1}),b.col(re.maxX+.6,-5,-40,40,20,40,{bullet:!1}),b.col(-40,-5,-40,40,20,re.minZ-.6,{bullet:!1}),b.col(-40,-5,re.maxZ+.6,40,20,40,{bullet:!1});let d=b.finish(n);return{colliders:b.colliders,meshes:d}}function Fi(n,t,e,i,s,r,o,a={},l=y.concrete){Rn(e,n,t,0,s,-1,r,o,a.n||[]),Rn(i,n,t,0,s,1,r,o,a.s||[]),Un(n,e,i,0,s,-1,r,o,a.w||[]),Un(t,e,i,0,s,1,r,o,a.e||[]),b.box(l,(n+t)/2,s+.12,(e+i)/2,t-n+.3,.24,i-e+.3,{uv:2}),b.box(r,(n+t)/2,s+.4,e-.05,t-n+.3,.32,.2,{collide:!1}),b.box(r,(n+t)/2,s+.4,i+.05,t-n+.3,.32,.2,{collide:!1}),b.box(a.floor||y.tile,(n+t)/2,.01,(e+i)/2,t-n,.02,i-e,{collide:!1,uv:1.5})}function eo(n,t,e,i,s,r=[],o=y.brick){let a=Math.abs(e-n)>Math.abs(i-t),l=a?n:t,c=a?e:i,h=a?t:n;for(let u of ku(l,c,r.map(([d,f])=>({c:(d+f)/2,w:f-d})))){if(u.op)continue;let d=(u.a+u.b)/2,f=u.b-u.a;b.box(o,a?d:h,s/2,a?h:d,a?f:.4,s,a?.4:f,{uv:1.5,surf:"concrete"})}}function Iu(n,t){b.box(y.concrete,n,.1,t,1,.2,2.2,{surf:"concrete"}),b.box(Nt(14170666,{roughness:.4}),n,.95,t,.6,1.5,.8,{surf:"metal"}),b.box(y.screen,n+.31,1.3,t,.02,.35,.5,{collide:!1}),b.box(y.screen,n-.31,1.3,t,.02,.35,.5,{collide:!1}),b.box(y.white,n,1.78,t,.64,.18,.84,{collide:!1})}function ib(n,t){for(let s of[-1,1])for(let r of[-1,1])b.box(y.rust,n+s*1.1,2.5,t+r*1.1,.18,5,.18,{surf:"metal"});for(let s of[1.6,3.4])b.box(y.rust,n,s,t-1.1,2.4,.08,.08,{collide:!1}),b.box(y.rust,n,s,t+1.1,2.4,.08,.08,{collide:!1});let e=new D(new pt(1.7,1.7,2.2,20),y.rust);e.position.set(n,6.1,t),b.bake(e);let i=new D(new jn(1.8,.8,20),y.rust);i.position.set(n,7.6,t),b.bake(i)}function Mg(n,t,e){let i=Math.round(Math.abs(t-n)/.4),s=(t-n)/i;for(let r=0;r<i;r++)b.box(r%2?y.white:y.redPaint,n+(r+.5)*s,1,e,Math.abs(s),.1,.1,{collide:!1});b.box(y.darkTrim,n,.5,e,.3,1,.3,{surf:"metal"})}function sb(n){Sn(311);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/4,160/4),b.addGeo(y.dirt,t,new $t);let e=ae({map:K.plaster.map,normalMap:K.plaster.normalMap,color:14861460,roughness:.95}),i=ae({map:K.plaster.map,normalMap:K.plaster.normalMap,color:14198904,roughness:.95}),s=ae({map:K.plaster.map,normalMap:K.plaster.normalMap,color:13160624,roughness:.95});for(let[l,c,h,u]of[[-24.6,-23.6,24.6,-22.8],[-24.6,22.8,24.6,23.6],[-24.6,-22.8,-23.8,22.8],[23.8,-22.8,24.6,22.8]])b.box(i,(l+h)/2,2,(c+u)/2,h-l,4,u-c,{uv:2.5});b.box(y.asphalt,0,.005,0,7.2,.01,46,{collide:!1,uv:6});for(let l=-21;l<22;l+=4)b.box(y.lineW,0,.012,l,.14,.004,2,{collide:!1});for(let l of[-1,1])b.box(y.concrete,l*4,.075,0,.8,.15,46,{uv:2,surf:"concrete",bullet:!1});Fi(-1,1,-1,1,2.6,y.white,y.plaster,{n:[de(0,1.2)],s:[Gt(-.2,.9)],w:[de(0,1.2)],e:[de(0,1.2)]}),Tn(0,3.05,1.17,0,"\u691C\u554F\u6240",1.8,.45,"#8a2a2a"),Tn(0,3.05,-1.17,Math.PI,"\u691C\u554F\u6240",1.8,.45,"#8a2a2a"),Mg(3.5,1.1,-1.5),Mg(-3.5,-1.1,1.5),Fn(-2.3,-5,Math.PI/2),Fn(2.3,5,Math.PI/2),fn(-1.9,-10.5,Math.PI/2,y.carWhite),fn(2,12.5,Math.PI/2,y.carRed,!0),At(2.6,0,-14,1.1),At(-2.6,0,15.5,1.1),At(-2.6,1.1,15.5,.85,.4),Fi(-8.6,-4.6,-16,-11,3.4,e,y.plaster,{e:[Gt(-13.8)],w:[Gt(-12.6)],n:[de(-6.6,1.4)]}),Fi(-8.6,-4.6,-9,-1.6,3.4,i,y.plaster,{e:[Gt(-6.6),de(-3.4,1.4)],w:[Gt(-4.4)],n:[de(-6.6,1.2)]}),Fi(-8.6,-4.6,1.6,9,3.4,e,y.plaster,{e:[Gt(4),de(7,1.4)],w:[Gt(6)],s:[de(-6.6,1.2)]}),Fi(4.6,8.6,-16,-11.5,3.4,s,y.plaster,{w:[Gt(-13.6)],e:[Gt(-14.6)],n:[de(6.6,1.4)]}),Fi(4.6,8.6,-9,-2,3.4,e,y.plaster,{w:[Gt(-5.6),de(-8+.3,1)],e:[Gt(-4)],s:[de(6.6,1.2)]}),Fi(4.6,8.6,1.2,8.5,3.4,i,y.plaster,{w:[Gt(3.4),de(6.4,1.4)],e:[Gt(5.2)]}),an(-6.6,-14,1.6,.8,.76),qn(-6.6,-14.7,0),dn(-8.3,-15,Math.PI/2,1.2,1.8),dn(-8.3,-7.6,Math.PI/2),an(-6,-6,1,1.6,.9,y.paintwood),zn(-5.2,-2.6,3,2779856),an(-6.4,3.2,1.6,.8,.76),qn(-6.4,3.9,Math.PI),Er(-7.9,7.2,Math.PI/2,y.fabricO),oa(-6.6,6.6,2.4,2,y.carpetR),dn(5,-13.4,-Math.PI/2,1.2,1.8),At(7.6,0,-12.4,.9),dn(8.3,-7.4,-Math.PI/2),dn(8.3,-6,-Math.PI/2),an(6,-3.2,1.6,.8,.9,y.paintwood),_r(6.6,7,Math.PI/2),an(5.6,2.4,1,.8,.76),qn(6.3,2.4,-Math.PI/2);for(let[l,c]of[[-6.6,-13.5],[-6.6,-5.3],[-6.6,5.3],[6.6,-13.7],[6.6,-5.5],[6.6,4.8]]){let h=new tn(16769200,3.5,7,1.6);h.position.set(l,3,c),n.add(h)}gi(-5.2,.8,2779706),no(6.4,-10.3,0),gi(5.3,0,5921370);for(let l of[-6.6,6.6])b.box(Nt(9058858,{side:hn,roughness:.9}),l,2.9,0,4,.04,2.6,{collide:!1});b.box(y.concrete,-16.1,.01,1,15,.02,18,{collide:!1,uv:2});let r=[[15231514,14170666,9091146],[9091146,15777824,6961802],[15231514,9091146,15777824]];br(-12.2,-6.5,-1.5,1,r[0]),br(-12.2,2.5,7.5,1,r[1]),br(-17.4,-6.5,-2.5,-1,r[2]),br(-17.4,1.5,7.5,-1,r[0]),Fi(-23.6,-20.4,-6,6,3.4,s,y.plaster,{e:[Gt(-3),de(1,1.6),Gt(4.2)]}),Tn(-20.25,3,0,Math.PI/2,"\u516B\u767E\u5C4B",3,.75,"#2a5a3a"),dn(-23.3,-3,Math.PI/2,1.6),dn(-23.3,2.5,Math.PI/2,1.6),an(-21.8,0,.8,2.4,.95,y.paintwood);{let l=new tn(16769200,3.5,7,1.6);l.position.set(-22,3,0),n.add(l)}wr(-14.6,-7.6,0),wr(-15.4,-7.6,1),Xe(-14.8,9,1),Xe(-19,8.8,2),zn(-10,.4,3,15773728),zn(-10,1,2,2779856),At(-19.8,0,-7.2,1);for(let[l,c]of[[-14.8,-2],[-14.8,5]]){let h=new tn(16767136,2.5,6,1.6);h.position.set(l,2.4,c),n.add(h)}b.box(y.concrete,15.6,.01,.5,14,.02,19,{collide:!1,uv:2});for(let[l,c]of[[11.4,-3.2],[17.4,-3.2],[11.4,4.6],[17.4,4.6]])b.box(y.white,l,2.1,c,.35,4.2,.35,{surf:"metal"});b.box(y.white,14.4,4.35,.7,7.8,.3,9.8,{uv:2}),b.box(Nt(2787914,{roughness:.5}),14.4,4.7,.7,7.9,.4,9.9,{collide:!1}),Tn(14.4,4.7,5.67,0,"\u30D9\u30B8\u77F3\u6CB9",3.2,.4,"#2a8a4a"),Tn(14.4,4.7,-4.27,Math.PI,"\u30D9\u30B8\u77F3\u6CB9",3.2,.4,"#2a8a4a"),Iu(12.9,-.6),Iu(12.9,2.6),Iu(15.9,-.6),Iu(15.9,2.6);{let l=new tn(15791359,4,9,1.6);l.position.set(14.4,4,1),n.add(l)}Fi(19.2,23.6,-6,5,3.4,y.white,y.plaster,{w:[Gt(-3,1.6),de(1.6,2.4)]}),b.box(Nt(2787914),19.05,3.1,-.5,.06,.5,11,{collide:!1}),an(21,-3.2,.7,2.2,.95,y.paintwood),dn(23.3,0,-Math.PI/2,1.6),dn(23.3,2.8,-Math.PI/2,1.6),io(22.8,-5.3,Math.PI,14170666);{let l=new tn(15791359,3.5,7,1.6);l.position.set(21.4,3,-.5),n.add(l)}ra(14,8.2,0,15261904),fn(21,7.9,Math.PI/2,y.carBlue),b.box(Nt(12077610,{roughness:.6,map:K.metal.map}),10.2,.5,-7.2,1,1,1,{surf:"metal"}),Dl(18.4,-7.6),Dl(19.2,-7.6),b.box(y.concrete,-16.1,.01,-16.2,15,.02,13.2,{collide:!1,uv:2});for(let[l,c]of[[-21.4,-20.6],[-12.6,-20.6],[-21.4,-15.4],[-12.6,-15.4]])b.box(y.steel,l,1.8,c,.3,3.6,.3,{surf:"metal"});b.box(y.roof2,-17,3.75,-18.2,10.6,.25,7.4,{uv:2}),ni(n,"A",We.A),Xe(-20.2,-19.6,2),Xe(-18.8,-19.6,1),Xe(-13.8,-19.8,2),At(-15.6,0,-16.6,1.1),At(-15.6,1.1,-16.6,.9,.3),Gu(-19.6,-16.2,0),zn(-11.6,-13.4,3,15773728),eo(-23.6,-9.4,-8.6,-9.4,1.1,[[-21.2,-19.2],[-14.6,-12.6]]),Fi(10,22.6,-21.6,-12,3.8,i,y.plaster,{s:[Gt(11.4,1.3),{c:17.2,w:4.6,b:0,t:3}],w:[Gt(-18.6,1.3)],n:[de(14,1.6)]},y.roof2),ni(n,"B",We.B),fn(13.4,-18.6,0,y.carRed),dn(22.3,-15,-Math.PI/2,1.6),dn(22.3,-17.6,-Math.PI/2,1.6),an(19.6,-21,2.2,.7,.9,y.metal),Dl(11,-13.2),Dl(21.8,-12.8);for(let[l,c]of[[13.4,-17],[19,-17]]){let h=new tn(15791359,4,8,1.6);h.position.set(l,3.3,c),n.add(h)}$f(8.6,-9,22.6,-9,2.4,[[10.6,12.4],[19.4,21.2]]),zn(15.2,-10.6,2,2779856),At(20.4,0,-10.8,1),At(-6.4,0,-19.6,1.1),At(6.2,0,-19.8,1.1),Fn(0,-17.2,0+Math.PI/2),eo(-23.6,10.6,-8.6,10.6,1.2,[[-20.2,-17.8],[-13.2,-10.8]]),eo(8.6,10.6,23.6,10.6,1.2,[[10.8,13.2],[17.8,20.2]]),Fi(-22.6,-15,15.4,21.8,3.4,e,y.plaster,{n:[Gt(-18.6),de(-16.4,1.2)],e:[Gt(18.6)]}),Qf(-7.2,13),fn(-12,13.6,Math.PI/2,y.carBlue),At(-12,0,19.2,1.1),ib(17,17),fn(11,15,Math.PI/2,y.carWhite,!0),Xe(20.8,13.2,2),At(8.4,0,20,1),Xn(-5.6,20.6,1,2.4),Xn(5.6,20.6,1,2.4);for(let[l,c,h]of[[-4.8,17,1],[4.8,-7,-1],[-4.8,-18,1],[4.8,18,-1]])_s(l,c,h);let o=new Pt;Sn(41);for(let l=0;l<9;l++){let c=l/9*Math.PI*2+.2,h=110+yt()*20,u=new D(new jn(26+yt()*14,22+yt()*16,7),Nt(11047018,{roughness:1,flatShading:!0}));u.position.set(Math.cos(c)*h,6,Math.sin(c)*h),o.add(u)}for(let l=0;l<20;l++){let c=l/20*Math.PI*2,h=46+yt()*10;aa(o,Math.cos(c)*h,Math.sin(c)*h,-c,8,5+Math.round(yt()*2)*3,7,["concrete","apt","concrete","office"][l%4])}b.bake(o),b.colliders=b.colliders.filter(l=>l.min.x>-32&&l.max.x<32&&l.min.z>-30&&l.max.z<30),b.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),b.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),b.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let a=b.finish(n);return{colliders:b.colliders,meshes:a}}function Dl(n,t){for(let e=0;e<3;e++){let i=new D(new $e(.3,.13,8,16),y.tire);i.rotation.x=Math.PI/2,i.position.set(n,.13+e*.26,t),b.bake(i)}b.col(n-.42,0,t-.42,n+.42,.78,t+.42,{surf:"metal"})}function Lu(n,t,e,i,s){let r=Math.hypot(e-n,i-t),o=Math.atan2(i-t,e-n);b.box(y.darkTrim,(n+e)/2,s,(t+i)/2,r,.02,.02,{collide:!1,rotY:-o});let a=[15227450,15790320,3832528,15777824,9091146,13660320],l=Math.floor(r/.9);for(let c=0;c<l;c++){let h=(c+.5)/l,u=.4+yt()*.3,d=.4+yt()*.4,f=new D(new be(u,d),Nt(a[Math.floor(yt()*a.length)],{side:hn,roughness:.95}));f.position.set(n+(e-n)*h,s-d/2,t+(i-t)*h),f.rotation.y=-o,b.bake(f)}}function Vf(n,t,e,i){let s=Math.abs(Math.cos(e))>.5;b.box(y.paintwood,n,.75,t,s?2:1.1,.5,s?1.1:2,{surf:"wood"}),b.col(n-(s?1:.55),0,t-(s?.55:1),n+(s?1:.55),1,t+(s?.55:1),{surf:"wood"});for(let r of[-1,1]){let o=new D(new $e(.32,.05,6,14),y.darkTrim);o.position.set(n+(s?0:r*.6),.34,t+(s?r*.6:0)),o.rotation.y=s?0:Math.PI/2,b.bake(o)}for(let r=0;r<8;r++){let o=new D(new ge(.14,8,6),Nt(i[r%i.length],{roughness:.45}));o.position.set(n+(s?-.7+r%4*.45:-.2+(r>>2)*.4),1.12,t+(s?-.2+(r>>2)*.4:-.7+r%4*.45)),b.bake(o)}Sg(n-(s?1.1:.7),n+(s?1.1:.7),t-(s?.7:1.1),t+(s?.7:1.1),2.2,i[0]);for(let r of[-1,1])b.box(y.steel,n+(s?r*.95:0),1.55,t+(s?0:r*.95),.05,1.3,.05,{collide:!1})}function ia(n,t,e=4){for(let i=0;i<e;i++){let s=new D(new ge(.32+yt()*.1,10,8),y.black);s.scale.y=.75,s.position.set(n+(yt()-.5)*1,.24,t+(yt()-.5)*1),b.bake(s)}b.col(n-.7,0,t-.7,n+.7,.5,t+.7,{surf:"wood"})}function rb(n){Sn(523);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/4,160/4),b.addGeo(y.dirt,t,new $t);let e=l=>ae({map:K.plaster.map,normalMap:K.plaster.normalMap,color:l,roughness:.95}),i=[e(14191210),e(9089232),e(14732416),e(11061392),e(13672640),e(15260872)],s=ae({map:K.metal.map,normalMap:K.metal.normalMap,color:9076848,metalness:.5,roughness:.6}),r=(l,c,h,u,d,f,p=3)=>Fi(l,c,h,u,p,i[d%i.length],y.plaster,{floor:y.concrete,...f},yt()<.5?y.rust:s);for(let[l,c,h,u]of[[-24.6,-23.6,24.6,-22.8],[-24.6,22.8,24.6,23.6],[-24.6,-22.8,-23.8,22.8],[23.8,-22.8,24.6,22.8]])b.box(y.concrete,(l+h)/2,2.2,(c+u)/2,h-l,4.4,u-c,{uv:2.5});b.box(y.concrete,0,.01,0,16,.02,16,{collide:!1,uv:2}),Tg(0,0),Vf(-4.2,3.6,0,[15231514,9091146,14170666]),Vf(4.4,-3.4,0,[9091146,15777824,6961802]),ss(-5.6,-4.6,Math.PI/2),ss(5.6,4.6,Math.PI/2),Xn(-6.8,6.8,1.4,1.4),Xn(6.6,6.6,1.6,1.6);for(let[l,c,h]of[[-7.6,0,1],[7.6,0,-1]])_s(l,c,h);{let l=new tn(16767136,4,10,1.6);l.position.set(0,3.2,0),n.add(l)}r(-23.6,-15.5,-8,-1.2,0,{e:[Gt(-5)],n:[Gt(-18)],s:[de(-20,1.2)]}),r(-23.6,-15.5,1.2,8,1,{e:[Gt(5.2)],s:[Gt(-19)],n:[de(-18,1.2)]}),r(-13.5,-8,-8,-2,2,{w:[Gt(-6.2)],e:[Gt(-4),de(-6.6,1)],n:[de(-10.6,1.2)]}),r(-13.5,-8,2,8,3,{w:[Gt(3.4)],e:[Gt(5.6),de(3.2,1)],s:[Gt(-11.8)]}),_r(-21.6,-6,0),an(-18,-3,1.2,.8,.76),qn(-18,-3.7,0),dn(-23.3,-2.6,Math.PI/2,1.2,1.6),Er(-22.6,4.6,Math.PI/2,y.fabricG),an(-20,6.6,1,.7,.76),At(-17,0,2.4,.9),an(-11,-6.6,1.4,.8,.9,y.paintwood),dn(-13.2,-3.4,Math.PI/2,1.2,1.6),zn(-9,-7.2,3,15773728),_r(-11,6.6,0),At(-9,0,3,.9),At(-9,.9,3,.7,.4),ia(-22.6,0,3),At(-20.6,0,.2,1);for(let l of[-6.5,-2,3,6.8])Lu(-15.5,l,-13.5,l+.6,2.7);Lu(-23.6,-.6,-15.5,.6,2.6),no(-12.2,0,Math.PI/2),r(8,13.5,-8,-3,4,{w:[Gt(-5.6)],e:[Gt(-4.2)],n:[de(10.8,1.2)]}),r(8,13.5,-.6,8,5,{w:[Gt(2),de(5.4,1)],e:[Gt(6)],s:[de(10.6,1.2)]}),r(15.5,23.6,-8,.4,2,{w:[Gt(-2.2)],n:[Gt(19)],s:[de(20,1.2)]}),r(15.5,23.6,2.8,8,0,{w:[Gt(5)],s:[Gt(18.4)]}),an(10.8,-6.8,1.4,.7,.76),qn(10.8,-6.1,Math.PI),dn(13.2,-6,-Math.PI/2,1.2,1.6),Er(9,4.2,-Math.PI/2,y.fabricO),oa(10.6,4.2,2,2.6,y.carpetR),Du(13.3,4.2,-Math.PI/2),At(12.6,0,.4,.9),_r(21.6,-6,0),an(19,-1.2,1.2,.8,.76),zn(23,-3,3,2779856),an(20,5.2,1.4,.8,.9,y.paintwood),dn(23.3,4.4,-Math.PI/2,1.4,1.6);for(let l of[-6,-1.6,2.4,6.4])Lu(13.5,l,15.5,l-.6,2.7);ia(22.4,1.6,3);for(let[l,c]of[[-19.5,-4.5],[-19.5,4.5],[-10.7,-5],[-10.7,5],[10.7,-5.5],[10.7,3.6],[19.5,-3.8],[19.5,5.4]]){let h=new tn(16767144,2.8,6,1.6);h.position.set(l,2.6,c),n.add(h)}r(-5,5,-14.2,-10.6,3,{n:[Gt(-2.6)],s:[Gt(2.6),de(-1.6,2)],w:[de(-12.4,1.2)],e:[de(-12.4,1.2)]},3.2),Tn(0,3.3,-10.43,0,"\u3056\u3063\u304B",2.4,.6,"#8a3a2a"),dn(-4.6,-12.4,Math.PI/2,1.6,1.7),dn(4.6,-12.4,-Math.PI/2,1.6,1.7),an(.2,-12,2.6,.7,.95,y.paintwood);{let l=new tn(16769200,3.5,7,1.6);l.position.set(0,2.8,-12.4),n.add(l)}ni(n,"A",We.A),r(-23.6,-19.6,-22.8,-18,4,{e:[Gt(-20.4,1.2)]},2.8);{let l=new D(new pt(.9,.9,1.4,16),Nt(2775706,{roughness:.5}));l.position.set(-21.6,3.75,-20.4),b.bake(l)}for(let l of[-19,-16.6,-14.2])Lu(-18.6,l,-10.4,l,2.4);for(let l of[-18.6,-10.4])for(let c of[-19,-16.6,-14.2])b.box(y.wood,l,1.25,c,.12,2.5,.12,{surf:"wood"});At(-12,0,-18,1.1),At(-12,1.1,-18,.9,.3),Xe(-20.6,-15,1),zn(-17.2,-11.8,2,15227450),ia(-9.8,-21.2,3),eo(-23.6,-10.2,-9,-10.2,1.1,[[-16.2,-12.8]]),ni(n,"B",We.B),r(19.6,23.6,-22.8,-17.6,1,{w:[Gt(-19.2,1.2)]},2.8),no(16,-20.6,0),no(12.4,-16,Math.PI/2),ia(19.2,-14.4,4),ia(13,-20.8,3),fn(11,-12.6,0,y.carRed,!0),Dl(21.8,-11.6),eo(9,-10.2,23.6,-10.2,1.1,[[13.2,16.4]]),At(-7,0,-19.4,1.1),At(7.2,0,-19.6,1.1),At(7.2,1.1,-19.6,.8,.5),r(-23.6,-14,12,20,5,{n:[Gt(-19.4),de(-16.2,1.2)],e:[Gt(16.4)]},3),r(13,23.6,13,20,3,{n:[Gt(16.4),de(20.4,1.2)],w:[Gt(17.2)]},3),_r(-21.6,18.2,Math.PI),an(-17,14.6,1.2,.8,.76),Er(21.6,16.6,-Math.PI/2,y.fabricG),At(15,0,18.6,.9),Fi(-1.2,1.2,9.6,11.6,2.6,i[2],y.plaster,{n:[de(0,1.2)],s:[Gt(0,.9)],w:[de(10.6,1)],e:[de(10.6,1)]},s),fn(-7.4,15.4,Math.PI/2,y.carWhite),Vf(8,15.6,Math.PI/2,[15777824,15231514]),eo(-12,10.4,-4,10.4,1.1,[[-9.4,-7.2]]),eo(4,10.4,12,10.4,1.1,[[7.2,9.4]]),ia(-12.4,21.4,3),At(4.6,0,20.4,1.1),Xn(-4.6,21.2,2,.9);for(let l of[-9,9])Ul(-22,22,4.2,l);let o=new Pt;Sn(57);for(let l=0;l<40;l++){let c=l/40*Math.PI*2,h=40+yt()*14,u=5+yt()*3,d=3+yt()*3+(h-40)*.3,f=new D(et(u,d,u*.8,2.5),i[l%i.length]);f.position.set(Math.cos(c)*h,d/2,Math.sin(c)*h),f.rotation.y=-c,o.add(f);let p=new D(et(u+.4,.2,u*.8+.4,2),l%2?y.rust:s);p.position.set(Math.cos(c)*h,d+.1,Math.sin(c)*h),p.rotation.y=-c,o.add(p)}for(let l=0;l<6;l++){let c=l/6*Math.PI*2+.5,h=120,u=new D(new jn(30,26,8),Nt(5929546,{roughness:1,flatShading:!0}));u.position.set(Math.cos(c)*h,8,Math.sin(c)*h),o.add(u)}b.bake(o),b.colliders=b.colliders.filter(l=>l.min.x>-32&&l.max.x<32&&l.min.z>-30&&l.max.z<30),b.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),b.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),b.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let a=b.finish(n);return{colliders:b.colliders,meshes:a}}var Ol;function jf(){return Ol||(Ol={stock:new te({map:K.polymer.map,normalMap:K.polymer.normalMap,color:6975560,roughness:.75}),stockDark:new te({map:K.polymer.map,normalMap:K.polymer.normalMap,color:2895398,roughness:.8}),metal:new te({map:K.gunmetal.map,normalMap:K.gunmetal.normalMap,color:3816768,metalness:.85,roughness:.38}),metalDark:new te({map:K.gunmetal.map,color:1842463,metalness:.8,roughness:.45}),bright:new te({color:13159632,metalness:1,roughness:.2}),rubber:new te({color:1315860,roughness:.95}),lens:new Di({color:3170464,metalness:.9,roughness:.02,clearcoat:1,iridescence:1,iridescenceIOR:1.6,emissive:530480}),orange:new te({color:15759898,roughness:.5}),brass:new te({color:14198848,metalness:1,roughness:.25})},Ol.decal=new te({map:Ei("VW",{w:128,h:64,size:44,bg:"rgba(0,0,0,0)",color:"#f07a1a",weight:900}),transparent:!0,roughness:.6}),Ol)}var ii=(n,t,e,i,s=16)=>{let r=new pt(n,t,e,s);return r.rotateX(Math.PI/2),new D(r,i)},la=[{id:"olive",name:"\u30AA\u30EA\u30FC\u30D6"},{id:"camoWood",name:"\u30A6\u30C3\u30C9\u30E9\u30F3\u30C9"},{id:"camoDesert",name:"\u30C7\u30B6\u30FC\u30C8"},{id:"camoUrban",name:"\u30A2\u30FC\u30D0\u30F3"},{id:"camoCarrot",name:"\u30AD\u30E3\u30ED\u30C3\u30C8"},{id:"gold",name:"\u30B4\u30FC\u30EB\u30C9"}],zu={};function ob(n){return n==="olive"||!n?jf().stock:(zu[n]||(zu[n]=n==="gold"?new te({color:15251520,metalness:1,roughness:.22,map:K.polymer.map,normalMap:K.polymer.normalMap}):new te({map:K[n].map,normalMap:K.polymer.normalMap,roughness:.7})),zu[n])}function ca(n=1,t="olive",e=null){let i=jf(),s=ob(t),r=new Pt,o=(rt,Qt,he,ht,bt=r)=>(rt.position.set(Qt,he,ht),bt.add(rt),rt),a=n>0?18:8,l=[[-.36,-.012],[-.1,-.012],[.16,-.012],[.22,-.022],[.3,.006],[.52,.012],[.555,0],[.565,-.13],[.5,-.142],[.3,-.088],[.235,-.082],[.215,-.175],[.165,-.185],[.145,-.07],[-.3,-.062],[-.36,-.046]],c=new ui;c.moveTo(l[0][0],l[0][1]);for(let rt=1;rt<l.length;rt++)c.lineTo(l[rt][0],l[rt][1]);c.closePath();let h=new Wr;h.absellipse(.2,-.048,.022,.016,0,Math.PI*2,!1,.4),c.holes.push(h);let u=new _i(c,{depth:.046,bevelEnabled:!0,bevelSize:.008,bevelThickness:.009,bevelSegments:n>0?3:1,curveSegments:n>0?10:4});u.translate(0,0,-.023),u.rotateY(-Math.PI/2);let d=u.attributes.uv;for(let rt=0;rt<d.count;rt++)d.setXY(rt,d.getX(rt)*3,d.getY(rt)*3);o(new D(u,s),0,0,0);let f=new D(new fe(.05,.022,.16),i.stockDark);o(f,0,.022,.42);for(let rt of[.36,.48])o(ii(.004,.004,.03,i.metal,6),0,.012,rt).rotation.set(0,0,0);o(new D(new fe(.058,.142,.022),i.rubber),0,-.066,.575);for(let rt=0;rt<6;rt++)o(new D(new fe(.06,.004,.03),i.stockDark),0,-.09-rt*.015,.19-rt*.004);for(let rt=0;rt<4;rt++)for(let Qt of[-1,1])o(new D(new fe(.004,.012,.04),i.stockDark),Qt*.032,-.035,-.28+rt*.055);o(ii(.024,.024,.28,i.metal,a),0,.012,.02),o(new D(new fe(.04,.012,.28),i.metal),0,.034,.02);for(let rt=0;rt<12;rt++)o(new D(new fe(.044,.006,.012),i.metalDark),0,.043,-.1+rt*.022);o(new D(new fe(.004,.018,.06),i.metalDark),.024,.016,-.01);let p=ii(.0105,.014,.66,i.metal,a);if(o(p,0,.012,-.44),n>0)for(let rt=0;rt<6;rt++){let Qt=rt/6*Math.PI*2,he=new D(new fe(.003,.003,.36),i.metalDark);he.position.set(Math.cos(Qt)*.0125,.012+Math.sin(Qt)*.0125,-.45),r.add(he)}let g=new Pt;o(g,0,.012,-.8),g.add(ii(.017,.017,.07,i.metalDark,a));for(let rt of[-.018,0,.018])for(let Qt of[-1,1]){let he=new D(new fe(.005,.02,.008),i.rubber);he.position.set(Qt*.016,0,rt),g.add(he)}let m=e&&e.rifle==="root",x=e&&e.att||[],M=new rn;if(M.position.set(0,.012,m?-.95:-.84),r.add(M),m){g.position.z=-.9,g.scale.set(1.35,1.35,1.6),o(ii(.026,.026,.34,i.stockDark,a),0,.006,-.36);for(let rt=0;rt<5;rt++)o(new D(new fe(.056,.006,.03),i.metalDark),0,-.02,-.24-rt*.055);o(ii(.0125,.0125,.2,i.metal,a),0,.012,-.78)}if(x.includes("laser")){o(new D(new fe(.03,.026,.09),i.metalDark),.03,-.012,-.36);let rt=new D(new Xi(.008,12),new Wn({color:16719904}));rt.rotation.y=Math.PI,o(rt,.03,-.012,-.406)}if(x.includes("stab")&&(o(new D(new fe(.03,.03,.05),i.metalDark),-.04,.086,.04),o(new D(new fe(.006,.008,.012),new Wn({color:4259680})),-.056,.094,.04)),x.includes("fmj"))for(let rt of[-.5,-.56])o(ii(.0152,.0152,.012,i.brass,a),0,.012,rt);let w=new Pt;o(w,0,.086,.03),w.add(ii(.017,.017,.24,i.metalDark,a));let E=ii(.03,.019,.07,i.metalDark,a);E.position.z=-.15,w.add(E);let R=ii(.031,.031,.035,i.metalDark,a);R.position.z=-.2,w.add(R);let S=new D(new Xi(.027,a),i.lens);S.position.z=-.218,S.rotation.y=Math.PI,w.add(S);let _=ii(.019,.024,.06,i.metalDark,a);_.position.z=.14,w.add(_);let v=ii(.025,.025,.04,i.rubber,a);v.position.z=.185,w.add(v);let C=new D(new Xi(.02,a),i.lens);C.position.z=.206,w.add(C);let P=new D(new pt(.012,.012,.03,a),i.metal);P.position.set(0,.026,-.01),w.add(P);let L=new D(new pt(.012,.012,.03,a),i.metal);L.rotation.z=Math.PI/2,L.position.set(.026,0,-.01),w.add(L);let B=new D(new pt(.01,.01,.024,a),i.metal);if(B.rotation.z=Math.PI/2,B.position.set(-.024,0,-.01),w.add(B),n>0)for(let rt=0;rt<12;rt++){let Qt=new D(new fe(.002,.03,.003),i.bright),he=rt/12*Math.PI*2;Qt.position.set(Math.cos(he)*.0125,.026,-.01+Math.sin(he)*.0125),w.add(Qt)}let U=ii(.0175,.0175,.006,i.orange,a);U.position.z=.1,w.add(U);for(let rt of[-.07,.08]){let Qt=new D(new $e(.019,.005,6,a),i.metal);Qt.position.z=rt,w.add(Qt);let he=new D(new fe(.03,.03,.018),i.metal);he.position.set(0,-.03,rt),w.add(he);let ht=new D(new pt(.004,.004,.036,6),i.bright);ht.rotation.z=Math.PI/2,ht.position.set(0,-.034,rt),w.add(ht)}let I=new Pt;o(I,0,.012,.12);let k=ii(.012,.012,.12,i.bright,10);k.position.z=-.03,I.add(k);let q=new Pt;q.position.z=0,I.add(q);let V=new D(new pt(.0045,.0045,.065,8),i.metal);V.rotation.z=Math.PI/2-.35,V.position.set(.032,-.012,0),q.add(V);let Q=new D(new ge(.011,12,10),i.metalDark);Q.position.set(.063,-.024,0),q.add(Q);let Y=ii(.014,.012,.03,i.metal,10);Y.position.z=.04,I.add(Y);let j=new rn;j.position.set(.063,-.024,0),q.add(j);let nt=new Pt;o(nt,0,-.04,0);let Mt=new D(new fe(.032,.07,.085),i.metalDark);Mt.position.y=-.03,Mt.rotation.x=-.08,nt.add(Mt);let qt=new D(new fe(.036,.012,.09),i.stockDark);if(qt.position.y=-.068,nt.add(qt),e&&e.att&&e.att.includes("ext")&&(Mt.scale.y=1.7,Mt.position.y=-.055,qt.position.y=-.118),e&&e.att&&e.att.includes("fast")){let rt=Mt.clone();rt.position.x=.036,nt.add(rt);let Qt=new D(new fe(.075,.016,.092),i.orange);Qt.position.y=-.035,nt.add(Qt)}let st=new D(new $e(.03,.005,6,16,Math.PI),i.metal);st.rotation.set(0,Math.PI/2,Math.PI),o(st,0,-.068,.11);let Ut=new D(new fe(.006,.026,.006),i.bright);Ut.rotation.x=.3,o(Ut,0,-.062,.11);for(let rt of[-1,1]){let Qt=ii(.005,.005,.2,i.metalDark,6);o(Qt,rt*.012,-.07,-.2)}if(o(new D(new fe(.04,.015,.03),i.metalDark),0,-.065,-.31),o(new D(new $e(.008,.002,4,10),i.metal),0,-.14,.48).rotation.y=Math.PI/2,n>0){let rt=new D(new be(.08,.04),i.decal);rt.position.set(.0325,-.04,.38),rt.rotation.y=Math.PI/2,r.add(rt)}let Vt=new rn;Vt.position.set(0,-.11,.19),r.add(Vt);let ne=new rn;ne.position.set(0,-.06,-.2),r.add(ne);let Ft=new rn;Ft.position.set(.03,.02,-.01),r.add(Ft);let ie=new rn;return ie.position.set(0,.086,.35),r.add(ie),r.traverse(rt=>{rt.isMesh&&(rt.castShadow=!0,rt.receiveShadow=!0)}),un(q),un(I,[q]),un(nt),un(g),un(w,[S]),un(r,[I,nt,w,g]),{root:r,muzzlePt:M,gripPt:Vt,forePt:ne,boltPt:j,ejectPt:Ft,eyePt:ie,lens:S,mag:nt,bolt:I,handle:q,setBolt(rt){let Qt=rt<.2?rt/.2:rt<.8?1:1-(rt-.8)/.2,he=rt<.2?0:rt<.5?(rt-.2)/.3:rt<.8?1-(rt-.5)/.3:0;q.rotation.z=Qt*1.4,I.position.z=.12+he*.09}}}var Vu;function Rg(){let n=jf();Vu||(Vu=new pt(.006,.007,.06,8),Vu.rotateX(Math.PI/2));let t=new D(Vu,n.brass);return t.castShadow=!0,t}var Rr=[{id:"none",name:"\u306A\u3057"},{id:"helmet",name:"\u30D8\u30EB\u30E1\u30C3\u30C8"},{id:"beret",name:"\u30D9\u30EC\u30FC\u5E3D"},{id:"cap",name:"\u30AD\u30E3\u30C3\u30D7"},{id:"boonie",name:"\u30D6\u30FC\u30CB\u30FC\u30CF\u30C3\u30C8"}],Pg={carrot:{name:"\u306B\u3093\u3058\u3093",color:"#f07a1a",height:1.05},tomato:{name:"\u30C8\u30DE\u30C8",color:"#d8231a",height:.82},potato:{name:"\u3058\u3083\u304C\u3044\u3082",color:"#c8a06a",height:.9},pepper:{name:"\u30D4\u30FC\u30DE\u30F3",color:"#2a8a1e",height:.88}},xi={id:null};function Ig(n){xi.id=Sr[n]?n:null}var Sr={A:{K:1.22,fat:1.12,leg:1,skin:14852218,body:{carrot:16747050,tomato:16726828,potato:15777138,pepper:4045614},rough:.9,clear:0,rim:[14085887,.08,3.5],suit:2898530,glove:2500398,boot:14605010,sole:16742938,gear:6056512,strap:2764083,eyeS:1.5,green:4637754},B:{K:1.22,fat:1.06,leg:1,skin:14199444,body:{carrot:14255696,tomato:12536384,potato:13808780,pepper:6261836},rough:.92,clear:0,rim:[15260927,.06,3.5],suit:4665918,glove:15788250,boot:3877410,sole:2168079,gear:6048828,strap:2826009,eyeS:1.38,green:7311186}};function Lg(n,t,e,i){return n.onBeforeCompile=s=>{s.uniforms.uRim={value:new Xt(t).multiplyScalar(e)},s.uniforms.uRimP={value:i},s.fragmentShader=`uniform vec3 uRim; uniform float uRimP;
`+s.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
{ float rr = 1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0); totalEmissiveRadiance += uRim * pow(rr, uRimP); }`)},n.customProgramCacheKey=()=>"rim"+t+"_"+e+"_"+i,n}function bs(n,t={}){let e=Sr[xi.id];return Lg(new Di({color:n,roughness:e.rough,clearcoat:e.clear*.6,clearcoatRoughness:.35,...t}),e.rim[0],e.rim[1]*.6,e.rim[2])}var Hl={};function ab(n){let t=Sr[xi.id],e=n+(xi.id||"");if(Hl[e])return Hl[e];if(t){let a=Lg(new Di({color:16777215,vertexColors:!0,roughness:t.rough,clearcoat:t.clear,clearcoatRoughness:.25,sheen:0}),t.rim[0],t.rim[1],t.rim[2]),l=new te({map:K["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4});return Hl[e]={skin:a,flesh:l}}let i=K[n],s={carrot:.6,tomato:.18,potato:.9,pepper:.15}[n],r=new Di({map:i.map,normalMap:i.normalMap,roughness:s,clearcoat:n==="tomato"||n==="pepper"?.8:0,clearcoatRoughness:.2,normalScale:new lt(1,1)}),o=new te({map:K["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4});return Hl[e]={skin:r,flesh:o},Hl[e]}var Je,Oi,so,ha,ua,da,rs,Yi,ro,kl,Gl,zl,Wu={};function Dg(){let n=xi.id||"base";if(Wu[n]){({skinMat:Je,greenMat:Oi,eyeW:so,eyeB:ha,browM:ua,mouthM:da,gearM:rs,strapM:Yi,toeNail:ro,gloveM:kl,bootM:Gl,soleM:zl}=Wu[n]);return}let t=Sr[xi.id];if(t){Je=bs(t.skin,{roughness:.85,sheen:0}),Oi=bs(t.green,{side:hn}),so=new te({color:15921906,roughness:.6}),ha=new Di({color:xi.id==="B"?1709088:1052696,roughness:.05,clearcoat:1}),ua=new te({color:xi.id==="B"?2759706:1708556,roughness:.8}),da=new te({color:4854288,roughness:.6}),rs=bs(t.gear),Yi=bs(t.strap),ro=bs(16508120),kl=bs(t.glove),Gl=bs(t.boot),zl=bs(t.sole),Wu[n]={skinMat:Je,greenMat:Oi,eyeW:so,eyeB:ha,browM:ua,mouthM:da,gearM:rs,strapM:Yi,toeNail:ro,gloveM:kl,bootM:Gl,soleM:zl};return}Je=new Di({map:K.skin.map,normalMap:K.skin.normalMap,roughness:.5,color:15913144,sheen:.4,sheenColor:16751226}),Oi=new te({map:K.veggreen.map,normalMap:K.veggreen.normalMap,roughness:.6,side:hn}),so=new Di({color:16777215,roughness:.08,clearcoat:1}),ha=new Di({color:1118481,roughness:.05,clearcoat:1}),ua=new te({color:2759184,roughness:.9}),da=new te({color:3803656,roughness:.6}),rs=new te({map:K.polymer.map,normalMap:K.polymer.normalMap,color:5922880,roughness:.85}),Yi=new te({color:2763298,roughness:.8}),ro=new te({color:15782080,roughness:.3}),kl=rs,Gl=Je,zl=Je,Wu[n]={skinMat:Je,greenMat:Oi,eyeW:so,eyeB:ha,browM:ua,mouthM:da,gearM:rs,strapM:Yi,toeNail:ro,gloveM:kl,bootM:Gl,soleM:zl}}function lb(n){let t=Se(n.length*31+7,4,3),e=Sr[xi.id],i,s;if(n==="carrot"){let g=[];for(let x=0;x<=90;x++){let M=x/90,w=-.14+M*1.05,E=.03+Math.pow(M,.55)*.2;e&&(E=.2-Math.pow(1-M,2.2)*.13,M<.12&&(E*=Math.sqrt(Math.max(0,1-Math.pow((.12-M)/.12,2)))*.9+.1)),M>.88&&(E*=Math.sqrt(Math.max(0,1-Math.pow((M-.88)/.12,2)))*.92+.08),M===1&&(E=0),M===0&&(E=0),g.push(new lt(E,w))}i=new qr(g,56),s=.55}else if(n==="tomato"){i=new ge(.42,64,40);let g=i.attributes.position;for(let m=0;m<g.count;m++){let x=g.getX(m),M=g.getY(m),w=g.getZ(m),E=Math.atan2(w,x),R=M/.42,S=1+Math.cos(E*6)*.035*(1-Math.abs(R)),_=M>0?.82:.9,v=M>.3?-.06*Math.pow((M-.3)/.12,2):0;x*=S,w*=S,M=M*_+v,g.setXYZ(m,x,M+.36,w)}s=.42}else if(n==="potato"){i=new ge(.34,64,48);let g=i.attributes.position;for(let m=0;m<g.count;m++){let x=g.getX(m),M=g.getY(m),w=g.getZ(m),E=1+(t((Math.atan2(w,x)/Math.PI+1)*.5,(M/.34+1)*.5)-.5)*(e?.14:.32);g.setXYZ(m,x*E*1.05,M*1.38*E+.42,w*E*.92)}s=.6}else{let g=[];for(let x=0;x<=36;x++){let M=x/36,w=-.02+M*.82,E=.06+Math.sin(Math.min(1,M*1.25)*Math.PI*.5)*.3;M>.85&&(E*=Math.sqrt(Math.max(0,1-Math.pow((M-.85)/.15,2)))*.6+.4),M===1&&(E=.12),M===0&&(E=0),g.push(new lt(E,w))}g.push(new lt(0,.76)),i=new qr(g,48);let m=i.attributes.position;for(let x=0;x<m.count;x++){let M=m.getX(x),w=m.getY(x),E=m.getZ(x),R=Math.atan2(E,M),S=1+Math.cos(R*4)*.09-(w<.1?Math.cos(R*4)*.4*(.1-w):0);m.setXYZ(x,M*S,w,E*S)}s=.52}let r=Sr[xi.id];if(!r){let g=i.attributes.position,m=Se(n.length*17+3,6,3),x=[];if(n==="potato")for(let M=0;M<9;M++){let w=M*2.39996%(Math.PI*2),E=.12+M*.37%1*.62;x.push([w,E,.035+M%3*.01])}for(let M=0;M<g.count;M++){let w=g.getX(M),E=g.getY(M),R=g.getZ(M),S=Math.atan2(R,w),_=(S/Math.PI+1)*.5,v=1;if(n==="carrot"&&E>-.1&&E<.88){let C=Math.pow(Math.abs(Math.sin(E*46+m(_,E)*5)),10),P=m(_*2,E*1.5)>.42?1:.35;v-=C*P*.045}if(n==="potato")for(let[C,P,L]of x){let B=Math.abs((S-C+Math.PI*3)%(Math.PI*2)-Math.PI)*.3,U=E-P,I=Math.hypot(B,U);I<L&&(v-=(1-I/L)*(1-I/L)*.09)}n==="pepper"&&E>.55&&(v+=Math.max(0,Math.cos(S*4))*.04*(E-.55)/.25),g.setXYZ(M,w*v,E,R*v)}}if(n!=="potato"&&!r){let g=i.attributes.position;for(let m=0;m<g.count;m++){let x=g.getX(m),M=g.getY(m),w=g.getZ(m),E=1+(t((Math.atan2(w,x)/Math.PI+1)*.5,M*.8+.2)-.5)*.06;g.setXYZ(m,x*E,M,w*E)}}if(r){let g=i.attributes.position;i.computeBoundingBox();let m=i.boundingBox.min.y,x=i.boundingBox.max.y,M=new Xt(r.body[n]),w=new Float32Array(g.count*3);for(let E=0;E<g.count;E++){let R=(g.getY(E)-m)/(x-m),S=r.fat;g.setXYZ(E,g.getX(E)*r.K*S,g.getY(E)*r.K,g.getZ(E)*r.K*S);let _=.78+.3*Math.pow(R,.8);w[E*3]=M.r*_,w[E*3+1]=M.g*_,w[E*3+2]=M.b*_}i.setAttribute("color",new vn(w,3)),s*=r.K}i.computeVertexNormals();let o=i.toNonIndexed(),a=o.attributes.position,l=o.attributes.normal,c=o.attributes.uv,h=o.attributes.color,u={p:[],n:[],u:[],c:[]},d={p:[],n:[],u:[],c:[]};for(let g=0;g<a.count;g+=3){let x=(a.getY(g)+a.getY(g+1)+a.getY(g+2))/3>s?u:d;for(let M=0;M<3;M++)x.p.push(a.getX(g+M),a.getY(g+M),a.getZ(g+M)),x.n.push(l.getX(g+M),l.getY(g+M),l.getZ(g+M)),x.u.push(c.getX(g+M),c.getY(g+M)),h&&x.c.push(h.getX(g+M),h.getY(g+M),h.getZ(g+M))}let f=g=>{let m=new je;return m.setAttribute("position",new ce(g.p,3)),m.setAttribute("normal",new ce(g.n,3)),m.setAttribute("uv",new ce(g.u,2)),g.c.length&&m.setAttribute("color",new ce(g.c,3)),m},p=(g,m)=>{let x=0;for(let M=0;M<a.count;M++)if(Math.abs(a.getY(M)-g)<.04){let w=Math.atan2(a.getZ(M),a.getX(M));Math.abs((w-m+Math.PI*3)%(Math.PI*2)-Math.PI)<.25&&(x=Math.max(x,Math.hypot(a.getX(M),a.getZ(M))))}return x};return i.computeBoundingBox(),{upper:f(u),lower:f(d),split:s,radiusAt:p,top:i.boundingBox.max.y,bottom:i.boundingBox.min.y}}var t0={};function cb(n,t,e){let i=n+":"+t+":"+e%3;if(t0[i])return t0[i];let s=new be(t,n,2,8),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),c=(r.getY(o)+n/2)/n,h=Math.sin(Math.min(1,(1-c)*1.3+.15)*Math.PI*.5)*(1-c*.85),u=c*c*.09*(1+e%3*.25);r.setXYZ(o,c*n*.95,.012+Math.sin(c*Math.PI)*.025-u,a*h+Math.abs(a)*.15*c)}return s.computeVertexNormals(),t0[i]=s,s}var e0={};function Vl(n,t,e){let i=n+JSON.stringify(t);if(!e0[i]){let r=[];for(let l=0;l<=16;l++){let c=l/16,h=0;for(let u=0;u<t.length-1;u++){let[d,f]=t[u],[p,g]=t[u+1];if(c>=d&&c<=p){let m=(c-d)/(p-d),x=m*m*(3-2*m);h=f+(g-f)*x}}r.push(new lt(h,-c*n))}r.unshift(new lt(1e-4,0)),r.push(new lt(1e-4,-n));let a=new qr(r,14);a.computeVertexNormals(),e0[i]=a}let s=new D(e0[i],e);return s.castShadow=!0,s}function Wl(n,t,e,i=10){let s=new D(new ms(n,t,4,i),e);return s.castShadow=!0,s}function Ng(n,t){let e=new Pt,i=new D(new ge(.055,12,10),Je);i.scale.set(1,1.2,.55),i.position.y=-.05,i.castShadow=!0,e.add(i);let s=[];if(t>0){for(let a=0;a<4;a++){let l=new Pt;l.position.set((a-1.5)*.024,-.11,0);let c=Wl(.011,.035,Je,6);c.position.y=-.02,l.add(c);let h=new Pt;h.position.y=-.045,l.add(h);let u=Wl(.01,.028,Je,6);u.position.y=-.018,h.add(u);let d=new D(new ge(.008,6,4),ro);d.scale.set(1,1.4,.35),d.position.set(0,-.03,-.008),h.add(d);let f=new D(new ge(.012,6,4),Je);f.position.set(0,0,-.002),l.add(f),l.rotation.x=1.45,h.rotation.x=1.6,e.add(l),s.push(l)}let r=new Pt;r.position.set(n*.045,-.06,-.01),r.rotation.set(.9,0,n*.5);let o=Wl(.013,.04,Je,6);o.position.y=-.025,r.add(o),e.add(r)}else{let r=new D(new ge(.05,8,6),Je);r.position.set(0,-.11,.02),r.scale.set(1.1,.8,.9),e.add(r)}return e}function hb(){let n=new Pt,t=new D(new ge(.06,14,10),Je);t.scale.set(.95,.55,2),t.position.set(0,-.03,-.06),t.castShadow=!0,n.add(t);let e=new D(new ge(.05,10,8),Je);e.position.set(0,-.035,.02),n.add(e);for(let s of[-1,1]){let r=new D(new ge(.017,8,6),Je);r.position.set(s*.04,0,0),n.add(r)}let i=new D(new ge(.05,10,8),Je);i.scale.set(.9,.5,1.4),i.position.set(0,-.005,-.07),n.add(i);for(let s=0;s<5;s++){let r=s===0?.019:.014-s*.0012,o=new D(new ge(r,8,6),Je);o.position.set((s-2)*.021,-.045+(s===0?.004:0),-.17+Math.abs(s-1)*.008),o.scale.set(1,.8,1.3),n.add(o);let a=new D(new ge(r*.6,6,4),ro);a.position.set(o.position.x,o.position.y+r*.45,o.position.z-r*.3),a.scale.set(1,.3,1),n.add(a)}return n}var Ug=new F,Fg=new F,E3=new _n,Bg=new $t,Xu=new F(0,-1,0);function qu(n,t,e){if(n.lost)return;let i=n.sh,s=i.parent;s.updateWorldMatrix(!0,!1);let r=Bg.copy(s.matrixWorld).invert(),o=Ug.copy(t).applyMatrix4(r).sub(i.position),a=Fg.copy(e).applyMatrix4(r).sub(i.position),l=n.upLen,c=n.foLen,h=o.length();h=Math.min(h,l+c-.001),h=Math.max(h,.05);let u=o.clone().normalize(),d=(l*l+h*h-c*c)/(2*l*h),f=Math.acos(Math.max(-1,Math.min(1,d))),p=a.clone().sub(u.clone().multiplyScalar(a.dot(u))).normalize(),g=u.clone().multiplyScalar(Math.cos(f)*l).add(p.multiplyScalar(Math.sin(f)*l));i.quaternion.setFromUnitVectors(Xu,g.clone().normalize());let m=o.clone().sub(g).applyQuaternion(i.quaternion.clone().invert());n.el.quaternion.setFromUnitVectors(Xu,m.normalize())}var Ag=new _n,Cg=new _n,w3=new $t,n0={grip:[new F(0,1,0),new F(0,0,1),new F(1,0,0)],fore:[new F(.7071,0,-.7071),new F(.7071,0,.7071),new F(0,-1,0)]},Og={};for(let n in n0)Og[n]=new _n().setFromRotationMatrix(new $t().makeBasis(...n0[n]));function Xl(n,t,e){n.lost||(n.wr.parent.getWorldQuaternion(Ag),Cg.copy(t).multiply(Og[e]),n.wr.quaternion.copy(Ag.invert().multiply(Cg)))}function ql(n,t,e,i=1){let[,s,r]=n0[e],o=s.clone().multiplyScalar(.065).add(r.clone().multiplyScalar(.03)).multiplyScalar(i);return n.clone().add(o.applyQuaternion(t))}function i0(n,t,e=.29,i=.26){Dg();let s=new Pt,r=Wl(.05,e-.07,Je);r.position.y=-e/2,s.add(r);let o=new Pt;o.position.y=-e,s.add(o);let a=new D(new ge(.048,10,8),Je);o.add(a);let l=Vl(i,[[0,.046],[.2,.056],[.6,.045],[1,.036]],Je);o.add(l);let c=new Pt;c.position.y=-i,o.add(c);let h=Ng(n,1);c.add(h);let u=new D(new pt(.058,.058,.05,14),new te({color:t,roughness:.7,map:K.carpet.map}));u.position.y=-.16,o.add(u);let d=new D(new ge(.058,12,10),rs);return d.scale.set(1.02,1,.6),d.position.y=-.045,h.add(d),{side:n,sh:s,el:o,wr:c,hand:h,up:r,elb:a,upLen:e,foLen:i,lost:!1}}var Tr=class{constructor(t,e,i={}){Dg(),this.kind=t,this.team=e;let s=i.lod??1,r=i.camo||"olive",o=i.hat||"none",a=ab(t),l=Sr[xi.id];this.style=xi.id;let c=l?l.K:1,h=l?l.leg:1,u=!1;this.hipBase=.8*h,this.root=new Pt,this.hips=new Pt,this.hips.position.y=this.hipBase,this.root.add(this.hips),this.spine=new Pt,this.hips.add(this.spine);let d=lb(t);this.geo=d,this.upper=new D(d.upper,a.skin),this.lower=new D(d.lower,a.skin);for(let U of[this.upper,this.lower])U.castShadow=!0,U.receiveShadow=!0,this.spine.add(U);this.bodyTop=d.top,this.split=d.split;let f=Math.max(.1,d.radiusAt(d.split,-Math.PI/2),d.radiusAt(d.split,0));this.cap=new D(new Xi(f*.98,24),a.flesh),this.cap.rotation.x=-Math.PI/2,this.cap.position.y=d.split,this.cap.visible=!1,this.spine.add(this.cap),this.splitR=f,this.face=new Pt,this.upper.add(this.face);let p={carrot:.68,tomato:.48,potato:.72,pepper:.6}[t]*c,g=d.radiusAt(p,-Math.PI/2)||.25;this.eyes=[];for(let U of[-1,1]){let I=new Pt,k=U*(l?.36:.32);I.position.set(Math.sin(k)*g*.98,p,-Math.cos(k)*g*.98),I.rotation.y=-k;let q=new D(new ge(.055,16,12),so);q.scale.set(1,1.15,.55),I.add(q);let V=new D(new ge(.03,12,10),ha);V.position.set(U*-.005,-.004,-.024),V.scale.set(1,1.1,.6),I.add(V);let Q=new D(new ge(.008,6,4),so);Q.position.set(.01,.012,-.045),I.add(Q);let Y=new D(new ge(.058,14,8,0,Math.PI*2,0,Math.PI*.42),a.skin);Y.rotation.x=-.35,Y.scale.set(1,1.15,.62),I.add(Y);let j=Wl(.009,.06,ua,6);j.rotation.z=Math.PI/2+U*.35,j.position.set(0,.075,-.02),I.add(j),l&&I.scale.setScalar(l.eyeS),this.face.add(I),this.eyes.push({g:I,lid:Y})}let m=new D(new $e(.04,.009,6,16,Math.PI*.8),da),x=p-.11*(l?1.25:1),M=d.radiusAt(x,-Math.PI/2)||g;if(m.position.set(0,x,-M*.99),m.rotation.set(0,0,Math.PI+Math.PI*.1),l&&m.scale.setScalar(1.2),this.face.add(m),this.top=new Pt,this.top.position.y=d.top-.02,this.top.scale.setScalar(c),this.upper.add(this.top),t==="carrot"){let U=new D(new pt(.035,.05,.04,12),Oi);U.position.y=0,this.top.add(U);for(let I=0;I<7;I++){let k=I/7*Math.PI*2,q=.3+I%3*.12,V=.3+I%2*.08,Q=new Pt;Q.position.set(Math.cos(k)*.02,.01,Math.sin(k)*.02),Q.rotation.set(Math.sin(k)*q,0,-Math.cos(k)*q),this.top.add(Q);let Y=new D(new pt(l?.014:.005,l?.022:.011,V,l?10:5),Oi);if(Y.position.y=V/2,Q.add(Y),s>0&&!Sr[xi.id])for(let j=0;j<5;j++){let nt=V*(.45+j*.12);for(let Mt of[-1,1]){let qt=new D(new ge(.03-j*.004,6,4),Oi);qt.scale.set(.35,1.3,.12),qt.position.set(Mt*.025,nt,0),qt.rotation.set(0,k,Mt*.9),Q.add(qt)}}else{let j=new D(new ge(.06,16,10),Oi);j.scale.set(.75,1.6,.35),j.position.y=V,Q.add(j)}}}else if(t==="tomato"||t==="pepper"){let U=t==="tomato"?6:5;for(let j=0;j<U;j++){let nt=j/U*Math.PI*2+j%2*.12,Mt=new D(cb(t==="tomato"?.2:.13,t==="tomato"?.045:.06,j),Oi);Mt.position.set(Math.cos(nt)*.015,0,Math.sin(nt)*.015),Mt.rotation.y=-nt,this.top.add(Mt)}let I=t==="pepper"?[[0,-.01,0],[.004,.06,.01],[.03,.12,.02],[.07,.15,.02]]:[[0,0,0],[.005,.04,0],[.02,.075,.01]],k=new cr(I.map(j=>new F(...j))),q=new Yr(k,12,t==="pepper"?.024:.013,8,!1),V=new D(q,Oi);this.top.add(V);let Q=new D(new ge(t==="pepper"?.06:.03,12,8),Oi);Q.scale.y=.45,this.top.add(Q);let Y=new D(new Xi(t==="pepper"?.024:.013,8),new te({color:13162640,roughness:.8}));Y.position.copy(I[I.length-1].length?new F(...I[I.length-1]):new F),Y.lookAt(Y.position.clone().add(k.getTangent(1))),this.top.add(Y)}else for(let U=0;U<2;U++){let I=new D(new jn(.015,.06,5),Oi);I.position.set(.05-U*.1,0,.02),this.top.add(I)}if(t==="carrot"&&s>0&&!l){let U=new te({color:15249536,roughness:.8});for(let I=0;I<16;I++){let k=.02+I*.618%1*.45,q=I*2.4,V=(d.radiusAt(k,q)||.1)*.97,Q=new D(new pt(.0015,.004,.05+I%4*.015,4),U);Q.position.set(Math.cos(q)*V,k,Math.sin(q)*V),Q.rotation.set(Math.sin(q)*1.1,0,-Math.cos(q)*1.1),this.lower.add(Q)}}let w={carrot:.8,tomato:.58,potato:.86,pepper:.7}[t]*c,E=Math.max(d.radiusAt(w,0),d.radiusAt(w,-Math.PI/2))||.2;this.bandMat=l?bs(e===0?3116287:16727342):new te({color:e===0?2783968:14694954,roughness:.7,map:K.carpet.map});let R=new D(new $e(E*1.01,.022,8,32),this.bandMat);R.rotation.x=Math.PI/2,R.scale.set(1,1,1.6),R.position.y=w,this.upper.add(R);let S=new D(new ge(.03,8,6),this.bandMat);S.position.set(0,w,E*1.02),this.upper.add(S);for(let U of[-1,1]){let I=new D(new fe(.04,.14,.01),this.bandMat);I.position.set(U*.025,w-.07,E*1.04),I.rotation.z=U*.3,this.upper.add(I)}if(o!=="none"){let U=d.top-(t==="carrot"?.13:t==="potato"?.12:.08)*c,I=Math.max(d.radiusAt(U,0),d.radiusAt(U,Math.PI/2),.12)*1.08,k=new Pt;k.position.y=U,this.upper.add(k);let q=(V,Q={})=>l?bs(V,{side:Q.side||gs}):new te({color:V,roughness:.75,map:K.polymer.map,normalMap:K.polymer.normalMap,...Q});if(o==="helmet"){let V=new D(new ge(I,24,12,0,Math.PI*2,0,Math.PI*.5),q(5922880));V.scale.y=.85,k.add(V);let Q=new D(new $e(I,.02,6,24),q(4870196));Q.rotation.x=Math.PI/2,k.add(Q);let Y=new D(new fe(.08,.05,.04),q(2236962));Y.position.set(0,I*.55,-I*.8),k.add(Y);for(let j of[-1,1]){let nt=new D(new fe(.015,.16,.03),Yi);nt.position.set(j*I*.95,-.07,0),k.add(nt)}}else if(o==="beret"){let V=new D(new ge(I*1.1,20,10),q(e===0?2771594:9052192));V.scale.set(1,.3,1),V.position.set(I*.15,.04,0),V.rotation.z=-.2,k.add(V);let Q=new D(new $e(I*.98,.018,6,24),Yi);Q.rotation.x=Math.PI/2,k.add(Q);let Y=new D(new Xi(.025,12),new te({color:15253568,metalness:1,roughness:.3}));Y.position.set(-I*.45,.03,-I*.88),Y.rotation.y=Math.PI+.45,k.add(Y)}else if(o==="cap"){let V=new D(new ge(I,20,10,0,Math.PI*2,0,Math.PI*.5),q(2763306));V.scale.y=.7,k.add(V);let Q=new D(new pt(I*.75,I*.75,.015,20,1,!1,Math.PI*.5,Math.PI),q(2763306));Q.position.set(0,0,-I*.55),Q.scale.z=1.3,k.add(Q);let Y=new D(new Xi(.03,12),new te({color:15759898}));Y.position.set(0,I*.35,-I*.9),Y.rotation.x=.4,Y.rotation.y=Math.PI,k.add(Y)}else if(o==="boonie"){let V=new D(new pt(I*.9,I*1.02,.12,20),q(6974020,{map:K.camoWood.map}));V.position.y=.05,k.add(V);let Q=new D(new pt(I*1.6,I*1.6,.015,24),q(6974020,{map:K.camoWood.map,side:hn}));k.add(Q)}k.traverse(V=>{V.isMesh&&(V.castShadow=!0)}),this.hat=k}let _={carrot:.12,tomato:.1,potato:.15,pepper:.12}[t]*c,v=Math.max(d.radiusAt(_,0),d.radiusAt(_,Math.PI/2))||.2,C=new D(new $e(v*1.02,.025,6,32),Yi);C.rotation.x=Math.PI/2,C.scale.set(1,1,1.5),C.position.y=_,this.lower.add(C);{let U=new D(new fe(.06,.045,.012),new te({color:10132106,metalness:.8,roughness:.35}));U.position.set(0,_,-v*1.06),this.lower.add(U)}for(let U of[-.6,.6,2.4]){let I=new D(new fe(.094,.035,.056),rs);I.position.set(Math.sin(U)*v*1.08,_+.045,-Math.cos(U)*v*1.08),I.rotation.y=-U,this.lower.add(I);let k=new D(new pt(.008,.008,.006,8),Yi);k.position.set(Math.sin(U)*v*1.12,_+.04,-Math.cos(U)*v*1.12),k.rotation.set(Math.PI/2,-U,0),this.lower.add(k)}for(let U of[-.6,.6,2.4]){let I=new D(new fe(.09,.1,.05),rs);I.position.set(Math.sin(U)*v*1.08,_-.01,-Math.cos(U)*v*1.08),I.rotation.y=-U,this.lower.add(I)}{let U=(_+d.split)/2,I=Math.max(d.radiusAt(U,0),d.radiusAt(U,Math.PI/2),d.radiusAt(U+.1,0))||.2,k=Math.min(d.split-.08,U+.05),q=(d.radiusAt(k,Math.PI/2)||I)*1,V=new D(new fe(.16,.2,.07),rs);V.position.set(-.04,k,q+.03),this.lower.add(V);let Q=new D(new pt(.005,.008,.32,5),Yi);Q.position.set(-.09,k+.24,q+.04),Q.rotation.x=.15,this.lower.add(Q);for(let Y of[-1,1]){let j=new D(new fe(.03,.22,.012),Yi);j.position.set(-.04+Y*.05,k,q+.07),this.lower.add(j)}}let P={carrot:.4,tomato:.32,potato:.42,pepper:.36}[t]*c,L=Math.max(d.radiusAt(P,0),d.radiusAt(P,Math.PI))||.25;this.arms=[];for(let U of[-1,1]){let I=new Pt;I.position.set(U*(L+(l?.02:.01)),P,0),this.spine.add(I);let k=1,q=new D(new ge(.05*k,16,12),Je);I.add(q);let V=Vl(.3,u?[[0,.072],[.5,.074],[1,.066]]:[[0,.048],[.15,.052],[.45,.058],[.8,.044],[1,.04]],Je);I.add(V);let Q=new Pt;Q.position.y=-.29,I.add(Q);let Y=Vl(.27,u?[[0,.066],[.5,.068],[1,.06]]:[[0,.04],[.2,.05],[.6,.04],[1,.032]],Je);Q.add(Y);let j=new D(new ge(.048,16,12),Je);Q.add(j);let nt=new Pt;nt.position.y=-.26,Q.add(nt);let Mt=Ng(U,s);nt.add(Mt);let qt=new D(new pt(.052*k+.004,.052*k+.004,.05,18),this.bandMat);qt.position.y=-.08,I.add(qt),this.arms.push({side:U,sh:I,el:Q,wr:nt,up:V,fo:Y,hand:Mt,ball:q,lost:!1,upLen:.29,foLen:.26})}this.legs=[];let B={carrot:.09,tomato:.14,potato:.12,pepper:.12}[t]*(l?c:1);for(let U of[-1,1]){let I=new Pt;I.position.set(U*B,.02,0),this.hips.add(I);let k=Vl(.42*h,u?[[0,.1],[.5,.098],[1,.088]]:[[0,.07],[.12,.088],[.45,.08],[.85,.062],[1,.055]],Je);k.position.y=0,I.add(k);let q=new Pt;q.position.y=-.4*h,I.add(q);let V=new D(new ge(.05,16,12),Je);V.scale.set(1,1.1,.95),q.add(V);{let nt=new D(new ge(.058,12,8,0,Math.PI*2,0,Math.PI*.55),rs);nt.rotation.x=-Math.PI/2,nt.scale.set(1,1.25,.7),nt.position.set(0,-.01,-.012),q.add(nt);let Mt=new D(new pt(.06,.06,.02,12),Yi);Mt.position.y=-.06,q.add(Mt)}let Q=Vl(.38*h,u?[[0,.088],[.5,.086],[1,.084]]:[[0,.055],[.08,.06],[.3,.07],[.55,.055],[.9,.04],[1,.042]],Je);Q.position.y=0,q.add(Q);let Y=new Pt;Y.position.y=-.36*h,q.add(Y);let j=hb();Y.add(j),this.legs.push({side:U,hp:I,kn:q,an:Y,th:k,sh:Q,foot:j,lost:!1})}this.gun=ca(s>0?1:0,r,i.lo),this.aim=new Pt,this.aim.position.set(.04,P+.02,0),this.spine.add(this.aim),this.gunZ=l?-.15-Math.max(0,(d.radiusAt(P,-Math.PI/2)||L)-(d.radiusAt(P,-Math.PI/2)||L)/(c*l.fat))-.02:-.15,this.gun.root.position.set(l?.14:.12,-.04,this.gunZ),this.aim.add(this.gun.root),this.gun.root.scale.setScalar(.95),this.root.traverse(U=>{U.isMesh&&(U.castShadow=!0)});for(let U of this.arms)un(U.hand),un(U.wr),un(U.el,[U.wr]),un(U.sh,[U.el]);for(let U of this.legs)un(U.foot,[],{shadow:!1}),un(U.an),un(U.kn,[U.an]),un(U.hp,[U.kn]);un(this.top,[],{shadow:!1});for(let U of this.eyes)un(U.g,[U.lid],{shadow:!1});un(this.face,this.eyes.map(U=>U.g),{shadow:!1}),this.hat&&un(this.hat),un(this.upper,[this.face,this.top,this.hat]),un(this.lower,[]),this.phase=0,this.pitch=0,this.state="idle",this.crouch=0,this.prone=0,this.run=0,this.speed=0,this.air=0,this.blink=2,this.dead=!1,this.deadT=0,this.headGone=!1,this.boltT=0,this.ads=0,this.recoil=0,this.hitSpheres=[]}ikArm(t,e,i){qu(t,e,i)}_unused(t,e,i){if(t.lost)return;let s=t.sh,r=s.parent;r.updateWorldMatrix(!0,!1);let o=Bg.copy(r.matrixWorld).invert(),a=Ug.copy(e).applyMatrix4(o).sub(s.position),l=Fg.copy(i).applyMatrix4(o).sub(s.position),c=t.upLen,h=t.foLen,u=a.length();u=Math.min(u,c+h-.001),u=Math.max(u,.05);let d=a.clone().normalize(),f=(c*c+u*u-h*h)/(2*c*u),p=Math.acos(Math.max(-1,Math.min(1,f))),g=l.clone().sub(d.clone().multiplyScalar(l.dot(d))).normalize(),m=d.clone().multiplyScalar(Math.cos(p)*c).add(g.multiplyScalar(Math.sin(p)*c));s.quaternion.setFromUnitVectors(Xu,m.clone().normalize());let x=a.clone().sub(m).applyQuaternion(s.quaternion.clone().invert());t.el.quaternion.setFromUnitVectors(Xu,x.normalize())}update(t,e){let i=this,s=Math.min(1,i.speed/5.5);i.phase+=t*(i.speed*(i.prone>.5?1.2:2.1));let r=i.phase,l=(i.hipBase-i.crouch*.31*(i.hipBase/.8))*(1-i.prone)+.28*i.prone+Math.abs(Math.sin(r))*.04*s*(1-i.prone);i.hips.position.y=l+(i.air>0?.05:0);let c=-.32*i.run*s-.12*i.crouch;i.hips.rotation.x=-i.prone*Math.PI*.5+0,i.spine.rotation.x=c*(1-i.prone)+i.pitch*.18*(1-i.prone)+i.prone*.3,i.spine.rotation.z=Math.sin(r)*.04*s,i.spine.position.y=0;for(let R of i.legs){if(R.lost)continue;let S=r+(R.side>0?Math.PI:0),_=1-i.crouch*.55,v=Math.sin(S)*(.5+.4*i.run)*s*_,C=Math.max(0,-Math.cos(S))*(.9+.5*i.run)*s*_+.05,P=i.crouch*(1-s*.7);R.side>0?(v+=i.crouch*1.05+P*.3,C+=i.crouch*1.05+P*.3):(v+=i.crouch*(1.1-P*.9),C+=i.crouch*(1.8-P*.05)),i.air>0&&(v=.6*(R.side>0?1:.3),C=1),v=v*(1-i.prone)+Math.sin(S)*.15*s*i.prone,C=C*(1-i.prone)+(.2+Math.max(0,Math.sin(S))*.6*s)*i.prone,R.hp.rotation.x=-v,R.kn.rotation.x=C,R.an.rotation.x=(-C*.4+v*.2)*(1-i.crouch)+i.crouch*(R.side>0?-(C-v):-.9*P)+i.prone*1.2,R.hp.rotation.z=R.side*.04}let h=i.run*s*(1-i.ads);i.aim.rotation.x=i.pitch+i.prone*Math.PI*.5-i.spine.rotation.x-h*.9-i.boltT*.25,i.aim.rotation.y=h*.9,i.aim.rotation.z=h*.4+i.boltT*.3,i.gun.root.position.z=i.gunZ+i.recoil*.06,i.root.updateMatrixWorld(!0);let u=i.gun,d=i.arms[1],f=i.arms[0],p=u.gripPt.getWorldPosition(new F),g=u.forePt.getWorldPosition(new F),m=u.boltPt.getWorldPosition(new F),x=i.spine.localToWorld(new F(.6,-.6,.3)),M=i.spine.localToWorld(new F(-.6,-.6,.1)),w=u.root.getWorldQuaternion(new _n);i.ikArm(d,ql(i.boltT>0?p.clone().lerp(m,Math.min(1,i.boltT*1.5)):p,w,"grip"),x),i.ikArm(f,ql(g,w,"fore"),M),Xl(d,w,"grip"),Xl(f,w,"fore"),i.blink-=t;let E=i.blink<.12;i.blink<0&&(i.blink=2+Math.random()*3);for(let R=0;R<i.eyes.length;R++){let S=i.eyes[R],_=i.ads>.6&&R===0;S.lid.rotation.x=i.dead||E||_?.5:-.35+(i.ads>.6?.25:0)}if(i.dead){i.deadT+=t;let R=Math.min(1,i.deadT/.7);i.root.rotation.x=-i.fallDir*R*R*1.45,i.root.position.y=i.deadBaseY-0,i.hips.position.y=l*(1-R)+.25*R;for(let S of i.legs)S.kn.rotation.x*=1-R}}computeHitSpheres(){let t=this.hitSpheres;t.length=0;let e=this.spine,i=(r,o,a,l=e)=>{let c=l.localToWorld(o.clone());t.push({part:r,c,r:a})},s=this.geo;this.headGone||i("head",new F(0,(s.split+s.top)/2,0),Math.max(.17,(s.top-s.split)*.55)),i("bodyLow",new F(0,(s.bottom+s.split)*.5+.05,0),Math.max(.2,this.splitR*1.05)),i("bodyUp",new F(0,s.split-.12,0),Math.min(this.splitR,.22));for(let r of this.arms)r.lost||(i(r.side<0?"armL":"armR",new F(0,-.14,0),.07,r.sh),i(r.side<0?"armL":"armR",new F(0,-.13,0),.065,r.el));for(let r of this.legs)r.lost||(i(r.side<0?"legL":"legR",new F(0,-.2,0),.09,r.hp),i(r.side<0?"legL":"legR",new F(0,-.18,0),.075,r.kn));return t}};var ub=["shot","shot_far","bolt1","bolt2","mag","boom","tick","beep","splat1","splat2","crunch","hit","ui","cloth","wind","win","lose","whoosh","bgm","step_concrete-001","step_concrete-002","step_grass-001","step_grass-004","step_wood-000","step_wood-001"],mt={ctx:null,buf:{},master:null,listener:{x:0,y:0,z:0,yaw:0},bgmNode:null,windNode:null,async init(n="sfx/"){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination),await Promise.all(ub.map(async i=>{try{let r=await(await fetch(n+i+".mp3")).arrayBuffer();this.buf[i]=await this.ctx.decodeAudioData(r)}catch{}}))},resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},play(n,t={}){let e=this.ctx;if(!e||!this.buf[n])return null;let i=e.createBufferSource();i.buffer=this.buf[n],i.playbackRate.value=(t.rate||1)*(t.vary?1+(Math.random()-.5)*t.vary:1);let s=e.createGain(),r=t.vol??1,o=s;if(t.pos){let a=this.listener,l=t.pos.x-a.x,c=t.pos.z-a.z,h=t.pos.y-a.y,u=Math.hypot(l,h,c),d=t.ref||4;if(r*=Math.min(1,d/Math.max(d,u))**(t.roll||1),t.maxDist&&u>t.maxDist)return null;let f=-Math.sin(a.yaw),g=- -Math.cos(a.yaw),m=f,x=u>.1?(l*g+c*m)/u:0;if(e.createStereoPanner){let M=e.createStereoPanner();M.pan.value=Math.max(-1,Math.min(1,-x*.85)),s.connect(M),o=M}if(u>15){let M=e.createBiquadFilter();M.type="lowpass",M.frequency.value=Math.max(900,9e3-u*120),o.connect(M),o=M}}return s.gain.value=r,i.connect(s),o.connect(this.master),i.loop=!!t.loop,i.start(0,t.offset||0),{src:i,g:s}},bgm(n){if(n&&!this.bgmNode&&(this.bgmNode=this.play("bgm",{vol:.32,loop:!0})),!n&&this.bgmNode){try{this.bgmNode.g.gain.setTargetAtTime(0,this.ctx.currentTime,.4);let t=this.bgmNode;setTimeout(()=>t.src.stop(),1500)}catch{}this.bgmNode=null}},wind(n){if(n&&!this.windNode&&(this.windNode=this.play("wind",{vol:.18,loop:!0})),!n&&this.windNode){try{this.windNode.src.stop()}catch{}this.windNode=null}}};var Yl=class{constructor(t){this.cs=.5,this.x0=re.minX,this.z0=re.minZ,this.w=Math.ceil((re.maxX-re.minX)/this.cs),this.h=Math.ceil((re.maxZ-re.minZ)/this.cs),this.free=new Uint8Array(this.w*this.h);let e=.42,i=t.filter(s=>s.move&&s.max.y>.42&&s.min.y<1.5);for(let s=0;s<this.h;s++)for(let r=0;r<this.w;r++){let o=this.x0+(r+.5)*this.cs,a=this.z0+(s+.5)*this.cs,l=!0;for(let c of i){let h=Math.max(c.min.x-o,0,o-c.max.x),u=Math.max(c.min.z-a,0,a-c.max.z);if(h*h+u*u<e*e){l=!1;break}}this.free[s*this.w+r]=l?1:0}}cell(t,e){return[Math.floor((t-this.x0)/this.cs),Math.floor((e-this.z0)/this.cs)]}isFree(t,e){return t>=0&&e>=0&&t<this.w&&e<this.h&&this.free[e*this.w+t]===1}center(t,e){return[this.x0+(t+.5)*this.cs,this.z0+(e+.5)*this.cs]}nearestFree(t,e){if(this.isFree(t,e))return[t,e];for(let i=1;i<8;i++)for(let s=-i;s<=i;s++)for(let r=-i;r<=i;r++)if(this.isFree(t+r,e+s))return[t+r,e+s];return[t,e]}path(t,e,i,s){let[r,o]=this.nearestFree(...this.cell(t,e)),[a,l]=this.nearestFree(...this.cell(i,s)),c=this.w,h=c*this.h,u=new Float32Array(h).fill(1e9),d=new Int32Array(h).fill(-1),f=new Uint8Array(h),p=[[0,o*c+r]];u[o*c+r]=0;let g=S=>{let _=S%c,v=S/c|0,C=Math.abs(_-a),P=Math.abs(v-l);return Math.max(C,P)+.41*Math.min(C,P)},m=l*c+a,x=0;for(;p.length&&x++<2e4;){let S=0;for(let P=1;P<p.length;P++)p[P][0]<p[S][0]&&(S=P);let[,_]=p[S];if(p[S]=p[p.length-1],p.pop(),f[_])continue;if(f[_]=1,_===m)break;let v=_%c,C=_/c|0;for(let P=-1;P<=1;P++)for(let L=-1;L<=1;L++){if(!L&&!P)continue;let B=v+L,U=C+P;if(!this.isFree(B,U)||L&&P&&(!this.isFree(v+L,C)||!this.isFree(v,C+P)))continue;let I=U*c+B;if(f[I])continue;let k=u[_]+(L&&P?1.414:1);k<u[I]&&(u[I]=k,d[I]=_,p.push([k+g(I),I]))}}if(d[m]===-1&&m!==o*c+r)return null;let M=[],w=m;for(;w!==-1;)M.push(this.center(w%c,w/c|0)),w=d[w];M.reverse();let E=[M[0]],R=0;for(;R<M.length-1;){let S=M.length-1;for(;S>R+1&&!this.lineFree(M[R],M[S]);)S--;E.push(M[S]),R=S}return E}lineFree(t,e){let i=Math.hypot(e[0]-t[0],e[1]-t[1]),s=Math.ceil(i/(this.cs*.5));for(let r=0;r<=s;r++){let o=r/s,[a,l]=this.cell(t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o);if(!this.isFree(a,l))return!1}return!0}randomFreeNear(t,e,i){for(let s=0;s<40;s++){let r=Math.random()*Math.PI*2,o=Math.random()*i,[a,l]=this.cell(t+Math.cos(r)*o,e+Math.sin(r)*o);if(this.isFree(a,l))return this.center(a,l)}return[t,e]}};var os={snap:{id:"snap",name:"\u30A2\u30B9\u30D1\u30E9\u30E9\u30F3\u30B9",tag:"\u7D30\u8EAB\u3067\u8EFD\u3044\u30DC\u30EB\u30C8\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30D0\u30EA\u30B9\u30BF\u98A8\uFF09",mag:7,extMag:10,reserve:21,extReserve:30,bolt:1.26,ads:.35,reload:3.1,reloadEmpty:3.75,sprintOut:.25,sway:.8,stanceSway:!1,hip:1,adsMove:.44,move:1,dmg:{head:190,bodyUp:143,bodyMid:143,bodyLow:95,arm:143,leg:95},stats:{\u5A01\u529B:3,\u9023\u5C04:4,\u8997\u304D:5,\u5F3E\u6570:4},spec:"\u30B3\u30C3\u30AD\u30F3\u30B01.26\u79D2\u30FB\u8997\u304D0.35\u79D2\u30FB\u30EA\u30ED\u30FC\u30C93.1\u79D2\uFF08\u7A7A3.75\u79D2\uFF09",desc:`\u982D\u301C\u304A\u8179\u306E\u771F\u3093\u4E2D\u3068\u8155\u306A\u3089\u4E00\u6483\u3002
\u8170\u3068\u8DB3\u306F\u4E00\u6483\u306B\u306A\u3089\u306A\u3044\uFF08HP\u304C\u5C11\u3057\u6B8B\u308B\uFF09\u3002
\u8997\u304F\u306E\u3082\u30B3\u30C3\u30AD\u30F3\u30B0\u3082\u901F\u3044\u3002
\u3057\u3083\u304C\u307F\u30FB\u4F0F\u305B\u3067\u3082\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u306F\u6E1B\u3089\u306A\u3044\u3002`},root:{id:"root",name:"\u30B4\u30DC\u30A6\u30D6\u30EC\u30A4\u30AB\u30FC",tag:"\u9283\u8EAB\u304C\u9577\u3044\u4E00\u6483\u91CD\u8996\u306E\u30B9\u30CA\u30A4\u30D1\u30FC\uFF08DSR\u98A8\uFF09",mag:5,extMag:7,reserve:25,extReserve:35,bolt:1.5,ads:.4,reload:3.4,reloadEmpty:4.5,sprintOut:.3,sway:1.35,stanceSway:!0,hip:1.35,adsMove:.4,move:.99,dmg:{head:196,bodyUp:147,bodyMid:147,bodyLow:147,arm:147,leg:98},stats:{\u5A01\u529B:5,\u9023\u5C04:2,\u8997\u304D:3,\u5F3E\u6570:2},spec:"\u30B3\u30C3\u30AD\u30F3\u30B01.5\u79D2\u30FB\u8997\u304D0.4\u79D2\u30FB\u30EA\u30ED\u30FC\u30C93.4\u79D2\uFF08\u7A7A4.5\u79D2\uFF09",desc:`\u8DB3\u4EE5\u5916\u306A\u3089\u3069\u3053\u3067\u3082\u4E00\u6483\u3002
\u8DB3\u3060\u306898\u30C0\u30E1\u30FC\u30B8\u3067\u30AE\u30EA\u30AE\u30EA\u6B8B\u308B\u3002
\u8997\u304F\u30FB\u30B3\u30C3\u30AD\u30F3\u30B0\u30FB\u30EA\u30ED\u30FC\u30C9\u304C\u9045\u304F\u3001\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u3068\u8170\u6483\u3061\u306E\u3070\u3089\u3064\u304D\u304C\u5927\u304D\u3044\u3002`}},$l=[{id:"fmj",name:"\u8CAB\u901A\u5F3E\uFF08FMJ\uFF09",desc:"\u5A01\u529B\u306F\u4E0A\u304C\u3089\u306A\u3044\u3002\u58C1\u3084\u677F\u3092\u6483\u3061\u629C\u3051\u3066\u3001\u58C1\u8D8A\u3057\u3067\u3082\u5A01\u529B\u304C\u307B\u3068\u3093\u3069\u843D\u3061\u306A\u3044"},{id:"stab",name:"\u624B\u30D6\u30EC\u88DC\u6B63\uFF08\u5F3E\u9053CPU\u98A8\uFF09",desc:"\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u304C30%\u5C0F\u3055\u304F\u306A\u308B"},{id:"laser",name:"\u30EC\u30FC\u30B6\u30FC\u30B5\u30A4\u30C8",desc:"\u8170\u6483\u3061\u306E\u3070\u3089\u3064\u304D\u304C\u5C0F\u3055\u304F\u306A\u308B\uFF08\u8997\u304D\u306A\u304C\u3089\u3059\u3050\u6483\u3064\u30AF\u30A4\u30C3\u30AF\u30B9\u30B3\u30FC\u30D7\u304C\u5F53\u305F\u308A\u3084\u3059\u3044\uFF09"},{id:"fast",name:"\u30AF\u30A4\u30C3\u30AF\u30DE\u30B0",desc:"\u30EA\u30ED\u30FC\u30C9\u304C\u7D0435%\u901F\u304F\u306A\u308B",ex:"ext"},{id:"ext",name:"\u62E1\u5F35\u30DE\u30AC\u30B8\u30F3",desc:"\u5F3E\u304C\u5897\u3048\u308B\uFF08\u30A2\u30B9\u30D1\u30E9\u30E9\u30F3\u30B97\u219210\u767A\u30FB\u30B4\u30DC\u30A6\u30D6\u30EC\u30A4\u30AB\u30FC5\u21927\u767A\uFF09\u3002\u30EA\u30ED\u30FC\u30C9\u306F10%\u9045\u304F\u306A\u308B",ex:"fast"}],Zl=[[{id:"none",name:"\u306A\u3057",desc:""},{id:"light",name:"\u8EAB\u8EFD",desc:"\u79FB\u52D5\u304C7%\u901F\u304F\u306A\u308B"}],[{id:"none",name:"\u306A\u3057",desc:""},{id:"tough",name:"\u6839\u6027",desc:"\u6483\u305F\u308C\u305F\u6642\u306E\u8996\u70B9\u306E\u30D6\u30EC\u304C\u5C0F\u3055\u3044"},{id:"hands",name:"\u65E9\u696D",desc:"\u6295\u3052\u7269\u3092\u7D20\u65E9\u304F\u6295\u3052\u3089\u308C\u308B"}],[{id:"none",name:"\u306A\u3057",desc:""},{id:"dex",name:"\u8EAB\u306E\u3053\u306A\u3057",desc:"\u30C0\u30C3\u30B7\u30E5\u306E\u5F8C\u3059\u3050\u8997\u3051\u308B"},{id:"cond",name:"\u6301\u4E45\u529B",desc:"\u30C0\u30C3\u30B7\u30E5\u304C2\u500D\u9577\u304F\u7D9A\u304F"},{id:"quiet",name:"\u5FCD\u3073\u8DB3",desc:"\u8DB3\u97F3\u304C\u304B\u306A\u308A\u5C0F\u3055\u304F\u306A\u308B"}]],Hg=[{id:"none",name:"\u306A\u3057",desc:""},{id:"smoke",name:"\u3044\u3076\u308A\u304C\u3063\u3053",desc:"\u71FB\u3057\u305F\u5927\u6839\u306E\u7159\u306712\u79D2\u9593\u3001\u8996\u7DDA\u3092\u3055\u3048\u304E\u308B"},{id:"flash",name:"\u30D5\u30E9\u30C3\u30B7\u30E5\u30AA\u30CB\u30AA\u30F3",desc:"\u7389\u306D\u304E\u3067\u76EE\u306B\u3057\u307F\u308B\u3002\u8FD1\u304F\u3067\u898B\u305F\u76F8\u624B\u3092\u6700\u59273\u79D2\u3001\u76EE\u304F\u3089\u307E\u3057\u306B\u3059\u308B"}],kg=[{id:"none",name:"\u306A\u3057",desc:""},{id:"axe",name:"\u30C8\u30DE\u30C8\u30DB\u30FC\u30AF",desc:"\u30C8\u30DE\u30C8\u306E\u6295\u3052\u65A7\u3002\u5C71\u306A\u308A\u306B\u98DB\u3076\u3002\u5F53\u305F\u308C\u3070\u3069\u3053\u3067\u3082\u4E00\u6483"}],s0={rifle:"snap",att:["stab","laser"],perks:["light","tough","dex"],tac:"smoke",let:"axe"};function Gg(n){let t=os[n.rifle]||os.snap,e=s=>n.att.includes(s),i=(s,r)=>n.perks[s]===r;return{rifle:t.id,name:t.name,mag:e("ext")?t.extMag:t.mag,reserve:e("ext")?t.extReserve:t.reserve,bolt:t.bolt,ads:t.ads,reload:t.reload*(e("fast")?.65:e("ext")?1.1:1),reloadEmpty:t.reloadEmpty*(e("fast")?.65:e("ext")?1.1:1),sway:t.sway*(e("stab")?.7:1),stanceSway:t.stanceSway,hipSpread:t.hip*(e("laser")?.55:1),fmj:e("fmj"),dmg:t.dmg,adsMove:t.adsMove,move:t.move*(i(0,"light")?1.07:1),flinch:i(1,"tough")?.3:1,sprintOut:t.sprintOut*(i(2,"dex")?.4:1),stamina:i(2,"cond")?8:4,quiet:i(2,"quiet")?.35:1,throwT:i(1,"hands")?.15:.45,tac:n.tac||"none",let:n.let||"none"}}function r0(){let n=Math.random()<.55?"snap":"root",t=["fmj","stab","laser",Math.random()<.5?"fast":"ext"];return t.sort(()=>Math.random()-.5),{rifle:n,att:t.slice(0,2),perks:["light",Math.random()<.5?"tough":"hands",Math.random()<.5?"dex":"cond"],tac:Math.random()<.55?"smoke":"flash",let:"axe"}}var as=[{id:"rookie",name:"\u30EB\u30FC\u30AD\u30FC",min:0,step:250,divs:4,fee:0,col:"#9a8a78",col2:"#5a4e42",diff:0},{id:"bronze",name:"\u30D6\u30ED\u30F3\u30BA",min:1e3,step:500,divs:4,fee:10,col:"#c07a4a",col2:"#6a3a1a",diff:0},{id:"silver",name:"\u30B7\u30EB\u30D0\u30FC",min:3e3,step:750,divs:4,fee:20,col:"#c8ccd4",col2:"#6a7080",diff:1},{id:"gold",name:"\u30B4\u30FC\u30EB\u30C9",min:6e3,step:1e3,divs:4,fee:30,col:"#f0c040",col2:"#8a6a10",diff:1},{id:"plat",name:"\u30D7\u30E9\u30C1\u30CA",min:1e4,step:1250,divs:4,fee:40,col:"#5ad0d0",col2:"#1a6a7a",diff:1},{id:"diamond",name:"\u30C0\u30A4\u30E4",min:15e3,step:1250,divs:4,fee:50,col:"#6aa0ff",col2:"#2a3aa0",diff:2},{id:"master",name:"\u30DE\u30B9\u30BF\u30FC",min:2e4,step:0,divs:1,fee:60,col:"#c070ff",col2:"#5a1a9a",diff:2},{id:"king",name:"\u30D9\u30B8\u30AD\u30F3\u30B0",min:3e4,step:0,divs:1,fee:75,col:"#ff4a3a",col2:"#7a0a0a",diff:2}],Vg=["IV","III","II","I"];function zg(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function o0(n){let[t,e]=n.split("-");return`\u30B7\u30FC\u30BA\u30F3 ${t}\u5E74${+e}\u6708`}function Es(n){let t=as[0];for(let a of as)n>=a.min&&(t=a);let e=as.indexOf(t),i=as[e+1],s=1,r=t.min,o=i?i.min:t.min+1e4;if(t.divs>1){let a=Math.min(t.divs-1,Math.floor((n-t.min)/t.step));s=a,r=t.min+a*t.step,o=r+t.step}return{tier:t,index:e,div:s,label:t.divs>1?`${t.name} ${Vg[s]}`:t.name,lo:r,hi:o,progress:Math.max(0,Math.min(1,(n-r)/(o-r)))}}function Yu(){let n;try{n=JSON.parse(localStorage.getItem("vw_rank")||"null")}catch{n=null}n||(n={rp:0,season:zg(),best:0,badges:[],games:0,wins:0,kills:0,history:[]});let t=zg();if(n.season!==t){n.games>0&&n.badges.push({season:n.season,tier:Es(n.best).tier.id});let e=Es(n.rp).index;n.rp=e<=1?0:as[Math.max(0,e-2)].min,Object.assign(n,{season:t,best:n.rp,games:0,wins:0,kills:0,history:[]}),a0(n)}return n}function a0(n){try{localStorage.setItem("vw_rank",JSON.stringify(n))}catch{}}function Wg(n,t){let e=Es(n.rp).tier,i=[];i.push(["\u53C2\u52A0\u8CBB",-e.fee]),t.win&&i.push(["\u8A66\u5408\u306B\u52DD\u5229",100]),i.push([`\u53D6\u3063\u305F\u30E9\u30A6\u30F3\u30C9 \xD7${t.rounds}`,t.rounds*10]),i.push([`\u30AD\u30EB \xD7${t.kills}`,t.kills*12]),t.hs&&i.push([`\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8 \xD7${t.hs}`,t.hs*4]),t.mvp&&i.push(["MVP",20]);let s=i.reduce((a,l)=>a+l[1],0),r=e.min,o=Math.max(r,n.rp+s);return s=o-n.rp,{items:i,total:s,before:n.rp,after:o}}function fa(n,t=64,e=null){let i=as.find(h=>h.id===n)||as[0],s=as.indexOf(i),r=Math.min(4,Math.floor(s/2)+1),o=s>=6?`<path d="M10 40 L2 30 L12 32 L4 20 L16 26 Z" fill="${i.col}" opacity=".9"/><path d="M90 40 L98 30 L88 32 L96 20 L84 26 Z" fill="${i.col}" opacity=".9"/>`:"",a=s===7?'<path d="M34 14 L40 4 L46 12 L50 2 L54 12 L60 4 L66 14 Z" fill="#ffd040" stroke="#7a4a00" stroke-width="1.5"/>':"",l="";for(let h=0;h<r;h++){let u=(h-(r-1)/2)*28;l+=`<path transform="rotate(${u} 50 56)" d="M50 56 C40 44 44 30 50 24 C56 30 60 44 50 56 Z" fill="#fff" opacity=".92"/>`}let c=e!==null&&i.divs>1?`<text x="50" y="86" text-anchor="middle" font-size="15" font-weight="900" fill="#fff" stroke="#000" stroke-width=".6">${Vg[e]}</text>`:"";return`<svg width="${t}" height="${t}" viewBox="0 0 100 100"><defs><linearGradient id="g${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${i.col}"/><stop offset="1" stop-color="${i.col2}"/></linearGradient></defs>${o}<path d="M50 8 L86 20 L82 62 Q76 84 50 94 Q24 84 18 62 L14 20 Z" fill="url(#g${n})" stroke="#111" stroke-width="3"/><path d="M50 16 L78 25 L75 60 Q70 77 50 85 Q30 77 25 60 L22 25 Z" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="2"/>${l}<circle cx="50" cy="58" r="4" fill="${i.col2}"/>${a}${c}</svg>`}var H=n=>document.getElementById(n),ft=F,In=(n,t,e)=>Math.max(t,Math.min(e,n)),nc=(n,t,e)=>n+(t-n)*e,Rs=(n,t,e,i)=>nc(n,t,1-Math.exp(-e*i)),Qg=(n,t)=>{let e=t-n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Ai=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;window.__vwQuality=1;var ut=Object.assign({sens:1,sensAds:.55,fireMode:"release",quality:1,diff:1,bgm:1,kind:"carrot",tpp:0,hat:"helmet",camo:"olive",leftFire:0,winR:8,swap:4,killcam:1,map:"market",lo:s0},(()=>{try{return JSON.parse(localStorage.getItem("vw_cfg")||"{}")}catch{return{}}})());window.__vwQuality=ut.quality;var vi=()=>{try{localStorage.setItem("vw_cfg",JSON.stringify(ut))}catch{}},De=new Rl({antialias:ut.quality>0,powerPreference:"high-performance"});De.outputColorSpace=Mn;De.toneMapping=xr;De.toneMappingExposure=1.05;De.shadowMap.enabled=!0;De.shadowMap.type=ut.quality>0?hl:pr;De.autoClear=!1;H("game").appendChild(De.domElement);var Ys=Math.min(devicePixelRatio,ut.quality===2?2:ut.quality===1?Ai?1.5:1.75:1);De.setPixelRatio(Ys);og(Math.min(8,De.capabilities.getMaxAnisotropy()));var zt=new Gs,xe=new kn(72,1,.05,400);xe.rotation.order="YXZ";var Ks=new Gs,As=new kn(46,1,.01,10),Gi=0,td=0,jg="",rc=()=>Gi?innerHeight:innerWidth,oc=()=>Gi?innerWidth:innerHeight;function l0(n){let t=n.clientX,e=n.clientY;return Gi===90?{x:e,y:innerWidth-t}:Gi===-90?{x:innerHeight-e,y:t}:{x:t,y:e}}function db(){Gi=Ai&&innerHeight>innerWidth*1.05?td<-45?-90:td>45?90:Gi||90:0;let t=document.body.style;Gi?(t.position="fixed",t.left="0",t.top="0",t.width=innerHeight+"px",t.height=innerWidth+"px",t.transformOrigin="0 0",t.transform=Gi===90?`translate(${innerWidth}px,0) rotate(90deg)`:`translate(0,${innerHeight}px) rotate(-90deg)`):t.position=t.left=t.top=t.width=t.height=t.transform=t.transformOrigin="";let e=document.documentElement.style;e.setProperty("--vw",rc()/100+"px"),e.setProperty("--vh",oc()/100+"px")}function oo(){db();let n=rc(),t=oc();jg=innerWidth+"x"+innerHeight+":"+Gi,De.setSize(n,t),typeof Si<"u"&&Si.comp&&Si.comp.setSize(n,t),xe.aspect=As.aspect=n/t,xe.updateProjectionMatrix(),As.updateProjectionMatrix()}var S0=()=>{oo();for(let n of[120,350,800])setTimeout(oo,n)};addEventListener("resize",S0);addEventListener("orientationchange",S0);window.visualViewport&&visualViewport.addEventListener("resize",S0);oo();function fb(n){n.gamma==null||Math.abs(n.gamma)<45||(td=n.gamma,Gi&&Math.sign(td)!==Math.sign(Gi)&&oo())}addEventListener("deviceorientation",fb);addEventListener("touchend",function n(){removeEventListener("touchend",n);try{Gi&&window.DeviceOrientationEvent&&DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission().catch(()=>{})}catch{}},{once:!0});function pb(){let n=new ge(300,32,16),t=new cn({side:En,depthWrite:!1,fog:!1,uniforms:{sun:{value:new ft(.4,.55,.35).normalize()},top:{value:new Xt(.22,.48,.86)},hor:{value:new Xt(.72,.84,.95)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 sun; uniform vec3 top; uniform vec3 hor;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
      float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=n(p)*a;p*=2.03;a*=.5;}return s;}
      void main(){ float y=max(vP.y,0.); vec3 gnd=vec3(.55,.62,.55);
        vec3 c = mix(hor, top, pow(y, .55)); if(vP.y<0.) c = mix(hor, gnd, min(1.,-vP.y*4.));
        float sd = max(dot(vP, sun), 0.); c += vec3(1.,.9,.7)*pow(sd, 300.)*3. + vec3(1.,.85,.6)*pow(sd,8.)*.25;
        if(vP.y>0.02){ vec2 uv = vP.xz/(vP.y+.15)*1.6; float cl = smoothstep(.5,.85, fb(uv*1.2)); c = mix(c, vec3(1.)*(.85+.15*sd), cl*.75*smoothstep(.02,.2,vP.y)); }
        gl_FragColor = vec4(c,1.); }`}),e=new D(n,t);return e.renderOrder=-1,e}var yi=pb();zt.add(yi);zt.fog=new za(12112100,60,210);var Yn=new $r(13624575,5925440,.85);zt.add(Yn);var xn=new fr(16773336,2.6);xn.position.set(30,42,26);zt.add(xn);zt.add(xn.target);xn.castShadow=!0;var Xg=ut.quality===2?4096:ut.quality===1?2048:1024;xn.shadow.mapSize.set(Xg,Xg);Object.assign(xn.shadow.camera,{left:-44,right:44,top:40,bottom:-40,near:5,far:120});xn.shadow.bias=-4e-4;xn.shadow.normalBias=.03;xn.shadow.camera.layers.enable(1);var Mi=new tn(16760944,0,8,2);zt.add(Mi);var qg={town:{top:[.22,.48,.86],hor:[.72,.84,.95],fog:12112100,sun:16773336,si:2.6,sp:[30,42,26],hemi:.85},market:{top:[.3,.55,.88],hor:[.95,.88,.78],fog:15260872,sun:16769720,si:2.4,sp:[-34,30,22],hemi:.9},station:{top:[.42,.55,.7],hor:[.8,.84,.86],fog:13159632,sun:16052458,si:2,sp:[18,46,-20],hemi:1.05},villa:{top:[.18,.46,.9],hor:[.8,.9,.98],fog:13163754,sun:16774368,si:2.8,sp:[-20,50,30],hemi:.9},ship:{top:[.14,.4,.86],hor:[.78,.9,1],fog:12376302,sun:16774888,si:2.9,sp:[26,48,18],hemi:.95},border:{top:[.38,.52,.74],hor:[.96,.86,.7],fog:14863524,sun:16769200,si:2.6,sp:[-30,40,-22],hemi:.85},slums:{top:[.34,.44,.68],hor:[.98,.78,.58],fog:14202008,sun:16764056,si:2.4,sp:[36,28,16],hemi:.82},port:{top:[.3,.36,.62],hor:[1,.68,.42],fog:14723192,sun:16756848,si:2.3,sp:[44,18,-10],hemi:.75}};function T0(n){let t=qg[n]||qg.town;yi.material.uniforms.top.value.setRGB(...t.top),yi.material.uniforms.hor.value.setRGB(...t.hor),zt.fog.color.setHex(t.fog),xn.color.setHex(t.sun),xn.intensity=t.si,xn.position.set(...t.sp),Yn.intensity=t.hemi,yi.material.uniforms.sun.value.set(...t.sp).normalize(),R0.color.setHex(t.sun)}Ks.add(new $r(13624575,5925440,1));var R0=new fr(16773336,2);R0.position.set(1,2,1);Ks.add(R0);var ed=new tn(16760944,0,3,2);ed.position.set(.1,-.05,-.9);Ks.add(ed);var Jl=(n,t)=>{H("ldBar").style.width=n*100+"%",t&&(H("ldTxt").textContent=t)},nd,Js,A0;async function mb(){Jl(.05,"\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u4F5C\u6210\u4E2D\u2026"),await new Promise(i=>setTimeout(i,30)),ag(ut.quality),Bi[ut.map]||(ut.map="market"),Jl(.45,`\u30DE\u30C3\u30D7\u300C${Bi[ut.map].name}\u300D\u3092\u5EFA\u8A2D\u4E2D\u2026`),await new Promise(i=>setTimeout(i,30));let t=new Ko(De).fromScene(new pu,.04).texture;zt.environment=t,zt.environmentIntensity=.45,Ks.environment=t,Ks.environmentIntensity=.6;let e=new Set(zt.children);nd=Jf(zt,ut.map),Js=nd.colliders,T0(ut.map),ju=zt.children.filter(i=>!e.has(i)),C0=Js.filter(i=>i.bullet),Jl(.75,"CPU\u306E\u9053\u3092\u8A08\u7B97\u4E2D\u2026"),await new Promise(i=>setTimeout(i,30)),A0=new Yl(Js),Jl(.85,"\u52B9\u679C\u97F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026"),vb(),Qb(),De.compile(zt,xe),Jl(1,""),H("loading").classList.add("hide"),hc()}var C0=[],gb=.3;function xb(n){return n.stance==="prone"?.55:n.stance==="crouch"?1.2:1.72}function ls(n,t,e,i=.22){let s=0;for(let r of Js)r.move&&(n+i<r.min.x||n-i>r.max.x||t+i<r.min.z||t-i>r.max.z||r.max.y<=e+.46&&r.max.y>s&&(s=r.max.y));return s}function yb(n,t,e){for(let i=0;i<2;i++)for(let s of Js){if(!s.move||s.max.y<=n.y+.46||s.min.y>=n.y+t)continue;let r=In(n.x,s.min.x,s.max.x),o=In(n.z,s.min.z,s.max.z),a=n.x-r,l=n.z-o,c=a*a+l*l;if(!(c>=e*e))if(c>1e-8){let h=Math.sqrt(c);n.x+=a/h*(e-h),n.z+=l/h*(e-h)}else{let h=[n.x-s.min.x,s.max.x-n.x,n.z-s.min.z,s.max.z-n.z],u=h.indexOf(Math.min(...h));u===0?n.x=s.min.x-e:u===1?n.x=s.max.x+e:u===2?n.z=s.min.z-e:n.z=s.max.z+e}}}function ao(n,t,e){let i=null;for(let s of C0){let r=cg(n,t,s,i?i.t:e);r&&r.t>1e-4&&(!i||r.t<i.t)&&(i={t:r.t,c:s,axis:r.axis,sign:r.sign})}return i}function t1(n,t){let e=new ft().subVectors(t,n),i=e.length();return e.divideScalar(i),!ao(n,e,i)}function P0(n,t,e,i){let s=n.x-e.x,r=n.y-e.y,o=n.z-e.z,a=s*t.x+r*t.y+o*t.z,l=s*s+r*r+o*o-i*i,c=a*a-l;if(c<0)return-1;let h=-a-Math.sqrt(c);return h>0?h:-1}var $n={parts:[],decals:[],tracers:[],debris:[],glints:[]},uo,Qs,id,y0,e1,Mb=new Li(1,0);function Kl(n,t=128,e){let i=document.createElement("canvas");i.width=i.height=t;let s=i.getContext("2d");if(e)e(s,t);else{let o=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);n.forEach(([a,l])=>o.addColorStop(a,l)),s.fillStyle=o,s.fillRect(0,0,t,t)}let r=new ts(i);return r.colorSpace=Mn,r}function vb(){uo=Kl(null,128,(n,t)=>{n.translate(t/2,t/2);for(let i=0;i<7;i++){n.rotate(Math.PI*2/7+Math.random()*.2);let s=n.createLinearGradient(0,0,t/2,0);s.addColorStop(0,"rgba(255,250,220,1)"),s.addColorStop(.4,"rgba(255,190,80,.8)"),s.addColorStop(1,"rgba(255,120,20,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(0,-6),n.lineTo(t/2*(.6+Math.random()*.4),0),n.lineTo(0,6),n.fill()}let e=n.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,240,1)"),e.addColorStop(1,"rgba(255,200,100,0)"),n.fillStyle=e,n.fillRect(-30,-30,60,60)}),Qs=Kl([[0,"rgba(220,220,220,.55)"],[.5,"rgba(200,200,200,.25)"],[1,"rgba(200,200,200,0)"]]),id=Kl(null,128,(n,t)=>{n.fillStyle="#fff",n.beginPath(),n.arc(64,64,26,0,7),n.fill();for(let e=0;e<16;e++){let i=Math.random()*7,s=20+Math.random()*38,r=3+Math.random()*9;n.beginPath(),n.arc(64+Math.cos(i)*s,64+Math.sin(i)*s,r,0,7),n.fill(),n.lineWidth=r*.8,n.strokeStyle="#fff",n.beginPath(),n.moveTo(64,64),n.lineTo(64+Math.cos(i)*s,64+Math.sin(i)*s),n.stroke()}}),y0=Kl([[0,"rgba(10,8,6,1)"],[.25,"rgba(20,16,12,.95)"],[.4,"rgba(60,50,40,.5)"],[1,"rgba(60,50,40,0)"]],64),e1=Kl(null,128,(n,t)=>{let e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(200,230,255,.9)"),e.addColorStop(1,"rgba(150,200,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128),n.fillStyle="rgba(255,255,255,.9)",n.fillRect(0,62,128,4),n.fillRect(62,0,4,128)})}function Ri(n,t,e,i,s={}){let r=new zr({map:n,transparent:!0,depthWrite:!1,blending:s.add?Vs:gr,color:s.color||16777215,opacity:s.opacity??1,fog:!0}),o=new Oo(r);return o.position.copy(t),o.scale.setScalar(e),r.rotation=Math.random()*6.28,(s.scene||zt).add(o),$n.parts.push({o,life:i,max:i,vel:s.vel||new ft,grow:s.grow||0,sprite:!0,g:s.g||0,scene:s.scene||zt,fade:!0}),o}var c0={};function _b(n){return c0[n]||(c0[n]=new te({color:n,roughness:.4})),c0[n]}function Cs(n,t,e,i,s=.03,r=.8,o){for(let a=0;a<e;a++){let l=new D(Mb,_b(t));l.position.copy(n),l.scale.setScalar(s*(.5+Math.random()));let c=new ft(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(i*(.4+Math.random()));o&&c.addScaledVector(o,i*.6),zt.add(l),$n.parts.push({o:l,life:r*(.6+Math.random()*.6),max:r,vel:c,g:9.8,spin:new ft(Math.random(),Math.random(),Math.random()).multiplyScalar(10),bounce:!0})}}function ic(n,t,e,i,s=16777215,r=1){let o=new D(new be(i,i),new Wn({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,color:s,opacity:r,fog:!0}));if(o.position.copy(t).addScaledVector(e,.01),o.lookAt(t.clone().add(e)),o.rotateZ(Math.random()*6.28),zt.add(o),$n.decals.push(o),$n.decals.length>60){let a=$n.decals.shift();zt.remove(a),a.geometry.dispose(),a.material.dispose()}}var I0=new pt(.012,.012,1,6,1,!0);I0.rotateX(Math.PI/2);I0.translate(0,0,.5);function n1(n,t){let e=new D(I0,new Wn({color:16769184,transparent:!0,opacity:.8,blending:Vs,depthWrite:!1}));e.position.copy(n),e.lookAt(t),e.scale.set(1,1,n.distanceTo(t)),zt.add(e),$n.parts.push({o:e,life:.12,max:.12,vel:new ft,fadeMat:!0})}function bb(n){for(let t=$n.parts.length-1;t>=0;t--){let e=$n.parts[t];if(e.life-=n,e.life<=0){(e.scene||zt).remove(e.o),(e.sprite||e.fadeMat)&&e.o.material.dispose(),$n.parts.splice(t,1);continue}e.g&&(e.vel.y-=e.g*n),e.o.position.addScaledVector(e.vel,n),e.bounce&&e.o.position.y<ls(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01&&(e.o.position.y=ls(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01,e.vel.multiplyScalar(.4),e.vel.y=Math.abs(e.vel.y)*.3),e.spin&&(e.o.rotation.x+=e.spin.x*n,e.o.rotation.y+=e.spin.y*n),e.grow&&e.o.scale.multiplyScalar(1+e.grow*n);let i=e.life/e.max;(e.sprite||e.fadeMat)&&(e.o.material.opacity=(e.fade||e.fadeMat?i:1)*(e.o.material.userData.op??1))}for(let t of $n.debris){if(t.rest)continue;t.vel.y-=9.8*n,t.o.position.addScaledVector(t.vel,n),t.o.rotation.x+=t.av.x*n,t.o.rotation.y+=t.av.y*n,t.o.rotation.z+=t.av.z*n;let e=ls(t.o.position.x,t.o.position.z,t.o.position.y+.2,.02)+(t.r||.03);t.o.position.y<e&&(t.o.position.y=e,Math.abs(t.vel.y)<.8?(t.vel.set(0,0,0),t.av.multiplyScalar(0),t.rest=!0):(t.vel.y=-t.vel.y*.35,t.vel.x*=.6,t.vel.z*=.6,t.av.multiplyScalar(.6),t.splat&&!t.splatted&&(t.splatted=!0,ic(id,new ft(t.o.position.x,e-(t.r||.03)+.01,t.o.position.z),new ft(0,1,0),.4+Math.random()*.4,t.splat,.85)),t.snd&&mt.play(t.snd,{pos:t.o.position,vol:.4,vary:.3,ref:3})))}}function L0(){for(let n of $n.debris)n.o.parent&&n.o.parent.remove(n.o);$n.debris.length=0;for(let n of $n.decals)zt.remove(n),n.geometry.dispose(),n.material.dispose();$n.decals.length=0}function Ma(n,t,e,i={}){if($n.debris.push({o:n,vel:t,av:e,r:i.r,splat:i.splat,snd:i.snd}),$n.debris.length>160){let s=$n.debris.shift();s.o.parent&&s.o.parent.remove(s.o)}}var Ps={carrot:15759898,tomato:13113358,potato:15259808,pepper:6991930},ye=[],gt=null,si={carrot:"\u306B\u3093\u3058\u3093",tomato:"\u30C8\u30DE\u30C8",potato:"\u3058\u3083\u304C\u3044\u3082",pepper:"\u30D4\u30FC\u30DE\u30F3"},Zs=class{constructor(t,e,i,s,r={}){this.kind=t,this.team=e,this.isPlayer=i,this.name=s,this.pos=new ft,this.vel=new ft,this.yaw=0,this.pitch=0,this.alive=!0,this.hp=100,this.stance="stand",this.sprint=!1,this.ads=0,this.adsWant=!1,this.mag=5,this.reserve=20,this.boltT=0,this.reloadT=0,this.needBolt=!1,this.onGround=!0,this.slideT=0,this.slideDir=new ft,this.diveT=0,this.diveDir=new ft,this.moveAmt=0,this.stepAcc=0,this.lastShotT=-9,this.kills=0,this.hs=0,this.shots=0,this.hits=0,this.lostArm=[!1,!1],this.lostLeg=[!1,!1],this.revealT=0,this.spotT=0,this.hat=r.hat||(i?ut.hat:Rr[1+Math.floor(Math.random()*(Rr.length-1))].id),this.camo=r.camo||(i?ut.camo:la[Math.floor(Math.random()*4)].id),this.deaths=0,this.score=0,this.lo=r.lo||(i?ut.lo:r0()),this.st=Gg(this.lo),this.mag=this.st.mag,this.reserve=this.st.reserve,this.eyeH=1.58,this.stanceT=0,this.stamina=this.st.stamina,this.sprintOutT=0,this.flinch=0,this.veg=new Tr(t,e,{lod:1,hat:this.hat,camo:this.camo,lo:this.lo}),zt.add(this.veg.root),i&&this.setFirstPerson(!ut.tpp)}setFirstPerson(t){this.veg.root.traverse(e=>{e.layers.set(t?1:0)})}eye(){return new ft(this.pos.x,this.pos.y+this.eyeH,this.pos.z)}targetEye(){return(this.stance==="prone"?.42:this.stance==="crouch"?1.12:1.58)-(this.slideT>0?.45:0)}dir(){return new ft(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}dispose(){zt.remove(this.veg.root)}};function D0(n){return n.alive&&n.stanceT<=0&&n.boltT<=0&&n.reloadT<=0&&n.mag>0&&!(n.lostArm[0]&&n.lostArm[1])&&G.phase!=="pre"&&G.phase!=="post"}function N0(n,t){if(!D0(n)){n.mag<=0&&n.reloadT<=0&&lo(n);return}n.mag--,n.shots++,n.lastShotT=G.time,n.revealT=2.5;let e=n.ads>.95?6e-4:nc(.09*n.st.hipSpread,.006,Math.pow(n.ads,2));e+=Math.min(1,n.vel.length()/5)*(n.ads>.9?.012:.03)+(n.onGround?0:.05)+(n.lostArm[0]||n.lostArm[1]?.03:0),n.stance==="prone"&&n.ads>.9&&(e*=.5);let i=t.clone();e>0&&(i.x+=(Math.random()-.5)*e*2,i.y+=(Math.random()-.5)*e*2,i.z+=(Math.random()-.5)*e*2,i.normalize());let s=n.eye(),r=wb(s,i,n),o=n.isPlayer&&!ut.tpp&&n.ads<.9?Zt.gun.muzzlePt.getWorldPosition(new ft):n.veg.gun.muzzlePt.getWorldPosition(new ft),a=o;if(n.isPlayer&&!ut.tpp&&(a=s.clone().addScaledVector(i,.9).add(new ft(0,-.12,0))),n1(a,r.point),n.isPlayer&&!ut.tpp||(Ri(uo,o,.7,.06,{add:!0}),Mi.position.copy(o),Mi.intensity=30,setTimeout(()=>Mi.intensity=0,50)),Ri(Qs,n.isPlayer&&!ut.tpp?a:o,.4,1.2,{grow:1.5,vel:new ft(0,.4,0),opacity:.6}),n.isPlayer)mt.play("shot",{vol:1,vary:.06}),jb();else{let l=n.pos.distanceTo(gt.pos);mt.play(l>25?"shot_far":"shot",{pos:n.eye(),vol:1,ref:6,roll:.8,vary:.05})}for(let l of ye)!l.isPlayer&&l.alive&&l.team!==n.team&&l.pos.distanceTo(n.pos)<70&&l.ai&&(l.ai.heard={pos:n.pos.clone(),t:4});return n.needBolt=!0,n.boltT=n.st.bolt,n.boltPlayed=0,n.isPlayer&&n.ads>.5&&(n.kickedOut=!0),X.on&&_a(n)&&(oi({t:"sh",i:n.nid,p:ec(r.point)}),r.hit&&oi({t:"hit",i:r.hit.f.nid,b:n.nid,pa:r.hit.part,d:ec(i),pt:ec(r.point),pe:r.pen||0})),r}function Eb(n){let t=n.max.x-n.min.x,e=n.max.y-n.min.y,i=n.max.z-n.min.z;return Math.min(t,e,i)<=.45}function wb(n,t,e){let i=ao(n,t,200),s=0;if(i&&e&&e.st&&e.st.fmj&&Eb(i.c)){let l=new ft;l.setComponent(i.axis,i.sign);let c=n.clone().addScaledVector(t,i.t);ic(y0,c,l,.09),Cs(c,10132112,5,3,.02,.5,l);let h=ao(n.clone().addScaledVector(t,i.t+.5),t,200),u=h?h.t+.5+i.t:200;s=1,i=h?Object.assign({},h,{t:u}):null}let r=i?i.t:200,o=null;for(let l of ye){if(l===e||!l.alive&&!l.ragdollHit||!l.alive||l.pos.distanceTo(n)>r+3)continue;let c=null,h=-1;for(let u of l.veg.computeHitSpheres()){let d=P0(n,t,u.c,u.r);if(d>0&&d<r){u.part==="head"&&(h=d);let f=u.part;f==="bodyLow"&&n.y+t.y*d>u.c.y&&(f="bodyMid"),(!c||d<c.t)&&(c={f:l,part:f,t:d})}}c&&(h>0&&h-c.t<.3&&(c={f:l,part:"head",t:h}),r=c.t,o=c)}let a=n.clone().addScaledVector(t,r);if(o)return i1(o.f,o.part,e,t,a,s),{point:a,hit:o,pen:s};if(i){let l=new ft;l.setComponent(i.axis,i.sign),ic(y0,a,l,.09);let c={wood:9071178,metal:13158600,concrete:11053216,grass:5929530,carpet:8018522}[i.c.surf]||10132112;Cs(a,c,6,3,.02,.6,l),Ri(Qs,a,.3,.6,{grow:2,vel:l.clone().multiplyScalar(.5),color:c,opacity:.7}),i.c.surf==="metal"&&Ri(uo,a,.18,.05,{add:!0}),mt.play("hit",{pos:a,vol:.25,ref:3,rate:.6})}else if(t.y<0){let l=(0-n.y)/t.y;if(l>0&&l<200){let c=n.clone().addScaledVector(t,l);return Cs(c,5925434,5,2.5,.02,.5,new ft(0,1,0)),Ri(Qs,c,.4,.7,{grow:2,color:10127978}),{point:c}}}return{point:a}}function i1(n,t,e,i,s,r=0){if(!n.alive||G.mode==="range"&&n.isPlayer)return;let o=Ps[n.kind];Cs(s,o,14,4,.03,.9,i.clone().multiplyScalar(.6)),Ri(Qs,s,.5,.4,{color:o,grow:2.5,opacity:.9}),mt.play(Math.random()<.5?"splat1":"splat2",{pos:s,vol:.9,ref:5,vary:.2});let a=ao(s,i,4);if(a){let d=new ft;d.setComponent(a.axis,a.sign),ic(id,s.clone().addScaledVector(i,a.t),d,.6+Math.random()*.4,o,.9)}else ic(id,new ft(s.x+i.x*1.5,ls(s.x,s.z,s.y)+.02,s.z+i.z*1.5),new ft(0,1,0),.9,o,.85);let l=0,c=!1,h=e&&e.st?e.st.dmg:os.snap.dmg,u=r?e&&e.st&&e.st.fmj?.97:.8:1;if(t==="head"?(l=h.head*u,c=!0):t==="bodyUp"?l=h.bodyUp*u:t==="bodyMid"?l=h.bodyMid*u:t==="bodyLow"||t==="body"?l=h.bodyLow*u:t==="armL"||t==="armR"?(l=h.arm*u,Sb(n,t==="armL"?0:1,i)):(l=h.leg*u,Tb(n,t==="legL"?0:1,i)),n.hp-=l,n.hurtT=0,e&&(e.hits++,e.isPlayer&&s1(n.hp<=0)),n.isPlayer&&Pb(e?e.pos:s),n.ai&&(n.ai.heard={pos:e?e.pos.clone():s.clone(),t:5},n.ai.threat=e),n.hp<=0)ac(n,e,c,i,t);else if(n.isPlayer){let d=.09*n.st.flinch;n.pitch=In(n.pitch+d*(.6+Math.random()*.6),-1.35,1.35),n.yaw+=(Math.random()-.5)*d*1.4,Ts=Math.max(Ts,.6*n.st.flinch),H("vign").style.opacity=.9,setTimeout(()=>H("vign").style.opacity=n.hp<50?.5:0,400),Ab(Ps[n.kind])}}function Sb(n,t,e){if(n.lostArm[t])return;n.lostArm[t]=!0;let i=n.veg.arms[t];i.lost=!0;let s=i.sh.getWorldPosition(new ft),r=i.sh.getWorldQuaternion(new _n);zt.attach(i.sh),Ma(i.sh,e.clone().multiplyScalar(3).add(new ft((Math.random()-.5)*2,2.5,(Math.random()-.5)*2)),new ft(Math.random()*8,Math.random()*8,Math.random()*8),{r:.05,splat:Ps[n.kind],snd:"splat2"});let o=new D(new ge(.05,10,8),U0(n.kind));o.position.copy(i.sh.position),n.veg.spine.add(o),o.position.set(i.side*n.veg.splitR,i.sh.position.y,0),o.position.copy(n.veg.spine.worldToLocal(s.clone()));for(let a=0;a<6;a++)setTimeout(()=>n.veg.spine&&Cs(o.getWorldPosition(new ft),Ps[n.kind],3,1.5,.02,.6),a*120);n.isPlayer&&lc("","\u8155\u3092\u5931\u3063\u305F\uFF01 \u72D9\u3044\u304C\u30D6\u30EC\u308B")}function Tb(n,t,e){if(n.lostLeg[t])return;n.lostLeg[t]=!0;let i=n.veg.legs[t];i.lost=!0,zt.attach(i.hp),Ma(i.hp,e.clone().multiplyScalar(2.5).add(new ft((Math.random()-.5)*2,2.2,(Math.random()-.5)*2)),new ft(Math.random()*7,Math.random()*7,Math.random()*7),{r:.06,splat:Ps[n.kind],snd:"splat1"});let s=new D(new ge(.06,10,8),U0(n.kind));n.veg.hips.add(s),s.position.set(i.side*.1,0,0),n.lostLeg[0]&&n.lostLeg[1]&&(n.stance="prone"),n.isPlayer&&lc("","\u811A\u3092\u5931\u3063\u305F\uFF01 \u52D5\u304D\u304C\u9045\u304F\u306A\u308B")}var h0={};function U0(n){return h0[n]||(h0[n]=new te({map:K["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4})),h0[n]}function Rb(n,t){let e=n.veg;e.headGone=!0;let i=e.upper.localToWorld(new ft(0,(e.geo.split+e.geo.top)/2,0));e.upper.visible=!1,e.cap.visible=!0;let s=e.upper.material,r=U0(n.kind);for(let o=0;o<16;o++){let a=new Li(.05+Math.random()*.08,1),l=a.attributes.position;for(let h=0;h<l.count;h++)l.setXYZ(h,l.getX(h)*(.6+Math.random()*.8),l.getY(h)*(.4+Math.random()*.5),l.getZ(h)*(.6+Math.random()*.8));a.computeVertexNormals();let c=new D(a,[s,r][o%2]);c.castShadow=!0,c.position.copy(i).add(new ft((Math.random()-.5)*.2,(Math.random()-.5)*.2,(Math.random()-.5)*.2)),zt.add(c),Ma(c,t.clone().multiplyScalar(4+Math.random()*4).add(new ft((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)),new ft(Math.random()*15,Math.random()*15,Math.random()*15),{r:.04,splat:Math.random()<.5?Ps[n.kind]:0,snd:o<3?"splat1":null})}for(let o of e.eyes){let a=o.g.getWorldPosition(new ft);zt.attach(o.g),Ma(o.g,t.clone().multiplyScalar(3).add(new ft((Math.random()-.5)*3,3+Math.random()*2,(Math.random()-.5)*3)),new ft(Math.random()*10,Math.random()*10,0),{r:.04})}Cs(i,Ps[n.kind],40,6,.035,1.2,t),Ri(Qs,i,1.2,.7,{color:Ps[n.kind],grow:2,opacity:.9}),mt.play("crunch",{pos:i,vol:1,ref:8})}function ac(n,t,e,i,s){n.alive=!1,n.hp=0,e?Rb(n,i):s.startsWith("body")&&Cs(n.eye(),Ps[n.kind],24,5,.035,1,i),n.veg.dead=!0,n.veg.deadT=0,n.veg.fallDir=i.x*-Math.sin(n.yaw)+i.z*-Math.cos(n.yaw)>0?-1:1,n.veg.deadBaseY=n.pos.y;let r=n.veg.gun.root;zt.attach(r),Ma(r,new ft((Math.random()-.5)*2,1.5,(Math.random()-.5)*2),new ft(Math.random()*3,Math.random()*3,Math.random()*3),{r:.05}),n.deaths++,t&&(t.kills++,t.score+=e?150:100,e&&t.hs++),Cb(t,n,e),t&&t.isPlayer&&(lc(e?"\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u30AD\u30EB",e?"+150":"+100"),mt.play("hit",{vol:1,rate:.8})),n.isPlayer&&($s={t:2.8,by:t,at:n.eye()},setTimeout(()=>{G.phase!=="post"&&(ri=ye.find(o=>o.team===gt.team&&o.alive)||t||null)},2800),Is("\u3084\u3089\u308C\u305F",t?`${t.name} \u306B\u5012\u3055\u308C\u305F`:"",2)),G.bomb.carrier===n&&(G.bomb.carrier=null,G.bomb.state="dropped",G.bomb.pos.set(n.pos.x,ls(n.pos.x,n.pos.z,n.pos.y+.5)+.05,n.pos.z)),G.mode==="range"&&!n.isPlayer&&(n.reviveT=2.2),Vb(t,n)}function lo(n){if(!(n.reloadT>0||n.mag>=n.st.mag||n.reserve<=0||!n.alive)&&(n.reloadT=n.reloadMax=n.mag===0?n.st.reloadEmpty:n.st.reload,n.ads=Math.min(n.ads,0),n.adsWant=!1,n.isPlayer)){mt.play("mag",{vol:.8});let t=n.reloadMax;setTimeout(()=>mt.play("bolt1",{vol:.7}),t*620),setTimeout(()=>mt.play("bolt2",{vol:.7}),t*850)}}function Ab(n){let t="#"+n.toString(16).padStart(6,"0");for(let e=0;e<5;e++){let i=document.createElement("div"),s=40+Math.random()*120;i.style.cssText=`position:absolute;left:${10+Math.random()*80}%;top:${10+Math.random()*75}%;width:${s}px;height:${s*(.8+Math.random()*.5)}px;border-radius:${40+Math.random()*20}% ${50+Math.random()*20}% ${45+Math.random()*20}% ${55+Math.random()*20}%;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,.35),${t} 30%,${t});opacity:.75;transition:opacity 1.6s,transform 1.6s;pointer-events:none`,H("dmg").appendChild(i),requestAnimationFrame(()=>{i.style.opacity=0,i.style.transform="translateY(30px)"}),setTimeout(()=>i.remove(),1700)}}var Ju=0,Ql=0,M0=0;function lc(n,t){H("killnote").innerHTML=(n?`<div class="k">${n}</div>`:"")+`<div class="h">${t}</div>`,Ju=1.8}function Is(n,t,e=2.5){H("cmsg").textContent=n,H("csub").textContent=t||"",Ql=e}function Cb(n,t,e){let i=r=>r&&r.team===gt.team?"a":"e",s=document.createElement("div");s.innerHTML=n?`<b class="${i(n)}">${n.name}</b> <span class="hs">${e?"\u25CE \u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u25B6"}</span> <b class="${i(t)}">${t.name}</b>`:`<b class="${i(t)}">${t.name}</b> \u7206\u767A\u306B\u5DFB\u304D\u8FBC\u307E\u308C\u305F`,H("feed").prepend(s),setTimeout(()=>s.remove(),5e3)}var Ku=0;function s1(n){let t=H("hitmark");t.classList.toggle("kill",n),t.style.opacity=1,Ku=.25,mt.play("hit",{vol:.7,rate:n?.8:1.2})}function Pb(n){let t=document.createElement("div");t.className="dmga";let i=-(Math.atan2(n.x-gt.pos.x,n.z-gt.pos.z)-(gt.yaw+Math.PI));t.style.transform=`rotate(${i}rad)`,H("dmg").appendChild(t),setTimeout(()=>t.style.opacity=0,600),setTimeout(()=>t.remove(),1600)}var Ib=90,Lb=45,u0=5,d0=7.5,G={mode:"casual",phase:"lobby",time:0,timer:0,round:0,score:[0,0],attack:0,bomb:{state:"carried",carrier:null,pos:new ft,site:null,fuse:0,prog:0,defuser:null},postT:0,slowmo:0},ri=null,$s=null,sc=[],Pr=[],Db=(()=>{let n=new Pt,t=new D(new fe(.04,.42,.04),new te({color:6965802}));n.add(t);let e=new D(new fe(.02,.12,.16),new te({color:13159632,metalness:.9,roughness:.3}));return e.position.set(0,.17,.07),n.add(e),n})();function Nb(n){return new D(new pt(.05,.05,.14,10),new te({color:n==="smoke"?5925466:3815994,roughness:.5}))}function Ir(n,t,e){if(!(!n.alive||G.phase==="pre"||G.phase==="post"||n.throwing||(t==="axe"?n.letN:n.tacN)<=0)){if(X.on&&!e){if(!_a(n))return;oi({t:"th",i:n.nid,k:t})}n.throwing=!0,n.adsWant=!1,mt.play("cloth",n.isPlayer?{vol:.5}:{pos:n.pos,vol:.5}),setTimeout(()=>{if(n.throwing=!1,!n.alive)return;t==="axe"?n.letN--:n.tacN--,n.isPlayer&&H(t==="axe"?"letBtn":"tacBtn").classList.toggle("used",(t==="axe"?n.letN:n.tacN)<=0);let s=n.eye(),r=n.dir(),o=t==="axe"?Db.clone():Nb(t);o.position.copy(s).addScaledVector(r,.5),zt.add(o);let a=t==="axe"?19:15;sc.push({kind:t,o,pos:o.position,vel:r.clone().multiplyScalar(a).add(new ft(0,t==="axe"?2.2:3.2,0)),t:0,fuse:t==="smoke"?1.4:t==="flash"?1.3:3,by:n,done:!1}),mt.play("whoosh",n.isPlayer?{vol:.6}:{pos:n.pos,vol:.6})},n.st.throwT*1e3)}}function Ub(n){for(let t of sc){if(t.done)continue;t.t+=n;let e=t.vel.clone().multiplyScalar(n),i=e.length();if(!t.stuck){if(t.kind==="axe"){let o=e.clone().normalize();for(let a of ye)if(!(a===t.by||!a.alive||a.team===t.by.team)){for(let l of a.veg.computeHitSpheres()){let c=P0(t.pos,o,l.c,l.r+.05);if(c>0&&c<i){Fb(a,t,l.part),t.done=!0;break}}if(t.done)break}if(t.done){zt.remove(t.o);continue}}let s=ao(t.pos,e.clone().normalize(),i+.05);if(s){let o=new ft;o.setComponent(s.axis,s.sign),t.pos.addScaledVector(e.clone().normalize(),Math.max(0,s.t-.06)),t.kind==="axe"?(t.stuck=!0,mt.play("hit",{pos:t.pos,vol:.4,rate:.7})):(t.vel.reflect(o).multiplyScalar(.4),mt.play("hit",{pos:t.pos,vol:.2,rate:1.4}))}else t.pos.add(e);let r=ls(t.pos.x,t.pos.z,t.pos.y+.1,.05);t.pos.y<r+.05&&(t.pos.y=r+.05,t.kind==="axe"?t.stuck=!0:(t.vel.y=Math.abs(t.vel.y)*.3,t.vel.x*=.6,t.vel.z*=.6)),t.vel.y-=16*n,t.kind==="axe"&&!t.stuck?t.o.rotation.x-=n*14:t.stuck||(t.o.rotation.z+=n*6)}t.t>=t.fuse&&(t.done=!0,t.kind==="smoke"?Bb(t.pos.clone()):t.kind==="flash"&&Hb(t.pos.clone(),t.by),t.kind!=="axe"?zt.remove(t.o):setTimeout(()=>zt.remove(t.o),6e3))}for(let t=Pr.length-1;t>=0;t--)Pr[t].t-=n,Pr[t].t<=0&&Pr.splice(t,1)}function Fb(n,t,e){if(G.mode==="range"&&n.isPlayer)return;let i=Ps[n.kind];Cs(n.eye(),i,20,4,.03,.9),mt.play("splat1",{pos:n.pos,vol:1,ref:5}),n.hp=0,t.by.isPlayer&&s1(!0),ac(n,t.by,e==="head",t.vel.clone().normalize(),e.startsWith("body")?"body":e)}function Bb(n){mt.play("whoosh",{pos:n,vol:.9,rate:.6}),Pr.push({p:n.clone().setY(n.y+1.2),r:3.6,t:12});for(let t=0;t<14;t++){let e=Math.random()*6.28,i=Math.random()*2.6;Ri(Qs,new ft(n.x+Math.cos(e)*i,n.y+.4+Math.random()*2.4,n.z+Math.sin(e)*i),3.5+Math.random()*2,12+Math.random()*1.5,{grow:.15,vel:new ft((Math.random()-.5)*.3,.05,(Math.random()-.5)*.3),color:14212312,opacity:.95})}}function Ob(n,t){for(let e of Pr){let i=new ft().subVectors(t,n),s=In(new ft().subVectors(e.p,n).dot(i)/i.lengthSq(),0,1);if(n.clone().addScaledVector(i,s).distanceTo(e.p)<e.r)return!0}return!1}function Hb(n,t){mt.play("boom",{pos:n,vol:.7,rate:1.8}),Ri(uo,n.clone().setY(n.y+.3),4,.15,{add:!0}),Mi.position.copy(n),Mi.intensity=120,setTimeout(()=>Mi.intensity=0,120);for(let e of ye){if(!e.alive)continue;let i=e.eye(),s=n.distanceTo(i);if(s>15||!t1(i,n.clone().setY(n.y+.2)))continue;let r=new ft().subVectors(n,i).normalize(),o=e.dir().dot(r),l=3*In((1-s/15)*(.45+.55*Math.max(0,o)),0,1);e.isPlayer?e.blindT=Math.max(e.blindT||0,l):e.ai&&(e.ai.blind=Math.max(e.ai.blind||0,l))}}function kb(){let n=[];for(let t of["A","B"]){for(let e of en.holds[t].def)n.push(e);n.push([We[t].x,We[t].z])}return n.slice(0,8)}function Gb(n){G.mode!=="range"||!ye.includes(n)||(n.dispose(),n.veg=new Tr(n.kind,n.team,{lod:1,hat:n.hat,camo:n.camo,lo:n.lo}),zt.add(n.veg.root),Object.assign(n,{alive:!0,hp:100,stance:n.homeStance||"stand",lostArm:[!1,!1],lostLeg:[!1,!1]}),n.eyeH=n.targetEye(),n.vel.set(0,0,0),n.pos.copy(n.home))}function r1(){if(!gt)return;let n=gt.st.tac;H("tacBtn").classList.toggle("hide",n==="none"),H("tacBtn").querySelector("span").textContent=n==="flash"?"\u5149":"\u7159",H("letBtn").classList.toggle("hide",gt.st.let==="none"),H("tacBtn").classList.remove("used"),H("letBtn").classList.remove("used")}function zb(){G.round=1,G.score=[0,0],G.attack=0;for(let t of ye)t.dispose();ye=[],L0(),gt=new Zs(ut.kind,0,!0,"\u3042\u306A\u305F");let n=["carrot","tomato","potato","pepper"];kb().forEach(([t,e],i)=>{let s=new Zs(n[i%4],1,!1,"\u7684"+(i+1));s.pos.set(t,ls(t,e,3),e),s.home=s.pos.clone(),s.homeStance=["stand","stand","crouch","stand","prone"][i%5],s.stance=s.homeStance,s.eyeH=s.targetEye(),s.yaw=Math.random()*6.28,ye.push(s)}),ye.unshift(gt),gt.pos.copy(Bl.south[0]),gt.yaw=0,gt.pitch=0,Object.assign(G.bomb,{state:"none",carrier:null,site:null}),ri=null,$s=null,G.phase="live",G.timer=999,G.time=0,H("ia0").textContent=si[gt.kind][0],H("ia1").textContent="-",H("ie0").textContent="\u7684",H("ie1").textContent="\u7684",H("roundInfo").textContent="\u5C04\u6483\u5834",H("side").textContent="\u52D5\u304B\u306A\u3044\u7684\u3067\u7DF4\u7FD2\uFF08\u5012\u3059\u30682\u79D2\u3067\u5FA9\u6D3B\uFF09\u3002\u30DD\u30FC\u30BA\u304B\u3089\u30DB\u30FC\u30E0\u306B\u623B\u308C\u307E\u3059",H("hpName").textContent=si[ut.kind],F0={kills:0,hs:0},ld(),gt.tacN=gt.st.tac==="none"?0:99,gt.letN=gt.st.let==="none"?0:99,r1(),Is("\u5C04\u6483\u5834",`${gt.st.name}\u30FB${en.name}`,2.5)}function o1(){if(window.VW_INGAME=!0,G.mode==="range")return zb();G.round=0,G.score=[0,0],G.attack=Math.random()<.5?0:1;for(let s of ye)s.dispose();ye=[];let n=["carrot","tomato","potato","pepper"].filter(s=>s!==ut.kind);gt=new Zs(ut.kind,0,!0,"\u3042\u306A\u305F");let t=new Zs(n[0],0,!1,si[n[0]]+"(CPU)"),e=new Zs(n[1],1,!1,si[n[1]]+"(CPU)"),i=new Zs(n[2],1,!1,si[n[2]]+"(CPU)");ye=[gt,t,e,i];for(let s of ye)s.isPlayer||(s.ai={path:null,pi:0,goal:null,repath:0,think:0,target:null,seen:0,heard:null,hold:null,holdT:0,strafe:0,aimErr:new ft,mode:"obj",crouchT:0});H("ia0").textContent=si[gt.kind][0],H("ia1").textContent=si[t.kind][0],H("ie0").textContent=si[e.kind][0],H("ie1").textContent=si[i.kind][0],H("hpName").textContent=si[ut.kind],F0={kills:0,hs:0},ld(),cc()}var F0;function cc(n){G.round++,L0();for(let l of ye){let c=l.kind;l.dispose(),l.veg=new Tr(c,l.team,{lod:1,hat:l.hat,camo:l.camo,lo:l.lo}),zt.add(l.veg.root),l.isPlayer&&l.setFirstPerson(!ut.tpp),Object.assign(l,{alive:!0,hp:100,stance:"stand",sprint:!1,ads:0,adsWant:!1,mag:l.st.mag,reserve:l.st.reserve,tacN:l.st.tac==="none"?0:1,letN:l.st.let==="none"?0:1,throwing:!1,blindT:0,boltT:0,reloadT:0,needBolt:!1,slideT:0,diveT:0,eyeH:1.58,stanceT:0,stamina:l.st.stamina,sprintOutT:0,lostArm:[!1,!1],lostLeg:[!1,!1],revealT:0,kickedOut:!1}),l.vel.set(0,0,0),l.nt=null}let t=G.attack,e=ye.filter(l=>l.team===t),i=ye.filter(l=>l.team!==t);e.forEach((l,c)=>{l.pos.copy(Bl.south[c]),l.yaw=0,l.pitch=0}),i.forEach((l,c)=>{l.pos.copy(Bl.north[c]),l.yaw=Math.PI,l.pitch=0});let s=n!=null&&ye.find(l=>l.nid===n)||e.find(l=>l.isPlayer)||e.find(l=>l.cid)||e[0];Object.assign(G.bomb,{state:"carried",carrier:s,site:null,fuse:0,prog:0,defuser:null});for(let l of ye)l.ai&&Object.assign(l.ai,{path:null,goal:null,target:null,seen:0,heard:null,hold:null,mode:"obj",think:Math.random()*.3,site:Math.random()<.5?"A":"B",threat:null});let r=i.filter(l=>l.ai);r.forEach((l,c)=>l.ai.site=r.length===2?c===0?"A":"B":Math.random()<.5?"A":"B");let o=e.filter(l=>l.ai),a=Math.random()<.5?"A":"B";o.forEach(l=>l.ai.site=a);for(let l of sc)l.o.parent&&l.kind!=="axe"&&zt.remove(l.o);if(sc.length=0,Pr.length=0,ri=null,$s=null,H("kcam").classList.add("hide"),r1(),G.phase="pre",G.timer=4,G.time=0,H("roundInfo").textContent=`\u30E9\u30A6\u30F3\u30C9 ${G.round}`,H("side").textContent=gt.team===t?"\u653B\u6483\u5074\uFF1A\u7206\u5F3E\u3092 A \u304B B \u306B\u8A2D\u7F6E\u305B\u3088":"\u9632\u885B\u5074\uFF1A\u7206\u5F3E\u306E\u8A2D\u7F6E\u3092\u963B\u6B62\u305B\u3088",Is(`\u30E9\u30A6\u30F3\u30C9 ${G.round}`,gt.team===t?"\u653B\u6483":"\u9632\u885B",3.5),G.round<=2){let l=H("tip");l.classList.remove("hide"),l.textContent=(Ai?"\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F \u2192 \u96E2\u3059\u3068\u767A\u5C04\u3002":"\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u8997\u304F \u2192 \u5DE6\u30AF\u30EA\u30C3\u30AF\u3067\u767A\u5C04\u3002")+(gt.st.rifle==="root"?"\u8170\u304B\u3089\u4E0A\u306A\u3089\u4E00\u6483":"\u982D\u301C\u80F8\u306A\u3089\u4E00\u6483"),M0=6}H("vign").style.opacity=0,mt.play("whoosh",{vol:.6})}function Vb(n,t){if(G.mode==="range"||X.on&&!X.host||G.phase!=="live"&&G.phase!=="planted")return;let e=[0,1].map(r=>ye.filter(o=>o.team===r&&o.alive).length),i=G.attack,s=1-i;if(e[i]===0&&G.phase!=="planted")return co(s,"\u653B\u6483\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);if(e[s]===0)return co(i,"\u9632\u885B\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);e[i]===0&&G.phase}function co(n,t,e){if(G.phase==="post"||X.on&&!X.host&&!X.allowEnd)return;X.on&&X.host&&oi({t:"er",w:n^X.flip,r:t,by:e?e.nid:-1}),G.phase="post",G.postT=5,G.score[n]++,H("scA").textContent=G.score[0],H("scB").textContent=G.score[1];let i=n===gt.team;Is(i?"\u30E9\u30A6\u30F3\u30C9\u52DD\u5229":"\u30E9\u30A6\u30F3\u30C9\u6557\u5317",t,4.5),H("cmsg").style.color=i?"#ffd040":"#ff5a4a",mt.play(i?"win":"lose",{vol:.8}),e&&(G.slowmo=X.on?0:1.4,e.isPlayer||(ri=e,lc("\u30D5\u30A1\u30A4\u30CA\u30EB\u30AD\u30EB",e.name))),Ss(null)}function Wb(){H("cmsg").style.color="";let n=Xb();if(G.score[0]>=n.winR||G.score[1]>=n.winR)return X.on&&oi({t:"mend",sc:_1()}),a1();G.round%n.swap===0&&(G.attack=1-G.attack,Is("\u653B\u5B88\u4EA4\u4EE3","",2)),cc(),X.on&&T1()}function Xb(){return X.on?X.rules:G.mode==="rank"?{winR:8,swap:4}:{winR:ut.winR,swap:ut.swap}}function a1(){G.phase="end";let n=G.score[0]>G.score[1];H("resTitle").textContent=n?"\u52DD\u5229":"\u6557\u5317",H("resTitle").className=n?"win":"lose",H("resScore").innerHTML=`<span class="ally">${G.score[0]}</span> - <span class="enemy">${G.score[1]}</span>`;let t=gt.shots?Math.round(gt.hits/gt.shots*100):0;H("resStats").innerHTML=`<div><b>${gt.kills}</b>\u30AD\u30EB</div><div><b>${gt.hs}</b>\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8</div><div><b>${gt.hits}/${gt.shots}</b>\u547D\u4E2D</div>`;let e=[...ye].sort((i,s)=>s.score-i.score)[0];if(H("board").innerHTML="<tr><th></th><th>\u540D\u524D</th><th>\u30AD\u30EB</th><th>\u30C7\u30B9</th><th>HS</th><th>\u30B9\u30B3\u30A2</th></tr>"+[0,1].map(i=>ye.filter(s=>s.team===i).sort((s,r)=>r.score-s.score).map(s=>`<tr class="${i===0?"ally":"enemy"}${s===gt?" me":""}"><td>${s===e?'<span class="mvp">MVP</span>':""}</td><td>${s.name}</td><td>${s.kills}</td><td>${s.deaths}</td><td>${s.hs}</td><td>${s.score}</td></tr>`).join("")).join(""),H("result").classList.remove("hide"),H("ctl").classList.add("hide"),document.pointerLockElement&&document.exitPointerLock(),mt.bgm(!1),mt.play(n?"win":"lose"),H("rankRes").innerHTML="",G.mode==="rank"){let i=Es(qe.rp),s=Wg(qe,{win:n,rounds:G.score[0],kills:gt.kills,hs:gt.hs,mvp:e===gt});qe.rp=s.after,qe.best=Math.max(qe.best,qe.rp),qe.games++,n&&qe.wins++,qe.kills+=gt.kills,qe.history.unshift({win:n,sc:G.score.join("-"),rp:s.total,map:en.name}),qe.history=qe.history.slice(0,20),a0(qe);let r=Es(qe.rp),o=r.index>i.index||r.index===i.index&&r.div>i.div;H("rankRes").innerHTML=`<div class="rkHead">${fa(r.tier.id,64,r.div)}<div><div class="nm">${r.label}${o?' <span style="color:#ffd040">\u30E9\u30F3\u30AF\u30A2\u30C3\u30D7\uFF01</span>':""}</div><div class="rkBar"><i style="width:${r.progress*100}%"></i></div><small>${qe.rp} RP</small></div><div class="rpList" style="flex:1">${s.items.map(([a,l])=>`<div>${a}<b>${l>=0?"+":""}${l}</b></div>`).join("")}<div class="tot">\u5408\u8A08<b>${s.total>=0?"+":""}${s.total} RP</b></div></div></div>`}}function qb(n){if(G.time+=n,G.mode==="range"){G.phase="live",G.timer=999;return}if(G.phase==="pre")G.timer-=n,G.timer<=0?(G.phase="live",G.timer=Ib,Is("\u958B\u59CB","",1),mt.play("beep",{vol:.8})):Math.ceil(G.timer)!==Math.ceil(G.timer+n)&&mt.play("tick",{vol:.6});else if(G.phase==="live")G.timer-=n,G.timer<=0&&(G.timer=0,(!X.on||X.host)&&co(1-G.attack,"\u6642\u9593\u5207\u308C \u2014 \u9632\u885B\u6210\u529F"));else if(G.phase==="planted"){let e=G.bomb;e.fuse-=n,G.timer=e.fuse,e.beepT=(e.beepT||0)-n,e.beepT<=0&&(mt.play("beep",{pos:e.pos,vol:.9,ref:6}),e.beepT=e.fuse>15?1:e.fuse>6?.5:e.fuse>2?.25:.12),e.fuse<=0&&(!X.on||X.host)&&c1()}else G.phase==="post"&&(G.postT-=n,G.postT<=0&&(!X.on||X.host)&&(G.postT=99,Wb()));if(X.on&&!X.host){let e=G.bomb;(e.planting||e.defusing)===gt?Ss(e.planting?"\u7206\u5F3E\u3092\u8A2D\u7F6E\u4E2D":"\u7206\u5F3E\u3092\u89E3\u9664\u4E2D",e.prog/(e.planting?u0:d0)):Ss(null),e.state==="carried"&&e.carrier&&e.pos.copy(e.carrier.pos);return}let t=G.bomb;if(X.on)for(let e of ye)e.net&&e.wantAct&&!t.planting&&!t.defusing&&ho(e);if(t.state==="dropped"){for(let e of ye)if(e.alive&&e.team===G.attack&&e.pos.distanceTo(t.pos)<1.3){t.state="carried",t.carrier=e,e.isPlayer&&lc("","\u7206\u5F3E\u3092\u62FE\u3063\u305F");break}}if(t.state==="carried"&&t.carrier&&t.pos.copy(t.carrier.pos),t.planting){let e=t.planting;!e.alive||!e.wantAct||e.pos.distanceTo(We[t.plantSite])>2.4||G.phase!=="live"?(t.planting=null,t.prog=0,e.isPlayer&&Ss(null)):(t.prog+=n,e.isPlayer&&Ss("\u7206\u5F3E\u3092\u8A2D\u7F6E\u4E2D",t.prog/u0),t.prog>=u0&&l1(e,t.plantSite))}if(t.defusing){let e=t.defusing;!e.alive||!e.wantAct||e.pos.distanceTo(t.pos)>2||G.phase!=="planted"?(t.defusing=null,t.prog=0,e.isPlayer&&Ss(null)):(t.prog+=n,e.isPlayer&&Ss("\u7206\u5F3E\u3092\u89E3\u9664\u4E2D",t.prog/d0),t.prog>=d0&&(t.defusing=null,Ss(null),t.state="defused",mt.play("ui",{vol:1}),e.score+=100,sd(`${e.name} \u304C\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F`),X.on&&oi({t:"df",i:e.nid}),co(1-G.attack,"\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F")))}}function sd(n){let t=document.createElement("div");t.textContent=n,H("feed").prepend(t),setTimeout(()=>t.remove(),5e3)}function ho(n){let t=G.bomb;if(n.alive){if(X.on&&!X.host)return!1;if(G.phase==="live"&&t.carrier===n){for(let e of["A","B"])if(n.pos.distanceTo(We[e])<2.4&&!t.planting)return t.planting=n,t.plantSite=e,t.prog=0,mt.play("cloth",{pos:n.pos,vol:.7}),!0}return G.phase==="planted"&&n.team!==G.attack&&n.pos.distanceTo(t.pos)<2&&!t.defusing?(t.defusing=n,t.prog=0,mt.play("cloth",{pos:n.pos,vol:.7}),!0):!1}}var ws;function Yb(){let n=new Pt,t=new D(new fe(.4,.18,.28),new te({color:3815984,roughness:.7,map:K.polymer.map}));t.position.y=.09,n.add(t);for(let s=0;s<3;s++){let r=new D(new pt(.045,.045,.34,12),new te({color:13138474,roughness:.5}));r.rotation.z=Math.PI/2,r.position.set(0,.22,-.08+s*.08),n.add(r)}let e=new D(new be(.16,.08),new Wn({color:16724e3}));e.rotation.x=-Math.PI/2,e.position.set(.08,.181,0),n.add(e),n.userData.scr=e;let i=new D(new $e(.08,.008,6,16,Math.PI),new te({color:13639712}));return i.position.set(-.12,.2,0),n.add(i),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),n}function l1(n,t){let e=G.bomb;e.planting=null,e.prog=0,Ss(null),e.state="planted",e.carrier=null,e.site=t,e.fuse=Lb,e.beepT=0,X.on&&X.host&&oi({t:"pl",i:n.nid,si:t,p:ec(n.pos)}),X.on&&e.pos.set(n.pos.x,ls(n.pos.x,n.pos.z,n.pos.y+.5)+.05,n.pos.z),G.phase="planted",n.score+=100,sd(`${n.name} \u304C ${t} \u306B\u7206\u5F3E\u3092\u8A2D\u7F6E`),Is("\u7206\u5F3E\u304C\u8A2D\u7F6E\u3055\u308C\u305F",`\u30B5\u30A4\u30C8 ${t}`,2.5),mt.play("beep",{vol:1})}function c1(){let n=G.bomb;n.state="exploded",X.on&&X.host&&oi({t:"boom"}),mt.play("boom",{vol:1});for(let t=0;t<6;t++)Ri(Qs,n.pos.clone().add(new ft((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3)),3+Math.random()*3,2.5,{grow:.8,color:4866104,opacity:.9});for(let t=0;t<4;t++)Ri(uo,n.pos.clone().add(new ft(0,1,0)),6+t*2,.35,{add:!0});Cs(n.pos.clone().add(new ft(0,.5,0)),3813408,40,12,.06,2),Mi.position.copy(n.pos).add(new ft(0,2,0)),Mi.intensity=400,Mi.distance=40,setTimeout(()=>{Mi.intensity=0,Mi.distance=8},300),Ts=1.2;for(let t of ye)t.alive&&t.pos.distanceTo(n.pos)<9&&(t.hp=0,ac(t,null,!1,new ft().subVectors(t.pos,n.pos).normalize(),"body"));co(G.attack,"\u7206\u5F3E\u304C\u7206\u767A\u3057\u305F")}function Ss(n,t){if(!n){H("prog").classList.add("hide");return}H("prog").classList.remove("hide"),H("progT").textContent=n,H("progF").style.width=In(t,0,1)*100+"%"}var Ts=0;function h1(n,t,e){let i=(n.lostLeg[0]?1:0)+(n.lostLeg[1]?1:0),s=(n.stance==="prone"?.85:n.stance==="crouch"?2.1:t.sprint?6.1:4.4)*(n.st?n.st.move:1);n.stanceT>0&&(s*=n.stance==="prone"?.15:.6),t.mag<.45&&n.stance==="stand"&&!t.sprint&&(s=2),s*=nc(1,n.st?n.st.adsMove:.45,n.ads),i===1&&(s*=.45),i===2&&(s=Math.min(s,.6)),(G.phase==="pre"||G.bomb.planting===n||G.bomb.defusing===n)&&(s=0);let o=t.x*s*Math.min(1,t.mag*1.4),a=t.z*s*Math.min(1,t.mag*1.4);if(n.slideT>0){n.slideT-=e;let u=n.slideT/.7;o=n.slideDir.x*8*u+o*.2,a=n.slideDir.z*8*u+a*.2,n.slideT<=0&&(n.stance="crouch")}if(n.diveT>0){n.diveT-=e;let u=n.onGround?Math.max(0,n.diveT/.62):1;o=n.diveDir.x*7.2*u,a=n.diveDir.z*7.2*u}let l=n.diveT>0?n.onGround?5:.3:n.onGround?14:3;n.vel.x=Rs(n.vel.x,o,l,e),n.vel.z=Rs(n.vel.z,a,l,e),n.vel.y-=16*e,n.pos.x+=n.vel.x*e,n.pos.z+=n.vel.z*e,yb(n.pos,xb(n),n.stance==="prone"?.36:gb),n.pos.x=In(n.pos.x,re.minX+.5,re.maxX-.5),n.pos.z=In(n.pos.z,re.minZ+.5,re.maxZ-.5);let c=ls(n.pos.x,n.pos.z,n.pos.y);n.pos.y+=n.vel.y*e,n.pos.y<=c?(!n.onGround&&n.diveT>0?(Qu(n,1.1),mt.play("cloth",{pos:n.pos,vol:.8}),n.isPlayer&&(Ts=Math.max(Ts,.25))):!n.onGround&&n.vel.y<-4&&Qu(n,1.3),n.pos.y=c,n.vel.y=0,n.onGround=!0):n.pos.y-c>.08?n.onGround=!1:n.onGround&&(n.pos.y=c,n.vel.y=0);let h=Math.hypot(n.vel.x,n.vel.z);if(n.moveAmt=h,n.onGround&&h>.5){n.stepAcc+=h*e;let u=n.sprint?1.6:1.2;if(n.stepAcc>u){n.stepAcc=0;let d=(n.stance==="prone"||n.stance==="crouch"||h<2.3?0:n.sprint?1:.6)*(n.st?n.st.quiet:1);d>.05&&Qu(n,d)}}}function Qu(n,t){let e=wg(Js,n.pos.x,n.pos.y+.05,n.pos.z),s=(e==="wood"||e==="carpet"?["step_wood-000","step_wood-001"]:e==="grass"?["step_grass-001","step_grass-004"]:["step_concrete-001","step_concrete-002"])[Math.random()<.5?0:1];if(n.isPlayer?mt.play(s,{vol:.25*t,vary:.15}):mt.play(s,{pos:n.pos,vol:.9*t,ref:3,roll:1.1,vary:.15,maxDist:30}),t>.5)for(let r of ye)r.ai&&r.alive&&r.team!==n.team&&r.pos.distanceTo(n.pos)<14*t&&(r.ai.heard={pos:n.pos.clone(),t:2.5});t>.5&&(n.revealT=Math.max(n.revealT,.6))}var Yg=new Proxy({},{get:(n,t)=>en.holds[t]});function $b(n){return ye.filter(t=>t.team!==n.team&&t.alive)}function Zb(n,t){let e=n.eye(),i=new ft().subVectors(t.eye(),e),s=i.length();if(s>90)return!1;i.normalize();let r=new ft(-Math.sin(n.yaw),0,-Math.cos(n.yaw));if(new ft(i.x,0,i.z).normalize().dot(r)<Math.cos(Math.PI*.42)&&s>4||n.ai&&n.ai.blind>0)return!1;let a=[t.eye(),new ft(t.pos.x,t.pos.y+(t.stance==="prone"?.3:.9),t.pos.z)];for(let l of a)if(t1(e,l)&&!Ob(e,l))return!0;return!1}function Jb(n,t){let e=n.ai;if(!n.alive)return;let i=G.mode==="rank"?Es(qe.rp).tier.diff:ut.diff;if(e.blind>0&&(e.blind-=t),e.think-=t,e.heard&&(e.heard.t-=t,e.heard.t<=0&&(e.heard=null)),e.think<=0){e.think=.15;let a=null,l=1e9;for(let c of $b(n))if(Zb(n,c)){let h=n.pos.distanceTo(c.pos);h<l&&(l=h,a=c)}a!==e.target&&(e.seen=0,e.target=a,a&&e.aimErr.set(Math.random()-.5,(Math.random()-.5)*.6,Math.random()-.5).multiplyScalar([.5,.35,.25][i])),!a&&e.target&&(e.target=null)}let s={x:0,z:0,mag:0,sprint:!1},r=null,o=e.target;if(o&&o.alive){e.seen+=t;let a=[1.1,.7,.45][i],c=e.aimHead??(e.aimHead=Math.random()<[.25,.4,.55][i])?o.eye().add(new ft(0,-.05,0)):new ft(o.pos.x,o.pos.y+(o.stance==="prone"?.25:o.stance==="crouch"?.75:1.05),o.pos.z),h=Math.exp(-e.seen*[1.4,2,2.8][i])+(o.moveAmt>2?[.12,.08,.05][i]:0)+[.035,.018,.008][i];if(r=c.clone().add(e.aimErr.clone().multiplyScalar(h*n.eye().distanceTo(c)*.25)),n.adsWant=e.seen>a*.4&&n.boltT<=0&&n.reloadT<=0,e.strafe-=t,e.strafe<=0&&(e.strafe=.6+Math.random()*1.2,e.strafeDir=Math.random()<.5?-1:1,Math.random()<.25&&n.stance==="stand"?n.stance="crouch":Math.random()<.2&&(n.stance="stand")),n.ads<.5||i===2){let d=new ft(Math.cos(n.yaw),0,-Math.sin(n.yaw));s.x=d.x*e.strafeDir,s.z=d.z*e.strafeDir,s.mag=.5}if(e.seen>a&&n.ads>.92&&D0(n)){let d=new ft().subVectors(r,n.eye()).normalize(),f=n.dir();f.dot(d)>.9995&&(N0(n,f),e.aimHead=void 0,e.aimErr.multiplyScalar(.6),e.seen=a*.35)}e.lastSeenPos=o.pos.clone();let u=n.pos.distanceTo(o.pos);n.letN>0&&u<9&&u>3&&e.seen>a&&!n.throwing&&Math.random()<t*.35*(i+1)&&(r=o.eye().add(new ft(0,.25+u*.03,0)),Ir(n,"axe"))}else{n.adsWant=!1,n.stance==="crouch"&&Math.random()<t*.3&&(n.stance="stand");let a=Kb(n);if(a)if(e.repath-=t,(!e.path||e.repath<=0||!e.goal||e.goal.distanceTo(a)>1.5)&&(e.goal=a.clone(),e.path=A0.path(n.pos.x,n.pos.z,a.x,a.z),e.pi=1,e.repath=3),e.path&&e.pi<e.path.length){let[c,h]=e.path[e.pi],u=c-n.pos.x,d=h-n.pos.z,f=Math.hypot(u,d);f<.45?e.pi++:(s.x=u/f,s.z=d/f,s.mag=1,s.sprint=e.rush&&f>3,e.sneak&&(s.mag=.4)),r=new ft(c,n.eye().y,h),f<.45&&e.pi>=e.path.length&&(e.path=null)}else e.holdT-=t,e.holdT<=0&&(e.holdT=2+Math.random()*3,e.lookYaw=e.watchYaw!==void 0?e.watchYaw+(Math.random()-.5)*1.4:Math.random()*6.28,Math.random()<.3&&(n.stance="crouch")),e.lookYaw!==void 0&&(r=n.eye().add(new ft(-Math.sin(e.lookYaw),-.05,-Math.cos(e.lookYaw))));if(e.heard&&(r=new ft(e.heard.pos.x,n.eye().y,e.heard.pos.z)),n.tacN>0&&!n.throwing){let c=G.bomb,h=null;n.st.tac==="smoke"&&(c.carrier===n&&G.phase==="live"&&n.pos.distanceTo(We[e.site])<7&&(h=We[e.site]),G.phase==="planted"&&n.team!==G.attack&&n.pos.distanceTo(c.pos)<8&&(h=c.pos)),n.st.tac==="flash"&&e.heard&&n.pos.distanceTo(e.heard.pos)>5&&n.pos.distanceTo(e.heard.pos)<15&&Math.random()<t*.5&&(h=e.heard.pos),h&&(r=new ft(h.x,n.eye().y+.6,h.z),Ir(n,n.st.tac))}n.wantAct=!1;let l=G.bomb;if(l.carrier===n&&G.phase==="live"){let c=We[e.site];n.pos.distanceTo(c)<2&&(n.wantAct=!0,l.planting||ho(n))}G.phase==="planted"&&n.team!==G.attack&&n.pos.distanceTo(l.pos)<1.8&&(n.wantAct=!0,l.defusing||ho(n))}if(o&&o.alive&&(n.wantAct=!1),r){let a=new ft().subVectors(r,n.eye()),l=Math.atan2(-a.x,-a.z),c=Math.atan2(a.y,Math.hypot(a.x,a.z)),h=o?[3.5,5,7][i]:4;n.yaw+=Qg(n.yaw,l)*Math.min(1,h*t*(n.ads>.5?.6:1)),n.pitch+=(c-n.pitch)*Math.min(1,h*t)}if(s.mag>.3&&!o&&(e.stuckT=(e.stuckT||0)+t,e.stuckT>.8&&(e.stuckPos&&e.stuckPos.distanceTo(n.pos)<.25&&(e.path=null,e.repath=0,e.hold=null,e.unstick=.6,e.unstickDir=Math.random()<.5?1:-1),e.stuckPos=n.pos.clone(),e.stuckT=0)),e.unstick>0){e.unstick-=t;let a=new ft(Math.cos(n.yaw),0,-Math.sin(n.yaw)).multiplyScalar(e.unstickDir);s.x=a.x,s.z=a.z,s.mag=1}n.sprint=s.sprint,h1(n,s,t),n.mag===0&&n.reloadT<=0&&n.boltT<=0&&lo(n),!o&&n.mag<3&&n.reloadT<=0&&n.boltT<=0&&n.reserve>0&&Math.random()<t*.5&&lo(n)}function Kb(n){let t=n.ai,e=G.bomb,i=n.team===G.attack;if(t.rush=!1,t.sneak=!1,t.watchYaw=void 0,G.phase==="pre")return null;if(t.heard&&!t.target&&Math.random()<.002)return t.heard.pos;if(i){if(e.state==="dropped")return t.rush=!0,e.pos;if(e.carrier===n&&G.phase==="live")return t.rush=G.timer<40,We[t.site];if(G.phase==="planted"){if(!t.hold||t.holdFor!=="postplant"){let r=Yg[e.site].att[Math.floor(Math.random()*2)];t.hold=new ft(r[0],0,r[1]),t.holdFor="postplant"}return t.watchYaw=Math.atan2(-(e.pos.x-t.hold.x),-(e.pos.z-t.hold.z)),t.hold}let s=e.carrier;if(s&&s!==n){let r=new ft(Math.sin(n.kind.length)*2.5,0,2.5);return s.pos.clone().add(r)}return We[t.site]}else{if(G.phase==="planted")return t.rush=!0,e.pos;if(!t.hold||t.holdFor!==t.site||(t.swapT=(t.swapT||0)-.016)<-25){let s=Yg[t.site].def,r=s[Math.floor(Math.random()*s.length)];t.hold=new ft(r[0],0,r[1]),t.holdFor=t.site,t.swapT=0}return t.watchYaw=Math.atan2(-(0-t.hold.x)*.3,-(10-t.hold.z)),t.rush=n.pos.distanceTo(t.hold)>12,t.hold}}var rd=.66,Zt={root:new Pt,gun:null,arms:[],kick:0,sway:new lt,bob:0,boltAnim:0,reloadAnim:0,sprintK:0,shells:[]};function Qb(){Zt.gun=ca(1),Zt.root.add(Zt.gun.root),Ks.add(Zt.root),Zt.armL=i0(-1,2783968,.34,.32),Zt.armR=i0(1,2783968,.36,.32);for(let n of[Zt.armL,Zt.armR])n.up.visible=!1;Zt.armL.sh.position.set(-.06,-.34,-.25),Zt.armR.sh.position.set(.34,-.55,.12),Zt.gun.root.scale.setScalar(rd),As.add(Zt.armL.sh),As.add(Zt.armR.sh),Ks.add(As),Zt.armL.sh.traverse(n=>n.frustumCulled=!1),Zt.armR.sh.traverse(n=>n.frustumCulled=!1),Zt.gun.root.traverse(n=>n.frustumCulled=!1)}function ld(){let n=Zt.gun;Zt.root.remove(n.root),Zt.gun=ca(1,ut.camo,ut.lo),Zt.gun.root.scale.setScalar(rd),Zt.root.add(Zt.gun.root),Zt.gun.root.traverse(t=>t.frustumCulled=!1)}function jb(){Zt.kick=1,ed.intensity=6,setTimeout(()=>ed.intensity=0,60),Ri(uo,Zt.gun.muzzlePt.getWorldPosition(new ft),.35,.05,{add:!0,scene:Ks})}function tE(n,t,e){let i=gt,s=Zt.gun;Zt.kick=Rs(Zt.kick,0,9,n),Zt.sway.x=Rs(Zt.sway.x,In(-t*.0025,-.06,.06),8,n),Zt.sway.y=Rs(Zt.sway.y,In(e*.0025,-.05,.05),8,n);let r=Math.hypot(i.vel.x,i.vel.z);Zt.bob+=n*r*2,Zt.sprintK=Rs(Zt.sprintK,i.sprint&&r>3&&i.ads<.1?1:0,8,n);let o=i.ads,a=s.eyePt.position.y,l=s.eyePt.position.z,c=new ft(.17,-.18,-.52),h=new ft(0,-a*rd,-l*rd-.08),u=c.clone().lerp(h,Math.pow(o,.8)),d=(1-o*.9)*Math.min(1,r/4);u.x+=Math.sin(Zt.bob)*.012*d+Zt.sway.x,u.y+=Math.abs(Math.cos(Zt.bob))*.014*d+Zt.sway.y-(i.stance==="crouch"?.01:0),u.z+=Zt.kick*.12;let f=i.boltT>0?1-i.boltT/i.st.bolt:0,p=i.boltT>0?Math.sin(Math.min(1,f*1.2)*Math.PI):0;s.setBolt(i.boltT>0?In((f-.15)/.75,0,1):0);let g=i.reloadT>0?1-i.reloadT/(i.reloadMax||3):0,m=i.reloadT>0?Math.sin(g*Math.PI):0;s.mag.position.y=-.04-(g>.15&&g<.6?Math.sin((g-.15)/.45*Math.PI)*.25:0),Zt.root.position.copy(u).add(new ft(-.04*Zt.sprintK,-.08*Zt.sprintK-.05*m,.05*Zt.sprintK)),Zt.root.rotation.set(Zt.kick*.14+Zt.sprintK*-.45+m*.3+p*.12,Zt.sprintK*.9+m*.2,Zt.sprintK*.35+p*.35+m*.5),Zt.root.updateMatrixWorld(!0),As.updateMatrixWorld(!0);let x=s.gripPt.getWorldPosition(new ft),M=s.forePt.getWorldPosition(new ft),w=s.boltPt.getWorldPosition(new ft),E=i.boltT>0?x.clone().lerp(w,In(p*1.6,0,1)):i.reloadT>0?x.clone().lerp(s.mag.getWorldPosition(new ft),Math.sin(In(g*1.2,0,1)*Math.PI)):x,R=s.root.getWorldQuaternion(new _n);qu(Zt.armR,ql(E,R,"grip"),As.localToWorld(new ft(1.2,-1.2,.4))),qu(Zt.armL,ql(M,R,"fore"),As.localToWorld(new ft(-.6,-1.4,-.2))),Xl(Zt.armR,R,"grip"),Xl(Zt.armL,R,"fore"),Zt.root.visible=Zt.armL.sh.visible=Zt.armR.sh.visible=o<.88&&!ut.tpp&&i.alive&&!ri,i.lostArm[0]&&(Zt.armL.sh.visible=!1),i.lostArm[1]&&(Zt.armR.sh.visible=!1)}var Ce={joy:null,jx:0,jz:0,jmag:0,sprintLock:!1,look:null,lookDX:0,lookDY:0,keys:{},fireHeld:null,mouseDown:!1,rmb:!1},Cr=H("ctl");Ai&&H("joyBase").classList.remove("hide");function u1(){H("fireL").classList.toggle("hide",!ut.leftFire)}u1();function eE(){let n=(i,s)=>i<rc()*.42&&s>oc()*.3,t=new Map;Cr.addEventListener("touchstart",i=>{mt.resume();for(let s of i.changedTouches){let r=l0(s),o={identifier:s.identifier,target:s.target,clientX:r.x,clientY:r.y},a=o.target.closest&&o.target.closest(".b");if(a){i.preventDefault(),ga(a.id,!0,o),t.set(o.identifier,{btn:a.id,x:o.clientX,y:o.clientY});continue}if(!Ce.joy&&n(o.clientX,o.clientY)){Ce.joy={id:o.identifier,x:o.clientX,y:o.clientY};let l=H("joyBase");l.classList.add("act"),l.style.left=o.clientX+"px",l.style.top=o.clientY+"px",t.set(o.identifier,{joy:!0})}else Ce.look||(Ce.look={id:o.identifier,x:o.clientX,y:o.clientY},t.set(o.identifier,{look:!0}))}},{passive:!1}),Cr.addEventListener("touchmove",i=>{i.preventDefault();for(let s of i.changedTouches){let r=l0(s),o={identifier:s.identifier,target:s.target,clientX:r.x,clientY:r.y},a=t.get(o.identifier);if(a){if(a.joy){let l=parseFloat(getComputedStyle(H("joyBase")).width)/2,c=(o.clientX-Ce.joy.x)/l,h=(o.clientY-Ce.joy.y)/l,u=Math.hypot(c,h);Ce.sprintLock=h<-1.45&&Math.abs(c)<.8,u>1&&(c/=u,h/=u),Ce.jx=c,Ce.jz=h,Ce.jmag=Math.min(1,u),H("joyKnob").style.transform=`translate(${c*l*.6}px,${h*l*.6}px)`,H("sprintLock").classList.toggle("on",Ce.sprintLock)}else if(a.look||a.btn==="fireR"||a.btn==="fireL"){let l=a.look?Ce.look:a,c=o.clientX-l.x,h=o.clientY-l.y;l.x=o.clientX,l.y=o.clientY,Ce.lookDX+=c,Ce.lookDY+=h}}}},{passive:!1});let e=i=>{for(let s of i.changedTouches){let r=l0(s),o={identifier:s.identifier,target:s.target,clientX:r.x,clientY:r.y},a=t.get(o.identifier);if(a){if(t.delete(o.identifier),a.joy){Ce.joy=null,Ce.jx=Ce.jz=Ce.jmag=0;let l=H("joyBase");l.classList.remove("act"),l.style.left="",l.style.top="",H("joyKnob").style.transform="",Ce.sprintLock}else if(a.look)Ce.look=null;else if(a.btn){let l=document.elementFromPoint(s.clientX,s.clientY);(a.btn==="fireR"||a.btn==="fireL")&&l&&l.closest&&l.closest("#fireX")&&(o.cancel=!0),ga(a.btn,!1,o)}}}};Cr.addEventListener("touchend",e),Cr.addEventListener("touchcancel",e),Cr.addEventListener("mousedown",i=>{let s=i.target.closest(".b");if(s&&!document.pointerLockElement){ga(s.id,!0,i);let r=()=>{ga(s.id,!1,i),removeEventListener("mouseup",r)};addEventListener("mouseup",r)}})}function ga(n,t,e){let i=gt;if(!i)return;let s=H(n);if(s&&s.classList.toggle("press",t),(n==="fireR"||n==="fireL")&&(t?(Ce.fireHeld=n,ut.fireMode==="tap"||i.adsToggle?od():(i.adsWant=!0,i.fireOnRelease=!0)):Ce.fireHeld===n&&(Ce.fireHeld=null,i.fireOnRelease&&(i.fireOnRelease=!1,e&&e.cancel?mt.play("cloth",{vol:.3}):od(),i.adsToggle||(i.adsWant=!1))),H("fireX").classList.toggle("hide",!(t&&i.fireOnRelease))),n==="fireX"){t&&Ce.fireHeld&&ga(Ce.fireHeld,!1,{cancel:!0});return}if(!t){n==="actBtn"&&(i.wantAct=!1);return}mt.play("ui",{vol:.25}),n==="adsBtn"&&(i.adsToggle=!i.adsToggle,i.adsWant=i.adsToggle,H("adsBtn").classList.toggle("on",i.adsToggle)),n==="jumpBtn"&&d1(i),n==="crouchBtn"&&f1(i),n==="proneBtn"&&B0(i),n==="reloadBtn"&&lo(i),n==="tacBtn"&&Ir(i,i.st.tac),n==="letBtn"&&Ir(i,"axe"),n==="camBtn"&&p1(),n==="pauseBtn"&&G0(!0),n==="actBtn"&&(i.wantAct=!0,ho(i))}function od(){let n=gt;if(n.alive){if(!D0(n)){n.mag<=0&&lo(n);return}N0(n,n.dir())}}function d1(n){if(!(!n.alive||!n.onGround||G.phase==="pre"||n.lostLeg[0]&&n.lostLeg[1])){if(n.stance!=="stand"){n.stance="stand";return}n.vel.y=5.4,n.onGround=!1,mt.play("cloth",{vol:.4})}}function f1(n){if(n.alive){if(n.sprint&&n.stance==="stand"&&Math.hypot(n.vel.x,n.vel.z)>4){n.slideT=.7,n.stance="crouch",n.slideDir.set(n.vel.x,0,n.vel.z).normalize(),mt.play("whoosh",{vol:.4});return}n.stance=n.stance==="crouch"?"stand":"crouch",mt.play("cloth",{vol:.35})}}function B0(n){if(!(!n.alive||n.lostLeg[0]&&n.lostLeg[1])){if(n.sprint&&n.stance==="stand"&&n.onGround&&Math.hypot(n.vel.x,n.vel.z)>4&&G.phase!=="pre"){n.diveT=.62,n.diveDir.set(n.vel.x,0,n.vel.z).normalize(),n.vel.x=n.diveDir.x*7.2,n.vel.z=n.diveDir.z*7.2,n.vel.y=3.4,n.onGround=!1,n.stance="prone",n.sprint=!1,n.adsWant=n.adsToggle,mt.play("whoosh",{vol:.5,rate:.85});return}n.stance=n.stance==="prone"?"stand":"prone",mt.play("cloth",{vol:.5})}}function p1(){ut.tpp=ut.tpp?0:1,vi(),H("camBtn").textContent=ut.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0",gt&&gt.setFirstPerson(!ut.tpp)}function nE(){addEventListener("keydown",n=>{if(G.phase==="lobby"||!gt)return;Ce.keys[n.code]=!0;let t=gt;n.code==="Space"&&d1(t),(n.code==="KeyC"||n.code==="ControlLeft")&&f1(t),n.code==="KeyZ"&&B0(t),n.code==="KeyR"&&lo(t),n.code==="KeyQ"&&Ir(t,t.st.tac),n.code==="KeyG"&&Ir(t,"axe"),n.code==="KeyV"&&p1(),(n.code==="KeyF"||n.code==="KeyE")&&(t.wantAct=!0,ho(t)),n.code==="Escape"&&G0(!0)}),addEventListener("keyup",n=>{Ce.keys[n.code]=!1,(n.code==="KeyF"||n.code==="KeyE")&&gt&&(gt.wantAct=!1)}),De.domElement.addEventListener("mousedown",n=>{if(mt.resume(),!(G.phase==="lobby"||!gt)){if(!document.pointerLockElement&&!Ai){De.domElement.requestPointerLock();return}n.button===0&&od(),n.button===2&&(gt.adsWant=!0,Ce.rmb=!0)}}),Cr.addEventListener("mousedown",n=>{!Ai&&!n.target.closest(".b")&&G.phase!=="lobby"&&(document.pointerLockElement||De.domElement.requestPointerLock())}),addEventListener("mouseup",n=>{n.button===2&&gt&&(gt.adsWant=!1,Ce.rmb=!1)}),addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{document.pointerLockElement&&(Ce.lookDX+=n.movementX*.6,Ce.lookDY+=n.movementY*.6)}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement&&Cr.addEventListener("mousedown",m1)})}function m1(n){!document.pointerLockElement||!gt||(n.button===0&&od(),n.button===2&&(gt.adsWant=!0))}addEventListener("mousedown",n=>{document.pointerLockElement&&n.target===document.body&&m1(n)});function iE(n){let t=gt,e=(t.ads>.5?ut.sensAds:ut.sens)*(Ai?.0042:.0026),i=Ce.lookDX,s=Ce.lookDY;Ce.lookDX=Ce.lookDY=0,t.alive&&!ri&&(t.yaw-=i*e,t.pitch=In(t.pitch-s*e,-1.35,1.35));let r=Ce.jx,o=Ce.jz,a=Ce.jmag,l=Ce.keys;if(l.KeyW||l.KeyA||l.KeyS||l.KeyD){r=(l.KeyD?1:0)-(l.KeyA?1:0),o=(l.KeyS?1:0)-(l.KeyW?1:0);let g=Math.hypot(r,o)||1;r/=g,o/=g,a=l.AltLeft?.4:1}let c=(Ce.sprintLock||l.ShiftLeft)&&t.stamina>.05&&o<-.5&&t.stance==="stand"&&t.ads<.3&&t.boltT<=0&&t.reloadT<=0;t.sprint=c,c&&t.adsWant&&!t.fireOnRelease&&(t.adsWant=!1);let h=new ft(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),d=new ft(Math.cos(t.yaw),0,-Math.sin(t.yaw)).multiplyScalar(r).add(h.multiplyScalar(-o));t.alive&&h1(t,{x:d.x,z:d.z,mag:a,sprint:c},n),tE(n,i,s);let f=G.bomb,p=null;if(t.alive&&G.phase==="live"&&f.carrier===t)for(let g of["A","B"])t.pos.distanceTo(We[g])<2.4&&(p="\u8A2D\u7F6E");t.alive&&G.phase==="planted"&&t.team!==G.attack&&t.pos.distanceTo(f.pos)<2&&(p="\u89E3\u9664"),H("actBtn").classList.toggle("hide",!p),p&&(H("actBtn").textContent=p),M0>0?M0-=n:Ai?H("tip").classList.add("hide"):(H("tip").classList.toggle("hide",!p),p&&(H("tip").textContent=`F\u9577\u62BC\u3057\u3067${p}`)),H("bombHave").classList.toggle("hide",f.carrier!==t),t.wantAct&&!f.planting&&!f.defusing&&p&&ho(t)}function sE(n,t){if(G.mode==="range"&&!n.isPlayer&&!n.alive){n.reviveT-=t,n.reviveT<=0&&Gb(n);return}n.sprint?(n.stamina=Math.max(0,n.stamina-t),n.sprintOutT=n.st.sprintOut):(n.stamina=Math.min(n.st.stamina,n.stamina+t*.8),n.sprintOutT>0&&(n.sprintOutT-=t));let i=n.targetEye()-n.eyeH,s=(n.stance==="prone"||n.eyeH<.8?1.6:2.6)*t,r=n.slideT>0||n.diveT>0;n.eyeH+=Math.abs(i)<=s||r?i*(r?Math.min(1,t*(n.diveT>0?7:14)):1):Math.sign(i)*s,n.stanceT=Math.abs(n.targetEye()-n.eyeH)>.12&&n.slideT<=0||n.diveT>0?.1:0;let o=n.adsWant&&n.alive&&n.boltT<=0&&n.reloadT<=0&&!n.sprint&&n.sprintOutT<=0&&n.stanceT<=0&&!(n.kickedOut&&n.boltT>0),a=n.ads;if(n.ads=In(n.ads+(o?t/n.st.ads:-t/.18),0,1),n.isPlayer&&a===0&&n.ads>0&&mt.play("cloth",{vol:.35,rate:1.3}),n.boltT>0){if(n.boltT-=t,n.isPlayer||n.pos.distanceTo(gt.pos)<25){let c=1-n.boltT/n.st.bolt;c>.25&&n.boltPlayed===0&&(n.boltPlayed=1,mt.play("bolt1",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3})),c>.6&&n.boltPlayed===1&&(n.boltPlayed=2,mt.play("bolt2",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3}),rE(n))}n.boltT<=0&&(n.boltT=0,n.kickedOut=!1,n.mag===0&&lo(n))}if(n.reloadT>0&&(n.reloadT-=t,n.reloadT<=0)){let c=Math.min(n.st.mag-n.mag,n.reserve);n.mag+=c,n.reserve-=c,n.reloadT=0}n.revealT>0&&(n.revealT-=t),n.alive&&n.hp<100&&(n.hurtT=(n.hurtT||0)+t,n.hurtT>5&&(n.hp=Math.min(100,n.hp+60*t)));let l=n.veg;l.root.position.set(n.pos.x,n.pos.y,n.pos.z),n.alive&&l.root.rotation.set(0,n.yaw,0),l.speed=Math.hypot(n.vel.x,n.vel.z)*(n.onGround?1:.3),l.run=n.sprint?1:0,l.crouch=Rs(l.crouch,n.stance==="crouch"||n.slideT>0?1:0,7,t),l.prone=Rs(l.prone,n.stance==="prone"?1:0,n.diveT>0?9:3.2,t),l.pitch=n.pitch,l.ads=n.ads,l.air=n.onGround?0:1,l.recoil=Rs(l.recoil,0,10,t),l.boltT=n.boltT>0?Math.sin((1-n.boltT/n.st.bolt)*Math.PI):0,n.lostArm[0]&&n.lostArm[1]&&(l.aim.visible=!1),l.update(t),l.gun.setBolt(n.boltT>0?In((1-n.boltT/n.st.bolt-.15)/.75,0,1):0)}function rE(n){let t=Rg(),e,i;n.isPlayer&&!ut.tpp?e=n.eye().add(n.dir().multiplyScalar(.5)).add(new ft(Math.cos(n.yaw)*.15,-.15,-Math.sin(n.yaw)*.15)):e=n.veg.gun.ejectPt.getWorldPosition(new ft),i=new ft(Math.cos(n.yaw)*2.2,2,-Math.sin(n.yaw)*2.2),t.position.copy(e),zt.add(t),Ma(t,i,new ft(20,5,10),{r:.008})}var f0=0,$u=0,pa=0,$g=74;function oE(n){if(ut.killcam&&$s&&$s.t>0&&!gt.alive&&G.phase!=="post"){$s.t-=n;let o=$s.by;if(o){let a=o.eye();xe.position.copy($s.at).add(new ft(0,.3,0));let l=new ft().subVectors(a,xe.position),c=Math.atan2(-l.x,-l.z),h=Math.atan2(l.y,Math.hypot(l.x,l.z));xe.rotation.set(h,c,0);let u=In(2.8-$s.t,0,1),d=nc($g,In(800/Math.max(5,l.length()),12,60),u);xe.fov=d,xe.updateProjectionMatrix(),H("kcam").classList.remove("hide"),H("kcamN").textContent=`${o.name}\uFF08HP ${Math.max(0,Math.round(o.hp))}\uFF09`,H("scope").style.display="none",H("cross").style.display="none",mt.listener.x=xe.position.x,mt.listener.z=xe.position.z,mt.listener.yaw=c;return}}H("kcam").classList.add("hide");let t=gt,e=ut.tpp;if(ri&&(!gt.alive||G.phase==="post")&&(t=(ri.alive,ri),e=!0,!t.alive)){let o=ye.find(a=>a.team===gt.team&&a.alive);o&&(ri=t=o)}let i=t.eye(),s=t===gt?t.ads:0;if(e&&s<.85){let o=t.stance==="prone"?2:2.6,a=t.dir(),l=new ft(Math.cos(t.yaw),0,-Math.sin(t.yaw)),c=i.clone().add(new ft(0,.32,0)).addScaledVector(l,.8),h=a.clone().multiplyScalar(-o),u=ao(c,h.clone().normalize(),o+.3),d=u?Math.max(.3,u.t-.3):o;xe.position.copy(c).addScaledVector(h.normalize(),d),xe.rotation.set(t.pitch,t.yaw,0)}else if(xe.position.copy(i),xe.rotation.set(t.pitch,t.yaw,0),t===gt){let o=Math.hypot(t.vel.x,t.vel.z)*(t.onGround?1:0)*(1-t.ads);f0+=n*o*1.9;let a=Math.min(1,o/5)*.035;xe.position.y+=Math.abs(Math.sin(f0))*a-$u,xe.rotation.z=Math.sin(f0)*a*.12,t.onGround?(pa>.25&&($u=.08*pa),pa=0):pa=Math.min(pa+n,1),$u=Rs($u,0,8,n)}if(t===gt&&t.ads>.5){let o=G.time,a=(t.st.stanceSway?t.stance==="prone"?6e-4:t.stance==="crouch"?.0015:.0026:.0022)*(1+Math.min(2,Math.hypot(t.vel.x,t.vel.z)))*t.st.sway;xe.rotation.x+=Math.sin(o*1.3)*a+Math.sin(o*2.7)*a*.4,xe.rotation.y+=Math.cos(o*.9)*a*1.2}Ts>0&&(Ts=Math.max(0,Ts-n),xe.rotation.x+=(Math.random()-.5)*Ts*.04,xe.rotation.y+=(Math.random()-.5)*Ts*.04),t===gt&&Zt.kick>.05&&(xe.rotation.x+=Zt.kick*.03);let r=nc($g,13,Math.pow(s,1.5));Math.abs(xe.fov-r)>.01&&(xe.fov=r,xe.updateProjectionMatrix()),mt.listener.x=xe.position.x,mt.listener.y=xe.position.y,mt.listener.z=xe.position.z,mt.listener.yaw=t.yaw,H("scope").style.display=s>.88&&t===gt?"block":"none",H("cross").style.display=s>.3||!gt.alive?"none":"block"}var v0=new Map;function aE(){for(let n of ye){let t=v0.get(n);t||(t=new Oo(new zr({map:e1,transparent:!0,blending:Vs,depthWrite:!1,depthTest:!0,fog:!1})),zt.add(t),v0.set(n,t));let e=n.alive&&!n.isPlayer&&n.ads>.6&&!n.veg.dead;if(t.visible=!1,!e)continue;let i=n.veg.gun.lens.getWorldPosition(new ft),s=new ft().subVectors(xe.position,i),r=s.length();s.normalize();let o=n.dir().dot(s);o<.85||(t.visible=!0,t.position.copy(i).addScaledVector(s,.05),t.scale.setScalar(In(r*.035,.25,2.5)*(.8+Math.random()*.3)*(o-.8)*4))}}var _0=H("minimap"),lE=_0.getContext("2d"),b0=[];function g1(){b0.length=0;for(let n of en.mm)b0.push(n)}function cE(){let n=_0.width,t=_0.height,e=lE,i=gt.alive||!ri?gt:ri;e.clearRect(0,0,n,t),e.save(),e.beginPath(),e.roundRect?e.roundRect(0,0,n,t,16):e.rect(0,0,n,t),e.clip(),e.fillStyle="rgba(40,60,40,.55)",e.fillRect(0,0,n,t);let s=n/46;e.translate(n/2,t/2),e.rotate(i.yaw),e.scale(s,s),e.translate(-i.pos.x,-i.pos.z),e.fillStyle="rgba(60,60,64,.9)",e.fillRect(-40,-4,80,8),e.fillStyle="rgba(150,150,140,.8)",e.fillRect(-40,-5.7,80,1.7),e.fillRect(-40,4,80,1.7);for(let a of b0)e.fillStyle=a[4],e.fillRect(a[0],a[1],a[2]-a[0],a[3]-a[1]);e.strokeStyle="rgba(255,255,255,.3)",e.lineWidth=.3,e.strokeRect(re.minX,re.minZ,re.maxX-re.minX,re.maxZ-re.minZ);for(let a of["A","B"]){let l=We[a];e.fillStyle="rgba(255,200,40,.35)",e.beginPath(),e.arc(l.x,l.z,2.4,0,7),e.fill(),e.save(),e.translate(l.x,l.z),e.rotate(-i.yaw),e.fillStyle="#ffd040",e.font="bold 3px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(a,0,0),e.restore()}let r=G.bomb;(r.state==="dropped"||r.state==="planted"||r.state==="carried"&&r.carrier&&r.carrier.team===gt.team)&&(e.save(),e.translate(r.pos.x,r.pos.z),e.rotate(-i.yaw),e.fillStyle=r.state==="planted"?Math.floor(G.time*4)%2?"#ff3020":"#ffd040":"#ffa020",e.fillRect(-1,-.7,2,1.4),e.restore());for(let a of ye){if(!a.alive)continue;let l=a.team===gt.team;!l&&a.revealT<=0&&!(a.ai&&a.ai.target===gt&&a.ads>.5&&!1)||(e.save(),e.translate(a.pos.x,a.pos.z),e.rotate(-a.yaw),a===gt?(e.fillStyle="#ffe060",e.beginPath(),e.moveTo(0,-1.8),e.lineTo(1.2,1.2),e.lineTo(0,.5),e.lineTo(-1.2,1.2),e.closePath(),e.fill()):(e.fillStyle=l?"#4aa8ff":"#ff4030",e.beginPath(),e.arc(0,0,1,0,7),e.fill(),l&&(e.beginPath(),e.moveTo(0,-2),e.lineTo(.7,-.6),e.lineTo(-.7,-.6),e.fill())),e.restore())}e.restore(),e.fillStyle="rgba(255,255,255,.7)",e.font="bold 20px sans-serif",e.textAlign="center";let o=i.yaw;e.save(),e.translate(n/2,t/2),e.rotate(o),e.fillText("N",0,-t/2+22),e.restore()}function hE(n){let t=gt;Cr.classList.toggle("dead",!t.alive);let e=Math.max(0,(G.phase==="pre",G.timer)),i=Math.floor(e/60),s=Math.floor(e%60);H("timer").textContent=G.mode==="range"?"\u221E":G.phase==="pre"?Math.ceil(e)+"":`${i}:${String(s).padStart(2,"0")}`,H("timer").classList.toggle("bomb",G.phase==="planted"),H("amC").textContent=t.mag,H("amR").textContent=t.reserve,H("amS").textContent=t.reloadT>0?"\u30EA\u30ED\u30FC\u30C9\u4E2D\u2026":t.boltT>0?"\u30DC\u30EB\u30C8\u64CD\u4F5C\u4E2D\u2026":t.st.name,H("hpf").style.width=Math.max(0,t.hp)+"%",H("hpf").classList.toggle("low",t.hp<50);let r=ye.filter(c=>c.team===0),o=ye.filter(c=>c.team===1),a=(c,h)=>H(c).classList.toggle("dead",!(h&&h.alive));a("ia0",r[0]),a("ia1",r[1]),a("ie0",o[0]),a("ie1",o[1]),Ju>0&&(Ju-=n,Ju<=0&&(H("killnote").innerHTML="")),Ql>0&&(Ql-=n,Ql<=0&&(H("cmsg").textContent="",H("csub").textContent="")),Ku>0&&(Ku-=n,H("hitmark").style.opacity=Math.max(0,Ku/.25)),G.phase==="pre"&&(H("cmsg").textContent=Math.ceil(G.timer)<=3?Math.ceil(G.timer):`\u30E9\u30A6\u30F3\u30C9 ${G.round}`,Ql=.2),cE(),dE();let l="";if(gt.alive){let c=xe.position,h=new ft(0,0,-1).applyQuaternion(xe.quaternion),u=ao(c,h,150),d=u?u.t:150;for(let f of ye)if(!(f.team===gt.team||!f.alive)){for(let p of f.veg.computeHitSpheres()){let g=P0(c,h,p.c,p.r*1.6);if(g>0&&g<d){l=f.name;break}}if(l)break}}H("aimName").textContent=l}var E0=new Map;function uE(n,t,e,i){let s=E0.get(n);s||(s=document.createElement("div"),H("marks").appendChild(s),E0.set(n,s));let r=i.clone().project(xe),o=r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1;s.style.display=o?"block":"none",o&&(s.className="mk "+t,s._h!==e&&(s.innerHTML=e,s._h=e),s.style.left=(r.x+1)/2*100+"%",s.style.top=(1-r.y)/2*100+"%")}function dE(){let n=new Set,t=gt.alive||!ri?gt:ri,e=gt.ads>.88,i=(o,...a)=>{n.add(o),e||uE(o,...a)};for(let o of ye)o!==gt&&o!==ri&&o.team===gt.team&&o.alive&&i("n"+o.name,"ally",`${o.name}<span class="ar"></span>`,o.eye().add(new ft(0,.55,0)));let s=G.bomb,r=o=>Math.round(o.distanceTo(t.pos))+"m";if(G.phase==="live"&&(s.carrier===gt||gt.team!==G.attack||s.carrier?.team===gt.team))for(let o of["A","B"])i("s"+o,"site",`<i>${o}</i><small>${r(We[o])}</small>`,We[o].clone().add(new ft(0,2.2,0)));s.state==="planted"&&i("bomb","bomb",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new ft(0,1.2,0))),s.state==="dropped"&&gt.team===G.attack&&i("bombd","bomb drop",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new ft(0,1,0)));for(let[o,a]of E0)(!n.has(o)||e||G.phase==="post")&&(a.style.display="none")}function fE(){ws||(ws=Yb(),zt.add(ws));let n=G.bomb;if(ws.visible=n.state==="dropped"||n.state==="planted"||n.state==="defused"||!!n.planting,n.planting&&n.state!=="planted"){let t=n.planting;t.stance="crouch";let e=new ft(-Math.sin(t.yaw),0,-Math.cos(t.yaw));n.pos.copy(t.pos).addScaledVector(e,.55),n.pos.y=ls(n.pos.x,n.pos.z,t.pos.y+.3)}n.defusing&&(n.defusing.stance="crouch"),ws.visible&&(ws.position.copy(n.pos),ws.userData.scr.material.color.setHex(n.state==="planted"&&Math.floor(G.time*(n.fuse<6?8:2))%2?16724e3:4198416),n.state==="dropped"&&(ws.rotation.y+=.02))}var Ti=null,p0=0,Ar={look:.6,dist:2.9,side:-1.2,shift:.2},va=["carrot","tomato","potato","pepper"],pE={carrot:"\u7D30\u8EAB\u3067\u982D\u304C\u5C0F\u3055\u3044",tomato:"\u307E\u3093\u307E\u308B\u3002\u3064\u3084\u3064\u3084",potato:"\u305A\u3063\u3057\u308A\u3002\u3067\u3053\u307C\u3053",pepper:"\u3064\u3084\u3064\u3084\u306E\u7DD1"};function hc(){window.VW_INGAME=!1,X.on&&(X.on=!1),H("againBtn").textContent=X.room?"\u90E8\u5C4B\u306B\u623B\u308B":"\u3082\u3046\u4E00\u5EA6",G.phase="lobby";for(let n of ye)n.dispose();ye=[],gt=null,L0(),ws&&(ws.visible=!1);for(let n of v0.values())n.visible=!1;if(H("hud").classList.add("hide"),H("ctl").classList.add("hide"),H("lobby").classList.remove("hide"),H("result").classList.add("hide"),H("pause").classList.add("hide"),H("helpTxt").innerHTML=Ai?"\u5DE6\u5074\u3092\u306A\u305E\u3063\u3066\u79FB\u52D5\uFF08\u4E0A\u306B\u5012\u3057\u304D\u308B\u3068\u30C0\u30C3\u30B7\u30E5\uFF09<br>\u53F3\u5074\u3092\u306A\u305E\u3063\u3066\u8996\u70B9<br>\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F\u30FB\u96E2\u3059\u3068\u767A\u5C04<br>\u6483\u3061\u305F\u304F\u306A\u3044\u6642\u306F\u300C\xD7\u6483\u305F\u306A\u3044\u300D\u306E\u4E0A\u3067\u6307\u3092\u96E2\u3059<br>\u30C0\u30C3\u30B7\u30E5\u4E2D\u306B\u4F0F\u305B\u308B\u3068\u98DB\u3073\u8FBC\u307F<br>\u53F3\u306E\u7167\u6E96\u30DC\u30BF\u30F3\uFF1A\u8997\u304D\u3063\u3071\u306A\u3057\u306B\u5207\u66FF<br>\u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09\u30FB\u4F0F\u305B\u30FB\u30B8\u30E3\u30F3\u30D7<br>\u30B5\u30A4\u30C8\u3067\u300C\u8A2D\u7F6E\u300D\u300C\u89E3\u9664\u300D\u3092\u9577\u62BC\u3057":"WASD \u79FB\u52D5 / Shift \u30C0\u30C3\u30B7\u30E5 / Alt \u305D\u30FC\u3063\u3068\u6B69\u304F<br>\u30DE\u30A6\u30B9 \u8996\u70B9 / \u5DE6\u30AF\u30EA\u30C3\u30AF \u6483\u3064 / \u53F3\u30AF\u30EA\u30C3\u30AF \u8997\u304F<br>Space \u30B8\u30E3\u30F3\u30D7 / C \u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09 / Z \u4F0F\u305B\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u98DB\u3073\u8FBC\u307F\uFF09<br>R \u30EA\u30ED\u30FC\u30C9 / F \u9577\u62BC\u3057\u3067\u8A2D\u7F6E\u30FB\u89E3\u9664 / V \u8996\u70B9\u5207\u66FF",Lr(),mt.bgm(!1),typeof Zg=="function")try{Zg()}catch{}}function Lr(){Ti&&zt.remove(Ti.root),Ti=new Tr(ut.kind,0,{lod:1,hat:ut.hat,camo:ut.camo,lo:ut.lo}),zt.add(Ti.root),H("hatName").textContent=Rr.find(e=>e.id===ut.hat).name,H("camoName").textContent=la.find(e=>e.id===ut.camo).name;let[n,t]=en.lobby;Ti.root.position.set(n,.15+(en.id==="town"?0:-.13),t),H("charName").innerHTML=`${si[ut.kind]}<small>${pE[ut.kind]}</small>`}function mE(n){p0+=n;let t=Ti;if(!t)return;t.root.rotation.y=Math.PI+.5+Math.sin(p0*.4)*.25,t.speed=0,t.pitch=-.15+Math.sin(p0*.7)*.03,t.run=0,t.ads=0,t.update(n);let[e,i]=en.lobby;xe.position.set(e+Ar.side,1.2,i+Ar.dist),xe.lookAt(e+Ar.look,1,i),Ar.fix&&(xe.position.set(...Ar.fix[0]),xe.lookAt(...Ar.fix[1]));{let s=rc(),r=oc();xe.setViewOffset(s,r,-s*Ar.shift,0,s,r)}Math.abs(xe.fov-50)>.01&&(xe.fov=50,xe.updateProjectionMatrix())}H("prevC").onclick=()=>{ut.kind=va[(va.indexOf(ut.kind)+3)%4],vi(),Lr(),mt.resume(),mt.play("ui")};H("nextC").onclick=()=>{ut.kind=va[(va.indexOf(ut.kind)+1)%4],vi(),Lr(),mt.resume(),mt.play("ui")};var cd=(n,t,e)=>{let i=n.findIndex(s=>s.id===ut[t]);ut[t]=n[(i+e+n.length)%n.length].id,vi(),Lr(),mt.resume(),mt.play("ui")};H("hatP").onclick=()=>cd(Rr,"hat",-1);H("hatN").onclick=()=>cd(Rr,"hat",1);H("camoP").onclick=()=>cd(la,"camo",-1);H("camoN").onclick=()=>cd(la,"camo",1);var Ae={r:null,scene:null,cam:null,gun:null,key:"",t:0,on:!1};function gE(){let n=H("loPrev");if(!n)return;if(!Ae.r){Ae.r=new Rl({antialias:!0,alpha:!0}),Ae.r.outputColorSpace=Mn,Ae.r.toneMapping=xr,Ae.r.setPixelRatio(Math.min(devicePixelRatio,2)),n.appendChild(Ae.r.domElement),Ae.scene=new Gs,Ae.scene.add(new $r(14674175,4208688,1.4));let e=new fr(16773344,2.6);e.position.set(1.5,2,1.2),Ae.scene.add(e);let i=new fr(10139903,1.2);i.position.set(-2,.5,-1.5),Ae.scene.add(i),zt.environment&&(Ae.scene.environment=zt.environment),Ae.cam=new kn(30,2,.01,20),Ae.cam.position.set(0,.1,1.75),Ae.cam.lookAt(0,0,0)}let t=ut.camo+JSON.stringify(ut.lo);if(t!==Ae.key){Ae.key=t,Ae.gun&&Ae.scene.remove(Ae.gun);let e=ca(1,ut.camo,ut.lo);Ae.gun=new Pt,e.root.position.set(0,0,.1),Ae.gun.add(e.root),Ae.gun.scale.setScalar(1.6),Ae.scene.add(Ae.gun)}if(!Ae.on){Ae.on=!0;let e=()=>{if(H("loM").classList.contains("hide")){Ae.on=!1;return}requestAnimationFrame(e);let i=n.clientWidth,s=n.clientHeight;i&&s&&(Ae.r.domElement.width!==Math.round(i*Ae.r.getPixelRatio())&&(Ae.r.setSize(i,s,!1),Ae.cam.aspect=i/s,Ae.cam.updateProjectionMatrix()),Ae.t+=.012,Ae.gun.rotation.y=Math.PI/2+Math.sin(Ae.t)*.6,Ae.gun.rotation.x=Math.sin(Ae.t*.7)*.08,Ae.r.render(Ae.scene,Ae.cam))};requestAnimationFrame(e)}}function uc(){let n=ut.lo,t=os[n.rifle];H("loName").textContent=t.name,H("loName2")&&(H("loName2").textContent=t.name);let e=n.att.map(s=>$l.find(r=>r.id===s).name).join("\u30FB")||"\u30A2\u30BF\u30C3\u30C1\u30E1\u30F3\u30C8\u306A\u3057",i=n.perks.map((s,r)=>(Zl[r].find(o=>o.id===s)||Zl[r][0]).name).filter(s=>s!=="\u306A\u3057").join("\u30FB")||"\u30D1\u30FC\u30AF\u306A\u3057";H("loSub").innerHTML=`${e}<br>${i}`,H("modeTxt").innerHTML=`\u547D\u306F1\u30E9\u30A6\u30F3\u30C91\u3064\u3002<br>\u7206\u5F3E\u306E\u7206\u7834\u304B\u3001\u6575\u306E\u5168\u6EC5\u3067\u52DD\u3061\u3002<br>${ut.winR}\u30E9\u30A6\u30F3\u30C9\u5148\u53D6\u30FB${ut.swap===1?"\u6BCE\u30E9\u30A6\u30F3\u30C9":ut.swap+"\u30E9\u30A6\u30F3\u30C9\u3054\u3068\u306B"}\u653B\u5B88\u4EA4\u4EE3\u3002`}function xa(n){let t=ut.lo;H("rifleList").innerHTML=Object.values(os).map(e=>`<div class="rf${t.rifle===e.id?" on":""}" data-r="${e.id}"><b>${e.name}</b><small>${e.tag}\u30FB\u5F3E${e.mag}\u767A<br>${e.spec}</small><div class="bars">${Object.entries(e.stats).map(([i,s])=>`<span>${i}</span><i><u style="width:${s*20}%"></u></i>`).join("")}</div></div>`).join(""),H("rifleList").querySelectorAll(".rf").forEach(e=>e.onclick=()=>{t.rifle=e.dataset.r,vi(),mt.play("ui"),xa(os[t.rifle].desc),Lr()}),H("attCnt").textContent=`${t.att.length}/2`,H("attList").innerHTML=$l.map(e=>{let i=t.att.includes(e.id),s=!i&&(t.att.length>=2||e.ex&&t.att.includes(e.ex));return`<button data-a="${e.id}" class="${i?"on":s?"no":""}">${e.name}</button>`}).join(""),H("attList").querySelectorAll("button").forEach(e=>e.onclick=()=>{let i=e.dataset.a,s=$l.find(o=>o.id===i),r=t.att.indexOf(i);r>=0?t.att.splice(r,1):(s.ex&&t.att.includes(s.ex)&&t.att.splice(t.att.indexOf(s.ex),1),t.att.length>=2&&t.att.shift(),t.att.push(i)),vi(),mt.play("ui"),xa(s.name+"\uFF1A"+s.desc+(s.ex?`
\u203B${$l.find(o=>o.id===s.ex).name}\u3068\u306F\u540C\u6642\u306B\u4ED8\u3051\u3089\u308C\u307E\u305B\u3093\u3002`:""))});for(let[e,i,s]of[["tacList",Hg,"tac"],["letList",kg,"let"]])H(e).innerHTML=i.map(r=>`<button data-x="${r.id}" class="${(t[s]||"none")===r.id?"on":""}">${r.name}</button>`).join(""),H(e).querySelectorAll("button").forEach(r=>r.onclick=()=>{t[s]=r.dataset.x,vi(),mt.play("ui");let o=i.find(a=>a.id===r.dataset.x);xa(o.desc?o.name+"\uFF1A"+o.desc:"")});[0,1,2].forEach(e=>{H("perk"+e).innerHTML=Zl[e].map(i=>`<button data-p="${i.id}" class="${t.perks[e]===i.id?"on":""}">${i.name}</button>`).join(""),H("perk"+e).querySelectorAll("button").forEach(i=>i.onclick=()=>{t.perks[e]=i.dataset.p,vi(),mt.play("ui");let s=Zl[e].find(r=>r.id===i.dataset.p);xa(s.desc?s.name+"\uFF1A"+s.desc:"")})}),n!==void 0&&(H("loDesc").textContent=n),uc(),gE()}(!ut.lo||!os[ut.lo.rifle])&&(ut.lo=JSON.parse(JSON.stringify(s0)));ut.lo.tac===void 0&&(ut.lo.tac="smoke");ut.lo.let===void 0&&(ut.lo.let="axe");H("loCard").onclick=()=>{mt.resume(),mt.play("ui"),xa(os[ut.lo.rifle].desc),H("loM").classList.remove("hide")};H("loClose").onclick=()=>{H("loM").classList.add("hide"),vi(),uc(),Lr(),ld()};uc();function O0(){let n=Bi[ut.map]||en;H("mapName").textContent=n.name,H("mapDesc").textContent=n.desc}O0();H("mapChip").onclick=()=>{if(X.room){dc();return}let n=Object.keys(Bi);ut.map=n[(n.indexOf(ut.map)+1)%n.length],vi(),mt.play("ui"),O0(),H("ldTxt").textContent=`\u30DE\u30C3\u30D7\u300C${Bi[ut.map].name}\u300D\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026`,H("loading").classList.remove("hide"),setTimeout(()=>location.reload(),150)};var qe=Yu();function Zg(){qe=Yu();let n=Es(qe.rp);H("rankChip").innerHTML=`${fa(n.tier.id,34,n.div)}<span>${n.label}\u3000${qe.rp} RP</span>`,H("mRankSub").textContent=`${n.label}\u30FB\u53C2\u52A0\u8CBB ${n.tier.fee} RP\u30FB8\u30E9\u30A6\u30F3\u30C9\u5148\u53D6`,H("loName2").textContent=os[ut.lo.rifle].name}function xE(n,t){H("infoT").textContent=n,H("infoB").innerHTML=t,H("infoM").classList.remove("hide")}H("infoClose").onclick=()=>H("infoM").classList.add("hide");function H0(n){ut.homeMode=n,vi(),H("mCasual").classList.toggle("sel",n==="casual"),H("mRank").classList.toggle("sel",n==="rank");let t=Bi[ut.map]||en;H("goSub").textContent=`${n==="rank"?"\u30E9\u30F3\u30AF":"\u30AB\u30B8\u30E5\u30A2\u30EB"}\u30FB${t.name}`}H("mCasual").onclick=()=>{mt.resume(),mt.play("ui"),H0("casual")};H("mRank").onclick=()=>{mt.resume(),mt.play("ui"),H0("rank")};H("goBtn").onclick=()=>k0(ut.homeMode==="rank"?"rank":"casual");H("skinBtn").onclick=()=>{mt.resume(),mt.play("ui");let n=H("loadout").classList.toggle("hide");H("skinBtn").classList.toggle("on",!n)};H0(ut.homeMode==="rank"?"rank":"casual");H("mRange").onclick=()=>k0("range");H("mLoad").onclick=()=>{mt.resume(),mt.play("ui"),xa(os[ut.lo.rifle].desc),H("loM").classList.remove("hide")};H("mFriend").onclick=()=>{mt.resume(),mt.play("ui"),dc()};H("mCareer").onclick=()=>{mt.play("ui"),qe=Yu();let n=Es(qe.rp),t=Es(qe.best),e=qe.badges.length?qe.badges.map(i=>`<div>${fa(i.tier,54)}<br>${o0(i.season)}<br>${as.find(s=>s.id===i.tier).name}</div>`).join(""):'<div style="opacity:.7">\u307E\u3060\u30B7\u30FC\u30BA\u30F3\u30D0\u30C3\u30B8\u306F\u3042\u308A\u307E\u305B\u3093\u3002<br>\u30B7\u30FC\u30BA\u30F3\u304C\u7D42\u308F\u308B\u3068\u3001\u305D\u306E\u6708\u306B\u5C4A\u3044\u305F\u4E00\u756A\u9AD8\u3044\u6BB5\u968E\u306E\u30D0\u30C3\u30B8\u304C\u3082\u3089\u3048\u307E\u3059\u3002</div>';xE("\u30AD\u30E3\u30EA\u30A2",`<div class="loGrid"><div><div class="rkHead">${fa(n.tier.id,80,n.div)}<div><div class="nm">${n.label}</div><small>${o0(qe.season)}\u30FB\u6700\u9AD8 ${t.label}</small><div class="rkBar"><i style="width:${n.progress*100}%"></i></div><small>${qe.rp} RP\uFF08\u6B21\u307E\u3067 ${Math.max(0,n.hi-qe.rp)} RP\uFF09</small></div></div>
  <div class="rpList">\u30E9\u30F3\u30AF\u8A66\u5408 ${qe.games}\u3000\u52DD\u5229 ${qe.wins}\u3000\u30AD\u30EB ${qe.kills}</div>
  <h4 style="margin:calc(1*var(--vh)) 0 calc(.3*var(--vh));color:#aab">\u30B7\u30FC\u30BA\u30F3\u30D0\u30C3\u30B8</h4><div class="tiers">${e}</div></div>
  <div><h4 style="margin:0 0 calc(.3*var(--vh));color:#aab">\u6BB5\u968E\u3068\u30DD\u30A4\u30F3\u30C8\u306E\u4ED5\u7D44\u307F</h4><div class="tiers">${as.map(i=>`<div>${fa(i.id,44)}<br>${i.name}<br>${i.min}\u301C</div>`).join("")}</div>
  <div class="rpList" style="margin-top:calc(1*var(--vh))">\u52DD\u5229 +100\uFF0F\u53D6\u3063\u305F\u30E9\u30A6\u30F3\u30C9 1\u3064 +10\uFF0F\u30AD\u30EB +12\uFF0F\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8 +4\uFF0FMVP +20<br>\u8A66\u5408\u3054\u3068\u306B\u53C2\u52A0\u8CBB\uFF08\u30EB\u30FC\u30AD\u30FC0\u301C\u30D9\u30B8\u30AD\u30F3\u30B075\uFF09\u3092\u5F15\u304D\u307E\u3059\u3002<br>\u6BB5\u968E\u306E\u4E00\u756A\u4E0B\u3088\u308A\u4E0B\u306B\u306F\u843D\u3061\u307E\u305B\u3093\u3002<br>\u6BCE\u6708\u65B0\u3057\u3044\u30B7\u30FC\u30BA\u30F3\u3002\u59CB\u307E\u308B\u3068\u5C11\u3057\u4E0B\u306E\u6BB5\u968E\u304B\u3089\u518D\u30B9\u30BF\u30FC\u30C8\u3002</div></div></div>`)};async function k0(n){G.mode=n,await mt.init(),mt.resume(),mt.play("ui"),Ti&&(zt.remove(Ti.root),Ti=null),xe.clearViewOffset(),H("lobby").classList.add("hide"),H("hud").classList.remove("hide"),H("ctl").classList.remove("hide"),H("camBtn").textContent=ut.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0";try{Ai&&document.documentElement.requestFullscreen&&!document.fullscreenElement&&await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}Ai||De.domElement.requestPointerLock(),o1(),ut.bgm&&n!=="range"&&mt.bgm(!0),mt.wind(!0)}H("startBtn").onclick=()=>k0("casual");H("againBtn").onclick=()=>{if(X.on){H("result").classList.add("hide"),hc(),dc();return}H("result").classList.add("hide"),H("ctl").classList.remove("hide"),o1(),ut.bgm&&mt.bgm(!0)};H("setBtn").onclick=()=>H("settings").classList.remove("hide");H("toLobby").onclick=()=>hc();function G0(n){n?(G.paused=!0,H("pause").classList.remove("hide"),document.pointerLockElement&&document.exitPointerLock()):(G.paused=!1,H("pause").classList.add("hide"),!Ai&&gt&&De.domElement.requestPointerLock())}H("resumeBtn").onclick=()=>G0(!1);H("quitBtn").onclick=()=>{G.paused=!1,mt.wind(!1),X.on&&E1(),hc()};H("pSetBtn").onclick=()=>H("settings").classList.remove("hide");H("setBtn").onclick=()=>H("settings").classList.remove("hide");H("setClose").onclick=()=>{H("settings").classList.add("hide"),vi()};H("sens").value=ut.sens;H("sensAds").value=ut.sensAds;H("sens").oninput=n=>ut.sens=+n.target.value;H("sensAds").oninput=n=>ut.sensAds=+n.target.value;function Dr(n,t,e){let i=H(n);i.querySelectorAll("button").forEach(s=>{s.classList.toggle("on",String(ut[t])===s.dataset.v),s.onclick=()=>{ut[t]=isNaN(+s.dataset.v)?s.dataset.v:+s.dataset.v,i.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r===s)),vi(),e&&e()}})}Dr("fireMode","fireMode");Dr("winR","winR",uc);Dr("swapSeg","swap",uc);Dr("kcSeg","killcam");Dr("lfSeg","leftFire",u1);Dr("diff","diff");Dr("bgmSeg","bgm",()=>{G.phase!=="lobby"&&mt.bgm(!!ut.bgm)});Dr("quality","quality",()=>{Is("","\u753B\u8CEA\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002\u6B21\u306B\u958B\u3044\u305F\u3068\u304D\u304B\u3089\u53CD\u6620\u3055\u308C\u307E\u3059",2)});var Jg=performance.now(),Zu=0,m0=0;function x1(n){requestAnimationFrame(x1);let t=Math.min(.05,(n-Jg)/1e3);if(Jg=n,Zu+=t,m0++,Zu>2){let e=m0/Zu;Zu=0,m0=0,e<40&&Ys>.75?(Ys=Math.max(.75,Ys-.15),De.setPixelRatio(Ys),oo()):e>58&&Ys<Math.min(devicePixelRatio,ut.quality===2?2:1.5)&&(Ys=Math.min(Ys+.1,2),De.setPixelRatio(Ys),oo())}if(innerWidth+"x"+innerHeight+":"+Gi!==jg&&oo(),G.phase==="lobby"){mE(t),jl();return}if(!gt||G.paused&&!X.on){jl();return}if(G.phase==="end"){jl();return}y1(t),jl()}function y1(n){let t=n;G.slowmo>0&&(G.slowmo-=n,t=n*.25),qb(t),iE(t);for(let e of ye)e.ai?Jb(e,t):e.net&&SE(e,t);X.on&&EE(n);for(let e of ye)sE(e,t);Ub(t),gt.blindT>0&&(gt.blindT-=t),H("flashOv").style.opacity=In((gt.blindT||0)/1.2,0,1),bb(t),fE(),aE(),oE(n),hE(n)}var tc={id:"base",outline:null},g0=new Map,ma;function M1(n){tc.id=n;let t=De.domElement,e=document.getElementById("lookVig")||(()=>{let s=document.createElement("div");return s.id="lookVig",s.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:1",document.body.appendChild(s),s})();if(T0(ut.map),De.toneMappingExposure=1.05,t.style.filter="",e.style.background="",tc.outline=null,zt.fog.near=60,zt.fog.far=210,n==="pop")De.toneMappingExposure=1.22,Yn.intensity*=1.45,Yn.color.setHex(13625599),Yn.groundColor.setHex(10141808),xn.intensity*=1.1,yi.material.uniforms.top.value.setRGB(.12,.45,.95),yi.material.uniforms.hor.value.setRGB(.7,.88,1),zt.fog.color.setHex(13625087),t.style.filter="saturate(1.4) contrast(1.06)",e.style.background="radial-gradient(ellipse at center,transparent 62%,rgba(20,40,90,.25))";else if(n==="ivory")De.toneMappingExposure=.95,xn.color.setHex(16765600),xn.intensity*=.8,Yn.color.setHex(15259840),Yn.groundColor.setHex(5917242),Yn.intensity*=.9,yi.material.uniforms.top.value.setRGB(.55,.58,.62),yi.material.uniforms.hor.value.setRGB(.92,.84,.72),zt.fog.color.setHex(14207148),zt.fog.near=18,zt.fog.far=110,t.style.filter="saturate(.72) sepia(.22) contrast(1.1)",e.style.background="radial-gradient(ellipse at center,transparent 45%,rgba(40,24,12,.55))";else if(n==="mix")De.toneMappingExposure=1.12,Yn.intensity*=1.25,Yn.color.setHex(14674175),xn.color.setHex(16769208),yi.material.uniforms.top.value.setRGB(.2,.42,.78),yi.material.uniforms.hor.value.setRGB(.95,.86,.76),zt.fog.color.setHex(15128772),zt.fog.near=30,zt.fog.far=150,t.style.filter="saturate(1.12) contrast(1.08)",e.style.background="radial-gradient(ellipse at center,transparent 50%,rgba(30,20,40,.45))";else if(n==="toon"){if(De.toneMappingExposure=1.1,Yn.intensity*=1.3,!ma){let s=new Uint8Array([150,205,255]);ma=new Vr(s,3,1,$o),ma.minFilter=ma.magFilter=gn,ma.needsUpdate=!0}zt.traverse(s=>{if(!s.isMesh||!s.material||s===yi||Array.isArray(s.material)||s.material.isShaderMaterial||s.material.transparent)return;let r=s.material;g0.has(r)||g0.set(r,new sl({color:r.color,map:r.map,gradientMap:ma,side:r.side})),s.userData.baseMat=s.userData.baseMat||r,s.material=g0.get(r)}),tc.outline=new mu(De,{defaultThickness:.005,defaultColor:[.12,.08,.06]}),t.style.filter="saturate(1.25)"}n!=="toon"&&zt.traverse(s=>{s.isMesh&&s.userData.baseMat&&(s.material=s.userData.baseMat)});let i=n==="A"||n==="B"?n:null;Si.on=!!i,De.shadowMap.type=i?mr:ut.quality>0?hl:pr,De.shadowMap.needsUpdate=!0,xn.shadow.radius=i?7:1,xn.shadow.blurSamples=12,xn.shadow.bias=i?-6e-4:-4e-4,i==="A"?(De.toneMappingExposure=.95,Yn.intensity*=1.2,Yn.color.setHex(14216447),Yn.groundColor.setHex(13157536),xn.color.setHex(16773334),xn.intensity*=.95,yi.material.uniforms.top.value.setRGB(.1,.42,1),yi.material.uniforms.hor.value.setRGB(.72,.9,1),zt.fog.color.setHex(12903167),zt.fog.near=35,zt.fog.far=170,t.style.filter="saturate(1.1)",e.style.background="radial-gradient(ellipse at 60% 50%,transparent 58%,rgba(10,30,80,.22))",Si.set({bloom:[0,.5,1],blur:[.0012,.0025]})):i==="B"&&(De.toneMappingExposure=.92,xn.color.setHex(16762010),xn.intensity*=.62,Yn.color.setHex(12891360),Yn.groundColor.setHex(4865096),Yn.intensity*=1.2,yi.material.uniforms.top.value.setRGB(.2,.18,.34),yi.material.uniforms.hor.value.setRGB(.88,.7,.64),zt.fog.color.setHex(11049130),zt.fog.near=10,zt.fog.far=85,t.style.filter="saturate(.78) contrast(1.06) brightness(1.02)",e.style.background="radial-gradient(ellipse at 60% 50%,transparent 50%,rgba(28,14,34,.45))",Si.set({bloom:[0,.5,1],blur:[.0015,.003]})),i!==xi.id&&(Ig(i),G.phase==="lobby"&&Lr())}var Si={on:!1,comp:null,bloom:null,bokeh:null,init(){if(this.comp)return;let n=rc(),t=oc();this.comp=new yu(De),this.comp.setPixelRatio(Math.min(De.getPixelRatio(),1.5)),this.comp.setSize(n,t),this.comp.addPass(new Mu(zt,xe)),this.bokeh=new vu(zt,xe,{focus:3,aperture:.01,maxblur:.006}),this.comp.addPass(this.bokeh),this.bloom=new ea(new lt(n/2,t/2),.4,.5,.85),this.comp.addPass(this.bloom),this.comp.addPass(new _u)},set(n){this.init(),[this.bloom.strength,this.bloom.radius,this.bloom.threshold]=n.bloom,this.blur=n.blur}};function jl(){if(Kf.time.value=performance.now()/1e3,De.clear(),Si.on&&Si.comp){let n=G.phase==="lobby"&&Ti,t=Si.bokeh.uniforms;t.focus.value=n?xe.position.distanceTo(Ti.root.position.clone().add(new ft(0,1,0))):6,t.aperture.value=n?Si.blur[0]:Si.blur[0]*.15,t.maxblur.value=n?Si.blur[1]:Si.blur[1]*.3,Si.comp.render()}else tc.outline?tc.outline.render(zt,xe):De.render(zt,xe);G.phase!=="lobby"&&gt&&Zt.root.visible&&(De.clearDepth(),De.render(Ks,As))}eE();nE();g1();var yE="wss://vw-room.hakopen.workers.dev/",X={on:!1,ws:null,room:null,cid:"",host:!1,hostId:null,flip:0,members:[],map:null,rules:{winR:6,swap:3},sendT:0,allowEnd:!1,retry:0,status:""};try{X.cid=sessionStorage.getItem("vw_cid")||Math.random().toString(36).slice(2,10),sessionStorage.setItem("vw_cid",X.cid)}catch{X.cid=Math.random().toString(36).slice(2,10)}var ec=n=>[+n.x.toFixed(2),+n.y.toFixed(2),+n.z.toFixed(2)],w0=n=>new ft(n[0],n[1],n[2]),v1=["stand","crouch","prone"];function _a(n){return n===gt||X.host&&!!n.ai}function oi(n){X.dbg&&n.t!=="s"&&X.dbg.push(">"+n.t+":"+(X.ws?X.ws.readyState:"x")),X.ws&&X.ws.readyState===1&&X.ws.send(JSON.stringify(n))}function _1(){return X.flip?[G.score[1],G.score[0]]:[G.score[0],G.score[1]]}function Hi(n){return ye.find(t=>t.nid===n)}function b1(){return{path:null,pi:0,goal:null,repath:0,think:0,target:null,seen:0,heard:null,hold:null,holdT:0,strafe:0,aimErr:new ft,mode:"obj",crouchT:0,site:Math.random()<.5?"A":"B"}}function x0(){return{cid:X.cid,nick:(ut.nick||si[ut.kind]).slice(0,10),kind:ut.kind,hat:ut.hat,camo:ut.camo,lo:ut.lo}}function ME(n){Is("",n,3)}var ju=[];function z0(n){if(!Bi[n]||n===en.id&&ju.length){ut.map=n;return}for(let e of ju)zt.remove(e),e.traverse&&e.traverse(i=>{i.geometry&&i.geometry.dispose()});ut.map=n,vi();let t=new Set(zt.children);nd=Jf(zt,n),Js=nd.colliders,T0(n),C0=Js.filter(e=>e.bullet),A0=new Yl(Js),ju=zt.children.filter(e=>!t.has(e)),g1(),O0(),G.phase==="lobby"&&Lr()}function ad(n){V0(),X.room=n,X.members=[],X.host=!1,X.hostId=null;try{sessionStorage.setItem("vw_room",n)}catch{}let t=new WebSocket(`${yE}?room=${n}&cid=${X.cid}`);X.ws=t,X.status="\u63A5\u7D9A\u4E2D\u2026",ki(),t.onopen=()=>{X.retry=0},t.onmessage=e=>{if(e.data==="pong")return;let i;try{i=JSON.parse(e.data)}catch{return}X.dbg&&i.t!=="s"&&X.dbg.push("<"+i.t+(X.ws===t?"":"(old)"));try{_E(i)}catch(s){console.error(s)}},t.onclose=()=>{X.ws===t&&(X.ws=null,X.on&&w1("\u901A\u4FE1\u304C\u5207\u308C\u307E\u3057\u305F"),X.status="\u518D\u63A5\u7D9A\u4E2D\u2026",ki(),X.room&&X.retry++<5?setTimeout(()=>{X.room&&!X.ws&&ad(X.room)},1500):(X.status="\u3064\u306A\u304C\u308A\u307E\u305B\u3093",ki()))}}function V0(){if(X.ws){let n=X.ws;X.ws=null;try{n.close()}catch{}}}function E1(){X.room=null;try{sessionStorage.removeItem("vw_room")}catch{}V0(),X.on=!1,X.members=[],X.host=!1,ki()}setInterval(()=>{X.ws&&X.ws.readyState===1&&!X.on&&X.ws.send("ping")},25e3);function w1(n){X.on=!1,hc(),dc(),ME(n)}function ya(){X.host&&(oi({t:"lobby",members:X.members,map:X.map,rules:X.rules}),ki())}function vE(){let n=X.members.filter(e=>e.team===0).length,t=X.members.filter(e=>e.team===1).length;return n<=t?0:1}function _E(n){switch(n.t){case"welcome":X.hostId=n.host,X.host=n.host===X.cid,X.status="",X.host?(X.members=[{...x0(),team:0}],X.map=ut.map,X.rules={winR:ut.winR,swap:ut.swap},n.peers.length>1&&oi({t:"who"}),ya()):oi({t:"hello",...x0()}),ki();break;case"full":X.room=null,X.status="\u3053\u306E\u90E8\u5C4B\u306F\u6E80\u54E1\u3067\u3059\uFF084\u4EBA\u307E\u3067\uFF09",V0(),ki();break;case"join":X.hostId=n.host;break;case"who":X.host||oi({t:"hello",...x0()});break;case"hello":if(X.host){let t=X.members.find(i=>i.cid===n.from),e={cid:n.from,nick:String(n.nick||"").slice(0,10),kind:n.kind,hat:n.hat,camo:n.camo,lo:n.lo};t?Object.assign(t,e):X.members.push({...e,team:vE()}),ya(),X.on&&oi({to:n.from,t:"busy"})}break;case"busy":X.status="\u3044\u307E\u8A66\u5408\u4E2D\u3067\u3059\u3002\u7D42\u308F\u308B\u307E\u3067\u5F85\u3063\u3066\u304F\u3060\u3055\u3044",ki();break;case"lobby":if(n.from!==X.hostId)break;X.members=n.members,X.map=n.map,X.rules=n.rules,!X.on&&ut.map!==n.map&&z0(n.map),ki();break;case"leave":{let t=n.id===X.hostId;if(X.hostId=n.host,X.on){if(t){X.host=n.host===X.cid,X.members=X.members.filter(i=>i.cid!==n.id),w1("\u30DB\u30B9\u30C8\u304C\u629C\u3051\u305F\u306E\u3067\u8A66\u5408\u3092\u7D42\u4E86\u3057\u307E\u3057\u305F"),X.host&&ya();break}let e=ye.find(i=>i.cid===n.id);e&&(e.cid=null,e.name+="(CPU)",X.host&&(e.net=!1,e.ai=b1()),sd(`${e.name.replace("(CPU)","")} \u304C\u629C\u3051\u305F\uFF08CPU\u304C\u4EE3\u308F\u308A\u306B\u6226\u3046\uFF09`))}n.host===X.cid&&!X.host&&(X.host=!0),X.host&&(X.members=X.members.filter(e=>e.cid!==n.id),ya()),ki();break}case"start":n.from===X.hostId&&S1(n);break;case"s":wE(n);break;case"sh":{let t=Hi(n.i);t&&!_a(t)&&TE(t,n.p);break}case"hit":{let t=Hi(n.i),e=Hi(n.b);t&&t.alive&&X.on&&i1(t,n.pa,e,w0(n.d).normalize(),w0(n.pt),n.pe);break}case"th":{let t=Hi(n.i);t&&!_a(t)&&X.on&&Ir(t,n.k,!0);break}case"rd":X.on&&!X.host&&(G.round=n.rd-1,G.attack=n.at^X.flip,G.score=X.flip?[n.sc[1],n.sc[0]]:[n.sc[0],n.sc[1]],H("scA").textContent=G.score[0],H("scB").textContent=G.score[1],H("cmsg").style.color="",cc(n.c));break;case"er":X.on&&!X.host&&(X.allowEnd=!0,G.phase=G.phase==="post"?"live":G.phase,co(n.w^X.flip,n.r,Hi(n.by)),X.allowEnd=!1);break;case"pl":if(X.on&&!X.host){let t=Hi(n.i);t&&l1(t,n.si),G.bomb.pos.set(n.p[0],ls(n.p[0],n.p[2],n.p[1]+.5)+.05,n.p[2])}break;case"df":if(X.on&&!X.host){let t=Hi(n.i);G.bomb.state="defused",G.bomb.defusing=null,Ss(null),mt.play("ui",{vol:1}),t&&(t.score+=100,sd(`${t.name} \u304C\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F`))}break;case"boom":X.on&&!X.host&&G.bomb.state!=="exploded"&&c1();break;case"mend":X.on&&!X.host&&(G.score=X.flip?[n.sc[1],n.sc[0]]:[n.sc[0],n.sc[1]],a1());break}}function bE(){if(!X.host)return;let n=new Set(X.members.map(s=>s.kind)),t=va.filter(s=>!n.has(s)).concat(va),e=[];for(let s of[0,1]){let r=X.members.filter(o=>o.team===s).slice(0,2);for(let o of r)e.push({cid:o.cid,kind:o.kind,team:s,name:o.nick,hat:o.hat,camo:o.camo,lo:o.lo});for(let o=r.length;o<2;o++){let a=t.shift();e.push({cid:null,kind:a,team:s,name:si[a]+"(CPU)",hat:Rr[1+Math.floor(Math.random()*(Rr.length-1))].id,camo:la[Math.floor(Math.random()*4)].id,lo:r0()})}}e.forEach((s,r)=>s.i=r);let i={t:"start",roster:e,map:X.map,rules:X.rules,at:Math.random()<.5?0:1};oi(i),S1(i)}function S1(n){let t=n.roster.find(e=>e.cid===X.cid);if(t){ut.map!==n.map&&z0(n.map),X.rules=n.rules,X.flip=t.team,X.on=!0,X.allowEnd=!1,X.sendT=0,H("roomM").classList.add("hide"),H("againBtn").textContent="\u90E8\u5C4B\u306B\u623B\u308B",G.mode="online",G.paused=!1,H("pause").classList.add("hide"),mt.init().then(()=>{mt.resume(),ut.bgm&&mt.bgm(!0),mt.wind(!0)}),Ti&&(zt.remove(Ti.root),Ti=null),xe.clearViewOffset(),H("lobby").classList.add("hide"),H("result").classList.add("hide"),H("hud").classList.remove("hide"),H("ctl").classList.remove("hide"),H("camBtn").textContent=ut.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0";try{Ai&&document.documentElement.requestFullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen({navigationUI:"hide"}).catch(()=>{})}catch{}if(!Ai)try{De.domElement.requestPointerLock()}catch{}window.VW_INGAME=!0,G.round=0,G.score=[0,0],G.attack=n.at^X.flip;for(let e of ye)e.dispose();ye=[];for(let e of n.roster){let i=e.cid===X.cid,s=new Zs(e.kind,e.team^X.flip,i,i?"\u3042\u306A\u305F":e.name,{hat:e.hat,camo:e.camo,lo:i?ut.lo:e.lo});s.nid=e.i,s.cid=e.cid,i?gt=s:!e.cid&&X.host?s.ai=b1():s.net=!0,ye.push(s)}if(H("scA").textContent=0,H("scB").textContent=0,H("hpName").textContent=si[gt.kind],F0={kills:0,hs:0},ld(),X.host)cc(),T1();else{G.phase="pre",G.timer=4;for(let e of ye)e.pos.set(0,-50,0)}}}function T1(){oi({t:"rd",rd:G.round,at:G.attack^X.flip,sc:_1(),c:G.bomb.carrier?G.bomb.carrier.nid:-1})}function EE(n){if(X.sendT-=n,X.sendT>0)return;X.sendT=1/12;let t=[];for(let i of ye)_a(i)&&t.push([i.nid,+i.pos.x.toFixed(2),+i.pos.y.toFixed(2),+i.pos.z.toFixed(2),+i.yaw.toFixed(3),+i.pitch.toFixed(3),v1.indexOf(i.stance),+i.ads.toFixed(2),i.sprint?1:0,+i.vel.x.toFixed(1),+i.vel.z.toFixed(1),i.wantAct?1:0,i.onGround?1:0,i.slideT>0?1:0]);let e={t:"s",rd:G.round,f:t};if(X.host){let i=G.bomb;e.g={ph:G.phase,tm:+G.timer.toFixed(1),b:[i.state,i.carrier?i.carrier.nid:-1,...ec(i.pos),i.planting?i.planting.nid:-1,i.defusing?i.defusing.nid:-1,+(i.prog||0).toFixed(2),+(i.fuse||0).toFixed(1)],hp:ye.map(s=>[s.nid,Math.round(s.hp),s.alive?1:0])}}oi(e)}function wE(n){if(!X.on||n.rd!==G.round)return;let t=performance.now();for(let r of n.f||[]){let o=Hi(r[0]);!o||_a(o)||(o.nt={p:[r[1],r[2],r[3]],yaw:r[4],pitch:r[5],st:r[6],ads:r[7],sp:r[8],vx:r[9],vz:r[10],act:r[11],og:r[12],sl:r[13],t})}let e=n.g;if(!e||X.host||n.from!==X.hostId)return;e.ph==="live"&&G.phase==="pre"&&(G.phase="live",Is("\u958B\u59CB","",1),mt.play("beep",{vol:.8})),e.ph===G.phase&&Math.abs(e.tm-G.timer)>.4&&(G.timer=e.tm);let i=G.bomb,s=e.b;if((G.phase==="live"||G.phase==="pre")&&(i.state=s[0],i.carrier=Hi(s[1])||null,i.state==="dropped"&&i.pos.set(s[2],s[3],s[4])),i.planting=Hi(s[5])||null,i.defusing=Hi(s[6])||null,i.prog=s[7],G.phase==="planted"&&(i.fuse=s[8]),!(G.phase==="pre"||G.phase==="post"))for(let[r,o,a]of e.hp){let l=Hi(r);!l||!l.alive||(a?o<l.hp-1&&(l.hp=o):ac(l,null,!1,new ft(0,0,1),"body"))}}function SE(n,t){let e=n.nt;if(!e||!n.alive)return;let i=Math.min(.2,(performance.now()-e.t)/1e3),s=e.p[0]+e.vx*i,r=e.p[2]+e.vz*i,o=e.p[1],a=1-Math.exp(-14*t);(n.pos.x-s)**2+(n.pos.z-r)**2>16||n.pos.y<-10?n.pos.set(s,o,r):(n.pos.x+=(s-n.pos.x)*a,n.pos.y+=(o-n.pos.y)*a,n.pos.z+=(r-n.pos.z)*a),n.yaw+=Qg(n.yaw,e.yaw)*Math.min(1,a*1.5),n.pitch+=(e.pitch-n.pitch)*Math.min(1,a*1.5),n.stance=v1[e.st]||"stand",n.adsWant=e.ads>.4,n.sprint=!!e.sp,n.vel.set(e.vx,0,e.vz),n.onGround=!!e.og,n.wantAct=!!e.act,n.slideT=e.sl?.3:0;let l=Math.hypot(e.vx,e.vz);if(n.moveAmt=l,n.onGround&&l>.5&&(n.stepAcc+=l*t,n.stepAcc>(n.sprint?1.6:1.2))){n.stepAcc=0;let c=(n.stance!=="stand"||l<2.3?0:n.sprint?1:.6)*(n.st?n.st.quiet:1);c>.05&&Qu(n,c)}}function TE(n,t){if(!n.alive)return;n.mag=Math.max(0,n.mag-1),n.shots++,n.lastShotT=G.time,n.revealT=2.5,n.needBolt=!0,n.boltT=n.st.bolt,n.boltPlayed=0;let e=n.veg.gun.muzzlePt.getWorldPosition(new ft),i=w0(t);n1(e,i),Ri(uo,e,.7,.06,{add:!0}),Mi.position.copy(e),Mi.intensity=30,setTimeout(()=>Mi.intensity=0,50),Ri(Qs,e,.4,1.2,{grow:1.5,vel:new ft(0,.4,0),opacity:.6}),Cs(i,10132112,4,2.5,.02,.5),mt.play(n.pos.distanceTo(gt.pos)>25?"shot_far":"shot",{pos:n.eye(),vol:1,ref:6,roll:.8,vary:.05});for(let s of ye)s.ai&&s.alive&&s.team!==n.team&&s.pos.distanceTo(n.pos)<70&&(s.ai.heard={pos:n.pos.clone(),t:4})}function dc(){H("roomM").classList.remove("hide"),ki()}function RE(){return location.origin+location.pathname+"?room="+X.room}function Kg(n){return String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function ki(){let n=H("roomB");if(!n||H("roomM").classList.contains("hide"))return;if(H("roomSt").textContent=X.status,!X.room){n.innerHTML=`<div class="rmGrid"><div><div class="rmLbl">\u3042\u306A\u305F\u306E\u540D\u524D</div><input id="rmNick" maxlength="10" value="${Kg(ut.nick||si[ut.kind])}">
      <button class="mbtn y" id="rmMake">\u90E8\u5C4B\u3092\u4F5C\u308B</button><div class="rmNote">\u90E8\u5C4B\u3092\u4F5C\u308B\u30686\u6841\u306E\u30B3\u30FC\u30C9\u3068\u62DB\u5F85URL\u304C\u51FA\u307E\u3059\u3002<br>\u53CB\u9054\u306B\u9001\u308C\u3070\u540C\u3058\u90E8\u5C4B\u306B\u5165\u308C\u307E\u3059\u3002</div></div>
      <div><div class="rmLbl">\u30B3\u30FC\u30C9\u3067\u5165\u308B</div><input id="rmCode" inputmode="numeric" maxlength="6" placeholder="123456"><button class="mbtn" id="rmJoin">\u5165\u308B</button>
      <div class="rmNote">2\u5BFE2\u3002<br>\u4EBA\u6570\u304C\u8DB3\u308A\u306A\u3044\u3068\u3053\u308D\u306FCPU\u304C\u5165\u308A\u307E\u3059\u3002</div></div></div>`;let i=()=>{ut.nick=H("rmNick").value.trim().slice(0,10),vi()};H("rmMake").onclick=()=>{i(),mt.play("ui"),ad(String(Math.floor(1e5+Math.random()*9e5)))},H("rmJoin").onclick=()=>{i();let s=H("rmCode").value.replace(/\D/g,"");if(s.length!==6){X.status="\u30B3\u30FC\u30C9\u306F6\u6841\u306E\u6570\u5B57\u3067\u3059",ki();return}mt.play("ui"),ad(s)};return}let t=i=>{let s=X.members.filter(o=>o.team===i),r="";for(let o=0;o<2;o++){let a=s[o];r+=a?`<div class="rmP${a.cid===X.cid?" me":""}" data-c="${a.cid}"><b>${Kg(a.nick)}</b><small>${si[a.kind]||""}${a.cid===X.hostId?"\u30FB\u30DB\u30B9\u30C8":""}</small></div>`:'<div class="rmP cpu"><b>CPU</b><small>\u7A7A\u304D</small></div>'}return r},e=Bi[X.map||ut.map]||en;if(n.innerHTML=`<div class="rmGrid"><div><div class="rmLbl">\u90E8\u5C4B\u30B3\u30FC\u30C9</div><div class="rmCode">${X.room}</div>
      <button class="mbtn y" id="rmShare">\u62DB\u5F85URL\u3092\u9001\u308B</button>
      <div class="rmLbl" style="margin-top:calc(1.4*var(--vh))">\u30DE\u30C3\u30D7</div><div class="rmMap">${X.host?'<button id="rmMp">\u25C0</button>':""}<span>${e.name}</span>${X.host?'<button id="rmMn">\u25B6</button>':""}</div>
      <div class="rmNote">${X.rules.winR}\u30E9\u30A6\u30F3\u30C9\u5148\u53D6\u30FB${X.rules.swap}\u30E9\u30A6\u30F3\u30C9\u3054\u3068\u306B\u653B\u5B88\u4EA4\u4EE3</div></div>
    <div><div class="rmTeams"><div><div class="rmLbl">\u30C1\u30FC\u30E0A</div>${t(0)}</div><div><div class="rmLbl">\u30C1\u30FC\u30E0B</div>${t(1)}</div></div>
      ${X.host?'<div class="rmNote">\u540D\u524D\u3092\u30BF\u30C3\u30D7\u3059\u308B\u3068\u30C1\u30FC\u30E0\u3092\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002</div><button class="mbtn y" id="rmStart">\u8A66\u5408\u958B\u59CB</button>':`<div class="rmNote">${X.ws?"\u30DB\u30B9\u30C8\u304C\u958B\u59CB\u3059\u308B\u306E\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\u2026":""}</div>`}
      <button class="mbtn" id="rmLeave">\u90E8\u5C4B\u3092\u51FA\u308B</button></div></div>`,H("rmShare").onclick=async()=>{let i=RE(),s=`vegetable wars \u3067\u4E00\u7DD2\u306B\u904A\u307C\u3046\uFF01
\u90E8\u5C4B\u30B3\u30FC\u30C9 ${X.room}`;try{navigator.share?await navigator.share({title:"vegetable wars",text:s,url:i}):(await navigator.clipboard.writeText(s+`
`+i),X.status="URL\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",ki())}catch{}},H("rmLeave").onclick=()=>{mt.play("ui"),E1()},X.host){let i=Object.keys(Bi),s=r=>{X.map=i[(i.indexOf(X.map)+r+i.length)%i.length],z0(X.map),ya(),mt.play("ui")};H("rmMp").onclick=()=>s(-1),H("rmMn").onclick=()=>s(1),H("rmStart").onclick=()=>{mt.play("ui"),bE()},n.querySelectorAll(".rmP[data-c]").forEach(r=>r.onclick=()=>{let o=X.members.find(l=>l.cid===r.dataset.c);if(!o)return;let a=1-o.team;X.members.filter(l=>l.team===a).length>=2||(o.team=a,ya(),mt.play("ui"))})}}H("roomClose").onclick=()=>H("roomM").classList.add("hide");{let n=new URLSearchParams(location.search).get("room"),t=n;try{t=t||sessionStorage.getItem("vw_room")}catch{}t&&/^\d{6}$/.test(t)&&(X.pendingRoom=t,n&&history.replaceState(null,"",location.pathname))}window.__vw={LOBBY_CAM:Ar,setLook:n=>M1(n),onBtn:(...n)=>ga(...n),proneOrDive:n=>B0(n),get net(){return X},byNid:n=>Hi(n),Veg:Tr,KINDS:Pg,throwEquip:Ir,smokes:Pr,throws:sc,kill:ac,endRound:co,render:jl,renderer:De,vm:Zt,vmCam:As,V3:ft,sim(n){for(let t=0;t<n*30&&G.phase!=="end";t++)y1(1/30)},game:G,get player(){return gt},get fighters(){return ye},camera:xe,scene:zt,CFG:ut,startRound:cc,tryAct:ho,fire:N0};mb().then(()=>{{let n=new URLSearchParams(location.search).get("look");n&&M1(n)}requestAnimationFrame(x1),X.pendingRoom&&(dc(),ad(X.pendingRoom))});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
