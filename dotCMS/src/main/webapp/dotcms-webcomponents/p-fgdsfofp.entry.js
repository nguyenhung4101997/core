import{r as t,c as s,h as i,H as e,g as h}from"./p-276a5fbc.js";import{f as l,e as n,l as r,n as a,a as o}from"./p-609e05bd.js";import{D as u}from"./p-5290a061.js";const d=class{constructor(i){t(this,i),this.fileName="",this.previewUrl="",this.deleteLabel="Delete",this.delete=s(this,"delete",7)}render(){return this.fileName?i(e,null,this.getPreviewElement(),i("div",{class:"dot-file-preview__info"},i("span",{class:"dot-file-preview__name"},this.fileName),i("button",{type:"button",onClick:()=>this.clearFile()},this.deleteLabel))):null}clearFile(){this.delete.emit(),this.fileName=null,this.previewUrl=null}getPreviewElement(){return this.previewUrl?i("img",{alt:this.fileName,src:this.previewUrl}):i("div",{class:"dot-file-preview__extension"},i("span",null,this.getExtention()))}getExtention(){return this.fileName.substr(this.fileName.lastIndexOf("."))}get el(){return h(this)}static get style(){return"dot-binary-file-preview{display:-ms-flexbox;display:flex}dot-binary-file-preview .dot-file-preview__extension,dot-binary-file-preview img{width:100px;height:100px}dot-binary-file-preview .dot-file-preview__info{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-item-align:end;align-self:flex-end;padding-left:.5rem}dot-binary-file-preview .dot-file-preview__info span{margin-bottom:1rem;word-break:break-all}dot-binary-file-preview .dot-file-preview__info button{-ms-flex-item-align:start;align-self:flex-start;background-color:#d3d3d3;border:0;padding:.3rem 1.5rem;cursor:pointer}dot-binary-file-preview .dot-file-preview__extension{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:#d3d3d3}dot-binary-file-preview .dot-file-preview__extension span{overflow:hidden;padding:.5rem;text-overflow:ellipsis;font-size:2rem}"}},c=class{constructor(i){t(this,i),this.value=null,this.hint="",this.placeholder="",this.required=!1,this.disabled=!1,this.fileChange=s(this,"fileChange",7),this.lostFocus=s(this,"lostFocus",7)}render(){return i(e,null,i("input",{type:"text","aria-describedby":l(this.hint),class:n(this.isValid()),disabled:this.disabled,placeholder:this.placeholder,value:this.value,onBlur:()=>this.lostFocus.emit(),onKeyDown:t=>this.keyDownHandler(t),onPaste:t=>this.pasteHandler(t)}))}keyDownHandler(t){"Backspace"===t.key?this.handleBackspace():this.shouldPreventEvent(t)&&t.preventDefault()}shouldPreventEvent(t){return!(t.ctrlKey||t.metaKey)}handleBackspace(){this.value="",this.emitFile(null,this.required?u.REQUIRED:null)}pasteHandler(t){t.preventDefault(),this.value="";const s=t.clipboardData;s.items.length&&(this.isPastingFile(s)?this.handleFilePaste(s.items):this.handleURLPaste(s.items[0]))}handleFilePaste(t){const s=t[0],i=t[1].getAsFile();s.getAsString(t=>{r(t,this.accept)?(this.value=t,this.emitFile(i)):this.emitFile(null,u.INVALID)})}handleURLPaste(t){t.getAsString(t=>{a(t)?(this.value=t,this.emitFile(t)):this.emitFile(null,u.URLINVALID)})}isPastingFile(t){return!!t.files.length}isValid(){return!(this.required&&this.value)}emitFile(t,s){this.fileChange.emit({file:t,errorType:s})}get el(){return h(this)}static get style(){return""}},p=class{constructor(i){t(this,i),this.name="",this.required=!1,this.disabled=!1,this.buttonLabel="",this.fileChange=s(this,"fileChange",7)}componentDidLoad(){this.fileInput=this.el.querySelector("dot-label input")}render(){return i(e,null,i("input",{accept:this.accept,disabled:this.disabled,id:o(this.name),onChange:t=>this.fileChangeHandler(t),required:this.required||null,type:"file"}),i("button",{type:"button",disabled:this.disabled,onClick:()=>{this.fileInput.click()}},this.buttonLabel))}fileChangeHandler(t){const s=this.fileInput.files[0];r(s.name,this.accept)?this.emitFile(s):(t.preventDefault(),this.emitFile(null,u.INVALID))}emitFile(t,s){this.fileChange.emit({file:t,errorType:s})}get el(){return h(this)}static get style(){return""}};export{d as dot_binary_file_preview,c as dot_binary_text_field,p as dot_binary_upload_button};