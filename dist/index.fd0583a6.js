var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire3355;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequire3355=n);var i,o,a,s,l,c=n("4AGbv"),u=function(){return"undefined"!=typeof window},d=function(){return i||u()&&(i=window.gsap)&&i.registerPlugin&&i},f=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,p={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},g=function(e){return Math.round(1e4*e)/1e4},h=function(e){return parseFloat(e)||0},v=function(e,t){var r=h(e);return~e.indexOf("%")?r/100*t:r},m=function(e,t){return h(e.getAttribute(t))},y=Math.sqrt,x=function(e,t,r,n,i,o){return y(Math.pow((h(r)-h(e))*i,2)+Math.pow((h(n)-h(t))*o,2))},b=function(e){return console.warn(e)},w=function(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")},S=function(e){if(!(e=o(e)[0]))return 0;var t,r,n,i,a,s,l,c=e.tagName.toLowerCase(),u=e.style,d=1,g=1;w(e)&&(g=e.getScreenCTM(),d=y(g.a*g.a+g.b*g.b),g=y(g.d*g.d+g.c*g.c));try{r=e.getBBox()}catch(e){b("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var h=r||{x:0,y:0,width:0,height:0},v=h.x,S=h.y,T=h.width,k=h.height;if(r&&(T||k)||!p[c]||(T=m(e,p[c][0]),k=m(e,p[c][1]),"rect"!==c&&"line"!==c&&(T*=2,k*=2),"line"===c&&(v=m(e,"x1"),S=m(e,"y1"),T=Math.abs(T-v),k=Math.abs(k-S))),"path"===c)i=u.strokeDasharray,u.strokeDasharray="none",t=e.getTotalLength()||0,d!==g&&b("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(d+g)/2,u.strokeDasharray=i;else if("rect"===c)t=2*T*d+2*k*g;else if("line"===c)t=x(v,S,v+T,S+k,d,g);else if("polyline"===c||"polygon"===c)for(n=e.getAttribute("points").match(f)||[],"polygon"===c&&n.push(n[0],n[1]),t=0,a=2;a<n.length;a+=2)t+=x(n[a-2],n[a-1],n[a],n[a+1],d,g)||0;else"circle"!==c&&"ellipse"!==c||(s=T/2*d,l=k/2*g,t=Math.PI*(3*(s+l)-y((3*s+l)*(s+3*l))));return t||0},T=function(e,t){if(!(e=o(e)[0]))return[0,0];t||(t=S(e)+1);var r=a.getComputedStyle(e),n=r.strokeDasharray||"",i=h(r.strokeDashoffset),s=n.indexOf(",");return s<0&&(s=n.indexOf(" ")),(n=s<0?t:h(n.substr(0,s)))>t&&(n=t),[-i||0,n-i||0]},k=function(){u()&&(document,a=window,l=i=d(),o=i.utils.toArray,s=-1!==((a.navigator||{}).userAgent||"").indexOf("Edge"))},_={version:"3.9.1",name:"drawSVG",register:function(e){i=e,k()},init:function(e,t,r,n,i){if(!e.getBBox)return!1;l||k();var o,c,u,d=S(e);return this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",c=function(e,t,r){var n,i,o=e.indexOf(" ");return o<0?(n=void 0!==r?r+"":e,i=e):(n=e.substr(0,o),i=e.substr(o+1)),(n=v(n,t))>(i=v(i,t))?[i,n]:[n,i]}(t,d,(o=T(e,d))[0]),this._length=g(d),this._dash=g(o[1]-o[0]),this._offset=g(-o[0]),this._dashPT=this.add(this,"_dash",this._dash,g(c[1]-c[0])),this._offsetPT=this.add(this,"_offset",this._offset,g(-c[0])),s&&(u=a.getComputedStyle(e)).strokeLinecap!==u.strokeLinejoin&&(c=h(u.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",c,c+.01)),this._live=w(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),1},render:function(e,t){var r,n,i,o,a=t._pt,s=t._style;if(a){for(t._live&&(r=S(t._target))!==t._length&&(n=r/t._length,t._length=r,t._offsetPT&&(t._offsetPT.s*=n,t._offsetPT.c*=n),t._dashPT?(t._dashPT.s*=n,t._dashPT.c*=n):t._dash*=n);a;)a.r(e,a.d),a=a._next;i=t._dash||e&&1!==e&&1e-4||0,r=t._length-i+.1,o=t._offset,i&&o&&i+Math.abs(o%t._length)>t._length-.2&&(o+=o<0?.1:-.1)&&(r+=.1),s.strokeDashoffset=i?o:o+.001,s.strokeDasharray=r<.2?"none":i?i+"px,"+(t._nowrap?999999:r)+"px":"0px, 999999px"}},getLength:S,getPosition:T};
/*!
 * DrawSVGPlugin 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/function C(){window.scrollTo(0,0)}d()&&i.registerPlugin(_),c.gsap.registerPlugin(_);var O=c.gsap.timeline({delay:.5,onStart:()=>{window.addEventListener("scroll",C)}});sessionStorage.getItem("animationShowed","true")?(document.querySelector(".staggerAnimation").style.display="none",document.querySelector(".animationBcg").style.display="none"):O.fromTo("#CTop",{drawSVG:"0%"},{drawSVG:"100%",duration:1}).fromTo("#CBottom",{drawSVG:"0%"},{drawSVG:"100%",duration:1}).fromTo("#JTop",{drawSVG:"0%"},{drawSVG:"100%",duration:1}).to("#CTop, #CBottom",{fill:"#fff",duration:2}).to("#JTop",{fill:"#ffcd48",duration:2.3,onComplete:()=>{document.querySelector(".wrapper").classList.remove("isLoading")}},"-=2").to(".startAnimationWrapper",{autoAlpha:0,duration:2}).to(".staggerItem",{rotationY:-90,stagger:.1,ease:"power1.out",transformOrigin:"center center"},"-=0.6").to(".staggerAnimation, .animationBcg",{display:"none",onComplete:()=>{sessionStorage.setItem("animationShowed","true"),window.removeEventListener("scroll",C)}}),n("fDzuG");c=n("4AGbv");
/*!
 * ScrollTrigger 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var E,L,P,M,A,B,R,D,I,q,N,z,W,F,V,G,H,U,Y,j,X,J,Z,$,K,Q,ee=1,te=[],re=[],ne=Date.now,ie=ne(),oe=0,ae=1,se=function(e){return e},le=function(e){return I(e)[0]||(ye(e)&&!1!==E.config().nullTargetWarn?console.warn("Element not found:",e):null)},ce=function(e){return Math.round(1e5*e)/1e5||0},ue=function(){return"undefined"!=typeof window},de=function(){return E||ue()&&(E=window.gsap)&&E.registerPlugin&&E},fe=function(e){return!!~R.indexOf(e)},pe=function(e,t){return~te.indexOf(e)&&te[te.indexOf(e)+1][t]},ge=function(e,t){var r=t.s,n=t.sc,i=re.indexOf(e),o=n===Ee.sc?1:2;return!~i&&(i=re.push(e)-1),re[i+o]||(re[i+o]=pe(e,r)||(fe(e)?n:function(t){return arguments.length?e[r]=t:e[r]}))},he=function(e){return pe(e,"getBoundingClientRect")||(fe(e)?function(){return ht.width=P.innerWidth,ht.height=P.innerHeight,ht}:function(){return Me(e)})},ve=function(e,t){var r=t.s,n=t.d2,i=t.d,o=t.a;return(o=pe(e,r="scroll"+n))?o()-he(e)()[i]:fe(e)?(B[r]||A[r])-(P["inner"+n]||A["client"+n]||B["client"+n]):e[r]-e["offset"+n]},me=function(e,t){for(var r=0;r<Y.length;r+=3)(!t||~t.indexOf(Y[r+1]))&&e(Y[r],Y[r+1],Y[r+2])},ye=function(e){return"string"==typeof e},xe=function(e){return"function"==typeof e},be=function(e){return"number"==typeof e},we=function(e){return"object"==typeof e},Se=function(e){return xe(e)&&e()},Te=function(e,t){return function(){var r=Se(e),n=Se(t);return function(){Se(r),Se(n)}}},ke=function(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()},_e=function(e,t){if(e.enabled){var r=t(e);r&&r.totalTime&&(e.callbackAnimation=r)}},Ce=Math.abs,Oe={s:"scrollLeft",p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:function(e){return arguments.length?P.scrollTo(e,Ee.sc()):P.pageXOffset||M.scrollLeft||A.scrollLeft||B.scrollLeft||0}},Ee={s:"scrollTop",p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Oe,sc:function(e){return arguments.length?P.scrollTo(Oe.sc(),e):P.pageYOffset||M.scrollTop||A.scrollTop||B.scrollTop||0}},Le=function(e){return P.getComputedStyle(e)},Pe=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},Me=function(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==Le(e)[V]&&E.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},Ae=function(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0},Be=function(e){var t,r=[],n=e.labels,i=e.duration();for(t in n)r.push(n[t]/i);return r},Re=function(e){var t=E.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort((function(e,t){return e-t}));return r?function(e,n,i){var o;if(void 0===i&&(i=.001),!n)return t(e);if(n>0){for(e-=i,o=0;o<r.length;o++)if(r[o]>=e)return r[o];return r[o-1]}for(o=r.length,e+=i;o--;)if(r[o]<=e)return r[o];return r[0]}:function(r,n,i){void 0===i&&(i=.001);var o=t(r);return!n||Math.abs(o-r)<i||o-r<0==n<0?o:t(n<0?r-e:r+e)}},De=function(e,t,r,n){return r.split(",").forEach((function(r){return e(t,r,n)}))},Ie=function(e,t,r){return e.addEventListener(t,r,{passive:!0})},qe=function(e,t,r){return e.removeEventListener(t,r)},Ne={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ze={toggleActions:"play",anticipatePin:0},We={top:0,left:0,center:.5,bottom:1,right:1},Fe=function(e,t){if(ye(e)){var r=e.indexOf("="),n=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in We?We[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ve=function(e,t,r,n,i,o,a,s){var l=i.startColor,c=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=M.createElement("div"),g=fe(r)||"fixed"===pe(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?B:r,m=-1!==e.indexOf("start"),y=m?l:c,x="border-color:"+y+";font-size:"+u+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((h||s)&&g?"fixed;":"absolute;"),(h||s||!g)&&(x+=(n===Ee?"right":"bottom")+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=m,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=x,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+n.op.d2],Ge(p,0,n,m),p},Ge=function(e,t,r,n){var i={display:"block"},o=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,i[r.a+"Percent"]=n?-100:0,i[r.a]=n?"1px":0,i["border"+o+"Width"]=1,i["border"+a+"Width"]=0,i[r.p]=t+"px",E.set(e,i)},He=[],Ue={},Ye=function(){return ne()-oe>34&&lt()},je=function(){lt(),oe||et("scrollStart"),oe=ne()},Xe=function(){return!W&&!J&&!M.fullscreenElement&&D.restart(!0)},Je={},Ze=[],$e=[],Ke=function(e){var t,r=E.ticker.frame,n=[],i=0;if(K!==r||ee){for(nt();i<$e.length;i+=4)(t=P.matchMedia($e[i]).matches)!==$e[i+3]&&($e[i+3]=t,t?n.push(i):nt(1,$e[i])||xe($e[i+2])&&$e[i+2]());for(rt(),i=0;i<n.length;i++)t=n[i],$=$e[t],$e[t+2]=$e[t+1](e);$=0,L&&ot(0,1),K=r,et("matchMedia")}},Qe=function e(){return qe(bt,"scrollEnd",e)||ot(!0)},et=function(e){return Je[e]&&Je[e].map((function(e){return e()}))||Ze},tt=[],rt=function(e){for(var t=0;t<tt.length;t+=5)e&&tt[t+4]!==e||(tt[t].style.cssText=tt[t+1],tt[t].getBBox&&tt[t].setAttribute("transform",tt[t+2]||""),tt[t+3].uncache=1)},nt=function(e,t){var r;for(G=0;G<He.length;G++)r=He[G],t&&r.media!==t||(e?r.kill(1):r.revert());t&&rt(t),t||et("revert")},it=function(){return re.forEach((function(e){return"function"==typeof e&&(e.rec=0)}))},ot=function(e,t){if(!oe||e){Q=!0;var r=et("refreshInit");j&&bt.sort(),t||nt(),He.forEach((function(e){return e.refresh()})),He.forEach((function(e){return"max"===e.vars.end&&e.setPositions(e.start,ve(e.scroller,e._dir))})),r.forEach((function(e){return e&&e.render&&e.render(-1)})),it(),D.pause(),Q=!1,et("refresh")}else Ie(bt,"scrollEnd",Qe)},at=0,st=1,lt=function(){if(!Q){var e=He.length,t=ne(),r=t-ie>=50,n=e&&He[0].scroll();if(st=at>n?-1:1,at=n,r&&(oe&&!F&&t-oe>200&&(oe=0,et("scrollEnd")),N=ie,ie=t),st<0){for(G=e;G-- >0;)He[G]&&He[G].update(0,r);st=1}else for(G=0;G<e;G++)He[G]&&He[G].update(0,r)}},ct=["left","top","bottom","right","marginBottom","marginRight","marginTop","marginLeft","display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ut=ct.concat(["width","height","boxSizing","maxWidth","maxHeight","position","margin","padding","paddingTop","paddingRight","paddingBottom","paddingLeft"]),dt=function(e,t,r,n){if(e.parentNode!==t){for(var i,o=ct.length,a=t.style,s=e.style;o--;)a[i=ct[o]]=r[i];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s.bottom=s.right=a.flexBasis="auto",a.overflow="visible",a.boxSizing="border-box",a.width=Ae(e,Oe)+"px",a.height=Ae(e,Ee)+"px",a.padding=s.margin=s.top=s.left="0",pt(n),s.width=s.maxWidth=r.width,s.height=s.maxHeight=r.height,s.padding=r.padding,e.parentNode.insertBefore(t,e),t.appendChild(e)}},ft=/([A-Z])/g,pt=function(e){if(e){var t,r,n=e.t.style,i=e.length,o=0;for((e.t._gsap||E.core.getCache(e.t)).uncache=1;o<i;o+=2)r=e[o+1],t=e[o],r?n[t]=r:n[t]&&n.removeProperty(t.replace(ft,"-$1").toLowerCase())}},gt=function(e){for(var t=ut.length,r=e.style,n=[],i=0;i<t;i++)n.push(ut[i],r[ut[i]]);return n.t=e,n},ht={left:0,top:0},vt=function(e,t,r,n,i,o,a,s,l,c,u,d,f){xe(e)&&(e=e(s)),ye(e)&&"max"===e.substr(0,3)&&(e=d+("="===e.charAt(4)?Fe("0"+e.substr(3),r):0));var p,g,h,v=f?f.time():0;if(f&&f.seek(0),be(e))a&&Ge(a,r,n,!0);else{xe(t)&&(t=t(s));var m,y,x,b,w=e.split(" ");h=le(t)||B,(m=Me(h)||{})&&(m.left||m.top)||"none"!==Le(h).display||(b=h.style.display,h.style.display="block",m=Me(h),b?h.style.display=b:h.style.removeProperty("display")),y=Fe(w[0],m[n.d]),x=Fe(w[1]||"0",r),e=m[n.p]-l[n.p]-c+y+i-x,a&&Ge(a,x,n,r-x<20||a._isStart&&x>20),r-=r-x}if(o){var S=e+r,T=o._isStart;p="scroll"+n.d2,Ge(o,S,n,T&&S>20||!T&&(u?Math.max(B[p],A[p]):o.parentNode[p])<=S+1),u&&(l=Me(a),u&&(o.style[n.op.p]=l[n.op.p]-n.op.m-o._offset+"px"))}return f&&h&&(p=Me(h),f.seek(d),g=Me(h),f._caScrollDist=p[n.p]-g[n.p],e=e/f._caScrollDist*d),f&&f.seek(v),f?e:Math.round(e)},mt=/(?:webkit|moz|length|cssText|inset)/i,yt=function(e,t,r,n){if(e.parentNode!==t){var i,o,a=e.style;if(t===B){for(i in e._stOrig=a.cssText,o=Le(e))+i||mt.test(i)||!o[i]||"string"!=typeof a[i]||"0"===i||(a[i]=o[i]);a.top=r,a.left=n}else a.cssText=e._stOrig;E.core.getCache(e).uncache=1,t.appendChild(e)}},xt=function(e,t){var r,n,i=ge(e,t),o="_scroll"+t.p2,a=function t(a,s,l,c,u){var d=t.tween,f=s.onComplete,p={};return d&&d.kill(),r=Math.round(l),s[o]=a,s.modifiers=p,p[o]=function(e){return(e=ce(i()))!==r&&e!==n&&Math.abs(e-r)>2&&Math.abs(e-n)>2?(d.kill(),t.tween=0):e=l+c*d.ratio+u*d.ratio*d.ratio,n=r,r=ce(e)},s.onComplete=function(){t.tween=0,f&&f.call(d)},d=t.tween=E.to(e,s)};return e[o]=i,Ie(e,"wheel",(function(){return a.tween&&a.tween.kill()&&(a.tween=0)})),a};Oe.op=Ee;var bt=function(){function e(t,r){L||e.register(E)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,r)}return e.prototype.init=function(t,r){if(this.progress=this.start=0,this.vars&&this.kill(1),ae){var n,i,o,a,s,l,c,u,d,f,p,g,h,v,m,y,x,b,w,S,T,k,_,C,O,L,R,D,z,V,H,U,Y,J,K,Q,re,ie,ce,ue,de=t=Pe(ye(t)||be(t)||t.nodeType?{trigger:t}:t,ze),me=de.onUpdate,Se=de.toggleClass,Te=de.id,De=de.onToggle,We=de.onRefresh,Ge=de.scrub,Ye=de.trigger,Je=de.pin,Ze=de.pinSpacing,$e=de.invalidateOnRefresh,Ke=de.anticipatePin,et=de.onScrubComplete,tt=de.onSnapComplete,rt=de.once,nt=de.snap,it=de.pinReparent,ot=de.pinSpacer,at=de.containerAnimation,lt=de.fastScrollEnd,ct=de.preventOverlaps,ut=t.horizontal||t.containerAnimation&&!1!==t.horizontal?Oe:Ee,ft=!Ge&&0!==Ge,mt=le(t.scroller||P),bt=E.core.getCache(mt),wt=fe(mt),St="fixed"===("pinType"in t?t.pinType:pe(mt,"pinType")||wt&&"fixed"),Tt=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],kt=ft&&t.toggleActions.split(" "),_t="markers"in t?t.markers:ze.markers,Ct=wt?0:parseFloat(Le(mt)["border"+ut.p2+"Width"])||0,Ot=this,Et=t.onRefreshInit&&function(){return t.onRefreshInit(Ot)},Lt=function(e,t,r){var n=r.d,i=r.d2,o=r.a;return(o=pe(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?P["inner"+i]:e["client"+i])||0}}(mt,wt,ut),Pt=function(e,t){return!t||~te.indexOf(e)?he(e):function(){return ht}}(mt,wt),Mt=0,At=ge(mt,ut);if(Ot.media=$,Ot._dir=ut,Ke*=45,Ot.scroller=mt,Ot.scroll=at?at.time.bind(at):At,a=At(),Ot.vars=t,r=r||t.animation,"refreshPriority"in t&&(j=1),bt.tweenScroll=bt.tweenScroll||{top:xt(mt,Ee),left:xt(mt,Oe)},Ot.tweenTo=n=bt.tweenScroll[ut.p],r&&(r.vars.lazy=!1,r._initted||!1!==r.vars.immediateRender&&!1!==t.immediateRender&&r.render(0,!0,!0),Ot.animation=r.pause(),r.scrollTrigger=Ot,(H=be(Ge)&&Ge)&&(V=E.to(r,{ease:"power3",duration:H,onComplete:function(){return et&&et(Ot)}})),D=0,Te||(Te=r.vars.id)),He.push(Ot),nt&&(we(nt)&&!nt.push||(nt={snapTo:nt}),"scrollBehavior"in B.style&&E.set(wt?[B,A]:mt,{scrollBehavior:"auto"}),o=xe(nt.snapTo)?nt.snapTo:"labels"===nt.snapTo?function(e){return function(t){return E.utils.snap(Be(e),t)}}(r):"labelsDirectional"===nt.snapTo?(ie=r,function(e,t){return Re(Be(ie))(e,t.direction)}):!1!==nt.directional?function(e,t){return Re(nt.snapTo)(e,t.direction)}:E.utils.snap(nt.snapTo),U=nt.duration||{min:.1,max:2},U=we(U)?q(U.min,U.max):q(U,U),Y=E.delayedCall(nt.delay||H/2||.1,(function(){if(Math.abs(Ot.getVelocity())<10&&!F&&Mt!==At()){var e=r&&!ft?r.totalProgress():Ot.progress,t=(e-z)/(ne()-N)*1e3||0,i=E.utils.clamp(-Ot.progress,1-Ot.progress,Ce(t/2)*t/.185),a=Ot.progress+(!1===nt.inertia?0:i),s=q(0,1,o(a,Ot)),u=At(),d=Math.round(l+s*h),f=nt,p=f.onStart,g=f.onInterrupt,v=f.onComplete,m=n.tween;if(u<=c&&u>=l&&d!==u){if(m&&!m._initted&&m.data<=Ce(d-u))return;!1===nt.inertia&&(i=s-Ot.progress),n(d,{duration:U(Ce(.185*Math.max(Ce(a-e),Ce(s-e))/t/.05||0)),ease:nt.ease||"power3",data:Ce(d-u),onInterrupt:function(){return Y.restart(!0)&&g&&g(Ot)},onComplete:function(){Ot.update(),Mt=At(),D=z=r&&!ft?r.totalProgress():Ot.progress,tt&&tt(Ot),v&&v(Ot)}},u,i*h,d-u-i*h),p&&p(Ot,n.tween)}}else Ot.isActive&&Y.restart(!0)})).pause()),Te&&(Ue[Te]=Ot),Ye=Ot.trigger=le(Ye||Je),Je=!0===Je?Ye:le(Je),ye(Se)&&(Se={targets:Ye,className:Se}),Je&&(!1===Ze||"margin"===Ze||(Ze=!(!Ze&&"flex"===Le(Je.parentNode).display)&&"padding"),Ot.pin=Je,!1!==t.force3D&&E.set(Je,{force3D:!0}),(i=E.core.getCache(Je)).spacer?v=i.pinState:(ot&&((ot=le(ot))&&!ot.nodeType&&(ot=ot.current||ot.nativeElement),i.spacerIsNative=!!ot,ot&&(i.spacerState=gt(ot))),i.spacer=x=ot||M.createElement("div"),x.classList.add("pin-spacer"),Te&&x.classList.add("pin-spacer-"+Te),i.pinState=v=gt(Je)),Ot.spacer=x=i.spacer,R=Le(Je),_=R[Ze+ut.os2],w=E.getProperty(Je),S=E.quickSetter(Je,ut.a,"px"),dt(Je,x,R),y=gt(Je)),_t&&(g=we(_t)?Pe(_t,Ne):Ne,f=Ve("scroller-start",Te,mt,ut,g,0),p=Ve("scroller-end",Te,mt,ut,g,0,f),b=f["offset"+ut.op.d2],u=Ve("start",Te,mt,ut,g,b,0,at),d=Ve("end",Te,mt,ut,g,b,0,at),at&&(re=E.quickSetter([u,d],ut.a,"px")),St||te.length&&!0===pe(mt,"fixedMarkers")||(ue=Le(ce=wt?B:mt).position,ce.style.position="absolute"===ue||"fixed"===ue?ue:"relative",E.set([f,p],{force3D:!0}),O=E.quickSetter(f,ut.a,"px"),L=E.quickSetter(p,ut.a,"px"))),at){var Bt=at.vars.onUpdate,Rt=at.vars.onUpdateParams;at.eventCallback("onUpdate",(function(){Ot.update(0,0,1),Bt&&Bt.apply(Rt||[])}))}Ot.previous=function(){return He[He.indexOf(Ot)-1]},Ot.next=function(){return He[He.indexOf(Ot)+1]},Ot.revert=function(e){var t=!1!==e||!Ot.enabled,n=W;t!==Ot.isReverted&&(t&&(Ot.scroll.rec||(Ot.scroll.rec=At()),K=Math.max(At(),Ot.scroll.rec||0),J=Ot.progress,Q=r&&r.progress()),u&&[u,d,f,p].forEach((function(e){return e.style.display=t?"none":"block"})),t&&(W=1),Ot.update(t),W=n,Je&&(t?function(e,t,r){pt(r);var n=e._gsap;if(n.spacerIsNative)pt(n.spacerState);else if(e.parentNode===t){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}}(Je,x,v):(!it||!Ot.isActive)&&dt(Je,x,Le(Je),C)),Ot.isReverted=t)},Ot.refresh=function(n,i){if(!W&&Ot.enabled||i)if(Je&&n&&oe)Ie(e,"scrollEnd",Qe);else{W=1,V&&V.pause(),$e&&r&&r.time(-.01,!0).invalidate(),Ot.isReverted||Ot.revert();for(var o,g,b,S,_,O,L,P,M,A,R=Lt(),D=Pt(),I=at?at.duration():ve(mt,ut),q=0,N=0,z=t.end,F=t.endTrigger||Ye,G=t.start||(0!==t.start&&Ye?Je?"0 0":"0 100%":0),H=t.pinnedContainer&&le(t.pinnedContainer),U=Ye&&Math.max(0,He.indexOf(Ot))||0,Y=U;Y--;)(O=He[Y]).end||O.refresh(0,1)||(W=1),!(L=O.pin)||L!==Ye&&L!==Je||O.isReverted||(A||(A=[]),A.unshift(O),O.revert());for(xe(G)&&(G=G(Ot)),l=vt(G,Ye,R,ut,At(),u,f,Ot,D,Ct,St,I,at)||(Je?-.001:0),xe(z)&&(z=z(Ot)),ye(z)&&!z.indexOf("+=")&&(~z.indexOf(" ")?z=(ye(G)?G.split(" ")[0]:"")+z:(q=Fe(z.substr(2),R),z=ye(G)?G:l+q,F=Ye)),c=Math.max(l,vt(z||(F?"100% 0":I),F,R,ut,At()+q,d,p,Ot,D,Ct,St,I,at))||-.001,h=c-l||(l-=.01)&&.001,q=0,Y=U;Y--;)(L=(O=He[Y]).pin)&&O.start-O._pinPush<l&&!at&&(o=O.end-O.start,L!==Ye&&L!==H||be(G)||(q+=o*(1-O.progress)),L===Je&&(N+=o));if(l+=q,c+=q,Ot._pinPush=N,u&&q&&((o={})[ut.a]="+="+q,H&&(o[ut.p]="-="+At()),E.set([u,d],o)),Je)o=Le(Je),S=ut===Ee,b=At(),T=parseFloat(w(ut.a))+N,!I&&c>1&&((wt?B:mt).style["overflow-"+ut.a]="scroll"),dt(Je,x,o),y=gt(Je),g=Me(Je,!0),P=St&&ge(mt,S?Oe:Ee)(),Ze&&((C=[Ze+ut.os2,h+N+"px"]).t=x,(Y="padding"===Ze?Ae(Je,ut)+h+N:0)&&C.push(ut.d,Y+"px"),pt(C),St&&At(K)),St&&((_={top:g.top+(S?b-l:P)+"px",left:g.left+(S?P:b-l)+"px",boxSizing:"border-box",position:"fixed"}).width=_.maxWidth=Math.ceil(g.width)+"px",_.height=_.maxHeight=Math.ceil(g.height)+"px",_.margin=_.marginTop=_.marginRight=_.marginBottom=_.marginLeft="0",_.padding=o.padding,_.paddingTop=o.paddingTop,_.paddingRight=o.paddingRight,_.paddingBottom=o.paddingBottom,_.paddingLeft=o.paddingLeft,m=function(e,t,r){for(var n,i=[],o=e.length,a=r?8:0;a<o;a+=2)n=e[a],i.push(n,n in t?t[n]:e[a+1]);return i.t=e.t,i}(v,_,it)),r?(M=r._initted,X(1),r.render(r.duration(),!0,!0),k=w(ut.a)-T+h+N,h!==k&&m.splice(m.length-2,2),r.render(0,!0,!0),M||r.invalidate(),X(0)):k=h;else if(Ye&&At()&&!at)for(g=Ye.parentNode;g&&g!==B;)g._pinOffset&&(l-=g._pinOffset,c-=g._pinOffset),g=g.parentNode;A&&A.forEach((function(e){return e.revert(!1)})),Ot.start=l,Ot.end=c,a=s=At(),at||(a<K&&At(K),Ot.scroll.rec=0),Ot.revert(!1),W=0,r&&ft&&r._initted&&r.progress()!==Q&&r.progress(Q,!0).render(r.time(),!0,!0),(J!==Ot.progress||at)&&(r&&!ft&&r.totalProgress(J,!0),Ot.progress=J,Ot.update(0,0,1)),Je&&Ze&&(x._pinOffset=Math.round(Ot.progress*k)),We&&We(Ot)}},Ot.getVelocity=function(){return(At()-s)/(ne()-N)*1e3||0},Ot.endAnimation=function(){ke(Ot.callbackAnimation),r&&(V?V.progress(1):r.paused()?ft||ke(r,Ot.direction<0,1):ke(r,r.reversed()))},Ot.labelToScroll=function(e){return r&&r.labels&&(l||Ot.refresh()||l)+r.labels[e]/r.duration()*h||0},Ot.getTrailing=function(e){var t=He.indexOf(Ot),r=Ot.direction>0?He.slice(0,t).reverse():He.slice(t+1);return ye(e)?r.filter((function(t){return t.vars.preventOverlaps===e})):r},Ot.update=function(e,t,i){if(!at||i||e){var o,u,d,p,g,v,b,w=Ot.scroll(),C=e?0:(w-l)/h,E=C<0?0:C>1?1:C||0,P=Ot.progress;if(t&&(s=a,a=at?At():w,nt&&(z=D,D=r&&!ft?r.totalProgress():E)),Ke&&!E&&Je&&!W&&!ee&&oe&&l<w+(w-s)/(ne()-N)*Ke&&(E=1e-4),E!==P&&Ot.enabled){if(p=(g=(o=Ot.isActive=!!E&&E<1)!==(!!P&&P<1))||!!E!=!!P,Ot.direction=E>P?1:-1,Ot.progress=E,p&&!W&&(u=E&&!P?0:1===E?1:1===P?2:3,ft&&(d=!g&&"none"!==kt[u+1]&&kt[u+1]||kt[u],b=r&&("complete"===d||"reset"===d||d in r))),ct&&g&&(b||Ge||!r)&&(xe(ct)?ct(Ot):Ot.getTrailing(ct).forEach((function(e){return e.endAnimation()}))),ft||(!V||W||ee?r&&r.totalProgress(E,!!W):(V.vars.totalProgress=E,V.invalidate().restart())),Je)if(e&&Ze&&(x.style[Ze+ut.os2]=_),St){if(p){if(v=!e&&E>P&&c+1>w&&w+1>=ve(mt,ut),it)if(e||!o&&!v)yt(Je,x);else{var M=Me(Je,!0),A=w-l;yt(Je,B,M.top+(ut===Ee?A:0)+"px",M.left+(ut===Ee?0:A)+"px")}pt(o||v?m:y),k!==h&&E<1&&o||S(T+(1!==E||v?0:k))}}else S(T+k*E);nt&&!n.tween&&!W&&!ee&&Y.restart(!0),Se&&(g||rt&&E&&(E<1||!Z))&&I(Se.targets).forEach((function(e){return e.classList[o||rt?"add":"remove"](Se.className)})),me&&!ft&&!e&&me(Ot),p&&!W?(ft&&(b&&("complete"===d?r.pause().totalProgress(1):"reset"===d?r.restart(!0).pause():"restart"===d?r.restart(!0):r[d]()),me&&me(Ot)),!g&&Z||(De&&g&&_e(Ot,De),Tt[u]&&_e(Ot,Tt[u]),rt&&(1===E?Ot.kill(!1,1):Tt[u]=0),g||Tt[u=1===E?1:3]&&_e(Ot,Tt[u])),lt&&!o&&Math.abs(Ot.getVelocity())>(be(lt)?lt:2500)&&(ke(Ot.callbackAnimation),V?V.progress(1):ke(r,!E,1))):ft&&me&&!W&&me(Ot)}if(L){var R=at?w/at.duration()*(at._caScrollDist||0):w;O(R+(f._isFlipped?1:0)),L(R)}re&&re(-w/at.duration()*(at._caScrollDist||0))}},Ot.enable=function(t,r){Ot.enabled||(Ot.enabled=!0,Ie(mt,"resize",Xe),Ie(mt,"scroll",je),Et&&Ie(e,"refreshInit",Et),!1!==t&&(Ot.progress=J=0,a=s=Mt=At()),!1!==r&&Ot.refresh())},Ot.getTween=function(e){return e&&n?n.tween:V},Ot.setPositions=function(e,t){Je&&(T+=e-l,k+=t-e-h),Ot.start=l=e,Ot.end=c=t,h=t-e,Ot.update()},Ot.disable=function(t,r){if(Ot.enabled&&(!1!==t&&Ot.revert(),Ot.enabled=Ot.isActive=!1,r||V&&V.pause(),K=0,i&&(i.uncache=1),Et&&qe(e,"refreshInit",Et),Y&&(Y.pause(),n.tween&&n.tween.kill()&&(n.tween=0)),!wt)){for(var o=He.length;o--;)if(He[o].scroller===mt&&He[o]!==Ot)return;qe(mt,"resize",Xe),qe(mt,"scroll",je)}},Ot.kill=function(e,t){Ot.disable(e,t),V&&V.kill(),Te&&delete Ue[Te];var n=He.indexOf(Ot);n>=0&&He.splice(n,1),n===G&&st>0&&G--,n=0,He.forEach((function(e){return e.scroller===Ot.scroller&&(n=1)})),n||(Ot.scroll.rec=0),r&&(r.scrollTrigger=null,e&&r.render(-1),t||r.kill()),u&&[u,d,f,p].forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),Je&&(i&&(i.uncache=1),n=0,He.forEach((function(e){return e.pin===Je&&n++})),n||(i.spacer=0))},Ot.enable(!1,!1),r&&r.add&&!h?E.delayedCall(.01,(function(){return l||c||Ot.refresh()}))&&(h=.01)&&(l=c=0):Ot.refresh()}else this.update=this.refresh=this.kill=se},e.register=function(t){if(!L&&(E=t||de(),ue()&&window.document&&(P=window,M=document,A=M.documentElement,B=M.body),E&&(I=E.utils.toArray,q=E.utils.clamp,X=E.core.suppressOverwrites||se,E.core.globals("ScrollTrigger",e),B))){Ie(P,"wheel",je),R=[P,M,A,B],Ie(M,"scroll",je);var r,n=B.style,i=n.borderTopStyle;n.borderTopStyle="solid",r=Me(B),Ee.m=Math.round(r.top+Ee.sc())||0,Oe.m=Math.round(r.left+Oe.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),z=setInterval(Ye,200),E.delayedCall(.5,(function(){return ee=0})),Ie(M,"touchcancel",se),Ie(B,"touchstart",se),De(Ie,M,"pointerdown,touchstart,mousedown",(function(){return F=1})),De(Ie,M,"pointerup,touchend,mouseup",(function(){return F=0})),V=E.utils.checkPrefix("transform"),ut.push(V),L=ne(),D=E.delayedCall(.2,ot).pause(),Y=[M,"visibilitychange",function(){var e=P.innerWidth,t=P.innerHeight;M.hidden?(H=e,U=t):H===e&&U===t||Xe()},M,"DOMContentLoaded",ot,P,"load",function(){return oe||ot()},P,"resize",Xe],me(Ie)}return L},e.defaults=function(e){if(e)for(var t in e)ze[t]=e[t];return ze},e.kill=function(){ae=0,He.slice(0).forEach((function(e){return e.kill(1)}))},e.config=function(e){"limitCallbacks"in e&&(Z=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(z)||(z=t)&&setInterval(Ye,t),"autoRefreshEvents"in e&&(me(qe)||me(Ie,e.autoRefreshEvents||"none"),J=-1===(e.autoRefreshEvents+"").indexOf("resize"))},e.scrollerProxy=function(e,t){var r=le(e),n=re.indexOf(r),i=fe(r);~n&&re.splice(n,i?6:2),t&&(i?te.unshift(P,t,B,t,A,t):te.unshift(r,t))},e.matchMedia=function(e){var t,r,n,i,o;for(r in e)n=$e.indexOf(r),i=e[r],$=r,"all"===r?i():(t=P.matchMedia(r))&&(t.matches&&(o=i()),~n?($e[n+1]=Te($e[n+1],i),$e[n+2]=Te($e[n+2],o)):(n=$e.length,$e.push(r,i,o),t.addListener?t.addListener(Ke):t.addEventListener("change",Ke)),$e[n+3]=t.matches),$=0;return $e},e.clearMatchMedia=function(e){e||($e.length=0),(e=$e.indexOf(e))>=0&&$e.splice(e,4)},e.isInViewport=function(e,t,r){var n=(ye(e)?le(e):e).getBoundingClientRect(),i=n[r?"width":"height"]*t||0;return r?n.right-i>0&&n.left+i<P.innerWidth:n.bottom-i>0&&n.top+i<P.innerHeight},e.positionInViewport=function(e,t,r){ye(e)&&(e=le(e));var n=e.getBoundingClientRect(),i=n[r?"width":"height"],o=null==t?i/2:t in We?We[t]*i:~t.indexOf("%")?parseFloat(t)*i/100:parseFloat(t)||0;return r?(n.left+o)/P.innerWidth:(n.top+o)/P.innerHeight},e}();bt.version="3.9.1",bt.saveStyles=function(e){return e?I(e).forEach((function(e){if(e&&e.style){var t=tt.indexOf(e);t>=0&&tt.splice(t,5),tt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),E.core.getCache(e),$)}})):tt},bt.revert=function(e,t){return nt(!e,t)},bt.create=function(e,t){return new bt(e,t)},bt.refresh=function(e){return e?Xe():(L||bt.register())&&ot(!0)},bt.update=lt,bt.clearScrollMemory=it,bt.maxScroll=function(e,t){return ve(e,t?Oe:Ee)},bt.getScrollFunc=function(e,t){return ge(le(e),t?Oe:Ee)},bt.getById=function(e){return Ue[e]},bt.getAll=function(){return He.slice(0)},bt.isScrolling=function(){return!!oe},bt.snapDirectional=Re,bt.addEventListener=function(e,t){var r=Je[e]||(Je[e]=[]);~r.indexOf(t)||r.push(t)},bt.removeEventListener=function(e,t){var r=Je[e],n=r&&r.indexOf(t);n>=0&&r.splice(n,1)},bt.batch=function(e,t){var r,n=[],i={},o=t.interval||.016,a=t.batchMax||1e9,s=function(e,t){var r=[],n=[],i=E.delayedCall(o,(function(){t(r,n),r=[],n=[]})).pause();return function(e){r.length||i.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&i.progress(1)}};for(r in t)i[r]="on"===r.substr(0,2)&&xe(t[r])&&"onRefreshInit"!==r?s(0,t[r]):t[r];return xe(a)&&(a=a(),Ie(bt,"refresh",(function(){return a=t.batchMax()}))),I(e).forEach((function(e){var t={};for(r in i)t[r]=i[r];t.trigger=e,n.push(bt.create(t))})),n},bt.sort=function(e){return He.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},de()&&E.registerPlugin(bt),c.default.registerPlugin(bt),setTimeout((()=>{c.default.to(".burgerMenu",{paddingTop:"0px",backgroundColor:"rgba(255, 255, 255, 0.1)",scrollTrigger:{trigger:"nav",start:"top",scrub:.3}}),c.default.to(".goBack",{opacity:1,delay:1,duration:3,scrollTrigger:{trigger:".section5",start:"top 20%"}})}),7e3),c.default.to(".cookieConsent",{opacity:0,scrollTrigger:{trigger:"textarea",start:"top",markers:!0,scrub:.1}}),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".left"),t=document.querySelector(".right"),r=[...document.querySelectorAll(".testimonial")];let n=!0,i=null,o=null;function a(e){if(n){n=!1,i=document.querySelector(".active");const t=r.indexOf(i);e?(o=r[(t+1)%r.length],i.classList.add("moveOutLeft"),o.classList.add("moveInRight","active")):(o=r[(t-1+r.length)%r.length],i.classList.add("moveOutRight"),o.classList.add("moveInLeft","active"))}}r.forEach((e=>{e.addEventListener("animationend",(()=>{i&&!n&&(n=!0,i.className="testimonial")}))})),t.addEventListener("click",(()=>{a(!0)})),e.addEventListener("click",(()=>{a(!1)})),r.forEach((e=>{e.setAttribute("style","animation-duration: 900ms")}))}));var wt=function(e,t,r,n){return(e/=n/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t},St="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt=function(){var e=void 0,t=void 0,r=void 0,n=void 0,i=void 0,o=void 0,a=void 0,s=void 0,l=void 0,c=void 0,u=void 0,d=void 0;function f(){return window.scrollY||window.pageYOffset}function p(e){return e.getBoundingClientRect().top+t}function g(r){l||(l=r),u=i(c=r-l,t,a,s),window.scrollTo(0,u),c<s?window.requestAnimationFrame(g):function(){window.scrollTo(0,t+a),e&&o&&(e.setAttribute("tabindex","-1"),e.focus());"function"==typeof d&&d();l=!1}()}return function(l){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(s=c.duration||1e3,n=c.offset||0,d=c.callback,i=c.easing||wt,o=c.a11y||!1,t=f(),void 0===l?"undefined":St(l)){case"number":e=void 0,o=!1,r=t+l;break;case"object":r=p(e=l);break;case"string":e=document.querySelector(l),r=p(e)}switch(a=r-t+n,St(c.duration)){case"number":s=c.duration;break;case"function":s=c.duration(a)}window.requestAnimationFrame(g)}}();document.querySelector(".goBack").addEventListener("click",(()=>{Tt("#scrollUP")})),document.querySelector(".heroText a").addEventListener("click",(()=>{Tt("#portfolio")})),document.querySelector(".portfolioToContact").addEventListener("click",(()=>{Tt("#contact")})),(c=n("4AGbv")).gsap.registerPlugin(_),c.gsap.timeline({delay:9}).set("#indicatorDot",{opacity:0},"-=10").fromTo("#indicatorFrame",{drawSVG:0},{drawSVG:100,duration:1.3}).fromTo("#indicatorDot",{y:0,opacity:1},{y:10,duration:2,opacity:0,repeat:-1},"+=.8");
//# sourceMappingURL=index.fd0583a6.js.map
