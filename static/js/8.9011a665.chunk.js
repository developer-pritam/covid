(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[8],{159:function(t,e,n){"use strict";var c=n(2),a=n(94),s=["mousedown","touchstart"];e.a=function(t,e,n){void 0===n&&(n=s);var r=Object(c.useRef)(e);Object(c.useEffect)((function(){r.current=e}),[e]),Object(c.useEffect)((function(){for(var e=function(e){var n=t.current;n&&!n.contains(e.target)&&r.current(e)},c=0,s=n;c<s.length;c++){var o=s[c];Object(a.d)(document,o,e)}return function(){for(var t=0,c=n;t<c.length;t++){var s=c[t];Object(a.c)(document,s,e)}}}),[n,t])}},231:function(t,e,n){"use strict";n.r(e);var c=n(45),a=n(11),s=n(93),r=n.n(s),o=n(2),i=n(290),d=n(5),l=n(98),u=n(159),j=n(19),b=void 0,f=function(t){var e=t.stateCode,n=t.trail,s=Object(o.useState)(!1),f=Object(c.a)(s,2),m=f[0],O=f[1],v=Object(o.useRef)(),h=Object(d.g)(),p=Object(i.a)().t;Object(u.a)(v,(function(){O(!1)}));var x=Object(l.useTransition)(m,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),y=Object(o.useCallback)((function(t){O(!1),h.push("/state/".concat(t))}),[h]);return Object(j.jsxs)("div",{className:"StateDropdown",ref:v,children:[Object(j.jsx)(l.animated.h1,{className:r()("state-name","fadeInUp",{expanded:m}),style:n,onClick:O.bind(b,!m),children:p(a.y[e])}),x((function(t,n){return n&&Object(j.jsx)(l.animated.div,{className:"dropdown",style:t,children:Object.keys(a.o).filter((function(t){return"TT"!==t&&t!==e})).sort((function(t,e){return a.y[t].localeCompare(a.y[e])})).map((function(t){return Object(j.jsx)("h1",{className:"item",onClick:y.bind(b,t),children:p(a.y[t])},t)}))})})),m&&Object(j.jsx)("div",{className:"backdrop"})]})},m=n(24);function O(t){var e,n,c,s,r,d=t.data,u=t.stateCode,b=Object(i.a)().t,O=Object(o.useMemo)((function(){var t=[];return[0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]),v=Object(l.useSpring)({total:Object(m.i)(d,"total","tested"),config:a.v});return Object(j.jsxs)("div",{className:"StateHeader",children:[Object(j.jsxs)("div",{className:"header-left",children:[Object(j.jsx)(f,{stateCode:u,hyperlink:!1,trail:O[0]}),(null===d||void 0===d||null===(e=d.meta)||void 0===e?void 0:e.last_updated)&&Object(j.jsx)("h5",{className:"fadeInUp",style:O[1],children:"".concat(b("Last Updated on")," ").concat(Object(m.c)(d.meta.last_updated,"dd MMM, p")," ").concat(b("IST"))})]}),Object(j.jsxs)("div",{className:"header-right fadeInUp",style:O[2],children:[Object(j.jsx)("h5",{children:b("Tested")}),Object(j.jsx)(l.animated.h2,{children:v.total.to((function(t){return Object(m.f)(t,"long")}))}),(null===d||void 0===d||null===(n=d.meta)||void 0===n||null===(c=n.tested)||void 0===c?void 0:c.date)&&Object(j.jsx)("h5",{className:"timestamp",children:"".concat(b("As of")," ").concat(Object(m.c)(d.meta.tested.date,"dd MMMM"))}),(null===d||void 0===d||null===(s=d.meta)||void 0===s||null===(r=s.tested)||void 0===r?void 0:r.source)&&Object(j.jsxs)("h5",{children:["".concat(b("per")," "),Object(j.jsx)("a",{href:d.meta.tested.source,target:"_noblank",children:b("source")})]})]})]})}e.default=Object(o.memo)(O)}}]);
//# sourceMappingURL=8.9011a665.chunk.js.map