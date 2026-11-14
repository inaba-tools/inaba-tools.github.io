(()=>{var qd=0,Dh=1,Yd=2;var ws=1,Zd=2,yr=3,rs=0,on=1,fn=2,Ts=0,os=1,As=2,Nh=3,Uh=4,$d=5;var Rs=100,Jd=101,Kd=102,Qd=103,jd=104,tf=200,ef=201,nf=202,sf=203,Fh=204,Oh=205,rf=206,of=207,af=208,lf=209,cf=210,hf=211,uf=212,df=213,ff=214,za=0,Ga=1,Va=2,sr=3,Wa=4,Xa=5,qa=6,Ya=7,bl=0,pf=1,mf=2,di=0,Bh=1,Hh=2,kh=3,Do=4,zh=5,Gh=6,Vh=7;var Wh=300,Cs=301,Mr=302,El=303,wl=304,Ms=1e3,si=1001,Za=1002,dn=1003,gf=1004;var No=1005;var An=1006,Tl=1007;var Di=1008;var In=1009,Xh=1010,qh=1011,vr=1012,Al=1013,jn=1014,Xn=1015,ti=1016,Rl=1017,Cl=1018,Ps=1020,Yh=35902,Zh=35899,$h=1021,Jh=1022,ei=1023,Ri=1026,Ni=1027,Pl=1028,Il=1029,as=1030,Ll=1031;var Dl=1033,Uo=33776,Fo=33777,Oo=33778,Bo=33779,Nl=35840,Ul=35841,Fl=35842,Ol=35843,Bl=36196,Hl=37492,kl=37496,zl=37488,Gl=37489,Ho=37490,Vl=37491,Wl=37808,Xl=37809,ql=37810,Yl=37811,Zl=37812,$l=37813,Jl=37814,Kl=37815,Ql=37816,jl=37817,tc=37818,ec=37819,nc=37820,ic=37821,sc=36492,rc=36494,oc=36495,ac=36283,lc=36284,ko=36285,cc=36286;var io=2300,$a=2301,Ha=2302,Sh=2303,bh=2400,Eh=2401,wh=2402;var xf=3200;var zo=0,_f=1,Ui="",rn="srgb",so="srgb-linear",ro="linear",Le="srgb";var ka=7680;var yf=519,Mf=512,vf=513,Sf=514,Kh=515,bf=516,Ef=517,Qh=518,jh=519,tu=35044;var eu="300 es",kn=2e3,rr=2001;function B0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function H0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wf(){let n=oo("canvas");return n.style.display="block",n}var dd={},or=null;function ao(...n){let t="THREE."+n.shift();or?or("log",t,...n):console.log(t,...n)}function Tf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Kt(...n){n=Tf(n);let t="THREE."+n.shift();if(or)or("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function jt(...n){n=Tf(n);let t="THREE."+n.shift();if(or)or("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ys(...n){let t=n.join(" ");t in dd||(dd[t]=!0,Kt(...n))}function Af(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Rf={[za]:za,[Va]:qa,[Wa]:Wa,[sr]:Xa,[Ga]:Ga,[qa]:Va,[Ya]:Ya,[Xa]:sr},ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jc=Math.PI/180,Ja=180/Math.PI;function ls(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[e&63|128]+vn[e>>8&255]+"-"+vn[e>>16&255]+vn[e>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function me(n,t,e){return Math.max(t,Math.min(e,n))}function k0(n,t){return(n%t+t)%t}function Kc(n,t,e){return(1-e)*n+e*t}function Cf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pf(n,t){if(t.constructor===Float32Array)return n;let e=hc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function If(n,t){if(t.constructor===Float32Array)return n;let e=hc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var au=class au{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};au.prototype.isVector2=!0;var ct=au,Qe=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,a=Math.sin(a*y)/S,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lu=class lu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qc.copy(this).projectOnVector(t),this.sub(Qc)}reflect(t){return this.sub(Qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lu.prototype.isVector3=!0;var D=lu,Qc=new D,fd=new Qe,cu=class cu{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],S=s[4],M=s[7],T=s[2],A=s[5],_=s[8];return r[0]=o*x+a*y+l*T,r[3]=o*m+a*S+l*A,r[6]=o*g+a*M+l*_,r[1]=c*x+h*y+u*T,r[4]=c*m+h*S+u*A,r[7]=c*g+h*M+u*_,r[2]=d*x+f*y+p*T,r[5]=d*m+f*S+p*A,r[8]=d*g+f*M+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};cu.prototype.isMatrix3=!0;var re=cu,jc=new re,pd=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z0(){let n={enabled:!0,workingColorSpace:so,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Le&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Le&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?ro:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[so]:{primaries:t,whitePoint:i,transfer:ro,toXYZ:pd,fromXYZ:md,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:Le,toXYZ:pd,fromXYZ:md,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}var Te=z0();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hs,Ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hs===void 0&&(Hs=oo("canvas")),Hs.width=t.width,Hs.height=t.height;let s=Hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=oo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ai(e[i]/255)*255):e[i]=Ai(e[i]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},G0=0,ar=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(th(s[o].image)):r.push(th(s[o]))}else r=th(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ka.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var V0=0,eh=new D,Rn=class n extends ri{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=si,s=si,r=An,o=Di,a=ei,l=In,c=n.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=ls(),this.name="",this.source=new ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Wh;Rn.DEFAULT_ANISOTROPY=1;var hu=class hu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,M=(f+1)/2,T=(g+1)/2,A=(h+d)/4,_=(u+x)/4,v=(p+m)/4;return S>M&&S>T?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=_/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=v/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=_/r,s=v/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hu.prototype.isVector4=!0;var Ve=hu,Qa=class extends ri{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Rn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ar(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Qa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},lo=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ja=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Sl=class Sl{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(W0,t,X0)}lookAt(t,e,i){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Yi.crossVectors(i,Ln),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Yi.crossVectors(i,Ln)),Yi.normalize(),fa.crossVectors(Ln,Yi),s[0]=Yi.x,s[4]=fa.x,s[8]=Ln.x,s[1]=Yi.y,s[5]=fa.y,s[9]=Ln.y,s[2]=Yi.z,s[6]=fa.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],S=i[7],M=i[11],T=i[15],A=s[0],_=s[4],v=s[8],R=s[12],w=s[1],P=s[5],U=s[9],H=s[13],L=s[2],k=s[6],q=s[10],G=s[14],lt=s[3],Z=s[7],st=s[11],rt=s[15];return r[0]=o*A+a*w+l*L+c*lt,r[4]=o*_+a*P+l*k+c*Z,r[8]=o*v+a*U+l*q+c*st,r[12]=o*R+a*H+l*G+c*rt,r[1]=h*A+u*w+d*L+f*lt,r[5]=h*_+u*P+d*k+f*Z,r[9]=h*v+u*U+d*q+f*st,r[13]=h*R+u*H+d*G+f*rt,r[2]=p*A+x*w+m*L+g*lt,r[6]=p*_+x*P+m*k+g*Z,r[10]=p*v+x*U+m*q+g*st,r[14]=p*R+x*H+m*G+g*rt,r[3]=y*A+S*w+M*L+T*lt,r[7]=y*_+S*P+M*k+T*Z,r[11]=y*v+S*U+M*q+T*st,r[15]=y*R+S*H+M*G+T*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*f-c*d,S=a*f-c*u,M=a*d-l*u,T=o*f-c*h,A=o*d-l*h,_=o*u-a*h;return e*(x*y-m*S+g*M)-i*(p*y-m*T+g*A)+s*(p*S-x*T+g*_)-r*(p*M-x*A+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*a-i*o,S=e*l-s*o,M=e*c-r*o,T=i*l-s*a,A=i*c-r*a,_=s*c-r*l,v=h*x-u*p,R=h*m-d*p,w=h*g-f*p,P=u*m-d*x,U=u*g-f*x,H=d*g-f*m,L=y*H-S*U+M*P+T*w-A*R+_*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return t[0]=(a*H-l*U+c*P)*k,t[1]=(s*U-i*H-r*P)*k,t[2]=(x*_-m*A+g*T)*k,t[3]=(d*A-u*_-f*T)*k,t[4]=(l*w-o*H-c*R)*k,t[5]=(e*H-s*w+r*R)*k,t[6]=(m*M-p*_-g*S)*k,t[7]=(h*_-d*M+f*S)*k,t[8]=(o*U-a*w+c*v)*k,t[9]=(i*w-e*U-r*v)*k,t[10]=(p*A-x*M+g*y)*k,t[11]=(u*M-h*A-f*y)*k,t[12]=(a*R-o*P-l*v)*k,t[13]=(e*P-i*R+s*v)*k,t[14]=(x*S-p*T-m*y)*k,t[15]=(h*T-u*S+d*y)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=l*c,S=l*h,M=l*u,T=i.x,A=i.y,_=i.z;return s[0]=(1-(x+g))*T,s[1]=(f+M)*T,s[2]=(p-S)*T,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+g))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(p+S)*_,s[9]=(m-y)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ks.set(s[0],s[1],s[2]).length(),a=ks.set(s[4],s[5],s[6]).length(),l=ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Zn.copy(this);let c=1/o,h=1/a,u=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,e.setFromRotationMatrix(Zn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=kn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===kn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===rr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=kn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===kn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===rr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Sl.prototype.isMatrix4=!0;var Qt=Sl,ks=new D,Zn=new Qt,W0=new D(0,0,0),X0=new D(1,1,1),Yi=new D,fa=new D,Ln=new D,gd=new Qt,xd=new Qe,zn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xd.setFromEuler(this),this.setFromQuaternion(xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},q0=0,_d=new D,zs=new Qe,vi=new Qt,pa=new D,Xr=new D,Y0=new D,Z0=new Qe,yd=new D(1,0,0),Md=new D(0,1,0),vd=new D(0,0,1),Sd={type:"added"},$0={type:"removed"},Gs={type:"childadded",child:null},nh={type:"childremoved",child:null},ze=class n extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new zn,i=new Qe,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new re}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(yd,t)}rotateY(t){return this.rotateOnAxis(Md,t)}rotateZ(t){return this.rotateOnAxis(vd,t)}translateOnAxis(t,e){return _d.copy(t).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yd,t)}translateY(t){return this.translateOnAxis(Md,t)}translateZ(t){return this.translateOnAxis(vd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?pa.copy(t):pa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Xr,pa,this.up):vi.lookAt(pa,Xr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(vi),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sd),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($0),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sd),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,t,Y0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.DEFAULT_UP=new D(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ut=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},J0={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},ma={h:0,s:0,l:0};function ih(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var se=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Te.workingColorSpace){if(t=k0(t,1),e=me(e,0,1),i=me(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ih(o,r,t+1/3),this.g=ih(o,r,t),this.b=ih(o,r,t-1/3)}return Te.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let i=Lf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Te.workingToColorSpace(Sn.copy(this),t),Math.round(me(Sn.r*255,0,255))*65536+Math.round(me(Sn.g*255,0,255))*256+Math.round(me(Sn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(Sn.copy(this),e);let i=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=rn){Te.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,i=Sn.g,s=Sn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(ma);let i=Kc(Zi.h,ma.h,e),s=Kc(Zi.s,ma.s,e),r=Kc(Zi.l,ma.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new se;se.NAMES=Lf;var ho=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new se(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qi=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},$n=new D,Si=new D,sh=new D,bi=new D,Vs=new D,Ws=new D,bd=new D,rh=new D,oh=new D,ah=new D,lh=new Ve,ch=new Ve,hh=new Ve,Ti=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){$n.subVectors(s,e),Si.subVectors(i,e),sh.subVectors(t,e);let o=$n.dot($n),a=$n.dot(Si),l=$n.dot(sh),c=Si.dot(Si),h=Si.dot(sh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(t,e),ch.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lh,r.x),o.addScaledVector(ch,r.y),o.addScaledVector(hh,r.z),o}static isFrontFacing(t,e,i,s){return $n.subVectors(i,e),Si.subVectors(t,e),$n.cross(Si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$n.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,i),Ws.subVectors(r,i),rh.subVectors(t,i);let l=Vs.dot(rh),c=Ws.dot(rh);if(l<=0&&c<=0)return e.copy(i);oh.subVectors(t,s);let h=Vs.dot(oh),u=Ws.dot(oh);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Vs,o);ah.subVectors(t,r);let f=Vs.dot(ah),p=Ws.dot(ah);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Ws,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return bd.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(bd,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(i).addScaledVector(Vs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),xa.subVectors(this.max,qr),Xs.subVectors(t.a,qr),qs.subVectors(t.b,qr),Ys.subVectors(t.c,qr),$i.subVectors(qs,Xs),Ji.subVectors(Ys,qs),ps.subVectors(Xs,Ys);let e=[0,-$i.z,$i.y,0,-Ji.z,Ji.y,0,-ps.z,ps.y,$i.z,0,-$i.x,Ji.z,0,-Ji.x,ps.z,0,-ps.x,-$i.y,$i.x,0,-Ji.y,Ji.x,0,-ps.y,ps.x,0];return!uh(e,Xs,qs,Ys,xa)||(e=[1,0,0,0,1,0,0,0,1],!uh(e,Xs,qs,Ys,xa))?!1:(_a.crossVectors($i,Ji),e=[_a.x,_a.y,_a.z],uh(e,Xs,qs,Ys,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new D,new D,new D,new D,new D,new D,new D,new D],Jn=new D,ga=new oi,Xs=new D,qs=new D,Ys=new D,$i=new D,Ji=new D,ps=new D,qr=new D,xa=new D,_a=new D,ms=new D;function uh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ms.fromArray(n,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var en=new D,ya=new ct,K0=0,nn=class extends ri{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tu,this.updateRanges=[],this.gpuType=Xn,this.version=0,this._normalizationScale=t!==void 0?hc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):If(t,this.array)}};var uo=class extends nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var fo=class extends nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ne=class extends nn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Q0=new oi,Yr=new D,dh=new D,ji=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Q0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);let e=Yr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Yr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(dh)),this.expandByPoint(Yr.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},j0=0,Hn=new Qt,fh=new ze,Zs=new D,Dn=new oi,Zr=new oi,un=new D,We=class n extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B0(t)?fo:uo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new re().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,i){return Hn.makeTranslation(t,e,i),this.applyMatrix4(Hn),this}scale(t,e,i){return Hn.makeScale(t,e,i),this.applyMatrix4(Hn),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Dn.min,Zr.min),Dn.expandByPoint(un),un.addVectors(Dn.max,Zr.max),Dn.expandByPoint(un)):(Dn.expandByPoint(Zr.min),Dn.expandByPoint(Zr.max))}Dn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(t,c),un.add(Zs)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new nn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let R=0;R<i.count;R++)a[R]=new D,l[R]=new D;let h=new D,u=new D,d=new D,f=new ct,p=new ct,x=new ct,m=new D,g=new D;function y(R,w,P){c[R]=c[w]=c[P]=1,h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,P),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,P),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(U),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(U),a[R].add(m),a[w].add(m),a[P].add(m),l[R].add(g),l[w].add(g),l[P].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,w=S.length;R<w;++R){let P=S[R],U=P.start,H=P.count;for(let L=U,k=U+H;L<k;L+=3)y(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let M=new D,T=new D,A=new D,_=new D;function v(R){A.fromBufferAttribute(s,R),_.copy(A);let w=a[R];M.copy(w),M.sub(A.multiplyScalar(A.dot(w))).normalize(),T.crossVectors(_,w);let U=T.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,U)}for(let R=0,w=i.count;R<w;++R)c[R]&&v(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new nn(d,h,u)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},po=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tu,this.updateRanges=[],this.version=0,this.uuid=ls()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Ed(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Ed(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Ed(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ls()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Tn=new D,cr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?hc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):If(t,this.data.array)}},ph=new D,tm=new D,em=new re,Kn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ph.subVectors(i,e).cross(tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ph),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||em.getNormalMatrix(t),s=this.coplanarPoint(ph).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},nm=0,ai=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=os,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Oh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Kn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vs=class extends ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$s,$r=new D,Js=new D,Ks=new D,Qs=new ct,Jr=new ct,Df=new Qt,Ma=new D,Kr=new D,va=new D,wd=new ct,mh=new ct,Td=new ct,hr=class extends ze{constructor(t=new vs){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new We;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new po(e,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new cr(i,3,0,!1)),$s.setAttribute("uv",new cr(i,2,3,!1))}this.geometry=$s,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Df.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Sa(Ma.set(-.5,-.5,0),Ks,o,Js,s,r),Sa(Kr.set(.5,-.5,0),Ks,o,Js,s,r),Sa(va.set(.5,.5,0),Ks,o,Js,s,r),wd.set(0,0),mh.set(1,0),Td.set(1,1);let a=t.ray.intersectTriangle(Ma,Kr,va,!1,$r);if(a===null&&(Sa(Kr.set(-.5,.5,0),Ks,o,Js,s,r),mh.set(0,1),a=t.ray.intersectTriangle(Ma,va,Kr,!1,$r),a===null))return;let l=t.ray.origin.distanceTo($r);l<t.near||l>t.far||e.push({distance:l,point:$r.clone(),uv:Ti.getInterpolation($r,Ma,Kr,va,wd,mh,Td,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Sa(n,t,e,i,s,r){Qs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Jr.x=r*Qs.x-s*Qs.y,Jr.y=s*Qs.x+r*Qs.y):Jr.copy(Qs),n.copy(t),n.x+=Jr.x,n.y+=Jr.y,n.applyMatrix4(Df)}var wi=new D,gh=new D,ba=new D,Ea=new D,tl=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){gh.copy(t).add(e).multiplyScalar(.5),ba.copy(e).sub(t).normalize(),Ea.copy(this.origin).sub(gh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ba),a=Ea.dot(this.direction),l=-Ea.dot(ba),c=Ea.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gh).addScaledVector(ba,d),f}intersectSphere(t,e){if(t.radius<0)return null;wi.subVectors(t.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=i.x-o.x,y=i.y-o.y,S=i.z-o.z,M=Math.abs(l),T=Math.abs(c),A=Math.abs(h),_,v,R,w,P,U,H,L,k,q,G,lt;if(M>=T&&M>=A?(R=l,U=u,k=p,lt=g,l>=0?(_=c,v=h,w=d,P=f,H=x,L=m,q=y,G=S):(_=h,v=c,w=f,P=d,H=m,L=x,q=S,G=y)):T>=A?(R=c,U=d,k=x,lt=y,c>=0?(_=h,v=l,w=f,P=u,H=m,L=p,q=S,G=g):(_=l,v=h,w=u,P=f,H=p,L=m,q=g,G=S)):(R=h,U=f,k=m,lt=S,h>=0?(_=l,v=c,w=u,P=d,H=p,L=x,q=g,G=y):(_=c,v=l,w=d,P=u,H=x,L=p,q=y,G=g)),R===0)return null;let Z=_/R,st=v/R,rt=1/R,At=w-Z*U,qt=P-st*U,K=H-Z*k,vt=L-st*k,Dt=q-Z*lt,Zt=G-st*lt,$=Dt*vt-Zt*K,It=At*Zt-qt*Dt,ce=K*qt-vt*At;if(s){if($<0||It<0||ce<0)return null}else if(($<0||It<0||ce<0)&&($>0||It>0||ce>0))return null;let Wt=$+It+ce;if(Wt===0)return null;let he=rt*($*U+It*k+ce*lt);return(Wt>0?he<0:he>0)?null:this.at(he/Wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qn=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ad=new Qt,gs=new tl,wa=new ji,Rd=new D,Ta=new D,Aa=new D,Ra=new D,xh=new D,Ca=new D,Cd=new D,Pa=new D,F=class extends ze{constructor(t=new We,e=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(xh.fromBufferAttribute(u,t),o?Ca.addScaledVector(xh,h):Ca.addScaledVector(xh.sub(e),h))}e.add(Ca)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(wa.containsPoint(gs.origin)===!1&&(gs.intersectSphere(wa,Rd)===null||gs.origin.distanceToSquared(Rd)>(t.far-t.near)**2))&&(Ad.copy(r).invert(),gs.copy(t.ray).applyMatrix4(Ad),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,T=S;M<T;M+=3){let A=a.getX(M),_=a.getX(M+1),v=a.getX(M+2);s=Ia(this,g,t,i,c,h,u,A,_,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=Ia(this,o,t,i,c,h,u,y,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,T=S;M<T;M+=3){let A=M,_=M+1,v=M+2;s=Ia(this,g,t,i,c,h,u,A,_,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,S=m+1,M=m+2;s=Ia(this,o,t,i,c,h,u,y,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function im(n,t,e,i,s,r,o,a){let l;if(t.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===rs,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Pa);return c<e.near||c>e.far?null:{distance:c,point:Pa.clone(),object:n}}function Ia(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ta),n.getVertexPosition(l,Aa),n.getVertexPosition(c,Ra);let h=im(n,t,e,i,Ta,Aa,Ra,Cd);if(h){let u=new D;Ti.getBarycoord(Cd,Ta,Aa,Ra,u),s&&(h.uv=Ti.getInterpolatedAttribute(s,a,l,c,u,new ct)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=Ti.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};Ti.getNormal(Ta,Aa,Ra,d.normal),h.face=d,h.barycoord=u}return h}var mo=class extends Rn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=dn,h=dn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class extends nn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},js=new Qt,Pd=new Qt,La=[],Id=new oi,sm=new Qt,Qr=new F,jr=new ji,ts=class extends F{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,sm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,js),Id.copy(t.boundingBox).applyMatrix4(js),this.boundingBox.union(Id)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,js),jr.copy(t.boundingSphere).applyMatrix4(js),this.boundingSphere.union(jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),t.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),Pd.multiplyMatrices(i,js),Qr.matrixWorld=Pd,Qr.raycast(t,La);for(let o=0,a=La.length;o<a;o++){let l=La[o];l.instanceId=r,l.object=this,e.push(l)}La.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new mo(new Float32Array(s*this.count),s,this.count,Pl,Xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new ji,rm=new ct(.5,.5),Da=new D,es=class{constructor(t=new Kn,e=new Kn,i=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=kn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],S=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,g-p,T-y).normalize(),s[1].setComponents(c+o,f+h,g+p,T+y).normalize(),s[2].setComponents(c+a,f+u,g+x,T+S).normalize(),s[3].setComponents(c-a,f-u,g-x,T-S).normalize(),i)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,g-m,T-M).normalize();else if(s[4].setComponents(c-l,f-d,g-m,T-M).normalize(),e===kn)s[5].setComponents(c+l,f+d,g+m,T+M).normalize();else if(e===rr)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);let e=rm.distanceTo(t.center);return xs.radius=.7071067811865476+e,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Da.x=s.normal.x>0?t.max.x:t.min.x,Da.y=s.normal.y>0?t.max.y:t.min.y,Da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ld=new Qt,el=class n{constructor(){this.coordinateSystem=kn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Ld.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new es),i[s].setFromProjectionMatrix(Ld,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new es),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var go=class extends Rn{constructor(t=[],e=Cs,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ci=class extends Rn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pi=class extends Rn{constructor(t,e,i=jn,s,r,o,a=dn,l=dn,c,h=Ri,u=1){if(h!==Ri&&h!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ar(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xo=class extends Pi{constructor(t,e=jn,i=Cs,s,r,o=dn,a=dn,l,c=Ri){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_o=class extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ge=class n extends We{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function p(x,m,g,y,S,M,T,A,_,v,R){let w=M/_,P=T/v,U=M/2,H=T/2,L=A/2,k=_+1,q=v+1,G=0,lt=0,Z=new D;for(let st=0;st<q;st++){let rt=st*P-H;for(let At=0;At<k;At++){let qt=At*w-U;Z[x]=qt*y,Z[m]=rt*S,Z[g]=L,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(At/_),u.push(1-st/v),G+=1}}for(let st=0;st<v;st++)for(let rt=0;rt<_;rt++){let At=d+rt+k*st,qt=d+rt+k*(st+1),K=d+(rt+1)+k*(st+1),vt=d+(rt+1)+k*st;l.push(At,qt,vt),l.push(qt,K,vt),lt+=6}a.addGroup(f,lt,R),f+=lt,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ii=class n extends We{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+r,x=s+1,m=new D,g=new D;for(let y=0;y<=p;y++){let S=0,M=0,T=0,A=0;if(y<=i){let R=y/i,w=R*Math.PI/2;M=-h-t*Math.cos(w),T=t*Math.sin(w),A=-t*Math.cos(w),S=R*u}else if(y<=i+r){let R=(y-i)/r;M=-h+R*e,T=t,A=0,S=u+R*d}else{let R=(y-i-r)/i,w=R*Math.PI/2;M=h+t*Math.sin(w),T=t*Math.cos(w),A=t*Math.sin(w),S=u+d+R*u}let _=Math.max(0,Math.min(1,S/f)),v=0;y===0?v=.5/s:y===p&&(v=-.5/s);for(let R=0;R<=s;R++){let w=R/s,P=w*Math.PI*2,U=Math.sin(P),H=Math.cos(P);g.x=-T*H,g.y=M,g.z=T*U,a.push(g.x,g.y,g.z),m.set(-T*H,A,T*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(w+v,_)}if(y>0){let R=(y-1)*x;for(let w=0;w<s;w++){let P=R+w,U=R+w+1,H=y*x+w,L=y*x+w+1;o.push(P,U,H),o.push(U,L,H)}}}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},li=class n extends We{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ft=class n extends We{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function y(){let M=new D,T=new D,A=0,_=(e-t)/i;for(let v=0;v<=r;v++){let R=[],w=v/r,P=w*(e-t)+t;for(let U=0;U<=s;U++){let H=U/s,L=H*l+a,k=Math.sin(L),q=Math.cos(L);T.x=P*k,T.y=-w*i+m,T.z=P*q,u.push(T.x,T.y,T.z),M.set(k,_,q).normalize(),d.push(M.x,M.y,M.z),f.push(H,1-w),R.push(p++)}x.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){let w=x[R][v],P=x[R+1][v],U=x[R+1][v+1],H=x[R][v+1];(t>0||R!==0)&&(h.push(w,P,H),A+=3),(e>0||R!==r-1)&&(h.push(P,U,H),A+=3)}c.addGroup(g,A,0),g+=A}function S(M){let T=p,A=new ct,_=new D,v=0,R=M===!0?t:e,w=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),p++;let P=p;for(let U=0;U<=s;U++){let L=U/s*l+a,k=Math.cos(L),q=Math.sin(L);_.x=R*q,_.y=m*w,_.z=R*k,u.push(_.x,_.y,_.z),d.push(0,w,0),A.x=k*.5+.5,A.y=q*.5*w+.5,f.push(A.x,A.y),p++}for(let U=0;U<s;U++){let H=T+U,L=P+U;M===!0?h.push(L,L+1,H):h.push(L+1,L,H),v+=3}c.addGroup(g,v,M===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gn=class n extends Ft{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nl=class n extends We{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new D,M=new D,T=new D;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],M),f(e[A+2],T),l(S,M,T,y)}function l(y,S,M,T){let A=T+1,_=[];for(let v=0;v<=A;v++){_[v]=[];let R=y.clone().lerp(M,v/A),w=S.clone().lerp(M,v/A),P=A-v;for(let U=0;U<=P;U++)U===0&&v===A?_[v][U]=R:_[v][U]=R.clone().lerp(w,U/P)}for(let v=0;v<A;v++)for(let R=0;R<2*(A-v)-1;R++){let w=Math.floor(R/2);R%2===0?(d(_[v][w+1]),d(_[v+1][w]),d(_[v][w])):(d(_[v][w+1]),d(_[v+1][w+1]),d(_[v+1][w]))}}function c(y){let S=new D;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(y),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let y=new D;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let M=m(y)/2/Math.PI+.5,T=g(y)/Math.PI+.5;o.push(M,1-T)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let S=o[y+0],M=o[y+2],T=o[y+4],A=Math.max(S,M,T),_=Math.min(S,M,T);A>.9&&_<.1&&(S<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){let M=y*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function p(){let y=new D,S=new D,M=new D,T=new D,A=new ct,_=new ct,v=new ct;for(let R=0,w=0;R<r.length;R+=9,w+=6){y.set(r[R+0],r[R+1],r[R+2]),S.set(r[R+3],r[R+4],r[R+5]),M.set(r[R+6],r[R+7],r[R+8]),A.set(o[w+0],o[w+1]),_.set(o[w+2],o[w+3]),v.set(o[w+4],o[w+5]),T.copy(y).add(S).add(M).divideScalar(3);let P=m(T);x(A,w+0,y,P),x(_,w+2,S,P),x(v,w+4,M,P)}}function x(y,S,M,T){T<0&&y.x===1&&(o[S]=y.x-1),M.x===0&&M.z===0&&(o[S]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new D,s=[],r=[],o=[],a=new D,l=new Qt;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(me(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(me(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},dr=class extends Un{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},il=class extends dr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Dd=new D,Nd=new D,_h=new nu,yh=new nu,Mh=new nu,fr=class extends Un{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Nd.subVectors(s[0],s[1]).add(s[0]),c=Nd);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Dd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),_h.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),yh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),Mh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(_h.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),yh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Mh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(_h.calc(l),yh.calc(l),Mh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ud(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function om(n,t){let e=1-n;return e*e*t}function am(n,t){return 2*(1-n)*n*t}function lm(n,t){return n*n*t}function eo(n,t,e,i){return om(n,t)+am(n,e)+lm(n,i)}function cm(n,t){let e=1-n;return e*e*e*t}function hm(n,t){let e=1-n;return 3*e*e*n*t}function um(n,t){return 3*(1-n)*n*n*t}function dm(n,t){return n*n*n*t}function no(n,t,e,i,s){return cm(n,t)+hm(n,e)+um(n,i)+dm(n,s)}var yo=class extends Un{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(no(t,s.x,r.x,o.x,a.x),no(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sl=class extends Un{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(no(t,s.x,r.x,o.x,a.x),no(t,s.y,r.y,o.y,a.y),no(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mo=class extends Un{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends Un{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends Un{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(eo(t,s.x,r.x,o.x),eo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends Un{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(eo(t,s.x,r.x,o.x),eo(t,s.y,r.y,o.y),eo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Ud(a,l.x,c.x,h.x,u.x),Ud(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},ol=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:fr,CubicBezierCurve:yo,CubicBezierCurve3:sl,EllipseCurve:dr,LineCurve:Mo,LineCurve3:rl,QuadraticBezierCurve:vo,QuadraticBezierCurve3:So,SplineCurve:bo}),al=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ol[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ss=class extends al{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Mo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new vo(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new yo(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new bo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new dr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ci=class extends Ss{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ss().fromJSON(s))}return this}};function fm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Nf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=_m(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Eo(r,o,e,a,l,c,0),o}function Nf(n,t,e,i,s){let r;if(s===Cm(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Fd(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Fd(o/i|0,n[o],n[o+1],r);return r&&pr(r,r.next)&&(To(r),r=r.next),r}function bs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(pr(e,e.next)||$e(e.prev,e,e.next)===0)){if(To(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Eo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&bm(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?mm(n,i,s,r):pm(n)){t.push(l.i,n.i,c.i),To(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=gm(bs(n),t),Eo(n,t,e,i,s,r,2)):o===2&&xm(n,t,e,i,s,r):Eo(bs(n),t,e,i,s,r,1);break}}}function pm(n){let t=n.prev,e=n,i=n.next;if($e(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&to(s,a,r,l,o,c,p.x,p.y)&&$e(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function mm(n,t,e,i){let s=n.prev,r=n,o=n.next;if($e(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=Th(f,p,t,e,i),y=Th(x,m,t,e,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=g&&M&&M.z<=y;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&to(a,h,l,u,c,d,S.x,S.y)&&$e(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&to(a,h,l,u,c,d,M.x,M.y)&&$e(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&to(a,h,l,u,c,d,S.x,S.y)&&$e(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&to(a,h,l,u,c,d,M.x,M.y)&&$e(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function gm(n,t){let e=n;do{let i=e.prev,s=e.next.next;!pr(i,s)&&Ff(i,e,e.next,s)&&wo(i,s)&&wo(s,i)&&(t.push(i.i,e.i,s.i),To(e),To(e.next),e=n=s),e=e.next}while(e!==n);return bs(e)}function xm(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tm(o,a)){let l=Of(o,a);o=bs(o,o.next),l=bs(l,l.next),Eo(o,t,e,i,s,r,0),Eo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function _m(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Nf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(wm(c))}s.sort(ym);for(let r=0;r<s.length;r++)e=Mm(s[r],e);return e}function ym(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Mm(n,t){let e=vm(n,t);if(!e)return t;let i=Of(e,n);return bs(i,i.next),bs(e,e.next)}function vm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(pr(n,e))return e;do{if(pr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Uf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);wo(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Sm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Sm(n,t){return $e(n.prev,n,t.prev)<0&&$e(t.next,n,n.next)<0}function bm(n,t,e,i){let s=n;do s.z===0&&(s.z=Th(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Em(s)}function Em(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Th(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function wm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Uf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function to(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Uf(n,t,e,i,s,r,o,a)}function Tm(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Am(n,t)&&(wo(n,t)&&wo(t,n)&&Rm(n,t)&&($e(n.prev,n,t.prev)||$e(n,t.prev,t))||pr(n,t)&&$e(n.prev,n,n.next)>0&&$e(t.prev,t,t.next)>0)}function $e(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function pr(n,t){return n.x===t.x&&n.y===t.y}function Ff(n,t,e,i){let s=Ua($e(n,t,e)),r=Ua($e(n,t,i)),o=Ua($e(e,i,n)),a=Ua($e(e,i,t));return!!(s!==r&&o!==a||s===0&&Na(n,e,t)||r===0&&Na(n,i,t)||o===0&&Na(e,n,i)||a===0&&Na(e,t,i))}function Na(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ua(n){return n>0?1:n<0?-1:0}function Am(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ff(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function wo(n,t){return $e(n.prev,n,n.next)<0?$e(n,t,n.next)>=0&&$e(n,n.prev,t)>=0:$e(n,t,n.prev)<0||$e(n,n.next,t)<0}function Rm(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Of(n,t){let e=Ah(n.i,n.x,n.y),i=Ah(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fd(n,t,e,i){let s=Ah(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function To(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ah(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cm(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Rh=class{static triangulate(t,e,i=2){return fm(t,e,i)}},_s=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Od(t),Bd(i,t);let o=t.length;e.forEach(Od);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Bd(i,e[l]);let a=Rh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Od(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Bd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Li=class n extends We{constructor(t=new ci([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Pm,S,M=!1,T,A,_,v;if(g){S=g.getSpacedPoints(h),M=!0,d=!1;let at=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,at),A=new D,_=new D,v=new D}d||(m=0,f=0,p=0,x=0);let R=a.extractPoints(c),w=R.shape,P=R.holes;if(!_s.isClockWise(w)){w=w.reverse();for(let at=0,xt=P.length;at<xt;at++){let pt=P[at];_s.isClockWise(pt)&&(P[at]=pt.reverse())}}function H(at){let pt=10000000000000001e-36,Nt=at[0];for(let Tt=1;Tt<=at.length;Tt++){let le=Tt%at.length,Gt=at[le],Se=Gt.x-Nt.x,be=Gt.y-Nt.y,Pe=Se*Se+be*be,B=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(Nt.x),Math.abs(Nt.y)),je=pt*B*B;if(Pe<=je){at.splice(le,1),Tt--;continue}Nt=Gt}}H(w),P.forEach(H);let L=P.length,k=w;for(let at=0;at<L;at++){let xt=P[at];w=w.concat(xt)}function q(at,xt,pt){return xt||jt("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(xt,pt)}let G=w.length;function lt(at,xt,pt){let Nt,Tt,le,Gt=at.x-xt.x,Se=at.y-xt.y,be=pt.x-at.x,Pe=pt.y-at.y,B=Gt*Gt+Se*Se,je=Gt*Pe-Se*be;if(Math.abs(je)>Number.EPSILON){let _e=Math.sqrt(B),Oe=Math.sqrt(be*be+Pe*Pe),St=xt.x-Se/_e,Je=xt.y+Gt/_e,Jt=pt.x-Pe/Oe,ee=pt.y+be/Oe,C=((Jt-St)*Pe-(ee-Je)*be)/(Gt*Pe-Se*be);Nt=St+Gt*C-at.x,Tt=Je+Se*C-at.y;let b=Nt*Nt+Tt*Tt;if(b<=2)return new ct(Nt,Tt);le=Math.sqrt(b/2)}else{let _e=!1;Gt>Number.EPSILON?be>Number.EPSILON&&(_e=!0):Gt<-Number.EPSILON?be<-Number.EPSILON&&(_e=!0):Math.sign(Se)===Math.sign(Pe)&&(_e=!0),_e?(Nt=-Se,Tt=Gt,le=Math.sqrt(B)):(Nt=Gt,Tt=Se,le=Math.sqrt(B/2))}return new ct(Nt/le,Tt/le)}let Z=[];for(let at=0,xt=k.length,pt=xt-1,Nt=at+1;at<xt;at++,pt++,Nt++)pt===xt&&(pt=0),Nt===xt&&(Nt=0),Z[at]=lt(k[at],k[pt],k[Nt]);let st=[],rt,At=Z.concat();for(let at=0,xt=L;at<xt;at++){let pt=P[at];rt=[];for(let Nt=0,Tt=pt.length,le=Tt-1,Gt=Nt+1;Nt<Tt;Nt++,le++,Gt++)le===Tt&&(le=0),Gt===Tt&&(Gt=0),rt[Nt]=lt(pt[Nt],pt[le],pt[Gt]);st.push(rt),At=At.concat(rt)}let qt;if(m===0)qt=_s.triangulateShape(k,P);else{let at=[],xt=[];for(let pt=0;pt<m;pt++){let Nt=pt/m,Tt=f*Math.cos(Nt*Math.PI/2),le=p*Math.sin(Nt*Math.PI/2)+x;for(let Gt=0,Se=k.length;Gt<Se;Gt++){let be=q(k[Gt],Z[Gt],le);It(be.x,be.y,-Tt),Nt===0&&at.push(be)}for(let Gt=0,Se=L;Gt<Se;Gt++){let be=P[Gt];rt=st[Gt];let Pe=[];for(let B=0,je=be.length;B<je;B++){let _e=q(be[B],rt[B],le);It(_e.x,_e.y,-Tt),Nt===0&&Pe.push(_e)}Nt===0&&xt.push(Pe)}}qt=_s.triangulateShape(at,xt)}let K=qt.length,vt=p+x;for(let at=0;at<G;at++){let xt=d?q(w[at],At[at],vt):w[at];M?(_.copy(T.normals[0]).multiplyScalar(xt.x),A.copy(T.binormals[0]).multiplyScalar(xt.y),v.copy(S[0]).add(_).add(A),It(v.x,v.y,v.z)):It(xt.x,xt.y,0)}for(let at=1;at<=h;at++)for(let xt=0;xt<G;xt++){let pt=d?q(w[xt],At[xt],vt):w[xt];M?(_.copy(T.normals[at]).multiplyScalar(pt.x),A.copy(T.binormals[at]).multiplyScalar(pt.y),v.copy(S[at]).add(_).add(A),It(v.x,v.y,v.z)):It(pt.x,pt.y,u/h*at)}for(let at=m-1;at>=0;at--){let xt=at/m,pt=f*Math.cos(xt*Math.PI/2),Nt=p*Math.sin(xt*Math.PI/2)+x;for(let Tt=0,le=k.length;Tt<le;Tt++){let Gt=q(k[Tt],Z[Tt],Nt);It(Gt.x,Gt.y,u+pt)}for(let Tt=0,le=P.length;Tt<le;Tt++){let Gt=P[Tt];rt=st[Tt];for(let Se=0,be=Gt.length;Se<be;Se++){let Pe=q(Gt[Se],rt[Se],Nt);M?It(Pe.x,Pe.y+S[h-1].y,S[h-1].x+pt):It(Pe.x,Pe.y,u+pt)}}}Dt(),Zt();function Dt(){let at=s.length/3;if(d){let xt=0,pt=G*xt;for(let Nt=0;Nt<K;Nt++){let Tt=qt[Nt];ce(Tt[2]+pt,Tt[1]+pt,Tt[0]+pt)}xt=h+m*2,pt=G*xt;for(let Nt=0;Nt<K;Nt++){let Tt=qt[Nt];ce(Tt[0]+pt,Tt[1]+pt,Tt[2]+pt)}}else{for(let xt=0;xt<K;xt++){let pt=qt[xt];ce(pt[2],pt[1],pt[0])}for(let xt=0;xt<K;xt++){let pt=qt[xt];ce(pt[0]+G*h,pt[1]+G*h,pt[2]+G*h)}}i.addGroup(at,s.length/3-at,0)}function Zt(){let at=s.length/3,xt=0;$(k,xt),xt+=k.length;for(let pt=0,Nt=P.length;pt<Nt;pt++){let Tt=P[pt];$(Tt,xt),xt+=Tt.length}i.addGroup(at,s.length/3-at,1)}function $(at,xt){let pt=at.length;for(;--pt>=0;){let Nt=pt,Tt=pt-1;Tt<0&&(Tt=at.length-1);for(let le=0,Gt=h+m*2;le<Gt;le++){let Se=G*le,be=G*(le+1),Pe=xt+Nt+Se,B=xt+Tt+Se,je=xt+Tt+be,_e=xt+Nt+be;Wt(Pe,B,je,_e)}}}function It(at,xt,pt){l.push(at),l.push(xt),l.push(pt)}function ce(at,xt,pt){he(at),he(xt),he(pt);let Nt=s.length/3,Tt=y.generateTopUV(i,s,Nt-3,Nt-2,Nt-1);ve(Tt[0]),ve(Tt[1]),ve(Tt[2])}function Wt(at,xt,pt,Nt){he(at),he(xt),he(Nt),he(xt),he(pt),he(Nt);let Tt=s.length/3,le=y.generateSideWallUV(i,s,Tt-6,Tt-3,Tt-2,Tt-1);ve(le[0]),ve(le[1]),ve(le[3]),ve(le[1]),ve(le[2]),ve(le[3])}function he(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function ve(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Im(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ol[s.type]().fromJSON(s)),new n(i,t.options)}},Pm={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(d,1-p),new ct(x,1-g)]:[new ct(a,1-l),new ct(h,1-u),new ct(f,1-p),new ct(m,1-g)]}};function Im(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Vn=class n extends nl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Es=class n extends We{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new D,d=new ct,f=new D,p=new D,x=new D,m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=e;y++){let S=i+y*h*s,M=Math.sin(S),T=Math.cos(S);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*M,u.y=t[A].y,u.z=t[A].x*T,o.push(u.x,u.y,u.z),d.x=y/e,d.y=A/(t.length-1),a.push(d.x,d.y);let _=l[3*A+0]*M,v=l[3*A+1],R=l[3*A+0]*T;c.push(_,v,R)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let M=S+y*t.length,T=M,A=M+t.length,_=M+t.length+1,v=M+1;r.push(T,A,v),r.push(_,v,A)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var xn=class n extends We{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*d-o;for(let S=0;S<c;S++){let M=S*u-r;p.push(M,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let S=y+c*g,M=y+c*(g+1),T=y+1+c*(g+1),A=y+1+c*g;f.push(S,M,A),f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ye=class n extends We{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new D,d=new D,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],S=g/i,M=o+S*a,T=t*Math.cos(M),A=Math.sqrt(t*t-T*T),_=0;g===0&&o===0?_=.5/e:g===i&&l===Math.PI&&(_=-.5/e);for(let v=0;v<=e;v++){let R=v/e,w=s+R*r;u.x=-A*Math.cos(w),u.y=T,u.z=A*Math.sin(w),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+_,1-S),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<e;y++){let S=h[g][y+1],M=h[g][y],T=h[g+1][y],A=h[g+1][y+1];(g!==0||o>0)&&f.push(S,M,A),(g!==i-1||l<Math.PI)&&f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xe=class n extends We{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new D,f=new D,p=new D;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,S=(s+1)*(x-1)+m,M=(s+1)*x+m;l.push(g,y,M),l.push(y,S,M)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ao=class n extends We{constructor(t=new So(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new ct,h=new D,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function x(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),y(),g()}function m(S){h=t.getPointAt(S/e,h);let M=o.normals[S],T=o.binormals[S];for(let A=0;A<=s;A++){let _=A/s*Math.PI*2,v=Math.sin(_),R=-Math.cos(_);l.x=R*M.x+v*T.x,l.y=R*M.y+v*T.y,l.z=R*M.z+v*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=e;S++)for(let M=1;M<=s;M++){let T=(s+1)*(S-1)+(M-1),A=(s+1)*S+(M-1),_=(s+1)*S+M,v=(s+1)*(S-1)+M;p.push(T,A,v),p.push(A,_,v)}}function y(){for(let S=0;S<=e;S++)for(let M=0;M<=s;M++)c.x=S/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new ol[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Is(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Hd(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Hd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function bn(n){let t={};for(let e=0;e<n.length;e++){let i=Is(n[e]);for(let s in i)t[s]=i[s]}return t}function Hd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Lm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function iu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var Bf={clone:Is,merge:bn},Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wn=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dm,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Lm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(s.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"m3":this.uniforms[i].value=new re().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Qt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ll=class extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ae=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hi=class extends ae{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ro=class extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=bl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},cl=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function tr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Fa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ns=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ul=class extends ns{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eh:r=t,a=2*e-i;break;case wh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eh:o=t,l=2*i-e;break;case wh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*x+.5*p,M=f*m-f*x;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+y*o[c+T]+S*o[l+T]+M*o[u+T];return r}},dl=class extends ns{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},fl=class extends ns{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pl=class extends ns{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(s-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,y=u[g],S=u[g+1],M=t*d+p*2,T=h[M],A=h[M+1],_=Fm(i,e,y,T,s);r[p]=Hf(_,x,S,A,m)}return r}};function Hf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Um(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Fm(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Hf(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Um(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Fn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(e,this.TimeBufferType),this.values=tr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Fa(t.settings)&&(i.settings={inTangents:tr(t.settings.inTangents,Array),outTangents:tr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case io:e=this.InterpolantFactoryMethodDiscrete;break;case $a:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break;case Sh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Kt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return io;case this.InterpolantFactoryMethodLinear:return $a;case this.InterpolantFactoryMethodSmooth:return Ha;case this.InterpolantFactoryMethodBezier:return Sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Fa(this.settings)&&(kd(this.settings.inTangents,t),kd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Fa(this.settings)&&(zd(this.settings.inTangents,t),zd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&H0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ha,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Fa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function kd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function zd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=$a;var is=class extends Fn{constructor(t,e,i){super(t,e,i)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=io;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};ml.prototype.ValueTypeName="color";var gl=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};gl.prototype.ValueTypeName="number";var xl=class extends ns{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Co=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Fn{constructor(t,e,i){super(t,e,i)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=io;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};_l.prototype.ValueTypeName="vector";var yl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kf=new yl,Ml=class{constructor(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var mr=class extends ze{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},gr=class extends mr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vh=new Qt,Gd=new D,Vd=new D,Po=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Gd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gd),Vd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(vh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===rr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oa=new D,Ba=new Qe,ii=new D,Io=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oa,Ba,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Ba,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Oa,Ba,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Ba,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new D,Wd=new ct,Xd=new ct,gn=class extends Io{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,Wd,Xd),e.subVectors(Xd,Wd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ch=class extends Po{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},ui=class extends mr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Lo=class extends Io{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ph=class extends Po{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xr=class extends mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Ph}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var er=-90,nr=1,_r=class extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new gn(er,nr,t,e);r.layers=this.layers,this.add(r);let o=new gn(er,nr,t,e);o.layers=this.layers,this.add(o);let a=new gn(er,nr,t,e);a.layers=this.layers,this.add(a);let l=new gn(er,nr,t,e);l.layers=this.layers,this.add(l);let c=new gn(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},vl=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var su="\\[\\]\\.:\\/",Om=new RegExp("["+su+"]","g"),ru="[^"+su+"]",Bm="[^"+su.replace("\\.","")+"]",Hm=/((?:WC+[\/:])*)/.source.replace("WC",ru),km=/(WCOD+)?/.source.replace("WCOD",Bm),zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),Vm=new RegExp("^"+Hm+km+zm+Gm+"$"),Wm=["material","materials","bones","map"],Ih=class{constructor(t,e,i){let s=i||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ge=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Om,"")}static parseTrackName(t){let e=Vm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=Ih;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i1=new Float32Array(1);var uu=class uu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};uu.prototype.isMatrix2=!0;var Lh=uu;function ou(n,t,e,i){let s=Xm(i);switch(e){case $h:return n*t;case Pl:return n*t/s.components*s.byteLength;case Il:return n*t/s.components*s.byteLength;case as:return n*t*2/s.components*s.byteLength;case Ll:return n*t*2/s.components*s.byteLength;case Jh:return n*t*3/s.components*s.byteLength;case ei:return n*t*4/s.components*s.byteLength;case Dl:return n*t*4/s.components*s.byteLength;case Uo:case Fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Ol:return Math.max(n,16)*Math.max(t,8)/4;case Nl:case Fl:return Math.max(n,8)*Math.max(t,8)/2;case Bl:case Hl:case zl:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kl:case Ho:case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sc:case rc:case oc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ac:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ko:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xm(n){switch(n){case In:case Xh:return{byteLength:1,components:1};case vr:case qh:case ti:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case jn:case Al:case Xn:return{byteLength:4,components:1};case Yh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function lp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Km(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
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
#endif`,tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sg=`#ifdef USE_AOMAP
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
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,og=`#ifdef USE_BATCHING
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
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,dg=`#ifdef USE_BUMPMAP
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vg=`#define PI 3.141592653589793
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
} // validated`,Sg=`vec3 transformedNormal = objectNormal;
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
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,Hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
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
#endif`,$g=`uniform sampler2D dfgLUT;
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
}`,Jg=`
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
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
#endif`,dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
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
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fx=`float getShadowMask() {
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
}`,Ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,Hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qx=`uniform sampler2D t2D;
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform float backgroundBlurriness;
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
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
}`,s_=`#if DEPTH_PACKING == 3200
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
}`,r_=`#define DISTANCE
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
}`,o_=`#define DISTANCE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`uniform float scale;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define MATCAP
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
}`,g_=`#define MATCAP
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
}`,x_=`#define NORMAL
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
}`,__=`#define NORMAL
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
}`,y_=`#define PHONG
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
}`,M_=`#define PHONG
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
}`,v_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
}`,b_=`#define TOON
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
}`,E_=`#define TOON
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
}`,w_=`uniform float size;
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
}`,T_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 color;
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
}`,C_=`uniform float rotation;
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
}`,P_=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Qm,alphahash_pars_fragment:jm,alphamap_fragment:tg,alphamap_pars_fragment:eg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:sg,aomap_pars_fragment:rg,batching_pars_vertex:og,batching_vertex:ag,begin_vertex:lg,beginnormal_vertex:cg,bsdfs:hg,iridescence_fragment:ug,bumpmap_pars_fragment:dg,clipping_planes_fragment:fg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:gg,color_fragment:xg,color_pars_fragment:_g,color_pars_vertex:yg,color_vertex:Mg,common:vg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:bg,displacementmap_vertex:Eg,emissivemap_fragment:wg,emissivemap_pars_fragment:Tg,colorspace_fragment:Ag,colorspace_pars_fragment:Rg,envmap_fragment:Cg,envmap_common_pars_fragment:Pg,envmap_pars_fragment:Ig,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Vg,envmap_vertex:Dg,fog_vertex:Ng,fog_pars_vertex:Ug,fog_fragment:Fg,fog_pars_fragment:Og,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:Hg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:zg,lights_pars_begin:Gg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:Yg,lights_physical_fragment:Zg,lights_physical_pars_fragment:$g,lights_fragment_begin:Jg,lights_fragment_maps:Kg,lights_fragment_end:Qg,lightprobes_pars_fragment:jg,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:sx,map_pars_fragment:rx,map_particle_fragment:ox,map_particle_pars_fragment:ax,metalnessmap_fragment:lx,metalnessmap_pars_fragment:cx,morphinstance_vertex:hx,morphcolor_vertex:ux,morphnormal_vertex:dx,morphtarget_pars_vertex:fx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:gx,normal_pars_fragment:xx,normal_pars_vertex:_x,normal_vertex:yx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:Sx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:Ex,opaque_fragment:wx,packing:Tx,premultiplied_alpha_fragment:Ax,project_vertex:Rx,dithering_fragment:Cx,dithering_pars_fragment:Px,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Nx,shadowmap_vertex:Ux,shadowmask_pars_fragment:Fx,skinbase_vertex:Ox,skinning_pars_vertex:Bx,skinning_vertex:Hx,skinnormal_vertex:kx,specularmap_fragment:zx,specularmap_pars_fragment:Gx,tonemapping_fragment:Vx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:qx,uv_pars_fragment:Yx,uv_pars_vertex:Zx,uv_vertex:$x,worldpos_vertex:Jx,background_vert:Kx,background_frag:Qx,backgroundCube_vert:jx,backgroundCube_frag:t_,cube_vert:e_,cube_frag:n_,depth_vert:i_,depth_frag:s_,distance_vert:r_,distance_frag:o_,equirect_vert:a_,equirect_frag:l_,linedashed_vert:c_,linedashed_frag:h_,meshbasic_vert:u_,meshbasic_frag:d_,meshlambert_vert:f_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:g_,meshnormal_vert:x_,meshnormal_frag:__,meshphong_vert:y_,meshphong_frag:M_,meshphysical_vert:v_,meshphysical_frag:S_,meshtoon_vert:b_,meshtoon_frag:E_,points_vert:w_,points_frag:T_,shadow_vert:A_,shadow_frag:R_,sprite_vert:C_,sprite_frag:P_},Ct={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},pi={basic:{uniforms:bn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:bn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:bn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:bn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:bn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:bn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:bn([Ct.points,Ct.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:bn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:bn([Ct.common,Ct.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:bn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:bn([Ct.sprite,Ct.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:bn([Ct.common,Ct.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:bn([Ct.lights,Ct.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};pi.physical={uniforms:bn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var uc={r:0,b:0,g:0},I_=new Qt,cp=new re;cp.set(-1,0,0,0,1,0,0,0,1);function L_(n,t,e,i,s,r){let o=new se(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let M=y.backgroundBlurriness>0;S=t.get(S,M)}return S}function p(y){let S=!1,M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,S){let M=f(S);M&&M.isCubeTexture?(c===void 0&&(c=new F(new ge(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Is(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(I_.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cp),c.material.toneMapped=Te.getTransfer(M.colorSpace)!==Le,(h!==M||u!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new F(new xn(2,2),new Wn({name:"BackgroundMaterial",uniforms:Is(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Te.getTransfer(M.colorSpace)!==Le,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(uc,iu(n)),e.buffers.color.setClear(uc.r,uc.g,uc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function D_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(P,U,H,L,k){let q=!1,G=u(P,L,H,U);r!==G&&(r=G,c(r.object)),q=f(P,L,H,k),q&&p(P,L,H,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(P,U,H,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,U,H,L){let k=L.wireframe===!0,q=i[U.id];q===void 0&&(q={},i[U.id]=q);let G=P.isInstancedMesh===!0?P.id:0,lt=q[G];lt===void 0&&(lt={},q[G]=lt);let Z=lt[H.id];Z===void 0&&(Z={},lt[H.id]=Z);let st=Z[k];return st===void 0&&(st=d(l()),Z[k]=st),st}function d(P){let U=[],H=[],L=[];for(let k=0;k<e;k++)U[k]=0,H[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,U,H,L){let k=r.attributes,q=U.attributes,G=0,lt=H.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let rt=k[Z],At=q[Z];if(At===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(At=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(At=P.instanceColor)),rt===void 0||rt.attribute!==At||At&&rt.data!==At.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function p(P,U,H,L){let k={},q=U.attributes,G=0,lt=H.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let rt=q[Z];rt===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor));let At={};At.attribute=rt,rt&&rt.data&&(At.data=rt.data),k[Z]=At,G++}r.attributes=k,r.attributesNum=G,r.index=L}function x(){let P=r.newAttributes;for(let U=0,H=P.length;U<H;U++)P[U]=0}function m(P){g(P,0)}function g(P,U){let H=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;H[P]=1,L[P]===0&&(n.enableVertexAttribArray(P),L[P]=1),k[P]!==U&&(n.vertexAttribDivisor(P,U),k[P]=U)}function y(){let P=r.newAttributes,U=r.enabledAttributes;for(let H=0,L=U.length;H<L;H++)U[H]!==P[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function S(P,U,H,L,k,q,G){G===!0?n.vertexAttribIPointer(P,U,H,k,q):n.vertexAttribPointer(P,U,H,L,k,q)}function M(P,U,H,L){x();let k=L.attributes,q=H.getAttributes(),G=U.defaultAttributeValues;for(let lt in q){let Z=q[lt];if(Z.location>=0){let st=k[lt];if(st===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(st=P.instanceColor)),st!==void 0){let rt=st.normalized,At=st.itemSize,qt=t.get(st);if(qt===void 0)continue;let K=qt.buffer,vt=qt.type,Dt=qt.bytesPerElement,Zt=vt===n.INT||vt===n.UNSIGNED_INT||st.gpuType===Al;if(st.isInterleavedBufferAttribute){let $=st.data,It=$.isInterleavedBuffer===!0?$.stride:$.itemSize,ce=st.offset;if($.isInstancedInterleavedBuffer||$.isInstancedBufferAttribute){for(let Wt=0;Wt<Z.locationSize;Wt++)g(Z.location+Wt,$.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Wt=0;Wt<Z.locationSize;Wt++)m(Z.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Wt=0;Wt<Z.locationSize;Wt++)S(Z.location+Wt,At/Z.locationSize,vt,rt,It*Dt,(ce+At/Z.locationSize*Wt)*Dt,Zt)}else{if(st.isInstancedBufferAttribute){for(let $=0;$<Z.locationSize;$++)g(Z.location+$,st.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let $=0;$<Z.locationSize;$++)m(Z.location+$);n.bindBuffer(n.ARRAY_BUFFER,K);for(let $=0;$<Z.locationSize;$++)S(Z.location+$,At/Z.locationSize,vt,rt,At*Dt,At/Z.locationSize*$*Dt,Zt)}}else if(G!==void 0){let rt=G[lt];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(Z.location,rt);break;case 3:n.vertexAttrib3fv(Z.location,rt);break;case 4:n.vertexAttrib4fv(Z.location,rt);break;default:n.vertexAttrib1fv(Z.location,rt)}}}}y()}function T(){R();for(let P in i){let U=i[P];for(let H in U){let L=U[H];for(let k in L){let q=L[k];for(let G in q)h(q[G].object),delete q[G];delete L[k]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;let U=i[P.id];for(let H in U){let L=U[H];for(let k in L){let q=L[k];for(let G in q)h(q[G].object),delete q[G];delete L[k]}}delete i[P.id]}function _(P){for(let U in i){let H=i[U];for(let L in H){let k=H[L];if(k[P.id]===void 0)continue;let q=k[P.id];for(let G in q)h(q[G].object),delete q[G];delete k[P.id]}}}function v(P){for(let U in i){let H=i[U],L=P.isInstancedMesh===!0?P.id:0,k=H[L];if(k!==void 0){for(let q in k){let G=k[q];for(let lt in G)h(G[lt].object),delete G[lt];delete k[q]}delete H[L],Object.keys(H).length===0&&delete i[U]}}}function R(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function N_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function U_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==ei&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let v=_===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==In&&_!==Xn&&!v&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:T,samples:A}}function F_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Kn,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,S=y*4,M=g.clippingState||null;l.value=M,M=h(p,d,S,f);for(let T=0;T!==S;++T)M[T]=e[T];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,M=f;S!==x;++S,M+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Wo=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new go(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ge(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ts});r.uniforms.tEquirect.value=e;let o=new F(s,r),a=e.minFilter;return e.minFilter===Di&&(e.minFilter=An),new _r(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},zf=256,O_=3,B_=20,hp=256,up=16,H_=3,k_=new D,z_=new se,br=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _r(1,10,null),this._boxMesh=new F(new ge(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=k_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(z_));let m=new _r(i,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(zf,Cf(t))}_fromTexture(t,e){t.mapping===Cs||t.mapping===Mr?this._setSize(t.image.length===0?zf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Gf(t,!1,!1),i=Math.log2(t)-O_;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Gf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Cs||t.mapping===Mr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=G_(),this._integrationMaterial=V_());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/up);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-H_)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(hp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=W_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Gf(n,t,e){return new Wo(n,{minFilter:Di,generateMipmaps:t,type:ti,colorSpace:so,depthBuffer:e})}function Xo(n,t,e){return new Wn({name:n,uniforms:t,vertexShader:fe.cube_vert,fragmentShader:e,side:on,blending:Ts,depthTest:!1,depthWrite:!1})}function G_(){return Xo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hp}u

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
	`)}function V_(){return Xo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:up}},`

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
	`)}function W_(){return Xo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${B_}
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
	`)}function Vf(){return Xo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Wf(){return Xo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function X_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===El||f===wl)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Wo(p.height);return x.fromEquirectangularTexture(n,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===El||f===wl,x=f===Cs||f===Mr;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new br(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new br(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===El?d.mapping=Cs:f===wl&&(d.mapping=Mr),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function q_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ys("WebGLRenderer: "+i+" extension not supported."),s}}}function Y_(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],n.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,S=m.count>=65535?fo:uo,M=new S(Math.ceil(y/3)*6,1),T=M.array;if(x!==null){let _=x.array;g=x.version;for(let v=0,R=0;v<y;v+=3){let w=_[v+0],P=_[v+1],U=_[v+2];T[R++]=w,T[R++]=P,T[R++]=P,T[R++]=U,T[R++]=U,T[R++]=w}}else{g=m.version;for(let _=0,v=0;_<y;_+=3){let R=_+0,w=_+1,P=_+2;T[v++]=R,T[v++]=w,T[v++]=w,T[v++]=P,T[v++]=P,T[v++]=R}}M.version=g;let A=r.get(p);A&&t.remove(A),r.set(p,M)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Z_(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function $_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function J_(n,t,e){let i=new WeakMap,s=new Ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let R=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*T*4*u),_=new lo(A,M,T,u);_.type=Xn,_.needsUpdate=!0;let v=S*4;for(let w=0;w<u;w++){let P=m[w],U=g[w],H=y[w],L=M*T*4*w;for(let k=0;k<P.count;k++){let q=k*v;f===!0&&(s.fromBufferAttribute(P,k),A[L+q+0]=s.x,A[L+q+1]=s.y,A[L+q+2]=s.z,A[L+q+3]=0),p===!0&&(s.fromBufferAttribute(U,k),A[L+q+4]=s.x,A[L+q+5]=s.y,A[L+q+6]=s.z,A[L+q+7]=0),x===!0&&(s.fromBufferAttribute(H,k),A[L+q+8]=s.x,A[L+q+9]=s.y,A[L+q+10]=s.z,A[L+q+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new ct(M,T)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function K_(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Q_={[Bh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[kh]:"CINEON_TONE_MAPPING",[Do]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Vh]:"NEUTRAL_TONE_MAPPING",[zh]:"CUSTOM_TONE_MAPPING"};function j_(n,t,e,i,s,r){let o=new Nn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new We;h.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ne([0,2,0,0,2,0],2));let u=new ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new F(h,u),f=new Lo(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,S=[],M=!1;this.setSize=function(T,A){o.setSize(T,A),a!==null&&a.setSize(T,A),l!==null&&l.setSize(T,A);for(let _=0;_<S.length;_++){let v=S[_];v.setSize&&v.setSize(T,A)}},this.setEffects=function(T){S=T,M=S.length>0&&S[0].isRenderPass===!0;let A=o.width,_=o.height;S.length>0&&a===null&&(a=new Nn(A,_,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(A,_,{type:ti,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&S.some(R=>R.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new Pi(A,_),r===!0&&(c.format=Ni,c.type=Ps)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let R=0;R<S.length;R++){let w=S[R];w.setSize&&w.setSize(A,_),v&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(T,A){if(m||T.toneMapping===di&&S.length===0)return!1;if(y=A,A!==null){let _=A.width,v=A.height;(o.width!==_||o.height!==v)&&this.setSize(_,v)}return M===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=di,!0},this.hasRenderPass=function(){return M},this.end=function(T,A){T.toneMapping=g,m=!0;let _=o,v=a;for(let R=0;R<S.length;R++){let w=S[R];w.enabled!==!1&&(w.render(T,v,_,A),w.needsSwap!==!1&&(_=v,v=v===a?l:a))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,u.defines={},Te.getTransfer(p)===Le&&(u.defines.SRGB_TRANSFER="");let R=Q_[x];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var dp=new Rn,fp=new Pi(1,1),pp=new xo(1),mp=new lo,gp=new ja,xp=new go,Xf=[],qf=[],Yf=new Float32Array(16),Zf=new Float32Array(9),$f=new Float32Array(4);function Er(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Xf[s];if(r===void 0&&(r=new Float32Array(s),Xf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function an(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ln(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function pc(n,t){let e=qf[t];e===void 0&&(e=new Int32Array(t),qf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ty(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ey(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2fv(this.addr,t),ln(e,t)}}function ny(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;n.uniform3fv(this.addr,t),ln(e,t)}}function iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4fv(this.addr,t),ln(e,t)}}function sy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;$f.set(i),n.uniformMatrix2fv(this.addr,!1,$f),ln(e,i)}}function ry(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;Zf.set(i),n.uniformMatrix3fv(this.addr,!1,Zf),ln(e,i)}}function oy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;Yf.set(i),n.uniformMatrix4fv(this.addr,!1,Yf),ln(e,i)}}function ay(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ly(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2iv(this.addr,t),ln(e,t)}}function cy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3iv(this.addr,t),ln(e,t)}}function hy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4iv(this.addr,t),ln(e,t)}}function uy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2uiv(this.addr,t),ln(e,t)}}function fy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3uiv(this.addr,t),ln(e,t)}}function py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4uiv(this.addr,t),ln(e,t)}}function mc(n){return n.version===0&&(n.compareFunction=jh,n.needsUpdate=!0),n}function my(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=mc(fp):r=dp,e.setTexture2D(t||r,s)}function gy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gp,s)}function xy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=mc(pp):r=xp,e.setTextureCube(t||r,s)}function _y(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mp,s)}function yy(n){switch(n){case 5126:return ty;case 35664:return ey;case 35665:return ny;case 35666:return iy;case 35674:return sy;case 35675:return ry;case 35676:return oy;case 5124:case 35670:return ay;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return dy;case 36295:return fy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return _y}}function My(n,t){n.uniform1fv(this.addr,t)}function vy(n,t){let e=Er(t,this.size,2);n.uniform2fv(this.addr,e)}function Sy(n,t){let e=Er(t,this.size,3);n.uniform3fv(this.addr,e)}function by(n,t){let e=Er(t,this.size,4);n.uniform4fv(this.addr,e)}function Ey(n,t){let e=Er(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wy(n,t){let e=Er(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ty(n,t){let e=Er(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ay(n,t){n.uniform1iv(this.addr,t)}function Ry(n,t){n.uniform2iv(this.addr,t)}function Cy(n,t){n.uniform3iv(this.addr,t)}function Py(n,t){n.uniform4iv(this.addr,t)}function Iy(n,t){n.uniform1uiv(this.addr,t)}function Ly(n,t){n.uniform2uiv(this.addr,t)}function Dy(n,t){n.uniform3uiv(this.addr,t)}function Ny(n,t){n.uniform4uiv(this.addr,t)}function Uy(n,t,e){let i=this.cache,s=t.length,r=pc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=mc(fp):o=dp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Fy(n,t,e){let i=this.cache,s=t.length,r=pc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gp,r[o])}function Oy(n,t,e){let i=this.cache,s=t.length,r=pc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=mc(pp):o=xp;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function By(n,t,e){let i=this.cache,s=t.length,r=pc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mp,r[o])}function Hy(n){switch(n){case 5126:return My;case 35664:return vy;case 35665:return Sy;case 35666:return by;case 35674:return Ey;case 35675:return wy;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Iy;case 36294:return Ly;case 36295:return Dy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return Oy;case 36289:case 36303:case 36311:case 36292:return By}}var pu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yy(e.type)}},mu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hy(e.type)}},gu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},du=/(\w+)(\])?(\[|\.)?/g;function Jf(n,t){n.seq.push(t),n.map[t.id]=t}function ky(n,t,e){let i=n.name,s=i.length;for(du.lastIndex=0;;){let r=du.exec(i),o=du.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jf(e,c===void 0?new pu(a,n,t):new mu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new gu(a),Jf(e,u)),e=u}}}var Sr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ky(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Kf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var zy=37297,Gy=0;function Vy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Qf=new re;function Wy(n){Te._getMatrix(Qf,Te.workingColorSpace,n);let t=`mat3( ${Qf.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case ro:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Vy(n.getShaderSource(t),a)}else return r}function Xy(n,t){let e=Wy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var qy={[Bh]:"Linear",[Hh]:"Reinhard",[kh]:"Cineon",[Do]:"ACESFilmic",[Gh]:"AgX",[Vh]:"Neutral",[zh]:"Custom"};function Yy(n,t){let e=qy[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dc=new D;function Zy(){Te.getLuminanceCoefficients(dc);let n=dc.x.toFixed(4),t=dc.y.toFixed(4),e=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $y(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function Jy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ky(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Vo(n){return n!==""}function tp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ep(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(n){return n.replace(Qy,jy)}function jy(n,t){let e=fe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return xu(e)}var tM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function np(n){return n.replace(tM,eM)}function eM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ip(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var nM={[ws]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function iM(n){return nM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sM={[Mr]:"ENVMAP_MODE_REFRACTION"};function rM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":sM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var oM={[bl]:"ENVMAP_BLENDING_MULTIPLY",[pf]:"ENVMAP_BLENDING_MIX",[mf]:"ENVMAP_BLENDING_ADD"};function aM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":oM[n.combine]||"ENVMAP_BLENDING_NONE"}function lM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=iM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=rM(e),u=aM(e),d=$y(e),f=Jy(r),p=s.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Vo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Vo).join(`
`),m.length>0&&(m+=`
`)):(x=[ip(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),m=[ip(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?fe.tonemapping_pars_fragment:"",e.toneMapping!==di?Yy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Xy("linearToOutputTexel",e.outputColorSpace),Zy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vo).join(`
`)),o=xu(o),o=tp(o,e),o=ep(o,e),a=xu(a),a=tp(a,e),a=ep(a,e),o=np(o),a=np(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,S=g+m+a,M=Kf(s,s.VERTEX_SHADER,y),T=Kf(s,s.FRAGMENT_SHADER,S);s.attachShader(p,M),s.attachShader(p,T),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function A(w){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",U=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(T)||"",L=P.trim(),k=U.trim(),q=H.trim(),G=!0,lt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,T);else{let Z=jf(s,M,"vertex"),st=jf(s,T,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+Z+`
`+st)}else L!==""?Kt("WebGLProgram: Program Info Log:",L):(k===""||q==="")&&(lt=!1);lt&&(w.diagnostics={runnable:G,programLog:L,vertexShader:{log:k,prefix:x},fragmentShader:{log:q,prefix:m}})}s.deleteShader(M),s.deleteShader(T),_=new Sr(s,p),v=Ky(s,p)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,zy)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gy++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}var cM=0,_u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new yu(t),e.set(t,i)),i}},yu=class{constructor(t){this.id=cM++,this.code=t,this.usedTimes=0}};function hM(n){return n===as||n===Ho||n===ko}function uM(n,t,e,i,s,r){let o=new co,a=new _u,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,v,R,w,P,U){let H=w.fog,L=P.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||k,q),lt=d[_.type],Z=i.precision;_.precision!==null&&(Z=i.getMaxPrecision(_.precision),Z!==_.precision&&Kt("WebGLProgram.getParameters:",_.precision,"not supported, using",Z,"instead."));let st=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,rt=st!==void 0?st.length:0,At=0;L.morphAttributes.position!==void 0&&(At=1),L.morphAttributes.normal!==void 0&&(At=2),L.morphAttributes.color!==void 0&&(At=3);let qt,K,vt,Dt;if(lt){let Rt=pi[lt];qt=Rt.vertexShader,K=Rt.fragmentShader}else{qt=_.vertexShader,K=_.fragmentShader;let Rt=a.getVertexShaderStage(_),Ne=a.getFragmentShaderStage(_);a.update(_,Rt,Ne),vt=Rt.id,Dt=Ne.id}let Zt=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),It=P.isInstancedMesh===!0,ce=P.isBatchedMesh===!0,Wt=!!_.map,he=!!_.matcap,ve=!!G,at=ve&&G.isPMREMTexture===!0,xt=!!_.aoMap,pt=!!_.lightMap,Nt=!!_.bumpMap&&_.wireframe===!1,Tt=!!_.normalMap,le=!!_.displacementMap,Gt=!!_.emissiveMap,Se=!!_.metalnessMap,be=!!_.roughnessMap,Pe=_.anisotropy>0,B=_.clearcoat>0,je=_.diffuseRoughness>0,_e=_.dispersion>0,Oe=_.retroreflectivity>0,St=_.iridescence>0,Je=_.sheen>0,Jt=_.transmission>0,ee=Pe&&!!_.anisotropyMap,C=B&&!!_.clearcoatMap,b=B&&!!_.clearcoatNormalMap,W=B&&!!_.clearcoatRoughnessMap,ht=je&&!!_.diffuseRoughnessMap,ot=St&&!!_.iridescenceMap,mt=St&&!!_.iridescenceThicknessMap,bt=Je&&!!_.sheenColorMap,tt=Je&&!!_.sheenRoughnessMap,et=!!_.specularMap,_t=!!_.specularColorMap,N=!!_.specularIntensityMap,nt=Jt&&!!_.transmissionMap,J=Jt&&!!_.thicknessMap,yt=!!_.gradientMap,ft=!!_.alphaMap,gt=_.alphaTest>0,Xt=!!_.alphaHash,de=!!_.extensions,ut=di;_.toneMapped&&(Zt===null||Zt.isXRRenderTarget===!0)&&(ut=n.toneMapping);let $t=at?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ue={shaderID:lt,shaderType:_.type,shaderName:_.name,vertexShader:qt,fragmentShader:K,defines:_.defines,customVertexShaderID:vt,customFragmentShaderID:Dt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Z,batching:ce,batchingColor:ce&&P._colorsTexture!==null,instancing:It,instancingColor:It&&P.instanceColor!==null,instancingMorph:It&&P.morphTexture!==null,outputColorSpace:Zt===null?n.outputColorSpace:Zt.isXRRenderTarget===!0?Zt.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Wt,matcap:he,envMap:ve,envMapMode:ve&&G.mapping,envMapPMREM:at,envMapMaxLod:at?$t.length-1:null,envMapSize:at?$t[0].width:null,aoMap:xt,lightMap:pt,bumpMap:Nt,normalMap:Tt,displacementMap:le,emissiveMap:Gt,normalMapObjectSpace:Tt&&_.normalMapType===_f,normalMapTangentSpace:Tt&&_.normalMapType===zo,packedNormalMap:Tt&&_.normalMapType===zo&&hM(_.normalMap.format),metalnessMap:Se,roughnessMap:be,anisotropy:Pe,anisotropyMap:ee,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:W,diffuseRoughness:je,diffuseRoughnessMap:ht,dispersion:_e,retroreflection:Oe,iridescence:St,iridescenceMap:ot,iridescenceThicknessMap:mt,sheen:Je,sheenColorMap:bt,sheenRoughnessMap:tt,specularMap:et,specularColorMap:_t,specularIntensityMap:N,transmission:Jt,transmissionMap:nt,thicknessMap:J,gradientMap:yt,opaque:_.transparent===!1&&_.blending===os&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:gt,alphaHash:Xt,combine:_.combine,mapUv:Wt&&f(_.map.channel),aoMapUv:xt&&f(_.aoMap.channel),lightMapUv:pt&&f(_.lightMap.channel),bumpMapUv:Nt&&f(_.bumpMap.channel),normalMapUv:Tt&&f(_.normalMap.channel),displacementMapUv:le&&f(_.displacementMap.channel),emissiveMapUv:Gt&&f(_.emissiveMap.channel),metalnessMapUv:Se&&f(_.metalnessMap.channel),roughnessMapUv:be&&f(_.roughnessMap.channel),anisotropyMapUv:ee&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:tt&&f(_.sheenRoughnessMap.channel),specularMapUv:et&&f(_.specularMap.channel),specularColorMapUv:_t&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:nt&&f(_.transmissionMap.channel),thicknessMapUv:J&&f(_.thicknessMap.channel),alphaMapUv:ft&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Tt||Pe),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Wt||ft),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Tt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:$,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:At,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:U.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:Wt&&_.map.isVideoTexture===!0&&Te.getTransfer(_.map.colorSpace)===Le,decodeVideoTextureEmissive:Gt&&_.emissiveMap.isVideoTexture===!0&&Te.getTransfer(_.emissiveMap.colorSpace)===Le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:de&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&_.extensions.multiDraw===!0||ce)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function x(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)v.push(R),v.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(v,_),g(v,_),v.push(n.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function m(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function g(_,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let v=d[_.type],R;if(v){let w=pi[v];R=Bf.clone(w.uniforms)}else R=_.uniforms;return R}function S(_,v){let R=h.get(v);return R!==void 0?++R.usedTimes:(R=new lM(n,v,_,s),c.push(R),h.set(v,R)),R}function M(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function A(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function dM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function fM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function sp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function rp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let y=n[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},n[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),t++,y}function l(d,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let S=a(d,f,p,x,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):e.push(S)}function c(d,f,p,x,m,g){let y=a(d,f,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||fM),i.length>1&&i.sort(f||sp),s.length>1&&s.sort(f||sp)}function u(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function pM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new rp,n.set(i,[o])):s>=r.length?(o=new rp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function mM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new se};break;case"SpotLight":e={position:new D,direction:new D,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function gM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var xM=0;function _M(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function yM(n){let t=new mM,e=gM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new Qt,o=new Qt;function a(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,S=0,M=0,T=0,A=0,_=0,v=0,R=0,w=0;c.sort(_M);for(let U=0,H=c.length;U<H;U++){let L=c[U],k=L.color,q=L.intensity,G=L.distance,lt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===as?lt=L.shadow.map.texture:lt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=k.r*q,u+=k.g*q,d+=k.b*q;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],q);w++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,rt=e.get(L);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),i.sunShadow[p]=rt,i.sunShadowMap[p]=lt;let At=st.getViewportCount();for(let qt=0;qt<At;qt++)i.sunShadowMatrix[x+qt]=st.getMatrix(qt),i.sunShadowCascade[x+qt]=st._cascadeData[qt];x+=At,p++}i.sun[f]=Z,f++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,rt=e.get(L);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,i.directionalShadow[m]=rt,i.directionalShadowMap[m]=lt,i.directionalShadowMatrix[m]=L.shadow.matrix,T++}i.directional[m]=Z,m++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(k).multiplyScalar(q),Z.distance=G,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[y]=Z;let st=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,st.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[y]=st.matrix,L.castShadow){let rt=e.get(L);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,i.spotShadow[y]=rt,i.spotShadowMap[y]=lt,_++}y++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(k).multiplyScalar(q),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=Z,S++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let st=L.shadow,rt=e.get(L);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,rt.shadowCameraNear=st.camera.near,rt.shadowCameraFar=st.camera.far,i.pointShadow[g]=rt,i.pointShadowMap[g]=lt,i.pointShadowMatrix[g]=L.shadow.matrix,A++}i.point[g]=Z,g++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(q),Z.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[M]=Z,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==S||P.hemiLength!==M||P.numSunShadows!==p||P.numDirectionalShadows!==T||P.numPointShadows!==A||P.numSpotShadows!==_||P.numSpotMaps!==v||P.numLightProbes!==w)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=g,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+v-R,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=y,P.rectAreaLength=S,P.hemiLength=M,P.numSunShadows=p,P.numDirectionalShadows=T,P.numPointShadows=A,P.numSpotShadows=_,P.numSpotMaps=v,P.numLightProbes=w,i.version=xM++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let M=c[y];if(M.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(M.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function op(n){let t=new yM(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){i.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function MM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new op(n),t.set(s,[a])):r>=o.length?(a=new op(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SM=`uniform sampler2D shadow_pass;
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
}`,bM=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],EM=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ap=new Qt,Go=new D,fu=new D;function wM(n,t,e){let i=new es,s=new ct,r=new ct,o=new Ve,a=new cl,l=new hl,c={},h=e.maxTextureSize,u={[rs]:on,[on]:rs,[fn]:fn},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:vM,fragmentShader:SM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new We;p.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new F(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let g=this.type;this.render=function(A,_,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Zd&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);let R=n.getRenderTarget(),w=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ts),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=g!==this.type;H&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=A.length;L<k;L++){let q=A[L],G=q.shadow;if(G===void 0){Kt("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let lt=G.getFrameExtents();s.multiply(lt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,G.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Z,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===yr){if(q.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Nn(s.x,s.y,{format:as,type:ti,minFilter:An,magFilter:An,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new Pi(s.x,s.y,Xn),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=Ri,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn}else q.isPointLight?(G.map=new Wo(s.x),G.map.depthTexture=new xo(s.x,jn)):(G.map=new Nn(s.x,s.y),G.map.depthTexture=new Pi(s.x,s.y,jn)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=Ri,this.type===ws?(G.map.depthTexture.compareFunction=Z?Qh:Kh,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let st=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,v);let rt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:v.layers;for(let At=0;At<st;At++){let qt=G.getCamera(At);if(q.isPointLight){let K=G.camera,vt=G.matrix,Dt=q.distance||K.far;Dt!==K.far&&(K.far=Dt,K.updateProjectionMatrix()),Go.setFromMatrixPosition(q.matrixWorld),K.position.copy(Go),fu.copy(K.position),fu.add(bM[At]),K.up.copy(EM[At]),K.lookAt(fu),K.updateMatrixWorld(),vt.makeTranslation(-Go.x,-Go.y,-Go.z),ap.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ap,K.coordinateSystem,K.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,At),n.clear();else{At===0&&(n.setRenderTarget(G.map),n.clear());let K=G.getViewport(At);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),U.viewport(o)}i=G.getFrustum(At),M(_,v,qt,q,rt,this.type)}G.isPointLightShadow!==!0&&this.type===yr&&y(G,v),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(R,w,P)};function y(A,_){let v=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Nn(s.x,s.y,{format:as,type:ti}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(_,null,v,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(_,null,v,f,x,null)}function S(A,_,v,R){let w=null,P=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)w=P;else if(w=v.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=w.uuid,H=_.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let k=L[H];k===void 0&&(k=w.clone(),L[H]=k,_.addEventListener("dispose",T)),w=k}if(w.visible=_.visible,w.wireframe=_.wireframe,R===yr?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:u[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let U=n.properties.get(w);U.light=v}return w}function M(A,_,v,R,w,P){if(A.visible===!1)return;if(A.layers.test(w)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===yr)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);let L=t.update(A),k=A.material;if(Array.isArray(k)){let q=L.groups;for(let G=0,lt=q.length;G<lt;G++){let Z=q[G],st=k[Z.materialIndex];if(st&&st.visible){let rt=S(A,st,R,P);A.onBeforeShadow(n,A,_,v,L,rt,Z),n.renderBufferDirect(v,null,L,rt,A,Z),A.onAfterShadow(n,A,_,v,L,rt,Z)}}}else if(k.visible){let q=S(A,k,R,P);A.onBeforeShadow(n,A,_,v,L,q,null),n.renderBufferDirect(v,null,L,q,A,null),A.onAfterShadow(n,A,_,v,L,q,null)}}let H=A.children;for(let L=0,k=H.length;L<k;L++)M(H[L],_,v,R,w,P)}function T(A){A.target.removeEventListener("dispose",T);for(let v in c){let R=c[v],w=A.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}function TM(n,t){function e(){let N=!1,nt=new Ve,J=null,yt=new Ve(0,0,0,0);return{setMask:function(ft){J!==ft&&!N&&(n.colorMask(ft,ft,ft,ft),J=ft)},setLocked:function(ft){N=ft},setClear:function(ft,gt,Xt,de,ut){ut===!0&&(ft*=de,gt*=de,Xt*=de),nt.set(ft,gt,Xt,de),yt.equals(nt)===!1&&(n.clearColor(ft,gt,Xt,de),yt.copy(nt))},reset:function(){N=!1,J=null,yt.set(-1,0,0,0)}}}function i(){let N=!1,nt=!1,J=null,yt=null,ft=null;return{setReversed:function(gt){if(nt!==gt){let Xt=t.get("EXT_clip_control");gt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),nt=gt;let de=ft;ft=null,this.setClear(de)}},getReversed:function(){return nt},setTest:function(gt){gt?$(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(gt){J!==gt&&!N&&(n.depthMask(gt),J=gt)},setFunc:function(gt){if(nt&&(gt=Rf[gt]),yt!==gt){switch(gt){case za:n.depthFunc(n.NEVER);break;case Ga:n.depthFunc(n.ALWAYS);break;case Va:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=gt}},setLocked:function(gt){N=gt},setClear:function(gt){ft!==gt&&(ft=gt,nt&&(gt=1-gt),n.clearDepth(gt))},reset:function(){N=!1,J=null,yt=null,ft=null,nt=!1}}}function s(){let N=!1,nt=null,J=null,yt=null,ft=null,gt=null,Xt=null,de=null,ut=null;return{setTest:function($t){N||($t?$(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function($t){nt!==$t&&!N&&(n.stencilMask($t),nt=$t)},setFunc:function($t,ue,Rt){(J!==$t||yt!==ue||ft!==Rt)&&(n.stencilFunc($t,ue,Rt),J=$t,yt=ue,ft=Rt)},setOp:function($t,ue,Rt){(gt!==$t||Xt!==ue||de!==Rt)&&(n.stencilOp($t,ue,Rt),gt=$t,Xt=ue,de=Rt)},setLocked:function($t){N=$t},setClear:function($t){ut!==$t&&(n.clearStencil($t),ut=$t)},reset:function(){N=!1,nt=null,J=null,yt=null,ft=null,gt=null,Xt=null,de=null,ut=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,M=null,T=null,A=null,_=null,v=new se(0,0,0),R=0,w=!1,P=null,U=null,H=null,L=null,k=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,lt=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=lt>=1):Z.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=lt>=2);let st=null,rt={},At=n.getParameter(n.SCISSOR_BOX),qt=n.getParameter(n.VIEWPORT),K=new Ve().fromArray(At),vt=new Ve().fromArray(qt);function Dt(N,nt,J,yt){let ft=new Uint8Array(4),gt=n.createTexture();n.bindTexture(N,gt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<J;Xt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(nt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return gt}let Zt={};Zt[n.TEXTURE_2D]=Dt(n.TEXTURE_2D,n.TEXTURE_2D,1),Zt[n.TEXTURE_CUBE_MAP]=Dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Zt[n.TEXTURE_2D_ARRAY]=Dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Zt[n.TEXTURE_3D]=Dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(n.DEPTH_TEST),o.setFunc(sr),Nt(!1),Tt(Dh),$(n.CULL_FACE),xt(Ts);function $(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function It(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function ce(N,nt){return d[N]!==nt?(n.bindFramebuffer(N,nt),d[N]=nt,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=nt),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function Wt(N,nt){let J=p,yt=!1;if(N){J=f.get(nt),J===void 0&&(J=[],f.set(nt,J));let ft=N.textures;if(J.length!==ft.length||J[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Xt=ft.length;gt<Xt;gt++)J[gt]=n.COLOR_ATTACHMENT0+gt;J.length=ft.length,yt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,yt=!0);yt&&n.drawBuffers(J)}function he(N){return x!==N?(n.useProgram(N),x=N,!0):!1}let ve={[Rs]:n.FUNC_ADD,[Jd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};ve[Qd]=n.MIN,ve[jd]=n.MAX;let at={[tf]:n.ZERO,[ef]:n.ONE,[nf]:n.SRC_COLOR,[Fh]:n.SRC_ALPHA,[cf]:n.SRC_ALPHA_SATURATE,[af]:n.DST_COLOR,[rf]:n.DST_ALPHA,[sf]:n.ONE_MINUS_SRC_COLOR,[Oh]:n.ONE_MINUS_SRC_ALPHA,[lf]:n.ONE_MINUS_DST_COLOR,[of]:n.ONE_MINUS_DST_ALPHA,[hf]:n.CONSTANT_COLOR,[uf]:n.ONE_MINUS_CONSTANT_COLOR,[df]:n.CONSTANT_ALPHA,[ff]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(N,nt,J,yt,ft,gt,Xt,de,ut,$t){if(N===Ts){m===!0&&(It(n.BLEND),m=!1);return}if(m===!1&&($(n.BLEND),m=!0),N!==$d){if(N!==g||$t!==w){if((y!==Rs||T!==Rs)&&(n.blendEquation(n.FUNC_ADD),y=Rs,T=Rs),$t)switch(N){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case As:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:jt("WebGLState: Invalid blending: ",N);break}else switch(N){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nh:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uh:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",N);break}S=null,M=null,A=null,_=null,v.set(0,0,0),R=0,g=N,w=$t}return}ft=ft||nt,gt=gt||J,Xt=Xt||yt,(nt!==y||ft!==T)&&(n.blendEquationSeparate(ve[nt],ve[ft]),y=nt,T=ft),(J!==S||yt!==M||gt!==A||Xt!==_)&&(n.blendFuncSeparate(at[J],at[yt],at[gt],at[Xt]),S=J,M=yt,A=gt,_=Xt),(de.equals(v)===!1||ut!==R)&&(n.blendColor(de.r,de.g,de.b,ut),v.copy(de),R=ut),g=N,w=!1}function pt(N,nt){N.side===fn?It(n.CULL_FACE):$(n.CULL_FACE);let J=N.side===on;nt&&(J=!J),Nt(J),N.blending===os&&N.transparent===!1?xt(Ts):xt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let yt=N.stencilWrite;a.setTest(yt),yt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Gt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(N){P!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),P=N)}function Tt(N){N!==qd?($(n.CULL_FACE),N!==U&&(N===Dh?n.cullFace(n.BACK):N===Yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),U=N}function le(N){N!==H&&(G&&n.lineWidth(N),H=N)}function Gt(N,nt,J){N?($(n.POLYGON_OFFSET_FILL),(L!==nt||k!==J)&&(L=nt,k=J,o.getReversed()&&(nt=-nt,J=-J),n.polygonOffset(nt,J))):It(n.POLYGON_OFFSET_FILL)}function Se(N){N?$(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function be(N){N===void 0&&(N=n.TEXTURE0+q-1),st!==N&&(n.activeTexture(N),st=N)}function Pe(N,nt,J){J===void 0&&(st===null?J=n.TEXTURE0+q-1:J=st);let yt=rt[J];yt===void 0&&(yt={type:void 0,texture:void 0},rt[J]=yt),(yt.type!==N||yt.texture!==nt)&&(st!==J&&(n.activeTexture(J),st=J),n.bindTexture(N,nt||Zt[N]),yt.type=N,yt.texture=nt)}function B(){let N=rt[st];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function je(){try{n.compressedTexImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function _e(){try{n.compressedTexImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function Oe(){try{n.texSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function St(){try{n.texSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function Je(){try{n.compressedTexSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function Jt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function ee(){try{n.texStorage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function C(){try{n.texStorage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function b(){try{n.texImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function W(){try{n.texImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function ht(N){return u[N]!==void 0?u[N]:n.getParameter(N)}function ot(N,nt){u[N]!==nt&&(n.pixelStorei(N,nt),u[N]=nt)}function mt(N){K.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function bt(N){vt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),vt.copy(N))}function tt(N,nt){let J=c.get(nt);J===void 0&&(J=new WeakMap,c.set(nt,J));let yt=J.get(N);yt===void 0&&(yt=n.getUniformBlockIndex(nt,N.name),n.uniformBlockBinding(nt,yt,yt),J.set(N,yt))}function et(N,nt,J){let ft=c.get(nt).get(N);l[ft]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,ft,J),l[ft]=J)}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},st=null,rt={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,M=null,T=null,A=null,_=null,v=new se(0,0,0),R=0,w=!1,P=null,U=null,H=null,L=null,k=null,K.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:It,bindFramebuffer:ce,drawBuffers:Wt,useProgram:he,setBlending:xt,setMaterial:pt,setFlipSided:Nt,setCullFace:Tt,setLineWidth:le,setPolygonOffset:Gt,setScissorTest:Se,activeTexture:be,bindTexture:Pe,unbindTexture:B,compressedTexImage2D:je,compressedTexImage3D:_e,texImage2D:b,texImage3D:W,pixelStorei:ot,getParameter:ht,updateUBOMapping:tt,uniformBlockBinding:et,texStorage2D:ee,texStorage3D:C,texSubImage2D:Oe,texSubImage3D:St,compressedTexSubImage2D:Je,compressedTexSubImage3D:Jt,scissor:mt,viewport:bt,reset:_t}}function AM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return m?new OffscreenCanvas(C,b):oo("canvas")}function y(C,b,W){let ht=1,ot=ee(C);if((ot.width>W||ot.height>W)&&(ht=W/Math.max(ot.width,ot.height)),ht<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let mt=Math.floor(ht*ot.width),bt=Math.floor(ht*ot.height);d===void 0&&(d=g(mt,bt));let tt=b?g(mt,bt):d;return tt.width=mt,tt.height=bt,tt.getContext("2d").drawImage(C,0,0,mt,bt),Kt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+mt+"x"+bt+")."),tt}else return"data"in C&&Kt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function S(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(C,b,W,ht,ot,mt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let bt;ht&&(bt=t.get("EXT_texture_norm16"),bt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=b;if(b===n.RED&&(W===n.FLOAT&&(tt=n.R32F),W===n.HALF_FLOAT&&(tt=n.R16F),W===n.UNSIGNED_BYTE&&(tt=n.R8),W===n.UNSIGNED_SHORT&&bt&&(tt=bt.R16_EXT),W===n.SHORT&&bt&&(tt=bt.R16_SNORM_EXT)),b===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(tt=n.R8UI),W===n.UNSIGNED_SHORT&&(tt=n.R16UI),W===n.UNSIGNED_INT&&(tt=n.R32UI),W===n.BYTE&&(tt=n.R8I),W===n.SHORT&&(tt=n.R16I),W===n.INT&&(tt=n.R32I)),b===n.RG&&(W===n.FLOAT&&(tt=n.RG32F),W===n.HALF_FLOAT&&(tt=n.RG16F),W===n.UNSIGNED_BYTE&&(tt=n.RG8),W===n.UNSIGNED_SHORT&&bt&&(tt=bt.RG16_EXT),W===n.SHORT&&bt&&(tt=bt.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(tt=n.RG8UI),W===n.UNSIGNED_SHORT&&(tt=n.RG16UI),W===n.UNSIGNED_INT&&(tt=n.RG32UI),W===n.BYTE&&(tt=n.RG8I),W===n.SHORT&&(tt=n.RG16I),W===n.INT&&(tt=n.RG32I)),b===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),W===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),W===n.UNSIGNED_INT&&(tt=n.RGB32UI),W===n.BYTE&&(tt=n.RGB8I),W===n.SHORT&&(tt=n.RGB16I),W===n.INT&&(tt=n.RGB32I)),b===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),W===n.UNSIGNED_INT&&(tt=n.RGBA32UI),W===n.BYTE&&(tt=n.RGBA8I),W===n.SHORT&&(tt=n.RGBA16I),W===n.INT&&(tt=n.RGBA32I)),b===n.RGB&&(W===n.UNSIGNED_SHORT&&bt&&(tt=bt.RGB16_EXT),W===n.SHORT&&bt&&(tt=bt.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),b===n.RGBA){let et=mt?ro:Te.getTransfer(ot);W===n.FLOAT&&(tt=n.RGBA32F),W===n.HALF_FLOAT&&(tt=n.RGBA16F),W===n.UNSIGNED_BYTE&&(tt=et===Le?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&bt&&(tt=bt.RGBA16_EXT),W===n.SHORT&&bt&&(tt=bt.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(C,b){let W;return C?b===null||b===jn||b===Ps?W=n.DEPTH24_STENCIL8:b===Xn?W=n.DEPTH32F_STENCIL8:b===vr&&(W=n.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===jn||b===Ps?W=n.DEPTH_COMPONENT24:b===Xn?W=n.DEPTH_COMPONENT32F:b===vr&&(W=n.DEPTH_COMPONENT16),W}function v(C,b){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){let b=new WeakRef(C);i.get(C).__ref=b,p.add(b),x.register(C,b,b)}function w(C){let b=i.get(C).__ref;b!==void 0&&(p.delete(b),x.unregister(b))}function P(C){H(C.target)}function U(C){L(C.target)}function H(C){C.removeEventListener("dispose",P),w(C),q(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function L(C){C.removeEventListener("dispose",U),w(C),lt(C)}function k(){for(let C of p){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):H(b))}p.clear(),u.clear()}function q(C){let b=i.get(C);if(b.__webglInit===void 0)return;let W=C.source,ht=f.get(W);if(ht){let ot=ht[b.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&G(C),Object.keys(ht).length===0&&f.delete(W)}i.remove(C)}function G(C){let b=i.get(C);n.deleteTexture(b.__webglTexture);let W=C.source,ht=f.get(W);delete ht[b.__cacheKey],o.memory.textures--}function lt(C){let b=i.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let W=C.depthTexture;if(W&&W.renderTarget===C&&H(W),C.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(b.__webglFramebuffer[ot]))for(let mt=0;mt<b.__webglFramebuffer[ot].length;mt++)n.deleteFramebuffer(b.__webglFramebuffer[ot][mt]);else n.deleteFramebuffer(b.__webglFramebuffer[ot]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ot])}else{if(Array.isArray(b.__webglFramebuffer))for(let ot=0;ot<b.__webglFramebuffer.length;ot++)n.deleteFramebuffer(b.__webglFramebuffer[ot]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ot=0;ot<b.__webglColorRenderbuffer.length;ot++)b.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ot]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ht=C.textures;for(let ot=0,mt=ht.length;ot<mt;ot++){let bt=i.get(ht[ot]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(ht[ot])}i.remove(C)}let Z=0;function st(){Z=0}function rt(){return Z}function At(C){Z=C}function qt(){let C=Z;return C>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,C}function K(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function vt(C,b){let W=i.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){let ht=C.image;if(ht===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(W,C,b);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+b)}function Dt(C,b){let W=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){pt(W,C,b);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+b)}function Zt(C,b){let W=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){pt(W,C,b);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+b)}function $(C,b){let W=i.get(C);if(C.version>0&&W.__version!==C.version){Nt(W,C,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+b)}let It={[Ms]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},ce={[dn]:n.NEAREST,[gf]:n.NEAREST_MIPMAP_NEAREST,[No]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Tl]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},Wt={[Mf]:n.NEVER,[jh]:n.ALWAYS,[vf]:n.LESS,[Kh]:n.LEQUAL,[Sf]:n.EQUAL,[Qh]:n.GEQUAL,[bf]:n.GREATER,[Ef]:n.NOTEQUAL};function he(C,b){if(b.type===Xn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===An||b.magFilter===Tl||b.magFilter===No||b.magFilter===Di||b.minFilter===An||b.minFilter===Tl||b.minFilter===No||b.minFilter===Di)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,It[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,It[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,It[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ce[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ce[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Wt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==No&&b.minFilter!==Di||b.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ve(C,b){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",P),R(b));let ht=b.source,ot=f.get(ht);ot===void 0&&(ot={},f.set(ht,ot));let mt=K(b);if(mt!==C.__cacheKey){ot[mt]===void 0&&(ot[mt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ot[mt].usedTimes++;let bt=ot[C.__cacheKey];bt!==void 0&&(ot[C.__cacheKey].usedTimes--,bt.usedTimes===0&&G(b)),C.__cacheKey=mt,C.__webglTexture=ot[mt].texture}return W}function at(C,b,W){return Math.floor(Math.floor(C/W)/b)}function xt(C,b,W,ht){let mt=C.updateRanges;if(mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,W,ht,b.data);else{mt.sort((N,nt)=>N.start-nt.start);let bt=0;for(let N=1;N<mt.length;N++){let nt=mt[bt],J=mt[N],yt=nt.start+nt.count,ft=at(J.start,b.width,4),gt=at(nt.start,b.width,4);J.start<=yt+1&&ft===gt&&at(J.start+J.count-1,b.width,4)===ft?nt.count=Math.max(nt.count,J.start+J.count-nt.start):(++bt,mt[bt]=J)}mt.length=bt+1;let tt=e.getParameter(n.UNPACK_ROW_LENGTH),et=e.getParameter(n.UNPACK_SKIP_PIXELS),_t=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let N=0,nt=mt.length;N<nt;N++){let J=mt[N],yt=Math.floor(J.start/4),ft=Math.ceil(J.count/4),gt=yt%b.width,Xt=Math.floor(yt/b.width),de=ft,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(n.TEXTURE_2D,0,gt,Xt,de,ut,W,ht,b.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,tt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,et),e.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function pt(C,b,W){let ht=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=n.TEXTURE_3D);let ot=ve(C,b),mt=b.source;e.bindTexture(ht,C.__webglTexture,n.TEXTURE0+W);let bt=i.get(mt);if(mt.version!==bt.__version||ot===!0){if(e.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ut=Te.getPrimaries(Te.workingColorSpace),$t=b.colorSpace===Ui?null:Te.getPrimaries(b.colorSpace),ue=b.colorSpace===Ui||ut===$t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let et=y(b.image,!1,s.maxTextureSize);et=Jt(b,et);let _t=r.convert(b.format,b.colorSpace),N=r.convert(b.type),nt=A(b.internalFormat,_t,N,b.normalized,b.colorSpace,b.isVideoTexture);he(ht,b);let J,yt=b.mipmaps,ft=b.isVideoTexture!==!0,gt=bt.__version===void 0||ot===!0,Xt=mt.dataReady,de=v(b,et);if(b.isDepthTexture)nt=_(b.format===Ni,b.type),gt&&(ft?e.texStorage2D(n.TEXTURE_2D,1,nt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,nt,et.width,et.height,0,_t,N,null));else if(b.isDataTexture)if(yt.length>0){ft&&gt&&e.texStorage2D(n.TEXTURE_2D,de,nt,yt[0].width,yt[0].height);for(let ut=0,$t=yt.length;ut<$t;ut++)J=yt[ut],ft?Xt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,J.width,J.height,_t,N,J.data):e.texImage2D(n.TEXTURE_2D,ut,nt,J.width,J.height,0,_t,N,J.data);b.generateMipmaps=!1}else ft?(gt&&e.texStorage2D(n.TEXTURE_2D,de,nt,et.width,et.height),Xt&&xt(b,et,_t,N)):e.texImage2D(n.TEXTURE_2D,0,nt,et.width,et.height,0,_t,N,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ft&&gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,de,nt,yt[0].width,yt[0].height,et.depth);for(let ut=0,$t=yt.length;ut<$t;ut++)if(J=yt[ut],b.format!==ei)if(_t!==null)if(ft){if(Xt)if(b.layerUpdates.size>0){let ue=ou(J.width,J.height,b.format,b.type);for(let Rt of b.layerUpdates){let Ne=J.data.subarray(Rt*ue/J.data.BYTES_PER_ELEMENT,(Rt+1)*ue/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,Rt,J.width,J.height,1,_t,Ne)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,et.depth,_t,J.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,nt,J.width,J.height,et.depth,0,J.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Xt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,et.depth,_t,N,J.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,nt,J.width,J.height,et.depth,0,_t,N,J.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ft&&gt&&e.texStorage2D(n.TEXTURE_2D,de,nt,yt[0].width,yt[0].height);for(let ut=0,$t=yt.length;ut<$t;ut++)J=yt[ut],b.format!==ei?_t!==null?ft?Xt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,J.width,J.height,_t,J.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,nt,J.width,J.height,0,J.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Xt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,J.width,J.height,_t,N,J.data):e.texImage2D(n.TEXTURE_2D,ut,nt,J.width,J.height,0,_t,N,J.data)}else if(b.isDataArrayTexture)if(ft){if(gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,de,nt,et.width,et.height,et.depth),Xt)if(b.layerUpdates.size>0){let ut=ou(et.width,et.height,b.format,b.type);for(let $t of b.layerUpdates){let ue=et.data.subarray($t*ut/et.data.BYTES_PER_ELEMENT,($t+1)*ut/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$t,et.width,et.height,1,_t,N,ue)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,_t,N,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,et.width,et.height,et.depth,0,_t,N,et.data);else if(b.isData3DTexture)ft?(gt&&e.texStorage3D(n.TEXTURE_3D,de,nt,et.width,et.height,et.depth),Xt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,_t,N,et.data)):e.texImage3D(n.TEXTURE_3D,0,nt,et.width,et.height,et.depth,0,_t,N,et.data);else if(b.isFramebufferTexture){if(gt)if(ft)e.texStorage2D(n.TEXTURE_2D,de,nt,et.width,et.height);else{let ut=et.width,$t=et.height;for(let ue=0;ue<de;ue++)e.texImage2D(n.TEXTURE_2D,ue,nt,ut,$t,0,_t,N,null),ut>>=1,$t>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),et.parentNode!==ut){ut.appendChild(et),u.add(b),ut.onpaint=$t=>{let ue=$t.changedElements;for(let Rt of u)ue.includes(Rt.image)&&(Rt.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,et);else{let ue=n.RGBA,Rt=n.RGBA,Ne=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ue,Rt,Ne,et)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(yt.length>0){if(ft&&gt){let ut=ee(yt[0]);e.texStorage2D(n.TEXTURE_2D,de,nt,ut.width,ut.height)}for(let ut=0,$t=yt.length;ut<$t;ut++)J=yt[ut],ft?Xt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,_t,N,J):e.texImage2D(n.TEXTURE_2D,ut,nt,_t,N,J);b.generateMipmaps=!1}else if(ft){if(gt){let ut=ee(et);e.texStorage2D(n.TEXTURE_2D,de,nt,ut.width,ut.height)}Xt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,N,et)}else e.texImage2D(n.TEXTURE_2D,0,nt,_t,N,et);S(b)&&b.mipmapsAutoUpdate===!0&&M(ht),bt.__version=mt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Nt(C,b,W){if(b.image.length!==6)return;let ht=ve(C,b),ot=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);let mt=i.get(ot);if(ot.version!==mt.__version||ht===!0){e.activeTexture(n.TEXTURE0+W);let bt=Te.getPrimaries(Te.workingColorSpace),tt=b.colorSpace===Ui?null:Te.getPrimaries(b.colorSpace),et=b.colorSpace===Ui||bt===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let _t=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,nt=[];for(let Rt=0;Rt<6;Rt++)!_t&&!N?nt[Rt]=y(b.image[Rt],!0,s.maxCubemapSize):nt[Rt]=N?b.image[Rt].image:b.image[Rt],nt[Rt]=Jt(b,nt[Rt]);let J=nt[0],yt=r.convert(b.format,b.colorSpace),ft=r.convert(b.type),gt=A(b.internalFormat,yt,ft,b.normalized,b.colorSpace),Xt=b.isVideoTexture!==!0,de=mt.__version===void 0||ht===!0,ut=ot.dataReady,$t=v(b,J);he(n.TEXTURE_CUBE_MAP,b);let ue;if(b.isDepthTexture){if(gt=_(b.format===Ni,b.type),de)if(Xt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,gt,J.width,J.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,gt,J.width,J.height,0,yt,ft,null)}else if(_t){Xt&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,$t,gt,J.width,J.height);for(let Rt=0;Rt<6;Rt++){ue=nt[Rt].mipmaps;for(let Ne=0;Ne<ue.length;Ne++){let cn=ue[Ne];b.format!==ei?yt!==null?Xt?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ne,0,0,cn.width,cn.height,yt,cn.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ne,gt,cn.width,cn.height,0,cn.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ne,0,0,cn.width,cn.height,yt,ft,cn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ne,gt,cn.width,cn.height,0,yt,ft,cn.data)}}}else{if(ue=b.mipmaps,Xt&&de){ue.length>0&&$t++;let Rt=ee(nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,$t,gt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(N){Xt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,nt[Rt].width,nt[Rt].height,yt,ft,nt[Rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,gt,nt[Rt].width,nt[Rt].height,0,yt,ft,nt[Rt].data);for(let Ne=0;Ne<ue.length;Ne++){let Xi=ue[Ne].image[Rt].image;Xt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ne+1,0,0,Xi.width,Xi.height,yt,ft,Xi.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ne+1,gt,Xi.width,Xi.height,0,yt,ft,Xi.data)}}else{Xt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,yt,ft,nt[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,gt,yt,ft,nt[Rt]);for(let Ne=0;Ne<ue.length;Ne++){let cn=ue[Ne];Xt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ne+1,0,0,yt,ft,cn.image[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ne+1,gt,yt,ft,cn.image[Rt])}}}S(b)&&b.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),mt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Tt(C,b,W,ht,ot,mt){let bt=r.convert(W.format,W.colorSpace),tt=r.convert(W.type),et=A(W.internalFormat,bt,tt,W.normalized,W.colorSpace),_t=i.get(b),N=i.get(W);if(N.__renderTarget=b,!_t.__hasExternalTextures){let nt=Math.max(1,b.width>>mt),J=Math.max(1,b.height>>mt);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,mt,et,nt,J,b.depth,0,bt,tt,null):e.texImage2D(ot,mt,et,nt,J,0,bt,tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),St(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,ot,N.__webglTexture,0,Oe(b)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ht,ot,N.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(C,b,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){let ht=b.depthTexture,ot=ht&&ht.isDepthTexture?ht.type:null,mt=_(b.stencilBuffer,ot),bt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;St(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe(b),mt,b.width,b.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe(b),mt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,mt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,C)}else{let ht=b.textures;for(let ot=0;ot<ht.length;ot++){let mt=ht[ot],bt=r.convert(mt.format,mt.colorSpace),tt=r.convert(mt.type),et=A(mt.internalFormat,bt,tt,mt.normalized,mt.colorSpace);St(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe(b),et,b.width,b.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe(b),et,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,et,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Gt(C,b,W){let ht=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(b.depthTexture);ot.__renderTarget=b;let mt=ht?b.depthTexture.image[0]:b.depthTexture.image;(!ot.__webglTexture||mt.width!==b.width||mt.height!==b.height)&&(mt.width=b.width,mt.height=b.height,b.depthTexture.needsUpdate=!0),ht?$(b.depthTexture,0):vt(b.depthTexture,0);let bt=ot.__webglTexture,tt=Oe(b),et=ht?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,_t=b.depthTexture.format===Ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ri)St(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_t,et,bt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,_t,et,bt,0);else if(b.depthTexture.format===Ni)St(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_t,et,bt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,_t,et,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Se(C){let b=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let ht=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){let ot=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",ot)};ht.addEventListener("dispose",ot),b.__depthDisposeCallback=ot}b.__boundDepthTexture=ht}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)Gt(b.__webglFramebuffer[ht],C,ht);else C.texture.mipmaps.length>0?Gt(b.__webglFramebuffer[0],C,0):Gt(b.__webglFramebuffer,C,0);else if(W){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=n.createRenderbuffer(),le(b.__webglDepthbuffer[ht],C,!1);else{let ot=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=b.__webglDepthbuffer[ht];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,mt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),le(b.__webglDepthbuffer,C,!1);else{let ot=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function be(C,b,W){let ht=i.get(C);b!==void 0&&Tt(ht.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Se(C)}function Pe(C){let b=C.texture,W=i.get(C),ht=i.get(b);C.addEventListener("dispose",U),R(C);let ot=C.textures,mt=C.isWebGLCubeRenderTarget===!0,bt=ot.length>1;if(bt||(ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture()),ht.__version=b.version,o.memory.textures++),mt){W.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(b.mipmaps.length>0){W.__webglFramebuffer[tt]=[];for(let et=0;et<b.mipmaps.length;et++)W.__webglFramebuffer[tt][et]=n.createFramebuffer()}else W.__webglFramebuffer[tt]=n.createFramebuffer()}else{if(b.mipmaps.length>0){W.__webglFramebuffer=[];for(let tt=0;tt<b.mipmaps.length;tt++)W.__webglFramebuffer[tt]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(bt)for(let tt=0,et=ot.length;tt<et;tt++){let _t=i.get(ot[tt]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&St(C)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let tt=0;tt<ot.length;tt++){let et=ot[tt];W.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[tt]);let _t=r.convert(et.format,et.colorSpace),N=r.convert(et.type),nt=A(et.internalFormat,_t,N,et.normalized,et.colorSpace,C.isXRRenderTarget===!0),J=Oe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,nt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,W.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),le(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),he(n.TEXTURE_CUBE_MAP,b);for(let tt=0;tt<6;tt++)if(b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)Tt(W.__webglFramebuffer[tt][et],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,et);else Tt(W.__webglFramebuffer[tt],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);S(b)?M(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(bt){for(let tt=0,et=ot.length;tt<et;tt++){let _t=ot[tt],N=i.get(_t),nt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(nt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,N.__webglTexture),he(nt,_t),Tt(W.__webglFramebuffer,C,_t,n.COLOR_ATTACHMENT0+tt,nt,0),S(_t)&&M(nt)}e.unbindTexture()}else{let tt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(tt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,ht.__webglTexture),he(tt,b),b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)Tt(W.__webglFramebuffer[et],C,b,n.COLOR_ATTACHMENT0,tt,et);else Tt(W.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,tt,0);S(b)?M(tt):b.mipmaps.length>0&&n.texParameteri(tt,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&Se(C)}function B(C){let b=C.textures;for(let W=0,ht=b.length;W<ht;W++){let ot=b[W];if(S(ot)&&ot.mipmapsAutoUpdate===!0){let mt=T(C),bt=i.get(ot).__webglTexture;e.bindTexture(mt,bt),M(mt),e.unbindTexture()}}}let je=[];function _e(C){if(C.samples>0){if(St(C)===!1){let b=C.textures,W=C.width,ht=C.height,ot=n.COLOR_BUFFER_BIT,mt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(C),tt=b.length>1;if(tt)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);let N=i.get(b[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,W,ht,0,0,W,ht,ot,n.NEAREST),l===!0&&(je.length=0,je.push(n.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&je.push(mt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,je))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),tt)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);let N=i.get(b[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Oe(C){return Math.min(s.maxSamples,C.samples)}function St(C){let b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Je(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Jt(C,b){let W=C.colorSpace,ht=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==so&&W!==Ui&&(Te.getTransfer(W)===Le?(ht!==ei||ot!==In)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",W)),b}function ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=qt,this.resetTextureUnits=st,this.getTextureUnits=rt,this.setTextureUnits=At,this.setTexture2D=vt,this.setTexture2DArray=Dt,this.setTexture3D=Zt,this.setTextureCube=$,this.rebindTextures=be,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=St,this.dispose=k}function RM(n,t){function e(i,s=Ui){let r,o=Te.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===Rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xh)return n.BYTE;if(i===qh)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===Al)return n.INT;if(i===jn)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===ti)return n.HALF_FLOAT;if(i===$h)return n.ALPHA;if(i===Jh)return n.RGB;if(i===ei)return n.RGBA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===Pl)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===as)return n.RG;if(i===Ll)return n.RG_INTEGER;if(i===Dl)return n.RGBA_INTEGER;if(i===Uo||i===Fo||i===Oo||i===Bo)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ul||i===Fl||i===Ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===Hl||i===kl||i===zl||i===Gl||i===Ho||i===Vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bl||i===Hl)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===kl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===zl)return r.COMPRESSED_R11_EAC;if(i===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ho)return r.COMPRESSED_RG11_EAC;if(i===Vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===$l||i===Jl||i===Kl||i===Ql||i===jl||i===tc||i===ec||i===nc||i===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===rc||i===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===sc)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===lc||i===ko||i===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PM=`
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

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new _o(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Wn({vertexShader:CM,fragmentShader:PM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new F(new xn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vu=class extends ri{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Mu,g={},y=e.getContextAttributes(),S=null,M=null,T=[],A=[],_=new ct,v=null,R=null,w=new gn;w.viewport=new Ve;let P=new gn;P.viewport=new Ve;let U=[w,P],H=new vl,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let vt=T[K];return vt===void 0&&(vt=new lr,T[K]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(K){let vt=T[K];return vt===void 0&&(vt=new lr,T[K]=vt),vt.getGripSpace()},this.getHand=function(K){let vt=T[K];return vt===void 0&&(vt=new lr,T[K]=vt),vt.getHandSpace()};function q(K){let vt=A.indexOf(K.inputSource);if(vt===-1)return;let Dt=T[vt];Dt!==void 0&&(Dt.update(K.inputSource,K.frame,c||o),Dt.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",lt);for(let K=0;K<T.length;K++){let vt=A[K];vt!==null&&(A[K]=null,T[K].disconnect(vt))}L=null,k=null,m.reset();for(let K in g)delete g[K];if(t.setRenderTarget(S),f=null,d=null,u=null,s=null,M=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(_.width,_.height,!1),R!==null){let K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",lt),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Zt=null,$=null;y.depth&&($=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=y.stencil?Ni:Ri,Zt=y.stencil?Ps:jn);let It={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Nn(d.textureWidth,d.textureHeight,{format:ei,type:In,depthTexture:new Pi(d.textureWidth,d.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Dt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Nn(f.framebufferWidth,f.framebufferHeight,{format:ei,type:In,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function lt(K){for(let vt=0;vt<K.removed.length;vt++){let Dt=K.removed[vt],Zt=A.indexOf(Dt);Zt>=0&&(A[Zt]=null,T[Zt].disconnect(Dt))}for(let vt=0;vt<K.added.length;vt++){let Dt=K.added[vt],Zt=A.indexOf(Dt);if(Zt===-1){for(let It=0;It<T.length;It++)if(It>=A.length){A.push(Dt),Zt=It;break}else if(A[It]===null){A[It]=Dt,Zt=It;break}if(Zt===-1)break}let $=T[Zt];$&&$.connect(Dt)}}function Z(K,vt){vt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(vt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let vt=K.near,Dt=K.far;m.texture!==null&&(m.depthNear>0&&(vt=m.depthNear),m.depthFar>0&&(Dt=m.depthFar)),H.near=P.near=w.near=vt,H.far=P.far=w.far=Dt,(L!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,k=H.far),H.layers.mask=K.layers.mask|6,w.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;let Zt=K.parent,$=H.cameras;Z(H,Zt);for(let It=0;It<$.length;It++)Z($[It],Zt);H.projectionMatrix.copy(w.projectionMatrix),H.projectionMatrixInverse.copy(w.projectionMatrixInverse),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),st(K,H,Zt)};function st(K,vt,Dt){Dt===null?K.matrix.copy(vt.matrixWorld):(K.matrix.copy(Dt.matrixWorld),K.matrix.invert(),K.matrix.multiply(vt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(vt.projectionMatrix),K.projectionMatrixInverse.copy(vt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ja*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(K){return g[K]};let rt=null;function At(K,vt){if(h=vt.getViewerPose(c||o),p=vt,h!==null){let Dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Zt=!1;Dt.length!==H.cameras.length&&(H.cameras.length=0,Zt=!0);for(let Wt=0;Wt<Dt.length;Wt++){let he=Dt[Wt],ve=null;if(f!==null)ve=f.getViewport(he);else{let xt=u.getViewSubImage(d,he);ve=xt.viewport,Wt===0&&(t.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(M))}let at=U[Wt];at===void 0&&(at=new gn,at.layers.enable(Wt),at.viewport=new Ve,U[Wt]=at),at.matrix.fromArray(he.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(he.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ve.x,ve.y,ve.width,ve.height),Wt===0&&(H.matrix.copy(at.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Zt===!0&&H.cameras.push(at)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Wt=u.getDepthInformation(Dt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if($&&$.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Wt=0;Wt<Dt.length;Wt++){let he=Dt[Wt].camera;if(he){let ve=g[he];ve||(ve=new _o,g[he]=ve);let at=u.getCameraImage(he);ve.sourceTexture=at}}}}for(let Dt=0;Dt<T.length;Dt++){let Zt=A[Dt],$=T[Dt];Zt!==null&&$!==void 0&&$.update(Zt,vt,c||o)}rt&&rt(K,vt),vt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:vt}),p=null}let qt=new lp;qt.setAnimationLoop(At),this.setAnimationLoop=function(K){rt=K},this.dispose=function(){}}},IM=new Qt,_p=new re;_p.set(-1,0,0,0,1,0,0,0,1);function LM(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,iu(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,S,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===on&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===on&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(IM.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_p),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function DM(n,t,e,i){let s={},r={};function o(y,S){let M=S.program;i.uniformBlockBinding(y,M,s[y.id])}function a(y,S){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",m));let T=S.program;i.updateUBOMapping(y,T);let A=t.render.frame;r[y.id]!==A&&(c(y),r[y.id]=A)}function l(y){let S=n.createBuffer(),M=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,T),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(y){let S=s[y.id],M=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,_=M.length;A<_;A++){let v=M[A];if(Array.isArray(v))for(let R=0,w=v.length;R<w;R++)h(v[R],A,R,T);else h(v,A,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,M,T){if(d(y,S,M,T)===!0){let A=y.__offset,_=y.value;if(Array.isArray(_)){let v=0;for(let R=0;R<_.length;R++){let w=_[R],P=x(w,!0);u(w,y.__data,v),v+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,y.__data)}}function u(y,S,M){typeof y=="number"||typeof y=="boolean"?S[M]=y:y.isMatrix3?(S[M]=y.elements[0],S[M+1]=y.elements[1],S[M+2]=y.elements[2],S[M+3]=0,S[M+4]=y.elements[3],S[M+5]=y.elements[4],S[M+6]=y.elements[5],S[M+7]=0,S[M+8]=y.elements[6],S[M+9]=y.elements[7],S[M+10]=y.elements[8],S[M+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-M),M):y.toArray(S,M)}function d(y,S,M,T){let A=y.value,_=S+"_"+M;if(Array.isArray(A)){T[_]===void 0&&(T[_]=[]);let v=T[_],R=!1;for(let w=0;w<A.length;w++)f(A[w],v,w)===!0&&(R=!0);return R}return f(A,T,_)}function f(y,S,M){if(S[M]===void 0)return typeof y=="number"||typeof y=="boolean"?S[M]=y:ArrayBuffer.isView(y)?S[M]=y.slice():S[M]=y.clone(),!0;{let T=S[M];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return S[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function p(y){let S=y.uniforms,M=0,T=16;for(let _=0,v=S.length;_<v;_++){let R=Array.isArray(S[_])?S[_]:[S[_]];for(let w=0,P=R.length;w<P;w++){let U=R[w],H=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(S[_])||Array.isArray(U.value),k=M;for(let G=0,lt=H.length;G<lt;G++){let Z=H[G],st=x(Z,L),rt=M%T,At=rt%st.boundary,qt=rt+At;M+=At,qt!==0&&T-qt<st.storage&&(M+=T-qt),G===0&&(k=M),M+=st.storage}let q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new q((M-k)/Float32Array.BYTES_PER_ELEMENT),U.__offset=k}}let A=M%T;return A>0&&(M+=T-A),y.__size=M,y.__cache={},this}function x(y,S){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let S=y.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var NM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function UM(){return fi===null&&(fi=new mo(NM,16,16,as,ti),fi.name="DFG_LUT",fi.minFilter=An,fi.magFilter=An,fi.wrapS=si,fi.wrapT=si,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var fc=class{constructor(t={}){let{canvas:e=wf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=In}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Dl,Ll,Il]),g=new Set([In,jn,vr,Ps,Rl,Cl]),y=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,A=null,_=[],v=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,P=!1,U=null,H=null,L=null,k=null;this._outputColorSpace=rn;let q=0,G=0,lt=null,Z=-1,st=null,rt=new Ve,At=new Ve,qt=null,K=new se(0),vt=0,Dt=e.width,Zt=e.height,$=1,It=null,ce=null,Wt=new Ve(0,0,Dt,Zt),he=new Ve(0,0,Dt,Zt),ve=!1,at=new es,xt=new el,pt=!1,Nt=!1,Tt=new Qt,le=new D,Gt=new Ve,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function Pe(){return lt===null?$:1}let B=i;function je(E,O){return e.getContext(E,O)}let _e,Oe,St,Je,Jt,ee,C,b,W,ht,ot,mt,bt,tt,et,_t,N,nt,J,yt,ft,gt,Xt;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),B===null){let O="webgl2";if(B=je(O,E),B===null)throw je(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}de()}catch(E){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),jt("WebGLRenderer: "+E.message),E}function de(){_e=new q_(B),_e.init(),ft=new RM(B,_e),Oe=new U_(B,_e,t,ft),St=new TM(B,_e),Oe.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),H=B.createFramebuffer(),L=B.createFramebuffer(),k=B.createFramebuffer(),Je=new $_(B),Jt=new dM,ee=new AM(B,_e,St,Jt,Oe,ft,Je),C=new X_(w),b=new Km(B),gt=new D_(B,b),W=new Y_(B,b,Je,gt),ht=new K_(B,W,b,gt,Je),nt=new J_(B,Oe,ee),et=new F_(Jt),ot=new uM(w,C,_e,Oe,gt,et),mt=new LM(w,Jt),bt=new pM,tt=new MM(_e),N=new L_(w,C,St,ht,p,l),_t=new wM(w,ht,Oe),Xt=new DM(B,Je,Oe,St),J=new N_(B,_e,Je),yt=new Z_(B,_e,Je),Je.programs=ot.programs,w.capabilities=Oe,w.extensions=_e,w.properties=Jt,w.renderLists=bt,w.shadowMap=_t,w.state=St,w.info=Je}x!==In&&(R=new j_(x,e.width,e.height,a,s,r));let ut=new vu(w,B);this.xr=ut,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(Dt,Zt,!1))},this.getSize=function(E){return E.set(Dt,Zt)},this.setSize=function(E,O,Y=!0){if(ut.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Dt=E,Zt=O,e.width=Math.floor(E*$),e.height=Math.floor(O*$),Y===!0&&(e.style.width=E+"px",e.style.height=O+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Dt*$,Zt*$).floor()},this.setDrawingBufferSize=function(E,O,Y){Dt=E,Zt=O,$=Y,e.width=Math.floor(E*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(x===In){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(rt)},this.getViewport=function(E){return E.copy(Wt)},this.setViewport=function(E,O,Y,V){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,O,Y,V),St.viewport(rt.copy(Wt).multiplyScalar(Pe()).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,O,Y,V){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,O,Y,V),St.scissor(At.copy(he).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(E){St.setScissorTest(ve=E)},this.setOpaqueSort=function(E){It=E},this.setTransparentSort=function(E){ce=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Y=!0){let V=0;if(E){let X=!1;if(lt!==null){let Et=lt.texture.format;X=m.has(Et)}if(X){let Et=lt.texture.type,Ot=g.has(Et),Mt=N.getClearColor(),Pt=N.getClearAlpha(),zt=Mt.r,oe=Mt.g,Ee=Mt.b;Ot?(y[0]=zt,y[1]=oe,y[2]=Ee,y[3]=Pt,B.clearBufferuiv(B.COLOR,0,y)):(S[0]=zt,S[1]=oe,S[2]=Ee,S[3]=Pt,B.clearBufferiv(B.COLOR,0,S))}else V|=B.COLOR_BUFFER_BIT}O&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),N.dispose(),bt.dispose(),tt.dispose(),ee.dispose(),Jt.dispose(),C.dispose(),ht.dispose(),W.dispose(),gt.dispose(),Xt.dispose(),ot.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",nd),ut.removeEventListener("sessionend",id),us.stop()};function $t(E){E.preventDefault(),ao("WebGLRenderer: Context Lost."),P=!0}function ue(){ao("WebGLRenderer: Context Restored."),P=!1;let E=Je.autoReset,O=_t.enabled,Y=_t.autoUpdate,V=_t.needsUpdate,X=_t.type;de(),Je.autoReset=E,_t.enabled=O,_t.autoUpdate=Y,_t.needsUpdate=V,_t.type=X}function Rt(E){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ne(E){let O=E.target;O.removeEventListener("dispose",Ne),cn(O)}function cn(E){Xi(E),Jt.remove(E)}function Xi(E){let O=Jt.get(E).programs;O!==void 0&&(O.forEach(function(Y){ot.releaseProgram(Y)}),E.isShaderMaterial&&ot.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Y,V,X,Et){O===null&&(O=Se);let Ot=X.isMesh&&X.matrixWorld.determinantAffine()<0,Mt=U0(E,O,Y,V,X);St.setMaterial(V,Ot);let Pt=Y.index,zt=1;if(V.wireframe===!0){if(Pt=W.getWireframeAttribute(Y),Pt===void 0)return;zt=2}let oe=Y.drawRange,Ee=Y.attributes.position,Ht=oe.start*zt,we=(oe.start+oe.count)*zt;Et!==null&&(Ht=Math.max(Ht,Et.start*zt),we=Math.min(we,(Et.start+Et.count)*zt)),Pt!==null?(Ht=Math.max(Ht,0),we=Math.min(we,Pt.count)):Ee!=null&&(Ht=Math.max(Ht,0),we=Math.min(we,Ee.count));let tn=we-Ht;if(tn<0||tn===1/0)return;gt.setup(X,V,Mt,Y,Pt);let ke,Be=J;if(Pt!==null&&(ke=b.get(Pt),Be=yt,Be.setIndex(ke)),X.isMesh)V.wireframe===!0?(St.setLineWidth(V.wireframeLinewidth*Pe()),Be.setMode(B.LINES)):Be.setMode(B.TRIANGLES);else if(X.isLine){let yn=V.linewidth;yn===void 0&&(yn=1),St.setLineWidth(yn*Pe()),X.isLineSegments?Be.setMode(B.LINES):X.isLineLoop?Be.setMode(B.LINE_LOOP):Be.setMode(B.LINE_STRIP)}else X.isPoints?Be.setMode(B.POINTS):X.isSprite&&Be.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Be.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let yn=X._multiDrawStarts,kt=X._multiDrawCounts,wn=X._multiDrawCount,Ie=Pt?b.get(Pt).bytesPerElement:1,ds=Jt.get(V).currentProgram.getUniforms();for(let Mn=0;Mn<wn;Mn++)ds.setValue(B,"_gl_DrawID",Mn),Be.render(yn[Mn]/Ie,kt[Mn])}else if(X.isInstancedMesh)Be.renderInstances(Ht,tn,X.count);else if(Y.isInstancedBufferGeometry){let yn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,kt=Math.min(Y.instanceCount,yn);Be.renderInstances(Ht,tn,kt)}else Be.render(Ht,tn)};function ed(E,O,Y,V){U!==null&&E.isNodeMaterial&&U.setObject(V,E),pt===!0&&et.setState(E,Y,!1),E.transparent===!0&&E.side===fn&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,Wr(E,O,V),E.side=rs,E.needsUpdate=!0,Wr(E,O,V),E.side=fn):Wr(E,O,V)}this.compile=function(E,O,Y=null){Y===null&&(Y=E),U!==null&&U.renderStart(E,O,Y),A=tt.get(Y),A.init(O),v.push(A),Y.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),E!==Y&&E.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),A.setupLights(),U!==null&&U.updateLights(A.state.lightsArray),Nt=this.localClippingEnabled,pt=et.init(this.clippingPlanes,Nt),pt===!0&&et.setGlobalState(this.clippingPlanes,O),U!==null&&_t.render(A.state.shadowsArray,Y,O);let V=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Et=X.material;if(Et)if(Array.isArray(Et))for(let Ot=0;Ot<Et.length;Ot++){let Mt=Et[Ot];ed(Mt,Y,O,X),V.add(Mt)}else ed(Et,Y,O,X),V.add(Et)}),A=v.pop(),U!==null&&U.renderEnd(),V},this.compileAsync=function(E,O,Y=null){let V=this.compile(E,O,Y);return new Promise(X=>{function Et(){if(V.forEach(function(Ot){let Pt=Jt.get(Ot).currentProgram;(Pt===void 0||Pt.isReady())&&V.delete(Ot)}),V.size===0){X(E);return}setTimeout(Et,10)}_e.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Zc=null;function D0(E){Zc&&Zc(E)}function nd(){us.stop()}function id(){us.start()}let us=new lp;us.setAnimationLoop(D0),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(E){Zc=E,ut.setAnimationLoop(E),E===null?us.stop():us.start()},ut.addEventListener("sessionstart",nd),ut.addEventListener("sessionend",id),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(E,O);let Y=ut.enabled===!0&&ut.isPresenting===!0,V=R!==null&&(lt===null||Y)&&R.begin(w,lt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(O),O=ut.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,O,lt),A=tt.get(E,v.length),A.init(O),A.state.textureUnits=ee.getTextureUnits(),v.push(A),Tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?xt.setFromArrayCamera(O):at.setFromProjectionMatrix(Tt,kn,O.reversedDepth),Nt=this.localClippingEnabled,pt=et.init(this.clippingPlanes,Nt),T=bt.get(E,_.length),T.init(),_.push(T),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let Ot=w.xr.getDepthSensingMesh();Ot!==null&&$c(Ot,O,-1/0,w.sortObjects)}$c(E,O,0,w.sortObjects),T.finish(),U!==null&&U.updateLights(A.state.lightsArray),w.sortObjects===!0&&T.sort(It,ce),be=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,be&&N.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),pt===!0&&et.beginShadows();let X=A.state.shadowsArray;if(_t.render(X,E,O),pt===!0&&et.endShadows(),(V&&R.hasRenderPass())===!1){let Ot=T.opaque,Mt=T.transmissive;if(A.setupLights(),O.isArrayCamera){let Pt=O.cameras;if(Mt.length>0)for(let zt=0,oe=Pt.length;zt<oe;zt++){let Ee=Pt[zt];rd(Ot,Mt,E,Ee)}be&&N.render(E);for(let zt=0,oe=Pt.length;zt<oe;zt++){let Ee=Pt[zt];sd(T,E,Ee,Ee.viewport)}}else Mt.length>0&&rd(Ot,Mt,E,O),be&&N.render(E),sd(T,E,O)}lt!==null&&G===0&&(ee.updateMultisampleRenderTarget(lt),ee.updateRenderTargetMipmap(lt)),V&&R.end(w),E.isScene===!0&&E.onAfterRender(w,E,O),gt.resetDefaultState(),Z=-1,st=null,v.pop(),v.length>0?(A=v[v.length-1],ee.setTextureUnits(A.state.textureUnits),pt===!0&&et.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,U!==null&&U.renderEnd()};function $c(E,O,Y,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){let Ot=O.isArrayCamera?xt:at;if(!E.frustumCulled||E.intersectsFrustum(Ot)){V&&Gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);let Mt=ht.update(E),Pt=E.material;Pt.visible&&T.push(E,Mt,Pt,Y,Gt.z,null,O)}}else if(E.isMesh||E.isLine||E.isPoints){let Ot=O.isArrayCamera?xt:at;if(!E.frustumCulled||E.intersectsFrustum(Ot)){let Mt=ht.update(E),Pt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Gt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Gt.copy(Mt.boundingSphere.center)),Gt.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(Pt)){let zt=Mt.groups;for(let oe=0,Ee=zt.length;oe<Ee;oe++){let Ht=zt[oe],we=Pt[Ht.materialIndex];we&&we.visible&&T.push(E,Mt,we,Y,Gt.z,Ht,O)}}else Pt.visible&&T.push(E,Mt,Pt,Y,Gt.z,null,O)}}}let Et=E.children;for(let Ot=0,Mt=Et.length;Ot<Mt;Ot++)$c(Et[Ot],O,Y,V)}function sd(E,O,Y,V){let{opaque:X,transmissive:Et,transparent:Ot}=E;A.setupLightsView(Y),pt===!0&&et.setGlobalState(w.clippingPlanes,Y),V&&St.viewport(rt.copy(V)),X.length>0&&ua(X,O,Y),Et.length>0&&ua(Et,O,Y),Ot.length>0&&ua(Ot,O,Y),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function rd(E,O,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){let Ht=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new Nn(1,1,{generateMipmaps:!0,type:Ht?ti:In,minFilter:Di,samples:Math.max(4,Oe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Te.workingColorSpace})}let Et=A.state.transmissionRenderTarget[V.id],Ot=V.viewport||rt;Et.setSize(Ot.z*w.transmissionResolutionScale,Ot.w*w.transmissionResolutionScale);let Mt=w.getRenderTarget(),Pt=w.getActiveCubeFace(),zt=w.getActiveMipmapLevel();w.setRenderTarget(Et),w.getClearColor(K),vt=w.getClearAlpha(),vt<1&&w.setClearColor(16777215,.5),w.clear(),be&&N.render(Y);let oe=w.toneMapping;w.toneMapping=di;let Ee=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),pt===!0&&et.setGlobalState(w.clippingPlanes,V),ua(E,Y,V),ee.updateMultisampleRenderTarget(Et),ee.updateRenderTargetMipmap(Et),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let we=0,tn=O.length;we<tn;we++){let ke=O[we],{object:Be,geometry:yn,material:kt,group:wn}=ke;if(kt.side===fn&&Be.layers.test(V.layers)){let Ie=kt.side;kt.side=on,kt.needsUpdate=!0,od(Be,Y,V,yn,kt,wn),kt.side=Ie,kt.needsUpdate=!0,Ht=!0}}Ht===!0&&(ee.updateMultisampleRenderTarget(Et),ee.updateRenderTargetMipmap(Et))}w.setRenderTarget(Mt,Pt,zt),w.setClearColor(K,vt),Ee!==void 0&&(V.viewport=Ee),w.toneMapping=oe}function ua(E,O,Y){let V=O.isScene===!0?O.overrideMaterial:null;for(let X=0,Et=E.length;X<Et;X++){let Ot=E[X],{object:Mt,geometry:Pt,group:zt}=Ot,oe=Ot.material;oe.allowOverride===!0&&V!==null&&(oe=V),Mt.layers.test(Y.layers)&&od(Mt,O,Y,Pt,oe,zt)}}function od(E,O,Y,V,X,Et){U!==null&&X.isNodeMaterial&&U.setObject(E,X),E.onBeforeRender(w,O,Y,V,X,Et),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(w,O,Y,V,E,Et),X.transparent===!0&&X.side===fn&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,w.renderBufferDirect(Y,O,V,X,E,Et),X.side=rs,X.needsUpdate=!0,w.renderBufferDirect(Y,O,V,X,E,Et),X.side=fn):w.renderBufferDirect(Y,O,V,X,E,Et),E.onAfterRender(w,O,Y,V,X,Et)}function ad(E){let O=0;for(let Y of E)Y.texture!==null&&O++;return O}function Wr(E,O,Y){O.isScene!==!0&&(O=Se);let V=Jt.get(E),X=A.state.lights,Et=A.state.shadowsArray,Ot=X.state.version,Mt=ot.getParameters(E,X.state,Et,O,Y,A.state.lightProbeGridArray),Pt=ot.getProgramCacheKey(Mt),zt=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=C.get(E.envMap||V.environment,oe),V.envMapRotation=V.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",Ne),zt=new Map,V.programs=zt,V.programVariants=new Map);let Ee=zt.get(Pt);if(Ee!==void 0){if(V.currentProgram===Ee&&V.lightsStateVersion===Ot)return cd(E,Mt),Ee}else Mt.uniforms=ot.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,Y,Mt),E.onBeforeCompile(Mt,w),Ee=ot.acquireProgram(Mt,Pt),zt.set(Pt,Ee),V.uniforms=Mt.uniforms;let Ht=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=et.uniform),cd(E,Mt),V.needsLights=O0(E),V.lightsStateVersion=Ot,V.needsLights&&(Ht.ambientLightColor.value=X.state.ambient,Ht.lightProbe.value=X.state.probe,Ht.sunLights.value=X.state.sun,Ht.sunLightShadows.value=X.state.sunShadow,Ht.directionalLights.value=X.state.directional,Ht.directionalLightShadows.value=X.state.directionalShadow,Ht.spotLights.value=X.state.spot,Ht.spotLightShadows.value=X.state.spotShadow,Ht.rectAreaLights.value=X.state.rectArea,Ht.ltc_1.value=X.state.rectAreaLTC1,Ht.ltc_2.value=X.state.rectAreaLTC2,Ht.pointLights.value=X.state.point,Ht.pointLightShadows.value=X.state.pointShadow,Ht.hemisphereLights.value=X.state.hemi,Ht.sunShadowMatrix.value=X.state.sunShadowMatrix,Ht.sunShadowCascade.value=X.state.sunShadowCascade,Ht.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ht.spotLightMatrix.value=X.state.spotLightMatrix,Ht.spotLightMap.value=X.state.spotLightMap,Ht.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=ad(A.state.lightProbeGridArray),V.currentProgram=Ee,V.uniformsList=null,Ee}function N0(E,O,Y,V,X){let Et=Jt.get(E),Ot=Et.currentProgram.id+","+V+","+X,Mt=Et.programVariants.get(Ot);return Mt===void 0?(Mt=Wr(E,O,Y),Et.programVariants.set(Ot,Mt)):(Et.currentProgram=Mt,Et.uniformsList=null,Et.outputColorSpace=V,Et.toneMapping=X),Mt}function ld(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Sr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function cd(E,O){let Y=Jt.get(E);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function U0(E,O,Y,V,X){O.isScene!==!0&&(O=Se),ee.resetTextureUnits();let Et=O.fog,Ot=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,Mt=lt===null?w.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Te.workingColorSpace,Pt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,zt=C.get(V.envMap||Ot,Pt),oe=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ee=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ht=!!Y.morphAttributes.position,we=!!Y.morphAttributes.normal,tn=!!Y.morphAttributes.color,ke=di;V.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ke=w.toneMapping);let Be=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yn=Be!==void 0?Be.length:0,kt=Jt.get(V),wn=A.state.lights;if(pt===!0&&(Nt===!0||E!==st)){let Ze=E===st&&V.id===Z;et.setState(V,E,Ze)}let Ie=!1,ds=!1;V.version===kt.__version?kt.needsLights&&kt.lightsStateVersion!==wn.state.version||X.isBatchedMesh&&kt.batching===!1||!X.isBatchedMesh&&kt.batching===!0||X.isBatchedMesh&&kt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&kt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&kt.instancing===!1||!X.isInstancedMesh&&kt.instancing===!0||X.isSkinnedMesh&&kt.skinning===!1||!X.isSkinnedMesh&&kt.skinning===!0||X.isInstancedMesh&&kt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&kt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&kt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&kt.instancingMorph===!1&&X.morphTexture!==null||kt.envMap!==zt||V.fog===!0&&kt.fog!==Et||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==et.numPlanes||kt.numIntersection!==et.numIntersection)||kt.vertexAlphas!==oe||kt.vertexTangents!==Ee||kt.morphTargets!==Ht||kt.morphNormals!==we||kt.morphColors!==tn||kt.morphTargetsCount!==yn||kt.numLightProbeGrids!==ad(A.state.lightProbeGridArray)?Ie=!0:(kt.outputColorSpace!==Mt||kt.toneMapping!==ke)&&(ds=!0):(Ie=!0,kt.__version=V.version);let Mn=kt.currentProgram;(Ie===!0||ds===!0)&&(Mn=ds===!0?N0(V,O,X,Mt,ke):Wr(V,O,X),U&&V.isNodeMaterial&&U.onUpdateProgram(V,Mn,kt));let da=!1,qi=!1,fs=!1,Ce=Mn.getUniforms(),mn=kt.uniforms;if(St.useProgram(Mn.program)&&(da=!0,qi=!0,fs=!0),V.id!==Z&&(Z=V.id,qi=!0),da||st!==E){St.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ce.setValue(B,"projectionMatrix",E.projectionMatrix),Ce.setValue(B,"viewMatrix",E.matrixWorldInverse);let hn=Ce.map.cameraPosition;hn!==void 0&&hn.setValue(B,le.setFromMatrixPosition(E.matrixWorld)),Oe.logarithmicDepthBuffer&&Ce.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ce.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),st!==E&&(st=E,qi=!0,fs=!0)}if(kt.needsLights&&(wn.state.sunShadowMap.length>0&&Ce.setValue(B,"sunShadowMap",wn.state.sunShadowMap,ee),wn.state.directionalShadowMap.length>0&&Ce.setValue(B,"directionalShadowMap",wn.state.directionalShadowMap,ee),wn.state.spotShadowMap.length>0&&Ce.setValue(B,"spotShadowMap",wn.state.spotShadowMap,ee),wn.state.pointShadowMap.length>0&&Ce.setValue(B,"pointShadowMap",wn.state.pointShadowMap,ee)),X.isSkinnedMesh){Ce.setOptional(B,X,"bindMatrix"),Ce.setOptional(B,X,"bindMatrixInverse");let Ze=X.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ce.setValue(B,"boneTexture",Ze.boneTexture,ee))}X.isBatchedMesh&&(Ce.setOptional(B,X,"batchingTexture"),Ce.setValue(B,"batchingTexture",X._matricesTexture,ee),Ce.setOptional(B,X,"batchingIdTexture"),Ce.setValue(B,"batchingIdTexture",X._indirectTexture,ee),Ce.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Ce.setValue(B,"batchingColorTexture",X._colorsTexture,ee));let Yn=Y.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&nt.update(X,Y,Mn),(qi||kt.receiveShadow!==X.receiveShadow)&&(kt.receiveShadow=X.receiveShadow,Ce.setValue(B,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(mn.envMapIntensity.value=O.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=UM()),qi){if(Ce.setValue(B,"toneMappingExposure",w.toneMappingExposure),kt.needsLights&&F0(mn,fs),Et&&V.fog===!0&&mt.refreshFogUniforms(mn,Et),mt.refreshMaterialUniforms(mn,V,$,Zt,A.state.transmissionRenderTarget[E.id]),kt.needsLights&&kt.numLightProbeGrids>0){let Ze=M,hn=0;for(let Mi of A.state.lightProbeGridArray)Mi.texture!==null&&(Ze.textures[hn]=Mi.texture,Ze.min[hn]=Mi.boundingBox.min,Ze.max[hn]=Mi.boundingBox.max,Ze.resolution[hn]=Mi.resolution,hn++);for(let Mi in Ze)Ze[Mi].length=hn;mn.probesSH.value=Ze.textures,mn.probesMin.value=Ze.min,mn.probesMax.value=Ze.max,mn.probesResolution.value=Ze.resolution}Sr.upload(B,ld(kt),mn,ee)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Sr.upload(B,ld(kt),mn,ee),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ce.setValue(B,"center",X.center),Ce.setValue(B,"modelViewMatrix",X.modelViewMatrix),Ce.setValue(B,"normalMatrix",X.normalMatrix),Ce.setValue(B,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){let Ze=V.uniformsGroups;for(let hn=0,Mi=Ze.length;hn<Mi;hn++){let ud=Ze[hn];Xt.update(ud,Mn),Xt.bind(ud,Mn)}}return Mn}function F0(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function O0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(E,O,Y){let V=Jt.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Jt.get(E.texture).__webglTexture=O,Jt.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let Y=Jt.get(E);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,Y=0){lt=E,q=O,G=Y;let V=null,X=!1,Et=!1;if(E){let Mt=Jt.get(E);if(Mt.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(B.FRAMEBUFFER,Mt.__webglFramebuffer),rt.copy(E.viewport),At.copy(E.scissor),qt=E.scissorTest,St.viewport(rt),St.scissor(At),St.setScissorTest(qt),Z=-1;return}else if(Mt.__webglFramebuffer===void 0)ee.setupRenderTarget(E);else if(Mt.__hasExternalTextures)ee.rebindTextures(E,Jt.get(E.texture).__webglTexture,Jt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let oe=E.depthTexture;if(Mt.__boundDepthTexture!==oe){if(oe!==null&&Jt.has(oe)&&(E.width!==oe.image.width||E.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(E)}}let Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Et=!0);let zt=Jt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?V=zt[O][Y]:V=zt[O],X=!0):E.samples>0&&ee.useMultisampledRTT(E)===!1?V=Jt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?V=zt[Y]:V=zt,rt.copy(E.viewport),At.copy(E.scissor),qt=E.scissorTest}else rt.copy(Wt).multiplyScalar($).floor(),At.copy(he).multiplyScalar($).floor(),qt=ve;if(Y!==0&&(V=H),St.bindFramebuffer(B.FRAMEBUFFER,V)&&St.drawBuffers(E,V),St.viewport(rt),St.scissor(At),St.setScissorTest(qt),X){let Mt=Jt.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,Y)}else if(Et){let Mt=O;for(let Pt=0;Pt<E.textures.length;Pt++){let zt=Jt.get(E.textures[Pt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Pt,zt.__webglTexture,Y,Mt)}}else if(E!==null&&Y!==0){let Mt=Jt.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Mt.__webglTexture,Y)}Z=-1};function hd(E){let O=Jt.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=Oe.textureFormatReadable(E.format),O.__typeReadable=Oe.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,Y,V,X,Et,Ot,Mt=0){if(!(E&&E.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Jt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(Pt=Pt[Ot],Array.isArray(Pt)&&(Pt=Pt[0])),Pt){St.bindFramebuffer(B.FRAMEBUFFER,Pt);try{let zt=E.textures[Mt],oe=zt.format,Ee=zt.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Mt);let Ht=hd(zt);if(Ht.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-V&&Y>=0&&Y<=E.height-X&&B.readPixels(O,Y,V,X,ft.convert(oe),ft.convert(Ee),Et)}finally{let zt=lt!==null?Jt.get(lt).__webglFramebuffer:null;St.bindFramebuffer(B.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,O,Y,V,X,Et,Ot,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Jt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(Pt=Pt[Ot],Array.isArray(Pt)&&(Pt=Pt[0])),Pt)if(O>=0&&O<=E.width-V&&Y>=0&&Y<=E.height-X){St.bindFramebuffer(B.FRAMEBUFFER,Pt);let zt=E.textures[Mt],oe=zt.format,Ee=zt.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Mt);let Ht=hd(zt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,we),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),B.readPixels(O,Y,V,X,ft.convert(oe),ft.convert(Ee),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let tn=lt!==null?Jt.get(lt).__webglFramebuffer:null;St.bindFramebuffer(B.FRAMEBUFFER,tn);let ke=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Af(B,ke,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,we),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(we),B.deleteSync(ke),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Y=0){let V=Math.pow(2,-Y),X=Math.floor(E.image.width*V),Et=Math.floor(E.image.height*V),Ot=O!==null?O.x:0,Mt=O!==null?O.y:0;ee.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Ot,Mt,X,Et),St.unbindTexture()},this.copyTextureToTexture=function(E,O,Y=null,V=null,X=0,Et=0){let Ot,Mt,Pt,zt,oe,Ee,Ht,we,tn,ke=E.isCompressedTexture?E.mipmaps[Et]:E.image;if(Y!==null)Ot=Y.max.x-Y.min.x,Mt=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,zt=Y.min.x,oe=Y.min.y,Ee=Y.isBox3?Y.min.z:0;else{let Ce=Math.pow(2,-X);Ot=Math.floor(ke.width*Ce),Mt=Math.floor(ke.height*Ce),E.isDataArrayTexture?Pt=ke.depth:E.isData3DTexture?Pt=Math.floor(ke.depth*Ce):Pt=1,zt=0,oe=0,Ee=0}V!==null?(Ht=V.x,we=V.y,tn=V.z):(Ht=0,we=0,tn=0);let Be=ft.convert(O.format),yn=ft.convert(O.type),kt;O.isData3DTexture?(ee.setTexture3D(O,0),kt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ee.setTexture2DArray(O,0),kt=B.TEXTURE_2D_ARRAY):(ee.setTexture2D(O,0),kt=B.TEXTURE_2D),St.activeTexture(B.TEXTURE0),St.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),St.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),St.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let wn=St.getParameter(B.UNPACK_ROW_LENGTH),Ie=St.getParameter(B.UNPACK_IMAGE_HEIGHT),ds=St.getParameter(B.UNPACK_SKIP_PIXELS),Mn=St.getParameter(B.UNPACK_SKIP_ROWS),da=St.getParameter(B.UNPACK_SKIP_IMAGES);St.pixelStorei(B.UNPACK_ROW_LENGTH,ke.width),St.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ke.height),St.pixelStorei(B.UNPACK_SKIP_PIXELS,zt),St.pixelStorei(B.UNPACK_SKIP_ROWS,oe),St.pixelStorei(B.UNPACK_SKIP_IMAGES,Ee);let qi=E.isDataArrayTexture||E.isData3DTexture,fs=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Ce=Jt.get(E),mn=Jt.get(O),Yn=Jt.get(Ce.__renderTarget),Ze=Jt.get(mn.__renderTarget);St.bindFramebuffer(B.READ_FRAMEBUFFER,Yn.__webglFramebuffer),St.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let hn=0;hn<Pt;hn++)qi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.get(E).__webglTexture,X,Ee+hn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.get(O).__webglTexture,Et,tn+hn)),B.blitFramebuffer(zt,oe,zt+Ot,oe+Mt,Ht,we,Ht+Ot,we+Mt,B.DEPTH_BUFFER_BIT,B.NEAREST);St.bindFramebuffer(B.READ_FRAMEBUFFER,null),St.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Jt.has(E)){let Ce=Jt.get(E),mn=Jt.get(O);St.bindFramebuffer(B.READ_FRAMEBUFFER,L),St.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let Yn=0;Yn<Pt;Yn++)qi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.__webglTexture,X,Ee+Yn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ce.__webglTexture,X),fs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,Et,tn+Yn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,Et),X!==0?B.blitFramebuffer(zt,oe,zt+Ot,oe+Mt,Ht,we,Ht+Ot,we+Mt,B.COLOR_BUFFER_BIT,B.NEAREST):fs?B.copyTexSubImage3D(kt,Et,Ht,we,tn+Yn,zt,oe,Ot,Mt):B.copyTexSubImage2D(kt,Et,Ht,we,zt,oe,Ot,Mt);St.bindFramebuffer(B.READ_FRAMEBUFFER,null),St.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else fs?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(kt,Et,Ht,we,tn,Ot,Mt,Pt,Be,yn,ke.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(kt,Et,Ht,we,tn,Ot,Mt,Pt,Be,ke.data):B.texSubImage3D(kt,Et,Ht,we,tn,Ot,Mt,Pt,Be,yn,ke):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,Ht,we,Ot,Mt,Be,yn,ke.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,Ht,we,ke.width,ke.height,Be,ke.data):B.texSubImage2D(B.TEXTURE_2D,Et,Ht,we,Ot,Mt,Be,yn,ke);St.pixelStorei(B.UNPACK_ROW_LENGTH,wn),St.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie),St.pixelStorei(B.UNPACK_SKIP_PIXELS,ds),St.pixelStorei(B.UNPACK_SKIP_ROWS,Mn),St.pixelStorei(B.UNPACK_SKIP_IMAGES,da),Et===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(kt),St.unbindTexture()},this.initRenderTarget=function(E){Jt.get(E).__webglFramebuffer===void 0&&ee.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ee.setTextureCube(E,0):E.isData3DTexture?ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ee.setTexture2DArray(E,0):ee.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){q=0,G=0,lt=null,St.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var gc=class extends Qi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ge;t.deleteAttribute("uv");let e=new ae({side:on}),i=new ae,s=new ui(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new F(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ts(t,i,6),a=new ze;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new F(t,wr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new F(t,wr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new F(t,wr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new F(t,wr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new F(t,wr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new F(t,wr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function wr(n){return new Ro({color:0,emissive:16777215,emissiveIntensity:n})}var xc=1337;function Ae(){return xc=xc*16807%2147483647,(xc-1)/2147483646}function Tr(n){xc=n}function FM(n,t){let e=new Float32Array(n*n);Tr(t);for(let i=0;i<e.length;i++)e[i]=Ae();return(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),h=l*l*(3-2*l),u=n,d=(r%u+u)%u,f=(o%u+u)%u,p=(d+1)%u,x=(f+1)%u,m=e[f*u+d],g=e[f*u+p],y=e[x*u+d],S=e[x*u+p];return m+(g-m)*c+(y-m)*h+(m-g-y+S)*c*h}}function pe(n,t=4,e=5){let i=[];for(let s=0;s<e;s++)i.push({f:FM(t<<s,n+s*97),p:t<<s});return(s,r)=>{let o=0,a=.5,l=0;for(let c of i)o+=c.f(s*c.p,r*c.p)*a,l+=a,a*=.5;return o/l}}var Su={},_c=4;function yp(n){_c=n}function Ue(n,t,e,i={}){if(Su[n])return Su[n];let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createImageData(t,t),a=new Float32Array(t*t);for(let x=0;x<t;x++)for(let m=0;m<t;m++){let g=e(m/t,x/t,m,x),y=(x*t+m)*4;o.data[y]=Math.max(0,Math.min(255,g.r*255)),o.data[y+1]=Math.max(0,Math.min(255,g.g*255)),o.data[y+2]=Math.max(0,Math.min(255,g.b*255)),o.data[y+3]=g.a===void 0?255:g.a*255,a[x*t+m]=g.h===void 0?.5:g.h}r.putImageData(o,0,0),i.post&&i.post(r,t);let l=new Ci(s);l.colorSpace=rn,l.wrapS=l.wrapT=Ms,l.anisotropy=_c;let c=document.createElement("canvas");c.width=c.height=t;let h=c.getContext("2d"),u=h.createImageData(t,t),d=i.normalStrength||2;for(let x=0;x<t;x++)for(let m=0;m<t;m++){let g=a[x*t+(m-1+t)%t],y=a[x*t+(m+1)%t],S=a[(x-1+t)%t*t+m],M=a[(x+1)%t*t+m],T=(g-y)*d,A=(S-M)*d,_=1,v=Math.hypot(T,A,_);T/=v,A/=v,_/=v;let R=(x*t+m)*4;u.data[R]=(T*.5+.5)*255,u.data[R+1]=(-A*.5+.5)*255,u.data[R+2]=(_*.5+.5)*255,u.data[R+3]=255}h.putImageData(u,0,0);let f=new Ci(c);f.wrapS=f.wrapT=Ms,f.anisotropy=_c;let p={map:l,normalMap:f,canvas:s};return Su[n]=p,p}var te=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],bu=(n,t,e)=>n+(t-n)*e,He=(n,t,e)=>[bu(n[0],t[0],e),bu(n[1],t[1],e),bu(n[2],t[2],e)],ni=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),Cn=n=>n-Math.floor(n);function Ke(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}var j={};function Mp(n=1){let t=n>=1?512:256,e=n>=1?256:128;{let r=pe(11,4,6),o=pe(12,16,3);j.grass=Ue("grass",t,(a,l)=>{let c=r(a,l),h=o(a,l),u=Ke(Math.floor(a*180),Math.floor(l*60+Ke(Math.floor(a*180),3)*10)),d=He(te(4156970),te(8037962),ni(c*1.3-.15+u*.25)),f=He(d,te(9075274),ni((h-.62)*3)*.5);return{r:f[0],g:f[1],b:f[2],h:u*.6+c*.4}},{normalStrength:3})}{let r=pe(21,8,5),o=pe(22,4,4);j.asphalt=Ue("asphalt",t,(a,l,c,h)=>{let u=Ke(c,h),d=r(a,l),f=Math.abs(o(a,l)-.5)<.006?1:0,p=.2+d*.12+(u>.93?.12:0)-(u<.05?.06:0)-f*.12;return{r:p,g:p,b:p*1.04,h:u*.5+d*.3-f*.6}},{normalStrength:2.5})}{let r=pe(31,8,5);j.concrete=Ue("concrete",e*2,(o,a,l,c)=>{let h=r(o,a),u=Ke(l,c),d=Cn(o*2)<.012||Cn(a*2)<.012?1:0,f=.62+h*.15+u*.05-d*.25;return{r:f,g:f*.98,b:f*.94,h:h*.5+u*.2-d*.7}})}{let r=pe(41,8,4);j.brick=Ue("brick",t,(o,a,l,c)=>{let d=Math.floor(a*16),f=d%2*.5,p=Cn(o*8+f),x=Cn(a*16),m=Math.floor(o*8+f)+d*31,g=p<.05||x<.1,y=Ke(m,7),S=He(te(9059112),te(11556666),y),M=r(o,a);if(g){let A=.68+M*.08;return{r:A,g:A*.96,b:A*.9,h:.1}}let T=He(S,te(5909022),ni(M-.45)*1.2);return{r:T[0],g:T[1],b:T[2],h:.7+M*.3}},{normalStrength:3})}{let r=pe(51,4,5);j.siding=Ue("siding",e*2,(o,a,l,c)=>{let u=Cn(a*10),d=.82+u*.18-(u>.94?.3:0),f=r(o*.5,a)*.08+Ke(l,Math.floor(c/3))*.03,p=ni(d+f-.05);return{r:p,g:p,b:p,h:u}},{normalStrength:4})}{let r=pe(61,8,5);j.plaster=Ue("plaster",e,(o,a)=>{let l=r(o,a),c=.86+l*.12;return{r:c,g:c,b:c,h:l}},{normalStrength:1.2})}{let r=pe(71,2,5);j.floor=Ue("floor",t,(o,a,l,c)=>{let u=Math.floor(a*8),d=Ke(u,1),f=Cn(o*2+d),p=Math.floor(o*2+d)*13+u,x=Cn(a*8)<.03||f<.006,m=r(o*.5+p*.17,a*6+p*.3),g=Ke(p,4),y=He(He(te(8014376),te(11038783),g),te(4860436),ni(m-.45)*1.5+Math.sin(m*60)*.06);return x?{r:y[0]*.5,g:y[1]*.5,b:y[2]*.5,h:0}:{r:y[0],g:y[1],b:y[2],h:.6+m*.2}})}{let r=pe(81,8,4);j.roof=Ue("roof",e*2,(o,a,l,c)=>{let u=Math.floor(a*12),d=Cn(a*12),f=Cn(o*8+u%2*.5),p=Math.floor(o*8+u%2*.5)+u*17,m=.25+Ke(p,3)*.12+r(o,a)*.1-(d>.9?.15:0)-(f<.03?.1:0)+d*.06;return{r:m*1.05,g:m*.92,b:m*.88,h:d}},{normalStrength:4})}{let r=pe(91,2,5);j.wood=Ue("wood",e*2,(o,a,l,c)=>{let h=r(o*.3,a*4),u=Math.sin((h*30+o*3)*3)*.5+.5,d=He(te(11567184),te(8015920),u*.6+Ke(l,c)*.08);return{r:d[0],g:d[1],b:d[2],h:u*.6}},{normalStrength:2})}{let r=pe(92,2,5),o=pe(93,8,4);j.paintwood=Ue("paintwood",e,(a,l,c,h)=>{let u=r(a*.3,l*4),d=o(a,l)>.8,f=Math.sin(u*60)*.5+.5;if(d){let x=He(te(9071178),te(6965808),f);return{r:x[0],g:x[1],b:x[2],h:.2}}let p=.88+f*.05;return{r:p,g:p,b:p*.97,h:.6+f*.1}},{normalStrength:2})}{let r=pe(101,8,6);j.dirt=Ue("dirt",e*2,(o,a,l,c)=>{let h=r(o,a),u=Ke(l,c),d=He(te(4862496),te(8018490),h*1.2-.1+u*.1),f=u>.985;return{r:f?.6:d[0],g:f?.58:d[1],b:f?.55:d[2],h:h+(f?.5:0)}},{normalStrength:3})}j.tile=Ue("tile",e,(r,o,a,l)=>{let c=Cn(r*4)<.04||Cn(o*4)<.04,h=(Math.floor(r*4)+Math.floor(o*4))%2,u=c?.55:h?.92:.2;return{r:u,g:u,b:u*(h?.98:1.1),h:c?0:1}});{let r=pe(111,16,3);j.carpet=Ue("carpet",e,(o,a,l,c)=>{let h=r(o,a)*.4+Ke(l,c)*.6,u=.75+h*.25;return{r:u,g:u,b:u,h}},{normalStrength:1.5})}{let r=pe(121,4,5),o=pe(122,32,2);j.metal=Ue("metal",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l*.05),f=.82+d*.12-ni(u-.6)*.8;return{r:f,g:f,b:f,h:d*.3+u*.2}},{normalStrength:1})}{let r=pe(131,4,6);j.rust=Ue("rust",e,(o,a)=>{let l=r(o,a),c=He(te(5921370),te(9062946),ni(l*1.6-.5));return{r:c[0],g:c[1],b:c[2],h:l}},{normalStrength:2})}{let r=pe(141,4,5);j.bark=Ue("bark",e,(o,a,l,c)=>{let h=r(o*2,a*.4),u=Math.abs(Math.sin(o*40+h*8)),d=He(te(3023384),te(6968384),u*.7+h*.3);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:4})}{let r=pe(151,8,4);j.leaf=Ue("leaf",e,(o,a,l,c)=>{let h=r(o,a),u=Ke(l>>2,c>>2),d=He(te(2775582),te(6986298),h*.8+u*.4);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:3})}{let r=pe(155,8,5);j.hedge=Ue("hedge",e,(o,a,l,c)=>{let h=r(o,a),u=Ke(l>>1,c>>1),d=He(te(1981974),te(5933618),h*.9+u*.3-.1);return{r:d[0],g:d[1],b:d[2],h:h*.5+u*.5}},{normalStrength:5})}{let r=pe(201,4,5),o=pe(202,16,3);j.carrot=Ue("carrot",t,(a,l,c,h)=>{let u=Math.pow(Math.abs(Math.sin(l*Math.PI*22+r(a,l)*9)),10)*(.4+r(a*3,l)*.8),d=o(a,l),f=Ke(Math.floor(a*24),Math.floor(l*40))>.93&&Cn(l*40)<.35?1:0,p=He(te(15759898),te(14177804),d*.8+u*.35),x=Math.pow(Math.abs(Math.sin(a*Math.PI*9+r(a,l*.3)*4)),30)*.15,m=He(p,te(9062928),u*.35+f*.5+x);return{r:m[0],g:m[1],b:m[2],h:.7-u*.5-f*.4+d*.1}},{normalStrength:4})}{let r=pe(211,4,5),o=pe(212,32,2);j.tomato=Ue("tomato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Math.pow(Math.abs(Math.sin(a*Math.PI*6)),8)*.1,p=He(te(14164762),te(11014670),u*.7+f),x=ni(1-l*6),m=He(p,te(12099616),x*.25),g=d>.72?.08:0;return{r:m[0]+g,g:m[1]+g*.6,b:m[2],h:u*.3+d*.2}},{normalStrength:1.2})}{let r=pe(221,4,6),o=pe(222,16,3);j.potato=Ue("potato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Ke(c,h),p=He(te(13148266),te(10122308),u*1.1-.1+f*.1);p=He(p,te(6965802),ni((d-.6)*3)*.6);let x=Cn(a*5),m=Cn(l*4),g=Ke(Math.floor(a*5),Math.floor(l*4)),y=Math.hypot(x-.3-g*.4,m-.5),S=g>.55&&y<.06?1-y/.06:0;return p=He(p,te(4861976),S*.8),{r:p[0],g:p[1],b:p[2],h:u*.5+d*.3-S*.6+f*.1}},{normalStrength:4})}{let r=pe(231,4,5);j.pepper=Ue("pepper",t,(o,a,l,c)=>{let h=r(o,a),u=Math.pow(Math.abs(Math.cos(o*Math.PI*4)),10),d=He(te(2787870),te(1268240),h*.7+u*.4);return{r:d[0],g:d[1],b:d[2],h:h*.2-u*.3}},{normalStrength:1.5})}{let r=pe(241,8,4);j.veggreen=Ue("veggreen",e,(o,a,l,c)=>{let h=r(o,a),u=Math.abs(Cn(o*6)-.5)<.04?.15:0,d=He(te(3836452),te(1989140),h);return{r:d[0]+u,g:d[1]+u,b:d[2]+u*.5,h:h-u}},{normalStrength:2})}{let r=pe(251,8,5),o=pe(252,32,2);j.skin=Ue("skin",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=He(te(15775888),te(13140058),u*.55+d*.25);return{r:f[0],g:f[1],b:f[2],h:d*.4+u*.2}},{normalStrength:1.2})}let i=(r,o,a,l)=>{j[r]=Ue(r,e,(c,h,u,d)=>{let f=c-.5,p=h-.5,x=Math.hypot(f,p)*2,m=Math.atan2(p,f),g=He(te(o),te(a),ni(x)),y=.5;if(l==="carrot"&&(x<.45&&(g=He(g,te(16298048),.6)),y=Math.abs(Math.sin(m*10))*.2),l==="tomato"){let S=Math.cos(m*3)*.5+.5;x>.35&&x<.78&&S>.4&&(g=He(te(15228992),te(15777888),.3),Ke(Math.floor(c*40),Math.floor(h*40))>.8&&(g=te(16310432),y=1))}return l==="pepper"&&x<.3&&Ke(Math.floor(c*50),Math.floor(h*50))>.7&&(g=te(15788208),y=1),x>.95&&(g=He(g,te(0),.2)),{r:g[0],g:g[1],b:g[2],h:y}},{normalStrength:2})};i("fleshCarrot",16292400,15233050,"carrot"),i("fleshTomato",15751738,13115418,"tomato"),i("fleshPotato",16048808,15257744,"potato"),i("fleshPepper",14217392,4890672,"pepper");{let r=pe(301,32,3);j.polymer=Ue("polymer",e,(o,a,l,c)=>{let h=Ke(l,c)*.5+r(o,a)*.5,u=.85+h*.15;return{r:u,g:u,b:u,h}},{normalStrength:2.5})}{let r=pe(311,4,4);j.gunmetal=Ue("gunmetal",e,(o,a,l,c)=>{let h=Ke(Math.floor(l/1),Math.floor(c/24))*.1,u=Math.abs(Math.sin(o*30+a*90+r(o,a)*20))>.995?.25:0,d=ni(r(o,a)-.65)*1.5,f=.85+h+u+d;return{r:f,g:f,b:f,h:h+u}},{normalStrength:1.2})}let s=(r,o,a,l)=>{let c=pe(r.length*13+500,4,4),h=pe(r.length*17+600,4,4);j[r]=Ue(r,e,(u,d,f,p)=>{let x=u,m=d;l&&(x=Math.floor(u*48)/48,m=Math.floor(d*48)/48);let g=c(x*a,m*a),y=h(x*a+.3,m*a),S=g>.56?1:y>.58?2:g<.4?3:0,M=te(o[S]),T=Ke(f,p)*.05;return{r:M[0]+T,g:M[1]+T,b:M[2]+T,h:S*.1+T}},{normalStrength:1})};return s("camoWood",[5925434,3818532,9075280,2237978],1,!1),s("camoDesert",[13152384,10521178,14733480,8021056],1,!1),s("camoCarrot",[15759898,13129228,3836452,16752704],1,!0),s("camoUrban",[9080466,5922402,13159632,2764338],1,!0),j}function Ds(n,t={}){let e=t.w||256,i=t.h||256,s=document.createElement("canvas");s.width=e,s.height=i;let r=s.getContext("2d");t.bg&&(r.fillStyle=t.bg,r.fillRect(0,0,e,i)),t.draw&&t.draw(r,e,i),r.fillStyle=t.color||"#fff",r.font=`${t.weight||900} ${t.size||180}px ${t.font||"system-ui, sans-serif"}`,r.textAlign="center",r.textBaseline="middle",t.stroke&&(r.lineWidth=t.strokeW||10,r.strokeStyle=t.stroke,r.strokeText(n,e/2,i/2+(t.dy||0))),r.fillText(n,e/2,i/2+(t.dy||0));let o=new Ci(s);return o.colorSpace=rn,o.anisotropy=_c,o}function yc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new We;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=vp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=vp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function vp(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new nn(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function wt(n,t,e,i=1,s=[0,0,0]){let r=new ge(n,t,e),o=r.attributes.uv,a=[[e,t,s[2],s[1]],[e,t,-s[2],s[1]],[n,e,s[0],-s[2]],[n,e,s[0],s[2]],[n,t,s[0],s[1]],[n,t,-s[0],s[1]]];for(let l=0;l<6;l++){let[c,h,u,d]=a[l];for(let f=0;f<4;f++){let p=l*4+f;o.setXY(p,(o.getX(p)*c+u)/i,(o.getY(p)*h+d)/i)}}return r}function Ar(n,t,e){let i=n.attributes.uv;for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*t,i.getY(s)*e);return n}var Mc=class{constructor(){this.buckets=new Map,this.colliders=[],this.noShadow=new Set}addGeo(t,e,i){let s=e.index?e.toNonIndexed():e.clone();i&&s.applyMatrix4(i);for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);s.attributes.uv||s.setAttribute("uv",new nn(new Float32Array(s.attributes.position.count*2),2)),this.buckets.has(t)||this.buckets.set(t,[]),this.buckets.get(t).push(s)}box(t,e,i,s,r,o,a,l={}){let c=wt(r,o,a,l.uv||1,l.worldUV===!1?[0,0,0]:[e-r/2,i-o/2,s-a/2]),h=new Qt;(l.rotY||l.rotX||l.rotZ)&&h.makeRotationFromEuler(new zn(l.rotX||0,l.rotY||0,l.rotZ||0)),h.setPosition(e,i,s),this.addGeo(t,c,h),l.collide!==!1&&this.col(e-r/2,i-o/2,s-a/2,e+r/2,i+o/2,s+a/2,l)}col(t,e,i,s,r,o,a={}){this.colliders.push({min:new D(Math.min(t,s),Math.min(e,r),Math.min(i,o)),max:new D(Math.max(t,s),Math.max(e,r),Math.max(i,o)),bullet:a.bullet!==!1,move:a.move!==!1,surf:a.surf||"concrete"})}bake(t){t.updateMatrixWorld(!0),t.traverse(e=>{e.isMesh&&this.addGeo(e.material,e.geometry,e.matrixWorld)})}finish(t){let e=[];for(let[i,s]of this.buckets){let r=yc(s,!1);r.computeBoundingSphere();let o=new F(r,i);o.castShadow=!i.userData.noCast,o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o),e.push(o)}return e}},aE=new D;function Sp(n,t,e,i){let s=0,r=i,o=-1,a=0;for(let l=0;l<3;l++){let c=l===0?n.x:l===1?n.y:n.z,h=l===0?t.x:l===1?t.y:t.z,u=l===0?e.min.x:l===1?e.min.y:e.min.z,d=l===0?e.max.x:l===1?e.max.y:e.max.z;if(Math.abs(h)<1e-9){if(c<u||c>d)return null;continue}let f=(u-c)/h,p=(d-c)/h,x=-1;if(f>p){let m=f;f=p,p=m,x=1}if(f>s&&(s=f,o=l,a=x),p<r&&(r=p),s>r)return null}return{t:s,axis:o,sign:a}}function qe(n,t=[],e={}){let i=new Set(t.filter(Boolean));n.updateMatrixWorld(!0);let s=new Qt().copy(n.matrixWorld).invert(),r=new Map,o=[],a=l=>{for(let c of l.children)i.has(c)||(c.isMesh&&!c.isInstancedMesh&&o.push(c),a(c))};if(a(n),!(o.length<2)){for(let l of o){let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let h of Object.keys(c.attributes))["position","normal","uv"].includes(h)||c.deleteAttribute(h);c.attributes.uv||c.setAttribute("uv",new nn(new Float32Array(c.attributes.position.count*2),2)),c.applyMatrix4(new Qt().multiplyMatrices(s,l.matrixWorld)),r.has(l.material)||r.set(l.material,[]),r.get(l.material).push(c)}for(let l of o)for(let c of[...l.children])o.includes(c)||l.parent.attach(c);for(let l of o)l.parent&&l.parent.remove(l);for(let[l,c]of r){let h=new F(yc(c,!1),l);h.castShadow=e.shadow!==!1,h.receiveShadow=!0,n.add(h)}}}var Fe={minX:-32,maxX:32,minZ:-27,maxZ:27},qn={A:new D(-19,0,-12.5),B:new D(18.5,0,-12.5)},Pu={south:[new D(-2.5,0,23),new D(2.5,0,23.5)],north:[new D(-2.5,0,-23),new D(2.5,0,-23.5)]},ie=n=>new ae(n),I={};function OM(){let n=(i,s)=>{let r=i.map.clone(),o=i.normalMap.clone();return r.needsUpdate=o.needsUpdate=!0,s&&(r.repeat.set(s,s),o.repeat.set(s,s)),[r,o]},[t,e]=[j.grass.map,j.grass.normalMap];I.grass=ie({map:j.grass.map,normalMap:j.grass.normalMap,roughness:.95,color:15269856}),I.asphalt=ie({map:j.asphalt.map,normalMap:j.asphalt.normalMap,roughness:.9}),I.concrete=ie({map:j.concrete.map,normalMap:j.concrete.normalMap,roughness:.85}),I.brick=ie({map:j.brick.map,normalMap:j.brick.normalMap,roughness:.85}),I.sidingY=ie({map:j.siding.map,normalMap:j.siding.normalMap,color:15785114,roughness:.75}),I.sidingB=ie({map:j.siding.map,normalMap:j.siding.normalMap,color:10274012,roughness:.75}),I.sidingG=ie({map:j.siding.map,normalMap:j.siding.normalMap,color:12109984,roughness:.75}),I.plaster=ie({map:j.plaster.map,normalMap:j.plaster.normalMap,color:15920352,roughness:.95}),I.plasterG=ie({map:j.plaster.map,normalMap:j.plaster.normalMap,color:14214352,roughness:.95}),I.floor=ie({map:j.floor.map,normalMap:j.floor.normalMap,roughness:.55}),I.roof=ie({map:j.roof.map,normalMap:j.roof.normalMap,roughness:.85,color:11561562}),I.roof2=ie({map:j.roof.map,normalMap:j.roof.normalMap,roughness:.85,color:7371400}),I.wood=ie({map:j.wood.map,normalMap:j.wood.normalMap,roughness:.8}),I.paintwood=ie({map:j.paintwood.map,normalMap:j.paintwood.normalMap,roughness:.7}),I.dirt=ie({map:j.dirt.map,normalMap:j.dirt.normalMap,roughness:1}),I.tile=ie({map:j.tile.map,normalMap:j.tile.normalMap,roughness:.3}),I.carpetR=ie({map:j.carpet.map,normalMap:j.carpet.normalMap,color:10502208,roughness:1}),I.carpetB=ie({map:j.carpet.map,normalMap:j.carpet.normalMap,color:4217482,roughness:1}),I.trim=ie({color:16052970,roughness:.5,map:j.plaster.map}),I.darkTrim=ie({color:3815994,roughness:.6}),I.metal=ie({map:j.metal.map,normalMap:j.metal.normalMap,color:10133670,metalness:.7,roughness:.4}),I.rust=ie({map:j.rust.map,normalMap:j.rust.normalMap,metalness:.4,roughness:.8}),I.chrome=ie({color:14540253,metalness:1,roughness:.15}),I.glass=ie({color:1714740,metalness:.9,roughness:.05,transparent:!0,opacity:.55}),I.glass.userData.noCast=!0,I.tire=ie({color:1710618,roughness:.9}),I.busYellow=ie({map:j.metal.map,normalMap:j.metal.normalMap,color:15905306,metalness:.3,roughness:.45}),I.carRed=ie({map:j.metal.map,color:11017762,metalness:.5,roughness:.3}),I.carBlue=ie({map:j.metal.map,color:2775712,metalness:.5,roughness:.3}),I.carWhite=ie({map:j.metal.map,color:15263972,metalness:.4,roughness:.35}),I.black=ie({color:1381653,roughness:.7}),I.bark=ie({map:j.bark.map,normalMap:j.bark.normalMap,roughness:1}),I.leaf=ie({map:j.leaf.map,normalMap:j.leaf.normalMap,roughness:.9,color:14221264}),I.hedge=ie({map:j.hedge.map,normalMap:j.hedge.normalMap,roughness:1}),I.fabricG=ie({map:j.carpet.map,normalMap:j.carpet.normalMap,color:5929562,roughness:1}),I.fabricO=ie({map:j.carpet.map,normalMap:j.carpet.normalMap,color:12615744,roughness:1}),I.white=ie({color:15790320,roughness:.4}),I.steel=ie({color:12106944,metalness:.9,roughness:.3}),I.lampGlow=new Qn({color:16773824}),I.screen=ie({color:657936,metalness:.5,roughness:.1}),I.hay=ie({map:j.grass.map,normalMap:j.grass.normalMap,color:15782016,roughness:1}),I.redPaint=ie({color:11542560,roughness:.5,map:j.metal.map}),I.greenPaint=ie({color:2779706,roughness:.6,map:j.metal.map}),I.curtain=ie({map:j.carpet.map,normalMap:j.carpet.normalMap,color:15260864,roughness:.9,side:fn}),I.lineW=ie({color:15790312,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),I.lineY=ie({color:15777824,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),I.paint1=ie({map:Ds("",{w:128,h:128,draw:i=>{let s=i.createLinearGradient(0,0,0,128);s.addColorStop(0,"#6ab0e0"),s.addColorStop(1,"#f0e0a0"),i.fillStyle=s,i.fillRect(0,0,128,128),i.fillStyle="#3a7a3a",i.beginPath(),i.moveTo(0,100),i.quadraticCurveTo(64,50,128,95),i.lineTo(128,128),i.lineTo(0,128),i.fill(),i.fillStyle="#f8f0a0",i.beginPath(),i.arc(95,35,14,0,7),i.fill()}}),roughness:.6}),I.paint2=ie({map:Ds("",{w:128,h:128,draw:i=>{i.fillStyle="#2a2a3a",i.fillRect(0,0,128,128),i.fillStyle="#e86020",i.beginPath(),i.ellipse(64,70,20,44,0,0,7),i.fill(),i.fillStyle="#3a8a2a",i.fillRect(56,14,16,18)}}),roughness:.6})}var z;function Ir(n,t,e,i,s,r,o,a,l=[],c=.22){let h=Vp(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[x,m]of p){if(m-x<.01)continue;let g=(x+m)/2,y=m-x;z.box(o,f,g,n+r*c/4,d,y,c/2,{uv:2.5,collide:!1}),z.box(a,f,g,n-r*c/4,d,y,c/2,{uv:2.5,collide:!1}),z.col(u.a,x,n-c/2,u.b,m,n+c/2,{surf:"wood"})}u.op&&BM(n,u.a,u.b,u.op,r,c)}}function Pr(n,t,e,i,s,r,o,a,l=[],c=.22){let h=Vp(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[x,m]of p){if(m-x<.01)continue;let g=(x+m)/2,y=m-x;z.box(o,n+r*c/4,g,f,c/2,y,d,{uv:2.5,collide:!1}),z.box(a,n-r*c/4,g,f,c/2,y,d,{uv:2.5,collide:!1}),z.col(n-c/2,x,u.a,n+c/2,m,u.b,{surf:"wood"})}u.op&&HM(n,u.a,u.b,u.op,r,c)}}function Vp(n,t,e){let i=[],s=n,r=[...e].sort((o,a)=>o.c-a.c);for(let o of r){let a=o.c-o.w/2,l=o.c+o.w/2;a>s&&i.push({a:s,b:a}),i.push({a,b:l,op:o}),s=l}return t>s&&i.push({a:s,b:t}),i}function BM(n,t,e,i,s,r){let a=r+.06;if(z.box(I.trim,t-.09/2+0,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),z.box(I.trim,e+.09/2,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),z.box(I.trim,(t+e)/2,i.t+.09/2,n,e-t+.09*2,.09,a,{collide:!1}),i.b>.3&&z.box(I.trim,(t+e)/2,i.b-.03,n+s*.06,e-t+.2,.06,a+.1,{collide:!1}),i.win&&(z.box(I.trim,(t+e)/2,(i.b+i.t)/2,n+s*.02,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])Wp(l<0?t-.05:e+.05,i.t+.05,n-s*(r/2+.06),l,!0)}function HM(n,t,e,i,s,r){let a=r+.06;if(z.box(I.trim,n,(i.b+i.t)/2,t-.09/2,a,i.t-i.b,.09,{collide:!1}),z.box(I.trim,n,(i.b+i.t)/2,e+.09/2,a,i.t-i.b,.09,{collide:!1}),z.box(I.trim,n,i.t+.09/2,(t+e)/2,a,.09,e-t+.09*2,{collide:!1}),i.b>.3&&z.box(I.trim,n+s*.06,i.b-.03,(t+e)/2,a+.1,.06,e-t+.2,{collide:!1}),i.win&&(z.box(I.trim,n+s*.02,(i.b+i.t)/2,(t+e)/2,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])Wp(n-s*(r/2+.06),i.t+.05,l<0?t-.05:e+.05,l,!1)}var Rr;function Wp(n,t,e,i,s){if(!I.curtain)return;if(!Rr){Rr=new xn(.5,1.6,12,1);let o=Rr.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a);o.setZ(a,Math.sin(l*40)*.035)}Rr.computeVertexNormals(),Rr.translate(0,-.8,0)}let r=new Qt().makeRotationY(s?0:Math.PI/2);r.setPosition(s?n+i*.2:n,t,s?e:e+i*.2),z.addGeo(I.curtain,Rr,r),z.box(I.darkTrim,n,t+.02,e,s?.6:.03,.03,s?.03:.6,{collide:!1})}function kM(n,t,e,i,s,r,o,a){let c=(i-e)/2+.45,h=(e+i)/2,u=Math.atan2(r,(i-e)/2),d=Math.hypot(c,r*c/((i-e)/2));for(let f of[-1,1]){let p=wt(t-n+.9,.14,d,2),x=new Qt().makeRotationX(f*u);x.setPosition((n+t)/2,s+r/2+.05-.45*Math.tan(u)/2+.02,h+f*(d/2)*Math.cos(u)),z.addGeo(o,p,x);let m=new Ft(.07,.07,t-n+.45*2,8);m.rotateZ(Math.PI/2),z.addGeo(I.trim,m,new Qt().setPosition((n+t)/2,s-.45*Math.tan(u)+.02,h+f*c))}z.box(o,(n+t)/2,s+r+.1,h,t-n+.45*2,.12,.3,{collide:!1});for(let f of[n,t]){let p=new ci;p.moveTo(e-h,0),p.lineTo(i-h,0),p.lineTo(0,r),p.closePath();let x=new Li(p,{depth:.22,bevelEnabled:!1});Ar(x,.4,.4);let m=new Qt().makeRotationY(Math.PI/2);m.setPosition(f-.11+0,s,h),z.addGeo(a,x,m)}z.box(I.plaster,(n+t)/2,s+.06,h,t-n,.12,i-e,{uv:3,bullet:!0})}function bp(n,t,e,i){let s=new Ut,r=(a,l,c,h,u)=>{let d=new F(a,l);return d.position.set(c,h,u),s.add(d),d};r(wt(2.1,.42,.9,1),i,0,.25,0),r(wt(2.1,.6,.22,1),i,0,.7,-.36),r(wt(.22,.32,.9,1),i,-1,.6,0),r(wt(.22,.32,.9,1),i,1,.6,0);for(let a of[-.48,.48]){let l=r(new Ii(.12,.7,4,10),i,a,.52,.08);l.rotation.z=Math.PI/2,l.scale.set(1,1,2.6)}for(let a of[-.5,.5]){let l=r(new ge(.35,.3,.12),I.fabricO,a,.72,-.2);l.rotation.x=-.25}for(let[a,l]of[[-.95,.38],[.95,.38],[-.95,-.38],[.95,-.38]])r(new Ft(.03,.02,.08,6),I.wood,a,.03,l);s.position.set(n,.15,t),s.rotation.y=e,z.bake(s);let o=Math.abs(Math.cos(e))>.5?[1.1,.48]:[.48,1.1];z.col(n-o[0],.15,t-o[1],n+o[0],1,t+o[1],{surf:"carpet"})}function vc(n,t,e,i,s,r=I.wood){z.box(r,n,.15+s-.03,t,e,.06,i,{collide:!1});for(let o of[-1,1])for(let a of[-1,1])z.box(I.wood,n+o*(e/2-.08),.15+(s-.06)/2,t+a*(i/2-.08),.07,s-.06,.07,{collide:!1});z.col(n-e/2,.15,t-i/2,n+e/2,.15+s,t+i/2,{bullet:!1})}function qo(n,t,e){let i=new Ut,s=(r,o,a,l,c)=>{let h=new F(r,o);return h.position.set(a,l,c),i.add(h),h};s(wt(.45,.05,.45,1),I.wood,0,.46,0);for(let r of[-1,1])for(let o of[-1,1])s(wt(.04,.46,.04,1),I.wood,r*.19,.23,o*.19);for(let r of[-1,1])s(wt(.04,.5,.04,1),I.wood,r*.19,.73,-.2);for(let r=0;r<3;r++)s(wt(.4,.05,.03,1),I.wood,0,.62+r*.13,-.2);i.position.set(n,.15,t),i.rotation.y=e,z.bake(i)}function Ep(n,t,e,i=1.2,s=1.9){let r=new Ut,o=(l,c,h,u,d)=>{let f=new F(l,c);return f.position.set(h,u,d),r.add(f),f};o(wt(i,s,.04,1),I.wood,0,s/2,-.17);for(let l of[-1,1])o(wt(.04,s,.36,1),I.wood,l*i/2,s/2,0);for(let l=0;l<5;l++){let c=.05+l*(s-.1)/4;if(o(wt(i,.04,.36,1),I.wood,0,c,0),l<4){let h=-i/2+.08;for(;h<i/2-.12;){let u=.04+Ae()*.05,d=.22+Ae()*.14,f=[9054762,2771578,3828282,13148240,5913194,14209216][Math.floor(Ae()*6)],p=new ae({color:f,roughness:.8}),x=o(wt(u,d,.24,1),pn(f),h+u/2,c+.02+d/2,.02);Ae()<.15&&(x.rotation.z=.2),h+=u+.005}}}r.position.set(n,.15,t),r.rotation.y=e,z.bake(r);let a=Math.abs(Math.cos(e))>.5?[i/2,.2]:[.2,i/2];z.col(n-a[0],.15,t-a[1],n+a[0],.15+s,t+a[1])}var Eu={};function pn(n,t={}){let e=n+JSON.stringify(t);return Eu[e]||(Eu[e]=ie({color:n,roughness:.75,...t})),Eu[e]}function wp(n,t,e,i){let o=e-i*.445;z.box(pn(15261904),(n+t)/2,.15+.92/2-.02,o,t-n,.92-.04,.65-.02,{surf:"wood"}),z.box(I.tile,(n+t)/2,.15+.92,o,t-n+.04,.04,.65+.04,{collide:!1,uv:.6});for(let h=n+.5;h<t;h+=.6)z.box(I.darkTrim,h,.15+.45,o-i*(.65/2),.02,.7,.01,{collide:!1});for(let h=n+.25;h<t;h+=.6)z.box(I.steel,h,.15+.72,o-i*(.65/2+.02),.12,.02,.03,{collide:!1});z.box(I.steel,n+1,.15+.92+.01,o,.6,.03,.42,{collide:!1});let a=new F(new Xe(.12,.02,6,12,Math.PI),I.chrome);a.position.set(n+1,.15+.92+.03,o+i*.2),a.rotation.y=Math.PI/2,z.bake(a);let l=t+.45;z.box(I.white,l,.15+.95,o,.8,1.9,.72,{}),z.box(I.steel,l-.3,.15+1.3,o-i*.37,.03,.5,.04,{collide:!1}),z.box(I.darkTrim,l,.15+1.25,o-i*.365,.8,.012,.01,{collide:!1}),z.box(pn(15261904),(n+t)/2,.15+2.1,e-i*.3,t-n,.7,.36,{collide:!1});for(let[h,u]of[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]]){let d=new F(new Xe(.08,.012,6,16),I.black);d.rotation.x=Math.PI/2,d.position.set(t-.6+h,.15+.92+.03,o+u),z.bake(d)}let c=new F(new Ft(.13,.12,.16,16,1,!1),I.steel);c.position.set(t-.75,.15+.92+.1,o-.12),z.bake(c)}function Tp(n,t,e){let i=new Ut,s=(o,a,l,c,h)=>{let u=new F(o,a);return u.position.set(l,c,h),i.add(u),u};s(wt(1.6,.5,.45,1),I.wood,0,.25,0),s(wt(1.3,.75,.06,1),I.black,0,.95,0),s(new xn(1.24,.69),I.screen,0,.95,.031),s(wt(.3,.06,.2,1),I.black,0,.53,0),i.position.set(n,.15,t),i.rotation.y=e,z.bake(i);let r=Math.abs(Math.cos(e))>.5?[.8,.25]:[.25,.8];z.col(n-r[0],.15,t-r[1],n+r[0],.65,t+r[1])}function wu(n,t,e,i,s){let r=new Ut,o=new F(wt(.9,.7,.05,1),I.wood);r.add(o);let a=new F(new xn(.78,.58),s);a.position.z=.03,r.add(a),r.position.set(n,t,e),r.rotation.y=i,z.bake(r)}function Ap(n,t,e,i,s){z.box(s,n,.155,t,e,.012,i,{collide:!1,uv:1})}function Rp(n,t){let e=new Ut,i=new F(new Ft(.15,.18,.04,16),I.black);i.position.y=.02,e.add(i);let s=new F(new Ft(.015,.015,1.5,6),I.chrome);s.position.y=.77,e.add(s);let r=new F(new Ft(.16,.24,.3,16,1,!0),pn(15786176,{side:fn,emissive:4206624}));r.position.y=1.55,e.add(r),e.position.set(n,.15,t),z.bake(e)}function Cp(n,t,e){let i=new Ut,s=(o,a,l,c,h)=>{let u=new F(o,a);return u.position.set(l,c,h),i.add(u),u};s(wt(1.5,.3,2,1),I.wood,0,.2,0),s(wt(1.45,.22,1.95,1),I.white,0,.45,0),s(wt(1.5,.08,1.4,1),I.carpetB,0,.58,.28),s(wt(1.5,.9,.08,1),I.wood,0,.55,-1);for(let o of[-.35,.35]){let a=s(new Ii(.1,.3,4,8),I.white,o,.62,-.75);a.rotation.z=Math.PI/2,a.scale.set(1,1,1.8)}i.position.set(n,.15,t),i.rotation.y=e,z.bake(i);let r=Math.abs(Math.cos(e))>.5?[.75,1.05]:[1.05,.75];z.col(n-r[0],.15,t-r[1],n+r[0],.8,t+r[1],{bullet:!0})}function Pp(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.18,o=2.9,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;z.box(I.concrete,(t+e)/2,.08,(i+s)/2,e-t+.3,.16,s-i+.3,{collide:!1}),z.box(I.floor,(t+e)/2,r-.01,(i+s)/2,e-t-.1,.02,s-i-.1,{collide:!1,uv:3}),z.col(t,0,i,e,r,s,{bullet:!0,surf:"wood"});let h=(x,m=1.4)=>({c:x,w:m,b:r+.95,t:r+2.15,win:!0}),u=(x,m=1.4)=>({c:x,w:m,b:r,t:r+2.25}),d=n.siding,f=n.inner||I.plaster;Ir(a,t,e,r,o,c,d,f,n.frontOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),Ir(l,t,e,r,o,-c,d,f,n.backOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),Pr(t,i+.11,s-.11,r,o,-1,d,f,n.leftOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),Pr(e,i+.11,s-.11,r,o,1,d,f,n.rightOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),n.partX!==void 0&&Pr(n.partX,n.partZ0,n.partZ1,r,o,1,I.plasterG,f,[u(n.partDoor,1.4)],.14),kM(t,e,i,s,r+o,2,n.roof,d);let p=a+c*.9;z.box(I.concrete,n.doorX,.1,p,2.6,.2,1.6,{surf:"concrete"}),z.box(I.concrete,n.doorX,.05,p+c*1,1.8,.1,.5,{surf:"concrete"}),z.box(n.roof,n.doorX,r+2.55,p,3,.1,1.9,{collide:!1});for(let x of[-1,1]){let m=new F(new Ft(.07,.08,2.45,10),I.trim);m.position.set(n.doorX+x*1.3,.2+1.22,p+c*.75),z.bake(m),z.col(n.doorX+x*1.3-.08,0,p+c*.75-.08,n.doorX+x*1.3+.08,2.7,p+c*.75+.08,{surf:"wood"})}for(let x of[-1,1]){let m=new F(new ge(.14,.24,.14),I.lampGlow);m.position.set(n.doorX+x*.95,r+1.9,a+c*.15),z.bake(m)}z.box(I.brick,n.chimX,r+o+1.75,(i+s)/2+1.2,.8,2.9,.8,{collide:!1,uv:1.2}),z.box(I.concrete,n.chimX,r+o+3.25,(i+s)/2+1.2,.95,.12,.95,{collide:!1});for(let x of[i,s])z.box(I.brick,(t+e)/2,.45,x+(x===i?-.13:.13),e-t+.06,.55,.05,{collide:!1,uv:1.2});for(let x of[t,e])z.box(I.brick,x+(x===t?-.13:.13),.45,(i+s)/2,.05,.55,s-i+.06,{collide:!1,uv:1.2})}function Ip(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.05,o=2.7,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;z.box(I.concrete,(t+e)/2,.025,(i+s)/2,e-t,.05,s-i,{collide:!1,uv:3}),Ir(a,t,e,r,o,c,n.siding,I.plaster,[{c:(t+e)/2,w:e-t-1,b:r,t:r+2.2}]),z.box(I.white,(t+e)/2,r+2.35,a-c*.05,e-t-1,.3,.06,{collide:!1}),Ir(l,t,e,r,o,-c,n.siding,I.plaster,[{c:(t+e)/2,w:1.2,b:r+1.1,t:r+2,win:!0}]);let h=n.outerX;Pr(h,i+.11,s-.11,r,o,h>(t+e)/2?1:-1,n.siding,I.plaster,[{c:(i+s)/2+1.5,w:1.3,b:r,t:r+2.2}]),z.box(n.roof,(t+e)/2,r+o+.1,(i+s)/2,e-t+.6,.2,s-i+.6,{collide:!1,uv:2}),z.box(I.plaster,(t+e)/2,r+o-.03,(i+s)/2,e-t,.06,s-i,{collide:!1,uv:3}),z.col(t,r+o-.05,i,e,r+o+.2,s);let u=l-c*-.5,d=l+(n.frontNeg?.5:-.5);z.box(I.wood,(t+e)/2,.9,d,2.4,.08,.7,{collide:!1});for(let p of[-1,1])z.box(I.wood,(t+e)/2+p*1.1,.45,d,.08,.86,.6,{collide:!1});z.col((t+e)/2-1.2,0,d-.35,(t+e)/2+1.2,.95,d+.35,{bullet:!1});for(let p=0;p<6;p++)z.box(pn([12595248,3170496,4210752][p%3]),(t+e)/2-.9+p*.35,.98,d,.18,.08,.12,{collide:!1});let f=pn(11569754,{map:j.wood.map});for(let[p,x,m]of[[.9,1.5,.6],[.9,2.2,.5],[.95,1.8,.45]]){let g=(n.frontNeg,t+p+.2),y=(i+s)/2+(n.frontNeg?-1:1)*(x-2);z.box(f,g,m/2+(x===1.8?.6:.05),y,m,m,m,{surf:"wood"})}}function Xp(n,t,e,i,s=.38,r=.26){let o=new F(new Xe(s-.1,.11,10,20),I.tire);o.position.set(t,e,i),n.add(o);let a=new F(new Ft(s-.13,s-.13,r*.8,16),I.chrome);a.rotation.x=Math.PI/2,a.position.set(t,e,i),n.add(a);let l=new F(new Ft(.08,.08,r+.02,8),I.black);l.rotation.x=Math.PI/2,l.position.set(t,e,i),n.add(l)}function zM(n,t,e){let i=new Ut,s=(h,u,d,f,p)=>{let x=new F(h,u);return x.position.set(d,f,p),i.add(x),x},r=9.6,o=2.5,a=2.6;s(wt(r,a-.6,o,1.5),I.busYellow,0,.6+(a-.6)/2,0),s(wt(r-.1,.25,o-.1,1),I.busYellow,0,a+.12,0);for(let h of[-1,1]){s(wt(r-2.2,.75,.02),I.glass,-.5,2,h*(o/2+.005));for(let u=0;u<9;u++)s(wt(.08,.8,.04),I.busYellow,-4.1+u*.95,2,h*(o/2+.01));s(wt(r,.06,.04),I.black,0,1.45,h*(o/2+.02)),s(wt(r,.06,.04),I.black,0,1.15,h*(o/2+.02))}s(wt(.04,1,o-.3),I.glass,r/2+.01,2,0),s(wt(.04,.8,o-.3),I.glass,-r/2-.01,2,0),s(wt(.25,.3,o+.1),I.black,r/2+.1,.65,0),s(wt(.25,.3,o+.1),I.black,-r/2-.1,.65,0);for(let h of[-1,1])s(new Ft(.12,.12,.05,12),I.lampGlow,r/2+.03,1,h*.9).rotation.z=Math.PI/2,s(new Ft(.1,.1,.05,12),I.redPaint,-r/2-.03,1,h*.9).rotation.z=Math.PI/2;s(wt(.6,.4,.04),I.black,r/2-.1,2.75,.8),s(wt(1.6,.25,.03),I.black,1,1.3,o/2+.03);for(let h of[-3,3.2])for(let u of[-1,1])Xp(i,h,.48,u*(o/2-.12),.48,.3);s(wt(r-.4,.3,o-.3),I.black,0,.45,0),i.position.set(n,0,t),i.rotation.y=e,z.bake(i);let l=Math.abs(Math.cos(e))>.5?r/2:o/2,c=Math.abs(Math.cos(e))>.5?o/2:r/2;z.col(n-l,.3,t-c,n+l,a+.25,t+c,{surf:"metal"}),z.col(n-l+.3,0,t-c+.3,n+l-.3,.3,t+c-.3,{surf:"metal",bullet:!1})}function Tu(n,t,e,i,s=!1){let r=new Ut,o=(T,A,_,v,R)=>{let w=new F(T,A);return w.position.set(_,v,R),r.add(w),w},a=s?5.2:4.5,l=1.9;o(wt(a,.62,l,1),i,0,.72,0),o(wt(a-.2,.1,l-.1,1),i,0,1.06,0);let c=s?1.9:2.4,h=s?.6:-.1,u=new ci;u.moveTo(-c/2-.35,0),u.lineTo(c/2+.45,0),u.lineTo(c/2-.05,.6),u.lineTo(-c/2+.05,.6),u.closePath();let d=new Li(u,{depth:l-.2,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});d.translate(0,0,-(l-.2)/2),o(d,I.glass,h,1.1,0);let f=o(wt(c-.1,.06,l-.16,1),i,h,1.73,0);for(let T of[-1,1])o(wt(.08,.6,.08),i,h+c/2-.2,1.4,T*(l/2-.12)).rotation.z=.5,o(wt(.08,.6,.08),i,h,1.4,T*(l/2-.12));s&&(o(wt(2,.5,.08),i,-1.5,1.3,l/2-.04),o(wt(2,.5,.08),i,-1.5,1.3,-l/2+.04),o(wt(.08,.5,l),i,-a/2+.04,1.3,0),o(wt(1.9,.05,l-.15),I.rust,-1.5,1.08,0)),o(wt(.15,.22,l+.04),I.chrome,a/2+.05,.55,0),o(wt(.15,.22,l+.04),I.chrome,-a/2-.05,.55,0);for(let T of[-1,1])o(wt(.04,.14,.32),I.lampGlow,a/2+.01,.85,T*.66),o(wt(.04,.14,.28),I.redPaint,-a/2-.01,.85,T*.68);o(wt(.03,.2,.7),I.black,a/2+.01,.78,0);for(let T of[-1,1])o(wt(.12,.08,.18),i,h+c/2+.2,1.2,T*(l/2+.08));for(let T of[-1,1])o(wt(.02,.4,.01),I.black,h,.75,T*(l/2+.006)),o(wt(.18,.03,.02),I.chrome,h+.3,.92,T*(l/2+.01)),o(wt(.18,.03,.02),I.chrome,h-.7,.92,T*(l/2+.01));o(wt(a-1.2,.25,l-.1),I.black,0,.32,0);for(let T of[a/2-.85,-a/2+.85])for(let A of[-1,1])Xp(r,T,.38,A*(l/2-.05));r.position.set(n,0,t),r.rotation.y=e,z.bake(r);let p=Math.abs(Math.cos(e))>.5,x=p?a/2:l/2,m=p?l/2:a/2;z.col(n-x,.25,t-m,n+x,1.08,t+m,{surf:"metal"});let g=n+(p?h*Math.cos(e):0),y=t+(p?0:-h*Math.sin(e)),S=p?c/2+.2:l/2-.1,M=p?l/2-.1:c/2+.2;z.col(g-S,1.08,y-M,g+S,1.75,y+M,{surf:"metal"})}function Fi(n,t,e=1,i=1){Tr(i*77+3);let s=new Ut,r=3.2*e,o=new Ft(.16*e,.28*e,r,12,4);Ar(o,2,2);let a=new F(o,I.bark);a.position.y=r/2,s.add(a);for(let c=0;c<5;c++){let h=new F(new Gn(.12*e,.6*e,6),I.bark),u=c/5*Math.PI*2;h.position.set(Math.cos(u)*.2*e,.15,Math.sin(u)*.2*e),h.rotation.set(Math.sin(u)*1.2,0,-Math.cos(u)*1.2),s.add(h)}for(let c=0;c<4;c++){let h=new F(new Ft(.04*e,.09*e,1.6*e,6),I.bark),u=c/4*Math.PI*2+.4;h.position.set(Math.cos(u)*.45*e,r*.75,Math.sin(u)*.45*e),h.rotation.set(Math.sin(u)*.9,0,-Math.cos(u)*.9),s.add(h)}let l=pe(i+500,2,3);for(let c=0;c<13;c++){let h=(.75+Ae()*.6)*e,u=new Vn(h,3),d=u.attributes.position,f=u.attributes.normal;for(let g=0;g<d.count;g++){let y=d.getX(g),S=d.getY(g),M=d.getZ(g),T=1+(l((y/h+1)*.5,(M/h+S/h+2)*.25)-.5)*.55;d.setXYZ(g,y*T,S*T*.85,M*T)}u.computeVertexNormals();for(let g=0;g<d.count;g++){let y=new D(d.getX(g),d.getY(g)/.85,d.getZ(g)).normalize(),S=new D(f.getX(g),f.getY(g),f.getZ(g));y.lerp(S,.35).normalize(),f.setXYZ(g,y.x,y.y,y.z)}Ar(u,3,3);let p=new F(u,I.leaf),x=Ae()*Math.PI*2,m=c===0?0:(.8+Ae()*.6)*e;p.position.set(Math.cos(x)*m,r+(Ae()*1.4-.2)*e,Math.sin(x)*m),s.add(p)}s.position.set(n,0,t),z.bake(s),z.col(n-.25*e,0,t-.25*e,n+.25*e,r,t+.25*e,{surf:"wood"})}function Sc(n,t,e,i,s=1,r=[]){let o=Math.hypot(e-n,i-t),a=(e-n)/o,l=(i-t)/o,c=Math.abs(a)>.5,h=new ge(.09,s,.025),u=new Gn(.065,.12,4),d=p=>r.some(x=>p>x[0]&&p<x[1]);for(let p=.1;p<o;p+=.16){if(d(p))continue;let x=new Qt().makeRotationY(c?0:Math.PI/2);x.setPosition(n+a*p,s/2,t+l*p),z.addGeo(I.paintwood,h,x);let m=new Qt().makeRotationY(Math.PI/4+(c?0:Math.PI/2));m.setPosition(n+a*p,s+.06,t+l*p),z.addGeo(I.paintwood,u,m)}let f=[[0,o]];for(let p of r)f=f.flatMap(([x,m])=>p[1]<=x||p[0]>=m?[[x,m]]:[[x,p[0]],[p[1],m]].filter(([g,y])=>y-g>.05));for(let[p,x]of f){for(let M of[s*.25,s*.75]){let T=n+a*(p+x)/2,A=t+l*(p+x)/2;z.box(I.paintwood,T,M,A+(c?-.025:0),c?x-p:.04,.08,c?.04:x-p,{collide:!1})}let m=n+a*p,g=t+l*p,y=n+a*x,S=t+l*x;z.col(Math.min(m,y)-(c?0:.06),0,Math.min(g,S)-(c?.06:0),Math.max(m,y)+(c?0:.06),s,Math.max(g,S)+(c?.06:0),{bullet:!1,surf:"wood"});for(let M=p;M<=x;M+=2.4)z.box(I.paintwood,n+a*M,s/2+.05,t+l*M,.12,s+.1,.12,{collide:!1})}}function Oi(n,t,e,i,s=2.6){let r=(n+e)/2,o=(t+i)/2,a=Math.abs(e-n),l=Math.abs(i-t),c=new ge(a,s,l,Math.max(2,Math.round(a*2)),6,Math.max(2,Math.round(l*2))),h=c.attributes.position,u=pe(Math.round(r*7+o*13)+900,4,3);for(let p=0;p<h.count;p++){let x=h.getX(p),m=h.getY(p),g=h.getZ(p),y=(u((x+r)*.05+.5,(m+g+o)*.05+.5)-.5)*.5;h.setXYZ(p,x+Math.sign(x)*y*(Math.abs(x)>a/2-.01?1:0),m+(m>s/2-.01?y:0),g+Math.sign(g)*y*(Math.abs(g)>l/2-.01?1:0))}c.computeVertexNormals();let d=wt(a,s,l,1.5,[r,0,o]);c.setAttribute("uv",new nn(new Float32Array(h.count*2),2));let f=c.attributes.uv;for(let p=0;p<h.count;p++)f.setXY(p,(h.getX(p)+r+h.getZ(p)+o)/1.5,h.getY(p)/1.5);z.addGeo(I.hedge,c,new Qt().setPosition(r,s/2,o)),z.col(r-a/2,0,o-l/2,r+a/2,s,o+l/2,{surf:"grass"})}function On(n,t,e,i=1,s=0){let r=new Ut,o=(l,c,h,u,d)=>{let f=new F(l,c);return f.position.set(h,u,d),r.add(f),f};o(wt(i-.04,i-.04,i-.04,i),I.wood,0,i/2,0);let a=.07*i;for(let l of[-1,1])for(let c of[-1,1])o(wt(a,i,a,1),I.wood,l*(i/2-a/2),i/2,c*(i/2-a/2));for(let l of[0,1])for(let c of[-1,1])o(wt(a,a,i,1),I.wood,c*(i/2-a/2),l*(i-a)+a/2,0),o(wt(i,a,a,1),I.wood,0,l*(i-a)+a/2,c*(i/2-a/2));for(let l of[-1,1]){let c=o(wt(i*1.3,a*.8,a*.5,1),I.wood,0,i/2,l*(i/2+.005));c.rotation.z=Math.PI/4}r.position.set(n,t,e),r.rotation.y=s,z.bake(r),z.col(n-i/2,t,e-i/2,n+i/2,t+i,e+i/2,{surf:"wood"})}function Au(n,t,e){z.box(I.wood,n,.2,t,1,.4,.7,{surf:"wood"});let s=pn(e===0?15231514:e===1?13642266:12095584,{roughness:.5});for(let r=0;r<12;r++){let o=new F(new ye(.1,10,8),s);o.position.set(n-.4+r%4*.26,.45,t-.2+Math.floor(r/4)*.2),o.scale.y=.85,z.bake(o)}}function Lp(n,t,e){let i=new Ut,s=new F(wt(.1,1.1,.1,1),I.wood);s.position.y=.55,i.add(s);let r=new F(new Ii(.15,.35,4,12),I.steel);r.rotation.z=Math.PI/2,r.position.y=1.15,i.add(r);let o=new F(wt(.03,.2,.06,1),I.redPaint);o.position.set(.05,1.3,.17),i.add(o),i.position.set(n,0,t),i.rotation.y=e,z.bake(i),z.col(n-.08,0,t-.08,n+.08,1,t+.08,{bullet:!1})}function Dp(n,t){let e=new Ut,i=new F(new Ft(.14,.17,.6,14),I.redPaint);i.position.y=.3,e.add(i);let s=new F(new ye(.15,14,8,0,Math.PI*2,0,Math.PI/2),I.redPaint);s.position.y=.6,e.add(s);for(let o of[-1,1]){let a=new F(new Ft(.06,.06,.12,10),I.redPaint);a.rotation.z=Math.PI/2,a.position.set(o*.18,.42,0),e.add(a)}let r=new F(new Ft(.03,.05,.08,6),I.chrome);r.position.y=.76,e.add(r),e.position.set(n,.15,t),z.bake(e),z.col(n-.17,0,t-.17,n+.17,.9,t+.17,{bullet:!1})}function Cr(n,t,e){let i=new Ut,s=new F(new Ft(.32,.27,.95,16,3),pn(e,{map:j.metal.map,normalMap:j.metal.normalMap,metalness:.2,roughness:.6}));s.position.y=.48,i.add(s);let r=new F(new Ft(.35,.34,.08,16),pn(e));r.position.y=1,i.add(r);for(let o=0;o<3;o++){let a=new F(new Xe(.3-o*.015,.012,6,24),pn(e));a.rotation.x=Math.PI/2,a.position.y=.25+o*.3,i.add(a)}i.position.set(n,0,t),z.bake(i),z.col(n-.33,0,t-.33,n+.33,1.04,t+.33,{surf:"metal"})}function bc(n,t,e){let i=new Ut,s=new F(new Ft(.06,.1,5.2,10),I.darkTrim);s.position.y=2.6,i.add(s);let r=new F(new Ft(.04,.04,1.4,8),I.darkTrim);r.rotation.x=Math.PI/2,r.position.set(0,5.1,e*.7),i.add(r);let o=new F(new Ft(.12,.3,.25,12),I.darkTrim);o.position.set(0,5.05,e*1.35),i.add(o);let a=new F(new Ft(.22,.22,.04,12),I.lampGlow);a.position.set(0,4.92,e*1.35),i.add(a);let l=new F(new Ft(.18,.22,.4,10),I.darkTrim);l.position.y=.2,i.add(l),i.position.set(n,.15,t),z.bake(i),z.col(n-.12,0,t-.12,n+.12,5.3,t+.12,{surf:"metal"})}function Ru(n,t,e,i){z.box(I.wood,n,.25,t,e,.5,i,{surf:"wood"}),z.box(I.dirt,n,.51,t,e-.16,.04,i-.16,{collide:!1});for(let s=0;s<Math.floor(e*i*3);s++){let r=n-e/2+.25+Ae()*(e-.5),o=t-i/2+.25+Ae()*(i-.5);for(let a=0;a<5;a++){let l=new F(new Gn(.05,.4,4),I.leaf);l.position.set(r,.7,o),l.rotation.set((Ae()-.5)*1.2,Ae()*3,(Ae()-.5)*1.2),z.bake(l)}}}function Yo(n,t,e){let i=new F(new Ft(.65,.65,1.2,20,2),I.hay);i.rotation.set(0,e,Math.PI/2),i.position.set(n,.65,t),z.bake(i);let s=Math.abs(Math.cos(e))>.5;z.col(n-(s?.6:.65),0,t-(s?.65:.6),n+(s?.6:.65),1.3,t+(s?.65:.6),{surf:"grass"})}function Np(n,t){Ir(t-3.2/2,n-4/2,n+4/2,.05,2.4,-1,I.wood,I.wood,[],.12),Ir(t+3.2/2,n-4/2,n+4/2,.05,2.4,1,I.wood,I.wood,[{c:n+.6,w:1.4,b:.05,t:2.1}],.12),Pr(n-4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,-1,I.wood,I.wood,[{c:t,w:.9,b:1.1,t:1.8,win:!0}],.12),Pr(n+4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,1,I.wood,I.wood,[{c:t-.3,w:1.2,b:.05,t:2.1}],.12),z.box(I.roof2,n,2.4+.15,t,4+.6,.12,3.2+.6,{rotX:.06,collide:!1}),z.box(I.wood,n,.03,t,4,.06,3.2,{collide:!1}),z.col(n-4/2,2.4,t-3.2/2,n+4/2,2.4+.3,t+3.2/2),z.box(I.wood,n-1.4,.8,t-1.2,1,.05,.5,{collide:!1}),z.col(n-1.9,0,t-1.5,n-.9,1.6,t-.95);for(let r=0;r<3;r++)z.box(pn(9071162),n-1.7+r*.3,1,t-1.2,.2,.35,.2,{collide:!1})}function GM(n,t){let r=(o,a)=>z.box(I.white,o,1.25,a,.08,2.5,.08,{surf:"metal"});for(let o of[-1,0,1])for(let a of[-1,1])r(n+o*5/2,t+a*3.6/2);for(let o of[-1,1])z.box(I.white,n,2.5,t+o*3.6/2,5,.08,.08,{collide:!1});for(let o of[-1,0,1])z.box(I.white,n+o*5/2,2.5,t,.08,.08,3.6,{collide:!1});for(let o of[-1,1])z.box(I.glass,n,2.5+.45,t+o*3.6/4,5,.03,3.6/2+.1,{rotX:o*.45,collide:!1});z.box(I.white,n,2.5+.9,t,5,.06,.06,{collide:!1}),z.box(I.wood,n,.45,t-3.6/2+.4,5-.4,.06,.7,{collide:!1}),z.col(n-5/2+.2,0,t-3.6/2+.05,n+5/2-.2,.9,t-3.6/2+.75,{bullet:!1});for(let o=0;o<6;o++){let a=new F(new Ft(.12,.09,.2,12),pn(11558970));a.position.set(n-2+o*.8,.58,t-3.6/2+.4),z.bake(a);let l=new F(new Vn(.16,1),I.leaf);l.position.set(n-2+o*.8,.78,t-3.6/2+.4),z.bake(l)}}function Up(n,t){let e=new Ut,i=new F(new ye(.35,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),I.black);i.position.y=.85,e.add(i);let s=new F(new ye(.35,16,10,0,Math.PI*2,0,Math.PI/2),I.black);s.position.y=.87,e.add(s);for(let r=0;r<3;r++){let o=new F(new Ft(.02,.02,.85,6),I.steel),a=r/3*Math.PI*2;o.position.set(Math.cos(a)*.2,.4,Math.sin(a)*.2),o.rotation.set(Math.sin(a)*.3,0,-Math.cos(a)*.3),e.add(o)}e.position.set(n,0,t),z.bake(e),z.col(n-.35,0,t-.35,n+.35,1.2,t+.35,{bullet:!1,surf:"metal"})}function Fp(n,t){let e=new Ut,i=new F(new Ft(.6,.6,.05,20),I.white);i.position.y=.72,e.add(i);let s=new F(new Ft(.04,.04,2.3,8),I.steel);s.position.y=1.15,e.add(s);let r=new F(new Gn(1.4,.5,8,1,!0),pn(13647936,{side:fn}));r.position.y=2.2,e.add(r),e.position.set(n,0,t),z.bake(e),z.col(n-.6,0,t-.6,n+.6,.75,t+.6,{bullet:!1});for(let o=0;o<3;o++){let a=o/3*Math.PI*2;VM(n+Math.cos(a)*1,t+Math.sin(a)*1,-a-Math.PI/2)}}function VM(n,t,e){let i=new Ut,s=new F(wt(.45,.04,.45,1),I.white);s.position.y=.45,i.add(s);let r=new F(wt(.45,.45,.04,1),I.white);r.position.set(0,.7,-.21),i.add(r);for(let o of[-1,1])for(let a of[-1,1]){let l=new F(wt(.03,.45,.03,1),I.white);l.position.set(o*.2,.22,a*.2),i.add(l)}i.position.set(n,0,t),i.rotation.y=e,z.bake(i)}function Zo(n,t,e){let i=new ci;i.moveTo(-.3,0),i.lineTo(.3,0),i.lineTo(.12,.3),i.lineTo(.08,.85),i.lineTo(-.08,.85),i.lineTo(-.12,.3),i.closePath();let s=new Li(i,{depth:2.4,bevelEnabled:!1});s.translate(0,0,-1.2),Ar(s,.7,.7);let r=new Qt().makeRotationY(e);r.setPosition(n,0,t),z.addGeo(I.concrete,s,r);let o=Math.abs(Math.cos(e))>.5;z.col(n-(o?.3:1.2),0,t-(o?1.2:.3),n+(o?.3:1.2),.85,t+(o?1.2:.3))}function Op(n,t,e){let i=Ds(t,{w:256,h:256,size:200,color:"rgba(255,255,255,0.9)",stroke:"rgba(0,0,0,0.35)",strokeW:8,draw:h=>{h.strokeStyle="rgba(255,220,60,0.9)",h.lineWidth=14,h.beginPath(),h.arc(128,128,116,0,7),h.stroke()}}),s=new F(new xn(3.4,3.4),new Qn({map:i,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));s.rotation.x=-Math.PI/2,s.position.set(e.x,.06,e.z),s.renderOrder=2,n.add(s);let r=new Ut,o=new F(wt(1.3,.7,.9,1),I.greenPaint);o.position.y=.35,r.add(o);for(let h=0;h<4;h++){let u=new F(wt(.04,.72,.92,1),I.darkTrim);u.position.set(-.5+h*.33,.35,0),r.add(u)}let a=new F(wt(1.35,.06,.95,1),I.darkTrim);a.position.y=.72,r.add(a);let l=new F(new xn(.5,.5),new ae({map:Ds(t,{w:128,h:128,size:100,bg:"#f0c020",color:"#111"}),roughness:.6}));l.position.set(0,.38,.46),r.add(l);let c=l.clone();c.position.z=-.46,c.rotation.y=Math.PI,r.add(c),r.position.set(e.x,0,e.z),z.bake(r),z.col(e.x-.65,0,e.z-.45,e.x+.65,.75,e.z+.45,{surf:"metal"})}function WM(n,t){let e=new Ut,i=new F(new Ft(.12,.16,8.5,10),I.bark);i.position.y=4.25,e.add(i);let s=new F(wt(.12,.12,2,1),I.wood);s.position.y=7.8,e.add(s);for(let o of[-.85,0,.85]){let a=new F(new Ft(.04,.05,.14,8),I.white);a.position.set(0,7.93,o),e.add(a)}let r=new F(new Ft(.25,.25,.7,12),I.metal);r.position.set(.3,6.6,0),e.add(r),e.position.set(n,0,t),z.bake(e),z.col(n-.16,0,t-.16,n+.16,8.5,t+.16,{surf:"wood"})}function Cu(n,t,e,i){let s=[];for(let o=0;o<=24;o++){let a=o/24;s.push(new D(n+(t-n)*a,e-Math.sin(a*Math.PI)*.6,i))}let r=new Ao(new fr(s),24,.012,4,!1);z.addGeo(I.black,r,new Qt)}function Bp(n,t,e){let i=new Ut,s=new F(wt(1.2,.8,.05,1),I.white);s.position.set(0,3.2,0),i.add(s);let r=new F(wt(.45,.35,.06,1),I.redPaint);r.position.set(0,3.05,.005),i.add(r);let o=new F(wt(.37,.27,.07,1),I.white);o.position.set(0,3.05,.006),i.add(o);let a=new F(new Xe(.23,.012,6,20),I.redPaint);a.rotation.x=Math.PI/2,a.position.set(0,2.9,.28),i.add(a);let l=new F(new Ft(.23,.15,.4,12,1,!0),pn(16777215,{wireframe:!0}));l.position.set(0,2.7,.28),i.add(l),i.position.set(n,0,t),i.rotation.y=e,z.bake(i)}function XM(n,t){let e=new Ut;for(let s of[-1.4,1.4])for(let r of[-.6,.6]){let o=new F(new Ft(.04,.04,2.5,8),I.redPaint);o.position.set(s,1.2,r*.5),o.rotation.x=r*.45,e.add(o)}let i=new F(new Ft(.05,.05,3,8),I.redPaint);i.rotation.z=Math.PI/2,i.position.y=2.35,e.add(i);for(let s of[-.6,.6]){for(let o of[-.18,.18]){let a=new F(new Ft(.008,.008,1.8,4),I.steel);a.position.set(s+o,1.45,0),e.add(a)}let r=new F(wt(.45,.04,.2,1),I.black);r.position.set(s,.55,0),e.add(r)}e.position.set(n,0,t),z.bake(e);for(let s of[-1.4,1.4])z.col(n+s-.1,0,t-.6,n+s+.1,2.4,t+.6,{bullet:!1,surf:"metal"})}function qM(n,t){let e=new Ut,i=new F(new Ft(1.6,1.6,.04,28),I.black);i.position.y=.85,e.add(i);let s=new F(new Xe(1.65,.1,6,28),pn(2783968));s.rotation.x=Math.PI/2,s.position.y=.88,e.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new F(new Ft(.03,.03,.88,6),I.steel);a.position.set(Math.cos(o)*1.6,.44,Math.sin(o)*1.6),e.add(a)}e.position.set(n,0,t),z.bake(e),z.col(n-1.4,0,t-1.4,n+1.4,.9,t+1.4,{bullet:!1,surf:"carpet"})}function Ec(n,t,e,i){let s=new Ut,r=new F(wt(1.3,2.2,.05,1),I.paintwood);r.position.set(.65,1.1,0),s.add(r);for(let[a,l]of[[.35,1.55],[.95,1.55],[.35,.6],[.95,.6]]){let c=new F(wt(.4,.6,.07,1),I.paintwood);c.position.set(a,l,0),s.add(c)}let o=new F(new ye(.04,8,6),I.chrome);o.position.set(1.15,1,.05),s.add(o),s.position.set(n,.18,t),s.rotation.y=e+i,z.bake(s)}function Hp(n,t,e){let i=new F(wt(1,.02,.6,1),pn(9071162,{map:j.carpet.map}));i.position.set(n,.21,t),z.bake(i);for(let s of[-1,1]){let r=new F(new Ft(.2,.15,.35,14),pn(11558970));r.position.set(n+s*1,.38,t+e*.2),z.bake(r);let o=new F(new Vn(.28,2),I.leaf);o.position.set(n+s*1,.75,t+e*.2),z.bake(o)}}function kp(n,t){z.box(I.metal,n,.4,t,.8,.8,.8,{surf:"metal",bullet:!0});let e=new F(new Ft(.3,.3,.02,16),I.black);e.position.set(n,.81,t),z.bake(e);for(let i=0;i<7;i++)z.box(I.darkTrim,n-.41,.15+i*.1,t,.01,.03,.7,{collide:!1})}function zp(n,t,e){let i=new Ut;for(let l of[-.5,.5]){let c=new F(new Xe(.3,.025,6,20),I.tire);c.position.set(l,.32,0),i.add(c)}let s=new F(new Ft(.02,.02,.9,6),I.carBlue);s.rotation.z=Math.PI/2,s.position.set(0,.6,0),i.add(s);let r=new F(new Ft(.02,.02,.6,6),I.carBlue);r.rotation.z=.8,r.position.set(-.2,.45,0),i.add(r);let o=new F(wt(.22,.05,.1,1),I.black);o.position.set(-.25,.8,0),i.add(o);let a=new F(new Ft(.015,.015,.5,6),I.chrome);a.rotation.x=Math.PI/2,a.position.set(.45,.85,0),i.add(a),i.position.set(n,0,t),i.rotation.set(0,e,.25),z.bake(i)}function Gp(n,t){let e=new F(new Xe(.22,.06,8,20),pn(2787882));e.position.set(n,.35,t),z.bake(e);let i=new F(wt(.4,.5,.05,1),I.darkTrim);i.position.set(n,.25,t-.08),z.bake(i)}function YM(){for(let e of[-24,-6,12,28])WM(e,-6.3);for(let[e,i]of[[-24,-6],[-6,12],[12,28]])for(let s of[-.85,0,.85])Cu(e,i,7.93,-6.3+s);Cu(-40,-24,7.93,-6.3),Cu(28,44,7.93,-6.3),Bp(8,-9.85,0),Bp(-8,9.85,Math.PI),XM(14,23),qM(-14,-22.5),Ec(-1.7,-9.5,0,-1.2),Ec(1.7,9.5,Math.PI,-1.2),Ec(1.3,-17.5,Math.PI,1.1),Ec(-1.3,17.5,0,1.1),Hp(-1,-8.3,1),Hp(1,8.3,-1),kp(6,-18.4),kp(-6,18.4),zp(-11.5,-7.8,.3),zp(11.2,7.8,2.6),Gp(-6.5,-18.2),Gp(6.5,18.2);let n=new F(new Ft(.4,.4,.02,20),I.rust);n.position.set(-6,.012,1.5),z.bake(n);let t=n.clone();t.position.set(18,.012,-1.6),z.bake(t);for(let e of[-18,0,18])for(let i of[-1,1])z.box(I.darkTrim,e,.03,i*3.85,.7,.02,.25,{collide:!1})}function qp(n){OM(),z=new Mc,Tr(42);let t=new xn(220,220,1,1);t.rotateX(-Math.PI/2),Ar(t,220/4,220/4),z.addGeo(I.grass,t,new Qt),z.box(I.asphalt,0,.005,0,120,.01,8,{collide:!1,uv:6});for(let s=-58;s<58;s+=4)z.box(I.lineY,s,.012,0,2.2,.004,.14,{collide:!1});for(let s of[-1,1])z.box(I.lineW,0,.012,s*3.6,120,.004,.12,{collide:!1});for(let s of[-1,1])z.box(I.concrete,0,.075,s*4.85,120,.15,1.7,{uv:2,surf:"concrete",bullet:!1}),z.box(I.concrete,0,.08,s*4.03,120,.16,.12,{collide:!1,uv:1});z.box(I.concrete,8,.02,-7.5,5.2,.04,4.4,{collide:!1,uv:2}),z.box(I.concrete,-8,.02,7.5,5.2,.04,4.4,{collide:!1,uv:2}),z.box(I.concrete,-1,.02,-7.6,1.6,.04,3.2,{collide:!1,uv:1}),z.box(I.concrete,1,.02,7.6,1.6,.04,3.2,{collide:!1,uv:1}),Pp({x0:-6,x1:5.5,z0:-17.5,z1:-9.5,frontNeg:!0,siding:I.sidingY,roof:I.roof,doorX:-1,chimX:-4.5,frontOps:[{c:-1,d:1},{c:-4,w:1.6},{c:2.6,w:1.8}],backOps:[{c:2,d:1},{c:-3.5,w:1.4},{c:-.2}],leftOps:[{c:-11.5,w:1.4},{c:-15.5,d:1}],rightOps:[{c:-12.5,d:1,w:1.4}],partX:.5,partZ0:-17.4,partZ1:-12.8,partDoor:-14.5}),Ip({x0:5.5,x1:10.5,z0:-17,z1:-9.8,frontNeg:!0,siding:I.sidingY,roof:I.roof2,outerX:10.5}),bp(-3.5,-12,0,I.fabricG),vc(-3.5,-10.9,1.1,.6,.42),Ap(-3.5,-11.6,3.2,2.2,I.carpetR),Tp(-3.5,-9.95,Math.PI),Ep(-5.6,-14,Math.PI/2),Rp(-5.4,-10.2),wu(-.2,1.7,-17.33,0,I.paint1),wp(1,3.8,-17.5,-1),vc(3,-13.8,1.4,.9,.76),qo(2.4,-14.5,0),qo(3.6,-13.1,Math.PI),qo(2.4,-13.1,Math.PI),wu(-5.85,1.7,-12,Math.PI/2,I.paint2),Cp(-3.2,-15.8,Math.PI/2),Pp({x0:-5.5,x1:6,z0:9.5,z1:17.5,frontNeg:!1,siding:I.sidingB,roof:I.roof2,doorX:1,chimX:4.5,frontOps:[{c:1,d:1},{c:4,w:1.6},{c:-2.6,w:1.8}],backOps:[{c:-2,d:1},{c:3.5,w:1.4},{c:.2}],leftOps:[{c:12.5,d:1,w:1.4}],rightOps:[{c:11.5,w:1.4},{c:15.5,d:1}],partX:-.5,partZ0:12.8,partZ1:17.4,partDoor:14.5}),Ip({x0:-10.5,x1:-5.5,z0:9.8,z1:17,frontNeg:!1,siding:I.sidingB,roof:I.roof,outerX:-10.5}),bp(3.5,12,Math.PI,I.fabricO),vc(3.5,10.9,1.1,.6,.42),Ap(3.5,11.6,3.2,2.2,I.carpetB),Tp(3.5,9.95,0),Ep(5.6,14,-Math.PI/2),Rp(5.4,10.2),wu(.2,1.7,17.33,Math.PI,I.paint2),wp(-3.8,-1,17.5,1),vc(-3,13.8,1.4,.9,.76),qo(-2.4,14.5,Math.PI),qo(-3.6,13.1,0),Cp(3.2,15.8,-Math.PI/2),zM(1.5,-1.6,0),Tu(-13.5,2,0,I.carRed),Tu(13,1.8,Math.PI,I.carWhite,!0),Tu(8,-7.6,Math.PI/2,I.carBlue),Zo(-26,-1.5,0),Zo(-26,1.5,0),Zo(26,-1.5,0),Zo(26,1.5,0),Zo(-21,0,Math.PI/2+0),On(20.5,0,-2.2,1.1),On(20.5,0,-1,1.1),On(20.5,1.1,-1.6,1.1,.3),bc(-9,-5.4,1),bc(9,5.4,-1),bc(-22,5.4,-1),bc(22,-5.4,1),Cr(-4.2,-5,2779706),Cr(-3.4,-5,2771594),Cr(4.2,5,2779706),Cr(5,5,5921370),Dp(-11,-4.9),Dp(11,4.9),Lp(-2.5,-6.2,0),Lp(2.5,6.2,Math.PI),Fi(-9,-12.5,1.1,1),Fi(12.5,-19,1,2),Fi(-12.5,19,1,3),Fi(9,12.5,1.1,4),Fi(-27,-8,1.2,5),Fi(27,8,1.2,6),Fi(-27,12,1,7),Fi(27,-21,1,8),Sc(-30,-6.2,-11,-6.2,.9,[[5,6.5]]),Sc(11,6.2,30,6.2,.9,[[12,13.5]]),Np(-24.5,-15.5),Ru(-17,-16.5,3.2,1.2),Ru(-21.5,-9.5,2,1.2),Au(-15.5,-9.2,0),Au(-15.5,-10.2,1),On(-14,0,-13.5,1),On(-14,0,-14.6,1),On(-14,1,-14,.9,.4),Op(n,"A",qn.A),GM(18.5,-18),Yo(15,-11,0),Yo(22,-11.5,Math.PI/2),Yo(15.6,-14.2,Math.PI/2),On(22.5,0,-14.5,1.1),On(22.5,1.1,-14.5,.8,.5),Au(20.5,-9,2),Op(n,"B",qn.B),Up(4,20),Fp(-4.5,20.5),On(-16,0,13,1.1),On(-16,0,14.1,1.1),On(16,0,12.5,1),On(17.1,0,12.5,1),On(16.5,1,12.5,.9),Yo(-20,10,0),Yo(20,17,Math.PI/2),Cr(-11.6,17.5,2771594),Cr(-12.3,17.5,2779706),Ru(14.5,20.5,3,1.2),Np(22.5,20.5),Up(-8.5,-22.5),Fp(8.5,-21.5),Sc(-30,-19.5,30,-19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),Sc(-30,19.5,30,19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),Oi(-33,-28,33,-26.6),Oi(-33,26.6,33,28),Oi(-33,-26.6,-31.6,-5.8),Oi(-33,5.8,-31.6,26.6),Oi(31.6,-26.6,33,-5.8),Oi(31.6,5.8,33,26.6),z.col(-31.6,0,-5.8,-30.5,6,5.8,{bullet:!1}),z.col(30.5,0,-5.8,31.6,6,5.8,{bullet:!1}),Oi(-12.5,9.5,-11.8,15.5,1.6),Oi(11.8,-15.5,12.5,-9.5,1.6),Oi(-30.5,-4,-27.5,-3.5,1.2),YM();let e=new Ut;Tr(9);for(let s=0;s<26;s++){let r=s/26*Math.PI*2,o=55+Ae()*15,a=Math.cos(r)*o,l=Math.sin(r)*o,c=new F(wt(8,5,7,2.5),[I.sidingY,I.sidingB,I.sidingG][s%3]);c.position.set(a,2.5,l),c.rotation.y=-r,e.add(c);let h=new F(new Gn(6.2,2.5,4),I.roof2);h.position.set(a,6.2,l),h.rotation.y=-r+Math.PI/4,e.add(h)}z.bake(e);for(let s=0;s<30;s++){let r=s/30*Math.PI*2+.1;Fi(Math.cos(r)*(42+Ae()*8),Math.sin(r)*(40+Ae()*8),1.2+Ae()*.5,30+s)}z.colliders=z.colliders.filter(s=>s.min.x>-40&&s.max.x<40&&s.min.z>-36&&s.max.z<36),z.col(-40,0,-40,Fe.minX-.6,20,40,{bullet:!1}),z.col(Fe.maxX+.6,0,-40,40,20,40,{bullet:!1}),z.col(-40,0,-40,40,20,Fe.minZ-.6,{bullet:!1}),z.col(-40,0,Fe.maxZ+.6,40,20,40,{bullet:!1});let i=z.finish(n);ZM(n,z.colliders);for(let[s,r]of[[-1.5,-13.5],[1,13.5]]){let o=new ui(16767136,6,9,1.6);o.position.set(s,2.6,r),n.add(o)}return{colliders:z.colliders,meshes:i}}function Yp(n,t,e,i){let s=null,r=-1;for(let o of n)t>=o.min.x&&t<=o.max.x&&i>=o.min.z&&i<=o.max.z&&o.max.y<=e+.05&&o.max.y>r&&(r=o.max.y,s=o);return s?s.surf:Math.abs(i)<4?"concrete":"grass"}var Iu={time:{value:0}};function ZM(n,t){let e=window.__vwQuality??1,i=e===0?3500:e===1?9e3:16e3,s=[],r=[],o=[];Tr(77);for(let v=0;v<7;v++){let R=Ae()*Math.PI,w=.1+Ae()*.16,P=.02,U=(Ae()-.5)*.15,H=(Ae()-.5)*.12,L=(Ae()-.5)*.12,k=Math.cos(R),q=Math.sin(R),G=(rt,At)=>[H+k*rt*P+U*At*k*0,At*w,L+q*rt*P+U*At],lt=[G(-1,0),G(1,0),G(0,1)],Z=-q,st=k;for(let rt of lt){s.push(...rt),r.push(Z*.3,.9,st*.3);let At=rt[1]/w;o.push(.18+At*.32,.34+At*.38,.1+At*.1)}}let a=new We;a.setAttribute("position",new ne(s,3)),a.setAttribute("normal",new ne(r,3)),a.setAttribute("color",new ne(o,3));let l=new ae({vertexColors:!0,roughness:.9,side:fn});l.onBeforeCompile=v=>{v.uniforms.time=Iu.time,v.vertexShader=`uniform float time;
`+v.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.);
      float sway = sin(time*1.7 + wp.x*0.35 + wp.z*0.27) * 0.06 + sin(time*3.1 + wp.x*1.3) * 0.02;
      transformed.x += sway * position.y * 3.0; transformed.z += sway * position.y * 1.5;`)};let c=new ts(a,l,i),h=new Qt,u=new Qe,d=new D,f=new D,p=(v,R)=>{if(Math.abs(R)<5.8)return!0;for(let w of t)if(w.max.y>.12&&v>w.min.x-.1&&v<w.max.x+.1&&R>w.min.z-.1&&R<w.max.z+.1)return!0;return v>5.6&&v<10.6&&R>-9.8&&R<-5.3||v>-10.6&&v<-5.4&&R>5.3&&R<9.8||Math.abs(v+1)<.9&&R>-9.5&&R<-5.8||Math.abs(v-1)<.9&&R<9.5&&R>5.8},x=0,m=0;for(;x<i&&m<i*6;){m++;let v=Fe.minX+.3+Ae()*(Fe.maxX-Fe.minX-.6),R=Fe.minZ+.3+Ae()*(Fe.maxZ-Fe.minZ-.6);if(p(v,R))continue;let w=.7+Ae()*.9;u.setFromAxisAngle(new D(0,1,0),Ae()*6.28),d.set(w,w*(.8+Ae()*.6),w),f.set(v,0,R),h.compose(f,u,d),c.setMatrixAt(x++,h)}c.count=x,c.receiveShadow=!0,c.castShadow=!1,c.frustumCulled=!1,n.add(c);let g=new Vn(.045,0),y=new ae({roughness:.6}),S=220,M=new ts(g,y,S),T=new se,A=[[-5.6,-8.9,4,.5],[.4,-8.9,4.6,.5],[-5,8.9,4.4,.5],[2.4,8.9,3.4,.5]];for(let v=0;v<S;v++){let R=A[v%A.length],w=R[0]+Ae()*R[2],P=R[1]+(Ae()-.5)*R[3];h.compose(new D(w,.22+Ae()*.18,P),u,new D(1,1,1)),M.setMatrixAt(v,h),M.setColorAt(v,T.setHex([15747690,16764992,16777215,10510560,16747050][Math.floor(Ae()*5)]))}n.add(M);let _=new Ut;n.add(_);for(let v of A){let R=new F(new ge(v[2]+.2,.18,v[3]+.2),I.dirt);R.position.set(v[0]+v[2]/2,.09,v[1]),R.receiveShadow=!0,_.add(R);for(let w=0;w<v[2]*6;w++){let P=new F(new Vn(.1,1),I.leaf);P.position.set(v[0]+Ae()*v[2],.22,v[1]+(Ae()-.5)*v[3]),P.scale.y=.7,_.add(P)}}qe(_)}var $o;function Lu(){return $o||($o={stock:new ae({map:j.polymer.map,normalMap:j.polymer.normalMap,color:6975560,roughness:.75}),stockDark:new ae({map:j.polymer.map,normalMap:j.polymer.normalMap,color:2895398,roughness:.8}),metal:new ae({map:j.gunmetal.map,normalMap:j.gunmetal.normalMap,color:3816768,metalness:.85,roughness:.38}),metalDark:new ae({map:j.gunmetal.map,color:1842463,metalness:.8,roughness:.45}),bright:new ae({color:13159632,metalness:1,roughness:.2}),rubber:new ae({color:1315860,roughness:.95}),lens:new hi({color:3170464,metalness:.9,roughness:.02,clearcoat:1,iridescence:1,iridescenceIOR:1.6,emissive:530480}),orange:new ae({color:15759898,roughness:.5}),brass:new ae({color:14198848,metalness:1,roughness:.25})},$o.decal=new ae({map:Ds("VW",{w:128,h:64,size:44,bg:"rgba(0,0,0,0)",color:"#f07a1a",weight:900}),transparent:!0,roughness:.6}),$o)}var Bn=(n,t,e,i,s=16)=>{let r=new Ft(n,t,e,s);return r.rotateX(Math.PI/2),new F(r,i)},Jo=[{id:"olive",name:"\u30AA\u30EA\u30FC\u30D6"},{id:"camoWood",name:"\u30A6\u30C3\u30C9\u30E9\u30F3\u30C9"},{id:"camoDesert",name:"\u30C7\u30B6\u30FC\u30C8"},{id:"camoUrban",name:"\u30A2\u30FC\u30D0\u30F3"},{id:"camoCarrot",name:"\u30AD\u30E3\u30ED\u30C3\u30C8"},{id:"gold",name:"\u30B4\u30FC\u30EB\u30C9"}],wc={};function $M(n){return n==="olive"||!n?Lu().stock:(wc[n]||(wc[n]=n==="gold"?new ae({color:15251520,metalness:1,roughness:.22,map:j.polymer.map,normalMap:j.polymer.normalMap}):new ae({map:j[n].map,normalMap:j.polymer.normalMap,roughness:.7})),wc[n])}function Ko(n=1,t="olive"){let e=Lu(),i=$M(t),s=new Ut,r=($,It,ce,Wt,he=s)=>($.position.set(It,ce,Wt),he.add($),$),o=n>0?18:8,a=[[-.36,-.012],[-.1,-.012],[.16,-.012],[.22,-.022],[.3,.006],[.52,.012],[.555,0],[.565,-.13],[.5,-.142],[.3,-.088],[.235,-.082],[.215,-.175],[.165,-.185],[.145,-.07],[-.3,-.062],[-.36,-.046]],l=new ci;l.moveTo(a[0][0],a[0][1]);for(let $=1;$<a.length;$++)l.lineTo(a[$][0],a[$][1]);l.closePath();let c=new Ss;c.absellipse(.2,-.048,.022,.016,0,Math.PI*2,!1,.4),l.holes.push(c);let h=new Li(l,{depth:.046,bevelEnabled:!0,bevelSize:.008,bevelThickness:.009,bevelSegments:n>0?3:1,curveSegments:n>0?10:4});h.translate(0,0,-.023),h.rotateY(-Math.PI/2);let u=h.attributes.uv;for(let $=0;$<u.count;$++)u.setXY($,u.getX($)*3,u.getY($)*3);r(new F(h,i),0,0,0);let d=new F(new ge(.05,.022,.16),e.stockDark);r(d,0,.022,.42);for(let $ of[.36,.48])r(Bn(.004,.004,.03,e.metal,6),0,.012,$).rotation.set(0,0,0);r(new F(new ge(.058,.142,.022),e.rubber),0,-.066,.575);for(let $=0;$<6;$++)r(new F(new ge(.06,.004,.03),e.stockDark),0,-.09-$*.015,.19-$*.004);for(let $=0;$<4;$++)for(let It of[-1,1])r(new F(new ge(.004,.012,.04),e.stockDark),It*.032,-.035,-.28+$*.055);r(Bn(.024,.024,.28,e.metal,o),0,.012,.02),r(new F(new ge(.04,.012,.28),e.metal),0,.034,.02);for(let $=0;$<12;$++)r(new F(new ge(.044,.006,.012),e.metalDark),0,.043,-.1+$*.022);r(new F(new ge(.004,.018,.06),e.metalDark),.024,.016,-.01);let f=Bn(.0105,.014,.66,e.metal,o);if(r(f,0,.012,-.44),n>0)for(let $=0;$<6;$++){let It=$/6*Math.PI*2,ce=new F(new ge(.003,.003,.36),e.metalDark);ce.position.set(Math.cos(It)*.0125,.012+Math.sin(It)*.0125,-.45),s.add(ce)}let p=new Ut;r(p,0,.012,-.8),p.add(Bn(.017,.017,.07,e.metalDark,o));for(let $ of[-.018,0,.018])for(let It of[-1,1]){let ce=new F(new ge(.005,.02,.008),e.rubber);ce.position.set(It*.016,0,$),p.add(ce)}let x=new ze;x.position.set(0,.012,-.84),s.add(x);let m=new Ut;r(m,0,.086,.03),m.add(Bn(.017,.017,.24,e.metalDark,o));let g=Bn(.03,.019,.07,e.metalDark,o);g.position.z=-.15,m.add(g);let y=Bn(.031,.031,.035,e.metalDark,o);y.position.z=-.2,m.add(y);let S=new F(new li(.027,o),e.lens);S.position.z=-.218,S.rotation.y=Math.PI,m.add(S);let M=Bn(.019,.024,.06,e.metalDark,o);M.position.z=.14,m.add(M);let T=Bn(.025,.025,.04,e.rubber,o);T.position.z=.185,m.add(T);let A=new F(new li(.02,o),e.lens);A.position.z=.206,m.add(A);let _=new F(new Ft(.012,.012,.03,o),e.metal);_.position.set(0,.026,-.01),m.add(_);let v=new F(new Ft(.012,.012,.03,o),e.metal);v.rotation.z=Math.PI/2,v.position.set(.026,0,-.01),m.add(v);let R=new F(new Ft(.01,.01,.024,o),e.metal);if(R.rotation.z=Math.PI/2,R.position.set(-.024,0,-.01),m.add(R),n>0)for(let $=0;$<12;$++){let It=new F(new ge(.002,.03,.003),e.bright),ce=$/12*Math.PI*2;It.position.set(Math.cos(ce)*.0125,.026,-.01+Math.sin(ce)*.0125),m.add(It)}let w=Bn(.0175,.0175,.006,e.orange,o);w.position.z=.1,m.add(w);for(let $ of[-.07,.08]){let It=new F(new Xe(.019,.005,6,o),e.metal);It.position.z=$,m.add(It);let ce=new F(new ge(.03,.03,.018),e.metal);ce.position.set(0,-.03,$),m.add(ce);let Wt=new F(new Ft(.004,.004,.036,6),e.bright);Wt.rotation.z=Math.PI/2,Wt.position.set(0,-.034,$),m.add(Wt)}let P=new Ut;r(P,0,.012,.12);let U=Bn(.012,.012,.12,e.bright,10);U.position.z=-.03,P.add(U);let H=new Ut;H.position.z=0,P.add(H);let L=new F(new Ft(.0045,.0045,.065,8),e.metal);L.rotation.z=Math.PI/2-.35,L.position.set(.032,-.012,0),H.add(L);let k=new F(new ye(.011,12,10),e.metalDark);k.position.set(.063,-.024,0),H.add(k);let q=Bn(.014,.012,.03,e.metal,10);q.position.z=.04,P.add(q);let G=new ze;G.position.set(.063,-.024,0),H.add(G);let lt=new Ut;r(lt,0,-.04,0);let Z=new F(new ge(.032,.07,.085),e.metalDark);Z.position.y=-.03,Z.rotation.x=-.08,lt.add(Z);let st=new F(new ge(.036,.012,.09),e.stockDark);st.position.y=-.068,lt.add(st);let rt=new F(new Xe(.03,.005,6,16,Math.PI),e.metal);rt.rotation.set(0,Math.PI/2,Math.PI),r(rt,0,-.068,.11);let At=new F(new ge(.006,.026,.006),e.bright);At.rotation.x=.3,r(At,0,-.062,.11);for(let $ of[-1,1]){let It=Bn(.005,.005,.2,e.metalDark,6);r(It,$*.012,-.07,-.2)}if(r(new F(new ge(.04,.015,.03),e.metalDark),0,-.065,-.31),r(new F(new Xe(.008,.002,4,10),e.metal),0,-.14,.48).rotation.y=Math.PI/2,n>0){let $=new F(new xn(.08,.04),e.decal);$.position.set(.0325,-.04,.38),$.rotation.y=Math.PI/2,s.add($)}let qt=new ze;qt.position.set(0,-.11,.19),s.add(qt);let K=new ze;K.position.set(0,-.06,-.2),s.add(K);let vt=new ze;vt.position.set(.03,.02,-.01),s.add(vt);let Dt=new ze;return Dt.position.set(0,.086,.35),s.add(Dt),s.traverse($=>{$.isMesh&&($.castShadow=!0,$.receiveShadow=!0)}),qe(H),qe(P,[H]),qe(lt),qe(p),qe(m,[S]),qe(s,[P,lt,m,p]),{root:s,muzzlePt:x,gripPt:qt,forePt:K,boltPt:G,ejectPt:vt,eyePt:Dt,lens:S,mag:lt,bolt:P,handle:H,setBolt($){let It=$<.2?$/.2:$<.8?1:1-($-.8)/.2,ce=$<.2?0:$<.5?($-.2)/.3:$<.8?1-($-.5)/.3:0;H.rotation.z=It*1.4,P.position.z=.12+ce*.09}}}var Tc;function Zp(){let n=Lu();Tc||(Tc=new Ft(.006,.007,.06,8),Tc.rotateX(Math.PI/2));let t=new F(Tc,n.brass);return t.castShadow=!0,t}var Nr=[{id:"none",name:"\u306A\u3057"},{id:"helmet",name:"\u30D8\u30EB\u30E1\u30C3\u30C8"},{id:"beret",name:"\u30D9\u30EC\u30FC\u5E3D"},{id:"cap",name:"\u30AD\u30E3\u30C3\u30D7"},{id:"boonie",name:"\u30D6\u30FC\u30CB\u30FC\u30CF\u30C3\u30C8"}];var Ac={};function JM(n){if(Ac[n])return Ac[n];let t=j[n],e={carrot:.6,tomato:.18,potato:.9,pepper:.15}[n],i=new hi({map:t.map,normalMap:t.normalMap,roughness:e,clearcoat:n==="tomato"||n==="pepper"?.8:0,clearcoatRoughness:.2,normalScale:new ct(1,1)}),s=new ae({map:j["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4});return Ac[n]={skin:i,flesh:s},Ac[n]}var sn,Lr,Nu,Kp,Qp,jp,Fu,Rc,t0;function e0(){sn||(sn=new hi({map:j.skin.map,normalMap:j.skin.normalMap,roughness:.5,color:15913144,sheen:.4,sheenColor:16751226}),Lr=new ae({map:j.veggreen.map,normalMap:j.veggreen.normalMap,roughness:.6,side:fn}),Nu=new hi({color:16777215,roughness:.08,clearcoat:1}),Kp=new hi({color:1118481,roughness:.05,clearcoat:1}),Qp=new ae({color:2759184,roughness:.9}),jp=new ae({color:3803656,roughness:.6}),Fu=new ae({map:j.polymer.map,normalMap:j.polymer.normalMap,color:5922880,roughness:.85}),Rc=new ae({color:2763298,roughness:.8}),t0=new ae({color:15782080,roughness:.3}))}function KM(n){let t=pe(n.length*31+7,4,3),e,i;if(n==="carrot"){let d=[];for(let p=0;p<=40;p++){let x=p/40,m=-.14+x*1.05,g=.03+Math.pow(x,.55)*.2;x>.88&&(g*=Math.sqrt(Math.max(0,1-Math.pow((x-.88)/.12,2)))*.92+.08),x===1&&(g=0),x===0&&(g=0),d.push(new ct(g,m))}e=new Es(d,40),i=.55}else if(n==="tomato"){e=new ye(.42,48,32);let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),x=d.getY(f),m=d.getZ(f),g=Math.atan2(m,p),y=x/.42,S=1+Math.cos(g*6)*.035*(1-Math.abs(y)),M=x>0?.82:.9,T=x>.3?-.06*Math.pow((x-.3)/.12,2):0;p*=S,m*=S,x=x*M+T,d.setXYZ(f,p,x+.36,m)}i=.42}else if(n==="potato"){e=new ye(.34,48,32);let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),x=d.getY(f),m=d.getZ(f),g=1+(t((Math.atan2(m,p)/Math.PI+1)*.5,(x/.34+1)*.5)-.5)*.32;d.setXYZ(f,p*g*1.05,x*1.38*g+.42,m*g*.92)}i=.6}else{let d=[];for(let p=0;p<=36;p++){let x=p/36,m=-.02+x*.82,g=.06+Math.sin(Math.min(1,x*1.25)*Math.PI*.5)*.3;x>.85&&(g*=Math.sqrt(Math.max(0,1-Math.pow((x-.85)/.15,2)))*.6+.4),x===1&&(g=.12),x===0&&(g=0),d.push(new ct(g,m))}d.push(new ct(0,.76)),e=new Es(d,48);let f=e.attributes.position;for(let p=0;p<f.count;p++){let x=f.getX(p),m=f.getY(p),g=f.getZ(p),y=Math.atan2(g,x),S=1+Math.cos(y*4)*.09-(m<.1?Math.cos(y*4)*.4*(.1-m):0);f.setXYZ(p,x*S,m,g*S)}i=.52}if(n!=="potato"){let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),x=d.getY(f),m=d.getZ(f),g=1+(t((Math.atan2(m,p)/Math.PI+1)*.5,x*.8+.2)-.5)*.06;d.setXYZ(f,p*g,x,m*g)}}e.computeVertexNormals();let s=e.toNonIndexed(),r=s.attributes.position,o=s.attributes.normal,a=s.attributes.uv,l={p:[],n:[],u:[]},c={p:[],n:[],u:[]};for(let d=0;d<r.count;d+=3){let p=(r.getY(d)+r.getY(d+1)+r.getY(d+2))/3>i?l:c;for(let x=0;x<3;x++)p.p.push(r.getX(d+x),r.getY(d+x),r.getZ(d+x)),p.n.push(o.getX(d+x),o.getY(d+x),o.getZ(d+x)),p.u.push(a.getX(d+x),a.getY(d+x))}let h=d=>{let f=new We;return f.setAttribute("position",new ne(d.p,3)),f.setAttribute("normal",new ne(d.n,3)),f.setAttribute("uv",new ne(d.u,2)),f},u=(d,f)=>{let p=0;for(let x=0;x<r.count;x++)if(Math.abs(r.getY(x)-d)<.04){let m=Math.atan2(r.getZ(x),r.getX(x));Math.abs((m-f+Math.PI*3)%(Math.PI*2)-Math.PI)<.25&&(p=Math.max(p,Math.hypot(r.getX(x),r.getZ(x))))}return p};return e.computeBoundingBox(),{upper:h(l),lower:h(c),split:i,radiusAt:u,top:e.boundingBox.max.y,bottom:e.boundingBox.min.y}}var Du={};function Qo(n,t,e){let i=n+JSON.stringify(t);if(!Du[i]){let r=[];for(let l=0;l<=16;l++){let c=l/16,h=0;for(let u=0;u<t.length-1;u++){let[d,f]=t[u],[p,x]=t[u+1];if(c>=d&&c<=p){let m=(c-d)/(p-d),g=m*m*(3-2*m);h=f+(x-f)*g}}r.push(new ct(h,-c*n))}r.unshift(new ct(1e-4,0)),r.push(new ct(1e-4,-n));let a=new Es(r,14);a.computeVertexNormals(),Du[i]=a}let s=new F(Du[i],e);return s.castShadow=!0,s}function jo(n,t,e,i=10){let s=new F(new Ii(n,t,4,i),e);return s.castShadow=!0,s}function n0(n,t){let e=new Ut,i=new F(new ye(.055,12,10),sn);i.scale.set(1,1.2,.55),i.position.y=-.05,i.castShadow=!0,e.add(i);let s=[];if(t>0){for(let a=0;a<4;a++){let l=new Ut;l.position.set((a-1.5)*.024,-.11,0);let c=jo(.011,.035,sn,6);c.position.y=-.02,l.add(c);let h=new Ut;h.position.y=-.045,l.add(h);let u=jo(.01,.028,sn,6);u.position.y=-.018,h.add(u),l.rotation.x=1.45,h.rotation.x=1.6,e.add(l),s.push(l)}let r=new Ut;r.position.set(n*.045,-.06,-.01),r.rotation.set(.9,0,n*.5);let o=jo(.013,.04,sn,6);o.position.y=-.025,r.add(o),e.add(r)}else{let r=new F(new ye(.05,8,6),sn);r.position.set(0,-.11,.02),r.scale.set(1.1,.8,.9),e.add(r)}return e}function QM(){let n=new Ut,t=new F(new ye(.06,14,10),sn);t.scale.set(.95,.55,2),t.position.set(0,-.03,-.06),t.castShadow=!0,n.add(t);let e=new F(new ye(.05,10,8),sn);e.position.set(0,-.035,.02),n.add(e);for(let i=0;i<5;i++){let s=i===0?.019:.014-i*.0012,r=new F(new ye(s,8,6),sn);r.position.set((i-2)*.021,-.045+(i===0?.004:0),-.17+Math.abs(i-1)*.008),r.scale.set(1,.8,1.3),n.add(r);let o=new F(new ye(s*.6,6,4),t0);o.position.set(r.position.x,r.position.y+s*.45,r.position.z-s*.3),o.scale.set(1,.3,1),n.add(o)}return n}var i0=new D,s0=new D,vE=new Qe,r0=new Qt,Cc=new D(0,-1,0);function Pc(n,t,e){if(n.lost)return;let i=n.sh,s=i.parent;s.updateWorldMatrix(!0,!1);let r=r0.copy(s.matrixWorld).invert(),o=i0.copy(t).applyMatrix4(r).sub(i.position),a=s0.copy(e).applyMatrix4(r).sub(i.position),l=n.upLen,c=n.foLen,h=o.length();h=Math.min(h,l+c-.001),h=Math.max(h,.05);let u=o.clone().normalize(),d=(l*l+h*h-c*c)/(2*l*h),f=Math.acos(Math.max(-1,Math.min(1,d))),p=a.clone().sub(u.clone().multiplyScalar(a.dot(u))).normalize(),x=u.clone().multiplyScalar(Math.cos(f)*l).add(p.multiplyScalar(Math.sin(f)*l));i.quaternion.setFromUnitVectors(Cc,x.clone().normalize());let m=o.clone().sub(x).applyQuaternion(i.quaternion.clone().invert());n.el.quaternion.setFromUnitVectors(Cc,m.normalize())}var $p=new Qe,Jp=new Qe,SE=new Qt,Uu={grip:[new D(0,1,0),new D(0,0,1),new D(1,0,0)],fore:[new D(.7071,0,-.7071),new D(.7071,0,.7071),new D(0,-1,0)]},o0={};for(let n in Uu)o0[n]=new Qe().setFromRotationMatrix(new Qt().makeBasis(...Uu[n]));function ta(n,t,e){n.lost||(n.wr.parent.getWorldQuaternion($p),Jp.copy(t).multiply(o0[e]),n.wr.quaternion.copy($p.invert().multiply(Jp)))}function ea(n,t,e,i=1){let[,s,r]=Uu[e],o=s.clone().multiplyScalar(.065).add(r.clone().multiplyScalar(.03)).multiplyScalar(i);return n.clone().add(o.applyQuaternion(t))}function Ou(n,t,e=.29,i=.26){e0();let s=new Ut,r=jo(.05,e-.07,sn);r.position.y=-e/2,s.add(r);let o=new Ut;o.position.y=-e,s.add(o);let a=new F(new ye(.048,10,8),sn);o.add(a);let l=Qo(i,[[0,.046],[.2,.056],[.6,.045],[1,.036]],sn);o.add(l);let c=new Ut;c.position.y=-i,o.add(c);let h=n0(n,1);c.add(h);let u=new F(new Ft(.058,.058,.05,14),new ae({color:t,roughness:.7,map:j.carpet.map}));u.position.y=-.16,o.add(u);let d=new F(new ye(.058,12,10),Fu);return d.scale.set(1.02,1,.6),d.position.y=-.045,h.add(d),{side:n,sh:s,el:o,wr:c,hand:h,up:r,elb:a,upLen:e,foLen:i,lost:!1}}var Dr=class{constructor(t,e,i={}){e0(),this.kind=t,this.team=e;let s=i.lod??1,r=i.camo||"olive",o=i.hat||"none",a=JM(t);this.root=new Ut,this.hips=new Ut,this.hips.position.y=.8,this.root.add(this.hips),this.spine=new Ut,this.hips.add(this.spine);let l=KM(t);this.geo=l,this.upper=new F(l.upper,a.skin),this.lower=new F(l.lower,a.skin);for(let R of[this.upper,this.lower])R.castShadow=!0,R.receiveShadow=!0,this.spine.add(R);this.bodyTop=l.top,this.split=l.split;let c=Math.max(.1,l.radiusAt(l.split,-Math.PI/2),l.radiusAt(l.split,0));this.cap=new F(new li(c*.98,24),a.flesh),this.cap.rotation.x=-Math.PI/2,this.cap.position.y=l.split,this.cap.visible=!1,this.spine.add(this.cap),this.splitR=c,this.face=new Ut,this.upper.add(this.face);let h={carrot:.68,tomato:.48,potato:.72,pepper:.6}[t],u=l.radiusAt(h,-Math.PI/2)||.25;this.eyes=[];for(let R of[-1,1]){let w=new Ut,P=R*.32;w.position.set(Math.sin(P)*u*.98,h,-Math.cos(P)*u*.98),w.rotation.y=-P;let U=new F(new ye(.055,16,12),Nu);U.scale.set(1,1.15,.55),w.add(U);let H=new F(new ye(.03,12,10),Kp);H.position.set(R*-.005,-.004,-.024),H.scale.set(1,1.1,.6),w.add(H);let L=new F(new ye(.008,6,4),Nu);L.position.set(.01,.012,-.045),w.add(L);let k=new F(new ye(.058,14,8,0,Math.PI*2,0,Math.PI*.42),a.skin);k.rotation.x=-.35,k.scale.set(1,1.15,.62),w.add(k);let q=jo(.009,.06,Qp,6);q.rotation.z=Math.PI/2+R*.35,q.position.set(0,.075,-.02),w.add(q),this.face.add(w),this.eyes.push({g:w,lid:k})}let d=new F(new Xe(.04,.009,6,16,Math.PI*.8),jp),f=h-.11,p=l.radiusAt(f,-Math.PI/2)||u;if(d.position.set(0,f,-p*.99),d.rotation.set(0,0,Math.PI+Math.PI*.1),this.face.add(d),this.top=new Ut,this.top.position.y=l.top-.02,this.upper.add(this.top),t==="carrot")for(let R=0;R<7;R++){let w=new F(new Ft(.008,.014,.35,5),Lr),P=R/7*Math.PI*2;w.position.set(Math.cos(P)*.03,.15,Math.sin(P)*.03),w.rotation.set(Math.sin(P)*.4,0,-Math.cos(P)*.4),this.top.add(w);let U=new F(new ye(.06,8,6),Lr);U.scale.set(.5,1.4,.15),U.position.set(Math.cos(P)*.1,.33,Math.sin(P)*.1),U.rotation.set(Math.sin(P)*.5,P,-Math.cos(P)*.5),this.top.add(U)}else if(t==="tomato"||t==="pepper"){let R=t==="tomato"?6:5;for(let P=0;P<R;P++){let U=P/R*Math.PI*2,H=new F(new Gn(.035,.2,4),Lr);H.scale.set(1,1,.3),H.position.set(Math.cos(U)*.08,-.01,Math.sin(U)*.08),H.rotation.set(0,-U,Math.PI/2+.25),H.rotateOnAxis(new D(0,0,1),0),this.top.add(H)}let w=new F(new Ft(.02,.03,t==="pepper"?.14:.08,8),Lr);w.position.y=.05,w.rotation.z=.25,this.top.add(w)}else for(let R=0;R<2;R++){let w=new F(new Gn(.015,.06,5),Lr);w.position.set(.05-R*.1,0,.02),this.top.add(w)}let x={carrot:.8,tomato:.58,potato:.86,pepper:.7}[t],m=Math.max(l.radiusAt(x,0),l.radiusAt(x,-Math.PI/2))||.2;this.bandMat=new ae({color:e===0?2783968:14694954,roughness:.7,map:j.carpet.map});let g=new F(new Xe(m*1.01,.022,8,32),this.bandMat);g.rotation.x=Math.PI/2,g.scale.set(1,1,1.6),g.position.y=x,this.upper.add(g);let y=new F(new ye(.03,8,6),this.bandMat);y.position.set(0,x,m*1.02),this.upper.add(y);for(let R of[-1,1]){let w=new F(new ge(.04,.14,.01),this.bandMat);w.position.set(R*.025,x-.07,m*1.04),w.rotation.z=R*.3,this.upper.add(w)}if(o!=="none"){let R=l.top-(t==="carrot"?.13:t==="potato"?.12:.08),w=Math.max(l.radiusAt(R,0),l.radiusAt(R,Math.PI/2),.12)*1.08,P=new Ut;P.position.y=R,this.upper.add(P);let U=(H,L={})=>new ae({color:H,roughness:.75,map:j.polymer.map,normalMap:j.polymer.normalMap,...L});if(o==="helmet"){let H=new F(new ye(w,24,12,0,Math.PI*2,0,Math.PI*.5),U(5922880));H.scale.y=.85,P.add(H);let L=new F(new Xe(w,.02,6,24),U(4870196));L.rotation.x=Math.PI/2,P.add(L);let k=new F(new ge(.08,.05,.04),U(2236962));k.position.set(0,w*.55,-w*.8),P.add(k);for(let q of[-1,1]){let G=new F(new ge(.015,.16,.03),Rc);G.position.set(q*w*.95,-.07,0),P.add(G)}}else if(o==="beret"){let H=new F(new ye(w*1.1,20,10),U(e===0?2771594:9052192));H.scale.set(1,.3,1),H.position.set(w*.15,.04,0),H.rotation.z=-.2,P.add(H);let L=new F(new Xe(w*.98,.018,6,24),Rc);L.rotation.x=Math.PI/2,P.add(L);let k=new F(new li(.025,12),new ae({color:15253568,metalness:1,roughness:.3}));k.position.set(-w*.45,.03,-w*.88),k.rotation.y=Math.PI+.45,P.add(k)}else if(o==="cap"){let H=new F(new ye(w,20,10,0,Math.PI*2,0,Math.PI*.5),U(2763306));H.scale.y=.7,P.add(H);let L=new F(new Ft(w*.75,w*.75,.015,20,1,!1,Math.PI*.5,Math.PI),U(2763306));L.position.set(0,0,-w*.55),L.scale.z=1.3,P.add(L);let k=new F(new li(.03,12),new ae({color:15759898}));k.position.set(0,w*.35,-w*.9),k.rotation.x=.4,k.rotation.y=Math.PI,P.add(k)}else if(o==="boonie"){let H=new F(new Ft(w*.9,w*1.02,.12,20),U(6974020,{map:j.camoWood.map}));H.position.y=.05,P.add(H);let L=new F(new Ft(w*1.6,w*1.6,.015,24),U(6974020,{map:j.camoWood.map,side:fn}));P.add(L)}P.traverse(H=>{H.isMesh&&(H.castShadow=!0)}),this.hat=P}let S={carrot:.12,tomato:.1,potato:.15,pepper:.12}[t],M=Math.max(l.radiusAt(S,0),l.radiusAt(S,Math.PI/2))||.2,T=new F(new Xe(M*1.02,.025,6,32),Rc);T.rotation.x=Math.PI/2,T.scale.set(1,1,1.5),T.position.y=S,this.lower.add(T);for(let R of[-.6,.6,2.4]){let w=new F(new ge(.09,.1,.05),Fu);w.position.set(Math.sin(R)*M*1.08,S-.01,-Math.cos(R)*M*1.08),w.rotation.y=-R,this.lower.add(w)}let A={carrot:.4,tomato:.32,potato:.42,pepper:.36}[t],_=Math.max(l.radiusAt(A,0),l.radiusAt(A,Math.PI))||.25;this.arms=[];for(let R of[-1,1]){let w=new Ut;w.position.set(R*(_+.01),A,0),this.spine.add(w);let P=new F(new ye(.05,10,8),sn);w.add(P);let U=Qo(.3,[[0,.048],[.15,.052],[.45,.058],[.8,.044],[1,.04]],sn);w.add(U);let H=new Ut;H.position.y=-.29,w.add(H);let L=Qo(.27,[[0,.04],[.2,.05],[.6,.04],[1,.032]],sn);H.add(L);let k=new F(new ye(.048,8,6),sn);H.add(k);let q=new Ut;q.position.y=-.26,H.add(q);let G=n0(R,s);q.add(G);let lt=new F(new Ft(.052,.052,.05,12),this.bandMat);lt.position.y=-.08,w.add(lt),this.arms.push({side:R,sh:w,el:H,wr:q,up:U,fo:L,hand:G,ball:P,lost:!1,upLen:.29,foLen:.26})}this.legs=[];let v={carrot:.09,tomato:.14,potato:.12,pepper:.12}[t];for(let R of[-1,1]){let w=new Ut;w.position.set(R*v,.02,0),this.hips.add(w);let P=Qo(.42,[[0,.07],[.12,.088],[.45,.08],[.85,.062],[1,.055]],sn);P.position.y=0,w.add(P);let U=new Ut;U.position.y=-.4,w.add(U);let H=new F(new ye(.05,10,8),sn);H.scale.set(1,1.1,.95),U.add(H);let L=Qo(.38,[[0,.055],[.08,.06],[.3,.07],[.55,.055],[.9,.04],[1,.042]],sn);L.position.y=0,U.add(L);let k=new Ut;k.position.y=-.36,U.add(k);let q=QM();k.add(q),this.legs.push({side:R,hp:w,kn:U,an:k,th:P,sh:L,foot:q,lost:!1})}this.gun=Ko(s>0?1:0,r),this.aim=new Ut,this.aim.position.set(.04,A+.02,0),this.spine.add(this.aim),this.gun.root.position.set(.12,-.04,-.15),this.aim.add(this.gun.root),this.gun.root.scale.setScalar(.95),this.root.traverse(R=>{R.isMesh&&(R.castShadow=!0)});for(let R of this.arms)qe(R.hand),qe(R.wr),qe(R.el,[R.wr]),qe(R.sh,[R.el]);for(let R of this.legs)qe(R.foot,[],{shadow:!1}),qe(R.an),qe(R.kn,[R.an]),qe(R.hp,[R.kn]);qe(this.top,[],{shadow:!1});for(let R of this.eyes)qe(R.g,[R.lid],{shadow:!1});qe(this.face,this.eyes.map(R=>R.g),{shadow:!1}),this.hat&&qe(this.hat),qe(this.upper,[this.face,this.top,this.hat]),qe(this.lower,[]),this.phase=0,this.pitch=0,this.state="idle",this.crouch=0,this.prone=0,this.run=0,this.speed=0,this.air=0,this.blink=2,this.dead=!1,this.deadT=0,this.headGone=!1,this.boltT=0,this.ads=0,this.recoil=0,this.hitSpheres=[]}ikArm(t,e,i){Pc(t,e,i)}_unused(t,e,i){if(t.lost)return;let s=t.sh,r=s.parent;r.updateWorldMatrix(!0,!1);let o=r0.copy(r.matrixWorld).invert(),a=i0.copy(e).applyMatrix4(o).sub(s.position),l=s0.copy(i).applyMatrix4(o).sub(s.position),c=t.upLen,h=t.foLen,u=a.length();u=Math.min(u,c+h-.001),u=Math.max(u,.05);let d=a.clone().normalize(),f=(c*c+u*u-h*h)/(2*c*u),p=Math.acos(Math.max(-1,Math.min(1,f))),x=l.clone().sub(d.clone().multiplyScalar(l.dot(d))).normalize(),m=d.clone().multiplyScalar(Math.cos(p)*c).add(x.multiplyScalar(Math.sin(p)*c));s.quaternion.setFromUnitVectors(Cc,m.clone().normalize());let g=a.clone().sub(m).applyQuaternion(s.quaternion.clone().invert());t.el.quaternion.setFromUnitVectors(Cc,g.normalize())}update(t,e){let i=this,s=Math.min(1,i.speed/5.5);i.phase+=t*(i.speed*(i.prone>.5?1.2:2.1));let r=i.phase,l=(.8-i.crouch*.3)*(1-i.prone)+.28*i.prone+Math.abs(Math.sin(r))*.04*s*(1-i.prone);i.hips.position.y=l+(i.air>0?.05:0);let c=-.32*i.run*s-.12*i.crouch;i.hips.rotation.x=-i.prone*Math.PI*.5+0,i.spine.rotation.x=c*(1-i.prone)+i.pitch*.18*(1-i.prone)+i.prone*.3,i.spine.rotation.z=Math.sin(r)*.04*s,i.spine.position.y=0;for(let T of i.legs){if(T.lost)continue;let A=r+(T.side>0?Math.PI:0),_=Math.sin(A)*(.5+.4*i.run)*s,v=Math.max(0,-Math.cos(A))*(.9+.5*i.run)*s+.05;_+=i.crouch*1.1,v+=i.crouch*1.8,i.air>0&&(_=.6*(T.side>0?1:.3),v=1),_=_*(1-i.prone)+Math.sin(A)*.15*s*i.prone,v=v*(1-i.prone)+(.2+Math.max(0,Math.sin(A))*.6*s)*i.prone,T.hp.rotation.x=-_,T.kn.rotation.x=v,T.an.rotation.x=-v*.4+_*.2+i.prone*1.2,T.hp.rotation.z=T.side*.04}let h=i.run*s*(1-i.ads);i.aim.rotation.x=i.pitch+i.prone*Math.PI*.5-i.spine.rotation.x-h*.9-i.boltT*.25,i.aim.rotation.y=h*.9,i.aim.rotation.z=h*.4+i.boltT*.3,i.gun.root.position.z=-.15+i.recoil*.06,i.root.updateMatrixWorld(!0);let u=i.gun,d=i.arms[1],f=i.arms[0],p=u.gripPt.getWorldPosition(new D),x=u.forePt.getWorldPosition(new D),m=u.boltPt.getWorldPosition(new D),g=i.spine.localToWorld(new D(.6,-.6,.3)),y=i.spine.localToWorld(new D(-.6,-.6,.1)),S=u.root.getWorldQuaternion(new Qe);i.ikArm(d,ea(i.boltT>0?p.clone().lerp(m,Math.min(1,i.boltT*1.5)):p,S,"grip"),g),i.ikArm(f,ea(x,S,"fore"),y),ta(d,S,"grip"),ta(f,S,"fore"),i.blink-=t;let M=i.blink<.12;i.blink<0&&(i.blink=2+Math.random()*3);for(let T=0;T<i.eyes.length;T++){let A=i.eyes[T],_=i.ads>.6&&T===0;A.lid.rotation.x=i.dead||M||_?.5:-.35+(i.ads>.6?.25:0)}if(i.dead){i.deadT+=t;let T=Math.min(1,i.deadT/.7);i.root.rotation.x=-i.fallDir*T*T*1.45,i.root.position.y=i.deadBaseY-0,i.hips.position.y=l*(1-T)+.25*T;for(let A of i.legs)A.kn.rotation.x*=1-T}}computeHitSpheres(){let t=this.hitSpheres;t.length=0;let e=this.spine,i=(r,o,a,l=e)=>{let c=l.localToWorld(o.clone());t.push({part:r,c,r:a})},s=this.geo;this.headGone||i("head",new D(0,(s.split+s.top)/2,0),Math.max(.17,(s.top-s.split)*.55)),i("body",new D(0,(s.bottom+s.split)*.5+.05,0),Math.max(.2,this.splitR*1.05)),i("body",new D(0,s.split-.12,0),Math.min(this.splitR,.22));for(let r of this.arms)r.lost||(i(r.side<0?"armL":"armR",new D(0,-.14,0),.07,r.sh),i(r.side<0?"armL":"armR",new D(0,-.13,0),.065,r.el));for(let r of this.legs)r.lost||(i(r.side<0?"legL":"legR",new D(0,-.2,0),.09,r.hp),i(r.side<0?"legL":"legR",new D(0,-.18,0),.075,r.kn));return t}};var jM=["shot","shot_far","bolt1","bolt2","mag","boom","tick","beep","splat1","splat2","crunch","hit","ui","cloth","wind","win","lose","whoosh","bgm","step_concrete-001","step_concrete-002","step_grass-001","step_grass-004","step_wood-000","step_wood-001"],Vt={ctx:null,buf:{},master:null,listener:{x:0,y:0,z:0,yaw:0},bgmNode:null,windNode:null,async init(n="sfx/"){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination),await Promise.all(jM.map(async i=>{try{let r=await(await fetch(n+i+".mp3")).arrayBuffer();this.buf[i]=await this.ctx.decodeAudioData(r)}catch{}}))},resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},play(n,t={}){let e=this.ctx;if(!e||!this.buf[n])return null;let i=e.createBufferSource();i.buffer=this.buf[n],i.playbackRate.value=(t.rate||1)*(t.vary?1+(Math.random()-.5)*t.vary:1);let s=e.createGain(),r=t.vol??1,o=s;if(t.pos){let a=this.listener,l=t.pos.x-a.x,c=t.pos.z-a.z,h=t.pos.y-a.y,u=Math.hypot(l,h,c),d=t.ref||4;if(r*=Math.min(1,d/Math.max(d,u))**(t.roll||1),t.maxDist&&u>t.maxDist)return null;let f=-Math.sin(a.yaw),x=- -Math.cos(a.yaw),m=f,g=u>.1?(l*x+c*m)/u:0;if(e.createStereoPanner){let y=e.createStereoPanner();y.pan.value=Math.max(-1,Math.min(1,-g*.85)),s.connect(y),o=y}if(u>15){let y=e.createBiquadFilter();y.type="lowpass",y.frequency.value=Math.max(900,9e3-u*120),o.connect(y),o=y}}return s.gain.value=r,i.connect(s),o.connect(this.master),i.loop=!!t.loop,i.start(0,t.offset||0),{src:i,g:s}},bgm(n){if(n&&!this.bgmNode&&(this.bgmNode=this.play("bgm",{vol:.32,loop:!0})),!n&&this.bgmNode){try{this.bgmNode.g.gain.setTargetAtTime(0,this.ctx.currentTime,.4);let t=this.bgmNode;setTimeout(()=>t.src.stop(),1500)}catch{}this.bgmNode=null}},wind(n){if(n&&!this.windNode&&(this.windNode=this.play("wind",{vol:.18,loop:!0})),!n&&this.windNode){try{this.windNode.src.stop()}catch{}this.windNode=null}}};var Ic=class{constructor(t){this.cs=.5,this.x0=Fe.minX,this.z0=Fe.minZ,this.w=Math.ceil((Fe.maxX-Fe.minX)/this.cs),this.h=Math.ceil((Fe.maxZ-Fe.minZ)/this.cs),this.free=new Uint8Array(this.w*this.h);let e=.42,i=t.filter(s=>s.move&&s.max.y>.42&&s.min.y<1.5);for(let s=0;s<this.h;s++)for(let r=0;r<this.w;r++){let o=this.x0+(r+.5)*this.cs,a=this.z0+(s+.5)*this.cs,l=!0;for(let c of i){let h=Math.max(c.min.x-o,0,o-c.max.x),u=Math.max(c.min.z-a,0,a-c.max.z);if(h*h+u*u<e*e){l=!1;break}}this.free[s*this.w+r]=l?1:0}}cell(t,e){return[Math.floor((t-this.x0)/this.cs),Math.floor((e-this.z0)/this.cs)]}isFree(t,e){return t>=0&&e>=0&&t<this.w&&e<this.h&&this.free[e*this.w+t]===1}center(t,e){return[this.x0+(t+.5)*this.cs,this.z0+(e+.5)*this.cs]}nearestFree(t,e){if(this.isFree(t,e))return[t,e];for(let i=1;i<8;i++)for(let s=-i;s<=i;s++)for(let r=-i;r<=i;r++)if(this.isFree(t+r,e+s))return[t+r,e+s];return[t,e]}path(t,e,i,s){let[r,o]=this.nearestFree(...this.cell(t,e)),[a,l]=this.nearestFree(...this.cell(i,s)),c=this.w,h=c*this.h,u=new Float32Array(h).fill(1e9),d=new Int32Array(h).fill(-1),f=new Uint8Array(h),p=[[0,o*c+r]];u[o*c+r]=0;let x=A=>{let _=A%c,v=A/c|0,R=Math.abs(_-a),w=Math.abs(v-l);return Math.max(R,w)+.41*Math.min(R,w)},m=l*c+a,g=0;for(;p.length&&g++<2e4;){let A=0;for(let w=1;w<p.length;w++)p[w][0]<p[A][0]&&(A=w);let[,_]=p[A];if(p[A]=p[p.length-1],p.pop(),f[_])continue;if(f[_]=1,_===m)break;let v=_%c,R=_/c|0;for(let w=-1;w<=1;w++)for(let P=-1;P<=1;P++){if(!P&&!w)continue;let U=v+P,H=R+w;if(!this.isFree(U,H)||P&&w&&(!this.isFree(v+P,R)||!this.isFree(v,R+w)))continue;let L=H*c+U;if(f[L])continue;let k=u[_]+(P&&w?1.414:1);k<u[L]&&(u[L]=k,d[L]=_,p.push([k+x(L),L]))}}if(d[m]===-1&&m!==o*c+r)return null;let y=[],S=m;for(;S!==-1;)y.push(this.center(S%c,S/c|0)),S=d[S];y.reverse();let M=[y[0]],T=0;for(;T<y.length-1;){let A=y.length-1;for(;A>T+1&&!this.lineFree(y[T],y[A]);)A--;M.push(y[A]),T=A}return M}lineFree(t,e){let i=Math.hypot(e[0]-t[0],e[1]-t[1]),s=Math.ceil(i/(this.cs*.5));for(let r=0;r<=s;r++){let o=r/s,[a,l]=this.cell(t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o);if(!this.isFree(a,l))return!1}return!0}randomFreeNear(t,e,i){for(let s=0;s<40;s++){let r=Math.random()*Math.PI*2,o=Math.random()*i,[a,l]=this.cell(t+Math.cos(r)*o,e+Math.sin(r)*o);if(this.isFree(a,l))return this.center(a,l)}return[t,e]}};var it=n=>document.getElementById(n),dt=D,En=(n,t,e)=>Math.max(t,Math.min(e,n)),aa=(n,t,e)=>n+(t-n)*e,gi=(n,t,e,i)=>aa(n,t,1-Math.exp(-e*i)),tv=(n,t)=>{let e=t-n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},yi=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;window.__vwQuality=1;var Yt=Object.assign({sens:1,sensAds:.55,fireMode:"release",quality:1,diff:1,bgm:1,kind:"carrot",tpp:0,hat:"helmet",camo:"olive"},(()=>{try{return JSON.parse(localStorage.getItem("vw_cfg")||"{}")}catch{return{}}})());window.__vwQuality=Yt.quality;var Gr=()=>{try{localStorage.setItem("vw_cfg",JSON.stringify(Yt))}catch{}},Ye=new fc({antialias:Yt.quality>0,powerPreference:"high-performance"});Ye.outputColorSpace=rn;Ye.toneMapping=Do;Ye.toneMappingExposure=1.05;Ye.shadowMap.enabled=!0;Ye.shadowMap.type=ws;Ye.autoClear=!1;it("game").appendChild(Ye.domElement);var Bi=Math.min(devicePixelRatio,Yt.quality===2?2:Yt.quality===1?yi?1.5:1.75:1);Ye.setPixelRatio(Bi);yp(Math.min(8,Ye.capabilities.getMaxAnisotropy()));var Re=new Qi,xe=new gn(72,1,.05,400);xe.rotation.order="YXZ";var Vi=new Qi,xi=new gn(46,1,.01,10);function Bc(){let n=innerWidth,t=innerHeight;Ye.setSize(n,t),xe.aspect=xi.aspect=n/t,xe.updateProjectionMatrix(),xi.updateProjectionMatrix()}addEventListener("resize",Bc);Bc();function ev(){let n=new ye(300,32,16),t=new Wn({side:on,depthWrite:!1,fog:!1,uniforms:{sun:{value:new dt(.4,.55,.35).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 sun;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
      float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=n(p)*a;p*=2.03;a*=.5;}return s;}
      void main(){ float y=max(vP.y,0.); vec3 top=vec3(.22,.48,.86), hor=vec3(.72,.84,.95), gnd=vec3(.55,.62,.55);
        vec3 c = mix(hor, top, pow(y, .55)); if(vP.y<0.) c = mix(hor, gnd, min(1.,-vP.y*4.));
        float sd = max(dot(vP, sun), 0.); c += vec3(1.,.9,.7)*pow(sd, 300.)*3. + vec3(1.,.85,.6)*pow(sd,8.)*.25;
        if(vP.y>0.02){ vec2 uv = vP.xz/(vP.y+.15)*1.6; float cl = smoothstep(.5,.85, fb(uv*1.2)); c = mix(c, vec3(1.)*(.85+.15*sd), cl*.75*smoothstep(.02,.2,vP.y)); }
        gl_FragColor = vec4(c,1.); }`}),e=new F(n,t);return e.renderOrder=-1,e}Re.add(ev());Re.fog=new ho(12112100,60,210);var nv=new gr(13624575,5925440,.85);Re.add(nv);var Wi=new xr(16773336,2.6);Wi.position.set(30,42,26);Re.add(Wi);Re.add(Wi.target);Wi.castShadow=!0;var a0=Yt.quality===2?4096:Yt.quality===1?2048:1024;Wi.shadow.mapSize.set(a0,a0);Object.assign(Wi.shadow.camera,{left:-44,right:44,top:40,bottom:-40,near:5,far:120});Wi.shadow.bias=-4e-4;Wi.shadow.normalBias=.03;Wi.shadow.camera.layers.enable(1);var ki=new ui(16760944,0,8,2);Re.add(ki);Vi.add(new gr(13624575,5925440,1));var g0=new xr(16773336,2);g0.position.set(1,2,1);Vi.add(g0);var Hc=new ui(16760944,0,3,2);Hc.position.set(.1,-.05,-.9);Vi.add(Hc);var na=(n,t)=>{it("ldBar").style.width=n*100+"%",t&&(it("ldTxt").textContent=t)},l0,Br,x0;async function iv(){na(.05,"\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u4F5C\u6210\u4E2D\u2026"),await new Promise(e=>setTimeout(e,30)),Mp(Yt.quality),na(.45,"\u30DE\u30C3\u30D7\u300C\u30D9\u30B8\u30BF\u30A6\u30F3\u300D\u3092\u5EFA\u8A2D\u4E2D\u2026"),await new Promise(e=>setTimeout(e,30));let t=new br(Ye).fromScene(new gc,.04).texture;Re.environment=t,Re.environmentIntensity=.45,Vi.environment=t,Vi.environmentIntensity=.6,l0=qp(Re),Br=l0.colliders,_0=Br.filter(e=>e.bullet),na(.75,"CPU\u306E\u9053\u3092\u8A08\u7B97\u4E2D\u2026"),await new Promise(e=>setTimeout(e,30)),x0=new Ic(Br),na(.85,"\u52B9\u679C\u97F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026"),cv(),Ov(),Ye.compile(Re,xe),na(1,""),it("loading").classList.add("hide"),ju()}var _0=[],sv=.3;function rv(n){return n.stance==="prone"?.55:n.stance==="crouch"?1.2:1.72}function Us(n,t,e,i=.22){let s=0;for(let r of Br)r.move&&(n+i<r.min.x||n-i>r.max.x||t+i<r.min.z||t-i>r.max.z||r.max.y<=e+.46&&r.max.y>s&&(s=r.max.y));return s}function ov(n,t,e){for(let i=0;i<2;i++)for(let s of Br){if(!s.move||s.max.y<=n.y+.46||s.min.y>=n.y+t)continue;let r=En(n.x,s.min.x,s.max.x),o=En(n.z,s.min.z,s.max.z),a=n.x-r,l=n.z-o,c=a*a+l*l;if(!(c>=e*e))if(c>1e-8){let h=Math.sqrt(c);n.x+=a/h*(e-h),n.z+=l/h*(e-h)}else{let h=[n.x-s.min.x,s.max.x-n.x,n.z-s.min.z,s.max.z-n.z],u=h.indexOf(Math.min(...h));u===0?n.x=s.min.x-e:u===1?n.x=s.max.x+e:u===2?n.z=s.min.z-e:n.z=s.max.z+e}}}function la(n,t,e){let i=null;for(let s of _0){let r=Sp(n,t,s,i?i.t:e);r&&r.t>1e-4&&(!i||r.t<i.t)&&(i={t:r.t,c:s,axis:r.axis,sign:r.sign})}return i}function av(n,t){let e=new dt().subVectors(t,n),i=e.length();return e.divideScalar(i),!la(n,e,i)}function y0(n,t,e,i){let s=n.x-e.x,r=n.y-e.y,o=n.z-e.z,a=s*t.x+r*t.y+o*t.z,l=s*s+r*r+o*o-i*i,c=a*a-l;if(c<0)return-1;let h=-a-Math.sqrt(c);return h>0?h:-1}var _n={parts:[],decals:[],tracers:[],debris:[],glints:[]},ca,Fs,kc,M0,v0,lv=new Vn(1,0);function ia(n,t=128,e){let i=document.createElement("canvas");i.width=i.height=t;let s=i.getContext("2d");if(e)e(s,t);else{let o=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);n.forEach(([a,l])=>o.addColorStop(a,l)),s.fillStyle=o,s.fillRect(0,0,t,t)}let r=new Ci(i);return r.colorSpace=rn,r}function cv(){ca=ia(null,128,(n,t)=>{n.translate(t/2,t/2);for(let i=0;i<7;i++){n.rotate(Math.PI*2/7+Math.random()*.2);let s=n.createLinearGradient(0,0,t/2,0);s.addColorStop(0,"rgba(255,250,220,1)"),s.addColorStop(.4,"rgba(255,190,80,.8)"),s.addColorStop(1,"rgba(255,120,20,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(0,-6),n.lineTo(t/2*(.6+Math.random()*.4),0),n.lineTo(0,6),n.fill()}let e=n.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,240,1)"),e.addColorStop(1,"rgba(255,200,100,0)"),n.fillStyle=e,n.fillRect(-30,-30,60,60)}),Fs=ia([[0,"rgba(220,220,220,.55)"],[.5,"rgba(200,200,200,.25)"],[1,"rgba(200,200,200,0)"]]),kc=ia(null,128,(n,t)=>{n.fillStyle="#fff",n.beginPath(),n.arc(64,64,26,0,7),n.fill();for(let e=0;e<16;e++){let i=Math.random()*7,s=20+Math.random()*38,r=3+Math.random()*9;n.beginPath(),n.arc(64+Math.cos(i)*s,64+Math.sin(i)*s,r,0,7),n.fill(),n.lineWidth=r*.8,n.strokeStyle="#fff",n.beginPath(),n.moveTo(64,64),n.lineTo(64+Math.cos(i)*s,64+Math.sin(i)*s),n.stroke()}}),M0=ia([[0,"rgba(10,8,6,1)"],[.25,"rgba(20,16,12,.95)"],[.4,"rgba(60,50,40,.5)"],[1,"rgba(60,50,40,0)"]],64),v0=ia(null,128,(n,t)=>{let e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(200,230,255,.9)"),e.addColorStop(1,"rgba(150,200,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128),n.fillStyle="rgba(255,255,255,.9)",n.fillRect(0,62,128,4),n.fillRect(62,0,4,128)})}function _i(n,t,e,i,s={}){let r=new vs({map:n,transparent:!0,depthWrite:!1,blending:s.add?As:os,color:s.color||16777215,opacity:s.opacity??1,fog:!0}),o=new hr(r);return o.position.copy(t),o.scale.setScalar(e),r.rotation=Math.random()*6.28,(s.scene||Re).add(o),_n.parts.push({o,life:i,max:i,vel:s.vel||new dt,grow:s.grow||0,sprite:!0,g:s.g||0,scene:s.scene||Re,fade:!0}),o}var Bu={};function hv(n){return Bu[n]||(Bu[n]=new ae({color:n,roughness:.4})),Bu[n]}function Os(n,t,e,i,s=.03,r=.8,o){for(let a=0;a<e;a++){let l=new F(lv,hv(t));l.position.copy(n),l.scale.setScalar(s*(.5+Math.random()));let c=new dt(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(i*(.4+Math.random()));o&&c.addScaledVector(o,i*.6),Re.add(l),_n.parts.push({o:l,life:r*(.6+Math.random()*.6),max:r,vel:c,g:9.8,spin:new dt(Math.random(),Math.random(),Math.random()).multiplyScalar(10),bounce:!0})}}function zc(n,t,e,i,s=16777215,r=1){let o=new F(new xn(i,i),new Qn({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,color:s,opacity:r,fog:!0}));if(o.position.copy(t).addScaledVector(e,.01),o.lookAt(t.clone().add(e)),o.rotateZ(Math.random()*6.28),Re.add(o),_n.decals.push(o),_n.decals.length>60){let a=_n.decals.shift();Re.remove(a),a.geometry.dispose(),a.material.dispose()}}var Yu=new Ft(.012,.012,1,6,1,!0);Yu.rotateX(Math.PI/2);Yu.translate(0,0,.5);function uv(n,t){let e=new F(Yu,new Qn({color:16769184,transparent:!0,opacity:.8,blending:As,depthWrite:!1}));e.position.copy(n),e.lookAt(t),e.scale.set(1,1,n.distanceTo(t)),Re.add(e),_n.parts.push({o:e,life:.12,max:.12,vel:new dt,fadeMat:!0})}function dv(n){for(let t=_n.parts.length-1;t>=0;t--){let e=_n.parts[t];if(e.life-=n,e.life<=0){(e.scene||Re).remove(e.o),(e.sprite||e.fadeMat)&&e.o.material.dispose(),_n.parts.splice(t,1);continue}e.g&&(e.vel.y-=e.g*n),e.o.position.addScaledVector(e.vel,n),e.bounce&&e.o.position.y<Us(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01&&(e.o.position.y=Us(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01,e.vel.multiplyScalar(.4),e.vel.y=Math.abs(e.vel.y)*.3),e.spin&&(e.o.rotation.x+=e.spin.x*n,e.o.rotation.y+=e.spin.y*n),e.grow&&e.o.scale.multiplyScalar(1+e.grow*n);let i=e.life/e.max;(e.sprite||e.fadeMat)&&(e.o.material.opacity=(e.fade||e.fadeMat?i:1)*(e.o.material.userData.op??1))}for(let t of _n.debris){if(t.rest)continue;t.vel.y-=9.8*n,t.o.position.addScaledVector(t.vel,n),t.o.rotation.x+=t.av.x*n,t.o.rotation.y+=t.av.y*n,t.o.rotation.z+=t.av.z*n;let e=Us(t.o.position.x,t.o.position.z,t.o.position.y+.2,.02)+(t.r||.03);t.o.position.y<e&&(t.o.position.y=e,Math.abs(t.vel.y)<.8?(t.vel.set(0,0,0),t.av.multiplyScalar(0),t.rest=!0):(t.vel.y=-t.vel.y*.35,t.vel.x*=.6,t.vel.z*=.6,t.av.multiplyScalar(.6),t.splat&&!t.splatted&&(t.splatted=!0,zc(kc,new dt(t.o.position.x,e-(t.r||.03)+.01,t.o.position.z),new dt(0,1,0),.4+Math.random()*.4,t.splat,.85)),t.snd&&Vt.play(t.snd,{pos:t.o.position,vol:.4,vary:.3,ref:3})))}}function S0(){for(let n of _n.debris)n.o.parent&&n.o.parent.remove(n.o);_n.debris.length=0;for(let n of _n.decals)Re.remove(n),n.geometry.dispose(),n.material.dispose();_n.decals.length=0}function Hr(n,t,e,i={}){if(_n.debris.push({o:n,vel:t,av:e,r:i.r,splat:i.splat,snd:i.snd}),_n.debris.length>160){let s=_n.debris.shift();s.o.parent&&s.o.parent.remove(s.o)}}var Gi={carrot:15759898,tomato:13113358,potato:15259808,pepper:6991930},De=[],Lt=null,Hi={carrot:"\u306B\u3093\u3058\u3093",tomato:"\u30C8\u30DE\u30C8",potato:"\u3058\u3083\u304C\u3044\u3082",pepper:"\u30D4\u30FC\u30DE\u30F3"},Or=class{constructor(t,e,i,s){this.kind=t,this.team=e,this.isPlayer=i,this.name=s,this.pos=new dt,this.vel=new dt,this.yaw=0,this.pitch=0,this.alive=!0,this.hp=100,this.stance="stand",this.sprint=!1,this.ads=0,this.adsWant=!1,this.mag=5,this.reserve=20,this.boltT=0,this.reloadT=0,this.needBolt=!1,this.onGround=!0,this.slideT=0,this.slideDir=new dt,this.moveAmt=0,this.stepAcc=0,this.lastShotT=-9,this.kills=0,this.hs=0,this.shots=0,this.hits=0,this.lostArm=[!1,!1],this.lostLeg=[!1,!1],this.revealT=0,this.spotT=0,this.hat=i?Yt.hat:Nr[1+Math.floor(Math.random()*(Nr.length-1))].id,this.camo=i?Yt.camo:Jo[Math.floor(Math.random()*4)].id,this.deaths=0,this.score=0,this.veg=new Dr(t,e,{lod:1,hat:this.hat,camo:this.camo}),Re.add(this.veg.root),i&&this.setFirstPerson(!Yt.tpp)}setFirstPerson(t){this.veg.root.traverse(e=>{e.layers.set(t?1:0)})}eye(){let t=this.stance==="prone"?.42:this.stance==="crouch"?1.12:1.58;return new dt(this.pos.x,this.pos.y+t-(this.slideT>0?.45:0),this.pos.z)}dir(){return new dt(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}dispose(){Re.remove(this.veg.root)}},oa=1.05,b0=2.6,fv=.32;function Zu(n){return n.alive&&n.boltT<=0&&n.reloadT<=0&&n.mag>0&&!(n.lostArm[0]&&n.lostArm[1])&&Q.phase!=="pre"&&Q.phase!=="post"}function $u(n,t){if(!Zu(n)){n.mag<=0&&n.reloadT<=0&&Bs(n);return}n.mag--,n.shots++,n.lastShotT=Q.time,n.revealT=2.5;let e=n.ads>.95?6e-4:aa(.09,.006,Math.pow(n.ads,2));e+=Math.min(1,n.vel.length()/5)*(n.ads>.9?.012:.03)+(n.onGround?0:.05)+(n.lostArm[0]||n.lostArm[1]?.03:0),n.stance==="prone"&&n.ads>.9&&(e*=.5);let i=t.clone();e>0&&(i.x+=(Math.random()-.5)*e*2,i.y+=(Math.random()-.5)*e*2,i.z+=(Math.random()-.5)*e*2,i.normalize());let s=n.eye(),r=pv(s,i,n),o=n.isPlayer&&!Yt.tpp&&n.ads<.9?Bt.gun.muzzlePt.getWorldPosition(new dt):n.veg.gun.muzzlePt.getWorldPosition(new dt),a=o;if(n.isPlayer&&!Yt.tpp&&(a=s.clone().addScaledVector(i,.9).add(new dt(0,-.12,0))),uv(a,r.point),n.isPlayer&&!Yt.tpp||(_i(ca,o,.7,.06,{add:!0}),ki.position.copy(o),ki.intensity=30,setTimeout(()=>ki.intensity=0,50)),_i(Fs,n.isPlayer&&!Yt.tpp?a:o,.4,1.2,{grow:1.5,vel:new dt(0,.4,0),opacity:.6}),n.isPlayer)Vt.play("shot",{vol:1,vary:.06}),Hv();else{let l=n.pos.distanceTo(Lt.pos);Vt.play(l>25?"shot_far":"shot",{pos:n.eye(),vol:1,ref:6,roll:.8,vary:.05})}for(let l of De)!l.isPlayer&&l.alive&&l.team!==n.team&&l.pos.distanceTo(n.pos)<70&&l.ai&&(l.ai.heard={pos:n.pos.clone(),t:4});return n.needBolt=!0,n.boltT=oa,n.boltPlayed=0,n.isPlayer&&n.ads>.5&&(n.kickedOut=!0),r}function pv(n,t,e){let i=la(n,t,200),s=i?i.t:200,r=null;for(let a of De){if(a===e||!a.alive&&!a.ragdollHit||!a.alive||a.pos.distanceTo(n)>s+3)continue;let l=null,c=-1;for(let h of a.veg.computeHitSpheres()){let u=y0(n,t,h.c,h.r);u>0&&u<s&&(h.part==="head"&&(c=u),(!l||u<l.t)&&(l={f:a,part:h.part,t:u}))}l&&(c>0&&c-l.t<.3&&(l={f:a,part:"head",t:c}),s=l.t,r=l)}let o=n.clone().addScaledVector(t,s);if(r)return mv(r.f,r.part,e,t,o),{point:o,hit:r};if(i){let a=new dt;a.setComponent(i.axis,i.sign),zc(M0,o,a,.09);let l={wood:9071178,metal:13158600,concrete:11053216,grass:5929530,carpet:8018522}[i.c.surf]||10132112;Os(o,l,6,3,.02,.6,a),_i(Fs,o,.3,.6,{grow:2,vel:a.clone().multiplyScalar(.5),color:l,opacity:.7}),i.c.surf==="metal"&&_i(ca,o,.18,.05,{add:!0}),Vt.play("hit",{pos:o,vol:.25,ref:3,rate:.6})}else if(t.y<0){let a=(0-n.y)/t.y;if(a>0&&a<200){let l=n.clone().addScaledVector(t,a);return Os(l,5925434,5,2.5,.02,.5,new dt(0,1,0)),_i(Fs,l,.4,.7,{grow:2,color:10127978}),{point:l}}}return{point:o}}function mv(n,t,e,i,s){if(!n.alive)return;let r=Gi[n.kind];Os(s,r,14,4,.03,.9,i.clone().multiplyScalar(.6)),_i(Fs,s,.5,.4,{color:r,grow:2.5,opacity:.9}),Vt.play(Math.random()<.5?"splat1":"splat2",{pos:s,vol:.9,ref:5,vary:.2});let o=la(s,i,4);if(o){let c=new dt;c.setComponent(o.axis,o.sign),zc(kc,s.clone().addScaledVector(i,o.t),c,.6+Math.random()*.4,r,.9)}else zc(kc,new dt(s.x+i.x*1.5,Us(s.x,s.z,s.y)+.02,s.z+i.z*1.5),new dt(0,1,0),.9,r,.85);let a=0,l=!1;t==="head"?(a=200,l=!0):t==="body"?a=120:t==="armL"||t==="armR"?(a=55,gv(n,t==="armL"?0:1,i)):(a=60,xv(n,t==="legL"?0:1,i)),n.hp-=a,e&&(e.hits++,e.isPlayer&&vv(n.hp<=0)),n.isPlayer&&Sv(e?e.pos:s),n.ai&&(n.ai.heard={pos:e?e.pos.clone():s.clone(),t:5},n.ai.threat=e),n.hp<=0?Ku(n,e,l,i,t):n.isPlayer&&(it("vign").style.opacity=.9,setTimeout(()=>it("vign").style.opacity=n.hp<50?.5:0,400),yv(Gi[n.kind]))}function gv(n,t,e){if(n.lostArm[t])return;n.lostArm[t]=!0;let i=n.veg.arms[t];i.lost=!0;let s=i.sh.getWorldPosition(new dt),r=i.sh.getWorldQuaternion(new Qe);Re.attach(i.sh),Hr(i.sh,e.clone().multiplyScalar(3).add(new dt((Math.random()-.5)*2,2.5,(Math.random()-.5)*2)),new dt(Math.random()*8,Math.random()*8,Math.random()*8),{r:.05,splat:Gi[n.kind],snd:"splat2"});let o=new F(new ye(.05,10,8),Ju(n.kind));o.position.copy(i.sh.position),n.veg.spine.add(o),o.position.set(i.side*n.veg.splitR,i.sh.position.y,0),o.position.copy(n.veg.spine.worldToLocal(s.clone()));for(let a=0;a<6;a++)setTimeout(()=>n.veg.spine&&Os(o.getWorldPosition(new dt),Gi[n.kind],3,1.5,.02,.6),a*120);n.isPlayer&&ha("","\u8155\u3092\u5931\u3063\u305F\uFF01 \u72D9\u3044\u304C\u30D6\u30EC\u308B")}function xv(n,t,e){if(n.lostLeg[t])return;n.lostLeg[t]=!0;let i=n.veg.legs[t];i.lost=!0,Re.attach(i.hp),Hr(i.hp,e.clone().multiplyScalar(2.5).add(new dt((Math.random()-.5)*2,2.2,(Math.random()-.5)*2)),new dt(Math.random()*7,Math.random()*7,Math.random()*7),{r:.06,splat:Gi[n.kind],snd:"splat1"});let s=new F(new ye(.06,10,8),Ju(n.kind));n.veg.hips.add(s),s.position.set(i.side*.1,0,0),n.lostLeg[0]&&n.lostLeg[1]&&(n.stance="prone"),n.isPlayer&&ha("","\u811A\u3092\u5931\u3063\u305F\uFF01 \u52D5\u304D\u304C\u9045\u304F\u306A\u308B")}var Hu={};function Ju(n){return Hu[n]||(Hu[n]=new ae({map:j["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4})),Hu[n]}function _v(n,t){let e=n.veg;e.headGone=!0;let i=e.upper.localToWorld(new dt(0,(e.geo.split+e.geo.top)/2,0));e.upper.visible=!1,e.cap.visible=!0;let s=e.upper.material,r=Ju(n.kind);for(let o=0;o<16;o++){let a=new Vn(.05+Math.random()*.08,1),l=a.attributes.position;for(let h=0;h<l.count;h++)l.setXYZ(h,l.getX(h)*(.6+Math.random()*.8),l.getY(h)*(.4+Math.random()*.5),l.getZ(h)*(.6+Math.random()*.8));a.computeVertexNormals();let c=new F(a,[s,r][o%2]);c.castShadow=!0,c.position.copy(i).add(new dt((Math.random()-.5)*.2,(Math.random()-.5)*.2,(Math.random()-.5)*.2)),Re.add(c),Hr(c,t.clone().multiplyScalar(4+Math.random()*4).add(new dt((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)),new dt(Math.random()*15,Math.random()*15,Math.random()*15),{r:.04,splat:Math.random()<.5?Gi[n.kind]:0,snd:o<3?"splat1":null})}for(let o of e.eyes){let a=o.g.getWorldPosition(new dt);Re.attach(o.g),Hr(o.g,t.clone().multiplyScalar(3).add(new dt((Math.random()-.5)*3,3+Math.random()*2,(Math.random()-.5)*3)),new dt(Math.random()*10,Math.random()*10,0),{r:.04})}Os(i,Gi[n.kind],40,6,.035,1.2,t),_i(Fs,i,1.2,.7,{color:Gi[n.kind],grow:2,opacity:.9}),Vt.play("crunch",{pos:i,vol:1,ref:8})}function Ku(n,t,e,i,s){n.alive=!1,n.hp=0,e?_v(n,i):s==="body"&&Os(n.eye(),Gi[n.kind],24,5,.035,1,i),n.veg.dead=!0,n.veg.deadT=0,n.veg.fallDir=i.x*-Math.sin(n.yaw)+i.z*-Math.cos(n.yaw)>0?-1:1,n.veg.deadBaseY=n.pos.y;let r=n.veg.gun.root;Re.attach(r),Hr(r,new dt((Math.random()-.5)*2,1.5,(Math.random()-.5)*2),new dt(Math.random()*3,Math.random()*3,Math.random()*3),{r:.05}),n.deaths++,t&&(t.kills++,t.score+=e?150:100,e&&t.hs++),Mv(t,n,e),t&&t.isPlayer&&(ha(e?"\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u30AD\u30EB",e?"+150":"+100"),Vt.play("hit",{vol:1,rate:.8})),n.isPlayer&&(cs={t:2.8,by:t,at:n.eye()},setTimeout(()=>{Q.phase!=="post"&&(Pn=De.find(o=>o.team===Lt.team&&o.alive)||t||null)},2800),Vr("\u3084\u3089\u308C\u305F",t?`${t.name} \u306B\u5012\u3055\u308C\u305F`:"",2)),Q.bomb.carrier===n&&(Q.bomb.carrier=null,Q.bomb.state="dropped",Q.bomb.pos.set(n.pos.x,Us(n.pos.x,n.pos.z,n.pos.y+.5)+.05,n.pos.z)),Tv(t,n)}function Bs(n){n.reloadT>0||n.mag>=5||n.reserve<=0||!n.alive||(n.reloadT=b0,n.ads=Math.min(n.ads,0),n.adsWant=!1,n.isPlayer&&(Vt.play("mag",{vol:.8}),setTimeout(()=>Vt.play("bolt1",{vol:.7}),1600),setTimeout(()=>Vt.play("bolt2",{vol:.7}),2200)))}function yv(n){let t="#"+n.toString(16).padStart(6,"0");for(let e=0;e<5;e++){let i=document.createElement("div"),s=40+Math.random()*120;i.style.cssText=`position:absolute;left:${10+Math.random()*80}%;top:${10+Math.random()*75}%;width:${s}px;height:${s*(.8+Math.random()*.5)}px;border-radius:${40+Math.random()*20}% ${50+Math.random()*20}% ${45+Math.random()*20}% ${55+Math.random()*20}%;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,.35),${t} 30%,${t});opacity:.75;transition:opacity 1.6s,transform 1.6s;pointer-events:none`,it("dmg").appendChild(i),requestAnimationFrame(()=>{i.style.opacity=0,i.style.transform="translateY(30px)"}),setTimeout(()=>i.remove(),1700)}}var Uc=0,sa=0,Vu=0;function ha(n,t){it("killnote").innerHTML=(n?`<div class="k">${n}</div>`:"")+`<div class="h">${t}</div>`,Uc=1.8}function Vr(n,t,e=2.5){it("cmsg").textContent=n,it("csub").textContent=t||"",sa=e}function Mv(n,t,e){let i=r=>r&&r.team===Lt.team?"a":"e",s=document.createElement("div");s.innerHTML=n?`<b class="${i(n)}">${n.name}</b> <span class="hs">${e?"\u25CE \u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u25B6"}</span> <b class="${i(t)}">${t.name}</b>`:`<b class="${i(t)}">${t.name}</b> \u7206\u767A\u306B\u5DFB\u304D\u8FBC\u307E\u308C\u305F`,it("feed").prepend(s),setTimeout(()=>s.remove(),5e3)}var Fc=0;function vv(n){let t=it("hitmark");t.classList.toggle("kill",n),t.style.opacity=1,Fc=.25,Vt.play("hit",{vol:.7,rate:n?.8:1.2})}function Sv(n){let t=document.createElement("div");t.className="dmga";let i=-(Math.atan2(n.x-Lt.pos.x,n.z-Lt.pos.z)-(Lt.yaw+Math.PI));t.style.transform=`rotate(${i}rad)`,it("dmg").appendChild(t),setTimeout(()=>t.style.opacity=0,600),setTimeout(()=>t.remove(),1600)}var bv=90,Ev=35,c0=4,h0=6,u0=4,Q={phase:"lobby",time:0,timer:0,round:0,score:[0,0],attack:0,bomb:{state:"carried",carrier:null,pos:new dt,site:null,fuse:0,prog:0,defuser:null},postT:0,slowmo:0},Pn=null,cs=null;function E0(){window.VW_INGAME=!0,Q.round=0,Q.score=[0,0],Q.attack=Math.random()<.5?0:1;for(let s of De)s.dispose();De=[];let n=["carrot","tomato","potato","pepper"].filter(s=>s!==Yt.kind);Lt=new Or(Yt.kind,0,!0,"\u3042\u306A\u305F");let t=new Or(n[0],0,!1,Hi[n[0]]+"(CPU)"),e=new Or(n[1],1,!1,Hi[n[1]]+"(CPU)"),i=new Or(n[2],1,!1,Hi[n[2]]+"(CPU)");De=[Lt,t,e,i];for(let s of De)s.isPlayer||(s.ai={path:null,pi:0,goal:null,repath:0,think:0,target:null,seen:0,heard:null,hold:null,holdT:0,strafe:0,aimErr:new dt,mode:"obj",crouchT:0});it("ia0").textContent=Hi[Lt.kind][0],it("ia1").textContent=Hi[t.kind][0],it("ie0").textContent=Hi[e.kind][0],it("ie1").textContent=Hi[i.kind][0],it("hpName").textContent=Hi[Yt.kind],wv={kills:0,hs:0},Bv(),Qu()}var wv;function Qu(){Q.round++,S0();for(let a of De){let l=a.kind;a.dispose(),a.veg=new Dr(l,a.team,{lod:1,hat:a.hat,camo:a.camo}),Re.add(a.veg.root),a.isPlayer&&a.setFirstPerson(!Yt.tpp),Object.assign(a,{alive:!0,hp:100,stance:"stand",sprint:!1,ads:0,adsWant:!1,mag:5,reserve:20,boltT:0,reloadT:0,needBolt:!1,slideT:0,lostArm:[!1,!1],lostLeg:[!1,!1],revealT:0,kickedOut:!1}),a.vel.set(0,0,0)}let n=Q.attack,t=De.filter(a=>a.team===n),e=De.filter(a=>a.team!==n);t.forEach((a,l)=>{a.pos.copy(Pu.south[l]),a.yaw=0,a.pitch=0}),e.forEach((a,l)=>{a.pos.copy(Pu.north[l]),a.yaw=Math.PI,a.pitch=0});let i=t.find(a=>a.isPlayer)||t[0];Object.assign(Q.bomb,{state:"carried",carrier:i,site:null,fuse:0,prog:0,defuser:null});for(let a of De)a.ai&&Object.assign(a.ai,{path:null,goal:null,target:null,seen:0,heard:null,hold:null,mode:"obj",think:Math.random()*.3,site:Math.random()<.5?"A":"B",threat:null});let s=e.filter(a=>a.ai);s.forEach((a,l)=>a.ai.site=s.length===2?l===0?"A":"B":Math.random()<.5?"A":"B");let r=t.filter(a=>a.ai),o=Math.random()<.5?"A":"B";if(r.forEach(a=>a.ai.site=o),Pn=null,cs=null,it("kcam").classList.add("hide"),Q.phase="pre",Q.timer=4,Q.time=0,it("roundInfo").textContent=`\u30E9\u30A6\u30F3\u30C9 ${Q.round}`,it("side").textContent=Lt.team===n?"\u653B\u6483\u5074\uFF1A\u7206\u5F3E\u3092 A \u304B B \u306B\u8A2D\u7F6E\u305B\u3088":"\u9632\u885B\u5074\uFF1A\u7206\u5F3E\u306E\u8A2D\u7F6E\u3092\u963B\u6B62\u305B\u3088",Vr(`\u30E9\u30A6\u30F3\u30C9 ${Q.round}`,Lt.team===n?"\u653B\u6483":"\u9632\u885B",3.5),Q.round<=2){let a=it("tip");a.classList.remove("hide"),a.textContent=yi?"\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F \u2192 \u96E2\u3059\u3068\u767A\u5C04\u3002\u982D\u304B\u80F4\u306B\u5F53\u3066\u308C\u3070\u4E00\u6483":"\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u8997\u304F \u2192 \u5DE6\u30AF\u30EA\u30C3\u30AF\u3067\u767A\u5C04\u3002\u982D\u304B\u80F4\u306B\u5F53\u3066\u308C\u3070\u4E00\u6483",Vu=6}it("vign").style.opacity=0,Vt.play("whoosh",{vol:.6})}function Tv(n,t){if(Q.phase!=="live"&&Q.phase!=="planted")return;let e=[0,1].map(r=>De.filter(o=>o.team===r&&o.alive).length),i=Q.attack,s=1-i;if(e[i]===0&&Q.phase!=="planted")return kr(s,"\u653B\u6483\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);if(e[s]===0)return kr(i,"\u9632\u885B\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);e[i]===0&&Q.phase}function kr(n,t,e){if(Q.phase==="post")return;Q.phase="post",Q.postT=5,Q.score[n]++,it("scA").textContent=Q.score[0],it("scB").textContent=Q.score[1];let i=n===Lt.team;Vr(i?"\u30E9\u30A6\u30F3\u30C9\u52DD\u5229":"\u30E9\u30A6\u30F3\u30C9\u6557\u5317",t,4.5),it("cmsg").style.color=i?"#ffd040":"#ff5a4a",Vt.play(i?"win":"lose",{vol:.8}),e&&(Q.slowmo=1.4,e.isPlayer||(Pn=e,ha("\u30D5\u30A1\u30A4\u30CA\u30EB\u30AD\u30EB",e.name))),Ns(null)}function Av(){if(it("cmsg").style.color="",Q.score[0]>=u0||Q.score[1]>=u0)return Rv();Q.attack=1-Q.attack,Qu()}function Rv(){Q.phase="end";let n=Q.score[0]>Q.score[1];it("resTitle").textContent=n?"\u52DD\u5229":"\u6557\u5317",it("resTitle").className=n?"win":"lose",it("resScore").innerHTML=`<span class="ally">${Q.score[0]}</span> - <span class="enemy">${Q.score[1]}</span>`;let t=Lt.shots?Math.round(Lt.hits/Lt.shots*100):0;it("resStats").innerHTML=`<div><b>${Lt.kills}</b>\u30AD\u30EB</div><div><b>${Lt.hs}</b>\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8</div><div><b>${Lt.hits}/${Lt.shots}</b>\u547D\u4E2D</div>`;let e=[...De].sort((i,s)=>s.score-i.score)[0];it("board").innerHTML="<tr><th></th><th>\u540D\u524D</th><th>\u30AD\u30EB</th><th>\u30C7\u30B9</th><th>HS</th><th>\u30B9\u30B3\u30A2</th></tr>"+[0,1].map(i=>De.filter(s=>s.team===i).sort((s,r)=>r.score-s.score).map(s=>`<tr class="${i===0?"ally":"enemy"}${s===Lt?" me":""}"><td>${s===e?'<span class="mvp">MVP</span>':""}</td><td>${s.name}</td><td>${s.kills}</td><td>${s.deaths}</td><td>${s.hs}</td><td>${s.score}</td></tr>`).join("")).join(""),it("result").classList.remove("hide"),it("ctl").classList.add("hide"),document.pointerLockElement&&document.exitPointerLock(),Vt.bgm(!1),Vt.play(n?"win":"lose")}function Cv(n){if(Q.time+=n,Q.phase==="pre")Q.timer-=n,Q.timer<=0?(Q.phase="live",Q.timer=bv,Vr("\u958B\u59CB","",1),Vt.play("beep",{vol:.8})):Math.ceil(Q.timer)!==Math.ceil(Q.timer+n)&&Vt.play("tick",{vol:.6});else if(Q.phase==="live")Q.timer-=n,Q.timer<=0&&(Q.timer=0,kr(1-Q.attack,"\u6642\u9593\u5207\u308C \u2014 \u9632\u885B\u6210\u529F"));else if(Q.phase==="planted"){let e=Q.bomb;e.fuse-=n,Q.timer=e.fuse,e.beepT=(e.beepT||0)-n,e.beepT<=0&&(Vt.play("beep",{pos:e.pos,vol:.9,ref:6}),e.beepT=e.fuse>15?1:e.fuse>6?.5:e.fuse>2?.25:.12),e.fuse<=0&&Lv()}else Q.phase==="post"&&(Q.postT-=n,Q.postT<=0&&Av());let t=Q.bomb;if(t.state==="dropped"){for(let e of De)if(e.alive&&e.team===Q.attack&&e.pos.distanceTo(t.pos)<1.3){t.state="carried",t.carrier=e,e.isPlayer&&ha("","\u7206\u5F3E\u3092\u62FE\u3063\u305F");break}}if(t.state==="carried"&&t.carrier&&t.pos.copy(t.carrier.pos),t.planting){let e=t.planting;!e.alive||!e.wantAct||e.pos.distanceTo(qn[t.plantSite])>2.4||Q.phase!=="live"?(t.planting=null,t.prog=0,e.isPlayer&&Ns(null)):(t.prog+=n,e.isPlayer&&Ns("\u7206\u5F3E\u3092\u8A2D\u7F6E\u4E2D",t.prog/c0),t.prog>=c0&&Iv(e,t.plantSite))}if(t.defusing){let e=t.defusing;!e.alive||!e.wantAct||e.pos.distanceTo(t.pos)>2||Q.phase!=="planted"?(t.defusing=null,t.prog=0,e.isPlayer&&Ns(null)):(t.prog+=n,e.isPlayer&&Ns("\u7206\u5F3E\u3092\u89E3\u9664\u4E2D",t.prog/h0),t.prog>=h0&&(t.defusing=null,Ns(null),t.state="defused",Vt.play("ui",{vol:1}),e.score+=100,w0(`${e.name} \u304C\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F`),kr(1-Q.attack,"\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F")))}}function w0(n){let t=document.createElement("div");t.textContent=n,it("feed").prepend(t),setTimeout(()=>t.remove(),5e3)}function zr(n){let t=Q.bomb;if(n.alive){if(Q.phase==="live"&&t.carrier===n){for(let e of["A","B"])if(n.pos.distanceTo(qn[e])<2.4&&!t.planting)return t.planting=n,t.plantSite=e,t.prog=0,Vt.play("cloth",{pos:n.pos,vol:.7}),!0}return Q.phase==="planted"&&n.team!==Q.attack&&n.pos.distanceTo(t.pos)<2&&!t.defusing?(t.defusing=n,t.prog=0,Vt.play("cloth",{pos:n.pos,vol:.7}),!0):!1}}var mi;function Pv(){let n=new Ut,t=new F(new ge(.4,.18,.28),new ae({color:3815984,roughness:.7,map:j.polymer.map}));t.position.y=.09,n.add(t);for(let s=0;s<3;s++){let r=new F(new Ft(.045,.045,.34,12),new ae({color:13138474,roughness:.5}));r.rotation.z=Math.PI/2,r.position.set(0,.22,-.08+s*.08),n.add(r)}let e=new F(new xn(.16,.08),new Qn({color:16724e3}));e.rotation.x=-Math.PI/2,e.position.set(.08,.181,0),n.add(e),n.userData.scr=e;let i=new F(new Xe(.08,.008,6,16,Math.PI),new ae({color:13639712}));return i.position.set(-.12,.2,0),n.add(i),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),n}function Iv(n,t){let e=Q.bomb;e.planting=null,e.prog=0,Ns(null),e.state="planted",e.carrier=null,e.site=t,e.fuse=Ev,e.beepT=0,Q.phase="planted",n.score+=100,w0(`${n.name} \u304C ${t} \u306B\u7206\u5F3E\u3092\u8A2D\u7F6E`),Vr("\u7206\u5F3E\u304C\u8A2D\u7F6E\u3055\u308C\u305F",`\u30B5\u30A4\u30C8 ${t}`,2.5),Vt.play("beep",{vol:1})}function Lv(){let n=Q.bomb;n.state="exploded",Vt.play("boom",{vol:1});for(let t=0;t<6;t++)_i(Fs,n.pos.clone().add(new dt((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3)),3+Math.random()*3,2.5,{grow:.8,color:4866104,opacity:.9});for(let t=0;t<4;t++)_i(ca,n.pos.clone().add(new dt(0,1,0)),6+t*2,.35,{add:!0});Os(n.pos.clone().add(new dt(0,.5,0)),3813408,40,12,.06,2),ki.position.copy(n.pos).add(new dt(0,2,0)),ki.intensity=400,ki.distance=40,setTimeout(()=>{ki.intensity=0,ki.distance=8},300),Fr=1.2;for(let t of De)t.alive&&t.pos.distanceTo(n.pos)<9&&(t.hp=0,Ku(t,null,!1,new dt().subVectors(t.pos,n.pos).normalize(),"body"));kr(Q.attack,"\u7206\u5F3E\u304C\u7206\u767A\u3057\u305F")}function Ns(n,t){if(!n){it("prog").classList.add("hide");return}it("prog").classList.remove("hide"),it("progT").textContent=n,it("progF").style.width=En(t,0,1)*100+"%"}var Fr=0;function T0(n,t,e){let i=(n.lostLeg[0]?1:0)+(n.lostLeg[1]?1:0),s=n.stance==="prone"?.85:n.stance==="crouch"?2.1:t.sprint?6.1:4.4;t.mag<.45&&n.stance==="stand"&&!t.sprint&&(s=2),s*=aa(1,.45,n.ads),i===1&&(s*=.45),i===2&&(s=Math.min(s,.6)),(Q.phase==="pre"||Q.bomb.planting===n||Q.bomb.defusing===n)&&(s=0);let o=t.x*s*Math.min(1,t.mag*1.4),a=t.z*s*Math.min(1,t.mag*1.4);if(n.slideT>0){n.slideT-=e;let u=n.slideT/.7;o=n.slideDir.x*8*u+o*.2,a=n.slideDir.z*8*u+a*.2,n.slideT<=0&&(n.stance="crouch")}let l=n.onGround?14:3;n.vel.x=gi(n.vel.x,o,l,e),n.vel.z=gi(n.vel.z,a,l,e),n.vel.y-=16*e,n.pos.x+=n.vel.x*e,n.pos.z+=n.vel.z*e,ov(n.pos,rv(n),n.stance==="prone"?.36:sv),n.pos.x=En(n.pos.x,Fe.minX+.5,Fe.maxX-.5),n.pos.z=En(n.pos.z,Fe.minZ+.5,Fe.maxZ-.5);let c=Us(n.pos.x,n.pos.z,n.pos.y);n.pos.y+=n.vel.y*e,n.pos.y<=c?(!n.onGround&&n.vel.y<-4&&d0(n,1.3),n.pos.y=c,n.vel.y=0,n.onGround=!0):n.pos.y-c>.08?n.onGround=!1:n.onGround&&(n.pos.y=c,n.vel.y=0);let h=Math.hypot(n.vel.x,n.vel.z);if(n.moveAmt=h,n.onGround&&h>.5){n.stepAcc+=h*e;let u=n.sprint?1.6:1.2;if(n.stepAcc>u){n.stepAcc=0;let d=n.stance==="prone"||n.stance==="crouch"||h<2.3?0:n.sprint?1:.6;d>0&&d0(n,d)}}}function d0(n,t){let e=Yp(Br,n.pos.x,n.pos.y+.05,n.pos.z),s=(e==="wood"||e==="carpet"?["step_wood-000","step_wood-001"]:e==="grass"?["step_grass-001","step_grass-004"]:["step_concrete-001","step_concrete-002"])[Math.random()<.5?0:1];if(n.isPlayer?Vt.play(s,{vol:.25*t,vary:.15}):Vt.play(s,{pos:n.pos,vol:.9*t,ref:3,roll:1.1,vary:.15,maxDist:30}),t>.5)for(let r of De)r.ai&&r.alive&&r.team!==n.team&&r.pos.distanceTo(n.pos)<14*t&&(r.ai.heard={pos:n.pos.clone(),t:2.5});t>.5&&(n.revealT=Math.max(n.revealT,.6))}var f0={A:{def:[[-16.5,-15.5],[-21.5,-12],[-14.5,-10.8],[-19.5,-18]],att:[[-17.5,-10],[-20.5,-13.5]]},B:{def:[[17,-16],[21,-12.8],[15.8,-9.6],[19.5,-14.8]],att:[[18,-10],[19,-13.8]]}};function Dv(n){return De.filter(t=>t.team!==n.team&&t.alive)}function Nv(n,t){let e=n.eye(),i=new dt().subVectors(t.eye(),e),s=i.length();if(s>90)return!1;i.normalize();let r=new dt(-Math.sin(n.yaw),0,-Math.cos(n.yaw));if(new dt(i.x,0,i.z).normalize().dot(r)<Math.cos(Math.PI*.42)&&s>4)return!1;let a=[t.eye(),new dt(t.pos.x,t.pos.y+(t.stance==="prone"?.3:.9),t.pos.z)];for(let l of a)if(av(e,l))return!0;return!1}function Uv(n,t){let e=n.ai;if(!n.alive)return;let i=Yt.diff;if(e.think-=t,e.heard&&(e.heard.t-=t,e.heard.t<=0&&(e.heard=null)),e.think<=0){e.think=.15;let a=null,l=1e9;for(let c of Dv(n))if(Nv(n,c)){let h=n.pos.distanceTo(c.pos);h<l&&(l=h,a=c)}a!==e.target&&(e.seen=0,e.target=a,a&&e.aimErr.set(Math.random()-.5,(Math.random()-.5)*.6,Math.random()-.5).multiplyScalar([.5,.35,.25][i])),!a&&e.target&&(e.target=null)}let s={x:0,z:0,mag:0,sprint:!1},r=null,o=e.target;if(o&&o.alive){e.seen+=t;let a=[1.1,.7,.45][i],c=e.aimHead??(e.aimHead=Math.random()<[.25,.4,.55][i])?o.eye().add(new dt(0,-.05,0)):new dt(o.pos.x,o.pos.y+(o.stance==="prone"?.25:o.stance==="crouch"?.75:1.05),o.pos.z),h=Math.exp(-e.seen*[1.4,2,2.8][i])+(o.moveAmt>2?[.12,.08,.05][i]:0)+[.035,.018,.008][i];if(r=c.clone().add(e.aimErr.clone().multiplyScalar(h*n.eye().distanceTo(c)*.25)),n.adsWant=e.seen>a*.4&&n.boltT<=0&&n.reloadT<=0,e.strafe-=t,e.strafe<=0&&(e.strafe=.6+Math.random()*1.2,e.strafeDir=Math.random()<.5?-1:1,Math.random()<.25&&n.stance==="stand"?n.stance="crouch":Math.random()<.2&&(n.stance="stand")),n.ads<.5||i===2){let u=new dt(Math.cos(n.yaw),0,-Math.sin(n.yaw));s.x=u.x*e.strafeDir,s.z=u.z*e.strafeDir,s.mag=.5}if(e.seen>a&&n.ads>.92&&Zu(n)){let u=new dt().subVectors(r,n.eye()).normalize(),d=n.dir();d.dot(u)>.9995&&($u(n,d),e.aimHead=void 0,e.aimErr.multiplyScalar(.6),e.seen=a*.35)}e.lastSeenPos=o.pos.clone()}else{n.adsWant=!1,n.stance==="crouch"&&Math.random()<t*.3&&(n.stance="stand");let a=Fv(n);if(a)if(e.repath-=t,(!e.path||e.repath<=0||!e.goal||e.goal.distanceTo(a)>1.5)&&(e.goal=a.clone(),e.path=x0.path(n.pos.x,n.pos.z,a.x,a.z),e.pi=1,e.repath=3),e.path&&e.pi<e.path.length){let[c,h]=e.path[e.pi],u=c-n.pos.x,d=h-n.pos.z,f=Math.hypot(u,d);f<.45?e.pi++:(s.x=u/f,s.z=d/f,s.mag=1,s.sprint=e.rush&&f>3,e.sneak&&(s.mag=.4)),r=new dt(c,n.eye().y,h),f<.45&&e.pi>=e.path.length&&(e.path=null)}else e.holdT-=t,e.holdT<=0&&(e.holdT=2+Math.random()*3,e.lookYaw=e.watchYaw!==void 0?e.watchYaw+(Math.random()-.5)*1.4:Math.random()*6.28,Math.random()<.3&&(n.stance="crouch")),e.lookYaw!==void 0&&(r=n.eye().add(new dt(-Math.sin(e.lookYaw),-.05,-Math.cos(e.lookYaw))));e.heard&&(r=new dt(e.heard.pos.x,n.eye().y,e.heard.pos.z)),n.wantAct=!1;let l=Q.bomb;if(l.carrier===n&&Q.phase==="live"){let c=qn[e.site];n.pos.distanceTo(c)<2&&(n.wantAct=!0,l.planting||zr(n))}Q.phase==="planted"&&n.team!==Q.attack&&n.pos.distanceTo(l.pos)<1.8&&(n.wantAct=!0,l.defusing||zr(n))}if(o&&o.alive&&(n.wantAct=!1),r){let a=new dt().subVectors(r,n.eye()),l=Math.atan2(-a.x,-a.z),c=Math.atan2(a.y,Math.hypot(a.x,a.z)),h=o?[3.5,5,7][i]:4;n.yaw+=tv(n.yaw,l)*Math.min(1,h*t*(n.ads>.5?.6:1)),n.pitch+=(c-n.pitch)*Math.min(1,h*t)}if(s.mag>.3&&!o&&(e.stuckT=(e.stuckT||0)+t,e.stuckT>.8&&(e.stuckPos&&e.stuckPos.distanceTo(n.pos)<.25&&(e.path=null,e.repath=0,e.hold=null,e.unstick=.6,e.unstickDir=Math.random()<.5?1:-1),e.stuckPos=n.pos.clone(),e.stuckT=0)),e.unstick>0){e.unstick-=t;let a=new dt(Math.cos(n.yaw),0,-Math.sin(n.yaw)).multiplyScalar(e.unstickDir);s.x=a.x,s.z=a.z,s.mag=1}n.sprint=s.sprint,T0(n,s,t),n.mag===0&&n.reloadT<=0&&n.boltT<=0&&Bs(n),!o&&n.mag<3&&n.reloadT<=0&&n.boltT<=0&&n.reserve>0&&Math.random()<t*.5&&Bs(n)}function Fv(n){let t=n.ai,e=Q.bomb,i=n.team===Q.attack;if(t.rush=!1,t.sneak=!1,t.watchYaw=void 0,Q.phase==="pre")return null;if(t.heard&&!t.target&&Math.random()<.002)return t.heard.pos;if(i){if(e.state==="dropped")return t.rush=!0,e.pos;if(e.carrier===n&&Q.phase==="live")return t.rush=Q.timer<40,qn[t.site];if(Q.phase==="planted"){if(!t.hold||t.holdFor!=="postplant"){let r=f0[e.site].att[Math.floor(Math.random()*2)];t.hold=new dt(r[0],0,r[1]),t.holdFor="postplant"}return t.watchYaw=Math.atan2(-(e.pos.x-t.hold.x),-(e.pos.z-t.hold.z)),t.hold}let s=e.carrier;if(s&&s!==n){let r=new dt(Math.sin(n.kind.length)*2.5,0,2.5);return s.pos.clone().add(r)}return qn[t.site]}else{if(Q.phase==="planted")return t.rush=!0,e.pos;if(!t.hold||t.holdFor!==t.site||(t.swapT=(t.swapT||0)-.016)<-25){let s=f0[t.site].def,r=s[Math.floor(Math.random()*s.length)];t.hold=new dt(r[0],0,r[1]),t.holdFor=t.site,t.swapT=0}return t.watchYaw=Math.atan2(-(0-t.hold.x)*.3,-(10-t.hold.z)),t.rush=n.pos.distanceTo(t.hold)>12,t.hold}}var Gc=.66,Bt={root:new Ut,gun:null,arms:[],kick:0,sway:new ct,bob:0,boltAnim:0,reloadAnim:0,sprintK:0,shells:[]};function Ov(){Bt.gun=Ko(1),Bt.root.add(Bt.gun.root),Vi.add(Bt.root),Bt.armL=Ou(-1,2783968,.34,.32),Bt.armR=Ou(1,2783968,.36,.32);for(let n of[Bt.armL,Bt.armR])n.up.visible=!1;Bt.armL.sh.position.set(-.06,-.34,-.25),Bt.armR.sh.position.set(.34,-.55,.12),Bt.gun.root.scale.setScalar(Gc),xi.add(Bt.armL.sh),xi.add(Bt.armR.sh),Vi.add(xi),Bt.armL.sh.traverse(n=>n.frustumCulled=!1),Bt.armR.sh.traverse(n=>n.frustumCulled=!1),Bt.gun.root.traverse(n=>n.frustumCulled=!1)}function Bv(){let n=Bt.gun;Bt.root.remove(n.root),Bt.gun=Ko(1,Yt.camo),Bt.gun.root.scale.setScalar(Gc),Bt.root.add(Bt.gun.root),Bt.gun.root.traverse(t=>t.frustumCulled=!1)}function Hv(){Bt.kick=1,Hc.intensity=6,setTimeout(()=>Hc.intensity=0,60),_i(ca,Bt.gun.muzzlePt.getWorldPosition(new dt),.35,.05,{add:!0,scene:Vi})}function kv(n,t,e){let i=Lt,s=Bt.gun;Bt.kick=gi(Bt.kick,0,9,n),Bt.sway.x=gi(Bt.sway.x,En(-t*.0025,-.06,.06),8,n),Bt.sway.y=gi(Bt.sway.y,En(e*.0025,-.05,.05),8,n);let r=Math.hypot(i.vel.x,i.vel.z);Bt.bob+=n*r*2,Bt.sprintK=gi(Bt.sprintK,i.sprint&&r>3&&i.ads<.1?1:0,8,n);let o=i.ads,a=s.eyePt.position.y,l=s.eyePt.position.z,c=new dt(.17,-.18,-.52),h=new dt(0,-a*Gc,-l*Gc-.08),u=c.clone().lerp(h,Math.pow(o,.8)),d=(1-o*.9)*Math.min(1,r/4);u.x+=Math.sin(Bt.bob)*.012*d+Bt.sway.x,u.y+=Math.abs(Math.cos(Bt.bob))*.014*d+Bt.sway.y-(i.stance==="crouch"?.01:0),u.z+=Bt.kick*.12;let f=i.boltT>0?1-i.boltT/oa:0,p=i.boltT>0?Math.sin(Math.min(1,f*1.2)*Math.PI):0;s.setBolt(i.boltT>0?En((f-.15)/.75,0,1):0);let x=i.reloadT>0?1-i.reloadT/b0:0,m=i.reloadT>0?Math.sin(x*Math.PI):0;s.mag.position.y=-.04-(x>.15&&x<.6?Math.sin((x-.15)/.45*Math.PI)*.25:0),Bt.root.position.copy(u).add(new dt(-.04*Bt.sprintK,-.08*Bt.sprintK-.05*m,.05*Bt.sprintK)),Bt.root.rotation.set(Bt.kick*.14+Bt.sprintK*-.45+m*.3+p*.12,Bt.sprintK*.9+m*.2,Bt.sprintK*.35+p*.35+m*.5),Bt.root.updateMatrixWorld(!0),xi.updateMatrixWorld(!0);let g=s.gripPt.getWorldPosition(new dt),y=s.forePt.getWorldPosition(new dt),S=s.boltPt.getWorldPosition(new dt),M=i.boltT>0?g.clone().lerp(S,En(p*1.6,0,1)):i.reloadT>0?g.clone().lerp(s.mag.getWorldPosition(new dt),Math.sin(En(x*1.2,0,1)*Math.PI)):g,T=s.root.getWorldQuaternion(new Qe);Pc(Bt.armR,ea(M,T,"grip"),xi.localToWorld(new dt(1.2,-1.2,.4))),Pc(Bt.armL,ea(y,T,"fore"),xi.localToWorld(new dt(-.6,-1.4,-.2))),ta(Bt.armR,T,"grip"),ta(Bt.armL,T,"fore"),Bt.root.visible=Bt.armL.sh.visible=Bt.armR.sh.visible=o<.88&&!Yt.tpp&&i.alive&&!Pn,i.lostArm[0]&&(Bt.armL.sh.visible=!1),i.lostArm[1]&&(Bt.armR.sh.visible=!1)}var Me={joy:null,jx:0,jz:0,jmag:0,sprintLock:!1,look:null,lookDX:0,lookDY:0,keys:{},fireHeld:null,mouseDown:!1,rmb:!1},hs=it("ctl");function zv(){let n=(i,s)=>i<innerWidth*.42&&s>innerHeight*.3,t=new Map;hs.addEventListener("touchstart",i=>{Vt.resume();for(let s of i.changedTouches){let r=s.target.closest&&s.target.closest(".b");if(r){i.preventDefault(),Lc(r.id,!0,s),t.set(s.identifier,{btn:r.id,x:s.clientX,y:s.clientY});continue}if(!Me.joy&&n(s.clientX,s.clientY)){Me.joy={id:s.identifier,x:s.clientX,y:s.clientY};let o=it("joyBase");o.classList.remove("hide"),o.style.left=s.clientX+"px",o.style.top=s.clientY+"px",t.set(s.identifier,{joy:!0})}else Me.look||(Me.look={id:s.identifier,x:s.clientX,y:s.clientY},t.set(s.identifier,{look:!0}))}},{passive:!1}),hs.addEventListener("touchmove",i=>{i.preventDefault();for(let s of i.changedTouches){let r=t.get(s.identifier);if(r){if(r.joy){let o=parseFloat(getComputedStyle(it("joyBase")).width)/2,a=(s.clientX-Me.joy.x)/o,l=(s.clientY-Me.joy.y)/o,c=Math.hypot(a,l);Me.sprintLock=l<-1.45&&Math.abs(a)<.8,c>1&&(a/=c,l/=c),Me.jx=a,Me.jz=l,Me.jmag=Math.min(1,c),it("joyKnob").style.transform=`translate(${a*o*.6}px,${l*o*.6}px)`,it("sprintLock").classList.toggle("on",Me.sprintLock)}else if(r.look||r.btn==="fireR"||r.btn==="fireL"){let o=r.look?Me.look:r,a=s.clientX-o.x,l=s.clientY-o.y;o.x=s.clientX,o.y=s.clientY,Me.lookDX+=a,Me.lookDY+=l}}}},{passive:!1});let e=i=>{for(let s of i.changedTouches){let r=t.get(s.identifier);r&&(t.delete(s.identifier),r.joy?(Me.joy=null,Me.jx=Me.jz=Me.jmag=0,it("joyBase").classList.add("hide"),it("joyKnob").style.transform="",Me.sprintLock):r.look?Me.look=null:r.btn&&Lc(r.btn,!1,s))}};hs.addEventListener("touchend",e),hs.addEventListener("touchcancel",e),hs.addEventListener("mousedown",i=>{let s=i.target.closest(".b");if(s&&!document.pointerLockElement){Lc(s.id,!0,i);let r=()=>{Lc(s.id,!1,i),removeEventListener("mouseup",r)};addEventListener("mouseup",r)}})}function Lc(n,t,e){let i=Lt;if(!i)return;let s=it(n);if(s&&s.classList.toggle("press",t),(n==="fireR"||n==="fireL")&&(t?(Me.fireHeld=n,Yt.fireMode==="tap"||i.adsToggle?Vc():(i.adsWant=!0,i.fireOnRelease=!0)):Me.fireHeld===n&&(Me.fireHeld=null,i.fireOnRelease&&(i.fireOnRelease=!1,Vc(),i.adsToggle||(i.adsWant=!1)))),!!t){if(Vt.play("ui",{vol:.25}),n==="adsBtn"&&(i.adsToggle=!i.adsToggle,i.adsWant=i.adsToggle,it("adsBtn").classList.toggle("on",i.adsToggle)),n==="jumpBtn"&&A0(i),n==="crouchBtn"&&R0(i),n==="proneBtn"){if(i.lostLeg[0]&&i.lostLeg[1])return;i.stance=i.stance==="prone"?"stand":"prone",Vt.play("cloth",{vol:.5})}if(n==="reloadBtn"&&Bs(i),n==="camBtn"&&C0(),n==="pauseBtn"&&td(!0),n==="actBtn"){i.wantAct=!0,zr(i);let r=()=>{i.wantAct=!1};addEventListener("touchend",r,{once:!0}),addEventListener("mouseup",r,{once:!0})}}}function Vc(){let n=Lt;if(n.alive){if(!Zu(n)){n.mag<=0&&Bs(n);return}$u(n,n.dir())}}function A0(n){if(!(!n.alive||!n.onGround||Q.phase==="pre"||n.lostLeg[0]&&n.lostLeg[1])){if(n.stance!=="stand"){n.stance="stand";return}n.vel.y=5.4,n.onGround=!1,Vt.play("cloth",{vol:.4})}}function R0(n){if(n.alive){if(n.sprint&&n.stance==="stand"&&Math.hypot(n.vel.x,n.vel.z)>4){n.slideT=.7,n.stance="crouch",n.slideDir.set(n.vel.x,0,n.vel.z).normalize(),Vt.play("whoosh",{vol:.4});return}n.stance=n.stance==="crouch"?"stand":"crouch",Vt.play("cloth",{vol:.35})}}function C0(){Yt.tpp=Yt.tpp?0:1,Gr(),it("camBtn").textContent=Yt.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0",Lt&&Lt.setFirstPerson(!Yt.tpp)}function Gv(){addEventListener("keydown",n=>{if(Q.phase==="lobby"||!Lt)return;Me.keys[n.code]=!0;let t=Lt;n.code==="Space"&&A0(t),(n.code==="KeyC"||n.code==="ControlLeft")&&R0(t),n.code==="KeyZ"&&(t.stance=t.stance==="prone"?"stand":"prone"),n.code==="KeyR"&&Bs(t),n.code==="KeyV"&&C0(),(n.code==="KeyF"||n.code==="KeyE")&&(t.wantAct=!0,zr(t)),n.code==="Escape"&&td(!0)}),addEventListener("keyup",n=>{Me.keys[n.code]=!1,(n.code==="KeyF"||n.code==="KeyE")&&Lt&&(Lt.wantAct=!1)}),Ye.domElement.addEventListener("mousedown",n=>{if(Vt.resume(),!(Q.phase==="lobby"||!Lt)){if(!document.pointerLockElement&&!yi){Ye.domElement.requestPointerLock();return}n.button===0&&Vc(),n.button===2&&(Lt.adsWant=!0,Me.rmb=!0)}}),hs.addEventListener("mousedown",n=>{!yi&&!n.target.closest(".b")&&Q.phase!=="lobby"&&(document.pointerLockElement||Ye.domElement.requestPointerLock())}),addEventListener("mouseup",n=>{n.button===2&&Lt&&(Lt.adsWant=!1,Me.rmb=!1)}),addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{document.pointerLockElement&&(Me.lookDX+=n.movementX*.6,Me.lookDY+=n.movementY*.6)}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement&&hs.addEventListener("mousedown",P0)})}function P0(n){!document.pointerLockElement||!Lt||(n.button===0&&Vc(),n.button===2&&(Lt.adsWant=!0))}addEventListener("mousedown",n=>{document.pointerLockElement&&n.target===document.body&&P0(n)});function Vv(n){let t=Lt,e=(t.ads>.5?Yt.sensAds:Yt.sens)*(yi?.0042:.0026),i=Me.lookDX,s=Me.lookDY;Me.lookDX=Me.lookDY=0,t.alive&&!Pn&&(t.yaw-=i*e,t.pitch=En(t.pitch-s*e,-1.35,1.35));let r=Me.jx,o=Me.jz,a=Me.jmag,l=Me.keys;if(l.KeyW||l.KeyA||l.KeyS||l.KeyD){r=(l.KeyD?1:0)-(l.KeyA?1:0),o=(l.KeyS?1:0)-(l.KeyW?1:0);let x=Math.hypot(r,o)||1;r/=x,o/=x,a=l.AltLeft?.4:1}let c=(Me.sprintLock||l.ShiftLeft)&&o<-.5&&t.stance==="stand"&&t.ads<.3&&t.boltT<=0&&t.reloadT<=0;t.sprint=c,c&&t.adsWant&&!t.fireOnRelease&&(t.adsWant=!1);let h=new dt(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),d=new dt(Math.cos(t.yaw),0,-Math.sin(t.yaw)).multiplyScalar(r).add(h.multiplyScalar(-o));t.alive&&T0(t,{x:d.x,z:d.z,mag:a,sprint:c},n),kv(n,i,s);let f=Q.bomb,p=null;if(t.alive&&Q.phase==="live"&&f.carrier===t)for(let x of["A","B"])t.pos.distanceTo(qn[x])<2.4&&(p="\u8A2D\u7F6E");t.alive&&Q.phase==="planted"&&t.team!==Q.attack&&t.pos.distanceTo(f.pos)<2&&(p="\u89E3\u9664"),it("actBtn").classList.toggle("hide",!p),p&&(it("actBtn").textContent=p),Vu>0?Vu-=n:yi?it("tip").classList.add("hide"):(it("tip").classList.toggle("hide",!p),p&&(it("tip").textContent=`F\u9577\u62BC\u3057\u3067${p}`)),it("bombHave").classList.toggle("hide",f.carrier!==t),t.wantAct&&!f.planting&&!f.defusing&&p&&zr(t)}function Wv(n,t){let e=n.adsWant&&n.alive&&n.boltT<=0&&n.reloadT<=0&&!n.sprint&&!(n.kickedOut&&n.boltT>0),i=n.ads;if(n.ads=En(n.ads+(e?t/fv:-t/.18),0,1),n.isPlayer&&i===0&&n.ads>0&&Vt.play("cloth",{vol:.35,rate:1.3}),n.boltT>0){if(n.boltT-=t,n.isPlayer||n.pos.distanceTo(Lt.pos)<25){let r=1-n.boltT/oa;r>.25&&n.boltPlayed===0&&(n.boltPlayed=1,Vt.play("bolt1",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3})),r>.6&&n.boltPlayed===1&&(n.boltPlayed=2,Vt.play("bolt2",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3}),Xv(n))}n.boltT<=0&&(n.boltT=0,n.kickedOut=!1,n.mag===0&&Bs(n))}if(n.reloadT>0&&(n.reloadT-=t,n.reloadT<=0)){let r=Math.min(5-n.mag,n.reserve);n.mag+=r,n.reserve-=r,n.reloadT=0}n.revealT>0&&(n.revealT-=t);let s=n.veg;s.root.position.set(n.pos.x,n.pos.y,n.pos.z),n.alive&&s.root.rotation.set(0,n.yaw,0),s.speed=Math.hypot(n.vel.x,n.vel.z)*(n.onGround?1:.3),s.run=n.sprint?1:0,s.crouch=gi(s.crouch,n.stance==="crouch"||n.slideT>0?1:0,10,t),s.prone=gi(s.prone,n.stance==="prone"?1:0,6,t),s.pitch=n.pitch,s.ads=n.ads,s.air=n.onGround?0:1,s.recoil=gi(s.recoil,0,10,t),s.boltT=n.boltT>0?Math.sin((1-n.boltT/oa)*Math.PI):0,n.lostArm[0]&&n.lostArm[1]&&(s.aim.visible=!1),s.update(t),s.gun.setBolt(n.boltT>0?En((1-n.boltT/oa-.15)/.75,0,1):0)}function Xv(n){let t=Zp(),e,i;n.isPlayer&&!Yt.tpp?e=n.eye().add(n.dir().multiplyScalar(.5)).add(new dt(Math.cos(n.yaw)*.15,-.15,-Math.sin(n.yaw)*.15)):e=n.veg.gun.ejectPt.getWorldPosition(new dt),i=new dt(Math.cos(n.yaw)*2.2,2,-Math.sin(n.yaw)*2.2),t.position.copy(e),Re.add(t),Hr(t,i,new dt(20,5,10),{r:.008})}var ku=0,Dc=0,Ur=0,p0=74;function qv(n){if(cs&&cs.t>0&&!Lt.alive&&Q.phase!=="post"){cs.t-=n;let o=cs.by;if(o){let a=o.eye();xe.position.copy(cs.at).add(new dt(0,.3,0));let l=new dt().subVectors(a,xe.position),c=Math.atan2(-l.x,-l.z),h=Math.atan2(l.y,Math.hypot(l.x,l.z));xe.rotation.set(h,c,0);let u=En(2.8-cs.t,0,1),d=aa(p0,En(800/Math.max(5,l.length()),12,60),u);xe.fov=d,xe.updateProjectionMatrix(),it("kcam").classList.remove("hide"),it("kcamN").textContent=`${o.name}\uFF08HP ${Math.max(0,Math.round(o.hp))}\uFF09`,it("scope").style.display="none",it("cross").style.display="none",Vt.listener.x=xe.position.x,Vt.listener.z=xe.position.z,Vt.listener.yaw=c;return}}it("kcam").classList.add("hide");let t=Lt,e=Yt.tpp;if(Pn&&(!Lt.alive||Q.phase==="post")&&(t=(Pn.alive,Pn),e=!0,!t.alive)){let o=De.find(a=>a.team===Lt.team&&a.alive);o&&(Pn=t=o)}let i=t.eye(),s=t===Lt?t.ads:0;if(e&&s<.85){let o=t.stance==="prone"?2:2.6,a=t.dir(),l=new dt(Math.cos(t.yaw),0,-Math.sin(t.yaw)),c=i.clone().add(new dt(0,.32,0)).addScaledVector(l,.8),h=a.clone().multiplyScalar(-o),u=la(c,h.clone().normalize(),o+.3),d=u?Math.max(.3,u.t-.3):o;xe.position.copy(c).addScaledVector(h.normalize(),d),xe.rotation.set(t.pitch,t.yaw,0)}else if(xe.position.copy(i),xe.rotation.set(t.pitch,t.yaw,0),t===Lt){let o=Math.hypot(t.vel.x,t.vel.z)*(t.onGround?1:0)*(1-t.ads);ku+=n*o*1.9;let a=Math.min(1,o/5)*.035;xe.position.y+=Math.abs(Math.sin(ku))*a-Dc,xe.rotation.z=Math.sin(ku)*a*.12,t.onGround?(Ur>.25&&(Dc=.08*Ur),Ur=0):Ur=Math.min(Ur+n,1),Dc=gi(Dc,0,8,n)}if(t===Lt&&t.ads>.5){let o=Q.time,a=(t.stance==="prone"?6e-4:t.stance==="crouch"?.0015:.0026)*(1+Math.min(2,Math.hypot(t.vel.x,t.vel.z)));xe.rotation.x+=Math.sin(o*1.3)*a+Math.sin(o*2.7)*a*.4,xe.rotation.y+=Math.cos(o*.9)*a*1.2}Fr>0&&(Fr=Math.max(0,Fr-n),xe.rotation.x+=(Math.random()-.5)*Fr*.04,xe.rotation.y+=(Math.random()-.5)*Fr*.04),t===Lt&&Bt.kick>.05&&(xe.rotation.x+=Bt.kick*.03);let r=aa(p0,13,Math.pow(s,1.5));Math.abs(xe.fov-r)>.01&&(xe.fov=r,xe.updateProjectionMatrix()),Vt.listener.x=xe.position.x,Vt.listener.y=xe.position.y,Vt.listener.z=xe.position.z,Vt.listener.yaw=t.yaw,it("scope").style.display=s>.88&&t===Lt?"block":"none",it("cross").style.display=s>.3||!Lt.alive?"none":"block"}var Wu=new Map;function Yv(){for(let n of De){let t=Wu.get(n);t||(t=new hr(new vs({map:v0,transparent:!0,blending:As,depthWrite:!1,depthTest:!0,fog:!1})),Re.add(t),Wu.set(n,t));let e=n.alive&&!n.isPlayer&&n.ads>.6&&!n.veg.dead;if(t.visible=!1,!e)continue;let i=n.veg.gun.lens.getWorldPosition(new dt),s=new dt().subVectors(xe.position,i),r=s.length();s.normalize();let o=n.dir().dot(s);o<.85||(t.visible=!0,t.position.copy(i).addScaledVector(s,.05),t.scale.setScalar(En(r*.035,.25,2.5)*(.8+Math.random()*.3)*(o-.8)*4))}}var Xu=it("minimap"),Zv=Xu.getContext("2d"),Oc=[];function $v(){Oc.push([-6,-17.5,5.5,-9.5,"#c8b878"],[5.5,-17,10.5,-9.8,"#a89858"],[-5.5,9.5,6,17.5,"#78a0b8"],[-10.5,9.8,-5.5,17,"#5a8098"]),Oc.push([-26.5,-17.1,-22.5,-13.9,"#8a6a4a"],[20.5,18.9,24.5,22.1,"#8a6a4a"],[16,-19.8,21,-16.2,"#c8d8d0"]),Oc.push([-3.3,-2.85,6.3,-.35,"#e0a020"])}function Jv(){let n=Xu.width,t=Xu.height,e=Zv,i=Lt.alive||!Pn?Lt:Pn;e.clearRect(0,0,n,t),e.save(),e.beginPath(),e.roundRect?e.roundRect(0,0,n,t,16):e.rect(0,0,n,t),e.clip(),e.fillStyle="rgba(40,60,40,.55)",e.fillRect(0,0,n,t);let s=n/46;e.translate(n/2,t/2),e.rotate(i.yaw),e.scale(s,s),e.translate(-i.pos.x,-i.pos.z),e.fillStyle="rgba(60,60,64,.9)",e.fillRect(-40,-4,80,8),e.fillStyle="rgba(150,150,140,.8)",e.fillRect(-40,-5.7,80,1.7),e.fillRect(-40,4,80,1.7);for(let a of Oc)e.fillStyle=a[4],e.fillRect(a[0],a[1],a[2]-a[0],a[3]-a[1]);e.strokeStyle="rgba(255,255,255,.3)",e.lineWidth=.3,e.strokeRect(Fe.minX,Fe.minZ,Fe.maxX-Fe.minX,Fe.maxZ-Fe.minZ);for(let a of["A","B"]){let l=qn[a];e.fillStyle="rgba(255,200,40,.35)",e.beginPath(),e.arc(l.x,l.z,2.4,0,7),e.fill(),e.save(),e.translate(l.x,l.z),e.rotate(-i.yaw),e.fillStyle="#ffd040",e.font="bold 3px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(a,0,0),e.restore()}let r=Q.bomb;(r.state==="dropped"||r.state==="planted"||r.state==="carried"&&r.carrier&&r.carrier.team===Lt.team)&&(e.save(),e.translate(r.pos.x,r.pos.z),e.rotate(-i.yaw),e.fillStyle=r.state==="planted"?Math.floor(Q.time*4)%2?"#ff3020":"#ffd040":"#ffa020",e.fillRect(-1,-.7,2,1.4),e.restore());for(let a of De){if(!a.alive)continue;let l=a.team===Lt.team;!l&&a.revealT<=0&&!(a.ai&&a.ai.target===Lt&&a.ads>.5&&!1)||(e.save(),e.translate(a.pos.x,a.pos.z),e.rotate(-a.yaw),a===Lt?(e.fillStyle="#ffe060",e.beginPath(),e.moveTo(0,-1.8),e.lineTo(1.2,1.2),e.lineTo(0,.5),e.lineTo(-1.2,1.2),e.closePath(),e.fill()):(e.fillStyle=l?"#4aa8ff":"#ff4030",e.beginPath(),e.arc(0,0,1,0,7),e.fill(),l&&(e.beginPath(),e.moveTo(0,-2),e.lineTo(.7,-.6),e.lineTo(-.7,-.6),e.fill())),e.restore())}e.restore(),e.fillStyle="rgba(255,255,255,.7)",e.font="bold 20px sans-serif",e.textAlign="center";let o=i.yaw;e.save(),e.translate(n/2,t/2),e.rotate(o),e.fillText("N",0,-t/2+22),e.restore()}function Kv(n){let t=Lt;hs.classList.toggle("dead",!t.alive);let e=Math.max(0,(Q.phase==="pre",Q.timer)),i=Math.floor(e/60),s=Math.floor(e%60);it("timer").textContent=Q.phase==="pre"?Math.ceil(e)+"":`${i}:${String(s).padStart(2,"0")}`,it("timer").classList.toggle("bomb",Q.phase==="planted"),it("amC").textContent=t.mag,it("amR").textContent=t.reserve,it("amS").textContent=t.reloadT>0?"\u30EA\u30ED\u30FC\u30C9\u4E2D\u2026":t.boltT>0?"\u30DC\u30EB\u30C8\u64CD\u4F5C\u4E2D\u2026":"\u30DC\u30EB\u30C8\u30A2\u30AF\u30B7\u30E7\u30F3",it("hpf").style.width=Math.max(0,t.hp)+"%",it("hpf").classList.toggle("low",t.hp<50);let r=De.filter(l=>l.team===0),o=De.filter(l=>l.team===1);it("ia0").classList.toggle("dead",!r[0].alive),it("ia1").classList.toggle("dead",!r[1].alive),it("ie0").classList.toggle("dead",!o[0].alive),it("ie1").classList.toggle("dead",!o[1].alive),Uc>0&&(Uc-=n,Uc<=0&&(it("killnote").innerHTML="")),sa>0&&(sa-=n,sa<=0&&(it("cmsg").textContent="",it("csub").textContent="")),Fc>0&&(Fc-=n,it("hitmark").style.opacity=Math.max(0,Fc/.25)),Q.phase==="pre"&&(it("cmsg").textContent=Math.ceil(Q.timer)<=3?Math.ceil(Q.timer):`\u30E9\u30A6\u30F3\u30C9 ${Q.round}`,sa=.2),Jv(),jv();let a="";if(Lt.alive){let l=xe.position,c=new dt(0,0,-1).applyQuaternion(xe.quaternion),h=la(l,c,150),u=h?h.t:150;for(let d of De)if(!(d.team===Lt.team||!d.alive)){for(let f of d.veg.computeHitSpheres()){let p=y0(l,c,f.c,f.r*1.6);if(p>0&&p<u){a=d.name;break}}if(a)break}}it("aimName").textContent=a}var qu=new Map;function Qv(n,t,e,i){let s=qu.get(n);s||(s=document.createElement("div"),it("marks").appendChild(s),qu.set(n,s));let r=i.clone().project(xe),o=r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1;s.style.display=o?"block":"none",o&&(s.className="mk "+t,s._h!==e&&(s.innerHTML=e,s._h=e),s.style.left=(r.x+1)/2*100+"%",s.style.top=(1-r.y)/2*100+"%")}function jv(){let n=new Set,t=Lt.alive||!Pn?Lt:Pn,e=Lt.ads>.88,i=(o,...a)=>{n.add(o),e||Qv(o,...a)};for(let o of De)o!==Lt&&o!==Pn&&o.team===Lt.team&&o.alive&&i("n"+o.name,"ally",`${o.name}<span class="ar"></span>`,o.eye().add(new dt(0,.55,0)));let s=Q.bomb,r=o=>Math.round(o.distanceTo(t.pos))+"m";if(Q.phase==="live"&&(s.carrier===Lt||Lt.team!==Q.attack||s.carrier?.team===Lt.team))for(let o of["A","B"])i("s"+o,"site",`<i>${o}</i><small>${r(qn[o])}</small>`,qn[o].clone().add(new dt(0,2.2,0)));s.state==="planted"&&i("bomb","bomb",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new dt(0,1.2,0))),s.state==="dropped"&&Lt.team===Q.attack&&i("bombd","bomb drop",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new dt(0,1,0)));for(let[o,a]of qu)(!n.has(o)||e||Q.phase==="post")&&(a.style.display="none")}function t1(){mi||(mi=Pv(),Re.add(mi));let n=Q.bomb;if(mi.visible=n.state==="dropped"||n.state==="planted"||n.state==="defused"||!!n.planting,n.planting&&n.state!=="planted"){let t=n.planting;t.stance="crouch";let e=new dt(-Math.sin(t.yaw),0,-Math.cos(t.yaw));n.pos.copy(t.pos).addScaledVector(e,.55),n.pos.y=Us(n.pos.x,n.pos.z,t.pos.y+.3)}n.defusing&&(n.defusing.stance="crouch"),mi.visible&&(mi.position.copy(n.pos),mi.userData.scr.material.color.setHex(n.state==="planted"&&Math.floor(Q.time*(n.fuse<6?8:2))%2?16724e3:4198416),n.state==="dropped"&&(mi.rotation.y+=.02))}var zi=null,zu=0,Wc=["carrot","tomato","potato","pepper"],e1={carrot:"\u7D30\u8EAB\u3067\u982D\u304C\u5C0F\u3055\u3044",tomato:"\u307E\u3093\u307E\u308B\u3002\u3064\u3084\u3064\u3084",potato:"\u305A\u3063\u3057\u308A\u3002\u3067\u3053\u307C\u3053",pepper:"\u3064\u3084\u3064\u3084\u306E\u7DD1"};function ju(){window.VW_INGAME=!1,Q.phase="lobby";for(let n of De)n.dispose();De=[],Lt=null,S0(),mi&&(mi.visible=!1);for(let n of Wu.values())n.visible=!1;it("hud").classList.add("hide"),it("ctl").classList.add("hide"),it("lobby").classList.remove("hide"),it("result").classList.add("hide"),it("pause").classList.add("hide"),it("helpTxt").innerHTML=yi?"\u5DE6\u5074\u3092\u306A\u305E\u3063\u3066\u79FB\u52D5\uFF08\u4E0A\u306B\u5012\u3057\u304D\u308B\u3068\u30C0\u30C3\u30B7\u30E5\uFF09<br>\u53F3\u5074\u3092\u306A\u305E\u3063\u3066\u8996\u70B9<br>\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F\u30FB\u96E2\u3059\u3068\u767A\u5C04<br>\u53F3\u306E\u7167\u6E96\u30DC\u30BF\u30F3\uFF1A\u8997\u304D\u3063\u3071\u306A\u3057\u306B\u5207\u66FF<br>\u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09\u30FB\u4F0F\u305B\u30FB\u30B8\u30E3\u30F3\u30D7<br>\u30B5\u30A4\u30C8\u3067\u300C\u8A2D\u7F6E\u300D\u300C\u89E3\u9664\u300D\u3092\u9577\u62BC\u3057":"WASD \u79FB\u52D5 / Shift \u30C0\u30C3\u30B7\u30E5 / Alt \u305D\u30FC\u3063\u3068\u6B69\u304F<br>\u30DE\u30A6\u30B9 \u8996\u70B9 / \u5DE6\u30AF\u30EA\u30C3\u30AF \u6483\u3064 / \u53F3\u30AF\u30EA\u30C3\u30AF \u8997\u304F<br>Space \u30B8\u30E3\u30F3\u30D7 / C \u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09 / Z \u4F0F\u305B<br>R \u30EA\u30ED\u30FC\u30C9 / F \u9577\u62BC\u3057\u3067\u8A2D\u7F6E\u30FB\u89E3\u9664 / V \u8996\u70B9\u5207\u66FF",Xc(),Vt.bgm(!1)}function Xc(){zi&&Re.remove(zi.root),zi=new Dr(Yt.kind,0,{lod:1,hat:Yt.hat,camo:Yt.camo}),Re.add(zi.root),it("hatName").textContent=Nr.find(n=>n.id===Yt.hat).name,it("camoName").textContent=Jo.find(n=>n.id===Yt.camo).name,zi.root.position.set(-6,.15,4.9),it("charName").innerHTML=`${Hi[Yt.kind]}<small>${e1[Yt.kind]}</small>`}function n1(n){zu+=n;let t=zi;t.root.rotation.y=Math.PI+.5+Math.sin(zu*.4)*.25,t.speed=0,t.pitch=-.15+Math.sin(zu*.7)*.03,t.run=0,t.ads=0,t.update(n),xe.position.set(-6-1.2,1.2,4.9+2.7),xe.lookAt(-6+.6,1,4.9),Math.abs(xe.fov-50)>.01&&(xe.fov=50,xe.updateProjectionMatrix())}it("prevC").onclick=()=>{Yt.kind=Wc[(Wc.indexOf(Yt.kind)+3)%4],Gr(),Xc(),Vt.resume(),Vt.play("ui")};it("nextC").onclick=()=>{Yt.kind=Wc[(Wc.indexOf(Yt.kind)+1)%4],Gr(),Xc(),Vt.resume(),Vt.play("ui")};var qc=(n,t,e)=>{let i=n.findIndex(s=>s.id===Yt[t]);Yt[t]=n[(i+e+n.length)%n.length].id,Gr(),Xc(),Vt.resume(),Vt.play("ui")};it("hatP").onclick=()=>qc(Nr,"hat",-1);it("hatN").onclick=()=>qc(Nr,"hat",1);it("camoP").onclick=()=>qc(Jo,"camo",-1);it("camoN").onclick=()=>qc(Jo,"camo",1);it("startBtn").onclick=async()=>{await Vt.init(),Vt.resume(),Vt.play("ui"),zi&&(Re.remove(zi.root),zi=null),it("lobby").classList.add("hide"),it("hud").classList.remove("hide"),it("ctl").classList.remove("hide"),it("camBtn").textContent=Yt.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0";try{yi&&document.documentElement.requestFullscreen&&!document.fullscreenElement&&await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}yi||Ye.domElement.requestPointerLock(),E0(),Yt.bgm&&Vt.bgm(!0),Vt.wind(!0)};it("againBtn").onclick=()=>{it("result").classList.add("hide"),it("ctl").classList.remove("hide"),E0(),Yt.bgm&&Vt.bgm(!0)};it("toLobby").onclick=()=>ju();function td(n){n?(Q.paused=!0,it("pause").classList.remove("hide"),document.pointerLockElement&&document.exitPointerLock()):(Q.paused=!1,it("pause").classList.add("hide"),!yi&&Lt&&Ye.domElement.requestPointerLock())}it("resumeBtn").onclick=()=>td(!1);it("quitBtn").onclick=()=>{Q.paused=!1,Vt.wind(!1),ju()};it("pSetBtn").onclick=()=>it("settings").classList.remove("hide");it("setBtn").onclick=()=>it("settings").classList.remove("hide");it("setClose").onclick=()=>{it("settings").classList.add("hide"),Gr()};it("sens").value=Yt.sens;it("sensAds").value=Yt.sensAds;it("sens").oninput=n=>Yt.sens=+n.target.value;it("sensAds").oninput=n=>Yt.sensAds=+n.target.value;function Yc(n,t,e){let i=it(n);i.querySelectorAll("button").forEach(s=>{s.classList.toggle("on",String(Yt[t])===s.dataset.v),s.onclick=()=>{Yt[t]=isNaN(+s.dataset.v)?s.dataset.v:+s.dataset.v,i.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r===s)),Gr(),e&&e()}})}Yc("fireMode","fireMode");Yc("diff","diff");Yc("bgmSeg","bgm",()=>{Q.phase!=="lobby"&&Vt.bgm(!!Yt.bgm)});Yc("quality","quality",()=>{Vr("","\u753B\u8CEA\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002\u6B21\u306B\u958B\u3044\u305F\u3068\u304D\u304B\u3089\u53CD\u6620\u3055\u308C\u307E\u3059",2)});var m0=performance.now(),Nc=0,Gu=0;function I0(n){requestAnimationFrame(I0);let t=Math.min(.05,(n-m0)/1e3);if(m0=n,Nc+=t,Gu++,Nc>2){let e=Gu/Nc;Nc=0,Gu=0,e<40&&Bi>.75?(Bi=Math.max(.75,Bi-.15),Ye.setPixelRatio(Bi),Bc()):e>58&&Bi<Math.min(devicePixelRatio,Yt.quality===2?2:1.5)&&(Bi=Math.min(Bi+.1,2),Ye.setPixelRatio(Bi),Bc())}if(Q.phase==="lobby"){n1(t),ra();return}if(!Lt||Q.paused){ra();return}if(Q.phase==="end"){ra();return}L0(t),ra()}function L0(n){let t=n;Q.slowmo>0&&(Q.slowmo-=n,t=n*.25),Cv(t),Vv(t);for(let e of De)e.ai&&Uv(e,t);for(let e of De)Wv(e,t);dv(t),t1(),Yv(),qv(n),Kv(n)}function ra(){Iu.time.value=performance.now()/1e3,Ye.clear(),Ye.render(Re,xe),Q.phase!=="lobby"&&Lt&&Bt.root.visible&&(Ye.clearDepth(),Ye.render(Vi,xi))}zv();Gv();$v();window.__vw={kill:Ku,endRound:kr,render:ra,renderer:Ye,vm:Bt,vmCam:xi,V3:dt,sim(n){for(let t=0;t<n*30&&Q.phase!=="end";t++)L0(1/30)},game:Q,get player(){return Lt},get fighters(){return De},camera:xe,scene:Re,CFG:Yt,startRound:Qu,tryAct:zr,fire:$u};iv().then(()=>requestAnimationFrame(I0));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
