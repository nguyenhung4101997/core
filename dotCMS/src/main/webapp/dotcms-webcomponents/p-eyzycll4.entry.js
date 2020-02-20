import{r as t,c as s,h as i,H as e,g as h}from"./p-276a5fbc.js";import{c as a,m as l,h as n,d as r,f as d,b as u}from"./p-609e05bd.js";import{D as m,g as o,s as c}from"./p-f3ceb3cf.js";const p=class{constructor(i){t(this,i),this.value="",this.name="",this.label="",this.hint="",this.required=!1,this.requiredMessage="This field is required",this.validationMessage="The field doesn't comply with the specified format",this.disabled=!1,this.min="",this.max="",this.step="1,1",this.dateLabel="Date",this.timeLabel="Time",this._step={date:null,time:null},this._status={date:null,time:null},this.dotValueChange=s(this,"dotValueChange",7),this.dotStatusChange=s(this,"dotStatusChange",7)}async reset(){this._status.date=null,this._status.time=null,this.el.querySelectorAll("dot-input-calendar").forEach(t=>{t.reset()}),this.dotValueChange.emit({name:this.name,value:""})}componentWillLoad(){this.validateProps()}valueWatch(){this.value=a(this,"value","dateTime"),this._value=l(this.value)}minWatch(){this.min=a(this,"min","dateTime"),this._minDateTime=l(this.min)}maxWatch(){this.max=a(this,"max","dateTime"),this._maxDateTime=l(this.max)}stepWatch(){this.step=a(this,"step")||"1,1",[this._step.date,this._step.time]=this.step.split(",")}emitValueChange(t){const s=t.detail;t.stopImmediatePropagation(),this.formatValue(s),this.isValueComplete()&&(this.value=this.getValue(),this.dotValueChange.emit({name:this.name,value:this.value}))}emitStatusChange(t){const s=t.detail;let i;t.stopImmediatePropagation(),this.setStatus(s),this.setErrorMessageElement(s),this.isStatusComplete()&&(i=this.statusHandler(),this.classNames=n(i,i.dotValid,this.required),this.dotStatusChange.emit({name:this.name,status:i}))}componentDidLoad(){this.setDotAttributes()}render(){return i(e,{class:Object.assign({},this.classNames)},i("dot-label",{label:this.label,required:this.required,name:this.name},i("div",{class:"dot-date-time__body","aria-describedby":d(this.hint),tabIndex:this.hint?0:null},i("label",null,this.dateLabel,i("dot-input-calendar",{disabled:this.disabled,type:"date",name:this.name+"-date",value:this._value.date,required:this.required,min:this._minDateTime.date,max:this._maxDateTime.date,step:this._step.date})),i("label",null,this.timeLabel,i("dot-input-calendar",{disabled:this.disabled,type:"time",name:this.name+"-time",value:this._value.time,required:this.required,min:this._minDateTime.time,max:this._maxDateTime.time,step:this._step.time})))),r(this.hint),this.errorMessageElement)}setDotAttributes(){const t=this.el.querySelector('input[type="date"]'),s=this.el.querySelector('input[type="time"]'),i=["dottype","dotstep","dotmin","dotmax","dotvalue"];setTimeout(()=>{let e=Array.from(this.el.attributes);e.forEach(({name:t,value:s})=>{const i=t.replace(m,"");this[i]&&(this[i]=s)}),e=o(Array.from(this.el.attributes),i),c(t,e),c(s,e)},0)}validateProps(){this.minWatch(),this.maxWatch(),this.stepWatch(),this.valueWatch()}statusHandler(){return{dotTouched:this._status.date.dotTouched||this._status.time.dotTouched,dotValid:this._status.date.dotValid&&this._status.time.dotValid,dotPristine:this._status.date.dotPristine&&this._status.time.dotPristine}}formatValue(t){t.name.indexOf("-date")>=0?this._value.date=t.value:this._value.time=t.value}getValue(){return this._value.date&&this._value.time?`${this._value.date} ${this._value.time}`:""}setStatus(t){t.name.indexOf("-date")>=0?this._status.date=t.status:this._status.time=t.status}isValueComplete(){return!!this._value.time&&!!this._value.date}isStatusComplete(){return this._status.date&&this._status.time}isValid(){return!this.isStatusComplete()||!!this.isStatusInRange()}isStatusInRange(){return this._status.time.isValidRange&&this._status.date.isValidRange}setErrorMessageElement(t){this.errorMessageElement=this.isStatusComplete()?u(!this.statusHandler().dotValid&&!this.statusHandler().dotPristine,this.getErrorMessage()):u(!t.status.dotPristine,this.getErrorMessage())}getErrorMessage(){return this.getValue()?this.isValid()?"":this.validationMessage:this.requiredMessage}get el(){return h(this)}static get watchers(){return{value:["valueWatch"],min:["minWatch"],max:["maxWatch"],step:["stepWatch"]}}static get style(){return".dot-date-time__body,.dot-date-time__body label{display:-ms-flexbox;display:flex}.dot-date-time__body label{-ms-flex-align:center;align-items:center;-ms-flex-positive:1;flex-grow:1;margin-right:1rem}.dot-date-time__body label:last-child{margin-right:0}.dot-date-time__body label dot-input-calendar{-ms-flex-positive:1;flex-grow:1;margin-left:.5rem}"}};export{p as dot_date_time};