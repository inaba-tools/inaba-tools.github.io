(()=>{var Ef=0,ru=1,wf=2;var qs=1,Tf=2,zr=3,bs=0,un=1,ln=2,Ys=0,Ss=1,Zs=2,ou=3,au=4,Af=5;var $s=100,Rf=101,Cf=102,Pf=103,If=104,Lf=200,Df=201,Nf=202,Uf=203,lu=204,cu=205,Ff=206,Of=207,Bf=208,Hf=209,kf=210,Gf=211,zf=212,Vf=213,Wf=214,dl=0,fl=1,pl=2,Ar=3,ml=4,gl=5,xl=6,_l=7,Zl=0,Xf=1,qf=2,Ei=0,hu=1,uu=2,du=3,Qo=4,fu=5,pu=6,mu=7;var gu=300,Js=301,Vr=302,$l=303,Jl=304,Gs=1e3,xi=1001,yl=1002,_n=1003,Yf=1004;var ta=1005;var In=1006,Kl=1007;var Yi=1008;var Bn=1009,xu=1010,_u=1011,Wr=1012,jl=1013,li=1014,ti=1015,ci=1016,Ql=1017,tc=1018,Ks=1020,yu=35902,Mu=35899,vu=1021,bu=1022,hi=1023,zi=1026,Zi=1027,ec=1028,nc=1029,Es=1030,ic=1031;var sc=1033,ea=33776,na=33777,ia=33778,sa=33779,rc=35840,oc=35841,ac=35842,lc=35843,cc=36196,hc=37492,uc=37496,dc=37488,fc=37489,ra=37490,pc=37491,mc=37808,gc=37809,xc=37810,_c=37811,yc=37812,Mc=37813,vc=37814,bc=37815,Sc=37816,Ec=37817,wc=37818,Tc=37819,Ac=37820,Rc=37821,Cc=36492,Pc=36494,Ic=36495,Lc=36283,Dc=36284,oa=36285,Nc=36286;var Eo=2300,Ml=2301,hl=2302,Zh=2303,$h=2400,Jh=2401,Kh=2402;var Zf=3200;var aa=0,$f=1,$i="",hn="srgb",wo="srgb-linear",To="linear",Ue="srgb";var ul=7680;var Jf=519,Kf=512,jf=513,Qf=514,Su=515,tp=516,ep=517,Eu=518,wu=519,Tu=35044;var Au="300 es",Jn=2e3,Rr=2001;function mm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function gm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function np(){let n=Ao("canvas");return n.style.display="block",n}var Vd={},Cr=null;function Ro(...n){let t="THREE."+n.shift();Cr?Cr("log",t,...n):console.log(t,...n)}function ip(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function jt(...n){n=ip(n);let t="THREE."+n.shift();if(Cr)Cr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function te(...n){n=ip(n);let t="THREE."+n.shift();if(Cr)Cr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ks(...n){let t=n.join(" ");t in Vd||(Vd[t]=!0,jt(...n))}function sp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var rp={[dl]:dl,[pl]:xl,[ml]:ml,[Ar]:gl,[fl]:fl,[xl]:pl,[_l]:_l,[gl]:Ar},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bh=Math.PI/180,vl=180/Math.PI;function ws(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function _e(n,t,e){return Math.max(t,Math.min(e,n))}function xm(n,t){return(n%t+t)%t}function Sh(n,t,e){return(1-e)*n+e*t}function op(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Uc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ap(n,t){if(t.constructor===Float32Array)return n;let e=Uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function lp(n,t){if(t.constructor===Float32Array)return n;let e=Uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Du=class Du{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Du.prototype.isVector2=!0;var ct=Du,nn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,a=Math.sin(a*y)/S,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nu=class Nu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Eh.copy(this).projectOnVector(t),this.sub(Eh)}reflect(t){return this.sub(Eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nu.prototype.isVector3=!0;var N=Nu,Eh=new N,Wd=new nn,Uu=class Uu{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],S=s[4],v=s[7],A=s[2],R=s[5],_=s[8];return r[0]=o*x+a*y+l*A,r[3]=o*m+a*S+l*R,r[6]=o*g+a*v+l*_,r[1]=c*x+h*y+u*A,r[4]=c*m+h*S+u*R,r[7]=c*g+h*v+u*_,r[2]=d*x+f*y+p*A,r[5]=d*m+f*S+p*R,r[8]=d*g+f*v+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(t,e)),this}rotate(t){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-t)),this}translate(t,e){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Uu.prototype.isMatrix3=!0;var ae=Uu,wh=new ae,Xd=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qd=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _m(){let n={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ue&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ue&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?To:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wo]:{primaries:t,whitePoint:i,transfer:To,toXYZ:Xd,fromXYZ:qd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:Xd,fromXYZ:qd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}var Ce=_m();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var lr,bl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{lr===void 0&&(lr=Ao("canvas")),lr.width=t.width,lr.height=t.height;let s=lr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=lr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ao("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gi(e[i]/255)*255):e[i]=Gi(e[i]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ym=0,Pr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Th(s[o].image)):r.push(Th(s[o]))}else r=Th(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Mm=0,Ah=new N,Ln=class n extends _i{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=xi,s=xi,r=In,o=Yi,a=hi,l=Bn,c=n.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ws(),this.name="",this.source=new Pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=gu;Ln.DEFAULT_ANISOTROPY=1;var Fu=class Fu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(f+1)/2,A=(g+1)/2,R=(h+d)/4,_=(u+x)/4,b=(p+m)/4;return S>v&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=_/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=b/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fu.prototype.isVector4=!0;var qe=Fu,Sl=class extends _i{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ln({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Pr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends Sl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Co=class extends Ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends Ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Yl=class Yl{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/cr.setFromMatrixColumn(t,0).length(),r=1/cr.setFromMatrixColumn(t,1).length(),o=1/cr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vm,t,bm)}lookAt(t,e,i){let s=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),hs.crossVectors(i,kn),hs.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),hs.crossVectors(i,kn)),hs.normalize(),Ba.crossVectors(kn,hs),s[0]=hs.x,s[4]=Ba.x,s[8]=kn.x,s[1]=hs.y,s[5]=Ba.y,s[9]=kn.y,s[2]=hs.z,s[6]=Ba.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],S=i[7],v=i[11],A=i[15],R=s[0],_=s[4],b=s[8],P=s[12],T=s[1],L=s[5],O=s[9],k=s[13],D=s[2],G=s[6],q=s[10],z=s[14],lt=s[3],Z=s[7],st=s[11],rt=s[15];return r[0]=o*R+a*T+l*D+c*lt,r[4]=o*_+a*L+l*G+c*Z,r[8]=o*b+a*O+l*q+c*st,r[12]=o*P+a*k+l*z+c*rt,r[1]=h*R+u*T+d*D+f*lt,r[5]=h*_+u*L+d*G+f*Z,r[9]=h*b+u*O+d*q+f*st,r[13]=h*P+u*k+d*z+f*rt,r[2]=p*R+x*T+m*D+g*lt,r[6]=p*_+x*L+m*G+g*Z,r[10]=p*b+x*O+m*q+g*st,r[14]=p*P+x*k+m*z+g*rt,r[3]=y*R+S*T+v*D+A*lt,r[7]=y*_+S*L+v*G+A*Z,r[11]=y*b+S*O+v*q+A*st,r[15]=y*P+S*k+v*z+A*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*f-c*d,S=a*f-c*u,v=a*d-l*u,A=o*f-c*h,R=o*d-l*h,_=o*u-a*h;return e*(x*y-m*S+g*v)-i*(p*y-m*A+g*R)+s*(p*S-x*A+g*_)-r*(p*v-x*R+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*a-i*o,S=e*l-s*o,v=e*c-r*o,A=i*l-s*a,R=i*c-r*a,_=s*c-r*l,b=h*x-u*p,P=h*m-d*p,T=h*g-f*p,L=u*m-d*x,O=u*g-f*x,k=d*g-f*m,D=y*k-S*O+v*L+A*T-R*P+_*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/D;return t[0]=(a*k-l*O+c*L)*G,t[1]=(s*O-i*k-r*L)*G,t[2]=(x*_-m*R+g*A)*G,t[3]=(d*R-u*_-f*A)*G,t[4]=(l*T-o*k-c*P)*G,t[5]=(e*k-s*T+r*P)*G,t[6]=(m*v-p*_-g*S)*G,t[7]=(h*_-d*v+f*S)*G,t[8]=(o*O-a*T+c*b)*G,t[9]=(i*T-e*O-r*b)*G,t[10]=(p*R-x*v+g*y)*G,t[11]=(u*v-h*R-f*y)*G,t[12]=(a*P-o*L-l*b)*G,t[13]=(e*L-i*P+s*b)*G,t[14]=(x*S-p*A-m*y)*G,t[15]=(h*A-u*S+d*y)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=l*c,S=l*h,v=l*u,A=i.x,R=i.y,_=i.z;return s[0]=(1-(x+g))*A,s[1]=(f+v)*A,s[2]=(p-S)*A,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+g))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(p+S)*_,s[9]=(m-y)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=cr.set(s[0],s[1],s[2]).length(),a=cr.set(s[4],s[5],s[6]).length(),l=cr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ii.copy(this);let c=1/o,h=1/a,u=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,e.setFromRotationMatrix(ii),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Jn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Jn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Rr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Jn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Jn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Rr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Yl.prototype.isMatrix4=!0;var Kt=Yl,cr=new N,ii=new Kt,vm=new N(0,0,0),bm=new N(1,1,1),hs=new N,Ba=new N,kn=new N,Yd=new Kt,Zd=new nn,Kn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sm=0,$d=new N,hr=new nn,Ui=new Kt,Ha=new N,uo=new N,Em=new N,wm=new nn,Jd=new N(1,0,0),Kd=new N(0,1,0),jd=new N(0,0,1),Qd={type:"added"},Tm={type:"removed"},ur={type:"childadded",child:null},Rh={type:"childremoved",child:null},Ve=class n extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new Kn,i=new nn,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ae}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Jd,t)}rotateY(t){return this.rotateOnAxis(Kd,t)}rotateZ(t){return this.rotateOnAxis(jd,t)}translateOnAxis(t,e){return $d.copy(t).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jd,t)}translateY(t){return this.translateOnAxis(Kd,t)}translateZ(t){return this.translateOnAxis(jd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ha.copy(t):Ha.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(uo,Ha,this.up):Ui.lookAt(Ha,uo,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Ui),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qd),ur.child=t,this.dispatchEvent(ur),ur.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tm),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qd),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,t,Em),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new N(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nt=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Am={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Ch(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var oe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ce.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ce.workingColorSpace){if(t=xm(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ch(o,r,t+1/3),this.g=Ch(o,r,t),this.b=Ch(o,r,t-1/3)}return Ce.colorSpaceToWorking(this,s),this}setStyle(t,e=hn){function i(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let i=cp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Ce.workingToColorSpace(An.copy(this),t),Math.round(_e(An.r*255,0,255))*65536+Math.round(_e(An.g*255,0,255))*256+Math.round(_e(An.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.workingToColorSpace(An.copy(this),e);let i=An.r,s=An.g,r=An.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=hn){Ce.workingToColorSpace(An.copy(this),t);let e=An.r,i=An.g,s=An.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(us),this.setHSL(us.h+t,us.s+e,us.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(us),t.getHSL(ka);let i=Sh(us.h,ka.h,e),s=Sh(us.s,ka.s,e),r=Sh(us.l,ka.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new oe;oe.NAMES=cp;var Io=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new oe(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ms=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},si=new N,Fi=new N,Ph=new N,Oi=new N,dr=new N,fr=new N,tf=new N,Ih=new N,Lh=new N,Dh=new N,Nh=new qe,Uh=new qe,Fh=new qe,ki=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),si.subVectors(t,e),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){si.subVectors(s,e),Fi.subVectors(i,e),Ph.subVectors(t,e);let o=si.dot(si),a=si.dot(Fi),l=si.dot(Ph),c=Fi.dot(Fi),h=Fi.dot(Ph),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Nh.setScalar(0),Uh.setScalar(0),Fh.setScalar(0),Nh.fromBufferAttribute(t,e),Uh.fromBufferAttribute(t,i),Fh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Nh,r.x),o.addScaledVector(Uh,r.y),o.addScaledVector(Fh,r.z),o}static isFrontFacing(t,e,i,s){return si.subVectors(i,e),Fi.subVectors(t,e),si.cross(Fi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),si.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;dr.subVectors(s,i),fr.subVectors(r,i),Ih.subVectors(t,i);let l=dr.dot(Ih),c=fr.dot(Ih);if(l<=0&&c<=0)return e.copy(i);Lh.subVectors(t,s);let h=dr.dot(Lh),u=fr.dot(Lh);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(dr,o);Dh.subVectors(t,r);let f=dr.dot(Dh),p=fr.dot(Dh);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(fr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return tf.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(tf,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(i).addScaledVector(dr,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(t.matrixWorld),this.union(Ga)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fo),za.subVectors(this.max,fo),pr.subVectors(t.a,fo),mr.subVectors(t.b,fo),gr.subVectors(t.c,fo),ds.subVectors(mr,pr),fs.subVectors(gr,mr),Us.subVectors(pr,gr);let e=[0,-ds.z,ds.y,0,-fs.z,fs.y,0,-Us.z,Us.y,ds.z,0,-ds.x,fs.z,0,-fs.x,Us.z,0,-Us.x,-ds.y,ds.x,0,-fs.y,fs.x,0,-Us.y,Us.x,0];return!Oh(e,pr,mr,gr,za)||(e=[1,0,0,0,1,0,0,0,1],!Oh(e,pr,mr,gr,za))?!1:(Va.crossVectors(ds,fs),e=[Va.x,Va.y,Va.z],Oh(e,pr,mr,gr,za))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Bi=[new N,new N,new N,new N,new N,new N,new N,new N],ri=new N,Ga=new yi,pr=new N,mr=new N,gr=new N,ds=new N,fs=new N,Us=new N,fo=new N,za=new N,Va=new N,Fs=new N;function Oh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fs.fromArray(n,r);let a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=t.dot(Fs),c=e.dot(Fs),h=i.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var on=new N,Wa=new ct,Rm=0,an=class extends _i{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Tu,this.updateRanges=[],this.gpuType=ti,this.version=0,this._normalizationScale=t!==void 0?Uc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wa.fromBufferAttribute(this,e),Wa.applyMatrix3(t),this.setXY(e,Wa.x,Wa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ap(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):lp(t,this.array)}};var Lo=class extends an{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Do=class extends an{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ie=class extends an{constructor(t,e,i){super(new Float32Array(t),e,i)}},Cm=new yi,po=new N,Bh=new N,gs=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Cm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;po.subVectors(t,this.center);let e=po.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(po,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(po.copy(t.center).add(Bh)),this.expandByPoint(po.copy(t.center).sub(Bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pm=0,$n=new Kt,Hh=new Ve,xr=new N,Gn=new yi,mo=new yi,xn=new N,Ye=class n extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mm(t)?Do:Lo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ae().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return Hh.lookAt(t),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Gn.min,mo.min),Gn.expandByPoint(xn),xn.addVectors(Gn.max,mo.max),Gn.expandByPoint(xn)):(Gn.expandByPoint(mo.min),Gn.expandByPoint(mo.max))}Gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)xn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(xn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xn.fromBufferAttribute(a,c),l&&(xr.fromBufferAttribute(t,c),xn.add(xr)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new an(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;let h=new N,u=new N,d=new N,f=new ct,p=new ct,x=new ct,m=new N,g=new N;function y(P,T,L){c[P]=c[T]=c[L]=1,h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,L),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,L),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let O=1/(p.x*x.y-x.x*p.y);isFinite(O)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(O),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(O),a[P].add(m),a[T].add(m),a[L].add(m),l[P].add(g),l[T].add(g),l[L].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,T=S.length;P<T;++P){let L=S[P],O=L.start,k=L.count;for(let D=O,G=O+k;D<G;D+=3)y(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let v=new N,A=new N,R=new N,_=new N;function b(P){R.fromBufferAttribute(s,P),_.copy(R);let T=a[P];v.copy(T),v.sub(R.multiplyScalar(R.dot(T))).normalize(),A.crossVectors(_,T);let O=A.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,O)}for(let P=0,T=i.count;P<T;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new an(d,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},No=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tu,this.updateRanges=[],this.version=0,this.uuid=ws()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ef(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ef(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function ef(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ws()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Pn=new N,Lr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?Uc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix4(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyNormalMatrix(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.transformDirection(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ap(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):lp(t,this.data.array)}},kh=new N,Im=new N,Lm=new ae,oi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=kh.subVectors(i,e).cross(Im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(kh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Lm.getNormalMatrix(t),s=this.coplanarPoint(kh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Dm=0,Mi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Ss,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new oi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},zs=class extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_r,go=new N,yr=new N,Mr=new N,vr=new ct,xo=new ct,hp=new Kt,Xa=new N,_o=new N,qa=new N,nf=new ct,Gh=new ct,sf=new ct,Dr=class extends Ve{constructor(t=new zs){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new Ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new No(e,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new Lr(i,3,0,!1)),_r.setAttribute("uv",new Lr(i,2,3,!1))}this.geometry=_r,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&te('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),hp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-Mr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ya(Xa.set(-.5,-.5,0),Mr,o,yr,s,r),Ya(_o.set(.5,-.5,0),Mr,o,yr,s,r),Ya(qa.set(.5,.5,0),Mr,o,yr,s,r),nf.set(0,0),Gh.set(1,0),sf.set(1,1);let a=t.ray.intersectTriangle(Xa,_o,qa,!1,go);if(a===null&&(Ya(_o.set(-.5,.5,0),Mr,o,yr,s,r),Gh.set(0,1),a=t.ray.intersectTriangle(Xa,qa,_o,!1,go),a===null))return;let l=t.ray.origin.distanceTo(go);l<t.near||l>t.far||e.push({distance:l,point:go.clone(),uv:ki.getInterpolation(go,Xa,_o,qa,nf,Gh,sf,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Ya(n,t,e,i,s,r){vr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(xo.x=r*vr.x-s*vr.y,xo.y=s*vr.x+r*vr.y):xo.copy(vr),n.copy(t),n.x+=xo.x,n.y+=xo.y,n.applyMatrix4(hp)}var Hi=new N,zh=new N,Za=new N,$a=new N,wl=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){zh.copy(t).add(e).multiplyScalar(.5),Za.copy(e).sub(t).normalize(),$a.copy(this.origin).sub(zh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Za),a=$a.dot(this.direction),l=-$a.dot(Za),c=$a.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zh).addScaledVector(Za,d),f}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=i.x-o.x,y=i.y-o.y,S=i.z-o.z,v=Math.abs(l),A=Math.abs(c),R=Math.abs(h),_,b,P,T,L,O,k,D,G,q,z,lt;if(v>=A&&v>=R?(P=l,O=u,G=p,lt=g,l>=0?(_=c,b=h,T=d,L=f,k=x,D=m,q=y,z=S):(_=h,b=c,T=f,L=d,k=m,D=x,q=S,z=y)):A>=R?(P=c,O=d,G=x,lt=y,c>=0?(_=h,b=l,T=f,L=u,k=m,D=p,q=S,z=g):(_=l,b=h,T=u,L=f,k=p,D=m,q=g,z=S)):(P=h,O=f,G=m,lt=S,h>=0?(_=l,b=c,T=u,L=d,k=p,D=x,q=g,z=y):(_=c,b=l,T=d,L=u,k=x,D=p,q=y,z=g)),P===0)return null;let Z=_/P,st=b/P,rt=1/P,Rt=T-Z*O,Yt=L-st*O,Q=k-Z*G,bt=D-st*G,Ft=q-Z*lt,Zt=z-st*lt,J=Ft*bt-Zt*Q,Dt=Rt*Zt-Yt*Ft,he=Q*Yt-bt*Rt;if(s){if(J<0||Dt<0||he<0)return null}else if((J<0||Dt<0||he<0)&&(J>0||Dt>0||he>0))return null;let Xt=J+Dt+he;if(Xt===0)return null;let ue=rt*(J*O+Dt*G+he*lt);return(Xt>0?ue<0:ue>0)?null:this.at(ue/Xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ai=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},rf=new Kt,Os=new wl,Ja=new gs,of=new N,Ka=new N,ja=new N,Qa=new N,Vh=new N,tl=new N,af=new N,el=new N,U=class extends Ve{constructor(t=new Ye,e=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){tl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Vh.fromBufferAttribute(u,t),o?tl.addScaledVector(Vh,h):tl.addScaledVector(Vh.sub(e),h))}e.add(tl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Os.copy(t.ray).recast(t.near),!(Ja.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Ja,of)===null||Os.origin.distanceToSquared(of)>(t.far-t.near)**2))&&(rf.copy(r).invert(),Os.copy(t.ray).applyMatrix4(rf),!(i.boundingBox!==null&&Os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Os)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,A=S;v<A;v+=3){let R=a.getX(v),_=a.getX(v+1),b=a.getX(v+2);s=nl(this,g,t,i,c,h,u,R,_,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=nl(this,o,t,i,c,h,u,y,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,A=S;v<A;v+=3){let R=v,_=v+1,b=v+2;s=nl(this,g,t,i,c,h,u,R,_,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,S=m+1,v=m+2;s=nl(this,o,t,i,c,h,u,y,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Nm(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===bs,a),l===null)return null;el.copy(a),el.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(el);return c<e.near||c>e.far?null:{distance:c,point:el.clone(),object:n}}function nl(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ka),n.getVertexPosition(l,ja),n.getVertexPosition(c,Qa);let h=Nm(n,t,e,i,Ka,ja,Qa,af);if(h){let u=new N;ki.getBarycoord(af,Ka,ja,Qa,u),s&&(h.uv=ki.getInterpolatedAttribute(s,a,l,c,u,new ct)),r&&(h.uv1=ki.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};ki.getNormal(Ka,ja,Qa,d.normal),h.face=d,h.barycoord=u}return h}var Uo=class extends Ln{constructor(t=null,e=1,i=1,s,r,o,a,l,c=_n,h=_n,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=class extends an{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},br=new Kt,lf=new Kt,il=[],cf=new yi,Um=new Kt,yo=new U,Mo=new gs,xs=class extends U{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Um)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,br),cf.copy(t.boundingBox).applyMatrix4(br),this.boundingBox.union(cf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,br),Mo.copy(t.boundingSphere).applyMatrix4(br),this.boundingSphere.union(Mo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(i),t.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),lf.multiplyMatrices(i,br),yo.matrixWorld=lf,yo.raycast(t,il);for(let o=0,a=il.length;o<a;o++){let l=il[o];l.instanceId=r,l.object=this,e.push(l)}il.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Uo(new Float32Array(s*this.count),s,this.count,ec,ti));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bs=new gs,Fm=new ct(.5,.5),sl=new N,_s=class{constructor(t=new oi,e=new oi,i=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Jn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],S=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,g-p,A-y).normalize(),s[1].setComponents(c+o,f+h,g+p,A+y).normalize(),s[2].setComponents(c+a,f+u,g+x,A+S).normalize(),s[3].setComponents(c-a,f-u,g-x,A-S).normalize(),i)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,g-m,A-v).normalize();else if(s[4].setComponents(c-l,f-d,g-m,A-v).normalize(),e===Jn)s[5].setComponents(c+l,f+d,g+m,A+v).normalize();else if(e===Rr)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(t){Bs.center.set(0,0,0);let e=Fm.distanceTo(t.center);return Bs.radius=.7071067811865476+e,Bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(sl.x=s.normal.x>0?t.max.x:t.min.x,sl.y=s.normal.y>0?t.max.y:t.min.y,sl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hf=new Kt,Tl=class n{constructor(){this.coordinateSystem=Jn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];hf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new _s),i[s].setFromProjectionMatrix(hf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new _s),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Fo=class extends Ln{constructor(t=[],e=Js,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vi=class extends Ln{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends Ln{constructor(t,e,i=li,s,r,o,a=_n,l=_n,c,h=zi,u=1){if(h!==zi&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Oo=class extends Wi{constructor(t,e=li,i=Js,s,r,o=_n,a=_n,l,c=zi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Bo=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ye=class n extends Ye{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function p(x,m,g,y,S,v,A,R,_,b,P){let T=v/_,L=A/b,O=v/2,k=A/2,D=R/2,G=_+1,q=b+1,z=0,lt=0,Z=new N;for(let st=0;st<q;st++){let rt=st*L-k;for(let Rt=0;Rt<G;Rt++){let Yt=Rt*T-O;Z[x]=Yt*y,Z[m]=rt*S,Z[g]=D,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=R>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Rt/_),u.push(1-st/b),z+=1}}for(let st=0;st<b;st++)for(let rt=0;rt<_;rt++){let Rt=d+rt+G*st,Yt=d+rt+G*(st+1),Q=d+(rt+1)+G*(st+1),bt=d+(rt+1)+G*st;l.push(Rt,Yt,bt),l.push(Yt,Q,bt),lt+=6}a.addGroup(f,lt,P),f+=lt,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Xi=class n extends Ye{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+r,x=s+1,m=new N,g=new N;for(let y=0;y<=p;y++){let S=0,v=0,A=0,R=0;if(y<=i){let P=y/i,T=P*Math.PI/2;v=-h-t*Math.cos(T),A=t*Math.sin(T),R=-t*Math.cos(T),S=P*u}else if(y<=i+r){let P=(y-i)/r;v=-h+P*e,A=t,R=0,S=u+P*d}else{let P=(y-i-r)/i,T=P*Math.PI/2;v=h+t*Math.sin(T),A=t*Math.cos(T),R=t*Math.sin(T),S=u+d+P*u}let _=Math.max(0,Math.min(1,S/f)),b=0;y===0?b=.5/s:y===p&&(b=-.5/s);for(let P=0;P<=s;P++){let T=P/s,L=T*Math.PI*2,O=Math.sin(L),k=Math.cos(L);g.x=-A*k,g.y=v,g.z=A*O,a.push(g.x,g.y,g.z),m.set(-A*k,R,A*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(T+b,_)}if(y>0){let P=(y-1)*x;for(let T=0;T<s;T++){let L=P+T,O=P+T+1,k=y*x+T,D=y*x+T+1;o.push(L,O,k),o.push(O,D,k)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},vi=class n extends Ye{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},It=class n extends Ye{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function y(){let v=new N,A=new N,R=0,_=(e-t)/i;for(let b=0;b<=r;b++){let P=[],T=b/r,L=T*(e-t)+t;for(let O=0;O<=s;O++){let k=O/s,D=k*l+a,G=Math.sin(D),q=Math.cos(D);A.x=L*G,A.y=-T*i+m,A.z=L*q,u.push(A.x,A.y,A.z),v.set(G,_,q).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-T),P.push(p++)}x.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let T=x[P][b],L=x[P+1][b],O=x[P+1][b+1],k=x[P][b+1];(t>0||P!==0)&&(h.push(T,L,k),R+=3),(e>0||P!==r-1)&&(h.push(L,O,k),R+=3)}c.addGroup(g,R,0),g+=R}function S(v){let A=p,R=new ct,_=new N,b=0,P=v===!0?t:e,T=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),p++;let L=p;for(let O=0;O<=s;O++){let D=O/s*l+a,G=Math.cos(D),q=Math.sin(D);_.x=P*q,_.y=m*T,_.z=P*G,u.push(_.x,_.y,_.z),d.push(0,T,0),R.x=G*.5+.5,R.y=q*.5*T+.5,f.push(R.x,R.y),p++}for(let O=0;O<s;O++){let k=A+O,D=L+O;v===!0?h.push(D,D+1,k):h.push(D+1,D,k),b+=3}c.addGroup(g,b,v===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jn=class n extends It{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Al=class n extends Ye{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new N,v=new N,A=new N;for(let R=0;R<e.length;R+=3)f(e[R+0],S),f(e[R+1],v),f(e[R+2],A),l(S,v,A,y)}function l(y,S,v,A){let R=A+1,_=[];for(let b=0;b<=R;b++){_[b]=[];let P=y.clone().lerp(v,b/R),T=S.clone().lerp(v,b/R),L=R-b;for(let O=0;O<=L;O++)O===0&&b===R?_[b][O]=P:_[b][O]=P.clone().lerp(T,O/L)}for(let b=0;b<R;b++)for(let P=0;P<2*(R-b)-1;P++){let T=Math.floor(P/2);P%2===0?(d(_[b][T+1]),d(_[b+1][T]),d(_[b][T])):(d(_[b][T+1]),d(_[b+1][T+1]),d(_[b+1][T]))}}function c(y){let S=new N;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(y),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let y=new N;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let v=m(y)/2/Math.PI+.5,A=g(y)/Math.PI+.5;o.push(v,1-A)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let S=o[y+0],v=o[y+2],A=o[y+4],R=Math.max(S,v,A),_=Math.min(S,v,A);R>.9&&_<.1&&(S<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){let v=y*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function p(){let y=new N,S=new N,v=new N,A=new N,R=new ct,_=new ct,b=new ct;for(let P=0,T=0;P<r.length;P+=9,T+=6){y.set(r[P+0],r[P+1],r[P+2]),S.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),R.set(o[T+0],o[T+1]),_.set(o[T+2],o[T+3]),b.set(o[T+4],o[T+5]),A.copy(y).add(S).add(v).divideScalar(3);let L=m(A);x(R,T+0,y,L),x(_,T+2,S,L),x(b,T+4,v,L)}}function x(y,S,v,A){A<0&&y.x===1&&(o[S]=y.x-1),v.x===0&&v.z===0&&(o[S]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new N,s=[],r=[],o=[],a=new N,l=new Kt;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(_e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(_e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ur=class extends Vn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Rl=class extends Ur{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ru(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var uf=new N,df=new N,Wh=new Ru,Xh=new Ru,qh=new Ru,Fr=class extends Vn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(df.subVectors(s[0],s[1]).add(s[0]),c=df);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(uf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Wh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),Xh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),qh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Wh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Xh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),qh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Wh.calc(l),Xh.calc(l),qh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ff(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Om(n,t){let e=1-n;return e*e*t}function Bm(n,t){return 2*(1-n)*n*t}function Hm(n,t){return n*n*t}function bo(n,t,e,i){return Om(n,t)+Bm(n,e)+Hm(n,i)}function km(n,t){let e=1-n;return e*e*e*t}function Gm(n,t){let e=1-n;return 3*e*e*n*t}function zm(n,t){return 3*(1-n)*n*n*t}function Vm(n,t){return n*n*n*t}function So(n,t,e,i,s){return km(n,t)+Gm(n,e)+zm(n,i)+Vm(n,s)}var Ho=class extends Vn{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(So(t,s.x,r.x,o.x,a.x),So(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cl=class extends Vn{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(So(t,s.x,r.x,o.x,a.x),So(t,s.y,r.y,o.y,a.y),So(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ko=class extends Vn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pl=class extends Vn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends Vn{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(bo(t,s.x,r.x,o.x),bo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends Vn{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(bo(t,s.x,r.x,o.x),bo(t,s.y,r.y,o.y),bo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(ff(a,l.x,c.x,h.x,u.x),ff(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Il=Object.freeze({__proto__:null,ArcCurve:Rl,CatmullRomCurve3:Fr,CubicBezierCurve:Ho,CubicBezierCurve3:Cl,EllipseCurve:Ur,LineCurve:ko,LineCurve3:Pl,QuadraticBezierCurve:Go,QuadraticBezierCurve3:zo,SplineCurve:Vo}),Ll=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Il[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Vs=class extends Ll{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ko(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Go(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Ho(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Vo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Ur(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},bi=class extends Vs{constructor(t){super(t),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Vs().fromJSON(s))}return this}};function Wm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=up(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=$m(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Wo(r,o,e,a,l,c,0),o}function up(n,t,e,i,s){let r;if(s===og(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=pf(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=pf(o/i|0,n[o],n[o+1],r);return r&&Or(r,r.next)&&(qo(r),r=r.next),r}function Ws(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Or(e,e.next)||je(e.prev,e,e.next)===0)){if(qo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Wo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&tg(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?qm(n,i,s,r):Xm(n)){t.push(l.i,n.i,c.i),qo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Ym(Ws(n),t),Wo(n,t,e,i,s,r,2)):o===2&&Zm(n,t,e,i,s,r):Wo(Ws(n),t,e,i,s,r,1);break}}}function Xm(n){let t=n.prev,e=n,i=n.next;if(je(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&vo(s,a,r,l,o,c,p.x,p.y)&&je(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function qm(n,t,e,i){let s=n.prev,r=n,o=n.next;if(je(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=jh(f,p,t,e,i),y=jh(x,m,t,e,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=g&&v&&v.z<=y;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&vo(a,h,l,u,c,d,S.x,S.y)&&je(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&vo(a,h,l,u,c,d,v.x,v.y)&&je(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&vo(a,h,l,u,c,d,S.x,S.y)&&je(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&vo(a,h,l,u,c,d,v.x,v.y)&&je(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ym(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Or(i,s)&&fp(i,e,e.next,s)&&Xo(i,s)&&Xo(s,i)&&(t.push(i.i,e.i,s.i),qo(e),qo(e.next),e=n=s),e=e.next}while(e!==n);return Ws(e)}function Zm(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ig(o,a)){let l=pp(o,a);o=Ws(o,o.next),l=Ws(l,l.next),Wo(o,t,e,i,s,r,0),Wo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function $m(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=up(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(ng(c))}s.sort(Jm);for(let r=0;r<s.length;r++)e=Km(s[r],e);return e}function Jm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Km(n,t){let e=jm(n,t);if(!e)return t;let i=pp(e,n);return Ws(i,i.next),Ws(e,e.next)}function jm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Or(n,e))return e;do{if(Or(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&dp(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);Xo(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Qm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Qm(n,t){return je(n.prev,n,t.prev)<0&&je(t.next,n,n.next)<0}function tg(n,t,e,i){let s=n;do s.z===0&&(s.z=jh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,eg(s)}function eg(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function jh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function ng(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function dp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function vo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&dp(n,t,e,i,s,r,o,a)}function ig(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!sg(n,t)&&(Xo(n,t)&&Xo(t,n)&&rg(n,t)&&(je(n.prev,n,t.prev)||je(n,t.prev,t))||Or(n,t)&&je(n.prev,n,n.next)>0&&je(t.prev,t,t.next)>0)}function je(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Or(n,t){return n.x===t.x&&n.y===t.y}function fp(n,t,e,i){let s=ol(je(n,t,e)),r=ol(je(n,t,i)),o=ol(je(e,i,n)),a=ol(je(e,i,t));return!!(s!==r&&o!==a||s===0&&rl(n,e,t)||r===0&&rl(n,i,t)||o===0&&rl(e,n,i)||a===0&&rl(e,t,i))}function rl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ol(n){return n>0?1:n<0?-1:0}function sg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&fp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Xo(n,t){return je(n.prev,n,n.next)<0?je(n,t,n.next)>=0&&je(n,n.prev,t)>=0:je(n,t,n.prev)<0||je(n,n.next,t)<0}function rg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function pp(n,t){let e=Qh(n.i,n.x,n.y),i=Qh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function pf(n,t,e,i){let s=Qh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function qo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Qh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function og(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var tu=class{static triangulate(t,e,i=2){return Wm(t,e,i)}},Hs=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];mf(t),gf(i,t);let o=t.length;e.forEach(mf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,gf(i,e[l]);let a=tu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function mf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function gf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var qi=class n extends Ye{constructor(t=new bi([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:ag,S,v=!1,A,R,_,b;if(g){S=g.getSpacedPoints(h),v=!0,d=!1;let at=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,at),R=new N,_=new N,b=new N}d||(m=0,f=0,p=0,x=0);let P=a.extractPoints(c),T=P.shape,L=P.holes;if(!Hs.isClockWise(T)){T=T.reverse();for(let at=0,_t=L.length;at<_t;at++){let mt=L[at];Hs.isClockWise(mt)&&(L[at]=mt.reverse())}}function k(at){let mt=10000000000000001e-36,Ot=at[0];for(let Tt=1;Tt<=at.length;Tt++){let ce=Tt%at.length,Wt=at[ce],we=Wt.x-Ot.x,Te=Wt.y-Ot.y,De=we*we+Te*Te,H=Math.max(Math.abs(Wt.x),Math.abs(Wt.y),Math.abs(Ot.x),Math.abs(Ot.y)),sn=mt*H*H;if(De<=sn){at.splice(ce,1),Tt--;continue}Ot=Wt}}k(T),L.forEach(k);let D=L.length,G=T;for(let at=0;at<D;at++){let _t=L[at];T=T.concat(_t)}function q(at,_t,mt){return _t||te("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(_t,mt)}let z=T.length;function lt(at,_t,mt){let Ot,Tt,ce,Wt=at.x-_t.x,we=at.y-_t.y,Te=mt.x-at.x,De=mt.y-at.y,H=Wt*Wt+we*we,sn=Wt*De-we*Te;if(Math.abs(sn)>Number.EPSILON){let be=Math.sqrt(H),He=Math.sqrt(Te*Te+De*De),St=_t.x-we/be,Qe=_t.y+Wt/be,Jt=mt.x-De/He,ne=mt.y+Te/He,I=((Jt-St)*De-(ne-Qe)*Te)/(Wt*De-we*Te);Ot=St+Wt*I-at.x,Tt=Qe+we*I-at.y;let E=Ot*Ot+Tt*Tt;if(E<=2)return new ct(Ot,Tt);ce=Math.sqrt(E/2)}else{let be=!1;Wt>Number.EPSILON?Te>Number.EPSILON&&(be=!0):Wt<-Number.EPSILON?Te<-Number.EPSILON&&(be=!0):Math.sign(we)===Math.sign(De)&&(be=!0),be?(Ot=-we,Tt=Wt,ce=Math.sqrt(H)):(Ot=Wt,Tt=we,ce=Math.sqrt(H/2))}return new ct(Ot/ce,Tt/ce)}let Z=[];for(let at=0,_t=G.length,mt=_t-1,Ot=at+1;at<_t;at++,mt++,Ot++)mt===_t&&(mt=0),Ot===_t&&(Ot=0),Z[at]=lt(G[at],G[mt],G[Ot]);let st=[],rt,Rt=Z.concat();for(let at=0,_t=D;at<_t;at++){let mt=L[at];rt=[];for(let Ot=0,Tt=mt.length,ce=Tt-1,Wt=Ot+1;Ot<Tt;Ot++,ce++,Wt++)ce===Tt&&(ce=0),Wt===Tt&&(Wt=0),rt[Ot]=lt(mt[Ot],mt[ce],mt[Wt]);st.push(rt),Rt=Rt.concat(rt)}let Yt;if(m===0)Yt=Hs.triangulateShape(G,L);else{let at=[],_t=[];for(let mt=0;mt<m;mt++){let Ot=mt/m,Tt=f*Math.cos(Ot*Math.PI/2),ce=p*Math.sin(Ot*Math.PI/2)+x;for(let Wt=0,we=G.length;Wt<we;Wt++){let Te=q(G[Wt],Z[Wt],ce);Dt(Te.x,Te.y,-Tt),Ot===0&&at.push(Te)}for(let Wt=0,we=D;Wt<we;Wt++){let Te=L[Wt];rt=st[Wt];let De=[];for(let H=0,sn=Te.length;H<sn;H++){let be=q(Te[H],rt[H],ce);Dt(be.x,be.y,-Tt),Ot===0&&De.push(be)}Ot===0&&_t.push(De)}}Yt=Hs.triangulateShape(at,_t)}let Q=Yt.length,bt=p+x;for(let at=0;at<z;at++){let _t=d?q(T[at],Rt[at],bt):T[at];v?(_.copy(A.normals[0]).multiplyScalar(_t.x),R.copy(A.binormals[0]).multiplyScalar(_t.y),b.copy(S[0]).add(_).add(R),Dt(b.x,b.y,b.z)):Dt(_t.x,_t.y,0)}for(let at=1;at<=h;at++)for(let _t=0;_t<z;_t++){let mt=d?q(T[_t],Rt[_t],bt):T[_t];v?(_.copy(A.normals[at]).multiplyScalar(mt.x),R.copy(A.binormals[at]).multiplyScalar(mt.y),b.copy(S[at]).add(_).add(R),Dt(b.x,b.y,b.z)):Dt(mt.x,mt.y,u/h*at)}for(let at=m-1;at>=0;at--){let _t=at/m,mt=f*Math.cos(_t*Math.PI/2),Ot=p*Math.sin(_t*Math.PI/2)+x;for(let Tt=0,ce=G.length;Tt<ce;Tt++){let Wt=q(G[Tt],Z[Tt],Ot);Dt(Wt.x,Wt.y,u+mt)}for(let Tt=0,ce=L.length;Tt<ce;Tt++){let Wt=L[Tt];rt=st[Tt];for(let we=0,Te=Wt.length;we<Te;we++){let De=q(Wt[we],rt[we],Ot);v?Dt(De.x,De.y+S[h-1].y,S[h-1].x+mt):Dt(De.x,De.y,u+mt)}}}Ft(),Zt();function Ft(){let at=s.length/3;if(d){let _t=0,mt=z*_t;for(let Ot=0;Ot<Q;Ot++){let Tt=Yt[Ot];he(Tt[2]+mt,Tt[1]+mt,Tt[0]+mt)}_t=h+m*2,mt=z*_t;for(let Ot=0;Ot<Q;Ot++){let Tt=Yt[Ot];he(Tt[0]+mt,Tt[1]+mt,Tt[2]+mt)}}else{for(let _t=0;_t<Q;_t++){let mt=Yt[_t];he(mt[2],mt[1],mt[0])}for(let _t=0;_t<Q;_t++){let mt=Yt[_t];he(mt[0]+z*h,mt[1]+z*h,mt[2]+z*h)}}i.addGroup(at,s.length/3-at,0)}function Zt(){let at=s.length/3,_t=0;J(G,_t),_t+=G.length;for(let mt=0,Ot=L.length;mt<Ot;mt++){let Tt=L[mt];J(Tt,_t),_t+=Tt.length}i.addGroup(at,s.length/3-at,1)}function J(at,_t){let mt=at.length;for(;--mt>=0;){let Ot=mt,Tt=mt-1;Tt<0&&(Tt=at.length-1);for(let ce=0,Wt=h+m*2;ce<Wt;ce++){let we=z*ce,Te=z*(ce+1),De=_t+Ot+we,H=_t+Tt+we,sn=_t+Tt+Te,be=_t+Ot+Te;Xt(De,H,sn,be)}}}function Dt(at,_t,mt){l.push(at),l.push(_t),l.push(mt)}function he(at,_t,mt){ue(at),ue(_t),ue(mt);let Ot=s.length/3,Tt=y.generateTopUV(i,s,Ot-3,Ot-2,Ot-1);Ee(Tt[0]),Ee(Tt[1]),Ee(Tt[2])}function Xt(at,_t,mt,Ot){ue(at),ue(_t),ue(Ot),ue(_t),ue(mt),ue(Ot);let Tt=s.length/3,ce=y.generateSideWallUV(i,s,Tt-6,Tt-3,Tt-2,Tt-1);Ee(ce[0]),Ee(ce[1]),Ee(ce[3]),Ee(ce[1]),Ee(ce[2]),Ee(ce[3])}function ue(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function Ee(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return lg(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Il[s.type]().fromJSON(s)),new n(i,t.options)}},ag={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(d,1-p),new ct(x,1-g)]:[new ct(a,1-l),new ct(h,1-u),new ct(f,1-p),new ct(m,1-g)]}};function lg(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Wn=class n extends Al{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Xs=class n extends Ye{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new N,d=new ct,f=new N,p=new N,x=new N,m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=e;y++){let S=i+y*h*s,v=Math.sin(S),A=Math.cos(S);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*v,u.y=t[R].y,u.z=t[R].x*A,o.push(u.x,u.y,u.z),d.x=y/e,d.y=R/(t.length-1),a.push(d.x,d.y);let _=l[3*R+0]*v,b=l[3*R+1],P=l[3*R+0]*A;c.push(_,b,P)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let v=S+y*t.length,A=v,R=v+t.length,_=v+t.length+1,b=v+1;r.push(A,R,b),r.push(_,b,R)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Xe=class n extends Ye{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*d-o;for(let S=0;S<c;S++){let v=S*u-r;p.push(v,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let S=y+c*g,v=y+c*(g+1),A=y+1+c*(g+1),R=y+1+c*g;f.push(S,v,R),f.push(v,A,R)}this.setIndex(f),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Me=class n extends Ye{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],S=g/i,v=o+S*a,A=t*Math.cos(v),R=Math.sqrt(t*t-A*A),_=0;g===0&&o===0?_=.5/e:g===i&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let P=b/e,T=s+P*r;u.x=-R*Math.cos(T),u.y=A,u.z=R*Math.sin(T),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(P+_,1-S),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<e;y++){let S=h[g][y+1],v=h[g][y],A=h[g+1][y],R=h[g+1][y+1];(g!==0||o>0)&&f.push(S,v,R),(g!==i-1||l<Math.PI)&&f.push(v,A,R)}this.setIndex(f),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ze=class n extends Ye{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new N,f=new N,p=new N;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,S=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(g,y,v),l.push(y,S,v)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Yo=class n extends Ye{constructor(t=new zo(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new ct,h=new N,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function x(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),y(),g()}function m(S){h=t.getPointAt(S/e,h);let v=o.normals[S],A=o.binormals[S];for(let R=0;R<=s;R++){let _=R/s*Math.PI*2,b=Math.sin(_),P=-Math.cos(_);l.x=P*v.x+b*A.x,l.y=P*v.y+b*A.y,l.z=P*v.z+b*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=e;S++)for(let v=1;v<=s;v++){let A=(s+1)*(S-1)+(v-1),R=(s+1)*S+(v-1),_=(s+1)*S+v,b=(s+1)*(S-1)+v;p.push(A,R,b),p.push(R,_,b)}}function y(){for(let S=0;S<=e;S++)for(let v=0;v<=s;v++)c.x=S/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Il[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function js(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(xf(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(xf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Rn(n){let t={};for(let e=0;e<n.length;e++){let i=js(n[e]);for(let s in i)t[s]=i[s]}return t}function xf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function cg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Cu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}var mp={clone:js,merge:Rn},hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new oe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new qe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Kt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Dl=class extends Qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},se=class extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Si=class extends se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ks('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ks('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Zo=class extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Zl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Nl=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ul=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Sr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function al(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ys=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fl=class extends ys{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jh:r=t,a=2*e-i;break;case Kh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Jh:o=t,l=2*i-e;break;case Kh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let A=0;A!==a;++A)r[A]=g*o[h+A]+y*o[c+A]+S*o[l+A]+v*o[u+A];return r}},Ol=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Bl=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hl=class extends ys{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(s-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,y=u[g],S=u[g+1],v=t*d+p*2,A=h[v],R=h[v+1],_=fg(i,e,y,A,s);r[p]=gp(_,x,S,R,m)}return r}};function gp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function dg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function fg(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=gp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=dg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Xn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sr(e,this.TimeBufferType),this.values=Sr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Sr(t.times,Array),values:Sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),al(t.settings)&&(i.settings={inTangents:Sr(t.settings.inTangents,Array),outTangents:Sr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Eo:e=this.InterpolantFactoryMethodDiscrete;break;case Ml:e=this.InterpolantFactoryMethodLinear;break;case hl:e=this.InterpolantFactoryMethodSmooth;break;case Zh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return jt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return Ml;case this.InterpolantFactoryMethodSmooth:return hl;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;al(this.settings)&&(_f(this.settings.inTangents,t),_f(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;al(this.settings)&&(yf(this.settings.inTangents,t),yf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){te("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){te("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&gm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){te("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===hl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,al(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _f(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function yf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Ml;var Ms=class extends Xn{constructor(t,e,i){super(t,e,i)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Eo;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}};kl.prototype.ValueTypeName="color";var Gl=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}};Gl.prototype.ValueTypeName="number";var zl=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},$o=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}};$o.prototype.ValueTypeName="quaternion";$o.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Xn{constructor(t,e,i){super(t,e,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Eo;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}};Vl.prototype.ValueTypeName="vector";var Wl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xp=new Wl,Xl=class{constructor(t){this.manager=t!==void 0?t:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends Ve{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Hr=class extends Br{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Yh=new Kt,Mf=new N,vf=new N,Jo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Mf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mf),vf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Yh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Rr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ll=new N,cl=new nn,gi=new N,Ko=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ll,cl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ll,cl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new N,bf=new ct,Sf=new ct,Mn=class extends Ko{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,e){return this.getViewBounds(t,bf,Sf),e.subVectors(Sf,bf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bh*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var eu=class extends Jo{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}},On=class extends Br{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new eu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},jo=class extends Ko{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nu=class extends Jo{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new nu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Er=-90,wr=1,Gr=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(Er,wr,t,e);s.layers=this.layers,this.add(s);let r=new Mn(Er,wr,t,e);r.layers=this.layers,this.add(r);let o=new Mn(Er,wr,t,e);o.layers=this.layers,this.add(o);let a=new Mn(Er,wr,t,e);a.layers=this.layers,this.add(a);let l=new Mn(Er,wr,t,e);l.layers=this.layers,this.add(l);let c=new Mn(Er,wr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ql=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Pu="\\[\\]\\.:\\/",pg=new RegExp("["+Pu+"]","g"),Iu="[^"+Pu+"]",mg="[^"+Pu.replace("\\.","")+"]",gg=/((?:WC+[\/:])*)/.source.replace("WC",Iu),xg=/(WCOD+)?/.source.replace("WCOD",mg),_g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),Mg=new RegExp("^"+gg+xg+_g+yg+"$"),vg=["material","materials","bones","map"],iu=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(t){let e=Mg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);vg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;te("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=iu;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gv=new Float32Array(1);var Ou=class Ou{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ou.prototype.isMatrix2=!0;var su=Ou;function Lu(n,t,e,i){let s=bg(i);switch(e){case vu:return n*t;case ec:return n*t/s.components*s.byteLength;case nc:return n*t/s.components*s.byteLength;case Es:return n*t*2/s.components*s.byteLength;case ic:return n*t*2/s.components*s.byteLength;case bu:return n*t*3/s.components*s.byteLength;case hi:return n*t*4/s.components*s.byteLength;case sc:return n*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oc:case lc:return Math.max(n,16)*Math.max(t,8)/4;case rc:case ac:return Math.max(n,8)*Math.max(t,8)/2;case cc:case hc:case dc:case fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case uc:case ra:case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Cc:case Pc:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Lc:case Dc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case oa:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bg(n){switch(n){case Bn:case xu:return{byteLength:1,components:1};case Wr:case _u:case ci:return{byteLength:2,components:1};case Ql:case tc:return{byteLength:2,components:4};case li:case jl:case ti:return{byteLength:4,components:1};case yu:case Mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Hp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Rg(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
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
#endif`,Ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
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
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Og=`#ifdef USE_BATCHING
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
#endif`,Bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zg=`#ifdef USE_IRIDESCENCE
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
#endif`,Vg=`#ifdef USE_BUMPMAP
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jg=`#define PI 3.141592653589793
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
} // validated`,Qg=`vec3 transformedNormal = objectNormal;
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
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
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
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mx=`#ifdef USE_ENVMAP
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
#endif`,vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
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
#endif`,Tx=`uniform sampler2D dfgLUT;
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
}`,Ax=`
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bx=`#if defined( USE_POINTS_UV )
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
#endif`,Hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
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
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
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
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f_=`float getShadowMask() {
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
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x_=`#ifdef USE_SKINNING
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
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`uniform float backgroundBlurriness;
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`#include <common>
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
}`,U_=`#if DEPTH_PACKING == 3200
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
}`,F_=`#define DISTANCE
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
}`,O_=`#define DISTANCE
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`uniform float scale;
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
}`,G_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,V_=`uniform vec3 diffuse;
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define MATCAP
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
}`,Z_=`#define NORMAL
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
}`,$_=`#define NORMAL
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
}`,J_=`#define PHONG
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
}`,K_=`#define PHONG
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
}`,j_=`#define STANDARD
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
}`,Q_=`#define STANDARD
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
}`,t1=`#define TOON
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
}`,e1=`#define TOON
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
}`,n1=`uniform float size;
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
}`,i1=`uniform vec3 diffuse;
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
}`,s1=`#include <common>
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
}`,r1=`uniform vec3 color;
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
}`,o1=`uniform float rotation;
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
}`,a1=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Cg,alphahash_pars_fragment:Pg,alphamap_fragment:Ig,alphamap_pars_fragment:Lg,alphatest_fragment:Dg,alphatest_pars_fragment:Ng,aomap_fragment:Ug,aomap_pars_fragment:Fg,batching_pars_vertex:Og,batching_vertex:Bg,begin_vertex:Hg,beginnormal_vertex:kg,bsdfs:Gg,iridescence_fragment:zg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Yg,color_fragment:Zg,color_pars_fragment:$g,color_pars_vertex:Jg,color_vertex:Kg,common:jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:tx,displacementmap_vertex:ex,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:sx,colorspace_pars_fragment:rx,envmap_fragment:ox,envmap_common_pars_fragment:ax,envmap_pars_fragment:lx,envmap_pars_vertex:cx,envmap_physical_pars_fragment:Mx,envmap_vertex:hx,fog_vertex:ux,fog_pars_vertex:dx,fog_fragment:fx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:xx,lights_lambert_pars_fragment:_x,lights_pars_begin:yx,lights_toon_fragment:vx,lights_toon_pars_fragment:bx,lights_phong_fragment:Sx,lights_phong_pars_fragment:Ex,lights_physical_fragment:wx,lights_physical_pars_fragment:Tx,lights_fragment_begin:Ax,lights_fragment_maps:Rx,lights_fragment_end:Cx,lightprobes_pars_fragment:Px,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Nx,map_fragment:Ux,map_pars_fragment:Fx,map_particle_fragment:Ox,map_particle_pars_fragment:Bx,metalnessmap_fragment:Hx,metalnessmap_pars_fragment:kx,morphinstance_vertex:Gx,morphcolor_vertex:zx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:qx,normal_fragment_maps:Yx,normal_pars_fragment:Zx,normal_pars_vertex:$x,normal_vertex:Jx,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:t_,iridescence_pars_fragment:e_,opaque_fragment:n_,packing:i_,premultiplied_alpha_fragment:s_,project_vertex:r_,dithering_fragment:o_,dithering_pars_fragment:a_,roughnessmap_fragment:l_,roughnessmap_pars_fragment:c_,shadowmap_pars_fragment:h_,shadowmap_pars_vertex:u_,shadowmap_vertex:d_,shadowmask_pars_fragment:f_,skinbase_vertex:p_,skinning_pars_vertex:m_,skinning_vertex:g_,skinnormal_vertex:x_,specularmap_fragment:__,specularmap_pars_fragment:y_,tonemapping_fragment:M_,tonemapping_pars_fragment:v_,transmission_fragment:b_,transmission_pars_fragment:S_,uv_pars_fragment:E_,uv_pars_vertex:w_,uv_vertex:T_,worldpos_vertex:A_,background_vert:R_,background_frag:C_,backgroundCube_vert:P_,backgroundCube_frag:I_,cube_vert:L_,cube_frag:D_,depth_vert:N_,depth_frag:U_,distance_vert:F_,distance_frag:O_,equirect_vert:B_,equirect_frag:H_,linedashed_vert:k_,linedashed_frag:G_,meshbasic_vert:z_,meshbasic_frag:V_,meshlambert_vert:W_,meshlambert_frag:X_,meshmatcap_vert:q_,meshmatcap_frag:Y_,meshnormal_vert:Z_,meshnormal_frag:$_,meshphong_vert:J_,meshphong_frag:K_,meshphysical_vert:j_,meshphysical_frag:Q_,meshtoon_vert:t1,meshtoon_frag:e1,points_vert:n1,points_frag:i1,shadow_vert:s1,shadow_frag:r1,sprite_vert:o1,sprite_frag:a1},Pt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Ti={basic:{uniforms:Rn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Rn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Rn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Rn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Rn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new oe(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Rn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Rn([Pt.points,Pt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Rn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Rn([Pt.common,Pt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Rn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Rn([Pt.sprite,Pt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Rn([Pt.common,Pt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Rn([Pt.lights,Pt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Ti.physical={uniforms:Rn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var Fc={r:0,b:0,g:0},l1=new Kt,kp=new ae;kp.set(-1,0,0,0,1,0,0,0,1);function c1(n,t,e,i,s,r){let o=new oe(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=t.get(S,v)}return S}function p(y){let S=!1,v=f(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,S){let v=f(S);v&&v.isCubeTexture?(c===void 0&&(c=new U(new ye(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:js(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(l1.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kp),c.material.toneMapped=Ce.getTransfer(v.colorSpace)!==Ue,(h!==v||u!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new U(new Xe(2,2),new Qn({name:"BackgroundMaterial",uniforms:js(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ce.getTransfer(v.colorSpace)!==Ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(Fc,Cu(n)),e.buffers.color.setClear(Fc.r,Fc.g,Fc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function h1(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(L,O,k,D,G){let q=!1,z=u(L,D,k,O);r!==z&&(r=z,c(r.object)),q=f(L,D,k,G),q&&p(L,D,k,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(L,O,k,D),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function u(L,O,k,D){let G=D.wireframe===!0,q=i[O.id];q===void 0&&(q={},i[O.id]=q);let z=L.isInstancedMesh===!0?L.id:0,lt=q[z];lt===void 0&&(lt={},q[z]=lt);let Z=lt[k.id];Z===void 0&&(Z={},lt[k.id]=Z);let st=Z[G];return st===void 0&&(st=d(l()),Z[G]=st),st}function d(L){let O=[],k=[],D=[];for(let G=0;G<e;G++)O[G]=0,k[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:D,object:L,attributes:{},index:null}}function f(L,O,k,D){let G=r.attributes,q=O.attributes,z=0,lt=k.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let rt=G[Z],Rt=q[Z];if(Rt===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Rt=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Rt=L.instanceColor)),rt===void 0||rt.attribute!==Rt||Rt&&rt.data!==Rt.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function p(L,O,k,D){let G={},q=O.attributes,z=0,lt=k.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let rt=q[Z];rt===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor));let Rt={};Rt.attribute=rt,rt&&rt.data&&(Rt.data=rt.data),G[Z]=Rt,z++}r.attributes=G,r.attributesNum=z,r.index=D}function x(){let L=r.newAttributes;for(let O=0,k=L.length;O<k;O++)L[O]=0}function m(L){g(L,0)}function g(L,O){let k=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;k[L]=1,D[L]===0&&(n.enableVertexAttribArray(L),D[L]=1),G[L]!==O&&(n.vertexAttribDivisor(L,O),G[L]=O)}function y(){let L=r.newAttributes,O=r.enabledAttributes;for(let k=0,D=O.length;k<D;k++)O[k]!==L[k]&&(n.disableVertexAttribArray(k),O[k]=0)}function S(L,O,k,D,G,q,z){z===!0?n.vertexAttribIPointer(L,O,k,G,q):n.vertexAttribPointer(L,O,k,D,G,q)}function v(L,O,k,D){x();let G=D.attributes,q=k.getAttributes(),z=O.defaultAttributeValues;for(let lt in q){let Z=q[lt];if(Z.location>=0){let st=G[lt];if(st===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),st!==void 0){let rt=st.normalized,Rt=st.itemSize,Yt=t.get(st);if(Yt===void 0)continue;let Q=Yt.buffer,bt=Yt.type,Ft=Yt.bytesPerElement,Zt=bt===n.INT||bt===n.UNSIGNED_INT||st.gpuType===jl;if(st.isInterleavedBufferAttribute){let J=st.data,Dt=J.isInterleavedBuffer===!0?J.stride:J.itemSize,he=st.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let Xt=0;Xt<Z.locationSize;Xt++)g(Z.location+Xt,J.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Xt=0;Xt<Z.locationSize;Xt++)m(Z.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Xt=0;Xt<Z.locationSize;Xt++)S(Z.location+Xt,Rt/Z.locationSize,bt,rt,Dt*Ft,(he+Rt/Z.locationSize*Xt)*Ft,Zt)}else{if(st.isInstancedBufferAttribute){for(let J=0;J<Z.locationSize;J++)g(Z.location+J,st.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let J=0;J<Z.locationSize;J++)m(Z.location+J);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let J=0;J<Z.locationSize;J++)S(Z.location+J,Rt/Z.locationSize,bt,rt,Rt*Ft,Rt/Z.locationSize*J*Ft,Zt)}}else if(z!==void 0){let rt=z[lt];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(Z.location,rt);break;case 3:n.vertexAttrib3fv(Z.location,rt);break;case 4:n.vertexAttrib4fv(Z.location,rt);break;default:n.vertexAttrib1fv(Z.location,rt)}}}}y()}function A(){P();for(let L in i){let O=i[L];for(let k in O){let D=O[k];for(let G in D){let q=D[G];for(let z in q)h(q[z].object),delete q[z];delete D[G]}}delete i[L]}}function R(L){if(i[L.id]===void 0)return;let O=i[L.id];for(let k in O){let D=O[k];for(let G in D){let q=D[G];for(let z in q)h(q[z].object),delete q[z];delete D[G]}}delete i[L.id]}function _(L){for(let O in i){let k=i[O];for(let D in k){let G=k[D];if(G[L.id]===void 0)continue;let q=G[L.id];for(let z in q)h(q[z].object),delete q[z];delete G[L.id]}}}function b(L){for(let O in i){let k=i[O],D=L.isInstancedMesh===!0?L.id:0,G=k[D];if(G!==void 0){for(let q in G){let z=G[q];for(let lt in z)h(z[lt].object),delete z[lt];delete G[q]}delete k[D],Object.keys(k).length===0&&delete i[O]}}}function P(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function u1(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function d1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==hi&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let b=_===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Bn&&_!==ti&&!b&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:A,samples:R}}function f1(n){let t=this,e=null,i=0,s=!1,r=!1,o=new oi,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,S=y*4,v=g.clippingState||null;l.value=v,v=h(p,d,S,f);for(let A=0;A!==S;++A)v[A]=e[A];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=f;S!==x;++S,v+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ha=class extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Fo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ye(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ys});r.uniforms.tEquirect.value=e;let o=new U(s,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=In),new Gr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},_p=256,p1=3,m1=20,Gp=256,zp=16,g1=3,x1=new N,_1=new oe,qr=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gr(1,10,null),this._boxMesh=new U(new ye(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=x1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(_1));let m=new Gr(i,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(_p,op(t))}_fromTexture(t,e){t.mapping===Js||t.mapping===Vr?this._setSize(t.image.length===0?_p:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=yp(t,!1,!1),i=Math.log2(t)-p1;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=yp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Js||t.mapping===Vr?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=y1(),this._integrationMaterial=M1());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/zp);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-g1)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Gp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=v1());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function yp(n,t,e){return new ha(n,{minFilter:Yi,generateMipmaps:t,type:ci,colorSpace:wo,depthBuffer:e})}function ua(n,t,e){return new Qn({name:n,uniforms:t,vertexShader:me.cube_vert,fragmentShader:e,side:un,blending:Ys,depthTest:!1,depthWrite:!1})}function y1(){return ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gp}u

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
	`)}function M1(){return ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zp}},`

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
	`)}function v1(){return ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${m1}
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
	`)}function Mp(){return ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function vp(){return ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function b1(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===$l||f===Jl)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new ha(p.height);return x.fromEquirectangularTexture(n,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===$l||f===Jl,x=f===Js||f===Vr;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new qr(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new qr(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===$l?d.mapping=Js:f===Jl&&(d.mapping=Vr),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function S1(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ks("WebGLRenderer: "+i+" extension not supported."),s}}}function E1(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],n.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,S=m.count>=65535?Do:Lo,v=new S(Math.ceil(y/3)*6,1),A=v.array;if(x!==null){let _=x.array;g=x.version;for(let b=0,P=0;b<y;b+=3){let T=_[b+0],L=_[b+1],O=_[b+2];A[P++]=T,A[P++]=L,A[P++]=L,A[P++]=O,A[P++]=O,A[P++]=T}}else{g=m.version;for(let _=0,b=0;_<y;_+=3){let P=_+0,T=_+1,L=_+2;A[b++]=P,A[b++]=T,A[b++]=T,A[b++]=L,A[b++]=L,A[b++]=P}}v.version=g;let R=r.get(p);R&&t.remove(R),r.set(p,v)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function w1(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function T1(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function A1(n,t,e){let i=new WeakMap,s=new qe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let R=new Float32Array(v*A*4*u),_=new Co(R,v,A,u);_.type=ti,_.needsUpdate=!0;let b=S*4;for(let T=0;T<u;T++){let L=m[T],O=g[T],k=y[T],D=v*A*4*T;for(let G=0;G<L.count;G++){let q=G*b;f===!0&&(s.fromBufferAttribute(L,G),R[D+q+0]=s.x,R[D+q+1]=s.y,R[D+q+2]=s.z,R[D+q+3]=0),p===!0&&(s.fromBufferAttribute(O,G),R[D+q+4]=s.x,R[D+q+5]=s.y,R[D+q+6]=s.z,R[D+q+7]=0),x===!0&&(s.fromBufferAttribute(k,G),R[D+q+8]=s.x,R[D+q+9]=s.y,R[D+q+10]=s.z,R[D+q+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new ct(v,A)},i.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function R1(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var C1={[hu]:"LINEAR_TONE_MAPPING",[uu]:"REINHARD_TONE_MAPPING",[du]:"CINEON_TONE_MAPPING",[Qo]:"ACES_FILMIC_TONE_MAPPING",[pu]:"AGX_TONE_MAPPING",[mu]:"NEUTRAL_TONE_MAPPING",[fu]:"CUSTOM_TONE_MAPPING"};function P1(n,t,e,i,s,r){let o=new zn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ye;h.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ie([0,2,0,0,2,0],2));let u=new Dl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new U(h,u),f=new jo(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,S=[],v=!1;this.setSize=function(A,R){o.setSize(A,R),a!==null&&a.setSize(A,R),l!==null&&l.setSize(A,R);for(let _=0;_<S.length;_++){let b=S[_];b.setSize&&b.setSize(A,R)}},this.setEffects=function(A){S=A,v=S.length>0&&S[0].isRenderPass===!0;let R=o.width,_=o.height;S.length>0&&a===null&&(a=new zn(R,_,{type:ci,depthBuffer:!1,stencilBuffer:!1}),l=new zn(R,_,{type:ci,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&S.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Wi(R,_),r===!0&&(c.format=Zi,c.type=Ks)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<S.length;P++){let T=S[P];T.setSize&&T.setSize(R,_),b&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(A,R){if(m||A.toneMapping===Ei&&S.length===0)return!1;if(y=R,R!==null){let _=R.width,b=R.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return v===!1&&A.setRenderTarget(o),g=A.toneMapping,A.toneMapping=Ei,!0},this.hasRenderPass=function(){return v},this.end=function(A,R){A.toneMapping=g,m=!0;let _=o,b=a;for(let P=0;P<S.length;P++){let T=S[P];T.enabled!==!1&&(T.render(A,b,_,R),T.needsSwap!==!1&&(_=b,b=b===a?l:a))}if(p!==A.outputColorSpace||x!==A.toneMapping){p=A.outputColorSpace,x=A.toneMapping,u.defines={},Ce.getTransfer(p)===Ue&&(u.defines.SRGB_TRANSFER="");let P=C1[x];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(y),A.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Vp=new Ln,Wp=new Wi(1,1),Xp=new Oo(1),qp=new Co,Yp=new El,Zp=new Fo,bp=[],Sp=[],Ep=new Float32Array(16),wp=new Float32Array(9),Tp=new Float32Array(4);function Yr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=bp[s];if(r===void 0&&(r=new Float32Array(s),bp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function dn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function fn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Hc(n,t){let e=Sp[t];e===void 0&&(e=new Int32Array(t),Sp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function I1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function L1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2fv(this.addr,t),fn(e,t)}}function D1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;n.uniform3fv(this.addr,t),fn(e,t)}}function N1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4fv(this.addr,t),fn(e,t)}}function U1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,i))return;Tp.set(i),n.uniformMatrix2fv(this.addr,!1,Tp),fn(e,i)}}function F1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,i))return;wp.set(i),n.uniformMatrix3fv(this.addr,!1,wp),fn(e,i)}}function O1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,i))return;Ep.set(i),n.uniformMatrix4fv(this.addr,!1,Ep),fn(e,i)}}function B1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function H1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2iv(this.addr,t),fn(e,t)}}function k1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3iv(this.addr,t),fn(e,t)}}function G1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4iv(this.addr,t),fn(e,t)}}function z1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function V1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2uiv(this.addr,t),fn(e,t)}}function W1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3uiv(this.addr,t),fn(e,t)}}function X1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4uiv(this.addr,t),fn(e,t)}}function kc(n){return n.version===0&&(n.compareFunction=wu,n.needsUpdate=!0),n}function q1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=kc(Wp):r=Vp,e.setTexture2D(t||r,s)}function Y1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yp,s)}function Z1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=kc(Xp):r=Zp,e.setTextureCube(t||r,s)}function $1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qp,s)}function J1(n){switch(n){case 5126:return I1;case 35664:return L1;case 35665:return D1;case 35666:return N1;case 35674:return U1;case 35675:return F1;case 35676:return O1;case 5124:case 35670:return B1;case 35667:case 35671:return H1;case 35668:case 35672:return k1;case 35669:case 35673:return G1;case 5125:return z1;case 36294:return V1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return $1}}function K1(n,t){n.uniform1fv(this.addr,t)}function j1(n,t){let e=Yr(t,this.size,2);n.uniform2fv(this.addr,e)}function Q1(n,t){let e=Yr(t,this.size,3);n.uniform3fv(this.addr,e)}function ty(n,t){let e=Yr(t,this.size,4);n.uniform4fv(this.addr,e)}function ey(n,t){let e=Yr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ny(n,t){let e=Yr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function iy(n,t){let e=Yr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sy(n,t){n.uniform1iv(this.addr,t)}function ry(n,t){n.uniform2iv(this.addr,t)}function oy(n,t){n.uniform3iv(this.addr,t)}function ay(n,t){n.uniform4iv(this.addr,t)}function ly(n,t){n.uniform1uiv(this.addr,t)}function cy(n,t){n.uniform2uiv(this.addr,t)}function hy(n,t){n.uniform3uiv(this.addr,t)}function uy(n,t){n.uniform4uiv(this.addr,t)}function dy(n,t,e){let i=this.cache,s=t.length,r=Hc(e,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=kc(Wp):o=Vp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function fy(n,t,e){let i=this.cache,s=t.length,r=Hc(e,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yp,r[o])}function py(n,t,e){let i=this.cache,s=t.length,r=Hc(e,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=kc(Xp):o=Zp;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function my(n,t,e){let i=this.cache,s=t.length,r=Hc(e,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qp,r[o])}function gy(n){switch(n){case 5126:return K1;case 35664:return j1;case 35665:return Q1;case 35666:return ty;case 35674:return ey;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}var ku=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=J1(e.type)}},Gu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gy(e.type)}},zu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Bu=/(\w+)(\])?(\[|\.)?/g;function Ap(n,t){n.seq.push(t),n.map[t.id]=t}function xy(n,t,e){let i=n.name,s=i.length;for(Bu.lastIndex=0;;){let r=Bu.exec(i),o=Bu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ap(e,c===void 0?new ku(a,n,t):new Gu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new zu(a),Ap(e,u)),e=u}}}var Xr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);xy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Rp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var _y=37297,yy=0;function My(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Cp=new ae;function vy(n){Ce._getMatrix(Cp,Ce.workingColorSpace,n);let t=`mat3( ${Cp.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(n)){case To:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Pp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+My(n.getShaderSource(t),a)}else return r}function by(n,t){let e=vy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Sy={[hu]:"Linear",[uu]:"Reinhard",[du]:"Cineon",[Qo]:"ACESFilmic",[pu]:"AgX",[mu]:"Neutral",[fu]:"Custom"};function Ey(n,t){let e=Sy[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oc=new N;function wy(){Ce.getLuminanceCoefficients(Oc);let n=Oc.x.toFixed(4),t=Oc.y.toFixed(4),e=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ty(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Ay(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ry(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ca(n){return n!==""}function Ip(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Lp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(n){return n.replace(Cy,Py)}function Py(n,t){let e=me[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Vu(e)}var Iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(n){return n.replace(Iy,Ly)}function Ly(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Np(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Dy={[qs]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function Ny(n){return Dy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Uy={[Vr]:"ENVMAP_MODE_REFRACTION"};function Fy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Uy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Oy={[Zl]:"ENVMAP_BLENDING_MULTIPLY",[Xf]:"ENVMAP_BLENDING_MIX",[qf]:"ENVMAP_BLENDING_ADD"};function By(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Oy[n.combine]||"ENVMAP_BLENDING_NONE"}function Hy(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ny(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Fy(e),u=By(e),d=Ty(e),f=Ay(r),p=s.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ca).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ca).join(`
`),m.length>0&&(m+=`
`)):(x=[Np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),m=[Np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?me.tonemapping_pars_fragment:"",e.toneMapping!==Ei?Ey("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,by("linearToOutputTexel",e.outputColorSpace),wy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),o=Vu(o),o=Ip(o,e),o=Lp(o,e),a=Vu(a),a=Ip(a,e),a=Lp(a,e),o=Dp(o),a=Dp(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,S=g+m+a,v=Rp(s,s.VERTEX_SHADER,y),A=Rp(s,s.FRAGMENT_SHADER,S);s.attachShader(p,v),s.attachShader(p,A),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function R(T){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(p)||"",O=s.getShaderInfoLog(v)||"",k=s.getShaderInfoLog(A)||"",D=L.trim(),G=O.trim(),q=k.trim(),z=!0,lt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,v,A);else{let Z=Pp(s,v,"vertex"),st=Pp(s,A,"fragment");te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+Z+`
`+st)}else D!==""?jt("WebGLProgram: Program Info Log:",D):(G===""||q==="")&&(lt=!1);lt&&(T.diagnostics={runnable:z,programLog:D,vertexShader:{log:G,prefix:x},fragmentShader:{log:q,prefix:m}})}s.deleteShader(v),s.deleteShader(A),_=new Xr(s,p),b=Ry(s,p)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,_y)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yy++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=A,this}var ky=0,Wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xu(t),e.set(t,i)),i}},Xu=class{constructor(t){this.id=ky++,this.code=t,this.usedTimes=0}};function Gy(n){return n===Es||n===ra||n===oa}function zy(n,t,e,i,s,r){let o=new Po,a=new Wu,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,P,T,L,O){let k=T.fog,D=L.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?T.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=t.get(_.envMap||G,q),lt=d[_.type],Z=i.precision;_.precision!==null&&(Z=i.getMaxPrecision(_.precision),Z!==_.precision&&jt("WebGLProgram.getParameters:",_.precision,"not supported, using",Z,"instead."));let st=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,rt=st!==void 0?st.length:0,Rt=0;D.morphAttributes.position!==void 0&&(Rt=1),D.morphAttributes.normal!==void 0&&(Rt=2),D.morphAttributes.color!==void 0&&(Rt=3);let Yt,Q,bt,Ft;if(lt){let Ct=Ti[lt];Yt=Ct.vertexShader,Q=Ct.fragmentShader}else{Yt=_.vertexShader,Q=_.fragmentShader;let Ct=a.getVertexShaderStage(_),Oe=a.getFragmentShaderStage(_);a.update(_,Ct,Oe),bt=Ct.id,Ft=Oe.id}let Zt=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),Dt=L.isInstancedMesh===!0,he=L.isBatchedMesh===!0,Xt=!!_.map,ue=!!_.matcap,Ee=!!z,at=Ee&&z.isPMREMTexture===!0,_t=!!_.aoMap,mt=!!_.lightMap,Ot=!!_.bumpMap&&_.wireframe===!1,Tt=!!_.normalMap,ce=!!_.displacementMap,Wt=!!_.emissiveMap,we=!!_.metalnessMap,Te=!!_.roughnessMap,De=_.anisotropy>0,H=_.clearcoat>0,sn=_.diffuseRoughness>0,be=_.dispersion>0,He=_.retroreflectivity>0,St=_.iridescence>0,Qe=_.sheen>0,Jt=_.transmission>0,ne=De&&!!_.anisotropyMap,I=H&&!!_.clearcoatMap,E=H&&!!_.clearcoatNormalMap,W=H&&!!_.clearcoatRoughnessMap,ht=sn&&!!_.diffuseRoughnessMap,ot=St&&!!_.iridescenceMap,gt=St&&!!_.iridescenceThicknessMap,Et=Qe&&!!_.sheenColorMap,et=Qe&&!!_.sheenRoughnessMap,nt=!!_.specularMap,yt=!!_.specularColorMap,F=!!_.specularIntensityMap,it=Jt&&!!_.transmissionMap,j=Jt&&!!_.thicknessMap,Mt=!!_.gradientMap,ft=!!_.alphaMap,xt=_.alphaTest>0,qt=!!_.alphaHash,pe=!!_.extensions,ut=Ei;_.toneMapped&&(Zt===null||Zt.isXRRenderTarget===!0)&&(ut=n.toneMapping);let $t=at?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,de={shaderID:lt,shaderType:_.type,shaderName:_.name,vertexShader:Yt,fragmentShader:Q,defines:_.defines,customVertexShaderID:bt,customFragmentShaderID:Ft,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Z,batching:he,batchingColor:he&&L._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&L.instanceColor!==null,instancingMorph:Dt&&L.morphTexture!==null,outputColorSpace:Zt===null?n.outputColorSpace:Zt.isXRRenderTarget===!0?Zt.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xt,matcap:ue,envMap:Ee,envMapMode:Ee&&z.mapping,envMapPMREM:at,envMapMaxLod:at?$t.length-1:null,envMapSize:at?$t[0].width:null,aoMap:_t,lightMap:mt,bumpMap:Ot,normalMap:Tt,displacementMap:ce,emissiveMap:Wt,normalMapObjectSpace:Tt&&_.normalMapType===$f,normalMapTangentSpace:Tt&&_.normalMapType===aa,packedNormalMap:Tt&&_.normalMapType===aa&&Gy(_.normalMap.format),metalnessMap:we,roughnessMap:Te,anisotropy:De,anisotropyMap:ne,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:W,diffuseRoughness:sn,diffuseRoughnessMap:ht,dispersion:be,retroreflection:He,iridescence:St,iridescenceMap:ot,iridescenceThicknessMap:gt,sheen:Qe,sheenColorMap:Et,sheenRoughnessMap:et,specularMap:nt,specularColorMap:yt,specularIntensityMap:F,transmission:Jt,transmissionMap:it,thicknessMap:j,gradientMap:Mt,opaque:_.transparent===!1&&_.blending===Ss&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:xt,alphaHash:qt,combine:_.combine,mapUv:Xt&&f(_.map.channel),aoMapUv:_t&&f(_.aoMap.channel),lightMapUv:mt&&f(_.lightMap.channel),bumpMapUv:Ot&&f(_.bumpMap.channel),normalMapUv:Tt&&f(_.normalMap.channel),displacementMapUv:ce&&f(_.displacementMap.channel),emissiveMapUv:Wt&&f(_.emissiveMap.channel),metalnessMapUv:we&&f(_.metalnessMap.channel),roughnessMapUv:Te&&f(_.roughnessMap.channel),anisotropyMapUv:ne&&f(_.anisotropyMap.channel),clearcoatMapUv:I&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:et&&f(_.sheenRoughnessMap.channel),specularMapUv:nt&&f(_.specularMap.channel),specularColorMapUv:yt&&f(_.specularColorMap.channel),specularIntensityMapUv:F&&f(_.specularIntensityMap.channel),transmissionMapUv:it&&f(_.transmissionMap.channel),thicknessMapUv:j&&f(_.thicknessMap.channel),alphaMapUv:ft&&f(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Tt||De),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(Xt||ft),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&Tt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Rt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(Ct=>Ct.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:Xt&&_.map.isVideoTexture===!0&&Ce.getTransfer(_.map.colorSpace)===Ue,decodeVideoTextureEmissive:Wt&&_.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(_.emissiveMap.colorSpace)===Ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ln,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||he)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(b,_),g(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function g(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let b=d[_.type],P;if(b){let T=Ti[b];P=mp.clone(T.uniforms)}else P=_.uniforms;return P}function S(_,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new Hy(n,b,_,s),c.push(P),h.set(b,P)),P}function v(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function R(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:R}}function Vy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Wy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Up(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Fp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let y=n[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},n[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),t++,y}function l(d,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let S=a(d,f,p,x,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):e.push(S)}function c(d,f,p,x,m,g){let y=a(d,f,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||Wy),i.length>1&&i.sort(f||Up),s.length>1&&s.sort(f||Up)}function u(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Xy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Fp,n.set(i,[o])):s>=r.length?(o=new Fp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function qy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new oe};break;case"SpotLight":e={position:new N,direction:new N,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Yy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Zy=0;function $y(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Jy(n){let t=new qy,e=Yy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new Kt,o=new Kt;function a(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,S=0,v=0,A=0,R=0,_=0,b=0,P=0,T=0;c.sort($y);for(let O=0,k=c.length;O<k;O++){let D=c[O],G=D.color,q=D.intensity,z=D.distance,lt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Es?lt=D.shadow.map.texture:lt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=G.r*q,u+=G.g*q,d+=G.b*q;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],q);T++}else if(D.isSunLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let st=D.shadow,rt=e.get(D);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),i.sunShadow[p]=rt,i.sunShadowMap[p]=lt;let Rt=st.getViewportCount();for(let Yt=0;Yt<Rt;Yt++)i.sunShadowMatrix[x+Yt]=st.getMatrix(Yt),i.sunShadowCascade[x+Yt]=st._cascadeData[Yt];x+=Rt,p++}i.sun[f]=Z,f++}else if(D.isDirectionalLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let st=D.shadow,rt=e.get(D);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,i.directionalShadow[m]=rt,i.directionalShadowMap[m]=lt,i.directionalShadowMatrix[m]=D.shadow.matrix,A++}i.directional[m]=Z,m++}else if(D.isSpotLight){let Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(G).multiplyScalar(q),Z.distance=z,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[y]=Z;let st=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,st.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[y]=st.matrix,D.castShadow){let rt=e.get(D);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,i.spotShadow[y]=rt,i.spotShadowMap[y]=lt,_++}y++}else if(D.isRectAreaLight){let Z=t.get(D);Z.color.copy(G).multiplyScalar(q),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=Z,S++}else if(D.isPointLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){let st=D.shadow,rt=e.get(D);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,rt.shadowCameraNear=st.camera.near,rt.shadowCameraFar=st.camera.far,i.pointShadow[g]=rt,i.pointShadowMap[g]=lt,i.pointShadowMatrix[g]=D.shadow.matrix,R++}i.point[g]=Z,g++}else if(D.isHemisphereLight){let Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(q),Z.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[v]=Z,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==S||L.hemiLength!==v||L.numSunShadows!==p||L.numDirectionalShadows!==A||L.numPointShadows!==R||L.numSpotShadows!==_||L.numSpotMaps!==b||L.numLightProbes!==T)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=T,L.sunLength=f,L.directionalLength=m,L.pointLength=g,L.spotLength=y,L.rectAreaLength=S,L.hemiLength=v,L.numSunShadows=p,L.numDirectionalShadows=A,L.numPointShadows=R,L.numSpotShadows=_,L.numSpotMaps=b,L.numLightProbes=T,i.version=Zy++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let v=c[y];if(v.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(v.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Op(n){let t=new Jy(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){i.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ky(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Op(n),t.set(s,[a])):r>=o.length?(a=new Op(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qy=`uniform sampler2D shadow_pass;
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
}`,tM=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],eM=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Bp=new Kt,la=new N,Hu=new N;function nM(n,t,e){let i=new _s,s=new ct,r=new ct,o=new qe,a=new Nl,l=new Ul,c={},h=e.maxTextureSize,u={[bs]:un,[un]:bs,[ln]:ln},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:jy,fragmentShader:Qy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ye;p.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new U(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let g=this.type;this.render=function(R,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Tf&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);let P=n.getRenderTarget(),T=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ys),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let k=g!==this.type;k&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=R.length;D<G;D++){let q=R[D],z=q.shadow;if(z===void 0){jt("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let lt=z.getFrameExtents();s.multiply(lt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,z.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Z,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===zr){if(q.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new zn(s.x,s.y,{format:Es,type:ci,minFilter:In,magFilter:In,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Wi(s.x,s.y,ti),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=zi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=_n,z.map.depthTexture.magFilter=_n}else q.isPointLight?(z.map=new ha(s.x),z.map.depthTexture=new Oo(s.x,li)):(z.map=new zn(s.x,s.y),z.map.depthTexture=new Wi(s.x,s.y,li)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=zi,this.type===qs?(z.map.depthTexture.compareFunction=Z?Eu:Su,z.map.depthTexture.minFilter=In,z.map.depthTexture.magFilter=In):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=_n,z.map.depthTexture.magFilter=_n);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let st=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,b);let rt=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let Rt=0;Rt<st;Rt++){let Yt=z.getCamera(Rt);if(q.isPointLight){let Q=z.camera,bt=z.matrix,Ft=q.distance||Q.far;Ft!==Q.far&&(Q.far=Ft,Q.updateProjectionMatrix()),la.setFromMatrixPosition(q.matrixWorld),Q.position.copy(la),Hu.copy(Q.position),Hu.add(tM[Rt]),Q.up.copy(eM[Rt]),Q.lookAt(Hu),Q.updateMatrixWorld(),bt.makeTranslation(-la.x,-la.y,-la.z),Bp.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Bp,Q.coordinateSystem,Q.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,Rt),n.clear();else{Rt===0&&(n.setRenderTarget(z.map),n.clear());let Q=z.getViewport(Rt);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),O.viewport(o)}i=z.getFrustum(Rt),v(_,b,Yt,q,rt,this.type)}z.isPointLightShadow!==!0&&this.type===zr&&y(z,b),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(P,T,L)};function y(R,_){let b=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new zn(s.x,s.y,{format:Es,type:ci}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(_,null,b,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(_,null,b,f,x,null)}function S(R,_,b,P){let T=null,L=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)T=L;else if(T=b.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=T.uuid,k=_.uuid,D=c[O];D===void 0&&(D={},c[O]=D);let G=D[k];G===void 0&&(G=T.clone(),D[k]=G,_.addEventListener("dispose",A)),T=G}if(T.visible=_.visible,T.wireframe=_.wireframe,P===zr?T.side=_.shadowSide!==null?_.shadowSide:_.side:T.side=_.shadowSide!==null?_.shadowSide:u[_.side],T.alphaMap=_.alphaMap,T.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,T.map=_.map,T.clipShadows=_.clipShadows,T.clippingPlanes=_.clippingPlanes,T.clipIntersection=_.clipIntersection,T.displacementMap=_.displacementMap,T.displacementScale=_.displacementScale,T.displacementBias=_.displacementBias,T.wireframeLinewidth=_.wireframeLinewidth,T.linewidth=_.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let O=n.properties.get(T);O.light=b}return T}function v(R,_,b,P,T,L){if(R.visible===!1)return;if(R.layers.test(T)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&L===zr)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);let D=t.update(R),G=R.material;if(Array.isArray(G)){let q=D.groups;for(let z=0,lt=q.length;z<lt;z++){let Z=q[z],st=G[Z.materialIndex];if(st&&st.visible){let rt=S(R,st,P,L);R.onBeforeShadow(n,R,_,b,D,rt,Z),n.renderBufferDirect(b,null,D,rt,R,Z),R.onAfterShadow(n,R,_,b,D,rt,Z)}}}else if(G.visible){let q=S(R,G,P,L);R.onBeforeShadow(n,R,_,b,D,q,null),n.renderBufferDirect(b,null,D,q,R,null),R.onAfterShadow(n,R,_,b,D,q,null)}}let k=R.children;for(let D=0,G=k.length;D<G;D++)v(k[D],_,b,P,T,L)}function A(R){R.target.removeEventListener("dispose",A);for(let b in c){let P=c[b],T=R.target.uuid;T in P&&(P[T].dispose(),delete P[T])}}}function iM(n,t){function e(){let F=!1,it=new qe,j=null,Mt=new qe(0,0,0,0);return{setMask:function(ft){j!==ft&&!F&&(n.colorMask(ft,ft,ft,ft),j=ft)},setLocked:function(ft){F=ft},setClear:function(ft,xt,qt,pe,ut){ut===!0&&(ft*=pe,xt*=pe,qt*=pe),it.set(ft,xt,qt,pe),Mt.equals(it)===!1&&(n.clearColor(ft,xt,qt,pe),Mt.copy(it))},reset:function(){F=!1,j=null,Mt.set(-1,0,0,0)}}}function i(){let F=!1,it=!1,j=null,Mt=null,ft=null;return{setReversed:function(xt){if(it!==xt){let qt=t.get("EXT_clip_control");xt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),it=xt;let pe=ft;ft=null,this.setClear(pe)}},getReversed:function(){return it},setTest:function(xt){xt?J(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(xt){j!==xt&&!F&&(n.depthMask(xt),j=xt)},setFunc:function(xt){if(it&&(xt=rp[xt]),Mt!==xt){switch(xt){case dl:n.depthFunc(n.NEVER);break;case fl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=xt}},setLocked:function(xt){F=xt},setClear:function(xt){ft!==xt&&(ft=xt,it&&(xt=1-xt),n.clearDepth(xt))},reset:function(){F=!1,j=null,Mt=null,ft=null,it=!1}}}function s(){let F=!1,it=null,j=null,Mt=null,ft=null,xt=null,qt=null,pe=null,ut=null;return{setTest:function($t){F||($t?J(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function($t){it!==$t&&!F&&(n.stencilMask($t),it=$t)},setFunc:function($t,de,Ct){(j!==$t||Mt!==de||ft!==Ct)&&(n.stencilFunc($t,de,Ct),j=$t,Mt=de,ft=Ct)},setOp:function($t,de,Ct){(xt!==$t||qt!==de||pe!==Ct)&&(n.stencilOp($t,de,Ct),xt=$t,qt=de,pe=Ct)},setLocked:function($t){F=$t},setClear:function($t){ut!==$t&&(n.clearStencil($t),ut=$t)},reset:function(){F=!1,it=null,j=null,Mt=null,ft=null,xt=null,qt=null,pe=null,ut=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,v=null,A=null,R=null,_=null,b=new oe(0,0,0),P=0,T=!1,L=null,O=null,k=null,D=null,G=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,lt=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=lt>=1):Z.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=lt>=2);let st=null,rt={},Rt=n.getParameter(n.SCISSOR_BOX),Yt=n.getParameter(n.VIEWPORT),Q=new qe().fromArray(Rt),bt=new qe().fromArray(Yt);function Ft(F,it,j,Mt){let ft=new Uint8Array(4),xt=n.createTexture();n.bindTexture(F,xt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<j;qt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(it+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return xt}let Zt={};Zt[n.TEXTURE_2D]=Ft(n.TEXTURE_2D,n.TEXTURE_2D,1),Zt[n.TEXTURE_CUBE_MAP]=Ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Zt[n.TEXTURE_2D_ARRAY]=Ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Zt[n.TEXTURE_3D]=Ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(Ar),Ot(!1),Tt(ru),J(n.CULL_FACE),_t(Ys);function J(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Dt(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function he(F,it){return d[F]!==it?(n.bindFramebuffer(F,it),d[F]=it,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=it),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=it),!0):!1}function Xt(F,it){let j=p,Mt=!1;if(F){j=f.get(it),j===void 0&&(j=[],f.set(it,j));let ft=F.textures;if(j.length!==ft.length||j[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,qt=ft.length;xt<qt;xt++)j[xt]=n.COLOR_ATTACHMENT0+xt;j.length=ft.length,Mt=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(j)}function ue(F){return x!==F?(n.useProgram(F),x=F,!0):!1}let Ee={[$s]:n.FUNC_ADD,[Rf]:n.FUNC_SUBTRACT,[Cf]:n.FUNC_REVERSE_SUBTRACT};Ee[Pf]=n.MIN,Ee[If]=n.MAX;let at={[Lf]:n.ZERO,[Df]:n.ONE,[Nf]:n.SRC_COLOR,[lu]:n.SRC_ALPHA,[kf]:n.SRC_ALPHA_SATURATE,[Bf]:n.DST_COLOR,[Ff]:n.DST_ALPHA,[Uf]:n.ONE_MINUS_SRC_COLOR,[cu]:n.ONE_MINUS_SRC_ALPHA,[Hf]:n.ONE_MINUS_DST_COLOR,[Of]:n.ONE_MINUS_DST_ALPHA,[Gf]:n.CONSTANT_COLOR,[zf]:n.ONE_MINUS_CONSTANT_COLOR,[Vf]:n.CONSTANT_ALPHA,[Wf]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(F,it,j,Mt,ft,xt,qt,pe,ut,$t){if(F===Ys){m===!0&&(Dt(n.BLEND),m=!1);return}if(m===!1&&(J(n.BLEND),m=!0),F!==Af){if(F!==g||$t!==T){if((y!==$s||A!==$s)&&(n.blendEquation(n.FUNC_ADD),y=$s,A=$s),$t)switch(F){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zs:n.blendFunc(n.ONE,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:te("WebGLState: Invalid blending: ",F);break}else switch(F){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ou:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case au:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",F);break}S=null,v=null,R=null,_=null,b.set(0,0,0),P=0,g=F,T=$t}return}ft=ft||it,xt=xt||j,qt=qt||Mt,(it!==y||ft!==A)&&(n.blendEquationSeparate(Ee[it],Ee[ft]),y=it,A=ft),(j!==S||Mt!==v||xt!==R||qt!==_)&&(n.blendFuncSeparate(at[j],at[Mt],at[xt],at[qt]),S=j,v=Mt,R=xt,_=qt),(pe.equals(b)===!1||ut!==P)&&(n.blendColor(pe.r,pe.g,pe.b,ut),b.copy(pe),P=ut),g=F,T=!1}function mt(F,it){F.side===ln?Dt(n.CULL_FACE):J(n.CULL_FACE);let j=F.side===un;it&&(j=!j),Ot(j),F.blending===Ss&&F.transparent===!1?_t(Ys):_t(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Mt=F.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Wt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function Tt(F){F!==Ef?(J(n.CULL_FACE),F!==O&&(F===ru?n.cullFace(n.BACK):F===wf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),O=F}function ce(F){F!==k&&(z&&n.lineWidth(F),k=F)}function Wt(F,it,j){F?(J(n.POLYGON_OFFSET_FILL),(D!==it||G!==j)&&(D=it,G=j,o.getReversed()&&(it=-it,j=-j),n.polygonOffset(it,j))):Dt(n.POLYGON_OFFSET_FILL)}function we(F){F?J(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function Te(F){F===void 0&&(F=n.TEXTURE0+q-1),st!==F&&(n.activeTexture(F),st=F)}function De(F,it,j){j===void 0&&(st===null?j=n.TEXTURE0+q-1:j=st);let Mt=rt[j];Mt===void 0&&(Mt={type:void 0,texture:void 0},rt[j]=Mt),(Mt.type!==F||Mt.texture!==it)&&(st!==j&&(n.activeTexture(j),st=j),n.bindTexture(F,it||Zt[F]),Mt.type=F,Mt.texture=it)}function H(){let F=rt[st];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function sn(){try{n.compressedTexImage2D(...arguments)}catch(F){te("WebGLState:",F)}}function be(){try{n.compressedTexImage3D(...arguments)}catch(F){te("WebGLState:",F)}}function He(){try{n.texSubImage2D(...arguments)}catch(F){te("WebGLState:",F)}}function St(){try{n.texSubImage3D(...arguments)}catch(F){te("WebGLState:",F)}}function Qe(){try{n.compressedTexSubImage2D(...arguments)}catch(F){te("WebGLState:",F)}}function Jt(){try{n.compressedTexSubImage3D(...arguments)}catch(F){te("WebGLState:",F)}}function ne(){try{n.texStorage2D(...arguments)}catch(F){te("WebGLState:",F)}}function I(){try{n.texStorage3D(...arguments)}catch(F){te("WebGLState:",F)}}function E(){try{n.texImage2D(...arguments)}catch(F){te("WebGLState:",F)}}function W(){try{n.texImage3D(...arguments)}catch(F){te("WebGLState:",F)}}function ht(F){return u[F]!==void 0?u[F]:n.getParameter(F)}function ot(F,it){u[F]!==it&&(n.pixelStorei(F,it),u[F]=it)}function gt(F){Q.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Q.copy(F))}function Et(F){bt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),bt.copy(F))}function et(F,it){let j=c.get(it);j===void 0&&(j=new WeakMap,c.set(it,j));let Mt=j.get(F);Mt===void 0&&(Mt=n.getUniformBlockIndex(it,F.name),n.uniformBlockBinding(it,Mt,Mt),j.set(F,Mt))}function nt(F,it,j){let ft=c.get(it).get(F);l[ft]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,ft,j),l[ft]=j)}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},st=null,rt={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,v=null,A=null,R=null,_=null,b=new oe(0,0,0),P=0,T=!1,L=null,O=null,k=null,D=null,G=null,Q.set(0,0,n.canvas.width,n.canvas.height),bt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:Dt,bindFramebuffer:he,drawBuffers:Xt,useProgram:ue,setBlending:_t,setMaterial:mt,setFlipSided:Ot,setCullFace:Tt,setLineWidth:ce,setPolygonOffset:Wt,setScissorTest:we,activeTexture:Te,bindTexture:De,unbindTexture:H,compressedTexImage2D:sn,compressedTexImage3D:be,texImage2D:E,texImage3D:W,pixelStorei:ot,getParameter:ht,updateUBOMapping:et,uniformBlockBinding:nt,texStorage2D:ne,texStorage3D:I,texSubImage2D:He,texSubImage3D:St,compressedTexSubImage2D:Qe,compressedTexSubImage3D:Jt,scissor:gt,viewport:Et,reset:yt}}function sM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return m?new OffscreenCanvas(I,E):Ao("canvas")}function y(I,E,W){let ht=1,ot=ne(I);if((ot.width>W||ot.height>W)&&(ht=W/Math.max(ot.width,ot.height)),ht<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let gt=Math.floor(ht*ot.width),Et=Math.floor(ht*ot.height);d===void 0&&(d=g(gt,Et));let et=E?g(gt,Et):d;return et.width=gt,et.height=Et,et.getContext("2d").drawImage(I,0,0,gt,Et),jt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+gt+"x"+Et+")."),et}else return"data"in I&&jt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function S(I){return I.generateMipmaps}function v(I){n.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(I,E,W,ht,ot,gt=!1){if(I!==null){if(n[I]!==void 0)return n[I];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Et;ht&&(Et=t.get("EXT_texture_norm16"),Et||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=E;if(E===n.RED&&(W===n.FLOAT&&(et=n.R32F),W===n.HALF_FLOAT&&(et=n.R16F),W===n.UNSIGNED_BYTE&&(et=n.R8),W===n.UNSIGNED_SHORT&&Et&&(et=Et.R16_EXT),W===n.SHORT&&Et&&(et=Et.R16_SNORM_EXT)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(et=n.R8UI),W===n.UNSIGNED_SHORT&&(et=n.R16UI),W===n.UNSIGNED_INT&&(et=n.R32UI),W===n.BYTE&&(et=n.R8I),W===n.SHORT&&(et=n.R16I),W===n.INT&&(et=n.R32I)),E===n.RG&&(W===n.FLOAT&&(et=n.RG32F),W===n.HALF_FLOAT&&(et=n.RG16F),W===n.UNSIGNED_BYTE&&(et=n.RG8),W===n.UNSIGNED_SHORT&&Et&&(et=Et.RG16_EXT),W===n.SHORT&&Et&&(et=Et.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(et=n.RG8UI),W===n.UNSIGNED_SHORT&&(et=n.RG16UI),W===n.UNSIGNED_INT&&(et=n.RG32UI),W===n.BYTE&&(et=n.RG8I),W===n.SHORT&&(et=n.RG16I),W===n.INT&&(et=n.RG32I)),E===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(et=n.RGB8UI),W===n.UNSIGNED_SHORT&&(et=n.RGB16UI),W===n.UNSIGNED_INT&&(et=n.RGB32UI),W===n.BYTE&&(et=n.RGB8I),W===n.SHORT&&(et=n.RGB16I),W===n.INT&&(et=n.RGB32I)),E===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),W===n.UNSIGNED_INT&&(et=n.RGBA32UI),W===n.BYTE&&(et=n.RGBA8I),W===n.SHORT&&(et=n.RGBA16I),W===n.INT&&(et=n.RGBA32I)),E===n.RGB&&(W===n.UNSIGNED_SHORT&&Et&&(et=Et.RGB16_EXT),W===n.SHORT&&Et&&(et=Et.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(et=n.R11F_G11F_B10F)),E===n.RGBA){let nt=gt?To:Ce.getTransfer(ot);W===n.FLOAT&&(et=n.RGBA32F),W===n.HALF_FLOAT&&(et=n.RGBA16F),W===n.UNSIGNED_BYTE&&(et=nt===Ue?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&Et&&(et=Et.RGBA16_EXT),W===n.SHORT&&Et&&(et=Et.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(I,E){let W;return I?E===null||E===li||E===Ks?W=n.DEPTH24_STENCIL8:E===ti?W=n.DEPTH32F_STENCIL8:E===Wr&&(W=n.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===li||E===Ks?W=n.DEPTH_COMPONENT24:E===ti?W=n.DEPTH_COMPONENT32F:E===Wr&&(W=n.DEPTH_COMPONENT16),W}function b(I,E){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==_n&&I.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function P(I){let E=new WeakRef(I);i.get(I).__ref=E,p.add(E),x.register(I,E,E)}function T(I){let E=i.get(I).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function L(I){k(I.target)}function O(I){D(I.target)}function k(I){I.removeEventListener("dispose",L),T(I),q(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function D(I){I.removeEventListener("dispose",O),T(I),lt(I)}function G(){for(let I of p){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?D(E):k(E))}p.clear(),u.clear()}function q(I){let E=i.get(I);if(E.__webglInit===void 0)return;let W=I.source,ht=f.get(W);if(ht){let ot=ht[E.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&z(I),Object.keys(ht).length===0&&f.delete(W)}i.remove(I)}function z(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let W=I.source,ht=f.get(W);delete ht[E.__cacheKey],o.memory.textures--}function lt(I){let E=i.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let W=I.depthTexture;if(W&&W.renderTarget===I&&k(W),I.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(E.__webglFramebuffer[ot]))for(let gt=0;gt<E.__webglFramebuffer[ot].length;gt++)n.deleteFramebuffer(E.__webglFramebuffer[ot][gt]);else n.deleteFramebuffer(E.__webglFramebuffer[ot]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ot])}else{if(Array.isArray(E.__webglFramebuffer))for(let ot=0;ot<E.__webglFramebuffer.length;ot++)n.deleteFramebuffer(E.__webglFramebuffer[ot]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ot=0;ot<E.__webglColorRenderbuffer.length;ot++)E.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ot]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ht=I.textures;for(let ot=0,gt=ht.length;ot<gt;ot++){let Et=i.get(ht[ot]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),o.memory.textures--),i.remove(ht[ot])}i.remove(I)}let Z=0;function st(){Z=0}function rt(){return Z}function Rt(I){Z=I}function Yt(){let I=Z;return I>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,I}function Q(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function bt(I,E){let W=i.get(I);if(I.isVideoTexture&&Qe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){let ht=I.image;if(ht===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(W,I,E);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function Ft(I,E){let W=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){mt(W,I,E);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function Zt(I,E){let W=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){mt(W,I,E);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function J(I,E){let W=i.get(I);if(I.version>0&&W.__version!==I.version){Ot(W,I,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}let Dt={[Gs]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[yl]:n.MIRRORED_REPEAT},he={[_n]:n.NEAREST,[Yf]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[Kl]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Xt={[Kf]:n.NEVER,[wu]:n.ALWAYS,[jf]:n.LESS,[Su]:n.LEQUAL,[Qf]:n.EQUAL,[Eu]:n.GEQUAL,[tp]:n.GREATER,[ep]:n.NOTEQUAL};function ue(I,E){if(E.type===ti&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Kl||E.magFilter===ta||E.magFilter===Yi||E.minFilter===In||E.minFilter===Kl||E.minFilter===ta||E.minFilter===Yi)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Dt[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Dt[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Dt[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,he[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,he[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Xt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_n||E.minFilter!==ta&&E.minFilter!==Yi||E.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ee(I,E){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",L),P(E));let ht=E.source,ot=f.get(ht);ot===void 0&&(ot={},f.set(ht,ot));let gt=Q(E);if(gt!==I.__cacheKey){ot[gt]===void 0&&(ot[gt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ot[gt].usedTimes++;let Et=ot[I.__cacheKey];Et!==void 0&&(ot[I.__cacheKey].usedTimes--,Et.usedTimes===0&&z(E)),I.__cacheKey=gt,I.__webglTexture=ot[gt].texture}return W}function at(I,E,W){return Math.floor(Math.floor(I/W)/E)}function _t(I,E,W,ht){let gt=I.updateRanges;if(gt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,W,ht,E.data);else{gt.sort((F,it)=>F.start-it.start);let Et=0;for(let F=1;F<gt.length;F++){let it=gt[Et],j=gt[F],Mt=it.start+it.count,ft=at(j.start,E.width,4),xt=at(it.start,E.width,4);j.start<=Mt+1&&ft===xt&&at(j.start+j.count-1,E.width,4)===ft?it.count=Math.max(it.count,j.start+j.count-it.start):(++Et,gt[Et]=j)}gt.length=Et+1;let et=e.getParameter(n.UNPACK_ROW_LENGTH),nt=e.getParameter(n.UNPACK_SKIP_PIXELS),yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let F=0,it=gt.length;F<it;F++){let j=gt[F],Mt=Math.floor(j.start/4),ft=Math.ceil(j.count/4),xt=Mt%E.width,qt=Math.floor(Mt/E.width),pe=ft,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(n.UNPACK_SKIP_ROWS,qt),e.texSubImage2D(n.TEXTURE_2D,0,xt,qt,pe,ut,W,ht,E.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,et),e.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(n.UNPACK_SKIP_ROWS,yt)}}function mt(I,E,W){let ht=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=n.TEXTURE_3D);let ot=Ee(I,E),gt=E.source;e.bindTexture(ht,I.__webglTexture,n.TEXTURE0+W);let Et=i.get(gt);if(gt.version!==Et.__version||ot===!0){if(e.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ut=Ce.getPrimaries(Ce.workingColorSpace),$t=E.colorSpace===$i?null:Ce.getPrimaries(E.colorSpace),de=E.colorSpace===$i||ut===$t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}e.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let nt=y(E.image,!1,s.maxTextureSize);nt=Jt(E,nt);let yt=r.convert(E.format,E.colorSpace),F=r.convert(E.type),it=R(E.internalFormat,yt,F,E.normalized,E.colorSpace,E.isVideoTexture);ue(ht,E);let j,Mt=E.mipmaps,ft=E.isVideoTexture!==!0,xt=Et.__version===void 0||ot===!0,qt=gt.dataReady,pe=b(E,nt);if(E.isDepthTexture)it=_(E.format===Zi,E.type),xt&&(ft?e.texStorage2D(n.TEXTURE_2D,1,it,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,it,nt.width,nt.height,0,yt,F,null));else if(E.isDataTexture)if(Mt.length>0){ft&&xt&&e.texStorage2D(n.TEXTURE_2D,pe,it,Mt[0].width,Mt[0].height);for(let ut=0,$t=Mt.length;ut<$t;ut++)j=Mt[ut],ft?qt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,j.width,j.height,yt,F,j.data):e.texImage2D(n.TEXTURE_2D,ut,it,j.width,j.height,0,yt,F,j.data);E.generateMipmaps=!1}else ft?(xt&&e.texStorage2D(n.TEXTURE_2D,pe,it,nt.width,nt.height),qt&&_t(E,nt,yt,F)):e.texImage2D(n.TEXTURE_2D,0,it,nt.width,nt.height,0,yt,F,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ft&&xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pe,it,Mt[0].width,Mt[0].height,nt.depth);for(let ut=0,$t=Mt.length;ut<$t;ut++)if(j=Mt[ut],E.format!==hi)if(yt!==null)if(ft){if(qt)if(E.layerUpdates.size>0){let de=Lu(j.width,j.height,E.format,E.type);for(let Ct of E.layerUpdates){let Oe=j.data.subarray(Ct*de/j.data.BYTES_PER_ELEMENT,(Ct+1)*de/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,Ct,j.width,j.height,1,yt,Oe)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,j.width,j.height,nt.depth,yt,j.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,it,j.width,j.height,nt.depth,0,j.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?qt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,j.width,j.height,nt.depth,yt,F,j.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,it,j.width,j.height,nt.depth,0,yt,F,j.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ft&&xt&&e.texStorage2D(n.TEXTURE_2D,pe,it,Mt[0].width,Mt[0].height);for(let ut=0,$t=Mt.length;ut<$t;ut++)j=Mt[ut],E.format!==hi?yt!==null?ft?qt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,j.width,j.height,yt,j.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,it,j.width,j.height,0,j.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?qt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,j.width,j.height,yt,F,j.data):e.texImage2D(n.TEXTURE_2D,ut,it,j.width,j.height,0,yt,F,j.data)}else if(E.isDataArrayTexture)if(ft){if(xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pe,it,nt.width,nt.height,nt.depth),qt)if(E.layerUpdates.size>0){let ut=Lu(nt.width,nt.height,E.format,E.type);for(let $t of E.layerUpdates){let de=nt.data.subarray($t*ut/nt.data.BYTES_PER_ELEMENT,($t+1)*ut/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$t,nt.width,nt.height,1,yt,F,de)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,yt,F,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,it,nt.width,nt.height,nt.depth,0,yt,F,nt.data);else if(E.isData3DTexture)ft?(xt&&e.texStorage3D(n.TEXTURE_3D,pe,it,nt.width,nt.height,nt.depth),qt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,yt,F,nt.data)):e.texImage3D(n.TEXTURE_3D,0,it,nt.width,nt.height,nt.depth,0,yt,F,nt.data);else if(E.isFramebufferTexture){if(xt)if(ft)e.texStorage2D(n.TEXTURE_2D,pe,it,nt.width,nt.height);else{let ut=nt.width,$t=nt.height;for(let de=0;de<pe;de++)e.texImage2D(n.TEXTURE_2D,de,it,ut,$t,0,yt,F,null),ut>>=1,$t>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),nt.parentNode!==ut){ut.appendChild(nt),u.add(E),ut.onpaint=$t=>{let de=$t.changedElements;for(let Ct of u)de.includes(Ct.image)&&(Ct.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,nt);else{let de=n.RGBA,Ct=n.RGBA,Oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,de,Ct,Oe,nt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(ft&&xt){let ut=ne(Mt[0]);e.texStorage2D(n.TEXTURE_2D,pe,it,ut.width,ut.height)}for(let ut=0,$t=Mt.length;ut<$t;ut++)j=Mt[ut],ft?qt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,yt,F,j):e.texImage2D(n.TEXTURE_2D,ut,it,yt,F,j);E.generateMipmaps=!1}else if(ft){if(xt){let ut=ne(nt);e.texStorage2D(n.TEXTURE_2D,pe,it,ut.width,ut.height)}qt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,F,nt)}else e.texImage2D(n.TEXTURE_2D,0,it,yt,F,nt);S(E)&&E.mipmapsAutoUpdate===!0&&v(ht),Et.__version=gt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ot(I,E,W){if(E.image.length!==6)return;let ht=Ee(I,E),ot=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+W);let gt=i.get(ot);if(ot.version!==gt.__version||ht===!0){e.activeTexture(n.TEXTURE0+W);let Et=Ce.getPrimaries(Ce.workingColorSpace),et=E.colorSpace===$i?null:Ce.getPrimaries(E.colorSpace),nt=E.colorSpace===$i||Et===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let yt=E.isCompressedTexture||E.image[0].isCompressedTexture,F=E.image[0]&&E.image[0].isDataTexture,it=[];for(let Ct=0;Ct<6;Ct++)!yt&&!F?it[Ct]=y(E.image[Ct],!0,s.maxCubemapSize):it[Ct]=F?E.image[Ct].image:E.image[Ct],it[Ct]=Jt(E,it[Ct]);let j=it[0],Mt=r.convert(E.format,E.colorSpace),ft=r.convert(E.type),xt=R(E.internalFormat,Mt,ft,E.normalized,E.colorSpace),qt=E.isVideoTexture!==!0,pe=gt.__version===void 0||ht===!0,ut=ot.dataReady,$t=b(E,j);ue(n.TEXTURE_CUBE_MAP,E);let de;if(E.isDepthTexture){if(xt=_(E.format===Zi,E.type),pe)if(qt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,xt,j.width,j.height);else for(let Ct=0;Ct<6;Ct++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,xt,j.width,j.height,0,Mt,ft,null)}else if(yt){qt&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,$t,xt,j.width,j.height);for(let Ct=0;Ct<6;Ct++){de=it[Ct].mipmaps;for(let Oe=0;Oe<de.length;Oe++){let mn=de[Oe];E.format!==hi?Mt!==null?qt?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Oe,0,0,mn.width,mn.height,Mt,mn.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Oe,xt,mn.width,mn.height,0,mn.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Oe,0,0,mn.width,mn.height,Mt,ft,mn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Oe,xt,mn.width,mn.height,0,Mt,ft,mn.data)}}}else{if(de=E.mipmaps,qt&&pe){de.length>0&&$t++;let Ct=ne(it[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,$t,xt,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(F){qt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,it[Ct].width,it[Ct].height,Mt,ft,it[Ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,xt,it[Ct].width,it[Ct].height,0,Mt,ft,it[Ct].data);for(let Oe=0;Oe<de.length;Oe++){let ls=de[Oe].image[Ct].image;qt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Oe+1,0,0,ls.width,ls.height,Mt,ft,ls.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Oe+1,xt,ls.width,ls.height,0,Mt,ft,ls.data)}}else{qt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Mt,ft,it[Ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,xt,Mt,ft,it[Ct]);for(let Oe=0;Oe<de.length;Oe++){let mn=de[Oe];qt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Oe+1,0,0,Mt,ft,mn.image[Ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Oe+1,xt,Mt,ft,mn.image[Ct])}}}S(E)&&E.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),gt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Tt(I,E,W,ht,ot,gt){let Et=r.convert(W.format,W.colorSpace),et=r.convert(W.type),nt=R(W.internalFormat,Et,et,W.normalized,W.colorSpace),yt=i.get(E),F=i.get(W);if(F.__renderTarget=E,!yt.__hasExternalTextures){let it=Math.max(1,E.width>>gt),j=Math.max(1,E.height>>gt);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,gt,nt,it,j,E.depth,0,Et,et,null):e.texImage2D(ot,gt,nt,it,j,0,Et,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),St(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,ot,F.__webglTexture,0,He(E)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ht,ot,F.__webglTexture,gt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(I,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let ht=E.depthTexture,ot=ht&&ht.isDepthTexture?ht.type:null,gt=_(E.stencilBuffer,ot),Et=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;St(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He(E),gt,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,He(E),gt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,gt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,I)}else{let ht=E.textures;for(let ot=0;ot<ht.length;ot++){let gt=ht[ot],Et=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),nt=R(gt.internalFormat,Et,et,gt.normalized,gt.colorSpace);St(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He(E),nt,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,He(E),nt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,nt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(I,E,W){let ht=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(E.depthTexture);ot.__renderTarget=E;let gt=ht?E.depthTexture.image[0]:E.depthTexture.image;(!ot.__webglTexture||gt.width!==E.width||gt.height!==E.height)&&(gt.width=E.width,gt.height=E.height,E.depthTexture.needsUpdate=!0),ht?J(E.depthTexture,0):bt(E.depthTexture,0);let Et=ot.__webglTexture,et=He(E),nt=ht?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,yt=E.depthTexture.format===Zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===zi)St(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,yt,nt,Et,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,yt,nt,Et,0);else if(E.depthTexture.format===Zi)St(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,yt,nt,Et,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,yt,nt,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(I){let E=i.get(I),W=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let ht=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){let ot=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",ot)};ht.addEventListener("dispose",ot),E.__depthDisposeCallback=ot}E.__boundDepthTexture=ht}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)Wt(E.__webglFramebuffer[ht],I,ht);else I.texture.mipmaps.length>0?Wt(E.__webglFramebuffer[0],I,0):Wt(E.__webglFramebuffer,I,0);else if(W){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=n.createRenderbuffer(),ce(E.__webglDepthbuffer[ht],I,!1);else{let ot=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer[ht];n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,gt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ce(E.__webglDepthbuffer,I,!1);else{let ot=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,gt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(I,E,W){let ht=i.get(I);E!==void 0&&Tt(ht.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&we(I)}function De(I){let E=I.texture,W=i.get(I),ht=i.get(E);I.addEventListener("dispose",O),P(I);let ot=I.textures,gt=I.isWebGLCubeRenderTarget===!0,Et=ot.length>1;if(Et||(ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture()),ht.__version=E.version,o.memory.textures++),gt){W.__webglFramebuffer=[];for(let et=0;et<6;et++)if(E.mipmaps.length>0){W.__webglFramebuffer[et]=[];for(let nt=0;nt<E.mipmaps.length;nt++)W.__webglFramebuffer[et][nt]=n.createFramebuffer()}else W.__webglFramebuffer[et]=n.createFramebuffer()}else{if(E.mipmaps.length>0){W.__webglFramebuffer=[];for(let et=0;et<E.mipmaps.length;et++)W.__webglFramebuffer[et]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Et)for(let et=0,nt=ot.length;et<nt;et++){let yt=i.get(ot[et]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&St(I)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let et=0;et<ot.length;et++){let nt=ot[et];W.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[et]);let yt=r.convert(nt.format,nt.colorSpace),F=r.convert(nt.type),it=R(nt.internalFormat,yt,F,nt.normalized,nt.colorSpace,I.isXRRenderTarget===!0),j=He(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,it,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,W.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(gt){e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),ue(n.TEXTURE_CUBE_MAP,E);for(let et=0;et<6;et++)if(E.mipmaps.length>0)for(let nt=0;nt<E.mipmaps.length;nt++)Tt(W.__webglFramebuffer[et][nt],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,nt);else Tt(W.__webglFramebuffer[et],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);S(E)?v(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(Et){for(let et=0,nt=ot.length;et<nt;et++){let yt=ot[et],F=i.get(yt),it=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(it=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,F.__webglTexture),ue(it,yt),Tt(W.__webglFramebuffer,I,yt,n.COLOR_ATTACHMENT0+et,it,0),S(yt)&&v(it)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(et=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,ht.__webglTexture),ue(et,E),E.mipmaps.length>0)for(let nt=0;nt<E.mipmaps.length;nt++)Tt(W.__webglFramebuffer[nt],I,E,n.COLOR_ATTACHMENT0,et,nt);else Tt(W.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,et,0);S(E)?v(et):E.mipmaps.length>0&&n.texParameteri(et,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&we(I)}function H(I){let E=I.textures;for(let W=0,ht=E.length;W<ht;W++){let ot=E[W];if(S(ot)&&ot.mipmapsAutoUpdate===!0){let gt=A(I),Et=i.get(ot).__webglTexture;e.bindTexture(gt,Et),v(gt),e.unbindTexture()}}}let sn=[];function be(I){if(I.samples>0){if(St(I)===!1){let E=I.textures,W=I.width,ht=I.height,ot=n.COLOR_BUFFER_BIT,gt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(I),et=E.length>1;if(et)for(let yt=0;yt<E.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let yt=0;yt<E.length;yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);let F=i.get(E[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,W,ht,0,0,W,ht,ot,n.NEAREST),l===!0&&(sn.length=0,sn.push(n.COLOR_ATTACHMENT0+yt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&sn.push(gt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,sn))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let yt=0;yt<E.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);let F=i.get(E[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,F,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function He(I){return Math.min(s.maxSamples,I.samples)}function St(I){let E=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qe(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Jt(I,E){let W=I.colorSpace,ht=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==wo&&W!==$i&&(Ce.getTransfer(W)===Ue?(ht!==hi||ot!==Bn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",W)),E}function ne(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Yt,this.resetTextureUnits=st,this.getTextureUnits=rt,this.setTextureUnits=Rt,this.setTexture2D=bt,this.setTexture2DArray=Ft,this.setTexture3D=Zt,this.setTextureCube=J,this.rebindTextures=Te,this.setupRenderTarget=De,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=St,this.dispose=G}function rM(n,t){function e(i,s=$i){let r,o=Ce.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===Ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xu)return n.BYTE;if(i===_u)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===jl)return n.INT;if(i===li)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===vu)return n.ALPHA;if(i===bu)return n.RGB;if(i===hi)return n.RGBA;if(i===zi)return n.DEPTH_COMPONENT;if(i===Zi)return n.DEPTH_STENCIL;if(i===ec)return n.RED;if(i===nc)return n.RED_INTEGER;if(i===Es)return n.RG;if(i===ic)return n.RG_INTEGER;if(i===sc)return n.RGBA_INTEGER;if(i===ea||i===na||i===ia||i===sa)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rc||i===oc||i===ac||i===lc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cc||i===hc||i===uc||i===dc||i===fc||i===ra||i===pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cc||i===hc)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===dc)return r.COMPRESSED_R11_EAC;if(i===fc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ra)return r.COMPRESSED_RG11_EAC;if(i===pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mc||i===gc||i===xc||i===_c||i===yc||i===Mc||i===vc||i===bc||i===Sc||i===Ec||i===wc||i===Tc||i===Ac||i===Rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===mc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_c)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ec)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ac)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cc||i===Pc||i===Ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Cc)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lc||i===Dc||i===oa||i===Nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var oM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aM=`
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

}`,qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Bo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Qn({vertexShader:oM,fragmentShader:aM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new U(new Xe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yu=class extends _i{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new qu,g={},y=e.getContextAttributes(),S=null,v=null,A=[],R=[],_=new ct,b=null,P=null,T=new Mn;T.viewport=new qe;let L=new Mn;L.viewport=new qe;let O=[T,L],k=new ql,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let bt=A[Q];return bt===void 0&&(bt=new Ir,A[Q]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(Q){let bt=A[Q];return bt===void 0&&(bt=new Ir,A[Q]=bt),bt.getGripSpace()},this.getHand=function(Q){let bt=A[Q];return bt===void 0&&(bt=new Ir,A[Q]=bt),bt.getHandSpace()};function q(Q){let bt=R.indexOf(Q.inputSource);if(bt===-1)return;let Ft=A[bt];Ft!==void 0&&(Ft.update(Q.inputSource,Q.frame,c||o),Ft.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",lt);for(let Q=0;Q<A.length;Q++){let bt=R[Q];bt!==null&&(R[Q]=null,A[Q].disconnect(bt))}D=null,G=null,m.reset();for(let Q in g)delete g[Q];if(t.setRenderTarget(S),f=null,d=null,u=null,s=null,v=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),P!==null){let Q=P.camera;Q.fov=P.fov,Q.zoom=P.zoom,Q.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",lt),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ft=null,Zt=null,J=null;y.depth&&(J=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ft=y.stencil?Zi:zi,Zt=y.stencil?Ks:li);let Dt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new zn(d.textureWidth,d.textureHeight,{format:hi,type:Bn,depthTexture:new Wi(d.textureWidth,d.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Ft),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ft={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new zn(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function lt(Q){for(let bt=0;bt<Q.removed.length;bt++){let Ft=Q.removed[bt],Zt=R.indexOf(Ft);Zt>=0&&(R[Zt]=null,A[Zt].disconnect(Ft))}for(let bt=0;bt<Q.added.length;bt++){let Ft=Q.added[bt],Zt=R.indexOf(Ft);if(Zt===-1){for(let Dt=0;Dt<A.length;Dt++)if(Dt>=R.length){R.push(Ft),Zt=Dt;break}else if(R[Dt]===null){R[Dt]=Ft,Zt=Dt;break}if(Zt===-1)break}let J=A[Zt];J&&J.connect(Ft)}}function Z(Q,bt){bt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(bt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let bt=Q.near,Ft=Q.far;m.texture!==null&&(m.depthNear>0&&(bt=m.depthNear),m.depthFar>0&&(Ft=m.depthFar)),k.near=L.near=T.near=bt,k.far=L.far=T.far=Ft,(D!==k.near||G!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,G=k.far),k.layers.mask=Q.layers.mask|6,T.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let Zt=Q.parent,J=k.cameras;Z(k,Zt);for(let Dt=0;Dt<J.length;Dt++)Z(J[Dt],Zt);k.projectionMatrix.copy(T.projectionMatrix),k.projectionMatrixInverse.copy(T.projectionMatrixInverse),P===null&&Q.isPerspectiveCamera&&(P={camera:Q,fov:Q.fov,zoom:Q.zoom}),st(Q,k,Zt)};function st(Q,bt,Ft){Ft===null?Q.matrix.copy(bt.matrixWorld):(Q.matrix.copy(Ft.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(bt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(bt.projectionMatrix),Q.projectionMatrixInverse.copy(bt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Q){return g[Q]};let rt=null;function Rt(Q,bt){if(h=bt.getViewerPose(c||o),p=bt,h!==null){let Ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Zt=!1;Ft.length!==k.cameras.length&&(k.cameras.length=0,Zt=!0);for(let Xt=0;Xt<Ft.length;Xt++){let ue=Ft[Xt],Ee=null;if(f!==null)Ee=f.getViewport(ue);else{let _t=u.getViewSubImage(d,ue);Ee=_t.viewport,Xt===0&&(t.setRenderTargetTextures(v,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(v))}let at=O[Xt];at===void 0&&(at=new Mn,at.layers.enable(Xt),at.viewport=new qe,O[Xt]=at),at.matrix.fromArray(ue.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ue.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Xt===0&&(k.matrix.copy(at.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Zt===!0&&k.cameras.push(at)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Xt=u.getDepthInformation(Ft[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,s.renderState)}if(J&&J.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Xt=0;Xt<Ft.length;Xt++){let ue=Ft[Xt].camera;if(ue){let Ee=g[ue];Ee||(Ee=new Bo,g[ue]=Ee);let at=u.getCameraImage(ue);Ee.sourceTexture=at}}}}for(let Ft=0;Ft<A.length;Ft++){let Zt=R[Ft],J=A[Ft];Zt!==null&&J!==void 0&&J.update(Zt,bt,c||o)}rt&&rt(Q,bt),bt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:bt}),p=null}let Yt=new Hp;Yt.setAnimationLoop(Rt),this.setAnimationLoop=function(Q){rt=Q},this.dispose=function(){}}},lM=new Kt,$p=new ae;$p.set(-1,0,0,0,1,0,0,0,1);function cM(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Cu(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,S,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($p),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hM(n,t,e,i){let s={},r={};function o(y,S){let v=S.program;i.uniformBlockBinding(y,v,s[y.id])}function a(y,S){let v=s[y.id];v===void 0&&(p(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",m));let A=S.program;i.updateUBOMapping(y,A);let R=t.render.frame;r[y.id]!==R&&(c(y),r[y.id]=R)}function l(y){let S=n.createBuffer(),v=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,A),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(y){let S=s[y.id],v=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,_=v.length;R<_;R++){let b=v[R];if(Array.isArray(b))for(let P=0,T=b.length;P<T;P++)h(b[P],R,P,A);else h(b,R,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,v,A){if(d(y,S,v,A)===!0){let R=y.__offset,_=y.value;if(Array.isArray(_)){let b=0;for(let P=0;P<_.length;P++){let T=_[P],L=x(T,!0);u(T,y.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,y.__data)}}function u(y,S,v){typeof y=="number"||typeof y=="boolean"?S[v]=y:y.isMatrix3?(S[v]=y.elements[0],S[v+1]=y.elements[1],S[v+2]=y.elements[2],S[v+3]=0,S[v+4]=y.elements[3],S[v+5]=y.elements[4],S[v+6]=y.elements[5],S[v+7]=0,S[v+8]=y.elements[6],S[v+9]=y.elements[7],S[v+10]=y.elements[8],S[v+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-v),v):y.toArray(S,v)}function d(y,S,v,A){let R=y.value,_=S+"_"+v;if(Array.isArray(R)){A[_]===void 0&&(A[_]=[]);let b=A[_],P=!1;for(let T=0;T<R.length;T++)f(R[T],b,T)===!0&&(P=!0);return P}return f(R,A,_)}function f(y,S,v){if(S[v]===void 0)return typeof y=="number"||typeof y=="boolean"?S[v]=y:ArrayBuffer.isView(y)?S[v]=y.slice():S[v]=y.clone(),!0;{let A=S[v];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return S[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function p(y){let S=y.uniforms,v=0,A=16;for(let _=0,b=S.length;_<b;_++){let P=Array.isArray(S[_])?S[_]:[S[_]];for(let T=0,L=P.length;T<L;T++){let O=P[T],k=Array.isArray(O.value)?O.value:[O.value],D=Array.isArray(S[_])||Array.isArray(O.value),G=v;for(let z=0,lt=k.length;z<lt;z++){let Z=k[z],st=x(Z,D),rt=v%A,Rt=rt%st.boundary,Yt=rt+Rt;v+=Rt,Yt!==0&&A-Yt<st.storage&&(v+=A-Yt),z===0&&(G=v),v+=st.storage}let q=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new q((v-G)/Float32Array.BYTES_PER_ELEMENT),O.__offset=G}}let R=v%A;return R>0&&(v+=A-R),y.__size=v,y.__cache={},this}function x(y,S){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let S=y.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var uM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function dM(){return wi===null&&(wi=new Uo(uM,16,16,Es,ci),wi.name="DFG_LUT",wi.minFilter=In,wi.magFilter=In,wi.wrapS=xi,wi.wrapT=xi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Bc=class{constructor(t={}){let{canvas:e=np(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Bn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,m=new Set([sc,ic,nc]),g=new Set([Bn,li,Wr,Ks,Ql,tc]),y=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,R=null,_=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,L=!1,O=null,k=null,D=null,G=null;this._outputColorSpace=hn;let q=0,z=0,lt=null,Z=-1,st=null,rt=new qe,Rt=new qe,Yt=null,Q=new oe(0),bt=0,Ft=e.width,Zt=e.height,J=1,Dt=null,he=null,Xt=new qe(0,0,Ft,Zt),ue=new qe(0,0,Ft,Zt),Ee=!1,at=new _s,_t=new Tl,mt=!1,Ot=!1,Tt=new Kt,ce=new N,Wt=new qe,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function De(){return lt===null?J:1}let H=i;function sn(w,B){return e.getContext(w,B)}let be,He,St,Qe,Jt,ne,I,E,W,ht,ot,gt,Et,et,nt,yt,F,it,j,Mt,ft,xt,qt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),H===null){let B="webgl2";if(H=sn(B,w),H===null)throw sn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(w){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),te("WebGLRenderer: "+w.message),w}function pe(){be=new S1(H),be.init(),ft=new rM(H,be),He=new d1(H,be,t,ft),St=new iM(H,be),He.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),k=H.createFramebuffer(),D=H.createFramebuffer(),G=H.createFramebuffer(),Qe=new T1(H),Jt=new Vy,ne=new sM(H,be,St,Jt,He,ft,Qe),I=new b1(T),E=new Rg(H),xt=new h1(H,E),W=new E1(H,E,Qe,xt),ht=new R1(H,W,E,xt,Qe),it=new A1(H,He,ne),nt=new f1(Jt),ot=new zy(T,I,be,He,xt,nt),gt=new cM(T,Jt),Et=new Xy,et=new Ky(be),F=new c1(T,I,St,ht,p,l),yt=new nM(T,ht,He),qt=new hM(H,Qe,He,St),j=new u1(H,be,Qe),Mt=new w1(H,be,Qe),Qe.programs=ot.programs,T.capabilities=He,T.extensions=be,T.properties=Jt,T.renderLists=Et,T.shadowMap=yt,T.state=St,T.info=Qe}x!==Bn&&(P=new P1(x,e.width,e.height,a,s,r));let ut=new Yu(T,H);this.xr=ut,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(Ft,Zt,!1))},this.getSize=function(w){return w.set(Ft,Zt)},this.setSize=function(w,B,Y=!0){if(ut.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ft=w,Zt=B,e.width=Math.floor(w*J),e.height=Math.floor(B*J),Y===!0&&(e.style.width=w+"px",e.style.height=B+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(Ft*J,Zt*J).floor()},this.setDrawingBufferSize=function(w,B,Y){Ft=w,Zt=B,J=Y,e.width=Math.floor(w*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(x===Bn){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(rt)},this.getViewport=function(w){return w.copy(Xt)},this.setViewport=function(w,B,Y,V){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,B,Y,V),St.viewport(rt.copy(Xt).multiplyScalar(De()).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,B,Y,V){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,B,Y,V),St.scissor(Rt.copy(ue).multiplyScalar(De()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(w){St.setScissorTest(Ee=w)},this.setOpaqueSort=function(w){Dt=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,Y=!0){let V=0;if(w){let X=!1;if(lt!==null){let wt=lt.texture.format;X=m.has(wt)}if(X){let wt=lt.texture.type,Bt=g.has(wt),vt=F.getClearColor(),Lt=F.getClearAlpha(),Vt=vt.r,le=vt.g,Ae=vt.b;Bt?(y[0]=Vt,y[1]=le,y[2]=Ae,y[3]=Lt,H.clearBufferuiv(H.COLOR,0,y)):(S[0]=Vt,S[1]=le,S[2]=Ae,S[3]=Lt,H.clearBufferiv(H.COLOR,0,S))}else V|=H.COLOR_BUFFER_BIT}B&&(V|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&H.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),F.dispose(),Et.dispose(),et.dispose(),ne.dispose(),Jt.dispose(),I.dispose(),ht.dispose(),W.dispose(),xt.dispose(),qt.dispose(),ot.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Dd),ut.removeEventListener("sessionend",Nd),Ls.stop()};function $t(w){w.preventDefault(),Ro("WebGLRenderer: Context Lost."),L=!0}function de(){Ro("WebGLRenderer: Context Restored."),L=!1;let w=Qe.autoReset,B=yt.enabled,Y=yt.autoUpdate,V=yt.needsUpdate,X=yt.type;pe(),Qe.autoReset=w,yt.enabled=B,yt.autoUpdate=Y,yt.needsUpdate=V,yt.type=X}function Ct(w){te("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){let B=w.target;B.removeEventListener("dispose",Oe),mn(B)}function mn(w){ls(w),Jt.remove(w)}function ls(w){let B=Jt.get(w).programs;B!==void 0&&(B.forEach(function(Y){ot.releaseProgram(Y)}),w.isShaderMaterial&&ot.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,Y,V,X,wt){B===null&&(B=we);let Bt=X.isMesh&&X.matrixWorld.determinantAffine()<0,vt=dm(w,B,Y,V,X);St.setMaterial(V,Bt);let Lt=Y.index,Vt=1;if(V.wireframe===!0){if(Lt=W.getWireframeAttribute(Y),Lt===void 0)return;Vt=2}let le=Y.drawRange,Ae=Y.attributes.position,Gt=le.start*Vt,Re=(le.start+le.count)*Vt;wt!==null&&(Gt=Math.max(Gt,wt.start*Vt),Re=Math.min(Re,(wt.start+wt.count)*Vt)),Lt!==null?(Gt=Math.max(Gt,0),Re=Math.min(Re,Lt.count)):Ae!=null&&(Gt=Math.max(Gt,0),Re=Math.min(Re,Ae.count));let rn=Re-Gt;if(rn<0||rn===1/0)return;xt.setup(X,V,vt,Y,Lt);let ze,ke=j;if(Lt!==null&&(ze=E.get(Lt),ke=Mt,ke.setIndex(ze)),X.isMesh)V.wireframe===!0?(St.setLineWidth(V.wireframeLinewidth*De()),ke.setMode(H.LINES)):ke.setMode(H.TRIANGLES);else if(X.isLine){let En=V.linewidth;En===void 0&&(En=1),St.setLineWidth(En*De()),X.isLineSegments?ke.setMode(H.LINES):X.isLineLoop?ke.setMode(H.LINE_LOOP):ke.setMode(H.LINE_STRIP)}else X.isPoints?ke.setMode(H.POINTS):X.isSprite&&ke.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(be.get("WEBGL_multi_draw"))ke.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let En=X._multiDrawStarts,zt=X._multiDrawCounts,Cn=X._multiDrawCount,Ne=Lt?E.get(Lt).bytesPerElement:1,Ds=Jt.get(V).currentProgram.getUniforms();for(let wn=0;wn<Cn;wn++)Ds.setValue(H,"_gl_DrawID",wn),ke.render(En[wn]/Ne,zt[wn])}else if(X.isInstancedMesh)ke.renderInstances(Gt,rn,X.count);else if(Y.isInstancedBufferGeometry){let En=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,zt=Math.min(Y.instanceCount,En);ke.renderInstances(Gt,rn,zt)}else ke.render(Gt,rn)};function Ld(w,B,Y,V){O!==null&&w.isNodeMaterial&&O.setObject(V,w),mt===!0&&nt.setState(w,Y,!1),w.transparent===!0&&w.side===ln&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,ho(w,B,V),w.side=bs,w.needsUpdate=!0,ho(w,B,V),w.side=ln):ho(w,B,V)}this.compile=function(w,B,Y=null){Y===null&&(Y=w),O!==null&&O.renderStart(w,B,Y),R=et.get(Y),R.init(B),b.push(R),Y.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(R.pushLight(X),X.castShadow&&R.pushShadow(X))}),w!==Y&&w.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(R.pushLight(X),X.castShadow&&R.pushShadow(X))}),R.setupLights(),O!==null&&O.updateLights(R.state.lightsArray),Ot=this.localClippingEnabled,mt=nt.init(this.clippingPlanes,Ot),mt===!0&&nt.setGlobalState(this.clippingPlanes,B),O!==null&&yt.render(R.state.shadowsArray,Y,B);let V=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let wt=X.material;if(wt)if(Array.isArray(wt))for(let Bt=0;Bt<wt.length;Bt++){let vt=wt[Bt];Ld(vt,Y,B,X),V.add(vt)}else Ld(wt,Y,B,X),V.add(wt)}),R=b.pop(),O!==null&&O.renderEnd(),V},this.compileAsync=function(w,B,Y=null){let V=this.compile(w,B,Y);return new Promise(X=>{function wt(){if(V.forEach(function(Bt){let Lt=Jt.get(Bt).currentProgram;(Lt===void 0||Lt.isReady())&&V.delete(Bt)}),V.size===0){X(w);return}setTimeout(wt,10)}be.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Mh=null;function hm(w){Mh&&Mh(w)}function Dd(){Ls.stop()}function Nd(){Ls.start()}let Ls=new Hp;Ls.setAnimationLoop(hm),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(w){Mh=w,ut.setAnimationLoop(w),w===null?Ls.stop():Ls.start()},ut.addEventListener("sessionstart",Dd),ut.addEventListener("sessionend",Nd),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(w,B);let Y=ut.enabled===!0&&ut.isPresenting===!0,V=P!==null&&(lt===null||Y)&&P.begin(T,lt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(B),B=ut.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,B,lt),R=et.get(w,b.length),R.init(B),R.state.textureUnits=ne.getTextureUnits(),b.push(R),Tt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?_t.setFromArrayCamera(B):at.setFromProjectionMatrix(Tt,Jn,B.reversedDepth),Ot=this.localClippingEnabled,mt=nt.init(this.clippingPlanes,Ot),A=Et.get(w,_.length),A.init(),_.push(A),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let Bt=T.xr.getDepthSensingMesh();Bt!==null&&vh(Bt,B,-1/0,T.sortObjects)}vh(w,B,0,T.sortObjects),A.finish(),O!==null&&O.updateLights(R.state.lightsArray),T.sortObjects===!0&&A.sort(Dt,he),Te=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Te&&F.addToRenderList(A,w),this.info.autoReset===!0&&this.info.reset(),mt===!0&&nt.beginShadows();let X=R.state.shadowsArray;if(yt.render(X,w,B),mt===!0&&nt.endShadows(),(V&&P.hasRenderPass())===!1){let Bt=A.opaque,vt=A.transmissive;if(R.setupLights(),B.isArrayCamera){let Lt=B.cameras;if(vt.length>0)for(let Vt=0,le=Lt.length;Vt<le;Vt++){let Ae=Lt[Vt];Fd(Bt,vt,w,Ae)}Te&&F.render(w);for(let Vt=0,le=Lt.length;Vt<le;Vt++){let Ae=Lt[Vt];Ud(A,w,Ae,Ae.viewport)}}else vt.length>0&&Fd(Bt,vt,w,B),Te&&F.render(w),Ud(A,w,B)}lt!==null&&z===0&&(ne.updateMultisampleRenderTarget(lt),ne.updateRenderTargetMipmap(lt)),V&&P.end(T),w.isScene===!0&&w.onAfterRender(T,w,B),xt.resetDefaultState(),Z=-1,st=null,b.pop(),b.length>0?(R=b[b.length-1],ne.setTextureUnits(R.state.textureUnits),mt===!0&&nt.setGlobalState(T.clippingPlanes,R.state.camera)):R=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,O!==null&&O.renderEnd()};function vh(w,B,Y,V){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){let Bt=B.isArrayCamera?_t:at;if(!w.frustumCulled||w.intersectsFrustum(Bt)){V&&Wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);let vt=ht.update(w),Lt=w.material;Lt.visible&&A.push(w,vt,Lt,Y,Wt.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){let Bt=B.isArrayCamera?_t:at;if(!w.frustumCulled||w.intersectsFrustum(Bt)){let vt=ht.update(w),Lt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Wt.copy(w.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Wt.copy(vt.boundingSphere.center)),Wt.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(Lt)){let Vt=vt.groups;for(let le=0,Ae=Vt.length;le<Ae;le++){let Gt=Vt[le],Re=Lt[Gt.materialIndex];Re&&Re.visible&&A.push(w,vt,Re,Y,Wt.z,Gt,B)}}else Lt.visible&&A.push(w,vt,Lt,Y,Wt.z,null,B)}}}let wt=w.children;for(let Bt=0,vt=wt.length;Bt<vt;Bt++)vh(wt[Bt],B,Y,V)}function Ud(w,B,Y,V){let{opaque:X,transmissive:wt,transparent:Bt}=w;R.setupLightsView(Y),mt===!0&&nt.setGlobalState(T.clippingPlanes,Y),V&&St.viewport(rt.copy(V)),X.length>0&&Fa(X,B,Y),wt.length>0&&Fa(wt,B,Y),Bt.length>0&&Fa(Bt,B,Y),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Fd(w,B,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[V.id]===void 0){let Gt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[V.id]=new zn(1,1,{generateMipmaps:!0,type:Gt?ci:Bn,minFilter:Yi,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}let wt=R.state.transmissionRenderTarget[V.id],Bt=V.viewport||rt;wt.setSize(Bt.z*T.transmissionResolutionScale,Bt.w*T.transmissionResolutionScale);let vt=T.getRenderTarget(),Lt=T.getActiveCubeFace(),Vt=T.getActiveMipmapLevel();T.setRenderTarget(wt),T.getClearColor(Q),bt=T.getClearAlpha(),bt<1&&T.setClearColor(16777215,.5),T.clear(),Te&&F.render(Y);let le=T.toneMapping;T.toneMapping=Ei;let Ae=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),R.setupLightsView(V),mt===!0&&nt.setGlobalState(T.clippingPlanes,V),Fa(w,Y,V),ne.updateMultisampleRenderTarget(wt),ne.updateRenderTargetMipmap(wt),be.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Re=0,rn=B.length;Re<rn;Re++){let ze=B[Re],{object:ke,geometry:En,material:zt,group:Cn}=ze;if(zt.side===ln&&ke.layers.test(V.layers)){let Ne=zt.side;zt.side=un,zt.needsUpdate=!0,Od(ke,Y,V,En,zt,Cn),zt.side=Ne,zt.needsUpdate=!0,Gt=!0}}Gt===!0&&(ne.updateMultisampleRenderTarget(wt),ne.updateRenderTargetMipmap(wt))}T.setRenderTarget(vt,Lt,Vt),T.setClearColor(Q,bt),Ae!==void 0&&(V.viewport=Ae),T.toneMapping=le}function Fa(w,B,Y){let V=B.isScene===!0?B.overrideMaterial:null;for(let X=0,wt=w.length;X<wt;X++){let Bt=w[X],{object:vt,geometry:Lt,group:Vt}=Bt,le=Bt.material;le.allowOverride===!0&&V!==null&&(le=V),vt.layers.test(Y.layers)&&Od(vt,B,Y,Lt,le,Vt)}}function Od(w,B,Y,V,X,wt){O!==null&&X.isNodeMaterial&&O.setObject(w,X),w.onBeforeRender(T,B,Y,V,X,wt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(T,B,Y,V,w,wt),X.transparent===!0&&X.side===ln&&X.forceSinglePass===!1?(X.side=un,X.needsUpdate=!0,T.renderBufferDirect(Y,B,V,X,w,wt),X.side=bs,X.needsUpdate=!0,T.renderBufferDirect(Y,B,V,X,w,wt),X.side=ln):T.renderBufferDirect(Y,B,V,X,w,wt),w.onAfterRender(T,B,Y,V,X,wt)}function Bd(w){let B=0;for(let Y of w)Y.texture!==null&&B++;return B}function ho(w,B,Y){B.isScene!==!0&&(B=we);let V=Jt.get(w),X=R.state.lights,wt=R.state.shadowsArray,Bt=X.state.version,vt=ot.getParameters(w,X.state,wt,B,Y,R.state.lightProbeGridArray),Lt=ot.getProgramCacheKey(vt),Vt=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;let le=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=I.get(w.envMap||V.environment,le),V.envMapRotation=V.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",Oe),Vt=new Map,V.programs=Vt,V.programVariants=new Map);let Ae=Vt.get(Lt);if(Ae!==void 0){if(V.currentProgram===Ae&&V.lightsStateVersion===Bt)return kd(w,vt),Ae}else vt.uniforms=ot.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,Y,vt),w.onBeforeCompile(vt,T),Ae=ot.acquireProgram(vt,Lt),Vt.set(Lt,Ae),V.uniforms=vt.uniforms;let Gt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=nt.uniform),kd(w,vt),V.needsLights=pm(w),V.lightsStateVersion=Bt,V.needsLights&&(Gt.ambientLightColor.value=X.state.ambient,Gt.lightProbe.value=X.state.probe,Gt.sunLights.value=X.state.sun,Gt.sunLightShadows.value=X.state.sunShadow,Gt.directionalLights.value=X.state.directional,Gt.directionalLightShadows.value=X.state.directionalShadow,Gt.spotLights.value=X.state.spot,Gt.spotLightShadows.value=X.state.spotShadow,Gt.rectAreaLights.value=X.state.rectArea,Gt.ltc_1.value=X.state.rectAreaLTC1,Gt.ltc_2.value=X.state.rectAreaLTC2,Gt.pointLights.value=X.state.point,Gt.pointLightShadows.value=X.state.pointShadow,Gt.hemisphereLights.value=X.state.hemi,Gt.sunShadowMatrix.value=X.state.sunShadowMatrix,Gt.sunShadowCascade.value=X.state.sunShadowCascade,Gt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Gt.spotLightMatrix.value=X.state.spotLightMatrix,Gt.spotLightMap.value=X.state.spotLightMap,Gt.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=Bd(R.state.lightProbeGridArray),V.currentProgram=Ae,V.uniformsList=null,Ae}function um(w,B,Y,V,X){let wt=Jt.get(w),Bt=wt.currentProgram.id+","+V+","+X,vt=wt.programVariants.get(Bt);return vt===void 0?(vt=ho(w,B,Y),wt.programVariants.set(Bt,vt)):(wt.currentProgram=vt,wt.uniformsList=null,wt.outputColorSpace=V,wt.toneMapping=X),vt}function Hd(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Xr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function kd(w,B){let Y=Jt.get(w);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function dm(w,B,Y,V,X){B.isScene!==!0&&(B=we),ne.resetTextureUnits();let wt=B.fog,Bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,vt=lt===null?T.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ce.workingColorSpace,Lt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Vt=I.get(V.envMap||Bt,Lt),le=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ae=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Gt=!!Y.morphAttributes.position,Re=!!Y.morphAttributes.normal,rn=!!Y.morphAttributes.color,ze=Ei;V.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ze=T.toneMapping);let ke=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,En=ke!==void 0?ke.length:0,zt=Jt.get(V),Cn=R.state.lights;if(mt===!0&&(Ot===!0||w!==st)){let Ke=w===st&&V.id===Z;nt.setState(V,w,Ke)}let Ne=!1,Ds=!1;V.version===zt.__version?zt.needsLights&&zt.lightsStateVersion!==Cn.state.version||X.isBatchedMesh&&zt.batching===!1||!X.isBatchedMesh&&zt.batching===!0||X.isBatchedMesh&&zt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&zt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&zt.instancing===!1||!X.isInstancedMesh&&zt.instancing===!0||X.isSkinnedMesh&&zt.skinning===!1||!X.isSkinnedMesh&&zt.skinning===!0||X.isInstancedMesh&&zt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&zt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&zt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&zt.instancingMorph===!1&&X.morphTexture!==null||zt.envMap!==Vt||V.fog===!0&&zt.fog!==wt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==nt.numPlanes||zt.numIntersection!==nt.numIntersection)||zt.vertexAlphas!==le||zt.vertexTangents!==Ae||zt.morphTargets!==Gt||zt.morphNormals!==Re||zt.morphColors!==rn||zt.morphTargetsCount!==En||zt.numLightProbeGrids!==Bd(R.state.lightProbeGridArray)?Ne=!0:(zt.outputColorSpace!==vt||zt.toneMapping!==ze)&&(Ds=!0):(Ne=!0,zt.__version=V.version);let wn=zt.currentProgram;(Ne===!0||Ds===!0)&&(wn=Ds===!0?um(V,B,X,vt,ze):ho(V,B,X),O&&V.isNodeMaterial&&O.onUpdateProgram(V,wn,zt));let Oa=!1,cs=!1,Ns=!1,Le=wn.getUniforms(),yn=zt.uniforms;if(St.useProgram(wn.program)&&(Oa=!0,cs=!0,Ns=!0),V.id!==Z&&(Z=V.id,cs=!0),Oa||st!==w){St.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Le.setValue(H,"projectionMatrix",w.projectionMatrix),Le.setValue(H,"viewMatrix",w.matrixWorldInverse);let gn=Le.map.cameraPosition;gn!==void 0&&gn.setValue(H,ce.setFromMatrixPosition(w.matrixWorld)),He.logarithmicDepthBuffer&&Le.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Le.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),st!==w&&(st=w,cs=!0,Ns=!0)}if(zt.needsLights&&(Cn.state.sunShadowMap.length>0&&Le.setValue(H,"sunShadowMap",Cn.state.sunShadowMap,ne),Cn.state.directionalShadowMap.length>0&&Le.setValue(H,"directionalShadowMap",Cn.state.directionalShadowMap,ne),Cn.state.spotShadowMap.length>0&&Le.setValue(H,"spotShadowMap",Cn.state.spotShadowMap,ne),Cn.state.pointShadowMap.length>0&&Le.setValue(H,"pointShadowMap",Cn.state.pointShadowMap,ne)),X.isSkinnedMesh){Le.setOptional(H,X,"bindMatrix"),Le.setOptional(H,X,"bindMatrixInverse");let Ke=X.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Le.setValue(H,"boneTexture",Ke.boneTexture,ne))}X.isBatchedMesh&&(Le.setOptional(H,X,"batchingTexture"),Le.setValue(H,"batchingTexture",X._matricesTexture,ne),Le.setOptional(H,X,"batchingIdTexture"),Le.setValue(H,"batchingIdTexture",X._indirectTexture,ne),Le.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&Le.setValue(H,"batchingColorTexture",X._colorsTexture,ne));let ni=Y.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&it.update(X,Y,wn),(cs||zt.receiveShadow!==X.receiveShadow)&&(zt.receiveShadow=X.receiveShadow,Le.setValue(H,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(yn.envMapIntensity.value=B.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=dM()),cs){if(Le.setValue(H,"toneMappingExposure",T.toneMappingExposure),zt.needsLights&&fm(yn,Ns),wt&&V.fog===!0&&gt.refreshFogUniforms(yn,wt),gt.refreshMaterialUniforms(yn,V,J,Zt,R.state.transmissionRenderTarget[w.id]),zt.needsLights&&zt.numLightProbeGrids>0){let Ke=v,gn=0;for(let Ni of R.state.lightProbeGridArray)Ni.texture!==null&&(Ke.textures[gn]=Ni.texture,Ke.min[gn]=Ni.boundingBox.min,Ke.max[gn]=Ni.boundingBox.max,Ke.resolution[gn]=Ni.resolution,gn++);for(let Ni in Ke)Ke[Ni].length=gn;yn.probesSH.value=Ke.textures,yn.probesMin.value=Ke.min,yn.probesMax.value=Ke.max,yn.probesResolution.value=Ke.resolution}Xr.upload(H,Hd(zt),yn,ne)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xr.upload(H,Hd(zt),yn,ne),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Le.setValue(H,"center",X.center),Le.setValue(H,"modelViewMatrix",X.modelViewMatrix),Le.setValue(H,"normalMatrix",X.normalMatrix),Le.setValue(H,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){let Ke=V.uniformsGroups;for(let gn=0,Ni=Ke.length;gn<Ni;gn++){let zd=Ke[gn];qt.update(zd,wn),qt.bind(zd,wn)}}return wn}function fm(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function pm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(w,B,Y){let V=Jt.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Jt.get(w.texture).__webglTexture=B,Jt.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let Y=Jt.get(w);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,Y=0){lt=w,q=B,z=Y;let V=null,X=!1,wt=!1;if(w){let vt=Jt.get(w);if(vt.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(H.FRAMEBUFFER,vt.__webglFramebuffer),rt.copy(w.viewport),Rt.copy(w.scissor),Yt=w.scissorTest,St.viewport(rt),St.scissor(Rt),St.setScissorTest(Yt),Z=-1;return}else if(vt.__webglFramebuffer===void 0)ne.setupRenderTarget(w);else if(vt.__hasExternalTextures)ne.rebindTextures(w,Jt.get(w.texture).__webglTexture,Jt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let le=w.depthTexture;if(vt.__boundDepthTexture!==le){if(le!==null&&Jt.has(le)&&(w.width!==le.image.width||w.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(w)}}let Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(wt=!0);let Vt=Jt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?V=Vt[B][Y]:V=Vt[B],X=!0):w.samples>0&&ne.useMultisampledRTT(w)===!1?V=Jt.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[Y]:V=Vt,rt.copy(w.viewport),Rt.copy(w.scissor),Yt=w.scissorTest}else rt.copy(Xt).multiplyScalar(J).floor(),Rt.copy(ue).multiplyScalar(J).floor(),Yt=Ee;if(Y!==0&&(V=k),St.bindFramebuffer(H.FRAMEBUFFER,V)&&St.drawBuffers(w,V),St.viewport(rt),St.scissor(Rt),St.setScissorTest(Yt),X){let vt=Jt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,vt.__webglTexture,Y)}else if(wt){let vt=B;for(let Lt=0;Lt<w.textures.length;Lt++){let Vt=Jt.get(w.textures[Lt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Lt,Vt.__webglTexture,Y,vt)}}else if(w!==null&&Y!==0){let vt=Jt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,vt.__webglTexture,Y)}Z=-1};function Gd(w){let B=Jt.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=He.textureFormatReadable(w.format),B.__typeReadable=He.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,Y,V,X,wt,Bt,vt=0){if(!(w&&w.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Jt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(Lt=Lt[Bt],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){St.bindFramebuffer(H.FRAMEBUFFER,Lt);try{let Vt=w.textures[vt],le=Vt.format,Ae=Vt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+vt);let Gt=Gd(Vt);if(Gt.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-V&&Y>=0&&Y<=w.height-X&&H.readPixels(B,Y,V,X,ft.convert(le),ft.convert(Ae),wt)}finally{let Vt=lt!==null?Jt.get(lt).__webglFramebuffer:null;St.bindFramebuffer(H.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(w,B,Y,V,X,wt,Bt,vt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Jt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(Lt=Lt[Bt],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(B>=0&&B<=w.width-V&&Y>=0&&Y<=w.height-X){St.bindFramebuffer(H.FRAMEBUFFER,Lt);let Vt=w.textures[vt],le=Vt.format,Ae=Vt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+vt);let Gt=Gd(Vt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Re),H.bufferData(H.PIXEL_PACK_BUFFER,wt.byteLength,H.STREAM_READ),H.readPixels(B,Y,V,X,ft.convert(le),ft.convert(Ae),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let rn=lt!==null?Jt.get(lt).__webglFramebuffer:null;St.bindFramebuffer(H.FRAMEBUFFER,rn);let ze=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await sp(H,ze,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Re),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,wt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Re),H.deleteSync(ze),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,Y=0){let V=Math.pow(2,-Y),X=Math.floor(w.image.width*V),wt=Math.floor(w.image.height*V),Bt=B!==null?B.x:0,vt=B!==null?B.y:0;ne.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,Y,0,0,Bt,vt,X,wt),St.unbindTexture()},this.copyTextureToTexture=function(w,B,Y=null,V=null,X=0,wt=0){let Bt,vt,Lt,Vt,le,Ae,Gt,Re,rn,ze=w.isCompressedTexture?w.mipmaps[wt]:w.image;if(Y!==null)Bt=Y.max.x-Y.min.x,vt=Y.max.y-Y.min.y,Lt=Y.isBox3?Y.max.z-Y.min.z:1,Vt=Y.min.x,le=Y.min.y,Ae=Y.isBox3?Y.min.z:0;else{let Le=Math.pow(2,-X);Bt=Math.floor(ze.width*Le),vt=Math.floor(ze.height*Le),w.isDataArrayTexture?Lt=ze.depth:w.isData3DTexture?Lt=Math.floor(ze.depth*Le):Lt=1,Vt=0,le=0,Ae=0}V!==null?(Gt=V.x,Re=V.y,rn=V.z):(Gt=0,Re=0,rn=0);let ke=ft.convert(B.format),En=ft.convert(B.type),zt;B.isData3DTexture?(ne.setTexture3D(B,0),zt=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ne.setTexture2DArray(B,0),zt=H.TEXTURE_2D_ARRAY):(ne.setTexture2D(B,0),zt=H.TEXTURE_2D),St.activeTexture(H.TEXTURE0),St.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),St.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),St.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);let Cn=St.getParameter(H.UNPACK_ROW_LENGTH),Ne=St.getParameter(H.UNPACK_IMAGE_HEIGHT),Ds=St.getParameter(H.UNPACK_SKIP_PIXELS),wn=St.getParameter(H.UNPACK_SKIP_ROWS),Oa=St.getParameter(H.UNPACK_SKIP_IMAGES);St.pixelStorei(H.UNPACK_ROW_LENGTH,ze.width),St.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ze.height),St.pixelStorei(H.UNPACK_SKIP_PIXELS,Vt),St.pixelStorei(H.UNPACK_SKIP_ROWS,le),St.pixelStorei(H.UNPACK_SKIP_IMAGES,Ae);let cs=w.isDataArrayTexture||w.isData3DTexture,Ns=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let Le=Jt.get(w),yn=Jt.get(B),ni=Jt.get(Le.__renderTarget),Ke=Jt.get(yn.__renderTarget);St.bindFramebuffer(H.READ_FRAMEBUFFER,ni.__webglFramebuffer),St.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let gn=0;gn<Lt;gn++)cs&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Jt.get(w).__webglTexture,X,Ae+gn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Jt.get(B).__webglTexture,wt,rn+gn)),H.blitFramebuffer(Vt,le,Vt+Bt,le+vt,Gt,Re,Gt+Bt,Re+vt,H.DEPTH_BUFFER_BIT,H.NEAREST);St.bindFramebuffer(H.READ_FRAMEBUFFER,null),St.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Jt.has(w)){let Le=Jt.get(w),yn=Jt.get(B);St.bindFramebuffer(H.READ_FRAMEBUFFER,D),St.bindFramebuffer(H.DRAW_FRAMEBUFFER,G);for(let ni=0;ni<Lt;ni++)cs?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Le.__webglTexture,X,Ae+ni):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Le.__webglTexture,X),Ns?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,wt,rn+ni):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,wt),X!==0?H.blitFramebuffer(Vt,le,Vt+Bt,le+vt,Gt,Re,Gt+Bt,Re+vt,H.COLOR_BUFFER_BIT,H.NEAREST):Ns?H.copyTexSubImage3D(zt,wt,Gt,Re,rn+ni,Vt,le,Bt,vt):H.copyTexSubImage2D(zt,wt,Gt,Re,Vt,le,Bt,vt);St.bindFramebuffer(H.READ_FRAMEBUFFER,null),St.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ns?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(zt,wt,Gt,Re,rn,Bt,vt,Lt,ke,En,ze.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(zt,wt,Gt,Re,rn,Bt,vt,Lt,ke,ze.data):H.texSubImage3D(zt,wt,Gt,Re,rn,Bt,vt,Lt,ke,En,ze):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,wt,Gt,Re,Bt,vt,ke,En,ze.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,wt,Gt,Re,ze.width,ze.height,ke,ze.data):H.texSubImage2D(H.TEXTURE_2D,wt,Gt,Re,Bt,vt,ke,En,ze);St.pixelStorei(H.UNPACK_ROW_LENGTH,Cn),St.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ne),St.pixelStorei(H.UNPACK_SKIP_PIXELS,Ds),St.pixelStorei(H.UNPACK_SKIP_ROWS,wn),St.pixelStorei(H.UNPACK_SKIP_IMAGES,Oa),wt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&H.generateMipmap(zt),St.unbindTexture()},this.initRenderTarget=function(w){Jt.get(w).__webglFramebuffer===void 0&&ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ne.setTextureCube(w,0):w.isData3DTexture?ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ne.setTexture2DArray(w,0):ne.setTexture2D(w,0),St.unbindTexture()},this.resetState=function(){q=0,z=0,lt=null,St.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}};var Gc=class extends ms{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ye;t.deleteAttribute("uv");let e=new se({side:un}),i=new se,s=new On(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new U(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new xs(t,i,6),a=new Ve;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new U(t,Zr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new U(t,Zr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new U(t,Zr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new U(t,Zr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new U(t,Zr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new U(t,Zr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Zr(n){return new Zo({color:0,emissive:16777215,emissiveIntensity:n})}var zc=1337;function Qt(){return zc=zc*16807%2147483647,(zc-1)/2147483646}function qn(n){zc=n}function fM(n,t){let e=new Float32Array(n*n);qn(t);for(let i=0;i<e.length;i++)e[i]=Qt();return(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),h=l*l*(3-2*l),u=n,d=(r%u+u)%u,f=(o%u+u)%u,p=(d+1)%u,x=(f+1)%u,m=e[f*u+d],g=e[f*u+p],y=e[x*u+d],S=e[x*u+p];return m+(g-m)*c+(y-m)*h+(m-g-y+S)*c*h}}function ge(n,t=4,e=5){let i=[];for(let s=0;s<e;s++)i.push({f:fM(t<<s,n+s*97),p:t<<s});return(s,r)=>{let o=0,a=.5,l=0;for(let c of i)o+=c.f(s*c.p,r*c.p)*a,l+=a,a*=.5;return o/l}}var Zu={},Vc=4;function Jp(n){Vc=n}function Be(n,t,e,i={}){if(Zu[n])return Zu[n];let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createImageData(t,t),a=new Float32Array(t*t);for(let x=0;x<t;x++)for(let m=0;m<t;m++){let g=e(m/t,x/t,m,x),y=(x*t+m)*4;o.data[y]=Math.max(0,Math.min(255,g.r*255)),o.data[y+1]=Math.max(0,Math.min(255,g.g*255)),o.data[y+2]=Math.max(0,Math.min(255,g.b*255)),o.data[y+3]=g.a===void 0?255:g.a*255,a[x*t+m]=g.h===void 0?.5:g.h}r.putImageData(o,0,0),i.post&&i.post(r,t);let l=new Vi(s);l.colorSpace=hn,l.wrapS=l.wrapT=Gs,l.anisotropy=Vc;let c=document.createElement("canvas");c.width=c.height=t;let h=c.getContext("2d"),u=h.createImageData(t,t),d=i.normalStrength||2;for(let x=0;x<t;x++)for(let m=0;m<t;m++){let g=a[x*t+(m-1+t)%t],y=a[x*t+(m+1)%t],S=a[(x-1+t)%t*t+m],v=a[(x+1)%t*t+m],A=(g-y)*d,R=(S-v)*d,_=1,b=Math.hypot(A,R,_);A/=b,R/=b,_/=b;let P=(x*t+m)*4;u.data[P]=(A*.5+.5)*255,u.data[P+1]=(-R*.5+.5)*255,u.data[P+2]=(_*.5+.5)*255,u.data[P+3]=255}h.putImageData(u,0,0);let f=new Vi(c);f.wrapS=f.wrapT=Gs,f.anisotropy=Vc;let p={map:l,normalMap:f,canvas:s};return Zu[n]=p,p}var ee=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],$u=(n,t,e)=>n+(t-n)*e,Ge=(n,t,e)=>[$u(n[0],t[0],e),$u(n[1],t[1],e),$u(n[2],t[2],e)],ui=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),Dn=n=>n-Math.floor(n);function tn(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}var K={};function Kp(n=1){let t=n>=1?512:256,e=n>=1?256:128;{let r=ge(11,4,6),o=ge(12,16,3);K.grass=Be("grass",t,(a,l)=>{let c=r(a,l),h=o(a,l),u=tn(Math.floor(a*180),Math.floor(l*60+tn(Math.floor(a*180),3)*10)),d=Ge(ee(4156970),ee(8037962),ui(c*1.3-.15+u*.25)),f=Ge(d,ee(9075274),ui((h-.62)*3)*.5);return{r:f[0],g:f[1],b:f[2],h:u*.6+c*.4}},{normalStrength:3})}{let r=ge(21,8,5),o=ge(22,4,4);K.asphalt=Be("asphalt",t,(a,l,c,h)=>{let u=tn(c,h),d=r(a,l),f=Math.abs(o(a,l)-.5)<.006?1:0,p=.2+d*.12+(u>.93?.12:0)-(u<.05?.06:0)-f*.12;return{r:p,g:p,b:p*1.04,h:u*.5+d*.3-f*.6}},{normalStrength:2.5})}{let r=ge(31,8,5);K.concrete=Be("concrete",e*2,(o,a,l,c)=>{let h=r(o,a),u=tn(l,c),d=Dn(o*2)<.012||Dn(a*2)<.012?1:0,f=.62+h*.15+u*.05-d*.25;return{r:f,g:f*.98,b:f*.94,h:h*.5+u*.2-d*.7}})}{let r=ge(41,8,4);K.brick=Be("brick",t,(o,a,l,c)=>{let d=Math.floor(a*16),f=d%2*.5,p=Dn(o*8+f),x=Dn(a*16),m=Math.floor(o*8+f)+d*31,g=p<.05||x<.1,y=tn(m,7),S=Ge(ee(9059112),ee(11556666),y),v=r(o,a);if(g){let R=.68+v*.08;return{r:R,g:R*.96,b:R*.9,h:.1}}let A=Ge(S,ee(5909022),ui(v-.45)*1.2);return{r:A[0],g:A[1],b:A[2],h:.7+v*.3}},{normalStrength:3})}{let r=ge(51,4,5);K.siding=Be("siding",e*2,(o,a,l,c)=>{let u=Dn(a*10),d=.82+u*.18-(u>.94?.3:0),f=r(o*.5,a)*.08+tn(l,Math.floor(c/3))*.03,p=ui(d+f-.05);return{r:p,g:p,b:p,h:u}},{normalStrength:4})}{let r=ge(61,8,5);K.plaster=Be("plaster",e,(o,a)=>{let l=r(o,a),c=.86+l*.12;return{r:c,g:c,b:c,h:l}},{normalStrength:1.2})}{let r=ge(71,2,5);K.floor=Be("floor",t,(o,a,l,c)=>{let u=Math.floor(a*8),d=tn(u,1),f=Dn(o*2+d),p=Math.floor(o*2+d)*13+u,x=Dn(a*8)<.03||f<.006,m=r(o*.5+p*.17,a*6+p*.3),g=tn(p,4),y=Ge(Ge(ee(8014376),ee(11038783),g),ee(4860436),ui(m-.45)*1.5+Math.sin(m*60)*.06);return x?{r:y[0]*.5,g:y[1]*.5,b:y[2]*.5,h:0}:{r:y[0],g:y[1],b:y[2],h:.6+m*.2}})}{let r=ge(81,8,4);K.roof=Be("roof",e*2,(o,a,l,c)=>{let u=Math.floor(a*12),d=Dn(a*12),f=Dn(o*8+u%2*.5),p=Math.floor(o*8+u%2*.5)+u*17,m=.25+tn(p,3)*.12+r(o,a)*.1-(d>.9?.15:0)-(f<.03?.1:0)+d*.06;return{r:m*1.05,g:m*.92,b:m*.88,h:d}},{normalStrength:4})}{let r=ge(91,2,5);K.wood=Be("wood",e*2,(o,a,l,c)=>{let h=r(o*.3,a*4),u=Math.sin((h*30+o*3)*3)*.5+.5,d=Ge(ee(11567184),ee(8015920),u*.6+tn(l,c)*.08);return{r:d[0],g:d[1],b:d[2],h:u*.6}},{normalStrength:2})}{let r=ge(92,2,5),o=ge(93,8,4);K.paintwood=Be("paintwood",e,(a,l,c,h)=>{let u=r(a*.3,l*4),d=o(a,l)>.8,f=Math.sin(u*60)*.5+.5;if(d){let x=Ge(ee(9071178),ee(6965808),f);return{r:x[0],g:x[1],b:x[2],h:.2}}let p=.88+f*.05;return{r:p,g:p,b:p*.97,h:.6+f*.1}},{normalStrength:2})}{let r=ge(101,8,6);K.dirt=Be("dirt",e*2,(o,a,l,c)=>{let h=r(o,a),u=tn(l,c),d=Ge(ee(4862496),ee(8018490),h*1.2-.1+u*.1),f=u>.985;return{r:f?.6:d[0],g:f?.58:d[1],b:f?.55:d[2],h:h+(f?.5:0)}},{normalStrength:3})}K.tile=Be("tile",e,(r,o,a,l)=>{let c=Dn(r*4)<.04||Dn(o*4)<.04,h=(Math.floor(r*4)+Math.floor(o*4))%2,u=c?.55:h?.92:.2;return{r:u,g:u,b:u*(h?.98:1.1),h:c?0:1}});{let r=ge(111,16,3);K.carpet=Be("carpet",e,(o,a,l,c)=>{let h=r(o,a)*.4+tn(l,c)*.6,u=.75+h*.25;return{r:u,g:u,b:u,h}},{normalStrength:1.5})}{let r=ge(121,4,5),o=ge(122,32,2);K.metal=Be("metal",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l*.05),f=.82+d*.12-ui(u-.6)*.8;return{r:f,g:f,b:f,h:d*.3+u*.2}},{normalStrength:1})}{let r=ge(131,4,6);K.rust=Be("rust",e,(o,a)=>{let l=r(o,a),c=Ge(ee(5921370),ee(9062946),ui(l*1.6-.5));return{r:c[0],g:c[1],b:c[2],h:l}},{normalStrength:2})}{let r=ge(141,4,5);K.bark=Be("bark",e,(o,a,l,c)=>{let h=r(o*2,a*.4),u=Math.abs(Math.sin(o*40+h*8)),d=Ge(ee(3023384),ee(6968384),u*.7+h*.3);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:4})}{let r=ge(151,8,4);K.leaf=Be("leaf",e,(o,a,l,c)=>{let h=r(o,a),u=tn(l>>2,c>>2),d=Ge(ee(2775582),ee(6986298),h*.8+u*.4);return{r:d[0],g:d[1],b:d[2],h:u}},{normalStrength:3})}{let r=ge(155,8,5);K.hedge=Be("hedge",e,(o,a,l,c)=>{let h=r(o,a),u=tn(l>>1,c>>1),d=Ge(ee(1981974),ee(5933618),h*.9+u*.3-.1);return{r:d[0],g:d[1],b:d[2],h:h*.5+u*.5}},{normalStrength:5})}{let r=ge(201,4,5),o=ge(202,16,3);K.carrot=Be("carrot",t,(a,l,c,h)=>{let u=Math.pow(Math.abs(Math.sin(l*Math.PI*22+r(a,l)*9)),10)*(.4+r(a*3,l)*.8),d=o(a,l),f=tn(Math.floor(a*24),Math.floor(l*40))>.93&&Dn(l*40)<.35?1:0,p=Ge(ee(15759898),ee(14177804),d*.8+u*.35),x=Math.pow(Math.abs(Math.sin(a*Math.PI*9+r(a,l*.3)*4)),30)*.15,m=Ge(p,ee(9062928),u*.35+f*.5+x);return{r:m[0],g:m[1],b:m[2],h:.7-u*.5-f*.4+d*.1}},{normalStrength:4})}{let r=ge(211,4,5),o=ge(212,32,2);K.tomato=Be("tomato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Math.pow(Math.abs(Math.sin(a*Math.PI*6)),8)*.1,p=Ge(ee(14164762),ee(11014670),u*.7+f),x=ui(1-l*6),m=Ge(p,ee(12099616),x*.25),g=d>.72?.08:0;return{r:m[0]+g,g:m[1]+g*.6,b:m[2],h:u*.3+d*.2}},{normalStrength:1.2})}{let r=ge(221,4,6),o=ge(222,16,3);K.potato=Be("potato",t,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=tn(c,h),p=Ge(ee(13148266),ee(10122308),u*1.1-.1+f*.1);p=Ge(p,ee(6965802),ui((d-.6)*3)*.6);let x=Dn(a*5),m=Dn(l*4),g=tn(Math.floor(a*5),Math.floor(l*4)),y=Math.hypot(x-.3-g*.4,m-.5),S=g>.55&&y<.06?1-y/.06:0;return p=Ge(p,ee(4861976),S*.8),{r:p[0],g:p[1],b:p[2],h:u*.5+d*.3-S*.6+f*.1}},{normalStrength:4})}{let r=ge(231,4,5);K.pepper=Be("pepper",t,(o,a,l,c)=>{let h=r(o,a),u=Math.pow(Math.abs(Math.cos(o*Math.PI*4)),10),d=Ge(ee(2787870),ee(1268240),h*.7+u*.4);return{r:d[0],g:d[1],b:d[2],h:h*.2-u*.3}},{normalStrength:1.5})}{let r=ge(241,8,4);K.veggreen=Be("veggreen",e,(o,a,l,c)=>{let h=r(o,a),u=Math.abs(Dn(o*6)-.5)<.04?.15:0,d=Ge(ee(3836452),ee(1989140),h);return{r:d[0]+u,g:d[1]+u,b:d[2]+u*.5,h:h-u}},{normalStrength:2})}{let r=ge(251,8,5),o=ge(252,32,2);K.skin=Be("skin",e,(a,l,c,h)=>{let u=r(a,l),d=o(a,l),f=Ge(ee(15775888),ee(13140058),u*.55+d*.25);return{r:f[0],g:f[1],b:f[2],h:d*.4+u*.2}},{normalStrength:1.2})}let i=(r,o,a,l)=>{K[r]=Be(r,e,(c,h,u,d)=>{let f=c-.5,p=h-.5,x=Math.hypot(f,p)*2,m=Math.atan2(p,f),g=Ge(ee(o),ee(a),ui(x)),y=.5;if(l==="carrot"&&(x<.45&&(g=Ge(g,ee(16298048),.6)),y=Math.abs(Math.sin(m*10))*.2),l==="tomato"){let S=Math.cos(m*3)*.5+.5;x>.35&&x<.78&&S>.4&&(g=Ge(ee(15228992),ee(15777888),.3),tn(Math.floor(c*40),Math.floor(h*40))>.8&&(g=ee(16310432),y=1))}return l==="pepper"&&x<.3&&tn(Math.floor(c*50),Math.floor(h*50))>.7&&(g=ee(15788208),y=1),x>.95&&(g=Ge(g,ee(0),.2)),{r:g[0],g:g[1],b:g[2],h:y}},{normalStrength:2})};i("fleshCarrot",16292400,15233050,"carrot"),i("fleshTomato",15751738,13115418,"tomato"),i("fleshPotato",16048808,15257744,"potato"),i("fleshPepper",14217392,4890672,"pepper");{let r=ge(301,32,3);K.polymer=Be("polymer",e,(o,a,l,c)=>{let h=tn(l,c)*.5+r(o,a)*.5,u=.85+h*.15;return{r:u,g:u,b:u,h}},{normalStrength:2.5})}{let r=ge(311,4,4);K.gunmetal=Be("gunmetal",e,(o,a,l,c)=>{let h=tn(Math.floor(l/1),Math.floor(c/24))*.1,u=Math.abs(Math.sin(o*30+a*90+r(o,a)*20))>.995?.25:0,d=ui(r(o,a)-.65)*1.5,f=.85+h+u+d;return{r:f,g:f,b:f,h:h+u}},{normalStrength:1.2})}let s=(r,o,a,l)=>{let c=ge(r.length*13+500,4,4),h=ge(r.length*17+600,4,4);K[r]=Be(r,e,(u,d,f,p)=>{let x=u,m=d;l&&(x=Math.floor(u*48)/48,m=Math.floor(d*48)/48);let g=c(x*a,m*a),y=h(x*a+.3,m*a),S=g>.56?1:y>.58?2:g<.4?3:0,v=ee(o[S]),A=tn(f,p)*.05;return{r:v[0]+A,g:v[1]+A,b:v[2]+A,h:S*.1+A}},{normalStrength:1})};return s("camoWood",[5925434,3818532,9075280,2237978],1,!1),s("camoDesert",[13152384,10521178,14733480,8021056],1,!1),s("camoCarrot",[15759898,13129228,3836452,16752704],1,!0),s("camoUrban",[9080466,5922402,13159632,2764338],1,!0),K}function Ai(n,t={}){let e=t.w||256,i=t.h||256,s=document.createElement("canvas");s.width=e,s.height=i;let r=s.getContext("2d");t.bg&&(r.fillStyle=t.bg,r.fillRect(0,0,e,i)),t.draw&&t.draw(r,e,i),r.fillStyle=t.color||"#fff",r.font=`${t.weight||900} ${t.size||180}px ${t.font||"system-ui, sans-serif"}`,r.textAlign="center",r.textBaseline="middle",t.stroke&&(r.lineWidth=t.strokeW||10,r.strokeStyle=t.stroke,r.strokeText(n,e/2,i/2+(t.dy||0))),r.fillText(n,e/2,i/2+(t.dy||0));let o=new Vi(s);return o.colorSpace=hn,o.anisotropy=Vc,o}function Wc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ye;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=jp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=jp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function jp(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new an(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function pt(n,t,e,i=1,s=[0,0,0]){let r=new ye(n,t,e),o=r.attributes.uv,a=[[e,t,s[2],s[1]],[e,t,-s[2],s[1]],[n,e,s[0],-s[2]],[n,e,s[0],s[2]],[n,t,s[0],s[1]],[n,t,-s[0],s[1]]];for(let l=0;l<6;l++){let[c,h,u,d]=a[l];for(let f=0;f<4;f++){let p=l*4+f;o.setXY(p,(o.getX(p)*c+u)/i,(o.getY(p)*h+d)/i)}}return r}function Ji(n,t,e){let i=n.attributes.uv;for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*t,i.getY(s)*e);return n}var Xc=class{constructor(){this.buckets=new Map,this.colliders=[],this.noShadow=new Set}addGeo(t,e,i){let s=e.index?e.toNonIndexed():e.clone();i&&s.applyMatrix4(i);for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);s.attributes.uv||s.setAttribute("uv",new an(new Float32Array(s.attributes.position.count*2),2)),this.buckets.has(t)||this.buckets.set(t,[]),this.buckets.get(t).push(s)}box(t,e,i,s,r,o,a,l={}){let c=pt(r,o,a,l.uv||1,l.worldUV===!1?[0,0,0]:[e-r/2,i-o/2,s-a/2]),h=new Kt;(l.rotY||l.rotX||l.rotZ)&&h.makeRotationFromEuler(new Kn(l.rotX||0,l.rotY||0,l.rotZ||0)),h.setPosition(e,i,s),this.addGeo(t,c,h),l.collide!==!1&&this.col(e-r/2,i-o/2,s-a/2,e+r/2,i+o/2,s+a/2,l)}col(t,e,i,s,r,o,a={}){this.colliders.push({min:new N(Math.min(t,s),Math.min(e,r),Math.min(i,o)),max:new N(Math.max(t,s),Math.max(e,r),Math.max(i,o)),bullet:a.bullet!==!1,move:a.move!==!1,surf:a.surf||"concrete"})}bake(t){t.updateMatrixWorld(!0),t.traverse(e=>{e.isMesh&&this.addGeo(e.material,e.geometry,e.matrixWorld)})}finish(t){let e=[];for(let[i,s]of this.buckets){let r=Wc(s,!1);r.computeBoundingSphere();let o=new U(r,i);o.castShadow=!i.userData.noCast,o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o),e.push(o)}return e}},XE=new N;function Qp(n,t,e,i){let s=0,r=i,o=-1,a=0;for(let l=0;l<3;l++){let c=l===0?n.x:l===1?n.y:n.z,h=l===0?t.x:l===1?t.y:t.z,u=l===0?e.min.x:l===1?e.min.y:e.min.z,d=l===0?e.max.x:l===1?e.max.y:e.max.z;if(Math.abs(h)<1e-9){if(c<u||c>d)return null;continue}let f=(u-c)/h,p=(d-c)/h,x=-1;if(f>p){let m=f;f=p,p=m,x=1}if(f>s&&(s=f,o=l,a=x),p<r&&(r=p),s>r)return null}return{t:s,axis:o,sign:a}}function $e(n,t=[],e={}){let i=new Set(t.filter(Boolean));n.updateMatrixWorld(!0);let s=new Kt().copy(n.matrixWorld).invert(),r=new Map,o=[],a=l=>{for(let c of l.children)i.has(c)||(c.isMesh&&!c.isInstancedMesh&&o.push(c),a(c))};if(a(n),!(o.length<2)){for(let l of o){let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let h of Object.keys(c.attributes))["position","normal","uv"].includes(h)||c.deleteAttribute(h);c.attributes.uv||c.setAttribute("uv",new an(new Float32Array(c.attributes.position.count*2),2)),c.applyMatrix4(new Kt().multiplyMatrices(s,l.matrixWorld)),r.has(l.material)||r.set(l.material,[]),r.get(l.material).push(c)}for(let l of o)for(let c of[...l.children])o.includes(c)||l.parent.attach(c);for(let l of o)l.parent&&l.parent.remove(l);for(let[l,c]of r){let h=new U(Wc(c,!1),l);h.castShadow=e.shadow!==!1,h.receiveShadow=!0,n.add(h)}}}var Qi={town:{id:"town",name:"\u30D9\u30B8\u30BF\u30A6\u30F3",desc:`\u901A\u308A\u3092\u631F\u3093\u30602\u8ED2\u306E\u5BB6\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u83DC\u5712(A)\u3068\u6E29\u5BA4(B)\u3002`,map:{minX:-32,maxX:32,minZ:-27,maxZ:27},sites:{A:[-19,-12.5],B:[18.5,-12.5]},spawns:{south:[[-2.5,23],[2.5,23.5]],north:[[-2.5,-23],[2.5,-23.5]]},holds:{A:{def:[[-16.5,-15.5],[-21.5,-12],[-14.5,-10.8],[-19.5,-18]],att:[[-17.5,-10],[-20.5,-13.5]]},B:{def:[[17,-16],[21,-12.8],[15.8,-9.6],[19.5,-14.8]],att:[[18,-10],[19,-13.8]]}},mm:[[-6,-17.5,5.5,-9.5,"#c8b878"],[5.5,-17,10.5,-9.8,"#a89858"],[-5.5,9.5,6,17.5,"#78a0b8"],[-10.5,9.8,-5.5,17,"#5a8098"],[-26.5,-17.1,-22.5,-13.9,"#8a6a4a"],[20.5,18.9,24.5,22.1,"#8a6a4a"],[16,-19.8,21,-16.2,"#c8d8d0"],[-3.3,-2.85,6.3,-.35,"#e0a020"]],lobby:[-6,4.9],ground:"grass"},market:{id:"market",name:"\u9752\u679C\u5E02\u5834",desc:`\u72ED\u30443\u672C\u9053\u3002\u4E2D\u592E\u306F\u5C4B\u6839\u4ED8\u304D\u306E\u5E02\u5834\u30DB\u30FC\u30EB\u3002
2\u968E\u901A\u8DEF\u30FB\u534A\u5206\u9589\u307E\u3063\u305F\u30B7\u30E3\u30C3\u30BF\u30FC\uFF08\u3057\u3083\u304C\u3080\u3068\u304F\u3050\u308C\u308B\uFF09\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u8CC7\u6750\u7F6E\u304D\u5834(A)\u3068\u7A4D\u307F\u4E0B\u308D\u3057\u5834(B)\u3002`,map:{minX:-23.4,maxX:23.4,minZ:-21.4,maxZ:21.4},sites:{A:[-17.5,-11.5],B:[15,-12]},spawns:{south:[[-2.5,18.5],[2.5,19]],north:[[-2.5,-18.5],[2.5,-19]]},holds:{A:{def:[[-14,-13],[-20.5,-9],[-16.5,-4.5],[-21,-16.5]],att:[[-13,-8.5],[-19,-4]]},B:{def:[[17.5,-14.5],[11.5,-12.5],[13.5,-8.5],[20.8,-10]],att:[[11.5,-9],[16,-8]]}},mm:[[-9,-7,9,7,"#b8a888"],[-21,-2,-14.5,6,"#7a9a7a"],[19,-17,23.6,8,"#9a9a9a"],[11.8,-6.8,17.2,-4.4,"#e8e8e4"],[11.8,.6,17.2,3,"#8ab84a"],[-14.6,10.4,-9.4,12.8,"#e8e0d0"]],lobby:[2.5,9.8],ground:"concrete"},station:{id:"station",name:"\u8CA8\u7269\u99C5",desc:`\u4E2D\u592E\u306E\u8CA8\u7269\u5217\u8ECA\u304C\u30DE\u30C3\u30D7\u3092\u5357\u5317\u306B\u5206\u3051\u308B\u3002
\u8ECA\u4E21\u306E\u3059\u304D\u9593\u30FB\u6B69\u9053\u6A4B\u30FB\u4F0F\u305B\u3066\u8ECA\u4E21\u306E\u4E0B\u3092\u304F\u3050\u308B\u9053\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u99C5\u820E\u306E\u5F85\u5408\u5BA4(A)\u3068\u30B3\u30F3\u30C6\u30CA\u7F6E\u304D\u5834(B)\u3002`,map:{minX:-23.4,maxX:23.4,minZ:-20.4,maxZ:20.4},sites:{A:[-19.5,-10],B:[16,-14.6]},spawns:{south:[[-2.5,17.5],[2.5,18]],north:[[-2.5,-17.5],[2.5,-18]]},holds:{A:{def:[[-15.5,-12.5],[-21.5,-7],[-12,-8.5],[-22,-13]],att:[[-15,-7.5],[-20.5,-11.5]]},B:{def:[[19,-16.5],[11.5,-12],[18.6,-9],[14,-8]],att:[[12.5,-12.5],[17.5,-10]]}},mm:[[-23.6,-14,-13,-5.4,"#c8b878"],[-19.5,-1.4,-12,1.4,"#2a5a9a"],[-11.2,-1.4,-4.2,1.4,"#9a3a2a"],[-2.8,-1.4,5.4,1.4,"#3a6a3a"],[6.8,-1.4,14,1.4,"#8a6a3a"],[16,-1.22,22,1.22,"#2a6aa0"],[15.9,-6.5,17.7,6.5,"#aaaaaa"],[10,-17.7,16,-15.3,"#b04a2a"],[19.8,-14.5,22.2,-8.5,"#3a5a9a"],[7.8,-12,10.2,-6,"#c89a2a"],[-20,13.5,-15,17.5,"#78a0b8"]],lobby:[2,11.8],ground:"concrete"},port:{id:"port",name:"\u51FA\u8377\u6E2F",desc:`\u30B3\u30F3\u30C6\u30CA\u304C\u7D30\u3044\u901A\u8DEF\u3092\u3064\u304F\u308B\u6E2F\u3002
\u4E21\u7AEF\u304C\u958B\u3044\u305F\u30B3\u30F3\u30C6\u30CA\u306F\u4E2D\u3092\u901A\u308A\u629C\u3051\u3089\u308C\u308B\u3002
\u8A2D\u7F6E\u30DD\u30A4\u30F3\u30C8\u306F\u4E8B\u52D9\u6240\u6A2A(A)\u3068\u5CB8\u58C1(B)\u3002`,map:{minX:-23.4,maxX:23,minZ:-20.4,maxZ:20.4},sites:{A:[-11,-12],B:[16.5,-12.4]},spawns:{south:[[-2.5,18.2],[2.5,18.6]],north:[[-2.5,-18.2],[2.5,-18.6]]},holds:{A:{def:[[-13.6,-14.8],[-8,-9],[-14.5,-7.2],[-9,-17.5]],att:[[-14,-9.5],[-8.5,-14]]},B:{def:[[18.5,-15],[13.5,-12.8],[20.5,-9],[14,-8.5]],att:[[13,-14],[17.5,-9.6]]}},mm:[[-23.6,-16,-16,-7,"#78a0b8"],[-17.5,-5.82,-11.5,-3.38,"#b04a2a"],[-6,-6.42,0,-3.98,"#2a7a5a"],[5.5,-6.02,11.5,-3.58,"#3a5a9a"],[-13,3.78,-7,6.22,"#c89a2a"],[-1.5,3.38,4.5,5.82,"#2a6aa0"],[10,3.98,16,6.42,"#9a3a2a"],[-20.72,3.5,-18.28,9.5,"#7a7a7a"],[17.78,-10,20.22,-4,"#b04a2a"],[-18,15,-15,18,"#7aa07a"]],lobby:[-3,11.5],ground:"concrete"}},fe={},pn={A:new N,B:new N},Qc={south:[],north:[]},vn=Qi.town;function g0(n){vn=Qi[n]||Qi.town,Object.assign(fe,vn.map);for(let t of["A","B"])pn[t].set(vn.sites[t][0],0,vn.sites[t][1]);for(let t of["south","north"])Qc[t]=vn.spawns[t].map(([e,i])=>new N(e,0,i));return vn}g0("town");var re=n=>new se(n),M={};function pM(){let n=(i,s)=>{let r=i.map.clone(),o=i.normalMap.clone();return r.needsUpdate=o.needsUpdate=!0,s&&(r.repeat.set(s,s),o.repeat.set(s,s)),[r,o]},[t,e]=[K.grass.map,K.grass.normalMap];M.grass=re({map:K.grass.map,normalMap:K.grass.normalMap,roughness:.95,color:15269856}),M.asphalt=re({map:K.asphalt.map,normalMap:K.asphalt.normalMap,roughness:.9}),M.concrete=re({map:K.concrete.map,normalMap:K.concrete.normalMap,roughness:.85}),M.brick=re({map:K.brick.map,normalMap:K.brick.normalMap,roughness:.85}),M.sidingY=re({map:K.siding.map,normalMap:K.siding.normalMap,color:15785114,roughness:.75}),M.sidingB=re({map:K.siding.map,normalMap:K.siding.normalMap,color:10274012,roughness:.75}),M.sidingG=re({map:K.siding.map,normalMap:K.siding.normalMap,color:12109984,roughness:.75}),M.plaster=re({map:K.plaster.map,normalMap:K.plaster.normalMap,color:15920352,roughness:.95}),M.plasterG=re({map:K.plaster.map,normalMap:K.plaster.normalMap,color:14214352,roughness:.95}),M.floor=re({map:K.floor.map,normalMap:K.floor.normalMap,roughness:.55}),M.roof=re({map:K.roof.map,normalMap:K.roof.normalMap,roughness:.85,color:11561562}),M.roof2=re({map:K.roof.map,normalMap:K.roof.normalMap,roughness:.85,color:7371400}),M.wood=re({map:K.wood.map,normalMap:K.wood.normalMap,roughness:.8}),M.paintwood=re({map:K.paintwood.map,normalMap:K.paintwood.normalMap,roughness:.7}),M.dirt=re({map:K.dirt.map,normalMap:K.dirt.normalMap,roughness:1}),M.tile=re({map:K.tile.map,normalMap:K.tile.normalMap,roughness:.3}),M.carpetR=re({map:K.carpet.map,normalMap:K.carpet.normalMap,color:10502208,roughness:1}),M.carpetB=re({map:K.carpet.map,normalMap:K.carpet.normalMap,color:4217482,roughness:1}),M.trim=re({color:16052970,roughness:.5,map:K.plaster.map}),M.darkTrim=re({color:3815994,roughness:.6}),M.metal=re({map:K.metal.map,normalMap:K.metal.normalMap,color:10133670,metalness:.7,roughness:.4}),M.rust=re({map:K.rust.map,normalMap:K.rust.normalMap,metalness:.4,roughness:.8}),M.chrome=re({color:14540253,metalness:1,roughness:.15}),M.glass=re({color:1714740,metalness:.9,roughness:.05,transparent:!0,opacity:.55}),M.glass.userData.noCast=!0,M.tire=re({color:1710618,roughness:.9}),M.busYellow=re({map:K.metal.map,normalMap:K.metal.normalMap,color:15905306,metalness:.3,roughness:.45}),M.carRed=re({map:K.metal.map,color:11017762,metalness:.5,roughness:.3}),M.carBlue=re({map:K.metal.map,color:2775712,metalness:.5,roughness:.3}),M.carWhite=re({map:K.metal.map,color:15263972,metalness:.4,roughness:.35}),M.black=re({color:1381653,roughness:.7}),M.bark=re({map:K.bark.map,normalMap:K.bark.normalMap,roughness:1}),M.leaf=re({map:K.leaf.map,normalMap:K.leaf.normalMap,roughness:.9,color:14221264}),M.hedge=re({map:K.hedge.map,normalMap:K.hedge.normalMap,roughness:1}),M.fabricG=re({map:K.carpet.map,normalMap:K.carpet.normalMap,color:5929562,roughness:1}),M.fabricO=re({map:K.carpet.map,normalMap:K.carpet.normalMap,color:12615744,roughness:1}),M.white=re({color:15790320,roughness:.4}),M.steel=re({color:12106944,metalness:.9,roughness:.3}),M.lampGlow=new ai({color:16773824}),M.screen=re({color:657936,metalness:.5,roughness:.1}),M.hay=re({map:K.grass.map,normalMap:K.grass.normalMap,color:15782016,roughness:1}),M.redPaint=re({color:11542560,roughness:.5,map:K.metal.map}),M.greenPaint=re({color:2779706,roughness:.6,map:K.metal.map}),M.curtain=re({map:K.carpet.map,normalMap:K.carpet.normalMap,color:15260864,roughness:.9,side:ln}),M.lineW=re({color:15790312,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),M.lineY=re({color:15777824,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),M.paint1=re({map:Ai("",{w:128,h:128,draw:i=>{let s=i.createLinearGradient(0,0,0,128);s.addColorStop(0,"#6ab0e0"),s.addColorStop(1,"#f0e0a0"),i.fillStyle=s,i.fillRect(0,0,128,128),i.fillStyle="#3a7a3a",i.beginPath(),i.moveTo(0,100),i.quadraticCurveTo(64,50,128,95),i.lineTo(128,128),i.lineTo(0,128),i.fill(),i.fillStyle="#f8f0a0",i.beginPath(),i.arc(95,35,14,0,7),i.fill()}}),roughness:.6}),M.paint2=re({map:Ai("",{w:128,h:128,draw:i=>{i.fillStyle="#2a2a3a",i.fillRect(0,0,128,128),i.fillStyle="#e86020",i.beginPath(),i.ellipse(64,70,20,44,0,0,7),i.fill(),i.fillStyle="#3a8a2a",i.fillRect(56,14,16,18)}}),roughness:.6})}var C;function ei(n,t,e,i,s,r,o,a,l=[],c=.22){let h=x0(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[x,m]of p){if(m-x<.01)continue;let g=(x+m)/2,y=m-x;C.box(o,f,g,n+r*c/4,d,y,c/2,{uv:2.5,collide:!1}),C.box(a,f,g,n-r*c/4,d,y,c/2,{uv:2.5,collide:!1}),C.col(u.a,x,n-c/2,u.b,m,n+c/2,{surf:"wood"})}u.op&&mM(n,u.a,u.b,u.op,r,c)}}function Ci(n,t,e,i,s,r,o,a,l=[],c=.22){let h=x0(t,e,l);for(let u of h){let d=u.b-u.a,f=(u.a+u.b)/2,p=u.op?[[i,u.op.b],[u.op.t,i+s]]:[[i,i+s]];for(let[x,m]of p){if(m-x<.01)continue;let g=(x+m)/2,y=m-x;C.box(o,n+r*c/4,g,f,c/2,y,d,{uv:2.5,collide:!1}),C.box(a,n-r*c/4,g,f,c/2,y,d,{uv:2.5,collide:!1}),C.col(n-c/2,x,u.a,n+c/2,m,u.b,{surf:"wood"})}u.op&&gM(n,u.a,u.b,u.op,r,c)}}function x0(n,t,e){let i=[],s=n,r=[...e].sort((o,a)=>o.c-a.c);for(let o of r){let a=o.c-o.w/2,l=o.c+o.w/2;a>s&&i.push({a:s,b:a}),i.push({a,b:l,op:o}),s=l}return t>s&&i.push({a:s,b:t}),i}function mM(n,t,e,i,s,r){let a=r+.06;if(C.box(M.trim,t-.09/2+0,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),C.box(M.trim,e+.09/2,(i.b+i.t)/2,n,.09,i.t-i.b,a,{collide:!1}),C.box(M.trim,(t+e)/2,i.t+.09/2,n,e-t+.09*2,.09,a,{collide:!1}),i.b>.3&&C.box(M.trim,(t+e)/2,i.b-.03,n+s*.06,e-t+.2,.06,a+.1,{collide:!1}),i.win&&(C.box(M.trim,(t+e)/2,(i.b+i.t)/2,n+s*.02,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])_0(l<0?t-.05:e+.05,i.t+.05,n-s*(r/2+.06),l,!0)}function gM(n,t,e,i,s,r){let a=r+.06;if(C.box(M.trim,n,(i.b+i.t)/2,t-.09/2,a,i.t-i.b,.09,{collide:!1}),C.box(M.trim,n,(i.b+i.t)/2,e+.09/2,a,i.t-i.b,.09,{collide:!1}),C.box(M.trim,n,i.t+.09/2,(t+e)/2,a,.09,e-t+.09*2,{collide:!1}),i.b>.3&&C.box(M.trim,n+s*.06,i.b-.03,(t+e)/2,a+.1,.06,e-t+.2,{collide:!1}),i.win&&(C.box(M.trim,n+s*.02,(i.b+i.t)/2,(t+e)/2,.04,i.t-i.b,.04,{collide:!1}),!i.noCurtain))for(let l of[-1,1])_0(n-s*(r/2+.06),i.t+.05,l<0?t-.05:e+.05,l,!1)}var $r;function _0(n,t,e,i,s){if(!M.curtain)return;if(!$r){$r=new Xe(.5,1.6,12,1);let o=$r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a);o.setZ(a,Math.sin(l*40)*.035)}$r.computeVertexNormals(),$r.translate(0,-.8,0)}let r=new Kt().makeRotationY(s?0:Math.PI/2);r.setPosition(s?n+i*.2:n,t,s?e:e+i*.2),C.addGeo(M.curtain,$r,r),C.box(M.darkTrim,n,t+.02,e,s?.6:.03,.03,s?.03:.6,{collide:!1})}function xM(n,t,e,i,s,r,o,a){let c=(i-e)/2+.45,h=(e+i)/2,u=Math.atan2(r,(i-e)/2),d=Math.hypot(c,r*c/((i-e)/2));for(let f of[-1,1]){let p=pt(t-n+.9,.14,d,2),x=new Kt().makeRotationX(f*u);x.setPosition((n+t)/2,s+r/2+.05-.45*Math.tan(u)/2+.02,h+f*(d/2)*Math.cos(u)),C.addGeo(o,p,x);let m=new It(.07,.07,t-n+.45*2,8);m.rotateZ(Math.PI/2),C.addGeo(M.trim,m,new Kt().setPosition((n+t)/2,s-.45*Math.tan(u)+.02,h+f*c))}C.box(o,(n+t)/2,s+r+.1,h,t-n+.45*2,.12,.3,{collide:!1});for(let f of[n,t]){let p=new bi;p.moveTo(e-h,0),p.lineTo(i-h,0),p.lineTo(0,r),p.closePath();let x=new qi(p,{depth:.22,bevelEnabled:!1});Ji(x,.4,.4);let m=new Kt().makeRotationY(Math.PI/2);m.setPosition(f-.11+0,s,h),C.addGeo(a,x,m)}C.box(M.plaster,(n+t)/2,s+.06,h,t-n,.12,i-e,{uv:3,bullet:!0})}function t0(n,t,e,i){let s=new Nt,r=(a,l,c,h,u)=>{let d=new U(a,l);return d.position.set(c,h,u),s.add(d),d};r(pt(2.1,.42,.9,1),i,0,.25,0),r(pt(2.1,.6,.22,1),i,0,.7,-.36),r(pt(.22,.32,.9,1),i,-1,.6,0),r(pt(.22,.32,.9,1),i,1,.6,0);for(let a of[-.48,.48]){let l=r(new Xi(.12,.7,4,10),i,a,.52,.08);l.rotation.z=Math.PI/2,l.scale.set(1,1,2.6)}for(let a of[-.5,.5]){let l=r(new ye(.35,.3,.12),M.fabricO,a,.72,-.2);l.rotation.x=-.25}for(let[a,l]of[[-.95,.38],[.95,.38],[-.95,-.38],[.95,-.38]])r(new It(.03,.02,.08,6),M.wood,a,.03,l);s.position.set(n,.15,t),s.rotation.y=e,C.bake(s);let o=Math.abs(Math.cos(e))>.5?[1.1,.48]:[.48,1.1];C.col(n-o[0],.15,t-o[1],n+o[0],1,t+o[1],{surf:"carpet"})}function fa(n,t,e,i,s,r=M.wood){C.box(r,n,.15+s-.03,t,e,.06,i,{collide:!1});for(let o of[-1,1])for(let a of[-1,1])C.box(M.wood,n+o*(e/2-.08),.15+(s-.06)/2,t+a*(i/2-.08),.07,s-.06,.07,{collide:!1});C.col(n-e/2,.15,t-i/2,n+e/2,.15+s,t+i/2,{bullet:!1})}function er(n,t,e){let i=new Nt,s=(r,o,a,l,c)=>{let h=new U(r,o);return h.position.set(a,l,c),i.add(h),h};s(pt(.45,.05,.45,1),M.wood,0,.46,0);for(let r of[-1,1])for(let o of[-1,1])s(pt(.04,.46,.04,1),M.wood,r*.19,.23,o*.19);for(let r of[-1,1])s(pt(.04,.5,.04,1),M.wood,r*.19,.73,-.2);for(let r=0;r<3;r++)s(pt(.4,.05,.03,1),M.wood,0,.62+r*.13,-.2);i.position.set(n,.15,t),i.rotation.y=e,C.bake(i)}function nd(n,t,e,i=1.2,s=1.9){let r=new Nt,o=(l,c,h,u,d)=>{let f=new U(l,c);return f.position.set(h,u,d),r.add(f),f};o(pt(i,s,.04,1),M.wood,0,s/2,-.17);for(let l of[-1,1])o(pt(.04,s,.36,1),M.wood,l*i/2,s/2,0);for(let l=0;l<5;l++){let c=.05+l*(s-.1)/4;if(o(pt(i,.04,.36,1),M.wood,0,c,0),l<4){let h=-i/2+.08;for(;h<i/2-.12;){let u=.04+Qt()*.05,d=.22+Qt()*.14,f=[9054762,2771578,3828282,13148240,5913194,14209216][Math.floor(Qt()*6)],p=new se({color:f,roughness:.8}),x=o(pt(u,d,.24,1),Pe(f),h+u/2,c+.02+d/2,.02);Qt()<.15&&(x.rotation.z=.2),h+=u+.005}}}r.position.set(n,.15,t),r.rotation.y=e,C.bake(r);let a=Math.abs(Math.cos(e))>.5?[i/2,.2]:[.2,i/2];C.col(n-a[0],.15,t-a[1],n+a[0],.15+s,t+a[1])}var Ju={};function Pe(n,t={}){let e=n+JSON.stringify(t);return Ju[e]||(Ju[e]=re({color:n,roughness:.75,...t})),Ju[e]}function e0(n,t,e,i){let o=e-i*.445;C.box(Pe(15261904),(n+t)/2,.15+.92/2-.02,o,t-n,.92-.04,.65-.02,{surf:"wood"}),C.box(M.tile,(n+t)/2,.15+.92,o,t-n+.04,.04,.65+.04,{collide:!1,uv:.6});for(let h=n+.5;h<t;h+=.6)C.box(M.darkTrim,h,.15+.45,o-i*(.65/2),.02,.7,.01,{collide:!1});for(let h=n+.25;h<t;h+=.6)C.box(M.steel,h,.15+.72,o-i*(.65/2+.02),.12,.02,.03,{collide:!1});C.box(M.steel,n+1,.15+.92+.01,o,.6,.03,.42,{collide:!1});let a=new U(new Ze(.12,.02,6,12,Math.PI),M.chrome);a.position.set(n+1,.15+.92+.03,o+i*.2),a.rotation.y=Math.PI/2,C.bake(a);let l=t+.45;C.box(M.white,l,.15+.95,o,.8,1.9,.72,{}),C.box(M.steel,l-.3,.15+1.3,o-i*.37,.03,.5,.04,{collide:!1}),C.box(M.darkTrim,l,.15+1.25,o-i*.365,.8,.012,.01,{collide:!1}),C.box(Pe(15261904),(n+t)/2,.15+2.1,e-i*.3,t-n,.7,.36,{collide:!1});for(let[h,u]of[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]]){let d=new U(new Ze(.08,.012,6,16),M.black);d.rotation.x=Math.PI/2,d.position.set(t-.6+h,.15+.92+.03,o+u),C.bake(d)}let c=new U(new It(.13,.12,.16,16,1,!1),M.steel);c.position.set(t-.75,.15+.92+.1,o-.12),C.bake(c)}function n0(n,t,e){let i=new Nt,s=(o,a,l,c,h)=>{let u=new U(o,a);return u.position.set(l,c,h),i.add(u),u};s(pt(1.6,.5,.45,1),M.wood,0,.25,0),s(pt(1.3,.75,.06,1),M.black,0,.95,0),s(new Xe(1.24,.69),M.screen,0,.95,.031),s(pt(.3,.06,.2,1),M.black,0,.53,0),i.position.set(n,.15,t),i.rotation.y=e,C.bake(i);let r=Math.abs(Math.cos(e))>.5?[.8,.25]:[.25,.8];C.col(n-r[0],.15,t-r[1],n+r[0],.65,t+r[1])}function Ku(n,t,e,i,s){let r=new Nt,o=new U(pt(.9,.7,.05,1),M.wood);r.add(o);let a=new U(new Xe(.78,.58),s);a.position.z=.03,r.add(a),r.position.set(n,t,e),r.rotation.y=i,C.bake(r)}function i0(n,t,e,i,s){C.box(s,n,.155,t,e,.012,i,{collide:!1,uv:1})}function s0(n,t){let e=new Nt,i=new U(new It(.15,.18,.04,16),M.black);i.position.y=.02,e.add(i);let s=new U(new It(.015,.015,1.5,6),M.chrome);s.position.y=.77,e.add(s);let r=new U(new It(.16,.24,.3,16,1,!0),Pe(15786176,{side:ln,emissive:4206624}));r.position.y=1.55,e.add(r),e.position.set(n,.15,t),C.bake(e)}function r0(n,t,e){let i=new Nt,s=(o,a,l,c,h)=>{let u=new U(o,a);return u.position.set(l,c,h),i.add(u),u};s(pt(1.5,.3,2,1),M.wood,0,.2,0),s(pt(1.45,.22,1.95,1),M.white,0,.45,0),s(pt(1.5,.08,1.4,1),M.carpetB,0,.58,.28),s(pt(1.5,.9,.08,1),M.wood,0,.55,-1);for(let o of[-.35,.35]){let a=s(new Xi(.1,.3,4,8),M.white,o,.62,-.75);a.rotation.z=Math.PI/2,a.scale.set(1,1,1.8)}i.position.set(n,.15,t),i.rotation.y=e,C.bake(i);let r=Math.abs(Math.cos(e))>.5?[.75,1.05]:[1.05,.75];C.col(n-r[0],.15,t-r[1],n+r[0],.8,t+r[1],{bullet:!0})}function o0(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.18,o=2.9,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;C.box(M.concrete,(t+e)/2,.08,(i+s)/2,e-t+.3,.16,s-i+.3,{collide:!1}),C.box(M.floor,(t+e)/2,r-.01,(i+s)/2,e-t-.1,.02,s-i-.1,{collide:!1,uv:3}),C.col(t,0,i,e,r,s,{bullet:!0,surf:"wood"});let h=(x,m=1.4)=>({c:x,w:m,b:r+.95,t:r+2.15,win:!0}),u=(x,m=1.4)=>({c:x,w:m,b:r,t:r+2.25}),d=n.siding,f=n.inner||M.plaster;ei(a,t,e,r,o,c,d,f,n.frontOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),ei(l,t,e,r,o,-c,d,f,n.backOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),Ci(t,i+.11,s-.11,r,o,-1,d,f,n.leftOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),Ci(e,i+.11,s-.11,r,o,1,d,f,n.rightOps.map(x=>x.d?u(x.c,x.w):h(x.c,x.w))),n.partX!==void 0&&Ci(n.partX,n.partZ0,n.partZ1,r,o,1,M.plasterG,f,[u(n.partDoor,1.4)],.14),xM(t,e,i,s,r+o,2,n.roof,d);let p=a+c*.9;C.box(M.concrete,n.doorX,.1,p,2.6,.2,1.6,{surf:"concrete"}),C.box(M.concrete,n.doorX,.05,p+c*1,1.8,.1,.5,{surf:"concrete"}),C.box(n.roof,n.doorX,r+2.55,p,3,.1,1.9,{collide:!1});for(let x of[-1,1]){let m=new U(new It(.07,.08,2.45,10),M.trim);m.position.set(n.doorX+x*1.3,.2+1.22,p+c*.75),C.bake(m),C.col(n.doorX+x*1.3-.08,0,p+c*.75-.08,n.doorX+x*1.3+.08,2.7,p+c*.75+.08,{surf:"wood"})}for(let x of[-1,1]){let m=new U(new ye(.14,.24,.14),M.lampGlow);m.position.set(n.doorX+x*.95,r+1.9,a+c*.15),C.bake(m)}C.box(M.brick,n.chimX,r+o+1.75,(i+s)/2+1.2,.8,2.9,.8,{collide:!1,uv:1.2}),C.box(M.concrete,n.chimX,r+o+3.25,(i+s)/2+1.2,.95,.12,.95,{collide:!1});for(let x of[i,s])C.box(M.brick,(t+e)/2,.45,x+(x===i?-.13:.13),e-t+.06,.55,.05,{collide:!1,uv:1.2});for(let x of[t,e])C.box(M.brick,x+(x===t?-.13:.13),.45,(i+s)/2,.05,.55,s-i+.06,{collide:!1,uv:1.2})}function a0(n){let{x0:t,x1:e,z0:i,z1:s}=n,r=.05,o=2.7,a=n.frontNeg?s:i,l=n.frontNeg?i:s,c=n.frontNeg?1:-1;C.box(M.concrete,(t+e)/2,.025,(i+s)/2,e-t,.05,s-i,{collide:!1,uv:3}),ei(a,t,e,r,o,c,n.siding,M.plaster,[{c:(t+e)/2,w:e-t-1,b:r,t:r+2.2}]),C.box(M.white,(t+e)/2,r+2.35,a-c*.05,e-t-1,.3,.06,{collide:!1}),ei(l,t,e,r,o,-c,n.siding,M.plaster,[{c:(t+e)/2,w:1.2,b:r+1.1,t:r+2,win:!0}]);let h=n.outerX;Ci(h,i+.11,s-.11,r,o,h>(t+e)/2?1:-1,n.siding,M.plaster,[{c:(i+s)/2+1.5,w:1.3,b:r,t:r+2.2}]),C.box(n.roof,(t+e)/2,r+o+.1,(i+s)/2,e-t+.6,.2,s-i+.6,{collide:!1,uv:2}),C.box(M.plaster,(t+e)/2,r+o-.03,(i+s)/2,e-t,.06,s-i,{collide:!1,uv:3}),C.col(t,r+o-.05,i,e,r+o+.2,s);let u=l-c*-.5,d=l+(n.frontNeg?.5:-.5);C.box(M.wood,(t+e)/2,.9,d,2.4,.08,.7,{collide:!1});for(let p of[-1,1])C.box(M.wood,(t+e)/2+p*1.1,.45,d,.08,.86,.6,{collide:!1});C.col((t+e)/2-1.2,0,d-.35,(t+e)/2+1.2,.95,d+.35,{bullet:!1});for(let p=0;p<6;p++)C.box(Pe([12595248,3170496,4210752][p%3]),(t+e)/2-.9+p*.35,.98,d,.18,.08,.12,{collide:!1});let f=Pe(11569754,{map:K.wood.map});for(let[p,x,m]of[[.9,1.5,.6],[.9,2.2,.5],[.95,1.8,.45]]){let g=(n.frontNeg,t+p+.2),y=(i+s)/2+(n.frontNeg?-1:1)*(x-2);C.box(f,g,m/2+(x===1.8?.6:.05),y,m,m,m,{surf:"wood"})}}function y0(n,t,e,i,s=.38,r=.26){let o=new U(new Ze(s-.1,.11,10,20),M.tire);o.position.set(t,e,i),n.add(o);let a=new U(new It(s-.13,s-.13,r*.8,16),M.chrome);a.rotation.x=Math.PI/2,a.position.set(t,e,i),n.add(a);let l=new U(new It(.08,.08,r+.02,8),M.black);l.rotation.x=Math.PI/2,l.position.set(t,e,i),n.add(l)}function _M(n,t,e){let i=new Nt,s=(h,u,d,f,p)=>{let x=new U(h,u);return x.position.set(d,f,p),i.add(x),x},r=9.6,o=2.5,a=2.6;s(pt(r,a-.6,o,1.5),M.busYellow,0,.6+(a-.6)/2,0),s(pt(r-.1,.25,o-.1,1),M.busYellow,0,a+.12,0);for(let h of[-1,1]){s(pt(r-2.2,.75,.02),M.glass,-.5,2,h*(o/2+.005));for(let u=0;u<9;u++)s(pt(.08,.8,.04),M.busYellow,-4.1+u*.95,2,h*(o/2+.01));s(pt(r,.06,.04),M.black,0,1.45,h*(o/2+.02)),s(pt(r,.06,.04),M.black,0,1.15,h*(o/2+.02))}s(pt(.04,1,o-.3),M.glass,r/2+.01,2,0),s(pt(.04,.8,o-.3),M.glass,-r/2-.01,2,0),s(pt(.25,.3,o+.1),M.black,r/2+.1,.65,0),s(pt(.25,.3,o+.1),M.black,-r/2-.1,.65,0);for(let h of[-1,1])s(new It(.12,.12,.05,12),M.lampGlow,r/2+.03,1,h*.9).rotation.z=Math.PI/2,s(new It(.1,.1,.05,12),M.redPaint,-r/2-.03,1,h*.9).rotation.z=Math.PI/2;s(pt(.6,.4,.04),M.black,r/2-.1,2.75,.8),s(pt(1.6,.25,.03),M.black,1,1.3,o/2+.03);for(let h of[-3,3.2])for(let u of[-1,1])y0(i,h,.48,u*(o/2-.12),.48,.3);s(pt(r-.4,.3,o-.3),M.black,0,.45,0),i.position.set(n,0,t),i.rotation.y=e,C.bake(i);let l=Math.abs(Math.cos(e))>.5?r/2:o/2,c=Math.abs(Math.cos(e))>.5?o/2:r/2;C.col(n-l,.3,t-c,n+l,a+.25,t+c,{surf:"metal"}),C.col(n-l+.3,0,t-c+.3,n+l-.3,.3,t+c-.3,{surf:"metal",bullet:!1})}function Yn(n,t,e,i,s=!1){let r=new Nt,o=(A,R,_,b,P)=>{let T=new U(A,R);return T.position.set(_,b,P),r.add(T),T},a=s?5.2:4.5,l=1.9;o(pt(a,.62,l,1),i,0,.72,0),o(pt(a-.2,.1,l-.1,1),i,0,1.06,0);let c=s?1.9:2.4,h=s?.6:-.1,u=new bi;u.moveTo(-c/2-.35,0),u.lineTo(c/2+.45,0),u.lineTo(c/2-.05,.6),u.lineTo(-c/2+.05,.6),u.closePath();let d=new qi(u,{depth:l-.2,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});d.translate(0,0,-(l-.2)/2),o(d,M.glass,h,1.1,0);let f=o(pt(c-.1,.06,l-.16,1),i,h,1.73,0);for(let A of[-1,1])o(pt(.08,.6,.08),i,h+c/2-.2,1.4,A*(l/2-.12)).rotation.z=.5,o(pt(.08,.6,.08),i,h,1.4,A*(l/2-.12));s&&(o(pt(2,.5,.08),i,-1.5,1.3,l/2-.04),o(pt(2,.5,.08),i,-1.5,1.3,-l/2+.04),o(pt(.08,.5,l),i,-a/2+.04,1.3,0),o(pt(1.9,.05,l-.15),M.rust,-1.5,1.08,0)),o(pt(.15,.22,l+.04),M.chrome,a/2+.05,.55,0),o(pt(.15,.22,l+.04),M.chrome,-a/2-.05,.55,0);for(let A of[-1,1])o(pt(.04,.14,.32),M.lampGlow,a/2+.01,.85,A*.66),o(pt(.04,.14,.28),M.redPaint,-a/2-.01,.85,A*.68);o(pt(.03,.2,.7),M.black,a/2+.01,.78,0);for(let A of[-1,1])o(pt(.12,.08,.18),i,h+c/2+.2,1.2,A*(l/2+.08));for(let A of[-1,1])o(pt(.02,.4,.01),M.black,h,.75,A*(l/2+.006)),o(pt(.18,.03,.02),M.chrome,h+.3,.92,A*(l/2+.01)),o(pt(.18,.03,.02),M.chrome,h-.7,.92,A*(l/2+.01));o(pt(a-1.2,.25,l-.1),M.black,0,.32,0);for(let A of[a/2-.85,-a/2+.85])for(let R of[-1,1])y0(r,A,.38,R*(l/2-.05));r.position.set(n,0,t),r.rotation.y=e,C.bake(r);let p=Math.abs(Math.cos(e))>.5,x=p?a/2:l/2,m=p?l/2:a/2;C.col(n-x,.25,t-m,n+x,1.08,t+m,{surf:"metal"});let g=n+(p?h*Math.cos(e):0),y=t+(p?0:-h*Math.sin(e)),S=p?c/2+.2:l/2-.1,v=p?l/2-.1:c/2+.2;C.col(g-S,1.08,y-v,g+S,1.75,y+v,{surf:"metal"})}function Ki(n,t,e=1,i=1){qn(i*77+3);let s=new Nt,r=3.2*e,o=new It(.16*e,.28*e,r,12,4);Ji(o,2,2);let a=new U(o,M.bark);a.position.y=r/2,s.add(a);for(let c=0;c<5;c++){let h=new U(new jn(.12*e,.6*e,6),M.bark),u=c/5*Math.PI*2;h.position.set(Math.cos(u)*.2*e,.15,Math.sin(u)*.2*e),h.rotation.set(Math.sin(u)*1.2,0,-Math.cos(u)*1.2),s.add(h)}for(let c=0;c<4;c++){let h=new U(new It(.04*e,.09*e,1.6*e,6),M.bark),u=c/4*Math.PI*2+.4;h.position.set(Math.cos(u)*.45*e,r*.75,Math.sin(u)*.45*e),h.rotation.set(Math.sin(u)*.9,0,-Math.cos(u)*.9),s.add(h)}let l=ge(i+500,2,3);for(let c=0;c<13;c++){let h=(.75+Qt()*.6)*e,u=new Wn(h,3),d=u.attributes.position,f=u.attributes.normal;for(let g=0;g<d.count;g++){let y=d.getX(g),S=d.getY(g),v=d.getZ(g),A=1+(l((y/h+1)*.5,(v/h+S/h+2)*.25)-.5)*.55;d.setXYZ(g,y*A,S*A*.85,v*A)}u.computeVertexNormals();for(let g=0;g<d.count;g++){let y=new N(d.getX(g),d.getY(g)/.85,d.getZ(g)).normalize(),S=new N(f.getX(g),f.getY(g),f.getZ(g));y.lerp(S,.35).normalize(),f.setXYZ(g,y.x,y.y,y.z)}Ji(u,3,3);let p=new U(u,M.leaf),x=Qt()*Math.PI*2,m=c===0?0:(.8+Qt()*.6)*e;p.position.set(Math.cos(x)*m,r+(Qt()*1.4-.2)*e,Math.sin(x)*m),s.add(p)}s.position.set(n,0,t),C.bake(s),C.col(n-.25*e,0,t-.25*e,n+.25*e,r,t+.25*e,{surf:"wood"})}function qc(n,t,e,i,s=1,r=[]){let o=Math.hypot(e-n,i-t),a=(e-n)/o,l=(i-t)/o,c=Math.abs(a)>.5,h=new ye(.09,s,.025),u=new jn(.065,.12,4),d=p=>r.some(x=>p>x[0]&&p<x[1]);for(let p=.1;p<o;p+=.16){if(d(p))continue;let x=new Kt().makeRotationY(c?0:Math.PI/2);x.setPosition(n+a*p,s/2,t+l*p),C.addGeo(M.paintwood,h,x);let m=new Kt().makeRotationY(Math.PI/4+(c?0:Math.PI/2));m.setPosition(n+a*p,s+.06,t+l*p),C.addGeo(M.paintwood,u,m)}let f=[[0,o]];for(let p of r)f=f.flatMap(([x,m])=>p[1]<=x||p[0]>=m?[[x,m]]:[[x,p[0]],[p[1],m]].filter(([g,y])=>y-g>.05));for(let[p,x]of f){for(let v of[s*.25,s*.75]){let A=n+a*(p+x)/2,R=t+l*(p+x)/2;C.box(M.paintwood,A,v,R+(c?-.025:0),c?x-p:.04,.08,c?.04:x-p,{collide:!1})}let m=n+a*p,g=t+l*p,y=n+a*x,S=t+l*x;C.col(Math.min(m,y)-(c?0:.06),0,Math.min(g,S)-(c?.06:0),Math.max(m,y)+(c?0:.06),s,Math.max(g,S)+(c?.06:0),{bullet:!1,surf:"wood"});for(let v=p;v<=x;v+=2.4)C.box(M.paintwood,n+a*v,s/2+.05,t+l*v,.12,s+.1,.12,{collide:!1})}}function ji(n,t,e,i,s=2.6){let r=(n+e)/2,o=(t+i)/2,a=Math.abs(e-n),l=Math.abs(i-t),c=new ye(a,s,l,Math.max(2,Math.round(a*2)),6,Math.max(2,Math.round(l*2))),h=c.attributes.position,u=ge(Math.round(r*7+o*13)+900,4,3);for(let p=0;p<h.count;p++){let x=h.getX(p),m=h.getY(p),g=h.getZ(p),y=(u((x+r)*.05+.5,(m+g+o)*.05+.5)-.5)*.5;h.setXYZ(p,x+Math.sign(x)*y*(Math.abs(x)>a/2-.01?1:0),m+(m>s/2-.01?y:0),g+Math.sign(g)*y*(Math.abs(g)>l/2-.01?1:0))}c.computeVertexNormals();let d=pt(a,s,l,1.5,[r,0,o]);c.setAttribute("uv",new an(new Float32Array(h.count*2),2));let f=c.attributes.uv;for(let p=0;p<h.count;p++)f.setXY(p,(h.getX(p)+r+h.getZ(p)+o)/1.5,h.getY(p)/1.5);C.addGeo(M.hedge,c,new Kt().setPosition(r,s/2,o)),C.col(r-a/2,0,o-l/2,r+a/2,s,o+l/2,{surf:"grass"})}function xe(n,t,e,i=1,s=0){let r=new Nt,o=(l,c,h,u,d)=>{let f=new U(l,c);return f.position.set(h,u,d),r.add(f),f};o(pt(i-.04,i-.04,i-.04,i),M.wood,0,i/2,0);let a=.07*i;for(let l of[-1,1])for(let c of[-1,1])o(pt(a,i,a,1),M.wood,l*(i/2-a/2),i/2,c*(i/2-a/2));for(let l of[0,1])for(let c of[-1,1])o(pt(a,a,i,1),M.wood,c*(i/2-a/2),l*(i-a)+a/2,0),o(pt(i,a,a,1),M.wood,0,l*(i-a)+a/2,c*(i/2-a/2));for(let l of[-1,1]){let c=o(pt(i*1.3,a*.8,a*.5,1),M.wood,0,i/2,l*(i/2+.005));c.rotation.z=Math.PI/4}r.position.set(n,t,e),r.rotation.y=s,C.bake(r),C.col(n-i/2,t,e-i/2,n+i/2,t+i,e+i/2,{surf:"wood"})}function Jr(n,t,e){C.box(M.wood,n,.2,t,1,.4,.7,{surf:"wood"});let s=Pe(e===0?15231514:e===1?13642266:12095584,{roughness:.5});for(let r=0;r<12;r++){let o=new U(new Me(.1,10,8),s);o.position.set(n-.4+r%4*.26,.45,t-.2+Math.floor(r/4)*.2),o.scale.y=.85,C.bake(o)}}function l0(n,t,e){let i=new Nt,s=new U(pt(.1,1.1,.1,1),M.wood);s.position.y=.55,i.add(s);let r=new U(new Xi(.15,.35,4,12),M.steel);r.rotation.z=Math.PI/2,r.position.y=1.15,i.add(r);let o=new U(pt(.03,.2,.06,1),M.redPaint);o.position.set(.05,1.3,.17),i.add(o),i.position.set(n,0,t),i.rotation.y=e,C.bake(i),C.col(n-.08,0,t-.08,n+.08,1,t+.08,{bullet:!1})}function Kc(n,t){let e=new Nt,i=new U(new It(.14,.17,.6,14),M.redPaint);i.position.y=.3,e.add(i);let s=new U(new Me(.15,14,8,0,Math.PI*2,0,Math.PI/2),M.redPaint);s.position.y=.6,e.add(s);for(let o of[-1,1]){let a=new U(new It(.06,.06,.12,10),M.redPaint);a.rotation.z=Math.PI/2,a.position.set(o*.18,.42,0),e.add(a)}let r=new U(new It(.03,.05,.08,6),M.chrome);r.position.y=.76,e.add(r),e.position.set(n,.15,t),C.bake(e),C.col(n-.17,0,t-.17,n+.17,.9,t+.17,{bullet:!1})}function di(n,t,e){let i=new Nt,s=new U(new It(.32,.27,.95,16,3),Pe(e,{map:K.metal.map,normalMap:K.metal.normalMap,metalness:.2,roughness:.6}));s.position.y=.48,i.add(s);let r=new U(new It(.35,.34,.08,16),Pe(e));r.position.y=1,i.add(r);for(let o=0;o<3;o++){let a=new U(new Ze(.3-o*.015,.012,6,24),Pe(e));a.rotation.x=Math.PI/2,a.position.y=.25+o*.3,i.add(a)}i.position.set(n,0,t),C.bake(i),C.col(n-.33,0,t-.33,n+.33,1.04,t+.33,{surf:"metal"})}function nr(n,t,e){let i=new Nt,s=new U(new It(.06,.1,5.2,10),M.darkTrim);s.position.y=2.6,i.add(s);let r=new U(new It(.04,.04,1.4,8),M.darkTrim);r.rotation.x=Math.PI/2,r.position.set(0,5.1,e*.7),i.add(r);let o=new U(new It(.12,.3,.25,12),M.darkTrim);o.position.set(0,5.05,e*1.35),i.add(o);let a=new U(new It(.22,.22,.04,12),M.lampGlow);a.position.set(0,4.92,e*1.35),i.add(a);let l=new U(new It(.18,.22,.4,10),M.darkTrim);l.position.y=.2,i.add(l),i.position.set(n,.15,t),C.bake(i),C.col(n-.12,0,t-.12,n+.12,5.3,t+.12,{surf:"metal"})}function ju(n,t,e,i){C.box(M.wood,n,.25,t,e,.5,i,{surf:"wood"}),C.box(M.dirt,n,.51,t,e-.16,.04,i-.16,{collide:!1});for(let s=0;s<Math.floor(e*i*3);s++){let r=n-e/2+.25+Qt()*(e-.5),o=t-i/2+.25+Qt()*(i-.5);for(let a=0;a<5;a++){let l=new U(new jn(.05,.4,4),M.leaf);l.position.set(r,.7,o),l.rotation.set((Qt()-.5)*1.2,Qt()*3,(Qt()-.5)*1.2),C.bake(l)}}}function da(n,t,e){let i=new U(new It(.65,.65,1.2,20,2),M.hay);i.rotation.set(0,e,Math.PI/2),i.position.set(n,.65,t),C.bake(i);let s=Math.abs(Math.cos(e))>.5;C.col(n-(s?.6:.65),0,t-(s?.65:.6),n+(s?.6:.65),1.3,t+(s?.65:.6),{surf:"grass"})}function c0(n,t){ei(t-3.2/2,n-4/2,n+4/2,.05,2.4,-1,M.wood,M.wood,[],.12),ei(t+3.2/2,n-4/2,n+4/2,.05,2.4,1,M.wood,M.wood,[{c:n+.6,w:1.4,b:.05,t:2.1}],.12),Ci(n-4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,-1,M.wood,M.wood,[{c:t,w:.9,b:1.1,t:1.8,win:!0}],.12),Ci(n+4/2,t-3.2/2+.06,t+3.2/2-.06,.05,2.4,1,M.wood,M.wood,[{c:t-.3,w:1.2,b:.05,t:2.1}],.12),C.box(M.roof2,n,2.4+.15,t,4+.6,.12,3.2+.6,{rotX:.06,collide:!1}),C.box(M.wood,n,.03,t,4,.06,3.2,{collide:!1}),C.col(n-4/2,2.4,t-3.2/2,n+4/2,2.4+.3,t+3.2/2),C.box(M.wood,n-1.4,.8,t-1.2,1,.05,.5,{collide:!1}),C.col(n-1.9,0,t-1.5,n-.9,1.6,t-.95);for(let r=0;r<3;r++)C.box(Pe(9071162),n-1.7+r*.3,1,t-1.2,.2,.35,.2,{collide:!1})}function yM(n,t){let r=(o,a)=>C.box(M.white,o,1.25,a,.08,2.5,.08,{surf:"metal"});for(let o of[-1,0,1])for(let a of[-1,1])r(n+o*5/2,t+a*3.6/2);for(let o of[-1,1])C.box(M.white,n,2.5,t+o*3.6/2,5,.08,.08,{collide:!1});for(let o of[-1,0,1])C.box(M.white,n+o*5/2,2.5,t,.08,.08,3.6,{collide:!1});for(let o of[-1,1])C.box(M.glass,n,2.5+.45,t+o*3.6/4,5,.03,3.6/2+.1,{rotX:o*.45,collide:!1});C.box(M.white,n,2.5+.9,t,5,.06,.06,{collide:!1}),C.box(M.wood,n,.45,t-3.6/2+.4,5-.4,.06,.7,{collide:!1}),C.col(n-5/2+.2,0,t-3.6/2+.05,n+5/2-.2,.9,t-3.6/2+.75,{bullet:!1});for(let o=0;o<6;o++){let a=new U(new It(.12,.09,.2,12),Pe(11558970));a.position.set(n-2+o*.8,.58,t-3.6/2+.4),C.bake(a);let l=new U(new Wn(.16,1),M.leaf);l.position.set(n-2+o*.8,.78,t-3.6/2+.4),C.bake(l)}}function h0(n,t){let e=new Nt,i=new U(new Me(.35,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),M.black);i.position.y=.85,e.add(i);let s=new U(new Me(.35,16,10,0,Math.PI*2,0,Math.PI/2),M.black);s.position.y=.87,e.add(s);for(let r=0;r<3;r++){let o=new U(new It(.02,.02,.85,6),M.steel),a=r/3*Math.PI*2;o.position.set(Math.cos(a)*.2,.4,Math.sin(a)*.2),o.rotation.set(Math.sin(a)*.3,0,-Math.cos(a)*.3),e.add(o)}e.position.set(n,0,t),C.bake(e),C.col(n-.35,0,t-.35,n+.35,1.2,t+.35,{bullet:!1,surf:"metal"})}function u0(n,t){let e=new Nt,i=new U(new It(.6,.6,.05,20),M.white);i.position.y=.72,e.add(i);let s=new U(new It(.04,.04,2.3,8),M.steel);s.position.y=1.15,e.add(s);let r=new U(new jn(1.4,.5,8,1,!0),Pe(13647936,{side:ln}));r.position.y=2.2,e.add(r),e.position.set(n,0,t),C.bake(e),C.col(n-.6,0,t-.6,n+.6,.75,t+.6,{bullet:!1});for(let o=0;o<3;o++){let a=o/3*Math.PI*2;MM(n+Math.cos(a)*1,t+Math.sin(a)*1,-a-Math.PI/2)}}function MM(n,t,e){let i=new Nt,s=new U(pt(.45,.04,.45,1),M.white);s.position.y=.45,i.add(s);let r=new U(pt(.45,.45,.04,1),M.white);r.position.set(0,.7,-.21),i.add(r);for(let o of[-1,1])for(let a of[-1,1]){let l=new U(pt(.03,.45,.03,1),M.white);l.position.set(o*.2,.22,a*.2),i.add(l)}i.position.set(n,0,t),i.rotation.y=e,C.bake(i)}function Nn(n,t,e){let i=new bi;i.moveTo(-.3,0),i.lineTo(.3,0),i.lineTo(.12,.3),i.lineTo(.08,.85),i.lineTo(-.08,.85),i.lineTo(-.12,.3),i.closePath();let s=new qi(i,{depth:2.4,bevelEnabled:!1});s.translate(0,0,-1.2),Ji(s,.7,.7);let r=new Kt().makeRotationY(e);r.setPosition(n,0,t),C.addGeo(M.concrete,s,r);let o=Math.abs(Math.cos(e))>.5;C.col(n-(o?.3:1.2),0,t-(o?1.2:.3),n+(o?.3:1.2),.85,t+(o?1.2:.3))}function Ts(n,t,e){let i=Ai(t,{w:256,h:256,size:200,color:"rgba(255,255,255,0.9)",stroke:"rgba(0,0,0,0.35)",strokeW:8,draw:h=>{h.strokeStyle="rgba(255,220,60,0.9)",h.lineWidth=14,h.beginPath(),h.arc(128,128,116,0,7),h.stroke()}}),s=new U(new Xe(3.4,3.4),new ai({map:i,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));s.rotation.x=-Math.PI/2,s.position.set(e.x,.06,e.z),s.renderOrder=2,n.add(s);let r=new Nt,o=new U(pt(1.3,.7,.9,1),M.greenPaint);o.position.y=.35,r.add(o);for(let h=0;h<4;h++){let u=new U(pt(.04,.72,.92,1),M.darkTrim);u.position.set(-.5+h*.33,.35,0),r.add(u)}let a=new U(pt(1.35,.06,.95,1),M.darkTrim);a.position.y=.72,r.add(a);let l=new U(new Xe(.5,.5),new se({map:Ai(t,{w:128,h:128,size:100,bg:"#f0c020",color:"#111"}),roughness:.6}));l.position.set(0,.38,.46),r.add(l);let c=l.clone();c.position.z=-.46,c.rotation.y=Math.PI,r.add(c),r.position.set(e.x,0,e.z),C.bake(r),C.col(e.x-.65,0,e.z-.45,e.x+.65,.75,e.z+.45,{surf:"metal"})}function M0(n,t){let e=new Nt,i=new U(new It(.12,.16,8.5,10),M.bark);i.position.y=4.25,e.add(i);let s=new U(pt(.12,.12,2,1),M.wood);s.position.y=7.8,e.add(s);for(let o of[-.85,0,.85]){let a=new U(new It(.04,.05,.14,8),M.white);a.position.set(0,7.93,o),e.add(a)}let r=new U(new It(.25,.25,.7,12),M.metal);r.position.set(.3,6.6,0),e.add(r),e.position.set(n,0,t),C.bake(e),C.col(n-.16,0,t-.16,n+.16,8.5,t+.16,{surf:"wood"})}function Jc(n,t,e,i){let s=[];for(let o=0;o<=24;o++){let a=o/24;s.push(new N(n+(t-n)*a,e-Math.sin(a*Math.PI)*.6,i))}let r=new Yo(new Fr(s),24,.012,4,!1);C.addGeo(M.black,r,new Kt)}function d0(n,t,e){let i=new Nt,s=new U(pt(1.2,.8,.05,1),M.white);s.position.set(0,3.2,0),i.add(s);let r=new U(pt(.45,.35,.06,1),M.redPaint);r.position.set(0,3.05,.005),i.add(r);let o=new U(pt(.37,.27,.07,1),M.white);o.position.set(0,3.05,.006),i.add(o);let a=new U(new Ze(.23,.012,6,20),M.redPaint);a.rotation.x=Math.PI/2,a.position.set(0,2.9,.28),i.add(a);let l=new U(new It(.23,.15,.4,12,1,!0),Pe(16777215,{wireframe:!0}));l.position.set(0,2.7,.28),i.add(l),i.position.set(n,0,t),i.rotation.y=e,C.bake(i)}function vM(n,t){let e=new Nt;for(let s of[-1.4,1.4])for(let r of[-.6,.6]){let o=new U(new It(.04,.04,2.5,8),M.redPaint);o.position.set(s,1.2,r*.5),o.rotation.x=r*.45,e.add(o)}let i=new U(new It(.05,.05,3,8),M.redPaint);i.rotation.z=Math.PI/2,i.position.y=2.35,e.add(i);for(let s of[-.6,.6]){for(let o of[-.18,.18]){let a=new U(new It(.008,.008,1.8,4),M.steel);a.position.set(s+o,1.45,0),e.add(a)}let r=new U(pt(.45,.04,.2,1),M.black);r.position.set(s,.55,0),e.add(r)}e.position.set(n,0,t),C.bake(e);for(let s of[-1.4,1.4])C.col(n+s-.1,0,t-.6,n+s+.1,2.4,t+.6,{bullet:!1,surf:"metal"})}function bM(n,t){let e=new Nt,i=new U(new It(1.6,1.6,.04,28),M.black);i.position.y=.85,e.add(i);let s=new U(new Ze(1.65,.1,6,28),Pe(2783968));s.rotation.x=Math.PI/2,s.position.y=.88,e.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new U(new It(.03,.03,.88,6),M.steel);a.position.set(Math.cos(o)*1.6,.44,Math.sin(o)*1.6),e.add(a)}e.position.set(n,0,t),C.bake(e),C.col(n-1.4,0,t-1.4,n+1.4,.9,t+1.4,{bullet:!1,surf:"carpet"})}function Yc(n,t,e,i){let s=new Nt,r=new U(pt(1.3,2.2,.05,1),M.paintwood);r.position.set(.65,1.1,0),s.add(r);for(let[a,l]of[[.35,1.55],[.95,1.55],[.35,.6],[.95,.6]]){let c=new U(pt(.4,.6,.07,1),M.paintwood);c.position.set(a,l,0),s.add(c)}let o=new U(new Me(.04,8,6),M.chrome);o.position.set(1.15,1,.05),s.add(o),s.position.set(n,.18,t),s.rotation.y=e+i,C.bake(s)}function f0(n,t,e){let i=new U(pt(1,.02,.6,1),Pe(9071162,{map:K.carpet.map}));i.position.set(n,.21,t),C.bake(i);for(let s of[-1,1]){let r=new U(new It(.2,.15,.35,14),Pe(11558970));r.position.set(n+s*1,.38,t+e*.2),C.bake(r);let o=new U(new Wn(.28,2),M.leaf);o.position.set(n+s*1,.75,t+e*.2),C.bake(o)}}function jc(n,t){C.box(M.metal,n,.4,t,.8,.8,.8,{surf:"metal",bullet:!0});let e=new U(new It(.3,.3,.02,16),M.black);e.position.set(n,.81,t),C.bake(e);for(let i=0;i<7;i++)C.box(M.darkTrim,n-.41,.15+i*.1,t,.01,.03,.7,{collide:!1})}function ma(n,t,e){let i=new Nt;for(let l of[-.5,.5]){let c=new U(new Ze(.3,.025,6,20),M.tire);c.position.set(l,.32,0),i.add(c)}let s=new U(new It(.02,.02,.9,6),M.carBlue);s.rotation.z=Math.PI/2,s.position.set(0,.6,0),i.add(s);let r=new U(new It(.02,.02,.6,6),M.carBlue);r.rotation.z=.8,r.position.set(-.2,.45,0),i.add(r);let o=new U(pt(.22,.05,.1,1),M.black);o.position.set(-.25,.8,0),i.add(o);let a=new U(new It(.015,.015,.5,6),M.chrome);a.rotation.x=Math.PI/2,a.position.set(.45,.85,0),i.add(a),i.position.set(n,0,t),i.rotation.set(0,e,.25),C.bake(i)}function p0(n,t){let e=new U(new Ze(.22,.06,8,20),Pe(2787882));e.position.set(n,.35,t),C.bake(e);let i=new U(pt(.4,.5,.05,1),M.darkTrim);i.position.set(n,.25,t-.08),C.bake(i)}function SM(){for(let e of[-24,-6,12,28])M0(e,-6.3);for(let[e,i]of[[-24,-6],[-6,12],[12,28]])for(let s of[-.85,0,.85])Jc(e,i,7.93,-6.3+s);Jc(-40,-24,7.93,-6.3),Jc(28,44,7.93,-6.3),d0(8,-9.85,0),d0(-8,9.85,Math.PI),vM(14,23),bM(-14,-22.5),Yc(-1.7,-9.5,0,-1.2),Yc(1.7,9.5,Math.PI,-1.2),Yc(1.3,-17.5,Math.PI,1.1),Yc(-1.3,17.5,0,1.1),f0(-1,-8.3,1),f0(1,8.3,-1),jc(6,-18.4),jc(-6,18.4),ma(-11.5,-7.8,.3),ma(11.2,7.8,2.6),p0(-6.5,-18.2),p0(6.5,18.2);let n=new U(new It(.4,.4,.02,20),M.rust);n.position.set(-6,.012,1.5),C.bake(n);let t=n.clone();t.position.set(18,.012,-1.6),C.bake(t);for(let e of[-18,0,18])for(let i of[-1,1])C.box(M.darkTrim,e,.03,i*3.85,.7,.02,.25,{collide:!1})}function v0(n,t="town"){if(g0(t),pM(),C=new Xc,vn.id==="market")return AM(n);if(vn.id==="station")return CM(n);if(vn.id==="port")return LM(n);qn(42);let e=new Xe(220,220,1,1);e.rotateX(-Math.PI/2),Ji(e,220/4,220/4),C.addGeo(M.grass,e,new Kt),C.box(M.asphalt,0,.005,0,120,.01,8,{collide:!1,uv:6});for(let r=-58;r<58;r+=4)C.box(M.lineY,r,.012,0,2.2,.004,.14,{collide:!1});for(let r of[-1,1])C.box(M.lineW,0,.012,r*3.6,120,.004,.12,{collide:!1});for(let r of[-1,1])C.box(M.concrete,0,.075,r*4.85,120,.15,1.7,{uv:2,surf:"concrete",bullet:!1}),C.box(M.concrete,0,.08,r*4.03,120,.16,.12,{collide:!1,uv:1});C.box(M.concrete,8,.02,-7.5,5.2,.04,4.4,{collide:!1,uv:2}),C.box(M.concrete,-8,.02,7.5,5.2,.04,4.4,{collide:!1,uv:2}),C.box(M.concrete,-1,.02,-7.6,1.6,.04,3.2,{collide:!1,uv:1}),C.box(M.concrete,1,.02,7.6,1.6,.04,3.2,{collide:!1,uv:1}),o0({x0:-6,x1:5.5,z0:-17.5,z1:-9.5,frontNeg:!0,siding:M.sidingY,roof:M.roof,doorX:-1,chimX:-4.5,frontOps:[{c:-1,d:1},{c:-4,w:1.6},{c:2.6,w:1.8}],backOps:[{c:2,d:1},{c:-3.5,w:1.4},{c:-.2}],leftOps:[{c:-11.5,w:1.4},{c:-15.5,d:1}],rightOps:[{c:-12.5,d:1,w:1.4}],partX:.5,partZ0:-17.4,partZ1:-12.8,partDoor:-14.5}),a0({x0:5.5,x1:10.5,z0:-17,z1:-9.8,frontNeg:!0,siding:M.sidingY,roof:M.roof2,outerX:10.5}),t0(-3.5,-12,0,M.fabricG),fa(-3.5,-10.9,1.1,.6,.42),i0(-3.5,-11.6,3.2,2.2,M.carpetR),n0(-3.5,-9.95,Math.PI),nd(-5.6,-14,Math.PI/2),s0(-5.4,-10.2),Ku(-.2,1.7,-17.33,0,M.paint1),e0(1,3.8,-17.5,-1),fa(3,-13.8,1.4,.9,.76),er(2.4,-14.5,0),er(3.6,-13.1,Math.PI),er(2.4,-13.1,Math.PI),Ku(-5.85,1.7,-12,Math.PI/2,M.paint2),r0(-3.2,-15.8,Math.PI/2),o0({x0:-5.5,x1:6,z0:9.5,z1:17.5,frontNeg:!1,siding:M.sidingB,roof:M.roof2,doorX:1,chimX:4.5,frontOps:[{c:1,d:1},{c:4,w:1.6},{c:-2.6,w:1.8}],backOps:[{c:-2,d:1},{c:3.5,w:1.4},{c:.2}],leftOps:[{c:12.5,d:1,w:1.4}],rightOps:[{c:11.5,w:1.4},{c:15.5,d:1}],partX:-.5,partZ0:12.8,partZ1:17.4,partDoor:14.5}),a0({x0:-10.5,x1:-5.5,z0:9.8,z1:17,frontNeg:!1,siding:M.sidingB,roof:M.roof,outerX:-10.5}),t0(3.5,12,Math.PI,M.fabricO),fa(3.5,10.9,1.1,.6,.42),i0(3.5,11.6,3.2,2.2,M.carpetB),n0(3.5,9.95,0),nd(5.6,14,-Math.PI/2),s0(5.4,10.2),Ku(.2,1.7,17.33,Math.PI,M.paint2),e0(-3.8,-1,17.5,1),fa(-3,13.8,1.4,.9,.76),er(-2.4,14.5,Math.PI),er(-3.6,13.1,0),r0(3.2,15.8,-Math.PI/2),_M(1.5,-1.6,0),Yn(-13.5,2,0,M.carRed),Yn(13,1.8,Math.PI,M.carWhite,!0),Yn(8,-7.6,Math.PI/2,M.carBlue),Nn(-26,-1.5,0),Nn(-26,1.5,0),Nn(26,-1.5,0),Nn(26,1.5,0),Nn(-21,0,Math.PI/2+0),xe(20.5,0,-2.2,1.1),xe(20.5,0,-1,1.1),xe(20.5,1.1,-1.6,1.1,.3),nr(-9,-5.4,1),nr(9,5.4,-1),nr(-22,5.4,-1),nr(22,-5.4,1),di(-4.2,-5,2779706),di(-3.4,-5,2771594),di(4.2,5,2779706),di(5,5,5921370),Kc(-11,-4.9),Kc(11,4.9),l0(-2.5,-6.2,0),l0(2.5,6.2,Math.PI),Ki(-9,-12.5,1.1,1),Ki(12.5,-19,1,2),Ki(-12.5,19,1,3),Ki(9,12.5,1.1,4),Ki(-27,-8,1.2,5),Ki(27,8,1.2,6),Ki(-27,12,1,7),Ki(27,-21,1,8),qc(-30,-6.2,-11,-6.2,.9,[[5,6.5]]),qc(11,6.2,30,6.2,.9,[[12,13.5]]),c0(-24.5,-15.5),ju(-17,-16.5,3.2,1.2),ju(-21.5,-9.5,2,1.2),Jr(-15.5,-9.2,0),Jr(-15.5,-10.2,1),xe(-14,0,-13.5,1),xe(-14,0,-14.6,1),xe(-14,1,-14,.9,.4),Ts(n,"A",pn.A),yM(18.5,-18),da(15,-11,0),da(22,-11.5,Math.PI/2),da(15.6,-14.2,Math.PI/2),xe(22.5,0,-14.5,1.1),xe(22.5,1.1,-14.5,.8,.5),Jr(20.5,-9,2),Ts(n,"B",pn.B),h0(4,20),u0(-4.5,20.5),xe(-16,0,13,1.1),xe(-16,0,14.1,1.1),xe(16,0,12.5,1),xe(17.1,0,12.5,1),xe(16.5,1,12.5,.9),da(-20,10,0),da(20,17,Math.PI/2),di(-11.6,17.5,2771594),di(-12.3,17.5,2779706),ju(14.5,20.5,3,1.2),c0(22.5,20.5),h0(-8.5,-22.5),u0(8.5,-21.5),qc(-30,-19.5,30,-19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),qc(-30,19.5,30,19.5,1.15,[[26,28],[36,38],[8,10],[50,52]]),ji(-33,-28,33,-26.6),ji(-33,26.6,33,28),ji(-33,-26.6,-31.6,-5.8),ji(-33,5.8,-31.6,26.6),ji(31.6,-26.6,33,-5.8),ji(31.6,5.8,33,26.6),C.col(-31.6,0,-5.8,-30.5,6,5.8,{bullet:!1}),C.col(30.5,0,-5.8,31.6,6,5.8,{bullet:!1}),ji(-12.5,9.5,-11.8,15.5,1.6),ji(11.8,-15.5,12.5,-9.5,1.6),ji(-30.5,-4,-27.5,-3.5,1.2),SM();let i=new Nt;qn(9);for(let r=0;r<26;r++){let o=r/26*Math.PI*2,a=55+Qt()*15,l=Math.cos(o)*a,c=Math.sin(o)*a,h=new U(pt(8,5,7,2.5),[M.sidingY,M.sidingB,M.sidingG][r%3]);h.position.set(l,2.5,c),h.rotation.y=-o,i.add(h);let u=new U(new jn(6.2,2.5,4),M.roof2);u.position.set(l,6.2,c),u.rotation.y=-o+Math.PI/4,i.add(u)}C.bake(i);for(let r=0;r<30;r++){let o=r/30*Math.PI*2+.1;Ki(Math.cos(o)*(42+Qt()*8),Math.sin(o)*(40+Qt()*8),1.2+Qt()*.5,30+r)}C.colliders=C.colliders.filter(r=>r.min.x>-40&&r.max.x<40&&r.min.z>-36&&r.max.z<36),C.col(-40,0,-40,fe.minX-.6,20,40,{bullet:!1}),C.col(fe.maxX+.6,0,-40,40,20,40,{bullet:!1}),C.col(-40,0,-40,40,20,fe.minZ-.6,{bullet:!1}),C.col(-40,0,fe.maxZ+.6,40,20,40,{bullet:!1});let s=C.finish(n);EM(n,C.colliders);for(let[r,o]of[[-1.5,-13.5],[1,13.5]]){let a=new On(16767136,6,9,1.6);a.position.set(r,2.6,o),n.add(a)}return{colliders:C.colliders,meshes:s}}function b0(n,t,e,i){let s=null,r=-1;for(let o of n)t>=o.min.x&&t<=o.max.x&&i>=o.min.z&&i<=o.max.z&&o.max.y<=e+.05&&o.max.y>r&&(r=o.max.y,s=o);return s?s.surf:vn.ground==="concrete"||Math.abs(i)<4?"concrete":"grass"}var sd={time:{value:0}};function EM(n,t){let e=window.__vwQuality??1,i=e===0?3500:e===1?9e3:16e3,s=[],r=[],o=[];qn(77);for(let b=0;b<7;b++){let P=Qt()*Math.PI,T=.1+Qt()*.16,L=.02,O=(Qt()-.5)*.15,k=(Qt()-.5)*.12,D=(Qt()-.5)*.12,G=Math.cos(P),q=Math.sin(P),z=(rt,Rt)=>[k+G*rt*L+O*Rt*G*0,Rt*T,D+q*rt*L+O*Rt],lt=[z(-1,0),z(1,0),z(0,1)],Z=-q,st=G;for(let rt of lt){s.push(...rt),r.push(Z*.3,.9,st*.3);let Rt=rt[1]/T;o.push(.18+Rt*.32,.34+Rt*.38,.1+Rt*.1)}}let a=new Ye;a.setAttribute("position",new ie(s,3)),a.setAttribute("normal",new ie(r,3)),a.setAttribute("color",new ie(o,3));let l=new se({vertexColors:!0,roughness:.9,side:ln});l.onBeforeCompile=b=>{b.uniforms.time=sd.time,b.vertexShader=`uniform float time;
`+b.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.);
      float sway = sin(time*1.7 + wp.x*0.35 + wp.z*0.27) * 0.06 + sin(time*3.1 + wp.x*1.3) * 0.02;
      transformed.x += sway * position.y * 3.0; transformed.z += sway * position.y * 1.5;`)};let c=new xs(a,l,i),h=new Kt,u=new nn,d=new N,f=new N,p=(b,P)=>{if(Math.abs(P)<5.8)return!0;for(let T of t)if(T.max.y>.12&&b>T.min.x-.1&&b<T.max.x+.1&&P>T.min.z-.1&&P<T.max.z+.1)return!0;return b>5.6&&b<10.6&&P>-9.8&&P<-5.3||b>-10.6&&b<-5.4&&P>5.3&&P<9.8||Math.abs(b+1)<.9&&P>-9.5&&P<-5.8||Math.abs(b-1)<.9&&P<9.5&&P>5.8},x=0,m=0;for(;x<i&&m<i*6;){m++;let b=fe.minX+.3+Qt()*(fe.maxX-fe.minX-.6),P=fe.minZ+.3+Qt()*(fe.maxZ-fe.minZ-.6);if(p(b,P))continue;let T=.7+Qt()*.9;u.setFromAxisAngle(new N(0,1,0),Qt()*6.28),d.set(T,T*(.8+Qt()*.6),T),f.set(b,0,P),h.compose(f,u,d),c.setMatrixAt(x++,h)}c.count=x,c.receiveShadow=!0,c.castShadow=!1,c.frustumCulled=!1,n.add(c);let g=new Wn(.045,0),y=new se({roughness:.6}),S=220,v=new xs(g,y,S),A=new oe,R=[[-5.6,-8.9,4,.5],[.4,-8.9,4.6,.5],[-5,8.9,4.4,.5],[2.4,8.9,3.4,.5]];for(let b=0;b<S;b++){let P=R[b%R.length],T=P[0]+Qt()*P[2],L=P[1]+(Qt()-.5)*P[3];h.compose(new N(T,.22+Qt()*.18,L),u,new N(1,1,1)),v.setMatrixAt(b,h),v.setColorAt(b,A.setHex([15747690,16764992,16777215,10510560,16747050][Math.floor(Qt()*5)]))}n.add(v);let _=new Nt;n.add(_);for(let b of R){let P=new U(new ye(b[2]+.2,.18,b[3]+.2),M.dirt);P.position.set(b[0]+b[2]/2,.09,b[1]),P.receiveShadow=!0,_.add(P);for(let T=0;T<b[2]*6;T++){let L=new U(new Wn(.1,1),M.leaf);L.position.set(b[0]+Qt()*b[2],.22,b[1]+(Qt()-.5)*b[3]),L.scale.y=.7,_.add(L)}}$e(_)}var Ri=(n,t=1.3)=>({c:n,w:t,b:0,t:2.2}),fi=(n,t=1.6,e=1,i=2)=>({c:n,w:t,b:e,t:i,win:1,noCurtain:1});function wM(n,t,e,i,s,r){let o=Pe(r,{roughness:.8,side:ln}),a=t-n,l=i-e,c=Math.max(2,Math.round(a/.5));for(let h=0;h<c;h++){let u=h%2?o:M.white;C.box(u,n+(h+.5)*a/c,s,(e+i)/2,a/c,.04,l,{collide:!1})}}function Zc(n,t,e,i,s){let r=e-t;C.box(M.paintwood,n,.5,(t+e)/2,1.1,1,r,{surf:"wood",uv:1.5});let o=Math.floor(r/.9);for(let a=0;a<o;a++){let l=t+.45+a*(r-.9)/Math.max(1,o-1);C.box(M.wood,n,1.06,l,.95,.12,.8,{collide:!1});let c=Pe(s[a%s.length],{roughness:.45});for(let h=0;h<9;h++){let u=new U(new Me(.11,10,8),c);u.position.set(n-.3+h%3*.3,1.2+(h===4?.08:0),l-.25+Math.floor(h/3)*.25),C.bake(u)}}for(let a of[t+.1,e-.1])C.box(M.steel,n+i*.5,1.3,a,.06,2.6,.06,{collide:!1});wM(n-.7,n+.7,t,e,2.6,s[0]===15231514?14174762:2787914)}function en(n,t,e=1,i=0){C.box(M.wood,n,.07,t,1.2,.14,1,{surf:"wood"});let s=Pe(11569754,{roughness:.9});for(let r=0;r<e;r++)C.box(s,n,.14+.35+r*.7,t,1.1,.7,.92,{surf:"wood"})}function id(n,t,e=0){let i=Math.abs(Math.cos(e))>.5,s=i?1.9:1.2,r=i?1.2:1.9;C.box(M.greenPaint,n,.6,t,s,1.2,r,{surf:"metal"}),C.box(M.black,n,1.23,t,s+.06,.06,r+.06,{collide:!1})}function ga(n,t,e,i){let s=Pe(i,{roughness:.5,map:K.metal.map});C.box(s,n+1.4,1.95,t,5.6,2.5,2.4,{surf:"metal"}),C.box(M.darkTrim,n+1.4,.55,t,5.4,.3,2,{surf:"metal"}),C.box(M.carWhite,n-2.4,1.35,t,2,1.9,2.3,{surf:"metal"}),C.box(M.glass,n-3.38,1.75,t,.06,.7,2,{collide:!1});for(let o of[-1,1])C.box(M.glass,n-2.5,1.75,t+o*1.16,1,.6,.04,{collide:!1});for(let o of[n-2.4,n+.6,n+3.4])for(let a of[-1,1]){let l=new U(new It(.45,.45,.3,16),M.tire);l.rotation.x=Math.PI/2,l.position.set(o,.45,t+a*1.05),C.bake(l)}let r=new U(new Xe(3.2,1.2),new se({map:Ai("\u9752\u679C\u4FBF",{w:512,h:192,size:120,color:"#ffffff",bg:"rgba(0,0,0,0)"}),transparent:!0,roughness:.6}));for(let o of[-1,1]){let a=r.clone();a.position.set(n+1.4,2,t+o*1.215),a.rotation.y=o>0?0:Math.PI,C.bake(a)}}function rd(n,t,e){let i=Pe(15773728,{roughness:.5,map:K.metal.map});C.box(i,n,.75,t,1.2,1.1,1,{surf:"metal"}),C.box(M.black,n+.2,1.6,t,.9,.08,1,{collide:!1});for(let s of[-1,1])C.box(M.darkTrim,n-.35,1.2,t+s*.45,.06,2.2,.06,{collide:!1});for(let s of[-1,1])C.box(M.steel,n-.75,.6,t+s*.3,.06,1.8,.1,{collide:!1});for(let s of[-1,1])C.box(M.steel,n-1.1,.06,t+s*.3,.8,.05,.12,{collide:!1})}function Kr(n,t,e,i){let s=Pe(i,{roughness:.4}),r=Math.abs(Math.cos(e))>.5;C.box(s,n,.9,t,r?1:.8,1.8,r?.8:1,{surf:"metal"});let o=new U(new Xe(.7,1.1),M.lampGlow);o.position.set(n+(r?0:Math.sin(e)*.41),1.1,t+(r?Math.cos(e)*.41:0)),o.rotation.y=e,C.bake(o)}function Un(n,t,e,i,s,r=4,o=1,a="#2a5a3a"){let l=new U(new Xe(r,o),new se({map:Ai(s,{w:512,h:Math.round(512*o/r),size:Math.round(380*o/r),color:"#fff8e0",bg:a}),roughness:.7}));l.position.set(n,t,e),l.rotation.y=i,C.bake(l)}function jr(n,t,e,i,s){let r=Math.hypot(e-n,i-t),o=Math.abs(e-n)>Math.abs(i-t);C.box(M.steel,(n+e)/2,s+1,(t+i)/2,o?r:.06,.06,o?.06:r,{collide:!1}),C.box(M.steel,(n+e)/2,s+.5,(t+i)/2,o?r:.04,.04,o?.04:r,{collide:!1});let a=Math.ceil(r/1.2);for(let l=0;l<=a;l++){let c=l/a;C.box(M.steel,n+(e-n)*c,s+.5,t+(i-t)*c,.05,1,.05,{collide:!1})}C.col(Math.min(n,e)-.04,s,Math.min(t,i)-.04,Math.max(n,e)+.04,s+1.05,Math.max(t,i)+.04,{bullet:!1,surf:"metal"})}function Qr(n,t,e,i){let s=Pe(i,{roughness:.5});for(let r=0;r<e;r++)C.box(s,n,.18+r*.36,t,.62,.34,.44,{surf:"metal",collide:!1}),C.box(M.darkTrim,n,.33+r*.36,t,.64,.03,.46,{collide:!1});C.col(n-.31,0,t-.22,n+.31,e*.36,t+.22,{surf:"metal"})}function $c(n,t,e,i,s,r="#fff6d0"){let o=new U(new Xe(.9,.42),new se({map:Ai(s,{w:256,h:120,size:Math.min(64,Math.floor(230/s.length*1.15)),color:"#2a1a0a",bg:r}),roughness:.8,side:ln}));o.position.set(n,t,e),o.rotation.y=i,C.bake(o)}function pa(n,t,e,i){C.box(M.concrete,n,.35,t,e,.7,i,{surf:"concrete",uv:1}),C.box(M.dirt,n,.69,t,e-.16,.02,i-.16,{collide:!1});for(let s=0;s<Math.round(e*i*3);s++){let r=new U(new Wn(.18+Qt()*.12,1),M.leaf);r.position.set(n-e/2+.2+Qt()*(e-.4),.85+Qt()*.2,t-i/2+.2+Qt()*(i-.4)),C.bake(r)}}function S0(n,t){C.box(M.steel,n-1.4,1.2,t,.08,2.4,.08,{collide:!1}),C.box(M.steel,n+1.4,1.2,t,.08,2.4,.08,{collide:!1}),C.box(M.roof2,n,2.45,t+.3,3.2,.08,1.4,{collide:!1}),C.box(M.glass,n,1.3,t-.35,2.8,1.8,.04,{bullet:!1}),C.box(M.wood,n,.45,t,2.4,.08,.4,{collide:!1}),Un(n,2.15,t-.38,0,"\u5E02\u5834\u524D",1.4,.35,"#2a4a8a")}function Qu(n,t,e,i){let s=new It(.07,.07,Math.abs(e-t),10);s.rotateX(Math.PI/2);let r=new U(s,M.rust);r.position.set(n,i,(t+e)/2),C.bake(r)}function TM(){qn(311),$c(-4.3,2,-3.1,Math.PI/2,"\u306B\u3093\u3058\u3093 98\u5186"),$c(-4.3,2,3.1,Math.PI/2,"\u306A\u3059 3\u672C150\u5186"),$c(4.6,2,-3.1,-Math.PI/2,"\u30D4\u30FC\u30DE\u30F3 5\u500B100\u5186"),$c(4.6,2,3.1,-Math.PI/2,"\u30C8\u30DE\u30C8 1\u7BB1500\u5186","#ffe0d0");for(let[t,e]of[[-4,-3],[4,-3],[-4,3],[4,3],[0,0]])C.box(M.darkTrim,t,3.75,e,.02,.7,.02,{collide:!1});C.box(M.paintwood,-5.6,.5,5.4,1.6,1,.7,{surf:"wood"}),C.box(M.black,-5.9,1.12,5.4,.4,.25,.35,{collide:!1}),Un(-5.6,1.6,5.06,Math.PI,"\u304A\u4F1A\u8A08",.9,.3,"#7a2a1a");for(let[t,e,i]of[[-2.9,-4.6,14174762],[-2.9,4.6,2779856],[3.1,1.6,2793546],[3.1,-1.7,15773728]])Qr(t,e,2,i);Un(-8.86,3.1,.2,Math.PI/2,"\u671D\u3069\u308C\u91CE\u83DC",2.2,.55,"#3a7a2a"),Un(8.86,3.1,0,-Math.PI/2,"\u7523\u5730\u76F4\u9001",2,.55,"#b0402a");let n=Pe(11569754,{roughness:.9});C.box(n,-3.2,td+.4,-6.4,.9,.8,.8,{surf:"wood"}),C.box(n,-5.8,td+.35,-6.5,1.2,.7,.7,{surf:"wood"}),C.box(n,-5.8,td+.95,-6.5,.8,.5,.6,{surf:"wood"}),pa(-12,-19.6,3,1),pa(12.5,-12.6,2.4,1);for(let t of[-20,-4,12])M0(t,-20.6);for(let[t,e]of[[-20,-4],[-4,12]])for(let i of[-.85,0,.85])Jc(t,e,7.93,-20.6+i);ma(3.5,-20.4,.2),ma(4.3,-20.4,.1),Kc(-9.2,-11.9),S0(-12,20.4),pa(10.5,20.6,3,1),pa(-4.5,11.6,2,.9),ma(19.2,12,1.4),Kc(9.6,11.9),Qu(-23.45,-18,18,2.6),Qu(-23.45,-18,18,2.85),Qu(-21.05,-1.6,5.6,3.6),jc(-22.9,1),jc(-22.9,3);for(let[t,e,i,s]of[[22.3,-15,2793546,3],[22.9,-15,14174762,2],[22.6,-6.8,2779856,3],[22.6,3.6,15773728,2]]){let r=Pe(i,{roughness:.5});for(let o=0;o<s;o++)C.box(r,t,1.1+.18+o*.36,e,.62,.34,.44,{surf:"metal"})}Un(23.18,4.4,-11,-Math.PI/2,"\u642C\u5165\u53E3 1",1.8,.5,"#3a3a3a"),Un(23.18,4.4,1,-Math.PI/2,"\u642C\u5165\u53E3 2",1.8,.5,"#3a3a3a");for(let t=0;t<18;t++){let e=-20+Qt()*40,i=-20+Qt()*40;Math.abs(e)<9.5&&Math.abs(i)<7.5||C.box(M.darkTrim,e,.022,i,.6+Qt()*1.4,.002,.4+Qt()*1,{collide:!1,rotY:Qt()*3})}}var td=2.4;function AM(n){qn(77);let t=new Xe(160,160,1,1);t.rotateX(-Math.PI/2),Ji(t,160/5,160/5),C.addGeo(M.asphalt,t,new Kt),C.box(M.concrete,0,.01,0,48,.02,44,{collide:!1,uv:3});for(let d of[-15,15])for(let f=-20;f<=20;f+=3)C.box(M.lineW,f,.025,d,.1,.004,2.6,{collide:!1});for(let d of[-11.5,11.5])C.box(M.lineY,0,.025,d,40,.004,.14,{collide:!1});let e=(d,f,p,x,m=3.2)=>C.box(M.brick,(d+p)/2,m/2,(f+x)/2,Math.abs(p-d),m,Math.abs(x-f),{uv:2.5,surf:"concrete"});e(-24.6,-22.6,24.6,-21.6),e(-24.6,21.6,24.6,22.6),e(-24.6,-21.6,-23.6,21.6),e(23.6,-21.6,24.6,21.6);for(let d of[-22.1,22.1])for(let f=-24;f<=24;f+=2)C.box(M.steel,f,3.8,d,.05,1.2,.05,{collide:!1});let i=4.2;C.box(M.tile,0,.02,0,18,.04,14,{collide:!1,uv:1.2}),Ci(-9,-7,7,0,i,-1,M.brick,M.plaster,[Ri(-4.2,1.4),fi(.2,2.2,1.05,2.1),Ri(4.2,1.4)]),Ci(9,-7,7,0,i,1,M.brick,M.plaster,[fi(-4.2,1.8),Ri(0,1.7),fi(4.2,1.8)]),ei(-7,-9,9,0,i,-1,M.brick,M.plaster,[{c:-6.2,w:1.6,b:2.95,t:3.8,win:1,noCurtain:1},{c:-3.6,w:1.4,b:2.95,t:3.8,win:1,noCurtain:1},{c:2.2,w:4,b:0,t:2.8},fi(6.4,1.6)]),ei(7,-9,9,0,i,1,M.brick,M.plaster,[Ri(-5.6,1.3),{c:.5,w:4,b:0,t:1.3},fi(5.8,1.6)]);for(let d=1.35;d<i-.1;d+=.16)C.box(M.metal,.5,d,7,3.96,.13,.05,{collide:!1});C.box(M.darkTrim,.5,1.33,7,4,.06,.12,{collide:!1}),C.box(M.roof2,0,i+.12,0,18.6,.24,14.6,{uv:3,surf:"metal"});for(let d of[-5,0,5])C.box(M.glass,d,i+.3,0,1.6,.12,12,{collide:!1});Un(2.2,3.4,-7.14,Math.PI,"\u30D9\u30B8\u9752\u679C\u5E02\u5834",4.6,.9,"#2a5a3a"),Un(.5,4.75,7.14,0,"VEGE MARKET",5.2,.8,"#7a2a1a");let s=[15231514,13642266,3840554],r=[3840554,12095584,9058976];Zc(-4.3,-5,-1.2,-1,s),Zc(-4.3,1.2,5,-1,r),Zc(4.6,-5,-1.2,1,r),Zc(4.6,1.2,5,1,s),en(.2,-2.5,1),xe(-.6,0,2.6,.9,.3);let o=2.4;C.box(M.floor,-5.5,o-.08,-6,7,.16,2,{surf:"wood",uv:1.5});for(let d of[-2.1])for(let f of[-5.1])C.box(M.steel,d,(o-.16)/2,f,.14,o-.16,.14,{surf:"metal"});jr(-2.05,-5,-2.05,-7,o),jr(-7.6,-5,-2.05,-5,o);let a=8,l=.72;for(let d=0;d<a;d++){let f=(d+1)*(o/a),p=.9-d*l;C.box(M.concrete,-8.25,f/2,p-l/2,1.3,f,l,{surf:"concrete",uv:1})}C.box(M.concrete,-8.25,o/2,-5.6,1.3,o,1.4,{surf:"concrete"}),jr(-7.55,.9,-7.55,-4.9,0);for(let[d,f]of[[-4,-3],[4,-3],[-4,3],[4,3],[0,0]]){let p=new U(new It(.35,.45,.2,14),M.lampGlow);p.position.set(d,i-.25,f),C.bake(p)}C.box(M.sidingG,-17.75,2.4,2,6.5,4.8,8,{uv:2.5,surf:"concrete"}),C.box(M.roof,-17.75,4.9,2,7,.2,8.5,{collide:!1,uv:2});for(let d=.2;d<3;d+=.16)C.box(M.metal,-14.47,d,2,.05,.13,3.2,{collide:!1});Un(-14.4,3.5,2,Math.PI/2,"\u7B2C2\u5009\u5EAB",2.6,.7,"#3a3a3a"),id(-22.4,9.5,Math.PI/2),en(-22.3,-5.5,2),xe(-22.3,0,13.5,1.1),xe(-22.3,1.1,13.5,.9,.4),ga(-11.2,11.6,0,15261904),en(-11,4.8,2),en(-12.5,-.5,1),xe(-10.4,0,-.4,1),xe(-11.2,0,8.2,1,.2),en(-20,-14,2),en(-18.6,-14,1),en(-14.4,-9.8,2),xe(-19.6,0,-7,1.1),xe(-19.6,0,-5.9,1.1),xe(-19.6,1.1,-6.45,1,.3),xe(-13.6,0,-14.6,1,.2),id(-22.4,-10.5,Math.PI/2),Jr(-16,-16.5,0),Jr(-17.2,-16.5,2),Ts(n,"A",pn.A);let c=1.1;C.box(M.concrete,21.3,c/2,-4.5,4.6,c,25,{surf:"concrete",uv:2}),C.box(M.darkTrim,19.02,c-.05,-4.5,.06,.1,25,{collide:!1});for(let d=0;d<4;d++){let f=(d+1)*c/4;C.box(M.concrete,21.3,f/2,8+(3-d)*.5+.25+0,4.6,f,.5,{surf:"concrete"})}C.box(M.sidingB,23.4,c+2.2,-4.5,.4,4.4,25,{uv:2.5}),C.box(M.roof2,21.8,c+3.6,-4.5,3.6,.15,25,{collide:!1,uv:2});for(let d of[-14,-8,-2,4])for(let f=c+.2;f<c+3;f+=.16)C.box(M.metal,23.17,f,d,.05,.13,3,{collide:!1});ga(14.2,-5.6,0,15921902),ga(14.2,1.8,0,9091146),en(21,-12,2),en(20.4,1,1),en(22.4,5.6,2),rd(13.4,-14,0),en(16.6,-16,2),en(11,-10.6,1),xe(17.4,0,-10.2,1,.3),xe(18.4,0,-10.2,1),Ts(n,"B",pn.B),Yn(-6,-15,Math.PI/2,M.carBlue),Yn(6.5,-16.5,Math.PI/2,M.carRed,!0),Nn(.5,-11,Math.PI/2),Kr(-2.4,-20.8,0,13642282),Kr(-1.3,-20.8,0,2779856),di(9.8,-19.8,2779706),di(10.6,-19.8,2771594),Yn(-2,15,Math.PI/2,M.carWhite),Yn(8.2,13.5,-Math.PI/2,M.carRed),Nn(-7,11,Math.PI/2),Nn(5,10.5,0),Kr(16,20.8,Math.PI,2793546),di(-8,20,2779706),en(14.5,10.8,1),xe(-15.5,0,17,1.1),xe(-14.4,0,17,1.1),xe(-15,1.1,17,1,.3);for(let d of[-18,-6,6,18])nr(d,d<0?-19.5:19.5,d<0?1:-1);TM();let h=new Nt;qn(5);for(let d=0;d<22;d++){let f=d/22*Math.PI*2,p=46+Qt()*10,x=8+Qt()*14,m=new U(pt(9,x,8,3),[M.brick,M.plaster,M.sidingB,M.concrete][d%4]);m.position.set(Math.cos(f)*p,x/2,Math.sin(f)*p),m.rotation.y=-f,h.add(m)}C.bake(h),C.col(-40,0,-40,fe.minX-.6,20,40,{bullet:!1}),C.col(fe.maxX+.6,0,-40,40,20,40,{bullet:!1}),C.col(-40,0,-40,40,20,fe.minZ-.6,{bullet:!1}),C.col(-40,0,fe.maxZ+.6,40,20,40,{bullet:!1});let u=C.finish(n);for(let[d,f]of[[-4,-3],[4,-3],[-4,3],[4,3]]){let p=new On(16773328,9,10,1.6);p.position.set(d,3.6,f),n.add(p)}{let d=new On(16769200,5,8,1.6);d.position.set(-17.75,3.5,-6),n.add(d)}return{colliders:C.colliders,meshes:u}}function ed(n,t,e,i){let s=(n+t)/2,r=t-n,o=Pe(e,{roughness:.6,map:K.metal.map});C.box(o,s,2.17,0,r,2.24,2.8,{surf:"metal",uv:2}),C.box(M.darkTrim,s,1,0,r-.4,.1,2.6,{collide:!1});for(let a of[-1,1])C.box(M.darkTrim,s,.82,a*.9,r-.6,.22,.14,{collide:!1});for(let a=n+.5;a<t-.3;a+=.9)for(let l of[-1,1])C.box(M.darkTrim,a,2.17,l*1.42,.06,2.18,.04,{collide:!1});for(let a of[n+1.4,t-1.4]){C.box(M.black,a,.42,0,2,.24,2.2,{collide:!1});for(let l of[-.6,.6])for(let c of[-1,1]){let h=new U(new It(.36,.36,.14,16),M.steel);h.rotation.x=Math.PI/2,h.position.set(a+l,.36,c*.72),C.bake(h)}}for(let a of[n,t])C.box(M.black,a,.75,0,.5,.2,.3,{collide:!1});if(i)for(let a of[-1,1])Un(s,2.3,a*1.43,a>0?0:Math.PI,i,3.2,.7,"rgba(0,0,0,0)")}function RM(n,t){let e=(n+t)/2,i=t-n,s=Pe(2775706,{roughness:.45,map:K.metal.map});C.box(s,e+.8,1.8,0,i-1.6,2.4,2.7,{surf:"metal"}),C.box(s,n+.8,2.15,0,1.6,3.1,2.8,{surf:"metal"}),C.box(M.glass,n-.02,2.9,0,.04,.8,2.2,{collide:!1}),C.box(M.lineY,n-.03,1.1,0,.04,.3,2.6,{collide:!1});for(let r of[n+1.6,t-1.6])for(let o of[-.7,.7])for(let a of[-1,1]){let l=new U(new It(.42,.42,.14,16),M.steel);l.rotation.x=Math.PI/2,l.position.set(r+o,.42,a*.75),C.bake(l)}}function Hn(n,t,e,i,s){let r=Pe(s,{roughness:.55,map:K.metal.map}),o=i?6:2.44,a=i?2.44:6;C.box(r,n,t+1.3,e,o,2.6,a,{surf:"metal",uv:2});let l=Math.floor((i?o:a)/.4);for(let c=0;c<l;c++){let h=-((i?o:a)/2)+.2+c*.4;for(let u of[-1,1])C.box(M.darkTrim,n+(i?h:u*(o/2+.01)),t+1.3,e+(i?u*(a/2+.01):h),i?.05:.02,2.5,i?.02:.05,{collide:!1})}}function tr(n,t,e){let i=Math.abs(Math.cos(e))>.5;C.box(M.wood,n,.45,t,i?1.8:.45,.06,i?.45:1.8,{surf:"wood"});for(let s of[-.7,.7])C.box(M.steel,n+(i?s:0),.22,t+(i?0:s),.05,.44,.05,{collide:!1})}function CM(n){qn(88);let t=new Xe(160,160,1,1);t.rotateX(-Math.PI/2),Ji(t,160/5,160/5),C.addGeo(M.asphalt,t,new Kt),C.box(M.concrete,0,.01,-11,48,.02,20,{collide:!1,uv:3}),C.box(M.concrete,0,.01,11,48,.02,20,{collide:!1,uv:3}),C.box(Pe(6973022,{roughness:1,map:K.concrete.map}),0,.03,0,48,.06,3.6,{collide:!1,uv:1});for(let l=-23.5;l<=23.5;l+=.7)C.box(M.wood,l,.08,0,.22,.06,2.6,{collide:!1});for(let l of[-1,1])C.box(M.steel,0,.14,l*.72,48,.08,.08,{collide:!1});for(let l of[-1,1])C.box(M.concrete,1,.21,l*3.4,30,.42,3,{surf:"concrete",uv:2}),C.box(M.lineY,1,.425,l*2.12,30,.004,.25,{collide:!1});let e=(l,c,h,u,d=3.2)=>C.box(M.brick,(l+h)/2,d/2,(c+u)/2,Math.abs(h-l),d,Math.abs(u-c),{uv:2.5});e(-24.6,-21.6,24.6,-20.6),e(-24.6,20.6,24.6,21.6),e(-24.6,-20.6,-23.6,20.6),e(23.6,-20.6,24.6,20.6),RM(-19.5,-12),ed(-11.2,-4.2,10107434,"VEGE CARGO"),ed(-2.8,5.4,3828282,"\u91CE\u83DC\u4FBF"),ed(6.8,14,9071162,""),Hn(19,0,0,!0,2779808),C.box(M.concrete,23,.45,0,1.2,.9,1.6,{surf:"concrete"});let i=4,s=16.8;C.box(M.concrete,s,i-.1,0,1.8,.2,13,{surf:"concrete",uv:1.5});for(let l of[-5,5])C.box(M.concrete,s,(i-.2)/2,l,.4,i-.2,.4,{surf:"concrete"});jr(s-.9,-6.5,s-.9,6.5,i),jr(s+.9,-6.5,s+.9,6.5,i);for(let l of[-1,1])for(let c=0;c<10;c++){let h=i-c*.4,u=l*(6.5+c*.6+.3);C.box(M.concrete,s,h/2-0,u,1.8,h,.6,{surf:"concrete"})}Un(s,i+1.3,0,Math.PI/2,"\u8DE8\u7DDA\u6A4B",1.6,.4,"#2a4a8a"),C.box(M.steel,s,i+.9,0,.06,1.4,.06,{collide:!1});let r=3.6;C.box(M.floor,-18.3,.02,-9.7,10.6,.04,8.6,{collide:!1,uv:1.5}),ei(-14,-23.6,-13,0,r,-1,M.sidingY,M.plaster,[fi(-20.5,1.8),Ri(-15.5,1.4)]),ei(-5.4,-23.6,-13,0,r,1,M.sidingY,M.plaster,[Ri(-21,1.6),fi(-18,2),Ri(-14.6,1.4)]),Ci(-13,-14,-5.4,0,r,1,M.sidingY,M.plaster,[fi(-11.8,1.6),Ri(-8.2,1.5)]),C.box(M.roof,-18.3,r+.15,-9.7,11.4,.3,9.4,{uv:2}),Un(-18.3,r-.6,-5.27,0,"\u3079\u3058\u8CA8\u7269\u99C5",3.4,.7,"#3a3a3a"),tr(-20.5,-12.6,0),tr(-17.5,-12.6,0),tr(-21.5,-8.6,Math.PI/2),Kr(-14.2,-12.8,Math.PI/2,2779856),C.box(M.steel,-16.6,.5,-7.2,.3,1,1.6,{surf:"metal"}),C.box(M.steel,-18.6,.5,-7.2,.3,1,1.6,{surf:"metal"}),C.box(M.paintwood,-22.6,.55,-10.5,1.2,1.1,2.4,{surf:"wood"}),Ts(n,"A",pn.A);{let l=new On(16773328,7,10,1.6);l.position.set(-18.3,3.1,-9.7),n.add(l)}Hn(13,0,-16.5,!0,11553322),Hn(13,2.6,-16.5,!0,2783834),Hn(21,0,-11.5,!1,3824282),Hn(9,0,-9,!1,13146666),en(16.5,-8.4,2),en(18.4,-14.5,1),Qr(14.2,-11,3,2793546),rd(17,-12,0),Ts(n,"B",pn.B),Yn(-4,-17.2,Math.PI/2,M.carWhite),Nn(2.8,-11.5,0),Nn(-6.5,-9.5,Math.PI/2),xe(4.2,0,-8,1.1),xe(5.3,0,-8,1.1),xe(4.75,1.1,-8,1,.3),di(-10.5,-19.8,2779706),Kr(.5,-19.9,0,13642282),pa(8,-19.6,3,1),tr(-1,-4,0),tr(8,-4,0),C.box(M.sidingB,-17.5,1.5,15.5,5,3,4,{uv:2}),C.box(M.roof2,-17.5,3.1,15.2,5.6,.2,4.8,{collide:!1}),Un(-17.5,2.4,13.48,Math.PI,"\u58F2\u5E97",1.6,.5,"#7a2a1a"),Yn(-6,14.5,Math.PI/2,M.carRed),Yn(6,15.5,-Math.PI/2,M.carBlue,!0),Yn(13,14,Math.PI/2,M.carWhite),Nn(-1,9,0),Nn(9.5,9.5,Math.PI/2),xe(-10.5,0,8.2,1.1),xe(-10.5,0,9.3,1.1),en(3.5,8.5,2),Qr(-13.2,8.6,3,14174762),tr(-6,4,0),tr(4,4,0),S0(14,19.9);for(let l of[-20,0,20])nr(l,l<=0?19.2:-19.2,l<=0?-1:1);for(let l of[-1,1]){C.box(M.roof2,-2,3.4,l*3.6,18,.12,2.6,{collide:!1});for(let c of[-10,-2,6])C.box(M.steel,c,1.9,l*4.3,.16,3,.16,{surf:"metal"})}let o=new Nt;qn(6);for(let l=0;l<22;l++){let c=l/22*Math.PI*2,h=46+Qt()*10,u=6+Qt()*12,d=new U(pt(9,u,8,3),[M.brick,M.plaster,M.sidingG,M.concrete][l%4]);d.position.set(Math.cos(c)*h,u/2,Math.sin(c)*h),d.rotation.y=-c,o.add(d)}C.bake(o),C.col(-40,0,-40,fe.minX-.6,20,40,{bullet:!1}),C.col(fe.maxX+.6,0,-40,40,20,40,{bullet:!1}),C.col(-40,0,-40,40,20,fe.minZ-.6,{bullet:!1}),C.col(-40,0,fe.maxZ+.6,40,20,40,{bullet:!1});let a=C.finish(n);return{colliders:C.colliders,meshes:a}}function m0(n,t,e,i){let s=Pe(i,{roughness:.55,map:K.metal.map}),r=6,o=2.44,a=2.6,l=.08;if(e){for(let h of[-1,1])C.box(s,n,a/2,t+h*(o/2-l/2),r,a,l,{surf:"metal"});C.box(s,n,a-l/2,t,r,l,o,{surf:"metal"}),C.box(M.wood,n,.03,t,r-.1,.06,o-.2,{collide:!1});for(let h of[-1,1])for(let u of[-1,1])C.box(s,n+h*(r/2+.25),1.3,t+u*(o/2+.25),.06,2.4,.9,{collide:!1,rotY:u*h*.5})}else{for(let h of[-1,1])C.box(s,n+h*(o/2-l/2),a/2,t,l,a,r,{surf:"metal"});C.box(s,n,a-l/2,t,o,l,r,{surf:"metal"}),C.box(M.wood,n,.03,t,o-.2,.06,r-.1,{collide:!1})}let c=new U(new It(.12,.12,.05,10),M.lampGlow);c.position.set(n,a-.12,t),C.bake(c)}function PM(n,t){let e=new U(new It(.22,.28,.6,12),M.black);e.position.set(n,.3,t),C.bake(e),C.col(n-.25,0,t-.25,n+.25,.6,t+.25,{surf:"metal"})}function IM(n,t){let e=Pe(15249440,{roughness:.5,map:K.metal.map});for(let i of[-5.5,5.5])for(let s of[-1.6,1.6])C.box(e,n+i,4.75,t+s,.6,9.5,.6,{surf:"metal"});for(let i of[-5.5,5.5])C.box(e,n+i,9.7,t,.7,.5,3.8,{surf:"metal"});for(let i of[-1.6,1.6])C.box(e,n,9.9,t+i,12,.6,.5,{surf:"metal"});C.box(M.darkTrim,n-2,10.6,t,2.4,1.2,2,{collide:!1});for(let i of[-.6,.6])C.box(M.black,n+1.2,8.5,t+i,.03,2.4,.03,{collide:!1});Hn(n+1.2,4.6,t,!0,2783904)}function LM(n){qn(123);let t=new Xe(160,160,1,1);t.rotateX(-Math.PI/2),Ji(t,160/5,160/5),C.addGeo(M.asphalt,t,new Kt);let e=new U(new Xe(60,160),Pe(2775674,{roughness:.15,metalness:.3}));e.rotation.x=-Math.PI/2,e.position.set(54,-.6,0),C.bake(e),C.box(M.concrete,23.9,-.3,0,.8,.6,46,{collide:!1});for(let c of[-12,12])C.box(M.lineY,0,.02,c,44,.004,.16,{collide:!1});for(let c=-20;c<=20;c+=4)C.box(M.lineW,c,.02,0,.12,.004,3,{collide:!1});let i=(c,h,u,d,f=3)=>C.box(M.concrete,(c+u)/2,f/2,(h+d)/2,Math.abs(u-c),f,Math.abs(d-h),{uv:2.5});i(-24.6,-21.6,23.6,-20.6),i(-24.6,20.6,23.6,21.6),i(-24.6,-20.6,-23.6,20.6),jr(23.4,-20.6,23.4,20.6,0);for(let c of[-17,-9,-1,7,15])PM(22.6,c);let s=3.4;C.box(M.floor,-19.8,.02,-11.5,7.6,.04,9,{collide:!1,uv:1.5}),Ci(-16,-16,-7,0,s,1,M.sidingB,M.plaster,[Ri(-13.5,1.4),fi(-9.6,1.8)]),ei(-7,-23.6,-16,0,s,1,M.sidingB,M.plaster,[fi(-21.5,1.6),Ri(-18,1.4)]),ei(-16,-23.6,-16,0,s,-1,M.sidingB,M.plaster,[fi(-19.8,2)]),C.box(M.roof2,-19.8,s+.15,-11.5,8.2,.3,9.6,{uv:2}),fa(-20.5,-12.5,1.6,.8,.76),er(-20.5,-13.3,0),er(-19.6,-11.7,Math.PI),nd(-23.2,-9.5,Math.PI/2),Un(-16.15,2.7,-11.5,Math.PI/2,"\u6E2F\u6E7E\u4E8B\u52D9\u6240",2.4,.55,"#2a4a7a");{let c=new On(16773328,6,9,1.6);c.position.set(-19.8,3,-11.5),n.add(c)}en(-13,-16.8,2),en(-11.6,-16.8,1),Qr(-9.6,-14.6,3,2779856),xe(-12.6,0,-8.6,1.1),xe(-12.6,1.1,-8.6,.9,.3),id(-21.5,-4.8,0),Ts(n,"A",pn.A),m0(-14.5,-4.6,!0,11553322),Hn(-3,0,-5.2,!0,2783834),Hn(-3,2.6,-5.2,!0,9071162),Hn(8.5,0,-4.8,!0,3824282),Hn(-10,0,5,!0,13146666),m0(1.5,4.6,!0,2779808),Hn(13,0,5.2,!0,10107434),Hn(13,2.6,5.2,!0,2783834),Hn(-19.5,0,6.5,!1,8026746),Hn(19,0,-7,!1,11553322),IM(0,0),xe(-6,0,.6,1.1),xe(-6,0,-.5,1.1),en(4.8,-.8,1),Nn(9,.6,0),rd(-15,.6,0),Qr(17.2,.4,3,15773728),en(14.8,-15.6,2),en(16.2,-15.6,2),xe(19.6,0,-12,1.1),xe(19.6,0,-10.9,1.1),xe(19.6,1.1,-11.45,1,.3),Qr(12,-10.4,2,14174762),Jr(16,-9.4,1),Ts(n,"B",pn.B),ga(-4,-15.8,0,15921902),Yn(9,-17,Math.PI/2,M.carBlue),Kr(-14.2,-20,0,13642282),di(5,-20,2779706),C.box(M.sidingG,-16.5,1.4,16.5,3,2.8,3,{uv:2}),C.box(M.roof2,-16.5,2.95,16.5,3.6,.15,3.6,{collide:!1}),Un(-16.5,2.3,14.97,Math.PI,"\u5B88\u885B\u5BA4",1.4,.4,"#3a3a3a"),ga(6,15.5,0,9091146),Yn(-6.5,14,Math.PI/2,M.carRed),Nn(-1.5,10.5,Math.PI/2),Nn(16,11,0),en(-11.5,10.6,2),xe(18.5,0,16.5,1.1);for(let c of[-20,-2,16])nr(c,c<0?19.6:-19.6,c<0?-1:1);let r=new Nt;qn(7);for(let c=0;c<16;c++){let h=Math.PI*.55+c/16*Math.PI*.9,u=46+Qt()*8,d=7+Qt()*9,f=new U(pt(10,d,9,3),[M.sidingB,M.concrete,M.sidingG,M.brick][c%4]);f.position.set(Math.cos(h)*u,d/2,Math.sin(h)*u),f.rotation.y=-h,r.add(f)}let o=new U(pt(40,6,9,3),Pe(2767450,{roughness:.6}));o.position.set(48,2,-6),r.add(o);let a=new U(pt(8,7,7,3),M.white);a.position.set(62,8.5,-6),r.add(a),C.bake(r),C.col(-40,0,-40,fe.minX-.6,20,40,{bullet:!1}),C.col(fe.maxX+.6,0,-40,40,20,40,{bullet:!1}),C.col(-40,0,-40,40,20,fe.minZ-.6,{bullet:!1}),C.col(-40,0,fe.maxZ+.6,40,20,40,{bullet:!1});let l=C.finish(n);return{colliders:C.colliders,meshes:l}}var xa;function od(){return xa||(xa={stock:new se({map:K.polymer.map,normalMap:K.polymer.normalMap,color:6975560,roughness:.75}),stockDark:new se({map:K.polymer.map,normalMap:K.polymer.normalMap,color:2895398,roughness:.8}),metal:new se({map:K.gunmetal.map,normalMap:K.gunmetal.normalMap,color:3816768,metalness:.85,roughness:.38}),metalDark:new se({map:K.gunmetal.map,color:1842463,metalness:.8,roughness:.45}),bright:new se({color:13159632,metalness:1,roughness:.2}),rubber:new se({color:1315860,roughness:.95}),lens:new Si({color:3170464,metalness:.9,roughness:.02,clearcoat:1,iridescence:1,iridescenceIOR:1.6,emissive:530480}),orange:new se({color:15759898,roughness:.5}),brass:new se({color:14198848,metalness:1,roughness:.25})},xa.decal=new se({map:Ai("VW",{w:128,h:64,size:44,bg:"rgba(0,0,0,0)",color:"#f07a1a",weight:900}),transparent:!0,roughness:.6}),xa)}var Zn=(n,t,e,i,s=16)=>{let r=new It(n,t,e,s);return r.rotateX(Math.PI/2),new U(r,i)},_a=[{id:"olive",name:"\u30AA\u30EA\u30FC\u30D6"},{id:"camoWood",name:"\u30A6\u30C3\u30C9\u30E9\u30F3\u30C9"},{id:"camoDesert",name:"\u30C7\u30B6\u30FC\u30C8"},{id:"camoUrban",name:"\u30A2\u30FC\u30D0\u30F3"},{id:"camoCarrot",name:"\u30AD\u30E3\u30ED\u30C3\u30C8"},{id:"gold",name:"\u30B4\u30FC\u30EB\u30C9"}],th={};function DM(n){return n==="olive"||!n?od().stock:(th[n]||(th[n]=n==="gold"?new se({color:15251520,metalness:1,roughness:.22,map:K.polymer.map,normalMap:K.polymer.normalMap}):new se({map:K[n].map,normalMap:K.polymer.normalMap,roughness:.7})),th[n])}function ya(n=1,t="olive"){let e=od(),i=DM(t),s=new Nt,r=(J,Dt,he,Xt,ue=s)=>(J.position.set(Dt,he,Xt),ue.add(J),J),o=n>0?18:8,a=[[-.36,-.012],[-.1,-.012],[.16,-.012],[.22,-.022],[.3,.006],[.52,.012],[.555,0],[.565,-.13],[.5,-.142],[.3,-.088],[.235,-.082],[.215,-.175],[.165,-.185],[.145,-.07],[-.3,-.062],[-.36,-.046]],l=new bi;l.moveTo(a[0][0],a[0][1]);for(let J=1;J<a.length;J++)l.lineTo(a[J][0],a[J][1]);l.closePath();let c=new Vs;c.absellipse(.2,-.048,.022,.016,0,Math.PI*2,!1,.4),l.holes.push(c);let h=new qi(l,{depth:.046,bevelEnabled:!0,bevelSize:.008,bevelThickness:.009,bevelSegments:n>0?3:1,curveSegments:n>0?10:4});h.translate(0,0,-.023),h.rotateY(-Math.PI/2);let u=h.attributes.uv;for(let J=0;J<u.count;J++)u.setXY(J,u.getX(J)*3,u.getY(J)*3);r(new U(h,i),0,0,0);let d=new U(new ye(.05,.022,.16),e.stockDark);r(d,0,.022,.42);for(let J of[.36,.48])r(Zn(.004,.004,.03,e.metal,6),0,.012,J).rotation.set(0,0,0);r(new U(new ye(.058,.142,.022),e.rubber),0,-.066,.575);for(let J=0;J<6;J++)r(new U(new ye(.06,.004,.03),e.stockDark),0,-.09-J*.015,.19-J*.004);for(let J=0;J<4;J++)for(let Dt of[-1,1])r(new U(new ye(.004,.012,.04),e.stockDark),Dt*.032,-.035,-.28+J*.055);r(Zn(.024,.024,.28,e.metal,o),0,.012,.02),r(new U(new ye(.04,.012,.28),e.metal),0,.034,.02);for(let J=0;J<12;J++)r(new U(new ye(.044,.006,.012),e.metalDark),0,.043,-.1+J*.022);r(new U(new ye(.004,.018,.06),e.metalDark),.024,.016,-.01);let f=Zn(.0105,.014,.66,e.metal,o);if(r(f,0,.012,-.44),n>0)for(let J=0;J<6;J++){let Dt=J/6*Math.PI*2,he=new U(new ye(.003,.003,.36),e.metalDark);he.position.set(Math.cos(Dt)*.0125,.012+Math.sin(Dt)*.0125,-.45),s.add(he)}let p=new Nt;r(p,0,.012,-.8),p.add(Zn(.017,.017,.07,e.metalDark,o));for(let J of[-.018,0,.018])for(let Dt of[-1,1]){let he=new U(new ye(.005,.02,.008),e.rubber);he.position.set(Dt*.016,0,J),p.add(he)}let x=new Ve;x.position.set(0,.012,-.84),s.add(x);let m=new Nt;r(m,0,.086,.03),m.add(Zn(.017,.017,.24,e.metalDark,o));let g=Zn(.03,.019,.07,e.metalDark,o);g.position.z=-.15,m.add(g);let y=Zn(.031,.031,.035,e.metalDark,o);y.position.z=-.2,m.add(y);let S=new U(new vi(.027,o),e.lens);S.position.z=-.218,S.rotation.y=Math.PI,m.add(S);let v=Zn(.019,.024,.06,e.metalDark,o);v.position.z=.14,m.add(v);let A=Zn(.025,.025,.04,e.rubber,o);A.position.z=.185,m.add(A);let R=new U(new vi(.02,o),e.lens);R.position.z=.206,m.add(R);let _=new U(new It(.012,.012,.03,o),e.metal);_.position.set(0,.026,-.01),m.add(_);let b=new U(new It(.012,.012,.03,o),e.metal);b.rotation.z=Math.PI/2,b.position.set(.026,0,-.01),m.add(b);let P=new U(new It(.01,.01,.024,o),e.metal);if(P.rotation.z=Math.PI/2,P.position.set(-.024,0,-.01),m.add(P),n>0)for(let J=0;J<12;J++){let Dt=new U(new ye(.002,.03,.003),e.bright),he=J/12*Math.PI*2;Dt.position.set(Math.cos(he)*.0125,.026,-.01+Math.sin(he)*.0125),m.add(Dt)}let T=Zn(.0175,.0175,.006,e.orange,o);T.position.z=.1,m.add(T);for(let J of[-.07,.08]){let Dt=new U(new Ze(.019,.005,6,o),e.metal);Dt.position.z=J,m.add(Dt);let he=new U(new ye(.03,.03,.018),e.metal);he.position.set(0,-.03,J),m.add(he);let Xt=new U(new It(.004,.004,.036,6),e.bright);Xt.rotation.z=Math.PI/2,Xt.position.set(0,-.034,J),m.add(Xt)}let L=new Nt;r(L,0,.012,.12);let O=Zn(.012,.012,.12,e.bright,10);O.position.z=-.03,L.add(O);let k=new Nt;k.position.z=0,L.add(k);let D=new U(new It(.0045,.0045,.065,8),e.metal);D.rotation.z=Math.PI/2-.35,D.position.set(.032,-.012,0),k.add(D);let G=new U(new Me(.011,12,10),e.metalDark);G.position.set(.063,-.024,0),k.add(G);let q=Zn(.014,.012,.03,e.metal,10);q.position.z=.04,L.add(q);let z=new Ve;z.position.set(.063,-.024,0),k.add(z);let lt=new Nt;r(lt,0,-.04,0);let Z=new U(new ye(.032,.07,.085),e.metalDark);Z.position.y=-.03,Z.rotation.x=-.08,lt.add(Z);let st=new U(new ye(.036,.012,.09),e.stockDark);st.position.y=-.068,lt.add(st);let rt=new U(new Ze(.03,.005,6,16,Math.PI),e.metal);rt.rotation.set(0,Math.PI/2,Math.PI),r(rt,0,-.068,.11);let Rt=new U(new ye(.006,.026,.006),e.bright);Rt.rotation.x=.3,r(Rt,0,-.062,.11);for(let J of[-1,1]){let Dt=Zn(.005,.005,.2,e.metalDark,6);r(Dt,J*.012,-.07,-.2)}if(r(new U(new ye(.04,.015,.03),e.metalDark),0,-.065,-.31),r(new U(new Ze(.008,.002,4,10),e.metal),0,-.14,.48).rotation.y=Math.PI/2,n>0){let J=new U(new Xe(.08,.04),e.decal);J.position.set(.0325,-.04,.38),J.rotation.y=Math.PI/2,s.add(J)}let Yt=new Ve;Yt.position.set(0,-.11,.19),s.add(Yt);let Q=new Ve;Q.position.set(0,-.06,-.2),s.add(Q);let bt=new Ve;bt.position.set(.03,.02,-.01),s.add(bt);let Ft=new Ve;return Ft.position.set(0,.086,.35),s.add(Ft),s.traverse(J=>{J.isMesh&&(J.castShadow=!0,J.receiveShadow=!0)}),$e(k),$e(L,[k]),$e(lt),$e(p),$e(m,[S]),$e(s,[L,lt,m,p]),{root:s,muzzlePt:x,gripPt:Yt,forePt:Q,boltPt:z,ejectPt:bt,eyePt:Ft,lens:S,mag:lt,bolt:L,handle:k,setBolt(J){let Dt=J<.2?J/.2:J<.8?1:1-(J-.8)/.2,he=J<.2?0:J<.5?(J-.2)/.3:J<.8?1-(J-.5)/.3:0;k.rotation.z=Dt*1.4,L.position.z=.12+he*.09}}}var eh;function E0(){let n=od();eh||(eh=new It(.006,.007,.06,8),eh.rotateX(Math.PI/2));let t=new U(eh,n.brass);return t.castShadow=!0,t}var no=[{id:"none",name:"\u306A\u3057"},{id:"helmet",name:"\u30D8\u30EB\u30E1\u30C3\u30C8"},{id:"beret",name:"\u30D9\u30EC\u30FC\u5E3D"},{id:"cap",name:"\u30AD\u30E3\u30C3\u30D7"},{id:"boonie",name:"\u30D6\u30FC\u30CB\u30FC\u30CF\u30C3\u30C8"}];var nh={};function NM(n){if(nh[n])return nh[n];let t=K[n],e={carrot:.6,tomato:.18,potato:.9,pepper:.15}[n],i=new Si({map:t.map,normalMap:t.normalMap,roughness:e,clearcoat:n==="tomato"||n==="pepper"?.8:0,clearcoatRoughness:.2,normalScale:new ct(1,1)}),s=new se({map:K["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4});return nh[n]={skin:i,flesh:s},nh[n]}var cn,to,ld,A0,R0,C0,hd,ih,P0;function I0(){cn||(cn=new Si({map:K.skin.map,normalMap:K.skin.normalMap,roughness:.5,color:15913144,sheen:.4,sheenColor:16751226}),to=new se({map:K.veggreen.map,normalMap:K.veggreen.normalMap,roughness:.6,side:ln}),ld=new Si({color:16777215,roughness:.08,clearcoat:1}),A0=new Si({color:1118481,roughness:.05,clearcoat:1}),R0=new se({color:2759184,roughness:.9}),C0=new se({color:3803656,roughness:.6}),hd=new se({map:K.polymer.map,normalMap:K.polymer.normalMap,color:5922880,roughness:.85}),ih=new se({color:2763298,roughness:.8}),P0=new se({color:15782080,roughness:.3}))}function UM(n){let t=ge(n.length*31+7,4,3),e,i;if(n==="carrot"){let d=[];for(let p=0;p<=40;p++){let x=p/40,m=-.14+x*1.05,g=.03+Math.pow(x,.55)*.2;x>.88&&(g*=Math.sqrt(Math.max(0,1-Math.pow((x-.88)/.12,2)))*.92+.08),x===1&&(g=0),x===0&&(g=0),d.push(new ct(g,m))}e=new Xs(d,40),i=.55}else if(n==="tomato"){e=new Me(.42,48,32);let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),x=d.getY(f),m=d.getZ(f),g=Math.atan2(m,p),y=x/.42,S=1+Math.cos(g*6)*.035*(1-Math.abs(y)),v=x>0?.82:.9,A=x>.3?-.06*Math.pow((x-.3)/.12,2):0;p*=S,m*=S,x=x*v+A,d.setXYZ(f,p,x+.36,m)}i=.42}else if(n==="potato"){e=new Me(.34,48,32);let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),x=d.getY(f),m=d.getZ(f),g=1+(t((Math.atan2(m,p)/Math.PI+1)*.5,(x/.34+1)*.5)-.5)*.32;d.setXYZ(f,p*g*1.05,x*1.38*g+.42,m*g*.92)}i=.6}else{let d=[];for(let p=0;p<=36;p++){let x=p/36,m=-.02+x*.82,g=.06+Math.sin(Math.min(1,x*1.25)*Math.PI*.5)*.3;x>.85&&(g*=Math.sqrt(Math.max(0,1-Math.pow((x-.85)/.15,2)))*.6+.4),x===1&&(g=.12),x===0&&(g=0),d.push(new ct(g,m))}d.push(new ct(0,.76)),e=new Xs(d,48);let f=e.attributes.position;for(let p=0;p<f.count;p++){let x=f.getX(p),m=f.getY(p),g=f.getZ(p),y=Math.atan2(g,x),S=1+Math.cos(y*4)*.09-(m<.1?Math.cos(y*4)*.4*(.1-m):0);f.setXYZ(p,x*S,m,g*S)}i=.52}if(n!=="potato"){let d=e.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),x=d.getY(f),m=d.getZ(f),g=1+(t((Math.atan2(m,p)/Math.PI+1)*.5,x*.8+.2)-.5)*.06;d.setXYZ(f,p*g,x,m*g)}}e.computeVertexNormals();let s=e.toNonIndexed(),r=s.attributes.position,o=s.attributes.normal,a=s.attributes.uv,l={p:[],n:[],u:[]},c={p:[],n:[],u:[]};for(let d=0;d<r.count;d+=3){let p=(r.getY(d)+r.getY(d+1)+r.getY(d+2))/3>i?l:c;for(let x=0;x<3;x++)p.p.push(r.getX(d+x),r.getY(d+x),r.getZ(d+x)),p.n.push(o.getX(d+x),o.getY(d+x),o.getZ(d+x)),p.u.push(a.getX(d+x),a.getY(d+x))}let h=d=>{let f=new Ye;return f.setAttribute("position",new ie(d.p,3)),f.setAttribute("normal",new ie(d.n,3)),f.setAttribute("uv",new ie(d.u,2)),f},u=(d,f)=>{let p=0;for(let x=0;x<r.count;x++)if(Math.abs(r.getY(x)-d)<.04){let m=Math.atan2(r.getZ(x),r.getX(x));Math.abs((m-f+Math.PI*3)%(Math.PI*2)-Math.PI)<.25&&(p=Math.max(p,Math.hypot(r.getX(x),r.getZ(x))))}return p};return e.computeBoundingBox(),{upper:h(l),lower:h(c),split:i,radiusAt:u,top:e.boundingBox.max.y,bottom:e.boundingBox.min.y}}var ad={};function Ma(n,t,e){let i=n+JSON.stringify(t);if(!ad[i]){let r=[];for(let l=0;l<=16;l++){let c=l/16,h=0;for(let u=0;u<t.length-1;u++){let[d,f]=t[u],[p,x]=t[u+1];if(c>=d&&c<=p){let m=(c-d)/(p-d),g=m*m*(3-2*m);h=f+(x-f)*g}}r.push(new ct(h,-c*n))}r.unshift(new ct(1e-4,0)),r.push(new ct(1e-4,-n));let a=new Xs(r,14);a.computeVertexNormals(),ad[i]=a}let s=new U(ad[i],e);return s.castShadow=!0,s}function va(n,t,e,i=10){let s=new U(new Xi(n,t,4,i),e);return s.castShadow=!0,s}function L0(n,t){let e=new Nt,i=new U(new Me(.055,12,10),cn);i.scale.set(1,1.2,.55),i.position.y=-.05,i.castShadow=!0,e.add(i);let s=[];if(t>0){for(let a=0;a<4;a++){let l=new Nt;l.position.set((a-1.5)*.024,-.11,0);let c=va(.011,.035,cn,6);c.position.y=-.02,l.add(c);let h=new Nt;h.position.y=-.045,l.add(h);let u=va(.01,.028,cn,6);u.position.y=-.018,h.add(u),l.rotation.x=1.45,h.rotation.x=1.6,e.add(l),s.push(l)}let r=new Nt;r.position.set(n*.045,-.06,-.01),r.rotation.set(.9,0,n*.5);let o=va(.013,.04,cn,6);o.position.y=-.025,r.add(o),e.add(r)}else{let r=new U(new Me(.05,8,6),cn);r.position.set(0,-.11,.02),r.scale.set(1.1,.8,.9),e.add(r)}return e}function FM(){let n=new Nt,t=new U(new Me(.06,14,10),cn);t.scale.set(.95,.55,2),t.position.set(0,-.03,-.06),t.castShadow=!0,n.add(t);let e=new U(new Me(.05,10,8),cn);e.position.set(0,-.035,.02),n.add(e);for(let i=0;i<5;i++){let s=i===0?.019:.014-i*.0012,r=new U(new Me(s,8,6),cn);r.position.set((i-2)*.021,-.045+(i===0?.004:0),-.17+Math.abs(i-1)*.008),r.scale.set(1,.8,1.3),n.add(r);let o=new U(new Me(s*.6,6,4),P0);o.position.set(r.position.x,r.position.y+s*.45,r.position.z-s*.3),o.scale.set(1,.3,1),n.add(o)}return n}var D0=new N,N0=new N,rw=new nn,U0=new Kt,sh=new N(0,-1,0);function rh(n,t,e){if(n.lost)return;let i=n.sh,s=i.parent;s.updateWorldMatrix(!0,!1);let r=U0.copy(s.matrixWorld).invert(),o=D0.copy(t).applyMatrix4(r).sub(i.position),a=N0.copy(e).applyMatrix4(r).sub(i.position),l=n.upLen,c=n.foLen,h=o.length();h=Math.min(h,l+c-.001),h=Math.max(h,.05);let u=o.clone().normalize(),d=(l*l+h*h-c*c)/(2*l*h),f=Math.acos(Math.max(-1,Math.min(1,d))),p=a.clone().sub(u.clone().multiplyScalar(a.dot(u))).normalize(),x=u.clone().multiplyScalar(Math.cos(f)*l).add(p.multiplyScalar(Math.sin(f)*l));i.quaternion.setFromUnitVectors(sh,x.clone().normalize());let m=o.clone().sub(x).applyQuaternion(i.quaternion.clone().invert());n.el.quaternion.setFromUnitVectors(sh,m.normalize())}var w0=new nn,T0=new nn,ow=new Kt,cd={grip:[new N(0,1,0),new N(0,0,1),new N(1,0,0)],fore:[new N(.7071,0,-.7071),new N(.7071,0,.7071),new N(0,-1,0)]},F0={};for(let n in cd)F0[n]=new nn().setFromRotationMatrix(new Kt().makeBasis(...cd[n]));function ba(n,t,e){n.lost||(n.wr.parent.getWorldQuaternion(w0),T0.copy(t).multiply(F0[e]),n.wr.quaternion.copy(w0.invert().multiply(T0)))}function Sa(n,t,e,i=1){let[,s,r]=cd[e],o=s.clone().multiplyScalar(.065).add(r.clone().multiplyScalar(.03)).multiplyScalar(i);return n.clone().add(o.applyQuaternion(t))}function ud(n,t,e=.29,i=.26){I0();let s=new Nt,r=va(.05,e-.07,cn);r.position.y=-e/2,s.add(r);let o=new Nt;o.position.y=-e,s.add(o);let a=new U(new Me(.048,10,8),cn);o.add(a);let l=Ma(i,[[0,.046],[.2,.056],[.6,.045],[1,.036]],cn);o.add(l);let c=new Nt;c.position.y=-i,o.add(c);let h=L0(n,1);c.add(h);let u=new U(new It(.058,.058,.05,14),new se({color:t,roughness:.7,map:K.carpet.map}));u.position.y=-.16,o.add(u);let d=new U(new Me(.058,12,10),hd);return d.scale.set(1.02,1,.6),d.position.y=-.045,h.add(d),{side:n,sh:s,el:o,wr:c,hand:h,up:r,elb:a,upLen:e,foLen:i,lost:!1}}var eo=class{constructor(t,e,i={}){I0(),this.kind=t,this.team=e;let s=i.lod??1,r=i.camo||"olive",o=i.hat||"none",a=NM(t);this.root=new Nt,this.hips=new Nt,this.hips.position.y=.8,this.root.add(this.hips),this.spine=new Nt,this.hips.add(this.spine);let l=UM(t);this.geo=l,this.upper=new U(l.upper,a.skin),this.lower=new U(l.lower,a.skin);for(let P of[this.upper,this.lower])P.castShadow=!0,P.receiveShadow=!0,this.spine.add(P);this.bodyTop=l.top,this.split=l.split;let c=Math.max(.1,l.radiusAt(l.split,-Math.PI/2),l.radiusAt(l.split,0));this.cap=new U(new vi(c*.98,24),a.flesh),this.cap.rotation.x=-Math.PI/2,this.cap.position.y=l.split,this.cap.visible=!1,this.spine.add(this.cap),this.splitR=c,this.face=new Nt,this.upper.add(this.face);let h={carrot:.68,tomato:.48,potato:.72,pepper:.6}[t],u=l.radiusAt(h,-Math.PI/2)||.25;this.eyes=[];for(let P of[-1,1]){let T=new Nt,L=P*.32;T.position.set(Math.sin(L)*u*.98,h,-Math.cos(L)*u*.98),T.rotation.y=-L;let O=new U(new Me(.055,16,12),ld);O.scale.set(1,1.15,.55),T.add(O);let k=new U(new Me(.03,12,10),A0);k.position.set(P*-.005,-.004,-.024),k.scale.set(1,1.1,.6),T.add(k);let D=new U(new Me(.008,6,4),ld);D.position.set(.01,.012,-.045),T.add(D);let G=new U(new Me(.058,14,8,0,Math.PI*2,0,Math.PI*.42),a.skin);G.rotation.x=-.35,G.scale.set(1,1.15,.62),T.add(G);let q=va(.009,.06,R0,6);q.rotation.z=Math.PI/2+P*.35,q.position.set(0,.075,-.02),T.add(q),this.face.add(T),this.eyes.push({g:T,lid:G})}let d=new U(new Ze(.04,.009,6,16,Math.PI*.8),C0),f=h-.11,p=l.radiusAt(f,-Math.PI/2)||u;if(d.position.set(0,f,-p*.99),d.rotation.set(0,0,Math.PI+Math.PI*.1),this.face.add(d),this.top=new Nt,this.top.position.y=l.top-.02,this.upper.add(this.top),t==="carrot")for(let P=0;P<7;P++){let T=new U(new It(.008,.014,.35,5),to),L=P/7*Math.PI*2;T.position.set(Math.cos(L)*.03,.15,Math.sin(L)*.03),T.rotation.set(Math.sin(L)*.4,0,-Math.cos(L)*.4),this.top.add(T);let O=new U(new Me(.06,8,6),to);O.scale.set(.5,1.4,.15),O.position.set(Math.cos(L)*.1,.33,Math.sin(L)*.1),O.rotation.set(Math.sin(L)*.5,L,-Math.cos(L)*.5),this.top.add(O)}else if(t==="tomato"||t==="pepper"){let P=t==="tomato"?6:5;for(let L=0;L<P;L++){let O=L/P*Math.PI*2,k=new U(new jn(.035,.2,4),to);k.scale.set(1,1,.3),k.position.set(Math.cos(O)*.08,-.01,Math.sin(O)*.08),k.rotation.set(0,-O,Math.PI/2+.25),k.rotateOnAxis(new N(0,0,1),0),this.top.add(k)}let T=new U(new It(.02,.03,t==="pepper"?.14:.08,8),to);T.position.y=.05,T.rotation.z=.25,this.top.add(T)}else for(let P=0;P<2;P++){let T=new U(new jn(.015,.06,5),to);T.position.set(.05-P*.1,0,.02),this.top.add(T)}let x={carrot:.8,tomato:.58,potato:.86,pepper:.7}[t],m=Math.max(l.radiusAt(x,0),l.radiusAt(x,-Math.PI/2))||.2;this.bandMat=new se({color:e===0?2783968:14694954,roughness:.7,map:K.carpet.map});let g=new U(new Ze(m*1.01,.022,8,32),this.bandMat);g.rotation.x=Math.PI/2,g.scale.set(1,1,1.6),g.position.y=x,this.upper.add(g);let y=new U(new Me(.03,8,6),this.bandMat);y.position.set(0,x,m*1.02),this.upper.add(y);for(let P of[-1,1]){let T=new U(new ye(.04,.14,.01),this.bandMat);T.position.set(P*.025,x-.07,m*1.04),T.rotation.z=P*.3,this.upper.add(T)}if(o!=="none"){let P=l.top-(t==="carrot"?.13:t==="potato"?.12:.08),T=Math.max(l.radiusAt(P,0),l.radiusAt(P,Math.PI/2),.12)*1.08,L=new Nt;L.position.y=P,this.upper.add(L);let O=(k,D={})=>new se({color:k,roughness:.75,map:K.polymer.map,normalMap:K.polymer.normalMap,...D});if(o==="helmet"){let k=new U(new Me(T,24,12,0,Math.PI*2,0,Math.PI*.5),O(5922880));k.scale.y=.85,L.add(k);let D=new U(new Ze(T,.02,6,24),O(4870196));D.rotation.x=Math.PI/2,L.add(D);let G=new U(new ye(.08,.05,.04),O(2236962));G.position.set(0,T*.55,-T*.8),L.add(G);for(let q of[-1,1]){let z=new U(new ye(.015,.16,.03),ih);z.position.set(q*T*.95,-.07,0),L.add(z)}}else if(o==="beret"){let k=new U(new Me(T*1.1,20,10),O(e===0?2771594:9052192));k.scale.set(1,.3,1),k.position.set(T*.15,.04,0),k.rotation.z=-.2,L.add(k);let D=new U(new Ze(T*.98,.018,6,24),ih);D.rotation.x=Math.PI/2,L.add(D);let G=new U(new vi(.025,12),new se({color:15253568,metalness:1,roughness:.3}));G.position.set(-T*.45,.03,-T*.88),G.rotation.y=Math.PI+.45,L.add(G)}else if(o==="cap"){let k=new U(new Me(T,20,10,0,Math.PI*2,0,Math.PI*.5),O(2763306));k.scale.y=.7,L.add(k);let D=new U(new It(T*.75,T*.75,.015,20,1,!1,Math.PI*.5,Math.PI),O(2763306));D.position.set(0,0,-T*.55),D.scale.z=1.3,L.add(D);let G=new U(new vi(.03,12),new se({color:15759898}));G.position.set(0,T*.35,-T*.9),G.rotation.x=.4,G.rotation.y=Math.PI,L.add(G)}else if(o==="boonie"){let k=new U(new It(T*.9,T*1.02,.12,20),O(6974020,{map:K.camoWood.map}));k.position.y=.05,L.add(k);let D=new U(new It(T*1.6,T*1.6,.015,24),O(6974020,{map:K.camoWood.map,side:ln}));L.add(D)}L.traverse(k=>{k.isMesh&&(k.castShadow=!0)}),this.hat=L}let S={carrot:.12,tomato:.1,potato:.15,pepper:.12}[t],v=Math.max(l.radiusAt(S,0),l.radiusAt(S,Math.PI/2))||.2,A=new U(new Ze(v*1.02,.025,6,32),ih);A.rotation.x=Math.PI/2,A.scale.set(1,1,1.5),A.position.y=S,this.lower.add(A);for(let P of[-.6,.6,2.4]){let T=new U(new ye(.09,.1,.05),hd);T.position.set(Math.sin(P)*v*1.08,S-.01,-Math.cos(P)*v*1.08),T.rotation.y=-P,this.lower.add(T)}let R={carrot:.4,tomato:.32,potato:.42,pepper:.36}[t],_=Math.max(l.radiusAt(R,0),l.radiusAt(R,Math.PI))||.25;this.arms=[];for(let P of[-1,1]){let T=new Nt;T.position.set(P*(_+.01),R,0),this.spine.add(T);let L=new U(new Me(.05,10,8),cn);T.add(L);let O=Ma(.3,[[0,.048],[.15,.052],[.45,.058],[.8,.044],[1,.04]],cn);T.add(O);let k=new Nt;k.position.y=-.29,T.add(k);let D=Ma(.27,[[0,.04],[.2,.05],[.6,.04],[1,.032]],cn);k.add(D);let G=new U(new Me(.048,8,6),cn);k.add(G);let q=new Nt;q.position.y=-.26,k.add(q);let z=L0(P,s);q.add(z);let lt=new U(new It(.052,.052,.05,12),this.bandMat);lt.position.y=-.08,T.add(lt),this.arms.push({side:P,sh:T,el:k,wr:q,up:O,fo:D,hand:z,ball:L,lost:!1,upLen:.29,foLen:.26})}this.legs=[];let b={carrot:.09,tomato:.14,potato:.12,pepper:.12}[t];for(let P of[-1,1]){let T=new Nt;T.position.set(P*b,.02,0),this.hips.add(T);let L=Ma(.42,[[0,.07],[.12,.088],[.45,.08],[.85,.062],[1,.055]],cn);L.position.y=0,T.add(L);let O=new Nt;O.position.y=-.4,T.add(O);let k=new U(new Me(.05,10,8),cn);k.scale.set(1,1.1,.95),O.add(k);let D=Ma(.38,[[0,.055],[.08,.06],[.3,.07],[.55,.055],[.9,.04],[1,.042]],cn);D.position.y=0,O.add(D);let G=new Nt;G.position.y=-.36,O.add(G);let q=FM();G.add(q),this.legs.push({side:P,hp:T,kn:O,an:G,th:L,sh:D,foot:q,lost:!1})}this.gun=ya(s>0?1:0,r),this.aim=new Nt,this.aim.position.set(.04,R+.02,0),this.spine.add(this.aim),this.gun.root.position.set(.12,-.04,-.15),this.aim.add(this.gun.root),this.gun.root.scale.setScalar(.95),this.root.traverse(P=>{P.isMesh&&(P.castShadow=!0)});for(let P of this.arms)$e(P.hand),$e(P.wr),$e(P.el,[P.wr]),$e(P.sh,[P.el]);for(let P of this.legs)$e(P.foot,[],{shadow:!1}),$e(P.an),$e(P.kn,[P.an]),$e(P.hp,[P.kn]);$e(this.top,[],{shadow:!1});for(let P of this.eyes)$e(P.g,[P.lid],{shadow:!1});$e(this.face,this.eyes.map(P=>P.g),{shadow:!1}),this.hat&&$e(this.hat),$e(this.upper,[this.face,this.top,this.hat]),$e(this.lower,[]),this.phase=0,this.pitch=0,this.state="idle",this.crouch=0,this.prone=0,this.run=0,this.speed=0,this.air=0,this.blink=2,this.dead=!1,this.deadT=0,this.headGone=!1,this.boltT=0,this.ads=0,this.recoil=0,this.hitSpheres=[]}ikArm(t,e,i){rh(t,e,i)}_unused(t,e,i){if(t.lost)return;let s=t.sh,r=s.parent;r.updateWorldMatrix(!0,!1);let o=U0.copy(r.matrixWorld).invert(),a=D0.copy(e).applyMatrix4(o).sub(s.position),l=N0.copy(i).applyMatrix4(o).sub(s.position),c=t.upLen,h=t.foLen,u=a.length();u=Math.min(u,c+h-.001),u=Math.max(u,.05);let d=a.clone().normalize(),f=(c*c+u*u-h*h)/(2*c*u),p=Math.acos(Math.max(-1,Math.min(1,f))),x=l.clone().sub(d.clone().multiplyScalar(l.dot(d))).normalize(),m=d.clone().multiplyScalar(Math.cos(p)*c).add(x.multiplyScalar(Math.sin(p)*c));s.quaternion.setFromUnitVectors(sh,m.clone().normalize());let g=a.clone().sub(m).applyQuaternion(s.quaternion.clone().invert());t.el.quaternion.setFromUnitVectors(sh,g.normalize())}update(t,e){let i=this,s=Math.min(1,i.speed/5.5);i.phase+=t*(i.speed*(i.prone>.5?1.2:2.1));let r=i.phase,l=(.8-i.crouch*.3)*(1-i.prone)+.28*i.prone+Math.abs(Math.sin(r))*.04*s*(1-i.prone);i.hips.position.y=l+(i.air>0?.05:0);let c=-.32*i.run*s-.12*i.crouch;i.hips.rotation.x=-i.prone*Math.PI*.5+0,i.spine.rotation.x=c*(1-i.prone)+i.pitch*.18*(1-i.prone)+i.prone*.3,i.spine.rotation.z=Math.sin(r)*.04*s,i.spine.position.y=0;for(let A of i.legs){if(A.lost)continue;let R=r+(A.side>0?Math.PI:0),_=Math.sin(R)*(.5+.4*i.run)*s,b=Math.max(0,-Math.cos(R))*(.9+.5*i.run)*s+.05;_+=i.crouch*1.1,b+=i.crouch*1.8,i.air>0&&(_=.6*(A.side>0?1:.3),b=1),_=_*(1-i.prone)+Math.sin(R)*.15*s*i.prone,b=b*(1-i.prone)+(.2+Math.max(0,Math.sin(R))*.6*s)*i.prone,A.hp.rotation.x=-_,A.kn.rotation.x=b,A.an.rotation.x=-b*.4+_*.2+i.prone*1.2,A.hp.rotation.z=A.side*.04}let h=i.run*s*(1-i.ads);i.aim.rotation.x=i.pitch+i.prone*Math.PI*.5-i.spine.rotation.x-h*.9-i.boltT*.25,i.aim.rotation.y=h*.9,i.aim.rotation.z=h*.4+i.boltT*.3,i.gun.root.position.z=-.15+i.recoil*.06,i.root.updateMatrixWorld(!0);let u=i.gun,d=i.arms[1],f=i.arms[0],p=u.gripPt.getWorldPosition(new N),x=u.forePt.getWorldPosition(new N),m=u.boltPt.getWorldPosition(new N),g=i.spine.localToWorld(new N(.6,-.6,.3)),y=i.spine.localToWorld(new N(-.6,-.6,.1)),S=u.root.getWorldQuaternion(new nn);i.ikArm(d,Sa(i.boltT>0?p.clone().lerp(m,Math.min(1,i.boltT*1.5)):p,S,"grip"),g),i.ikArm(f,Sa(x,S,"fore"),y),ba(d,S,"grip"),ba(f,S,"fore"),i.blink-=t;let v=i.blink<.12;i.blink<0&&(i.blink=2+Math.random()*3);for(let A=0;A<i.eyes.length;A++){let R=i.eyes[A],_=i.ads>.6&&A===0;R.lid.rotation.x=i.dead||v||_?.5:-.35+(i.ads>.6?.25:0)}if(i.dead){i.deadT+=t;let A=Math.min(1,i.deadT/.7);i.root.rotation.x=-i.fallDir*A*A*1.45,i.root.position.y=i.deadBaseY-0,i.hips.position.y=l*(1-A)+.25*A;for(let R of i.legs)R.kn.rotation.x*=1-A}}computeHitSpheres(){let t=this.hitSpheres;t.length=0;let e=this.spine,i=(r,o,a,l=e)=>{let c=l.localToWorld(o.clone());t.push({part:r,c,r:a})},s=this.geo;this.headGone||i("head",new N(0,(s.split+s.top)/2,0),Math.max(.17,(s.top-s.split)*.55)),i("bodyLow",new N(0,(s.bottom+s.split)*.5+.05,0),Math.max(.2,this.splitR*1.05)),i("bodyUp",new N(0,s.split-.12,0),Math.min(this.splitR,.22));for(let r of this.arms)r.lost||(i(r.side<0?"armL":"armR",new N(0,-.14,0),.07,r.sh),i(r.side<0?"armL":"armR",new N(0,-.13,0),.065,r.el));for(let r of this.legs)r.lost||(i(r.side<0?"legL":"legR",new N(0,-.2,0),.09,r.hp),i(r.side<0?"legL":"legR",new N(0,-.18,0),.075,r.kn));return t}};var OM=["shot","shot_far","bolt1","bolt2","mag","boom","tick","beep","splat1","splat2","crunch","hit","ui","cloth","wind","win","lose","whoosh","bgm","step_concrete-001","step_concrete-002","step_grass-001","step_grass-004","step_wood-000","step_wood-001"],Ht={ctx:null,buf:{},master:null,listener:{x:0,y:0,z:0,yaw:0},bgmNode:null,windNode:null,async init(n="sfx/"){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination),await Promise.all(OM.map(async i=>{try{let r=await(await fetch(n+i+".mp3")).arrayBuffer();this.buf[i]=await this.ctx.decodeAudioData(r)}catch{}}))},resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},play(n,t={}){let e=this.ctx;if(!e||!this.buf[n])return null;let i=e.createBufferSource();i.buffer=this.buf[n],i.playbackRate.value=(t.rate||1)*(t.vary?1+(Math.random()-.5)*t.vary:1);let s=e.createGain(),r=t.vol??1,o=s;if(t.pos){let a=this.listener,l=t.pos.x-a.x,c=t.pos.z-a.z,h=t.pos.y-a.y,u=Math.hypot(l,h,c),d=t.ref||4;if(r*=Math.min(1,d/Math.max(d,u))**(t.roll||1),t.maxDist&&u>t.maxDist)return null;let f=-Math.sin(a.yaw),x=- -Math.cos(a.yaw),m=f,g=u>.1?(l*x+c*m)/u:0;if(e.createStereoPanner){let y=e.createStereoPanner();y.pan.value=Math.max(-1,Math.min(1,-g*.85)),s.connect(y),o=y}if(u>15){let y=e.createBiquadFilter();y.type="lowpass",y.frequency.value=Math.max(900,9e3-u*120),o.connect(y),o=y}}return s.gain.value=r,i.connect(s),o.connect(this.master),i.loop=!!t.loop,i.start(0,t.offset||0),{src:i,g:s}},bgm(n){if(n&&!this.bgmNode&&(this.bgmNode=this.play("bgm",{vol:.32,loop:!0})),!n&&this.bgmNode){try{this.bgmNode.g.gain.setTargetAtTime(0,this.ctx.currentTime,.4);let t=this.bgmNode;setTimeout(()=>t.src.stop(),1500)}catch{}this.bgmNode=null}},wind(n){if(n&&!this.windNode&&(this.windNode=this.play("wind",{vol:.18,loop:!0})),!n&&this.windNode){try{this.windNode.src.stop()}catch{}this.windNode=null}}};var oh=class{constructor(t){this.cs=.5,this.x0=fe.minX,this.z0=fe.minZ,this.w=Math.ceil((fe.maxX-fe.minX)/this.cs),this.h=Math.ceil((fe.maxZ-fe.minZ)/this.cs),this.free=new Uint8Array(this.w*this.h);let e=.42,i=t.filter(s=>s.move&&s.max.y>.42&&s.min.y<1.5);for(let s=0;s<this.h;s++)for(let r=0;r<this.w;r++){let o=this.x0+(r+.5)*this.cs,a=this.z0+(s+.5)*this.cs,l=!0;for(let c of i){let h=Math.max(c.min.x-o,0,o-c.max.x),u=Math.max(c.min.z-a,0,a-c.max.z);if(h*h+u*u<e*e){l=!1;break}}this.free[s*this.w+r]=l?1:0}}cell(t,e){return[Math.floor((t-this.x0)/this.cs),Math.floor((e-this.z0)/this.cs)]}isFree(t,e){return t>=0&&e>=0&&t<this.w&&e<this.h&&this.free[e*this.w+t]===1}center(t,e){return[this.x0+(t+.5)*this.cs,this.z0+(e+.5)*this.cs]}nearestFree(t,e){if(this.isFree(t,e))return[t,e];for(let i=1;i<8;i++)for(let s=-i;s<=i;s++)for(let r=-i;r<=i;r++)if(this.isFree(t+r,e+s))return[t+r,e+s];return[t,e]}path(t,e,i,s){let[r,o]=this.nearestFree(...this.cell(t,e)),[a,l]=this.nearestFree(...this.cell(i,s)),c=this.w,h=c*this.h,u=new Float32Array(h).fill(1e9),d=new Int32Array(h).fill(-1),f=new Uint8Array(h),p=[[0,o*c+r]];u[o*c+r]=0;let x=R=>{let _=R%c,b=R/c|0,P=Math.abs(_-a),T=Math.abs(b-l);return Math.max(P,T)+.41*Math.min(P,T)},m=l*c+a,g=0;for(;p.length&&g++<2e4;){let R=0;for(let T=1;T<p.length;T++)p[T][0]<p[R][0]&&(R=T);let[,_]=p[R];if(p[R]=p[p.length-1],p.pop(),f[_])continue;if(f[_]=1,_===m)break;let b=_%c,P=_/c|0;for(let T=-1;T<=1;T++)for(let L=-1;L<=1;L++){if(!L&&!T)continue;let O=b+L,k=P+T;if(!this.isFree(O,k)||L&&T&&(!this.isFree(b+L,P)||!this.isFree(b,P+T)))continue;let D=k*c+O;if(f[D])continue;let G=u[_]+(L&&T?1.414:1);G<u[D]&&(u[D]=G,d[D]=_,p.push([G+x(D),D]))}}if(d[m]===-1&&m!==o*c+r)return null;let y=[],S=m;for(;S!==-1;)y.push(this.center(S%c,S/c|0)),S=d[S];y.reverse();let v=[y[0]],A=0;for(;A<y.length-1;){let R=y.length-1;for(;R>A+1&&!this.lineFree(y[A],y[R]);)R--;v.push(y[R]),A=R}return v}lineFree(t,e){let i=Math.hypot(e[0]-t[0],e[1]-t[1]),s=Math.ceil(i/(this.cs*.5));for(let r=0;r<=s;r++){let o=r/s,[a,l]=this.cell(t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o);if(!this.isFree(a,l))return!1}return!0}randomFreeNear(t,e,i){for(let s=0;s<40;s++){let r=Math.random()*Math.PI*2,o=Math.random()*i,[a,l]=this.cell(t+Math.cos(r)*o,e+Math.sin(r)*o);if(this.isFree(a,l))return this.center(a,l)}return[t,e]}};var ts={snap:{id:"snap",name:"\u30B9\u30CA\u30C3\u30D7\u30D4\u30FC",tag:"\u901F\u3044\u30DC\u30EB\u30C8\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30D0\u30EA\u30B9\u30BF\u98A8\uFF09",mag:7,extMag:10,reserve:21,extReserve:30,bolt:1.26,ads:.35,reload:3.1,reloadEmpty:3.75,sprintOut:.25,sway:.8,stanceSway:!1,hip:1,adsMove:.44,move:1,dmg:{head:190,bodyUp:143,bodyMid:143,bodyLow:95,arm:143,leg:95},stats:{\u5A01\u529B:3,\u9023\u5C04:4,\u8997\u304D:5,\u5F3E\u6570:4},spec:"\u30B3\u30C3\u30AD\u30F3\u30B01.26\u79D2\u30FB\u8997\u304D0.35\u79D2\u30FB\u30EA\u30ED\u30FC\u30C93.1\u79D2\uFF08\u7A7A3.75\u79D2\uFF09",desc:`\u982D\u301C\u304A\u8179\u306E\u771F\u3093\u4E2D\u3068\u8155\u306A\u3089\u4E00\u6483\u3002
\u8170\u3068\u8DB3\u306F\u4E00\u6483\u306B\u306A\u3089\u306A\u3044\uFF08HP\u304C\u5C11\u3057\u6B8B\u308B\uFF09\u3002
\u8997\u304F\u306E\u3082\u30B3\u30C3\u30AD\u30F3\u30B0\u3082\u901F\u3044\u3002
\u3057\u3083\u304C\u307F\u30FB\u4F0F\u305B\u3067\u3082\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u306F\u6E1B\u3089\u306A\u3044\u3002`},root:{id:"root",name:"\u30EB\u30FC\u30C8\u30D0\u30B9\u30BF\u30FC .50",tag:"\u4E00\u6483\u91CD\u8996\u306E\u30DC\u30EB\u30C8\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08DSR\u98A8\uFF09",mag:5,extMag:7,reserve:25,extReserve:35,bolt:1.5,ads:.4,reload:3.4,reloadEmpty:4.5,sprintOut:.3,sway:1.35,stanceSway:!0,hip:1.35,adsMove:.4,move:.99,dmg:{head:196,bodyUp:147,bodyMid:147,bodyLow:147,arm:147,leg:98},stats:{\u5A01\u529B:5,\u9023\u5C04:2,\u8997\u304D:3,\u5F3E\u6570:2},spec:"\u30B3\u30C3\u30AD\u30F3\u30B01.5\u79D2\u30FB\u8997\u304D0.4\u79D2\u30FB\u30EA\u30ED\u30FC\u30C93.4\u79D2\uFF08\u7A7A4.5\u79D2\uFF09",desc:`\u8DB3\u4EE5\u5916\u306A\u3089\u3069\u3053\u3067\u3082\u4E00\u6483\u3002
\u8DB3\u3060\u306898\u30C0\u30E1\u30FC\u30B8\u3067\u30AE\u30EA\u30AE\u30EA\u6B8B\u308B\u3002
\u8997\u304F\u30FB\u30B3\u30C3\u30AD\u30F3\u30B0\u30FB\u30EA\u30ED\u30FC\u30C9\u304C\u9045\u304F\u3001\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u3068\u8170\u6483\u3061\u306E\u3070\u3089\u3064\u304D\u304C\u5927\u304D\u3044\u3002`}},Ea=[{id:"fmj",name:"\u8CAB\u901A\u5F3E\uFF08FMJ\uFF09",desc:"\u5A01\u529B\u306F\u4E0A\u304C\u3089\u306A\u3044\u3002\u58C1\u3084\u677F\u3092\u6483\u3061\u629C\u3051\u3066\u3001\u58C1\u8D8A\u3057\u3067\u3082\u5A01\u529B\u304C\u307B\u3068\u3093\u3069\u843D\u3061\u306A\u3044"},{id:"stab",name:"\u624B\u30D6\u30EC\u88DC\u6B63\uFF08\u5F3E\u9053CPU\u98A8\uFF09",desc:"\u30B9\u30B3\u30FC\u30D7\u306E\u63FA\u308C\u304C30%\u5C0F\u3055\u304F\u306A\u308B"},{id:"laser",name:"\u30EC\u30FC\u30B6\u30FC\u30B5\u30A4\u30C8",desc:"\u8170\u6483\u3061\u306E\u3070\u3089\u3064\u304D\u304C\u5C0F\u3055\u304F\u306A\u308B\uFF08\u8997\u304D\u306A\u304C\u3089\u3059\u3050\u6483\u3064\u30AF\u30A4\u30C3\u30AF\u30B9\u30B3\u30FC\u30D7\u304C\u5F53\u305F\u308A\u3084\u3059\u3044\uFF09"},{id:"fast",name:"\u30AF\u30A4\u30C3\u30AF\u30DE\u30B0",desc:"\u30EA\u30ED\u30FC\u30C9\u304C\u7D0435%\u901F\u304F\u306A\u308B",ex:"ext"},{id:"ext",name:"\u62E1\u5F35\u30DE\u30AC\u30B8\u30F3",desc:"\u5F3E\u304C\u5897\u3048\u308B\uFF08\u30B9\u30CA\u30C3\u30D7\u30D4\u30FC7\u219210\u767A\u30FB\u30EB\u30FC\u30C8\u30D0\u30B9\u30BF\u30FC5\u21927\u767A\uFF09\u3002\u30EA\u30ED\u30FC\u30C9\u306F10%\u9045\u304F\u306A\u308B",ex:"fast"}],wa=[[{id:"none",name:"\u306A\u3057",desc:""},{id:"light",name:"\u8EAB\u8EFD",desc:"\u79FB\u52D5\u304C7%\u901F\u304F\u306A\u308B"}],[{id:"none",name:"\u306A\u3057",desc:""},{id:"tough",name:"\u6839\u6027",desc:"\u6483\u305F\u308C\u305F\u6642\u306E\u8996\u70B9\u306E\u30D6\u30EC\u304C\u5C0F\u3055\u3044"}],[{id:"none",name:"\u306A\u3057",desc:""},{id:"dex",name:"\u8EAB\u306E\u3053\u306A\u3057",desc:"\u30C0\u30C3\u30B7\u30E5\u306E\u5F8C\u3059\u3050\u8997\u3051\u308B"},{id:"cond",name:"\u6301\u4E45\u529B",desc:"\u30C0\u30C3\u30B7\u30E5\u304C2\u500D\u9577\u304F\u7D9A\u304F"},{id:"quiet",name:"\u5FCD\u3073\u8DB3",desc:"\u8DB3\u97F3\u304C\u304B\u306A\u308A\u5C0F\u3055\u304F\u306A\u308B"}]],dd={rifle:"snap",att:["stab","laser"],perks:["light","tough","dex"]};function O0(n){let t=ts[n.rifle]||ts.snap,e=s=>n.att.includes(s),i=(s,r)=>n.perks[s]===r;return{rifle:t.id,name:t.name,mag:e("ext")?t.extMag:t.mag,reserve:e("ext")?t.extReserve:t.reserve,bolt:t.bolt,ads:t.ads,reload:t.reload*(e("fast")?.65:e("ext")?1.1:1),reloadEmpty:t.reloadEmpty*(e("fast")?.65:e("ext")?1.1:1),sway:t.sway*(e("stab")?.7:1),stanceSway:t.stanceSway,hipSpread:t.hip*(e("laser")?.55:1),fmj:e("fmj"),dmg:t.dmg,adsMove:t.adsMove,move:t.move*(i(0,"light")?1.07:1),flinch:i(1,"tough")?.3:1,sprintOut:t.sprintOut*(i(2,"dex")?.4:1),stamina:i(2,"cond")?8:4,quiet:i(2,"quiet")?.35:1}}function B0(){let n=Math.random()<.55?"snap":"root",t=["fmj","stab","laser",Math.random()<.5?"fast":"ext"];return t.sort(()=>Math.random()-.5),{rifle:n,att:t.slice(0,2),perks:["light","tough",Math.random()<.5?"dex":"cond"]}}var $=n=>document.getElementById(n),dt=N,bn=(n,t,e)=>Math.max(t,Math.min(e,n)),Pa=(n,t,e)=>n+(t-n)*e,Ii=(n,t,e,i)=>Pa(n,t,1-Math.exp(-e*i)),BM=(n,t)=>{let e=t-n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},mi=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;window.__vwQuality=1;var At=Object.assign({sens:1,sensAds:.55,fireMode:"release",quality:1,diff:1,bgm:1,kind:"carrot",tpp:0,hat:"helmet",camo:"olive",leftFire:0,winR:8,swap:4,killcam:1,map:"market",lo:dd},(()=>{try{return JSON.parse(localStorage.getItem("vw_cfg")||"{}")}catch{return{}}})());window.__vwQuality=At.quality;var pi=()=>{try{localStorage.setItem("vw_cfg",JSON.stringify(At))}catch{}},Je=new Bc({antialias:At.quality>0,powerPreference:"high-performance"});Je.outputColorSpace=hn;Je.toneMapping=Qo;Je.toneMappingExposure=1.05;Je.shadowMap.enabled=!0;Je.shadowMap.type=qs;Je.autoClear=!1;$("game").appendChild(Je.domElement);var es=Math.min(devicePixelRatio,At.quality===2?2:At.quality===1?mi?1.5:1.75:1);Je.setPixelRatio(es);Jp(Math.min(8,Je.capabilities.getMaxAnisotropy()));var Ie=new ms,ve=new Mn(72,1,.05,400);ve.rotation.order="YXZ";var os=new ms,Li=new Mn(46,1,.01,10);function fh(){let n=innerWidth,t=innerHeight;Je.setSize(n,t),ve.aspect=Li.aspect=n/t,ve.updateProjectionMatrix(),Li.updateProjectionMatrix()}addEventListener("resize",fh);fh();function HM(){let n=new Me(300,32,16),t=new Qn({side:un,depthWrite:!1,fog:!1,uniforms:{sun:{value:new dt(.4,.55,.35).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform vec3 sun;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
      float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=n(p)*a;p*=2.03;a*=.5;}return s;}
      void main(){ float y=max(vP.y,0.); vec3 top=vec3(.22,.48,.86), hor=vec3(.72,.84,.95), gnd=vec3(.55,.62,.55);
        vec3 c = mix(hor, top, pow(y, .55)); if(vP.y<0.) c = mix(hor, gnd, min(1.,-vP.y*4.));
        float sd = max(dot(vP, sun), 0.); c += vec3(1.,.9,.7)*pow(sd, 300.)*3. + vec3(1.,.85,.6)*pow(sd,8.)*.25;
        if(vP.y>0.02){ vec2 uv = vP.xz/(vP.y+.15)*1.6; float cl = smoothstep(.5,.85, fb(uv*1.2)); c = mix(c, vec3(1.)*(.85+.15*sd), cl*.75*smoothstep(.02,.2,vP.y)); }
        gl_FragColor = vec4(c,1.); }`}),e=new U(n,t);return e.renderOrder=-1,e}Ie.add(HM());Ie.fog=new Io(12112100,60,210);var kM=new Hr(13624575,5925440,.85);Ie.add(kM);var as=new kr(16773336,2.6);as.position.set(30,42,26);Ie.add(as);Ie.add(as.target);as.castShadow=!0;var H0=At.quality===2?4096:At.quality===1?2048:1024;as.shadow.mapSize.set(H0,H0);Object.assign(as.shadow.camera,{left:-44,right:44,top:40,bottom:-40,near:5,far:120});as.shadow.bias=-4e-4;as.shadow.normalBias=.03;as.shadow.camera.layers.enable(1);var is=new On(16760944,0,8,2);Ie.add(is);os.add(new Hr(13624575,5925440,1));var Y0=new kr(16773336,2);Y0.position.set(1,2,1);os.add(Y0);var ph=new On(16760944,0,3,2);ph.position.set(.1,-.05,-.9);os.add(ph);var Ta=(n,t)=>{$("ldBar").style.width=n*100+"%",t&&($("ldTxt").textContent=t)},k0,ro,Z0;async function GM(){Ta(.05,"\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u4F5C\u6210\u4E2D\u2026"),await new Promise(e=>setTimeout(e,30)),Kp(At.quality),Qi[At.map]||(At.map="market"),Ta(.45,`\u30DE\u30C3\u30D7\u300C${Qi[At.map].name}\u300D\u3092\u5EFA\u8A2D\u4E2D\u2026`),await new Promise(e=>setTimeout(e,30));let t=new qr(Je).fromScene(new Gc,.04).texture;Ie.environment=t,Ie.environmentIntensity=.45,os.environment=t,os.environmentIntensity=.6,k0=v0(Ie,At.map),ro=k0.colliders,$0=ro.filter(e=>e.bullet),Ta(.75,"CPU\u306E\u9053\u3092\u8A08\u7B97\u4E2D\u2026"),await new Promise(e=>setTimeout(e,30)),Z0=new oh(ro),Ta(.85,"\u52B9\u679C\u97F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026"),YM(),vv(),Je.compile(Ie,ve),Ta(1,""),$("loading").classList.add("hide"),Pd()}var $0=[],zM=.3;function VM(n){return n.stance==="prone"?.55:n.stance==="crouch"?1.2:1.72}function sr(n,t,e,i=.22){let s=0;for(let r of ro)r.move&&(n+i<r.min.x||n-i>r.max.x||t+i<r.min.z||t-i>r.max.z||r.max.y<=e+.46&&r.max.y>s&&(s=r.max.y));return s}function WM(n,t,e){for(let i=0;i<2;i++)for(let s of ro){if(!s.move||s.max.y<=n.y+.46||s.min.y>=n.y+t)continue;let r=bn(n.x,s.min.x,s.max.x),o=bn(n.z,s.min.z,s.max.z),a=n.x-r,l=n.z-o,c=a*a+l*l;if(!(c>=e*e))if(c>1e-8){let h=Math.sqrt(c);n.x+=a/h*(e-h),n.z+=l/h*(e-h)}else{let h=[n.x-s.min.x,s.max.x-n.x,n.z-s.min.z,s.max.z-n.z],u=h.indexOf(Math.min(...h));u===0?n.x=s.min.x-e:u===1?n.x=s.max.x+e:u===2?n.z=s.min.z-e:n.z=s.max.z+e}}}function oo(n,t,e){let i=null;for(let s of $0){let r=Qp(n,t,s,i?i.t:e);r&&r.t>1e-4&&(!i||r.t<i.t)&&(i={t:r.t,c:s,axis:r.axis,sign:r.sign})}return i}function XM(n,t){let e=new dt().subVectors(t,n),i=e.length();return e.divideScalar(i),!oo(n,e,i)}function J0(n,t,e,i){let s=n.x-e.x,r=n.y-e.y,o=n.z-e.z,a=s*t.x+r*t.y+o*t.z,l=s*s+r*r+o*o-i*i,c=a*a-l;if(c<0)return-1;let h=-a-Math.sqrt(c);return h>0?h:-1}var Sn={parts:[],decals:[],tracers:[],debris:[],glints:[]},La,rr,mh,_d,K0,qM=new Wn(1,0);function Aa(n,t=128,e){let i=document.createElement("canvas");i.width=i.height=t;let s=i.getContext("2d");if(e)e(s,t);else{let o=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);n.forEach(([a,l])=>o.addColorStop(a,l)),s.fillStyle=o,s.fillRect(0,0,t,t)}let r=new Vi(i);return r.colorSpace=hn,r}function YM(){La=Aa(null,128,(n,t)=>{n.translate(t/2,t/2);for(let i=0;i<7;i++){n.rotate(Math.PI*2/7+Math.random()*.2);let s=n.createLinearGradient(0,0,t/2,0);s.addColorStop(0,"rgba(255,250,220,1)"),s.addColorStop(.4,"rgba(255,190,80,.8)"),s.addColorStop(1,"rgba(255,120,20,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(0,-6),n.lineTo(t/2*(.6+Math.random()*.4),0),n.lineTo(0,6),n.fill()}let e=n.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,240,1)"),e.addColorStop(1,"rgba(255,200,100,0)"),n.fillStyle=e,n.fillRect(-30,-30,60,60)}),rr=Aa([[0,"rgba(220,220,220,.55)"],[.5,"rgba(200,200,200,.25)"],[1,"rgba(200,200,200,0)"]]),mh=Aa(null,128,(n,t)=>{n.fillStyle="#fff",n.beginPath(),n.arc(64,64,26,0,7),n.fill();for(let e=0;e<16;e++){let i=Math.random()*7,s=20+Math.random()*38,r=3+Math.random()*9;n.beginPath(),n.arc(64+Math.cos(i)*s,64+Math.sin(i)*s,r,0,7),n.fill(),n.lineWidth=r*.8,n.strokeStyle="#fff",n.beginPath(),n.moveTo(64,64),n.lineTo(64+Math.cos(i)*s,64+Math.sin(i)*s),n.stroke()}}),_d=Aa([[0,"rgba(10,8,6,1)"],[.25,"rgba(20,16,12,.95)"],[.4,"rgba(60,50,40,.5)"],[1,"rgba(60,50,40,0)"]],64),K0=Aa(null,128,(n,t)=>{let e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(200,230,255,.9)"),e.addColorStop(1,"rgba(150,200,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128),n.fillStyle="rgba(255,255,255,.9)",n.fillRect(0,62,128,4),n.fillRect(62,0,4,128)})}function Di(n,t,e,i,s={}){let r=new zs({map:n,transparent:!0,depthWrite:!1,blending:s.add?Zs:Ss,color:s.color||16777215,opacity:s.opacity??1,fog:!0}),o=new Dr(r);return o.position.copy(t),o.scale.setScalar(e),r.rotation=Math.random()*6.28,(s.scene||Ie).add(o),Sn.parts.push({o,life:i,max:i,vel:s.vel||new dt,grow:s.grow||0,sprite:!0,g:s.g||0,scene:s.scene||Ie,fade:!0}),o}var fd={};function ZM(n){return fd[n]||(fd[n]=new se({color:n,roughness:.4})),fd[n]}function Ps(n,t,e,i,s=.03,r=.8,o){for(let a=0;a<e;a++){let l=new U(qM,ZM(t));l.position.copy(n),l.scale.setScalar(s*(.5+Math.random()));let c=new dt(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(i*(.4+Math.random()));o&&c.addScaledVector(o,i*.6),Ie.add(l),Sn.parts.push({o:l,life:r*(.6+Math.random()*.6),max:r,vel:c,g:9.8,spin:new dt(Math.random(),Math.random(),Math.random()).multiplyScalar(10),bounce:!0})}}function Ia(n,t,e,i,s=16777215,r=1){let o=new U(new Xe(i,i),new ai({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,color:s,opacity:r,fog:!0}));if(o.position.copy(t).addScaledVector(e,.01),o.lookAt(t.clone().add(e)),o.rotateZ(Math.random()*6.28),Ie.add(o),Sn.decals.push(o),Sn.decals.length>60){let a=Sn.decals.shift();Ie.remove(a),a.geometry.dispose(),a.material.dispose()}}var Ed=new It(.012,.012,1,6,1,!0);Ed.rotateX(Math.PI/2);Ed.translate(0,0,.5);function $M(n,t){let e=new U(Ed,new ai({color:16769184,transparent:!0,opacity:.8,blending:Zs,depthWrite:!1}));e.position.copy(n),e.lookAt(t),e.scale.set(1,1,n.distanceTo(t)),Ie.add(e),Sn.parts.push({o:e,life:.12,max:.12,vel:new dt,fadeMat:!0})}function JM(n){for(let t=Sn.parts.length-1;t>=0;t--){let e=Sn.parts[t];if(e.life-=n,e.life<=0){(e.scene||Ie).remove(e.o),(e.sprite||e.fadeMat)&&e.o.material.dispose(),Sn.parts.splice(t,1);continue}e.g&&(e.vel.y-=e.g*n),e.o.position.addScaledVector(e.vel,n),e.bounce&&e.o.position.y<sr(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01&&(e.o.position.y=sr(e.o.position.x,e.o.position.z,e.o.position.y+.3,.01)+.01,e.vel.multiplyScalar(.4),e.vel.y=Math.abs(e.vel.y)*.3),e.spin&&(e.o.rotation.x+=e.spin.x*n,e.o.rotation.y+=e.spin.y*n),e.grow&&e.o.scale.multiplyScalar(1+e.grow*n);let i=e.life/e.max;(e.sprite||e.fadeMat)&&(e.o.material.opacity=(e.fade||e.fadeMat?i:1)*(e.o.material.userData.op??1))}for(let t of Sn.debris){if(t.rest)continue;t.vel.y-=9.8*n,t.o.position.addScaledVector(t.vel,n),t.o.rotation.x+=t.av.x*n,t.o.rotation.y+=t.av.y*n,t.o.rotation.z+=t.av.z*n;let e=sr(t.o.position.x,t.o.position.z,t.o.position.y+.2,.02)+(t.r||.03);t.o.position.y<e&&(t.o.position.y=e,Math.abs(t.vel.y)<.8?(t.vel.set(0,0,0),t.av.multiplyScalar(0),t.rest=!0):(t.vel.y=-t.vel.y*.35,t.vel.x*=.6,t.vel.z*=.6,t.av.multiplyScalar(.6),t.splat&&!t.splatted&&(t.splatted=!0,Ia(mh,new dt(t.o.position.x,e-(t.r||.03)+.01,t.o.position.z),new dt(0,1,0),.4+Math.random()*.4,t.splat,.85)),t.snd&&Ht.play(t.snd,{pos:t.o.position,vol:.4,vary:.3,ref:3})))}}function j0(){for(let n of Sn.debris)n.o.parent&&n.o.parent.remove(n.o);Sn.debris.length=0;for(let n of Sn.decals)Ie.remove(n),n.geometry.dispose(),n.material.dispose();Sn.decals.length=0}function ao(n,t,e,i={}){if(Sn.debris.push({o:n,vel:t,av:e,r:i.r,splat:i.splat,snd:i.snd}),Sn.debris.length>160){let s=Sn.debris.shift();s.o.parent&&s.o.parent.remove(s.o)}}var rs={carrot:15759898,tomato:13113358,potato:15259808,pepper:6991930},Fe=[],Ut=null,ns={carrot:"\u306B\u3093\u3058\u3093",tomato:"\u30C8\u30DE\u30C8",potato:"\u3058\u3083\u304C\u3044\u3082",pepper:"\u30D4\u30FC\u30DE\u30F3"},so=class{constructor(t,e,i,s){this.kind=t,this.team=e,this.isPlayer=i,this.name=s,this.pos=new dt,this.vel=new dt,this.yaw=0,this.pitch=0,this.alive=!0,this.hp=100,this.stance="stand",this.sprint=!1,this.ads=0,this.adsWant=!1,this.mag=5,this.reserve=20,this.boltT=0,this.reloadT=0,this.needBolt=!1,this.onGround=!0,this.slideT=0,this.slideDir=new dt,this.moveAmt=0,this.stepAcc=0,this.lastShotT=-9,this.kills=0,this.hs=0,this.shots=0,this.hits=0,this.lostArm=[!1,!1],this.lostLeg=[!1,!1],this.revealT=0,this.spotT=0,this.hat=i?At.hat:no[1+Math.floor(Math.random()*(no.length-1))].id,this.camo=i?At.camo:_a[Math.floor(Math.random()*4)].id,this.deaths=0,this.score=0,this.lo=i?At.lo:B0(),this.st=O0(this.lo),this.mag=this.st.mag,this.reserve=this.st.reserve,this.eyeH=1.58,this.stanceT=0,this.stamina=this.st.stamina,this.sprintOutT=0,this.flinch=0,this.veg=new eo(t,e,{lod:1,hat:this.hat,camo:this.camo}),Ie.add(this.veg.root),i&&this.setFirstPerson(!At.tpp)}setFirstPerson(t){this.veg.root.traverse(e=>{e.layers.set(t?1:0)})}eye(){return new dt(this.pos.x,this.pos.y+this.eyeH,this.pos.z)}targetEye(){return(this.stance==="prone"?.42:this.stance==="crouch"?1.12:1.58)-(this.slideT>0?.45:0)}dir(){return new dt(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}dispose(){Ie.remove(this.veg.root)}};function wd(n){return n.alive&&n.stanceT<=0&&n.boltT<=0&&n.reloadT<=0&&n.mag>0&&!(n.lostArm[0]&&n.lostArm[1])&&tt.phase!=="pre"&&tt.phase!=="post"}function Td(n,t){if(!wd(n)){n.mag<=0&&n.reloadT<=0&&or(n);return}n.mag--,n.shots++,n.lastShotT=tt.time,n.revealT=2.5;let e=n.ads>.95?6e-4:Pa(.09*n.st.hipSpread,.006,Math.pow(n.ads,2));e+=Math.min(1,n.vel.length()/5)*(n.ads>.9?.012:.03)+(n.onGround?0:.05)+(n.lostArm[0]||n.lostArm[1]?.03:0),n.stance==="prone"&&n.ads>.9&&(e*=.5);let i=t.clone();e>0&&(i.x+=(Math.random()-.5)*e*2,i.y+=(Math.random()-.5)*e*2,i.z+=(Math.random()-.5)*e*2,i.normalize());let s=n.eye(),r=jM(s,i,n),o=n.isPlayer&&!At.tpp&&n.ads<.9?kt.gun.muzzlePt.getWorldPosition(new dt):n.veg.gun.muzzlePt.getWorldPosition(new dt),a=o;if(n.isPlayer&&!At.tpp&&(a=s.clone().addScaledVector(i,.9).add(new dt(0,-.12,0))),$M(a,r.point),n.isPlayer&&!At.tpp||(Di(La,o,.7,.06,{add:!0}),is.position.copy(o),is.intensity=30,setTimeout(()=>is.intensity=0,50)),Di(rr,n.isPlayer&&!At.tpp?a:o,.4,1.2,{grow:1.5,vel:new dt(0,.4,0),opacity:.6}),n.isPlayer)Ht.play("shot",{vol:1,vary:.06}),Sv();else{let l=n.pos.distanceTo(Ut.pos);Ht.play(l>25?"shot_far":"shot",{pos:n.eye(),vol:1,ref:6,roll:.8,vary:.05})}for(let l of Fe)!l.isPlayer&&l.alive&&l.team!==n.team&&l.pos.distanceTo(n.pos)<70&&l.ai&&(l.ai.heard={pos:n.pos.clone(),t:4});return n.needBolt=!0,n.boltT=n.st.bolt,n.boltPlayed=0,n.isPlayer&&n.ads>.5&&(n.kickedOut=!0),r}function KM(n){let t=n.max.x-n.min.x,e=n.max.y-n.min.y,i=n.max.z-n.min.z;return Math.min(t,e,i)<=.45}function jM(n,t,e){let i=oo(n,t,200),s=0;if(i&&e&&e.st&&e.st.fmj&&KM(i.c)){let l=new dt;l.setComponent(i.axis,i.sign);let c=n.clone().addScaledVector(t,i.t);Ia(_d,c,l,.09),Ps(c,10132112,5,3,.02,.5,l);let h=oo(n.clone().addScaledVector(t,i.t+.5),t,200),u=h?h.t+.5+i.t:200;s=1,i=h?Object.assign({},h,{t:u}):null}let r=i?i.t:200,o=null;for(let l of Fe){if(l===e||!l.alive&&!l.ragdollHit||!l.alive||l.pos.distanceTo(n)>r+3)continue;let c=null,h=-1;for(let u of l.veg.computeHitSpheres()){let d=J0(n,t,u.c,u.r);if(d>0&&d<r){u.part==="head"&&(h=d);let f=u.part;f==="bodyLow"&&n.y+t.y*d>u.c.y&&(f="bodyMid"),(!c||d<c.t)&&(c={f:l,part:f,t:d})}}c&&(h>0&&h-c.t<.3&&(c={f:l,part:"head",t:h}),r=c.t,o=c)}let a=n.clone().addScaledVector(t,r);if(o)return QM(o.f,o.part,e,t,a,s),{point:a,hit:o};if(i){let l=new dt;l.setComponent(i.axis,i.sign),Ia(_d,a,l,.09);let c={wood:9071178,metal:13158600,concrete:11053216,grass:5929530,carpet:8018522}[i.c.surf]||10132112;Ps(a,c,6,3,.02,.6,l),Di(rr,a,.3,.6,{grow:2,vel:l.clone().multiplyScalar(.5),color:c,opacity:.7}),i.c.surf==="metal"&&Di(La,a,.18,.05,{add:!0}),Ht.play("hit",{pos:a,vol:.25,ref:3,rate:.6})}else if(t.y<0){let l=(0-n.y)/t.y;if(l>0&&l<200){let c=n.clone().addScaledVector(t,l);return Ps(c,5925434,5,2.5,.02,.5,new dt(0,1,0)),Di(rr,c,.4,.7,{grow:2,color:10127978}),{point:c}}}return{point:a}}function QM(n,t,e,i,s,r=0){if(!n.alive)return;let o=rs[n.kind];Ps(s,o,14,4,.03,.9,i.clone().multiplyScalar(.6)),Di(rr,s,.5,.4,{color:o,grow:2.5,opacity:.9}),Ht.play(Math.random()<.5?"splat1":"splat2",{pos:s,vol:.9,ref:5,vary:.2});let a=oo(s,i,4);if(a){let d=new dt;d.setComponent(a.axis,a.sign),Ia(mh,s.clone().addScaledVector(i,a.t),d,.6+Math.random()*.4,o,.9)}else Ia(mh,new dt(s.x+i.x*1.5,sr(s.x,s.z,s.y)+.02,s.z+i.z*1.5),new dt(0,1,0),.9,o,.85);let l=0,c=!1,h=e&&e.st?e.st.dmg:ts.snap.dmg,u=r?e&&e.st&&e.st.fmj?.97:.8:1;if(t==="head"?(l=h.head*u,c=!0):t==="bodyUp"?l=h.bodyUp*u:t==="bodyMid"?l=h.bodyMid*u:t==="bodyLow"||t==="body"?l=h.bodyLow*u:t==="armL"||t==="armR"?(l=h.arm*u,tv(n,t==="armL"?0:1,i)):(l=h.leg*u,ev(n,t==="legL"?0:1,i)),n.hp-=l,n.hurtT=0,e&&(e.hits++,e.isPlayer&&rv(n.hp<=0)),n.isPlayer&&ov(e?e.pos:s),n.ai&&(n.ai.heard={pos:e?e.pos.clone():s.clone(),t:5},n.ai.threat=e),n.hp<=0)Rd(n,e,c,i,t);else if(n.isPlayer){let d=.09*n.st.flinch;n.pitch=bn(n.pitch+d*(.6+Math.random()*.6),-1.35,1.35),n.yaw+=(Math.random()-.5)*d*1.4,Rs=Math.max(Rs,.6*n.st.flinch),$("vign").style.opacity=.9,setTimeout(()=>$("vign").style.opacity=n.hp<50?.5:0,400),iv(rs[n.kind])}}function tv(n,t,e){if(n.lostArm[t])return;n.lostArm[t]=!0;let i=n.veg.arms[t];i.lost=!0;let s=i.sh.getWorldPosition(new dt),r=i.sh.getWorldQuaternion(new nn);Ie.attach(i.sh),ao(i.sh,e.clone().multiplyScalar(3).add(new dt((Math.random()-.5)*2,2.5,(Math.random()-.5)*2)),new dt(Math.random()*8,Math.random()*8,Math.random()*8),{r:.05,splat:rs[n.kind],snd:"splat2"});let o=new U(new Me(.05,10,8),Ad(n.kind));o.position.copy(i.sh.position),n.veg.spine.add(o),o.position.set(i.side*n.veg.splitR,i.sh.position.y,0),o.position.copy(n.veg.spine.worldToLocal(s.clone()));for(let a=0;a<6;a++)setTimeout(()=>n.veg.spine&&Ps(o.getWorldPosition(new dt),rs[n.kind],3,1.5,.02,.6),a*120);n.isPlayer&&Da("","\u8155\u3092\u5931\u3063\u305F\uFF01 \u72D9\u3044\u304C\u30D6\u30EC\u308B")}function ev(n,t,e){if(n.lostLeg[t])return;n.lostLeg[t]=!0;let i=n.veg.legs[t];i.lost=!0,Ie.attach(i.hp),ao(i.hp,e.clone().multiplyScalar(2.5).add(new dt((Math.random()-.5)*2,2.2,(Math.random()-.5)*2)),new dt(Math.random()*7,Math.random()*7,Math.random()*7),{r:.06,splat:rs[n.kind],snd:"splat1"});let s=new U(new Me(.06,10,8),Ad(n.kind));n.veg.hips.add(s),s.position.set(i.side*.1,0,0),n.lostLeg[0]&&n.lostLeg[1]&&(n.stance="prone"),n.isPlayer&&Da("","\u811A\u3092\u5931\u3063\u305F\uFF01 \u52D5\u304D\u304C\u9045\u304F\u306A\u308B")}var pd={};function Ad(n){return pd[n]||(pd[n]=new se({map:K["flesh"+n[0].toUpperCase()+n.slice(1)].map,roughness:.4})),pd[n]}function nv(n,t){let e=n.veg;e.headGone=!0;let i=e.upper.localToWorld(new dt(0,(e.geo.split+e.geo.top)/2,0));e.upper.visible=!1,e.cap.visible=!0;let s=e.upper.material,r=Ad(n.kind);for(let o=0;o<16;o++){let a=new Wn(.05+Math.random()*.08,1),l=a.attributes.position;for(let h=0;h<l.count;h++)l.setXYZ(h,l.getX(h)*(.6+Math.random()*.8),l.getY(h)*(.4+Math.random()*.5),l.getZ(h)*(.6+Math.random()*.8));a.computeVertexNormals();let c=new U(a,[s,r][o%2]);c.castShadow=!0,c.position.copy(i).add(new dt((Math.random()-.5)*.2,(Math.random()-.5)*.2,(Math.random()-.5)*.2)),Ie.add(c),ao(c,t.clone().multiplyScalar(4+Math.random()*4).add(new dt((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)),new dt(Math.random()*15,Math.random()*15,Math.random()*15),{r:.04,splat:Math.random()<.5?rs[n.kind]:0,snd:o<3?"splat1":null})}for(let o of e.eyes){let a=o.g.getWorldPosition(new dt);Ie.attach(o.g),ao(o.g,t.clone().multiplyScalar(3).add(new dt((Math.random()-.5)*3,3+Math.random()*2,(Math.random()-.5)*3)),new dt(Math.random()*10,Math.random()*10,0),{r:.04})}Ps(i,rs[n.kind],40,6,.035,1.2,t),Di(rr,i,1.2,.7,{color:rs[n.kind],grow:2,opacity:.9}),Ht.play("crunch",{pos:i,vol:1,ref:8})}function Rd(n,t,e,i,s){n.alive=!1,n.hp=0,e?nv(n,i):s.startsWith("body")&&Ps(n.eye(),rs[n.kind],24,5,.035,1,i),n.veg.dead=!0,n.veg.deadT=0,n.veg.fallDir=i.x*-Math.sin(n.yaw)+i.z*-Math.cos(n.yaw)>0?-1:1,n.veg.deadBaseY=n.pos.y;let r=n.veg.gun.root;Ie.attach(r),ao(r,new dt((Math.random()-.5)*2,1.5,(Math.random()-.5)*2),new dt(Math.random()*3,Math.random()*3,Math.random()*3),{r:.05}),n.deaths++,t&&(t.kills++,t.score+=e?150:100,e&&t.hs++),sv(t,n,e),t&&t.isPlayer&&(Da(e?"\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u30AD\u30EB",e?"+150":"+100"),Ht.play("hit",{vol:1,rate:.8})),n.isPlayer&&(As={t:2.8,by:t,at:n.eye()},setTimeout(()=>{tt.phase!=="post"&&(Fn=Fe.find(o=>o.team===Ut.team&&o.alive)||t||null)},2800),ar("\u3084\u3089\u308C\u305F",t?`${t.name} \u306B\u5012\u3055\u308C\u305F`:"",2)),tt.bomb.carrier===n&&(tt.bomb.carrier=null,tt.bomb.state="dropped",tt.bomb.pos.set(n.pos.x,sr(n.pos.x,n.pos.z,n.pos.y+.5)+.05,n.pos.z)),hv(t,n)}function or(n){if(!(n.reloadT>0||n.mag>=n.st.mag||n.reserve<=0||!n.alive)&&(n.reloadT=n.reloadMax=n.mag===0?n.st.reloadEmpty:n.st.reload,n.ads=Math.min(n.ads,0),n.adsWant=!1,n.isPlayer)){Ht.play("mag",{vol:.8});let t=n.reloadMax;setTimeout(()=>Ht.play("bolt1",{vol:.7}),t*620),setTimeout(()=>Ht.play("bolt2",{vol:.7}),t*850)}}function iv(n){let t="#"+n.toString(16).padStart(6,"0");for(let e=0;e<5;e++){let i=document.createElement("div"),s=40+Math.random()*120;i.style.cssText=`position:absolute;left:${10+Math.random()*80}%;top:${10+Math.random()*75}%;width:${s}px;height:${s*(.8+Math.random()*.5)}px;border-radius:${40+Math.random()*20}% ${50+Math.random()*20}% ${45+Math.random()*20}% ${55+Math.random()*20}%;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,.35),${t} 30%,${t});opacity:.75;transition:opacity 1.6s,transform 1.6s;pointer-events:none`,$("dmg").appendChild(i),requestAnimationFrame(()=>{i.style.opacity=0,i.style.transform="translateY(30px)"}),setTimeout(()=>i.remove(),1700)}}var hh=0,Ra=0,yd=0;function Da(n,t){$("killnote").innerHTML=(n?`<div class="k">${n}</div>`:"")+`<div class="h">${t}</div>`,hh=1.8}function ar(n,t,e=2.5){$("cmsg").textContent=n,$("csub").textContent=t||"",Ra=e}function sv(n,t,e){let i=r=>r&&r.team===Ut.team?"a":"e",s=document.createElement("div");s.innerHTML=n?`<b class="${i(n)}">${n.name}</b> <span class="hs">${e?"\u25CE \u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8":"\u25B6"}</span> <b class="${i(t)}">${t.name}</b>`:`<b class="${i(t)}">${t.name}</b> \u7206\u767A\u306B\u5DFB\u304D\u8FBC\u307E\u308C\u305F`,$("feed").prepend(s),setTimeout(()=>s.remove(),5e3)}var uh=0;function rv(n){let t=$("hitmark");t.classList.toggle("kill",n),t.style.opacity=1,uh=.25,Ht.play("hit",{vol:.7,rate:n?.8:1.2})}function ov(n){let t=document.createElement("div");t.className="dmga";let i=-(Math.atan2(n.x-Ut.pos.x,n.z-Ut.pos.z)-(Ut.yaw+Math.PI));t.style.transform=`rotate(${i}rad)`,$("dmg").appendChild(t),setTimeout(()=>t.style.opacity=0,600),setTimeout(()=>t.remove(),1600)}var av=90,lv=45,G0=5,z0=7.5,tt={phase:"lobby",time:0,timer:0,round:0,score:[0,0],attack:0,bomb:{state:"carried",carrier:null,pos:new dt,site:null,fuse:0,prog:0,defuser:null},postT:0,slowmo:0},Fn=null,As=null;function Q0(){window.VW_INGAME=!0,tt.round=0,tt.score=[0,0],tt.attack=Math.random()<.5?0:1;for(let s of Fe)s.dispose();Fe=[];let n=["carrot","tomato","potato","pepper"].filter(s=>s!==At.kind);Ut=new so(At.kind,0,!0,"\u3042\u306A\u305F");let t=new so(n[0],0,!1,ns[n[0]]+"(CPU)"),e=new so(n[1],1,!1,ns[n[1]]+"(CPU)"),i=new so(n[2],1,!1,ns[n[2]]+"(CPU)");Fe=[Ut,t,e,i];for(let s of Fe)s.isPlayer||(s.ai={path:null,pi:0,goal:null,repath:0,think:0,target:null,seen:0,heard:null,hold:null,holdT:0,strafe:0,aimErr:new dt,mode:"obj",crouchT:0});$("ia0").textContent=ns[Ut.kind][0],$("ia1").textContent=ns[t.kind][0],$("ie0").textContent=ns[e.kind][0],$("ie1").textContent=ns[i.kind][0],$("hpName").textContent=ns[At.kind],cv={kills:0,hs:0},bv(),Cd()}var cv;function Cd(){tt.round++,j0();for(let a of Fe){let l=a.kind;a.dispose(),a.veg=new eo(l,a.team,{lod:1,hat:a.hat,camo:a.camo}),Ie.add(a.veg.root),a.isPlayer&&a.setFirstPerson(!At.tpp),Object.assign(a,{alive:!0,hp:100,stance:"stand",sprint:!1,ads:0,adsWant:!1,mag:a.st.mag,reserve:a.st.reserve,boltT:0,reloadT:0,needBolt:!1,slideT:0,eyeH:1.58,stanceT:0,stamina:a.st.stamina,sprintOutT:0,lostArm:[!1,!1],lostLeg:[!1,!1],revealT:0,kickedOut:!1}),a.vel.set(0,0,0)}let n=tt.attack,t=Fe.filter(a=>a.team===n),e=Fe.filter(a=>a.team!==n);t.forEach((a,l)=>{a.pos.copy(Qc.south[l]),a.yaw=0,a.pitch=0}),e.forEach((a,l)=>{a.pos.copy(Qc.north[l]),a.yaw=Math.PI,a.pitch=0});let i=t.find(a=>a.isPlayer)||t[0];Object.assign(tt.bomb,{state:"carried",carrier:i,site:null,fuse:0,prog:0,defuser:null});for(let a of Fe)a.ai&&Object.assign(a.ai,{path:null,goal:null,target:null,seen:0,heard:null,hold:null,mode:"obj",think:Math.random()*.3,site:Math.random()<.5?"A":"B",threat:null});let s=e.filter(a=>a.ai);s.forEach((a,l)=>a.ai.site=s.length===2?l===0?"A":"B":Math.random()<.5?"A":"B");let r=t.filter(a=>a.ai),o=Math.random()<.5?"A":"B";if(r.forEach(a=>a.ai.site=o),Fn=null,As=null,$("kcam").classList.add("hide"),tt.phase="pre",tt.timer=4,tt.time=0,$("roundInfo").textContent=`\u30E9\u30A6\u30F3\u30C9 ${tt.round}`,$("side").textContent=Ut.team===n?"\u653B\u6483\u5074\uFF1A\u7206\u5F3E\u3092 A \u304B B \u306B\u8A2D\u7F6E\u305B\u3088":"\u9632\u885B\u5074\uFF1A\u7206\u5F3E\u306E\u8A2D\u7F6E\u3092\u963B\u6B62\u305B\u3088",ar(`\u30E9\u30A6\u30F3\u30C9 ${tt.round}`,Ut.team===n?"\u653B\u6483":"\u9632\u885B",3.5),tt.round<=2){let a=$("tip");a.classList.remove("hide"),a.textContent=(mi?"\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F \u2192 \u96E2\u3059\u3068\u767A\u5C04\u3002":"\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u8997\u304F \u2192 \u5DE6\u30AF\u30EA\u30C3\u30AF\u3067\u767A\u5C04\u3002")+(Ut.st.rifle==="root"?"\u8170\u304B\u3089\u4E0A\u306A\u3089\u4E00\u6483":"\u982D\u301C\u80F8\u306A\u3089\u4E00\u6483"),yd=6}$("vign").style.opacity=0,Ht.play("whoosh",{vol:.6})}function hv(n,t){if(tt.phase!=="live"&&tt.phase!=="planted")return;let e=[0,1].map(r=>Fe.filter(o=>o.team===r&&o.alive).length),i=tt.attack,s=1-i;if(e[i]===0&&tt.phase!=="planted")return lo(s,"\u653B\u6483\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);if(e[s]===0)return lo(i,"\u9632\u885B\u5074\u3092\u5168\u6EC5\u3055\u305B\u305F",n);e[i]===0&&tt.phase}function lo(n,t,e){if(tt.phase==="post")return;tt.phase="post",tt.postT=5,tt.score[n]++,$("scA").textContent=tt.score[0],$("scB").textContent=tt.score[1];let i=n===Ut.team;ar(i?"\u30E9\u30A6\u30F3\u30C9\u52DD\u5229":"\u30E9\u30A6\u30F3\u30C9\u6557\u5317",t,4.5),$("cmsg").style.color=i?"#ffd040":"#ff5a4a",Ht.play(i?"win":"lose",{vol:.8}),e&&(tt.slowmo=1.4,e.isPlayer||(Fn=e,Da("\u30D5\u30A1\u30A4\u30CA\u30EB\u30AD\u30EB",e.name))),ir(null)}function uv(){if($("cmsg").style.color="",tt.score[0]>=At.winR||tt.score[1]>=At.winR)return dv();tt.round%At.swap===0&&(tt.attack=1-tt.attack,ar("\u653B\u5B88\u4EA4\u4EE3","",2)),Cd()}function dv(){tt.phase="end";let n=tt.score[0]>tt.score[1];$("resTitle").textContent=n?"\u52DD\u5229":"\u6557\u5317",$("resTitle").className=n?"win":"lose",$("resScore").innerHTML=`<span class="ally">${tt.score[0]}</span> - <span class="enemy">${tt.score[1]}</span>`;let t=Ut.shots?Math.round(Ut.hits/Ut.shots*100):0;$("resStats").innerHTML=`<div><b>${Ut.kills}</b>\u30AD\u30EB</div><div><b>${Ut.hs}</b>\u30D8\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8</div><div><b>${Ut.hits}/${Ut.shots}</b>\u547D\u4E2D</div>`;let e=[...Fe].sort((i,s)=>s.score-i.score)[0];$("board").innerHTML="<tr><th></th><th>\u540D\u524D</th><th>\u30AD\u30EB</th><th>\u30C7\u30B9</th><th>HS</th><th>\u30B9\u30B3\u30A2</th></tr>"+[0,1].map(i=>Fe.filter(s=>s.team===i).sort((s,r)=>r.score-s.score).map(s=>`<tr class="${i===0?"ally":"enemy"}${s===Ut?" me":""}"><td>${s===e?'<span class="mvp">MVP</span>':""}</td><td>${s.name}</td><td>${s.kills}</td><td>${s.deaths}</td><td>${s.hs}</td><td>${s.score}</td></tr>`).join("")).join(""),$("result").classList.remove("hide"),$("ctl").classList.add("hide"),document.pointerLockElement&&document.exitPointerLock(),Ht.bgm(!1),Ht.play(n?"win":"lose")}function fv(n){if(tt.time+=n,tt.phase==="pre")tt.timer-=n,tt.timer<=0?(tt.phase="live",tt.timer=av,ar("\u958B\u59CB","",1),Ht.play("beep",{vol:.8})):Math.ceil(tt.timer)!==Math.ceil(tt.timer+n)&&Ht.play("tick",{vol:.6});else if(tt.phase==="live")tt.timer-=n,tt.timer<=0&&(tt.timer=0,lo(1-tt.attack,"\u6642\u9593\u5207\u308C \u2014 \u9632\u885B\u6210\u529F"));else if(tt.phase==="planted"){let e=tt.bomb;e.fuse-=n,tt.timer=e.fuse,e.beepT=(e.beepT||0)-n,e.beepT<=0&&(Ht.play("beep",{pos:e.pos,vol:.9,ref:6}),e.beepT=e.fuse>15?1:e.fuse>6?.5:e.fuse>2?.25:.12),e.fuse<=0&&gv()}else tt.phase==="post"&&(tt.postT-=n,tt.postT<=0&&uv());let t=tt.bomb;if(t.state==="dropped"){for(let e of Fe)if(e.alive&&e.team===tt.attack&&e.pos.distanceTo(t.pos)<1.3){t.state="carried",t.carrier=e,e.isPlayer&&Da("","\u7206\u5F3E\u3092\u62FE\u3063\u305F");break}}if(t.state==="carried"&&t.carrier&&t.pos.copy(t.carrier.pos),t.planting){let e=t.planting;!e.alive||!e.wantAct||e.pos.distanceTo(pn[t.plantSite])>2.4||tt.phase!=="live"?(t.planting=null,t.prog=0,e.isPlayer&&ir(null)):(t.prog+=n,e.isPlayer&&ir("\u7206\u5F3E\u3092\u8A2D\u7F6E\u4E2D",t.prog/G0),t.prog>=G0&&mv(e,t.plantSite))}if(t.defusing){let e=t.defusing;!e.alive||!e.wantAct||e.pos.distanceTo(t.pos)>2||tt.phase!=="planted"?(t.defusing=null,t.prog=0,e.isPlayer&&ir(null)):(t.prog+=n,e.isPlayer&&ir("\u7206\u5F3E\u3092\u89E3\u9664\u4E2D",t.prog/z0),t.prog>=z0&&(t.defusing=null,ir(null),t.state="defused",Ht.play("ui",{vol:1}),e.score+=100,tm(`${e.name} \u304C\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F`),lo(1-tt.attack,"\u7206\u5F3E\u3092\u89E3\u9664\u3057\u305F")))}}function tm(n){let t=document.createElement("div");t.textContent=n,$("feed").prepend(t),setTimeout(()=>t.remove(),5e3)}function co(n){let t=tt.bomb;if(n.alive){if(tt.phase==="live"&&t.carrier===n){for(let e of["A","B"])if(n.pos.distanceTo(pn[e])<2.4&&!t.planting)return t.planting=n,t.plantSite=e,t.prog=0,Ht.play("cloth",{pos:n.pos,vol:.7}),!0}return tt.phase==="planted"&&n.team!==tt.attack&&n.pos.distanceTo(t.pos)<2&&!t.defusing?(t.defusing=n,t.prog=0,Ht.play("cloth",{pos:n.pos,vol:.7}),!0):!1}}var Pi;function pv(){let n=new Nt,t=new U(new ye(.4,.18,.28),new se({color:3815984,roughness:.7,map:K.polymer.map}));t.position.y=.09,n.add(t);for(let s=0;s<3;s++){let r=new U(new It(.045,.045,.34,12),new se({color:13138474,roughness:.5}));r.rotation.z=Math.PI/2,r.position.set(0,.22,-.08+s*.08),n.add(r)}let e=new U(new Xe(.16,.08),new ai({color:16724e3}));e.rotation.x=-Math.PI/2,e.position.set(.08,.181,0),n.add(e),n.userData.scr=e;let i=new U(new Ze(.08,.008,6,16,Math.PI),new se({color:13639712}));return i.position.set(-.12,.2,0),n.add(i),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),n}function mv(n,t){let e=tt.bomb;e.planting=null,e.prog=0,ir(null),e.state="planted",e.carrier=null,e.site=t,e.fuse=lv,e.beepT=0,tt.phase="planted",n.score+=100,tm(`${n.name} \u304C ${t} \u306B\u7206\u5F3E\u3092\u8A2D\u7F6E`),ar("\u7206\u5F3E\u304C\u8A2D\u7F6E\u3055\u308C\u305F",`\u30B5\u30A4\u30C8 ${t}`,2.5),Ht.play("beep",{vol:1})}function gv(){let n=tt.bomb;n.state="exploded",Ht.play("boom",{vol:1});for(let t=0;t<6;t++)Di(rr,n.pos.clone().add(new dt((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3)),3+Math.random()*3,2.5,{grow:.8,color:4866104,opacity:.9});for(let t=0;t<4;t++)Di(La,n.pos.clone().add(new dt(0,1,0)),6+t*2,.35,{add:!0});Ps(n.pos.clone().add(new dt(0,.5,0)),3813408,40,12,.06,2),is.position.copy(n.pos).add(new dt(0,2,0)),is.intensity=400,is.distance=40,setTimeout(()=>{is.intensity=0,is.distance=8},300),Rs=1.2;for(let t of Fe)t.alive&&t.pos.distanceTo(n.pos)<9&&(t.hp=0,Rd(t,null,!1,new dt().subVectors(t.pos,n.pos).normalize(),"body"));lo(tt.attack,"\u7206\u5F3E\u304C\u7206\u767A\u3057\u305F")}function ir(n,t){if(!n){$("prog").classList.add("hide");return}$("prog").classList.remove("hide"),$("progT").textContent=n,$("progF").style.width=bn(t,0,1)*100+"%"}var Rs=0;function em(n,t,e){let i=(n.lostLeg[0]?1:0)+(n.lostLeg[1]?1:0),s=(n.stance==="prone"?.85:n.stance==="crouch"?2.1:t.sprint?6.1:4.4)*(n.st?n.st.move:1);n.stanceT>0&&(s*=n.stance==="prone"?.15:.6),t.mag<.45&&n.stance==="stand"&&!t.sprint&&(s=2),s*=Pa(1,n.st?n.st.adsMove:.45,n.ads),i===1&&(s*=.45),i===2&&(s=Math.min(s,.6)),(tt.phase==="pre"||tt.bomb.planting===n||tt.bomb.defusing===n)&&(s=0);let o=t.x*s*Math.min(1,t.mag*1.4),a=t.z*s*Math.min(1,t.mag*1.4);if(n.slideT>0){n.slideT-=e;let u=n.slideT/.7;o=n.slideDir.x*8*u+o*.2,a=n.slideDir.z*8*u+a*.2,n.slideT<=0&&(n.stance="crouch")}let l=n.onGround?14:3;n.vel.x=Ii(n.vel.x,o,l,e),n.vel.z=Ii(n.vel.z,a,l,e),n.vel.y-=16*e,n.pos.x+=n.vel.x*e,n.pos.z+=n.vel.z*e,WM(n.pos,VM(n),n.stance==="prone"?.36:zM),n.pos.x=bn(n.pos.x,fe.minX+.5,fe.maxX-.5),n.pos.z=bn(n.pos.z,fe.minZ+.5,fe.maxZ-.5);let c=sr(n.pos.x,n.pos.z,n.pos.y);n.pos.y+=n.vel.y*e,n.pos.y<=c?(!n.onGround&&n.vel.y<-4&&V0(n,1.3),n.pos.y=c,n.vel.y=0,n.onGround=!0):n.pos.y-c>.08?n.onGround=!1:n.onGround&&(n.pos.y=c,n.vel.y=0);let h=Math.hypot(n.vel.x,n.vel.z);if(n.moveAmt=h,n.onGround&&h>.5){n.stepAcc+=h*e;let u=n.sprint?1.6:1.2;if(n.stepAcc>u){n.stepAcc=0;let d=(n.stance==="prone"||n.stance==="crouch"||h<2.3?0:n.sprint?1:.6)*(n.st?n.st.quiet:1);d>.05&&V0(n,d)}}}function V0(n,t){let e=b0(ro,n.pos.x,n.pos.y+.05,n.pos.z),s=(e==="wood"||e==="carpet"?["step_wood-000","step_wood-001"]:e==="grass"?["step_grass-001","step_grass-004"]:["step_concrete-001","step_concrete-002"])[Math.random()<.5?0:1];if(n.isPlayer?Ht.play(s,{vol:.25*t,vary:.15}):Ht.play(s,{pos:n.pos,vol:.9*t,ref:3,roll:1.1,vary:.15,maxDist:30}),t>.5)for(let r of Fe)r.ai&&r.alive&&r.team!==n.team&&r.pos.distanceTo(n.pos)<14*t&&(r.ai.heard={pos:n.pos.clone(),t:2.5});t>.5&&(n.revealT=Math.max(n.revealT,.6))}var W0=new Proxy({},{get:(n,t)=>vn.holds[t]});function xv(n){return Fe.filter(t=>t.team!==n.team&&t.alive)}function _v(n,t){let e=n.eye(),i=new dt().subVectors(t.eye(),e),s=i.length();if(s>90)return!1;i.normalize();let r=new dt(-Math.sin(n.yaw),0,-Math.cos(n.yaw));if(new dt(i.x,0,i.z).normalize().dot(r)<Math.cos(Math.PI*.42)&&s>4)return!1;let a=[t.eye(),new dt(t.pos.x,t.pos.y+(t.stance==="prone"?.3:.9),t.pos.z)];for(let l of a)if(XM(e,l))return!0;return!1}function yv(n,t){let e=n.ai;if(!n.alive)return;let i=At.diff;if(e.think-=t,e.heard&&(e.heard.t-=t,e.heard.t<=0&&(e.heard=null)),e.think<=0){e.think=.15;let a=null,l=1e9;for(let c of xv(n))if(_v(n,c)){let h=n.pos.distanceTo(c.pos);h<l&&(l=h,a=c)}a!==e.target&&(e.seen=0,e.target=a,a&&e.aimErr.set(Math.random()-.5,(Math.random()-.5)*.6,Math.random()-.5).multiplyScalar([.5,.35,.25][i])),!a&&e.target&&(e.target=null)}let s={x:0,z:0,mag:0,sprint:!1},r=null,o=e.target;if(o&&o.alive){e.seen+=t;let a=[1.1,.7,.45][i],c=e.aimHead??(e.aimHead=Math.random()<[.25,.4,.55][i])?o.eye().add(new dt(0,-.05,0)):new dt(o.pos.x,o.pos.y+(o.stance==="prone"?.25:o.stance==="crouch"?.75:1.05),o.pos.z),h=Math.exp(-e.seen*[1.4,2,2.8][i])+(o.moveAmt>2?[.12,.08,.05][i]:0)+[.035,.018,.008][i];if(r=c.clone().add(e.aimErr.clone().multiplyScalar(h*n.eye().distanceTo(c)*.25)),n.adsWant=e.seen>a*.4&&n.boltT<=0&&n.reloadT<=0,e.strafe-=t,e.strafe<=0&&(e.strafe=.6+Math.random()*1.2,e.strafeDir=Math.random()<.5?-1:1,Math.random()<.25&&n.stance==="stand"?n.stance="crouch":Math.random()<.2&&(n.stance="stand")),n.ads<.5||i===2){let u=new dt(Math.cos(n.yaw),0,-Math.sin(n.yaw));s.x=u.x*e.strafeDir,s.z=u.z*e.strafeDir,s.mag=.5}if(e.seen>a&&n.ads>.92&&wd(n)){let u=new dt().subVectors(r,n.eye()).normalize(),d=n.dir();d.dot(u)>.9995&&(Td(n,d),e.aimHead=void 0,e.aimErr.multiplyScalar(.6),e.seen=a*.35)}e.lastSeenPos=o.pos.clone()}else{n.adsWant=!1,n.stance==="crouch"&&Math.random()<t*.3&&(n.stance="stand");let a=Mv(n);if(a)if(e.repath-=t,(!e.path||e.repath<=0||!e.goal||e.goal.distanceTo(a)>1.5)&&(e.goal=a.clone(),e.path=Z0.path(n.pos.x,n.pos.z,a.x,a.z),e.pi=1,e.repath=3),e.path&&e.pi<e.path.length){let[c,h]=e.path[e.pi],u=c-n.pos.x,d=h-n.pos.z,f=Math.hypot(u,d);f<.45?e.pi++:(s.x=u/f,s.z=d/f,s.mag=1,s.sprint=e.rush&&f>3,e.sneak&&(s.mag=.4)),r=new dt(c,n.eye().y,h),f<.45&&e.pi>=e.path.length&&(e.path=null)}else e.holdT-=t,e.holdT<=0&&(e.holdT=2+Math.random()*3,e.lookYaw=e.watchYaw!==void 0?e.watchYaw+(Math.random()-.5)*1.4:Math.random()*6.28,Math.random()<.3&&(n.stance="crouch")),e.lookYaw!==void 0&&(r=n.eye().add(new dt(-Math.sin(e.lookYaw),-.05,-Math.cos(e.lookYaw))));e.heard&&(r=new dt(e.heard.pos.x,n.eye().y,e.heard.pos.z)),n.wantAct=!1;let l=tt.bomb;if(l.carrier===n&&tt.phase==="live"){let c=pn[e.site];n.pos.distanceTo(c)<2&&(n.wantAct=!0,l.planting||co(n))}tt.phase==="planted"&&n.team!==tt.attack&&n.pos.distanceTo(l.pos)<1.8&&(n.wantAct=!0,l.defusing||co(n))}if(o&&o.alive&&(n.wantAct=!1),r){let a=new dt().subVectors(r,n.eye()),l=Math.atan2(-a.x,-a.z),c=Math.atan2(a.y,Math.hypot(a.x,a.z)),h=o?[3.5,5,7][i]:4;n.yaw+=BM(n.yaw,l)*Math.min(1,h*t*(n.ads>.5?.6:1)),n.pitch+=(c-n.pitch)*Math.min(1,h*t)}if(s.mag>.3&&!o&&(e.stuckT=(e.stuckT||0)+t,e.stuckT>.8&&(e.stuckPos&&e.stuckPos.distanceTo(n.pos)<.25&&(e.path=null,e.repath=0,e.hold=null,e.unstick=.6,e.unstickDir=Math.random()<.5?1:-1),e.stuckPos=n.pos.clone(),e.stuckT=0)),e.unstick>0){e.unstick-=t;let a=new dt(Math.cos(n.yaw),0,-Math.sin(n.yaw)).multiplyScalar(e.unstickDir);s.x=a.x,s.z=a.z,s.mag=1}n.sprint=s.sprint,em(n,s,t),n.mag===0&&n.reloadT<=0&&n.boltT<=0&&or(n),!o&&n.mag<3&&n.reloadT<=0&&n.boltT<=0&&n.reserve>0&&Math.random()<t*.5&&or(n)}function Mv(n){let t=n.ai,e=tt.bomb,i=n.team===tt.attack;if(t.rush=!1,t.sneak=!1,t.watchYaw=void 0,tt.phase==="pre")return null;if(t.heard&&!t.target&&Math.random()<.002)return t.heard.pos;if(i){if(e.state==="dropped")return t.rush=!0,e.pos;if(e.carrier===n&&tt.phase==="live")return t.rush=tt.timer<40,pn[t.site];if(tt.phase==="planted"){if(!t.hold||t.holdFor!=="postplant"){let r=W0[e.site].att[Math.floor(Math.random()*2)];t.hold=new dt(r[0],0,r[1]),t.holdFor="postplant"}return t.watchYaw=Math.atan2(-(e.pos.x-t.hold.x),-(e.pos.z-t.hold.z)),t.hold}let s=e.carrier;if(s&&s!==n){let r=new dt(Math.sin(n.kind.length)*2.5,0,2.5);return s.pos.clone().add(r)}return pn[t.site]}else{if(tt.phase==="planted")return t.rush=!0,e.pos;if(!t.hold||t.holdFor!==t.site||(t.swapT=(t.swapT||0)-.016)<-25){let s=W0[t.site].def,r=s[Math.floor(Math.random()*s.length)];t.hold=new dt(r[0],0,r[1]),t.holdFor=t.site,t.swapT=0}return t.watchYaw=Math.atan2(-(0-t.hold.x)*.3,-(10-t.hold.z)),t.rush=n.pos.distanceTo(t.hold)>12,t.hold}}var gh=.66,kt={root:new Nt,gun:null,arms:[],kick:0,sway:new ct,bob:0,boltAnim:0,reloadAnim:0,sprintK:0,shells:[]};function vv(){kt.gun=ya(1),kt.root.add(kt.gun.root),os.add(kt.root),kt.armL=ud(-1,2783968,.34,.32),kt.armR=ud(1,2783968,.36,.32);for(let n of[kt.armL,kt.armR])n.up.visible=!1;kt.armL.sh.position.set(-.06,-.34,-.25),kt.armR.sh.position.set(.34,-.55,.12),kt.gun.root.scale.setScalar(gh),Li.add(kt.armL.sh),Li.add(kt.armR.sh),os.add(Li),kt.armL.sh.traverse(n=>n.frustumCulled=!1),kt.armR.sh.traverse(n=>n.frustumCulled=!1),kt.gun.root.traverse(n=>n.frustumCulled=!1)}function bv(){let n=kt.gun;kt.root.remove(n.root),kt.gun=ya(1,At.camo),kt.gun.root.scale.setScalar(gh),kt.root.add(kt.gun.root),kt.gun.root.traverse(t=>t.frustumCulled=!1)}function Sv(){kt.kick=1,ph.intensity=6,setTimeout(()=>ph.intensity=0,60),Di(La,kt.gun.muzzlePt.getWorldPosition(new dt),.35,.05,{add:!0,scene:os})}function Ev(n,t,e){let i=Ut,s=kt.gun;kt.kick=Ii(kt.kick,0,9,n),kt.sway.x=Ii(kt.sway.x,bn(-t*.0025,-.06,.06),8,n),kt.sway.y=Ii(kt.sway.y,bn(e*.0025,-.05,.05),8,n);let r=Math.hypot(i.vel.x,i.vel.z);kt.bob+=n*r*2,kt.sprintK=Ii(kt.sprintK,i.sprint&&r>3&&i.ads<.1?1:0,8,n);let o=i.ads,a=s.eyePt.position.y,l=s.eyePt.position.z,c=new dt(.17,-.18,-.52),h=new dt(0,-a*gh,-l*gh-.08),u=c.clone().lerp(h,Math.pow(o,.8)),d=(1-o*.9)*Math.min(1,r/4);u.x+=Math.sin(kt.bob)*.012*d+kt.sway.x,u.y+=Math.abs(Math.cos(kt.bob))*.014*d+kt.sway.y-(i.stance==="crouch"?.01:0),u.z+=kt.kick*.12;let f=i.boltT>0?1-i.boltT/i.st.bolt:0,p=i.boltT>0?Math.sin(Math.min(1,f*1.2)*Math.PI):0;s.setBolt(i.boltT>0?bn((f-.15)/.75,0,1):0);let x=i.reloadT>0?1-i.reloadT/(i.reloadMax||3):0,m=i.reloadT>0?Math.sin(x*Math.PI):0;s.mag.position.y=-.04-(x>.15&&x<.6?Math.sin((x-.15)/.45*Math.PI)*.25:0),kt.root.position.copy(u).add(new dt(-.04*kt.sprintK,-.08*kt.sprintK-.05*m,.05*kt.sprintK)),kt.root.rotation.set(kt.kick*.14+kt.sprintK*-.45+m*.3+p*.12,kt.sprintK*.9+m*.2,kt.sprintK*.35+p*.35+m*.5),kt.root.updateMatrixWorld(!0),Li.updateMatrixWorld(!0);let g=s.gripPt.getWorldPosition(new dt),y=s.forePt.getWorldPosition(new dt),S=s.boltPt.getWorldPosition(new dt),v=i.boltT>0?g.clone().lerp(S,bn(p*1.6,0,1)):i.reloadT>0?g.clone().lerp(s.mag.getWorldPosition(new dt),Math.sin(bn(x*1.2,0,1)*Math.PI)):g,A=s.root.getWorldQuaternion(new nn);rh(kt.armR,Sa(v,A,"grip"),Li.localToWorld(new dt(1.2,-1.2,.4))),rh(kt.armL,Sa(y,A,"fore"),Li.localToWorld(new dt(-.6,-1.4,-.2))),ba(kt.armR,A,"grip"),ba(kt.armL,A,"fore"),kt.root.visible=kt.armL.sh.visible=kt.armR.sh.visible=o<.88&&!At.tpp&&i.alive&&!Fn,i.lostArm[0]&&(kt.armL.sh.visible=!1),i.lostArm[1]&&(kt.armR.sh.visible=!1)}var Se={joy:null,jx:0,jz:0,jmag:0,sprintLock:!1,look:null,lookDX:0,lookDY:0,keys:{},fireHeld:null,mouseDown:!1,rmb:!1},Cs=$("ctl");mi&&$("joyBase").classList.remove("hide");function nm(){$("fireL").classList.toggle("hide",!At.leftFire)}nm();function wv(){let n=(i,s)=>i<innerWidth*.42&&s>innerHeight*.3,t=new Map;Cs.addEventListener("touchstart",i=>{Ht.resume();for(let s of i.changedTouches){let r=s.target.closest&&s.target.closest(".b");if(r){i.preventDefault(),ah(r.id,!0,s),t.set(s.identifier,{btn:r.id,x:s.clientX,y:s.clientY});continue}if(!Se.joy&&n(s.clientX,s.clientY)){Se.joy={id:s.identifier,x:s.clientX,y:s.clientY};let o=$("joyBase");o.classList.add("act"),o.style.left=s.clientX+"px",o.style.top=s.clientY+"px",t.set(s.identifier,{joy:!0})}else Se.look||(Se.look={id:s.identifier,x:s.clientX,y:s.clientY},t.set(s.identifier,{look:!0}))}},{passive:!1}),Cs.addEventListener("touchmove",i=>{i.preventDefault();for(let s of i.changedTouches){let r=t.get(s.identifier);if(r){if(r.joy){let o=parseFloat(getComputedStyle($("joyBase")).width)/2,a=(s.clientX-Se.joy.x)/o,l=(s.clientY-Se.joy.y)/o,c=Math.hypot(a,l);Se.sprintLock=l<-1.45&&Math.abs(a)<.8,c>1&&(a/=c,l/=c),Se.jx=a,Se.jz=l,Se.jmag=Math.min(1,c),$("joyKnob").style.transform=`translate(${a*o*.6}px,${l*o*.6}px)`,$("sprintLock").classList.toggle("on",Se.sprintLock)}else if(r.look||r.btn==="fireR"||r.btn==="fireL"){let o=r.look?Se.look:r,a=s.clientX-o.x,l=s.clientY-o.y;o.x=s.clientX,o.y=s.clientY,Se.lookDX+=a,Se.lookDY+=l}}}},{passive:!1});let e=i=>{for(let s of i.changedTouches){let r=t.get(s.identifier);if(r)if(t.delete(s.identifier),r.joy){Se.joy=null,Se.jx=Se.jz=Se.jmag=0;let o=$("joyBase");o.classList.remove("act"),o.style.left="",o.style.top="",$("joyKnob").style.transform="",Se.sprintLock}else r.look?Se.look=null:r.btn&&ah(r.btn,!1,s)}};Cs.addEventListener("touchend",e),Cs.addEventListener("touchcancel",e),Cs.addEventListener("mousedown",i=>{let s=i.target.closest(".b");if(s&&!document.pointerLockElement){ah(s.id,!0,i);let r=()=>{ah(s.id,!1,i),removeEventListener("mouseup",r)};addEventListener("mouseup",r)}})}function ah(n,t,e){let i=Ut;if(!i)return;let s=$(n);if(s&&s.classList.toggle("press",t),(n==="fireR"||n==="fireL")&&(t?(Se.fireHeld=n,At.fireMode==="tap"||i.adsToggle?xh():(i.adsWant=!0,i.fireOnRelease=!0)):Se.fireHeld===n&&(Se.fireHeld=null,i.fireOnRelease&&(i.fireOnRelease=!1,xh(),i.adsToggle||(i.adsWant=!1)))),!t){n==="actBtn"&&(i.wantAct=!1);return}if(Ht.play("ui",{vol:.25}),n==="adsBtn"&&(i.adsToggle=!i.adsToggle,i.adsWant=i.adsToggle,$("adsBtn").classList.toggle("on",i.adsToggle)),n==="jumpBtn"&&im(i),n==="crouchBtn"&&sm(i),n==="proneBtn"){if(i.lostLeg[0]&&i.lostLeg[1])return;i.stance=i.stance==="prone"?"stand":"prone",Ht.play("cloth",{vol:.5})}n==="reloadBtn"&&or(i),n==="camBtn"&&rm(),n==="pauseBtn"&&Id(!0),n==="actBtn"&&(i.wantAct=!0,co(i))}function xh(){let n=Ut;if(n.alive){if(!wd(n)){n.mag<=0&&or(n);return}Td(n,n.dir())}}function im(n){if(!(!n.alive||!n.onGround||tt.phase==="pre"||n.lostLeg[0]&&n.lostLeg[1])){if(n.stance!=="stand"){n.stance="stand";return}n.vel.y=5.4,n.onGround=!1,Ht.play("cloth",{vol:.4})}}function sm(n){if(n.alive){if(n.sprint&&n.stance==="stand"&&Math.hypot(n.vel.x,n.vel.z)>4){n.slideT=.7,n.stance="crouch",n.slideDir.set(n.vel.x,0,n.vel.z).normalize(),Ht.play("whoosh",{vol:.4});return}n.stance=n.stance==="crouch"?"stand":"crouch",Ht.play("cloth",{vol:.35})}}function rm(){At.tpp=At.tpp?0:1,pi(),$("camBtn").textContent=At.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0",Ut&&Ut.setFirstPerson(!At.tpp)}function Tv(){addEventListener("keydown",n=>{if(tt.phase==="lobby"||!Ut)return;Se.keys[n.code]=!0;let t=Ut;n.code==="Space"&&im(t),(n.code==="KeyC"||n.code==="ControlLeft")&&sm(t),n.code==="KeyZ"&&(t.stance=t.stance==="prone"?"stand":"prone"),n.code==="KeyR"&&or(t),n.code==="KeyV"&&rm(),(n.code==="KeyF"||n.code==="KeyE")&&(t.wantAct=!0,co(t)),n.code==="Escape"&&Id(!0)}),addEventListener("keyup",n=>{Se.keys[n.code]=!1,(n.code==="KeyF"||n.code==="KeyE")&&Ut&&(Ut.wantAct=!1)}),Je.domElement.addEventListener("mousedown",n=>{if(Ht.resume(),!(tt.phase==="lobby"||!Ut)){if(!document.pointerLockElement&&!mi){Je.domElement.requestPointerLock();return}n.button===0&&xh(),n.button===2&&(Ut.adsWant=!0,Se.rmb=!0)}}),Cs.addEventListener("mousedown",n=>{!mi&&!n.target.closest(".b")&&tt.phase!=="lobby"&&(document.pointerLockElement||Je.domElement.requestPointerLock())}),addEventListener("mouseup",n=>{n.button===2&&Ut&&(Ut.adsWant=!1,Se.rmb=!1)}),addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{document.pointerLockElement&&(Se.lookDX+=n.movementX*.6,Se.lookDY+=n.movementY*.6)}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement&&Cs.addEventListener("mousedown",om)})}function om(n){!document.pointerLockElement||!Ut||(n.button===0&&xh(),n.button===2&&(Ut.adsWant=!0))}addEventListener("mousedown",n=>{document.pointerLockElement&&n.target===document.body&&om(n)});function Av(n){let t=Ut,e=(t.ads>.5?At.sensAds:At.sens)*(mi?.0042:.0026),i=Se.lookDX,s=Se.lookDY;Se.lookDX=Se.lookDY=0,t.alive&&!Fn&&(t.yaw-=i*e,t.pitch=bn(t.pitch-s*e,-1.35,1.35));let r=Se.jx,o=Se.jz,a=Se.jmag,l=Se.keys;if(l.KeyW||l.KeyA||l.KeyS||l.KeyD){r=(l.KeyD?1:0)-(l.KeyA?1:0),o=(l.KeyS?1:0)-(l.KeyW?1:0);let x=Math.hypot(r,o)||1;r/=x,o/=x,a=l.AltLeft?.4:1}let c=(Se.sprintLock||l.ShiftLeft)&&t.stamina>.05&&o<-.5&&t.stance==="stand"&&t.ads<.3&&t.boltT<=0&&t.reloadT<=0;t.sprint=c,c&&t.adsWant&&!t.fireOnRelease&&(t.adsWant=!1);let h=new dt(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),d=new dt(Math.cos(t.yaw),0,-Math.sin(t.yaw)).multiplyScalar(r).add(h.multiplyScalar(-o));t.alive&&em(t,{x:d.x,z:d.z,mag:a,sprint:c},n),Ev(n,i,s);let f=tt.bomb,p=null;if(t.alive&&tt.phase==="live"&&f.carrier===t)for(let x of["A","B"])t.pos.distanceTo(pn[x])<2.4&&(p="\u8A2D\u7F6E");t.alive&&tt.phase==="planted"&&t.team!==tt.attack&&t.pos.distanceTo(f.pos)<2&&(p="\u89E3\u9664"),$("actBtn").classList.toggle("hide",!p),p&&($("actBtn").textContent=p),yd>0?yd-=n:mi?$("tip").classList.add("hide"):($("tip").classList.toggle("hide",!p),p&&($("tip").textContent=`F\u9577\u62BC\u3057\u3067${p}`)),$("bombHave").classList.toggle("hide",f.carrier!==t),t.wantAct&&!f.planting&&!f.defusing&&p&&co(t)}function Rv(n,t){n.sprint?(n.stamina=Math.max(0,n.stamina-t),n.sprintOutT=n.st.sprintOut):(n.stamina=Math.min(n.st.stamina,n.stamina+t*.8),n.sprintOutT>0&&(n.sprintOutT-=t));let i=n.targetEye()-n.eyeH,s=(n.stance==="prone"||n.eyeH<.8?1.6:2.6)*t;n.eyeH+=Math.abs(i)<=s||n.slideT>0?i*(n.slideT>0?Math.min(1,t*14):1):Math.sign(i)*s,n.stanceT=Math.abs(n.targetEye()-n.eyeH)>.12&&n.slideT<=0?.1:0;let r=n.adsWant&&n.alive&&n.boltT<=0&&n.reloadT<=0&&!n.sprint&&n.sprintOutT<=0&&n.stanceT<=0&&!(n.kickedOut&&n.boltT>0),o=n.ads;if(n.ads=bn(n.ads+(r?t/n.st.ads:-t/.18),0,1),n.isPlayer&&o===0&&n.ads>0&&Ht.play("cloth",{vol:.35,rate:1.3}),n.boltT>0){if(n.boltT-=t,n.isPlayer||n.pos.distanceTo(Ut.pos)<25){let l=1-n.boltT/n.st.bolt;l>.25&&n.boltPlayed===0&&(n.boltPlayed=1,Ht.play("bolt1",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3})),l>.6&&n.boltPlayed===1&&(n.boltPlayed=2,Ht.play("bolt2",n.isPlayer?{vol:.8}:{pos:n.pos,vol:.6,ref:3}),Cv(n))}n.boltT<=0&&(n.boltT=0,n.kickedOut=!1,n.mag===0&&or(n))}if(n.reloadT>0&&(n.reloadT-=t,n.reloadT<=0)){let l=Math.min(n.st.mag-n.mag,n.reserve);n.mag+=l,n.reserve-=l,n.reloadT=0}n.revealT>0&&(n.revealT-=t),n.alive&&n.hp<100&&(n.hurtT=(n.hurtT||0)+t,n.hurtT>5&&(n.hp=Math.min(100,n.hp+60*t)));let a=n.veg;a.root.position.set(n.pos.x,n.pos.y,n.pos.z),n.alive&&a.root.rotation.set(0,n.yaw,0),a.speed=Math.hypot(n.vel.x,n.vel.z)*(n.onGround?1:.3),a.run=n.sprint?1:0,a.crouch=Ii(a.crouch,n.stance==="crouch"||n.slideT>0?1:0,7,t),a.prone=Ii(a.prone,n.stance==="prone"?1:0,3.2,t),a.pitch=n.pitch,a.ads=n.ads,a.air=n.onGround?0:1,a.recoil=Ii(a.recoil,0,10,t),a.boltT=n.boltT>0?Math.sin((1-n.boltT/n.st.bolt)*Math.PI):0,n.lostArm[0]&&n.lostArm[1]&&(a.aim.visible=!1),a.update(t),a.gun.setBolt(n.boltT>0?bn((1-n.boltT/n.st.bolt-.15)/.75,0,1):0)}function Cv(n){let t=E0(),e,i;n.isPlayer&&!At.tpp?e=n.eye().add(n.dir().multiplyScalar(.5)).add(new dt(Math.cos(n.yaw)*.15,-.15,-Math.sin(n.yaw)*.15)):e=n.veg.gun.ejectPt.getWorldPosition(new dt),i=new dt(Math.cos(n.yaw)*2.2,2,-Math.sin(n.yaw)*2.2),t.position.copy(e),Ie.add(t),ao(t,i,new dt(20,5,10),{r:.008})}var md=0,lh=0,io=0,X0=74;function Pv(n){if(At.killcam&&As&&As.t>0&&!Ut.alive&&tt.phase!=="post"){As.t-=n;let o=As.by;if(o){let a=o.eye();ve.position.copy(As.at).add(new dt(0,.3,0));let l=new dt().subVectors(a,ve.position),c=Math.atan2(-l.x,-l.z),h=Math.atan2(l.y,Math.hypot(l.x,l.z));ve.rotation.set(h,c,0);let u=bn(2.8-As.t,0,1),d=Pa(X0,bn(800/Math.max(5,l.length()),12,60),u);ve.fov=d,ve.updateProjectionMatrix(),$("kcam").classList.remove("hide"),$("kcamN").textContent=`${o.name}\uFF08HP ${Math.max(0,Math.round(o.hp))}\uFF09`,$("scope").style.display="none",$("cross").style.display="none",Ht.listener.x=ve.position.x,Ht.listener.z=ve.position.z,Ht.listener.yaw=c;return}}$("kcam").classList.add("hide");let t=Ut,e=At.tpp;if(Fn&&(!Ut.alive||tt.phase==="post")&&(t=(Fn.alive,Fn),e=!0,!t.alive)){let o=Fe.find(a=>a.team===Ut.team&&a.alive);o&&(Fn=t=o)}let i=t.eye(),s=t===Ut?t.ads:0;if(e&&s<.85){let o=t.stance==="prone"?2:2.6,a=t.dir(),l=new dt(Math.cos(t.yaw),0,-Math.sin(t.yaw)),c=i.clone().add(new dt(0,.32,0)).addScaledVector(l,.8),h=a.clone().multiplyScalar(-o),u=oo(c,h.clone().normalize(),o+.3),d=u?Math.max(.3,u.t-.3):o;ve.position.copy(c).addScaledVector(h.normalize(),d),ve.rotation.set(t.pitch,t.yaw,0)}else if(ve.position.copy(i),ve.rotation.set(t.pitch,t.yaw,0),t===Ut){let o=Math.hypot(t.vel.x,t.vel.z)*(t.onGround?1:0)*(1-t.ads);md+=n*o*1.9;let a=Math.min(1,o/5)*.035;ve.position.y+=Math.abs(Math.sin(md))*a-lh,ve.rotation.z=Math.sin(md)*a*.12,t.onGround?(io>.25&&(lh=.08*io),io=0):io=Math.min(io+n,1),lh=Ii(lh,0,8,n)}if(t===Ut&&t.ads>.5){let o=tt.time,a=(t.st.stanceSway?t.stance==="prone"?6e-4:t.stance==="crouch"?.0015:.0026:.0022)*(1+Math.min(2,Math.hypot(t.vel.x,t.vel.z)))*t.st.sway;ve.rotation.x+=Math.sin(o*1.3)*a+Math.sin(o*2.7)*a*.4,ve.rotation.y+=Math.cos(o*.9)*a*1.2}Rs>0&&(Rs=Math.max(0,Rs-n),ve.rotation.x+=(Math.random()-.5)*Rs*.04,ve.rotation.y+=(Math.random()-.5)*Rs*.04),t===Ut&&kt.kick>.05&&(ve.rotation.x+=kt.kick*.03);let r=Pa(X0,13,Math.pow(s,1.5));Math.abs(ve.fov-r)>.01&&(ve.fov=r,ve.updateProjectionMatrix()),Ht.listener.x=ve.position.x,Ht.listener.y=ve.position.y,Ht.listener.z=ve.position.z,Ht.listener.yaw=t.yaw,$("scope").style.display=s>.88&&t===Ut?"block":"none",$("cross").style.display=s>.3||!Ut.alive?"none":"block"}var Md=new Map;function Iv(){for(let n of Fe){let t=Md.get(n);t||(t=new Dr(new zs({map:K0,transparent:!0,blending:Zs,depthWrite:!1,depthTest:!0,fog:!1})),Ie.add(t),Md.set(n,t));let e=n.alive&&!n.isPlayer&&n.ads>.6&&!n.veg.dead;if(t.visible=!1,!e)continue;let i=n.veg.gun.lens.getWorldPosition(new dt),s=new dt().subVectors(ve.position,i),r=s.length();s.normalize();let o=n.dir().dot(s);o<.85||(t.visible=!0,t.position.copy(i).addScaledVector(s,.05),t.scale.setScalar(bn(r*.035,.25,2.5)*(.8+Math.random()*.3)*(o-.8)*4))}}var vd=$("minimap"),Lv=vd.getContext("2d"),bd=[];function Dv(){bd.length=0;for(let n of vn.mm)bd.push(n)}function Nv(){let n=vd.width,t=vd.height,e=Lv,i=Ut.alive||!Fn?Ut:Fn;e.clearRect(0,0,n,t),e.save(),e.beginPath(),e.roundRect?e.roundRect(0,0,n,t,16):e.rect(0,0,n,t),e.clip(),e.fillStyle="rgba(40,60,40,.55)",e.fillRect(0,0,n,t);let s=n/46;e.translate(n/2,t/2),e.rotate(i.yaw),e.scale(s,s),e.translate(-i.pos.x,-i.pos.z),e.fillStyle="rgba(60,60,64,.9)",e.fillRect(-40,-4,80,8),e.fillStyle="rgba(150,150,140,.8)",e.fillRect(-40,-5.7,80,1.7),e.fillRect(-40,4,80,1.7);for(let a of bd)e.fillStyle=a[4],e.fillRect(a[0],a[1],a[2]-a[0],a[3]-a[1]);e.strokeStyle="rgba(255,255,255,.3)",e.lineWidth=.3,e.strokeRect(fe.minX,fe.minZ,fe.maxX-fe.minX,fe.maxZ-fe.minZ);for(let a of["A","B"]){let l=pn[a];e.fillStyle="rgba(255,200,40,.35)",e.beginPath(),e.arc(l.x,l.z,2.4,0,7),e.fill(),e.save(),e.translate(l.x,l.z),e.rotate(-i.yaw),e.fillStyle="#ffd040",e.font="bold 3px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(a,0,0),e.restore()}let r=tt.bomb;(r.state==="dropped"||r.state==="planted"||r.state==="carried"&&r.carrier&&r.carrier.team===Ut.team)&&(e.save(),e.translate(r.pos.x,r.pos.z),e.rotate(-i.yaw),e.fillStyle=r.state==="planted"?Math.floor(tt.time*4)%2?"#ff3020":"#ffd040":"#ffa020",e.fillRect(-1,-.7,2,1.4),e.restore());for(let a of Fe){if(!a.alive)continue;let l=a.team===Ut.team;!l&&a.revealT<=0&&!(a.ai&&a.ai.target===Ut&&a.ads>.5&&!1)||(e.save(),e.translate(a.pos.x,a.pos.z),e.rotate(-a.yaw),a===Ut?(e.fillStyle="#ffe060",e.beginPath(),e.moveTo(0,-1.8),e.lineTo(1.2,1.2),e.lineTo(0,.5),e.lineTo(-1.2,1.2),e.closePath(),e.fill()):(e.fillStyle=l?"#4aa8ff":"#ff4030",e.beginPath(),e.arc(0,0,1,0,7),e.fill(),l&&(e.beginPath(),e.moveTo(0,-2),e.lineTo(.7,-.6),e.lineTo(-.7,-.6),e.fill())),e.restore())}e.restore(),e.fillStyle="rgba(255,255,255,.7)",e.font="bold 20px sans-serif",e.textAlign="center";let o=i.yaw;e.save(),e.translate(n/2,t/2),e.rotate(o),e.fillText("N",0,-t/2+22),e.restore()}function Uv(n){let t=Ut;Cs.classList.toggle("dead",!t.alive);let e=Math.max(0,(tt.phase==="pre",tt.timer)),i=Math.floor(e/60),s=Math.floor(e%60);$("timer").textContent=tt.phase==="pre"?Math.ceil(e)+"":`${i}:${String(s).padStart(2,"0")}`,$("timer").classList.toggle("bomb",tt.phase==="planted"),$("amC").textContent=t.mag,$("amR").textContent=t.reserve,$("amS").textContent=t.reloadT>0?"\u30EA\u30ED\u30FC\u30C9\u4E2D\u2026":t.boltT>0?"\u30DC\u30EB\u30C8\u64CD\u4F5C\u4E2D\u2026":t.st.name,$("hpf").style.width=Math.max(0,t.hp)+"%",$("hpf").classList.toggle("low",t.hp<50);let r=Fe.filter(l=>l.team===0),o=Fe.filter(l=>l.team===1);$("ia0").classList.toggle("dead",!r[0].alive),$("ia1").classList.toggle("dead",!r[1].alive),$("ie0").classList.toggle("dead",!o[0].alive),$("ie1").classList.toggle("dead",!o[1].alive),hh>0&&(hh-=n,hh<=0&&($("killnote").innerHTML="")),Ra>0&&(Ra-=n,Ra<=0&&($("cmsg").textContent="",$("csub").textContent="")),uh>0&&(uh-=n,$("hitmark").style.opacity=Math.max(0,uh/.25)),tt.phase==="pre"&&($("cmsg").textContent=Math.ceil(tt.timer)<=3?Math.ceil(tt.timer):`\u30E9\u30A6\u30F3\u30C9 ${tt.round}`,Ra=.2),Nv(),Ov();let a="";if(Ut.alive){let l=ve.position,c=new dt(0,0,-1).applyQuaternion(ve.quaternion),h=oo(l,c,150),u=h?h.t:150;for(let d of Fe)if(!(d.team===Ut.team||!d.alive)){for(let f of d.veg.computeHitSpheres()){let p=J0(l,c,f.c,f.r*1.6);if(p>0&&p<u){a=d.name;break}}if(a)break}}$("aimName").textContent=a}var Sd=new Map;function Fv(n,t,e,i){let s=Sd.get(n);s||(s=document.createElement("div"),$("marks").appendChild(s),Sd.set(n,s));let r=i.clone().project(ve),o=r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1;s.style.display=o?"block":"none",o&&(s.className="mk "+t,s._h!==e&&(s.innerHTML=e,s._h=e),s.style.left=(r.x+1)/2*100+"%",s.style.top=(1-r.y)/2*100+"%")}function Ov(){let n=new Set,t=Ut.alive||!Fn?Ut:Fn,e=Ut.ads>.88,i=(o,...a)=>{n.add(o),e||Fv(o,...a)};for(let o of Fe)o!==Ut&&o!==Fn&&o.team===Ut.team&&o.alive&&i("n"+o.name,"ally",`${o.name}<span class="ar"></span>`,o.eye().add(new dt(0,.55,0)));let s=tt.bomb,r=o=>Math.round(o.distanceTo(t.pos))+"m";if(tt.phase==="live"&&(s.carrier===Ut||Ut.team!==tt.attack||s.carrier?.team===Ut.team))for(let o of["A","B"])i("s"+o,"site",`<i>${o}</i><small>${r(pn[o])}</small>`,pn[o].clone().add(new dt(0,2.2,0)));s.state==="planted"&&i("bomb","bomb",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new dt(0,1.2,0))),s.state==="dropped"&&Ut.team===tt.attack&&i("bombd","bomb drop",`<i>\u{1F4A3}</i><small>${r(s.pos)}</small>`,s.pos.clone().add(new dt(0,1,0)));for(let[o,a]of Sd)(!n.has(o)||e||tt.phase==="post")&&(a.style.display="none")}function Bv(){Pi||(Pi=pv(),Ie.add(Pi));let n=tt.bomb;if(Pi.visible=n.state==="dropped"||n.state==="planted"||n.state==="defused"||!!n.planting,n.planting&&n.state!=="planted"){let t=n.planting;t.stance="crouch";let e=new dt(-Math.sin(t.yaw),0,-Math.cos(t.yaw));n.pos.copy(t.pos).addScaledVector(e,.55),n.pos.y=sr(n.pos.x,n.pos.z,t.pos.y+.3)}n.defusing&&(n.defusing.stance="crouch"),Pi.visible&&(Pi.position.copy(n.pos),Pi.userData.scr.material.color.setHex(n.state==="planted"&&Math.floor(tt.time*(n.fuse<6?8:2))%2?16724e3:4198416),n.state==="dropped"&&(Pi.rotation.y+=.02))}var ss=null,gd=0,_h=["carrot","tomato","potato","pepper"],Hv={carrot:"\u7D30\u8EAB\u3067\u982D\u304C\u5C0F\u3055\u3044",tomato:"\u307E\u3093\u307E\u308B\u3002\u3064\u3084\u3064\u3084",potato:"\u305A\u3063\u3057\u308A\u3002\u3067\u3053\u307C\u3053",pepper:"\u3064\u3084\u3064\u3084\u306E\u7DD1"};function Pd(){window.VW_INGAME=!1,tt.phase="lobby";for(let n of Fe)n.dispose();Fe=[],Ut=null,j0(),Pi&&(Pi.visible=!1);for(let n of Md.values())n.visible=!1;$("hud").classList.add("hide"),$("ctl").classList.add("hide"),$("lobby").classList.remove("hide"),$("result").classList.add("hide"),$("pause").classList.add("hide"),$("helpTxt").innerHTML=mi?"\u5DE6\u5074\u3092\u306A\u305E\u3063\u3066\u79FB\u52D5\uFF08\u4E0A\u306B\u5012\u3057\u304D\u308B\u3068\u30C0\u30C3\u30B7\u30E5\uFF09<br>\u53F3\u5074\u3092\u306A\u305E\u3063\u3066\u8996\u70B9<br>\u6483\u3064\u30DC\u30BF\u30F3\uFF1A\u62BC\u3059\u3068\u8997\u304F\u30FB\u96E2\u3059\u3068\u767A\u5C04<br>\u53F3\u306E\u7167\u6E96\u30DC\u30BF\u30F3\uFF1A\u8997\u304D\u3063\u3071\u306A\u3057\u306B\u5207\u66FF<br>\u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09\u30FB\u4F0F\u305B\u30FB\u30B8\u30E3\u30F3\u30D7<br>\u30B5\u30A4\u30C8\u3067\u300C\u8A2D\u7F6E\u300D\u300C\u89E3\u9664\u300D\u3092\u9577\u62BC\u3057":"WASD \u79FB\u52D5 / Shift \u30C0\u30C3\u30B7\u30E5 / Alt \u305D\u30FC\u3063\u3068\u6B69\u304F<br>\u30DE\u30A6\u30B9 \u8996\u70B9 / \u5DE6\u30AF\u30EA\u30C3\u30AF \u6483\u3064 / \u53F3\u30AF\u30EA\u30C3\u30AF \u8997\u304F<br>Space \u30B8\u30E3\u30F3\u30D7 / C \u3057\u3083\u304C\u307F\uFF08\u30C0\u30C3\u30B7\u30E5\u4E2D\u306F\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\uFF09 / Z \u4F0F\u305B<br>R \u30EA\u30ED\u30FC\u30C9 / F \u9577\u62BC\u3057\u3067\u8A2D\u7F6E\u30FB\u89E3\u9664 / V \u8996\u70B9\u5207\u66FF",Na(),Ht.bgm(!1)}function Na(){ss&&Ie.remove(ss.root),ss=new eo(At.kind,0,{lod:1,hat:At.hat,camo:At.camo}),Ie.add(ss.root),$("hatName").textContent=no.find(e=>e.id===At.hat).name,$("camoName").textContent=_a.find(e=>e.id===At.camo).name;let[n,t]=vn.lobby;ss.root.position.set(n,.15+(vn.id==="town"?0:-.13),t),$("charName").innerHTML=`${ns[At.kind]}<small>${Hv[At.kind]}</small>`}function kv(n){gd+=n;let t=ss;if(!t)return;t.root.rotation.y=Math.PI+.5+Math.sin(gd*.4)*.25,t.speed=0,t.pitch=-.15+Math.sin(gd*.7)*.03,t.run=0,t.ads=0,t.update(n);let[e,i]=vn.lobby;ve.position.set(e-1.2,1.2,i+2.7),ve.lookAt(e+.6,1,i),Math.abs(ve.fov-50)>.01&&(ve.fov=50,ve.updateProjectionMatrix())}$("prevC").onclick=()=>{At.kind=_h[(_h.indexOf(At.kind)+3)%4],pi(),Na(),Ht.resume(),Ht.play("ui")};$("nextC").onclick=()=>{At.kind=_h[(_h.indexOf(At.kind)+1)%4],pi(),Na(),Ht.resume(),Ht.play("ui")};var yh=(n,t,e)=>{let i=n.findIndex(s=>s.id===At[t]);At[t]=n[(i+e+n.length)%n.length].id,pi(),Na(),Ht.resume(),Ht.play("ui")};$("hatP").onclick=()=>yh(no,"hat",-1);$("hatN").onclick=()=>yh(no,"hat",1);$("camoP").onclick=()=>yh(_a,"camo",-1);$("camoN").onclick=()=>yh(_a,"camo",1);function Ua(){let n=At.lo,t=ts[n.rifle];$("loName").textContent=t.name;let e=n.att.map(s=>Ea.find(r=>r.id===s).name).join("\u30FB")||"\u30A2\u30BF\u30C3\u30C1\u30E1\u30F3\u30C8\u306A\u3057",i=n.perks.map((s,r)=>(wa[r].find(o=>o.id===s)||wa[r][0]).name).filter(s=>s!=="\u306A\u3057").join("\u30FB")||"\u30D1\u30FC\u30AF\u306A\u3057";$("loSub").innerHTML=`${e}<br>${i}`,$("modeTxt").innerHTML=`\u547D\u306F1\u30E9\u30A6\u30F3\u30C91\u3064\u3002<br>\u7206\u5F3E\u306E\u7206\u7834\u304B\u3001\u6575\u306E\u5168\u6EC5\u3067\u52DD\u3061\u3002<br>${At.winR}\u30E9\u30A6\u30F3\u30C9\u5148\u53D6\u30FB${At.swap===1?"\u6BCE\u30E9\u30A6\u30F3\u30C9":At.swap+"\u30E9\u30A6\u30F3\u30C9\u3054\u3068\u306B"}\u653B\u5B88\u4EA4\u4EE3\u3002`}function dh(n){let t=At.lo;$("rifleList").innerHTML=Object.values(ts).map(e=>`<div class="rf${t.rifle===e.id?" on":""}" data-r="${e.id}"><b>${e.name}</b><small>${e.tag}\u30FB\u5F3E${e.mag}\u767A<br>${e.spec}</small><div class="bars">${Object.entries(e.stats).map(([i,s])=>`<span>${i}</span><i><u style="width:${s*20}%"></u></i>`).join("")}</div></div>`).join(""),$("rifleList").querySelectorAll(".rf").forEach(e=>e.onclick=()=>{t.rifle=e.dataset.r,pi(),Ht.play("ui"),dh(ts[t.rifle].desc),Na()}),$("attCnt").textContent=`${t.att.length}/2`,$("attList").innerHTML=Ea.map(e=>{let i=t.att.includes(e.id),s=!i&&(t.att.length>=2||e.ex&&t.att.includes(e.ex));return`<button data-a="${e.id}" class="${i?"on":s?"no":""}">${e.name}</button>`}).join(""),$("attList").querySelectorAll("button").forEach(e=>e.onclick=()=>{let i=e.dataset.a,s=Ea.find(o=>o.id===i),r=t.att.indexOf(i);r>=0?t.att.splice(r,1):(s.ex&&t.att.includes(s.ex)&&t.att.splice(t.att.indexOf(s.ex),1),t.att.length>=2&&t.att.shift(),t.att.push(i)),pi(),Ht.play("ui"),dh(s.name+"\uFF1A"+s.desc+(s.ex?`
\u203B${Ea.find(o=>o.id===s.ex).name}\u3068\u306F\u540C\u6642\u306B\u4ED8\u3051\u3089\u308C\u307E\u305B\u3093\u3002`:""))}),[0,1,2].forEach(e=>{$("perk"+e).innerHTML=wa[e].map(i=>`<button data-p="${i.id}" class="${t.perks[e]===i.id?"on":""}">${i.name}</button>`).join(""),$("perk"+e).querySelectorAll("button").forEach(i=>i.onclick=()=>{t.perks[e]=i.dataset.p,pi(),Ht.play("ui");let s=wa[e].find(r=>r.id===i.dataset.p);dh(s.desc?s.name+"\uFF1A"+s.desc:"")})}),n!==void 0&&($("loDesc").textContent=n),Ua()}(!At.lo||!ts[At.lo.rifle])&&(At.lo=JSON.parse(JSON.stringify(dd)));$("loCard").onclick=()=>{Ht.resume(),Ht.play("ui"),dh(ts[At.lo.rifle].desc),$("loM").classList.remove("hide")};$("loClose").onclick=()=>{$("loM").classList.add("hide"),pi(),Ua()};Ua();function am(){let n=Qi[At.map]||vn;$("mapName").textContent=n.name,$("mapDesc").textContent=n.desc}am();$("mapCard").onclick=()=>{let n=Object.keys(Qi);At.map=n[(n.indexOf(At.map)+1)%n.length],pi(),Ht.play("ui"),am(),$("ldTxt").textContent=`\u30DE\u30C3\u30D7\u300C${Qi[At.map].name}\u300D\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026`,$("loading").classList.remove("hide"),setTimeout(()=>location.reload(),150)};$("startBtn").onclick=async()=>{await Ht.init(),Ht.resume(),Ht.play("ui"),ss&&(Ie.remove(ss.root),ss=null),$("lobby").classList.add("hide"),$("hud").classList.remove("hide"),$("ctl").classList.remove("hide"),$("camBtn").textContent=At.tpp?"\u4E09\u4EBA\u79F0":"\u4E00\u4EBA\u79F0";try{mi&&document.documentElement.requestFullscreen&&!document.fullscreenElement&&await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}mi||Je.domElement.requestPointerLock(),Q0(),At.bgm&&Ht.bgm(!0),Ht.wind(!0)};$("againBtn").onclick=()=>{$("result").classList.add("hide"),$("ctl").classList.remove("hide"),Q0(),At.bgm&&Ht.bgm(!0)};$("toLobby").onclick=()=>Pd();function Id(n){n?(tt.paused=!0,$("pause").classList.remove("hide"),document.pointerLockElement&&document.exitPointerLock()):(tt.paused=!1,$("pause").classList.add("hide"),!mi&&Ut&&Je.domElement.requestPointerLock())}$("resumeBtn").onclick=()=>Id(!1);$("quitBtn").onclick=()=>{tt.paused=!1,Ht.wind(!1),Pd()};$("pSetBtn").onclick=()=>$("settings").classList.remove("hide");$("setBtn").onclick=()=>$("settings").classList.remove("hide");$("setClose").onclick=()=>{$("settings").classList.add("hide"),pi()};$("sens").value=At.sens;$("sensAds").value=At.sensAds;$("sens").oninput=n=>At.sens=+n.target.value;$("sensAds").oninput=n=>At.sensAds=+n.target.value;function Is(n,t,e){let i=$(n);i.querySelectorAll("button").forEach(s=>{s.classList.toggle("on",String(At[t])===s.dataset.v),s.onclick=()=>{At[t]=isNaN(+s.dataset.v)?s.dataset.v:+s.dataset.v,i.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r===s)),pi(),e&&e()}})}Is("fireMode","fireMode");Is("winR","winR",Ua);Is("swapSeg","swap",Ua);Is("kcSeg","killcam");Is("lfSeg","leftFire",nm);Is("diff","diff");Is("bgmSeg","bgm",()=>{tt.phase!=="lobby"&&Ht.bgm(!!At.bgm)});Is("quality","quality",()=>{ar("","\u753B\u8CEA\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002\u6B21\u306B\u958B\u3044\u305F\u3068\u304D\u304B\u3089\u53CD\u6620\u3055\u308C\u307E\u3059",2)});var q0=performance.now(),ch=0,xd=0;function lm(n){requestAnimationFrame(lm);let t=Math.min(.05,(n-q0)/1e3);if(q0=n,ch+=t,xd++,ch>2){let e=xd/ch;ch=0,xd=0,e<40&&es>.75?(es=Math.max(.75,es-.15),Je.setPixelRatio(es),fh()):e>58&&es<Math.min(devicePixelRatio,At.quality===2?2:1.5)&&(es=Math.min(es+.1,2),Je.setPixelRatio(es),fh())}if(tt.phase==="lobby"){kv(t),Ca();return}if(!Ut||tt.paused){Ca();return}if(tt.phase==="end"){Ca();return}cm(t),Ca()}function cm(n){let t=n;tt.slowmo>0&&(tt.slowmo-=n,t=n*.25),fv(t),Av(t);for(let e of Fe)e.ai&&yv(e,t);for(let e of Fe)Rv(e,t);JM(t),Bv(),Iv(),Pv(n),Uv(n)}function Ca(){sd.time.value=performance.now()/1e3,Je.clear(),Je.render(Ie,ve),tt.phase!=="lobby"&&Ut&&kt.root.visible&&(Je.clearDepth(),Je.render(os,Li))}wv();Tv();Dv();window.__vw={kill:Rd,endRound:lo,render:Ca,renderer:Je,vm:kt,vmCam:Li,V3:dt,sim(n){for(let t=0;t<n*30&&tt.phase!=="end";t++)cm(1/30)},game:tt,get player(){return Ut},get fighters(){return Fe},camera:ve,scene:Ie,CFG:At,startRound:Cd,tryAct:co,fire:Td};GM().then(()=>requestAnimationFrame(lm));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
