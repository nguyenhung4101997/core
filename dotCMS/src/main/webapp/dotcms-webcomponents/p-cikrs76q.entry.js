import{r as t,c as s,h as i,H as h,g as e}from"./p-d73782c7.js";import{h as a,c as r,a as o,f as l,b as n,k as d,e as c,u,i as g}from"./p-d445492c.js";const m=class{constructor(i){t(this,i),this.value="",this.name="",this.label="",this.hint="",this.placeholder="",this.required=!1,this.requiredMessage="This field is required",this.disabled=!1,this.threshold=0,this.debounce=300,this.data=null,this.dotValueChange=s(this,"dotValueChange",7),this.dotStatusChange=s(this,"dotStatusChange",7)}async reset(){this.value="",this.status=a(this.isValid()),this.emitChanges()}valueWatch(){this.value=r(this,"value","string")}componentWillLoad(){this.status=a(this.isValid()),this.validateProps(),this.emitStatusChange()}render(){const t=o(this.status,this.isValid(),this.required);return i(h,{class:Object.assign({},t)},i("dot-label",{label:this.label,required:this.required,name:this.name},i("div",{"aria-describedby":c(this.hint),tabIndex:this.hint?0:null,class:"dot-tags__container"},i("dot-autocomplete",{class:d(this.status.dotValid),data:this.data,debounce:this.debounce,disabled:this.isDisabled(),onEnter:this.onEnterHandler.bind(this),onLostFocus:this.blurHandler.bind(this),onSelection:this.onSelectHandler.bind(this),placeholder:this.placeholder||null,threshold:this.threshold}),i("div",{class:"dot-tags__chips"},this.getValues().map(t=>i("dot-chip",{disabled:this.isDisabled(),label:t,onRemove:this.removeTag.bind(this)}))))),n(this.hint),l(this.showErrorMessage(),this.getErrorMessage()))}addTag(t){const s=this.getValues();s.includes(t)||(s.push(t),this.value=s.join(","),this.updateStatus(),this.emitChanges())}blurHandler(){this.status.dotTouched||(this.status=u(this.status,{dotTouched:!0}),this.emitStatusChange())}emitChanges(){this.emitStatusChange(),this.emitValueChange()}emitStatusChange(){this.dotStatusChange.emit({name:this.name,status:this.status})}emitValueChange(){this.dotValueChange.emit({name:this.name,value:this.value})}getErrorMessage(){return this.isValid()?"":this.requiredMessage}getValues(){return g(this.value)?this.value.split(","):[]}isDisabled(){return this.disabled||null}isValid(){return!this.required||this.required&&!!this.value}onEnterHandler({detail:t=""}){t.split(",").forEach(t=>{this.addTag(t.trim())})}onSelectHandler({detail:t=""}){const s=t.replace(","," ").replace(/\s+/g," ");this.addTag(s)}removeTag(t){const s=this.getValues().filter(s=>s!==t.detail);this.value=s.join(","),this.updateStatus(),this.emitChanges()}showErrorMessage(){return this.getErrorMessage()&&!this.status.dotPristine}updateStatus(){this.status=u(this.status,{dotTouched:!0,dotPristine:!1,dotValid:this.isValid()})}validateProps(){this.valueWatch()}get el(){return e(this)}static get watchers(){return{value:["valueWatch"]}}static get style(){return"dot-tags .dot-tags__container{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;border:1px solid #d3d3d3}dot-tags .dot-tags__container dot-autocomplete{margin:.5rem 1rem .5rem .5rem}dot-tags .dot-tags__container .dot-tags__chips{margin:.5rem 1rem 0 0}dot-tags .dot-tags__container dot-chip{border:1px solid #ccc;display:inline-block;margin:0 .5rem .5rem 0;padding:.2rem}dot-tags button{border:0}"}};export{m as dot_tags};