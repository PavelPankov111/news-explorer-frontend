(this["webpackJsonpnews-explorer-frontend"]=this["webpackJsonpnews-explorer-frontend"]||[]).push([[0],{22:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),i=a(23),r=a.n(i),o=a(12),l=a(9),d=a(2),u=a(25);a(32),a(33);var _=function(e){var t=e.inputSearchForm,a=c.a.useRef();return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a.current.value)},className:"search__form",children:[Object(s.jsx)("input",{autoComplete:"off",ref:a,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",className:"search__input",type:"text"}),Object(s.jsx)("button",{type:"submit",className:"search__button",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})},p=a(4),j=a(26);var m=function(e){var t=e.children,a=Object(j.a)(e,["children"]);return a.loggedIn?Object(s.jsx)(p.b,Object(l.a)(Object(l.a)({},a),{},{children:t})):Object(s.jsx)(p.a,{to:"./"})};var h=function(e){var t=e.sawedNews.map((function(e){return e.keyword})),a=Object(u.a)(new Set(t));function n(e){return e?e[0].toUpperCase()+e.slice(1):e}var c=n(a[0]),i=n(a[1]),r=a.length-2;return Object(s.jsxs)(p.d,{children:[Object(s.jsx)(p.b,{path:"/",exact:!0,children:Object(s.jsx)("main",{className:"main",children:Object(s.jsxs)("div",{className:"main__page",children:[Object(s.jsx)("h2",{className:"main__title",children:"\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432 \u043c\u0438\u0440\u0435?"}),Object(s.jsx)("p",{className:"main__description",children:"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432 \u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."}),Object(s.jsx)(_,{inputSearchForm:e.inputSearchForm}),Object(s.jsx)("span",{className:e.errorInputSearch?"input__error input__error_hidden":"input__error",children:"\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043a\u0430\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0442\u0443"})]})})}),Object(s.jsx)(m,{path:"/sawed-news",loggedIn:e.loggedIn,children:Object(s.jsx)("main",{className:"main__sawed-news",children:Object(s.jsxs)("div",{className:"main__page-sawed-news",children:[Object(s.jsx)("h3",{className:"main__sawed-news-subtitle",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(s.jsx)("h2",{className:"main__title-sawed-news",children:"".concat(e.userName,", \u0443 \u0432\u0430\u0441 ").concat(e.numberSawedNews," ").concat(e.numberSawedNews>=5||0===e.numberSawedNews?"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439":e.numberSawedNews>1&&e.numberSawedNews<5?"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438":1===e.numberSawedNews?"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f":void 0)}),Object(s.jsxs)("div",{className:e.numberSawedNews>0?"main__sawed-news-box main__sawed-news-box_visible":"main__sawed-news-box",children:[Object(s.jsx)("p",{className:"main__description-sawed-news",children:1===a.length?"\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443":a.length>1?"\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c":void 0}),Object(s.jsxs)("p",{className:"main__found-article",children:[a.length>1?"".concat(c,", ").concat(i):"".concat(c),Object(s.jsx)("p",{className:"main__and",children:a.length>2?"\u0438":""}),a.length>2?"".concat(r).concat(1===r?"-\u0443 \u0434\u0440\u0443\u0433\u043e\u043c\u0443":r>1?"-\u043c \u0434\u0440\u0443\u0433\u0438\u043c":r>4?"-\u044e \u0434\u0440\u0443\u0433\u0438\u043c":void 0):""]})]})]})})})]})},b=(a(39),a(40),a.p+"static/media/me.7f0eef95.jpg");var g=function(){return Object(s.jsx)(p.d,{children:Object(s.jsx)(p.b,{path:"/",exact:!0,children:Object(s.jsxs)("section",{className:"about",children:[Object(s.jsx)("img",{className:"about__image",src:b,alt:"\u0424\u043e\u0442\u043e \u0430\u0432\u0442\u043e\u0440\u0430"}),Object(s.jsxs)("div",{className:"about__box",children:[Object(s.jsx)("p",{className:"about__title",children:"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"}),Object(s.jsx)("p",{className:"about__description",children:"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u041f\u0430\u0432\u0435\u043b, \u044f - \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a. \u042f \u0445\u043e\u0440\u043e\u0448\u043e \u0443\u043c\u0435\u044e \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0438 \u0437\u043d\u0430\u044e: JavaScript, Git, nginx, ionic, cordova, HTML5, CSS3, \u041e\u041e\u041f, React, Webpack, babel, HTTP \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b, express, ES8, ES9, Node.js, NoSQL \u0438 MongoDB"})]})]})})})};a(41);var w=function(){return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("h3",{className:"footer__title",children:"\xa9 Pankov Pavel"}),Object(s.jsxs)("div",{className:"footer__box",children:[Object(s.jsxs)("div",{className:"footer__links",children:[Object(s.jsx)("a",{className:"footer__route",href:"*",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(s.jsx)("a",{className:"footer__link",href:"https://praktikum.yandex.ru/profile/web/",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})]}),Object(s.jsxs)("div",{className:"footer__pages",children:[Object(s.jsx)("a",{className:"footer__git",href:"https://github.com/PavelPankov111"}),Object(s.jsx)("a",{className:"footer__fb",href:"https://www.facebook.com/pavel.pankov.5203/"})]})]})]})},O=(a(42),a(43),a(44),a(45),a.p+"static/media/close.e12c0314.svg");var x=function(e){var t=c.a.useRef(null);return c.a.useEffect((function(){document.addEventListener("keyup",(function(t){"Escape"===t.key&&e.close()}))})),Object(s.jsx)("div",{onClick:function(a){t.current&&!t.current.contains(a.target)&&e.close()},className:"popup ".concat(e.isOpen?"popup_opened":""," "),children:Object(s.jsxs)("form",{ref:t,onSubmit:e.onSubmit,method:"get",action:"#",className:"popup".concat(e.namePopup,"__form"),noValidate:!0,children:[Object(s.jsx)("button",{type:"reset",className:"popup__close-btn",onClick:e.close,children:Object(s.jsx)("img",{className:"popup__close-img",src:O,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f"})}),Object(s.jsxs)("div",{className:"popup".concat(e.namePopup,"__content"),children:[Object(s.jsx)("h3",{className:"popup".concat(e.namePopup,"__title"),children:e.title}),e.children,!0===e.showBtn?Object(s.jsx)("button",{type:"submit",className:e.isButtonDisable?"popup".concat(e.namePopup,"__button popup").concat(e.namePopup,"__button-disable"):"popup".concat(e.namePopup,"__button"),children:e.titleButton}):"",Object(s.jsx)("div",{className:"popup".concat(e.namePopup,"__author"),children:!0===e.showOr?Object(s.jsxs)("p",{className:"popup".concat(e.namePopup,"__or"),children:["\u0418\u043b\u0438",Object(s.jsx)("a",{onClick:e.onClickRoute,className:"popup".concat(e.namePopup,"__route"),children:e.nameRoute})]}):Object(s.jsx)("p",{onClick:e.routeClick,className:"popup".concat(e.namePopup,"__route"),href:"*",children:e.nameRoute})})]})]})})},v=(a(22),a(46),a(15)),f=a(16),N=function(){function e(){Object(v.a)(this,e),this.url="https://paveldiplom.students.nomoredomains.monster"}return Object(f.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(e.statusText)}},{key:"signup",value:function(e,t,a){return fetch("".concat(this.url,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:a})}).then(this._handleResponse)}},{key:"signin",value:function(e,t){return fetch("".concat(this.url,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(this._handleResponse)}},{key:"tokenCheck",value:function(e){return fetch("".concat(this.url,"/users/me"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._handleResponse)}},{key:"addingCard",value:function(e,t,a,s,n,c,i){return fetch("".concat(this.url,"/articles"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify({keyword:e,title:t,text:a,source:s,link:n,image:c,date:i})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.url,"/articles/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then(this._handleResponse)}},{key:"getCards",value:function(){return fetch("".concat(this.url,"/articles"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then(this._handleResponse)}}]),e}();var C=function(e){var t=c.a.useState(!1),a=Object(d.a)(t,2),n=a[0],i=a[1],r=c.a.useState(!1),o=Object(d.a)(r,2),l=o[0],u=o[1],_=c.a.useState(!1),j=Object(d.a)(_,2),h=j[0],b=j[1],g=new N;function w(){i(!0),u(!0)}function O(){i(!1),u(!1)}return c.a.useEffect((function(){if(e.sawedNews){var t=e.sawedNews.find((function(t){return t.title===e.title}));b(!!t)}}),[e.sawedNews]),Object(s.jsx)(p.d,{children:Object(s.jsx)(p.b,{path:"*",exact:!0,children:Object(s.jsxs)("div",{className:"newsCard",children:[Object(s.jsx)(p.b,{path:"/",exact:!0,children:!0===e.isLoggedIn?Object(s.jsx)("button",{onClick:function(){h?(b(!1),e.removeCard(e.article,e.sawedArticle),e.update()):(b(!0),g.addingCard(e.keyword,e.title,e.description,e.source,e.urlCard,e.imageCard,e.date).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),e.update())},onPointerLeave:O,onPointerMove:w,className:"newsCard__button",children:h?Object(s.jsx)("button",{className:"newsCard__button-img newsCard__button-img_click"}):Object(s.jsx)("button",{className:l?"newsCard__button-img newsCard__button-img_hover":"newsCard__button-img"})}):Object(s.jsxs)("button",{onPointerLeave:O,onPointerMove:w,className:"newsCard__button",children:[Object(s.jsx)("div",{className:l?"newsCard__button-img newsCard__button-img_hover":"newsCard__button-img"}),Object(s.jsx)("div",{className:n?"newsCard__button-hover newsCard__hover_active":"newsCard__button-hover",children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438"})]})}),Object(s.jsxs)(m,{loggedIn:e.isLoggedIn,path:"/sawed-news",children:[Object(s.jsx)("div",{className:"newsCard__sawed-news-subtitle",children:e.keyword}),Object(s.jsxs)("button",{onClick:function(){e.removeCard(e.article,e.sawedArticle)},onPointerLeave:O,onPointerMove:w,className:"newsCard__button",children:[Object(s.jsx)("div",{className:l?"newsCard__button-img-sawed-news newsCard__button-img newsCard__button-img_hover newsCard__button-img_hover-sawed-news":"newsCard__button-img-sawed-news newsCard__button-img"}),Object(s.jsx)("div",{className:n?"newsCard__button-hover-sawed-news newsCard__button-hover newsCard__hover_active":"newsCard__button-hover-sawed-news newsCard__button-hover",children:"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445"})]})]}),Object(s.jsxs)("a",{className:"newsCard__link",href:e.urlCard,target:"_blank",rel:"noreferrer",children:[Object(s.jsx)("div",{className:"newsCard__image",children:Object(s.jsx)("img",{className:"newsCard__img",src:e.imageCard,alt:"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0430\u0441\u044c :("})}),Object(s.jsxs)("div",{className:"newsCard__content",children:[Object(s.jsx)("h4",{className:"newsCard__content-date",children:function(e){var t=new Date(e);return"".concat(t.getDate()," ").concat(["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044c\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][t.getMonth()],", ").concat(t.getFullYear())}(e.date)}),Object(s.jsx)("h2",{className:"newsCard__content-title",children:e.title}),Object(s.jsx)("p",{className:"newsCard__content-description",children:e.description}),Object(s.jsx)("p",{className:"newsCard__content__author",children:e.source})]})]})]})})})};var k=function(e){var t=e.isLoadind,a=e.cards,n=c.a.useState(a),i=Object(d.a)(n,2),r=i[0],o=i[1],l=c.a.useState(!1),u=Object(d.a)(l,2),_=u[0],p=u[1];return c.a.useEffect((function(){o(a.slice(0,3)),a.length>3?p(!0):p(!1)}),[a]),Object(s.jsxs)("section",{className:t?"newsCardList newsCardList_disable":"newsCardList",children:[Object(s.jsx)("h2",{className:"newsCardList__title",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(s.jsx)("div",{className:"newsCardList__items",children:r.map((function(t,a){return Object(s.jsx)(C,{article:t,sawedNews:e.sawedNews,update:e.update,removeCard:e.removeCard,urlCard:t.url,source:t.source.name,description:t.description,title:t.title,date:t.publishedAt,keyword:e.keyword,imageCard:t.urlToImage,isLoggedIn:e.isLoggedIn},a)}))}),Object(s.jsx)("button",{onClick:function(){o(a.slice(0,r.length+3))},className:_?"newsCardList__button newsCardList__button_visible":"newsCardList__button",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"})]})};a(47);var S=function(e){return Object(s.jsxs)("div",{className:e.isVisible?"preloader":"preloader__hidden",children:[Object(s.jsx)("i",{className:"preloader__icon"}),Object(s.jsx)("p",{className:"preloader__text",children:e.textLoading})]})},y=(a(48),a.p+"static/media/not-found_v1.8fabc218.svg");var L=function(e){return Object(s.jsxs)("div",{className:e.isVisible?"notFound":"notFound notFound__disable",children:[Object(s.jsx)("img",{className:"notFound__image",src:y,alt:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(s.jsx)("h2",{className:"notFound__title",children:e.noSawedCards?"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(s.jsxs)("p",{className:"notFound__description",children:[e.noSawedCards?"":"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."," "]})]})},I=(a(49),a(3)),R=a.p+"static/media/logout.96d43996.svg",P=a.p+"static/media/sawedNewsIcon.7df208de.svg";var E=function(e){return Object(s.jsxs)(p.d,{children:[Object(s.jsx)(p.b,{path:"/",exact:!0,children:e.loggedIn?Object(s.jsxs)("div",{className:"navigation__descriptions-sawed-news",children:[Object(s.jsx)(I.b,{to:"/",className:"navigation__main-page",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(s.jsx)(I.b,{to:"/sawed-news",onClick:e.redirectSawedNews,className:"navigation__sawed-news",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(s.jsxs)(I.b,{to:"/",onClick:e.click,className:"navigation__sawed-box-light navigation__sawed-box",children:[Object(s.jsx)("p",{className:"navigation__sawed-exit_light navigation__sawed-exit",children:e.userName}),Object(s.jsx)("img",{className:"navigation__sawed-image",src:R,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0432\u044b\u0445\u043e\u0434\u0430"})]})]}):Object(s.jsxs)("div",{className:"navigation__descriptions",children:[Object(s.jsx)(I.b,{to:"/",className:"navigation__main-page",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(s.jsx)("p",{onClick:e.handleClick,className:"navigation__auth",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})}),Object(s.jsx)(p.b,{path:"/sawed-news",children:Object(s.jsxs)("div",{className:"navigation__descriptions-sawed-news",children:[Object(s.jsx)(I.b,{to:"/",className:"navigation__main-page_active",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(s.jsx)(I.b,{to:"/sawed-news",onClick:e.redirectSawedNews,className:"navigation__sawed-news_active",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(s.jsxs)(I.b,{to:"/",onClick:e.click,className:"navigation__sawed-box",children:[Object(s.jsx)("p",{className:"navigation__sawed-exit",children:e.userName}),Object(s.jsx)("img",{className:"navigation__sawed-image",src:P,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0432\u044b\u0445\u043e\u0434\u0430"})]})]})})]})};a(50);var B=function(e){return Object(s.jsx)(p.d,{children:Object(s.jsx)(p.b,{path:"*",exact:!0,children:Object(s.jsxs)("header",{className:e.isClicked?"header header_static":"header",children:[Object(s.jsx)("h1",{className:"header__title",children:"NewsExplorer"}),Object(s.jsx)(E,{redirectSawedNews:e.handleSawedNews,click:e.onClickOut,handleClick:e.onClick,loggedIn:e.loggedInHeader,userName:e.userNameHeader}),Object(s.jsx)("div",{onClick:e.handleClick,className:e.isClicked?"header__mobile header__mobile_active":"header__mobile",children:Object(s.jsxs)("div",{className:e.isClicked?"header__mobile-popup header__mobile-popup_active":"header__mobile-popup",children:[Object(s.jsx)("div",{className:e.isClicked?"header__mobile-container header__mobile-container_active":"header__mobile-container"}),Object(s.jsx)("div",{className:e.isClicked?"header__mobile-box header__mobile-box_active":"header__mobile-box",children:Object(s.jsxs)("div",{className:"header__mobile-content",children:[Object(s.jsx)(I.b,{className:"header__mobile-main-page",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e.loggedInHeader?Object(s.jsx)(I.b,{className:"header__mobile-sawed-news",to:"/sawed-news",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}):"",e.loggedInHeader?Object(s.jsxs)(I.b,{to:"/",onClick:e.onClickOut,className:"navigation__sawed-box-light navigation__sawed-box",children:[Object(s.jsx)("p",{className:"navigation__sawed-exit navigation__sawed-exit_light",children:e.userNameHeader}),Object(s.jsx)("img",{className:"navigation__sawed-image",src:R,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0432\u044b\u0445\u043e\u0434\u0430"})]}):Object(s.jsx)("p",{onClick:e.onClick,className:"navigation__auth",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})]})})]})})})};a(51);var T=function(e){var t=c.a.useState(!1),a=Object(d.a)(t,2),n=a[0],i=a[1];return Object(s.jsx)(p.d,{children:Object(s.jsx)(p.b,{path:"*",exact:!0,children:Object(s.jsxs)("header",{className:"header header__sawed-news",children:[Object(s.jsx)("h1",{className:n?"header__title header__title-sawed-news header__title_white":"header__title-sawed-news",children:"NewsExplorer"}),Object(s.jsx)(E,{click:e.onClickOut,handleClick:e.onClick,loggedIn:e.loggedInHeader,userName:e.userNameHeader}),Object(s.jsx)("div",{onClick:function(){i(!0!==n)},className:n?"header__mobile header__mobile_white header__mobile_active header__mobile_white_active":"header__mobile header__mobile_white",children:Object(s.jsxs)("div",{className:n?"header__mobile-popup header__mobile-popup_active":"header__mobile-popup",children:[Object(s.jsx)("div",{className:n?"header__mobile-container header__mobile-container_active":"header__mobile-container"}),Object(s.jsx)("div",{className:n?"header__mobile-box header__mobile-box_active":"header__mobile-box",children:Object(s.jsxs)("div",{className:"header__mobile-content",children:[Object(s.jsx)(I.b,{className:"header__mobile-main-page",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e.loggedInHeader?Object(s.jsx)(I.b,{className:"header__mobile-sawed-news",to:"/sawed-news",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}):"",e.loggedInHeader?Object(s.jsxs)(I.b,{to:"/",onClick:e.onClickOut,className:"navigation__sawed-box-light navigation__sawed-box",children:[Object(s.jsx)("p",{className:"navigation__sawed-exit navigation__sawed-exit_light",children:e.userNameHeader}),Object(s.jsx)("img",{className:"navigation__sawed-image",src:R,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0432\u044b\u0445\u043e\u0434\u0430"})]}):Object(s.jsx)("p",{onClick:e.onClick,className:"navigation__auth",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})]})})]})})})};var A=function(e){var t=e.cards;return Object(s.jsx)("section",{className:e.isLoadind?"newsCardList newsCardList_disable":"newsCardList",children:Object(s.jsx)("div",{className:"newsCardList__items",children:t.map((function(t,a){return Object(s.jsx)(C,{keyword:t.keyword,removeCard:e.removeCard,sawedArticle:t,urlCard:t.link,source:t.source,description:t.text,title:t.title,date:t.date,author:t.author,imageCard:t.image,isLoggedIn:e.isLoggedIn},a)}))})})},H=c.a.createContext(),D=function(){function e(){Object(v.a)(this,e),this.url="https://nomoreparties.co/news/v2/everything?",this.apiKey="0afc2eada6d242128695911a777854c8"}return Object(f.a)(e,[{key:"request",value:function(e){var t=new Date,a=t.toISOString().slice(0,10);t.setDate(t.getDate()-7);var s=t.toISOString().slice(0,10);return fetch("".concat(this.url,"q=").concat(e,"&apiKey=").concat(this.apiKey,"&from=").concat(s,"&to=").concat(a,"&sortBy=publishedAt&pageSize=100"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return 200===e.status?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}}]),e}();var F=function(){var e=new N,t=c.a.useState(!1),a=Object(d.a)(t,2),n=a[0],i=a[1],r=c.a.useState(!1),u=Object(d.a)(r,2),_=u[0],j=u[1],b=c.a.useState([]),O=Object(d.a)(b,2),v=O[0],f=O[1],C=c.a.useState(0),y=Object(d.a)(C,2),I=y[0],R=y[1];c.a.useEffect((function(){localStorage.getItem("jwt")?(Mt(),R(v.length),i(!0),j(!0),e.tokenCheck(localStorage.getItem("jwt")).then((function(e){ct({name:e.name,email:e.email,id:e._id})})).catch((function(e){console.log(e)}))):(i(!1),j(!0))}),[_,n,v]);var P=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,E=c.a.useState(!1),F=Object(d.a)(E,2),z=F[0],q=F[1],M=c.a.useState(!1),J=Object(d.a)(M,2),V=J[0],K=J[1],G=c.a.useState(!1),Q=Object(d.a)(G,2),U=Q[0],W=Q[1],Y=c.a.useState(!0),$=Object(d.a)(Y,2),X=$[0],Z=$[1],ee=c.a.useState(!1),te=Object(d.a)(ee,2),ae=te[0],se=te[1],ne=c.a.useState({emailRegister:"",passwordRegister:"",nameRegister:""}),ce=Object(d.a)(ne,2),ie=ce[0],re=ce[1],oe=c.a.useCallback((function(e){var t=e.target,a=t.name,s=t.value;re((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},a,s))})),Ht(!1)}),[re]);c.a.useEffect((function(){var e=ie.emailRegister.length>4,t=ie.passwordRegister.length>7,a=ie.nameRegister.length>1,s=P.test(ie.emailRegister);se(!s),q(!e),K(!t),W(!a),Z(!1!==ae||!1!==V||!1!==U),0===ie.emailRegister.length&&(Z(!0),se(!1)),0===ie.passwordRegister.length&&(Z(!0),K(!1)),0===ie.nameRegister.length&&(Z(!0),W(!1))}),[ie,P,ae,V,U]);var le=c.a.useState(!1),de=Object(d.a)(le,2),ue=de[0],_e=de[1],pe=c.a.useState(!0),je=Object(d.a)(pe,2),me=je[0],he=je[1],be=c.a.useState(!1),ge=Object(d.a)(be,2),we=ge[0],Oe=ge[1],xe=c.a.useState(!1),ve=Object(d.a)(xe,2),fe=ve[0],Ne=ve[1],Ce=c.a.useState(!1),ke=Object(d.a)(Ce,2),Se=ke[0],ye=ke[1],Le=c.a.useState({email:"",password:""}),Ie=Object(d.a)(Le,2),Re=Ie[0],Pe=Ie[1],Ee=c.a.useCallback((function(e){var t=e.target,a=t.name,s=t.value;Pe((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},a,s))})),qt(!1)}),[Pe]);c.a.useEffect((function(){var e=P.test(Re.email),t=Re.email.length>4,a=Re.password.length>7;_e(!e),Ne(!t),a?(Oe(!1),Oe(!1)):(ye(!0),Oe(!0)),he(!1!==ue||!1!==we),0===Re.password.length&&(he(!0),Oe(!1)),0===Re.email.length&&(_e(!1),he(!0))}),[Re,ue,we,P]);var Be=Re.email,Te=Re.password,Ae=ie.emailRegister,He=ie.passwordRegister,De=ie.nameRegister,Fe=document.querySelector(".header__mobile"),ze=c.a.useState(!1),qe=Object(d.a)(ze,2),Me=qe[0],Je=qe[1],Ve=c.a.useState(!1),Ke=Object(d.a)(Ve,2),Ge=Ke[0],Qe=Ke[1],Ue=c.a.useState(!1),We=Object(d.a)(Ue,2),Ye=We[0],$e=We[1],Xe=c.a.useState(!1),Ze=Object(d.a)(Xe,2),et=Ze[0],tt=Ze[1],at=c.a.useState({name:"\u0418\u043c\u044f",email:"",id:""}),st=Object(d.a)(at,2),nt=st[0],ct=st[1];function it(){Je(!0),_e(!1),Oe(!1),he(!0)}function rt(){Je(!1),Qe(!1),$e(!1),Pe({email:"",password:""}),re({emailRegister:"",passwordRegister:"",nameRegister:""})}function ot(){i(!1),ct({name:"\u0418\u043c\u044f",email:"",password:""}),localStorage.clear()}c.a.useEffect((function(){Me||Ge||Ye?null!==Fe&&Fe.classList.add("header__mobile-popup_hidden"):null!==Fe&&Fe.classList.remove("header__mobile-popup_hidden")}));var lt=c.a.useState(!0),dt=Object(d.a)(lt,2),ut=dt[0],_t=dt[1],pt=c.a.useState(!1),jt=Object(d.a)(pt,2),mt=jt[0],ht=jt[1],bt=c.a.useState(!1),gt=Object(d.a)(bt,2),wt=gt[0],Ot=gt[1],xt=c.a.useState([]),vt=Object(d.a)(xt,2),ft=vt[0],Nt=vt[1],Ct=c.a.useState(""),kt=Object(d.a)(Ct,2),St=kt[0],yt=kt[1],Lt=c.a.useState(!0),It=Object(d.a)(Lt,2),Rt=It[0],Pt=It[1];function Et(e){if(""!==e){Pt(!0);var t=new D;ht(!0),Ot(!1),_t(!0),t.request(e).then((function(t){yt(e),Nt(t.articles),_t(!1),0===t.articles.length&&(Ot(!0),_t(!0))})).catch((function(e){console.log(e),Ot(!0)})).finally((function(){ht(!1)}))}else Pt(!1)}var Bt=c.a.useState(!1),Tt=Object(d.a)(Bt,2),At=Tt[0],Ht=Tt[1],Dt=c.a.useState(!1),Ft=Object(d.a)(Dt,2),zt=Ft[0],qt=Ft[1];function Mt(){e.getCards().then((function(e){f(e)})).catch((function(e){console.log(e)}))}function Jt(t,a){Mt();var s,n=v.find((function(e){return a?e.title===a.title&&e.text===a.text:t?e.title===t.title&&e.text===t.description:void 0}));n&&(s=n._id,e.deleteCard(s).then((function(e){console.log(e)})).catch((function(e){console.log(e)})))}return c.a.useEffect((function(){Mt()}),[n]),Object(s.jsx)(H.Provider,{value:nt,children:_?Object(s.jsxs)("section",{className:"page",children:[Object(s.jsxs)(p.d,{children:[Object(s.jsxs)(m,{path:"/sawed-news",loggedIn:n,children:[Object(s.jsx)(T,{onClickOut:ot,onClick:it,loggedInHeader:n,userNameHeader:nt.name}),Object(s.jsx)(h,{sawedNews:v,loggedIn:n,inputSearchForm:Et,userName:nt.name,numberSawedNews:I}),0===v.length?Object(s.jsx)(L,{noSawedCards:!0,isVisible:!0}):Object(s.jsx)(A,{removeCard:Jt,keyword:St,cards:v,isLoggedIn:n})]}),Object(s.jsxs)(p.b,{path:"/",exact:!0,children:[Object(s.jsx)(B,{handleClick:function(){tt(!0!==et)},isClicked:et,onClickOut:ot,onClick:it,loggedInHeader:n,userNameHeader:nt.name}),Object(s.jsx)(h,{sawedNews:v,errorInputSearch:Rt,loggedIn:n,inputSearchForm:Et,userName:nt.name,numberSawedNews:I}),Object(s.jsx)(k,{sawedNews:v,update:Mt,removeCard:Jt,keyword:St,cards:ft,isLoggedIn:n,isLoadind:ut})]})]}),Object(s.jsx)(S,{isVisible:mt,textLoading:"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439.."}),Object(s.jsx)(L,{noSawedCards:!1,isVisible:wt}),Object(s.jsx)(g,{}),Object(s.jsxs)(x,{onSubmit:function(t){t.preventDefault(),e.signin(Be,Te).then((function(e){e.token?(rt(),localStorage.setItem("jwt",e.token),ct({name:localStorage.getItem("name"),email:Be,password:Te}),i(!0)):qt(!0)})).catch((function(e){console.log(e),qt(!0)}))},isButtonDisable:me,onClickRoute:function(){Je(!1),Qe(!0)},close:rt,showBtn:!0,showOr:!0,isOpen:Me,namePopup:"-auth",title:"\u0412\u0445\u043e\u0434",titleButton:"\u0412\u043e\u0439\u0442\u0438",nameRoute:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",children:[Object(s.jsxs)("div",{className:"popup-auth__box",children:[Object(s.jsx)("span",{className:"popup-auth__email-name",children:"Email"}),Object(s.jsx)("input",{autoComplete:"true",name:"email",value:Be,onChange:Ee,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",className:"popup__input popup-auth__email",type:"email",required:!0,minLength:"5",maxLength:"60"}),Object(s.jsx)("span",{className:ue?"popup-auth__email-error popup-auth__email-error_visible":"popup-auth__email-error",children:fe?"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 - 5":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email"}),Object(s.jsx)("span",{className:"popup-auth__password-name",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(s.jsx)("input",{autoComplete:"true",name:"password",value:Te,onChange:Ee,className:"popup__input popup-auth__password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,minLength:"8",maxLength:"60"}),Object(s.jsx)("span",{className:we?"popup-auth__password-error popup-auth__password-error_visible":"popup-auth__password-error",children:Se?"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 - 8":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(s.jsx)("span",{className:zt?"popup-register__\u0441onflict-error popup-register__\u0441onflict-error_visible":"popup-register__\u0441onflict-error",children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(s.jsxs)(x,{onSubmit:function(t){t.preventDefault(),e.signup(De,Ae,He).then((function(){rt(),$e(!0),localStorage.setItem("name",De)})).catch((function(e){"Conflict"===String(e)&&Ht(!0)}))},isButtonDisable:X,onClickRoute:function(){Qe(!1),Je(!0)},close:rt,showBtn:!0,showOr:!0,isOpen:Ge,namePopup:"-register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",titleButton:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",nameRoute:"\u0412\u043e\u0439\u0442\u0438",children:[Object(s.jsxs)("div",{className:"popup-register__box",children:[Object(s.jsx)("span",{className:"popup-register__email-name",children:"Email"}),Object(s.jsx)("input",{autoComplete:"true",name:"emailRegister",value:Ae,onChange:oe,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",className:"popup__input popup-register__email",type:"email",required:!0,minLength:"5",maxLength:"60"}),Object(s.jsxs)("span",{className:ae?"popup-register__email-error popup-register__email-error_visible":"popup-register__email-error",children:[z?"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 - 5":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email"," "]}),Object(s.jsx)("span",{className:"popup-register__password-name",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(s.jsx)("input",{value:He,name:"passwordRegister",onChange:oe,className:"popup__input popup-register__password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,minLength:"8",maxLength:"60"}),Object(s.jsx)("span",{className:V?"popup-register__password-error popup-register__password-error_visible":"popup-register__password-error",children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 - 8"}),Object(s.jsx)("span",{className:"popup-register__name-name",children:"\u0418\u043c\u044f"}),Object(s.jsx)("input",{value:De,name:"nameRegister",onChange:oe,className:"popup__input popup-register__name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",type:"text",minLength:"2",maxLength:"40",required:!0}),Object(s.jsx)("span",{className:U?"popup-register__name-error popup-register__name-error_visible":"popup-register__name-error",children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 - 2"})]}),Object(s.jsx)("span",{className:At?"popup-register__submit-error popup-register__submit-error_visible":"popup-register__submit-error",children:"\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0436\u0435 \u0435\u0441\u0442\u044c"})]}),Object(s.jsx)(x,{close:rt,routeClick:function(){$e(!1),Je(!0)},showBtn:!1,showOr:!1,isOpen:Ye,namePopup:"-successful",title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!",nameRoute:"\u0412\u043e\u0439\u0442\u0438"}),Object(s.jsx)(w,{})]}):""})};r.a.render(Object(s.jsx)(I.a,{children:Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(F,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.c52d82ad.chunk.js.map