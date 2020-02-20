var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,a){function s(t){try{u(n.next(t))}catch(e){a(e)}}function o(t){try{u(n["throw"](t))}catch(e){a(e)}}function u(t){t.done?i(t.value):r(t.value).then(s,o)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,r,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return u([t,e])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=s[0]&2?r["return"]:s[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;if(r=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;r=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(s[0]===6&&i.label<a[1]){i.label=a[1];a=s;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(s);break}if(a[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(o){s=[6,o];r=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-79c65723.system.js","./p-a3fd3d11.system.js","./p-bfb0f4f7.system.js"],(function(t){"use strict";var e,i,n,r,a,s,o,u,h,l,c,d;return{setters:[function(t){e=t.r;i=t.c;n=t.h;r=t.H;a=t.g},function(t){s=t.c;o=t.h;u=t.d;h=t.f;l=t.b},function(t){c=t.g;d=t.s}],execute:function(){var f=t("dot_date",function(){function t(t){e(this,t);this.value="";this.name="";this.label="";this.hint="";this.required=false;this.requiredMessage="This field is required";this.validationMessage="The field doesn't comply with the specified format";this.disabled=false;this.min="";this.max="";this.step="1";this.dotValueChange=i(this,"dotValueChange",7);this.dotStatusChange=i(this,"dotStatusChange",7)}t.prototype.reset=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=this.el.querySelector("dot-input-calendar");t.reset();return[2]}))}))};t.prototype.componentWillLoad=function(){this.validateProps()};t.prototype.componentDidLoad=function(){var t=this;var e=["dottype"];var i=this.el.querySelector('input[type="date"]');setTimeout((function(){var n=c(Array.from(t.el.attributes),e);d(i,n)}),0)};t.prototype.minWatch=function(){this.min=s(this,"min","date")};t.prototype.maxWatch=function(){this.max=s(this,"max","date")};t.prototype.emitValueChange=function(t){t.stopImmediatePropagation();var e=t.detail;this.value=e.value;this.dotValueChange.emit(e)};t.prototype.emitStatusChange=function(t){t.stopImmediatePropagation();var e=t.detail;this.classNames=o(e.status,e.status.dotValid,this.required);this.setErrorMessageElement(e);this.dotStatusChange.emit({name:e.name,status:e.status})};t.prototype.render=function(){return n(r,{class:Object.assign({},this.classNames)},n("dot-label",{label:this.label,required:this.required,name:this.name},n("dot-input-calendar",{"aria-describedby":h(this.hint),tabIndex:this.hint?0:null,disabled:this.disabled,type:"date",name:this.name,value:this.value,required:this.required,min:this.min,max:this.max,step:this.step})),u(this.hint),this.errorMessageElement)};t.prototype.validateProps=function(){this.minWatch();this.maxWatch()};t.prototype.setErrorMessageElement=function(t){this.errorMessageElement=l(!t.status.dotValid&&!t.status.dotPristine,this.getErrorMessage(t))};t.prototype.getErrorMessage=function(t){return!!this.value?t.isValidRange?"":this.validationMessage:this.requiredMessage};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{min:["minWatch"],max:["maxWatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return""},enumerable:true,configurable:true});return t}())}}}));