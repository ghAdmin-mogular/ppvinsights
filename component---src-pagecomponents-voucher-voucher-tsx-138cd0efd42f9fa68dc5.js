(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{aBw5:function(e,t,n){"use strict";n.r(t),n.d(t,"VoucherPage",(function(){return h}));n("rE2o"),n("ioFf"),n("rGqo"),n("KKXr"),n("OG14");var r=n("q1tI"),a=n.n(r),i=n("Aq8R"),l=n("+rwk"),o=n("xFIP"),u=n("9uds"),s=n("xgjF"),c=n("ruFX"),m=n("Wbzz"),d=n("1wtQ");var h=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).onSubscribe=function(){c.a.openForm()},n.handleChange=function(e){n.setState({code:e.target.value})},n.onRedeem=function(e){if(e.preventDefault(),null==n.state.code||""==n.state.code.trim())n.setState({error:"Bitte geben sie einen validen Gutscheincode ein."});else{var t=new Date,r=n.state.code.toUpperCase(),a="https://www.udemy.com/einfuehrung-in-power-pivot/?couponCode="+(r=r+t.getFullYear()+"_"+("0"+(t.getMonth()+1)).slice(-2));window.open(a,"_blank"),n.setState({error:null})}},n.state={code:null,error:null,hasQueryVoucher:!1},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var h=r.prototype;return h.componentDidMount=function(){if("undefined"!=typeof window){var e={},t=this.props.location.search.substr(1).split("&"),n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var a;if(n){if(r>=t.length)break;a=t[r++]}else{if((r=t.next()).done)break;a=r.value}var i=a.split("=");2==i.length&&(e[i[0]]=i[1])}if(null!=e.gutscheincode||null!=e.coupon){var l=e.gutscheincode||e.coupon;document.getElementById("redeem-input").value=l,this.setState({code:l,hasQueryVoucher:!0})}}},h.render=function(){var e={description:"Artikel, Tipps&Tricks, Online Kurse zu Excel Power Pivot, Power BI und Power Query | Gutschein für kostenlose Kurse einlösen",title:"Home | "+d.a.site.title,type:"website",url:"gutschein"};return a.a.createElement(i.b,{header:e,sidebar:a.a.createElement(l.a,{isFixed:!0},a.a.createElement(o.a,null),a.a.createElement(u.a,null),a.a.createElement(s.a,null))},a.a.createElement("div",{className:"section"},a.a.createElement("h1",null,"Dein Gutschein"),a.a.createElement("p",null,"Super! Du hast einen Gutschein für unseren Online-Kurs erhalten!"),a.a.createElement("p",null,'In unserem Online-Kurs "Einführung in Power Pivot" zeigen wir dir, was du mit Excel Power Pivot machen kannst. Wenn du mehr wissen willst, findest du hier auf unserem Blog viele Artikel zu den Themen Excel Power Pivot, Power Query und Power BI. Melde dich zu unserem Newsletter an und du verpasst keinen Artikel.'),a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("button",{className:"button action-button",onClick:this.onSubscribe},"Zum Newsletter anmelden"))),a.a.createElement("div",{className:"section"},a.a.createElement("form",{onSubmit:this.onRedeem},a.a.createElement("h1",null,"Gutschein einlösen"),0==this.state.hasQueryVoucher?a.a.createElement("p",null,"Tippe hier den Gutscheincode ein und wir leiten dich direkt zum Anbieter weiter"):a.a.createElement("p",null,"Löse deinen Gutschein ein und wir leiten dich direkt zum Anbieter weiter"),a.a.createElement("div",null,a.a.createElement("div",{className:"input-label"},a.a.createElement("label",null,"Gutscheincode"),null!=this.state.error?a.a.createElement("span",{className:"error-string"},this.state.error):""),a.a.createElement("input",{id:"redeem-input",onChange:this.handleChange,name:"gutscheincode",className:"input",type:"text"})),a.a.createElement("div",{style:{textAlign:"center",marginTop:".5em"}},a.a.createElement("input",{type:"submit",className:"button action-button",value:"meinen Gutschein einlösen"})),a.a.createElement("div",{style:{marginTop:"15px"}},a.a.createElement("p",null,a.a.createElement("b",null,"Probleme mit dem Gutschein?")," ",a.a.createElement(m.Link,{to:"/kontakt"},"Bitte kurze Nachricht an uns!"))))))},r}(a.a.Component);t.default=function(e){e.data,e.pageContext;var t=e.location;return a.a.createElement(h,{location:t})}}}]);
//# sourceMappingURL=component---src-pagecomponents-voucher-voucher-tsx-138cd0efd42f9fa68dc5.js.map