(()=>{var Op=0,Qd=1,Hp=2;var yr=1,fl=2,Mr=3,ys=0,En=1,hn=2,ns=0,vr=1,Xs=2,jd=3,tf=4,kp=5;var to=100,Gp=101,zp=102,Vp=103,Wp=104,Xp=200,qp=201,Yp=202,$p=203,ef=204,nf=205,Zp=206,Jp=207,Kp=208,Qp=209,jp=210,tm=211,em=212,nm=213,im=214,Xc=0,qc=1,Yc=2,Bo=3,$c=4,Zc=5,Jc=6,Kc=7,Sh=0,sm=1,rm=2,Ms=0,pl=1,ml=2,gl=3,qs=4,xl=5,yl=6,eo=7;var sf=300,no=301,Ko=302,Th=303,Rh=304,ps=1e3,ds=1001,Qc=1002,gn=1003,om=1004;var Ml=1005;var ci=1006,Ah=1007;var Ys=1008;var Ei=1009,rf=1010,of=1011,Qo=1012,Ch=1013,is=1014,qi=1015,Ln=1016,Ph=1017,Ih=1018,io=1020,af=35902,lf=35899,cf=1021,hf=1022,ss=1023,zs=1026,$s=1027,jo=1028,Lh=1029,_r=1030,Dh=1031;var Nh=1033,vl=33776,_l=33777,bl=33778,El=33779,Uh=35840,Fh=35841,Bh=35842,Oh=35843,Hh=36196,kh=37492,Gh=37496,zh=37488,Vh=37489,wl=37490,Wh=37491,Xh=37808,qh=37809,Yh=37810,$h=37811,Zh=37812,Jh=37813,Kh=37814,Qh=37815,jh=37816,tu=37817,eu=37818,nu=37819,iu=37820,su=37821,ru=36492,ou=36494,au=36495,lu=36283,cu=36284,Sl=36285,hu=36286;var Oa=2300,jc=2301,Vc=2302,Gd=2303,zd=2400,Vd=2401,Wd=2402;var am=3200,uf=3201;var ta=0,lm=1,Zs="",Mn="srgb",Ha="srgb-linear",ka="linear",Ge="srgb";var Wc=7680;var cm=519,hm=512,um=513,dm=514,df=515,fm=516,pm=517,ff=518,pf=519,mf=35044;var gf="300 es",zi=2e3,Oo=2001;function B1(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function O1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mm(){let n=Ga("canvas");return n.style.display="block",n}var sp={},Ho=null;function za(...n){let t="THREE."+n.shift();Ho?Ho("log",t,...n):console.log(t,...n)}function gm(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function me(...n){n=gm(n);let t="THREE."+n.shift();if(Ho)Ho("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ge(...n){n=gm(n);let t="THREE."+n.shift();if(Ho)Ho("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Xr(...n){let t=n.join(" ");t in sp||(sp[t]=!0,me(...n))}function xm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var ym={[Xc]:Xc,[Yc]:Jc,[$c]:$c,[Bo]:Zc,[qc]:qc,[Jc]:Yc,[Kc]:Kc,[Zc]:Bo},ms=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var md=Math.PI/180,th=180/Math.PI;function br(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[e&63|128]+Kn[e>>8&255]+"-"+Kn[e>>16&255]+Kn[e>>24&255]+Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]).toLowerCase()}function Ie(n,t,e){return Math.max(t,Math.min(e,n))}function H1(n,t){return(n%t+t)%t}function gd(n,t,e){return(1-e)*n+e*t}function Mm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function uu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vm(n,t){if(t.constructor===Float32Array)return n;let e=uu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function _m(n,t){if(t.constructor===Float32Array)return n;let e=uu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var bf=class bf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bf.prototype.isVector2=!0;var lt=bf,_n=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(u!==g||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*g;m<0&&(d=-d,f=-f,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);x=Math.sin(x*M)/w,a=Math.sin(a*M)/w,l=l*x+d*a,c=c*x+f*a,h=h*x+p*a,u=u*x+g*a}else{l=l*x+d*a,c=c*x+f*a,h=h*x+p*a,u=u*x+g*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ef=class Ef{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this.z=Ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this.z=Ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xd.copy(this).projectOnVector(t),this.sub(xd)}reflect(t){return this.sub(xd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ef.prototype.isVector3=!0;var F=Ef,xd=new F,rp=new _n,wf=class wf{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],g=s[0],m=s[3],x=s[6],M=s[1],w=s[4],E=s[7],R=s[2],S=s[5],b=s[8];return r[0]=o*g+a*M+l*R,r[3]=o*m+a*w+l*S,r[6]=o*x+a*E+l*b,r[1]=c*g+h*M+u*R,r[4]=c*m+h*w+u*S,r[7]=c*x+h*E+u*b,r[2]=d*g+f*M+p*R,r[5]=d*m+f*w+p*S,r[8]=d*x+f*E+p*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=u*g,t[1]=(s*c-h*i)*g,t[2]=(a*i-s*o)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(t,e)),this}rotate(t){return Xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-t)),this}translate(t,e){return Xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wf.prototype.isMatrix3=!0;var Me=wf,yd=new Me,op=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k1(){let n={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ge&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ge&&(s.r=Fo(s.r),s.g=Fo(s.g),s.b=Fo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zs?ka:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ha]:{primaries:t,whitePoint:i,transfer:ka,toXYZ:op,fromXYZ:ap,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:i,transfer:Ge,toXYZ:op,fromXYZ:ap,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}var De=k1();function Gs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var yo,eh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{yo===void 0&&(yo=Ga("canvas")),yo.width=t.width,yo.height=t.height;let s=yo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=yo}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ga("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gs(e[i]/255)*255):e[i]=Gs(e[i]);return{data:e,width:t.width,height:t.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},G1=0,ko=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=br(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Md(s[o].image)):r.push(Md(s[o]))}else r=Md(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Md(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}var z1=0,vd=new F,hi=class n extends ms{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ds,s=ds,r=ci,o=Ys,a=ss,l=Ei,c=n.DEFAULT_ANISOTROPY,h=Zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=br(),this.name="",this.source=new ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ps:t.x=t.x-Math.floor(t.x);break;case ds:t.x=t.x<0?0:1;break;case Qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ps:t.y=t.y-Math.floor(t.y);break;case ds:t.y=t.y<0?0:1;break;case Qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=sf;hi.DEFAULT_ANISOTROPY=1;var Sf=class Sf{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,E=(f+1)/2,R=(x+1)/2,S=(h+d)/4,b=(u+g)/4,v=(p+m)/4;return w>E&&w>R?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=b/i):E>R?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=S/s,r=v/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=b/r,s=v/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this.z=Ie(this.z,t.z,e.z),this.w=Ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this.z=Ie(this.z,t,e),this.w=Ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sf.prototype.isVector4=!0;var ln=Sf,nh=class extends ms{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ln(0,0,t,e),this.scissorTest=!1,this.viewport=new ln(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new hi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ko(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends nh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Va=class extends hi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ih=class extends hi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wh=class wh{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,g,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,g,m){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wh().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Mo.setFromMatrixColumn(t,0).length(),r=1/Mo.setFromMatrixColumn(t,1).length(),o=1/Mo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,g=c*u;e[0]=d+g*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(V1,t,W1)}lookAt(t,e,i){let s=this.elements;return Ci.subVectors(t,e),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),rr.crossVectors(i,Ci),rr.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),rr.crossVectors(i,Ci)),rr.normalize(),xc.crossVectors(Ci,rr),s[0]=rr.x,s[4]=xc.x,s[8]=Ci.x,s[1]=rr.y,s[5]=xc.y,s[9]=Ci.y,s[2]=rr.z,s[6]=xc.z,s[10]=Ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],g=i[6],m=i[10],x=i[14],M=i[3],w=i[7],E=i[11],R=i[15],S=s[0],b=s[4],v=s[8],A=s[12],P=s[1],L=s[5],B=s[9],V=s[13],I=s[2],U=s[6],G=s[10],X=s[14],j=s[3],Y=s[7],$=s[11],Z=s[15];return r[0]=o*S+a*P+l*I+c*j,r[4]=o*b+a*L+l*U+c*Y,r[8]=o*v+a*B+l*G+c*$,r[12]=o*A+a*V+l*X+c*Z,r[1]=h*S+u*P+d*I+f*j,r[5]=h*b+u*L+d*U+f*Y,r[9]=h*v+u*B+d*G+f*$,r[13]=h*A+u*V+d*X+f*Z,r[2]=p*S+g*P+m*I+x*j,r[6]=p*b+g*L+m*U+x*Y,r[10]=p*v+g*B+m*G+x*$,r[14]=p*A+g*V+m*X+x*Z,r[3]=M*S+w*P+E*I+R*j,r[7]=M*b+w*L+E*U+R*Y,r[11]=M*v+w*B+E*G+R*$,r[15]=M*A+w*V+E*X+R*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],g=t[7],m=t[11],x=t[15],M=l*f-c*d,w=a*f-c*u,E=a*d-l*u,R=o*f-c*h,S=o*d-l*h,b=o*u-a*h;return e*(g*M-m*w+x*E)-i*(p*M-m*R+x*S)+s*(p*w-g*R+x*b)-r*(p*E-g*S+m*b)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],g=t[13],m=t[14],x=t[15],M=e*a-i*o,w=e*l-s*o,E=e*c-r*o,R=i*l-s*a,S=i*c-r*a,b=s*c-r*l,v=h*g-u*p,A=h*m-d*p,P=h*x-f*p,L=u*m-d*g,B=u*x-f*g,V=d*x-f*m,I=M*V-w*B+E*L+R*P-S*A+b*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=(a*V-l*B+c*L)*U,t[1]=(s*B-i*V-r*L)*U,t[2]=(g*b-m*S+x*R)*U,t[3]=(d*S-u*b-f*R)*U,t[4]=(l*P-o*V-c*A)*U,t[5]=(e*V-s*P+r*A)*U,t[6]=(m*E-p*b-x*w)*U,t[7]=(h*b-d*E+f*w)*U,t[8]=(o*B-a*P+c*v)*U,t[9]=(i*P-e*B-r*v)*U,t[10]=(p*S-g*E+x*M)*U,t[11]=(u*E-h*S-f*M)*U,t[12]=(a*A-o*L-l*v)*U,t[13]=(e*L-i*A+s*v)*U,t[14]=(g*w-p*R-m*M)*U,t[15]=(h*R-u*w+d*M)*U,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,g=o*h,m=o*u,x=a*u,M=l*c,w=l*h,E=l*u,R=i.x,S=i.y,b=i.z;return s[0]=(1-(g+x))*R,s[1]=(f+E)*R,s[2]=(p-w)*R,s[3]=0,s[4]=(f-E)*S,s[5]=(1-(d+x))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(p+w)*b,s[9]=(m-M)*b,s[10]=(1-(d+g))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Mo.set(s[0],s[1],s[2]).length(),a=Mo.set(s[4],s[5],s[6]).length(),l=Mo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ji.copy(this);let c=1/o,h=1/a,u=1/l;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=h,Ji.elements[5]*=h,Ji.elements[6]*=h,Ji.elements[8]*=u,Ji.elements[9]*=u,Ji.elements[10]*=u,e.setFromRotationMatrix(Ji),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=zi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===zi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Oo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=zi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===zi)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Oo)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};wh.prototype.isMatrix4=!0;var $t=wh,Mo=new F,Ji=new $t,V1=new F(0,0,0),W1=new F(1,1,1),rr=new F,xc=new F,Ci=new F,lp=new $t,cp=new _n,Vi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return lp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cp.setFromEuler(this),this.setFromQuaternion(cp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var Wa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},X1=0,hp=new F,vo=new _n,Us=new $t,yc=new F,Ta=new F,q1=new F,Y1=new _n,up=new F(1,0,0),dp=new F(0,1,0),fp=new F(0,0,1),pp={type:"added"},$1={type:"removed"},_o={type:"childadded",child:null},_d={type:"childremoved",child:null},rn=class n extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Vi,i=new _n,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Me}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vo.setFromAxisAngle(t,e),this.quaternion.multiply(vo),this}rotateOnWorldAxis(t,e){return vo.setFromAxisAngle(t,e),this.quaternion.premultiply(vo),this}rotateX(t){return this.rotateOnAxis(up,t)}rotateY(t){return this.rotateOnAxis(dp,t)}rotateZ(t){return this.rotateOnAxis(fp,t)}translateOnAxis(t,e){return hp.copy(t).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(up,t)}translateY(t){return this.translateOnAxis(dp,t)}translateZ(t){return this.translateOnAxis(fp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Us.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yc.copy(t):yc.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Us.lookAt(Ta,yc,this.up):Us.lookAt(yc,Ta,this.up),this.quaternion.setFromRotationMatrix(Us),s&&(Us.extractRotation(s.matrixWorld),vo.setFromRotationMatrix(Us),this.quaternion.premultiply(vo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pp),_o.child=t,this.dispatchEvent(_o),_o.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($1),_d.child=t,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Us.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Us.multiply(t.parent.matrixWorld)),t.applyMatrix4(Us),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pp),_o.child=t,this.dispatchEvent(_o),_o.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,t,q1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,Y1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new F(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z1={type:"move"},Go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,i),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function bd(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=De.workingColorSpace){return this.r=t,this.g=e,this.b=i,De.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=De.workingColorSpace){if(t=H1(t,1),e=Ie(e,0,1),i=Ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=bd(o,r,t+1/3),this.g=bd(o,r,t),this.b=bd(o,r,t-1/3)}return De.colorSpaceToWorking(this,s),this}setStyle(t,e=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){let i=bm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return De.workingToColorSpace(Qn.copy(this),t),Math.round(Ie(Qn.r*255,0,255))*65536+Math.round(Ie(Qn.g*255,0,255))*256+Math.round(Ie(Qn.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=De.workingColorSpace){De.workingToColorSpace(Qn.copy(this),e);let i=Qn.r,s=Qn.g,r=Qn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=De.workingColorSpace){return De.workingToColorSpace(Qn.copy(this),e),t.r=Qn.r,t.g=Qn.g,t.b=Qn.b,t}getStyle(t=Mn){De.workingToColorSpace(Qn.copy(this),t);let e=Qn.r,i=Qn.g,s=Qn.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(or),this.setHSL(or.h+t,or.s+e,or.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(or),t.getHSL(Mc);let i=gd(or.h,Mc.h,e),s=gd(or.s,Mc.s,e),r=gd(or.l,Mc.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new qt;qt.NAMES=bm;var Xa=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vs=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ki=new F,Fs=new F,Ed=new F,Bs=new F,bo=new F,Eo=new F,mp=new F,wd=new F,Sd=new F,Td=new F,Rd=new ln,Ad=new ln,Cd=new ln,ks=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ki.subVectors(t,e),s.cross(Ki);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ki.subVectors(s,e),Fs.subVectors(i,e),Ed.subVectors(t,e);let o=Ki.dot(Ki),a=Ki.dot(Fs),l=Ki.dot(Ed),c=Fs.dot(Fs),h=Fs.dot(Ed),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Bs)===null?!1:Bs.x>=0&&Bs.y>=0&&Bs.x+Bs.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bs.x),l.addScaledVector(o,Bs.y),l.addScaledVector(a,Bs.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Rd.setScalar(0),Ad.setScalar(0),Cd.setScalar(0),Rd.fromBufferAttribute(t,e),Ad.fromBufferAttribute(t,i),Cd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rd,r.x),o.addScaledVector(Ad,r.y),o.addScaledVector(Cd,r.z),o}static isFrontFacing(t,e,i,s){return Ki.subVectors(i,e),Fs.subVectors(t,e),Ki.cross(Fs).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ki.subVectors(this.c,this.b),Fs.subVectors(this.a,this.b),Ki.cross(Fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;bo.subVectors(s,i),Eo.subVectors(r,i),wd.subVectors(t,i);let l=bo.dot(wd),c=Eo.dot(wd);if(l<=0&&c<=0)return e.copy(i);Sd.subVectors(t,s);let h=bo.dot(Sd),u=Eo.dot(Sd);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(bo,o);Td.subVectors(t,r);let f=bo.dot(Td),p=Eo.dot(Td);if(p>=0&&f<=p)return e.copy(r);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Eo,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return mp.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(mp,a);let x=1/(m+g+d);return o=g*x,a=d*x,e.copy(i).addScaledVector(bo,o).addScaledVector(Eo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gs=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qi):Qi.fromBufferAttribute(r,o),Qi.applyMatrix4(t.matrixWorld),this.expandByPoint(Qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vc.copy(i.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qi),Qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ra),_c.subVectors(this.max,Ra),wo.subVectors(t.a,Ra),So.subVectors(t.b,Ra),To.subVectors(t.c,Ra),ar.subVectors(So,wo),lr.subVectors(To,So),Gr.subVectors(wo,To);let e=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Gr.z,Gr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Gr.z,0,-Gr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Gr.y,Gr.x,0];return!Pd(e,wo,So,To,_c)||(e=[1,0,0,0,1,0,0,0,1],!Pd(e,wo,So,To,_c))?!1:(bc.crossVectors(ar,lr),e=[bc.x,bc.y,bc.z],Pd(e,wo,So,To,_c))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Os),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Os=[new F,new F,new F,new F,new F,new F,new F,new F],Qi=new F,vc=new gs,wo=new F,So=new F,To=new F,ar=new F,lr=new F,Gr=new F,Ra=new F,_c=new F,bc=new F,zr=new F;function Pd(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zr.fromArray(n,r);let a=s.x*Math.abs(zr.x)+s.y*Math.abs(zr.y)+s.z*Math.abs(zr.z),l=t.dot(zr),c=e.dot(zr),h=i.dot(zr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pn=new F,Ec=new lt,J1=0,vn=class extends ms{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mf,this.updateRanges=[],this.gpuType=qi,this.version=0,this._normalizationScale=t!==void 0?uu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ec.fromBufferAttribute(this,e),Ec.applyMatrix3(t),this.setXY(e,Ec.x,Ec.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix3(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix4(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyNormalMatrix(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.transformDirection(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):vm(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_m(t,this.array)}};var qa=class extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ya=class extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ce=class extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}},K1=new gs,Aa=new F,Id=new F,hr=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):K1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Aa.subVectors(t,this.center);let e=Aa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Aa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Aa.copy(t.center).add(Id)),this.expandByPoint(Aa.copy(t.center).sub(Id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Q1=0,Gi=new $t,Ld=new rn,Ro=new F,Pi=new gs,Ca=new gs,Hn=new F,je=class n extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B1(t)?Ya:qa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gi.makeRotationFromQuaternion(t),this.applyMatrix4(Gi),this}rotateX(t){return Gi.makeRotationX(t),this.applyMatrix4(Gi),this}rotateY(t){return Gi.makeRotationY(t),this.applyMatrix4(Gi),this}rotateZ(t){return Gi.makeRotationZ(t),this.applyMatrix4(Gi),this}translate(t,e,i){return Gi.makeTranslation(t,e,i),this.applyMatrix4(Gi),this}scale(t,e,i){return Gi.makeScale(t,e,i),this.applyMatrix4(Gi),this}lookAt(t){return Ld.lookAt(t),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Pi.setFromBufferAttribute(r),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(Pi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ca.setFromBufferAttribute(a),this.morphTargetsRelative?(Hn.addVectors(Pi.min,Ca.min),Pi.expandByPoint(Hn),Hn.addVectors(Pi.max,Ca.max),Pi.expandByPoint(Hn)):(Pi.expandByPoint(Ca.min),Pi.expandByPoint(Ca.max))}Pi.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Hn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Hn.fromBufferAttribute(a,c),l&&(Ro.fromBufferAttribute(t,c),Hn.add(Ro)),s=Math.max(s,i.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new vn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let A=0;A<i.count;A++)a[A]=new F,l[A]=new F;let h=new F,u=new F,d=new F,f=new lt,p=new lt,g=new lt,m=new F,x=new F;function M(A,P,L){c[A]=c[P]=c[L]=1,h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,L),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,L),u.sub(h),d.sub(h),p.sub(f),g.sub(f);let B=1/(p.x*g.y-g.x*p.y);isFinite(B)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(B),x.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(B),a[A].add(m),a[P].add(m),a[L].add(m),l[A].add(x),l[P].add(x),l[L].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let A=0,P=w.length;A<P;++A){let L=w[A],B=L.start,V=L.count;for(let I=B,U=B+V;I<U;I+=3)M(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let E=new F,R=new F,S=new F,b=new F;function v(A){S.fromBufferAttribute(s,A),b.copy(S);let P=a[A];E.copy(P),E.sub(S.multiplyScalar(S.dot(P))).normalize(),R.crossVectors(b,P);let B=R.dot(l[A])<0?-1:1;o.setXYZW(A,E.x,E.y,E.z,B)}for(let A=0,P=i.count;A<P;++A)c[A]&&v(A);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Hn.fromBufferAttribute(t,e),Hn.normalize(),t.setXYZ(e,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let x=0;x<h;x++)d[p++]=c[f++]}return new vn(d,h,u)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$a=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mf,this.updateRanges=[],this.version=0,this.uuid=br()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=gp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=gp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function gp(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=br()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var li=new F,zo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?uu(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)li.fromBufferAttribute(this,e),li.applyMatrix4(t),this.setXYZ(e,li.x,li.y,li.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)li.fromBufferAttribute(this,e),li.applyNormalMatrix(t),this.setXYZ(e,li.x,li.y,li.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)li.fromBufferAttribute(this,e),li.transformDirection(t),this.setXYZ(e,li.x,li.y,li.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):vm(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_m(t,this.data.array)}},Dd=new F,j1=new F,tx=new Me,ji=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Dd.subVectors(i,e).cross(j1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Dd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||tx.getNormalMatrix(t),s=this.coplanarPoint(Dd).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ex=0,ts=class extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=br(),this.name="",this.type="Material",this.blending=vr,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=nf,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wc,this.stencilZFail=Wc,this.stencilZPass=Wc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ji().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qr=class extends ts{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ao,Pa=new F,Co=new F,Po=new F,Io=new lt,Ia=new lt,Em=new $t,wc=new F,La=new F,Sc=new F,xp=new lt,Nd=new lt,yp=new lt,Vo=class extends rn{constructor(t=new qr){if(super(),this.isSprite=!0,this.type="Sprite",Ao===void 0){Ao=new je;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $a(e,5);Ao.setIndex([0,1,2,0,2,3]),Ao.setAttribute("position",new zo(i,3,0,!1)),Ao.setAttribute("uv",new zo(i,2,3,!1))}this.geometry=Ao,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Co.setFromMatrixScale(this.matrixWorld),Em.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Po.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Co.multiplyScalar(-Po.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Tc(wc.set(-.5,-.5,0),Po,o,Co,s,r),Tc(La.set(.5,-.5,0),Po,o,Co,s,r),Tc(Sc.set(.5,.5,0),Po,o,Co,s,r),xp.set(0,0),Nd.set(1,0),yp.set(1,1);let a=t.ray.intersectTriangle(wc,La,Sc,!1,Pa);if(a===null&&(Tc(La.set(-.5,.5,0),Po,o,Co,s,r),Nd.set(0,1),a=t.ray.intersectTriangle(wc,Sc,La,!1,Pa),a===null))return;let l=t.ray.origin.distanceTo(Pa);l<t.near||l>t.far||e.push({distance:l,point:Pa.clone(),uv:ks.getInterpolation(Pa,wc,La,Sc,xp,Nd,yp,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Tc(n,t,e,i,s,r){Io.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ia.x=r*Io.x-s*Io.y,Ia.y=s*Io.x+r*Io.y):Ia.copy(Io),n.copy(t),n.x+=Ia.x,n.y+=Ia.y,n.applyMatrix4(Em)}var Hs=new F,Ud=new F,Rc=new F,Ac=new F,sh=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hs.copy(this.origin).addScaledVector(this.direction,e),Hs.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ud.copy(t).add(e).multiplyScalar(.5),Rc.copy(e).sub(t).normalize(),Ac.copy(this.origin).sub(Ud);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Rc),a=Ac.dot(this.direction),l=-Ac.dot(Rc),c=Ac.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ud).addScaledVector(Rc,d),f}intersectSphere(t,e){if(t.radius<0)return null;Hs.subVectors(t.center,this.origin);let i=Hs.dot(this.direction),s=Hs.dot(Hs)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hs)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,g=e.y-o.y,m=e.z-o.z,x=i.x-o.x,M=i.y-o.y,w=i.z-o.z,E=Math.abs(l),R=Math.abs(c),S=Math.abs(h),b,v,A,P,L,B,V,I,U,G,X,j;if(E>=R&&E>=S?(A=l,B=u,U=p,j=x,l>=0?(b=c,v=h,P=d,L=f,V=g,I=m,G=M,X=w):(b=h,v=c,P=f,L=d,V=m,I=g,G=w,X=M)):R>=S?(A=c,B=d,U=g,j=M,c>=0?(b=h,v=l,P=f,L=u,V=m,I=p,G=w,X=x):(b=l,v=h,P=u,L=f,V=p,I=m,G=x,X=w)):(A=h,B=f,U=m,j=w,h>=0?(b=l,v=c,P=u,L=d,V=p,I=g,G=x,X=M):(b=c,v=l,P=d,L=u,V=g,I=p,G=M,X=x)),A===0)return null;let Y=b/A,$=v/A,Z=1/A,ft=P-Y*B,kt=L-$*B,it=V-Y*U,Pt=I-$*U,zt=G-Y*j,ne=X-$*j,Ft=zt*Pt-ne*it,ie=ft*ne-kt*zt,nn=it*kt-Pt*ft;if(s){if(Ft<0||ie<0||nn<0)return null}else if((Ft<0||ie<0||nn<0)&&(Ft>0||ie>0||nn>0))return null;let rt=Ft+ie+nn;if(rt===0)return null;let Qt=Z*(Ft*B+ie*U+nn*j);return(rt>0?Qt<0:Qt>0)?null:this.at(Qt/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wn=class extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mp=new $t,Vr=new sh,Cc=new hr,vp=new F,Pc=new F,Ic=new F,Lc=new F,Fd=new F,Dc=new F,_p=new F,Nc=new F,D=class extends rn{constructor(t=new je,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Dc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Fd.fromBufferAttribute(u,t),o?Dc.addScaledVector(Fd,h):Dc.addScaledVector(Fd.sub(e),h))}e.add(Dc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(r),Vr.copy(t.ray).recast(t.near),!(Cc.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Cc,vp)===null||Vr.origin.distanceToSquared(vp)>(t.far-t.near)**2))&&(Mp.copy(r).invert(),Vr.copy(t.ray).applyMatrix4(Mp),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vr)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,R=w;E<R;E+=3){let S=a.getX(E),b=a.getX(E+1),v=a.getX(E+2);s=Uc(this,x,t,i,c,h,u,S,b,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let M=a.getX(m),w=a.getX(m+1),E=a.getX(m+2);s=Uc(this,o,t,i,c,h,u,M,w,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,R=w;E<R;E+=3){let S=E,b=E+1,v=E+2;s=Uc(this,x,t,i,c,h,u,S,b,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let M=m,w=m+1,E=m+2;s=Uc(this,o,t,i,c,h,u,M,w,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function nx(n,t,e,i,s,r,o,a){let l;if(t.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ys,a),l===null)return null;Nc.copy(a),Nc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Nc);return c<e.near||c>e.far?null:{distance:c,point:Nc.clone(),object:n}}function Uc(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Pc),n.getVertexPosition(l,Ic),n.getVertexPosition(c,Lc);let h=nx(n,t,e,i,Pc,Ic,Lc,_p);if(h){let u=new F;ks.getBarycoord(_p,Pc,Ic,Lc,u),s&&(h.uv=ks.getInterpolatedAttribute(s,a,l,c,u,new lt)),r&&(h.uv1=ks.getInterpolatedAttribute(r,a,l,c,u,new lt)),o&&(h.normal=ks.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};ks.getNormal(Pc,Ic,Lc,d.normal),h.face=d,h.barycoord=u}return h}var Yr=class extends hi{constructor(t=null,e=1,i=1,s,r,o,a,l,c=gn,h=gn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wo=class extends vn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Lo=new $t,bp=new $t,Fc=[],Ep=new gs,ix=new $t,Da=new D,Na=new hr,ur=class extends D{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ix)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Lo),Ep.copy(t.boundingBox).applyMatrix4(Lo),this.boundingBox.union(Ep)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Lo),Na.copy(t.boundingSphere).applyMatrix4(Lo),this.boundingSphere.union(Na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Da.geometry=this.geometry,Da.material=this.material,Da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(i),t.ray.intersectsSphere(Na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Lo),bp.multiplyMatrices(i,Lo),Da.matrixWorld=bp,Da.raycast(t,Fc);for(let o=0,a=Fc.length;o<a;o++){let l=Fc[o];l.instanceId=r,l.object=this,e.push(l)}Fc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(s*this.count),s,this.count,jo,qi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wr=new hr,sx=new lt(.5,.5),Bc=new F,dr=class{constructor(t=new ji,e=new ji,i=new ji,s=new ji,r=new ji,o=new ji){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],m=r[10],x=r[11],M=r[12],w=r[13],E=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,x-p,R-M).normalize(),s[1].setComponents(c+o,f+h,x+p,R+M).normalize(),s[2].setComponents(c+a,f+u,x+g,R+w).normalize(),s[3].setComponents(c-a,f-u,x-g,R-w).normalize(),i)s[4].setComponents(l,d,m,E).normalize(),s[5].setComponents(c-l,f-d,x-m,R-E).normalize();else if(s[4].setComponents(c-l,f-d,x-m,R-E).normalize(),e===zi)s[5].setComponents(c+l,f+d,x+m,R+E).normalize();else if(e===Oo)s[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){Wr.center.set(0,0,0);let e=sx.distanceTo(t.center);return Wr.radius=.7071067811865476+e,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Bc.x=s.normal.x>0?t.max.x:t.min.x,Bc.y=s.normal.y>0?t.max.y:t.min.y,Bc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wp=new $t,rh=class n{constructor(){this.coordinateSystem=zi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];wp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new dr),i[s].setFromProjectionMatrix(wp,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new dr),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Za=class extends hi{constructor(t=[],e=no,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},es=class extends hi{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ws=class extends hi{constructor(t,e,i=is,s,r,o,a=gn,l=gn,c,h=zs,u=1){if(h!==zs&&h!==$s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ko(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ja=class extends Ws{constructor(t,e=is,i=no,s,r,o=gn,a=gn,l,c=zs){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ka=class extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ve=class n extends je{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function p(g,m,x,M,w,E,R,S,b,v,A){let P=E/b,L=R/v,B=E/2,V=R/2,I=S/2,U=b+1,G=v+1,X=0,j=0,Y=new F;for(let $=0;$<G;$++){let Z=$*L-V;for(let ft=0;ft<U;ft++){let kt=ft*P-B;Y[g]=kt*M,Y[m]=Z*w,Y[x]=I,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[x]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ft/b),u.push(1-$/v),X+=1}}for(let $=0;$<v;$++)for(let Z=0;Z<b;Z++){let ft=d+Z+U*$,kt=d+Z+U*($+1),it=d+(Z+1)+U*($+1),Pt=d+(Z+1)+U*$;l.push(ft,kt,Pt),l.push(kt,it,Pt),j+=6}a.addGroup(f,j,A),f+=j,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},xs=class n extends je{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+r,g=s+1,m=new F,x=new F;for(let M=0;M<=p;M++){let w=0,E=0,R=0,S=0;if(M<=i){let A=M/i,P=A*Math.PI/2;E=-h-t*Math.cos(P),R=t*Math.sin(P),S=-t*Math.cos(P),w=A*u}else if(M<=i+r){let A=(M-i)/r;E=-h+A*e,R=t,S=0,w=u+A*d}else{let A=(M-i-r)/i,P=A*Math.PI/2;E=h+t*Math.sin(P),R=t*Math.cos(P),S=t*Math.sin(P),w=u+d+A*u}let b=Math.max(0,Math.min(1,w/f)),v=0;M===0?v=.5/s:M===p&&(v=-.5/s);for(let A=0;A<=s;A++){let P=A/s,L=P*Math.PI*2,B=Math.sin(L),V=Math.cos(L);x.x=-R*V,x.y=E,x.z=R*B,a.push(x.x,x.y,x.z),m.set(-R*V,S,R*B),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+v,b)}if(M>0){let A=(M-1)*g;for(let P=0;P<s;P++){let L=A+P,B=A+P+1,V=M*g+P,I=M*g+P+1;o.push(L,B,V),o.push(B,I,V)}}}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Wi=class n extends je{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new F,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mt=class n extends je{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,g=[],m=i/2,x=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function M(){let E=new F,R=new F,S=0,b=(e-t)/i;for(let v=0;v<=r;v++){let A=[],P=v/r,L=P*(e-t)+t;for(let B=0;B<=s;B++){let V=B/s,I=V*l+a,U=Math.sin(I),G=Math.cos(I);R.x=L*U,R.y=-P*i+m,R.z=L*G,u.push(R.x,R.y,R.z),E.set(U,b,G).normalize(),d.push(E.x,E.y,E.z),f.push(V,1-P),A.push(p++)}g.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let P=g[A][v],L=g[A+1][v],B=g[A+1][v+1],V=g[A][v+1];(t>0||A!==0)&&(h.push(P,L,V),S+=3),(e>0||A!==r-1)&&(h.push(L,B,V),S+=3)}c.addGroup(x,S,0),x+=S}function w(E){let R=p,S=new lt,b=new F,v=0,A=E===!0?t:e,P=E===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),p++;let L=p;for(let B=0;B<=s;B++){let I=B/s*l+a,U=Math.cos(I),G=Math.sin(I);b.x=A*G,b.y=m*P,b.z=A*U,u.push(b.x,b.y,b.z),d.push(0,P,0),S.x=U*.5+.5,S.y=G*.5*P+.5,f.push(S.x,S.y),p++}for(let B=0;B<s;B++){let V=R+B,I=L+B;E===!0?h.push(I,I+1,V):h.push(I+1,I,V),v+=3}c.addGroup(x,v,E===!0?1:2),x+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jn=class n extends mt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oh=class n extends je{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let w=new F,E=new F,R=new F;for(let S=0;S<e.length;S+=3)f(e[S+0],w),f(e[S+1],E),f(e[S+2],R),l(w,E,R,M)}function l(M,w,E,R){let S=R+1,b=[];for(let v=0;v<=S;v++){b[v]=[];let A=M.clone().lerp(E,v/S),P=w.clone().lerp(E,v/S),L=S-v;for(let B=0;B<=L;B++)B===0&&v===S?b[v][B]=A:b[v][B]=A.clone().lerp(P,B/L)}for(let v=0;v<S;v++)for(let A=0;A<2*(S-v)-1;A++){let P=Math.floor(A/2);A%2===0?(d(b[v][P+1]),d(b[v+1][P]),d(b[v][P])):(d(b[v][P+1]),d(b[v+1][P+1]),d(b[v+1][P]))}}function c(M){let w=new F;for(let E=0;E<r.length;E+=3)w.x=r[E+0],w.y=r[E+1],w.z=r[E+2],w.normalize().multiplyScalar(M),r[E+0]=w.x,r[E+1]=w.y,r[E+2]=w.z}function h(){let M=new F;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let E=m(M)/2/Math.PI+.5,R=x(M)/Math.PI+.5;o.push(E,1-R)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let w=o[M+0],E=o[M+2],R=o[M+4],S=Math.max(w,E,R),b=Math.min(w,E,R);S>.9&&b<.1&&(w<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,w){let E=M*3;w.x=t[E+0],w.y=t[E+1],w.z=t[E+2]}function p(){let M=new F,w=new F,E=new F,R=new F,S=new lt,b=new lt,v=new lt;for(let A=0,P=0;A<r.length;A+=9,P+=6){M.set(r[A+0],r[A+1],r[A+2]),w.set(r[A+3],r[A+4],r[A+5]),E.set(r[A+6],r[A+7],r[A+8]),S.set(o[P+0],o[P+1]),b.set(o[P+2],o[P+3]),v.set(o[P+4],o[P+5]),R.copy(M).add(w).add(E).divideScalar(3);let L=m(R);g(S,P+0,M,L),g(b,P+2,w,L),g(v,P+4,E,L)}}function g(M,w,E,R){R<0&&M.x===1&&(o[w]=M.x-1),E.x===0&&E.z===0&&(o[w]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function x(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){me("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new lt:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new F,s=[],r=[],o=[],a=new F,l=new $t;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Xo=class extends Ii{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ah=class extends Xo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xf(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Sp=new F,Tp=new F,Bd=new xf,Od=new xf,Hd=new xf,fr=class extends Ii{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Tp.subVectors(s[0],s[1]).add(s[0]),c=Tp);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Sp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Bd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,g,m),Od.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,g,m),Hd.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(Bd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Od.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hd.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Bd.calc(l),Od.calc(l),Hd.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rp(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function rx(n,t){let e=1-n;return e*e*t}function ox(n,t){return 2*(1-n)*n*t}function ax(n,t){return n*n*t}function Fa(n,t,e,i){return rx(n,t)+ox(n,e)+ax(n,i)}function lx(n,t){let e=1-n;return e*e*e*t}function cx(n,t){let e=1-n;return 3*e*e*n*t}function hx(n,t){return 3*(1-n)*n*n*t}function ux(n,t){return n*n*n*t}function Ba(n,t,e,i,s){return lx(n,t)+cx(n,e)+hx(n,i)+ux(n,s)}var Qa=class extends Ii{constructor(t=new lt,e=new lt,i=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new lt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ba(t,s.x,r.x,o.x,a.x),Ba(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lh=class extends Ii{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ba(t,s.x,r.x,o.x,a.x),Ba(t,s.y,r.y,o.y,a.y),Ba(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends Ii{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ch=class extends Ii{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends Ii{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Fa(t,s.x,r.x,o.x),Fa(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends Ii{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Fa(t,s.x,r.x,o.x),Fa(t,s.y,r.y,o.y),Fa(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Rp(a,l.x,c.x,h.x,u.x),Rp(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},hh=Object.freeze({__proto__:null,ArcCurve:ah,CatmullRomCurve3:fr,CubicBezierCurve:Qa,CubicBezierCurve3:lh,EllipseCurve:Xo,LineCurve:ja,LineCurve3:ch,QuadraticBezierCurve:tl,QuadraticBezierCurve3:el,SplineCurve:nl}),uh=class extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new hh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},$r=class extends uh{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ja(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new tl(this.currentPoint.clone(),new lt(t,e),new lt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Qa(this.currentPoint.clone(),new lt(t,e),new lt(i,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new nl(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Xo(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ui=class extends $r{constructor(t){super(t),this.uuid=br(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new $r().fromJSON(s))}return this}};function dx(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=wm(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=xx(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return il(r,o,e,a,l,c,0),o}function wm(n,t,e,i,s){let r;if(s===Ax(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Ap(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Ap(o/i|0,n[o],n[o+1],r);return r&&qo(r,r.next)&&(rl(r),r=r.next),r}function Zr(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(qo(e,e.next)||mn(e.prev,e,e.next)===0)){if(rl(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function il(n,t,e,i,s,r,o){if(!n)return;!o&&r&&bx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?px(n,i,s,r):fx(n)){t.push(l.i,n.i,c.i),rl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=mx(Zr(n),t),il(n,t,e,i,s,r,2)):o===2&&gx(n,t,e,i,s,r):il(Zr(n),t,e,i,s,r,1);break}}}function fx(n){let t=n.prev,e=n,i=n.next;if(mn(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ua(s,a,r,l,o,c,p.x,p.y)&&mn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function px(n,t,e,i){let s=n.prev,r=n,o=n.next;if(mn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),g=Math.max(a,l,c),m=Math.max(h,u,d),x=Xd(f,p,t,e,i),M=Xd(g,m,t,e,i),w=n.prevZ,E=n.nextZ;for(;w&&w.z>=x&&E&&E.z<=M;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&Ua(a,h,l,u,c,d,w.x,w.y)&&mn(w.prev,w,w.next)>=0||(w=w.prevZ,E.x>=f&&E.x<=g&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&Ua(a,h,l,u,c,d,E.x,E.y)&&mn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;w&&w.z>=x;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&Ua(a,h,l,u,c,d,w.x,w.y)&&mn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;E&&E.z<=M;){if(E.x>=f&&E.x<=g&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&Ua(a,h,l,u,c,d,E.x,E.y)&&mn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function mx(n,t){let e=n;do{let i=e.prev,s=e.next.next;!qo(i,s)&&Tm(i,e,e.next,s)&&sl(i,s)&&sl(s,i)&&(t.push(i.i,e.i,s.i),rl(e),rl(e.next),e=n=s),e=e.next}while(e!==n);return Zr(e)}function gx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sx(o,a)){let l=Rm(o,a);o=Zr(o,o.next),l=Zr(l,l.next),il(o,t,e,i,s,r,0),il(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function xx(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=wm(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(wx(c))}s.sort(yx);for(let r=0;r<s.length;r++)e=Mx(s[r],e);return e}function yx(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Mx(n,t){let e=vx(n,t);if(!e)return t;let i=Rm(e,n);return Zr(i,i.next),Zr(e,e.next)}function vx(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(qo(n,e))return e;do{if(qo(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Sm(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);sl(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&_x(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function _x(n,t){return mn(n.prev,n,t.prev)<0&&mn(t.next,n,n.next)<0}function bx(n,t,e,i){let s=n;do s.z===0&&(s.z=Xd(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ex(s)}function Ex(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Xd(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function wx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Sm(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ua(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Sm(n,t,e,i,s,r,o,a)}function Sx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Tx(n,t)&&(sl(n,t)&&sl(t,n)&&Rx(n,t)&&(mn(n.prev,n,t.prev)||mn(n,t.prev,t))||qo(n,t)&&mn(n.prev,n,n.next)>0&&mn(t.prev,t,t.next)>0)}function mn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function qo(n,t){return n.x===t.x&&n.y===t.y}function Tm(n,t,e,i){let s=Hc(mn(n,t,e)),r=Hc(mn(n,t,i)),o=Hc(mn(e,i,n)),a=Hc(mn(e,i,t));return!!(s!==r&&o!==a||s===0&&Oc(n,e,t)||r===0&&Oc(n,i,t)||o===0&&Oc(e,n,i)||a===0&&Oc(e,t,i))}function Oc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Hc(n){return n>0?1:n<0?-1:0}function Tx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Tm(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function sl(n,t){return mn(n.prev,n,n.next)<0?mn(n,t,n.next)>=0&&mn(n,n.prev,t)>=0:mn(n,t,n.prev)<0||mn(n,n.next,t)<0}function Rx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Rm(n,t){let e=qd(n.i,n.x,n.y),i=qd(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ap(n,t,e,i){let s=qd(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function rl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qd(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ax(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Yd=class{static triangulate(t,e,i=2){return dx(t,e,i)}},fs=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Cp(t),Pp(i,t);let o=t.length;e.forEach(Cp);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Pp(i,e[l]);let a=Yd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Cp(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Pp(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var bi=class n extends je{constructor(t=new ui([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,x=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Cx,w,E=!1,R,S,b,v;if(x){w=x.getSpacedPoints(h),E=!0,d=!1;let ht=x.isCatmullRomCurve3?x.closed:!1;R=x.computeFrenetFrames(h,ht),S=new F,b=new F,v=new F}d||(m=0,f=0,p=0,g=0);let A=a.extractPoints(c),P=A.shape,L=A.holes;if(!fs.isClockWise(P)){P=P.reverse();for(let ht=0,bt=L.length;ht<bt;ht++){let wt=L[ht];fs.isClockWise(wt)&&(L[ht]=wt.reverse())}}function V(ht){let wt=10000000000000001e-36,Xt=ht[0];for(let Bt=1;Bt<=ht.length;Bt++){let Ee=Bt%ht.length,ee=ht[Ee],Ne=ee.x-Xt.x,Ue=ee.y-Xt.y,ke=Ne*Ne+Ue*Ue,q=Math.max(Math.abs(ee.x),Math.abs(ee.y),Math.abs(Xt.x),Math.abs(Xt.y)),An=wt*q*q;if(ke<=An){ht.splice(Ee,1),Bt--;continue}Xt=ee}}V(P),L.forEach(V);let I=L.length,U=P;for(let ht=0;ht<I;ht++){let bt=L[ht];P=P.concat(bt)}function G(ht,bt,wt){return bt||ge("ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(bt,wt)}let X=P.length;function j(ht,bt,wt){let Xt,Bt,Ee,ee=ht.x-bt.x,Ne=ht.y-bt.y,Ue=wt.x-ht.x,ke=wt.y-ht.y,q=ee*ee+Ne*Ne,An=ee*ke-Ne*Ue;if(Math.abs(An)>Number.EPSILON){let Le=Math.sqrt(q),Ke=Math.sqrt(Ue*Ue+ke*ke),Lt=bt.x-Ne/Le,yn=bt.y+ee/Le,de=wt.x-ke/Ke,ye=wt.y+Ue/Ke,N=((de-Lt)*ke-(ye-yn)*Ue)/(ee*ke-Ne*Ue);Xt=Lt+ee*N-ht.x,Bt=yn+Ne*N-ht.y;let T=Xt*Xt+Bt*Bt;if(T<=2)return new lt(Xt,Bt);Ee=Math.sqrt(T/2)}else{let Le=!1;ee>Number.EPSILON?Ue>Number.EPSILON&&(Le=!0):ee<-Number.EPSILON?Ue<-Number.EPSILON&&(Le=!0):Math.sign(Ne)===Math.sign(ke)&&(Le=!0),Le?(Xt=-Ne,Bt=ee,Ee=Math.sqrt(q)):(Xt=ee,Bt=Ne,Ee=Math.sqrt(q/2))}return new lt(Xt/Ee,Bt/Ee)}let Y=[];for(let ht=0,bt=U.length,wt=bt-1,Xt=ht+1;ht<bt;ht++,wt++,Xt++)wt===bt&&(wt=0),Xt===bt&&(Xt=0),Y[ht]=j(U[ht],U[wt],U[Xt]);let $=[],Z,ft=Y.concat();for(let ht=0,bt=I;ht<bt;ht++){let wt=L[ht];Z=[];for(let Xt=0,Bt=wt.length,Ee=Bt-1,ee=Xt+1;Xt<Bt;Xt++,Ee++,ee++)Ee===Bt&&(Ee=0),ee===Bt&&(ee=0),Z[Xt]=j(wt[Xt],wt[Ee],wt[ee]);$.push(Z),ft=ft.concat(Z)}let kt;if(m===0)kt=fs.triangulateShape(U,L);else{let ht=[],bt=[];for(let wt=0;wt<m;wt++){let Xt=wt/m,Bt=f*Math.cos(Xt*Math.PI/2),Ee=p*Math.sin(Xt*Math.PI/2)+g;for(let ee=0,Ne=U.length;ee<Ne;ee++){let Ue=G(U[ee],Y[ee],Ee);ie(Ue.x,Ue.y,-Bt),Xt===0&&ht.push(Ue)}for(let ee=0,Ne=I;ee<Ne;ee++){let Ue=L[ee];Z=$[ee];let ke=[];for(let q=0,An=Ue.length;q<An;q++){let Le=G(Ue[q],Z[q],Ee);ie(Le.x,Le.y,-Bt),Xt===0&&ke.push(Le)}Xt===0&&bt.push(ke)}}kt=fs.triangulateShape(ht,bt)}let it=kt.length,Pt=p+g;for(let ht=0;ht<X;ht++){let bt=d?G(P[ht],ft[ht],Pt):P[ht];E?(b.copy(R.normals[0]).multiplyScalar(bt.x),S.copy(R.binormals[0]).multiplyScalar(bt.y),v.copy(w[0]).add(b).add(S),ie(v.x,v.y,v.z)):ie(bt.x,bt.y,0)}for(let ht=1;ht<=h;ht++)for(let bt=0;bt<X;bt++){let wt=d?G(P[bt],ft[bt],Pt):P[bt];E?(b.copy(R.normals[ht]).multiplyScalar(wt.x),S.copy(R.binormals[ht]).multiplyScalar(wt.y),v.copy(w[ht]).add(b).add(S),ie(v.x,v.y,v.z)):ie(wt.x,wt.y,u/h*ht)}for(let ht=m-1;ht>=0;ht--){let bt=ht/m,wt=f*Math.cos(bt*Math.PI/2),Xt=p*Math.sin(bt*Math.PI/2)+g;for(let Bt=0,Ee=U.length;Bt<Ee;Bt++){let ee=G(U[Bt],Y[Bt],Xt);ie(ee.x,ee.y,u+wt)}for(let Bt=0,Ee=L.length;Bt<Ee;Bt++){let ee=L[Bt];Z=$[Bt];for(let Ne=0,Ue=ee.length;Ne<Ue;Ne++){let ke=G(ee[Ne],Z[Ne],Xt);E?ie(ke.x,ke.y+w[h-1].y,w[h-1].x+wt):ie(ke.x,ke.y,u+wt)}}}zt(),ne();function zt(){let ht=s.length/3;if(d){let bt=0,wt=X*bt;for(let Xt=0;Xt<it;Xt++){let Bt=kt[Xt];nn(Bt[2]+wt,Bt[1]+wt,Bt[0]+wt)}bt=h+m*2,wt=X*bt;for(let Xt=0;Xt<it;Xt++){let Bt=kt[Xt];nn(Bt[0]+wt,Bt[1]+wt,Bt[2]+wt)}}else{for(let bt=0;bt<it;bt++){let wt=kt[bt];nn(wt[2],wt[1],wt[0])}for(let bt=0;bt<it;bt++){let wt=kt[bt];nn(wt[0]+X*h,wt[1]+X*h,wt[2]+X*h)}}i.addGroup(ht,s.length/3-ht,0)}function ne(){let ht=s.length/3,bt=0;Ft(U,bt),bt+=U.length;for(let wt=0,Xt=L.length;wt<Xt;wt++){let Bt=L[wt];Ft(Bt,bt),bt+=Bt.length}i.addGroup(ht,s.length/3-ht,1)}function Ft(ht,bt){let wt=ht.length;for(;--wt>=0;){let Xt=wt,Bt=wt-1;Bt<0&&(Bt=ht.length-1);for(let Ee=0,ee=h+m*2;Ee<ee;Ee++){let Ne=X*Ee,Ue=X*(Ee+1),ke=bt+Xt+Ne,q=bt+Bt+Ne,An=bt+Bt+Ue,Le=bt+Xt+Ue;rt(ke,q,An,Le)}}}function ie(ht,bt,wt){l.push(ht),l.push(bt),l.push(wt)}function nn(ht,bt,wt){Qt(ht),Qt(bt),Qt(wt);let Xt=s.length/3,Bt=M.generateTopUV(i,s,Xt-3,Xt-2,Xt-1);ue(Bt[0]),ue(Bt[1]),ue(Bt[2])}function rt(ht,bt,wt,Xt){Qt(ht),Qt(bt),Qt(Xt),Qt(bt),Qt(wt),Qt(Xt);let Bt=s.length/3,Ee=M.generateSideWallUV(i,s,Bt-6,Bt-3,Bt-2,Bt-1);ue(Ee[0]),ue(Ee[1]),ue(Ee[3]),ue(Ee[1]),ue(Ee[2]),ue(Ee[3])}function Qt(ht){s.push(l[ht*3+0]),s.push(l[ht*3+1]),s.push(l[ht*3+2])}function ue(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Px(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new hh[s.type]().fromJSON(s)),new n(i,t.options)}},Cx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],g=t[r*3],m=t[r*3+1],x=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-u),new lt(d,1-p),new lt(g,1-x)]:[new lt(a,1-l),new lt(h,1-u),new lt(f,1-p),new lt(m,1-x)]}};function Px(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Li=class n extends oh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Jr=class n extends je{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ie(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new F,d=new lt,f=new F,p=new F,g=new F,m=0,x=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,x=t[M+1].y-t[M].y,f.x=x*1,f.y=-m,f.z=x*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=t[M+1].x-t[M].x,x=t[M+1].y-t[M].y,f.x=x*1,f.y=-m,f.z=x*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(p)}for(let M=0;M<=e;M++){let w=i+M*h*s,E=Math.sin(w),R=Math.cos(w);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*E,u.y=t[S].y,u.z=t[S].x*R,o.push(u.x,u.y,u.z),d.x=M/e,d.y=S/(t.length-1),a.push(d.x,d.y);let b=l[3*S+0]*E,v=l[3*S+1],A=l[3*S+0]*R;c.push(b,v,A)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){let E=w+M*t.length,R=E,S=E+t.length,b=E+t.length+1,v=E+1;r.push(R,S,v),r.push(b,v,S)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var be=class n extends je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],g=[],m=[];for(let x=0;x<h;x++){let M=x*d-o;for(let w=0;w<c;w++){let E=w*u-r;p.push(E,-M,0),g.push(0,0,1),m.push(w/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let M=0;M<a;M++){let w=M+c*x,E=M+c*(x+1),R=M+1+c*(x+1),S=M+1+c*x;f.push(w,E,S),f.push(E,R,S)}this.setIndex(f),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(g,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ol=class n extends je{constructor(t=new ui([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;fs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,x=p.length;m<x;m++){let M=p[m];fs.isClockWise(M)===!0&&(p[m]=M.reverse())}let g=fs.triangulateShape(f,p);for(let m=0,x=p.length;m<x;m++){let M=p[m];f=f.concat(M)}for(let m=0,x=f.length;m<x;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,x=g.length;m<x;m++){let M=g[m],w=M[0]+u,E=M[1]+u,R=M[2]+u;i.push(w,E,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ix(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Ix(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var he=class n extends je{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,d=new F,f=[],p=[],g=[],m=[];for(let x=0;x<=i;x++){let M=[],w=x/i,E=o+w*a,R=t*Math.cos(E),S=Math.sqrt(t*t-R*R),b=0;x===0&&o===0?b=.5/e:x===i&&l===Math.PI&&(b=-.5/e);for(let v=0;v<=e;v++){let A=v/e,P=s+A*r;u.x=-S*Math.cos(P),u.y=R,u.z=S*Math.sin(P),p.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(A+b,1-w),M.push(c++)}h.push(M)}for(let x=0;x<i;x++)for(let M=0;M<e;M++){let w=h[x][M+1],E=h[x][M],R=h[x+1][M],S=h[x+1][M+1];(x!==0||o>0)&&f.push(w,E,S),(x!==i-1||l<Math.PI)&&f.push(E,R,S)}this.setIndex(f),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(g,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xe=class n extends je{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new F,f=new F,p=new F;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let x=0;x<=s;x++){let M=x/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(x/s),u.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=s;m++){let x=(s+1)*g+m-1,M=(s+1)*(g-1)+m-1,w=(s+1)*(g-1)+m,E=(s+1)*g+m;l.push(x,M,E),l.push(M,w,E)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Kr=class n extends je{constructor(t=new el(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,l=new F,c=new lt,h=new F,u=[],d=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function g(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),M(),x()}function m(w){h=t.getPointAt(w/e,h);let E=o.normals[w],R=o.binormals[w];for(let S=0;S<=s;S++){let b=S/s*Math.PI*2,v=Math.sin(b),A=-Math.cos(b);l.x=A*E.x+v*R.x,l.y=A*E.y+v*R.y,l.z=A*E.z+v*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let w=1;w<=e;w++)for(let E=1;E<=s;E++){let R=(s+1)*(w-1)+(E-1),S=(s+1)*w+(E-1),b=(s+1)*w+E,v=(s+1)*(w-1)+E;p.push(R,S,v),p.push(S,b,v)}}function M(){for(let w=0;w<=e;w++)for(let E=0;E<=s;E++)c.x=w/e,c.y=E/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new hh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function so(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Ip(s))s.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ip(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ti(n){let t={};for(let e=0;e<n.length;e++){let i=so(n[e]);for(let s in i)t[s]=i[s]}return t}function Ip(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Lx(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function yf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}var Ni={clone:so,merge:ti},Dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dx,this.fragmentShader=Nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=Lx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ln().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Me().fromArray(s.value);break;case"m4":this.uniforms[i].value=new $t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Yo=class extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},te=class extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xi=class extends te{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Xr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Xr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var al=class extends ts{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ll=class extends ts{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Sh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$o=class extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dh=class extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Do(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function kc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var pr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fh=class extends pr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zd,endingEnd:zd}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vd:r=t,a=2*e-i;break;case Wd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vd:o=t,l=2*i-e;break;case Wd:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),g=p*p,m=g*p,x=-d*m+2*d*g-d*p,M=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,w=(-1-f)*m+(1.5+f)*g+.5*p,E=f*m-f*g;for(let R=0;R!==a;++R)r[R]=x*o[h+R]+M*o[c+R]+w*o[l+R]+E*o[u+R];return r}},ph=class extends pr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},mh=class extends pr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gh=class extends pr{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(s-e),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],x=f*d+p*2,M=u[x],w=u[x+1],E=t*d+p*2,R=h[E],S=h[E+1],b=Fx(i,e,M,R,s);r[p]=Am(b,g,w,S,m)}return r}};function Am(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Ux(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Fx(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Am(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Ux(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Di=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Do(e,this.TimeBufferType),this.values=Do(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Do(t.times,Array),values:Do(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),kc(t.settings)&&(i.settings={inTangents:Do(t.settings.inTangents,Array),outTangents:Do(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Oa:e=this.InterpolantFactoryMethodDiscrete;break;case jc:e=this.InterpolantFactoryMethodLinear;break;case Vc:e=this.InterpolantFactoryMethodSmooth;break;case Gd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return me("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return jc;case this.InterpolantFactoryMethodSmooth:return Vc;case this.InterpolantFactoryMethodBezier:return Gd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;kc(this.settings)&&(Lp(this.settings.inTangents,t),Lp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;kc(this.settings)&&(Dp(this.settings.inTangents,t),Dp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ge("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ge("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ge("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ge("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&O1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ge("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Vc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let g=e[u+p];if(g!==e[d+p]||g!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,kc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Dp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=jc;var mr=class extends Di{constructor(t,e,i){super(t,e,i)}};mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=Oa;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends Di{constructor(t,e,i,s){super(t,e,i,s)}};xh.prototype.ValueTypeName="color";var yh=class extends Di{constructor(t,e,i,s){super(t,e,i,s)}};yh.prototype.ValueTypeName="number";var Mh=class extends pr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},cl=class extends Di{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Mh(this.times,this.values,this.getValueSize(),t)}};cl.prototype.ValueTypeName="quaternion";cl.prototype.InterpolantFactoryMethodSmooth=void 0;var gr=class extends Di{constructor(t,e,i){super(t,e,i)}};gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=Oa;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends Di{constructor(t,e,i,s){super(t,e,i,s)}};vh.prototype.ValueTypeName="vector";var _h=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cm=new _h,bh=class{constructor(t){this.manager=t!==void 0?t:Cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};bh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zo=class extends rn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qr=class extends Zo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},kd=new $t,Np=new F,Up=new F,hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Np.setFromMatrixPosition(t.matrixWorld),e.position.copy(Np),Up.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Up),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){kd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(kd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Oo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(kd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Gc=new F,zc=new _n,us=new F,ul=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gc,zc,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,zc,us.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Gc,zc,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,zc,us.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cr=new F,Fp=new lt,Bp=new lt,kn=class extends ul{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=th*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(md*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return th*2*Math.atan(Math.tan(md*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cr.x,cr.y).multiplyScalar(-t/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-t/cr.z)}getViewSize(t,e){return this.getViewBounds(t,Fp,Bp),e.subVectors(Bp,Fp)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(md*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $d=class extends hl{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}},tn=class extends Zo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $d}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},jr=class extends ul{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zd=class extends hl{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xr=class extends Zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Zd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var No=-90,Uo=1,Jo=class extends rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kn(No,Uo,t,e);s.layers=this.layers,this.add(s);let r=new kn(No,Uo,t,e);r.layers=this.layers,this.add(r);let o=new kn(No,Uo,t,e);o.layers=this.layers,this.add(o);let a=new kn(No,Uo,t,e);a.layers=this.layers,this.add(a);let l=new kn(No,Uo,t,e);l.layers=this.layers,this.add(l);let c=new kn(No,Uo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=g,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Eh=class extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},dl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Bx.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Bx(){this._document.hidden===!1&&this.reset()}var Mf="\\[\\]\\.:\\/",Ox=new RegExp("["+Mf+"]","g"),vf="[^"+Mf+"]",Hx="[^"+Mf.replace("\\.","")+"]",kx=/((?:WC+[\/:])*)/.source.replace("WC",vf),Gx=/(WCOD+)?/.source.replace("WCOD",Hx),zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vf),Vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vf),Wx=new RegExp("^"+kx+Gx+zx+Vx+"$"),Xx=["material","materials","bones","map"],Jd=class{constructor(t,e,i){let s=i||on.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},on=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ox,"")}static parseTrackName(t){let e=Wx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Xx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){me("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};on.Composite=Jd;on.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};on.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};on.prototype.GetterByBindingType=[on.prototype._getValue_direct,on.prototype._getValue_array,on.prototype._getValue_arrayElement,on.prototype._getValue_toArray];on.prototype.SetterByBindingTypeAndVersioning=[[on.prototype._setValue_direct,on.prototype._setValue_direct_setNeedsUpdate,on.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[on.prototype._setValue_array,on.prototype._setValue_array_setNeedsUpdate,on.prototype._setValue_array_setMatrixWorldNeedsUpdate],[on.prototype._setValue_arrayElement,on.prototype._setValue_arrayElement_setNeedsUpdate,on.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[on.prototype._setValue_fromArray,on.prototype._setValue_fromArray_setNeedsUpdate,on.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NE=new Float32Array(1);var Tf=class Tf{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Tf.prototype.isMatrix2=!0;var Kd=Tf;function _f(n,t,e,i){let s=qx(i);switch(e){case cf:return n*t;case jo:return n*t/s.components*s.byteLength;case Lh:return n*t/s.components*s.byteLength;case _r:return n*t*2/s.components*s.byteLength;case Dh:return n*t*2/s.components*s.byteLength;case hf:return n*t*3/s.components*s.byteLength;case ss:return n*t*4/s.components*s.byteLength;case Nh:return n*t*4/s.components*s.byteLength;case vl:case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bl:case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fh:case Oh:return Math.max(n,16)*Math.max(t,8)/4;case Uh:case Bh:return Math.max(n,8)*Math.max(t,8)/2;case Hh:case kh:case zh:case Vh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gh:case wl:case Wh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case jh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case tu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case eu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case iu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case su:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ru:case ou:case au:return Math.ceil(n/4)*Math.ceil(t/4)*16;case lu:case cu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Sl:case hu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qx(n){switch(n){case Ei:case rf:return{byteLength:1,components:1};case Qo:case of:case Ln:return{byteLength:2,components:1};case Ph:case Ih:return{byteLength:2,components:4};case is:case Ch:case qi:return{byteLength:4,components:1};case af:case lf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Km(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Qx(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],g=u[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let g=u[f];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t2=`#ifdef USE_ALPHAHASH
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
#endif`,e2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r2=`#ifdef USE_AOMAP
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
#endif`,o2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a2=`#ifdef USE_BATCHING
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
#endif`,l2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d2=`#ifdef USE_IRIDESCENCE
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
#endif`,f2=`#ifdef USE_BUMPMAP
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
#endif`,p2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,b2=`#define PI 3.141592653589793
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
} // validated`,E2=`vec3 transformedNormal = objectNormal;
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
#endif`,w2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A2="gl_FragColor = linearToOutputTexel( gl_FragColor );",C2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P2=`#ifdef USE_ENVMAP
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
#endif`,I2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,L2=`#ifdef USE_ENVMAP
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
#endif`,D2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N2=`#ifdef USE_ENVMAP
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
#endif`,U2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H2=`#ifdef USE_GRADIENTMAP
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
}`,k2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,W2=`#ifdef USE_ENVMAP
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
#endif`,X2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z2=`PhysicalMaterial material;
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
#endif`,J2=`uniform sampler2D dfgLUT;
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
}`,K2=`
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
#endif`,Q2=`#if defined( RE_IndirectDiffuse )
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
#endif`,j2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
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
#endif`,fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_y=`#ifdef USE_NORMALMAP
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
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,By=`float getShadowMask() {
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
}`,Oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gy=`#ifdef USE_SKINNING
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
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`uniform float backgroundBlurriness;
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`#include <common>
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
}`,rM=`#if DEPTH_PACKING == 3200
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
}`,oM=`#define DISTANCE
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
}`,aM=`#define DISTANCE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`uniform float scale;
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
}`,uM=`uniform vec3 diffuse;
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
}`,dM=`#include <common>
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
}`,fM=`uniform vec3 diffuse;
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
}`,pM=`#define LAMBERT
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
}`,mM=`#define LAMBERT
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
}`,gM=`#define MATCAP
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
}`,xM=`#define MATCAP
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
}`,yM=`#define NORMAL
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
}`,MM=`#define NORMAL
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
}`,vM=`#define PHONG
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
}`,_M=`#define PHONG
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
}`,bM=`#define STANDARD
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
}`,EM=`#define STANDARD
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
}`,wM=`#define TOON
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
}`,SM=`#define TOON
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
}`,TM=`uniform float size;
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
}`,RM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,CM=`uniform vec3 color;
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
}`,PM=`uniform float rotation;
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
}`,IM=`uniform vec3 diffuse;
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
}`,Re={alphahash_fragment:jx,alphahash_pars_fragment:t2,alphamap_fragment:e2,alphamap_pars_fragment:n2,alphatest_fragment:i2,alphatest_pars_fragment:s2,aomap_fragment:r2,aomap_pars_fragment:o2,batching_pars_vertex:a2,batching_vertex:l2,begin_vertex:c2,beginnormal_vertex:h2,bsdfs:u2,iridescence_fragment:d2,bumpmap_pars_fragment:f2,clipping_planes_fragment:p2,clipping_planes_pars_fragment:m2,clipping_planes_pars_vertex:g2,clipping_planes_vertex:x2,color_fragment:y2,color_pars_fragment:M2,color_pars_vertex:v2,color_vertex:_2,common:b2,defaultnormal_vertex:E2,displacementmap_pars_vertex:w2,displacementmap_vertex:S2,emissivemap_fragment:T2,emissivemap_pars_fragment:R2,colorspace_fragment:A2,colorspace_pars_fragment:C2,envmap_fragment:P2,envmap_common_pars_fragment:I2,envmap_pars_fragment:L2,envmap_pars_vertex:D2,envmap_physical_pars_fragment:W2,envmap_vertex:N2,fog_vertex:U2,fog_pars_vertex:F2,fog_fragment:B2,fog_pars_fragment:O2,gradientmap_pars_fragment:H2,lightmap_pars_fragment:k2,lights_lambert_fragment:G2,lights_lambert_pars_fragment:z2,lights_pars_begin:V2,lights_toon_fragment:X2,lights_toon_pars_fragment:q2,lights_phong_fragment:Y2,lights_phong_pars_fragment:$2,lights_physical_fragment:Z2,lights_physical_pars_fragment:J2,lights_fragment_begin:K2,lights_fragment_maps:Q2,lights_fragment_end:j2,lightprobes_pars_fragment:ty,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:sy,map_fragment:ry,map_pars_fragment:oy,map_particle_fragment:ay,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:hy,morphinstance_vertex:uy,morphcolor_vertex:dy,morphnormal_vertex:fy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:xy,normal_pars_fragment:yy,normal_pars_vertex:My,normal_vertex:vy,normalmap_pars_fragment:_y,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:wy,iridescence_pars_fragment:Sy,opaque_fragment:Ty,packing:Ry,premultiplied_alpha_fragment:Ay,project_vertex:Cy,dithering_fragment:Py,dithering_pars_fragment:Iy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Ny,shadowmap_pars_vertex:Uy,shadowmap_vertex:Fy,shadowmask_pars_fragment:By,skinbase_vertex:Oy,skinning_pars_vertex:Hy,skinning_vertex:ky,skinnormal_vertex:Gy,specularmap_fragment:zy,specularmap_pars_fragment:Vy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:$y,uv_pars_vertex:Zy,uv_vertex:Jy,worldpos_vertex:Ky,background_vert:Qy,background_frag:jy,backgroundCube_vert:tM,backgroundCube_frag:eM,cube_vert:nM,cube_frag:iM,depth_vert:sM,depth_frag:rM,distance_vert:oM,distance_frag:aM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:hM,linedashed_frag:uM,meshbasic_vert:dM,meshbasic_frag:fM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:gM,meshmatcap_frag:xM,meshnormal_vert:yM,meshnormal_frag:MM,meshphong_vert:vM,meshphong_frag:_M,meshphysical_vert:bM,meshphysical_frag:EM,meshtoon_vert:wM,meshtoon_frag:SM,points_vert:TM,points_frag:RM,shadow_vert:AM,shadow_frag:CM,sprite_vert:PM,sprite_frag:IM},Ot={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},_s={basic:{uniforms:ti([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ti([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ti([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ti([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ti([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new qt(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ti([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ti([Ot.points,Ot.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ti([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ti([Ot.common,Ot.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ti([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:ti([Ot.sprite,Ot.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distance:{uniforms:ti([Ot.common,Ot.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distance_vert,fragmentShader:Re.distance_frag},shadow:{uniforms:ti([Ot.lights,Ot.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};_s.physical={uniforms:ti([_s.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};var du={r:0,b:0,g:0},LM=new $t,Qm=new Me;Qm.set(-1,0,0,0,1,0,0,0,1);function DM(n,t,e,i,s,r){let o=new qt(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let E=M.backgroundBlurriness>0;w=t.get(w,E)}return w}function p(M){let w=!1,E=f(M);E===null?m(o,a):E&&E.isColor&&(m(E,1),w=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,w){let E=f(w);E&&E.isCubeTexture?(c===void 0&&(c=new D(new ve(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:so(_s.backgroundCube.uniforms),vertexShader:_s.backgroundCube.vertexShader,fragmentShader:_s.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(w.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qm),c.material.toneMapped=De.getTransfer(E.colorSpace)!==Ge,(h!==E||u!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new D(new be(2,2),new cn({name:"BackgroundMaterial",uniforms:so(_s.background.uniforms),vertexShader:_s.background.vertexShader,fragmentShader:_s.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=De.getTransfer(E.colorSpace)!==Ge,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,u=E.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(du,yf(n)),e.buffers.color.setClear(du.r,du.g,du.b,w,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:g,dispose:x}}function NM(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(L,B,V,I,U){let G=!1,X=u(L,I,V,B);r!==X&&(r=X,c(r.object)),G=f(L,I,V,U),G&&p(L,I,V,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,E(L,B,V,I),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function u(L,B,V,I){let U=I.wireframe===!0,G=i[B.id];G===void 0&&(G={},i[B.id]=G);let X=L.isInstancedMesh===!0?L.id:0,j=G[X];j===void 0&&(j={},G[X]=j);let Y=j[V.id];Y===void 0&&(Y={},j[V.id]=Y);let $=Y[U];return $===void 0&&($=d(l()),Y[U]=$),$}function d(L){let B=[],V=[],I=[];for(let U=0;U<e;U++)B[U]=0,V[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,B,V,I){let U=r.attributes,G=B.attributes,X=0,j=V.getAttributes();for(let Y in j)if(j[Y].location>=0){let Z=U[Y],ft=G[Y];if(ft===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),Z===void 0||Z.attribute!==ft||ft&&Z.data!==ft.data)return!0;X++}return r.attributesNum!==X||r.index!==I}function p(L,B,V,I){let U={},G=B.attributes,X=0,j=V.getAttributes();for(let Y in j)if(j[Y].location>=0){let Z=G[Y];Z===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let ft={};ft.attribute=Z,Z&&Z.data&&(ft.data=Z.data),U[Y]=ft,X++}r.attributes=U,r.attributesNum=X,r.index=I}function g(){let L=r.newAttributes;for(let B=0,V=L.length;B<V;B++)L[B]=0}function m(L){x(L,0)}function x(L,B){let V=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;V[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),U[L]!==B&&(n.vertexAttribDivisor(L,B),U[L]=B)}function M(){let L=r.newAttributes,B=r.enabledAttributes;for(let V=0,I=B.length;V<I;V++)B[V]!==L[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function w(L,B,V,I,U,G,X){X===!0?n.vertexAttribIPointer(L,B,V,U,G):n.vertexAttribPointer(L,B,V,I,U,G)}function E(L,B,V,I){g();let U=I.attributes,G=V.getAttributes(),X=B.defaultAttributeValues;for(let j in G){let Y=G[j];if(Y.location>=0){let $=U[j];if($===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let Z=$.normalized,ft=$.itemSize,kt=t.get($);if(kt===void 0)continue;let it=kt.buffer,Pt=kt.type,zt=kt.bytesPerElement,ne=Pt===n.INT||Pt===n.UNSIGNED_INT||$.gpuType===Ch;if($.isInterleavedBufferAttribute){let Ft=$.data,ie=Ft.isInterleavedBuffer===!0?Ft.stride:Ft.itemSize,nn=$.offset;if(Ft.isInstancedInterleavedBuffer||Ft.isInstancedBufferAttribute){for(let rt=0;rt<Y.locationSize;rt++)x(Y.location+rt,Ft.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let rt=0;rt<Y.locationSize;rt++)m(Y.location+rt);n.bindBuffer(n.ARRAY_BUFFER,it);for(let rt=0;rt<Y.locationSize;rt++)w(Y.location+rt,ft/Y.locationSize,Pt,Z,ie*zt,(nn+ft/Y.locationSize*rt)*zt,ne)}else{if($.isInstancedBufferAttribute){for(let Ft=0;Ft<Y.locationSize;Ft++)x(Y.location+Ft,$.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ft=0;Ft<Y.locationSize;Ft++)m(Y.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,it);for(let Ft=0;Ft<Y.locationSize;Ft++)w(Y.location+Ft,ft/Y.locationSize,Pt,Z,ft*zt,ft/Y.locationSize*Ft*zt,ne)}}else if(X!==void 0){let Z=X[j];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(Y.location,Z);break;case 3:n.vertexAttrib3fv(Y.location,Z);break;case 4:n.vertexAttrib4fv(Y.location,Z);break;default:n.vertexAttrib1fv(Y.location,Z)}}}}M()}function R(){A();for(let L in i){let B=i[L];for(let V in B){let I=B[V];for(let U in I){let G=I[U];for(let X in G)h(G[X].object),delete G[X];delete I[U]}}delete i[L]}}function S(L){if(i[L.id]===void 0)return;let B=i[L.id];for(let V in B){let I=B[V];for(let U in I){let G=I[U];for(let X in G)h(G[X].object),delete G[X];delete I[U]}}delete i[L.id]}function b(L){for(let B in i){let V=i[B];for(let I in V){let U=V[I];if(U[L.id]===void 0)continue;let G=U[L.id];for(let X in G)h(G[X].object),delete G[X];delete U[L.id]}}}function v(L){for(let B in i){let V=i[B],I=L.isInstancedMesh===!0?L.id:0,U=V[I];if(U!==void 0){for(let G in U){let X=U[G];for(let j in X)h(X[j].object),delete X[j];delete U[G]}delete V[I],Object.keys(V).length===0&&delete i[B]}}}function A(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function UM(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function FM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==ss&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let v=b===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Ei&&b!==qi&&!v&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(me("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&me("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:E,maxSamples:R,samples:S}}function BM(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ji,a=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,x=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,w=M*4,E=x.clippingState||null;l.value=E,E=h(p,d,w,f);for(let R=0;R!==w;++R)E[R]=e[R];x.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let x=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<x)&&(m=new Float32Array(x));for(let w=0,E=f;w!==g;++w,E+=4)o.copy(u[w]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}var Al=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Za(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ve(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:ns});r.uniforms.tEquirect.value=e;let o=new D(s,r),a=e.minFilter;return e.minFilter===Ys&&(e.minFilter=ci),new Jo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Pm=256,OM=3,HM=20,jm=256,tg=16,kM=3,GM=new F,zM=new qt,na=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Jo(1,10,null),this._boxMesh=new D(new ve(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=GM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(t.background=l.getClearColor(zM));let m=new Jo(i,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=g,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Pm,Mm(t))}_fromTexture(t,e){t.mapping===no||t.mapping===Ko?this._setSize(t.image.length===0?Pm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Im(t,!1,!1),i=Math.log2(t)-OM;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Im(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===no||t.mapping===Ko?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=VM(),this._integrationMaterial=WM());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/tg);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-kM)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(jm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=XM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Im(n,t,e){return new Al(n,{minFilter:Ys,generateMipmaps:t,type:Ln,colorSpace:Ha,depthBuffer:e})}function Pl(n,t,e){return new cn({name:n,uniforms:t,vertexShader:Re.cube_vert,fragmentShader:e,side:En,blending:ns,depthTest:!1,depthWrite:!1})}function VM(){return Pl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${jm}u

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
	`)}function WM(){return Pl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:tg}},`

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
	`)}function XM(){return Pl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${HM}
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
	`)}function Lm(){return Pl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Dm(){return Pl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qM(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Th||f===Rh)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let g=new Al(p.height);return g.fromEquirectangularTexture(n,d),t.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Th||f===Rh,g=f===no||f===Ko;if(p||g){let m=e.get(d),x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new na(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new na(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Th?d.mapping=no:f===Rh&&(d.mapping=Ko),d}function l(d){let f=0,p=6;for(let g=0;g<p;g++)d[g]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function YM(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Xr("WebGLRenderer: "+i+" extension not supported."),s}}}function $M(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let g=r.get(p);g&&(t.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",a),s[g.id]=new WeakRef(g),o.register(g,g.id,g),e.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)t.update(g[m],n.ARRAY_BUFFER)}function u(p){let g=p.index,m=p.attributes.position,x=0;if(m===void 0)return;let M=g!==null?g.array.length:m.array.length/3-1,w=m.count>=65535?Ya:qa,E=new w(Math.ceil(M/3)*6,1),R=E.array;if(g!==null){let b=g.array;x=g.version;for(let v=0,A=0;v<M;v+=3){let P=b[v+0],L=b[v+1],B=b[v+2];R[A++]=P,R[A++]=L,R[A++]=L,R[A++]=B,R[A++]=B,R[A++]=P}}else{x=m.version;for(let b=0,v=0;b<M;b+=3){let A=b+0,P=b+1,L=b+2;R[v++]=A,R[v++]=P,R[v++]=P,R[v++]=L,R[v++]=L,R[v++]=A}}E.version=x;let S=r.get(p);S&&t.remove(S),r.set(p,E)}function d(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let g=s[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function ZM(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];e.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function JM(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ge("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function KM(n,t,e){let i=new WeakMap,s=new ln;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let A=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),g===!0&&(w=3);let E=a.attributes.position.count*w,R=1;E>t.maxTextureSize&&(R=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let S=new Float32Array(E*R*4*u),b=new Va(S,E,R,u);b.type=qi,b.needsUpdate=!0;let v=w*4;for(let P=0;P<u;P++){let L=m[P],B=x[P],V=M[P],I=E*R*4*P;for(let U=0;U<L.count;U++){let G=U*v;f===!0&&(s.fromBufferAttribute(L,U),S[I+G+0]=s.x,S[I+G+1]=s.y,S[I+G+2]=s.z,S[I+G+3]=0),p===!0&&(s.fromBufferAttribute(B,U),S[I+G+4]=s.x,S[I+G+5]=s.y,S[I+G+6]=s.z,S[I+G+7]=0),g===!0&&(s.fromBufferAttribute(V,U),S[I+G+8]=s.x,S[I+G+9]=s.y,S[I+G+10]=s.z,S[I+G+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new lt(E,R)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function QM(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var jM={[pl]:"LINEAR_TONE_MAPPING",[ml]:"REINHARD_TONE_MAPPING",[gl]:"CINEON_TONE_MAPPING",[qs]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[eo]:"NEUTRAL_TONE_MAPPING",[xl]:"CUSTOM_TONE_MAPPING"};function tv(n,t,e,i,s,r){let o=new bn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new je;h.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ce([0,2,0,0,2,0],2));let u=new Yo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new D(h,u),f=new jr(-1,1,1,-1,0,1),p=null,g=null,m=!1,x,M=null,w=[],E=!1;this.setSize=function(R,S){o.setSize(R,S),a!==null&&a.setSize(R,S),l!==null&&l.setSize(R,S);for(let b=0;b<w.length;b++){let v=w[b];v.setSize&&v.setSize(R,S)}},this.setEffects=function(R){w=R,E=w.length>0&&w[0].isRenderPass===!0;let S=o.width,b=o.height;w.length>0&&a===null&&(a=new bn(S,b,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new bn(S,b,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&w.some(A=>A.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new Ws(S,b),r===!0&&(c.format=$s,c.type=io)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let A=0;A<w.length;A++){let P=w[A];P.setSize&&P.setSize(S,b),v&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,S){if(m||R.toneMapping===Ms&&w.length===0)return!1;if(M=S,S!==null){let b=S.width,v=S.height;(o.width!==b||o.height!==v)&&this.setSize(b,v)}return E===!1&&R.setRenderTarget(o),x=R.toneMapping,R.toneMapping=Ms,!0},this.hasRenderPass=function(){return E},this.end=function(R,S){R.toneMapping=x,m=!0;let b=o,v=a;for(let A=0;A<w.length;A++){let P=w[A];P.enabled!==!1&&(P.render(R,v,b,S),P.needsSwap!==!1&&(b=v,v=v===a?l:a))}if(p!==R.outputColorSpace||g!==R.toneMapping){p=R.outputColorSpace,g=R.toneMapping,u.defines={},De.getTransfer(p)===Ge&&(u.defines.SRGB_TRANSFER="");let A=jM[g];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,R.setRenderTarget(M),R.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var eg=new hi,ng=new Ws(1,1),ig=new Ja(1),sg=new Va,rg=new ih,og=new Za,Nm=[],Um=[],Fm=new Float32Array(16),Bm=new Float32Array(9),Om=new Float32Array(4);function ia(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Nm[s];if(r===void 0&&(r=new Float32Array(s),Nm[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Dn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function pu(n,t){let e=Um[t];e===void 0&&(e=new Int32Array(t),Um[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ev(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function nv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;n.uniform2fv(this.addr,t),Nn(e,t)}}function iv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Dn(e,t))return;n.uniform3fv(this.addr,t),Nn(e,t)}}function sv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;n.uniform4fv(this.addr,t),Nn(e,t)}}function rv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Dn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Nn(e,t)}else{if(Dn(e,i))return;Om.set(i),n.uniformMatrix2fv(this.addr,!1,Om),Nn(e,i)}}function ov(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Dn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Nn(e,t)}else{if(Dn(e,i))return;Bm.set(i),n.uniformMatrix3fv(this.addr,!1,Bm),Nn(e,i)}}function av(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Dn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Nn(e,t)}else{if(Dn(e,i))return;Fm.set(i),n.uniformMatrix4fv(this.addr,!1,Fm),Nn(e,i)}}function lv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;n.uniform2iv(this.addr,t),Nn(e,t)}}function hv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dn(e,t))return;n.uniform3iv(this.addr,t),Nn(e,t)}}function uv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;n.uniform4iv(this.addr,t),Nn(e,t)}}function dv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;n.uniform2uiv(this.addr,t),Nn(e,t)}}function pv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dn(e,t))return;n.uniform3uiv(this.addr,t),Nn(e,t)}}function mv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;n.uniform4uiv(this.addr,t),Nn(e,t)}}function mu(n){return n.version===0&&(n.compareFunction=pf,n.needsUpdate=!0),n}function gv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=mu(ng):r=eg,e.setTexture2D(t||r,s)}function xv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||rg,s)}function yv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=mu(ig):r=og,e.setTextureCube(t||r,s)}function Mv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||sg,s)}function vv(n){switch(n){case 5126:return ev;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}function _v(n,t){n.uniform1fv(this.addr,t)}function bv(n,t){let e=ia(t,this.size,2);n.uniform2fv(this.addr,e)}function Ev(n,t){let e=ia(t,this.size,3);n.uniform3fv(this.addr,e)}function wv(n,t){let e=ia(t,this.size,4);n.uniform4fv(this.addr,e)}function Sv(n,t){let e=ia(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Tv(n,t){let e=ia(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Rv(n,t){let e=ia(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Av(n,t){n.uniform1iv(this.addr,t)}function Cv(n,t){n.uniform2iv(this.addr,t)}function Pv(n,t){n.uniform3iv(this.addr,t)}function Iv(n,t){n.uniform4iv(this.addr,t)}function Lv(n,t){n.uniform1uiv(this.addr,t)}function Dv(n,t){n.uniform2uiv(this.addr,t)}function Nv(n,t){n.uniform3uiv(this.addr,t)}function Uv(n,t){n.uniform4uiv(this.addr,t)}function Fv(n,t,e){let i=this.cache,s=t.length,r=pu(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=mu(ng):o=eg;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Bv(n,t,e){let i=this.cache,s=t.length,r=pu(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rg,r[o])}function Ov(n,t,e){let i=this.cache,s=t.length,r=pu(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=mu(ig):o=og;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Hv(n,t,e){let i=this.cache,s=t.length,r=pu(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sg,r[o])}function kv(n){switch(n){case 5126:return _v;case 35664:return bv;case 35665:return Ev;case 35666:return wv;case 35674:return Sv;case 35675:return Tv;case 35676:return Rv;case 5124:case 35670:return Av;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Dv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Hv}}var Cf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=vv(e.type)}},Pf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kv(e.type)}},If=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Rf=/(\w+)(\])?(\[|\.)?/g;function Hm(n,t){n.seq.push(t),n.map[t.id]=t}function Gv(n,t,e){let i=n.name,s=i.length;for(Rf.lastIndex=0;;){let r=Rf.exec(i),o=Rf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hm(e,c===void 0?new Cf(a,n,t):new Pf(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new If(a),Hm(e,u)),e=u}}}var ea=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Gv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function km(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var zv=37297,Vv=0;function Wv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Gm=new Me;function Xv(n){De._getMatrix(Gm,De.workingColorSpace,n);let t=`mat3( ${Gm.elements.map(e=>e.toFixed(4))} )`;switch(De.getTransfer(n)){case ka:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Wv(n.getShaderSource(t),a)}else return r}function qv(n,t){let e=Xv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Yv={[pl]:"Linear",[ml]:"Reinhard",[gl]:"Cineon",[qs]:"ACESFilmic",[yl]:"AgX",[eo]:"Neutral",[xl]:"Custom"};function $v(n,t){let e=Yv[t];return e===void 0?(me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fu=new F;function Zv(){De.getLuminanceCoefficients(fu);let n=fu.x.toFixed(4),t=fu.y.toFixed(4),e=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function Kv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Rl(n){return n!==""}function Vm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Wm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(n){return n.replace(jv,t_)}function t_(n,t){let e=Re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Lf(e)}var e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(n){return n.replace(e_,n_)}function n_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qm(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var i_={[yr]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function s_(n){return i_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r_={[Ko]:"ENVMAP_MODE_REFRACTION"};function o_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":r_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a_={[Sh]:"ENVMAP_BLENDING_MULTIPLY",[sm]:"ENVMAP_BLENDING_MIX",[rm]:"ENVMAP_BLENDING_ADD"};function l_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":a_[n.combine]||"ENVMAP_BLENDING_NONE"}function c_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=s_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=o_(e),u=l_(e),d=Jv(e),f=Kv(r),p=s.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Rl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Rl).join(`
`),m.length>0&&(m+=`
`)):(g=[qm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),m=[qm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ms?"#define TONE_MAPPING":"",e.toneMapping!==Ms?Re.tonemapping_pars_fragment:"",e.toneMapping!==Ms?$v("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,qv("linearToOutputTexel",e.outputColorSpace),Zv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rl).join(`
`)),o=Lf(o),o=Vm(o,e),o=Wm(o,e),a=Lf(a),a=Vm(a,e),a=Wm(a,e),o=Xm(o),a=Xm(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=x+g+o,w=x+m+a,E=km(s,s.VERTEX_SHADER,M),R=km(s,s.FRAGMENT_SHADER,w);s.attachShader(p,E),s.attachShader(p,R),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(P){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(p)||"",B=s.getShaderInfoLog(E)||"",V=s.getShaderInfoLog(R)||"",I=L.trim(),U=B.trim(),G=V.trim(),X=!0,j=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,E,R);else{let Y=zm(s,E,"vertex"),$=zm(s,R,"fragment");ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+Y+`
`+$)}else I!==""?me("WebGLProgram: Program Info Log:",I):(U===""||G==="")&&(j=!1);j&&(P.diagnostics={runnable:X,programLog:I,vertexShader:{log:U,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(E),s.deleteShader(R),b=new ea(s,p),v=Qv(s,p)}let b;this.getUniforms=function(){return b===void 0&&S(this),b};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(p,zv)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=R,this}var h_=0,Df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Nf(t),e.set(t,i)),i}},Nf=class{constructor(t){this.id=h_++,this.code=t,this.usedTimes=0}};function u_(n){return n===_r||n===wl||n===Sl}function d_(n,t,e,i,s,r){let o=new Wa,a=new Df,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,v,A,P,L,B){let V=P.fog,I=L.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,G=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,X=t.get(b.envMap||U,G),j=d[b.type],Y=i.precision;b.precision!==null&&(Y=i.getMaxPrecision(b.precision),Y!==b.precision&&me("WebGLProgram.getParameters:",b.precision,"not supported, using",Y,"instead."));let $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=$!==void 0?$.length:0,ft=0;I.morphAttributes.position!==void 0&&(ft=1),I.morphAttributes.normal!==void 0&&(ft=2),I.morphAttributes.color!==void 0&&(ft=3);let kt,it,Pt,zt;if(j){let Ht=_s[j];kt=Ht.vertexShader,it=Ht.fragmentShader}else{kt=b.vertexShader,it=b.fragmentShader;let Ht=a.getVertexShaderStage(b),$e=a.getFragmentShaderStage(b);a.update(b,Ht,$e),Pt=Ht.id,zt=$e.id}let ne=n.getRenderTarget(),Ft=n.state.buffers.depth.getReversed(),ie=L.isInstancedMesh===!0,nn=L.isBatchedMesh===!0,rt=!!b.map,Qt=!!b.matcap,ue=!!X,ht=ue&&X.isPMREMTexture===!0,bt=!!b.aoMap,wt=!!b.lightMap,Xt=!!b.bumpMap&&b.wireframe===!1,Bt=!!b.normalMap,Ee=!!b.displacementMap,ee=!!b.emissiveMap,Ne=!!b.metalnessMap,Ue=!!b.roughnessMap,ke=b.anisotropy>0,q=b.clearcoat>0,An=b.diffuseRoughness>0,Le=b.dispersion>0,Ke=b.retroreflectivity>0,Lt=b.iridescence>0,yn=b.sheen>0,de=b.transmission>0,ye=ke&&!!b.anisotropyMap,N=q&&!!b.clearcoatMap,T=q&&!!b.clearcoatNormalMap,K=q&&!!b.clearcoatRoughnessMap,yt=An&&!!b.diffuseRoughnessMap,dt=Lt&&!!b.iridescenceMap,St=Lt&&!!b.iridescenceThicknessMap,Dt=yn&&!!b.sheenColorMap,ot=yn&&!!b.sheenRoughnessMap,at=!!b.specularMap,Rt=!!b.specularColorMap,O=!!b.specularIntensityMap,ct=de&&!!b.transmissionMap,st=de&&!!b.thicknessMap,At=!!b.gradientMap,_t=!!b.alphaMap,Tt=b.alphaTest>0,se=!!b.alphaHash,Te=!!b.extensions,vt=Ms;b.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(vt=n.toneMapping);let le=ht?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,we={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:kt,fragmentShader:it,defines:b.defines,customVertexShaderID:Pt,customFragmentShaderID:zt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:Y,batching:nn,batchingColor:nn&&L._colorsTexture!==null,instancing:ie,instancingColor:ie&&L.instanceColor!==null,instancingMorph:ie&&L.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:rt,matcap:Qt,envMap:ue,envMapMode:ue&&X.mapping,envMapPMREM:ht,envMapMaxLod:ht?le.length-1:null,envMapSize:ht?le[0].width:null,aoMap:bt,lightMap:wt,bumpMap:Xt,normalMap:Bt,displacementMap:Ee,emissiveMap:ee,normalMapObjectSpace:Bt&&b.normalMapType===lm,normalMapTangentSpace:Bt&&b.normalMapType===ta,packedNormalMap:Bt&&b.normalMapType===ta&&u_(b.normalMap.format),metalnessMap:Ne,roughnessMap:Ue,anisotropy:ke,anisotropyMap:ye,clearcoat:q,clearcoatMap:N,clearcoatNormalMap:T,clearcoatRoughnessMap:K,diffuseRoughness:An,diffuseRoughnessMap:yt,dispersion:Le,retroreflection:Ke,iridescence:Lt,iridescenceMap:dt,iridescenceThicknessMap:St,sheen:yn,sheenColorMap:Dt,sheenRoughnessMap:ot,specularMap:at,specularColorMap:Rt,specularIntensityMap:O,transmission:de,transmissionMap:ct,thicknessMap:st,gradientMap:At,opaque:b.transparent===!1&&b.blending===vr&&b.alphaToCoverage===!1,alphaMap:_t,alphaTest:Tt,alphaHash:se,combine:b.combine,mapUv:rt&&f(b.map.channel),aoMapUv:bt&&f(b.aoMap.channel),lightMapUv:wt&&f(b.lightMap.channel),bumpMapUv:Xt&&f(b.bumpMap.channel),normalMapUv:Bt&&f(b.normalMap.channel),displacementMapUv:Ee&&f(b.displacementMap.channel),emissiveMapUv:ee&&f(b.emissiveMap.channel),metalnessMapUv:Ne&&f(b.metalnessMap.channel),roughnessMapUv:Ue&&f(b.roughnessMap.channel),anisotropyMapUv:ye&&f(b.anisotropyMap.channel),clearcoatMapUv:N&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&f(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:yt&&f(b.diffuseRoughnessMap.channel),iridescenceMapUv:dt&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:St&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:ot&&f(b.sheenRoughnessMap.channel),specularMapUv:at&&f(b.specularMap.channel),specularColorMapUv:Rt&&f(b.specularColorMap.channel),specularIntensityMapUv:O&&f(b.specularIntensityMap.channel),transmissionMapUv:ct&&f(b.transmissionMap.channel),thicknessMapUv:st&&f(b.thicknessMap.channel),alphaMapUv:_t&&f(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Bt||ke),vertexNormals:!!I.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(rt||_t),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||I.attributes.normal===void 0&&Bt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ft,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ft,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:B.filter(Ht=>Ht.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:rt&&b.map.isVideoTexture===!0&&De.getTransfer(b.map.colorSpace)===Ge,decodeVideoTextureEmissive:ee&&b.emissiveMap.isVideoTexture===!0&&De.getTransfer(b.emissiveMap.colorSpace)===Ge,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===hn,flipSided:b.side===En,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Te&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&b.extensions.multiDraw===!0||nn)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)v.push(A),v.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(m(v,b),x(v,b),v.push(n.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function m(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapPMREM),b.push(v.envMapMaxLod),b.push(v.envMapSize),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.diffuseRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.numSunLights),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numSunLightShadows),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.numLightProbeGrids),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function x(b,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function M(b){let v=d[b.type],A;if(v){let P=_s[v];A=Ni.clone(P.uniforms)}else A=b.uniforms;return A}function w(b,v){let A=h.get(v);return A!==void 0?++A.usedTimes:(A=new c_(n,v,b,s),c.push(A),h.set(v,A)),A}function E(b){if(--b.usedTimes===0){let v=c.indexOf(b);c[v]=c[c.length-1],c.pop(),h.delete(b.cacheKey),b.destroy()}}function R(b){a.remove(b)}function S(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:M,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:S}}function f_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function p_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ym(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $m(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,g,m,x){let M=n[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:x},n[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=o(d),M.groupOrder=g,M.renderOrder=d.renderOrder,M.z=m,M.group=x),t++,M}function l(d,f,p,g,m,x,M){M.reversedDepth===!0&&(m=-m);let w=a(d,f,p,g,m,x);p.transmission>0?i.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(d,f,p,g,m,x){let M=a(d,f,p,g,m,x);p.transmission>0?i.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||p_),i.length>1&&i.sort(f||Ym),s.length>1&&s.sort(f||Ym)}function u(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function m_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new $m,n.set(i,[o])):s>=r.length?(o=new $m,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function g_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new qt};break;case"SpotLight":e={position:new F,direction:new F,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function x_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var y_=0;function M_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function v_(n){let t=new g_,e=x_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new $t,o=new $t;function a(c){let h=0,u=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,p=0,g=0,m=0,x=0,M=0,w=0,E=0,R=0,S=0,b=0,v=0,A=0,P=0;c.sort(M_);for(let B=0,V=c.length;B<V;B++){let I=c[B],U=I.color,G=I.intensity,X=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===_r?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*G,u+=U.g*G,d+=U.b*G;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],G);P++}else if(I.isSunLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,Z=e.get(I);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[p]=Z,i.sunShadowMap[p]=j;let ft=$.getViewportCount();for(let kt=0;kt<ft;kt++)i.sunShadowMatrix[g+kt]=$.getMatrix(kt),i.sunShadowCascade[g+kt]=$._cascadeData[kt];g+=ft,p++}i.sun[f]=Y,f++}else if(I.isDirectionalLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,Z=e.get(I);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=I.shadow.matrix,R++}i.directional[m]=Y,m++}else if(I.isSpotLight){let Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(U).multiplyScalar(G),Y.distance=X,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[M]=Y;let $=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,$.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[M]=$.matrix,I.castShadow){let Z=e.get(I);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,i.spotShadow[M]=Z,i.spotShadowMap[M]=j,b++}M++}else if(I.isRectAreaLight){let Y=t.get(I);Y.color.copy(U).multiplyScalar(G),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=Y,w++}else if(I.isPointLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let $=I.shadow,Z=e.get(I);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,i.pointShadow[x]=Z,i.pointShadowMap[x]=j,i.pointShadowMatrix[x]=I.shadow.matrix,S++}i.point[x]=Y,x++}else if(I.isHemisphereLight){let Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(G),Y.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[E]=Y,E++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ot.LTC_FLOAT_1,i.rectAreaLTC2=Ot.LTC_FLOAT_2):(i.rectAreaLTC1=Ot.LTC_HALF_1,i.rectAreaLTC2=Ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==x||L.spotLength!==M||L.rectAreaLength!==w||L.hemiLength!==E||L.numSunShadows!==p||L.numDirectionalShadows!==R||L.numPointShadows!==S||L.numSpotShadows!==b||L.numSpotMaps!==v||L.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=x,i.hemi.length=E,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+v-A,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,L.sunLength=f,L.directionalLength=m,L.pointLength=x,L.spotLength=M,L.rectAreaLength=w,L.hemiLength=E,L.numSunShadows=p,L.numDirectionalShadows=R,L.numPointShadows=S,L.numSpotShadows=b,L.numSpotMaps=v,L.numLightProbes=P,i.version=y_++)}function l(c,h){let u=0,d=0,f=0,p=0,g=0,m=0,x=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let E=c[M];if(E.isSunLight){let R=i.sun[u];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(x),u++}else if(E.isDirectionalLight){let R=i.directional[d];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),d++}else if(E.isSpotLight){let R=i.spot[p];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),p++}else if(E.isRectAreaLight){let R=i.rectArea[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let R=i.point[f];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function Zm(n){let t=new v_(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){i.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function __(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Zm(n),t.set(s,[a])):r>=o.length?(a=new Zm(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`,w_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],S_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Jm=new $t,Tl=new F,Af=new F;function T_(n,t,e){let i=new dr,s=new lt,r=new lt,o=new ln,a=new $o,l=new dh,c={},h=e.maxTextureSize,u={[ys]:En,[En]:ys,[hn]:hn},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:b_,fragmentShader:E_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new je;p.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new D(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yr;let x=this.type;this.render=function(S,b,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===fl&&(me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yr);let A=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ns),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=x!==this.type;V&&b.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=S.length;I<U;I++){let G=S[I],X=G.shadow;if(X===void 0){me("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let j=X.getFrameExtents();s.multiply(j),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,X.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Mr){if(G.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new bn(s.x,s.y,{format:_r,type:Ln,minFilter:ci,magFilter:ci,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new Ws(s.x,s.y,qi),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=zs,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=gn,X.map.depthTexture.magFilter=gn}else G.isPointLight?(X.map=new Al(s.x),X.map.depthTexture=new Ja(s.x,is)):(X.map=new bn(s.x,s.y),X.map.depthTexture=new Ws(s.x,s.y,is)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=zs,this.type===yr?(X.map.depthTexture.compareFunction=Y?ff:df,X.map.depthTexture.minFilter=ci,X.map.depthTexture.magFilter=ci):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=gn,X.map.depthTexture.magFilter=gn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let $=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();G.isPointLight!==!0&&X.updateMatrices(G,v);let Z=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:v.layers;for(let ft=0;ft<$;ft++){let kt=X.getCamera(ft);if(G.isPointLight){let it=X.camera,Pt=X.matrix,zt=G.distance||it.far;zt!==it.far&&(it.far=zt,it.updateProjectionMatrix()),Tl.setFromMatrixPosition(G.matrixWorld),it.position.copy(Tl),Af.copy(it.position),Af.add(w_[ft]),it.up.copy(S_[ft]),it.lookAt(Af),it.updateMatrixWorld(),Pt.makeTranslation(-Tl.x,-Tl.y,-Tl.z),Jm.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Jm,it.coordinateSystem,it.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,ft),n.clear();else{ft===0&&(n.setRenderTarget(X.map),n.clear());let it=X.getViewport(ft);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),B.viewport(o)}i=X.getFrustum(ft),E(b,v,kt,G,Z,this.type)}X.isPointLightShadow!==!0&&this.type===Mr&&M(X,v),X.needsUpdate=!1}x=this.type,m.needsUpdate=!1,n.setRenderTarget(A,P,L)};function M(S,b){let v=t.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new bn(s.x,s.y,{format:_r,type:Ln}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(b,null,v,d,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(b,null,v,f,g,null)}function w(S,b,v,A){let P=null,L=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)P=L;else if(P=v.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let B=P.uuid,V=b.uuid,I=c[B];I===void 0&&(I={},c[B]=I);let U=I[V];U===void 0&&(U=P.clone(),I[V]=U,b.addEventListener("dispose",R)),P=U}if(P.visible=b.visible,P.wireframe=b.wireframe,A===Mr?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:u[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let B=n.properties.get(P);B.light=v}return P}function E(S,b,v,A,P,L){if(S.visible===!1)return;if(S.layers.test(P)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Mr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let I=t.update(S),U=S.material;if(Array.isArray(U)){let G=I.groups;for(let X=0,j=G.length;X<j;X++){let Y=G[X],$=U[Y.materialIndex];if($&&$.visible){let Z=w(S,$,A,L);S.onBeforeShadow(n,S,b,v,I,Z,Y),n.renderBufferDirect(v,null,I,Z,S,Y),S.onAfterShadow(n,S,b,v,I,Z,Y)}}}else if(U.visible){let G=w(S,U,A,L);S.onBeforeShadow(n,S,b,v,I,G,null),n.renderBufferDirect(v,null,I,G,S,null),S.onAfterShadow(n,S,b,v,I,G,null)}}let V=S.children;for(let I=0,U=V.length;I<U;I++)E(V[I],b,v,A,P,L)}function R(S){S.target.removeEventListener("dispose",R);for(let v in c){let A=c[v],P=S.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function R_(n,t){function e(){let O=!1,ct=new ln,st=null,At=new ln(0,0,0,0);return{setMask:function(_t){st!==_t&&!O&&(n.colorMask(_t,_t,_t,_t),st=_t)},setLocked:function(_t){O=_t},setClear:function(_t,Tt,se,Te,vt){vt===!0&&(_t*=Te,Tt*=Te,se*=Te),ct.set(_t,Tt,se,Te),At.equals(ct)===!1&&(n.clearColor(_t,Tt,se,Te),At.copy(ct))},reset:function(){O=!1,st=null,At.set(-1,0,0,0)}}}function i(){let O=!1,ct=!1,st=null,At=null,_t=null;return{setReversed:function(Tt){if(ct!==Tt){let se=t.get("EXT_clip_control");Tt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),ct=Tt;let Te=_t;_t=null,this.setClear(Te)}},getReversed:function(){return ct},setTest:function(Tt){Tt?Ft(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(Tt){st!==Tt&&!O&&(n.depthMask(Tt),st=Tt)},setFunc:function(Tt){if(ct&&(Tt=ym[Tt]),At!==Tt){switch(Tt){case Xc:n.depthFunc(n.NEVER);break;case qc:n.depthFunc(n.ALWAYS);break;case Yc:n.depthFunc(n.LESS);break;case Bo:n.depthFunc(n.LEQUAL);break;case $c:n.depthFunc(n.EQUAL);break;case Zc:n.depthFunc(n.GEQUAL);break;case Jc:n.depthFunc(n.GREATER);break;case Kc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}At=Tt}},setLocked:function(Tt){O=Tt},setClear:function(Tt){_t!==Tt&&(_t=Tt,ct&&(Tt=1-Tt),n.clearDepth(Tt))},reset:function(){O=!1,st=null,At=null,_t=null,ct=!1}}}function s(){let O=!1,ct=null,st=null,At=null,_t=null,Tt=null,se=null,Te=null,vt=null;return{setTest:function(le){O||(le?Ft(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(le){ct!==le&&!O&&(n.stencilMask(le),ct=le)},setFunc:function(le,we,Ht){(st!==le||At!==we||_t!==Ht)&&(n.stencilFunc(le,we,Ht),st=le,At=we,_t=Ht)},setOp:function(le,we,Ht){(Tt!==le||se!==we||Te!==Ht)&&(n.stencilOp(le,we,Ht),Tt=le,se=we,Te=Ht)},setLocked:function(le){O=le},setClear:function(le){vt!==le&&(n.clearStencil(le),vt=le)},reset:function(){O=!1,ct=null,st=null,At=null,_t=null,Tt=null,se=null,Te=null,vt=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],g=null,m=!1,x=null,M=null,w=null,E=null,R=null,S=null,b=null,v=new qt(0,0,0),A=0,P=!1,L=null,B=null,V=null,I=null,U=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=j>=2);let $=null,Z={},ft=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),it=new ln().fromArray(ft),Pt=new ln().fromArray(kt);function zt(O,ct,st,At){let _t=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(O,Tt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<st;se++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(ct+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return Tt}let ne={};ne[n.TEXTURE_2D]=zt(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=zt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=zt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=zt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ft(n.DEPTH_TEST),o.setFunc(Bo),Xt(!1),Bt(Qd),Ft(n.CULL_FACE),bt(ns);function Ft(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function ie(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function nn(O,ct){return d[O]!==ct?(n.bindFramebuffer(O,ct),d[O]=ct,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ct),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function rt(O,ct){let st=p,At=!1;if(O){st=f.get(ct),st===void 0&&(st=[],f.set(ct,st));let _t=O.textures;if(st.length!==_t.length||st[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,se=_t.length;Tt<se;Tt++)st[Tt]=n.COLOR_ATTACHMENT0+Tt;st.length=_t.length,At=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,At=!0);At&&n.drawBuffers(st)}function Qt(O){return g!==O?(n.useProgram(O),g=O,!0):!1}let ue={[to]:n.FUNC_ADD,[Gp]:n.FUNC_SUBTRACT,[zp]:n.FUNC_REVERSE_SUBTRACT};ue[Vp]=n.MIN,ue[Wp]=n.MAX;let ht={[Xp]:n.ZERO,[qp]:n.ONE,[Yp]:n.SRC_COLOR,[ef]:n.SRC_ALPHA,[jp]:n.SRC_ALPHA_SATURATE,[Kp]:n.DST_COLOR,[Zp]:n.DST_ALPHA,[$p]:n.ONE_MINUS_SRC_COLOR,[nf]:n.ONE_MINUS_SRC_ALPHA,[Qp]:n.ONE_MINUS_DST_COLOR,[Jp]:n.ONE_MINUS_DST_ALPHA,[tm]:n.CONSTANT_COLOR,[em]:n.ONE_MINUS_CONSTANT_COLOR,[nm]:n.CONSTANT_ALPHA,[im]:n.ONE_MINUS_CONSTANT_ALPHA};function bt(O,ct,st,At,_t,Tt,se,Te,vt,le){if(O===ns){m===!0&&(ie(n.BLEND),m=!1);return}if(m===!1&&(Ft(n.BLEND),m=!0),O!==kp){if(O!==x||le!==P){if((M!==to||R!==to)&&(n.blendEquation(n.FUNC_ADD),M=to,R=to),le)switch(O){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xs:n.blendFunc(n.ONE,n.ONE);break;case jd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ge("WebGLState: Invalid blending: ",O);break}else switch(O){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jd:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tf:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",O);break}w=null,E=null,S=null,b=null,v.set(0,0,0),A=0,x=O,P=le}return}_t=_t||ct,Tt=Tt||st,se=se||At,(ct!==M||_t!==R)&&(n.blendEquationSeparate(ue[ct],ue[_t]),M=ct,R=_t),(st!==w||At!==E||Tt!==S||se!==b)&&(n.blendFuncSeparate(ht[st],ht[At],ht[Tt],ht[se]),w=st,E=At,S=Tt,b=se),(Te.equals(v)===!1||vt!==A)&&(n.blendColor(Te.r,Te.g,Te.b,vt),v.copy(Te),A=vt),x=O,P=!1}function wt(O,ct){O.side===hn?ie(n.CULL_FACE):Ft(n.CULL_FACE);let st=O.side===En;ct&&(st=!st),Xt(st),O.blending===vr&&O.transparent===!1?bt(ns):bt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let At=O.stencilWrite;a.setTest(At),At&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ft(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function Bt(O){O!==Op?(Ft(n.CULL_FACE),O!==B&&(O===Qd?n.cullFace(n.BACK):O===Hp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),B=O}function Ee(O){O!==V&&(X&&n.lineWidth(O),V=O)}function ee(O,ct,st){O?(Ft(n.POLYGON_OFFSET_FILL),(I!==ct||U!==st)&&(I=ct,U=st,o.getReversed()&&(ct=-ct,st=-st),n.polygonOffset(ct,st))):ie(n.POLYGON_OFFSET_FILL)}function Ne(O){O?Ft(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function Ue(O){O===void 0&&(O=n.TEXTURE0+G-1),$!==O&&(n.activeTexture(O),$=O)}function ke(O,ct,st){st===void 0&&($===null?st=n.TEXTURE0+G-1:st=$);let At=Z[st];At===void 0&&(At={type:void 0,texture:void 0},Z[st]=At),(At.type!==O||At.texture!==ct)&&($!==st&&(n.activeTexture(st),$=st),n.bindTexture(O,ct||ne[O]),At.type=O,At.texture=ct)}function q(){let O=Z[$];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function An(){try{n.compressedTexImage2D(...arguments)}catch(O){ge("WebGLState:",O)}}function Le(){try{n.compressedTexImage3D(...arguments)}catch(O){ge("WebGLState:",O)}}function Ke(){try{n.texSubImage2D(...arguments)}catch(O){ge("WebGLState:",O)}}function Lt(){try{n.texSubImage3D(...arguments)}catch(O){ge("WebGLState:",O)}}function yn(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ge("WebGLState:",O)}}function de(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ge("WebGLState:",O)}}function ye(){try{n.texStorage2D(...arguments)}catch(O){ge("WebGLState:",O)}}function N(){try{n.texStorage3D(...arguments)}catch(O){ge("WebGLState:",O)}}function T(){try{n.texImage2D(...arguments)}catch(O){ge("WebGLState:",O)}}function K(){try{n.texImage3D(...arguments)}catch(O){ge("WebGLState:",O)}}function yt(O){return u[O]!==void 0?u[O]:n.getParameter(O)}function dt(O,ct){u[O]!==ct&&(n.pixelStorei(O,ct),u[O]=ct)}function St(O){it.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),it.copy(O))}function Dt(O){Pt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Pt.copy(O))}function ot(O,ct){let st=c.get(ct);st===void 0&&(st=new WeakMap,c.set(ct,st));let At=st.get(O);At===void 0&&(At=n.getUniformBlockIndex(ct,O.name),n.uniformBlockBinding(ct,At,At),st.set(O,At))}function at(O,ct,st){let _t=c.get(ct).get(O);l[_t]!==st&&(n.bindBufferBase(n.UNIFORM_BUFFER,_t,st),l[_t]=st)}function Rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,Z={},d={},l={},f=new WeakMap,p=[],g=null,m=!1,x=null,M=null,w=null,E=null,R=null,S=null,b=null,v=new qt(0,0,0),A=0,P=!1,L=null,B=null,V=null,I=null,U=null,it.set(0,0,n.canvas.width,n.canvas.height),Pt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ft,disable:ie,bindFramebuffer:nn,drawBuffers:rt,useProgram:Qt,setBlending:bt,setMaterial:wt,setFlipSided:Xt,setCullFace:Bt,setLineWidth:Ee,setPolygonOffset:ee,setScissorTest:Ne,activeTexture:Ue,bindTexture:ke,unbindTexture:q,compressedTexImage2D:An,compressedTexImage3D:Le,texImage2D:T,texImage3D:K,pixelStorei:dt,getParameter:yt,updateUBOMapping:ot,uniformBlockBinding:at,texStorage2D:ye,texStorage3D:N,texSubImage2D:Ke,texSubImage3D:Lt,compressedTexSubImage2D:yn,compressedTexSubImage3D:de,scissor:St,viewport:Dt,reset:Rt}}function A_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,g=new FinalizationRegistry(N=>p.delete(N)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,T){return m?new OffscreenCanvas(N,T):Ga("canvas")}function M(N,T,K){let yt=1,dt=ye(N);if((dt.width>K||dt.height>K)&&(yt=K/Math.max(dt.width,dt.height)),yt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let St=Math.floor(yt*dt.width),Dt=Math.floor(yt*dt.height);d===void 0&&(d=x(St,Dt));let ot=T?x(St,Dt):d;return ot.width=St,ot.height=Dt,ot.getContext("2d").drawImage(N,0,0,St,Dt),me("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+St+"x"+Dt+")."),ot}else return"data"in N&&me("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),N;return N}function w(N){return N.generateMipmaps}function E(N){n.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(N,T,K,yt,dt,St=!1){if(N!==null){if(n[N]!==void 0)return n[N];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Dt;yt&&(Dt=t.get("EXT_texture_norm16"),Dt||me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=T;if(T===n.RED&&(K===n.FLOAT&&(ot=n.R32F),K===n.HALF_FLOAT&&(ot=n.R16F),K===n.UNSIGNED_BYTE&&(ot=n.R8),K===n.UNSIGNED_SHORT&&Dt&&(ot=Dt.R16_EXT),K===n.SHORT&&Dt&&(ot=Dt.R16_SNORM_EXT)),T===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(ot=n.R8UI),K===n.UNSIGNED_SHORT&&(ot=n.R16UI),K===n.UNSIGNED_INT&&(ot=n.R32UI),K===n.BYTE&&(ot=n.R8I),K===n.SHORT&&(ot=n.R16I),K===n.INT&&(ot=n.R32I)),T===n.RG&&(K===n.FLOAT&&(ot=n.RG32F),K===n.HALF_FLOAT&&(ot=n.RG16F),K===n.UNSIGNED_BYTE&&(ot=n.RG8),K===n.UNSIGNED_SHORT&&Dt&&(ot=Dt.RG16_EXT),K===n.SHORT&&Dt&&(ot=Dt.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(ot=n.RG8UI),K===n.UNSIGNED_SHORT&&(ot=n.RG16UI),K===n.UNSIGNED_INT&&(ot=n.RG32UI),K===n.BYTE&&(ot=n.RG8I),K===n.SHORT&&(ot=n.RG16I),K===n.INT&&(ot=n.RG32I)),T===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),K===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),K===n.UNSIGNED_INT&&(ot=n.RGB32UI),K===n.BYTE&&(ot=n.RGB8I),K===n.SHORT&&(ot=n.RGB16I),K===n.INT&&(ot=n.RGB32I)),T===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),K===n.UNSIGNED_INT&&(ot=n.RGBA32UI),K===n.BYTE&&(ot=n.RGBA8I),K===n.SHORT&&(ot=n.RGBA16I),K===n.INT&&(ot=n.RGBA32I)),T===n.RGB&&(K===n.UNSIGNED_SHORT&&Dt&&(ot=Dt.RGB16_EXT),K===n.SHORT&&Dt&&(ot=Dt.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(ot=n.R11F_G11F_B10F)),T===n.RGBA){let at=St?ka:De.getTransfer(dt);K===n.FLOAT&&(ot=n.RGBA32F),K===n.HALF_FLOAT&&(ot=n.RGBA16F),K===n.UNSIGNED_BYTE&&(ot=at===Ge?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&Dt&&(ot=Dt.RGBA16_EXT),K===n.SHORT&&Dt&&(ot=Dt.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function b(N,T){let K;return N?T===null||T===is||T===io?K=n.DEPTH24_STENCIL8:T===qi?K=n.DEPTH32F_STENCIL8:T===Qo&&(K=n.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===is||T===io?K=n.DEPTH_COMPONENT24:T===qi?K=n.DEPTH_COMPONENT32F:T===Qo&&(K=n.DEPTH_COMPONENT16),K}function v(N,T){return w(N)===!0||N.isFramebufferTexture&&N.minFilter!==gn&&N.minFilter!==ci?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function A(N){let T=new WeakRef(N);i.get(N).__ref=T,p.add(T),g.register(N,T,T)}function P(N){let T=i.get(N).__ref;T!==void 0&&(p.delete(T),g.unregister(T))}function L(N){V(N.target)}function B(N){I(N.target)}function V(N){N.removeEventListener("dispose",L),P(N),G(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&u.delete(N)}function I(N){N.removeEventListener("dispose",B),P(N),j(N)}function U(){for(let N of p){let T=N.deref();T!==void 0&&(T.isRenderTarget===!0?I(T):V(T))}p.clear(),u.clear()}function G(N){let T=i.get(N);if(T.__webglInit===void 0)return;let K=N.source,yt=f.get(K);if(yt){let dt=yt[T.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&X(N),Object.keys(yt).length===0&&f.delete(K)}i.remove(N)}function X(N){let T=i.get(N);n.deleteTexture(T.__webglTexture);let K=N.source,yt=f.get(K);delete yt[T.__cacheKey],o.memory.textures--}function j(N){let T=i.get(N);T.__depthDisposeCallback&&T.__depthDisposeCallback();let K=N.depthTexture;if(K&&K.renderTarget===N&&V(K),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let St=0;St<T.__webglFramebuffer[dt].length;St++)n.deleteFramebuffer(T.__webglFramebuffer[dt][St]);else n.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)n.deleteFramebuffer(T.__webglFramebuffer[dt]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let yt=N.textures;for(let dt=0,St=yt.length;dt<St;dt++){let Dt=i.get(yt[dt]);Dt.__webglTexture&&(n.deleteTexture(Dt.__webglTexture),o.memory.textures--),i.remove(yt[dt])}i.remove(N)}let Y=0;function $(){Y=0}function Z(){return Y}function ft(N){Y=N}function kt(){let N=Y;return N>=s.maxTextures&&me("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,N}function it(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.mipmapsAutoUpdate),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function Pt(N,T){let K=i.get(N);if(N.isVideoTexture&&yn(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&K.__version!==N.version){let yt=N.image;if(yt===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(K,N,T);return}}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+T)}function zt(N,T){let K=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){wt(K,N,T);return}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+T)}function ne(N,T){let K=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){wt(K,N,T);return}e.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+T)}function Ft(N,T){let K=i.get(N);if(N.version>0&&K.__version!==N.version){Xt(K,N,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+T)}let ie={[ps]:n.REPEAT,[ds]:n.CLAMP_TO_EDGE,[Qc]:n.MIRRORED_REPEAT},nn={[gn]:n.NEAREST,[om]:n.NEAREST_MIPMAP_NEAREST,[Ml]:n.NEAREST_MIPMAP_LINEAR,[ci]:n.LINEAR,[Ah]:n.LINEAR_MIPMAP_NEAREST,[Ys]:n.LINEAR_MIPMAP_LINEAR},rt={[hm]:n.NEVER,[pf]:n.ALWAYS,[um]:n.LESS,[df]:n.LEQUAL,[dm]:n.EQUAL,[ff]:n.GEQUAL,[fm]:n.GREATER,[pm]:n.NOTEQUAL};function Qt(N,T){if(T.type===qi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ci||T.magFilter===Ah||T.magFilter===Ml||T.magFilter===Ys||T.minFilter===ci||T.minFilter===Ah||T.minFilter===Ml||T.minFilter===Ys)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,ie[T.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,ie[T.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,ie[T.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,nn[T.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,nn[T.minFilter]),T.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,rt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===gn||T.minFilter!==Ml&&T.minFilter!==Ys||T.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ue(N,T){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",L),A(T));let yt=T.source,dt=f.get(yt);dt===void 0&&(dt={},f.set(yt,dt));let St=it(T);if(St!==N.__cacheKey){dt[St]===void 0&&(dt[St]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,K=!0),dt[St].usedTimes++;let Dt=dt[N.__cacheKey];Dt!==void 0&&(dt[N.__cacheKey].usedTimes--,Dt.usedTimes===0&&X(T)),N.__cacheKey=St,N.__webglTexture=dt[St].texture}return K}function ht(N,T,K){return Math.floor(Math.floor(N/K)/T)}function bt(N,T,K,yt){let St=N.updateRanges;if(St.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,K,yt,T.data);else{St.sort((O,ct)=>O.start-ct.start);let Dt=0;for(let O=1;O<St.length;O++){let ct=St[Dt],st=St[O],At=ct.start+ct.count,_t=ht(st.start,T.width,4),Tt=ht(ct.start,T.width,4);st.start<=At+1&&_t===Tt&&ht(st.start+st.count-1,T.width,4)===_t?ct.count=Math.max(ct.count,st.start+st.count-ct.start):(++Dt,St[Dt]=st)}St.length=Dt+1;let ot=e.getParameter(n.UNPACK_ROW_LENGTH),at=e.getParameter(n.UNPACK_SKIP_PIXELS),Rt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let O=0,ct=St.length;O<ct;O++){let st=St[O],At=Math.floor(st.start/4),_t=Math.ceil(st.count/4),Tt=At%T.width,se=Math.floor(At/T.width),Te=_t,vt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,se),e.texSubImage2D(n.TEXTURE_2D,0,Tt,se,Te,vt,K,yt,T.data)}N.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ot),e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,Rt)}}function wt(N,T,K){let yt=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(yt=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(yt=n.TEXTURE_3D);let dt=ue(N,T),St=T.source;e.bindTexture(yt,N.__webglTexture,n.TEXTURE0+K);let Dt=i.get(St);if(St.version!==Dt.__version||dt===!0){if(e.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let vt=De.getPrimaries(De.workingColorSpace),le=T.colorSpace===Zs?null:De.getPrimaries(T.colorSpace),we=T.colorSpace===Zs||vt===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let at=M(T.image,!1,s.maxTextureSize);at=de(T,at);let Rt=r.convert(T.format,T.colorSpace),O=r.convert(T.type),ct=S(T.internalFormat,Rt,O,T.normalized,T.colorSpace,T.isVideoTexture);Qt(yt,T);let st,At=T.mipmaps,_t=T.isVideoTexture!==!0,Tt=Dt.__version===void 0||dt===!0,se=St.dataReady,Te=v(T,at);if(T.isDepthTexture)ct=b(T.format===$s,T.type),Tt&&(_t?e.texStorage2D(n.TEXTURE_2D,1,ct,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,ct,at.width,at.height,0,Rt,O,null));else if(T.isDataTexture)if(At.length>0){_t&&Tt&&e.texStorage2D(n.TEXTURE_2D,Te,ct,At[0].width,At[0].height);for(let vt=0,le=At.length;vt<le;vt++)st=At[vt],_t?se&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,st.width,st.height,Rt,O,st.data):e.texImage2D(n.TEXTURE_2D,vt,ct,st.width,st.height,0,Rt,O,st.data);T.generateMipmaps=!1}else _t?(Tt&&e.texStorage2D(n.TEXTURE_2D,Te,ct,at.width,at.height),se&&bt(T,at,Rt,O)):e.texImage2D(n.TEXTURE_2D,0,ct,at.width,at.height,0,Rt,O,at.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){_t&&Tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ct,At[0].width,At[0].height,at.depth);for(let vt=0,le=At.length;vt<le;vt++)if(st=At[vt],T.format!==ss)if(Rt!==null)if(_t){if(se)if(T.layerUpdates.size>0){let we=_f(st.width,st.height,T.format,T.type);for(let Ht of T.layerUpdates){let $e=st.data.subarray(Ht*we/st.data.BYTES_PER_ELEMENT,(Ht+1)*we/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,Ht,st.width,st.height,1,Rt,$e)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,st.width,st.height,at.depth,Rt,st.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,vt,ct,st.width,st.height,at.depth,0,st.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?se&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,st.width,st.height,at.depth,Rt,O,st.data):e.texImage3D(n.TEXTURE_2D_ARRAY,vt,ct,st.width,st.height,at.depth,0,Rt,O,st.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{_t&&Tt&&e.texStorage2D(n.TEXTURE_2D,Te,ct,At[0].width,At[0].height);for(let vt=0,le=At.length;vt<le;vt++)st=At[vt],T.format!==ss?Rt!==null?_t?se&&e.compressedTexSubImage2D(n.TEXTURE_2D,vt,0,0,st.width,st.height,Rt,st.data):e.compressedTexImage2D(n.TEXTURE_2D,vt,ct,st.width,st.height,0,st.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?se&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,st.width,st.height,Rt,O,st.data):e.texImage2D(n.TEXTURE_2D,vt,ct,st.width,st.height,0,Rt,O,st.data)}else if(T.isDataArrayTexture)if(_t){if(Tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ct,at.width,at.height,at.depth),se)if(T.layerUpdates.size>0){let vt=_f(at.width,at.height,T.format,T.type);for(let le of T.layerUpdates){let we=at.data.subarray(le*vt/at.data.BYTES_PER_ELEMENT,(le+1)*vt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,at.width,at.height,1,Rt,O,we)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Rt,O,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ct,at.width,at.height,at.depth,0,Rt,O,at.data);else if(T.isData3DTexture)_t?(Tt&&e.texStorage3D(n.TEXTURE_3D,Te,ct,at.width,at.height,at.depth),se&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Rt,O,at.data)):e.texImage3D(n.TEXTURE_3D,0,ct,at.width,at.height,at.depth,0,Rt,O,at.data);else if(T.isFramebufferTexture){if(Tt)if(_t)e.texStorage2D(n.TEXTURE_2D,Te,ct,at.width,at.height);else{let vt=at.width,le=at.height;for(let we=0;we<Te;we++)e.texImage2D(n.TEXTURE_2D,we,ct,vt,le,0,Rt,O,null),vt>>=1,le>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let vt=n.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),at.parentNode!==vt){vt.appendChild(at),u.add(T),vt.onpaint=le=>{let we=le.changedElements;for(let Ht of u)we.includes(Ht.image)&&(Ht.needsUpdate=!0)},vt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,at);else{let we=n.RGBA,Ht=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,we,Ht,$e,at)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(At.length>0){if(_t&&Tt){let vt=ye(At[0]);e.texStorage2D(n.TEXTURE_2D,Te,ct,vt.width,vt.height)}for(let vt=0,le=At.length;vt<le;vt++)st=At[vt],_t?se&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,Rt,O,st):e.texImage2D(n.TEXTURE_2D,vt,ct,Rt,O,st);T.generateMipmaps=!1}else if(_t){if(Tt){let vt=ye(at);e.texStorage2D(n.TEXTURE_2D,Te,ct,vt.width,vt.height)}se&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Rt,O,at)}else e.texImage2D(n.TEXTURE_2D,0,ct,Rt,O,at);w(T)&&T.mipmapsAutoUpdate===!0&&E(yt),Dt.__version=St.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Xt(N,T,K){if(T.image.length!==6)return;let yt=ue(N,T),dt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+K);let St=i.get(dt);if(dt.version!==St.__version||yt===!0){e.activeTexture(n.TEXTURE0+K);let Dt=De.getPrimaries(De.workingColorSpace),ot=T.colorSpace===Zs?null:De.getPrimaries(T.colorSpace),at=T.colorSpace===Zs||Dt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Rt=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,ct=[];for(let Ht=0;Ht<6;Ht++)!Rt&&!O?ct[Ht]=M(T.image[Ht],!0,s.maxCubemapSize):ct[Ht]=O?T.image[Ht].image:T.image[Ht],ct[Ht]=de(T,ct[Ht]);let st=ct[0],At=r.convert(T.format,T.colorSpace),_t=r.convert(T.type),Tt=S(T.internalFormat,At,_t,T.normalized,T.colorSpace),se=T.isVideoTexture!==!0,Te=St.__version===void 0||yt===!0,vt=dt.dataReady,le=v(T,st);Qt(n.TEXTURE_CUBE_MAP,T);let we;if(T.isDepthTexture){if(Tt=b(T.format===$s,T.type),Te)if(se)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,Tt,st.width,st.height);else for(let Ht=0;Ht<6;Ht++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Tt,st.width,st.height,0,At,_t,null)}else if(Rt){se&&Te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,le,Tt,st.width,st.height);for(let Ht=0;Ht<6;Ht++){we=ct[Ht].mipmaps;for(let $e=0;$e<we.length;$e++){let Bn=we[$e];T.format!==ss?At!==null?se?vt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,$e,0,0,Bn.width,Bn.height,At,Bn.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,$e,Tt,Bn.width,Bn.height,0,Bn.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,$e,0,0,Bn.width,Bn.height,At,_t,Bn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,$e,Tt,Bn.width,Bn.height,0,At,_t,Bn.data)}}}else{if(we=T.mipmaps,se&&Te){we.length>0&&le++;let Ht=ye(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,le,Tt,Ht.width,Ht.height)}for(let Ht=0;Ht<6;Ht++)if(O){se?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,0,0,ct[Ht].width,ct[Ht].height,At,_t,ct[Ht].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Tt,ct[Ht].width,ct[Ht].height,0,At,_t,ct[Ht].data);for(let $e=0;$e<we.length;$e++){let ir=we[$e].image[Ht].image;se?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,$e+1,0,0,ir.width,ir.height,At,_t,ir.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,$e+1,Tt,ir.width,ir.height,0,At,_t,ir.data)}}else{se?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,0,0,At,_t,ct[Ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Tt,At,_t,ct[Ht]);for(let $e=0;$e<we.length;$e++){let Bn=we[$e];se?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,$e+1,0,0,At,_t,Bn.image[Ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,$e+1,Tt,At,_t,Bn.image[Ht])}}}w(T)&&T.mipmapsAutoUpdate===!0&&E(n.TEXTURE_CUBE_MAP),St.__version=dt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Bt(N,T,K,yt,dt,St){let Dt=r.convert(K.format,K.colorSpace),ot=r.convert(K.type),at=S(K.internalFormat,Dt,ot,K.normalized,K.colorSpace),Rt=i.get(T),O=i.get(K);if(O.__renderTarget=T,!Rt.__hasExternalTextures){let ct=Math.max(1,T.width>>St),st=Math.max(1,T.height>>St);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,St,at,ct,st,T.depth,0,Dt,ot,null):e.texImage2D(dt,St,at,ct,st,0,Dt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),Lt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,yt,dt,O.__webglTexture,0,Ke(T)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,yt,dt,O.__webglTexture,St),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(N,T,K){if(n.bindRenderbuffer(n.RENDERBUFFER,N),T.depthBuffer){let yt=T.depthTexture,dt=yt&&yt.isDepthTexture?yt.type:null,St=b(T.stencilBuffer,dt),Dt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Lt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke(T),St,T.width,T.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke(T),St,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,St,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,N)}else{let yt=T.textures;for(let dt=0;dt<yt.length;dt++){let St=yt[dt],Dt=r.convert(St.format,St.colorSpace),ot=r.convert(St.type),at=S(St.internalFormat,Dt,ot,St.normalized,St.colorSpace);Lt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke(T),at,T.width,T.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke(T),at,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,at,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ee(N,T,K){let yt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=i.get(T.depthTexture);dt.__renderTarget=T;let St=yt?T.depthTexture.image[0]:T.depthTexture.image;(!dt.__webglTexture||St.width!==T.width||St.height!==T.height)&&(St.width=T.width,St.height=T.height,T.depthTexture.needsUpdate=!0),yt?Ft(T.depthTexture,0):Pt(T.depthTexture,0);let Dt=dt.__webglTexture,ot=Ke(T),at=yt?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,Rt=T.depthTexture.format===$s?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===zs)Lt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Rt,at,Dt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,Rt,at,Dt,0);else if(T.depthTexture.format===$s)Lt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Rt,at,Dt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,Rt,at,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(N){let T=i.get(N),K=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let yt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),yt){let dt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,yt.removeEventListener("dispose",dt)};yt.addEventListener("dispose",dt),T.__depthDisposeCallback=dt}T.__boundDepthTexture=yt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let yt=0;yt<6;yt++)ee(T.__webglFramebuffer[yt],N,yt);else N.texture.mipmaps.length>0?ee(T.__webglFramebuffer[0],N,0):ee(T.__webglFramebuffer,N,0);else if(K){T.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[yt]),T.__webglDepthbuffer[yt]===void 0)T.__webglDepthbuffer[yt]=n.createRenderbuffer(),Ee(T.__webglDepthbuffer[yt],N,!1);else{let dt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer[yt];n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,St)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Ee(T.__webglDepthbuffer,N,!1);else{let dt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,St)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(N,T,K){let yt=i.get(N);T!==void 0&&Bt(yt.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&Ne(N)}function ke(N){let T=N.texture,K=i.get(N),yt=i.get(T);N.addEventListener("dispose",B),A(N);let dt=N.textures,St=N.isWebGLCubeRenderTarget===!0,Dt=dt.length>1;if(Dt||(yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture()),yt.__version=T.version,o.memory.textures++),St){K.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(T.mipmaps.length>0){K.__webglFramebuffer[ot]=[];for(let at=0;at<T.mipmaps.length;at++)K.__webglFramebuffer[ot][at]=n.createFramebuffer()}else K.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(T.mipmaps.length>0){K.__webglFramebuffer=[];for(let ot=0;ot<T.mipmaps.length;ot++)K.__webglFramebuffer[ot]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let ot=0,at=dt.length;ot<at;ot++){let Rt=i.get(dt[ot]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&Lt(N)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ot=0;ot<dt.length;ot++){let at=dt[ot];K.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[ot]);let Rt=r.convert(at.format,at.colorSpace),O=r.convert(at.type),ct=S(at.internalFormat,Rt,O,at.normalized,at.colorSpace,N.isXRRenderTarget===!0),st=Ke(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,st,ct,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,K.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(K.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(St){e.bindTexture(n.TEXTURE_CUBE_MAP,yt.__webglTexture),Qt(n.TEXTURE_CUBE_MAP,T);for(let ot=0;ot<6;ot++)if(T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)Bt(K.__webglFramebuffer[ot][at],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,at);else Bt(K.__webglFramebuffer[ot],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);w(T)?E(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Dt){for(let ot=0,at=dt.length;ot<at;ot++){let Rt=dt[ot],O=i.get(Rt),ct=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ct=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,O.__webglTexture),Qt(ct,Rt),Bt(K.__webglFramebuffer,N,Rt,n.COLOR_ATTACHMENT0+ot,ct,0),w(Rt)&&E(ct)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ot=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,yt.__webglTexture),Qt(ot,T),T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)Bt(K.__webglFramebuffer[at],N,T,n.COLOR_ATTACHMENT0,ot,at);else Bt(K.__webglFramebuffer,N,T,n.COLOR_ATTACHMENT0,ot,0);w(T)?E(ot):T.mipmaps.length>0&&n.texParameteri(ot,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&Ne(N)}function q(N){let T=N.textures;for(let K=0,yt=T.length;K<yt;K++){let dt=T[K];if(w(dt)&&dt.mipmapsAutoUpdate===!0){let St=R(N),Dt=i.get(dt).__webglTexture;e.bindTexture(St,Dt),E(St),e.unbindTexture()}}}let An=[];function Le(N){if(N.samples>0){if(Lt(N)===!1){let T=N.textures,K=N.width,yt=N.height,dt=n.COLOR_BUFFER_BIT,St=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(N),ot=T.length>1;if(ot)for(let Rt=0;Rt<T.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);let O=i.get(T[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,K,yt,0,0,K,yt,dt,n.NEAREST),l===!0&&(An.length=0,An.push(n.COLOR_ATTACHMENT0+Rt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&An.push(St),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,An))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let Rt=0;Rt<T.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);let O=i.get(T[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,O,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ke(N){return Math.min(s.maxSamples,N.samples)}function Lt(N){let T=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yn(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function de(N,T){let K=N.colorSpace,yt=N.format,dt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==Ha&&K!==Zs&&(De.getTransfer(K)===Ge?(yt!==ss||dt!==Ei)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",K)),T}function ye(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=kt,this.resetTextureUnits=$,this.getTextureUnits=Z,this.setTextureUnits=ft,this.setTexture2D=Pt,this.setTexture2DArray=zt,this.setTexture3D=ne,this.setTextureCube=Ft,this.rebindTextures=Ue,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Lt,this.dispose=U}function C_(n,t){function e(i,s=Zs){let r,o=De.getTransfer(s);if(i===Ei)return n.UNSIGNED_BYTE;if(i===Ph)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ih)return n.UNSIGNED_SHORT_5_5_5_1;if(i===af)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===rf)return n.BYTE;if(i===of)return n.SHORT;if(i===Qo)return n.UNSIGNED_SHORT;if(i===Ch)return n.INT;if(i===is)return n.UNSIGNED_INT;if(i===qi)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===cf)return n.ALPHA;if(i===hf)return n.RGB;if(i===ss)return n.RGBA;if(i===zs)return n.DEPTH_COMPONENT;if(i===$s)return n.DEPTH_STENCIL;if(i===jo)return n.RED;if(i===Lh)return n.RED_INTEGER;if(i===_r)return n.RG;if(i===Dh)return n.RG_INTEGER;if(i===Nh)return n.RGBA_INTEGER;if(i===vl||i===_l||i===bl||i===El)if(o===Ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===vl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===vl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_l)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uh||i===Fh||i===Bh||i===Oh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hh||i===kh||i===Gh||i===zh||i===Vh||i===wl||i===Wh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hh||i===kh)return o===Ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===zh)return r.COMPRESSED_R11_EAC;if(i===Vh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===wl)return r.COMPRESSED_RG11_EAC;if(i===Wh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xh||i===qh||i===Yh||i===$h||i===Zh||i===Jh||i===Kh||i===Qh||i===jh||i===tu||i===eu||i===nu||i===iu||i===su)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$h)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jh)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tu)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eu)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nu)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===iu)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===su)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ru||i===ou||i===au)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ru)return o===Ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ou)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lu||i===cu||i===Sl||i===hu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===lu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
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

}`,Uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ka(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new cn({vertexShader:P_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new be(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ff=class extends ms{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new Uf,x={},M=e.getContextAttributes(),w=null,E=null,R=[],S=[],b=new lt,v=null,A=null,P=new kn;P.viewport=new ln;let L=new kn;L.viewport=new ln;let B=[P,L],V=new Eh,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let Pt=R[it];return Pt===void 0&&(Pt=new Go,R[it]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(it){let Pt=R[it];return Pt===void 0&&(Pt=new Go,R[it]=Pt),Pt.getGripSpace()},this.getHand=function(it){let Pt=R[it];return Pt===void 0&&(Pt=new Go,R[it]=Pt),Pt.getHandSpace()};function G(it){let Pt=S.indexOf(it.inputSource);if(Pt===-1)return;let zt=R[Pt];zt!==void 0&&(zt.update(it.inputSource,it.frame,c||o),zt.dispatchEvent({type:it.type,data:it.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let it=0;it<R.length;it++){let Pt=S[it];Pt!==null&&(S[it]=null,R[it].disconnect(Pt))}I=null,U=null,m.reset();for(let it in x)delete x[it];if(t.setRenderTarget(w),f=null,d=null,u=null,s=null,E=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(b.width,b.height,!1),A!==null){let it=A.camera;it.fov=A.fov,it.zoom=A.zoom,it.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,i.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,i.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(b),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,ne=null,Ft=null;M.depth&&(Ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,zt=M.stencil?$s:zs,ne=M.stencil?io:is);let ie={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ie),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new bn(d.textureWidth,d.textureHeight,{format:ss,type:Ei,depthTexture:new Ws(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let zt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,zt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new bn(f.framebufferWidth,f.framebufferHeight,{format:ss,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(it){for(let Pt=0;Pt<it.removed.length;Pt++){let zt=it.removed[Pt],ne=S.indexOf(zt);ne>=0&&(S[ne]=null,R[ne].disconnect(zt))}for(let Pt=0;Pt<it.added.length;Pt++){let zt=it.added[Pt],ne=S.indexOf(zt);if(ne===-1){for(let ie=0;ie<R.length;ie++)if(ie>=S.length){S.push(zt),ne=ie;break}else if(S[ie]===null){S[ie]=zt,ne=ie;break}if(ne===-1)break}let Ft=R[ne];Ft&&Ft.connect(zt)}}function Y(it,Pt){Pt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(Pt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let Pt=it.near,zt=it.far;m.texture!==null&&(m.depthNear>0&&(Pt=m.depthNear),m.depthFar>0&&(zt=m.depthFar)),V.near=L.near=P.near=Pt,V.far=L.far=P.far=zt,(I!==V.near||U!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,U=V.far),V.layers.mask=it.layers.mask|6,P.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let ne=it.parent,Ft=V.cameras;Y(V,ne);for(let ie=0;ie<Ft.length;ie++)Y(Ft[ie],ne);V.projectionMatrix.copy(P.projectionMatrix),V.projectionMatrixInverse.copy(P.projectionMatrixInverse),A===null&&it.isPerspectiveCamera&&(A={camera:it,fov:it.fov,zoom:it.zoom}),$(it,V,ne)};function $(it,Pt,zt){zt===null?it.matrix.copy(Pt.matrixWorld):(it.matrix.copy(zt.matrixWorld),it.matrix.invert(),it.matrix.multiply(Pt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(Pt.projectionMatrix),it.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=th*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(it){l=it,d!==null&&(d.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(it){return x[it]};let Z=null;function ft(it,Pt){if(h=Pt.getViewerPose(c||o),p=Pt,h!==null){let zt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ne=!1;zt.length!==V.cameras.length&&(V.cameras.length=0,ne=!0);for(let rt=0;rt<zt.length;rt++){let Qt=zt[rt],ue=null;if(f!==null)ue=f.getViewport(Qt);else{let bt=u.getViewSubImage(d,Qt);ue=bt.viewport,rt===0&&(t.setRenderTargetTextures(E,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(E))}let ht=B[rt];ht===void 0&&(ht=new kn,ht.layers.enable(rt),ht.viewport=new ln,B[rt]=ht),ht.matrix.fromArray(Qt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Qt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ue.x,ue.y,ue.width,ue.height),rt===0&&(V.matrix.copy(ht.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ne===!0&&V.cameras.push(ht)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let rt=u.getDepthInformation(zt[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(Ft&&Ft.includes("camera-access")&&g){t.state.unbindTexture(),u=i.getBinding();for(let rt=0;rt<zt.length;rt++){let Qt=zt[rt].camera;if(Qt){let ue=x[Qt];ue||(ue=new Ka,x[Qt]=ue);let ht=u.getCameraImage(Qt);ue.sourceTexture=ht}}}}for(let zt=0;zt<R.length;zt++){let ne=S[zt],Ft=R[zt];ne!==null&&Ft!==void 0&&Ft.update(ne,Pt,c||o)}Z&&Z(it,Pt),Pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Pt}),p=null}let kt=new Km;kt.setAnimationLoop(ft),this.setAnimationLoop=function(it){Z=it},this.dispose=function(){}}},L_=new $t,ag=new Me;ag.set(-1,0,0,0,1,0,0,0,1);function D_(n,t){function e(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,yf(n)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,M,w,E){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),u(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),d(m,x),x.isMeshPhysicalMaterial&&f(m,x,E)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,M,w):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,e(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===En&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,e(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===En&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,e(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,e(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let M=t.get(x),w=M.envMap,E=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(E)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ag),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,M,w){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*M,m.scale.value=w*.5,x.map&&(m.map.value=x.map,e(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function u(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function d(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function f(m,x,M){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,e(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===En&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let M=t.get(x).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N_(n,t,e,i){let s={},r={};function o(M,w){let E=w.program;i.uniformBlockBinding(M,E,s[M.id])}function a(M,w){let E=s[M.id];E===void 0&&(p(M),E=l(M),s[M.id]=E,M.addEventListener("dispose",m));let R=w.program;i.updateUBOMapping(M,R);let S=t.render.frame;r[M.id]!==S&&(c(M),r[M.id]=S)}function l(M){let w=n.createBuffer(),E=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(M){let w=s[M.id],E=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let S=0,b=E.length;S<b;S++){let v=E[S];if(Array.isArray(v))for(let A=0,P=v.length;A<P;A++)h(v[A],S,A,R);else h(v,S,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,w,E,R){if(d(M,w,E,R)===!0){let S=M.__offset,b=M.value;if(Array.isArray(b)){let v=0;for(let A=0;A<b.length;A++){let P=b[A],L=g(P,!0);u(P,M.__data,v),v+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(b,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function u(M,w,E){typeof M=="number"||typeof M=="boolean"?w[E]=M:M.isMatrix3?(w[E]=M.elements[0],w[E+1]=M.elements[1],w[E+2]=M.elements[2],w[E+3]=0,w[E+4]=M.elements[3],w[E+5]=M.elements[4],w[E+6]=M.elements[5],w[E+7]=0,w[E+8]=M.elements[6],w[E+9]=M.elements[7],w[E+10]=M.elements[8],w[E+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-E),E):M.toArray(w,E)}function d(M,w,E,R){let S=M.value,b=w+"_"+E;if(Array.isArray(S)){R[b]===void 0&&(R[b]=[]);let v=R[b],A=!1;for(let P=0;P<S.length;P++)f(S[P],v,P)===!0&&(A=!0);return A}return f(S,R,b)}function f(M,w,E){if(w[E]===void 0)return typeof M=="number"||typeof M=="boolean"?w[E]=M:ArrayBuffer.isView(M)?w[E]=M.slice():w[E]=M.clone(),!0;{let R=w[E];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return w[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function p(M){let w=M.uniforms,E=0,R=16;for(let b=0,v=w.length;b<v;b++){let A=Array.isArray(w[b])?w[b]:[w[b]];for(let P=0,L=A.length;P<L;P++){let B=A[P],V=Array.isArray(B.value)?B.value:[B.value],I=Array.isArray(w[b])||Array.isArray(B.value),U=E;for(let X=0,j=V.length;X<j;X++){let Y=V[X],$=g(Y,I),Z=E%R,ft=Z%$.boundary,kt=Z+ft;E+=ft,kt!==0&&R-kt<$.storage&&(E+=R-kt),X===0&&(U=E),E+=$.storage}let G=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new G((E-U)/Float32Array.BYTES_PER_ELEMENT),B.__offset=U}}let S=E%R;return S>0&&(E+=R-S),M.__size=E,M.__cache={},this}function g(M,w){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):me("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(M){let w=M.target;w.removeEventListener("dispose",m),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function x(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:x}}var U_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vs=null;function F_(){return vs===null&&(vs=new Yr(U_,16,16,_r,Ln),vs.name="DFG_LUT",vs.minFilter=ci,vs.magFilter=ci,vs.wrapS=ds,vs.wrapT=ds,vs.generateMipmaps=!1,vs.needsUpdate=!0),vs}var Cl=class{constructor(t={}){let{canvas:e=mm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ei}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=f,m=new Set([Nh,Dh,Lh]),x=new Set([Ei,is,Qo,io,Ph,Ih]),M=new Uint32Array(4),w=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},R=null,S=null,b=[],v=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,B=null,V=null,I=null,U=null;this._outputColorSpace=Mn;let G=0,X=0,j=null,Y=-1,$=null,Z=new ln,ft=new ln,kt=null,it=new qt(0),Pt=0,zt=e.width,ne=e.height,Ft=1,ie=null,nn=null,rt=new ln(0,0,zt,ne),Qt=new ln(0,0,zt,ne),ue=!1,ht=new dr,bt=new rh,wt=!1,Xt=!1,Bt=new $t,Ee=new F,ee=new ln,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function ke(){return j===null?Ft:1}let q=i;function An(C,z){return e.getContext(C,z)}let Le,Ke,Lt,yn,de,ye,N,T,K,yt,dt,St,Dt,ot,at,Rt,O,ct,st,At,_t,Tt,se;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Ht,!1),q===null){let z="webgl2";if(q=An(z,C),q===null)throw An(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(C){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),ge("WebGLRenderer: "+C.message),C}function Te(){Le=new YM(q),Le.init(),_t=new C_(q,Le),Ke=new FM(q,Le,t,_t),Lt=new R_(q,Le),Ke.reversedDepthBuffer&&d&&Lt.buffers.depth.setReversed(!0),V=q.createFramebuffer(),I=q.createFramebuffer(),U=q.createFramebuffer(),yn=new JM(q),de=new f_,ye=new A_(q,Le,Lt,de,Ke,_t,yn),N=new qM(P),T=new Qx(q),Tt=new NM(q,T),K=new $M(q,T,yn,Tt),yt=new QM(q,K,T,Tt,yn),ct=new KM(q,Ke,ye),at=new BM(de),dt=new d_(P,N,Le,Ke,Tt,at),St=new D_(P,de),Dt=new m_,ot=new __(Le),O=new DM(P,N,Lt,yt,p,l),Rt=new T_(P,yt,Ke),se=new N_(q,yn,Ke,Lt),st=new UM(q,Le,yn),At=new ZM(q,Le,yn),yn.programs=dt.programs,P.capabilities=Ke,P.extensions=Le,P.properties=de,P.renderLists=Dt,P.shadowMap=Rt,P.state=Lt,P.info=yn}g!==Ei&&(A=new tv(g,e.width,e.height,a,s,r));let vt=new Ff(P,q);this.xr=vt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let C=Le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ft},this.setPixelRatio=function(C){C!==void 0&&(Ft=C,this.setSize(zt,ne,!1))},this.getSize=function(C){return C.set(zt,ne)},this.setSize=function(C,z,et=!0){if(vt.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=C,ne=z,e.width=Math.floor(C*Ft),e.height=Math.floor(z*Ft),et===!0&&(e.style.width=C+"px",e.style.height=z+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(zt*Ft,ne*Ft).floor()},this.setDrawingBufferSize=function(C,z,et){zt=C,ne=z,Ft=et,e.width=Math.floor(C*et),e.height=Math.floor(z*et),this.setViewport(0,0,C,z)},this.setEffects=function(C){if(g===Ei){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let z=0;z<C.length;z++)if(C[z].isOutputPass===!0){me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(rt)},this.setViewport=function(C,z,et,J){C.isVector4?rt.set(C.x,C.y,C.z,C.w):rt.set(C,z,et,J),Lt.viewport(Z.copy(rt).multiplyScalar(ke()).round())},this.getScissor=function(C){return C.copy(Qt)},this.setScissor=function(C,z,et,J){C.isVector4?Qt.set(C.x,C.y,C.z,C.w):Qt.set(C,z,et,J),Lt.scissor(ft.copy(Qt).multiplyScalar(ke()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(C){Lt.setScissorTest(ue=C)},this.setOpaqueSort=function(C){ie=C},this.setTransparentSort=function(C){nn=C},this.getClearColor=function(C){return C.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(C=!0,z=!0,et=!0){let J=0;if(C){let Q=!1;if(j!==null){let Nt=j.texture.format;Q=m.has(Nt)}if(Q){let Nt=j.texture.type,Yt=x.has(Nt),It=O.getClearColor(),Gt=O.getClearAlpha(),jt=It.r,_e=It.g,Fe=It.b;Yt?(M[0]=jt,M[1]=_e,M[2]=Fe,M[3]=Gt,q.clearBufferuiv(q.COLOR,0,M)):(w[0]=jt,w[1]=_e,w[2]=Fe,w[3]=Gt,q.clearBufferiv(q.COLOR,0,w))}else J|=q.COLOR_BUFFER_BIT}z&&(J|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&q.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),B=C},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),O.dispose(),Dt.dispose(),ot.dispose(),ye.dispose(),de.dispose(),N.dispose(),yt.dispose(),K.dispose(),Tt.dispose(),se.dispose(),dt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",$0),vt.removeEventListener("sessionend",Z0),Or.stop()};function le(C){C.preventDefault(),za("WebGLRenderer: Context Lost."),L=!0}function we(){za("WebGLRenderer: Context Restored."),L=!1;let C=yn.autoReset,z=Rt.enabled,et=Rt.autoUpdate,J=Rt.needsUpdate,Q=Rt.type;Te(),yn.autoReset=C,Rt.enabled=z,Rt.autoUpdate=et,Rt.needsUpdate=J,Rt.type=Q}function Ht(C){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $e(C){let z=C.target;z.removeEventListener("dispose",$e),Bn(z)}function Bn(C){ir(C),de.remove(C)}function ir(C){let z=de.get(C).programs;z!==void 0&&(z.forEach(function(et){dt.releaseProgram(et)}),C.isShaderMaterial&&dt.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,et,J,Q,Nt){z===null&&(z=Ne);let Yt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,It=N1(C,z,et,J,Q);Lt.setMaterial(J,Yt);let Gt=et.index,jt=1;if(J.wireframe===!0){if(Gt=K.getWireframeAttribute(et),Gt===void 0)return;jt=2}let _e=et.drawRange,Fe=et.attributes.position,Jt=_e.start*jt,Be=(_e.start+_e.count)*jt;Nt!==null&&(Jt=Math.max(Jt,Nt.start*jt),Be=Math.min(Be,(Nt.start+Nt.count)*jt)),Gt!==null?(Jt=Math.max(Jt,0),Be=Math.min(Be,Gt.count)):Fe!=null&&(Jt=Math.max(Jt,0),Be=Math.min(Be,Fe.count));let Cn=Be-Jt;if(Cn<0||Cn===1/0)return;Tt.setup(Q,J,It,et,Gt);let sn,Qe=st;if(Gt!==null&&(sn=T.get(Gt),Qe=At,Qe.setIndex(sn)),Q.isMesh)J.wireframe===!0?(Lt.setLineWidth(J.wireframeLinewidth*ke()),Qe.setMode(q.LINES)):Qe.setMode(q.TRIANGLES);else if(Q.isLine){let Zn=J.linewidth;Zn===void 0&&(Zn=1),Lt.setLineWidth(Zn*ke()),Q.isLineSegments?Qe.setMode(q.LINES):Q.isLineLoop?Qe.setMode(q.LINE_LOOP):Qe.setMode(q.LINE_STRIP)}else Q.isPoints?Qe.setMode(q.POINTS):Q.isSprite&&Qe.setMode(q.TRIANGLES);if(Q.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))Qe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Zn=Q._multiDrawStarts,Kt=Q._multiDrawCounts,ai=Q._multiDrawCount,ze=Gt?T.get(Gt).bytesPerElement:1,Hr=de.get(J).currentProgram.getUniforms();for(let Jn=0;Jn<ai;Jn++)Hr.setValue(q,"_gl_DrawID",Jn),Qe.render(Zn[Jn]/ze,Kt[Jn])}else if(Q.isInstancedMesh)Qe.renderInstances(Jt,Cn,Q.count);else if(et.isInstancedBufferGeometry){let Zn=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Kt=Math.min(et.instanceCount,Zn);Qe.renderInstances(Jt,Cn,Kt)}else Qe.render(Jt,Cn)};function Y0(C,z,et,J){B!==null&&C.isNodeMaterial&&B.setObject(J,C),wt===!0&&at.setState(C,et,!1),C.transparent===!0&&C.side===hn&&C.forceSinglePass===!1?(C.side=En,C.needsUpdate=!0,Sa(C,z,J),C.side=ys,C.needsUpdate=!0,Sa(C,z,J),C.side=hn):Sa(C,z,J)}this.compile=function(C,z,et=null){et===null&&(et=C),B!==null&&B.renderStart(C,z,et),S=ot.get(et),S.init(z),v.push(S),et.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),C!==et&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights(),B!==null&&B.updateLights(S.state.lightsArray),Xt=this.localClippingEnabled,wt=at.init(this.clippingPlanes,Xt),wt===!0&&at.setGlobalState(this.clippingPlanes,z),B!==null&&Rt.render(S.state.shadowsArray,et,z);let J=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Nt=Q.material;if(Nt)if(Array.isArray(Nt))for(let Yt=0;Yt<Nt.length;Yt++){let It=Nt[Yt];Y0(It,et,z,Q),J.add(It)}else Y0(Nt,et,z,Q),J.add(Nt)}),S=v.pop(),B!==null&&B.renderEnd(),J},this.compileAsync=function(C,z,et=null){let J=this.compile(C,z,et);return new Promise(Q=>{function Nt(){if(J.forEach(function(Yt){let Gt=de.get(Yt).currentProgram;(Gt===void 0||Gt.isReady())&&J.delete(Yt)}),J.size===0){Q(C);return}setTimeout(Nt,10)}Le.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let fd=null;function L1(C){fd&&fd(C)}function $0(){Or.stop()}function Z0(){Or.start()}let Or=new Km;Or.setAnimationLoop(L1),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(C){fd=C,vt.setAnimationLoop(C),C===null?Or.stop():Or.start()},vt.addEventListener("sessionstart",$0),vt.addEventListener("sessionend",Z0),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(C,z);let et=vt.enabled===!0&&vt.isPresenting===!0,J=A!==null&&(j===null||et)&&A.begin(P,j);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(z),z=vt.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,z,j),S=ot.get(C,v.length),S.init(z),S.state.textureUnits=ye.getTextureUnits(),v.push(S),Bt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?bt.setFromArrayCamera(z):ht.setFromProjectionMatrix(Bt,zi,z.reversedDepth),Xt=this.localClippingEnabled,wt=at.init(this.clippingPlanes,Xt),R=Dt.get(C,b.length),R.init(),b.push(R),this.info.render.frame++,vt.enabled===!0&&vt.isPresenting===!0){let Yt=P.xr.getDepthSensingMesh();Yt!==null&&pd(Yt,z,-1/0,P.sortObjects)}pd(C,z,0,P.sortObjects),R.finish(),B!==null&&B.updateLights(S.state.lightsArray),P.sortObjects===!0&&R.sort(ie,nn),Ue=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Ue&&O.addToRenderList(R,C),this.info.autoReset===!0&&this.info.reset(),wt===!0&&at.beginShadows();let Q=S.state.shadowsArray;if(Rt.render(Q,C,z),wt===!0&&at.endShadows(),(J&&A.hasRenderPass())===!1){let Yt=R.opaque,It=R.transmissive;if(S.setupLights(),z.isArrayCamera){let Gt=z.cameras;if(It.length>0)for(let jt=0,_e=Gt.length;jt<_e;jt++){let Fe=Gt[jt];K0(Yt,It,C,Fe)}Ue&&O.render(C);for(let jt=0,_e=Gt.length;jt<_e;jt++){let Fe=Gt[jt];J0(R,C,Fe,Fe.viewport)}}else It.length>0&&K0(Yt,It,C,z),Ue&&O.render(C),J0(R,C,z)}j!==null&&X===0&&(ye.updateMultisampleRenderTarget(j),ye.updateRenderTargetMipmap(j)),J&&A.end(P),C.isScene===!0&&C.onAfterRender(P,C,z),Tt.resetDefaultState(),Y=-1,$=null,v.pop(),v.length>0?(S=v[v.length-1],ye.setTextureUnits(S.state.textureUnits),wt===!0&&at.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,b.pop(),b.length>0?R=b[b.length-1]:R=null,B!==null&&B.renderEnd()};function pd(C,z,et,J){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)et=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){let Yt=z.isArrayCamera?bt:ht;if(!C.frustumCulled||C.intersectsFrustum(Yt)){J&&ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Bt);let It=yt.update(C),Gt=C.material;Gt.visible&&R.push(C,It,Gt,et,ee.z,null,z)}}else if(C.isMesh||C.isLine||C.isPoints){let Yt=z.isArrayCamera?bt:ht;if(!C.frustumCulled||C.intersectsFrustum(Yt)){let It=yt.update(C),Gt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ee.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ee.copy(It.boundingSphere.center)),ee.applyMatrix4(C.matrixWorld).applyMatrix4(Bt)),Array.isArray(Gt)){let jt=It.groups;for(let _e=0,Fe=jt.length;_e<Fe;_e++){let Jt=jt[_e],Be=Gt[Jt.materialIndex];Be&&Be.visible&&R.push(C,It,Be,et,ee.z,Jt,z)}}else Gt.visible&&R.push(C,It,Gt,et,ee.z,null,z)}}}let Nt=C.children;for(let Yt=0,It=Nt.length;Yt<It;Yt++)pd(Nt[Yt],z,et,J)}function J0(C,z,et,J){let{opaque:Q,transmissive:Nt,transparent:Yt}=C;S.setupLightsView(et),wt===!0&&at.setGlobalState(P.clippingPlanes,et),J&&Lt.viewport(Z.copy(J)),Q.length>0&&mc(Q,z,et),Nt.length>0&&mc(Nt,z,et),Yt.length>0&&mc(Yt,z,et),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function K0(C,z,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[J.id]===void 0){let Jt=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[J.id]=new bn(1,1,{generateMipmaps:!0,type:Jt?Ln:Ei,minFilter:Ys,samples:Math.max(4,Ke.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:De.workingColorSpace})}let Nt=S.state.transmissionRenderTarget[J.id],Yt=J.viewport||Z;Nt.setSize(Yt.z*P.transmissionResolutionScale,Yt.w*P.transmissionResolutionScale);let It=P.getRenderTarget(),Gt=P.getActiveCubeFace(),jt=P.getActiveMipmapLevel();P.setRenderTarget(Nt),P.getClearColor(it),Pt=P.getClearAlpha(),Pt<1&&P.setClearColor(16777215,.5),P.clear(),Ue&&O.render(et);let _e=P.toneMapping;P.toneMapping=Ms;let Fe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),S.setupLightsView(J),wt===!0&&at.setGlobalState(P.clippingPlanes,J),mc(C,et,J),ye.updateMultisampleRenderTarget(Nt),ye.updateRenderTargetMipmap(Nt),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Be=0,Cn=z.length;Be<Cn;Be++){let sn=z[Be],{object:Qe,geometry:Zn,material:Kt,group:ai}=sn;if(Kt.side===hn&&Qe.layers.test(J.layers)){let ze=Kt.side;Kt.side=En,Kt.needsUpdate=!0,Q0(Qe,et,J,Zn,Kt,ai),Kt.side=ze,Kt.needsUpdate=!0,Jt=!0}}Jt===!0&&(ye.updateMultisampleRenderTarget(Nt),ye.updateRenderTargetMipmap(Nt))}P.setRenderTarget(It,Gt,jt),P.setClearColor(it,Pt),Fe!==void 0&&(J.viewport=Fe),P.toneMapping=_e}function mc(C,z,et){let J=z.isScene===!0?z.overrideMaterial:null;for(let Q=0,Nt=C.length;Q<Nt;Q++){let Yt=C[Q],{object:It,geometry:Gt,group:jt}=Yt,_e=Yt.material;_e.allowOverride===!0&&J!==null&&(_e=J),It.layers.test(et.layers)&&Q0(It,z,et,Gt,_e,jt)}}function Q0(C,z,et,J,Q,Nt){B!==null&&Q.isNodeMaterial&&B.setObject(C,Q),C.onBeforeRender(P,z,et,J,Q,Nt),C.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(P,z,et,J,C,Nt),Q.transparent===!0&&Q.side===hn&&Q.forceSinglePass===!1?(Q.side=En,Q.needsUpdate=!0,P.renderBufferDirect(et,z,J,Q,C,Nt),Q.side=ys,Q.needsUpdate=!0,P.renderBufferDirect(et,z,J,Q,C,Nt),Q.side=hn):P.renderBufferDirect(et,z,J,Q,C,Nt),C.onAfterRender(P,z,et,J,Q,Nt)}function j0(C){let z=0;for(let et of C)et.texture!==null&&z++;return z}function Sa(C,z,et){z.isScene!==!0&&(z=Ne);let J=de.get(C),Q=S.state.lights,Nt=S.state.shadowsArray,Yt=Q.state.version,It=dt.getParameters(C,Q.state,Nt,z,et,S.state.lightProbeGridArray),Gt=dt.getProgramCacheKey(It),jt=J.programs;J.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?z.environment:null,J.fog=z.fog;let _e=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;J.envMap=N.get(C.envMap||J.environment,_e),J.envMapRotation=J.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",$e),jt=new Map,J.programs=jt,J.programVariants=new Map);let Fe=jt.get(Gt);if(Fe!==void 0){if(J.currentProgram===Fe&&J.lightsStateVersion===Yt)return ep(C,It),Fe}else It.uniforms=dt.getUniforms(C),B!==null&&C.isNodeMaterial&&B.build(C,et,It),C.onBeforeCompile(It,P),Fe=dt.acquireProgram(It,Gt),jt.set(Gt,Fe),J.uniforms=It.uniforms;let Jt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=at.uniform),ep(C,It),J.needsLights=F1(C),J.lightsStateVersion=Yt,J.needsLights&&(Jt.ambientLightColor.value=Q.state.ambient,Jt.lightProbe.value=Q.state.probe,Jt.sunLights.value=Q.state.sun,Jt.sunLightShadows.value=Q.state.sunShadow,Jt.directionalLights.value=Q.state.directional,Jt.directionalLightShadows.value=Q.state.directionalShadow,Jt.spotLights.value=Q.state.spot,Jt.spotLightShadows.value=Q.state.spotShadow,Jt.rectAreaLights.value=Q.state.rectArea,Jt.ltc_1.value=Q.state.rectAreaLTC1,Jt.ltc_2.value=Q.state.rectAreaLTC2,Jt.pointLights.value=Q.state.point,Jt.pointLightShadows.value=Q.state.pointShadow,Jt.hemisphereLights.value=Q.state.hemi,Jt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Jt.sunShadowCascade.value=Q.state.sunShadowCascade,Jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Jt.spotLightMatrix.value=Q.state.spotLightMatrix,Jt.spotLightMap.value=Q.state.spotLightMap,Jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.numLightProbeGrids=j0(S.state.lightProbeGridArray),J.currentProgram=Fe,J.uniformsList=null,Fe}function D1(C,z,et,J,Q){let Nt=de.get(C),Yt=Nt.currentProgram.id+","+J+","+Q,It=Nt.programVariants.get(Yt);return It===void 0?(It=Sa(C,z,et),Nt.programVariants.set(Yt,It)):(Nt.currentProgram=It,Nt.uniformsList=null,Nt.outputColorSpace=J,Nt.toneMapping=Q),It}function tp(C){if(C.uniformsList===null){let z=C.currentProgram.getUniforms();C.uniformsList=ea.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function ep(C,z){let et=de.get(C);et.outputColorSpace=z.outputColorSpace,et.batching=z.batching,et.batchingColor=z.batchingColor,et.instancing=z.instancing,et.instancingColor=z.instancingColor,et.instancingMorph=z.instancingMorph,et.skinning=z.skinning,et.morphTargets=z.morphTargets,et.morphNormals=z.morphNormals,et.morphColors=z.morphColors,et.morphTargetsCount=z.morphTargetsCount,et.numClippingPlanes=z.numClippingPlanes,et.numIntersection=z.numClipIntersection,et.vertexAlphas=z.vertexAlphas,et.vertexTangents=z.vertexTangents,et.toneMapping=z.toneMapping}function N1(C,z,et,J,Q){z.isScene!==!0&&(z=Ne),ye.resetTextureUnits();let Nt=z.fog,Yt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?z.environment:null,It=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:De.workingColorSpace,Gt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,jt=N.get(J.envMap||Yt,Gt),_e=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Fe=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Jt=!!et.morphAttributes.position,Be=!!et.morphAttributes.normal,Cn=!!et.morphAttributes.color,sn=Ms;J.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(sn=P.toneMapping);let Qe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Zn=Qe!==void 0?Qe.length:0,Kt=de.get(J),ai=S.state.lights;if(wt===!0&&(Xt===!0||C!==$)){let pn=C===$&&J.id===Y;at.setState(J,C,pn)}let ze=!1,Hr=!1;J.version===Kt.__version?Kt.needsLights&&Kt.lightsStateVersion!==ai.state.version||Q.isBatchedMesh&&Kt.batching===!1||!Q.isBatchedMesh&&Kt.batching===!0||Q.isBatchedMesh&&Kt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Kt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Kt.instancing===!1||!Q.isInstancedMesh&&Kt.instancing===!0||Q.isSkinnedMesh&&Kt.skinning===!1||!Q.isSkinnedMesh&&Kt.skinning===!0||Q.isInstancedMesh&&Kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Kt.instancingMorph===!1&&Q.morphTexture!==null||Kt.envMap!==jt||J.fog===!0&&Kt.fog!==Nt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==at.numPlanes||Kt.numIntersection!==at.numIntersection)||Kt.vertexAlphas!==_e||Kt.vertexTangents!==Fe||Kt.morphTargets!==Jt||Kt.morphNormals!==Be||Kt.morphColors!==Cn||Kt.morphTargetsCount!==Zn||Kt.numLightProbeGrids!==j0(S.state.lightProbeGridArray)?ze=!0:(Kt.outputColorSpace!==It||Kt.toneMapping!==sn)&&(Hr=!0):(ze=!0,Kt.__version=J.version);let Jn=Kt.currentProgram;(ze===!0||Hr===!0)&&(Jn=Hr===!0?D1(J,z,Q,It,sn):Sa(J,z,Q),B&&J.isNodeMaterial&&B.onUpdateProgram(J,Jn,Kt));let gc=!1,sr=!1,kr=!1,He=Jn.getUniforms(),Vn=Kt.uniforms;if(Lt.useProgram(Jn.program)&&(gc=!0,sr=!0,kr=!0),J.id!==Y&&(Y=J.id,sr=!0),gc||$!==C){Lt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),He.setValue(q,"projectionMatrix",C.projectionMatrix),He.setValue(q,"viewMatrix",C.matrixWorldInverse);let On=He.map.cameraPosition;On!==void 0&&On.setValue(q,Ee.setFromMatrixPosition(C.matrixWorld)),Ke.logarithmicDepthBuffer&&He.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&He.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),$!==C&&($=C,sr=!0,kr=!0)}if(Kt.needsLights&&(ai.state.sunShadowMap.length>0&&He.setValue(q,"sunShadowMap",ai.state.sunShadowMap,ye),ai.state.directionalShadowMap.length>0&&He.setValue(q,"directionalShadowMap",ai.state.directionalShadowMap,ye),ai.state.spotShadowMap.length>0&&He.setValue(q,"spotShadowMap",ai.state.spotShadowMap,ye),ai.state.pointShadowMap.length>0&&He.setValue(q,"pointShadowMap",ai.state.pointShadowMap,ye)),Q.isSkinnedMesh){He.setOptional(q,Q,"bindMatrix"),He.setOptional(q,Q,"bindMatrixInverse");let pn=Q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),He.setValue(q,"boneTexture",pn.boneTexture,ye))}Q.isBatchedMesh&&(He.setOptional(q,Q,"batchingTexture"),He.setValue(q,"batchingTexture",Q._matricesTexture,ye),He.setOptional(q,Q,"batchingIdTexture"),He.setValue(q,"batchingIdTexture",Q._indirectTexture,ye),He.setOptional(q,Q,"batchingColorTexture"),Q._colorsTexture!==null&&He.setValue(q,"batchingColorTexture",Q._colorsTexture,ye));let Zi=et.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&ct.update(Q,et,Jn),(sr||Kt.receiveShadow!==Q.receiveShadow)&&(Kt.receiveShadow=Q.receiveShadow,He.setValue(q,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&z.environment!==null&&(Vn.envMapIntensity.value=z.environmentIntensity),Vn.dfgLUT!==void 0&&(Vn.dfgLUT.value=F_()),sr){if(He.setValue(q,"toneMappingExposure",P.toneMappingExposure),Kt.needsLights&&U1(Vn,kr),Nt&&J.fog===!0&&St.refreshFogUniforms(Vn,Nt),St.refreshMaterialUniforms(Vn,J,Ft,ne,S.state.transmissionRenderTarget[C.id]),Kt.needsLights&&Kt.numLightProbeGrids>0){let pn=E,On=0;for(let Ns of S.state.lightProbeGridArray)Ns.texture!==null&&(pn.textures[On]=Ns.texture,pn.min[On]=Ns.boundingBox.min,pn.max[On]=Ns.boundingBox.max,pn.resolution[On]=Ns.resolution,On++);for(let Ns in pn)pn[Ns].length=On;Vn.probesSH.value=pn.textures,Vn.probesMin.value=pn.min,Vn.probesMax.value=pn.max,Vn.probesResolution.value=pn.resolution}ea.upload(q,tp(Kt),Vn,ye)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ea.upload(q,tp(Kt),Vn,ye),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&He.setValue(q,"center",Q.center),He.setValue(q,"modelViewMatrix",Q.modelViewMatrix),He.setValue(q,"normalMatrix",Q.normalMatrix),He.setValue(q,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){let pn=J.uniformsGroups;for(let On=0,Ns=pn.length;On<Ns;On++){let ip=pn[On];se.update(ip,Jn),se.bind(ip,Jn)}}return Jn}function U1(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.sunLights.needsUpdate=z,C.sunLightShadows.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function F1(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,z,et){let J=de.get(C);J.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),de.get(C.texture).__webglTexture=z,de.get(C.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,z){let et=de.get(C);et.__webglFramebuffer=z,et.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,et=0){j=C,G=z,X=et;let J=null,Q=!1,Nt=!1;if(C){let It=de.get(C);if(It.__useDefaultFramebuffer!==void 0){Lt.bindFramebuffer(q.FRAMEBUFFER,It.__webglFramebuffer),Z.copy(C.viewport),ft.copy(C.scissor),kt=C.scissorTest,Lt.viewport(Z),Lt.scissor(ft),Lt.setScissorTest(kt),Y=-1;return}else if(It.__webglFramebuffer===void 0)ye.setupRenderTarget(C);else if(It.__hasExternalTextures)ye.rebindTextures(C,de.get(C.texture).__webglTexture,de.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let _e=C.depthTexture;if(It.__boundDepthTexture!==_e){if(_e!==null&&de.has(_e)&&(C.width!==_e.image.width||C.height!==_e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(C)}}let Gt=C.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Nt=!0);let jt=de.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[z])?J=jt[z][et]:J=jt[z],Q=!0):C.samples>0&&ye.useMultisampledRTT(C)===!1?J=de.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?J=jt[et]:J=jt,Z.copy(C.viewport),ft.copy(C.scissor),kt=C.scissorTest}else Z.copy(rt).multiplyScalar(Ft).floor(),ft.copy(Qt).multiplyScalar(Ft).floor(),kt=ue;if(et!==0&&(J=V),Lt.bindFramebuffer(q.FRAMEBUFFER,J)&&Lt.drawBuffers(C,J),Lt.viewport(Z),Lt.scissor(ft),Lt.setScissorTest(kt),Q){let It=de.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+z,It.__webglTexture,et)}else if(Nt){let It=z;for(let Gt=0;Gt<C.textures.length;Gt++){let jt=de.get(C.textures[Gt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Gt,jt.__webglTexture,et,It)}}else if(C!==null&&et!==0){let It=de.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,It.__webglTexture,et)}Y=-1};function np(C){let z=de.get(C);return(z.__readFormat!==C.format||z.__readType!==C.type)&&(z.__readFormat=C.format,z.__readType=C.type,z.__formatReadable=Ke.textureFormatReadable(C.format),z.__typeReadable=Ke.textureTypeReadable(C.type)),z}this.readRenderTargetPixels=function(C,z,et,J,Q,Nt,Yt,It=0){if(!(C&&C.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Yt!==void 0&&(Gt=Gt[Yt],Array.isArray(Gt)&&(Gt=Gt[0])),Gt){Lt.bindFramebuffer(q.FRAMEBUFFER,Gt);try{let jt=C.textures[It],_e=jt.format,Fe=jt.type;C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It);let Jt=np(jt);if(Jt.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-J&&et>=0&&et<=C.height-Q&&q.readPixels(z,et,J,Q,_t.convert(_e),_t.convert(Fe),Nt)}finally{let jt=j!==null?de.get(j).__webglFramebuffer:null;Lt.bindFramebuffer(q.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(C,z,et,J,Q,Nt,Yt,It=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Yt!==void 0&&(Gt=Gt[Yt],Array.isArray(Gt)&&(Gt=Gt[0])),Gt)if(z>=0&&z<=C.width-J&&et>=0&&et<=C.height-Q){Lt.bindFramebuffer(q.FRAMEBUFFER,Gt);let jt=C.textures[It],_e=jt.format,Fe=jt.type;C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It);let Jt=np(jt);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Be=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Be),q.bufferData(q.PIXEL_PACK_BUFFER,Nt.byteLength,q.STREAM_READ),q.readPixels(z,et,J,Q,_t.convert(_e),_t.convert(Fe),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Cn=j!==null?de.get(j).__webglFramebuffer:null;Lt.bindFramebuffer(q.FRAMEBUFFER,Cn);let sn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await xm(q,sn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Be),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Nt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Be),q.deleteSync(sn),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,z=null,et=0){let J=Math.pow(2,-et),Q=Math.floor(C.image.width*J),Nt=Math.floor(C.image.height*J),Yt=z!==null?z.x:0,It=z!==null?z.y:0;ye.setTexture2D(C,0),q.copyTexSubImage2D(q.TEXTURE_2D,et,0,0,Yt,It,Q,Nt),Lt.unbindTexture()},this.copyTextureToTexture=function(C,z,et=null,J=null,Q=0,Nt=0){let Yt,It,Gt,jt,_e,Fe,Jt,Be,Cn,sn=C.isCompressedTexture?C.mipmaps[Nt]:C.image;if(et!==null)Yt=et.max.x-et.min.x,It=et.max.y-et.min.y,Gt=et.isBox3?et.max.z-et.min.z:1,jt=et.min.x,_e=et.min.y,Fe=et.isBox3?et.min.z:0;else{let He=Math.pow(2,-Q);Yt=Math.floor(sn.width*He),It=Math.floor(sn.height*He),C.isDataArrayTexture?Gt=sn.depth:C.isData3DTexture?Gt=Math.floor(sn.depth*He):Gt=1,jt=0,_e=0,Fe=0}J!==null?(Jt=J.x,Be=J.y,Cn=J.z):(Jt=0,Be=0,Cn=0);let Qe=_t.convert(z.format),Zn=_t.convert(z.type),Kt;z.isData3DTexture?(ye.setTexture3D(z,0),Kt=q.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ye.setTexture2DArray(z,0),Kt=q.TEXTURE_2D_ARRAY):(ye.setTexture2D(z,0),Kt=q.TEXTURE_2D),Lt.activeTexture(q.TEXTURE0),Lt.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,z.flipY),Lt.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Lt.pixelStorei(q.UNPACK_ALIGNMENT,z.unpackAlignment);let ai=Lt.getParameter(q.UNPACK_ROW_LENGTH),ze=Lt.getParameter(q.UNPACK_IMAGE_HEIGHT),Hr=Lt.getParameter(q.UNPACK_SKIP_PIXELS),Jn=Lt.getParameter(q.UNPACK_SKIP_ROWS),gc=Lt.getParameter(q.UNPACK_SKIP_IMAGES);Lt.pixelStorei(q.UNPACK_ROW_LENGTH,sn.width),Lt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,sn.height),Lt.pixelStorei(q.UNPACK_SKIP_PIXELS,jt),Lt.pixelStorei(q.UNPACK_SKIP_ROWS,_e),Lt.pixelStorei(q.UNPACK_SKIP_IMAGES,Fe);let sr=C.isDataArrayTexture||C.isData3DTexture,kr=z.isDataArrayTexture||z.isData3DTexture;if(C.isDepthTexture){let He=de.get(C),Vn=de.get(z),Zi=de.get(He.__renderTarget),pn=de.get(Vn.__renderTarget);Lt.bindFramebuffer(q.READ_FRAMEBUFFER,Zi.__webglFramebuffer),Lt.bindFramebuffer(q.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let On=0;On<Gt;On++)sr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,de.get(C).__webglTexture,Q,Fe+On),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,de.get(z).__webglTexture,Nt,Cn+On)),q.blitFramebuffer(jt,_e,jt+Yt,_e+It,Jt,Be,Jt+Yt,Be+It,q.DEPTH_BUFFER_BIT,q.NEAREST);Lt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||de.has(C)){let He=de.get(C),Vn=de.get(z);Lt.bindFramebuffer(q.READ_FRAMEBUFFER,I),Lt.bindFramebuffer(q.DRAW_FRAMEBUFFER,U);for(let Zi=0;Zi<Gt;Zi++)sr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,He.__webglTexture,Q,Fe+Zi):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,He.__webglTexture,Q),kr?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Vn.__webglTexture,Nt,Cn+Zi):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Vn.__webglTexture,Nt),Q!==0?q.blitFramebuffer(jt,_e,jt+Yt,_e+It,Jt,Be,Jt+Yt,Be+It,q.COLOR_BUFFER_BIT,q.NEAREST):kr?q.copyTexSubImage3D(Kt,Nt,Jt,Be,Cn+Zi,jt,_e,Yt,It):q.copyTexSubImage2D(Kt,Nt,Jt,Be,jt,_e,Yt,It);Lt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else kr?C.isDataTexture||C.isData3DTexture?q.texSubImage3D(Kt,Nt,Jt,Be,Cn,Yt,It,Gt,Qe,Zn,sn.data):z.isCompressedArrayTexture?q.compressedTexSubImage3D(Kt,Nt,Jt,Be,Cn,Yt,It,Gt,Qe,sn.data):q.texSubImage3D(Kt,Nt,Jt,Be,Cn,Yt,It,Gt,Qe,Zn,sn):C.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Nt,Jt,Be,Yt,It,Qe,Zn,sn.data):C.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Nt,Jt,Be,sn.width,sn.height,Qe,sn.data):q.texSubImage2D(q.TEXTURE_2D,Nt,Jt,Be,Yt,It,Qe,Zn,sn);Lt.pixelStorei(q.UNPACK_ROW_LENGTH,ai),Lt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ze),Lt.pixelStorei(q.UNPACK_SKIP_PIXELS,Hr),Lt.pixelStorei(q.UNPACK_SKIP_ROWS,Jn),Lt.pixelStorei(q.UNPACK_SKIP_IMAGES,gc),Nt===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&q.generateMipmap(Kt),Lt.unbindTexture()},this.initRenderTarget=function(C){de.get(C).__webglFramebuffer===void 0&&ye.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ye.setTextureCube(C,0):C.isData3DTexture?ye.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ye.setTexture2DArray(C,0):ye.setTexture2D(C,0),Lt.unbindTexture()},this.resetState=function(){G=0,X=0,j=null,Lt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),e.unpackColorSpace=De._getUnpackColorSpace()}};var gu=class extends Vs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ve;t.deleteAttribute("uv");let e=new te({side:En}),i=new te,s=new tn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new D(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ur(t,i,6),a=new rn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new D(t,sa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new D(t,sa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new D(t,sa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new D(t,sa(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new D(t,sa(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new D(t,sa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function sa(n){return new ll({color:0,emissive:16777215,emissiveIntensity:n})}var xu=class{constructor(t,e={}){this.enabled=!0;let i=e.defaultThickness!==void 0?e.defaultThickness:.003,s=new qt().fromArray(e.defaultColor!==void 0?e.defaultColor:[0,0,0]),r=e.defaultAlpha!==void 0?e.defaultAlpha:1,o=e.defaultKeepAlive!==void 0?e.defaultKeepAlive:!1,a={},l=60,c={},h={},u={outlineThickness:{value:i},outlineColor:{value:s},outlineAlpha:{value:r}},d=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),f=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function p(){return new cn({type:"OutlineEffect",uniforms:Ni.merge([Ot.fog,Ot.displacementmap,u]),vertexShader:d,fragmentShader:f,side:En})}function g(v){let A=a[v.uuid];return A===void 0&&(A={material:p(),used:!0,keepAlive:o,count:0},a[v.uuid]=A),A.used=!0,A.material}function m(v){let A=g(v);return c[A.uuid]=v,S(A,v),A}function x(v){let A=v.geometry,P=A!==void 0&&A.attributes.normal!==void 0;return v.isMesh===!0&&v.material!==void 0&&P===!0}function M(v){if(x(v)!==!1){if(Array.isArray(v.material))for(let A=0,P=v.material.length;A<P;A++)v.material[A]=m(v.material[A]);else v.material=m(v.material);h[v.uuid]=v.onBeforeRender,v.onBeforeRender=E}}function w(v){if(x(v)!==!1){if(Array.isArray(v.material))for(let A=0,P=v.material.length;A<P;A++)v.material[A]=c[v.material[A].uuid];else v.material=c[v.material.uuid];v.onBeforeRender=h[v.uuid]}}function E(v,A,P,L,B){let V=c[B.uuid];V!==void 0&&R(B,V)}function R(v,A){let P=A.userData.outlineParameters;v.uniforms.outlineAlpha.value=A.opacity,P!==void 0&&(P.thickness!==void 0&&(v.uniforms.outlineThickness.value=P.thickness),P.color!==void 0&&v.uniforms.outlineColor.value.fromArray(P.color),P.alpha!==void 0&&(v.uniforms.outlineAlpha.value=P.alpha)),A.displacementMap&&(v.uniforms.displacementMap.value=A.displacementMap,v.uniforms.displacementScale.value=A.displacementScale,v.uniforms.displacementBias.value=A.displacementBias)}function S(v,A){if(v.name==="invisible")return;let P=A.userData.outlineParameters;v.fog=A.fog,v.toneMapped=A.toneMapped,v.premultipliedAlpha=A.premultipliedAlpha,v.displacementMap=A.displacementMap,P!==void 0?(A.visible===!1?v.visible=!1:v.visible=P.visible!==void 0?P.visible:!0,v.transparent=P.alpha!==void 0&&P.alpha<1?!0:A.transparent,P.keepAlive!==void 0&&(a[A.uuid].keepAlive=P.keepAlive)):(v.transparent=A.transparent,v.visible=A.visible),(A.wireframe===!0||A.depthTest===!1)&&(v.visible=!1),A.clippingPlanes&&(v.clipping=!0,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.clipShadows=A.clipShadows),v.version=A.version}function b(){let v;v=Object.keys(c);for(let A=0,P=v.length;A<P;A++)c[v[A]]=void 0;v=Object.keys(h);for(let A=0,P=v.length;A<P;A++)h[v[A]]=void 0;v=Object.keys(a);for(let A=0,P=v.length;A<P;A++){let L=v[A];a[L].used===!1?(a[L].count++,a[L].keepAlive===!1&&a[L].count>l&&delete a[L]):(a[L].used=!1,a[L].count=0)}}this.render=function(v,A){if(this.enabled===!1){t.render(v,A);return}let P=t.autoClear;t.autoClear=this.autoClear,t.render(v,A),t.autoClear=P,this.renderOutline(v,A)},this.renderOutline=function(v,A){let P=t.autoClear,L=v.matrixWorldAutoUpdate,B=v.background,V=t.shadowMap.enabled;v.matrixWorldAutoUpdate=!1,v.background=null,t.autoClear=!1,t.shadowMap.enabled=!1,v.traverse(M),t.render(v,A),v.traverse(w),b(),v.matrixWorldAutoUpdate=L,v.background=B,t.autoClear=P,t.shadowMap.enabled=V},this.setSize=function(v,A){t.setSize(v,A)}}};var ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},B_=new jr(-1,1,1,-1,0,1),Bf=class extends je{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}},O_=new Bf,bs=class{constructor(t){this._mesh=new D(O_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,B_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var yu=class extends di{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof cn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ni.clone(t.uniforms),this.material=new cn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new bs(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Il=class extends di{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Mu=class extends di{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var vu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new lt);this._width=i.width,this._height=i.height,e=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yu(ra),this.copyPass.material.blending=ns,this.timer=new dl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Il!==void 0&&(o instanceof Il?i=!0:o instanceof Mu&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _u=class extends di{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new qt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var lg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var oa=class n extends di{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new qt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(r,o,{type:Ln,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new bn(r,o,{type:Ln,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new bn(r,o,{type:Ln,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=lg;this.highPassUniforms=Ni.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ni.clone(ra.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader,premultipliedAlpha:!0,blending:Xs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new qt,this._oldClearAlpha=1,this._basic=new Wn,this._fsQuad=new bs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new lt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new cn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};oa.BlurDirectionX=new lt(1,0);oa.BlurDirectionY=new lt(0,1);var Ll={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var bu=class extends di{constructor(t,e,i){super(),this.scene=t,this.camera=e;let s=i.focus!==void 0?i.focus:1,r=i.aperture!==void 0?i.aperture:.025,o=i.maxblur!==void 0?i.maxblur:1;this._renderTargetDepth=new bn(1,1,{minFilter:gn,magFilter:gn,type:Ln}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new $o,this._materialDepth.depthPacking=uf,this._materialDepth.blending=ns;let a=Ni.clone(Ll.uniforms);a.tDepth.value=this._renderTargetDepth.texture,a.focus.value=s,a.aspect.value=e.aspect,a.aperture.value=r,a.maxblur.value=o,a.nearClip.value=e.near,a.farClip.value=e.far,this.materialBokeh=new cn({defines:Object.assign({},Ll.defines),uniforms:a,vertexShader:Ll.vertexShader,fragmentShader:Ll.fragmentShader}),this.uniforms=a,this._fsQuad=new bs(this.materialBokeh),this._oldClearColor=new qt}render(t,e,i){this.scene.overrideMaterial=this._materialDepth,t.getClearColor(this._oldClearColor);let s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this._renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this._fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this._renderTargetDepth.setSize(t,e)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var Dl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Eu=class extends di{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ni.clone(Dl.uniforms),this.material=new Yo({name:Dl.name,uniforms:this.uniforms,vertexShader:Dl.vertexShader,fragmentShader:Dl.fragmentShader}),this._fsQuad=new bs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},De.getTransfer(this._outputColorSpace)===Ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===pl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wu=1337;function Mt(){return wu=wu*16807%2147483647,(wu-1)/2147483646}function Sn(n){wu=n}function H_(n,t){let e=new Float32Array(n*n);Sn(t);for(let i=0;i<e.length;i++)e[i]=Mt();return(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),h=l*l*(3-2*l),u=n,d=(r%u+u)%u,f=(o%u+u)%u,p=(d+1)%u,g=(f+1)%u,m=e[f*u+d],x=e[f*u+p],M=e[g*u+d],w=e[g*u+p];return m+(x-m)*c+(M-m)*h+(m-x-M+w)*c*h}}function Se(n,t=4,e=5){let i=[];for(let s=0;s<e;s++)i.push({f:H_(t<<s,n+s*97),p:t<<s});return(s,r)=>{let o=0,a=.5,l=0;for(let c of i)o+=c.f(s*c.p,r*c.p)*a,l+=a,a*=.5;return o/l}}var Of={},Su=4;function cg(n){Su=n}function Ze(n,t,e,i={}){if(Of[n])return Of[n];let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createImageData(t,t),a=new Float32Array(t*t);for(let g=0;g<t;g++)for(let m=0;m<t;m++){let x=e(m/t,g/t,m,g),M=(g*t+m)*4;o.data[M]=Math.max(0,Math.min(255,x.r*255)),o.data[M+1]=Math.max(0,Math.min(255,x.g*255)),o.data[M+2]=Math.max(0,Math.min(255,x.b*255)),o.data[M+3]=x.a===void 0?255:x.a*255,a[g*t+m]=x.h===void 0?.5:x.h}r.putImageData(o,0,0),i.post&&i.post(r,t);let l=new es(s);l.colorSpace=Mn,l.wrapS=l.wrapT=ps,l.anisotropy=Su;let c=document.createElement("canvas");c.width=c.height=t;let h=c.getContext("2d"),u=h.createImageData(t,t),d=i.normalStrength||2;for(let g=0;g<t;g++)for(let m=0;m<t;m++){let x=a[g*t+(m-1+t)%t],M=a[g*t+(m+1)%t],w=a[(g-1+t)%t*t+m],E=a[(g+1)%t*t+m],R=(x-M)*d,S=(w-E)*d,b=1,v=Math.hypot(R,S,b);R/=v,S/=v,b/=v;let A=(g*t+m)*4;u.data[A]=(R*.5+.5)*255,u.data[A+1]=(-S*.5+.5)*255,u.data[A+2]=(b*.5+.5)*255,u.data[A+3]=255}h.putImageData(u,0,0);let f=new es(c);f.wrapS=f.wrapT=ps,f.anisotropy=Su;let p={map:l,normalMap:f,canvas:s};return Of[n]=p,p}var oe=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],Hf=(n,t,e)=>n+(t-n)*e,Oe=(n,t,e)=>[Hf(n[0],t[0],e),Hf(n[1],t[1],e),Hf(n[2],t[2],e)],fi=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),wn=n=>n-Math.floor(n);function Ve(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}var tt={};function hg(n=1){let t=n>=1?512:256,e=n>=1?256:128;{let r=Se(11,4,6),o=Se(12,16,3);tt.grass=Ze("grass",t,(a,l)=>{let c=r(a,l),h=o(a,l),u=Ve(Math.floor(a*180),Math.floor(l*60+Ve(Math.floor(a*180),3)*10)),d=Oe(oe(4156970),oe(8037962),fi(c*1.3-.15+u*.25)),f=Oe(d,oe(9075274),fi((h-.62)*3)*.5);return{r:f[0],g:f[1],b:f[2],h:u*.6+c*.4}},{normalStrength:3})}{let r=Se(21,8,5),o=Se(22,4,4);tt.asphalt=Ze("asphalt",t,(a,l,c,h)=>{let u=Ve(c,h),d=r(a,l),f=Math.abs(o(a,l)-.5)<.006?1:0,p=.2+d*.12+(u>.93?.12:0)-(u<.05?.06:0)-f*.12;return{r:p,g:p,b:p*1.04,h:u*.5+d*.3-f*.6}},{normalStrength:2.5})}{let r=Se(31,8,5);tt.concrete=Ze("concrete",e*2,(o,a,l,c)=>{let h=r(o,a),u=Ve(l,c),d=wn(o*2)<.012||wn(a*2)<.012?1:0,f=wn(o*4)-.5,p=wn(a*4)-.5,g=Math.hypot(f,p)<.025?1:0,m=Math.pow(Ve(Math.floor(o*64),3),6)*fi(1-wn(a*2)*1.6)*.12,x=.62+h*.15+u*.05-d*.25-g*.3-m;return{r:x,g:x*.98,b:x*.94,h:h*.5+u*.2-d*.7-g*.8}})}{let r=Se(41,8,4);tt.brick=Ze("brick",t,(o,a,l,c)=>{let d=Math.floor(a*16),f=d%2*.5,p=wn(o*8+f),g=wn(a*16),m=Math.floor(o*8+f)+d*31,x=p<.05||g<.1,M=Ve(m,7),w=Ve(m,13),E=Oe(oe(9059112),oe(11556666),M);w>.9?E=Oe(E,oe(4857880),.55):w<.08&&(E=Oe(E,oe(13141098),.4));let R=r(o,a),S=Ve(l,c);if(x){let L=.62+R*.1+S*.06;return{r:L,g:L*.96,b:L*.9,h:.05+S*.08}}let b=Math.min((p-.05)/.06,(1-p)/.04,(g-.1)/.12,(1-g)/.08),v=Ve(Math.floor(o*160),Math.floor(a*160))>.93&&b<1.2?1:0,A=Oe(E,oe(5909022),fi(R-.45)*1.2);A=Oe(A,oe(15260872),fi((r(o*.5+.2,a*.5)-.62)*3)*.35);let P=(S-.5)*.08;return{r:A[0]+P-v*.08,g:A[1]+P-v*.06,b:A[2]+P-v*.05,h:.45+Math.min(1,b)*.3+R*.2+S*.1-v*.35}},{normalStrength:3})}{let r=Se(51,4,5);tt.siding=Ze("siding",e*2,(o,a,l,c)=>{let u=wn(a*10),d=.82+u*.18-(u>.94?.3:0),f=r(o*.5,a)*.08+Ve(l,Math.floor(c/3))*.03,p=fi(d+f-.05);return{r:p,g:p,b:p,h:u}},{normalStrength:4})}{let r=Se(61,8,5);tt.plaster=Ze("plaster",e,(o,a)=>{let l=r(o,a),c=.86+l*.12;return{r:c,g:c,b:c,h:l}},{normalStrength:1.2})}{let r=Se(71,2,5);tt.floor=Ze("floor",t,(o,a,l,c)=>{let u=Math.floor(a*8),d=Ve(u,1),f=wn(o*2+d),p=Math.floor(o*2+d)*13+u,g=wn(a*8)<.03||f<.006,m=r(o*.5+p*.17,a*6+p*.3),x=Ve(p,4),M=Oe(Oe(oe(8014376),oe(11038783),x),oe(4860436),fi(m-.45)*1.5+Math.sin(m*60)*.06);return g?{r:M[0]*.5,g:M[1]*.5,b:M[2]*.5,h:0}:{r:M[0],g:M[1],b:M[2],h:.6+m*.2}})}{let r=Se(81,8,4);tt.roof=Ze("roof",e*2,(o,a,l,c)=>{let u=Math.floor(a*12),d=wn(a*12),f=wn(o*8+u%2*.5),p=Math.floor(o*8+u%2*.5)+u*17,m=.25+Ve(p,3)*.12+r(o,a)*.1-(d>.9?.15:0)-(f<.03?.1:0)+d*.06;return{r:m*1.05,g:m*.92,b:m*.88,h:d}},{normalStrength:4})}{let r=Se(91,2,5);tt.wood=Ze("wood",e*2,(o,a,l,c)=>{let h=r(o*.3,a*4),u=Math.sin((h*30+o*3)*3)*.5+.5,d=Oe(oe(11567184),oe(8015920),u*.6+Ve(l,c)*.08);return{r:d[0],g:d[1],b:d[2],h:u*.6}},{normalStrength:2})}{let r=Se(92,2,5),o=Se(93,8,4);tt.paintwood=Ze("paintwood",e,(a,l,c,h)=>{let u=r(a*.3,l*4),d=o(a,l)>.8,f=Math.sin(u*60)*.5+.5;if(d){let g=Oe(oe(9071178),oe(6965808),f);return{r:g[0],g:g[1],b:g[2],h:.2}}let p=.88+f*.05;return{r:p,g:p,b:p*.97,h:.6+f*.1}},{normalStrength:2})}{let r=Se(101,8,6);tt.dirt=Ze("dirt",e*2,(o,a,l,c)=>{let h=r(o,a),u=Ve(l,c),d=Oe(oe(4862496),oe(8018490),h*1.2-.1+u*.1),f=u>.985;return{r:f?.6:d[0],g:f?.58:d[1],b:f?.55:d[2],h:h+(f?.5:0)}},{normalStrength:3})}tt.tile=Ze("tile",e,(r,o,a,l)=>{let c=wn(r*4)<.04||wn(o*4)<.04,h=(Math.floor(r*4)+Math.floor(o*4))%2,u=c?.55:h?.92:.2;return{r:u,g:u,b:u*(h?.98:1.1),h:c?0:1}});{let r=Se(111,16,3);tt.carpet=Ze("carpet",e,(o,a,l,c)=>{let h=r(o,a)*.4+Ve(l,c)*.6,u=.75+h*.25;return{r:u,g:u,b:u,h}},{normalStrength:1.5})}{let r=Se(121,4,5),o=Se(122,32,2);tt.metal=Ze("metal",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l*.05),f=.82+d*.12-fi(u-.6)*.8;return{r:f,g:f,b:f,h:d*.3+u*.2}},{normalStrength:1})}{let r=Se(131,4,6);tt.rust=Ze("rust",e,(o,a)=>{let l=r(o,a),c=Oe(oe(5921370),oe(9062946),fi(l*1.6-.5));return{r:c[0],g:c[1],b:c[2],h:l}},{normalStrength:2})}{let r=Se(141,4,5);tt.bark=Ze("bark",e,(o,a,l,c)=>{let h=r(o*2,a*.4),u=Math.abs(Math.sin(o*40+h*8)),d=Oe(oe(3023384),oe(6968384),u*.7+h*.3);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:4})}{let r=Se(151,8,4);tt.leaf=Ze("leaf",e,(o,a,l,c)=>{let h=r(o,a),u=Ve(l>>2,c>>2),d=Oe(oe(2775582),oe(6986298),h*.8+u*.4);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:3})}{let r=Se(155,8,5);tt.hedge=Ze("hedge",e,(o,a,l,c)=>{let h=r(o,a),u=Ve(l>>1,c>>1),d=Oe(oe(1981974),oe(5933618),h*.9+u*.3-.1);return{r:d[0],g:d[1],b:d[2],h:h*.5+u*.5}},{normalStrength:5})}{let r=Se(201,4,5),o=Se(202,16,3);tt.carrot=Ze("carrot",t,(a,l,c,h)=>{let u=Math.pow(Math.abs(Math.sin(l*Math.PI*22+r(a,l)*9)),10)*(.4+r(a*3,l)*.8),d=o(a,l),f=Ve(Math.floor(a*24),Math.floor(l*40))>.93&&wn(l*40)<.35?1:0,p=Oe(oe(15759898),oe(14177804),d*.8+u*.35),g=Math.pow(Math.abs(Math.sin(a*Math.PI*9+r(a,l*.3)*4)),30)*.15,m=(Ve(Math.floor(a*260),Math.floor(l*6))-.5)*.06,x=Oe(p,oe(9062928),u*.35+f*.5+g);return{r:x[0]+m,g:x[1]+m*.6,b:x[2],h:.7-u*.5-f*.4+d*.1+m}},{normalStrength:4})}{let r=Se(211,4,5),o=Se(212,32,2);tt.tomato=Ze("tomato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Math.pow(Math.abs(Math.sin(a*Math.PI*6)),8)*.1,p=Oe(oe(14164762),oe(11014670),u*.7+f),g=fi(1-l*6),m=Oe(p,oe(12099616),g*.25),x=d>.75?.035:0,M=l<.22?Math.pow(Math.abs(Math.sin(a*Math.PI*18+u*3)),14)*(1-l/.22)*.25:0,w=Oe(m,oe(15755834),M+fi(.3-l*2)*.2),E=wn(a*140)-.5,R=wn(l*90)-.5,S=Ve(Math.floor(a*140),Math.floor(l*90))>.97&&Math.hypot(E,R)<.22?.07:0;return{r:w[0]+x+S,g:w[1]+x*.6+S,b:w[2]+S*.5,h:u*.3+d*.2-M*.3}},{normalStrength:1.2})}{let r=Se(221,4,6),o=Se(222,16,3);tt.potato=Ze("potato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Ve(c,h),p=Oe(oe(13148266),oe(10122308),u*1.1-.1+f*.1);p=Oe(p,oe(6965802),fi((d-.6)*3)*.6);let g=wn(a*5),m=wn(l*4),x=Ve(Math.floor(a*5),Math.floor(l*4)),M=Math.hypot(g-.3-x*.4,m-.5),w=x>.55&&M<.06?1-M/.06:0;p=Oe(p,oe(4861976),w*.8);let E=Math.pow(1-Math.abs(o(a*2.3,l*2.3)-.5)*2,18);p=Oe(p,oe(8018484),E*.45);let R=fi((r(a*3+.3,l*3)-.62)*4);return p=Oe(p,oe(5915696),R*.5),{r:p[0],g:p[1],b:p[2],h:u*.5+d*.3-w*.6+f*.1+E*.2}},{normalStrength:4})}{let r=Se(231,4,5);tt.pepper=Ze("pepper",t,(o,a,l,c)=>{let h=r(o,a),u=Math.pow(Math.abs(Math.cos(o*Math.PI*4)),10),d=Math.pow(Math.abs(Math.sin(o*Math.PI*4)),6)*.12,f=Oe(oe(2787870),oe(1268240),h*.7+u*.4-d),p=Ve(l>>1,c>>1)>.992?.1:0,g=a<.12?(1-a/.12)*.25:0,m=Oe(f,oe(5939264),g);return{r:m[0]+p*.5,g:m[1]+p,b:m[2]+p*.4,h:h*.2-u*.3+p}},{normalStrength:1.5})}{let r=Se(241,8,4);tt.veggreen=Ze("veggreen",e,(o,a,l,c)=>{let h=r(o,a),u=Math.abs(wn(o*6)-.5)<.04?.15:0,d=Oe(oe(3836452),oe(1989140),h);return{r:d[0]+u,g:d[1]+u,b:d[2]+u*.5,h:h-u}},{normalStrength:2})}{let r=Se(251,8,5),o=Se(252,32,2);tt.skin=Ze("skin",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Oe(oe(15775888),oe(13140058),u*.55+d*.25);return{r:f[0],g:f[1],b:f[2],h:d*.4+u*.2}},{normalStrength:1.2})}let i=(r,o,a,l)=>{tt[r]=Ze(r,e,(c,h,u,d)=>{let f=c-.5,p=h-.5,g=Math.hypot(f,p)*2,m=Math.atan2(p,f),x=Oe(oe(o),oe(a),fi(g)),M=.5;if(l==="carrot"&&(g<.45&&(x=Oe(x,oe(16298048),.6)),M=Math.abs(Math.sin(m*10))*.2),l==="tomato"){let w=Math.cos(m*3)*.5+.5;g>.35&&g<.78&&w>.4&&(x=Oe(oe(15228992),oe(15777888),.3),Ve(Math.floor(c*40),Math.floor(h*40))>.8&&(x=oe(16310432),M=1))}return l==="pepper"&&g<.3&&Ve(Math.floor(c*50),Math.floor(h*50))>.7&&(x=oe(15788208),M=1),g>.95&&(x=Oe(x,oe(0),.2)),{r:x[0],g:x[1],b:x[2],h:M}},{normalStrength:2})};i("fleshCarrot",16292400,15233050,"carrot"),i("fleshTomato",15751738,13115418,"tomato"),i("fleshPotato",16048808,15257744,"potato"),i("fleshPepper",14217392,4890672,"pepper");{let r=Se(301,32,3);tt.polymer=Ze("polymer",e,(o,a,l,c)=>{let h=Ve(l,c)*.5+r(o,a)*.5,u=.85+h*.15;return{r:u,g:u,b:u,h}},{normalStrength:2.5})}{let r=Se(311,4,4);tt.gunmetal=Ze("gunmetal",e,(o,a,l,c)=>{let h=Ve(Math.floor(l/1),Math.floor(c/24))*.1,u=Math.abs(Math.sin(o*30+a*90+r(o,a)*20))>.995?.25:0,d=fi(r(o,a)-.65)*1.5,f=.85+h+u+d;return{r:f,g:f,b:f,h:h+u}},{normalStrength:1.2})}tt.tire=Ze("tire",e,(r,o,a,l)=>{let c=Math.abs(o-.5)<.22,h=wn(r*48+(Math.abs(o-.5)<.08?.5:0)),u=c&&(h<.18||Math.abs(o-.5)>.2||Math.abs(Math.abs(o-.5)-.08)<.012),d=Math.abs(o-.5)>.3&&Ve(Math.floor(r*90),7)>.6&&Math.abs(Math.abs(o-.5)-.38)<.03,f=.1+(u?-.05:0)+(d?.06:0)+Ve(a,l)*.02;return{r:f,g:f,b:f,h:u?.1:.7}},{normalStrength:4});let s=(r,o,a,l)=>{let c=Se(r.length*13+500,4,4),h=Se(r.length*17+600,4,4);tt[r]=Ze(r,e,(u,d,f,p)=>{let g=u,m=d;l&&(g=Math.floor(u*48)/48,m=Math.floor(d*48)/48);let x=c(g*a,m*a),M=h(g*a+.3,m*a),w=x>.56?1:M>.58?2:x<.4?3:0,E=oe(o[w]),R=Ve(f,p)*.05;return{r:E[0]+R,g:E[1]+R,b:E[2]+R,h:w*.1+R}},{normalStrength:1})};return s("camoWood",[5925434,3818532,9075280,2237978],1,!1),s("camoDesert",[13152384,10521178,14733480,8021056],1,!1),s("camoCarrot",[15759898,13129228,3836452,16752704],1,!0),s("camoUrban",[9080466,5922402,13159632,2764338],1,!0),tt}function wi(n,t={}){let e=t.w||256,i=t.h||256,s=document.createElement("canvas");s.width=e,s.height=i;let r=s.getContext("2d");t.bg&&(r.fillStyle=t.bg,r.fillRect(0,0,e,i)),t.draw&&t.draw(r,e,i),r.fillStyle=t.color||"#fff",r.font=`${t.weight||900} ${t.size||180}px ${t.font||"system-ui, sans-serif"}`,r.textAlign="center",r.textBaseline="middle",t.stroke&&(r.lineWidth=t.strokeW||10,r.strokeStyle=t.stroke,r.strokeText(n,e/2,i/2+(t.dy||0))),r.fillText(n,e/2,i/2+(t.dy||0));let o=new es(s);return o.colorSpace=Mn,o.anisotropy=Su,o}function Tu(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new je;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=ug(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][d]);let p=ug(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function ug(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new vn(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let g=h.getComponent(d,p);a.setComponent(d+u,p,g)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function nt(n,t,e,i=1,s=[0,0,0]){let r=new ve(n,t,e),o=r.attributes.uv,a=[[e,t,s[2],s[1]],[e,t,-s[2],s[1]],[n,e,s[0],-s[2]],[n,e,s[0],s[2]],[n,t,s[0],s[1]],[n,t,-s[0],s[1]]];for(let l=0;l<6;l++){let[c,h,u,d]=a[l];for(let f=0;f<4;f++){let p=l*4+f;o.setXY(p,(o.getX(p)*c+u)/i,(o.getY(p)*h+d)/i)}}return r}function pi(n,t,e){let i=n.attributes.uv;for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*t,i.getY(s)*e);return n}var Ru=class{constructor(){this.buckets=new Map,this.colliders=[],this.noShadow=new Set}addGeo(t,e,i){let s=e.index?e.toNonIndexed():e.clone();i&&s.applyMatrix4(i);for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);s.attributes.uv||s.setAttribute("uv",new vn(new Float32Array(s.attributes.position.count*2),2)),this.buckets.has(t)||this.buckets.set(t,[]),this.buckets.get(t).push(s)}box(t,e,i,s,r,o,a,l={}){let c=nt(r,o,a,l.uv||1,l.worldUV===!1?[0,0,0]:[e-r/2,i-o/2,s-a/2]),h=new $t;(l.rotY||l.rotX||l.rotZ)&&h.makeRotationFromEuler(new Vi(l.rotX||0,l.rotY||0,l.rotZ||0)),h.setPosition(e,i,s),this.addGeo(t,c,h),l.collide!==!1&&this.col(e-r/2,i-o/2,s-a/2,e+r/2,i+o/2,s+a/2,l)}col(t,e,i,s,r,o,a={}){this.colliders.push({min:new F(Math.min(t,s),Math.min(e,r),Math.min(i,o)),max:new F(Math.max(t,s),Math.max(e,r),Math.max(i,o)),bullet:a.bullet!==!1,move:a.move!==!1,surf:a.surf||"concrete"})}bake(t){t.updateMatrixWorld(!0),t.traverse(e=>{e.isMesh&&this.addGeo(e.material,e.geometry,e.matrixWorld)})}finish(t){let e=[];for(let[i,s]of this.buckets){let r=Tu(s,!1);r.computeBoundingSphere();let o=new D(r,i);o.castShadow=!i.userData.noCast,o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o),e.push(o)}return e}},m3=new F;function dg(n,t,e,i){let s=0,r=i,o=-1,a=0;for(let l=0;l<3;l++){let c=l===0?n.x:l===1?n.y:n.z,h=l===0?t.x:l===1?t.y:t.z,u=l===0?e.min.x:l===1?e.min.y:e.min.z,d=l===0?e.max.x:l===1?e.max.y:e.max.z;if(Math.abs(h)<1e-9){if(c<u||c>d)return null;continue}let f=(u-c)/h,p=(d-c)/h,g=-1;if(f>p){let m=f;f=p,p=m,g=1}if(f>s&&(s=f,o=l,a=g),p<r&&(r=p),s>r)return null}return{t:s,axis:o,sign:a}}function un(n,t=[],e={}){let i=new Set(t.filter(Boolean));n.updateMatrixWorld(!0);let s=new $t().copy(n.matrixWorld).invert(),r=new Map,o=[],a=l=>{for(let c of l.children)i.has(c)||(c.isMesh&&!c.isInstancedMesh&&o.push(c),a(c))};if(a(n),!(o.length<2)){for(let l of o){let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let h of Object.keys(c.attributes))["position","normal","uv"].includes(h)||c.deleteAttribute(h);c.attributes.uv||c.setAttribute("uv",new vn(new Float32Array(c.attributes.position.count*2),2)),c.applyMatrix4(new $t().multiplyMatrices(s,l.matrixWorld)),r.has(l.material)||r.set(l.material,[]),r.get(l.material).push(c)}for(let l of o)for(let c of[...l.children])o.includes(c)||l.parent.attach(c);for(let l of o)l.parent&&l.parent.remove(l);for(let[l,c]of r){let h=new D(Tu(c,!1),l);h.castShadow=e.shadow!==!1,h.receiveShadow=!0,n.add(h)}}}var Fi={town:{id:"town",name:"\u30D9\u30B8\u30BF\u30A6\u30F3",desc:`\u901A\u308A\u3092\u631F\u3093\u30602\u8ED2\u306E\u5BB6\u3002
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
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u6D17\u6FEF\u7269\u306E\u5E72\u3057\u5834(A)\u3068\u3054\u307F\u96C6\u7A4D\u6240(B)\u3002`,map:{minX:-23.4,maxX:23.4,minZ:-22.4,maxZ:22.4},sites:{A:[-14.4,-17.8],B:[16.4,-15.6]},spawns:{south:[[-2.5,19.6],[2.5,19.8]],north:[[-2.5,-19.6],[2.5,-19.8]]},holds:{A:{def:[[-22.4,-16.4],[-11.2,-20.4],[-11.2,-12],[-18,-12.4]],att:[[-14.5,-9.1],[-19.5,-9.1]]},B:{def:[[21,-15.6],[14.2,-18.4],[10.6,-18.6],[17,-11.6]],att:[[14.8,-9.1],[19.5,-9.1]]}},mm:[[-8,-8,8,8,"#c8c0b0"],[-23.6,-8,-15.5,-1.2,"#d88a6a"],[-23.6,1.2,-15.5,8,"#8ab0d0"],[-13.5,-8,-8,-2,"#e0cc80"],[-13.5,2,-8,8,"#a8c890"],[8,-8,13.5,-3,"#d0a0c0"],[8,-.6,13.5,8,"#e8dcc8"],[15.5,-8,23.6,.4,"#e0cc80"],[15.5,2.8,23.6,8,"#d88a6a"],[-5,-14.2,5,-10.6,"#a8c890"],[-1.6,-1.6,1.6,1.6,"#3a9ac8"],[-23.6,12,-14,20,"#e8dcc8"],[13,13,23.6,20,"#a8c890"],[-1.2,9.6,1.2,11.6,"#e0cc80"],[-23.6,-22.8,-19.6,-18,"#d0a0c0"],[19.6,-22.8,23.6,-17.6,"#8ab0d0"]],lobby:[-3.5,15.5],ground:"concrete"}},re={},We={A:new F,B:new F},Hl={south:[],north:[]},en=Fi.town;function Eg(n){en=Fi[n]||Fi.town,Object.assign(re,en.map);for(let t of["A","B"])We[t].set(en.sites[t][0],0,en.sites[t][1]);for(let t of["south","north"])Hl[t]=en.spawns[t].map(([e,i])=>new F(e,0,i));return en}Eg("town");var ae=n=>new te(n),y={};function k_(){let n=(i,s)=>{let r=i.map.clone(),o=i.normalMap.clone();return r.needsUpdate=o.needsUpdate=!0,s&&(r.repeat.set(s,s),o.repeat.set(s,s)),[r,o]},[t,e]=[tt.grass.map,tt.grass.normalMap];y.grass=ae({map:tt.grass.map,normalMap:tt.grass.normalMap,roughness:.95,color:15269856}),y.asphalt=ae({map:tt.asphalt.map,normalMap:tt.asphalt.normalMap,roughness:.9}),y.concrete=ae({map:tt.concrete.map,normalMap:tt.concrete.normalMap,roughness:.85}),y.brick=ae({map:tt.brick.map,normalMap:tt.brick.normalMap,roughness:.85}),y.sidingY=ae({map:tt.siding.map,normalMap:tt.siding.normalMap,color:15785114,roughness:.75}),y.sidingB=ae({map:tt.siding.map,normalMap:tt.siding.normalMap,color:10274012,roughness:.75}),y.sidingG=ae({map:tt.siding.map,normalMap:tt.siding.normalMap,color:12109984,roughness:.75}),y.plaster=ae({map:tt.plaster.map,normalMap:tt.plaster.normalMap,color:15920352,roughness:.95}),y.plasterG=ae({map:tt.plaster.map,normalMap:tt.plaster.normalMap,color:14214352,roughness:.95}),y.floor=ae({map:tt.floor.map,normalMap:tt.floor.normalMap,roughness:.55}),y.roof=ae({map:tt.roof.map,normalMap:tt.roof.normalMap,roughness:.85,color:11561562}),y.roof2=ae({map:tt.roof.map,normalMap:tt.roof.normalMap,roughness:.85,color:7371400}),y.wood=ae({map:tt.wood.map,normalMap:tt.wood.normalMap,roughness:.8}),y.paintwood=ae({map:tt.paintwood.map,normalMap:tt.paintwood.normalMap,roughness:.7}),y.dirt=ae({map:tt.dirt.map,normalMap:tt.dirt.normalMap,roughness:1}),y.tile=ae({map:tt.tile.map,normalMap:tt.tile.normalMap,roughness:.3}),y.carpetR=ae({map:tt.carpet.map,normalMap:tt.carpet.normalMap,color:10502208,roughness:1}),y.carpetB=ae({map:tt.carpet.map,normalMap:tt.carpet.normalMap,color:4217482,roughness:1}),y.trim=ae({color:16052970,roughness:.5,map:tt.plaster.map}),y.darkTrim=ae({color:3815994,roughness:.6}),y.metal=ae({map:tt.metal.map,normalMap:tt.metal.normalMap,color:10133670,metalness:.7,roughness:.4}),y.rust=ae({map:tt.rust.map,normalMap:tt.rust.normalMap,metalness:.4,roughness:.8}),y.chrome=ae({color:14540253,metalness:1,roughness:.15}),y.glass=ae({color:1714740,metalness:.9,roughness:.05,transparent:!0,opacity:.55}),y.glass.userData.noCast=!0,y.tire=ae({map:tt.tire.map,normalMap:tt.tire.normalMap,roughness:.92}),y.rim=ae({color:12106944,metalness:.85,roughness:.3}),y.plate=ae({map:wi("",{w:256,h:128,draw:i=>{i.fillStyle="#f4f4ea",i.fillRect(0,0,256,128),i.strokeStyle="#2a5a3a",i.lineWidth=8,i.strokeRect(4,4,248,120),i.fillStyle="#2a5a3a",i.font="700 34px sans-serif",i.textAlign="center",i.fillText("\u8C4A\u6A4B 400",128,44),i.font="900 64px sans-serif",i.fillText("8-31",140,110),i.font="700 40px sans-serif",i.fillText("\u3084",36,104)}}),roughness:.5}),y.grime=new te({map:wi("",{w:256,h:128,draw:i=>{let s=i.createLinearGradient(0,0,0,128);s.addColorStop(0,"rgba(70,55,40,0)"),s.addColorStop(.5,"rgba(70,55,40,.16)"),s.addColorStop(1,"rgba(55,42,28,.62)"),i.fillStyle=s,i.fillRect(0,0,256,128),i.filter="blur(3px)";for(let r=0;r<18;r++){let o=Math.random()*256,a=6+Math.random()*18,l=30+Math.random()*60,c=i.createLinearGradient(0,128-l,0,128);c.addColorStop(0,"rgba(60,45,30,0)"),c.addColorStop(1,`rgba(60,45,30,${.15+Math.random()*.2})`),i.fillStyle=c,i.beginPath(),i.ellipse(o,128,a,l,0,0,7),i.fill()}i.filter="none"}}),transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2}),y.grime.userData.noCast=!0,y.grime.map.wrapS=ps,y.streak=new te({map:wi("",{w:128,h:128,draw:i=>{i.filter="blur(2px)";for(let s=0;s<9;s++){let r=15+Math.random()*98,o=2+Math.random()*5,a=40+Math.random()*80,l=i.createLinearGradient(0,0,0,a);l.addColorStop(0,"rgba(40,36,30,.35)"),l.addColorStop(1,"rgba(40,36,30,0)"),i.fillStyle=l,i.fillRect(r,0,o,a)}i.filter="none"}}),transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2}),y.streak.userData.noCast=!0,y.busYellow=ae({map:tt.metal.map,normalMap:tt.metal.normalMap,color:15905306,metalness:.3,roughness:.45}),y.carRed=ae({map:tt.metal.map,color:11017762,metalness:.5,roughness:.3}),y.carBlue=ae({map:tt.metal.map,color:2775712,metalness:.5,roughness:.3}),y.carWhite=ae({map:tt.metal.map,color:15263972,metalness:.4,roughness:.35}),y.black=ae({color:1381653,roughness:.7}),y.bark=ae({map:tt.bark.map,normalMap:tt.bark.normalMap,roughness:1}),y.leaf=ae({map:tt.leaf.map,normalMap:tt.leaf.normalMap,roughness:.9,color:14221264}),y.hedge=ae({map:tt.hedge.map,normalMap:tt.hedge.normalMap,roughness:1}),y.fabricG=ae({map:tt.carpet.map,normalMap:tt.carpet.normalMap,color:5929562,roughness:1}),y.fabricO=ae({map:tt.carpet.map,normalMap:tt.carpet.normalMap,color:12615744,roughness:1}),y.white=ae({color:15790320,roughness:.4}),y.steel=ae({color:12106944,metalness:.9,roughness:.3}),y.lampGlow=new Wn({color:16773824}),y.screen=ae({color:657936,metalness:.5,roughness:.1}),y.hay=ae({map:tt.grass.map,normalMap:tt.grass.normalMap,color:15782016,roughness:1}),y.redPaint=ae({color:11542560,roughness:.5,map:tt.metal.map}),y.greenPaint=ae({color:2779706,roughness:.6,map:tt.metal.map}),y.curtain=ae({map:tt.carpet.map,normalMap:tt.carpet.normalMap,color:15260864,roughness:.9,side:hn}),y.lineW=ae({color:15790312,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),y.lineY=ae({color:15777824,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),y.paint1=ae({map:wi("",{w:128,h:128,draw:i=>{let s=i.createLinearGradient(0,0,0,128);s.addColorStop(0,"#6ab0e0"),s.addColorStop(1,"#f0e0a0"),i.fillStyle=s,i.fillRect(0,0,128,128),i.fillStyle="#3a7a3a",i.beginPath(),i.moveTo(0,100),i.quadraticCurveTo(64,50,128,95),i.lineTo(128,128),i.lineTo(0,128),i.fill(),i.fillStyle="#f8f0a0",i.beginPath(),i.arc(95,35,14,0,7),i.fill()}}),roughness:.6}),y.paint2=ae({map:wi("",{w:128,h:128,draw:i=>{i.fillStyle="#2a2a3a",i.fillRect(0,0,128,128),i.fillStyle="#e86020",i.beginPath(),i.ellipse(64,70,20,44,0,0,7),i.fill(),i.fillStyle="#3a8a2a",i.fillRect(56,14,16,18)}}),roughness:.6})}var _;function Rn(n,t,e,i,s,r,o,a,l=[],c=.22){let h=zu(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[g,m]of p){if(m-g<.01)continue;let x=(g+m)/2,M=m-g;_.box(o,f,x,n+r*c/4,d,M,c/2,{uv:2.5,collide:!1}),_.box(a,f,x,n-r*c/4,d,M,c/2,{uv:2.5,collide:!1}),_.col(u.a,g,n-c/2,u.b,m,n+c/2,{surf:"wood"})}u.op&&G_(n,u.a,u.b,u.op,r,c)}if(o!==a&&i<.6&&y.grime){let u=e-t,d=new $t().makeRotationY(r>0?0:Math.PI);d.setPosition((t+e)/2,i+.4,n+r*(c/2+.008)),_.addGeo(y.grime,Qf(Math.abs(u)),d)}}var kf={};function Qf(n){let t=Math.round(n*4);if(!kf[t]){let e=new be(t/4,.8),i=e.attributes.uv;for(let s=0;s<i.count;s++)i.setX(s,i.getX(s)*t/4/3);kf[t]=e}return kf[t]}function Un(n,t,e,i,s,r,o,a,l=[],c=.22){let h=zu(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[g,m]of p){if(m-g<.01)continue;let x=(g+m)/2,M=m-g;_.box(o,n+r*c/4,x,f,c/2,M,d,{uv:2.5,collide:!1}),_.box(a,n-r*c/4,x,f,c/2,M,d,{uv:2.5,collide:!1}),_.col(n-c/2,g,u.a,n+c/2,m,u.b,{surf:"wood"})}u.op&&z_(n,u.a,u.b,u.op,r,c)}if(o!==a&&i<.6&&y.grime){let u=e-t,d=new $t().makeRotationY(r>0?Math.PI/2:-Math.PI/2);d.setPosition(n+r*(c/2+.008),i+.4,(t+e)/2),_.addGeo(y.grime,Qf(Math.abs(u)),d)}}function zu(n,t,e){let i=[],s=n,r=[...e].sort((o,a)=>o.c-a.c);for(let o of r){let a=o.c-o.w/2,l=o.c+o.w/2;a>s&&i.push({a:s,b:a}),i.push({a,b:l,op:o}),s=l}return t>s&&i.push({a:s,b:t}),i}function G_(n,t,e,i,s,r){let a=r+.06;if(_.box(y.trim,t-.09/2+0,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),_.box(y.trim,e+.09/2,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),_.box(y.trim,(t+e)/2,i.t+.09/2,n,e-t+.09*2,.09,a,{collide:!1}),i.b>.3&&(_.box(y.trim,(t+e)/2,i.b-.03,n+s*.06,e-t+.2,.06,a+.1,{collide:!1}),y.streak&&i.win)){let l=new $t().makeRotationY(s>0?0:Math.PI);l.setPosition((t+e)/2,i.b-.45,n+s*(r/2+.009)),_.addGeo(y.streak,wg(),l)}if(i.win&&(_.box(y.trim,(t+e)/2,(i.b+i.t)/2,n+s*.02,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])Sg(l<0?t-.05:e+.05,i.t+.05,n-s*(r/2+.06),l,!0)}function z_(n,t,e,i,s,r){let a=r+.06;if(_.box(y.trim,n,(i.b+i.t)/2,t-.09/2,a,i.t-i.b,.09,{collide:!1}),_.box(y.trim,n,(i.b+i.t)/2,e+.09/2,a,i.t-i.b,.09,{collide:!1}),_.box(y.trim,n,i.t+.09/2,(t+e)/2,a,.09,e-t+.09*2,{collide:!1}),i.b>.3&&(_.box(y.trim,n+s*.06,i.b-.03,(t+e)/2,a+.1,.06,e-t+.2,{collide:!1}),y.streak&&i.win)){let l=new $t().makeRotationY(s>0?Math.PI/2:-Math.PI/2);l.setPosition(n+s*(r/2+.009),i.b-.45,(t+e)/2),_.addGeo(y.streak,wg(),l)}if(i.win&&(_.box(y.trim,n+s*.02,(i.b+i.t)/2,(t+e)/2,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])Sg(n-s*(r/2+.06),i.t+.05,l<0?t-.05:e+.05,l,!1)}var fg;function wg(){return fg||(fg=new be(1,.8))}var aa;function Sg(n,t,e,i,s){if(!y.curtain)return;if(!aa){aa=new be(.5,1.6,12,1);let o=aa.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a);o.setZ(a,Math.sin(l*40)*.035)}aa.computeVertexNormals(),aa.translate(0,-.8,0)}let r=new $t().makeRotationY(s?0:Math.PI/2);r.setPosition(s?n+i*.2:n,t,s?e:e+i*.2),_.addGeo(y.curtain,aa,r),_.box(y.darkTrim,n,t+.02,e,s?.6:.03,.03,s?.03:.6,{collide:!1})}function V_(n,t,e,i,s,r,o,a){let c=(i-e)/2+.45,h=(e+i)/2,u=Math.atan2(r,(i-e)/2),d=Math.hypot(c,r*c/((i-e)/2));for(let f of[-1,1]){let p=nt(t-n+.9,.14,d,2),g=new $t().makeRotationX(f*u);g.setPosition((n+t)/2,s+r/2+.05-.45*Math.tan(u)/2+.02,h+f*(d/2)*Math.cos(u)),_.addGeo(o,p,g);let m=new mt(.07,.07,t-n+.45*2,8);m.rotateZ(Math.PI/2),_.addGeo(y.trim,m,new $t().setPosition((n+t)/2,s-.45*Math.tan(u)+.02,h+f*c))}_.box(o,(n+t)/2,s+r+.1,h,t-n+.45*2,.12,.3,{collide:!1});for(let f of[n,t]){let p=new ui;p.moveTo(e-h,0),p.lineTo(i-h,0),p.lineTo(0,r),p.closePath();let g=new bi(p,{depth:.22,bevelEnabled:!1});pi(g,.4,.4);let m=new $t().makeRotationY(Math.PI/2);m.setPosition(f-.11+0,s,h),_.addGeo(a,g,m)}_.box(y.plaster,(n+t)/2,s+.06,h,t-n,.12,i-e,{uv:3,bullet:!0})}function Tr(n,t,e,i){let s=new Et,r=(a,l,c,h,u)=>{let d=new D(a,l);return d.position.set(c,h,u),s.add(d),d};r(nt(2.1,.42,.9,1),i,0,.25,0),r(nt(2.1,.6,.22,1),i,0,.7,-.36),r(nt(.22,.32,.9,1),i,-1,.6,0),r(nt(.22,.32,.9,1),i,1,.6,0);for(let a of[-.48,.48]){let l=r(new xs(.12,.7,4,10),i,a,.52,.08);l.rotation.z=Math.PI/2,l.scale.set(1,1,2.6)}for(let a of[-.5,.5]){let l=r(new ve(.35,.3,.12),y.fabricO,a,.72,-.2);l.rotation.x=-.25}for(let[a,l]of[[-.95,.38],[.95,.38],[-.95,-.38],[.95,-.38]])r(new mt(.03,.02,.08,6),y.wood,a,.03,l);s.position.set(n,.15,t),s.rotation.y=e,_.bake(s);let o=Math.abs(Math.cos(e))>.5?[1.1,.48]:[.48,1.1];_.col(n-o[0],.15,t-o[1],n+o[0],1,t+o[1],{surf:"carpet"})}function an(n,t,e,i,s,r=y.wood){_.box(r,n,.15+s-.03,t,e,.06,i,{collide:!1});for(let o of[-1,1])for(let a of[-1,1])_.box(y.wood,n+o*(e/2-.08),.15+(s-.06)/2,t+a*(i/2-.08),.07,s-.06,.07,{collide:!1});_.col(n-e/2,.15,t-i/2,n+e/2,.15+s,t+i/2,{bullet:!1})}function qn(n,t,e){let i=new Et,s=(r,o,a,l,c)=>{let h=new D(r,o);return h.position.set(a,l,c),i.add(h),h};s(nt(.45,.05,.45,1),y.wood,0,.46,0);for(let r of[-1,1])for(let o of[-1,1])s(nt(.04,.46,.04,1),y.wood,r*.19,.23,o*.19);for(let r of[-1,1])s(nt(.04,.5,.04,1),y.wood,r*.19,.73,-.2);for(let r=0;r<3;r++)s(nt(.4,.05,.03,1),y.wood,0,.62+r*.13,-.2);i.position.set(n,.15,t),i.rotation.y=e,_.bake(i)}function dn(n,t,e,i=1.2,s=1.9){let r=new Et,o=(l,c,h,u,d)=>{let f=new D(l,c);return f.position.set(h,u,d),r.add(f),f};o(nt(i,s,.04,1),y.wood,0,s/2,-.17);for(let l of[-1,1])o(nt(.04,s,.36,1),y.wood,l*i/2,s/2,0);for(let l=0;l<5;l++){let c=.05+l*(s-.1)/4;if(o(nt(i,.04,.36,1),y.wood,0,c,0),l<4){let h=-i/2+.08;for(;h<i/2-.12;){let u=.04+Mt()*.05,d=.22+Mt()*.14,f=[9054762,2771578,3828282,13148240,5913194,14209216][Math.floor(Mt()*6)],p=new te({color:f,roughness:.8}),g=o(nt(u,d,.24,1),Ut(f),h+u/2,c+.02+d/2,.02);Mt()<.15&&(g.rotation.z=.2),h+=u+.005}}}r.position.set(n,.15,t),r.rotation.y=e,_.bake(r);let a=Math.abs(Math.cos(e))>.5?[i/2,.2]:[.2,i/2];_.col(n-a[0],.15,t-a[1],n+a[0],.15+s,t+a[1])}var Gf={};function Ut(n,t={}){let e=n+JSON.stringify(t);return Gf[e]||(Gf[e]=ae({color:n,roughness:.75,...t})),Gf[e]}var Au={};function W_(n){if(Au[n])return Au[n];let t=512,e=768,i=document.createElement("canvas");i.width=t,i.height=e;let s=i.getContext("2d"),r={office:["#6f8fa8","#2a3e52","#c8d6e0"],brick:["#9a5a44","#26303a","#e8e2d6"],concrete:["#b8b4ac","#2e353c","#8a8680"],apt:["#e4dccb","#3a4650","#ffffff"]}[n];s.fillStyle=r[0],s.fillRect(0,0,t,e);for(let c=0;c<400;c++)s.fillStyle=`rgba(${Mt()<.5?"0,0,0":"255,255,255"},${.03+Mt()*.04})`,s.fillRect(Mt()*t,Mt()*e,4+Mt()*40,4+Mt()*40);if(n==="brick")for(let c=0;c<e;c+=8){s.fillStyle="rgba(230,220,200,0.35)",s.fillRect(0,c,t,1.5);for(let h=c/8%2*9;h<t;h+=18)s.fillRect(h,c,1.5,8)}let o=t/4,a=e/4;for(let c=0;c<4;c++)for(let h=0;h<4;h++){let u=h*o,d=c*a,f=Mt()<.18;if(n==="office")s.fillStyle=f?"#e8d8a0":`rgb(${40+Mt()*25},${60+Mt()*25},${80+Mt()*30})`,s.fillRect(u+4,d+20,o-8,a-26),s.fillStyle="rgba(255,255,255,0.12)",s.beginPath(),s.moveTo(u+4,d+a-6),s.lineTo(u+o*.6,d+20),s.lineTo(u+o*.8,d+20),s.lineTo(u+o*.2,d+a-6),s.fill(),s.fillStyle=r[2],s.fillRect(u+o/2-2,d+20,4,a-26),s.fillRect(u,d+14,o,8);else{let p=n==="concrete"?o-18:o*.55,g=a*(n==="concrete"?.42:.55),m=u+(o-p)/2,x=d+a*.22;s.fillStyle=r[2],s.fillRect(m-5,x-5,p+10,g+10),s.fillStyle=f?"#f0dca0":r[1],s.fillRect(m,x,p,g),s.fillStyle="rgba(255,255,255,0.15)",s.fillRect(m,x,p*.35,g),s.fillStyle=r[2],s.fillRect(m+p/2-2,x,4,g),Mt()<.5&&(s.fillStyle=`rgba(${200+Mt()*55},${200+Mt()*55},180,0.85)`,s.fillRect(m,x,p*(.2+Mt()*.3),g)),n==="apt"&&(s.fillStyle="#cfc6b4",s.fillRect(u+6,d+a*.8,o-12,a*.18),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(u+6,d+a*.8,o-12,3)),n==="concrete"&&(s.fillStyle="rgba(0,0,0,0.18)",s.fillRect(u,d+a*.75,o,6)),Mt()<.15&&(s.fillStyle="#d8d8d4",s.fillRect(u+o*.78,x+g*.4,o*.16,g*.4))}}let l=new es(i);return l.colorSpace=Mn,l.wrapS=l.wrapT=ps,l.anisotropy=4,Au[n]=ae({map:l,roughness:n==="office"?.35:.85,metalness:n==="office"?.25:0}),Au[n]}function X_(n,t,e){let i=new ve(n,t,e),s=i.attributes.uv,r=[e,e,n,n,n,n];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let l=o*4+a;s.setXY(l,s.getX(l)*r[o]/8,s.getY(l)*t/12+(12-t%12)/12)}return i}function da(n,t,e,i,s,r,o,a){let l=new Et;l.position.set(t,0,e),l.rotation.y=i;let c=new D(X_(s,r,o),W_(a));c.position.y=r/2,l.add(c);let h=new D(nt(s+.3,.5,o+.3,2),y.concrete);h.position.y=r+.1,l.add(h);let u=new D(nt(s-.3,.1,o-.3,2),Ut(6974054));u.position.y=r+.3,l.add(u);let d=new D(nt(2.6,2.2,2.6,2),y.concrete);if(d.position.set(-s*.2,r+1.4,o*.1),l.add(d),Mt()<.7){let f=new D(new mt(.9,.9,1.6,12),Ut(10134696,{metalness:.4,roughness:.5}));f.position.set(s*.22,r+1.9,-o*.15),l.add(f);for(let p of[-.6,.6])for(let g of[-.6,.6]){let m=new D(nt(.12,1,.12),Ut(5592405));m.position.set(s*.22+p,r+.7,-o*.15+g),l.add(m)}}for(let f=0;f<3;f++){let p=new D(nt(1,.8,.7,1),Ut(13684940));p.position.set((Mt()-.5)*s*.7,r+.75,(Mt()-.5)*o*.6),l.add(p)}if(Mt()<.5){let f=new D(new mt(.04,.06,4,6),y.metal);f.position.set(-s*.2,r+4.5,o*.1),l.add(f)}for(let[f,p]of[[s/2+.08,o/2-.3],[-s/2-.08,-o/2+.3]]){let g=new D(new mt(.07,.07,r,8),Ut(8027776,{metalness:.5,roughness:.5}));g.position.set(f,r/2,p),l.add(g);for(let m=2;m<r;m+=3){let x=new D(nt(.2,.06,.2,1),Ut(5922400));x.position.set(f,m,p),l.add(x)}}if(a!=="office")for(let f=3;f<r-1;f+=3){let p=new D(nt(s+.12,.1,o+.12,1),y.concrete);p.position.y=f,l.add(p)}if(r>9){let f=new D(nt(s+.05,.6,o+.05,2),Ut([2775610,9054762,2767466][Math.floor(Mt()*3)]));f.position.y=3.2,l.add(f)}n.add(l)}function Yf(n,t,e,i){let o=e-i*.445;_.box(Ut(15261904),(n+t)/2,.15+.92/2-.02,o,t-n,.92-.04,.65-.02,{surf:"wood"}),_.box(y.tile,(n+t)/2,.15+.92,o,t-n+.04,.04,.65+.04,{collide:!1,uv:.6});for(let h=n+.5;h<t;h+=.6)_.box(y.darkTrim,h,.15+.45,o-i*(.65/2),.02,.7,.01,{collide:!1});for(let h=n+.25;h<t;h+=.6)_.box(y.steel,h,.15+.72,o-i*(.65/2+.02),.12,.02,.03,{collide:!1});_.box(y.steel,n+1,.15+.92+.01,o,.6,.03,.42,{collide:!1});let a=new D(new Xe(.12,.02,6,12,Math.PI),y.chrome);a.position.set(n+1,.15+.92+.03,o+i*.2),a.rotation.y=Math.PI/2,_.bake(a);let l=t+.45;_.box(y.white,l,.15+.95,o,.8,1.9,.72,{}),_.box(y.steel,l-.3,.15+1.3,o-i*.37,.03,.5,.04,{collide:!1}),_.box(y.darkTrim,l,.15+1.25,o-i*.365,.8,.012,.01,{collide:!1}),_.box(Ut(15261904),(n+t)/2,.15+2.1,e-i*.3,t-n,.7,.36,{collide:!1});for(let[h,u]of[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]]){let d=new D(new Xe(.08,.012,6,16),y.black);d.rotation.x=Math.PI/2,d.position.set(t-.6+h,.15+.92+.03,o+u),_.bake(d)}let c=new D(new mt(.13,.12,.16,16,1,!1),y.steel);c.position.set(t-.75,.15+.92+.1,o-.12),_.bake(c)}function Uu(n,t,e){let i=new Et,s=(o,a,l,c,h)=>{let u=new D(o,a);return u.position.set(l,c,h),i.add(u),u};s(nt(1.6,.5,.45,1),y.wood,0,.25,0),s(nt(1.3,.75,.06,1),y.black,0,.95,0),s(new be(1.24,.69),y.screen,0,.95,.031),s(nt(.3,.06,.2,1),y.black,0,.53,0),i.position.set(n,.15,t),i.rotation.y=e,_.bake(i);let r=Math.abs(Math.cos(e))>.5?[.8,.25]:[.25,.8];_.col(n-r[0],.15,t-r[1],n+r[0],.65,t+r[1])}function ca(n,t,e,i,s){let r=new Et,o=new D(nt(.9,.7,.05,1),y.wood);r.add(o);let a=new D(new be(.78,.58),s);a.position.z=.03,r.add(a),r.position.set(n,t,e),r.rotation.y=i,_.bake(r)}function ua(n,t,e,i,s){_.box(s,n,.155,t,e,.012,i,{collide:!1,uv:1})}function Fu(n,t){let e=new Et,i=new D(new mt(.15,.18,.04,16),y.black);i.position.y=.02,e.add(i);let s=new D(new mt(.015,.015,1.5,6),y.chrome);s.position.y=.77,e.add(s);let r=new D(new mt(.16,.24,.3,16,1,!0),Ut(15786176,{side:hn,emissive:4206624}));r.position.y=1.55,e.add(r),e.position.set(n,.15,t),_.bake(e)}function wr(n,t,e){let i=new Et,s=(o,a,l,c,h)=>{let u=new D(o,a);return u.position.set(l,c,h),i.add(u),u};s(nt(1.5,.3,2,1),y.wood,0,.2,0),s(nt(1.45,.22,1.95,1),y.white,0,.45,0),s(nt(1.5,.08,1.4,1),y.carpetB,0,.58,.28),s(nt(1.5,.9,.08,1),y.wood,0,.55,-1);for(let o of[-.35,.35]){let a=s(new xs(.1,.3,4,8),y.white,o,.62,-.75);a.rotation.z=Math.PI/2,a.scale.set(1,1,1.8)}i.position.set(n,.15,t),i.rotation.y=e,_.bake(i);let r=Math.abs(Math.cos(e))>.5?[.75,1.05]:[1.05,.75];_.col(n-r[0],.15,t-r[1],n+r[0],.8,t+r[1],{bullet:!0})}function pg(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.18,o=2.9,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;_.box(y.concrete,(t+e)/2,.08,(i+s)/2,e-t+.3,.16,s-i+.3,{collide:!1}),_.box(y.floor,(t+e)/2,r-.01,(i+s)/2,e-t-.1,.02,s-i-.1,{collide:!1,uv:3}),_.col(t,0,i,e,r,s,{bullet:!0,surf:"wood"});let h=(g,m=1.4)=>({c:g,w:m,b:r+.95,t:r+2.15,win:!0}),u=(g,m=1.4)=>({c:g,w:m,b:r,t:r+2.25}),d=n.siding,f=n.inner||y.plaster;Rn(a,t,e,r,o,c,d,f,n.frontOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),Rn(l,t,e,r,o,-c,d,f,n.backOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),Un(t,i+.11,s-.11,r,o,-1,d,f,n.leftOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),Un(e,i+.11,s-.11,r,o,1,d,f,n.rightOps.map(g=>g.d?u(g.c,g.w):h(g.c,g.w))),n.partX!==void 0&&Un(n.partX,n.partZ0,n.partZ1,r,o,1,y.plasterG,f,[u(n.partDoor,1.4)],.14),V_(t,e,i,s,r+o,2,n.roof,d);let p=a+c*.9;_.box(y.concrete,n.doorX,.1,p,2.6,.2,1.6,{surf:"concrete"}),_.box(y.concrete,n.doorX,.05,p+c*1,1.8,.1,.5,{surf:"concrete"}),_.box(n.roof,n.doorX,r+2.55,p,3,.1,1.9,{collide:!1});for(let g of[-1,1]){let m=new D(new mt(.07,.08,2.45,10),y.trim);m.position.set(n.doorX+g*1.3,.2+1.22,p+c*.75),_.bake(m),_.col(n.doorX+g*1.3-.08,0,p+c*.75-.08,n.doorX+g*1.3+.08,2.7,p+c*.75+.08,{surf:"wood"})}for(let g of[-1,1]){let m=new D(new ve(.14,.24,.14),y.lampGlow);m.position.set(n.doorX+g*.95,r+1.9,a+c*.15),_.bake(m)}_.box(y.brick,n.chimX,r+o+1.75,(i+s)/2+1.2,.8,2.9,.8,{collide:!1,uv:1.2}),_.box(y.concrete,n.chimX,r+o+3.25,(i+s)/2+1.2,.95,.12,.95,{collide:!1});for(let g of[i,s])_.box(y.brick,(t+e)/2,.45,g+(g===i?-.13:.13),e-t+.06,.55,.05,{collide:!1,uv:1.2});for(let g of[t,e])_.box(y.brick,g+(g===t?-.13:.13),.45,(i+s)/2,.05,.55,s-i+.06,{collide:!1,uv:1.2})}function mg(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.05,o=2.7,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;_.box(y.concrete,(t+e)/2,.025,(i+s)/2,e-t,.05,s-i,{collide:!1,uv:3}),Rn(a,t,e,r,o,c,n.siding,y.plaster,[{c:(t+e)/2,w:e-t-1,b:r,t:r+2.2}]),_.box(y.white,(t+e)/2,r+2.35,a-c*.05,e-t-1,.3,.06,{collide:!1}),Rn(l,t,e,r,o,-c,n.siding,y.plaster,[{c:(t+e)/2,w:1.2,b:r+1.1,t:r+2,win:!0}]);let h=n.outerX;Un(h,i+.11,s-.11,r,o,h>(t+e)/2?1:-1,n.siding,y.plaster,[{c:(i+s)/2+1.5,w:1.3,b:r,t:r+2.2}]),_.box(n.roof,(t+e)/2,r+o+.1,(i+s)/2,e-t+.6,.2,s-i+.6,{collide:!1,uv:2}),_.box(y.plaster,(t+e)/2,r+o-.03,(i+s)/2,e-t,.06,s-i,{collide:!1,uv:3}),_.col(t,r+o-.05,i,e,r+o+.2,s);let u=l-c*-.5,d=l+(n.frontNeg?.5:-.5);_.box(y.wood,(t+e)/2,.9,d,2.4,.08,.7,{collide:!1});for(let p of[-1,1])_.box(y.wood,(t+e)/2+p*1.1,.45,d,.08,.86,.6,{collide:!1});_.col((t+e)/2-1.2,0,d-.35,(t+e)/2+1.2,.95,d+.35,{bullet:!1});for(let p=0;p<6;p++)_.box(Ut([12595248,3170496,4210752][p%3]),(t+e)/2-.9+p*.35,.98,d,.18,.08,.12,{collide:!1});let f=Ut(11569754,{map:tt.wood.map});for(let[p,g,m]of[[.9,1.5,.6],[.9,2.2,.5],[.95,1.8,.45]]){let x=(n.frontNeg,t+p+.2),M=(i+s)/2+(n.frontNeg?-1:1)*(g-2);_.box(f,x,m/2+(g===1.8?.6:.05),M,m,m,m,{surf:"wood"})}}function Fl(n,t,e,i,s=.38,r=.26){let o=new D(new Xe(s-.1,.11,12,32),y.tire);o.scale.z=r/.22,o.position.set(t,e,i),n.add(o);let a=new D(new mt(s-.13,s-.13,r*.7,20),y.rim);a.rotation.x=Math.PI/2,a.position.set(t,e,i),n.add(a);let l=i+Math.sign(i||1)*r*.36,c=new D(new mt(s-.17,s-.15,.03,20),y.chrome);c.rotation.x=Math.PI/2,c.position.set(t,e,l),n.add(c);for(let u=0;u<6;u++){let d=u/6*Math.PI*2,f=new D(new mt(.045,.045,.035,8),y.black);f.rotation.x=Math.PI/2,f.position.set(t+Math.cos(d)*(s-.25)*.75,e+Math.sin(d)*(s-.25)*.75,l+Math.sign(i||1)*.004),n.add(f)}let h=new D(new mt(.09,.1,r+.04,10),y.black);h.rotation.x=Math.PI/2,h.position.set(t,e,i),n.add(h);for(let u=0;u<5;u++){let d=u/5*Math.PI*2,f=new D(new mt(.016,.016,.03,6),y.chrome);f.rotation.x=Math.PI/2,f.position.set(t+Math.cos(d)*.065,e+Math.sin(d)*.065,l+Math.sign(i||1)*.03),n.add(f)}}function q_(n,t,e){let i=new Et,s=(h,u,d,f,p)=>{let g=new D(h,u);return g.position.set(d,f,p),i.add(g),g},r=9.6,o=2.5,a=2.6;s(nt(r,a-.6,o,1.5),y.busYellow,0,.6+(a-.6)/2,0),s(nt(r-.1,.25,o-.1,1),y.busYellow,0,a+.12,0);for(let h of[-1,1]){s(nt(r-2.2,.75,.02),y.glass,-.5,2,h*(o/2+.005));for(let u=0;u<9;u++)s(nt(.08,.8,.04),y.busYellow,-4.1+u*.95,2,h*(o/2+.01));s(nt(r,.06,.04),y.black,0,1.45,h*(o/2+.02)),s(nt(r,.06,.04),y.black,0,1.15,h*(o/2+.02))}s(nt(.04,1,o-.3),y.glass,r/2+.01,2,0),s(nt(.04,.8,o-.3),y.glass,-r/2-.01,2,0),s(nt(.25,.3,o+.1),y.black,r/2+.1,.65,0),s(nt(.25,.3,o+.1),y.black,-r/2-.1,.65,0);for(let h of[-1,1])s(new mt(.12,.12,.05,12),y.lampGlow,r/2+.03,1,h*.9).rotation.z=Math.PI/2,s(new mt(.1,.1,.05,12),y.redPaint,-r/2-.03,1,h*.9).rotation.z=Math.PI/2;s(nt(.6,.4,.04),y.black,r/2-.1,2.75,.8),s(nt(1.6,.25,.03),y.black,1,1.3,o/2+.03);for(let h of[-3,3.2])for(let u of[-1,1])Fl(i,h,.48,u*(o/2-.12),.48,.3);s(nt(r-.4,.3,o-.3),y.black,0,.45,0),i.position.set(n,0,t),i.rotation.y=e,_.bake(i);let l=Math.abs(Math.cos(e))>.5?r/2:o/2,c=Math.abs(Math.cos(e))>.5?o/2:r/2;_.col(n-l,.3,t-c,n+l,a+.25,t+c,{surf:"metal"}),_.col(n-l+.3,0,t-c+.3,n+l-.3,.3,t+c-.3,{surf:"metal",bullet:!1})}function fn(n,t,e,i,s=!1){let r=new Et,o=(V,I,U,G,X)=>{let j=new D(V,I);return j.position.set(U,G,X),r.add(j),j},a=s?5.2:4.5,l=1.9,c=s?1.9:2.4,h=s?.6:-.1,u=a/2,d=-a/2,f=a/2-.85,p=.47,g=new ui;g.moveTo(d+.05,.36),g.lineTo(-f-p,.36),g.absarc(-f,.38,p,Math.PI,0,!0),g.lineTo(f-p,.36),g.absarc(f,.38,p,Math.PI,0,!0),g.lineTo(u-.05,.36),g.quadraticCurveTo(u+.04,.38,u,.62),g.quadraticCurveTo(u-.05,.9,u-.45,.98),g.lineTo(h+c/2+.45,1.06),g.lineTo(h-c/2-.35,1.06),s?g.lineTo(d+.1,1.06):(g.lineTo(d+.55,1.03),g.quadraticCurveTo(d+.05,1,d,.8)),g.quadraticCurveTo(d-.03,.4,d+.05,.36);let m=new bi(g,{depth:l-.16,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:3,curveSegments:10});m.translate(0,0,-(l-.16)/2),pi(m,.5,.5),o(m,i,0,0,0);let x=new ui;x.moveTo(h+c/2+.42,1.04),x.lineTo(h+c/2-.12,1.62),x.lineTo(h-c/2+.12,1.64),x.lineTo(h-c/2-(s?0:.32),1.04),x.closePath();let M=new bi(x,{depth:l-.3,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});M.translate(0,0,-(l-.3)/2),o(M,y.glass,0,0,0);let w=new ui;w.moveTo(h+c/2-.1,1.6),w.lineTo(h-c/2+.1,1.62),w.lineTo(h-c/2+.14,1.72),w.quadraticCurveTo(h,1.78,h+c/2-.16,1.7),w.closePath();let E=new bi(w,{depth:l-.26,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});E.translate(0,0,-(l-.26)/2),o(E,i,0,0,0);for(let V of[-1,1]){let I=o(nt(.07,.68,.06),i,h+c/2+.16,1.33,V*(l/2-.16));I.rotation.z=.78,o(nt(.07,.6,.06),i,h+.05,1.33,V*(l/2-.16));let U=o(nt(.09,.62,.06),i,h-c/2-(s?-.02:.12),1.33,V*(l/2-.16));U.rotation.z=s?0:-.45}s&&(o(nt(2,.5,.08),i,-1.5,1.3,l/2-.04),o(nt(2,.5,.08),i,-1.5,1.3,-l/2+.04),o(nt(.08,.5,l),i,-a/2+.04,1.3,0),o(nt(1.9,.05,l-.15),y.rust,-1.5,1.08,0)),o(nt(.15,.22,l+.04),y.chrome,a/2+.05,.55,0),o(nt(.15,.22,l+.04),y.chrome,-a/2-.05,.55,0);for(let V of[-1,1])o(nt(.04,.14,.32),y.lampGlow,a/2+.01,.85,V*.66),o(nt(.04,.14,.28),y.redPaint,-a/2-.01,.85,V*.68);o(nt(.03,.2,.7),y.black,a/2+.01,.78,0);for(let V of[-1,1])o(nt(.12,.08,.18),i,h+c/2+.2,1.2,V*(l/2+.08));for(let V of[-1,1])o(nt(.02,.4,.01),y.black,h,.75,V*(l/2+.006)),o(nt(.18,.03,.02),y.chrome,h+.3,.92,V*(l/2+.01)),o(nt(.18,.03,.02),y.chrome,h-.7,.92,V*(l/2+.01));o(nt(a-1.2,.25,l-.1),y.black,0,.32,0);let R=Ut(3815998,{roughness:.9});for(let V of[-1,1]){o(nt(.5,.12,.5),R,h+.25,1.05,V*.42);let I=o(nt(.12,.6,.48),R,h-.05,1.32,V*.42);I.rotation.z=-.15,o(nt(.1,.16,.26),R,h-.1,1.68,V*.42)}s||o(nt(.5,.5,l-.4),R,h-.85,1.2,0),o(nt(.4,.18,l-.3),Ut(2236966),h+c/2+.1,1.12,0);{let V=o(new Xe(.17,.022,6,16),y.black,h+c/2-.15,1.28,-.42);V.rotation.y=Math.PI/2,V.rotation.x=.4}for(let V of[-1,1]){let I=V*(l/2+.005);o(nt(.015,.62,.008),y.black,h+c/2+.25,.75,I),s||o(nt(.015,.62,.008),y.black,h-c/2-.2,.75,I),o(nt(a-.5,.012,.008),y.black,0,.98,I)}for(let V of[1,-1]){let I=o(new be(.42,.21),y.plate,V*(a/2+.135),.5,0);I.rotation.y=V*Math.PI/2}for(let V of[-1,1]){let I=o(new be(a-.2,.55),y.grime,0,.62,V*(l/2+.07));V<0&&(I.rotation.y=Math.PI)}for(let V of[a/2-.85,-a/2+.85])for(let I of[-1,1])Fl(r,V,.38,I*(l/2-.05));r.position.set(n,0,t),r.rotation.y=e,_.bake(r);let S=Math.abs(Math.cos(e))>.5,b=S?a/2:l/2,v=S?l/2:a/2;_.col(n-b,.25,t-v,n+b,1.08,t+v,{surf:"metal"});let A=n+(S?h*Math.cos(e):0),P=t+(S?0:-h*Math.sin(e)),L=S?c/2+.2:l/2-.1,B=S?l/2-.1:c/2+.2;_.col(A-L,1.08,P-B,A+L,1.75,P+B,{surf:"metal"})}function mi(n,t,e=1,i=1){Sn(i*77+3);let s=new Et,r=3.2*e,o=new mt(.16*e,.28*e,r,12,4);pi(o,2,2);let a=new D(o,y.bark);a.position.y=r/2,s.add(a);for(let c=0;c<5;c++){let h=new D(new jn(.12*e,.6*e,6),y.bark),u=c/5*Math.PI*2;h.position.set(Math.cos(u)*.2*e,.15,Math.sin(u)*.2*e),h.rotation.set(Math.sin(u)*1.2,0,-Math.cos(u)*1.2),s.add(h)}for(let c=0;c<4;c++){let h=new D(new mt(.04*e,.09*e,1.6*e,6),y.bark),u=c/4*Math.PI*2+.4;h.position.set(Math.cos(u)*.45*e,r*.75,Math.sin(u)*.45*e),h.rotation.set(Math.sin(u)*.9,0,-Math.cos(u)*.9),s.add(h)}let l=Se(i+500,2,3);for(let c=0;c<13;c++){let h=(.75+Mt()*.6)*e,u=new Li(h,3),d=u.attributes.position,f=u.attributes.normal;for(let x=0;x<d.count;x++){let M=d.getX(x),w=d.getY(x),E=d.getZ(x),R=1+(l((M/h+1)*.5,(E/h+w/h+2)*.25)-.5)*.55;d.setXYZ(x,M*R,w*R*.85,E*R)}u.computeVertexNormals();for(let x=0;x<d.count;x++){let M=new F(d.getX(x),d.getY(x)/.85,d.getZ(x)).normalize(),w=new F(f.getX(x),f.getY(x),f.getZ(x));M.lerp(w,.35).normalize(),f.setXYZ(x,M.x,M.y,M.z)}pi(u,3,3);let p=new D(u,y.leaf),g=Mt()*Math.PI*2,m=c===0?0:(.8+Mt()*.6)*e;p.position.set(Math.cos(g)*m,r+(Mt()*1.4-.2)*e,Math.sin(g)*m),s.add(p)}s.position.set(n,0,t),_.bake(s),_.col(n-.25*e,0,t-.25*e,n+.25*e,r,t+.25*e,{surf:"wood"})}function Cu(n,t,e,i,s=1,r=[]){let o=Math.hypot(e-n,i-t),a=(e-n)/o,l=(i-t)/o,c=Math.abs(a)>.5,h=new ve(.09,s,.025),u=new jn(.065,.12,4),d=p=>r.some(g=>p>g[0]&&p<g[1]);for(let p=.1;p<o;p+=.16){if(d(p))continue;let g=new $t().makeRotationY(c?0:Math.PI/2);g.setPosition(n+a*p,s/2,t+l*p),_.addGeo(y.paintwood,h,g);let m=new $t().makeRotationY(Math.PI/4+(c?0:Math.PI/2));m.setPosition(n+a*p,s+.06,t+l*p),_.addGeo(y.paintwood,u,m)}let f=[[0,o]];for(let p of r)f=f.flatMap(([g,m])=>p[1]<=g||p[0]>=m?[[g,m]]:[[g,p[0]],[p[1],m]].filter(([x,M])=>M-x>.05));for(let[p,g]of f){for(let E of[s*.25,s*.75]){let R=n+a*(p+g)/2,S=t+l*(p+g)/2;_.box(y.paintwood,R,E,S+(c?-.025:0),c?g-p:.04,.08,c?.04:g-p,{collide:!1})}let m=n+a*p,x=t+l*p,M=n+a*g,w=t+l*g;_.col(Math.min(m,M)-(c?0:.06),0,Math.min(x,w)-(c?.06:0),Math.max(m,M)+(c?0:.06),s,Math.max(x,w)+(c?.06:0),{bullet:!1,surf:"wood"});for(let E=p;E<=g;E+=2.4)_.box(y.paintwood,n+a*E,s/2+.05,t+l*E,.12,s+.1,.12,{collide:!1})}}function ei(n,t,e,i,s=2.6){let r=(n+e)/2,o=(t+i)/2,a=Math.abs(e-n),l=Math.abs(i-t),c=new ve(a,s,l,Math.max(2,Math.round(a*2)),6,Math.max(2,Math.round(l*2))),h=c.attributes.position,u=Se(Math.round(r*7+o*13)+900,4,3);for(let p=0;p<h.count;p++){let g=h.getX(p),m=h.getY(p),x=h.getZ(p),M=(u((g+r)*.05+.5,(m+x+o)*.05+.5)-.5)*.5;h.setXYZ(p,g+Math.sign(g)*M*(Math.abs(g)>a/2-.01?1:0),m+(m>s/2-.01?M:0),x+Math.sign(x)*M*(Math.abs(x)>l/2-.01?1:0))}c.computeVertexNormals();let d=nt(a,s,l,1.5,[r,0,o]);c.setAttribute("uv",new vn(new Float32Array(h.count*2),2));let f=c.attributes.uv;for(let p=0;p<h.count;p++)f.setXY(p,(h.getX(p)+r+h.getZ(p)+o)/1.5,h.getY(p)/1.5);_.addGeo(y.hedge,c,new $t().setPosition(r,s/2,o)),_.col(r-a/2,0,o-l/2,r+a/2,s,o+l/2,{surf:"grass"})}function Ct(n,t,e,i=1,s=0){let r=new Et,o=(l,c,h,u,d)=>{let f=new D(l,c);return f.position.set(h,u,d),r.add(f),f};o(nt(i-.04,i-.04,i-.04,i),y.wood,0,i/2,0);let a=.07*i;for(let l of[-1,1])for(let c of[-1,1])o(nt(a,i,a,1),y.wood,l*(i/2-a/2),i/2,c*(i/2-a/2));for(let l of[0,1])for(let c of[-1,1])o(nt(a,a,i,1),y.wood,c*(i/2-a/2),l*(i-a)+a/2,0),o(nt(i,a,a,1),y.wood,0,l*(i-a)+a/2,c*(i/2-a/2));for(let l of[-1,1]){let c=o(nt(i*1.3,a*.8,a*.5,1),y.wood,0,i/2,l*(i/2+.005));c.rotation.z=Math.PI/4}r.position.set(n,t,e),r.rotation.y=s,_.bake(r),_.col(n-i/2,t,e-i/2,n+i/2,t+i,e+i/2,{surf:"wood"})}function Rr(n,t,e){_.box(y.wood,n,.2,t,1,.4,.7,{surf:"wood"});let s=Ut(e===0?15231514:e===1?13642266:12095584,{roughness:.5});for(let r=0;r<12;r++){let o=new D(new he(.1,10,8),s);o.position.set(n-.4+r%4*.26,.45,t-.2+Math.floor(r/4)*.2),o.scale.y=.85,_.bake(o)}}function gg(n,t,e){let i=new Et,s=new D(nt(.1,1.1,.1,1),y.wood);s.position.y=.55,i.add(s);let r=new D(new xs(.15,.35,4,12),y.steel);r.rotation.z=Math.PI/2,r.position.y=1.15,i.add(r);let o=new D(nt(.03,.2,.06,1),y.redPaint);o.position.set(.05,1.3,.17),i.add(o),i.position.set(n,0,t),i.rotation.y=e,_.bake(i),_.col(n-.08,0,t-.08,n+.08,1,t+.08,{bullet:!1})}function Bu(n,t){let e=new Et,i=new D(new mt(.14,.17,.6,14),y.redPaint);i.position.y=.3,e.add(i);let s=new D(new he(.15,14,8,0,Math.PI*2,0,Math.PI/2),y.redPaint);s.position.y=.6,e.add(s);for(let o of[-1,1]){let a=new D(new mt(.06,.06,.12,10),y.redPaint);a.rotation.z=Math.PI/2,a.position.set(o*.18,.42,0),e.add(a)}let r=new D(new mt(.03,.05,.08,6),y.chrome);r.position.y=.76,e.add(r),e.position.set(n,.15,t),_.bake(e),_.col(n-.17,0,t-.17,n+.17,.9,t+.17,{bullet:!1})}function gi(n,t,e){let i=new Et,s=new D(new mt(.32,.27,.95,16,3),Ut(e,{map:tt.metal.map,normalMap:tt.metal.normalMap,metalness:.2,roughness:.6}));s.position.y=.48,i.add(s);let r=new D(new mt(.35,.34,.08,16),Ut(e));r.position.y=1,i.add(r);for(let o=0;o<3;o++){let a=new D(new Xe(.3-o*.015,.012,6,24),Ut(e));a.rotation.x=Math.PI/2,a.position.y=.25+o*.3,i.add(a)}i.position.set(n,0,t),_.bake(i),_.col(n-.33,0,t-.33,n+.33,1.04,t+.33,{surf:"metal"})}function Es(n,t,e){let i=new Et,s=new D(new mt(.06,.1,5.2,10),y.darkTrim);s.position.y=2.6,i.add(s);let r=new D(new mt(.04,.04,1.4,8),y.darkTrim);r.rotation.x=Math.PI/2,r.position.set(0,5.1,e*.7),i.add(r);let o=new D(new mt(.12,.3,.25,12),y.darkTrim);o.position.set(0,5.05,e*1.35),i.add(o);let a=new D(new mt(.22,.22,.04,12),y.lampGlow);a.position.set(0,4.92,e*1.35),i.add(a);let l=new D(new mt(.18,.22,.4,10),y.darkTrim);l.position.y=.2,i.add(l),i.position.set(n,.15,t),_.bake(i),_.col(n-.12,0,t-.12,n+.12,5.3,t+.12,{surf:"metal"})}function zf(n,t,e,i){_.box(y.wood,n,.25,t,e,.5,i,{surf:"wood"}),_.box(y.dirt,n,.51,t,e-.16,.04,i-.16,{collide:!1});for(let s=0;s<Math.floor(e*i*3);s++){let r=n-e/2+.25+Mt()*(e-.5),o=t-i/2+.25+Mt()*(i-.5);for(let a=0;a<5;a++){let l=new D(new jn(.05,.4,4),y.leaf);l.position.set(r,.7,o),l.rotation.set((Mt()-.5)*1.2,Mt()*3,(Mt()-.5)*1.2),_.bake(l)}}}function Nl(n,t,e){let i=new D(new mt(.65,.65,1.2,20,2),y.hay);i.rotation.set(0,e,Math.PI/2),i.position.set(n,.65,t),_.bake(i);let s=Math.abs(Math.cos(e))>.5;_.col(n-(s?.6:.65),0,t-(s?.65:.6),n+(s?.6:.65),1.3,t+(s?.65:.6),{surf:"grass"})}function xg(n,t){Rn(t-3.2/2,n-4/2,n+4/2,.05,2.4,-1,y.wood,y.wood,[],.12),Rn(t+3.2/2,n-4/2,n+4/2,.05,2.4,1,y.wood,y.wood,[{c:n+.6,w:1.4,b:.05,t:2.1}],.12),Un(n-4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,-1,y.wood,y.wood,[{c:t,w:.9,b:1.1,t:1.8,win:!0}],.12),Un(n+4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,1,y.wood,y.wood,[{c:t-.3,w:1.2,b:.05,t:2.1}],.12),_.box(y.roof2,n,2.4+.15,t,4+.6,.12,3.2+.6,{rotX:.06,collide:!1}),_.box(y.wood,n,.03,t,4,.06,3.2,{collide:!1}),_.col(n-4/2,2.4,t-3.2/2,n+4/2,2.4+.3,t+3.2/2),_.box(y.wood,n-1.4,.8,t-1.2,1,.05,.5,{collide:!1}),_.col(n-1.9,0,t-1.5,n-.9,1.6,t-.95);for(let r=0;r<3;r++)_.box(Ut(9071162),n-1.7+r*.3,1,t-1.2,.2,.35,.2,{collide:!1})}function Y_(n,t){let r=(o,a)=>_.box(y.white,o,1.25,a,.08,2.5,.08,{surf:"metal"});for(let o of[-1,0,1])for(let a of[-1,1])r(n+o*5/2,t+a*3.6/2);for(let o of[-1,1])_.box(y.white,n,2.5,t+o*3.6/2,5,.08,.08,{collide:!1});for(let o of[-1,0,1])_.box(y.white,n+o*5/2,2.5,t,.08,.08,3.6,{collide:!1});for(let o of[-1,1])_.box(y.glass,n,2.5+.45,t+o*3.6/4,5,.03,3.6/2+.1,{rotX:o*.45,collide:!1});_.box(y.white,n,2.5+.9,t,5,.06,.06,{collide:!1}),_.box(y.wood,n,.45,t-3.6/2+.4,5-.4,.06,.7,{collide:!1}),_.col(n-5/2+.2,0,t-3.6/2+.05,n+5/2-.2,.9,t-3.6/2+.75,{bullet:!1});for(let o=0;o<6;o++){let a=new D(new mt(.12,.09,.2,12),Ut(11558970));a.position.set(n-2+o*.8,.58,t-3.6/2+.4),_.bake(a);let l=new D(new Li(.16,1),y.leaf);l.position.set(n-2+o*.8,.78,t-3.6/2+.4),_.bake(l)}}function $f(n,t){let e=new Et,i=new D(new he(.35,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),y.black);i.position.y=.85,e.add(i);let s=new D(new he(.35,16,10,0,Math.PI*2,0,Math.PI/2),y.black);s.position.y=.87,e.add(s);for(let r=0;r<3;r++){let o=new D(new mt(.02,.02,.85,6),y.steel),a=r/3*Math.PI*2;o.position.set(Math.cos(a)*.2,.4,Math.sin(a)*.2),o.rotation.set(Math.sin(a)*.3,0,-Math.cos(a)*.3),e.add(o)}e.position.set(n,0,t),_.bake(e),_.col(n-.35,0,t-.35,n+.35,1.2,t+.35,{bullet:!1,surf:"metal"})}function Zf(n,t){let e=new Et,i=new D(new mt(.6,.6,.05,20),y.white);i.position.y=.72,e.add(i);let s=new D(new mt(.04,.04,2.3,8),y.steel);s.position.y=1.15,e.add(s);let r=new D(new jn(1.4,.5,8,1,!0),Ut(13647936,{side:hn}));r.position.y=2.2,e.add(r),e.position.set(n,0,t),_.bake(e),_.col(n-.6,0,t-.6,n+.6,.75,t+.6,{bullet:!1});for(let o=0;o<3;o++){let a=o/3*Math.PI*2;$_(n+Math.cos(a)*1,t+Math.sin(a)*1,-a-Math.PI/2)}}function $_(n,t,e){let i=new Et,s=new D(nt(.45,.04,.45,1),y.white);s.position.y=.45,i.add(s);let r=new D(nt(.45,.45,.04,1),y.white);r.position.set(0,.7,-.21),i.add(r);for(let o of[-1,1])for(let a of[-1,1]){let l=new D(nt(.03,.45,.03,1),y.white);l.position.set(o*.2,.22,a*.2),i.add(l)}i.position.set(n,0,t),i.rotation.y=e,_.bake(i)}function Fn(n,t,e){let i=new ui;i.moveTo(-.3,0),i.lineTo(.3,0),i.lineTo(.12,.3),i.lineTo(.08,.85),i.lineTo(-.08,.85),i.lineTo(-.12,.3),i.closePath();let s=new bi(i,{depth:2.4,bevelEnabled:!1});s.translate(0,0,-1.2),pi(s,.7,.7);let r=new $t().makeRotationY(e);r.setPosition(n,0,t),_.addGeo(y.concrete,s,r);let o=Math.abs(Math.cos(e))>.5;_.col(n-(o?.3:1.2),0,t-(o?1.2:.3),n+(o?.3:1.2),.85,t+(o?1.2:.3))}function ni(n,t,e){let i=wi(t,{w:256,h:256,size:200,color:"rgba(255,255,255,0.9)",stroke:"rgba(0,0,0,0.35)",strokeW:8,draw:h=>{h.strokeStyle="rgba(255,220,60,0.9)",h.lineWidth=14,h.beginPath(),h.arc(128,128,116,0,7),h.stroke()}}),s=new D(new be(3.4,3.4),new Wn({map:i,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));s.rotation.x=-Math.PI/2,s.position.set(e.x,.06,e.z),s.renderOrder=2,n.add(s);let r=new Et,o=new D(nt(1.3,.7,.9,1),y.greenPaint);o.position.y=.35,r.add(o);for(let h=0;h<4;h++){let u=new D(nt(.04,.72,.92,1),y.darkTrim);u.position.set(-.5+h*.33,.35,0),r.add(u)}let a=new D(nt(1.35,.06,.95,1),y.darkTrim);a.position.y=.72,r.add(a);let l=new D(new be(.5,.5),new te({map:wi(t,{w:128,h:128,size:100,bg:"#f0c020",color:"#111"}),roughness:.6}));l.position.set(0,.38,.46),r.add(l);let c=l.clone();c.position.z=-.46,c.rotation.y=Math.PI,r.add(c),r.position.set(e.x,0,e.z),_.bake(r),_.col(e.x-.65,0,e.z-.45,e.x+.65,.75,e.z+.45,{surf:"metal"})}function Tg(n,t){let e=new Et,i=new D(new mt(.12,.16,8.5,10),y.bark);i.position.y=4.25,e.add(i);let s=new D(nt(.12,.12,2,1),y.wood);s.position.y=7.8,e.add(s);for(let o of[-.85,0,.85]){let a=new D(new mt(.04,.05,.14,8),y.white);a.position.set(0,7.93,o),e.add(a)}let r=new D(new mt(.25,.25,.7,12),y.metal);r.position.set(.3,6.6,0),e.add(r),e.position.set(n,0,t),_.bake(e),_.col(n-.16,0,t-.16,n+.16,8.5,t+.16,{surf:"wood"})}function Bl(n,t,e,i){let s=[];for(let o=0;o<=24;o++){let a=o/24;s.push(new F(n+(t-n)*a,e-Math.sin(a*Math.PI)*.6,i))}let r=new Kr(new fr(s),24,.012,4,!1);_.addGeo(y.black,r,new $t)}function Ou(n,t,e){let i=new Et,s=new D(nt(1.2,.8,.05,1),y.white);s.position.set(0,3.2,0),i.add(s);let r=new D(nt(.45,.35,.06,1),y.redPaint);r.position.set(0,3.05,.005),i.add(r);let o=new D(nt(.37,.27,.07,1),y.white);o.position.set(0,3.05,.006),i.add(o);let a=new D(new Xe(.23,.012,6,20),y.redPaint);a.rotation.x=Math.PI/2,a.position.set(0,2.9,.28),i.add(a);let l=new D(new mt(.23,.15,.4,12,1,!0),Ut(16777215,{wireframe:!0}));l.position.set(0,2.7,.28),i.add(l),i.position.set(n,0,t),i.rotation.y=e,_.bake(i)}function Z_(n,t){let e=new Et;for(let s of[-1.4,1.4])for(let r of[-.6,.6]){let o=new D(new mt(.04,.04,2.5,8),y.redPaint);o.position.set(s,1.2,r*.5),o.rotation.x=r*.45,e.add(o)}let i=new D(new mt(.05,.05,3,8),y.redPaint);i.rotation.z=Math.PI/2,i.position.y=2.35,e.add(i);for(let s of[-.6,.6]){for(let o of[-.18,.18]){let a=new D(new mt(.008,.008,1.8,4),y.steel);a.position.set(s+o,1.45,0),e.add(a)}let r=new D(nt(.45,.04,.2,1),y.black);r.position.set(s,.55,0),e.add(r)}e.position.set(n,0,t),_.bake(e);for(let s of[-1.4,1.4])_.col(n+s-.1,0,t-.6,n+s+.1,2.4,t+.6,{bullet:!1,surf:"metal"})}function J_(n,t){let e=new Et,i=new D(new mt(1.6,1.6,.04,28),y.black);i.position.y=.85,e.add(i);let s=new D(new Xe(1.65,.1,6,28),Ut(2783968));s.rotation.x=Math.PI/2,s.position.y=.88,e.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new D(new mt(.03,.03,.88,6),y.steel);a.position.set(Math.cos(o)*1.6,.44,Math.sin(o)*1.6),e.add(a)}e.position.set(n,0,t),_.bake(e),_.col(n-1.4,0,t-1.4,n+1.4,.9,t+1.4,{bullet:!1,surf:"carpet"})}function Pu(n,t,e,i){let s=new Et,r=new D(nt(1.3,2.2,.05,1),y.paintwood);r.position.set(.65,1.1,0),s.add(r);for(let[a,l]of[[.35,1.55],[.95,1.55],[.35,.6],[.95,.6]]){let c=new D(nt(.4,.6,.07,1),y.paintwood);c.position.set(a,l,0),s.add(c)}let o=new D(new he(.04,8,6),y.chrome);o.position.set(1.15,1,.05),s.add(o),s.position.set(n,.18,t),s.rotation.y=e+i,_.bake(s)}function yg(n,t,e){let i=new D(nt(1,.02,.6,1),Ut(9071162,{map:tt.carpet.map}));i.position.set(n,.21,t),_.bake(i);for(let s of[-1,1]){let r=new D(new mt(.2,.15,.35,14),Ut(11558970));r.position.set(n+s*1,.38,t+e*.2),_.bake(r);let o=new D(new Li(.28,2),y.leaf);o.position.set(n+s*1,.75,t+e*.2),_.bake(o)}}function Hu(n,t){_.box(y.metal,n,.4,t,.8,.8,.8,{surf:"metal",bullet:!0});let e=new D(new mt(.3,.3,.02,16),y.black);e.position.set(n,.81,t),_.bake(e);for(let i=0;i<7;i++)_.box(y.darkTrim,n-.41,.15+i*.1,t,.01,.03,.7,{collide:!1})}function Ol(n,t,e){let i=new Et;for(let l of[-.5,.5]){let c=new D(new Xe(.3,.025,6,20),y.tire);c.position.set(l,.32,0),i.add(c)}let s=new D(new mt(.02,.02,.9,6),y.carBlue);s.rotation.z=Math.PI/2,s.position.set(0,.6,0),i.add(s);let r=new D(new mt(.02,.02,.6,6),y.carBlue);r.rotation.z=.8,r.position.set(-.2,.45,0),i.add(r);let o=new D(nt(.22,.05,.1,1),y.black);o.position.set(-.25,.8,0),i.add(o);let a=new D(new mt(.015,.015,.5,6),y.chrome);a.rotation.x=Math.PI/2,a.position.set(.45,.85,0),i.add(a),i.position.set(n,0,t),i.rotation.set(0,e,.25),_.bake(i)}function Mg(n,t){let e=new D(new Xe(.22,.06,8,20),Ut(2787882));e.position.set(n,.35,t),_.bake(e);let i=new D(nt(.4,.5,.05,1),y.darkTrim);i.position.set(n,.25,t-.08),_.bake(i)}function K_(){for(let e of[-24,-6,12,28])Tg(e,-6.3);for(let[e,i]of[[-24,-6],[-6,12],[12,28]])for(let s of[-.85,0,.85])Bl(e,i,7.93,-6.3+s);Bl(-40,-24,7.93,-6.3),Bl(28,44,7.93,-6.3),Ou(8,-9.85,0),Ou(-8,9.85,Math.PI),Z_(14,23),J_(-14,-22.5),Pu(-1.7,-9.5,0,-1.2),Pu(1.7,9.5,Math.PI,-1.2),Pu(1.3,-17.5,Math.PI,1.1),Pu(-1.3,17.5,0,1.1),yg(-1,-8.3,1),yg(1,8.3,-1),Hu(6,-18.4),Hu(-6,18.4),Ol(-11.5,-7.8,.3),Ol(11.2,7.8,2.6),Mg(-6.5,-18.2),Mg(6.5,18.2);let n=new D(new mt(.4,.4,.02,20),y.rust);n.position.set(-6,.012,1.5),_.bake(n);let t=n.clone();t.position.set(18,.012,-1.6),_.bake(t);for(let e of[-18,0,18])for(let i of[-1,1])_.box(y.darkTrim,e,.03,i*3.85,.7,.02,.25,{collide:!1})}function jf(n,t="town"){Eg(t),k_(),_=new Ru;{let r=_.box.bind(_),o=new Set([tt.brick.map,tt.concrete.map,tt.siding.map]);_.box=(a,l,c,h,u,d,f,p={})=>{if(r(a,l,c,h,u,d,f,p),!y.grime||p.rotY||p.noGrime||!o.has(a.map)||d<2||c-d/2>.4||a===y.concrete&&u>6&&f>6)return;let g=c-d/2+.4,m=(x,M,w,E)=>{if(x<.6)return;let R=new $t().makeRotationY(M);R.setPosition(w,g,E),_.addGeo(y.grime,Qf(x),R)};m(u,0,l,h+f/2+.008),m(u,Math.PI,l,h-f/2-.008),m(f,Math.PI/2,l+u/2+.008,h),m(f,-Math.PI/2,l-u/2-.008,h)}}if(en.id==="market")return tb(n);if(en.id==="station")return nb(n);if(en.id==="port")return sb(n);if(en.id==="villa")return rb(n);if(en.id==="ship")return ab(n);if(en.id==="border")return cb(n);if(en.id==="slums")return hb(n);Sn(42);let e=new be(220,220,1,1);e.rotateX(-Math.PI/2),pi(e,220/4,220/4),_.addGeo(y.grass,e,new $t),_.box(y.asphalt,0,.005,0,120,.01,8,{collide:!1,uv:6});for(let r=-58;r<58;r+=4)_.box(y.lineY,r,.012,0,2.2,.004,.14,{collide:!1});for(let r of[-1,1])_.box(y.lineW,0,.012,r*3.6,120,.004,.12,{collide:!1});for(let r of[-1,1])_.box(y.concrete,0,.075,r*4.85,120,.15,1.7,{uv:2,surf:"concrete",bullet:!1}),_.box(y.concrete,0,.08,r*4.03,120,.16,.12,{collide:!1,uv:1});_.box(y.concrete,8,.02,-7.5,5.2,.04,4.4,{collide:!1,uv:2}),_.box(y.concrete,-8,.02,7.5,5.2,.04,4.4,{collide:!1,uv:2}),_.box(y.concrete,-1,.02,-7.6,1.6,.04,3.2,{collide:!1,uv:1}),_.box(y.concrete,1,.02,7.6,1.6,.04,3.2,{collide:!1,uv:1}),pg({x0:-6,x1:5.5,z0:-17.5,z1:-9.5,frontNeg:!0,siding:y.sidingY,roof:y.roof,doorX:-1,chimX:-4.5,frontOps:[{c:-1,d:1},{c:-4,w:1.6},{c:2.6,w:1.8}],backOps:[{c:2,d:1},{c:-3.5,w:1.4},{c:-.2}],leftOps:[{c:-11.5,w:1.4},{c:-15.5,d:1}],rightOps:[{c:-12.5,d:1,w:1.4}],partX:.5,partZ0:-17.4,partZ1:-12.8,partDoor:-14.5}),mg({x0:5.5,x1:10.5,z0:-17,z1:-9.8,frontNeg:!0,siding:y.sidingY,roof:y.roof2,outerX:10.5}),Tr(-3.5,-12,0,y.fabricG),an(-3.5,-10.9,1.1,.6,.42),ua(-3.5,-11.6,3.2,2.2,y.carpetR),Uu(-3.5,-9.95,Math.PI),dn(-5.6,-14,Math.PI/2),Fu(-5.4,-10.2),ca(-.2,1.7,-17.33,0,y.paint1),Yf(1,3.8,-17.5,-1),an(3,-13.8,1.4,.9,.76),qn(2.4,-14.5,0),qn(3.6,-13.1,Math.PI),qn(2.4,-13.1,Math.PI),ca(-5.85,1.7,-12,Math.PI/2,y.paint2),wr(-3.2,-15.8,Math.PI/2),pg({x0:-5.5,x1:6,z0:9.5,z1:17.5,frontNeg:!1,siding:y.sidingB,roof:y.roof2,doorX:1,chimX:4.5,frontOps:[{c:1,d:1},{c:4,w:1.6},{c:-2.6,w:1.8}],backOps:[{c:-2,d:1},{c:3.5,w:1.4},{c:.2}],leftOps:[{c:12.5,d:1,w:1.4}],rightOps:[{c:11.5,w:1.4},{c:15.5,d:1}],partX:-.5,partZ0:12.8,partZ1:17.4,partDoor:14.5}),mg({x0:-10.5,x1:-5.5,z0:9.8,z1:17,frontNeg:!1,siding:y.sidingB,roof:y.roof,outerX:-10.5}),Tr(3.5,12,Math.PI,y.fabricO),an(3.5,10.9,1.1,.6,.42),ua(3.5,11.6,3.2,2.2,y.carpetB),Uu(3.5,9.95,0),dn(5.6,14,-Math.PI/2),Fu(5.4,10.2),ca(.2,1.7,17.33,Math.PI,y.paint2),Yf(-3.8,-1,17.5,1),an(-3,13.8,1.4,.9,.76),qn(-2.4,14.5,Math.PI),qn(-3.6,13.1,0),wr(3.2,15.8,-Math.PI/2),q_(1.5,-1.6,0),fn(-13.5,2,0,y.carRed),fn(13,1.8,Math.PI,y.carWhite,!0),fn(8,-7.6,Math.PI/2,y.carBlue),Fn(-26,-1.5,0),Fn(-26,1.5,0),Fn(26,-1.5,0),Fn(26,1.5,0),Fn(-21,0,Math.PI/2+0),Ct(20.5,0,-2.2,1.1),Ct(20.5,0,-1,1.1),Ct(20.5,1.1,-1.6,1.1,.3),Es(-9,-5.4,1),Es(9,5.4,-1),Es(-22,5.4,-1),Es(22,-5.4,1),gi(-4.2,-5,2779706),gi(-3.4,-5,2771594),gi(4.2,5,2779706),gi(5,5,5921370),Bu(-11,-4.9),Bu(11,4.9),gg(-2.5,-6.2,0),gg(2.5,6.2,Math.PI),mi(-9,-12.5,1.1,1),mi(12.5,-19,1,2),mi(-12.5,19,1,3),mi(9,12.5,1.1,4),mi(-27,-8,1.2,5),mi(27,8,1.2,6),mi(-27,12,1,7),mi(27,-21,1,8),Cu(-30,-6.2,-11,-6.2,.9,[[5,6.5]]),Cu(11,6.2,30,6.2,.9,[[12,13.5]]),xg(-24.5,-15.5),zf(-17,-16.5,3.2,1.2),zf(-21.5,-9.5,2,1.2),Rr(-15.5,-9.2,0),Rr(-15.5,-10.2,1),Ct(-14,0,-13.5,1),Ct(-14,0,-14.6,1),Ct(-14,1,-14,.9,.4),ni(n,"A",We.A),Y_(18.5,-18),Nl(15,-11,0),Nl(22,-11.5,Math.PI/2),Nl(15.6,-14.2,Math.PI/2),Ct(22.5,0,-14.5,1.1),Ct(22.5,1.1,-14.5,.8,.5),Rr(20.5,-9,2),ni(n,"B",We.B),$f(4,20),Zf(-4.5,20.5),Ct(-16,0,13,1.1),Ct(-16,0,14.1,1.1),Ct(16,0,12.5,1),Ct(17.1,0,12.5,1),Ct(16.5,1,12.5,.9),Nl(-20,10,0),Nl(20,17,Math.PI/2),gi(-11.6,17.5,2771594),gi(-12.3,17.5,2779706),zf(14.5,20.5,3,1.2),xg(22.5,20.5),$f(-8.5,-22.5),Zf(8.5,-21.5),Cu(-30,-19.5,30,-19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),Cu(-30,19.5,30,19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),ei(-33,-28,33,-26.6),ei(-33,26.6,33,28),ei(-33,-26.6,-31.6,-5.8),ei(-33,5.8,-31.6,26.6),ei(31.6,-26.6,33,-5.8),ei(31.6,5.8,33,26.6),_.col(-31.6,0,-5.8,-30.5,6,5.8,{bullet:!1}),_.col(30.5,0,-5.8,31.6,6,5.8,{bullet:!1}),ei(-12.5,9.5,-11.8,15.5,1.6),ei(11.8,-15.5,12.5,-9.5,1.6),ei(-30.5,-4,-27.5,-3.5,1.2),K_();let i=new Et;Sn(9);for(let r=0;r<26;r++){let o=r/26*Math.PI*2,a=55+Mt()*15,l=Math.cos(o)*a,c=Math.sin(o)*a,h=new D(nt(8,5,7,2.5),[y.sidingY,y.sidingB,y.sidingG][r%3]);h.position.set(l,2.5,c),h.rotation.y=-o,i.add(h);let u=new D(new jn(6.2,2.5,4),y.roof2);u.position.set(l,6.2,c),u.rotation.y=-o+Math.PI/4,i.add(u)}_.bake(i);for(let r=0;r<30;r++){let o=r/30*Math.PI*2+.1;mi(Math.cos(o)*(42+Mt()*8),Math.sin(o)*(40+Mt()*8),1.2+Mt()*.5,30+r)}_.colliders=_.colliders.filter(r=>r.min.x>-40&&r.max.x<40&&r.min.z>-36&&r.max.z<36),_.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),_.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),_.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),_.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let s=_.finish(n);Q_(n,_.colliders);for(let[r,o]of[[-1.5,-13.5],[1,13.5]]){let a=new tn(16767136,6,9,1.6);a.position.set(r,2.6,o),n.add(a)}return{colliders:_.colliders,meshes:s}}function Rg(n,t,e,i){let s=null,r=-1;for(let o of n)t>=o.min.x&&t<=o.max.x&&i>=o.min.z&&i<=o.max.z&&o.max.y<=e+.05&&o.max.y>r&&(r=o.max.y,s=o);return s?s.surf:en.ground==="concrete"||Math.abs(i)<4?"concrete":"grass"}var t0={time:{value:0}};function Q_(n,t){let e=window.__vwQuality??1,i=e===0?3500:e===1?9e3:16e3,s=[],r=[],o=[];Sn(77);for(let v=0;v<7;v++){let A=Mt()*Math.PI,P=.1+Mt()*.16,L=.02,B=(Mt()-.5)*.15,V=(Mt()-.5)*.12,I=(Mt()-.5)*.12,U=Math.cos(A),G=Math.sin(A),X=(Z,ft)=>[V+U*Z*L+B*ft*U*0,ft*P,I+G*Z*L+B*ft],j=[X(-1,0),X(1,0),X(0,1)],Y=-G,$=U;for(let Z of j){s.push(...Z),r.push(Y*.3,.9,$*.3);let ft=Z[1]/P;o.push(.18+ft*.32,.34+ft*.38,.1+ft*.1)}}let a=new je;a.setAttribute("position",new ce(s,3)),a.setAttribute("normal",new ce(r,3)),a.setAttribute("color",new ce(o,3));let l=new te({vertexColors:!0,roughness:.9,side:hn});l.onBeforeCompile=v=>{v.uniforms.time=t0.time,v.vertexShader=`uniform float time;
`+v.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.);
      float sway = sin(time*1.7 + wp.x*0.35 + wp.z*0.27) * 0.06 + sin(time*3.1 + wp.x*1.3) * 0.02;
      transformed.x += sway * position.y * 3.0; transformed.z += sway * position.y * 1.5;`)};let c=new ur(a,l,i),h=new $t,u=new _n,d=new F,f=new F,p=(v,A)=>{if(Math.abs(A)<5.8)return!0;for(let P of t)if(P.max.y>.12&&v>P.min.x-.1&&v<P.max.x+.1&&A>P.min.z-.1&&A<P.max.z+.1)return!0;return v>5.6&&v<10.6&&A>-9.8&&A<-5.3||v>-10.6&&v<-5.4&&A>5.3&&A<9.8||Math.abs(v+1)<.9&&A>-9.5&&A<-5.8||Math.abs(v-1)<.9&&A<9.5&&A>5.8},g=0,m=0;for(;g<i&&m<i*6;){m++;let v=re.minX+.3+Mt()*(re.maxX-re.minX-.6),A=re.minZ+.3+Mt()*(re.maxZ-re.minZ-.6);if(p(v,A))continue;let P=.7+Mt()*.9;u.setFromAxisAngle(new F(0,1,0),Mt()*6.28),d.set(P,P*(.8+Mt()*.6),P),f.set(v,0,A),h.compose(f,u,d),c.setMatrixAt(g++,h)}c.count=g,c.receiveShadow=!0,c.castShadow=!1,c.frustumCulled=!1,n.add(c);let x=new Li(.045,0),M=new te({roughness:.6}),w=220,E=new ur(x,M,w),R=new qt,S=[[-5.6,-8.9,4,.5],[.4,-8.9,4.6,.5],[-5,8.9,4.4,.5],[2.4,8.9,3.4,.5]];for(let v=0;v<w;v++){let A=S[v%S.length],P=A[0]+Mt()*A[2],L=A[1]+(Mt()-.5)*A[3];h.compose(new F(P,.22+Mt()*.18,L),u,new F(1,1,1)),E.setMatrixAt(v,h),E.setColorAt(v,R.setHex([15747690,16764992,16777215,10510560,16747050][Math.floor(Mt()*5)]))}n.add(E);let b=new Et;n.add(b);for(let v of S){let A=new D(new ve(v[2]+.2,.18,v[3]+.2),y.dirt);A.position.set(v[0]+v[2]/2,.09,v[1]),A.receiveShadow=!0,b.add(A);for(let P=0;P<v[2]*6;P++){let L=new D(new Li(.1,1),y.leaf);L.position.set(v[0]+Mt()*v[2],.22,v[1]+(Mt()-.5)*v[3]),L.scale.y=.7,b.add(L)}}un(b)}var Vt=(n,t=1.3)=>({c:n,w:t,b:0,t:2.2}),fe=(n,t=1.6,e=1,i=2)=>({c:n,w:t,b:e,t:i,win:1,noCurtain:1});function Ag(n,t,e,i,s,r){let o=Ut(r,{roughness:.8,side:hn}),a=t-n,l=i-e,c=Math.max(2,Math.round(a/.5));for(let h=0;h<c;h++){let u=h%2?o:y.white;_.box(u,n+(h+.5)*a/c,s,(e+i)/2,a/c,.04,l,{collide:!1})}}function Sr(n,t,e,i,s){let r=e-t;_.box(y.paintwood,n,.5,(t+e)/2,1.1,1,r,{surf:"wood",uv:1.5});let o=Math.floor(r/.9);for(let a=0;a<o;a++){let l=t+.45+a*(r-.9)/Math.max(1,o-1);_.box(y.wood,n,1.06,l,.95,.12,.8,{collide:!1});let c=Ut(s[a%s.length],{roughness:.45});for(let h=0;h<9;h++){let u=new D(new he(.11,10,8),c);u.position.set(n-.3+h%3*.3,1.2+(h===4?.08:0),l-.25+Math.floor(h/3)*.25),_.bake(u)}}for(let a of[t+.1,e-.1])_.box(y.steel,n+i*.5,1.3,a,.06,2.6,.06,{collide:!1});Ag(n-.7,n+.7,t,e,2.6,s[0]===15231514?14174762:2787914)}function qe(n,t,e=1,i=0){_.box(y.wood,n,.07,t,1.2,.14,1,{surf:"wood"});let s=Ut(11569754,{roughness:.9});for(let r=0;r<e;r++)_.box(s,n,.14+.35+r*.7,t,1.1,.7,.92,{surf:"wood"})}function ao(n,t,e=0){let i=Math.abs(Math.cos(e))>.5,s=i?1.9:1.2,r=i?1.2:1.9;_.box(y.greenPaint,n,.6,t,s,1.2,r,{surf:"metal"}),_.box(y.black,n,1.23,t,s+.06,.06,r+.06,{collide:!1})}function ha(n,t,e,i){let s=new Et,r=(L,B,V,I,U)=>{let G=new D(L,B);return G.position.set(V,I,U),s.add(G),G},o=2.3,a=2.22,l=Ut(i,{roughness:.42,metalness:.35}),c=Ut(i===15261904||i===15921902?13159632:i,{roughness:.35,metalness:.55}),h=Ut(15659246,{roughness:.3,metalness:.3}),u=Ut(2105376,{roughness:.8}),d=Ut(5922402,{roughness:.6});for(let L of[-1,1])r(nt(7.6,.2,.12),u,.1,.62,L*.52);let f=r(new mt(.26,.26,.9,16),Ut(12106944,{metalness:.8,roughness:.3}),-.6,.6,.85);f.rotation.z=Math.PI/2;for(let L of[-1,1])r(nt(2,.05,.04),d,1.9,.62,L*1.08),r(nt(2,.05,.04),d,1.9,.42,L*1.08);let p=-3.42,g=-1.42,m=new ui;m.moveTo(g,.5),m.lineTo(-2.4+.56,.5),m.absarc(-2.4,.45,.56,.09,Math.PI-.09,!1),m.lineTo(p+.12,.5),m.quadraticCurveTo(p,.5,p,.7),m.lineTo(p,1.3),m.quadraticCurveTo(p,1.42,p+.05,1.5),m.lineTo(p+.2,2.18),m.quadraticCurveTo(p+.25,2.3,p+.42,2.3),m.lineTo(g,2.3),m.lineTo(g,.5);let x=new bi(m,{depth:a-.12,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:3,curveSegments:8});x.translate(0,0,-(a-.12)/2),pi(x,.5,.5),r(x,h,0,0,0);let M=r(nt(.04,.72,a-.2),y.glass,p+.15,1.86,0);M.rotation.z=-.27;for(let L of[-1,1])r(nt(.02,.03,.55),y.black,p+.04,1.54,L*.35).rotation.set(L*.15,0,-.27);for(let L of[-1,1]){let B=L*(a/2+.005);r(nt(.95,.62,.02),y.glass,p+.95,1.86,B);let V=r(nt(.3,.5,.02),y.glass,p+.34,1.8,B);V.rotation.z=-.27,r(nt(.02,1.6,.012),y.black,p+.42,1.3,B+L*.004),r(nt(.02,1.6,.012),y.black,p+1.5,1.3,B+L*.004),r(nt(.2,.04,.03),y.chrome,p+1.3,1.42,B+L*.015),r(nt(.5,.06,.25),d,p+.95,.55,L*(a/2+.05));let I=r(nt(.03,.03,.32),y.black,p+.3,1.75,L*(a/2+.16));r(nt(.06,.38,.2),y.black,p+.3,1.7,L*(a/2+.33)),r(nt(.01,.32,.15),y.chrome,p+.265,1.7,L*(a/2+.33))}r(nt(.04,.32,1.3),y.black,p-.08,1,0);for(let L=0;L<4;L++)r(nt(.03,.03,1.26),y.chrome,p-.1,.88+L*.08,0);for(let L of[-1,1])r(nt(.05,.2,.36),y.lampGlow,p-.08,1.02,L*.88),r(nt(.05,.08,.2),Ut(16751136,{emissive:8400896}),p-.08,.84,L*.92);r(nt(.22,.26,a+.06),d,p-.1,.58,0),r(nt(.02,.12,.6),Ut(2775610),p+.02,2,0);let w=-1.32,E=4.18,R=E-w,S=(w+E)/2,b=.75,v=3.2;r(nt(R,v-b,o,1),l,S,(b+v)/2,0),r(nt(R+.04,.1,o+.04),c,S,v-.05,0),r(nt(R+.04,.12,o+.04),c,S,b+.06,0);for(let L=w+.3;L<E-.2;L+=.55)for(let B of[-1,1])r(nt(.06,v-b-.2,.03),c,L,(b+v)/2,B*(o/2+.012));for(let L of[-1,1])r(nt(.08,v-b,.08),c,w+.04,(b+v)/2,L*(o/2));r(nt(.02,v-b-.14,.02),y.black,E+.012,(b+v)/2,0);for(let L of[-1,1]){r(nt(.08,v-b,.1),c,E,(b+v)/2,L*(o/2-.02));for(let B of[b+.35,(b+v)/2,v-.35])r(nt(.06,.12,.14),d,E+.03,B,L*(o/2-.1));for(let B of[.28,.75])r(new mt(.025,.025,v-b-.1,8),y.chrome,E+.06,(b+v)/2,L*B),r(nt(.06,.05,.2),y.chrome,E+.08,1.6,L*B-L*.08);r(nt(.06,.16,.3),Ut(13637656,{emissive:5242880}),E+.02,.55,L*.9),r(nt(.04,.4,.4),y.black,E-.6,.42,L*(o/2-.2))}r(nt(.12,.12,o-.2),d,E+.02,.5,0);for(let L of[-1,1])Fl(s,-2.4,.45,L*.95,.45,.28),Fl(s,2.55,.45,L*.98,.45,.28),Fl(s,2.55,.45,L*.68,.45,.28);let A=Ut(16752672,{emissive:8404992,roughness:.3});for(let L of[-1,1]){for(let B=w+.4;B<E;B+=1.3)r(nt(.12,.06,.03),A,B,b+.02,L*(o/2+.03));for(let B=w+.2;B<E;B+=1.1)r(nt(.08,.08,.02),Ut(13637656,{emissive:4194304}),B,.62,L*1.1)}for(let L of[-.5,0,.5])r(nt(.08,.06,.14),A,p+.5,2.34,L);r(nt(.35,.05,a-.1),d,p+.32,2.32,0);{let L=Ut(2764340,{roughness:.9});for(let V of[-.5,.5])r(nt(.5,.12,.5),L,p+1.2,1.2,V),r(nt(.12,.7,.5),L,g-.15,1.6,V);r(nt(.4,.3,a-.3),Ut(2236966),p+.4,1.38,0);let B=r(new Xe(.2,.025,6,16),y.black,p+.75,1.55,-.5);B.rotation.set(.3,Math.PI/2,0),B.rotation.z=.9}{let L=r(new be(.42,.21),y.plate,p-.235,.6,0);L.rotation.y=-Math.PI/2;let B=r(new be(.42,.21),y.plate,E+.1,.5,0);B.rotation.y=Math.PI/2}for(let L of[-1,1]){let B=r(new be(R,.9),y.grime,S,b+.45,L*(o/2+.03));L<0&&(B.rotation.y=Math.PI);let V=r(new be(2,.6),y.grime,(p+g)/2,.85,L*(a/2+.07));L<0&&(V.rotation.y=Math.PI)}let P=new D(new be(3.2,1.2),new te({map:wi("\u9752\u679C\u4FBF",{w:512,h:192,size:120,color:i===9091146?"#ffffff":"#2a6a3a",bg:"rgba(0,0,0,0)"}),transparent:!0,roughness:.6}));for(let L of[-1,1]){let B=P.clone();B.position.set(1.5,2.1,L*(o/2+.035)),B.rotation.y=L>0?0:Math.PI,s.add(B)}s.position.set(n,0,t),s.rotation.y=e,_.bake(s),_.col(n-1.4,.7,t-1.2,n+4.2,3.2,t+1.2,{surf:"metal"}),_.col(n-3.4,.4,t-1.15,n-1.4,2.3,t+1.15,{surf:"metal"})}function Vu(n,t,e){let i=Ut(15773728,{roughness:.5,map:tt.metal.map});_.box(i,n,.75,t,1.2,1.1,1,{surf:"metal"}),_.box(y.black,n+.2,1.6,t,.9,.08,1,{collide:!1});for(let s of[-1,1])_.box(y.darkTrim,n-.35,1.2,t+s*.45,.06,2.2,.06,{collide:!1});for(let s of[-1,1])_.box(y.steel,n-.75,.6,t+s*.3,.06,1.8,.1,{collide:!1});for(let s of[-1,1])_.box(y.steel,n-1.1,.06,t+s*.3,.8,.05,.12,{collide:!1})}function lo(n,t,e,i){let s=Ut(i,{roughness:.4}),r=Math.abs(Math.cos(e))>.5;_.box(s,n,.9,t,r?1:.8,1.8,r?.8:1,{surf:"metal"});let o=new D(new be(.7,1.1),y.lampGlow);o.position.set(n+(r?0:Math.sin(e)*.41),1.1,t+(r?Math.cos(e)*.41:0)),o.rotation.y=e,_.bake(o)}function Tn(n,t,e,i,s,r=4,o=1,a="#2a5a3a"){let l=new D(new be(r,o),new te({map:wi(s,{w:512,h:Math.round(512*o/r),size:Math.round(380*o/r),color:"#fff8e0",bg:a}),roughness:.7}));l.position.set(n,t,e),l.rotation.y=i,_.bake(l)}function Gn(n,t,e,i,s){let r=Math.hypot(e-n,i-t),o=Math.abs(e-n)>Math.abs(i-t);_.box(y.steel,(n+e)/2,s+1,(t+i)/2,o?r:.06,.06,o?.06:r,{collide:!1}),_.box(y.steel,(n+e)/2,s+.5,(t+i)/2,o?r:.04,.04,o?.04:r,{collide:!1});let a=Math.ceil(r/1.2);for(let l=0;l<=a;l++){let c=l/a;_.box(y.steel,n+(e-n)*c,s+.5,t+(i-t)*c,.05,1,.05,{collide:!1})}_.col(Math.min(n,e)-.04,s,Math.min(t,i)-.04,Math.max(n,e)+.04,s+1.05,Math.max(t,i)+.04,{bullet:!1,surf:"metal"})}function zn(n,t,e,i){let s=Ut(i,{roughness:.5});for(let r=0;r<e;r++)_.box(s,n,.18+r*.36,t,.62,.34,.44,{surf:"metal",collide:!1}),_.box(y.darkTrim,n,.33+r*.36,t,.64,.03,.46,{collide:!1});_.col(n-.31,0,t-.22,n+.31,e*.36,t+.22,{surf:"metal"})}function Iu(n,t,e,i,s,r="#fff6d0"){let o=new D(new be(.9,.42),new te({map:wi(s,{w:256,h:120,size:Math.min(64,Math.floor(230/s.length*1.15)),color:"#2a1a0a",bg:r}),roughness:.8,side:hn}));o.position.set(n,t,e),o.rotation.y=i,_.bake(o)}function Xn(n,t,e,i){_.box(y.concrete,n,.35,t,e,.7,i,{surf:"concrete",uv:1}),_.box(y.dirt,n,.69,t,e-.16,.02,i-.16,{collide:!1});for(let s=0;s<Math.round(e*i*3);s++){let r=new D(new Li(.18+Mt()*.12,1),y.leaf);r.position.set(n-e/2+.2+Mt()*(e-.4),.85+Mt()*.2,t-i/2+.2+Mt()*(i-.4)),_.bake(r)}}function e0(n,t){_.box(y.steel,n-1.4,1.2,t,.08,2.4,.08,{collide:!1}),_.box(y.steel,n+1.4,1.2,t,.08,2.4,.08,{collide:!1}),_.box(y.roof2,n,2.45,t+.3,3.2,.08,1.4,{collide:!1}),_.box(y.glass,n,1.3,t-.35,2.8,1.8,.04,{bullet:!1}),_.box(y.wood,n,.45,t,2.4,.08,.4,{collide:!1}),Tn(n,2.15,t-.38,0,"\u5E02\u5834\u524D",1.4,.35,"#2a4a8a")}function Vf(n,t,e,i){let s=new mt(.07,.07,Math.abs(e-t),10);s.rotateX(Math.PI/2);let r=new D(s,y.rust);r.position.set(n,i,(t+e)/2),_.bake(r)}function j_(){Sn(311),Iu(-4.3,2,-3.1,Math.PI/2,"\u306B\u3093\u3058\u3093 98\u5186"),Iu(-4.3,2,3.1,Math.PI/2,"\u306A\u3059 3\u672C150\u5186"),Iu(4.6,2,-3.1,-Math.PI/2,"\u30D4\u30FC\u30DE\u30F3 5\u500B100\u5186"),Iu(4.6,2,3.1,-Math.PI/2,"\u30C8\u30DE\u30C8 1\u7BB1500\u5186","#ffe0d0");for(let[t,e]of[[-4,-3],[4,-3],[-4,3],[4,3],[0,0]])_.box(y.darkTrim,t,3.75,e,.02,.7,.02,{collide:!1});_.box(y.paintwood,-5.6,.5,5.4,1.6,1,.7,{surf:"wood"}),_.box(y.black,-5.9,1.12,5.4,.4,.25,.35,{collide:!1}),Tn(-5.6,1.6,5.06,Math.PI,"\u304A\u4F1A\u8A08",.9,.3,"#7a2a1a");for(let[t,e,i]of[[-2.9,-4.6,14174762],[-2.9,4.6,2779856],[3.1,1.6,2793546],[3.1,-1.7,15773728]])zn(t,e,2,i);Tn(-8.86,3.1,.2,Math.PI/2,"\u671D\u3069\u308C\u91CE\u83DC",2.2,.55,"#3a7a2a"),Tn(8.86,3.1,0,-Math.PI/2,"\u7523\u5730\u76F4\u9001",2,.55,"#b0402a");let n=Ut(11569754,{roughness:.9});_.box(n,-3.2,Wf+.4,-6.4,.9,.8,.8,{surf:"wood"}),_.box(n,-5.8,Wf+.35,-6.5,1.2,.7,.7,{surf:"wood"}),_.box(n,-5.8,Wf+.95,-6.5,.8,.5,.6,{surf:"wood"}),Xn(-12,-19.6,3,1),Xn(12.5,-12.6,2.4,1);for(let t of[-20,-4,12])Tg(t,-20.6);for(let[t,e]of[[-20,-4],[-4,12]])for(let i of[-.85,0,.85])Bl(t,e,7.93,-20.6+i);Ol(3.5,-20.4,.2),Ol(4.3,-20.4,.1),Bu(-9.2,-11.9),e0(-12,20.4),Xn(10.5,20.6,3,1),Xn(-4.5,11.6,2,.9),Ol(19.2,12,1.4),Bu(11.4,11.9),Vf(-23.45,-18,18,2.6),Vf(-23.45,-18,18,2.85),Vf(-21.05,-1.6,5.6,3.6),Hu(-22.9,1),Hu(-22.9,3);for(let[t,e,i,s]of[[22.3,-15,2793546,3],[22.9,-15,14174762,2],[22.6,-6.8,2779856,3],[22.6,3.6,15773728,2]]){let r=Ut(i,{roughness:.5});for(let o=0;o<s;o++)_.box(r,t,1.1+.18+o*.36,e,.62,.34,.44,{surf:"metal"})}Tn(23.18,4.4,-11,-Math.PI/2,"\u642C\u5165\u53E3 1",1.8,.5,"#3a3a3a"),Tn(23.18,4.4,1,-Math.PI/2,"\u642C\u5165\u53E3 2",1.8,.5,"#3a3a3a");for(let t=0;t<18;t++){let e=-20+Mt()*40,i=-20+Mt()*40;Math.abs(e)<9.5&&Math.abs(i)<7.5||_.box(y.darkTrim,e,.022,i,.6+Mt()*1.4,.002,.4+Mt()*1,{collide:!1,rotY:Mt()*3})}}var Wf=2.4;function tb(n){Sn(77);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/5,160/5),_.addGeo(y.asphalt,t,new $t),_.box(y.concrete,0,.01,0,48,.02,44,{collide:!1,uv:3});for(let d of[-15,15])for(let f=-20;f<=20;f+=3)_.box(y.lineW,f,.025,d,.1,.004,2.6,{collide:!1});for(let d of[-11.5,11.5])_.box(y.lineY,0,.025,d,40,.004,.14,{collide:!1});let e=(d,f,p,g,m=3.2)=>_.box(y.brick,(d+p)/2,m/2,(f+g)/2,Math.abs(p-d),m,Math.abs(g-f),{uv:2.5,surf:"concrete"});e(-24.6,-22.6,24.6,-21.6),e(-24.6,21.6,24.6,22.6),e(-24.6,-21.6,-23.6,21.6),e(23.6,-21.6,24.6,21.6);for(let d of[-22.1,22.1])for(let f=-24;f<=24;f+=2)_.box(y.steel,f,3.8,d,.05,1.2,.05,{collide:!1});let i=4.2;_.box(y.tile,0,.02,0,18,.04,14,{collide:!1,uv:1.2}),Un(-9,-7,7,0,i,-1,y.brick,y.plaster,[Vt(-4.2,1.4),fe(.2,2.2,1.05,2.1),Vt(4.2,1.4)]),Un(9,-7,7,0,i,1,y.brick,y.plaster,[fe(-4.2,1.8),Vt(0,1.7),fe(4.2,1.8)]),Rn(-7,-9,9,0,i,-1,y.brick,y.plaster,[{c:-6.2,w:1.6,b:2.95,t:3.8,win:1,noCurtain:1},{c:-3.6,w:1.4,b:2.95,t:3.8,win:1,noCurtain:1},{c:2.2,w:4,b:0,t:2.8},fe(6.4,1.6)]),Rn(7,-9,9,0,i,1,y.brick,y.plaster,[Vt(-5.6,1.3),{c:.5,w:4,b:0,t:1.3},fe(5.8,1.6)]);for(let d=1.35;d<i-.1;d+=.16)_.box(y.metal,.5,d,7,3.96,.13,.05,{collide:!1});_.box(y.darkTrim,.5,1.33,7,4,.06,.12,{collide:!1}),_.box(y.roof2,0,i+.12,0,18.6,.24,14.6,{uv:3,surf:"metal"});for(let d of[-5,0,5])_.box(y.glass,d,i+.3,0,1.6,.12,12,{collide:!1});Tn(2.2,3.4,-7.14,Math.PI,"\u30D9\u30B8\u9752\u679C\u5E02\u5834",4.6,.9,"#2a5a3a"),Tn(.5,4.75,7.14,0,"VEGE MARKET",5.2,.8,"#7a2a1a");let s=[15231514,13642266,3840554],r=[3840554,12095584,9058976];Sr(-4.3,-5,-1.2,-1,s),Sr(-4.3,1.2,5,-1,r),Sr(4.6,-5,-1.2,1,r),Sr(4.6,1.2,5,1,s),qe(.2,-2.5,1),Ct(-.6,0,2.6,.9,.3);let o=2.4;_.box(y.floor,-5.5,o-.08,-6,7,.16,2,{surf:"wood",uv:1.5});for(let d of[-2.1])for(let f of[-5.1])_.box(y.steel,d,(o-.16)/2,f,.14,o-.16,.14,{surf:"metal"});Gn(-2.05,-5,-2.05,-7,o),Gn(-7.6,-5,-2.05,-5,o);let a=8,l=.72;for(let d=0;d<a;d++){let f=(d+1)*(o/a),p=.9-d*l;_.box(y.concrete,-8.25,f/2,p-l/2,1.3,f,l,{surf:"concrete",uv:1})}_.box(y.concrete,-8.25,o/2,-5.6,1.3,o,1.4,{surf:"concrete"}),Gn(-7.55,.9,-7.55,-4.9,0);for(let[d,f]of[[-4,-3],[4,-3],[-4,3],[4,3],[0,0]]){let p=new D(new mt(.35,.45,.2,14),y.lampGlow);p.position.set(d,i-.25,f),_.bake(p)}_.box(y.sidingG,-17.75,2.4,2,6.5,4.8,8,{uv:2.5,surf:"concrete"}),_.box(y.roof,-17.75,4.9,2,7,.2,8.5,{collide:!1,uv:2});for(let d=.2;d<3;d+=.16)_.box(y.metal,-14.47,d,2,.05,.13,3.2,{collide:!1});Tn(-14.4,3.5,2,Math.PI/2,"\u7B2C2\u5009\u5EAB",2.6,.7,"#3a3a3a"),ao(-22.4,9.5,Math.PI/2),qe(-22.3,-5.5,2),Ct(-22.3,0,13.5,1.1),Ct(-22.3,1.1,13.5,.9,.4),ha(-11.2,11.6,0,15261904),qe(-11,4.8,2),qe(-12.5,-.5,1),Ct(-10.4,0,-.4,1),Ct(-11.2,0,8.2,1,.2),qe(-20,-14,2),qe(-18.6,-14,1),qe(-14.4,-9.8,2),Ct(-19.6,0,-7,1.1),Ct(-19.6,0,-5.9,1.1),Ct(-19.6,1.1,-6.45,1,.3),Ct(-13.6,0,-14.6,1,.2),ao(-22.4,-10.5,Math.PI/2),Rr(-16,-16.5,0),Rr(-17.2,-16.5,2),ni(n,"A",We.A);let c=1.1;_.box(y.concrete,21.3,c/2,-4.5,4.6,c,25,{surf:"concrete",uv:2}),_.box(y.darkTrim,19.02,c-.05,-4.5,.06,.1,25,{collide:!1});for(let d=0;d<4;d++){let f=(d+1)*c/4;_.box(y.concrete,21.3,f/2,8+(3-d)*.5+.25+0,4.6,f,.5,{surf:"concrete"})}_.box(y.sidingB,23.4,c+2.2,-4.5,.4,4.4,25,{uv:2.5}),_.box(y.roof2,21.8,c+3.6,-4.5,3.6,.15,25,{collide:!1,uv:2});for(let d of[-14,-8,-2,4])for(let f=c+.2;f<c+3;f+=.16)_.box(y.metal,23.17,f,d,.05,.13,3,{collide:!1});ha(14.2,-5.6,0,15921902),ha(14.2,1.8,0,9091146),qe(21,-12,2),qe(20.4,1,1),qe(22.4,5.6,2),Vu(13.4,-14,0),qe(16.6,-16,2),qe(11,-10.6,1),Ct(17.4,0,-10.2,1,.3),Ct(18.4,0,-10.2,1),ni(n,"B",We.B),fn(-6,-15,Math.PI/2,y.carBlue),fn(6.5,-16.5,Math.PI/2,y.carRed,!0),Fn(.5,-11,Math.PI/2),lo(-2.4,-20.8,0,13642282),lo(-1.3,-20.8,0,2779856),gi(9.8,-19.8,2779706),gi(10.6,-19.8,2771594),fn(-2,15,Math.PI/2,y.carWhite),fn(8.2,13.5,-Math.PI/2,y.carRed),Fn(-7,11,Math.PI/2),Fn(5,10.5,0),lo(16,20.8,Math.PI,2793546),gi(-8,20,2779706),qe(14.5,10.8,1),Ct(-15.5,0,17,1.1),Ct(-14.4,0,17,1.1),Ct(-15,1.1,17,1,.3);for(let d of[-18,-6,6,18])Es(d,d<0?-19.5:19.5,d<0?1:-1);j_();let h=new Et;Sn(5);for(let d=0;d<22;d++){let f=d/22*Math.PI*2,p=46+Mt()*10,g=Math.round((8+Mt()*14)/3)*3;da(h,Math.cos(f)*p,Math.sin(f)*p,-f,9,g,8,["office","brick","apt","concrete"][d%4])}_.bake(h),_.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),_.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),_.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),_.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let u=_.finish(n);for(let[d,f]of[[-4,-3],[4,-3],[-4,3],[4,3]]){let p=new tn(16773328,9,10,1.6);p.position.set(d,3.6,f),n.add(p)}{let d=new tn(16769200,5,8,1.6);d.position.set(-17.75,3.5,-6),n.add(d)}return{colliders:_.colliders,meshes:u}}function Xf(n,t,e,i){let s=(n+t)/2,r=t-n,o=Ut(e,{roughness:.6,map:tt.metal.map});_.box(o,s,2.17,0,r,2.24,2.8,{surf:"metal",uv:2}),_.box(y.darkTrim,s,1,0,r-.4,.1,2.6,{collide:!1});for(let a of[-1,1])_.box(y.darkTrim,s,.82,a*.9,r-.6,.22,.14,{collide:!1});for(let a=n+.5;a<t-.3;a+=.9)for(let l of[-1,1])_.box(y.darkTrim,a,2.17,l*1.42,.06,2.18,.04,{collide:!1});for(let a of[n+1.4,t-1.4]){_.box(y.black,a,.42,0,2,.24,2.2,{collide:!1});for(let l of[-.6,.6])for(let c of[-1,1]){let h=new D(new mt(.36,.36,.14,16),y.steel);h.rotation.x=Math.PI/2,h.position.set(a+l,.36,c*.72),_.bake(h)}}for(let a of[n,t])_.box(y.black,a,.75,0,.5,.2,.3,{collide:!1});if(i)for(let a of[-1,1])Tn(s,2.3,a*1.43,a>0?0:Math.PI,i,3.2,.7,"rgba(0,0,0,0)")}function eb(n,t){let e=(n+t)/2,i=t-n,s=Ut(2775706,{roughness:.45,map:tt.metal.map});_.box(s,e+.8,1.8,0,i-1.6,2.4,2.7,{surf:"metal"}),_.box(s,n+.8,2.15,0,1.6,3.1,2.8,{surf:"metal"}),_.box(y.glass,n-.02,2.9,0,.04,.8,2.2,{collide:!1}),_.box(y.lineY,n-.03,1.1,0,.04,.3,2.6,{collide:!1});for(let r of[n+1.6,t-1.6])for(let o of[-.7,.7])for(let a of[-1,1]){let l=new D(new mt(.42,.42,.14,16),y.steel);l.rotation.x=Math.PI/2,l.position.set(r+o,.42,a*.75),_.bake(l)}}function Si(n,t,e,i,s){let r=Ut(s,{roughness:.55,map:tt.metal.map}),o=i?6:2.44,a=i?2.44:6;_.box(r,n,t+1.3,e,o,2.6,a,{surf:"metal",uv:2});let l=Math.floor((i?o:a)/.4);for(let c=0;c<l;c++){let h=-((i?o:a)/2)+.2+c*.4;for(let u of[-1,1])_.box(y.darkTrim,n+(i?h:u*(o/2+.01)),t+1.3,e+(i?u*(a/2+.01):h),i?.05:.02,2.5,i?.02:.05,{collide:!1})}}function rs(n,t,e){let i=Math.abs(Math.cos(e))>.5;_.box(y.wood,n,.45,t,i?1.8:.45,.06,i?.45:1.8,{surf:"wood"});for(let s of[-.7,.7])_.box(y.steel,n+(i?s:0),.22,t+(i?0:s),.05,.44,.05,{collide:!1})}function nb(n){Sn(88);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/5,160/5),_.addGeo(y.asphalt,t,new $t),_.box(y.concrete,0,.01,-11,48,.02,20,{collide:!1,uv:3}),_.box(y.concrete,0,.01,11,48,.02,20,{collide:!1,uv:3}),_.box(Ut(6973022,{roughness:1,map:tt.concrete.map}),0,.03,0,48,.06,3.6,{collide:!1,uv:1});for(let l=-23.5;l<=23.5;l+=.7)_.box(y.wood,l,.08,0,.22,.06,2.6,{collide:!1});for(let l of[-1,1])_.box(y.steel,0,.14,l*.72,48,.08,.08,{collide:!1});for(let l of[-1,1])_.box(y.concrete,1,.21,l*3.4,30,.42,3,{surf:"concrete",uv:2}),_.box(y.lineY,1,.425,l*2.12,30,.004,.25,{collide:!1});let e=(l,c,h,u,d=3.2)=>_.box(y.brick,(l+h)/2,d/2,(c+u)/2,Math.abs(h-l),d,Math.abs(u-c),{uv:2.5});e(-24.6,-21.6,24.6,-20.6),e(-24.6,20.6,24.6,21.6),e(-24.6,-20.6,-23.6,20.6),e(23.6,-20.6,24.6,20.6),eb(-19.5,-12),Xf(-11.2,-4.2,10107434,"VEGE CARGO"),Xf(-2.8,5.4,3828282,"\u91CE\u83DC\u4FBF"),Xf(6.8,14,9071162,""),Si(19,0,0,!0,2779808),_.box(y.concrete,23,.45,0,1.2,.9,1.6,{surf:"concrete"});let i=4,s=16.8;_.box(y.concrete,s,i-.1,0,1.8,.2,13,{surf:"concrete",uv:1.5});for(let l of[-5,5])_.box(y.concrete,s,(i-.2)/2,l,.4,i-.2,.4,{surf:"concrete"});Gn(s-.9,-6.5,s-.9,6.5,i),Gn(s+.9,-6.5,s+.9,6.5,i);for(let l of[-1,1])for(let c=0;c<10;c++){let h=i-c*.4,u=l*(6.5+c*.6+.3);_.box(y.concrete,s,h/2-0,u,1.8,h,.6,{surf:"concrete"})}Tn(s,i+1.3,0,Math.PI/2,"\u8DE8\u7DDA\u6A4B",1.6,.4,"#2a4a8a"),_.box(y.steel,s,i+.9,0,.06,1.4,.06,{collide:!1});let r=3.6;_.box(y.floor,-18.3,.02,-9.7,10.6,.04,8.6,{collide:!1,uv:1.5}),Rn(-14,-23.6,-13,0,r,-1,y.sidingY,y.plaster,[fe(-20.5,1.8),Vt(-15.5,1.4)]),Rn(-5.4,-23.6,-13,0,r,1,y.sidingY,y.plaster,[Vt(-21,1.6),fe(-18,2),Vt(-14.6,1.4)]),Un(-13,-14,-5.4,0,r,1,y.sidingY,y.plaster,[fe(-11.8,1.6),Vt(-8.2,1.5)]),_.box(y.roof,-18.3,r+.15,-9.7,11.4,.3,9.4,{uv:2}),Tn(-18.3,r-.6,-5.27,0,"\u3079\u3058\u8CA8\u7269\u99C5",3.4,.7,"#3a3a3a"),rs(-20.5,-12.6,0),rs(-17.5,-12.6,0),rs(-21.5,-8.6,Math.PI/2),lo(-14.2,-12.8,Math.PI/2,2779856),_.box(y.steel,-16.6,.5,-7.2,.3,1,1.6,{surf:"metal"}),_.box(y.steel,-18.6,.5,-7.2,.3,1,1.6,{surf:"metal"}),_.box(y.paintwood,-22.6,.55,-10.5,1.2,1.1,2.4,{surf:"wood"}),ni(n,"A",We.A);{let l=new tn(16773328,7,10,1.6);l.position.set(-18.3,3.1,-9.7),n.add(l)}Si(13,0,-16.5,!0,11553322),Si(13,2.6,-16.5,!0,2783834),Si(21,0,-11.5,!1,3824282),Si(9,0,-9,!1,13146666),qe(16.5,-8.4,2),qe(18.4,-14.5,1),zn(14.2,-11,3,2793546),ku(9,-6+3.85,0,-1,2.6,1),Gn(7.78,-6,7.78,-12,2.6),Vu(17,-12,0),ni(n,"B",We.B),fn(-4,-17.2,Math.PI/2,y.carWhite),Fn(2.8,-11.5,0),Fn(-6.5,-9.5,Math.PI/2),Ct(4.2,0,-8,1.1),Ct(5.3,0,-8,1.1),Ct(4.75,1.1,-8,1,.3),gi(-10.5,-19.8,2779706),lo(.5,-19.9,0,13642282),Xn(8,-19.6,3,1),rs(-1,-4,0),rs(8,-4,0),_.box(y.sidingB,-17.5,1.5,15.5,5,3,4,{uv:2}),_.box(y.roof2,-17.5,3.1,15.2,5.6,.2,4.8,{collide:!1}),Tn(-17.5,2.4,13.48,Math.PI,"\u58F2\u5E97",1.6,.5,"#7a2a1a"),fn(-6,14.5,Math.PI/2,y.carRed),fn(6,15.5,-Math.PI/2,y.carBlue,!0),fn(13,14,Math.PI/2,y.carWhite),Fn(-1,9,0),Fn(9.5,9.5,Math.PI/2),Ct(-10.5,0,8.2,1.1),Ct(-10.5,0,9.3,1.1),qe(3.5,8.5,2),zn(-13.2,8.6,3,14174762),rs(-6,4,0),rs(4,4,0),e0(14,19.9);for(let l of[-20,0,20])Es(l,l<=0?19.2:-19.2,l<=0?-1:1);for(let l of[-1,1]){_.box(y.roof2,-2,3.4,l*3.6,18,.12,2.6,{collide:!1});for(let c of[-10,-2,6])_.box(y.steel,c,1.9,l*4.3,.16,3,.16,{surf:"metal"})}let o=new Et;Sn(6);for(let l=0;l<22;l++){let c=l/22*Math.PI*2,h=46+Mt()*10,u=Math.round((6+Mt()*12)/3)*3;da(o,Math.cos(c)*h,Math.sin(c)*h,-c,9,u,8,["brick","apt","concrete","office"][l%4])}_.bake(o),_.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),_.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),_.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),_.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let a=_.finish(n);return{colliders:_.colliders,meshes:a}}function vg(n,t,e,i){let s=Ut(i,{roughness:.55,map:tt.metal.map}),r=6,o=2.44,a=2.6,l=.08;if(e){for(let h of[-1,1])_.box(s,n,a/2,t+h*(o/2-l/2),r,a,l,{surf:"metal"});_.box(s,n,a-l/2,t,r,l,o,{surf:"metal"}),_.box(y.wood,n,.03,t,r-.1,.06,o-.2,{collide:!1});for(let h of[-1,1])for(let u of[-1,1])_.box(s,n+h*(r/2+.25),1.3,t+u*(o/2+.25),.06,2.4,.9,{collide:!1,rotY:u*h*.5})}else{for(let h of[-1,1])_.box(s,n+h*(o/2-l/2),a/2,t,l,a,r,{surf:"metal"});_.box(s,n,a-l/2,t,o,l,r,{surf:"metal"}),_.box(y.wood,n,.03,t,o-.2,.06,r-.1,{collide:!1})}let c=new D(new mt(.12,.12,.05,10),y.lampGlow);c.position.set(n,a-.12,t),_.bake(c)}function Jf(n,t){let e=new D(new mt(.22,.28,.6,12),y.black);e.position.set(n,.3,t),_.bake(e),_.col(n-.25,0,t-.25,n+.25,.6,t+.25,{surf:"metal"})}function ib(n,t){let e=Ut(15249440,{roughness:.5,map:tt.metal.map});for(let i of[-5.5,5.5])for(let s of[-1.6,1.6])_.box(e,n+i,4.75,t+s,.6,9.5,.6,{surf:"metal"});for(let i of[-5.5,5.5])_.box(e,n+i,9.7,t,.7,.5,3.8,{surf:"metal"});for(let i of[-1.6,1.6])_.box(e,n,9.9,t+i,12,.6,.5,{surf:"metal"});_.box(y.darkTrim,n-2,10.6,t,2.4,1.2,2,{collide:!1});for(let i of[-.6,.6])_.box(y.black,n+1.2,8.5,t+i,.03,2.4,.03,{collide:!1});Si(n+1.2,4.6,t,!0,2783904)}function ku(n,t,e,i,s,r=1.1){let o=Math.ceil(s/.4),a=.55,l=y.steel;for(let h=0;h<o;h++){let u=Math.min(s,(h+1)*(s/o)),d=n+e*(h*a+a/2),f=t+i*(h*a+a/2),p=e!==0?a:r,g=i!==0?a:r;_.box(l,d,u-.04,f,p,.08,g,{collide:!1}),_.col(d-p/2,0,f-g/2,d+p/2,u,f+g/2,{surf:"metal"})}let c=o*a;for(let h of[-1,1]){let u=i!==0?h*r/2:0,d=e!==0?h*r/2:0,f=new mt(.025,.025,Math.hypot(c,s),6),p=new D(f,l);p.position.set(n+e*c/2+u,s/2+.9,t+i*c/2+d),p.rotation.set(i!==0?-Math.sign(i)*Math.atan2(c,s):0,0,e!==0?Math.sign(e)*Math.atan2(c,s):0),_.bake(p)}}function sb(n){Sn(123);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/5,160/5),_.addGeo(y.asphalt,t,new $t);let e=new D(new be(60,160),Ut(2775674,{roughness:.15,metalness:.3}));e.rotation.x=-Math.PI/2,e.position.set(54,-.6,0),_.bake(e),_.box(y.concrete,23.9,-.3,0,.8,.6,46,{collide:!1});for(let c of[-12,12])_.box(y.lineY,0,.02,c,44,.004,.16,{collide:!1});for(let c=-20;c<=20;c+=4)_.box(y.lineW,c,.02,0,.12,.004,3,{collide:!1});let i=(c,h,u,d,f=3)=>_.box(y.concrete,(c+u)/2,f/2,(h+d)/2,Math.abs(u-c),f,Math.abs(d-h),{uv:2.5});i(-24.6,-21.6,23.6,-20.6),i(-24.6,20.6,23.6,21.6),i(-24.6,-20.6,-23.6,20.6),Gn(23.4,-20.6,23.4,20.6,0);for(let c of[-17,-9,-1,7,15])Jf(22.6,c);let s=3.4;_.box(y.floor,-19.8,.02,-11.5,7.6,.04,9,{collide:!1,uv:1.5}),Un(-16,-16,-7,0,s,1,y.sidingB,y.plaster,[Vt(-13.5,1.4),fe(-9.6,1.8)]),Rn(-7,-23.6,-16,0,s,1,y.sidingB,y.plaster,[fe(-21.5,1.6),Vt(-18,1.4)]),Rn(-16,-23.6,-16,0,s,-1,y.sidingB,y.plaster,[fe(-19.8,2)]),_.box(y.roof2,-19.8,s+.15,-11.5,8.2,.3,9.6,{uv:2}),an(-20.5,-12.5,1.6,.8,.76),qn(-20.5,-13.3,0),qn(-19.6,-11.7,Math.PI),dn(-23.2,-9.5,Math.PI/2),Tn(-16.15,2.7,-11.5,Math.PI/2,"\u6E2F\u6E7E\u4E8B\u52D9\u6240",2.4,.55,"#2a4a7a");{let c=new tn(16773328,6,9,1.6);c.position.set(-19.8,3,-11.5),n.add(c)}qe(-13,-16.8,2),qe(-11.6,-16.8,1),zn(-9.6,-14.6,3,2779856),Ct(-12.6,0,-8.6,1.1),Ct(-12.6,1.1,-8.6,.9,.3),ao(-21.5,-4.8,0),ni(n,"A",We.A),vg(-14.5,-4.6,!0,11553322),Si(-3,0,-5.2,!0,2783834),Si(-3,2.6,-5.2,!0,9071162),Si(8.5,0,-4.8,!0,3824282),Si(-10,0,5,!0,13146666),vg(1.5,4.6,!0,2779808),Si(13,0,5.2,!0,10107434),Si(13,2.6,5.2,!0,2783834),Si(-19.5,0,6.5,!1,8026746),Si(19,0,-7,!1,11553322),ku(-10,6.22+3.85,0,-1,2.6),ku(8.5,-6.02-3.85,0,1,2.6),Gn(-13,3.78,-7,3.78,2.6),Gn(5.5,-3.58,11.5,-3.58,2.6),ib(0,0),Ct(-6,0,.6,1.1),Ct(-6,0,-.5,1.1),qe(4.8,-.8,1),Fn(9,.6,0),Vu(-15,.6,0),zn(17.2,.4,3,15773728),qe(14.8,-15.6,2),qe(16.2,-15.6,2),Ct(19.6,0,-12,1.1),Ct(19.6,0,-10.9,1.1),Ct(19.6,1.1,-11.45,1,.3),zn(12,-10.4,2,14174762),Rr(16,-9.4,1),ni(n,"B",We.B),ha(-4,-15.8,0,15921902),fn(9,-17,Math.PI/2,y.carBlue),lo(-14.2,-20,0,13642282),gi(5,-20,2779706),_.box(y.sidingG,-16.5,1.4,16.5,3,2.8,3,{uv:2}),_.box(y.roof2,-16.5,2.95,16.5,3.6,.15,3.6,{collide:!1}),Tn(-16.5,2.3,14.97,Math.PI,"\u5B88\u885B\u5BA4",1.4,.4,"#3a3a3a"),ha(6,15.5,0,9091146),fn(-6.5,14,Math.PI/2,y.carRed),Fn(-1.5,10.5,Math.PI/2),Fn(16,11,0),qe(-11.5,10.6,2),Ct(18.5,0,16.5,1.1);for(let c of[-20,-2,16])Es(c,c<0?19.6:-19.6,c<0?-1:1);let r=new Et;Sn(7);for(let c=0;c<16;c++){let h=Math.PI*.55+c/16*Math.PI*.9,u=46+Mt()*8,d=Math.round((7+Mt()*9)/3)*3;da(r,Math.cos(h)*u,Math.sin(h)*u,-h,10,d,9,["concrete","brick","office","apt"][c%4])}let o=new D(nt(40,6,9,3),Ut(2767450,{roughness:.6}));o.position.set(48,2,-6),r.add(o);let a=new D(nt(8,7,7,3),y.white);a.position.set(62,8.5,-6),r.add(a),_.bake(r),_.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),_.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),_.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),_.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let l=_.finish(n);return{colliders:_.colliders,meshes:l}}function Er(n,t,e){let i=new Et,s=new D(nt(.7,.08,1.4,1),y.white);s.position.set(0,.36,.15),i.add(s);let r=new D(nt(.7,.08,.7,1),y.white);r.position.set(0,.55,-.75),r.rotation.x=.7,i.add(r);let o=new D(nt(.62,.06,1.3,1),Ut(2783920));o.position.set(0,.43,.15),i.add(o);for(let l of[-.3,.3])for(let c of[-.5,.75]){let h=new D(nt(.05,.34,.05,1),y.steel);h.position.set(l,.17,c),i.add(h)}i.position.set(n,0,t),i.rotation.y=e,_.bake(i);let a=Math.abs(Math.sin(e))>.5;_.col(n-(a?1:.38),0,t-(a?.38:1),n+(a?1:.38),.6,t+(a?.38:1),{surf:"metal"})}function Gu(n,t,e){let i=new D(new mt(.04,.04,2.4,8),y.steel);i.position.set(n,1.2,t),_.bake(i);let s=new D(new jn(1.4,.5,8,1,!0),Ut(e,{side:hn,roughness:.9}));s.position.set(n,2.45,t),_.bake(s),_.col(n-.05,0,t-.05,n+.05,2.4,t+.05,{surf:"metal"})}function Kf(n,t,e,i,s,r=[]){let o=Math.abs(e-n)>Math.abs(i-t),a=o?n:t,l=o?e:i,c=o?t:n,h=Ut(10133668,{wireframe:!0,metalness:.6});for(let u of zu(a,l,r.map(([d,f])=>({c:(d+f)/2,w:f-d})))){if(u.op)continue;let d=u.b-u.a,f=(u.a+u.b)/2,p=new be(d,s,Math.max(1,Math.round(d/.25)),Math.round(s/.25)),g=new D(p,h);g.position.set(o?f:c,s/2,o?c:f),o||(g.rotation.y=Math.PI/2),_.bake(g);for(let m of[u.a,u.b])_.box(y.steel,o?m:c,s/2,o?c:m,.07,s,.07,{collide:!1});_.box(y.steel,o?f:c,s,o?c:f,o?d:.06,.06,o?.06:d,{collide:!1}),o?_.col(u.a,0,c-.05,u.b,s,c+.05,{bullet:!1,surf:"metal"}):_.col(c-.05,0,u.a,c+.05,s,u.b,{bullet:!1,surf:"metal"})}}function Cg(n,t){let e=y.concrete,i=new D(new mt(1.9,2,.6,28),e);i.position.set(n,.3,t),_.bake(i);let s=new D(new mt(1.7,1.7,.05,28),Ut(3840712,{roughness:.08,metalness:.3}));s.position.set(n,.52,t),_.bake(s);let r=new D(new mt(.25,.35,1.6,14),e);r.position.set(n,1.1,t),_.bake(r);let o=new D(new mt(.8,.4,.3,20),e);o.position.set(n,1.95,t),_.bake(o);let a=new D(new he(.42,16,12),Ut(14191152,{roughness:.6}));a.scale.set(1,.75,1),a.position.set(n,2.38,t),_.bake(a),_.col(n-1.4,0,t-1.4,n+1.4,.6,t+1.4,{surf:"concrete"}),_.col(n-.35,0,t-.35,n+.35,2.6,t+.35,{surf:"concrete"})}function rb(n){Sn(77);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/4,160/4),_.addGeo(y.grass,t,new $t);let e=3.4,i=(l,c,h,u,d=3)=>{_.box(y.plaster,(l+h)/2,d/2,(c+u)/2,Math.abs(h-l),d,Math.abs(u-c),{uv:2.5}),_.box(y.roof,(l+h)/2,d+.08,(c+u)/2,Math.abs(h-l)+.2,.16,Math.abs(u-c)+.2,{collide:!1})};i(-24.6,-21.6,23.6,-20.6),i(-24.6,20.6,-3.5,21.6),i(3.5,20.6,23.6,21.6),i(22.6,-20.6,23.6,20.6),i(-24.6,-20.6,-23.6,20.6);for(let l of[-3.5,3.5])_.box(y.brick,l,1.6,21.1,.9,3.2,1,{uv:1.5});_.box(y.black,0,1.2,21.1,6.1,2.4,.08,{bullet:!1});for(let l=-2.8;l<=2.8;l+=.4)_.box(y.black,l,1.3,21,.05,2.6,.05,{collide:!1});_.box(y.floor,-17.3,.02,-1,12.6,.04,14,{collide:!1,uv:1.5}),Un(-11,-8,6,0,e,1,y.plaster,y.plaster,[Vt(-5,2.6),fe(-.6,2.2,.5,2.6),Vt(3.4,1.4)]),Rn(-8,-23.6,-11,0,e,-1,y.plaster,y.plaster,[fe(-20.5,1.8),Vt(-14.2,1.4)]),Rn(6,-23.6,-11,0,e,1,y.plaster,y.plaster,[Vt(-20,1.4),fe(-14,2)]),Un(-23.6,-8,6,0,e,-1,y.plaster,y.plaster,[]),Un(-17.2,-8,6,0,e,1,y.plasterG,y.plasterG,[Vt(-5.2,1.3),Vt(3,1.3)]),_.box(y.trim,-17.3,e+.15,-1,13.4,.3,14.8,{uv:2}),_.box(y.trim,-17.3,e+.45,-1,13.6,.3,.3,{collide:!1}),Tr(-14,1,Math.PI/2,y.fabricO),an(-15,1,.7,1.2,.42),ua(-14.6,1,3,3.4,y.carpetB),Uu(-16.95,1,Math.PI/2),Fu(-11.6,5.4),Fu(-16.6,-7.4),an(-14,-4.5,1.8,1,.95,y.tile),qn(-14,-5.4,0),qn(-14,-3.6,Math.PI),ca(-16.95,1.8,-2.5,Math.PI/2,y.paint1),Yf(-23.3,-19,-8,-1),an(-20.4,-4,1.4,.9,.76),qn(-20.4,-4.8,0),qn(-20.4,-3.2,Math.PI),wr(-20.4,3.2,0),dn(-23.2,0,Math.PI/2),ca(-23.45,1.7,3,Math.PI/2,y.paint2);for(let[l,c]of[[-14.2,-1],[-20.4,-1]]){let h=new tn(16769200,6,10,1.6);h.position.set(l,3,c),n.add(h)}_.box(y.tile,-17.3,.02,-14.5,12.6,.04,11,{collide:!1,uv:2}),ni(n,"A",We.A),_.box(y.brick,-21.5,.5,-15.5,2.6,1,.8,{uv:1.5}),_.box(y.tile,-21.5,1.03,-15.5,2.8,.06,1,{collide:!1}),$f(-20.6,-15.5),Zf(-21,-11.5),Xn(-13.5,-18,2.6,1),Xn(-13,-11,1,2.4),Ct(-18.6,0,-18.8,1.1),Ct(-17.5,0,-18.8,1.1),Ct(-18,1.1,-18.8,.9,.3),_.box(y.brick,-9.6,.5,-17.5,.5,1,5,{uv:1.5}),_.box(y.brick,-9.6,.5,-10.6,.5,1,3.6,{uv:1.5}),mi(-22,-19.4,.9,11),_.box(y.tile,-.5,.02,-2.5,16,.04,12,{collide:!1,uv:2});let s=new D(new be(10.2,6.2),Ut(3844312,{roughness:.05,metalness:.2,transparent:!0,opacity:.88}));s.rotation.x=-Math.PI/2,s.position.set(-.5,.22,-2.5),_.bake(s);let r=Ut(8048872,{roughness:.3});_.box(r,-.5,0,-2.5,10.2,.02,6.2,{collide:!1});for(let[l,c,h,u]of[[-.5,-5.8,11,.4],[-.5,.8,11,.4],[-6,-2.5,.4,6.2],[5,-2.5,.4,6.2]])_.box(y.white,l,.18,c,h,.36,u,{surf:"concrete"});_.col(-5.6,0,-5.6,4.6,1,.6,{bullet:!1});for(let l of[-5.2,-2.6,0])Er(-7.6,l,0);for(let l of[-4.6,-1])Er(6.6,l,Math.PI);Gu(-7.6,-3.9,15227450),Gu(6.6,-2.8,15908912);for(let[l,c]of[[-3,-15],[3,-15],[-3,-10.6],[3,-10.6]])_.box(y.wood,l,1.4,c,.25,2.8,.25,{surf:"wood"});_.box(y.roof,0,2.95,-12.8,7,.25,5.4,{uv:2}),_.box(y.wood,0,.55,-15,6,1.1,.2,{surf:"wood"}),_.box(y.wood,-3,.55,-13.6,.2,1.1,2.8,{surf:"wood"}),_.box(y.wood,3,.55,-12,.2,1.1,2.8,{surf:"wood"}),_.box(y.paintwood,0,.55,-12.4,3,1.1,.6,{surf:"wood"}),_.box(y.tile,0,1.12,-12.4,3.2,.05,.7,{collide:!1});for(let l of[-1,0,1]){let c=new D(new mt(.2,.2,.7,12),y.darkTrim);c.position.set(l,.35,-11.5),_.bake(c)}{let l=new tn(16767136,4,7,1.6);l.position.set(0,2.6,-12.8),n.add(l)}ei(-9,3.2,-4,4,1.5),ei(1.5,3.2,6.5,4,1.5),_.box(y.concrete,11,.02,2.5,6,.04,7,{collide:!1,uv:2}),Un(8,-1,6,0,3,-1,y.plaster,y.plaster,[fe(2.5,1.6)]),Un(14,-1,6,0,3,1,y.plaster,y.plaster,[]),Rn(-1,8,14,0,3,-1,y.plaster,y.plaster,[Vt(12.2,1.2)]),Rn(6,8,14,0,3,1,y.plaster,y.plaster,[{c:11,w:4.6,b:0,t:2.5}]),_.box(y.roof2,11,3.15,2.5,6.6,.3,7.6,{uv:2}),fn(11,2.4,Math.PI/2,y.carRed),dn(13.6,.5,-Math.PI/2),_.box(Ut(2775674,{roughness:.8}),15.8,.02,-13.3,13.4,.04,14.4,{collide:!1}),_.box(Ut(11556410,{roughness:.8}),15.8,.025,-13.3,11,.04,12,{collide:!1});for(let l of[-19.3,-7.3])_.box(y.lineW,15.8,.05,l,11,.004,.1,{collide:!1});for(let l of[10.3,21.3])_.box(y.lineW,l,.05,-13.3,.1,.004,12,{collide:!1});_.box(y.lineW,15.8,.05,-13.3,11,.004,.1,{collide:!1}),Ou(15.8,-20.2,0),Ou(15.8,-6.4,Math.PI),_.col(15.7,0,-20.4,15.9,3.2,-20,{surf:"metal"}),_.col(15.7,0,-6.6,15.9,3.2,-6.2,{surf:"metal"}),Kf(9,-20.6,9,-6,3,[[-17,-15.4],[-10,-8.4]]),Kf(9,-6,22.6,-6,3,[[12,13.6],[18.6,20.2]]),ni(n,"B",We.B),rs(11,-18.6,0),rs(20.8,-11,Math.PI/2),Ct(19.8,0,-16.6,1.1),Ct(19.8,0,-15.5,1.1),Ct(19.8,1.1,-16.05,1,.3),zn(12.2,-11,2,15773728),zn(12.9,-11,3,2779856),ei(15,-3.5,22.6,-2.8,1.6),gi(7.2,-1.8,2779706),gi(7.2,-2.6,5921370),ei(-7.5,-18.2,-4,-17.5,1.4),ei(4,-18.2,7.5,-17.5,1.4),mi(6.6,-19.4,.9,12),Xn(-6.5,-8.6,2.4,1),Xn(5.5,-8.6,2.4,1),_.box(y.concrete,0,.02,14,12,.04,13.2,{collide:!1,uv:2}),Cg(0,12.8),fn(-7.8,16.4,0,y.carWhite),fn(8.4,17.2,0,y.carBlue,!0),ei(-23.6,8.6,-12,9.4,1.6),ei(12,8.6,22.6,9.4,1.6),Xn(-10.2,12,1,2.6),Xn(10.2,12,1,2.6),Ct(-17,0,14.5,1.1),Ct(-17,0,15.6,1.1),Ct(16.5,0,13,1.1),Fn(18,17,0),mi(-21.5,18.5,1,13),mi(21,13,1,14),mi(-14.5,19.2,.8,15);for(let[l,c,h]of[[-12,20.2,-1],[12,20.2,-1]])Es(l,c,h);let o=new Et;Sn(31);for(let l=0;l<18;l++){let c=l/18*Math.PI*2,h=50+Mt()*10;da(o,Math.cos(c)*h,Math.sin(c)*h,-c,9,6+Math.round(Mt()*2)*3,8,["apt","concrete","office"][l%3])}_.bake(o);for(let l=0;l<24;l++){let c=l/24*Math.PI*2+.13;mi(Math.cos(c)*(36+Mt()*6),Math.sin(c)*(34+Mt()*6),1.3+Mt()*.5,50+l)}_.colliders=_.colliders.filter(l=>l.min.x>-32&&l.max.x<32&&l.min.z>-30&&l.max.z<30),_.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),_.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),_.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),_.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let a=_.finish(n);return{colliders:_.colliders,meshes:a}}function Lu(n,t,e,i,s=0){let r=Math.hypot(e-n,i-t),o=Math.atan2(i-t,e-n),a=(n+e)/2,l=(t+i)/2;for(let h of[.5,1])_.box(y.steel,a,s+h,l,r,.05,.05,{collide:!1,rotY:-o});let c=Math.ceil(r/.45);for(let h=0;h<=c;h++){let u=h/c,d=n+(e-n)*u,f=t+(i-t)*u;h%3===0&&_.box(y.steel,d,s+.5,f,.05,1,.05,{collide:!1}),_.col(d-.25,s,f-.25,d+.25,s+1.05,f+.25,{bullet:!1,surf:"metal"})}}function _g(n,t){let e=new Et,i=new D(new xs(.75,3,6,14),Ut(15233050,{roughness:.5}));i.rotation.x=Math.PI/2,i.scale.set(1,1,.75),i.position.y=1.4,e.add(i);let s=new D(nt(1.3,.1,3.6,1),y.white);s.position.y=1.95,e.add(s);for(let r of[-1.6,1.6]){let o=new D(nt(.12,1.8,.12,1),y.steel);o.position.set(.6,1.9,r),e.add(o);let a=new D(nt(.9,.1,.1,1),y.steel);a.position.set(.2,2.8,r),e.add(a)}e.position.set(n,0,t),n<0&&(e.rotation.y=Math.PI),_.bake(e),_.col(n-.75,.8,t-2.2,n+.75,2,t+2.2,{surf:"metal"})}function ob(n,t){let e=new D(new mt(1.35,1.4,.75,24),y.wood);e.position.set(n,.375,t),_.bake(e);let i=new D(new mt(1.15,1.15,.04,24),Ut(5951712,{roughness:.05,metalness:.2}));i.position.set(n,.7,t),_.bake(i),_.col(n-1,0,t-1,n+1,.75,t+1,{surf:"wood"})}function ab(n){Sn(201);let t=new D(new be(400,400),Ut(1989254,{roughness:.12,metalness:.35}));t.rotation.x=-Math.PI/2,t.position.y=-2.4,_.bake(t);let e=[[-9,21],[9,21],[9,-14],[6.5,-18.5],[2.8,-21.4],[-2.8,-21.4],[-6.5,-18.5],[-9,-14]],i=new ui(e.map(([f,p])=>new lt(f,-p))),s=new ol(i);s.rotateX(-Math.PI/2),pi(s,.5,.5),s.translate(0,.012,0),_.addGeo(y.wood,s,new $t);let r=new bi(i,{depth:3.4,bevelEnabled:!1});r.rotateX(-Math.PI/2),r.translate(0,-3.4,0),_.addGeo(y.white,r,new $t);let o=new bi(i,{depth:.35,bevelEnabled:!1});o.rotateX(-Math.PI/2),o.scale(1.003,1,1.003),o.translate(0,-1.6,0),_.addGeo(Ut(1718890),o,new $t),Gn(-9,-14,-9,21,0),Gn(9,-14,9,21,0),Gn(-9,21,9,21,0),Lu(9,-14,6.5,-18.5),Lu(6.5,-18.5,2.8,-21.4),Gn(-2.8,-21.4,2.8,-21.4,0),Lu(-2.8,-21.4,-6.5,-18.5),Lu(-6.5,-18.5,-9,-14);let a=3.2;_.box(y.carpetB,0,.01,.5,10,.02,13,{collide:!1,uv:2}),Rn(-6,-5,5,0,a,-1,y.white,y.plaster,[Vt(-2.6,1.4),fe(1.6,2.4,.9,2.4)]),Rn(7,-5,5,0,a,1,y.white,y.plaster,[Vt(.8,2.4),fe(-3,1.6,.9,2.4)]),Un(-5,-6,7,0,a,-1,y.white,y.plaster,[Vt(-3.4,1.3),fe(.6,2,.9,2.4),Vt(4.6,1.3)]),Un(5,-6,7,0,a,1,y.white,y.plaster,[Vt(-2,1.3),fe(1.8,2,.9,2.4),Vt(5.2,1.3)]),Rn(.6,-5,5,0,a,1,y.plaster,y.plaster,[Vt(-3.4,1.2),Vt(2.6,1.2)]),_.box(y.white,0,a+.15,.7,10.6,.3,13.4,{uv:2}),_.box(y.wood,0,a+.31,.7,10.4,.02,13.2,{collide:!1,uv:2}),_.box(y.darkTrim,0,.55,-5.3,6,1.1,.8,{surf:"metal"}),_.box(y.screen,-1.2,1.15,-5.5,1.2,.5,.05,{collide:!1}),_.box(y.screen,1.2,1.15,-5.5,1.2,.5,.05,{collide:!1});{let f=new D(new Xe(.35,.04,8,20),y.wood);f.position.set(0,1.35,-4.85),_.bake(f)}qn(0,-4.2,Math.PI),dn(4.6,-2,-Math.PI/2,1.2,1.6),Tr(-3.8,3.5,Math.PI/2,y.fabricO),an(-2.8,3.5,.7,1.2,.42),ua(-3,3.5,2.6,3.2,y.carpetR),_.box(y.paintwood,3.3,.55,3.6,.7,1.1,3.6,{surf:"wood"}),_.box(y.tile,3.3,1.12,3.6,.8,.05,3.7,{collide:!1}),dn(4.6,3.6,-Math.PI/2,1.6,1.9);for(let f of[2.4,3.6,4.8]){let p=new D(new mt(.2,.2,.75,12),y.darkTrim);p.position.set(2.5,.375,f),_.bake(p)}ca(0,1.8,6.85,Math.PI,y.paint1);for(let[f,p]of[[0,-2.5],[0,3.8]]){let g=new tn(16769208,5,9,1.6);g.position.set(f,2.8,p),n.add(g)}let l=a+.3;Gn(-5.3,-6,5.3,-6,l),Gn(-5.3,-6,-5.3,7.4,l),Gn(5.3,-6,5.3,7.4,l),Gn(-5.3,7.4,-4.15,7.4,l),Gn(-2.85,7.4,5.3,7.4,l),ku(-3.5,7.4+9*.55,0,-1,l,1.2),_.box(y.white,1.5,l+1.2,-2,1.4,2.4,1.4,{surf:"metal",uv:1});{let f=new D(new mt(.1,.14,4.5,10),y.steel);f.position.set(1.5,l+4.6,-2),_.bake(f);let p=new D(nt(2.2,.15,.3,1),y.darkTrim);p.position.set(1.5,l+6.2,-2),_.bake(p)}Er(-2.5,3,0),Er(-1.2,3,0),Ct(3.5,l,4.5,1),_g(-8,-1.5),_g(8,2.5),Ct(-6.4,0,4.5,1),Ct(-6.4,1,4.5,.85,.3),Ct(6.4,0,-4,1);for(let f of[-9,9.5])Jf(-8.3,f),Jf(8.3,f);let c=new D(new be(5.2,5.2),new Wn({map:wi("H",{w:256,h:256,size:170,color:"rgba(255,255,255,0.85)",draw:f=>{f.strokeStyle="rgba(240,192,32,0.9)",f.lineWidth=12,f.beginPath(),f.arc(128,128,118,0,7),f.stroke()}}),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));c.rotation.x=-Math.PI/2,c.position.set(0,.05,-15),n.add(c),ni(n,"A",We.A),Ct(-7.6,0,-9.2,1.1),Ct(-7.6,0,-10.3,1.1),Ct(-7.6,1.1,-9.75,1,.3),Ct(-3,0,-12.6,1.1),zn(-6.8,-15.2,3,2779856),qe(-3.6,-8.4,1),ni(n,"B",We.B),ob(7,-9.4),Er(3.4,-14.6,Math.PI),Gu(7.4,-13.6,15227450),zn(3.2,-9,2,15773728),_.box(y.darkTrim,0,.45,-19.6,2,.9,1,{surf:"metal"}),_.box(y.tile,0,.012,15,9,.02,7,{collide:!1,uv:2});let h=new D(new be(5.2,3.6),Ut(3846368,{roughness:.05,metalness:.2}));h.rotation.x=-Math.PI/2,h.position.set(0,.32,15),_.bake(h);for(let[f,p,g,m]of[[0,13,5.8,.3],[0,17,5.8,.3],[-2.75,15,.3,3.7],[2.75,15,.3,3.7]])_.box(y.white,f,.2,p,g,.4,m,{surf:"concrete"});_.col(-2.6,0,13.1,2.6,1,16.9,{bullet:!1}),Er(-6.2,12.6,0),Er(6.2,12.6,0),Er(-6.2,16.4,Math.PI),Gu(6.8,16.6,15908912),_.box(y.paintwood,-4.5,.55,19.4,3.2,1.1,.6,{surf:"wood"}),_.box(y.tile,-4.5,1.12,19.4,3.4,.05,.7,{collide:!1}),Xn(4.6,19.6,2.4,.8),Ct(6.8,0,9.8,1.1),Ct(-7,0,9.4,1);for(let[f,p]of[[-3.2,9.6],[3.2,9.6]]){let g=new tn(16769208,3,7,1.6);g.position.set(f,2.6,p),n.add(g)}let u=new Et;Sn(17);for(let f=0;f<7;f++){let p=f/7*Math.PI*2+.4,g=90+Mt()*30,m=new D(new jn(14+Mt()*10,10+Mt()*8,9),Ut(4880970,{roughness:1,flatShading:!0}));m.position.set(Math.cos(p)*g,1,Math.sin(p)*g),u.add(m)}for(let f=0;f<12;f++){let p=Math.PI*1.15+f/12*.7,g=130;da(u,Math.cos(p)*g,Math.sin(p)*g,-p,10,12+Math.round(Mt()*6)*3,9,["office","apt","concrete"][f%3])}_.bake(u),_.col(-40,-5,-40,re.minX-.6,20,40,{bullet:!1}),_.col(re.maxX+.6,-5,-40,40,20,40,{bullet:!1}),_.col(-40,-5,-40,40,20,re.minZ-.6,{bullet:!1}),_.col(-40,-5,re.maxZ+.6,40,20,40,{bullet:!1});let d=_.finish(n);return{colliders:_.colliders,meshes:d}}function Ui(n,t,e,i,s,r,o,a={},l=y.concrete){Rn(e,n,t,0,s,-1,r,o,a.n||[]),Rn(i,n,t,0,s,1,r,o,a.s||[]),Un(n,e,i,0,s,-1,r,o,a.w||[]),Un(t,e,i,0,s,1,r,o,a.e||[]),_.box(l,(n+t)/2,s+.12,(e+i)/2,t-n+.3,.24,i-e+.3,{uv:2}),_.box(r,(n+t)/2,s+.4,e-.05,t-n+.3,.32,.2,{collide:!1}),_.box(r,(n+t)/2,s+.4,i+.05,t-n+.3,.32,.2,{collide:!1}),_.box(a.floor||y.tile,(n+t)/2,.01,(e+i)/2,t-n,.02,i-e,{collide:!1,uv:1.5})}function oo(n,t,e,i,s,r=[],o=y.brick){let a=Math.abs(e-n)>Math.abs(i-t),l=a?n:t,c=a?e:i,h=a?t:n;for(let u of zu(l,c,r.map(([d,f])=>({c:(d+f)/2,w:f-d})))){if(u.op)continue;let d=(u.a+u.b)/2,f=u.b-u.a;_.box(o,a?d:h,s/2,a?h:d,a?f:.4,s,a?.4:f,{uv:1.5,surf:"concrete"})}}function Du(n,t){_.box(y.concrete,n,.1,t,1,.2,2.2,{surf:"concrete"}),_.box(Ut(14170666,{roughness:.4}),n,.95,t,.6,1.5,.8,{surf:"metal"}),_.box(y.screen,n+.31,1.3,t,.02,.35,.5,{collide:!1}),_.box(y.screen,n-.31,1.3,t,.02,.35,.5,{collide:!1}),_.box(y.white,n,1.78,t,.64,.18,.84,{collide:!1})}function lb(n,t){for(let s of[-1,1])for(let r of[-1,1])_.box(y.rust,n+s*1.1,2.5,t+r*1.1,.18,5,.18,{surf:"metal"});for(let s of[1.6,3.4])_.box(y.rust,n,s,t-1.1,2.4,.08,.08,{collide:!1}),_.box(y.rust,n,s,t+1.1,2.4,.08,.08,{collide:!1});let e=new D(new mt(1.7,1.7,2.2,20),y.rust);e.position.set(n,6.1,t),_.bake(e);let i=new D(new jn(1.8,.8,20),y.rust);i.position.set(n,7.6,t),_.bake(i)}function bg(n,t,e){let i=Math.round(Math.abs(t-n)/.4),s=(t-n)/i;for(let r=0;r<i;r++)_.box(r%2?y.white:y.redPaint,n+(r+.5)*s,1,e,Math.abs(s),.1,.1,{collide:!1});_.box(y.darkTrim,n,.5,e,.3,1,.3,{surf:"metal"})}function cb(n){Sn(311);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/4,160/4),_.addGeo(y.dirt,t,new $t);let e=ae({map:tt.plaster.map,normalMap:tt.plaster.normalMap,color:14861460,roughness:.95}),i=ae({map:tt.plaster.map,normalMap:tt.plaster.normalMap,color:14198904,roughness:.95}),s=ae({map:tt.plaster.map,normalMap:tt.plaster.normalMap,color:13160624,roughness:.95});for(let[l,c,h,u]of[[-24.6,-23.6,24.6,-22.8],[-24.6,22.8,24.6,23.6],[-24.6,-22.8,-23.8,22.8],[23.8,-22.8,24.6,22.8]])_.box(i,(l+h)/2,2,(c+u)/2,h-l,4,u-c,{uv:2.5});_.box(y.asphalt,0,.005,0,7.2,.01,46,{collide:!1,uv:6});for(let l=-21;l<22;l+=4)_.box(y.lineW,0,.012,l,.14,.004,2,{collide:!1});for(let l of[-1,1])_.box(y.concrete,l*4,.075,0,.8,.15,46,{uv:2,surf:"concrete",bullet:!1});Ui(-1,1,-1,1,2.6,y.white,y.plaster,{n:[fe(0,1.2)],s:[Vt(-.2,.9)],w:[fe(0,1.2)],e:[fe(0,1.2)]}),Tn(0,3.05,1.17,0,"\u691C\u554F\u6240",1.8,.45,"#8a2a2a"),Tn(0,3.05,-1.17,Math.PI,"\u691C\u554F\u6240",1.8,.45,"#8a2a2a"),bg(3.5,1.1,-1.5),bg(-3.5,-1.1,1.5),Fn(-2.3,-5,Math.PI/2),Fn(2.3,5,Math.PI/2),fn(-1.9,-10.5,Math.PI/2,y.carWhite),fn(2,12.5,Math.PI/2,y.carRed,!0),Ct(2.6,0,-14,1.1),Ct(-2.6,0,15.5,1.1),Ct(-2.6,1.1,15.5,.85,.4),Ui(-8.6,-4.6,-16,-11,3.4,e,y.plaster,{e:[Vt(-13.8)],w:[Vt(-12.6)],n:[fe(-6.6,1.4)]}),Ui(-8.6,-4.6,-9,-1.6,3.4,i,y.plaster,{e:[Vt(-6.6),fe(-3.4,1.4)],w:[Vt(-4.4)],n:[fe(-6.6,1.2)]}),Ui(-8.6,-4.6,1.6,9,3.4,e,y.plaster,{e:[Vt(4),fe(7,1.4)],w:[Vt(6)],s:[fe(-6.6,1.2)]}),Ui(4.6,8.6,-16,-11.5,3.4,s,y.plaster,{w:[Vt(-13.6)],e:[Vt(-14.6)],n:[fe(6.6,1.4)]}),Ui(4.6,8.6,-9,-2,3.4,e,y.plaster,{w:[Vt(-5.6),fe(-8+.3,1)],e:[Vt(-4)],s:[fe(6.6,1.2)]}),Ui(4.6,8.6,1.2,8.5,3.4,i,y.plaster,{w:[Vt(3.4),fe(6.4,1.4)],e:[Vt(5.2)]}),an(-6.6,-14,1.6,.8,.76),qn(-6.6,-14.7,0),dn(-8.3,-15,Math.PI/2,1.2,1.8),dn(-8.3,-7.6,Math.PI/2),an(-6,-6,1,1.6,.9,y.paintwood),zn(-5.2,-2.6,3,2779856),an(-6.4,3.2,1.6,.8,.76),qn(-6.4,3.9,Math.PI),Tr(-7.9,7.2,Math.PI/2,y.fabricO),ua(-6.6,6.6,2.4,2,y.carpetR),dn(5,-13.4,-Math.PI/2,1.2,1.8),Ct(7.6,0,-12.4,.9),dn(8.3,-7.4,-Math.PI/2),dn(8.3,-6,-Math.PI/2),an(6,-3.2,1.6,.8,.9,y.paintwood),wr(6.6,7,Math.PI/2),an(5.6,2.4,1,.8,.76),qn(6.3,2.4,-Math.PI/2);for(let[l,c]of[[-6.6,-13.5],[-6.6,-5.3],[-6.6,5.3],[6.6,-13.7],[6.6,-5.5],[6.6,4.8]]){let h=new tn(16769200,3.5,7,1.6);h.position.set(l,3,c),n.add(h)}gi(-5.2,.8,2779706),ao(6.4,-10.3,0),gi(5.3,0,5921370);for(let l of[-6.6,6.6])_.box(Ut(9058858,{side:hn,roughness:.9}),l,2.9,0,4,.04,2.6,{collide:!1});_.box(y.concrete,-16.1,.01,1,15,.02,18,{collide:!1,uv:2});let r=[[15231514,14170666,9091146],[9091146,15777824,6961802],[15231514,9091146,15777824]];Sr(-12.2,-6.5,-1.5,1,r[0]),Sr(-12.2,2.5,7.5,1,r[1]),Sr(-17.4,-6.5,-2.5,-1,r[2]),Sr(-17.4,1.5,7.5,-1,r[0]),Ui(-23.6,-20.4,-6,6,3.4,s,y.plaster,{e:[Vt(-3),fe(1,1.6),Vt(4.2)]}),Tn(-20.25,3,0,Math.PI/2,"\u516B\u767E\u5C4B",3,.75,"#2a5a3a"),dn(-23.3,-3,Math.PI/2,1.6),dn(-23.3,2.5,Math.PI/2,1.6),an(-21.8,0,.8,2.4,.95,y.paintwood);{let l=new tn(16769200,3.5,7,1.6);l.position.set(-22,3,0),n.add(l)}Rr(-14.6,-7.6,0),Rr(-15.4,-7.6,1),qe(-14.8,9,1),qe(-19,8.8,2),zn(-10,.4,3,15773728),zn(-10,1,2,2779856),Ct(-19.8,0,-7.2,1);for(let[l,c]of[[-14.8,-2],[-14.8,5]]){let h=new tn(16767136,2.5,6,1.6);h.position.set(l,2.4,c),n.add(h)}_.box(y.concrete,15.6,.01,.5,14,.02,19,{collide:!1,uv:2});for(let[l,c]of[[11.4,-3.2],[17.4,-3.2],[11.4,4.6],[17.4,4.6]])_.box(y.white,l,2.1,c,.35,4.2,.35,{surf:"metal"});_.box(y.white,14.4,4.35,.7,7.8,.3,9.8,{uv:2}),_.box(Ut(2787914,{roughness:.5}),14.4,4.7,.7,7.9,.4,9.9,{collide:!1}),Tn(14.4,4.7,5.67,0,"\u30D9\u30B8\u77F3\u6CB9",3.2,.4,"#2a8a4a"),Tn(14.4,4.7,-4.27,Math.PI,"\u30D9\u30B8\u77F3\u6CB9",3.2,.4,"#2a8a4a"),Du(12.9,-.6),Du(12.9,2.6),Du(15.9,-.6),Du(15.9,2.6);{let l=new tn(15791359,4,9,1.6);l.position.set(14.4,4,1),n.add(l)}Ui(19.2,23.6,-6,5,3.4,y.white,y.plaster,{w:[Vt(-3,1.6),fe(1.6,2.4)]}),_.box(Ut(2787914),19.05,3.1,-.5,.06,.5,11,{collide:!1}),an(21,-3.2,.7,2.2,.95,y.paintwood),dn(23.3,0,-Math.PI/2,1.6),dn(23.3,2.8,-Math.PI/2,1.6),lo(22.8,-5.3,Math.PI,14170666);{let l=new tn(15791359,3.5,7,1.6);l.position.set(21.4,3,-.5),n.add(l)}ha(14,8.2,0,15261904),fn(21,7.9,Math.PI/2,y.carBlue),_.box(Ut(12077610,{roughness:.6,map:tt.metal.map}),10.2,.5,-7.2,1,1,1,{surf:"metal"}),Ul(18.4,-7.6),Ul(19.2,-7.6),_.box(y.concrete,-16.1,.01,-16.2,15,.02,13.2,{collide:!1,uv:2});for(let[l,c]of[[-21.4,-20.6],[-12.6,-20.6],[-21.4,-15.4],[-12.6,-15.4]])_.box(y.steel,l,1.8,c,.3,3.6,.3,{surf:"metal"});_.box(y.roof2,-17,3.75,-18.2,10.6,.25,7.4,{uv:2}),ni(n,"A",We.A),qe(-20.2,-19.6,2),qe(-18.8,-19.6,1),qe(-13.8,-19.8,2),Ct(-15.6,0,-16.6,1.1),Ct(-15.6,1.1,-16.6,.9,.3),Vu(-19.6,-16.2,0),zn(-11.6,-13.4,3,15773728),oo(-23.6,-9.4,-8.6,-9.4,1.1,[[-21.2,-19.2],[-14.6,-12.6]]),Ui(10,22.6,-21.6,-12,3.8,i,y.plaster,{s:[Vt(11.4,1.3),{c:17.2,w:4.6,b:0,t:3}],w:[Vt(-18.6,1.3)],n:[fe(14,1.6)]},y.roof2),ni(n,"B",We.B),fn(13.4,-18.6,0,y.carRed),dn(22.3,-15,-Math.PI/2,1.6),dn(22.3,-17.6,-Math.PI/2,1.6),an(19.6,-21,2.2,.7,.9,y.metal),Ul(11,-13.2),Ul(21.8,-12.8);for(let[l,c]of[[13.4,-17],[19,-17]]){let h=new tn(15791359,4,8,1.6);h.position.set(l,3.3,c),n.add(h)}Kf(8.6,-9,22.6,-9,2.4,[[10.6,12.4],[19.4,21.2]]),zn(15.2,-10.6,2,2779856),Ct(20.4,0,-10.8,1),Ct(-6.4,0,-19.6,1.1),Ct(6.2,0,-19.8,1.1),Fn(0,-17.2,0+Math.PI/2),oo(-23.6,10.6,-8.6,10.6,1.2,[[-20.2,-17.8],[-13.2,-10.8]]),oo(8.6,10.6,23.6,10.6,1.2,[[10.8,13.2],[17.8,20.2]]),Ui(-22.6,-15,15.4,21.8,3.4,e,y.plaster,{n:[Vt(-18.6),fe(-16.4,1.2)],e:[Vt(18.6)]}),e0(-7.2,13),fn(-12,13.6,Math.PI/2,y.carBlue),Ct(-12,0,19.2,1.1),lb(17,17),fn(11,15,Math.PI/2,y.carWhite,!0),qe(20.8,13.2,2),Ct(8.4,0,20,1),Xn(-5.6,20.6,1,2.4),Xn(5.6,20.6,1,2.4);for(let[l,c,h]of[[-4.8,17,1],[4.8,-7,-1],[-4.8,-18,1],[4.8,18,-1]])Es(l,c,h);let o=new Et;Sn(41);for(let l=0;l<9;l++){let c=l/9*Math.PI*2+.2,h=110+Mt()*20,u=new D(new jn(26+Mt()*14,22+Mt()*16,7),Ut(11047018,{roughness:1,flatShading:!0}));u.position.set(Math.cos(c)*h,6,Math.sin(c)*h),o.add(u)}for(let l=0;l<20;l++){let c=l/20*Math.PI*2,h=46+Mt()*10;da(o,Math.cos(c)*h,Math.sin(c)*h,-c,8,5+Math.round(Mt()*2)*3,7,["concrete","apt","concrete","office"][l%4])}_.bake(o),_.colliders=_.colliders.filter(l=>l.min.x>-32&&l.max.x<32&&l.min.z>-30&&l.max.z<30),_.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),_.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),_.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),_.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let a=_.finish(n);return{colliders:_.colliders,meshes:a}}function Ul(n,t){for(let e=0;e<3;e++){let i=new D(new Xe(.3,.13,8,16),y.tire);i.rotation.x=Math.PI/2,i.position.set(n,.13+e*.26,t),_.bake(i)}_.col(n-.42,0,t-.42,n+.42,.78,t+.42,{surf:"metal"})}function Nu(n,t,e,i,s){let r=Math.hypot(e-n,i-t),o=Math.atan2(i-t,e-n);_.box(y.darkTrim,(n+e)/2,s,(t+i)/2,r,.02,.02,{collide:!1,rotY:-o});let a=[15227450,15790320,3832528,15777824,9091146,13660320],l=Math.floor(r/.9);for(let c=0;c<l;c++){let h=(c+.5)/l,u=.4+Mt()*.3,d=.4+Mt()*.4,f=new D(new be(u,d),Ut(a[Math.floor(Mt()*a.length)],{side:hn,roughness:.95}));f.position.set(n+(e-n)*h,s-d/2,t+(i-t)*h),f.rotation.y=-o,_.bake(f)}}function qf(n,t,e,i){let s=Math.abs(Math.cos(e))>.5;_.box(y.paintwood,n,.75,t,s?2:1.1,.5,s?1.1:2,{surf:"wood"}),_.col(n-(s?1:.55),0,t-(s?.55:1),n+(s?1:.55),1,t+(s?.55:1),{surf:"wood"});for(let r of[-1,1]){let o=new D(new Xe(.32,.05,6,14),y.darkTrim);o.position.set(n+(s?0:r*.6),.34,t+(s?r*.6:0)),o.rotation.y=s?0:Math.PI/2,_.bake(o)}for(let r=0;r<8;r++){let o=new D(new he(.14,8,6),Ut(i[r%i.length],{roughness:.45}));o.position.set(n+(s?-.7+r%4*.45:-.2+(r>>2)*.4),1.12,t+(s?-.2+(r>>2)*.4:-.7+r%4*.45)),_.bake(o)}Ag(n-(s?1.1:.7),n+(s?1.1:.7),t-(s?.7:1.1),t+(s?.7:1.1),2.2,i[0]);for(let r of[-1,1])_.box(y.steel,n+(s?r*.95:0),1.55,t+(s?0:r*.95),.05,1.3,.05,{collide:!1})}function la(n,t,e=4){for(let i=0;i<e;i++){let s=new D(new he(.32+Mt()*.1,10,8),y.black);s.scale.y=.75,s.position.set(n+(Mt()-.5)*1,.24,t+(Mt()-.5)*1),_.bake(s)}_.col(n-.7,0,t-.7,n+.7,.5,t+.7,{surf:"wood"})}function hb(n){Sn(523);let t=new be(160,160,1,1);t.rotateX(-Math.PI/2),pi(t,160/4,160/4),_.addGeo(y.dirt,t,new $t);let e=l=>ae({map:tt.plaster.map,normalMap:tt.plaster.normalMap,color:l,roughness:.95}),i=[e(14191210),e(9089232),e(14732416),e(11061392),e(13672640),e(15260872)],s=ae({map:tt.metal.map,normalMap:tt.metal.normalMap,color:9076848,metalness:.5,roughness:.6}),r=(l,c,h,u,d,f,p=3)=>Ui(l,c,h,u,p,i[d%i.length],y.plaster,{floor:y.concrete,...f},Mt()<.5?y.rust:s);for(let[l,c,h,u]of[[-24.6,-23.6,24.6,-22.8],[-24.6,22.8,24.6,23.6],[-24.6,-22.8,-23.8,22.8],[23.8,-22.8,24.6,22.8]])_.box(y.concrete,(l+h)/2,2.2,(c+u)/2,h-l,4.4,u-c,{uv:2.5});_.box(y.concrete,0,.01,0,16,.02,16,{collide:!1,uv:2}),Cg(0,0),qf(-4.2,3.6,0,[15231514,9091146,14170666]),qf(4.4,-3.4,0,[9091146,15777824,6961802]),rs(-5.6,-4.6,Math.PI/2),rs(5.6,4.6,Math.PI/2),Xn(-6.8,6.8,1.4,1.4),Xn(6.6,6.6,1.6,1.6);for(let[l,c,h]of[[-7.6,0,1],[7.6,0,-1]])Es(l,c,h);{let l=new tn(16767136,4,10,1.6);l.position.set(0,3.2,0),n.add(l)}r(-23.6,-15.5,-8,-1.2,0,{e:[Vt(-5)],n:[Vt(-18)],s:[fe(-20,1.2)]}),r(-23.6,-15.5,1.2,8,1,{e:[Vt(5.2)],s:[Vt(-19)],n:[fe(-18,1.2)]}),r(-13.5,-8,-8,-2,2,{w:[Vt(-6.2)],e:[Vt(-4),fe(-6.6,1)],n:[fe(-10.6,1.2)]}),r(-13.5,-8,2,8,3,{w:[Vt(3.4)],e:[Vt(5.6),fe(3.2,1)],s:[Vt(-11.8)]}),wr(-21.6,-6,0),an(-18,-3,1.2,.8,.76),qn(-18,-3.7,0),dn(-23.3,-2.6,Math.PI/2,1.2,1.6),Tr(-22.6,4.6,Math.PI/2,y.fabricG),an(-20,6.6,1,.7,.76),Ct(-17,0,2.4,.9),an(-11,-6.6,1.4,.8,.9,y.paintwood),dn(-13.2,-3.4,Math.PI/2,1.2,1.6),zn(-9,-7.2,3,15773728),wr(-11,6.6,0),Ct(-9,0,3,.9),Ct(-9,.9,3,.7,.4),la(-22.6,0,3),Ct(-20.6,0,.2,1);for(let l of[-6.5,-2,3,6.8])Nu(-15.5,l,-13.5,l+.6,2.7);Nu(-23.6,-.6,-15.5,.6,2.6),ao(-12.2,0,Math.PI/2),r(8,13.5,-8,-3,4,{w:[Vt(-5.6)],e:[Vt(-4.2)],n:[fe(10.8,1.2)]}),r(8,13.5,-.6,8,5,{w:[Vt(2),fe(5.4,1)],e:[Vt(6)],s:[fe(10.6,1.2)]}),r(15.5,23.6,-8,.4,2,{w:[Vt(-2.2)],n:[Vt(19)],s:[fe(20,1.2)]}),r(15.5,23.6,2.8,8,0,{w:[Vt(5)],s:[Vt(18.4)]}),an(10.8,-6.8,1.4,.7,.76),qn(10.8,-6.1,Math.PI),dn(13.2,-6,-Math.PI/2,1.2,1.6),Tr(9,4.2,-Math.PI/2,y.fabricO),ua(10.6,4.2,2,2.6,y.carpetR),Uu(13.3,4.2,-Math.PI/2),Ct(12.6,0,.4,.9),wr(21.6,-6,0),an(19,-1.2,1.2,.8,.76),zn(23,-3,3,2779856),an(20,5.2,1.4,.8,.9,y.paintwood),dn(23.3,4.4,-Math.PI/2,1.4,1.6);for(let l of[-6,-1.6,2.4,6.4])Nu(13.5,l,15.5,l-.6,2.7);la(22.4,1.6,3);for(let[l,c]of[[-19.5,-4.5],[-19.5,4.5],[-10.7,-5],[-10.7,5],[10.7,-5.5],[10.7,3.6],[19.5,-3.8],[19.5,5.4]]){let h=new tn(16767144,2.8,6,1.6);h.position.set(l,2.6,c),n.add(h)}r(-5,5,-14.2,-10.6,3,{n:[Vt(-2.6)],s:[Vt(2.6),fe(-1.6,2)],w:[fe(-12.4,1.2)],e:[fe(-12.4,1.2)]},3.2),Tn(0,3.3,-10.43,0,"\u3056\u3063\u304B",2.4,.6,"#8a3a2a"),dn(-4.6,-12.4,Math.PI/2,1.6,1.7),dn(4.6,-12.4,-Math.PI/2,1.6,1.7),an(.2,-12,2.6,.7,.95,y.paintwood);{let l=new tn(16769200,3.5,7,1.6);l.position.set(0,2.8,-12.4),n.add(l)}ni(n,"A",We.A),r(-23.6,-19.6,-22.8,-18,4,{e:[Vt(-20.4,1.2)]},2.8);{let l=new D(new mt(.9,.9,1.4,16),Ut(2775706,{roughness:.5}));l.position.set(-21.6,3.75,-20.4),_.bake(l)}for(let l of[-19,-16.6,-14.2])Nu(-18.6,l,-10.4,l,2.4);for(let l of[-18.6,-10.4])for(let c of[-19,-16.6,-14.2])_.box(y.wood,l,1.25,c,.12,2.5,.12,{surf:"wood"});Ct(-12,0,-18,1.1),Ct(-12,1.1,-18,.9,.3),qe(-20.6,-15,1),zn(-17.2,-11.8,2,15227450),la(-9.8,-21.2,3),oo(-23.6,-10.2,-9,-10.2,1.1,[[-16.2,-12.8]]),ni(n,"B",We.B),r(19.6,23.6,-22.8,-17.6,1,{w:[Vt(-19.2,1.2)]},2.8),ao(16,-20.6,0),ao(12.4,-16,Math.PI/2),la(19.2,-14.4,4),la(13,-20.8,3),fn(11,-12.6,0,y.carRed,!0),Ul(21.8,-11.6),oo(9,-10.2,23.6,-10.2,1.1,[[13.2,16.4]]),Ct(-7,0,-19.4,1.1),Ct(7.2,0,-19.6,1.1),Ct(7.2,1.1,-19.6,.8,.5),r(-23.6,-14,12,20,5,{n:[Vt(-19.4),fe(-16.2,1.2)],e:[Vt(16.4)]},3),r(13,23.6,13,20,3,{n:[Vt(16.4),fe(20.4,1.2)],w:[Vt(17.2)]},3),wr(-21.6,18.2,Math.PI),an(-17,14.6,1.2,.8,.76),Tr(21.6,16.6,-Math.PI/2,y.fabricG),Ct(15,0,18.6,.9),Ui(-1.2,1.2,9.6,11.6,2.6,i[2],y.plaster,{n:[fe(0,1.2)],s:[Vt(0,.9)],w:[fe(10.6,1)],e:[fe(10.6,1)]},s),fn(-7.4,15.4,Math.PI/2,y.carWhite),qf(8,15.6,Math.PI/2,[15777824,15231514]),oo(-12,10.4,-4,10.4,1.1,[[-9.4,-7.2]]),oo(4,10.4,12,10.4,1.1,[[7.2,9.4]]),la(-12.4,21.4,3),Ct(4.6,0,20.4,1.1),Xn(-4.6,21.2,2,.9);for(let l of[-9,9])Bl(-22,22,4.2,l);let o=new Et;Sn(57);for(let l=0;l<40;l++){let c=l/40*Math.PI*2,h=40+Mt()*14,u=5+Mt()*3,d=3+Mt()*3+(h-40)*.3,f=new D(nt(u,d,u*.8,2.5),i[l%i.length]);f.position.set(Math.cos(c)*h,d/2,Math.sin(c)*h),f.rotation.y=-c,o.add(f);let p=new D(nt(u+.4,.2,u*.8+.4,2),l%2?y.rust:s);p.position.set(Math.cos(c)*h,d+.1,Math.sin(c)*h),p.rotation.y=-c,o.add(p)}for(let l=0;l<6;l++){let c=l/6*Math.PI*2+.5,h=120,u=new D(new jn(30,26,8),Ut(5929546,{roughness:1,flatShading:!0}));u.position.set(Math.cos(c)*h,8,Math.sin(c)*h),o.add(u)}_.bake(o),_.colliders=_.colliders.filter(l=>l.min.x>-32&&l.max.x<32&&l.min.z>-30&&l.max.z<30),_.col(-40,0,-40,re.minX-.6,20,40,{bullet:!1}),_.col(re.maxX+.6,0,-40,40,20,40,{bullet:!1}),_.col(-40,0,-40,40,20,re.minZ-.6,{bullet:!1}),_.col(-40,0,re.maxZ+.6,40,20,40,{bullet:!1});let a=_.finish(n);return{colliders:_.colliders,meshes:a}}var kl;function n0(){return kl||(kl={stock:new te({map:tt.polymer.map,normalMap:tt.polymer.normalMap,color:6975560,roughness:.75}),stockDark:new te({map:tt.polymer.map,normalMap:tt.polymer.normalMap,color:2895398,roughness:.8}),metal:new te({map:tt.gunmetal.map,normalMap:tt.gunmetal.normalMap,color:3816768,metalness:.85,roughness:.38}),metalDark:new te({map:tt.gunmetal.map,color:1842463,metalness:.8,roughness:.45}),bright:new te({color:13159632,metalness:1,roughness:.2}),rubber:new te({color:1315860,roughness:.95}),lens:new Xi({color:3170464,metalness:.9,roughness:.02,clearcoat:1,iridescence:1,iridescenceIOR:1.6,emissive:530480}),orange:new te({color:15759898,roughness:.5}),brass:new te({color:14198848,metalness:1,roughness:.25})},kl.decal=new te({map:wi("VW",{w:128,h:64,size:44,bg:"rgba(0,0,0,0)",color:"#f07a1a",weight:900}),transparent:!0,roughness:.6}),kl)}var ii=(n,t,e,i,s=16)=>{let r=new mt(n,t,e,s);return r.rotateX(Math.PI/2),new D(r,i)},fa=[{id:"olive",name:"\u30AA\u30EA\u30FC\u30D6"},{id:"camoWood",name:"\u30A6\u30C3\u30C9\u30E9\u30F3\u30C9"},{id:"camoDesert",name:"\u30C7\u30B6\u30FC\u30C8"},{id:"camoUrban",name:"\u30A2\u30FC\u30D0\u30F3"},{id:"camoCarrot",name:"\u30AD\u30E3\u30ED\u30C3\u30C8"},{id:"gold",name:"\u30B4\u30FC\u30EB\u30C9"}],Wu={};function ub(n){return n==="olive"||!n?n0().stock:(Wu[n]||(Wu[n]=n==="gold"?new te({color:15251520,metalness:1,roughness:.22,map:tt.polymer.map,normalMap:tt.polymer.normalMap}):new te({map:tt[n].map,normalMap:tt.polymer.normalMap,roughness:.7})),Wu[n])}function pa(n=1,t="olive",e=null){let i=n0(),s=ub(t),r=new Et,o=(rt,Qt,ue,ht,bt=r)=>(rt.position.set(Qt,ue,ht),bt.add(rt),rt),a=n>0?18:8,l=[[-.36,-.012],[-.1,-.012],[.16,-.012],[.22,-.022],[.3,.006],[.52,.012],[.555,0],[.565,-.13],[.5,-.142],[.3,-.088],[.235,-.082],[.215,-.175],[.165,-.185],[.145,-.07],[-.3,-.062],[-.36,-.046]],c=new ui;c.moveTo(l[0][0],l[0][1]);for(let rt=1;rt<l.length;rt++)c.lineTo(l[rt][0],l[rt][1]);c.closePath();let h=new $r;h.absellipse(.2,-.048,.022,.016,0,Math.PI*2,!1,.4),c.holes.push(h);let u=new bi(c,{depth:.046,bevelEnabled:!0,bevelSize:.008,bevelThickness:.009,bevelSegments:n>0?3:1,curveSegments:n>0?10:4});u.translate(0,0,-.023),u.rotateY(-Math.PI/2);let d=u.attributes.uv;for(let rt=0;rt<d.count;rt++)d.setXY(rt,d.getX(rt)*3,d.getY(rt)*3);o(new D(u,s),0,0,0);let f=new D(new ve(.05,.022,.16),i.stockDark);o(f,0,.022,.42);for(let rt of[.36,.48])o(ii(.004,.004,.03,i.metal,6),0,.012,rt).rotation.set(0,0,0);o(new D(new ve(.058,.142,.022),i.rubber),0,-.066,.575);for(let rt=0;rt<6;rt++)o(new D(new ve(.06,.004,.03),i.stockDark),0,-.09-rt*.015,.19-rt*.004);for(let rt=0;rt<4;rt++)for(let Qt of[-1,1])o(new D(new ve(.004,.012,.04),i.stockDark),Qt*.032,-.035,-.28+rt*.055);o(ii(.024,.024,.28,i.metal,a),0,.012,.02),o(new D(new ve(.04,.012,.28),i.metal),0,.034,.02);for(let rt=0;rt<12;rt++)o(new D(new ve(.044,.006,.012),i.metalDark),0,.043,-.1+rt*.022);o(new D(new ve(.004,.018,.06),i.metalDark),.024,.016,-.01);let p=ii(.0105,.014,.66,i.metal,a);if(o(p,0,.012,-.44),n>0)for(let rt=0;rt<6;rt++){let Qt=rt/6*Math.PI*2,ue=new D(new ve(.003,.003,.36),i.metalDark);ue.position.set(Math.cos(Qt)*.0125,.012+Math.sin(Qt)*.0125,-.45),r.add(ue)}let g=new Et;o(g,0,.012,-.8),g.add(ii(.017,.017,.07,i.metalDark,a));for(let rt of[-.018,0,.018])for(let Qt of[-1,1]){let ue=new D(new ve(.005,.02,.008),i.rubber);ue.position.set(Qt*.016,0,rt),g.add(ue)}let m=e&&e.rifle==="root",x=e&&e.att||[],M=new rn;if(M.position.set(0,.012,m?-.95:-.84),r.add(M),m){g.position.z=-.9,g.scale.set(1.35,1.35,1.6),o(ii(.026,.026,.34,i.stockDark,a),0,.006,-.36);for(let rt=0;rt<5;rt++)o(new D(new ve(.056,.006,.03),i.metalDark),0,-.02,-.24-rt*.055);o(ii(.0125,.0125,.2,i.metal,a),0,.012,-.78)}if(x.includes("laser")){o(new D(new ve(.03,.026,.09),i.metalDark),.03,-.012,-.36);let rt=new D(new Wi(.008,12),new Wn({color:16719904}));rt.rotation.y=Math.PI,o(rt,.03,-.012,-.406)}if(x.includes("stab")&&(o(new D(new ve(.03,.03,.05),i.metalDark),-.04,.086,.04),o(new D(new ve(.006,.008,.012),new Wn({color:4259680})),-.056,.094,.04)),x.includes("fmj"))for(let rt of[-.5,-.56])o(ii(.0152,.0152,.012,i.brass,a),0,.012,rt);let w=new Et;o(w,0,.086,.03),w.add(ii(.017,.017,.24,i.metalDark,a));let E=ii(.03,.019,.07,i.metalDark,a);E.position.z=-.15,w.add(E);let R=ii(.031,.031,.035,i.metalDark,a);R.position.z=-.2,w.add(R);let S=new D(new Wi(.027,a),i.lens);S.position.z=-.218,S.rotation.y=Math.PI,w.add(S);let b=ii(.019,.024,.06,i.metalDark,a);b.position.z=.14,w.add(b);let v=ii(.025,.025,.04,i.rubber,a);v.position.z=.185,w.add(v);let A=new D(new Wi(.02,a),i.lens);A.position.z=.206,w.add(A);let P=new D(new mt(.012,.012,.03,a),i.metal);P.position.set(0,.026,-.01),w.add(P);let L=new D(new mt(.012,.012,.03,a),i.metal);L.rotation.z=Math.PI/2,L.position.set(.026,0,-.01),w.add(L);let B=new D(new mt(.01,.01,.024,a),i.metal);if(B.rotation.z=Math.PI/2,B.position.set(-.024,0,-.01),w.add(B),n>0)for(let rt=0;rt<12;rt++){let Qt=new D(new ve(.002,.03,.003),i.bright),ue=rt/12*Math.PI*2;Qt.position.set(Math.cos(ue)*.0125,.026,-.01+Math.sin(ue)*.0125),w.add(Qt)}let V=ii(.0175,.0175,.006,i.orange,a);V.position.z=.1,w.add(V);for(let rt of[-.07,.08]){let Qt=new D(new Xe(.019,.005,6,a),i.metal);Qt.position.z=rt,w.add(Qt);let ue=new D(new ve(.03,.03,.018),i.metal);ue.position.set(0,-.03,rt),w.add(ue);let ht=new D(new mt(.004,.004,.036,6),i.bright);ht.rotation.z=Math.PI/2,ht.position.set(0,-.034,rt),w.add(ht)}let I=new Et;o(I,0,.012,.12);let U=ii(.012,.012,.12,i.bright,10);U.position.z=-.03,I.add(U);let G=new Et;G.position.z=0,I.add(G);let X=new D(new mt(.0045,.0045,.065,8),i.metal);X.rotation.z=Math.PI/2-.35,X.position.set(.032,-.012,0),G.add(X);let j=new D(new he(.011,12,10),i.metalDark);j.position.set(.063,-.024,0),G.add(j);let Y=ii(.014,.012,.03,i.metal,10);Y.position.z=.04,I.add(Y);let $=new rn;$.position.set(.063,-.024,0),G.add($);let Z=new Et;o(Z,0,-.04,0);let ft=new D(new ve(.032,.07,.085),i.metalDark);ft.position.y=-.03,ft.rotation.x=-.08,Z.add(ft);let kt=new D(new ve(.036,.012,.09),i.stockDark);if(kt.position.y=-.068,Z.add(kt),e&&e.att&&e.att.includes("ext")&&(ft.scale.y=1.7,ft.position.y=-.055,kt.position.y=-.118),e&&e.att&&e.att.includes("fast")){let rt=ft.clone();rt.position.x=.036,Z.add(rt);let Qt=new D(new ve(.075,.016,.092),i.orange);Qt.position.y=-.035,Z.add(Qt)}let it=new D(new Xe(.03,.005,6,16,Math.PI),i.metal);it.rotation.set(0,Math.PI/2,Math.PI),o(it,0,-.068,.11);let Pt=new D(new ve(.006,.026,.006),i.bright);Pt.rotation.x=.3,o(Pt,0,-.062,.11);for(let rt of[-1,1]){let Qt=ii(.005,.005,.2,i.metalDark,6);o(Qt,rt*.012,-.07,-.2)}if(o(new D(new ve(.04,.015,.03),i.metalDark),0,-.065,-.31),o(new D(new Xe(.008,.002,4,10),i.metal),0,-.14,.48).rotation.y=Math.PI/2,n>0){let rt=new D(new be(.08,.04),i.decal);rt.position.set(.0325,-.04,.38),rt.rotation.y=Math.PI/2,r.add(rt)}let zt=new rn;zt.position.set(0,-.11,.19),r.add(zt);let ne=new rn;ne.position.set(0,-.06,-.2),r.add(ne);let Ft=new rn;Ft.position.set(.03,.02,-.01),r.add(Ft);let ie=new rn;return ie.position.set(0,.086,.35),r.add(ie),r.traverse(rt=>{rt.isMesh&&(rt.castShadow=!0,rt.receiveShadow=!0)}),un(G),un(I,[G]),un(Z),un(g),un(w,[S]),un(r,[I,Z,w,g]),{root:r,muzzlePt:M,gripPt:zt,forePt:ne,boltPt:$,ejectPt:Ft,eyePt:ie,lens:S,mag:Z,bolt:I,handle:G,setBolt(rt){let Qt=rt<.2?rt/.2:rt<.8?1:1-(rt-.8)/.2,ue=rt<.2?0:rt<.5?(rt-.2)/.3:rt<.8?1-(rt-.5)/.3:0;G.rotation.z=Qt*1.4,I.position.z=.12+ue*.09}}}var Xu;function Pg(){let n=n0();Xu||(Xu=new mt(.006,.007,.06,8),Xu.rotateX(Math.PI/2));let t=new D(Xu,n.brass);return t.castShadow=!0,t}var Gl=new F;function Yi(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Gl.copy(t),Gl[i]=0,Gl.normalize();let c=.5*o/(o+a),h=1-Gl.angleTo(n)/l;return Math.sign(Gl[e])===1?h*c:a/(o+a)+c+c*(1-h)}var qu=class n extends ve{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new F,c=new F,h=new F(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,g=new F,m=.5/o;for(let x=0,M=0;x<u.length;x+=3,M+=2)switch(l.fromArray(u,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[x+0]=h.x*Math.sign(l.x)+c.x*r,u[x+1]=h.y*Math.sign(l.y)+c.y*r,u[x+2]=h.z*Math.sign(l.z)+c.z*r,d[x+0]=c.x,d[x+1]=c.y,d[x+2]=c.z,Math.floor(x/p)){case 0:g.set(1,0,0),f[M+0]=Yi(g,c,"z","y",r,i),f[M+1]=1-Yi(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),f[M+0]=1-Yi(g,c,"z","y",r,i),f[M+1]=1-Yi(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),f[M+0]=1-Yi(g,c,"x","z",r,t),f[M+1]=Yi(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),f[M+0]=1-Yi(g,c,"x","z",r,t),f[M+1]=1-Yi(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),f[M+0]=1-Yi(g,c,"x","y",r,t),f[M+1]=1-Yi(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),f[M+0]=Yi(g,c,"x","y",r,t),f[M+1]=1-Yi(g,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var Ir=[{id:"none",name:"\u306A\u3057"},{id:"helmet",name:"\u30D8\u30EB\u30E1\u30C3\u30C8"},{id:"beret",name:"\u30D9\u30EC\u30FC\u5E3D"},{id:"cap",name:"\u30AD\u30E3\u30C3\u30D7"},{id:"boonie",name:"\u30D6\u30FC\u30CB\u30FC\u30CF\u30C3\u30C8"}],Ng={carrot:{name:"\u306B\u3093\u3058\u3093",color:"#f07a1a",height:1.05},tomato:{name:"\u30C8\u30DE\u30C8",color:"#d8231a",height:.82},potato:{name:"\u3058\u3083\u304C\u3044\u3082",color:"#c8a06a",height:.9},pepper:{name:"\u30D4\u30FC\u30DE\u30F3",color:"#2a8a1e",height:.88}},xi={id:null},Ig={id:"now",hl:!0};function Ug(n){xi.id=Cr[n]?n:null}var Cr={A:{K:1.22,fat:1.12,leg:1,skin:14852218,body:{carrot:16747050,tomato:16726828,potato:15777138,pepper:4045614},rough:.9,clear:0,rim:[14085887,.08,3.5],suit:2898530,glove:2500398,boot:14605010,sole:16742938,gear:6056512,strap:2764083,eyeS:1.5,green:4637754},B:{K:1.22,fat:1.06,leg:1,skin:14199444,body:{carrot:14255696,tomato:12536384,potato:13808780,pepper:6261836},rough:.92,clear:0,rim:[15260927,.06,3.5],suit:4665918,glove:15788250,boot:3877410,sole:2168079,gear:6048828,strap:2826009,eyeS:1.38,green:7311186}};function Fg(n,t,e,i){return n.onBeforeCompile=s=>{s.uniforms.uRim={value:new qt(t).multiplyScalar(e)},s.uniforms.uRimP={value:i},s.fragmentShader=`uniform vec3 uRim; uniform float uRimP;
`+s.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
{ float rr = 1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0); totalEmissiveRadiance += uRim * pow(rr, uRimP); }`)},n.customProgramCacheKey=()=>"rim"+t+"_"+e+"_"+i,n}function ws(n,t={}){let e=Cr[xi.id];return Fg(new Xi({color:n,roughness:e.rough,clearcoat:e.clear*.6,clearcoatRoughness:.35,...t}),e.rim[0],e.rim[1]*.6,e.rim[2])}var zl={};function db(n){let t=Cr[xi.id],e=n+(xi.id||"");if(zl[e])return zl[e];if(t){let a=Fg(new Xi({color:16777215,vertexColors:!0,roughness:t.rough,clearcoat:t.clear,clearcoatRoughness:.25,sheen:0}),t.rim[0],t.rim[1],t.rim[2]),l=new te({map:tt["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4});return zl[e]={skin:a,flesh:l}}let i=tt[n],s={carrot:.6,tomato:.18,potato:.9,pepper:.15}[n],r=new Xi({map:i.map,normalMap:i.normalMap,roughness:s,clearcoat:n==="tomato"||n==="pepper"?.8:0,clearcoatRoughness:.2,normalScale:new lt(1,1)}),o=new te({map:tt["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4});return zl[e]={skin:r,flesh:o},zl[e]}var Je,Bi,os,Js,Ar,ma,as,$i,co,Vl,Wl,Xl,Yu={};function Bg(){let n=xi.id||"base";if(Yu[n]){({skinMat:Je,greenMat:Bi,eyeW:os,eyeB:Js,browM:Ar,mouthM:ma,gearM:as,strapM:$i,toeNail:co,gloveM:Vl,bootM:Wl,soleM:Xl}=Yu[n]);return}let t=Cr[xi.id];if(t){Je=ws(t.skin,{roughness:.85,sheen:0}),Bi=ws(t.green,{side:hn}),os=new te({color:15921906,roughness:1}),Js=new te({color:xi.id==="B"?1709088:1315866,roughness:1,metalness:0}),Ar=new te({color:xi.id==="B"?2759706:1708556,roughness:.8}),ma=new te({color:4854288,roughness:.6}),as=ws(t.gear),$i=ws(t.strap),co=ws(16508120),Vl=ws(t.glove),Wl=ws(t.boot),Xl=ws(t.sole),Yu[n]={skinMat:Je,greenMat:Bi,eyeW:os,eyeB:Js,browM:Ar,mouthM:ma,gearM:as,strapM:$i,toeNail:co,gloveM:Vl,bootM:Wl,soleM:Xl};return}Je=new Xi({map:tt.skin.map,normalMap:tt.skin.normalMap,roughness:.5,color:15913144,sheen:.4,sheenColor:16751226}),Bi=new te({map:tt.veggreen.map,normalMap:tt.veggreen.normalMap,roughness:.6,side:hn}),os=new Xi({color:16777215,roughness:.08,clearcoat:1}),Js=new Xi({color:1118481,roughness:.05,clearcoat:1}),Ar=new te({color:2759184,roughness:.9}),ma=new te({color:3803656,roughness:.6}),as=new te({map:tt.polymer.map,normalMap:tt.polymer.normalMap,color:5922880,roughness:.85}),$i=new te({color:2763298,roughness:.8}),co=new te({color:15782080,roughness:.3}),Vl=as,Wl=Je,Xl=Je,Yu[n]={skinMat:Je,greenMat:Bi,eyeW:os,eyeB:Js,browM:Ar,mouthM:ma,gearM:as,strapM:$i,toeNail:co,gloveM:Vl,bootM:Wl,soleM:Xl}}function fb(n){let t=Se(n.length*31+7,4,3),e=Cr[xi.id],i,s;if(n==="carrot"){let g=[];for(let x=0;x<=90;x++){let M=x/90,w=-.14+M*1.05,E=.03+Math.pow(M,.55)*.2;e&&(E=.2-Math.pow(1-M,2.2)*.13,M<.12&&(E*=Math.sqrt(Math.max(0,1-Math.pow((.12-M)/.12,2)))*.9+.1)),M>.88&&(E*=Math.sqrt(Math.max(0,1-Math.pow((M-.88)/.12,2)))*.92+.08),M===1&&(E=0),M===0&&(E=0),g.push(new lt(E,w))}i=new Jr(g,56),s=.55}else if(n==="tomato"){i=new he(.42,64,40);let g=i.attributes.position;for(let m=0;m<g.count;m++){let x=g.getX(m),M=g.getY(m),w=g.getZ(m),E=Math.atan2(w,x),R=M/.42,S=1+Math.cos(E*6)*.035*(1-Math.abs(R)),b=M>0?.82:.9,v=M>.3?-.06*Math.pow((M-.3)/.12,2):0;x*=S,w*=S,M=M*b+v,g.setXYZ(m,x,M+.36,w)}s=.42}else if(n==="potato"){i=new he(.34,64,48);let g=i.attributes.position;for(let m=0;m<g.count;m++){let x=g.getX(m),M=g.getY(m),w=g.getZ(m),E=1+(t((Math.atan2(w,x)/Math.PI+1)*.5,(M/.34+1)*.5)-.5)*(e?.14:.32);g.setXYZ(m,x*E*1.05,M*1.38*E+.42,w*E*.92)}s=.6}else{let g=[];for(let x=0;x<=36;x++){let M=x/36,w=-.02+M*.82,E=.06+Math.sin(Math.min(1,M*1.25)*Math.PI*.5)*.3;M>.85&&(E*=Math.sqrt(Math.max(0,1-Math.pow((M-.85)/.15,2)))*.6+.4),M===1&&(E=.12),M===0&&(E=0),g.push(new lt(E,w))}g.push(new lt(0,.76)),i=new Jr(g,48);let m=i.attributes.position;for(let x=0;x<m.count;x++){let M=m.getX(x),w=m.getY(x),E=m.getZ(x),R=Math.atan2(E,M),S=1+Math.cos(R*4)*.09-(w<.1?Math.cos(R*4)*.4*(.1-w):0);m.setXYZ(x,M*S,w,E*S)}s=.52}let r=Cr[xi.id];if(!r){let g=i.attributes.position,m=Se(n.length*17+3,6,3),x=[];if(n==="potato")for(let M=0;M<9;M++){let w=M*2.39996%(Math.PI*2),E=.12+M*.37%1*.62;x.push([w,E,.035+M%3*.01])}for(let M=0;M<g.count;M++){let w=g.getX(M),E=g.getY(M),R=g.getZ(M),S=Math.atan2(R,w),b=(S/Math.PI+1)*.5,v=1;if(n==="carrot"&&E>-.1&&E<.88){let A=Math.pow(Math.abs(Math.sin(E*46+m(b,E)*5)),10),P=m(b*2,E*1.5)>.42?1:.35;v-=A*P*.045}if(n==="potato")for(let[A,P,L]of x){let B=Math.abs((S-A+Math.PI*3)%(Math.PI*2)-Math.PI)*.3,V=E-P,I=Math.hypot(B,V);I<L&&(v-=(1-I/L)*(1-I/L)*.09)}n==="pepper"&&E>.55&&(v+=Math.max(0,Math.cos(S*4))*.04*(E-.55)/.25),g.setXYZ(M,w*v,E,R*v)}}if(n!=="potato"&&!r){let g=i.attributes.position;for(let m=0;m<g.count;m++){let x=g.getX(m),M=g.getY(m),w=g.getZ(m),E=1+(t((Math.atan2(w,x)/Math.PI+1)*.5,M*.8+.2)-.5)*.06;g.setXYZ(m,x*E,M,w*E)}}if(r){let g=i.attributes.position;i.computeBoundingBox();let m=i.boundingBox.min.y,x=i.boundingBox.max.y,M=new qt(r.body[n]),w=new Float32Array(g.count*3);for(let E=0;E<g.count;E++){let R=(g.getY(E)-m)/(x-m),S=r.fat;g.setXYZ(E,g.getX(E)*r.K*S,g.getY(E)*r.K,g.getZ(E)*r.K*S);let b=.78+.3*Math.pow(R,.8);w[E*3]=M.r*b,w[E*3+1]=M.g*b,w[E*3+2]=M.b*b}i.setAttribute("color",new vn(w,3)),s*=r.K}i.computeVertexNormals();let o=i.toNonIndexed(),a=o.attributes.position,l=o.attributes.normal,c=o.attributes.uv,h=o.attributes.color,u={p:[],n:[],u:[],c:[]},d={p:[],n:[],u:[],c:[]};for(let g=0;g<a.count;g+=3){let x=(a.getY(g)+a.getY(g+1)+a.getY(g+2))/3>s?u:d;for(let M=0;M<3;M++)x.p.push(a.getX(g+M),a.getY(g+M),a.getZ(g+M)),x.n.push(l.getX(g+M),l.getY(g+M),l.getZ(g+M)),x.u.push(c.getX(g+M),c.getY(g+M)),h&&x.c.push(h.getX(g+M),h.getY(g+M),h.getZ(g+M))}let f=g=>{let m=new je;return m.setAttribute("position",new ce(g.p,3)),m.setAttribute("normal",new ce(g.n,3)),m.setAttribute("uv",new ce(g.u,2)),g.c.length&&m.setAttribute("color",new ce(g.c,3)),m},p=(g,m)=>{let x=0;for(let M=0;M<a.count;M++)if(Math.abs(a.getY(M)-g)<.04){let w=Math.atan2(a.getZ(M),a.getX(M));Math.abs((w-m+Math.PI*3)%(Math.PI*2)-Math.PI)<.25&&(x=Math.max(x,Math.hypot(a.getX(M),a.getZ(M))))}return x};return i.computeBoundingBox(),{upper:f(u),lower:f(d),split:s,radiusAt:p,top:i.boundingBox.max.y,bottom:i.boundingBox.min.y}}var i0={};function pb(n,t,e){let i=n+":"+t+":"+e%3;if(i0[i])return i0[i];let s=new be(t,n,2,8),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),c=(r.getY(o)+n/2)/n,h=Math.sin(Math.min(1,(1-c)*1.3+.15)*Math.PI*.5)*(1-c*.85),u=c*c*.09*(1+e%3*.25);r.setXYZ(o,c*n*.95,.012+Math.sin(c*Math.PI)*.025-u,a*h+Math.abs(a)*.15*c)}return s.computeVertexNormals(),i0[i]=s,s}var s0={};function ql(n,t,e){let i=n+JSON.stringify(t);if(!s0[i]){let r=[];for(let l=0;l<=16;l++){let c=l/16,h=0;for(let u=0;u<t.length-1;u++){let[d,f]=t[u],[p,g]=t[u+1];if(c>=d&&c<=p){let m=(c-d)/(p-d),x=m*m*(3-2*m);h=f+(g-f)*x}}r.push(new lt(h,-c*n))}r.unshift(new lt(1e-4,0)),r.push(new lt(1e-4,-n));let a=new Jr(r,14);a.computeVertexNormals(),s0[i]=a}let s=new D(s0[i],e);return s.castShadow=!0,s}function ga(n,t,e,i=10){let s=new D(new xs(n,t,4,i),e);return s.castShadow=!0,s}function Og(n,t){let e=new Et,i=new D(new he(.055,12,10),Je);i.scale.set(1,1.2,.55),i.position.y=-.05,i.castShadow=!0,e.add(i);let s=[];if(t>0){for(let a=0;a<4;a++){let l=new Et;l.position.set((a-1.5)*.024,-.11,0);let c=ga(.011,.035,Je,6);c.position.y=-.02,l.add(c);let h=new Et;h.position.y=-.045,l.add(h);let u=ga(.01,.028,Je,6);u.position.y=-.018,h.add(u);let d=new D(new he(.008,6,4),co);d.scale.set(1,1.4,.35),d.position.set(0,-.03,-.008),h.add(d);let f=new D(new he(.012,6,4),Je);f.position.set(0,0,-.002),l.add(f),l.rotation.x=1.45,h.rotation.x=1.6,e.add(l),s.push(l)}let r=new Et;r.position.set(n*.045,-.06,-.01),r.rotation.set(.9,0,n*.5);let o=ga(.013,.04,Je,6);o.position.y=-.025,r.add(o),e.add(r)}else{let r=new D(new he(.05,8,6),Je);r.position.set(0,-.11,.02),r.scale.set(1.1,.8,.9),e.add(r)}return e}function mb(){let n=new Et,t=new D(new he(.06,14,10),Je);t.scale.set(.95,.55,2),t.position.set(0,-.03,-.06),t.castShadow=!0,n.add(t);let e=new D(new he(.05,10,8),Je);e.position.set(0,-.035,.02),n.add(e);for(let s of[-1,1]){let r=new D(new he(.017,8,6),Je);r.position.set(s*.04,0,0),n.add(r)}let i=new D(new he(.05,10,8),Je);i.scale.set(.9,.5,1.4),i.position.set(0,-.005,-.07),n.add(i);for(let s=0;s<5;s++){let r=s===0?.019:.014-s*.0012,o=new D(new he(r,8,6),Je);o.position.set((s-2)*.021,-.045+(s===0?.004:0),-.17+Math.abs(s-1)*.008),o.scale.set(1,.8,1.3),n.add(o);let a=new D(new he(r*.6,6,4),co);a.position.set(o.position.x,o.position.y+r*.45,o.position.z-r*.3),a.scale.set(1,.3,1),n.add(a)}return n}var Hg=new F,kg=new F,L3=new _n,Gg=new $t,$u=new F(0,-1,0);function Zu(n,t,e){if(n.lost)return;let i=n.sh,s=i.parent;s.updateWorldMatrix(!0,!1);let r=Gg.copy(s.matrixWorld).invert(),o=Hg.copy(t).applyMatrix4(r).sub(i.position),a=kg.copy(e).applyMatrix4(r).sub(i.position),l=n.upLen,c=n.foLen,h=o.length();h=Math.min(h,l+c-.001),h=Math.max(h,.05);let u=o.clone().normalize(),d=(l*l+h*h-c*c)/(2*l*h),f=Math.acos(Math.max(-1,Math.min(1,d))),p=a.clone().sub(u.clone().multiplyScalar(a.dot(u))).normalize(),g=u.clone().multiplyScalar(Math.cos(f)*l).add(p.multiplyScalar(Math.sin(f)*l));i.quaternion.setFromUnitVectors($u,g.clone().normalize());let m=o.clone().sub(g).applyQuaternion(i.quaternion.clone().invert());n.el.quaternion.setFromUnitVectors($u,m.normalize())}var Lg=new _n,Dg=new _n,D3=new $t,r0={grip:[new F(0,1,0),new F(0,0,1),new F(1,0,0)],fore:[new F(.7071,0,-.7071),new F(.7071,0,.7071),new F(0,-1,0)]},zg={};for(let n in r0)zg[n]=new _n().setFromRotationMatrix(new $t().makeBasis(...r0[n]));function Yl(n,t,e){n.lost||(n.wr.parent.getWorldQuaternion(Lg),Dg.copy(t).multiply(zg[e]),n.wr.quaternion.copy(Lg.invert().multiply(Dg)))}function $l(n,t,e,i=1){let[,s,r]=r0[e],o=s.clone().multiplyScalar(.065).add(r.clone().multiplyScalar(.03)).multiplyScalar(i);return n.clone().add(o.applyQuaternion(t))}function o0(n,t,e=.29,i=.26){Bg();let s=new Et,r=ga(.05,e-.07,Je);r.position.y=-e/2,s.add(r);let o=new Et;o.position.y=-e,s.add(o);let a=new D(new he(.048,10,8),Je);o.add(a);let l=ql(i,[[0,.046],[.2,.056],[.6,.045],[1,.036]],Je);o.add(l);let c=new Et;c.position.y=-i,o.add(c);let h=Og(n,1);c.add(h);let u=new D(new mt(.058,.058,.05,14),new te({color:t,roughness:.7,map:tt.carpet.map}));u.position.y=-.16,o.add(u);let d=new D(new he(.058,12,10),as);return d.scale.set(1.02,1,.6),d.position.y=-.045,h.add(d),{side:n,sh:s,el:o,wr:c,hand:h,up:r,elb:a,upLen:e,foLen:i,lost:!1}}var Pr=class{constructor(t,e,i={}){Bg(),this.kind=t,this.team=e;let s=i.lod??1,r=i.camo||"olive",o=i.hat||"none",a=db(t),l=Cr[xi.id],c=(I,U,G)=>l?new qu(I,U,G,3,Math.min(I,U,G)*.45):new ve(I,U,G);this.style=xi.id;let h=l?l.K:1,u=l?l.leg:1,d=!1;this.hipBase=.8*u,this.root=new Et,this.hips=new Et,this.hips.position.y=this.hipBase,this.root.add(this.hips),this.spine=new Et,this.hips.add(this.spine);let f=fb(t);this.geo=f,this.upper=new D(f.upper,a.skin),this.lower=new D(f.lower,a.skin);for(let I of[this.upper,this.lower])I.castShadow=!0,I.receiveShadow=!0,this.spine.add(I);this.bodyTop=f.top,this.split=f.split;let p=Math.max(.1,f.radiusAt(f.split,-Math.PI/2),f.radiusAt(f.split,0));this.cap=new D(new Wi(p*.98,24),a.flesh),this.cap.rotation.x=-Math.PI/2,this.cap.position.y=f.split,this.cap.visible=!1,this.spine.add(this.cap),this.splitR=p,this.face=new Et,this.upper.add(this.face);let g={carrot:.68,tomato:.48,potato:.72,pepper:.6}[t]*h,m=f.radiusAt(g,-Math.PI/2)||.25;this.eyes=[];for(let I of[-1,1]){let U=new Et,G=I*(l?.36:.32);U.position.set(Math.sin(G)*m*.98,g,-Math.cos(G)*m*.98),U.rotation.y=-G;let X=i.eye||Ig.id,j,Y=i.hl??Ig.hl;if(X==="dot"){let $=new D(new he(.03,16,12),Js);if($.scale.set(.85,1.25,.5),$.position.z=-.01,U.add($),Y){let Z=new D(new he(.008,8,6),os);Z.position.set(.008,.016,-.024),U.add(Z)}j=new Et,U.add(j)}else if(X==="anime"){let $=new D(new he(.062,18,14),os);$.scale.set(.9,1.3,.45),U.add($);let Z=new D(new he(.044,16,12),Js);if(Z.scale.set(.82,1.2,.45),Z.position.set(I*-.004,-.008,-.02),U.add(Z),Y)for(let[kt,it,Pt]of[[.014,.022,.013],[-.012,-.024,.006]]){let zt=new D(new he(Pt,8,6),os);zt.position.set(kt,it,-.04),U.add(zt)}let ft=new D(new Xe(.056,.008,6,16,Math.PI*.9),Ar);ft.position.set(0,0,-.016),ft.scale.set(.95,1.4,1),ft.rotation.z=Math.PI*.05,U.add(ft),j=new Et,U.add(j)}else if(X==="sticker"){let $=new D(new mt(.058,.058,.012,24),os);$.rotation.x=Math.PI/2,$.scale.set(1,1,1.15),$.position.z=-.004,U.add($);let Z=new D(new mt(.028,.028,.006,20),Js);Z.rotation.x=Math.PI/2,Z.position.set(I*-.006,-.006,-.012),U.add(Z);let ft=ga(.014,.05,Ar,6);ft.rotation.z=Math.PI/2+I*.2,ft.position.set(0,.085,-.005),U.add(ft),j=new Et,U.add(j)}else{let $=new D(new he(.055,16,12),os);$.scale.set(1,1.15,.55),U.add($);let Z=new D(new he(l?.034:.03,16,12),Js);if(Z.position.set(I*-.005,-.004,-.024),Z.scale.set(1,1.1,.6),U.add(Z),Y){let kt=new D(new he(l?.011:.008,8,6),os);kt.position.set(.012,.014,l?-.05:-.045),U.add(kt)}j=new D(new he(.058,14,8,0,Math.PI*2,0,Math.PI*.42),a.skin),j.rotation.x=-.35,j.scale.set(1,1.15,.62),U.add(j),X==="sleepy"&&(j.userData.base=.2);let ft=ga(l?.012:.009,.06,Ar,6);ft.rotation.z=Math.PI/2+I*(X==="sleepy"?-.1:.35),ft.position.set(0,.075,-.02),U.add(ft)}l&&U.scale.setScalar(l.eyeS),this.face.add(U),this.eyes.push({g:U,lid:j})}let x=new D(new Xe(.04,l?.013:.009,8,20,Math.PI*.8),ma),M=g-.11*(l?1.25:1),w=f.radiusAt(M,-Math.PI/2)||m;if(x.position.set(0,M,-w*.99),x.rotation.set(0,0,Math.PI+Math.PI*.1),l&&x.scale.setScalar(1.2),this.face.add(x),this.top=new Et,this.top.position.y=f.top-.02,this.top.scale.setScalar(h),this.upper.add(this.top),t==="carrot"){let I=new D(new mt(.035,.05,.04,12),Bi);I.position.y=0,this.top.add(I);for(let U=0;U<7;U++){let G=U/7*Math.PI*2,X=.3+U%3*.12,j=.3+U%2*.08,Y=new Et;Y.position.set(Math.cos(G)*.02,.01,Math.sin(G)*.02),Y.rotation.set(Math.sin(G)*X,0,-Math.cos(G)*X),this.top.add(Y);let $=new D(new mt(l?.014:.005,l?.022:.011,j,l?10:5),Bi);if($.position.y=j/2,Y.add($),s>0&&!Cr[xi.id])for(let Z=0;Z<5;Z++){let ft=j*(.45+Z*.12);for(let kt of[-1,1]){let it=new D(new he(.03-Z*.004,6,4),Bi);it.scale.set(.35,1.3,.12),it.position.set(kt*.025,ft,0),it.rotation.set(0,G,kt*.9),Y.add(it)}}else{let Z=new D(new he(.06,16,10),Bi);Z.scale.set(.75,1.6,.35),Z.position.y=j,Y.add(Z)}}}else if(t==="tomato"||t==="pepper"){let I=t==="tomato"?6:5;for(let Z=0;Z<I;Z++){let ft=Z/I*Math.PI*2+Z%2*.12,kt=new D(pb(t==="tomato"?.2:.13,t==="tomato"?.045:.06,Z),Bi);kt.position.set(Math.cos(ft)*.015,0,Math.sin(ft)*.015),kt.rotation.y=-ft,this.top.add(kt)}let U=t==="pepper"?[[0,-.01,0],[.004,.06,.01],[.03,.12,.02],[.07,.15,.02]]:[[0,0,0],[.005,.04,0],[.02,.075,.01]],G=new fr(U.map(Z=>new F(...Z))),X=new Kr(G,12,t==="pepper"?.024:.013,8,!1),j=new D(X,Bi);this.top.add(j);let Y=new D(new he(t==="pepper"?.06:.03,12,8),Bi);Y.scale.y=.45,this.top.add(Y);let $=new D(new Wi(t==="pepper"?.024:.013,8),new te({color:13162640,roughness:.8}));$.position.copy(U[U.length-1].length?new F(...U[U.length-1]):new F),$.lookAt($.position.clone().add(G.getTangent(1))),this.top.add($)}else for(let I=0;I<2;I++){let U=new D(new jn(.015,.06,5),Bi);U.position.set(.05-I*.1,0,.02),this.top.add(U)}if(t==="carrot"&&s>0&&!l){let I=new te({color:15249536,roughness:.8});for(let U=0;U<16;U++){let G=.02+U*.618%1*.45,X=U*2.4,j=(f.radiusAt(G,X)||.1)*.97,Y=new D(new mt(.0015,.004,.05+U%4*.015,4),I);Y.position.set(Math.cos(X)*j,G,Math.sin(X)*j),Y.rotation.set(Math.sin(X)*1.1,0,-Math.cos(X)*1.1),this.lower.add(Y)}}let E={carrot:.8,tomato:.58,potato:.86,pepper:.7}[t]*h,R=Math.max(f.radiusAt(E,0),f.radiusAt(E,-Math.PI/2))||.2;this.bandMat=l?ws(e===0?3116287:16727342):new te({color:e===0?2783968:14694954,roughness:.7,map:tt.carpet.map});let S=new D(new Xe(R*1.01,.022,8,32),this.bandMat);S.rotation.x=Math.PI/2,S.scale.set(1,1,1.6),S.position.y=E,this.upper.add(S);let b=new D(new he(.03,8,6),this.bandMat);b.position.set(0,E,R*1.02),this.upper.add(b);for(let I of[-1,1]){let U=new D(c(.04,.14,.01),this.bandMat);U.position.set(I*.025,E-.07,R*1.04),U.rotation.z=I*.3,this.upper.add(U)}if(o!=="none"){let I=f.top-(t==="carrot"?.13:t==="potato"?.12:.08)*h,U=Math.max(f.radiusAt(I,0),f.radiusAt(I,Math.PI/2),.12)*1.08,G=new Et;G.position.y=I,this.upper.add(G);let X=(j,Y={})=>l?ws(j,{side:Y.side||ys}):new te({color:j,roughness:.75,map:tt.polymer.map,normalMap:tt.polymer.normalMap,...Y});if(o==="helmet"){let j=new D(new he(U,24,12,0,Math.PI*2,0,Math.PI*.5),X(5922880));j.scale.y=.85,G.add(j);let Y=new D(new Xe(U,.02,6,24),X(4870196));Y.rotation.x=Math.PI/2,G.add(Y);let $=new D(c(.08,.05,.04),X(2236962));$.position.set(0,U*.55,-U*.8),G.add($);for(let Z of[-1,1]){let ft=new D(c(.015,.16,.03),$i);ft.position.set(Z*U*.95,-.07,0),G.add(ft)}}else if(o==="beret"){let j=new D(new he(U*1.1,20,10),X(e===0?2771594:9052192));j.scale.set(1,.3,1),j.position.set(U*.15,.04,0),j.rotation.z=-.2,G.add(j);let Y=new D(new Xe(U*.98,.018,6,24),$i);Y.rotation.x=Math.PI/2,G.add(Y);let $=new D(new Wi(.025,12),new te({color:15253568,metalness:1,roughness:.3}));$.position.set(-U*.45,.03,-U*.88),$.rotation.y=Math.PI+.45,G.add($)}else if(o==="cap"){let j=new D(new he(U,20,10,0,Math.PI*2,0,Math.PI*.5),X(2763306));j.scale.y=.7,G.add(j);let Y=new D(new mt(U*.75,U*.75,.015,20,1,!1,Math.PI*.5,Math.PI),X(2763306));Y.position.set(0,0,-U*.55),Y.scale.z=1.3,G.add(Y);let $=new D(new Wi(.03,12),new te({color:15759898}));$.position.set(0,U*.35,-U*.9),$.rotation.x=.4,$.rotation.y=Math.PI,G.add($)}else if(o==="boonie"){let j=new D(new mt(U*.9,U*1.02,.12,20),X(6974020,{map:tt.camoWood.map}));j.position.y=.05,G.add(j);let Y=new D(new mt(U*1.6,U*1.6,.015,24),X(6974020,{map:tt.camoWood.map,side:hn}));G.add(Y)}G.traverse(j=>{j.isMesh&&(j.castShadow=!0)}),this.hat=G}let v={carrot:.12,tomato:.1,potato:.15,pepper:.12}[t]*h,A=Math.max(f.radiusAt(v,0),f.radiusAt(v,Math.PI/2))||.2,P=new D(new Xe(A*1.02,.025,6,32),$i);P.rotation.x=Math.PI/2,P.scale.set(1,1,1.5),P.position.y=v,this.lower.add(P);{let I=new D(c(.06,.045,.012),new te({color:10132106,metalness:.8,roughness:.35}));I.position.set(0,v,-A*1.06),this.lower.add(I)}for(let I of[-.6,.6,2.4]){let U=new D(c(.094,.035,.056),as);U.position.set(Math.sin(I)*A*1.08,v+.045,-Math.cos(I)*A*1.08),U.rotation.y=-I,this.lower.add(U);let G=new D(new mt(.008,.008,.006,8),$i);G.position.set(Math.sin(I)*A*1.12,v+.04,-Math.cos(I)*A*1.12),G.rotation.set(Math.PI/2,-I,0),this.lower.add(G)}for(let I of[-.6,.6,2.4]){let U=new D(c(.09,.1,.05),as);U.position.set(Math.sin(I)*A*1.08,v-.01,-Math.cos(I)*A*1.08),U.rotation.y=-I,this.lower.add(U)}{let I=(v+f.split)/2,U=Math.max(f.radiusAt(I,0),f.radiusAt(I,Math.PI/2),f.radiusAt(I+.1,0))||.2,G=Math.min(f.split-.08,I+.05),X=(f.radiusAt(G,Math.PI/2)||U)*1,j=new D(c(.16,.2,.07),as);j.position.set(-.04,G,X+.03),this.lower.add(j);let Y=new D(new mt(.005,.008,.32,5),$i);Y.position.set(-.09,G+.24,X+.04),Y.rotation.x=.15,this.lower.add(Y);for(let $ of[-1,1]){let Z=new D(c(.03,.22,.012),$i);Z.position.set(-.04+$*.05,G,X+.07),this.lower.add(Z)}}let L={carrot:.4,tomato:.32,potato:.42,pepper:.36}[t]*h,B=Math.max(f.radiusAt(L,0),f.radiusAt(L,Math.PI))||.25;this.arms=[];for(let I of[-1,1]){let U=new Et;U.position.set(I*(B+(l?.02:.01)),L,0),this.spine.add(U);let G=1,X=new D(new he(.05*G,16,12),Je);U.add(X);let j=ql(.3,d?[[0,.072],[.5,.074],[1,.066]]:[[0,.048],[.15,.052],[.45,.058],[.8,.044],[1,.04]],Je);U.add(j);let Y=new Et;Y.position.y=-.29,U.add(Y);let $=ql(.27,d?[[0,.066],[.5,.068],[1,.06]]:[[0,.04],[.2,.05],[.6,.04],[1,.032]],Je);Y.add($);let Z=new D(new he(.048,16,12),Je);Y.add(Z);let ft=new Et;ft.position.y=-.26,Y.add(ft);let kt=Og(I,s);ft.add(kt);let it=new D(new mt(.052*G+.004,.052*G+.004,.05,18),this.bandMat);it.position.y=-.08,U.add(it),this.arms.push({side:I,sh:U,el:Y,wr:ft,up:j,fo:$,hand:kt,ball:X,lost:!1,upLen:.29,foLen:.26})}this.legs=[];let V={carrot:.09,tomato:.14,potato:.12,pepper:.12}[t]*(l?h:1);for(let I of[-1,1]){let U=new Et;U.position.set(I*V,.02,0),this.hips.add(U);let G=ql(.42*u,d?[[0,.1],[.5,.098],[1,.088]]:[[0,.07],[.12,.088],[.45,.08],[.85,.062],[1,.055]],Je);G.position.y=0,U.add(G);let X=new Et;X.position.y=-.4*u,U.add(X);let j=new D(new he(.05,16,12),Je);j.scale.set(1,1.1,.95),X.add(j);{let ft=new D(new he(.058,12,8,0,Math.PI*2,0,Math.PI*.55),as);ft.rotation.x=-Math.PI/2,ft.scale.set(1,1.25,.7),ft.position.set(0,-.01,-.012),X.add(ft);let kt=new D(new mt(.06,.06,.02,12),$i);kt.position.y=-.06,X.add(kt)}let Y=ql(.38*u,d?[[0,.088],[.5,.086],[1,.084]]:[[0,.055],[.08,.06],[.3,.07],[.55,.055],[.9,.04],[1,.042]],Je);Y.position.y=0,X.add(Y);let $=new Et;$.position.y=-.36*u,X.add($);let Z=mb();$.add(Z),this.legs.push({side:I,hp:U,kn:X,an:$,th:G,sh:Y,foot:Z,lost:!1})}this.gun=pa(s>0?1:0,r,i.lo),this.aim=new Et,this.aim.position.set(.04,L+.02,0),this.spine.add(this.aim),this.gunZ=l?-.15-Math.max(0,(f.radiusAt(L,-Math.PI/2)||B)-(f.radiusAt(L,-Math.PI/2)||B)/(h*l.fat))-.02:-.15,this.gun.root.position.set(l?.14:.12,-.04,this.gunZ),this.aim.add(this.gun.root),this.gun.root.scale.setScalar(.95),this.root.traverse(I=>{I.isMesh&&(I.castShadow=!0)});for(let I of this.arms)un(I.hand),un(I.wr),un(I.el,[I.wr]),un(I.sh,[I.el]);for(let I of this.legs)un(I.foot,[],{shadow:!1}),un(I.an),un(I.kn,[I.an]),un(I.hp,[I.kn]);un(this.top,[],{shadow:!1});for(let I of this.eyes)un(I.g,[I.lid],{shadow:!1});un(this.face,this.eyes.map(I=>I.g),{shadow:!1}),this.hat&&un(this.hat),un(this.upper,[this.face,this.top,this.hat]),un(this.lower,[]),this.phase=0,this.pitch=0,this.state="idle",this.crouch=0,this.prone=0,this.run=0,this.speed=0,this.air=0,this.blink=2,this.dead=!1,this.deadT=0,this.headGone=!1,this.boltT=0,this.ads=0,this.recoil=0,this.hitSpheres=[]}ikArm(t,e,i){Zu(t,e,i)}_unused(t,e,i){if(t.lost)return;let s=t.sh,r=s.parent;r.updateWorldMatrix(!0,!1);let o=Gg.copy(r.matrixWorld).invert(),a=Hg.copy(e).applyMatrix4(o).sub(s.position),l=kg.copy(i).applyMatrix4(o).sub(s.position),c=t.upLen,h=t.foLen,u=a.length();u=Math.min(u,c+h-.001),u=Math.max(u,.05);let d=a.clone().normalize(),f=(c*c+u*u-h*h)/(2*c*u),p=Math.acos(Math.max(-1,Math.min(1,f))),g=l.clone().sub(d.clone().multiplyScalar(l.dot(d))).normalize(),m=d.clone().multiplyScalar(Math.cos(p)*c).add(g.multiplyScalar(Math.sin(p)*c));s.quaternion.setFromUnitVectors($u,m.clone().normalize());let x=a.clone().sub(m).applyQuaternion(s.quaternion.clone().invert());t.el.quaternion.setFromUnitVectors($u,x.normalize())}update(t,e){let i=this,s=Math.min(1,i.speed/5.5);i.phase+=t*(i.speed*(i.prone>.5?1.2:2.1));let r=i.phase,l=(i.hipBase-i.crouch*.31*(i.hipBase/.8))*(1-i.prone)+.28*i.prone+Math.abs(Math.sin(r))*.04*s*(1-i.prone);i.hips.position.y=l+(i.air>0?.05:0);let c=-.32*i.run*s-.12*i.crouch;i.hips.rotation.x=-i.prone*Math.PI*.5+0,i.spine.rotation.x=c*(1-i.prone)+i.pitch*.18*(1-i.prone)+i.prone*.3,i.spine.rotation.z=Math.sin(r)*.04*s,i.spine.position.y=0;for(let R of i.legs){if(R.lost)continue;let S=r+(R.side>0?Math.PI:0),b=1-i.crouch*.55,v=Math.sin(S)*(.5+.4*i.run)*s*b,A=Math.max(0,-Math.cos(S))*(.9+.5*i.run)*s*b+.05,P=i.crouch*(1-s*.7);R.side>0?(v+=i.crouch*1.05+P*.3,A+=i.crouch*1.05+P*.3):(v+=i.crouch*(1.1-P*.9),A+=i.crouch*(1.8-P*.05)),i.air>0&&(v=.6*(R.side>0?1:.3),A=1),v=v*(1-i.prone)+Math.sin(S)*.15*s*i.prone,A=A*(1-i.prone)+(.2+Math.max(0,Math.sin(S))*.6*s)*i.prone,R.hp.rotation.x=-v,R.kn.rotation.x=A,R.an.rotation.x=(-A*.4+v*.2)*(1-i.crouch)+i.crouch*(R.side>0?-(A-v):-.9*P)+i.prone*1.2,R.hp.rotation.z=R.side*.04}let h=i.run*s*(1-i.ads);i.aim.rotation.x=i.pitch+i.prone*Math.PI*.5-i.spine.rotation.x-h*.9-i.boltT*.25,i.aim.rotation.y=h*.9,i.aim.rotation.z=h*.4+i.boltT*.3,i.gun.root.position.z=i.gunZ+i.recoil*.06,i.root.updateMatrixWorld(!0);let u=i.gun,d=i.arms[1],f=i.arms[0],p=u.gripPt.getWorldPosition(new F),g=u.forePt.getWorldPosition(new F),m=u.boltPt.getWorldPosition(new F),x=i.spine.localToWorld(new F(.6,-.6,.3)),M=i.spine.localToWorld(new F(-.6,-.6,.1)),w=u.root.getWorldQuaternion(new _n);i.ikArm(d,$l(i.boltT>0?p.clone().lerp(m,Math.min(1,i.boltT*1.5)):p,w,"grip"),x),i.ikArm(f,$l(g,w,"fore"),M),Yl(d,w,"grip"),Yl(f,w,"fore"),i.blink-=t;let E=i.blink<.12;i.blink<0&&(i.blink=2+Math.random()*3);for(let R=0;R<i.eyes.length;R++){let S=i.eyes[R],b=i.ads>.6&&R===0;S.lid.rotation.x=i.dead||E||b?.5:(S.lid.userData.base??-.35)+(i.ads>.6?.25:0)}if(i.dead){i.deadT+=t;let R=Math.min(1,i.deadT/.7);i.root.rotation.x=-i.fallDir*R*R*1.45,i.root.position.y=i.deadBaseY-0,i.hips.position.y=l*(1-R)+.25*R;for(let S of i.legs)S.kn.rotation.x*=1-R}}computeHitSpheres(){let t=this.hitSpheres;t.length=0;let e=this.spine,i=(r,o,a,l=e)=>{let c=l.localToWorld(o.clone());t.push({part:r,c,r:a})},s=this.geo;this.headGone||i("head",new F(0,(s.split+s.top)/2,0),Math.max(.17,(s.top-s.split)*.55)),i("bodyLow",new F(0,(s.bottom+s.split)*.5+.05,0),Math.max(.2,this.splitR*1.05)),i("bodyUp",new F(0,s.split-.12,0),Math.min(this.splitR,.22));for(let r of this.arms)r.lost||(i(r.side<0?"armL":"armR",new F(0,-.14,0),.07,r.sh),i(r.side<0?"armL":"armR",new F(0,-.13,0),.065,r.el));for(let r of this.legs)r.lost||(i(r.side<0?"legL":"legR",new F(0,-.2,0),.09,r.hp),i(r.side<0?"legL":"legR",new F(0,-.18,0),.075,r.kn));return t}};var gb=["shot","shot_far","bolt1","bolt2","mag","boom","tick","beep","splat1","splat2","crunch","hit","ui","cloth","wind","win","lose","whoosh","bgm","step_concrete-001","step_concrete-002","step_grass-001","step_grass-004","step_wood-000","step_wood-001"],gt={ctx:null,buf:{},master:null,listener:{x:0,y:0,z:0,yaw:0},bgmNode:null,windNode:null,async init(n="sfx/"){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination),await Promise.all(gb.map(async i=>{try{let r=await(await fetch(n+i+".mp3")).arrayBuffer();this.buf[i]=await this.ctx.decodeAudioData(r)}catch{}}))},resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},play(n,t={}){let e=this.ctx;if(!e||!this.buf[n])return null;let i=e.createBufferSource();i.buffer=this.buf[n],i.playbackRate.value=(t.rate||1)*(t.vary?1+(Math.random()-.5)*t.vary:1);let s=e.createGain(),r=t.vol??1,o=s;if(t.pos){let a=this.listener,l=t.pos.x-a.x,c=t.pos.z-a.z,h=t.pos.y-a.y,u=Math.hypot(l,h,c),d=t.ref||4;if(r*=Math.min(1,d/Math.max(d,u))**(t.roll||1),t.maxDist&&u>t.maxDist)return null;let f=-Math.sin(a.yaw),g=- -Math.cos(a.yaw),m=f,x=u>.1?(l*g+c*m)/u:0;if(e.createStereoPanner){let M=e.createStereoPanner();M.pan.value=Math.max(-1,Math.min(1,-x*.85)),s.connect(M),o=M}if(u>15){let M=e.createBiquadFilter();M.type="lowpass",M.frequency.value=Math.max(900,9e3-u*120),o.connect(M),o=M}}return s.gain.value=r,i.connect(s),o.connect(this.master),i.loop=!!t.loop,i.start(0,t.offset||0),{src:i,g:s}},bgm(n){if(n&&!this.bgmNode&&(this.bgmNode=this.play("bgm",{vol:.32,loop:!0})),!n&&this.bgmNode){try{this.bgmNode.g.gain.setTargetAtTime(0,this.ctx.currentTime,.4);let t=this.bgmNode;setTimeout(()=>t.src.stop(),1500)}catch{}this.bgmNode=null}},wind(n){if(n&&!this.windNode&&(this.windNode=this.play("wind",{vol:.18,loop:!0})),!n&&this.windNode){try{this.windNode.src.stop()}catch{}this.windNode=null}}};var Zl=class{constructor(t){this.cs=.5,this.x0=re.minX,this.z0=re.minZ,this.w=Math.ceil((re.maxX-re.minX)/this.cs),this.h=Math.ceil((re.maxZ-re.minZ)/this.cs),this.free=new Uint8Array(this.w*this.h);let e=.42,i=t.filter(s=>s.move&&s.max.y>.42&&s.min.y<1.5);for(let s=0;s<this.h;s++)for(let r=0;r<this.w;r++){let o=this.x0+(r+.5)*this.cs,a=this.z0+(s+.5)*this.cs,l=!0;for(let c of i){let h=Math.max(c.min.x-o,0,o-c.max.x),u=Math.max(c.min.z-a,0,a-c.max.z);if(h*h+u*u<e*e){l=!1;break}}this.free[s*this.w+r]=l?1:0}}cell(t,e){return[Math.floor((t-this.x0)/this.cs),Math.floor((e-this.z0)/this.cs)]}isFree(t,e){return t>=0&&e>=0&&t<this.w&&e<this.h&&this.free[e*this.w+t]===1}center(t,e){return[this.x0+(t+.5)*this.cs,this.z0+(e+.5)*this.cs]}nearestFree(t,e){if(this.isFree(t,e))return[t,e];for(let i=1;i<8;i++)for(let s=-i;s<=i;s++)for(let r=-i;r<=i;r++)if(this.isFree(t+r,e+s))return[t+r,e+s];return[t,e]}path(t,e,i,s){let[r,o]=this.nearestFree(...this.cell(t,e)),[a,l]=this.nearestFree(...this.cell(i,s)),c=this.w,h=c*this.h,u=new Float32Array(h).fill(1e9),d=new Int32Array(h).fill(-1),f=new Uint8Array(h),p=[[0,o*c+r]];u[o*c+r]=0;let g=S=>{let b=S%c,v=S/c|0,A=Math.abs(b-a),P=Math.abs(v-l);return Math.max(A,P)+.41*Math.min(A,P)},m=l*c+a,x=0;for(;p.length&&x++<2e4;){let S=0;for(let P=1;P<p.length;P++)p[P][0]<p[S][0]&&(S=P);let[,b]=p[S];if(p[S]=p[p.length-1],p.pop(),f[b])continue;if(f[b]=1,b===m)break;let v=b%c,A=b/c|0;for(let P=-1;P<=1;P++)for(let L=-1;L<=1;L++){if(!L&&!P)continue;let B=v+L,V=A+P;if(!this.isFree(B,V)||L&&P&&(!this.isFree(v+L,A)||!this.isFree(v,A+P)))continue;let I=V*c+B;if(f[I])continue;let U=u[b]+(L&&P?1.414:1);U<u[I]&&(u[I]=U,d[I]=b,p.push([U+g(I),I]))}}if(d[m]===-1&&m!==o*c+r)return null;let M=[],w=m;for(;w!==-1;)M.push(this.center(w%c,w/c|0)),w=d[w];M.reverse();let E=[M[0]],R=0;for(;R<M.length-1;){let S=M.length-1;for(;S>R+1&&!this.lineFree(M[R],M[S]);)S--;E.push(M[S]),R=S}return E}lineFree(t,e){let i=Math.hypot(e[0]-t[0],e[1]-t[1]),s=Math.ceil(i/(this.cs*.5));for(let r=0;r<=s;r++){let o=r/s,[a,l]=this.cell(t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o);if(!this.isFree(a,l))return!1}return!0}randomFreeNear(t,e,i){for(let s=0;s<40;s++){let r=Math.random()*Math.PI*2,o=Math.random()*i,[a,l]=this.cell(t+Math.cos(r)*o,e+Math.sin(r)*o);if(this.isFree(a,l))return this.center(a,l)}return[t,e]}};var ls={snap:{id:"snap",name:"\u30A2\u30B9\u30D1\u30E9\u30E9\u30F3\u30B9",tag:"\u7D30\u8EAB\u3067\u8EFD\u3044\u30DC\u30EB\u30C8\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30D0\u30EA\u30B9\u30BF\u98A8\uFF09",mag:7,extMag:10,reserve:21,extReserve:30,bolt:1.26,ads:.35,reload:3.1,reloadEmpty:3.75,sprintOut:.25,sway:.8,stanceSway:!1,hip:1,adsMove:.44,move:1,dmg:{head:190,bodyUp:143,bodyMid:143,bodyLow:95,arm:143,leg:95},stats:{\u5A01\u529B:3,\u9023\u5C04:4,\u8997\u304D:5,\u5F3E\u6570:4},spec:"\u30B3\u30C3\u30AD\u30F3\u30B01.26\u79D2\u30FB\u8997\u304D0.35\u79D2\u30FB\u30EA\u30ED\u30FC\u30C93.1\u79D2\uFF08\u7A7A3.75\u79D2\uFF09",desc:`\u982D\u301C\u304A\u8179\u306E\u771F\u3093\u4E2D\u3068\u8155\u306A\u3089\u4E00\u6483\u3002
\u8170\u3068\u8DB3\u306F\u4E00\u6483\u306B\u306A\u3089\u306A\u3044\uFF08HP\u304C\u5C11\u3057\u6B8B\u308B\uFF09\u3002
\u8997\u304F\u306E\u3082\u30B3\u30C3\u30AD\u30F3\u30B0\u3082\u901F\u3044\u3002
\u3057\u3083\u304C\u307F\u30FB\u4F0F\u305B\u3067\u3082\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u306F\u6E1B\u3089\u306A\u3044\u3002`},root:{id:"root",name:"\u30B4\u30DC\u30A6\u30D6\u30EC\u30A4\u30AB\u30FC",tag:"\u9283\u8EAB\u304C\u9577\u3044\u4E00\u6483\u91CD\u8996\u306E\u30B9\u30CA\u30A4\u30D1\u30FC\uFF08DSR\u98A8\uFF09",mag:5,extMag:7,reserve:25,extReserve:35,bolt:1.5,ads:.4,reload:3.4,reloadEmpty:4.5,sprintOut:.3,sway:1.35,stanceSway:!0,hip:1.35,adsMove:.4,move:.99,dmg:{head:196,bodyUp:147,bodyMid:147,bodyLow:147,arm:147,leg:98},stats:{\u5A01\u529B:5,\u9023\u5C04:2,\u8997\u304D:3,\u5F3E\u6570:2},spec:"\u30B3\u30C3\u30AD\u30F3\u30B01.5\u79D2\u30FB\u8997\u304D0.4\u79D2\u30FB\u30EA\u30ED\u30FC\u30C93.4\u79D2\uFF08\u7A7A4.5\u79D2\uFF09",desc:`\u8DB3\u4EE5\u5916\u306A\u3089\u3069\u3053\u3067\u3082\u4E00\u6483\u3002
\u8DB3\u3060\u306898\u30C0\u30E1\u30FC\u30B8\u3067\u30AE\u30EA\u30AE\u30EA\u6B8B\u308B\u3002
\u8997\u304F\u30FB\u30B3\u30C3\u30AD\u30F3\u30B0\u30FB\u30EA\u30ED\u30FC\u30C9\u304C\u9045\u304F\u3001\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u3068\u8170\u6483\u3061\u306E\u3070\u3089\u3064\u304D\u304C\u5927\u304D\u3044\u3002`}},Jl=[{id:"fmj",name:"\u8CAB\u901A\u5F3E\uFF08FMJ\uFF09",desc:"\u5A01\u529B\u306F\u4E0A\u304C\u3089\u306A\u3044\u3002\u58C1\u3084\u677F\u3092\u6483\u3061\u629C\u3051\u3066\u3001\u58C1\u8D8A\u3057\u3067\u3082\u5A01\u529B\u304C\u307B\u3068\u3093\u3069\u843D\u3061\u306A\u3044"},{id:"stab",name:"\u624B\u30D6\u30EC\u88DC\u6B63\uFF08\u5F3E\u9053CPU\u98A8\uFF09",desc:"\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u304C30%\u5C0F\u3055\u304F\u306A\u308B"},{id:"laser",name:"\u30EC\u30FC\u30B6\u30FC\u30B5\u30A4\u30C8",desc:"\u8170\u6483\u3061\u306E\u3070\u3089\u3064\u304D\u304C\u5C0F\u3055\u304F\u306A\u308B\uFF08\u8997\u304D\u306A\u304C\u3089\u3059\u3050\u6483\u3064\u30AF\u30A4\u30C3\u30AF\u30B9\u30B3\u30FC\u30D7\u304C\u5F53\u305F\u308A\u3084\u3059\u3044\uFF09"},{id:"fast",name:"\u30AF\u30A4\u30C3\u30AF\u30DE\u30B0",desc:"\u30EA\u30ED\u30FC\u30C9\u304C\u7D0435%\u901F\u304F\u306A\u308B",ex:"ext"},{id:"ext",name:"\u62E1\u5F35\u30DE\u30AC\u30B8\u30F3",desc:"\u5F3E\u304C\u5897\u3048\u308B\uFF08\u30A2\u30B9\u30D1\u30E9\u30E9\u30F3\u30B97\u219210\u767A\u30FB\u30B4\u30DC\u30A6\u30D6\u30EC\u30A4\u30AB\u30FC5\u21927\u767A\uFF09\u3002\u30EA\u30ED\u30FC\u30C9\u306F10%\u9045\u304F\u306A\u308B",ex:"fast"}],Kl=[[{id:"none",name:"\u306A\u3057",desc:""},{id:"light",name:"\u8EAB\u8EFD",desc:"\u79FB\u52D5\u304C7%\u901F\u304F\u306A\u308B"}],[{id:"none",name:"\u306A\u3057",desc:""},{id:"tough",name:"\u6839\u6027",desc:"\u6483\u305F\u308C\u305F\u6642\u306E\u8996\u70B9\u306E\u30D6\u30EC\u304C\u5C0F\u3055\u3044"},{id:"hands",name:"\u65E9\u696D",desc:"\u6295\u3052\u7269\u3092\u7D20\u65E9\u304F\u6295\u3052\u3089\u308C\u308B"}],[{id:"none",name:"\u306A\u3057",desc:""},{id:"dex",name:"\u8EAB\u306E\u3053\u306A\u3057",desc:"\u30C0\u30C3\u30B7\u30E5\u306E\u5F8C\u3059\u3050\u8997\u3051\u308B"},{id:"cond",name:"\u6301\u4E45\u529B",desc:"\u30C0\u30C3\u30B7\u30E5\u304C2\u500D\u9577\u304F\u7D9A\u304F"},{id:"quiet",name:"\u5FCD\u3073\u8DB3",desc:"\u8DB3\u97F3\u304C\u304B\u306A\u308A\u5C0F\u3055\u304F\u306A\u308B"}]],Vg=[{id:"none",name:"\u306A\u3057",desc:""},{id:"smoke",name:"\u3044\u3076\u308A\u304C\u3063\u3053",desc:"\u71FB\u3057\u305F\u5927\u6839\u306E\u7159\u306712\u79D2\u9593\u3001\u8996\u7DDA\u3092\u3055\u3048\u304E\u308B"},{id:"flash",name:"\u30D5\u30E9\u30C3\u30B7\u30E5\u30AA\u30CB\u30AA\u30F3",desc:"\u7389\u306D\u304E\u3067\u76EE\u306B\u3057\u307F\u308B\u3002\u8FD1\u304F\u3067\u898B\u305F\u76F8\u624B\u3092\u6700\u59273\u79D2\u3001\u76EE\u304F\u3089\u307E\u3057\u306B\u3059\u308B"}],Wg=[{id:"none",name:"\u306A\u3057",desc:""},{id:"axe",name:"\u30C8\u30DE\u30C8\u30DB\u30FC\u30AF",desc:"\u30C8\u30DE\u30C8\u306E\u6295\u3052\u65A7\u3002\u5C71\u306A\u308A\u306B\u98DB\u3076\u3002\u5F53\u305F\u308C\u3070\u3069\u3053\u3067\u3082\u4E00\u6483"}],a0={rifle:"snap",att:["stab","laser"],perks:["light","tough","dex"],tac:"smoke",let:"axe"};function Xg(n){let t=ls[n.rifle]||ls.snap,e=s=>n.att.includes(s),i=(s,r)=>n.perks[s]===r;return{rifle:t.id,name:t.name,mag:e("ext")?t.extMag:t.mag,reserve:e("ext")?t.extReserve:t.reserve,bolt:t.bolt,ads:t.ads,reload:t.reload*(e("fast")?.65:e("ext")?1.1:1),reloadEmpty:t.reloadEmpty*(e("fast")?.65:e("ext")?1.1:1),sway:t.sway*(e("stab")?.7:1),stanceSway:t.stanceSway,hipSpread:t.hip*(e("laser")?.55:1),fmj:e("fmj"),dmg:t.dmg,adsMove:t.adsMove,move:t.move*(i(0,"light")?1.07:1),flinch:i(1,"tough")?.3:1,sprintOut:t.sprintOut*(i(2,"dex")?.4:1),stamina:i(2,"cond")?8:4,quiet:i(2,"quiet")?.35:1,throwT:i(1,"hands")?.15:.45,tac:n.tac||"none",let:n.let||"none"}}function l0(){let n=Math.random()<.55?"snap":"root",t=["fmj","stab","laser",Math.random()<.5?"fast":"ext"];return t.sort(()=>Math.random()-.5),{rifle:n,att:t.slice(0,2),perks:["light",Math.random()<.5?"tough":"hands",Math.random()<.5?"dex":"cond"],tac:Math.random()<.55?"smoke":"flash",let:"axe"}}var cs=[{id:"rookie",name:"\u30EB\u30FC\u30AD\u30FC",min:0,step:250,divs:4,fee:0,col:"#9a8a78",col2:"#5a4e42",diff:0},{id:"bronze",name:"\u30D6\u30ED\u30F3\u30BA",min:1e3,step:500,divs:4,fee:10,col:"#c07a4a",col2:"#6a3a1a",diff:0},{id:"silver",name:"\u30B7\u30EB\u30D0\u30FC",min:3e3,step:750,divs:4,fee:20,col:"#c8ccd4",col2:"#6a7080",diff:1},{id:"gold",name:"\u30B4\u30FC\u30EB\u30C9",min:6e3,step:1e3,divs:4,fee:30,col:"#f0c040",col2:"#8a6a10",diff:1},{id:"plat",name:"\u30D7\u30E9\u30C1\u30CA",min:1e4,step:1250,divs:4,fee:40,col:"#5ad0d0",col2:"#1a6a7a",diff:1},{id:"diamond",name:"\u30C0\u30A4\u30E4",min:15e3,step:1250,divs:4,fee:50,col:"#6aa0ff",col2:"#2a3aa0",diff:2},{id:"master",name:"\u30DE\u30B9\u30BF\u30FC",min:2e4,step:0,divs:1,fee:60,col:"#c070ff",col2:"#5a1a9a",diff:2},{id:"king",name:"\u30D9\u30B8\u30AD\u30F3\u30B0",min:3e4,step:0,divs:1,fee:75,col:"#ff4a3a",col2:"#7a0a0a",diff:2}],Yg=["IV","III","II","I"];function qg(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function c0(n){let[t,e]=n.split("-");return`\u30B7\u30FC\u30BA\u30F3 ${t}\u5E74${+e}\u6708`}function Ss(n){let t=cs[0];for(let a of cs)n>=a.min&&(t=a);let e=cs.indexOf(t),i=cs[e+1],s=1,r=t.min,o=i?i.min:t.min+1e4;if(t.divs>1){let a=Math.min(t.divs-1,Math.floor((n-t.min)/t.step));s=a,r=t.min+a*t.step,o=r+t.step}return{tier:t,index:e,div:s,label:t.divs>1?`${t.name} ${Yg[s]}`:t.name,lo:r,hi:o,progress:Math.max(0,Math.min(1,(n-r)/(o-r)))}}function Ju(){let n;try{n=JSON.parse(localStorage.getItem("vw_rank")||"null")}catch{n=null}n||(n={rp:0,season:qg(),best:0,badges:[],games:0,wins:0,kills:0,history:[]});let t=qg();if(n.season!==t){n.games>0&&n.badges.push({season:n.season,tier:Ss(n.best).tier.id});let e=Ss(n.rp).index;n.rp=e<=1?0:cs[Math.max(0,e-2)].min,Object.assign(n,{season:t,best:n.rp,games:0,wins:0,kills:0,history:[]}),h0(n)}return n}function h0(n){try{localStorage.setItem("vw_rank",JSON.stringify(n))}catch{}}function $g(n,t){let e=Ss(n.rp).tier,i=[];i.push(["\u53C2\u52A0\u8CBB",-e.fee]),t.win&&i.push(["\u8A66\u5408\u306B\u52DD\u5229",100]),i.push([`\u53D6\u3063\u305F\u30E9\u30A6\u30F3\u30C9 \xD7${t.rounds}`,t.rounds*10]),i.push([`\u30AD\u30EB \xD7${t.kills}`,t.kills*12]),t.hs&&i.push([`\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8 \xD7${t.hs}`,t.hs*4]),t.mvp&&i.push(["MVP",20]);let s=i.reduce((a,l)=>a+l[1],0),r=e.min,o=Math.max(r,n.rp+s);return s=o-n.rp,{items:i,total:s,before:n.rp,after:o}}function xa(n,t=64,e=null){let i=cs.find(h=>h.id===n)||cs[0],s=cs.indexOf(i),r=Math.min(4,Math.floor(s/2)+1),o=s>=6?`<path d="M10 40 L2 30 L12 32 L4 20 L16 26 Z" fill="${i.col}" opacity=".9"/><path d="M90 40 L98 30 L88 32 L96 20 L84 26 Z" fill="${i.col}" opacity=".9"/>`:"",a=s===7?'<path d="M34 14 L40 4 L46 12 L50 2 L54 12 L60 4 L66 14 Z" fill="#ffd040" stroke="#7a4a00" stroke-width="1.5"/>':"",l="";for(let h=0;h<r;h++){let u=(h-(r-1)/2)*28;l+=`<path transform="rotate(${u} 50 56)" d="M50 56 C40 44 44 30 50 24 C56 30 60 44 50 56 Z" fill="#fff" opacity=".92"/>`}let c=e!==null&&i.divs>1?`<text x="50" y="86" text-anchor="middle" font-size="15" font-weight="900" fill="#fff" stroke="#000" stroke-width=".6">${Yg[e]}</text>`:"";return`<svg width="${t}" height="${t}" viewBox="0 0 100 100"><defs><linearGradient id="g${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${i.col}"/><stop offset="1" stop-color="${i.col2}"/></linearGradient></defs>${o}<path d="M50 8 L86 20 L82 62 Q76 84 50 94 Q24 84 18 62 L14 20 Z" fill="url(#g${n})" stroke="#111" stroke-width="3"/><path d="M50 16 L78 25 L75 60 Q70 77 50 85 Q30 77 25 60 L22 25 Z" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="2"/>${l}<circle cx="50" cy="58" r="4" fill="${i.col2}"/>${a}${c}</svg>`}var H=n=>document.getElementById(n),pt=F,In=(n,t,e)=>Math.max(t,Math.min(e,n)),sc=(n,t,e)=>n+(t-n)*e,Cs=(n,t,e,i)=>sc(n,t,1-Math.exp(-e*i)),i1=(n,t)=>{let e=t-n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Ai=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;window.__vwQuality=1;var ut=Object.assign({sens:1,sensAds:.55,fireMode:"release",quality:1,diff:1,bgm:1,kind:"carrot",tpp:0,hat:"helmet",camo:"olive",leftFire:0,winR:8,swap:4,killcam:1,map:"market",lo:a0},(()=>{try{return JSON.parse(localStorage.getItem("vw_cfg")||"{}")}catch{return{}}})());window.__vwQuality=ut.quality;var _i=()=>{try{localStorage.setItem("vw_cfg",JSON.stringify(ut))}catch{}},Pe=new Cl({antialias:ut.quality>0,powerPreference:"high-performance"});Pe.outputColorSpace=Mn;Pe.toneMapping=qs;Pe.toneMappingExposure=1.05;Pe.shadowMap.enabled=!0;Pe.shadowMap.type=ut.quality>0?fl:yr;Pe.autoClear=!1;H("game").appendChild(Pe.domElement);var Ks=Math.min(devicePixelRatio,ut.quality===2?2:ut.quality===1?Ai?1.5:1.75:1);Pe.setPixelRatio(Ks);cg(Math.min(8,Pe.capabilities.getMaxAnisotropy()));var Wt=new Vs,xe=new kn(72,1,.05,400);xe.rotation.order="YXZ";var er=new Vs,Ps=new kn(46,1,.01,10),ki=0,id=0,s1="",ac=()=>ki?innerHeight:innerWidth,lc=()=>ki?innerWidth:innerHeight;function u0(n){let t=n.clientX,e=n.clientY;return ki===90?{x:e,y:innerWidth-t}:ki===-90?{x:innerHeight-e,y:t}:{x:t,y:e}}function xb(){ki=Ai&&innerHeight>innerWidth*1.05?id<-45?-90:id>45?90:ki||90:0;let t=document.body.style;ki?(t.position="fixed",t.left="0",t.top="0",t.width=innerHeight+"px",t.height=innerWidth+"px",t.transformOrigin="0 0",t.transform=ki===90?`translate(${innerWidth}px,0) rotate(90deg)`:`translate(0,${innerHeight}px) rotate(-90deg)`):t.position=t.left=t.top=t.width=t.height=t.transform=t.transformOrigin="";let e=document.documentElement.style;e.setProperty("--vw",ac()/100+"px"),e.setProperty("--vh",lc()/100+"px")}function ho(){xb();let n=ac(),t=lc();s1=innerWidth+"x"+innerHeight+":"+ki,Pe.setSize(n,t),typeof Mi<"u"&&Mi.comp&&Mi.comp.setSize(n,t),xe.aspect=Ps.aspect=n/t,xe.updateProjectionMatrix(),Ps.updateProjectionMatrix()}var A0=()=>{ho();for(let n of[120,350,800])setTimeout(ho,n)};addEventListener("resize",A0);addEventListener("orientationchange",A0);window.visualViewport&&visualViewport.addEventListener("resize",A0);ho();function yb(n){n.gamma==null||Math.abs(n.gamma)<45||(id=n.gamma,ki&&Math.sign(id)!==Math.sign(ki)&&ho())}addEventListener("deviceorientation",yb);addEventListener("touchend",function n(){removeEventListener("touchend",n);try{ki&&window.DeviceOrientationEvent&&DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission().catch(()=>{})}catch{}},{once:!0});function Mb(){let n=new he(300,32,16),t=new cn({side:En,depthWrite:!1,fog:!1,uniforms:{sun:{value:new pt(.4,.55,.35).normalize()},top:{value:new qt(.22,.48,.86)},hor:{value:new qt(.72,.84,.95)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 sun; uniform vec3 top; uniform vec3 hor;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
      float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=n(p)*a;p*=2.03;a*=.5;}return s;}
      void main(){ float y=max(vP.y,0.); vec3 gnd=vec3(.55,.62,.55);
        vec3 c = mix(hor, top, pow(y, .55)); if(vP.y<0.) c = mix(hor, gnd, min(1.,-vP.y*4.));
        float sd = max(dot(vP, sun), 0.); c += vec3(1.,.9,.7)*pow(sd, 300.)*3. + vec3(1.,.85,.6)*pow(sd,8.)*.25;
        if(vP.y>0.02){ vec2 uv = vP.xz/(vP.y+.15)*1.6; float cl = smoothstep(.5,.85, fb(uv*1.2)); c = mix(c, vec3(1.)*(.85+.15*sd), cl*.75*smoothstep(.02,.2,vP.y)); }
        gl_FragColor = vec4(c,1.); }`}),e=new D(n,t);return e.renderOrder=-1,e}var yi=Mb();Wt.add(yi);Wt.fog=new Xa(12112100,60,210);var Yn=new Qr(13624575,5925440,.85);Wt.add(Yn);var xn=new xr(16773336,2.6);xn.position.set(30,42,26);Wt.add(xn);Wt.add(xn.target);xn.castShadow=!0;var Zg=ut.quality===2?4096:ut.quality===1?2048:1024;xn.shadow.mapSize.set(Zg,Zg);Object.assign(xn.shadow.camera,{left:-44,right:44,top:40,bottom:-40,near:5,far:120});xn.shadow.bias=-4e-4;xn.shadow.normalBias=.03;xn.shadow.camera.layers.enable(1);var vi=new tn(16760944,0,8,2);Wt.add(vi);var Jg={town:{top:[.22,.48,.86],hor:[.72,.84,.95],fog:12112100,sun:16773336,si:2.6,sp:[30,42,26],hemi:.85},market:{top:[.3,.55,.88],hor:[.95,.88,.78],fog:15260872,sun:16769720,si:2.4,sp:[-34,30,22],hemi:.9},station:{top:[.42,.55,.7],hor:[.8,.84,.86],fog:13159632,sun:16052458,si:2,sp:[18,46,-20],hemi:1.05},villa:{top:[.18,.46,.9],hor:[.8,.9,.98],fog:13163754,sun:16774368,si:2.8,sp:[-20,50,30],hemi:.9},ship:{top:[.14,.4,.86],hor:[.78,.9,1],fog:12376302,sun:16774888,si:2.9,sp:[26,48,18],hemi:.95},border:{top:[.38,.52,.74],hor:[.96,.86,.7],fog:14863524,sun:16769200,si:2.6,sp:[-30,40,-22],hemi:.85},slums:{top:[.34,.44,.68],hor:[.98,.78,.58],fog:14202008,sun:16764056,si:2.4,sp:[36,28,16],hemi:.82},port:{top:[.3,.36,.62],hor:[1,.68,.42],fog:14723192,sun:16756848,si:2.3,sp:[44,18,-10],hemi:.75}};function C0(n){let t=Jg[n]||Jg.town;yi.material.uniforms.top.value.setRGB(...t.top),yi.material.uniforms.hor.value.setRGB(...t.hor),Wt.fog.color.setHex(t.fog),xn.color.setHex(t.sun),xn.intensity=t.si,xn.position.set(...t.sp),Yn.intensity=t.hemi,yi.material.uniforms.sun.value.set(...t.sp).normalize(),P0.color.setHex(t.sun)}er.add(new Qr(13624575,5925440,1));var P0=new xr(16773336,2);P0.position.set(1,2,1);er.add(P0);var sd=new tn(16760944,0,3,2);sd.position.set(.1,-.05,-.9);er.add(sd);var Ql=(n,t)=>{H("ldBar").style.width=n*100+"%",t&&(H("ldTxt").textContent=t)},rd,tr,I0;async function vb(){Ql(.05,"\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u4F5C\u6210\u4E2D\u2026"),await new Promise(i=>setTimeout(i,30)),hg(ut.quality),Fi[ut.map]||(ut.map="market"),Ql(.45,`\u30DE\u30C3\u30D7\u300C${Fi[ut.map].name}\u300D\u3092\u5EFA\u8A2D\u4E2D\u2026`),await new Promise(i=>setTimeout(i,30));let t=new na(Pe).fromScene(new gu,.04).texture;Wt.environment=t,Wt.environmentIntensity=.45,er.environment=t,er.environmentIntensity=.6;let e=new Set(Wt.children);rd=jf(Wt,ut.map),tr=rd.colliders,C0(ut.map),nd=Wt.children.filter(i=>!e.has(i)),L0=tr.filter(i=>i.bullet),Ql(.75,"CPU\u306E\u9053\u3092\u8A08\u7B97\u4E2D\u2026"),await new Promise(i=>setTimeout(i,30)),I0=new Zl(tr),Ql(.85,"\u52B9\u679C\u97F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026"),Sb(),iE(),Pe.compile(Wt,xe),Ql(1,""),H("loading").classList.add("hide"),dc()}var L0=[],_b=.3;function bb(n){return n.stance==="prone"?.55:n.stance==="crouch"?1.2:1.72}function hs(n,t,e,i=.22){let s=0;for(let r of tr)r.move&&(n+i<r.min.x||n-i>r.max.x||t+i<r.min.z||t-i>r.max.z||r.max.y<=e+.46&&r.max.y>s&&(s=r.max.y));return s}function Eb(n,t,e){for(let i=0;i<2;i++)for(let s of tr){if(!s.move||s.max.y<=n.y+.46||s.min.y>=n.y+t)continue;let r=In(n.x,s.min.x,s.max.x),o=In(n.z,s.min.z,s.max.z),a=n.x-r,l=n.z-o,c=a*a+l*l;if(!(c>=e*e))if(c>1e-8){let h=Math.sqrt(c);n.x+=a/h*(e-h),n.z+=l/h*(e-h)}else{let h=[n.x-s.min.x,s.max.x-n.x,n.z-s.min.z,s.max.z-n.z],u=h.indexOf(Math.min(...h));u===0?n.x=s.min.x-e:u===1?n.x=s.max.x+e:u===2?n.z=s.min.z-e:n.z=s.max.z+e}}}function uo(n,t,e){let i=null;for(let s of L0){let r=dg(n,t,s,i?i.t:e);r&&r.t>1e-4&&(!i||r.t<i.t)&&(i={t:r.t,c:s,axis:r.axis,sign:r.sign})}return i}function r1(n,t){let e=new pt().subVectors(t,n),i=e.length();return e.divideScalar(i),!uo(n,e,i)}function D0(n,t,e,i){let s=n.x-e.x,r=n.y-e.y,o=n.z-e.z,a=s*t.x+r*t.y+o*t.z,l=s*s+r*r+o*o-i*i,c=a*a-l;if(c<0)return-1;let h=-a-Math.sqrt(c);return h>0?h:-1}var $n={parts:[],decals:[],tracers:[],debris:[],glints:[]},xo,nr,od,_0,o1,wb=new Li(1,0);function jl(n,t=128,e){let i=document.createElement("canvas");i.width=i.height=t;let s=i.getContext("2d");if(e)e(s,t);else{let o=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);n.forEach(([a,l])=>o.addColorStop(a,l)),s.fillStyle=o,s.fillRect(0,0,t,t)}let r=new es(i);return r.colorSpace=Mn,r}function Sb(){xo=jl(null,128,(n,t)=>{n.translate(t/2,t/2);for(let i=0;i<7;i++){n.rotate(Math.PI*2/7+Math.random()*.2);let s=n.createLinearGradient(0,0,t/2,0);s.addColorStop(0,"rgba(255,250,220,1)"),s.addColorStop(.4,"rgba(255,190,80,.8)"),s.addColorStop(1,"rgba(255,120,20,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(0,-6),n.lineTo(t/2*(.6+Math.random()*.4),0),n.lineTo(0,6),n.fill()}let e=n.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,240,1)"),e.addColorStop(1,"rgba(255,200,100,0)"),n.fillStyle=e,n.fillRect(-30,-30,60,60)}),nr=jl([[0,"rgba(220,220,220,.55)"],[.5,"rgba(200,200,200,.25)"],[1,"rgba(200,200,200,0)"]]),od=jl(null,128,(n,t)=>{n.fillStyle="#fff",n.beginPath(),n.arc(64,64,26,0,7),n.fill();for(let e=0;e<16;e++){let i=Math.random()*7,s=20+Math.random()*38,r=3+Math.random()*9;n.beginPath(),n.arc(64+Math.cos(i)*s,64+Math.sin(i)*s,r,0,7),n.fill(),n.lineWidth=r*.8,n.strokeStyle="#fff",n.beginPath(),n.moveTo(64,64),n.lineTo(64+Math.cos(i)*s,64+Math.sin(i)*s),n.stroke()}}),_0=jl([[0,"rgba(10,8,6,1)"],[.25,"rgba(20,16,12,.95)"],[.4,"rgba(60,50,40,.5)"],[1,"rgba(60,50,40,0)"]],64),o1=jl(null,128,(n,t)=>{let e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(200,230,255,.9)"),e.addColorStop(1,"rgba(150,200,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128),n.fillStyle="rgba(255,255,255,.9)",n.fillRect(0,62,128,4),n.fillRect(62,0,4,128)})}function Ri(n,t,e,i,s={}){let r=new qr({map:n,transparent:!0,depthWrite:!1,blending:s.add?Xs:vr,color:s.color||16777215,opacity:s.opacity??1,fog:!0}),o=new Vo(r);return o.position.copy(t),o.scale.setScalar(e),r.rotation=Math.random()*6.28,(s.scene||Wt).add(o),$n.parts.push({o,life:i,max:i,vel:s.vel||new pt,grow:s.grow||0,sprite:!0,g:s.g||0,scene:s.scene||Wt,fade:!0}),o}var d0={};function Tb(n){return d0[n]||(d0[n]=new te({color:n,roughness:.4})),d0[n]}function Is(n,t,e,i,s=.03,r=.8,o){for(let a=0;a<e;a++){let l=new D(wb,Tb(t));l.position.copy(n),l.scale.setScalar(s*(.5+Math.random()));let c=new pt(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(i*(.4+Math.random()));o&&c.addScaledVector(o,i*.6),Wt.add(l),$n.parts.push({o:l,life:r*(.6+Math.random()*.6),max:r,vel:c,g:9.8,spin:new pt(Math.random(),Math.random(),Math.random()).multiplyScalar(10),bounce:!0})}}function rc(n,t,e,i,s=16777215,r=1){let o=new D(new be(i,i),new Wn({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,color:s,opacity:r,fog:!0}));if(o.position.copy(t).addScaledVector(e,.01),o.lookAt(t.clone().add(e)),o.rotateZ(Math.random()*6.28),Wt.add(o),$n.decals.push(o),$n.decals.length>60){let a=$n.decals.shift();Wt.remove(a),a.geometry.dispose(),a.material.dispose()}}var N0=new mt(.012,.012,1,6,1,!0);N0.rotateX(Math.PI/2);N0.translate(0,0,.5);function a1(n,t){let e=new D(N0,new Wn({color:16769184,transparent:!0,opacity:.8,blending:Xs,depthWrite:!1}));e.position.copy(n),e.lookAt(t),e.scale.set(1,1,n.distanceTo(t)),Wt.add(e),$n.parts.push({o:e,life:.12,max:.12,vel:new pt,fadeMat:!0})}function Rb(n){for(let t=$n.parts.length-1;t>=0;t--){let e=$n.parts[t];if(e.life-=n,e.life<=0){(e.scene||Wt).remove(e.o),(e.sprite||e.fadeMat)&&e.o.material.dispose(),$n.parts.splice(t,1);continue}e.g&&(e.vel.y-=e.g*n),e.o.position.addScaledVector(e.vel,n),e.bounce&&e.o.position.y<hs(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01&&(e.o.position.y=hs(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01,e.vel.multiplyScalar(.4),e.vel.y=Math.abs(e.vel.y)*.3),e.spin&&(e.o.rotation.x+=e.spin.x*n,e.o.rotation.y+=e.spin.y*n),e.grow&&e.o.scale.multiplyScalar(1+e.grow*n);let i=e.life/e.max;(e.sprite||e.fadeMat)&&(e.o.material.opacity=(e.fade||e.fadeMat?i:1)*(e.o.material.userData.op??1))}for(let t of $n.debris){if(t.rest)continue;t.vel.y-=9.8*n,t.o.position.addScaledVector(t.vel,n),t.o.rotation.x+=t.av.x*n,t.o.rotation.y+=t.av.y*n,t.o.rotation.z+=t.av.z*n;let e=hs(t.o.position.x,t.o.position.z,t.o.position.y+.2,.02)+(t.r||.03);t.o.position.y<e&&(t.o.position.y=e,Math.abs(t.vel.y)<.8?(t.vel.set(0,0,0),t.av.multiplyScalar(0),t.rest=!0):(t.vel.y=-t.vel.y*.35,t.vel.x*=.6,t.vel.z*=.6,t.av.multiplyScalar(.6),t.splat&&!t.splatted&&(t.splatted=!0,rc(od,new pt(t.o.position.x,e-(t.r||.03)+.01,t.o.position.z),new pt(0,1,0),.4+Math.random()*.4,t.splat,.85)),t.snd&&gt.play(t.snd,{pos:t.o.position,vol:.4,vary:.3,ref:3})))}}function U0(){for(let n of $n.debris)n.o.parent&&n.o.parent.remove(n.o);$n.debris.length=0;for(let n of $n.decals)Wt.remove(n),n.geometry.dispose(),n.material.dispose();$n.decals.length=0}function Ea(n,t,e,i={}){if($n.debris.push({o:n,vel:t,av:e,r:i.r,splat:i.splat,snd:i.snd}),$n.debris.length>160){let s=$n.debris.shift();s.o.parent&&s.o.parent.remove(s.o)}}var Ls={carrot:15759898,tomato:13113358,potato:15259808,pepper:6991930},pe=[],xt=null,si={carrot:"\u306B\u3093\u3058\u3093",tomato:"\u30C8\u30DE\u30C8",potato:"\u3058\u3083\u304C\u3044\u3082",pepper:"\u30D4\u30FC\u30DE\u30F3"},js=class{constructor(t,e,i,s,r={}){this.kind=t,this.team=e,this.isPlayer=i,this.name=s,this.pos=new pt,this.vel=new pt,this.yaw=0,this.pitch=0,this.alive=!0,this.hp=100,this.stance="stand",this.sprint=!1,this.ads=0,this.adsWant=!1,this.mag=5,this.reserve=20,this.boltT=0,this.reloadT=0,this.needBolt=!1,this.onGround=!0,this.slideT=0,this.slideDir=new pt,this.diveT=0,this.diveDir=new pt,this.moveAmt=0,this.stepAcc=0,this.lastShotT=-9,this.kills=0,this.hs=0,this.shots=0,this.hits=0,this.lostArm=[!1,!1],this.lostLeg=[!1,!1],this.revealT=0,this.spotT=0,this.hat=r.hat||(i?ut.hat:Ir[1+Math.floor(Math.random()*(Ir.length-1))].id),this.camo=r.camo||(i?ut.camo:fa[Math.floor(Math.random()*4)].id),this.deaths=0,this.score=0,this.lo=r.lo||(i?ut.lo:l0()),this.st=Xg(this.lo),this.mag=this.st.mag,this.reserve=this.st.reserve,this.eyeH=1.58,this.stanceT=0,this.stamina=this.st.stamina,this.sprintOutT=0,this.flinch=0,this.veg=new Pr(t,e,{lod:1,hat:this.hat,camo:this.camo,lo:this.lo}),Wt.add(this.veg.root),i&&this.setFirstPerson(!ut.tpp)}setFirstPerson(t){this.veg.root.traverse(e=>{e.layers.set(t?1:0)})}eye(){return new pt(this.pos.x,this.pos.y+this.eyeH,this.pos.z)}targetEye(){return(this.stance==="prone"?.42:this.stance==="crouch"?1.12:1.58)-(this.slideT>0?.45:0)}dir(){return new pt(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}dispose(){Wt.remove(this.veg.root)}};function F0(n){return n.alive&&n.stanceT<=0&&n.boltT<=0&&n.reloadT<=0&&n.mag>0&&!(n.lostArm[0]&&n.lostArm[1])&&k.phase!=="pre"&&k.phase!=="post"}function B0(n,t){if(!F0(n)){n.mag<=0&&n.reloadT<=0&&fo(n);return}n.mag--,n.shots++,n.lastShotT=k.time,n.revealT=2.5;let e=n.ads>.95?6e-4:sc(.09*n.st.hipSpread,.006,Math.pow(n.ads,2));e+=Math.min(1,n.vel.length()/5)*(n.ads>.9?.012:.03)+(n.onGround?0:.05)+(n.lostArm[0]||n.lostArm[1]?.03:0),n.stance==="prone"&&n.ads>.9&&(e*=.5);let i=t.clone();e>0&&(i.x+=(Math.random()-.5)*e*2,i.y+=(Math.random()-.5)*e*2,i.z+=(Math.random()-.5)*e*2,i.normalize());let s=n.eye(),r=Cb(s,i,n),o=n.isPlayer&&!ut.tpp&&n.ads<.9?Zt.gun.muzzlePt.getWorldPosition(new pt):n.veg.gun.muzzlePt.getWorldPosition(new pt),a=o;if(n.isPlayer&&!ut.tpp&&(a=s.clone().addScaledVector(i,.9).add(new pt(0,-.12,0))),a1(a,r.point),n.isPlayer&&!ut.tpp||(Ri(xo,o,.7,.06,{add:!0}),vi.position.copy(o),vi.intensity=30,setTimeout(()=>vi.intensity=0,50)),Ri(nr,n.isPlayer&&!ut.tpp?a:o,.4,1.2,{grow:1.5,vel:new pt(0,.4,0),opacity:.6}),n.isPlayer)gt.play("shot",{vol:1,vary:.06}),sE();else{let l=n.pos.distanceTo(xt.pos);gt.play(l>25?"shot_far":"shot",{pos:n.eye(),vol:1,ref:6,roll:.8,vary:.05})}for(let l of pe)!l.isPlayer&&l.alive&&l.team!==n.team&&l.pos.distanceTo(n.pos)<70&&l.ai&&(l.ai.heard={pos:n.pos.clone(),t:4});return n.needBolt=!0,n.boltT=n.st.bolt,n.boltPlayed=0,n.isPlayer&&n.ads>.5&&(n.kickedOut=!0),W.on&&go(n)&&(oi({t:"sh",i:n.nid,p:ic(r.point)}),r.hit&&oi({t:"hit",i:r.hit.f.nid,b:n.nid,pa:r.hit.part,d:ic(i),pt:ic(r.point),pe:r.pen||0})),r}function Ab(n){let t=n.max.x-n.min.x,e=n.max.y-n.min.y,i=n.max.z-n.min.z;return Math.min(t,e,i)<=.45}function Cb(n,t,e){let i=uo(n,t,200),s=0;if(i&&e&&e.st&&e.st.fmj&&Ab(i.c)){let l=new pt;l.setComponent(i.axis,i.sign);let c=n.clone().addScaledVector(t,i.t);rc(_0,c,l,.09),Is(c,10132112,5,3,.02,.5,l);let h=uo(n.clone().addScaledVector(t,i.t+.5),t,200),u=h?h.t+.5+i.t:200;s=1,i=h?Object.assign({},h,{t:u}):null}let r=i?i.t:200,o=null;for(let l of pe){if(l===e||!l.alive&&!l.ragdollHit||!l.alive||l.pos.distanceTo(n)>r+3)continue;let c=null,h=-1;for(let u of l.veg.computeHitSpheres()){let d=D0(n,t,u.c,u.r);if(d>0&&d<r){u.part==="head"&&(h=d);let f=u.part;f==="bodyLow"&&n.y+t.y*d>u.c.y&&(f="bodyMid"),(!c||d<c.t)&&(c={f:l,part:f,t:d})}}c&&(h>0&&h-c.t<.3&&(c={f:l,part:"head",t:h}),r=c.t,o=c)}let a=n.clone().addScaledVector(t,r);if(o)return l1(o.f,o.part,e,t,a,s),{point:a,hit:o,pen:s};if(i){let l=new pt;l.setComponent(i.axis,i.sign),rc(_0,a,l,.09);let c={wood:9071178,metal:13158600,concrete:11053216,grass:5929530,carpet:8018522}[i.c.surf]||10132112;Is(a,c,6,3,.02,.6,l),Ri(nr,a,.3,.6,{grow:2,vel:l.clone().multiplyScalar(.5),color:c,opacity:.7}),i.c.surf==="metal"&&Ri(xo,a,.18,.05,{add:!0}),gt.play("hit",{pos:a,vol:.25,ref:3,rate:.6})}else if(t.y<0){let l=(0-n.y)/t.y;if(l>0&&l<200){let c=n.clone().addScaledVector(t,l);return Is(c,5925434,5,2.5,.02,.5,new pt(0,1,0)),Ri(nr,c,.4,.7,{grow:2,color:10127978}),{point:c}}}return{point:a}}function l1(n,t,e,i,s,r=0){if(!n.alive||k.mode==="range"&&n.isPlayer)return;let o=Ls[n.kind];Is(s,o,14,4,.03,.9,i.clone().multiplyScalar(.6)),Ri(nr,s,.5,.4,{color:o,grow:2.5,opacity:.9}),gt.play(Math.random()<.5?"splat1":"splat2",{pos:s,vol:.9,ref:5,vary:.2});let a=uo(s,i,4);if(a){let d=new pt;d.setComponent(a.axis,a.sign),rc(od,s.clone().addScaledVector(i,a.t),d,.6+Math.random()*.4,o,.9)}else rc(od,new pt(s.x+i.x*1.5,hs(s.x,s.z,s.y)+.02,s.z+i.z*1.5),new pt(0,1,0),.9,o,.85);let l=0,c=!1,h=e&&e.st?e.st.dmg:ls.snap.dmg,u=r?e&&e.st&&e.st.fmj?.97:.8:1;if(t==="head"?(l=h.head*u,c=!0):t==="bodyUp"?l=h.bodyUp*u:t==="bodyMid"?l=h.bodyMid*u:t==="bodyLow"||t==="body"?l=h.bodyLow*u:t==="armL"||t==="armR"?(l=h.arm*u,Pb(n,t==="armL"?0:1,i)):(l=h.leg*u,Ib(n,t==="legL"?0:1,i)),n.hp-=l,n.hurtT=0,e&&(e.hits++,e.isPlayer&&c1(n.hp<=0)),n.isPlayer&&Ub(e?e.pos:s),n.ai&&(n.ai.heard={pos:e?e.pos.clone():s.clone(),t:5},n.ai.threat=e),n.hp<=0)cc(n,e,c,i,t);else if(n.isPlayer){let d=.09*n.st.flinch;n.pitch=In(n.pitch+d*(.6+Math.random()*.6),-1.35,1.35),n.yaw+=(Math.random()-.5)*d*1.4,As=Math.max(As,.6*n.st.flinch),H("vign").style.opacity=.9,setTimeout(()=>H("vign").style.opacity=n.hp<50?.5:0,400),Db(Ls[n.kind])}}function Pb(n,t,e){if(n.lostArm[t])return;n.lostArm[t]=!0;let i=n.veg.arms[t];i.lost=!0;let s=i.sh.getWorldPosition(new pt),r=i.sh.getWorldQuaternion(new _n);Wt.attach(i.sh),Ea(i.sh,e.clone().multiplyScalar(3).add(new pt((Math.random()-.5)*2,2.5,(Math.random()-.5)*2)),new pt(Math.random()*8,Math.random()*8,Math.random()*8),{r:.05,splat:Ls[n.kind],snd:"splat2"});let o=new D(new he(.05,10,8),O0(n.kind));o.position.copy(i.sh.position),n.veg.spine.add(o),o.position.set(i.side*n.veg.splitR,i.sh.position.y,0),o.position.copy(n.veg.spine.worldToLocal(s.clone()));for(let a=0;a<6;a++)setTimeout(()=>n.veg.spine&&Is(o.getWorldPosition(new pt),Ls[n.kind],3,1.5,.02,.6),a*120);n.isPlayer&&hc("","\u8155\u3092\u5931\u3063\u305F\uFF01 \u72D9\u3044\u304C\u30D6\u30EC\u308B")}function Ib(n,t,e){if(n.lostLeg[t])return;n.lostLeg[t]=!0;let i=n.veg.legs[t];i.lost=!0,Wt.attach(i.hp),Ea(i.hp,e.clone().multiplyScalar(2.5).add(new pt((Math.random()-.5)*2,2.2,(Math.random()-.5)*2)),new pt(Math.random()*7,Math.random()*7,Math.random()*7),{r:.06,splat:Ls[n.kind],snd:"splat1"});let s=new D(new he(.06,10,8),O0(n.kind));n.veg.hips.add(s),s.position.set(i.side*.1,0,0),n.lostLeg[0]&&n.lostLeg[1]&&(n.stance="prone"),n.isPlayer&&hc("","\u811A\u3092\u5931\u3063\u305F\uFF01 \u52D5\u304D\u304C\u9045\u304F\u306A\u308B")}var f0={};function O0(n){return f0[n]||(f0[n]=new te({map:tt["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4})),f0[n]}function Lb(n,t){let e=n.veg;e.headGone=!0;let i=e.upper.localToWorld(new pt(0,(e.geo.split+e.geo.top)/2,0));e.upper.visible=!1,e.cap.visible=!0;let s=e.upper.material,r=O0(n.kind);for(let o=0;o<16;o++){let a=new Li(.05+Math.random()*.08,1),l=a.attributes.position;for(let h=0;h<l.count;h++)l.setXYZ(h,l.getX(h)*(.6+Math.random()*.8),l.getY(h)*(.4+Math.random()*.5),l.getZ(h)*(.6+Math.random()*.8));a.computeVertexNormals();let c=new D(a,[s,r][o%2]);c.castShadow=!0,c.position.copy(i).add(new pt((Math.random()-.5)*.2,(Math.random()-.5)*.2,(Math.random()-.5)*.2)),Wt.add(c),Ea(c,t.clone().multiplyScalar(4+Math.random()*4).add(new pt((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)),new pt(Math.random()*15,Math.random()*15,Math.random()*15),{r:.04,splat:Math.random()<.5?Ls[n.kind]:0,snd:o<3?"splat1":null})}for(let o of e.eyes){let a=o.g.getWorldPosition(new pt);Wt.attach(o.g),Ea(o.g,t.clone().multiplyScalar(3).add(new pt((Math.random()-.5)*3,3+Math.random()*2,(Math.random()-.5)*3)),new pt(Math.random()*10,Math.random()*10,0),{r:.04})}Is(i,Ls[n.kind],40,6,.035,1.2,t),Ri(nr,i,1.2,.7,{color:Ls[n.kind],grow:2,opacity:.9}),gt.play("crunch",{pos:i,vol:1,ref:8})}function cc(n,t,e,i,s){n.alive=!1,n.hp=0,e?Lb(n,i):s.startsWith("body")&&Is(n.eye(),Ls[n.kind],24,5,.035,1,i),n.veg.dead=!0,n.veg.deadT=0,n.veg.fallDir=i.x*-Math.sin(n.yaw)+i.z*-Math.cos(n.yaw)>0?-1:1,n.veg.deadBaseY=n.pos.y;let r=n.veg.gun.root;Wt.attach(r),Ea(r,new pt((Math.random()-.5)*2,1.5,(Math.random()-.5)*2),new pt(Math.random()*3,Math.random()*3,Math.random()*3),{r:.05}),n.deaths++,t&&(t.kills++,t.score+=e?150:100,e&&t.hs++),Nb(t,n,e),t&&t.isPlayer&&(hc(e?"\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u30AD\u30EB",e?"+150":"+100"),gt.play("hit",{vol:1,rate:.8})),n.isPlayer&&(Qs={t:2.8,by:t,at:n.eye()},setTimeout(()=>{k.phase!=="post"&&(ri=pe.find(o=>o.team===xt.team&&o.alive)||t||null)},2800),Ds("\u3084\u3089\u308C\u305F",t?`${t.name} \u306B\u5012\u3055\u308C\u305F`:"",2)),k.bomb.carrier===n&&(k.bomb.carrier=null,k.bomb.state="dropped",k.bomb.pos.set(n.pos.x,hs(n.pos.x,n.pos.z,n.pos.y+.5)+.05,n.pos.z)),k.mode==="range"&&!n.isPlayer&&(n.reviveT=2.2),$b(t,n)}function fo(n){if(!(n.reloadT>0||n.mag>=n.st.mag||n.reserve<=0||!n.alive)&&(n.reloadT=n.reloadMax=n.mag===0?n.st.reloadEmpty:n.st.reload,n.ads=Math.min(n.ads,0),n.adsWant=!1,n.isPlayer)){gt.play("mag",{vol:.8});let t=n.reloadMax;setTimeout(()=>gt.play("bolt1",{vol:.7}),t*620),setTimeout(()=>gt.play("bolt2",{vol:.7}),t*850)}}function Db(n){let t="#"+n.toString(16).padStart(6,"0");for(let e=0;e<5;e++){let i=document.createElement("div"),s=40+Math.random()*120;i.style.cssText=`position:absolute;left:${10+Math.random()*80}%;top:${10+Math.random()*75}%;width:${s}px;height:${s*(.8+Math.random()*.5)}px;border-radius:${40+Math.random()*20}% ${50+Math.random()*20}% ${45+Math.random()*20}% ${55+Math.random()*20}%;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,.35),${t} 30%,${t});opacity:.75;transition:opacity 1.6s,transform 1.6s;pointer-events:none`,H("dmg").appendChild(i),requestAnimationFrame(()=>{i.style.opacity=0,i.style.transform="translateY(30px)"}),setTimeout(()=>i.remove(),1700)}}var ju=0,tc=0,b0=0;function hc(n,t){H("killnote").innerHTML=(n?`<div class="k">${n}</div>`:"")+`<div class="h">${t}</div>`,ju=1.8}function Ds(n,t,e=2.5){H("cmsg").textContent=n,H("csub").textContent=t||"",tc=e}function Nb(n,t,e){let i=r=>r&&r.team===xt.team?"a":"e",s=document.createElement("div");s.innerHTML=n?`<b class="${i(n)}">${n.name}</b> <span class="hs">${e?"\u25CE \u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u25B6"}</span> <b class="${i(t)}">${t.name}</b>`:`<b class="${i(t)}">${t.name}</b> \u7206\u767A\u306B\u5DFB\u304D\u8FBC\u307E\u308C\u305F`,H("feed").prepend(s),setTimeout(()=>s.remove(),5e3)}var td=0;function c1(n){let t=H("hitmark");t.classList.toggle("kill",n),t.style.opacity=1,td=.25,gt.play("hit",{vol:.7,rate:n?.8:1.2})}function Ub(n){let t=document.createElement("div");t.className="dmga";let i=-(Math.atan2(n.x-xt.pos.x,n.z-xt.pos.z)-(xt.yaw+Math.PI));t.style.transform=`rotate(${i}rad)`,H("dmg").appendChild(t),setTimeout(()=>t.style.opacity=0,600),setTimeout(()=>t.remove(),1600)}var Fb=90,Bb=45,p0=5,m0=7.5,k={mode:"casual",phase:"lobby",time:0,timer:0,round:0,score:[0,0],attack:0,bomb:{state:"carried",carrier:null,pos:new pt,site:null,fuse:0,prog:0,defuser:null},postT:0,slowmo:0},ri=null,Qs=null,oc=[],Nr=[],Ob=(()=>{let n=new Et,t=new D(new ve(.04,.42,.04),new te({color:6965802}));n.add(t);let e=new D(new ve(.02,.12,.16),new te({color:13159632,metalness:.9,roughness:.3}));return e.position.set(0,.17,.07),n.add(e),n})();function Hb(n){return new D(new mt(.05,.05,.14,10),new te({color:n==="smoke"?5925466:3815994,roughness:.5}))}function Ur(n,t,e){if(!(!n.alive||k.phase==="pre"||k.phase==="post"||n.throwing||(t==="axe"?n.letN:n.tacN)<=0)){if(W.on&&!e){if(!go(n))return;oi({t:"th",i:n.nid,k:t})}n.throwing=!0,n.adsWant=!1,gt.play("cloth",n.isPlayer?{vol:.5}:{pos:n.pos,vol:.5}),setTimeout(()=>{if(n.throwing=!1,!n.alive)return;t==="axe"?n.letN--:n.tacN--,n.isPlayer&&H(t==="axe"?"letBtn":"tacBtn").classList.toggle("used",(t==="axe"?n.letN:n.tacN)<=0);let s=n.eye(),r=n.dir(),o=t==="axe"?Ob.clone():Hb(t);o.position.copy(s).addScaledVector(r,.5),Wt.add(o);let a=t==="axe"?19:15;oc.push({kind:t,o,pos:o.position,vel:r.clone().multiplyScalar(a).add(new pt(0,t==="axe"?2.2:3.2,0)),t:0,fuse:t==="smoke"?1.4:t==="flash"?1.3:3,by:n,done:!1}),gt.play("whoosh",n.isPlayer?{vol:.6}:{pos:n.pos,vol:.6})},n.st.throwT*1e3)}}function kb(n){for(let t of oc){if(t.done)continue;t.t+=n;let e=t.vel.clone().multiplyScalar(n),i=e.length();if(!t.stuck){if(t.kind==="axe"){let o=e.clone().normalize();for(let a of pe)if(!(a===t.by||!a.alive||a.team===t.by.team)){for(let l of a.veg.computeHitSpheres()){let c=D0(t.pos,o,l.c,l.r+.05);if(c>0&&c<i){Gb(a,t,l.part),t.done=!0;break}}if(t.done)break}if(t.done){Wt.remove(t.o);continue}}let s=uo(t.pos,e.clone().normalize(),i+.05);if(s){let o=new pt;o.setComponent(s.axis,s.sign),t.pos.addScaledVector(e.clone().normalize(),Math.max(0,s.t-.06)),t.kind==="axe"?(t.stuck=!0,gt.play("hit",{pos:t.pos,vol:.4,rate:.7})):(t.vel.reflect(o).multiplyScalar(.4),gt.play("hit",{pos:t.pos,vol:.2,rate:1.4}))}else t.pos.add(e);let r=hs(t.pos.x,t.pos.z,t.pos.y+.1,.05);t.pos.y<r+.05&&(t.pos.y=r+.05,t.kind==="axe"?t.stuck=!0:(t.vel.y=Math.abs(t.vel.y)*.3,t.vel.x*=.6,t.vel.z*=.6)),t.vel.y-=16*n,t.kind==="axe"&&!t.stuck?t.o.rotation.x-=n*14:t.stuck||(t.o.rotation.z+=n*6)}t.t>=t.fuse&&(t.done=!0,t.kind==="smoke"?zb(t.pos.clone()):t.kind==="flash"&&Wb(t.pos.clone(),t.by),t.kind!=="axe"?Wt.remove(t.o):setTimeout(()=>Wt.remove(t.o),6e3))}for(let t=Nr.length-1;t>=0;t--)Nr[t].t-=n,Nr[t].t<=0&&Nr.splice(t,1)}function Gb(n,t,e){if(k.mode==="range"&&n.isPlayer)return;let i=Ls[n.kind];Is(n.eye(),i,20,4,.03,.9),gt.play("splat1",{pos:n.pos,vol:1,ref:5}),n.hp=0,t.by.isPlayer&&c1(!0),cc(n,t.by,e==="head",t.vel.clone().normalize(),e.startsWith("body")?"body":e)}function zb(n){gt.play("whoosh",{pos:n,vol:.9,rate:.6}),Nr.push({p:n.clone().setY(n.y+1.2),r:3.6,t:12});for(let t=0;t<14;t++){let e=Math.random()*6.28,i=Math.random()*2.6;Ri(nr,new pt(n.x+Math.cos(e)*i,n.y+.4+Math.random()*2.4,n.z+Math.sin(e)*i),3.5+Math.random()*2,12+Math.random()*1.5,{grow:.15,vel:new pt((Math.random()-.5)*.3,.05,(Math.random()-.5)*.3),color:14212312,opacity:.95})}}function Vb(n,t){for(let e of Nr){let i=new pt().subVectors(t,n),s=In(new pt().subVectors(e.p,n).dot(i)/i.lengthSq(),0,1);if(n.clone().addScaledVector(i,s).distanceTo(e.p)<e.r)return!0}return!1}function Wb(n,t){gt.play("boom",{pos:n,vol:.7,rate:1.8}),Ri(xo,n.clone().setY(n.y+.3),4,.15,{add:!0}),vi.position.copy(n),vi.intensity=120,setTimeout(()=>vi.intensity=0,120);for(let e of pe){if(!e.alive)continue;let i=e.eye(),s=n.distanceTo(i);if(s>15||!r1(i,n.clone().setY(n.y+.2)))continue;let r=new pt().subVectors(n,i).normalize(),o=e.dir().dot(r),l=3*In((1-s/15)*(.45+.55*Math.max(0,o)),0,1);e.isPlayer?e.blindT=Math.max(e.blindT||0,l):e.ai&&(e.ai.blind=Math.max(e.ai.blind||0,l))}}function Xb(){let n=[];for(let t of["A","B"]){for(let e of en.holds[t].def)n.push(e);n.push([We[t].x,We[t].z])}return n.slice(0,8)}function qb(n){k.mode!=="range"||!pe.includes(n)||(n.dispose(),n.veg=new Pr(n.kind,n.team,{lod:1,hat:n.hat,camo:n.camo,lo:n.lo}),Wt.add(n.veg.root),Object.assign(n,{alive:!0,hp:100,stance:n.homeStance||"stand",lostArm:[!1,!1],lostLeg:[!1,!1]}),n.eyeH=n.targetEye(),n.vel.set(0,0,0),n.pos.copy(n.home))}function h1(){if(!xt)return;let n=xt.st.tac;H("tacBtn").classList.toggle("hide",n==="none"),H("tacBtn").querySelector("span").textContent=n==="flash"?"\u5149":"\u7159",H("letBtn").classList.toggle("hide",xt.st.let==="none"),H("tacBtn").classList.remove("used"),H("letBtn").classList.remove("used")}function Yb(){k.round=1,k.score=[0,0],k.attack=0;for(let t of pe)t.dispose();pe=[],U0(),xt=new js(ut.kind,0,!0,"\u3042\u306A\u305F");let n=["carrot","tomato","potato","pepper"];Xb().forEach(([t,e],i)=>{let s=new js(n[i%4],1,!1,"\u7684"+(i+1));s.pos.set(t,hs(t,e,3),e),s.home=s.pos.clone(),s.homeStance=["stand","stand","crouch","stand","prone"][i%5],s.stance=s.homeStance,s.eyeH=s.targetEye(),s.yaw=Math.random()*6.28,pe.push(s)}),pe.unshift(xt),xt.pos.copy(Hl.south[0]),xt.yaw=0,xt.pitch=0,Object.assign(k.bomb,{state:"none",carrier:null,site:null}),ri=null,Qs=null,k.phase="live",k.timer=999,k.time=0,H("ia0").textContent=si[xt.kind][0],H("ia1").textContent="-",H("ie0").textContent="\u7684",H("ie1").textContent="\u7684",H("roundInfo").textContent="\u5C04\u6483\u5834",H("side").textContent="\u52D5\u304B\u306A\u3044\u7684\u3067\u7DF4\u7FD2\uFF08\u5012\u3059\u30682\u79D2\u3067\u5FA9\u6D3B\uFF09\u3002\u30DD\u30FC\u30BA\u304B\u3089\u30DB\u30FC\u30E0\u306B\u623B\u308C\u307E\u3059",H("hpName").textContent=si[ut.kind],H0={kills:0,hs:0},ud(),xt.tacN=xt.st.tac==="none"?0:99,xt.letN=xt.st.let==="none"?0:99,h1(),Ds("\u5C04\u6483\u5834",`${xt.st.name}\u30FB${en.name}`,2.5)}function u1(){if(window.VW_INGAME=!0,k.mode==="range")return Yb();k.round=0,k.score=[0,0],k.attack=Math.random()<.5?0:1;for(let s of pe)s.dispose();pe=[];let n=["carrot","tomato","potato","pepper"].filter(s=>s!==ut.kind);xt=new js(ut.kind,0,!0,"\u3042\u306A\u305F");let t=new js(n[0],0,!1,si[n[0]]+"(CPU)"),e=new js(n[1],1,!1,si[n[1]]+"(CPU)"),i=new js(n[2],1,!1,si[n[2]]+"(CPU)");pe=[xt,t,e,i];for(let s of pe)s.isPlayer||(s.ai={path:null,pi:0,goal:null,repath:0,think:0,target:null,seen:0,heard:null,hold:null,holdT:0,strafe:0,aimErr:new pt,mode:"obj",crouchT:0});H("ia0").textContent=si[xt.kind][0],H("ia1").textContent=si[t.kind][0],H("ie0").textContent=si[e.kind][0],H("ie1").textContent=si[i.kind][0],H("hpName").textContent=si[ut.kind],H0={kills:0,hs:0},ud(),uc()}var H0;function uc(n){k.round++,U0();for(let l of pe){let c=l.kind;l.dispose(),l.veg=new Pr(c,l.team,{lod:1,hat:l.hat,camo:l.camo,lo:l.lo}),Wt.add(l.veg.root),l.isPlayer&&l.setFirstPerson(!ut.tpp),Object.assign(l,{alive:!0,hp:100,stance:"stand",sprint:!1,ads:0,adsWant:!1,mag:l.st.mag,reserve:l.st.reserve,tacN:l.st.tac==="none"?0:1,letN:l.st.let==="none"?0:1,throwing:!1,blindT:0,boltT:0,reloadT:0,needBolt:!1,slideT:0,diveT:0,eyeH:1.58,stanceT:0,stamina:l.st.stamina,sprintOutT:0,lostArm:[!1,!1],lostLeg:[!1,!1],revealT:0,kickedOut:!1}),l.vel.set(0,0,0),l.nt=null}let t=k.attack,e=pe.filter(l=>l.team===t),i=pe.filter(l=>l.team!==t);e.forEach((l,c)=>{l.pos.copy(Hl.south[c]),l.yaw=0,l.pitch=0}),i.forEach((l,c)=>{l.pos.copy(Hl.north[c]),l.yaw=Math.PI,l.pitch=0});let s=n!=null&&pe.find(l=>l.nid===n)||e.find(l=>l.isPlayer)||e.find(l=>l.cid)||e[0];Object.assign(k.bomb,{state:"carried",carrier:s,site:null,fuse:0,prog:0,defuser:null});for(let l of pe)l.ai&&Object.assign(l.ai,{path:null,goal:null,target:null,seen:0,heard:null,hold:null,mode:"obj",think:Math.random()*.3,site:Math.random()<.5?"A":"B",threat:null});let r=i.filter(l=>l.ai);r.forEach((l,c)=>l.ai.site=r.length===2?c===0?"A":"B":Math.random()<.5?"A":"B");let o=e.filter(l=>l.ai),a=Math.random()<.5?"A":"B";o.forEach(l=>l.ai.site=a);for(let l of oc)l.o.parent&&l.kind!=="axe"&&Wt.remove(l.o);if(oc.length=0,Nr.length=0,ri=null,Qs=null,H("kcam").classList.add("hide"),h1(),k.phase="pre",k.timer=4,k.time=0,H("roundInfo").textContent=`\u30E9\u30A6\u30F3\u30C9 ${k.round}`,H("side").textContent=xt.team===t?"\u653B\u6483\u5074\uFF1A\u7206\u5F3E\u3092 A \u304B B \u306B\u8A2D\u7F6E\u305B\u3088":"\u9632\u885B\u5074\uFF1A\u7206\u5F3E\u306E\u8A2D\u7F6E\u3092\u963B\u6B62\u305B\u3088",Ds(`\u30E9\u30A6\u30F3\u30C9 ${k.round}`,xt.team===t?"\u653B\u6483":"\u9632\u885B",3.5),k.round<=2){let l=H("tip");l.classList.remove("hide"),l.textContent=(Ai?"\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F \u2192 \u96E2\u3059\u3068\u767A\u5C04\u3002":"\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u8997\u304F \u2192 \u5DE6\u30AF\u30EA\u30C3\u30AF\u3067\u767A\u5C04\u3002")+(xt.st.rifle==="root"?"\u8170\u304B\u3089\u4E0A\u306A\u3089\u4E00\u6483":"\u982D\u301C\u80F8\u306A\u3089\u4E00\u6483"),b0=6}H("vign").style.opacity=0,gt.play("whoosh",{vol:.6})}function $b(n,t){if(k.mode==="range"||W.on&&!W.host||k.phase!=="live"&&k.phase!=="planted")return;let e=[0,1].map(r=>pe.filter(o=>o.team===r&&o.alive).length),i=k.attack,s=1-i;if(e[i]===0&&k.phase!=="planted")return po(s,"\u653B\u6483\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);if(e[s]===0)return po(i,"\u9632\u885B\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);e[i]===0&&k.phase}function po(n,t,e){if(k.phase==="post"||W.on&&!W.host&&!W.allowEnd)return;W.on&&W.host&&oi({t:"er",w:n^W.flip,r:t,by:e?e.nid:-1}),k.phase="post",k.postT=5,k.score[n]++,H("scA").textContent=k.score[0],H("scB").textContent=k.score[1];let i=n===xt.team;Ds(i?"\u30E9\u30A6\u30F3\u30C9\u52DD\u5229":"\u30E9\u30A6\u30F3\u30C9\u6557\u5317",t,4.5),H("cmsg").style.color=i?"#ffd040":"#ff5a4a",gt.play(i?"win":"lose",{vol:.8}),e&&(k.slowmo=W.on?0:1.4,e.isPlayer||(ri=e,hc("\u30D5\u30A1\u30A4\u30CA\u30EB\u30AD\u30EB",e.name))),Rs(null)}function Zb(){H("cmsg").style.color="";let n=Jb();if(k.score[0]>=n.winR||k.score[1]>=n.winR)return W.on&&oi({t:"mend",sc:T1()}),d1();k.round%n.swap===0&&(k.attack=1-k.attack,Ds("\u653B\u5B88\u4EA4\u4EE3","",2)),uc(),W.on&&I1()}function Jb(){return W.on?W.rules:k.mode==="rank"?{winR:8,swap:4}:{winR:ut.winR,swap:ut.swap}}function d1(){k.phase="end";let n=k.score[0]>k.score[1];H("resTitle").textContent=n?"\u52DD\u5229":"\u6557\u5317",H("resTitle").className=n?"win":"lose",H("resScore").innerHTML=`<span class="ally">${k.score[0]}</span> - <span class="enemy">${k.score[1]}</span>`;let t=xt.shots?Math.round(xt.hits/xt.shots*100):0;H("resStats").innerHTML=`<div><b>${xt.kills}</b>\u30AD\u30EB</div><div><b>${xt.hs}</b>\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8</div><div><b>${xt.hits}/${xt.shots}</b>\u547D\u4E2D</div>`;let e=[...pe].sort((i,s)=>s.score-i.score)[0];if(H("board").innerHTML="<tr><th></th><th>\u540D\u524D</th><th>\u30AD\u30EB</th><th>\u30C7\u30B9</th><th>HS</th><th>\u30B9\u30B3\u30A2</th></tr>"+[0,1].map(i=>pe.filter(s=>s.team===i).sort((s,r)=>r.score-s.score).map(s=>`<tr class="${i===0?"ally":"enemy"}${s===xt?" me":""}"><td>${s===e?'<span class="mvp">MVP</span>':""}</td><td>${s.name}</td><td>${s.kills}</td><td>${s.deaths}</td><td>${s.hs}</td><td>${s.score}</td></tr>`).join("")).join(""),H("result").classList.remove("hide"),H("ctl").classList.add("hide"),document.pointerLockElement&&document.exitPointerLock(),gt.bgm(!1),gt.play(n?"win":"lose"),H("rankRes").innerHTML="",k.mode==="rank"){let i=Ss(Ye.rp),s=$g(Ye,{win:n,rounds:k.score[0],kills:xt.kills,hs:xt.hs,mvp:e===xt});Ye.rp=s.after,Ye.best=Math.max(Ye.best,Ye.rp),Ye.games++,n&&Ye.wins++,Ye.kills+=xt.kills,Ye.history.unshift({win:n,sc:k.score.join("-"),rp:s.total,map:en.name}),Ye.history=Ye.history.slice(0,20),h0(Ye);let r=Ss(Ye.rp),o=r.index>i.index||r.index===i.index&&r.div>i.div;H("rankRes").innerHTML=`<div class="rkHead">${xa(r.tier.id,64,r.div)}<div><div class="nm">${r.label}${o?' <span style="color:#ffd040">\u30E9\u30F3\u30AF\u30A2\u30C3\u30D7\uFF01</span>':""}</div><div class="rkBar"><i style="width:${r.progress*100}%"></i></div><small>${Ye.rp} RP</small></div><div class="rpList" style="flex:1">${s.items.map(([a,l])=>`<div>${a}<b>${l>=0?"+":""}${l}</b></div>`).join("")}<div class="tot">\u5408\u8A08<b>${s.total>=0?"+":""}${s.total} RP</b></div></div></div>`}}function Kb(n){if(k.time+=n,k.mode==="range"){k.phase="live",k.timer=999;return}if(k.phase==="pre")k.timer-=n,k.timer<=0?(k.phase="live",k.timer=Fb,Ds("\u958B\u59CB","",1),gt.play("beep",{vol:.8})):Math.ceil(k.timer)!==Math.ceil(k.timer+n)&&gt.play("tick",{vol:.6});else if(k.phase==="live")k.timer-=n,k.timer<=0&&(k.timer=0,(!W.on||W.host)&&po(1-k.attack,"\u6642\u9593\u5207\u308C \u2014 \u9632\u885B\u6210\u529F"));else if(k.phase==="planted"){let e=k.bomb;e.fuse-=n,k.timer=e.fuse,e.beepT=(e.beepT||0)-n,e.beepT<=0&&(gt.play("beep",{pos:e.pos,vol:.9,ref:6}),e.beepT=e.fuse>15?1:e.fuse>6?.5:e.fuse>2?.25:.12),e.fuse<=0&&(!W.on||W.host)&&p1()}else k.phase==="post"&&(k.postT-=n,k.postT<=0&&(!W.on||W.host)&&(k.postT=99,Zb()));if(W.on&&!W.host){let e=k.bomb;(e.planting||e.defusing)===xt?Rs(e.planting?"\u7206\u5F3E\u3092\u8A2D\u7F6E\u4E2D":"\u7206\u5F3E\u3092\u89E3\u9664\u4E2D",e.prog/(e.planting?p0:m0)):Rs(null),e.state==="carried"&&e.carrier&&e.pos.copy(e.carrier.pos);return}let t=k.bomb;if(W.on)for(let e of pe)e.net&&e.wantAct&&!t.planting&&!t.defusing&&mo(e);if(t.state==="dropped"){for(let e of pe)if(e.alive&&e.team===k.attack&&e.pos.distanceTo(t.pos)<1.3){t.state="carried",t.carrier=e,e.isPlayer&&hc("","\u7206\u5F3E\u3092\u62FE\u3063\u305F");break}}if(t.state==="carried"&&t.carrier&&t.pos.copy(t.carrier.pos),t.planting){let e=t.planting;!e.alive||!e.wantAct||e.pos.distanceTo(We[t.plantSite])>2.4||k.phase!=="live"?(t.planting=null,t.prog=0,e.isPlayer&&Rs(null)):(t.prog+=n,e.isPlayer&&Rs("\u7206\u5F3E\u3092\u8A2D\u7F6E\u4E2D",t.prog/p0),t.prog>=p0&&f1(e,t.plantSite))}if(t.defusing){let e=t.defusing;!e.alive||!e.wantAct||e.pos.distanceTo(t.pos)>2||k.phase!=="planted"?(t.defusing=null,t.prog=0,e.isPlayer&&Rs(null)):(t.prog+=n,e.isPlayer&&Rs("\u7206\u5F3E\u3092\u89E3\u9664\u4E2D",t.prog/m0),t.prog>=m0&&(t.defusing=null,Rs(null),t.state="defused",gt.play("ui",{vol:1}),e.score+=100,ad(`${e.name} \u304C\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F`),W.on&&oi({t:"df",i:e.nid}),po(1-k.attack,"\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F")))}}function ad(n){let t=document.createElement("div");t.textContent=n,H("feed").prepend(t),setTimeout(()=>t.remove(),5e3)}function mo(n){let t=k.bomb;if(n.alive){if(W.on&&!W.host)return!1;if(k.phase==="live"&&t.carrier===n){for(let e of["A","B"])if(n.pos.distanceTo(We[e])<2.4&&!t.planting)return t.planting=n,t.plantSite=e,t.prog=0,gt.play("cloth",{pos:n.pos,vol:.7}),!0}return k.phase==="planted"&&n.team!==k.attack&&n.pos.distanceTo(t.pos)<2&&!t.defusing?(t.defusing=n,t.prog=0,gt.play("cloth",{pos:n.pos,vol:.7}),!0):!1}}var Ts;function Qb(){let n=new Et,t=new D(new ve(.4,.18,.28),new te({color:3815984,roughness:.7,map:tt.polymer.map}));t.position.y=.09,n.add(t);for(let s=0;s<3;s++){let r=new D(new mt(.045,.045,.34,12),new te({color:13138474,roughness:.5}));r.rotation.z=Math.PI/2,r.position.set(0,.22,-.08+s*.08),n.add(r)}let e=new D(new be(.16,.08),new Wn({color:16724e3}));e.rotation.x=-Math.PI/2,e.position.set(.08,.181,0),n.add(e),n.userData.scr=e;let i=new D(new Xe(.08,.008,6,16,Math.PI),new te({color:13639712}));return i.position.set(-.12,.2,0),n.add(i),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),n}function f1(n,t){let e=k.bomb;e.planting=null,e.prog=0,Rs(null),e.state="planted",e.carrier=null,e.site=t,e.fuse=Bb,e.beepT=0,W.on&&W.host&&oi({t:"pl",i:n.nid,si:t,p:ic(n.pos)}),W.on&&e.pos.set(n.pos.x,hs(n.pos.x,n.pos.z,n.pos.y+.5)+.05,n.pos.z),k.phase="planted",n.score+=100,ad(`${n.name} \u304C ${t} \u306B\u7206\u5F3E\u3092\u8A2D\u7F6E`),Ds("\u7206\u5F3E\u304C\u8A2D\u7F6E\u3055\u308C\u305F",`\u30B5\u30A4\u30C8 ${t}`,2.5),gt.play("beep",{vol:1})}function p1(){let n=k.bomb;n.state="exploded",W.on&&W.host&&oi({t:"boom"}),gt.play("boom",{vol:1});for(let t=0;t<6;t++)Ri(nr,n.pos.clone().add(new pt((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3)),3+Math.random()*3,2.5,{grow:.8,color:4866104,opacity:.9});for(let t=0;t<4;t++)Ri(xo,n.pos.clone().add(new pt(0,1,0)),6+t*2,.35,{add:!0});Is(n.pos.clone().add(new pt(0,.5,0)),3813408,40,12,.06,2),vi.position.copy(n.pos).add(new pt(0,2,0)),vi.intensity=400,vi.distance=40,setTimeout(()=>{vi.intensity=0,vi.distance=8},300),As=1.2;for(let t of pe)t.alive&&t.pos.distanceTo(n.pos)<9&&(t.hp=0,cc(t,null,!1,new pt().subVectors(t.pos,n.pos).normalize(),"body"));po(k.attack,"\u7206\u5F3E\u304C\u7206\u767A\u3057\u305F")}function Rs(n,t){if(!n){H("prog").classList.add("hide");return}H("prog").classList.remove("hide"),H("progT").textContent=n,H("progF").style.width=In(t,0,1)*100+"%"}var As=0;function m1(n,t,e){let i=(n.lostLeg[0]?1:0)+(n.lostLeg[1]?1:0),s=(n.stance==="prone"?.85:n.stance==="crouch"?2.1:t.sprint?6.1:4.4)*(n.st?n.st.move:1);n.stanceT>0&&(s*=n.stance==="prone"?.15:.6),t.mag<.45&&n.stance==="stand"&&!t.sprint&&(s=2),s*=sc(1,n.st?n.st.adsMove:.45,n.ads),i===1&&(s*=.45),i===2&&(s=Math.min(s,.6)),(k.phase==="pre"||k.bomb.planting===n||k.bomb.defusing===n)&&(s=0);let o=t.x*s*Math.min(1,t.mag*1.4),a=t.z*s*Math.min(1,t.mag*1.4);if(n.slideT>0){n.slideT-=e;let u=n.slideT/.7;o=n.slideDir.x*8*u+o*.2,a=n.slideDir.z*8*u+a*.2,n.slideT<=0&&(n.stance="crouch")}if(n.diveT>0){n.diveT-=e;let u=n.onGround?Math.max(0,n.diveT/.62):1;o=n.diveDir.x*7.2*u,a=n.diveDir.z*7.2*u}let l=n.diveT>0?n.onGround?5:.3:n.onGround?14:3;n.vel.x=Cs(n.vel.x,o,l,e),n.vel.z=Cs(n.vel.z,a,l,e),n.vel.y-=16*e,n.pos.x+=n.vel.x*e,n.pos.z+=n.vel.z*e,Eb(n.pos,bb(n),n.stance==="prone"?.36:_b),n.pos.x=In(n.pos.x,re.minX+.5,re.maxX-.5),n.pos.z=In(n.pos.z,re.minZ+.5,re.maxZ-.5);let c=hs(n.pos.x,n.pos.z,n.pos.y);n.pos.y+=n.vel.y*e,n.pos.y<=c?(!n.onGround&&n.diveT>0?(ed(n,1.1),gt.play("cloth",{pos:n.pos,vol:.8}),n.isPlayer&&(As=Math.max(As,.25))):!n.onGround&&n.vel.y<-4&&ed(n,1.3),n.pos.y=c,n.vel.y=0,n.onGround=!0):n.pos.y-c>.08?n.onGround=!1:n.onGround&&(n.pos.y=c,n.vel.y=0);let h=Math.hypot(n.vel.x,n.vel.z);if(n.moveAmt=h,n.onGround&&h>.5){n.stepAcc+=h*e;let u=n.sprint?1.6:1.2;if(n.stepAcc>u){n.stepAcc=0;let d=(n.stance==="prone"||n.stance==="crouch"||h<2.3?0:n.sprint?1:.6)*(n.st?n.st.quiet:1);d>.05&&ed(n,d)}}}function ed(n,t){let e=Rg(tr,n.pos.x,n.pos.y+.05,n.pos.z),s=(e==="wood"||e==="carpet"?["step_wood-000","step_wood-001"]:e==="grass"?["step_grass-001","step_grass-004"]:["step_concrete-001","step_concrete-002"])[Math.random()<.5?0:1];if(n.isPlayer?gt.play(s,{vol:.25*t,vary:.15}):gt.play(s,{pos:n.pos,vol:.9*t,ref:3,roll:1.1,vary:.15,maxDist:30}),t>.5)for(let r of pe)r.ai&&r.alive&&r.team!==n.team&&r.pos.distanceTo(n.pos)<14*t&&(r.ai.heard={pos:n.pos.clone(),t:2.5});t>.5&&(n.revealT=Math.max(n.revealT,.6))}var Kg=new Proxy({},{get:(n,t)=>en.holds[t]});function jb(n){return pe.filter(t=>t.team!==n.team&&t.alive)}function tE(n,t){let e=n.eye(),i=new pt().subVectors(t.eye(),e),s=i.length();if(s>90)return!1;i.normalize();let r=new pt(-Math.sin(n.yaw),0,-Math.cos(n.yaw));if(new pt(i.x,0,i.z).normalize().dot(r)<Math.cos(Math.PI*.42)&&s>4||n.ai&&n.ai.blind>0)return!1;let a=[t.eye(),new pt(t.pos.x,t.pos.y+(t.stance==="prone"?.3:.9),t.pos.z)];for(let l of a)if(r1(e,l)&&!Vb(e,l))return!0;return!1}function eE(n,t){let e=n.ai;if(!n.alive)return;let i=k.mode==="rank"?Ss(Ye.rp).tier.diff:ut.diff;if(e.blind>0&&(e.blind-=t),e.think-=t,e.heard&&(e.heard.t-=t,e.heard.t<=0&&(e.heard=null)),e.think<=0){e.think=.15;let a=null,l=1e9;for(let c of jb(n))if(tE(n,c)){let h=n.pos.distanceTo(c.pos);h<l&&(l=h,a=c)}a!==e.target&&(e.seen=0,e.target=a,a&&e.aimErr.set(Math.random()-.5,(Math.random()-.5)*.6,Math.random()-.5).multiplyScalar([.5,.35,.25][i])),!a&&e.target&&(e.target=null)}let s={x:0,z:0,mag:0,sprint:!1},r=null,o=e.target;if(o&&o.alive){e.seen+=t;let a=[1.1,.7,.45][i],c=e.aimHead??(e.aimHead=Math.random()<[.25,.4,.55][i])?o.eye().add(new pt(0,-.05,0)):new pt(o.pos.x,o.pos.y+(o.stance==="prone"?.25:o.stance==="crouch"?.75:1.05),o.pos.z),h=Math.exp(-e.seen*[1.4,2,2.8][i])+(o.moveAmt>2?[.12,.08,.05][i]:0)+[.035,.018,.008][i];if(r=c.clone().add(e.aimErr.clone().multiplyScalar(h*n.eye().distanceTo(c)*.25)),n.adsWant=e.seen>a*.4&&n.boltT<=0&&n.reloadT<=0,e.strafe-=t,e.strafe<=0&&(e.strafe=.6+Math.random()*1.2,e.strafeDir=Math.random()<.5?-1:1,Math.random()<.25&&n.stance==="stand"?n.stance="crouch":Math.random()<.2&&(n.stance="stand")),n.ads<.5||i===2){let d=new pt(Math.cos(n.yaw),0,-Math.sin(n.yaw));s.x=d.x*e.strafeDir,s.z=d.z*e.strafeDir,s.mag=.5}if(e.seen>a&&n.ads>.92&&F0(n)){let d=new pt().subVectors(r,n.eye()).normalize(),f=n.dir();f.dot(d)>.9995&&(B0(n,f),e.aimHead=void 0,e.aimErr.multiplyScalar(.6),e.seen=a*.35)}e.lastSeenPos=o.pos.clone();let u=n.pos.distanceTo(o.pos);n.letN>0&&u<9&&u>3&&e.seen>a&&!n.throwing&&Math.random()<t*.35*(i+1)&&(r=o.eye().add(new pt(0,.25+u*.03,0)),Ur(n,"axe"))}else{n.adsWant=!1,n.stance==="crouch"&&Math.random()<t*.3&&(n.stance="stand");let a=nE(n);if(a)if(e.repath-=t,(!e.path||e.repath<=0||!e.goal||e.goal.distanceTo(a)>1.5)&&(e.goal=a.clone(),e.path=I0.path(n.pos.x,n.pos.z,a.x,a.z),e.pi=1,e.repath=3),e.path&&e.pi<e.path.length){let[c,h]=e.path[e.pi],u=c-n.pos.x,d=h-n.pos.z,f=Math.hypot(u,d);f<.45?e.pi++:(s.x=u/f,s.z=d/f,s.mag=1,s.sprint=e.rush&&f>3,e.sneak&&(s.mag=.4)),r=new pt(c,n.eye().y,h),f<.45&&e.pi>=e.path.length&&(e.path=null)}else e.holdT-=t,e.holdT<=0&&(e.holdT=2+Math.random()*3,e.lookYaw=e.watchYaw!==void 0?e.watchYaw+(Math.random()-.5)*1.4:Math.random()*6.28,Math.random()<.3&&(n.stance="crouch")),e.lookYaw!==void 0&&(r=n.eye().add(new pt(-Math.sin(e.lookYaw),-.05,-Math.cos(e.lookYaw))));if(e.heard&&(r=new pt(e.heard.pos.x,n.eye().y,e.heard.pos.z)),n.tacN>0&&!n.throwing){let c=k.bomb,h=null;n.st.tac==="smoke"&&(c.carrier===n&&k.phase==="live"&&n.pos.distanceTo(We[e.site])<7&&(h=We[e.site]),k.phase==="planted"&&n.team!==k.attack&&n.pos.distanceTo(c.pos)<8&&(h=c.pos)),n.st.tac==="flash"&&e.heard&&n.pos.distanceTo(e.heard.pos)>5&&n.pos.distanceTo(e.heard.pos)<15&&Math.random()<t*.5&&(h=e.heard.pos),h&&(r=new pt(h.x,n.eye().y+.6,h.z),Ur(n,n.st.tac))}n.wantAct=!1;let l=k.bomb;if(l.carrier===n&&k.phase==="live"){let c=We[e.site];n.pos.distanceTo(c)<2&&(n.wantAct=!0,l.planting||mo(n))}k.phase==="planted"&&n.team!==k.attack&&n.pos.distanceTo(l.pos)<1.8&&(n.wantAct=!0,l.defusing||mo(n))}if(o&&o.alive&&(n.wantAct=!1),r){let a=new pt().subVectors(r,n.eye()),l=Math.atan2(-a.x,-a.z),c=Math.atan2(a.y,Math.hypot(a.x,a.z)),h=o?[3.5,5,7][i]:4;n.yaw+=i1(n.yaw,l)*Math.min(1,h*t*(n.ads>.5?.6:1)),n.pitch+=(c-n.pitch)*Math.min(1,h*t)}if(s.mag>.3&&!o&&(e.stuckT=(e.stuckT||0)+t,e.stuckT>.8&&(e.stuckPos&&e.stuckPos.distanceTo(n.pos)<.25&&(e.path=null,e.repath=0,e.hold=null,e.unstick=.6,e.unstickDir=Math.random()<.5?1:-1),e.stuckPos=n.pos.clone(),e.stuckT=0)),e.unstick>0){e.unstick-=t;let a=new pt(Math.cos(n.yaw),0,-Math.sin(n.yaw)).multiplyScalar(e.unstickDir);s.x=a.x,s.z=a.z,s.mag=1}n.sprint=s.sprint,m1(n,s,t),n.mag===0&&n.reloadT<=0&&n.boltT<=0&&fo(n),!o&&n.mag<3&&n.reloadT<=0&&n.boltT<=0&&n.reserve>0&&Math.random()<t*.5&&fo(n)}function nE(n){let t=n.ai,e=k.bomb,i=n.team===k.attack;if(t.rush=!1,t.sneak=!1,t.watchYaw=void 0,k.phase==="pre")return null;if(t.heard&&!t.target&&Math.random()<.002)return t.heard.pos;if(i){if(e.state==="dropped")return t.rush=!0,e.pos;if(e.carrier===n&&k.phase==="live")return t.rush=k.timer<40,We[t.site];if(k.phase==="planted"){if(!t.hold||t.holdFor!=="postplant"){let r=Kg[e.site].att[Math.floor(Math.random()*2)];t.hold=new pt(r[0],0,r[1]),t.holdFor="postplant"}return t.watchYaw=Math.atan2(-(e.pos.x-t.hold.x),-(e.pos.z-t.hold.z)),t.hold}let s=e.carrier;if(s&&s!==n){let r=new pt(Math.sin(n.kind.length)*2.5,0,2.5);return s.pos.clone().add(r)}return We[t.site]}else{if(k.phase==="planted")return t.rush=!0,e.pos;if(!t.hold||t.holdFor!==t.site||(t.swapT=(t.swapT||0)-.016)<-25){let s=Kg[t.site].def,r=s[Math.floor(Math.random()*s.length)];t.hold=new pt(r[0],0,r[1]),t.holdFor=t.site,t.swapT=0}return t.watchYaw=Math.atan2(-(0-t.hold.x)*.3,-(10-t.hold.z)),t.rush=n.pos.distanceTo(t.hold)>12,t.hold}}var ld=.66,Zt={root:new Et,gun:null,arms:[],kick:0,sway:new lt,bob:0,boltAnim:0,reloadAnim:0,sprintK:0,shells:[]};function iE(){Zt.gun=pa(1),Zt.root.add(Zt.gun.root),er.add(Zt.root),Zt.armL=o0(-1,2783968,.34,.32),Zt.armR=o0(1,2783968,.36,.32);for(let n of[Zt.armL,Zt.armR])n.up.visible=!1;Zt.armL.sh.position.set(-.06,-.34,-.25),Zt.armR.sh.position.set(.34,-.55,.12),Zt.gun.root.scale.setScalar(ld),Ps.add(Zt.armL.sh),Ps.add(Zt.armR.sh),er.add(Ps),Zt.armL.sh.traverse(n=>n.frustumCulled=!1),Zt.armR.sh.traverse(n=>n.frustumCulled=!1),Zt.gun.root.traverse(n=>n.frustumCulled=!1)}function ud(){let n=Zt.gun;Zt.root.remove(n.root),Zt.gun=pa(1,ut.camo,ut.lo),Zt.gun.root.scale.setScalar(ld),Zt.root.add(Zt.gun.root),Zt.gun.root.traverse(t=>t.frustumCulled=!1)}function sE(){Zt.kick=1,sd.intensity=6,setTimeout(()=>sd.intensity=0,60),Ri(xo,Zt.gun.muzzlePt.getWorldPosition(new pt),.35,.05,{add:!0,scene:er})}function rE(n,t,e){let i=xt,s=Zt.gun;Zt.kick=Cs(Zt.kick,0,9,n),Zt.sway.x=Cs(Zt.sway.x,In(-t*.0025,-.06,.06),8,n),Zt.sway.y=Cs(Zt.sway.y,In(e*.0025,-.05,.05),8,n);let r=Math.hypot(i.vel.x,i.vel.z);Zt.bob+=n*r*2,Zt.sprintK=Cs(Zt.sprintK,i.sprint&&r>3&&i.ads<.1?1:0,8,n);let o=i.ads,a=s.eyePt.position.y,l=s.eyePt.position.z,c=new pt(.17,-.18,-.52),h=new pt(0,-a*ld,-l*ld-.08),u=c.clone().lerp(h,Math.pow(o,.8)),d=(1-o*.9)*Math.min(1,r/4);u.x+=Math.sin(Zt.bob)*.012*d+Zt.sway.x,u.y+=Math.abs(Math.cos(Zt.bob))*.014*d+Zt.sway.y-(i.stance==="crouch"?.01:0),u.z+=Zt.kick*.12;let f=i.boltT>0?1-i.boltT/i.st.bolt:0,p=i.boltT>0?Math.sin(Math.min(1,f*1.2)*Math.PI):0;s.setBolt(i.boltT>0?In((f-.15)/.75,0,1):0);let g=i.reloadT>0?1-i.reloadT/(i.reloadMax||3):0,m=i.reloadT>0?Math.sin(g*Math.PI):0;s.mag.position.y=-.04-(g>.15&&g<.6?Math.sin((g-.15)/.45*Math.PI)*.25:0),Zt.root.position.copy(u).add(new pt(-.04*Zt.sprintK,-.08*Zt.sprintK-.05*m,.05*Zt.sprintK)),Zt.root.rotation.set(Zt.kick*.14+Zt.sprintK*-.45+m*.3+p*.12,Zt.sprintK*.9+m*.2,Zt.sprintK*.35+p*.35+m*.5),Zt.root.updateMatrixWorld(!0),Ps.updateMatrixWorld(!0);let x=s.gripPt.getWorldPosition(new pt),M=s.forePt.getWorldPosition(new pt),w=s.boltPt.getWorldPosition(new pt),E=i.boltT>0?x.clone().lerp(w,In(p*1.6,0,1)):i.reloadT>0?x.clone().lerp(s.mag.getWorldPosition(new pt),Math.sin(In(g*1.2,0,1)*Math.PI)):x,R=s.root.getWorldQuaternion(new _n);Zu(Zt.armR,$l(E,R,"grip"),Ps.localToWorld(new pt(1.2,-1.2,.4))),Zu(Zt.armL,$l(M,R,"fore"),Ps.localToWorld(new pt(-.6,-1.4,-.2))),Yl(Zt.armR,R,"grip"),Yl(Zt.armL,R,"fore"),Zt.root.visible=Zt.armL.sh.visible=Zt.armR.sh.visible=o<.88&&!ut.tpp&&i.alive&&!ri,i.lostArm[0]&&(Zt.armL.sh.visible=!1),i.lostArm[1]&&(Zt.armR.sh.visible=!1)}var Ce={joy:null,jx:0,jz:0,jmag:0,sprintLock:!1,look:null,lookDX:0,lookDY:0,keys:{},fireHeld:null,mouseDown:!1,rmb:!1},Dr=H("ctl");Ai&&H("joyBase").classList.remove("hide");function g1(){H("fireL").classList.toggle("hide",!ut.leftFire)}g1();function oE(){let n=(i,s)=>i<ac()*.42&&s>lc()*.3,t=new Map;Dr.addEventListener("touchstart",i=>{gt.resume();for(let s of i.changedTouches){let r=u0(s),o={identifier:s.identifier,target:s.target,clientX:r.x,clientY:r.y},a=o.target.closest&&o.target.closest(".b");if(a){i.preventDefault(),va(a.id,!0,o),t.set(o.identifier,{btn:a.id,x:o.clientX,y:o.clientY});continue}if(!Ce.joy&&n(o.clientX,o.clientY)){Ce.joy={id:o.identifier,x:o.clientX,y:o.clientY};let l=H("joyBase");l.classList.add("act"),l.style.left=o.clientX+"px",l.style.top=o.clientY+"px",t.set(o.identifier,{joy:!0})}else Ce.look||(Ce.look={id:o.identifier,x:o.clientX,y:o.clientY},t.set(o.identifier,{look:!0}))}},{passive:!1}),Dr.addEventListener("touchmove",i=>{i.preventDefault();for(let s of i.changedTouches){let r=u0(s),o={identifier:s.identifier,target:s.target,clientX:r.x,clientY:r.y},a=t.get(o.identifier);if(a){if(a.joy){let l=parseFloat(getComputedStyle(H("joyBase")).width)/2,c=(o.clientX-Ce.joy.x)/l,h=(o.clientY-Ce.joy.y)/l,u=Math.hypot(c,h);Ce.sprintLock=h<-1.45&&Math.abs(c)<.8,u>1&&(c/=u,h/=u),Ce.jx=c,Ce.jz=h,Ce.jmag=Math.min(1,u),H("joyKnob").style.transform=`translate(${c*l*.6}px,${h*l*.6}px)`,H("sprintLock").classList.toggle("on",Ce.sprintLock)}else if(a.look||a.btn==="fireR"||a.btn==="fireL"){let l=a.look?Ce.look:a,c=o.clientX-l.x,h=o.clientY-l.y;l.x=o.clientX,l.y=o.clientY,Ce.lookDX+=c,Ce.lookDY+=h}}}},{passive:!1});let e=i=>{for(let s of i.changedTouches){let r=u0(s),o={identifier:s.identifier,target:s.target,clientX:r.x,clientY:r.y},a=t.get(o.identifier);if(a){if(t.delete(o.identifier),a.joy){Ce.joy=null,Ce.jx=Ce.jz=Ce.jmag=0;let l=H("joyBase");l.classList.remove("act"),l.style.left="",l.style.top="",H("joyKnob").style.transform="",Ce.sprintLock}else if(a.look)Ce.look=null;else if(a.btn){let l=document.elementFromPoint(s.clientX,s.clientY);(a.btn==="fireR"||a.btn==="fireL")&&l&&l.closest&&l.closest("#fireX")&&(o.cancel=!0),va(a.btn,!1,o)}}}};Dr.addEventListener("touchend",e),Dr.addEventListener("touchcancel",e),Dr.addEventListener("mousedown",i=>{let s=i.target.closest(".b");if(s&&!document.pointerLockElement){va(s.id,!0,i);let r=()=>{va(s.id,!1,i),removeEventListener("mouseup",r)};addEventListener("mouseup",r)}})}function va(n,t,e){let i=xt;if(!i)return;let s=H(n);if(s&&s.classList.toggle("press",t),(n==="fireR"||n==="fireL")&&(t?(Ce.fireHeld=n,ut.fireMode==="tap"||i.adsToggle?cd():(i.adsWant=!0,i.fireOnRelease=!0)):Ce.fireHeld===n&&(Ce.fireHeld=null,i.fireOnRelease&&(i.fireOnRelease=!1,e&&e.cancel?gt.play("cloth",{vol:.3}):cd(),i.adsToggle||(i.adsWant=!1))),H("fireX").classList.toggle("hide",!(t&&i.fireOnRelease))),n==="fireX"){t&&Ce.fireHeld&&va(Ce.fireHeld,!1,{cancel:!0});return}if(!t){n==="actBtn"&&(i.wantAct=!1);return}gt.play("ui",{vol:.25}),n==="adsBtn"&&(i.adsToggle=!i.adsToggle,i.adsWant=i.adsToggle,H("adsBtn").classList.toggle("on",i.adsToggle)),n==="jumpBtn"&&x1(i),n==="crouchBtn"&&y1(i),n==="proneBtn"&&k0(i),n==="reloadBtn"&&fo(i),n==="tacBtn"&&Ur(i,i.st.tac),n==="letBtn"&&Ur(i,"axe"),n==="camBtn"&&M1(),n==="pauseBtn"&&W0(!0),n==="actBtn"&&(i.wantAct=!0,mo(i))}function cd(){let n=xt;if(n.alive){if(!F0(n)){n.mag<=0&&fo(n);return}B0(n,n.dir())}}function x1(n){if(!(!n.alive||!n.onGround||k.phase==="pre"||n.lostLeg[0]&&n.lostLeg[1])){if(n.stance!=="stand"){n.stance="stand";return}n.vel.y=5.4,n.onGround=!1,gt.play("cloth",{vol:.4})}}function y1(n){if(n.alive){if(n.sprint&&n.stance==="stand"&&Math.hypot(n.vel.x,n.vel.z)>4){n.slideT=.7,n.stance="crouch",n.slideDir.set(n.vel.x,0,n.vel.z).normalize(),gt.play("whoosh",{vol:.4});return}n.stance=n.stance==="crouch"?"stand":"crouch",gt.play("cloth",{vol:.35})}}function k0(n){if(!(!n.alive||n.lostLeg[0]&&n.lostLeg[1])){if(n.sprint&&n.stance==="stand"&&n.onGround&&Math.hypot(n.vel.x,n.vel.z)>4&&k.phase!=="pre"){n.diveT=.62,n.diveDir.set(n.vel.x,0,n.vel.z).normalize(),n.vel.x=n.diveDir.x*7.2,n.vel.z=n.diveDir.z*7.2,n.vel.y=3.4,n.onGround=!1,n.stance="prone",n.sprint=!1,n.adsWant=n.adsToggle,gt.play("whoosh",{vol:.5,rate:.85});return}n.stance=n.stance==="prone"?"stand":"prone",gt.play("cloth",{vol:.5})}}function M1(){ut.tpp=ut.tpp?0:1,_i(),H("camBtn").textContent=ut.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0",xt&&xt.setFirstPerson(!ut.tpp)}function aE(){addEventListener("keydown",n=>{if(k.phase==="lobby"||!xt)return;Ce.keys[n.code]=!0;let t=xt;n.code==="Space"&&x1(t),(n.code==="KeyC"||n.code==="ControlLeft")&&y1(t),n.code==="KeyZ"&&k0(t),n.code==="KeyR"&&fo(t),n.code==="KeyQ"&&Ur(t,t.st.tac),n.code==="KeyG"&&Ur(t,"axe"),n.code==="KeyV"&&M1(),(n.code==="KeyF"||n.code==="KeyE")&&(t.wantAct=!0,mo(t)),n.code==="Escape"&&W0(!0)}),addEventListener("keyup",n=>{Ce.keys[n.code]=!1,(n.code==="KeyF"||n.code==="KeyE")&&xt&&(xt.wantAct=!1)}),Pe.domElement.addEventListener("mousedown",n=>{if(gt.resume(),!(k.phase==="lobby"||!xt)){if(!document.pointerLockElement&&!Ai){Pe.domElement.requestPointerLock();return}n.button===0&&cd(),n.button===2&&(xt.adsWant=!0,Ce.rmb=!0)}}),Dr.addEventListener("mousedown",n=>{!Ai&&!n.target.closest(".b")&&k.phase!=="lobby"&&(document.pointerLockElement||Pe.domElement.requestPointerLock())}),addEventListener("mouseup",n=>{n.button===2&&xt&&(xt.adsWant=!1,Ce.rmb=!1)}),addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{document.pointerLockElement&&(Ce.lookDX+=n.movementX*.6,Ce.lookDY+=n.movementY*.6)}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement&&Dr.addEventListener("mousedown",v1)})}function v1(n){!document.pointerLockElement||!xt||(n.button===0&&cd(),n.button===2&&(xt.adsWant=!0))}addEventListener("mousedown",n=>{document.pointerLockElement&&n.target===document.body&&v1(n)});function lE(n){let t=xt,e=(t.ads>.5?ut.sensAds:ut.sens)*(Ai?.0042:.0026),i=Ce.lookDX,s=Ce.lookDY;Ce.lookDX=Ce.lookDY=0,t.alive&&!ri&&(t.yaw-=i*e,t.pitch=In(t.pitch-s*e,-1.35,1.35));let r=Ce.jx,o=Ce.jz,a=Ce.jmag,l=Ce.keys;if(l.KeyW||l.KeyA||l.KeyS||l.KeyD){r=(l.KeyD?1:0)-(l.KeyA?1:0),o=(l.KeyS?1:0)-(l.KeyW?1:0);let g=Math.hypot(r,o)||1;r/=g,o/=g,a=l.AltLeft?.4:1}let c=(Ce.sprintLock||l.ShiftLeft)&&t.stamina>.05&&o<-.5&&t.stance==="stand"&&t.ads<.3&&t.boltT<=0&&t.reloadT<=0;t.sprint=c,c&&t.adsWant&&!t.fireOnRelease&&(t.adsWant=!1);let h=new pt(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),d=new pt(Math.cos(t.yaw),0,-Math.sin(t.yaw)).multiplyScalar(r).add(h.multiplyScalar(-o));t.alive&&m1(t,{x:d.x,z:d.z,mag:a,sprint:c},n),rE(n,i,s);let f=k.bomb,p=null;if(t.alive&&k.phase==="live"&&f.carrier===t)for(let g of["A","B"])t.pos.distanceTo(We[g])<2.4&&(p="\u8A2D\u7F6E");t.alive&&k.phase==="planted"&&t.team!==k.attack&&t.pos.distanceTo(f.pos)<2&&(p="\u89E3\u9664"),H("actBtn").classList.toggle("hide",!p),p&&(H("actBtn").textContent=p),b0>0?b0-=n:Ai?H("tip").classList.add("hide"):(H("tip").classList.toggle("hide",!p),p&&(H("tip").textContent=`F\u9577\u62BC\u3057\u3067${p}`)),H("bombHave").classList.toggle("hide",f.carrier!==t),t.wantAct&&!f.planting&&!f.defusing&&p&&mo(t)}function cE(n,t){if(k.mode==="range"&&!n.isPlayer&&!n.alive){n.reviveT-=t,n.reviveT<=0&&qb(n);return}n.sprint?(n.stamina=Math.max(0,n.stamina-t),n.sprintOutT=n.st.sprintOut):(n.stamina=Math.min(n.st.stamina,n.stamina+t*.8),n.sprintOutT>0&&(n.sprintOutT-=t));let i=n.targetEye()-n.eyeH,s=(n.stance==="prone"||n.eyeH<.8?1.6:2.6)*t,r=n.slideT>0||n.diveT>0;n.eyeH+=Math.abs(i)<=s||r?i*(r?Math.min(1,t*(n.diveT>0?7:14)):1):Math.sign(i)*s,n.stanceT=Math.abs(n.targetEye()-n.eyeH)>.12&&n.slideT<=0||n.diveT>0?.1:0;let o=n.adsWant&&n.alive&&n.boltT<=0&&n.reloadT<=0&&!n.sprint&&n.sprintOutT<=0&&n.stanceT<=0&&!(n.kickedOut&&n.boltT>0),a=n.ads;if(n.ads=In(n.ads+(o?t/n.st.ads:-t/.18),0,1),n.isPlayer&&a===0&&n.ads>0&&gt.play("cloth",{vol:.35,rate:1.3}),n.boltT>0){if(n.boltT-=t,n.isPlayer||n.pos.distanceTo(xt.pos)<25){let c=1-n.boltT/n.st.bolt;c>.25&&n.boltPlayed===0&&(n.boltPlayed=1,gt.play("bolt1",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3})),c>.6&&n.boltPlayed===1&&(n.boltPlayed=2,gt.play("bolt2",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3}),hE(n))}n.boltT<=0&&(n.boltT=0,n.kickedOut=!1,n.mag===0&&fo(n))}if(n.reloadT>0&&(n.reloadT-=t,n.reloadT<=0)){let c=Math.min(n.st.mag-n.mag,n.reserve);n.mag+=c,n.reserve-=c,n.reloadT=0}n.revealT>0&&(n.revealT-=t),n.alive&&n.hp<100&&(n.hurtT=(n.hurtT||0)+t,n.hurtT>5&&(n.hp=Math.min(100,n.hp+60*t)));let l=n.veg;l.root.position.set(n.pos.x,n.pos.y,n.pos.z),n.alive&&l.root.rotation.set(0,n.yaw,0),l.speed=Math.hypot(n.vel.x,n.vel.z)*(n.onGround?1:.3),l.run=n.sprint?1:0,l.crouch=Cs(l.crouch,n.stance==="crouch"||n.slideT>0?1:0,7,t),l.prone=Cs(l.prone,n.stance==="prone"?1:0,n.diveT>0?9:3.2,t),l.pitch=n.pitch,l.ads=n.ads,l.air=n.onGround?0:1,l.recoil=Cs(l.recoil,0,10,t),l.boltT=n.boltT>0?Math.sin((1-n.boltT/n.st.bolt)*Math.PI):0,n.lostArm[0]&&n.lostArm[1]&&(l.aim.visible=!1),l.update(t),l.gun.setBolt(n.boltT>0?In((1-n.boltT/n.st.bolt-.15)/.75,0,1):0)}function hE(n){let t=Pg(),e,i;n.isPlayer&&!ut.tpp?e=n.eye().add(n.dir().multiplyScalar(.5)).add(new pt(Math.cos(n.yaw)*.15,-.15,-Math.sin(n.yaw)*.15)):e=n.veg.gun.ejectPt.getWorldPosition(new pt),i=new pt(Math.cos(n.yaw)*2.2,2,-Math.sin(n.yaw)*2.2),t.position.copy(e),Wt.add(t),Ea(t,i,new pt(20,5,10),{r:.008})}var g0=0,Ku=0,ya=0,Qg=74;function uE(n){if(ut.killcam&&Qs&&Qs.t>0&&!xt.alive&&k.phase!=="post"){Qs.t-=n;let o=Qs.by;if(o){let a=o.eye();xe.position.copy(Qs.at).add(new pt(0,.3,0));let l=new pt().subVectors(a,xe.position),c=Math.atan2(-l.x,-l.z),h=Math.atan2(l.y,Math.hypot(l.x,l.z));xe.rotation.set(h,c,0);let u=In(2.8-Qs.t,0,1),d=sc(Qg,In(800/Math.max(5,l.length()),12,60),u);xe.fov=d,xe.updateProjectionMatrix(),H("kcam").classList.remove("hide"),H("kcamN").textContent=`${o.name}\uFF08HP ${Math.max(0,Math.round(o.hp))}\uFF09`,H("scope").style.display="none",H("cross").style.display="none",gt.listener.x=xe.position.x,gt.listener.z=xe.position.z,gt.listener.yaw=c;return}}H("kcam").classList.add("hide");let t=xt,e=ut.tpp;if(ri&&(!xt.alive||k.phase==="post")&&(t=(ri.alive,ri),e=!0,!t.alive)){let o=pe.find(a=>a.team===xt.team&&a.alive);o&&(ri=t=o)}let i=t.eye(),s=t===xt?t.ads:0;if(e&&s<.85){let o=t.stance==="prone"?2:2.6,a=t.dir(),l=new pt(Math.cos(t.yaw),0,-Math.sin(t.yaw)),c=i.clone().add(new pt(0,.32,0)).addScaledVector(l,.8),h=a.clone().multiplyScalar(-o),u=uo(c,h.clone().normalize(),o+.3),d=u?Math.max(.3,u.t-.3):o;xe.position.copy(c).addScaledVector(h.normalize(),d),xe.rotation.set(t.pitch,t.yaw,0)}else if(xe.position.copy(i),xe.rotation.set(t.pitch,t.yaw,0),t===xt){let o=Math.hypot(t.vel.x,t.vel.z)*(t.onGround?1:0)*(1-t.ads);g0+=n*o*1.9;let a=Math.min(1,o/5)*.035;xe.position.y+=Math.abs(Math.sin(g0))*a-Ku,xe.rotation.z=Math.sin(g0)*a*.12,t.onGround?(ya>.25&&(Ku=.08*ya),ya=0):ya=Math.min(ya+n,1),Ku=Cs(Ku,0,8,n)}if(t===xt&&t.ads>.5){let o=k.time,a=(t.st.stanceSway?t.stance==="prone"?6e-4:t.stance==="crouch"?.0015:.0026:.0022)*(1+Math.min(2,Math.hypot(t.vel.x,t.vel.z)))*t.st.sway;xe.rotation.x+=Math.sin(o*1.3)*a+Math.sin(o*2.7)*a*.4,xe.rotation.y+=Math.cos(o*.9)*a*1.2}As>0&&(As=Math.max(0,As-n),xe.rotation.x+=(Math.random()-.5)*As*.04,xe.rotation.y+=(Math.random()-.5)*As*.04),t===xt&&Zt.kick>.05&&(xe.rotation.x+=Zt.kick*.03);let r=sc(Qg,13,Math.pow(s,1.5));Math.abs(xe.fov-r)>.01&&(xe.fov=r,xe.updateProjectionMatrix()),gt.listener.x=xe.position.x,gt.listener.y=xe.position.y,gt.listener.z=xe.position.z,gt.listener.yaw=t.yaw,H("scope").style.display=s>.88&&t===xt?"block":"none",H("cross").style.display=s>.3||!xt.alive?"none":"block"}var E0=new Map;function dE(){for(let n of pe){let t=E0.get(n);t||(t=new Vo(new qr({map:o1,transparent:!0,blending:Xs,depthWrite:!1,depthTest:!0,fog:!1})),Wt.add(t),E0.set(n,t));let e=n.alive&&!n.isPlayer&&n.ads>.6&&!n.veg.dead;if(t.visible=!1,!e)continue;let i=n.veg.gun.lens.getWorldPosition(new pt),s=new pt().subVectors(xe.position,i),r=s.length();s.normalize();let o=n.dir().dot(s);o<.85||(t.visible=!0,t.position.copy(i).addScaledVector(s,.05),t.scale.setScalar(In(r*.035,.25,2.5)*(.8+Math.random()*.3)*(o-.8)*4))}}var w0=H("minimap"),fE=w0.getContext("2d"),S0=[];function _1(){S0.length=0;for(let n of en.mm)S0.push(n)}function pE(){let n=w0.width,t=w0.height,e=fE,i=xt.alive||!ri?xt:ri;e.clearRect(0,0,n,t),e.save(),e.beginPath(),e.roundRect?e.roundRect(0,0,n,t,16):e.rect(0,0,n,t),e.clip(),e.fillStyle="rgba(40,60,40,.55)",e.fillRect(0,0,n,t);let s=n/46;e.translate(n/2,t/2),e.rotate(i.yaw),e.scale(s,s),e.translate(-i.pos.x,-i.pos.z),e.fillStyle="rgba(60,60,64,.9)",e.fillRect(-40,-4,80,8),e.fillStyle="rgba(150,150,140,.8)",e.fillRect(-40,-5.7,80,1.7),e.fillRect(-40,4,80,1.7);for(let a of S0)e.fillStyle=a[4],e.fillRect(a[0],a[1],a[2]-a[0],a[3]-a[1]);e.strokeStyle="rgba(255,255,255,.3)",e.lineWidth=.3,e.strokeRect(re.minX,re.minZ,re.maxX-re.minX,re.maxZ-re.minZ);for(let a of["A","B"]){let l=We[a];e.fillStyle="rgba(255,200,40,.35)",e.beginPath(),e.arc(l.x,l.z,2.4,0,7),e.fill(),e.save(),e.translate(l.x,l.z),e.rotate(-i.yaw),e.fillStyle="#ffd040",e.font="bold 3px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(a,0,0),e.restore()}let r=k.bomb;(r.state==="dropped"||r.state==="planted"||r.state==="carried"&&r.carrier&&r.carrier.team===xt.team)&&(e.save(),e.translate(r.pos.x,r.pos.z),e.rotate(-i.yaw),e.fillStyle=r.state==="planted"?Math.floor(k.time*4)%2?"#ff3020":"#ffd040":"#ffa020",e.fillRect(-1,-.7,2,1.4),e.restore());for(let a of pe){if(!a.alive)continue;let l=a.team===xt.team;!l&&a.revealT<=0&&!(a.ai&&a.ai.target===xt&&a.ads>.5&&!1)||(e.save(),e.translate(a.pos.x,a.pos.z),e.rotate(-a.yaw),a===xt?(e.fillStyle="#ffe060",e.beginPath(),e.moveTo(0,-1.8),e.lineTo(1.2,1.2),e.lineTo(0,.5),e.lineTo(-1.2,1.2),e.closePath(),e.fill()):(e.fillStyle=l?"#4aa8ff":"#ff4030",e.beginPath(),e.arc(0,0,1,0,7),e.fill(),l&&(e.beginPath(),e.moveTo(0,-2),e.lineTo(.7,-.6),e.lineTo(-.7,-.6),e.fill())),e.restore())}e.restore(),e.fillStyle="rgba(255,255,255,.7)",e.font="bold 20px sans-serif",e.textAlign="center";let o=i.yaw;e.save(),e.translate(n/2,t/2),e.rotate(o),e.fillText("N",0,-t/2+22),e.restore()}function mE(n){let t=xt;Dr.classList.toggle("dead",!t.alive);let e=Math.max(0,(k.phase==="pre",k.timer)),i=Math.floor(e/60),s=Math.floor(e%60);H("timer").textContent=k.mode==="range"?"\u221E":k.phase==="pre"?Math.ceil(e)+"":`${i}:${String(s).padStart(2,"0")}`,H("timer").classList.toggle("bomb",k.phase==="planted"),H("amC").textContent=t.mag,H("amR").textContent=t.reserve,H("amS").textContent=t.reloadT>0?"\u30EA\u30ED\u30FC\u30C9\u4E2D\u2026":t.boltT>0?"\u30DC\u30EB\u30C8\u64CD\u4F5C\u4E2D\u2026":t.st.name,H("hpf").style.width=Math.max(0,t.hp)+"%",H("hpf").classList.toggle("low",t.hp<50);let r=pe.filter(c=>c.team===0),o=pe.filter(c=>c.team===1),a=(c,h)=>H(c).classList.toggle("dead",!(h&&h.alive));a("ia0",r[0]),a("ia1",r[1]),a("ie0",o[0]),a("ie1",o[1]),ju>0&&(ju-=n,ju<=0&&(H("killnote").innerHTML="")),tc>0&&(tc-=n,tc<=0&&(H("cmsg").textContent="",H("csub").textContent="")),td>0&&(td-=n,H("hitmark").style.opacity=Math.max(0,td/.25)),k.phase==="pre"&&(H("cmsg").textContent=Math.ceil(k.timer)<=3?Math.ceil(k.timer):`\u30E9\u30A6\u30F3\u30C9 ${k.round}`,tc=.2),pE(),xE();let l="";if(xt.alive){let c=xe.position,h=new pt(0,0,-1).applyQuaternion(xe.quaternion),u=uo(c,h,150),d=u?u.t:150;for(let f of pe)if(!(f.team===xt.team||!f.alive)){for(let p of f.veg.computeHitSpheres()){let g=D0(c,h,p.c,p.r*1.6);if(g>0&&g<d){l=f.name;break}}if(l)break}}H("aimName").textContent=l}var T0=new Map;function gE(n,t,e,i){let s=T0.get(n);s||(s=document.createElement("div"),H("marks").appendChild(s),T0.set(n,s));let r=i.clone().project(xe),o=r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1;s.style.display=o?"block":"none",o&&(s.className="mk "+t,s._h!==e&&(s.innerHTML=e,s._h=e),s.style.left=(r.x+1)/2*100+"%",s.style.top=(1-r.y)/2*100+"%")}function xE(){let n=new Set,t=xt.alive||!ri?xt:ri,e=xt.ads>.88,i=(o,...a)=>{n.add(o),e||gE(o,...a)};for(let o of pe)o!==xt&&o!==ri&&o.team===xt.team&&o.alive&&i("n"+o.name,"ally",`${o.name}<span class="ar"></span>`,o.eye().add(new pt(0,.55,0)));let s=k.bomb,r=o=>Math.round(o.distanceTo(t.pos))+"m";if(k.phase==="live"&&(s.carrier===xt||xt.team!==k.attack||s.carrier?.team===xt.team))for(let o of["A","B"])i("s"+o,"site",`<i>${o}</i><small>${r(We[o])}</small>`,We[o].clone().add(new pt(0,2.2,0)));s.state==="planted"&&i("bomb","bomb",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new pt(0,1.2,0))),s.state==="dropped"&&xt.team===k.attack&&i("bombd","bomb drop",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new pt(0,1,0)));for(let[o,a]of T0)(!n.has(o)||e||k.phase==="post")&&(a.style.display="none")}function yE(){Ts||(Ts=Qb(),Wt.add(Ts));let n=k.bomb;if(Ts.visible=n.state==="dropped"||n.state==="planted"||n.state==="defused"||!!n.planting,n.planting&&n.state!=="planted"){let t=n.planting;t.stance="crouch";let e=new pt(-Math.sin(t.yaw),0,-Math.cos(t.yaw));n.pos.copy(t.pos).addScaledVector(e,.55),n.pos.y=hs(n.pos.x,n.pos.z,t.pos.y+.3)}n.defusing&&(n.defusing.stance="crouch"),Ts.visible&&(Ts.position.copy(n.pos),Ts.userData.scr.material.color.setHex(n.state==="planted"&&Math.floor(k.time*(n.fuse<6?8:2))%2?16724e3:4198416),n.state==="dropped"&&(Ts.rotation.y+=.02))}var Ti=null,x0=0,Lr={look:.6,dist:2.9,side:-1.2,shift:.2},wa=["carrot","tomato","potato","pepper"],ME={carrot:"\u7D30\u8EAB\u3067\u982D\u304C\u5C0F\u3055\u3044",tomato:"\u307E\u3093\u307E\u308B\u3002\u3064\u3084\u3064\u3084",potato:"\u305A\u3063\u3057\u308A\u3002\u3067\u3053\u307C\u3053",pepper:"\u3064\u3084\u3064\u3084\u306E\u7DD1"};function dc(){window.VW_INGAME=!1,W.on&&(W.on=!1),H("againBtn").textContent=W.room?"\u90E8\u5C4B\u306B\u623B\u308B":"\u3082\u3046\u4E00\u5EA6",k.phase="lobby";for(let n of pe)n.dispose();pe=[],xt=null,U0(),Ts&&(Ts.visible=!1);for(let n of E0.values())n.visible=!1;if(H("hud").classList.add("hide"),H("ctl").classList.add("hide"),H("lobby").classList.remove("hide"),H("result").classList.add("hide"),H("pause").classList.add("hide"),H("helpTxt").innerHTML=Ai?"\u5DE6\u5074\u3092\u306A\u305E\u3063\u3066\u79FB\u52D5\uFF08\u4E0A\u306B\u5012\u3057\u304D\u308B\u3068\u30C0\u30C3\u30B7\u30E5\uFF09<br>\u53F3\u5074\u3092\u306A\u305E\u3063\u3066\u8996\u70B9<br>\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F\u30FB\u96E2\u3059\u3068\u767A\u5C04<br>\u6483\u3061\u305F\u304F\u306A\u3044\u6642\u306F\u300C\xD7\u6483\u305F\u306A\u3044\u300D\u306E\u4E0A\u3067\u6307\u3092\u96E2\u3059<br>\u30C0\u30C3\u30B7\u30E5\u4E2D\u306B\u4F0F\u305B\u308B\u3068\u98DB\u3073\u8FBC\u307F<br>\u53F3\u306E\u7167\u6E96\u30DC\u30BF\u30F3\uFF1A\u8997\u304D\u3063\u3071\u306A\u3057\u306B\u5207\u66FF<br>\u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09\u30FB\u4F0F\u305B\u30FB\u30B8\u30E3\u30F3\u30D7<br>\u30B5\u30A4\u30C8\u3067\u300C\u8A2D\u7F6E\u300D\u300C\u89E3\u9664\u300D\u3092\u9577\u62BC\u3057":"WASD \u79FB\u52D5 / Shift \u30C0\u30C3\u30B7\u30E5 / Alt \u305D\u30FC\u3063\u3068\u6B69\u304F<br>\u30DE\u30A6\u30B9 \u8996\u70B9 / \u5DE6\u30AF\u30EA\u30C3\u30AF \u6483\u3064 / \u53F3\u30AF\u30EA\u30C3\u30AF \u8997\u304F<br>Space \u30B8\u30E3\u30F3\u30D7 / C \u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09 / Z \u4F0F\u305B\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u98DB\u3073\u8FBC\u307F\uFF09<br>R \u30EA\u30ED\u30FC\u30C9 / F \u9577\u62BC\u3057\u3067\u8A2D\u7F6E\u30FB\u89E3\u9664 / V \u8996\u70B9\u5207\u66FF",Fr(),gt.bgm(!1),typeof jg=="function")try{jg()}catch{}}function Fr(){Ti&&Wt.remove(Ti.root),Ti=new Pr(ut.kind,0,{lod:1,hat:ut.hat,camo:ut.camo,lo:ut.lo}),Wt.add(Ti.root),H("hatName").textContent=Ir.find(e=>e.id===ut.hat).name,H("camoName").textContent=fa.find(e=>e.id===ut.camo).name;let[n,t]=en.lobby;Ti.root.position.set(n,.15+(en.id==="town"?0:-.13),t),H("charName").innerHTML=`${si[ut.kind]}<small>${ME[ut.kind]}</small>`}function vE(n){x0+=n;let t=Ti;if(!t)return;t.root.rotation.y=Math.PI+.5+Math.sin(x0*.4)*.25,t.speed=0,t.pitch=-.15+Math.sin(x0*.7)*.03,t.run=0,t.ads=0,t.update(n);let[e,i]=en.lobby;xe.position.set(e+Lr.side,1.2,i+Lr.dist),xe.lookAt(e+Lr.look,1,i),Lr.fix&&(xe.position.set(...Lr.fix[0]),xe.lookAt(...Lr.fix[1]));{let s=ac(),r=lc();xe.setViewOffset(s,r,-s*Lr.shift,0,s,r)}Math.abs(xe.fov-50)>.01&&(xe.fov=50,xe.updateProjectionMatrix())}H("prevC").onclick=()=>{ut.kind=wa[(wa.indexOf(ut.kind)+3)%4],_i(),Fr(),gt.resume(),gt.play("ui")};H("nextC").onclick=()=>{ut.kind=wa[(wa.indexOf(ut.kind)+1)%4],_i(),Fr(),gt.resume(),gt.play("ui")};var dd=(n,t,e)=>{let i=n.findIndex(s=>s.id===ut[t]);ut[t]=n[(i+e+n.length)%n.length].id,_i(),Fr(),gt.resume(),gt.play("ui")};H("hatP").onclick=()=>dd(Ir,"hat",-1);H("hatN").onclick=()=>dd(Ir,"hat",1);H("camoP").onclick=()=>dd(fa,"camo",-1);H("camoN").onclick=()=>dd(fa,"camo",1);var Ae={r:null,scene:null,cam:null,gun:null,key:"",t:0,on:!1};function _E(){let n=H("loPrev");if(!n)return;if(!Ae.r){Ae.r=new Cl({antialias:!0,alpha:!0}),Ae.r.outputColorSpace=Mn,Ae.r.toneMapping=qs,Ae.r.setPixelRatio(Math.min(devicePixelRatio,2)),n.appendChild(Ae.r.domElement),Ae.scene=new Vs,Ae.scene.add(new Qr(14674175,4208688,1.4));let e=new xr(16773344,2.6);e.position.set(1.5,2,1.2),Ae.scene.add(e);let i=new xr(10139903,1.2);i.position.set(-2,.5,-1.5),Ae.scene.add(i),Wt.environment&&(Ae.scene.environment=Wt.environment),Ae.cam=new kn(30,2,.01,20),Ae.cam.position.set(0,.1,1.75),Ae.cam.lookAt(0,0,0)}let t=ut.camo+JSON.stringify(ut.lo);if(t!==Ae.key){Ae.key=t,Ae.gun&&Ae.scene.remove(Ae.gun);let e=pa(1,ut.camo,ut.lo);Ae.gun=new Et,e.root.position.set(0,0,.1),Ae.gun.add(e.root),Ae.gun.scale.setScalar(1.6),Ae.scene.add(Ae.gun)}if(!Ae.on){Ae.on=!0;let e=()=>{if(H("loM").classList.contains("hide")){Ae.on=!1;return}requestAnimationFrame(e);let i=n.clientWidth,s=n.clientHeight;i&&s&&(Ae.r.domElement.width!==Math.round(i*Ae.r.getPixelRatio())&&(Ae.r.setSize(i,s,!1),Ae.cam.aspect=i/s,Ae.cam.updateProjectionMatrix()),Ae.t+=.012,Ae.gun.rotation.y=Math.PI/2+Math.sin(Ae.t)*.6,Ae.gun.rotation.x=Math.sin(Ae.t*.7)*.08,Ae.r.render(Ae.scene,Ae.cam))};requestAnimationFrame(e)}}function fc(){let n=ut.lo,t=ls[n.rifle];H("loName").textContent=t.name,H("loName2")&&(H("loName2").textContent=t.name);let e=n.att.map(s=>Jl.find(r=>r.id===s).name).join("\u30FB")||"\u30A2\u30BF\u30C3\u30C1\u30E1\u30F3\u30C8\u306A\u3057",i=n.perks.map((s,r)=>(Kl[r].find(o=>o.id===s)||Kl[r][0]).name).filter(s=>s!=="\u306A\u3057").join("\u30FB")||"\u30D1\u30FC\u30AF\u306A\u3057";H("loSub").innerHTML=`${e}<br>${i}`,H("modeTxt").innerHTML=`\u547D\u306F1\u30E9\u30A6\u30F3\u30C91\u3064\u3002<br>\u7206\u5F3E\u306E\u7206\u7834\u304B\u3001\u6575\u306E\u5168\u6EC5\u3067\u52DD\u3061\u3002<br>${ut.winR}\u30E9\u30A6\u30F3\u30C9\u5148\u53D6\u30FB${ut.swap===1?"\u6BCE\u30E9\u30A6\u30F3\u30C9":ut.swap+"\u30E9\u30A6\u30F3\u30C9\u3054\u3068\u306B"}\u653B\u5B88\u4EA4\u4EE3\u3002`}function _a(n){let t=ut.lo;H("rifleList").innerHTML=Object.values(ls).map(e=>`<div class="rf${t.rifle===e.id?" on":""}" data-r="${e.id}"><b>${e.name}</b><small>${e.tag}\u30FB\u5F3E${e.mag}\u767A<br>${e.spec}</small><div class="bars">${Object.entries(e.stats).map(([i,s])=>`<span>${i}</span><i><u style="width:${s*20}%"></u></i>`).join("")}</div></div>`).join(""),H("rifleList").querySelectorAll(".rf").forEach(e=>e.onclick=()=>{t.rifle=e.dataset.r,_i(),gt.play("ui"),_a(ls[t.rifle].desc),Fr()}),H("attCnt").textContent=`${t.att.length}/2`,H("attList").innerHTML=Jl.map(e=>{let i=t.att.includes(e.id),s=!i&&(t.att.length>=2||e.ex&&t.att.includes(e.ex));return`<button data-a="${e.id}" class="${i?"on":s?"no":""}">${e.name}</button>`}).join(""),H("attList").querySelectorAll("button").forEach(e=>e.onclick=()=>{let i=e.dataset.a,s=Jl.find(o=>o.id===i),r=t.att.indexOf(i);r>=0?t.att.splice(r,1):(s.ex&&t.att.includes(s.ex)&&t.att.splice(t.att.indexOf(s.ex),1),t.att.length>=2&&t.att.shift(),t.att.push(i)),_i(),gt.play("ui"),_a(s.name+"\uFF1A"+s.desc+(s.ex?`
\u203B${Jl.find(o=>o.id===s.ex).name}\u3068\u306F\u540C\u6642\u306B\u4ED8\u3051\u3089\u308C\u307E\u305B\u3093\u3002`:""))});for(let[e,i,s]of[["tacList",Vg,"tac"],["letList",Wg,"let"]])H(e).innerHTML=i.map(r=>`<button data-x="${r.id}" class="${(t[s]||"none")===r.id?"on":""}">${r.name}</button>`).join(""),H(e).querySelectorAll("button").forEach(r=>r.onclick=()=>{t[s]=r.dataset.x,_i(),gt.play("ui");let o=i.find(a=>a.id===r.dataset.x);_a(o.desc?o.name+"\uFF1A"+o.desc:"")});[0,1,2].forEach(e=>{H("perk"+e).innerHTML=Kl[e].map(i=>`<button data-p="${i.id}" class="${t.perks[e]===i.id?"on":""}">${i.name}</button>`).join(""),H("perk"+e).querySelectorAll("button").forEach(i=>i.onclick=()=>{t.perks[e]=i.dataset.p,_i(),gt.play("ui");let s=Kl[e].find(r=>r.id===i.dataset.p);_a(s.desc?s.name+"\uFF1A"+s.desc:"")})}),n!==void 0&&(H("loDesc").textContent=n),fc(),_E()}(!ut.lo||!ls[ut.lo.rifle])&&(ut.lo=JSON.parse(JSON.stringify(a0)));ut.lo.tac===void 0&&(ut.lo.tac="smoke");ut.lo.let===void 0&&(ut.lo.let="axe");H("loCard").onclick=()=>{gt.resume(),gt.play("ui"),_a(ls[ut.lo.rifle].desc),H("loM").classList.remove("hide")};H("loClose").onclick=()=>{H("loM").classList.add("hide"),_i(),fc(),Fr(),ud()};fc();function G0(){let n=Fi[ut.map]||en;H("mapName").textContent=n.name,H("mapDesc").textContent=n.desc}G0();H("mapChip").onclick=()=>{if(W.room){pc();return}let n=Object.keys(Fi);ut.map=n[(n.indexOf(ut.map)+1)%n.length],_i(),gt.play("ui"),G0(),H("ldTxt").textContent=`\u30DE\u30C3\u30D7\u300C${Fi[ut.map].name}\u300D\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026`,H("loading").classList.remove("hide"),setTimeout(()=>location.reload(),150)};var Ye=Ju();function jg(){Ye=Ju();let n=Ss(Ye.rp);H("rankChip").innerHTML=`${xa(n.tier.id,34,n.div)}<span>${n.label}\u3000${Ye.rp} RP</span>`,H("mRankSub").textContent=`${n.label}\u30FB\u53C2\u52A0\u8CBB ${n.tier.fee} RP\u30FB8\u30E9\u30A6\u30F3\u30C9\u5148\u53D6`,H("loName2").textContent=ls[ut.lo.rifle].name}function bE(n,t){H("infoT").textContent=n,H("infoB").innerHTML=t,H("infoM").classList.remove("hide")}H("infoClose").onclick=()=>H("infoM").classList.add("hide");function z0(n){ut.homeMode=n,_i(),H("mCasual").classList.toggle("sel",n==="casual"),H("mRank").classList.toggle("sel",n==="rank");let t=Fi[ut.map]||en;H("goSub").textContent=`${n==="rank"?"\u30E9\u30F3\u30AF":"\u30AB\u30B8\u30E5\u30A2\u30EB"}\u30FB${t.name}`}H("mCasual").onclick=()=>{gt.resume(),gt.play("ui"),z0("casual")};H("mRank").onclick=()=>{gt.resume(),gt.play("ui"),z0("rank")};H("goBtn").onclick=()=>V0(ut.homeMode==="rank"?"rank":"casual");H("skinBtn").onclick=()=>{gt.resume(),gt.play("ui");let n=H("loadout").classList.toggle("hide");H("skinBtn").classList.toggle("on",!n)};z0(ut.homeMode==="rank"?"rank":"casual");H("mRange").onclick=()=>V0("range");H("mLoad").onclick=()=>{gt.resume(),gt.play("ui"),_a(ls[ut.lo.rifle].desc),H("loM").classList.remove("hide")};H("mFriend").onclick=()=>{gt.resume(),gt.play("ui"),pc()};H("mCareer").onclick=()=>{gt.play("ui"),Ye=Ju();let n=Ss(Ye.rp),t=Ss(Ye.best),e=Ye.badges.length?Ye.badges.map(i=>`<div>${xa(i.tier,54)}<br>${c0(i.season)}<br>${cs.find(s=>s.id===i.tier).name}</div>`).join(""):'<div style="opacity:.7">\u307E\u3060\u30B7\u30FC\u30BA\u30F3\u30D0\u30C3\u30B8\u306F\u3042\u308A\u307E\u305B\u3093\u3002<br>\u30B7\u30FC\u30BA\u30F3\u304C\u7D42\u308F\u308B\u3068\u3001\u305D\u306E\u6708\u306B\u5C4A\u3044\u305F\u4E00\u756A\u9AD8\u3044\u6BB5\u968E\u306E\u30D0\u30C3\u30B8\u304C\u3082\u3089\u3048\u307E\u3059\u3002</div>';bE("\u30AD\u30E3\u30EA\u30A2",`<div class="loGrid"><div><div class="rkHead">${xa(n.tier.id,80,n.div)}<div><div class="nm">${n.label}</div><small>${c0(Ye.season)}\u30FB\u6700\u9AD8 ${t.label}</small><div class="rkBar"><i style="width:${n.progress*100}%"></i></div><small>${Ye.rp} RP\uFF08\u6B21\u307E\u3067 ${Math.max(0,n.hi-Ye.rp)} RP\uFF09</small></div></div>
  <div class="rpList">\u30E9\u30F3\u30AF\u8A66\u5408 ${Ye.games}\u3000\u52DD\u5229 ${Ye.wins}\u3000\u30AD\u30EB ${Ye.kills}</div>
  <h4 style="margin:calc(1*var(--vh)) 0 calc(.3*var(--vh));color:#aab">\u30B7\u30FC\u30BA\u30F3\u30D0\u30C3\u30B8</h4><div class="tiers">${e}</div></div>
  <div><h4 style="margin:0 0 calc(.3*var(--vh));color:#aab">\u6BB5\u968E\u3068\u30DD\u30A4\u30F3\u30C8\u306E\u4ED5\u7D44\u307F</h4><div class="tiers">${cs.map(i=>`<div>${xa(i.id,44)}<br>${i.name}<br>${i.min}\u301C</div>`).join("")}</div>
  <div class="rpList" style="margin-top:calc(1*var(--vh))">\u52DD\u5229 +100\uFF0F\u53D6\u3063\u305F\u30E9\u30A6\u30F3\u30C9 1\u3064 +10\uFF0F\u30AD\u30EB +12\uFF0F\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8 +4\uFF0FMVP +20<br>\u8A66\u5408\u3054\u3068\u306B\u53C2\u52A0\u8CBB\uFF08\u30EB\u30FC\u30AD\u30FC0\u301C\u30D9\u30B8\u30AD\u30F3\u30B075\uFF09\u3092\u5F15\u304D\u307E\u3059\u3002<br>\u6BB5\u968E\u306E\u4E00\u756A\u4E0B\u3088\u308A\u4E0B\u306B\u306F\u843D\u3061\u307E\u305B\u3093\u3002<br>\u6BCE\u6708\u65B0\u3057\u3044\u30B7\u30FC\u30BA\u30F3\u3002\u59CB\u307E\u308B\u3068\u5C11\u3057\u4E0B\u306E\u6BB5\u968E\u304B\u3089\u518D\u30B9\u30BF\u30FC\u30C8\u3002</div></div></div>`)};async function V0(n){k.mode=n,await gt.init(),gt.resume(),gt.play("ui"),Ti&&(Wt.remove(Ti.root),Ti=null),xe.clearViewOffset(),H("lobby").classList.add("hide"),H("hud").classList.remove("hide"),H("ctl").classList.remove("hide"),H("camBtn").textContent=ut.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0";try{Ai&&document.documentElement.requestFullscreen&&!document.fullscreenElement&&await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}Ai||Pe.domElement.requestPointerLock(),u1(),ut.bgm&&n!=="range"&&gt.bgm(!0),gt.wind(!0)}H("startBtn").onclick=()=>V0("casual");H("againBtn").onclick=()=>{if(W.on){H("result").classList.add("hide"),dc(),pc();return}H("result").classList.add("hide"),H("ctl").classList.remove("hide"),u1(),ut.bgm&&gt.bgm(!0)};H("setBtn").onclick=()=>H("settings").classList.remove("hide");H("toLobby").onclick=()=>dc();function W0(n){n?(k.paused=!0,H("pause").classList.remove("hide"),document.pointerLockElement&&document.exitPointerLock()):(k.paused=!1,H("pause").classList.add("hide"),!Ai&&xt&&Pe.domElement.requestPointerLock())}H("resumeBtn").onclick=()=>W0(!1);H("quitBtn").onclick=()=>{k.paused=!1,gt.wind(!1),W.on&&A1(),dc()};H("pSetBtn").onclick=()=>H("settings").classList.remove("hide");H("setBtn").onclick=()=>H("settings").classList.remove("hide");H("setClose").onclick=()=>{H("settings").classList.add("hide"),_i()};H("sens").value=ut.sens;H("sensAds").value=ut.sensAds;H("sens").oninput=n=>ut.sens=+n.target.value;H("sensAds").oninput=n=>ut.sensAds=+n.target.value;function Br(n,t,e){let i=H(n);i.querySelectorAll("button").forEach(s=>{s.classList.toggle("on",String(ut[t])===s.dataset.v),s.onclick=()=>{ut[t]=isNaN(+s.dataset.v)?s.dataset.v:+s.dataset.v,i.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r===s)),_i(),e&&e()}})}Br("fireMode","fireMode");Br("winR","winR",fc);Br("swapSeg","swap",fc);Br("kcSeg","killcam");Br("lfSeg","leftFire",g1);Br("diff","diff");Br("bgmSeg","bgm",()=>{k.phase!=="lobby"&&gt.bgm(!!ut.bgm)});Br("quality","quality",()=>{Ds("","\u753B\u8CEA\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002\u6B21\u306B\u958B\u3044\u305F\u3068\u304D\u304B\u3089\u53CD\u6620\u3055\u308C\u307E\u3059",2)});var t1=performance.now(),Qu=0,y0=0;function b1(n){requestAnimationFrame(b1);let t=Math.min(.05,(n-t1)/1e3);if(t1=n,Qu+=t,y0++,Qu>2){let e=y0/Qu;Qu=0,y0=0,e<40&&Ks>.75?(Ks=Math.max(.75,Ks-.15),Pe.setPixelRatio(Ks),ho()):e>58&&Ks<Math.min(devicePixelRatio,ut.quality===2?2:1.5)&&(Ks=Math.min(Ks+.1,2),Pe.setPixelRatio(Ks),ho())}if(innerWidth+"x"+innerHeight+":"+ki!==s1&&ho(),k.phase==="lobby"){vE(t),ec();return}if(!xt||k.paused&&!W.on){ec();return}if(k.phase==="end"){ec();return}E1(t),ec()}function E1(n){let t=n;k.slowmo>0&&(k.slowmo-=n,t=n*.25),Kb(t),lE(t);for(let e of pe)e.ai?eE(e,t):e.net&&IE(e,t);W.on&&CE(n);for(let e of pe)cE(e,t);EE(),kb(t),xt.blindT>0&&(xt.blindT-=t),H("flashOv").style.opacity=In((xt.blindT||0)/1.2,0,1),Rb(t),yE(),dE(),uE(n),mE(n)}var e1=.8;function EE(){let n=t=>(t.isPlayer||t.ai)&&(!W.on||go(t));for(let t=0;t<pe.length;t++)for(let e=t+1;e<pe.length;e++){let i=pe[t],s=pe[e];if(!i.alive||!s.alive||Math.abs(i.pos.y-s.pos.y)>1.2)continue;let r=s.pos.x-i.pos.x,o=s.pos.z-i.pos.z,a=Math.hypot(r,o);if(a>=e1)continue;let l=a>1e-4?r/a:1,c=a>1e-4?o/a:0,h=e1-a,u=n(i),d=n(s);if(!u&&!d)continue;let f=u&&d?.5:1;u&&(i.pos.x-=l*h*f,i.pos.z-=c*h*f),d&&(s.pos.x+=l*h*f,s.pos.z+=c*h*f)}}var nc={id:"base",outline:null},M0=new Map,Ma;function w1(n){nc.id=n;let t=Pe.domElement,e=document.getElementById("lookVig")||(()=>{let s=document.createElement("div");return s.id="lookVig",s.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:1",document.body.appendChild(s),s})();if(C0(ut.map),Pe.toneMapping=qs,Pe.toneMappingExposure=1.05,t.style.filter="",e.style.background="",nc.outline=null,Wt.fog.near=60,Wt.fog.far=210,n==="pop")Pe.toneMappingExposure=1.22,Yn.intensity*=1.45,Yn.color.setHex(13625599),Yn.groundColor.setHex(10141808),xn.intensity*=1.1,yi.material.uniforms.top.value.setRGB(.12,.45,.95),yi.material.uniforms.hor.value.setRGB(.7,.88,1),Wt.fog.color.setHex(13625087),t.style.filter="saturate(1.4) contrast(1.06)",e.style.background="radial-gradient(ellipse at center,transparent 62%,rgba(20,40,90,.25))";else if(n==="ivory")Pe.toneMappingExposure=.95,xn.color.setHex(16765600),xn.intensity*=.8,Yn.color.setHex(15259840),Yn.groundColor.setHex(5917242),Yn.intensity*=.9,yi.material.uniforms.top.value.setRGB(.55,.58,.62),yi.material.uniforms.hor.value.setRGB(.92,.84,.72),Wt.fog.color.setHex(14207148),Wt.fog.near=18,Wt.fog.far=110,t.style.filter="saturate(.72) sepia(.22) contrast(1.1)",e.style.background="radial-gradient(ellipse at center,transparent 45%,rgba(40,24,12,.55))";else if(n==="mix")Pe.toneMappingExposure=1.12,Yn.intensity*=1.25,Yn.color.setHex(14674175),xn.color.setHex(16769208),yi.material.uniforms.top.value.setRGB(.2,.42,.78),yi.material.uniforms.hor.value.setRGB(.95,.86,.76),Wt.fog.color.setHex(15128772),Wt.fog.near=30,Wt.fog.far=150,t.style.filter="saturate(1.12) contrast(1.08)",e.style.background="radial-gradient(ellipse at center,transparent 50%,rgba(30,20,40,.45))";else if(n==="toon"){if(Pe.toneMappingExposure=1.1,Yn.intensity*=1.3,!Ma){let s=new Uint8Array([150,205,255]);Ma=new Yr(s,3,1,jo),Ma.minFilter=Ma.magFilter=gn,Ma.needsUpdate=!0}Wt.traverse(s=>{if(!s.isMesh||!s.material||s===yi||Array.isArray(s.material)||s.material.isShaderMaterial||s.material.transparent)return;let r=s.material;M0.has(r)||M0.set(r,new al({color:r.color,map:r.map,gradientMap:Ma,side:r.side})),s.userData.baseMat=s.userData.baseMat||r,s.material=M0.get(r)}),nc.outline=new xu(Pe,{defaultThickness:.005,defaultColor:[.12,.08,.06]}),t.style.filter="saturate(1.25)"}n!=="toon"&&Wt.traverse(s=>{s.isMesh&&s.userData.baseMat&&(s.material=s.userData.baseMat)});let i=n==="A"||n==="B"?n:null;Mi.on=!!i,Pe.shadowMap.type=i?Mr:ut.quality>0?fl:yr,Pe.shadowMap.needsUpdate=!0,xn.shadow.radius=i?7:1,xn.shadow.blurSamples=12,xn.shadow.bias=i?-6e-4:-4e-4,i==="A"?(Pe.toneMapping=eo,Pe.toneMappingExposure=.9,Yn.intensity*=2.1,Yn.color.setHex(15003391),Yn.groundColor.setHex(14209728),xn.color.setHex(16774372),xn.intensity*=.55,yi.material.uniforms.top.value.setRGB(.1,.42,1),yi.material.uniforms.hor.value.setRGB(.72,.9,1),Wt.fog.color.setHex(12903167),Wt.fog.near=35,Wt.fog.far=170,t.style.filter="saturate(.95) contrast(.92)",e.style.background="",Mi.set({bloom:[0,.5,1],blur:[.0012,.0025]})):i==="B"&&(Pe.toneMappingExposure=.92,xn.color.setHex(16762010),xn.intensity*=.62,Yn.color.setHex(12891360),Yn.groundColor.setHex(4865096),Yn.intensity*=1.2,yi.material.uniforms.top.value.setRGB(.2,.18,.34),yi.material.uniforms.hor.value.setRGB(.88,.7,.64),Wt.fog.color.setHex(11049130),Wt.fog.near=10,Wt.fog.far=85,t.style.filter="saturate(.78) contrast(1.06) brightness(1.02)",e.style.background="radial-gradient(ellipse at 60% 50%,transparent 50%,rgba(28,14,34,.45))",Mi.set({bloom:[0,.5,1],blur:[.0015,.003]})),i!==xi.id&&(Ug(i),k.phase==="lobby"&&Fr())}var Mi={on:!1,comp:null,bloom:null,bokeh:null,init(){if(this.comp)return;let n=ac(),t=lc();this.comp=new vu(Pe),this.comp.setPixelRatio(Math.min(Pe.getPixelRatio(),1.5)),this.comp.setSize(n,t),this.comp.addPass(new _u(Wt,xe)),this.bokeh=new bu(Wt,xe,{focus:3,aperture:.01,maxblur:.006}),this.comp.addPass(this.bokeh),this.bloom=new oa(new lt(n/2,t/2),.4,.5,.85),this.comp.addPass(this.bloom),this.comp.addPass(new Eu)},set(n){this.init(),[this.bloom.strength,this.bloom.radius,this.bloom.threshold]=n.bloom,this.blur=n.blur}};function ec(){if(t0.time.value=performance.now()/1e3,Pe.clear(),Mi.on&&Mi.comp){let n=k.phase==="lobby"&&Ti,t=Mi.bokeh.uniforms;t.focus.value=n?xe.position.distanceTo(Ti.root.position.clone().add(new pt(0,1,0))):6,Mi.bokeh.enabled=!!n,Mi.bloom.enabled=Mi.bloom.strength>0,t.aperture.value=Mi.blur[0],t.maxblur.value=Mi.blur[1],Mi.comp.render()}else nc.outline?nc.outline.render(Wt,xe):Pe.render(Wt,xe);k.phase!=="lobby"&&xt&&Zt.root.visible&&(Pe.clearDepth(),Pe.render(er,Ps))}oE();aE();_1();var wE="wss://vw-room.hakopen.workers.dev/",W={on:!1,ws:null,room:null,cid:"",host:!1,hostId:null,flip:0,members:[],map:null,rules:{winR:6,swap:3},sendT:0,allowEnd:!1,retry:0,status:""};try{W.cid=sessionStorage.getItem("vw_cid")||Math.random().toString(36).slice(2,10),sessionStorage.setItem("vw_cid",W.cid)}catch{W.cid=Math.random().toString(36).slice(2,10)}var ic=n=>[+n.x.toFixed(2),+n.y.toFixed(2),+n.z.toFixed(2)],R0=n=>new pt(n[0],n[1],n[2]),S1=["stand","crouch","prone"];function go(n){return n===xt||W.host&&!!n.ai}function oi(n){W.dbg&&n.t!=="s"&&W.dbg.push(">"+n.t+":"+(W.ws?W.ws.readyState:"x")),W.ws&&W.ws.readyState===1&&W.ws.send(JSON.stringify(n))}function T1(){return W.flip?[k.score[1],k.score[0]]:[k.score[0],k.score[1]]}function Oi(n){return pe.find(t=>t.nid===n)}function R1(){return{path:null,pi:0,goal:null,repath:0,think:0,target:null,seen:0,heard:null,hold:null,holdT:0,strafe:0,aimErr:new pt,mode:"obj",crouchT:0,site:Math.random()<.5?"A":"B"}}function v0(){return{cid:W.cid,nick:(ut.nick||si[ut.kind]).slice(0,10),kind:ut.kind,hat:ut.hat,camo:ut.camo,lo:ut.lo}}function SE(n){Ds("",n,3)}var nd=[];function X0(n){if(!Fi[n]||n===en.id&&nd.length){ut.map=n;return}for(let e of nd)Wt.remove(e),e.traverse&&e.traverse(i=>{i.geometry&&i.geometry.dispose()});ut.map=n,_i();let t=new Set(Wt.children);rd=jf(Wt,n),tr=rd.colliders,C0(n),L0=tr.filter(e=>e.bullet),I0=new Zl(tr),nd=Wt.children.filter(e=>!t.has(e)),_1(),G0(),k.phase==="lobby"&&Fr()}function hd(n){q0(),W.room=n,W.members=[],W.host=!1,W.hostId=null;try{sessionStorage.setItem("vw_room",n)}catch{}let t=new WebSocket(`${wE}?room=${n}&cid=${W.cid}`);W.ws=t,W.status="\u63A5\u7D9A\u4E2D\u2026",Hi(),t.onopen=()=>{W.retry=0},t.onmessage=e=>{if(e.data==="pong")return;let i;try{i=JSON.parse(e.data)}catch{return}W.dbg&&i.t!=="s"&&W.dbg.push("<"+i.t+(W.ws===t?"":"(old)"));try{RE(i)}catch(s){console.error(s)}},t.onclose=()=>{W.ws===t&&(W.ws=null,W.on&&C1("\u901A\u4FE1\u304C\u5207\u308C\u307E\u3057\u305F"),W.status="\u518D\u63A5\u7D9A\u4E2D\u2026",Hi(),W.room&&W.retry++<5?setTimeout(()=>{W.room&&!W.ws&&hd(W.room)},1500):(W.status="\u3064\u306A\u304C\u308A\u307E\u305B\u3093",Hi()))}}function q0(){if(W.ws){let n=W.ws;W.ws=null;try{n.close()}catch{}}}function A1(){W.room=null;try{sessionStorage.removeItem("vw_room")}catch{}q0(),W.on=!1,W.members=[],W.host=!1,Hi()}setInterval(()=>{W.ws&&W.ws.readyState===1&&!W.on&&W.ws.send("ping")},25e3);function C1(n){W.on=!1,dc(),pc(),SE(n)}function ba(){W.host&&(oi({t:"lobby",members:W.members,map:W.map,rules:W.rules}),Hi())}function TE(){let n=W.members.filter(e=>e.team===0).length,t=W.members.filter(e=>e.team===1).length;return n<=t?0:1}function RE(n){switch(n.t){case"welcome":W.hostId=n.host,W.host=n.host===W.cid,W.status="",W.host?(W.members=[{...v0(),team:0}],W.map=ut.map,W.rules={winR:ut.winR,swap:ut.swap},n.peers.length>1&&oi({t:"who"}),ba()):oi({t:"hello",...v0()}),Hi();break;case"full":W.room=null,W.status="\u3053\u306E\u90E8\u5C4B\u306F\u6E80\u54E1\u3067\u3059\uFF084\u4EBA\u307E\u3067\uFF09",q0(),Hi();break;case"join":W.hostId=n.host;break;case"who":W.host||oi({t:"hello",...v0()});break;case"hello":if(W.host){let t=W.members.find(i=>i.cid===n.from),e={cid:n.from,nick:String(n.nick||"").slice(0,10),kind:n.kind,hat:n.hat,camo:n.camo,lo:n.lo};t?Object.assign(t,e):W.members.push({...e,team:TE()}),ba(),W.on&&oi({to:n.from,t:"busy"})}break;case"busy":W.status="\u3044\u307E\u8A66\u5408\u4E2D\u3067\u3059\u3002\u7D42\u308F\u308B\u307E\u3067\u5F85\u3063\u3066\u304F\u3060\u3055\u3044",Hi();break;case"lobby":if(n.from!==W.hostId)break;W.members=n.members,W.map=n.map,W.rules=n.rules,!W.on&&ut.map!==n.map&&X0(n.map),Hi();break;case"leave":{let t=n.id===W.hostId;if(W.hostId=n.host,W.on){if(t){W.host=n.host===W.cid,W.members=W.members.filter(i=>i.cid!==n.id),C1("\u30DB\u30B9\u30C8\u304C\u629C\u3051\u305F\u306E\u3067\u8A66\u5408\u3092\u7D42\u4E86\u3057\u307E\u3057\u305F"),W.host&&ba();break}let e=pe.find(i=>i.cid===n.id);e&&(e.cid=null,e.name+="(CPU)",W.host&&(e.net=!1,e.ai=R1()),ad(`${e.name.replace("(CPU)","")} \u304C\u629C\u3051\u305F\uFF08CPU\u304C\u4EE3\u308F\u308A\u306B\u6226\u3046\uFF09`))}n.host===W.cid&&!W.host&&(W.host=!0),W.host&&(W.members=W.members.filter(e=>e.cid!==n.id),ba()),Hi();break}case"start":n.from===W.hostId&&P1(n);break;case"s":PE(n);break;case"sh":{let t=Oi(n.i);t&&!go(t)&&LE(t,n.p);break}case"hit":{let t=Oi(n.i),e=Oi(n.b);t&&t.alive&&W.on&&l1(t,n.pa,e,R0(n.d).normalize(),R0(n.pt),n.pe);break}case"th":{let t=Oi(n.i);t&&!go(t)&&W.on&&Ur(t,n.k,!0);break}case"rd":W.on&&!W.host&&(k.round=n.rd-1,k.attack=n.at^W.flip,k.score=W.flip?[n.sc[1],n.sc[0]]:[n.sc[0],n.sc[1]],H("scA").textContent=k.score[0],H("scB").textContent=k.score[1],H("cmsg").style.color="",uc(n.c));break;case"er":W.on&&!W.host&&(W.allowEnd=!0,k.phase=k.phase==="post"?"live":k.phase,po(n.w^W.flip,n.r,Oi(n.by)),W.allowEnd=!1);break;case"pl":if(W.on&&!W.host){let t=Oi(n.i);t&&f1(t,n.si),k.bomb.pos.set(n.p[0],hs(n.p[0],n.p[2],n.p[1]+.5)+.05,n.p[2])}break;case"df":if(W.on&&!W.host){let t=Oi(n.i);k.bomb.state="defused",k.bomb.defusing=null,Rs(null),gt.play("ui",{vol:1}),t&&(t.score+=100,ad(`${t.name} \u304C\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F`))}break;case"boom":W.on&&!W.host&&k.bomb.state!=="exploded"&&p1();break;case"mend":W.on&&!W.host&&(k.score=W.flip?[n.sc[1],n.sc[0]]:[n.sc[0],n.sc[1]],d1());break}}function AE(){if(!W.host)return;let n=new Set(W.members.map(s=>s.kind)),t=wa.filter(s=>!n.has(s)).concat(wa),e=[];for(let s of[0,1]){let r=W.members.filter(o=>o.team===s).slice(0,2);for(let o of r)e.push({cid:o.cid,kind:o.kind,team:s,name:o.nick,hat:o.hat,camo:o.camo,lo:o.lo});for(let o=r.length;o<2;o++){let a=t.shift();e.push({cid:null,kind:a,team:s,name:si[a]+"(CPU)",hat:Ir[1+Math.floor(Math.random()*(Ir.length-1))].id,camo:fa[Math.floor(Math.random()*4)].id,lo:l0()})}}e.forEach((s,r)=>s.i=r);let i={t:"start",roster:e,map:W.map,rules:W.rules,at:Math.random()<.5?0:1};oi(i),P1(i)}function P1(n){let t=n.roster.find(e=>e.cid===W.cid);if(t){ut.map!==n.map&&X0(n.map),W.rules=n.rules,W.flip=t.team,W.on=!0,W.allowEnd=!1,W.sendT=0,H("roomM").classList.add("hide"),H("againBtn").textContent="\u90E8\u5C4B\u306B\u623B\u308B",k.mode="online",k.paused=!1,H("pause").classList.add("hide"),gt.init().then(()=>{gt.resume(),ut.bgm&&gt.bgm(!0),gt.wind(!0)}),Ti&&(Wt.remove(Ti.root),Ti=null),xe.clearViewOffset(),H("lobby").classList.add("hide"),H("result").classList.add("hide"),H("hud").classList.remove("hide"),H("ctl").classList.remove("hide"),H("camBtn").textContent=ut.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0";try{Ai&&document.documentElement.requestFullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen({navigationUI:"hide"}).catch(()=>{})}catch{}if(!Ai)try{Pe.domElement.requestPointerLock()}catch{}window.VW_INGAME=!0,k.round=0,k.score=[0,0],k.attack=n.at^W.flip;for(let e of pe)e.dispose();pe=[];for(let e of n.roster){let i=e.cid===W.cid,s=new js(e.kind,e.team^W.flip,i,i?"\u3042\u306A\u305F":e.name,{hat:e.hat,camo:e.camo,lo:i?ut.lo:e.lo});s.nid=e.i,s.cid=e.cid,i?xt=s:!e.cid&&W.host?s.ai=R1():s.net=!0,pe.push(s)}if(H("scA").textContent=0,H("scB").textContent=0,H("hpName").textContent=si[xt.kind],H0={kills:0,hs:0},ud(),W.host)uc(),I1();else{k.phase="pre",k.timer=4;for(let e of pe)e.pos.set(0,-50,0)}}}function I1(){oi({t:"rd",rd:k.round,at:k.attack^W.flip,sc:T1(),c:k.bomb.carrier?k.bomb.carrier.nid:-1})}function CE(n){if(W.sendT-=n,W.sendT>0)return;W.sendT=1/12;let t=[];for(let i of pe)go(i)&&t.push([i.nid,+i.pos.x.toFixed(2),+i.pos.y.toFixed(2),+i.pos.z.toFixed(2),+i.yaw.toFixed(3),+i.pitch.toFixed(3),S1.indexOf(i.stance),+i.ads.toFixed(2),i.sprint?1:0,+i.vel.x.toFixed(1),+i.vel.z.toFixed(1),i.wantAct?1:0,i.onGround?1:0,i.slideT>0?1:0]);let e={t:"s",rd:k.round,f:t};if(W.host){let i=k.bomb;e.g={ph:k.phase,tm:+k.timer.toFixed(1),b:[i.state,i.carrier?i.carrier.nid:-1,...ic(i.pos),i.planting?i.planting.nid:-1,i.defusing?i.defusing.nid:-1,+(i.prog||0).toFixed(2),+(i.fuse||0).toFixed(1)],hp:pe.map(s=>[s.nid,Math.round(s.hp),s.alive?1:0])}}oi(e)}function PE(n){if(!W.on||n.rd!==k.round)return;let t=performance.now();for(let r of n.f||[]){let o=Oi(r[0]);!o||go(o)||(o.nt={p:[r[1],r[2],r[3]],yaw:r[4],pitch:r[5],st:r[6],ads:r[7],sp:r[8],vx:r[9],vz:r[10],act:r[11],og:r[12],sl:r[13],t})}let e=n.g;if(!e||W.host||n.from!==W.hostId)return;e.ph==="live"&&k.phase==="pre"&&(k.phase="live",Ds("\u958B\u59CB","",1),gt.play("beep",{vol:.8})),e.ph===k.phase&&Math.abs(e.tm-k.timer)>.4&&(k.timer=e.tm);let i=k.bomb,s=e.b;if((k.phase==="live"||k.phase==="pre")&&(i.state=s[0],i.carrier=Oi(s[1])||null,i.state==="dropped"&&i.pos.set(s[2],s[3],s[4])),i.planting=Oi(s[5])||null,i.defusing=Oi(s[6])||null,i.prog=s[7],k.phase==="planted"&&(i.fuse=s[8]),!(k.phase==="pre"||k.phase==="post"))for(let[r,o,a]of e.hp){let l=Oi(r);!l||!l.alive||(a?o<l.hp-1&&(l.hp=o):cc(l,null,!1,new pt(0,0,1),"body"))}}function IE(n,t){let e=n.nt;if(!e||!n.alive)return;let i=Math.min(.2,(performance.now()-e.t)/1e3),s=e.p[0]+e.vx*i,r=e.p[2]+e.vz*i,o=e.p[1],a=1-Math.exp(-14*t);(n.pos.x-s)**2+(n.pos.z-r)**2>16||n.pos.y<-10?n.pos.set(s,o,r):(n.pos.x+=(s-n.pos.x)*a,n.pos.y+=(o-n.pos.y)*a,n.pos.z+=(r-n.pos.z)*a),n.yaw+=i1(n.yaw,e.yaw)*Math.min(1,a*1.5),n.pitch+=(e.pitch-n.pitch)*Math.min(1,a*1.5),n.stance=S1[e.st]||"stand",n.adsWant=e.ads>.4,n.sprint=!!e.sp,n.vel.set(e.vx,0,e.vz),n.onGround=!!e.og,n.wantAct=!!e.act,n.slideT=e.sl?.3:0;let l=Math.hypot(e.vx,e.vz);if(n.moveAmt=l,n.onGround&&l>.5&&(n.stepAcc+=l*t,n.stepAcc>(n.sprint?1.6:1.2))){n.stepAcc=0;let c=(n.stance!=="stand"||l<2.3?0:n.sprint?1:.6)*(n.st?n.st.quiet:1);c>.05&&ed(n,c)}}function LE(n,t){if(!n.alive)return;n.mag=Math.max(0,n.mag-1),n.shots++,n.lastShotT=k.time,n.revealT=2.5,n.needBolt=!0,n.boltT=n.st.bolt,n.boltPlayed=0;let e=n.veg.gun.muzzlePt.getWorldPosition(new pt),i=R0(t);a1(e,i),Ri(xo,e,.7,.06,{add:!0}),vi.position.copy(e),vi.intensity=30,setTimeout(()=>vi.intensity=0,50),Ri(nr,e,.4,1.2,{grow:1.5,vel:new pt(0,.4,0),opacity:.6}),Is(i,10132112,4,2.5,.02,.5),gt.play(n.pos.distanceTo(xt.pos)>25?"shot_far":"shot",{pos:n.eye(),vol:1,ref:6,roll:.8,vary:.05});for(let s of pe)s.ai&&s.alive&&s.team!==n.team&&s.pos.distanceTo(n.pos)<70&&(s.ai.heard={pos:n.pos.clone(),t:4})}function pc(){H("roomM").classList.remove("hide"),Hi()}function DE(){return location.origin+location.pathname+"?room="+W.room}function n1(n){return String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Hi(){let n=H("roomB");if(!n||H("roomM").classList.contains("hide"))return;if(H("roomSt").textContent=W.status,!W.room){n.innerHTML=`<div class="rmGrid"><div><div class="rmLbl">\u3042\u306A\u305F\u306E\u540D\u524D</div><input id="rmNick" maxlength="10" value="${n1(ut.nick||si[ut.kind])}">
      <button class="mbtn y" id="rmMake">\u90E8\u5C4B\u3092\u4F5C\u308B</button><div class="rmNote">\u90E8\u5C4B\u3092\u4F5C\u308B\u30686\u6841\u306E\u30B3\u30FC\u30C9\u3068\u62DB\u5F85URL\u304C\u51FA\u307E\u3059\u3002<br>\u53CB\u9054\u306B\u9001\u308C\u3070\u540C\u3058\u90E8\u5C4B\u306B\u5165\u308C\u307E\u3059\u3002</div></div>
      <div><div class="rmLbl">\u30B3\u30FC\u30C9\u3067\u5165\u308B</div><input id="rmCode" inputmode="numeric" maxlength="6" placeholder="123456"><button class="mbtn" id="rmJoin">\u5165\u308B</button>
      <div class="rmNote">2\u5BFE2\u3002<br>\u4EBA\u6570\u304C\u8DB3\u308A\u306A\u3044\u3068\u3053\u308D\u306FCPU\u304C\u5165\u308A\u307E\u3059\u3002</div></div></div>`;let i=()=>{ut.nick=H("rmNick").value.trim().slice(0,10),_i()};H("rmMake").onclick=()=>{i(),gt.play("ui"),hd(String(Math.floor(1e5+Math.random()*9e5)))},H("rmJoin").onclick=()=>{i();let s=H("rmCode").value.replace(/\D/g,"");if(s.length!==6){W.status="\u30B3\u30FC\u30C9\u306F6\u6841\u306E\u6570\u5B57\u3067\u3059",Hi();return}gt.play("ui"),hd(s)};return}let t=i=>{let s=W.members.filter(o=>o.team===i),r="";for(let o=0;o<2;o++){let a=s[o];r+=a?`<div class="rmP${a.cid===W.cid?" me":""}" data-c="${a.cid}"><b>${n1(a.nick)}</b><small>${si[a.kind]||""}${a.cid===W.hostId?"\u30FB\u30DB\u30B9\u30C8":""}</small></div>`:'<div class="rmP cpu"><b>CPU</b><small>\u7A7A\u304D</small></div>'}return r},e=Fi[W.map||ut.map]||en;if(n.innerHTML=`<div class="rmGrid"><div><div class="rmLbl">\u90E8\u5C4B\u30B3\u30FC\u30C9</div><div class="rmCode">${W.room}</div>
      <button class="mbtn y" id="rmShare">\u62DB\u5F85URL\u3092\u9001\u308B</button>
      <div class="rmLbl" style="margin-top:calc(1.4*var(--vh))">\u30DE\u30C3\u30D7</div><div class="rmMap">${W.host?'<button id="rmMp">\u25C0</button>':""}<span>${e.name}</span>${W.host?'<button id="rmMn">\u25B6</button>':""}</div>
      <div class="rmNote">${W.rules.winR}\u30E9\u30A6\u30F3\u30C9\u5148\u53D6\u30FB${W.rules.swap}\u30E9\u30A6\u30F3\u30C9\u3054\u3068\u306B\u653B\u5B88\u4EA4\u4EE3</div></div>
    <div><div class="rmTeams"><div><div class="rmLbl">\u30C1\u30FC\u30E0A</div>${t(0)}</div><div><div class="rmLbl">\u30C1\u30FC\u30E0B</div>${t(1)}</div></div>
      ${W.host?'<div class="rmNote">\u540D\u524D\u3092\u30BF\u30C3\u30D7\u3059\u308B\u3068\u30C1\u30FC\u30E0\u3092\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002</div><button class="mbtn y" id="rmStart">\u8A66\u5408\u958B\u59CB</button>':`<div class="rmNote">${W.ws?"\u30DB\u30B9\u30C8\u304C\u958B\u59CB\u3059\u308B\u306E\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\u2026":""}</div>`}
      <button class="mbtn" id="rmLeave">\u90E8\u5C4B\u3092\u51FA\u308B</button></div></div>`,H("rmShare").onclick=async()=>{let i=DE(),s=`vegetable wars \u3067\u4E00\u7DD2\u306B\u904A\u307C\u3046\uFF01
\u90E8\u5C4B\u30B3\u30FC\u30C9 ${W.room}`;try{navigator.share?await navigator.share({title:"vegetable wars",text:s,url:i}):(await navigator.clipboard.writeText(s+`
`+i),W.status="URL\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",Hi())}catch{}},H("rmLeave").onclick=()=>{gt.play("ui"),A1()},W.host){let i=Object.keys(Fi),s=r=>{W.map=i[(i.indexOf(W.map)+r+i.length)%i.length],X0(W.map),ba(),gt.play("ui")};H("rmMp").onclick=()=>s(-1),H("rmMn").onclick=()=>s(1),H("rmStart").onclick=()=>{gt.play("ui"),AE()},n.querySelectorAll(".rmP[data-c]").forEach(r=>r.onclick=()=>{let o=W.members.find(l=>l.cid===r.dataset.c);if(!o)return;let a=1-o.team;W.members.filter(l=>l.team===a).length>=2||(o.team=a,ba(),gt.play("ui"))})}}H("roomClose").onclick=()=>H("roomM").classList.add("hide");{let n=new URLSearchParams(location.search).get("room"),t=n;try{t=t||sessionStorage.getItem("vw_room")}catch{}t&&/^\d{6}$/.test(t)&&(W.pendingRoom=t,n&&history.replaceState(null,"",location.pathname))}window.__vw={LOBBY_CAM:Lr,setLook:n=>w1(n),onBtn:(...n)=>va(...n),proneOrDive:n=>k0(n),get net(){return W},byNid:n=>Oi(n),Veg:Pr,KINDS:Ng,throwEquip:Ur,smokes:Nr,throws:oc,kill:cc,endRound:po,render:ec,renderer:Pe,vm:Zt,vmCam:Ps,V3:pt,sim(n){for(let t=0;t<n*30&&k.phase!=="end";t++)E1(1/30)},game:k,get player(){return xt},get fighters(){return pe},camera:xe,scene:Wt,CFG:ut,startRound:uc,tryAct:mo,fire:B0};vb().then(()=>{{let n=new URLSearchParams(location.search).get("look")||"A";n!=="base"&&w1(n)}requestAnimationFrame(b1),W.pendingRoom&&(pc(),hd(W.pendingRoom))});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
