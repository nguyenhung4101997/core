var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,s=arguments.length;e<s;e++)t+=arguments[e].length;for(var i=Array(t),a=0,e=0;e<s;e++)for(var r=arguments[e],n=0,u=r.length;n<u;n++,a++)i[a]=r[n];return i};System.register(["./p-79c65723.system.js","./p-a3fd3d11.system.js"],(function(t){"use strict";var e,s,i,a,r,n,u,h,o,l,d,c,f,p;return{setters:[function(t){e=t.r;s=t.c;i=t.h;a=t.H;r=t.g},function(t){n=t.c;u=t.k;h=t.g;o=t.h;l=t.b;d=t.d;c=t.f;f=t.u;p=t.i}],execute:function(){var m=function(t){var e=t.label,s=t.value;return{key:e,value:s}};var g=t("dot_key_value",function(){function t(t){e(this,t);this.value="";this.name="";this.label="";this.hint="";this.required=false;this.requiredMessage="This field is required";this.disabled=false;this.items=[];this.dotValueChange=s(this,"dotValueChange",7);this.dotStatusChange=s(this,"dotStatusChange",7)}t.prototype.valueWatch=function(){this.value=n(this,"value","string");this.items=u(this.value).map(m)};t.prototype.reset=function(){this.items=[];this.value="";this.status=h(this.isValid());this.emitChanges()};t.prototype.deleteItemHandler=function(t){t.stopImmediatePropagation();this.items=this.items.filter((function(e,s){return s!==t.detail}));this.refreshStatus();this.emitChanges()};t.prototype.addItemHandler=function(t){var e=t.detail;this.items=__spreadArrays(this.items,[e]);this.refreshStatus();this.emitChanges()};t.prototype.componentWillLoad=function(){this.validateProps();this.setOriginalStatus();this.emitStatusChange()};t.prototype.render=function(){var t=o(this.status,this.isValid(),this.required);return i(a,{class:Object.assign({},t)},i("dot-label",{"aria-describedby":c(this.hint),tabIndex:this.hint?0:null,label:this.label,required:this.required,name:this.name},i("key-value-form",{onLostFocus:this.blurHandler.bind(this),"add-button-label":this.formAddButtonLabel,disabled:this.isDisabled(),"key-label":this.formKeyLabel,"key-placeholder":this.formKeyPlaceholder,"value-label":this.formValueLabel,"value-placeholder":this.formValuePlaceholder}),i("key-value-table",{onClick:function(t){t.preventDefault()},"button-label":this.listDeleteLabel,disabled:this.isDisabled(),items:this.items})),d(this.hint),l(this.showErrorMessage(),this.getErrorMessage()))};t.prototype.isDisabled=function(){return this.disabled||null};t.prototype.blurHandler=function(){if(!this.status.dotTouched){this.status=f(this.status,{dotTouched:true});this.emitStatusChange()}};t.prototype.validateProps=function(){this.valueWatch()};t.prototype.setOriginalStatus=function(){this.status=h(this.isValid())};t.prototype.isValid=function(){return!(this.required&&!this.items.length)};t.prototype.showErrorMessage=function(){return this.getErrorMessage()&&!this.status.dotPristine};t.prototype.getErrorMessage=function(){return this.isValid()?"":this.requiredMessage};t.prototype.refreshStatus=function(){this.status=f(this.status,{dotTouched:true,dotPristine:false,dotValid:this.isValid()})};t.prototype.emitStatusChange=function(){this.dotStatusChange.emit({name:this.name,status:this.status})};t.prototype.emitValueChange=function(){var t=p(this.items);this.dotValueChange.emit({name:this.name,value:t})};t.prototype.emitChanges=function(){this.emitStatusChange();this.emitValueChange()};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{value:["valueWatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return""},enumerable:true,configurable:true});return t}())}}}));