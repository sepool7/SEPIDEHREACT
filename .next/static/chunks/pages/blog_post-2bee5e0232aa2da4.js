(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[353],{3184:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog_post",function(){return t(1848)}])},638:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t(6856).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=r.default,i={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(s(e,Promise)?i.loader=function(){return e}:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=n({},i,e)),(i=n({},i,a)).loadableGenerated&&delete(i=n({},i,i.loadableGenerated)).loadableGenerated,"boolean"==typeof i.ssr&&!i.suspense){if(!i.ssr)return delete i.ssr,l(t,i);delete i.ssr}return t(i)},a.noSSR=l;var n=t(6495).Z,i=t(2648).Z,r=(i(t(7294)),i(t(4302)));function l(e,a){return delete a.webpack,delete a.modules,e(a)}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},6319:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.LoadableContext=void 0;var s=(0,t(2648).Z)(t(7294)).default.createContext(null);a.LoadableContext=s},4302:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t(9658).Z,n=t(7222).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=t(6495).Z,r=(0,t(2648).Z)(t(7294)),l=t(6319),o=t(7294).useSyncExternalStore,d=[],c=[],u=!1;function h(e){var a=e(),t={loading:!0,loaded:null,error:null};return t.promise=a.then(function(e){return t.loading=!1,t.loaded=e,e}).catch(function(e){throw t.loading=!1,t.error=e,e}),t}var f=function(){function e(a,t){s(this,e),this._loadFn=a,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return n(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var a=this._res,t=this._opts;a.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},t.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(a){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var a=this;return this._callbacks.add(e),function(){a._callbacks.delete(e)}}}]),e}();function m(e){return function(e,a){var t=function(){if(!m){var a=new f(e,h);m={getCurrentValue:a.getCurrentValue.bind(a),subscribe:a.subscribe.bind(a),retry:a.retry.bind(a),promise:a.promise.bind(a)}}return m.promise()},s=function(){t();var e=r.default.useContext(l.LoadableContext);e&&Array.isArray(h.modules)&&h.modules.forEach(function(a){e(a)})},n=function(e,a){s();var t=o(m.subscribe,m.getCurrentValue,m.getCurrentValue);return r.default.useImperativeHandle(a,function(){return{retry:m.retry}},[]),r.default.useMemo(function(){var a;return t.loading||t.error?r.default.createElement(h.loading,{isLoading:t.loading,pastDelay:t.pastDelay,timedOut:t.timedOut,error:t.error,retry:m.retry}):t.loaded?r.default.createElement((a=t.loaded)&&a.__esModule?a.default:a,e):null},[e,t])},d=function(e,a){return s(),r.default.createElement(h.lazy,i({},e,{ref:a}))},h=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},a);h.suspense&&(h.lazy=r.default.lazy(h.loader));var m=null;if(!u){var p=h.webpack?h.webpack():h.modules;p&&c.push(function(e){var a=!0,s=!1,n=void 0;try{for(var i,r=p[Symbol.iterator]();!(a=(i=r.next()).done);a=!0){var l=i.value;if(-1!==e.indexOf(l))return t()}}catch(o){s=!0,n=o}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}})}var $=h.suspense?d:n;return $.preload=function(){return t()},$.displayName="LoadableComponent",r.default.forwardRef($)}(h,e)}function p(e,a){for(var t=[];e.length;){var s=e.pop();t.push(s(a))}return Promise.all(t).then(function(){if(e.length)return p(e,a)})}m.preloadAll=function(){return new Promise(function(e,a){p(d).then(e,a)})},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(a){var t=function(){return u=!0,a()};p(c,e).then(t,t)})},window.__NEXT_PRELOADREADY=m.preloadReady,a.default=m},1848:function(e,a,t){"use strict";t.r(a);var s=t(5893),n=t(2745);t(7294);var i=t(4423);t(1664),t(5152);var r=function(){return(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(n.kU,{pageName:"Two Before Arrow Not Relied",typingData:["<span class='typed-bread'><a href='#'>Design</a> / 20 July 2020</span>",],bannerImg:"images/blog/blog_4.jpg"}),(0,s.jsx)("div",{className:"section blog",children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)("div",{className:"post",children:(0,s.jsxs)("div",{className:"content-box",children:[(0,s.jsxs)("div",{className:"single-post-text",children:[(0,s.jsx)("p",{children:"So striking at of to welcomed resolved. Northward by described up household therefore attention. Excellence decisively nay man yet impression for contrasted remarkably."}),(0,s.jsx)("p",{children:"Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old."}),(0,s.jsx)("blockquote",{children:(0,s.jsx)("p",{children:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque suscipit."})}),(0,s.jsxs)("p",{children:["Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on. Increasing ",(0,s.jsx)("a",{href:"#",children:"link"})," sufficient everything men him admiration unpleasing ."]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Greatest properly off ham exercise all."}),(0,s.jsx)("li",{children:"Unsatiable invitation its possession nor off."}),(0,s.jsx)("li",{children:"All difficulty estimating unreserved increasing the solicitude."})]}),(0,s.jsx)("p",{children:"Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of."})]}),(0,s.jsxs)("div",{className:"post-text-bottom",children:[(0,s.jsxs)("div",{className:"social-share",children:[(0,s.jsx)("span",{children:"Share:"}),(0,s.jsx)("a",{className:"share-btn share-btn-facebook share-btn-1",title:"Share on Facebook",children:(0,s.jsx)("i",{className:"fab fa-facebook"})}),(0,s.jsx)("a",{className:"share-btn share-btn-twitter share-btn-2",title:"Share on Twitter",children:(0,s.jsx)("i",{className:"fab fa-twitter"})}),(0,s.jsx)("a",{className:"share-btn share-btn-linkedin share-btn-3",title:"Share on Linkedin",children:(0,s.jsx)("i",{className:"fab fa-linkedin"})}),(0,s.jsx)("a",{className:"share-btn share-btn-reddit share-btn-4",title:"Share on Reddit",children:(0,s.jsx)("i",{className:"fab fa-reddit"})}),(0,s.jsx)("a",{className:"share-btn share-btn-linkedin share-btn-5",title:"Share on linkedin",children:(0,s.jsx)("i",{className:"fab fa-linkedin"})})]}),(0,s.jsxs)("div",{className:"cat-links",children:[(0,s.jsx)("span",{children:"Posted in "}),(0,s.jsx)("a",{href:"/categories/design",children:"Design"}),(0,s.jsxs)("span",{className:"byline",children:[" / by ",(0,s.jsx)("span",{className:"author",children:"Ryan Adlard"})]})]}),(0,s.jsxs)("div",{className:"tags-links",children:[(0,s.jsx)("span",{children:"Tags:"}),(0,s.jsx)("a",{href:"/tags/code",rel:"tag",children:"code"})]})]})]})}),(0,s.jsx)("nav",{className:"navigation post-navigation",children:(0,s.jsxs)("div",{className:"nav-links",children:[(0,s.jsx)("div",{className:"nav-previous",children:(0,s.jsx)("a",{href:"#",title:"Design in Mobile Application",children:(0,s.jsx)("span",{className:"post-nav-next post-nav-text",children:"Prev"})})}),(0,s.jsx)("div",{className:"nav-next",children:(0,s.jsx)("a",{href:"#",title:"By spite about do of do allow blush",children:(0,s.jsx)("span",{className:"post-nav-prev post-nav-text",children:"Next"})})})]})}),(0,s.jsx)("div",{className:"clear"})]})})]})};a.default=r},2745:function(e,a,t){"use strict";t.d(a,{HN:function(){return c},Y0:function(){return u},bK:function(){return o},kU:function(){return d}});var s=t(5893),n=t(7294),i=t(9911),r=function(e){var a=e.typingData,t=e.extraClass,r=(0,n.useRef)(null);return(0,n.useEffect)(function(){setTimeout(function(){var e=new i.Z(r.current,{strings:a||["I code cool <strong>websites</strong>","I develop <strong>web3 Dapps</strong>","I am expert in <strong>public and Private Blockchains</strong>",],typeSpeed:100,backSpeed:100,backDelay:100,smartBackspace:!0,loop:!1,showCursor:!1});return function(){e.destroy()}},2e3)},[]),(0,s.jsx)("div",{className:"h-subtitles ready",children:(0,s.jsx)("span",{className:t,ref:r})})},l=function(e){var a=e.pageName,t=e.pageTitle,i=e.typingData,l=e.extraClass;return(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)("div",{className:"centrize full-width",children:(0,s.jsx)("div",{className:"vertical-center",children:(0,s.jsxs)("div",{className:"started-content",children:[(0,s.jsx)("h1",{className:"h-title",children:t||a}),(0,s.jsx)(r,{typingData:i,extraClass:l})]})})}),(0,s.jsx)("a",{href:"#next_section",className:"mouse_btn",children:(0,s.jsx)("span",{className:"icon fas fa-chevron-down"})})]})},o=function(e){var a=e.pageName,t=e.pageTitle,n=e.typingData;return e.extraClass,(0,s.jsxs)("div",{className:"section started section-title",id:"section-started",children:[(0,s.jsxs)("div",{className:"video-bg",children:[(0,s.jsx)("div",{className:"video-bg-mask"}),(0,s.jsx)("div",{className:"video-bg-texture",id:"grained_container"})]}),(0,s.jsx)(l,{typingData:n,pageName:a,pageTitle:t})]})},d=function(e){var a=e.pageName,i=e.pageTitle,r=e.typingData,o=e.extraClass,d=e.bannerImg;return(0,n.useEffect)(function(){var e=t(1014),a=e.jarallax;(0,e.jarallaxVideo)(),a(document.querySelectorAll(".jarallax"),{speed:.5,keepImg:!0,automaticResize:!0,videoVolume:0})},[]),(0,s.jsxs)("div",{className:"section started section-title",id:"section-started",children:[(0,s.jsxs)("div",{className:"video-bg jarallax",style:{backgroundImage:"url(".concat(d||"images/resume_bg.jpg",")")},children:[(0,s.jsx)("div",{className:"video-bg-mask"}),(0,s.jsx)("div",{className:"video-bg-texture",id:"grained_container"})]}),(0,s.jsx)(l,{typingData:r,pageName:a,pageTitle:i,extraClass:o})]})},c=function(e){var a=e.pageName,t=e.pageTitle,n=e.typingData,i=e.extraClass;return(0,s.jsxs)("div",{className:"section started layout-creative",id:"section-started",children:[(0,s.jsxs)("div",{className:"video-bg",children:[(0,s.jsx)("div",{className:"video-bg-mask"}),(0,s.jsx)("div",{className:"video-bg-texture",id:"grained_container"})]}),(0,s.jsx)(l,{typingData:n,pageName:a,pageTitle:t,extraClass:i})]})},u=function(e){var a=e.typingData,t=e.extraClass;return(0,s.jsxs)("div",{className:"section started section-title",id:"section-started",children:[(0,s.jsxs)("div",{className:"video-bg",children:[(0,s.jsx)("div",{className:"map",children:(0,s.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd",style:{border:0,width:"100%",height:"100%"},allowFullScreen:"",loading:"lazy"})}),(0,s.jsx)("div",{className:"video-bg-mask"}),(0,s.jsx)("div",{className:"video-bg-texture",id:"grained_container"})]}),(0,s.jsx)("div",{className:"centrize full-width",children:(0,s.jsx)("div",{className:"vertical-center",children:(0,s.jsxs)("div",{className:"started-content",children:[(0,s.jsx)("h1",{className:"h-title",children:"Contacts"}),(0,s.jsx)(r,{typingData:a,extraClass:t})]})})}),(0,s.jsx)("a",{href:"#next_section",className:"mouse_btn",children:(0,s.jsx)("span",{className:"icon fas fa-chevron-down"})})]})}},5152:function(e,a,t){e.exports=t(638)}},function(e){e.O(0,[616,14,423,774,888,179],function(){return e(e.s=3184)}),_N_E=e.O()}]);