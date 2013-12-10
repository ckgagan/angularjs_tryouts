/*
 AngularJS v1.2.1
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(v,c,B){'use strict';function y(t,q,l,b,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(k,A,n,C,x){function w(){g&&(g.$destroy(),g=null);p&&(f.leave(p),p=null)}function d(){var a=t.current&&t.current.locals,e=a&&a.$template;if(e){var z=k.$new();x(z,function(u){u.html(e);f.enter(u,null,p||A,function(){!c.isDefined(r)||r&&!k.$eval(r)||q()});w();var h=l(u.contents()),m=t.current;g=m.scope=z;p=u;if(m.controller){a.$scope=g;var d=b(m.controller,a);m.controllerAs&&
(g[m.controllerAs]=d);u.data("$ngControllerController",d);u.children().data("$ngControllerController",d)}h(g);g.$emit("$viewContentLoaded");g.$eval(s)})}else w()}var g,p,r=n.autoscroll,s=n.onload||"";k.$on("$routeChangeSuccess",d);d()}}}v=c.module("ngRoute",["ng"]).provider("$route",function(){function t(b,f){return c.extend(new (c.extend(function(){},{prototype:b})),f)}function q(b,c){var k=c.caseInsensitiveMatch,l={originalPath:b,regexp:b},n=l.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,
function(b,c,f,d){b="?"===d?d:null;d="*"===d?d:null;n.push({name:f,optional:!!b});c=c||"";return""+(b?"":c)+"(?:"+(b?c:"")+(d&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");l.regexp=RegExp("^"+b+"$",k?"i":"");return l}var l={};this.when=function(b,f){l[b]=c.extend({reloadOnSearch:!0},f,b&&q(b,f));if(b){var k="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/";l[k]=c.extend({redirectTo:b},q(k,f))}return this};this.otherwise=function(b){this.when(null,b);return this};this.$get=
["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(b,f,k,q,n,v,x,w){function d(){var a=g(),e=s.current;if(a&&e&&a.$$route===e.$$route&&c.equals(a.pathParams,e.pathParams)&&!a.reloadOnSearch&&!r)e.params=a.params,c.copy(e.params,k),b.$broadcast("$routeUpdate",e);else if(a||e)r=!1,b.$broadcast("$routeChangeStart",a,e),(s.current=a)&&a.redirectTo&&(c.isString(a.redirectTo)?f.path(p(a.redirectTo,a.params)).search(a.params).replace():f.url(a.redirectTo(a.pathParams,
f.path(),f.search())).replace()),q.when(a).then(function(){if(a){var b=c.extend({},a.resolve),e,h;c.forEach(b,function(a,e){b[e]=c.isString(a)?n.get(a):n.invoke(a)});c.isDefined(e=a.template)?c.isFunction(e)&&(e=e(a.params)):c.isDefined(h=a.templateUrl)&&(c.isFunction(h)&&(h=h(a.params)),h=w.getTrustedResourceUrl(h),c.isDefined(h)&&(a.loadedTemplateUrl=h,e=v.get(h,{cache:x}).then(function(a){return a.data})));c.isDefined(e)&&(b.$template=e);return q.all(b)}}).then(function(f){a==s.current&&(a&&(a.locals=
f,c.copy(a.params,k)),b.$broadcast("$routeChangeSuccess",a,e))},function(c){a==s.current&&b.$broadcast("$routeChangeError",a,e,c)})}function g(){var a,b;c.forEach(l,function(d,l){var h;if(h=!b){var m=f.path();h=d.keys;var k={};if(d.regexp)if(m=d.regexp.exec(m)){for(var g=1,q=m.length;g<q;++g){var n=h[g-1],p="string"==typeof m[g]?decodeURIComponent(m[g]):m[g];n&&p&&(k[n.name]=p)}h=k}else h=null;else h=null;h=a=h}h&&(b=t(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)});return b||l[null]&&
t(l[null],{params:{},pathParams:{}})}function p(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var f=a.match(/(\w+)(.*)/),g=f[1];d.push(b[g]);d.push(f[2]||"");delete b[g]}});return d.join("")}var r=!1,s={routes:l,reload:function(){r=!0;b.$evalAsync(d)}};b.$on("$locationChangeSuccess",d);return s}]});v.provider("$routeParams",function(){this.$get=function(){return{}}});v.directive("ngView",y);y.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]})(window,
window.angular);
//# sourceMappingURL=angular-route.min.js.map
