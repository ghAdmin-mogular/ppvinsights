(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{207:function(t,e,r){"use strict";r.r(e),r.d(e,"Category",function(){return f}),r.d(e,"pageQuery",function(){return d});r(136);var n=r(0),o=r.n(n),a=r(217),s=r(213),i=r(216),c=r(227),p=r(218),l=r(233),u=r(215),m=r(230);var f=function(t){var e,r;function n(e){return t.call(this,e)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){for(var t=this.props.data.posts.edges.map(function(t){return t.node}).sort(function(t,e){return t.fields.timestamp>e.fields.timestamp?-1:1}),e=Object(i.f)(this.props.data.categories.edges.map(function(t){return t.node})),r=this.props.data.authors.edges.map(function(t){return t.node}),n=Object(i.c)(this.props.context.cat,e),f=n.friendlyname,d=n.slug,h=n.parent,v=[n.friendlyname];null!=h;)f=h.friendlyname+" / "+f,d=Object(i.h)(h.slug,d),v.push(h.friendlyname),h=h.parent;var y={url:Object(i.h)("category",d),description:"Posts about "+n.friendlyname,type:"object",title:n.friendlyname+" Archive | Powerpivot Insights | Durchblick durch Daten",tags:v};return o.a.createElement(a.b,{header:y,sidebar:o.a.createElement(s.a,{isFixed:!0},o.a.createElement(c.a,null),o.a.createElement(p.a,null),o.a.createElement(l.a,null))},o.a.createElement(u.a,{title:"Kategorie / "+f}),o.a.createElement(m.a,{posts:t,categories:e,authors:r}))},n}(o.a.Component);e.default=function(t){var e=t.pageContext,r=t.data,n=t.location;return o.a.createElement(f,{data:r,location:n,context:e})};var d="2299299968"},213:function(t,e,r){"use strict";r.d(e,"a",function(){return a});r(212);var n=r(0),o=r.n(n);var a=function(t){var e,r;function n(e){var r;return(r=t.call(this,e)||this).onScroll=function(t){var e=window.scrollY,n=document.getElementById("content-container");r.setState({fixed:e>n.offsetTop})},r.state={fixed:!1},r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=n.prototype;return a.componentDidMount=function(){1==this.props.isFixed&&window.addEventListener("scroll",this.onScroll)},a.componentWillUnmount=function(){1==this.props.isFixed&&window.removeEventListener("scroll",this.onScroll)},a.render=function(){return o.a.createElement("div",{className:1==this.state.fixed?"sidebar-fixed":"sidebar-not-fixed"},this.props.children)},n}(o.a.Component)},215:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(0),o=r.n(n);r(224);var a=function(t){var e,r;function n(e){return t.call(this,e)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"category-bar"},this.props.title))},n}(o.a.Component)},219:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r(0),o=r.n(n),a=r(96),s=(r(222),r(214)),i=r(221);var c=function(t){var e,r;function n(e){return t.call(this,e)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=i(this.props.frontmatter.date),e=null;return null!=this.props.frontmatter.updatedate&&""!=this.props.frontmatter.updatedate&&(Math.abs(t.diff(e))<=864e5||1==e.isBefore(t)||(e=i(this.props.frontmatter.updatedate))),o.a.createElement("div",{className:"post-header"},o.a.createElement("div",{className:"post-meta"},o.a.createElement("div",{title:"Author"},o.a.createElement(s.s,null),o.a.createElement(a.Link,{className:"post-meta-content",to:"/author/"+this.props.author.frontmatter.slug},null!=this.props.author?this.props.author.frontmatter.firstname+" "+this.props.author.frontmatter.lastname:"")),null!=e?o.a.createElement("div",{title:"Bearbeitet",className:"post-meta-time"},o.a.createElement(s.h,null),o.a.createElement("span",{className:"post-meta-content"},e.format("DD MMM, 'YY"))):"",o.a.createElement("div",{title:"Angelegt",className:"post-meta-time"},o.a.createElement(s.f,null),o.a.createElement("span",{className:"post-meta-content"},t.format("DD MMM, 'YY")))),o.a.createElement("div",{className:"post-subtitle"},null!=this.props.frontmatter.subtitle?o.a.createElement(a.Link,{to:this.props.frontmatter.slug},this.props.frontmatter.subtitle):""),o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement(a.Link,{to:this.props.frontmatter.slug},this.props.frontmatter.title))))},n}(o.a.Component)},230:function(t,e,r){"use strict";var n=r(0),o=r.n(n),a=r(216),s=r(96),i=(r(222),r(219)),c=r(220);var p=function(t){var e,r;function n(e){return t.call(this,e)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.post;return o.a.createElement("div",{className:"post-preview"},o.a.createElement("div",null,o.a.createElement(i.a,{frontmatter:t.frontmatter,commentCnt:t.fields.commentCnt,author:this.props.author,categories:this.props.categories})),o.a.createElement("div",{className:"post-content"},o.a.createElement(s.Link,{to:t.frontmatter.slug},o.a.createElement(c.a,{content:this.props.post.fields.abstract?this.props.post.fields.abstract:this.props.post.excerpt}," "))))},n}(o.a.Component);r(229);var l=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return o.a.createElement("div",{className:"empty-content-container"},"Hier gibt es noch keine Inhalte")},n}(o.a.Component);r.d(e,"a",function(){return u});var u=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this;return o.a.createElement("div",null,this.props.posts.map(function(e,r){return o.a.createElement("div",{key:r},o.a.createElement(p,{post:e,categories:e.frontmatter.categories.map(function(e){return Object(a.c)(e,t.props.categories)}),author:Object(a.b)(e.frontmatter.author,t.props.authors)}))}),0==this.props.posts.length?o.a.createElement(l,null):"")},n}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pagecomponents-category-page-category-page-tsx-0e858c939304e8bb04c7.js.map