(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/scss/styles.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/scss/styles.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trans, .topmenu__soc-item, .all-news__item, .footer__soc-item, .top-slider .slick-arrow:before, .home-menu__link, .news-slider__link, .news-slider .slick-arrow:before, .news-slider .slick-dots li {\n  transition: all 0.2s; }\n\n@-webkit-keyframes vizible {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes vizible {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@-webkit-keyframes preloader {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes preloader {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes preloader-fon {\n  from {\n    width: 0%; }\n  to {\n    width: 100%; } }\n\n@keyframes preloader-fon {\n  from {\n    width: 0%; }\n  to {\n    width: 100%; } }\n\n.preloader {\n  position: fixed;\n  top: 100px;\n  left: 0;\n  right: 0;\n  height: 3px;\n  display: flex;\n  z-index: 100; }\n\n.preloader__line {\n    height: 100%;\n    background-color: #f44336;\n    width: 0;\n    -webkit-animation: preloader-fon  3s infinite;\n            animation: preloader-fon  3s infinite; }\n\n.preloader-img {\n  position: absolute;\n  top: 252px;\n  z-index: 10;\n  left: 0;\n  right: 0;\n  height: 3px;\n  display: flex;\n  z-index: 900; }\n\n.preloader-img__line {\n    height: 100%;\n    background-color: #f44336;\n    width: 0;\n    -webkit-animation: preloader-fon  1s infinite;\n            animation: preloader-fon  1s infinite; }\n\n/* Eric Meyer's CSS Reset */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* End of Eric Meyer's CSS Reset */\n\nhtml {\n  height: 100%; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {\n  display: block; }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  font-size: 16px; }\n\n.wrapper {\n  width: 100%;\n  min-width: 900px;\n  min-height: 100%;\n  height: auto !important;\n  height: 100%; }\n\n@media (max-width: 1024px) {\n  .wrapper {\n    min-width: 100%; } }\n\n.content {\n  padding: 100px 0 295px;\n  background: white;\n  margin: 0 auto;\n  max-width: 1200px;\n  box-sizing: border-box; }\n\n.content h1 {\n    font-size: 34px;\n    font-weight: 700;\n    color: #4A4A4A;\n    margin-bottom: 45px; }\n\n.content p {\n    margin-bottom: 20px;\n    line-height: 1.4; }\n\n.content img {\n    margin-bottom: 20px;\n    border-radius: 3px;\n    max-width: 100%; }\n\n.content a {\n    color: #AE9671; }\n\n.content h3 {\n    font-weight: bold;\n    margin-bottom: 20px;\n    font-size: 18px;\n    margin-top: 30px; }\n\n.content h3:first-child {\n      margin-top: 0; }\n\n.content h4 {\n    font-weight: normal;\n    margin-bottom: 15px;\n    font-size: 18px;\n    margin-top: 25px; }\n\n.content h4:first-child {\n      margin-top: 0; }\n\n.content h2 {\n    font-weight: bold;\n    margin-bottom: 20px;\n    font-size: 22px;\n    margin-top: 30px; }\n\n.content h2:first-child {\n      margin-top: 0; }\n\n.content strong {\n    font-weight: 700; }\n\n.header {\n  height: 100px;\n  color: white;\n  box-sizing: border-box;\n  background: black;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 910; }\n\n.topmenu {\n  width: calc(100% - 20px * 4);\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  height: 100px;\n  align-items: center;\n  position: relative;\n  z-index: 2000; }\n\n.topmenu__item {\n    margin-right: 10px;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    position: relative; }\n\n.topmenu__item:after {\n      content: \"\\F12F\";\n      color: #AE9671;\n      font-size: 6px;\n      font-family: \"Material Design Icons\";\n      position: relative;\n      padding-left: 10px; }\n\n.topmenu__item:last-child:after {\n      display: none; }\n\n.topmenu__item-wrap {\n      position: relative;\n      height: 100px;\n      display: flex;\n      align-items: center; }\n\n.topmenu__item-wrap:hover .topmenu__submenu {\n        display: block;\n        -webkit-animation: vizible .3s;\n                animation: vizible .3s; }\n\n.topmenu__item-link {\n      text-decoration: none;\n      color: white;\n      transition: color 0.2s;\n      text-transform: uppercase; }\n\n.topmenu__item-link.active {\n        color: #AE9671; }\n\n.topmenu__item:hover .topmenu__item-link {\n      color: #d3c6b2; }\n\n.topmenu__item:hover .topmenu__item-link.active {\n      color: #f44336; }\n\n.topmenu__left {\n    display: flex;\n    border-right: 1px solid #AE9671;\n    height: 40px;\n    padding-right: 40px;\n    margin-right: 60px; }\n\n.topmenu__left_art {\n      border-right: none; }\n\n.topmenu__left_home .topmenu__item:first-child .topmenu__item-link {\n      display: block;\n      width: 20px;\n      height: 20px; }\n\n.topmenu__left_home .topmenu__item:first-child .topmenu__item-link:before {\n        content: \"\\F6A0\";\n        font-family: \"Material Design Icons\";\n        position: relative;\n        width: 20px;\n        height: 20px;\n        font-size: 18px;\n        top: -1px; }\n\n.topmenu__left_language .topmenu__item:after {\n      content: '';\n      border-right: 1px solid white;\n      height: 15px; }\n\n.topmenu__left-wrap {\n      display: flex; }\n\n.topmenu__submenu {\n    display: none;\n    position: absolute;\n    background: black;\n    top: 75px;\n    left: -30px;\n    width: 180px;\n    height: auto;\n    padding: 20px 30px 5px 30px;\n    z-index: 110;\n    border-radius: 0 0 3px 3px; }\n\n.topmenu__submenu-link {\n      text-transform: uppercase;\n      font-weight: 700;\n      color: white;\n      text-decoration: none;\n      outline: none;\n      display: block;\n      font-size: 14px;\n      transition: color 0.2s; }\n\n.topmenu__submenu-link:hover {\n        color: #d3c6b2; }\n\n.topmenu__submenu-link.active {\n        color: #AE9671; }\n\n.topmenu__submenu-item {\n      margin-bottom: 20px; }\n\n.topmenu__soc {\n    border-left: 1px solid #695840;\n    padding-left: 40px;\n    padding-right: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.topmenu__soc-list {\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n\n.topmenu__soc-item {\n      margin: 0 10px;\n      font-size: 20px;\n      cursor: pointer; }\n\n.topmenu__soc-item:hover {\n        color: #AE9671; }\n\n@media (max-width: 1550px) {\n  .topmenu__right {\n    display: none; }\n  .topmenu__left {\n    padding-right: 20px;\n    margin-right: 40px; }\n    .topmenu__left_art {\n      padding-right: 0;\n      margin-right: 0; } }\n\n@media (max-width: 700px) {\n  .topmenu__left_language {\n    border: none; }\n  .topmenu__left_home {\n    display: none; } }\n\n.all-news {\n  margin: 50px auto 75px; }\n\n.all-news__list {\n    display: flex;\n    flex-wrap: wrap; }\n\n.all-news__item {\n    flex: 1;\n    max-width: calc((100% - 40px) / 3);\n    flex: 0 0 calc((100% - 40px) / 3);\n    background: #F8F6F2;\n    border-radius: 3px;\n    overflow: hidden;\n    margin-right: 20px;\n    margin-bottom: 20px;\n    position: relative;\n    padding-bottom: 50px;\n    color: #4A4A4A;\n    text-decoration: none;\n    outline: none;\n    -webkit-animation: vizible  .7s;\n            animation: vizible  .7s; }\n\n.all-news__item:hover {\n      box-shadow: 0 0 7px 0px #d0c8c8; }\n\n.all-news__item:nth-child(3n) {\n      margin-right: 0; }\n\n.all-news__item p {\n      line-height: 1.3; }\n\n.all-news__item-link {\n      cursor: pointer;\n      outline: none; }\n\n.all-news__item-img {\n      background: black;\n      background-size: cover !important;\n      height: 255px;\n      overflow: hidden;\n      background-position: center;\n      color: white;\n      outline: none; }\n\n.all-news__item-wrap {\n      padding: 30px;\n      padding-bottom: 0; }\n\n.all-news__item-title {\n      font-size: 18px;\n      font-weight: 700;\n      margin-bottom: 20px; }\n\n.all-news__item-text {\n      line-height: 1.3;\n      font-size: 16px;\n      margin-bottom: 20px;\n      height: 120px;\n      overflow: hidden; }\n\n.all-news__item-footer {\n      display: flex;\n      justify-content: space-between;\n      position: absolute;\n      left: 25px;\n      right: 25px;\n      bottom: 25px; }\n\n.all-news__item-tag {\n      font-size: 11px;\n      border: 1px solid #A5A5A5;\n      color: #A5A5A5;\n      line-height: 1;\n      border-radius: 10px;\n      padding: 3px 10px;\n      margin-right: 5px; }\n\n.all-news__item-tag-left {\n        display: flex;\n        jusify-content: flex-end; }\n\n.all-news__item-date {\n      color: #A5A5A5;\n      font-size: 13px;\n      padding-top: 2px;\n      margin-left: 2px; }\n\n.all-news__item-date i {\n        font-size: 16px;\n        margin-right: 3px;\n        position: relative;\n        top: 1px; }\n\n.all-news__page {\n    text-align: right;\n    color: #A5A5A5;\n    font-size: 10px;\n    margin-bottom: 40px; }\n\n@media (max-width: 700px) {\n  .all-news__item-img {\n    height: 180px; }\n  .all-news__item-text {\n    font-size: 14px;\n    height: 112px; } }\n\n.arts .content {\n  max-width: 100%; }\n\n.art_black {\n  background: #353535;\n  min-height: calc(100vh - 395px); }\n\n.art_black .gallery-box h1 {\n    color: white; }\n\n.art__header {\n  background: #F8F6F2;\n  box-shadow: 1px -2px 4px #1b1a1a; }\n\n.art__content {\n  width: 1200px;\n  padding: 30px;\n  margin: 0 auto; }\n\n.art__cart {\n  max-width: 1200px;\n  padding: 40px 0;\n  margin: 0 auto;\n  display: flex; }\n\n.art__cart-btn {\n    margin-top: 40px;\n    padding: 20px 30px !important; }\n\n.art__cart-btn:hover {\n      background: #AE9671;\n      color: white !important; }\n\n.art__cart-info {\n    border-left: 1px solid #E0E0E0;\n    padding-left: 60px; }\n\n.art__cart-info h3 {\n      font-size: 30px;\n      margin-top: 20px !important; }\n\n.art__cart-imgbox {\n    flex: 0 0 400px;\n    margin-right: 60px; }\n\n.art__cart-img {\n    width: 100%;\n    height: 300px;\n    background-repeat: no-repeat !important;\n    background-size: cover !important;\n    border-radius: 3px; }\n\n.art__cart-strong {\n    font-weight: 700;\n    margin-bottom: 20px;\n    font-size: 20px; }\n\n.art__cart-text {\n    line-height: 1.4; }\n\n.one-news {\n  display: flex;\n  margin-top: 50px; }\n\n.one-news__leftmenu {\n    flex: 0 0 360px;\n    position: relative;\n    display: flex;\n    flex-direction: column; }\n\n.one-news__leftmenu-title {\n      font-size: 20px;\n      color: #4A4A4A;\n      font-weight: bold;\n      margin-bottom: 40px !important;\n      border-bottom: 2px solid #AE9671;\n      margin-right: 85px;\n      padding-bottom: 10px; }\n\n.one-news__contentblock {\n    flex: 1; }\n\n.one-news__header {\n    display: flex;\n    justify-content: space-between; }\n\n.one-news__header h1 br {\n      display: none; }\n\n.one-news__header-date {\n      margin-top: 17px;\n      color: #4A4A4A;\n      margin-left: 20px;\n      font-size: 14px;\n      opacity: 0.8; }\n\n.one-news__header-date:before {\n        content: \"\\F0F5\";\n        font-family: \"Material Design Icons\";\n        position: relative;\n        margin-right: 5px;\n        top: 1px; }\n\n.one-news__content {\n    line-height: 1.2;\n    color: #4A4A4A;\n    margin-bottom: 100px; }\n\n.one-news__last {\n    -webkit-animation: vizible  .7s;\n            animation: vizible  .7s; }\n\n.one-news__last-item {\n      border-bottom: 1px solid #E0E0E0;\n      margin-right: 85px;\n      padding: 13px 0;\n      outline: none;\n      cursor: pointer; }\n\n.one-news__last-item:hover .one-news__last-date {\n        color: black;\n        border-color: black; }\n\n.one-news__last-item:hover .one-news__last-name {\n        color: black; }\n\n.one-news__last-item.active .one-news__last-date {\n        color: #AE9671;\n        border-color: #AE9671; }\n\n.one-news__last-item.active .one-news__last-name {\n        color: #AE9671; }\n\n.one-news__last-date {\n      font-size: 9px;\n      margin-left: 15px;\n      margin-top: 5px;\n      color: #979797;\n      transition: all 0.2s; }\n\n.one-news__last-name {\n      color: #707070;\n      margin-left: 15px;\n      transition: all 0.2s;\n      line-height: 1.2; }\n\n.one-news__last-name i {\n        margin-right: 6.66666667px; }\n\n.one-news__footer {\n    display: flex;\n    align-items: center;\n    height: 145px;\n    border-top: 1px solid #A5A5A5; }\n\n.one-news__footer-left {\n      flex: 0 0 360px;\n      display: flex; }\n\n.one-news__footer-right {\n      flex: 1;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n\n.one-news__footer-right i {\n        font-size: 26px; }\n\n.one-news__footer-right .mdi-record {\n        font-size: 10px; }\n\n.one-news__paginator {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.one-news__paginator i {\n      font-size: 30px; }\n\n.one-news__paginator .mdi-record {\n      font-size: 10px; }\n\n.one-news__paginator .mdi-chevron-left, .one-news__paginator .mdi-chevron-right {\n      cursor: pointer;\n      transition: all 0.2s; }\n\n.one-news__paginator .mdi-chevron-left:hover, .one-news__paginator .mdi-chevron-right:hover {\n        color: #AE9671; }\n\n.gallery {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: -20px; }\n\n.gallery-item {\n    margin-right: 20px;\n    width: calc((100% - 60px) / 4);\n    margin-bottom: 10px;\n    opacity: 0.9;\n    transition: all 0.2s; }\n\n.gallery-item:hover {\n      opacity: 1; }\n\n.gallery-item a {\n      display: block; }\n\n.gallery-item:nth-child(4n) {\n      margin-right: 0; }\n\n.gallery-item img {\n      width: 100%;\n      height: auto;\n      margin-bottom: 0; }\n\n.gallery-box {\n    margin: 0 auto;\n    max-width: 1200px;\n    padding: 40px 0 20px; }\n\n.gallery-box h1 {\n      font-size: 30px; }\n\n.gallery-box__wrap {\n      display: flex;\n      flex-wrap: wrap;\n      margin-top: 40px; }\n\n.gallery-box__item-wrap {\n      flex: 1;\n      max-width: calc((100% - 40px)/3);\n      min-width: calc((100% - 40px)/3);\n      padding-bottom: calc(((100% - 40px)/3) * 0.75);\n      margin-bottom: 20px;\n      position: relative;\n      background: #322E2F;\n      margin-right: 20px;\n      box-sizing: border-box;\n      overflow: hidden;\n      border-radius: 3px;\n      outline: none;\n      cursor: pointer;\n      background-size: cover !important;\n      background-position: center center !important;\n      transition: all 0.2s; }\n\n.gallery-box__item-wrap:nth-child(3n) {\n        margin-right: 0; }\n\n.gallery-box__item-wrap:hover {\n        opacity: 0.7; }\n\n.gallery-box__item-title {\n      position: absolute;\n      bottom: 0;\n      background: rgba(255, 255, 255, 0.8);\n      color: #4A4A4A;\n      left: 0;\n      right: 0;\n      padding: 25px 30px;\n      border-radius: 0 0 3px 3px;\n      z-index: 10;\n      box-sizing: border-box; }\n\n.gallery__one-wrap {\n    display: flex;\n    flex-wrap: wrap; }\n\n.gallery__one-img {\n    max-width: calc((100% - 80px)/5);\n    min-width: calc((100% - 80px)/5);\n    flex: 1;\n    padding-bottom: calc(((100% - 80px)/5)*0.75);\n    margin-right: 20px;\n    background-size: cover;\n    margin-bottom: 20px;\n    border-radius: 2px;\n    cursor: pointer;\n    transition: 0.2s all;\n    position: relative;\n    background-size: cover !important;\n    background-position: center center;\n    overflow: hidden; }\n\n.gallery__one-img:before {\n      content: \"\\F349\";\n      font-family: \"Material Design Icons\";\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: rgba(0, 0, 0, 0.5);\n      color: white;\n      font-size: 20px;\n      opacity: 0;\n      transition: all 0.3s; }\n\n.gallery__one-img:nth-child(5n) {\n      margin-right: 0; }\n\n.gallery__one-img:hover:before {\n      opacity: 1;\n      font-size: 55px; }\n\n.btn {\n  text-align: center;\n  padding: 20px 60px;\n  border: 1px dotted #A5A5A5;\n  display: inline-block;\n  transition: all 0.2s;\n  border-radius: 50px;\n  cursor: pointer;\n  outline: none;\n  color: #A5A5A5;\n  position: relative; }\n\n.btn-wrap {\n    display: flex;\n    justify-content: center; }\n\n.btn:hover {\n    color: #AE9671;\n    border-color: #AE9671; }\n\n.btn_icon {\n    padding: 20px 35px 20px 70px; }\n\n.btn_icon i {\n      margin-right: 20px;\n      font-size: 22px;\n      position: absolute;\n      top: 18px;\n      left: 20px; }\n\n.btn_search {\n    background: #383230;\n    display: block;\n    font-size: 16px;\n    color: white;\n    border: none;\n    padding-top: 0;\n    padding-bottom: 0;\n    display: flex;\n    align-items: center; }\n\n.btn_search i {\n      left: 30px; }\n\n.btn_gold {\n    border: 2px solid #D6A352;\n    color: #D6A352; }\n\n.btn_gold:hover {\n      background: #D6A352;\n      color: white;\n      border: 2px solid #D6A352; }\n\n.footer {\n  margin: -295px auto 0;\n  min-width: 900px;\n  height: 295px;\n  background: #3B3A3A;\n  position: relative;\n  padding: 45px 0 0;\n  box-sizing: border-box;\n  box-shadow: inset 2px 3px 0px 0px #2d2d2d; }\n\n.footer__content {\n    display: flex;\n    color: white; }\n\n.footer__content a {\n      color: #AE9671;\n      text-decoration: none; }\n\n.footer__logo, .footer__soc {\n    flex: 1;\n    height: 120px; }\n\n.footer__center {\n    flex: 2;\n    padding: 0 60px;\n    display: flex;\n    -ms-align-items: center;\n    align-items: center; }\n\n.footer__center-text span {\n      display: block;\n      line-height: 1.4; }\n\n.footer__center-bold {\n      font-weight: 700;\n      font-size: 18px;\n      margin-bottom: 20px; }\n\n.footer__logo {\n    border-right: 1px solid #695840;\n    padding-right: 40px;\n    padding-left: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.footer__logo-link {\n      background: url('logo-4.svg') no-repeat;\n      margin-right: 40px;\n      margin-left: 40px;\n      width: 211px;\n      height: 95px;\n      background-size: contain;\n      background-position: right top;\n      outline: none;\n      cursor: pointer; }\n\n.footer__soc {\n    border-left: 1px solid #695840;\n    padding-left: 40px;\n    padding-right: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.footer__soc-list {\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n\n.footer__soc-item {\n      margin: 0 20px;\n      font-size: 24px;\n      cursor: pointer; }\n\n.footer__soc-item:hover {\n        color: #AE9671; }\n\n.footer__bot {\n    border-top: 1px solid #695840;\n    margin-top: 50px;\n    height: 80px;\n    box-sizing: border-box;\n    align-items: center;\n    justify-content: center;\n    display: -moz-flex;\n    display: -ms-flex;\n    display: -o-flex;\n    display: flex; }\n\n.footer__bot-link {\n      color: #7A7A7A;\n      font-size: 11px;\n      display: inline-block;\n      text-decoration: none;\n      outline: none;\n      @extened .trsns; }\n\n.footer__bot-link:hover {\n        color: #AE9671; }\n\n@media (max-width: 1024px) {\n  .footer {\n    min-width: auto;\n    height: auto; }\n    .footer__content {\n      display: block; }\n    .footer__center {\n      text-align: center;\n      display: block; }\n    .footer__bot {\n      margin-top: 0; }\n    .footer__logo {\n      margin-bottom: 20px;\n      border-right: 0; }\n      .footer__logo-link {\n        width: 50%;\n        height: 100%;\n        background-position: center top; }\n    .footer__soc {\n      height: 90px;\n      border-left: 0; } }\n\n@media (max-width: 700px) {\n  .footer__content {\n    display: block; }\n  .footer__center {\n    text-align: center;\n    display: block;\n    padding: 0 16px; }\n    .footer__center-text {\n      font-size: 14px; }\n    .footer__center-bold {\n      font-size: 14px; }\n  .footer__bot {\n    margin-top: 0; }\n  .footer__logo {\n    margin-bottom: 20px; }\n    .footer__logo-link {\n      width: 70%;\n      height: 100%;\n      background-position: center top;\n      margin: 0; }\n  .footer__soc {\n    height: 90px; } }\n\n.home {\n  width: 100%;\n  margin: 0; }\n\n.home h3 {\n    font-size: 36px; }\n\n.home__wrap {\n    position: relative; }\n\n.home .content {\n    max-width: 100%;\n    margin-top: 0;\n    padding-top: 0;\n    background: #e8e6de; }\n\n.home .topmenu__left_art {\n    display: none; }\n\n.home .topmenu__left_home {\n    border: none; }\n\n.home .header {\n    position: absolute;\n    background: none; }\n\n.home__info {\n    position: absolute;\n    width: 100%;\n    height: calc(100vh - 315px);\n    z-index: 100;\n    top: 100px;\n    display: flex;\n    justify-content: center; }\n\n.home__info-wrap {\n      height: 100%;\n      align-items: center;\n      justify-content: center;\n      display: flex;\n      flex-direction: column; }\n\n.home__info-logo {\n      height: 220px;\n      width: 697px;\n      background: url('logo-4.svg') no-repeat;\n      background-size: 697px 220px;\n      background-position: center;\n      margin-bottom: 15%; }\n\n.home__info-text {\n      color: white;\n      font-weight: 700;\n      font-size: 20px;\n      text-align: center;\n      line-height: 1.4; }\n\n.home__info-btn {\n      margin-top: 5%; }\n\n@media (max-width: 1024px) {\n  .home__info-logo {\n    width: 80%;\n    background-size: 100% 220px;\n    padding-bottom: 36%;\n    height: 0; }\n  .home__info-text {\n    padding: 0 40px; }\n  .home__info-btn {\n    position: relative; } }\n\n@media (max-width: 700px) {\n  .home__info {\n    display: block;\n    top: 20%;\n    height: auto; }\n    .home__info-text {\n      font-size: 16px; }\n    .home__info-btn {\n      margin-top: 10%; } }\n\n.top-slider {\n  height: 100vh;\n  background: #2D2D2D;\n  position: relative;\n  overflow: hidden; }\n\n.top-slider .all-news__item:hover {\n    box-shadow: 0 0 7px 0px black !important; }\n\n.top-slider__item {\n    background-size: cover !important;\n    background-position: center !important;\n    height: 100vh;\n    width: 100vw;\n    position: relative; }\n\n.top-slider__item:before {\n      content: '';\n      background: rgba(45, 45, 45, 0.8);\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0; }\n\n.top-slider__text {\n    font-size: 12px;\n    color: #7B7C7D;\n    opacity: 1;\n    position: absolute;\n    bottom: 255px;\n    width: 100vw;\n    text-align: center; }\n\n.top-slider .slick-arrow {\n    display: block;\n    font-size: 0;\n    line-height: 0;\n    height: 40px;\n    width: 40px;\n    flex: 0  0 40px;\n    border: none;\n    outline: none;\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    top: 35%;\n    left: 40px;\n    right: auto;\n    cursor: pointer;\n    background: none;\n    opacity: 0.2;\n    z-index: 100; }\n\n.top-slider .slick-arrow:hover:before {\n      color: #AE9671; }\n\n.top-slider .slick-arrow:before {\n      content: \"\\F141\";\n      color: white;\n      font-family: \"Material Design Icons\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      font-size: 40px;\n      line-height: 1; }\n\n.top-slider .slick-arrow:before:hover {\n        color: #AE9671; }\n\n.top-slider .slick-arrow.slick-next {\n      left: auto;\n      right: 40px; }\n\n.top-slider .slick-arrow.slick-next:before {\n        content: \"\\F142\"; }\n\n@media (max-width: 1024px) {\n  .top-slider {\n    min-height: 667px; }\n    .top-slider .slick-arrow {\n      top: 47%; }\n    .top-slider .slick-next {\n      right: 0 !important; }\n    .top-slider .slick-prev {\n      left: 0 !important; }\n    .top-slider__item {\n      min-height: 667px; }\n    .top-slider__text {\n      display: none; } }\n\n.home-menu {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 215px;\n  display: flex;\n  border-top: 1px solid #AE9671; }\n\n.home-menu__item {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white; }\n\n.home-menu__item:first-child .home-menu__link {\n      border: none; }\n\n.home-menu__link {\n    text-transform: uppercase;\n    line-height: 135px;\n    border-left: 1px solid #AE9671;\n    text-align: center;\n    flex: 1;\n    cursor: pointer;\n    outline: none; }\n\n.home-menu__link:hover {\n      color: #AE9671; }\n\n@media (max-width: 1024px) {\n  .home-menu {\n    display: none; } }\n\n.search-block {\n  background: #F8F6F2;\n  height: 140px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 1px -2px 4px #1b1a1a;\n  position: relative;\n  padding: 0 50px; }\n\n.search-block__box {\n    margin: 0 auto;\n    max-width: 1200px;\n    display: flex;\n    flex: 1; }\n\n.search-block__input {\n    flex: 1;\n    margin-right: 20px; }\n\n@media (max-width: 700px) {\n  .search-block {\n    padding: 0 16px; }\n    .search-block__text {\n      display: none; }\n    .search-block__input {\n      margin-right: 10px; }\n  .btn_search {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    width: 60px; }\n    .btn_search i {\n      left: 0;\n      position: relative;\n      margin-right: 0;\n      top: 0; } }\n\ninput {\n  box-sizing: border-box;\n  width: 100%;\n  height: 60px;\n  border-radius: 100px;\n  padding: 0 30px;\n  outline: none;\n  font-size: 18px;\n  box-shadow: none;\n  border: none;\n  background: #FFFFFF;\n  box-shadow: inset 0 1px 2px 0 rgba(137, 131, 122, 0.47);\n  border-radius: 100px; }\n\n.tiles {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 40px;\n  max-width: 1200px;\n  margin: 0 auto; }\n\n.tiles__item {\n    max-width: calc((100% - 40px) / 2);\n    flex: 0 0 calc((100% - 40px) / 2);\n    outline: none;\n    flex: 0 0 50%;\n    height: calc((85vh - 80px) / 2);\n    margin: 10px;\n    background: black;\n    color: white;\n    box-sizing: border-box;\n    display: flex;\n    text-align: center;\n    align-items: center;\n    flex-direction: column;\n    justify-content: flex-end;\n    position: relative;\n    overflow: hidden;\n    background-size: cover !important;\n    background-position: top !important;\n    transition: all 0.3s;\n    border-radius: 3px;\n    cursor: pointer; }\n\n.tiles__item:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: #383230;\n      opacity: 0.5;\n      z-index: 10;\n      transition: all 0.3s; }\n\n.tiles__item:hover:before {\n      opacity: 0; }\n\n.tiles__item:hover .tiles__wrap {\n      top: 10px; }\n\n.tiles__item:hover .tiles__wrap .tiles__name {\n        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3); }\n\n.tiles__item:nth-child(1) {\n      background: url('rt.jpg') no-repeat; }\n\n.tiles__item:nth-child(2) {\n      background: url('tg.jpg') no-repeat; }\n\n.tiles__item:nth-child(3) {\n      background: url('lv.jpg') no-repeat; }\n\n.tiles__item:nth-child(4) {\n      background: url('nv.jpg') no-repeat; }\n\n.tiles__wrap {\n    position: relative;\n    z-index: 20;\n    transition: all 0.4s;\n    width: 100%;\n    top: 0; }\n\n.tiles__name {\n    font-size: 36px;\n    font-weight: 700;\n    margin-bottom: 10px;\n    transition: all 0.4s; }\n\n.tiles__merit {\n    font-size: 18px;\n    color: white;\n    line-height: 1.3;\n    min-width: 40px;\n    margin-bottom: 40px;\n    padding: 20px 40px 0;\n    transition: all 0.4s; }\n\n@media (max-width: 766px) {\n  .tiles__item {\n    min-width: 100%;\n    max-width: 100%;\n    flex: 1;\n    margin: 0 0 20px 0; } }\n\n@media (max-width: 700px) {\n  .tiles {\n    padding: 16px; }\n    .tiles__name {\n      font-size: 22px; }\n    .tiles__merit {\n      font-size: 14px; }\n    .tiles__item {\n      min-height: 200px;\n      margin: 0 0 16px 0; } }\n\n.news-slider {\n  padding: 60px 40px 130px;\n  text-align: center;\n  background: url('Bg-sl.png') no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  box-shadow: inset 1px 1px 6px 0px #353131;\n  overflow: hidden; }\n\n.news-slider:before {\n    content: '';\n    background: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0; }\n\n.news-slider h3 {\n    color: white;\n    font-weight: 500;\n    z-index: 10;\n    position: relative;\n    margin-bottom: 10px; }\n\n.news-slider__link {\n    color: #AE9671;\n    text-decoration: underline;\n    cursor: pointer;\n    margin-bottom: 40px;\n    outline: none;\n    z-index: 10;\n    position: relative; }\n\n.news-slider__link:hover {\n      color: #c1ae91; }\n\n.news-slider__wrap {\n    position: relative;\n    z-index: 15;\n    text-align: left;\n    display: flex !important;\n    align-items: center;\n    max-width: 1260px;\n    margin: 0 auto; }\n\n.news-slider__wrap .all-news__item {\n      max-width: 100%;\n      flex: 0 0  100%; }\n\n.news-slider__wrap .all-news__item:nth-child(3n) {\n        margin-right: 20px; }\n\n.news-slider .all-news__item {\n    margin-bottom: 0;\n    cursor: default; }\n\n.news-slider .all-news__item:hover {\n      box-shadow: 0 0 7px 0px black !important; }\n\n.news-slider .all-news__item-link {\n    cursor: default; }\n\n.news-slider .all-news__item-img {\n    cursor: pointer; }\n\n.news-slider .slick-track {\n    height: 550px; }\n\n.news-slider .slick-list {\n    margin: 0 20px; }\n\n.news-slider .slick-slide {\n    margin: 0 10px; }\n\n.news-slider .slick-arrow {\n    display: block;\n    font-size: 0;\n    line-height: 0;\n    height: 40px;\n    width: 40px;\n    flex: 0  0 40px;\n    border: none;\n    outline: none;\n    padding: 0;\n    margin: 0;\n    position: relative;\n    cursor: pointer;\n    background: none; }\n\n.news-slider .slick-arrow:hover:before {\n      color: #AE9671; }\n\n.news-slider .slick-arrow:before {\n      content: \"\\F141\";\n      color: white;\n      font-family: \"Material Design Icons\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      font-size: 40px;\n      line-height: 1; }\n\n.news-slider .slick-arrow:before:hover {\n        color: #AE9671; }\n\n.news-slider .slick-arrow.slick-next:before {\n      content: \"\\F142\"; }\n\n.news-slider .slick-dots {\n    position: absolute;\n    top: calc(100% + 45px);\n    width: 100%;\n    display: flex;\n    align-item: center;\n    justify-content: center; }\n\n.news-slider .slick-dots li {\n      background: white;\n      display: block;\n      height: 12px;\n      width: 12px;\n      margin: 0 5px;\n      border-radius: 3px;\n      cursor: pointer;\n      position: relative; }\n\n.news-slider .slick-dots li button {\n        background: none;\n        border: none;\n        font-size: 0;\n        line-height: 0;\n        outline: none;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        cursor: pointer; }\n\n.news-slider .slick-dots .slick-active {\n      background: #AE9671; }\n\n@media (max-width: 1024px) {\n  .news-slider {\n    padding: 60px 20px 130px; }\n    .news-slider .slick-list {\n      margin: 0 8px; } }\n\n@media (max-width: 700px) {\n  .news-slider {\n    padding: 40px 0 110px; }\n    .news-slider .slick-track {\n      height: 450px; }\n    .news-slider h3 {\n      font-size: 24px; }\n    .news-slider__link {\n      margin-bottom: 25px; } }\n\n/* Slider */\n\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent; }\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0; }\n\n.slick-list:focus {\n    outline: none; }\n\n.slick-list.dragging {\n    cursor: pointer;\n    cursor: hand; }\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex !important;\n  height: 100%; }\n\n.slick-track:before, .slick-track:after {\n    content: \"\";\n    display: table; }\n\n.slick-track:after {\n    clear: both; }\n\n.slick-loading .slick-track {\n    visibility: hidden; }\n\n.slick-slide {\n  display: flex;\n  height: 100%;\n  min-height: 1px;\n  outline: none;\n  display: none; }\n\n[dir=\"rtl\"] .slick-slide {\n    float: right; }\n\n.slick-slide > div {\n    height: 100%;\n    display: flex; }\n\n.slick-slide img {\n    display: block; }\n\n.slick-slide.slick-loading img {\n    display: none; }\n\n.slick-slide.dragging img {\n    pointer-events: none; }\n\n.slick-initialized .slick-slide {\n    display: block; }\n\n.slick-loading .slick-slide {\n    visibility: hidden; }\n\n.slick-vertical .slick-slide {\n    display: block;\n    height: auto;\n    border: 1px solid transparent; }\n\n.slick-arrow.slick-hidden {\n  display: none; }\n\n.fitback {\n  padding: 60px 0 80px;\n  margin: 0 auto;\n  max-width: 1200px; }\n\n.fitback h3 {\n    text-align: center; }\n\n.fitback__text {\n    text-align: center;\n    color: #9B9B9B;\n    line-height: 1.3; }\n\n.fitback__form {\n    padding: 65px;\n    background: #F8F6F2;\n    border-radius: 5px;\n    margin-top: 35px;\n    box-shadow: 0px 0px 13px 0px #dcdcdc; }\n\n.fitback__inputs {\n    width: 50%; }\n\n.fitback input, .fitback textarea {\n    margin-bottom: 20px; }\n\n@media (max-width: 1024px) {\n  .fitback {\n    display: none; } }\n\ntextarea {\n  box-sizing: border-box;\n  width: 100%;\n  height: 60px;\n  padding: 30px 30px;\n  outline: none;\n  font-size: 18px;\n  box-shadow: none;\n  border: none;\n  background: #FFFFFF;\n  box-shadow: inset 0 1px 2px 0 rgba(137, 131, 122, 0.47);\n  border-radius: 30px;\n  height: 250px; }\n\n.modal {\n  width: 500px;\n  background: white;\n  border-radius: 3px; }\n\n.modal__wrap {\n    background: rgba(0, 0, 0, 0.85);\n    z-index: 1000;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    justify-content: center;\n    align-items: center;\n    display: none; }\n\n.modal__wrap.active {\n      display: flex;\n      -webkit-animation: darkned .3s;\n              animation: darkned .3s; }\n\n.modal__header {\n    position: relative;\n    padding: 30px 20px;\n    border-bottom: 1px solid #E0E0E0; }\n\n.modal__header-title {\n      font-weight: 700;\n      font-size: 18px; }\n\n.modal__close {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    transition: color 0.2s;\n    cursor: pointer; }\n\n.modal__close:hover {\n      color: #AE9671; }\n\n.modal__body {\n    padding: 20px;\n    min-height: 300px; }\n\n.modal__body_picture {\n      min-height: 100px; }\n\n.modal__body-text {\n      color: #4A4A4A; }\n\n.modal__footer {\n    padding: 20px; }\n\n.modal_picture {\n    background: white;\n    border-radius: 3px;\n    display: flex;\n    max-width: 85%;\n    max-height: 85vh;\n    position: relative; }\n\n.modal_picture.active {\n      -webkit-animation: vizible .5s;\n              animation: vizible .5s;\n      opacity: 1; }\n\n.modal__img {\n    background: gray; }\n\n.modal__img img {\n      font-size: 0;\n      padding: 0;\n      margin: 0;\n      line-height: 0;\n      display: block;\n      border-radius: 3px 0 0 3px;\n      max-height: 85vh;\n      transition: all .3s;\n      opacity: 1; }\n\n.modal__textblock {\n    width: 300px;\n    min-width: 300px;\n    margin: 0 20px; }\n\n.modal__navigation {\n    color: white;\n    z-index: 10001;\n    font-size: 24px; }\n\n.modal__left {\n    left: 40px;\n    position: fixed;\n    top: 50%;\n    width: 30px; }\n\n.modal__left:hover {\n      cursor: pointer; }\n\n.modal__right {\n    right: 40px;\n    position: fixed;\n    top: 50%;\n    width: 30px; }\n\n.modal__right:hover {\n      cursor: pointer; }\n\n.fade {\n  opacity: 0.1 !important; }\n\n.next {\n  -webkit-animation: modnext 0.5s;\n          animation: modnext 0.5s; }\n\n.prew {\n  -webkit-animation: modprew 0.5s;\n          animation: modprew 0.5s; }\n\n@keyframes vizible {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@-webkit-keyframes darkned {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes darkned {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes modnext {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(-30px);\n            transform: translateX(-30px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes modnext {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(-30px);\n            transform: translateX(-30px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@-webkit-keyframes modprew {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(30px);\n            transform: translateX(30px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes modprew {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(30px);\n            transform: translateX(30px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n.searchresult .content {\n  max-width: 100%; }\n\n.search-result {\n  width: 1200px;\n  padding: 30px;\n  margin: 0 auto; }\n\n.search-result__pages {\n    margin-bottom: 60px; }\n\n.search-result__title br {\n    display: none; }\n\n.search-result__item {\n    border-top: 1px solid #E0E0E0;\n    padding-top: 20px; }\n\n.search-result__item_news {\n      display: flex;\n      justify-content: space-between;\n      padding-bottom: 20px; }\n\n.search-result__item h4 a br {\n      display: none; }\n\n.search-result__more {\n    background: white; }\n\n.search-result__date {\n    margin-bottom: 20px;\n    font-size: 14px;\n    color: #4a4a4a66;\n    margin-top: -10px; }\n\n.search-result__text .more-link {\n    display: none; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/raw-loader!../../node_modules/postcss-loader/lib??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/scss/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!************************************!*\
  !*** multi ./src/scss/styles.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/romanarsenev/work/4-art/4-cli/four/Angular4art/src/scss/styles.scss */"./src/scss/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map