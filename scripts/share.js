(()=>{var e={192:(t,r)=>{p.stringToBytes=(p.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,p.createStringToBytes=function(u,f){var o=function(){function t(){var t=r.read();if(-1==t)throw"eof";return t}for(var r=l(u),e=0,n={};;){var o=r.read();if(-1==o)break;var i=t(),a=t()<<8|t();n[String.fromCharCode(o<<8|i)]=a,e+=1}if(e!=f)throw e+" != "+f;return n}(),i="?".charCodeAt(0);return function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);n<128?r.push(n):"number"==typeof(n=o[t.charAt(e)])?(255&n)==n?r.push(n):(r.push(n>>>8),r.push(255&n)):r.push(i)}return r}},s={L:1,M:0,Q:3,H:2},e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,o=7973,a=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(i={}).getBCHTypeInfo=function(t){for(var r=t<<10;0<=a(r)-a(n);)r^=n<<a(r)-a(n);return 21522^(t<<10|r)},i.getBCHTypeNumber=function(t){for(var r=t<<12;0<=a(r)-a(o);)r^=o<<a(r)-a(o);return t<<12|r},i.getPatternPosition=function(t){return e[t-1]},i.getMaskFunction=function(t){switch(t){case 0:return function(t,r){return(t+r)%2==0};case 1:return function(t,r){return t%2==0};case 2:return function(t,r){return r%3==0};case 3:return function(t,r){return(t+r)%3==0};case 4:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case 5:return function(t,r){return t*r%2+t*r%3==0};case 6:return function(t,r){return(t*r%2+t*r%3)%2==0};case 7:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},i.getErrorCorrectPolynomial=function(t){for(var r=F([1],0),e=0;e<t;e+=1)r=r.multiply(F([1,u.gexp(e)],0));return r},i.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+t}}},i.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);5<i&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);for(var g=0,o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+Math.abs(100*g/r/r-50)/5*10},j=i,u=function(){for(var r=new Array(256),e=new Array(256),t=0;t<8;t+=1)r[t]=1<<t;for(t=8;t<256;t+=1)r[t]=r[t-4]^r[t-5]^r[t-6]^r[t-8];for(t=0;t<255;t+=1)e[r[t]]=t;return{glog:function(t){if(t<1)throw"glog("+t+")";return e[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return r[t]}}}(),h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],z={getRSBlocks:function(t,r){var e=function(t){switch(r){case s.L:return h[4*(t-1)+0];case s.M:return h[4*(t-1)+1];case s.Q:return h[4*(t-1)+2];case s.H:return h[4*(t-1)+3];default:return}}(t);if(void 0===e)throw"bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+r;for(var n,o,i=e.length/3,a=[],u=0;u<i;u+=1)for(var f=e[3*u+0],c=e[3*u+1],g=e[3*u+2],l=0;l<f;l+=1)a.push((n=g,void 0,(o={}).totalCount=c,o.dataCount=n,o));return a}},H=function(){var e=[],n=0,o={getBuffer:function(){return e},getAt:function(t){var r=Math.floor(t/8);return 1==(e[r]>>>7-t%8&1)},put:function(t,r){for(var e=0;e<r;e+=1)o.putBit(1==(t>>>r-e-1&1))},getLengthInBits:function(){return n},putBit:function(t){var r=Math.floor(n/8);e.length<=r&&e.push(0),t&&(e[r]|=128>>>n%8),n+=1}};return o},f=function(t){var n=t,o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return{getMode:function(){return 1},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+2<r.length;)t.put(o(r.substring(e,e+3)),10),e+=3;e<r.length&&(r.length-e==1?t.put(o(r.substring(e,e+1)),4):r.length-e==2&&t.put(o(r.substring(e,e+2)),7))}}},c=function(t){var n=t,o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return{getMode:function(){return 2},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+1<r.length;)t.put(45*o(r.charAt(e))+o(r.charAt(e+1)),11),e+=2;e<r.length&&t.put(o(r.charAt(e)),6)}}},g=function(t){var e=p.stringToBytes(t);return{getMode:function(){return 4},getLength:function(t){return e.length},write:function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)}}},d=function(t){var r=p.stringToBytesFuncs.SJIS;if(!r)throw"sjis not supported.";var e=r("友");if(2!=e.length||38726!=(e[0]<<8|e[1]))throw"sjis not supported.";var o=r(t);return{getMode:function(){return 8},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}t.put(n=192*(n>>>8&255)+(255&n),13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}}},l=function(t){var e=t,n=0,o=0,i=0,a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return{read:function(){for(;i<8;){if(n>=e.length){if(0==i)return-1;throw"unexpected end of file./"+i}var t=e.charAt(n);if(n+=1,"="==t)return i=0,-1;t.match(/^\s$/)||(o=o<<6|a(t.charCodeAt(0)),i+=6)}var r=o>>>i-8&255;return i-=8,r}}},v=function(t,r,e){n=t,o=r,h=new Array(t*r),i=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,o=d(),i=0;i<r;i+=1)o.add(String.fromCharCode(i));o.add(String.fromCharCode(r)),o.add(String.fromCharCode(e));var a,u,f,t=k(),c=(a=t,f=u=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;8<=u+r;)a.writeByte(255&(t<<u|f)),r-=8-u,t>>>=8-u,u=f=0;f|=t<<u,u+=r},flush:function(){0<u&&a.writeByte(f)}}),g=(c.write(r,n),0),l=String.fromCharCode(h[g]);for(g+=1;g<h.length;){var s=String.fromCharCode(h[g]);g+=1,o.contains(l+s)?l+=s:(c.write(o.indexOf(l),n),o.size()<4095&&(o.size()==1<<n&&(n+=1),o.add(l+s)),l=s)}return c.write(o.indexOf(l),n),c.write(e,n),c.flush(),t.toByteArray()},d=function(){var r={},e=0,n={add:function(t){if(n.contains(t))throw"dup key:"+t;r[t]=e,e+=1},size:function(){return e},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return n};for(var n,o,h,i,d,a={setPixel:function(t,r,e){h[r*n+t]=e},write:function(t){t.writeString("GIF87a"),t.writeShort(n),t.writeShort(o),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(n),t.writeShort(o),t.writeByte(0);var r=i(2);t.writeByte(2);for(var e=0;255<r.length-e;)t.writeByte(255),t.writeBytes(r,e,255),e+=255;t.writeByte(r.length-e),t.writeBytes(r,e,r.length-e),t.writeByte(0),t.writeString(";")}},u=0;u<r;u+=1)for(var f=0;f<t;f+=1)a.setPixel(f,u,e(f,u));var c=k();a.write(c);s=l=g=0,v="",p=function(t){if(!(t<0)){if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t},(w={}).writeByte=function(t){for(g=g<<8|255&t,l+=8,s+=1;6<=l;)A(g>>>l-6),l-=6},w.flush=function(){if(0<l&&(A(g<<6-l),l=g=0),s%3!=0)for(var t=3-s%3,r=0;r<t;r+=1)v+="="},w.toString=function(){return v};for(var g,l,s,v,w,p,y=w,m=c.toByteArray(),B=0;B<m.length;B+=1)y.writeByte(m[B]);function A(t){v+=String.fromCharCode(p(63&t))}return y.flush(),"data:image/gif;base64,"+y};var e,n,o,i,a,s,j,u,h,z,H,f,c,g,d,l,v,w=p;function p(t,r){function a(t,r){q=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(R=4*I+17),S(0,0),S(R-7,0),S(0,R-7);for(var e=j.getPatternPosition(I),n=0;n<e.length;n+=1)for(var o=0;o<e.length;o+=1){var i=e[n],a=e[o];if(null==q[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)q[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}for(var c=8;c<R-8;c+=1)null==q[c][6]&&(q[c][6]=c%2==0);for(var g=8;g<R-8;g+=1)null==q[6][g]&&(q[6][g]=g%2==0);for(var l=t,s=T<<3|r,h=j.getBCHTypeInfo(s),d=0;d<15;d+=1){var v=!l&&1==(h>>d&1);d<6?q[d][8]=v:d<8?q[d+1][8]=v:q[R-15+d][8]=v}for(d=0;d<15;d+=1)v=!l&&1==(h>>d&1),d<8?q[8][R-d-1]=v:d<9?q[8][15-d-1+1]=v:q[8][15-d-1]=v;if(q[R-8][8]=!l,7<=I){for(var w=t,p=j.getBCHTypeNumber(I),y=0;y<18;y+=1){var m=!w&&1==(p>>y&1);q[Math.floor(y/3)][y%3+R-8-3]=m}for(y=0;y<18;y+=1)m=!w&&1==(p>>y&1),q[y%3+R-8-3][Math.floor(y/3)]=m}for(var B=P=null==P?function(t,r,e){for(var n=z.getRSBlocks(t,r),o=H(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),j.getLengthInBits(a.getMode(),t)),a.write(o)}for(var u=0,i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);for(var f=o,c=n,g=0,l=0,s=0,h=new Array(c.length),d=new Array(c.length),v=0;v<c.length;v+=1){var w=c[v].dataCount,p=c[v].totalCount-w;l=Math.max(l,w),s=Math.max(s,p),h[v]=new Array(w);for(var y=0;y<h[v].length;y+=1)h[v][y]=255&f.getBuffer()[y+g];g+=w;var m=j.getErrorCorrectPolynomial(p),B=F(h[v],m.getLength()-1).mod(m);for(d[v]=new Array(m.getLength()-1),y=0;y<d[v].length;y+=1){var A=y+B.getLength()-d[v].length;d[v][y]=A>=0?B.getAt(A):0}}var k=0;for(y=0;y<c.length;y+=1)k+=c[y].totalCount;var C=new Array(k),b=0;for(y=0;y<l;y+=1)for(v=0;v<c.length;v+=1)y<h[v].length&&(C[b]=h[v][y],b+=1);for(y=0;y<s;y+=1)for(v=0;v<c.length;v+=1)y<d[v].length&&(C[b]=d[v][y],b+=1);return C}(I,T,U):P,s=r,A=-1,k=R-1,C=7,b=0,L=j.getMaskFunction(s),x=R-1;0<x;x-=2)for(6==x&&--x;;){for(var M,D=0;D<2;D+=1)null==q[k][x-D]&&(M=!1,b<B.length&&(M=1==(B[b]>>>C&1)),L(k,x-D)&&(M=!M),q[k][x-D]=M,-1==--C&&(b+=1,C=7));if((k+=A)<0||R<=k){k-=A,A=-A;break}}}function S(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||R<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||R<=r+n||(q[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)}var I=t,T=s[r],q=null,R=0,P=null,U=[],L={},l=(L.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=f(t);break;case"Alphanumeric":e=c(t);break;case"Byte":e=g(t);break;case"Kanji":e=d(t);break;default:throw"mode:"+r}U.push(e),P=null},L.isDark=function(t,r){if(t<0||R<=t||r<0||R<=r)throw t+","+r;return q[t][r]},L.getModuleCount=function(){return R},L.make=function(){if(I<1){for(var t=1;t<40;t++){for(var r=z.getRSBlocks(t,T),e=H(),n=0;n<U.length;n++){var o=U[n];e.put(o.getMode(),4),e.put(o.getLength(),j.getLengthInBits(o.getMode(),t)),o.write(e)}for(var i=0,n=0;n<r.length;n++)i+=r[n].dataCount;if(e.getLengthInBits()<=8*i)break}I=t}a(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){a(!0,e);var n=j.getLostPoint(L);(0==e||n<t)&&(t=n,r=e)}return r}())},L.createTableTag=function(t,r){t=t||2;for(var e=(e=(e=(e="")+'<table style="'+" border-width: 0px; border-style: none;")+" border-collapse: collapse;"+(" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;"))+'">'+"<tbody>",n=0;n<L.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<L.getModuleCount();o+=1)e=(e=(e=(e=(e=(e+='<td style="')+" border-width: 0px; border-style: none;"+" border-collapse: collapse;")+" padding: 0px; margin: 0px;"+(" width: "+t+"px;"))+(" height: "+t+"px;")+" background-color: ")+(L.isDark(n,o)?"#000000":"#ffffff"))+";"+'"/>';e+="</tr>"}return(e+="</tbody>")+"</table>"},L.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;for(var i,a,u=L.getModuleCount()*t+2*r,f="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",c=(c=(c=(c=(c=(c=(c="")+'<svg version="1.1" xmlns="http://www.w3.org/2000/svg"'+(o.scalable?"":' width="'+u+'px" height="'+u+'px"'))+(' viewBox="0 0 '+u+" "+u+'" ')+' preserveAspectRatio="xMinYMin meet"')+(n.text||e.text?' role="img" aria-labelledby="'+l([n.id,e.id].join(" ").trim())+'"':"")+">")+(n.text?'<title id="'+l(n.id)+'">'+l(n.text)+"</title>":""))+(e.text?'<description id="'+l(e.id)+'">'+l(e.text)+"</description>":""))+'<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>'+'<path d="',g=0;g<L.getModuleCount();g+=1)for(a=g*t+r,i=0;i<L.getModuleCount();i+=1)L.isDark(g,i)&&(c+="M"+(i*t+r)+","+a+f);return(c+='" stroke="transparent" fill="black"/>')+"</svg>"},L.createDataURL=function(e,t){e=e||2,t=void 0===t?4*e:t;var r=L.getModuleCount()*e+2*t,n=t,o=r-t;return v(r,r,function(t,r){return n<=t&&t<o&&n<=r&&r<o?(t=Math.floor((t-n)/e),r=Math.floor((r-n)/e),L.isDark(r,t)?0:1):1})},L.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=L.getModuleCount()*t+2*r,o=(o=(o=(o=(o=(o="")+"<img"+' src="')+L.createDataURL(t,r)+'"')+' width="'+n)+'"'+' height="')+n+'"';return(o=e?(o+=' alt="')+l(e)+'"':o)+"/>"},function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r});return L.createASCII=function(t,r){if((t=t||1)<2){var e=r;e=void 0===e?2:e;for(var n,o,i,a,u=+L.getModuleCount()+2*e,f=e,c=u-e,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},s="",h=0;h<u;h+=2){for(o=Math.floor(h-f),i=Math.floor(h+1-f),n=0;n<u;n+=1)a="█",f<=n&&n<c&&f<=h&&h<c&&L.isDark(o,Math.floor(n-f))&&(a=" "),f<=n&&n<c&&f<=h+1&&h+1<c&&L.isDark(i,Math.floor(n-f))?a+=" ":a+="█",s+=(e<1&&c<=h+1?l:g)[a];s+="\n"}return u%2&&0<e?s.substring(0,s.length-u-1)+Array(1+u).join("▀"):s.substring(0,s.length-1)}--t,r=void 0===r?2*t:r;for(var d,v,w,p=L.getModuleCount()*t+2*r,y=r,m=p-r,B=Array(t+1).join("██"),A=Array(t+1).join("  "),k="",C="",b=0;b<p;b+=1){for(v=Math.floor((b-y)/t),C="",d=0;d<p;d+=1)w=1,C+=(w=y<=d&&d<m&&y<=b&&b<m&&L.isDark(v,Math.floor((d-y)/t))?0:w)?B:A;for(v=0;v<t;v+=1)k+=C+"\n"}return k.substring(0,k.length-1)},L.renderTo2dContext=function(t,r){r=r||2;for(var e=L.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=L.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},L}function F(n,o){if(void 0===n.length)throw n.length+"/"+o;var r=function(){for(var t=0;t<n.length&&0==n[t];)t+=1;for(var r=new Array(n.length-t+o),e=0;e<n.length-t;e+=1)r[e]=n[e+t];return r}(),i={getAt:function(t){return r[t]},getLength:function(){return r.length},multiply:function(t){for(var r=new Array(i.getLength()+t.getLength()-1),e=0;e<i.getLength();e+=1)for(var n=0;n<t.getLength();n+=1)r[e+n]^=u.gexp(u.glog(i.getAt(e))+u.glog(t.getAt(n)));return F(r,0)},mod:function(t){if(i.getLength()-t.getLength()<0)return i;for(var r=u.glog(i.getAt(0))-u.glog(t.getAt(0)),e=new Array(i.getLength()),n=0;n<i.getLength();n+=1)e[n]=i.getAt(n);for(n=0;n<t.getLength();n+=1)e[n]^=u.gexp(u.glog(t.getAt(n))+r);return F(e,0).mod(t)}};return i}function k(){var e=[],o={writeByte:function(t){e.push(255&t)},writeShort:function(t){o.writeByte(t),o.writeByte(t>>>8)},writeBytes:function(t,r,e){r=r||0,e=e||t.length;for(var n=0;n<e;n+=1)o.writeByte(t[n+r])},writeString:function(t){for(var r=0;r<t.length;r+=1)o.writeByte(t.charCodeAt(r))},toByteArray:function(){return e},toString:function(){var t="";t+="[";for(var r=0;r<e.length;r+=1)0<r&&(t+=","),t+=e[r];return t+"]"}};return o}w.stringToBytesFuncs["UTF-8"]=function(t){for(var r=t,e=[],n=0;n<r.length;n++){var o=r.charCodeAt(n);o<128?e.push(o):o<2048?e.push(192|o>>6,128|63&o):o<55296||57344<=o?e.push(224|o>>12,128|o>>6&63,128|63&o):(n++,o=65536+((1023&o)<<10|1023&r.charCodeAt(n)),e.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|63&o))}return e},void 0!==(r="function"==typeof(i=function(){return w})?i.apply(r,[]):i)&&(t.exports=r)}},n={};function a(t){if(n[t])return n[t].exports;var r=n[t]={exports:{}};return e[t](r,r.exports,a),r.exports}a.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return a.d(r,{a:r}),r},a.d=(t,r)=>{for(var e in r)a.o(r,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},a.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";var e,t,r,n,o=a(192),o=a.n(o);function i(t,r){t=t.replace(/<%-sURL%>/g,encodeURIComponent(r.sURL)).replace(/<%-sTitle%>/g,r.sTitle).replace(/<%-sDesc%>/g,r.sDesc).replace(/<%-sAuthor%>/g,r.sAuthor).replace(/<%-sImg%>/g,encodeURIComponent(r.sImg));window.open(t)}n=window.location.href,t=document.querySelector("title").innerHTML,r=document.querySelector(".article-entry img")&&document.querySelector(".article-entry img").getAttribute("src"),e={sURL:n,sTitle:t,sImg:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")+r,sDesc:document.querySelector(".article-entry")&&document.querySelector(".article-entry").innerText.substring(0,30)+"...",sAuthor:window.siteMeta.author},(t=document.querySelector(".shareList"))&&(r=n,(n=o()(0,"L")).addData(r),n.make(),document.getElementsByClassName("share-qrcode")[0].innerHTML=n.createImgTag(),t.addEventListener("click",function(t){var r;t.target.getAttribute("data-type")&&(t=t.target.getAttribute("data-type"),r=e,"weibo"===t?i("http://service.weibo.com/share/share.php?url=<%-sURL%>&title=<%-sTitle%>&pic=<%-sImg%>",r):"qzone"===t?i("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=<%-sURL%>&title=<%-sTitle%>&pics=<%-sImg%>&summary=<%-sDesc%>",r):"facebook"===t?i("https://www.facebook.com/sharer/sharer.php?u=<%-sURL%>",r):"twitter"===t&&i("https://twitter.com/intent/tweet?text=<%-sTitle%>&url=<%-sURL%>&via=<%-sAuthor%>",r))}))})()})();