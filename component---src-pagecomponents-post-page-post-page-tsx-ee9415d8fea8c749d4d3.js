(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{210:function(t,e,r){"use strict";r.r(e);r(39),r(225);var n=r(0),a=r.n(n),o=r(217),s=r(213),i=r(239),p=r(218),c=r(215),l=r(219),u=r(220),m=r(216);r(228);var d=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"contentfooter-container"},a.a.createElement("hr",null),this.props.children))},n}(a.a.Component),f=r(240),h=r(214),v=r(96);var E=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"next-prev-container"},a.a.createElement("div",{style:{flexBasis:"content"}},null==this.props.previousPost?"":a.a.createElement(v.Link,{to:"/"+this.props.previousPost.route,title:this.props.previousPost.title},a.a.createElement("span",{style:{verticalAlign:"middle",marginRight:"10px"}},a.a.createElement(h.a,null)),a.a.createElement("span",null,this.props.previousPost.title.length<=28?this.props.previousPost.title:this.props.previousPost.title.substr(0,25)+"..."))),a.a.createElement("div",{style:{flexBasis:"content"}},null==this.props.nextPost?"":a.a.createElement(v.Link,{to:"/"+this.props.nextPost.route,title:this.props.nextPost.title},a.a.createElement("span",null,this.props.nextPost.title.length<=28?this.props.nextPost.title:this.props.nextPost.title.substr(0,25)+"..."),a.a.createElement("span",{className:"next-prev-icon"},a.a.createElement(h.b,null))))))},n}(a.a.Component),g=r(265),y=r(264),b=r(241);r.d(e,"PostPage",function(){return x}),r.d(e,"pageQuery",function(){return _});var x=function(t){var e,r;function n(e){return t.call(this,e)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.data.post,e=this.props.context,r=Object(m.f)(this.props.data.categories.edges.map(function(t){return t.node})),n=t.frontmatter.categories.map(function(t){return Object(m.c)(t,r)}),h=this.props.data.tags.edges.map(function(t){return t.node}),v=this.props.data.post.frontmatter.tags.map(function(t){return h.find(function(e){return e.slug==t})}),x={url:this.props.data.post.frontmatter.slug,description:t.frontmatter.description,type:"article",title:t.frontmatter.title,tags:v.map(function(t){return t.name}),image:null!=this.props.data.post.frontmatter.image?this.props.data.image.childImageSharp.fluid.src:null,updated_time:t.frontmatter.updatedate,publish_time:t.frontmatter.date};return a.a.createElement(o.b,{sidebar:a.a.createElement(s.a,{isFixed:!0},a.a.createElement(i.a,{tableOfContents:t.tableOfContents}),a.a.createElement(p.a,null)),categoryBar:a.a.createElement(c.a,{title:n.map(function(t){return t.friendlyname}).join(" - ")}),header:x},a.a.createElement(l.a,{frontmatter:t.frontmatter,commentCnt:t.fields.commentCnt,author:e.author,categories:n,isPreview:!1}),a.a.createElement("div",{className:"post-content"},a.a.createElement(u.b,{html:t.htmlAst}),null==t.fields.subscriberContent||0==t.fields.subscriberContent.length?"":a.a.createElement(y.a,{content:t.fields.subscriberContent})),a.a.createElement(d,null,a.a.createElement(f.a,{tags:v,categories:n}),a.a.createElement(E,{nextPost:e.next,previousPost:e.prev}),a.a.createElement(b.a,{author:this.props.context.author,avatar:this.props.data.avatar}),a.a.createElement(g.a,{slug:t.frontmatter.slug,comments:e.comments})))},n}(a.a.Component),_=(e.default=function(t){var e=t.data,r=t.pageContext,n=t.location;return a.a.createElement(x,{location:n,data:e,context:r})},"1533101689")},215:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(0),a=r.n(n);r(224);var o=function(t){var e,r;function n(e){return t.call(this,e)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"category-bar"},this.props.title))},n}(a.a.Component)}}]);
//# sourceMappingURL=component---src-pagecomponents-post-page-post-page-tsx-ee9415d8fea8c749d4d3.js.map