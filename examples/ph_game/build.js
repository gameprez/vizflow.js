"format register";!function(e){function t(e){for(var t=[],r=0,n=e.length;n>r;r++)-1==d.call(t,e[r])&&t.push(e[r]);return t}function r(e,r,n,i){if("string"!=typeof e)throw"System.register provided no module name";var u;u="boolean"==typeof n?{declarative:!1,deps:r,execute:i,executingRequire:n}:{declarative:!0,deps:r,declare:n},u.name=e,l[e]||(l[e]=u),u.deps=t(u.deps),u.normalizedDeps=u.deps}function n(e,t){if(t[e.groupIndex]=t[e.groupIndex]||[],-1==d.call(t[e.groupIndex],e)){t[e.groupIndex].push(e);for(var r=0,i=e.normalizedDeps.length;i>r;r++){var u=e.normalizedDeps[r],o=l[u];if(o&&!o.evaluated){var s=e.groupIndex+(o.declarative!=e.declarative);if(void 0===o.groupIndex||o.groupIndex<s){if(void 0!==o.groupIndex&&(t[o.groupIndex].splice(d.call(t[o.groupIndex],o),1),0==t[o.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");o.groupIndex=s}n(o,t)}}}}function i(e){var t=l[e];t.groupIndex=0;var r=[];n(t,r);for(var i=!!t.declarative==r.length%2,u=r.length-1;u>=0;u--){for(var s=r[u],c=0;c<s.length;c++){var f=s[c];i?o(f):a(f)}i=!i}}function u(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function o(t){if(!t.module){var r=t.module=u(t.name),n=t.module.exports,i=t.declare.call(e,function(e,t){r.locked=!0,n[e]=t;for(var i=0,u=r.importers.length;u>i;i++){var o=r.importers[i];if(!o.locked){var s=d.call(o.dependencies,r);o.setters[s](n)}}return r.locked=!1,t});if(r.setters=i.setters,r.execute=i.execute,!r.setters||!r.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var s=0,a=t.normalizedDeps.length;a>s;s++){var c,m=t.normalizedDeps[s],v=l[m],g=p[m];g?c=g.exports:v&&!v.declarative?c={"default":v.module.exports,__useDefault:!0}:v?(o(v),g=v.module,c=g.exports):c=f(m),g&&g.importers?(g.importers.push(r),r.dependencies.push(g)):r.dependencies.push(null),r.setters[s]&&r.setters[s](c)}}}function s(e){var t,r=l[e];if(r)r.declarative?c(e,[]):r.evaluated||a(r),t=r.module.exports;else if(t=f(e),!t)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&t&&t.__useDefault?t["default"]:t}function a(t){if(!t.module){var r={},n=t.module={exports:r,id:t.name};if(!t.executingRequire)for(var i=0,u=t.normalizedDeps.length;u>i;i++){var o=t.normalizedDeps[i],c=l[o];c&&a(c)}t.evaluated=!0;var f=t.execute.call(e,function(e){for(var r=0,n=t.deps.length;n>r;r++)if(t.deps[r]==e)return s(t.normalizedDeps[r]);throw new TypeError("Module "+e+" not declared as a dependency.")},r,n);f&&(n.exports=f)}}function c(t,r){var n=l[t];if(!n.evaluated&&n.declarative){r.push(t);for(var i=0,u=n.normalizedDeps.length;u>i;i++){var o=n.normalizedDeps[i];-1==d.call(r,o)&&(l[o]?c(o,r):f(o))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(m[e])return m[e];var t=l[e];if(!t)throw"Module "+e+" not present.";i(e),c(e,[]),l[e]=void 0;var r=t.declarative?t.module.exports:{"default":t.module.exports,__useDefault:!0};return m[e]=r}var l={},d=Array.prototype.indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(this[t]===e)return t;return-1},p={},m={};return function(t,n){var i;"undefined"!=typeof i&&i.register?(n(i),i["import"](t)):(n(i={register:r,get:f,set:function(e,t){m[e]=t},newModule:function(e){return e},global:e}),i.set("@empty",i.newModule({})),f(t))}}("undefined"!=typeof window?window:global)("src/vizflow",function(e){e.register("src/step",[],function(e){function t(){$Z.sim=$Z.pipe($Z.task)}function r(){$Z.iter++,window.requestAnimationFrame(t)}return e("default",r),{setters:[],execute:function(){"use strict"}}}),e.register("src/item",[],function(e){function t(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return 0==t.length?$Z._item:($Z._item=t[0],$Z)}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/prep",[],function(e){function t(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return 0==t.length?$Z._prep.map(function(e){return Promise.resolve(e())}):($Z._prep=t[0],$Z)}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/action",[],function(e){function t(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return 0==t.length?$Z._action.map(function(e){return e()}):($Z._action=t[0],$Z)}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/pipe",[],function(e){function t(e){for(var t=Promise.resolve(),r=0;r<e.length;r++)t=t.then(e[r]);return t}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/done",[],function(e){function t(){return 0==$Z._item.length||$Z.iter>$Z.maxIter?!0:!1}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/exit",[],function(e){function t(){return!1}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/run",[],function(e){function t(){$Z.sim=$Z.pipe($Z.task)}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/update",[],function(e){function t(){var e=this,t=[],r=[];if(void 0!==e.transition){for(var n=0;n<e.transition.length;n++){var i=e.transition[n],u=0;void 0===i.startTime?i.startTime=Date.now():u=Date.now()-i.startTime;var o=i.duration-u;if(0==u)i.startValue=e[i.varName];else if(o>0){var s=1-o/i.duration;e[i.varName]=i.interpFunc(s)}else e[i.varName]=i.endValue,t.push(n),void 0!==i.child&&r.push(i.child),void 0!==i.end&&i.end()}for(var a=t.length-1;a>=0;a--){if(t[a]<e.transition.length-1){var c=e.transition[e.transition.length-1];e.transition[e.transition.length-1]=e.transition[t[a]],e.transition[t[a]]=c}e.transition.pop()}for(var f=0;f<r.length;f++)e.transition.push(r[f])}}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/transition",[],function(e){var t;return{setters:[],execute:function(){"use strict";t={linear_interp:function(e){return(1-e)*this.startValue+e*this.endValue},color_interp:function(e){var t=this.startValue,r=this.endValue;t=t.slice(1),r=r.slice(1),3===t.length&&(t=t.replace(/([0-9a-f])/gi,"$1$1")),3===r.length&&(r=r.replace(/([0-9a-f])/gi,"$1$1"));for(var n="#",i=0;3>i;i++){var u=parseInt(t.slice(2*i,2*(i+1)),16),o=parseInt(r.slice(2*i,2*(i+1)),16),s=Math.min(255,Math.round((1-e)*u+e*o));s=s.toString(16).toUpperCase(),1===s.length&&(s="0"+s),n+=s}return n},build_func:function(e,t,r){return function(n){return{varName:e,duration:t,interpFunc:r,endValue:n}}},linear_transition_func:function(e,t){return this.build_func(e,t,this.linear_interp)},color_transition_func:function(e,t){return this.build_func(e,t,this.color_interp)}},e("default",t)}}}),e.register("src/preprocess",[],function(e){function t(){return Promise.all($Z.prep())}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/update_items",[],function(e){function t(){return Promise.all($Z.item().map(function(e){return e.update?e.update():$Z.update.call(e)}))}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/detect_actions",[],function(e){function t(){var e=this;return new Promise(function(t){t(e.name)})}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/perform_actions",[],function(e){function t(){return Promise.all($Z.action())}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/render_image",[],function(e){function t(){return Promise.all($Z.item().map(function(e){return Promise.resolve(e.render())}))}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/step_or_exit",[],function(e){function t(){return $Z.done()?($Z.exit(),Promise.resolve(!0)):($Z.step(),Promise.resolve(!1))}return e("default",t),{setters:[],execute:function(){"use strict"}}}),e.register("src/vizflow",["src/step","src/item","src/prep","src/action","src/pipe","src/done","src/exit","src/run","src/update","src/transition","src/preprocess","src/update_items","src/detect_actions","src/perform_actions","src/render_image","src/step_or_exit"],function(e){var t,r,n,i,u,o,s,a,c,f,l,d,p,m,v,g,h,x,_,$,Z,w,y;return{setters:[function(e){t=e["default"]},function(e){r=e["default"]},function(e){n=e["default"]},function(e){i=e["default"]},function(e){u=e["default"]},function(e){o=e["default"]},function(e){s=e["default"]},function(e){a=e["default"]},function(e){c=e["default"]},function(e){f=e["default"]},function(e){l=e["default"]},function(e){d=e["default"]},function(e){p=e["default"]},function(e){m=e["default"]},function(e){v=e["default"]},function(e){g=e["default"]}],execute:function(){"use strict";h=[],x=[],_=[],$=0,Z=!1,w=1/0,y=[l,d,p,m,v,g],window.$Z={verbose:Z,iter:$,maxIter:w,transition:f,_item:h,_action:_,_prep:x,item:r,action:i,prep:n,update:c,pipe:u,step:t,done:o,exit:s,task:y,run:a},e("default",{})}}})});
//# sourceMappingURL=build.js.map