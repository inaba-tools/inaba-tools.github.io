(()=>{var t0=0,wu=1,e0=2;var lr=1,lc=2,eo=3,Ns=0,mn=1,an=2,cr=0,Us=1,hr=2,Tu=3,Au=4,n0=5;var ur=100,i0=101,s0=102,r0=103,o0=104,a0=200,l0=201,c0=202,h0=203,Ru=204,Cu=205,u0=206,d0=207,f0=208,p0=209,m0=210,g0=211,x0=212,y0=213,_0=214,Tl=0,Al=1,Rl=2,kr=3,Cl=4,Pl=5,Il=6,Ll=7,cc=0,M0=1,v0=2,ki=0,Pu=1,Iu=2,Lu=3,ha=4,Du=5,Nu=6,Uu=7;var Fu=300,dr=301,no=302,hc=303,uc=304,ss=1e3,Ni=1001,Dl=1002,vn=1003,b0=1004;var ua=1005;var Hn=1006,dc=1007;var ls=1008;var Yn=1009,Ou=1010,Bu=1011,io=1012,fc=1013,Ei=1014,hi=1015,Si=1016,pc=1017,mc=1018,fr=1020,Hu=35902,ku=35899,Gu=1021,zu=1022,wi=1023,rs=1026,cs=1027,gc=1028,xc=1029,Fs=1030,yc=1031;var _c=1033,da=33776,fa=33777,pa=33778,ma=33779,Mc=35840,vc=35841,bc=35842,Ec=35843,Sc=36196,wc=37492,Tc=37496,Ac=37488,Rc=37489,ga=37490,Cc=37491,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Nc=37812,Uc=37813,Fc=37814,Oc=37815,Bc=37816,Hc=37817,kc=37818,Gc=37819,zc=37820,Vc=37821,Wc=36492,Xc=36494,qc=36495,Yc=36283,$c=36284,xa=36285,Zc=36286;var Uo=2300,Nl=2301,Sl=2302,pu=2303,mu=2400,gu=2401,xu=2402;var E0=3200;var ya=0,S0=1,hs="",rn="srgb",Fo="srgb-linear",Oo="linear",Fe="srgb";var wl=7680;var w0=519,T0=512,A0=513,R0=514,Vu=515,C0=516,P0=517,Wu=518,Xu=519,qu=35044;var Yu="300 es",oi=2e3,Gr=2001;function $m(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Zm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function I0(){let n=Bo("canvas");return n.style.display="block",n}var Mf={},zr=null;function Ho(...n){let t="THREE."+n.shift();zr?zr("log",t,...n):console.log(t,...n)}function L0(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function te(...n){n=L0(n);let t="THREE."+n.shift();if(zr)zr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ne(...n){n=L0(n);let t="THREE."+n.shift();if(zr)zr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ir(...n){let t=n.join(" ");t in Mf||(Mf[t]=!0,te(...n))}function D0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var N0={[Tl]:Tl,[Rl]:Il,[Cl]:Cl,[kr]:Pl,[Al]:Al,[Il]:Rl,[Ll]:Ll,[Pl]:kr},Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zh=Math.PI/180,Ul=180/Math.PI;function Os(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function be(n,t,e){return Math.max(t,Math.min(e,n))}function Jm(n,t){return(n%t+t)%t}function Vh(n,t,e){return(1-e)*n+e*t}function U0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function F0(n,t){if(t.constructor===Float32Array)return n;let e=Jc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function O0(n,t){if(t.constructor===Float32Array)return n;let e=Jc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Qu=class Qu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qu.prototype.isVector2=!0;var ht=Qu,on=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let M=Math.acos(m),S=Math.sin(M);g=Math.sin(g*M)/S,a=Math.sin(a*M)/S,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},td=class td{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wh.copy(this).projectOnVector(t),this.sub(Wh)}reflect(t){return this.sub(Wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};td.prototype.isVector3=!0;var U=td,Wh=new U,vf=new on,ed=class ed{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=s[0],m=s[3],g=s[6],M=s[1],S=s[4],v=s[7],C=s[2],R=s[5],y=s[8];return r[0]=o*x+a*M+l*C,r[3]=o*m+a*S+l*R,r[6]=o*g+a*v+l*y,r[1]=c*x+h*M+u*C,r[4]=c*m+h*S+u*R,r[7]=c*g+h*v+u*y,r[2]=d*x+f*M+p*C,r[5]=d*m+f*S+p*R,r[8]=d*g+f*v+p*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xh.makeScale(t,e)),this}rotate(t){return ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xh.makeRotation(-t)),this}translate(t,e){return ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ed.prototype.isMatrix3=!0;var ce=ed,Xh=new ce,bf=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ef=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Km(){let n={enabled:!0,workingColorSpace:Fo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fe&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fe&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?Oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fo]:{primaries:t,whitePoint:i,transfer:Oo,toXYZ:bf,fromXYZ:Ef,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:Fe,toXYZ:bf,fromXYZ:Ef,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}var Le=Km();function is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var vr,Fl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{vr===void 0&&(vr=Bo("canvas")),vr.width=t.width,vr.height=t.height;let s=vr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=vr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Bo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=is(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(is(e[i]/255)*255):e[i]=is(e[i]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jm=0,Vr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qh(s[o].image)):r.push(qh(s[o]))}else r=qh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function qh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var Qm=0,Yh=new U,kn=class n extends Ui{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ni,s=Ni,r=Hn,o=ls,a=wi,l=Yn,c=n.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Os(),this.name="",this.source=new Vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yh).x}get height(){return this.source.getSize(Yh).y}get depth(){return this.source.getSize(Yh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ss:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ss:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Fu;kn.DEFAULT_ANISOTROPY=1;var nd=class nd{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(f+1)/2,C=(g+1)/2,R=(h+d)/4,y=(u+x)/4,b=(p+m)/4;return S>v&&S>C?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=y/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=b/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=y/r,s=b/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nd.prototype.isVector4=!0;var $e=nd,Ol=class extends Ui{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new $e(0,0,t,e),this.scissorTest=!1,this.viewport=new $e(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new kn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Ol{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ko=class extends kn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bl=class extends kn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ac=class ac{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ac().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/br.setFromMatrixColumn(t,0).length(),r=1/br.setFromMatrixColumn(t,1).length(),o=1/br.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tg,t,eg)}lookAt(t,e,i){let s=this.elements;return Zn.subVectors(t,e),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),bs.crossVectors(i,Zn),bs.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),bs.crossVectors(i,Zn)),bs.normalize(),ja.crossVectors(Zn,bs),s[0]=bs.x,s[4]=ja.x,s[8]=Zn.x,s[1]=bs.y,s[5]=ja.y,s[9]=Zn.y,s[2]=bs.z,s[6]=ja.z,s[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],M=i[3],S=i[7],v=i[11],C=i[15],R=s[0],y=s[4],b=s[8],P=s[12],E=s[1],I=s[5],F=s[9],B=s[13],D=s[2],G=s[6],q=s[10],V=s[14],ct=s[3],J=s[7],rt=s[11],ot=s[15];return r[0]=o*R+a*E+l*D+c*ct,r[4]=o*y+a*I+l*G+c*J,r[8]=o*b+a*F+l*q+c*rt,r[12]=o*P+a*B+l*V+c*ot,r[1]=h*R+u*E+d*D+f*ct,r[5]=h*y+u*I+d*G+f*J,r[9]=h*b+u*F+d*q+f*rt,r[13]=h*P+u*B+d*V+f*ot,r[2]=p*R+x*E+m*D+g*ct,r[6]=p*y+x*I+m*G+g*J,r[10]=p*b+x*F+m*q+g*rt,r[14]=p*P+x*B+m*V+g*ot,r[3]=M*R+S*E+v*D+C*ct,r[7]=M*y+S*I+v*G+C*J,r[11]=M*b+S*F+v*q+C*rt,r[15]=M*P+S*B+v*V+C*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],M=l*f-c*d,S=a*f-c*u,v=a*d-l*u,C=o*f-c*h,R=o*d-l*h,y=o*u-a*h;return e*(x*M-m*S+g*v)-i*(p*M-m*C+g*R)+s*(p*S-x*C+g*y)-r*(p*v-x*R+m*y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],M=e*a-i*o,S=e*l-s*o,v=e*c-r*o,C=i*l-s*a,R=i*c-r*a,y=s*c-r*l,b=h*x-u*p,P=h*m-d*p,E=h*g-f*p,I=u*m-d*x,F=u*g-f*x,B=d*g-f*m,D=M*B-S*F+v*I+C*E-R*P+y*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/D;return t[0]=(a*B-l*F+c*I)*G,t[1]=(s*F-i*B-r*I)*G,t[2]=(x*y-m*R+g*C)*G,t[3]=(d*R-u*y-f*C)*G,t[4]=(l*E-o*B-c*P)*G,t[5]=(e*B-s*E+r*P)*G,t[6]=(m*v-p*y-g*S)*G,t[7]=(h*y-d*v+f*S)*G,t[8]=(o*F-a*E+c*b)*G,t[9]=(i*E-e*F-r*b)*G,t[10]=(p*R-x*v+g*M)*G,t[11]=(u*v-h*R-f*M)*G,t[12]=(a*P-o*I-l*b)*G,t[13]=(e*I-i*P+s*b)*G,t[14]=(x*S-p*C-m*M)*G,t[15]=(h*C-u*S+d*M)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,M=l*c,S=l*h,v=l*u,C=i.x,R=i.y,y=i.z;return s[0]=(1-(x+g))*C,s[1]=(f+v)*C,s[2]=(p-S)*C,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+g))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(p+S)*y,s[9]=(m-M)*y,s[10]=(1-(d+x))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=br.set(s[0],s[1],s[2]).length(),a=br.set(s[4],s[5],s[6]).length(),l=br.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xi.copy(this);let c=1/o,h=1/a,u=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,e.setFromRotationMatrix(xi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=oi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===oi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Gr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=oi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===oi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Gr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ac.prototype.isMatrix4=!0;var jt=ac,br=new U,xi=new jt,tg=new U(0,0,0),eg=new U(1,1,1),bs=new U,ja=new U,Zn=new U,Sf=new jt,wf=new on,ai=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Sf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wf.setFromEuler(this),this.setFromQuaternion(wf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ng=0,Tf=new U,Er=new on,Ki=new jt,Qa=new U,Eo=new U,ig=new U,sg=new on,Af=new U(1,0,0),Rf=new U(0,1,0),Cf=new U(0,0,1),Pf={type:"added"},rg={type:"removed"},Sr={type:"childadded",child:null},$h={type:"childremoved",child:null},Xe=class n extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new ai,i=new on,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new ce}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(Af,t)}rotateY(t){return this.rotateOnAxis(Rf,t)}rotateZ(t){return this.rotateOnAxis(Cf,t)}translateOnAxis(t,e){return Tf.copy(t).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Af,t)}translateY(t){return this.translateOnAxis(Rf,t)}translateZ(t){return this.translateOnAxis(Cf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qa.copy(t):Qa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Eo,Qa,this.up):Ki.lookAt(Qa,Eo,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),Er.setFromRotationMatrix(Ki),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pf),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rg),$h.child=t,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pf),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,ig),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,sg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xe.DEFAULT_UP=new U(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var It=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new It;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},B0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Zh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ie=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=i,Le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Le.workingColorSpace){if(t=Jm(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Zh(o,r,t+1/3),this.g=Zh(o,r,t),this.b=Zh(o,r,t-1/3)}return Le.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let i=B0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Le.workingToColorSpace(Cn.copy(this),t),Math.round(be(Cn.r*255,0,255))*65536+Math.round(be(Cn.g*255,0,255))*256+Math.round(be(Cn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.workingToColorSpace(Cn.copy(this),e);let i=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.workingToColorSpace(Cn.copy(this),e),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=rn){Le.workingToColorSpace(Cn.copy(this),t);let e=Cn.r,i=Cn.g,s=Cn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Es),this.setHSL(Es.h+t,Es.s+e,Es.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Es),t.getHSL(tl);let i=Vh(Es.h,tl.h,e),s=Vh(Es.s,tl.s,e),r=Vh(Es.l,tl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new ie;ie.NAMES=B0;var zo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},As=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yi=new U,ji=new U,Jh=new U,Qi=new U,wr=new U,Tr=new U,If=new U,Kh=new U,jh=new U,Qh=new U,tu=new $e,eu=new $e,nu=new $e,ns=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yi.subVectors(t,e),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){yi.subVectors(s,e),ji.subVectors(i,e),Jh.subVectors(t,e);let o=yi.dot(yi),a=yi.dot(ji),l=yi.dot(Jh),c=ji.dot(ji),h=ji.dot(Jh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(o,Qi.y),l.addScaledVector(a,Qi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return tu.setScalar(0),eu.setScalar(0),nu.setScalar(0),tu.fromBufferAttribute(t,e),eu.fromBufferAttribute(t,i),nu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(tu,r.x),o.addScaledVector(eu,r.y),o.addScaledVector(nu,r.z),o}static isFrontFacing(t,e,i,s){return yi.subVectors(i,e),ji.subVectors(t,e),yi.cross(ji).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),yi.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;wr.subVectors(s,i),Tr.subVectors(r,i),Kh.subVectors(t,i);let l=wr.dot(Kh),c=Tr.dot(Kh);if(l<=0&&c<=0)return e.copy(i);jh.subVectors(t,s);let h=wr.dot(jh),u=Tr.dot(jh);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(wr,o);Qh.subVectors(t,r);let f=wr.dot(Qh),p=Tr.dot(Qh);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Tr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return If.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(If,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(i).addScaledVector(wr,o).addScaledVector(Tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),el.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(t.matrixWorld),this.union(el)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(So),nl.subVectors(this.max,So),Ar.subVectors(t.a,So),Rr.subVectors(t.b,So),Cr.subVectors(t.c,So),Ss.subVectors(Rr,Ar),ws.subVectors(Cr,Rr),js.subVectors(Ar,Cr);let e=[0,-Ss.z,Ss.y,0,-ws.z,ws.y,0,-js.z,js.y,Ss.z,0,-Ss.x,ws.z,0,-ws.x,js.z,0,-js.x,-Ss.y,Ss.x,0,-ws.y,ws.x,0,-js.y,js.x,0];return!iu(e,Ar,Rr,Cr,nl)||(e=[1,0,0,0,1,0,0,0,1],!iu(e,Ar,Rr,Cr,nl))?!1:(il.crossVectors(Ss,ws),e=[il.x,il.y,il.z],iu(e,Ar,Rr,Cr,nl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ts=[new U,new U,new U,new U,new U,new U,new U,new U],_i=new U,el=new Fi,Ar=new U,Rr=new U,Cr=new U,Ss=new U,ws=new U,js=new U,So=new U,nl=new U,il=new U,Qs=new U;function iu(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qs.fromArray(n,r);let a=s.x*Math.abs(Qs.x)+s.y*Math.abs(Qs.y)+s.z*Math.abs(Qs.z),l=t.dot(Qs),c=e.dot(Qs),h=i.dot(Qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var un=new U,sl=new ht,ag=0,dn=class extends Ui{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ag++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qu,this.updateRanges=[],this.gpuType=hi,this.version=0,this._normalizationScale=t!==void 0?Jc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sl.fromBufferAttribute(this,e),sl.applyMatrix3(t),this.setXY(e,sl.x,sl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):F0(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):O0(t,this.array)}};var Vo=class extends dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Wo=class extends dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var le=class extends dn{constructor(t,e,i){super(new Float32Array(t),e,i)}},lg=new Fi,wo=new U,su=new U,Rs=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):lg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);let e=wo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(wo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(su.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(su)),this.expandByPoint(wo.copy(t.center).sub(su))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cg=0,ri=new jt,ru=new Xe,Pr=new U,Jn=new Fi,To=new Fi,Mn=new U,Ze=class n extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($m(t)?Wo:Vo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ce().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,i){return ri.makeTranslation(t,e,i),this.applyMatrix4(ri),this}scale(t,e,i){return ri.makeScale(t,e,i),this.applyMatrix4(ri),this}lookAt(t){return ru.lookAt(t),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];To.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(Jn.min,To.min),Jn.expandByPoint(Mn),Mn.addVectors(Jn.max,To.max),Jn.expandByPoint(Mn)):(Jn.expandByPoint(To.min),Jn.expandByPoint(To.max))}Jn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Mn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Mn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mn.fromBufferAttribute(a,c),l&&(Pr.fromBufferAttribute(t,c),Mn.add(Pr)),s=Math.max(s,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new dn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;let h=new U,u=new U,d=new U,f=new ht,p=new ht,x=new ht,m=new U,g=new U;function M(P,E,I){c[P]=c[E]=c[I]=1,h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,I),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,I),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(F),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(F),a[P].add(m),a[E].add(m),a[I].add(m),l[P].add(g),l[E].add(g),l[I].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,E=S.length;P<E;++P){let I=S[P],F=I.start,B=I.count;for(let D=F,G=F+B;D<G;D+=3)M(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let v=new U,C=new U,R=new U,y=new U;function b(P){R.fromBufferAttribute(s,P),y.copy(R);let E=a[P];v.copy(E),v.sub(R.multiplyScalar(R.dot(E))).normalize(),C.crossVectors(y,E);let F=C.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,F)}for(let P=0,E=i.count;P<E;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Mn.fromBufferAttribute(t,e),Mn.normalize(),t.setXYZ(e,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new dn(d,h,u)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qu,this.updateRanges=[],this.version=0,this.uuid=Os()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Lf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Lf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Lf(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Os()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Bn=new U,Xr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?Jc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.applyMatrix4(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.applyNormalMatrix(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.transformDirection(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):F0(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):O0(t,this.data.array)}},ou=new U,hg=new U,ug=new ce,Mi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ou.subVectors(i,e).cross(hg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ou),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ug.getNormalMatrix(t),s=this.coplanarPoint(ou).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dg=0,Oi=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Us,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ru,this.blendDst=Cu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wl,this.stencilZFail=wl,this.stencilZPass=wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Mi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},sr=class extends Oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ir,Ao=new U,Lr=new U,Dr=new U,Nr=new ht,Ro=new ht,H0=new jt,rl=new U,Co=new U,ol=new U,Df=new ht,au=new ht,Nf=new ht,qr=class extends Xe{constructor(t=new sr){if(super(),this.isSprite=!0,this.type="Sprite",Ir===void 0){Ir=new Ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xo(e,5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute("position",new Xr(i,3,0,!1)),Ir.setAttribute("uv",new Xr(i,2,3,!1))}this.geometry=Ir,this.material=t,this.center=new ht(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lr.setFromMatrixScale(this.matrixWorld),H0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lr.multiplyScalar(-Dr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;al(rl.set(-.5,-.5,0),Dr,o,Lr,s,r),al(Co.set(.5,-.5,0),Dr,o,Lr,s,r),al(ol.set(.5,.5,0),Dr,o,Lr,s,r),Df.set(0,0),au.set(1,0),Nf.set(1,1);let a=t.ray.intersectTriangle(rl,Co,ol,!1,Ao);if(a===null&&(al(Co.set(-.5,.5,0),Dr,o,Lr,s,r),au.set(0,1),a=t.ray.intersectTriangle(rl,ol,Co,!1,Ao),a===null))return;let l=t.ray.origin.distanceTo(Ao);l<t.near||l>t.far||e.push({distance:l,point:Ao.clone(),uv:ns.getInterpolation(Ao,rl,Co,ol,Df,au,Nf,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function al(n,t,e,i,s,r){Nr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ro.x=r*Nr.x-s*Nr.y,Ro.y=s*Nr.x+r*Nr.y):Ro.copy(Nr),n.copy(t),n.x+=Ro.x,n.y+=Ro.y,n.applyMatrix4(H0)}var es=new U,lu=new U,ll=new U,cl=new U,Hl=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(es.copy(this.origin).addScaledVector(this.direction,e),es.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){lu.copy(t).add(e).multiplyScalar(.5),ll.copy(e).sub(t).normalize(),cl.copy(this.origin).sub(lu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ll),a=cl.dot(this.direction),l=-cl.dot(ll),c=cl.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lu).addScaledVector(ll,d),f}intersectSphere(t,e){if(t.radius<0)return null;es.subVectors(t.center,this.origin);let i=es.dot(this.direction),s=es.dot(es)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,es)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=i.x-o.x,M=i.y-o.y,S=i.z-o.z,v=Math.abs(l),C=Math.abs(c),R=Math.abs(h),y,b,P,E,I,F,B,D,G,q,V,ct;if(v>=C&&v>=R?(P=l,F=u,G=p,ct=g,l>=0?(y=c,b=h,E=d,I=f,B=x,D=m,q=M,V=S):(y=h,b=c,E=f,I=d,B=m,D=x,q=S,V=M)):C>=R?(P=c,F=d,G=x,ct=M,c>=0?(y=h,b=l,E=f,I=u,B=m,D=p,q=S,V=g):(y=l,b=h,E=u,I=f,B=p,D=m,q=g,V=S)):(P=h,F=f,G=m,ct=S,h>=0?(y=l,b=c,E=u,I=d,B=p,D=x,q=g,V=M):(y=c,b=l,E=d,I=u,B=x,D=p,q=M,V=g)),P===0)return null;let J=y/P,rt=b/P,ot=1/P,Pt=E-J*F,Zt=I-rt*F,tt=B-J*G,wt=D-rt*G,Bt=q-J*ct,Jt=V-rt*ct,K=Bt*wt-Jt*tt,Ot=Pt*Jt-Zt*Bt,pe=tt*Zt-wt*Pt;if(s){if(K<0||Ot<0||pe<0)return null}else if((K<0||Ot<0||pe<0)&&(K>0||Ot>0||pe>0))return null;let Yt=K+Ot+pe;if(Yt===0)return null;let me=ot*(K*F+Ot*G+pe*ct);return(Yt>0?me<0:me>0)?null:this.at(me/Yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vi=class extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Uf=new jt,tr=new Hl,hl=new Rs,Ff=new U,ul=new U,dl=new U,fl=new U,cu=new U,pl=new U,Of=new U,ml=new U,N=class extends Xe{constructor(t=new Ze,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){pl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(cu.fromBufferAttribute(u,t),o?pl.addScaledVector(cu,h):pl.addScaledVector(cu.sub(e),h))}e.add(pl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),tr.copy(t.ray).recast(t.near),!(hl.containsPoint(tr.origin)===!1&&(tr.intersectSphere(hl,Ff)===null||tr.origin.distanceToSquared(Ff)>(t.far-t.near)**2))&&(Uf.copy(r).invert(),tr.copy(t.ray).applyMatrix4(Uf),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,tr)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,C=S;v<C;v+=3){let R=a.getX(v),y=a.getX(v+1),b=a.getX(v+2);s=gl(this,g,t,i,c,h,u,R,y,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let M=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=gl(this,o,t,i,c,h,u,M,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,C=S;v<C;v+=3){let R=v,y=v+1,b=v+2;s=gl(this,g,t,i,c,h,u,R,y,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let M=m,S=m+1,v=m+2;s=gl(this,o,t,i,c,h,u,M,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function fg(n,t,e,i,s,r,o,a){let l;if(t.side===mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ns,a),l===null)return null;ml.copy(a),ml.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ml);return c<e.near||c>e.far?null:{distance:c,point:ml.clone(),object:n}}function gl(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ul),n.getVertexPosition(l,dl),n.getVertexPosition(c,fl);let h=fg(n,t,e,i,ul,dl,fl,Of);if(h){let u=new U;ns.getBarycoord(Of,ul,dl,fl,u),s&&(h.uv=ns.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.uv1=ns.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=ns.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};ns.getNormal(ul,dl,fl,d.normal),h.face=d,h.barycoord=u}return h}var qo=class extends kn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=vn,h=vn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yr=class extends dn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ur=new jt,Bf=new jt,xl=[],Hf=new Fi,pg=new jt,Po=new N,Io=new Rs,Cs=class extends N{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ur),Hf.copy(t.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Hf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ur),Io.copy(t.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(Io)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Po.geometry=this.geometry,Po.material=this.material,Po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(i),t.ray.intersectsSphere(Io)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ur),Bf.multiplyMatrices(i,Ur),Po.matrixWorld=Bf,Po.raycast(t,xl);for(let o=0,a=xl.length;o<a;o++){let l=xl[o];l.instanceId=r,l.object=this,e.push(l)}xl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new qo(new Float32Array(s*this.count),s,this.count,gc,hi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},er=new Rs,mg=new ht(.5,.5),yl=new U,Ps=class{constructor(t=new Mi,e=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=oi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],M=r[12],S=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,g-p,C-M).normalize(),s[1].setComponents(c+o,f+h,g+p,C+M).normalize(),s[2].setComponents(c+a,f+u,g+x,C+S).normalize(),s[3].setComponents(c-a,f-u,g-x,C-S).normalize(),i)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,g-m,C-v).normalize();else if(s[4].setComponents(c-l,f-d,g-m,C-v).normalize(),e===oi)s[5].setComponents(c+l,f+d,g+m,C+v).normalize();else if(e===Gr)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(t){er.center.set(0,0,0);let e=mg.distanceTo(t.center);return er.radius=.7071067811865476+e,er.applyMatrix4(t.matrixWorld),this.intersectsSphere(er)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(yl.x=s.normal.x>0?t.max.x:t.min.x,yl.y=s.normal.y>0?t.max.y:t.min.y,yl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kf=new jt,kl=class n{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];kf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ps),i[s].setFromProjectionMatrix(kf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ps),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Yo=class extends kn{constructor(t=[],e=dr,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bi=class extends kn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var os=class extends kn{constructor(t,e,i=Ei,s,r,o,a=vn,l=vn,c,h=rs,u=1){if(h!==rs&&h!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},$o=class extends os{constructor(t,e=Ei,i=dr,s,r,o=vn,a=vn,l,c=rs){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Zo=class extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},de=class n extends Ze{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function p(x,m,g,M,S,v,C,R,y,b,P){let E=v/y,I=C/b,F=v/2,B=C/2,D=R/2,G=y+1,q=b+1,V=0,ct=0,J=new U;for(let rt=0;rt<q;rt++){let ot=rt*I-B;for(let Pt=0;Pt<G;Pt++){let Zt=Pt*E-F;J[x]=Zt*M,J[m]=ot*S,J[g]=D,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[g]=R>0?1:-1,h.push(J.x,J.y,J.z),u.push(Pt/y),u.push(1-rt/b),V+=1}}for(let rt=0;rt<b;rt++)for(let ot=0;ot<y;ot++){let Pt=d+ot+G*rt,Zt=d+ot+G*(rt+1),tt=d+(ot+1)+G*(rt+1),wt=d+(ot+1)+G*rt;l.push(Pt,Zt,wt),l.push(Zt,tt,wt),ct+=6}a.addGroup(f,ct,P),f+=ct,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},as=class n extends Ze{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+r,x=s+1,m=new U,g=new U;for(let M=0;M<=p;M++){let S=0,v=0,C=0,R=0;if(M<=i){let P=M/i,E=P*Math.PI/2;v=-h-t*Math.cos(E),C=t*Math.sin(E),R=-t*Math.cos(E),S=P*u}else if(M<=i+r){let P=(M-i)/r;v=-h+P*e,C=t,R=0,S=u+P*d}else{let P=(M-i-r)/i,E=P*Math.PI/2;v=h+t*Math.sin(E),C=t*Math.cos(E),R=t*Math.sin(E),S=u+d+P*u}let y=Math.max(0,Math.min(1,S/f)),b=0;M===0?b=.5/s:M===p&&(b=-.5/s);for(let P=0;P<=s;P++){let E=P/s,I=E*Math.PI*2,F=Math.sin(I),B=Math.cos(I);g.x=-C*B,g.y=v,g.z=C*F,a.push(g.x,g.y,g.z),m.set(-C*B,R,C*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+b,y)}if(M>0){let P=(M-1)*x;for(let E=0;E<s;E++){let I=P+E,F=P+E+1,B=M*x+E,D=M*x+E+1;o.push(I,F,B),o.push(F,D,B)}}}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Bi=class n extends Ze{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xt=class n extends Ze{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=i/2,g=0;M(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function M(){let v=new U,C=new U,R=0,y=(e-t)/i;for(let b=0;b<=r;b++){let P=[],E=b/r,I=E*(e-t)+t;for(let F=0;F<=s;F++){let B=F/s,D=B*l+a,G=Math.sin(D),q=Math.cos(D);C.x=I*G,C.y=-E*i+m,C.z=I*q,u.push(C.x,C.y,C.z),v.set(G,y,q).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-E),P.push(p++)}x.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let E=x[P][b],I=x[P+1][b],F=x[P+1][b+1],B=x[P][b+1];(t>0||P!==0)&&(h.push(E,I,B),R+=3),(e>0||P!==r-1)&&(h.push(I,F,B),R+=3)}c.addGroup(g,R,0),g+=R}function S(v){let C=p,R=new ht,y=new U,b=0,P=v===!0?t:e,E=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),p++;let I=p;for(let F=0;F<=s;F++){let D=F/s*l+a,G=Math.cos(D),q=Math.sin(D);y.x=P*q,y.y=m*E,y.z=P*G,u.push(y.x,y.y,y.z),d.push(0,E,0),R.x=G*.5+.5,R.y=q*.5*E+.5,f.push(R.x,R.y),p++}for(let F=0;F<s;F++){let B=C+F,D=I+F;v===!0?h.push(D,D+1,B):h.push(D+1,D,B),b+=3}c.addGroup(g,b,v===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jn=class n extends xt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gl=class n extends Ze{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new U,v=new U,C=new U;for(let R=0;R<e.length;R+=3)f(e[R+0],S),f(e[R+1],v),f(e[R+2],C),l(S,v,C,M)}function l(M,S,v,C){let R=C+1,y=[];for(let b=0;b<=R;b++){y[b]=[];let P=M.clone().lerp(v,b/R),E=S.clone().lerp(v,b/R),I=R-b;for(let F=0;F<=I;F++)F===0&&b===R?y[b][F]=P:y[b][F]=P.clone().lerp(E,F/I)}for(let b=0;b<R;b++)for(let P=0;P<2*(R-b)-1;P++){let E=Math.floor(P/2);P%2===0?(d(y[b][E+1]),d(y[b+1][E]),d(y[b][E])):(d(y[b][E+1]),d(y[b+1][E+1]),d(y[b+1][E]))}}function c(M){let S=new U;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(M),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let M=new U;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];let v=m(M)/2/Math.PI+.5,C=g(M)/Math.PI+.5;o.push(v,1-C)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let S=o[M+0],v=o[M+2],C=o[M+4],R=Math.max(S,v,C),y=Math.min(S,v,C);R>.9&&y<.1&&(S<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,S){let v=M*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function p(){let M=new U,S=new U,v=new U,C=new U,R=new ht,y=new ht,b=new ht;for(let P=0,E=0;P<r.length;P+=9,E+=6){M.set(r[P+0],r[P+1],r[P+2]),S.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),R.set(o[E+0],o[E+1]),y.set(o[E+2],o[E+3]),b.set(o[E+4],o[E+5]),C.copy(M).add(S).add(v).divideScalar(3);let I=m(C);x(R,E+0,M,I),x(y,E+2,S,I),x(b,E+4,v,I)}}function x(M,S,v,C){C<0&&M.x===1&&(o[S]=M.x-1),v.x===0&&v.z===0&&(o[S]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new U,s=[],r=[],o=[],a=new U,l=new jt;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},$r=class extends Qn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},zl=class extends $r{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $u(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Gf=new U,zf=new U,hu=new $u,uu=new $u,du=new $u,Zr=class extends Qn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(zf.subVectors(s[0],s[1]).add(s[0]),c=zf);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Gf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),hu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),uu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),du.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),uu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),du.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(hu.calc(l),uu.calc(l),du.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function gg(n,t){let e=1-n;return e*e*t}function xg(n,t){return 2*(1-n)*n*t}function yg(n,t){return n*n*t}function Do(n,t,e,i){return gg(n,t)+xg(n,e)+yg(n,i)}function _g(n,t){let e=1-n;return e*e*e*t}function Mg(n,t){let e=1-n;return 3*e*e*n*t}function vg(n,t){return 3*(1-n)*n*n*t}function bg(n,t){return n*n*n*t}function No(n,t,e,i,s){return _g(n,t)+Mg(n,e)+vg(n,i)+bg(n,s)}var Jo=class extends Qn{constructor(t=new ht,e=new ht,i=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ht){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(No(t,s.x,r.x,o.x,a.x),No(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vl=class extends Qn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(No(t,s.x,r.x,o.x,a.x),No(t,s.y,r.y,o.y,a.y),No(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ko=class extends Qn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wl=class extends Qn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends Qn{constructor(t=new ht,e=new ht,i=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ht){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Do(t,s.x,r.x,o.x),Do(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends Qn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Do(t,s.x,r.x,o.x),Do(t,s.y,r.y,o.y),Do(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Vf(a,l.x,c.x,h.x,u.x),Vf(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Xl=Object.freeze({__proto__:null,ArcCurve:zl,CatmullRomCurve3:Zr,CubicBezierCurve:Jo,CubicBezierCurve3:Vl,EllipseCurve:$r,LineCurve:Ko,LineCurve3:Wl,QuadraticBezierCurve:jo,QuadraticBezierCurve3:Qo,SplineCurve:ta}),ql=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Xl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},rr=class extends ql{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ko(this.currentPoint.clone(),new ht(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new jo(this.currentPoint.clone(),new ht(t,e),new ht(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Jo(this.currentPoint.clone(),new ht(t,e),new ht(i,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ta(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new $r(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ti=class extends rr{constructor(t){super(t),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new rr().fromJSON(s))}return this}};function Eg(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=k0(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Rg(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ea(r,o,e,a,l,c,0),o}function k0(n,t,e,i,s){let r;if(s===Hg(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Wf(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Wf(o/i|0,n[o],n[o+1],r);return r&&Jr(r,r.next)&&(ia(r),r=r.next),r}function or(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Jr(e,e.next)||tn(e.prev,e,e.next)===0)){if(ia(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ea(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Dg(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?wg(n,i,s,r):Sg(n)){t.push(l.i,n.i,c.i),ia(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Tg(or(n),t),ea(n,t,e,i,s,r,2)):o===2&&Ag(n,t,e,i,s,r):ea(or(n),t,e,i,s,r,1);break}}}function Sg(n){let t=n.prev,e=n,i=n.next;if(tn(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Lo(s,a,r,l,o,c,p.x,p.y)&&tn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function wg(n,t,e,i){let s=n.prev,r=n,o=n.next;if(tn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=yu(f,p,t,e,i),M=yu(x,m,t,e,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=g&&v&&v.z<=M;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Lo(a,h,l,u,c,d,S.x,S.y)&&tn(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Lo(a,h,l,u,c,d,v.x,v.y)&&tn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Lo(a,h,l,u,c,d,S.x,S.y)&&tn(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Lo(a,h,l,u,c,d,v.x,v.y)&&tn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Tg(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Jr(i,s)&&z0(i,e,e.next,s)&&na(i,s)&&na(s,i)&&(t.push(i.i,e.i,s.i),ia(e),ia(e.next),e=n=s),e=e.next}while(e!==n);return or(e)}function Ag(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fg(o,a)){let l=V0(o,a);o=or(o,o.next),l=or(l,l.next),ea(o,t,e,i,s,r,0),ea(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Rg(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=k0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Ug(c))}s.sort(Cg);for(let r=0;r<s.length;r++)e=Pg(s[r],e);return e}function Cg(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Pg(n,t){let e=Ig(n,t);if(!e)return t;let i=V0(e,n);return or(i,i.next),or(e,e.next)}function Ig(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Jr(n,e))return e;do{if(Jr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&G0(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);na(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Lg(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Lg(n,t){return tn(n.prev,n,t.prev)<0&&tn(t.next,n,n.next)<0}function Dg(n,t,e,i){let s=n;do s.z===0&&(s.z=yu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ng(s)}function Ng(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function yu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ug(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function G0(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Lo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&G0(n,t,e,i,s,r,o,a)}function Fg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Og(n,t)&&(na(n,t)&&na(t,n)&&Bg(n,t)&&(tn(n.prev,n,t.prev)||tn(n,t.prev,t))||Jr(n,t)&&tn(n.prev,n,n.next)>0&&tn(t.prev,t,t.next)>0)}function tn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Jr(n,t){return n.x===t.x&&n.y===t.y}function z0(n,t,e,i){let s=Ml(tn(n,t,e)),r=Ml(tn(n,t,i)),o=Ml(tn(e,i,n)),a=Ml(tn(e,i,t));return!!(s!==r&&o!==a||s===0&&_l(n,e,t)||r===0&&_l(n,i,t)||o===0&&_l(e,n,i)||a===0&&_l(e,t,i))}function _l(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ml(n){return n>0?1:n<0?-1:0}function Og(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&z0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function na(n,t){return tn(n.prev,n,n.next)<0?tn(n,t,n.next)>=0&&tn(n,n.prev,t)>=0:tn(n,t,n.prev)<0||tn(n,n.next,t)<0}function Bg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function V0(n,t){let e=_u(n.i,n.x,n.y),i=_u(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Wf(n,t,e,i){let s=_u(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ia(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _u(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hg(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Mu=class{static triangulate(t,e,i=2){return Eg(t,e,i)}},nr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Xf(t),qf(i,t);let o=t.length;e.forEach(Xf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,qf(i,e[l]);let a=Mu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Xf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function qf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var li=class n extends Ze{constructor(t=new ti([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:kg,S,v=!1,C,R,y,b;if(g){S=g.getSpacedPoints(h),v=!0,d=!1;let lt=g.isCatmullRomCurve3?g.closed:!1;C=g.computeFrenetFrames(h,lt),R=new U,y=new U,b=new U}d||(m=0,f=0,p=0,x=0);let P=a.extractPoints(c),E=P.shape,I=P.holes;if(!nr.isClockWise(E)){E=E.reverse();for(let lt=0,vt=I.length;lt<vt;lt++){let yt=I[lt];nr.isClockWise(yt)&&(I[lt]=yt.reverse())}}function B(lt){let yt=10000000000000001e-36,Ht=lt[0];for(let Ct=1;Ct<=lt.length;Ct++){let fe=Ct%lt.length,qt=lt[fe],Ae=qt.x-Ht.x,Ce=qt.y-Ht.y,Ne=Ae*Ae+Ce*Ce,k=Math.max(Math.abs(qt.x),Math.abs(qt.y),Math.abs(Ht.x),Math.abs(Ht.y)),cn=yt*k*k;if(Ne<=cn){lt.splice(fe,1),Ct--;continue}Ht=qt}}B(E),I.forEach(B);let D=I.length,G=E;for(let lt=0;lt<D;lt++){let vt=I[lt];E=E.concat(vt)}function q(lt,vt,yt){return vt||ne("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(vt,yt)}let V=E.length;function ct(lt,vt,yt){let Ht,Ct,fe,qt=lt.x-vt.x,Ae=lt.y-vt.y,Ce=yt.x-lt.x,Ne=yt.y-lt.y,k=qt*qt+Ae*Ae,cn=qt*Ne-Ae*Ce;if(Math.abs(cn)>Number.EPSILON){let Se=Math.sqrt(k),Ge=Math.sqrt(Ce*Ce+Ne*Ne),Tt=vt.x-Ae/Se,en=vt.y+qt/Se,Qt=yt.x-Ne/Ge,ae=yt.y+Ce/Ge,L=((Qt-Tt)*Ne-(ae-en)*Ce)/(qt*Ne-Ae*Ce);Ht=Tt+qt*L-lt.x,Ct=en+Ae*L-lt.y;let T=Ht*Ht+Ct*Ct;if(T<=2)return new ht(Ht,Ct);fe=Math.sqrt(T/2)}else{let Se=!1;qt>Number.EPSILON?Ce>Number.EPSILON&&(Se=!0):qt<-Number.EPSILON?Ce<-Number.EPSILON&&(Se=!0):Math.sign(Ae)===Math.sign(Ne)&&(Se=!0),Se?(Ht=-Ae,Ct=qt,fe=Math.sqrt(k)):(Ht=qt,Ct=Ae,fe=Math.sqrt(k/2))}return new ht(Ht/fe,Ct/fe)}let J=[];for(let lt=0,vt=G.length,yt=vt-1,Ht=lt+1;lt<vt;lt++,yt++,Ht++)yt===vt&&(yt=0),Ht===vt&&(Ht=0),J[lt]=ct(G[lt],G[yt],G[Ht]);let rt=[],ot,Pt=J.concat();for(let lt=0,vt=D;lt<vt;lt++){let yt=I[lt];ot=[];for(let Ht=0,Ct=yt.length,fe=Ct-1,qt=Ht+1;Ht<Ct;Ht++,fe++,qt++)fe===Ct&&(fe=0),qt===Ct&&(qt=0),ot[Ht]=ct(yt[Ht],yt[fe],yt[qt]);rt.push(ot),Pt=Pt.concat(ot)}let Zt;if(m===0)Zt=nr.triangulateShape(G,I);else{let lt=[],vt=[];for(let yt=0;yt<m;yt++){let Ht=yt/m,Ct=f*Math.cos(Ht*Math.PI/2),fe=p*Math.sin(Ht*Math.PI/2)+x;for(let qt=0,Ae=G.length;qt<Ae;qt++){let Ce=q(G[qt],J[qt],fe);Ot(Ce.x,Ce.y,-Ct),Ht===0&&lt.push(Ce)}for(let qt=0,Ae=D;qt<Ae;qt++){let Ce=I[qt];ot=rt[qt];let Ne=[];for(let k=0,cn=Ce.length;k<cn;k++){let Se=q(Ce[k],ot[k],fe);Ot(Se.x,Se.y,-Ct),Ht===0&&Ne.push(Se)}Ht===0&&vt.push(Ne)}}Zt=nr.triangulateShape(lt,vt)}let tt=Zt.length,wt=p+x;for(let lt=0;lt<V;lt++){let vt=d?q(E[lt],Pt[lt],wt):E[lt];v?(y.copy(C.normals[0]).multiplyScalar(vt.x),R.copy(C.binormals[0]).multiplyScalar(vt.y),b.copy(S[0]).add(y).add(R),Ot(b.x,b.y,b.z)):Ot(vt.x,vt.y,0)}for(let lt=1;lt<=h;lt++)for(let vt=0;vt<V;vt++){let yt=d?q(E[vt],Pt[vt],wt):E[vt];v?(y.copy(C.normals[lt]).multiplyScalar(yt.x),R.copy(C.binormals[lt]).multiplyScalar(yt.y),b.copy(S[lt]).add(y).add(R),Ot(b.x,b.y,b.z)):Ot(yt.x,yt.y,u/h*lt)}for(let lt=m-1;lt>=0;lt--){let vt=lt/m,yt=f*Math.cos(vt*Math.PI/2),Ht=p*Math.sin(vt*Math.PI/2)+x;for(let Ct=0,fe=G.length;Ct<fe;Ct++){let qt=q(G[Ct],J[Ct],Ht);Ot(qt.x,qt.y,u+yt)}for(let Ct=0,fe=I.length;Ct<fe;Ct++){let qt=I[Ct];ot=rt[Ct];for(let Ae=0,Ce=qt.length;Ae<Ce;Ae++){let Ne=q(qt[Ae],ot[Ae],Ht);v?Ot(Ne.x,Ne.y+S[h-1].y,S[h-1].x+yt):Ot(Ne.x,Ne.y,u+yt)}}}Bt(),Jt();function Bt(){let lt=s.length/3;if(d){let vt=0,yt=V*vt;for(let Ht=0;Ht<tt;Ht++){let Ct=Zt[Ht];pe(Ct[2]+yt,Ct[1]+yt,Ct[0]+yt)}vt=h+m*2,yt=V*vt;for(let Ht=0;Ht<tt;Ht++){let Ct=Zt[Ht];pe(Ct[0]+yt,Ct[1]+yt,Ct[2]+yt)}}else{for(let vt=0;vt<tt;vt++){let yt=Zt[vt];pe(yt[2],yt[1],yt[0])}for(let vt=0;vt<tt;vt++){let yt=Zt[vt];pe(yt[0]+V*h,yt[1]+V*h,yt[2]+V*h)}}i.addGroup(lt,s.length/3-lt,0)}function Jt(){let lt=s.length/3,vt=0;K(G,vt),vt+=G.length;for(let yt=0,Ht=I.length;yt<Ht;yt++){let Ct=I[yt];K(Ct,vt),vt+=Ct.length}i.addGroup(lt,s.length/3-lt,1)}function K(lt,vt){let yt=lt.length;for(;--yt>=0;){let Ht=yt,Ct=yt-1;Ct<0&&(Ct=lt.length-1);for(let fe=0,qt=h+m*2;fe<qt;fe++){let Ae=V*fe,Ce=V*(fe+1),Ne=vt+Ht+Ae,k=vt+Ct+Ae,cn=vt+Ct+Ce,Se=vt+Ht+Ce;Yt(Ne,k,cn,Se)}}}function Ot(lt,vt,yt){l.push(lt),l.push(vt),l.push(yt)}function pe(lt,vt,yt){me(lt),me(vt),me(yt);let Ht=s.length/3,Ct=M.generateTopUV(i,s,Ht-3,Ht-2,Ht-1);Te(Ct[0]),Te(Ct[1]),Te(Ct[2])}function Yt(lt,vt,yt,Ht){me(lt),me(vt),me(Ht),me(vt),me(yt),me(Ht);let Ct=s.length/3,fe=M.generateSideWallUV(i,s,Ct-6,Ct-3,Ct-2,Ct-1);Te(fe[0]),Te(fe[1]),Te(fe[3]),Te(fe[1]),Te(fe[2]),Te(fe[3])}function me(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function Te(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Gg(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Xl[s.type]().fromJSON(s)),new n(i,t.options)}},kg={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(d,1-p),new ht(x,1-g)]:[new ht(a,1-l),new ht(h,1-u),new ht(f,1-p),new ht(m,1-g)]}};function Gg(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ei=class n extends Gl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},ar=class n extends Ze{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new U,d=new ht,f=new U,p=new U,x=new U,m=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let M=0;M<=e;M++){let S=i+M*h*s,v=Math.sin(S),C=Math.cos(S);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*v,u.y=t[R].y,u.z=t[R].x*C,o.push(u.x,u.y,u.z),d.x=M/e,d.y=R/(t.length-1),a.push(d.x,d.y);let y=l[3*R+0]*v,b=l[3*R+1],P=l[3*R+0]*C;c.push(y,b,P)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){let v=S+M*t.length,C=v,R=v+t.length,y=v+t.length+1,b=v+1;r.push(C,R,b),r.push(y,b,R)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var He=class n extends Ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let M=g*d-o;for(let S=0;S<c;S++){let v=S*u-r;p.push(v,-M,0),x.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let S=M+c*g,v=M+c*(g+1),C=M+1+c*(g+1),R=M+1+c*g;f.push(S,v,R),f.push(v,C,R)}this.setIndex(f),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var xe=class n extends Ze{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,d=new U,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let M=[],S=g/i,v=o+S*a,C=t*Math.cos(v),R=Math.sqrt(t*t-C*C),y=0;g===0&&o===0?y=.5/e:g===i&&l===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){let P=b/e,E=s+P*r;u.x=-R*Math.cos(E),u.y=C,u.z=R*Math.sin(E),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(P+y,1-S),M.push(c++)}h.push(M)}for(let g=0;g<i;g++)for(let M=0;M<e;M++){let S=h[g][M+1],v=h[g][M],C=h[g+1][M],R=h[g+1][M+1];(g!==0||o>0)&&f.push(S,v,R),(g!==i-1||l<Math.PI)&&f.push(v,C,R)}this.setIndex(f),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Je=class n extends Ze{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new U,f=new U,p=new U;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let M=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,S=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(g,M,v),l.push(M,S,v)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var sa=class n extends Ze{constructor(t=new Qo(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new ht,h=new U,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function x(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),M(),g()}function m(S){h=t.getPointAt(S/e,h);let v=o.normals[S],C=o.binormals[S];for(let R=0;R<=s;R++){let y=R/s*Math.PI*2,b=Math.sin(y),P=-Math.cos(y);l.x=P*v.x+b*C.x,l.y=P*v.y+b*C.y,l.z=P*v.z+b*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=e;S++)for(let v=1;v<=s;v++){let C=(s+1)*(S-1)+(v-1),R=(s+1)*S+(v-1),y=(s+1)*S+v,b=(s+1)*(S-1)+v;p.push(C,R,b),p.push(R,y,b)}}function M(){for(let S=0;S<=e;S++)for(let v=0;v<=s;v++)c.x=S/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Xl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function pr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Yf(s))s.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Yf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function In(n){let t={};for(let e=0;e<n.length;e++){let i=pr(n[e]);for(let s in i)t[s]=i[s]}return t}function Yf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function zg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}var W0={clone:pr,merge:In},Vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vg,this.fragmentShader=Wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=zg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ie().setHex(s.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[i].value=new jt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Yl=class extends ci{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ee=class extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Hi=class extends ee{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ra=class extends Oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=cc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$l=class extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zl=class extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Fr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function vl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Is=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jl=class extends Is{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mu,endingEnd:mu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gu:r=t,a=2*e-i;break;case xu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gu:o=t,l=2*i-e;break;case xu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let C=0;C!==a;++C)r[C]=g*o[h+C]+M*o[c+C]+S*o[l+C]+v*o[u+C];return r}},Kl=class extends Is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},jl=class extends Is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ql=class extends Is{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(s-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,M=u[g],S=u[g+1],v=t*d+p*2,C=h[v],R=h[v+1],y=qg(i,e,M,C,s);r[p]=X0(y,x,S,R,m)}return r}};function X0(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Xg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function qg(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=X0(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Xg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ni=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fr(e,this.TimeBufferType),this.values=Fr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Fr(t.times,Array),values:Fr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),vl(t.settings)&&(i.settings={inTangents:Fr(t.settings.inTangents,Array),outTangents:Fr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ql(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Uo:e=this.InterpolantFactoryMethodDiscrete;break;case Nl:e=this.InterpolantFactoryMethodLinear;break;case Sl:e=this.InterpolantFactoryMethodSmooth;break;case pu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return te("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return Sl;case this.InterpolantFactoryMethodBezier:return pu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;vl(this.settings)&&($f(this.settings.inTangents,t),$f(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;vl(this.settings)&&(Zf(this.settings.inTangents,t),Zf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Zm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Sl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,vl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $f(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Zf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Nl;var Ls=class extends ni{constructor(t,e,i){super(t,e,i)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Uo;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends ni{constructor(t,e,i,s){super(t,e,i,s)}};tc.prototype.ValueTypeName="color";var ec=class extends ni{constructor(t,e,i,s){super(t,e,i,s)}};ec.prototype.ValueTypeName="number";var nc=class extends Is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}},oa=class extends ni{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new nc(this.times,this.values,this.getValueSize(),t)}};oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends ni{constructor(t,e,i){super(t,e,i)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Uo;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends ni{constructor(t,e,i,s){super(t,e,i,s)}};ic.prototype.ValueTypeName="vector";var sc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},q0=new sc,rc=class{constructor(t){this.manager=t!==void 0?t:q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};rc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kr=class extends Xe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},jr=class extends Kr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fu=new jt,Jf=new U,Kf=new U,aa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jf),Kf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(fu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Gr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(fu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},bl=new U,El=new on,Di=new U,la=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bl,El,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,El,Di.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(bl,El,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,El,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ts=new U,jf=new ht,Qf=new ht,En=class extends la{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ul*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z)}getViewSize(t,e){return this.getViewBounds(t,jf,Qf),e.subVectors(Qf,jf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zh*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vu=class extends aa{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}},Pn=class extends Kr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ca=class extends la{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bu=class extends aa{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends Kr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new bu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Or=-90,Br=1,to=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new En(Or,Br,t,e);s.layers=this.layers,this.add(s);let r=new En(Or,Br,t,e);r.layers=this.layers,this.add(r);let o=new En(Or,Br,t,e);o.layers=this.layers,this.add(o);let a=new En(Or,Br,t,e);a.layers=this.layers,this.add(a);let l=new En(Or,Br,t,e);l.layers=this.layers,this.add(l);let c=new En(Or,Br,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},oc=class extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ju="\\[\\]\\.:\\/",Yg=new RegExp("["+Ju+"]","g"),Ku="[^"+Ju+"]",$g="[^"+Ju.replace("\\.","")+"]",Zg=/((?:WC+[\/:])*)/.source.replace("WC",Ku),Jg=/(WCOD+)?/.source.replace("WCOD",$g),Kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ku),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ku),Qg=new RegExp("^"+Zg+Jg+Kg+jg+"$"),t1=["material","materials","bones","map"],Eu=class{constructor(t,e,i){let s=i||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yg,"")}static parseTrackName(t){let e=Qg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);t1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=Eu;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ib=new Float32Array(1);var id=class id{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};id.prototype.isMatrix2=!0;var Su=id;function ju(n,t,e,i){let s=e1(i);switch(e){case Gu:return n*t;case gc:return n*t/s.components*s.byteLength;case xc:return n*t/s.components*s.byteLength;case Fs:return n*t*2/s.components*s.byteLength;case yc:return n*t*2/s.components*s.byteLength;case zu:return n*t*3/s.components*s.byteLength;case wi:return n*t*4/s.components*s.byteLength;case _c:return n*t*4/s.components*s.byteLength;case da:case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:case Ec:return Math.max(n,16)*Math.max(t,8)/4;case Mc:case bc:return Math.max(n,8)*Math.max(t,8)/2;case Sc:case wc:case Ac:case Rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Tc:case ga:case Cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case kc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Wc:case Xc:case qc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Yc:case $c:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xa:case Zc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e1(n){switch(n){case Yn:case Ou:return{byteLength:1,components:1};case io:case Bu:case Si:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case Ei:case fc:case hi:return{byteLength:4,components:1};case Hu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function pp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function a1(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var l1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c1=`#ifdef USE_ALPHAHASH
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
#endif`,h1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p1=`#ifdef USE_AOMAP
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
#endif`,m1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g1=`#ifdef USE_BATCHING
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
#endif`,x1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v1=`#ifdef USE_IRIDESCENCE
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
#endif`,b1=`#ifdef USE_BUMPMAP
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
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,I1=`#define PI 3.141592653589793
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
} // validated`,L1=`vec3 transformedNormal = objectNormal;
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
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O1="gl_FragColor = linearToOutputTexel( gl_FragColor );",B1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$1=`#ifdef USE_GRADIENTMAP
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
}`,Z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Q1=`#ifdef USE_ENVMAP
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
#endif`,tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
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
#endif`,rx=`uniform sampler2D dfgLUT;
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
}`,ox=`
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xx=`#if defined( USE_POINTS_UV )
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
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vx=`#if defined( USE_MORPHCOLORS )
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
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
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
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Px=`#ifdef USE_NORMALMAP
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
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qx=`float getShadowMask() {
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
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,Kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ty=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ey=`#ifdef USE_TRANSMISSION
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
#endif`,ny=`#ifdef USE_TRANSMISSION
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ly=`uniform sampler2D t2D;
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`uniform float backgroundBlurriness;
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`#include <common>
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
}`,py=`#if DEPTH_PACKING == 3200
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
}`,my=`#define DISTANCE
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
}`,gy=`#define DISTANCE
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`uniform float scale;
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
}`,My=`uniform vec3 diffuse;
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
}`,vy=`#include <common>
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
}`,by=`uniform vec3 diffuse;
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
}`,Ey=`#define LAMBERT
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
}`,Sy=`#define LAMBERT
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
}`,wy=`#define MATCAP
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
}`,Ty=`#define MATCAP
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
}`,Ay=`#define NORMAL
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
}`,Ry=`#define NORMAL
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
}`,Cy=`#define PHONG
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
}`,Py=`#define PHONG
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
}`,Iy=`#define STANDARD
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
}`,Ly=`#define STANDARD
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
}`,Dy=`#define TOON
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
}`,Ny=`#define TOON
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
}`,Uy=`uniform float size;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,By=`uniform vec3 color;
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
}`,Hy=`uniform float rotation;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:l1,alphahash_pars_fragment:c1,alphamap_fragment:h1,alphamap_pars_fragment:u1,alphatest_fragment:d1,alphatest_pars_fragment:f1,aomap_fragment:p1,aomap_pars_fragment:m1,batching_pars_vertex:g1,batching_vertex:x1,begin_vertex:y1,beginnormal_vertex:_1,bsdfs:M1,iridescence_fragment:v1,bumpmap_pars_fragment:b1,clipping_planes_fragment:E1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:T1,color_fragment:A1,color_pars_fragment:R1,color_pars_vertex:C1,color_vertex:P1,common:I1,defaultnormal_vertex:L1,displacementmap_pars_vertex:D1,displacementmap_vertex:N1,emissivemap_fragment:U1,emissivemap_pars_fragment:F1,colorspace_fragment:O1,colorspace_pars_fragment:B1,envmap_fragment:H1,envmap_common_pars_fragment:k1,envmap_pars_fragment:G1,envmap_pars_vertex:z1,envmap_physical_pars_fragment:Q1,envmap_vertex:V1,fog_vertex:W1,fog_pars_vertex:X1,fog_fragment:q1,fog_pars_fragment:Y1,gradientmap_pars_fragment:$1,lightmap_pars_fragment:Z1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:K1,lights_pars_begin:j1,lights_toon_fragment:tx,lights_toon_pars_fragment:ex,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:sx,lights_physical_pars_fragment:rx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:lx,lightprobes_pars_fragment:cx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:ux,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:fx,map_fragment:px,map_pars_fragment:mx,map_particle_fragment:gx,map_particle_pars_fragment:xx,metalnessmap_fragment:yx,metalnessmap_pars_fragment:_x,morphinstance_vertex:Mx,morphcolor_vertex:vx,morphnormal_vertex:bx,morphtarget_pars_vertex:Ex,morphtarget_vertex:Sx,normal_fragment_begin:wx,normal_fragment_maps:Tx,normal_pars_fragment:Ax,normal_pars_vertex:Rx,normal_vertex:Cx,normalmap_pars_fragment:Px,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Lx,clearcoat_pars_fragment:Dx,iridescence_pars_fragment:Nx,opaque_fragment:Ux,packing:Fx,premultiplied_alpha_fragment:Ox,project_vertex:Bx,dithering_fragment:Hx,dithering_pars_fragment:kx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:zx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Wx,shadowmap_vertex:Xx,shadowmask_pars_fragment:qx,skinbase_vertex:Yx,skinning_pars_vertex:$x,skinning_vertex:Zx,skinnormal_vertex:Jx,specularmap_fragment:Kx,specularmap_pars_fragment:jx,tonemapping_fragment:Qx,tonemapping_pars_fragment:ty,transmission_fragment:ey,transmission_pars_fragment:ny,uv_pars_fragment:iy,uv_pars_vertex:sy,uv_vertex:ry,worldpos_vertex:oy,background_vert:ay,background_frag:ly,backgroundCube_vert:cy,backgroundCube_frag:hy,cube_vert:uy,cube_frag:dy,depth_vert:fy,depth_frag:py,distance_vert:my,distance_frag:gy,equirect_vert:xy,equirect_frag:yy,linedashed_vert:_y,linedashed_frag:My,meshbasic_vert:vy,meshbasic_frag:by,meshlambert_vert:Ey,meshlambert_frag:Sy,meshmatcap_vert:wy,meshmatcap_frag:Ty,meshnormal_vert:Ay,meshnormal_frag:Ry,meshphong_vert:Cy,meshphong_frag:Py,meshphysical_vert:Iy,meshphysical_frag:Ly,meshtoon_vert:Dy,meshtoon_frag:Ny,points_vert:Uy,points_frag:Fy,shadow_vert:Oy,shadow_frag:By,sprite_vert:Hy,sprite_frag:ky},Nt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},zi={basic:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:In([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:In([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:In([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:In([Nt.points,Nt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:In([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:In([Nt.common,Nt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:In([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:In([Nt.sprite,Nt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:In([Nt.common,Nt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:In([Nt.lights,Nt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};zi.physical={uniforms:In([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};var Kc={r:0,b:0,g:0},Gy=new jt,mp=new ce;mp.set(-1,0,0,0,1,0,0,0,1);function zy(n,t,e,i,s,r){let o=new ie(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let v=M.backgroundBlurriness>0;S=t.get(S,v)}return S}function p(M){let S=!1,v=f(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,S){let v=f(S);v&&v.isCubeTexture?(c===void 0&&(c=new N(new de(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:pr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mp),c.material.toneMapped=Le.getTransfer(v.colorSpace)!==Fe,(h!==v||u!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new N(new He(2,2),new ci({name:"BackgroundMaterial",uniforms:pr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Le.getTransfer(v.colorSpace)!==Fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(Kc,Zu(n)),e.buffers.color.setClear(Kc.r,Kc.g,Kc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Vy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(I,F,B,D,G){let q=!1,V=u(I,D,B,F);r!==V&&(r=V,c(r.object)),q=f(I,D,B,G),q&&p(I,D,B,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(I,F,B,D),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function u(I,F,B,D){let G=D.wireframe===!0,q=i[F.id];q===void 0&&(q={},i[F.id]=q);let V=I.isInstancedMesh===!0?I.id:0,ct=q[V];ct===void 0&&(ct={},q[V]=ct);let J=ct[B.id];J===void 0&&(J={},ct[B.id]=J);let rt=J[G];return rt===void 0&&(rt=d(l()),J[G]=rt),rt}function d(I){let F=[],B=[],D=[];for(let G=0;G<e;G++)F[G]=0,B[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,F,B,D){let G=r.attributes,q=F.attributes,V=0,ct=B.getAttributes();for(let J in ct)if(ct[J].location>=0){let ot=G[J],Pt=q[J];if(Pt===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Pt=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Pt=I.instanceColor)),ot===void 0||ot.attribute!==Pt||Pt&&ot.data!==Pt.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function p(I,F,B,D){let G={},q=F.attributes,V=0,ct=B.getAttributes();for(let J in ct)if(ct[J].location>=0){let ot=q[J];ot===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor));let Pt={};Pt.attribute=ot,ot&&ot.data&&(Pt.data=ot.data),G[J]=Pt,V++}r.attributes=G,r.attributesNum=V,r.index=D}function x(){let I=r.newAttributes;for(let F=0,B=I.length;F<B;F++)I[F]=0}function m(I){g(I,0)}function g(I,F){let B=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;B[I]=1,D[I]===0&&(n.enableVertexAttribArray(I),D[I]=1),G[I]!==F&&(n.vertexAttribDivisor(I,F),G[I]=F)}function M(){let I=r.newAttributes,F=r.enabledAttributes;for(let B=0,D=F.length;B<D;B++)F[B]!==I[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function S(I,F,B,D,G,q,V){V===!0?n.vertexAttribIPointer(I,F,B,G,q):n.vertexAttribPointer(I,F,B,D,G,q)}function v(I,F,B,D){x();let G=D.attributes,q=B.getAttributes(),V=F.defaultAttributeValues;for(let ct in q){let J=q[ct];if(J.location>=0){let rt=G[ct];if(rt===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),rt!==void 0){let ot=rt.normalized,Pt=rt.itemSize,Zt=t.get(rt);if(Zt===void 0)continue;let tt=Zt.buffer,wt=Zt.type,Bt=Zt.bytesPerElement,Jt=wt===n.INT||wt===n.UNSIGNED_INT||rt.gpuType===fc;if(rt.isInterleavedBufferAttribute){let K=rt.data,Ot=K.isInterleavedBuffer===!0?K.stride:K.itemSize,pe=rt.offset;if(K.isInstancedInterleavedBuffer||K.isInstancedBufferAttribute){for(let Yt=0;Yt<J.locationSize;Yt++)g(J.location+Yt,K.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Yt=0;Yt<J.locationSize;Yt++)m(J.location+Yt);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Yt=0;Yt<J.locationSize;Yt++)S(J.location+Yt,Pt/J.locationSize,wt,ot,Ot*Bt,(pe+Pt/J.locationSize*Yt)*Bt,Jt)}else{if(rt.isInstancedBufferAttribute){for(let K=0;K<J.locationSize;K++)g(J.location+K,rt.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let K=0;K<J.locationSize;K++)m(J.location+K);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let K=0;K<J.locationSize;K++)S(J.location+K,Pt/J.locationSize,wt,ot,Pt*Bt,Pt/J.locationSize*K*Bt,Jt)}}else if(V!==void 0){let ot=V[ct];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(J.location,ot);break;case 3:n.vertexAttrib3fv(J.location,ot);break;case 4:n.vertexAttrib4fv(J.location,ot);break;default:n.vertexAttrib1fv(J.location,ot)}}}}M()}function C(){P();for(let I in i){let F=i[I];for(let B in F){let D=F[B];for(let G in D){let q=D[G];for(let V in q)h(q[V].object),delete q[V];delete D[G]}}delete i[I]}}function R(I){if(i[I.id]===void 0)return;let F=i[I.id];for(let B in F){let D=F[B];for(let G in D){let q=D[G];for(let V in q)h(q[V].object),delete q[V];delete D[G]}}delete i[I.id]}function y(I){for(let F in i){let B=i[F];for(let D in B){let G=B[D];if(G[I.id]===void 0)continue;let q=G[I.id];for(let V in q)h(q[V].object),delete q[V];delete G[I.id]}}}function b(I){for(let F in i){let B=i[F],D=I.isInstancedMesh===!0?I.id:0,G=B[D];if(G!==void 0){for(let q in G){let V=G[q];for(let ct in V)h(V[ct].object),delete V[ct];delete G[q]}delete B[D],Object.keys(B).length===0&&delete i[F]}}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Wy(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Xy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==wi&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let b=y===Si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Yn&&y!==hi&&!b&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&te("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,maxSamples:C,samples:R}}function qy(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Mi,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,S=M*4,v=g.clippingState||null;l.value=v,v=h(p,d,S,f);for(let C=0;C!==S;++C)v[C]=e[C];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=f;S!==x;++S,v+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var va=class extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Yo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:cr});r.uniforms.tEquirect.value=e;let o=new N(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=Hn),new to(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Y0=256,Yy=3,$y=20,gp=256,xp=16,Zy=3,Jy=new U,Ky=new ie,ro=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new to(1,10,null),this._boxMesh=new N(new de(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Jy}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Ky));let m=new to(i,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Y0,U0(t))}_fromTexture(t,e){t.mapping===dr||t.mapping===no?this._setSize(t.image.length===0?Y0:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=$0(t,!1,!1),i=Math.log2(t)-Yy;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=$0(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===dr||t.mapping===no?(this._cubemapMaterial===null&&(this._cubemapMaterial=J0()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Z0()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=jy(),this._integrationMaterial=Qy());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/xp);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Zy)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(gp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=t_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function $0(n,t,e){return new va(n,{minFilter:ls,generateMipmaps:t,type:Si,colorSpace:Fo,depthBuffer:e})}function ba(n,t,e){return new ci({name:n,uniforms:t,vertexShader:Me.cube_vert,fragmentShader:e,side:mn,blending:cr,depthTest:!1,depthWrite:!1})}function jy(){return ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${gp}u

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
	`)}function Qy(){return ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xp}},`

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
	`)}function t_(){return ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$y}
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
	`)}function Z0(){return ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function J0(){return ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function e_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===hc||f===uc)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new va(p.height);return x.fromEquirectangularTexture(n,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===hc||f===uc,x=f===dr||f===no;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new ro(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new ro(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===hc?d.mapping=dr:f===uc&&(d.mapping=no),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function n_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ir("WebGLRenderer: "+i+" extension not supported."),s}}}function i_(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],n.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let M=x!==null?x.array.length:m.array.length/3-1,S=m.count>=65535?Wo:Vo,v=new S(Math.ceil(M/3)*6,1),C=v.array;if(x!==null){let y=x.array;g=x.version;for(let b=0,P=0;b<M;b+=3){let E=y[b+0],I=y[b+1],F=y[b+2];C[P++]=E,C[P++]=I,C[P++]=I,C[P++]=F,C[P++]=F,C[P++]=E}}else{g=m.version;for(let y=0,b=0;y<M;y+=3){let P=y+0,E=y+1,I=y+2;C[b++]=P,C[b++]=E,C[b++]=E,C[b++]=I,C[b++]=I,C[b++]=P}}v.version=g;let R=r.get(p);R&&t.remove(R),r.set(p,v)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function s_(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function r_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function o_(n,t,e){let i=new WeakMap,s=new $e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let P=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let R=new Float32Array(v*C*4*u),y=new ko(R,v,C,u);y.type=hi,y.needsUpdate=!0;let b=S*4;for(let E=0;E<u;E++){let I=m[E],F=g[E],B=M[E],D=v*C*4*E;for(let G=0;G<I.count;G++){let q=G*b;f===!0&&(s.fromBufferAttribute(I,G),R[D+q+0]=s.x,R[D+q+1]=s.y,R[D+q+2]=s.z,R[D+q+3]=0),p===!0&&(s.fromBufferAttribute(F,G),R[D+q+4]=s.x,R[D+q+5]=s.y,R[D+q+6]=s.z,R[D+q+7]=0),x===!0&&(s.fromBufferAttribute(B,G),R[D+q+8]=s.x,R[D+q+9]=s.y,R[D+q+10]=s.z,R[D+q+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:y,size:new ht(v,C)},i.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function a_(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var l_={[Pu]:"LINEAR_TONE_MAPPING",[Iu]:"REINHARD_TONE_MAPPING",[Lu]:"CINEON_TONE_MAPPING",[ha]:"ACES_FILMIC_TONE_MAPPING",[Nu]:"AGX_TONE_MAPPING",[Uu]:"NEUTRAL_TONE_MAPPING",[Du]:"CUSTOM_TONE_MAPPING"};function c_(n,t,e,i,s,r){let o=new Kn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ze;h.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new le([0,2,0,0,2,0],2));let u=new Yl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new N(h,u),f=new ca(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,M=null,S=[],v=!1;this.setSize=function(C,R){o.setSize(C,R),a!==null&&a.setSize(C,R),l!==null&&l.setSize(C,R);for(let y=0;y<S.length;y++){let b=S[y];b.setSize&&b.setSize(C,R)}},this.setEffects=function(C){S=C,v=S.length>0&&S[0].isRenderPass===!0;let R=o.width,y=o.height;S.length>0&&a===null&&(a=new Kn(R,y,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new Kn(R,y,{type:Si,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&S.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new os(R,y),r===!0&&(c.format=cs,c.type=fr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<S.length;P++){let E=S[P];E.setSize&&E.setSize(R,y),b&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(C,R){if(m||C.toneMapping===ki&&S.length===0)return!1;if(M=R,R!==null){let y=R.width,b=R.height;(o.width!==y||o.height!==b)&&this.setSize(y,b)}return v===!1&&C.setRenderTarget(o),g=C.toneMapping,C.toneMapping=ki,!0},this.hasRenderPass=function(){return v},this.end=function(C,R){C.toneMapping=g,m=!0;let y=o,b=a;for(let P=0;P<S.length;P++){let E=S[P];E.enabled!==!1&&(E.render(C,b,y,R),E.needsSwap!==!1&&(y=b,b=b===a?l:a))}if(p!==C.outputColorSpace||x!==C.toneMapping){p=C.outputColorSpace,x=C.toneMapping,u.defines={},Le.getTransfer(p)===Fe&&(u.defines.SRGB_TRANSFER="");let P=l_[x];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,C.setRenderTarget(M),C.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var yp=new kn,_p=new os(1,1),Mp=new $o(1),vp=new ko,bp=new Bl,Ep=new Yo,K0=[],j0=[],Q0=new Float32Array(16),tp=new Float32Array(9),ep=new Float32Array(4);function oo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=K0[s];if(r===void 0&&(r=new Float32Array(s),K0[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function gn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function xn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function th(n,t){let e=j0[t];e===void 0&&(e=new Int32Array(t),j0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function h_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;n.uniform2fv(this.addr,t),xn(e,t)}}function d_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gn(e,t))return;n.uniform3fv(this.addr,t),xn(e,t)}}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;n.uniform4fv(this.addr,t),xn(e,t)}}function p_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,i))return;ep.set(i),n.uniformMatrix2fv(this.addr,!1,ep),xn(e,i)}}function m_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,i))return;tp.set(i),n.uniformMatrix3fv(this.addr,!1,tp),xn(e,i)}}function g_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,i))return;Q0.set(i),n.uniformMatrix4fv(this.addr,!1,Q0),xn(e,i)}}function x_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;n.uniform2iv(this.addr,t),xn(e,t)}}function __(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;n.uniform3iv(this.addr,t),xn(e,t)}}function M_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;n.uniform4iv(this.addr,t),xn(e,t)}}function v_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function b_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;n.uniform2uiv(this.addr,t),xn(e,t)}}function E_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;n.uniform3uiv(this.addr,t),xn(e,t)}}function S_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;n.uniform4uiv(this.addr,t),xn(e,t)}}function eh(n){return n.version===0&&(n.compareFunction=Xu,n.needsUpdate=!0),n}function w_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=eh(_p):r=yp,e.setTexture2D(t||r,s)}function T_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||bp,s)}function A_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=eh(Mp):r=Ep,e.setTextureCube(t||r,s)}function R_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||vp,s)}function C_(n){switch(n){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return x_;case 35667:case 35671:return y_;case 35668:case 35672:return __;case 35669:case 35673:return M_;case 5125:return v_;case 36294:return b_;case 36295:return E_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function P_(n,t){n.uniform1fv(this.addr,t)}function I_(n,t){let e=oo(t,this.size,2);n.uniform2fv(this.addr,e)}function L_(n,t){let e=oo(t,this.size,3);n.uniform3fv(this.addr,e)}function D_(n,t){let e=oo(t,this.size,4);n.uniform4fv(this.addr,e)}function N_(n,t){let e=oo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function U_(n,t){let e=oo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function F_(n,t){let e=oo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function O_(n,t){n.uniform1iv(this.addr,t)}function B_(n,t){n.uniform2iv(this.addr,t)}function H_(n,t){n.uniform3iv(this.addr,t)}function k_(n,t){n.uniform4iv(this.addr,t)}function G_(n,t){n.uniform1uiv(this.addr,t)}function z_(n,t){n.uniform2uiv(this.addr,t)}function V_(n,t){n.uniform3uiv(this.addr,t)}function W_(n,t){n.uniform4uiv(this.addr,t)}function X_(n,t,e){let i=this.cache,s=t.length,r=th(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=eh(_p):o=yp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function q_(n,t,e){let i=this.cache,s=t.length,r=th(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bp,r[o])}function Y_(n,t,e){let i=this.cache,s=t.length,r=th(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=eh(Mp):o=Ep;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function $_(n,t,e){let i=this.cache,s=t.length,r=th(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vp,r[o])}function Z_(n){switch(n){case 5126:return P_;case 35664:return I_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return O_;case 35667:case 35671:return B_;case 35668:case 35672:return H_;case 35669:case 35673:return k_;case 5125:return G_;case 36294:return z_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return $_}}var od=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=C_(e.type)}},ad=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z_(e.type)}},ld=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},sd=/(\w+)(\])?(\[|\.)?/g;function np(n,t){n.seq.push(t),n.map[t.id]=t}function J_(n,t,e){let i=n.name,s=i.length;for(sd.lastIndex=0;;){let r=sd.exec(i),o=sd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){np(e,c===void 0?new od(a,n,t):new ad(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new ld(a),np(e,u)),e=u}}}var so=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);J_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function ip(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var K_=37297,j_=0;function Q_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var sp=new ce;function tM(n){Le._getMatrix(sp,Le.workingColorSpace,n);let t=`mat3( ${sp.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(n)){case Oo:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function rp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Q_(n.getShaderSource(t),a)}else return r}function eM(n,t){let e=tM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var nM={[Pu]:"Linear",[Iu]:"Reinhard",[Lu]:"Cineon",[ha]:"ACESFilmic",[Nu]:"AgX",[Uu]:"Neutral",[Du]:"Custom"};function iM(n,t){let e=nM[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jc=new U;function sM(){Le.getLuminanceCoefficients(jc);let n=jc.x.toFixed(4),t=jc.y.toFixed(4),e=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function oM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function aM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ma(n){return n!==""}function op(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ap(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lM=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(n){return n.replace(lM,cM)}function cM(n,t){let e=Me[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return cd(e)}var hM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lp(n){return n.replace(hM,uM)}function uM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var dM={[lr]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function fM(n){return dM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pM={[no]:"ENVMAP_MODE_REFRACTION"};function mM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":pM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gM={[cc]:"ENVMAP_BLENDING_MULTIPLY",[M0]:"ENVMAP_BLENDING_MIX",[v0]:"ENVMAP_BLENDING_ADD"};function xM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":gM[n.combine]||"ENVMAP_BLENDING_NONE"}function yM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=fM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=mM(e),u=xM(e),d=rM(e),f=oM(r),p=s.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ma).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ma).join(`
`),m.length>0&&(m+=`
`)):(x=[cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),m=[cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?Me.tonemapping_pars_fragment:"",e.toneMapping!==ki?iM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,eM("linearToOutputTexel",e.outputColorSpace),sM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ma).join(`
`)),o=cd(o),o=op(o,e),o=ap(o,e),a=cd(a),a=op(a,e),a=ap(a,e),o=lp(o),a=lp(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=g+x+o,S=g+m+a,v=ip(s,s.VERTEX_SHADER,M),C=ip(s,s.FRAGMENT_SHADER,S);s.attachShader(p,v),s.attachShader(p,C),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function R(E){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(v)||"",B=s.getShaderInfoLog(C)||"",D=I.trim(),G=F.trim(),q=B.trim(),V=!0,ct=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,v,C);else{let J=rp(s,v,"vertex"),rt=rp(s,C,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+D+`
`+J+`
`+rt)}else D!==""?te("WebGLProgram: Program Info Log:",D):(G===""||q==="")&&(ct=!1);ct&&(E.diagnostics={runnable:V,programLog:D,vertexShader:{log:G,prefix:x},fragmentShader:{log:q,prefix:m}})}s.deleteShader(v),s.deleteShader(C),y=new so(s,p),b=aM(s,p)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,K_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=C,this}var _M=0,hd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ud(t),e.set(t,i)),i}},ud=class{constructor(t){this.id=_M++,this.code=t,this.usedTimes=0}};function MM(n){return n===Fs||n===ga||n===xa}function vM(n,t,e,i,s,r){let o=new Go,a=new hd,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,b,P,E,I,F){let B=E.fog,D=I.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?E.environment:null,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=t.get(y.envMap||G,q),ct=d[y.type],J=i.precision;y.precision!==null&&(J=i.getMaxPrecision(y.precision),J!==y.precision&&te("WebGLProgram.getParameters:",y.precision,"not supported, using",J,"instead."));let rt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ot=rt!==void 0?rt.length:0,Pt=0;D.morphAttributes.position!==void 0&&(Pt=1),D.morphAttributes.normal!==void 0&&(Pt=2),D.morphAttributes.color!==void 0&&(Pt=3);let Zt,tt,wt,Bt;if(ct){let Dt=zi[ct];Zt=Dt.vertexShader,tt=Dt.fragmentShader}else{Zt=y.vertexShader,tt=y.fragmentShader;let Dt=a.getVertexShaderStage(y),Be=a.getFragmentShaderStage(y);a.update(y,Dt,Be),wt=Dt.id,Bt=Be.id}let Jt=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),Ot=I.isInstancedMesh===!0,pe=I.isBatchedMesh===!0,Yt=!!y.map,me=!!y.matcap,Te=!!V,lt=Te&&V.isPMREMTexture===!0,vt=!!y.aoMap,yt=!!y.lightMap,Ht=!!y.bumpMap&&y.wireframe===!1,Ct=!!y.normalMap,fe=!!y.displacementMap,qt=!!y.emissiveMap,Ae=!!y.metalnessMap,Ce=!!y.roughnessMap,Ne=y.anisotropy>0,k=y.clearcoat>0,cn=y.diffuseRoughness>0,Se=y.dispersion>0,Ge=y.retroreflectivity>0,Tt=y.iridescence>0,en=y.sheen>0,Qt=y.transmission>0,ae=Ne&&!!y.anisotropyMap,L=k&&!!y.clearcoatMap,T=k&&!!y.clearcoatNormalMap,X=k&&!!y.clearcoatRoughnessMap,dt=cn&&!!y.diffuseRoughnessMap,at=Tt&&!!y.iridescenceMap,_t=Tt&&!!y.iridescenceThicknessMap,At=en&&!!y.sheenColorMap,et=en&&!!y.sheenRoughnessMap,nt=!!y.specularMap,bt=!!y.specularColorMap,O=!!y.specularIntensityMap,st=Qt&&!!y.transmissionMap,Q=Qt&&!!y.thicknessMap,Et=!!y.gradientMap,mt=!!y.alphaMap,Mt=y.alphaTest>0,$t=!!y.alphaHash,_e=!!y.extensions,ft=ki;y.toneMapped&&(Jt===null||Jt.isXRRenderTarget===!0)&&(ft=n.toneMapping);let Kt=lt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,ge={shaderID:ct,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:tt,defines:y.defines,customVertexShaderID:wt,customFragmentShaderID:Bt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:J,batching:pe,batchingColor:pe&&I._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&I.instanceColor!==null,instancingMorph:Ot&&I.morphTexture!==null,outputColorSpace:Jt===null?n.outputColorSpace:Jt.isXRRenderTarget===!0?Jt.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Yt,matcap:me,envMap:Te,envMapMode:Te&&V.mapping,envMapPMREM:lt,envMapMaxLod:lt?Kt.length-1:null,envMapSize:lt?Kt[0].width:null,aoMap:vt,lightMap:yt,bumpMap:Ht,normalMap:Ct,displacementMap:fe,emissiveMap:qt,normalMapObjectSpace:Ct&&y.normalMapType===S0,normalMapTangentSpace:Ct&&y.normalMapType===ya,packedNormalMap:Ct&&y.normalMapType===ya&&MM(y.normalMap.format),metalnessMap:Ae,roughnessMap:Ce,anisotropy:Ne,anisotropyMap:ae,clearcoat:k,clearcoatMap:L,clearcoatNormalMap:T,clearcoatRoughnessMap:X,diffuseRoughness:cn,diffuseRoughnessMap:dt,dispersion:Se,retroreflection:Ge,iridescence:Tt,iridescenceMap:at,iridescenceThicknessMap:_t,sheen:en,sheenColorMap:At,sheenRoughnessMap:et,specularMap:nt,specularColorMap:bt,specularIntensityMap:O,transmission:Qt,transmissionMap:st,thicknessMap:Q,gradientMap:Et,opaque:y.transparent===!1&&y.blending===Us&&y.alphaToCoverage===!1,alphaMap:mt,alphaTest:Mt,alphaHash:$t,combine:y.combine,mapUv:Yt&&f(y.map.channel),aoMapUv:vt&&f(y.aoMap.channel),lightMapUv:yt&&f(y.lightMap.channel),bumpMapUv:Ht&&f(y.bumpMap.channel),normalMapUv:Ct&&f(y.normalMap.channel),displacementMapUv:fe&&f(y.displacementMap.channel),emissiveMapUv:qt&&f(y.emissiveMap.channel),metalnessMapUv:Ae&&f(y.metalnessMap.channel),roughnessMapUv:Ce&&f(y.roughnessMap.channel),anisotropyMapUv:ae&&f(y.anisotropyMap.channel),clearcoatMapUv:L&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:at&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:et&&f(y.sheenRoughnessMap.channel),specularMapUv:nt&&f(y.specularMap.channel),specularColorMapUv:bt&&f(y.specularColorMap.channel),specularIntensityMapUv:O&&f(y.specularIntensityMap.channel),transmissionMapUv:st&&f(y.transmissionMap.channel),thicknessMapUv:Q&&f(y.thicknessMap.channel),alphaMapUv:mt&&f(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ct||Ne),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(Yt||mt),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&Ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:K,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Pt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(Dt=>Dt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:Yt&&y.map.isVideoTexture===!0&&Le.getTransfer(y.map.colorSpace)===Fe,decodeVideoTextureEmissive:qt&&y.emissiveMap.isVideoTexture===!0&&Le.getTransfer(y.emissiveMap.colorSpace)===Fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===an,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&y.extensions.multiDraw===!0||pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function x(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(b,y),g(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapPMREM),y.push(b.envMapMaxLod),y.push(b.envMapSize),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.diffuseRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.numLightProbeGrids),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function g(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){let b=d[y.type],P;if(b){let E=zi[b];P=W0.clone(E.uniforms)}else P=y.uniforms;return P}function S(y,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new yM(n,b,y,s),c.push(P),h.set(b,P)),P}function v(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function C(y){a.remove(y)}function R(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:M,acquireProgram:S,releaseProgram:v,releaseShaderCache:C,programs:c,dispose:R}}function bM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function EM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function hp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function up(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let M=n[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},n[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=o(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=m,M.group=g),t++,M}function l(d,f,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);let S=a(d,f,p,x,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):e.push(S)}function c(d,f,p,x,m,g){let M=a(d,f,p,x,m,g);p.transmission>0?i.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||EM),i.length>1&&i.sort(f||hp),s.length>1&&s.sort(f||hp)}function u(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function SM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new up,n.set(i,[o])):s>=r.length?(o=new up,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function wM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new ie};break;case"SpotLight":e={position:new U,direction:new U,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function TM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var AM=0;function RM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function CM(n){let t=new wM,e=TM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new jt,o=new jt;function a(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,M=0,S=0,v=0,C=0,R=0,y=0,b=0,P=0,E=0;c.sort(RM);for(let F=0,B=c.length;F<B;F++){let D=c[F],G=D.color,q=D.intensity,V=D.distance,ct=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Fs?ct=D.shadow.map.texture:ct=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=G.r*q,u+=G.g*q,d+=G.b*q;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],q);E++}else if(D.isSunLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let rt=D.shadow,ot=e.get(D);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),i.sunShadow[p]=ot,i.sunShadowMap[p]=ct;let Pt=rt.getViewportCount();for(let Zt=0;Zt<Pt;Zt++)i.sunShadowMatrix[x+Zt]=rt.getMatrix(Zt),i.sunShadowCascade[x+Zt]=rt._cascadeData[Zt];x+=Pt,p++}i.sun[f]=J,f++}else if(D.isDirectionalLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let rt=D.shadow,ot=e.get(D);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,i.directionalShadow[m]=ot,i.directionalShadowMap[m]=ct,i.directionalShadowMatrix[m]=D.shadow.matrix,C++}i.directional[m]=J,m++}else if(D.isSpotLight){let J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(G).multiplyScalar(q),J.distance=V,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[M]=J;let rt=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,rt.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[M]=rt.matrix,D.castShadow){let ot=e.get(D);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,i.spotShadow[M]=ot,i.spotShadowMap[M]=ct,y++}M++}else if(D.isRectAreaLight){let J=t.get(D);J.color.copy(G).multiplyScalar(q),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=J,S++}else if(D.isPointLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){let rt=D.shadow,ot=e.get(D);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,ot.shadowCameraNear=rt.camera.near,ot.shadowCameraFar=rt.camera.far,i.pointShadow[g]=ot,i.pointShadowMap[g]=ct,i.pointShadowMatrix[g]=D.shadow.matrix,R++}i.point[g]=J,g++}else if(D.isHemisphereLight){let J=t.get(D);J.skyColor.copy(D.color).multiplyScalar(q),J.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[v]=J,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Nt.LTC_FLOAT_1,i.rectAreaLTC2=Nt.LTC_FLOAT_2):(i.rectAreaLTC1=Nt.LTC_HALF_1,i.rectAreaLTC2=Nt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==M||I.rectAreaLength!==S||I.hemiLength!==v||I.numSunShadows!==p||I.numDirectionalShadows!==C||I.numPointShadows!==R||I.numSpotShadows!==y||I.numSpotMaps!==b||I.numLightProbes!==E)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=S,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=E,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=M,I.rectAreaLength=S,I.hemiLength=v,I.numSunShadows=p,I.numDirectionalShadows=C,I.numPointShadows=R,I.numSpotShadows=y,I.numSpotMaps=b,I.numLightProbes=E,i.version=AM++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let M=0,S=c.length;M<S;M++){let v=c[M];if(v.isSunLight){let C=i.sun[u];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(v.isSpotLight){let C=i.spot[p];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let C=i.rectArea[x];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(v.width*.5,0,0),C.halfHeight.set(0,v.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let C=i.point[f];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let C=i.hemi[m];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function dp(n){let t=new CM(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){i.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function PM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new dp(n),t.set(s,[a])):r>=o.length?(a=new dp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var IM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
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
}`,DM=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],NM=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],fp=new jt,_a=new U,rd=new U;function UM(n,t,e){let i=new Ps,s=new ht,r=new ht,o=new $e,a=new $l,l=new Zl,c={},h=e.maxTextureSize,u={[Ns]:mn,[mn]:Ns,[an]:an},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:IM,fragmentShader:LM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ze;p.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new N(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lr;let g=this.type;this.render=function(R,y,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===lc&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lr);let P=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(cr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=g!==this.type;B&&y.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=R.length;D<G;D++){let q=R[D],V=q.shadow;if(V===void 0){te("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ct=V.getFrameExtents();s.multiply(ct),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,V.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||B===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===eo){if(q.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Kn(s.x,s.y,{format:Fs,type:Si,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new os(s.x,s.y,hi),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=rs,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=vn,V.map.depthTexture.magFilter=vn}else q.isPointLight?(V.map=new va(s.x),V.map.depthTexture=new $o(s.x,Ei)):(V.map=new Kn(s.x,s.y),V.map.depthTexture=new os(s.x,s.y,Ei)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=rs,this.type===lr?(V.map.depthTexture.compareFunction=J?Wu:Vu,V.map.depthTexture.minFilter=Hn,V.map.depthTexture.magFilter=Hn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=vn,V.map.depthTexture.magFilter=vn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let rt=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,b);let ot=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let Pt=0;Pt<rt;Pt++){let Zt=V.getCamera(Pt);if(q.isPointLight){let tt=V.camera,wt=V.matrix,Bt=q.distance||tt.far;Bt!==tt.far&&(tt.far=Bt,tt.updateProjectionMatrix()),_a.setFromMatrixPosition(q.matrixWorld),tt.position.copy(_a),rd.copy(tt.position),rd.add(DM[Pt]),tt.up.copy(NM[Pt]),tt.lookAt(rd),tt.updateMatrixWorld(),wt.makeTranslation(-_a.x,-_a.y,-_a.z),fp.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(fp,tt.coordinateSystem,tt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Pt),n.clear();else{Pt===0&&(n.setRenderTarget(V.map),n.clear());let tt=V.getViewport(Pt);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),F.viewport(o)}i=V.getFrustum(Pt),v(y,b,Zt,q,ot,this.type)}V.isPointLightShadow!==!0&&this.type===eo&&M(V,b),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(P,E,I)};function M(R,y){let b=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new Kn(s.x,s.y,{format:Fs,type:Si}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(y,null,b,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(y,null,b,f,x,null)}function S(R,y,b,P){let E=null,I=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)E=I;else if(E=b.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let F=E.uuid,B=y.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let G=D[B];G===void 0&&(G=E.clone(),D[B]=G,y.addEventListener("dispose",C)),E=G}if(E.visible=y.visible,E.wireframe=y.wireframe,P===eo?E.side=y.shadowSide!==null?y.shadowSide:y.side:E.side=y.shadowSide!==null?y.shadowSide:u[y.side],E.alphaMap=y.alphaMap,E.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,E.map=y.map,E.clipShadows=y.clipShadows,E.clippingPlanes=y.clippingPlanes,E.clipIntersection=y.clipIntersection,E.displacementMap=y.displacementMap,E.displacementScale=y.displacementScale,E.displacementBias=y.displacementBias,E.wireframeLinewidth=y.wireframeLinewidth,E.linewidth=y.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=n.properties.get(E);F.light=b}return E}function v(R,y,b,P,E,I){if(R.visible===!1)return;if(R.layers.test(E)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&I===eo)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);let D=t.update(R),G=R.material;if(Array.isArray(G)){let q=D.groups;for(let V=0,ct=q.length;V<ct;V++){let J=q[V],rt=G[J.materialIndex];if(rt&&rt.visible){let ot=S(R,rt,P,I);R.onBeforeShadow(n,R,y,b,D,ot,J),n.renderBufferDirect(b,null,D,ot,R,J),R.onAfterShadow(n,R,y,b,D,ot,J)}}}else if(G.visible){let q=S(R,G,P,I);R.onBeforeShadow(n,R,y,b,D,q,null),n.renderBufferDirect(b,null,D,q,R,null),R.onAfterShadow(n,R,y,b,D,q,null)}}let B=R.children;for(let D=0,G=B.length;D<G;D++)v(B[D],y,b,P,E,I)}function C(R){R.target.removeEventListener("dispose",C);for(let b in c){let P=c[b],E=R.target.uuid;E in P&&(P[E].dispose(),delete P[E])}}}function FM(n,t){function e(){let O=!1,st=new $e,Q=null,Et=new $e(0,0,0,0);return{setMask:function(mt){Q!==mt&&!O&&(n.colorMask(mt,mt,mt,mt),Q=mt)},setLocked:function(mt){O=mt},setClear:function(mt,Mt,$t,_e,ft){ft===!0&&(mt*=_e,Mt*=_e,$t*=_e),st.set(mt,Mt,$t,_e),Et.equals(st)===!1&&(n.clearColor(mt,Mt,$t,_e),Et.copy(st))},reset:function(){O=!1,Q=null,Et.set(-1,0,0,0)}}}function i(){let O=!1,st=!1,Q=null,Et=null,mt=null;return{setReversed:function(Mt){if(st!==Mt){let $t=t.get("EXT_clip_control");Mt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),st=Mt;let _e=mt;mt=null,this.setClear(_e)}},getReversed:function(){return st},setTest:function(Mt){Mt?K(n.DEPTH_TEST):Ot(n.DEPTH_TEST)},setMask:function(Mt){Q!==Mt&&!O&&(n.depthMask(Mt),Q=Mt)},setFunc:function(Mt){if(st&&(Mt=N0[Mt]),Et!==Mt){switch(Mt){case Tl:n.depthFunc(n.NEVER);break;case Al:n.depthFunc(n.ALWAYS);break;case Rl:n.depthFunc(n.LESS);break;case kr:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Pl:n.depthFunc(n.GEQUAL);break;case Il:n.depthFunc(n.GREATER);break;case Ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=Mt}},setLocked:function(Mt){O=Mt},setClear:function(Mt){mt!==Mt&&(mt=Mt,st&&(Mt=1-Mt),n.clearDepth(Mt))},reset:function(){O=!1,Q=null,Et=null,mt=null,st=!1}}}function s(){let O=!1,st=null,Q=null,Et=null,mt=null,Mt=null,$t=null,_e=null,ft=null;return{setTest:function(Kt){O||(Kt?K(n.STENCIL_TEST):Ot(n.STENCIL_TEST))},setMask:function(Kt){st!==Kt&&!O&&(n.stencilMask(Kt),st=Kt)},setFunc:function(Kt,ge,Dt){(Q!==Kt||Et!==ge||mt!==Dt)&&(n.stencilFunc(Kt,ge,Dt),Q=Kt,Et=ge,mt=Dt)},setOp:function(Kt,ge,Dt){(Mt!==Kt||$t!==ge||_e!==Dt)&&(n.stencilOp(Kt,ge,Dt),Mt=Kt,$t=ge,_e=Dt)},setLocked:function(Kt){O=Kt},setClear:function(Kt){ft!==Kt&&(n.clearStencil(Kt),ft=Kt)},reset:function(){O=!1,st=null,Q=null,Et=null,mt=null,Mt=null,$t=null,_e=null,ft=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,M=null,S=null,v=null,C=null,R=null,y=null,b=new ie(0,0,0),P=0,E=!1,I=null,F=null,B=null,D=null,G=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ct=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=ct>=1):J.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=ct>=2);let rt=null,ot={},Pt=n.getParameter(n.SCISSOR_BOX),Zt=n.getParameter(n.VIEWPORT),tt=new $e().fromArray(Pt),wt=new $e().fromArray(Zt);function Bt(O,st,Q,Et){let mt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(O,Mt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<Q;$t++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(st+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return Mt}let Jt={};Jt[n.TEXTURE_2D]=Bt(n.TEXTURE_2D,n.TEXTURE_2D,1),Jt[n.TEXTURE_CUBE_MAP]=Bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Jt[n.TEXTURE_2D_ARRAY]=Bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Jt[n.TEXTURE_3D]=Bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(kr),Ht(!1),Ct(wu),K(n.CULL_FACE),vt(cr);function K(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Ot(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function pe(O,st){return d[O]!==st?(n.bindFramebuffer(O,st),d[O]=st,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=st),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=st),!0):!1}function Yt(O,st){let Q=p,Et=!1;if(O){Q=f.get(st),Q===void 0&&(Q=[],f.set(st,Q));let mt=O.textures;if(Q.length!==mt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,$t=mt.length;Mt<$t;Mt++)Q[Mt]=n.COLOR_ATTACHMENT0+Mt;Q.length=mt.length,Et=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,Et=!0);Et&&n.drawBuffers(Q)}function me(O){return x!==O?(n.useProgram(O),x=O,!0):!1}let Te={[ur]:n.FUNC_ADD,[i0]:n.FUNC_SUBTRACT,[s0]:n.FUNC_REVERSE_SUBTRACT};Te[r0]=n.MIN,Te[o0]=n.MAX;let lt={[a0]:n.ZERO,[l0]:n.ONE,[c0]:n.SRC_COLOR,[Ru]:n.SRC_ALPHA,[m0]:n.SRC_ALPHA_SATURATE,[f0]:n.DST_COLOR,[u0]:n.DST_ALPHA,[h0]:n.ONE_MINUS_SRC_COLOR,[Cu]:n.ONE_MINUS_SRC_ALPHA,[p0]:n.ONE_MINUS_DST_COLOR,[d0]:n.ONE_MINUS_DST_ALPHA,[g0]:n.CONSTANT_COLOR,[x0]:n.ONE_MINUS_CONSTANT_COLOR,[y0]:n.CONSTANT_ALPHA,[_0]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(O,st,Q,Et,mt,Mt,$t,_e,ft,Kt){if(O===cr){m===!0&&(Ot(n.BLEND),m=!1);return}if(m===!1&&(K(n.BLEND),m=!0),O!==n0){if(O!==g||Kt!==E){if((M!==ur||C!==ur)&&(n.blendEquation(n.FUNC_ADD),M=ur,C=ur),Kt)switch(O){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hr:n.blendFunc(n.ONE,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ne("WebGLState: Invalid blending: ",O);break}else switch(O){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tu:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Au:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",O);break}S=null,v=null,R=null,y=null,b.set(0,0,0),P=0,g=O,E=Kt}return}mt=mt||st,Mt=Mt||Q,$t=$t||Et,(st!==M||mt!==C)&&(n.blendEquationSeparate(Te[st],Te[mt]),M=st,C=mt),(Q!==S||Et!==v||Mt!==R||$t!==y)&&(n.blendFuncSeparate(lt[Q],lt[Et],lt[Mt],lt[$t]),S=Q,v=Et,R=Mt,y=$t),(_e.equals(b)===!1||ft!==P)&&(n.blendColor(_e.r,_e.g,_e.b,ft),b.copy(_e),P=ft),g=O,E=!1}function yt(O,st){O.side===an?Ot(n.CULL_FACE):K(n.CULL_FACE);let Q=O.side===mn;st&&(Q=!Q),Ht(Q),O.blending===Us&&O.transparent===!1?vt(cr):vt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Et=O.stencilWrite;a.setTest(Et),Et&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),qt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):Ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(O){I!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),I=O)}function Ct(O){O!==t0?(K(n.CULL_FACE),O!==F&&(O===wu?n.cullFace(n.BACK):O===e0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ot(n.CULL_FACE),F=O}function fe(O){O!==B&&(V&&n.lineWidth(O),B=O)}function qt(O,st,Q){O?(K(n.POLYGON_OFFSET_FILL),(D!==st||G!==Q)&&(D=st,G=Q,o.getReversed()&&(st=-st,Q=-Q),n.polygonOffset(st,Q))):Ot(n.POLYGON_OFFSET_FILL)}function Ae(O){O?K(n.SCISSOR_TEST):Ot(n.SCISSOR_TEST)}function Ce(O){O===void 0&&(O=n.TEXTURE0+q-1),rt!==O&&(n.activeTexture(O),rt=O)}function Ne(O,st,Q){Q===void 0&&(rt===null?Q=n.TEXTURE0+q-1:Q=rt);let Et=ot[Q];Et===void 0&&(Et={type:void 0,texture:void 0},ot[Q]=Et),(Et.type!==O||Et.texture!==st)&&(rt!==Q&&(n.activeTexture(Q),rt=Q),n.bindTexture(O,st||Jt[O]),Et.type=O,Et.texture=st)}function k(){let O=ot[rt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function cn(){try{n.compressedTexImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function Se(){try{n.compressedTexImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function Ge(){try{n.texSubImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function Tt(){try{n.texSubImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function en(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function Qt(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function ae(){try{n.texStorage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function L(){try{n.texStorage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function T(){try{n.texImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function X(){try{n.texImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function dt(O){return u[O]!==void 0?u[O]:n.getParameter(O)}function at(O,st){u[O]!==st&&(n.pixelStorei(O,st),u[O]=st)}function _t(O){tt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),tt.copy(O))}function At(O){wt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),wt.copy(O))}function et(O,st){let Q=c.get(st);Q===void 0&&(Q=new WeakMap,c.set(st,Q));let Et=Q.get(O);Et===void 0&&(Et=n.getUniformBlockIndex(st,O.name),n.uniformBlockBinding(st,Et,Et),Q.set(O,Et))}function nt(O,st,Q){let mt=c.get(st).get(O);l[mt]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,mt,Q),l[mt]=Q)}function bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},rt=null,ot={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,M=null,S=null,v=null,C=null,R=null,y=null,b=new ie(0,0,0),P=0,E=!1,I=null,F=null,B=null,D=null,G=null,tt.set(0,0,n.canvas.width,n.canvas.height),wt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:Ot,bindFramebuffer:pe,drawBuffers:Yt,useProgram:me,setBlending:vt,setMaterial:yt,setFlipSided:Ht,setCullFace:Ct,setLineWidth:fe,setPolygonOffset:qt,setScissorTest:Ae,activeTexture:Ce,bindTexture:Ne,unbindTexture:k,compressedTexImage2D:cn,compressedTexImage3D:Se,texImage2D:T,texImage3D:X,pixelStorei:at,getParameter:dt,updateUBOMapping:et,uniformBlockBinding:nt,texStorage2D:ae,texStorage3D:L,texSubImage2D:Ge,texSubImage3D:Tt,compressedTexSubImage2D:en,compressedTexSubImage3D:Qt,scissor:_t,viewport:At,reset:bt}}function OM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(L=>p.delete(L)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return m?new OffscreenCanvas(L,T):Bo("canvas")}function M(L,T,X){let dt=1,at=ae(L);if((at.width>X||at.height>X)&&(dt=X/Math.max(at.width,at.height)),dt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let _t=Math.floor(dt*at.width),At=Math.floor(dt*at.height);d===void 0&&(d=g(_t,At));let et=T?g(_t,At):d;return et.width=_t,et.height=At,et.getContext("2d").drawImage(L,0,0,_t,At),te("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+_t+"x"+At+")."),et}else return"data"in L&&te("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),L;return L}function S(L){return L.generateMipmaps}function v(L){n.generateMipmap(L)}function C(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(L,T,X,dt,at,_t=!1){if(L!==null){if(n[L]!==void 0)return n[L];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let At;dt&&(At=t.get("EXT_texture_norm16"),At||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=T;if(T===n.RED&&(X===n.FLOAT&&(et=n.R32F),X===n.HALF_FLOAT&&(et=n.R16F),X===n.UNSIGNED_BYTE&&(et=n.R8),X===n.UNSIGNED_SHORT&&At&&(et=At.R16_EXT),X===n.SHORT&&At&&(et=At.R16_SNORM_EXT)),T===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(et=n.R8UI),X===n.UNSIGNED_SHORT&&(et=n.R16UI),X===n.UNSIGNED_INT&&(et=n.R32UI),X===n.BYTE&&(et=n.R8I),X===n.SHORT&&(et=n.R16I),X===n.INT&&(et=n.R32I)),T===n.RG&&(X===n.FLOAT&&(et=n.RG32F),X===n.HALF_FLOAT&&(et=n.RG16F),X===n.UNSIGNED_BYTE&&(et=n.RG8),X===n.UNSIGNED_SHORT&&At&&(et=At.RG16_EXT),X===n.SHORT&&At&&(et=At.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(et=n.RG8UI),X===n.UNSIGNED_SHORT&&(et=n.RG16UI),X===n.UNSIGNED_INT&&(et=n.RG32UI),X===n.BYTE&&(et=n.RG8I),X===n.SHORT&&(et=n.RG16I),X===n.INT&&(et=n.RG32I)),T===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(et=n.RGB8UI),X===n.UNSIGNED_SHORT&&(et=n.RGB16UI),X===n.UNSIGNED_INT&&(et=n.RGB32UI),X===n.BYTE&&(et=n.RGB8I),X===n.SHORT&&(et=n.RGB16I),X===n.INT&&(et=n.RGB32I)),T===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),X===n.UNSIGNED_INT&&(et=n.RGBA32UI),X===n.BYTE&&(et=n.RGBA8I),X===n.SHORT&&(et=n.RGBA16I),X===n.INT&&(et=n.RGBA32I)),T===n.RGB&&(X===n.UNSIGNED_SHORT&&At&&(et=At.RGB16_EXT),X===n.SHORT&&At&&(et=At.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(et=n.R11F_G11F_B10F)),T===n.RGBA){let nt=_t?Oo:Le.getTransfer(at);X===n.FLOAT&&(et=n.RGBA32F),X===n.HALF_FLOAT&&(et=n.RGBA16F),X===n.UNSIGNED_BYTE&&(et=nt===Fe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&At&&(et=At.RGBA16_EXT),X===n.SHORT&&At&&(et=At.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function y(L,T){let X;return L?T===null||T===Ei||T===fr?X=n.DEPTH24_STENCIL8:T===hi?X=n.DEPTH32F_STENCIL8:T===io&&(X=n.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ei||T===fr?X=n.DEPTH_COMPONENT24:T===hi?X=n.DEPTH_COMPONENT32F:T===io&&(X=n.DEPTH_COMPONENT16),X}function b(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==vn&&L.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function P(L){let T=new WeakRef(L);i.get(L).__ref=T,p.add(T),x.register(L,T,T)}function E(L){let T=i.get(L).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function I(L){B(L.target)}function F(L){D(L.target)}function B(L){L.removeEventListener("dispose",I),E(L),q(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function D(L){L.removeEventListener("dispose",F),E(L),ct(L)}function G(){for(let L of p){let T=L.deref();T!==void 0&&(T.isRenderTarget===!0?D(T):B(T))}p.clear(),u.clear()}function q(L){let T=i.get(L);if(T.__webglInit===void 0)return;let X=L.source,dt=f.get(X);if(dt){let at=dt[T.__cacheKey];at.usedTimes--,at.usedTimes===0&&V(L),Object.keys(dt).length===0&&f.delete(X)}i.remove(L)}function V(L){let T=i.get(L);n.deleteTexture(T.__webglTexture);let X=L.source,dt=f.get(X);delete dt[T.__cacheKey],o.memory.textures--}function ct(L){let T=i.get(L);T.__depthDisposeCallback&&T.__depthDisposeCallback();let X=L.depthTexture;if(X&&X.renderTarget===L&&B(X),L.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(T.__webglFramebuffer[at]))for(let _t=0;_t<T.__webglFramebuffer[at].length;_t++)n.deleteFramebuffer(T.__webglFramebuffer[at][_t]);else n.deleteFramebuffer(T.__webglFramebuffer[at]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[at])}else{if(Array.isArray(T.__webglFramebuffer))for(let at=0;at<T.__webglFramebuffer.length;at++)n.deleteFramebuffer(T.__webglFramebuffer[at]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let at=0;at<T.__webglColorRenderbuffer.length;at++)T.__webglColorRenderbuffer[at]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[at]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let dt=L.textures;for(let at=0,_t=dt.length;at<_t;at++){let At=i.get(dt[at]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),o.memory.textures--),i.remove(dt[at])}i.remove(L)}let J=0;function rt(){J=0}function ot(){return J}function Pt(L){J=L}function Zt(){let L=J;return L>=s.maxTextures&&te("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,L}function tt(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.mipmapsAutoUpdate),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function wt(L,T){let X=i.get(L);if(L.isVideoTexture&&en(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){let dt=L.image;if(dt===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(X,L,T);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+T)}function Bt(L,T){let X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){yt(X,L,T);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+T)}function Jt(L,T){let X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){yt(X,L,T);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+T)}function K(L,T){let X=i.get(L);if(L.version>0&&X.__version!==L.version){Ht(X,L,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+T)}let Ot={[ss]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},pe={[vn]:n.NEAREST,[b0]:n.NEAREST_MIPMAP_NEAREST,[ua]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[dc]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},Yt={[T0]:n.NEVER,[Xu]:n.ALWAYS,[A0]:n.LESS,[Vu]:n.LEQUAL,[R0]:n.EQUAL,[Wu]:n.GEQUAL,[C0]:n.GREATER,[P0]:n.NOTEQUAL};function me(L,T){if(T.type===hi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===dc||T.magFilter===ua||T.magFilter===ls||T.minFilter===Hn||T.minFilter===dc||T.minFilter===ua||T.minFilter===ls)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Ot[T.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Ot[T.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Ot[T.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,pe[T.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,pe[T.minFilter]),T.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Yt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vn||T.minFilter!==ua&&T.minFilter!==ls||T.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Te(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",I),P(T));let dt=T.source,at=f.get(dt);at===void 0&&(at={},f.set(dt,at));let _t=tt(T);if(_t!==L.__cacheKey){at[_t]===void 0&&(at[_t]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[_t].usedTimes++;let At=at[L.__cacheKey];At!==void 0&&(at[L.__cacheKey].usedTimes--,At.usedTimes===0&&V(T)),L.__cacheKey=_t,L.__webglTexture=at[_t].texture}return X}function lt(L,T,X){return Math.floor(Math.floor(L/X)/T)}function vt(L,T,X,dt){let _t=L.updateRanges;if(_t.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,X,dt,T.data);else{_t.sort((O,st)=>O.start-st.start);let At=0;for(let O=1;O<_t.length;O++){let st=_t[At],Q=_t[O],Et=st.start+st.count,mt=lt(Q.start,T.width,4),Mt=lt(st.start,T.width,4);Q.start<=Et+1&&mt===Mt&&lt(Q.start+Q.count-1,T.width,4)===mt?st.count=Math.max(st.count,Q.start+Q.count-st.start):(++At,_t[At]=Q)}_t.length=At+1;let et=e.getParameter(n.UNPACK_ROW_LENGTH),nt=e.getParameter(n.UNPACK_SKIP_PIXELS),bt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let O=0,st=_t.length;O<st;O++){let Q=_t[O],Et=Math.floor(Q.start/4),mt=Math.ceil(Q.count/4),Mt=Et%T.width,$t=Math.floor(Et/T.width),_e=mt,ft=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,$t),e.texSubImage2D(n.TEXTURE_2D,0,Mt,$t,_e,ft,X,dt,T.data)}L.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,et),e.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(n.UNPACK_SKIP_ROWS,bt)}}function yt(L,T,X){let dt=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=n.TEXTURE_3D);let at=Te(L,T),_t=T.source;e.bindTexture(dt,L.__webglTexture,n.TEXTURE0+X);let At=i.get(_t);if(_t.version!==At.__version||at===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ft=Le.getPrimaries(Le.workingColorSpace),Kt=T.colorSpace===hs?null:Le.getPrimaries(T.colorSpace),ge=T.colorSpace===hs||ft===Kt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let nt=M(T.image,!1,s.maxTextureSize);nt=Qt(T,nt);let bt=r.convert(T.format,T.colorSpace),O=r.convert(T.type),st=R(T.internalFormat,bt,O,T.normalized,T.colorSpace,T.isVideoTexture);me(dt,T);let Q,Et=T.mipmaps,mt=T.isVideoTexture!==!0,Mt=At.__version===void 0||at===!0,$t=_t.dataReady,_e=b(T,nt);if(T.isDepthTexture)st=y(T.format===cs,T.type),Mt&&(mt?e.texStorage2D(n.TEXTURE_2D,1,st,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,st,nt.width,nt.height,0,bt,O,null));else if(T.isDataTexture)if(Et.length>0){mt&&Mt&&e.texStorage2D(n.TEXTURE_2D,_e,st,Et[0].width,Et[0].height);for(let ft=0,Kt=Et.length;ft<Kt;ft++)Q=Et[ft],mt?$t&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Q.width,Q.height,bt,O,Q.data):e.texImage2D(n.TEXTURE_2D,ft,st,Q.width,Q.height,0,bt,O,Q.data);T.generateMipmaps=!1}else mt?(Mt&&e.texStorage2D(n.TEXTURE_2D,_e,st,nt.width,nt.height),$t&&vt(T,nt,bt,O)):e.texImage2D(n.TEXTURE_2D,0,st,nt.width,nt.height,0,bt,O,nt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){mt&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_e,st,Et[0].width,Et[0].height,nt.depth);for(let ft=0,Kt=Et.length;ft<Kt;ft++)if(Q=Et[ft],T.format!==wi)if(bt!==null)if(mt){if($t)if(T.layerUpdates.size>0){let ge=ju(Q.width,Q.height,T.format,T.type);for(let Dt of T.layerUpdates){let Be=Q.data.subarray(Dt*ge/Q.data.BYTES_PER_ELEMENT,(Dt+1)*ge/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,Dt,Q.width,Q.height,1,bt,Be)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Q.width,Q.height,nt.depth,bt,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,st,Q.width,Q.height,nt.depth,0,Q.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?$t&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Q.width,Q.height,nt.depth,bt,O,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,st,Q.width,Q.height,nt.depth,0,bt,O,Q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{mt&&Mt&&e.texStorage2D(n.TEXTURE_2D,_e,st,Et[0].width,Et[0].height);for(let ft=0,Kt=Et.length;ft<Kt;ft++)Q=Et[ft],T.format!==wi?bt!==null?mt?$t&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,Q.width,Q.height,bt,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,st,Q.width,Q.height,0,Q.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?$t&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Q.width,Q.height,bt,O,Q.data):e.texImage2D(n.TEXTURE_2D,ft,st,Q.width,Q.height,0,bt,O,Q.data)}else if(T.isDataArrayTexture)if(mt){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_e,st,nt.width,nt.height,nt.depth),$t)if(T.layerUpdates.size>0){let ft=ju(nt.width,nt.height,T.format,T.type);for(let Kt of T.layerUpdates){let ge=nt.data.subarray(Kt*ft/nt.data.BYTES_PER_ELEMENT,(Kt+1)*ft/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Kt,nt.width,nt.height,1,bt,O,ge)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,bt,O,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,st,nt.width,nt.height,nt.depth,0,bt,O,nt.data);else if(T.isData3DTexture)mt?(Mt&&e.texStorage3D(n.TEXTURE_3D,_e,st,nt.width,nt.height,nt.depth),$t&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,bt,O,nt.data)):e.texImage3D(n.TEXTURE_3D,0,st,nt.width,nt.height,nt.depth,0,bt,O,nt.data);else if(T.isFramebufferTexture){if(Mt)if(mt)e.texStorage2D(n.TEXTURE_2D,_e,st,nt.width,nt.height);else{let ft=nt.width,Kt=nt.height;for(let ge=0;ge<_e;ge++)e.texImage2D(n.TEXTURE_2D,ge,st,ft,Kt,0,bt,O,null),ft>>=1,Kt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let ft=n.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),nt.parentNode!==ft){ft.appendChild(nt),u.add(T),ft.onpaint=Kt=>{let ge=Kt.changedElements;for(let Dt of u)ge.includes(Dt.image)&&(Dt.needsUpdate=!0)},ft.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,nt);else{let ge=n.RGBA,Dt=n.RGBA,Be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ge,Dt,Be,nt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Et.length>0){if(mt&&Mt){let ft=ae(Et[0]);e.texStorage2D(n.TEXTURE_2D,_e,st,ft.width,ft.height)}for(let ft=0,Kt=Et.length;ft<Kt;ft++)Q=Et[ft],mt?$t&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,bt,O,Q):e.texImage2D(n.TEXTURE_2D,ft,st,bt,O,Q);T.generateMipmaps=!1}else if(mt){if(Mt){let ft=ae(nt);e.texStorage2D(n.TEXTURE_2D,_e,st,ft.width,ft.height)}$t&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,O,nt)}else e.texImage2D(n.TEXTURE_2D,0,st,bt,O,nt);S(T)&&T.mipmapsAutoUpdate===!0&&v(dt),At.__version=_t.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ht(L,T,X){if(T.image.length!==6)return;let dt=Te(L,T),at=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+X);let _t=i.get(at);if(at.version!==_t.__version||dt===!0){e.activeTexture(n.TEXTURE0+X);let At=Le.getPrimaries(Le.workingColorSpace),et=T.colorSpace===hs?null:Le.getPrimaries(T.colorSpace),nt=T.colorSpace===hs||At===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let bt=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,st=[];for(let Dt=0;Dt<6;Dt++)!bt&&!O?st[Dt]=M(T.image[Dt],!0,s.maxCubemapSize):st[Dt]=O?T.image[Dt].image:T.image[Dt],st[Dt]=Qt(T,st[Dt]);let Q=st[0],Et=r.convert(T.format,T.colorSpace),mt=r.convert(T.type),Mt=R(T.internalFormat,Et,mt,T.normalized,T.colorSpace),$t=T.isVideoTexture!==!0,_e=_t.__version===void 0||dt===!0,ft=at.dataReady,Kt=b(T,Q);me(n.TEXTURE_CUBE_MAP,T);let ge;if(T.isDepthTexture){if(Mt=y(T.format===cs,T.type),_e)if($t)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,Mt,Q.width,Q.height);else for(let Dt=0;Dt<6;Dt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Mt,Q.width,Q.height,0,Et,mt,null)}else if(bt){$t&&_e&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Kt,Mt,Q.width,Q.height);for(let Dt=0;Dt<6;Dt++){ge=st[Dt].mipmaps;for(let Be=0;Be<ge.length;Be++){let yn=ge[Be];T.format!==wi?Et!==null?$t?ft&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Be,0,0,yn.width,yn.height,Et,yn.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Be,Mt,yn.width,yn.height,0,yn.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Be,0,0,yn.width,yn.height,Et,mt,yn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Be,Mt,yn.width,yn.height,0,Et,mt,yn.data)}}}else{if(ge=T.mipmaps,$t&&_e){ge.length>0&&Kt++;let Dt=ae(st[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Kt,Mt,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(O){$t?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,st[Dt].width,st[Dt].height,Et,mt,st[Dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Mt,st[Dt].width,st[Dt].height,0,Et,mt,st[Dt].data);for(let Be=0;Be<ge.length;Be++){let Ms=ge[Be].image[Dt].image;$t?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Be+1,0,0,Ms.width,Ms.height,Et,mt,Ms.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Be+1,Mt,Ms.width,Ms.height,0,Et,mt,Ms.data)}}else{$t?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Et,mt,st[Dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Mt,Et,mt,st[Dt]);for(let Be=0;Be<ge.length;Be++){let yn=ge[Be];$t?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Be+1,0,0,Et,mt,yn.image[Dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Be+1,Mt,Et,mt,yn.image[Dt])}}}S(T)&&T.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),_t.__version=at.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ct(L,T,X,dt,at,_t){let At=r.convert(X.format,X.colorSpace),et=r.convert(X.type),nt=R(X.internalFormat,At,et,X.normalized,X.colorSpace),bt=i.get(T),O=i.get(X);if(O.__renderTarget=T,!bt.__hasExternalTextures){let st=Math.max(1,T.width>>_t),Q=Math.max(1,T.height>>_t);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,_t,nt,st,Q,T.depth,0,At,et,null):e.texImage2D(at,_t,nt,st,Q,0,At,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),Tt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,at,O.__webglTexture,0,Ge(T)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,dt,at,O.__webglTexture,_t),e.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(L,T,X){if(n.bindRenderbuffer(n.RENDERBUFFER,L),T.depthBuffer){let dt=T.depthTexture,at=dt&&dt.isDepthTexture?dt.type:null,_t=y(T.stencilBuffer,at),At=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Tt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge(T),_t,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge(T),_t,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,_t,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,L)}else{let dt=T.textures;for(let at=0;at<dt.length;at++){let _t=dt[at],At=r.convert(_t.format,_t.colorSpace),et=r.convert(_t.type),nt=R(_t.internalFormat,At,et,_t.normalized,_t.colorSpace);Tt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge(T),nt,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge(T),nt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,nt,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qt(L,T,X){let dt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=i.get(T.depthTexture);at.__renderTarget=T;let _t=dt?T.depthTexture.image[0]:T.depthTexture.image;(!at.__webglTexture||_t.width!==T.width||_t.height!==T.height)&&(_t.width=T.width,_t.height=T.height,T.depthTexture.needsUpdate=!0),dt?K(T.depthTexture,0):wt(T.depthTexture,0);let At=at.__webglTexture,et=Ge(T),nt=dt?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,bt=T.depthTexture.format===cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===rs)Tt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,bt,nt,At,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,bt,nt,At,0);else if(T.depthTexture.format===cs)Tt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,bt,nt,At,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,bt,nt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(L){let T=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let dt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){let at=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",at)};dt.addEventListener("dispose",at),T.__depthDisposeCallback=at}T.__boundDepthTexture=dt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(X)for(let dt=0;dt<6;dt++)qt(T.__webglFramebuffer[dt],L,dt);else L.texture.mipmaps.length>0?qt(T.__webglFramebuffer[0],L,0):qt(T.__webglFramebuffer,L,0);else if(X){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=n.createRenderbuffer(),fe(T.__webglDepthbuffer[dt],L,!1);else{let at=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer[dt];n.bindRenderbuffer(n.RENDERBUFFER,_t),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,_t)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),fe(T.__webglDepthbuffer,L,!1);else{let at=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_t),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,_t)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(L,T,X){let dt=i.get(L);T!==void 0&&Ct(dt.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ae(L)}function Ne(L){let T=L.texture,X=i.get(L),dt=i.get(T);L.addEventListener("dispose",F),P(L);let at=L.textures,_t=L.isWebGLCubeRenderTarget===!0,At=at.length>1;if(At||(dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture()),dt.__version=T.version,o.memory.textures++),_t){X.__webglFramebuffer=[];for(let et=0;et<6;et++)if(T.mipmaps.length>0){X.__webglFramebuffer[et]=[];for(let nt=0;nt<T.mipmaps.length;nt++)X.__webglFramebuffer[et][nt]=n.createFramebuffer()}else X.__webglFramebuffer[et]=n.createFramebuffer()}else{if(T.mipmaps.length>0){X.__webglFramebuffer=[];for(let et=0;et<T.mipmaps.length;et++)X.__webglFramebuffer[et]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(At)for(let et=0,nt=at.length;et<nt;et++){let bt=i.get(at[et]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Tt(L)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let et=0;et<at.length;et++){let nt=at[et];X.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[et]);let bt=r.convert(nt.format,nt.colorSpace),O=r.convert(nt.type),st=R(nt.internalFormat,bt,O,nt.normalized,nt.colorSpace,L.isXRRenderTarget===!0),Q=Ge(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,st,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,X.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_t){e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture),me(n.TEXTURE_CUBE_MAP,T);for(let et=0;et<6;et++)if(T.mipmaps.length>0)for(let nt=0;nt<T.mipmaps.length;nt++)Ct(X.__webglFramebuffer[et][nt],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,nt);else Ct(X.__webglFramebuffer[et],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);S(T)?v(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(At){for(let et=0,nt=at.length;et<nt;et++){let bt=at[et],O=i.get(bt),st=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(st=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,O.__webglTexture),me(st,bt),Ct(X.__webglFramebuffer,L,bt,n.COLOR_ATTACHMENT0+et,st,0),S(bt)&&v(st)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(et=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,dt.__webglTexture),me(et,T),T.mipmaps.length>0)for(let nt=0;nt<T.mipmaps.length;nt++)Ct(X.__webglFramebuffer[nt],L,T,n.COLOR_ATTACHMENT0,et,nt);else Ct(X.__webglFramebuffer,L,T,n.COLOR_ATTACHMENT0,et,0);S(T)?v(et):T.mipmaps.length>0&&n.texParameteri(et,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&Ae(L)}function k(L){let T=L.textures;for(let X=0,dt=T.length;X<dt;X++){let at=T[X];if(S(at)&&at.mipmapsAutoUpdate===!0){let _t=C(L),At=i.get(at).__webglTexture;e.bindTexture(_t,At),v(_t),e.unbindTexture()}}}let cn=[];function Se(L){if(L.samples>0){if(Tt(L)===!1){let T=L.textures,X=L.width,dt=L.height,at=n.COLOR_BUFFER_BIT,_t=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(L),et=T.length>1;if(et)for(let bt=0;bt<T.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<T.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let O=i.get(T[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,X,dt,0,0,X,dt,at,n.NEAREST),l===!0&&(cn.length=0,cn.push(n.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&cn.push(_t),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,cn))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let bt=0;bt<T.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let O=i.get(T[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,O,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let T=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ge(L){return Math.min(s.maxSamples,L.samples)}function Tt(L){let T=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function en(L){let T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function Qt(L,T){let X=L.colorSpace,dt=L.format,at=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Fo&&X!==hs&&(Le.getTransfer(X)===Fe?(dt!==wi||at!==Yn)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",X)),T}function ae(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Zt,this.resetTextureUnits=rt,this.getTextureUnits=ot,this.setTextureUnits=Pt,this.setTexture2D=wt,this.setTexture2DArray=Bt,this.setTexture3D=Jt,this.setTextureCube=K,this.rebindTextures=Ce,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Tt,this.dispose=G}function BM(n,t){function e(i,s=hs){let r,o=Le.getTransfer(s);if(i===Yn)return n.UNSIGNED_BYTE;if(i===pc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ku)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ou)return n.BYTE;if(i===Bu)return n.SHORT;if(i===io)return n.UNSIGNED_SHORT;if(i===fc)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===Si)return n.HALF_FLOAT;if(i===Gu)return n.ALPHA;if(i===zu)return n.RGB;if(i===wi)return n.RGBA;if(i===rs)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===gc)return n.RED;if(i===xc)return n.RED_INTEGER;if(i===Fs)return n.RG;if(i===yc)return n.RG_INTEGER;if(i===_c)return n.RGBA_INTEGER;if(i===da||i===fa||i===pa||i===ma)if(o===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mc||i===vc||i===bc||i===Ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sc||i===wc||i===Tc||i===Ac||i===Rc||i===ga||i===Cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sc||i===wc)return o===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Tc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ac)return r.COMPRESSED_R11_EAC;if(i===Rc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ga)return r.COMPRESSED_RG11_EAC;if(i===Cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===Hc||i===kc||i===Gc||i===zc||i===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wc||i===Xc||i===qc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Wc)return o===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yc||i===$c||i===xa||i===Zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var HM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kM=`
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

}`,dd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Zo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ci({vertexShader:HM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new N(new He(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fd=class extends Ui{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new dd,g={},M=e.getContextAttributes(),S=null,v=null,C=[],R=[],y=new ht,b=null,P=null,E=new En;E.viewport=new $e;let I=new En;I.viewport=new $e;let F=[E,I],B=new oc,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let wt=C[tt];return wt===void 0&&(wt=new Wr,C[tt]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(tt){let wt=C[tt];return wt===void 0&&(wt=new Wr,C[tt]=wt),wt.getGripSpace()},this.getHand=function(tt){let wt=C[tt];return wt===void 0&&(wt=new Wr,C[tt]=wt),wt.getHandSpace()};function q(tt){let wt=R.indexOf(tt.inputSource);if(wt===-1)return;let Bt=C[wt];Bt!==void 0&&(Bt.update(tt.inputSource,tt.frame,c||o),Bt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ct);for(let tt=0;tt<C.length;tt++){let wt=R[tt];wt!==null&&(R[tt]=null,C[tt].disconnect(wt))}D=null,G=null,m.reset();for(let tt in g)delete g[tt];if(t.setRenderTarget(S),f=null,d=null,u=null,s=null,v=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(y.width,y.height,!1),P!==null){let tt=P.camera;tt.fov=P.fov,tt.zoom=P.zoom,tt.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ct),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Bt=null,Jt=null,K=null;M.depth&&(K=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Bt=M.stencil?cs:rs,Jt=M.stencil?fr:Ei);let Ot={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Kn(d.textureWidth,d.textureHeight,{format:wi,type:Yn,depthTexture:new os(d.textureWidth,d.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Bt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Bt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kn(f.framebufferWidth,f.framebufferHeight,{format:wi,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ct(tt){for(let wt=0;wt<tt.removed.length;wt++){let Bt=tt.removed[wt],Jt=R.indexOf(Bt);Jt>=0&&(R[Jt]=null,C[Jt].disconnect(Bt))}for(let wt=0;wt<tt.added.length;wt++){let Bt=tt.added[wt],Jt=R.indexOf(Bt);if(Jt===-1){for(let Ot=0;Ot<C.length;Ot++)if(Ot>=R.length){R.push(Bt),Jt=Ot;break}else if(R[Ot]===null){R[Ot]=Bt,Jt=Ot;break}if(Jt===-1)break}let K=C[Jt];K&&K.connect(Bt)}}function J(tt,wt){wt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(wt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let wt=tt.near,Bt=tt.far;m.texture!==null&&(m.depthNear>0&&(wt=m.depthNear),m.depthFar>0&&(Bt=m.depthFar)),B.near=I.near=E.near=wt,B.far=I.far=E.far=Bt,(D!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,G=B.far),B.layers.mask=tt.layers.mask|6,E.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let Jt=tt.parent,K=B.cameras;J(B,Jt);for(let Ot=0;Ot<K.length;Ot++)J(K[Ot],Jt);B.projectionMatrix.copy(E.projectionMatrix),B.projectionMatrixInverse.copy(E.projectionMatrixInverse),P===null&&tt.isPerspectiveCamera&&(P={camera:tt,fov:tt.fov,zoom:tt.zoom}),rt(tt,B,Jt)};function rt(tt,wt,Bt){Bt===null?tt.matrix.copy(wt.matrixWorld):(tt.matrix.copy(Bt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(wt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(wt.projectionMatrix),tt.projectionMatrixInverse.copy(wt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ul*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(tt){return g[tt]};let ot=null;function Pt(tt,wt){if(h=wt.getViewerPose(c||o),p=wt,h!==null){let Bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Jt=!1;Bt.length!==B.cameras.length&&(B.cameras.length=0,Jt=!0);for(let Yt=0;Yt<Bt.length;Yt++){let me=Bt[Yt],Te=null;if(f!==null)Te=f.getViewport(me);else{let vt=u.getViewSubImage(d,me);Te=vt.viewport,Yt===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let lt=F[Yt];lt===void 0&&(lt=new En,lt.layers.enable(Yt),lt.viewport=new $e,F[Yt]=lt),lt.matrix.fromArray(me.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(me.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Te.x,Te.y,Te.width,Te.height),Yt===0&&(B.matrix.copy(lt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Jt===!0&&B.cameras.push(lt)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Yt=u.getDepthInformation(Bt[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,s.renderState)}if(K&&K.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Yt=0;Yt<Bt.length;Yt++){let me=Bt[Yt].camera;if(me){let Te=g[me];Te||(Te=new Zo,g[me]=Te);let lt=u.getCameraImage(me);Te.sourceTexture=lt}}}}for(let Bt=0;Bt<C.length;Bt++){let Jt=R[Bt],K=C[Bt];Jt!==null&&K!==void 0&&K.update(Jt,wt,c||o)}ot&&ot(tt,wt),wt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:wt}),p=null}let Zt=new pp;Zt.setAnimationLoop(Pt),this.setAnimationLoop=function(tt){ot=tt},this.dispose=function(){}}},GM=new jt,Sp=new ce;Sp.set(-1,0,0,0,1,0,0,0,1);function zM(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Zu(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,S,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=t.get(g),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(GM.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VM(n,t,e,i){let s={},r={};function o(M,S){let v=S.program;i.uniformBlockBinding(M,v,s[M.id])}function a(M,S){let v=s[M.id];v===void 0&&(p(M),v=l(M),s[M.id]=v,M.addEventListener("dispose",m));let C=S.program;i.updateUBOMapping(M,C);let R=t.render.frame;r[M.id]!==R&&(c(M),r[M.id]=R)}function l(M){let S=n.createBuffer(),v=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,C),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(M){let S=s[M.id],v=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,y=v.length;R<y;R++){let b=v[R];if(Array.isArray(b))for(let P=0,E=b.length;P<E;P++)h(b[P],R,P,C);else h(b,R,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,S,v,C){if(d(M,S,v,C)===!0){let R=M.__offset,y=M.value;if(Array.isArray(y)){let b=0;for(let P=0;P<y.length;P++){let E=y[P],I=x(E,!0);u(E,M.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,M.__data)}}function u(M,S,v){typeof M=="number"||typeof M=="boolean"?S[v]=M:M.isMatrix3?(S[v]=M.elements[0],S[v+1]=M.elements[1],S[v+2]=M.elements[2],S[v+3]=0,S[v+4]=M.elements[3],S[v+5]=M.elements[4],S[v+6]=M.elements[5],S[v+7]=0,S[v+8]=M.elements[6],S[v+9]=M.elements[7],S[v+10]=M.elements[8],S[v+11]=0):ArrayBuffer.isView(M)?S.set(M.subarray(0,S.length-v),v):M.toArray(S,v)}function d(M,S,v,C){let R=M.value,y=S+"_"+v;if(Array.isArray(R)){C[y]===void 0&&(C[y]=[]);let b=C[y],P=!1;for(let E=0;E<R.length;E++)f(R[E],b,E)===!0&&(P=!0);return P}return f(R,C,y)}function f(M,S,v){if(S[v]===void 0)return typeof M=="number"||typeof M=="boolean"?S[v]=M:ArrayBuffer.isView(M)?S[v]=M.slice():S[v]=M.clone(),!0;{let C=S[v];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return S[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function p(M){let S=M.uniforms,v=0,C=16;for(let y=0,b=S.length;y<b;y++){let P=Array.isArray(S[y])?S[y]:[S[y]];for(let E=0,I=P.length;E<I;E++){let F=P[E],B=Array.isArray(F.value)?F.value:[F.value],D=Array.isArray(S[y])||Array.isArray(F.value),G=v;for(let V=0,ct=B.length;V<ct;V++){let J=B[V],rt=x(J,D),ot=v%C,Pt=ot%rt.boundary,Zt=ot+Pt;v+=Pt,Zt!==0&&C-Zt<rt.storage&&(v+=C-Zt),V===0&&(G=v),v+=rt.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((v-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}let R=v%C;return R>0&&(v+=C-R),M.__size=v,M.__cache={},this}function x(M,S){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):te("WebGLRenderer: Unsupported uniform value type.",M),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(M){let S=M.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:g}}var WM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function XM(){return Gi===null&&(Gi=new qo(WM,16,16,Fs,Si),Gi.name="DFG_LUT",Gi.minFilter=Hn,Gi.magFilter=Hn,Gi.wrapS=Ni,Gi.wrapT=Ni,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var Qc=class{constructor(t={}){let{canvas:e=I0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Yn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,m=new Set([_c,yc,xc]),g=new Set([Yn,Ei,io,fr,pc,mc]),M=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},C=null,R=null,y=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,I=!1,F=null,B=null,D=null,G=null;this._outputColorSpace=rn;let q=0,V=0,ct=null,J=-1,rt=null,ot=new $e,Pt=new $e,Zt=null,tt=new ie(0),wt=0,Bt=e.width,Jt=e.height,K=1,Ot=null,pe=null,Yt=new $e(0,0,Bt,Jt),me=new $e(0,0,Bt,Jt),Te=!1,lt=new Ps,vt=new kl,yt=!1,Ht=!1,Ct=new jt,fe=new U,qt=new $e,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function Ne(){return ct===null?K:1}let k=i;function cn(A,H){return e.getContext(A,H)}let Se,Ge,Tt,en,Qt,ae,L,T,X,dt,at,_t,At,et,nt,bt,O,st,Q,Et,mt,Mt,$t;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Kt,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),k===null){let H="webgl2";if(k=cn(H,A),k===null)throw cn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}_e()}catch(A){throw e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),ne("WebGLRenderer: "+A.message),A}function _e(){Se=new n_(k),Se.init(),mt=new BM(k,Se),Ge=new Xy(k,Se,t,mt),Tt=new FM(k,Se),Ge.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),B=k.createFramebuffer(),D=k.createFramebuffer(),G=k.createFramebuffer(),en=new r_(k),Qt=new bM,ae=new OM(k,Se,Tt,Qt,Ge,mt,en),L=new e_(E),T=new a1(k),Mt=new Vy(k,T),X=new i_(k,T,en,Mt),dt=new a_(k,X,T,Mt,en),st=new o_(k,Ge,ae),nt=new qy(Qt),at=new vM(E,L,Se,Ge,Mt,nt),_t=new zM(E,Qt),At=new SM,et=new PM(Se),O=new zy(E,L,Tt,dt,p,l),bt=new UM(E,dt,Ge),$t=new VM(k,en,Ge,Tt),Q=new Wy(k,Se,en),Et=new s_(k,Se,en),en.programs=at.programs,E.capabilities=Ge,E.extensions=Se,E.properties=Qt,E.renderLists=At,E.shadowMap=bt,E.state=Tt,E.info=en}x!==Yn&&(P=new c_(x,e.width,e.height,a,s,r));let ft=new fd(E,k);this.xr=ft,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(Bt,Jt,!1))},this.getSize=function(A){return A.set(Bt,Jt)},this.setSize=function(A,H,Z=!0){if(ft.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}Bt=A,Jt=H,e.width=Math.floor(A*K),e.height=Math.floor(H*K),Z===!0&&(e.style.width=A+"px",e.style.height=H+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Bt*K,Jt*K).floor()},this.setDrawingBufferSize=function(A,H,Z){Bt=A,Jt=H,K=Z,e.width=Math.floor(A*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(x===Yn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ot)},this.getViewport=function(A){return A.copy(Yt)},this.setViewport=function(A,H,Z,W){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,H,Z,W),Tt.viewport(ot.copy(Yt).multiplyScalar(Ne()).round())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,H,Z,W){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,H,Z,W),Tt.scissor(Pt.copy(me).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){Tt.setScissorTest(Te=A)},this.setOpaqueSort=function(A){Ot=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,Z=!0){let W=0;if(A){let $=!1;if(ct!==null){let Rt=ct.texture.format;$=m.has(Rt)}if($){let Rt=ct.texture.type,kt=g.has(Rt),St=O.getClearColor(),Ft=O.getClearAlpha(),Wt=St.r,ue=St.g,Pe=St.b;kt?(M[0]=Wt,M[1]=ue,M[2]=Pe,M[3]=Ft,k.clearBufferuiv(k.COLOR,0,M)):(S[0]=Wt,S[1]=ue,S[2]=Pe,S[3]=Ft,k.clearBufferiv(k.COLOR,0,S))}else W|=k.COLOR_BUFFER_BIT}H&&(W|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),O.dispose(),At.dispose(),et.dispose(),ae.dispose(),Qt.dispose(),L.dispose(),dt.dispose(),X.dispose(),Mt.dispose(),$t.dispose(),at.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",hf),ft.removeEventListener("sessionend",uf),Zs.stop()};function Kt(A){A.preventDefault(),Ho("WebGLRenderer: Context Lost."),I=!0}function ge(){Ho("WebGLRenderer: Context Restored."),I=!1;let A=en.autoReset,H=bt.enabled,Z=bt.autoUpdate,W=bt.needsUpdate,$=bt.type;_e(),en.autoReset=A,bt.enabled=H,bt.autoUpdate=Z,bt.needsUpdate=W,bt.type=$}function Dt(A){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){let H=A.target;H.removeEventListener("dispose",Be),yn(H)}function yn(A){Ms(A),Qt.remove(A)}function Ms(A){let H=Qt.get(A).programs;H!==void 0&&(H.forEach(function(Z){at.releaseProgram(Z)}),A.isShaderMaterial&&at.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Z,W,$,Rt){H===null&&(H=Ae);let kt=$.isMesh&&$.matrixWorld.determinantAffine()<0,St=Xm(A,H,Z,W,$);Tt.setMaterial(W,kt);let Ft=Z.index,Wt=1;if(W.wireframe===!0){if(Ft=X.getWireframeAttribute(Z),Ft===void 0)return;Wt=2}let ue=Z.drawRange,Pe=Z.attributes.position,zt=ue.start*Wt,Ie=(ue.start+ue.count)*Wt;Rt!==null&&(zt=Math.max(zt,Rt.start*Wt),Ie=Math.min(Ie,(Rt.start+Rt.count)*Wt)),Ft!==null?(zt=Math.max(zt,0),Ie=Math.min(Ie,Ft.count)):Pe!=null&&(zt=Math.max(zt,0),Ie=Math.min(Ie,Pe.count));let hn=Ie-zt;if(hn<0||hn===1/0)return;Mt.setup($,W,St,Z,Ft);let We,ze=Q;if(Ft!==null&&(We=T.get(Ft),ze=Et,ze.setIndex(We)),$.isMesh)W.wireframe===!0?(Tt.setLineWidth(W.wireframeLinewidth*Ne()),ze.setMode(k.LINES)):ze.setMode(k.TRIANGLES);else if($.isLine){let Tn=W.linewidth;Tn===void 0&&(Tn=1),Tt.setLineWidth(Tn*Ne()),$.isLineSegments?ze.setMode(k.LINES):$.isLineLoop?ze.setMode(k.LINE_LOOP):ze.setMode(k.LINE_STRIP)}else $.isPoints?ze.setMode(k.POINTS):$.isSprite&&ze.setMode(k.TRIANGLES);if($.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))ze.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Tn=$._multiDrawStarts,Vt=$._multiDrawCounts,On=$._multiDrawCount,Ue=Ft?T.get(Ft).bytesPerElement:1,Js=Qt.get(W).currentProgram.getUniforms();for(let An=0;An<On;An++)Js.setValue(k,"_gl_DrawID",An),ze.render(Tn[An]/Ue,Vt[An])}else if($.isInstancedMesh)ze.renderInstances(zt,hn,$.count);else if(Z.isInstancedBufferGeometry){let Tn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Vt=Math.min(Z.instanceCount,Tn);ze.renderInstances(zt,hn,Vt)}else ze.render(zt,hn)};function cf(A,H,Z,W){F!==null&&A.isNodeMaterial&&F.setObject(W,A),yt===!0&&nt.setState(A,Z,!1),A.transparent===!0&&A.side===an&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,bo(A,H,W),A.side=Ns,A.needsUpdate=!0,bo(A,H,W),A.side=an):bo(A,H,W)}this.compile=function(A,H,Z=null){Z===null&&(Z=A),F!==null&&F.renderStart(A,H,Z),R=et.get(Z),R.init(H),b.push(R),Z.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),A!==Z&&A.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),R.setupLights(),F!==null&&F.updateLights(R.state.lightsArray),Ht=this.localClippingEnabled,yt=nt.init(this.clippingPlanes,Ht),yt===!0&&nt.setGlobalState(this.clippingPlanes,H),F!==null&&bt.render(R.state.shadowsArray,Z,H);let W=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Rt=$.material;if(Rt)if(Array.isArray(Rt))for(let kt=0;kt<Rt.length;kt++){let St=Rt[kt];cf(St,Z,H,$),W.add(St)}else cf(Rt,Z,H,$),W.add(Rt)}),R=b.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(A,H,Z=null){let W=this.compile(A,H,Z);return new Promise($=>{function Rt(){if(W.forEach(function(kt){let Ft=Qt.get(kt).currentProgram;(Ft===void 0||Ft.isReady())&&W.delete(kt)}),W.size===0){$(A);return}setTimeout(Rt,10)}Se.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let kh=null;function Vm(A){kh&&kh(A)}function hf(){Zs.stop()}function uf(){Zs.start()}let Zs=new pp;Zs.setAnimationLoop(Vm),typeof self<"u"&&Zs.setContext(self),this.setAnimationLoop=function(A){kh=A,ft.setAnimationLoop(A),A===null?Zs.stop():Zs.start()},ft.addEventListener("sessionstart",hf),ft.addEventListener("sessionend",uf),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(A,H);let Z=ft.enabled===!0&&ft.isPresenting===!0,W=P!==null&&(ct===null||Z)&&P.begin(E,ct);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(H),H=ft.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,H,ct),R=et.get(A,b.length),R.init(H),R.state.textureUnits=ae.getTextureUnits(),b.push(R),Ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?vt.setFromArrayCamera(H):lt.setFromProjectionMatrix(Ct,oi,H.reversedDepth),Ht=this.localClippingEnabled,yt=nt.init(this.clippingPlanes,Ht),C=At.get(A,y.length),C.init(),y.push(C),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let kt=E.xr.getDepthSensingMesh();kt!==null&&Gh(kt,H,-1/0,E.sortObjects)}Gh(A,H,0,E.sortObjects),C.finish(),F!==null&&F.updateLights(R.state.lightsArray),E.sortObjects===!0&&C.sort(Ot,pe),Ce=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ce&&O.addToRenderList(C,A),this.info.autoReset===!0&&this.info.reset(),yt===!0&&nt.beginShadows();let $=R.state.shadowsArray;if(bt.render($,A,H),yt===!0&&nt.endShadows(),(W&&P.hasRenderPass())===!1){let kt=C.opaque,St=C.transmissive;if(R.setupLights(),H.isArrayCamera){let Ft=H.cameras;if(St.length>0)for(let Wt=0,ue=Ft.length;Wt<ue;Wt++){let Pe=Ft[Wt];ff(kt,St,A,Pe)}Ce&&O.render(A);for(let Wt=0,ue=Ft.length;Wt<ue;Wt++){let Pe=Ft[Wt];df(C,A,Pe,Pe.viewport)}}else St.length>0&&ff(kt,St,A,H),Ce&&O.render(A),df(C,A,H)}ct!==null&&V===0&&(ae.updateMultisampleRenderTarget(ct),ae.updateRenderTargetMipmap(ct)),W&&P.end(E),A.isScene===!0&&A.onAfterRender(E,A,H),Mt.resetDefaultState(),J=-1,rt=null,b.pop(),b.length>0?(R=b[b.length-1],ae.setTextureUnits(R.state.textureUnits),yt===!0&&nt.setGlobalState(E.clippingPlanes,R.state.camera)):R=null,y.pop(),y.length>0?C=y[y.length-1]:C=null,F!==null&&F.renderEnd()};function Gh(A,H,Z,W){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)R.pushLight(A),A.castShadow&&R.pushShadow(A);else if(A.isSprite){let kt=H.isArrayCamera?vt:lt;if(!A.frustumCulled||A.intersectsFrustum(kt)){W&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);let St=dt.update(A),Ft=A.material;Ft.visible&&C.push(A,St,Ft,Z,qt.z,null,H)}}else if(A.isMesh||A.isLine||A.isPoints){let kt=H.isArrayCamera?vt:lt;if(!A.frustumCulled||A.intersectsFrustum(kt)){let St=dt.update(A),Ft=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),qt.copy(St.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ft)){let Wt=St.groups;for(let ue=0,Pe=Wt.length;ue<Pe;ue++){let zt=Wt[ue],Ie=Ft[zt.materialIndex];Ie&&Ie.visible&&C.push(A,St,Ie,Z,qt.z,zt,H)}}else Ft.visible&&C.push(A,St,Ft,Z,qt.z,null,H)}}}let Rt=A.children;for(let kt=0,St=Rt.length;kt<St;kt++)Gh(Rt[kt],H,Z,W)}function df(A,H,Z,W){let{opaque:$,transmissive:Rt,transparent:kt}=A;R.setupLightsView(Z),yt===!0&&nt.setGlobalState(E.clippingPlanes,Z),W&&Tt.viewport(ot.copy(W)),$.length>0&&Ja($,H,Z),Rt.length>0&&Ja(Rt,H,Z),kt.length>0&&Ja(kt,H,Z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ff(A,H,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[W.id]===void 0){let zt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[W.id]=new Kn(1,1,{generateMipmaps:!0,type:zt?Si:Yn,minFilter:ls,samples:Math.max(4,Ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}let Rt=R.state.transmissionRenderTarget[W.id],kt=W.viewport||ot;Rt.setSize(kt.z*E.transmissionResolutionScale,kt.w*E.transmissionResolutionScale);let St=E.getRenderTarget(),Ft=E.getActiveCubeFace(),Wt=E.getActiveMipmapLevel();E.setRenderTarget(Rt),E.getClearColor(tt),wt=E.getClearAlpha(),wt<1&&E.setClearColor(16777215,.5),E.clear(),Ce&&O.render(Z);let ue=E.toneMapping;E.toneMapping=ki;let Pe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),R.setupLightsView(W),yt===!0&&nt.setGlobalState(E.clippingPlanes,W),Ja(A,Z,W),ae.updateMultisampleRenderTarget(Rt),ae.updateRenderTargetMipmap(Rt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ie=0,hn=H.length;Ie<hn;Ie++){let We=H[Ie],{object:ze,geometry:Tn,material:Vt,group:On}=We;if(Vt.side===an&&ze.layers.test(W.layers)){let Ue=Vt.side;Vt.side=mn,Vt.needsUpdate=!0,pf(ze,Z,W,Tn,Vt,On),Vt.side=Ue,Vt.needsUpdate=!0,zt=!0}}zt===!0&&(ae.updateMultisampleRenderTarget(Rt),ae.updateRenderTargetMipmap(Rt))}E.setRenderTarget(St,Ft,Wt),E.setClearColor(tt,wt),Pe!==void 0&&(W.viewport=Pe),E.toneMapping=ue}function Ja(A,H,Z){let W=H.isScene===!0?H.overrideMaterial:null;for(let $=0,Rt=A.length;$<Rt;$++){let kt=A[$],{object:St,geometry:Ft,group:Wt}=kt,ue=kt.material;ue.allowOverride===!0&&W!==null&&(ue=W),St.layers.test(Z.layers)&&pf(St,H,Z,Ft,ue,Wt)}}function pf(A,H,Z,W,$,Rt){F!==null&&$.isNodeMaterial&&F.setObject(A,$),A.onBeforeRender(E,H,Z,W,$,Rt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(E,H,Z,W,A,Rt),$.transparent===!0&&$.side===an&&$.forceSinglePass===!1?($.side=mn,$.needsUpdate=!0,E.renderBufferDirect(Z,H,W,$,A,Rt),$.side=Ns,$.needsUpdate=!0,E.renderBufferDirect(Z,H,W,$,A,Rt),$.side=an):E.renderBufferDirect(Z,H,W,$,A,Rt),A.onAfterRender(E,H,Z,W,$,Rt)}function mf(A){let H=0;for(let Z of A)Z.texture!==null&&H++;return H}function bo(A,H,Z){H.isScene!==!0&&(H=Ae);let W=Qt.get(A),$=R.state.lights,Rt=R.state.shadowsArray,kt=$.state.version,St=at.getParameters(A,$.state,Rt,H,Z,R.state.lightProbeGridArray),Ft=at.getProgramCacheKey(St),Wt=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,W.fog=H.fog;let ue=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=L.get(A.envMap||W.environment,ue),W.envMapRotation=W.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",Be),Wt=new Map,W.programs=Wt,W.programVariants=new Map);let Pe=Wt.get(Ft);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===kt)return xf(A,St),Pe}else St.uniforms=at.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,Z,St),A.onBeforeCompile(St,E),Pe=at.acquireProgram(St,Ft),Wt.set(Ft,Pe),W.uniforms=St.uniforms;let zt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=nt.uniform),xf(A,St),W.needsLights=Ym(A),W.lightsStateVersion=kt,W.needsLights&&(zt.ambientLightColor.value=$.state.ambient,zt.lightProbe.value=$.state.probe,zt.sunLights.value=$.state.sun,zt.sunLightShadows.value=$.state.sunShadow,zt.directionalLights.value=$.state.directional,zt.directionalLightShadows.value=$.state.directionalShadow,zt.spotLights.value=$.state.spot,zt.spotLightShadows.value=$.state.spotShadow,zt.rectAreaLights.value=$.state.rectArea,zt.ltc_1.value=$.state.rectAreaLTC1,zt.ltc_2.value=$.state.rectAreaLTC2,zt.pointLights.value=$.state.point,zt.pointLightShadows.value=$.state.pointShadow,zt.hemisphereLights.value=$.state.hemi,zt.sunShadowMatrix.value=$.state.sunShadowMatrix,zt.sunShadowCascade.value=$.state.sunShadowCascade,zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,zt.spotLightMatrix.value=$.state.spotLightMatrix,zt.spotLightMap.value=$.state.spotLightMap,zt.pointShadowMatrix.value=$.state.pointShadowMatrix),W.numLightProbeGrids=mf(R.state.lightProbeGridArray),W.currentProgram=Pe,W.uniformsList=null,Pe}function Wm(A,H,Z,W,$){let Rt=Qt.get(A),kt=Rt.currentProgram.id+","+W+","+$,St=Rt.programVariants.get(kt);return St===void 0?(St=bo(A,H,Z),Rt.programVariants.set(kt,St)):(Rt.currentProgram=St,Rt.uniformsList=null,Rt.outputColorSpace=W,Rt.toneMapping=$),St}function gf(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=so.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function xf(A,H){let Z=Qt.get(A);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Xm(A,H,Z,W,$){H.isScene!==!0&&(H=Ae),ae.resetTextureUnits();let Rt=H.fog,kt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?H.environment:null,St=ct===null?E.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Le.workingColorSpace,Ft=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Wt=L.get(W.envMap||kt,Ft),ue=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Pe=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),zt=!!Z.morphAttributes.position,Ie=!!Z.morphAttributes.normal,hn=!!Z.morphAttributes.color,We=ki;W.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(We=E.toneMapping);let ze=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Tn=ze!==void 0?ze.length:0,Vt=Qt.get(W),On=R.state.lights;if(yt===!0&&(Ht===!0||A!==rt)){let Qe=A===rt&&W.id===J;nt.setState(W,A,Qe)}let Ue=!1,Js=!1;W.version===Vt.__version?Vt.needsLights&&Vt.lightsStateVersion!==On.state.version||$.isBatchedMesh&&Vt.batching===!1||!$.isBatchedMesh&&Vt.batching===!0||$.isBatchedMesh&&Vt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Vt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Vt.instancing===!1||!$.isInstancedMesh&&Vt.instancing===!0||$.isSkinnedMesh&&Vt.skinning===!1||!$.isSkinnedMesh&&Vt.skinning===!0||$.isInstancedMesh&&Vt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Vt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Vt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Vt.instancingMorph===!1&&$.morphTexture!==null||Vt.envMap!==Wt||W.fog===!0&&Vt.fog!==Rt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==nt.numPlanes||Vt.numIntersection!==nt.numIntersection)||Vt.vertexAlphas!==ue||Vt.vertexTangents!==Pe||Vt.morphTargets!==zt||Vt.morphNormals!==Ie||Vt.morphColors!==hn||Vt.morphTargetsCount!==Tn||Vt.numLightProbeGrids!==mf(R.state.lightProbeGridArray)?Ue=!0:(Vt.outputColorSpace!==St||Vt.toneMapping!==We)&&(Js=!0):(Ue=!0,Vt.__version=W.version);let An=Vt.currentProgram;(Ue===!0||Js===!0)&&(An=Js===!0?Wm(W,H,$,St,We):bo(W,H,$),F&&W.isNodeMaterial&&F.onUpdateProgram(W,An,Vt));let Ka=!1,vs=!1,Ks=!1,De=An.getUniforms(),bn=Vt.uniforms;if(Tt.useProgram(An.program)&&(Ka=!0,vs=!0,Ks=!0),W.id!==J&&(J=W.id,vs=!0),Ka||rt!==A){Tt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),De.setValue(k,"projectionMatrix",A.projectionMatrix),De.setValue(k,"viewMatrix",A.matrixWorldInverse);let _n=De.map.cameraPosition;_n!==void 0&&_n.setValue(k,fe.setFromMatrixPosition(A.matrixWorld)),Ge.logarithmicDepthBuffer&&De.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&De.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),rt!==A&&(rt=A,vs=!0,Ks=!0)}if(Vt.needsLights&&(On.state.sunShadowMap.length>0&&De.setValue(k,"sunShadowMap",On.state.sunShadowMap,ae),On.state.directionalShadowMap.length>0&&De.setValue(k,"directionalShadowMap",On.state.directionalShadowMap,ae),On.state.spotShadowMap.length>0&&De.setValue(k,"spotShadowMap",On.state.spotShadowMap,ae),On.state.pointShadowMap.length>0&&De.setValue(k,"pointShadowMap",On.state.pointShadowMap,ae)),$.isSkinnedMesh){De.setOptional(k,$,"bindMatrix"),De.setOptional(k,$,"bindMatrixInverse");let Qe=$.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),De.setValue(k,"boneTexture",Qe.boneTexture,ae))}$.isBatchedMesh&&(De.setOptional(k,$,"batchingTexture"),De.setValue(k,"batchingTexture",$._matricesTexture,ae),De.setOptional(k,$,"batchingIdTexture"),De.setValue(k,"batchingIdTexture",$._indirectTexture,ae),De.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&De.setValue(k,"batchingColorTexture",$._colorsTexture,ae));let gi=Z.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&st.update($,Z,An),(vs||Vt.receiveShadow!==$.receiveShadow)&&(Vt.receiveShadow=$.receiveShadow,De.setValue(k,"receiveShadow",$.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&H.environment!==null&&(bn.envMapIntensity.value=H.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=XM()),vs){if(De.setValue(k,"toneMappingExposure",E.toneMappingExposure),Vt.needsLights&&qm(bn,Ks),Rt&&W.fog===!0&&_t.refreshFogUniforms(bn,Rt),_t.refreshMaterialUniforms(bn,W,K,Jt,R.state.transmissionRenderTarget[A.id]),Vt.needsLights&&Vt.numLightProbeGrids>0){let Qe=v,_n=0;for(let Ji of R.state.lightProbeGridArray)Ji.texture!==null&&(Qe.textures[_n]=Ji.texture,Qe.min[_n]=Ji.boundingBox.min,Qe.max[_n]=Ji.boundingBox.max,Qe.resolution[_n]=Ji.resolution,_n++);for(let Ji in Qe)Qe[Ji].length=_n;bn.probesSH.value=Qe.textures,bn.probesMin.value=Qe.min,bn.probesMax.value=Qe.max,bn.probesResolution.value=Qe.resolution}so.upload(k,gf(Vt),bn,ae)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(so.upload(k,gf(Vt),bn,ae),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&De.setValue(k,"center",$.center),De.setValue(k,"modelViewMatrix",$.modelViewMatrix),De.setValue(k,"normalMatrix",$.normalMatrix),De.setValue(k,"modelMatrix",$.matrixWorld),W.uniformsGroups!==void 0){let Qe=W.uniformsGroups;for(let _n=0,Ji=Qe.length;_n<Ji;_n++){let _f=Qe[_n];$t.update(_f,An),$t.bind(_f,An)}}return An}function qm(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Ym(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(A,H,Z){let W=Qt.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Qt.get(A.texture).__webglTexture=H,Qt.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let Z=Qt.get(A);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Z=0){ct=A,q=H,V=Z;let W=null,$=!1,Rt=!1;if(A){let St=Qt.get(A);if(St.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(k.FRAMEBUFFER,St.__webglFramebuffer),ot.copy(A.viewport),Pt.copy(A.scissor),Zt=A.scissorTest,Tt.viewport(ot),Tt.scissor(Pt),Tt.setScissorTest(Zt),J=-1;return}else if(St.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(St.__hasExternalTextures)ae.rebindTextures(A,Qt.get(A.texture).__webglTexture,Qt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ue=A.depthTexture;if(St.__boundDepthTexture!==ue){if(ue!==null&&Qt.has(ue)&&(A.width!==ue.image.width||A.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}let Ft=A.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Rt=!0);let Wt=Qt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[H])?W=Wt[H][Z]:W=Wt[H],$=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?W=Qt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?W=Wt[Z]:W=Wt,ot.copy(A.viewport),Pt.copy(A.scissor),Zt=A.scissorTest}else ot.copy(Yt).multiplyScalar(K).floor(),Pt.copy(me).multiplyScalar(K).floor(),Zt=Te;if(Z!==0&&(W=B),Tt.bindFramebuffer(k.FRAMEBUFFER,W)&&Tt.drawBuffers(A,W),Tt.viewport(ot),Tt.scissor(Pt),Tt.setScissorTest(Zt),$){let St=Qt.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,St.__webglTexture,Z)}else if(Rt){let St=H;for(let Ft=0;Ft<A.textures.length;Ft++){let Wt=Qt.get(A.textures[Ft]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ft,Wt.__webglTexture,Z,St)}}else if(A!==null&&Z!==0){let St=Qt.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,St.__webglTexture,Z)}J=-1};function yf(A){let H=Qt.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=Ge.textureFormatReadable(A.format),H.__typeReadable=Ge.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,Z,W,$,Rt,kt,St=0){if(!(A&&A.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Ft=Ft[kt],Array.isArray(Ft)&&(Ft=Ft[0])),Ft){Tt.bindFramebuffer(k.FRAMEBUFFER,Ft);try{let Wt=A.textures[St],ue=Wt.format,Pe=Wt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+St);let zt=yf(Wt);if(zt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-W&&Z>=0&&Z<=A.height-$&&k.readPixels(H,Z,W,$,mt.convert(ue),mt.convert(Pe),Rt)}finally{let Wt=ct!==null?Qt.get(ct).__webglFramebuffer:null;Tt.bindFramebuffer(k.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,H,Z,W,$,Rt,kt,St=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Ft=Ft[kt],Array.isArray(Ft)&&(Ft=Ft[0])),Ft)if(H>=0&&H<=A.width-W&&Z>=0&&Z<=A.height-$){Tt.bindFramebuffer(k.FRAMEBUFFER,Ft);let Wt=A.textures[St],ue=Wt.format,Pe=Wt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+St);let zt=yf(Wt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.bufferData(k.PIXEL_PACK_BUFFER,Rt.byteLength,k.STREAM_READ),k.readPixels(H,Z,W,$,mt.convert(ue),mt.convert(Pe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let hn=ct!==null?Qt.get(ct).__webglFramebuffer:null;Tt.bindFramebuffer(k.FRAMEBUFFER,hn);let We=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await D0(k,We,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Rt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Ie),k.deleteSync(We),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,Z=0){let W=Math.pow(2,-Z),$=Math.floor(A.image.width*W),Rt=Math.floor(A.image.height*W),kt=H!==null?H.x:0,St=H!==null?H.y:0;ae.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,kt,St,$,Rt),Tt.unbindTexture()},this.copyTextureToTexture=function(A,H,Z=null,W=null,$=0,Rt=0){let kt,St,Ft,Wt,ue,Pe,zt,Ie,hn,We=A.isCompressedTexture?A.mipmaps[Rt]:A.image;if(Z!==null)kt=Z.max.x-Z.min.x,St=Z.max.y-Z.min.y,Ft=Z.isBox3?Z.max.z-Z.min.z:1,Wt=Z.min.x,ue=Z.min.y,Pe=Z.isBox3?Z.min.z:0;else{let De=Math.pow(2,-$);kt=Math.floor(We.width*De),St=Math.floor(We.height*De),A.isDataArrayTexture?Ft=We.depth:A.isData3DTexture?Ft=Math.floor(We.depth*De):Ft=1,Wt=0,ue=0,Pe=0}W!==null?(zt=W.x,Ie=W.y,hn=W.z):(zt=0,Ie=0,hn=0);let ze=mt.convert(H.format),Tn=mt.convert(H.type),Vt;H.isData3DTexture?(ae.setTexture3D(H,0),Vt=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ae.setTexture2DArray(H,0),Vt=k.TEXTURE_2D_ARRAY):(ae.setTexture2D(H,0),Vt=k.TEXTURE_2D),Tt.activeTexture(k.TEXTURE0),Tt.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),Tt.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Tt.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);let On=Tt.getParameter(k.UNPACK_ROW_LENGTH),Ue=Tt.getParameter(k.UNPACK_IMAGE_HEIGHT),Js=Tt.getParameter(k.UNPACK_SKIP_PIXELS),An=Tt.getParameter(k.UNPACK_SKIP_ROWS),Ka=Tt.getParameter(k.UNPACK_SKIP_IMAGES);Tt.pixelStorei(k.UNPACK_ROW_LENGTH,We.width),Tt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,We.height),Tt.pixelStorei(k.UNPACK_SKIP_PIXELS,Wt),Tt.pixelStorei(k.UNPACK_SKIP_ROWS,ue),Tt.pixelStorei(k.UNPACK_SKIP_IMAGES,Pe);let vs=A.isDataArrayTexture||A.isData3DTexture,Ks=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let De=Qt.get(A),bn=Qt.get(H),gi=Qt.get(De.__renderTarget),Qe=Qt.get(bn.__renderTarget);Tt.bindFramebuffer(k.READ_FRAMEBUFFER,gi.__webglFramebuffer),Tt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let _n=0;_n<Ft;_n++)vs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qt.get(A).__webglTexture,$,Pe+_n),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qt.get(H).__webglTexture,Rt,hn+_n)),k.blitFramebuffer(Wt,ue,Wt+kt,ue+St,zt,Ie,zt+kt,Ie+St,k.DEPTH_BUFFER_BIT,k.NEAREST);Tt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||Qt.has(A)){let De=Qt.get(A),bn=Qt.get(H);Tt.bindFramebuffer(k.READ_FRAMEBUFFER,D),Tt.bindFramebuffer(k.DRAW_FRAMEBUFFER,G);for(let gi=0;gi<Ft;gi++)vs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.__webglTexture,$,Pe+gi):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,De.__webglTexture,$),Ks?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bn.__webglTexture,Rt,hn+gi):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bn.__webglTexture,Rt),$!==0?k.blitFramebuffer(Wt,ue,Wt+kt,ue+St,zt,Ie,zt+kt,Ie+St,k.COLOR_BUFFER_BIT,k.NEAREST):Ks?k.copyTexSubImage3D(Vt,Rt,zt,Ie,hn+gi,Wt,ue,kt,St):k.copyTexSubImage2D(Vt,Rt,zt,Ie,Wt,ue,kt,St);Tt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ks?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Vt,Rt,zt,Ie,hn,kt,St,Ft,ze,Tn,We.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Vt,Rt,zt,Ie,hn,kt,St,Ft,ze,We.data):k.texSubImage3D(Vt,Rt,zt,Ie,hn,kt,St,Ft,ze,Tn,We):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Rt,zt,Ie,kt,St,ze,Tn,We.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Rt,zt,Ie,We.width,We.height,ze,We.data):k.texSubImage2D(k.TEXTURE_2D,Rt,zt,Ie,kt,St,ze,Tn,We);Tt.pixelStorei(k.UNPACK_ROW_LENGTH,On),Tt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ue),Tt.pixelStorei(k.UNPACK_SKIP_PIXELS,Js),Tt.pixelStorei(k.UNPACK_SKIP_ROWS,An),Tt.pixelStorei(k.UNPACK_SKIP_IMAGES,Ka),Rt===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&k.generateMipmap(Vt),Tt.unbindTexture()},this.initRenderTarget=function(A){Qt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),Tt.unbindTexture()},this.resetState=function(){q=0,V=0,ct=null,Tt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}};var nh=class extends As{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new de;t.deleteAttribute("uv");let e=new ee({side:mn}),i=new ee,s=new Pn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new N(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Cs(t,i,6),a=new Xe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new N(t,ao(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new N(t,ao(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new N(t,ao(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new N(t,ao(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new N(t,ao(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new N(t,ao(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ao(n){return new ra({color:0,emissive:16777215,emissiveIntensity:n})}var ih=1337;function Ut(){return ih=ih*16807%2147483647,(ih-1)/2147483646}function zn(n){ih=n}function qM(n,t){let e=new Float32Array(n*n);zn(t);for(let i=0;i<e.length;i++)e[i]=Ut();return(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),h=l*l*(3-2*l),u=n,d=(r%u+u)%u,f=(o%u+u)%u,p=(d+1)%u,x=(f+1)%u,m=e[f*u+d],g=e[f*u+p],M=e[x*u+d],S=e[x*u+p];return m+(g-m)*c+(M-m)*h+(m-g-M+S)*c*h}}function ve(n,t=4,e=5){let i=[];for(let s=0;s<e;s++)i.push({f:qM(t<<s,n+s*97),p:t<<s});return(s,r)=>{let o=0,a=.5,l=0;for(let c of i)o+=c.f(s*c.p,r*c.p)*a,l+=a,a*=.5;return o/l}}var pd={},sh=4;function wp(n){sh=n}function ke(n,t,e,i={}){if(pd[n])return pd[n];let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createImageData(t,t),a=new Float32Array(t*t);for(let x=0;x<t;x++)for(let m=0;m<t;m++){let g=e(m/t,x/t,m,x),M=(x*t+m)*4;o.data[M]=Math.max(0,Math.min(255,g.r*255)),o.data[M+1]=Math.max(0,Math.min(255,g.g*255)),o.data[M+2]=Math.max(0,Math.min(255,g.b*255)),o.data[M+3]=g.a===void 0?255:g.a*255,a[x*t+m]=g.h===void 0?.5:g.h}r.putImageData(o,0,0),i.post&&i.post(r,t);let l=new bi(s);l.colorSpace=rn,l.wrapS=l.wrapT=ss,l.anisotropy=sh;let c=document.createElement("canvas");c.width=c.height=t;let h=c.getContext("2d"),u=h.createImageData(t,t),d=i.normalStrength||2;for(let x=0;x<t;x++)for(let m=0;m<t;m++){let g=a[x*t+(m-1+t)%t],M=a[x*t+(m+1)%t],S=a[(x-1+t)%t*t+m],v=a[(x+1)%t*t+m],C=(g-M)*d,R=(S-v)*d,y=1,b=Math.hypot(C,R,y);C/=b,R/=b,y/=b;let P=(x*t+m)*4;u.data[P]=(C*.5+.5)*255,u.data[P+1]=(-R*.5+.5)*255,u.data[P+2]=(y*.5+.5)*255,u.data[P+3]=255}h.putImageData(u,0,0);let f=new bi(c);f.wrapS=f.wrapT=ss,f.anisotropy=sh;let p={map:l,normalMap:f,canvas:s};return pd[n]=p,p}var re=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],md=(n,t,e)=>n+(t-n)*e,Ve=(n,t,e)=>[md(n[0],t[0],e),md(n[1],t[1],e),md(n[2],t[2],e)],Ti=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),Gn=n=>n-Math.floor(n);function nn(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}var j={};function Tp(n=1){let t=n>=1?512:256,e=n>=1?256:128;{let r=ve(11,4,6),o=ve(12,16,3);j.grass=ke("grass",t,(a,l)=>{let c=r(a,l),h=o(a,l),u=nn(Math.floor(a*180),Math.floor(l*60+nn(Math.floor(a*180),3)*10)),d=Ve(re(4156970),re(8037962),Ti(c*1.3-.15+u*.25)),f=Ve(d,re(9075274),Ti((h-.62)*3)*.5);return{r:f[0],g:f[1],b:f[2],h:u*.6+c*.4}},{normalStrength:3})}{let r=ve(21,8,5),o=ve(22,4,4);j.asphalt=ke("asphalt",t,(a,l,c,h)=>{let u=nn(c,h),d=r(a,l),f=Math.abs(o(a,l)-.5)<.006?1:0,p=.2+d*.12+(u>.93?.12:0)-(u<.05?.06:0)-f*.12;return{r:p,g:p,b:p*1.04,h:u*.5+d*.3-f*.6}},{normalStrength:2.5})}{let r=ve(31,8,5);j.concrete=ke("concrete",e*2,(o,a,l,c)=>{let h=r(o,a),u=nn(l,c),d=Gn(o*2)<.012||Gn(a*2)<.012?1:0,f=.62+h*.15+u*.05-d*.25;return{r:f,g:f*.98,b:f*.94,h:h*.5+u*.2-d*.7}})}{let r=ve(41,8,4);j.brick=ke("brick",t,(o,a,l,c)=>{let d=Math.floor(a*16),f=d%2*.5,p=Gn(o*8+f),x=Gn(a*16),m=Math.floor(o*8+f)+d*31,g=p<.05||x<.1,M=nn(m,7),S=Ve(re(9059112),re(11556666),M),v=r(o,a);if(g){let R=.68+v*.08;return{r:R,g:R*.96,b:R*.9,h:.1}}let C=Ve(S,re(5909022),Ti(v-.45)*1.2);return{r:C[0],g:C[1],b:C[2],h:.7+v*.3}},{normalStrength:3})}{let r=ve(51,4,5);j.siding=ke("siding",e*2,(o,a,l,c)=>{let u=Gn(a*10),d=.82+u*.18-(u>.94?.3:0),f=r(o*.5,a)*.08+nn(l,Math.floor(c/3))*.03,p=Ti(d+f-.05);return{r:p,g:p,b:p,h:u}},{normalStrength:4})}{let r=ve(61,8,5);j.plaster=ke("plaster",e,(o,a)=>{let l=r(o,a),c=.86+l*.12;return{r:c,g:c,b:c,h:l}},{normalStrength:1.2})}{let r=ve(71,2,5);j.floor=ke("floor",t,(o,a,l,c)=>{let u=Math.floor(a*8),d=nn(u,1),f=Gn(o*2+d),p=Math.floor(o*2+d)*13+u,x=Gn(a*8)<.03||f<.006,m=r(o*.5+p*.17,a*6+p*.3),g=nn(p,4),M=Ve(Ve(re(8014376),re(11038783),g),re(4860436),Ti(m-.45)*1.5+Math.sin(m*60)*.06);return x?{r:M[0]*.5,g:M[1]*.5,b:M[2]*.5,h:0}:{r:M[0],g:M[1],b:M[2],h:.6+m*.2}})}{let r=ve(81,8,4);j.roof=ke("roof",e*2,(o,a,l,c)=>{let u=Math.floor(a*12),d=Gn(a*12),f=Gn(o*8+u%2*.5),p=Math.floor(o*8+u%2*.5)+u*17,m=.25+nn(p,3)*.12+r(o,a)*.1-(d>.9?.15:0)-(f<.03?.1:0)+d*.06;return{r:m*1.05,g:m*.92,b:m*.88,h:d}},{normalStrength:4})}{let r=ve(91,2,5);j.wood=ke("wood",e*2,(o,a,l,c)=>{let h=r(o*.3,a*4),u=Math.sin((h*30+o*3)*3)*.5+.5,d=Ve(re(11567184),re(8015920),u*.6+nn(l,c)*.08);return{r:d[0],g:d[1],b:d[2],h:u*.6}},{normalStrength:2})}{let r=ve(92,2,5),o=ve(93,8,4);j.paintwood=ke("paintwood",e,(a,l,c,h)=>{let u=r(a*.3,l*4),d=o(a,l)>.8,f=Math.sin(u*60)*.5+.5;if(d){let x=Ve(re(9071178),re(6965808),f);return{r:x[0],g:x[1],b:x[2],h:.2}}let p=.88+f*.05;return{r:p,g:p,b:p*.97,h:.6+f*.1}},{normalStrength:2})}{let r=ve(101,8,6);j.dirt=ke("dirt",e*2,(o,a,l,c)=>{let h=r(o,a),u=nn(l,c),d=Ve(re(4862496),re(8018490),h*1.2-.1+u*.1),f=u>.985;return{r:f?.6:d[0],g:f?.58:d[1],b:f?.55:d[2],h:h+(f?.5:0)}},{normalStrength:3})}j.tile=ke("tile",e,(r,o,a,l)=>{let c=Gn(r*4)<.04||Gn(o*4)<.04,h=(Math.floor(r*4)+Math.floor(o*4))%2,u=c?.55:h?.92:.2;return{r:u,g:u,b:u*(h?.98:1.1),h:c?0:1}});{let r=ve(111,16,3);j.carpet=ke("carpet",e,(o,a,l,c)=>{let h=r(o,a)*.4+nn(l,c)*.6,u=.75+h*.25;return{r:u,g:u,b:u,h}},{normalStrength:1.5})}{let r=ve(121,4,5),o=ve(122,32,2);j.metal=ke("metal",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l*.05),f=.82+d*.12-Ti(u-.6)*.8;return{r:f,g:f,b:f,h:d*.3+u*.2}},{normalStrength:1})}{let r=ve(131,4,6);j.rust=ke("rust",e,(o,a)=>{let l=r(o,a),c=Ve(re(5921370),re(9062946),Ti(l*1.6-.5));return{r:c[0],g:c[1],b:c[2],h:l}},{normalStrength:2})}{let r=ve(141,4,5);j.bark=ke("bark",e,(o,a,l,c)=>{let h=r(o*2,a*.4),u=Math.abs(Math.sin(o*40+h*8)),d=Ve(re(3023384),re(6968384),u*.7+h*.3);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:4})}{let r=ve(151,8,4);j.leaf=ke("leaf",e,(o,a,l,c)=>{let h=r(o,a),u=nn(l>>2,c>>2),d=Ve(re(2775582),re(6986298),h*.8+u*.4);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:3})}{let r=ve(155,8,5);j.hedge=ke("hedge",e,(o,a,l,c)=>{let h=r(o,a),u=nn(l>>1,c>>1),d=Ve(re(1981974),re(5933618),h*.9+u*.3-.1);return{r:d[0],g:d[1],b:d[2],h:h*.5+u*.5}},{normalStrength:5})}{let r=ve(201,4,5),o=ve(202,16,3);j.carrot=ke("carrot",t,(a,l,c,h)=>{let u=Math.pow(Math.abs(Math.sin(l*Math.PI*22+r(a,l)*9)),10)*(.4+r(a*3,l)*.8),d=o(a,l),f=nn(Math.floor(a*24),Math.floor(l*40))>.93&&Gn(l*40)<.35?1:0,p=Ve(re(15759898),re(14177804),d*.8+u*.35),x=Math.pow(Math.abs(Math.sin(a*Math.PI*9+r(a,l*.3)*4)),30)*.15,m=Ve(p,re(9062928),u*.35+f*.5+x);return{r:m[0],g:m[1],b:m[2],h:.7-u*.5-f*.4+d*.1}},{normalStrength:4})}{let r=ve(211,4,5),o=ve(212,32,2);j.tomato=ke("tomato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Math.pow(Math.abs(Math.sin(a*Math.PI*6)),8)*.1,p=Ve(re(14164762),re(11014670),u*.7+f),x=Ti(1-l*6),m=Ve(p,re(12099616),x*.25),g=d>.72?.08:0;return{r:m[0]+g,g:m[1]+g*.6,b:m[2],h:u*.3+d*.2}},{normalStrength:1.2})}{let r=ve(221,4,6),o=ve(222,16,3);j.potato=ke("potato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=nn(c,h),p=Ve(re(13148266),re(10122308),u*1.1-.1+f*.1);p=Ve(p,re(6965802),Ti((d-.6)*3)*.6);let x=Gn(a*5),m=Gn(l*4),g=nn(Math.floor(a*5),Math.floor(l*4)),M=Math.hypot(x-.3-g*.4,m-.5),S=g>.55&&M<.06?1-M/.06:0;return p=Ve(p,re(4861976),S*.8),{r:p[0],g:p[1],b:p[2],h:u*.5+d*.3-S*.6+f*.1}},{normalStrength:4})}{let r=ve(231,4,5);j.pepper=ke("pepper",t,(o,a,l,c)=>{let h=r(o,a),u=Math.pow(Math.abs(Math.cos(o*Math.PI*4)),10),d=Ve(re(2787870),re(1268240),h*.7+u*.4);return{r:d[0],g:d[1],b:d[2],h:h*.2-u*.3}},{normalStrength:1.5})}{let r=ve(241,8,4);j.veggreen=ke("veggreen",e,(o,a,l,c)=>{let h=r(o,a),u=Math.abs(Gn(o*6)-.5)<.04?.15:0,d=Ve(re(3836452),re(1989140),h);return{r:d[0]+u,g:d[1]+u,b:d[2]+u*.5,h:h-u}},{normalStrength:2})}{let r=ve(251,8,5),o=ve(252,32,2);j.skin=ke("skin",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Ve(re(15775888),re(13140058),u*.55+d*.25);return{r:f[0],g:f[1],b:f[2],h:d*.4+u*.2}},{normalStrength:1.2})}let i=(r,o,a,l)=>{j[r]=ke(r,e,(c,h,u,d)=>{let f=c-.5,p=h-.5,x=Math.hypot(f,p)*2,m=Math.atan2(p,f),g=Ve(re(o),re(a),Ti(x)),M=.5;if(l==="carrot"&&(x<.45&&(g=Ve(g,re(16298048),.6)),M=Math.abs(Math.sin(m*10))*.2),l==="tomato"){let S=Math.cos(m*3)*.5+.5;x>.35&&x<.78&&S>.4&&(g=Ve(re(15228992),re(15777888),.3),nn(Math.floor(c*40),Math.floor(h*40))>.8&&(g=re(16310432),M=1))}return l==="pepper"&&x<.3&&nn(Math.floor(c*50),Math.floor(h*50))>.7&&(g=re(15788208),M=1),x>.95&&(g=Ve(g,re(0),.2)),{r:g[0],g:g[1],b:g[2],h:M}},{normalStrength:2})};i("fleshCarrot",16292400,15233050,"carrot"),i("fleshTomato",15751738,13115418,"tomato"),i("fleshPotato",16048808,15257744,"potato"),i("fleshPepper",14217392,4890672,"pepper");{let r=ve(301,32,3);j.polymer=ke("polymer",e,(o,a,l,c)=>{let h=nn(l,c)*.5+r(o,a)*.5,u=.85+h*.15;return{r:u,g:u,b:u,h}},{normalStrength:2.5})}{let r=ve(311,4,4);j.gunmetal=ke("gunmetal",e,(o,a,l,c)=>{let h=nn(Math.floor(l/1),Math.floor(c/24))*.1,u=Math.abs(Math.sin(o*30+a*90+r(o,a)*20))>.995?.25:0,d=Ti(r(o,a)-.65)*1.5,f=.85+h+u+d;return{r:f,g:f,b:f,h:h+u}},{normalStrength:1.2})}let s=(r,o,a,l)=>{let c=ve(r.length*13+500,4,4),h=ve(r.length*17+600,4,4);j[r]=ke(r,e,(u,d,f,p)=>{let x=u,m=d;l&&(x=Math.floor(u*48)/48,m=Math.floor(d*48)/48);let g=c(x*a,m*a),M=h(x*a+.3,m*a),S=g>.56?1:M>.58?2:g<.4?3:0,v=re(o[S]),C=nn(f,p)*.05;return{r:v[0]+C,g:v[1]+C,b:v[2]+C,h:S*.1+C}},{normalStrength:1})};return s("camoWood",[5925434,3818532,9075280,2237978],1,!1),s("camoDesert",[13152384,10521178,14733480,8021056],1,!1),s("camoCarrot",[15759898,13129228,3836452,16752704],1,!0),s("camoUrban",[9080466,5922402,13159632,2764338],1,!0),j}function Vi(n,t={}){let e=t.w||256,i=t.h||256,s=document.createElement("canvas");s.width=e,s.height=i;let r=s.getContext("2d");t.bg&&(r.fillStyle=t.bg,r.fillRect(0,0,e,i)),t.draw&&t.draw(r,e,i),r.fillStyle=t.color||"#fff",r.font=`${t.weight||900} ${t.size||180}px ${t.font||"system-ui, sans-serif"}`,r.textAlign="center",r.textBaseline="middle",t.stroke&&(r.lineWidth=t.strokeW||10,r.strokeStyle=t.stroke,r.strokeText(n,e/2,i/2+(t.dy||0))),r.fillText(n,e/2,i/2+(t.dy||0));let o=new bi(s);return o.colorSpace=rn,o.anisotropy=sh,o}function rh(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ze;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ap(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=Ap(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Ap(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new dn(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function it(n,t,e,i=1,s=[0,0,0]){let r=new de(n,t,e),o=r.attributes.uv,a=[[e,t,s[2],s[1]],[e,t,-s[2],s[1]],[n,e,s[0],-s[2]],[n,e,s[0],s[2]],[n,t,s[0],s[1]],[n,t,-s[0],s[1]]];for(let l=0;l<6;l++){let[c,h,u,d]=a[l];for(let f=0;f<4;f++){let p=l*4+f;o.setXY(p,(o.getX(p)*c+u)/i,(o.getY(p)*h+d)/i)}}return r}function ui(n,t,e){let i=n.attributes.uv;for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*t,i.getY(s)*e);return n}var oh=class{constructor(){this.buckets=new Map,this.colliders=[],this.noShadow=new Set}addGeo(t,e,i){let s=e.index?e.toNonIndexed():e.clone();i&&s.applyMatrix4(i);for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);s.attributes.uv||s.setAttribute("uv",new dn(new Float32Array(s.attributes.position.count*2),2)),this.buckets.has(t)||this.buckets.set(t,[]),this.buckets.get(t).push(s)}box(t,e,i,s,r,o,a,l={}){let c=it(r,o,a,l.uv||1,l.worldUV===!1?[0,0,0]:[e-r/2,i-o/2,s-a/2]),h=new jt;(l.rotY||l.rotX||l.rotZ)&&h.makeRotationFromEuler(new ai(l.rotX||0,l.rotY||0,l.rotZ||0)),h.setPosition(e,i,s),this.addGeo(t,c,h),l.collide!==!1&&this.col(e-r/2,i-o/2,s-a/2,e+r/2,i+o/2,s+a/2,l)}col(t,e,i,s,r,o,a={}){this.colliders.push({min:new U(Math.min(t,s),Math.min(e,r),Math.min(i,o)),max:new U(Math.max(t,s),Math.max(e,r),Math.max(i,o)),bullet:a.bullet!==!1,move:a.move!==!1,surf:a.surf||"concrete"})}bake(t){t.updateMatrixWorld(!0),t.traverse(e=>{e.isMesh&&this.addGeo(e.material,e.geometry,e.matrixWorld)})}finish(t){let e=[];for(let[i,s]of this.buckets){let r=rh(s,!1);r.computeBoundingSphere();let o=new N(r,i);o.castShadow=!i.userData.noCast,o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o),e.push(o)}return e}},US=new U;function Rp(n,t,e,i){let s=0,r=i,o=-1,a=0;for(let l=0;l<3;l++){let c=l===0?n.x:l===1?n.y:n.z,h=l===0?t.x:l===1?t.y:t.z,u=l===0?e.min.x:l===1?e.min.y:e.min.z,d=l===0?e.max.x:l===1?e.max.y:e.max.z;if(Math.abs(h)<1e-9){if(c<u||c>d)return null;continue}let f=(u-c)/h,p=(d-c)/h,x=-1;if(f>p){let m=f;f=p,p=m,x=1}if(f>s&&(s=f,o=l,a=x),p<r&&(r=p),s>r)return null}return{t:s,axis:o,sign:a}}function Ke(n,t=[],e={}){let i=new Set(t.filter(Boolean));n.updateMatrixWorld(!0);let s=new jt().copy(n.matrixWorld).invert(),r=new Map,o=[],a=l=>{for(let c of l.children)i.has(c)||(c.isMesh&&!c.isInstancedMesh&&o.push(c),a(c))};if(a(n),!(o.length<2)){for(let l of o){let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let h of Object.keys(c.attributes))["position","normal","uv"].includes(h)||c.deleteAttribute(h);c.attributes.uv||c.setAttribute("uv",new dn(new Float32Array(c.attributes.position.count*2),2)),c.applyMatrix4(new jt().multiplyMatrices(s,l.matrixWorld)),r.has(l.material)||r.set(l.material,[]),r.get(l.material).push(c)}for(let l of o)for(let c of[...l.children])o.includes(c)||l.parent.attach(c);for(let l of o)l.parent&&l.parent.remove(l);for(let[l,c]of r){let h=new N(rh(c,!1),l);h.castShadow=e.shadow!==!1,h.receiveShadow=!0,n.add(h)}}}var fs={town:{id:"town",name:"\u30D9\u30B8\u30BF\u30A6\u30F3",desc:`\u901A\u308A\u3092\u631F\u3093\u30602\u8ED2\u306E\u5BB6\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u83DC\u5712(A)\u3068\u6E29\u5BA4(B)\u3002`,map:{minX:-32,maxX:32,minZ:-27,maxZ:27},sites:{A:[-19,-12.5],B:[18.5,-12.5]},spawns:{south:[[-2.5,23],[2.5,23.5]],north:[[-2.5,-23],[2.5,-23.5]]},holds:{A:{def:[[-16.5,-15.5],[-21.5,-12],[-14.5,-10.8],[-19.5,-18]],att:[[-17.5,-10],[-20.5,-13.5]]},B:{def:[[17,-16],[21,-12.8],[15.8,-9.6],[19.5,-14.8]],att:[[18,-10],[19,-13.8]]}},mm:[[-6,-17.5,5.5,-9.5,"#c8b878"],[5.5,-17,10.5,-9.8,"#a89858"],[-5.5,9.5,6,17.5,"#78a0b8"],[-10.5,9.8,-5.5,17,"#5a8098"],[-26.5,-17.1,-22.5,-13.9,"#8a6a4a"],[20.5,18.9,24.5,22.1,"#8a6a4a"],[16,-19.8,21,-16.2,"#c8d8d0"],[-3.3,-2.85,6.3,-.35,"#e0a020"]],lobby:[-6,4.9],ground:"grass"},market:{id:"market",name:"\u9752\u679C\u5E02\u5834",desc:`\u72ED\u30443\u672C\u9053\u3002\u4E2D\u592E\u306F\u5C4B\u6839\u4ED8\u304D\u306E\u5E02\u5834\u30DB\u30FC\u30EB\u3002
2\u968E\u901A\u8DEF\u30FB\u534A\u5206\u9589\u307E\u3063\u305F\u30B7\u30E3\u30C3\u30BF\u30FC\uFF08\u3057\u3083\u304C\u3080\u3068\u304F\u3050\u308C\u308B\uFF09\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u8CC7\u6750\u7F6E\u304D\u5834(A)\u3068\u7A4D\u307F\u4E0B\u308D\u3057\u5834(B)\u3002`,map:{minX:-23.4,maxX:23.4,minZ:-21.4,maxZ:21.4},sites:{A:[-17.5,-11.5],B:[15,-12]},spawns:{south:[[-2.5,18.5],[2.5,19]],north:[[-2.5,-18.5],[2.5,-19]]},holds:{A:{def:[[-14,-13],[-20.5,-9],[-16.5,-4.5],[-21,-16.5]],att:[[-13,-8.5],[-19,-4]]},B:{def:[[17.5,-14.5],[11.5,-12.5],[13.5,-8.5],[20.8,-10]],att:[[11.5,-9],[16,-8]]}},mm:[[-9,-7,9,7,"#b8a888"],[-21,-2,-14.5,6,"#7a9a7a"],[19,-17,23.6,8,"#9a9a9a"],[11.8,-6.8,17.2,-4.4,"#e8e8e4"],[11.8,.6,17.2,3,"#8ab84a"],[-14.6,10.4,-9.4,12.8,"#e8e0d0"]],lobby:[2.5,9.8],ground:"concrete"},station:{id:"station",name:"\u8CA8\u7269\u99C5",desc:`\u4E2D\u592E\u306E\u8CA8\u7269\u5217\u8ECA\u304C\u30DE\u30C3\u30D7\u3092\u5357\u5317\u306B\u5206\u3051\u308B\u3002
\u8ECA\u4E21\u306E\u3059\u304D\u9593\u30FB\u6B69\u9053\u6A4B\u30FB\u4F0F\u305B\u3066\u8ECA\u4E21\u306E\u4E0B\u3092\u304F\u3050\u308B\u9053\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u99C5\u820E\u306E\u5F85\u5408\u5BA4(A)\u3068\u30B3\u30F3\u30C6\u30CA\u7F6E\u304D\u5834(B)\u3002`,map:{minX:-23.4,maxX:23.4,minZ:-20.4,maxZ:20.4},sites:{A:[-19.5,-10],B:[16,-14.6]},spawns:{south:[[-2.5,17.5],[2.5,18]],north:[[-2.5,-17.5],[2.5,-18]]},holds:{A:{def:[[-15.5,-12.5],[-21.5,-7],[-12,-8.5],[-22,-13]],att:[[-15,-7.5],[-20.5,-11.5]]},B:{def:[[19,-16.5],[11.5,-12],[18.6,-9],[14,-8]],att:[[12.5,-12.5],[17.5,-10]]}},mm:[[-23.6,-14,-13,-5.4,"#c8b878"],[-19.5,-1.4,-12,1.4,"#2a5a9a"],[-11.2,-1.4,-4.2,1.4,"#9a3a2a"],[-2.8,-1.4,5.4,1.4,"#3a6a3a"],[6.8,-1.4,14,1.4,"#8a6a3a"],[16,-1.22,22,1.22,"#2a6aa0"],[15.9,-6.5,17.7,6.5,"#aaaaaa"],[10,-17.7,16,-15.3,"#b04a2a"],[19.8,-14.5,22.2,-8.5,"#3a5a9a"],[7.8,-12,10.2,-6,"#c89a2a"],[-20,13.5,-15,17.5,"#78a0b8"]],lobby:[2,11.8],ground:"concrete"},port:{id:"port",name:"\u51FA\u8377\u6E2F",desc:`\u30B3\u30F3\u30C6\u30CA\u304C\u7D30\u3044\u901A\u8DEF\u3092\u3064\u304F\u308B\u6E2F\u3002
\u4E21\u7AEF\u304C\u958B\u3044\u305F\u30B3\u30F3\u30C6\u30CA\u306F\u4E2D\u3092\u901A\u308A\u629C\u3051\u3089\u308C\u308B\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u4E8B\u52D9\u6240\u6A2A(A)\u3068\u5CB8\u58C1(B)\u3002`,map:{minX:-23.4,maxX:23,minZ:-20.4,maxZ:20.4},sites:{A:[-11,-12],B:[16.5,-12.4]},spawns:{south:[[-2.5,18.2],[2.5,18.6]],north:[[-2.5,-18.2],[2.5,-18.6]]},holds:{A:{def:[[-13.6,-14.8],[-8,-9],[-14.5,-7.2],[-9,-17.5]],att:[[-14,-9.5],[-8.5,-14]]},B:{def:[[18.5,-15],[13.5,-12.8],[20.5,-9],[14,-8.5]],att:[[13,-14],[17.5,-9.6]]}},mm:[[-23.6,-16,-16,-7,"#78a0b8"],[-17.5,-5.82,-11.5,-3.38,"#b04a2a"],[-6,-6.42,0,-3.98,"#2a7a5a"],[5.5,-6.02,11.5,-3.58,"#3a5a9a"],[-13,3.78,-7,6.22,"#c89a2a"],[-1.5,3.38,4.5,5.82,"#2a6aa0"],[10,3.98,16,6.42,"#9a3a2a"],[-20.72,3.5,-18.28,9.5,"#7a7a7a"],[17.78,-10,20.22,-4,"#b04a2a"],[-18,15,-15,18,"#7aa07a"]],lobby:[-3,11.5],ground:"concrete"},villa:{id:"villa",name:"\u91CE\u83DC\u5FA1\u6BBF",desc:`\u4E18\u306E\u4E0A\u306E\u8C6A\u90B8\u3002\u4E2D\u592E\u306E\u30D7\u30FC\u30EB\u306F\u898B\u901A\u3057\u304C\u9577\u3044\u3002
\u8C6A\u90B8\u306E\u4E2D\u30FB\u30D7\u30FC\u30EB\u30FB\u30D0\u30B9\u30B1\u30B3\u30FC\u30C8\u306E3\u672C\u9053\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u5317\u306E\u5EAD(A)\u3068\u30D0\u30B9\u30B1\u30B3\u30FC\u30C8(B)\u3002`,map:{minX:-23.4,maxX:22.4,minZ:-20.4,maxZ:20.4},sites:{A:[-16.5,-14],B:[16.5,-13]},spawns:{south:[[-2.5,18.2],[2.5,18.6]],north:[[-2.5,-18.4],[2.5,-18.8]]},holds:{A:{def:[[-12,-15],[-19.5,-12.5],[-14.2,-9.2],[-21.8,-18]],att:[[-14.2,-10],[-19,-10]]},B:{def:[[19,-18],[11,-15],[20.5,-9],[13.5,-8.2]],att:[[12.8,-9],[17.5,-8]]}},mm:[[-23.6,-8,-11,6,"#e8e0d0"],[-23.6,-20.6,-11,-8,"#c8b878"],[-5.6,-5.6,4.6,.6,"#3aa8d8"],[-3,-15,3,-10.6,"#a86a4a"],[8,-1,14,6,"#c8c0b0"],[9,-20.6,22.6,-6,"#2a5a7a"],[-1.4,11.4,1.4,14.2,"#9aa0a4"]],lobby:[-4.5,9],ground:"grass"}},he={},Ye={A:new U,B:new U},Ca={south:[],north:[]},ln=fs.town;function Hp(n){ln=fs[n]||fs.town,Object.assign(he,ln.map);for(let t of["A","B"])Ye[t].set(ln.sites[t][0],0,ln.sites[t][1]);for(let t of["south","north"])Ca[t]=ln.spawns[t].map(([e,i])=>new U(e,0,i));return ln}Hp("town");var oe=n=>new ee(n),_={};function YM(){let n=(i,s)=>{let r=i.map.clone(),o=i.normalMap.clone();return r.needsUpdate=o.needsUpdate=!0,s&&(r.repeat.set(s,s),o.repeat.set(s,s)),[r,o]},[t,e]=[j.grass.map,j.grass.normalMap];_.grass=oe({map:j.grass.map,normalMap:j.grass.normalMap,roughness:.95,color:15269856}),_.asphalt=oe({map:j.asphalt.map,normalMap:j.asphalt.normalMap,roughness:.9}),_.concrete=oe({map:j.concrete.map,normalMap:j.concrete.normalMap,roughness:.85}),_.brick=oe({map:j.brick.map,normalMap:j.brick.normalMap,roughness:.85}),_.sidingY=oe({map:j.siding.map,normalMap:j.siding.normalMap,color:15785114,roughness:.75}),_.sidingB=oe({map:j.siding.map,normalMap:j.siding.normalMap,color:10274012,roughness:.75}),_.sidingG=oe({map:j.siding.map,normalMap:j.siding.normalMap,color:12109984,roughness:.75}),_.plaster=oe({map:j.plaster.map,normalMap:j.plaster.normalMap,color:15920352,roughness:.95}),_.plasterG=oe({map:j.plaster.map,normalMap:j.plaster.normalMap,color:14214352,roughness:.95}),_.floor=oe({map:j.floor.map,normalMap:j.floor.normalMap,roughness:.55}),_.roof=oe({map:j.roof.map,normalMap:j.roof.normalMap,roughness:.85,color:11561562}),_.roof2=oe({map:j.roof.map,normalMap:j.roof.normalMap,roughness:.85,color:7371400}),_.wood=oe({map:j.wood.map,normalMap:j.wood.normalMap,roughness:.8}),_.paintwood=oe({map:j.paintwood.map,normalMap:j.paintwood.normalMap,roughness:.7}),_.dirt=oe({map:j.dirt.map,normalMap:j.dirt.normalMap,roughness:1}),_.tile=oe({map:j.tile.map,normalMap:j.tile.normalMap,roughness:.3}),_.carpetR=oe({map:j.carpet.map,normalMap:j.carpet.normalMap,color:10502208,roughness:1}),_.carpetB=oe({map:j.carpet.map,normalMap:j.carpet.normalMap,color:4217482,roughness:1}),_.trim=oe({color:16052970,roughness:.5,map:j.plaster.map}),_.darkTrim=oe({color:3815994,roughness:.6}),_.metal=oe({map:j.metal.map,normalMap:j.metal.normalMap,color:10133670,metalness:.7,roughness:.4}),_.rust=oe({map:j.rust.map,normalMap:j.rust.normalMap,metalness:.4,roughness:.8}),_.chrome=oe({color:14540253,metalness:1,roughness:.15}),_.glass=oe({color:1714740,metalness:.9,roughness:.05,transparent:!0,opacity:.55}),_.glass.userData.noCast=!0,_.tire=oe({color:1710618,roughness:.9}),_.busYellow=oe({map:j.metal.map,normalMap:j.metal.normalMap,color:15905306,metalness:.3,roughness:.45}),_.carRed=oe({map:j.metal.map,color:11017762,metalness:.5,roughness:.3}),_.carBlue=oe({map:j.metal.map,color:2775712,metalness:.5,roughness:.3}),_.carWhite=oe({map:j.metal.map,color:15263972,metalness:.4,roughness:.35}),_.black=oe({color:1381653,roughness:.7}),_.bark=oe({map:j.bark.map,normalMap:j.bark.normalMap,roughness:1}),_.leaf=oe({map:j.leaf.map,normalMap:j.leaf.normalMap,roughness:.9,color:14221264}),_.hedge=oe({map:j.hedge.map,normalMap:j.hedge.normalMap,roughness:1}),_.fabricG=oe({map:j.carpet.map,normalMap:j.carpet.normalMap,color:5929562,roughness:1}),_.fabricO=oe({map:j.carpet.map,normalMap:j.carpet.normalMap,color:12615744,roughness:1}),_.white=oe({color:15790320,roughness:.4}),_.steel=oe({color:12106944,metalness:.9,roughness:.3}),_.lampGlow=new vi({color:16773824}),_.screen=oe({color:657936,metalness:.5,roughness:.1}),_.hay=oe({map:j.grass.map,normalMap:j.grass.normalMap,color:15782016,roughness:1}),_.redPaint=oe({color:11542560,roughness:.5,map:j.metal.map}),_.greenPaint=oe({color:2779706,roughness:.6,map:j.metal.map}),_.curtain=oe({map:j.carpet.map,normalMap:j.carpet.normalMap,color:15260864,roughness:.9,side:an}),_.lineW=oe({color:15790312,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),_.lineY=oe({color:15777824,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),_.paint1=oe({map:Vi("",{w:128,h:128,draw:i=>{let s=i.createLinearGradient(0,0,0,128);s.addColorStop(0,"#6ab0e0"),s.addColorStop(1,"#f0e0a0"),i.fillStyle=s,i.fillRect(0,0,128,128),i.fillStyle="#3a7a3a",i.beginPath(),i.moveTo(0,100),i.quadraticCurveTo(64,50,128,95),i.lineTo(128,128),i.lineTo(0,128),i.fill(),i.fillStyle="#f8f0a0",i.beginPath(),i.arc(95,35,14,0,7),i.fill()}}),roughness:.6}),_.paint2=oe({map:Vi("",{w:128,h:128,draw:i=>{i.fillStyle="#2a2a3a",i.fillRect(0,0,128,128),i.fillStyle="#e86020",i.beginPath(),i.ellipse(64,70,20,44,0,0,7),i.fill(),i.fillStyle="#3a8a2a",i.fillRect(56,14,16,18)}}),roughness:.6})}var w;function Nn(n,t,e,i,s,r,o,a,l=[],c=.22){let h=Pd(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[x,m]of p){if(m-x<.01)continue;let g=(x+m)/2,M=m-x;w.box(o,f,g,n+r*c/4,d,M,c/2,{uv:2.5,collide:!1}),w.box(a,f,g,n-r*c/4,d,M,c/2,{uv:2.5,collide:!1}),w.col(u.a,x,n-c/2,u.b,m,n+c/2,{surf:"wood"})}u.op&&$M(n,u.a,u.b,u.op,r,c)}}function Wn(n,t,e,i,s,r,o,a,l=[],c=.22){let h=Pd(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[x,m]of p){if(m-x<.01)continue;let g=(x+m)/2,M=m-x;w.box(o,n+r*c/4,g,f,c/2,M,d,{uv:2.5,collide:!1}),w.box(a,n-r*c/4,g,f,c/2,M,d,{uv:2.5,collide:!1}),w.col(n-c/2,x,u.a,n+c/2,m,u.b,{surf:"wood"})}u.op&&ZM(n,u.a,u.b,u.op,r,c)}}function Pd(n,t,e){let i=[],s=n,r=[...e].sort((o,a)=>o.c-a.c);for(let o of r){let a=o.c-o.w/2,l=o.c+o.w/2;a>s&&i.push({a:s,b:a}),i.push({a,b:l,op:o}),s=l}return t>s&&i.push({a:s,b:t}),i}function $M(n,t,e,i,s,r){let a=r+.06;if(w.box(_.trim,t-.09/2+0,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),w.box(_.trim,e+.09/2,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),w.box(_.trim,(t+e)/2,i.t+.09/2,n,e-t+.09*2,.09,a,{collide:!1}),i.b>.3&&w.box(_.trim,(t+e)/2,i.b-.03,n+s*.06,e-t+.2,.06,a+.1,{collide:!1}),i.win&&(w.box(_.trim,(t+e)/2,(i.b+i.t)/2,n+s*.02,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])kp(l<0?t-.05:e+.05,i.t+.05,n-s*(r/2+.06),l,!0)}function ZM(n,t,e,i,s,r){let a=r+.06;if(w.box(_.trim,n,(i.b+i.t)/2,t-.09/2,a,i.t-i.b,.09,{collide:!1}),w.box(_.trim,n,(i.b+i.t)/2,e+.09/2,a,i.t-i.b,.09,{collide:!1}),w.box(_.trim,n,i.t+.09/2,(t+e)/2,a,.09,e-t+.09*2,{collide:!1}),i.b>.3&&w.box(_.trim,n+s*.06,i.b-.03,(t+e)/2,a+.1,.06,e-t+.2,{collide:!1}),i.win&&(w.box(_.trim,n+s*.02,(i.b+i.t)/2,(t+e)/2,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])kp(n-s*(r/2+.06),i.t+.05,l<0?t-.05:e+.05,l,!1)}var lo;function kp(n,t,e,i,s){if(!_.curtain)return;if(!lo){lo=new He(.5,1.6,12,1);let o=lo.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a);o.setZ(a,Math.sin(l*40)*.035)}lo.computeVertexNormals(),lo.translate(0,-.8,0)}let r=new jt().makeRotationY(s?0:Math.PI/2);r.setPosition(s?n+i*.2:n,t,s?e:e+i*.2),w.addGeo(_.curtain,lo,r),w.box(_.darkTrim,n,t+.02,e,s?.6:.03,.03,s?.03:.6,{collide:!1})}function JM(n,t,e,i,s,r,o,a){let c=(i-e)/2+.45,h=(e+i)/2,u=Math.atan2(r,(i-e)/2),d=Math.hypot(c,r*c/((i-e)/2));for(let f of[-1,1]){let p=it(t-n+.9,.14,d,2),x=new jt().makeRotationX(f*u);x.setPosition((n+t)/2,s+r/2+.05-.45*Math.tan(u)/2+.02,h+f*(d/2)*Math.cos(u)),w.addGeo(o,p,x);let m=new xt(.07,.07,t-n+.45*2,8);m.rotateZ(Math.PI/2),w.addGeo(_.trim,m,new jt().setPosition((n+t)/2,s-.45*Math.tan(u)+.02,h+f*c))}w.box(o,(n+t)/2,s+r+.1,h,t-n+.45*2,.12,.3,{collide:!1});for(let f of[n,t]){let p=new ti;p.moveTo(e-h,0),p.lineTo(i-h,0),p.lineTo(0,r),p.closePath();let x=new li(p,{depth:.22,bevelEnabled:!1});ui(x,.4,.4);let m=new jt().makeRotationY(Math.PI/2);m.setPosition(f-.11+0,s,h),w.addGeo(a,x,m)}w.box(_.plaster,(n+t)/2,s+.06,h,t-n,.12,i-e,{uv:3,bullet:!0})}function vd(n,t,e,i){let s=new It,r=(a,l,c,h,u)=>{let d=new N(a,l);return d.position.set(c,h,u),s.add(d),d};r(it(2.1,.42,.9,1),i,0,.25,0),r(it(2.1,.6,.22,1),i,0,.7,-.36),r(it(.22,.32,.9,1),i,-1,.6,0),r(it(.22,.32,.9,1),i,1,.6,0);for(let a of[-.48,.48]){let l=r(new as(.12,.7,4,10),i,a,.52,.08);l.rotation.z=Math.PI/2,l.scale.set(1,1,2.6)}for(let a of[-.5,.5]){let l=r(new de(.35,.3,.12),_.fabricO,a,.72,-.2);l.rotation.x=-.25}for(let[a,l]of[[-.95,.38],[.95,.38],[-.95,-.38],[.95,-.38]])r(new xt(.03,.02,.08,6),_.wood,a,.03,l);s.position.set(n,.15,t),s.rotation.y=e,w.bake(s);let o=Math.abs(Math.cos(e))>.5?[1.1,.48]:[.48,1.1];w.col(n-o[0],.15,t-o[1],n+o[0],1,t+o[1],{surf:"carpet"})}function Bs(n,t,e,i,s,r=_.wood){w.box(r,n,.15+s-.03,t,e,.06,i,{collide:!1});for(let o of[-1,1])for(let a of[-1,1])w.box(_.wood,n+o*(e/2-.08),.15+(s-.06)/2,t+a*(i/2-.08),.07,s-.06,.07,{collide:!1});w.col(n-e/2,.15,t-i/2,n+e/2,.15+s,t+i/2,{bullet:!1})}function Ri(n,t,e){let i=new It,s=(r,o,a,l,c)=>{let h=new N(r,o);return h.position.set(a,l,c),i.add(h),h};s(it(.45,.05,.45,1),_.wood,0,.46,0);for(let r of[-1,1])for(let o of[-1,1])s(it(.04,.46,.04,1),_.wood,r*.19,.23,o*.19);for(let r of[-1,1])s(it(.04,.5,.04,1),_.wood,r*.19,.73,-.2);for(let r=0;r<3;r++)s(it(.4,.05,.03,1),_.wood,0,.62+r*.13,-.2);i.position.set(n,.15,t),i.rotation.y=e,w.bake(i)}function Ra(n,t,e,i=1.2,s=1.9){let r=new It,o=(l,c,h,u,d)=>{let f=new N(l,c);return f.position.set(h,u,d),r.add(f),f};o(it(i,s,.04,1),_.wood,0,s/2,-.17);for(let l of[-1,1])o(it(.04,s,.36,1),_.wood,l*i/2,s/2,0);for(let l=0;l<5;l++){let c=.05+l*(s-.1)/4;if(o(it(i,.04,.36,1),_.wood,0,c,0),l<4){let h=-i/2+.08;for(;h<i/2-.12;){let u=.04+Ut()*.05,d=.22+Ut()*.14,f=[9054762,2771578,3828282,13148240,5913194,14209216][Math.floor(Ut()*6)],p=new ee({color:f,roughness:.8}),x=o(it(u,d,.24,1),Xt(f),h+u/2,c+.02+d/2,.02);Ut()<.15&&(x.rotation.z=.2),h+=u+.005}}}r.position.set(n,.15,t),r.rotation.y=e,w.bake(r);let a=Math.abs(Math.cos(e))>.5?[i/2,.2]:[.2,i/2];w.col(n-a[0],.15,t-a[1],n+a[0],.15+s,t+a[1])}var gd={};function Xt(n,t={}){let e=n+JSON.stringify(t);return gd[e]||(gd[e]=oe({color:n,roughness:.75,...t})),gd[e]}var ah={};function KM(n){if(ah[n])return ah[n];let t=512,e=768,i=document.createElement("canvas");i.width=t,i.height=e;let s=i.getContext("2d"),r={office:["#6f8fa8","#2a3e52","#c8d6e0"],brick:["#9a5a44","#26303a","#e8e2d6"],concrete:["#b8b4ac","#2e353c","#8a8680"],apt:["#e4dccb","#3a4650","#ffffff"]}[n];s.fillStyle=r[0],s.fillRect(0,0,t,e);for(let c=0;c<400;c++)s.fillStyle=`rgba(${Ut()<.5?"0,0,0":"255,255,255"},${.03+Ut()*.04})`,s.fillRect(Ut()*t,Ut()*e,4+Ut()*40,4+Ut()*40);if(n==="brick")for(let c=0;c<e;c+=8){s.fillStyle="rgba(230,220,200,0.35)",s.fillRect(0,c,t,1.5);for(let h=c/8%2*9;h<t;h+=18)s.fillRect(h,c,1.5,8)}let o=t/4,a=e/4;for(let c=0;c<4;c++)for(let h=0;h<4;h++){let u=h*o,d=c*a,f=Ut()<.18;if(n==="office")s.fillStyle=f?"#e8d8a0":`rgb(${40+Ut()*25},${60+Ut()*25},${80+Ut()*30})`,s.fillRect(u+4,d+20,o-8,a-26),s.fillStyle="rgba(255,255,255,0.12)",s.beginPath(),s.moveTo(u+4,d+a-6),s.lineTo(u+o*.6,d+20),s.lineTo(u+o*.8,d+20),s.lineTo(u+o*.2,d+a-6),s.fill(),s.fillStyle=r[2],s.fillRect(u+o/2-2,d+20,4,a-26),s.fillRect(u,d+14,o,8);else{let p=n==="concrete"?o-18:o*.55,x=a*(n==="concrete"?.42:.55),m=u+(o-p)/2,g=d+a*.22;s.fillStyle=r[2],s.fillRect(m-5,g-5,p+10,x+10),s.fillStyle=f?"#f0dca0":r[1],s.fillRect(m,g,p,x),s.fillStyle="rgba(255,255,255,0.15)",s.fillRect(m,g,p*.35,x),s.fillStyle=r[2],s.fillRect(m+p/2-2,g,4,x),Ut()<.5&&(s.fillStyle=`rgba(${200+Ut()*55},${200+Ut()*55},180,0.85)`,s.fillRect(m,g,p*(.2+Ut()*.3),x)),n==="apt"&&(s.fillStyle="#cfc6b4",s.fillRect(u+6,d+a*.8,o-12,a*.18),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(u+6,d+a*.8,o-12,3)),n==="concrete"&&(s.fillStyle="rgba(0,0,0,0.18)",s.fillRect(u,d+a*.75,o,6)),Ut()<.15&&(s.fillStyle="#d8d8d4",s.fillRect(u+o*.78,g+x*.4,o*.16,x*.4))}}let l=new bi(i);return l.colorSpace=rn,l.wrapS=l.wrapT=ss,l.anisotropy=4,ah[n]=oe({map:l,roughness:n==="office"?.35:.85,metalness:n==="office"?.25:0}),ah[n]}function jM(n,t,e){let i=new de(n,t,e),s=i.attributes.uv,r=[e,e,n,n,n,n];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let l=o*4+a;s.setXY(l,s.getX(l)*r[o]/8,s.getY(l)*t/12+(12-t%12)/12)}return i}function xh(n,t,e,i,s,r,o,a){let l=new It;l.position.set(t,0,e),l.rotation.y=i;let c=new N(jM(s,r,o),KM(a));c.position.y=r/2,l.add(c);let h=new N(it(s+.3,.5,o+.3,2),_.concrete);h.position.y=r+.1,l.add(h);let u=new N(it(s-.3,.1,o-.3,2),Xt(6974054));u.position.y=r+.3,l.add(u);let d=new N(it(2.6,2.2,2.6,2),_.concrete);if(d.position.set(-s*.2,r+1.4,o*.1),l.add(d),Ut()<.7){let f=new N(new xt(.9,.9,1.6,12),Xt(10134696,{metalness:.4,roughness:.5}));f.position.set(s*.22,r+1.9,-o*.15),l.add(f);for(let p of[-.6,.6])for(let x of[-.6,.6]){let m=new N(it(.12,1,.12),Xt(5592405));m.position.set(s*.22+p,r+.7,-o*.15+x),l.add(m)}}for(let f=0;f<3;f++){let p=new N(it(1,.8,.7,1),Xt(13684940));p.position.set((Ut()-.5)*s*.7,r+.75,(Ut()-.5)*o*.6),l.add(p)}if(Ut()<.5){let f=new N(new xt(.04,.06,4,6),_.metal);f.position.set(-s*.2,r+4.5,o*.1),l.add(f)}if(r>9){let f=new N(it(s+.05,.6,o+.05,2),Xt([2775610,9054762,2767466][Math.floor(Ut()*3)]));f.position.y=3.2,l.add(f)}n.add(l)}function bd(n,t,e,i){let o=e-i*.445;w.box(Xt(15261904),(n+t)/2,.15+.92/2-.02,o,t-n,.92-.04,.65-.02,{surf:"wood"}),w.box(_.tile,(n+t)/2,.15+.92,o,t-n+.04,.04,.65+.04,{collide:!1,uv:.6});for(let h=n+.5;h<t;h+=.6)w.box(_.darkTrim,h,.15+.45,o-i*(.65/2),.02,.7,.01,{collide:!1});for(let h=n+.25;h<t;h+=.6)w.box(_.steel,h,.15+.72,o-i*(.65/2+.02),.12,.02,.03,{collide:!1});w.box(_.steel,n+1,.15+.92+.01,o,.6,.03,.42,{collide:!1});let a=new N(new Je(.12,.02,6,12,Math.PI),_.chrome);a.position.set(n+1,.15+.92+.03,o+i*.2),a.rotation.y=Math.PI/2,w.bake(a);let l=t+.45;w.box(_.white,l,.15+.95,o,.8,1.9,.72,{}),w.box(_.steel,l-.3,.15+1.3,o-i*.37,.03,.5,.04,{collide:!1}),w.box(_.darkTrim,l,.15+1.25,o-i*.365,.8,.012,.01,{collide:!1}),w.box(Xt(15261904),(n+t)/2,.15+2.1,e-i*.3,t-n,.7,.36,{collide:!1});for(let[h,u]of[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]]){let d=new N(new Je(.08,.012,6,16),_.black);d.rotation.x=Math.PI/2,d.position.set(t-.6+h,.15+.92+.03,o+u),w.bake(d)}let c=new N(new xt(.13,.12,.16,16,1,!1),_.steel);c.position.set(t-.75,.15+.92+.1,o-.12),w.bake(c)}function Ed(n,t,e){let i=new It,s=(o,a,l,c,h)=>{let u=new N(o,a);return u.position.set(l,c,h),i.add(u),u};s(it(1.6,.5,.45,1),_.wood,0,.25,0),s(it(1.3,.75,.06,1),_.black,0,.95,0),s(new He(1.24,.69),_.screen,0,.95,.031),s(it(.3,.06,.2,1),_.black,0,.53,0),i.position.set(n,.15,t),i.rotation.y=e,w.bake(i);let r=Math.abs(Math.cos(e))>.5?[.8,.25]:[.25,.8];w.col(n-r[0],.15,t-r[1],n+r[0],.65,t+r[1])}function Sa(n,t,e,i,s){let r=new It,o=new N(it(.9,.7,.05,1),_.wood);r.add(o);let a=new N(new He(.78,.58),s);a.position.z=.03,r.add(a),r.position.set(n,t,e),r.rotation.y=i,w.bake(r)}function Sd(n,t,e,i,s){w.box(s,n,.155,t,e,.012,i,{collide:!1,uv:1})}function fh(n,t){let e=new It,i=new N(new xt(.15,.18,.04,16),_.black);i.position.y=.02,e.add(i);let s=new N(new xt(.015,.015,1.5,6),_.chrome);s.position.y=.77,e.add(s);let r=new N(new xt(.16,.24,.3,16,1,!0),Xt(15786176,{side:an,emissive:4206624}));r.position.y=1.55,e.add(r),e.position.set(n,.15,t),w.bake(e)}function wd(n,t,e){let i=new It,s=(o,a,l,c,h)=>{let u=new N(o,a);return u.position.set(l,c,h),i.add(u),u};s(it(1.5,.3,2,1),_.wood,0,.2,0),s(it(1.45,.22,1.95,1),_.white,0,.45,0),s(it(1.5,.08,1.4,1),_.carpetB,0,.58,.28),s(it(1.5,.9,.08,1),_.wood,0,.55,-1);for(let o of[-.35,.35]){let a=s(new as(.1,.3,4,8),_.white,o,.62,-.75);a.rotation.z=Math.PI/2,a.scale.set(1,1,1.8)}i.position.set(n,.15,t),i.rotation.y=e,w.bake(i);let r=Math.abs(Math.cos(e))>.5?[.75,1.05]:[1.05,.75];w.col(n-r[0],.15,t-r[1],n+r[0],.8,t+r[1],{bullet:!0})}function Cp(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.18,o=2.9,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;w.box(_.concrete,(t+e)/2,.08,(i+s)/2,e-t+.3,.16,s-i+.3,{collide:!1}),w.box(_.floor,(t+e)/2,r-.01,(i+s)/2,e-t-.1,.02,s-i-.1,{collide:!1,uv:3}),w.col(t,0,i,e,r,s,{bullet:!0,surf:"wood"});let h=(x,m=1.4)=>({c:x,w:m,b:r+.95,t:r+2.15,win:!0}),u=(x,m=1.4)=>({c:x,w:m,b:r,t:r+2.25}),d=n.siding,f=n.inner||_.plaster;Nn(a,t,e,r,o,c,d,f,n.frontOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),Nn(l,t,e,r,o,-c,d,f,n.backOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),Wn(t,i+.11,s-.11,r,o,-1,d,f,n.leftOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),Wn(e,i+.11,s-.11,r,o,1,d,f,n.rightOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),n.partX!==void 0&&Wn(n.partX,n.partZ0,n.partZ1,r,o,1,_.plasterG,f,[u(n.partDoor,1.4)],.14),JM(t,e,i,s,r+o,2,n.roof,d);let p=a+c*.9;w.box(_.concrete,n.doorX,.1,p,2.6,.2,1.6,{surf:"concrete"}),w.box(_.concrete,n.doorX,.05,p+c*1,1.8,.1,.5,{surf:"concrete"}),w.box(n.roof,n.doorX,r+2.55,p,3,.1,1.9,{collide:!1});for(let x of[-1,1]){let m=new N(new xt(.07,.08,2.45,10),_.trim);m.position.set(n.doorX+x*1.3,.2+1.22,p+c*.75),w.bake(m),w.col(n.doorX+x*1.3-.08,0,p+c*.75-.08,n.doorX+x*1.3+.08,2.7,p+c*.75+.08,{surf:"wood"})}for(let x of[-1,1]){let m=new N(new de(.14,.24,.14),_.lampGlow);m.position.set(n.doorX+x*.95,r+1.9,a+c*.15),w.bake(m)}w.box(_.brick,n.chimX,r+o+1.75,(i+s)/2+1.2,.8,2.9,.8,{collide:!1,uv:1.2}),w.box(_.concrete,n.chimX,r+o+3.25,(i+s)/2+1.2,.95,.12,.95,{collide:!1});for(let x of[i,s])w.box(_.brick,(t+e)/2,.45,x+(x===i?-.13:.13),e-t+.06,.55,.05,{collide:!1,uv:1.2});for(let x of[t,e])w.box(_.brick,x+(x===t?-.13:.13),.45,(i+s)/2,.05,.55,s-i+.06,{collide:!1,uv:1.2})}function Pp(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.05,o=2.7,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;w.box(_.concrete,(t+e)/2,.025,(i+s)/2,e-t,.05,s-i,{collide:!1,uv:3}),Nn(a,t,e,r,o,c,n.siding,_.plaster,[{c:(t+e)/2,w:e-t-1,b:r,t:r+2.2}]),w.box(_.white,(t+e)/2,r+2.35,a-c*.05,e-t-1,.3,.06,{collide:!1}),Nn(l,t,e,r,o,-c,n.siding,_.plaster,[{c:(t+e)/2,w:1.2,b:r+1.1,t:r+2,win:!0}]);let h=n.outerX;Wn(h,i+.11,s-.11,r,o,h>(t+e)/2?1:-1,n.siding,_.plaster,[{c:(i+s)/2+1.5,w:1.3,b:r,t:r+2.2}]),w.box(n.roof,(t+e)/2,r+o+.1,(i+s)/2,e-t+.6,.2,s-i+.6,{collide:!1,uv:2}),w.box(_.plaster,(t+e)/2,r+o-.03,(i+s)/2,e-t,.06,s-i,{collide:!1,uv:3}),w.col(t,r+o-.05,i,e,r+o+.2,s);let u=l-c*-.5,d=l+(n.frontNeg?.5:-.5);w.box(_.wood,(t+e)/2,.9,d,2.4,.08,.7,{collide:!1});for(let p of[-1,1])w.box(_.wood,(t+e)/2+p*1.1,.45,d,.08,.86,.6,{collide:!1});w.col((t+e)/2-1.2,0,d-.35,(t+e)/2+1.2,.95,d+.35,{bullet:!1});for(let p=0;p<6;p++)w.box(Xt([12595248,3170496,4210752][p%3]),(t+e)/2-.9+p*.35,.98,d,.18,.08,.12,{collide:!1});let f=Xt(11569754,{map:j.wood.map});for(let[p,x,m]of[[.9,1.5,.6],[.9,2.2,.5],[.95,1.8,.45]]){let g=(n.frontNeg,t+p+.2),M=(i+s)/2+(n.frontNeg?-1:1)*(x-2);w.box(f,g,m/2+(x===1.8?.6:.05),M,m,m,m,{surf:"wood"})}}function wa(n,t,e,i,s=.38,r=.26){let o=new N(new Je(s-.1,.11,10,20),_.tire);o.position.set(t,e,i),n.add(o);let a=new N(new xt(s-.13,s-.13,r*.8,16),_.chrome);a.rotation.x=Math.PI/2,a.position.set(t,e,i),n.add(a);let l=new N(new xt(.08,.08,r+.02,8),_.black);l.rotation.x=Math.PI/2,l.position.set(t,e,i),n.add(l)}function QM(n,t,e){let i=new It,s=(h,u,d,f,p)=>{let x=new N(h,u);return x.position.set(d,f,p),i.add(x),x},r=9.6,o=2.5,a=2.6;s(it(r,a-.6,o,1.5),_.busYellow,0,.6+(a-.6)/2,0),s(it(r-.1,.25,o-.1,1),_.busYellow,0,a+.12,0);for(let h of[-1,1]){s(it(r-2.2,.75,.02),_.glass,-.5,2,h*(o/2+.005));for(let u=0;u<9;u++)s(it(.08,.8,.04),_.busYellow,-4.1+u*.95,2,h*(o/2+.01));s(it(r,.06,.04),_.black,0,1.45,h*(o/2+.02)),s(it(r,.06,.04),_.black,0,1.15,h*(o/2+.02))}s(it(.04,1,o-.3),_.glass,r/2+.01,2,0),s(it(.04,.8,o-.3),_.glass,-r/2-.01,2,0),s(it(.25,.3,o+.1),_.black,r/2+.1,.65,0),s(it(.25,.3,o+.1),_.black,-r/2-.1,.65,0);for(let h of[-1,1])s(new xt(.12,.12,.05,12),_.lampGlow,r/2+.03,1,h*.9).rotation.z=Math.PI/2,s(new xt(.1,.1,.05,12),_.redPaint,-r/2-.03,1,h*.9).rotation.z=Math.PI/2;s(it(.6,.4,.04),_.black,r/2-.1,2.75,.8),s(it(1.6,.25,.03),_.black,1,1.3,o/2+.03);for(let h of[-3,3.2])for(let u of[-1,1])wa(i,h,.48,u*(o/2-.12),.48,.3);s(it(r-.4,.3,o-.3),_.black,0,.45,0),i.position.set(n,0,t),i.rotation.y=e,w.bake(i);let l=Math.abs(Math.cos(e))>.5?r/2:o/2,c=Math.abs(Math.cos(e))>.5?o/2:r/2;w.col(n-l,.3,t-c,n+l,a+.25,t+c,{surf:"metal"}),w.col(n-l+.3,0,t-c+.3,n+l-.3,.3,t+c-.3,{surf:"metal",bullet:!1})}function Un(n,t,e,i,s=!1){let r=new It,o=(F,B,D,G,q)=>{let V=new N(F,B);return V.position.set(D,G,q),r.add(V),V},a=s?5.2:4.5,l=1.9,c=s?1.9:2.4,h=s?.6:-.1,u=a/2,d=-a/2,f=a/2-.85,p=.47,x=new ti;x.moveTo(d+.05,.36),x.lineTo(-f-p,.36),x.absarc(-f,.38,p,Math.PI,0,!0),x.lineTo(f-p,.36),x.absarc(f,.38,p,Math.PI,0,!0),x.lineTo(u-.05,.36),x.quadraticCurveTo(u+.04,.38,u,.62),x.quadraticCurveTo(u-.05,.9,u-.45,.98),x.lineTo(h+c/2+.45,1.06),x.lineTo(h-c/2-.35,1.06),s?x.lineTo(d+.1,1.06):(x.lineTo(d+.55,1.03),x.quadraticCurveTo(d+.05,1,d,.8)),x.quadraticCurveTo(d-.03,.4,d+.05,.36);let m=new li(x,{depth:l-.16,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:3,curveSegments:10});m.translate(0,0,-(l-.16)/2),ui(m,.5,.5),o(m,i,0,0,0);let g=new ti;g.moveTo(h+c/2+.42,1.04),g.lineTo(h+c/2-.12,1.62),g.lineTo(h-c/2+.12,1.64),g.lineTo(h-c/2-(s?0:.32),1.04),g.closePath();let M=new li(g,{depth:l-.3,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});M.translate(0,0,-(l-.3)/2),o(M,_.glass,0,0,0);let S=new ti;S.moveTo(h+c/2-.1,1.6),S.lineTo(h-c/2+.1,1.62),S.lineTo(h-c/2+.14,1.72),S.quadraticCurveTo(h,1.78,h+c/2-.16,1.7),S.closePath();let v=new li(S,{depth:l-.26,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});v.translate(0,0,-(l-.26)/2),o(v,i,0,0,0);for(let F of[-1,1]){let B=o(it(.07,.68,.06),i,h+c/2+.16,1.33,F*(l/2-.16));B.rotation.z=.78,o(it(.07,.6,.06),i,h+.05,1.33,F*(l/2-.16));let D=o(it(.09,.62,.06),i,h-c/2-(s?-.02:.12),1.33,F*(l/2-.16));D.rotation.z=s?0:-.45}s&&(o(it(2,.5,.08),i,-1.5,1.3,l/2-.04),o(it(2,.5,.08),i,-1.5,1.3,-l/2+.04),o(it(.08,.5,l),i,-a/2+.04,1.3,0),o(it(1.9,.05,l-.15),_.rust,-1.5,1.08,0)),o(it(.15,.22,l+.04),_.chrome,a/2+.05,.55,0),o(it(.15,.22,l+.04),_.chrome,-a/2-.05,.55,0);for(let F of[-1,1])o(it(.04,.14,.32),_.lampGlow,a/2+.01,.85,F*.66),o(it(.04,.14,.28),_.redPaint,-a/2-.01,.85,F*.68);o(it(.03,.2,.7),_.black,a/2+.01,.78,0);for(let F of[-1,1])o(it(.12,.08,.18),i,h+c/2+.2,1.2,F*(l/2+.08));for(let F of[-1,1])o(it(.02,.4,.01),_.black,h,.75,F*(l/2+.006)),o(it(.18,.03,.02),_.chrome,h+.3,.92,F*(l/2+.01)),o(it(.18,.03,.02),_.chrome,h-.7,.92,F*(l/2+.01));o(it(a-1.2,.25,l-.1),_.black,0,.32,0);for(let F of[a/2-.85,-a/2+.85])for(let B of[-1,1])wa(r,F,.38,B*(l/2-.05));r.position.set(n,0,t),r.rotation.y=e,w.bake(r);let C=Math.abs(Math.cos(e))>.5,R=C?a/2:l/2,y=C?l/2:a/2;w.col(n-R,.25,t-y,n+R,1.08,t+y,{surf:"metal"});let b=n+(C?h*Math.cos(e):0),P=t+(C?0:-h*Math.sin(e)),E=C?c/2+.2:l/2-.1,I=C?l/2-.1:c/2+.2;w.col(b-E,1.08,P-I,b+E,1.75,P+I,{surf:"metal"})}function Vn(n,t,e=1,i=1){zn(i*77+3);let s=new It,r=3.2*e,o=new xt(.16*e,.28*e,r,12,4);ui(o,2,2);let a=new N(o,_.bark);a.position.y=r/2,s.add(a);for(let c=0;c<5;c++){let h=new N(new jn(.12*e,.6*e,6),_.bark),u=c/5*Math.PI*2;h.position.set(Math.cos(u)*.2*e,.15,Math.sin(u)*.2*e),h.rotation.set(Math.sin(u)*1.2,0,-Math.cos(u)*1.2),s.add(h)}for(let c=0;c<4;c++){let h=new N(new xt(.04*e,.09*e,1.6*e,6),_.bark),u=c/4*Math.PI*2+.4;h.position.set(Math.cos(u)*.45*e,r*.75,Math.sin(u)*.45*e),h.rotation.set(Math.sin(u)*.9,0,-Math.cos(u)*.9),s.add(h)}let l=ve(i+500,2,3);for(let c=0;c<13;c++){let h=(.75+Ut()*.6)*e,u=new ei(h,3),d=u.attributes.position,f=u.attributes.normal;for(let g=0;g<d.count;g++){let M=d.getX(g),S=d.getY(g),v=d.getZ(g),C=1+(l((M/h+1)*.5,(v/h+S/h+2)*.25)-.5)*.55;d.setXYZ(g,M*C,S*C*.85,v*C)}u.computeVertexNormals();for(let g=0;g<d.count;g++){let M=new U(d.getX(g),d.getY(g)/.85,d.getZ(g)).normalize(),S=new U(f.getX(g),f.getY(g),f.getZ(g));M.lerp(S,.35).normalize(),f.setXYZ(g,M.x,M.y,M.z)}ui(u,3,3);let p=new N(u,_.leaf),x=Ut()*Math.PI*2,m=c===0?0:(.8+Ut()*.6)*e;p.position.set(Math.cos(x)*m,r+(Ut()*1.4-.2)*e,Math.sin(x)*m),s.add(p)}s.position.set(n,0,t),w.bake(s),w.col(n-.25*e,0,t-.25*e,n+.25*e,r,t+.25*e,{surf:"wood"})}function lh(n,t,e,i,s=1,r=[]){let o=Math.hypot(e-n,i-t),a=(e-n)/o,l=(i-t)/o,c=Math.abs(a)>.5,h=new de(.09,s,.025),u=new jn(.065,.12,4),d=p=>r.some(x=>p>x[0]&&p<x[1]);for(let p=.1;p<o;p+=.16){if(d(p))continue;let x=new jt().makeRotationY(c?0:Math.PI/2);x.setPosition(n+a*p,s/2,t+l*p),w.addGeo(_.paintwood,h,x);let m=new jt().makeRotationY(Math.PI/4+(c?0:Math.PI/2));m.setPosition(n+a*p,s+.06,t+l*p),w.addGeo(_.paintwood,u,m)}let f=[[0,o]];for(let p of r)f=f.flatMap(([x,m])=>p[1]<=x||p[0]>=m?[[x,m]]:[[x,p[0]],[p[1],m]].filter(([g,M])=>M-g>.05));for(let[p,x]of f){for(let v of[s*.25,s*.75]){let C=n+a*(p+x)/2,R=t+l*(p+x)/2;w.box(_.paintwood,C,v,R+(c?-.025:0),c?x-p:.04,.08,c?.04:x-p,{collide:!1})}let m=n+a*p,g=t+l*p,M=n+a*x,S=t+l*x;w.col(Math.min(m,M)-(c?0:.06),0,Math.min(g,S)-(c?.06:0),Math.max(m,M)+(c?0:.06),s,Math.max(g,S)+(c?.06:0),{bullet:!1,surf:"wood"});for(let v=p;v<=x;v+=2.4)w.box(_.paintwood,n+a*v,s/2+.05,t+l*v,.12,s+.1,.12,{collide:!1})}}function Ln(n,t,e,i,s=2.6){let r=(n+e)/2,o=(t+i)/2,a=Math.abs(e-n),l=Math.abs(i-t),c=new de(a,s,l,Math.max(2,Math.round(a*2)),6,Math.max(2,Math.round(l*2))),h=c.attributes.position,u=ve(Math.round(r*7+o*13)+900,4,3);for(let p=0;p<h.count;p++){let x=h.getX(p),m=h.getY(p),g=h.getZ(p),M=(u((x+r)*.05+.5,(m+g+o)*.05+.5)-.5)*.5;h.setXYZ(p,x+Math.sign(x)*M*(Math.abs(x)>a/2-.01?1:0),m+(m>s/2-.01?M:0),g+Math.sign(g)*M*(Math.abs(g)>l/2-.01?1:0))}c.computeVertexNormals();let d=it(a,s,l,1.5,[r,0,o]);c.setAttribute("uv",new dn(new Float32Array(h.count*2),2));let f=c.attributes.uv;for(let p=0;p<h.count;p++)f.setXY(p,(h.getX(p)+r+h.getZ(p)+o)/1.5,h.getY(p)/1.5);w.addGeo(_.hedge,c,new jt().setPosition(r,s/2,o)),w.col(r-a/2,0,o-l/2,r+a/2,s,o+l/2,{surf:"grass"})}function se(n,t,e,i=1,s=0){let r=new It,o=(l,c,h,u,d)=>{let f=new N(l,c);return f.position.set(h,u,d),r.add(f),f};o(it(i-.04,i-.04,i-.04,i),_.wood,0,i/2,0);let a=.07*i;for(let l of[-1,1])for(let c of[-1,1])o(it(a,i,a,1),_.wood,l*(i/2-a/2),i/2,c*(i/2-a/2));for(let l of[0,1])for(let c of[-1,1])o(it(a,a,i,1),_.wood,c*(i/2-a/2),l*(i-a)+a/2,0),o(it(i,a,a,1),_.wood,0,l*(i-a)+a/2,c*(i/2-a/2));for(let l of[-1,1]){let c=o(it(i*1.3,a*.8,a*.5,1),_.wood,0,i/2,l*(i/2+.005));c.rotation.z=Math.PI/4}r.position.set(n,t,e),r.rotation.y=s,w.bake(r),w.col(n-i/2,t,e-i/2,n+i/2,t+i,e+i/2,{surf:"wood"})}function co(n,t,e){w.box(_.wood,n,.2,t,1,.4,.7,{surf:"wood"});let s=Xt(e===0?15231514:e===1?13642266:12095584,{roughness:.5});for(let r=0;r<12;r++){let o=new N(new xe(.1,10,8),s);o.position.set(n-.4+r%4*.26,.45,t-.2+Math.floor(r/4)*.2),o.scale.y=.85,w.bake(o)}}function Ip(n,t,e){let i=new It,s=new N(it(.1,1.1,.1,1),_.wood);s.position.y=.55,i.add(s);let r=new N(new as(.15,.35,4,12),_.steel);r.rotation.z=Math.PI/2,r.position.y=1.15,i.add(r);let o=new N(it(.03,.2,.06,1),_.redPaint);o.position.set(.05,1.3,.17),i.add(o),i.position.set(n,0,t),i.rotation.y=e,w.bake(i),w.col(n-.08,0,t-.08,n+.08,1,t+.08,{bullet:!1})}function ph(n,t){let e=new It,i=new N(new xt(.14,.17,.6,14),_.redPaint);i.position.y=.3,e.add(i);let s=new N(new xe(.15,14,8,0,Math.PI*2,0,Math.PI/2),_.redPaint);s.position.y=.6,e.add(s);for(let o of[-1,1]){let a=new N(new xt(.06,.06,.12,10),_.redPaint);a.rotation.z=Math.PI/2,a.position.set(o*.18,.42,0),e.add(a)}let r=new N(new xt(.03,.05,.08,6),_.chrome);r.position.y=.76,e.add(r),e.position.set(n,.15,t),w.bake(e),w.col(n-.17,0,t-.17,n+.17,.9,t+.17,{bullet:!1})}function ii(n,t,e){let i=new It,s=new N(new xt(.32,.27,.95,16,3),Xt(e,{map:j.metal.map,normalMap:j.metal.normalMap,metalness:.2,roughness:.6}));s.position.y=.48,i.add(s);let r=new N(new xt(.35,.34,.08,16),Xt(e));r.position.y=1,i.add(r);for(let o=0;o<3;o++){let a=new N(new Je(.3-o*.015,.012,6,24),Xt(e));a.rotation.x=Math.PI/2,a.position.y=.25+o*.3,i.add(a)}i.position.set(n,0,t),w.bake(i),w.col(n-.33,0,t-.33,n+.33,1.04,t+.33,{surf:"metal"})}function Hs(n,t,e){let i=new It,s=new N(new xt(.06,.1,5.2,10),_.darkTrim);s.position.y=2.6,i.add(s);let r=new N(new xt(.04,.04,1.4,8),_.darkTrim);r.rotation.x=Math.PI/2,r.position.set(0,5.1,e*.7),i.add(r);let o=new N(new xt(.12,.3,.25,12),_.darkTrim);o.position.set(0,5.05,e*1.35),i.add(o);let a=new N(new xt(.22,.22,.04,12),_.lampGlow);a.position.set(0,4.92,e*1.35),i.add(a);let l=new N(new xt(.18,.22,.4,10),_.darkTrim);l.position.y=.2,i.add(l),i.position.set(n,.15,t),w.bake(i),w.col(n-.12,0,t-.12,n+.12,5.3,t+.12,{surf:"metal"})}function xd(n,t,e,i){w.box(_.wood,n,.25,t,e,.5,i,{surf:"wood"}),w.box(_.dirt,n,.51,t,e-.16,.04,i-.16,{collide:!1});for(let s=0;s<Math.floor(e*i*3);s++){let r=n-e/2+.25+Ut()*(e-.5),o=t-i/2+.25+Ut()*(i-.5);for(let a=0;a<5;a++){let l=new N(new jn(.05,.4,4),_.leaf);l.position.set(r,.7,o),l.rotation.set((Ut()-.5)*1.2,Ut()*3,(Ut()-.5)*1.2),w.bake(l)}}}function Ea(n,t,e){let i=new N(new xt(.65,.65,1.2,20,2),_.hay);i.rotation.set(0,e,Math.PI/2),i.position.set(n,.65,t),w.bake(i);let s=Math.abs(Math.cos(e))>.5;w.col(n-(s?.6:.65),0,t-(s?.65:.6),n+(s?.6:.65),1.3,t+(s?.65:.6),{surf:"grass"})}function Lp(n,t){Nn(t-3.2/2,n-4/2,n+4/2,.05,2.4,-1,_.wood,_.wood,[],.12),Nn(t+3.2/2,n-4/2,n+4/2,.05,2.4,1,_.wood,_.wood,[{c:n+.6,w:1.4,b:.05,t:2.1}],.12),Wn(n-4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,-1,_.wood,_.wood,[{c:t,w:.9,b:1.1,t:1.8,win:!0}],.12),Wn(n+4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,1,_.wood,_.wood,[{c:t-.3,w:1.2,b:.05,t:2.1}],.12),w.box(_.roof2,n,2.4+.15,t,4+.6,.12,3.2+.6,{rotX:.06,collide:!1}),w.box(_.wood,n,.03,t,4,.06,3.2,{collide:!1}),w.col(n-4/2,2.4,t-3.2/2,n+4/2,2.4+.3,t+3.2/2),w.box(_.wood,n-1.4,.8,t-1.2,1,.05,.5,{collide:!1}),w.col(n-1.9,0,t-1.5,n-.9,1.6,t-.95);for(let r=0;r<3;r++)w.box(Xt(9071162),n-1.7+r*.3,1,t-1.2,.2,.35,.2,{collide:!1})}function tv(n,t){let r=(o,a)=>w.box(_.white,o,1.25,a,.08,2.5,.08,{surf:"metal"});for(let o of[-1,0,1])for(let a of[-1,1])r(n+o*5/2,t+a*3.6/2);for(let o of[-1,1])w.box(_.white,n,2.5,t+o*3.6/2,5,.08,.08,{collide:!1});for(let o of[-1,0,1])w.box(_.white,n+o*5/2,2.5,t,.08,.08,3.6,{collide:!1});for(let o of[-1,1])w.box(_.glass,n,2.5+.45,t+o*3.6/4,5,.03,3.6/2+.1,{rotX:o*.45,collide:!1});w.box(_.white,n,2.5+.9,t,5,.06,.06,{collide:!1}),w.box(_.wood,n,.45,t-3.6/2+.4,5-.4,.06,.7,{collide:!1}),w.col(n-5/2+.2,0,t-3.6/2+.05,n+5/2-.2,.9,t-3.6/2+.75,{bullet:!1});for(let o=0;o<6;o++){let a=new N(new xt(.12,.09,.2,12),Xt(11558970));a.position.set(n-2+o*.8,.58,t-3.6/2+.4),w.bake(a);let l=new N(new ei(.16,1),_.leaf);l.position.set(n-2+o*.8,.78,t-3.6/2+.4),w.bake(l)}}function Td(n,t){let e=new It,i=new N(new xe(.35,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),_.black);i.position.y=.85,e.add(i);let s=new N(new xe(.35,16,10,0,Math.PI*2,0,Math.PI/2),_.black);s.position.y=.87,e.add(s);for(let r=0;r<3;r++){let o=new N(new xt(.02,.02,.85,6),_.steel),a=r/3*Math.PI*2;o.position.set(Math.cos(a)*.2,.4,Math.sin(a)*.2),o.rotation.set(Math.sin(a)*.3,0,-Math.cos(a)*.3),e.add(o)}e.position.set(n,0,t),w.bake(e),w.col(n-.35,0,t-.35,n+.35,1.2,t+.35,{bullet:!1,surf:"metal"})}function Ad(n,t){let e=new It,i=new N(new xt(.6,.6,.05,20),_.white);i.position.y=.72,e.add(i);let s=new N(new xt(.04,.04,2.3,8),_.steel);s.position.y=1.15,e.add(s);let r=new N(new jn(1.4,.5,8,1,!0),Xt(13647936,{side:an}));r.position.y=2.2,e.add(r),e.position.set(n,0,t),w.bake(e),w.col(n-.6,0,t-.6,n+.6,.75,t+.6,{bullet:!1});for(let o=0;o<3;o++){let a=o/3*Math.PI*2;ev(n+Math.cos(a)*1,t+Math.sin(a)*1,-a-Math.PI/2)}}function ev(n,t,e){let i=new It,s=new N(it(.45,.04,.45,1),_.white);s.position.y=.45,i.add(s);let r=new N(it(.45,.45,.04,1),_.white);r.position.set(0,.7,-.21),i.add(r);for(let o of[-1,1])for(let a of[-1,1]){let l=new N(it(.03,.45,.03,1),_.white);l.position.set(o*.2,.22,a*.2),i.add(l)}i.position.set(n,0,t),i.rotation.y=e,w.bake(i)}function Dn(n,t,e){let i=new ti;i.moveTo(-.3,0),i.lineTo(.3,0),i.lineTo(.12,.3),i.lineTo(.08,.85),i.lineTo(-.08,.85),i.lineTo(-.12,.3),i.closePath();let s=new li(i,{depth:2.4,bevelEnabled:!1});s.translate(0,0,-1.2),ui(s,.7,.7);let r=new jt().makeRotationY(e);r.setPosition(n,0,t),w.addGeo(_.concrete,s,r);let o=Math.abs(Math.cos(e))>.5;w.col(n-(o?.3:1.2),0,t-(o?1.2:.3),n+(o?.3:1.2),.85,t+(o?1.2:.3))}function Wi(n,t,e){let i=Vi(t,{w:256,h:256,size:200,color:"rgba(255,255,255,0.9)",stroke:"rgba(0,0,0,0.35)",strokeW:8,draw:h=>{h.strokeStyle="rgba(255,220,60,0.9)",h.lineWidth=14,h.beginPath(),h.arc(128,128,116,0,7),h.stroke()}}),s=new N(new He(3.4,3.4),new vi({map:i,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));s.rotation.x=-Math.PI/2,s.position.set(e.x,.06,e.z),s.renderOrder=2,n.add(s);let r=new It,o=new N(it(1.3,.7,.9,1),_.greenPaint);o.position.y=.35,r.add(o);for(let h=0;h<4;h++){let u=new N(it(.04,.72,.92,1),_.darkTrim);u.position.set(-.5+h*.33,.35,0),r.add(u)}let a=new N(it(1.35,.06,.95,1),_.darkTrim);a.position.y=.72,r.add(a);let l=new N(new He(.5,.5),new ee({map:Vi(t,{w:128,h:128,size:100,bg:"#f0c020",color:"#111"}),roughness:.6}));l.position.set(0,.38,.46),r.add(l);let c=l.clone();c.position.z=-.46,c.rotation.y=Math.PI,r.add(c),r.position.set(e.x,0,e.z),w.bake(r),w.col(e.x-.65,0,e.z-.45,e.x+.65,.75,e.z+.45,{surf:"metal"})}function Gp(n,t){let e=new It,i=new N(new xt(.12,.16,8.5,10),_.bark);i.position.y=4.25,e.add(i);let s=new N(it(.12,.12,2,1),_.wood);s.position.y=7.8,e.add(s);for(let o of[-.85,0,.85]){let a=new N(new xt(.04,.05,.14,8),_.white);a.position.set(0,7.93,o),e.add(a)}let r=new N(new xt(.25,.25,.7,12),_.metal);r.position.set(.3,6.6,0),e.add(r),e.position.set(n,0,t),w.bake(e),w.col(n-.16,0,t-.16,n+.16,8.5,t+.16,{surf:"wood"})}function dh(n,t,e,i){let s=[];for(let o=0;o<=24;o++){let a=o/24;s.push(new U(n+(t-n)*a,e-Math.sin(a*Math.PI)*.6,i))}let r=new sa(new Zr(s),24,.012,4,!1);w.addGeo(_.black,r,new jt)}function mh(n,t,e){let i=new It,s=new N(it(1.2,.8,.05,1),_.white);s.position.set(0,3.2,0),i.add(s);let r=new N(it(.45,.35,.06,1),_.redPaint);r.position.set(0,3.05,.005),i.add(r);let o=new N(it(.37,.27,.07,1),_.white);o.position.set(0,3.05,.006),i.add(o);let a=new N(new Je(.23,.012,6,20),_.redPaint);a.rotation.x=Math.PI/2,a.position.set(0,2.9,.28),i.add(a);let l=new N(new xt(.23,.15,.4,12,1,!0),Xt(16777215,{wireframe:!0}));l.position.set(0,2.7,.28),i.add(l),i.position.set(n,0,t),i.rotation.y=e,w.bake(i)}function nv(n,t){let e=new It;for(let s of[-1.4,1.4])for(let r of[-.6,.6]){let o=new N(new xt(.04,.04,2.5,8),_.redPaint);o.position.set(s,1.2,r*.5),o.rotation.x=r*.45,e.add(o)}let i=new N(new xt(.05,.05,3,8),_.redPaint);i.rotation.z=Math.PI/2,i.position.y=2.35,e.add(i);for(let s of[-.6,.6]){for(let o of[-.18,.18]){let a=new N(new xt(.008,.008,1.8,4),_.steel);a.position.set(s+o,1.45,0),e.add(a)}let r=new N(it(.45,.04,.2,1),_.black);r.position.set(s,.55,0),e.add(r)}e.position.set(n,0,t),w.bake(e);for(let s of[-1.4,1.4])w.col(n+s-.1,0,t-.6,n+s+.1,2.4,t+.6,{bullet:!1,surf:"metal"})}function iv(n,t){let e=new It,i=new N(new xt(1.6,1.6,.04,28),_.black);i.position.y=.85,e.add(i);let s=new N(new Je(1.65,.1,6,28),Xt(2783968));s.rotation.x=Math.PI/2,s.position.y=.88,e.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new N(new xt(.03,.03,.88,6),_.steel);a.position.set(Math.cos(o)*1.6,.44,Math.sin(o)*1.6),e.add(a)}e.position.set(n,0,t),w.bake(e),w.col(n-1.4,0,t-1.4,n+1.4,.9,t+1.4,{bullet:!1,surf:"carpet"})}function ch(n,t,e,i){let s=new It,r=new N(it(1.3,2.2,.05,1),_.paintwood);r.position.set(.65,1.1,0),s.add(r);for(let[a,l]of[[.35,1.55],[.95,1.55],[.35,.6],[.95,.6]]){let c=new N(it(.4,.6,.07,1),_.paintwood);c.position.set(a,l,0),s.add(c)}let o=new N(new xe(.04,8,6),_.chrome);o.position.set(1.15,1,.05),s.add(o),s.position.set(n,.18,t),s.rotation.y=e+i,w.bake(s)}function Dp(n,t,e){let i=new N(it(1,.02,.6,1),Xt(9071162,{map:j.carpet.map}));i.position.set(n,.21,t),w.bake(i);for(let s of[-1,1]){let r=new N(new xt(.2,.15,.35,14),Xt(11558970));r.position.set(n+s*1,.38,t+e*.2),w.bake(r);let o=new N(new ei(.28,2),_.leaf);o.position.set(n+s*1,.75,t+e*.2),w.bake(o)}}function gh(n,t){w.box(_.metal,n,.4,t,.8,.8,.8,{surf:"metal",bullet:!0});let e=new N(new xt(.3,.3,.02,16),_.black);e.position.set(n,.81,t),w.bake(e);for(let i=0;i<7;i++)w.box(_.darkTrim,n-.41,.15+i*.1,t,.01,.03,.7,{collide:!1})}function Ta(n,t,e){let i=new It;for(let l of[-.5,.5]){let c=new N(new Je(.3,.025,6,20),_.tire);c.position.set(l,.32,0),i.add(c)}let s=new N(new xt(.02,.02,.9,6),_.carBlue);s.rotation.z=Math.PI/2,s.position.set(0,.6,0),i.add(s);let r=new N(new xt(.02,.02,.6,6),_.carBlue);r.rotation.z=.8,r.position.set(-.2,.45,0),i.add(r);let o=new N(it(.22,.05,.1,1),_.black);o.position.set(-.25,.8,0),i.add(o);let a=new N(new xt(.015,.015,.5,6),_.chrome);a.rotation.x=Math.PI/2,a.position.set(.45,.85,0),i.add(a),i.position.set(n,0,t),i.rotation.set(0,e,.25),w.bake(i)}function Np(n,t){let e=new N(new Je(.22,.06,8,20),Xt(2787882));e.position.set(n,.35,t),w.bake(e);let i=new N(it(.4,.5,.05,1),_.darkTrim);i.position.set(n,.25,t-.08),w.bake(i)}function sv(){for(let e of[-24,-6,12,28])Gp(e,-6.3);for(let[e,i]of[[-24,-6],[-6,12],[12,28]])for(let s of[-.85,0,.85])dh(e,i,7.93,-6.3+s);dh(-40,-24,7.93,-6.3),dh(28,44,7.93,-6.3),mh(8,-9.85,0),mh(-8,9.85,Math.PI),nv(14,23),iv(-14,-22.5),ch(-1.7,-9.5,0,-1.2),ch(1.7,9.5,Math.PI,-1.2),ch(1.3,-17.5,Math.PI,1.1),ch(-1.3,17.5,0,1.1),Dp(-1,-8.3,1),Dp(1,8.3,-1),gh(6,-18.4),gh(-6,18.4),Ta(-11.5,-7.8,.3),Ta(11.2,7.8,2.6),Np(-6.5,-18.2),Np(6.5,18.2);let n=new N(new xt(.4,.4,.02,20),_.rust);n.position.set(-6,.012,1.5),w.bake(n);let t=n.clone();t.position.set(18,.012,-1.6),w.bake(t);for(let e of[-18,0,18])for(let i of[-1,1])w.box(_.darkTrim,e,.03,i*3.85,.7,.02,.25,{collide:!1})}function zp(n,t="town"){if(Hp(t),YM(),w=new oh,ln.id==="market")return lv(n);if(ln.id==="station")return hv(n);if(ln.id==="port")return fv(n);if(ln.id==="villa")return mv(n);zn(42);let e=new He(220,220,1,1);e.rotateX(-Math.PI/2),ui(e,220/4,220/4),w.addGeo(_.grass,e,new jt),w.box(_.asphalt,0,.005,0,120,.01,8,{collide:!1,uv:6});for(let r=-58;r<58;r+=4)w.box(_.lineY,r,.012,0,2.2,.004,.14,{collide:!1});for(let r of[-1,1])w.box(_.lineW,0,.012,r*3.6,120,.004,.12,{collide:!1});for(let r of[-1,1])w.box(_.concrete,0,.075,r*4.85,120,.15,1.7,{uv:2,surf:"concrete",bullet:!1}),w.box(_.concrete,0,.08,r*4.03,120,.16,.12,{collide:!1,uv:1});w.box(_.concrete,8,.02,-7.5,5.2,.04,4.4,{collide:!1,uv:2}),w.box(_.concrete,-8,.02,7.5,5.2,.04,4.4,{collide:!1,uv:2}),w.box(_.concrete,-1,.02,-7.6,1.6,.04,3.2,{collide:!1,uv:1}),w.box(_.concrete,1,.02,7.6,1.6,.04,3.2,{collide:!1,uv:1}),Cp({x0:-6,x1:5.5,z0:-17.5,z1:-9.5,frontNeg:!0,siding:_.sidingY,roof:_.roof,doorX:-1,chimX:-4.5,frontOps:[{c:-1,d:1},{c:-4,w:1.6},{c:2.6,w:1.8}],backOps:[{c:2,d:1},{c:-3.5,w:1.4},{c:-.2}],leftOps:[{c:-11.5,w:1.4},{c:-15.5,d:1}],rightOps:[{c:-12.5,d:1,w:1.4}],partX:.5,partZ0:-17.4,partZ1:-12.8,partDoor:-14.5}),Pp({x0:5.5,x1:10.5,z0:-17,z1:-9.8,frontNeg:!0,siding:_.sidingY,roof:_.roof2,outerX:10.5}),vd(-3.5,-12,0,_.fabricG),Bs(-3.5,-10.9,1.1,.6,.42),Sd(-3.5,-11.6,3.2,2.2,_.carpetR),Ed(-3.5,-9.95,Math.PI),Ra(-5.6,-14,Math.PI/2),fh(-5.4,-10.2),Sa(-.2,1.7,-17.33,0,_.paint1),bd(1,3.8,-17.5,-1),Bs(3,-13.8,1.4,.9,.76),Ri(2.4,-14.5,0),Ri(3.6,-13.1,Math.PI),Ri(2.4,-13.1,Math.PI),Sa(-5.85,1.7,-12,Math.PI/2,_.paint2),wd(-3.2,-15.8,Math.PI/2),Cp({x0:-5.5,x1:6,z0:9.5,z1:17.5,frontNeg:!1,siding:_.sidingB,roof:_.roof2,doorX:1,chimX:4.5,frontOps:[{c:1,d:1},{c:4,w:1.6},{c:-2.6,w:1.8}],backOps:[{c:-2,d:1},{c:3.5,w:1.4},{c:.2}],leftOps:[{c:12.5,d:1,w:1.4}],rightOps:[{c:11.5,w:1.4},{c:15.5,d:1}],partX:-.5,partZ0:12.8,partZ1:17.4,partDoor:14.5}),Pp({x0:-10.5,x1:-5.5,z0:9.8,z1:17,frontNeg:!1,siding:_.sidingB,roof:_.roof,outerX:-10.5}),vd(3.5,12,Math.PI,_.fabricO),Bs(3.5,10.9,1.1,.6,.42),Sd(3.5,11.6,3.2,2.2,_.carpetB),Ed(3.5,9.95,0),Ra(5.6,14,-Math.PI/2),fh(5.4,10.2),Sa(.2,1.7,17.33,Math.PI,_.paint2),bd(-3.8,-1,17.5,1),Bs(-3,13.8,1.4,.9,.76),Ri(-2.4,14.5,Math.PI),Ri(-3.6,13.1,0),wd(3.2,15.8,-Math.PI/2),QM(1.5,-1.6,0),Un(-13.5,2,0,_.carRed),Un(13,1.8,Math.PI,_.carWhite,!0),Un(8,-7.6,Math.PI/2,_.carBlue),Dn(-26,-1.5,0),Dn(-26,1.5,0),Dn(26,-1.5,0),Dn(26,1.5,0),Dn(-21,0,Math.PI/2+0),se(20.5,0,-2.2,1.1),se(20.5,0,-1,1.1),se(20.5,1.1,-1.6,1.1,.3),Hs(-9,-5.4,1),Hs(9,5.4,-1),Hs(-22,5.4,-1),Hs(22,-5.4,1),ii(-4.2,-5,2779706),ii(-3.4,-5,2771594),ii(4.2,5,2779706),ii(5,5,5921370),ph(-11,-4.9),ph(11,4.9),Ip(-2.5,-6.2,0),Ip(2.5,6.2,Math.PI),Vn(-9,-12.5,1.1,1),Vn(12.5,-19,1,2),Vn(-12.5,19,1,3),Vn(9,12.5,1.1,4),Vn(-27,-8,1.2,5),Vn(27,8,1.2,6),Vn(-27,12,1,7),Vn(27,-21,1,8),lh(-30,-6.2,-11,-6.2,.9,[[5,6.5]]),lh(11,6.2,30,6.2,.9,[[12,13.5]]),Lp(-24.5,-15.5),xd(-17,-16.5,3.2,1.2),xd(-21.5,-9.5,2,1.2),co(-15.5,-9.2,0),co(-15.5,-10.2,1),se(-14,0,-13.5,1),se(-14,0,-14.6,1),se(-14,1,-14,.9,.4),Wi(n,"A",Ye.A),tv(18.5,-18),Ea(15,-11,0),Ea(22,-11.5,Math.PI/2),Ea(15.6,-14.2,Math.PI/2),se(22.5,0,-14.5,1.1),se(22.5,1.1,-14.5,.8,.5),co(20.5,-9,2),Wi(n,"B",Ye.B),Td(4,20),Ad(-4.5,20.5),se(-16,0,13,1.1),se(-16,0,14.1,1.1),se(16,0,12.5,1),se(17.1,0,12.5,1),se(16.5,1,12.5,.9),Ea(-20,10,0),Ea(20,17,Math.PI/2),ii(-11.6,17.5,2771594),ii(-12.3,17.5,2779706),xd(14.5,20.5,3,1.2),Lp(22.5,20.5),Td(-8.5,-22.5),Ad(8.5,-21.5),lh(-30,-19.5,30,-19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),lh(-30,19.5,30,19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),Ln(-33,-28,33,-26.6),Ln(-33,26.6,33,28),Ln(-33,-26.6,-31.6,-5.8),Ln(-33,5.8,-31.6,26.6),Ln(31.6,-26.6,33,-5.8),Ln(31.6,5.8,33,26.6),w.col(-31.6,0,-5.8,-30.5,6,5.8,{bullet:!1}),w.col(30.5,0,-5.8,31.6,6,5.8,{bullet:!1}),Ln(-12.5,9.5,-11.8,15.5,1.6),Ln(11.8,-15.5,12.5,-9.5,1.6),Ln(-30.5,-4,-27.5,-3.5,1.2),sv();let i=new It;zn(9);for(let r=0;r<26;r++){let o=r/26*Math.PI*2,a=55+Ut()*15,l=Math.cos(o)*a,c=Math.sin(o)*a,h=new N(it(8,5,7,2.5),[_.sidingY,_.sidingB,_.sidingG][r%3]);h.position.set(l,2.5,c),h.rotation.y=-o,i.add(h);let u=new N(new jn(6.2,2.5,4),_.roof2);u.position.set(l,6.2,c),u.rotation.y=-o+Math.PI/4,i.add(u)}w.bake(i);for(let r=0;r<30;r++){let o=r/30*Math.PI*2+.1;Vn(Math.cos(o)*(42+Ut()*8),Math.sin(o)*(40+Ut()*8),1.2+Ut()*.5,30+r)}w.colliders=w.colliders.filter(r=>r.min.x>-40&&r.max.x<40&&r.min.z>-36&&r.max.z<36),w.col(-40,0,-40,he.minX-.6,20,40,{bullet:!1}),w.col(he.maxX+.6,0,-40,40,20,40,{bullet:!1}),w.col(-40,0,-40,40,20,he.minZ-.6,{bullet:!1}),w.col(-40,0,he.maxZ+.6,40,20,40,{bullet:!1});let s=w.finish(n);rv(n,w.colliders);for(let[r,o]of[[-1.5,-13.5],[1,13.5]]){let a=new Pn(16767136,6,9,1.6);a.position.set(r,2.6,o),n.add(a)}return{colliders:w.colliders,meshes:s}}function Vp(n,t,e,i){let s=null,r=-1;for(let o of n)t>=o.min.x&&t<=o.max.x&&i>=o.min.z&&i<=o.max.z&&o.max.y<=e+.05&&o.max.y>r&&(r=o.max.y,s=o);return s?s.surf:ln.ground==="concrete"||Math.abs(i)<4?"concrete":"grass"}var Id={time:{value:0}};function rv(n,t){let e=window.__vwQuality??1,i=e===0?3500:e===1?9e3:16e3,s=[],r=[],o=[];zn(77);for(let b=0;b<7;b++){let P=Ut()*Math.PI,E=.1+Ut()*.16,I=.02,F=(Ut()-.5)*.15,B=(Ut()-.5)*.12,D=(Ut()-.5)*.12,G=Math.cos(P),q=Math.sin(P),V=(ot,Pt)=>[B+G*ot*I+F*Pt*G*0,Pt*E,D+q*ot*I+F*Pt],ct=[V(-1,0),V(1,0),V(0,1)],J=-q,rt=G;for(let ot of ct){s.push(...ot),r.push(J*.3,.9,rt*.3);let Pt=ot[1]/E;o.push(.18+Pt*.32,.34+Pt*.38,.1+Pt*.1)}}let a=new Ze;a.setAttribute("position",new le(s,3)),a.setAttribute("normal",new le(r,3)),a.setAttribute("color",new le(o,3));let l=new ee({vertexColors:!0,roughness:.9,side:an});l.onBeforeCompile=b=>{b.uniforms.time=Id.time,b.vertexShader=`uniform float time;
`+b.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.);
      float sway = sin(time*1.7 + wp.x*0.35 + wp.z*0.27) * 0.06 + sin(time*3.1 + wp.x*1.3) * 0.02;
      transformed.x += sway * position.y * 3.0; transformed.z += sway * position.y * 1.5;`)};let c=new Cs(a,l,i),h=new jt,u=new on,d=new U,f=new U,p=(b,P)=>{if(Math.abs(P)<5.8)return!0;for(let E of t)if(E.max.y>.12&&b>E.min.x-.1&&b<E.max.x+.1&&P>E.min.z-.1&&P<E.max.z+.1)return!0;return b>5.6&&b<10.6&&P>-9.8&&P<-5.3||b>-10.6&&b<-5.4&&P>5.3&&P<9.8||Math.abs(b+1)<.9&&P>-9.5&&P<-5.8||Math.abs(b-1)<.9&&P<9.5&&P>5.8},x=0,m=0;for(;x<i&&m<i*6;){m++;let b=he.minX+.3+Ut()*(he.maxX-he.minX-.6),P=he.minZ+.3+Ut()*(he.maxZ-he.minZ-.6);if(p(b,P))continue;let E=.7+Ut()*.9;u.setFromAxisAngle(new U(0,1,0),Ut()*6.28),d.set(E,E*(.8+Ut()*.6),E),f.set(b,0,P),h.compose(f,u,d),c.setMatrixAt(x++,h)}c.count=x,c.receiveShadow=!0,c.castShadow=!1,c.frustumCulled=!1,n.add(c);let g=new ei(.045,0),M=new ee({roughness:.6}),S=220,v=new Cs(g,M,S),C=new ie,R=[[-5.6,-8.9,4,.5],[.4,-8.9,4.6,.5],[-5,8.9,4.4,.5],[2.4,8.9,3.4,.5]];for(let b=0;b<S;b++){let P=R[b%R.length],E=P[0]+Ut()*P[2],I=P[1]+(Ut()-.5)*P[3];h.compose(new U(E,.22+Ut()*.18,I),u,new U(1,1,1)),v.setMatrixAt(b,h),v.setColorAt(b,C.setHex([15747690,16764992,16777215,10510560,16747050][Math.floor(Ut()*5)]))}n.add(v);let y=new It;n.add(y);for(let b of R){let P=new N(new de(b[2]+.2,.18,b[3]+.2),_.dirt);P.position.set(b[0]+b[2]/2,.09,b[1]),P.receiveShadow=!0,y.add(P);for(let E=0;E<b[2]*6;E++){let I=new N(new ei(.1,1),_.leaf);I.position.set(b[0]+Ut()*b[2],.22,b[1]+(Ut()-.5)*b[3]),I.scale.y=.7,y.add(I)}}Ke(y)}var Sn=(n,t=1.3)=>({c:n,w:t,b:0,t:2.2}),Xn=(n,t=1.6,e=1,i=2)=>({c:n,w:t,b:e,t:i,win:1,noCurtain:1});function ov(n,t,e,i,s,r){let o=Xt(r,{roughness:.8,side:an}),a=t-n,l=i-e,c=Math.max(2,Math.round(a/.5));for(let h=0;h<c;h++){let u=h%2?o:_.white;w.box(u,n+(h+.5)*a/c,s,(e+i)/2,a/c,.04,l,{collide:!1})}}function hh(n,t,e,i,s){let r=e-t;w.box(_.paintwood,n,.5,(t+e)/2,1.1,1,r,{surf:"wood",uv:1.5});let o=Math.floor(r/.9);for(let a=0;a<o;a++){let l=t+.45+a*(r-.9)/Math.max(1,o-1);w.box(_.wood,n,1.06,l,.95,.12,.8,{collide:!1});let c=Xt(s[a%s.length],{roughness:.45});for(let h=0;h<9;h++){let u=new N(new xe(.11,10,8),c);u.position.set(n-.3+h%3*.3,1.2+(h===4?.08:0),l-.25+Math.floor(h/3)*.25),w.bake(u)}}for(let a of[t+.1,e-.1])w.box(_.steel,n+i*.5,1.3,a,.06,2.6,.06,{collide:!1});ov(n-.7,n+.7,t,e,2.6,s[0]===15231514?14174762:2787914)}function sn(n,t,e=1,i=0){w.box(_.wood,n,.07,t,1.2,.14,1,{surf:"wood"});let s=Xt(11569754,{roughness:.9});for(let r=0;r<e;r++)w.box(s,n,.14+.35+r*.7,t,1.1,.7,.92,{surf:"wood"})}function Rd(n,t,e=0){let i=Math.abs(Math.cos(e))>.5,s=i?1.9:1.2,r=i?1.2:1.9;w.box(_.greenPaint,n,.6,t,s,1.2,r,{surf:"metal"}),w.box(_.black,n,1.23,t,s+.06,.06,r+.06,{collide:!1})}function Aa(n,t,e,i){let s=new It,r=(E,I,F,B,D)=>{let G=new N(E,I);return G.position.set(F,B,D),s.add(G),G},o=2.3,a=2.22,l=Xt(i,{roughness:.42,metalness:.35}),c=Xt(i===15261904||i===15921902?13159632:i,{roughness:.35,metalness:.55}),h=Xt(15659246,{roughness:.3,metalness:.3}),u=Xt(2105376,{roughness:.8}),d=Xt(5922402,{roughness:.6});for(let E of[-1,1])r(it(7.6,.2,.12),u,.1,.62,E*.52);let f=r(new xt(.26,.26,.9,16),Xt(12106944,{metalness:.8,roughness:.3}),-.6,.6,.85);f.rotation.z=Math.PI/2;for(let E of[-1,1])r(it(2,.05,.04),d,1.9,.62,E*1.08),r(it(2,.05,.04),d,1.9,.42,E*1.08);let p=-3.42,x=-1.42,m=new ti;m.moveTo(x,.5),m.lineTo(-2.4+.56,.5),m.absarc(-2.4,.45,.56,.09,Math.PI-.09,!1),m.lineTo(p+.12,.5),m.quadraticCurveTo(p,.5,p,.7),m.lineTo(p,1.3),m.quadraticCurveTo(p,1.42,p+.05,1.5),m.lineTo(p+.2,2.18),m.quadraticCurveTo(p+.25,2.3,p+.42,2.3),m.lineTo(x,2.3),m.lineTo(x,.5);let g=new li(m,{depth:a-.12,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:3,curveSegments:8});g.translate(0,0,-(a-.12)/2),ui(g,.5,.5),r(g,h,0,0,0);let M=r(it(.04,.72,a-.2),_.glass,p+.15,1.86,0);M.rotation.z=-.27;for(let E of[-1,1])r(it(.02,.03,.55),_.black,p+.04,1.54,E*.35).rotation.set(E*.15,0,-.27);for(let E of[-1,1]){let I=E*(a/2+.005);r(it(.95,.62,.02),_.glass,p+.95,1.86,I);let F=r(it(.3,.5,.02),_.glass,p+.34,1.8,I);F.rotation.z=-.27,r(it(.02,1.6,.012),_.black,p+.42,1.3,I+E*.004),r(it(.02,1.6,.012),_.black,p+1.5,1.3,I+E*.004),r(it(.2,.04,.03),_.chrome,p+1.3,1.42,I+E*.015),r(it(.5,.06,.25),d,p+.95,.55,E*(a/2+.05));let B=r(it(.03,.03,.32),_.black,p+.3,1.75,E*(a/2+.16));r(it(.06,.38,.2),_.black,p+.3,1.7,E*(a/2+.33)),r(it(.01,.32,.15),_.chrome,p+.265,1.7,E*(a/2+.33))}r(it(.04,.32,1.3),_.black,p-.08,1,0);for(let E=0;E<4;E++)r(it(.03,.03,1.26),_.chrome,p-.1,.88+E*.08,0);for(let E of[-1,1])r(it(.05,.2,.36),_.lampGlow,p-.08,1.02,E*.88),r(it(.05,.08,.2),Xt(16751136,{emissive:8400896}),p-.08,.84,E*.92);r(it(.22,.26,a+.06),d,p-.1,.58,0),r(it(.02,.17,.34),Xt(16053484),p-.22,.6,0),r(it(.02,.12,.6),Xt(2775610),p+.02,2,0);let S=-1.32,v=4.18,C=v-S,R=(S+v)/2,y=.75,b=3.2;r(it(C,b-y,o,1),l,R,(y+b)/2,0),r(it(C+.04,.1,o+.04),c,R,b-.05,0),r(it(C+.04,.12,o+.04),c,R,y+.06,0);for(let E=S+.3;E<v-.2;E+=.55)for(let I of[-1,1])r(it(.06,b-y-.2,.03),c,E,(y+b)/2,I*(o/2+.012));for(let E of[-1,1])r(it(.08,b-y,.08),c,S+.04,(y+b)/2,E*(o/2));r(it(.02,b-y-.14,.02),_.black,v+.012,(y+b)/2,0);for(let E of[-1,1]){r(it(.08,b-y,.1),c,v,(y+b)/2,E*(o/2-.02));for(let I of[y+.35,(y+b)/2,b-.35])r(it(.06,.12,.14),d,v+.03,I,E*(o/2-.1));for(let I of[.28,.75])r(new xt(.025,.025,b-y-.1,8),_.chrome,v+.06,(y+b)/2,E*I),r(it(.06,.05,.2),_.chrome,v+.08,1.6,E*I-E*.08);r(it(.06,.16,.3),Xt(13637656,{emissive:5242880}),v+.02,.55,E*.9),r(it(.04,.4,.4),_.black,v-.6,.42,E*(o/2-.2))}r(it(.12,.12,o-.2),d,v+.02,.5,0),r(it(.02,.17,.34),Xt(16053484),v+.09,.5,0);for(let E of[-1,1])wa(s,-2.4,.45,E*.95,.45,.28),wa(s,2.55,.45,E*.98,.45,.28),wa(s,2.55,.45,E*.68,.45,.28);let P=new N(new He(3.2,1.2),new ee({map:Vi("\u9752\u679C\u4FBF",{w:512,h:192,size:120,color:i===9091146?"#ffffff":"#2a6a3a",bg:"rgba(0,0,0,0)"}),transparent:!0,roughness:.6}));for(let E of[-1,1]){let I=P.clone();I.position.set(1.5,2.1,E*(o/2+.035)),I.rotation.y=E>0?0:Math.PI,s.add(I)}s.position.set(n,0,t),s.rotation.y=e,w.bake(s),w.col(n-1.4,.7,t-1.2,n+4.2,3.2,t+1.2,{surf:"metal"}),w.col(n-3.4,.4,t-1.15,n-1.4,2.3,t+1.15,{surf:"metal"})}function Ld(n,t,e){let i=Xt(15773728,{roughness:.5,map:j.metal.map});w.box(i,n,.75,t,1.2,1.1,1,{surf:"metal"}),w.box(_.black,n+.2,1.6,t,.9,.08,1,{collide:!1});for(let s of[-1,1])w.box(_.darkTrim,n-.35,1.2,t+s*.45,.06,2.2,.06,{collide:!1});for(let s of[-1,1])w.box(_.steel,n-.75,.6,t+s*.3,.06,1.8,.1,{collide:!1});for(let s of[-1,1])w.box(_.steel,n-1.1,.06,t+s*.3,.8,.05,.12,{collide:!1})}function ho(n,t,e,i){let s=Xt(i,{roughness:.4}),r=Math.abs(Math.cos(e))>.5;w.box(s,n,.9,t,r?1:.8,1.8,r?.8:1,{surf:"metal"});let o=new N(new He(.7,1.1),_.lampGlow);o.position.set(n+(r?0:Math.sin(e)*.41),1.1,t+(r?Math.cos(e)*.41:0)),o.rotation.y=e,w.bake(o)}function qn(n,t,e,i,s,r=4,o=1,a="#2a5a3a"){let l=new N(new He(r,o),new ee({map:Vi(s,{w:512,h:Math.round(512*o/r),size:Math.round(380*o/r),color:"#fff8e0",bg:a}),roughness:.7}));l.position.set(n,t,e),l.rotation.y=i,w.bake(l)}function ds(n,t,e,i,s){let r=Math.hypot(e-n,i-t),o=Math.abs(e-n)>Math.abs(i-t);w.box(_.steel,(n+e)/2,s+1,(t+i)/2,o?r:.06,.06,o?.06:r,{collide:!1}),w.box(_.steel,(n+e)/2,s+.5,(t+i)/2,o?r:.04,.04,o?.04:r,{collide:!1});let a=Math.ceil(r/1.2);for(let l=0;l<=a;l++){let c=l/a;w.box(_.steel,n+(e-n)*c,s+.5,t+(i-t)*c,.05,1,.05,{collide:!1})}w.col(Math.min(n,e)-.04,s,Math.min(t,i)-.04,Math.max(n,e)+.04,s+1.05,Math.max(t,i)+.04,{bullet:!1,surf:"metal"})}function ks(n,t,e,i){let s=Xt(i,{roughness:.5});for(let r=0;r<e;r++)w.box(s,n,.18+r*.36,t,.62,.34,.44,{surf:"metal",collide:!1}),w.box(_.darkTrim,n,.33+r*.36,t,.64,.03,.46,{collide:!1});w.col(n-.31,0,t-.22,n+.31,e*.36,t+.22,{surf:"metal"})}function uh(n,t,e,i,s,r="#fff6d0"){let o=new N(new He(.9,.42),new ee({map:Vi(s,{w:256,h:120,size:Math.min(64,Math.floor(230/s.length*1.15)),color:"#2a1a0a",bg:r}),roughness:.8,side:an}));o.position.set(n,t,e),o.rotation.y=i,w.bake(o)}function Ai(n,t,e,i){w.box(_.concrete,n,.35,t,e,.7,i,{surf:"concrete",uv:1}),w.box(_.dirt,n,.69,t,e-.16,.02,i-.16,{collide:!1});for(let s=0;s<Math.round(e*i*3);s++){let r=new N(new ei(.18+Ut()*.12,1),_.leaf);r.position.set(n-e/2+.2+Ut()*(e-.4),.85+Ut()*.2,t-i/2+.2+Ut()*(i-.4)),w.bake(r)}}function Wp(n,t){w.box(_.steel,n-1.4,1.2,t,.08,2.4,.08,{collide:!1}),w.box(_.steel,n+1.4,1.2,t,.08,2.4,.08,{collide:!1}),w.box(_.roof2,n,2.45,t+.3,3.2,.08,1.4,{collide:!1}),w.box(_.glass,n,1.3,t-.35,2.8,1.8,.04,{bullet:!1}),w.box(_.wood,n,.45,t,2.4,.08,.4,{collide:!1}),qn(n,2.15,t-.38,0,"\u5E02\u5834\u524D",1.4,.35,"#2a4a8a")}function yd(n,t,e,i){let s=new xt(.07,.07,Math.abs(e-t),10);s.rotateX(Math.PI/2);let r=new N(s,_.rust);r.position.set(n,i,(t+e)/2),w.bake(r)}function av(){zn(311),uh(-4.3,2,-3.1,Math.PI/2,"\u306B\u3093\u3058\u3093 98\u5186"),uh(-4.3,2,3.1,Math.PI/2,"\u306A\u3059 3\u672C150\u5186"),uh(4.6,2,-3.1,-Math.PI/2,"\u30D4\u30FC\u30DE\u30F3 5\u500B100\u5186"),uh(4.6,2,3.1,-Math.PI/2,"\u30C8\u30DE\u30C8 1\u7BB1500\u5186","#ffe0d0");for(let[t,e]of[[-4,-3],[4,-3],[-4,3],[4,3],[0,0]])w.box(_.darkTrim,t,3.75,e,.02,.7,.02,{collide:!1});w.box(_.paintwood,-5.6,.5,5.4,1.6,1,.7,{surf:"wood"}),w.box(_.black,-5.9,1.12,5.4,.4,.25,.35,{collide:!1}),qn(-5.6,1.6,5.06,Math.PI,"\u304A\u4F1A\u8A08",.9,.3,"#7a2a1a");for(let[t,e,i]of[[-2.9,-4.6,14174762],[-2.9,4.6,2779856],[3.1,1.6,2793546],[3.1,-1.7,15773728]])ks(t,e,2,i);qn(-8.86,3.1,.2,Math.PI/2,"\u671D\u3069\u308C\u91CE\u83DC",2.2,.55,"#3a7a2a"),qn(8.86,3.1,0,-Math.PI/2,"\u7523\u5730\u76F4\u9001",2,.55,"#b0402a");let n=Xt(11569754,{roughness:.9});w.box(n,-3.2,_d+.4,-6.4,.9,.8,.8,{surf:"wood"}),w.box(n,-5.8,_d+.35,-6.5,1.2,.7,.7,{surf:"wood"}),w.box(n,-5.8,_d+.95,-6.5,.8,.5,.6,{surf:"wood"}),Ai(-12,-19.6,3,1),Ai(12.5,-12.6,2.4,1);for(let t of[-20,-4,12])Gp(t,-20.6);for(let[t,e]of[[-20,-4],[-4,12]])for(let i of[-.85,0,.85])dh(t,e,7.93,-20.6+i);Ta(3.5,-20.4,.2),Ta(4.3,-20.4,.1),ph(-9.2,-11.9),Wp(-12,20.4),Ai(10.5,20.6,3,1),Ai(-4.5,11.6,2,.9),Ta(19.2,12,1.4),ph(11.4,11.9),yd(-23.45,-18,18,2.6),yd(-23.45,-18,18,2.85),yd(-21.05,-1.6,5.6,3.6),gh(-22.9,1),gh(-22.9,3);for(let[t,e,i,s]of[[22.3,-15,2793546,3],[22.9,-15,14174762,2],[22.6,-6.8,2779856,3],[22.6,3.6,15773728,2]]){let r=Xt(i,{roughness:.5});for(let o=0;o<s;o++)w.box(r,t,1.1+.18+o*.36,e,.62,.34,.44,{surf:"metal"})}qn(23.18,4.4,-11,-Math.PI/2,"\u642C\u5165\u53E3 1",1.8,.5,"#3a3a3a"),qn(23.18,4.4,1,-Math.PI/2,"\u642C\u5165\u53E3 2",1.8,.5,"#3a3a3a");for(let t=0;t<18;t++){let e=-20+Ut()*40,i=-20+Ut()*40;Math.abs(e)<9.5&&Math.abs(i)<7.5||w.box(_.darkTrim,e,.022,i,.6+Ut()*1.4,.002,.4+Ut()*1,{collide:!1,rotY:Ut()*3})}}var _d=2.4;function lv(n){zn(77);let t=new He(160,160,1,1);t.rotateX(-Math.PI/2),ui(t,160/5,160/5),w.addGeo(_.asphalt,t,new jt),w.box(_.concrete,0,.01,0,48,.02,44,{collide:!1,uv:3});for(let d of[-15,15])for(let f=-20;f<=20;f+=3)w.box(_.lineW,f,.025,d,.1,.004,2.6,{collide:!1});for(let d of[-11.5,11.5])w.box(_.lineY,0,.025,d,40,.004,.14,{collide:!1});let e=(d,f,p,x,m=3.2)=>w.box(_.brick,(d+p)/2,m/2,(f+x)/2,Math.abs(p-d),m,Math.abs(x-f),{uv:2.5,surf:"concrete"});e(-24.6,-22.6,24.6,-21.6),e(-24.6,21.6,24.6,22.6),e(-24.6,-21.6,-23.6,21.6),e(23.6,-21.6,24.6,21.6);for(let d of[-22.1,22.1])for(let f=-24;f<=24;f+=2)w.box(_.steel,f,3.8,d,.05,1.2,.05,{collide:!1});let i=4.2;w.box(_.tile,0,.02,0,18,.04,14,{collide:!1,uv:1.2}),Wn(-9,-7,7,0,i,-1,_.brick,_.plaster,[Sn(-4.2,1.4),Xn(.2,2.2,1.05,2.1),Sn(4.2,1.4)]),Wn(9,-7,7,0,i,1,_.brick,_.plaster,[Xn(-4.2,1.8),Sn(0,1.7),Xn(4.2,1.8)]),Nn(-7,-9,9,0,i,-1,_.brick,_.plaster,[{c:-6.2,w:1.6,b:2.95,t:3.8,win:1,noCurtain:1},{c:-3.6,w:1.4,b:2.95,t:3.8,win:1,noCurtain:1},{c:2.2,w:4,b:0,t:2.8},Xn(6.4,1.6)]),Nn(7,-9,9,0,i,1,_.brick,_.plaster,[Sn(-5.6,1.3),{c:.5,w:4,b:0,t:1.3},Xn(5.8,1.6)]);for(let d=1.35;d<i-.1;d+=.16)w.box(_.metal,.5,d,7,3.96,.13,.05,{collide:!1});w.box(_.darkTrim,.5,1.33,7,4,.06,.12,{collide:!1}),w.box(_.roof2,0,i+.12,0,18.6,.24,14.6,{uv:3,surf:"metal"});for(let d of[-5,0,5])w.box(_.glass,d,i+.3,0,1.6,.12,12,{collide:!1});qn(2.2,3.4,-7.14,Math.PI,"\u30D9\u30B8\u9752\u679C\u5E02\u5834",4.6,.9,"#2a5a3a"),qn(.5,4.75,7.14,0,"VEGE MARKET",5.2,.8,"#7a2a1a");let s=[15231514,13642266,3840554],r=[3840554,12095584,9058976];hh(-4.3,-5,-1.2,-1,s),hh(-4.3,1.2,5,-1,r),hh(4.6,-5,-1.2,1,r),hh(4.6,1.2,5,1,s),sn(.2,-2.5,1),se(-.6,0,2.6,.9,.3);let o=2.4;w.box(_.floor,-5.5,o-.08,-6,7,.16,2,{surf:"wood",uv:1.5});for(let d of[-2.1])for(let f of[-5.1])w.box(_.steel,d,(o-.16)/2,f,.14,o-.16,.14,{surf:"metal"});ds(-2.05,-5,-2.05,-7,o),ds(-7.6,-5,-2.05,-5,o);let a=8,l=.72;for(let d=0;d<a;d++){let f=(d+1)*(o/a),p=.9-d*l;w.box(_.concrete,-8.25,f/2,p-l/2,1.3,f,l,{surf:"concrete",uv:1})}w.box(_.concrete,-8.25,o/2,-5.6,1.3,o,1.4,{surf:"concrete"}),ds(-7.55,.9,-7.55,-4.9,0);for(let[d,f]of[[-4,-3],[4,-3],[-4,3],[4,3],[0,0]]){let p=new N(new xt(.35,.45,.2,14),_.lampGlow);p.position.set(d,i-.25,f),w.bake(p)}w.box(_.sidingG,-17.75,2.4,2,6.5,4.8,8,{uv:2.5,surf:"concrete"}),w.box(_.roof,-17.75,4.9,2,7,.2,8.5,{collide:!1,uv:2});for(let d=.2;d<3;d+=.16)w.box(_.metal,-14.47,d,2,.05,.13,3.2,{collide:!1});qn(-14.4,3.5,2,Math.PI/2,"\u7B2C2\u5009\u5EAB",2.6,.7,"#3a3a3a"),Rd(-22.4,9.5,Math.PI/2),sn(-22.3,-5.5,2),se(-22.3,0,13.5,1.1),se(-22.3,1.1,13.5,.9,.4),Aa(-11.2,11.6,0,15261904),sn(-11,4.8,2),sn(-12.5,-.5,1),se(-10.4,0,-.4,1),se(-11.2,0,8.2,1,.2),sn(-20,-14,2),sn(-18.6,-14,1),sn(-14.4,-9.8,2),se(-19.6,0,-7,1.1),se(-19.6,0,-5.9,1.1),se(-19.6,1.1,-6.45,1,.3),se(-13.6,0,-14.6,1,.2),Rd(-22.4,-10.5,Math.PI/2),co(-16,-16.5,0),co(-17.2,-16.5,2),Wi(n,"A",Ye.A);let c=1.1;w.box(_.concrete,21.3,c/2,-4.5,4.6,c,25,{surf:"concrete",uv:2}),w.box(_.darkTrim,19.02,c-.05,-4.5,.06,.1,25,{collide:!1});for(let d=0;d<4;d++){let f=(d+1)*c/4;w.box(_.concrete,21.3,f/2,8+(3-d)*.5+.25+0,4.6,f,.5,{surf:"concrete"})}w.box(_.sidingB,23.4,c+2.2,-4.5,.4,4.4,25,{uv:2.5}),w.box(_.roof2,21.8,c+3.6,-4.5,3.6,.15,25,{collide:!1,uv:2});for(let d of[-14,-8,-2,4])for(let f=c+.2;f<c+3;f+=.16)w.box(_.metal,23.17,f,d,.05,.13,3,{collide:!1});Aa(14.2,-5.6,0,15921902),Aa(14.2,1.8,0,9091146),sn(21,-12,2),sn(20.4,1,1),sn(22.4,5.6,2),Ld(13.4,-14,0),sn(16.6,-16,2),sn(11,-10.6,1),se(17.4,0,-10.2,1,.3),se(18.4,0,-10.2,1),Wi(n,"B",Ye.B),Un(-6,-15,Math.PI/2,_.carBlue),Un(6.5,-16.5,Math.PI/2,_.carRed,!0),Dn(.5,-11,Math.PI/2),ho(-2.4,-20.8,0,13642282),ho(-1.3,-20.8,0,2779856),ii(9.8,-19.8,2779706),ii(10.6,-19.8,2771594),Un(-2,15,Math.PI/2,_.carWhite),Un(8.2,13.5,-Math.PI/2,_.carRed),Dn(-7,11,Math.PI/2),Dn(5,10.5,0),ho(16,20.8,Math.PI,2793546),ii(-8,20,2779706),sn(14.5,10.8,1),se(-15.5,0,17,1.1),se(-14.4,0,17,1.1),se(-15,1.1,17,1,.3);for(let d of[-18,-6,6,18])Hs(d,d<0?-19.5:19.5,d<0?1:-1);av();let h=new It;zn(5);for(let d=0;d<22;d++){let f=d/22*Math.PI*2,p=46+Ut()*10,x=Math.round((8+Ut()*14)/3)*3;xh(h,Math.cos(f)*p,Math.sin(f)*p,-f,9,x,8,["office","brick","apt","concrete"][d%4])}w.bake(h),w.col(-40,0,-40,he.minX-.6,20,40,{bullet:!1}),w.col(he.maxX+.6,0,-40,40,20,40,{bullet:!1}),w.col(-40,0,-40,40,20,he.minZ-.6,{bullet:!1}),w.col(-40,0,he.maxZ+.6,40,20,40,{bullet:!1});let u=w.finish(n);for(let[d,f]of[[-4,-3],[4,-3],[-4,3],[4,3]]){let p=new Pn(16773328,9,10,1.6);p.position.set(d,3.6,f),n.add(p)}{let d=new Pn(16769200,5,8,1.6);d.position.set(-17.75,3.5,-6),n.add(d)}return{colliders:w.colliders,meshes:u}}function Md(n,t,e,i){let s=(n+t)/2,r=t-n,o=Xt(e,{roughness:.6,map:j.metal.map});w.box(o,s,2.17,0,r,2.24,2.8,{surf:"metal",uv:2}),w.box(_.darkTrim,s,1,0,r-.4,.1,2.6,{collide:!1});for(let a of[-1,1])w.box(_.darkTrim,s,.82,a*.9,r-.6,.22,.14,{collide:!1});for(let a=n+.5;a<t-.3;a+=.9)for(let l of[-1,1])w.box(_.darkTrim,a,2.17,l*1.42,.06,2.18,.04,{collide:!1});for(let a of[n+1.4,t-1.4]){w.box(_.black,a,.42,0,2,.24,2.2,{collide:!1});for(let l of[-.6,.6])for(let c of[-1,1]){let h=new N(new xt(.36,.36,.14,16),_.steel);h.rotation.x=Math.PI/2,h.position.set(a+l,.36,c*.72),w.bake(h)}}for(let a of[n,t])w.box(_.black,a,.75,0,.5,.2,.3,{collide:!1});if(i)for(let a of[-1,1])qn(s,2.3,a*1.43,a>0?0:Math.PI,i,3.2,.7,"rgba(0,0,0,0)")}function cv(n,t){let e=(n+t)/2,i=t-n,s=Xt(2775706,{roughness:.45,map:j.metal.map});w.box(s,e+.8,1.8,0,i-1.6,2.4,2.7,{surf:"metal"}),w.box(s,n+.8,2.15,0,1.6,3.1,2.8,{surf:"metal"}),w.box(_.glass,n-.02,2.9,0,.04,.8,2.2,{collide:!1}),w.box(_.lineY,n-.03,1.1,0,.04,.3,2.6,{collide:!1});for(let r of[n+1.6,t-1.6])for(let o of[-.7,.7])for(let a of[-1,1]){let l=new N(new xt(.42,.42,.14,16),_.steel);l.rotation.x=Math.PI/2,l.position.set(r+o,.42,a*.75),w.bake(l)}}function $n(n,t,e,i,s){let r=Xt(s,{roughness:.55,map:j.metal.map}),o=i?6:2.44,a=i?2.44:6;w.box(r,n,t+1.3,e,o,2.6,a,{surf:"metal",uv:2});let l=Math.floor((i?o:a)/.4);for(let c=0;c<l;c++){let h=-((i?o:a)/2)+.2+c*.4;for(let u of[-1,1])w.box(_.darkTrim,n+(i?h:u*(o/2+.01)),t+1.3,e+(i?u*(a/2+.01):h),i?.05:.02,2.5,i?.02:.05,{collide:!1})}}function us(n,t,e){let i=Math.abs(Math.cos(e))>.5;w.box(_.wood,n,.45,t,i?1.8:.45,.06,i?.45:1.8,{surf:"wood"});for(let s of[-.7,.7])w.box(_.steel,n+(i?s:0),.22,t+(i?0:s),.05,.44,.05,{collide:!1})}function hv(n){zn(88);let t=new He(160,160,1,1);t.rotateX(-Math.PI/2),ui(t,160/5,160/5),w.addGeo(_.asphalt,t,new jt),w.box(_.concrete,0,.01,-11,48,.02,20,{collide:!1,uv:3}),w.box(_.concrete,0,.01,11,48,.02,20,{collide:!1,uv:3}),w.box(Xt(6973022,{roughness:1,map:j.concrete.map}),0,.03,0,48,.06,3.6,{collide:!1,uv:1});for(let l=-23.5;l<=23.5;l+=.7)w.box(_.wood,l,.08,0,.22,.06,2.6,{collide:!1});for(let l of[-1,1])w.box(_.steel,0,.14,l*.72,48,.08,.08,{collide:!1});for(let l of[-1,1])w.box(_.concrete,1,.21,l*3.4,30,.42,3,{surf:"concrete",uv:2}),w.box(_.lineY,1,.425,l*2.12,30,.004,.25,{collide:!1});let e=(l,c,h,u,d=3.2)=>w.box(_.brick,(l+h)/2,d/2,(c+u)/2,Math.abs(h-l),d,Math.abs(u-c),{uv:2.5});e(-24.6,-21.6,24.6,-20.6),e(-24.6,20.6,24.6,21.6),e(-24.6,-20.6,-23.6,20.6),e(23.6,-20.6,24.6,20.6),cv(-19.5,-12),Md(-11.2,-4.2,10107434,"VEGE CARGO"),Md(-2.8,5.4,3828282,"\u91CE\u83DC\u4FBF"),Md(6.8,14,9071162,""),$n(19,0,0,!0,2779808),w.box(_.concrete,23,.45,0,1.2,.9,1.6,{surf:"concrete"});let i=4,s=16.8;w.box(_.concrete,s,i-.1,0,1.8,.2,13,{surf:"concrete",uv:1.5});for(let l of[-5,5])w.box(_.concrete,s,(i-.2)/2,l,.4,i-.2,.4,{surf:"concrete"});ds(s-.9,-6.5,s-.9,6.5,i),ds(s+.9,-6.5,s+.9,6.5,i);for(let l of[-1,1])for(let c=0;c<10;c++){let h=i-c*.4,u=l*(6.5+c*.6+.3);w.box(_.concrete,s,h/2-0,u,1.8,h,.6,{surf:"concrete"})}qn(s,i+1.3,0,Math.PI/2,"\u8DE8\u7DDA\u6A4B",1.6,.4,"#2a4a8a"),w.box(_.steel,s,i+.9,0,.06,1.4,.06,{collide:!1});let r=3.6;w.box(_.floor,-18.3,.02,-9.7,10.6,.04,8.6,{collide:!1,uv:1.5}),Nn(-14,-23.6,-13,0,r,-1,_.sidingY,_.plaster,[Xn(-20.5,1.8),Sn(-15.5,1.4)]),Nn(-5.4,-23.6,-13,0,r,1,_.sidingY,_.plaster,[Sn(-21,1.6),Xn(-18,2),Sn(-14.6,1.4)]),Wn(-13,-14,-5.4,0,r,1,_.sidingY,_.plaster,[Xn(-11.8,1.6),Sn(-8.2,1.5)]),w.box(_.roof,-18.3,r+.15,-9.7,11.4,.3,9.4,{uv:2}),qn(-18.3,r-.6,-5.27,0,"\u3079\u3058\u8CA8\u7269\u99C5",3.4,.7,"#3a3a3a"),us(-20.5,-12.6,0),us(-17.5,-12.6,0),us(-21.5,-8.6,Math.PI/2),ho(-14.2,-12.8,Math.PI/2,2779856),w.box(_.steel,-16.6,.5,-7.2,.3,1,1.6,{surf:"metal"}),w.box(_.steel,-18.6,.5,-7.2,.3,1,1.6,{surf:"metal"}),w.box(_.paintwood,-22.6,.55,-10.5,1.2,1.1,2.4,{surf:"wood"}),Wi(n,"A",Ye.A);{let l=new Pn(16773328,7,10,1.6);l.position.set(-18.3,3.1,-9.7),n.add(l)}$n(13,0,-16.5,!0,11553322),$n(13,2.6,-16.5,!0,2783834),$n(21,0,-11.5,!1,3824282),$n(9,0,-9,!1,13146666),sn(16.5,-8.4,2),sn(18.4,-14.5,1),ks(14.2,-11,3,2793546),Cd(9,-6+3.85,0,-1,2.6,1),ds(7.78,-6,7.78,-12,2.6),Ld(17,-12,0),Wi(n,"B",Ye.B),Un(-4,-17.2,Math.PI/2,_.carWhite),Dn(2.8,-11.5,0),Dn(-6.5,-9.5,Math.PI/2),se(4.2,0,-8,1.1),se(5.3,0,-8,1.1),se(4.75,1.1,-8,1,.3),ii(-10.5,-19.8,2779706),ho(.5,-19.9,0,13642282),Ai(8,-19.6,3,1),us(-1,-4,0),us(8,-4,0),w.box(_.sidingB,-17.5,1.5,15.5,5,3,4,{uv:2}),w.box(_.roof2,-17.5,3.1,15.2,5.6,.2,4.8,{collide:!1}),qn(-17.5,2.4,13.48,Math.PI,"\u58F2\u5E97",1.6,.5,"#7a2a1a"),Un(-6,14.5,Math.PI/2,_.carRed),Un(6,15.5,-Math.PI/2,_.carBlue,!0),Un(13,14,Math.PI/2,_.carWhite),Dn(-1,9,0),Dn(9.5,9.5,Math.PI/2),se(-10.5,0,8.2,1.1),se(-10.5,0,9.3,1.1),sn(3.5,8.5,2),ks(-13.2,8.6,3,14174762),us(-6,4,0),us(4,4,0),Wp(14,19.9);for(let l of[-20,0,20])Hs(l,l<=0?19.2:-19.2,l<=0?-1:1);for(let l of[-1,1]){w.box(_.roof2,-2,3.4,l*3.6,18,.12,2.6,{collide:!1});for(let c of[-10,-2,6])w.box(_.steel,c,1.9,l*4.3,.16,3,.16,{surf:"metal"})}let o=new It;zn(6);for(let l=0;l<22;l++){let c=l/22*Math.PI*2,h=46+Ut()*10,u=Math.round((6+Ut()*12)/3)*3;xh(o,Math.cos(c)*h,Math.sin(c)*h,-c,9,u,8,["brick","apt","concrete","office"][l%4])}w.bake(o),w.col(-40,0,-40,he.minX-.6,20,40,{bullet:!1}),w.col(he.maxX+.6,0,-40,40,20,40,{bullet:!1}),w.col(-40,0,-40,40,20,he.minZ-.6,{bullet:!1}),w.col(-40,0,he.maxZ+.6,40,20,40,{bullet:!1});let a=w.finish(n);return{colliders:w.colliders,meshes:a}}function Up(n,t,e,i){let s=Xt(i,{roughness:.55,map:j.metal.map}),r=6,o=2.44,a=2.6,l=.08;if(e){for(let h of[-1,1])w.box(s,n,a/2,t+h*(o/2-l/2),r,a,l,{surf:"metal"});w.box(s,n,a-l/2,t,r,l,o,{surf:"metal"}),w.box(_.wood,n,.03,t,r-.1,.06,o-.2,{collide:!1});for(let h of[-1,1])for(let u of[-1,1])w.box(s,n+h*(r/2+.25),1.3,t+u*(o/2+.25),.06,2.4,.9,{collide:!1,rotY:u*h*.5})}else{for(let h of[-1,1])w.box(s,n+h*(o/2-l/2),a/2,t,l,a,r,{surf:"metal"});w.box(s,n,a-l/2,t,o,l,r,{surf:"metal"}),w.box(_.wood,n,.03,t,o-.2,.06,r-.1,{collide:!1})}let c=new N(new xt(.12,.12,.05,10),_.lampGlow);c.position.set(n,a-.12,t),w.bake(c)}function uv(n,t){let e=new N(new xt(.22,.28,.6,12),_.black);e.position.set(n,.3,t),w.bake(e),w.col(n-.25,0,t-.25,n+.25,.6,t+.25,{surf:"metal"})}function dv(n,t){let e=Xt(15249440,{roughness:.5,map:j.metal.map});for(let i of[-5.5,5.5])for(let s of[-1.6,1.6])w.box(e,n+i,4.75,t+s,.6,9.5,.6,{surf:"metal"});for(let i of[-5.5,5.5])w.box(e,n+i,9.7,t,.7,.5,3.8,{surf:"metal"});for(let i of[-1.6,1.6])w.box(e,n,9.9,t+i,12,.6,.5,{surf:"metal"});w.box(_.darkTrim,n-2,10.6,t,2.4,1.2,2,{collide:!1});for(let i of[-.6,.6])w.box(_.black,n+1.2,8.5,t+i,.03,2.4,.03,{collide:!1});$n(n+1.2,4.6,t,!0,2783904)}function Cd(n,t,e,i,s,r=1.1){let o=Math.ceil(s/.4),a=.55,l=_.steel;for(let h=0;h<o;h++){let u=Math.min(s,(h+1)*(s/o)),d=n+e*(h*a+a/2),f=t+i*(h*a+a/2),p=e!==0?a:r,x=i!==0?a:r;w.box(l,d,u-.04,f,p,.08,x,{collide:!1}),w.col(d-p/2,0,f-x/2,d+p/2,u,f+x/2,{surf:"metal"})}let c=o*a;for(let h of[-1,1]){let u=i!==0?h*r/2:0,d=e!==0?h*r/2:0,f=new xt(.025,.025,Math.hypot(c,s),6),p=new N(f,l);p.position.set(n+e*c/2+u,s/2+.9,t+i*c/2+d),p.rotation.set(i!==0?-Math.sign(i)*Math.atan2(c,s):0,0,e!==0?Math.sign(e)*Math.atan2(c,s):0),w.bake(p)}}function fv(n){zn(123);let t=new He(160,160,1,1);t.rotateX(-Math.PI/2),ui(t,160/5,160/5),w.addGeo(_.asphalt,t,new jt);let e=new N(new He(60,160),Xt(2775674,{roughness:.15,metalness:.3}));e.rotation.x=-Math.PI/2,e.position.set(54,-.6,0),w.bake(e),w.box(_.concrete,23.9,-.3,0,.8,.6,46,{collide:!1});for(let c of[-12,12])w.box(_.lineY,0,.02,c,44,.004,.16,{collide:!1});for(let c=-20;c<=20;c+=4)w.box(_.lineW,c,.02,0,.12,.004,3,{collide:!1});let i=(c,h,u,d,f=3)=>w.box(_.concrete,(c+u)/2,f/2,(h+d)/2,Math.abs(u-c),f,Math.abs(d-h),{uv:2.5});i(-24.6,-21.6,23.6,-20.6),i(-24.6,20.6,23.6,21.6),i(-24.6,-20.6,-23.6,20.6),ds(23.4,-20.6,23.4,20.6,0);for(let c of[-17,-9,-1,7,15])uv(22.6,c);let s=3.4;w.box(_.floor,-19.8,.02,-11.5,7.6,.04,9,{collide:!1,uv:1.5}),Wn(-16,-16,-7,0,s,1,_.sidingB,_.plaster,[Sn(-13.5,1.4),Xn(-9.6,1.8)]),Nn(-7,-23.6,-16,0,s,1,_.sidingB,_.plaster,[Xn(-21.5,1.6),Sn(-18,1.4)]),Nn(-16,-23.6,-16,0,s,-1,_.sidingB,_.plaster,[Xn(-19.8,2)]),w.box(_.roof2,-19.8,s+.15,-11.5,8.2,.3,9.6,{uv:2}),Bs(-20.5,-12.5,1.6,.8,.76),Ri(-20.5,-13.3,0),Ri(-19.6,-11.7,Math.PI),Ra(-23.2,-9.5,Math.PI/2),qn(-16.15,2.7,-11.5,Math.PI/2,"\u6E2F\u6E7E\u4E8B\u52D9\u6240",2.4,.55,"#2a4a7a");{let c=new Pn(16773328,6,9,1.6);c.position.set(-19.8,3,-11.5),n.add(c)}sn(-13,-16.8,2),sn(-11.6,-16.8,1),ks(-9.6,-14.6,3,2779856),se(-12.6,0,-8.6,1.1),se(-12.6,1.1,-8.6,.9,.3),Rd(-21.5,-4.8,0),Wi(n,"A",Ye.A),Up(-14.5,-4.6,!0,11553322),$n(-3,0,-5.2,!0,2783834),$n(-3,2.6,-5.2,!0,9071162),$n(8.5,0,-4.8,!0,3824282),$n(-10,0,5,!0,13146666),Up(1.5,4.6,!0,2779808),$n(13,0,5.2,!0,10107434),$n(13,2.6,5.2,!0,2783834),$n(-19.5,0,6.5,!1,8026746),$n(19,0,-7,!1,11553322),Cd(-10,6.22+3.85,0,-1,2.6),Cd(8.5,-6.02-3.85,0,1,2.6),ds(-13,3.78,-7,3.78,2.6),ds(5.5,-3.58,11.5,-3.58,2.6),dv(0,0),se(-6,0,.6,1.1),se(-6,0,-.5,1.1),sn(4.8,-.8,1),Dn(9,.6,0),Ld(-15,.6,0),ks(17.2,.4,3,15773728),sn(14.8,-15.6,2),sn(16.2,-15.6,2),se(19.6,0,-12,1.1),se(19.6,0,-10.9,1.1),se(19.6,1.1,-11.45,1,.3),ks(12,-10.4,2,14174762),co(16,-9.4,1),Wi(n,"B",Ye.B),Aa(-4,-15.8,0,15921902),Un(9,-17,Math.PI/2,_.carBlue),ho(-14.2,-20,0,13642282),ii(5,-20,2779706),w.box(_.sidingG,-16.5,1.4,16.5,3,2.8,3,{uv:2}),w.box(_.roof2,-16.5,2.95,16.5,3.6,.15,3.6,{collide:!1}),qn(-16.5,2.3,14.97,Math.PI,"\u5B88\u885B\u5BA4",1.4,.4,"#3a3a3a"),Aa(6,15.5,0,9091146),Un(-6.5,14,Math.PI/2,_.carRed),Dn(-1.5,10.5,Math.PI/2),Dn(16,11,0),sn(-11.5,10.6,2),se(18.5,0,16.5,1.1);for(let c of[-20,-2,16])Hs(c,c<0?19.6:-19.6,c<0?-1:1);let r=new It;zn(7);for(let c=0;c<16;c++){let h=Math.PI*.55+c/16*Math.PI*.9,u=46+Ut()*8,d=Math.round((7+Ut()*9)/3)*3;xh(r,Math.cos(h)*u,Math.sin(h)*u,-h,10,d,9,["concrete","brick","office","apt"][c%4])}let o=new N(it(40,6,9,3),Xt(2767450,{roughness:.6}));o.position.set(48,2,-6),r.add(o);let a=new N(it(8,7,7,3),_.white);a.position.set(62,8.5,-6),r.add(a),w.bake(r),w.col(-40,0,-40,he.minX-.6,20,40,{bullet:!1}),w.col(he.maxX+.6,0,-40,40,20,40,{bullet:!1}),w.col(-40,0,-40,40,20,he.minZ-.6,{bullet:!1}),w.col(-40,0,he.maxZ+.6,40,20,40,{bullet:!1});let l=w.finish(n);return{colliders:w.colliders,meshes:l}}function Fp(n,t,e){let i=new It,s=new N(it(.7,.08,1.4,1),_.white);s.position.set(0,.36,.15),i.add(s);let r=new N(it(.7,.08,.7,1),_.white);r.position.set(0,.55,-.75),r.rotation.x=.7,i.add(r);let o=new N(it(.62,.06,1.3,1),Xt(2783920));o.position.set(0,.43,.15),i.add(o);for(let l of[-.3,.3])for(let c of[-.5,.75]){let h=new N(it(.05,.34,.05,1),_.steel);h.position.set(l,.17,c),i.add(h)}i.position.set(n,0,t),i.rotation.y=e,w.bake(i);let a=Math.abs(Math.sin(e))>.5;w.col(n-(a?1:.38),0,t-(a?.38:1),n+(a?1:.38),.6,t+(a?.38:1),{surf:"metal"})}function Op(n,t,e){let i=new N(new xt(.04,.04,2.4,8),_.steel);i.position.set(n,1.2,t),w.bake(i);let s=new N(new jn(1.4,.5,8,1,!0),Xt(e,{side:an,roughness:.9}));s.position.set(n,2.45,t),w.bake(s),w.col(n-.05,0,t-.05,n+.05,2.4,t+.05,{surf:"metal"})}function Bp(n,t,e,i,s,r=[]){let o=Math.abs(e-n)>Math.abs(i-t),a=o?n:t,l=o?e:i,c=o?t:n,h=Xt(10133668,{wireframe:!0,metalness:.6});for(let u of Pd(a,l,r.map(([d,f])=>({c:(d+f)/2,w:f-d})))){if(u.op)continue;let d=u.b-u.a,f=(u.a+u.b)/2,p=new He(d,s,Math.max(1,Math.round(d/.25)),Math.round(s/.25)),x=new N(p,h);x.position.set(o?f:c,s/2,o?c:f),o||(x.rotation.y=Math.PI/2),w.bake(x);for(let m of[u.a,u.b])w.box(_.steel,o?m:c,s/2,o?c:m,.07,s,.07,{collide:!1});w.box(_.steel,o?f:c,s,o?c:f,o?d:.06,.06,o?.06:d,{collide:!1}),o?w.col(u.a,0,c-.05,u.b,s,c+.05,{bullet:!1,surf:"metal"}):w.col(c-.05,0,u.a,c+.05,s,u.b,{bullet:!1,surf:"metal"})}}function pv(n,t){let e=_.concrete,i=new N(new xt(1.9,2,.6,28),e);i.position.set(n,.3,t),w.bake(i);let s=new N(new xt(1.7,1.7,.05,28),Xt(3840712,{roughness:.08,metalness:.3}));s.position.set(n,.52,t),w.bake(s);let r=new N(new xt(.25,.35,1.6,14),e);r.position.set(n,1.1,t),w.bake(r);let o=new N(new xt(.8,.4,.3,20),e);o.position.set(n,1.95,t),w.bake(o);let a=new N(new xe(.42,16,12),Xt(14191152,{roughness:.6}));a.scale.set(1,.75,1),a.position.set(n,2.38,t),w.bake(a),w.col(n-1.4,0,t-1.4,n+1.4,.6,t+1.4,{surf:"concrete"}),w.col(n-.35,0,t-.35,n+.35,2.6,t+.35,{surf:"concrete"})}function mv(n){zn(77);let t=new He(160,160,1,1);t.rotateX(-Math.PI/2),ui(t,160/4,160/4),w.addGeo(_.grass,t,new jt);let e=3.4,i=(l,c,h,u,d=3)=>{w.box(_.plaster,(l+h)/2,d/2,(c+u)/2,Math.abs(h-l),d,Math.abs(u-c),{uv:2.5}),w.box(_.roof,(l+h)/2,d+.08,(c+u)/2,Math.abs(h-l)+.2,.16,Math.abs(u-c)+.2,{collide:!1})};i(-24.6,-21.6,23.6,-20.6),i(-24.6,20.6,-3.5,21.6),i(3.5,20.6,23.6,21.6),i(22.6,-20.6,23.6,20.6),i(-24.6,-20.6,-23.6,20.6);for(let l of[-3.5,3.5])w.box(_.brick,l,1.6,21.1,.9,3.2,1,{uv:1.5});w.box(_.black,0,1.2,21.1,6.1,2.4,.08,{bullet:!1});for(let l=-2.8;l<=2.8;l+=.4)w.box(_.black,l,1.3,21,.05,2.6,.05,{collide:!1});w.box(_.floor,-17.3,.02,-1,12.6,.04,14,{collide:!1,uv:1.5}),Wn(-11,-8,6,0,e,1,_.plaster,_.plaster,[Sn(-5,2.6),Xn(-.6,2.2,.5,2.6),Sn(3.4,1.4)]),Nn(-8,-23.6,-11,0,e,-1,_.plaster,_.plaster,[Xn(-20.5,1.8),Sn(-14.2,1.4)]),Nn(6,-23.6,-11,0,e,1,_.plaster,_.plaster,[Sn(-20,1.4),Xn(-14,2)]),Wn(-23.6,-8,6,0,e,-1,_.plaster,_.plaster,[]),Wn(-17.2,-8,6,0,e,1,_.plasterG,_.plasterG,[Sn(-5.2,1.3),Sn(3,1.3)]),w.box(_.trim,-17.3,e+.15,-1,13.4,.3,14.8,{uv:2}),w.box(_.trim,-17.3,e+.45,-1,13.6,.3,.3,{collide:!1}),vd(-14,1,Math.PI/2,_.fabricO),Bs(-15,1,.7,1.2,.42),Sd(-14.6,1,3,3.4,_.carpetB),Ed(-16.95,1,Math.PI/2),fh(-11.6,5.4),fh(-16.6,-7.4),Bs(-14,-4.5,1.8,1,.95,_.tile),Ri(-14,-5.4,0),Ri(-14,-3.6,Math.PI),Sa(-16.95,1.8,-2.5,Math.PI/2,_.paint1),bd(-23.3,-19,-8,-1),Bs(-20.4,-4,1.4,.9,.76),Ri(-20.4,-4.8,0),Ri(-20.4,-3.2,Math.PI),wd(-20.4,3.2,0),Ra(-23.2,0,Math.PI/2),Sa(-23.45,1.7,3,Math.PI/2,_.paint2);for(let[l,c]of[[-14.2,-1],[-20.4,-1]]){let h=new Pn(16769200,6,10,1.6);h.position.set(l,3,c),n.add(h)}w.box(_.tile,-17.3,.02,-14.5,12.6,.04,11,{collide:!1,uv:2}),Wi(n,"A",Ye.A),w.box(_.brick,-21.5,.5,-15.5,2.6,1,.8,{uv:1.5}),w.box(_.tile,-21.5,1.03,-15.5,2.8,.06,1,{collide:!1}),Td(-20.6,-15.5),Ad(-21,-11.5),Ai(-13.5,-18,2.6,1),Ai(-13,-11,1,2.4),se(-18.6,0,-18.8,1.1),se(-17.5,0,-18.8,1.1),se(-18,1.1,-18.8,.9,.3),w.box(_.brick,-9.6,.5,-17.5,.5,1,5,{uv:1.5}),w.box(_.brick,-9.6,.5,-10.6,.5,1,3.6,{uv:1.5}),Vn(-22,-19.4,.9,11),w.box(_.tile,-.5,.02,-2.5,16,.04,12,{collide:!1,uv:2});let s=new N(new He(10.2,6.2),Xt(3844312,{roughness:.05,metalness:.2,transparent:!0,opacity:.88}));s.rotation.x=-Math.PI/2,s.position.set(-.5,.22,-2.5),w.bake(s);let r=Xt(8048872,{roughness:.3});w.box(r,-.5,0,-2.5,10.2,.02,6.2,{collide:!1});for(let[l,c,h,u]of[[-.5,-5.8,11,.4],[-.5,.8,11,.4],[-6,-2.5,.4,6.2],[5,-2.5,.4,6.2]])w.box(_.white,l,.18,c,h,.36,u,{surf:"concrete"});w.col(-5.6,0,-5.6,4.6,1,.6,{bullet:!1});for(let l of[-5.2,-2.6,0])Fp(-7.6,l,0);for(let l of[-4.6,-1])Fp(6.6,l,Math.PI);Op(-7.6,-3.9,15227450),Op(6.6,-2.8,15908912);for(let[l,c]of[[-3,-15],[3,-15],[-3,-10.6],[3,-10.6]])w.box(_.wood,l,1.4,c,.25,2.8,.25,{surf:"wood"});w.box(_.roof,0,2.95,-12.8,7,.25,5.4,{uv:2}),w.box(_.wood,0,.55,-15,6,1.1,.2,{surf:"wood"}),w.box(_.wood,-3,.55,-13.6,.2,1.1,2.8,{surf:"wood"}),w.box(_.wood,3,.55,-12,.2,1.1,2.8,{surf:"wood"}),w.box(_.paintwood,0,.55,-12.4,3,1.1,.6,{surf:"wood"}),w.box(_.tile,0,1.12,-12.4,3.2,.05,.7,{collide:!1});for(let l of[-1,0,1]){let c=new N(new xt(.2,.2,.7,12),_.darkTrim);c.position.set(l,.35,-11.5),w.bake(c)}{let l=new Pn(16767136,4,7,1.6);l.position.set(0,2.6,-12.8),n.add(l)}Ln(-9,3.2,-4,4,1.5),Ln(1.5,3.2,6.5,4,1.5),w.box(_.concrete,11,.02,2.5,6,.04,7,{collide:!1,uv:2}),Wn(8,-1,6,0,3,-1,_.plaster,_.plaster,[Xn(2.5,1.6)]),Wn(14,-1,6,0,3,1,_.plaster,_.plaster,[]),Nn(-1,8,14,0,3,-1,_.plaster,_.plaster,[Sn(12.2,1.2)]),Nn(6,8,14,0,3,1,_.plaster,_.plaster,[{c:11,w:4.6,b:0,t:2.5}]),w.box(_.roof2,11,3.15,2.5,6.6,.3,7.6,{uv:2}),Un(11,2.4,Math.PI/2,_.carRed),Ra(13.6,.5,-Math.PI/2),w.box(Xt(2775674,{roughness:.8}),15.8,.02,-13.3,13.4,.04,14.4,{collide:!1}),w.box(Xt(11556410,{roughness:.8}),15.8,.025,-13.3,11,.04,12,{collide:!1});for(let l of[-19.3,-7.3])w.box(_.lineW,15.8,.05,l,11,.004,.1,{collide:!1});for(let l of[10.3,21.3])w.box(_.lineW,l,.05,-13.3,.1,.004,12,{collide:!1});w.box(_.lineW,15.8,.05,-13.3,11,.004,.1,{collide:!1}),mh(15.8,-20.2,0),mh(15.8,-6.4,Math.PI),w.col(15.7,0,-20.4,15.9,3.2,-20,{surf:"metal"}),w.col(15.7,0,-6.6,15.9,3.2,-6.2,{surf:"metal"}),Bp(9,-20.6,9,-6,3,[[-17,-15.4],[-10,-8.4]]),Bp(9,-6,22.6,-6,3,[[12,13.6],[18.6,20.2]]),Wi(n,"B",Ye.B),us(11,-18.6,0),us(20.8,-11,Math.PI/2),se(19.8,0,-16.6,1.1),se(19.8,0,-15.5,1.1),se(19.8,1.1,-16.05,1,.3),ks(12.2,-11,2,15773728),ks(12.9,-11,3,2779856),Ln(15,-3.5,22.6,-2.8,1.6),ii(7.2,-1.8,2779706),ii(7.2,-2.6,5921370),Ln(-7.5,-18.2,-4,-17.5,1.4),Ln(4,-18.2,7.5,-17.5,1.4),Vn(6.6,-19.4,.9,12),Ai(-6.5,-8.6,2.4,1),Ai(5.5,-8.6,2.4,1),w.box(_.concrete,0,.02,14,12,.04,13.2,{collide:!1,uv:2}),pv(0,12.8),Un(-7.8,16.4,0,_.carWhite),Un(8.4,17.2,0,_.carBlue,!0),Ln(-23.6,8.6,-12,9.4,1.6),Ln(12,8.6,22.6,9.4,1.6),Ai(-10.2,12,1,2.6),Ai(10.2,12,1,2.6),se(-17,0,14.5,1.1),se(-17,0,15.6,1.1),se(16.5,0,13,1.1),Dn(18,17,0),Vn(-21.5,18.5,1,13),Vn(21,13,1,14),Vn(-14.5,19.2,.8,15);for(let[l,c,h]of[[-12,20.2,-1],[12,20.2,-1]])Hs(l,c,h);let o=new It;zn(31);for(let l=0;l<18;l++){let c=l/18*Math.PI*2,h=50+Ut()*10;xh(o,Math.cos(c)*h,Math.sin(c)*h,-c,9,6+Math.round(Ut()*2)*3,8,["apt","concrete","office"][l%3])}w.bake(o);for(let l=0;l<24;l++){let c=l/24*Math.PI*2+.13;Vn(Math.cos(c)*(36+Ut()*6),Math.sin(c)*(34+Ut()*6),1.3+Ut()*.5,50+l)}w.colliders=w.colliders.filter(l=>l.min.x>-32&&l.max.x<32&&l.min.z>-30&&l.max.z<30),w.col(-40,0,-40,he.minX-.6,20,40,{bullet:!1}),w.col(he.maxX+.6,0,-40,40,20,40,{bullet:!1}),w.col(-40,0,-40,40,20,he.minZ-.6,{bullet:!1}),w.col(-40,0,he.maxZ+.6,40,20,40,{bullet:!1});let a=w.finish(n);return{colliders:w.colliders,meshes:a}}var Pa;function Dd(){return Pa||(Pa={stock:new ee({map:j.polymer.map,normalMap:j.polymer.normalMap,color:6975560,roughness:.75}),stockDark:new ee({map:j.polymer.map,normalMap:j.polymer.normalMap,color:2895398,roughness:.8}),metal:new ee({map:j.gunmetal.map,normalMap:j.gunmetal.normalMap,color:3816768,metalness:.85,roughness:.38}),metalDark:new ee({map:j.gunmetal.map,color:1842463,metalness:.8,roughness:.45}),bright:new ee({color:13159632,metalness:1,roughness:.2}),rubber:new ee({color:1315860,roughness:.95}),lens:new Hi({color:3170464,metalness:.9,roughness:.02,clearcoat:1,iridescence:1,iridescenceIOR:1.6,emissive:530480}),orange:new ee({color:15759898,roughness:.5}),brass:new ee({color:14198848,metalness:1,roughness:.25})},Pa.decal=new ee({map:Vi("VW",{w:128,h:64,size:44,bg:"rgba(0,0,0,0)",color:"#f07a1a",weight:900}),transparent:!0,roughness:.6}),Pa)}var si=(n,t,e,i,s=16)=>{let r=new xt(n,t,e,s);return r.rotateX(Math.PI/2),new N(r,i)},Ia=[{id:"olive",name:"\u30AA\u30EA\u30FC\u30D6"},{id:"camoWood",name:"\u30A6\u30C3\u30C9\u30E9\u30F3\u30C9"},{id:"camoDesert",name:"\u30C7\u30B6\u30FC\u30C8"},{id:"camoUrban",name:"\u30A2\u30FC\u30D0\u30F3"},{id:"camoCarrot",name:"\u30AD\u30E3\u30ED\u30C3\u30C8"},{id:"gold",name:"\u30B4\u30FC\u30EB\u30C9"}],yh={};function gv(n){return n==="olive"||!n?Dd().stock:(yh[n]||(yh[n]=n==="gold"?new ee({color:15251520,metalness:1,roughness:.22,map:j.polymer.map,normalMap:j.polymer.normalMap}):new ee({map:j[n].map,normalMap:j.polymer.normalMap,roughness:.7})),yh[n])}function La(n=1,t="olive"){let e=Dd(),i=gv(t),s=new It,r=(K,Ot,pe,Yt,me=s)=>(K.position.set(Ot,pe,Yt),me.add(K),K),o=n>0?18:8,a=[[-.36,-.012],[-.1,-.012],[.16,-.012],[.22,-.022],[.3,.006],[.52,.012],[.555,0],[.565,-.13],[.5,-.142],[.3,-.088],[.235,-.082],[.215,-.175],[.165,-.185],[.145,-.07],[-.3,-.062],[-.36,-.046]],l=new ti;l.moveTo(a[0][0],a[0][1]);for(let K=1;K<a.length;K++)l.lineTo(a[K][0],a[K][1]);l.closePath();let c=new rr;c.absellipse(.2,-.048,.022,.016,0,Math.PI*2,!1,.4),l.holes.push(c);let h=new li(l,{depth:.046,bevelEnabled:!0,bevelSize:.008,bevelThickness:.009,bevelSegments:n>0?3:1,curveSegments:n>0?10:4});h.translate(0,0,-.023),h.rotateY(-Math.PI/2);let u=h.attributes.uv;for(let K=0;K<u.count;K++)u.setXY(K,u.getX(K)*3,u.getY(K)*3);r(new N(h,i),0,0,0);let d=new N(new de(.05,.022,.16),e.stockDark);r(d,0,.022,.42);for(let K of[.36,.48])r(si(.004,.004,.03,e.metal,6),0,.012,K).rotation.set(0,0,0);r(new N(new de(.058,.142,.022),e.rubber),0,-.066,.575);for(let K=0;K<6;K++)r(new N(new de(.06,.004,.03),e.stockDark),0,-.09-K*.015,.19-K*.004);for(let K=0;K<4;K++)for(let Ot of[-1,1])r(new N(new de(.004,.012,.04),e.stockDark),Ot*.032,-.035,-.28+K*.055);r(si(.024,.024,.28,e.metal,o),0,.012,.02),r(new N(new de(.04,.012,.28),e.metal),0,.034,.02);for(let K=0;K<12;K++)r(new N(new de(.044,.006,.012),e.metalDark),0,.043,-.1+K*.022);r(new N(new de(.004,.018,.06),e.metalDark),.024,.016,-.01);let f=si(.0105,.014,.66,e.metal,o);if(r(f,0,.012,-.44),n>0)for(let K=0;K<6;K++){let Ot=K/6*Math.PI*2,pe=new N(new de(.003,.003,.36),e.metalDark);pe.position.set(Math.cos(Ot)*.0125,.012+Math.sin(Ot)*.0125,-.45),s.add(pe)}let p=new It;r(p,0,.012,-.8),p.add(si(.017,.017,.07,e.metalDark,o));for(let K of[-.018,0,.018])for(let Ot of[-1,1]){let pe=new N(new de(.005,.02,.008),e.rubber);pe.position.set(Ot*.016,0,K),p.add(pe)}let x=new Xe;x.position.set(0,.012,-.84),s.add(x);let m=new It;r(m,0,.086,.03),m.add(si(.017,.017,.24,e.metalDark,o));let g=si(.03,.019,.07,e.metalDark,o);g.position.z=-.15,m.add(g);let M=si(.031,.031,.035,e.metalDark,o);M.position.z=-.2,m.add(M);let S=new N(new Bi(.027,o),e.lens);S.position.z=-.218,S.rotation.y=Math.PI,m.add(S);let v=si(.019,.024,.06,e.metalDark,o);v.position.z=.14,m.add(v);let C=si(.025,.025,.04,e.rubber,o);C.position.z=.185,m.add(C);let R=new N(new Bi(.02,o),e.lens);R.position.z=.206,m.add(R);let y=new N(new xt(.012,.012,.03,o),e.metal);y.position.set(0,.026,-.01),m.add(y);let b=new N(new xt(.012,.012,.03,o),e.metal);b.rotation.z=Math.PI/2,b.position.set(.026,0,-.01),m.add(b);let P=new N(new xt(.01,.01,.024,o),e.metal);if(P.rotation.z=Math.PI/2,P.position.set(-.024,0,-.01),m.add(P),n>0)for(let K=0;K<12;K++){let Ot=new N(new de(.002,.03,.003),e.bright),pe=K/12*Math.PI*2;Ot.position.set(Math.cos(pe)*.0125,.026,-.01+Math.sin(pe)*.0125),m.add(Ot)}let E=si(.0175,.0175,.006,e.orange,o);E.position.z=.1,m.add(E);for(let K of[-.07,.08]){let Ot=new N(new Je(.019,.005,6,o),e.metal);Ot.position.z=K,m.add(Ot);let pe=new N(new de(.03,.03,.018),e.metal);pe.position.set(0,-.03,K),m.add(pe);let Yt=new N(new xt(.004,.004,.036,6),e.bright);Yt.rotation.z=Math.PI/2,Yt.position.set(0,-.034,K),m.add(Yt)}let I=new It;r(I,0,.012,.12);let F=si(.012,.012,.12,e.bright,10);F.position.z=-.03,I.add(F);let B=new It;B.position.z=0,I.add(B);let D=new N(new xt(.0045,.0045,.065,8),e.metal);D.rotation.z=Math.PI/2-.35,D.position.set(.032,-.012,0),B.add(D);let G=new N(new xe(.011,12,10),e.metalDark);G.position.set(.063,-.024,0),B.add(G);let q=si(.014,.012,.03,e.metal,10);q.position.z=.04,I.add(q);let V=new Xe;V.position.set(.063,-.024,0),B.add(V);let ct=new It;r(ct,0,-.04,0);let J=new N(new de(.032,.07,.085),e.metalDark);J.position.y=-.03,J.rotation.x=-.08,ct.add(J);let rt=new N(new de(.036,.012,.09),e.stockDark);rt.position.y=-.068,ct.add(rt);let ot=new N(new Je(.03,.005,6,16,Math.PI),e.metal);ot.rotation.set(0,Math.PI/2,Math.PI),r(ot,0,-.068,.11);let Pt=new N(new de(.006,.026,.006),e.bright);Pt.rotation.x=.3,r(Pt,0,-.062,.11);for(let K of[-1,1]){let Ot=si(.005,.005,.2,e.metalDark,6);r(Ot,K*.012,-.07,-.2)}if(r(new N(new de(.04,.015,.03),e.metalDark),0,-.065,-.31),r(new N(new Je(.008,.002,4,10),e.metal),0,-.14,.48).rotation.y=Math.PI/2,n>0){let K=new N(new He(.08,.04),e.decal);K.position.set(.0325,-.04,.38),K.rotation.y=Math.PI/2,s.add(K)}let Zt=new Xe;Zt.position.set(0,-.11,.19),s.add(Zt);let tt=new Xe;tt.position.set(0,-.06,-.2),s.add(tt);let wt=new Xe;wt.position.set(.03,.02,-.01),s.add(wt);let Bt=new Xe;return Bt.position.set(0,.086,.35),s.add(Bt),s.traverse(K=>{K.isMesh&&(K.castShadow=!0,K.receiveShadow=!0)}),Ke(B),Ke(I,[B]),Ke(ct),Ke(p),Ke(m,[S]),Ke(s,[I,ct,m,p]),{root:s,muzzlePt:x,gripPt:Zt,forePt:tt,boltPt:V,ejectPt:wt,eyePt:Bt,lens:S,mag:ct,bolt:I,handle:B,setBolt(K){let Ot=K<.2?K/.2:K<.8?1:1-(K-.8)/.2,pe=K<.2?0:K<.5?(K-.2)/.3:K<.8?1-(K-.5)/.3:0;B.rotation.z=Ot*1.4,I.position.z=.12+pe*.09}}}var _h;function Xp(){let n=Dd();_h||(_h=new xt(.006,.007,.06,8),_h.rotateX(Math.PI/2));let t=new N(_h,n.brass);return t.castShadow=!0,t}var fo=[{id:"none",name:"\u306A\u3057"},{id:"helmet",name:"\u30D8\u30EB\u30E1\u30C3\u30C8"},{id:"beret",name:"\u30D9\u30EC\u30FC\u5E3D"},{id:"cap",name:"\u30AD\u30E3\u30C3\u30D7"},{id:"boonie",name:"\u30D6\u30FC\u30CB\u30FC\u30CF\u30C3\u30C8"}],$p={carrot:{name:"\u306B\u3093\u3058\u3093",color:"#f07a1a",height:1.05},tomato:{name:"\u30C8\u30DE\u30C8",color:"#d8231a",height:.82},potato:{name:"\u3058\u3083\u304C\u3044\u3082",color:"#c8a06a",height:.9},pepper:{name:"\u30D4\u30FC\u30DE\u30F3",color:"#2a8a1e",height:.88}},Mh={};function xv(n){if(Mh[n])return Mh[n];let t=j[n],e={carrot:.6,tomato:.18,potato:.9,pepper:.15}[n],i=new Hi({map:t.map,normalMap:t.normalMap,roughness:e,clearcoat:n==="tomato"||n==="pepper"?.8:0,clearcoatRoughness:.2,normalScale:new ht(1,1)}),s=new ee({map:j["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4});return Mh[n]={skin:i,flesh:s},Mh[n]}var fn,uo,Ud,Zp,Jp,Kp,Na,gr,jp;function Qp(){fn||(fn=new Hi({map:j.skin.map,normalMap:j.skin.normalMap,roughness:.5,color:15913144,sheen:.4,sheenColor:16751226}),uo=new ee({map:j.veggreen.map,normalMap:j.veggreen.normalMap,roughness:.6,side:an}),Ud=new Hi({color:16777215,roughness:.08,clearcoat:1}),Zp=new Hi({color:1118481,roughness:.05,clearcoat:1}),Jp=new ee({color:2759184,roughness:.9}),Kp=new ee({color:3803656,roughness:.6}),Na=new ee({map:j.polymer.map,normalMap:j.polymer.normalMap,color:5922880,roughness:.85}),gr=new ee({color:2763298,roughness:.8}),jp=new ee({color:15782080,roughness:.3}))}function yv(n){let t=ve(n.length*31+7,4,3),e,i;if(n==="carrot"){let d=[];for(let p=0;p<=40;p++){let x=p/40,m=-.14+x*1.05,g=.03+Math.pow(x,.55)*.2;x>.88&&(g*=Math.sqrt(Math.max(0,1-Math.pow((x-.88)/.12,2)))*.92+.08),x===1&&(g=0),x===0&&(g=0),d.push(new ht(g,m))}e=new ar(d,40),i=.55}else if(n==="tomato"){e=new xe(.42,48,32);let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),x=d.getY(f),m=d.getZ(f),g=Math.atan2(m,p),M=x/.42,S=1+Math.cos(g*6)*.035*(1-Math.abs(M)),v=x>0?.82:.9,C=x>.3?-.06*Math.pow((x-.3)/.12,2):0;p*=S,m*=S,x=x*v+C,d.setXYZ(f,p,x+.36,m)}i=.42}else if(n==="potato"){e=new xe(.34,48,32);let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),x=d.getY(f),m=d.getZ(f),g=1+(t((Math.atan2(m,p)/Math.PI+1)*.5,(x/.34+1)*.5)-.5)*.32;d.setXYZ(f,p*g*1.05,x*1.38*g+.42,m*g*.92)}i=.6}else{let d=[];for(let p=0;p<=36;p++){let x=p/36,m=-.02+x*.82,g=.06+Math.sin(Math.min(1,x*1.25)*Math.PI*.5)*.3;x>.85&&(g*=Math.sqrt(Math.max(0,1-Math.pow((x-.85)/.15,2)))*.6+.4),x===1&&(g=.12),x===0&&(g=0),d.push(new ht(g,m))}d.push(new ht(0,.76)),e=new ar(d,48);let f=e.attributes.position;for(let p=0;p<f.count;p++){let x=f.getX(p),m=f.getY(p),g=f.getZ(p),M=Math.atan2(g,x),S=1+Math.cos(M*4)*.09-(m<.1?Math.cos(M*4)*.4*(.1-m):0);f.setXYZ(p,x*S,m,g*S)}i=.52}if(n!=="potato"){let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),x=d.getY(f),m=d.getZ(f),g=1+(t((Math.atan2(m,p)/Math.PI+1)*.5,x*.8+.2)-.5)*.06;d.setXYZ(f,p*g,x,m*g)}}e.computeVertexNormals();let s=e.toNonIndexed(),r=s.attributes.position,o=s.attributes.normal,a=s.attributes.uv,l={p:[],n:[],u:[]},c={p:[],n:[],u:[]};for(let d=0;d<r.count;d+=3){let p=(r.getY(d)+r.getY(d+1)+r.getY(d+2))/3>i?l:c;for(let x=0;x<3;x++)p.p.push(r.getX(d+x),r.getY(d+x),r.getZ(d+x)),p.n.push(o.getX(d+x),o.getY(d+x),o.getZ(d+x)),p.u.push(a.getX(d+x),a.getY(d+x))}let h=d=>{let f=new Ze;return f.setAttribute("position",new le(d.p,3)),f.setAttribute("normal",new le(d.n,3)),f.setAttribute("uv",new le(d.u,2)),f},u=(d,f)=>{let p=0;for(let x=0;x<r.count;x++)if(Math.abs(r.getY(x)-d)<.04){let m=Math.atan2(r.getZ(x),r.getX(x));Math.abs((m-f+Math.PI*3)%(Math.PI*2)-Math.PI)<.25&&(p=Math.max(p,Math.hypot(r.getX(x),r.getZ(x))))}return p};return e.computeBoundingBox(),{upper:h(l),lower:h(c),split:i,radiusAt:u,top:e.boundingBox.max.y,bottom:e.boundingBox.min.y}}var Nd={};function Da(n,t,e){let i=n+JSON.stringify(t);if(!Nd[i]){let r=[];for(let l=0;l<=16;l++){let c=l/16,h=0;for(let u=0;u<t.length-1;u++){let[d,f]=t[u],[p,x]=t[u+1];if(c>=d&&c<=p){let m=(c-d)/(p-d),g=m*m*(3-2*m);h=f+(x-f)*g}}r.push(new ht(h,-c*n))}r.unshift(new ht(1e-4,0)),r.push(new ht(1e-4,-n));let a=new ar(r,14);a.computeVertexNormals(),Nd[i]=a}let s=new N(Nd[i],e);return s.castShadow=!0,s}function Ua(n,t,e,i=10){let s=new N(new as(n,t,4,i),e);return s.castShadow=!0,s}function tm(n,t){let e=new It,i=new N(new xe(.055,12,10),fn);i.scale.set(1,1.2,.55),i.position.y=-.05,i.castShadow=!0,e.add(i);let s=[];if(t>0){for(let a=0;a<4;a++){let l=new It;l.position.set((a-1.5)*.024,-.11,0);let c=Ua(.011,.035,fn,6);c.position.y=-.02,l.add(c);let h=new It;h.position.y=-.045,l.add(h);let u=Ua(.01,.028,fn,6);u.position.y=-.018,h.add(u),l.rotation.x=1.45,h.rotation.x=1.6,e.add(l),s.push(l)}let r=new It;r.position.set(n*.045,-.06,-.01),r.rotation.set(.9,0,n*.5);let o=Ua(.013,.04,fn,6);o.position.y=-.025,r.add(o),e.add(r)}else{let r=new N(new xe(.05,8,6),fn);r.position.set(0,-.11,.02),r.scale.set(1.1,.8,.9),e.add(r)}return e}function _v(){let n=new It,t=new N(new xe(.06,14,10),fn);t.scale.set(.95,.55,2),t.position.set(0,-.03,-.06),t.castShadow=!0,n.add(t);let e=new N(new xe(.05,10,8),fn);e.position.set(0,-.035,.02),n.add(e);for(let i=0;i<5;i++){let s=i===0?.019:.014-i*.0012,r=new N(new xe(s,8,6),fn);r.position.set((i-2)*.021,-.045+(i===0?.004:0),-.17+Math.abs(i-1)*.008),r.scale.set(1,.8,1.3),n.add(r);let o=new N(new xe(s*.6,6,4),jp);o.position.set(r.position.x,r.position.y+s*.45,r.position.z-s*.3),o.scale.set(1,.3,1),n.add(o)}return n}var em=new U,nm=new U,ZS=new on,im=new jt,vh=new U(0,-1,0);function bh(n,t,e){if(n.lost)return;let i=n.sh,s=i.parent;s.updateWorldMatrix(!0,!1);let r=im.copy(s.matrixWorld).invert(),o=em.copy(t).applyMatrix4(r).sub(i.position),a=nm.copy(e).applyMatrix4(r).sub(i.position),l=n.upLen,c=n.foLen,h=o.length();h=Math.min(h,l+c-.001),h=Math.max(h,.05);let u=o.clone().normalize(),d=(l*l+h*h-c*c)/(2*l*h),f=Math.acos(Math.max(-1,Math.min(1,d))),p=a.clone().sub(u.clone().multiplyScalar(a.dot(u))).normalize(),x=u.clone().multiplyScalar(Math.cos(f)*l).add(p.multiplyScalar(Math.sin(f)*l));i.quaternion.setFromUnitVectors(vh,x.clone().normalize());let m=o.clone().sub(x).applyQuaternion(i.quaternion.clone().invert());n.el.quaternion.setFromUnitVectors(vh,m.normalize())}var qp=new on,Yp=new on,JS=new jt,Fd={grip:[new U(0,1,0),new U(0,0,1),new U(1,0,0)],fore:[new U(.7071,0,-.7071),new U(.7071,0,.7071),new U(0,-1,0)]},sm={};for(let n in Fd)sm[n]=new on().setFromRotationMatrix(new jt().makeBasis(...Fd[n]));function Fa(n,t,e){n.lost||(n.wr.parent.getWorldQuaternion(qp),Yp.copy(t).multiply(sm[e]),n.wr.quaternion.copy(qp.invert().multiply(Yp)))}function Oa(n,t,e,i=1){let[,s,r]=Fd[e],o=s.clone().multiplyScalar(.065).add(r.clone().multiplyScalar(.03)).multiplyScalar(i);return n.clone().add(o.applyQuaternion(t))}function Od(n,t,e=.29,i=.26){Qp();let s=new It,r=Ua(.05,e-.07,fn);r.position.y=-e/2,s.add(r);let o=new It;o.position.y=-e,s.add(o);let a=new N(new xe(.048,10,8),fn);o.add(a);let l=Da(i,[[0,.046],[.2,.056],[.6,.045],[1,.036]],fn);o.add(l);let c=new It;c.position.y=-i,o.add(c);let h=tm(n,1);c.add(h);let u=new N(new xt(.058,.058,.05,14),new ee({color:t,roughness:.7,map:j.carpet.map}));u.position.y=-.16,o.add(u);let d=new N(new xe(.058,12,10),Na);return d.scale.set(1.02,1,.6),d.position.y=-.045,h.add(d),{side:n,sh:s,el:o,wr:c,hand:h,up:r,elb:a,upLen:e,foLen:i,lost:!1}}var Gs=class{constructor(t,e,i={}){Qp(),this.kind=t,this.team=e;let s=i.lod??1,r=i.camo||"olive",o=i.hat||"none",a=xv(t);this.root=new It,this.hips=new It,this.hips.position.y=.8,this.root.add(this.hips),this.spine=new It,this.hips.add(this.spine);let l=yv(t);this.geo=l,this.upper=new N(l.upper,a.skin),this.lower=new N(l.lower,a.skin);for(let P of[this.upper,this.lower])P.castShadow=!0,P.receiveShadow=!0,this.spine.add(P);this.bodyTop=l.top,this.split=l.split;let c=Math.max(.1,l.radiusAt(l.split,-Math.PI/2),l.radiusAt(l.split,0));this.cap=new N(new Bi(c*.98,24),a.flesh),this.cap.rotation.x=-Math.PI/2,this.cap.position.y=l.split,this.cap.visible=!1,this.spine.add(this.cap),this.splitR=c,this.face=new It,this.upper.add(this.face);let h={carrot:.68,tomato:.48,potato:.72,pepper:.6}[t],u=l.radiusAt(h,-Math.PI/2)||.25;this.eyes=[];for(let P of[-1,1]){let E=new It,I=P*.32;E.position.set(Math.sin(I)*u*.98,h,-Math.cos(I)*u*.98),E.rotation.y=-I;let F=new N(new xe(.055,16,12),Ud);F.scale.set(1,1.15,.55),E.add(F);let B=new N(new xe(.03,12,10),Zp);B.position.set(P*-.005,-.004,-.024),B.scale.set(1,1.1,.6),E.add(B);let D=new N(new xe(.008,6,4),Ud);D.position.set(.01,.012,-.045),E.add(D);let G=new N(new xe(.058,14,8,0,Math.PI*2,0,Math.PI*.42),a.skin);G.rotation.x=-.35,G.scale.set(1,1.15,.62),E.add(G);let q=Ua(.009,.06,Jp,6);q.rotation.z=Math.PI/2+P*.35,q.position.set(0,.075,-.02),E.add(q),this.face.add(E),this.eyes.push({g:E,lid:G})}let d=new N(new Je(.04,.009,6,16,Math.PI*.8),Kp),f=h-.11,p=l.radiusAt(f,-Math.PI/2)||u;if(d.position.set(0,f,-p*.99),d.rotation.set(0,0,Math.PI+Math.PI*.1),this.face.add(d),this.top=new It,this.top.position.y=l.top-.02,this.upper.add(this.top),t==="carrot")for(let P=0;P<7;P++){let E=new N(new xt(.008,.014,.35,5),uo),I=P/7*Math.PI*2;E.position.set(Math.cos(I)*.03,.15,Math.sin(I)*.03),E.rotation.set(Math.sin(I)*.4,0,-Math.cos(I)*.4),this.top.add(E);let F=new N(new xe(.06,8,6),uo);F.scale.set(.5,1.4,.15),F.position.set(Math.cos(I)*.1,.33,Math.sin(I)*.1),F.rotation.set(Math.sin(I)*.5,I,-Math.cos(I)*.5),this.top.add(F)}else if(t==="tomato"||t==="pepper"){let P=t==="tomato"?6:5;for(let I=0;I<P;I++){let F=I/P*Math.PI*2,B=new N(new jn(.035,.2,4),uo);B.scale.set(1,1,.3),B.position.set(Math.cos(F)*.08,-.01,Math.sin(F)*.08),B.rotation.set(0,-F,Math.PI/2+.25),B.rotateOnAxis(new U(0,0,1),0),this.top.add(B)}let E=new N(new xt(.02,.03,t==="pepper"?.14:.08,8),uo);E.position.y=.05,E.rotation.z=.25,this.top.add(E)}else for(let P=0;P<2;P++){let E=new N(new jn(.015,.06,5),uo);E.position.set(.05-P*.1,0,.02),this.top.add(E)}let x={carrot:.8,tomato:.58,potato:.86,pepper:.7}[t],m=Math.max(l.radiusAt(x,0),l.radiusAt(x,-Math.PI/2))||.2;this.bandMat=new ee({color:e===0?2783968:14694954,roughness:.7,map:j.carpet.map});let g=new N(new Je(m*1.01,.022,8,32),this.bandMat);g.rotation.x=Math.PI/2,g.scale.set(1,1,1.6),g.position.y=x,this.upper.add(g);let M=new N(new xe(.03,8,6),this.bandMat);M.position.set(0,x,m*1.02),this.upper.add(M);for(let P of[-1,1]){let E=new N(new de(.04,.14,.01),this.bandMat);E.position.set(P*.025,x-.07,m*1.04),E.rotation.z=P*.3,this.upper.add(E)}if(o!=="none"){let P=l.top-(t==="carrot"?.13:t==="potato"?.12:.08),E=Math.max(l.radiusAt(P,0),l.radiusAt(P,Math.PI/2),.12)*1.08,I=new It;I.position.y=P,this.upper.add(I);let F=(B,D={})=>new ee({color:B,roughness:.75,map:j.polymer.map,normalMap:j.polymer.normalMap,...D});if(o==="helmet"){let B=new N(new xe(E,24,12,0,Math.PI*2,0,Math.PI*.5),F(5922880));B.scale.y=.85,I.add(B);let D=new N(new Je(E,.02,6,24),F(4870196));D.rotation.x=Math.PI/2,I.add(D);let G=new N(new de(.08,.05,.04),F(2236962));G.position.set(0,E*.55,-E*.8),I.add(G);for(let q of[-1,1]){let V=new N(new de(.015,.16,.03),gr);V.position.set(q*E*.95,-.07,0),I.add(V)}}else if(o==="beret"){let B=new N(new xe(E*1.1,20,10),F(e===0?2771594:9052192));B.scale.set(1,.3,1),B.position.set(E*.15,.04,0),B.rotation.z=-.2,I.add(B);let D=new N(new Je(E*.98,.018,6,24),gr);D.rotation.x=Math.PI/2,I.add(D);let G=new N(new Bi(.025,12),new ee({color:15253568,metalness:1,roughness:.3}));G.position.set(-E*.45,.03,-E*.88),G.rotation.y=Math.PI+.45,I.add(G)}else if(o==="cap"){let B=new N(new xe(E,20,10,0,Math.PI*2,0,Math.PI*.5),F(2763306));B.scale.y=.7,I.add(B);let D=new N(new xt(E*.75,E*.75,.015,20,1,!1,Math.PI*.5,Math.PI),F(2763306));D.position.set(0,0,-E*.55),D.scale.z=1.3,I.add(D);let G=new N(new Bi(.03,12),new ee({color:15759898}));G.position.set(0,E*.35,-E*.9),G.rotation.x=.4,G.rotation.y=Math.PI,I.add(G)}else if(o==="boonie"){let B=new N(new xt(E*.9,E*1.02,.12,20),F(6974020,{map:j.camoWood.map}));B.position.y=.05,I.add(B);let D=new N(new xt(E*1.6,E*1.6,.015,24),F(6974020,{map:j.camoWood.map,side:an}));I.add(D)}I.traverse(B=>{B.isMesh&&(B.castShadow=!0)}),this.hat=I}let S={carrot:.12,tomato:.1,potato:.15,pepper:.12}[t],v=Math.max(l.radiusAt(S,0),l.radiusAt(S,Math.PI/2))||.2,C=new N(new Je(v*1.02,.025,6,32),gr);C.rotation.x=Math.PI/2,C.scale.set(1,1,1.5),C.position.y=S,this.lower.add(C);for(let P of[-.6,.6,2.4]){let E=new N(new de(.09,.1,.05),Na);E.position.set(Math.sin(P)*v*1.08,S-.01,-Math.cos(P)*v*1.08),E.rotation.y=-P,this.lower.add(E)}{let P=(S+l.split)/2,E=Math.max(l.radiusAt(P,0),l.radiusAt(P,Math.PI/2),l.radiusAt(P+.1,0))||.2,I=Math.min(l.split-.08,P+.05),F=(l.radiusAt(I,Math.PI/2)||E)*1,B=new N(new de(.16,.2,.07),Na);B.position.set(-.04,I,F+.03),this.lower.add(B);let D=new N(new xt(.005,.008,.32,5),gr);D.position.set(-.09,I+.24,F+.04),D.rotation.x=.15,this.lower.add(D);for(let G of[-1,1]){let q=new N(new de(.03,.22,.012),gr);q.position.set(-.04+G*.05,I,F+.07),this.lower.add(q)}}let R={carrot:.4,tomato:.32,potato:.42,pepper:.36}[t],y=Math.max(l.radiusAt(R,0),l.radiusAt(R,Math.PI))||.25;this.arms=[];for(let P of[-1,1]){let E=new It;E.position.set(P*(y+.01),R,0),this.spine.add(E);let I=new N(new xe(.05,10,8),fn);E.add(I);let F=Da(.3,[[0,.048],[.15,.052],[.45,.058],[.8,.044],[1,.04]],fn);E.add(F);let B=new It;B.position.y=-.29,E.add(B);let D=Da(.27,[[0,.04],[.2,.05],[.6,.04],[1,.032]],fn);B.add(D);let G=new N(new xe(.048,8,6),fn);B.add(G);let q=new It;q.position.y=-.26,B.add(q);let V=tm(P,s);q.add(V);let ct=new N(new xt(.052,.052,.05,12),this.bandMat);ct.position.y=-.08,E.add(ct),this.arms.push({side:P,sh:E,el:B,wr:q,up:F,fo:D,hand:V,ball:I,lost:!1,upLen:.29,foLen:.26})}this.legs=[];let b={carrot:.09,tomato:.14,potato:.12,pepper:.12}[t];for(let P of[-1,1]){let E=new It;E.position.set(P*b,.02,0),this.hips.add(E);let I=Da(.42,[[0,.07],[.12,.088],[.45,.08],[.85,.062],[1,.055]],fn);I.position.y=0,E.add(I);let F=new It;F.position.y=-.4,E.add(F);let B=new N(new xe(.05,10,8),fn);B.scale.set(1,1.1,.95),F.add(B);let D=new N(new xe(.058,12,8,0,Math.PI*2,0,Math.PI*.55),Na);D.rotation.x=-Math.PI/2,D.scale.set(1,1.25,.7),D.position.set(0,-.01,-.012),F.add(D);let G=new N(new xt(.06,.06,.02,12),gr);G.position.y=-.06,F.add(G);let q=Da(.38,[[0,.055],[.08,.06],[.3,.07],[.55,.055],[.9,.04],[1,.042]],fn);q.position.y=0,F.add(q);let V=new It;V.position.y=-.36,F.add(V);let ct=_v();V.add(ct),this.legs.push({side:P,hp:E,kn:F,an:V,th:I,sh:q,foot:ct,lost:!1})}this.gun=La(s>0?1:0,r),this.aim=new It,this.aim.position.set(.04,R+.02,0),this.spine.add(this.aim),this.gun.root.position.set(.12,-.04,-.15),this.aim.add(this.gun.root),this.gun.root.scale.setScalar(.95),this.root.traverse(P=>{P.isMesh&&(P.castShadow=!0)});for(let P of this.arms)Ke(P.hand),Ke(P.wr),Ke(P.el,[P.wr]),Ke(P.sh,[P.el]);for(let P of this.legs)Ke(P.foot,[],{shadow:!1}),Ke(P.an),Ke(P.kn,[P.an]),Ke(P.hp,[P.kn]);Ke(this.top,[],{shadow:!1});for(let P of this.eyes)Ke(P.g,[P.lid],{shadow:!1});Ke(this.face,this.eyes.map(P=>P.g),{shadow:!1}),this.hat&&Ke(this.hat),Ke(this.upper,[this.face,this.top,this.hat]),Ke(this.lower,[]),this.phase=0,this.pitch=0,this.state="idle",this.crouch=0,this.prone=0,this.run=0,this.speed=0,this.air=0,this.blink=2,this.dead=!1,this.deadT=0,this.headGone=!1,this.boltT=0,this.ads=0,this.recoil=0,this.hitSpheres=[]}ikArm(t,e,i){bh(t,e,i)}_unused(t,e,i){if(t.lost)return;let s=t.sh,r=s.parent;r.updateWorldMatrix(!0,!1);let o=im.copy(r.matrixWorld).invert(),a=em.copy(e).applyMatrix4(o).sub(s.position),l=nm.copy(i).applyMatrix4(o).sub(s.position),c=t.upLen,h=t.foLen,u=a.length();u=Math.min(u,c+h-.001),u=Math.max(u,.05);let d=a.clone().normalize(),f=(c*c+u*u-h*h)/(2*c*u),p=Math.acos(Math.max(-1,Math.min(1,f))),x=l.clone().sub(d.clone().multiplyScalar(l.dot(d))).normalize(),m=d.clone().multiplyScalar(Math.cos(p)*c).add(x.multiplyScalar(Math.sin(p)*c));s.quaternion.setFromUnitVectors(vh,m.clone().normalize());let g=a.clone().sub(m).applyQuaternion(s.quaternion.clone().invert());t.el.quaternion.setFromUnitVectors(vh,g.normalize())}update(t,e){let i=this,s=Math.min(1,i.speed/5.5);i.phase+=t*(i.speed*(i.prone>.5?1.2:2.1));let r=i.phase,l=(.8-i.crouch*.31)*(1-i.prone)+.28*i.prone+Math.abs(Math.sin(r))*.04*s*(1-i.prone);i.hips.position.y=l+(i.air>0?.05:0);let c=-.32*i.run*s-.12*i.crouch;i.hips.rotation.x=-i.prone*Math.PI*.5+0,i.spine.rotation.x=c*(1-i.prone)+i.pitch*.18*(1-i.prone)+i.prone*.3,i.spine.rotation.z=Math.sin(r)*.04*s,i.spine.position.y=0;for(let C of i.legs){if(C.lost)continue;let R=r+(C.side>0?Math.PI:0),y=1-i.crouch*.55,b=Math.sin(R)*(.5+.4*i.run)*s*y,P=Math.max(0,-Math.cos(R))*(.9+.5*i.run)*s*y+.05,E=i.crouch*(1-s*.7);C.side>0?(b+=i.crouch*1.05+E*.3,P+=i.crouch*1.05+E*.3):(b+=i.crouch*(1.1-E*.9),P+=i.crouch*(1.8-E*.05)),i.air>0&&(b=.6*(C.side>0?1:.3),P=1),b=b*(1-i.prone)+Math.sin(R)*.15*s*i.prone,P=P*(1-i.prone)+(.2+Math.max(0,Math.sin(R))*.6*s)*i.prone,C.hp.rotation.x=-b,C.kn.rotation.x=P,C.an.rotation.x=(-P*.4+b*.2)*(1-i.crouch)+i.crouch*(C.side>0?-(P-b):-.9*E)+i.prone*1.2,C.hp.rotation.z=C.side*.04}let h=i.run*s*(1-i.ads);i.aim.rotation.x=i.pitch+i.prone*Math.PI*.5-i.spine.rotation.x-h*.9-i.boltT*.25,i.aim.rotation.y=h*.9,i.aim.rotation.z=h*.4+i.boltT*.3,i.gun.root.position.z=-.15+i.recoil*.06,i.root.updateMatrixWorld(!0);let u=i.gun,d=i.arms[1],f=i.arms[0],p=u.gripPt.getWorldPosition(new U),x=u.forePt.getWorldPosition(new U),m=u.boltPt.getWorldPosition(new U),g=i.spine.localToWorld(new U(.6,-.6,.3)),M=i.spine.localToWorld(new U(-.6,-.6,.1)),S=u.root.getWorldQuaternion(new on);i.ikArm(d,Oa(i.boltT>0?p.clone().lerp(m,Math.min(1,i.boltT*1.5)):p,S,"grip"),g),i.ikArm(f,Oa(x,S,"fore"),M),Fa(d,S,"grip"),Fa(f,S,"fore"),i.blink-=t;let v=i.blink<.12;i.blink<0&&(i.blink=2+Math.random()*3);for(let C=0;C<i.eyes.length;C++){let R=i.eyes[C],y=i.ads>.6&&C===0;R.lid.rotation.x=i.dead||v||y?.5:-.35+(i.ads>.6?.25:0)}if(i.dead){i.deadT+=t;let C=Math.min(1,i.deadT/.7);i.root.rotation.x=-i.fallDir*C*C*1.45,i.root.position.y=i.deadBaseY-0,i.hips.position.y=l*(1-C)+.25*C;for(let R of i.legs)R.kn.rotation.x*=1-C}}computeHitSpheres(){let t=this.hitSpheres;t.length=0;let e=this.spine,i=(r,o,a,l=e)=>{let c=l.localToWorld(o.clone());t.push({part:r,c,r:a})},s=this.geo;this.headGone||i("head",new U(0,(s.split+s.top)/2,0),Math.max(.17,(s.top-s.split)*.55)),i("bodyLow",new U(0,(s.bottom+s.split)*.5+.05,0),Math.max(.2,this.splitR*1.05)),i("bodyUp",new U(0,s.split-.12,0),Math.min(this.splitR,.22));for(let r of this.arms)r.lost||(i(r.side<0?"armL":"armR",new U(0,-.14,0),.07,r.sh),i(r.side<0?"armL":"armR",new U(0,-.13,0),.065,r.el));for(let r of this.legs)r.lost||(i(r.side<0?"legL":"legR",new U(0,-.2,0),.09,r.hp),i(r.side<0?"legL":"legR",new U(0,-.18,0),.075,r.kn));return t}};var Mv=["shot","shot_far","bolt1","bolt2","mag","boom","tick","beep","splat1","splat2","crunch","hit","ui","cloth","wind","win","lose","whoosh","bgm","step_concrete-001","step_concrete-002","step_grass-001","step_grass-004","step_wood-000","step_wood-001"],Lt={ctx:null,buf:{},master:null,listener:{x:0,y:0,z:0,yaw:0},bgmNode:null,windNode:null,async init(n="sfx/"){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination),await Promise.all(Mv.map(async i=>{try{let r=await(await fetch(n+i+".mp3")).arrayBuffer();this.buf[i]=await this.ctx.decodeAudioData(r)}catch{}}))},resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},play(n,t={}){let e=this.ctx;if(!e||!this.buf[n])return null;let i=e.createBufferSource();i.buffer=this.buf[n],i.playbackRate.value=(t.rate||1)*(t.vary?1+(Math.random()-.5)*t.vary:1);let s=e.createGain(),r=t.vol??1,o=s;if(t.pos){let a=this.listener,l=t.pos.x-a.x,c=t.pos.z-a.z,h=t.pos.y-a.y,u=Math.hypot(l,h,c),d=t.ref||4;if(r*=Math.min(1,d/Math.max(d,u))**(t.roll||1),t.maxDist&&u>t.maxDist)return null;let f=-Math.sin(a.yaw),x=- -Math.cos(a.yaw),m=f,g=u>.1?(l*x+c*m)/u:0;if(e.createStereoPanner){let M=e.createStereoPanner();M.pan.value=Math.max(-1,Math.min(1,-g*.85)),s.connect(M),o=M}if(u>15){let M=e.createBiquadFilter();M.type="lowpass",M.frequency.value=Math.max(900,9e3-u*120),o.connect(M),o=M}}return s.gain.value=r,i.connect(s),o.connect(this.master),i.loop=!!t.loop,i.start(0,t.offset||0),{src:i,g:s}},bgm(n){if(n&&!this.bgmNode&&(this.bgmNode=this.play("bgm",{vol:.32,loop:!0})),!n&&this.bgmNode){try{this.bgmNode.g.gain.setTargetAtTime(0,this.ctx.currentTime,.4);let t=this.bgmNode;setTimeout(()=>t.src.stop(),1500)}catch{}this.bgmNode=null}},wind(n){if(n&&!this.windNode&&(this.windNode=this.play("wind",{vol:.18,loop:!0})),!n&&this.windNode){try{this.windNode.src.stop()}catch{}this.windNode=null}}};var Eh=class{constructor(t){this.cs=.5,this.x0=he.minX,this.z0=he.minZ,this.w=Math.ceil((he.maxX-he.minX)/this.cs),this.h=Math.ceil((he.maxZ-he.minZ)/this.cs),this.free=new Uint8Array(this.w*this.h);let e=.42,i=t.filter(s=>s.move&&s.max.y>.42&&s.min.y<1.5);for(let s=0;s<this.h;s++)for(let r=0;r<this.w;r++){let o=this.x0+(r+.5)*this.cs,a=this.z0+(s+.5)*this.cs,l=!0;for(let c of i){let h=Math.max(c.min.x-o,0,o-c.max.x),u=Math.max(c.min.z-a,0,a-c.max.z);if(h*h+u*u<e*e){l=!1;break}}this.free[s*this.w+r]=l?1:0}}cell(t,e){return[Math.floor((t-this.x0)/this.cs),Math.floor((e-this.z0)/this.cs)]}isFree(t,e){return t>=0&&e>=0&&t<this.w&&e<this.h&&this.free[e*this.w+t]===1}center(t,e){return[this.x0+(t+.5)*this.cs,this.z0+(e+.5)*this.cs]}nearestFree(t,e){if(this.isFree(t,e))return[t,e];for(let i=1;i<8;i++)for(let s=-i;s<=i;s++)for(let r=-i;r<=i;r++)if(this.isFree(t+r,e+s))return[t+r,e+s];return[t,e]}path(t,e,i,s){let[r,o]=this.nearestFree(...this.cell(t,e)),[a,l]=this.nearestFree(...this.cell(i,s)),c=this.w,h=c*this.h,u=new Float32Array(h).fill(1e9),d=new Int32Array(h).fill(-1),f=new Uint8Array(h),p=[[0,o*c+r]];u[o*c+r]=0;let x=R=>{let y=R%c,b=R/c|0,P=Math.abs(y-a),E=Math.abs(b-l);return Math.max(P,E)+.41*Math.min(P,E)},m=l*c+a,g=0;for(;p.length&&g++<2e4;){let R=0;for(let E=1;E<p.length;E++)p[E][0]<p[R][0]&&(R=E);let[,y]=p[R];if(p[R]=p[p.length-1],p.pop(),f[y])continue;if(f[y]=1,y===m)break;let b=y%c,P=y/c|0;for(let E=-1;E<=1;E++)for(let I=-1;I<=1;I++){if(!I&&!E)continue;let F=b+I,B=P+E;if(!this.isFree(F,B)||I&&E&&(!this.isFree(b+I,P)||!this.isFree(b,P+E)))continue;let D=B*c+F;if(f[D])continue;let G=u[y]+(I&&E?1.414:1);G<u[D]&&(u[D]=G,d[D]=y,p.push([G+x(D),D]))}}if(d[m]===-1&&m!==o*c+r)return null;let M=[],S=m;for(;S!==-1;)M.push(this.center(S%c,S/c|0)),S=d[S];M.reverse();let v=[M[0]],C=0;for(;C<M.length-1;){let R=M.length-1;for(;R>C+1&&!this.lineFree(M[C],M[R]);)R--;v.push(M[R]),C=R}return v}lineFree(t,e){let i=Math.hypot(e[0]-t[0],e[1]-t[1]),s=Math.ceil(i/(this.cs*.5));for(let r=0;r<=s;r++){let o=r/s,[a,l]=this.cell(t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o);if(!this.isFree(a,l))return!1}return!0}randomFreeNear(t,e,i){for(let s=0;s<40;s++){let r=Math.random()*Math.PI*2,o=Math.random()*i,[a,l]=this.cell(t+Math.cos(r)*o,e+Math.sin(r)*o);if(this.isFree(a,l))return this.center(a,l)}return[t,e]}};var Ci={snap:{id:"snap",name:"\u30B9\u30CA\u30C3\u30D7\u30D4\u30FC",tag:"\u901F\u3044\u30DC\u30EB\u30C8\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30D0\u30EA\u30B9\u30BF\u98A8\uFF09",mag:7,extMag:10,reserve:21,extReserve:30,bolt:1.26,ads:.35,reload:3.1,reloadEmpty:3.75,sprintOut:.25,sway:.8,stanceSway:!1,hip:1,adsMove:.44,move:1,dmg:{head:190,bodyUp:143,bodyMid:143,bodyLow:95,arm:143,leg:95},stats:{\u5A01\u529B:3,\u9023\u5C04:4,\u8997\u304D:5,\u5F3E\u6570:4},spec:"\u30B3\u30C3\u30AD\u30F3\u30B01.26\u79D2\u30FB\u8997\u304D0.35\u79D2\u30FB\u30EA\u30ED\u30FC\u30C93.1\u79D2\uFF08\u7A7A3.75\u79D2\uFF09",desc:`\u982D\u301C\u304A\u8179\u306E\u771F\u3093\u4E2D\u3068\u8155\u306A\u3089\u4E00\u6483\u3002
\u8170\u3068\u8DB3\u306F\u4E00\u6483\u306B\u306A\u3089\u306A\u3044\uFF08HP\u304C\u5C11\u3057\u6B8B\u308B\uFF09\u3002
\u8997\u304F\u306E\u3082\u30B3\u30C3\u30AD\u30F3\u30B0\u3082\u901F\u3044\u3002
\u3057\u3083\u304C\u307F\u30FB\u4F0F\u305B\u3067\u3082\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u306F\u6E1B\u3089\u306A\u3044\u3002`},root:{id:"root",name:"\u30EB\u30FC\u30C8\u30D0\u30B9\u30BF\u30FC .50",tag:"\u4E00\u6483\u91CD\u8996\u306E\u30DC\u30EB\u30C8\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08DSR\u98A8\uFF09",mag:5,extMag:7,reserve:25,extReserve:35,bolt:1.5,ads:.4,reload:3.4,reloadEmpty:4.5,sprintOut:.3,sway:1.35,stanceSway:!0,hip:1.35,adsMove:.4,move:.99,dmg:{head:196,bodyUp:147,bodyMid:147,bodyLow:147,arm:147,leg:98},stats:{\u5A01\u529B:5,\u9023\u5C04:2,\u8997\u304D:3,\u5F3E\u6570:2},spec:"\u30B3\u30C3\u30AD\u30F3\u30B01.5\u79D2\u30FB\u8997\u304D0.4\u79D2\u30FB\u30EA\u30ED\u30FC\u30C93.4\u79D2\uFF08\u7A7A4.5\u79D2\uFF09",desc:`\u8DB3\u4EE5\u5916\u306A\u3089\u3069\u3053\u3067\u3082\u4E00\u6483\u3002
\u8DB3\u3060\u306898\u30C0\u30E1\u30FC\u30B8\u3067\u30AE\u30EA\u30AE\u30EA\u6B8B\u308B\u3002
\u8997\u304F\u30FB\u30B3\u30C3\u30AD\u30F3\u30B0\u30FB\u30EA\u30ED\u30FC\u30C9\u304C\u9045\u304F\u3001\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u3068\u8170\u6483\u3061\u306E\u3070\u3089\u3064\u304D\u304C\u5927\u304D\u3044\u3002`}},Ba=[{id:"fmj",name:"\u8CAB\u901A\u5F3E\uFF08FMJ\uFF09",desc:"\u5A01\u529B\u306F\u4E0A\u304C\u3089\u306A\u3044\u3002\u58C1\u3084\u677F\u3092\u6483\u3061\u629C\u3051\u3066\u3001\u58C1\u8D8A\u3057\u3067\u3082\u5A01\u529B\u304C\u307B\u3068\u3093\u3069\u843D\u3061\u306A\u3044"},{id:"stab",name:"\u624B\u30D6\u30EC\u88DC\u6B63\uFF08\u5F3E\u9053CPU\u98A8\uFF09",desc:"\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u304C30%\u5C0F\u3055\u304F\u306A\u308B"},{id:"laser",name:"\u30EC\u30FC\u30B6\u30FC\u30B5\u30A4\u30C8",desc:"\u8170\u6483\u3061\u306E\u3070\u3089\u3064\u304D\u304C\u5C0F\u3055\u304F\u306A\u308B\uFF08\u8997\u304D\u306A\u304C\u3089\u3059\u3050\u6483\u3064\u30AF\u30A4\u30C3\u30AF\u30B9\u30B3\u30FC\u30D7\u304C\u5F53\u305F\u308A\u3084\u3059\u3044\uFF09"},{id:"fast",name:"\u30AF\u30A4\u30C3\u30AF\u30DE\u30B0",desc:"\u30EA\u30ED\u30FC\u30C9\u304C\u7D0435%\u901F\u304F\u306A\u308B",ex:"ext"},{id:"ext",name:"\u62E1\u5F35\u30DE\u30AC\u30B8\u30F3",desc:"\u5F3E\u304C\u5897\u3048\u308B\uFF08\u30B9\u30CA\u30C3\u30D7\u30D4\u30FC7\u219210\u767A\u30FB\u30EB\u30FC\u30C8\u30D0\u30B9\u30BF\u30FC5\u21927\u767A\uFF09\u3002\u30EA\u30ED\u30FC\u30C9\u306F10%\u9045\u304F\u306A\u308B",ex:"fast"}],Ha=[[{id:"none",name:"\u306A\u3057",desc:""},{id:"light",name:"\u8EAB\u8EFD",desc:"\u79FB\u52D5\u304C7%\u901F\u304F\u306A\u308B"}],[{id:"none",name:"\u306A\u3057",desc:""},{id:"tough",name:"\u6839\u6027",desc:"\u6483\u305F\u308C\u305F\u6642\u306E\u8996\u70B9\u306E\u30D6\u30EC\u304C\u5C0F\u3055\u3044"},{id:"hands",name:"\u65E9\u696D",desc:"\u6295\u3052\u7269\u3092\u7D20\u65E9\u304F\u6295\u3052\u3089\u308C\u308B"}],[{id:"none",name:"\u306A\u3057",desc:""},{id:"dex",name:"\u8EAB\u306E\u3053\u306A\u3057",desc:"\u30C0\u30C3\u30B7\u30E5\u306E\u5F8C\u3059\u3050\u8997\u3051\u308B"},{id:"cond",name:"\u6301\u4E45\u529B",desc:"\u30C0\u30C3\u30B7\u30E5\u304C2\u500D\u9577\u304F\u7D9A\u304F"},{id:"quiet",name:"\u5FCD\u3073\u8DB3",desc:"\u8DB3\u97F3\u304C\u304B\u306A\u308A\u5C0F\u3055\u304F\u306A\u308B"}]],rm=[{id:"none",name:"\u306A\u3057",desc:""},{id:"smoke",name:"\u30B9\u30E2\u30FC\u30AF",desc:"\u7159\u306712\u79D2\u9593\u3001\u8996\u7DDA\u3092\u3055\u3048\u304E\u308B"},{id:"flash",name:"\u30D5\u30E9\u30C3\u30B7\u30E5",desc:"\u8FD1\u304F\u3067\u898B\u305F\u76F8\u624B\u3092\u6700\u59273\u79D2\u3001\u76EE\u304F\u3089\u307E\u3057\u306B\u3059\u308B"}],om=[{id:"none",name:"\u306A\u3057",desc:""},{id:"axe",name:"\u6295\u3052\u65A7",desc:"\u5C71\u306A\u308A\u306B\u98DB\u3076\u3002\u5F53\u305F\u308C\u3070\u3069\u3053\u3067\u3082\u4E00\u6483"}],Bd={rifle:"snap",att:["stab","laser"],perks:["light","tough","dex"],tac:"smoke",let:"axe"};function am(n){let t=Ci[n.rifle]||Ci.snap,e=s=>n.att.includes(s),i=(s,r)=>n.perks[s]===r;return{rifle:t.id,name:t.name,mag:e("ext")?t.extMag:t.mag,reserve:e("ext")?t.extReserve:t.reserve,bolt:t.bolt,ads:t.ads,reload:t.reload*(e("fast")?.65:e("ext")?1.1:1),reloadEmpty:t.reloadEmpty*(e("fast")?.65:e("ext")?1.1:1),sway:t.sway*(e("stab")?.7:1),stanceSway:t.stanceSway,hipSpread:t.hip*(e("laser")?.55:1),fmj:e("fmj"),dmg:t.dmg,adsMove:t.adsMove,move:t.move*(i(0,"light")?1.07:1),flinch:i(1,"tough")?.3:1,sprintOut:t.sprintOut*(i(2,"dex")?.4:1),stamina:i(2,"cond")?8:4,quiet:i(2,"quiet")?.35:1,throwT:i(1,"hands")?.15:.45,tac:n.tac||"none",let:n.let||"none"}}function lm(){let n=Math.random()<.55?"snap":"root",t=["fmj","stab","laser",Math.random()<.5?"fast":"ext"];return t.sort(()=>Math.random()-.5),{rifle:n,att:t.slice(0,2),perks:["light",Math.random()<.5?"tough":"hands",Math.random()<.5?"dex":"cond"],tac:Math.random()<.55?"smoke":"flash",let:"axe"}}var Pi=[{id:"rookie",name:"\u30EB\u30FC\u30AD\u30FC",min:0,step:250,divs:4,fee:0,col:"#9a8a78",col2:"#5a4e42",diff:0},{id:"bronze",name:"\u30D6\u30ED\u30F3\u30BA",min:1e3,step:500,divs:4,fee:10,col:"#c07a4a",col2:"#6a3a1a",diff:0},{id:"silver",name:"\u30B7\u30EB\u30D0\u30FC",min:3e3,step:750,divs:4,fee:20,col:"#c8ccd4",col2:"#6a7080",diff:1},{id:"gold",name:"\u30B4\u30FC\u30EB\u30C9",min:6e3,step:1e3,divs:4,fee:30,col:"#f0c040",col2:"#8a6a10",diff:1},{id:"plat",name:"\u30D7\u30E9\u30C1\u30CA",min:1e4,step:1250,divs:4,fee:40,col:"#5ad0d0",col2:"#1a6a7a",diff:1},{id:"diamond",name:"\u30C0\u30A4\u30E4",min:15e3,step:1250,divs:4,fee:50,col:"#6aa0ff",col2:"#2a3aa0",diff:2},{id:"master",name:"\u30DE\u30B9\u30BF\u30FC",min:2e4,step:0,divs:1,fee:60,col:"#c070ff",col2:"#5a1a9a",diff:2},{id:"king",name:"\u30D9\u30B8\u30AD\u30F3\u30B0",min:3e4,step:0,divs:1,fee:75,col:"#ff4a3a",col2:"#7a0a0a",diff:2}],hm=["IV","III","II","I"];function cm(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function Hd(n){let[t,e]=n.split("-");return`\u30B7\u30FC\u30BA\u30F3 ${t}\u5E74${+e}\u6708`}function Xi(n){let t=Pi[0];for(let a of Pi)n>=a.min&&(t=a);let e=Pi.indexOf(t),i=Pi[e+1],s=1,r=t.min,o=i?i.min:t.min+1e4;if(t.divs>1){let a=Math.min(t.divs-1,Math.floor((n-t.min)/t.step));s=a,r=t.min+a*t.step,o=r+t.step}return{tier:t,index:e,div:s,label:t.divs>1?`${t.name} ${hm[s]}`:t.name,lo:r,hi:o,progress:Math.max(0,Math.min(1,(n-r)/(o-r)))}}function Sh(){let n;try{n=JSON.parse(localStorage.getItem("vw_rank")||"null")}catch{n=null}n||(n={rp:0,season:cm(),best:0,badges:[],games:0,wins:0,kills:0,history:[]});let t=cm();if(n.season!==t){n.games>0&&n.badges.push({season:n.season,tier:Xi(n.best).tier.id});let e=Xi(n.rp).index;n.rp=e<=1?0:Pi[Math.max(0,e-2)].min,Object.assign(n,{season:t,best:n.rp,games:0,wins:0,kills:0,history:[]}),kd(n)}return n}function kd(n){try{localStorage.setItem("vw_rank",JSON.stringify(n))}catch{}}function um(n,t){let e=Xi(n.rp).tier,i=[];i.push(["\u53C2\u52A0\u8CBB",-e.fee]),t.win&&i.push(["\u8A66\u5408\u306B\u52DD\u5229",100]),i.push([`\u53D6\u3063\u305F\u30E9\u30A6\u30F3\u30C9 \xD7${t.rounds}`,t.rounds*10]),i.push([`\u30AD\u30EB \xD7${t.kills}`,t.kills*12]),t.hs&&i.push([`\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8 \xD7${t.hs}`,t.hs*4]),t.mvp&&i.push(["MVP",20]);let s=i.reduce((a,l)=>a+l[1],0),r=e.min,o=Math.max(r,n.rp+s);return s=o-n.rp,{items:i,total:s,before:n.rp,after:o}}function po(n,t=64,e=null){let i=Pi.find(h=>h.id===n)||Pi[0],s=Pi.indexOf(i),r=Math.min(4,Math.floor(s/2)+1),o=s>=6?`<path d="M10 40 L2 30 L12 32 L4 20 L16 26 Z" fill="${i.col}" opacity=".9"/><path d="M90 40 L98 30 L88 32 L96 20 L84 26 Z" fill="${i.col}" opacity=".9"/>`:"",a=s===7?'<path d="M34 14 L40 4 L46 12 L50 2 L54 12 L60 4 L66 14 Z" fill="#ffd040" stroke="#7a4a00" stroke-width="1.5"/>':"",l="";for(let h=0;h<r;h++){let u=(h-(r-1)/2)*28;l+=`<path transform="rotate(${u} 50 56)" d="M50 56 C40 44 44 30 50 24 C56 30 60 44 50 56 Z" fill="#fff" opacity=".92"/>`}let c=e!==null&&i.divs>1?`<text x="50" y="86" text-anchor="middle" font-size="15" font-weight="900" fill="#fff" stroke="#000" stroke-width=".6">${hm[e]}</text>`:"";return`<svg width="${t}" height="${t}" viewBox="0 0 100 100"><defs><linearGradient id="g${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${i.col}"/><stop offset="1" stop-color="${i.col2}"/></linearGradient></defs>${o}<path d="M50 8 L86 20 L82 62 Q76 84 50 94 Q24 84 18 62 L14 20 Z" fill="url(#g${n})" stroke="#111" stroke-width="3"/><path d="M50 16 L78 25 L75 60 Q70 77 50 85 Q30 77 25 60 L22 25 Z" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="2"/>${l}<circle cx="50" cy="58" r="4" fill="${i.col2}"/>${a}${c}</svg>`}var z=n=>document.getElementById(n),ut=U,pn=(n,t,e)=>Math.max(t,Math.min(e,n)),Wa=(n,t,e)=>n+(t-n)*e,Yi=(n,t,e,i)=>Wa(n,t,1-Math.exp(-e*i)),vv=(n,t)=>{let e=t-n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Li=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;window.__vwQuality=1;var gt=Object.assign({sens:1,sensAds:.55,fireMode:"release",quality:1,diff:1,bgm:1,kind:"carrot",tpp:0,hat:"helmet",camo:"olive",leftFire:0,winR:8,swap:4,killcam:1,map:"market",lo:Bd},(()=>{try{return JSON.parse(localStorage.getItem("vw_cfg")||"{}")}catch{return{}}})());window.__vwQuality=gt.quality;var fi=()=>{try{localStorage.setItem("vw_cfg",JSON.stringify(gt))}catch{}},je=new Qc({antialias:gt.quality>0,powerPreference:"high-performance"});je.outputColorSpace=rn;je.toneMapping=ha;je.toneMappingExposure=1.05;je.shadowMap.enabled=!0;je.shadowMap.type=gt.quality>0?lc:lr;je.autoClear=!1;z("game").appendChild(je.domElement);var ps=Math.min(devicePixelRatio,gt.quality===2?2:gt.quality===1?Li?1.5:1.75:1);je.setPixelRatio(ps);wp(Math.min(8,je.capabilities.getMaxAnisotropy()));var ye=new As,Ee=new En(72,1,.05,400);Ee.rotation.order="YXZ";var _s=new As,$i=new En(46,1,.01,10);function Ih(){let n=innerWidth,t=innerHeight;je.setSize(n,t),Ee.aspect=$i.aspect=n/t,Ee.updateProjectionMatrix(),$i.updateProjectionMatrix()}addEventListener("resize",Ih);Ih();function bv(){let n=new xe(300,32,16),t=new ci({side:mn,depthWrite:!1,fog:!1,uniforms:{sun:{value:new ut(.4,.55,.35).normalize()},top:{value:new ie(.22,.48,.86)},hor:{value:new ie(.72,.84,.95)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 sun; uniform vec3 top; uniform vec3 hor;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
      float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=n(p)*a;p*=2.03;a*=.5;}return s;}
      void main(){ float y=max(vP.y,0.); vec3 gnd=vec3(.55,.62,.55);
        vec3 c = mix(hor, top, pow(y, .55)); if(vP.y<0.) c = mix(hor, gnd, min(1.,-vP.y*4.));
        float sd = max(dot(vP, sun), 0.); c += vec3(1.,.9,.7)*pow(sd, 300.)*3. + vec3(1.,.85,.6)*pow(sd,8.)*.25;
        if(vP.y>0.02){ vec2 uv = vP.xz/(vP.y+.15)*1.6; float cl = smoothstep(.5,.85, fb(uv*1.2)); c = mix(c, vec3(1.)*(.85+.15*sd), cl*.75*smoothstep(.02,.2,vP.y)); }
        gl_FragColor = vec4(c,1.); }`}),e=new N(n,t);return e.renderOrder=-1,e}var Rh=bv();ye.add(Rh);ye.fog=new zo(12112100,60,210);var bm=new jr(13624575,5925440,.85);ye.add(bm);var pi=new Qr(16773336,2.6);pi.position.set(30,42,26);ye.add(pi);ye.add(pi.target);pi.castShadow=!0;var dm=gt.quality===2?4096:gt.quality===1?2048:1024;pi.shadow.mapSize.set(dm,dm);Object.assign(pi.shadow.camera,{left:-44,right:44,top:40,bottom:-40,near:5,far:120});pi.shadow.bias=-4e-4;pi.shadow.normalBias=.03;pi.shadow.camera.layers.enable(1);var di=new Pn(16760944,0,8,2);ye.add(di);var fm={town:{top:[.22,.48,.86],hor:[.72,.84,.95],fog:12112100,sun:16773336,si:2.6,sp:[30,42,26],hemi:.85},market:{top:[.3,.55,.88],hor:[.95,.88,.78],fog:15260872,sun:16769720,si:2.4,sp:[-34,30,22],hemi:.9},station:{top:[.42,.55,.7],hor:[.8,.84,.86],fog:13159632,sun:16052458,si:2,sp:[18,46,-20],hemi:1.05},villa:{top:[.18,.46,.9],hor:[.8,.9,.98],fog:13163754,sun:16774368,si:2.8,sp:[-20,50,30],hemi:.9},port:{top:[.3,.36,.62],hor:[1,.68,.42],fog:14723192,sun:16756848,si:2.3,sp:[44,18,-10],hemi:.75}};function Ev(n){let t=fm[n]||fm.town;Rh.material.uniforms.top.value.setRGB(...t.top),Rh.material.uniforms.hor.value.setRGB(...t.hor),ye.fog.color.setHex(t.fog),pi.color.setHex(t.sun),pi.intensity=t.si,pi.position.set(...t.sp),bm.intensity=t.hemi,Rh.material.uniforms.sun.value.set(...t.sp).normalize(),jd.color.setHex(t.sun)}_s.add(new jr(13624575,5925440,1));var jd=new Qr(16773336,2);jd.position.set(1,2,1);_s.add(jd);var Lh=new Pn(16760944,0,3,2);Lh.position.set(.1,-.05,-.9);_s.add(Lh);var ka=(n,t)=>{z("ldBar").style.width=n*100+"%",t&&(z("ldTxt").textContent=t)},pm,xo,Em;async function Sv(){ka(.05,"\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u4F5C\u6210\u4E2D\u2026"),await new Promise(e=>setTimeout(e,30)),Tp(gt.quality),fs[gt.map]||(gt.map="market"),ka(.45,`\u30DE\u30C3\u30D7\u300C${fs[gt.map].name}\u300D\u3092\u5EFA\u8A2D\u4E2D\u2026`),await new Promise(e=>setTimeout(e,30));let t=new ro(je).fromScene(new nh,.04).texture;ye.environment=t,ye.environmentIntensity=.45,_s.environment=t,_s.environmentIntensity=.6,pm=zp(ye,gt.map),xo=pm.colliders,Ev(gt.map),Sm=xo.filter(e=>e.bullet),ka(.75,"CPU\u306E\u9053\u3092\u8A08\u7B97\u4E2D\u2026"),await new Promise(e=>setTimeout(e,30)),Em=new Eh(xo),ka(.85,"\u52B9\u679C\u97F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026"),Cv(),db(),je.compile(ye,Ee),ka(1,""),z("loading").classList.add("hide"),af()}var Sm=[],wv=.3;function Tv(n){return n.stance==="prone"?.55:n.stance==="crouch"?1.2:1.72}function xs(n,t,e,i=.22){let s=0;for(let r of xo)r.move&&(n+i<r.min.x||n-i>r.max.x||t+i<r.min.z||t-i>r.max.z||r.max.y<=e+.46&&r.max.y>s&&(s=r.max.y));return s}function Av(n,t,e){for(let i=0;i<2;i++)for(let s of xo){if(!s.move||s.max.y<=n.y+.46||s.min.y>=n.y+t)continue;let r=pn(n.x,s.min.x,s.max.x),o=pn(n.z,s.min.z,s.max.z),a=n.x-r,l=n.z-o,c=a*a+l*l;if(!(c>=e*e))if(c>1e-8){let h=Math.sqrt(c);n.x+=a/h*(e-h),n.z+=l/h*(e-h)}else{let h=[n.x-s.min.x,s.max.x-n.x,n.z-s.min.z,s.max.z-n.z],u=h.indexOf(Math.min(...h));u===0?n.x=s.min.x-e:u===1?n.x=s.max.x+e:u===2?n.z=s.min.z-e:n.z=s.max.z+e}}}function yr(n,t,e){let i=null;for(let s of Sm){let r=Rp(n,t,s,i?i.t:e);r&&r.t>1e-4&&(!i||r.t<i.t)&&(i={t:r.t,c:s,axis:r.axis,sign:r.sign})}return i}function wm(n,t){let e=new ut().subVectors(t,n),i=e.length();return e.divideScalar(i),!yr(n,e,i)}function Qd(n,t,e,i){let s=n.x-e.x,r=n.y-e.y,o=n.z-e.z,a=s*t.x+r*t.y+o*t.z,l=s*s+r*r+o*o-i*i,c=a*a-l;if(c<0)return-1;let h=-a-Math.sqrt(c);return h>0?h:-1}var wn={parts:[],decals:[],tracers:[],debris:[],glints:[]},vo,qs,Dh,qd,Tm,Rv=new ei(1,0);function Ga(n,t=128,e){let i=document.createElement("canvas");i.width=i.height=t;let s=i.getContext("2d");if(e)e(s,t);else{let o=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);n.forEach(([a,l])=>o.addColorStop(a,l)),s.fillStyle=o,s.fillRect(0,0,t,t)}let r=new bi(i);return r.colorSpace=rn,r}function Cv(){vo=Ga(null,128,(n,t)=>{n.translate(t/2,t/2);for(let i=0;i<7;i++){n.rotate(Math.PI*2/7+Math.random()*.2);let s=n.createLinearGradient(0,0,t/2,0);s.addColorStop(0,"rgba(255,250,220,1)"),s.addColorStop(.4,"rgba(255,190,80,.8)"),s.addColorStop(1,"rgba(255,120,20,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(0,-6),n.lineTo(t/2*(.6+Math.random()*.4),0),n.lineTo(0,6),n.fill()}let e=n.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,240,1)"),e.addColorStop(1,"rgba(255,200,100,0)"),n.fillStyle=e,n.fillRect(-30,-30,60,60)}),qs=Ga([[0,"rgba(220,220,220,.55)"],[.5,"rgba(200,200,200,.25)"],[1,"rgba(200,200,200,0)"]]),Dh=Ga(null,128,(n,t)=>{n.fillStyle="#fff",n.beginPath(),n.arc(64,64,26,0,7),n.fill();for(let e=0;e<16;e++){let i=Math.random()*7,s=20+Math.random()*38,r=3+Math.random()*9;n.beginPath(),n.arc(64+Math.cos(i)*s,64+Math.sin(i)*s,r,0,7),n.fill(),n.lineWidth=r*.8,n.strokeStyle="#fff",n.beginPath(),n.moveTo(64,64),n.lineTo(64+Math.cos(i)*s,64+Math.sin(i)*s),n.stroke()}}),qd=Ga([[0,"rgba(10,8,6,1)"],[.25,"rgba(20,16,12,.95)"],[.4,"rgba(60,50,40,.5)"],[1,"rgba(60,50,40,0)"]],64),Tm=Ga(null,128,(n,t)=>{let e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(200,230,255,.9)"),e.addColorStop(1,"rgba(150,200,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128),n.fillStyle="rgba(255,255,255,.9)",n.fillRect(0,62,128,4),n.fillRect(62,0,4,128)})}function mi(n,t,e,i,s={}){let r=new sr({map:n,transparent:!0,depthWrite:!1,blending:s.add?hr:Us,color:s.color||16777215,opacity:s.opacity??1,fog:!0}),o=new qr(r);return o.position.copy(t),o.scale.setScalar(e),r.rotation=Math.random()*6.28,(s.scene||ye).add(o),wn.parts.push({o,life:i,max:i,vel:s.vel||new ut,grow:s.grow||0,sprite:!0,g:s.g||0,scene:s.scene||ye,fade:!0}),o}var Gd={};function Pv(n){return Gd[n]||(Gd[n]=new ee({color:n,roughness:.4})),Gd[n]}function ys(n,t,e,i,s=.03,r=.8,o){for(let a=0;a<e;a++){let l=new N(Rv,Pv(t));l.position.copy(n),l.scale.setScalar(s*(.5+Math.random()));let c=new ut(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(i*(.4+Math.random()));o&&c.addScaledVector(o,i*.6),ye.add(l),wn.parts.push({o:l,life:r*(.6+Math.random()*.6),max:r,vel:c,g:9.8,spin:new ut(Math.random(),Math.random(),Math.random()).multiplyScalar(10),bounce:!0})}}function Xa(n,t,e,i,s=16777215,r=1){let o=new N(new He(i,i),new vi({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,color:s,opacity:r,fog:!0}));if(o.position.copy(t).addScaledVector(e,.01),o.lookAt(t.clone().add(e)),o.rotateZ(Math.random()*6.28),ye.add(o),wn.decals.push(o),wn.decals.length>60){let a=wn.decals.shift();ye.remove(a),a.geometry.dispose(),a.material.dispose()}}var tf=new xt(.012,.012,1,6,1,!0);tf.rotateX(Math.PI/2);tf.translate(0,0,.5);function Iv(n,t){let e=new N(tf,new vi({color:16769184,transparent:!0,opacity:.8,blending:hr,depthWrite:!1}));e.position.copy(n),e.lookAt(t),e.scale.set(1,1,n.distanceTo(t)),ye.add(e),wn.parts.push({o:e,life:.12,max:.12,vel:new ut,fadeMat:!0})}function Lv(n){for(let t=wn.parts.length-1;t>=0;t--){let e=wn.parts[t];if(e.life-=n,e.life<=0){(e.scene||ye).remove(e.o),(e.sprite||e.fadeMat)&&e.o.material.dispose(),wn.parts.splice(t,1);continue}e.g&&(e.vel.y-=e.g*n),e.o.position.addScaledVector(e.vel,n),e.bounce&&e.o.position.y<xs(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01&&(e.o.position.y=xs(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01,e.vel.multiplyScalar(.4),e.vel.y=Math.abs(e.vel.y)*.3),e.spin&&(e.o.rotation.x+=e.spin.x*n,e.o.rotation.y+=e.spin.y*n),e.grow&&e.o.scale.multiplyScalar(1+e.grow*n);let i=e.life/e.max;(e.sprite||e.fadeMat)&&(e.o.material.opacity=(e.fade||e.fadeMat?i:1)*(e.o.material.userData.op??1))}for(let t of wn.debris){if(t.rest)continue;t.vel.y-=9.8*n,t.o.position.addScaledVector(t.vel,n),t.o.rotation.x+=t.av.x*n,t.o.rotation.y+=t.av.y*n,t.o.rotation.z+=t.av.z*n;let e=xs(t.o.position.x,t.o.position.z,t.o.position.y+.2,.02)+(t.r||.03);t.o.position.y<e&&(t.o.position.y=e,Math.abs(t.vel.y)<.8?(t.vel.set(0,0,0),t.av.multiplyScalar(0),t.rest=!0):(t.vel.y=-t.vel.y*.35,t.vel.x*=.6,t.vel.z*=.6,t.av.multiplyScalar(.6),t.splat&&!t.splatted&&(t.splatted=!0,Xa(Dh,new ut(t.o.position.x,e-(t.r||.03)+.01,t.o.position.z),new ut(0,1,0),.4+Math.random()*.4,t.splat,.85)),t.snd&&Lt.play(t.snd,{pos:t.o.position,vol:.4,vary:.3,ref:3})))}}function ef(){for(let n of wn.debris)n.o.parent&&n.o.parent.remove(n.o);wn.debris.length=0;for(let n of wn.decals)ye.remove(n),n.geometry.dispose(),n.material.dispose();wn.decals.length=0}function yo(n,t,e,i={}){if(wn.debris.push({o:n,vel:t,av:e,r:i.r,splat:i.splat,snd:i.snd}),wn.debris.length>160){let s=wn.debris.shift();s.o.parent&&s.o.parent.remove(s.o)}}var Zi={carrot:15759898,tomato:13113358,potato:15259808,pepper:6991930},Re=[],pt=null,Ii={carrot:"\u306B\u3093\u3058\u3093",tomato:"\u30C8\u30DE\u30C8",potato:"\u3058\u3083\u304C\u3044\u3082",pepper:"\u30D4\u30FC\u30DE\u30F3"},Ws=class{constructor(t,e,i,s){this.kind=t,this.team=e,this.isPlayer=i,this.name=s,this.pos=new ut,this.vel=new ut,this.yaw=0,this.pitch=0,this.alive=!0,this.hp=100,this.stance="stand",this.sprint=!1,this.ads=0,this.adsWant=!1,this.mag=5,this.reserve=20,this.boltT=0,this.reloadT=0,this.needBolt=!1,this.onGround=!0,this.slideT=0,this.slideDir=new ut,this.moveAmt=0,this.stepAcc=0,this.lastShotT=-9,this.kills=0,this.hs=0,this.shots=0,this.hits=0,this.lostArm=[!1,!1],this.lostLeg=[!1,!1],this.revealT=0,this.spotT=0,this.hat=i?gt.hat:fo[1+Math.floor(Math.random()*(fo.length-1))].id,this.camo=i?gt.camo:Ia[Math.floor(Math.random()*4)].id,this.deaths=0,this.score=0,this.lo=i?gt.lo:lm(),this.st=am(this.lo),this.mag=this.st.mag,this.reserve=this.st.reserve,this.eyeH=1.58,this.stanceT=0,this.stamina=this.st.stamina,this.sprintOutT=0,this.flinch=0,this.veg=new Gs(t,e,{lod:1,hat:this.hat,camo:this.camo}),ye.add(this.veg.root),i&&this.setFirstPerson(!gt.tpp)}setFirstPerson(t){this.veg.root.traverse(e=>{e.layers.set(t?1:0)})}eye(){return new ut(this.pos.x,this.pos.y+this.eyeH,this.pos.z)}targetEye(){return(this.stance==="prone"?.42:this.stance==="crouch"?1.12:1.58)-(this.slideT>0?.45:0)}dir(){return new ut(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}dispose(){ye.remove(this.veg.root)}};function nf(n){return n.alive&&n.stanceT<=0&&n.boltT<=0&&n.reloadT<=0&&n.mag>0&&!(n.lostArm[0]&&n.lostArm[1])&&Y.phase!=="pre"&&Y.phase!=="post"}function sf(n,t){if(!nf(n)){n.mag<=0&&n.reloadT<=0&&_r(n);return}n.mag--,n.shots++,n.lastShotT=Y.time,n.revealT=2.5;let e=n.ads>.95?6e-4:Wa(.09*n.st.hipSpread,.006,Math.pow(n.ads,2));e+=Math.min(1,n.vel.length()/5)*(n.ads>.9?.012:.03)+(n.onGround?0:.05)+(n.lostArm[0]||n.lostArm[1]?.03:0),n.stance==="prone"&&n.ads>.9&&(e*=.5);let i=t.clone();e>0&&(i.x+=(Math.random()-.5)*e*2,i.y+=(Math.random()-.5)*e*2,i.z+=(Math.random()-.5)*e*2,i.normalize());let s=n.eye(),r=Nv(s,i,n),o=n.isPlayer&&!gt.tpp&&n.ads<.9?Gt.gun.muzzlePt.getWorldPosition(new ut):n.veg.gun.muzzlePt.getWorldPosition(new ut),a=o;if(n.isPlayer&&!gt.tpp&&(a=s.clone().addScaledVector(i,.9).add(new ut(0,-.12,0))),Iv(a,r.point),n.isPlayer&&!gt.tpp||(mi(vo,o,.7,.06,{add:!0}),di.position.copy(o),di.intensity=30,setTimeout(()=>di.intensity=0,50)),mi(qs,n.isPlayer&&!gt.tpp?a:o,.4,1.2,{grow:1.5,vel:new ut(0,.4,0),opacity:.6}),n.isPlayer)Lt.play("shot",{vol:1,vary:.06}),fb();else{let l=n.pos.distanceTo(pt.pos);Lt.play(l>25?"shot_far":"shot",{pos:n.eye(),vol:1,ref:6,roll:.8,vary:.05})}for(let l of Re)!l.isPlayer&&l.alive&&l.team!==n.team&&l.pos.distanceTo(n.pos)<70&&l.ai&&(l.ai.heard={pos:n.pos.clone(),t:4});return n.needBolt=!0,n.boltT=n.st.bolt,n.boltPlayed=0,n.isPlayer&&n.ads>.5&&(n.kickedOut=!0),r}function Dv(n){let t=n.max.x-n.min.x,e=n.max.y-n.min.y,i=n.max.z-n.min.z;return Math.min(t,e,i)<=.45}function Nv(n,t,e){let i=yr(n,t,200),s=0;if(i&&e&&e.st&&e.st.fmj&&Dv(i.c)){let l=new ut;l.setComponent(i.axis,i.sign);let c=n.clone().addScaledVector(t,i.t);Xa(qd,c,l,.09),ys(c,10132112,5,3,.02,.5,l);let h=yr(n.clone().addScaledVector(t,i.t+.5),t,200),u=h?h.t+.5+i.t:200;s=1,i=h?Object.assign({},h,{t:u}):null}let r=i?i.t:200,o=null;for(let l of Re){if(l===e||!l.alive&&!l.ragdollHit||!l.alive||l.pos.distanceTo(n)>r+3)continue;let c=null,h=-1;for(let u of l.veg.computeHitSpheres()){let d=Qd(n,t,u.c,u.r);if(d>0&&d<r){u.part==="head"&&(h=d);let f=u.part;f==="bodyLow"&&n.y+t.y*d>u.c.y&&(f="bodyMid"),(!c||d<c.t)&&(c={f:l,part:f,t:d})}}c&&(h>0&&h-c.t<.3&&(c={f:l,part:"head",t:h}),r=c.t,o=c)}let a=n.clone().addScaledVector(t,r);if(o)return Uv(o.f,o.part,e,t,a,s),{point:a,hit:o};if(i){let l=new ut;l.setComponent(i.axis,i.sign),Xa(qd,a,l,.09);let c={wood:9071178,metal:13158600,concrete:11053216,grass:5929530,carpet:8018522}[i.c.surf]||10132112;ys(a,c,6,3,.02,.6,l),mi(qs,a,.3,.6,{grow:2,vel:l.clone().multiplyScalar(.5),color:c,opacity:.7}),i.c.surf==="metal"&&mi(vo,a,.18,.05,{add:!0}),Lt.play("hit",{pos:a,vol:.25,ref:3,rate:.6})}else if(t.y<0){let l=(0-n.y)/t.y;if(l>0&&l<200){let c=n.clone().addScaledVector(t,l);return ys(c,5925434,5,2.5,.02,.5,new ut(0,1,0)),mi(qs,c,.4,.7,{grow:2,color:10127978}),{point:c}}}return{point:a}}function Uv(n,t,e,i,s,r=0){if(!n.alive||Y.mode==="range"&&n.isPlayer)return;let o=Zi[n.kind];ys(s,o,14,4,.03,.9,i.clone().multiplyScalar(.6)),mi(qs,s,.5,.4,{color:o,grow:2.5,opacity:.9}),Lt.play(Math.random()<.5?"splat1":"splat2",{pos:s,vol:.9,ref:5,vary:.2});let a=yr(s,i,4);if(a){let d=new ut;d.setComponent(a.axis,a.sign),Xa(Dh,s.clone().addScaledVector(i,a.t),d,.6+Math.random()*.4,o,.9)}else Xa(Dh,new ut(s.x+i.x*1.5,xs(s.x,s.z,s.y)+.02,s.z+i.z*1.5),new ut(0,1,0),.9,o,.85);let l=0,c=!1,h=e&&e.st?e.st.dmg:Ci.snap.dmg,u=r?e&&e.st&&e.st.fmj?.97:.8:1;if(t==="head"?(l=h.head*u,c=!0):t==="bodyUp"?l=h.bodyUp*u:t==="bodyMid"?l=h.bodyMid*u:t==="bodyLow"||t==="body"?l=h.bodyLow*u:t==="armL"||t==="armR"?(l=h.arm*u,Fv(n,t==="armL"?0:1,i)):(l=h.leg*u,Ov(n,t==="legL"?0:1,i)),n.hp-=l,n.hurtT=0,e&&(e.hits++,e.isPlayer&&Am(n.hp<=0)),n.isPlayer&&Gv(e?e.pos:s),n.ai&&(n.ai.heard={pos:e?e.pos.clone():s.clone(),t:5},n.ai.threat=e),n.hp<=0)Oh(n,e,c,i,t);else if(n.isPlayer){let d=.09*n.st.flinch;n.pitch=pn(n.pitch+d*(.6+Math.random()*.6),-1.35,1.35),n.yaw+=(Math.random()-.5)*d*1.4,zs=Math.max(zs,.6*n.st.flinch),z("vign").style.opacity=.9,setTimeout(()=>z("vign").style.opacity=n.hp<50?.5:0,400),Hv(Zi[n.kind])}}function Fv(n,t,e){if(n.lostArm[t])return;n.lostArm[t]=!0;let i=n.veg.arms[t];i.lost=!0;let s=i.sh.getWorldPosition(new ut),r=i.sh.getWorldQuaternion(new on);ye.attach(i.sh),yo(i.sh,e.clone().multiplyScalar(3).add(new ut((Math.random()-.5)*2,2.5,(Math.random()-.5)*2)),new ut(Math.random()*8,Math.random()*8,Math.random()*8),{r:.05,splat:Zi[n.kind],snd:"splat2"});let o=new N(new xe(.05,10,8),rf(n.kind));o.position.copy(i.sh.position),n.veg.spine.add(o),o.position.set(i.side*n.veg.splitR,i.sh.position.y,0),o.position.copy(n.veg.spine.worldToLocal(s.clone()));for(let a=0;a<6;a++)setTimeout(()=>n.veg.spine&&ys(o.getWorldPosition(new ut),Zi[n.kind],3,1.5,.02,.6),a*120);n.isPlayer&&Ya("","\u8155\u3092\u5931\u3063\u305F\uFF01 \u72D9\u3044\u304C\u30D6\u30EC\u308B")}function Ov(n,t,e){if(n.lostLeg[t])return;n.lostLeg[t]=!0;let i=n.veg.legs[t];i.lost=!0,ye.attach(i.hp),yo(i.hp,e.clone().multiplyScalar(2.5).add(new ut((Math.random()-.5)*2,2.2,(Math.random()-.5)*2)),new ut(Math.random()*7,Math.random()*7,Math.random()*7),{r:.06,splat:Zi[n.kind],snd:"splat1"});let s=new N(new xe(.06,10,8),rf(n.kind));n.veg.hips.add(s),s.position.set(i.side*.1,0,0),n.lostLeg[0]&&n.lostLeg[1]&&(n.stance="prone"),n.isPlayer&&Ya("","\u811A\u3092\u5931\u3063\u305F\uFF01 \u52D5\u304D\u304C\u9045\u304F\u306A\u308B")}var zd={};function rf(n){return zd[n]||(zd[n]=new ee({map:j["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4})),zd[n]}function Bv(n,t){let e=n.veg;e.headGone=!0;let i=e.upper.localToWorld(new ut(0,(e.geo.split+e.geo.top)/2,0));e.upper.visible=!1,e.cap.visible=!0;let s=e.upper.material,r=rf(n.kind);for(let o=0;o<16;o++){let a=new ei(.05+Math.random()*.08,1),l=a.attributes.position;for(let h=0;h<l.count;h++)l.setXYZ(h,l.getX(h)*(.6+Math.random()*.8),l.getY(h)*(.4+Math.random()*.5),l.getZ(h)*(.6+Math.random()*.8));a.computeVertexNormals();let c=new N(a,[s,r][o%2]);c.castShadow=!0,c.position.copy(i).add(new ut((Math.random()-.5)*.2,(Math.random()-.5)*.2,(Math.random()-.5)*.2)),ye.add(c),yo(c,t.clone().multiplyScalar(4+Math.random()*4).add(new ut((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)),new ut(Math.random()*15,Math.random()*15,Math.random()*15),{r:.04,splat:Math.random()<.5?Zi[n.kind]:0,snd:o<3?"splat1":null})}for(let o of e.eyes){let a=o.g.getWorldPosition(new ut);ye.attach(o.g),yo(o.g,t.clone().multiplyScalar(3).add(new ut((Math.random()-.5)*3,3+Math.random()*2,(Math.random()-.5)*3)),new ut(Math.random()*10,Math.random()*10,0),{r:.04})}ys(i,Zi[n.kind],40,6,.035,1.2,t),mi(qs,i,1.2,.7,{color:Zi[n.kind],grow:2,opacity:.9}),Lt.play("crunch",{pos:i,vol:1,ref:8})}function Oh(n,t,e,i,s){n.alive=!1,n.hp=0,e?Bv(n,i):s.startsWith("body")&&ys(n.eye(),Zi[n.kind],24,5,.035,1,i),n.veg.dead=!0,n.veg.deadT=0,n.veg.fallDir=i.x*-Math.sin(n.yaw)+i.z*-Math.cos(n.yaw)>0?-1:1,n.veg.deadBaseY=n.pos.y;let r=n.veg.gun.root;ye.attach(r),yo(r,new ut((Math.random()-.5)*2,1.5,(Math.random()-.5)*2),new ut(Math.random()*3,Math.random()*3,Math.random()*3),{r:.05}),n.deaths++,t&&(t.kills++,t.score+=e?150:100,e&&t.hs++),kv(t,n,e),t&&t.isPlayer&&(Ya(e?"\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u30AD\u30EB",e?"+150":"+100"),Lt.play("hit",{vol:1,rate:.8})),n.isPlayer&&(ms={t:2.8,by:t,at:n.eye()},setTimeout(()=>{Y.phase!=="post"&&(Fn=Re.find(o=>o.team===pt.team&&o.alive)||t||null)},2800),Ys("\u3084\u3089\u308C\u305F",t?`${t.name} \u306B\u5012\u3055\u308C\u305F`:"",2)),Y.bomb.carrier===n&&(Y.bomb.carrier=null,Y.bomb.state="dropped",Y.bomb.pos.set(n.pos.x,xs(n.pos.x,n.pos.z,n.pos.y+.5)+.05,n.pos.z)),Y.mode==="range"&&!n.isPlayer&&(n.reviveT=2.2),tb(t,n)}function _r(n){if(!(n.reloadT>0||n.mag>=n.st.mag||n.reserve<=0||!n.alive)&&(n.reloadT=n.reloadMax=n.mag===0?n.st.reloadEmpty:n.st.reload,n.ads=Math.min(n.ads,0),n.adsWant=!1,n.isPlayer)){Lt.play("mag",{vol:.8});let t=n.reloadMax;setTimeout(()=>Lt.play("bolt1",{vol:.7}),t*620),setTimeout(()=>Lt.play("bolt2",{vol:.7}),t*850)}}function Hv(n){let t="#"+n.toString(16).padStart(6,"0");for(let e=0;e<5;e++){let i=document.createElement("div"),s=40+Math.random()*120;i.style.cssText=`position:absolute;left:${10+Math.random()*80}%;top:${10+Math.random()*75}%;width:${s}px;height:${s*(.8+Math.random()*.5)}px;border-radius:${40+Math.random()*20}% ${50+Math.random()*20}% ${45+Math.random()*20}% ${55+Math.random()*20}%;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,.35),${t} 30%,${t});opacity:.75;transition:opacity 1.6s,transform 1.6s;pointer-events:none`,z("dmg").appendChild(i),requestAnimationFrame(()=>{i.style.opacity=0,i.style.transform="translateY(30px)"}),setTimeout(()=>i.remove(),1700)}}var Ch=0,za=0,Yd=0;function Ya(n,t){z("killnote").innerHTML=(n?`<div class="k">${n}</div>`:"")+`<div class="h">${t}</div>`,Ch=1.8}function Ys(n,t,e=2.5){z("cmsg").textContent=n,z("csub").textContent=t||"",za=e}function kv(n,t,e){let i=r=>r&&r.team===pt.team?"a":"e",s=document.createElement("div");s.innerHTML=n?`<b class="${i(n)}">${n.name}</b> <span class="hs">${e?"\u25CE \u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u25B6"}</span> <b class="${i(t)}">${t.name}</b>`:`<b class="${i(t)}">${t.name}</b> \u7206\u767A\u306B\u5DFB\u304D\u8FBC\u307E\u308C\u305F`,z("feed").prepend(s),setTimeout(()=>s.remove(),5e3)}var Ph=0;function Am(n){let t=z("hitmark");t.classList.toggle("kill",n),t.style.opacity=1,Ph=.25,Lt.play("hit",{vol:.7,rate:n?.8:1.2})}function Gv(n){let t=document.createElement("div");t.className="dmga";let i=-(Math.atan2(n.x-pt.pos.x,n.z-pt.pos.z)-(pt.yaw+Math.PI));t.style.transform=`rotate(${i}rad)`,z("dmg").appendChild(t),setTimeout(()=>t.style.opacity=0,600),setTimeout(()=>t.remove(),1600)}var zv=90,Vv=45,mm=5,gm=7.5,Y={mode:"casual",phase:"lobby",time:0,timer:0,round:0,score:[0,0],attack:0,bomb:{state:"carried",carrier:null,pos:new ut,site:null,fuse:0,prog:0,defuser:null},postT:0,slowmo:0},Fn=null,ms=null,qa=[],Xs=[],Wv=(()=>{let n=new It,t=new N(new de(.04,.42,.04),new ee({color:6965802}));n.add(t);let e=new N(new de(.02,.12,.16),new ee({color:13159632,metalness:.9,roughness:.3}));return e.position.set(0,.17,.07),n.add(e),n})();function Xv(n){return new N(new xt(.05,.05,.14,10),new ee({color:n==="smoke"?5925466:3815994,roughness:.5}))}function Mr(n,t){!n.alive||Y.phase==="pre"||Y.phase==="post"||n.throwing||(t==="axe"?n.letN:n.tacN)<=0||(n.throwing=!0,n.adsWant=!1,Lt.play("cloth",n.isPlayer?{vol:.5}:{pos:n.pos,vol:.5}),setTimeout(()=>{if(n.throwing=!1,!n.alive)return;t==="axe"?n.letN--:n.tacN--,n.isPlayer&&z(t==="axe"?"letBtn":"tacBtn").classList.toggle("used",(t==="axe"?n.letN:n.tacN)<=0);let i=n.eye(),s=n.dir(),r=t==="axe"?Wv.clone():Xv(t);r.position.copy(i).addScaledVector(s,.5),ye.add(r);let o=t==="axe"?19:15;qa.push({kind:t,o:r,pos:r.position,vel:s.clone().multiplyScalar(o).add(new ut(0,t==="axe"?2.2:3.2,0)),t:0,fuse:t==="smoke"?1.4:t==="flash"?1.3:3,by:n,done:!1}),Lt.play("whoosh",n.isPlayer?{vol:.6}:{pos:n.pos,vol:.6})},n.st.throwT*1e3))}function qv(n){for(let t of qa){if(t.done)continue;t.t+=n;let e=t.vel.clone().multiplyScalar(n),i=e.length();if(!t.stuck){if(t.kind==="axe"){let o=e.clone().normalize();for(let a of Re)if(!(a===t.by||!a.alive||a.team===t.by.team)){for(let l of a.veg.computeHitSpheres()){let c=Qd(t.pos,o,l.c,l.r+.05);if(c>0&&c<i){Yv(a,t,l.part),t.done=!0;break}}if(t.done)break}if(t.done){ye.remove(t.o);continue}}let s=yr(t.pos,e.clone().normalize(),i+.05);if(s){let o=new ut;o.setComponent(s.axis,s.sign),t.pos.addScaledVector(e.clone().normalize(),Math.max(0,s.t-.06)),t.kind==="axe"?(t.stuck=!0,Lt.play("hit",{pos:t.pos,vol:.4,rate:.7})):(t.vel.reflect(o).multiplyScalar(.4),Lt.play("hit",{pos:t.pos,vol:.2,rate:1.4}))}else t.pos.add(e);let r=xs(t.pos.x,t.pos.z,t.pos.y+.1,.05);t.pos.y<r+.05&&(t.pos.y=r+.05,t.kind==="axe"?t.stuck=!0:(t.vel.y=Math.abs(t.vel.y)*.3,t.vel.x*=.6,t.vel.z*=.6)),t.vel.y-=16*n,t.kind==="axe"&&!t.stuck?t.o.rotation.x-=n*14:t.stuck||(t.o.rotation.z+=n*6)}t.t>=t.fuse&&(t.done=!0,t.kind==="smoke"?$v(t.pos.clone()):t.kind==="flash"&&Jv(t.pos.clone(),t.by),t.kind!=="axe"?ye.remove(t.o):setTimeout(()=>ye.remove(t.o),6e3))}for(let t=Xs.length-1;t>=0;t--)Xs[t].t-=n,Xs[t].t<=0&&Xs.splice(t,1)}function Yv(n,t,e){if(Y.mode==="range"&&n.isPlayer)return;let i=Zi[n.kind];ys(n.eye(),i,20,4,.03,.9),Lt.play("splat1",{pos:n.pos,vol:1,ref:5}),n.hp=0,t.by.isPlayer&&Am(!0),Oh(n,t.by,e==="head",t.vel.clone().normalize(),e.startsWith("body")?"body":e)}function $v(n){Lt.play("whoosh",{pos:n,vol:.9,rate:.6}),Xs.push({p:n.clone().setY(n.y+1.2),r:3.6,t:12});for(let t=0;t<14;t++){let e=Math.random()*6.28,i=Math.random()*2.6;mi(qs,new ut(n.x+Math.cos(e)*i,n.y+.4+Math.random()*2.4,n.z+Math.sin(e)*i),3.5+Math.random()*2,12+Math.random()*1.5,{grow:.15,vel:new ut((Math.random()-.5)*.3,.05,(Math.random()-.5)*.3),color:14212312,opacity:.95})}}function Zv(n,t){for(let e of Xs){let i=new ut().subVectors(t,n),s=pn(new ut().subVectors(e.p,n).dot(i)/i.lengthSq(),0,1);if(n.clone().addScaledVector(i,s).distanceTo(e.p)<e.r)return!0}return!1}function Jv(n,t){Lt.play("boom",{pos:n,vol:.7,rate:1.8}),mi(vo,n.clone().setY(n.y+.3),4,.15,{add:!0}),di.position.copy(n),di.intensity=120,setTimeout(()=>di.intensity=0,120);for(let e of Re){if(!e.alive)continue;let i=e.eye(),s=n.distanceTo(i);if(s>15||!wm(i,n.clone().setY(n.y+.2)))continue;let r=new ut().subVectors(n,i).normalize(),o=e.dir().dot(r),l=3*pn((1-s/15)*(.45+.55*Math.max(0,o)),0,1);e.isPlayer?e.blindT=Math.max(e.blindT||0,l):e.ai&&(e.ai.blind=Math.max(e.ai.blind||0,l))}}function Kv(){let n=[];for(let t of["A","B"]){for(let e of ln.holds[t].def)n.push(e);n.push([Ye[t].x,Ye[t].z])}return n.slice(0,8)}function jv(n){Y.mode!=="range"||!Re.includes(n)||(n.dispose(),n.veg=new Gs(n.kind,n.team,{lod:1,hat:n.hat,camo:n.camo}),ye.add(n.veg.root),Object.assign(n,{alive:!0,hp:100,stance:n.homeStance||"stand",lostArm:[!1,!1],lostLeg:[!1,!1]}),n.eyeH=n.targetEye(),n.vel.set(0,0,0),n.pos.copy(n.home))}function Rm(){if(!pt)return;let n=pt.st.tac;z("tacBtn").classList.toggle("hide",n==="none"),z("tacBtn").querySelector("span").textContent=n==="flash"?"\u5149":"\u7159",z("letBtn").classList.toggle("hide",pt.st.let==="none"),z("tacBtn").classList.remove("used"),z("letBtn").classList.remove("used")}function Qv(){Y.round=1,Y.score=[0,0],Y.attack=0;for(let t of Re)t.dispose();Re=[],ef(),pt=new Ws(gt.kind,0,!0,"\u3042\u306A\u305F");let n=["carrot","tomato","potato","pepper"];Kv().forEach(([t,e],i)=>{let s=new Ws(n[i%4],1,!1,"\u7684"+(i+1));s.pos.set(t,xs(t,e,3),e),s.home=s.pos.clone(),s.homeStance=["stand","stand","crouch","stand","prone"][i%5],s.stance=s.homeStance,s.eyeH=s.targetEye(),s.yaw=Math.random()*6.28,Re.push(s)}),Re.unshift(pt),pt.pos.copy(Ca.south[0]),pt.yaw=0,pt.pitch=0,Object.assign(Y.bomb,{state:"none",carrier:null,site:null}),Fn=null,ms=null,Y.phase="live",Y.timer=999,Y.time=0,z("ia0").textContent=Ii[pt.kind][0],z("ia1").textContent="-",z("ie0").textContent="\u7684",z("ie1").textContent="\u7684",z("roundInfo").textContent="\u5C04\u6483\u5834",z("side").textContent="\u52D5\u304B\u306A\u3044\u7684\u3067\u7DF4\u7FD2\uFF08\u5012\u3059\u30682\u79D2\u3067\u5FA9\u6D3B\uFF09\u3002\u30DD\u30FC\u30BA\u304B\u3089\u30DB\u30FC\u30E0\u306B\u623B\u308C\u307E\u3059",z("hpName").textContent=Ii[gt.kind],Pm={kills:0,hs:0},Dm(),pt.tacN=pt.st.tac==="none"?0:99,pt.letN=pt.st.let==="none"?0:99,Rm(),Ys("\u5C04\u6483\u5834",`${pt.st.name}\u30FB${ln.name}`,2.5)}function Cm(){if(window.VW_INGAME=!0,Y.mode==="range")return Qv();Y.round=0,Y.score=[0,0],Y.attack=Math.random()<.5?0:1;for(let s of Re)s.dispose();Re=[];let n=["carrot","tomato","potato","pepper"].filter(s=>s!==gt.kind);pt=new Ws(gt.kind,0,!0,"\u3042\u306A\u305F");let t=new Ws(n[0],0,!1,Ii[n[0]]+"(CPU)"),e=new Ws(n[1],1,!1,Ii[n[1]]+"(CPU)"),i=new Ws(n[2],1,!1,Ii[n[2]]+"(CPU)");Re=[pt,t,e,i];for(let s of Re)s.isPlayer||(s.ai={path:null,pi:0,goal:null,repath:0,think:0,target:null,seen:0,heard:null,hold:null,holdT:0,strafe:0,aimErr:new ut,mode:"obj",crouchT:0});z("ia0").textContent=Ii[pt.kind][0],z("ia1").textContent=Ii[t.kind][0],z("ie0").textContent=Ii[e.kind][0],z("ie1").textContent=Ii[i.kind][0],z("hpName").textContent=Ii[gt.kind],Pm={kills:0,hs:0},Dm(),of()}var Pm;function of(){Y.round++,ef();for(let a of Re){let l=a.kind;a.dispose(),a.veg=new Gs(l,a.team,{lod:1,hat:a.hat,camo:a.camo}),ye.add(a.veg.root),a.isPlayer&&a.setFirstPerson(!gt.tpp),Object.assign(a,{alive:!0,hp:100,stance:"stand",sprint:!1,ads:0,adsWant:!1,mag:a.st.mag,reserve:a.st.reserve,tacN:a.st.tac==="none"?0:1,letN:a.st.let==="none"?0:1,throwing:!1,blindT:0,boltT:0,reloadT:0,needBolt:!1,slideT:0,eyeH:1.58,stanceT:0,stamina:a.st.stamina,sprintOutT:0,lostArm:[!1,!1],lostLeg:[!1,!1],revealT:0,kickedOut:!1}),a.vel.set(0,0,0)}let n=Y.attack,t=Re.filter(a=>a.team===n),e=Re.filter(a=>a.team!==n);t.forEach((a,l)=>{a.pos.copy(Ca.south[l]),a.yaw=0,a.pitch=0}),e.forEach((a,l)=>{a.pos.copy(Ca.north[l]),a.yaw=Math.PI,a.pitch=0});let i=t.find(a=>a.isPlayer)||t[0];Object.assign(Y.bomb,{state:"carried",carrier:i,site:null,fuse:0,prog:0,defuser:null});for(let a of Re)a.ai&&Object.assign(a.ai,{path:null,goal:null,target:null,seen:0,heard:null,hold:null,mode:"obj",think:Math.random()*.3,site:Math.random()<.5?"A":"B",threat:null});let s=e.filter(a=>a.ai);s.forEach((a,l)=>a.ai.site=s.length===2?l===0?"A":"B":Math.random()<.5?"A":"B");let r=t.filter(a=>a.ai),o=Math.random()<.5?"A":"B";r.forEach(a=>a.ai.site=o);for(let a of qa)a.o.parent&&a.kind!=="axe"&&ye.remove(a.o);if(qa.length=0,Xs.length=0,Fn=null,ms=null,z("kcam").classList.add("hide"),Rm(),Y.phase="pre",Y.timer=4,Y.time=0,z("roundInfo").textContent=`\u30E9\u30A6\u30F3\u30C9 ${Y.round}`,z("side").textContent=pt.team===n?"\u653B\u6483\u5074\uFF1A\u7206\u5F3E\u3092 A \u304B B \u306B\u8A2D\u7F6E\u305B\u3088":"\u9632\u885B\u5074\uFF1A\u7206\u5F3E\u306E\u8A2D\u7F6E\u3092\u963B\u6B62\u305B\u3088",Ys(`\u30E9\u30A6\u30F3\u30C9 ${Y.round}`,pt.team===n?"\u653B\u6483":"\u9632\u885B",3.5),Y.round<=2){let a=z("tip");a.classList.remove("hide"),a.textContent=(Li?"\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F \u2192 \u96E2\u3059\u3068\u767A\u5C04\u3002":"\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u8997\u304F \u2192 \u5DE6\u30AF\u30EA\u30C3\u30AF\u3067\u767A\u5C04\u3002")+(pt.st.rifle==="root"?"\u8170\u304B\u3089\u4E0A\u306A\u3089\u4E00\u6483":"\u982D\u301C\u80F8\u306A\u3089\u4E00\u6483"),Yd=6}z("vign").style.opacity=0,Lt.play("whoosh",{vol:.6})}function tb(n,t){if(Y.mode==="range"||Y.phase!=="live"&&Y.phase!=="planted")return;let e=[0,1].map(r=>Re.filter(o=>o.team===r&&o.alive).length),i=Y.attack,s=1-i;if(e[i]===0&&Y.phase!=="planted")return _o(s,"\u653B\u6483\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);if(e[s]===0)return _o(i,"\u9632\u885B\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);e[i]===0&&Y.phase}function _o(n,t,e){if(Y.phase==="post")return;Y.phase="post",Y.postT=5,Y.score[n]++,z("scA").textContent=Y.score[0],z("scB").textContent=Y.score[1];let i=n===pt.team;Ys(i?"\u30E9\u30A6\u30F3\u30C9\u52DD\u5229":"\u30E9\u30A6\u30F3\u30C9\u6557\u5317",t,4.5),z("cmsg").style.color=i?"#ffd040":"#ff5a4a",Lt.play(i?"win":"lose",{vol:.8}),e&&(Y.slowmo=1.4,e.isPlayer||(Fn=e,Ya("\u30D5\u30A1\u30A4\u30CA\u30EB\u30AD\u30EB",e.name))),xr(null)}function eb(){z("cmsg").style.color="";let n=nb();if(Y.score[0]>=n.winR||Y.score[1]>=n.winR)return ib();Y.round%n.swap===0&&(Y.attack=1-Y.attack,Ys("\u653B\u5B88\u4EA4\u4EE3","",2)),of()}function nb(){return Y.mode==="rank"?{winR:8,swap:4}:{winR:gt.winR,swap:gt.swap}}function ib(){Y.phase="end";let n=Y.score[0]>Y.score[1];z("resTitle").textContent=n?"\u52DD\u5229":"\u6557\u5317",z("resTitle").className=n?"win":"lose",z("resScore").innerHTML=`<span class="ally">${Y.score[0]}</span> - <span class="enemy">${Y.score[1]}</span>`;let t=pt.shots?Math.round(pt.hits/pt.shots*100):0;z("resStats").innerHTML=`<div><b>${pt.kills}</b>\u30AD\u30EB</div><div><b>${pt.hs}</b>\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8</div><div><b>${pt.hits}/${pt.shots}</b>\u547D\u4E2D</div>`;let e=[...Re].sort((i,s)=>s.score-i.score)[0];if(z("board").innerHTML="<tr><th></th><th>\u540D\u524D</th><th>\u30AD\u30EB</th><th>\u30C7\u30B9</th><th>HS</th><th>\u30B9\u30B3\u30A2</th></tr>"+[0,1].map(i=>Re.filter(s=>s.team===i).sort((s,r)=>r.score-s.score).map(s=>`<tr class="${i===0?"ally":"enemy"}${s===pt?" me":""}"><td>${s===e?'<span class="mvp">MVP</span>':""}</td><td>${s.name}</td><td>${s.kills}</td><td>${s.deaths}</td><td>${s.hs}</td><td>${s.score}</td></tr>`).join("")).join(""),z("result").classList.remove("hide"),z("ctl").classList.add("hide"),document.pointerLockElement&&document.exitPointerLock(),Lt.bgm(!1),Lt.play(n?"win":"lose"),z("rankRes").innerHTML="",Y.mode==="rank"){let i=Xi(Oe.rp),s=um(Oe,{win:n,rounds:Y.score[0],kills:pt.kills,hs:pt.hs,mvp:e===pt});Oe.rp=s.after,Oe.best=Math.max(Oe.best,Oe.rp),Oe.games++,n&&Oe.wins++,Oe.kills+=pt.kills,Oe.history.unshift({win:n,sc:Y.score.join("-"),rp:s.total,map:ln.name}),Oe.history=Oe.history.slice(0,20),kd(Oe);let r=Xi(Oe.rp),o=r.index>i.index||r.index===i.index&&r.div>i.div;z("rankRes").innerHTML=`<div class="rkHead">${po(r.tier.id,64,r.div)}<div><div class="nm">${r.label}${o?' <span style="color:#ffd040">\u30E9\u30F3\u30AF\u30A2\u30C3\u30D7\uFF01</span>':""}</div><div class="rkBar"><i style="width:${r.progress*100}%"></i></div><small>${Oe.rp} RP</small></div><div class="rpList" style="flex:1">${s.items.map(([a,l])=>`<div>${a}<b>${l>=0?"+":""}${l}</b></div>`).join("")}<div class="tot">\u5408\u8A08<b>${s.total>=0?"+":""}${s.total} RP</b></div></div></div>`}}function sb(n){if(Y.time+=n,Y.mode==="range"){Y.phase="live",Y.timer=999;return}if(Y.phase==="pre")Y.timer-=n,Y.timer<=0?(Y.phase="live",Y.timer=zv,Ys("\u958B\u59CB","",1),Lt.play("beep",{vol:.8})):Math.ceil(Y.timer)!==Math.ceil(Y.timer+n)&&Lt.play("tick",{vol:.6});else if(Y.phase==="live")Y.timer-=n,Y.timer<=0&&(Y.timer=0,_o(1-Y.attack,"\u6642\u9593\u5207\u308C \u2014 \u9632\u885B\u6210\u529F"));else if(Y.phase==="planted"){let e=Y.bomb;e.fuse-=n,Y.timer=e.fuse,e.beepT=(e.beepT||0)-n,e.beepT<=0&&(Lt.play("beep",{pos:e.pos,vol:.9,ref:6}),e.beepT=e.fuse>15?1:e.fuse>6?.5:e.fuse>2?.25:.12),e.fuse<=0&&ab()}else Y.phase==="post"&&(Y.postT-=n,Y.postT<=0&&eb());let t=Y.bomb;if(t.state==="dropped"){for(let e of Re)if(e.alive&&e.team===Y.attack&&e.pos.distanceTo(t.pos)<1.3){t.state="carried",t.carrier=e,e.isPlayer&&Ya("","\u7206\u5F3E\u3092\u62FE\u3063\u305F");break}}if(t.state==="carried"&&t.carrier&&t.pos.copy(t.carrier.pos),t.planting){let e=t.planting;!e.alive||!e.wantAct||e.pos.distanceTo(Ye[t.plantSite])>2.4||Y.phase!=="live"?(t.planting=null,t.prog=0,e.isPlayer&&xr(null)):(t.prog+=n,e.isPlayer&&xr("\u7206\u5F3E\u3092\u8A2D\u7F6E\u4E2D",t.prog/mm),t.prog>=mm&&ob(e,t.plantSite))}if(t.defusing){let e=t.defusing;!e.alive||!e.wantAct||e.pos.distanceTo(t.pos)>2||Y.phase!=="planted"?(t.defusing=null,t.prog=0,e.isPlayer&&xr(null)):(t.prog+=n,e.isPlayer&&xr("\u7206\u5F3E\u3092\u89E3\u9664\u4E2D",t.prog/gm),t.prog>=gm&&(t.defusing=null,xr(null),t.state="defused",Lt.play("ui",{vol:1}),e.score+=100,Im(`${e.name} \u304C\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F`),_o(1-Y.attack,"\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F")))}}function Im(n){let t=document.createElement("div");t.textContent=n,z("feed").prepend(t),setTimeout(()=>t.remove(),5e3)}function Mo(n){let t=Y.bomb;if(n.alive){if(Y.phase==="live"&&t.carrier===n){for(let e of["A","B"])if(n.pos.distanceTo(Ye[e])<2.4&&!t.planting)return t.planting=n,t.plantSite=e,t.prog=0,Lt.play("cloth",{pos:n.pos,vol:.7}),!0}return Y.phase==="planted"&&n.team!==Y.attack&&n.pos.distanceTo(t.pos)<2&&!t.defusing?(t.defusing=n,t.prog=0,Lt.play("cloth",{pos:n.pos,vol:.7}),!0):!1}}var qi;function rb(){let n=new It,t=new N(new de(.4,.18,.28),new ee({color:3815984,roughness:.7,map:j.polymer.map}));t.position.y=.09,n.add(t);for(let s=0;s<3;s++){let r=new N(new xt(.045,.045,.34,12),new ee({color:13138474,roughness:.5}));r.rotation.z=Math.PI/2,r.position.set(0,.22,-.08+s*.08),n.add(r)}let e=new N(new He(.16,.08),new vi({color:16724e3}));e.rotation.x=-Math.PI/2,e.position.set(.08,.181,0),n.add(e),n.userData.scr=e;let i=new N(new Je(.08,.008,6,16,Math.PI),new ee({color:13639712}));return i.position.set(-.12,.2,0),n.add(i),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),n}function ob(n,t){let e=Y.bomb;e.planting=null,e.prog=0,xr(null),e.state="planted",e.carrier=null,e.site=t,e.fuse=Vv,e.beepT=0,Y.phase="planted",n.score+=100,Im(`${n.name} \u304C ${t} \u306B\u7206\u5F3E\u3092\u8A2D\u7F6E`),Ys("\u7206\u5F3E\u304C\u8A2D\u7F6E\u3055\u308C\u305F",`\u30B5\u30A4\u30C8 ${t}`,2.5),Lt.play("beep",{vol:1})}function ab(){let n=Y.bomb;n.state="exploded",Lt.play("boom",{vol:1});for(let t=0;t<6;t++)mi(qs,n.pos.clone().add(new ut((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3)),3+Math.random()*3,2.5,{grow:.8,color:4866104,opacity:.9});for(let t=0;t<4;t++)mi(vo,n.pos.clone().add(new ut(0,1,0)),6+t*2,.35,{add:!0});ys(n.pos.clone().add(new ut(0,.5,0)),3813408,40,12,.06,2),di.position.copy(n.pos).add(new ut(0,2,0)),di.intensity=400,di.distance=40,setTimeout(()=>{di.intensity=0,di.distance=8},300),zs=1.2;for(let t of Re)t.alive&&t.pos.distanceTo(n.pos)<9&&(t.hp=0,Oh(t,null,!1,new ut().subVectors(t.pos,n.pos).normalize(),"body"));_o(Y.attack,"\u7206\u5F3E\u304C\u7206\u767A\u3057\u305F")}function xr(n,t){if(!n){z("prog").classList.add("hide");return}z("prog").classList.remove("hide"),z("progT").textContent=n,z("progF").style.width=pn(t,0,1)*100+"%"}var zs=0;function Lm(n,t,e){let i=(n.lostLeg[0]?1:0)+(n.lostLeg[1]?1:0),s=(n.stance==="prone"?.85:n.stance==="crouch"?2.1:t.sprint?6.1:4.4)*(n.st?n.st.move:1);n.stanceT>0&&(s*=n.stance==="prone"?.15:.6),t.mag<.45&&n.stance==="stand"&&!t.sprint&&(s=2),s*=Wa(1,n.st?n.st.adsMove:.45,n.ads),i===1&&(s*=.45),i===2&&(s=Math.min(s,.6)),(Y.phase==="pre"||Y.bomb.planting===n||Y.bomb.defusing===n)&&(s=0);let o=t.x*s*Math.min(1,t.mag*1.4),a=t.z*s*Math.min(1,t.mag*1.4);if(n.slideT>0){n.slideT-=e;let u=n.slideT/.7;o=n.slideDir.x*8*u+o*.2,a=n.slideDir.z*8*u+a*.2,n.slideT<=0&&(n.stance="crouch")}let l=n.onGround?14:3;n.vel.x=Yi(n.vel.x,o,l,e),n.vel.z=Yi(n.vel.z,a,l,e),n.vel.y-=16*e,n.pos.x+=n.vel.x*e,n.pos.z+=n.vel.z*e,Av(n.pos,Tv(n),n.stance==="prone"?.36:wv),n.pos.x=pn(n.pos.x,he.minX+.5,he.maxX-.5),n.pos.z=pn(n.pos.z,he.minZ+.5,he.maxZ-.5);let c=xs(n.pos.x,n.pos.z,n.pos.y);n.pos.y+=n.vel.y*e,n.pos.y<=c?(!n.onGround&&n.vel.y<-4&&xm(n,1.3),n.pos.y=c,n.vel.y=0,n.onGround=!0):n.pos.y-c>.08?n.onGround=!1:n.onGround&&(n.pos.y=c,n.vel.y=0);let h=Math.hypot(n.vel.x,n.vel.z);if(n.moveAmt=h,n.onGround&&h>.5){n.stepAcc+=h*e;let u=n.sprint?1.6:1.2;if(n.stepAcc>u){n.stepAcc=0;let d=(n.stance==="prone"||n.stance==="crouch"||h<2.3?0:n.sprint?1:.6)*(n.st?n.st.quiet:1);d>.05&&xm(n,d)}}}function xm(n,t){let e=Vp(xo,n.pos.x,n.pos.y+.05,n.pos.z),s=(e==="wood"||e==="carpet"?["step_wood-000","step_wood-001"]:e==="grass"?["step_grass-001","step_grass-004"]:["step_concrete-001","step_concrete-002"])[Math.random()<.5?0:1];if(n.isPlayer?Lt.play(s,{vol:.25*t,vary:.15}):Lt.play(s,{pos:n.pos,vol:.9*t,ref:3,roll:1.1,vary:.15,maxDist:30}),t>.5)for(let r of Re)r.ai&&r.alive&&r.team!==n.team&&r.pos.distanceTo(n.pos)<14*t&&(r.ai.heard={pos:n.pos.clone(),t:2.5});t>.5&&(n.revealT=Math.max(n.revealT,.6))}var ym=new Proxy({},{get:(n,t)=>ln.holds[t]});function lb(n){return Re.filter(t=>t.team!==n.team&&t.alive)}function cb(n,t){let e=n.eye(),i=new ut().subVectors(t.eye(),e),s=i.length();if(s>90)return!1;i.normalize();let r=new ut(-Math.sin(n.yaw),0,-Math.cos(n.yaw));if(new ut(i.x,0,i.z).normalize().dot(r)<Math.cos(Math.PI*.42)&&s>4||n.ai&&n.ai.blind>0)return!1;let a=[t.eye(),new ut(t.pos.x,t.pos.y+(t.stance==="prone"?.3:.9),t.pos.z)];for(let l of a)if(wm(e,l)&&!Zv(e,l))return!0;return!1}function hb(n,t){let e=n.ai;if(!n.alive)return;let i=Y.mode==="rank"?Xi(Oe.rp).tier.diff:gt.diff;if(e.blind>0&&(e.blind-=t),e.think-=t,e.heard&&(e.heard.t-=t,e.heard.t<=0&&(e.heard=null)),e.think<=0){e.think=.15;let a=null,l=1e9;for(let c of lb(n))if(cb(n,c)){let h=n.pos.distanceTo(c.pos);h<l&&(l=h,a=c)}a!==e.target&&(e.seen=0,e.target=a,a&&e.aimErr.set(Math.random()-.5,(Math.random()-.5)*.6,Math.random()-.5).multiplyScalar([.5,.35,.25][i])),!a&&e.target&&(e.target=null)}let s={x:0,z:0,mag:0,sprint:!1},r=null,o=e.target;if(o&&o.alive){e.seen+=t;let a=[1.1,.7,.45][i],c=e.aimHead??(e.aimHead=Math.random()<[.25,.4,.55][i])?o.eye().add(new ut(0,-.05,0)):new ut(o.pos.x,o.pos.y+(o.stance==="prone"?.25:o.stance==="crouch"?.75:1.05),o.pos.z),h=Math.exp(-e.seen*[1.4,2,2.8][i])+(o.moveAmt>2?[.12,.08,.05][i]:0)+[.035,.018,.008][i];if(r=c.clone().add(e.aimErr.clone().multiplyScalar(h*n.eye().distanceTo(c)*.25)),n.adsWant=e.seen>a*.4&&n.boltT<=0&&n.reloadT<=0,e.strafe-=t,e.strafe<=0&&(e.strafe=.6+Math.random()*1.2,e.strafeDir=Math.random()<.5?-1:1,Math.random()<.25&&n.stance==="stand"?n.stance="crouch":Math.random()<.2&&(n.stance="stand")),n.ads<.5||i===2){let d=new ut(Math.cos(n.yaw),0,-Math.sin(n.yaw));s.x=d.x*e.strafeDir,s.z=d.z*e.strafeDir,s.mag=.5}if(e.seen>a&&n.ads>.92&&nf(n)){let d=new ut().subVectors(r,n.eye()).normalize(),f=n.dir();f.dot(d)>.9995&&(sf(n,f),e.aimHead=void 0,e.aimErr.multiplyScalar(.6),e.seen=a*.35)}e.lastSeenPos=o.pos.clone();let u=n.pos.distanceTo(o.pos);n.letN>0&&u<9&&u>3&&e.seen>a&&!n.throwing&&Math.random()<t*.35*(i+1)&&(r=o.eye().add(new ut(0,.25+u*.03,0)),Mr(n,"axe"))}else{n.adsWant=!1,n.stance==="crouch"&&Math.random()<t*.3&&(n.stance="stand");let a=ub(n);if(a)if(e.repath-=t,(!e.path||e.repath<=0||!e.goal||e.goal.distanceTo(a)>1.5)&&(e.goal=a.clone(),e.path=Em.path(n.pos.x,n.pos.z,a.x,a.z),e.pi=1,e.repath=3),e.path&&e.pi<e.path.length){let[c,h]=e.path[e.pi],u=c-n.pos.x,d=h-n.pos.z,f=Math.hypot(u,d);f<.45?e.pi++:(s.x=u/f,s.z=d/f,s.mag=1,s.sprint=e.rush&&f>3,e.sneak&&(s.mag=.4)),r=new ut(c,n.eye().y,h),f<.45&&e.pi>=e.path.length&&(e.path=null)}else e.holdT-=t,e.holdT<=0&&(e.holdT=2+Math.random()*3,e.lookYaw=e.watchYaw!==void 0?e.watchYaw+(Math.random()-.5)*1.4:Math.random()*6.28,Math.random()<.3&&(n.stance="crouch")),e.lookYaw!==void 0&&(r=n.eye().add(new ut(-Math.sin(e.lookYaw),-.05,-Math.cos(e.lookYaw))));if(e.heard&&(r=new ut(e.heard.pos.x,n.eye().y,e.heard.pos.z)),n.tacN>0&&!n.throwing){let c=Y.bomb,h=null;n.st.tac==="smoke"&&(c.carrier===n&&Y.phase==="live"&&n.pos.distanceTo(Ye[e.site])<7&&(h=Ye[e.site]),Y.phase==="planted"&&n.team!==Y.attack&&n.pos.distanceTo(c.pos)<8&&(h=c.pos)),n.st.tac==="flash"&&e.heard&&n.pos.distanceTo(e.heard.pos)>5&&n.pos.distanceTo(e.heard.pos)<15&&Math.random()<t*.5&&(h=e.heard.pos),h&&(r=new ut(h.x,n.eye().y+.6,h.z),Mr(n,n.st.tac))}n.wantAct=!1;let l=Y.bomb;if(l.carrier===n&&Y.phase==="live"){let c=Ye[e.site];n.pos.distanceTo(c)<2&&(n.wantAct=!0,l.planting||Mo(n))}Y.phase==="planted"&&n.team!==Y.attack&&n.pos.distanceTo(l.pos)<1.8&&(n.wantAct=!0,l.defusing||Mo(n))}if(o&&o.alive&&(n.wantAct=!1),r){let a=new ut().subVectors(r,n.eye()),l=Math.atan2(-a.x,-a.z),c=Math.atan2(a.y,Math.hypot(a.x,a.z)),h=o?[3.5,5,7][i]:4;n.yaw+=vv(n.yaw,l)*Math.min(1,h*t*(n.ads>.5?.6:1)),n.pitch+=(c-n.pitch)*Math.min(1,h*t)}if(s.mag>.3&&!o&&(e.stuckT=(e.stuckT||0)+t,e.stuckT>.8&&(e.stuckPos&&e.stuckPos.distanceTo(n.pos)<.25&&(e.path=null,e.repath=0,e.hold=null,e.unstick=.6,e.unstickDir=Math.random()<.5?1:-1),e.stuckPos=n.pos.clone(),e.stuckT=0)),e.unstick>0){e.unstick-=t;let a=new ut(Math.cos(n.yaw),0,-Math.sin(n.yaw)).multiplyScalar(e.unstickDir);s.x=a.x,s.z=a.z,s.mag=1}n.sprint=s.sprint,Lm(n,s,t),n.mag===0&&n.reloadT<=0&&n.boltT<=0&&_r(n),!o&&n.mag<3&&n.reloadT<=0&&n.boltT<=0&&n.reserve>0&&Math.random()<t*.5&&_r(n)}function ub(n){let t=n.ai,e=Y.bomb,i=n.team===Y.attack;if(t.rush=!1,t.sneak=!1,t.watchYaw=void 0,Y.phase==="pre")return null;if(t.heard&&!t.target&&Math.random()<.002)return t.heard.pos;if(i){if(e.state==="dropped")return t.rush=!0,e.pos;if(e.carrier===n&&Y.phase==="live")return t.rush=Y.timer<40,Ye[t.site];if(Y.phase==="planted"){if(!t.hold||t.holdFor!=="postplant"){let r=ym[e.site].att[Math.floor(Math.random()*2)];t.hold=new ut(r[0],0,r[1]),t.holdFor="postplant"}return t.watchYaw=Math.atan2(-(e.pos.x-t.hold.x),-(e.pos.z-t.hold.z)),t.hold}let s=e.carrier;if(s&&s!==n){let r=new ut(Math.sin(n.kind.length)*2.5,0,2.5);return s.pos.clone().add(r)}return Ye[t.site]}else{if(Y.phase==="planted")return t.rush=!0,e.pos;if(!t.hold||t.holdFor!==t.site||(t.swapT=(t.swapT||0)-.016)<-25){let s=ym[t.site].def,r=s[Math.floor(Math.random()*s.length)];t.hold=new ut(r[0],0,r[1]),t.holdFor=t.site,t.swapT=0}return t.watchYaw=Math.atan2(-(0-t.hold.x)*.3,-(10-t.hold.z)),t.rush=n.pos.distanceTo(t.hold)>12,t.hold}}var Nh=.66,Gt={root:new It,gun:null,arms:[],kick:0,sway:new ht,bob:0,boltAnim:0,reloadAnim:0,sprintK:0,shells:[]};function db(){Gt.gun=La(1),Gt.root.add(Gt.gun.root),_s.add(Gt.root),Gt.armL=Od(-1,2783968,.34,.32),Gt.armR=Od(1,2783968,.36,.32);for(let n of[Gt.armL,Gt.armR])n.up.visible=!1;Gt.armL.sh.position.set(-.06,-.34,-.25),Gt.armR.sh.position.set(.34,-.55,.12),Gt.gun.root.scale.setScalar(Nh),$i.add(Gt.armL.sh),$i.add(Gt.armR.sh),_s.add($i),Gt.armL.sh.traverse(n=>n.frustumCulled=!1),Gt.armR.sh.traverse(n=>n.frustumCulled=!1),Gt.gun.root.traverse(n=>n.frustumCulled=!1)}function Dm(){let n=Gt.gun;Gt.root.remove(n.root),Gt.gun=La(1,gt.camo),Gt.gun.root.scale.setScalar(Nh),Gt.root.add(Gt.gun.root),Gt.gun.root.traverse(t=>t.frustumCulled=!1)}function fb(){Gt.kick=1,Lh.intensity=6,setTimeout(()=>Lh.intensity=0,60),mi(vo,Gt.gun.muzzlePt.getWorldPosition(new ut),.35,.05,{add:!0,scene:_s})}function pb(n,t,e){let i=pt,s=Gt.gun;Gt.kick=Yi(Gt.kick,0,9,n),Gt.sway.x=Yi(Gt.sway.x,pn(-t*.0025,-.06,.06),8,n),Gt.sway.y=Yi(Gt.sway.y,pn(e*.0025,-.05,.05),8,n);let r=Math.hypot(i.vel.x,i.vel.z);Gt.bob+=n*r*2,Gt.sprintK=Yi(Gt.sprintK,i.sprint&&r>3&&i.ads<.1?1:0,8,n);let o=i.ads,a=s.eyePt.position.y,l=s.eyePt.position.z,c=new ut(.17,-.18,-.52),h=new ut(0,-a*Nh,-l*Nh-.08),u=c.clone().lerp(h,Math.pow(o,.8)),d=(1-o*.9)*Math.min(1,r/4);u.x+=Math.sin(Gt.bob)*.012*d+Gt.sway.x,u.y+=Math.abs(Math.cos(Gt.bob))*.014*d+Gt.sway.y-(i.stance==="crouch"?.01:0),u.z+=Gt.kick*.12;let f=i.boltT>0?1-i.boltT/i.st.bolt:0,p=i.boltT>0?Math.sin(Math.min(1,f*1.2)*Math.PI):0;s.setBolt(i.boltT>0?pn((f-.15)/.75,0,1):0);let x=i.reloadT>0?1-i.reloadT/(i.reloadMax||3):0,m=i.reloadT>0?Math.sin(x*Math.PI):0;s.mag.position.y=-.04-(x>.15&&x<.6?Math.sin((x-.15)/.45*Math.PI)*.25:0),Gt.root.position.copy(u).add(new ut(-.04*Gt.sprintK,-.08*Gt.sprintK-.05*m,.05*Gt.sprintK)),Gt.root.rotation.set(Gt.kick*.14+Gt.sprintK*-.45+m*.3+p*.12,Gt.sprintK*.9+m*.2,Gt.sprintK*.35+p*.35+m*.5),Gt.root.updateMatrixWorld(!0),$i.updateMatrixWorld(!0);let g=s.gripPt.getWorldPosition(new ut),M=s.forePt.getWorldPosition(new ut),S=s.boltPt.getWorldPosition(new ut),v=i.boltT>0?g.clone().lerp(S,pn(p*1.6,0,1)):i.reloadT>0?g.clone().lerp(s.mag.getWorldPosition(new ut),Math.sin(pn(x*1.2,0,1)*Math.PI)):g,C=s.root.getWorldQuaternion(new on);bh(Gt.armR,Oa(v,C,"grip"),$i.localToWorld(new ut(1.2,-1.2,.4))),bh(Gt.armL,Oa(M,C,"fore"),$i.localToWorld(new ut(-.6,-1.4,-.2))),Fa(Gt.armR,C,"grip"),Fa(Gt.armL,C,"fore"),Gt.root.visible=Gt.armL.sh.visible=Gt.armR.sh.visible=o<.88&&!gt.tpp&&i.alive&&!Fn,i.lostArm[0]&&(Gt.armL.sh.visible=!1),i.lostArm[1]&&(Gt.armR.sh.visible=!1)}var we={joy:null,jx:0,jz:0,jmag:0,sprintLock:!1,look:null,lookDX:0,lookDY:0,keys:{},fireHeld:null,mouseDown:!1,rmb:!1},Vs=z("ctl");Li&&z("joyBase").classList.remove("hide");function Nm(){z("fireL").classList.toggle("hide",!gt.leftFire)}Nm();function mb(){let n=(i,s)=>i<innerWidth*.42&&s>innerHeight*.3,t=new Map;Vs.addEventListener("touchstart",i=>{Lt.resume();for(let s of i.changedTouches){let r=s.target.closest&&s.target.closest(".b");if(r){i.preventDefault(),wh(r.id,!0,s),t.set(s.identifier,{btn:r.id,x:s.clientX,y:s.clientY});continue}if(!we.joy&&n(s.clientX,s.clientY)){we.joy={id:s.identifier,x:s.clientX,y:s.clientY};let o=z("joyBase");o.classList.add("act"),o.style.left=s.clientX+"px",o.style.top=s.clientY+"px",t.set(s.identifier,{joy:!0})}else we.look||(we.look={id:s.identifier,x:s.clientX,y:s.clientY},t.set(s.identifier,{look:!0}))}},{passive:!1}),Vs.addEventListener("touchmove",i=>{i.preventDefault();for(let s of i.changedTouches){let r=t.get(s.identifier);if(r){if(r.joy){let o=parseFloat(getComputedStyle(z("joyBase")).width)/2,a=(s.clientX-we.joy.x)/o,l=(s.clientY-we.joy.y)/o,c=Math.hypot(a,l);we.sprintLock=l<-1.45&&Math.abs(a)<.8,c>1&&(a/=c,l/=c),we.jx=a,we.jz=l,we.jmag=Math.min(1,c),z("joyKnob").style.transform=`translate(${a*o*.6}px,${l*o*.6}px)`,z("sprintLock").classList.toggle("on",we.sprintLock)}else if(r.look||r.btn==="fireR"||r.btn==="fireL"){let o=r.look?we.look:r,a=s.clientX-o.x,l=s.clientY-o.y;o.x=s.clientX,o.y=s.clientY,we.lookDX+=a,we.lookDY+=l}}}},{passive:!1});let e=i=>{for(let s of i.changedTouches){let r=t.get(s.identifier);if(r)if(t.delete(s.identifier),r.joy){we.joy=null,we.jx=we.jz=we.jmag=0;let o=z("joyBase");o.classList.remove("act"),o.style.left="",o.style.top="",z("joyKnob").style.transform="",we.sprintLock}else r.look?we.look=null:r.btn&&wh(r.btn,!1,s)}};Vs.addEventListener("touchend",e),Vs.addEventListener("touchcancel",e),Vs.addEventListener("mousedown",i=>{let s=i.target.closest(".b");if(s&&!document.pointerLockElement){wh(s.id,!0,i);let r=()=>{wh(s.id,!1,i),removeEventListener("mouseup",r)};addEventListener("mouseup",r)}})}function wh(n,t,e){let i=pt;if(!i)return;let s=z(n);if(s&&s.classList.toggle("press",t),(n==="fireR"||n==="fireL")&&(t?(we.fireHeld=n,gt.fireMode==="tap"||i.adsToggle?Uh():(i.adsWant=!0,i.fireOnRelease=!0)):we.fireHeld===n&&(we.fireHeld=null,i.fireOnRelease&&(i.fireOnRelease=!1,Uh(),i.adsToggle||(i.adsWant=!1)))),!t){n==="actBtn"&&(i.wantAct=!1);return}if(Lt.play("ui",{vol:.25}),n==="adsBtn"&&(i.adsToggle=!i.adsToggle,i.adsWant=i.adsToggle,z("adsBtn").classList.toggle("on",i.adsToggle)),n==="jumpBtn"&&Um(i),n==="crouchBtn"&&Fm(i),n==="proneBtn"){if(i.lostLeg[0]&&i.lostLeg[1])return;i.stance=i.stance==="prone"?"stand":"prone",Lt.play("cloth",{vol:.5})}n==="reloadBtn"&&_r(i),n==="tacBtn"&&Mr(i,i.st.tac),n==="letBtn"&&Mr(i,"axe"),n==="camBtn"&&Om(),n==="pauseBtn"&&lf(!0),n==="actBtn"&&(i.wantAct=!0,Mo(i))}function Uh(){let n=pt;if(n.alive){if(!nf(n)){n.mag<=0&&_r(n);return}sf(n,n.dir())}}function Um(n){if(!(!n.alive||!n.onGround||Y.phase==="pre"||n.lostLeg[0]&&n.lostLeg[1])){if(n.stance!=="stand"){n.stance="stand";return}n.vel.y=5.4,n.onGround=!1,Lt.play("cloth",{vol:.4})}}function Fm(n){if(n.alive){if(n.sprint&&n.stance==="stand"&&Math.hypot(n.vel.x,n.vel.z)>4){n.slideT=.7,n.stance="crouch",n.slideDir.set(n.vel.x,0,n.vel.z).normalize(),Lt.play("whoosh",{vol:.4});return}n.stance=n.stance==="crouch"?"stand":"crouch",Lt.play("cloth",{vol:.35})}}function Om(){gt.tpp=gt.tpp?0:1,fi(),z("camBtn").textContent=gt.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0",pt&&pt.setFirstPerson(!gt.tpp)}function gb(){addEventListener("keydown",n=>{if(Y.phase==="lobby"||!pt)return;we.keys[n.code]=!0;let t=pt;n.code==="Space"&&Um(t),(n.code==="KeyC"||n.code==="ControlLeft")&&Fm(t),n.code==="KeyZ"&&(t.stance=t.stance==="prone"?"stand":"prone"),n.code==="KeyR"&&_r(t),n.code==="KeyQ"&&Mr(t,t.st.tac),n.code==="KeyG"&&Mr(t,"axe"),n.code==="KeyV"&&Om(),(n.code==="KeyF"||n.code==="KeyE")&&(t.wantAct=!0,Mo(t)),n.code==="Escape"&&lf(!0)}),addEventListener("keyup",n=>{we.keys[n.code]=!1,(n.code==="KeyF"||n.code==="KeyE")&&pt&&(pt.wantAct=!1)}),je.domElement.addEventListener("mousedown",n=>{if(Lt.resume(),!(Y.phase==="lobby"||!pt)){if(!document.pointerLockElement&&!Li){je.domElement.requestPointerLock();return}n.button===0&&Uh(),n.button===2&&(pt.adsWant=!0,we.rmb=!0)}}),Vs.addEventListener("mousedown",n=>{!Li&&!n.target.closest(".b")&&Y.phase!=="lobby"&&(document.pointerLockElement||je.domElement.requestPointerLock())}),addEventListener("mouseup",n=>{n.button===2&&pt&&(pt.adsWant=!1,we.rmb=!1)}),addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{document.pointerLockElement&&(we.lookDX+=n.movementX*.6,we.lookDY+=n.movementY*.6)}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement&&Vs.addEventListener("mousedown",Bm)})}function Bm(n){!document.pointerLockElement||!pt||(n.button===0&&Uh(),n.button===2&&(pt.adsWant=!0))}addEventListener("mousedown",n=>{document.pointerLockElement&&n.target===document.body&&Bm(n)});function xb(n){let t=pt,e=(t.ads>.5?gt.sensAds:gt.sens)*(Li?.0042:.0026),i=we.lookDX,s=we.lookDY;we.lookDX=we.lookDY=0,t.alive&&!Fn&&(t.yaw-=i*e,t.pitch=pn(t.pitch-s*e,-1.35,1.35));let r=we.jx,o=we.jz,a=we.jmag,l=we.keys;if(l.KeyW||l.KeyA||l.KeyS||l.KeyD){r=(l.KeyD?1:0)-(l.KeyA?1:0),o=(l.KeyS?1:0)-(l.KeyW?1:0);let x=Math.hypot(r,o)||1;r/=x,o/=x,a=l.AltLeft?.4:1}let c=(we.sprintLock||l.ShiftLeft)&&t.stamina>.05&&o<-.5&&t.stance==="stand"&&t.ads<.3&&t.boltT<=0&&t.reloadT<=0;t.sprint=c,c&&t.adsWant&&!t.fireOnRelease&&(t.adsWant=!1);let h=new ut(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),d=new ut(Math.cos(t.yaw),0,-Math.sin(t.yaw)).multiplyScalar(r).add(h.multiplyScalar(-o));t.alive&&Lm(t,{x:d.x,z:d.z,mag:a,sprint:c},n),pb(n,i,s);let f=Y.bomb,p=null;if(t.alive&&Y.phase==="live"&&f.carrier===t)for(let x of["A","B"])t.pos.distanceTo(Ye[x])<2.4&&(p="\u8A2D\u7F6E");t.alive&&Y.phase==="planted"&&t.team!==Y.attack&&t.pos.distanceTo(f.pos)<2&&(p="\u89E3\u9664"),z("actBtn").classList.toggle("hide",!p),p&&(z("actBtn").textContent=p),Yd>0?Yd-=n:Li?z("tip").classList.add("hide"):(z("tip").classList.toggle("hide",!p),p&&(z("tip").textContent=`F\u9577\u62BC\u3057\u3067${p}`)),z("bombHave").classList.toggle("hide",f.carrier!==t),t.wantAct&&!f.planting&&!f.defusing&&p&&Mo(t)}function yb(n,t){if(Y.mode==="range"&&!n.isPlayer&&!n.alive){n.reviveT-=t,n.reviveT<=0&&jv(n);return}n.sprint?(n.stamina=Math.max(0,n.stamina-t),n.sprintOutT=n.st.sprintOut):(n.stamina=Math.min(n.st.stamina,n.stamina+t*.8),n.sprintOutT>0&&(n.sprintOutT-=t));let i=n.targetEye()-n.eyeH,s=(n.stance==="prone"||n.eyeH<.8?1.6:2.6)*t;n.eyeH+=Math.abs(i)<=s||n.slideT>0?i*(n.slideT>0?Math.min(1,t*14):1):Math.sign(i)*s,n.stanceT=Math.abs(n.targetEye()-n.eyeH)>.12&&n.slideT<=0?.1:0;let r=n.adsWant&&n.alive&&n.boltT<=0&&n.reloadT<=0&&!n.sprint&&n.sprintOutT<=0&&n.stanceT<=0&&!(n.kickedOut&&n.boltT>0),o=n.ads;if(n.ads=pn(n.ads+(r?t/n.st.ads:-t/.18),0,1),n.isPlayer&&o===0&&n.ads>0&&Lt.play("cloth",{vol:.35,rate:1.3}),n.boltT>0){if(n.boltT-=t,n.isPlayer||n.pos.distanceTo(pt.pos)<25){let l=1-n.boltT/n.st.bolt;l>.25&&n.boltPlayed===0&&(n.boltPlayed=1,Lt.play("bolt1",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3})),l>.6&&n.boltPlayed===1&&(n.boltPlayed=2,Lt.play("bolt2",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3}),_b(n))}n.boltT<=0&&(n.boltT=0,n.kickedOut=!1,n.mag===0&&_r(n))}if(n.reloadT>0&&(n.reloadT-=t,n.reloadT<=0)){let l=Math.min(n.st.mag-n.mag,n.reserve);n.mag+=l,n.reserve-=l,n.reloadT=0}n.revealT>0&&(n.revealT-=t),n.alive&&n.hp<100&&(n.hurtT=(n.hurtT||0)+t,n.hurtT>5&&(n.hp=Math.min(100,n.hp+60*t)));let a=n.veg;a.root.position.set(n.pos.x,n.pos.y,n.pos.z),n.alive&&a.root.rotation.set(0,n.yaw,0),a.speed=Math.hypot(n.vel.x,n.vel.z)*(n.onGround?1:.3),a.run=n.sprint?1:0,a.crouch=Yi(a.crouch,n.stance==="crouch"||n.slideT>0?1:0,7,t),a.prone=Yi(a.prone,n.stance==="prone"?1:0,3.2,t),a.pitch=n.pitch,a.ads=n.ads,a.air=n.onGround?0:1,a.recoil=Yi(a.recoil,0,10,t),a.boltT=n.boltT>0?Math.sin((1-n.boltT/n.st.bolt)*Math.PI):0,n.lostArm[0]&&n.lostArm[1]&&(a.aim.visible=!1),a.update(t),a.gun.setBolt(n.boltT>0?pn((1-n.boltT/n.st.bolt-.15)/.75,0,1):0)}function _b(n){let t=Xp(),e,i;n.isPlayer&&!gt.tpp?e=n.eye().add(n.dir().multiplyScalar(.5)).add(new ut(Math.cos(n.yaw)*.15,-.15,-Math.sin(n.yaw)*.15)):e=n.veg.gun.ejectPt.getWorldPosition(new ut),i=new ut(Math.cos(n.yaw)*2.2,2,-Math.sin(n.yaw)*2.2),t.position.copy(e),ye.add(t),yo(t,i,new ut(20,5,10),{r:.008})}var Vd=0,Th=0,mo=0,_m=74;function Mb(n){if(gt.killcam&&ms&&ms.t>0&&!pt.alive&&Y.phase!=="post"){ms.t-=n;let o=ms.by;if(o){let a=o.eye();Ee.position.copy(ms.at).add(new ut(0,.3,0));let l=new ut().subVectors(a,Ee.position),c=Math.atan2(-l.x,-l.z),h=Math.atan2(l.y,Math.hypot(l.x,l.z));Ee.rotation.set(h,c,0);let u=pn(2.8-ms.t,0,1),d=Wa(_m,pn(800/Math.max(5,l.length()),12,60),u);Ee.fov=d,Ee.updateProjectionMatrix(),z("kcam").classList.remove("hide"),z("kcamN").textContent=`${o.name}\uFF08HP ${Math.max(0,Math.round(o.hp))}\uFF09`,z("scope").style.display="none",z("cross").style.display="none",Lt.listener.x=Ee.position.x,Lt.listener.z=Ee.position.z,Lt.listener.yaw=c;return}}z("kcam").classList.add("hide");let t=pt,e=gt.tpp;if(Fn&&(!pt.alive||Y.phase==="post")&&(t=(Fn.alive,Fn),e=!0,!t.alive)){let o=Re.find(a=>a.team===pt.team&&a.alive);o&&(Fn=t=o)}let i=t.eye(),s=t===pt?t.ads:0;if(e&&s<.85){let o=t.stance==="prone"?2:2.6,a=t.dir(),l=new ut(Math.cos(t.yaw),0,-Math.sin(t.yaw)),c=i.clone().add(new ut(0,.32,0)).addScaledVector(l,.8),h=a.clone().multiplyScalar(-o),u=yr(c,h.clone().normalize(),o+.3),d=u?Math.max(.3,u.t-.3):o;Ee.position.copy(c).addScaledVector(h.normalize(),d),Ee.rotation.set(t.pitch,t.yaw,0)}else if(Ee.position.copy(i),Ee.rotation.set(t.pitch,t.yaw,0),t===pt){let o=Math.hypot(t.vel.x,t.vel.z)*(t.onGround?1:0)*(1-t.ads);Vd+=n*o*1.9;let a=Math.min(1,o/5)*.035;Ee.position.y+=Math.abs(Math.sin(Vd))*a-Th,Ee.rotation.z=Math.sin(Vd)*a*.12,t.onGround?(mo>.25&&(Th=.08*mo),mo=0):mo=Math.min(mo+n,1),Th=Yi(Th,0,8,n)}if(t===pt&&t.ads>.5){let o=Y.time,a=(t.st.stanceSway?t.stance==="prone"?6e-4:t.stance==="crouch"?.0015:.0026:.0022)*(1+Math.min(2,Math.hypot(t.vel.x,t.vel.z)))*t.st.sway;Ee.rotation.x+=Math.sin(o*1.3)*a+Math.sin(o*2.7)*a*.4,Ee.rotation.y+=Math.cos(o*.9)*a*1.2}zs>0&&(zs=Math.max(0,zs-n),Ee.rotation.x+=(Math.random()-.5)*zs*.04,Ee.rotation.y+=(Math.random()-.5)*zs*.04),t===pt&&Gt.kick>.05&&(Ee.rotation.x+=Gt.kick*.03);let r=Wa(_m,13,Math.pow(s,1.5));Math.abs(Ee.fov-r)>.01&&(Ee.fov=r,Ee.updateProjectionMatrix()),Lt.listener.x=Ee.position.x,Lt.listener.y=Ee.position.y,Lt.listener.z=Ee.position.z,Lt.listener.yaw=t.yaw,z("scope").style.display=s>.88&&t===pt?"block":"none",z("cross").style.display=s>.3||!pt.alive?"none":"block"}var $d=new Map;function vb(){for(let n of Re){let t=$d.get(n);t||(t=new qr(new sr({map:Tm,transparent:!0,blending:hr,depthWrite:!1,depthTest:!0,fog:!1})),ye.add(t),$d.set(n,t));let e=n.alive&&!n.isPlayer&&n.ads>.6&&!n.veg.dead;if(t.visible=!1,!e)continue;let i=n.veg.gun.lens.getWorldPosition(new ut),s=new ut().subVectors(Ee.position,i),r=s.length();s.normalize();let o=n.dir().dot(s);o<.85||(t.visible=!0,t.position.copy(i).addScaledVector(s,.05),t.scale.setScalar(pn(r*.035,.25,2.5)*(.8+Math.random()*.3)*(o-.8)*4))}}var Zd=z("minimap"),bb=Zd.getContext("2d"),Jd=[];function Eb(){Jd.length=0;for(let n of ln.mm)Jd.push(n)}function Sb(){let n=Zd.width,t=Zd.height,e=bb,i=pt.alive||!Fn?pt:Fn;e.clearRect(0,0,n,t),e.save(),e.beginPath(),e.roundRect?e.roundRect(0,0,n,t,16):e.rect(0,0,n,t),e.clip(),e.fillStyle="rgba(40,60,40,.55)",e.fillRect(0,0,n,t);let s=n/46;e.translate(n/2,t/2),e.rotate(i.yaw),e.scale(s,s),e.translate(-i.pos.x,-i.pos.z),e.fillStyle="rgba(60,60,64,.9)",e.fillRect(-40,-4,80,8),e.fillStyle="rgba(150,150,140,.8)",e.fillRect(-40,-5.7,80,1.7),e.fillRect(-40,4,80,1.7);for(let a of Jd)e.fillStyle=a[4],e.fillRect(a[0],a[1],a[2]-a[0],a[3]-a[1]);e.strokeStyle="rgba(255,255,255,.3)",e.lineWidth=.3,e.strokeRect(he.minX,he.minZ,he.maxX-he.minX,he.maxZ-he.minZ);for(let a of["A","B"]){let l=Ye[a];e.fillStyle="rgba(255,200,40,.35)",e.beginPath(),e.arc(l.x,l.z,2.4,0,7),e.fill(),e.save(),e.translate(l.x,l.z),e.rotate(-i.yaw),e.fillStyle="#ffd040",e.font="bold 3px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(a,0,0),e.restore()}let r=Y.bomb;(r.state==="dropped"||r.state==="planted"||r.state==="carried"&&r.carrier&&r.carrier.team===pt.team)&&(e.save(),e.translate(r.pos.x,r.pos.z),e.rotate(-i.yaw),e.fillStyle=r.state==="planted"?Math.floor(Y.time*4)%2?"#ff3020":"#ffd040":"#ffa020",e.fillRect(-1,-.7,2,1.4),e.restore());for(let a of Re){if(!a.alive)continue;let l=a.team===pt.team;!l&&a.revealT<=0&&!(a.ai&&a.ai.target===pt&&a.ads>.5&&!1)||(e.save(),e.translate(a.pos.x,a.pos.z),e.rotate(-a.yaw),a===pt?(e.fillStyle="#ffe060",e.beginPath(),e.moveTo(0,-1.8),e.lineTo(1.2,1.2),e.lineTo(0,.5),e.lineTo(-1.2,1.2),e.closePath(),e.fill()):(e.fillStyle=l?"#4aa8ff":"#ff4030",e.beginPath(),e.arc(0,0,1,0,7),e.fill(),l&&(e.beginPath(),e.moveTo(0,-2),e.lineTo(.7,-.6),e.lineTo(-.7,-.6),e.fill())),e.restore())}e.restore(),e.fillStyle="rgba(255,255,255,.7)",e.font="bold 20px sans-serif",e.textAlign="center";let o=i.yaw;e.save(),e.translate(n/2,t/2),e.rotate(o),e.fillText("N",0,-t/2+22),e.restore()}function wb(n){let t=pt;Vs.classList.toggle("dead",!t.alive);let e=Math.max(0,(Y.phase==="pre",Y.timer)),i=Math.floor(e/60),s=Math.floor(e%60);z("timer").textContent=Y.mode==="range"?"\u221E":Y.phase==="pre"?Math.ceil(e)+"":`${i}:${String(s).padStart(2,"0")}`,z("timer").classList.toggle("bomb",Y.phase==="planted"),z("amC").textContent=t.mag,z("amR").textContent=t.reserve,z("amS").textContent=t.reloadT>0?"\u30EA\u30ED\u30FC\u30C9\u4E2D\u2026":t.boltT>0?"\u30DC\u30EB\u30C8\u64CD\u4F5C\u4E2D\u2026":t.st.name,z("hpf").style.width=Math.max(0,t.hp)+"%",z("hpf").classList.toggle("low",t.hp<50);let r=Re.filter(c=>c.team===0),o=Re.filter(c=>c.team===1),a=(c,h)=>z(c).classList.toggle("dead",!(h&&h.alive));a("ia0",r[0]),a("ia1",r[1]),a("ie0",o[0]),a("ie1",o[1]),Ch>0&&(Ch-=n,Ch<=0&&(z("killnote").innerHTML="")),za>0&&(za-=n,za<=0&&(z("cmsg").textContent="",z("csub").textContent="")),Ph>0&&(Ph-=n,z("hitmark").style.opacity=Math.max(0,Ph/.25)),Y.phase==="pre"&&(z("cmsg").textContent=Math.ceil(Y.timer)<=3?Math.ceil(Y.timer):`\u30E9\u30A6\u30F3\u30C9 ${Y.round}`,za=.2),Sb(),Ab();let l="";if(pt.alive){let c=Ee.position,h=new ut(0,0,-1).applyQuaternion(Ee.quaternion),u=yr(c,h,150),d=u?u.t:150;for(let f of Re)if(!(f.team===pt.team||!f.alive)){for(let p of f.veg.computeHitSpheres()){let x=Qd(c,h,p.c,p.r*1.6);if(x>0&&x<d){l=f.name;break}}if(l)break}}z("aimName").textContent=l}var Kd=new Map;function Tb(n,t,e,i){let s=Kd.get(n);s||(s=document.createElement("div"),z("marks").appendChild(s),Kd.set(n,s));let r=i.clone().project(Ee),o=r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1;s.style.display=o?"block":"none",o&&(s.className="mk "+t,s._h!==e&&(s.innerHTML=e,s._h=e),s.style.left=(r.x+1)/2*100+"%",s.style.top=(1-r.y)/2*100+"%")}function Ab(){let n=new Set,t=pt.alive||!Fn?pt:Fn,e=pt.ads>.88,i=(o,...a)=>{n.add(o),e||Tb(o,...a)};for(let o of Re)o!==pt&&o!==Fn&&o.team===pt.team&&o.alive&&i("n"+o.name,"ally",`${o.name}<span class="ar"></span>`,o.eye().add(new ut(0,.55,0)));let s=Y.bomb,r=o=>Math.round(o.distanceTo(t.pos))+"m";if(Y.phase==="live"&&(s.carrier===pt||pt.team!==Y.attack||s.carrier?.team===pt.team))for(let o of["A","B"])i("s"+o,"site",`<i>${o}</i><small>${r(Ye[o])}</small>`,Ye[o].clone().add(new ut(0,2.2,0)));s.state==="planted"&&i("bomb","bomb",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new ut(0,1.2,0))),s.state==="dropped"&&pt.team===Y.attack&&i("bombd","bomb drop",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new ut(0,1,0)));for(let[o,a]of Kd)(!n.has(o)||e||Y.phase==="post")&&(a.style.display="none")}function Rb(){qi||(qi=rb(),ye.add(qi));let n=Y.bomb;if(qi.visible=n.state==="dropped"||n.state==="planted"||n.state==="defused"||!!n.planting,n.planting&&n.state!=="planted"){let t=n.planting;t.stance="crouch";let e=new ut(-Math.sin(t.yaw),0,-Math.cos(t.yaw));n.pos.copy(t.pos).addScaledVector(e,.55),n.pos.y=xs(n.pos.x,n.pos.z,t.pos.y+.3)}n.defusing&&(n.defusing.stance="crouch"),qi.visible&&(qi.position.copy(n.pos),qi.userData.scr.material.color.setHex(n.state==="planted"&&Math.floor(Y.time*(n.fuse<6?8:2))%2?16724e3:4198416),n.state==="dropped"&&(qi.rotation.y+=.02))}var gs=null,Wd=0,Fh=["carrot","tomato","potato","pepper"],Cb={carrot:"\u7D30\u8EAB\u3067\u982D\u304C\u5C0F\u3055\u3044",tomato:"\u307E\u3093\u307E\u308B\u3002\u3064\u3084\u3064\u3084",potato:"\u305A\u3063\u3057\u308A\u3002\u3067\u3053\u307C\u3053",pepper:"\u3064\u3084\u3064\u3084\u306E\u7DD1"};function af(){window.VW_INGAME=!1,Y.phase="lobby";for(let n of Re)n.dispose();Re=[],pt=null,ef(),qi&&(qi.visible=!1);for(let n of $d.values())n.visible=!1;if(z("hud").classList.add("hide"),z("ctl").classList.add("hide"),z("lobby").classList.remove("hide"),z("result").classList.add("hide"),z("pause").classList.add("hide"),z("helpTxt").innerHTML=Li?"\u5DE6\u5074\u3092\u306A\u305E\u3063\u3066\u79FB\u52D5\uFF08\u4E0A\u306B\u5012\u3057\u304D\u308B\u3068\u30C0\u30C3\u30B7\u30E5\uFF09<br>\u53F3\u5074\u3092\u306A\u305E\u3063\u3066\u8996\u70B9<br>\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F\u30FB\u96E2\u3059\u3068\u767A\u5C04<br>\u53F3\u306E\u7167\u6E96\u30DC\u30BF\u30F3\uFF1A\u8997\u304D\u3063\u3071\u306A\u3057\u306B\u5207\u66FF<br>\u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09\u30FB\u4F0F\u305B\u30FB\u30B8\u30E3\u30F3\u30D7<br>\u30B5\u30A4\u30C8\u3067\u300C\u8A2D\u7F6E\u300D\u300C\u89E3\u9664\u300D\u3092\u9577\u62BC\u3057":"WASD \u79FB\u52D5 / Shift \u30C0\u30C3\u30B7\u30E5 / Alt \u305D\u30FC\u3063\u3068\u6B69\u304F<br>\u30DE\u30A6\u30B9 \u8996\u70B9 / \u5DE6\u30AF\u30EA\u30C3\u30AF \u6483\u3064 / \u53F3\u30AF\u30EA\u30C3\u30AF \u8997\u304F<br>Space \u30B8\u30E3\u30F3\u30D7 / C \u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09 / Z \u4F0F\u305B<br>R \u30EA\u30ED\u30FC\u30C9 / F \u9577\u62BC\u3057\u3067\u8A2D\u7F6E\u30FB\u89E3\u9664 / V \u8996\u70B9\u5207\u66FF",$a(),Lt.bgm(!1),typeof Mm=="function")try{Mm()}catch{}}function $a(){gs&&ye.remove(gs.root),gs=new Gs(gt.kind,0,{lod:1,hat:gt.hat,camo:gt.camo}),ye.add(gs.root),z("hatName").textContent=fo.find(e=>e.id===gt.hat).name,z("camoName").textContent=Ia.find(e=>e.id===gt.camo).name;let[n,t]=ln.lobby;gs.root.position.set(n,.15+(ln.id==="town"?0:-.13),t),z("charName").innerHTML=`${Ii[gt.kind]}<small>${Cb[gt.kind]}</small>`}function Pb(n){Wd+=n;let t=gs;if(!t)return;t.root.rotation.y=Math.PI+.5+Math.sin(Wd*.4)*.25,t.speed=0,t.pitch=-.15+Math.sin(Wd*.7)*.03,t.run=0,t.ads=0,t.update(n);let[e,i]=ln.lobby;Ee.position.set(e-1.2,1.2,i+2.7),Ee.lookAt(e+.6,1,i),Math.abs(Ee.fov-50)>.01&&(Ee.fov=50,Ee.updateProjectionMatrix())}z("prevC").onclick=()=>{gt.kind=Fh[(Fh.indexOf(gt.kind)+3)%4],fi(),$a(),Lt.resume(),Lt.play("ui")};z("nextC").onclick=()=>{gt.kind=Fh[(Fh.indexOf(gt.kind)+1)%4],fi(),$a(),Lt.resume(),Lt.play("ui")};var Bh=(n,t,e)=>{let i=n.findIndex(s=>s.id===gt[t]);gt[t]=n[(i+e+n.length)%n.length].id,fi(),$a(),Lt.resume(),Lt.play("ui")};z("hatP").onclick=()=>Bh(fo,"hat",-1);z("hatN").onclick=()=>Bh(fo,"hat",1);z("camoP").onclick=()=>Bh(Ia,"camo",-1);z("camoN").onclick=()=>Bh(Ia,"camo",1);function Za(){let n=gt.lo,t=Ci[n.rifle];z("loName").textContent=t.name,z("loName2")&&(z("loName2").textContent=t.name);let e=n.att.map(s=>Ba.find(r=>r.id===s).name).join("\u30FB")||"\u30A2\u30BF\u30C3\u30C1\u30E1\u30F3\u30C8\u306A\u3057",i=n.perks.map((s,r)=>(Ha[r].find(o=>o.id===s)||Ha[r][0]).name).filter(s=>s!=="\u306A\u3057").join("\u30FB")||"\u30D1\u30FC\u30AF\u306A\u3057";z("loSub").innerHTML=`${e}<br>${i}`,z("modeTxt").innerHTML=`\u547D\u306F1\u30E9\u30A6\u30F3\u30C91\u3064\u3002<br>\u7206\u5F3E\u306E\u7206\u7834\u304B\u3001\u6575\u306E\u5168\u6EC5\u3067\u52DD\u3061\u3002<br>${gt.winR}\u30E9\u30A6\u30F3\u30C9\u5148\u53D6\u30FB${gt.swap===1?"\u6BCE\u30E9\u30A6\u30F3\u30C9":gt.swap+"\u30E9\u30A6\u30F3\u30C9\u3054\u3068\u306B"}\u653B\u5B88\u4EA4\u4EE3\u3002`}function go(n){let t=gt.lo;z("rifleList").innerHTML=Object.values(Ci).map(e=>`<div class="rf${t.rifle===e.id?" on":""}" data-r="${e.id}"><b>${e.name}</b><small>${e.tag}\u30FB\u5F3E${e.mag}\u767A<br>${e.spec}</small><div class="bars">${Object.entries(e.stats).map(([i,s])=>`<span>${i}</span><i><u style="width:${s*20}%"></u></i>`).join("")}</div></div>`).join(""),z("rifleList").querySelectorAll(".rf").forEach(e=>e.onclick=()=>{t.rifle=e.dataset.r,fi(),Lt.play("ui"),go(Ci[t.rifle].desc),$a()}),z("attCnt").textContent=`${t.att.length}/2`,z("attList").innerHTML=Ba.map(e=>{let i=t.att.includes(e.id),s=!i&&(t.att.length>=2||e.ex&&t.att.includes(e.ex));return`<button data-a="${e.id}" class="${i?"on":s?"no":""}">${e.name}</button>`}).join(""),z("attList").querySelectorAll("button").forEach(e=>e.onclick=()=>{let i=e.dataset.a,s=Ba.find(o=>o.id===i),r=t.att.indexOf(i);r>=0?t.att.splice(r,1):(s.ex&&t.att.includes(s.ex)&&t.att.splice(t.att.indexOf(s.ex),1),t.att.length>=2&&t.att.shift(),t.att.push(i)),fi(),Lt.play("ui"),go(s.name+"\uFF1A"+s.desc+(s.ex?`
\u203B${Ba.find(o=>o.id===s.ex).name}\u3068\u306F\u540C\u6642\u306B\u4ED8\u3051\u3089\u308C\u307E\u305B\u3093\u3002`:""))});for(let[e,i,s]of[["tacList",rm,"tac"],["letList",om,"let"]])z(e).innerHTML=i.map(r=>`<button data-x="${r.id}" class="${(t[s]||"none")===r.id?"on":""}">${r.name}</button>`).join(""),z(e).querySelectorAll("button").forEach(r=>r.onclick=()=>{t[s]=r.dataset.x,fi(),Lt.play("ui");let o=i.find(a=>a.id===r.dataset.x);go(o.desc?o.name+"\uFF1A"+o.desc:"")});[0,1,2].forEach(e=>{z("perk"+e).innerHTML=Ha[e].map(i=>`<button data-p="${i.id}" class="${t.perks[e]===i.id?"on":""}">${i.name}</button>`).join(""),z("perk"+e).querySelectorAll("button").forEach(i=>i.onclick=()=>{t.perks[e]=i.dataset.p,fi(),Lt.play("ui");let s=Ha[e].find(r=>r.id===i.dataset.p);go(s.desc?s.name+"\uFF1A"+s.desc:"")})}),n!==void 0&&(z("loDesc").textContent=n),Za()}(!gt.lo||!Ci[gt.lo.rifle])&&(gt.lo=JSON.parse(JSON.stringify(Bd)));gt.lo.tac===void 0&&(gt.lo.tac="smoke");gt.lo.let===void 0&&(gt.lo.let="axe");z("loCard").onclick=()=>{Lt.resume(),Lt.play("ui"),go(Ci[gt.lo.rifle].desc),z("loM").classList.remove("hide")};z("loClose").onclick=()=>{z("loM").classList.add("hide"),fi(),Za()};Za();function Hm(){let n=fs[gt.map]||ln;z("mapName").textContent=n.name,z("mapDesc").textContent=n.desc}Hm();z("mapChip").onclick=()=>{let n=Object.keys(fs);gt.map=n[(n.indexOf(gt.map)+1)%n.length],fi(),Lt.play("ui"),Hm(),z("ldTxt").textContent=`\u30DE\u30C3\u30D7\u300C${fs[gt.map].name}\u300D\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026`,z("loading").classList.remove("hide"),setTimeout(()=>location.reload(),150)};var Oe=Sh();function Mm(){Oe=Sh();let n=Xi(Oe.rp);z("rankChip").innerHTML=`${po(n.tier.id,34,n.div)}<span>${n.label}\u3000${Oe.rp} RP</span>`,z("mRankSub").textContent=`${n.label}\u30FB\u53C2\u52A0\u8CBB ${n.tier.fee} RP\u30FB8\u30E9\u30A6\u30F3\u30C9\u5148\u53D6`,z("loName2").textContent=Ci[gt.lo.rifle].name}function km(n,t){z("infoT").textContent=n,z("infoB").innerHTML=t,z("infoM").classList.remove("hide")}z("infoClose").onclick=()=>z("infoM").classList.add("hide");z("mCasual").onclick=()=>Hh("casual");z("mRank").onclick=()=>Hh("rank");z("mRange").onclick=()=>Hh("range");z("mLoad").onclick=()=>{Lt.resume(),Lt.play("ui"),go(Ci[gt.lo.rifle].desc),z("loM").classList.remove("hide")};z("mFriend").onclick=()=>{Lt.play("ui"),km("\u30D5\u30EC\u30F3\u30C9",'<div class="rpList">ID\u3067\u30D5\u30EC\u30F3\u30C9\u3092\u8FFD\u52A0\u3057\u3066\u3001\u30D1\u30FC\u30C6\u30A3\u3092\u7D44\u3093\u3067\u4E00\u7DD2\u306B\u904A\u3079\u308B\u6A5F\u80FD\u306F\u6E96\u5099\u4E2D\u3067\u3059\u3002<br>\u30AA\u30F3\u30E9\u30A4\u30F3\u5BFE\u6226\u7528\u306E\u4ED5\u7D44\u307F\uFF08\u901A\u4FE1\u30B5\u30FC\u30D0\u30FC\uFF09\u3092\u4F5C\u3063\u3066\u304B\u3089\u8FFD\u52A0\u3057\u307E\u3059\u3002</div>')};z("mCareer").onclick=()=>{Lt.play("ui"),Oe=Sh();let n=Xi(Oe.rp),t=Xi(Oe.best),e=Oe.badges.length?Oe.badges.map(i=>`<div>${po(i.tier,54)}<br>${Hd(i.season)}<br>${Pi.find(s=>s.id===i.tier).name}</div>`).join(""):'<div style="opacity:.7">\u307E\u3060\u30B7\u30FC\u30BA\u30F3\u30D0\u30C3\u30B8\u306F\u3042\u308A\u307E\u305B\u3093\u3002<br>\u30B7\u30FC\u30BA\u30F3\u304C\u7D42\u308F\u308B\u3068\u3001\u305D\u306E\u6708\u306B\u5C4A\u3044\u305F\u4E00\u756A\u9AD8\u3044\u6BB5\u968E\u306E\u30D0\u30C3\u30B8\u304C\u3082\u3089\u3048\u307E\u3059\u3002</div>';km("\u30AD\u30E3\u30EA\u30A2",`<div class="loGrid"><div><div class="rkHead">${po(n.tier.id,80,n.div)}<div><div class="nm">${n.label}</div><small>${Hd(Oe.season)}\u30FB\u6700\u9AD8 ${t.label}</small><div class="rkBar"><i style="width:${n.progress*100}%"></i></div><small>${Oe.rp} RP\uFF08\u6B21\u307E\u3067 ${Math.max(0,n.hi-Oe.rp)} RP\uFF09</small></div></div>
  <div class="rpList">\u30E9\u30F3\u30AF\u8A66\u5408 ${Oe.games}\u3000\u52DD\u5229 ${Oe.wins}\u3000\u30AD\u30EB ${Oe.kills}</div>
  <h4 style="margin:1vh 0 .3vh;color:#aab">\u30B7\u30FC\u30BA\u30F3\u30D0\u30C3\u30B8</h4><div class="tiers">${e}</div></div>
  <div><h4 style="margin:0 0 .3vh;color:#aab">\u6BB5\u968E\u3068\u30DD\u30A4\u30F3\u30C8\u306E\u4ED5\u7D44\u307F</h4><div class="tiers">${Pi.map(i=>`<div>${po(i.id,44)}<br>${i.name}<br>${i.min}\u301C</div>`).join("")}</div>
  <div class="rpList" style="margin-top:1vh">\u52DD\u5229 +100\uFF0F\u53D6\u3063\u305F\u30E9\u30A6\u30F3\u30C9 1\u3064 +10\uFF0F\u30AD\u30EB +12\uFF0F\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8 +4\uFF0FMVP +20<br>\u8A66\u5408\u3054\u3068\u306B\u53C2\u52A0\u8CBB\uFF08\u30EB\u30FC\u30AD\u30FC0\u301C\u30D9\u30B8\u30AD\u30F3\u30B075\uFF09\u3092\u5F15\u304D\u307E\u3059\u3002<br>\u6BB5\u968E\u306E\u4E00\u756A\u4E0B\u3088\u308A\u4E0B\u306B\u306F\u843D\u3061\u307E\u305B\u3093\u3002<br>\u6BCE\u6708\u65B0\u3057\u3044\u30B7\u30FC\u30BA\u30F3\u3002\u59CB\u307E\u308B\u3068\u5C11\u3057\u4E0B\u306E\u6BB5\u968E\u304B\u3089\u518D\u30B9\u30BF\u30FC\u30C8\u3002</div></div></div>`)};async function Hh(n){Y.mode=n,await Lt.init(),Lt.resume(),Lt.play("ui"),gs&&(ye.remove(gs.root),gs=null),z("lobby").classList.add("hide"),z("hud").classList.remove("hide"),z("ctl").classList.remove("hide"),z("camBtn").textContent=gt.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0";try{Li&&document.documentElement.requestFullscreen&&!document.fullscreenElement&&await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}Li||je.domElement.requestPointerLock(),Cm(),gt.bgm&&n!=="range"&&Lt.bgm(!0),Lt.wind(!0)}z("startBtn").onclick=()=>Hh("casual");z("againBtn").onclick=()=>{z("result").classList.add("hide"),z("ctl").classList.remove("hide"),Cm(),gt.bgm&&Lt.bgm(!0)};z("setBtn").onclick=()=>z("settings").classList.remove("hide");z("toLobby").onclick=()=>af();function lf(n){n?(Y.paused=!0,z("pause").classList.remove("hide"),document.pointerLockElement&&document.exitPointerLock()):(Y.paused=!1,z("pause").classList.add("hide"),!Li&&pt&&je.domElement.requestPointerLock())}z("resumeBtn").onclick=()=>lf(!1);z("quitBtn").onclick=()=>{Y.paused=!1,Lt.wind(!1),af()};z("pSetBtn").onclick=()=>z("settings").classList.remove("hide");z("setBtn").onclick=()=>z("settings").classList.remove("hide");z("setClose").onclick=()=>{z("settings").classList.add("hide"),fi()};z("sens").value=gt.sens;z("sensAds").value=gt.sensAds;z("sens").oninput=n=>gt.sens=+n.target.value;z("sensAds").oninput=n=>gt.sensAds=+n.target.value;function $s(n,t,e){let i=z(n);i.querySelectorAll("button").forEach(s=>{s.classList.toggle("on",String(gt[t])===s.dataset.v),s.onclick=()=>{gt[t]=isNaN(+s.dataset.v)?s.dataset.v:+s.dataset.v,i.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r===s)),fi(),e&&e()}})}$s("fireMode","fireMode");$s("winR","winR",Za);$s("swapSeg","swap",Za);$s("kcSeg","killcam");$s("lfSeg","leftFire",Nm);$s("diff","diff");$s("bgmSeg","bgm",()=>{Y.phase!=="lobby"&&Lt.bgm(!!gt.bgm)});$s("quality","quality",()=>{Ys("","\u753B\u8CEA\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002\u6B21\u306B\u958B\u3044\u305F\u3068\u304D\u304B\u3089\u53CD\u6620\u3055\u308C\u307E\u3059",2)});var vm=performance.now(),Ah=0,Xd=0;function Gm(n){requestAnimationFrame(Gm);let t=Math.min(.05,(n-vm)/1e3);if(vm=n,Ah+=t,Xd++,Ah>2){let e=Xd/Ah;Ah=0,Xd=0,e<40&&ps>.75?(ps=Math.max(.75,ps-.15),je.setPixelRatio(ps),Ih()):e>58&&ps<Math.min(devicePixelRatio,gt.quality===2?2:1.5)&&(ps=Math.min(ps+.1,2),je.setPixelRatio(ps),Ih())}if(Y.phase==="lobby"){Pb(t),Va();return}if(!pt||Y.paused){Va();return}if(Y.phase==="end"){Va();return}zm(t),Va()}function zm(n){let t=n;Y.slowmo>0&&(Y.slowmo-=n,t=n*.25),sb(t),xb(t);for(let e of Re)e.ai&&hb(e,t);for(let e of Re)yb(e,t);qv(t),pt.blindT>0&&(pt.blindT-=t),z("flashOv").style.opacity=pn((pt.blindT||0)/1.2,0,1),Lv(t),Rb(),vb(),Mb(n),wb(n)}function Va(){Id.time.value=performance.now()/1e3,je.clear(),je.render(ye,Ee),Y.phase!=="lobby"&&pt&&Gt.root.visible&&(je.clearDepth(),je.render(_s,$i))}mb();gb();Eb();window.__vw={Veg:Gs,KINDS:$p,throwEquip:Mr,smokes:Xs,throws:qa,kill:Oh,endRound:_o,render:Va,renderer:je,vm:Gt,vmCam:$i,V3:ut,sim(n){for(let t=0;t<n*30&&Y.phase!=="end";t++)zm(1/30)},game:Y,get player(){return pt},get fighters(){return Re},camera:Ee,scene:ye,CFG:gt,startRound:of,tryAct:Mo,fire:sf};Sv().then(()=>requestAnimationFrame(Gm));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
