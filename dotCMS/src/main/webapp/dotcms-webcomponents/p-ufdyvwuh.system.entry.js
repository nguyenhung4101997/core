System.register(["./p-156fd31a.system.js","./p-6667b175.system.js","./p-28510f12.system.js"],(function(t){"use strict";var e,i,s,a,n,u,o,r,h,l,d,c,p,f,m,g,b;return{setters:[function(t){e=t.r;i=t.c;s=t.h;a=t.H;n=t.g},function(t){u=t.h;o=t.c;r=t.j;h=t.a;l=t.f;d=t.b;c=t.e;p=t.k;f=t.l;m=t.u},function(t){g=t.g;b=t.s}],execute:function(){var v=t("dot_select",function(){function t(t){e(this,t);this.value="";this.name="";this.label="";this.hint="";this.options="";this.required=false;this.requiredMessage="This field is required";this.disabled=false;this._dotTouched=false;this._dotPristine=true;this.dotValueChange=i(this,"dotValueChange",7);this.dotStatusChange=i(this,"dotStatusChange",7)}t.prototype.componentWillLoad=function(){this.validateProps();this.emitInitialValue();this.status=u(this.isValid());this.emitStatusChange()};t.prototype.optionsWatch=function(){var t=o(this,"options");this._options=r(t)};t.prototype.reset=function(){this.value="";this.status=u(this.isValid());this.emitInitialValue();this.emitStatusChange()};t.prototype.componentDidLoad=function(){var t=this;var e=this.el.querySelector("select");setTimeout((function(){var i=g(Array.from(t.el.attributes),[]);b(e,i)}),0)};t.prototype.render=function(){var t=this;var e=h(this.status,this.isValid(),this.required);return s(a,{class:Object.assign({},e)},s("dot-label",{label:this.label,required:this.required,name:this.name},s("select",{"aria-describedby":c(this.hint),class:p(this.status.dotValid),id:f(this.name),disabled:this.shouldBeDisabled(),onChange:function(e){return t.setValue(e)}},this._options.map((function(e){return s("option",{selected:t.value===e.value?true:null,value:e.value},e.label)})))),d(this.hint),l(!this.isValid(),this.requiredMessage))};t.prototype.validateProps=function(){this.optionsWatch()};t.prototype.shouldBeDisabled=function(){return this.disabled?true:null};t.prototype.setValue=function(t){this.value=t.target.value;this.status=m(this.status,{dotTouched:true,dotPristine:false,dotValid:this.isValid()});this.emitValueChange();this.emitStatusChange()};t.prototype.emitInitialValue=function(){if(!this.value){this.value=this._options.length?this._options[0].value:"";this.emitValueChange()}};t.prototype.emitStatusChange=function(){this.dotStatusChange.emit({name:this.name,status:this.status})};t.prototype.isValid=function(){return this.required?!!this.value:true};t.prototype.emitValueChange=function(){this.dotValueChange.emit({name:this.name,value:this.value})};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{options:["optionsWatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return""},enumerable:true,configurable:true});return t}())}}}));