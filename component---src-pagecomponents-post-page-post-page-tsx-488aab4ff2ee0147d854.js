(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ANhw:function(e,t,n){var a,r;n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt"),n("xfY5"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,a=0;n<e.length;n++,a+=8)t[a>>>5]|=e[n]<<24-a%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var r=e[n]<<16|e[n+1]<<8|e[n+2],s=0;s<4;s++)8*n+6*s<=8*e.length?t.push(a.charAt(r>>>6*(3-s)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,r=0;n<e.length;r=++n%4)0!=r&&t.push((a.indexOf(e.charAt(n-1))&Math.pow(2,-2*r+8)-1)<<2*r|a.indexOf(e.charAt(n))>>>6-2*r);return t}},e.exports=r},BEtg:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},"EFy+":function(e,t,n){"use strict";n.r(t);n("f3/d"),n("dRSK");var a=n("q1tI"),r=n.n(a),s=n("Aq8R"),i=n("+rwk"),o=n("K3K0"),c=n("9uds"),l=n("Gpdm"),u=n("Kxvw"),m=n("VOVi"),p=n("OKhy");n("JFhn");var h=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contentfooter-container"},r.a.createElement("hr",null),this.props.children))},a}(r.a.Component),d=n("8O3f"),f=n("ma3e"),g=n("Wbzz");var b=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"next-prev-container"},r.a.createElement("div",{style:{flexBasis:"content"},className:"prev"},null==this.props.previousPost?"":r.a.createElement(g.Link,{to:"/"+this.props.previousPost.route,title:this.props.previousPost.title},r.a.createElement("span",{style:{verticalAlign:"middle",marginRight:"10px"}},r.a.createElement(f.a,null)),r.a.createElement("span",null,this.props.previousPost.title.length<=28?this.props.previousPost.title:this.props.previousPost.title.substr(0,25)+"..."))),r.a.createElement("div",{style:{flexBasis:"content"},className:"next"},null==this.props.nextPost?"":r.a.createElement(g.Link,{to:"/"+this.props.nextPost.route,title:this.props.nextPost.title},r.a.createElement("span",null,this.props.nextPost.title.length<=28?this.props.nextPost.title:this.props.nextPost.title.substr(0,25)+"..."),r.a.createElement("span",{className:"next-prev-icon"},r.a.createElement(f.b,null))))))},a}(r.a.Component),v=n("bafB"),E=n("PeiE"),y=n("z9ZU");n.d(t,"PostPage",(function(){return C})),n.d(t,"pageQuery",(function(){return N}));var C=function(e){var t,n;function a(t){return e.call(this,t)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e,t,n,a=this.props.data.post,f=this.props.context,g=Object(p.g)(this.props.data.categories.edges.map((function(e){return e.node}))),C=a.frontmatter.categories.map((function(e){return Object(p.c)(e,g)})),N=this.props.data.tags.edges.map((function(e){return e.node})),x=this.props.data.post.frontmatter.tags.map((function(e){return N.find((function(t){return t.slug==e}))})),S={url:this.props.data.post.frontmatter.slug,description:a.frontmatter.description,type:"article",title:a.frontmatter.title,tags:x.map((function(e){return e.name})),image:null!=this.props.data.post.frontmatter.image?null===(e=this.props.data.image)||void 0===e||null===(t=e.childImageSharp)||void 0===t||null===(n=t.fluid)||void 0===n?void 0:n.src:null,updated_time:a.frontmatter.updatedate,publish_time:a.frontmatter.date};return r.a.createElement(s.b,{sidebar:r.a.createElement(i.a,{isFixed:!0},r.a.createElement(o.a,{tableOfContents:a.tableOfContents}),r.a.createElement(c.a,null)),categoryBar:r.a.createElement(l.a,{title:C.map((function(e){return e.friendlyname})).join(" - ")}),header:S},r.a.createElement(u.a,{frontmatter:a.frontmatter,commentCnt:a.fields.commentCnt,author:f.author,categories:C,isPreview:!1}),r.a.createElement("div",{className:"post-content"},r.a.createElement(m.b,{html:a.htmlAst}),null==a.fields.subscriberContent||0==a.fields.subscriberContent.length?"":r.a.createElement(E.a,{content:a.fields.subscriberContent})),r.a.createElement(h,null,r.a.createElement(d.a,{tags:x,categories:C}),r.a.createElement(b,{nextPost:f.next,previousPost:f.prev}),r.a.createElement(y.a,{author:this.props.context.author,authorBadge:this.props.data.authorBadge,avatar:this.props.data.avatar}),r.a.createElement(v.a,{slug:a.frontmatter.slug,comments:f.comments})))},a}(r.a.Component),N=(t.default=function(e){var t=e.data,n=e.pageContext,a=e.location;return r.a.createElement(C,{location:a,data:t,context:n})},"3889499834")},PeiE:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),r=n.n(a),s=n("ruFX"),i=n("VOVi"),o=n("ma3e");function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l=function(e){function t(){return e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:"subscriber-content-container"},r.a.createElement(i.a,{content:this.props.content}))},t}(r.a.Component),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).handler=function(e){n.setState({subscribed:e})},n.onClick=function(){s.a.openForm("subscriber-section")},n.state={subscribed:!1},n}c(t,e);var n=t.prototype;return n.componentDidMount=function(){s.a.registerSubscriptionHandler(this.handler)},n.componentWillUnmount=function(){s.a.unregisterSubscriptionHandler(this.handler)},n.render=function(){return r.a.createElement("div",{className:"subscribe-component-container"},r.a.createElement("div",{id:"sub"},r.a.createElement("a",{onClick:this.onClick},"Bitte melden Sie sich für den Newsletter an, um die Downloads zu sehen.")))},t}(r.a.Component),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).handler=function(e,t){n.setState({subscribed:e}),t&&document.getElementById(t).focus()},n.state={subscribed:s.a.subscribed},n}c(t,e);var n=t.prototype;return n.componentDidMount=function(){s.a.registerSubscriptionHandler(this.handler)},n.componentWillUnmount=function(){s.a.unregisterSubscriptionHandler(this.handler)},n.render=function(){return r.a.createElement("div",{id:"subscriber-section",className:"subscriber-footer-container"},r.a.createElement("h2",null,r.a.createElement(o.i,null)," Downloads "),r.a.createElement("div",null,1==this.state.subscribed?r.a.createElement(l,{content:this.props.content}):r.a.createElement(u,null)))},t}(r.a.Component)},aCH8:function(e,t,n){var a,r,s,i,o;n("a1Th"),n("h7Nl"),n("Btvt"),n("LK8F"),a=n("ANhw"),r=n("mmNF").utf8,s=n("BEtg"),i=n("mmNF").bin,(o=function e(t,n){t.constructor==String?t=n&&"binary"===n.encoding?i.stringToBytes(t):r.stringToBytes(t):s(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var o=a.bytesToWords(t),c=8*t.length,l=1732584193,u=-271733879,m=-1732584194,p=271733878,h=0;h<o.length;h++)o[h]=16711935&(o[h]<<8|o[h]>>>24)|4278255360&(o[h]<<24|o[h]>>>8);o[c>>>5]|=128<<c%32,o[14+(c+64>>>9<<4)]=c;var d=e._ff,f=e._gg,g=e._hh,b=e._ii;for(h=0;h<o.length;h+=16){var v=l,E=u,y=m,C=p;l=d(l,u,m,p,o[h+0],7,-680876936),p=d(p,l,u,m,o[h+1],12,-389564586),m=d(m,p,l,u,o[h+2],17,606105819),u=d(u,m,p,l,o[h+3],22,-1044525330),l=d(l,u,m,p,o[h+4],7,-176418897),p=d(p,l,u,m,o[h+5],12,1200080426),m=d(m,p,l,u,o[h+6],17,-1473231341),u=d(u,m,p,l,o[h+7],22,-45705983),l=d(l,u,m,p,o[h+8],7,1770035416),p=d(p,l,u,m,o[h+9],12,-1958414417),m=d(m,p,l,u,o[h+10],17,-42063),u=d(u,m,p,l,o[h+11],22,-1990404162),l=d(l,u,m,p,o[h+12],7,1804603682),p=d(p,l,u,m,o[h+13],12,-40341101),m=d(m,p,l,u,o[h+14],17,-1502002290),l=f(l,u=d(u,m,p,l,o[h+15],22,1236535329),m,p,o[h+1],5,-165796510),p=f(p,l,u,m,o[h+6],9,-1069501632),m=f(m,p,l,u,o[h+11],14,643717713),u=f(u,m,p,l,o[h+0],20,-373897302),l=f(l,u,m,p,o[h+5],5,-701558691),p=f(p,l,u,m,o[h+10],9,38016083),m=f(m,p,l,u,o[h+15],14,-660478335),u=f(u,m,p,l,o[h+4],20,-405537848),l=f(l,u,m,p,o[h+9],5,568446438),p=f(p,l,u,m,o[h+14],9,-1019803690),m=f(m,p,l,u,o[h+3],14,-187363961),u=f(u,m,p,l,o[h+8],20,1163531501),l=f(l,u,m,p,o[h+13],5,-1444681467),p=f(p,l,u,m,o[h+2],9,-51403784),m=f(m,p,l,u,o[h+7],14,1735328473),l=g(l,u=f(u,m,p,l,o[h+12],20,-1926607734),m,p,o[h+5],4,-378558),p=g(p,l,u,m,o[h+8],11,-2022574463),m=g(m,p,l,u,o[h+11],16,1839030562),u=g(u,m,p,l,o[h+14],23,-35309556),l=g(l,u,m,p,o[h+1],4,-1530992060),p=g(p,l,u,m,o[h+4],11,1272893353),m=g(m,p,l,u,o[h+7],16,-155497632),u=g(u,m,p,l,o[h+10],23,-1094730640),l=g(l,u,m,p,o[h+13],4,681279174),p=g(p,l,u,m,o[h+0],11,-358537222),m=g(m,p,l,u,o[h+3],16,-722521979),u=g(u,m,p,l,o[h+6],23,76029189),l=g(l,u,m,p,o[h+9],4,-640364487),p=g(p,l,u,m,o[h+12],11,-421815835),m=g(m,p,l,u,o[h+15],16,530742520),l=b(l,u=g(u,m,p,l,o[h+2],23,-995338651),m,p,o[h+0],6,-198630844),p=b(p,l,u,m,o[h+7],10,1126891415),m=b(m,p,l,u,o[h+14],15,-1416354905),u=b(u,m,p,l,o[h+5],21,-57434055),l=b(l,u,m,p,o[h+12],6,1700485571),p=b(p,l,u,m,o[h+3],10,-1894986606),m=b(m,p,l,u,o[h+10],15,-1051523),u=b(u,m,p,l,o[h+1],21,-2054922799),l=b(l,u,m,p,o[h+8],6,1873313359),p=b(p,l,u,m,o[h+15],10,-30611744),m=b(m,p,l,u,o[h+6],15,-1560198380),u=b(u,m,p,l,o[h+13],21,1309151649),l=b(l,u,m,p,o[h+4],6,-145523070),p=b(p,l,u,m,o[h+11],10,-1120210379),m=b(m,p,l,u,o[h+2],15,718787259),u=b(u,m,p,l,o[h+9],21,-343485551),l=l+v>>>0,u=u+E>>>0,m=m+y>>>0,p=p+C>>>0}return a.endian([l,u,m,p])})._ff=function(e,t,n,a,r,s,i){var o=e+(t&n|~t&a)+(r>>>0)+i;return(o<<s|o>>>32-s)+t},o._gg=function(e,t,n,a,r,s,i){var o=e+(t&a|n&~a)+(r>>>0)+i;return(o<<s|o>>>32-s)+t},o._hh=function(e,t,n,a,r,s,i){var o=e+(t^n^a)+(r>>>0)+i;return(o<<s|o>>>32-s)+t},o._ii=function(e,t,n,a,r,s,i){var o=e+(n^(t|~a))+(r>>>0)+i;return(o<<s|o>>>32-s)+t},o._blocksize=16,o._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=a.wordsToBytes(o(e,t));return t&&t.asBytes?n:t&&t.asString?i.bytesToString(n):a.bytesToHex(n)}},bafB:function(e,t,n){"use strict";n("a1Th"),n("Btvt"),n("f3/d");var a=n("q1tI"),r=n.n(a),s=n("ma3e"),i=(n("JFhn"),new(function(){function e(){"undefined"!=typeof window&&(this.obj=window.captcha)}return e.prototype.captcha=function(e){1==this.obj.captchaLoaded?e():this.obj.captchaHandlers.push(e)},e}())),o=n("wd/R"),c=n("aCH8"),l=n("VOVi");function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return d}));var m="6Lej97IUAAAAAHjKV4e2jG_WDj-l8_HyO67I4YVY",p=function(e){function t(t){var n;return(n=e.call(this,t)||this).id=n.createGuid(),n.recaptchaId="recaptcha-"+n.id,n.grecaptchaId=null,n.inputId="input-"+n.id,n.captchaRef=r.a.createRef(),n.updateCb=null,n.captchaCallback=function(e){n.setState({captchaChecked:!0,captchaResponse:e})},n.expiredCallback=function(){n.setState({captchaChecked:!1}),grecaptcha.reset(n.grecaptchaId)},n.onReset=function(){n.reset()},n.errorCallback=function(){n.setState({success:!1})},n.onSubmit=function(e){if(e.preventDefault(),n.setState({triggered:!0}),n.state.email&&n.state.content&&n.state.name&&1==n.state.captchaChecked){n.setState({submitting:!0});var t,a,r={fields:{website:n.state.website,name:n.state.name,guid:n.createGuid(),email:n.state.email,content:n.state.content,parent:n.props.parent,postSlug:n.props.slug},options:{slug:n.props.slug,reCaptcha:{siteKey:m,secret:"i7uGSSt2Df0i6FocOCCmVl5VIbc3FUexNa/CTmZbVGCbLdZpoib1CZVRWIzVIO0MkNeTwn2sp2z5zlI8V7tsN91gKS+JlIX4XNXampUXde0iKusb1H1LA2TGCsUJf5UqbLMlIqPk/tcwXjSvHONFUXf6tcercDnteylYsqGcJ5NxmG4FuR4Nscj7lrpvOpFmQitKH8PRbYAtxotmzu3NbxJsYF7N0Qusxq7VynuLGvn3VI8vdpImpoROxnWbBycRuHygEd/9IAelCWPIHuwcwVuq6hwGQxRueWN/4x2mvOrlak6dLeiLyZ/fuVrEPzfucL7BET+J0MstmQddRfpSPA=="}},"g-recaptcha-response":n.state.captchaResponse};(t="https://ppv-staticman-fn.azurewebsites.net/api/HttpTrigger",a=r,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","x-functions-key":"hDpQcHz5YTGbcTkzmLAUTJnwu8GS0Tr7VaMHCFnIGkn4Qy6f5lYsTw=="},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(a)}).then((function(e){return e.json()}))).then((function(e){n.setState({success:e.success,submitting:!1})}),(function(){n.setState({submitting:!1,success:!1})}))}},n.handleChange=function(e){var t={};t[e.target.name]=e.target.value,n.setState(t)},n.state={email:null,name:null,content:null,website:null,success:null,submitting:!1,triggered:!1,captchaChecked:!1,captchaResponse:null},n}u(t,e);var n=t.prototype;return n.reset=function(){var e=this;this.setState({email:null,name:null,content:null,website:null,success:null,submitting:!1,triggered:!1,captchaChecked:!1}),document.getElementsByName(this.inputId).forEach((function(e){e.value=""})),this.updateCb=function(){e.renderCaptcha()}},n.componentDidUpdate=function(){this.updateCb&&(this.updateCb(),this.updateCb=null)},n.renderCaptcha=function(){var e=this;i.captcha((function(){e.grecaptchaId=grecaptcha.render(e.captchaRef.current,{sitekey:m,callback:e.captchaCallback,"expired-callback":e.expiredCallback,"error-callback":e.errorCallback})}))},n.componentDidMount=function(){this.setState({submitting:!1}),this.renderCaptcha()},n.createGuid=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},n.render=function(){return r.a.createElement("div",{id:"comments",className:"comment-input-container"},r.a.createElement("div",null,r.a.createElement("h3",null,"Kommentar hinterlassen")),0==this.state.success||null==this.state.success?r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement("div",{className:"comment-input-label"},r.a.createElement("label",null,"Kommentar",1!=this.state.triggered||this.state.content?"":r.a.createElement("span",{className:"error-string"},"Bitte geben Sie einen Kommentar ein"),r.a.createElement("textarea",{id:this.inputId,onChange:this.handleChange,name:"content",className:"textarea",rows:3}))),r.a.createElement("div",{className:"meta-input-container"},r.a.createElement("div",{className:"comment-input-label"},r.a.createElement("label",null,"Name *",1!=this.state.triggered||this.state.name?"":r.a.createElement("span",{className:"error-string"},"Bitte geben Sie einen Namen an"),r.a.createElement("input",{id:this.inputId,onChange:this.handleChange,name:"name",className:"input",type:"text"}))),r.a.createElement("div",{className:"comment-input-label"},r.a.createElement("label",null,"E-Mail (nicht öffentlich) *",1!=this.state.triggered||this.state.email?"":r.a.createElement("span",{className:"error-string"},"Bitte geben Sie eine E-Mail Adresse an"),r.a.createElement("input",{id:this.inputId,onChange:this.handleChange,name:"email",className:"input",type:"text"}))),r.a.createElement("div",{className:"comment-input-label"},r.a.createElement("label",null,"Website",r.a.createElement("input",{id:this.inputId,onChange:this.handleChange,name:"website",className:"input",type:"text"})))),r.a.createElement("div",null,r.a.createElement("span",{className:"comment-input-label"},r.a.createElement("label",null,"Captcha *",1==this.state.triggered&&0==this.state.captchaChecked?r.a.createElement("span",{className:"error-string"},"Bitte lösen Sie das Captcha"):"",r.a.createElement("div",{ref:this.captchaRef,style:{marginBottom:"5px"},id:this.recaptchaId,className:"g-recaptcha","data-sitekey":m})),r.a.createElement("button",{type:"submit",className:"button is-small "+(1==this.state.submitting?" is-loading":"")},"Absenden"))),null==this.state.success?"":r.a.createElement("div",{style:{marginTop:"5px"}},0==this.state.success?r.a.createElement("span",{className:"error-string"},r.a.createElement(s.s,{style:{position:"relative",top:"1px",marginRight:"10px"}}),r.a.createElement("span",null,"Oops, etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut!")):"")):r.a.createElement("div",null,r.a.createElement("span",{className:"success-string"},r.a.createElement(s.f,{style:{position:"relative",top:"1px",marginRight:"10px"}}),"Vielen Dank! Wir bitten Sie um Verständnis, dass wir Ihren Beitrag erst überprüfen, bevor wir ihn live stellen."),r.a.createElement("div",null,r.a.createElement("button",{className:"button is-small",onClick:this.onReset},"Neuen Kommentar erstellen"))))},t}(r.a.Component),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleInputMask=function(){n.setState({displayForm:!n.state.displayForm})},n.state={displayForm:!1},n}return u(t,e),t.prototype.render=function(){var e=this,n="number"==typeof this.props.comment.timestamp?o.unix(this.props.comment.timestamp).format("DD MMMM, YYYY - HH:mm"):o(this.props.comment.timestamp).format("DD MMMM, YYYY - HH:mm");return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{className:"comment-hr"}),r.a.createElement("div",{className:"columns comment-element-container",id:"comment-"+this.props.comment.guid},r.a.createElement("div",{className:"column is-1"},r.a.createElement("div",null,r.a.createElement("img",{className:"comment-avatar",src:"https://www.gravatar.com/avatar/"+c(this.props.comment.email)+"?s=60&d=mp"}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"comment-header"},r.a.createElement("span",null,this.props.comment.name),r.a.createElement("span",null,r.a.createElement(s.g,null),n)),r.a.createElement("div",null,r.a.createElement(l.b,{html:this.props.comment.ast})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggleInputMask.bind(this),className:"button comment-answer-button"},"Antworten")))),r.a.createElement("div",null,1==this.state.displayForm?r.a.createElement(p,{parent:this.props.comment.guid,slug:this.props.slug}):""),r.a.createElement("div",{className:"comment-children-container"},null!=this.props.comment.children?this.props.comment.children.map((function(n,a){return r.a.createElement("div",{key:a},r.a.createElement(t,{slug:e.props.slug,comment:n}))})):""))},t}(r.a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){var e=this;return this.props.comments.forEach((function(e){(function e(t){var n=1;return null!=t.children&&t.children.forEach((function(t){n+=e(t)})),n})(e)})),r.a.createElement("div",{className:"comment-container"},r.a.createElement("div",{className:"comment-headline"}),r.a.createElement("div",null,r.a.createElement(p,{slug:this.props.slug,parent:null})),r.a.createElement("div",null,this.props.comments.map((function(t,n){return r.a.createElement("div",{key:n},r.a.createElement(h,{slug:e.props.slug,comment:t}))}))))},t}(r.a.Component)},mmNF:function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n}}]);
//# sourceMappingURL=component---src-pagecomponents-post-page-post-page-tsx-488aab4ff2ee0147d854.js.map