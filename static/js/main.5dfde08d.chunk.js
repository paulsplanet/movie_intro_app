(this.webpackJsonpmovie_intro_app=this.webpackJsonpmovie_intro_app||[]).push([[0],{37:function(e,t,s){},60:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(29),c=s.n(i),r=s(9),o=s(2),l=(s(37),s(1));var m=function(e){return console.log(e),Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("span",{className:"quote",children:"\"You can't repeat the past?"}),Object(l.jsx)("span",{className:"quote",children:'Why of course you can."'}),Object(l.jsx)("span",{className:"author",children:"-Jay Gatsby"})]})},j=s(17),u=s.n(j),d=s(30),b=s(11),p=s(12),h=s(14),v=s(13),O=s(31),x=s.n(O),y=s(5),g=s.n(y);s(60);function f(e){var t=e.id,s=e.year,a=e.title,n=e.summary,i=e.poster,c=e.genres;return Object(l.jsx)(r.b,{className:"movie-section",to:{pathname:"/movie/".concat(t),state:{id:t,year:s,title:a,summary:n,poster:i,genres:c}},children:Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{className:"movie__img",src:i,alt:a,title:a}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:a}),Object(l.jsx)("h5",{className:"movie__year",children:s}),Object(l.jsx)("ul",{className:"genres",children:c.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[n.slice(0,175)," ..."]})]})]})})}f.prototype={id:g.a.number.isRequired,year:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var N=f,_=(s(64),function(e){Object(h.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(b.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var s,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(N,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component)),q=(s(65),function(e){Object(h.a)(s,e);var t=Object(v.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(p.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;console.log(t),void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsxs)("div",{className:"detail-section",children:[Object(l.jsx)("div",{className:"detail-imgsec",children:Object(l.jsx)("img",{className:"detail-img",src:e.state.poster})}),Object(l.jsxs)("div",{className:"detail-column",children:[Object(l.jsx)("span",{className:"detail-title",children:e.state.title}),Object(l.jsx)("span",{className:"detail-year",children:e.state.year}),Object(l.jsx)("ul",{className:"detail-genres",children:e.state.genres.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))}),Object(l.jsx)("span",{className:"detail-summary",children:e.state.summary})]})]}):null}}]),s}(n.a.Component));var k=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:"/About",children:"About"})]})};s(66);var R=function(){return Object(l.jsxs)(r.a,{className:"navi",children:[Object(l.jsx)(k,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(l.jsx)(o.a,{path:"/about",component:m}),Object(l.jsx)(o.a,{path:"/movie/:id",component:q})]})};c.a.render(Object(l.jsx)(R,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.5dfde08d.chunk.js.map