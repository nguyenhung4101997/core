var __awaiter=this&&this.__awaiter||function(t,e,i,n){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function s(t){try{u(n.next(t))}catch(e){r(e)}}function o(t){try{u(n["throw"](t))}catch(e){r(e)}}function u(t){t.done?i(t.value):a(t.value).then(s,o)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,a,r,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return u([t,e])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,a&&(r=s[0]&2?a["return"]:s[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;if(a=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;a=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(s[0]===6&&i.label<r[1]){i.label=r[1];r=s;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(s);break}if(r[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(o){s=[6,o];a=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-f3ba83c6.system.js","./p-35fd404b.system.js","./p-00d453ac.system.js"],(function(t){"use strict";var e,i,n,a,r,s,o,u,l,h,c,f,p,d,b,v,y;return{setters:[function(t){e=t.r;i=t.c;n=t.h;a=t.H;r=t.g},function(t){s=t.g;o=t.c;u=t.k;l=t.h;h=t.b;c=t.d;f=t.e;p=t.a;d=t.f;b=t.u},function(t){v=t.g;y=t.s}],execute:function(){var m=t("dot_checkbox",function(){function t(t){e(this,t);this.name="";this.label="";this.hint="";this.options="";this.required=false;this.disabled=false;this.requiredMessage="This field is required";this.value="";this.dotValueChange=i(this,"dotValueChange",7);this.dotStatusChange=i(this,"dotStatusChange",7)}t.prototype.componentWillLoad=function(){this.value=this.value||"";this.validateProps();this.emitValueChange();this.status=s(this.isValid());this.emitStatusChange()};t.prototype.componentDidLoad=function(){var t=this;var e=["dottype"];var i=this.el.querySelectorAll('input[type="checkbox"]');setTimeout((function(){var n=v(Array.from(t.el.attributes),e);i.forEach((function(t){y(t,n)}))}),0)};t.prototype.optionsWatch=function(){var t=o(this,"options");this._options=u(t)};t.prototype.valueWatch=function(){this.value=this.value||""};t.prototype.reset=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.value="";this.status=s(this.isValid());this.emitValueChange();this.emitStatusChange();return[2]}))}))};t.prototype.render=function(){var t=this;var e=l(this.status,this.isValid(),this.required);return n(a,{class:Object.assign({},e)},n("dot-label",{label:this.label,required:this.required,name:this.name},n("div",{"aria-describedby":d(this.hint),tabIndex:this.hint?0:null,class:"dot-checkbox__items"},this._options.map((function(e){var i=e.value.trim();return n("label",null,n("input",{class:f(t.isValid()),name:p(t.name),type:"checkbox",disabled:t.disabled||null,checked:t.value.indexOf(i)>=0||null,onInput:function(e){return t.setValue(e)},value:i}),e.label)})))),c(this.hint),h(!this.isValid(),this.requiredMessage))};t.prototype.validateProps=function(){this.optionsWatch()};t.prototype.setValue=function(t){this.value=this.getValueFromCheckInputs(t.target.value.trim(),t.target.checked);this.status=b(this.status,{dotTouched:true,dotPristine:false,dotValid:this.isValid()});this.emitValueChange();this.emitStatusChange()};t.prototype.getValueFromCheckInputs=function(t,e){var i=this.value.trim().length?this.value.split(","):[];var n=new Set(i);if(e){n.add(t)}else{n.delete(t)}return Array.from(n).join(",")};t.prototype.emitStatusChange=function(){this.dotStatusChange.emit({name:this.name,status:this.status})};t.prototype.isValid=function(){return this.required?!!this.value:true};t.prototype.emitValueChange=function(){this.dotValueChange.emit({name:this.name,value:this.value})};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{options:["optionsWatch"],value:["valueWatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".dot-checkbox__items{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.dot-checkbox__items label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.dot-checkbox__items input{margin:0 .25rem 0 0}"},enumerable:true,configurable:true});return t}())}}}));