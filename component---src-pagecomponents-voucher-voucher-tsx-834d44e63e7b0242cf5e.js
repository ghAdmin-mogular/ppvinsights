(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+rwk":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("9Hrx"),i=n("q1tI"),a=n.n(i),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).onScroll=function(e){var t=window.scrollY,r=document.getElementById("content-container");n.setState({fixed:t>r.offsetTop})},n.state={fixed:!1},n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){1==this.props.isFixed&&window.addEventListener("scroll",this.onScroll)},n.componentWillUnmount=function(){1==this.props.isFixed&&window.removeEventListener("scroll",this.onScroll)},n.render=function(){return a.a.createElement("div",{className:1==this.state.fixed?"sidebar-fixed":"sidebar-not-fixed"},this.props.children)},t}(a.a.Component)},aBw5:function(e,t,n){"use strict";n.r(t),n.d(t,"VoucherPage",(function(){return w}));var r=n("9Hrx"),i=n("q1tI"),a=n.n(i),o=n("Aq8R"),l=n("+rwk"),u=n("xFIP"),c=n("9uds"),s=n("xgjF"),d=n("ruFX"),m=n("Wbzz"),h=n("1wtQ");function p(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSubscribe=function(){d.a.openForm()},n.handleChange=function(e){n.setState({code:e.target.value})},n.onRedeem=function(e){if(e.preventDefault(),null==n.state.code||""==n.state.code.trim())n.setState({error:"Bitte geben sie einen validen Gutscheincode ein."});else{var t=new Date,r=n.state.code.toUpperCase(),i="https://www.udemy.com/einfuehrung-in-power-pivot/?couponCode="+(r=r+t.getFullYear()+"_"+("0"+(t.getMonth()+1)).slice(-2));window.open(i,"_blank"),n.setState({error:null})}},n.state={code:null,error:null,hasQueryVoucher:!1},n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){if("undefined"!=typeof window){for(var e,t={},n=p(this.props.location.search.substr(1).split("&"));!(e=n()).done;){var r=e.value.split("=");2==r.length&&(t[r[0]]=r[1])}if(null!=t.gutscheincode||null!=t.coupon){var i=t.gutscheincode||t.coupon;document.getElementById("redeem-input").value=i,this.setState({code:i,hasQueryVoucher:!0})}}},n.render=function(){var e={description:"Artikel, Tipps&Tricks, Online Kurse zu Excel Power Pivot, Power BI und Power Query | Gutschein für kostenlose Kurse einlösen",title:"Home | "+h.a.site.title,type:"website",url:"gutschein"};return a.a.createElement(o.b,{header:e,sidebar:a.a.createElement(l.a,{isFixed:!0},a.a.createElement(u.a,null),a.a.createElement(c.a,null),a.a.createElement(s.a,null))},a.a.createElement("div",{className:"section"},a.a.createElement("h1",null,"Dein Gutschein"),a.a.createElement("p",null,"Super! Du hast einen Gutschein für unseren Online-Kurs erhalten!"),a.a.createElement("p",null,'In unserem Online-Kurs "Einführung in Power Pivot" zeigen wir dir, was du mit Excel Power Pivot machen kannst. Wenn du mehr wissen willst, findest du hier auf unserem Blog viele Artikel zu den Themen Excel Power Pivot, Power Query und Power BI. Melde dich zu unserem Newsletter an und du verpasst keinen Artikel.'),a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("button",{className:"button action-button",onClick:this.onSubscribe},"Zum Newsletter anmelden"))),a.a.createElement("div",{className:"section"},a.a.createElement("form",{onSubmit:this.onRedeem},a.a.createElement("h1",null,"Gutschein einlösen"),0==this.state.hasQueryVoucher?a.a.createElement("p",null,"Tippe hier den Gutscheincode ein und wir leiten dich direkt zum Anbieter weiter"):a.a.createElement("p",null,"Löse deinen Gutschein ein und wir leiten dich direkt zum Anbieter weiter"),a.a.createElement("div",null,a.a.createElement("div",{className:"input-label"},a.a.createElement("label",null,"Gutscheincode"),null!=this.state.error?a.a.createElement("span",{className:"error-string"},this.state.error):""),a.a.createElement("input",{id:"redeem-input",onChange:this.handleChange,name:"gutscheincode",className:"input",type:"text"})),a.a.createElement("div",{style:{textAlign:"center",marginTop:".5em"}},a.a.createElement("input",{type:"submit",className:"button action-button",value:"meinen Gutschein einlösen"})),a.a.createElement("div",{style:{marginTop:"15px"}},a.a.createElement("p",null,a.a.createElement("b",null,"Probleme mit dem Gutschein?")," ",a.a.createElement(m.Link,{to:"/kontakt"},"Bitte kurze Nachricht an uns!"))))))},t}(a.a.Component);t.default=function(e){e.data,e.pageContext;var t=e.location;return a.a.createElement(w,{location:t})}}}]);
//# sourceMappingURL=component---src-pagecomponents-voucher-voucher-tsx-834d44e63e7b0242cf5e.js.map