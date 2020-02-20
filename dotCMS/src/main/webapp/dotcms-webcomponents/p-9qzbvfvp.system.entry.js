var __awaiter=this&&this.__awaiter||function(t,e,i,r){function s(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,n){function a(t){try{o(r.next(t))}catch(e){n(e)}}function u(t){try{o(r["throw"](t))}catch(e){n(e)}}function o(t){t.done?i(t.value):s(t.value).then(a,u)}o((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,s,n,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return o([t,e])}}function o(a){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,s&&(n=a[0]&2?s["return"]:a[0]?s["throw"]||((n=s["return"])&&n.call(s),0):s.next)&&!(n=n.call(s,a[1])).done)return n;if(s=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;s=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(n=i.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(a[0]===6&&i.label<n[1]){i.label=n[1];n=a;break}if(n&&i.label<n[2]){i.label=n[2];i.ops.push(a);break}if(n[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(u){a=[6,u];s=0}finally{r=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-79c65723.system.js","./p-a3fd3d11.system.js","./p-bfb0f4f7.system.js"],(function(t){"use strict";var e,i,r,s,n,a,u,o,h,l,c,d,f,p,g,y;return{setters:[function(t){e=t.r;i=t.c;r=t.h;s=t.H;n=t.g},function(t){a=t.g;u=t.c;o=t.h;h=t.b;l=t.d;c=t.f;d=t.e;f=t.a;p=t.u},function(t){g=t.g;y=t.s}],execute:function(){var b=t("dot_textfield",function(){function t(t){e(this,t);this.value="";this.name="";this.label="";this.placeholder="";this.hint="";this.required=false;this.requiredMessage="This field is required";this.validationMessage="The field doesn't comply with the specified format";this.disabled=false;this.regexCheck="";this.type="text";this.dotValueChange=i(this,"dotValueChange",7);this.dotStatusChange=i(this,"dotStatusChange",7)}t.prototype.reset=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.value="";this.status=a(this.isValid());this.emitStatusChange();this.emitValueChange();return[2]}))}))};t.prototype.componentWillLoad=function(){this.validateProps();this.status=a(this.isValid());this.emitStatusChange()};t.prototype.componentDidLoad=function(){var t=this;var e=this.el.querySelector("input");setTimeout((function(){var i=g(Array.from(t.el.attributes),[]);y(e,i)}),0)};t.prototype.regexCheckWatch=function(){this.regexCheck=u(this,"regexCheck")};t.prototype.typeWatch=function(){this.type=u(this,"type")};t.prototype.render=function(){var t=this;var e=o(this.status,this.isValid(),this.required);return r(s,{class:Object.assign({},e)},r("dot-label",{label:this.label,required:this.required,name:this.name},r("input",{"aria-describedby":c(this.hint),class:d(this.status.dotValid),disabled:this.disabled||null,id:f(this.name),onBlur:function(){return t.blurHandler()},onInput:function(e){return t.setValue(e)},placeholder:this.placeholder,required:this.required||null,type:this.type,value:this.value})),l(this.hint),h(this.shouldShowErrorMessage(),this.getErrorMessage()))};t.prototype.validateProps=function(){this.regexCheckWatch();this.typeWatch()};t.prototype.isValid=function(){return!this.isValueRequired()&&this.isRegexValid()};t.prototype.isValueRequired=function(){return this.required&&!this.value};t.prototype.isRegexValid=function(){if(this.regexCheck&&this.value){var t=new RegExp(this.regexCheck);return t.test(this.value)}return true};t.prototype.shouldShowErrorMessage=function(){return this.getErrorMessage()&&!this.status.dotPristine};t.prototype.getErrorMessage=function(){return this.isRegexValid()?this.isValid()?"":this.requiredMessage:this.validationMessage};t.prototype.blurHandler=function(){if(!this.status.dotTouched){this.status=p(this.status,{dotTouched:true});this.emitStatusChange()}};t.prototype.setValue=function(t){this.value=t.target.value.toString();this.status=p(this.status,{dotTouched:true,dotPristine:false,dotValid:this.isValid()});this.emitValueChange();this.emitStatusChange()};t.prototype.emitStatusChange=function(){this.dotStatusChange.emit({name:this.name,status:this.status})};t.prototype.emitValueChange=function(){this.dotValueChange.emit({name:this.name,value:this.value})};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{regexCheck:["regexCheckWatch"],type:["typeWatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"input{outline:none}"},enumerable:true,configurable:true});return t}())}}}));