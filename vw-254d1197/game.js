(()=>{var r0=0,Lu=1,o0=2;var cr=1,uc=2,io=3,Os=0,gn=1,cn=2,hr=0,Bs=1,ur=2,Du=3,Nu=4,a0=5;var dr=100,l0=101,c0=102,h0=103,u0=104,d0=200,f0=201,p0=202,m0=203,Uu=204,Fu=205,g0=206,x0=207,y0=208,_0=209,M0=210,v0=211,b0=212,E0=213,S0=214,Cl=0,Pl=1,Il=2,zr=3,Ll=4,Dl=5,Nl=6,Ul=7,dc=0,w0=1,T0=2,Xi=0,Ou=1,Bu=2,Hu=3,pa=4,ku=5,Gu=6,zu=7;var Vu=300,fr=301,so=302,fc=303,pc=304,ls=1e3,Oi=1001,Fl=1002,Sn=1003,A0=1004;var ma=1005;var Vn=1006,mc=1007;var us=1008;var Kn=1009,Wu=1010,Xu=1011,ro=1012,gc=1013,Ai=1014,fi=1015,Ri=1016,xc=1017,yc=1018,pr=1020,qu=35902,Yu=35899,Zu=1021,$u=1022,Ci=1023,cs=1026,ds=1027,_c=1028,Mc=1029,Hs=1030,vc=1031;var bc=1033,ga=33776,xa=33777,ya=33778,_a=33779,Ec=35840,Sc=35841,wc=35842,Tc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37488,Ic=37489,Ma=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Fc=37811,Oc=37812,Bc=37813,Hc=37814,kc=37815,Gc=37816,zc=37817,Vc=37818,Wc=37819,Xc=37820,qc=37821,Yc=36492,Zc=36494,$c=36495,Jc=36283,Kc=36284,va=36285,jc=36286;var Bo=2300,Ol=2301,Al=2302,vu=2303,bu=2400,Eu=2401,Su=2402;var R0=3200;var ba=0,C0=1,fs="",an="srgb",Ho="srgb-linear",ko="linear",Oe="srgb";var Rl=7680;var P0=519,I0=512,L0=513,D0=514,Ju=515,N0=516,U0=517,Ku=518,ju=519,Qu=35044;var td="300 es",ci=2e3,Vr=2001;function jm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function F0(){let n=Go("canvas");return n.style.display="block",n}var wf={},Wr=null;function zo(...n){let t="THREE."+n.shift();Wr?Wr("log",t,...n):console.log(t,...n)}function O0(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ee(...n){n=O0(n);let t="THREE."+n.shift();if(Wr)Wr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function se(...n){n=O0(n);let t="THREE."+n.shift();if(Wr)Wr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function sr(...n){let t=n.join(" ");t in wf||(wf[t]=!0,ee(...n))}function B0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var H0={[Cl]:Cl,[Il]:Nl,[Ll]:Ll,[zr]:Dl,[Pl]:Pl,[Nl]:Il,[Ul]:Ul,[Dl]:zr},Hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $h=Math.PI/180,Bl=180/Math.PI;function ks(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[e&63|128]+Nn[e>>8&255]+"-"+Nn[e>>16&255]+Nn[e>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function be(n,t,e){return Math.max(t,Math.min(e,n))}function tg(n,t){return(n%t+t)%t}function Jh(n,t,e){return(1-e)*n+e*t}function k0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function G0(n,t){if(t.constructor===Float32Array)return n;let e=Qc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function z0(n,t){if(t.constructor===Float32Array)return n;let e=Qc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var od=class od{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};od.prototype.isVector2=!0;var ht=od,ln=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(u!==g||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*g;m<0&&(d=-d,f=-f,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);x=Math.sin(x*M)/w,a=Math.sin(a*M)/w,l=l*x+d*a,c=c*x+f*a,h=h*x+p*a,u=u*x+g*a}else{l=l*x+d*a,c=c*x+f*a,h=h*x+p*a,u=u*x+g*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ad=class ad{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kh.copy(this).projectOnVector(t),this.sub(Kh)}reflect(t){return this.sub(Kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ad.prototype.isVector3=!0;var U=ad,Kh=new U,Tf=new ln,ld=class ld{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],g=s[0],m=s[3],x=s[6],M=s[1],w=s[4],v=s[7],R=s[2],C=s[5],_=s[8];return r[0]=o*g+a*M+l*R,r[3]=o*m+a*w+l*C,r[6]=o*x+a*v+l*_,r[1]=c*g+h*M+u*R,r[4]=c*m+h*w+u*C,r[7]=c*x+h*v+u*_,r[2]=d*g+f*M+p*R,r[5]=d*m+f*w+p*C,r[8]=d*x+f*v+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=u*g,t[1]=(s*c-h*i)*g,t[2]=(a*i-s*o)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jh.makeScale(t,e)),this}rotate(t){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jh.makeRotation(-t)),this}translate(t,e){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ld.prototype.isMatrix3=!0;var he=ld,jh=new he,Af=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rf=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eg(){let n={enabled:!0,workingColorSpace:Ho,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Oe&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Oe&&(s.r=Gr(s.r),s.g=Gr(s.g),s.b=Gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ho]:{primaries:t,whitePoint:i,transfer:ko,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:i,transfer:Oe,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}var Le=eg();function as(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Er,Hl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Er===void 0&&(Er=Go("canvas")),Er.width=t.width,Er.height=t.height;let s=Er.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Er}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Go("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(as(e[i]/255)*255):e[i]=as(e[i]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ng=0,Xr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qh(s[o].image)):r.push(Qh(s[o]))}else r=Qh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Qh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var ig=0,tu=new U,Wn=class n extends Hi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Oi,s=Oi,r=Vn,o=us,a=Ci,l=Kn,c=n.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=ks(),this.name="",this.source=new Xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Vu;Wn.DEFAULT_ANISOTROPY=1;var cd=class cd{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,R=(x+1)/2,C=(h+d)/4,_=(u+g)/4,E=(p+m)/4;return w>v&&w>R?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=C/i,r=_/i):v>R?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=C/s,r=E/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=_/r,s=E/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cd.prototype.isVector4=!0;var Ke=cd,kl=class extends Hi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Wn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Xr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends kl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Vo=class extends Wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gl=class extends Wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var hc=class hc{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,g,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,g,m){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hc().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Sr.setFromMatrixColumn(t,0).length(),r=1/Sr.setFromMatrixColumn(t,1).length(),o=1/Sr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,g=c*u;e[0]=d+g*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sg,t,rg)}lookAt(t,e,i){let s=this.elements;return Qn.subVectors(t,e),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),ws.crossVectors(i,Qn),ws.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),ws.crossVectors(i,Qn)),ws.normalize(),el.crossVectors(Qn,ws),s[0]=ws.x,s[4]=el.x,s[8]=Qn.x,s[1]=ws.y,s[5]=el.y,s[9]=Qn.y,s[2]=ws.z,s[6]=el.z,s[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],g=i[6],m=i[10],x=i[14],M=i[3],w=i[7],v=i[11],R=i[15],C=s[0],_=s[4],E=s[8],P=s[12],S=s[1],I=s[5],F=s[9],B=s[13],N=s[2],G=s[6],q=s[10],V=s[14],ct=s[3],J=s[7],rt=s[11],ot=s[15];return r[0]=o*C+a*S+l*N+c*ct,r[4]=o*_+a*I+l*G+c*J,r[8]=o*E+a*F+l*q+c*rt,r[12]=o*P+a*B+l*V+c*ot,r[1]=h*C+u*S+d*N+f*ct,r[5]=h*_+u*I+d*G+f*J,r[9]=h*E+u*F+d*q+f*rt,r[13]=h*P+u*B+d*V+f*ot,r[2]=p*C+g*S+m*N+x*ct,r[6]=p*_+g*I+m*G+x*J,r[10]=p*E+g*F+m*q+x*rt,r[14]=p*P+g*B+m*V+x*ot,r[3]=M*C+w*S+v*N+R*ct,r[7]=M*_+w*I+v*G+R*J,r[11]=M*E+w*F+v*q+R*rt,r[15]=M*P+w*B+v*V+R*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],g=t[7],m=t[11],x=t[15],M=l*f-c*d,w=a*f-c*u,v=a*d-l*u,R=o*f-c*h,C=o*d-l*h,_=o*u-a*h;return e*(g*M-m*w+x*v)-i*(p*M-m*R+x*C)+s*(p*w-g*R+x*_)-r*(p*v-g*C+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],g=t[13],m=t[14],x=t[15],M=e*a-i*o,w=e*l-s*o,v=e*c-r*o,R=i*l-s*a,C=i*c-r*a,_=s*c-r*l,E=h*g-u*p,P=h*m-d*p,S=h*x-f*p,I=u*m-d*g,F=u*x-f*g,B=d*x-f*m,N=M*B-w*F+v*I+R*S-C*P+_*E;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return t[0]=(a*B-l*F+c*I)*G,t[1]=(s*F-i*B-r*I)*G,t[2]=(g*_-m*C+x*R)*G,t[3]=(d*C-u*_-f*R)*G,t[4]=(l*S-o*B-c*P)*G,t[5]=(e*B-s*S+r*P)*G,t[6]=(m*v-p*_-x*w)*G,t[7]=(h*_-d*v+f*w)*G,t[8]=(o*F-a*S+c*E)*G,t[9]=(i*S-e*F-r*E)*G,t[10]=(p*C-g*v+x*M)*G,t[11]=(u*v-h*C-f*M)*G,t[12]=(a*P-o*I-l*E)*G,t[13]=(e*I-i*P+s*E)*G,t[14]=(g*w-p*R-m*M)*G,t[15]=(h*R-u*w+d*M)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,g=o*h,m=o*u,x=a*u,M=l*c,w=l*h,v=l*u,R=i.x,C=i.y,_=i.z;return s[0]=(1-(g+x))*R,s[1]=(f+v)*R,s[2]=(p-w)*R,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(d+x))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(p+w)*_,s[9]=(m-M)*_,s[10]=(1-(d+g))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Sr.set(s[0],s[1],s[2]).length(),a=Sr.set(s[4],s[5],s[6]).length(),l=Sr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),bi.copy(this);let c=1/o,h=1/a,u=1/l;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,e.setFromRotationMatrix(bi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=ci,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===ci)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ci,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===ci)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Vr)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};hc.prototype.isMatrix4=!0;var Jt=hc,Sr=new U,bi=new Jt,sg=new U(0,0,0),rg=new U(1,1,1),ws=new U,el=new U,Qn=new U,Cf=new Jt,Pf=new ln,hi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Cf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pf.setFromEuler(this),this.setFromQuaternion(Pf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Wo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},og=0,If=new U,wr=new ln,es=new Jt,nl=new U,To=new U,ag=new U,lg=new ln,Lf=new U(1,0,0),Df=new U(0,1,0),Nf=new U(0,0,1),Uf={type:"added"},cg={type:"removed"},Tr={type:"childadded",child:null},eu={type:"childremoved",child:null},qe=class n extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new hi,i=new ln,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new he}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(Lf,t)}rotateY(t){return this.rotateOnAxis(Df,t)}rotateZ(t){return this.rotateOnAxis(Nf,t)}translateOnAxis(t,e){return If.copy(t).applyQuaternion(this.quaternion),this.position.add(If.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lf,t)}translateY(t){return this.translateOnAxis(Df,t)}translateZ(t){return this.translateOnAxis(Nf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?nl.copy(t):nl.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(To,nl,this.up):es.lookAt(nl,To,this.up),this.quaternion.setFromRotationMatrix(es),s&&(es.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(es),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uf),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cg),eu.child=t,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),es.multiply(t.parent.matrixWorld)),t.applyMatrix4(es),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uf),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,ag),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,lg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qe.DEFAULT_UP=new U(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var It=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},hg={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,i),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new It;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},V0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},il={h:0,s:0,l:0};function nu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var re=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=i,Le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Le.workingColorSpace){if(t=tg(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=nu(o,r,t+1/3),this.g=nu(o,r,t),this.b=nu(o,r,t-1/3)}return Le.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function i(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let i=V0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Le.workingToColorSpace(Un.copy(this),t),Math.round(be(Un.r*255,0,255))*65536+Math.round(be(Un.g*255,0,255))*256+Math.round(be(Un.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.workingToColorSpace(Un.copy(this),e);let i=Un.r,s=Un.g,r=Un.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.workingToColorSpace(Un.copy(this),e),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=an){Le.workingToColorSpace(Un.copy(this),t);let e=Un.r,i=Un.g,s=Un.b;return t!==an?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ts),this.setHSL(Ts.h+t,Ts.s+e,Ts.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ts),t.getHSL(il);let i=Jh(Ts.h,il.h,e),s=Jh(Ts.s,il.s,e),r=Jh(Ts.l,il.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new re;re.NAMES=V0;var Xo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new U,ns=new U,iu=new U,is=new U,Ar=new U,Rr=new U,Ff=new U,su=new U,ru=new U,ou=new U,au=new Ke,lu=new Ke,cu=new Ke,os=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ei.subVectors(t,e),s.cross(Ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ei.subVectors(s,e),ns.subVectors(i,e),iu.subVectors(t,e);let o=Ei.dot(Ei),a=Ei.dot(ns),l=Ei.dot(iu),c=ns.dot(ns),h=ns.dot(iu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,is)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,is.x),l.addScaledVector(o,is.y),l.addScaledVector(a,is.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return au.setScalar(0),lu.setScalar(0),cu.setScalar(0),au.fromBufferAttribute(t,e),lu.fromBufferAttribute(t,i),cu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(au,r.x),o.addScaledVector(lu,r.y),o.addScaledVector(cu,r.z),o}static isFrontFacing(t,e,i,s){return Ei.subVectors(i,e),ns.subVectors(t,e),Ei.cross(ns).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),Ei.cross(ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ar.subVectors(s,i),Rr.subVectors(r,i),su.subVectors(t,i);let l=Ar.dot(su),c=Rr.dot(su);if(l<=0&&c<=0)return e.copy(i);ru.subVectors(t,s);let h=Ar.dot(ru),u=Rr.dot(ru);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Ar,o);ou.subVectors(t,r);let f=Ar.dot(ou),p=Rr.dot(ou);if(p>=0&&f<=p)return e.copy(r);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Rr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Ff.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Ff,a);let x=1/(m+g+d);return o=g*x,a=d*x,e.copy(i).addScaledVector(Ar,o).addScaledVector(Rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ki=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(t.matrixWorld),this.union(sl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),rl.subVectors(this.max,Ao),Cr.subVectors(t.a,Ao),Pr.subVectors(t.b,Ao),Ir.subVectors(t.c,Ao),As.subVectors(Pr,Cr),Rs.subVectors(Ir,Pr),tr.subVectors(Cr,Ir);let e=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-tr.z,tr.y,As.z,0,-As.x,Rs.z,0,-Rs.x,tr.z,0,-tr.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-tr.y,tr.x,0];return!hu(e,Cr,Pr,Ir,rl)||(e=[1,0,0,0,1,0,0,0,1],!hu(e,Cr,Pr,Ir,rl))?!1:(ol.crossVectors(As,Rs),e=[ol.x,ol.y,ol.z],hu(e,Cr,Pr,Ir,rl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ss=[new U,new U,new U,new U,new U,new U,new U,new U],Si=new U,sl=new ki,Cr=new U,Pr=new U,Ir=new U,As=new U,Rs=new U,tr=new U,Ao=new U,rl=new U,ol=new U,er=new U;function hu(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){er.fromArray(n,r);let a=s.x*Math.abs(er.x)+s.y*Math.abs(er.y)+s.z*Math.abs(er.z),l=t.dot(er),c=e.dot(er),h=i.dot(er);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var dn=new U,al=new ht,ug=0,fn=class extends Hi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ug++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qu,this.updateRanges=[],this.gpuType=fi,this.version=0,this._normalizationScale=t!==void 0?Qc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)al.fromBufferAttribute(this,e),al.applyMatrix3(t),this.setXY(e,al.x,al.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):G0(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):z0(t,this.array)}};var qo=class extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Yo=class extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ne=class extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}},dg=new ki,Ro=new U,uu=new U,Is=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):dg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);let e=Ro.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ro,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(uu)),this.expandByPoint(Ro.copy(t.center).sub(uu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fg=0,li=new Jt,du=new qe,Lr=new U,ti=new ki,Co=new ki,En=new U,Ze=class n extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jm(t)?Yo:qo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new he().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,e,i){return li.makeTranslation(t,e,i),this.applyMatrix4(li),this}scale(t,e,i){return li.makeScale(t,e,i),this.applyMatrix4(li),this}lookAt(t){return du.lookAt(t),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(ti.min,Co.min),ti.expandByPoint(En),En.addVectors(ti.max,Co.max),ti.expandByPoint(En)):(ti.expandByPoint(Co.min),ti.expandByPoint(Co.max))}ti.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)En.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(En));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)En.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(t,c),En.add(Lr)),s=Math.max(s,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;let h=new U,u=new U,d=new U,f=new ht,p=new ht,g=new ht,m=new U,x=new U;function M(P,S,I){c[P]=c[S]=c[I]=1,h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,I),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,I),u.sub(h),d.sub(h),p.sub(f),g.sub(f);let F=1/(p.x*g.y-g.x*p.y);isFinite(F)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(F),x.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(F),a[P].add(m),a[S].add(m),a[I].add(m),l[P].add(x),l[S].add(x),l[I].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,S=w.length;P<S;++P){let I=w[P],F=I.start,B=I.count;for(let N=F,G=F+B;N<G;N+=3)M(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new U,R=new U,C=new U,_=new U;function E(P){C.fromBufferAttribute(s,P),_.copy(C);let S=a[P];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),R.crossVectors(_,S);let F=R.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,F)}for(let P=0,S=i.count;P<S;++P)c[P]&&E(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)En.fromBufferAttribute(t,e),En.normalize(),t.setXYZ(e,En.x,En.y,En.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let x=0;x<h;x++)d[p++]=c[f++]}return new fn(d,h,u)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qu,this.updateRanges=[],this.version=0,this.uuid=ks()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Of(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Of(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Of(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ks()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var zn=new U,Yr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?Qc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix4(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)zn.fromBufferAttribute(this,e),zn.applyNormalMatrix(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)zn.fromBufferAttribute(this,e),zn.transformDirection(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):G0(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):z0(t,this.data.array)}},fu=new U,pg=new U,mg=new he,wi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=fu.subVectors(i,e).cross(pg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(fu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||mg.getNormalMatrix(t),s=this.coplanarPoint(fu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gg=0,Gi=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Bs,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Fu,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rl,this.stencilZFail=Rl,this.stencilZPass=Rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new re().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new wi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},rr=class extends Gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Dr,Po=new U,Nr=new U,Ur=new U,Fr=new ht,Io=new ht,W0=new Jt,ll=new U,Lo=new U,cl=new U,Bf=new ht,pu=new ht,Hf=new ht,Zr=class extends qe{constructor(t=new rr){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new Ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zo(e,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new Yr(i,3,0,!1)),Dr.setAttribute("uv",new Yr(i,2,3,!1))}this.geometry=Dr,this.material=t,this.center=new ht(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),W0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Ur.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;hl(ll.set(-.5,-.5,0),Ur,o,Nr,s,r),hl(Lo.set(.5,-.5,0),Ur,o,Nr,s,r),hl(cl.set(.5,.5,0),Ur,o,Nr,s,r),Bf.set(0,0),pu.set(1,0),Hf.set(1,1);let a=t.ray.intersectTriangle(ll,Lo,cl,!1,Po);if(a===null&&(hl(Lo.set(-.5,.5,0),Ur,o,Nr,s,r),pu.set(0,1),a=t.ray.intersectTriangle(ll,cl,Lo,!1,Po),a===null))return;let l=t.ray.origin.distanceTo(Po);l<t.near||l>t.far||e.push({distance:l,point:Po.clone(),uv:os.getInterpolation(Po,ll,Lo,cl,Bf,pu,Hf,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function hl(n,t,e,i,s,r){Fr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Io.x=r*Fr.x-s*Fr.y,Io.y=s*Fr.x+r*Fr.y):Io.copy(Fr),n.copy(t),n.x+=Io.x,n.y+=Io.y,n.applyMatrix4(W0)}var rs=new U,mu=new U,ul=new U,dl=new U,zl=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rs.copy(this.origin).addScaledVector(this.direction,e),rs.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){mu.copy(t).add(e).multiplyScalar(.5),ul.copy(e).sub(t).normalize(),dl.copy(this.origin).sub(mu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ul),a=dl.dot(this.direction),l=-dl.dot(ul),c=dl.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(mu).addScaledVector(ul,d),f}intersectSphere(t,e){if(t.radius<0)return null;rs.subVectors(t.center,this.origin);let i=rs.dot(this.direction),s=rs.dot(rs)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,rs)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,g=e.y-o.y,m=e.z-o.z,x=i.x-o.x,M=i.y-o.y,w=i.z-o.z,v=Math.abs(l),R=Math.abs(c),C=Math.abs(h),_,E,P,S,I,F,B,N,G,q,V,ct;if(v>=R&&v>=C?(P=l,F=u,G=p,ct=x,l>=0?(_=c,E=h,S=d,I=f,B=g,N=m,q=M,V=w):(_=h,E=c,S=f,I=d,B=m,N=g,q=w,V=M)):R>=C?(P=c,F=d,G=g,ct=M,c>=0?(_=h,E=l,S=f,I=u,B=m,N=p,q=w,V=x):(_=l,E=h,S=u,I=f,B=p,N=m,q=x,V=w)):(P=h,F=f,G=m,ct=w,h>=0?(_=l,E=c,S=u,I=d,B=p,N=g,q=x,V=M):(_=c,E=l,S=d,I=u,B=g,N=p,q=M,V=x)),P===0)return null;let J=_/P,rt=E/P,ot=1/P,Lt=S-J*F,Kt=I-rt*F,tt=B-J*G,wt=N-rt*G,Bt=q-J*ct,jt=V-rt*ct,K=Bt*wt-jt*tt,Ot=Lt*jt-Kt*Bt,pe=tt*Kt-wt*Lt;if(s){if(K<0||Ot<0||pe<0)return null}else if((K<0||Ot<0||pe<0)&&(K>0||Ot>0||pe>0))return null;let Zt=K+Ot+pe;if(Zt===0)return null;let me=ot*(K*F+Ot*G+pe*ct);return(Zt>0?me<0:me>0)?null:this.at(me/Zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ui=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kf=new Jt,nr=new zl,fl=new Is,Gf=new U,pl=new U,ml=new U,gl=new U,gu=new U,xl=new U,zf=new U,yl=new U,D=class extends qe{constructor(t=new Ze,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(gu.fromBufferAttribute(u,t),o?xl.addScaledVector(gu,h):xl.addScaledVector(gu.sub(e),h))}e.add(xl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),nr.copy(t.ray).recast(t.near),!(fl.containsPoint(nr.origin)===!1&&(nr.intersectSphere(fl,Gf)===null||nr.origin.distanceToSquared(Gf)>(t.far-t.near)**2))&&(kf.copy(r).invert(),nr.copy(t.ray).applyMatrix4(kf),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,nr)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,R=w;v<R;v+=3){let C=a.getX(v),_=a.getX(v+1),E=a.getX(v+2);s=_l(this,x,t,i,c,h,u,C,_,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let M=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=_l(this,o,t,i,c,h,u,M,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,R=w;v<R;v+=3){let C=v,_=v+1,E=v+2;s=_l(this,x,t,i,c,h,u,C,_,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let M=m,w=m+1,v=m+2;s=_l(this,o,t,i,c,h,u,M,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function xg(n,t,e,i,s,r,o,a){let l;if(t.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Os,a),l===null)return null;yl.copy(a),yl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(yl);return c<e.near||c>e.far?null:{distance:c,point:yl.clone(),object:n}}function _l(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,pl),n.getVertexPosition(l,ml),n.getVertexPosition(c,gl);let h=xg(n,t,e,i,pl,ml,gl,zf);if(h){let u=new U;os.getBarycoord(zf,pl,ml,gl,u),s&&(h.uv=os.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.uv1=os.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=os.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};os.getNormal(pl,ml,gl,d.normal),h.face=d,h.barycoord=u}return h}var $o=class extends Wn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Sn,h=Sn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $r=class extends fn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Or=new Jt,Vf=new Jt,Ml=[],Wf=new ki,yg=new Jt,Do=new D,No=new Is,Ls=class extends D{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $r(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Or),Wf.copy(t.boundingBox).applyMatrix4(Or),this.boundingBox.union(Wf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Is),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Or),No.copy(t.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(No)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Do.geometry=this.geometry,Do.material=this.material,Do.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(i),t.ray.intersectsSphere(No)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Or),Vf.multiplyMatrices(i,Or),Do.matrixWorld=Vf,Do.raycast(t,Ml);for(let o=0,a=Ml.length;o<a;o++){let l=Ml[o];l.instanceId=r,l.object=this,e.push(l)}Ml.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $o(new Float32Array(s*this.count),s,this.count,_c,fi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ir=new Is,_g=new ht(.5,.5),vl=new U,Ds=class{constructor(t=new wi,e=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],m=r[10],x=r[11],M=r[12],w=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,x-p,R-M).normalize(),s[1].setComponents(c+o,f+h,x+p,R+M).normalize(),s[2].setComponents(c+a,f+u,x+g,R+w).normalize(),s[3].setComponents(c-a,f-u,x-g,R-w).normalize(),i)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,x-m,R-v).normalize();else if(s[4].setComponents(c-l,f-d,x-m,R-v).normalize(),e===ci)s[5].setComponents(c+l,f+d,x+m,R+v).normalize();else if(e===Vr)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(t){ir.center.set(0,0,0);let e=_g.distanceTo(t.center);return ir.radius=.7071067811865476+e,ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(vl.x=s.normal.x>0?t.max.x:t.min.x,vl.y=s.normal.y>0?t.max.y:t.min.y,vl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xf=new Jt,Vl=class n{constructor(){this.coordinateSystem=ci,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ds),i[s].setFromProjectionMatrix(Xf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ds),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Jo=class extends Wn{constructor(t=[],e=fr,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ti=class extends Wn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends Wn{constructor(t,e,i=Ai,s,r,o,a=Sn,l=Sn,c,h=cs,u=1){if(h!==cs&&h!==ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ko=class extends hs{constructor(t,e=Ai,i=fr,s,r,o=Sn,a=Sn,l,c=cs){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jo=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},de=class n extends Ze{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function p(g,m,x,M,w,v,R,C,_,E,P){let S=v/_,I=R/E,F=v/2,B=R/2,N=C/2,G=_+1,q=E+1,V=0,ct=0,J=new U;for(let rt=0;rt<q;rt++){let ot=rt*I-B;for(let Lt=0;Lt<G;Lt++){let Kt=Lt*S-F;J[g]=Kt*M,J[m]=ot*w,J[x]=N,c.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[x]=C>0?1:-1,h.push(J.x,J.y,J.z),u.push(Lt/_),u.push(1-rt/E),V+=1}}for(let rt=0;rt<E;rt++)for(let ot=0;ot<_;ot++){let Lt=d+ot+G*rt,Kt=d+ot+G*(rt+1),tt=d+(ot+1)+G*(rt+1),wt=d+(ot+1)+G*rt;l.push(Lt,Kt,wt),l.push(Kt,tt,wt),ct+=6}a.addGroup(f,ct,P),f+=ct,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zi=class n extends Ze{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+r,g=s+1,m=new U,x=new U;for(let M=0;M<=p;M++){let w=0,v=0,R=0,C=0;if(M<=i){let P=M/i,S=P*Math.PI/2;v=-h-t*Math.cos(S),R=t*Math.sin(S),C=-t*Math.cos(S),w=P*u}else if(M<=i+r){let P=(M-i)/r;v=-h+P*e,R=t,C=0,w=u+P*d}else{let P=(M-i-r)/i,S=P*Math.PI/2;v=h+t*Math.sin(S),R=t*Math.cos(S),C=t*Math.sin(S),w=u+d+P*u}let _=Math.max(0,Math.min(1,w/f)),E=0;M===0?E=.5/s:M===p&&(E=-.5/s);for(let P=0;P<=s;P++){let S=P/s,I=S*Math.PI*2,F=Math.sin(I),B=Math.cos(I);x.x=-R*B,x.y=v,x.z=R*F,a.push(x.x,x.y,x.z),m.set(-R*B,C,R*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(S+E,_)}if(M>0){let P=(M-1)*g;for(let S=0;S<s;S++){let I=P+S,F=P+S+1,B=M*g+S,N=M*g+S+1;o.push(I,F,B),o.push(F,N,B)}}}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Vi=class n extends Ze{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mt=class n extends Ze{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,g=[],m=i/2,x=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function M(){let v=new U,R=new U,C=0,_=(e-t)/i;for(let E=0;E<=r;E++){let P=[],S=E/r,I=S*(e-t)+t;for(let F=0;F<=s;F++){let B=F/s,N=B*l+a,G=Math.sin(N),q=Math.cos(N);R.x=I*G,R.y=-S*i+m,R.z=I*q,u.push(R.x,R.y,R.z),v.set(G,_,q).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-S),P.push(p++)}g.push(P)}for(let E=0;E<s;E++)for(let P=0;P<r;P++){let S=g[P][E],I=g[P+1][E],F=g[P+1][E+1],B=g[P][E+1];(t>0||P!==0)&&(h.push(S,I,B),C+=3),(e>0||P!==r-1)&&(h.push(I,F,B),C+=3)}c.addGroup(x,C,0),x+=C}function w(v){let R=p,C=new ht,_=new U,E=0,P=v===!0?t:e,S=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),p++;let I=p;for(let F=0;F<=s;F++){let N=F/s*l+a,G=Math.cos(N),q=Math.sin(N);_.x=P*q,_.y=m*S,_.z=P*G,u.push(_.x,_.y,_.z),d.push(0,S,0),C.x=G*.5+.5,C.y=q*.5*S+.5,f.push(C.x,C.y),p++}for(let F=0;F<s;F++){let B=R+F,N=I+F;v===!0?h.push(N,N+1,B):h.push(N+1,N,B),E+=3}c.addGroup(x,E,v===!0?1:2),x+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$n=class n extends mt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wl=class n extends Ze{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let w=new U,v=new U,R=new U;for(let C=0;C<e.length;C+=3)f(e[C+0],w),f(e[C+1],v),f(e[C+2],R),l(w,v,R,M)}function l(M,w,v,R){let C=R+1,_=[];for(let E=0;E<=C;E++){_[E]=[];let P=M.clone().lerp(v,E/C),S=w.clone().lerp(v,E/C),I=C-E;for(let F=0;F<=I;F++)F===0&&E===C?_[E][F]=P:_[E][F]=P.clone().lerp(S,F/I)}for(let E=0;E<C;E++)for(let P=0;P<2*(C-E)-1;P++){let S=Math.floor(P/2);P%2===0?(d(_[E][S+1]),d(_[E+1][S]),d(_[E][S])):(d(_[E][S+1]),d(_[E+1][S+1]),d(_[E+1][S]))}}function c(M){let w=new U;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(M),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let M=new U;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let v=m(M)/2/Math.PI+.5,R=x(M)/Math.PI+.5;o.push(v,1-R)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let w=o[M+0],v=o[M+2],R=o[M+4],C=Math.max(w,v,R),_=Math.min(w,v,R);C>.9&&_<.1&&(w<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,w){let v=M*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function p(){let M=new U,w=new U,v=new U,R=new U,C=new ht,_=new ht,E=new ht;for(let P=0,S=0;P<r.length;P+=9,S+=6){M.set(r[P+0],r[P+1],r[P+2]),w.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),C.set(o[S+0],o[S+1]),_.set(o[S+2],o[S+3]),E.set(o[S+4],o[S+5]),R.copy(M).add(w).add(v).divideScalar(3);let I=m(R);g(C,S+0,M,I),g(_,S+2,w,I),g(E,S+4,v,I)}}function g(M,w,v,R){R<0&&M.x===1&&(o[w]=M.x-1),v.x===0&&v.z===0&&(o[w]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function x(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new U,s=[],r=[],o=[],a=new U,l=new Jt;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Jr=class extends ni{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xl=class extends Jr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ed(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var qf=new U,Yf=new U,xu=new ed,yu=new ed,_u=new ed,Kr=class extends ni{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Yf.subVectors(s[0],s[1]).add(s[0]),c=Yf);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),xu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,g,m),yu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,g,m),_u.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(xu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),yu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_u.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(xu.calc(l),yu.calc(l),_u.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Mg(n,t){let e=1-n;return e*e*t}function vg(n,t){return 2*(1-n)*n*t}function bg(n,t){return n*n*t}function Fo(n,t,e,i){return Mg(n,t)+vg(n,e)+bg(n,i)}function Eg(n,t){let e=1-n;return e*e*e*t}function Sg(n,t){let e=1-n;return 3*e*e*n*t}function wg(n,t){return 3*(1-n)*n*n*t}function Tg(n,t){return n*n*n*t}function Oo(n,t,e,i,s){return Eg(n,t)+Sg(n,e)+wg(n,i)+Tg(n,s)}var Qo=class extends ni{constructor(t=new ht,e=new ht,i=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ht){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Oo(t,s.x,r.x,o.x,a.x),Oo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ql=class extends ni{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Oo(t,s.x,r.x,o.x,a.x),Oo(t,s.y,r.y,o.y,a.y),Oo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends ni{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yl=class extends ni{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends ni{constructor(t=new ht,e=new ht,i=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ht){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Fo(t,s.x,r.x,o.x),Fo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends ni{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Fo(t,s.x,r.x,o.x),Fo(t,s.y,r.y,o.y),Fo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Zf(a,l.x,c.x,h.x,u.x),Zf(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Zl=Object.freeze({__proto__:null,ArcCurve:Xl,CatmullRomCurve3:Kr,CubicBezierCurve:Qo,CubicBezierCurve3:ql,EllipseCurve:Jr,LineCurve:ta,LineCurve3:Yl,QuadraticBezierCurve:ea,QuadraticBezierCurve3:na,SplineCurve:ia}),$l=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Zl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},or=class extends $l{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ta(this.currentPoint.clone(),new ht(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ea(this.currentPoint.clone(),new ht(t,e),new ht(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Qo(this.currentPoint.clone(),new ht(t,e),new ht(i,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ia(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Jr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xn=class extends or{constructor(t){super(t),this.uuid=ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new or().fromJSON(s))}return this}};function Ag(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=X0(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Lg(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return sa(r,o,e,a,l,c,0),o}function X0(n,t,e,i,s){let r;if(s===Vg(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=$f(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=$f(o/i|0,n[o],n[o+1],r);return r&&jr(r,r.next)&&(oa(r),r=r.next),r}function ar(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(jr(e,e.next)||en(e.prev,e,e.next)===0)){if(oa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function sa(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Og(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Cg(n,i,s,r):Rg(n)){t.push(l.i,n.i,c.i),oa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Pg(ar(n),t),sa(n,t,e,i,s,r,2)):o===2&&Ig(n,t,e,i,s,r):sa(ar(n),t,e,i,s,r,1);break}}}function Rg(n){let t=n.prev,e=n,i=n.next;if(en(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Uo(s,a,r,l,o,c,p.x,p.y)&&en(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Cg(n,t,e,i){let s=n.prev,r=n,o=n.next;if(en(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),g=Math.max(a,l,c),m=Math.max(h,u,d),x=wu(f,p,t,e,i),M=wu(g,m,t,e,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=x&&v&&v.z<=M;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&Uo(a,h,l,u,c,d,w.x,w.y)&&en(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Uo(a,h,l,u,c,d,v.x,v.y)&&en(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=x;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&Uo(a,h,l,u,c,d,w.x,w.y)&&en(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Uo(a,h,l,u,c,d,v.x,v.y)&&en(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Pg(n,t){let e=n;do{let i=e.prev,s=e.next.next;!jr(i,s)&&Y0(i,e,e.next,s)&&ra(i,s)&&ra(s,i)&&(t.push(i.i,e.i,s.i),oa(e),oa(e.next),e=n=s),e=e.next}while(e!==n);return ar(e)}function Ig(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kg(o,a)){let l=Z0(o,a);o=ar(o,o.next),l=ar(l,l.next),sa(o,t,e,i,s,r,0),sa(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Lg(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=X0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Hg(c))}s.sort(Dg);for(let r=0;r<s.length;r++)e=Ng(s[r],e);return e}function Dg(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Ng(n,t){let e=Ug(n,t);if(!e)return t;let i=Z0(e,n);return ar(i,i.next),ar(e,e.next)}function Ug(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(jr(n,e))return e;do{if(jr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&q0(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);ra(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Fg(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Fg(n,t){return en(n.prev,n,t.prev)<0&&en(t.next,n,n.next)<0}function Og(n,t,e,i){let s=n;do s.z===0&&(s.z=wu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Bg(s)}function Bg(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function wu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Hg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function q0(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Uo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&q0(n,t,e,i,s,r,o,a)}function kg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Gg(n,t)&&(ra(n,t)&&ra(t,n)&&zg(n,t)&&(en(n.prev,n,t.prev)||en(n,t.prev,t))||jr(n,t)&&en(n.prev,n,n.next)>0&&en(t.prev,t,t.next)>0)}function en(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function jr(n,t){return n.x===t.x&&n.y===t.y}function Y0(n,t,e,i){let s=El(en(n,t,e)),r=El(en(n,t,i)),o=El(en(e,i,n)),a=El(en(e,i,t));return!!(s!==r&&o!==a||s===0&&bl(n,e,t)||r===0&&bl(n,i,t)||o===0&&bl(e,n,i)||a===0&&bl(e,t,i))}function bl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function El(n){return n>0?1:n<0?-1:0}function Gg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Y0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ra(n,t){return en(n.prev,n,n.next)<0?en(n,t,n.next)>=0&&en(n,n.prev,t)>=0:en(n,t,n.prev)<0||en(n,n.next,t)<0}function zg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Z0(n,t){let e=Tu(n.i,n.x,n.y),i=Tu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function $f(n,t,e,i){let s=Tu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function oa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tu(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vg(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Au=class{static triangulate(t,e,i=2){return Ag(t,e,i)}},Bi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Jf(t),Kf(i,t);let o=t.length;e.forEach(Jf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Kf(i,e[l]);let a=Au.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Jf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Kf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Jn=class n extends Ze{constructor(t=new Xn([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,x=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Wg,w,v=!1,R,C,_,E;if(x){w=x.getSpacedPoints(h),v=!0,d=!1;let lt=x.isCatmullRomCurve3?x.closed:!1;R=x.computeFrenetFrames(h,lt),C=new U,_=new U,E=new U}d||(m=0,f=0,p=0,g=0);let P=a.extractPoints(c),S=P.shape,I=P.holes;if(!Bi.isClockWise(S)){S=S.reverse();for(let lt=0,vt=I.length;lt<vt;lt++){let yt=I[lt];Bi.isClockWise(yt)&&(I[lt]=yt.reverse())}}function B(lt){let yt=10000000000000001e-36,Ht=lt[0];for(let Ct=1;Ct<=lt.length;Ct++){let fe=Ct%lt.length,Yt=lt[fe],Ae=Yt.x-Ht.x,Ce=Yt.y-Ht.y,Ne=Ae*Ae+Ce*Ce,k=Math.max(Math.abs(Yt.x),Math.abs(Yt.y),Math.abs(Ht.x),Math.abs(Ht.y)),hn=yt*k*k;if(Ne<=hn){lt.splice(fe,1),Ct--;continue}Ht=Yt}}B(S),I.forEach(B);let N=I.length,G=S;for(let lt=0;lt<N;lt++){let vt=I[lt];S=S.concat(vt)}function q(lt,vt,yt){return vt||se("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(vt,yt)}let V=S.length;function ct(lt,vt,yt){let Ht,Ct,fe,Yt=lt.x-vt.x,Ae=lt.y-vt.y,Ce=yt.x-lt.x,Ne=yt.y-lt.y,k=Yt*Yt+Ae*Ae,hn=Yt*Ne-Ae*Ce;if(Math.abs(hn)>Number.EPSILON){let Se=Math.sqrt(k),Ge=Math.sqrt(Ce*Ce+Ne*Ne),Tt=vt.x-Ae/Se,sn=vt.y+Yt/Se,te=yt.x-Ne/Ge,ce=yt.y+Ce/Ge,L=((te-Tt)*Ne-(ce-sn)*Ce)/(Yt*Ne-Ae*Ce);Ht=Tt+Yt*L-lt.x,Ct=sn+Ae*L-lt.y;let T=Ht*Ht+Ct*Ct;if(T<=2)return new ht(Ht,Ct);fe=Math.sqrt(T/2)}else{let Se=!1;Yt>Number.EPSILON?Ce>Number.EPSILON&&(Se=!0):Yt<-Number.EPSILON?Ce<-Number.EPSILON&&(Se=!0):Math.sign(Ae)===Math.sign(Ne)&&(Se=!0),Se?(Ht=-Ae,Ct=Yt,fe=Math.sqrt(k)):(Ht=Yt,Ct=Ae,fe=Math.sqrt(k/2))}return new ht(Ht/fe,Ct/fe)}let J=[];for(let lt=0,vt=G.length,yt=vt-1,Ht=lt+1;lt<vt;lt++,yt++,Ht++)yt===vt&&(yt=0),Ht===vt&&(Ht=0),J[lt]=ct(G[lt],G[yt],G[Ht]);let rt=[],ot,Lt=J.concat();for(let lt=0,vt=N;lt<vt;lt++){let yt=I[lt];ot=[];for(let Ht=0,Ct=yt.length,fe=Ct-1,Yt=Ht+1;Ht<Ct;Ht++,fe++,Yt++)fe===Ct&&(fe=0),Yt===Ct&&(Yt=0),ot[Ht]=ct(yt[Ht],yt[fe],yt[Yt]);rt.push(ot),Lt=Lt.concat(ot)}let Kt;if(m===0)Kt=Bi.triangulateShape(G,I);else{let lt=[],vt=[];for(let yt=0;yt<m;yt++){let Ht=yt/m,Ct=f*Math.cos(Ht*Math.PI/2),fe=p*Math.sin(Ht*Math.PI/2)+g;for(let Yt=0,Ae=G.length;Yt<Ae;Yt++){let Ce=q(G[Yt],J[Yt],fe);Ot(Ce.x,Ce.y,-Ct),Ht===0&&lt.push(Ce)}for(let Yt=0,Ae=N;Yt<Ae;Yt++){let Ce=I[Yt];ot=rt[Yt];let Ne=[];for(let k=0,hn=Ce.length;k<hn;k++){let Se=q(Ce[k],ot[k],fe);Ot(Se.x,Se.y,-Ct),Ht===0&&Ne.push(Se)}Ht===0&&vt.push(Ne)}}Kt=Bi.triangulateShape(lt,vt)}let tt=Kt.length,wt=p+g;for(let lt=0;lt<V;lt++){let vt=d?q(S[lt],Lt[lt],wt):S[lt];v?(_.copy(R.normals[0]).multiplyScalar(vt.x),C.copy(R.binormals[0]).multiplyScalar(vt.y),E.copy(w[0]).add(_).add(C),Ot(E.x,E.y,E.z)):Ot(vt.x,vt.y,0)}for(let lt=1;lt<=h;lt++)for(let vt=0;vt<V;vt++){let yt=d?q(S[vt],Lt[vt],wt):S[vt];v?(_.copy(R.normals[lt]).multiplyScalar(yt.x),C.copy(R.binormals[lt]).multiplyScalar(yt.y),E.copy(w[lt]).add(_).add(C),Ot(E.x,E.y,E.z)):Ot(yt.x,yt.y,u/h*lt)}for(let lt=m-1;lt>=0;lt--){let vt=lt/m,yt=f*Math.cos(vt*Math.PI/2),Ht=p*Math.sin(vt*Math.PI/2)+g;for(let Ct=0,fe=G.length;Ct<fe;Ct++){let Yt=q(G[Ct],J[Ct],Ht);Ot(Yt.x,Yt.y,u+yt)}for(let Ct=0,fe=I.length;Ct<fe;Ct++){let Yt=I[Ct];ot=rt[Ct];for(let Ae=0,Ce=Yt.length;Ae<Ce;Ae++){let Ne=q(Yt[Ae],ot[Ae],Ht);v?Ot(Ne.x,Ne.y+w[h-1].y,w[h-1].x+yt):Ot(Ne.x,Ne.y,u+yt)}}}Bt(),jt();function Bt(){let lt=s.length/3;if(d){let vt=0,yt=V*vt;for(let Ht=0;Ht<tt;Ht++){let Ct=Kt[Ht];pe(Ct[2]+yt,Ct[1]+yt,Ct[0]+yt)}vt=h+m*2,yt=V*vt;for(let Ht=0;Ht<tt;Ht++){let Ct=Kt[Ht];pe(Ct[0]+yt,Ct[1]+yt,Ct[2]+yt)}}else{for(let vt=0;vt<tt;vt++){let yt=Kt[vt];pe(yt[2],yt[1],yt[0])}for(let vt=0;vt<tt;vt++){let yt=Kt[vt];pe(yt[0]+V*h,yt[1]+V*h,yt[2]+V*h)}}i.addGroup(lt,s.length/3-lt,0)}function jt(){let lt=s.length/3,vt=0;K(G,vt),vt+=G.length;for(let yt=0,Ht=I.length;yt<Ht;yt++){let Ct=I[yt];K(Ct,vt),vt+=Ct.length}i.addGroup(lt,s.length/3-lt,1)}function K(lt,vt){let yt=lt.length;for(;--yt>=0;){let Ht=yt,Ct=yt-1;Ct<0&&(Ct=lt.length-1);for(let fe=0,Yt=h+m*2;fe<Yt;fe++){let Ae=V*fe,Ce=V*(fe+1),Ne=vt+Ht+Ae,k=vt+Ct+Ae,hn=vt+Ct+Ce,Se=vt+Ht+Ce;Zt(Ne,k,hn,Se)}}}function Ot(lt,vt,yt){l.push(lt),l.push(vt),l.push(yt)}function pe(lt,vt,yt){me(lt),me(vt),me(yt);let Ht=s.length/3,Ct=M.generateTopUV(i,s,Ht-3,Ht-2,Ht-1);Te(Ct[0]),Te(Ct[1]),Te(Ct[2])}function Zt(lt,vt,yt,Ht){me(lt),me(vt),me(Ht),me(vt),me(yt),me(Ht);let Ct=s.length/3,fe=M.generateSideWallUV(i,s,Ct-6,Ct-3,Ct-2,Ct-1);Te(fe[0]),Te(fe[1]),Te(fe[3]),Te(fe[1]),Te(fe[2]),Te(fe[3])}function me(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function Te(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Xg(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zl[s.type]().fromJSON(s)),new n(i,t.options)}},Wg={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],g=t[r*3],m=t[r*3+1],x=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(d,1-p),new ht(g,1-x)]:[new ht(a,1-l),new ht(h,1-u),new ht(f,1-p),new ht(m,1-x)]}};function Xg(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ii=class n extends Wl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},lr=class n extends Ze{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new U,d=new ht,f=new U,p=new U,g=new U,m=0,x=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,x=t[M+1].y-t[M].y,f.x=x*1,f.y=-m,f.z=x*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=t[M+1].x-t[M].x,x=t[M+1].y-t[M].y,f.x=x*1,f.y=-m,f.z=x*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(p)}for(let M=0;M<=e;M++){let w=i+M*h*s,v=Math.sin(w),R=Math.cos(w);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*v,u.y=t[C].y,u.z=t[C].x*R,o.push(u.x,u.y,u.z),d.x=M/e,d.y=C/(t.length-1),a.push(d.x,d.y);let _=l[3*C+0]*v,E=l[3*C+1],P=l[3*C+0]*R;c.push(_,E,P)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){let v=w+M*t.length,R=v,C=v+t.length,_=v+t.length+1,E=v+1;r.push(R,C,E),r.push(_,E,C)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Fe=class n extends Ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],g=[],m=[];for(let x=0;x<h;x++){let M=x*d-o;for(let w=0;w<c;w++){let v=w*u-r;p.push(v,-M,0),g.push(0,0,1),m.push(w/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let M=0;M<a;M++){let w=M+c*x,v=M+c*(x+1),R=M+1+c*(x+1),C=M+1+c*x;f.push(w,v,C),f.push(v,R,C)}this.setIndex(f),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var aa=class n extends Ze{constructor(t=new Xn([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;Bi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,x=p.length;m<x;m++){let M=p[m];Bi.isClockWise(M)===!0&&(p[m]=M.reverse())}let g=Bi.triangulateShape(f,p);for(let m=0,x=p.length;m<x;m++){let M=p[m];f=f.concat(M)}for(let m=0,x=f.length;m<x;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,x=g.length;m<x;m++){let M=g[m],w=M[0]+u,v=M[1]+u,R=M[2]+u;i.push(w,v,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return qg(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function qg(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var xe=class n extends Ze{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,d=new U,f=[],p=[],g=[],m=[];for(let x=0;x<=i;x++){let M=[],w=x/i,v=o+w*a,R=t*Math.cos(v),C=Math.sqrt(t*t-R*R),_=0;x===0&&o===0?_=.5/e:x===i&&l===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){let P=E/e,S=s+P*r;u.x=-C*Math.cos(S),u.y=R,u.z=C*Math.sin(S),p.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(P+_,1-w),M.push(c++)}h.push(M)}for(let x=0;x<i;x++)for(let M=0;M<e;M++){let w=h[x][M+1],v=h[x][M],R=h[x+1][M],C=h[x+1][M+1];(x!==0||o>0)&&f.push(w,v,C),(x!==i-1||l<Math.PI)&&f.push(v,R,C)}this.setIndex(f),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $e=class n extends Ze{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new U,f=new U,p=new U;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let x=0;x<=s;x++){let M=x/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(x/s),u.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=s;m++){let x=(s+1)*g+m-1,M=(s+1)*(g-1)+m-1,w=(s+1)*(g-1)+m,v=(s+1)*g+m;l.push(x,M,v),l.push(M,w,v)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var la=class n extends Ze{constructor(t=new na(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new ht,h=new U,u=[],d=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function g(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),M(),x()}function m(w){h=t.getPointAt(w/e,h);let v=o.normals[w],R=o.binormals[w];for(let C=0;C<=s;C++){let _=C/s*Math.PI*2,E=Math.sin(_),P=-Math.cos(_);l.x=P*v.x+E*R.x,l.y=P*v.y+E*R.y,l.z=P*v.z+E*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){let R=(s+1)*(w-1)+(v-1),C=(s+1)*w+(v-1),_=(s+1)*w+v,E=(s+1)*(w-1)+v;p.push(R,C,E),p.push(C,_,E)}}function M(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)c.x=w/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Zl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function mr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(jf(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(jf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Fn(n){let t={};for(let e=0;e<n.length;e++){let i=mr(n[e]);for(let s in i)t[s]=i[s]}return t}function jf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function nd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}var $0={clone:mr,merge:Fn},Zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zg,this.fragmentShader=$g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=Yg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new re().setHex(s.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ke().fromArray(s.value);break;case"m3":this.uniforms[i].value=new he().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Jt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Jl=class extends di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ie=class extends Gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wi=class extends ie{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return sr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){sr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ca=class extends Gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=dc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Kl=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jl=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Br(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Sl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ns=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ql=class extends Ns{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bu,endingEnd:bu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eu:r=t,a=2*e-i;break;case Su:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eu:o=t,l=2*i-e;break;case Su:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),g=p*p,m=g*p,x=-d*m+2*d*g-d*p,M=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,w=(-1-f)*m+(1.5+f)*g+.5*p,v=f*m-f*g;for(let R=0;R!==a;++R)r[R]=x*o[h+R]+M*o[c+R]+w*o[l+R]+v*o[u+R];return r}},tc=class extends Ns{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ec=class extends Ns{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},nc=class extends Ns{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(s-e),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],x=f*d+p*2,M=u[x],w=u[x+1],v=t*d+p*2,R=h[v],C=h[v+1],_=Kg(i,e,M,R,s);r[p]=J0(_,g,w,C,m)}return r}};function J0(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Jg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Kg(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=J0(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Jg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var si=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(e,this.TimeBufferType),this.values=Br(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Sl(t.settings)&&(i.settings={inTangents:Br(t.settings.inTangents,Array),outTangents:Br(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new nc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Bo:e=this.InterpolantFactoryMethodDiscrete;break;case Ol:e=this.InterpolantFactoryMethodLinear;break;case Al:e=this.InterpolantFactoryMethodSmooth;break;case vu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ee("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return Al;case this.InterpolantFactoryMethodBezier:return vu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Sl(this.settings)&&(Qf(this.settings.inTangents,t),Qf(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Sl(this.settings)&&(t0(this.settings.inTangents,t),t0(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){se("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){se("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Qm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){se("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Al,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let g=e[u+p];if(g!==e[d+p]||g!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Sl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function t0(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Ol;var Us=class extends si{constructor(t,e,i){super(t,e,i)}};Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Bo;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends si{constructor(t,e,i,s){super(t,e,i,s)}};ic.prototype.ValueTypeName="color";var sc=class extends si{constructor(t,e,i,s){super(t,e,i,s)}};sc.prototype.ValueTypeName="number";var rc=class extends Ns{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},ha=class extends si{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends si{constructor(t,e,i){super(t,e,i)}};Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Bo;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends si{constructor(t,e,i,s){super(t,e,i,s)}};oc.prototype.ValueTypeName="vector";var ac=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},K0=new ac,lc=class{constructor(t){this.manager=t!==void 0?t:K0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};lc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qr=class extends qe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},to=class extends Qr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Mu=new Jt,e0=new U,n0=new U,ua=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;e0.setFromMatrixPosition(t.matrixWorld),e.position.copy(e0),n0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(n0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Mu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Vr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Mu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wl=new U,Tl=new ln,Fi=new U,da=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wl,Tl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Tl,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(wl,Tl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Tl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new U,i0=new ht,s0=new ht,Rn=class extends da{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($h*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan($h*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z)}getViewSize(t,e){return this.getViewBounds(t,i0,s0),e.subVectors(s0,i0)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($h*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ru=class extends ua{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}},wn=class extends Qr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ru}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},fa=class extends da{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cu=class extends ua{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eo=class extends Qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Cu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Hr=-90,kr=1,no=class extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(Hr,kr,t,e);s.layers=this.layers,this.add(s);let r=new Rn(Hr,kr,t,e);r.layers=this.layers,this.add(r);let o=new Rn(Hr,kr,t,e);o.layers=this.layers,this.add(o);let a=new Rn(Hr,kr,t,e);a.layers=this.layers,this.add(a);let l=new Rn(Hr,kr,t,e);l.layers=this.layers,this.add(l);let c=new Rn(Hr,kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=g,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},cc=class extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var id="\\[\\]\\.:\\/",jg=new RegExp("["+id+"]","g"),sd="[^"+id+"]",Qg="[^"+id.replace("\\.","")+"]",t1=/((?:WC+[\/:])*)/.source.replace("WC",sd),e1=/(WCOD+)?/.source.replace("WCOD",Qg),n1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sd),i1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sd),s1=new RegExp("^"+t1+e1+n1+i1+"$"),r1=["material","materials","bones","map"],Pu=class{constructor(t,e,i){let s=i||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ye=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(t){let e=s1.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);r1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;se("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=Pu;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O2=new Float32Array(1);var hd=class hd{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};hd.prototype.isMatrix2=!0;var Iu=hd;function rd(n,t,e,i){let s=o1(i);switch(e){case Zu:return n*t;case _c:return n*t/s.components*s.byteLength;case Mc:return n*t/s.components*s.byteLength;case Hs:return n*t*2/s.components*s.byteLength;case vc:return n*t*2/s.components*s.byteLength;case $u:return n*t*3/s.components*s.byteLength;case Ci:return n*t*4/s.components*s.byteLength;case bc:return n*t*4/s.components*s.byteLength;case ga:case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ya:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sc:case Tc:return Math.max(n,16)*Math.max(t,8)/4;case Ec:case wc:return Math.max(n,8)*Math.max(t,8)/2;case Ac:case Rc:case Pc:case Ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cc:case Ma:case Lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case zc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case qc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yc:case Zc:case $c:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Jc:case Kc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case va:case jc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function o1(n){switch(n){case Kn:case Wu:return{byteLength:1,components:1};case ro:case Xu:case Ri:return{byteLength:2,components:1};case xc:case yc:return{byteLength:2,components:4};case Ai:case gc:case fi:return{byteLength:4,components:1};case qu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function _p(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function d1(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],g=u[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let g=u[f];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var f1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p1=`#ifdef USE_ALPHAHASH
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
#endif`,m1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
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
#endif`,M1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
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
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T1=`#ifdef USE_IRIDESCENCE
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
#endif`,A1=`#ifdef USE_BUMPMAP
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
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,F1=`#define PI 3.141592653589793
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
} // validated`,O1=`vec3 transformedNormal = objectNormal;
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
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,Y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ix=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
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
#endif`,hx=`uniform sampler2D dfgLUT;
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
}`,ux=`
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,px=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tx=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ux=`#ifdef USE_NORMALMAP
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
#endif`,Fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`uniform float backgroundBlurriness;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`#include <common>
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
}`,_y=`#if DEPTH_PACKING == 3200
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
}`,My=`#define DISTANCE
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
}`,vy=`#define DISTANCE
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`uniform float scale;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#define LAMBERT
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
}`,Cy=`#define LAMBERT
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
}`,Py=`#define MATCAP
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
}`,Iy=`#define MATCAP
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
}`,Ly=`#define NORMAL
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
}`,Dy=`#define NORMAL
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
}`,Ny=`#define PHONG
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
}`,Uy=`#define PHONG
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
}`,Fy=`#define STANDARD
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
}`,Oy=`#define STANDARD
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
}`,By=`#define TOON
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
}`,Hy=`#define TOON
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
}`,ky=`uniform float size;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,zy=`#include <common>
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
}`,Vy=`uniform vec3 color;
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
}`,Wy=`uniform float rotation;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:f1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:g1,alphatest_fragment:x1,alphatest_pars_fragment:y1,aomap_fragment:_1,aomap_pars_fragment:M1,batching_pars_vertex:v1,batching_vertex:b1,begin_vertex:E1,beginnormal_vertex:S1,bsdfs:w1,iridescence_fragment:T1,bumpmap_pars_fragment:A1,clipping_planes_fragment:R1,clipping_planes_pars_fragment:C1,clipping_planes_pars_vertex:P1,clipping_planes_vertex:I1,color_fragment:L1,color_pars_fragment:D1,color_pars_vertex:N1,color_vertex:U1,common:F1,defaultnormal_vertex:O1,displacementmap_pars_vertex:B1,displacementmap_vertex:H1,emissivemap_fragment:k1,emissivemap_pars_fragment:G1,colorspace_fragment:z1,colorspace_pars_fragment:V1,envmap_fragment:W1,envmap_common_pars_fragment:X1,envmap_pars_fragment:q1,envmap_pars_vertex:Y1,envmap_physical_pars_fragment:sx,envmap_vertex:Z1,fog_vertex:$1,fog_pars_vertex:J1,fog_fragment:K1,fog_pars_fragment:j1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:tx,lights_lambert_fragment:ex,lights_lambert_pars_fragment:nx,lights_pars_begin:ix,lights_toon_fragment:rx,lights_toon_pars_fragment:ox,lights_phong_fragment:ax,lights_phong_pars_fragment:lx,lights_physical_fragment:cx,lights_physical_pars_fragment:hx,lights_fragment_begin:ux,lights_fragment_maps:dx,lights_fragment_end:fx,lightprobes_pars_fragment:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:yx,map_fragment:_x,map_pars_fragment:Mx,map_particle_fragment:vx,map_particle_pars_fragment:bx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:Sx,morphinstance_vertex:wx,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Ix,normal_pars_fragment:Lx,normal_pars_vertex:Dx,normal_vertex:Nx,normalmap_pars_fragment:Ux,clearcoat_normal_fragment_begin:Fx,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:Hx,opaque_fragment:kx,packing:Gx,premultiplied_alpha_fragment:zx,project_vertex:Vx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:Zx,shadowmap_pars_vertex:$x,shadowmap_vertex:Jx,shadowmask_pars_fragment:Kx,skinbase_vertex:jx,skinning_pars_vertex:Qx,skinning_vertex:ty,skinnormal_vertex:ey,specularmap_fragment:ny,specularmap_pars_fragment:iy,tonemapping_fragment:sy,tonemapping_pars_fragment:ry,transmission_fragment:oy,transmission_pars_fragment:ay,uv_pars_fragment:ly,uv_pars_vertex:cy,uv_vertex:hy,worldpos_vertex:uy,background_vert:dy,background_frag:fy,backgroundCube_vert:py,backgroundCube_frag:my,cube_vert:gy,cube_frag:xy,depth_vert:yy,depth_frag:_y,distance_vert:My,distance_frag:vy,equirect_vert:by,equirect_frag:Ey,linedashed_vert:Sy,linedashed_frag:wy,meshbasic_vert:Ty,meshbasic_frag:Ay,meshlambert_vert:Ry,meshlambert_frag:Cy,meshmatcap_vert:Py,meshmatcap_frag:Iy,meshnormal_vert:Ly,meshnormal_frag:Dy,meshphong_vert:Ny,meshphong_frag:Uy,meshphysical_vert:Fy,meshphysical_frag:Oy,meshtoon_vert:By,meshtoon_frag:Hy,points_vert:ky,points_frag:Gy,shadow_vert:zy,shadow_frag:Vy,sprite_vert:Wy,sprite_frag:Xy},Ut={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Yi={basic:{uniforms:Fn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Fn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Fn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Fn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Fn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new re(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Fn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Fn([Ut.points,Ut.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Fn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Fn([Ut.common,Ut.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Fn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Fn([Ut.sprite,Ut.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:Fn([Ut.common,Ut.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:Fn([Ut.lights,Ut.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Yi.physical={uniforms:Fn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};var th={r:0,b:0,g:0},qy=new Jt,Mp=new he;Mp.set(-1,0,0,0,1,0,0,0,1);function Yy(n,t,e,i,s,r){let o=new re(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let v=M.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(M){let w=!1,v=f(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,w){let v=f(w);v&&v.isCubeTexture?(c===void 0&&(c=new D(new de(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:mr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,C,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mp),c.material.toneMapped=Le.getTransfer(v.colorSpace)!==Oe,(h!==v||u!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new D(new Fe(2,2),new di({name:"BackgroundMaterial",uniforms:mr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Le.getTransfer(v.colorSpace)!==Oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(th,nd(n)),e.buffers.color.setClear(th.r,th.g,th.b,w,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:g,dispose:x}}function Zy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(I,F,B,N,G){let q=!1,V=u(I,N,B,F);r!==V&&(r=V,c(r.object)),q=f(I,N,B,G),q&&p(I,N,B,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(I,F,B,N),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function u(I,F,B,N){let G=N.wireframe===!0,q=i[F.id];q===void 0&&(q={},i[F.id]=q);let V=I.isInstancedMesh===!0?I.id:0,ct=q[V];ct===void 0&&(ct={},q[V]=ct);let J=ct[B.id];J===void 0&&(J={},ct[B.id]=J);let rt=J[G];return rt===void 0&&(rt=d(l()),J[G]=rt),rt}function d(I){let F=[],B=[],N=[];for(let G=0;G<e;G++)F[G]=0,B[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:N,object:I,attributes:{},index:null}}function f(I,F,B,N){let G=r.attributes,q=F.attributes,V=0,ct=B.getAttributes();for(let J in ct)if(ct[J].location>=0){let ot=G[J],Lt=q[J];if(Lt===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Lt=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Lt=I.instanceColor)),ot===void 0||ot.attribute!==Lt||Lt&&ot.data!==Lt.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function p(I,F,B,N){let G={},q=F.attributes,V=0,ct=B.getAttributes();for(let J in ct)if(ct[J].location>=0){let ot=q[J];ot===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor));let Lt={};Lt.attribute=ot,ot&&ot.data&&(Lt.data=ot.data),G[J]=Lt,V++}r.attributes=G,r.attributesNum=V,r.index=N}function g(){let I=r.newAttributes;for(let F=0,B=I.length;F<B;F++)I[F]=0}function m(I){x(I,0)}function x(I,F){let B=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;B[I]=1,N[I]===0&&(n.enableVertexAttribArray(I),N[I]=1),G[I]!==F&&(n.vertexAttribDivisor(I,F),G[I]=F)}function M(){let I=r.newAttributes,F=r.enabledAttributes;for(let B=0,N=F.length;B<N;B++)F[B]!==I[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function w(I,F,B,N,G,q,V){V===!0?n.vertexAttribIPointer(I,F,B,G,q):n.vertexAttribPointer(I,F,B,N,G,q)}function v(I,F,B,N){g();let G=N.attributes,q=B.getAttributes(),V=F.defaultAttributeValues;for(let ct in q){let J=q[ct];if(J.location>=0){let rt=G[ct];if(rt===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),rt!==void 0){let ot=rt.normalized,Lt=rt.itemSize,Kt=t.get(rt);if(Kt===void 0)continue;let tt=Kt.buffer,wt=Kt.type,Bt=Kt.bytesPerElement,jt=wt===n.INT||wt===n.UNSIGNED_INT||rt.gpuType===gc;if(rt.isInterleavedBufferAttribute){let K=rt.data,Ot=K.isInterleavedBuffer===!0?K.stride:K.itemSize,pe=rt.offset;if(K.isInstancedInterleavedBuffer||K.isInstancedBufferAttribute){for(let Zt=0;Zt<J.locationSize;Zt++)x(J.location+Zt,K.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Zt=0;Zt<J.locationSize;Zt++)m(J.location+Zt);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Zt=0;Zt<J.locationSize;Zt++)w(J.location+Zt,Lt/J.locationSize,wt,ot,Ot*Bt,(pe+Lt/J.locationSize*Zt)*Bt,jt)}else{if(rt.isInstancedBufferAttribute){for(let K=0;K<J.locationSize;K++)x(J.location+K,rt.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let K=0;K<J.locationSize;K++)m(J.location+K);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let K=0;K<J.locationSize;K++)w(J.location+K,Lt/J.locationSize,wt,ot,Lt*Bt,Lt/J.locationSize*K*Bt,jt)}}else if(V!==void 0){let ot=V[ct];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(J.location,ot);break;case 3:n.vertexAttrib3fv(J.location,ot);break;case 4:n.vertexAttrib4fv(J.location,ot);break;default:n.vertexAttrib1fv(J.location,ot)}}}}M()}function R(){P();for(let I in i){let F=i[I];for(let B in F){let N=F[B];for(let G in N){let q=N[G];for(let V in q)h(q[V].object),delete q[V];delete N[G]}}delete i[I]}}function C(I){if(i[I.id]===void 0)return;let F=i[I.id];for(let B in F){let N=F[B];for(let G in N){let q=N[G];for(let V in q)h(q[V].object),delete q[V];delete N[G]}}delete i[I.id]}function _(I){for(let F in i){let B=i[F];for(let N in B){let G=B[N];if(G[I.id]===void 0)continue;let q=G[I.id];for(let V in q)h(q[V].object),delete q[V];delete G[I.id]}}}function E(I){for(let F in i){let B=i[F],N=I.isInstancedMesh===!0?I.id:0,G=B[N];if(G!==void 0){for(let q in G){let V=G[q];for(let ct in V)h(V[ct].object),delete V[ct];delete G[q]}delete B[N],Object.keys(B).length===0&&delete i[F]}}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function $y(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Jy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Ci&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let E=_===Ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Kn&&_!==fi&&!E&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&ee("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:R,samples:C}}function Ky(n){let t=this,e=null,i=0,s=!1,r=!1,o=new wi,a=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,x=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,w=M*4,v=x.clippingState||null;l.value=v,v=h(p,d,w,f);for(let R=0;R!==w;++R)v[R]=e[R];x.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let x=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<x)&&(m=new Float32Array(x));for(let w=0,v=f;w!==g;++w,v+=4)o.copy(u[w]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}var wa=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Jo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:hr});r.uniforms.tEquirect.value=e;let o=new D(s,r),a=e.minFilter;return e.minFilter===us&&(e.minFilter=Vn),new no(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},j0=256,jy=3,Qy=20,vp=256,bp=16,t_=3,e_=new U,n_=new re,ao=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new no(1,10,null),this._boxMesh=new D(new de(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=e_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(t.background=l.getClearColor(n_));let m=new no(i,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=g,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(j0,k0(t))}_fromTexture(t,e){t.mapping===fr||t.mapping===so?this._setSize(t.image.length===0?j0:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Q0(t,!1,!1),i=Math.log2(t)-jy;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Q0(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===fr||t.mapping===so?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=tp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=i_(),this._integrationMaterial=s_());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/bp);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-t_)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(vp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=r_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Q0(n,t,e){return new wa(n,{minFilter:us,generateMipmaps:t,type:Ri,colorSpace:Ho,depthBuffer:e})}function Ta(n,t,e){return new di({name:n,uniforms:t,vertexShader:Me.cube_vert,fragmentShader:e,side:gn,blending:hr,depthTest:!1,depthWrite:!1})}function i_(){return Ta("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vp}u

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
	`)}function s_(){return Ta("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bp}},`

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
	`)}function r_(){return Ta("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Qy}
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
	`)}function tp(){return Ta("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ep(){return Ta("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function o_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===fc||f===pc)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let g=new wa(p.height);return g.fromEquirectangularTexture(n,d),t.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===fc||f===pc,g=f===fr||f===so;if(p||g){let m=e.get(d),x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new ao(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new ao(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===fc?d.mapping=fr:f===pc&&(d.mapping=so),d}function l(d){let f=0,p=6;for(let g=0;g<p;g++)d[g]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function a_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&sr("WebGLRenderer: "+i+" extension not supported."),s}}}function l_(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let g=r.get(p);g&&(t.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",a),s[g.id]=new WeakRef(g),o.register(g,g.id,g),e.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)t.update(g[m],n.ARRAY_BUFFER)}function u(p){let g=p.index,m=p.attributes.position,x=0;if(m===void 0)return;let M=g!==null?g.array.length:m.array.length/3-1,w=m.count>=65535?Yo:qo,v=new w(Math.ceil(M/3)*6,1),R=v.array;if(g!==null){let _=g.array;x=g.version;for(let E=0,P=0;E<M;E+=3){let S=_[E+0],I=_[E+1],F=_[E+2];R[P++]=S,R[P++]=I,R[P++]=I,R[P++]=F,R[P++]=F,R[P++]=S}}else{x=m.version;for(let _=0,E=0;_<M;_+=3){let P=_+0,S=_+1,I=_+2;R[E++]=P,R[E++]=S,R[E++]=S,R[E++]=I,R[E++]=I,R[E++]=P}}v.version=x;let C=r.get(p);C&&t.remove(C),r.set(p,v)}function d(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let g=s[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function c_(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];e.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function h_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function u_(n,t,e){let i=new WeakMap,s=new Ke;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),g===!0&&(w=3);let v=a.attributes.position.count*w,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let C=new Float32Array(v*R*4*u),_=new Vo(C,v,R,u);_.type=fi,_.needsUpdate=!0;let E=w*4;for(let S=0;S<u;S++){let I=m[S],F=x[S],B=M[S],N=v*R*4*S;for(let G=0;G<I.count;G++){let q=G*E;f===!0&&(s.fromBufferAttribute(I,G),C[N+q+0]=s.x,C[N+q+1]=s.y,C[N+q+2]=s.z,C[N+q+3]=0),p===!0&&(s.fromBufferAttribute(F,G),C[N+q+4]=s.x,C[N+q+5]=s.y,C[N+q+6]=s.z,C[N+q+7]=0),g===!0&&(s.fromBufferAttribute(B,G),C[N+q+8]=s.x,C[N+q+9]=s.y,C[N+q+10]=s.z,C[N+q+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new ht(v,R)},i.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function d_(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var f_={[Ou]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[Hu]:"CINEON_TONE_MAPPING",[pa]:"ACES_FILMIC_TONE_MAPPING",[Gu]:"AGX_TONE_MAPPING",[zu]:"NEUTRAL_TONE_MAPPING",[ku]:"CUSTOM_TONE_MAPPING"};function p_(n,t,e,i,s,r){let o=new ei(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ze;h.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ne([0,2,0,0,2,0],2));let u=new Jl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new D(h,u),f=new fa(-1,1,1,-1,0,1),p=null,g=null,m=!1,x,M=null,w=[],v=!1;this.setSize=function(R,C){o.setSize(R,C),a!==null&&a.setSize(R,C),l!==null&&l.setSize(R,C);for(let _=0;_<w.length;_++){let E=w[_];E.setSize&&E.setSize(R,C)}},this.setEffects=function(R){w=R,v=w.length>0&&w[0].isRenderPass===!0;let C=o.width,_=o.height;w.length>0&&a===null&&(a=new ei(C,_,{type:Ri,depthBuffer:!1,stencilBuffer:!1}),l=new ei(C,_,{type:Ri,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&w.some(P=>P.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&c===null&&(c=new hs(C,_),r===!0&&(c.format=ds,c.type=pr)),o.dispose(),o.depthTexture=E?c:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let P=0;P<w.length;P++){let S=w[P];S.setSize&&S.setSize(C,_),E&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(c)}},this.begin=function(R,C){if(m||R.toneMapping===Xi&&w.length===0)return!1;if(M=C,C!==null){let _=C.width,E=C.height;(o.width!==_||o.height!==E)&&this.setSize(_,E)}return v===!1&&R.setRenderTarget(o),x=R.toneMapping,R.toneMapping=Xi,!0},this.hasRenderPass=function(){return v},this.end=function(R,C){R.toneMapping=x,m=!0;let _=o,E=a;for(let P=0;P<w.length;P++){let S=w[P];S.enabled!==!1&&(S.render(R,E,_,C),S.needsSwap!==!1&&(_=E,E=E===a?l:a))}if(p!==R.outputColorSpace||g!==R.toneMapping){p=R.outputColorSpace,g=R.toneMapping,u.defines={},Le.getTransfer(p)===Oe&&(u.defines.SRGB_TRANSFER="");let P=f_[g];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(M),R.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Ep=new Wn,Sp=new hs(1,1),wp=new Ko(1),Tp=new Vo,Ap=new Gl,Rp=new Jo,np=[],ip=[],sp=new Float32Array(16),rp=new Float32Array(9),op=new Float32Array(4);function lo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=np[s];if(r===void 0&&(r=new Float32Array(s),np[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function xn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function yn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ih(n,t){let e=ip[t];e===void 0&&(e=new Int32Array(t),ip[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function m_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function g_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2fv(this.addr,t),yn(e,t)}}function x_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xn(e,t))return;n.uniform3fv(this.addr,t),yn(e,t)}}function y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4fv(this.addr,t),yn(e,t)}}function __(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),yn(e,t)}else{if(xn(e,i))return;op.set(i),n.uniformMatrix2fv(this.addr,!1,op),yn(e,i)}}function M_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),yn(e,t)}else{if(xn(e,i))return;rp.set(i),n.uniformMatrix3fv(this.addr,!1,rp),yn(e,i)}}function v_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),yn(e,t)}else{if(xn(e,i))return;sp.set(i),n.uniformMatrix4fv(this.addr,!1,sp),yn(e,i)}}function b_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function E_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2iv(this.addr,t),yn(e,t)}}function S_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;n.uniform3iv(this.addr,t),yn(e,t)}}function w_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4iv(this.addr,t),yn(e,t)}}function T_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function A_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2uiv(this.addr,t),yn(e,t)}}function R_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;n.uniform3uiv(this.addr,t),yn(e,t)}}function C_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4uiv(this.addr,t),yn(e,t)}}function sh(n){return n.version===0&&(n.compareFunction=ju,n.needsUpdate=!0),n}function P_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=sh(Sp):r=Ep,e.setTexture2D(t||r,s)}function I_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ap,s)}function L_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=sh(wp):r=Rp,e.setTextureCube(t||r,s)}function D_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Tp,s)}function N_(n){switch(n){case 5126:return m_;case 35664:return g_;case 35665:return x_;case 35666:return y_;case 35674:return __;case 35675:return M_;case 35676:return v_;case 5124:case 35670:return b_;case 35667:case 35671:return E_;case 35668:case 35672:return S_;case 35669:case 35673:return w_;case 5125:return T_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}function U_(n,t){n.uniform1fv(this.addr,t)}function F_(n,t){let e=lo(t,this.size,2);n.uniform2fv(this.addr,e)}function O_(n,t){let e=lo(t,this.size,3);n.uniform3fv(this.addr,e)}function B_(n,t){let e=lo(t,this.size,4);n.uniform4fv(this.addr,e)}function H_(n,t){let e=lo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function k_(n,t){let e=lo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function G_(n,t){let e=lo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function z_(n,t){n.uniform1iv(this.addr,t)}function V_(n,t){n.uniform2iv(this.addr,t)}function W_(n,t){n.uniform3iv(this.addr,t)}function X_(n,t){n.uniform4iv(this.addr,t)}function q_(n,t){n.uniform1uiv(this.addr,t)}function Y_(n,t){n.uniform2uiv(this.addr,t)}function Z_(n,t){n.uniform3uiv(this.addr,t)}function $_(n,t){n.uniform4uiv(this.addr,t)}function J_(n,t,e){let i=this.cache,s=t.length,r=ih(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=sh(Sp):o=Ep;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function K_(n,t,e){let i=this.cache,s=t.length,r=ih(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ap,r[o])}function j_(n,t,e){let i=this.cache,s=t.length,r=ih(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=sh(wp):o=Rp;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Q_(n,t,e){let i=this.cache,s=t.length,r=ih(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Tp,r[o])}function tM(n){switch(n){case 5126:return U_;case 35664:return F_;case 35665:return O_;case 35666:return B_;case 35674:return H_;case 35675:return k_;case 35676:return G_;case 5124:case 35670:return z_;case 35667:case 35671:return V_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return Y_;case 36295:return Z_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return Q_}}var fd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=N_(e.type)}},pd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tM(e.type)}},md=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},ud=/(\w+)(\])?(\[|\.)?/g;function ap(n,t){n.seq.push(t),n.map[t.id]=t}function eM(n,t,e){let i=n.name,s=i.length;for(ud.lastIndex=0;;){let r=ud.exec(i),o=ud.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ap(e,c===void 0?new fd(a,n,t):new pd(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new md(a),ap(e,u)),e=u}}}var oo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);eM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function lp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var nM=37297,iM=0;function sM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var cp=new he;function rM(n){Le._getMatrix(cp,Le.workingColorSpace,n);let t=`mat3( ${cp.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(n)){case ko:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function hp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+sM(n.getShaderSource(t),a)}else return r}function oM(n,t){let e=rM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var aM={[Ou]:"Linear",[Bu]:"Reinhard",[Hu]:"Cineon",[pa]:"ACESFilmic",[Gu]:"AgX",[zu]:"Neutral",[ku]:"Custom"};function lM(n,t){let e=aM[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var eh=new U;function cM(){Le.getLuminanceCoefficients(eh);let n=eh.x.toFixed(4),t=eh.y.toFixed(4),e=eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function uM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Sa(n){return n!==""}function up(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function dp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(n){return n.replace(fM,pM)}function pM(n,t){let e=Me[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return gd(e)}var mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fp(n){return n.replace(mM,gM)}function gM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var xM={[cr]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function yM(n){return xM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _M={[so]:"ENVMAP_MODE_REFRACTION"};function MM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_M[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vM={[dc]:"ENVMAP_BLENDING_MULTIPLY",[w0]:"ENVMAP_BLENDING_MIX",[T0]:"ENVMAP_BLENDING_ADD"};function bM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vM[n.combine]||"ENVMAP_BLENDING_NONE"}function EM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=yM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=MM(e),u=bM(e),d=hM(e),f=uM(r),p=s.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Sa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Sa).join(`
`),m.length>0&&(m+=`
`)):(g=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),m=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Me.tonemapping_pars_fragment:"",e.toneMapping!==Xi?lM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,oM("linearToOutputTexel",e.outputColorSpace),cM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sa).join(`
`)),o=gd(o),o=up(o,e),o=dp(o,e),a=gd(a),a=up(a,e),a=dp(a,e),o=fp(o),a=fp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=x+g+o,w=x+m+a,v=lp(s,s.VERTEX_SHADER,M),R=lp(s,s.FRAGMENT_SHADER,w);s.attachShader(p,v),s.attachShader(p,R),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function C(S){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(v)||"",B=s.getShaderInfoLog(R)||"",N=I.trim(),G=F.trim(),q=B.trim(),V=!0,ct=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,v,R);else{let J=hp(s,v,"vertex"),rt=hp(s,R,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+J+`
`+rt)}else N!==""?ee("WebGLProgram: Program Info Log:",N):(G===""||q==="")&&(ct=!1);ct&&(S.diagnostics={runnable:V,programLog:N,vertexShader:{log:G,prefix:g},fragmentShader:{log:q,prefix:m}})}s.deleteShader(v),s.deleteShader(R),_=new oo(s,p),E=dM(s,p)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,nM)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=R,this}var SM=0,xd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new yd(t),e.set(t,i)),i}},yd=class{constructor(t){this.id=SM++,this.code=t,this.usedTimes=0}};function wM(n){return n===Hs||n===Ma||n===va}function TM(n,t,e,i,s,r){let o=new Wo,a=new xd,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,E,P,S,I,F){let B=S.fog,N=I.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?S.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||G,q),ct=d[_.type],J=i.precision;_.precision!==null&&(J=i.getMaxPrecision(_.precision),J!==_.precision&&ee("WebGLProgram.getParameters:",_.precision,"not supported, using",J,"instead."));let rt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ot=rt!==void 0?rt.length:0,Lt=0;N.morphAttributes.position!==void 0&&(Lt=1),N.morphAttributes.normal!==void 0&&(Lt=2),N.morphAttributes.color!==void 0&&(Lt=3);let Kt,tt,wt,Bt;if(ct){let Nt=Yi[ct];Kt=Nt.vertexShader,tt=Nt.fragmentShader}else{Kt=_.vertexShader,tt=_.fragmentShader;let Nt=a.getVertexShaderStage(_),He=a.getFragmentShaderStage(_);a.update(_,Nt,He),wt=Nt.id,Bt=He.id}let jt=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),Ot=I.isInstancedMesh===!0,pe=I.isBatchedMesh===!0,Zt=!!_.map,me=!!_.matcap,Te=!!V,lt=Te&&V.isPMREMTexture===!0,vt=!!_.aoMap,yt=!!_.lightMap,Ht=!!_.bumpMap&&_.wireframe===!1,Ct=!!_.normalMap,fe=!!_.displacementMap,Yt=!!_.emissiveMap,Ae=!!_.metalnessMap,Ce=!!_.roughnessMap,Ne=_.anisotropy>0,k=_.clearcoat>0,hn=_.diffuseRoughness>0,Se=_.dispersion>0,Ge=_.retroreflectivity>0,Tt=_.iridescence>0,sn=_.sheen>0,te=_.transmission>0,ce=Ne&&!!_.anisotropyMap,L=k&&!!_.clearcoatMap,T=k&&!!_.clearcoatNormalMap,X=k&&!!_.clearcoatRoughnessMap,dt=hn&&!!_.diffuseRoughnessMap,at=Tt&&!!_.iridescenceMap,_t=Tt&&!!_.iridescenceThicknessMap,At=sn&&!!_.sheenColorMap,nt=sn&&!!_.sheenRoughnessMap,it=!!_.specularMap,bt=!!_.specularColorMap,O=!!_.specularIntensityMap,st=te&&!!_.transmissionMap,Q=te&&!!_.thicknessMap,Et=!!_.gradientMap,gt=!!_.alphaMap,Mt=_.alphaTest>0,$t=!!_.alphaHash,_e=!!_.extensions,ft=Xi;_.toneMapped&&(jt===null||jt.isXRRenderTarget===!0)&&(ft=n.toneMapping);let Qt=lt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,ge={shaderID:ct,shaderType:_.type,shaderName:_.name,vertexShader:Kt,fragmentShader:tt,defines:_.defines,customVertexShaderID:wt,customFragmentShaderID:Bt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:J,batching:pe,batchingColor:pe&&I._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&I.instanceColor!==null,instancingMorph:Ot&&I.morphTexture!==null,outputColorSpace:jt===null?n.outputColorSpace:jt.isXRRenderTarget===!0?jt.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Zt,matcap:me,envMap:Te,envMapMode:Te&&V.mapping,envMapPMREM:lt,envMapMaxLod:lt?Qt.length-1:null,envMapSize:lt?Qt[0].width:null,aoMap:vt,lightMap:yt,bumpMap:Ht,normalMap:Ct,displacementMap:fe,emissiveMap:Yt,normalMapObjectSpace:Ct&&_.normalMapType===C0,normalMapTangentSpace:Ct&&_.normalMapType===ba,packedNormalMap:Ct&&_.normalMapType===ba&&wM(_.normalMap.format),metalnessMap:Ae,roughnessMap:Ce,anisotropy:Ne,anisotropyMap:ce,clearcoat:k,clearcoatMap:L,clearcoatNormalMap:T,clearcoatRoughnessMap:X,diffuseRoughness:hn,diffuseRoughnessMap:dt,dispersion:Se,retroreflection:Ge,iridescence:Tt,iridescenceMap:at,iridescenceThicknessMap:_t,sheen:sn,sheenColorMap:At,sheenRoughnessMap:nt,specularMap:it,specularColorMap:bt,specularIntensityMap:O,transmission:te,transmissionMap:st,thicknessMap:Q,gradientMap:Et,opaque:_.transparent===!1&&_.blending===Bs&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:Mt,alphaHash:$t,combine:_.combine,mapUv:Zt&&f(_.map.channel),aoMapUv:vt&&f(_.aoMap.channel),lightMapUv:yt&&f(_.lightMap.channel),bumpMapUv:Ht&&f(_.bumpMap.channel),normalMapUv:Ct&&f(_.normalMap.channel),displacementMapUv:fe&&f(_.displacementMap.channel),emissiveMapUv:Yt&&f(_.emissiveMap.channel),metalnessMapUv:Ae&&f(_.metalnessMap.channel),roughnessMapUv:Ce&&f(_.roughnessMap.channel),anisotropyMapUv:ce&&f(_.anisotropyMap.channel),clearcoatMapUv:L&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:at&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:At&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:nt&&f(_.sheenRoughnessMap.channel),specularMapUv:it&&f(_.specularMap.channel),specularColorMapUv:bt&&f(_.specularColorMap.channel),specularIntensityMapUv:O&&f(_.specularIntensityMap.channel),transmissionMapUv:st&&f(_.transmissionMap.channel),thicknessMapUv:Q&&f(_.thicknessMap.channel),alphaMapUv:gt&&f(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ct||Ne),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Zt||gt),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:K,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Lt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.filter(Nt=>Nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:Zt&&_.map.isVideoTexture===!0&&Le.getTransfer(_.map.colorSpace)===Oe,decodeVideoTextureEmissive:Yt&&_.emissiveMap.isVideoTexture===!0&&Le.getTransfer(_.emissiveMap.colorSpace)===Oe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===cn,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)E.push(P),E.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(E,_),x(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function x(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let E=d[_.type],P;if(E){let S=Yi[E];P=$0.clone(S.uniforms)}else P=_.uniforms;return P}function w(_,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new EM(n,E,_,s),c.push(P),h.set(E,P)),P}function v(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){a.remove(_)}function C(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:M,acquireProgram:w,releaseProgram:v,releaseShaderCache:R,programs:c,dispose:C}}function AM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function RM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function mp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,g,m,x){let M=n[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:x},n[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=o(d),M.groupOrder=g,M.renderOrder=d.renderOrder,M.z=m,M.group=x),t++,M}function l(d,f,p,g,m,x,M){M.reversedDepth===!0&&(m=-m);let w=a(d,f,p,g,m,x);p.transmission>0?i.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(d,f,p,g,m,x){let M=a(d,f,p,g,m,x);p.transmission>0?i.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||RM),i.length>1&&i.sort(f||mp),s.length>1&&s.sort(f||mp)}function u(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function CM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new gp,n.set(i,[o])):s>=r.length?(o=new gp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function PM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new re};break;case"SpotLight":e={position:new U,direction:new U,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function IM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var LM=0;function DM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function NM(n){let t=new PM,e=IM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new Jt,o=new Jt;function a(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,p=0,g=0,m=0,x=0,M=0,w=0,v=0,R=0,C=0,_=0,E=0,P=0,S=0;c.sort(DM);for(let F=0,B=c.length;F<B;F++){let N=c[F],G=N.color,q=N.intensity,V=N.distance,ct=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Hs?ct=N.shadow.map.texture:ct=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=G.r*q,u+=G.g*q,d+=G.b*q;else if(N.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(N.sh.coefficients[J],q);S++}else if(N.isSunLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let rt=N.shadow,ot=e.get(N);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),i.sunShadow[p]=ot,i.sunShadowMap[p]=ct;let Lt=rt.getViewportCount();for(let Kt=0;Kt<Lt;Kt++)i.sunShadowMatrix[g+Kt]=rt.getMatrix(Kt),i.sunShadowCascade[g+Kt]=rt._cascadeData[Kt];g+=Lt,p++}i.sun[f]=J,f++}else if(N.isDirectionalLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let rt=N.shadow,ot=e.get(N);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,i.directionalShadow[m]=ot,i.directionalShadowMap[m]=ct,i.directionalShadowMatrix[m]=N.shadow.matrix,R++}i.directional[m]=J,m++}else if(N.isSpotLight){let J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(G).multiplyScalar(q),J.distance=V,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,i.spot[M]=J;let rt=N.shadow;if(N.map&&(i.spotLightMap[E]=N.map,E++,rt.updateMatrices(N),N.castShadow&&P++),i.spotLightMatrix[M]=rt.matrix,N.castShadow){let ot=e.get(N);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,i.spotShadow[M]=ot,i.spotShadowMap[M]=ct,_++}M++}else if(N.isRectAreaLight){let J=t.get(N);J.color.copy(G).multiplyScalar(q),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=J,w++}else if(N.isPointLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let rt=N.shadow,ot=e.get(N);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,ot.shadowCameraNear=rt.camera.near,ot.shadowCameraFar=rt.camera.far,i.pointShadow[x]=ot,i.pointShadowMap[x]=ct,i.pointShadowMatrix[x]=N.shadow.matrix,C++}i.point[x]=J,x++}else if(N.isHemisphereLight){let J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(q),J.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[v]=J,v++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==x||I.spotLength!==M||I.rectAreaLength!==w||I.hemiLength!==v||I.numSunShadows!==p||I.numDirectionalShadows!==R||I.numPointShadows!==C||I.numSpotShadows!==_||I.numSpotMaps!==E||I.numLightProbes!==S)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=x,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+E-P,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=S,I.sunLength=f,I.directionalLength=m,I.pointLength=x,I.spotLength=M,I.rectAreaLength=w,I.hemiLength=v,I.numSunShadows=p,I.numDirectionalShadows=R,I.numPointShadows=C,I.numSpotShadows=_,I.numSpotMaps=E,I.numLightProbes=S,i.version=LM++)}function l(c,h){let u=0,d=0,f=0,p=0,g=0,m=0,x=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let v=c[M];if(v.isSunLight){let R=i.sun[u];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(x),u++}else if(v.isDirectionalLight){let R=i.directional[d];R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),d++}else if(v.isSpotLight){let R=i.spot[p];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),p++}else if(v.isRectAreaLight){let R=i.rectArea[g];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(x),o.identity(),r.copy(v.matrixWorld),r.premultiply(x),o.extractRotation(r),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let R=i.point[f];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(x),f++}else if(v.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function xp(n){let t=new NM(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){i.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function UM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new xp(n),t.set(s,[a])):r>=o.length?(a=new xp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var FM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
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
}`,BM=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],HM=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],yp=new Jt,Ea=new U,dd=new U;function kM(n,t,e){let i=new Ds,s=new ht,r=new ht,o=new Ke,a=new Kl,l=new jl,c={},h=e.maxTextureSize,u={[Os]:gn,[gn]:Os,[cn]:cn},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:FM,fragmentShader:OM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ze;p.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new D(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let x=this.type;this.render=function(C,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===uc&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);let P=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(hr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=x!==this.type;B&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=C.length;N<G;N++){let q=C[N],V=q.shadow;if(V===void 0){ee("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ct=V.getFrameExtents();s.multiply(ct),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,V.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||B===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===io){if(q.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ei(s.x,s.y,{format:Hs,type:Ri,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new hs(s.x,s.y,fi),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=cs,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Sn,V.map.depthTexture.magFilter=Sn}else q.isPointLight?(V.map=new wa(s.x),V.map.depthTexture=new Ko(s.x,Ai)):(V.map=new ei(s.x,s.y),V.map.depthTexture=new hs(s.x,s.y,Ai)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=cs,this.type===cr?(V.map.depthTexture.compareFunction=J?Ku:Ju,V.map.depthTexture.minFilter=Vn,V.map.depthTexture.magFilter=Vn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Sn,V.map.depthTexture.magFilter=Sn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let rt=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,E);let ot=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:E.layers;for(let Lt=0;Lt<rt;Lt++){let Kt=V.getCamera(Lt);if(q.isPointLight){let tt=V.camera,wt=V.matrix,Bt=q.distance||tt.far;Bt!==tt.far&&(tt.far=Bt,tt.updateProjectionMatrix()),Ea.setFromMatrixPosition(q.matrixWorld),tt.position.copy(Ea),dd.copy(tt.position),dd.add(BM[Lt]),tt.up.copy(HM[Lt]),tt.lookAt(dd),tt.updateMatrixWorld(),wt.makeTranslation(-Ea.x,-Ea.y,-Ea.z),yp.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(yp,tt.coordinateSystem,tt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Lt),n.clear();else{Lt===0&&(n.setRenderTarget(V.map),n.clear());let tt=V.getViewport(Lt);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),F.viewport(o)}i=V.getFrustum(Lt),v(_,E,Kt,q,ot,this.type)}V.isPointLightShadow!==!0&&this.type===io&&M(V,E),V.needsUpdate=!1}x=this.type,m.needsUpdate=!1,n.setRenderTarget(P,S,I)};function M(C,_){let E=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null?C.mapPass=new ei(s.x,s.y,{format:Hs,type:Ri}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(_,null,E,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(_,null,E,f,g,null)}function w(C,_,E,P){let S=null,I=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)S=I;else if(S=E.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=S.uuid,B=_.uuid,N=c[F];N===void 0&&(N={},c[F]=N);let G=N[B];G===void 0&&(G=S.clone(),N[B]=G,_.addEventListener("dispose",R)),S=G}if(S.visible=_.visible,S.wireframe=_.wireframe,P===io?S.side=_.shadowSide!==null?_.shadowSide:_.side:S.side=_.shadowSide!==null?_.shadowSide:u[_.side],S.alphaMap=_.alphaMap,S.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,S.map=_.map,S.clipShadows=_.clipShadows,S.clippingPlanes=_.clippingPlanes,S.clipIntersection=_.clipIntersection,S.displacementMap=_.displacementMap,S.displacementScale=_.displacementScale,S.displacementBias=_.displacementBias,S.wireframeLinewidth=_.wireframeLinewidth,S.linewidth=_.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=n.properties.get(S);F.light=E}return S}function v(C,_,E,P,S,I){if(C.visible===!1)return;if(C.layers.test(S)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&I===io)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);let N=t.update(C),G=C.material;if(Array.isArray(G)){let q=N.groups;for(let V=0,ct=q.length;V<ct;V++){let J=q[V],rt=G[J.materialIndex];if(rt&&rt.visible){let ot=w(C,rt,P,I);C.onBeforeShadow(n,C,_,E,N,ot,J),n.renderBufferDirect(E,null,N,ot,C,J),C.onAfterShadow(n,C,_,E,N,ot,J)}}}else if(G.visible){let q=w(C,G,P,I);C.onBeforeShadow(n,C,_,E,N,q,null),n.renderBufferDirect(E,null,N,q,C,null),C.onAfterShadow(n,C,_,E,N,q,null)}}let B=C.children;for(let N=0,G=B.length;N<G;N++)v(B[N],_,E,P,S,I)}function R(C){C.target.removeEventListener("dispose",R);for(let E in c){let P=c[E],S=C.target.uuid;S in P&&(P[S].dispose(),delete P[S])}}}function GM(n,t){function e(){let O=!1,st=new Ke,Q=null,Et=new Ke(0,0,0,0);return{setMask:function(gt){Q!==gt&&!O&&(n.colorMask(gt,gt,gt,gt),Q=gt)},setLocked:function(gt){O=gt},setClear:function(gt,Mt,$t,_e,ft){ft===!0&&(gt*=_e,Mt*=_e,$t*=_e),st.set(gt,Mt,$t,_e),Et.equals(st)===!1&&(n.clearColor(gt,Mt,$t,_e),Et.copy(st))},reset:function(){O=!1,Q=null,Et.set(-1,0,0,0)}}}function i(){let O=!1,st=!1,Q=null,Et=null,gt=null;return{setReversed:function(Mt){if(st!==Mt){let $t=t.get("EXT_clip_control");Mt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),st=Mt;let _e=gt;gt=null,this.setClear(_e)}},getReversed:function(){return st},setTest:function(Mt){Mt?K(n.DEPTH_TEST):Ot(n.DEPTH_TEST)},setMask:function(Mt){Q!==Mt&&!O&&(n.depthMask(Mt),Q=Mt)},setFunc:function(Mt){if(st&&(Mt=H0[Mt]),Et!==Mt){switch(Mt){case Cl:n.depthFunc(n.NEVER);break;case Pl:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case zr:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case Dl:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=Mt}},setLocked:function(Mt){O=Mt},setClear:function(Mt){gt!==Mt&&(gt=Mt,st&&(Mt=1-Mt),n.clearDepth(Mt))},reset:function(){O=!1,Q=null,Et=null,gt=null,st=!1}}}function s(){let O=!1,st=null,Q=null,Et=null,gt=null,Mt=null,$t=null,_e=null,ft=null;return{setTest:function(Qt){O||(Qt?K(n.STENCIL_TEST):Ot(n.STENCIL_TEST))},setMask:function(Qt){st!==Qt&&!O&&(n.stencilMask(Qt),st=Qt)},setFunc:function(Qt,ge,Nt){(Q!==Qt||Et!==ge||gt!==Nt)&&(n.stencilFunc(Qt,ge,Nt),Q=Qt,Et=ge,gt=Nt)},setOp:function(Qt,ge,Nt){(Mt!==Qt||$t!==ge||_e!==Nt)&&(n.stencilOp(Qt,ge,Nt),Mt=Qt,$t=ge,_e=Nt)},setLocked:function(Qt){O=Qt},setClear:function(Qt){ft!==Qt&&(n.clearStencil(Qt),ft=Qt)},reset:function(){O=!1,st=null,Q=null,Et=null,gt=null,Mt=null,$t=null,_e=null,ft=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],g=null,m=!1,x=null,M=null,w=null,v=null,R=null,C=null,_=null,E=new re(0,0,0),P=0,S=!1,I=null,F=null,B=null,N=null,G=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ct=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=ct>=1):J.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=ct>=2);let rt=null,ot={},Lt=n.getParameter(n.SCISSOR_BOX),Kt=n.getParameter(n.VIEWPORT),tt=new Ke().fromArray(Lt),wt=new Ke().fromArray(Kt);function Bt(O,st,Q,Et){let gt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(O,Mt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<Q;$t++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(st+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return Mt}let jt={};jt[n.TEXTURE_2D]=Bt(n.TEXTURE_2D,n.TEXTURE_2D,1),jt[n.TEXTURE_CUBE_MAP]=Bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),jt[n.TEXTURE_2D_ARRAY]=Bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),jt[n.TEXTURE_3D]=Bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(zr),Ht(!1),Ct(Lu),K(n.CULL_FACE),vt(hr);function K(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Ot(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function pe(O,st){return d[O]!==st?(n.bindFramebuffer(O,st),d[O]=st,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=st),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=st),!0):!1}function Zt(O,st){let Q=p,Et=!1;if(O){Q=f.get(st),Q===void 0&&(Q=[],f.set(st,Q));let gt=O.textures;if(Q.length!==gt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,$t=gt.length;Mt<$t;Mt++)Q[Mt]=n.COLOR_ATTACHMENT0+Mt;Q.length=gt.length,Et=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,Et=!0);Et&&n.drawBuffers(Q)}function me(O){return g!==O?(n.useProgram(O),g=O,!0):!1}let Te={[dr]:n.FUNC_ADD,[l0]:n.FUNC_SUBTRACT,[c0]:n.FUNC_REVERSE_SUBTRACT};Te[h0]=n.MIN,Te[u0]=n.MAX;let lt={[d0]:n.ZERO,[f0]:n.ONE,[p0]:n.SRC_COLOR,[Uu]:n.SRC_ALPHA,[M0]:n.SRC_ALPHA_SATURATE,[y0]:n.DST_COLOR,[g0]:n.DST_ALPHA,[m0]:n.ONE_MINUS_SRC_COLOR,[Fu]:n.ONE_MINUS_SRC_ALPHA,[_0]:n.ONE_MINUS_DST_COLOR,[x0]:n.ONE_MINUS_DST_ALPHA,[v0]:n.CONSTANT_COLOR,[b0]:n.ONE_MINUS_CONSTANT_COLOR,[E0]:n.CONSTANT_ALPHA,[S0]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(O,st,Q,Et,gt,Mt,$t,_e,ft,Qt){if(O===hr){m===!0&&(Ot(n.BLEND),m=!1);return}if(m===!1&&(K(n.BLEND),m=!0),O!==a0){if(O!==x||Qt!==S){if((M!==dr||R!==dr)&&(n.blendEquation(n.FUNC_ADD),M=dr,R=dr),Qt)switch(O){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ur:n.blendFunc(n.ONE,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:se("WebGLState: Invalid blending: ",O);break}else switch(O){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Du:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",O);break}w=null,v=null,C=null,_=null,E.set(0,0,0),P=0,x=O,S=Qt}return}gt=gt||st,Mt=Mt||Q,$t=$t||Et,(st!==M||gt!==R)&&(n.blendEquationSeparate(Te[st],Te[gt]),M=st,R=gt),(Q!==w||Et!==v||Mt!==C||$t!==_)&&(n.blendFuncSeparate(lt[Q],lt[Et],lt[Mt],lt[$t]),w=Q,v=Et,C=Mt,_=$t),(_e.equals(E)===!1||ft!==P)&&(n.blendColor(_e.r,_e.g,_e.b,ft),E.copy(_e),P=ft),x=O,S=!1}function yt(O,st){O.side===cn?Ot(n.CULL_FACE):K(n.CULL_FACE);let Q=O.side===gn;st&&(Q=!Q),Ht(Q),O.blending===Bs&&O.transparent===!1?vt(hr):vt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Et=O.stencilWrite;a.setTest(Et),Et&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):Ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(O){I!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),I=O)}function Ct(O){O!==r0?(K(n.CULL_FACE),O!==F&&(O===Lu?n.cullFace(n.BACK):O===o0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ot(n.CULL_FACE),F=O}function fe(O){O!==B&&(V&&n.lineWidth(O),B=O)}function Yt(O,st,Q){O?(K(n.POLYGON_OFFSET_FILL),(N!==st||G!==Q)&&(N=st,G=Q,o.getReversed()&&(st=-st,Q=-Q),n.polygonOffset(st,Q))):Ot(n.POLYGON_OFFSET_FILL)}function Ae(O){O?K(n.SCISSOR_TEST):Ot(n.SCISSOR_TEST)}function Ce(O){O===void 0&&(O=n.TEXTURE0+q-1),rt!==O&&(n.activeTexture(O),rt=O)}function Ne(O,st,Q){Q===void 0&&(rt===null?Q=n.TEXTURE0+q-1:Q=rt);let Et=ot[Q];Et===void 0&&(Et={type:void 0,texture:void 0},ot[Q]=Et),(Et.type!==O||Et.texture!==st)&&(rt!==Q&&(n.activeTexture(Q),rt=Q),n.bindTexture(O,st||jt[O]),Et.type=O,Et.texture=st)}function k(){let O=ot[rt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function hn(){try{n.compressedTexImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function Se(){try{n.compressedTexImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function Ge(){try{n.texSubImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function Tt(){try{n.texSubImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function sn(){try{n.compressedTexSubImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function te(){try{n.compressedTexSubImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function ce(){try{n.texStorage2D(...arguments)}catch(O){se("WebGLState:",O)}}function L(){try{n.texStorage3D(...arguments)}catch(O){se("WebGLState:",O)}}function T(){try{n.texImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function X(){try{n.texImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function dt(O){return u[O]!==void 0?u[O]:n.getParameter(O)}function at(O,st){u[O]!==st&&(n.pixelStorei(O,st),u[O]=st)}function _t(O){tt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),tt.copy(O))}function At(O){wt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),wt.copy(O))}function nt(O,st){let Q=c.get(st);Q===void 0&&(Q=new WeakMap,c.set(st,Q));let Et=Q.get(O);Et===void 0&&(Et=n.getUniformBlockIndex(st,O.name),n.uniformBlockBinding(st,Et,Et),Q.set(O,Et))}function it(O,st,Q){let gt=c.get(st).get(O);l[gt]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,gt,Q),l[gt]=Q)}function bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},rt=null,ot={},d={},l={},f=new WeakMap,p=[],g=null,m=!1,x=null,M=null,w=null,v=null,R=null,C=null,_=null,E=new re(0,0,0),P=0,S=!1,I=null,F=null,B=null,N=null,G=null,tt.set(0,0,n.canvas.width,n.canvas.height),wt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:Ot,bindFramebuffer:pe,drawBuffers:Zt,useProgram:me,setBlending:vt,setMaterial:yt,setFlipSided:Ht,setCullFace:Ct,setLineWidth:fe,setPolygonOffset:Yt,setScissorTest:Ae,activeTexture:Ce,bindTexture:Ne,unbindTexture:k,compressedTexImage2D:hn,compressedTexImage3D:Se,texImage2D:T,texImage3D:X,pixelStorei:at,getParameter:dt,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:ce,texStorage3D:L,texSubImage2D:Ge,texSubImage3D:Tt,compressedTexSubImage2D:sn,compressedTexSubImage3D:te,scissor:_t,viewport:At,reset:bt}}function zM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,g=new FinalizationRegistry(L=>p.delete(L)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,T){return m?new OffscreenCanvas(L,T):Go("canvas")}function M(L,T,X){let dt=1,at=ce(L);if((at.width>X||at.height>X)&&(dt=X/Math.max(at.width,at.height)),dt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let _t=Math.floor(dt*at.width),At=Math.floor(dt*at.height);d===void 0&&(d=x(_t,At));let nt=T?x(_t,At):d;return nt.width=_t,nt.height=At,nt.getContext("2d").drawImage(L,0,0,_t,At),ee("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+_t+"x"+At+")."),nt}else return"data"in L&&ee("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),L;return L}function w(L){return L.generateMipmaps}function v(L){n.generateMipmap(L)}function R(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(L,T,X,dt,at,_t=!1){if(L!==null){if(n[L]!==void 0)return n[L];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let At;dt&&(At=t.get("EXT_texture_norm16"),At||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=T;if(T===n.RED&&(X===n.FLOAT&&(nt=n.R32F),X===n.HALF_FLOAT&&(nt=n.R16F),X===n.UNSIGNED_BYTE&&(nt=n.R8),X===n.UNSIGNED_SHORT&&At&&(nt=At.R16_EXT),X===n.SHORT&&At&&(nt=At.R16_SNORM_EXT)),T===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.R8UI),X===n.UNSIGNED_SHORT&&(nt=n.R16UI),X===n.UNSIGNED_INT&&(nt=n.R32UI),X===n.BYTE&&(nt=n.R8I),X===n.SHORT&&(nt=n.R16I),X===n.INT&&(nt=n.R32I)),T===n.RG&&(X===n.FLOAT&&(nt=n.RG32F),X===n.HALF_FLOAT&&(nt=n.RG16F),X===n.UNSIGNED_BYTE&&(nt=n.RG8),X===n.UNSIGNED_SHORT&&At&&(nt=At.RG16_EXT),X===n.SHORT&&At&&(nt=At.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.RG8UI),X===n.UNSIGNED_SHORT&&(nt=n.RG16UI),X===n.UNSIGNED_INT&&(nt=n.RG32UI),X===n.BYTE&&(nt=n.RG8I),X===n.SHORT&&(nt=n.RG16I),X===n.INT&&(nt=n.RG32I)),T===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),X===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),X===n.UNSIGNED_INT&&(nt=n.RGB32UI),X===n.BYTE&&(nt=n.RGB8I),X===n.SHORT&&(nt=n.RGB16I),X===n.INT&&(nt=n.RGB32I)),T===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),X===n.UNSIGNED_INT&&(nt=n.RGBA32UI),X===n.BYTE&&(nt=n.RGBA8I),X===n.SHORT&&(nt=n.RGBA16I),X===n.INT&&(nt=n.RGBA32I)),T===n.RGB&&(X===n.UNSIGNED_SHORT&&At&&(nt=At.RGB16_EXT),X===n.SHORT&&At&&(nt=At.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(nt=n.R11F_G11F_B10F)),T===n.RGBA){let it=_t?ko:Le.getTransfer(at);X===n.FLOAT&&(nt=n.RGBA32F),X===n.HALF_FLOAT&&(nt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(nt=it===Oe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&At&&(nt=At.RGBA16_EXT),X===n.SHORT&&At&&(nt=At.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function _(L,T){let X;return L?T===null||T===Ai||T===pr?X=n.DEPTH24_STENCIL8:T===fi?X=n.DEPTH32F_STENCIL8:T===ro&&(X=n.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ai||T===pr?X=n.DEPTH_COMPONENT24:T===fi?X=n.DEPTH_COMPONENT32F:T===ro&&(X=n.DEPTH_COMPONENT16),X}function E(L,T){return w(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function P(L){let T=new WeakRef(L);i.get(L).__ref=T,p.add(T),g.register(L,T,T)}function S(L){let T=i.get(L).__ref;T!==void 0&&(p.delete(T),g.unregister(T))}function I(L){B(L.target)}function F(L){N(L.target)}function B(L){L.removeEventListener("dispose",I),S(L),q(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function N(L){L.removeEventListener("dispose",F),S(L),ct(L)}function G(){for(let L of p){let T=L.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):B(T))}p.clear(),u.clear()}function q(L){let T=i.get(L);if(T.__webglInit===void 0)return;let X=L.source,dt=f.get(X);if(dt){let at=dt[T.__cacheKey];at.usedTimes--,at.usedTimes===0&&V(L),Object.keys(dt).length===0&&f.delete(X)}i.remove(L)}function V(L){let T=i.get(L);n.deleteTexture(T.__webglTexture);let X=L.source,dt=f.get(X);delete dt[T.__cacheKey],o.memory.textures--}function ct(L){let T=i.get(L);T.__depthDisposeCallback&&T.__depthDisposeCallback();let X=L.depthTexture;if(X&&X.renderTarget===L&&B(X),L.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(T.__webglFramebuffer[at]))for(let _t=0;_t<T.__webglFramebuffer[at].length;_t++)n.deleteFramebuffer(T.__webglFramebuffer[at][_t]);else n.deleteFramebuffer(T.__webglFramebuffer[at]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[at])}else{if(Array.isArray(T.__webglFramebuffer))for(let at=0;at<T.__webglFramebuffer.length;at++)n.deleteFramebuffer(T.__webglFramebuffer[at]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let at=0;at<T.__webglColorRenderbuffer.length;at++)T.__webglColorRenderbuffer[at]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[at]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let dt=L.textures;for(let at=0,_t=dt.length;at<_t;at++){let At=i.get(dt[at]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),o.memory.textures--),i.remove(dt[at])}i.remove(L)}let J=0;function rt(){J=0}function ot(){return J}function Lt(L){J=L}function Kt(){let L=J;return L>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,L}function tt(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.mipmapsAutoUpdate),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function wt(L,T){let X=i.get(L);if(L.isVideoTexture&&sn(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){let dt=L.image;if(dt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(X,L,T);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+T)}function Bt(L,T){let X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){yt(X,L,T);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+T)}function jt(L,T){let X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){yt(X,L,T);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+T)}function K(L,T){let X=i.get(L);if(L.version>0&&X.__version!==L.version){Ht(X,L,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+T)}let Ot={[ls]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[Fl]:n.MIRRORED_REPEAT},pe={[Sn]:n.NEAREST,[A0]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[mc]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},Zt={[I0]:n.NEVER,[ju]:n.ALWAYS,[L0]:n.LESS,[Ju]:n.LEQUAL,[D0]:n.EQUAL,[Ku]:n.GEQUAL,[N0]:n.GREATER,[U0]:n.NOTEQUAL};function me(L,T){if(T.type===fi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===mc||T.magFilter===ma||T.magFilter===us||T.minFilter===Vn||T.minFilter===mc||T.minFilter===ma||T.minFilter===us)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Ot[T.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Ot[T.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Ot[T.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,pe[T.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,pe[T.minFilter]),T.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Zt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Sn||T.minFilter!==ma&&T.minFilter!==us||T.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Te(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",I),P(T));let dt=T.source,at=f.get(dt);at===void 0&&(at={},f.set(dt,at));let _t=tt(T);if(_t!==L.__cacheKey){at[_t]===void 0&&(at[_t]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[_t].usedTimes++;let At=at[L.__cacheKey];At!==void 0&&(at[L.__cacheKey].usedTimes--,At.usedTimes===0&&V(T)),L.__cacheKey=_t,L.__webglTexture=at[_t].texture}return X}function lt(L,T,X){return Math.floor(Math.floor(L/X)/T)}function vt(L,T,X,dt){let _t=L.updateRanges;if(_t.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,X,dt,T.data);else{_t.sort((O,st)=>O.start-st.start);let At=0;for(let O=1;O<_t.length;O++){let st=_t[At],Q=_t[O],Et=st.start+st.count,gt=lt(Q.start,T.width,4),Mt=lt(st.start,T.width,4);Q.start<=Et+1&&gt===Mt&&lt(Q.start+Q.count-1,T.width,4)===gt?st.count=Math.max(st.count,Q.start+Q.count-st.start):(++At,_t[At]=Q)}_t.length=At+1;let nt=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),bt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let O=0,st=_t.length;O<st;O++){let Q=_t[O],Et=Math.floor(Q.start/4),gt=Math.ceil(Q.count/4),Mt=Et%T.width,$t=Math.floor(Et/T.width),_e=gt,ft=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,$t),e.texSubImage2D(n.TEXTURE_2D,0,Mt,$t,_e,ft,X,dt,T.data)}L.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,nt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,bt)}}function yt(L,T,X){let dt=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=n.TEXTURE_3D);let at=Te(L,T),_t=T.source;e.bindTexture(dt,L.__webglTexture,n.TEXTURE0+X);let At=i.get(_t);if(_t.version!==At.__version||at===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ft=Le.getPrimaries(Le.workingColorSpace),Qt=T.colorSpace===fs?null:Le.getPrimaries(T.colorSpace),ge=T.colorSpace===fs||ft===Qt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let it=M(T.image,!1,s.maxTextureSize);it=te(T,it);let bt=r.convert(T.format,T.colorSpace),O=r.convert(T.type),st=C(T.internalFormat,bt,O,T.normalized,T.colorSpace,T.isVideoTexture);me(dt,T);let Q,Et=T.mipmaps,gt=T.isVideoTexture!==!0,Mt=At.__version===void 0||at===!0,$t=_t.dataReady,_e=E(T,it);if(T.isDepthTexture)st=_(T.format===ds,T.type),Mt&&(gt?e.texStorage2D(n.TEXTURE_2D,1,st,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,st,it.width,it.height,0,bt,O,null));else if(T.isDataTexture)if(Et.length>0){gt&&Mt&&e.texStorage2D(n.TEXTURE_2D,_e,st,Et[0].width,Et[0].height);for(let ft=0,Qt=Et.length;ft<Qt;ft++)Q=Et[ft],gt?$t&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Q.width,Q.height,bt,O,Q.data):e.texImage2D(n.TEXTURE_2D,ft,st,Q.width,Q.height,0,bt,O,Q.data);T.generateMipmaps=!1}else gt?(Mt&&e.texStorage2D(n.TEXTURE_2D,_e,st,it.width,it.height),$t&&vt(T,it,bt,O)):e.texImage2D(n.TEXTURE_2D,0,st,it.width,it.height,0,bt,O,it.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){gt&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_e,st,Et[0].width,Et[0].height,it.depth);for(let ft=0,Qt=Et.length;ft<Qt;ft++)if(Q=Et[ft],T.format!==Ci)if(bt!==null)if(gt){if($t)if(T.layerUpdates.size>0){let ge=rd(Q.width,Q.height,T.format,T.type);for(let Nt of T.layerUpdates){let He=Q.data.subarray(Nt*ge/Q.data.BYTES_PER_ELEMENT,(Nt+1)*ge/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,Nt,Q.width,Q.height,1,bt,He)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Q.width,Q.height,it.depth,bt,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,st,Q.width,Q.height,it.depth,0,Q.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?$t&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Q.width,Q.height,it.depth,bt,O,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,st,Q.width,Q.height,it.depth,0,bt,O,Q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{gt&&Mt&&e.texStorage2D(n.TEXTURE_2D,_e,st,Et[0].width,Et[0].height);for(let ft=0,Qt=Et.length;ft<Qt;ft++)Q=Et[ft],T.format!==Ci?bt!==null?gt?$t&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,Q.width,Q.height,bt,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,st,Q.width,Q.height,0,Q.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?$t&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Q.width,Q.height,bt,O,Q.data):e.texImage2D(n.TEXTURE_2D,ft,st,Q.width,Q.height,0,bt,O,Q.data)}else if(T.isDataArrayTexture)if(gt){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_e,st,it.width,it.height,it.depth),$t)if(T.layerUpdates.size>0){let ft=rd(it.width,it.height,T.format,T.type);for(let Qt of T.layerUpdates){let ge=it.data.subarray(Qt*ft/it.data.BYTES_PER_ELEMENT,(Qt+1)*ft/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Qt,it.width,it.height,1,bt,O,ge)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,O,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,st,it.width,it.height,it.depth,0,bt,O,it.data);else if(T.isData3DTexture)gt?(Mt&&e.texStorage3D(n.TEXTURE_3D,_e,st,it.width,it.height,it.depth),$t&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,O,it.data)):e.texImage3D(n.TEXTURE_3D,0,st,it.width,it.height,it.depth,0,bt,O,it.data);else if(T.isFramebufferTexture){if(Mt)if(gt)e.texStorage2D(n.TEXTURE_2D,_e,st,it.width,it.height);else{let ft=it.width,Qt=it.height;for(let ge=0;ge<_e;ge++)e.texImage2D(n.TEXTURE_2D,ge,st,ft,Qt,0,bt,O,null),ft>>=1,Qt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let ft=n.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),it.parentNode!==ft){ft.appendChild(it),u.add(T),ft.onpaint=Qt=>{let ge=Qt.changedElements;for(let Nt of u)ge.includes(Nt.image)&&(Nt.needsUpdate=!0)},ft.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let ge=n.RGBA,Nt=n.RGBA,He=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ge,Nt,He,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Et.length>0){if(gt&&Mt){let ft=ce(Et[0]);e.texStorage2D(n.TEXTURE_2D,_e,st,ft.width,ft.height)}for(let ft=0,Qt=Et.length;ft<Qt;ft++)Q=Et[ft],gt?$t&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,bt,O,Q):e.texImage2D(n.TEXTURE_2D,ft,st,bt,O,Q);T.generateMipmaps=!1}else if(gt){if(Mt){let ft=ce(it);e.texStorage2D(n.TEXTURE_2D,_e,st,ft.width,ft.height)}$t&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,O,it)}else e.texImage2D(n.TEXTURE_2D,0,st,bt,O,it);w(T)&&T.mipmapsAutoUpdate===!0&&v(dt),At.__version=_t.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ht(L,T,X){if(T.image.length!==6)return;let dt=Te(L,T),at=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+X);let _t=i.get(at);if(at.version!==_t.__version||dt===!0){e.activeTexture(n.TEXTURE0+X);let At=Le.getPrimaries(Le.workingColorSpace),nt=T.colorSpace===fs?null:Le.getPrimaries(T.colorSpace),it=T.colorSpace===fs||At===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let bt=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,st=[];for(let Nt=0;Nt<6;Nt++)!bt&&!O?st[Nt]=M(T.image[Nt],!0,s.maxCubemapSize):st[Nt]=O?T.image[Nt].image:T.image[Nt],st[Nt]=te(T,st[Nt]);let Q=st[0],Et=r.convert(T.format,T.colorSpace),gt=r.convert(T.type),Mt=C(T.internalFormat,Et,gt,T.normalized,T.colorSpace),$t=T.isVideoTexture!==!0,_e=_t.__version===void 0||dt===!0,ft=at.dataReady,Qt=E(T,Q);me(n.TEXTURE_CUBE_MAP,T);let ge;if(T.isDepthTexture){if(Mt=_(T.format===ds,T.type),_e)if($t)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,Mt,Q.width,Q.height);else for(let Nt=0;Nt<6;Nt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Mt,Q.width,Q.height,0,Et,gt,null)}else if(bt){$t&&_e&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Qt,Mt,Q.width,Q.height);for(let Nt=0;Nt<6;Nt++){ge=st[Nt].mipmaps;for(let He=0;He<ge.length;He++){let vn=ge[He];T.format!==Ci?Et!==null?$t?ft&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,He,0,0,vn.width,vn.height,Et,vn.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,He,Mt,vn.width,vn.height,0,vn.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,He,0,0,vn.width,vn.height,Et,gt,vn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,He,Mt,vn.width,vn.height,0,Et,gt,vn.data)}}}else{if(ge=T.mipmaps,$t&&_e){ge.length>0&&Qt++;let Nt=ce(st[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Qt,Mt,Nt.width,Nt.height)}for(let Nt=0;Nt<6;Nt++)if(O){$t?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,st[Nt].width,st[Nt].height,Et,gt,st[Nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Mt,st[Nt].width,st[Nt].height,0,Et,gt,st[Nt].data);for(let He=0;He<ge.length;He++){let Es=ge[He].image[Nt].image;$t?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,He+1,0,0,Es.width,Es.height,Et,gt,Es.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,He+1,Mt,Es.width,Es.height,0,Et,gt,Es.data)}}else{$t?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,Et,gt,st[Nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Mt,Et,gt,st[Nt]);for(let He=0;He<ge.length;He++){let vn=ge[He];$t?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,He+1,0,0,Et,gt,vn.image[Nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,He+1,Mt,Et,gt,vn.image[Nt])}}}w(T)&&T.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),_t.__version=at.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ct(L,T,X,dt,at,_t){let At=r.convert(X.format,X.colorSpace),nt=r.convert(X.type),it=C(X.internalFormat,At,nt,X.normalized,X.colorSpace),bt=i.get(T),O=i.get(X);if(O.__renderTarget=T,!bt.__hasExternalTextures){let st=Math.max(1,T.width>>_t),Q=Math.max(1,T.height>>_t);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,_t,it,st,Q,T.depth,0,At,nt,null):e.texImage2D(at,_t,it,st,Q,0,At,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),Tt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,at,O.__webglTexture,0,Ge(T)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,dt,at,O.__webglTexture,_t),e.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(L,T,X){if(n.bindRenderbuffer(n.RENDERBUFFER,L),T.depthBuffer){let dt=T.depthTexture,at=dt&&dt.isDepthTexture?dt.type:null,_t=_(T.stencilBuffer,at),At=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Tt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge(T),_t,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge(T),_t,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,_t,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,L)}else{let dt=T.textures;for(let at=0;at<dt.length;at++){let _t=dt[at],At=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),it=C(_t.internalFormat,At,nt,_t.normalized,_t.colorSpace);Tt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge(T),it,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge(T),it,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,it,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Yt(L,T,X){let dt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=i.get(T.depthTexture);at.__renderTarget=T;let _t=dt?T.depthTexture.image[0]:T.depthTexture.image;(!at.__webglTexture||_t.width!==T.width||_t.height!==T.height)&&(_t.width=T.width,_t.height=T.height,T.depthTexture.needsUpdate=!0),dt?K(T.depthTexture,0):wt(T.depthTexture,0);let At=at.__webglTexture,nt=Ge(T),it=dt?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,bt=T.depthTexture.format===ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===cs)Tt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,bt,it,At,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,bt,it,At,0);else if(T.depthTexture.format===ds)Tt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,bt,it,At,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,bt,it,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(L){let T=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let dt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){let at=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",at)};dt.addEventListener("dispose",at),T.__depthDisposeCallback=at}T.__boundDepthTexture=dt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(X)for(let dt=0;dt<6;dt++)Yt(T.__webglFramebuffer[dt],L,dt);else L.texture.mipmaps.length>0?Yt(T.__webglFramebuffer[0],L,0):Yt(T.__webglFramebuffer,L,0);else if(X){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=n.createRenderbuffer(),fe(T.__webglDepthbuffer[dt],L,!1);else{let at=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer[dt];n.bindRenderbuffer(n.RENDERBUFFER,_t),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,_t)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),fe(T.__webglDepthbuffer,L,!1);else{let at=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_t),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,_t)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(L,T,X){let dt=i.get(L);T!==void 0&&Ct(dt.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ae(L)}function Ne(L){let T=L.texture,X=i.get(L),dt=i.get(T);L.addEventListener("dispose",F),P(L);let at=L.textures,_t=L.isWebGLCubeRenderTarget===!0,At=at.length>1;if(At||(dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture()),dt.__version=T.version,o.memory.textures++),_t){X.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(T.mipmaps.length>0){X.__webglFramebuffer[nt]=[];for(let it=0;it<T.mipmaps.length;it++)X.__webglFramebuffer[nt][it]=n.createFramebuffer()}else X.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(T.mipmaps.length>0){X.__webglFramebuffer=[];for(let nt=0;nt<T.mipmaps.length;nt++)X.__webglFramebuffer[nt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(At)for(let nt=0,it=at.length;nt<it;nt++){let bt=i.get(at[nt]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Tt(L)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let nt=0;nt<at.length;nt++){let it=at[nt];X.__webglColorRenderbuffer[nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[nt]);let bt=r.convert(it.format,it.colorSpace),O=r.convert(it.type),st=C(it.internalFormat,bt,O,it.normalized,it.colorSpace,L.isXRRenderTarget===!0),Q=Ge(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,st,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,X.__webglColorRenderbuffer[nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_t){e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture),me(n.TEXTURE_CUBE_MAP,T);for(let nt=0;nt<6;nt++)if(T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)Ct(X.__webglFramebuffer[nt][it],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,it);else Ct(X.__webglFramebuffer[nt],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);w(T)?v(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(At){for(let nt=0,it=at.length;nt<it;nt++){let bt=at[nt],O=i.get(bt),st=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(st=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,O.__webglTexture),me(st,bt),Ct(X.__webglFramebuffer,L,bt,n.COLOR_ATTACHMENT0+nt,st,0),w(bt)&&v(st)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(nt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,dt.__webglTexture),me(nt,T),T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)Ct(X.__webglFramebuffer[it],L,T,n.COLOR_ATTACHMENT0,nt,it);else Ct(X.__webglFramebuffer,L,T,n.COLOR_ATTACHMENT0,nt,0);w(T)?v(nt):T.mipmaps.length>0&&n.texParameteri(nt,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&Ae(L)}function k(L){let T=L.textures;for(let X=0,dt=T.length;X<dt;X++){let at=T[X];if(w(at)&&at.mipmapsAutoUpdate===!0){let _t=R(L),At=i.get(at).__webglTexture;e.bindTexture(_t,At),v(_t),e.unbindTexture()}}}let hn=[];function Se(L){if(L.samples>0){if(Tt(L)===!1){let T=L.textures,X=L.width,dt=L.height,at=n.COLOR_BUFFER_BIT,_t=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(L),nt=T.length>1;if(nt)for(let bt=0;bt<T.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<T.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let O=i.get(T[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,X,dt,0,0,X,dt,at,n.NEAREST),l===!0&&(hn.length=0,hn.push(n.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&hn.push(_t),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,hn))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),nt)for(let bt=0;bt<T.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let O=i.get(T[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,O,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let T=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ge(L){return Math.min(s.maxSamples,L.samples)}function Tt(L){let T=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function sn(L){let T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function te(L,T){let X=L.colorSpace,dt=L.format,at=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Ho&&X!==fs&&(Le.getTransfer(X)===Oe?(dt!==Ci||at!==Kn)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",X)),T}function ce(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Kt,this.resetTextureUnits=rt,this.getTextureUnits=ot,this.setTextureUnits=Lt,this.setTexture2D=wt,this.setTexture2DArray=Bt,this.setTexture3D=jt,this.setTextureCube=K,this.rebindTextures=Ce,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Tt,this.dispose=G}function VM(n,t){function e(i,s=fs){let r,o=Le.getTransfer(s);if(i===Kn)return n.UNSIGNED_BYTE;if(i===xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wu)return n.BYTE;if(i===Xu)return n.SHORT;if(i===ro)return n.UNSIGNED_SHORT;if(i===gc)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Ri)return n.HALF_FLOAT;if(i===Zu)return n.ALPHA;if(i===$u)return n.RGB;if(i===Ci)return n.RGBA;if(i===cs)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===_c)return n.RED;if(i===Mc)return n.RED_INTEGER;if(i===Hs)return n.RG;if(i===vc)return n.RG_INTEGER;if(i===bc)return n.RGBA_INTEGER;if(i===ga||i===xa||i===ya||i===_a)if(o===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===Sc||i===wc||i===Tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ac||i===Rc||i===Cc||i===Pc||i===Ic||i===Ma||i===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ac||i===Rc)return o===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pc)return r.COMPRESSED_R11_EAC;if(i===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ma)return r.COMPRESSED_RG11_EAC;if(i===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===Hc||i===kc||i===Gc||i===zc||i===Vc||i===Wc||i===Xc||i===qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yc||i===Zc||i===$c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yc)return o===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jc||i===Kc||i===va||i===jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
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

}`,_d=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new jo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new di({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new Fe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Md=class extends Hi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new _d,x={},M=e.getContextAttributes(),w=null,v=null,R=[],C=[],_=new ht,E=null,P=null,S=new Rn;S.viewport=new Ke;let I=new Rn;I.viewport=new Ke;let F=[S,I],B=new cc,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let wt=R[tt];return wt===void 0&&(wt=new qr,R[tt]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(tt){let wt=R[tt];return wt===void 0&&(wt=new qr,R[tt]=wt),wt.getGripSpace()},this.getHand=function(tt){let wt=R[tt];return wt===void 0&&(wt=new qr,R[tt]=wt),wt.getHandSpace()};function q(tt){let wt=C.indexOf(tt.inputSource);if(wt===-1)return;let Bt=R[wt];Bt!==void 0&&(Bt.update(tt.inputSource,tt.frame,c||o),Bt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ct);for(let tt=0;tt<R.length;tt++){let wt=C[tt];wt!==null&&(C[tt]=null,R[tt].disconnect(wt))}N=null,G=null,m.reset();for(let tt in x)delete x[tt];if(t.setRenderTarget(w),f=null,d=null,u=null,s=null,v=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(_.width,_.height,!1),P!==null){let tt=P.camera;tt.fov=P.fov,tt.zoom=P.zoom,tt.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ct),M.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(_),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Bt=null,jt=null,K=null;M.depth&&(K=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Bt=M.stencil?ds:cs,jt=M.stencil?pr:Ai);let Ot={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ei(d.textureWidth,d.textureHeight,{format:Ci,type:Kn,depthTexture:new hs(d.textureWidth,d.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Bt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Bt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ei(f.framebufferWidth,f.framebufferHeight,{format:Ci,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ct(tt){for(let wt=0;wt<tt.removed.length;wt++){let Bt=tt.removed[wt],jt=C.indexOf(Bt);jt>=0&&(C[jt]=null,R[jt].disconnect(Bt))}for(let wt=0;wt<tt.added.length;wt++){let Bt=tt.added[wt],jt=C.indexOf(Bt);if(jt===-1){for(let Ot=0;Ot<R.length;Ot++)if(Ot>=C.length){C.push(Bt),jt=Ot;break}else if(C[Ot]===null){C[Ot]=Bt,jt=Ot;break}if(jt===-1)break}let K=R[jt];K&&K.connect(Bt)}}function J(tt,wt){wt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(wt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let wt=tt.near,Bt=tt.far;m.texture!==null&&(m.depthNear>0&&(wt=m.depthNear),m.depthFar>0&&(Bt=m.depthFar)),B.near=I.near=S.near=wt,B.far=I.far=S.far=Bt,(N!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,G=B.far),B.layers.mask=tt.layers.mask|6,S.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let jt=tt.parent,K=B.cameras;J(B,jt);for(let Ot=0;Ot<K.length;Ot++)J(K[Ot],jt);B.projectionMatrix.copy(S.projectionMatrix),B.projectionMatrixInverse.copy(S.projectionMatrixInverse),P===null&&tt.isPerspectiveCamera&&(P={camera:tt,fov:tt.fov,zoom:tt.zoom}),rt(tt,B,jt)};function rt(tt,wt,Bt){Bt===null?tt.matrix.copy(wt.matrixWorld):(tt.matrix.copy(Bt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(wt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(wt.projectionMatrix),tt.projectionMatrixInverse.copy(wt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Bl*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(tt){return x[tt]};let ot=null;function Lt(tt,wt){if(h=wt.getViewerPose(c||o),p=wt,h!==null){let Bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let jt=!1;Bt.length!==B.cameras.length&&(B.cameras.length=0,jt=!0);for(let Zt=0;Zt<Bt.length;Zt++){let me=Bt[Zt],Te=null;if(f!==null)Te=f.getViewport(me);else{let vt=u.getViewSubImage(d,me);Te=vt.viewport,Zt===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let lt=F[Zt];lt===void 0&&(lt=new Rn,lt.layers.enable(Zt),lt.viewport=new Ke,F[Zt]=lt),lt.matrix.fromArray(me.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(me.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Te.x,Te.y,Te.width,Te.height),Zt===0&&(B.matrix.copy(lt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),jt===!0&&B.cameras.push(lt)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let Zt=u.getDepthInformation(Bt[0]);Zt&&Zt.isValid&&Zt.texture&&m.init(Zt,s.renderState)}if(K&&K.includes("camera-access")&&g){t.state.unbindTexture(),u=i.getBinding();for(let Zt=0;Zt<Bt.length;Zt++){let me=Bt[Zt].camera;if(me){let Te=x[me];Te||(Te=new jo,x[me]=Te);let lt=u.getCameraImage(me);Te.sourceTexture=lt}}}}for(let Bt=0;Bt<R.length;Bt++){let jt=C[Bt],K=R[Bt];jt!==null&&K!==void 0&&K.update(jt,wt,c||o)}ot&&ot(tt,wt),wt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:wt}),p=null}let Kt=new _p;Kt.setAnimationLoop(Lt),this.setAnimationLoop=function(tt){ot=tt},this.dispose=function(){}}},qM=new Jt,Cp=new he;Cp.set(-1,0,0,0,1,0,0,0,1);function YM(n,t){function e(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,nd(n)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,M,w,v){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),u(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),d(m,x),x.isMeshPhysicalMaterial&&f(m,x,v)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,M,w):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,e(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===gn&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,e(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===gn&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,e(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,e(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let M=t.get(x),w=M.envMap,v=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cp),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,M,w){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*M,m.scale.value=w*.5,x.map&&(m.map.value=x.map,e(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function u(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function d(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function f(m,x,M){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,e(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===gn&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let M=t.get(x).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZM(n,t,e,i){let s={},r={};function o(M,w){let v=w.program;i.uniformBlockBinding(M,v,s[M.id])}function a(M,w){let v=s[M.id];v===void 0&&(p(M),v=l(M),s[M.id]=v,M.addEventListener("dispose",m));let R=w.program;i.updateUBOMapping(M,R);let C=t.render.frame;r[M.id]!==C&&(c(M),r[M.id]=C)}function l(M){let w=n.createBuffer(),v=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,v,R),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(M){let w=s[M.id],v=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let C=0,_=v.length;C<_;C++){let E=v[C];if(Array.isArray(E))for(let P=0,S=E.length;P<S;P++)h(E[P],C,P,R);else h(E,C,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,w,v,R){if(d(M,w,v,R)===!0){let C=M.__offset,_=M.value;if(Array.isArray(_)){let E=0;for(let P=0;P<_.length;P++){let S=_[P],I=g(S,!0);u(S,M.__data,E),E+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,M.__data)}}function u(M,w,v){typeof M=="number"||typeof M=="boolean"?w[v]=M:M.isMatrix3?(w[v]=M.elements[0],w[v+1]=M.elements[1],w[v+2]=M.elements[2],w[v+3]=0,w[v+4]=M.elements[3],w[v+5]=M.elements[4],w[v+6]=M.elements[5],w[v+7]=0,w[v+8]=M.elements[6],w[v+9]=M.elements[7],w[v+10]=M.elements[8],w[v+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-v),v):M.toArray(w,v)}function d(M,w,v,R){let C=M.value,_=w+"_"+v;if(Array.isArray(C)){R[_]===void 0&&(R[_]=[]);let E=R[_],P=!1;for(let S=0;S<C.length;S++)f(C[S],E,S)===!0&&(P=!0);return P}return f(C,R,_)}function f(M,w,v){if(w[v]===void 0)return typeof M=="number"||typeof M=="boolean"?w[v]=M:ArrayBuffer.isView(M)?w[v]=M.slice():w[v]=M.clone(),!0;{let R=w[v];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return w[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function p(M){let w=M.uniforms,v=0,R=16;for(let _=0,E=w.length;_<E;_++){let P=Array.isArray(w[_])?w[_]:[w[_]];for(let S=0,I=P.length;S<I;S++){let F=P[S],B=Array.isArray(F.value)?F.value:[F.value],N=Array.isArray(w[_])||Array.isArray(F.value),G=v;for(let V=0,ct=B.length;V<ct;V++){let J=B[V],rt=g(J,N),ot=v%R,Lt=ot%rt.boundary,Kt=ot+Lt;v+=Lt,Kt!==0&&R-Kt<rt.storage&&(v+=R-Kt),V===0&&(G=v),v+=rt.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((v-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}let C=v%R;return C>0&&(v+=R-C),M.__size=v,M.__cache={},this}function g(M,w){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(M){let w=M.target;w.removeEventListener("dispose",m),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function x(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:x}}var $M=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function JM(){return qi===null&&(qi=new $o($M,16,16,Hs,Ri),qi.name="DFG_LUT",qi.minFilter=Vn,qi.magFilter=Vn,qi.wrapS=Oi,qi.wrapT=Oi,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var nh=class{constructor(t={}){let{canvas:e=F0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Kn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=f,m=new Set([bc,vc,Mc]),x=new Set([Kn,Ai,ro,pr,xc,yc]),M=new Uint32Array(4),w=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},R=null,C=null,_=[],E=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,I=!1,F=null,B=null,N=null,G=null;this._outputColorSpace=an;let q=0,V=0,ct=null,J=-1,rt=null,ot=new Ke,Lt=new Ke,Kt=null,tt=new re(0),wt=0,Bt=e.width,jt=e.height,K=1,Ot=null,pe=null,Zt=new Ke(0,0,Bt,jt),me=new Ke(0,0,Bt,jt),Te=!1,lt=new Ds,vt=new Vl,yt=!1,Ht=!1,Ct=new Jt,fe=new U,Yt=new Ke,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function Ne(){return ct===null?K:1}let k=i;function hn(A,H){return e.getContext(A,H)}let Se,Ge,Tt,sn,te,ce,L,T,X,dt,at,_t,At,nt,it,bt,O,st,Q,Et,gt,Mt,$t;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Qt,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),k===null){let H="webgl2";if(k=hn(H,A),k===null)throw hn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}_e()}catch(A){throw e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),se("WebGLRenderer: "+A.message),A}function _e(){Se=new a_(k),Se.init(),gt=new VM(k,Se),Ge=new Jy(k,Se,t,gt),Tt=new GM(k,Se),Ge.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),B=k.createFramebuffer(),N=k.createFramebuffer(),G=k.createFramebuffer(),sn=new h_(k),te=new AM,ce=new zM(k,Se,Tt,te,Ge,gt,sn),L=new o_(S),T=new d1(k),Mt=new Zy(k,T),X=new l_(k,T,sn,Mt),dt=new d_(k,X,T,Mt,sn),st=new u_(k,Ge,ce),it=new Ky(te),at=new TM(S,L,Se,Ge,Mt,it),_t=new YM(S,te),At=new CM,nt=new UM(Se),O=new Yy(S,L,Tt,dt,p,l),bt=new kM(S,dt,Ge),$t=new ZM(k,sn,Ge,Tt),Q=new $y(k,Se,sn),Et=new c_(k,Se,sn),sn.programs=at.programs,S.capabilities=Ge,S.extensions=Se,S.properties=te,S.renderLists=At,S.shadowMap=bt,S.state=Tt,S.info=sn}g!==Kn&&(P=new p_(g,e.width,e.height,a,s,r));let ft=new Md(S,k);this.xr=ft,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(Bt,jt,!1))},this.getSize=function(A){return A.set(Bt,jt)},this.setSize=function(A,H,$=!0){if(ft.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}Bt=A,jt=H,e.width=Math.floor(A*K),e.height=Math.floor(H*K),$===!0&&(e.style.width=A+"px",e.style.height=H+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Bt*K,jt*K).floor()},this.setDrawingBufferSize=function(A,H,$){Bt=A,jt=H,K=$,e.width=Math.floor(A*$),e.height=Math.floor(H*$),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(g===Kn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ot)},this.getViewport=function(A){return A.copy(Zt)},this.setViewport=function(A,H,$,W){A.isVector4?Zt.set(A.x,A.y,A.z,A.w):Zt.set(A,H,$,W),Tt.viewport(ot.copy(Zt).multiplyScalar(Ne()).round())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,H,$,W){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,H,$,W),Tt.scissor(Lt.copy(me).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){Tt.setScissorTest(Te=A)},this.setOpaqueSort=function(A){Ot=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,$=!0){let W=0;if(A){let Z=!1;if(ct!==null){let Rt=ct.texture.format;Z=m.has(Rt)}if(Z){let Rt=ct.texture.type,Gt=x.has(Rt),St=O.getClearColor(),Ft=O.getClearAlpha(),Xt=St.r,ue=St.g,Pe=St.b;Gt?(M[0]=Xt,M[1]=ue,M[2]=Pe,M[3]=Ft,k.clearBufferuiv(k.COLOR,0,M)):(w[0]=Xt,w[1]=ue,w[2]=Pe,w[3]=Ft,k.clearBufferiv(k.COLOR,0,w))}else W|=k.COLOR_BUFFER_BIT}H&&(W|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),O.dispose(),At.dispose(),nt.dispose(),ce.dispose(),te.dispose(),L.dispose(),dt.dispose(),X.dispose(),Mt.dispose(),$t.dispose(),at.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",mf),ft.removeEventListener("sessionend",gf),Ks.stop()};function Qt(A){A.preventDefault(),zo("WebGLRenderer: Context Lost."),I=!0}function ge(){zo("WebGLRenderer: Context Restored."),I=!1;let A=sn.autoReset,H=bt.enabled,$=bt.autoUpdate,W=bt.needsUpdate,Z=bt.type;_e(),sn.autoReset=A,bt.enabled=H,bt.autoUpdate=$,bt.needsUpdate=W,bt.type=Z}function Nt(A){se("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function He(A){let H=A.target;H.removeEventListener("dispose",He),vn(H)}function vn(A){Es(A),te.remove(A)}function Es(A){let H=te.get(A).programs;H!==void 0&&(H.forEach(function($){at.releaseProgram($)}),A.isShaderMaterial&&at.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,$,W,Z,Rt){H===null&&(H=Ae);let Gt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,St=$m(A,H,$,W,Z);Tt.setMaterial(W,Gt);let Ft=$.index,Xt=1;if(W.wireframe===!0){if(Ft=X.getWireframeAttribute($),Ft===void 0)return;Xt=2}let ue=$.drawRange,Pe=$.attributes.position,Vt=ue.start*Xt,Ie=(ue.start+ue.count)*Xt;Rt!==null&&(Vt=Math.max(Vt,Rt.start*Xt),Ie=Math.min(Ie,(Rt.start+Rt.count)*Xt)),Ft!==null?(Vt=Math.max(Vt,0),Ie=Math.min(Ie,Ft.count)):Pe!=null&&(Vt=Math.max(Vt,0),Ie=Math.min(Ie,Pe.count));let un=Ie-Vt;if(un<0||un===1/0)return;Mt.setup(Z,W,St,$,Ft);let Xe,ze=Q;if(Ft!==null&&(Xe=T.get(Ft),ze=Et,ze.setIndex(Xe)),Z.isMesh)W.wireframe===!0?(Tt.setLineWidth(W.wireframeLinewidth*Ne()),ze.setMode(k.LINES)):ze.setMode(k.TRIANGLES);else if(Z.isLine){let Ln=W.linewidth;Ln===void 0&&(Ln=1),Tt.setLineWidth(Ln*Ne()),Z.isLineSegments?ze.setMode(k.LINES):Z.isLineLoop?ze.setMode(k.LINE_LOOP):ze.setMode(k.LINE_STRIP)}else Z.isPoints?ze.setMode(k.POINTS):Z.isSprite&&ze.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))ze.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Ln=Z._multiDrawStarts,Wt=Z._multiDrawCounts,Gn=Z._multiDrawCount,Ue=Ft?T.get(Ft).bytesPerElement:1,js=te.get(W).currentProgram.getUniforms();for(let Dn=0;Dn<Gn;Dn++)js.setValue(k,"_gl_DrawID",Dn),ze.render(Ln[Dn]/Ue,Wt[Dn])}else if(Z.isInstancedMesh)ze.renderInstances(Vt,un,Z.count);else if($.isInstancedBufferGeometry){let Ln=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Wt=Math.min($.instanceCount,Ln);ze.renderInstances(Vt,un,Wt)}else ze.render(Vt,un)};function pf(A,H,$,W){F!==null&&A.isNodeMaterial&&F.setObject(W,A),yt===!0&&it.setState(A,$,!1),A.transparent===!0&&A.side===cn&&A.forceSinglePass===!1?(A.side=gn,A.needsUpdate=!0,wo(A,H,W),A.side=Os,A.needsUpdate=!0,wo(A,H,W),A.side=cn):wo(A,H,W)}this.compile=function(A,H,$=null){$===null&&($=A),F!==null&&F.renderStart(A,H,$),C=nt.get($),C.init(H),E.push(C),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),A!==$&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),C.setupLights(),F!==null&&F.updateLights(C.state.lightsArray),Ht=this.localClippingEnabled,yt=it.init(this.clippingPlanes,Ht),yt===!0&&it.setGlobalState(this.clippingPlanes,H),F!==null&&bt.render(C.state.shadowsArray,$,H);let W=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Rt=Z.material;if(Rt)if(Array.isArray(Rt))for(let Gt=0;Gt<Rt.length;Gt++){let St=Rt[Gt];pf(St,$,H,Z),W.add(St)}else pf(Rt,$,H,Z),W.add(Rt)}),C=E.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(A,H,$=null){let W=this.compile(A,H,$);return new Promise(Z=>{function Rt(){if(W.forEach(function(Gt){let Ft=te.get(Gt).currentProgram;(Ft===void 0||Ft.isReady())&&W.delete(Gt)}),W.size===0){Z(A);return}setTimeout(Rt,10)}Se.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Yh=null;function Ym(A){Yh&&Yh(A)}function mf(){Ks.stop()}function gf(){Ks.start()}let Ks=new _p;Ks.setAnimationLoop(Ym),typeof self<"u"&&Ks.setContext(self),this.setAnimationLoop=function(A){Yh=A,ft.setAnimationLoop(A),A===null?Ks.stop():Ks.start()},ft.addEventListener("sessionstart",mf),ft.addEventListener("sessionend",gf),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(A,H);let $=ft.enabled===!0&&ft.isPresenting===!0,W=P!==null&&(ct===null||$)&&P.begin(S,ct);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(H),H=ft.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,H,ct),C=nt.get(A,E.length),C.init(H),C.state.textureUnits=ce.getTextureUnits(),E.push(C),Ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?vt.setFromArrayCamera(H):lt.setFromProjectionMatrix(Ct,ci,H.reversedDepth),Ht=this.localClippingEnabled,yt=it.init(this.clippingPlanes,Ht),R=At.get(A,_.length),R.init(),_.push(R),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let Gt=S.xr.getDepthSensingMesh();Gt!==null&&Zh(Gt,H,-1/0,S.sortObjects)}Zh(A,H,0,S.sortObjects),R.finish(),F!==null&&F.updateLights(C.state.lightsArray),S.sortObjects===!0&&R.sort(Ot,pe),Ce=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ce&&O.addToRenderList(R,A),this.info.autoReset===!0&&this.info.reset(),yt===!0&&it.beginShadows();let Z=C.state.shadowsArray;if(bt.render(Z,A,H),yt===!0&&it.endShadows(),(W&&P.hasRenderPass())===!1){let Gt=R.opaque,St=R.transmissive;if(C.setupLights(),H.isArrayCamera){let Ft=H.cameras;if(St.length>0)for(let Xt=0,ue=Ft.length;Xt<ue;Xt++){let Pe=Ft[Xt];yf(Gt,St,A,Pe)}Ce&&O.render(A);for(let Xt=0,ue=Ft.length;Xt<ue;Xt++){let Pe=Ft[Xt];xf(R,A,Pe,Pe.viewport)}}else St.length>0&&yf(Gt,St,A,H),Ce&&O.render(A),xf(R,A,H)}ct!==null&&V===0&&(ce.updateMultisampleRenderTarget(ct),ce.updateRenderTargetMipmap(ct)),W&&P.end(S),A.isScene===!0&&A.onAfterRender(S,A,H),Mt.resetDefaultState(),J=-1,rt=null,E.pop(),E.length>0?(C=E[E.length-1],ce.setTextureUnits(C.state.textureUnits),yt===!0&&it.setGlobalState(S.clippingPlanes,C.state.camera)):C=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,F!==null&&F.renderEnd()};function Zh(A,H,$,W){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)C.pushLight(A),A.castShadow&&C.pushShadow(A);else if(A.isSprite){let Gt=H.isArrayCamera?vt:lt;if(!A.frustumCulled||A.intersectsFrustum(Gt)){W&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);let St=dt.update(A),Ft=A.material;Ft.visible&&R.push(A,St,Ft,$,Yt.z,null,H)}}else if(A.isMesh||A.isLine||A.isPoints){let Gt=H.isArrayCamera?vt:lt;if(!A.frustumCulled||A.intersectsFrustum(Gt)){let St=dt.update(A),Ft=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Yt.copy(St.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ft)){let Xt=St.groups;for(let ue=0,Pe=Xt.length;ue<Pe;ue++){let Vt=Xt[ue],Ie=Ft[Vt.materialIndex];Ie&&Ie.visible&&R.push(A,St,Ie,$,Yt.z,Vt,H)}}else Ft.visible&&R.push(A,St,Ft,$,Yt.z,null,H)}}}let Rt=A.children;for(let Gt=0,St=Rt.length;Gt<St;Gt++)Zh(Rt[Gt],H,$,W)}function xf(A,H,$,W){let{opaque:Z,transmissive:Rt,transparent:Gt}=A;C.setupLightsView($),yt===!0&&it.setGlobalState(S.clippingPlanes,$),W&&Tt.viewport(ot.copy(W)),Z.length>0&&Qa(Z,H,$),Rt.length>0&&Qa(Rt,H,$),Gt.length>0&&Qa(Gt,H,$),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function yf(A,H,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[W.id]===void 0){let Vt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[W.id]=new ei(1,1,{generateMipmaps:!0,type:Vt?Ri:Kn,minFilter:us,samples:Math.max(4,Ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}let Rt=C.state.transmissionRenderTarget[W.id],Gt=W.viewport||ot;Rt.setSize(Gt.z*S.transmissionResolutionScale,Gt.w*S.transmissionResolutionScale);let St=S.getRenderTarget(),Ft=S.getActiveCubeFace(),Xt=S.getActiveMipmapLevel();S.setRenderTarget(Rt),S.getClearColor(tt),wt=S.getClearAlpha(),wt<1&&S.setClearColor(16777215,.5),S.clear(),Ce&&O.render($);let ue=S.toneMapping;S.toneMapping=Xi;let Pe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),C.setupLightsView(W),yt===!0&&it.setGlobalState(S.clippingPlanes,W),Qa(A,$,W),ce.updateMultisampleRenderTarget(Rt),ce.updateRenderTargetMipmap(Rt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ie=0,un=H.length;Ie<un;Ie++){let Xe=H[Ie],{object:ze,geometry:Ln,material:Wt,group:Gn}=Xe;if(Wt.side===cn&&ze.layers.test(W.layers)){let Ue=Wt.side;Wt.side=gn,Wt.needsUpdate=!0,_f(ze,$,W,Ln,Wt,Gn),Wt.side=Ue,Wt.needsUpdate=!0,Vt=!0}}Vt===!0&&(ce.updateMultisampleRenderTarget(Rt),ce.updateRenderTargetMipmap(Rt))}S.setRenderTarget(St,Ft,Xt),S.setClearColor(tt,wt),Pe!==void 0&&(W.viewport=Pe),S.toneMapping=ue}function Qa(A,H,$){let W=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Rt=A.length;Z<Rt;Z++){let Gt=A[Z],{object:St,geometry:Ft,group:Xt}=Gt,ue=Gt.material;ue.allowOverride===!0&&W!==null&&(ue=W),St.layers.test($.layers)&&_f(St,H,$,Ft,ue,Xt)}}function _f(A,H,$,W,Z,Rt){F!==null&&Z.isNodeMaterial&&F.setObject(A,Z),A.onBeforeRender(S,H,$,W,Z,Rt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(S,H,$,W,A,Rt),Z.transparent===!0&&Z.side===cn&&Z.forceSinglePass===!1?(Z.side=gn,Z.needsUpdate=!0,S.renderBufferDirect($,H,W,Z,A,Rt),Z.side=Os,Z.needsUpdate=!0,S.renderBufferDirect($,H,W,Z,A,Rt),Z.side=cn):S.renderBufferDirect($,H,W,Z,A,Rt),A.onAfterRender(S,H,$,W,Z,Rt)}function Mf(A){let H=0;for(let $ of A)$.texture!==null&&H++;return H}function wo(A,H,$){H.isScene!==!0&&(H=Ae);let W=te.get(A),Z=C.state.lights,Rt=C.state.shadowsArray,Gt=Z.state.version,St=at.getParameters(A,Z.state,Rt,H,$,C.state.lightProbeGridArray),Ft=at.getProgramCacheKey(St),Xt=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,W.fog=H.fog;let ue=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=L.get(A.envMap||W.environment,ue),W.envMapRotation=W.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",He),Xt=new Map,W.programs=Xt,W.programVariants=new Map);let Pe=Xt.get(Ft);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===Gt)return bf(A,St),Pe}else St.uniforms=at.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,$,St),A.onBeforeCompile(St,S),Pe=at.acquireProgram(St,Ft),Xt.set(Ft,Pe),W.uniforms=St.uniforms;let Vt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=it.uniform),bf(A,St),W.needsLights=Km(A),W.lightsStateVersion=Gt,W.needsLights&&(Vt.ambientLightColor.value=Z.state.ambient,Vt.lightProbe.value=Z.state.probe,Vt.sunLights.value=Z.state.sun,Vt.sunLightShadows.value=Z.state.sunShadow,Vt.directionalLights.value=Z.state.directional,Vt.directionalLightShadows.value=Z.state.directionalShadow,Vt.spotLights.value=Z.state.spot,Vt.spotLightShadows.value=Z.state.spotShadow,Vt.rectAreaLights.value=Z.state.rectArea,Vt.ltc_1.value=Z.state.rectAreaLTC1,Vt.ltc_2.value=Z.state.rectAreaLTC2,Vt.pointLights.value=Z.state.point,Vt.pointLightShadows.value=Z.state.pointShadow,Vt.hemisphereLights.value=Z.state.hemi,Vt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Vt.sunShadowCascade.value=Z.state.sunShadowCascade,Vt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Vt.spotLightMatrix.value=Z.state.spotLightMatrix,Vt.spotLightMap.value=Z.state.spotLightMap,Vt.pointShadowMatrix.value=Z.state.pointShadowMatrix),W.numLightProbeGrids=Mf(C.state.lightProbeGridArray),W.currentProgram=Pe,W.uniformsList=null,Pe}function Zm(A,H,$,W,Z){let Rt=te.get(A),Gt=Rt.currentProgram.id+","+W+","+Z,St=Rt.programVariants.get(Gt);return St===void 0?(St=wo(A,H,$),Rt.programVariants.set(Gt,St)):(Rt.currentProgram=St,Rt.uniformsList=null,Rt.outputColorSpace=W,Rt.toneMapping=Z),St}function vf(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=oo.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function bf(A,H){let $=te.get(A);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function $m(A,H,$,W,Z){H.isScene!==!0&&(H=Ae),ce.resetTextureUnits();let Rt=H.fog,Gt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?H.environment:null,St=ct===null?S.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Le.workingColorSpace,Ft=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Xt=L.get(W.envMap||Gt,Ft),ue=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Pe=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Vt=!!$.morphAttributes.position,Ie=!!$.morphAttributes.normal,un=!!$.morphAttributes.color,Xe=Xi;W.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Xe=S.toneMapping);let ze=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ln=ze!==void 0?ze.length:0,Wt=te.get(W),Gn=C.state.lights;if(yt===!0&&(Ht===!0||A!==rt)){let tn=A===rt&&W.id===J;it.setState(W,A,tn)}let Ue=!1,js=!1;W.version===Wt.__version?Wt.needsLights&&Wt.lightsStateVersion!==Gn.state.version||Z.isBatchedMesh&&Wt.batching===!1||!Z.isBatchedMesh&&Wt.batching===!0||Z.isBatchedMesh&&Wt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Wt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Wt.instancing===!1||!Z.isInstancedMesh&&Wt.instancing===!0||Z.isSkinnedMesh&&Wt.skinning===!1||!Z.isSkinnedMesh&&Wt.skinning===!0||Z.isInstancedMesh&&Wt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Wt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Wt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Wt.instancingMorph===!1&&Z.morphTexture!==null||Wt.envMap!==Xt||W.fog===!0&&Wt.fog!==Rt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==it.numPlanes||Wt.numIntersection!==it.numIntersection)||Wt.vertexAlphas!==ue||Wt.vertexTangents!==Pe||Wt.morphTargets!==Vt||Wt.morphNormals!==Ie||Wt.morphColors!==un||Wt.morphTargetsCount!==Ln||Wt.numLightProbeGrids!==Mf(C.state.lightProbeGridArray)?Ue=!0:(Wt.outputColorSpace!==St||Wt.toneMapping!==Xe)&&(js=!0):(Ue=!0,Wt.__version=W.version);let Dn=Wt.currentProgram;(Ue===!0||js===!0)&&(Dn=js===!0?Zm(W,H,Z,St,Xe):wo(W,H,Z),F&&W.isNodeMaterial&&F.onUpdateProgram(W,Dn,Wt));let tl=!1,Ss=!1,Qs=!1,De=Dn.getUniforms(),An=Wt.uniforms;if(Tt.useProgram(Dn.program)&&(tl=!0,Ss=!0,Qs=!0),W.id!==J&&(J=W.id,Ss=!0),tl||rt!==A){Tt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),De.setValue(k,"projectionMatrix",A.projectionMatrix),De.setValue(k,"viewMatrix",A.matrixWorldInverse);let bn=De.map.cameraPosition;bn!==void 0&&bn.setValue(k,fe.setFromMatrixPosition(A.matrixWorld)),Ge.logarithmicDepthBuffer&&De.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&De.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),rt!==A&&(rt=A,Ss=!0,Qs=!0)}if(Wt.needsLights&&(Gn.state.sunShadowMap.length>0&&De.setValue(k,"sunShadowMap",Gn.state.sunShadowMap,ce),Gn.state.directionalShadowMap.length>0&&De.setValue(k,"directionalShadowMap",Gn.state.directionalShadowMap,ce),Gn.state.spotShadowMap.length>0&&De.setValue(k,"spotShadowMap",Gn.state.spotShadowMap,ce),Gn.state.pointShadowMap.length>0&&De.setValue(k,"pointShadowMap",Gn.state.pointShadowMap,ce)),Z.isSkinnedMesh){De.setOptional(k,Z,"bindMatrix"),De.setOptional(k,Z,"bindMatrixInverse");let tn=Z.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),De.setValue(k,"boneTexture",tn.boneTexture,ce))}Z.isBatchedMesh&&(De.setOptional(k,Z,"batchingTexture"),De.setValue(k,"batchingTexture",Z._matricesTexture,ce),De.setOptional(k,Z,"batchingIdTexture"),De.setValue(k,"batchingIdTexture",Z._indirectTexture,ce),De.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&De.setValue(k,"batchingColorTexture",Z._colorsTexture,ce));let vi=$.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&st.update(Z,$,Dn),(Ss||Wt.receiveShadow!==Z.receiveShadow)&&(Wt.receiveShadow=Z.receiveShadow,De.setValue(k,"receiveShadow",Z.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&H.environment!==null&&(An.envMapIntensity.value=H.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=JM()),Ss){if(De.setValue(k,"toneMappingExposure",S.toneMappingExposure),Wt.needsLights&&Jm(An,Qs),Rt&&W.fog===!0&&_t.refreshFogUniforms(An,Rt),_t.refreshMaterialUniforms(An,W,K,jt,C.state.transmissionRenderTarget[A.id]),Wt.needsLights&&Wt.numLightProbeGrids>0){let tn=v,bn=0;for(let ts of C.state.lightProbeGridArray)ts.texture!==null&&(tn.textures[bn]=ts.texture,tn.min[bn]=ts.boundingBox.min,tn.max[bn]=ts.boundingBox.max,tn.resolution[bn]=ts.resolution,bn++);for(let ts in tn)tn[ts].length=bn;An.probesSH.value=tn.textures,An.probesMin.value=tn.min,An.probesMax.value=tn.max,An.probesResolution.value=tn.resolution}oo.upload(k,vf(Wt),An,ce)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(oo.upload(k,vf(Wt),An,ce),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&De.setValue(k,"center",Z.center),De.setValue(k,"modelViewMatrix",Z.modelViewMatrix),De.setValue(k,"normalMatrix",Z.normalMatrix),De.setValue(k,"modelMatrix",Z.matrixWorld),W.uniformsGroups!==void 0){let tn=W.uniformsGroups;for(let bn=0,ts=tn.length;bn<ts;bn++){let Sf=tn[bn];$t.update(Sf,Dn),$t.bind(Sf,Dn)}}return Dn}function Jm(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Km(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(A,H,$){let W=te.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=H,te.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let $=te.get(A);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,$=0){ct=A,q=H,V=$;let W=null,Z=!1,Rt=!1;if(A){let St=te.get(A);if(St.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(k.FRAMEBUFFER,St.__webglFramebuffer),ot.copy(A.viewport),Lt.copy(A.scissor),Kt=A.scissorTest,Tt.viewport(ot),Tt.scissor(Lt),Tt.setScissorTest(Kt),J=-1;return}else if(St.__webglFramebuffer===void 0)ce.setupRenderTarget(A);else if(St.__hasExternalTextures)ce.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ue=A.depthTexture;if(St.__boundDepthTexture!==ue){if(ue!==null&&te.has(ue)&&(A.width!==ue.image.width||A.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(A)}}let Ft=A.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Rt=!0);let Xt=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?W=Xt[H][$]:W=Xt[H],Z=!0):A.samples>0&&ce.useMultisampledRTT(A)===!1?W=te.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?W=Xt[$]:W=Xt,ot.copy(A.viewport),Lt.copy(A.scissor),Kt=A.scissorTest}else ot.copy(Zt).multiplyScalar(K).floor(),Lt.copy(me).multiplyScalar(K).floor(),Kt=Te;if($!==0&&(W=B),Tt.bindFramebuffer(k.FRAMEBUFFER,W)&&Tt.drawBuffers(A,W),Tt.viewport(ot),Tt.scissor(Lt),Tt.setScissorTest(Kt),Z){let St=te.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,St.__webglTexture,$)}else if(Rt){let St=H;for(let Ft=0;Ft<A.textures.length;Ft++){let Xt=te.get(A.textures[Ft]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ft,Xt.__webglTexture,$,St)}}else if(A!==null&&$!==0){let St=te.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,St.__webglTexture,$)}J=-1};function Ef(A){let H=te.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=Ge.textureFormatReadable(A.format),H.__typeReadable=Ge.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,$,W,Z,Rt,Gt,St=0){if(!(A&&A.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Gt!==void 0&&(Ft=Ft[Gt],Array.isArray(Ft)&&(Ft=Ft[0])),Ft){Tt.bindFramebuffer(k.FRAMEBUFFER,Ft);try{let Xt=A.textures[St],ue=Xt.format,Pe=Xt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+St);let Vt=Ef(Xt);if(Vt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-W&&$>=0&&$<=A.height-Z&&k.readPixels(H,$,W,Z,gt.convert(ue),gt.convert(Pe),Rt)}finally{let Xt=ct!==null?te.get(ct).__webglFramebuffer:null;Tt.bindFramebuffer(k.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(A,H,$,W,Z,Rt,Gt,St=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Gt!==void 0&&(Ft=Ft[Gt],Array.isArray(Ft)&&(Ft=Ft[0])),Ft)if(H>=0&&H<=A.width-W&&$>=0&&$<=A.height-Z){Tt.bindFramebuffer(k.FRAMEBUFFER,Ft);let Xt=A.textures[St],ue=Xt.format,Pe=Xt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+St);let Vt=Ef(Xt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.bufferData(k.PIXEL_PACK_BUFFER,Rt.byteLength,k.STREAM_READ),k.readPixels(H,$,W,Z,gt.convert(ue),gt.convert(Pe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let un=ct!==null?te.get(ct).__webglFramebuffer:null;Tt.bindFramebuffer(k.FRAMEBUFFER,un);let Xe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await B0(k,Xe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Rt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Ie),k.deleteSync(Xe),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,$=0){let W=Math.pow(2,-$),Z=Math.floor(A.image.width*W),Rt=Math.floor(A.image.height*W),Gt=H!==null?H.x:0,St=H!==null?H.y:0;ce.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,Gt,St,Z,Rt),Tt.unbindTexture()},this.copyTextureToTexture=function(A,H,$=null,W=null,Z=0,Rt=0){let Gt,St,Ft,Xt,ue,Pe,Vt,Ie,un,Xe=A.isCompressedTexture?A.mipmaps[Rt]:A.image;if($!==null)Gt=$.max.x-$.min.x,St=$.max.y-$.min.y,Ft=$.isBox3?$.max.z-$.min.z:1,Xt=$.min.x,ue=$.min.y,Pe=$.isBox3?$.min.z:0;else{let De=Math.pow(2,-Z);Gt=Math.floor(Xe.width*De),St=Math.floor(Xe.height*De),A.isDataArrayTexture?Ft=Xe.depth:A.isData3DTexture?Ft=Math.floor(Xe.depth*De):Ft=1,Xt=0,ue=0,Pe=0}W!==null?(Vt=W.x,Ie=W.y,un=W.z):(Vt=0,Ie=0,un=0);let ze=gt.convert(H.format),Ln=gt.convert(H.type),Wt;H.isData3DTexture?(ce.setTexture3D(H,0),Wt=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ce.setTexture2DArray(H,0),Wt=k.TEXTURE_2D_ARRAY):(ce.setTexture2D(H,0),Wt=k.TEXTURE_2D),Tt.activeTexture(k.TEXTURE0),Tt.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),Tt.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Tt.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);let Gn=Tt.getParameter(k.UNPACK_ROW_LENGTH),Ue=Tt.getParameter(k.UNPACK_IMAGE_HEIGHT),js=Tt.getParameter(k.UNPACK_SKIP_PIXELS),Dn=Tt.getParameter(k.UNPACK_SKIP_ROWS),tl=Tt.getParameter(k.UNPACK_SKIP_IMAGES);Tt.pixelStorei(k.UNPACK_ROW_LENGTH,Xe.width),Tt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Xe.height),Tt.pixelStorei(k.UNPACK_SKIP_PIXELS,Xt),Tt.pixelStorei(k.UNPACK_SKIP_ROWS,ue),Tt.pixelStorei(k.UNPACK_SKIP_IMAGES,Pe);let Ss=A.isDataArrayTexture||A.isData3DTexture,Qs=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let De=te.get(A),An=te.get(H),vi=te.get(De.__renderTarget),tn=te.get(An.__renderTarget);Tt.bindFramebuffer(k.READ_FRAMEBUFFER,vi.__webglFramebuffer),Tt.bindFramebuffer(k.DRAW_FRAMEBUFFER,tn.__webglFramebuffer);for(let bn=0;bn<Ft;bn++)Ss&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,te.get(A).__webglTexture,Z,Pe+bn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,te.get(H).__webglTexture,Rt,un+bn)),k.blitFramebuffer(Xt,ue,Xt+Gt,ue+St,Vt,Ie,Vt+Gt,Ie+St,k.DEPTH_BUFFER_BIT,k.NEAREST);Tt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||te.has(A)){let De=te.get(A),An=te.get(H);Tt.bindFramebuffer(k.READ_FRAMEBUFFER,N),Tt.bindFramebuffer(k.DRAW_FRAMEBUFFER,G);for(let vi=0;vi<Ft;vi++)Ss?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.__webglTexture,Z,Pe+vi):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,De.__webglTexture,Z),Qs?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,An.__webglTexture,Rt,un+vi):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,An.__webglTexture,Rt),Z!==0?k.blitFramebuffer(Xt,ue,Xt+Gt,ue+St,Vt,Ie,Vt+Gt,Ie+St,k.COLOR_BUFFER_BIT,k.NEAREST):Qs?k.copyTexSubImage3D(Wt,Rt,Vt,Ie,un+vi,Xt,ue,Gt,St):k.copyTexSubImage2D(Wt,Rt,Vt,Ie,Xt,ue,Gt,St);Tt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Qs?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Wt,Rt,Vt,Ie,un,Gt,St,Ft,ze,Ln,Xe.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Wt,Rt,Vt,Ie,un,Gt,St,Ft,ze,Xe.data):k.texSubImage3D(Wt,Rt,Vt,Ie,un,Gt,St,Ft,ze,Ln,Xe):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Rt,Vt,Ie,Gt,St,ze,Ln,Xe.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Rt,Vt,Ie,Xe.width,Xe.height,ze,Xe.data):k.texSubImage2D(k.TEXTURE_2D,Rt,Vt,Ie,Gt,St,ze,Ln,Xe);Tt.pixelStorei(k.UNPACK_ROW_LENGTH,Gn),Tt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ue),Tt.pixelStorei(k.UNPACK_SKIP_PIXELS,js),Tt.pixelStorei(k.UNPACK_SKIP_ROWS,Dn),Tt.pixelStorei(k.UNPACK_SKIP_IMAGES,tl),Rt===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&k.generateMipmap(Wt),Tt.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&ce.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ce.setTextureCube(A,0):A.isData3DTexture?ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ce.setTexture2DArray(A,0):ce.setTexture2D(A,0),Tt.unbindTexture()},this.resetState=function(){q=0,V=0,ct=null,Tt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}};var rh=class extends Ps{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new de;t.deleteAttribute("uv");let e=new ie({side:gn}),i=new ie,s=new wn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new D(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ls(t,i,6),a=new qe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new D(t,co(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new D(t,co(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new D(t,co(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new D(t,co(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new D(t,co(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new D(t,co(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function co(n){return new ca({color:0,emissive:16777215,emissiveIntensity:n})}var oh=1337;function Pt(){return oh=oh*16807%2147483647,(oh-1)/2147483646}function Cn(n){oh=n}function KM(n,t){let e=new Float32Array(n*n);Cn(t);for(let i=0;i<e.length;i++)e[i]=Pt();return(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),h=l*l*(3-2*l),u=n,d=(r%u+u)%u,f=(o%u+u)%u,p=(d+1)%u,g=(f+1)%u,m=e[f*u+d],x=e[f*u+p],M=e[g*u+d],w=e[g*u+p];return m+(x-m)*c+(M-m)*h+(m-x-M+w)*c*h}}function ve(n,t=4,e=5){let i=[];for(let s=0;s<e;s++)i.push({f:KM(t<<s,n+s*97),p:t<<s});return(s,r)=>{let o=0,a=.5,l=0;for(let c of i)o+=c.f(s*c.p,r*c.p)*a,l+=a,a*=.5;return o/l}}var vd={},ah=4;function Pp(n){ah=n}function ke(n,t,e,i={}){if(vd[n])return vd[n];let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createImageData(t,t),a=new Float32Array(t*t);for(let g=0;g<t;g++)for(let m=0;m<t;m++){let x=e(m/t,g/t,m,g),M=(g*t+m)*4;o.data[M]=Math.max(0,Math.min(255,x.r*255)),o.data[M+1]=Math.max(0,Math.min(255,x.g*255)),o.data[M+2]=Math.max(0,Math.min(255,x.b*255)),o.data[M+3]=x.a===void 0?255:x.a*255,a[g*t+m]=x.h===void 0?.5:x.h}r.putImageData(o,0,0),i.post&&i.post(r,t);let l=new Ti(s);l.colorSpace=an,l.wrapS=l.wrapT=ls,l.anisotropy=ah;let c=document.createElement("canvas");c.width=c.height=t;let h=c.getContext("2d"),u=h.createImageData(t,t),d=i.normalStrength||2;for(let g=0;g<t;g++)for(let m=0;m<t;m++){let x=a[g*t+(m-1+t)%t],M=a[g*t+(m+1)%t],w=a[(g-1+t)%t*t+m],v=a[(g+1)%t*t+m],R=(x-M)*d,C=(w-v)*d,_=1,E=Math.hypot(R,C,_);R/=E,C/=E,_/=E;let P=(g*t+m)*4;u.data[P]=(R*.5+.5)*255,u.data[P+1]=(-C*.5+.5)*255,u.data[P+2]=(_*.5+.5)*255,u.data[P+3]=255}h.putImageData(u,0,0);let f=new Ti(c);f.wrapS=f.wrapT=ls,f.anisotropy=ah;let p={map:l,normalMap:f,canvas:s};return vd[n]=p,p}var ae=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],bd=(n,t,e)=>n+(t-n)*e,Ve=(n,t,e)=>[bd(n[0],t[0],e),bd(n[1],t[1],e),bd(n[2],t[2],e)],Pi=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),qn=n=>n-Math.floor(n);function rn(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}var j={};function Ip(n=1){let t=n>=1?512:256,e=n>=1?256:128;{let r=ve(11,4,6),o=ve(12,16,3);j.grass=ke("grass",t,(a,l)=>{let c=r(a,l),h=o(a,l),u=rn(Math.floor(a*180),Math.floor(l*60+rn(Math.floor(a*180),3)*10)),d=Ve(ae(4156970),ae(8037962),Pi(c*1.3-.15+u*.25)),f=Ve(d,ae(9075274),Pi((h-.62)*3)*.5);return{r:f[0],g:f[1],b:f[2],h:u*.6+c*.4}},{normalStrength:3})}{let r=ve(21,8,5),o=ve(22,4,4);j.asphalt=ke("asphalt",t,(a,l,c,h)=>{let u=rn(c,h),d=r(a,l),f=Math.abs(o(a,l)-.5)<.006?1:0,p=.2+d*.12+(u>.93?.12:0)-(u<.05?.06:0)-f*.12;return{r:p,g:p,b:p*1.04,h:u*.5+d*.3-f*.6}},{normalStrength:2.5})}{let r=ve(31,8,5);j.concrete=ke("concrete",e*2,(o,a,l,c)=>{let h=r(o,a),u=rn(l,c),d=qn(o*2)<.012||qn(a*2)<.012?1:0,f=.62+h*.15+u*.05-d*.25;return{r:f,g:f*.98,b:f*.94,h:h*.5+u*.2-d*.7}})}{let r=ve(41,8,4);j.brick=ke("brick",t,(o,a,l,c)=>{let d=Math.floor(a*16),f=d%2*.5,p=qn(o*8+f),g=qn(a*16),m=Math.floor(o*8+f)+d*31,x=p<.05||g<.1,M=rn(m,7),w=Ve(ae(9059112),ae(11556666),M),v=r(o,a);if(x){let C=.68+v*.08;return{r:C,g:C*.96,b:C*.9,h:.1}}let R=Ve(w,ae(5909022),Pi(v-.45)*1.2);return{r:R[0],g:R[1],b:R[2],h:.7+v*.3}},{normalStrength:3})}{let r=ve(51,4,5);j.siding=ke("siding",e*2,(o,a,l,c)=>{let u=qn(a*10),d=.82+u*.18-(u>.94?.3:0),f=r(o*.5,a)*.08+rn(l,Math.floor(c/3))*.03,p=Pi(d+f-.05);return{r:p,g:p,b:p,h:u}},{normalStrength:4})}{let r=ve(61,8,5);j.plaster=ke("plaster",e,(o,a)=>{let l=r(o,a),c=.86+l*.12;return{r:c,g:c,b:c,h:l}},{normalStrength:1.2})}{let r=ve(71,2,5);j.floor=ke("floor",t,(o,a,l,c)=>{let u=Math.floor(a*8),d=rn(u,1),f=qn(o*2+d),p=Math.floor(o*2+d)*13+u,g=qn(a*8)<.03||f<.006,m=r(o*.5+p*.17,a*6+p*.3),x=rn(p,4),M=Ve(Ve(ae(8014376),ae(11038783),x),ae(4860436),Pi(m-.45)*1.5+Math.sin(m*60)*.06);return g?{r:M[0]*.5,g:M[1]*.5,b:M[2]*.5,h:0}:{r:M[0],g:M[1],b:M[2],h:.6+m*.2}})}{let r=ve(81,8,4);j.roof=ke("roof",e*2,(o,a,l,c)=>{let u=Math.floor(a*12),d=qn(a*12),f=qn(o*8+u%2*.5),p=Math.floor(o*8+u%2*.5)+u*17,m=.25+rn(p,3)*.12+r(o,a)*.1-(d>.9?.15:0)-(f<.03?.1:0)+d*.06;return{r:m*1.05,g:m*.92,b:m*.88,h:d}},{normalStrength:4})}{let r=ve(91,2,5);j.wood=ke("wood",e*2,(o,a,l,c)=>{let h=r(o*.3,a*4),u=Math.sin((h*30+o*3)*3)*.5+.5,d=Ve(ae(11567184),ae(8015920),u*.6+rn(l,c)*.08);return{r:d[0],g:d[1],b:d[2],h:u*.6}},{normalStrength:2})}{let r=ve(92,2,5),o=ve(93,8,4);j.paintwood=ke("paintwood",e,(a,l,c,h)=>{let u=r(a*.3,l*4),d=o(a,l)>.8,f=Math.sin(u*60)*.5+.5;if(d){let g=Ve(ae(9071178),ae(6965808),f);return{r:g[0],g:g[1],b:g[2],h:.2}}let p=.88+f*.05;return{r:p,g:p,b:p*.97,h:.6+f*.1}},{normalStrength:2})}{let r=ve(101,8,6);j.dirt=ke("dirt",e*2,(o,a,l,c)=>{let h=r(o,a),u=rn(l,c),d=Ve(ae(4862496),ae(8018490),h*1.2-.1+u*.1),f=u>.985;return{r:f?.6:d[0],g:f?.58:d[1],b:f?.55:d[2],h:h+(f?.5:0)}},{normalStrength:3})}j.tile=ke("tile",e,(r,o,a,l)=>{let c=qn(r*4)<.04||qn(o*4)<.04,h=(Math.floor(r*4)+Math.floor(o*4))%2,u=c?.55:h?.92:.2;return{r:u,g:u,b:u*(h?.98:1.1),h:c?0:1}});{let r=ve(111,16,3);j.carpet=ke("carpet",e,(o,a,l,c)=>{let h=r(o,a)*.4+rn(l,c)*.6,u=.75+h*.25;return{r:u,g:u,b:u,h}},{normalStrength:1.5})}{let r=ve(121,4,5),o=ve(122,32,2);j.metal=ke("metal",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l*.05),f=.82+d*.12-Pi(u-.6)*.8;return{r:f,g:f,b:f,h:d*.3+u*.2}},{normalStrength:1})}{let r=ve(131,4,6);j.rust=ke("rust",e,(o,a)=>{let l=r(o,a),c=Ve(ae(5921370),ae(9062946),Pi(l*1.6-.5));return{r:c[0],g:c[1],b:c[2],h:l}},{normalStrength:2})}{let r=ve(141,4,5);j.bark=ke("bark",e,(o,a,l,c)=>{let h=r(o*2,a*.4),u=Math.abs(Math.sin(o*40+h*8)),d=Ve(ae(3023384),ae(6968384),u*.7+h*.3);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:4})}{let r=ve(151,8,4);j.leaf=ke("leaf",e,(o,a,l,c)=>{let h=r(o,a),u=rn(l>>2,c>>2),d=Ve(ae(2775582),ae(6986298),h*.8+u*.4);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:3})}{let r=ve(155,8,5);j.hedge=ke("hedge",e,(o,a,l,c)=>{let h=r(o,a),u=rn(l>>1,c>>1),d=Ve(ae(1981974),ae(5933618),h*.9+u*.3-.1);return{r:d[0],g:d[1],b:d[2],h:h*.5+u*.5}},{normalStrength:5})}{let r=ve(201,4,5),o=ve(202,16,3);j.carrot=ke("carrot",t,(a,l,c,h)=>{let u=Math.pow(Math.abs(Math.sin(l*Math.PI*22+r(a,l)*9)),10)*(.4+r(a*3,l)*.8),d=o(a,l),f=rn(Math.floor(a*24),Math.floor(l*40))>.93&&qn(l*40)<.35?1:0,p=Ve(ae(15759898),ae(14177804),d*.8+u*.35),g=Math.pow(Math.abs(Math.sin(a*Math.PI*9+r(a,l*.3)*4)),30)*.15,m=Ve(p,ae(9062928),u*.35+f*.5+g);return{r:m[0],g:m[1],b:m[2],h:.7-u*.5-f*.4+d*.1}},{normalStrength:4})}{let r=ve(211,4,5),o=ve(212,32,2);j.tomato=ke("tomato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Math.pow(Math.abs(Math.sin(a*Math.PI*6)),8)*.1,p=Ve(ae(14164762),ae(11014670),u*.7+f),g=Pi(1-l*6),m=Ve(p,ae(12099616),g*.25),x=d>.72?.08:0;return{r:m[0]+x,g:m[1]+x*.6,b:m[2],h:u*.3+d*.2}},{normalStrength:1.2})}{let r=ve(221,4,6),o=ve(222,16,3);j.potato=ke("potato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=rn(c,h),p=Ve(ae(13148266),ae(10122308),u*1.1-.1+f*.1);p=Ve(p,ae(6965802),Pi((d-.6)*3)*.6);let g=qn(a*5),m=qn(l*4),x=rn(Math.floor(a*5),Math.floor(l*4)),M=Math.hypot(g-.3-x*.4,m-.5),w=x>.55&&M<.06?1-M/.06:0;return p=Ve(p,ae(4861976),w*.8),{r:p[0],g:p[1],b:p[2],h:u*.5+d*.3-w*.6+f*.1}},{normalStrength:4})}{let r=ve(231,4,5);j.pepper=ke("pepper",t,(o,a,l,c)=>{let h=r(o,a),u=Math.pow(Math.abs(Math.cos(o*Math.PI*4)),10),d=Ve(ae(2787870),ae(1268240),h*.7+u*.4);return{r:d[0],g:d[1],b:d[2],h:h*.2-u*.3}},{normalStrength:1.5})}{let r=ve(241,8,4);j.veggreen=ke("veggreen",e,(o,a,l,c)=>{let h=r(o,a),u=Math.abs(qn(o*6)-.5)<.04?.15:0,d=Ve(ae(3836452),ae(1989140),h);return{r:d[0]+u,g:d[1]+u,b:d[2]+u*.5,h:h-u}},{normalStrength:2})}{let r=ve(251,8,5),o=ve(252,32,2);j.skin=ke("skin",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Ve(ae(15775888),ae(13140058),u*.55+d*.25);return{r:f[0],g:f[1],b:f[2],h:d*.4+u*.2}},{normalStrength:1.2})}let i=(r,o,a,l)=>{j[r]=ke(r,e,(c,h,u,d)=>{let f=c-.5,p=h-.5,g=Math.hypot(f,p)*2,m=Math.atan2(p,f),x=Ve(ae(o),ae(a),Pi(g)),M=.5;if(l==="carrot"&&(g<.45&&(x=Ve(x,ae(16298048),.6)),M=Math.abs(Math.sin(m*10))*.2),l==="tomato"){let w=Math.cos(m*3)*.5+.5;g>.35&&g<.78&&w>.4&&(x=Ve(ae(15228992),ae(15777888),.3),rn(Math.floor(c*40),Math.floor(h*40))>.8&&(x=ae(16310432),M=1))}return l==="pepper"&&g<.3&&rn(Math.floor(c*50),Math.floor(h*50))>.7&&(x=ae(15788208),M=1),g>.95&&(x=Ve(x,ae(0),.2)),{r:x[0],g:x[1],b:x[2],h:M}},{normalStrength:2})};i("fleshCarrot",16292400,15233050,"carrot"),i("fleshTomato",15751738,13115418,"tomato"),i("fleshPotato",16048808,15257744,"potato"),i("fleshPepper",14217392,4890672,"pepper");{let r=ve(301,32,3);j.polymer=ke("polymer",e,(o,a,l,c)=>{let h=rn(l,c)*.5+r(o,a)*.5,u=.85+h*.15;return{r:u,g:u,b:u,h}},{normalStrength:2.5})}{let r=ve(311,4,4);j.gunmetal=ke("gunmetal",e,(o,a,l,c)=>{let h=rn(Math.floor(l/1),Math.floor(c/24))*.1,u=Math.abs(Math.sin(o*30+a*90+r(o,a)*20))>.995?.25:0,d=Pi(r(o,a)-.65)*1.5,f=.85+h+u+d;return{r:f,g:f,b:f,h:h+u}},{normalStrength:1.2})}let s=(r,o,a,l)=>{let c=ve(r.length*13+500,4,4),h=ve(r.length*17+600,4,4);j[r]=ke(r,e,(u,d,f,p)=>{let g=u,m=d;l&&(g=Math.floor(u*48)/48,m=Math.floor(d*48)/48);let x=c(g*a,m*a),M=h(g*a+.3,m*a),w=x>.56?1:M>.58?2:x<.4?3:0,v=ae(o[w]),R=rn(f,p)*.05;return{r:v[0]+R,g:v[1]+R,b:v[2]+R,h:w*.1+R}},{normalStrength:1})};return s("camoWood",[5925434,3818532,9075280,2237978],1,!1),s("camoDesert",[13152384,10521178,14733480,8021056],1,!1),s("camoCarrot",[15759898,13129228,3836452,16752704],1,!0),s("camoUrban",[9080466,5922402,13159632,2764338],1,!0),j}function Ii(n,t={}){let e=t.w||256,i=t.h||256,s=document.createElement("canvas");s.width=e,s.height=i;let r=s.getContext("2d");t.bg&&(r.fillStyle=t.bg,r.fillRect(0,0,e,i)),t.draw&&t.draw(r,e,i),r.fillStyle=t.color||"#fff",r.font=`${t.weight||900} ${t.size||180}px ${t.font||"system-ui, sans-serif"}`,r.textAlign="center",r.textBaseline="middle",t.stroke&&(r.lineWidth=t.strokeW||10,r.strokeStyle=t.stroke,r.strokeText(n,e/2,i/2+(t.dy||0))),r.fillText(n,e/2,i/2+(t.dy||0));let o=new Ti(s);return o.colorSpace=an,o.anisotropy=ah,o}function lh(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ze;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Lp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][d]);let p=Lp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Lp(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new fn(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let g=h.getComponent(d,p);a.setComponent(d+u,p,g)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function et(n,t,e,i=1,s=[0,0,0]){let r=new de(n,t,e),o=r.attributes.uv,a=[[e,t,s[2],s[1]],[e,t,-s[2],s[1]],[n,e,s[0],-s[2]],[n,e,s[0],s[2]],[n,t,s[0],s[1]],[n,t,-s[0],s[1]]];for(let l=0;l<6;l++){let[c,h,u,d]=a[l];for(let f=0;f<4;f++){let p=l*4+f;o.setXY(p,(o.getX(p)*c+u)/i,(o.getY(p)*h+d)/i)}}return r}function ri(n,t,e){let i=n.attributes.uv;for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*t,i.getY(s)*e);return n}var ch=class{constructor(){this.buckets=new Map,this.colliders=[],this.noShadow=new Set}addGeo(t,e,i){let s=e.index?e.toNonIndexed():e.clone();i&&s.applyMatrix4(i);for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);s.attributes.uv||s.setAttribute("uv",new fn(new Float32Array(s.attributes.position.count*2),2)),this.buckets.has(t)||this.buckets.set(t,[]),this.buckets.get(t).push(s)}box(t,e,i,s,r,o,a,l={}){let c=et(r,o,a,l.uv||1,l.worldUV===!1?[0,0,0]:[e-r/2,i-o/2,s-a/2]),h=new Jt;(l.rotY||l.rotX||l.rotZ)&&h.makeRotationFromEuler(new hi(l.rotX||0,l.rotY||0,l.rotZ||0)),h.setPosition(e,i,s),this.addGeo(t,c,h),l.collide!==!1&&this.col(e-r/2,i-o/2,s-a/2,e+r/2,i+o/2,s+a/2,l)}col(t,e,i,s,r,o,a={}){this.colliders.push({min:new U(Math.min(t,s),Math.min(e,r),Math.min(i,o)),max:new U(Math.max(t,s),Math.max(e,r),Math.max(i,o)),bullet:a.bullet!==!1,move:a.move!==!1,surf:a.surf||"concrete"})}bake(t){t.updateMatrixWorld(!0),t.traverse(e=>{e.isMesh&&this.addGeo(e.material,e.geometry,e.matrixWorld)})}finish(t){let e=[];for(let[i,s]of this.buckets){let r=lh(s,!1);r.computeBoundingSphere();let o=new D(r,i);o.castShadow=!i.userData.noCast,o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o),e.push(o)}return e}},kS=new U;function Dp(n,t,e,i){let s=0,r=i,o=-1,a=0;for(let l=0;l<3;l++){let c=l===0?n.x:l===1?n.y:n.z,h=l===0?t.x:l===1?t.y:t.z,u=l===0?e.min.x:l===1?e.min.y:e.min.z,d=l===0?e.max.x:l===1?e.max.y:e.max.z;if(Math.abs(h)<1e-9){if(c<u||c>d)return null;continue}let f=(u-c)/h,p=(d-c)/h,g=-1;if(f>p){let m=f;f=p,p=m,g=1}if(f>s&&(s=f,o=l,a=g),p<r&&(r=p),s>r)return null}return{t:s,axis:o,sign:a}}function je(n,t=[],e={}){let i=new Set(t.filter(Boolean));n.updateMatrixWorld(!0);let s=new Jt().copy(n.matrixWorld).invert(),r=new Map,o=[],a=l=>{for(let c of l.children)i.has(c)||(c.isMesh&&!c.isInstancedMesh&&o.push(c),a(c))};if(a(n),!(o.length<2)){for(let l of o){let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let h of Object.keys(c.attributes))["position","normal","uv"].includes(h)||c.deleteAttribute(h);c.attributes.uv||c.setAttribute("uv",new fn(new Float32Array(c.attributes.position.count*2),2)),c.applyMatrix4(new Jt().multiplyMatrices(s,l.matrixWorld)),r.has(l.material)||r.set(l.material,[]),r.get(l.material).push(c)}for(let l of o)for(let c of[...l.children])o.includes(c)||l.parent.attach(c);for(let l of o)l.parent&&l.parent.remove(l);for(let[l,c]of r){let h=new D(lh(c,!1),l);h.castShadow=e.shadow!==!1,h.receiveShadow=!0,n.add(h)}}}var gs={town:{id:"town",name:"\u30D9\u30B8\u30BF\u30A6\u30F3",desc:`\u901A\u308A\u3092\u631F\u3093\u30602\u8ED2\u306E\u5BB6\u3002
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
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u8239\u9996\u306E\u8CA8\u7269(A)\u3068\u30B8\u30E3\u30B0\u30B8\u30FC(B)\u3002`,map:{minX:-8.6,maxX:8.6,minZ:-21,maxZ:20.6},sites:{A:[-5.2,-11.6],B:[4.6,-11.8]},spawns:{south:[[-2,18.6],[2,18.6]],north:[[-1.5,-18.6],[1.5,-18.6]]},holds:{A:{def:[[-3.4,-14],[-7.6,-12.4],[-6,-7.4],[-1.8,-10]],att:[[-7,-6.8],[-3.6,-7.2]]},B:{def:[[5.8,-15.4],[7.6,-11.8],[2.6,-12.6],[6.2,-7.2]],att:[[7,-6.8],[3.6,-7.2]]}},mm:[[-5,-6,5,7,"#e8e8e4"],[-2.75,13,2.75,17,"#3ab0e0"],[-8.75,-3.7,-7.25,.7,"#e8701a"],[7.25,.3,8.75,4.7,"#e8701a"],[5.65,-10.75,8.35,-8.05,"#5ad0e0"],[-8.2,-10.9,-7,-8.6,"#8a6a4a"]],lobby:[0,11],ground:"concrete"}},oe={},We={A:new U,B:new U},Ia={south:[],north:[]},on=gs.town;function Vp(n){on=gs[n]||gs.town,Object.assign(oe,on.map);for(let t of["A","B"])We[t].set(on.sites[t][0],0,on.sites[t][1]);for(let t of["south","north"])Ia[t]=on.spawns[t].map(([e,i])=>new U(e,0,i));return on}Vp("town");var le=n=>new ie(n),y={};function jM(){let n=(i,s)=>{let r=i.map.clone(),o=i.normalMap.clone();return r.needsUpdate=o.needsUpdate=!0,s&&(r.repeat.set(s,s),o.repeat.set(s,s)),[r,o]},[t,e]=[j.grass.map,j.grass.normalMap];y.grass=le({map:j.grass.map,normalMap:j.grass.normalMap,roughness:.95,color:15269856}),y.asphalt=le({map:j.asphalt.map,normalMap:j.asphalt.normalMap,roughness:.9}),y.concrete=le({map:j.concrete.map,normalMap:j.concrete.normalMap,roughness:.85}),y.brick=le({map:j.brick.map,normalMap:j.brick.normalMap,roughness:.85}),y.sidingY=le({map:j.siding.map,normalMap:j.siding.normalMap,color:15785114,roughness:.75}),y.sidingB=le({map:j.siding.map,normalMap:j.siding.normalMap,color:10274012,roughness:.75}),y.sidingG=le({map:j.siding.map,normalMap:j.siding.normalMap,color:12109984,roughness:.75}),y.plaster=le({map:j.plaster.map,normalMap:j.plaster.normalMap,color:15920352,roughness:.95}),y.plasterG=le({map:j.plaster.map,normalMap:j.plaster.normalMap,color:14214352,roughness:.95}),y.floor=le({map:j.floor.map,normalMap:j.floor.normalMap,roughness:.55}),y.roof=le({map:j.roof.map,normalMap:j.roof.normalMap,roughness:.85,color:11561562}),y.roof2=le({map:j.roof.map,normalMap:j.roof.normalMap,roughness:.85,color:7371400}),y.wood=le({map:j.wood.map,normalMap:j.wood.normalMap,roughness:.8}),y.paintwood=le({map:j.paintwood.map,normalMap:j.paintwood.normalMap,roughness:.7}),y.dirt=le({map:j.dirt.map,normalMap:j.dirt.normalMap,roughness:1}),y.tile=le({map:j.tile.map,normalMap:j.tile.normalMap,roughness:.3}),y.carpetR=le({map:j.carpet.map,normalMap:j.carpet.normalMap,color:10502208,roughness:1}),y.carpetB=le({map:j.carpet.map,normalMap:j.carpet.normalMap,color:4217482,roughness:1}),y.trim=le({color:16052970,roughness:.5,map:j.plaster.map}),y.darkTrim=le({color:3815994,roughness:.6}),y.metal=le({map:j.metal.map,normalMap:j.metal.normalMap,color:10133670,metalness:.7,roughness:.4}),y.rust=le({map:j.rust.map,normalMap:j.rust.normalMap,metalness:.4,roughness:.8}),y.chrome=le({color:14540253,metalness:1,roughness:.15}),y.glass=le({color:1714740,metalness:.9,roughness:.05,transparent:!0,opacity:.55}),y.glass.userData.noCast=!0,y.tire=le({color:1710618,roughness:.9}),y.busYellow=le({map:j.metal.map,normalMap:j.metal.normalMap,color:15905306,metalness:.3,roughness:.45}),y.carRed=le({map:j.metal.map,color:11017762,metalness:.5,roughness:.3}),y.carBlue=le({map:j.metal.map,color:2775712,metalness:.5,roughness:.3}),y.carWhite=le({map:j.metal.map,color:15263972,metalness:.4,roughness:.35}),y.black=le({color:1381653,roughness:.7}),y.bark=le({map:j.bark.map,normalMap:j.bark.normalMap,roughness:1}),y.leaf=le({map:j.leaf.map,normalMap:j.leaf.normalMap,roughness:.9,color:14221264}),y.hedge=le({map:j.hedge.map,normalMap:j.hedge.normalMap,roughness:1}),y.fabricG=le({map:j.carpet.map,normalMap:j.carpet.normalMap,color:5929562,roughness:1}),y.fabricO=le({map:j.carpet.map,normalMap:j.carpet.normalMap,color:12615744,roughness:1}),y.white=le({color:15790320,roughness:.4}),y.steel=le({color:12106944,metalness:.9,roughness:.3}),y.lampGlow=new ui({color:16773824}),y.screen=le({color:657936,metalness:.5,roughness:.1}),y.hay=le({map:j.grass.map,normalMap:j.grass.normalMap,color:15782016,roughness:1}),y.redPaint=le({color:11542560,roughness:.5,map:j.metal.map}),y.greenPaint=le({color:2779706,roughness:.6,map:j.metal.map}),y.curtain=le({map:j.carpet.map,normalMap:j.carpet.normalMap,color:15260864,roughness:.9,side:cn}),y.lineW=le({color:15790312,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),y.lineY=le({color:15777824,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),y.paint1=le({map:Ii("",{w:128,h:128,draw:i=>{let s=i.createLinearGradient(0,0,0,128);s.addColorStop(0,"#6ab0e0"),s.addColorStop(1,"#f0e0a0"),i.fillStyle=s,i.fillRect(0,0,128,128),i.fillStyle="#3a7a3a",i.beginPath(),i.moveTo(0,100),i.quadraticCurveTo(64,50,128,95),i.lineTo(128,128),i.lineTo(0,128),i.fill(),i.fillStyle="#f8f0a0",i.beginPath(),i.arc(95,35,14,0,7),i.fill()}}),roughness:.6}),y.paint2=le({map:Ii("",{w:128,h:128,draw:i=>{i.fillStyle="#2a2a3a",i.fillRect(0,0,128,128),i.fillStyle="#e86020",i.beginPath(),i.ellipse(64,70,20,44,0,0,7),i.fill(),i.fillStyle="#3a8a2a",i.fillRect(56,14,16,18)}}),roughness:.6})}var b;function Mn(n,t,e,i,s,r,o,a,l=[],c=.22){let h=Ud(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[g,m]of p){if(m-g<.01)continue;let x=(g+m)/2,M=m-g;b.box(o,f,x,n+r*c/4,d,M,c/2,{uv:2.5,collide:!1}),b.box(a,f,x,n-r*c/4,d,M,c/2,{uv:2.5,collide:!1}),b.col(u.a,g,n-c/2,u.b,m,n+c/2,{surf:"wood"})}u.op&&QM(n,u.a,u.b,u.op,r,c)}}function Pn(n,t,e,i,s,r,o,a,l=[],c=.22){let h=Ud(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[g,m]of p){if(m-g<.01)continue;let x=(g+m)/2,M=m-g;b.box(o,n+r*c/4,x,f,c/2,M,d,{uv:2.5,collide:!1}),b.box(a,n-r*c/4,x,f,c/2,M,d,{uv:2.5,collide:!1}),b.col(n-c/2,g,u.a,n+c/2,m,u.b,{surf:"wood"})}u.op&&tv(n,u.a,u.b,u.op,r,c)}}function Ud(n,t,e){let i=[],s=n,r=[...e].sort((o,a)=>o.c-a.c);for(let o of r){let a=o.c-o.w/2,l=o.c+o.w/2;a>s&&i.push({a:s,b:a}),i.push({a,b:l,op:o}),s=l}return t>s&&i.push({a:s,b:t}),i}function QM(n,t,e,i,s,r){let a=r+.06;if(b.box(y.trim,t-.09/2+0,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),b.box(y.trim,e+.09/2,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),b.box(y.trim,(t+e)/2,i.t+.09/2,n,e-t+.09*2,.09,a,{collide:!1}),i.b>.3&&b.box(y.trim,(t+e)/2,i.b-.03,n+s*.06,e-t+.2,.06,a+.1,{collide:!1}),i.win&&(b.box(y.trim,(t+e)/2,(i.b+i.t)/2,n+s*.02,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])Wp(l<0?t-.05:e+.05,i.t+.05,n-s*(r/2+.06),l,!0)}function tv(n,t,e,i,s,r){let a=r+.06;if(b.box(y.trim,n,(i.b+i.t)/2,t-.09/2,a,i.t-i.b,.09,{collide:!1}),b.box(y.trim,n,(i.b+i.t)/2,e+.09/2,a,i.t-i.b,.09,{collide:!1}),b.box(y.trim,n,i.t+.09/2,(t+e)/2,a,.09,e-t+.09*2,{collide:!1}),i.b>.3&&b.box(y.trim,n+s*.06,i.b-.03,(t+e)/2,a+.1,.06,e-t+.2,{collide:!1}),i.win&&(b.box(y.trim,n+s*.02,(i.b+i.t)/2,(t+e)/2,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])Wp(n-s*(r/2+.06),i.t+.05,l<0?t-.05:e+.05,l,!1)}var ho;function Wp(n,t,e,i,s){if(!y.curtain)return;if(!ho){ho=new Fe(.5,1.6,12,1);let o=ho.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a);o.setZ(a,Math.sin(l*40)*.035)}ho.computeVertexNormals(),ho.translate(0,-.8,0)}let r=new Jt().makeRotationY(s?0:Math.PI/2);r.setPosition(s?n+i*.2:n,t,s?e:e+i*.2),b.addGeo(y.curtain,ho,r),b.box(y.darkTrim,n,t+.02,e,s?.6:.03,.03,s?.03:.6,{collide:!1})}function ev(n,t,e,i,s,r,o,a){let c=(i-e)/2+.45,h=(e+i)/2,u=Math.atan2(r,(i-e)/2),d=Math.hypot(c,r*c/((i-e)/2));for(let f of[-1,1]){let p=et(t-n+.9,.14,d,2),g=new Jt().makeRotationX(f*u);g.setPosition((n+t)/2,s+r/2+.05-.45*Math.tan(u)/2+.02,h+f*(d/2)*Math.cos(u)),b.addGeo(o,p,g);let m=new mt(.07,.07,t-n+.45*2,8);m.rotateZ(Math.PI/2),b.addGeo(y.trim,m,new Jt().setPosition((n+t)/2,s-.45*Math.tan(u)+.02,h+f*c))}b.box(o,(n+t)/2,s+r+.1,h,t-n+.45*2,.12,.3,{collide:!1});for(let f of[n,t]){let p=new Xn;p.moveTo(e-h,0),p.lineTo(i-h,0),p.lineTo(0,r),p.closePath();let g=new Jn(p,{depth:.22,bevelEnabled:!1});ri(g,.4,.4);let m=new Jt().makeRotationY(Math.PI/2);m.setPosition(f-.11+0,s,h),b.addGeo(a,g,m)}b.box(y.plaster,(n+t)/2,s+.06,h,t-n,.12,i-e,{uv:3,bullet:!0})}function xh(n,t,e,i){let s=new It,r=(a,l,c,h,u)=>{let d=new D(a,l);return d.position.set(c,h,u),s.add(d),d};r(et(2.1,.42,.9,1),i,0,.25,0),r(et(2.1,.6,.22,1),i,0,.7,-.36),r(et(.22,.32,.9,1),i,-1,.6,0),r(et(.22,.32,.9,1),i,1,.6,0);for(let a of[-.48,.48]){let l=r(new zi(.12,.7,4,10),i,a,.52,.08);l.rotation.z=Math.PI/2,l.scale.set(1,1,2.6)}for(let a of[-.5,.5]){let l=r(new de(.35,.3,.12),y.fabricO,a,.72,-.2);l.rotation.x=-.25}for(let[a,l]of[[-.95,.38],[.95,.38],[-.95,-.38],[.95,-.38]])r(new mt(.03,.02,.08,6),y.wood,a,.03,l);s.position.set(n,.15,t),s.rotation.y=e,b.bake(s);let o=Math.abs(Math.cos(e))>.5?[1.1,.48]:[.48,1.1];b.col(n-o[0],.15,t-o[1],n+o[0],1,t+o[1],{surf:"carpet"})}function ms(n,t,e,i,s,r=y.wood){b.box(r,n,.15+s-.03,t,e,.06,i,{collide:!1});for(let o of[-1,1])for(let a of[-1,1])b.box(y.wood,n+o*(e/2-.08),.15+(s-.06)/2,t+a*(i/2-.08),.07,s-.06,.07,{collide:!1});b.col(n-e/2,.15,t-i/2,n+e/2,.15+s,t+i/2,{bullet:!1})}function mi(n,t,e){let i=new It,s=(r,o,a,l,c)=>{let h=new D(r,o);return h.position.set(a,l,c),i.add(h),h};s(et(.45,.05,.45,1),y.wood,0,.46,0);for(let r of[-1,1])for(let o of[-1,1])s(et(.04,.46,.04,1),y.wood,r*.19,.23,o*.19);for(let r of[-1,1])s(et(.04,.5,.04,1),y.wood,r*.19,.73,-.2);for(let r=0;r<3;r++)s(et(.4,.05,.03,1),y.wood,0,.62+r*.13,-.2);i.position.set(n,.15,t),i.rotation.y=e,b.bake(i)}function xr(n,t,e,i=1.2,s=1.9){let r=new It,o=(l,c,h,u,d)=>{let f=new D(l,c);return f.position.set(h,u,d),r.add(f),f};o(et(i,s,.04,1),y.wood,0,s/2,-.17);for(let l of[-1,1])o(et(.04,s,.36,1),y.wood,l*i/2,s/2,0);for(let l=0;l<5;l++){let c=.05+l*(s-.1)/4;if(o(et(i,.04,.36,1),y.wood,0,c,0),l<4){let h=-i/2+.08;for(;h<i/2-.12;){let u=.04+Pt()*.05,d=.22+Pt()*.14,f=[9054762,2771578,3828282,13148240,5913194,14209216][Math.floor(Pt()*6)],p=new ie({color:f,roughness:.8}),g=o(et(u,d,.24,1),kt(f),h+u/2,c+.02+d/2,.02);Pt()<.15&&(g.rotation.z=.2),h+=u+.005}}}r.position.set(n,.15,t),r.rotation.y=e,b.bake(r);let a=Math.abs(Math.cos(e))>.5?[i/2,.2]:[.2,i/2];b.col(n-a[0],.15,t-a[1],n+a[0],.15+s,t+a[1])}var Ed={};function kt(n,t={}){let e=n+JSON.stringify(t);return Ed[e]||(Ed[e]=le({color:n,roughness:.75,...t})),Ed[e]}var hh={};function nv(n){if(hh[n])return hh[n];let t=512,e=768,i=document.createElement("canvas");i.width=t,i.height=e;let s=i.getContext("2d"),r={office:["#6f8fa8","#2a3e52","#c8d6e0"],brick:["#9a5a44","#26303a","#e8e2d6"],concrete:["#b8b4ac","#2e353c","#8a8680"],apt:["#e4dccb","#3a4650","#ffffff"]}[n];s.fillStyle=r[0],s.fillRect(0,0,t,e);for(let c=0;c<400;c++)s.fillStyle=`rgba(${Pt()<.5?"0,0,0":"255,255,255"},${.03+Pt()*.04})`,s.fillRect(Pt()*t,Pt()*e,4+Pt()*40,4+Pt()*40);if(n==="brick")for(let c=0;c<e;c+=8){s.fillStyle="rgba(230,220,200,0.35)",s.fillRect(0,c,t,1.5);for(let h=c/8%2*9;h<t;h+=18)s.fillRect(h,c,1.5,8)}let o=t/4,a=e/4;for(let c=0;c<4;c++)for(let h=0;h<4;h++){let u=h*o,d=c*a,f=Pt()<.18;if(n==="office")s.fillStyle=f?"#e8d8a0":`rgb(${40+Pt()*25},${60+Pt()*25},${80+Pt()*30})`,s.fillRect(u+4,d+20,o-8,a-26),s.fillStyle="rgba(255,255,255,0.12)",s.beginPath(),s.moveTo(u+4,d+a-6),s.lineTo(u+o*.6,d+20),s.lineTo(u+o*.8,d+20),s.lineTo(u+o*.2,d+a-6),s.fill(),s.fillStyle=r[2],s.fillRect(u+o/2-2,d+20,4,a-26),s.fillRect(u,d+14,o,8);else{let p=n==="concrete"?o-18:o*.55,g=a*(n==="concrete"?.42:.55),m=u+(o-p)/2,x=d+a*.22;s.fillStyle=r[2],s.fillRect(m-5,x-5,p+10,g+10),s.fillStyle=f?"#f0dca0":r[1],s.fillRect(m,x,p,g),s.fillStyle="rgba(255,255,255,0.15)",s.fillRect(m,x,p*.35,g),s.fillStyle=r[2],s.fillRect(m+p/2-2,x,4,g),Pt()<.5&&(s.fillStyle=`rgba(${200+Pt()*55},${200+Pt()*55},180,0.85)`,s.fillRect(m,x,p*(.2+Pt()*.3),g)),n==="apt"&&(s.fillStyle="#cfc6b4",s.fillRect(u+6,d+a*.8,o-12,a*.18),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(u+6,d+a*.8,o-12,3)),n==="concrete"&&(s.fillStyle="rgba(0,0,0,0.18)",s.fillRect(u,d+a*.75,o,6)),Pt()<.15&&(s.fillStyle="#d8d8d4",s.fillRect(u+o*.78,x+g*.4,o*.16,g*.4))}}let l=new Ti(i);return l.colorSpace=an,l.wrapS=l.wrapT=ls,l.anisotropy=4,hh[n]=le({map:l,roughness:n==="office"?.35:.85,metalness:n==="office"?.25:0}),hh[n]}function iv(n,t,e){let i=new de(n,t,e),s=i.attributes.uv,r=[e,e,n,n,n,n];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let l=o*4+a;s.setXY(l,s.getX(l)*r[o]/8,s.getY(l)*t/12+(12-t%12)/12)}return i}function La(n,t,e,i,s,r,o,a){let l=new It;l.position.set(t,0,e),l.rotation.y=i;let c=new D(iv(s,r,o),nv(a));c.position.y=r/2,l.add(c);let h=new D(et(s+.3,.5,o+.3,2),y.concrete);h.position.y=r+.1,l.add(h);let u=new D(et(s-.3,.1,o-.3,2),kt(6974054));u.position.y=r+.3,l.add(u);let d=new D(et(2.6,2.2,2.6,2),y.concrete);if(d.position.set(-s*.2,r+1.4,o*.1),l.add(d),Pt()<.7){let f=new D(new mt(.9,.9,1.6,12),kt(10134696,{metalness:.4,roughness:.5}));f.position.set(s*.22,r+1.9,-o*.15),l.add(f);for(let p of[-.6,.6])for(let g of[-.6,.6]){let m=new D(et(.12,1,.12),kt(5592405));m.position.set(s*.22+p,r+.7,-o*.15+g),l.add(m)}}for(let f=0;f<3;f++){let p=new D(et(1,.8,.7,1),kt(13684940));p.position.set((Pt()-.5)*s*.7,r+.75,(Pt()-.5)*o*.6),l.add(p)}if(Pt()<.5){let f=new D(new mt(.04,.06,4,6),y.metal);f.position.set(-s*.2,r+4.5,o*.1),l.add(f)}if(r>9){let f=new D(et(s+.05,.6,o+.05,2),kt([2775610,9054762,2767466][Math.floor(Pt()*3)]));f.position.y=3.2,l.add(f)}n.add(l)}function Rd(n,t,e,i){let o=e-i*.445;b.box(kt(15261904),(n+t)/2,.15+.92/2-.02,o,t-n,.92-.04,.65-.02,{surf:"wood"}),b.box(y.tile,(n+t)/2,.15+.92,o,t-n+.04,.04,.65+.04,{collide:!1,uv:.6});for(let h=n+.5;h<t;h+=.6)b.box(y.darkTrim,h,.15+.45,o-i*(.65/2),.02,.7,.01,{collide:!1});for(let h=n+.25;h<t;h+=.6)b.box(y.steel,h,.15+.72,o-i*(.65/2+.02),.12,.02,.03,{collide:!1});b.box(y.steel,n+1,.15+.92+.01,o,.6,.03,.42,{collide:!1});let a=new D(new $e(.12,.02,6,12,Math.PI),y.chrome);a.position.set(n+1,.15+.92+.03,o+i*.2),a.rotation.y=Math.PI/2,b.bake(a);let l=t+.45;b.box(y.white,l,.15+.95,o,.8,1.9,.72,{}),b.box(y.steel,l-.3,.15+1.3,o-i*.37,.03,.5,.04,{collide:!1}),b.box(y.darkTrim,l,.15+1.25,o-i*.365,.8,.012,.01,{collide:!1}),b.box(kt(15261904),(n+t)/2,.15+2.1,e-i*.3,t-n,.7,.36,{collide:!1});for(let[h,u]of[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]]){let d=new D(new $e(.08,.012,6,16),y.black);d.rotation.x=Math.PI/2,d.position.set(t-.6+h,.15+.92+.03,o+u),b.bake(d)}let c=new D(new mt(.13,.12,.16,16,1,!1),y.steel);c.position.set(t-.75,.15+.92+.1,o-.12),b.bake(c)}function Cd(n,t,e){let i=new It,s=(o,a,l,c,h)=>{let u=new D(o,a);return u.position.set(l,c,h),i.add(u),u};s(et(1.6,.5,.45,1),y.wood,0,.25,0),s(et(1.3,.75,.06,1),y.black,0,.95,0),s(new Fe(1.24,.69),y.screen,0,.95,.031),s(et(.3,.06,.2,1),y.black,0,.53,0),i.position.set(n,.15,t),i.rotation.y=e,b.bake(i);let r=Math.abs(Math.cos(e))>.5?[.8,.25]:[.25,.8];b.col(n-r[0],.15,t-r[1],n+r[0],.65,t+r[1])}function uo(n,t,e,i,s){let r=new It,o=new D(et(.9,.7,.05,1),y.wood);r.add(o);let a=new D(new Fe(.78,.58),s);a.position.z=.03,r.add(a),r.position.set(n,t,e),r.rotation.y=i,b.bake(r)}function yh(n,t,e,i,s){b.box(s,n,.155,t,e,.012,i,{collide:!1,uv:1})}function _h(n,t){let e=new It,i=new D(new mt(.15,.18,.04,16),y.black);i.position.y=.02,e.add(i);let s=new D(new mt(.015,.015,1.5,6),y.chrome);s.position.y=.77,e.add(s);let r=new D(new mt(.16,.24,.3,16,1,!0),kt(15786176,{side:cn,emissive:4206624}));r.position.y=1.55,e.add(r),e.position.set(n,.15,t),b.bake(e)}function Pd(n,t,e){let i=new It,s=(o,a,l,c,h)=>{let u=new D(o,a);return u.position.set(l,c,h),i.add(u),u};s(et(1.5,.3,2,1),y.wood,0,.2,0),s(et(1.45,.22,1.95,1),y.white,0,.45,0),s(et(1.5,.08,1.4,1),y.carpetB,0,.58,.28),s(et(1.5,.9,.08,1),y.wood,0,.55,-1);for(let o of[-.35,.35]){let a=s(new zi(.1,.3,4,8),y.white,o,.62,-.75);a.rotation.z=Math.PI/2,a.scale.set(1,1,1.8)}i.position.set(n,.15,t),i.rotation.y=e,b.bake(i);let r=Math.abs(Math.cos(e))>.5?[.75,1.05]:[1.05,.75];b.col(n-r[0],.15,t-r[1],n+r[0],.8,t+r[1],{bullet:!0})}function Np(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.18,o=2.9,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;b.box(y.concrete,(t+e)/2,.08,(i+s)/2,e-t+.3,.16,s-i+.3,{collide:!1}),b.box(y.floor,(t+e)/2,r-.01,(i+s)/2,e-t-.1,.02,s-i-.1,{collide:!1,uv:3}),b.col(t,0,i,e,r,s,{bullet:!0,surf:"wood"});let h=(g,m=1.4)=>({c:g,w:m,b:r+.95,t:r+2.15,win:!0}),u=(g,m=1.4)=>({c:g,w:m,b:r,t:r+2.25}),d=n.siding,f=n.inner||y.plaster;Mn(a,t,e,r,o,c,d,f,n.frontOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),Mn(l,t,e,r,o,-c,d,f,n.backOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),Pn(t,i+.11,s-.11,r,o,-1,d,f,n.leftOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),Pn(e,i+.11,s-.11,r,o,1,d,f,n.rightOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),n.partX!==void 0&&Pn(n.partX,n.partZ0,n.partZ1,r,o,1,y.plasterG,f,[u(n.partDoor,1.4)],.14),ev(t,e,i,s,r+o,2,n.roof,d);let p=a+c*.9;b.box(y.concrete,n.doorX,.1,p,2.6,.2,1.6,{surf:"concrete"}),b.box(y.concrete,n.doorX,.05,p+c*1,1.8,.1,.5,{surf:"concrete"}),b.box(n.roof,n.doorX,r+2.55,p,3,.1,1.9,{collide:!1});for(let g of[-1,1]){let m=new D(new mt(.07,.08,2.45,10),y.trim);m.position.set(n.doorX+g*1.3,.2+1.22,p+c*.75),b.bake(m),b.col(n.doorX+g*1.3-.08,0,p+c*.75-.08,n.doorX+g*1.3+.08,2.7,p+c*.75+.08,{surf:"wood"})}for(let g of[-1,1]){let m=new D(new de(.14,.24,.14),y.lampGlow);m.position.set(n.doorX+g*.95,r+1.9,a+c*.15),b.bake(m)}b.box(y.brick,n.chimX,r+o+1.75,(i+s)/2+1.2,.8,2.9,.8,{collide:!1,uv:1.2}),b.box(y.concrete,n.chimX,r+o+3.25,(i+s)/2+1.2,.95,.12,.95,{collide:!1});for(let g of[i,s])b.box(y.brick,(t+e)/2,.45,g+(g===i?-.13:.13),e-t+.06,.55,.05,{collide:!1,uv:1.2});for(let g of[t,e])b.box(y.brick,g+(g===t?-.13:.13),.45,(i+s)/2,.05,.55,s-i+.06,{collide:!1,uv:1.2})}function Up(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.05,o=2.7,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;b.box(y.concrete,(t+e)/2,.025,(i+s)/2,e-t,.05,s-i,{collide:!1,uv:3}),Mn(a,t,e,r,o,c,n.siding,y.plaster,[{c:(t+e)/2,w:e-t-1,b:r,t:r+2.2}]),b.box(y.white,(t+e)/2,r+2.35,a-c*.05,e-t-1,.3,.06,{collide:!1}),Mn(l,t,e,r,o,-c,n.siding,y.plaster,[{c:(t+e)/2,w:1.2,b:r+1.1,t:r+2,win:!0}]);let h=n.outerX;Pn(h,i+.11,s-.11,r,o,h>(t+e)/2?1:-1,n.siding,y.plaster,[{c:(i+s)/2+1.5,w:1.3,b:r,t:r+2.2}]),b.box(n.roof,(t+e)/2,r+o+.1,(i+s)/2,e-t+.6,.2,s-i+.6,{collide:!1,uv:2}),b.box(y.plaster,(t+e)/2,r+o-.03,(i+s)/2,e-t,.06,s-i,{collide:!1,uv:3}),b.col(t,r+o-.05,i,e,r+o+.2,s);let u=l-c*-.5,d=l+(n.frontNeg?.5:-.5);b.box(y.wood,(t+e)/2,.9,d,2.4,.08,.7,{collide:!1});for(let p of[-1,1])b.box(y.wood,(t+e)/2+p*1.1,.45,d,.08,.86,.6,{collide:!1});b.col((t+e)/2-1.2,0,d-.35,(t+e)/2+1.2,.95,d+.35,{bullet:!1});for(let p=0;p<6;p++)b.box(kt([12595248,3170496,4210752][p%3]),(t+e)/2-.9+p*.35,.98,d,.18,.08,.12,{collide:!1});let f=kt(11569754,{map:j.wood.map});for(let[p,g,m]of[[.9,1.5,.6],[.9,2.2,.5],[.95,1.8,.45]]){let x=(n.frontNeg,t+p+.2),M=(i+s)/2+(n.frontNeg?-1:1)*(g-2);b.box(f,x,m/2+(g===1.8?.6:.05),M,m,m,m,{surf:"wood"})}}function Ra(n,t,e,i,s=.38,r=.26){let o=new D(new $e(s-.1,.11,10,20),y.tire);o.position.set(t,e,i),n.add(o);let a=new D(new mt(s-.13,s-.13,r*.8,16),y.chrome);a.rotation.x=Math.PI/2,a.position.set(t,e,i),n.add(a);let l=new D(new mt(.08,.08,r+.02,8),y.black);l.rotation.x=Math.PI/2,l.position.set(t,e,i),n.add(l)}function sv(n,t,e){let i=new It,s=(h,u,d,f,p)=>{let g=new D(h,u);return g.position.set(d,f,p),i.add(g),g},r=9.6,o=2.5,a=2.6;s(et(r,a-.6,o,1.5),y.busYellow,0,.6+(a-.6)/2,0),s(et(r-.1,.25,o-.1,1),y.busYellow,0,a+.12,0);for(let h of[-1,1]){s(et(r-2.2,.75,.02),y.glass,-.5,2,h*(o/2+.005));for(let u=0;u<9;u++)s(et(.08,.8,.04),y.busYellow,-4.1+u*.95,2,h*(o/2+.01));s(et(r,.06,.04),y.black,0,1.45,h*(o/2+.02)),s(et(r,.06,.04),y.black,0,1.15,h*(o/2+.02))}s(et(.04,1,o-.3),y.glass,r/2+.01,2,0),s(et(.04,.8,o-.3),y.glass,-r/2-.01,2,0),s(et(.25,.3,o+.1),y.black,r/2+.1,.65,0),s(et(.25,.3,o+.1),y.black,-r/2-.1,.65,0);for(let h of[-1,1])s(new mt(.12,.12,.05,12),y.lampGlow,r/2+.03,1,h*.9).rotation.z=Math.PI/2,s(new mt(.1,.1,.05,12),y.redPaint,-r/2-.03,1,h*.9).rotation.z=Math.PI/2;s(et(.6,.4,.04),y.black,r/2-.1,2.75,.8),s(et(1.6,.25,.03),y.black,1,1.3,o/2+.03);for(let h of[-3,3.2])for(let u of[-1,1])Ra(i,h,.48,u*(o/2-.12),.48,.3);s(et(r-.4,.3,o-.3),y.black,0,.45,0),i.position.set(n,0,t),i.rotation.y=e,b.bake(i);let l=Math.abs(Math.cos(e))>.5?r/2:o/2,c=Math.abs(Math.cos(e))>.5?o/2:r/2;b.col(n-l,.3,t-c,n+l,a+.25,t+c,{surf:"metal"}),b.col(n-l+.3,0,t-c+.3,n+l-.3,.3,t+c-.3,{surf:"metal",bullet:!1})}function Hn(n,t,e,i,s=!1){let r=new It,o=(F,B,N,G,q)=>{let V=new D(F,B);return V.position.set(N,G,q),r.add(V),V},a=s?5.2:4.5,l=1.9,c=s?1.9:2.4,h=s?.6:-.1,u=a/2,d=-a/2,f=a/2-.85,p=.47,g=new Xn;g.moveTo(d+.05,.36),g.lineTo(-f-p,.36),g.absarc(-f,.38,p,Math.PI,0,!0),g.lineTo(f-p,.36),g.absarc(f,.38,p,Math.PI,0,!0),g.lineTo(u-.05,.36),g.quadraticCurveTo(u+.04,.38,u,.62),g.quadraticCurveTo(u-.05,.9,u-.45,.98),g.lineTo(h+c/2+.45,1.06),g.lineTo(h-c/2-.35,1.06),s?g.lineTo(d+.1,1.06):(g.lineTo(d+.55,1.03),g.quadraticCurveTo(d+.05,1,d,.8)),g.quadraticCurveTo(d-.03,.4,d+.05,.36);let m=new Jn(g,{depth:l-.16,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:3,curveSegments:10});m.translate(0,0,-(l-.16)/2),ri(m,.5,.5),o(m,i,0,0,0);let x=new Xn;x.moveTo(h+c/2+.42,1.04),x.lineTo(h+c/2-.12,1.62),x.lineTo(h-c/2+.12,1.64),x.lineTo(h-c/2-(s?0:.32),1.04),x.closePath();let M=new Jn(x,{depth:l-.3,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});M.translate(0,0,-(l-.3)/2),o(M,y.glass,0,0,0);let w=new Xn;w.moveTo(h+c/2-.1,1.6),w.lineTo(h-c/2+.1,1.62),w.lineTo(h-c/2+.14,1.72),w.quadraticCurveTo(h,1.78,h+c/2-.16,1.7),w.closePath();let v=new Jn(w,{depth:l-.26,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});v.translate(0,0,-(l-.26)/2),o(v,i,0,0,0);for(let F of[-1,1]){let B=o(et(.07,.68,.06),i,h+c/2+.16,1.33,F*(l/2-.16));B.rotation.z=.78,o(et(.07,.6,.06),i,h+.05,1.33,F*(l/2-.16));let N=o(et(.09,.62,.06),i,h-c/2-(s?-.02:.12),1.33,F*(l/2-.16));N.rotation.z=s?0:-.45}s&&(o(et(2,.5,.08),i,-1.5,1.3,l/2-.04),o(et(2,.5,.08),i,-1.5,1.3,-l/2+.04),o(et(.08,.5,l),i,-a/2+.04,1.3,0),o(et(1.9,.05,l-.15),y.rust,-1.5,1.08,0)),o(et(.15,.22,l+.04),y.chrome,a/2+.05,.55,0),o(et(.15,.22,l+.04),y.chrome,-a/2-.05,.55,0);for(let F of[-1,1])o(et(.04,.14,.32),y.lampGlow,a/2+.01,.85,F*.66),o(et(.04,.14,.28),y.redPaint,-a/2-.01,.85,F*.68);o(et(.03,.2,.7),y.black,a/2+.01,.78,0);for(let F of[-1,1])o(et(.12,.08,.18),i,h+c/2+.2,1.2,F*(l/2+.08));for(let F of[-1,1])o(et(.02,.4,.01),y.black,h,.75,F*(l/2+.006)),o(et(.18,.03,.02),y.chrome,h+.3,.92,F*(l/2+.01)),o(et(.18,.03,.02),y.chrome,h-.7,.92,F*(l/2+.01));o(et(a-1.2,.25,l-.1),y.black,0,.32,0);for(let F of[a/2-.85,-a/2+.85])for(let B of[-1,1])Ra(r,F,.38,B*(l/2-.05));r.position.set(n,0,t),r.rotation.y=e,b.bake(r);let R=Math.abs(Math.cos(e))>.5,C=R?a/2:l/2,_=R?l/2:a/2;b.col(n-C,.25,t-_,n+C,1.08,t+_,{surf:"metal"});let E=n+(R?h*Math.cos(e):0),P=t+(R?0:-h*Math.sin(e)),S=R?c/2+.2:l/2-.1,I=R?l/2-.1:c/2+.2;b.col(E-S,1.08,P-I,E+S,1.75,P+I,{surf:"metal"})}function Yn(n,t,e=1,i=1){Cn(i*77+3);let s=new It,r=3.2*e,o=new mt(.16*e,.28*e,r,12,4);ri(o,2,2);let a=new D(o,y.bark);a.position.y=r/2,s.add(a);for(let c=0;c<5;c++){let h=new D(new $n(.12*e,.6*e,6),y.bark),u=c/5*Math.PI*2;h.position.set(Math.cos(u)*.2*e,.15,Math.sin(u)*.2*e),h.rotation.set(Math.sin(u)*1.2,0,-Math.cos(u)*1.2),s.add(h)}for(let c=0;c<4;c++){let h=new D(new mt(.04*e,.09*e,1.6*e,6),y.bark),u=c/4*Math.PI*2+.4;h.position.set(Math.cos(u)*.45*e,r*.75,Math.sin(u)*.45*e),h.rotation.set(Math.sin(u)*.9,0,-Math.cos(u)*.9),s.add(h)}let l=ve(i+500,2,3);for(let c=0;c<13;c++){let h=(.75+Pt()*.6)*e,u=new ii(h,3),d=u.attributes.position,f=u.attributes.normal;for(let x=0;x<d.count;x++){let M=d.getX(x),w=d.getY(x),v=d.getZ(x),R=1+(l((M/h+1)*.5,(v/h+w/h+2)*.25)-.5)*.55;d.setXYZ(x,M*R,w*R*.85,v*R)}u.computeVertexNormals();for(let x=0;x<d.count;x++){let M=new U(d.getX(x),d.getY(x)/.85,d.getZ(x)).normalize(),w=new U(f.getX(x),f.getY(x),f.getZ(x));M.lerp(w,.35).normalize(),f.setXYZ(x,M.x,M.y,M.z)}ri(u,3,3);let p=new D(u,y.leaf),g=Pt()*Math.PI*2,m=c===0?0:(.8+Pt()*.6)*e;p.position.set(Math.cos(g)*m,r+(Pt()*1.4-.2)*e,Math.sin(g)*m),s.add(p)}s.position.set(n,0,t),b.bake(s),b.col(n-.25*e,0,t-.25*e,n+.25*e,r,t+.25*e,{surf:"wood"})}function uh(n,t,e,i,s=1,r=[]){let o=Math.hypot(e-n,i-t),a=(e-n)/o,l=(i-t)/o,c=Math.abs(a)>.5,h=new de(.09,s,.025),u=new $n(.065,.12,4),d=p=>r.some(g=>p>g[0]&&p<g[1]);for(let p=.1;p<o;p+=.16){if(d(p))continue;let g=new Jt().makeRotationY(c?0:Math.PI/2);g.setPosition(n+a*p,s/2,t+l*p),b.addGeo(y.paintwood,h,g);let m=new Jt().makeRotationY(Math.PI/4+(c?0:Math.PI/2));m.setPosition(n+a*p,s+.06,t+l*p),b.addGeo(y.paintwood,u,m)}let f=[[0,o]];for(let p of r)f=f.flatMap(([g,m])=>p[1]<=g||p[0]>=m?[[g,m]]:[[g,p[0]],[p[1],m]].filter(([x,M])=>M-x>.05));for(let[p,g]of f){for(let v of[s*.25,s*.75]){let R=n+a*(p+g)/2,C=t+l*(p+g)/2;b.box(y.paintwood,R,v,C+(c?-.025:0),c?g-p:.04,.08,c?.04:g-p,{collide:!1})}let m=n+a*p,x=t+l*p,M=n+a*g,w=t+l*g;b.col(Math.min(m,M)-(c?0:.06),0,Math.min(x,w)-(c?.06:0),Math.max(m,M)+(c?0:.06),s,Math.max(x,w)+(c?.06:0),{bullet:!1,surf:"wood"});for(let v=p;v<=g;v+=2.4)b.box(y.paintwood,n+a*v,s/2+.05,t+l*v,.12,s+.1,.12,{collide:!1})}}function On(n,t,e,i,s=2.6){let r=(n+e)/2,o=(t+i)/2,a=Math.abs(e-n),l=Math.abs(i-t),c=new de(a,s,l,Math.max(2,Math.round(a*2)),6,Math.max(2,Math.round(l*2))),h=c.attributes.position,u=ve(Math.round(r*7+o*13)+900,4,3);for(let p=0;p<h.count;p++){let g=h.getX(p),m=h.getY(p),x=h.getZ(p),M=(u((g+r)*.05+.5,(m+x+o)*.05+.5)-.5)*.5;h.setXYZ(p,g+Math.sign(g)*M*(Math.abs(g)>a/2-.01?1:0),m+(m>s/2-.01?M:0),x+Math.sign(x)*M*(Math.abs(x)>l/2-.01?1:0))}c.computeVertexNormals();let d=et(a,s,l,1.5,[r,0,o]);c.setAttribute("uv",new fn(new Float32Array(h.count*2),2));let f=c.attributes.uv;for(let p=0;p<h.count;p++)f.setXY(p,(h.getX(p)+r+h.getZ(p)+o)/1.5,h.getY(p)/1.5);b.addGeo(y.hedge,c,new Jt().setPosition(r,s/2,o)),b.col(r-a/2,0,o-l/2,r+a/2,s,o+l/2,{surf:"grass"})}function qt(n,t,e,i=1,s=0){let r=new It,o=(l,c,h,u,d)=>{let f=new D(l,c);return f.position.set(h,u,d),r.add(f),f};o(et(i-.04,i-.04,i-.04,i),y.wood,0,i/2,0);let a=.07*i;for(let l of[-1,1])for(let c of[-1,1])o(et(a,i,a,1),y.wood,l*(i/2-a/2),i/2,c*(i/2-a/2));for(let l of[0,1])for(let c of[-1,1])o(et(a,a,i,1),y.wood,c*(i/2-a/2),l*(i-a)+a/2,0),o(et(i,a,a,1),y.wood,0,l*(i-a)+a/2,c*(i/2-a/2));for(let l of[-1,1]){let c=o(et(i*1.3,a*.8,a*.5,1),y.wood,0,i/2,l*(i/2+.005));c.rotation.z=Math.PI/4}r.position.set(n,t,e),r.rotation.y=s,b.bake(r),b.col(n-i/2,t,e-i/2,n+i/2,t+i,e+i/2,{surf:"wood"})}function fo(n,t,e){b.box(y.wood,n,.2,t,1,.4,.7,{surf:"wood"});let s=kt(e===0?15231514:e===1?13642266:12095584,{roughness:.5});for(let r=0;r<12;r++){let o=new D(new xe(.1,10,8),s);o.position.set(n-.4+r%4*.26,.45,t-.2+Math.floor(r/4)*.2),o.scale.y=.85,b.bake(o)}}function Fp(n,t,e){let i=new It,s=new D(et(.1,1.1,.1,1),y.wood);s.position.y=.55,i.add(s);let r=new D(new zi(.15,.35,4,12),y.steel);r.rotation.z=Math.PI/2,r.position.y=1.15,i.add(r);let o=new D(et(.03,.2,.06,1),y.redPaint);o.position.set(.05,1.3,.17),i.add(o),i.position.set(n,0,t),i.rotation.y=e,b.bake(i),b.col(n-.08,0,t-.08,n+.08,1,t+.08,{bullet:!1})}function Mh(n,t){let e=new It,i=new D(new mt(.14,.17,.6,14),y.redPaint);i.position.y=.3,e.add(i);let s=new D(new xe(.15,14,8,0,Math.PI*2,0,Math.PI/2),y.redPaint);s.position.y=.6,e.add(s);for(let o of[-1,1]){let a=new D(new mt(.06,.06,.12,10),y.redPaint);a.rotation.z=Math.PI/2,a.position.set(o*.18,.42,0),e.add(a)}let r=new D(new mt(.03,.05,.08,6),y.chrome);r.position.y=.76,e.add(r),e.position.set(n,.15,t),b.bake(e),b.col(n-.17,0,t-.17,n+.17,.9,t+.17,{bullet:!1})}function oi(n,t,e){let i=new It,s=new D(new mt(.32,.27,.95,16,3),kt(e,{map:j.metal.map,normalMap:j.metal.normalMap,metalness:.2,roughness:.6}));s.position.y=.48,i.add(s);let r=new D(new mt(.35,.34,.08,16),kt(e));r.position.y=1,i.add(r);for(let o=0;o<3;o++){let a=new D(new $e(.3-o*.015,.012,6,24),kt(e));a.rotation.x=Math.PI/2,a.position.y=.25+o*.3,i.add(a)}i.position.set(n,0,t),b.bake(i),b.col(n-.33,0,t-.33,n+.33,1.04,t+.33,{surf:"metal"})}function zs(n,t,e){let i=new It,s=new D(new mt(.06,.1,5.2,10),y.darkTrim);s.position.y=2.6,i.add(s);let r=new D(new mt(.04,.04,1.4,8),y.darkTrim);r.rotation.x=Math.PI/2,r.position.set(0,5.1,e*.7),i.add(r);let o=new D(new mt(.12,.3,.25,12),y.darkTrim);o.position.set(0,5.05,e*1.35),i.add(o);let a=new D(new mt(.22,.22,.04,12),y.lampGlow);a.position.set(0,4.92,e*1.35),i.add(a);let l=new D(new mt(.18,.22,.4,10),y.darkTrim);l.position.y=.2,i.add(l),i.position.set(n,.15,t),b.bake(i),b.col(n-.12,0,t-.12,n+.12,5.3,t+.12,{surf:"metal"})}function Sd(n,t,e,i){b.box(y.wood,n,.25,t,e,.5,i,{surf:"wood"}),b.box(y.dirt,n,.51,t,e-.16,.04,i-.16,{collide:!1});for(let s=0;s<Math.floor(e*i*3);s++){let r=n-e/2+.25+Pt()*(e-.5),o=t-i/2+.25+Pt()*(i-.5);for(let a=0;a<5;a++){let l=new D(new $n(.05,.4,4),y.leaf);l.position.set(r,.7,o),l.rotation.set((Pt()-.5)*1.2,Pt()*3,(Pt()-.5)*1.2),b.bake(l)}}}function Aa(n,t,e){let i=new D(new mt(.65,.65,1.2,20,2),y.hay);i.rotation.set(0,e,Math.PI/2),i.position.set(n,.65,t),b.bake(i);let s=Math.abs(Math.cos(e))>.5;b.col(n-(s?.6:.65),0,t-(s?.65:.6),n+(s?.6:.65),1.3,t+(s?.65:.6),{surf:"grass"})}function Op(n,t){Mn(t-3.2/2,n-4/2,n+4/2,.05,2.4,-1,y.wood,y.wood,[],.12),Mn(t+3.2/2,n-4/2,n+4/2,.05,2.4,1,y.wood,y.wood,[{c:n+.6,w:1.4,b:.05,t:2.1}],.12),Pn(n-4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,-1,y.wood,y.wood,[{c:t,w:.9,b:1.1,t:1.8,win:!0}],.12),Pn(n+4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,1,y.wood,y.wood,[{c:t-.3,w:1.2,b:.05,t:2.1}],.12),b.box(y.roof2,n,2.4+.15,t,4+.6,.12,3.2+.6,{rotX:.06,collide:!1}),b.box(y.wood,n,.03,t,4,.06,3.2,{collide:!1}),b.col(n-4/2,2.4,t-3.2/2,n+4/2,2.4+.3,t+3.2/2),b.box(y.wood,n-1.4,.8,t-1.2,1,.05,.5,{collide:!1}),b.col(n-1.9,0,t-1.5,n-.9,1.6,t-.95);for(let r=0;r<3;r++)b.box(kt(9071162),n-1.7+r*.3,1,t-1.2,.2,.35,.2,{collide:!1})}function rv(n,t){let r=(o,a)=>b.box(y.white,o,1.25,a,.08,2.5,.08,{surf:"metal"});for(let o of[-1,0,1])for(let a of[-1,1])r(n+o*5/2,t+a*3.6/2);for(let o of[-1,1])b.box(y.white,n,2.5,t+o*3.6/2,5,.08,.08,{collide:!1});for(let o of[-1,0,1])b.box(y.white,n+o*5/2,2.5,t,.08,.08,3.6,{collide:!1});for(let o of[-1,1])b.box(y.glass,n,2.5+.45,t+o*3.6/4,5,.03,3.6/2+.1,{rotX:o*.45,collide:!1});b.box(y.white,n,2.5+.9,t,5,.06,.06,{collide:!1}),b.box(y.wood,n,.45,t-3.6/2+.4,5-.4,.06,.7,{collide:!1}),b.col(n-5/2+.2,0,t-3.6/2+.05,n+5/2-.2,.9,t-3.6/2+.75,{bullet:!1});for(let o=0;o<6;o++){let a=new D(new mt(.12,.09,.2,12),kt(11558970));a.position.set(n-2+o*.8,.58,t-3.6/2+.4),b.bake(a);let l=new D(new ii(.16,1),y.leaf);l.position.set(n-2+o*.8,.78,t-3.6/2+.4),b.bake(l)}}function Id(n,t){let e=new It,i=new D(new xe(.35,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),y.black);i.position.y=.85,e.add(i);let s=new D(new xe(.35,16,10,0,Math.PI*2,0,Math.PI/2),y.black);s.position.y=.87,e.add(s);for(let r=0;r<3;r++){let o=new D(new mt(.02,.02,.85,6),y.steel),a=r/3*Math.PI*2;o.position.set(Math.cos(a)*.2,.4,Math.sin(a)*.2),o.rotation.set(Math.sin(a)*.3,0,-Math.cos(a)*.3),e.add(o)}e.position.set(n,0,t),b.bake(e),b.col(n-.35,0,t-.35,n+.35,1.2,t+.35,{bullet:!1,surf:"metal"})}function Ld(n,t){let e=new It,i=new D(new mt(.6,.6,.05,20),y.white);i.position.y=.72,e.add(i);let s=new D(new mt(.04,.04,2.3,8),y.steel);s.position.y=1.15,e.add(s);let r=new D(new $n(1.4,.5,8,1,!0),kt(13647936,{side:cn}));r.position.y=2.2,e.add(r),e.position.set(n,0,t),b.bake(e),b.col(n-.6,0,t-.6,n+.6,.75,t+.6,{bullet:!1});for(let o=0;o<3;o++){let a=o/3*Math.PI*2;ov(n+Math.cos(a)*1,t+Math.sin(a)*1,-a-Math.PI/2)}}function ov(n,t,e){let i=new It,s=new D(et(.45,.04,.45,1),y.white);s.position.y=.45,i.add(s);let r=new D(et(.45,.45,.04,1),y.white);r.position.set(0,.7,-.21),i.add(r);for(let o of[-1,1])for(let a of[-1,1]){let l=new D(et(.03,.45,.03,1),y.white);l.position.set(o*.2,.22,a*.2),i.add(l)}i.position.set(n,0,t),i.rotation.y=e,b.bake(i)}function Bn(n,t,e){let i=new Xn;i.moveTo(-.3,0),i.lineTo(.3,0),i.lineTo(.12,.3),i.lineTo(.08,.85),i.lineTo(-.08,.85),i.lineTo(-.12,.3),i.closePath();let s=new Jn(i,{depth:2.4,bevelEnabled:!1});s.translate(0,0,-1.2),ri(s,.7,.7);let r=new Jt().makeRotationY(e);r.setPosition(n,0,t),b.addGeo(y.concrete,s,r);let o=Math.abs(Math.cos(e))>.5;b.col(n-(o?.3:1.2),0,t-(o?1.2:.3),n+(o?.3:1.2),.85,t+(o?1.2:.3))}function gi(n,t,e){let i=Ii(t,{w:256,h:256,size:200,color:"rgba(255,255,255,0.9)",stroke:"rgba(0,0,0,0.35)",strokeW:8,draw:h=>{h.strokeStyle="rgba(255,220,60,0.9)",h.lineWidth=14,h.beginPath(),h.arc(128,128,116,0,7),h.stroke()}}),s=new D(new Fe(3.4,3.4),new ui({map:i,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));s.rotation.x=-Math.PI/2,s.position.set(e.x,.06,e.z),s.renderOrder=2,n.add(s);let r=new It,o=new D(et(1.3,.7,.9,1),y.greenPaint);o.position.y=.35,r.add(o);for(let h=0;h<4;h++){let u=new D(et(.04,.72,.92,1),y.darkTrim);u.position.set(-.5+h*.33,.35,0),r.add(u)}let a=new D(et(1.35,.06,.95,1),y.darkTrim);a.position.y=.72,r.add(a);let l=new D(new Fe(.5,.5),new ie({map:Ii(t,{w:128,h:128,size:100,bg:"#f0c020",color:"#111"}),roughness:.6}));l.position.set(0,.38,.46),r.add(l);let c=l.clone();c.position.z=-.46,c.rotation.y=Math.PI,r.add(c),r.position.set(e.x,0,e.z),b.bake(r),b.col(e.x-.65,0,e.z-.45,e.x+.65,.75,e.z+.45,{surf:"metal"})}function Xp(n,t){let e=new It,i=new D(new mt(.12,.16,8.5,10),y.bark);i.position.y=4.25,e.add(i);let s=new D(et(.12,.12,2,1),y.wood);s.position.y=7.8,e.add(s);for(let o of[-.85,0,.85]){let a=new D(new mt(.04,.05,.14,8),y.white);a.position.set(0,7.93,o),e.add(a)}let r=new D(new mt(.25,.25,.7,12),y.metal);r.position.set(.3,6.6,0),e.add(r),e.position.set(n,0,t),b.bake(e),b.col(n-.16,0,t-.16,n+.16,8.5,t+.16,{surf:"wood"})}function gh(n,t,e,i){let s=[];for(let o=0;o<=24;o++){let a=o/24;s.push(new U(n+(t-n)*a,e-Math.sin(a*Math.PI)*.6,i))}let r=new la(new Kr(s),24,.012,4,!1);b.addGeo(y.black,r,new Jt)}function vh(n,t,e){let i=new It,s=new D(et(1.2,.8,.05,1),y.white);s.position.set(0,3.2,0),i.add(s);let r=new D(et(.45,.35,.06,1),y.redPaint);r.position.set(0,3.05,.005),i.add(r);let o=new D(et(.37,.27,.07,1),y.white);o.position.set(0,3.05,.006),i.add(o);let a=new D(new $e(.23,.012,6,20),y.redPaint);a.rotation.x=Math.PI/2,a.position.set(0,2.9,.28),i.add(a);let l=new D(new mt(.23,.15,.4,12,1,!0),kt(16777215,{wireframe:!0}));l.position.set(0,2.7,.28),i.add(l),i.position.set(n,0,t),i.rotation.y=e,b.bake(i)}function av(n,t){let e=new It;for(let s of[-1.4,1.4])for(let r of[-.6,.6]){let o=new D(new mt(.04,.04,2.5,8),y.redPaint);o.position.set(s,1.2,r*.5),o.rotation.x=r*.45,e.add(o)}let i=new D(new mt(.05,.05,3,8),y.redPaint);i.rotation.z=Math.PI/2,i.position.y=2.35,e.add(i);for(let s of[-.6,.6]){for(let o of[-.18,.18]){let a=new D(new mt(.008,.008,1.8,4),y.steel);a.position.set(s+o,1.45,0),e.add(a)}let r=new D(et(.45,.04,.2,1),y.black);r.position.set(s,.55,0),e.add(r)}e.position.set(n,0,t),b.bake(e);for(let s of[-1.4,1.4])b.col(n+s-.1,0,t-.6,n+s+.1,2.4,t+.6,{bullet:!1,surf:"metal"})}function lv(n,t){let e=new It,i=new D(new mt(1.6,1.6,.04,28),y.black);i.position.y=.85,e.add(i);let s=new D(new $e(1.65,.1,6,28),kt(2783968));s.rotation.x=Math.PI/2,s.position.y=.88,e.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new D(new mt(.03,.03,.88,6),y.steel);a.position.set(Math.cos(o)*1.6,.44,Math.sin(o)*1.6),e.add(a)}e.position.set(n,0,t),b.bake(e),b.col(n-1.4,0,t-1.4,n+1.4,.9,t+1.4,{bullet:!1,surf:"carpet"})}function dh(n,t,e,i){let s=new It,r=new D(et(1.3,2.2,.05,1),y.paintwood);r.position.set(.65,1.1,0),s.add(r);for(let[a,l]of[[.35,1.55],[.95,1.55],[.35,.6],[.95,.6]]){let c=new D(et(.4,.6,.07,1),y.paintwood);c.position.set(a,l,0),s.add(c)}let o=new D(new xe(.04,8,6),y.chrome);o.position.set(1.15,1,.05),s.add(o),s.position.set(n,.18,t),s.rotation.y=e+i,b.bake(s)}function Bp(n,t,e){let i=new D(et(1,.02,.6,1),kt(9071162,{map:j.carpet.map}));i.position.set(n,.21,t),b.bake(i);for(let s of[-1,1]){let r=new D(new mt(.2,.15,.35,14),kt(11558970));r.position.set(n+s*1,.38,t+e*.2),b.bake(r);let o=new D(new ii(.28,2),y.leaf);o.position.set(n+s*1,.75,t+e*.2),b.bake(o)}}function bh(n,t){b.box(y.metal,n,.4,t,.8,.8,.8,{surf:"metal",bullet:!0});let e=new D(new mt(.3,.3,.02,16),y.black);e.position.set(n,.81,t),b.bake(e);for(let i=0;i<7;i++)b.box(y.darkTrim,n-.41,.15+i*.1,t,.01,.03,.7,{collide:!1})}function Ca(n,t,e){let i=new It;for(let l of[-.5,.5]){let c=new D(new $e(.3,.025,6,20),y.tire);c.position.set(l,.32,0),i.add(c)}let s=new D(new mt(.02,.02,.9,6),y.carBlue);s.rotation.z=Math.PI/2,s.position.set(0,.6,0),i.add(s);let r=new D(new mt(.02,.02,.6,6),y.carBlue);r.rotation.z=.8,r.position.set(-.2,.45,0),i.add(r);let o=new D(et(.22,.05,.1,1),y.black);o.position.set(-.25,.8,0),i.add(o);let a=new D(new mt(.015,.015,.5,6),y.chrome);a.rotation.x=Math.PI/2,a.position.set(.45,.85,0),i.add(a),i.position.set(n,0,t),i.rotation.set(0,e,.25),b.bake(i)}function Hp(n,t){let e=new D(new $e(.22,.06,8,20),kt(2787882));e.position.set(n,.35,t),b.bake(e);let i=new D(et(.4,.5,.05,1),y.darkTrim);i.position.set(n,.25,t-.08),b.bake(i)}function cv(){for(let e of[-24,-6,12,28])Xp(e,-6.3);for(let[e,i]of[[-24,-6],[-6,12],[12,28]])for(let s of[-.85,0,.85])gh(e,i,7.93,-6.3+s);gh(-40,-24,7.93,-6.3),gh(28,44,7.93,-6.3),vh(8,-9.85,0),vh(-8,9.85,Math.PI),av(14,23),lv(-14,-22.5),dh(-1.7,-9.5,0,-1.2),dh(1.7,9.5,Math.PI,-1.2),dh(1.3,-17.5,Math.PI,1.1),dh(-1.3,17.5,0,1.1),Bp(-1,-8.3,1),Bp(1,8.3,-1),bh(6,-18.4),bh(-6,18.4),Ca(-11.5,-7.8,.3),Ca(11.2,7.8,2.6),Hp(-6.5,-18.2),Hp(6.5,18.2);let n=new D(new mt(.4,.4,.02,20),y.rust);n.position.set(-6,.012,1.5),b.bake(n);let t=n.clone();t.position.set(18,.012,-1.6),b.bake(t);for(let e of[-18,0,18])for(let i of[-1,1])b.box(y.darkTrim,e,.03,i*3.85,.7,.02,.25,{collide:!1})}function qp(n,t="town"){if(Vp(t),jM(),b=new ch,on.id==="market")return fv(n);if(on.id==="station")return mv(n);if(on.id==="port")return xv(n);if(on.id==="villa")return _v(n);if(on.id==="ship")return vv(n);Cn(42);let e=new Fe(220,220,1,1);e.rotateX(-Math.PI/2),ri(e,220/4,220/4),b.addGeo(y.grass,e,new Jt),b.box(y.asphalt,0,.005,0,120,.01,8,{collide:!1,uv:6});for(let r=-58;r<58;r+=4)b.box(y.lineY,r,.012,0,2.2,.004,.14,{collide:!1});for(let r of[-1,1])b.box(y.lineW,0,.012,r*3.6,120,.004,.12,{collide:!1});for(let r of[-1,1])b.box(y.concrete,0,.075,r*4.85,120,.15,1.7,{uv:2,surf:"concrete",bullet:!1}),b.box(y.concrete,0,.08,r*4.03,120,.16,.12,{collide:!1,uv:1});b.box(y.concrete,8,.02,-7.5,5.2,.04,4.4,{collide:!1,uv:2}),b.box(y.concrete,-8,.02,7.5,5.2,.04,4.4,{collide:!1,uv:2}),b.box(y.concrete,-1,.02,-7.6,1.6,.04,3.2,{collide:!1,uv:1}),b.box(y.concrete,1,.02,7.6,1.6,.04,3.2,{collide:!1,uv:1}),Np({x0:-6,x1:5.5,z0:-17.5,z1:-9.5,frontNeg:!0,siding:y.sidingY,roof:y.roof,doorX:-1,chimX:-4.5,frontOps:[{c:-1,d:1},{c:-4,w:1.6},{c:2.6,w:1.8}],backOps:[{c:2,d:1},{c:-3.5,w:1.4},{c:-.2}],leftOps:[{c:-11.5,w:1.4},{c:-15.5,d:1}],rightOps:[{c:-12.5,d:1,w:1.4}],partX:.5,partZ0:-17.4,partZ1:-12.8,partDoor:-14.5}),Up({x0:5.5,x1:10.5,z0:-17,z1:-9.8,frontNeg:!0,siding:y.sidingY,roof:y.roof2,outerX:10.5}),xh(-3.5,-12,0,y.fabricG),ms(-3.5,-10.9,1.1,.6,.42),yh(-3.5,-11.6,3.2,2.2,y.carpetR),Cd(-3.5,-9.95,Math.PI),xr(-5.6,-14,Math.PI/2),_h(-5.4,-10.2),uo(-.2,1.7,-17.33,0,y.paint1),Rd(1,3.8,-17.5,-1),ms(3,-13.8,1.4,.9,.76),mi(2.4,-14.5,0),mi(3.6,-13.1,Math.PI),mi(2.4,-13.1,Math.PI),uo(-5.85,1.7,-12,Math.PI/2,y.paint2),Pd(-3.2,-15.8,Math.PI/2),Np({x0:-5.5,x1:6,z0:9.5,z1:17.5,frontNeg:!1,siding:y.sidingB,roof:y.roof2,doorX:1,chimX:4.5,frontOps:[{c:1,d:1},{c:4,w:1.6},{c:-2.6,w:1.8}],backOps:[{c:-2,d:1},{c:3.5,w:1.4},{c:.2}],leftOps:[{c:12.5,d:1,w:1.4}],rightOps:[{c:11.5,w:1.4},{c:15.5,d:1}],partX:-.5,partZ0:12.8,partZ1:17.4,partDoor:14.5}),Up({x0:-10.5,x1:-5.5,z0:9.8,z1:17,frontNeg:!1,siding:y.sidingB,roof:y.roof,outerX:-10.5}),xh(3.5,12,Math.PI,y.fabricO),ms(3.5,10.9,1.1,.6,.42),yh(3.5,11.6,3.2,2.2,y.carpetB),Cd(3.5,9.95,0),xr(5.6,14,-Math.PI/2),_h(5.4,10.2),uo(.2,1.7,17.33,Math.PI,y.paint2),Rd(-3.8,-1,17.5,1),ms(-3,13.8,1.4,.9,.76),mi(-2.4,14.5,Math.PI),mi(-3.6,13.1,0),Pd(3.2,15.8,-Math.PI/2),sv(1.5,-1.6,0),Hn(-13.5,2,0,y.carRed),Hn(13,1.8,Math.PI,y.carWhite,!0),Hn(8,-7.6,Math.PI/2,y.carBlue),Bn(-26,-1.5,0),Bn(-26,1.5,0),Bn(26,-1.5,0),Bn(26,1.5,0),Bn(-21,0,Math.PI/2+0),qt(20.5,0,-2.2,1.1),qt(20.5,0,-1,1.1),qt(20.5,1.1,-1.6,1.1,.3),zs(-9,-5.4,1),zs(9,5.4,-1),zs(-22,5.4,-1),zs(22,-5.4,1),oi(-4.2,-5,2779706),oi(-3.4,-5,2771594),oi(4.2,5,2779706),oi(5,5,5921370),Mh(-11,-4.9),Mh(11,4.9),Fp(-2.5,-6.2,0),Fp(2.5,6.2,Math.PI),Yn(-9,-12.5,1.1,1),Yn(12.5,-19,1,2),Yn(-12.5,19,1,3),Yn(9,12.5,1.1,4),Yn(-27,-8,1.2,5),Yn(27,8,1.2,6),Yn(-27,12,1,7),Yn(27,-21,1,8),uh(-30,-6.2,-11,-6.2,.9,[[5,6.5]]),uh(11,6.2,30,6.2,.9,[[12,13.5]]),Op(-24.5,-15.5),Sd(-17,-16.5,3.2,1.2),Sd(-21.5,-9.5,2,1.2),fo(-15.5,-9.2,0),fo(-15.5,-10.2,1),qt(-14,0,-13.5,1),qt(-14,0,-14.6,1),qt(-14,1,-14,.9,.4),gi(n,"A",We.A),rv(18.5,-18),Aa(15,-11,0),Aa(22,-11.5,Math.PI/2),Aa(15.6,-14.2,Math.PI/2),qt(22.5,0,-14.5,1.1),qt(22.5,1.1,-14.5,.8,.5),fo(20.5,-9,2),gi(n,"B",We.B),Id(4,20),Ld(-4.5,20.5),qt(-16,0,13,1.1),qt(-16,0,14.1,1.1),qt(16,0,12.5,1),qt(17.1,0,12.5,1),qt(16.5,1,12.5,.9),Aa(-20,10,0),Aa(20,17,Math.PI/2),oi(-11.6,17.5,2771594),oi(-12.3,17.5,2779706),Sd(14.5,20.5,3,1.2),Op(22.5,20.5),Id(-8.5,-22.5),Ld(8.5,-21.5),uh(-30,-19.5,30,-19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),uh(-30,19.5,30,19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),On(-33,-28,33,-26.6),On(-33,26.6,33,28),On(-33,-26.6,-31.6,-5.8),On(-33,5.8,-31.6,26.6),On(31.6,-26.6,33,-5.8),On(31.6,5.8,33,26.6),b.col(-31.6,0,-5.8,-30.5,6,5.8,{bullet:!1}),b.col(30.5,0,-5.8,31.6,6,5.8,{bullet:!1}),On(-12.5,9.5,-11.8,15.5,1.6),On(11.8,-15.5,12.5,-9.5,1.6),On(-30.5,-4,-27.5,-3.5,1.2),cv();let i=new It;Cn(9);for(let r=0;r<26;r++){let o=r/26*Math.PI*2,a=55+Pt()*15,l=Math.cos(o)*a,c=Math.sin(o)*a,h=new D(et(8,5,7,2.5),[y.sidingY,y.sidingB,y.sidingG][r%3]);h.position.set(l,2.5,c),h.rotation.y=-o,i.add(h);let u=new D(new $n(6.2,2.5,4),y.roof2);u.position.set(l,6.2,c),u.rotation.y=-o+Math.PI/4,i.add(u)}b.bake(i);for(let r=0;r<30;r++){let o=r/30*Math.PI*2+.1;Yn(Math.cos(o)*(42+Pt()*8),Math.sin(o)*(40+Pt()*8),1.2+Pt()*.5,30+r)}b.colliders=b.colliders.filter(r=>r.min.x>-40&&r.max.x<40&&r.min.z>-36&&r.max.z<36),b.col(-40,0,-40,oe.minX-.6,20,40,{bullet:!1}),b.col(oe.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,oe.minZ-.6,{bullet:!1}),b.col(-40,0,oe.maxZ+.6,40,20,40,{bullet:!1});let s=b.finish(n);hv(n,b.colliders);for(let[r,o]of[[-1.5,-13.5],[1,13.5]]){let a=new wn(16767136,6,9,1.6);a.position.set(r,2.6,o),n.add(a)}return{colliders:b.colliders,meshes:s}}function Yp(n,t,e,i){let s=null,r=-1;for(let o of n)t>=o.min.x&&t<=o.max.x&&i>=o.min.z&&i<=o.max.z&&o.max.y<=e+.05&&o.max.y>r&&(r=o.max.y,s=o);return s?s.surf:on.ground==="concrete"||Math.abs(i)<4?"concrete":"grass"}var Fd={time:{value:0}};function hv(n,t){let e=window.__vwQuality??1,i=e===0?3500:e===1?9e3:16e3,s=[],r=[],o=[];Cn(77);for(let E=0;E<7;E++){let P=Pt()*Math.PI,S=.1+Pt()*.16,I=.02,F=(Pt()-.5)*.15,B=(Pt()-.5)*.12,N=(Pt()-.5)*.12,G=Math.cos(P),q=Math.sin(P),V=(ot,Lt)=>[B+G*ot*I+F*Lt*G*0,Lt*S,N+q*ot*I+F*Lt],ct=[V(-1,0),V(1,0),V(0,1)],J=-q,rt=G;for(let ot of ct){s.push(...ot),r.push(J*.3,.9,rt*.3);let Lt=ot[1]/S;o.push(.18+Lt*.32,.34+Lt*.38,.1+Lt*.1)}}let a=new Ze;a.setAttribute("position",new ne(s,3)),a.setAttribute("normal",new ne(r,3)),a.setAttribute("color",new ne(o,3));let l=new ie({vertexColors:!0,roughness:.9,side:cn});l.onBeforeCompile=E=>{E.uniforms.time=Fd.time,E.vertexShader=`uniform float time;
`+E.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.);
      float sway = sin(time*1.7 + wp.x*0.35 + wp.z*0.27) * 0.06 + sin(time*3.1 + wp.x*1.3) * 0.02;
      transformed.x += sway * position.y * 3.0; transformed.z += sway * position.y * 1.5;`)};let c=new Ls(a,l,i),h=new Jt,u=new ln,d=new U,f=new U,p=(E,P)=>{if(Math.abs(P)<5.8)return!0;for(let S of t)if(S.max.y>.12&&E>S.min.x-.1&&E<S.max.x+.1&&P>S.min.z-.1&&P<S.max.z+.1)return!0;return E>5.6&&E<10.6&&P>-9.8&&P<-5.3||E>-10.6&&E<-5.4&&P>5.3&&P<9.8||Math.abs(E+1)<.9&&P>-9.5&&P<-5.8||Math.abs(E-1)<.9&&P<9.5&&P>5.8},g=0,m=0;for(;g<i&&m<i*6;){m++;let E=oe.minX+.3+Pt()*(oe.maxX-oe.minX-.6),P=oe.minZ+.3+Pt()*(oe.maxZ-oe.minZ-.6);if(p(E,P))continue;let S=.7+Pt()*.9;u.setFromAxisAngle(new U(0,1,0),Pt()*6.28),d.set(S,S*(.8+Pt()*.6),S),f.set(E,0,P),h.compose(f,u,d),c.setMatrixAt(g++,h)}c.count=g,c.receiveShadow=!0,c.castShadow=!1,c.frustumCulled=!1,n.add(c);let x=new ii(.045,0),M=new ie({roughness:.6}),w=220,v=new Ls(x,M,w),R=new re,C=[[-5.6,-8.9,4,.5],[.4,-8.9,4.6,.5],[-5,8.9,4.4,.5],[2.4,8.9,3.4,.5]];for(let E=0;E<w;E++){let P=C[E%C.length],S=P[0]+Pt()*P[2],I=P[1]+(Pt()-.5)*P[3];h.compose(new U(S,.22+Pt()*.18,I),u,new U(1,1,1)),v.setMatrixAt(E,h),v.setColorAt(E,R.setHex([15747690,16764992,16777215,10510560,16747050][Math.floor(Pt()*5)]))}n.add(v);let _=new It;n.add(_);for(let E of C){let P=new D(new de(E[2]+.2,.18,E[3]+.2),y.dirt);P.position.set(E[0]+E[2]/2,.09,E[1]),P.receiveShadow=!0,_.add(P);for(let S=0;S<E[2]*6;S++){let I=new D(new ii(.1,1),y.leaf);I.position.set(E[0]+Pt()*E[2],.22,E[1]+(Pt()-.5)*E[3]),I.scale.y=.7,_.add(I)}}je(_)}var Je=(n,t=1.3)=>({c:n,w:t,b:0,t:2.2}),_n=(n,t=1.6,e=1,i=2)=>({c:n,w:t,b:e,t:i,win:1,noCurtain:1});function uv(n,t,e,i,s,r){let o=kt(r,{roughness:.8,side:cn}),a=t-n,l=i-e,c=Math.max(2,Math.round(a/.5));for(let h=0;h<c;h++){let u=h%2?o:y.white;b.box(u,n+(h+.5)*a/c,s,(e+i)/2,a/c,.04,l,{collide:!1})}}function fh(n,t,e,i,s){let r=e-t;b.box(y.paintwood,n,.5,(t+e)/2,1.1,1,r,{surf:"wood",uv:1.5});let o=Math.floor(r/.9);for(let a=0;a<o;a++){let l=t+.45+a*(r-.9)/Math.max(1,o-1);b.box(y.wood,n,1.06,l,.95,.12,.8,{collide:!1});let c=kt(s[a%s.length],{roughness:.45});for(let h=0;h<9;h++){let u=new D(new xe(.11,10,8),c);u.position.set(n-.3+h%3*.3,1.2+(h===4?.08:0),l-.25+Math.floor(h/3)*.25),b.bake(u)}}for(let a of[t+.1,e-.1])b.box(y.steel,n+i*.5,1.3,a,.06,2.6,.06,{collide:!1});uv(n-.7,n+.7,t,e,2.6,s[0]===15231514?14174762:2787914)}function nn(n,t,e=1,i=0){b.box(y.wood,n,.07,t,1.2,.14,1,{surf:"wood"});let s=kt(11569754,{roughness:.9});for(let r=0;r<e;r++)b.box(s,n,.14+.35+r*.7,t,1.1,.7,.92,{surf:"wood"})}function Dd(n,t,e=0){let i=Math.abs(Math.cos(e))>.5,s=i?1.9:1.2,r=i?1.2:1.9;b.box(y.greenPaint,n,.6,t,s,1.2,r,{surf:"metal"}),b.box(y.black,n,1.23,t,s+.06,.06,r+.06,{collide:!1})}function Pa(n,t,e,i){let s=new It,r=(S,I,F,B,N)=>{let G=new D(S,I);return G.position.set(F,B,N),s.add(G),G},o=2.3,a=2.22,l=kt(i,{roughness:.42,metalness:.35}),c=kt(i===15261904||i===15921902?13159632:i,{roughness:.35,metalness:.55}),h=kt(15659246,{roughness:.3,metalness:.3}),u=kt(2105376,{roughness:.8}),d=kt(5922402,{roughness:.6});for(let S of[-1,1])r(et(7.6,.2,.12),u,.1,.62,S*.52);let f=r(new mt(.26,.26,.9,16),kt(12106944,{metalness:.8,roughness:.3}),-.6,.6,.85);f.rotation.z=Math.PI/2;for(let S of[-1,1])r(et(2,.05,.04),d,1.9,.62,S*1.08),r(et(2,.05,.04),d,1.9,.42,S*1.08);let p=-3.42,g=-1.42,m=new Xn;m.moveTo(g,.5),m.lineTo(-2.4+.56,.5),m.absarc(-2.4,.45,.56,.09,Math.PI-.09,!1),m.lineTo(p+.12,.5),m.quadraticCurveTo(p,.5,p,.7),m.lineTo(p,1.3),m.quadraticCurveTo(p,1.42,p+.05,1.5),m.lineTo(p+.2,2.18),m.quadraticCurveTo(p+.25,2.3,p+.42,2.3),m.lineTo(g,2.3),m.lineTo(g,.5);let x=new Jn(m,{depth:a-.12,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:3,curveSegments:8});x.translate(0,0,-(a-.12)/2),ri(x,.5,.5),r(x,h,0,0,0);let M=r(et(.04,.72,a-.2),y.glass,p+.15,1.86,0);M.rotation.z=-.27;for(let S of[-1,1])r(et(.02,.03,.55),y.black,p+.04,1.54,S*.35).rotation.set(S*.15,0,-.27);for(let S of[-1,1]){let I=S*(a/2+.005);r(et(.95,.62,.02),y.glass,p+.95,1.86,I);let F=r(et(.3,.5,.02),y.glass,p+.34,1.8,I);F.rotation.z=-.27,r(et(.02,1.6,.012),y.black,p+.42,1.3,I+S*.004),r(et(.02,1.6,.012),y.black,p+1.5,1.3,I+S*.004),r(et(.2,.04,.03),y.chrome,p+1.3,1.42,I+S*.015),r(et(.5,.06,.25),d,p+.95,.55,S*(a/2+.05));let B=r(et(.03,.03,.32),y.black,p+.3,1.75,S*(a/2+.16));r(et(.06,.38,.2),y.black,p+.3,1.7,S*(a/2+.33)),r(et(.01,.32,.15),y.chrome,p+.265,1.7,S*(a/2+.33))}r(et(.04,.32,1.3),y.black,p-.08,1,0);for(let S=0;S<4;S++)r(et(.03,.03,1.26),y.chrome,p-.1,.88+S*.08,0);for(let S of[-1,1])r(et(.05,.2,.36),y.lampGlow,p-.08,1.02,S*.88),r(et(.05,.08,.2),kt(16751136,{emissive:8400896}),p-.08,.84,S*.92);r(et(.22,.26,a+.06),d,p-.1,.58,0),r(et(.02,.17,.34),kt(16053484),p-.22,.6,0),r(et(.02,.12,.6),kt(2775610),p+.02,2,0);let w=-1.32,v=4.18,R=v-w,C=(w+v)/2,_=.75,E=3.2;r(et(R,E-_,o,1),l,C,(_+E)/2,0),r(et(R+.04,.1,o+.04),c,C,E-.05,0),r(et(R+.04,.12,o+.04),c,C,_+.06,0);for(let S=w+.3;S<v-.2;S+=.55)for(let I of[-1,1])r(et(.06,E-_-.2,.03),c,S,(_+E)/2,I*(o/2+.012));for(let S of[-1,1])r(et(.08,E-_,.08),c,w+.04,(_+E)/2,S*(o/2));r(et(.02,E-_-.14,.02),y.black,v+.012,(_+E)/2,0);for(let S of[-1,1]){r(et(.08,E-_,.1),c,v,(_+E)/2,S*(o/2-.02));for(let I of[_+.35,(_+E)/2,E-.35])r(et(.06,.12,.14),d,v+.03,I,S*(o/2-.1));for(let I of[.28,.75])r(new mt(.025,.025,E-_-.1,8),y.chrome,v+.06,(_+E)/2,S*I),r(et(.06,.05,.2),y.chrome,v+.08,1.6,S*I-S*.08);r(et(.06,.16,.3),kt(13637656,{emissive:5242880}),v+.02,.55,S*.9),r(et(.04,.4,.4),y.black,v-.6,.42,S*(o/2-.2))}r(et(.12,.12,o-.2),d,v+.02,.5,0),r(et(.02,.17,.34),kt(16053484),v+.09,.5,0);for(let S of[-1,1])Ra(s,-2.4,.45,S*.95,.45,.28),Ra(s,2.55,.45,S*.98,.45,.28),Ra(s,2.55,.45,S*.68,.45,.28);let P=new D(new Fe(3.2,1.2),new ie({map:Ii("\u9752\u679C\u4FBF",{w:512,h:192,size:120,color:i===9091146?"#ffffff":"#2a6a3a",bg:"rgba(0,0,0,0)"}),transparent:!0,roughness:.6}));for(let S of[-1,1]){let I=P.clone();I.position.set(1.5,2.1,S*(o/2+.035)),I.rotation.y=S>0?0:Math.PI,s.add(I)}s.position.set(n,0,t),s.rotation.y=e,b.bake(s),b.col(n-1.4,.7,t-1.2,n+4.2,3.2,t+1.2,{surf:"metal"}),b.col(n-3.4,.4,t-1.15,n-1.4,2.3,t+1.15,{surf:"metal"})}function Od(n,t,e){let i=kt(15773728,{roughness:.5,map:j.metal.map});b.box(i,n,.75,t,1.2,1.1,1,{surf:"metal"}),b.box(y.black,n+.2,1.6,t,.9,.08,1,{collide:!1});for(let s of[-1,1])b.box(y.darkTrim,n-.35,1.2,t+s*.45,.06,2.2,.06,{collide:!1});for(let s of[-1,1])b.box(y.steel,n-.75,.6,t+s*.3,.06,1.8,.1,{collide:!1});for(let s of[-1,1])b.box(y.steel,n-1.1,.06,t+s*.3,.8,.05,.12,{collide:!1})}function po(n,t,e,i){let s=kt(i,{roughness:.4}),r=Math.abs(Math.cos(e))>.5;b.box(s,n,.9,t,r?1:.8,1.8,r?.8:1,{surf:"metal"});let o=new D(new Fe(.7,1.1),y.lampGlow);o.position.set(n+(r?0:Math.sin(e)*.41),1.1,t+(r?Math.cos(e)*.41:0)),o.rotation.y=e,b.bake(o)}function Zn(n,t,e,i,s,r=4,o=1,a="#2a5a3a"){let l=new D(new Fe(r,o),new ie({map:Ii(s,{w:512,h:Math.round(512*o/r),size:Math.round(380*o/r),color:"#fff8e0",bg:a}),roughness:.7}));l.position.set(n,t,e),l.rotation.y=i,b.bake(l)}function Tn(n,t,e,i,s){let r=Math.hypot(e-n,i-t),o=Math.abs(e-n)>Math.abs(i-t);b.box(y.steel,(n+e)/2,s+1,(t+i)/2,o?r:.06,.06,o?.06:r,{collide:!1}),b.box(y.steel,(n+e)/2,s+.5,(t+i)/2,o?r:.04,.04,o?.04:r,{collide:!1});let a=Math.ceil(r/1.2);for(let l=0;l<=a;l++){let c=l/a;b.box(y.steel,n+(e-n)*c,s+.5,t+(i-t)*c,.05,1,.05,{collide:!1})}b.col(Math.min(n,e)-.04,s,Math.min(t,i)-.04,Math.max(n,e)+.04,s+1.05,Math.max(t,i)+.04,{bullet:!1,surf:"metal"})}function Zi(n,t,e,i){let s=kt(i,{roughness:.5});for(let r=0;r<e;r++)b.box(s,n,.18+r*.36,t,.62,.34,.44,{surf:"metal",collide:!1}),b.box(y.darkTrim,n,.33+r*.36,t,.64,.03,.46,{collide:!1});b.col(n-.31,0,t-.22,n+.31,e*.36,t+.22,{surf:"metal"})}function ph(n,t,e,i,s,r="#fff6d0"){let o=new D(new Fe(.9,.42),new ie({map:Ii(s,{w:256,h:120,size:Math.min(64,Math.floor(230/s.length*1.15)),color:"#2a1a0a",bg:r}),roughness:.8,side:cn}));o.position.set(n,t,e),o.rotation.y=i,b.bake(o)}function pi(n,t,e,i){b.box(y.concrete,n,.35,t,e,.7,i,{surf:"concrete",uv:1}),b.box(y.dirt,n,.69,t,e-.16,.02,i-.16,{collide:!1});for(let s=0;s<Math.round(e*i*3);s++){let r=new D(new ii(.18+Pt()*.12,1),y.leaf);r.position.set(n-e/2+.2+Pt()*(e-.4),.85+Pt()*.2,t-i/2+.2+Pt()*(i-.4)),b.bake(r)}}function Zp(n,t){b.box(y.steel,n-1.4,1.2,t,.08,2.4,.08,{collide:!1}),b.box(y.steel,n+1.4,1.2,t,.08,2.4,.08,{collide:!1}),b.box(y.roof2,n,2.45,t+.3,3.2,.08,1.4,{collide:!1}),b.box(y.glass,n,1.3,t-.35,2.8,1.8,.04,{bullet:!1}),b.box(y.wood,n,.45,t,2.4,.08,.4,{collide:!1}),Zn(n,2.15,t-.38,0,"\u5E02\u5834\u524D",1.4,.35,"#2a4a8a")}function wd(n,t,e,i){let s=new mt(.07,.07,Math.abs(e-t),10);s.rotateX(Math.PI/2);let r=new D(s,y.rust);r.position.set(n,i,(t+e)/2),b.bake(r)}function dv(){Cn(311),ph(-4.3,2,-3.1,Math.PI/2,"\u306B\u3093\u3058\u3093 98\u5186"),ph(-4.3,2,3.1,Math.PI/2,"\u306A\u3059 3\u672C150\u5186"),ph(4.6,2,-3.1,-Math.PI/2,"\u30D4\u30FC\u30DE\u30F3 5\u500B100\u5186"),ph(4.6,2,3.1,-Math.PI/2,"\u30C8\u30DE\u30C8 1\u7BB1500\u5186","#ffe0d0");for(let[t,e]of[[-4,-3],[4,-3],[-4,3],[4,3],[0,0]])b.box(y.darkTrim,t,3.75,e,.02,.7,.02,{collide:!1});b.box(y.paintwood,-5.6,.5,5.4,1.6,1,.7,{surf:"wood"}),b.box(y.black,-5.9,1.12,5.4,.4,.25,.35,{collide:!1}),Zn(-5.6,1.6,5.06,Math.PI,"\u304A\u4F1A\u8A08",.9,.3,"#7a2a1a");for(let[t,e,i]of[[-2.9,-4.6,14174762],[-2.9,4.6,2779856],[3.1,1.6,2793546],[3.1,-1.7,15773728]])Zi(t,e,2,i);Zn(-8.86,3.1,.2,Math.PI/2,"\u671D\u3069\u308C\u91CE\u83DC",2.2,.55,"#3a7a2a"),Zn(8.86,3.1,0,-Math.PI/2,"\u7523\u5730\u76F4\u9001",2,.55,"#b0402a");let n=kt(11569754,{roughness:.9});b.box(n,-3.2,Td+.4,-6.4,.9,.8,.8,{surf:"wood"}),b.box(n,-5.8,Td+.35,-6.5,1.2,.7,.7,{surf:"wood"}),b.box(n,-5.8,Td+.95,-6.5,.8,.5,.6,{surf:"wood"}),pi(-12,-19.6,3,1),pi(12.5,-12.6,2.4,1);for(let t of[-20,-4,12])Xp(t,-20.6);for(let[t,e]of[[-20,-4],[-4,12]])for(let i of[-.85,0,.85])gh(t,e,7.93,-20.6+i);Ca(3.5,-20.4,.2),Ca(4.3,-20.4,.1),Mh(-9.2,-11.9),Zp(-12,20.4),pi(10.5,20.6,3,1),pi(-4.5,11.6,2,.9),Ca(19.2,12,1.4),Mh(11.4,11.9),wd(-23.45,-18,18,2.6),wd(-23.45,-18,18,2.85),wd(-21.05,-1.6,5.6,3.6),bh(-22.9,1),bh(-22.9,3);for(let[t,e,i,s]of[[22.3,-15,2793546,3],[22.9,-15,14174762,2],[22.6,-6.8,2779856,3],[22.6,3.6,15773728,2]]){let r=kt(i,{roughness:.5});for(let o=0;o<s;o++)b.box(r,t,1.1+.18+o*.36,e,.62,.34,.44,{surf:"metal"})}Zn(23.18,4.4,-11,-Math.PI/2,"\u642C\u5165\u53E3 1",1.8,.5,"#3a3a3a"),Zn(23.18,4.4,1,-Math.PI/2,"\u642C\u5165\u53E3 2",1.8,.5,"#3a3a3a");for(let t=0;t<18;t++){let e=-20+Pt()*40,i=-20+Pt()*40;Math.abs(e)<9.5&&Math.abs(i)<7.5||b.box(y.darkTrim,e,.022,i,.6+Pt()*1.4,.002,.4+Pt()*1,{collide:!1,rotY:Pt()*3})}}var Td=2.4;function fv(n){Cn(77);let t=new Fe(160,160,1,1);t.rotateX(-Math.PI/2),ri(t,160/5,160/5),b.addGeo(y.asphalt,t,new Jt),b.box(y.concrete,0,.01,0,48,.02,44,{collide:!1,uv:3});for(let d of[-15,15])for(let f=-20;f<=20;f+=3)b.box(y.lineW,f,.025,d,.1,.004,2.6,{collide:!1});for(let d of[-11.5,11.5])b.box(y.lineY,0,.025,d,40,.004,.14,{collide:!1});let e=(d,f,p,g,m=3.2)=>b.box(y.brick,(d+p)/2,m/2,(f+g)/2,Math.abs(p-d),m,Math.abs(g-f),{uv:2.5,surf:"concrete"});e(-24.6,-22.6,24.6,-21.6),e(-24.6,21.6,24.6,22.6),e(-24.6,-21.6,-23.6,21.6),e(23.6,-21.6,24.6,21.6);for(let d of[-22.1,22.1])for(let f=-24;f<=24;f+=2)b.box(y.steel,f,3.8,d,.05,1.2,.05,{collide:!1});let i=4.2;b.box(y.tile,0,.02,0,18,.04,14,{collide:!1,uv:1.2}),Pn(-9,-7,7,0,i,-1,y.brick,y.plaster,[Je(-4.2,1.4),_n(.2,2.2,1.05,2.1),Je(4.2,1.4)]),Pn(9,-7,7,0,i,1,y.brick,y.plaster,[_n(-4.2,1.8),Je(0,1.7),_n(4.2,1.8)]),Mn(-7,-9,9,0,i,-1,y.brick,y.plaster,[{c:-6.2,w:1.6,b:2.95,t:3.8,win:1,noCurtain:1},{c:-3.6,w:1.4,b:2.95,t:3.8,win:1,noCurtain:1},{c:2.2,w:4,b:0,t:2.8},_n(6.4,1.6)]),Mn(7,-9,9,0,i,1,y.brick,y.plaster,[Je(-5.6,1.3),{c:.5,w:4,b:0,t:1.3},_n(5.8,1.6)]);for(let d=1.35;d<i-.1;d+=.16)b.box(y.metal,.5,d,7,3.96,.13,.05,{collide:!1});b.box(y.darkTrim,.5,1.33,7,4,.06,.12,{collide:!1}),b.box(y.roof2,0,i+.12,0,18.6,.24,14.6,{uv:3,surf:"metal"});for(let d of[-5,0,5])b.box(y.glass,d,i+.3,0,1.6,.12,12,{collide:!1});Zn(2.2,3.4,-7.14,Math.PI,"\u30D9\u30B8\u9752\u679C\u5E02\u5834",4.6,.9,"#2a5a3a"),Zn(.5,4.75,7.14,0,"VEGE MARKET",5.2,.8,"#7a2a1a");let s=[15231514,13642266,3840554],r=[3840554,12095584,9058976];fh(-4.3,-5,-1.2,-1,s),fh(-4.3,1.2,5,-1,r),fh(4.6,-5,-1.2,1,r),fh(4.6,1.2,5,1,s),nn(.2,-2.5,1),qt(-.6,0,2.6,.9,.3);let o=2.4;b.box(y.floor,-5.5,o-.08,-6,7,.16,2,{surf:"wood",uv:1.5});for(let d of[-2.1])for(let f of[-5.1])b.box(y.steel,d,(o-.16)/2,f,.14,o-.16,.14,{surf:"metal"});Tn(-2.05,-5,-2.05,-7,o),Tn(-7.6,-5,-2.05,-5,o);let a=8,l=.72;for(let d=0;d<a;d++){let f=(d+1)*(o/a),p=.9-d*l;b.box(y.concrete,-8.25,f/2,p-l/2,1.3,f,l,{surf:"concrete",uv:1})}b.box(y.concrete,-8.25,o/2,-5.6,1.3,o,1.4,{surf:"concrete"}),Tn(-7.55,.9,-7.55,-4.9,0);for(let[d,f]of[[-4,-3],[4,-3],[-4,3],[4,3],[0,0]]){let p=new D(new mt(.35,.45,.2,14),y.lampGlow);p.position.set(d,i-.25,f),b.bake(p)}b.box(y.sidingG,-17.75,2.4,2,6.5,4.8,8,{uv:2.5,surf:"concrete"}),b.box(y.roof,-17.75,4.9,2,7,.2,8.5,{collide:!1,uv:2});for(let d=.2;d<3;d+=.16)b.box(y.metal,-14.47,d,2,.05,.13,3.2,{collide:!1});Zn(-14.4,3.5,2,Math.PI/2,"\u7B2C2\u5009\u5EAB",2.6,.7,"#3a3a3a"),Dd(-22.4,9.5,Math.PI/2),nn(-22.3,-5.5,2),qt(-22.3,0,13.5,1.1),qt(-22.3,1.1,13.5,.9,.4),Pa(-11.2,11.6,0,15261904),nn(-11,4.8,2),nn(-12.5,-.5,1),qt(-10.4,0,-.4,1),qt(-11.2,0,8.2,1,.2),nn(-20,-14,2),nn(-18.6,-14,1),nn(-14.4,-9.8,2),qt(-19.6,0,-7,1.1),qt(-19.6,0,-5.9,1.1),qt(-19.6,1.1,-6.45,1,.3),qt(-13.6,0,-14.6,1,.2),Dd(-22.4,-10.5,Math.PI/2),fo(-16,-16.5,0),fo(-17.2,-16.5,2),gi(n,"A",We.A);let c=1.1;b.box(y.concrete,21.3,c/2,-4.5,4.6,c,25,{surf:"concrete",uv:2}),b.box(y.darkTrim,19.02,c-.05,-4.5,.06,.1,25,{collide:!1});for(let d=0;d<4;d++){let f=(d+1)*c/4;b.box(y.concrete,21.3,f/2,8+(3-d)*.5+.25+0,4.6,f,.5,{surf:"concrete"})}b.box(y.sidingB,23.4,c+2.2,-4.5,.4,4.4,25,{uv:2.5}),b.box(y.roof2,21.8,c+3.6,-4.5,3.6,.15,25,{collide:!1,uv:2});for(let d of[-14,-8,-2,4])for(let f=c+.2;f<c+3;f+=.16)b.box(y.metal,23.17,f,d,.05,.13,3,{collide:!1});Pa(14.2,-5.6,0,15921902),Pa(14.2,1.8,0,9091146),nn(21,-12,2),nn(20.4,1,1),nn(22.4,5.6,2),Od(13.4,-14,0),nn(16.6,-16,2),nn(11,-10.6,1),qt(17.4,0,-10.2,1,.3),qt(18.4,0,-10.2,1),gi(n,"B",We.B),Hn(-6,-15,Math.PI/2,y.carBlue),Hn(6.5,-16.5,Math.PI/2,y.carRed,!0),Bn(.5,-11,Math.PI/2),po(-2.4,-20.8,0,13642282),po(-1.3,-20.8,0,2779856),oi(9.8,-19.8,2779706),oi(10.6,-19.8,2771594),Hn(-2,15,Math.PI/2,y.carWhite),Hn(8.2,13.5,-Math.PI/2,y.carRed),Bn(-7,11,Math.PI/2),Bn(5,10.5,0),po(16,20.8,Math.PI,2793546),oi(-8,20,2779706),nn(14.5,10.8,1),qt(-15.5,0,17,1.1),qt(-14.4,0,17,1.1),qt(-15,1.1,17,1,.3);for(let d of[-18,-6,6,18])zs(d,d<0?-19.5:19.5,d<0?1:-1);dv();let h=new It;Cn(5);for(let d=0;d<22;d++){let f=d/22*Math.PI*2,p=46+Pt()*10,g=Math.round((8+Pt()*14)/3)*3;La(h,Math.cos(f)*p,Math.sin(f)*p,-f,9,g,8,["office","brick","apt","concrete"][d%4])}b.bake(h),b.col(-40,0,-40,oe.minX-.6,20,40,{bullet:!1}),b.col(oe.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,oe.minZ-.6,{bullet:!1}),b.col(-40,0,oe.maxZ+.6,40,20,40,{bullet:!1});let u=b.finish(n);for(let[d,f]of[[-4,-3],[4,-3],[-4,3],[4,3]]){let p=new wn(16773328,9,10,1.6);p.position.set(d,3.6,f),n.add(p)}{let d=new wn(16769200,5,8,1.6);d.position.set(-17.75,3.5,-6),n.add(d)}return{colliders:b.colliders,meshes:u}}function Ad(n,t,e,i){let s=(n+t)/2,r=t-n,o=kt(e,{roughness:.6,map:j.metal.map});b.box(o,s,2.17,0,r,2.24,2.8,{surf:"metal",uv:2}),b.box(y.darkTrim,s,1,0,r-.4,.1,2.6,{collide:!1});for(let a of[-1,1])b.box(y.darkTrim,s,.82,a*.9,r-.6,.22,.14,{collide:!1});for(let a=n+.5;a<t-.3;a+=.9)for(let l of[-1,1])b.box(y.darkTrim,a,2.17,l*1.42,.06,2.18,.04,{collide:!1});for(let a of[n+1.4,t-1.4]){b.box(y.black,a,.42,0,2,.24,2.2,{collide:!1});for(let l of[-.6,.6])for(let c of[-1,1]){let h=new D(new mt(.36,.36,.14,16),y.steel);h.rotation.x=Math.PI/2,h.position.set(a+l,.36,c*.72),b.bake(h)}}for(let a of[n,t])b.box(y.black,a,.75,0,.5,.2,.3,{collide:!1});if(i)for(let a of[-1,1])Zn(s,2.3,a*1.43,a>0?0:Math.PI,i,3.2,.7,"rgba(0,0,0,0)")}function pv(n,t){let e=(n+t)/2,i=t-n,s=kt(2775706,{roughness:.45,map:j.metal.map});b.box(s,e+.8,1.8,0,i-1.6,2.4,2.7,{surf:"metal"}),b.box(s,n+.8,2.15,0,1.6,3.1,2.8,{surf:"metal"}),b.box(y.glass,n-.02,2.9,0,.04,.8,2.2,{collide:!1}),b.box(y.lineY,n-.03,1.1,0,.04,.3,2.6,{collide:!1});for(let r of[n+1.6,t-1.6])for(let o of[-.7,.7])for(let a of[-1,1]){let l=new D(new mt(.42,.42,.14,16),y.steel);l.rotation.x=Math.PI/2,l.position.set(r+o,.42,a*.75),b.bake(l)}}function jn(n,t,e,i,s){let r=kt(s,{roughness:.55,map:j.metal.map}),o=i?6:2.44,a=i?2.44:6;b.box(r,n,t+1.3,e,o,2.6,a,{surf:"metal",uv:2});let l=Math.floor((i?o:a)/.4);for(let c=0;c<l;c++){let h=-((i?o:a)/2)+.2+c*.4;for(let u of[-1,1])b.box(y.darkTrim,n+(i?h:u*(o/2+.01)),t+1.3,e+(i?u*(a/2+.01):h),i?.05:.02,2.5,i?.02:.05,{collide:!1})}}function ps(n,t,e){let i=Math.abs(Math.cos(e))>.5;b.box(y.wood,n,.45,t,i?1.8:.45,.06,i?.45:1.8,{surf:"wood"});for(let s of[-.7,.7])b.box(y.steel,n+(i?s:0),.22,t+(i?0:s),.05,.44,.05,{collide:!1})}function mv(n){Cn(88);let t=new Fe(160,160,1,1);t.rotateX(-Math.PI/2),ri(t,160/5,160/5),b.addGeo(y.asphalt,t,new Jt),b.box(y.concrete,0,.01,-11,48,.02,20,{collide:!1,uv:3}),b.box(y.concrete,0,.01,11,48,.02,20,{collide:!1,uv:3}),b.box(kt(6973022,{roughness:1,map:j.concrete.map}),0,.03,0,48,.06,3.6,{collide:!1,uv:1});for(let l=-23.5;l<=23.5;l+=.7)b.box(y.wood,l,.08,0,.22,.06,2.6,{collide:!1});for(let l of[-1,1])b.box(y.steel,0,.14,l*.72,48,.08,.08,{collide:!1});for(let l of[-1,1])b.box(y.concrete,1,.21,l*3.4,30,.42,3,{surf:"concrete",uv:2}),b.box(y.lineY,1,.425,l*2.12,30,.004,.25,{collide:!1});let e=(l,c,h,u,d=3.2)=>b.box(y.brick,(l+h)/2,d/2,(c+u)/2,Math.abs(h-l),d,Math.abs(u-c),{uv:2.5});e(-24.6,-21.6,24.6,-20.6),e(-24.6,20.6,24.6,21.6),e(-24.6,-20.6,-23.6,20.6),e(23.6,-20.6,24.6,20.6),pv(-19.5,-12),Ad(-11.2,-4.2,10107434,"VEGE CARGO"),Ad(-2.8,5.4,3828282,"\u91CE\u83DC\u4FBF"),Ad(6.8,14,9071162,""),jn(19,0,0,!0,2779808),b.box(y.concrete,23,.45,0,1.2,.9,1.6,{surf:"concrete"});let i=4,s=16.8;b.box(y.concrete,s,i-.1,0,1.8,.2,13,{surf:"concrete",uv:1.5});for(let l of[-5,5])b.box(y.concrete,s,(i-.2)/2,l,.4,i-.2,.4,{surf:"concrete"});Tn(s-.9,-6.5,s-.9,6.5,i),Tn(s+.9,-6.5,s+.9,6.5,i);for(let l of[-1,1])for(let c=0;c<10;c++){let h=i-c*.4,u=l*(6.5+c*.6+.3);b.box(y.concrete,s,h/2-0,u,1.8,h,.6,{surf:"concrete"})}Zn(s,i+1.3,0,Math.PI/2,"\u8DE8\u7DDA\u6A4B",1.6,.4,"#2a4a8a"),b.box(y.steel,s,i+.9,0,.06,1.4,.06,{collide:!1});let r=3.6;b.box(y.floor,-18.3,.02,-9.7,10.6,.04,8.6,{collide:!1,uv:1.5}),Mn(-14,-23.6,-13,0,r,-1,y.sidingY,y.plaster,[_n(-20.5,1.8),Je(-15.5,1.4)]),Mn(-5.4,-23.6,-13,0,r,1,y.sidingY,y.plaster,[Je(-21,1.6),_n(-18,2),Je(-14.6,1.4)]),Pn(-13,-14,-5.4,0,r,1,y.sidingY,y.plaster,[_n(-11.8,1.6),Je(-8.2,1.5)]),b.box(y.roof,-18.3,r+.15,-9.7,11.4,.3,9.4,{uv:2}),Zn(-18.3,r-.6,-5.27,0,"\u3079\u3058\u8CA8\u7269\u99C5",3.4,.7,"#3a3a3a"),ps(-20.5,-12.6,0),ps(-17.5,-12.6,0),ps(-21.5,-8.6,Math.PI/2),po(-14.2,-12.8,Math.PI/2,2779856),b.box(y.steel,-16.6,.5,-7.2,.3,1,1.6,{surf:"metal"}),b.box(y.steel,-18.6,.5,-7.2,.3,1,1.6,{surf:"metal"}),b.box(y.paintwood,-22.6,.55,-10.5,1.2,1.1,2.4,{surf:"wood"}),gi(n,"A",We.A);{let l=new wn(16773328,7,10,1.6);l.position.set(-18.3,3.1,-9.7),n.add(l)}jn(13,0,-16.5,!0,11553322),jn(13,2.6,-16.5,!0,2783834),jn(21,0,-11.5,!1,3824282),jn(9,0,-9,!1,13146666),nn(16.5,-8.4,2),nn(18.4,-14.5,1),Zi(14.2,-11,3,2793546),Eh(9,-6+3.85,0,-1,2.6,1),Tn(7.78,-6,7.78,-12,2.6),Od(17,-12,0),gi(n,"B",We.B),Hn(-4,-17.2,Math.PI/2,y.carWhite),Bn(2.8,-11.5,0),Bn(-6.5,-9.5,Math.PI/2),qt(4.2,0,-8,1.1),qt(5.3,0,-8,1.1),qt(4.75,1.1,-8,1,.3),oi(-10.5,-19.8,2779706),po(.5,-19.9,0,13642282),pi(8,-19.6,3,1),ps(-1,-4,0),ps(8,-4,0),b.box(y.sidingB,-17.5,1.5,15.5,5,3,4,{uv:2}),b.box(y.roof2,-17.5,3.1,15.2,5.6,.2,4.8,{collide:!1}),Zn(-17.5,2.4,13.48,Math.PI,"\u58F2\u5E97",1.6,.5,"#7a2a1a"),Hn(-6,14.5,Math.PI/2,y.carRed),Hn(6,15.5,-Math.PI/2,y.carBlue,!0),Hn(13,14,Math.PI/2,y.carWhite),Bn(-1,9,0),Bn(9.5,9.5,Math.PI/2),qt(-10.5,0,8.2,1.1),qt(-10.5,0,9.3,1.1),nn(3.5,8.5,2),Zi(-13.2,8.6,3,14174762),ps(-6,4,0),ps(4,4,0),Zp(14,19.9);for(let l of[-20,0,20])zs(l,l<=0?19.2:-19.2,l<=0?-1:1);for(let l of[-1,1]){b.box(y.roof2,-2,3.4,l*3.6,18,.12,2.6,{collide:!1});for(let c of[-10,-2,6])b.box(y.steel,c,1.9,l*4.3,.16,3,.16,{surf:"metal"})}let o=new It;Cn(6);for(let l=0;l<22;l++){let c=l/22*Math.PI*2,h=46+Pt()*10,u=Math.round((6+Pt()*12)/3)*3;La(o,Math.cos(c)*h,Math.sin(c)*h,-c,9,u,8,["brick","apt","concrete","office"][l%4])}b.bake(o),b.col(-40,0,-40,oe.minX-.6,20,40,{bullet:!1}),b.col(oe.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,oe.minZ-.6,{bullet:!1}),b.col(-40,0,oe.maxZ+.6,40,20,40,{bullet:!1});let a=b.finish(n);return{colliders:b.colliders,meshes:a}}function kp(n,t,e,i){let s=kt(i,{roughness:.55,map:j.metal.map}),r=6,o=2.44,a=2.6,l=.08;if(e){for(let h of[-1,1])b.box(s,n,a/2,t+h*(o/2-l/2),r,a,l,{surf:"metal"});b.box(s,n,a-l/2,t,r,l,o,{surf:"metal"}),b.box(y.wood,n,.03,t,r-.1,.06,o-.2,{collide:!1});for(let h of[-1,1])for(let u of[-1,1])b.box(s,n+h*(r/2+.25),1.3,t+u*(o/2+.25),.06,2.4,.9,{collide:!1,rotY:u*h*.5})}else{for(let h of[-1,1])b.box(s,n+h*(o/2-l/2),a/2,t,l,a,r,{surf:"metal"});b.box(s,n,a-l/2,t,o,l,r,{surf:"metal"}),b.box(y.wood,n,.03,t,o-.2,.06,r-.1,{collide:!1})}let c=new D(new mt(.12,.12,.05,10),y.lampGlow);c.position.set(n,a-.12,t),b.bake(c)}function Nd(n,t){let e=new D(new mt(.22,.28,.6,12),y.black);e.position.set(n,.3,t),b.bake(e),b.col(n-.25,0,t-.25,n+.25,.6,t+.25,{surf:"metal"})}function gv(n,t){let e=kt(15249440,{roughness:.5,map:j.metal.map});for(let i of[-5.5,5.5])for(let s of[-1.6,1.6])b.box(e,n+i,4.75,t+s,.6,9.5,.6,{surf:"metal"});for(let i of[-5.5,5.5])b.box(e,n+i,9.7,t,.7,.5,3.8,{surf:"metal"});for(let i of[-1.6,1.6])b.box(e,n,9.9,t+i,12,.6,.5,{surf:"metal"});b.box(y.darkTrim,n-2,10.6,t,2.4,1.2,2,{collide:!1});for(let i of[-.6,.6])b.box(y.black,n+1.2,8.5,t+i,.03,2.4,.03,{collide:!1});jn(n+1.2,4.6,t,!0,2783904)}function Eh(n,t,e,i,s,r=1.1){let o=Math.ceil(s/.4),a=.55,l=y.steel;for(let h=0;h<o;h++){let u=Math.min(s,(h+1)*(s/o)),d=n+e*(h*a+a/2),f=t+i*(h*a+a/2),p=e!==0?a:r,g=i!==0?a:r;b.box(l,d,u-.04,f,p,.08,g,{collide:!1}),b.col(d-p/2,0,f-g/2,d+p/2,u,f+g/2,{surf:"metal"})}let c=o*a;for(let h of[-1,1]){let u=i!==0?h*r/2:0,d=e!==0?h*r/2:0,f=new mt(.025,.025,Math.hypot(c,s),6),p=new D(f,l);p.position.set(n+e*c/2+u,s/2+.9,t+i*c/2+d),p.rotation.set(i!==0?-Math.sign(i)*Math.atan2(c,s):0,0,e!==0?Math.sign(e)*Math.atan2(c,s):0),b.bake(p)}}function xv(n){Cn(123);let t=new Fe(160,160,1,1);t.rotateX(-Math.PI/2),ri(t,160/5,160/5),b.addGeo(y.asphalt,t,new Jt);let e=new D(new Fe(60,160),kt(2775674,{roughness:.15,metalness:.3}));e.rotation.x=-Math.PI/2,e.position.set(54,-.6,0),b.bake(e),b.box(y.concrete,23.9,-.3,0,.8,.6,46,{collide:!1});for(let c of[-12,12])b.box(y.lineY,0,.02,c,44,.004,.16,{collide:!1});for(let c=-20;c<=20;c+=4)b.box(y.lineW,c,.02,0,.12,.004,3,{collide:!1});let i=(c,h,u,d,f=3)=>b.box(y.concrete,(c+u)/2,f/2,(h+d)/2,Math.abs(u-c),f,Math.abs(d-h),{uv:2.5});i(-24.6,-21.6,23.6,-20.6),i(-24.6,20.6,23.6,21.6),i(-24.6,-20.6,-23.6,20.6),Tn(23.4,-20.6,23.4,20.6,0);for(let c of[-17,-9,-1,7,15])Nd(22.6,c);let s=3.4;b.box(y.floor,-19.8,.02,-11.5,7.6,.04,9,{collide:!1,uv:1.5}),Pn(-16,-16,-7,0,s,1,y.sidingB,y.plaster,[Je(-13.5,1.4),_n(-9.6,1.8)]),Mn(-7,-23.6,-16,0,s,1,y.sidingB,y.plaster,[_n(-21.5,1.6),Je(-18,1.4)]),Mn(-16,-23.6,-16,0,s,-1,y.sidingB,y.plaster,[_n(-19.8,2)]),b.box(y.roof2,-19.8,s+.15,-11.5,8.2,.3,9.6,{uv:2}),ms(-20.5,-12.5,1.6,.8,.76),mi(-20.5,-13.3,0),mi(-19.6,-11.7,Math.PI),xr(-23.2,-9.5,Math.PI/2),Zn(-16.15,2.7,-11.5,Math.PI/2,"\u6E2F\u6E7E\u4E8B\u52D9\u6240",2.4,.55,"#2a4a7a");{let c=new wn(16773328,6,9,1.6);c.position.set(-19.8,3,-11.5),n.add(c)}nn(-13,-16.8,2),nn(-11.6,-16.8,1),Zi(-9.6,-14.6,3,2779856),qt(-12.6,0,-8.6,1.1),qt(-12.6,1.1,-8.6,.9,.3),Dd(-21.5,-4.8,0),gi(n,"A",We.A),kp(-14.5,-4.6,!0,11553322),jn(-3,0,-5.2,!0,2783834),jn(-3,2.6,-5.2,!0,9071162),jn(8.5,0,-4.8,!0,3824282),jn(-10,0,5,!0,13146666),kp(1.5,4.6,!0,2779808),jn(13,0,5.2,!0,10107434),jn(13,2.6,5.2,!0,2783834),jn(-19.5,0,6.5,!1,8026746),jn(19,0,-7,!1,11553322),Eh(-10,6.22+3.85,0,-1,2.6),Eh(8.5,-6.02-3.85,0,1,2.6),Tn(-13,3.78,-7,3.78,2.6),Tn(5.5,-3.58,11.5,-3.58,2.6),gv(0,0),qt(-6,0,.6,1.1),qt(-6,0,-.5,1.1),nn(4.8,-.8,1),Bn(9,.6,0),Od(-15,.6,0),Zi(17.2,.4,3,15773728),nn(14.8,-15.6,2),nn(16.2,-15.6,2),qt(19.6,0,-12,1.1),qt(19.6,0,-10.9,1.1),qt(19.6,1.1,-11.45,1,.3),Zi(12,-10.4,2,14174762),fo(16,-9.4,1),gi(n,"B",We.B),Pa(-4,-15.8,0,15921902),Hn(9,-17,Math.PI/2,y.carBlue),po(-14.2,-20,0,13642282),oi(5,-20,2779706),b.box(y.sidingG,-16.5,1.4,16.5,3,2.8,3,{uv:2}),b.box(y.roof2,-16.5,2.95,16.5,3.6,.15,3.6,{collide:!1}),Zn(-16.5,2.3,14.97,Math.PI,"\u5B88\u885B\u5BA4",1.4,.4,"#3a3a3a"),Pa(6,15.5,0,9091146),Hn(-6.5,14,Math.PI/2,y.carRed),Bn(-1.5,10.5,Math.PI/2),Bn(16,11,0),nn(-11.5,10.6,2),qt(18.5,0,16.5,1.1);for(let c of[-20,-2,16])zs(c,c<0?19.6:-19.6,c<0?-1:1);let r=new It;Cn(7);for(let c=0;c<16;c++){let h=Math.PI*.55+c/16*Math.PI*.9,u=46+Pt()*8,d=Math.round((7+Pt()*9)/3)*3;La(r,Math.cos(h)*u,Math.sin(h)*u,-h,10,d,9,["concrete","brick","office","apt"][c%4])}let o=new D(et(40,6,9,3),kt(2767450,{roughness:.6}));o.position.set(48,2,-6),r.add(o);let a=new D(et(8,7,7,3),y.white);a.position.set(62,8.5,-6),r.add(a),b.bake(r),b.col(-40,0,-40,oe.minX-.6,20,40,{bullet:!1}),b.col(oe.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,oe.minZ-.6,{bullet:!1}),b.col(-40,0,oe.maxZ+.6,40,20,40,{bullet:!1});let l=b.finish(n);return{colliders:b.colliders,meshes:l}}function Gs(n,t,e){let i=new It,s=new D(et(.7,.08,1.4,1),y.white);s.position.set(0,.36,.15),i.add(s);let r=new D(et(.7,.08,.7,1),y.white);r.position.set(0,.55,-.75),r.rotation.x=.7,i.add(r);let o=new D(et(.62,.06,1.3,1),kt(2783920));o.position.set(0,.43,.15),i.add(o);for(let l of[-.3,.3])for(let c of[-.5,.75]){let h=new D(et(.05,.34,.05,1),y.steel);h.position.set(l,.17,c),i.add(h)}i.position.set(n,0,t),i.rotation.y=e,b.bake(i);let a=Math.abs(Math.sin(e))>.5;b.col(n-(a?1:.38),0,t-(a?.38:1),n+(a?1:.38),.6,t+(a?.38:1),{surf:"metal"})}function Sh(n,t,e){let i=new D(new mt(.04,.04,2.4,8),y.steel);i.position.set(n,1.2,t),b.bake(i);let s=new D(new $n(1.4,.5,8,1,!0),kt(e,{side:cn,roughness:.9}));s.position.set(n,2.45,t),b.bake(s),b.col(n-.05,0,t-.05,n+.05,2.4,t+.05,{surf:"metal"})}function Gp(n,t,e,i,s,r=[]){let o=Math.abs(e-n)>Math.abs(i-t),a=o?n:t,l=o?e:i,c=o?t:n,h=kt(10133668,{wireframe:!0,metalness:.6});for(let u of Ud(a,l,r.map(([d,f])=>({c:(d+f)/2,w:f-d})))){if(u.op)continue;let d=u.b-u.a,f=(u.a+u.b)/2,p=new Fe(d,s,Math.max(1,Math.round(d/.25)),Math.round(s/.25)),g=new D(p,h);g.position.set(o?f:c,s/2,o?c:f),o||(g.rotation.y=Math.PI/2),b.bake(g);for(let m of[u.a,u.b])b.box(y.steel,o?m:c,s/2,o?c:m,.07,s,.07,{collide:!1});b.box(y.steel,o?f:c,s,o?c:f,o?d:.06,.06,o?.06:d,{collide:!1}),o?b.col(u.a,0,c-.05,u.b,s,c+.05,{bullet:!1,surf:"metal"}):b.col(c-.05,0,u.a,c+.05,s,u.b,{bullet:!1,surf:"metal"})}}function yv(n,t){let e=y.concrete,i=new D(new mt(1.9,2,.6,28),e);i.position.set(n,.3,t),b.bake(i);let s=new D(new mt(1.7,1.7,.05,28),kt(3840712,{roughness:.08,metalness:.3}));s.position.set(n,.52,t),b.bake(s);let r=new D(new mt(.25,.35,1.6,14),e);r.position.set(n,1.1,t),b.bake(r);let o=new D(new mt(.8,.4,.3,20),e);o.position.set(n,1.95,t),b.bake(o);let a=new D(new xe(.42,16,12),kt(14191152,{roughness:.6}));a.scale.set(1,.75,1),a.position.set(n,2.38,t),b.bake(a),b.col(n-1.4,0,t-1.4,n+1.4,.6,t+1.4,{surf:"concrete"}),b.col(n-.35,0,t-.35,n+.35,2.6,t+.35,{surf:"concrete"})}function _v(n){Cn(77);let t=new Fe(160,160,1,1);t.rotateX(-Math.PI/2),ri(t,160/4,160/4),b.addGeo(y.grass,t,new Jt);let e=3.4,i=(l,c,h,u,d=3)=>{b.box(y.plaster,(l+h)/2,d/2,(c+u)/2,Math.abs(h-l),d,Math.abs(u-c),{uv:2.5}),b.box(y.roof,(l+h)/2,d+.08,(c+u)/2,Math.abs(h-l)+.2,.16,Math.abs(u-c)+.2,{collide:!1})};i(-24.6,-21.6,23.6,-20.6),i(-24.6,20.6,-3.5,21.6),i(3.5,20.6,23.6,21.6),i(22.6,-20.6,23.6,20.6),i(-24.6,-20.6,-23.6,20.6);for(let l of[-3.5,3.5])b.box(y.brick,l,1.6,21.1,.9,3.2,1,{uv:1.5});b.box(y.black,0,1.2,21.1,6.1,2.4,.08,{bullet:!1});for(let l=-2.8;l<=2.8;l+=.4)b.box(y.black,l,1.3,21,.05,2.6,.05,{collide:!1});b.box(y.floor,-17.3,.02,-1,12.6,.04,14,{collide:!1,uv:1.5}),Pn(-11,-8,6,0,e,1,y.plaster,y.plaster,[Je(-5,2.6),_n(-.6,2.2,.5,2.6),Je(3.4,1.4)]),Mn(-8,-23.6,-11,0,e,-1,y.plaster,y.plaster,[_n(-20.5,1.8),Je(-14.2,1.4)]),Mn(6,-23.6,-11,0,e,1,y.plaster,y.plaster,[Je(-20,1.4),_n(-14,2)]),Pn(-23.6,-8,6,0,e,-1,y.plaster,y.plaster,[]),Pn(-17.2,-8,6,0,e,1,y.plasterG,y.plasterG,[Je(-5.2,1.3),Je(3,1.3)]),b.box(y.trim,-17.3,e+.15,-1,13.4,.3,14.8,{uv:2}),b.box(y.trim,-17.3,e+.45,-1,13.6,.3,.3,{collide:!1}),xh(-14,1,Math.PI/2,y.fabricO),ms(-15,1,.7,1.2,.42),yh(-14.6,1,3,3.4,y.carpetB),Cd(-16.95,1,Math.PI/2),_h(-11.6,5.4),_h(-16.6,-7.4),ms(-14,-4.5,1.8,1,.95,y.tile),mi(-14,-5.4,0),mi(-14,-3.6,Math.PI),uo(-16.95,1.8,-2.5,Math.PI/2,y.paint1),Rd(-23.3,-19,-8,-1),ms(-20.4,-4,1.4,.9,.76),mi(-20.4,-4.8,0),mi(-20.4,-3.2,Math.PI),Pd(-20.4,3.2,0),xr(-23.2,0,Math.PI/2),uo(-23.45,1.7,3,Math.PI/2,y.paint2);for(let[l,c]of[[-14.2,-1],[-20.4,-1]]){let h=new wn(16769200,6,10,1.6);h.position.set(l,3,c),n.add(h)}b.box(y.tile,-17.3,.02,-14.5,12.6,.04,11,{collide:!1,uv:2}),gi(n,"A",We.A),b.box(y.brick,-21.5,.5,-15.5,2.6,1,.8,{uv:1.5}),b.box(y.tile,-21.5,1.03,-15.5,2.8,.06,1,{collide:!1}),Id(-20.6,-15.5),Ld(-21,-11.5),pi(-13.5,-18,2.6,1),pi(-13,-11,1,2.4),qt(-18.6,0,-18.8,1.1),qt(-17.5,0,-18.8,1.1),qt(-18,1.1,-18.8,.9,.3),b.box(y.brick,-9.6,.5,-17.5,.5,1,5,{uv:1.5}),b.box(y.brick,-9.6,.5,-10.6,.5,1,3.6,{uv:1.5}),Yn(-22,-19.4,.9,11),b.box(y.tile,-.5,.02,-2.5,16,.04,12,{collide:!1,uv:2});let s=new D(new Fe(10.2,6.2),kt(3844312,{roughness:.05,metalness:.2,transparent:!0,opacity:.88}));s.rotation.x=-Math.PI/2,s.position.set(-.5,.22,-2.5),b.bake(s);let r=kt(8048872,{roughness:.3});b.box(r,-.5,0,-2.5,10.2,.02,6.2,{collide:!1});for(let[l,c,h,u]of[[-.5,-5.8,11,.4],[-.5,.8,11,.4],[-6,-2.5,.4,6.2],[5,-2.5,.4,6.2]])b.box(y.white,l,.18,c,h,.36,u,{surf:"concrete"});b.col(-5.6,0,-5.6,4.6,1,.6,{bullet:!1});for(let l of[-5.2,-2.6,0])Gs(-7.6,l,0);for(let l of[-4.6,-1])Gs(6.6,l,Math.PI);Sh(-7.6,-3.9,15227450),Sh(6.6,-2.8,15908912);for(let[l,c]of[[-3,-15],[3,-15],[-3,-10.6],[3,-10.6]])b.box(y.wood,l,1.4,c,.25,2.8,.25,{surf:"wood"});b.box(y.roof,0,2.95,-12.8,7,.25,5.4,{uv:2}),b.box(y.wood,0,.55,-15,6,1.1,.2,{surf:"wood"}),b.box(y.wood,-3,.55,-13.6,.2,1.1,2.8,{surf:"wood"}),b.box(y.wood,3,.55,-12,.2,1.1,2.8,{surf:"wood"}),b.box(y.paintwood,0,.55,-12.4,3,1.1,.6,{surf:"wood"}),b.box(y.tile,0,1.12,-12.4,3.2,.05,.7,{collide:!1});for(let l of[-1,0,1]){let c=new D(new mt(.2,.2,.7,12),y.darkTrim);c.position.set(l,.35,-11.5),b.bake(c)}{let l=new wn(16767136,4,7,1.6);l.position.set(0,2.6,-12.8),n.add(l)}On(-9,3.2,-4,4,1.5),On(1.5,3.2,6.5,4,1.5),b.box(y.concrete,11,.02,2.5,6,.04,7,{collide:!1,uv:2}),Pn(8,-1,6,0,3,-1,y.plaster,y.plaster,[_n(2.5,1.6)]),Pn(14,-1,6,0,3,1,y.plaster,y.plaster,[]),Mn(-1,8,14,0,3,-1,y.plaster,y.plaster,[Je(12.2,1.2)]),Mn(6,8,14,0,3,1,y.plaster,y.plaster,[{c:11,w:4.6,b:0,t:2.5}]),b.box(y.roof2,11,3.15,2.5,6.6,.3,7.6,{uv:2}),Hn(11,2.4,Math.PI/2,y.carRed),xr(13.6,.5,-Math.PI/2),b.box(kt(2775674,{roughness:.8}),15.8,.02,-13.3,13.4,.04,14.4,{collide:!1}),b.box(kt(11556410,{roughness:.8}),15.8,.025,-13.3,11,.04,12,{collide:!1});for(let l of[-19.3,-7.3])b.box(y.lineW,15.8,.05,l,11,.004,.1,{collide:!1});for(let l of[10.3,21.3])b.box(y.lineW,l,.05,-13.3,.1,.004,12,{collide:!1});b.box(y.lineW,15.8,.05,-13.3,11,.004,.1,{collide:!1}),vh(15.8,-20.2,0),vh(15.8,-6.4,Math.PI),b.col(15.7,0,-20.4,15.9,3.2,-20,{surf:"metal"}),b.col(15.7,0,-6.6,15.9,3.2,-6.2,{surf:"metal"}),Gp(9,-20.6,9,-6,3,[[-17,-15.4],[-10,-8.4]]),Gp(9,-6,22.6,-6,3,[[12,13.6],[18.6,20.2]]),gi(n,"B",We.B),ps(11,-18.6,0),ps(20.8,-11,Math.PI/2),qt(19.8,0,-16.6,1.1),qt(19.8,0,-15.5,1.1),qt(19.8,1.1,-16.05,1,.3),Zi(12.2,-11,2,15773728),Zi(12.9,-11,3,2779856),On(15,-3.5,22.6,-2.8,1.6),oi(7.2,-1.8,2779706),oi(7.2,-2.6,5921370),On(-7.5,-18.2,-4,-17.5,1.4),On(4,-18.2,7.5,-17.5,1.4),Yn(6.6,-19.4,.9,12),pi(-6.5,-8.6,2.4,1),pi(5.5,-8.6,2.4,1),b.box(y.concrete,0,.02,14,12,.04,13.2,{collide:!1,uv:2}),yv(0,12.8),Hn(-7.8,16.4,0,y.carWhite),Hn(8.4,17.2,0,y.carBlue,!0),On(-23.6,8.6,-12,9.4,1.6),On(12,8.6,22.6,9.4,1.6),pi(-10.2,12,1,2.6),pi(10.2,12,1,2.6),qt(-17,0,14.5,1.1),qt(-17,0,15.6,1.1),qt(16.5,0,13,1.1),Bn(18,17,0),Yn(-21.5,18.5,1,13),Yn(21,13,1,14),Yn(-14.5,19.2,.8,15);for(let[l,c,h]of[[-12,20.2,-1],[12,20.2,-1]])zs(l,c,h);let o=new It;Cn(31);for(let l=0;l<18;l++){let c=l/18*Math.PI*2,h=50+Pt()*10;La(o,Math.cos(c)*h,Math.sin(c)*h,-c,9,6+Math.round(Pt()*2)*3,8,["apt","concrete","office"][l%3])}b.bake(o);for(let l=0;l<24;l++){let c=l/24*Math.PI*2+.13;Yn(Math.cos(c)*(36+Pt()*6),Math.sin(c)*(34+Pt()*6),1.3+Pt()*.5,50+l)}b.colliders=b.colliders.filter(l=>l.min.x>-32&&l.max.x<32&&l.min.z>-30&&l.max.z<30),b.col(-40,0,-40,oe.minX-.6,20,40,{bullet:!1}),b.col(oe.maxX+.6,0,-40,40,20,40,{bullet:!1}),b.col(-40,0,-40,40,20,oe.minZ-.6,{bullet:!1}),b.col(-40,0,oe.maxZ+.6,40,20,40,{bullet:!1});let a=b.finish(n);return{colliders:b.colliders,meshes:a}}function mh(n,t,e,i,s=0){let r=Math.hypot(e-n,i-t),o=Math.atan2(i-t,e-n),a=(n+e)/2,l=(t+i)/2;for(let h of[.5,1])b.box(y.steel,a,s+h,l,r,.05,.05,{collide:!1,rotY:-o});let c=Math.ceil(r/.45);for(let h=0;h<=c;h++){let u=h/c,d=n+(e-n)*u,f=t+(i-t)*u;h%3===0&&b.box(y.steel,d,s+.5,f,.05,1,.05,{collide:!1}),b.col(d-.25,s,f-.25,d+.25,s+1.05,f+.25,{bullet:!1,surf:"metal"})}}function zp(n,t){let e=new It,i=new D(new zi(.75,3,6,14),kt(15233050,{roughness:.5}));i.rotation.x=Math.PI/2,i.scale.set(1,1,.75),i.position.y=1.4,e.add(i);let s=new D(et(1.3,.1,3.6,1),y.white);s.position.y=1.95,e.add(s);for(let r of[-1.6,1.6]){let o=new D(et(.12,1.8,.12,1),y.steel);o.position.set(.6,1.9,r),e.add(o);let a=new D(et(.9,.1,.1,1),y.steel);a.position.set(.2,2.8,r),e.add(a)}e.position.set(n,0,t),n<0&&(e.rotation.y=Math.PI),b.bake(e),b.col(n-.75,.8,t-2.2,n+.75,2,t+2.2,{surf:"metal"})}function Mv(n,t){let e=new D(new mt(1.35,1.4,.75,24),y.wood);e.position.set(n,.375,t),b.bake(e);let i=new D(new mt(1.15,1.15,.04,24),kt(5951712,{roughness:.05,metalness:.2}));i.position.set(n,.7,t),b.bake(i),b.col(n-1,0,t-1,n+1,.75,t+1,{surf:"wood"})}function vv(n){Cn(201);let t=new D(new Fe(400,400),kt(1989254,{roughness:.12,metalness:.35}));t.rotation.x=-Math.PI/2,t.position.y=-2.4,b.bake(t);let e=[[-9,21],[9,21],[9,-14],[6.5,-18.5],[2.8,-21.4],[-2.8,-21.4],[-6.5,-18.5],[-9,-14]],i=new Xn(e.map(([f,p])=>new ht(f,-p))),s=new aa(i);s.rotateX(-Math.PI/2),ri(s,.5,.5),s.translate(0,.012,0),b.addGeo(y.wood,s,new Jt);let r=new Jn(i,{depth:3.4,bevelEnabled:!1});r.rotateX(-Math.PI/2),r.translate(0,-3.4,0),b.addGeo(y.white,r,new Jt);let o=new Jn(i,{depth:.35,bevelEnabled:!1});o.rotateX(-Math.PI/2),o.scale(1.003,1,1.003),o.translate(0,-1.6,0),b.addGeo(kt(1718890),o,new Jt),Tn(-9,-14,-9,21,0),Tn(9,-14,9,21,0),Tn(-9,21,9,21,0),mh(9,-14,6.5,-18.5),mh(6.5,-18.5,2.8,-21.4),Tn(-2.8,-21.4,2.8,-21.4,0),mh(-2.8,-21.4,-6.5,-18.5),mh(-6.5,-18.5,-9,-14);let a=3.2;b.box(y.carpetB,0,.01,.5,10,.02,13,{collide:!1,uv:2}),Mn(-6,-5,5,0,a,-1,y.white,y.plaster,[Je(-2.6,1.4),_n(1.6,2.4,.9,2.4)]),Mn(7,-5,5,0,a,1,y.white,y.plaster,[Je(.8,2.4),_n(-3,1.6,.9,2.4)]),Pn(-5,-6,7,0,a,-1,y.white,y.plaster,[Je(-3.4,1.3),_n(.6,2,.9,2.4),Je(4.6,1.3)]),Pn(5,-6,7,0,a,1,y.white,y.plaster,[Je(-2,1.3),_n(1.8,2,.9,2.4),Je(5.2,1.3)]),Mn(.6,-5,5,0,a,1,y.plaster,y.plaster,[Je(-3.4,1.2),Je(2.6,1.2)]),b.box(y.white,0,a+.15,.7,10.6,.3,13.4,{uv:2}),b.box(y.wood,0,a+.31,.7,10.4,.02,13.2,{collide:!1,uv:2}),b.box(y.darkTrim,0,.55,-5.3,6,1.1,.8,{surf:"metal"}),b.box(y.screen,-1.2,1.15,-5.5,1.2,.5,.05,{collide:!1}),b.box(y.screen,1.2,1.15,-5.5,1.2,.5,.05,{collide:!1});{let f=new D(new $e(.35,.04,8,20),y.wood);f.position.set(0,1.35,-4.85),b.bake(f)}mi(0,-4.2,Math.PI),xr(4.6,-2,-Math.PI/2,1.2,1.6),xh(-3.8,3.5,Math.PI/2,y.fabricO),ms(-2.8,3.5,.7,1.2,.42),yh(-3,3.5,2.6,3.2,y.carpetR),b.box(y.paintwood,3.3,.55,3.6,.7,1.1,3.6,{surf:"wood"}),b.box(y.tile,3.3,1.12,3.6,.8,.05,3.7,{collide:!1}),xr(4.6,3.6,-Math.PI/2,1.6,1.9);for(let f of[2.4,3.6,4.8]){let p=new D(new mt(.2,.2,.75,12),y.darkTrim);p.position.set(2.5,.375,f),b.bake(p)}uo(0,1.8,6.85,Math.PI,y.paint1);for(let[f,p]of[[0,-2.5],[0,3.8]]){let g=new wn(16769208,5,9,1.6);g.position.set(f,2.8,p),n.add(g)}let l=a+.3;Tn(-5.3,-6,5.3,-6,l),Tn(-5.3,-6,-5.3,7.4,l),Tn(5.3,-6,5.3,7.4,l),Tn(-5.3,7.4,-4.15,7.4,l),Tn(-2.85,7.4,5.3,7.4,l),Eh(-3.5,7.4+9*.55,0,-1,l,1.2),b.box(y.white,1.5,l+1.2,-2,1.4,2.4,1.4,{surf:"metal",uv:1});{let f=new D(new mt(.1,.14,4.5,10),y.steel);f.position.set(1.5,l+4.6,-2),b.bake(f);let p=new D(et(2.2,.15,.3,1),y.darkTrim);p.position.set(1.5,l+6.2,-2),b.bake(p)}Gs(-2.5,3,0),Gs(-1.2,3,0),qt(3.5,l,4.5,1),zp(-8,-1.5),zp(8,2.5),qt(-6.4,0,4.5,1),qt(-6.4,1,4.5,.85,.3),qt(6.4,0,-4,1);for(let f of[-9,9.5])Nd(-8.3,f),Nd(8.3,f);let c=new D(new Fe(5.2,5.2),new ui({map:Ii("H",{w:256,h:256,size:170,color:"rgba(255,255,255,0.85)",draw:f=>{f.strokeStyle="rgba(240,192,32,0.9)",f.lineWidth=12,f.beginPath(),f.arc(128,128,118,0,7),f.stroke()}}),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));c.rotation.x=-Math.PI/2,c.position.set(0,.05,-15),n.add(c),gi(n,"A",We.A),qt(-7.6,0,-9.2,1.1),qt(-7.6,0,-10.3,1.1),qt(-7.6,1.1,-9.75,1,.3),qt(-3,0,-12.6,1.1),Zi(-6.8,-15.2,3,2779856),nn(-3.6,-8.4,1),gi(n,"B",We.B),Mv(7,-9.4),Gs(3.4,-14.6,Math.PI),Sh(7.4,-13.6,15227450),Zi(3.2,-9,2,15773728),b.box(y.darkTrim,0,.45,-19.6,2,.9,1,{surf:"metal"}),b.box(y.tile,0,.012,15,9,.02,7,{collide:!1,uv:2});let h=new D(new Fe(5.2,3.6),kt(3846368,{roughness:.05,metalness:.2}));h.rotation.x=-Math.PI/2,h.position.set(0,.32,15),b.bake(h);for(let[f,p,g,m]of[[0,13,5.8,.3],[0,17,5.8,.3],[-2.75,15,.3,3.7],[2.75,15,.3,3.7]])b.box(y.white,f,.2,p,g,.4,m,{surf:"concrete"});b.col(-2.6,0,13.1,2.6,1,16.9,{bullet:!1}),Gs(-6.2,12.6,0),Gs(6.2,12.6,0),Gs(-6.2,16.4,Math.PI),Sh(6.8,16.6,15908912),b.box(y.paintwood,-4.5,.55,19.4,3.2,1.1,.6,{surf:"wood"}),b.box(y.tile,-4.5,1.12,19.4,3.4,.05,.7,{collide:!1}),pi(4.6,19.6,2.4,.8),qt(6.8,0,9.8,1.1),qt(-7,0,9.4,1);for(let[f,p]of[[-3.2,9.6],[3.2,9.6]]){let g=new wn(16769208,3,7,1.6);g.position.set(f,2.6,p),n.add(g)}let u=new It;Cn(17);for(let f=0;f<7;f++){let p=f/7*Math.PI*2+.4,g=90+Pt()*30,m=new D(new $n(14+Pt()*10,10+Pt()*8,9),kt(4880970,{roughness:1,flatShading:!0}));m.position.set(Math.cos(p)*g,1,Math.sin(p)*g),u.add(m)}for(let f=0;f<12;f++){let p=Math.PI*1.15+f/12*.7,g=130;La(u,Math.cos(p)*g,Math.sin(p)*g,-p,10,12+Math.round(Pt()*6)*3,9,["office","apt","concrete"][f%3])}b.bake(u),b.col(-40,-5,-40,oe.minX-.6,20,40,{bullet:!1}),b.col(oe.maxX+.6,-5,-40,40,20,40,{bullet:!1}),b.col(-40,-5,-40,40,20,oe.minZ-.6,{bullet:!1}),b.col(-40,-5,oe.maxZ+.6,40,20,40,{bullet:!1});let d=b.finish(n);return{colliders:b.colliders,meshes:d}}var Da;function Bd(){return Da||(Da={stock:new ie({map:j.polymer.map,normalMap:j.polymer.normalMap,color:6975560,roughness:.75}),stockDark:new ie({map:j.polymer.map,normalMap:j.polymer.normalMap,color:2895398,roughness:.8}),metal:new ie({map:j.gunmetal.map,normalMap:j.gunmetal.normalMap,color:3816768,metalness:.85,roughness:.38}),metalDark:new ie({map:j.gunmetal.map,color:1842463,metalness:.8,roughness:.45}),bright:new ie({color:13159632,metalness:1,roughness:.2}),rubber:new ie({color:1315860,roughness:.95}),lens:new Wi({color:3170464,metalness:.9,roughness:.02,clearcoat:1,iridescence:1,iridescenceIOR:1.6,emissive:530480}),orange:new ie({color:15759898,roughness:.5}),brass:new ie({color:14198848,metalness:1,roughness:.25})},Da.decal=new ie({map:Ii("VW",{w:128,h:64,size:44,bg:"rgba(0,0,0,0)",color:"#f07a1a",weight:900}),transparent:!0,roughness:.6}),Da)}var ai=(n,t,e,i,s=16)=>{let r=new mt(n,t,e,s);return r.rotateX(Math.PI/2),new D(r,i)},Na=[{id:"olive",name:"\u30AA\u30EA\u30FC\u30D6"},{id:"camoWood",name:"\u30A6\u30C3\u30C9\u30E9\u30F3\u30C9"},{id:"camoDesert",name:"\u30C7\u30B6\u30FC\u30C8"},{id:"camoUrban",name:"\u30A2\u30FC\u30D0\u30F3"},{id:"camoCarrot",name:"\u30AD\u30E3\u30ED\u30C3\u30C8"},{id:"gold",name:"\u30B4\u30FC\u30EB\u30C9"}],wh={};function bv(n){return n==="olive"||!n?Bd().stock:(wh[n]||(wh[n]=n==="gold"?new ie({color:15251520,metalness:1,roughness:.22,map:j.polymer.map,normalMap:j.polymer.normalMap}):new ie({map:j[n].map,normalMap:j.polymer.normalMap,roughness:.7})),wh[n])}function Ua(n=1,t="olive"){let e=Bd(),i=bv(t),s=new It,r=(K,Ot,pe,Zt,me=s)=>(K.position.set(Ot,pe,Zt),me.add(K),K),o=n>0?18:8,a=[[-.36,-.012],[-.1,-.012],[.16,-.012],[.22,-.022],[.3,.006],[.52,.012],[.555,0],[.565,-.13],[.5,-.142],[.3,-.088],[.235,-.082],[.215,-.175],[.165,-.185],[.145,-.07],[-.3,-.062],[-.36,-.046]],l=new Xn;l.moveTo(a[0][0],a[0][1]);for(let K=1;K<a.length;K++)l.lineTo(a[K][0],a[K][1]);l.closePath();let c=new or;c.absellipse(.2,-.048,.022,.016,0,Math.PI*2,!1,.4),l.holes.push(c);let h=new Jn(l,{depth:.046,bevelEnabled:!0,bevelSize:.008,bevelThickness:.009,bevelSegments:n>0?3:1,curveSegments:n>0?10:4});h.translate(0,0,-.023),h.rotateY(-Math.PI/2);let u=h.attributes.uv;for(let K=0;K<u.count;K++)u.setXY(K,u.getX(K)*3,u.getY(K)*3);r(new D(h,i),0,0,0);let d=new D(new de(.05,.022,.16),e.stockDark);r(d,0,.022,.42);for(let K of[.36,.48])r(ai(.004,.004,.03,e.metal,6),0,.012,K).rotation.set(0,0,0);r(new D(new de(.058,.142,.022),e.rubber),0,-.066,.575);for(let K=0;K<6;K++)r(new D(new de(.06,.004,.03),e.stockDark),0,-.09-K*.015,.19-K*.004);for(let K=0;K<4;K++)for(let Ot of[-1,1])r(new D(new de(.004,.012,.04),e.stockDark),Ot*.032,-.035,-.28+K*.055);r(ai(.024,.024,.28,e.metal,o),0,.012,.02),r(new D(new de(.04,.012,.28),e.metal),0,.034,.02);for(let K=0;K<12;K++)r(new D(new de(.044,.006,.012),e.metalDark),0,.043,-.1+K*.022);r(new D(new de(.004,.018,.06),e.metalDark),.024,.016,-.01);let f=ai(.0105,.014,.66,e.metal,o);if(r(f,0,.012,-.44),n>0)for(let K=0;K<6;K++){let Ot=K/6*Math.PI*2,pe=new D(new de(.003,.003,.36),e.metalDark);pe.position.set(Math.cos(Ot)*.0125,.012+Math.sin(Ot)*.0125,-.45),s.add(pe)}let p=new It;r(p,0,.012,-.8),p.add(ai(.017,.017,.07,e.metalDark,o));for(let K of[-.018,0,.018])for(let Ot of[-1,1]){let pe=new D(new de(.005,.02,.008),e.rubber);pe.position.set(Ot*.016,0,K),p.add(pe)}let g=new qe;g.position.set(0,.012,-.84),s.add(g);let m=new It;r(m,0,.086,.03),m.add(ai(.017,.017,.24,e.metalDark,o));let x=ai(.03,.019,.07,e.metalDark,o);x.position.z=-.15,m.add(x);let M=ai(.031,.031,.035,e.metalDark,o);M.position.z=-.2,m.add(M);let w=new D(new Vi(.027,o),e.lens);w.position.z=-.218,w.rotation.y=Math.PI,m.add(w);let v=ai(.019,.024,.06,e.metalDark,o);v.position.z=.14,m.add(v);let R=ai(.025,.025,.04,e.rubber,o);R.position.z=.185,m.add(R);let C=new D(new Vi(.02,o),e.lens);C.position.z=.206,m.add(C);let _=new D(new mt(.012,.012,.03,o),e.metal);_.position.set(0,.026,-.01),m.add(_);let E=new D(new mt(.012,.012,.03,o),e.metal);E.rotation.z=Math.PI/2,E.position.set(.026,0,-.01),m.add(E);let P=new D(new mt(.01,.01,.024,o),e.metal);if(P.rotation.z=Math.PI/2,P.position.set(-.024,0,-.01),m.add(P),n>0)for(let K=0;K<12;K++){let Ot=new D(new de(.002,.03,.003),e.bright),pe=K/12*Math.PI*2;Ot.position.set(Math.cos(pe)*.0125,.026,-.01+Math.sin(pe)*.0125),m.add(Ot)}let S=ai(.0175,.0175,.006,e.orange,o);S.position.z=.1,m.add(S);for(let K of[-.07,.08]){let Ot=new D(new $e(.019,.005,6,o),e.metal);Ot.position.z=K,m.add(Ot);let pe=new D(new de(.03,.03,.018),e.metal);pe.position.set(0,-.03,K),m.add(pe);let Zt=new D(new mt(.004,.004,.036,6),e.bright);Zt.rotation.z=Math.PI/2,Zt.position.set(0,-.034,K),m.add(Zt)}let I=new It;r(I,0,.012,.12);let F=ai(.012,.012,.12,e.bright,10);F.position.z=-.03,I.add(F);let B=new It;B.position.z=0,I.add(B);let N=new D(new mt(.0045,.0045,.065,8),e.metal);N.rotation.z=Math.PI/2-.35,N.position.set(.032,-.012,0),B.add(N);let G=new D(new xe(.011,12,10),e.metalDark);G.position.set(.063,-.024,0),B.add(G);let q=ai(.014,.012,.03,e.metal,10);q.position.z=.04,I.add(q);let V=new qe;V.position.set(.063,-.024,0),B.add(V);let ct=new It;r(ct,0,-.04,0);let J=new D(new de(.032,.07,.085),e.metalDark);J.position.y=-.03,J.rotation.x=-.08,ct.add(J);let rt=new D(new de(.036,.012,.09),e.stockDark);rt.position.y=-.068,ct.add(rt);let ot=new D(new $e(.03,.005,6,16,Math.PI),e.metal);ot.rotation.set(0,Math.PI/2,Math.PI),r(ot,0,-.068,.11);let Lt=new D(new de(.006,.026,.006),e.bright);Lt.rotation.x=.3,r(Lt,0,-.062,.11);for(let K of[-1,1]){let Ot=ai(.005,.005,.2,e.metalDark,6);r(Ot,K*.012,-.07,-.2)}if(r(new D(new de(.04,.015,.03),e.metalDark),0,-.065,-.31),r(new D(new $e(.008,.002,4,10),e.metal),0,-.14,.48).rotation.y=Math.PI/2,n>0){let K=new D(new Fe(.08,.04),e.decal);K.position.set(.0325,-.04,.38),K.rotation.y=Math.PI/2,s.add(K)}let Kt=new qe;Kt.position.set(0,-.11,.19),s.add(Kt);let tt=new qe;tt.position.set(0,-.06,-.2),s.add(tt);let wt=new qe;wt.position.set(.03,.02,-.01),s.add(wt);let Bt=new qe;return Bt.position.set(0,.086,.35),s.add(Bt),s.traverse(K=>{K.isMesh&&(K.castShadow=!0,K.receiveShadow=!0)}),je(B),je(I,[B]),je(ct),je(p),je(m,[w]),je(s,[I,ct,m,p]),{root:s,muzzlePt:g,gripPt:Kt,forePt:tt,boltPt:V,ejectPt:wt,eyePt:Bt,lens:w,mag:ct,bolt:I,handle:B,setBolt(K){let Ot=K<.2?K/.2:K<.8?1:1-(K-.8)/.2,pe=K<.2?0:K<.5?(K-.2)/.3:K<.8?1-(K-.5)/.3:0;B.rotation.z=Ot*1.4,I.position.z=.12+pe*.09}}}var Th;function $p(){let n=Bd();Th||(Th=new mt(.006,.007,.06,8),Th.rotateX(Math.PI/2));let t=new D(Th,n.brass);return t.castShadow=!0,t}var go=[{id:"none",name:"\u306A\u3057"},{id:"helmet",name:"\u30D8\u30EB\u30E1\u30C3\u30C8"},{id:"beret",name:"\u30D9\u30EC\u30FC\u5E3D"},{id:"cap",name:"\u30AD\u30E3\u30C3\u30D7"},{id:"boonie",name:"\u30D6\u30FC\u30CB\u30FC\u30CF\u30C3\u30C8"}],jp={carrot:{name:"\u306B\u3093\u3058\u3093",color:"#f07a1a",height:1.05},tomato:{name:"\u30C8\u30DE\u30C8",color:"#d8231a",height:.82},potato:{name:"\u3058\u3083\u304C\u3044\u3082",color:"#c8a06a",height:.9},pepper:{name:"\u30D4\u30FC\u30DE\u30F3",color:"#2a8a1e",height:.88}},Ah={};function Ev(n){if(Ah[n])return Ah[n];let t=j[n],e={carrot:.6,tomato:.18,potato:.9,pepper:.15}[n],i=new Wi({map:t.map,normalMap:t.normalMap,roughness:e,clearcoat:n==="tomato"||n==="pepper"?.8:0,clearcoatRoughness:.2,normalScale:new ht(1,1)}),s=new ie({map:j["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4});return Ah[n]={skin:i,flesh:s},Ah[n]}var pn,mo,kd,Qp,tm,em,Oa,yr,nm;function im(){pn||(pn=new Wi({map:j.skin.map,normalMap:j.skin.normalMap,roughness:.5,color:15913144,sheen:.4,sheenColor:16751226}),mo=new ie({map:j.veggreen.map,normalMap:j.veggreen.normalMap,roughness:.6,side:cn}),kd=new Wi({color:16777215,roughness:.08,clearcoat:1}),Qp=new Wi({color:1118481,roughness:.05,clearcoat:1}),tm=new ie({color:2759184,roughness:.9}),em=new ie({color:3803656,roughness:.6}),Oa=new ie({map:j.polymer.map,normalMap:j.polymer.normalMap,color:5922880,roughness:.85}),yr=new ie({color:2763298,roughness:.8}),nm=new ie({color:15782080,roughness:.3}))}function Sv(n){let t=ve(n.length*31+7,4,3),e,i;if(n==="carrot"){let d=[];for(let p=0;p<=40;p++){let g=p/40,m=-.14+g*1.05,x=.03+Math.pow(g,.55)*.2;g>.88&&(x*=Math.sqrt(Math.max(0,1-Math.pow((g-.88)/.12,2)))*.92+.08),g===1&&(x=0),g===0&&(x=0),d.push(new ht(x,m))}e=new lr(d,40),i=.55}else if(n==="tomato"){e=new xe(.42,48,32);let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),g=d.getY(f),m=d.getZ(f),x=Math.atan2(m,p),M=g/.42,w=1+Math.cos(x*6)*.035*(1-Math.abs(M)),v=g>0?.82:.9,R=g>.3?-.06*Math.pow((g-.3)/.12,2):0;p*=w,m*=w,g=g*v+R,d.setXYZ(f,p,g+.36,m)}i=.42}else if(n==="potato"){e=new xe(.34,48,32);let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),g=d.getY(f),m=d.getZ(f),x=1+(t((Math.atan2(m,p)/Math.PI+1)*.5,(g/.34+1)*.5)-.5)*.32;d.setXYZ(f,p*x*1.05,g*1.38*x+.42,m*x*.92)}i=.6}else{let d=[];for(let p=0;p<=36;p++){let g=p/36,m=-.02+g*.82,x=.06+Math.sin(Math.min(1,g*1.25)*Math.PI*.5)*.3;g>.85&&(x*=Math.sqrt(Math.max(0,1-Math.pow((g-.85)/.15,2)))*.6+.4),g===1&&(x=.12),g===0&&(x=0),d.push(new ht(x,m))}d.push(new ht(0,.76)),e=new lr(d,48);let f=e.attributes.position;for(let p=0;p<f.count;p++){let g=f.getX(p),m=f.getY(p),x=f.getZ(p),M=Math.atan2(x,g),w=1+Math.cos(M*4)*.09-(m<.1?Math.cos(M*4)*.4*(.1-m):0);f.setXYZ(p,g*w,m,x*w)}i=.52}if(n!=="potato"){let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),g=d.getY(f),m=d.getZ(f),x=1+(t((Math.atan2(m,p)/Math.PI+1)*.5,g*.8+.2)-.5)*.06;d.setXYZ(f,p*x,g,m*x)}}e.computeVertexNormals();let s=e.toNonIndexed(),r=s.attributes.position,o=s.attributes.normal,a=s.attributes.uv,l={p:[],n:[],u:[]},c={p:[],n:[],u:[]};for(let d=0;d<r.count;d+=3){let p=(r.getY(d)+r.getY(d+1)+r.getY(d+2))/3>i?l:c;for(let g=0;g<3;g++)p.p.push(r.getX(d+g),r.getY(d+g),r.getZ(d+g)),p.n.push(o.getX(d+g),o.getY(d+g),o.getZ(d+g)),p.u.push(a.getX(d+g),a.getY(d+g))}let h=d=>{let f=new Ze;return f.setAttribute("position",new ne(d.p,3)),f.setAttribute("normal",new ne(d.n,3)),f.setAttribute("uv",new ne(d.u,2)),f},u=(d,f)=>{let p=0;for(let g=0;g<r.count;g++)if(Math.abs(r.getY(g)-d)<.04){let m=Math.atan2(r.getZ(g),r.getX(g));Math.abs((m-f+Math.PI*3)%(Math.PI*2)-Math.PI)<.25&&(p=Math.max(p,Math.hypot(r.getX(g),r.getZ(g))))}return p};return e.computeBoundingBox(),{upper:h(l),lower:h(c),split:i,radiusAt:u,top:e.boundingBox.max.y,bottom:e.boundingBox.min.y}}var Hd={};function Fa(n,t,e){let i=n+JSON.stringify(t);if(!Hd[i]){let r=[];for(let l=0;l<=16;l++){let c=l/16,h=0;for(let u=0;u<t.length-1;u++){let[d,f]=t[u],[p,g]=t[u+1];if(c>=d&&c<=p){let m=(c-d)/(p-d),x=m*m*(3-2*m);h=f+(g-f)*x}}r.push(new ht(h,-c*n))}r.unshift(new ht(1e-4,0)),r.push(new ht(1e-4,-n));let a=new lr(r,14);a.computeVertexNormals(),Hd[i]=a}let s=new D(Hd[i],e);return s.castShadow=!0,s}function Ba(n,t,e,i=10){let s=new D(new zi(n,t,4,i),e);return s.castShadow=!0,s}function sm(n,t){let e=new It,i=new D(new xe(.055,12,10),pn);i.scale.set(1,1.2,.55),i.position.y=-.05,i.castShadow=!0,e.add(i);let s=[];if(t>0){for(let a=0;a<4;a++){let l=new It;l.position.set((a-1.5)*.024,-.11,0);let c=Ba(.011,.035,pn,6);c.position.y=-.02,l.add(c);let h=new It;h.position.y=-.045,l.add(h);let u=Ba(.01,.028,pn,6);u.position.y=-.018,h.add(u),l.rotation.x=1.45,h.rotation.x=1.6,e.add(l),s.push(l)}let r=new It;r.position.set(n*.045,-.06,-.01),r.rotation.set(.9,0,n*.5);let o=Ba(.013,.04,pn,6);o.position.y=-.025,r.add(o),e.add(r)}else{let r=new D(new xe(.05,8,6),pn);r.position.set(0,-.11,.02),r.scale.set(1.1,.8,.9),e.add(r)}return e}function wv(){let n=new It,t=new D(new xe(.06,14,10),pn);t.scale.set(.95,.55,2),t.position.set(0,-.03,-.06),t.castShadow=!0,n.add(t);let e=new D(new xe(.05,10,8),pn);e.position.set(0,-.035,.02),n.add(e);for(let i=0;i<5;i++){let s=i===0?.019:.014-i*.0012,r=new D(new xe(s,8,6),pn);r.position.set((i-2)*.021,-.045+(i===0?.004:0),-.17+Math.abs(i-1)*.008),r.scale.set(1,.8,1.3),n.add(r);let o=new D(new xe(s*.6,6,4),nm);o.position.set(r.position.x,r.position.y+s*.45,r.position.z-s*.3),o.scale.set(1,.3,1),n.add(o)}return n}var rm=new U,om=new U,tw=new ln,am=new Jt,Rh=new U(0,-1,0);function Ch(n,t,e){if(n.lost)return;let i=n.sh,s=i.parent;s.updateWorldMatrix(!0,!1);let r=am.copy(s.matrixWorld).invert(),o=rm.copy(t).applyMatrix4(r).sub(i.position),a=om.copy(e).applyMatrix4(r).sub(i.position),l=n.upLen,c=n.foLen,h=o.length();h=Math.min(h,l+c-.001),h=Math.max(h,.05);let u=o.clone().normalize(),d=(l*l+h*h-c*c)/(2*l*h),f=Math.acos(Math.max(-1,Math.min(1,d))),p=a.clone().sub(u.clone().multiplyScalar(a.dot(u))).normalize(),g=u.clone().multiplyScalar(Math.cos(f)*l).add(p.multiplyScalar(Math.sin(f)*l));i.quaternion.setFromUnitVectors(Rh,g.clone().normalize());let m=o.clone().sub(g).applyQuaternion(i.quaternion.clone().invert());n.el.quaternion.setFromUnitVectors(Rh,m.normalize())}var Jp=new ln,Kp=new ln,ew=new Jt,Gd={grip:[new U(0,1,0),new U(0,0,1),new U(1,0,0)],fore:[new U(.7071,0,-.7071),new U(.7071,0,.7071),new U(0,-1,0)]},lm={};for(let n in Gd)lm[n]=new ln().setFromRotationMatrix(new Jt().makeBasis(...Gd[n]));function Ha(n,t,e){n.lost||(n.wr.parent.getWorldQuaternion(Jp),Kp.copy(t).multiply(lm[e]),n.wr.quaternion.copy(Jp.invert().multiply(Kp)))}function ka(n,t,e,i=1){let[,s,r]=Gd[e],o=s.clone().multiplyScalar(.065).add(r.clone().multiplyScalar(.03)).multiplyScalar(i);return n.clone().add(o.applyQuaternion(t))}function zd(n,t,e=.29,i=.26){im();let s=new It,r=Ba(.05,e-.07,pn);r.position.y=-e/2,s.add(r);let o=new It;o.position.y=-e,s.add(o);let a=new D(new xe(.048,10,8),pn);o.add(a);let l=Fa(i,[[0,.046],[.2,.056],[.6,.045],[1,.036]],pn);o.add(l);let c=new It;c.position.y=-i,o.add(c);let h=sm(n,1);c.add(h);let u=new D(new mt(.058,.058,.05,14),new ie({color:t,roughness:.7,map:j.carpet.map}));u.position.y=-.16,o.add(u);let d=new D(new xe(.058,12,10),Oa);return d.scale.set(1.02,1,.6),d.position.y=-.045,h.add(d),{side:n,sh:s,el:o,wr:c,hand:h,up:r,elb:a,upLen:e,foLen:i,lost:!1}}var Vs=class{constructor(t,e,i={}){im(),this.kind=t,this.team=e;let s=i.lod??1,r=i.camo||"olive",o=i.hat||"none",a=Ev(t);this.root=new It,this.hips=new It,this.hips.position.y=.8,this.root.add(this.hips),this.spine=new It,this.hips.add(this.spine);let l=Sv(t);this.geo=l,this.upper=new D(l.upper,a.skin),this.lower=new D(l.lower,a.skin);for(let P of[this.upper,this.lower])P.castShadow=!0,P.receiveShadow=!0,this.spine.add(P);this.bodyTop=l.top,this.split=l.split;let c=Math.max(.1,l.radiusAt(l.split,-Math.PI/2),l.radiusAt(l.split,0));this.cap=new D(new Vi(c*.98,24),a.flesh),this.cap.rotation.x=-Math.PI/2,this.cap.position.y=l.split,this.cap.visible=!1,this.spine.add(this.cap),this.splitR=c,this.face=new It,this.upper.add(this.face);let h={carrot:.68,tomato:.48,potato:.72,pepper:.6}[t],u=l.radiusAt(h,-Math.PI/2)||.25;this.eyes=[];for(let P of[-1,1]){let S=new It,I=P*.32;S.position.set(Math.sin(I)*u*.98,h,-Math.cos(I)*u*.98),S.rotation.y=-I;let F=new D(new xe(.055,16,12),kd);F.scale.set(1,1.15,.55),S.add(F);let B=new D(new xe(.03,12,10),Qp);B.position.set(P*-.005,-.004,-.024),B.scale.set(1,1.1,.6),S.add(B);let N=new D(new xe(.008,6,4),kd);N.position.set(.01,.012,-.045),S.add(N);let G=new D(new xe(.058,14,8,0,Math.PI*2,0,Math.PI*.42),a.skin);G.rotation.x=-.35,G.scale.set(1,1.15,.62),S.add(G);let q=Ba(.009,.06,tm,6);q.rotation.z=Math.PI/2+P*.35,q.position.set(0,.075,-.02),S.add(q),this.face.add(S),this.eyes.push({g:S,lid:G})}let d=new D(new $e(.04,.009,6,16,Math.PI*.8),em),f=h-.11,p=l.radiusAt(f,-Math.PI/2)||u;if(d.position.set(0,f,-p*.99),d.rotation.set(0,0,Math.PI+Math.PI*.1),this.face.add(d),this.top=new It,this.top.position.y=l.top-.02,this.upper.add(this.top),t==="carrot")for(let P=0;P<7;P++){let S=new D(new mt(.008,.014,.35,5),mo),I=P/7*Math.PI*2;S.position.set(Math.cos(I)*.03,.15,Math.sin(I)*.03),S.rotation.set(Math.sin(I)*.4,0,-Math.cos(I)*.4),this.top.add(S);let F=new D(new xe(.06,8,6),mo);F.scale.set(.5,1.4,.15),F.position.set(Math.cos(I)*.1,.33,Math.sin(I)*.1),F.rotation.set(Math.sin(I)*.5,I,-Math.cos(I)*.5),this.top.add(F)}else if(t==="tomato"||t==="pepper"){let P=t==="tomato"?6:5;for(let I=0;I<P;I++){let F=I/P*Math.PI*2,B=new D(new $n(.035,.2,4),mo);B.scale.set(1,1,.3),B.position.set(Math.cos(F)*.08,-.01,Math.sin(F)*.08),B.rotation.set(0,-F,Math.PI/2+.25),B.rotateOnAxis(new U(0,0,1),0),this.top.add(B)}let S=new D(new mt(.02,.03,t==="pepper"?.14:.08,8),mo);S.position.y=.05,S.rotation.z=.25,this.top.add(S)}else for(let P=0;P<2;P++){let S=new D(new $n(.015,.06,5),mo);S.position.set(.05-P*.1,0,.02),this.top.add(S)}let g={carrot:.8,tomato:.58,potato:.86,pepper:.7}[t],m=Math.max(l.radiusAt(g,0),l.radiusAt(g,-Math.PI/2))||.2;this.bandMat=new ie({color:e===0?2783968:14694954,roughness:.7,map:j.carpet.map});let x=new D(new $e(m*1.01,.022,8,32),this.bandMat);x.rotation.x=Math.PI/2,x.scale.set(1,1,1.6),x.position.y=g,this.upper.add(x);let M=new D(new xe(.03,8,6),this.bandMat);M.position.set(0,g,m*1.02),this.upper.add(M);for(let P of[-1,1]){let S=new D(new de(.04,.14,.01),this.bandMat);S.position.set(P*.025,g-.07,m*1.04),S.rotation.z=P*.3,this.upper.add(S)}if(o!=="none"){let P=l.top-(t==="carrot"?.13:t==="potato"?.12:.08),S=Math.max(l.radiusAt(P,0),l.radiusAt(P,Math.PI/2),.12)*1.08,I=new It;I.position.y=P,this.upper.add(I);let F=(B,N={})=>new ie({color:B,roughness:.75,map:j.polymer.map,normalMap:j.polymer.normalMap,...N});if(o==="helmet"){let B=new D(new xe(S,24,12,0,Math.PI*2,0,Math.PI*.5),F(5922880));B.scale.y=.85,I.add(B);let N=new D(new $e(S,.02,6,24),F(4870196));N.rotation.x=Math.PI/2,I.add(N);let G=new D(new de(.08,.05,.04),F(2236962));G.position.set(0,S*.55,-S*.8),I.add(G);for(let q of[-1,1]){let V=new D(new de(.015,.16,.03),yr);V.position.set(q*S*.95,-.07,0),I.add(V)}}else if(o==="beret"){let B=new D(new xe(S*1.1,20,10),F(e===0?2771594:9052192));B.scale.set(1,.3,1),B.position.set(S*.15,.04,0),B.rotation.z=-.2,I.add(B);let N=new D(new $e(S*.98,.018,6,24),yr);N.rotation.x=Math.PI/2,I.add(N);let G=new D(new Vi(.025,12),new ie({color:15253568,metalness:1,roughness:.3}));G.position.set(-S*.45,.03,-S*.88),G.rotation.y=Math.PI+.45,I.add(G)}else if(o==="cap"){let B=new D(new xe(S,20,10,0,Math.PI*2,0,Math.PI*.5),F(2763306));B.scale.y=.7,I.add(B);let N=new D(new mt(S*.75,S*.75,.015,20,1,!1,Math.PI*.5,Math.PI),F(2763306));N.position.set(0,0,-S*.55),N.scale.z=1.3,I.add(N);let G=new D(new Vi(.03,12),new ie({color:15759898}));G.position.set(0,S*.35,-S*.9),G.rotation.x=.4,G.rotation.y=Math.PI,I.add(G)}else if(o==="boonie"){let B=new D(new mt(S*.9,S*1.02,.12,20),F(6974020,{map:j.camoWood.map}));B.position.y=.05,I.add(B);let N=new D(new mt(S*1.6,S*1.6,.015,24),F(6974020,{map:j.camoWood.map,side:cn}));I.add(N)}I.traverse(B=>{B.isMesh&&(B.castShadow=!0)}),this.hat=I}let w={carrot:.12,tomato:.1,potato:.15,pepper:.12}[t],v=Math.max(l.radiusAt(w,0),l.radiusAt(w,Math.PI/2))||.2,R=new D(new $e(v*1.02,.025,6,32),yr);R.rotation.x=Math.PI/2,R.scale.set(1,1,1.5),R.position.y=w,this.lower.add(R);for(let P of[-.6,.6,2.4]){let S=new D(new de(.09,.1,.05),Oa);S.position.set(Math.sin(P)*v*1.08,w-.01,-Math.cos(P)*v*1.08),S.rotation.y=-P,this.lower.add(S)}{let P=(w+l.split)/2,S=Math.max(l.radiusAt(P,0),l.radiusAt(P,Math.PI/2),l.radiusAt(P+.1,0))||.2,I=Math.min(l.split-.08,P+.05),F=(l.radiusAt(I,Math.PI/2)||S)*1,B=new D(new de(.16,.2,.07),Oa);B.position.set(-.04,I,F+.03),this.lower.add(B);let N=new D(new mt(.005,.008,.32,5),yr);N.position.set(-.09,I+.24,F+.04),N.rotation.x=.15,this.lower.add(N);for(let G of[-1,1]){let q=new D(new de(.03,.22,.012),yr);q.position.set(-.04+G*.05,I,F+.07),this.lower.add(q)}}let C={carrot:.4,tomato:.32,potato:.42,pepper:.36}[t],_=Math.max(l.radiusAt(C,0),l.radiusAt(C,Math.PI))||.25;this.arms=[];for(let P of[-1,1]){let S=new It;S.position.set(P*(_+.01),C,0),this.spine.add(S);let I=new D(new xe(.05,10,8),pn);S.add(I);let F=Fa(.3,[[0,.048],[.15,.052],[.45,.058],[.8,.044],[1,.04]],pn);S.add(F);let B=new It;B.position.y=-.29,S.add(B);let N=Fa(.27,[[0,.04],[.2,.05],[.6,.04],[1,.032]],pn);B.add(N);let G=new D(new xe(.048,8,6),pn);B.add(G);let q=new It;q.position.y=-.26,B.add(q);let V=sm(P,s);q.add(V);let ct=new D(new mt(.052,.052,.05,12),this.bandMat);ct.position.y=-.08,S.add(ct),this.arms.push({side:P,sh:S,el:B,wr:q,up:F,fo:N,hand:V,ball:I,lost:!1,upLen:.29,foLen:.26})}this.legs=[];let E={carrot:.09,tomato:.14,potato:.12,pepper:.12}[t];for(let P of[-1,1]){let S=new It;S.position.set(P*E,.02,0),this.hips.add(S);let I=Fa(.42,[[0,.07],[.12,.088],[.45,.08],[.85,.062],[1,.055]],pn);I.position.y=0,S.add(I);let F=new It;F.position.y=-.4,S.add(F);let B=new D(new xe(.05,10,8),pn);B.scale.set(1,1.1,.95),F.add(B);let N=new D(new xe(.058,12,8,0,Math.PI*2,0,Math.PI*.55),Oa);N.rotation.x=-Math.PI/2,N.scale.set(1,1.25,.7),N.position.set(0,-.01,-.012),F.add(N);let G=new D(new mt(.06,.06,.02,12),yr);G.position.y=-.06,F.add(G);let q=Fa(.38,[[0,.055],[.08,.06],[.3,.07],[.55,.055],[.9,.04],[1,.042]],pn);q.position.y=0,F.add(q);let V=new It;V.position.y=-.36,F.add(V);let ct=wv();V.add(ct),this.legs.push({side:P,hp:S,kn:F,an:V,th:I,sh:q,foot:ct,lost:!1})}this.gun=Ua(s>0?1:0,r),this.aim=new It,this.aim.position.set(.04,C+.02,0),this.spine.add(this.aim),this.gun.root.position.set(.12,-.04,-.15),this.aim.add(this.gun.root),this.gun.root.scale.setScalar(.95),this.root.traverse(P=>{P.isMesh&&(P.castShadow=!0)});for(let P of this.arms)je(P.hand),je(P.wr),je(P.el,[P.wr]),je(P.sh,[P.el]);for(let P of this.legs)je(P.foot,[],{shadow:!1}),je(P.an),je(P.kn,[P.an]),je(P.hp,[P.kn]);je(this.top,[],{shadow:!1});for(let P of this.eyes)je(P.g,[P.lid],{shadow:!1});je(this.face,this.eyes.map(P=>P.g),{shadow:!1}),this.hat&&je(this.hat),je(this.upper,[this.face,this.top,this.hat]),je(this.lower,[]),this.phase=0,this.pitch=0,this.state="idle",this.crouch=0,this.prone=0,this.run=0,this.speed=0,this.air=0,this.blink=2,this.dead=!1,this.deadT=0,this.headGone=!1,this.boltT=0,this.ads=0,this.recoil=0,this.hitSpheres=[]}ikArm(t,e,i){Ch(t,e,i)}_unused(t,e,i){if(t.lost)return;let s=t.sh,r=s.parent;r.updateWorldMatrix(!0,!1);let o=am.copy(r.matrixWorld).invert(),a=rm.copy(e).applyMatrix4(o).sub(s.position),l=om.copy(i).applyMatrix4(o).sub(s.position),c=t.upLen,h=t.foLen,u=a.length();u=Math.min(u,c+h-.001),u=Math.max(u,.05);let d=a.clone().normalize(),f=(c*c+u*u-h*h)/(2*c*u),p=Math.acos(Math.max(-1,Math.min(1,f))),g=l.clone().sub(d.clone().multiplyScalar(l.dot(d))).normalize(),m=d.clone().multiplyScalar(Math.cos(p)*c).add(g.multiplyScalar(Math.sin(p)*c));s.quaternion.setFromUnitVectors(Rh,m.clone().normalize());let x=a.clone().sub(m).applyQuaternion(s.quaternion.clone().invert());t.el.quaternion.setFromUnitVectors(Rh,x.normalize())}update(t,e){let i=this,s=Math.min(1,i.speed/5.5);i.phase+=t*(i.speed*(i.prone>.5?1.2:2.1));let r=i.phase,l=(.8-i.crouch*.31)*(1-i.prone)+.28*i.prone+Math.abs(Math.sin(r))*.04*s*(1-i.prone);i.hips.position.y=l+(i.air>0?.05:0);let c=-.32*i.run*s-.12*i.crouch;i.hips.rotation.x=-i.prone*Math.PI*.5+0,i.spine.rotation.x=c*(1-i.prone)+i.pitch*.18*(1-i.prone)+i.prone*.3,i.spine.rotation.z=Math.sin(r)*.04*s,i.spine.position.y=0;for(let R of i.legs){if(R.lost)continue;let C=r+(R.side>0?Math.PI:0),_=1-i.crouch*.55,E=Math.sin(C)*(.5+.4*i.run)*s*_,P=Math.max(0,-Math.cos(C))*(.9+.5*i.run)*s*_+.05,S=i.crouch*(1-s*.7);R.side>0?(E+=i.crouch*1.05+S*.3,P+=i.crouch*1.05+S*.3):(E+=i.crouch*(1.1-S*.9),P+=i.crouch*(1.8-S*.05)),i.air>0&&(E=.6*(R.side>0?1:.3),P=1),E=E*(1-i.prone)+Math.sin(C)*.15*s*i.prone,P=P*(1-i.prone)+(.2+Math.max(0,Math.sin(C))*.6*s)*i.prone,R.hp.rotation.x=-E,R.kn.rotation.x=P,R.an.rotation.x=(-P*.4+E*.2)*(1-i.crouch)+i.crouch*(R.side>0?-(P-E):-.9*S)+i.prone*1.2,R.hp.rotation.z=R.side*.04}let h=i.run*s*(1-i.ads);i.aim.rotation.x=i.pitch+i.prone*Math.PI*.5-i.spine.rotation.x-h*.9-i.boltT*.25,i.aim.rotation.y=h*.9,i.aim.rotation.z=h*.4+i.boltT*.3,i.gun.root.position.z=-.15+i.recoil*.06,i.root.updateMatrixWorld(!0);let u=i.gun,d=i.arms[1],f=i.arms[0],p=u.gripPt.getWorldPosition(new U),g=u.forePt.getWorldPosition(new U),m=u.boltPt.getWorldPosition(new U),x=i.spine.localToWorld(new U(.6,-.6,.3)),M=i.spine.localToWorld(new U(-.6,-.6,.1)),w=u.root.getWorldQuaternion(new ln);i.ikArm(d,ka(i.boltT>0?p.clone().lerp(m,Math.min(1,i.boltT*1.5)):p,w,"grip"),x),i.ikArm(f,ka(g,w,"fore"),M),Ha(d,w,"grip"),Ha(f,w,"fore"),i.blink-=t;let v=i.blink<.12;i.blink<0&&(i.blink=2+Math.random()*3);for(let R=0;R<i.eyes.length;R++){let C=i.eyes[R],_=i.ads>.6&&R===0;C.lid.rotation.x=i.dead||v||_?.5:-.35+(i.ads>.6?.25:0)}if(i.dead){i.deadT+=t;let R=Math.min(1,i.deadT/.7);i.root.rotation.x=-i.fallDir*R*R*1.45,i.root.position.y=i.deadBaseY-0,i.hips.position.y=l*(1-R)+.25*R;for(let C of i.legs)C.kn.rotation.x*=1-R}}computeHitSpheres(){let t=this.hitSpheres;t.length=0;let e=this.spine,i=(r,o,a,l=e)=>{let c=l.localToWorld(o.clone());t.push({part:r,c,r:a})},s=this.geo;this.headGone||i("head",new U(0,(s.split+s.top)/2,0),Math.max(.17,(s.top-s.split)*.55)),i("bodyLow",new U(0,(s.bottom+s.split)*.5+.05,0),Math.max(.2,this.splitR*1.05)),i("bodyUp",new U(0,s.split-.12,0),Math.min(this.splitR,.22));for(let r of this.arms)r.lost||(i(r.side<0?"armL":"armR",new U(0,-.14,0),.07,r.sh),i(r.side<0?"armL":"armR",new U(0,-.13,0),.065,r.el));for(let r of this.legs)r.lost||(i(r.side<0?"legL":"legR",new U(0,-.2,0),.09,r.hp),i(r.side<0?"legL":"legR",new U(0,-.18,0),.075,r.kn));return t}};var Tv=["shot","shot_far","bolt1","bolt2","mag","boom","tick","beep","splat1","splat2","crunch","hit","ui","cloth","wind","win","lose","whoosh","bgm","step_concrete-001","step_concrete-002","step_grass-001","step_grass-004","step_wood-000","step_wood-001"],Dt={ctx:null,buf:{},master:null,listener:{x:0,y:0,z:0,yaw:0},bgmNode:null,windNode:null,async init(n="sfx/"){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination),await Promise.all(Tv.map(async i=>{try{let r=await(await fetch(n+i+".mp3")).arrayBuffer();this.buf[i]=await this.ctx.decodeAudioData(r)}catch{}}))},resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},play(n,t={}){let e=this.ctx;if(!e||!this.buf[n])return null;let i=e.createBufferSource();i.buffer=this.buf[n],i.playbackRate.value=(t.rate||1)*(t.vary?1+(Math.random()-.5)*t.vary:1);let s=e.createGain(),r=t.vol??1,o=s;if(t.pos){let a=this.listener,l=t.pos.x-a.x,c=t.pos.z-a.z,h=t.pos.y-a.y,u=Math.hypot(l,h,c),d=t.ref||4;if(r*=Math.min(1,d/Math.max(d,u))**(t.roll||1),t.maxDist&&u>t.maxDist)return null;let f=-Math.sin(a.yaw),g=- -Math.cos(a.yaw),m=f,x=u>.1?(l*g+c*m)/u:0;if(e.createStereoPanner){let M=e.createStereoPanner();M.pan.value=Math.max(-1,Math.min(1,-x*.85)),s.connect(M),o=M}if(u>15){let M=e.createBiquadFilter();M.type="lowpass",M.frequency.value=Math.max(900,9e3-u*120),o.connect(M),o=M}}return s.gain.value=r,i.connect(s),o.connect(this.master),i.loop=!!t.loop,i.start(0,t.offset||0),{src:i,g:s}},bgm(n){if(n&&!this.bgmNode&&(this.bgmNode=this.play("bgm",{vol:.32,loop:!0})),!n&&this.bgmNode){try{this.bgmNode.g.gain.setTargetAtTime(0,this.ctx.currentTime,.4);let t=this.bgmNode;setTimeout(()=>t.src.stop(),1500)}catch{}this.bgmNode=null}},wind(n){if(n&&!this.windNode&&(this.windNode=this.play("wind",{vol:.18,loop:!0})),!n&&this.windNode){try{this.windNode.src.stop()}catch{}this.windNode=null}}};var Ph=class{constructor(t){this.cs=.5,this.x0=oe.minX,this.z0=oe.minZ,this.w=Math.ceil((oe.maxX-oe.minX)/this.cs),this.h=Math.ceil((oe.maxZ-oe.minZ)/this.cs),this.free=new Uint8Array(this.w*this.h);let e=.42,i=t.filter(s=>s.move&&s.max.y>.42&&s.min.y<1.5);for(let s=0;s<this.h;s++)for(let r=0;r<this.w;r++){let o=this.x0+(r+.5)*this.cs,a=this.z0+(s+.5)*this.cs,l=!0;for(let c of i){let h=Math.max(c.min.x-o,0,o-c.max.x),u=Math.max(c.min.z-a,0,a-c.max.z);if(h*h+u*u<e*e){l=!1;break}}this.free[s*this.w+r]=l?1:0}}cell(t,e){return[Math.floor((t-this.x0)/this.cs),Math.floor((e-this.z0)/this.cs)]}isFree(t,e){return t>=0&&e>=0&&t<this.w&&e<this.h&&this.free[e*this.w+t]===1}center(t,e){return[this.x0+(t+.5)*this.cs,this.z0+(e+.5)*this.cs]}nearestFree(t,e){if(this.isFree(t,e))return[t,e];for(let i=1;i<8;i++)for(let s=-i;s<=i;s++)for(let r=-i;r<=i;r++)if(this.isFree(t+r,e+s))return[t+r,e+s];return[t,e]}path(t,e,i,s){let[r,o]=this.nearestFree(...this.cell(t,e)),[a,l]=this.nearestFree(...this.cell(i,s)),c=this.w,h=c*this.h,u=new Float32Array(h).fill(1e9),d=new Int32Array(h).fill(-1),f=new Uint8Array(h),p=[[0,o*c+r]];u[o*c+r]=0;let g=C=>{let _=C%c,E=C/c|0,P=Math.abs(_-a),S=Math.abs(E-l);return Math.max(P,S)+.41*Math.min(P,S)},m=l*c+a,x=0;for(;p.length&&x++<2e4;){let C=0;for(let S=1;S<p.length;S++)p[S][0]<p[C][0]&&(C=S);let[,_]=p[C];if(p[C]=p[p.length-1],p.pop(),f[_])continue;if(f[_]=1,_===m)break;let E=_%c,P=_/c|0;for(let S=-1;S<=1;S++)for(let I=-1;I<=1;I++){if(!I&&!S)continue;let F=E+I,B=P+S;if(!this.isFree(F,B)||I&&S&&(!this.isFree(E+I,P)||!this.isFree(E,P+S)))continue;let N=B*c+F;if(f[N])continue;let G=u[_]+(I&&S?1.414:1);G<u[N]&&(u[N]=G,d[N]=_,p.push([G+g(N),N]))}}if(d[m]===-1&&m!==o*c+r)return null;let M=[],w=m;for(;w!==-1;)M.push(this.center(w%c,w/c|0)),w=d[w];M.reverse();let v=[M[0]],R=0;for(;R<M.length-1;){let C=M.length-1;for(;C>R+1&&!this.lineFree(M[R],M[C]);)C--;v.push(M[C]),R=C}return v}lineFree(t,e){let i=Math.hypot(e[0]-t[0],e[1]-t[1]),s=Math.ceil(i/(this.cs*.5));for(let r=0;r<=s;r++){let o=r/s,[a,l]=this.cell(t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o);if(!this.isFree(a,l))return!1}return!0}randomFreeNear(t,e,i){for(let s=0;s<40;s++){let r=Math.random()*Math.PI*2,o=Math.random()*i,[a,l]=this.cell(t+Math.cos(r)*o,e+Math.sin(r)*o);if(this.isFree(a,l))return this.center(a,l)}return[t,e]}};var Li={snap:{id:"snap",name:"\u30B9\u30CA\u30C3\u30D7\u30D4\u30FC",tag:"\u901F\u3044\u30DC\u30EB\u30C8\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30D0\u30EA\u30B9\u30BF\u98A8\uFF09",mag:7,extMag:10,reserve:21,extReserve:30,bolt:1.26,ads:.35,reload:3.1,reloadEmpty:3.75,sprintOut:.25,sway:.8,stanceSway:!1,hip:1,adsMove:.44,move:1,dmg:{head:190,bodyUp:143,bodyMid:143,bodyLow:95,arm:143,leg:95},stats:{\u5A01\u529B:3,\u9023\u5C04:4,\u8997\u304D:5,\u5F3E\u6570:4},spec:"\u30B3\u30C3\u30AD\u30F3\u30B01.26\u79D2\u30FB\u8997\u304D0.35\u79D2\u30FB\u30EA\u30ED\u30FC\u30C93.1\u79D2\uFF08\u7A7A3.75\u79D2\uFF09",desc:`\u982D\u301C\u304A\u8179\u306E\u771F\u3093\u4E2D\u3068\u8155\u306A\u3089\u4E00\u6483\u3002
\u8170\u3068\u8DB3\u306F\u4E00\u6483\u306B\u306A\u3089\u306A\u3044\uFF08HP\u304C\u5C11\u3057\u6B8B\u308B\uFF09\u3002
\u8997\u304F\u306E\u3082\u30B3\u30C3\u30AD\u30F3\u30B0\u3082\u901F\u3044\u3002
\u3057\u3083\u304C\u307F\u30FB\u4F0F\u305B\u3067\u3082\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u306F\u6E1B\u3089\u306A\u3044\u3002`},root:{id:"root",name:"\u30EB\u30FC\u30C8\u30D0\u30B9\u30BF\u30FC .50",tag:"\u4E00\u6483\u91CD\u8996\u306E\u30DC\u30EB\u30C8\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08DSR\u98A8\uFF09",mag:5,extMag:7,reserve:25,extReserve:35,bolt:1.5,ads:.4,reload:3.4,reloadEmpty:4.5,sprintOut:.3,sway:1.35,stanceSway:!0,hip:1.35,adsMove:.4,move:.99,dmg:{head:196,bodyUp:147,bodyMid:147,bodyLow:147,arm:147,leg:98},stats:{\u5A01\u529B:5,\u9023\u5C04:2,\u8997\u304D:3,\u5F3E\u6570:2},spec:"\u30B3\u30C3\u30AD\u30F3\u30B01.5\u79D2\u30FB\u8997\u304D0.4\u79D2\u30FB\u30EA\u30ED\u30FC\u30C93.4\u79D2\uFF08\u7A7A4.5\u79D2\uFF09",desc:`\u8DB3\u4EE5\u5916\u306A\u3089\u3069\u3053\u3067\u3082\u4E00\u6483\u3002
\u8DB3\u3060\u306898\u30C0\u30E1\u30FC\u30B8\u3067\u30AE\u30EA\u30AE\u30EA\u6B8B\u308B\u3002
\u8997\u304F\u30FB\u30B3\u30C3\u30AD\u30F3\u30B0\u30FB\u30EA\u30ED\u30FC\u30C9\u304C\u9045\u304F\u3001\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u3068\u8170\u6483\u3061\u306E\u3070\u3089\u3064\u304D\u304C\u5927\u304D\u3044\u3002`}},Ga=[{id:"fmj",name:"\u8CAB\u901A\u5F3E\uFF08FMJ\uFF09",desc:"\u5A01\u529B\u306F\u4E0A\u304C\u3089\u306A\u3044\u3002\u58C1\u3084\u677F\u3092\u6483\u3061\u629C\u3051\u3066\u3001\u58C1\u8D8A\u3057\u3067\u3082\u5A01\u529B\u304C\u307B\u3068\u3093\u3069\u843D\u3061\u306A\u3044"},{id:"stab",name:"\u624B\u30D6\u30EC\u88DC\u6B63\uFF08\u5F3E\u9053CPU\u98A8\uFF09",desc:"\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u304C30%\u5C0F\u3055\u304F\u306A\u308B"},{id:"laser",name:"\u30EC\u30FC\u30B6\u30FC\u30B5\u30A4\u30C8",desc:"\u8170\u6483\u3061\u306E\u3070\u3089\u3064\u304D\u304C\u5C0F\u3055\u304F\u306A\u308B\uFF08\u8997\u304D\u306A\u304C\u3089\u3059\u3050\u6483\u3064\u30AF\u30A4\u30C3\u30AF\u30B9\u30B3\u30FC\u30D7\u304C\u5F53\u305F\u308A\u3084\u3059\u3044\uFF09"},{id:"fast",name:"\u30AF\u30A4\u30C3\u30AF\u30DE\u30B0",desc:"\u30EA\u30ED\u30FC\u30C9\u304C\u7D0435%\u901F\u304F\u306A\u308B",ex:"ext"},{id:"ext",name:"\u62E1\u5F35\u30DE\u30AC\u30B8\u30F3",desc:"\u5F3E\u304C\u5897\u3048\u308B\uFF08\u30B9\u30CA\u30C3\u30D7\u30D4\u30FC7\u219210\u767A\u30FB\u30EB\u30FC\u30C8\u30D0\u30B9\u30BF\u30FC5\u21927\u767A\uFF09\u3002\u30EA\u30ED\u30FC\u30C9\u306F10%\u9045\u304F\u306A\u308B",ex:"fast"}],za=[[{id:"none",name:"\u306A\u3057",desc:""},{id:"light",name:"\u8EAB\u8EFD",desc:"\u79FB\u52D5\u304C7%\u901F\u304F\u306A\u308B"}],[{id:"none",name:"\u306A\u3057",desc:""},{id:"tough",name:"\u6839\u6027",desc:"\u6483\u305F\u308C\u305F\u6642\u306E\u8996\u70B9\u306E\u30D6\u30EC\u304C\u5C0F\u3055\u3044"},{id:"hands",name:"\u65E9\u696D",desc:"\u6295\u3052\u7269\u3092\u7D20\u65E9\u304F\u6295\u3052\u3089\u308C\u308B"}],[{id:"none",name:"\u306A\u3057",desc:""},{id:"dex",name:"\u8EAB\u306E\u3053\u306A\u3057",desc:"\u30C0\u30C3\u30B7\u30E5\u306E\u5F8C\u3059\u3050\u8997\u3051\u308B"},{id:"cond",name:"\u6301\u4E45\u529B",desc:"\u30C0\u30C3\u30B7\u30E5\u304C2\u500D\u9577\u304F\u7D9A\u304F"},{id:"quiet",name:"\u5FCD\u3073\u8DB3",desc:"\u8DB3\u97F3\u304C\u304B\u306A\u308A\u5C0F\u3055\u304F\u306A\u308B"}]],cm=[{id:"none",name:"\u306A\u3057",desc:""},{id:"smoke",name:"\u30B9\u30E2\u30FC\u30AF",desc:"\u7159\u306712\u79D2\u9593\u3001\u8996\u7DDA\u3092\u3055\u3048\u304E\u308B"},{id:"flash",name:"\u30D5\u30E9\u30C3\u30B7\u30E5",desc:"\u8FD1\u304F\u3067\u898B\u305F\u76F8\u624B\u3092\u6700\u59273\u79D2\u3001\u76EE\u304F\u3089\u307E\u3057\u306B\u3059\u308B"}],hm=[{id:"none",name:"\u306A\u3057",desc:""},{id:"axe",name:"\u6295\u3052\u65A7",desc:"\u5C71\u306A\u308A\u306B\u98DB\u3076\u3002\u5F53\u305F\u308C\u3070\u3069\u3053\u3067\u3082\u4E00\u6483"}],Vd={rifle:"snap",att:["stab","laser"],perks:["light","tough","dex"],tac:"smoke",let:"axe"};function um(n){let t=Li[n.rifle]||Li.snap,e=s=>n.att.includes(s),i=(s,r)=>n.perks[s]===r;return{rifle:t.id,name:t.name,mag:e("ext")?t.extMag:t.mag,reserve:e("ext")?t.extReserve:t.reserve,bolt:t.bolt,ads:t.ads,reload:t.reload*(e("fast")?.65:e("ext")?1.1:1),reloadEmpty:t.reloadEmpty*(e("fast")?.65:e("ext")?1.1:1),sway:t.sway*(e("stab")?.7:1),stanceSway:t.stanceSway,hipSpread:t.hip*(e("laser")?.55:1),fmj:e("fmj"),dmg:t.dmg,adsMove:t.adsMove,move:t.move*(i(0,"light")?1.07:1),flinch:i(1,"tough")?.3:1,sprintOut:t.sprintOut*(i(2,"dex")?.4:1),stamina:i(2,"cond")?8:4,quiet:i(2,"quiet")?.35:1,throwT:i(1,"hands")?.15:.45,tac:n.tac||"none",let:n.let||"none"}}function dm(){let n=Math.random()<.55?"snap":"root",t=["fmj","stab","laser",Math.random()<.5?"fast":"ext"];return t.sort(()=>Math.random()-.5),{rifle:n,att:t.slice(0,2),perks:["light",Math.random()<.5?"tough":"hands",Math.random()<.5?"dex":"cond"],tac:Math.random()<.55?"smoke":"flash",let:"axe"}}var Di=[{id:"rookie",name:"\u30EB\u30FC\u30AD\u30FC",min:0,step:250,divs:4,fee:0,col:"#9a8a78",col2:"#5a4e42",diff:0},{id:"bronze",name:"\u30D6\u30ED\u30F3\u30BA",min:1e3,step:500,divs:4,fee:10,col:"#c07a4a",col2:"#6a3a1a",diff:0},{id:"silver",name:"\u30B7\u30EB\u30D0\u30FC",min:3e3,step:750,divs:4,fee:20,col:"#c8ccd4",col2:"#6a7080",diff:1},{id:"gold",name:"\u30B4\u30FC\u30EB\u30C9",min:6e3,step:1e3,divs:4,fee:30,col:"#f0c040",col2:"#8a6a10",diff:1},{id:"plat",name:"\u30D7\u30E9\u30C1\u30CA",min:1e4,step:1250,divs:4,fee:40,col:"#5ad0d0",col2:"#1a6a7a",diff:1},{id:"diamond",name:"\u30C0\u30A4\u30E4",min:15e3,step:1250,divs:4,fee:50,col:"#6aa0ff",col2:"#2a3aa0",diff:2},{id:"master",name:"\u30DE\u30B9\u30BF\u30FC",min:2e4,step:0,divs:1,fee:60,col:"#c070ff",col2:"#5a1a9a",diff:2},{id:"king",name:"\u30D9\u30B8\u30AD\u30F3\u30B0",min:3e4,step:0,divs:1,fee:75,col:"#ff4a3a",col2:"#7a0a0a",diff:2}],pm=["IV","III","II","I"];function fm(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function Wd(n){let[t,e]=n.split("-");return`\u30B7\u30FC\u30BA\u30F3 ${t}\u5E74${+e}\u6708`}function $i(n){let t=Di[0];for(let a of Di)n>=a.min&&(t=a);let e=Di.indexOf(t),i=Di[e+1],s=1,r=t.min,o=i?i.min:t.min+1e4;if(t.divs>1){let a=Math.min(t.divs-1,Math.floor((n-t.min)/t.step));s=a,r=t.min+a*t.step,o=r+t.step}return{tier:t,index:e,div:s,label:t.divs>1?`${t.name} ${pm[s]}`:t.name,lo:r,hi:o,progress:Math.max(0,Math.min(1,(n-r)/(o-r)))}}function Ih(){let n;try{n=JSON.parse(localStorage.getItem("vw_rank")||"null")}catch{n=null}n||(n={rp:0,season:fm(),best:0,badges:[],games:0,wins:0,kills:0,history:[]});let t=fm();if(n.season!==t){n.games>0&&n.badges.push({season:n.season,tier:$i(n.best).tier.id});let e=$i(n.rp).index;n.rp=e<=1?0:Di[Math.max(0,e-2)].min,Object.assign(n,{season:t,best:n.rp,games:0,wins:0,kills:0,history:[]}),Xd(n)}return n}function Xd(n){try{localStorage.setItem("vw_rank",JSON.stringify(n))}catch{}}function mm(n,t){let e=$i(n.rp).tier,i=[];i.push(["\u53C2\u52A0\u8CBB",-e.fee]),t.win&&i.push(["\u8A66\u5408\u306B\u52DD\u5229",100]),i.push([`\u53D6\u3063\u305F\u30E9\u30A6\u30F3\u30C9 \xD7${t.rounds}`,t.rounds*10]),i.push([`\u30AD\u30EB \xD7${t.kills}`,t.kills*12]),t.hs&&i.push([`\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8 \xD7${t.hs}`,t.hs*4]),t.mvp&&i.push(["MVP",20]);let s=i.reduce((a,l)=>a+l[1],0),r=e.min,o=Math.max(r,n.rp+s);return s=o-n.rp,{items:i,total:s,before:n.rp,after:o}}function xo(n,t=64,e=null){let i=Di.find(h=>h.id===n)||Di[0],s=Di.indexOf(i),r=Math.min(4,Math.floor(s/2)+1),o=s>=6?`<path d="M10 40 L2 30 L12 32 L4 20 L16 26 Z" fill="${i.col}" opacity=".9"/><path d="M90 40 L98 30 L88 32 L96 20 L84 26 Z" fill="${i.col}" opacity=".9"/>`:"",a=s===7?'<path d="M34 14 L40 4 L46 12 L50 2 L54 12 L60 4 L66 14 Z" fill="#ffd040" stroke="#7a4a00" stroke-width="1.5"/>':"",l="";for(let h=0;h<r;h++){let u=(h-(r-1)/2)*28;l+=`<path transform="rotate(${u} 50 56)" d="M50 56 C40 44 44 30 50 24 C56 30 60 44 50 56 Z" fill="#fff" opacity=".92"/>`}let c=e!==null&&i.divs>1?`<text x="50" y="86" text-anchor="middle" font-size="15" font-weight="900" fill="#fff" stroke="#000" stroke-width=".6">${pm[e]}</text>`:"";return`<svg width="${t}" height="${t}" viewBox="0 0 100 100"><defs><linearGradient id="g${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${i.col}"/><stop offset="1" stop-color="${i.col2}"/></linearGradient></defs>${o}<path d="M50 8 L86 20 L82 62 Q76 84 50 94 Q24 84 18 62 L14 20 Z" fill="url(#g${n})" stroke="#111" stroke-width="3"/><path d="M50 16 L78 25 L75 60 Q70 77 50 85 Q30 77 25 60 L22 25 Z" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="2"/>${l}<circle cx="50" cy="58" r="4" fill="${i.col2}"/>${a}${c}</svg>`}var z=n=>document.getElementById(n),ut=U,mn=(n,t,e)=>Math.max(t,Math.min(e,n)),Ya=(n,t,e)=>n+(t-n)*e,Ki=(n,t,e,i)=>Ya(n,t,1-Math.exp(-e*i)),Av=(n,t)=>{let e=t-n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Ui=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;window.__vwQuality=1;var xt=Object.assign({sens:1,sensAds:.55,fireMode:"release",quality:1,diff:1,bgm:1,kind:"carrot",tpp:0,hat:"helmet",camo:"olive",leftFire:0,winR:8,swap:4,killcam:1,map:"market",lo:Vd},(()=>{try{return JSON.parse(localStorage.getItem("vw_cfg")||"{}")}catch{return{}}})());window.__vwQuality=xt.quality;var yi=()=>{try{localStorage.setItem("vw_cfg",JSON.stringify(xt))}catch{}},Qe=new nh({antialias:xt.quality>0,powerPreference:"high-performance"});Qe.outputColorSpace=an;Qe.toneMapping=pa;Qe.toneMappingExposure=1.05;Qe.shadowMap.enabled=!0;Qe.shadowMap.type=xt.quality>0?uc:cr;Qe.autoClear=!1;z("game").appendChild(Qe.domElement);var xs=Math.min(devicePixelRatio,xt.quality===2?2:xt.quality===1?Ui?1.5:1.75:1);Qe.setPixelRatio(xs);Pp(Math.min(8,Qe.capabilities.getMaxAnisotropy()));var ye=new Ps,Ee=new Rn(72,1,.05,400);Ee.rotation.order="YXZ";var bs=new Ps,ji=new Rn(46,1,.01,10);function Bh(){let n=innerWidth,t=innerHeight;Qe.setSize(n,t),Ee.aspect=ji.aspect=n/t,Ee.updateProjectionMatrix(),ji.updateProjectionMatrix()}addEventListener("resize",Bh);Bh();function Rv(){let n=new xe(300,32,16),t=new di({side:gn,depthWrite:!1,fog:!1,uniforms:{sun:{value:new ut(.4,.55,.35).normalize()},top:{value:new re(.22,.48,.86)},hor:{value:new re(.72,.84,.95)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 sun; uniform vec3 top; uniform vec3 hor;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
      float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=n(p)*a;p*=2.03;a*=.5;}return s;}
      void main(){ float y=max(vP.y,0.); vec3 gnd=vec3(.55,.62,.55);
        vec3 c = mix(hor, top, pow(y, .55)); if(vP.y<0.) c = mix(hor, gnd, min(1.,-vP.y*4.));
        float sd = max(dot(vP, sun), 0.); c += vec3(1.,.9,.7)*pow(sd, 300.)*3. + vec3(1.,.85,.6)*pow(sd,8.)*.25;
        if(vP.y>0.02){ vec2 uv = vP.xz/(vP.y+.15)*1.6; float cl = smoothstep(.5,.85, fb(uv*1.2)); c = mix(c, vec3(1.)*(.85+.15*sd), cl*.75*smoothstep(.02,.2,vP.y)); }
        gl_FragColor = vec4(c,1.); }`}),e=new D(n,t);return e.renderOrder=-1,e}var Uh=Rv();ye.add(Uh);ye.fog=new Xo(12112100,60,210);var Tm=new to(13624575,5925440,.85);ye.add(Tm);var _i=new eo(16773336,2.6);_i.position.set(30,42,26);ye.add(_i);ye.add(_i.target);_i.castShadow=!0;var gm=xt.quality===2?4096:xt.quality===1?2048:1024;_i.shadow.mapSize.set(gm,gm);Object.assign(_i.shadow.camera,{left:-44,right:44,top:40,bottom:-40,near:5,far:120});_i.shadow.bias=-4e-4;_i.shadow.normalBias=.03;_i.shadow.camera.layers.enable(1);var xi=new wn(16760944,0,8,2);ye.add(xi);var xm={town:{top:[.22,.48,.86],hor:[.72,.84,.95],fog:12112100,sun:16773336,si:2.6,sp:[30,42,26],hemi:.85},market:{top:[.3,.55,.88],hor:[.95,.88,.78],fog:15260872,sun:16769720,si:2.4,sp:[-34,30,22],hemi:.9},station:{top:[.42,.55,.7],hor:[.8,.84,.86],fog:13159632,sun:16052458,si:2,sp:[18,46,-20],hemi:1.05},villa:{top:[.18,.46,.9],hor:[.8,.9,.98],fog:13163754,sun:16774368,si:2.8,sp:[-20,50,30],hemi:.9},ship:{top:[.14,.4,.86],hor:[.78,.9,1],fog:12376302,sun:16774888,si:2.9,sp:[26,48,18],hemi:.95},port:{top:[.3,.36,.62],hor:[1,.68,.42],fog:14723192,sun:16756848,si:2.3,sp:[44,18,-10],hemi:.75}};function Cv(n){let t=xm[n]||xm.town;Uh.material.uniforms.top.value.setRGB(...t.top),Uh.material.uniforms.hor.value.setRGB(...t.hor),ye.fog.color.setHex(t.fog),_i.color.setHex(t.sun),_i.intensity=t.si,_i.position.set(...t.sp),Tm.intensity=t.hemi,Uh.material.uniforms.sun.value.set(...t.sp).normalize(),sf.color.setHex(t.sun)}bs.add(new to(13624575,5925440,1));var sf=new eo(16773336,2);sf.position.set(1,2,1);bs.add(sf);var Hh=new wn(16760944,0,3,2);Hh.position.set(.1,-.05,-.9);bs.add(Hh);var Va=(n,t)=>{z("ldBar").style.width=n*100+"%",t&&(z("ldTxt").textContent=t)},ym,Mo,Am;async function Pv(){Va(.05,"\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u4F5C\u6210\u4E2D\u2026"),await new Promise(e=>setTimeout(e,30)),Ip(xt.quality),gs[xt.map]||(xt.map="market"),Va(.45,`\u30DE\u30C3\u30D7\u300C${gs[xt.map].name}\u300D\u3092\u5EFA\u8A2D\u4E2D\u2026`),await new Promise(e=>setTimeout(e,30));let t=new ao(Qe).fromScene(new rh,.04).texture;ye.environment=t,ye.environmentIntensity=.45,bs.environment=t,bs.environmentIntensity=.6,ym=qp(ye,xt.map),Mo=ym.colliders,Cv(xt.map),Rm=Mo.filter(e=>e.bullet),Va(.75,"CPU\u306E\u9053\u3092\u8A08\u7B97\u4E2D\u2026"),await new Promise(e=>setTimeout(e,30)),Am=new Ph(Mo),Va(.85,"\u52B9\u679C\u97F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026"),Uv(),y2(),Qe.compile(ye,Ee),Va(1,""),z("loading").classList.add("hide"),df()}var Rm=[],Iv=.3;function Lv(n){return n.stance==="prone"?.55:n.stance==="crouch"?1.2:1.72}function Ms(n,t,e,i=.22){let s=0;for(let r of Mo)r.move&&(n+i<r.min.x||n-i>r.max.x||t+i<r.min.z||t-i>r.max.z||r.max.y<=e+.46&&r.max.y>s&&(s=r.max.y));return s}function Dv(n,t,e){for(let i=0;i<2;i++)for(let s of Mo){if(!s.move||s.max.y<=n.y+.46||s.min.y>=n.y+t)continue;let r=mn(n.x,s.min.x,s.max.x),o=mn(n.z,s.min.z,s.max.z),a=n.x-r,l=n.z-o,c=a*a+l*l;if(!(c>=e*e))if(c>1e-8){let h=Math.sqrt(c);n.x+=a/h*(e-h),n.z+=l/h*(e-h)}else{let h=[n.x-s.min.x,s.max.x-n.x,n.z-s.min.z,s.max.z-n.z],u=h.indexOf(Math.min(...h));u===0?n.x=s.min.x-e:u===1?n.x=s.max.x+e:u===2?n.z=s.min.z-e:n.z=s.max.z+e}}}function Mr(n,t,e){let i=null;for(let s of Rm){let r=Dp(n,t,s,i?i.t:e);r&&r.t>1e-4&&(!i||r.t<i.t)&&(i={t:r.t,c:s,axis:r.axis,sign:r.sign})}return i}function Cm(n,t){let e=new ut().subVectors(t,n),i=e.length();return e.divideScalar(i),!Mr(n,e,i)}function rf(n,t,e,i){let s=n.x-e.x,r=n.y-e.y,o=n.z-e.z,a=s*t.x+r*t.y+o*t.z,l=s*s+r*r+o*o-i*i,c=a*a-l;if(c<0)return-1;let h=-a-Math.sqrt(c);return h>0?h:-1}var In={parts:[],decals:[],tracers:[],debris:[],glints:[]},So,Zs,kh,Kd,Pm,Nv=new ii(1,0);function Wa(n,t=128,e){let i=document.createElement("canvas");i.width=i.height=t;let s=i.getContext("2d");if(e)e(s,t);else{let o=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);n.forEach(([a,l])=>o.addColorStop(a,l)),s.fillStyle=o,s.fillRect(0,0,t,t)}let r=new Ti(i);return r.colorSpace=an,r}function Uv(){So=Wa(null,128,(n,t)=>{n.translate(t/2,t/2);for(let i=0;i<7;i++){n.rotate(Math.PI*2/7+Math.random()*.2);let s=n.createLinearGradient(0,0,t/2,0);s.addColorStop(0,"rgba(255,250,220,1)"),s.addColorStop(.4,"rgba(255,190,80,.8)"),s.addColorStop(1,"rgba(255,120,20,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(0,-6),n.lineTo(t/2*(.6+Math.random()*.4),0),n.lineTo(0,6),n.fill()}let e=n.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,240,1)"),e.addColorStop(1,"rgba(255,200,100,0)"),n.fillStyle=e,n.fillRect(-30,-30,60,60)}),Zs=Wa([[0,"rgba(220,220,220,.55)"],[.5,"rgba(200,200,200,.25)"],[1,"rgba(200,200,200,0)"]]),kh=Wa(null,128,(n,t)=>{n.fillStyle="#fff",n.beginPath(),n.arc(64,64,26,0,7),n.fill();for(let e=0;e<16;e++){let i=Math.random()*7,s=20+Math.random()*38,r=3+Math.random()*9;n.beginPath(),n.arc(64+Math.cos(i)*s,64+Math.sin(i)*s,r,0,7),n.fill(),n.lineWidth=r*.8,n.strokeStyle="#fff",n.beginPath(),n.moveTo(64,64),n.lineTo(64+Math.cos(i)*s,64+Math.sin(i)*s),n.stroke()}}),Kd=Wa([[0,"rgba(10,8,6,1)"],[.25,"rgba(20,16,12,.95)"],[.4,"rgba(60,50,40,.5)"],[1,"rgba(60,50,40,0)"]],64),Pm=Wa(null,128,(n,t)=>{let e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(200,230,255,.9)"),e.addColorStop(1,"rgba(150,200,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128),n.fillStyle="rgba(255,255,255,.9)",n.fillRect(0,62,128,4),n.fillRect(62,0,4,128)})}function Mi(n,t,e,i,s={}){let r=new rr({map:n,transparent:!0,depthWrite:!1,blending:s.add?ur:Bs,color:s.color||16777215,opacity:s.opacity??1,fog:!0}),o=new Zr(r);return o.position.copy(t),o.scale.setScalar(e),r.rotation=Math.random()*6.28,(s.scene||ye).add(o),In.parts.push({o,life:i,max:i,vel:s.vel||new ut,grow:s.grow||0,sprite:!0,g:s.g||0,scene:s.scene||ye,fade:!0}),o}var qd={};function Fv(n){return qd[n]||(qd[n]=new ie({color:n,roughness:.4})),qd[n]}function vs(n,t,e,i,s=.03,r=.8,o){for(let a=0;a<e;a++){let l=new D(Nv,Fv(t));l.position.copy(n),l.scale.setScalar(s*(.5+Math.random()));let c=new ut(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(i*(.4+Math.random()));o&&c.addScaledVector(o,i*.6),ye.add(l),In.parts.push({o:l,life:r*(.6+Math.random()*.6),max:r,vel:c,g:9.8,spin:new ut(Math.random(),Math.random(),Math.random()).multiplyScalar(10),bounce:!0})}}function Za(n,t,e,i,s=16777215,r=1){let o=new D(new Fe(i,i),new ui({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,color:s,opacity:r,fog:!0}));if(o.position.copy(t).addScaledVector(e,.01),o.lookAt(t.clone().add(e)),o.rotateZ(Math.random()*6.28),ye.add(o),In.decals.push(o),In.decals.length>60){let a=In.decals.shift();ye.remove(a),a.geometry.dispose(),a.material.dispose()}}var of=new mt(.012,.012,1,6,1,!0);of.rotateX(Math.PI/2);of.translate(0,0,.5);function Ov(n,t){let e=new D(of,new ui({color:16769184,transparent:!0,opacity:.8,blending:ur,depthWrite:!1}));e.position.copy(n),e.lookAt(t),e.scale.set(1,1,n.distanceTo(t)),ye.add(e),In.parts.push({o:e,life:.12,max:.12,vel:new ut,fadeMat:!0})}function Bv(n){for(let t=In.parts.length-1;t>=0;t--){let e=In.parts[t];if(e.life-=n,e.life<=0){(e.scene||ye).remove(e.o),(e.sprite||e.fadeMat)&&e.o.material.dispose(),In.parts.splice(t,1);continue}e.g&&(e.vel.y-=e.g*n),e.o.position.addScaledVector(e.vel,n),e.bounce&&e.o.position.y<Ms(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01&&(e.o.position.y=Ms(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01,e.vel.multiplyScalar(.4),e.vel.y=Math.abs(e.vel.y)*.3),e.spin&&(e.o.rotation.x+=e.spin.x*n,e.o.rotation.y+=e.spin.y*n),e.grow&&e.o.scale.multiplyScalar(1+e.grow*n);let i=e.life/e.max;(e.sprite||e.fadeMat)&&(e.o.material.opacity=(e.fade||e.fadeMat?i:1)*(e.o.material.userData.op??1))}for(let t of In.debris){if(t.rest)continue;t.vel.y-=9.8*n,t.o.position.addScaledVector(t.vel,n),t.o.rotation.x+=t.av.x*n,t.o.rotation.y+=t.av.y*n,t.o.rotation.z+=t.av.z*n;let e=Ms(t.o.position.x,t.o.position.z,t.o.position.y+.2,.02)+(t.r||.03);t.o.position.y<e&&(t.o.position.y=e,Math.abs(t.vel.y)<.8?(t.vel.set(0,0,0),t.av.multiplyScalar(0),t.rest=!0):(t.vel.y=-t.vel.y*.35,t.vel.x*=.6,t.vel.z*=.6,t.av.multiplyScalar(.6),t.splat&&!t.splatted&&(t.splatted=!0,Za(kh,new ut(t.o.position.x,e-(t.r||.03)+.01,t.o.position.z),new ut(0,1,0),.4+Math.random()*.4,t.splat,.85)),t.snd&&Dt.play(t.snd,{pos:t.o.position,vol:.4,vary:.3,ref:3})))}}function af(){for(let n of In.debris)n.o.parent&&n.o.parent.remove(n.o);In.debris.length=0;for(let n of In.decals)ye.remove(n),n.geometry.dispose(),n.material.dispose();In.decals.length=0}function vo(n,t,e,i={}){if(In.debris.push({o:n,vel:t,av:e,r:i.r,splat:i.splat,snd:i.snd}),In.debris.length>160){let s=In.debris.shift();s.o.parent&&s.o.parent.remove(s.o)}}var Qi={carrot:15759898,tomato:13113358,potato:15259808,pepper:6991930},Re=[],pt=null,Ni={carrot:"\u306B\u3093\u3058\u3093",tomato:"\u30C8\u30DE\u30C8",potato:"\u3058\u3083\u304C\u3044\u3082",pepper:"\u30D4\u30FC\u30DE\u30F3"},qs=class{constructor(t,e,i,s){this.kind=t,this.team=e,this.isPlayer=i,this.name=s,this.pos=new ut,this.vel=new ut,this.yaw=0,this.pitch=0,this.alive=!0,this.hp=100,this.stance="stand",this.sprint=!1,this.ads=0,this.adsWant=!1,this.mag=5,this.reserve=20,this.boltT=0,this.reloadT=0,this.needBolt=!1,this.onGround=!0,this.slideT=0,this.slideDir=new ut,this.moveAmt=0,this.stepAcc=0,this.lastShotT=-9,this.kills=0,this.hs=0,this.shots=0,this.hits=0,this.lostArm=[!1,!1],this.lostLeg=[!1,!1],this.revealT=0,this.spotT=0,this.hat=i?xt.hat:go[1+Math.floor(Math.random()*(go.length-1))].id,this.camo=i?xt.camo:Na[Math.floor(Math.random()*4)].id,this.deaths=0,this.score=0,this.lo=i?xt.lo:dm(),this.st=um(this.lo),this.mag=this.st.mag,this.reserve=this.st.reserve,this.eyeH=1.58,this.stanceT=0,this.stamina=this.st.stamina,this.sprintOutT=0,this.flinch=0,this.veg=new Vs(t,e,{lod:1,hat:this.hat,camo:this.camo}),ye.add(this.veg.root),i&&this.setFirstPerson(!xt.tpp)}setFirstPerson(t){this.veg.root.traverse(e=>{e.layers.set(t?1:0)})}eye(){return new ut(this.pos.x,this.pos.y+this.eyeH,this.pos.z)}targetEye(){return(this.stance==="prone"?.42:this.stance==="crouch"?1.12:1.58)-(this.slideT>0?.45:0)}dir(){return new ut(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}dispose(){ye.remove(this.veg.root)}};function lf(n){return n.alive&&n.stanceT<=0&&n.boltT<=0&&n.reloadT<=0&&n.mag>0&&!(n.lostArm[0]&&n.lostArm[1])&&Y.phase!=="pre"&&Y.phase!=="post"}function cf(n,t){if(!lf(n)){n.mag<=0&&n.reloadT<=0&&vr(n);return}n.mag--,n.shots++,n.lastShotT=Y.time,n.revealT=2.5;let e=n.ads>.95?6e-4:Ya(.09*n.st.hipSpread,.006,Math.pow(n.ads,2));e+=Math.min(1,n.vel.length()/5)*(n.ads>.9?.012:.03)+(n.onGround?0:.05)+(n.lostArm[0]||n.lostArm[1]?.03:0),n.stance==="prone"&&n.ads>.9&&(e*=.5);let i=t.clone();e>0&&(i.x+=(Math.random()-.5)*e*2,i.y+=(Math.random()-.5)*e*2,i.z+=(Math.random()-.5)*e*2,i.normalize());let s=n.eye(),r=kv(s,i,n),o=n.isPlayer&&!xt.tpp&&n.ads<.9?zt.gun.muzzlePt.getWorldPosition(new ut):n.veg.gun.muzzlePt.getWorldPosition(new ut),a=o;if(n.isPlayer&&!xt.tpp&&(a=s.clone().addScaledVector(i,.9).add(new ut(0,-.12,0))),Ov(a,r.point),n.isPlayer&&!xt.tpp||(Mi(So,o,.7,.06,{add:!0}),xi.position.copy(o),xi.intensity=30,setTimeout(()=>xi.intensity=0,50)),Mi(Zs,n.isPlayer&&!xt.tpp?a:o,.4,1.2,{grow:1.5,vel:new ut(0,.4,0),opacity:.6}),n.isPlayer)Dt.play("shot",{vol:1,vary:.06}),_2();else{let l=n.pos.distanceTo(pt.pos);Dt.play(l>25?"shot_far":"shot",{pos:n.eye(),vol:1,ref:6,roll:.8,vary:.05})}for(let l of Re)!l.isPlayer&&l.alive&&l.team!==n.team&&l.pos.distanceTo(n.pos)<70&&l.ai&&(l.ai.heard={pos:n.pos.clone(),t:4});return n.needBolt=!0,n.boltT=n.st.bolt,n.boltPlayed=0,n.isPlayer&&n.ads>.5&&(n.kickedOut=!0),r}function Hv(n){let t=n.max.x-n.min.x,e=n.max.y-n.min.y,i=n.max.z-n.min.z;return Math.min(t,e,i)<=.45}function kv(n,t,e){let i=Mr(n,t,200),s=0;if(i&&e&&e.st&&e.st.fmj&&Hv(i.c)){let l=new ut;l.setComponent(i.axis,i.sign);let c=n.clone().addScaledVector(t,i.t);Za(Kd,c,l,.09),vs(c,10132112,5,3,.02,.5,l);let h=Mr(n.clone().addScaledVector(t,i.t+.5),t,200),u=h?h.t+.5+i.t:200;s=1,i=h?Object.assign({},h,{t:u}):null}let r=i?i.t:200,o=null;for(let l of Re){if(l===e||!l.alive&&!l.ragdollHit||!l.alive||l.pos.distanceTo(n)>r+3)continue;let c=null,h=-1;for(let u of l.veg.computeHitSpheres()){let d=rf(n,t,u.c,u.r);if(d>0&&d<r){u.part==="head"&&(h=d);let f=u.part;f==="bodyLow"&&n.y+t.y*d>u.c.y&&(f="bodyMid"),(!c||d<c.t)&&(c={f:l,part:f,t:d})}}c&&(h>0&&h-c.t<.3&&(c={f:l,part:"head",t:h}),r=c.t,o=c)}let a=n.clone().addScaledVector(t,r);if(o)return Gv(o.f,o.part,e,t,a,s),{point:a,hit:o};if(i){let l=new ut;l.setComponent(i.axis,i.sign),Za(Kd,a,l,.09);let c={wood:9071178,metal:13158600,concrete:11053216,grass:5929530,carpet:8018522}[i.c.surf]||10132112;vs(a,c,6,3,.02,.6,l),Mi(Zs,a,.3,.6,{grow:2,vel:l.clone().multiplyScalar(.5),color:c,opacity:.7}),i.c.surf==="metal"&&Mi(So,a,.18,.05,{add:!0}),Dt.play("hit",{pos:a,vol:.25,ref:3,rate:.6})}else if(t.y<0){let l=(0-n.y)/t.y;if(l>0&&l<200){let c=n.clone().addScaledVector(t,l);return vs(c,5925434,5,2.5,.02,.5,new ut(0,1,0)),Mi(Zs,c,.4,.7,{grow:2,color:10127978}),{point:c}}}return{point:a}}function Gv(n,t,e,i,s,r=0){if(!n.alive||Y.mode==="range"&&n.isPlayer)return;let o=Qi[n.kind];vs(s,o,14,4,.03,.9,i.clone().multiplyScalar(.6)),Mi(Zs,s,.5,.4,{color:o,grow:2.5,opacity:.9}),Dt.play(Math.random()<.5?"splat1":"splat2",{pos:s,vol:.9,ref:5,vary:.2});let a=Mr(s,i,4);if(a){let d=new ut;d.setComponent(a.axis,a.sign),Za(kh,s.clone().addScaledVector(i,a.t),d,.6+Math.random()*.4,o,.9)}else Za(kh,new ut(s.x+i.x*1.5,Ms(s.x,s.z,s.y)+.02,s.z+i.z*1.5),new ut(0,1,0),.9,o,.85);let l=0,c=!1,h=e&&e.st?e.st.dmg:Li.snap.dmg,u=r?e&&e.st&&e.st.fmj?.97:.8:1;if(t==="head"?(l=h.head*u,c=!0):t==="bodyUp"?l=h.bodyUp*u:t==="bodyMid"?l=h.bodyMid*u:t==="bodyLow"||t==="body"?l=h.bodyLow*u:t==="armL"||t==="armR"?(l=h.arm*u,zv(n,t==="armL"?0:1,i)):(l=h.leg*u,Vv(n,t==="legL"?0:1,i)),n.hp-=l,n.hurtT=0,e&&(e.hits++,e.isPlayer&&Im(n.hp<=0)),n.isPlayer&&Yv(e?e.pos:s),n.ai&&(n.ai.heard={pos:e?e.pos.clone():s.clone(),t:5},n.ai.threat=e),n.hp<=0)Wh(n,e,c,i,t);else if(n.isPlayer){let d=.09*n.st.flinch;n.pitch=mn(n.pitch+d*(.6+Math.random()*.6),-1.35,1.35),n.yaw+=(Math.random()-.5)*d*1.4,Ws=Math.max(Ws,.6*n.st.flinch),z("vign").style.opacity=.9,setTimeout(()=>z("vign").style.opacity=n.hp<50?.5:0,400),Xv(Qi[n.kind])}}function zv(n,t,e){if(n.lostArm[t])return;n.lostArm[t]=!0;let i=n.veg.arms[t];i.lost=!0;let s=i.sh.getWorldPosition(new ut),r=i.sh.getWorldQuaternion(new ln);ye.attach(i.sh),vo(i.sh,e.clone().multiplyScalar(3).add(new ut((Math.random()-.5)*2,2.5,(Math.random()-.5)*2)),new ut(Math.random()*8,Math.random()*8,Math.random()*8),{r:.05,splat:Qi[n.kind],snd:"splat2"});let o=new D(new xe(.05,10,8),hf(n.kind));o.position.copy(i.sh.position),n.veg.spine.add(o),o.position.set(i.side*n.veg.splitR,i.sh.position.y,0),o.position.copy(n.veg.spine.worldToLocal(s.clone()));for(let a=0;a<6;a++)setTimeout(()=>n.veg.spine&&vs(o.getWorldPosition(new ut),Qi[n.kind],3,1.5,.02,.6),a*120);n.isPlayer&&Ja("","\u8155\u3092\u5931\u3063\u305F\uFF01 \u72D9\u3044\u304C\u30D6\u30EC\u308B")}function Vv(n,t,e){if(n.lostLeg[t])return;n.lostLeg[t]=!0;let i=n.veg.legs[t];i.lost=!0,ye.attach(i.hp),vo(i.hp,e.clone().multiplyScalar(2.5).add(new ut((Math.random()-.5)*2,2.2,(Math.random()-.5)*2)),new ut(Math.random()*7,Math.random()*7,Math.random()*7),{r:.06,splat:Qi[n.kind],snd:"splat1"});let s=new D(new xe(.06,10,8),hf(n.kind));n.veg.hips.add(s),s.position.set(i.side*.1,0,0),n.lostLeg[0]&&n.lostLeg[1]&&(n.stance="prone"),n.isPlayer&&Ja("","\u811A\u3092\u5931\u3063\u305F\uFF01 \u52D5\u304D\u304C\u9045\u304F\u306A\u308B")}var Yd={};function hf(n){return Yd[n]||(Yd[n]=new ie({map:j["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4})),Yd[n]}function Wv(n,t){let e=n.veg;e.headGone=!0;let i=e.upper.localToWorld(new ut(0,(e.geo.split+e.geo.top)/2,0));e.upper.visible=!1,e.cap.visible=!0;let s=e.upper.material,r=hf(n.kind);for(let o=0;o<16;o++){let a=new ii(.05+Math.random()*.08,1),l=a.attributes.position;for(let h=0;h<l.count;h++)l.setXYZ(h,l.getX(h)*(.6+Math.random()*.8),l.getY(h)*(.4+Math.random()*.5),l.getZ(h)*(.6+Math.random()*.8));a.computeVertexNormals();let c=new D(a,[s,r][o%2]);c.castShadow=!0,c.position.copy(i).add(new ut((Math.random()-.5)*.2,(Math.random()-.5)*.2,(Math.random()-.5)*.2)),ye.add(c),vo(c,t.clone().multiplyScalar(4+Math.random()*4).add(new ut((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)),new ut(Math.random()*15,Math.random()*15,Math.random()*15),{r:.04,splat:Math.random()<.5?Qi[n.kind]:0,snd:o<3?"splat1":null})}for(let o of e.eyes){let a=o.g.getWorldPosition(new ut);ye.attach(o.g),vo(o.g,t.clone().multiplyScalar(3).add(new ut((Math.random()-.5)*3,3+Math.random()*2,(Math.random()-.5)*3)),new ut(Math.random()*10,Math.random()*10,0),{r:.04})}vs(i,Qi[n.kind],40,6,.035,1.2,t),Mi(Zs,i,1.2,.7,{color:Qi[n.kind],grow:2,opacity:.9}),Dt.play("crunch",{pos:i,vol:1,ref:8})}function Wh(n,t,e,i,s){n.alive=!1,n.hp=0,e?Wv(n,i):s.startsWith("body")&&vs(n.eye(),Qi[n.kind],24,5,.035,1,i),n.veg.dead=!0,n.veg.deadT=0,n.veg.fallDir=i.x*-Math.sin(n.yaw)+i.z*-Math.cos(n.yaw)>0?-1:1,n.veg.deadBaseY=n.pos.y;let r=n.veg.gun.root;ye.attach(r),vo(r,new ut((Math.random()-.5)*2,1.5,(Math.random()-.5)*2),new ut(Math.random()*3,Math.random()*3,Math.random()*3),{r:.05}),n.deaths++,t&&(t.kills++,t.score+=e?150:100,e&&t.hs++),qv(t,n,e),t&&t.isPlayer&&(Ja(e?"\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u30AD\u30EB",e?"+150":"+100"),Dt.play("hit",{vol:1,rate:.8})),n.isPlayer&&(ys={t:2.8,by:t,at:n.eye()},setTimeout(()=>{Y.phase!=="post"&&(kn=Re.find(o=>o.team===pt.team&&o.alive)||t||null)},2800),$s("\u3084\u3089\u308C\u305F",t?`${t.name} \u306B\u5012\u3055\u308C\u305F`:"",2)),Y.bomb.carrier===n&&(Y.bomb.carrier=null,Y.bomb.state="dropped",Y.bomb.pos.set(n.pos.x,Ms(n.pos.x,n.pos.z,n.pos.y+.5)+.05,n.pos.z)),Y.mode==="range"&&!n.isPlayer&&(n.reviveT=2.2),o2(t,n)}function vr(n){if(!(n.reloadT>0||n.mag>=n.st.mag||n.reserve<=0||!n.alive)&&(n.reloadT=n.reloadMax=n.mag===0?n.st.reloadEmpty:n.st.reload,n.ads=Math.min(n.ads,0),n.adsWant=!1,n.isPlayer)){Dt.play("mag",{vol:.8});let t=n.reloadMax;setTimeout(()=>Dt.play("bolt1",{vol:.7}),t*620),setTimeout(()=>Dt.play("bolt2",{vol:.7}),t*850)}}function Xv(n){let t="#"+n.toString(16).padStart(6,"0");for(let e=0;e<5;e++){let i=document.createElement("div"),s=40+Math.random()*120;i.style.cssText=`position:absolute;left:${10+Math.random()*80}%;top:${10+Math.random()*75}%;width:${s}px;height:${s*(.8+Math.random()*.5)}px;border-radius:${40+Math.random()*20}% ${50+Math.random()*20}% ${45+Math.random()*20}% ${55+Math.random()*20}%;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,.35),${t} 30%,${t});opacity:.75;transition:opacity 1.6s,transform 1.6s;pointer-events:none`,z("dmg").appendChild(i),requestAnimationFrame(()=>{i.style.opacity=0,i.style.transform="translateY(30px)"}),setTimeout(()=>i.remove(),1700)}}var Fh=0,Xa=0,jd=0;function Ja(n,t){z("killnote").innerHTML=(n?`<div class="k">${n}</div>`:"")+`<div class="h">${t}</div>`,Fh=1.8}function $s(n,t,e=2.5){z("cmsg").textContent=n,z("csub").textContent=t||"",Xa=e}function qv(n,t,e){let i=r=>r&&r.team===pt.team?"a":"e",s=document.createElement("div");s.innerHTML=n?`<b class="${i(n)}">${n.name}</b> <span class="hs">${e?"\u25CE \u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u25B6"}</span> <b class="${i(t)}">${t.name}</b>`:`<b class="${i(t)}">${t.name}</b> \u7206\u767A\u306B\u5DFB\u304D\u8FBC\u307E\u308C\u305F`,z("feed").prepend(s),setTimeout(()=>s.remove(),5e3)}var Oh=0;function Im(n){let t=z("hitmark");t.classList.toggle("kill",n),t.style.opacity=1,Oh=.25,Dt.play("hit",{vol:.7,rate:n?.8:1.2})}function Yv(n){let t=document.createElement("div");t.className="dmga";let i=-(Math.atan2(n.x-pt.pos.x,n.z-pt.pos.z)-(pt.yaw+Math.PI));t.style.transform=`rotate(${i}rad)`,z("dmg").appendChild(t),setTimeout(()=>t.style.opacity=0,600),setTimeout(()=>t.remove(),1600)}var Zv=90,$v=45,_m=5,Mm=7.5,Y={mode:"casual",phase:"lobby",time:0,timer:0,round:0,score:[0,0],attack:0,bomb:{state:"carried",carrier:null,pos:new ut,site:null,fuse:0,prog:0,defuser:null},postT:0,slowmo:0},kn=null,ys=null,$a=[],Ys=[],Jv=(()=>{let n=new It,t=new D(new de(.04,.42,.04),new ie({color:6965802}));n.add(t);let e=new D(new de(.02,.12,.16),new ie({color:13159632,metalness:.9,roughness:.3}));return e.position.set(0,.17,.07),n.add(e),n})();function Kv(n){return new D(new mt(.05,.05,.14,10),new ie({color:n==="smoke"?5925466:3815994,roughness:.5}))}function br(n,t){!n.alive||Y.phase==="pre"||Y.phase==="post"||n.throwing||(t==="axe"?n.letN:n.tacN)<=0||(n.throwing=!0,n.adsWant=!1,Dt.play("cloth",n.isPlayer?{vol:.5}:{pos:n.pos,vol:.5}),setTimeout(()=>{if(n.throwing=!1,!n.alive)return;t==="axe"?n.letN--:n.tacN--,n.isPlayer&&z(t==="axe"?"letBtn":"tacBtn").classList.toggle("used",(t==="axe"?n.letN:n.tacN)<=0);let i=n.eye(),s=n.dir(),r=t==="axe"?Jv.clone():Kv(t);r.position.copy(i).addScaledVector(s,.5),ye.add(r);let o=t==="axe"?19:15;$a.push({kind:t,o:r,pos:r.position,vel:s.clone().multiplyScalar(o).add(new ut(0,t==="axe"?2.2:3.2,0)),t:0,fuse:t==="smoke"?1.4:t==="flash"?1.3:3,by:n,done:!1}),Dt.play("whoosh",n.isPlayer?{vol:.6}:{pos:n.pos,vol:.6})},n.st.throwT*1e3))}function jv(n){for(let t of $a){if(t.done)continue;t.t+=n;let e=t.vel.clone().multiplyScalar(n),i=e.length();if(!t.stuck){if(t.kind==="axe"){let o=e.clone().normalize();for(let a of Re)if(!(a===t.by||!a.alive||a.team===t.by.team)){for(let l of a.veg.computeHitSpheres()){let c=rf(t.pos,o,l.c,l.r+.05);if(c>0&&c<i){Qv(a,t,l.part),t.done=!0;break}}if(t.done)break}if(t.done){ye.remove(t.o);continue}}let s=Mr(t.pos,e.clone().normalize(),i+.05);if(s){let o=new ut;o.setComponent(s.axis,s.sign),t.pos.addScaledVector(e.clone().normalize(),Math.max(0,s.t-.06)),t.kind==="axe"?(t.stuck=!0,Dt.play("hit",{pos:t.pos,vol:.4,rate:.7})):(t.vel.reflect(o).multiplyScalar(.4),Dt.play("hit",{pos:t.pos,vol:.2,rate:1.4}))}else t.pos.add(e);let r=Ms(t.pos.x,t.pos.z,t.pos.y+.1,.05);t.pos.y<r+.05&&(t.pos.y=r+.05,t.kind==="axe"?t.stuck=!0:(t.vel.y=Math.abs(t.vel.y)*.3,t.vel.x*=.6,t.vel.z*=.6)),t.vel.y-=16*n,t.kind==="axe"&&!t.stuck?t.o.rotation.x-=n*14:t.stuck||(t.o.rotation.z+=n*6)}t.t>=t.fuse&&(t.done=!0,t.kind==="smoke"?t2(t.pos.clone()):t.kind==="flash"&&n2(t.pos.clone(),t.by),t.kind!=="axe"?ye.remove(t.o):setTimeout(()=>ye.remove(t.o),6e3))}for(let t=Ys.length-1;t>=0;t--)Ys[t].t-=n,Ys[t].t<=0&&Ys.splice(t,1)}function Qv(n,t,e){if(Y.mode==="range"&&n.isPlayer)return;let i=Qi[n.kind];vs(n.eye(),i,20,4,.03,.9),Dt.play("splat1",{pos:n.pos,vol:1,ref:5}),n.hp=0,t.by.isPlayer&&Im(!0),Wh(n,t.by,e==="head",t.vel.clone().normalize(),e.startsWith("body")?"body":e)}function t2(n){Dt.play("whoosh",{pos:n,vol:.9,rate:.6}),Ys.push({p:n.clone().setY(n.y+1.2),r:3.6,t:12});for(let t=0;t<14;t++){let e=Math.random()*6.28,i=Math.random()*2.6;Mi(Zs,new ut(n.x+Math.cos(e)*i,n.y+.4+Math.random()*2.4,n.z+Math.sin(e)*i),3.5+Math.random()*2,12+Math.random()*1.5,{grow:.15,vel:new ut((Math.random()-.5)*.3,.05,(Math.random()-.5)*.3),color:14212312,opacity:.95})}}function e2(n,t){for(let e of Ys){let i=new ut().subVectors(t,n),s=mn(new ut().subVectors(e.p,n).dot(i)/i.lengthSq(),0,1);if(n.clone().addScaledVector(i,s).distanceTo(e.p)<e.r)return!0}return!1}function n2(n,t){Dt.play("boom",{pos:n,vol:.7,rate:1.8}),Mi(So,n.clone().setY(n.y+.3),4,.15,{add:!0}),xi.position.copy(n),xi.intensity=120,setTimeout(()=>xi.intensity=0,120);for(let e of Re){if(!e.alive)continue;let i=e.eye(),s=n.distanceTo(i);if(s>15||!Cm(i,n.clone().setY(n.y+.2)))continue;let r=new ut().subVectors(n,i).normalize(),o=e.dir().dot(r),l=3*mn((1-s/15)*(.45+.55*Math.max(0,o)),0,1);e.isPlayer?e.blindT=Math.max(e.blindT||0,l):e.ai&&(e.ai.blind=Math.max(e.ai.blind||0,l))}}function i2(){let n=[];for(let t of["A","B"]){for(let e of on.holds[t].def)n.push(e);n.push([We[t].x,We[t].z])}return n.slice(0,8)}function s2(n){Y.mode!=="range"||!Re.includes(n)||(n.dispose(),n.veg=new Vs(n.kind,n.team,{lod:1,hat:n.hat,camo:n.camo}),ye.add(n.veg.root),Object.assign(n,{alive:!0,hp:100,stance:n.homeStance||"stand",lostArm:[!1,!1],lostLeg:[!1,!1]}),n.eyeH=n.targetEye(),n.vel.set(0,0,0),n.pos.copy(n.home))}function Lm(){if(!pt)return;let n=pt.st.tac;z("tacBtn").classList.toggle("hide",n==="none"),z("tacBtn").querySelector("span").textContent=n==="flash"?"\u5149":"\u7159",z("letBtn").classList.toggle("hide",pt.st.let==="none"),z("tacBtn").classList.remove("used"),z("letBtn").classList.remove("used")}function r2(){Y.round=1,Y.score=[0,0],Y.attack=0;for(let t of Re)t.dispose();Re=[],af(),pt=new qs(xt.kind,0,!0,"\u3042\u306A\u305F");let n=["carrot","tomato","potato","pepper"];i2().forEach(([t,e],i)=>{let s=new qs(n[i%4],1,!1,"\u7684"+(i+1));s.pos.set(t,Ms(t,e,3),e),s.home=s.pos.clone(),s.homeStance=["stand","stand","crouch","stand","prone"][i%5],s.stance=s.homeStance,s.eyeH=s.targetEye(),s.yaw=Math.random()*6.28,Re.push(s)}),Re.unshift(pt),pt.pos.copy(Ia.south[0]),pt.yaw=0,pt.pitch=0,Object.assign(Y.bomb,{state:"none",carrier:null,site:null}),kn=null,ys=null,Y.phase="live",Y.timer=999,Y.time=0,z("ia0").textContent=Ni[pt.kind][0],z("ia1").textContent="-",z("ie0").textContent="\u7684",z("ie1").textContent="\u7684",z("roundInfo").textContent="\u5C04\u6483\u5834",z("side").textContent="\u52D5\u304B\u306A\u3044\u7684\u3067\u7DF4\u7FD2\uFF08\u5012\u3059\u30682\u79D2\u3067\u5FA9\u6D3B\uFF09\u3002\u30DD\u30FC\u30BA\u304B\u3089\u30DB\u30FC\u30E0\u306B\u623B\u308C\u307E\u3059",z("hpName").textContent=Ni[xt.kind],Nm={kills:0,hs:0},Om(),pt.tacN=pt.st.tac==="none"?0:99,pt.letN=pt.st.let==="none"?0:99,Lm(),$s("\u5C04\u6483\u5834",`${pt.st.name}\u30FB${on.name}`,2.5)}function Dm(){if(window.VW_INGAME=!0,Y.mode==="range")return r2();Y.round=0,Y.score=[0,0],Y.attack=Math.random()<.5?0:1;for(let s of Re)s.dispose();Re=[];let n=["carrot","tomato","potato","pepper"].filter(s=>s!==xt.kind);pt=new qs(xt.kind,0,!0,"\u3042\u306A\u305F");let t=new qs(n[0],0,!1,Ni[n[0]]+"(CPU)"),e=new qs(n[1],1,!1,Ni[n[1]]+"(CPU)"),i=new qs(n[2],1,!1,Ni[n[2]]+"(CPU)");Re=[pt,t,e,i];for(let s of Re)s.isPlayer||(s.ai={path:null,pi:0,goal:null,repath:0,think:0,target:null,seen:0,heard:null,hold:null,holdT:0,strafe:0,aimErr:new ut,mode:"obj",crouchT:0});z("ia0").textContent=Ni[pt.kind][0],z("ia1").textContent=Ni[t.kind][0],z("ie0").textContent=Ni[e.kind][0],z("ie1").textContent=Ni[i.kind][0],z("hpName").textContent=Ni[xt.kind],Nm={kills:0,hs:0},Om(),uf()}var Nm;function uf(){Y.round++,af();for(let a of Re){let l=a.kind;a.dispose(),a.veg=new Vs(l,a.team,{lod:1,hat:a.hat,camo:a.camo}),ye.add(a.veg.root),a.isPlayer&&a.setFirstPerson(!xt.tpp),Object.assign(a,{alive:!0,hp:100,stance:"stand",sprint:!1,ads:0,adsWant:!1,mag:a.st.mag,reserve:a.st.reserve,tacN:a.st.tac==="none"?0:1,letN:a.st.let==="none"?0:1,throwing:!1,blindT:0,boltT:0,reloadT:0,needBolt:!1,slideT:0,eyeH:1.58,stanceT:0,stamina:a.st.stamina,sprintOutT:0,lostArm:[!1,!1],lostLeg:[!1,!1],revealT:0,kickedOut:!1}),a.vel.set(0,0,0)}let n=Y.attack,t=Re.filter(a=>a.team===n),e=Re.filter(a=>a.team!==n);t.forEach((a,l)=>{a.pos.copy(Ia.south[l]),a.yaw=0,a.pitch=0}),e.forEach((a,l)=>{a.pos.copy(Ia.north[l]),a.yaw=Math.PI,a.pitch=0});let i=t.find(a=>a.isPlayer)||t[0];Object.assign(Y.bomb,{state:"carried",carrier:i,site:null,fuse:0,prog:0,defuser:null});for(let a of Re)a.ai&&Object.assign(a.ai,{path:null,goal:null,target:null,seen:0,heard:null,hold:null,mode:"obj",think:Math.random()*.3,site:Math.random()<.5?"A":"B",threat:null});let s=e.filter(a=>a.ai);s.forEach((a,l)=>a.ai.site=s.length===2?l===0?"A":"B":Math.random()<.5?"A":"B");let r=t.filter(a=>a.ai),o=Math.random()<.5?"A":"B";r.forEach(a=>a.ai.site=o);for(let a of $a)a.o.parent&&a.kind!=="axe"&&ye.remove(a.o);if($a.length=0,Ys.length=0,kn=null,ys=null,z("kcam").classList.add("hide"),Lm(),Y.phase="pre",Y.timer=4,Y.time=0,z("roundInfo").textContent=`\u30E9\u30A6\u30F3\u30C9 ${Y.round}`,z("side").textContent=pt.team===n?"\u653B\u6483\u5074\uFF1A\u7206\u5F3E\u3092 A \u304B B \u306B\u8A2D\u7F6E\u305B\u3088":"\u9632\u885B\u5074\uFF1A\u7206\u5F3E\u306E\u8A2D\u7F6E\u3092\u963B\u6B62\u305B\u3088",$s(`\u30E9\u30A6\u30F3\u30C9 ${Y.round}`,pt.team===n?"\u653B\u6483":"\u9632\u885B",3.5),Y.round<=2){let a=z("tip");a.classList.remove("hide"),a.textContent=(Ui?"\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F \u2192 \u96E2\u3059\u3068\u767A\u5C04\u3002":"\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u8997\u304F \u2192 \u5DE6\u30AF\u30EA\u30C3\u30AF\u3067\u767A\u5C04\u3002")+(pt.st.rifle==="root"?"\u8170\u304B\u3089\u4E0A\u306A\u3089\u4E00\u6483":"\u982D\u301C\u80F8\u306A\u3089\u4E00\u6483"),jd=6}z("vign").style.opacity=0,Dt.play("whoosh",{vol:.6})}function o2(n,t){if(Y.mode==="range"||Y.phase!=="live"&&Y.phase!=="planted")return;let e=[0,1].map(r=>Re.filter(o=>o.team===r&&o.alive).length),i=Y.attack,s=1-i;if(e[i]===0&&Y.phase!=="planted")return bo(s,"\u653B\u6483\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);if(e[s]===0)return bo(i,"\u9632\u885B\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);e[i]===0&&Y.phase}function bo(n,t,e){if(Y.phase==="post")return;Y.phase="post",Y.postT=5,Y.score[n]++,z("scA").textContent=Y.score[0],z("scB").textContent=Y.score[1];let i=n===pt.team;$s(i?"\u30E9\u30A6\u30F3\u30C9\u52DD\u5229":"\u30E9\u30A6\u30F3\u30C9\u6557\u5317",t,4.5),z("cmsg").style.color=i?"#ffd040":"#ff5a4a",Dt.play(i?"win":"lose",{vol:.8}),e&&(Y.slowmo=1.4,e.isPlayer||(kn=e,Ja("\u30D5\u30A1\u30A4\u30CA\u30EB\u30AD\u30EB",e.name))),_r(null)}function a2(){z("cmsg").style.color="";let n=l2();if(Y.score[0]>=n.winR||Y.score[1]>=n.winR)return c2();Y.round%n.swap===0&&(Y.attack=1-Y.attack,$s("\u653B\u5B88\u4EA4\u4EE3","",2)),uf()}function l2(){return Y.mode==="rank"?{winR:8,swap:4}:{winR:xt.winR,swap:xt.swap}}function c2(){Y.phase="end";let n=Y.score[0]>Y.score[1];z("resTitle").textContent=n?"\u52DD\u5229":"\u6557\u5317",z("resTitle").className=n?"win":"lose",z("resScore").innerHTML=`<span class="ally">${Y.score[0]}</span> - <span class="enemy">${Y.score[1]}</span>`;let t=pt.shots?Math.round(pt.hits/pt.shots*100):0;z("resStats").innerHTML=`<div><b>${pt.kills}</b>\u30AD\u30EB</div><div><b>${pt.hs}</b>\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8</div><div><b>${pt.hits}/${pt.shots}</b>\u547D\u4E2D</div>`;let e=[...Re].sort((i,s)=>s.score-i.score)[0];if(z("board").innerHTML="<tr><th></th><th>\u540D\u524D</th><th>\u30AD\u30EB</th><th>\u30C7\u30B9</th><th>HS</th><th>\u30B9\u30B3\u30A2</th></tr>"+[0,1].map(i=>Re.filter(s=>s.team===i).sort((s,r)=>r.score-s.score).map(s=>`<tr class="${i===0?"ally":"enemy"}${s===pt?" me":""}"><td>${s===e?'<span class="mvp">MVP</span>':""}</td><td>${s.name}</td><td>${s.kills}</td><td>${s.deaths}</td><td>${s.hs}</td><td>${s.score}</td></tr>`).join("")).join(""),z("result").classList.remove("hide"),z("ctl").classList.add("hide"),document.pointerLockElement&&document.exitPointerLock(),Dt.bgm(!1),Dt.play(n?"win":"lose"),z("rankRes").innerHTML="",Y.mode==="rank"){let i=$i(Be.rp),s=mm(Be,{win:n,rounds:Y.score[0],kills:pt.kills,hs:pt.hs,mvp:e===pt});Be.rp=s.after,Be.best=Math.max(Be.best,Be.rp),Be.games++,n&&Be.wins++,Be.kills+=pt.kills,Be.history.unshift({win:n,sc:Y.score.join("-"),rp:s.total,map:on.name}),Be.history=Be.history.slice(0,20),Xd(Be);let r=$i(Be.rp),o=r.index>i.index||r.index===i.index&&r.div>i.div;z("rankRes").innerHTML=`<div class="rkHead">${xo(r.tier.id,64,r.div)}<div><div class="nm">${r.label}${o?' <span style="color:#ffd040">\u30E9\u30F3\u30AF\u30A2\u30C3\u30D7\uFF01</span>':""}</div><div class="rkBar"><i style="width:${r.progress*100}%"></i></div><small>${Be.rp} RP</small></div><div class="rpList" style="flex:1">${s.items.map(([a,l])=>`<div>${a}<b>${l>=0?"+":""}${l}</b></div>`).join("")}<div class="tot">\u5408\u8A08<b>${s.total>=0?"+":""}${s.total} RP</b></div></div></div>`}}function h2(n){if(Y.time+=n,Y.mode==="range"){Y.phase="live",Y.timer=999;return}if(Y.phase==="pre")Y.timer-=n,Y.timer<=0?(Y.phase="live",Y.timer=Zv,$s("\u958B\u59CB","",1),Dt.play("beep",{vol:.8})):Math.ceil(Y.timer)!==Math.ceil(Y.timer+n)&&Dt.play("tick",{vol:.6});else if(Y.phase==="live")Y.timer-=n,Y.timer<=0&&(Y.timer=0,bo(1-Y.attack,"\u6642\u9593\u5207\u308C \u2014 \u9632\u885B\u6210\u529F"));else if(Y.phase==="planted"){let e=Y.bomb;e.fuse-=n,Y.timer=e.fuse,e.beepT=(e.beepT||0)-n,e.beepT<=0&&(Dt.play("beep",{pos:e.pos,vol:.9,ref:6}),e.beepT=e.fuse>15?1:e.fuse>6?.5:e.fuse>2?.25:.12),e.fuse<=0&&f2()}else Y.phase==="post"&&(Y.postT-=n,Y.postT<=0&&a2());let t=Y.bomb;if(t.state==="dropped"){for(let e of Re)if(e.alive&&e.team===Y.attack&&e.pos.distanceTo(t.pos)<1.3){t.state="carried",t.carrier=e,e.isPlayer&&Ja("","\u7206\u5F3E\u3092\u62FE\u3063\u305F");break}}if(t.state==="carried"&&t.carrier&&t.pos.copy(t.carrier.pos),t.planting){let e=t.planting;!e.alive||!e.wantAct||e.pos.distanceTo(We[t.plantSite])>2.4||Y.phase!=="live"?(t.planting=null,t.prog=0,e.isPlayer&&_r(null)):(t.prog+=n,e.isPlayer&&_r("\u7206\u5F3E\u3092\u8A2D\u7F6E\u4E2D",t.prog/_m),t.prog>=_m&&d2(e,t.plantSite))}if(t.defusing){let e=t.defusing;!e.alive||!e.wantAct||e.pos.distanceTo(t.pos)>2||Y.phase!=="planted"?(t.defusing=null,t.prog=0,e.isPlayer&&_r(null)):(t.prog+=n,e.isPlayer&&_r("\u7206\u5F3E\u3092\u89E3\u9664\u4E2D",t.prog/Mm),t.prog>=Mm&&(t.defusing=null,_r(null),t.state="defused",Dt.play("ui",{vol:1}),e.score+=100,Um(`${e.name} \u304C\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F`),bo(1-Y.attack,"\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F")))}}function Um(n){let t=document.createElement("div");t.textContent=n,z("feed").prepend(t),setTimeout(()=>t.remove(),5e3)}function Eo(n){let t=Y.bomb;if(n.alive){if(Y.phase==="live"&&t.carrier===n){for(let e of["A","B"])if(n.pos.distanceTo(We[e])<2.4&&!t.planting)return t.planting=n,t.plantSite=e,t.prog=0,Dt.play("cloth",{pos:n.pos,vol:.7}),!0}return Y.phase==="planted"&&n.team!==Y.attack&&n.pos.distanceTo(t.pos)<2&&!t.defusing?(t.defusing=n,t.prog=0,Dt.play("cloth",{pos:n.pos,vol:.7}),!0):!1}}var Ji;function u2(){let n=new It,t=new D(new de(.4,.18,.28),new ie({color:3815984,roughness:.7,map:j.polymer.map}));t.position.y=.09,n.add(t);for(let s=0;s<3;s++){let r=new D(new mt(.045,.045,.34,12),new ie({color:13138474,roughness:.5}));r.rotation.z=Math.PI/2,r.position.set(0,.22,-.08+s*.08),n.add(r)}let e=new D(new Fe(.16,.08),new ui({color:16724e3}));e.rotation.x=-Math.PI/2,e.position.set(.08,.181,0),n.add(e),n.userData.scr=e;let i=new D(new $e(.08,.008,6,16,Math.PI),new ie({color:13639712}));return i.position.set(-.12,.2,0),n.add(i),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),n}function d2(n,t){let e=Y.bomb;e.planting=null,e.prog=0,_r(null),e.state="planted",e.carrier=null,e.site=t,e.fuse=$v,e.beepT=0,Y.phase="planted",n.score+=100,Um(`${n.name} \u304C ${t} \u306B\u7206\u5F3E\u3092\u8A2D\u7F6E`),$s("\u7206\u5F3E\u304C\u8A2D\u7F6E\u3055\u308C\u305F",`\u30B5\u30A4\u30C8 ${t}`,2.5),Dt.play("beep",{vol:1})}function f2(){let n=Y.bomb;n.state="exploded",Dt.play("boom",{vol:1});for(let t=0;t<6;t++)Mi(Zs,n.pos.clone().add(new ut((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3)),3+Math.random()*3,2.5,{grow:.8,color:4866104,opacity:.9});for(let t=0;t<4;t++)Mi(So,n.pos.clone().add(new ut(0,1,0)),6+t*2,.35,{add:!0});vs(n.pos.clone().add(new ut(0,.5,0)),3813408,40,12,.06,2),xi.position.copy(n.pos).add(new ut(0,2,0)),xi.intensity=400,xi.distance=40,setTimeout(()=>{xi.intensity=0,xi.distance=8},300),Ws=1.2;for(let t of Re)t.alive&&t.pos.distanceTo(n.pos)<9&&(t.hp=0,Wh(t,null,!1,new ut().subVectors(t.pos,n.pos).normalize(),"body"));bo(Y.attack,"\u7206\u5F3E\u304C\u7206\u767A\u3057\u305F")}function _r(n,t){if(!n){z("prog").classList.add("hide");return}z("prog").classList.remove("hide"),z("progT").textContent=n,z("progF").style.width=mn(t,0,1)*100+"%"}var Ws=0;function Fm(n,t,e){let i=(n.lostLeg[0]?1:0)+(n.lostLeg[1]?1:0),s=(n.stance==="prone"?.85:n.stance==="crouch"?2.1:t.sprint?6.1:4.4)*(n.st?n.st.move:1);n.stanceT>0&&(s*=n.stance==="prone"?.15:.6),t.mag<.45&&n.stance==="stand"&&!t.sprint&&(s=2),s*=Ya(1,n.st?n.st.adsMove:.45,n.ads),i===1&&(s*=.45),i===2&&(s=Math.min(s,.6)),(Y.phase==="pre"||Y.bomb.planting===n||Y.bomb.defusing===n)&&(s=0);let o=t.x*s*Math.min(1,t.mag*1.4),a=t.z*s*Math.min(1,t.mag*1.4);if(n.slideT>0){n.slideT-=e;let u=n.slideT/.7;o=n.slideDir.x*8*u+o*.2,a=n.slideDir.z*8*u+a*.2,n.slideT<=0&&(n.stance="crouch")}let l=n.onGround?14:3;n.vel.x=Ki(n.vel.x,o,l,e),n.vel.z=Ki(n.vel.z,a,l,e),n.vel.y-=16*e,n.pos.x+=n.vel.x*e,n.pos.z+=n.vel.z*e,Dv(n.pos,Lv(n),n.stance==="prone"?.36:Iv),n.pos.x=mn(n.pos.x,oe.minX+.5,oe.maxX-.5),n.pos.z=mn(n.pos.z,oe.minZ+.5,oe.maxZ-.5);let c=Ms(n.pos.x,n.pos.z,n.pos.y);n.pos.y+=n.vel.y*e,n.pos.y<=c?(!n.onGround&&n.vel.y<-4&&vm(n,1.3),n.pos.y=c,n.vel.y=0,n.onGround=!0):n.pos.y-c>.08?n.onGround=!1:n.onGround&&(n.pos.y=c,n.vel.y=0);let h=Math.hypot(n.vel.x,n.vel.z);if(n.moveAmt=h,n.onGround&&h>.5){n.stepAcc+=h*e;let u=n.sprint?1.6:1.2;if(n.stepAcc>u){n.stepAcc=0;let d=(n.stance==="prone"||n.stance==="crouch"||h<2.3?0:n.sprint?1:.6)*(n.st?n.st.quiet:1);d>.05&&vm(n,d)}}}function vm(n,t){let e=Yp(Mo,n.pos.x,n.pos.y+.05,n.pos.z),s=(e==="wood"||e==="carpet"?["step_wood-000","step_wood-001"]:e==="grass"?["step_grass-001","step_grass-004"]:["step_concrete-001","step_concrete-002"])[Math.random()<.5?0:1];if(n.isPlayer?Dt.play(s,{vol:.25*t,vary:.15}):Dt.play(s,{pos:n.pos,vol:.9*t,ref:3,roll:1.1,vary:.15,maxDist:30}),t>.5)for(let r of Re)r.ai&&r.alive&&r.team!==n.team&&r.pos.distanceTo(n.pos)<14*t&&(r.ai.heard={pos:n.pos.clone(),t:2.5});t>.5&&(n.revealT=Math.max(n.revealT,.6))}var bm=new Proxy({},{get:(n,t)=>on.holds[t]});function p2(n){return Re.filter(t=>t.team!==n.team&&t.alive)}function m2(n,t){let e=n.eye(),i=new ut().subVectors(t.eye(),e),s=i.length();if(s>90)return!1;i.normalize();let r=new ut(-Math.sin(n.yaw),0,-Math.cos(n.yaw));if(new ut(i.x,0,i.z).normalize().dot(r)<Math.cos(Math.PI*.42)&&s>4||n.ai&&n.ai.blind>0)return!1;let a=[t.eye(),new ut(t.pos.x,t.pos.y+(t.stance==="prone"?.3:.9),t.pos.z)];for(let l of a)if(Cm(e,l)&&!e2(e,l))return!0;return!1}function g2(n,t){let e=n.ai;if(!n.alive)return;let i=Y.mode==="rank"?$i(Be.rp).tier.diff:xt.diff;if(e.blind>0&&(e.blind-=t),e.think-=t,e.heard&&(e.heard.t-=t,e.heard.t<=0&&(e.heard=null)),e.think<=0){e.think=.15;let a=null,l=1e9;for(let c of p2(n))if(m2(n,c)){let h=n.pos.distanceTo(c.pos);h<l&&(l=h,a=c)}a!==e.target&&(e.seen=0,e.target=a,a&&e.aimErr.set(Math.random()-.5,(Math.random()-.5)*.6,Math.random()-.5).multiplyScalar([.5,.35,.25][i])),!a&&e.target&&(e.target=null)}let s={x:0,z:0,mag:0,sprint:!1},r=null,o=e.target;if(o&&o.alive){e.seen+=t;let a=[1.1,.7,.45][i],c=e.aimHead??(e.aimHead=Math.random()<[.25,.4,.55][i])?o.eye().add(new ut(0,-.05,0)):new ut(o.pos.x,o.pos.y+(o.stance==="prone"?.25:o.stance==="crouch"?.75:1.05),o.pos.z),h=Math.exp(-e.seen*[1.4,2,2.8][i])+(o.moveAmt>2?[.12,.08,.05][i]:0)+[.035,.018,.008][i];if(r=c.clone().add(e.aimErr.clone().multiplyScalar(h*n.eye().distanceTo(c)*.25)),n.adsWant=e.seen>a*.4&&n.boltT<=0&&n.reloadT<=0,e.strafe-=t,e.strafe<=0&&(e.strafe=.6+Math.random()*1.2,e.strafeDir=Math.random()<.5?-1:1,Math.random()<.25&&n.stance==="stand"?n.stance="crouch":Math.random()<.2&&(n.stance="stand")),n.ads<.5||i===2){let d=new ut(Math.cos(n.yaw),0,-Math.sin(n.yaw));s.x=d.x*e.strafeDir,s.z=d.z*e.strafeDir,s.mag=.5}if(e.seen>a&&n.ads>.92&&lf(n)){let d=new ut().subVectors(r,n.eye()).normalize(),f=n.dir();f.dot(d)>.9995&&(cf(n,f),e.aimHead=void 0,e.aimErr.multiplyScalar(.6),e.seen=a*.35)}e.lastSeenPos=o.pos.clone();let u=n.pos.distanceTo(o.pos);n.letN>0&&u<9&&u>3&&e.seen>a&&!n.throwing&&Math.random()<t*.35*(i+1)&&(r=o.eye().add(new ut(0,.25+u*.03,0)),br(n,"axe"))}else{n.adsWant=!1,n.stance==="crouch"&&Math.random()<t*.3&&(n.stance="stand");let a=x2(n);if(a)if(e.repath-=t,(!e.path||e.repath<=0||!e.goal||e.goal.distanceTo(a)>1.5)&&(e.goal=a.clone(),e.path=Am.path(n.pos.x,n.pos.z,a.x,a.z),e.pi=1,e.repath=3),e.path&&e.pi<e.path.length){let[c,h]=e.path[e.pi],u=c-n.pos.x,d=h-n.pos.z,f=Math.hypot(u,d);f<.45?e.pi++:(s.x=u/f,s.z=d/f,s.mag=1,s.sprint=e.rush&&f>3,e.sneak&&(s.mag=.4)),r=new ut(c,n.eye().y,h),f<.45&&e.pi>=e.path.length&&(e.path=null)}else e.holdT-=t,e.holdT<=0&&(e.holdT=2+Math.random()*3,e.lookYaw=e.watchYaw!==void 0?e.watchYaw+(Math.random()-.5)*1.4:Math.random()*6.28,Math.random()<.3&&(n.stance="crouch")),e.lookYaw!==void 0&&(r=n.eye().add(new ut(-Math.sin(e.lookYaw),-.05,-Math.cos(e.lookYaw))));if(e.heard&&(r=new ut(e.heard.pos.x,n.eye().y,e.heard.pos.z)),n.tacN>0&&!n.throwing){let c=Y.bomb,h=null;n.st.tac==="smoke"&&(c.carrier===n&&Y.phase==="live"&&n.pos.distanceTo(We[e.site])<7&&(h=We[e.site]),Y.phase==="planted"&&n.team!==Y.attack&&n.pos.distanceTo(c.pos)<8&&(h=c.pos)),n.st.tac==="flash"&&e.heard&&n.pos.distanceTo(e.heard.pos)>5&&n.pos.distanceTo(e.heard.pos)<15&&Math.random()<t*.5&&(h=e.heard.pos),h&&(r=new ut(h.x,n.eye().y+.6,h.z),br(n,n.st.tac))}n.wantAct=!1;let l=Y.bomb;if(l.carrier===n&&Y.phase==="live"){let c=We[e.site];n.pos.distanceTo(c)<2&&(n.wantAct=!0,l.planting||Eo(n))}Y.phase==="planted"&&n.team!==Y.attack&&n.pos.distanceTo(l.pos)<1.8&&(n.wantAct=!0,l.defusing||Eo(n))}if(o&&o.alive&&(n.wantAct=!1),r){let a=new ut().subVectors(r,n.eye()),l=Math.atan2(-a.x,-a.z),c=Math.atan2(a.y,Math.hypot(a.x,a.z)),h=o?[3.5,5,7][i]:4;n.yaw+=Av(n.yaw,l)*Math.min(1,h*t*(n.ads>.5?.6:1)),n.pitch+=(c-n.pitch)*Math.min(1,h*t)}if(s.mag>.3&&!o&&(e.stuckT=(e.stuckT||0)+t,e.stuckT>.8&&(e.stuckPos&&e.stuckPos.distanceTo(n.pos)<.25&&(e.path=null,e.repath=0,e.hold=null,e.unstick=.6,e.unstickDir=Math.random()<.5?1:-1),e.stuckPos=n.pos.clone(),e.stuckT=0)),e.unstick>0){e.unstick-=t;let a=new ut(Math.cos(n.yaw),0,-Math.sin(n.yaw)).multiplyScalar(e.unstickDir);s.x=a.x,s.z=a.z,s.mag=1}n.sprint=s.sprint,Fm(n,s,t),n.mag===0&&n.reloadT<=0&&n.boltT<=0&&vr(n),!o&&n.mag<3&&n.reloadT<=0&&n.boltT<=0&&n.reserve>0&&Math.random()<t*.5&&vr(n)}function x2(n){let t=n.ai,e=Y.bomb,i=n.team===Y.attack;if(t.rush=!1,t.sneak=!1,t.watchYaw=void 0,Y.phase==="pre")return null;if(t.heard&&!t.target&&Math.random()<.002)return t.heard.pos;if(i){if(e.state==="dropped")return t.rush=!0,e.pos;if(e.carrier===n&&Y.phase==="live")return t.rush=Y.timer<40,We[t.site];if(Y.phase==="planted"){if(!t.hold||t.holdFor!=="postplant"){let r=bm[e.site].att[Math.floor(Math.random()*2)];t.hold=new ut(r[0],0,r[1]),t.holdFor="postplant"}return t.watchYaw=Math.atan2(-(e.pos.x-t.hold.x),-(e.pos.z-t.hold.z)),t.hold}let s=e.carrier;if(s&&s!==n){let r=new ut(Math.sin(n.kind.length)*2.5,0,2.5);return s.pos.clone().add(r)}return We[t.site]}else{if(Y.phase==="planted")return t.rush=!0,e.pos;if(!t.hold||t.holdFor!==t.site||(t.swapT=(t.swapT||0)-.016)<-25){let s=bm[t.site].def,r=s[Math.floor(Math.random()*s.length)];t.hold=new ut(r[0],0,r[1]),t.holdFor=t.site,t.swapT=0}return t.watchYaw=Math.atan2(-(0-t.hold.x)*.3,-(10-t.hold.z)),t.rush=n.pos.distanceTo(t.hold)>12,t.hold}}var Gh=.66,zt={root:new It,gun:null,arms:[],kick:0,sway:new ht,bob:0,boltAnim:0,reloadAnim:0,sprintK:0,shells:[]};function y2(){zt.gun=Ua(1),zt.root.add(zt.gun.root),bs.add(zt.root),zt.armL=zd(-1,2783968,.34,.32),zt.armR=zd(1,2783968,.36,.32);for(let n of[zt.armL,zt.armR])n.up.visible=!1;zt.armL.sh.position.set(-.06,-.34,-.25),zt.armR.sh.position.set(.34,-.55,.12),zt.gun.root.scale.setScalar(Gh),ji.add(zt.armL.sh),ji.add(zt.armR.sh),bs.add(ji),zt.armL.sh.traverse(n=>n.frustumCulled=!1),zt.armR.sh.traverse(n=>n.frustumCulled=!1),zt.gun.root.traverse(n=>n.frustumCulled=!1)}function Om(){let n=zt.gun;zt.root.remove(n.root),zt.gun=Ua(1,xt.camo),zt.gun.root.scale.setScalar(Gh),zt.root.add(zt.gun.root),zt.gun.root.traverse(t=>t.frustumCulled=!1)}function _2(){zt.kick=1,Hh.intensity=6,setTimeout(()=>Hh.intensity=0,60),Mi(So,zt.gun.muzzlePt.getWorldPosition(new ut),.35,.05,{add:!0,scene:bs})}function M2(n,t,e){let i=pt,s=zt.gun;zt.kick=Ki(zt.kick,0,9,n),zt.sway.x=Ki(zt.sway.x,mn(-t*.0025,-.06,.06),8,n),zt.sway.y=Ki(zt.sway.y,mn(e*.0025,-.05,.05),8,n);let r=Math.hypot(i.vel.x,i.vel.z);zt.bob+=n*r*2,zt.sprintK=Ki(zt.sprintK,i.sprint&&r>3&&i.ads<.1?1:0,8,n);let o=i.ads,a=s.eyePt.position.y,l=s.eyePt.position.z,c=new ut(.17,-.18,-.52),h=new ut(0,-a*Gh,-l*Gh-.08),u=c.clone().lerp(h,Math.pow(o,.8)),d=(1-o*.9)*Math.min(1,r/4);u.x+=Math.sin(zt.bob)*.012*d+zt.sway.x,u.y+=Math.abs(Math.cos(zt.bob))*.014*d+zt.sway.y-(i.stance==="crouch"?.01:0),u.z+=zt.kick*.12;let f=i.boltT>0?1-i.boltT/i.st.bolt:0,p=i.boltT>0?Math.sin(Math.min(1,f*1.2)*Math.PI):0;s.setBolt(i.boltT>0?mn((f-.15)/.75,0,1):0);let g=i.reloadT>0?1-i.reloadT/(i.reloadMax||3):0,m=i.reloadT>0?Math.sin(g*Math.PI):0;s.mag.position.y=-.04-(g>.15&&g<.6?Math.sin((g-.15)/.45*Math.PI)*.25:0),zt.root.position.copy(u).add(new ut(-.04*zt.sprintK,-.08*zt.sprintK-.05*m,.05*zt.sprintK)),zt.root.rotation.set(zt.kick*.14+zt.sprintK*-.45+m*.3+p*.12,zt.sprintK*.9+m*.2,zt.sprintK*.35+p*.35+m*.5),zt.root.updateMatrixWorld(!0),ji.updateMatrixWorld(!0);let x=s.gripPt.getWorldPosition(new ut),M=s.forePt.getWorldPosition(new ut),w=s.boltPt.getWorldPosition(new ut),v=i.boltT>0?x.clone().lerp(w,mn(p*1.6,0,1)):i.reloadT>0?x.clone().lerp(s.mag.getWorldPosition(new ut),Math.sin(mn(g*1.2,0,1)*Math.PI)):x,R=s.root.getWorldQuaternion(new ln);Ch(zt.armR,ka(v,R,"grip"),ji.localToWorld(new ut(1.2,-1.2,.4))),Ch(zt.armL,ka(M,R,"fore"),ji.localToWorld(new ut(-.6,-1.4,-.2))),Ha(zt.armR,R,"grip"),Ha(zt.armL,R,"fore"),zt.root.visible=zt.armL.sh.visible=zt.armR.sh.visible=o<.88&&!xt.tpp&&i.alive&&!kn,i.lostArm[0]&&(zt.armL.sh.visible=!1),i.lostArm[1]&&(zt.armR.sh.visible=!1)}var we={joy:null,jx:0,jz:0,jmag:0,sprintLock:!1,look:null,lookDX:0,lookDY:0,keys:{},fireHeld:null,mouseDown:!1,rmb:!1},Xs=z("ctl");Ui&&z("joyBase").classList.remove("hide");function Bm(){z("fireL").classList.toggle("hide",!xt.leftFire)}Bm();function v2(){let n=(i,s)=>i<innerWidth*.42&&s>innerHeight*.3,t=new Map;Xs.addEventListener("touchstart",i=>{Dt.resume();for(let s of i.changedTouches){let r=s.target.closest&&s.target.closest(".b");if(r){i.preventDefault(),Lh(r.id,!0,s),t.set(s.identifier,{btn:r.id,x:s.clientX,y:s.clientY});continue}if(!we.joy&&n(s.clientX,s.clientY)){we.joy={id:s.identifier,x:s.clientX,y:s.clientY};let o=z("joyBase");o.classList.add("act"),o.style.left=s.clientX+"px",o.style.top=s.clientY+"px",t.set(s.identifier,{joy:!0})}else we.look||(we.look={id:s.identifier,x:s.clientX,y:s.clientY},t.set(s.identifier,{look:!0}))}},{passive:!1}),Xs.addEventListener("touchmove",i=>{i.preventDefault();for(let s of i.changedTouches){let r=t.get(s.identifier);if(r){if(r.joy){let o=parseFloat(getComputedStyle(z("joyBase")).width)/2,a=(s.clientX-we.joy.x)/o,l=(s.clientY-we.joy.y)/o,c=Math.hypot(a,l);we.sprintLock=l<-1.45&&Math.abs(a)<.8,c>1&&(a/=c,l/=c),we.jx=a,we.jz=l,we.jmag=Math.min(1,c),z("joyKnob").style.transform=`translate(${a*o*.6}px,${l*o*.6}px)`,z("sprintLock").classList.toggle("on",we.sprintLock)}else if(r.look||r.btn==="fireR"||r.btn==="fireL"){let o=r.look?we.look:r,a=s.clientX-o.x,l=s.clientY-o.y;o.x=s.clientX,o.y=s.clientY,we.lookDX+=a,we.lookDY+=l}}}},{passive:!1});let e=i=>{for(let s of i.changedTouches){let r=t.get(s.identifier);if(r)if(t.delete(s.identifier),r.joy){we.joy=null,we.jx=we.jz=we.jmag=0;let o=z("joyBase");o.classList.remove("act"),o.style.left="",o.style.top="",z("joyKnob").style.transform="",we.sprintLock}else r.look?we.look=null:r.btn&&Lh(r.btn,!1,s)}};Xs.addEventListener("touchend",e),Xs.addEventListener("touchcancel",e),Xs.addEventListener("mousedown",i=>{let s=i.target.closest(".b");if(s&&!document.pointerLockElement){Lh(s.id,!0,i);let r=()=>{Lh(s.id,!1,i),removeEventListener("mouseup",r)};addEventListener("mouseup",r)}})}function Lh(n,t,e){let i=pt;if(!i)return;let s=z(n);if(s&&s.classList.toggle("press",t),(n==="fireR"||n==="fireL")&&(t?(we.fireHeld=n,xt.fireMode==="tap"||i.adsToggle?zh():(i.adsWant=!0,i.fireOnRelease=!0)):we.fireHeld===n&&(we.fireHeld=null,i.fireOnRelease&&(i.fireOnRelease=!1,zh(),i.adsToggle||(i.adsWant=!1)))),!t){n==="actBtn"&&(i.wantAct=!1);return}if(Dt.play("ui",{vol:.25}),n==="adsBtn"&&(i.adsToggle=!i.adsToggle,i.adsWant=i.adsToggle,z("adsBtn").classList.toggle("on",i.adsToggle)),n==="jumpBtn"&&Hm(i),n==="crouchBtn"&&km(i),n==="proneBtn"){if(i.lostLeg[0]&&i.lostLeg[1])return;i.stance=i.stance==="prone"?"stand":"prone",Dt.play("cloth",{vol:.5})}n==="reloadBtn"&&vr(i),n==="tacBtn"&&br(i,i.st.tac),n==="letBtn"&&br(i,"axe"),n==="camBtn"&&Gm(),n==="pauseBtn"&&ff(!0),n==="actBtn"&&(i.wantAct=!0,Eo(i))}function zh(){let n=pt;if(n.alive){if(!lf(n)){n.mag<=0&&vr(n);return}cf(n,n.dir())}}function Hm(n){if(!(!n.alive||!n.onGround||Y.phase==="pre"||n.lostLeg[0]&&n.lostLeg[1])){if(n.stance!=="stand"){n.stance="stand";return}n.vel.y=5.4,n.onGround=!1,Dt.play("cloth",{vol:.4})}}function km(n){if(n.alive){if(n.sprint&&n.stance==="stand"&&Math.hypot(n.vel.x,n.vel.z)>4){n.slideT=.7,n.stance="crouch",n.slideDir.set(n.vel.x,0,n.vel.z).normalize(),Dt.play("whoosh",{vol:.4});return}n.stance=n.stance==="crouch"?"stand":"crouch",Dt.play("cloth",{vol:.35})}}function Gm(){xt.tpp=xt.tpp?0:1,yi(),z("camBtn").textContent=xt.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0",pt&&pt.setFirstPerson(!xt.tpp)}function b2(){addEventListener("keydown",n=>{if(Y.phase==="lobby"||!pt)return;we.keys[n.code]=!0;let t=pt;n.code==="Space"&&Hm(t),(n.code==="KeyC"||n.code==="ControlLeft")&&km(t),n.code==="KeyZ"&&(t.stance=t.stance==="prone"?"stand":"prone"),n.code==="KeyR"&&vr(t),n.code==="KeyQ"&&br(t,t.st.tac),n.code==="KeyG"&&br(t,"axe"),n.code==="KeyV"&&Gm(),(n.code==="KeyF"||n.code==="KeyE")&&(t.wantAct=!0,Eo(t)),n.code==="Escape"&&ff(!0)}),addEventListener("keyup",n=>{we.keys[n.code]=!1,(n.code==="KeyF"||n.code==="KeyE")&&pt&&(pt.wantAct=!1)}),Qe.domElement.addEventListener("mousedown",n=>{if(Dt.resume(),!(Y.phase==="lobby"||!pt)){if(!document.pointerLockElement&&!Ui){Qe.domElement.requestPointerLock();return}n.button===0&&zh(),n.button===2&&(pt.adsWant=!0,we.rmb=!0)}}),Xs.addEventListener("mousedown",n=>{!Ui&&!n.target.closest(".b")&&Y.phase!=="lobby"&&(document.pointerLockElement||Qe.domElement.requestPointerLock())}),addEventListener("mouseup",n=>{n.button===2&&pt&&(pt.adsWant=!1,we.rmb=!1)}),addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{document.pointerLockElement&&(we.lookDX+=n.movementX*.6,we.lookDY+=n.movementY*.6)}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement&&Xs.addEventListener("mousedown",zm)})}function zm(n){!document.pointerLockElement||!pt||(n.button===0&&zh(),n.button===2&&(pt.adsWant=!0))}addEventListener("mousedown",n=>{document.pointerLockElement&&n.target===document.body&&zm(n)});function E2(n){let t=pt,e=(t.ads>.5?xt.sensAds:xt.sens)*(Ui?.0042:.0026),i=we.lookDX,s=we.lookDY;we.lookDX=we.lookDY=0,t.alive&&!kn&&(t.yaw-=i*e,t.pitch=mn(t.pitch-s*e,-1.35,1.35));let r=we.jx,o=we.jz,a=we.jmag,l=we.keys;if(l.KeyW||l.KeyA||l.KeyS||l.KeyD){r=(l.KeyD?1:0)-(l.KeyA?1:0),o=(l.KeyS?1:0)-(l.KeyW?1:0);let g=Math.hypot(r,o)||1;r/=g,o/=g,a=l.AltLeft?.4:1}let c=(we.sprintLock||l.ShiftLeft)&&t.stamina>.05&&o<-.5&&t.stance==="stand"&&t.ads<.3&&t.boltT<=0&&t.reloadT<=0;t.sprint=c,c&&t.adsWant&&!t.fireOnRelease&&(t.adsWant=!1);let h=new ut(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),d=new ut(Math.cos(t.yaw),0,-Math.sin(t.yaw)).multiplyScalar(r).add(h.multiplyScalar(-o));t.alive&&Fm(t,{x:d.x,z:d.z,mag:a,sprint:c},n),M2(n,i,s);let f=Y.bomb,p=null;if(t.alive&&Y.phase==="live"&&f.carrier===t)for(let g of["A","B"])t.pos.distanceTo(We[g])<2.4&&(p="\u8A2D\u7F6E");t.alive&&Y.phase==="planted"&&t.team!==Y.attack&&t.pos.distanceTo(f.pos)<2&&(p="\u89E3\u9664"),z("actBtn").classList.toggle("hide",!p),p&&(z("actBtn").textContent=p),jd>0?jd-=n:Ui?z("tip").classList.add("hide"):(z("tip").classList.toggle("hide",!p),p&&(z("tip").textContent=`F\u9577\u62BC\u3057\u3067${p}`)),z("bombHave").classList.toggle("hide",f.carrier!==t),t.wantAct&&!f.planting&&!f.defusing&&p&&Eo(t)}function S2(n,t){if(Y.mode==="range"&&!n.isPlayer&&!n.alive){n.reviveT-=t,n.reviveT<=0&&s2(n);return}n.sprint?(n.stamina=Math.max(0,n.stamina-t),n.sprintOutT=n.st.sprintOut):(n.stamina=Math.min(n.st.stamina,n.stamina+t*.8),n.sprintOutT>0&&(n.sprintOutT-=t));let i=n.targetEye()-n.eyeH,s=(n.stance==="prone"||n.eyeH<.8?1.6:2.6)*t;n.eyeH+=Math.abs(i)<=s||n.slideT>0?i*(n.slideT>0?Math.min(1,t*14):1):Math.sign(i)*s,n.stanceT=Math.abs(n.targetEye()-n.eyeH)>.12&&n.slideT<=0?.1:0;let r=n.adsWant&&n.alive&&n.boltT<=0&&n.reloadT<=0&&!n.sprint&&n.sprintOutT<=0&&n.stanceT<=0&&!(n.kickedOut&&n.boltT>0),o=n.ads;if(n.ads=mn(n.ads+(r?t/n.st.ads:-t/.18),0,1),n.isPlayer&&o===0&&n.ads>0&&Dt.play("cloth",{vol:.35,rate:1.3}),n.boltT>0){if(n.boltT-=t,n.isPlayer||n.pos.distanceTo(pt.pos)<25){let l=1-n.boltT/n.st.bolt;l>.25&&n.boltPlayed===0&&(n.boltPlayed=1,Dt.play("bolt1",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3})),l>.6&&n.boltPlayed===1&&(n.boltPlayed=2,Dt.play("bolt2",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3}),w2(n))}n.boltT<=0&&(n.boltT=0,n.kickedOut=!1,n.mag===0&&vr(n))}if(n.reloadT>0&&(n.reloadT-=t,n.reloadT<=0)){let l=Math.min(n.st.mag-n.mag,n.reserve);n.mag+=l,n.reserve-=l,n.reloadT=0}n.revealT>0&&(n.revealT-=t),n.alive&&n.hp<100&&(n.hurtT=(n.hurtT||0)+t,n.hurtT>5&&(n.hp=Math.min(100,n.hp+60*t)));let a=n.veg;a.root.position.set(n.pos.x,n.pos.y,n.pos.z),n.alive&&a.root.rotation.set(0,n.yaw,0),a.speed=Math.hypot(n.vel.x,n.vel.z)*(n.onGround?1:.3),a.run=n.sprint?1:0,a.crouch=Ki(a.crouch,n.stance==="crouch"||n.slideT>0?1:0,7,t),a.prone=Ki(a.prone,n.stance==="prone"?1:0,3.2,t),a.pitch=n.pitch,a.ads=n.ads,a.air=n.onGround?0:1,a.recoil=Ki(a.recoil,0,10,t),a.boltT=n.boltT>0?Math.sin((1-n.boltT/n.st.bolt)*Math.PI):0,n.lostArm[0]&&n.lostArm[1]&&(a.aim.visible=!1),a.update(t),a.gun.setBolt(n.boltT>0?mn((1-n.boltT/n.st.bolt-.15)/.75,0,1):0)}function w2(n){let t=$p(),e,i;n.isPlayer&&!xt.tpp?e=n.eye().add(n.dir().multiplyScalar(.5)).add(new ut(Math.cos(n.yaw)*.15,-.15,-Math.sin(n.yaw)*.15)):e=n.veg.gun.ejectPt.getWorldPosition(new ut),i=new ut(Math.cos(n.yaw)*2.2,2,-Math.sin(n.yaw)*2.2),t.position.copy(e),ye.add(t),vo(t,i,new ut(20,5,10),{r:.008})}var Zd=0,Dh=0,yo=0,Em=74;function T2(n){if(xt.killcam&&ys&&ys.t>0&&!pt.alive&&Y.phase!=="post"){ys.t-=n;let o=ys.by;if(o){let a=o.eye();Ee.position.copy(ys.at).add(new ut(0,.3,0));let l=new ut().subVectors(a,Ee.position),c=Math.atan2(-l.x,-l.z),h=Math.atan2(l.y,Math.hypot(l.x,l.z));Ee.rotation.set(h,c,0);let u=mn(2.8-ys.t,0,1),d=Ya(Em,mn(800/Math.max(5,l.length()),12,60),u);Ee.fov=d,Ee.updateProjectionMatrix(),z("kcam").classList.remove("hide"),z("kcamN").textContent=`${o.name}\uFF08HP ${Math.max(0,Math.round(o.hp))}\uFF09`,z("scope").style.display="none",z("cross").style.display="none",Dt.listener.x=Ee.position.x,Dt.listener.z=Ee.position.z,Dt.listener.yaw=c;return}}z("kcam").classList.add("hide");let t=pt,e=xt.tpp;if(kn&&(!pt.alive||Y.phase==="post")&&(t=(kn.alive,kn),e=!0,!t.alive)){let o=Re.find(a=>a.team===pt.team&&a.alive);o&&(kn=t=o)}let i=t.eye(),s=t===pt?t.ads:0;if(e&&s<.85){let o=t.stance==="prone"?2:2.6,a=t.dir(),l=new ut(Math.cos(t.yaw),0,-Math.sin(t.yaw)),c=i.clone().add(new ut(0,.32,0)).addScaledVector(l,.8),h=a.clone().multiplyScalar(-o),u=Mr(c,h.clone().normalize(),o+.3),d=u?Math.max(.3,u.t-.3):o;Ee.position.copy(c).addScaledVector(h.normalize(),d),Ee.rotation.set(t.pitch,t.yaw,0)}else if(Ee.position.copy(i),Ee.rotation.set(t.pitch,t.yaw,0),t===pt){let o=Math.hypot(t.vel.x,t.vel.z)*(t.onGround?1:0)*(1-t.ads);Zd+=n*o*1.9;let a=Math.min(1,o/5)*.035;Ee.position.y+=Math.abs(Math.sin(Zd))*a-Dh,Ee.rotation.z=Math.sin(Zd)*a*.12,t.onGround?(yo>.25&&(Dh=.08*yo),yo=0):yo=Math.min(yo+n,1),Dh=Ki(Dh,0,8,n)}if(t===pt&&t.ads>.5){let o=Y.time,a=(t.st.stanceSway?t.stance==="prone"?6e-4:t.stance==="crouch"?.0015:.0026:.0022)*(1+Math.min(2,Math.hypot(t.vel.x,t.vel.z)))*t.st.sway;Ee.rotation.x+=Math.sin(o*1.3)*a+Math.sin(o*2.7)*a*.4,Ee.rotation.y+=Math.cos(o*.9)*a*1.2}Ws>0&&(Ws=Math.max(0,Ws-n),Ee.rotation.x+=(Math.random()-.5)*Ws*.04,Ee.rotation.y+=(Math.random()-.5)*Ws*.04),t===pt&&zt.kick>.05&&(Ee.rotation.x+=zt.kick*.03);let r=Ya(Em,13,Math.pow(s,1.5));Math.abs(Ee.fov-r)>.01&&(Ee.fov=r,Ee.updateProjectionMatrix()),Dt.listener.x=Ee.position.x,Dt.listener.y=Ee.position.y,Dt.listener.z=Ee.position.z,Dt.listener.yaw=t.yaw,z("scope").style.display=s>.88&&t===pt?"block":"none",z("cross").style.display=s>.3||!pt.alive?"none":"block"}var Qd=new Map;function A2(){for(let n of Re){let t=Qd.get(n);t||(t=new Zr(new rr({map:Pm,transparent:!0,blending:ur,depthWrite:!1,depthTest:!0,fog:!1})),ye.add(t),Qd.set(n,t));let e=n.alive&&!n.isPlayer&&n.ads>.6&&!n.veg.dead;if(t.visible=!1,!e)continue;let i=n.veg.gun.lens.getWorldPosition(new ut),s=new ut().subVectors(Ee.position,i),r=s.length();s.normalize();let o=n.dir().dot(s);o<.85||(t.visible=!0,t.position.copy(i).addScaledVector(s,.05),t.scale.setScalar(mn(r*.035,.25,2.5)*(.8+Math.random()*.3)*(o-.8)*4))}}var tf=z("minimap"),R2=tf.getContext("2d"),ef=[];function C2(){ef.length=0;for(let n of on.mm)ef.push(n)}function P2(){let n=tf.width,t=tf.height,e=R2,i=pt.alive||!kn?pt:kn;e.clearRect(0,0,n,t),e.save(),e.beginPath(),e.roundRect?e.roundRect(0,0,n,t,16):e.rect(0,0,n,t),e.clip(),e.fillStyle="rgba(40,60,40,.55)",e.fillRect(0,0,n,t);let s=n/46;e.translate(n/2,t/2),e.rotate(i.yaw),e.scale(s,s),e.translate(-i.pos.x,-i.pos.z),e.fillStyle="rgba(60,60,64,.9)",e.fillRect(-40,-4,80,8),e.fillStyle="rgba(150,150,140,.8)",e.fillRect(-40,-5.7,80,1.7),e.fillRect(-40,4,80,1.7);for(let a of ef)e.fillStyle=a[4],e.fillRect(a[0],a[1],a[2]-a[0],a[3]-a[1]);e.strokeStyle="rgba(255,255,255,.3)",e.lineWidth=.3,e.strokeRect(oe.minX,oe.minZ,oe.maxX-oe.minX,oe.maxZ-oe.minZ);for(let a of["A","B"]){let l=We[a];e.fillStyle="rgba(255,200,40,.35)",e.beginPath(),e.arc(l.x,l.z,2.4,0,7),e.fill(),e.save(),e.translate(l.x,l.z),e.rotate(-i.yaw),e.fillStyle="#ffd040",e.font="bold 3px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(a,0,0),e.restore()}let r=Y.bomb;(r.state==="dropped"||r.state==="planted"||r.state==="carried"&&r.carrier&&r.carrier.team===pt.team)&&(e.save(),e.translate(r.pos.x,r.pos.z),e.rotate(-i.yaw),e.fillStyle=r.state==="planted"?Math.floor(Y.time*4)%2?"#ff3020":"#ffd040":"#ffa020",e.fillRect(-1,-.7,2,1.4),e.restore());for(let a of Re){if(!a.alive)continue;let l=a.team===pt.team;!l&&a.revealT<=0&&!(a.ai&&a.ai.target===pt&&a.ads>.5&&!1)||(e.save(),e.translate(a.pos.x,a.pos.z),e.rotate(-a.yaw),a===pt?(e.fillStyle="#ffe060",e.beginPath(),e.moveTo(0,-1.8),e.lineTo(1.2,1.2),e.lineTo(0,.5),e.lineTo(-1.2,1.2),e.closePath(),e.fill()):(e.fillStyle=l?"#4aa8ff":"#ff4030",e.beginPath(),e.arc(0,0,1,0,7),e.fill(),l&&(e.beginPath(),e.moveTo(0,-2),e.lineTo(.7,-.6),e.lineTo(-.7,-.6),e.fill())),e.restore())}e.restore(),e.fillStyle="rgba(255,255,255,.7)",e.font="bold 20px sans-serif",e.textAlign="center";let o=i.yaw;e.save(),e.translate(n/2,t/2),e.rotate(o),e.fillText("N",0,-t/2+22),e.restore()}function I2(n){let t=pt;Xs.classList.toggle("dead",!t.alive);let e=Math.max(0,(Y.phase==="pre",Y.timer)),i=Math.floor(e/60),s=Math.floor(e%60);z("timer").textContent=Y.mode==="range"?"\u221E":Y.phase==="pre"?Math.ceil(e)+"":`${i}:${String(s).padStart(2,"0")}`,z("timer").classList.toggle("bomb",Y.phase==="planted"),z("amC").textContent=t.mag,z("amR").textContent=t.reserve,z("amS").textContent=t.reloadT>0?"\u30EA\u30ED\u30FC\u30C9\u4E2D\u2026":t.boltT>0?"\u30DC\u30EB\u30C8\u64CD\u4F5C\u4E2D\u2026":t.st.name,z("hpf").style.width=Math.max(0,t.hp)+"%",z("hpf").classList.toggle("low",t.hp<50);let r=Re.filter(c=>c.team===0),o=Re.filter(c=>c.team===1),a=(c,h)=>z(c).classList.toggle("dead",!(h&&h.alive));a("ia0",r[0]),a("ia1",r[1]),a("ie0",o[0]),a("ie1",o[1]),Fh>0&&(Fh-=n,Fh<=0&&(z("killnote").innerHTML="")),Xa>0&&(Xa-=n,Xa<=0&&(z("cmsg").textContent="",z("csub").textContent="")),Oh>0&&(Oh-=n,z("hitmark").style.opacity=Math.max(0,Oh/.25)),Y.phase==="pre"&&(z("cmsg").textContent=Math.ceil(Y.timer)<=3?Math.ceil(Y.timer):`\u30E9\u30A6\u30F3\u30C9 ${Y.round}`,Xa=.2),P2(),D2();let l="";if(pt.alive){let c=Ee.position,h=new ut(0,0,-1).applyQuaternion(Ee.quaternion),u=Mr(c,h,150),d=u?u.t:150;for(let f of Re)if(!(f.team===pt.team||!f.alive)){for(let p of f.veg.computeHitSpheres()){let g=rf(c,h,p.c,p.r*1.6);if(g>0&&g<d){l=f.name;break}}if(l)break}}z("aimName").textContent=l}var nf=new Map;function L2(n,t,e,i){let s=nf.get(n);s||(s=document.createElement("div"),z("marks").appendChild(s),nf.set(n,s));let r=i.clone().project(Ee),o=r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1;s.style.display=o?"block":"none",o&&(s.className="mk "+t,s._h!==e&&(s.innerHTML=e,s._h=e),s.style.left=(r.x+1)/2*100+"%",s.style.top=(1-r.y)/2*100+"%")}function D2(){let n=new Set,t=pt.alive||!kn?pt:kn,e=pt.ads>.88,i=(o,...a)=>{n.add(o),e||L2(o,...a)};for(let o of Re)o!==pt&&o!==kn&&o.team===pt.team&&o.alive&&i("n"+o.name,"ally",`${o.name}<span class="ar"></span>`,o.eye().add(new ut(0,.55,0)));let s=Y.bomb,r=o=>Math.round(o.distanceTo(t.pos))+"m";if(Y.phase==="live"&&(s.carrier===pt||pt.team!==Y.attack||s.carrier?.team===pt.team))for(let o of["A","B"])i("s"+o,"site",`<i>${o}</i><small>${r(We[o])}</small>`,We[o].clone().add(new ut(0,2.2,0)));s.state==="planted"&&i("bomb","bomb",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new ut(0,1.2,0))),s.state==="dropped"&&pt.team===Y.attack&&i("bombd","bomb drop",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new ut(0,1,0)));for(let[o,a]of nf)(!n.has(o)||e||Y.phase==="post")&&(a.style.display="none")}function N2(){Ji||(Ji=u2(),ye.add(Ji));let n=Y.bomb;if(Ji.visible=n.state==="dropped"||n.state==="planted"||n.state==="defused"||!!n.planting,n.planting&&n.state!=="planted"){let t=n.planting;t.stance="crouch";let e=new ut(-Math.sin(t.yaw),0,-Math.cos(t.yaw));n.pos.copy(t.pos).addScaledVector(e,.55),n.pos.y=Ms(n.pos.x,n.pos.z,t.pos.y+.3)}n.defusing&&(n.defusing.stance="crouch"),Ji.visible&&(Ji.position.copy(n.pos),Ji.userData.scr.material.color.setHex(n.state==="planted"&&Math.floor(Y.time*(n.fuse<6?8:2))%2?16724e3:4198416),n.state==="dropped"&&(Ji.rotation.y+=.02))}var _s=null,$d=0,Vh=["carrot","tomato","potato","pepper"],U2={carrot:"\u7D30\u8EAB\u3067\u982D\u304C\u5C0F\u3055\u3044",tomato:"\u307E\u3093\u307E\u308B\u3002\u3064\u3084\u3064\u3084",potato:"\u305A\u3063\u3057\u308A\u3002\u3067\u3053\u307C\u3053",pepper:"\u3064\u3084\u3064\u3084\u306E\u7DD1"};function df(){window.VW_INGAME=!1,Y.phase="lobby";for(let n of Re)n.dispose();Re=[],pt=null,af(),Ji&&(Ji.visible=!1);for(let n of Qd.values())n.visible=!1;if(z("hud").classList.add("hide"),z("ctl").classList.add("hide"),z("lobby").classList.remove("hide"),z("result").classList.add("hide"),z("pause").classList.add("hide"),z("helpTxt").innerHTML=Ui?"\u5DE6\u5074\u3092\u306A\u305E\u3063\u3066\u79FB\u52D5\uFF08\u4E0A\u306B\u5012\u3057\u304D\u308B\u3068\u30C0\u30C3\u30B7\u30E5\uFF09<br>\u53F3\u5074\u3092\u306A\u305E\u3063\u3066\u8996\u70B9<br>\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F\u30FB\u96E2\u3059\u3068\u767A\u5C04<br>\u53F3\u306E\u7167\u6E96\u30DC\u30BF\u30F3\uFF1A\u8997\u304D\u3063\u3071\u306A\u3057\u306B\u5207\u66FF<br>\u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09\u30FB\u4F0F\u305B\u30FB\u30B8\u30E3\u30F3\u30D7<br>\u30B5\u30A4\u30C8\u3067\u300C\u8A2D\u7F6E\u300D\u300C\u89E3\u9664\u300D\u3092\u9577\u62BC\u3057":"WASD \u79FB\u52D5 / Shift \u30C0\u30C3\u30B7\u30E5 / Alt \u305D\u30FC\u3063\u3068\u6B69\u304F<br>\u30DE\u30A6\u30B9 \u8996\u70B9 / \u5DE6\u30AF\u30EA\u30C3\u30AF \u6483\u3064 / \u53F3\u30AF\u30EA\u30C3\u30AF \u8997\u304F<br>Space \u30B8\u30E3\u30F3\u30D7 / C \u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09 / Z \u4F0F\u305B<br>R \u30EA\u30ED\u30FC\u30C9 / F \u9577\u62BC\u3057\u3067\u8A2D\u7F6E\u30FB\u89E3\u9664 / V \u8996\u70B9\u5207\u66FF",Ka(),Dt.bgm(!1),typeof Sm=="function")try{Sm()}catch{}}function Ka(){_s&&ye.remove(_s.root),_s=new Vs(xt.kind,0,{lod:1,hat:xt.hat,camo:xt.camo}),ye.add(_s.root),z("hatName").textContent=go.find(e=>e.id===xt.hat).name,z("camoName").textContent=Na.find(e=>e.id===xt.camo).name;let[n,t]=on.lobby;_s.root.position.set(n,.15+(on.id==="town"?0:-.13),t),z("charName").innerHTML=`${Ni[xt.kind]}<small>${U2[xt.kind]}</small>`}function F2(n){$d+=n;let t=_s;if(!t)return;t.root.rotation.y=Math.PI+.5+Math.sin($d*.4)*.25,t.speed=0,t.pitch=-.15+Math.sin($d*.7)*.03,t.run=0,t.ads=0,t.update(n);let[e,i]=on.lobby;Ee.position.set(e-1.2,1.2,i+2.7),Ee.lookAt(e+.6,1,i),Math.abs(Ee.fov-50)>.01&&(Ee.fov=50,Ee.updateProjectionMatrix())}z("prevC").onclick=()=>{xt.kind=Vh[(Vh.indexOf(xt.kind)+3)%4],yi(),Ka(),Dt.resume(),Dt.play("ui")};z("nextC").onclick=()=>{xt.kind=Vh[(Vh.indexOf(xt.kind)+1)%4],yi(),Ka(),Dt.resume(),Dt.play("ui")};var Xh=(n,t,e)=>{let i=n.findIndex(s=>s.id===xt[t]);xt[t]=n[(i+e+n.length)%n.length].id,yi(),Ka(),Dt.resume(),Dt.play("ui")};z("hatP").onclick=()=>Xh(go,"hat",-1);z("hatN").onclick=()=>Xh(go,"hat",1);z("camoP").onclick=()=>Xh(Na,"camo",-1);z("camoN").onclick=()=>Xh(Na,"camo",1);function ja(){let n=xt.lo,t=Li[n.rifle];z("loName").textContent=t.name,z("loName2")&&(z("loName2").textContent=t.name);let e=n.att.map(s=>Ga.find(r=>r.id===s).name).join("\u30FB")||"\u30A2\u30BF\u30C3\u30C1\u30E1\u30F3\u30C8\u306A\u3057",i=n.perks.map((s,r)=>(za[r].find(o=>o.id===s)||za[r][0]).name).filter(s=>s!=="\u306A\u3057").join("\u30FB")||"\u30D1\u30FC\u30AF\u306A\u3057";z("loSub").innerHTML=`${e}<br>${i}`,z("modeTxt").innerHTML=`\u547D\u306F1\u30E9\u30A6\u30F3\u30C91\u3064\u3002<br>\u7206\u5F3E\u306E\u7206\u7834\u304B\u3001\u6575\u306E\u5168\u6EC5\u3067\u52DD\u3061\u3002<br>${xt.winR}\u30E9\u30A6\u30F3\u30C9\u5148\u53D6\u30FB${xt.swap===1?"\u6BCE\u30E9\u30A6\u30F3\u30C9":xt.swap+"\u30E9\u30A6\u30F3\u30C9\u3054\u3068\u306B"}\u653B\u5B88\u4EA4\u4EE3\u3002`}function _o(n){let t=xt.lo;z("rifleList").innerHTML=Object.values(Li).map(e=>`<div class="rf${t.rifle===e.id?" on":""}" data-r="${e.id}"><b>${e.name}</b><small>${e.tag}\u30FB\u5F3E${e.mag}\u767A<br>${e.spec}</small><div class="bars">${Object.entries(e.stats).map(([i,s])=>`<span>${i}</span><i><u style="width:${s*20}%"></u></i>`).join("")}</div></div>`).join(""),z("rifleList").querySelectorAll(".rf").forEach(e=>e.onclick=()=>{t.rifle=e.dataset.r,yi(),Dt.play("ui"),_o(Li[t.rifle].desc),Ka()}),z("attCnt").textContent=`${t.att.length}/2`,z("attList").innerHTML=Ga.map(e=>{let i=t.att.includes(e.id),s=!i&&(t.att.length>=2||e.ex&&t.att.includes(e.ex));return`<button data-a="${e.id}" class="${i?"on":s?"no":""}">${e.name}</button>`}).join(""),z("attList").querySelectorAll("button").forEach(e=>e.onclick=()=>{let i=e.dataset.a,s=Ga.find(o=>o.id===i),r=t.att.indexOf(i);r>=0?t.att.splice(r,1):(s.ex&&t.att.includes(s.ex)&&t.att.splice(t.att.indexOf(s.ex),1),t.att.length>=2&&t.att.shift(),t.att.push(i)),yi(),Dt.play("ui"),_o(s.name+"\uFF1A"+s.desc+(s.ex?`
\u203B${Ga.find(o=>o.id===s.ex).name}\u3068\u306F\u540C\u6642\u306B\u4ED8\u3051\u3089\u308C\u307E\u305B\u3093\u3002`:""))});for(let[e,i,s]of[["tacList",cm,"tac"],["letList",hm,"let"]])z(e).innerHTML=i.map(r=>`<button data-x="${r.id}" class="${(t[s]||"none")===r.id?"on":""}">${r.name}</button>`).join(""),z(e).querySelectorAll("button").forEach(r=>r.onclick=()=>{t[s]=r.dataset.x,yi(),Dt.play("ui");let o=i.find(a=>a.id===r.dataset.x);_o(o.desc?o.name+"\uFF1A"+o.desc:"")});[0,1,2].forEach(e=>{z("perk"+e).innerHTML=za[e].map(i=>`<button data-p="${i.id}" class="${t.perks[e]===i.id?"on":""}">${i.name}</button>`).join(""),z("perk"+e).querySelectorAll("button").forEach(i=>i.onclick=()=>{t.perks[e]=i.dataset.p,yi(),Dt.play("ui");let s=za[e].find(r=>r.id===i.dataset.p);_o(s.desc?s.name+"\uFF1A"+s.desc:"")})}),n!==void 0&&(z("loDesc").textContent=n),ja()}(!xt.lo||!Li[xt.lo.rifle])&&(xt.lo=JSON.parse(JSON.stringify(Vd)));xt.lo.tac===void 0&&(xt.lo.tac="smoke");xt.lo.let===void 0&&(xt.lo.let="axe");z("loCard").onclick=()=>{Dt.resume(),Dt.play("ui"),_o(Li[xt.lo.rifle].desc),z("loM").classList.remove("hide")};z("loClose").onclick=()=>{z("loM").classList.add("hide"),yi(),ja()};ja();function Vm(){let n=gs[xt.map]||on;z("mapName").textContent=n.name,z("mapDesc").textContent=n.desc}Vm();z("mapChip").onclick=()=>{let n=Object.keys(gs);xt.map=n[(n.indexOf(xt.map)+1)%n.length],yi(),Dt.play("ui"),Vm(),z("ldTxt").textContent=`\u30DE\u30C3\u30D7\u300C${gs[xt.map].name}\u300D\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026`,z("loading").classList.remove("hide"),setTimeout(()=>location.reload(),150)};var Be=Ih();function Sm(){Be=Ih();let n=$i(Be.rp);z("rankChip").innerHTML=`${xo(n.tier.id,34,n.div)}<span>${n.label}\u3000${Be.rp} RP</span>`,z("mRankSub").textContent=`${n.label}\u30FB\u53C2\u52A0\u8CBB ${n.tier.fee} RP\u30FB8\u30E9\u30A6\u30F3\u30C9\u5148\u53D6`,z("loName2").textContent=Li[xt.lo.rifle].name}function Wm(n,t){z("infoT").textContent=n,z("infoB").innerHTML=t,z("infoM").classList.remove("hide")}z("infoClose").onclick=()=>z("infoM").classList.add("hide");z("mCasual").onclick=()=>qh("casual");z("mRank").onclick=()=>qh("rank");z("mRange").onclick=()=>qh("range");z("mLoad").onclick=()=>{Dt.resume(),Dt.play("ui"),_o(Li[xt.lo.rifle].desc),z("loM").classList.remove("hide")};z("mFriend").onclick=()=>{Dt.play("ui"),Wm("\u30D5\u30EC\u30F3\u30C9",'<div class="rpList">ID\u3067\u30D5\u30EC\u30F3\u30C9\u3092\u8FFD\u52A0\u3057\u3066\u3001\u30D1\u30FC\u30C6\u30A3\u3092\u7D44\u3093\u3067\u4E00\u7DD2\u306B\u904A\u3079\u308B\u6A5F\u80FD\u306F\u6E96\u5099\u4E2D\u3067\u3059\u3002<br>\u30AA\u30F3\u30E9\u30A4\u30F3\u5BFE\u6226\u7528\u306E\u4ED5\u7D44\u307F\uFF08\u901A\u4FE1\u30B5\u30FC\u30D0\u30FC\uFF09\u3092\u4F5C\u3063\u3066\u304B\u3089\u8FFD\u52A0\u3057\u307E\u3059\u3002</div>')};z("mCareer").onclick=()=>{Dt.play("ui"),Be=Ih();let n=$i(Be.rp),t=$i(Be.best),e=Be.badges.length?Be.badges.map(i=>`<div>${xo(i.tier,54)}<br>${Wd(i.season)}<br>${Di.find(s=>s.id===i.tier).name}</div>`).join(""):'<div style="opacity:.7">\u307E\u3060\u30B7\u30FC\u30BA\u30F3\u30D0\u30C3\u30B8\u306F\u3042\u308A\u307E\u305B\u3093\u3002<br>\u30B7\u30FC\u30BA\u30F3\u304C\u7D42\u308F\u308B\u3068\u3001\u305D\u306E\u6708\u306B\u5C4A\u3044\u305F\u4E00\u756A\u9AD8\u3044\u6BB5\u968E\u306E\u30D0\u30C3\u30B8\u304C\u3082\u3089\u3048\u307E\u3059\u3002</div>';Wm("\u30AD\u30E3\u30EA\u30A2",`<div class="loGrid"><div><div class="rkHead">${xo(n.tier.id,80,n.div)}<div><div class="nm">${n.label}</div><small>${Wd(Be.season)}\u30FB\u6700\u9AD8 ${t.label}</small><div class="rkBar"><i style="width:${n.progress*100}%"></i></div><small>${Be.rp} RP\uFF08\u6B21\u307E\u3067 ${Math.max(0,n.hi-Be.rp)} RP\uFF09</small></div></div>
  <div class="rpList">\u30E9\u30F3\u30AF\u8A66\u5408 ${Be.games}\u3000\u52DD\u5229 ${Be.wins}\u3000\u30AD\u30EB ${Be.kills}</div>
  <h4 style="margin:1vh 0 .3vh;color:#aab">\u30B7\u30FC\u30BA\u30F3\u30D0\u30C3\u30B8</h4><div class="tiers">${e}</div></div>
  <div><h4 style="margin:0 0 .3vh;color:#aab">\u6BB5\u968E\u3068\u30DD\u30A4\u30F3\u30C8\u306E\u4ED5\u7D44\u307F</h4><div class="tiers">${Di.map(i=>`<div>${xo(i.id,44)}<br>${i.name}<br>${i.min}\u301C</div>`).join("")}</div>
  <div class="rpList" style="margin-top:1vh">\u52DD\u5229 +100\uFF0F\u53D6\u3063\u305F\u30E9\u30A6\u30F3\u30C9 1\u3064 +10\uFF0F\u30AD\u30EB +12\uFF0F\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8 +4\uFF0FMVP +20<br>\u8A66\u5408\u3054\u3068\u306B\u53C2\u52A0\u8CBB\uFF08\u30EB\u30FC\u30AD\u30FC0\u301C\u30D9\u30B8\u30AD\u30F3\u30B075\uFF09\u3092\u5F15\u304D\u307E\u3059\u3002<br>\u6BB5\u968E\u306E\u4E00\u756A\u4E0B\u3088\u308A\u4E0B\u306B\u306F\u843D\u3061\u307E\u305B\u3093\u3002<br>\u6BCE\u6708\u65B0\u3057\u3044\u30B7\u30FC\u30BA\u30F3\u3002\u59CB\u307E\u308B\u3068\u5C11\u3057\u4E0B\u306E\u6BB5\u968E\u304B\u3089\u518D\u30B9\u30BF\u30FC\u30C8\u3002</div></div></div>`)};async function qh(n){Y.mode=n,await Dt.init(),Dt.resume(),Dt.play("ui"),_s&&(ye.remove(_s.root),_s=null),z("lobby").classList.add("hide"),z("hud").classList.remove("hide"),z("ctl").classList.remove("hide"),z("camBtn").textContent=xt.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0";try{Ui&&document.documentElement.requestFullscreen&&!document.fullscreenElement&&await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}Ui||Qe.domElement.requestPointerLock(),Dm(),xt.bgm&&n!=="range"&&Dt.bgm(!0),Dt.wind(!0)}z("startBtn").onclick=()=>qh("casual");z("againBtn").onclick=()=>{z("result").classList.add("hide"),z("ctl").classList.remove("hide"),Dm(),xt.bgm&&Dt.bgm(!0)};z("setBtn").onclick=()=>z("settings").classList.remove("hide");z("toLobby").onclick=()=>df();function ff(n){n?(Y.paused=!0,z("pause").classList.remove("hide"),document.pointerLockElement&&document.exitPointerLock()):(Y.paused=!1,z("pause").classList.add("hide"),!Ui&&pt&&Qe.domElement.requestPointerLock())}z("resumeBtn").onclick=()=>ff(!1);z("quitBtn").onclick=()=>{Y.paused=!1,Dt.wind(!1),df()};z("pSetBtn").onclick=()=>z("settings").classList.remove("hide");z("setBtn").onclick=()=>z("settings").classList.remove("hide");z("setClose").onclick=()=>{z("settings").classList.add("hide"),yi()};z("sens").value=xt.sens;z("sensAds").value=xt.sensAds;z("sens").oninput=n=>xt.sens=+n.target.value;z("sensAds").oninput=n=>xt.sensAds=+n.target.value;function Js(n,t,e){let i=z(n);i.querySelectorAll("button").forEach(s=>{s.classList.toggle("on",String(xt[t])===s.dataset.v),s.onclick=()=>{xt[t]=isNaN(+s.dataset.v)?s.dataset.v:+s.dataset.v,i.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r===s)),yi(),e&&e()}})}Js("fireMode","fireMode");Js("winR","winR",ja);Js("swapSeg","swap",ja);Js("kcSeg","killcam");Js("lfSeg","leftFire",Bm);Js("diff","diff");Js("bgmSeg","bgm",()=>{Y.phase!=="lobby"&&Dt.bgm(!!xt.bgm)});Js("quality","quality",()=>{$s("","\u753B\u8CEA\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002\u6B21\u306B\u958B\u3044\u305F\u3068\u304D\u304B\u3089\u53CD\u6620\u3055\u308C\u307E\u3059",2)});var wm=performance.now(),Nh=0,Jd=0;function Xm(n){requestAnimationFrame(Xm);let t=Math.min(.05,(n-wm)/1e3);if(wm=n,Nh+=t,Jd++,Nh>2){let e=Jd/Nh;Nh=0,Jd=0,e<40&&xs>.75?(xs=Math.max(.75,xs-.15),Qe.setPixelRatio(xs),Bh()):e>58&&xs<Math.min(devicePixelRatio,xt.quality===2?2:1.5)&&(xs=Math.min(xs+.1,2),Qe.setPixelRatio(xs),Bh())}if(Y.phase==="lobby"){F2(t),qa();return}if(!pt||Y.paused){qa();return}if(Y.phase==="end"){qa();return}qm(t),qa()}function qm(n){let t=n;Y.slowmo>0&&(Y.slowmo-=n,t=n*.25),h2(t),E2(t);for(let e of Re)e.ai&&g2(e,t);for(let e of Re)S2(e,t);jv(t),pt.blindT>0&&(pt.blindT-=t),z("flashOv").style.opacity=mn((pt.blindT||0)/1.2,0,1),Bv(t),N2(),A2(),T2(n),I2(n)}function qa(){Fd.time.value=performance.now()/1e3,Qe.clear(),Qe.render(ye,Ee),Y.phase!=="lobby"&&pt&&zt.root.visible&&(Qe.clearDepth(),Qe.render(bs,ji))}v2();b2();C2();window.__vw={Veg:Vs,KINDS:jp,throwEquip:br,smokes:Ys,throws:$a,kill:Wh,endRound:bo,render:qa,renderer:Qe,vm:zt,vmCam:ji,V3:ut,sim(n){for(let t=0;t<n*30&&Y.phase!=="end";t++)qm(1/30)},game:Y,get player(){return pt},get fighters(){return Re},camera:Ee,scene:ye,CFG:xt,startRound:uf,tryAct:Eo,fire:cf};Pv().then(()=>requestAnimationFrame(Xm));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
