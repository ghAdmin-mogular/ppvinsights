(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+rwk":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("dI71"),r=n("q1tI"),s=n.n(r),o=function(t){function e(e){var n;return(n=t.call(this,e)||this).onScroll=function(t){var e=window.scrollY,a=document.getElementById("content-container");n.setState({fixed:e>a.offsetTop})},n.state={fixed:!1},n}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){1==this.props.isFixed&&window.addEventListener("scroll",this.onScroll)},n.componentWillUnmount=function(){1==this.props.isFixed&&window.removeEventListener("scroll",this.onScroll)},n.render=function(){return s.a.createElement("div",{className:1==this.state.fixed?"sidebar-fixed":"sidebar-not-fixed"},this.props.children)},e}(s.a.Component)},Gpdm:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("dI71"),r=n("q1tI"),s=n.n(r),o=(n("VLio"),function(t){function e(e){return t.call(this,e)||this}return Object(a.a)(e,t),e.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"category-bar"},this.props.title))},e}(s.a.Component))},Kxvw:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("dI71"),r=n("q1tI"),s=n.n(r),o=n("JuBv"),i=(n("j3n2"),n("ma3e")),c=n("wd/R"),u=function(t){function e(e){return t.call(this,e)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=c(this.props.frontmatter.date),e=null;return e=null!=this.props.frontmatter.updatedate&&""!=this.props.frontmatter.updatedate?c(this.props.frontmatter.updatedate):t,s.a.createElement("div",{className:"post-header"},s.a.createElement("div",{className:"post-meta"},s.a.createElement("div",{title:"Author"},s.a.createElement(o.a,{noPrefetch:!0,className:"action-link post-meta-data post-meta-content",to:"/author/"+this.props.author.frontmatter.slug},s.a.createElement(i.x,null),s.a.createElement("span",null,null!=this.props.author?this.props.author.frontmatter.firstname+" "+this.props.author.frontmatter.lastname:""))),null!=e?s.a.createElement("div",{title:"Bearbeitet",className:"post-meta-data post-meta-time"},s.a.createElement(i.k,null),s.a.createElement("span",{className:"post-meta-content"},e.format("DD. MMM YYYY"))):"",s.a.createElement("div",{title:"Angelegt",className:" post-meta-data post-meta-time"},s.a.createElement(i.h,null),s.a.createElement("span",{className:"post-meta-content"},t.format("DD. MMM YYYY")))),s.a.createElement("div",{className:"post-subtitle"},null!=this.props.frontmatter.subtitle?s.a.createElement(o.a,{to:"/"+this.props.frontmatter.slug},this.props.frontmatter.subtitle):""),s.a.createElement("div",null,s.a.createElement("h1",null,s.a.createElement(o.a,{to:"/"+this.props.frontmatter.slug},this.props.frontmatter.title))))},e}(s.a.Component)},TYzl:function(t,e,n){"use strict";n.r(e),n.d(e,"Search",(function(){return y})),n.d(e,"pageQuery",(function(){return w}));var a=n("dI71"),r=n("q1tI"),s=n.n(r),o=n("Aq8R"),i=n("+rwk"),c=n("xFIP"),u=n("9uds"),l=n("o0o1"),p=n.n(l),m=(n("ls82"),n("HaE+")),h=n("OKhy"),d=n("1wtQ"),f=n("cCPr"),v=n("Gpdm"),E=n("K9RH"),b=n("eG77"),g=function(t){function e(e){var n;return(n=t.call(this,e)||this).searchChangedHandler=function(){var t=Object(m.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.updateSearch(e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.state={posts:[],cnt:0,finished:!1,query:""},n}Object(a.a)(e,t);var n=e.prototype;return n.updateSearch=function(){var t=Object(m.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.setState({query:e,finished:!1}),null==e||""==e.trim()){t.next=7;break}return t.next=5,Object(h.k)(d.a.elasticSearchUri+"/docs/_search?pretty=true",{_source:["slug","abstract","title","subtitle","updatedate","date","author","image","categories","commentCnt"],query:{multi_match:{query:e,fields:["tags","title","subtitle","abstract","author","text"]}},size:d.a.elasticSearchResultLimit},{headers:{"Content-Type":"application/json",Authorization:"Basic "+d.a.elsaticBasicAuth}});case 5:(n=t.sent)&&n.hits&&n.hits.hits&&this.setState({posts:n.hits.hits.map((function(t){var e=t._source;return{frontmatter:{title:e.title,date:e.date,updatedate:e.updatedate,image:e.image,subtitle:e.subtitle,slug:e.slug,author:e.author,categories:e.categories},fields:{abstract:e.abstract,commentCnt:e.commentCnt}}})),cnt:n.hits.hits.length,finished:!0});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),b.a.trackError("Error fetching search results",t.t0);case 12:return t.prev=12,this.setState({finished:!0}),t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[0,9,12,15]])})));return function(e){return t.apply(this,arguments)}}(),n.componentDidMount=function(){var t=Object(m.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E.a.registerHandler(this.searchChangedHandler),void 0!==typeof window&&(e=Object(h.e)(),n=decodeURIComponent(e.query),this.updateSearch(n));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.componentWillUnmount=function(){E.a.unregisterHandler(this.searchChangedHandler)},n.render=function(){var t=Object(h.j)(this.props.data.categories.edges.map((function(t){return t.node}))),e=this.props.data.authors.edges.map((function(t){return t.node}));return r.createElement("div",{className:"search-results-container"},this.state.query?r.createElement(r.Fragment,null,1==this.state.finished?r.createElement(r.Fragment,null,r.createElement(v.a,{title:this.state.cnt+" Suchergebnisse für '"+this.state.query+"'"}),r.createElement(f.a,{posts:this.state.posts,categories:t,authors:e})):r.createElement(v.a,{title:"Lade Ergebnisse..."})):r.createElement(v.a,{title:"Bitte geben Sie einen Suchbegriff ein um Ergebnisse zu sehen."}))},e}(r.Component),y=function(t){function e(e){return t.call(this,e)||this}return Object(a.a)(e,t),e.prototype.render=function(){return s.a.createElement(o.b,{header:{url:"search",description:"Sucherergebnisse",type:"object",title:"Suchergebnisse",tags:["search"]},sidebar:s.a.createElement(i.a,{isFixed:!0},s.a.createElement(c.a,null),s.a.createElement(u.a,null))},s.a.createElement(g,{data:this.props.data}))},e}(s.a.Component),w=(e.default=function(t){var e=t.pageContext,n=t.data,a=t.location;return s.a.createElement(y,{data:n,location:a,context:e})},"4103831127")},VLio:function(t,e,n){},cCPr:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var a=n("dI71"),r=n("q1tI"),s=n.n(r),o=n("OKhy"),i=n("JuBv"),c=(n("j3n2"),n("Kxvw")),u=n("VOVi"),l=function(t){function e(e){return t.call(this,e)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props.post;return s.a.createElement("div",{className:"post-preview"},s.a.createElement("div",null,s.a.createElement(c.a,{frontmatter:t.frontmatter,commentCnt:t.fields.commentCnt,author:this.props.author,categories:this.props.categories})),s.a.createElement("div",{className:"post-content"},s.a.createElement(i.a,{to:"/"+t.frontmatter.slug},s.a.createElement(u.a,{content:this.props.post.fields.abstract?this.props.post.fields.abstract:this.props.post.excerpt}," "))))},e}(s.a.Component),p=(n("ewL5"),function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){return s.a.createElement("div",{className:"empty-content-container"},"Hier gibt es noch keine Inhalte")},e}(s.a.Component)),m=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this;return s.a.createElement("div",{className:"post-list"},this.props.posts.map((function(e,n){return s.a.createElement("div",{className:"post-list-element",key:n},s.a.createElement(l,{post:e,categories:e.frontmatter.categories.map((function(e){return Object(o.d)(e,t.props.categories)})),author:Object(o.c)(e.frontmatter.author,t.props.authors)}))})),0==this.props.posts.length?s.a.createElement(p,null):"")},e}(s.a.Component)},j3n2:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pagecomponents-search-page-search-page-tsx-f5581e0ea6dc43ee83a2.js.map