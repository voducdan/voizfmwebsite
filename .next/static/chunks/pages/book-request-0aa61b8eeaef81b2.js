(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[574],{7354:function(t,e,n){"use strict";var r=n(5318);e.Z=void 0;var o=r(n(4938)),i=n(5893),c=(0,o.default)((0,i.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");e.Z=c},7036:function(t,e,n){"use strict";var r=n(5318);e.Z=void 0;var o=r(n(4938)),i=n(5893),c=(0,o.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.Z=c},9609:function(t,e,n){"use strict";var r=n(5318);e.Z=void 0;var o=r(n(4938)),i=n(5893),c=(0,o.default)((0,i.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");e.Z=c},4540:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/book-request",function(){return n(4935)}])},4935:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return O}});var r=n(5893),o=n(4051),i=n.n(o),c=n(7294),s=n(7357),a=n(5861),l=n(4054),u=n(89),x=n(7109),d=n(9661),h=n(9609),p=n(7354),f=n(7036),m=n(8210),b=n(7426),v=n(9061),g=n(9587),w=n(2055);function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Z(t,e,n,r,o,i,c){try{var s=t[i](c),a=s.value}catch(l){return void n(l)}s.done?e(a):Promise.resolve(a).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){Z(i,r,o,c,s,"next",t)}function s(t){Z(i,r,o,c,s,"throw",t)}c(void 0)}))}}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){D(t,e,n[e])}))}return t}function _(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(){var t=new w.Z,e=(0,v.Z)().width<=b.nN.sm,n=(0,c.useState)(""),o=n[0],j=n[1],Z=(0,c.useState)(!1),D=Z[0],N=Z[1],O=(0,c.useState)([]),k=O[0],S=O[1],A=(0,c.useState)(!1),E=A[0],X=A[1];(0,c.useEffect)((function(){function e(){return(e=y(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRequestedBook();case 2:n=e.sent,r=n.data.data,S(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,c.useEffect)((function(){D&&setTimeout((function(){N(!1)}),3e3)}),[D]);var G=function(){var e=y(i().mark((function e(){var n,r,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.requestedBook({body:o});case 2:return n=e.sent,e.next=5,n.data.data;case 5:r=e.sent,c=[r].concat(_(k)),S(c),N(!0),j(""),X(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(t){return Object.keys(t.user).length>0?{name:"".concat(t.user.first_name," ").concat(t.user.last_name),avt:t.user.avatar.thumb_url}:{name:t.admin.fullname,avt:t.admin.avatar.thumb_url}};return(0,r.jsx)(s.Z,{sx:{width:"100%",pt:"10vh"},children:(0,r.jsxs)(s.Z,{sx:{width:e?"90%":"60%",m:"0 auto"},children:[(0,r.jsxs)(s.Z,{sx:M({width:"100%"},(0,m.X)("flex-start","center"),{columnGap:"16px"}),children:[(0,r.jsx)(g.eZ,{bgfill:"none",fill:"white",border:b.DM.second,width:"30",height:"30"}),(0,r.jsx)(a.Z,{sx:M({},b.gN.title1,{color:b.DM.contentIcon}),children:"\u0110\u1ec1 ngh\u1ecb s\xe1ch"})]}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(a.Z,{sx:M({},e?b.gN.h3:b.gN.h1,{color:b.DM.white,mt:e?"18px":"26px",mb:e?"65px":"108px"}),children:"Vui l\xf2ng nh\u1eadp t\u1ef1a s\xe1ch b\u1ea1n mu\u1ed1n y\xeau c\u1ea7u"})}),(0,r.jsxs)(s.Z,{sx:{width:"100%",position:"relative"},children:[(0,r.jsx)(l.Z,{fullWidth:!0,sx:{m:1},variant:"standard",children:(0,r.jsx)(u.Z,{placeholder:"Nh\u1eadp c\xe0ng nhi\u1ec1u c\xe0ng t\u1ed1t nh\xe9!",value:o,onChange:function(t){""!==t.target.value?X(!0):X(!1),j(t.target.value)},sx:{color:b.DM.placeHolder,fontFamily:"Mulish",fontWeight:500,fontSize:"1rem",lineHeight:"20px",pb:"24px",input:{ml:"8px"},"::before":{borderBottom:"1px solid ".concat(b.DM.bg2)}},startAdornment:(0,r.jsx)(x.Z,{position:"start",children:(0,r.jsx)(h.Z,{sx:{color:b.DM.placeHolder}})}),endAdornment:(0,r.jsx)(x.Z,{onClick:G,position:"end",sx:{bgcolor:E?b.DM.main:b.DM.bg3,width:e?"32px":"48px",height:e?"32px":"48px",maxHeight:e?"32px":"48px",maxWidth:e?"32px":"48px",borderRadius:"50%",cursor:"pointer"},children:(0,r.jsx)(p.Z,{sx:{color:b.DM.white,p:e?"4px":"12px"}})})})}),D&&(0,r.jsxs)(s.Z,{sx:M({width:"100%",height:"48px",bgcolor:"#15603f"},(0,m.X)("flex-start","center"),{columnGap:"8px",borderRadius:"4px",pl:"22px",mt:"20px",boxSizing:"border-box"}),children:[(0,r.jsx)(f.Z,{sx:{color:b.DM.white}}),(0,r.jsx)(a.Z,{sx:M({},b.gN.content1,{color:b.DM.white}),children:"N\u1ed9i dung b\u1ea1n y\xeau c\u1ea7u \u0111\xe3 \u0111\u01b0\u1ee3c g\u1eedi"})]})]}),(0,r.jsxs)(s.Z,{sx:{width:"100%",mt:"60px"},children:[(0,r.jsx)(a.Z,{sx:M({},b.gN.title1,{color:b.DM.white,mb:"32px"}),children:"G\xf3p \xfd c\u1ee7a b\u1ea1n"}),(0,r.jsx)(s.Z,{sx:M({},(0,m.X)("center","flex-start"),{flexDirection:"column",rowGap:"34px"}),children:k.map((function(t,n){return(0,r.jsxs)(s.Z,{sx:M({width:"100%"},(0,m.X)("space-between","center"),e&&{flexDirection:"column",rowGap:"8px"}),children:[(0,r.jsxs)(s.Z,{sx:M({width:"60%%"},(0,m.X)("flex-start","flex-start"),{columnGap:"11px"}),children:[(0,r.jsx)(s.Z,{children:(0,r.jsx)(d.Z,{sx:{width:"35px",height:"35px"},alt:"img alt",src:P(t).avt})}),(0,r.jsx)(s.Z,{sx:M({},(0,m.X)("center","flex-starrt"),{flexDirection:"column",rowGap:"15px"}),children:(0,r.jsxs)(s.Z,{sx:M({},(0,m.X)("center","flex-start"),{flexDirection:"column",rowGap:"8px",padding:"15px",bgcolor:b.DM.bg2,borderRadius:"10px"}),children:[(0,r.jsx)(a.Z,{sx:M({},b.gN.title1,{color:b.DM.white}),children:P(t).name}),(0,r.jsx)(a.Z,{style:M({},b.gN.content1,{color:b.DM.VZ_Text_content}),children:null===t||void 0===t?void 0:t.body})]})})]}),(0,r.jsx)(s.Z,{sx:{width:"40%"},children:(0,r.jsx)(a.Z,{sx:M({},b.gN.content3,{color:b.DM.contentIcon,pl:e?"46px":0}),children:null===t||void 0===t?void 0:t.published_at})})]},n)}))})]})]})})}var O=function(){return(0,r.jsx)(N,{})}}},function(t){t.O(0,[774,888,179],(function(){return e=4540,t(t.s=e);var e}));var e=t.O();_N_E=e}]);