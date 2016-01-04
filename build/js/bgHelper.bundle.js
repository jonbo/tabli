webpackJsonp([0],{0:function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,n){for(var t=[],r=0;r<n.children.length;r++){var o=n.children[r];if("_"!==o.title[0]){var i=o.children;i?t.push(h.makeFolderTabWindow(o)):console.log("Found bookmarks folder with no children, skipping: ",i)}}return e.registerTabWindows(t)}function a(e,n,t){if(e.children)for(var r=0;r<e.children.length;r++){var o=e.children[r];if(o.title.toLowerCase()===n.toLowerCase())return t(o),!0}console.log("Child folder ",n," Not found, creating...");var i={parentId:e.id,title:n};chrome.bookmarks.create(i,t)}function u(e){var n=null,t=null;chrome.bookmarks.getTree(function(r){var o=r[0].children[1];a(o,T,function(r){console.log("tab manager folder acquired."),n=r.id,a(r,I,function(o){console.log("archive folder acquired."),t=o.id,chrome.bookmarks.getSubTree(r.id,function(r){var o=new f["default"]({folderId:n,archiveFolderId:t}),a=i(o,r[0]);e(a)})})})})}function d(e){chrome.runtime.onConnect.addListener(function(n){n.onMessage.addListener(function(t){var r=t.listenerId;n.onDisconnect.addListener(function(){e.removeViewListener(r)})})})}function s(e){function n(){var n=e.getValue(),t=y.createElement(W["default"],{storeRef:null,initialWinStore:n,noListener:!0}),r=y.renderToString(t);window.savedStore=n,window.savedHTML=r}return n}function c(){u(function(e){p.syncChromeWindows(function(n){console.log("initial sync of chrome windows complete.");var t=n(e);window.storeRef=new g["default"](t);var r=s(window.storeRef);r(),window.storeRef.on("change",r),d(window.storeRef)})})}var l=t(1),f=o(l),w=t(5),h=r(w),v=t(6),p=r(v),b=t(8),y=r(b),k=t(160),g=o(k),m=t(165),W=o(m),T="Tabli Saved Windows",I="_Archive";c()},1:function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();Object.defineProperty(n,"__esModule",{value:!0});var d=t(2),s=r(d),c=t(4),l=r(c),f=t(5),w=r(f),h=function(e){function n(){return o(this,n),i(this,Object.getPrototypeOf(n).apply(this,arguments))}return a(n,e),u(n,[{key:"registerTabWindow",value:function(e){var n=e.open?this.windowIdMap.set(e.openWindowId,e):this.windowIdMap,t=e.saved?this.bookmarkIdMap.set(e.savedFolderId,e):this.bookmarkIdMap;return this.set("windowIdMap",n).set("bookmarkIdMap",t)}},{key:"registerTabWindows",value:function(e){return s.reduce(e,function(e,n){return e.registerTabWindow(n)},this)}},{key:"handleTabWindowClosed",value:function(e){var n=this.windowIdMap["delete"](e.openWindowId),t=w.removeOpenWindowState(e);return this.set("windowIdMap",n).registerTabWindow(t)}},{key:"handleTabClosed",value:function(e,n){var t=w.closeTab(e,n);return this.registerTabWindow(t)}},{key:"handleTabSaved",value:function(e,n,t){var r=w.saveTab(e,n,t);return this.registerTabWindow(r)}},{key:"handleTabUnsaved",value:function(e,n){var t=w.unsaveTab(e,n);return this.registerTabWindow(t)}},{key:"attachChromeWindow",value:function(e,n){var t=this.windowIdMap.get(n.id),r=t?this.handleTabWindowClosed(t):this,o=w.updateWindow(e,n);return console.log("attachChromeWindow: attachedTabWindow: ",o.toJS()),r.registerTabWindow(o)}},{key:"syncChromeWindow",value:function(e){var n=this.windowIdMap.get(e.id),t=n?w.updateWindow(n,e):w.makeChromeTabWindow(e);return this.registerTabWindow(t)}},{key:"syncWindowList",value:function(e){var n=this.getOpen(),t=s.pluck(e,"id"),r=new Set(t),o=s.filter(n,function(e){return!r.has(e.openWindowId)}),i=s.reduce(o,function(e,n){return e.handleTabWindowClosed(n)},this);return s.reduce(e,function(e,n){return e.syncChromeWindow(n)},i)}},{key:"setCurrentWindow",value:function(e){var n=this.getTabWindowByChromeId(e);if(!n)return void console.log("setCurrentWindow: window id ",e,"not found");var t=n.set("focused",!0);return this.registerTabWindow(t)}},{key:"removeBookmarkIdMapEntry",value:function(e){return this.set("bookmarkIdMap",this.bookmarkIdMap["delete"](e.savedFolderId))}},{key:"unmanageWindow",value:function(e){var n=this.removeBookmarkIdMapEntry(e),t=w.removeSavedWindowState(e);return n.registerTabWindow(t)}},{key:"attachBookmarkFolder",value:function(e,n){var t=w.makeFolderTabWindow(e),r=w.updateWindow(t,n);return this.registerTabWindow(r)}},{key:"getOpen",value:function(){var e=this.windowIdMap.toIndexedSeq().toArray();return e}},{key:"getAll",value:function(){var e=this.getOpen(),n=this.bookmarkIdMap.toIndexedSeq().filter(function(e){return!e.open}).toArray();return e.concat(n)}},{key:"getTabWindowByChromeId",value:function(e){return this.windowIdMap.get(e)}},{key:"countOpenWindows",value:function(){return this.windowIdMap.count()}},{key:"countSavedWindows",value:function(){return this.bookmarkIdMap.count()}},{key:"countOpenTabs",value:function(){return this.windowIdMap.reduce(function(e,n){return e+n.openTabCount},0)}}]),n}(l.Record({windowIdMap:l.Map(),bookmarkIdMap:l.Map(),folderId:-1,archiveFolderId:-1}));n["default"]=h},160:function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();Object.defineProperty(n,"__esModule",{value:!0});var d=t(161),s=r(d),c=function(e){function n(e){o(this,n);var t=i(this,Object.getPrototypeOf(n).call(this,e));return t.viewListeners=[],t}return a(n,e),u(n,[{key:"addViewListener",value:function(e){var n=this.viewListeners.indexOf(e);return-1===n&&(n=this.viewListeners.length,this.viewListeners.push(e),this.on("change",e)),n}},{key:"removeViewListener",value:function(e){var n=this.viewListeners[e];n?this.removeListener("change",n):console.warn("removeViewListener: No listener found for id ",e),delete this.viewListeners[e]}}]),n}(s.Ref);n["default"]=c}});