(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{216:function(e,t,n){"use strict";n(53),n(41),n(31),n(225);var r=n(0),a=n.n(r),o=n(239),i=n(227),c=n(218),s=n(233),l=n(240),u=n(241),p=n(96);var m=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{style:{textAlign:"center"},className:"contentfooter-component"},a.a.createElement(p.Link,{className:"button action-button",to:"/kontakt"},"Kontakt aufnehmen"))},r}(a.a.Component),d=n(261);var f=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=v(0,this.props.stories.length);return a.a.createElement("div",{className:"contentfooter-component"},a.a.createElement("hr",null),a.a.createElement("div",null,a.a.createElement("h4",null," Kundenmeinungen ")),a.a.createElement(d.a,{story:this.props.stories[e]}))},r}(a.a.Component),h=n(231);var g=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).onClick=function(){h.a.openForm()},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{style:{textAlign:"center"},className:"contentfooter-component"},a.a.createElement("a",{className:"button action-button",onClick:this.onClick},"Zum Newsletter anmelden"))},r}(a.a.Component);function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e,t){var n=t.find(function(t){return t.frontmatter.slug==e});if(null==n)throw new Error("Could not find author for slug "+e);return n}function E(e){for(var t=e.slug,n=e;null!=n.parent;)t=(n=n.parent).slug+"/"+t;return"category/"+t}function b(e,t){function n(t){if(t.slug==e)return t;if(null!=t.subcategories){var r=t.subcategories,a=Array.isArray(r),o=0;for(r=a?r:r[Symbol.iterator]();;){var i;if(a){if(o>=r.length)break;i=r[o++]}else{if((o=r.next()).done)break;i=o.value}var c=n(i);if(null!=c)return c}return null}return null}var r=t,a=Array.isArray(r),o=0;for(r=a?r:r[Symbol.iterator]();;){var i;if(a){if(o>=r.length)break;i=r[o++]}else{if((o=r.next()).done)break;i=o.value}var c=n(i);if(null!=c)return c}throw new Error("Could not find category for slug "+e)}function A(e){return JSON.parse(JSON.stringify(e)).map(function(e){return function e(t,n){return void 0===n&&(n=null),null!=t.subcategories&&(t.subcategories=t.subcategories.map(function(n){return e(n,t)})),t.parent=n,t}(e)})}function w(e,t){return"/"==e[e.length-1]&&(e=e.substring(0,e.length-1)),"/"==t[0]&&(t=t.substring(1)),e+"/"+t}function k(e,t){switch(e){case"content":return r.createElement(o.a,{tableOfContents:t.tableOfContents});case"quickstart":return r.createElement(i.a,null);case"help":return r.createElement(c.a,null);case"categories":return r.createElement(s.a,null);default:throw new Error("Could not map sidebar component with slug "+e)}}function N(e,t,n,a,o,i,c){switch(e){case"postfooter":return r.createElement(l.a,{tags:t.frontmatter.tags.map(function(e){return c.find(function(t){return t.slug==e})}),categories:n});case"author":return r.createElement(u.a,{author:a,avatar:i});case"contact":return r.createElement(m,null);case"customerstory":return r.createElement(f,{stories:o});case"subscribe":return r.createElement(g,null);default:throw new Error("Could not map footer component with slug "+e)}}n.d(t,"g",function(){return v}),n.d(t,"b",function(){return y}),n.d(t,"a",function(){return E}),n.d(t,"c",function(){return b}),n.d(t,"f",function(){return A}),n.d(t,"h",function(){return w}),n.d(t,"e",function(){return k}),n.d(t,"d",function(){return N})},217:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(212),n(268)),i=n(96),c=(n(269),n(226)),s=n.n(c),l=n(214),u=n(235);var p=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).toggleHamburger=function(){n.setState({active:!n.state.active},function(){n.state.active?n.setState({navBarActiveClass:"is-active"}):n.setState({navBarActiveClass:""})})},n.state={active:!1,navBarActiveClass:""},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this;return a.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement(i.Link,{to:"/",title:"Logo"},a.a.createElement(s.a,{fixed:this.props.logo.childImageSharp.fixed})),a.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function(){return e.toggleHamburger()}},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))),a.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass},a.a.createElement("div",{className:"navbar-start has-text-centered"},[{text:"Home",route:"/"},{text:"Trainings",route:"/trainings"},{text:"Sofort-Service",route:"/sofort-service"},{text:"Power BI",route:"/category/power-bi"},{text:"Power Pivot",route:"/category/power-pivot"},{text:"Power Query",route:"/category/power-query"},{text:"Über uns",route:"/ueber-uns"}].map(function(e,t){return a.a.createElement(i.Link,{key:t,className:"navbar-item",activeClassName:"navbar-active",to:e.route},a.a.createElement("span",null,e.text))}),a.a.createElement(i.Link,{className:"navbar-item",activeClassName:"navbar-active",to:"/kontakt"},a.a.createElement(l.l,{style:{marginRight:"5px"},className:"primary-col"}),a.a.createElement("span",null,"Kontakt"))),a.a.createElement("div",{className:"navbar-end has-text-centered"},a.a.createElement(u.OutboundLink,{className:"navbar-item social","aria-label":"Twitter@ppvinsights",href:"https://twitter.com/ppvinsights",rel:"noopener nofollow",target:"_blank"},a.a.createElement(l.r,null)),a.a.createElement(u.OutboundLink,{className:"navbar-item","aria-label":"Facebook",href:"https://www.facebook.com/powerpivotinsights",rel:"noopener nofollow",target:"_blank"},a.a.createElement(l.i,null))))))},r}(a.a.Component),m=function(){return a.a.createElement(i.StaticQuery,{query:"2213708541",render:function(e){return a.a.createElement(p,{logo:e.logo})},data:o})},d=(n(270),n(271),n(237));var f=function(e){var t,n;function r(t){var n;return void 0===t&&(t=null),(n=e.call(this,t)||this).state={cookieWarningDismissed:!1},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var e=Object(d.a)();this.setState({cookieWarningDismissed:"true"===e.cookieWarningDismissed})},o.on_okButton_clicked=function(){document.cookie="cookieWarningDismissed=true",this.setState({cookieWarningDismissed:!0})},o.render=function(){return 1==this.state.cookieWarningDismissed?a.a.createElement(a.a.Fragment,null):a.a.createElement("div",{className:"cookie-warning-container"},a.a.createElement("div",{className:"cookie-warning"},a.a.createElement("div",{className:"cookie-text"},"Diese Website benutzt Cookies. Wenn du die Website weiter nutzt, gehen wir von deinem Einverständnis aus."),a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("button",{onClick:this.on_okButton_clicked.bind(this),className:"button"},"OK")),a.a.createElement("span",null,a.a.createElement(i.Link,{className:"button",to:"/datenschutz"},"Erfahre mehr")))))},r}(a.a.Component),h=n(272);n(273);var g=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{className:"footer-container"},a.a.createElement("div",{className:"footer-link-container"},a.a.createElement("span",null,a.a.createElement(i.Link,{to:"/impressum"},"Impressum")),a.a.createElement("span",null,a.a.createElement(i.Link,{to:"/haftungsausschluss"},"Haftungsausschluss")),a.a.createElement("span",null,a.a.createElement(i.Link,{to:"/datenschutz"},"Datenschutz"))),a.a.createElement("div",{className:"footer-icon"},a.a.createElement(s.a,{fixed:this.props.icon.childImageSharp.fixed})))},r}(a.a.Component),v=function(){return a.a.createElement(i.StaticQuery,{query:"4150946226",render:function(e){return a.a.createElement(g,{icon:e.icon})},data:h})},y=n(231);n(274);var E=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handler=function(e){n.setState({subscribed:e,showState:!0}),setTimeout(function(){n.setState({showState:!1})},2e3)},n.onClick=function(){y.a.openForm()},n.state={subscribed:!1,showState:!1},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentWillMount=function(){this.setState({subscribed:y.a.subscribed})},o.componentWillUnmount=function(){y.a.unregisterSubscriptionHandler(this.handler)},o.componentDidMount=function(){y.a.registerSubscriptionHandler(this.handler)},o.render=function(){return a.a.createElement("div",null,1==this.state.showState?a.a.createElement("div",{className:"state-container"},a.a.createElement("div",{className:"state-div vert-center"},a.a.createElement("div",{className:"vert-center"},"old"==y.a.state?a.a.createElement("span",null,"Sie sind schon zu unserem Newsletter angemeldet. Vielen Dank!"):a.a.createElement("span",null,"Vielen Dank für die Anmeldung an unserem Newsletter! ",a.a.createElement("br",null),"In kürze wirst du eine Bestätigungsemail erhalten, in der Sie weitere Instruktionen finden.")))):"",a.a.createElement("div",null,0==this.state.subscribed?a.a.createElement("div",{className:"newsletter-container"},a.a.createElement("div",{style:{margin:"auto"}},a.a.createElement("a",{onClick:this.onClick},'Abboniere unseren Newsletter und erhalte den Udemy-Kurs "Einführung in Power Pivot" gratis'))):""))},r}(a.a.Component),b=(n(275),n(276)),A=n.n(b),w=n(282),k=n.n(w),N=n(216),C=n(320);var x=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=C.webConfig.domain,t=C.webConfig.pathPrefix,n=this.props.header;return null!=n.image&&(n.image.startsWith(t)&&(n.image=n.image.substr(t.length)),n.image=Object(N.h)(e,n.image)),null!=n.url&&(n.url.startsWith(t)&&(n.url=n.url.substr(t.length)),n.url=Object(N.h)(e,n.url)),a.a.createElement(A.a,{defer:!1},a.a.createElement("html",{lang:"DE"}),a.a.createElement("title",null,n.title),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:k.a}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("meta",{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),null!=n.description?a.a.createElement("meta",{name:"description",content:n.description}):"",a.a.createElement("link",{rel:"canonical",href:n.url}),a.a.createElement("meta",{property:"og:locale",content:"de_DE"}),a.a.createElement("meta",{property:"og:type",content:n.type}),a.a.createElement("meta",{property:"og:title",content:n.title}),null!=n.description?a.a.createElement("meta",{property:"og:description",content:n.description}):"",a.a.createElement("meta",{property:"og:url",content:n.url}),a.a.createElement("meta",{property:"og:site_name",content:"Powerpivot Insights | Durchblick durch Daten"}),null!=n.updated_time?a.a.createElement("meta",{property:"og:updated_time",content:n.updated_time}):"",null!=n.image?a.a.createElement("meta",{property:"og:image",content:n.image}):"",null!=n.image?a.a.createElement("meta",{property:"og:image:secure_url",content:n.image}):"",a.a.createElement("meta",{property:"article:publisher",content:"http://powerpivotinsights.de"}),null!=n.tags?n.tags.map(function(e,t){return a.a.createElement("meta",{key:t,property:"article:tag",content:e})}):"","article"==n.section?a.a.createElement("meta",{property:"article:section",content:n.section}):"",null!=n.updated_time?a.a.createElement("meta",{property:"article:modified_time",content:n.updated_time}):"",null!=n.publish_time?a.a.createElement("meta",{property:"article:published_time",content:n.publish_time}):"",a.a.createElement("meta",{name:"twitter:card",content:"summary"}),null!=n.description?a.a.createElement("meta",{name:"twitter:description",content:n.description}):"",a.a.createElement("meta",{name:"twitter:title",content:n.title}),a.a.createElement("meta",{name:"twitter:site",content:"@ppvinsights"}),a.a.createElement("meta",{name:"twitter:creator",content:"@ppvinsights"}),null!=n.image?a.a.createElement("meta",{name:"twitter:image",content:n.image}):"")},r}(a.a.Component);function S(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",function(){return W}),n.d(t,"b",function(){return B});var _=function(e){function t(){return e.apply(this,arguments)||this}return S(t,e),t.prototype.render=function(){return a.a.createElement("div",null,a.a.createElement(x,{header:this.props.header}),a.a.createElement(E,null),a.a.createElement(m,null),a.a.createElement("div",null,this.props.children),a.a.createElement(v,null))},t}(a.a.Component),W=function(e){function t(){return e.apply(this,arguments)||this}return S(t,e),t.prototype.render=function(){return a.a.createElement(_,{header:this.props.header},a.a.createElement("section",{className:"section"},a.a.createElement("div",{className:"container content",id:"content-container"},this.props.children)),a.a.createElement(f,null))},t}(a.a.Component),B=function(e){function t(){return e.apply(this,arguments)||this}return S(t,e),t.prototype.render=function(){return a.a.createElement(W,{categoryBar:this.props.categoryBar,header:this.props.header},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"column is-7 is-offset-1"},this.props.children),a.a.createElement("div",{className:"column is-3"},null!=this.props.sidebar?this.props.sidebar:"")))},t}(a.a.Component)},218:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),a=n.n(r),o=(n(232),n(96));var i=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{className:"sidebar-component"},a.a.createElement("div",{className:"sidebar-header"},"Benötigen Sie Hilfe?"),a.a.createElement("div",{className:"sidebar-content"},a.a.createElement("div",{className:"sidebar-content-pad"},a.a.createElement("div",{style:{marginBottom:"5px"}},a.a.createElement(o.Link,{to:"/trainings"},"Informieren Sie sich über unsere Trainings!"))),a.a.createElement("div",{style:{textAlign:"center",marginTop:"15px"}},a.a.createElement(o.Link,{to:"/kontakt",className:"button action-button"},"Kontakt aufnehmen"))))},r}(a.a.Component)},220:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(284),i=n.n(o),c=n(302),s=n(311),l=n(214);var u=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).components={smile:l.m,"smile-wink":l.p,"smile-beam":l.o,grin:l.j},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.components[this.props.id];return null==e&&console.error("Could not find icon with id {id}"),a.a.createElement("span",{className:"post-icon"},new e)},r}(a.a.Component),p=n(221);n(318);function m(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",function(){return f}),n.d(t,"b",function(){return h});var d=new i.a({createElement:a.a.createElement,components:{"code-block":c.a,icon:u}}).Compiler;p.locale("de");var f=function(e){function t(){return e.apply(this,arguments)||this}return m(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:this.props.className,dangerouslySetInnerHTML:{__html:this.props.content}})},t}(a.a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return m(t,e),t.prototype.render=function(){return a.a.createElement(s.IconContext.Provider,{value:{className:"react-icons"}},a.a.createElement("div",{className:this.props.className},d(this.props.html)))},t}(a.a.Component);a.a.Component},227:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),a=n.n(r),o=(n(232),n(96));var i=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{className:"sidebar-component"},a.a.createElement("div",{className:"sidebar-header"},"Quickstart"),a.a.createElement("div",{className:"sidebar-content"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/quickstart-eine-erste-auswertung-mit-power-pivot"},"Das Quickstart Tutorial")),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/was-ist-power-pivot"},"Was ist Power Pivot?")),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/was-ist-power-bi"},"Was ist Power BI?")),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/was-ist-power-query"},"Was ist Power Query?")),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/power-pivot-power-bi-oder-power-query"},"Power Query, Power BI oder Power Pivot?")),a.a.createElement("li",{style:{marginTop:"20px"}},a.a.createElement(o.Link,{to:"/beispiel-datenbanken"},"Download Beispieldaten")))))},r}(a.a.Component)},231:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(237),a=new(function(){function e(){var e=this;if(this.handlers=[],this.subscribed=!1,this.state=null,this.param=null,this.onSubscribe=function(t){201==t.status?e.state="new":200==t.status&&(e.state="old"),e.setSubscribed(),e.closeForm()},"undefined"!=typeof window){var t=Object(r.a)();if(this.subscribed="true"==t.subscribed,null==document.getElementById("n2g_script")){var n=document.createElement("script");n.id="n2g_script",n.innerHTML='\n        ! function(e, t, n, c, r, a, i) {\n          e.Newsletter2GoTrackingObject = r, e[r] = e[r] || function() {\n              (e[r].q = e[r].q || []).push(arguments)\n          }, e[r].l = 1 * new Date, a = t.createElement(n), i = t.getElementsByTagName(n)[0], a.async = 1, a.src = c, i.parentNode.insertBefore(a, i)\n        }(window, document, "script", "https://static.newsletter2go.com/utils.js", "n2g");\n        var config = {\n          "container": {\n              "type": "div",\n              "class": "",\n              "style": "",\n              "id": "n2gForm"\n          },\n          "row": {\n              "type": "div",\n              "class": "",\n              "style": "margin-top: 15px;"\n          },\n          "columnLeft": {\n              "type": "div",\n              "class": "",\n              "style": ""\n          },\n          "columnRight": {\n              "type": "div",\n              "class": "",\n              "style": ""\n          },\n          "label": {\n              "type": "label",\n              "class": "",\n              "style": "display:inline;"\n          },\n                     "input": {\n              "class": "",\n              "style": "width:100%;padding: 5px 10px; border-radius: 2px; border: 1px solid #d8dee4;"\n          },\n                     "checkbox": {\n             "type": "input",\n              "class": "",\n              "style": "margin:0px 5px 0px 0px"\n          },\n                     "captchaImage": {\n                     "type": "img",\n                     "class": "",\n                     "style": "padding: 5px; border: 0px solid #fff; margin-top: 5px; width: 32px; height: 32px; cursor: pointer; display:inline;",\n                     "style:active": "padding: 5px; border: 3px solid #ccc; margin-top: 5px; width: 32px; height: 32px; cursor: pointer;"\n          },\n                     "button": {\n              "type": "button",\n              "class": "",\n              "id": "asd",\n              "style": "background-color: #9CA31E; border: none; border-radius: 4px; padding: 10px 20px; color: #ffffff; margin-top: 20px; cursor: pointer;"\n          },\n                     "message": {\n              "type": "h2",\n              "class": "",\n              "id": "",\n              "style": "text-align: center;color:#9CA31E;"\n          },\n        };\n        n2g(\'create\', \'5ghc6ehf-5cjsjypj-69s\');\n        ',document.body.appendChild(n)}}}var t=e.prototype;return t.openForm=function(e){this.param=e,window.n2g("subscribe:createPopup",window.config,0,this.onSubscribe)},t.closeForm=function(){document.getElementById("n2gForm").getElementsByTagName("a")[0].click()},t.showSuccess=function(){},t.registerSubscriptionHandler=function(e){this.handlers.push(e)},t.unregisterSubscriptionHandler=function(e){var t=this.handlers.indexOf(e);t>=0&&this.handlers.splice(t,1)},t.setSubscribed=function(){var e=this;this.subscribed=!0,this.handlers.forEach(function(t){return t(e.subscribed,e.param)}),document.cookie="subscribed=true"},e}())},233:function(e,t,n){"use strict";var r=n(283),a=n(0),o=n.n(a),i=(n(232),n(96)),c=n(216);var s=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=Object(c.f)(this.props.categories);return o.a.createElement("div",{className:"sidebar-component"},o.a.createElement("div",{className:"sidebar-header"},"Kategorien"),o.a.createElement("div",{className:"sidebar-content sidebar-content-pad"},o.a.createElement("ul",null,e.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(i.Link,{to:Object(c.a)(e)},e.friendlyname),o.a.createElement("ul",null,(e.subcategories||[]).map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(i.Link,{to:Object(c.a)(e)},e.friendlyname),o.a.createElement("ul",null,(e.subcategories||[]).map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(i.Link,{to:Object(c.a)(e)},e.friendlyname))})))})))}))))},r}(o.a.Component);t.a=function(){return o.a.createElement(i.StaticQuery,{query:"3472207655",render:function(e){return o.a.createElement(s,{categories:e.categories.edges.map(function(e){return e.node})})},data:r})}},237:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(40);function r(){var e={};return document.cookie&&document.cookie.split(";").map(function(e){return e.split("=")}).forEach(function(t){e[t[0].trim()]=t[1]}),e}},239:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(69),n(16),n(53),n(41),n(31),n(11),n(225),n(102),n(149);var r=n(0),a=n.n(r);n(232);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).onScroll=function(e){var t=window.scrollY,n=Array.from(document.getElementsByClassName("anchor"));if(0!=n.length){n=n.map(function(e){return e.parentElement});var r=Array.from(document.getElementsByClassName("sidebar-contentitem-active"));r.length>=0&&r.forEach(function(e){return e.className=""});var a=n.map(function(e){return Math.abs(t-e.offsetTop)}),i=n[a.indexOf(Math.min.apply(Math,o(a)))].firstChild.getAttribute("href").substr(1),c=Array.from(document.getElementById("toc-sidebar").getElementsByTagName("a")).find(function(e){return e.getAttribute("href").indexOf(i)>=0});c&&(c.parentElement.className="sidebar-contentitem-active")}},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.render=function(){var e=this.props.tableOfContents.replace(/href="\/.*\/(#.*?)"/g,function(e,t){return'href="'+t+'"'}).replace(/<\/?p>/g,"");return a.a.createElement("div",{className:"sidebar-component"},a.a.createElement("div",{className:"sidebar-header"},"Inhalt"),a.a.createElement("div",{id:"toc-sidebar",className:"sidebar-content"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})))},i.componentDidMount=function(){window.addEventListener("scroll",this.onScroll);var e=Array.from(document.getElementsByClassName("anchor")).map(function(e){return e.parentElement});if(0!=e.length){var t=e[0].getAttribute("id"),n=Array.from(document.getElementById("toc-sidebar").getElementsByTagName("a")).find(function(e){return e.getAttribute("href").indexOf(t)>=0});n&&(n.parentElement.className="sidebar-contentitem-active")}},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},r}(a.a.Component)},240:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(39);var r=n(0),a=n.n(r),o=n(96),i=n(216);n(228);var c=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this;return a.a.createElement("div",{className:"contentfooter-component"},a.a.createElement("div",null,a.a.createElement("span",{style:{fontWeight:"bold"}},"Schlagworte: "),this.props.tags.map(function(t,n){return a.a.createElement("span",{key:n},a.a.createElement(o.Link,{to:"tag/"+t.slug},t.name),n<e.props.tags.length-1?a.a.createElement("span",null," - "):"")})),a.a.createElement("div",null,a.a.createElement("span",{style:{fontWeight:"bold"}},"Kategorien: "),this.props.categories.map(function(t,n){return a.a.createElement("span",{key:n},a.a.createElement(o.Link,{to:Object(i.a)(t)},t.friendlyname),n<e.props.categories.length-1?a.a.createElement("span",null," - "):"")})),a.a.createElement("hr",null))},r}(a.a.Component)},241:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),a=n.n(r),o=(n(228),n(242));var i=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{className:"contentfooter-component author-footer"},a.a.createElement(o.a,{author:this.props.author,avatar:this.props.avatar}))},r}(a.a.Component)},242:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(212);var r=n(0),a=n.n(r),o=n(226),i=n.n(o),c=n(220),s=(n(319),n(96));var l=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{className:"author-content"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"column is-2"},a.a.createElement(s.Link,{to:"/author/"+this.props.author.frontmatter.slug},a.a.createElement(i.a,{fixed:this.props.avatar.childImageSharp.fixed}))),a.a.createElement("div",{className:"column"},a.a.createElement("div",null,a.a.createElement(s.Link,{to:"/author/"+this.props.author.frontmatter.slug,className:"author-headline"},this.props.author.frontmatter.firstname+" "+this.props.author.frontmatter.lastname)),a.a.createElement("div",null,a.a.createElement(c.a,{content:this.props.author.html})))))},r}(a.a.Component)},261:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(212);var r=n(0),a=n.n(r),o=(n(262),n(229),n(226)),i=n.n(o),c=n(24),s=n(214),l=n(235);var u=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.story.fields.story;return a.a.createElement("div",null,a.a.createElement("div",{className:"customerstory-container"},a.a.createElement("div",{className:"customerstory-icon"},a.a.createElement(l.OutboundLink,{href:e.url,rel:"nofollow",className:"customerstory-company",target:"_blank"},a.a.createElement(i.a,{fixed:this.props.story.childImageSharp.fixed,className:e.className}))),a.a.createElement("div",{className:"customerstory-text"},a.a.createElement("div",null,a.a.createElement("h3",null,a.a.createElement(l.OutboundLink,{href:e.url,rel:"nofollow",className:"customerstory-company",target:"_blank"},e.company))),a.a.createElement("span",null,a.a.createElement("p",null,e.text)),a.a.createElement("span",null,a.a.createElement("span",{className:"customerstory-author"},e.author),a.a.createElement("span",{className:"customerstory-position"}," (",e.position),null!=e.country?a.a.createElement("span",{className:"customerstory-country"},", ",e.country):"",a.a.createElement("span",{className:"customerstory-author"},")")))),a.a.createElement("div",{className:"home-customerstory-button-container"},a.a.createElement(c.Link,{to:"/kundenmeinungen"},a.a.createElement(s.k,null),"mehr Kundenmeinungen")))},r}(a.a.Component)},268:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACvklEQVQoz4WTbUiTURTHrxMVFEyUCPWZWkIK0Rv7UkF9CqKiMioy6kthRhlEH6Qv0osgzre0WOqmz+NenseX+TaduU3ndLVN95QvKFpUiqQoMiuNZpvbntMZFZFEHvhx/hzOPffcc+8lgUDg8vq6O8fvX78FAFeRC0Hv83kzvV7vNb/ff3ZpaUmEMeJyuYjH4yH/NUzM/a2PniFbHklJloO/r8Z4cIMk5AYS+iuXbGpe7+r1wsfkJMOmmJX1qetcSxxMvi0Hm30Y7I6XX1dWVybcbne2x7sSHsy32vJCqmoTSZCgVdagphP/FJxfsBZX1kZ+05skoGrYAVV0lM/5utDX0trlYzk16Dp0wPM8Ngd7NzZTzVDk/Xw6KSqPJ7t2R/wMzn40lKgbdi5aXmSDeSArUF0XLQzyBdDZ2SOYTIaA0WgUnDy/BrB8+PRFEqPiDsTK5ImxJRXxEQwnDlEoKZGyXizS6pJFtWpKRD7MtJWY+q4sNbXvA4P5ksCwlOBw5kNbW7eg1TYKHdjh0NDI5/Ep6T2ZIrKMVm/PrlFRd5CH/5whFpR2PD++ODouhYkphVDHJcMgnw8GQz+061oFo8kINpvD/emL9ZS0ghxRN6ZJcNP9tIbKxaIH0WfSLJWB3WWglpCFxUFGody6rGlKh+Gx0sCbd2rs8AHo9b2CTtcW6LOYcYZjrvHJortVTIyNYZPtuFCPdDMasRM9z7DiUaQbtZXYnXknmtpTQdW4Deq4JGjWHfK9Gin26/U9Pq6eBX1XJ/QP2GB6ls55VhMlr+NSqnEhTWvECNWDsKjl6EuQZnLsHImoVScWMGzSKCav0Ww4jI4Xg8XigF6z6fv0zPTY3PycFG85Ljgirul8aOmT+DC8lFA8skTOUNHBeLksIbzsaULYX/NktXvSZIrwm3j0VixwG0nf8Ak2fdc/ADHNp4PP65qFAAAAAElFTkSuQmCC",width:93,height:50,src:"/static/ca50f8932ab367624ff2d2af897d1a21/7246a/logo_w.png",srcSet:"/static/ca50f8932ab367624ff2d2af897d1a21/7246a/logo_w.png 1x,\n/static/ca50f8932ab367624ff2d2af897d1a21/7f8be/logo_w.png 1.5x,\n/static/ca50f8932ab367624ff2d2af897d1a21/a89f9/logo_w.png 2x"}}}}}},272:function(e){e.exports={data:{icon:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACvklEQVQoz4WTbUiTURTHrxMVFEyUCPWZWkIK0Rv7UkF9CqKiMioy6kthRhlEH6Qv0osgzre0WOqmz+NenseX+TaduU3ndLVN95QvKFpUiqQoMiuNZpvbntMZFZFEHvhx/hzOPffcc+8lgUDg8vq6O8fvX78FAFeRC0Hv83kzvV7vNb/ff3ZpaUmEMeJyuYjH4yH/NUzM/a2PniFbHklJloO/r8Z4cIMk5AYS+iuXbGpe7+r1wsfkJMOmmJX1qetcSxxMvi0Hm30Y7I6XX1dWVybcbne2x7sSHsy32vJCqmoTSZCgVdagphP/FJxfsBZX1kZ+05skoGrYAVV0lM/5utDX0trlYzk16Dp0wPM8Ngd7NzZTzVDk/Xw6KSqPJ7t2R/wMzn40lKgbdi5aXmSDeSArUF0XLQzyBdDZ2SOYTIaA0WgUnDy/BrB8+PRFEqPiDsTK5ImxJRXxEQwnDlEoKZGyXizS6pJFtWpKRD7MtJWY+q4sNbXvA4P5ksCwlOBw5kNbW7eg1TYKHdjh0NDI5/Ep6T2ZIrKMVm/PrlFRd5CH/5whFpR2PD++ODouhYkphVDHJcMgnw8GQz+061oFo8kINpvD/emL9ZS0ghxRN6ZJcNP9tIbKxaIH0WfSLJWB3WWglpCFxUFGody6rGlKh+Gx0sCbd2rs8AHo9b2CTtcW6LOYcYZjrvHJortVTIyNYZPtuFCPdDMasRM9z7DiUaQbtZXYnXknmtpTQdW4Deq4JGjWHfK9Gin26/U9Pq6eBX1XJ/QP2GB6ls55VhMlr+NSqnEhTWvECNWDsKjl6EuQZnLsHImoVScWMGzSKCav0Ww4jI4Xg8XigF6z6fv0zPTY3PycFG85Ljgirul8aOmT+DC8lFA8skTOUNHBeLksIbzsaULYX/NktXvSZIrwm3j0VixwG0nf8Ak2fdc/ADHNp4PP65qFAAAAAElFTkSuQmCC",width:142,height:76,src:"/static/ca50f8932ab367624ff2d2af897d1a21/3f91a/footer-icon.png",srcSet:"/static/ca50f8932ab367624ff2d2af897d1a21/3f91a/footer-icon.png 1x,\n/static/ca50f8932ab367624ff2d2af897d1a21/03f14/footer-icon.png 1.5x,\n/static/ca50f8932ab367624ff2d2af897d1a21/00816/footer-icon.png 2x"}}}}}},282:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA3ADcANpX0965AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4wYVBzIHwthG1gAABwNJREFUWMO1l29sE/cZxz93dhwHxzlD2l4MwUklyFZErKwkI6lgYvxZuwrRvlk3gbZ1m7S+G7SV1sUvilapzqRp0E170b4IINZMmwApA2krGtoCgZJBK9wkuJkhwb6YkAvNnwvn+OwQ31747DiJkzJtPNLpfn7u/L3v8zzf57nfCUffO7ommUy+YprmLsADuIByoMw6Oy3/AhMEAQDTNAvdU0DIOvda665Aa2CKZUx4N/juOWAAWCsIwv6CayFgqsQxfjudWjMmiuLDTCZzDXgW+I7NZjsEMDc3ZwINBST91nrHIqzfBVoDJ4oR6BMEYbPF+oQoiue8vtPxzNzE900efi9teDeMj+3TgU5RFP+wbu26ruH48PlAa2CXhWEuF12wLdhgEfmBRfK9QGvgjcUE7giCUCut6X1mVfknL5hm+gCYjbkb0sZaNtX9mhJHCZFIhJGRkdFMJvPQZrO99NbP3wod7/C9pGuNDQ+0xhOB1kB0BTL/AAi0BnYW+u0AzrL7lLmu9Jkmdo9UR1nZU7hd1VRW+rl46fdIkoTf76d5azPXrl+rcpY66b/Z/+mR376ZWP0ELgvr7WBbMAScBDpXIrOEgCA+xFf9LfvWLYdxOCRuDrRjs5VyJ3oWgGg0itvtxuv14nQ68df7kTwSp8+EXIvwGqzjSLAt2AmctcgsK0Ixt5AqNpCenWZ88iZK/DwV7lo2b3oNALfbjaZpXLlyhXA4zMWLFwmHwwuAZFlmz+491Phqcq6XgWPARLAteAyoXTYDADZbKXa7i9nZGdav28VqqY65TAqAyspK/H4/AL19vfjr/cSUGOHP/5kHcpY6aWpqoqmpCcMwiNyKEIlEUBQFwzBetW7zBNuCR4CTgdZAaAEB03yIKNhxrfIycu8yyeR97qk9AMTjcVzlLux2O+NfjDM5OUlCT1BWVlY0rbky+ev9dF/uBkCb0ogpMY+maYeAQ8G2YBR4I09gdnaG8vJq0ulpVnu+QsvXg4iinQ/am5mZmSGhJwCYSc4wPDxMMplkbdXXmEwc/1Kh1fhq8G3zAaCqKhcuXCCmxGqBhjwBUbRZUV9l+kGUSx8fZFTtAUqQZTlfAgTw1/vRNI0bn52n1MV/ZbIs46vxEVNieQ0YpjlDMnmfubkU7vJqHI4Knq7Zx+ZnXuNM50+Z0qbo7+9HT+hEo1HGvxjHSBkkEnqeQEyJ0X6sHfkpGVnOHj6f75HasFNA/IXbXUtZ2ZNc/Pgg5a4siXMf7QXWkjJSlDpLkWUZu91O45ZGNE3jTrQnDyRJEnV1dSgxBXVMRb2g5vWgqiqqqhYlZRdFMY3gpP/zDxhVr+KVm0km7+Op2MA3t7/P+b+/gyzLbNywEYB7o/fQdZ3BocEFGvBIHrZv2w7b5sFVVeX69ev5dSQSQR1Tl7ahMfMEc3OZH42O9fxqdKxHBogM/ok1qzcBoCd0ent7uTtylzt3Bunv76HKu4qdO/dx5tzK9ZY8UlaEBZF3X+6mu7t7noBplvDq/sjJE3/c+EPMjPzy3svcHblBVPkIQQwxNBQiMniOfS8eZM/uPdjtWe2GB47xv5o9k8nMjwIzZaXTi2HEqFyzny0N2Tf03y68wiefhRgYXE86rTExGeb/YfZiznR6miq5eYl/e8sR9MQweiJOuWs96dlpRtWr2RqPqXR0dCBJEpJHyv9HiSloUxqGYeB0OvNDaUUCDkfFgt+j6rzafdXPL7h+vCNbW8MwsuCahqbNP8BIGUwpU0t8KxIYVXsWZCC3djgqlpArtAMHDizxKYpCTIllO6TA92HHhytnQE/E0fU4emKYG71H86UJ9R0llZ5mYjKMrg8/Hg3k2q/cVQ00UyW3cKrzOW705Yg8BhEG24Ier29ehOnZaXQ9jsNRkSf07d1/XgKQ08BKpk1pKIqSH9mLRdgFvA0MzaafpMRxn/C/22mofz07hPQ44YF2qxW/C4DX0kSOWOGAUVWVlJHCSBmo6vzUiykxPJIHSZIWZiDQGugKtgWfBX5m7WJoqH/darVqTnU+t6A0XrmZW4OnUeLnlwouplDqLMVX48NZ6kTeLaOqKkbKWCLC3r7e+RJYu5MfH+94vza3n8/WH7ZuOcz4ZJjbQ6fYuuVwvhWLpb5YF+Si/9I9YaH95a8v0H31TW4PncK3/nm2t/wmfy0nvk1f/QlVcsvj6YKJyTATVtSFgyk80J5/aC4bjyLC3KDKzYScIIsReAeIWmWoLRzNAP/69JcFw6klL8aVHhiJRIjciuTffgWfameBE4JpmkIxgOMdvlpLlN/IiXM507VGHmiN7N27FyWWjbJw9FpBdQGXFn8nLEugCKEdwD4rOw3FCCyyLivKrtwWvOjX8aMSKJKdHbns6Fqj54HWGMpFGWgNdD4q1n8AkWo5sSVuCyIAAAAASUVORK5CYII="},283:function(e){e.exports={data:{categories:{edges:[{node:{friendlyname:"Power Pivot-Artikel",slug:"power-pivot"}},{node:{friendlyname:"Power BI-Artikel",slug:"power-bi"}},{node:{friendlyname:"Power Query-Artikel",slug:"power-query"}},{node:{friendlyname:"Grundlagen",slug:"grundlagen"}},{node:{friendlyname:"Design Themen",slug:"design"}},{node:{friendlyname:"Tipps & Tricks",slug:"tipps"}},{node:{friendlyname:"Whitepaper",slug:"whitepaper"}},{node:{friendlyname:"Tutorials",slug:"tutorial"}},{node:{friendlyname:"DAX spezifisch",slug:"dax"}},{node:{friendlyname:"M spezifisch",slug:"m"}},{node:{friendlyname:"Pattern",slug:"pattern"}}]}}}},302:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return c});n(40),n(69),n(16);var r=n(0),a=n.n(r),o=n(220);n(229);var i="undefined"!=typeof window?new DOMParser:null,c=function(t){var n,r;function c(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).code="",e.on_copy_clicked=function(){navigator.clipboard.writeText(e.code)},e}return r=t,(n=c).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,c.prototype.render=function(){var t=this;this.formatted=e.from(this.props.formatted,"base64").toString("utf8");var n=null!=this.props.footerhtml?e.from(this.props.footerhtml,"base64").toString("utf8"):null,r=[];return"undefined"!=typeof window&&(r=this.formatted.split(/<\s*br\s*\/?\s*>/g).filter(function(e){var n=i.parseFromString('<span id="mark">'+e+"</span>","text/html").getElementById("mark");return null!=n&&null!=n.textContent&&(t.code+=n.textContent+"\n"),null!=n.firstChild&&""!=n.firstChild.textContent})),a.a.createElement("div",{className:"code-block-container"},a.a.createElement("div",{className:"code-block-table-container"},a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",{className:"line-numbers"},r.map(function(e,t){return a.a.createElement("div",{className:"line-numbers code-line "+(t%2==0?"code-line-1":"code-line-2"),key:t},t+1)})),a.a.createElement("td",null,a.a.createElement("div",{style:{whiteSpace:"pre"}},r.map(function(e,t){return a.a.createElement(o.a,{key:t,className:"code-line "+(t%2==0?"code-line-1":"code-line-2"),content:e})}))))))),a.a.createElement("div",{className:"code-block-footer"},null!=n?a.a.createElement(o.a,{content:n}):"",a.a.createElement("span",null,a.a.createElement("button",{className:"button action-button",onClick:this.on_copy_clicked},"Code Kopieren"))))},c}(a.a.Component)}).call(this,n(303).Buffer)},320:function(e,t){e.exports.webConfig={pathPrefix:null,domain:"https://powerpivotinsights.de"}}}]);
//# sourceMappingURL=2-e51cfbdf4e296ede5b00.js.map