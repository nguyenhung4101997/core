import{r as t,c as s,h as i,H as h,g as e}from"./p-d73782c7.js";import{h as a,c as r,a as o,f as d,b as n,u as l,m as c}from"./p-d445492c.js";import{g as u,s as p}from"./p-552e854f.js";import{D as g}from"./p-5290a061.js";const m=class{constructor(i){t(this,i),this.name="",this.label="",this.placeholder="Drop or paste a file or url",this.hint="",this.required=!1,this.requiredMessage="This field is required",this.validationMessage="The field doesn't comply with the specified format",this.URLValidationMessage="The specified URL is not valid",this.disabled=!1,this.accept="",this.maxFileLength="",this.buttonLabel="Browse",this.errorMessage="",this.previewImageName="",this.previewImageUrl="",this.file=null,this.allowedFileTypes=[],this.errorMessageMap=new Map,this.dotValueChange=s(this,"dotValueChange",7),this.dotStatusChange=s(this,"dotStatusChange",7)}async reset(){this.file="",this.binaryTextField.value="",this.errorMessage="",this.clearPreviewData(),this.status=a(this.isValid()),this.emitStatusChange(),this.emitValueChange()}async clearValue(){this.binaryTextField.value="",this.errorType=this.required?g.REQUIRED:null,this.setValue(""),this.clearPreviewData()}componentWillLoad(){this.setErrorMessageMap(),this.validateProps(),this.status=a(this.isValid()),this.emitStatusChange()}componentDidLoad(){this.binaryTextField=this.el.querySelector("dot-binary-text-field");const t=["dottype"],s=this.el.querySelector('input[type="file"]');setTimeout(()=>{const i=u(Array.from(this.el.attributes),t);p(s,i)},0)}requiredMessageWatch(){this.errorMessageMap.set(g.REQUIRED,this.requiredMessage)}validationMessageWatch(){this.errorMessageMap.set(g.INVALID,this.validationMessage)}URLValidationMessageWatch(){this.errorMessageMap.set(g.URLINVALID,this.URLValidationMessage)}optionsWatch(){this.accept=r(this,"accept"),this.allowedFileTypes=this.accept?this.accept.split(","):[],this.allowedFileTypes=this.allowedFileTypes.map(t=>t.trim())}fileChangeHandler(t){t.stopImmediatePropagation();const s=t.detail;this.errorType=s.errorType,this.setValue(s.file),this.isBinaryUploadButtonEvent(t.target)&&s.file&&(this.binaryTextField.value=s.file.name)}HandleDragover(t){t.preventDefault(),this.disabled||(this.el.classList.add("dot-dragover"),this.el.classList.remove("dot-dropped"))}HandleDragleave(t){t.preventDefault(),this.el.classList.remove("dot-dragover"),this.el.classList.remove("dot-dropped")}HandleDrop(t){t.preventDefault(),this.el.classList.remove("dot-dragover"),this.disabled||this.previewImageName||(this.el.classList.add("dot-dropped"),this.errorType=null,this.handleDroppedFile(t.dataTransfer.files[0]))}handleDelete(t){t.preventDefault(),this.setValue(""),this.clearPreviewData()}render(){const t=o(this.status,this.isValid(),this.required);return i(h,{class:Object.assign({},t)},i("dot-label",{label:this.label,required:this.required,name:this.name,tabindex:"0"},this.previewImageName?i("dot-binary-file-preview",{onClick:t=>{t.preventDefault()},fileName:this.previewImageName,previewUrl:this.previewImageUrl}):i("div",{class:"dot-binary__container"},i("dot-binary-text-field",{placeholder:this.placeholder,required:this.required,disabled:this.disabled,accept:this.allowedFileTypes.join(","),hint:this.hint,onLostFocus:this.lostFocusEventHandler.bind(this)}),i("dot-binary-upload-button",{name:this.name,accept:this.allowedFileTypes.join(","),disabled:this.disabled,required:this.required,buttonLabel:this.buttonLabel}))),n(this.hint),d(this.shouldShowErrorMessage(),this.getErrorMessage()),i("dot-error-message",null,this.errorMessage))}lostFocusEventHandler(){this.status.dotTouched||(this.status=l(this.status,{dotTouched:!0}),this.emitStatusChange())}isBinaryUploadButtonEvent(t){return"dot-binary-upload-button"===t.localName}validateProps(){this.optionsWatch(),this.setPlaceHolder()}shouldShowErrorMessage(){return this.getErrorMessage()&&!this.status.dotPristine}getErrorMessage(){return this.errorMessageMap.get(this.errorType)}isValid(){return!(this.required&&!this.file)}setErrorMessageMap(){this.requiredMessageWatch(),this.validationMessageWatch(),this.URLValidationMessageWatch()}setValue(t){this.file=t,this.status=l(this.status,{dotTouched:!0,dotPristine:!1,dotValid:this.isValid()}),this.binaryTextField.value=null===t?"":this.binaryTextField.value,this.emitValueChange(),this.emitStatusChange()}emitStatusChange(){this.dotStatusChange.emit({name:this.name,status:this.status})}emitValueChange(){this.dotValueChange.emit({name:this.name,value:this.file})}handleDroppedFile(t){c(t.name,this.allowedFileTypes.join(","))?(this.setValue(t),this.binaryTextField.value=t.name):(this.errorType=g.INVALID,this.setValue(null))}setPlaceHolder(){this.placeholder=this.isWindowsOS()?"Drop a file or url":this.placeholder}isWindowsOS(){return window.navigator.platform.includes("Win")}clearPreviewData(){this.previewImageUrl="",this.previewImageName=""}get el(){return e(this)}static get watchers(){return{requiredMessage:["requiredMessageWatch"],validationMessage:["validationMessageWatch"],URLValidationMessage:["URLValidationMessageWatch"],accept:["optionsWatch"]}}static get style(){return"dot-binary-file.dot-dragover input{background-color:#f1f1f1}dot-binary-file .dot-binary__container button,dot-binary-file .dot-binary__container input{display:-ms-inline-flexbox;display:inline-flex;border:1px solid #d3d3d3;padding:15px;border-radius:0}dot-binary-file .dot-binary__container input[type=file]{display:none}dot-binary-file .dot-binary__container input{min-width:245px;text-overflow:ellipsis}dot-binary-file .dot-binary__container button{background-color:#d3d3d3}"}};export{m as dot_binary_file};