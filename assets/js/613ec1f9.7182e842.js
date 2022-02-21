"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3583],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8363:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={},c="Migration guide",l={unversionedId:"migration-guide",id:"migration-guide",isDocsHomePage:!1,title:"Migration guide",description:"Now the this flugin uses the swift facebook sdk 12.2.1 and the android facebook sdk 12.2.0",source:"@site/docs/migration-guide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/docs/4.x.x/migration-guide",editUrl:"https://github.com/darwin-morocho/flutter-facebook-auth/tree/master/website/docs/migration-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Complete example",permalink:"/docs/4.x.x/example"},next:{title:"Using with Firebase Auth",permalink:"/docs/4.x.x/firebase-auth"}},p=[],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-guide"},"Migration guide"),(0,i.kt)("p",null,"Now the this flugin uses the swift facebook sdk 12.2.1 and the android facebook sdk 12.2.0"),(0,i.kt)("p",null,"If you have a previous version of ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter_facebook_auth: 4.0.0")," you need to remove that version from your ",(0,i.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter:\n    sdk: flutter\n  url_launcher: ^6.0.2\n  flutter_facebook_auth: 3.5.7 # <-- REMOVE THIS\n")),(0,i.kt)("p",null,"Now run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter pub get"),".\nNext you need remove the previos version of the facebook sdk from your ",(0,i.kt)("strong",{parentName:"p"},"Podfile.lock")," (only iOS) just run the next command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ios && pod install\n")),(0,i.kt)("p",null,"The above command will remove the old dependencies from the ",(0,i.kt)("strong",{parentName:"p"},"Podfile.lock")," file. Now add the new version of this plugin in your ",(0,i.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")))}f.isMDXComponent=!0}}]);