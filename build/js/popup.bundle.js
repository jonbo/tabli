webpackJsonp([2],[function(e,n,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function t(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n["default"]=e,n}function i(e){function n(){var n=d.createElement(p["default"],{storeRef:t,initialWinStore:i}),r=(d.render(n,c),performance.now());console.log("full render complete. render time: (",r-o," ms)"),l.syncChromeWindows((0,f.logWrap)(function(n){var r=n(i),a=r.setCurrentWindow(e);t.setValue(a);var c=performance.now();console.log("syncChromeWindows and update complete: ",c-o," ms"),document.getElementById("searchBox").focus()}))}var o=performance.now(),r=chrome.extension.getBackgroundPage(),t=r.storeRef,i=r.savedStore,a=r.savedHTML,c=document.getElementById("windowList-region");if(a){c.innerHTML=a;var u=performance.now();console.log("time to set initial HTML: ",u-o)}setTimeout(n,0)}function a(){chrome.windows.getCurrent(null,function(e){i(e.id)})}function c(){window.onload=a}var u=o(8),d=t(u),s=o(6),l=t(s),f=o(7),m=o(166),w=o(165),p=r(w);m.addons.PureRenderMixin,m.addons.Perf;c()}]);