(this.webpackJsonpmovie_intro_app=this.webpackJsonpmovie_intro_app||[]).push([[0],{46:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var a=s(3),i=s.n(a),r=s(14),n=s.n(r),c=s(5),o=s.n(c),m=s(15),u=s(16),d=s(17),l=s(20),j=s(19),v=s(18),p=s.n(v),b=s(2),g=s.n(b),h=(s(46),s(0));function O(e){var t=e.year,s=e.title,a=e.summary,i=e.poster,r=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:i,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:s}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsx)("ul",{className:"genres",children:r.map((function(e,t){return Object(h.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(h.jsx)("p",{className:"movie__summary",children:a})]})]})}O.prototype={id:g.a.number.isRequired,year:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var _=O,y=(s(48),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(i.a.Component));n.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.72f75c0d.chunk.js.map