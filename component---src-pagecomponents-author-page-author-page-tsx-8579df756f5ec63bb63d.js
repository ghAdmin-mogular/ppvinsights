(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+rwk":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r("9Hrx"),n=r("q1tI"),o=r.n(n),s=function(t){function e(e){var r;return(r=t.call(this,e)||this).onScroll=function(t){var e=window.scrollY,a=document.getElementById("content-container");r.setState({fixed:e>a.offsetTop})},r.state={fixed:!1},r}Object(a.a)(e,t);var r=e.prototype;return r.componentDidMount=function(){1==this.props.isFixed&&window.addEventListener("scroll",this.onScroll)},r.componentWillUnmount=function(){1==this.props.isFixed&&window.removeEventListener("scroll",this.onScroll)},r.render=function(){return o.a.createElement("div",{className:1==this.state.fixed?"sidebar-fixed":"sidebar-not-fixed"},this.props.children)},e}(o.a.Component)},"10Je":function(t,e,r){"use strict";r.r(e),r.d(e,"AuthorPage",(function(){return d})),r.d(e,"pageQuery",(function(){return f}));var a=r("9Hrx"),n=r("q1tI"),o=r.n(n),s=r("XMMh"),i=r("Aq8R"),c=r("+rwk"),p=r("xFIP"),u=r("9uds"),l=r("Gpdm"),m=r("cCPr"),h=r("OKhy"),d=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props.data.posts.edges.map((function(t){return t.node})).sort((function(t,e){return t.fields.timestamp>e.fields.timestamp?-1:1})),e=this.props.data.categories.edges.map((function(t){return t.node})),r={url:Object(h.j)("author",this.props.context.author.frontmatter.slug),description:"Posts von "+this.props.context.author.frontmatter.firstname+" "+this.props.context.author.frontmatter.lastname,type:"object",title:this.props.context.author.frontmatter.firstname+" "+this.props.context.author.frontmatter.lastname+", Autor bei Durchblick durch Daten",tags:["author",this.props.context.author.frontmatter.firstname,this.props.context.author.frontmatter.lastname],image:this.props.data.avatar.childImageSharp.fixed.src};return o.a.createElement(i.b,{header:r,sidebar:o.a.createElement(c.a,{isFixed:!1},o.a.createElement(p.a,null),o.a.createElement(u.a,null))},o.a.createElement(l.a,{title:"Author"}),o.a.createElement(s.a,{badge:this.props.data.authorBadge,author:this.props.context.author,avatar:this.props.data.avatar}),o.a.createElement("hr",null),o.a.createElement(m.a,{posts:t,categories:Object(h.g)(e),authors:[this.props.context.author]}))},e}(o.a.Component);e.default=function(t){var e=t.data,r=t.pageContext,a=t.location;return o.a.createElement(d,{data:e,context:r,location:a})};var f="468516735"},Gpdm:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r("9Hrx"),n=r("q1tI"),o=r.n(n),s=(r("VLio"),function(t){function e(e){return t.call(this,e)||this}return Object(a.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"category-bar"},this.props.title))},e}(o.a.Component))},Kxvw:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var a=r("9Hrx"),n=r("q1tI"),o=r.n(n),s=r("Wbzz"),i=(r("j3n2"),r("ma3e")),c=r("wd/R"),p=function(t){function e(e){return t.call(this,e)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=c(this.props.frontmatter.date),e=null;return null!=this.props.frontmatter.updatedate&&""!=this.props.frontmatter.updatedate&&(e=c(this.props.frontmatter.updatedate),(Math.abs(t.diff(e))>=864e5||1==e.isAfter(t))&&(e=c(this.props.frontmatter.updatedate))),o.a.createElement("div",{className:"post-header"},o.a.createElement("div",{className:"post-meta"},o.a.createElement("div",{title:"Author"},o.a.createElement(s.Link,{className:"post-meta-data post-meta-content",to:"/author/"+this.props.author.frontmatter.slug},o.a.createElement(i.u,null),o.a.createElement("span",null,null!=this.props.author?this.props.author.frontmatter.firstname+" "+this.props.author.frontmatter.lastname:""))),null!=e?o.a.createElement("div",{title:"Bearbeitet",className:"post-meta-data post-meta-time"},o.a.createElement(i.j,null),o.a.createElement("span",{className:"post-meta-content"},e.format("DD. MMM YYYY"))):"",o.a.createElement("div",{title:"Angelegt",className:" post-meta-data post-meta-time"},o.a.createElement(i.g,null),o.a.createElement("span",{className:"post-meta-content"},t.format("DD. MMM YYYY")))),o.a.createElement("div",{className:"post-subtitle"},null!=this.props.frontmatter.subtitle?o.a.createElement(s.Link,{to:"/"+this.props.frontmatter.slug},this.props.frontmatter.subtitle):""),o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement(s.Link,{to:"/"+this.props.frontmatter.slug},this.props.frontmatter.title))))},e}(o.a.Component)},VLio:function(t,e,r){},cCPr:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var a=r("9Hrx"),n=r("q1tI"),o=r.n(n),s=r("OKhy"),i=r("Wbzz"),c=(r("j3n2"),r("Kxvw")),p=r("VOVi"),u=function(t){function e(e){return t.call(this,e)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props.post;return o.a.createElement("div",{className:"post-preview"},o.a.createElement("div",null,o.a.createElement(c.a,{frontmatter:t.frontmatter,commentCnt:t.fields.commentCnt,author:this.props.author,categories:this.props.categories})),o.a.createElement("div",{className:"post-content"},o.a.createElement(i.Link,{to:"/"+t.frontmatter.slug},o.a.createElement(p.a,{content:this.props.post.fields.abstract?this.props.post.fields.abstract:this.props.post.excerpt}," "))))},e}(o.a.Component),l=(r("ewL5"),function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",{className:"empty-content-container"},"Hier gibt es noch keine Inhalte")},e}(o.a.Component)),m=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this;return o.a.createElement("div",null,this.props.posts.map((function(e,r){return o.a.createElement("div",{key:r},o.a.createElement(u,{post:e,categories:e.frontmatter.categories.map((function(e){return Object(s.c)(e,t.props.categories)})),author:Object(s.b)(e.frontmatter.author,t.props.authors)}))})),0==this.props.posts.length?o.a.createElement(l,null):"")},e}(o.a.Component)},j3n2:function(t,e,r){}}]);
//# sourceMappingURL=component---src-pagecomponents-author-page-author-page-tsx-8579df756f5ec63bb63d.js.map