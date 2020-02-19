import{r as t,h as e,H as i,c,g as o}from"./p-d624fdf1.js";import{_ as n,a as r,L as s,b as a,q as d,p as h,h as l,r as m,c as u,d as b,e as p,A as f,P as g,f as k}from"./p-2bd4484f.js";const _=class{constructor(e){t(this,e),this.bgColor=null,this.color=null,this.size=null}render(){return e(i,{style:{"--bg-color":this.bgColor,"--color":this.color,"--font-size":this.size}},e("slot",null))}static get style(){return":host{--bg-color:var(--color-sec);--color:var(--color-white);--font-size:12px;background-color:var(--bg-color);border-radius:var(--border-radius);color:var(--color);font-size:var(--font-size);padding:.25em .5em}"}},x=class{constructor(e){t(this,e)}render(){return e("slot",null)}static get style(){return":host{background-color:var(--color-white);border-radius:var(--border-radius);-webkit-box-shadow:var(--md-shadow-1);box-shadow:var(--md-shadow-1);display:block}"}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var v=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),y={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},E={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},w={ANIM_END_LATCH_MS:250},T=function(t){function e(i){var c=t.call(this,r({},e.defaultAdapter,i))||this;return c.currentCheckState_=E.TRANSITION_STATE_INIT,c.currentAnimationClass_="",c.animEndLatchTimer_=0,c.enableAnimationEndHandler_=!1,c}return n(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return y},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return w},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter_.addClass(y.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},e.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(y.DISABLED):this.adapter_.removeClass(y.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout((function(){t.adapter_.removeClass(t.currentAnimationClass_),t.enableAnimationEndHandler_=!1}),w.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState_()},e.prototype.transitionCheckState_=function(){if(this.adapter_.hasNativeControl()){var t=this.currentCheckState_,e=this.determineCheckState_();if(t!==e){this.updateAriaChecked_();var i=y.SELECTED;e===E.TRANSITION_STATE_UNCHECKED?this.adapter_.removeClass(i):this.adapter_.addClass(i),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(t,e),this.currentCheckState_=e,this.adapter_.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},e.prototype.determineCheckState_=function(){var t=E.TRANSITION_STATE_INDETERMINATE,e=E.TRANSITION_STATE_CHECKED,i=E.TRANSITION_STATE_UNCHECKED;return this.adapter_.isIndeterminate()?t:this.adapter_.isChecked()?e:i},e.prototype.getTransitionAnimationClass_=function(t,i){var c=E.TRANSITION_STATE_CHECKED,o=E.TRANSITION_STATE_UNCHECKED,n=e.cssClasses,r=n.ANIM_UNCHECKED_CHECKED,s=n.ANIM_UNCHECKED_INDETERMINATE,a=n.ANIM_CHECKED_UNCHECKED,d=n.ANIM_CHECKED_INDETERMINATE,h=n.ANIM_INDETERMINATE_CHECKED,l=n.ANIM_INDETERMINATE_UNCHECKED;switch(t){case E.TRANSITION_STATE_INIT:return i===o?"":i===c?h:l;case o:return i===c?r:s;case c:return i===o?a:d;default:return i===c?h:l}},e.prototype.updateAriaChecked_=function(){this.adapter_.isIndeterminate()?this.adapter_.setNativeControlAttr(E.ARIA_CHECKED_ATTR,E.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(E.ARIA_CHECKED_ATTR)},e}(v);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const A=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,i)=>e.constructor._observers.set(i,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)})}}e.constructor._observers.set(i,t)};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function I(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const C=t=>t.nodeType===Node.ELEMENT_NODE;function O(t,e){for(const i of t.assignedNodes({flatten:!0}))if(C(i)){const t=i;if(I(t,e))return t}return null}function S(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}const R=()=>{};document.addEventListener("x",R,{get passive(){return!1}}),document.removeEventListener("x",R);const N=(t=window.document)=>{let e=t.activeElement;const i=[];if(!e)return i;for(;e&&(i.push(e),e.shadowRoot);)e=e.shadowRoot.activeElement;return i},L=t=>{const e=N();if(!e.length)return!1;const i=e[e.length-1],c=new Event("check-if-focused",{bubbles:!0,composed:!0});let o=[];const n=t=>{o=t.composedPath()};return document.body.addEventListener("check-if-focused",n),i.dispatchEvent(c),document.body.removeEventListener("check-if-focused",n),-1!==o.indexOf(t)};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class D extends s{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class z extends D{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}}class M extends z{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="",this.mdcFoundationClass=T}get ripple(){return this.mdcRoot.ripple}createAdapter(){return Object.assign(Object.assign({},S(this.mdcRoot)),{forceLayout:()=>{},isAttachedToDOM:()=>this.isConnected,isIndeterminate:()=>this.indeterminate,isChecked:()=>this.checked,hasNativeControl:()=>Boolean(this.formElement),setNativeControlDisabled:t=>{this.formElement.disabled=t},setNativeControlAttr:(t,e)=>{this.formElement.setAttribute(t,e)},removeNativeControlAttr:t=>{this.formElement.removeAttribute(t)}})}render(){return l`
      <div class="mdc-checkbox"
           @animationend="${this._animationEndHandler}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              @change="${this._changeHandler}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}">
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        <div class="mdc-checkbox__ripple"></div>
      </div>`}firstUpdated(){super.firstUpdated(),this.mdcRoot.ripple=m({surfaceNode:this.mdcRoot,interactionNode:this.formElement})}_changeHandler(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate,this.mdcFoundation.handleChange()}_animationEndHandler(){this.mdcFoundation.handleAnimationEnd()}}a([d(".mdc-checkbox")],M.prototype,"mdcRoot",void 0),a([d("input")],M.prototype,"formElement",void 0),a([h({type:Boolean})],M.prototype,"checked",void 0),a([h({type:Boolean})],M.prototype,"indeterminate",void 0),a([h({type:Boolean}),A((function(t){this.mdcFoundation.setDisabled(t)}))],M.prototype,"disabled",void 0),a([h({type:String})],M.prototype,"value",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const F=u`.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before{opacity:.04}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-8A000000secondary00000000secondary{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-8A000000secondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000secondary00000000secondary}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000secondary00000000secondary}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.38);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.38)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-checkbox{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox .mdc-checkbox__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before{opacity:.04}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}:host{outline:none;display:inline-block}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{background-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background---mdc-checkbox-unchecked-colorsecondary00000000secondary{0%{border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background---mdc-checkbox-unchecked-colorsecondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background---mdc-checkbox-unchecked-colorsecondary00000000secondary}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background---mdc-checkbox-unchecked-colorsecondary00000000secondary}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-mark-color, #fff)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-mark-color, #fff)}`;let B=class extends M{};B.styles=F,B=a([b("mwc-checkbox")],B);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var H=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),$={ROOT:"mdc-form-field"},j={LABEL_SELECTOR:".mdc-form-field > label"},K=function(t){function e(i){var c=t.call(this,r({},e.defaultAdapter,i))||this;return c.clickHandler_=function(){return c.handleClick_()},c}return n(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return $},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return j},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},e.prototype.handleClick_=function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame((function(){return t.adapter_.deactivateInputRipple()}))},e}(H);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const U=new WeakMap,P=p(t=>e=>{if(!(e instanceof f)||e instanceof g||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:c}=i;U.has(e)||(c.className=i.strings.join(" "));const{classList:o}=c,n=U.get(e);for(const r in n)r in t||o.remove(r);for(const r in t){const e=t[r];n&&e===n[r]||o[e?"add":"remove"](r)}U.set(e,t)});class X extends D{constructor(){super(...arguments),this.alignEnd=!1,this.label="",this.mdcFoundationClass=K}createAdapter(){return{registerInteractionHandler:(t,e)=>{this.labelEl.addEventListener(t,e)},deregisterInteractionHandler:(t,e)=>{this.labelEl.removeEventListener(t,e)},activateInputRipple:()=>{const t=this.input;t instanceof z&&t.ripple&&t.ripple.activate()},deactivateInputRipple:()=>{const t=this.input;t instanceof z&&t.ripple&&t.ripple.deactivate()}}}get input(){return O(this.slotEl,"*")}render(){return l`
      <div class="mdc-form-field ${P({"mdc-form-field--align-end":this.alignEnd})}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}_labelClick(){const t=this.input;t&&(t.focus(),t.click())}}a([h({type:Boolean})],X.prototype,"alignEnd",void 0),a([h({type:String}),A((async function(t){const e=this.input;e&&("input"===e.localName?e.setAttribute("aria-label",t):e instanceof z&&(await e.updateComplete,e.setAriaLabel(t)))}))],X.prototype,"label",void 0),a([d(".mdc-form-field")],X.prototype,"mdcRoot",void 0),a([d("slot")],X.prototype,"slotEl",void 0),a([d("label")],X.prototype,"labelEl",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const G=u`.mdc-form-field{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field{align-items:center}::slotted(*){font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch)[dir=rtl]{margin-left:10px}`;let q=class extends X{};q.styles=G,q=a([b("mwc-formfield")],q);const V=class{constructor(e){t(this,e),this.checkboxChange=c(this,"checkboxChange",7)}componentDidLoad(){this.checkbox=this.el.shadowRoot.querySelector("mwc-checkbox").shadowRoot.querySelector("input")}render(){var t,i,c;const o=this.item.data,n=null===(t=o)||void 0===t?void 0:t.title;return e("dot-card",null,e("dot-contentlet-thumbnail",{contentlet:o,width:"250",height:"250",alt:n,iconSize:"64px"}),e("header",null,e("div",{class:"main"},e("mwc-checkbox",{checked:this.checked,onClick:t=>{t.stopPropagation()},onChange:()=>{this.checked=this.checkbox.checked,this.checkboxChange.emit({data:o,checked:this.checkbox.checked})}}),e("label",null,n)),e("div",{class:"extra"},e("div",{class:"state"},e("dot-badge",null,"1"===o.languageId?"US_en":"ES_en"),e("dot-contentlet-lock-icon",{contentlet:o,style:{color:"true"===o.locked?"#EC4B41":""}}),e("dot-contentlet-state-icon",{contentlet:o,size:"16px"})),(null===(c=null===(i=this.item)||void 0===i?void 0:i.actions)||void 0===c?void 0:c.length)?e("dot-context-menu",{onClick:t=>t.stopPropagation(),options:this.item.actions}):null)))}get el(){return o(this)}static get style(){return":host{--mdc-theme-primary:var(--color-main);--mdc-theme-secondary:var(--color-sec);display:block}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}dot-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 auto;flex:1 1 auto;height:100%;position:relative;-webkit-transition:-webkit-box-shadow var(--basic-speed) ease;transition:-webkit-box-shadow var(--basic-speed) ease;transition:box-shadow var(--basic-speed) ease;transition:box-shadow var(--basic-speed) ease,-webkit-box-shadow var(--basic-speed) ease;width:100%}dot-card:hover{-webkit-box-shadow:var(--md-shadow-2);box-shadow:var(--md-shadow-2)}dot-contentlet-thumbnail{-ms-flex-align:center;align-items:center;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;width:100%}dot-contentlet-thumbnail,header{display:-ms-flexbox;display:flex}header{padding:var(--basic-padding);-ms-flex-direction:column;flex-direction:column}label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.extra,.main,.state{-ms-flex-align:center;align-items:center}.extra,.main,.state{display:-ms-flexbox;display:flex}.extra{-ms-flex-pack:justify;justify-content:space-between;margin-top:-.5rem;padding-left:40px}.state>*{margin-right:var(--basic-padding)}.state>:last-child{margin-right:0}"}},W=u`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let Y=class extends s{render(){return l`<slot></slot>`}};Y.styles=W,Y=a([b("mwc-icon")],Y);const Z=class{constructor(e){t(this,e),this.icon="",this.size="",this.legacyIconMap={page:"insert_drive_file",gear:"settings",content:"event_note",form:"format_list_bulleted",persona:"person",ukn:"insert_drive_file",folder:"folder",asf:"videocam",avi:"videocam",mov:"videocam",mp4:"videocam",mpg:"videocam",ogg:"videocam",ogv:"videocam",rm:"videocam",vob:"videocam",csv:"insert_drive_file",numbers:"insert_drive_file",wks:"insert_drive_file",xls:"insert_drive_file",xlsx:"insert_drive_file",bmp:"image",image:"image",jpeg:"image",jpg:"image",pct:"image",png:"image",gif:"image",webp:"image",svg:"image",pdf:"insert_drive_file",keynote:"insert_drive_file",ppt:"insert_drive_file",pptx:"insert_drive_file",doc:"insert_drive_file",docx:"insert_drive_file",aac:"audiotrack",aif:"audiotrack",iff:"audiotrack",m3u:"audiotrack",mid:"audiotrack",mp3:"audiotrack",mpa:"audiotrack",ra:"audiotrack",wav:"audiotrack",wma:"audiotrack",vtl:"code",css:"code",js:"code",html:"code",scss:"code"}}render(){return e("mwc-icon",{style:{"--mdc-icon-size":this.size}},this.getIconName())}getIconName(){const t=this.icon.replace("Icon","");return this.legacyIconMap[t]||this.legacyIconMap.ukn}static get style(){return""}},J=class{constructor(e){t(this,e),this.size="16px"}render(){return e(i,{style:{"--mdc-icon-size":this.size}},e("mwc-icon",null,"true"===this.contentlet.locked?"locked":"lock_open"))}static get style(){return":host{width:var(--mdc-icon-size);height:var(--mdc-icon-size)}"}},Q=class{constructor(e){t(this,e),this.size="16px"}render(){const t=this.getType(this.contentlet);return e(i,{style:{"--size":this.size}},e("div",{class:t}))}getType({live:t,working:e,deleted:i}){return"true"===i?"archived":"true"===t?"true"===e?"drafted":"published":"draft"}static get style(){return":host{display:-ms-flexbox;display:flex;--sucess-color:#27b970}div{border-radius:50%;border:2px solid;-webkit-box-sizing:border-box;box-sizing:border-box;height:var(--size);width:var(--size)}.drafted:after,.published{background-color:var(--sucess-color)}.archived,.drafted{position:relative}.archived:before,.drafted:before{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:currentColor;content:\"\";height:2px;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:calc(var(--size) - 2px);z-index:1}.drafted,.drafted:after{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.drafted:after{border-bottom-left-radius:var(--size);border-top-left-radius:var(--size);bottom:25%;content:\"\";height:100%;left:25%;position:absolute;width:50%}"}},tt=class{constructor(e){t(this,e),this.height="",this.width="",this.alt="",this.iconSize=""}componentWillLoad(){var t;this.renderImage="true"===(null===(t=this.contentlet)||void 0===t?void 0:t.hasTitleImage)}render(){var t;return e(i,null,this.renderImage?e("div",{class:"thumbnail",style:{"background-image":`url(${this.getImageURL()})`}},e("img",{src:this.getImageURL(),alt:this.alt,"aria-label":this.alt,onError:()=>{this.switchToIcon()}})):e("dot-contentlet-icon",{icon:null===(t=this.contentlet)||void 0===t?void 0:t.__icon__,size:this.iconSize,"aria-label":this.alt}))}getImageURL(){return`http://localhost:8080/dA/${this.contentlet.inode}/${this.width}w/20q`}switchToIcon(){this.renderImage=!1}static get style(){return":host{-ms-flex-align:center;-ms-flex:1;flex:1}:host,dot-contentlet-icon{display:-ms-flexbox;display:flex;align-items:center}dot-contentlet-icon{-ms-flex-align:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.thumbnail{position:relative;background-size:cover;background-position:50%;background-repeat:no-repeat;width:100%;height:100%}.thumbnail img{width:0;height:0;position:absolute}"}},et=p(t=>e=>{void 0===t&&e instanceof f?t!==e.value&&e.committer.element.removeAttribute(e.committer.name):e.setValue(t)});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var it={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    .mdc-list-item button:not(:disabled),\n    .mdc-list-item a\n  ",FOCUSABLE_CHILD_ELEMENTS:'\n    .mdc-list-item button:not(:disabled),\n    .mdc-list-item a,\n    .mdc-list-item input[type="radio"]:not(:disabled),\n    .mdc-list-item input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},ct={UNSET_INDEX:-1};
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
const ot=(t,e)=>{const i=Array.from(t),c=Array.from(e),o={added:[],removed:[]},n=i.sort(),r=c.sort();let s=0,a=0;for(;s<n.length||a<r.length;){const t=n[s],e=r[a];t!==e?void 0!==t&&(void 0===e||t<e)?(o.removed.push(t),s++):void 0!==e&&(void 0===t||e<t)&&(o.added.push(e),a++):(s++,a++)}return o},nt=["input","button","textarea","select"];function rt(t){return t instanceof Set}const st=t=>{const e=t===ct.UNSET_INDEX?new Set:t;return rt(e)?new Set(e):new Set([e])};class at extends H{constructor(t){super(Object.assign(Object.assign({},at.defaultAdapter),t)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=ct.UNSET_INDEX,this.focusedItemIndex_=ct.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return it}static get numbers(){return ct}static get defaultAdapter(){return{focusItemAtIndex:()=>void 0,getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>void 0,notifySelected:()=>void 0,getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>void 0,getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>void 0,setActivatedStateForElementIndex:()=>void 0,setTabIndexForElementIndex:()=>void 0,setAttributeForElementIndex:()=>void 0,getAttributeForElementIndex:()=>null}}setWrapFocus(t){this.wrapFocus_=t}setMulti(t){this.isMulti_=t}setVerticalOrientation(t){this.isVertical_=t}setUseActivatedClass(t){this.useActivatedClass_=t}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(t){this.isIndexValid_(t)&&(this.isMulti_?this.setMultiSelectionAtIndex_(st(t)):this.setSingleSelectionAtIndex_(t))}handleFocusIn(t,e){e>=0&&this.adapter_.setTabIndexForElementIndex(e,0)}handleFocusOut(t,e){e>=0&&this.adapter_.setTabIndexForElementIndex(e,-1),setTimeout(()=>{this.adapter_.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()},0)}handleKeydown(t,e,i){const c="ArrowLeft"===t.key||37===t.keyCode,o="ArrowUp"===t.key||38===t.keyCode,n="ArrowRight"===t.key||39===t.keyCode,r="ArrowDown"===t.key||40===t.keyCode,s="Home"===t.key||36===t.keyCode,a="End"===t.key||35===t.keyCode,d="Enter"===t.key||13===t.keyCode,h="Space"===t.key||32===t.keyCode;if(this.adapter_.isRootFocused())return void(o||a?(t.preventDefault(),this.focusLastElement()):(r||s)&&(t.preventDefault(),this.focusFirstElement()));let l,m=this.adapter_.getFocusedElementIndex();if(!(-1===m&&(m=i)<0)){if(this.isVertical_&&r||!this.isVertical_&&n)this.preventDefaultEvent_(t),l=this.focusNextElement(m);else if(this.isVertical_&&o||!this.isVertical_&&c)this.preventDefaultEvent_(t),l=this.focusPrevElement(m);else if(s)this.preventDefaultEvent_(t),l=this.focusFirstElement();else if(a)this.preventDefaultEvent_(t),l=this.focusLastElement();else if((d||h)&&e){const e=t.target;if(e&&"A"===e.tagName&&d)return;this.preventDefaultEvent_(t),this.setSelectedIndexOnAction_(m)}this.focusedItemIndex_=m,void 0!==l&&(this.setTabindexAtIndex_(l),this.focusedItemIndex_=l)}}handleSingleSelection(t,e){t!==ct.UNSET_INDEX&&(this.setSelectedIndexOnAction_(t,e),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)}focusNextElement(t){let e=t+1;if(e>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter_.focusItemAtIndex(e),e}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(e),e}focusFirstElement(){return this.adapter_.focusItemAtIndex(0),0}focusLastElement(){const t=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(t),t}setEnabled(t,e){this.isIndexValid_(t)&&this.adapter_.setDisabledStateForElementIndex(t,!e)}preventDefaultEvent_(t){const e=`${t.target.tagName}`.toLowerCase();-1===nt.indexOf(e)&&t.preventDefault()}setSingleSelectionAtIndex_(t){this.selectedIndex_!==t&&(this.selectedIndex_!==ct.UNSET_INDEX&&(this.adapter_.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(this.selectedIndex_,!1)),this.adapter_.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!0),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t,this.adapter_.notifySelected(t))}setMultiSelectionAtIndex_(t){const e=st(this.selectedIndex_),i=ot(e,t);if(i.removed.length||i.added.length){for(const t of i.removed)this.adapter_.setSelectedStateForElementIndex(t,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!1);for(const t of i.added)this.adapter_.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!0);this.selectedIndex_=t,this.adapter_.notifySelected(t,i)}}setAriaForSingleSelectionAtIndex_(t){this.selectedIndex_===ct.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(t,it.ARIA_CURRENT));const e=null!==this.ariaCurrentAttrValue_,i=e?it.ARIA_CURRENT:it.ARIA_SELECTED;this.selectedIndex_!==ct.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,i,"false"),this.adapter_.setAttributeForElementIndex(t,i,e?this.ariaCurrentAttrValue_:"true")}setTabindexAtIndex_(t){this.focusedItemIndex_===ct.UNSET_INDEX&&0!==t?this.adapter_.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter_.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter_.setTabIndexForElementIndex(t,0)}setTabindexToFirstSelectedItem_(){let t=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==ct.UNSET_INDEX?t=this.selectedIndex_:rt(this.selectedIndex_)&&this.selectedIndex_.size>0&&(t=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(t)}isIndexValid_(t){if(t instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===t.size)return!0;{let e=!1;for(const i of t)if(e=this.isIndexInRange_(i))break;return e}}if("number"==typeof t){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange_(t)}return!1}isIndexInRange_(t){const e=this.adapter_.getListItemCount();return t>=0&&t<e}setSelectedIndexOnAction_(t,e){if(this.adapter_.getDisabledStateForElementIndex(t))return;let i=t;this.isMulti_&&(i=new Set([t])),this.isIndexValid_(i)&&(this.isMulti_?this.toggleMultiAtIndex(t,e):this.setSingleSelectionAtIndex_(t),this.adapter_.notifyAction(t))}toggleMultiAtIndex(t,e){let i=!1;i=void 0===e?!this.adapter_.getSelectedStateForElementIndex(t):e;const c=st(this.selectedIndex_);i?c.add(t):c.delete(t),this.setMultiSelectionAtIndex_(c)}}
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const dt=t=>t.hasAttribute("mwc-list-item");class ht extends D{constructor(){super(...arguments),this.mdcAdapter=null,this.mdcFoundationClass=at,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.items_=[]}get assignedElements(){const t=this.slotElement;return t?t.assignedNodes({flatten:!0}).filter(C):[]}get items(){return this.items_}updateItems(){const t=this.assignedElements,e=[];for(const c of t)dt(c)&&e.push(c),c.hasAttribute("divider")&&!c.hasAttribute("role")&&c.setAttribute("role","separator");this.items_=e;const i=new Set;if(this.items_.forEach((t,e)=>{this.itemRoles?t.setAttribute("role",this.itemRoles):t.removeAttribute("role"),t.selected&&i.add(e)}),this.multi)this.select(i);else{const t=i.size?i.entries().next().value[1]:-1;this.select(t)}}get selected(){const t=this.index;if(!rt(t))return-1===t?null:this.items[t];const e=[];for(const i of t)e.push(this.items[i]);return e}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){return l`
      <!-- @ts-ignore -->
      <ul
          tabindex=${this.rootTabbable?"0":"-1"}
          role="${et(null===this.innerRole?void 0:this.innerRole)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}>
        <slot
            @slotchange=${this.onSlotChange}
            @list-item-rendered=${this.onListItemConnected}>
        </slot>
      </ul>
    `}onFocusIn(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusIn(t,e)}}onFocusOut(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusOut(t,e)}}onKeydown(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t),i=dt(t.target);this.mdcFoundation.handleKeydown(t,i,e)}}onRequestSelected(t){if(this.mdcFoundation){const e=this.getIndexOfTarget(t);if(-1===e)return;if(this.items[e].disabled)return;this.mdcFoundation.handleSingleSelection(e,t.detail.selected),t.stopPropagation()}}getIndexOfTarget(t){const e=this.items,i=t.composedPath();for(const c of i){let t=-1;if(C(c)&&dt(c)&&(t=e.indexOf(c)),-1!==t)return t}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:()=>{if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const t=N();if(!t.length)return-1;for(let e=t.length-1;e>=0;e--){const i=t[e];if(dt(i))return this.items.indexOf(i)}return-1},getAttributeForElementIndex:(t,e)=>{if(!this.mdcRoot)return"";const i=this.items[t];return i?i.getAttribute(e):""},setAttributeForElementIndex:(t,e,i)=>{if(!this.mdcRoot)return;const c=this.items[t];c&&c.setAttribute(e,i)},focusItemAtIndex:t=>{const e=this.items[t];e&&e.focus()},setTabIndexForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.tabindex=e)},notifyAction:t=>{const e={bubbles:!0,composed:!0};e.detail={index:t};const i=new CustomEvent("action",e);this.dispatchEvent(i)},notifySelected:(t,e)=>{const i={bubbles:!0,composed:!0};i.detail={index:t,diff:e};const c=new CustomEvent("selected",i);this.dispatchEvent(c)},isFocusInsideList:()=>L(this),isRootFocused:()=>{const t=this.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.disabled=e)},getDisabledStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.disabled},setSelectedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.selected=e)},getSelectedStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.selected},setActivatedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.activated=e)}},this.mdcAdapter}selectUi(t,e=!1){const i=this.items[t];i&&(i.selected=!0,i.activated=e)}deselectUi(t){const e=this.items[t];e&&(e.selected=!1,e.activated=!1)}select(t){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(t)}toggle(t,e){this.mdcFoundation.toggleMultiAtIndex(t,e)}onSlotChange(){this.layout()}onListItemConnected(t){this.layout(-1===this.items.indexOf(t.target))}layout(t=!0){if(t&&this.updateItems(),!this.noninteractive){let t=null;for(const e of this.items)t||e.noninteractive||(t=e),e.tabindex=-1;t&&(t.tabindex=0)}}focus(){const t=this.mdcRoot;t&&t.focus()}blur(){const t=this.mdcRoot;t&&t.blur()}}a([d(".mdc-list")],ht.prototype,"mdcRoot",void 0),a([d("slot")],ht.prototype,"slotElement",void 0),a([h({type:Boolean}),A((function(t){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(t)}))],ht.prototype,"activatable",void 0),a([h({type:Boolean}),A((function(t,e){this.mdcFoundation&&this.mdcFoundation.setMulti(t),void 0!==e&&this.layout()}))],ht.prototype,"multi",void 0),a([h({type:Boolean}),A((function(t){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(t)}))],ht.prototype,"wrapFocus",void 0),a([h({type:String}),A((function(t,e){void 0!==e&&this.updateItems()}))],ht.prototype,"itemRoles",void 0),a([h({type:String})],ht.prototype,"innerRole",void 0),a([h({type:Boolean})],ht.prototype,"rootTabbable",void 0),a([h({type:Boolean,reflect:!0}),A((function(t){const e=this.slotElement;if(t&&e){const t=O(e,'[tabindex="0"]');this.previousTabindex=t,t&&t.setAttribute("tabindex","-1")}else!t&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],ht.prototype,"noninteractive",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const lt=u`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let mt=class extends ht{};mt.styles=lt,mt=a([b("mwc-list")],mt);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ut,bt,pt={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},ft={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},gt={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(ut||(ut={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(bt||(bt={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var kt,_t=function(t){function e(i){var c=t.call(this,r({},e.defaultAdapter,i))||this;return c.isOpen_=!1,c.isQuickOpen_=!1,c.isHoistedElement_=!1,c.isFixedPosition_=!1,c.openAnimationEndTimerId_=0,c.closeAnimationEndTimerId_=0,c.animationRequestId_=0,c.anchorCorner_=bt.TOP_START,c.anchorMargin_={top:0,right:0,bottom:0,left:0},c.position_={x:0,y:0},c}return n(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return pt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ft},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return gt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return bt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,i=t.ROOT,c=t.OPEN;if(!this.adapter_.hasClass(i))throw new Error(i+" class required in root element.");this.adapter_.hasClass(c)&&(this.isOpen_=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)},e.prototype.setAnchorCorner=function(t){this.anchorCorner_=t},e.prototype.setAnchorMargin=function(t){this.anchorMargin_.top=t.top||0,this.anchorMargin_.right=t.right||0,this.anchorMargin_.bottom=t.bottom||0,this.anchorMargin_.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement_=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition_=t},e.prototype.setAbsolutePosition=function(t,e){this.position_.x=this.isFinite_(t)?t:0,this.position_.y=this.isFinite_(e)?e:0},e.prototype.setQuickOpen=function(t){this.isQuickOpen_=t},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.open=function(){var t=this;this.adapter_.saveFocus(),this.isQuickOpen_||this.adapter_.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame((function(){t.adapter_.addClass(e.cssClasses.OPEN),t.dimensions_=t.adapter_.getInnerDimensions(),t.autoPosition_(),t.isQuickOpen_?t.adapter_.notifyOpen():t.openAnimationEndTimerId_=setTimeout((function(){t.openAnimationEndTimerId_=0,t.adapter_.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter_.notifyOpen()}),gt.TRANSITION_OPEN_DURATION)})),this.isOpen_=!0},e.prototype.close=function(t){var i=this;void 0===t&&(t=!1),this.isQuickOpen_||this.adapter_.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){i.adapter_.removeClass(e.cssClasses.OPEN),i.isQuickOpen_?i.adapter_.notifyClose():i.closeAnimationEndTimerId_=setTimeout((function(){i.closeAnimationEndTimerId_=0,i.adapter_.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter_.notifyClose()}),gt.TRANSITION_CLOSE_DURATION)})),this.isOpen_=!1,t||this.maybeRestoreFocus_()},e.prototype.handleBodyClick=function(t){this.adapter_.isElementInContainer(t.target)||this.close()},e.prototype.handleKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&this.close()},e.prototype.autoPosition_=function(){var t;this.measurements_=this.getAutoLayoutMeasurements_();var e=this.getOriginCorner_(),i=this.getMenuSurfaceMaxHeight_(e),c=this.hasBit_(e,ut.BOTTOM)?"bottom":"top",o=this.hasBit_(e,ut.RIGHT)?"right":"left",n=this.getHorizontalOriginOffset_(e),r=this.getVerticalOriginOffset_(e),s=this.measurements_,a=s.anchorSize,d=s.surfaceSize,h=((t={})[o]=n,t[c]=r,t);a.width/d.width>gt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement_||this.isFixedPosition_)&&this.adjustPositionForHoistedElement_(h),this.adapter_.setTransformOrigin(o+" "+c),this.adapter_.setPosition(h),this.adapter_.setMaxHeight(i?i+"px":"")},e.prototype.getAutoLayoutMeasurements_=function(){var t=this.adapter_.getAnchorDimensions(),e=this.adapter_.getBodyDimensions(),i=this.adapter_.getWindowDimensions(),c=this.adapter_.getWindowScroll();return t||(t={top:this.position_.y,right:this.position_.x,bottom:this.position_.y,left:this.position_.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions_,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:c}},e.prototype.getOriginCorner_=function(){var t=bt.TOP_LEFT,e=this.measurements_,i=e.viewportDistance,c=e.anchorSize,o=e.surfaceSize,n=this.hasBit_(this.anchorCorner_,ut.BOTTOM),r=o.height-(n?i.bottom-this.anchorMargin_.bottom:i.bottom+c.height-this.anchorMargin_.top);r>0&&o.height-(n?i.top+c.height+this.anchorMargin_.bottom:i.top+this.anchorMargin_.top)<r&&(t=this.setBit_(t,ut.BOTTOM));var s=this.adapter_.isRtl(),a=this.hasBit_(this.anchorCorner_,ut.FLIP_RTL),d=this.hasBit_(this.anchorCorner_,ut.RIGHT),h=d&&!s||!d&&a&&s,l=o.width-(h?i.left+c.width+this.anchorMargin_.right:i.left+this.anchorMargin_.left),m=o.width-(h?i.right-this.anchorMargin_.right:i.right+c.width-this.anchorMargin_.left);return(l<0&&h&&s||d&&!h&&l<0||m>0&&l<m)&&(t=this.setBit_(t,ut.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight_=function(t){var i=this.measurements_.viewportDistance,c=0,o=this.hasBit_(t,ut.BOTTOM),n=this.hasBit_(this.anchorCorner_,ut.BOTTOM),r=e.numbers.MARGIN_TO_EDGE;return o?(c=i.top+this.anchorMargin_.top-r,n||(c+=this.measurements_.anchorSize.height)):(c=i.bottom-this.anchorMargin_.bottom+this.measurements_.anchorSize.height-r,n&&(c-=this.measurements_.anchorSize.height)),c},e.prototype.getHorizontalOriginOffset_=function(t){var e=this.measurements_.anchorSize,i=this.hasBit_(t,ut.RIGHT),c=this.hasBit_(this.anchorCorner_,ut.RIGHT);if(i){var o=c?e.width-this.anchorMargin_.left:this.anchorMargin_.right;return this.isHoistedElement_||this.isFixedPosition_?o-(this.measurements_.viewportSize.width-this.measurements_.bodySize.width):o}return c?e.width-this.anchorMargin_.right:this.anchorMargin_.left},e.prototype.getVerticalOriginOffset_=function(t){var e=this.measurements_.anchorSize,i=this.hasBit_(t,ut.BOTTOM),c=this.hasBit_(this.anchorCorner_,ut.BOTTOM);return i?c?e.height-this.anchorMargin_.top:-this.anchorMargin_.bottom:c?e.height+this.anchorMargin_.bottom:this.anchorMargin_.top},e.prototype.adjustPositionForHoistedElement_=function(t){var e,i,c=this.measurements_,o=c.windowScroll,n=c.viewportDistance,r=Object.keys(t);try{for(var s=k(r),a=s.next();!a.done;a=s.next()){var d=a.value,h=t[d]||0;h+=n[d],this.isFixedPosition_||("top"===d?h+=o.y:"bottom"===d?h-=o.y:"left"===d?h+=o.x:h-=o.x),t[d]=h}}catch(l){e={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus_=function(){var t=this.adapter_.isFocused(),e=document.activeElement&&this.adapter_.isElementInContainer(document.activeElement);(t||e)&&this.adapter_.restoreFocus()},e.prototype.hasBit_=function(t,e){return Boolean(t&e)},e.prototype.setBit_=function(t,e){return t|e},e.prototype.isFinite_=function(t){return"number"==typeof t&&isFinite(t)},e}(H);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class xt extends D{constructor(){super(...arguments),this.mdcFoundationClass=_t,this.absolute=!1,this.fullwidth=!1,this.anchor=null,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.corner="TOP_START",this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){return l`
      <div
          class="mdc-menu-surface ${P({"mdc-menu-surface--fixed":this.fixed,fullwidth:this.fullwidth})}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},S(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const t=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(t)},notifyOpen:()=>{const t=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(t)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:t=>{const e=this.mdcRoot;if(!e)return;const i=`${function(t,e){if(void 0===e&&(e=!1),void 0===kt||e){var i=t.document.createElement("div");kt="transform"in i.style?"transform":"webkitTransform"}return kt}(window)}-origin`;e.style.setProperty(i,t)},isFocused:()=>L(this),saveFocus:()=>{const t=N(),e=t.length;e||(this.previouslyFocused=null),this.previouslyFocused=t[e-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const t=this.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const t=this.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{const e=this.mdcRoot;e&&(e.style.left="left"in t?`${t.left}px`:"",e.style.right="right"in t?`${t.right}px`:"",e.style.top="top"in t?`${t.top}px`:"",e.style.bottom="bottom"in t?`${t.bottom}px`:"")},setMaxHeight:t=>{const e=this.mdcRoot;e&&(e.style.maxHeight=t)}})}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onBodyClick(t){-1===t.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound)}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound)}saveOrRestoreAnchor(t){t&&(this.previousAnchor=this.anchor,this.anchor=null),t||this.anchor||!this.previousAnchor||(this.anchor=this.previousAnchor)}close(){this.open=!1}show(){this.open=!0}}a([d(".mdc-menu-surface")],xt.prototype,"mdcRoot",void 0),a([d("slot")],xt.prototype,"slotElement",void 0),a([h({type:Boolean}),A((function(t){this.mdcFoundation&&!this.fixed&&(this.mdcFoundation.setIsHoisted(t),this.saveOrRestoreAnchor(t))}))],xt.prototype,"absolute",void 0),a([h({type:Boolean})],xt.prototype,"fullwidth",void 0),a([h({type:Object}),A((function(t,e){e&&(e.style.position=""),t&&(t.style.position="relative")}))],xt.prototype,"anchor",void 0),a([h({type:Boolean}),A((function(t){this.mdcFoundation&&!this.absolute&&(this.mdcFoundation.setIsHoisted(t),this.saveOrRestoreAnchor(t))}))],xt.prototype,"fixed",void 0),a([h({type:Number}),A((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y}))}))],xt.prototype,"x",void 0),a([h({type:Number}),A((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t}))}))],xt.prototype,"y",void 0),a([h({type:Boolean}),A((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],xt.prototype,"quick",void 0),a([h({type:Boolean,reflect:!0}),A((function(t){this.mdcFoundation&&(t?this.mdcFoundation.open():this.mdcFoundation.close())}))],xt.prototype,"open",void 0),a([h({type:String}),A((function(t){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(t?bt[t]:bt.TOP_START)}))],xt.prototype,"corner",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const vt=u`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}:host(:not([open])){display:none}.fullwidth{width:100%}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let yt=class extends xt{};yt.styles=vt,yt=a([b("mwc-menu-surface")],yt);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Et,wt={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Tt={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},At={FOCUS_ROOT_INDEX:-1};!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(Et||(Et={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var It=function(t){function e(i){var c=t.call(this,r({},e.defaultAdapter,i))||this;return c.closeAnimationEndTimerId_=0,c.defaultFocusState_=Et.LIST_ROOT,c}return n(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return wt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Tt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return At},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()},e.prototype.handleKeydown=function(t){("Tab"===t.key||9===t.keyCode)&&this.adapter_.closeSurface(!0)},e.prototype.handleItemAction=function(t){var e=this,i=this.adapter_.getElementIndex(t);i<0||(this.adapter_.notifySelected({index:i}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var i=e.adapter_.getElementIndex(t);e.adapter_.isSelectableItemAtIndex(i)&&e.setSelectedIndex(i)}),_t.numbers.TRANSITION_CLOSE_DURATION))},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case Et.FIRST_ITEM:this.adapter_.focusItemAtIndex(0);break;case Et.LAST_ITEM:this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount()-1);break;case Et.NONE:break;default:this.adapter_.focusListRoot()}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter_.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter_.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter_.removeAttributeFromElementAtIndex(e,Tt.ARIA_CHECKED_ATTR),this.adapter_.removeClassFromElementAtIndex(e,wt.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(t,wt.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(t,Tt.ARIA_CHECKED_ATTR,"true")},e.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter_.removeClassFromElementAtIndex(t,"mdc-list-item--disabled"),this.adapter_.addAttributeToElementAtIndex(t,Tt.ARIA_DISABLED_ATTR,"false")):(this.adapter_.addClassToElementAtIndex(t,"mdc-list-item--disabled"),this.adapter_.addAttributeToElementAtIndex(t,Tt.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex_=function(t){var e=this.adapter_.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(H);class Ct extends D{constructor(){super(...arguments),this.mdcFoundationClass=It,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.defaultFocus="LIST_ROOT"}get listElement(){return this.listElement_?this.listElement_:(this.listElement_=this.renderRoot.querySelector("mwc-list"),this.listElement_)}get items(){const t=this.listElement;return t?t.items:[]}get index(){const t=this.listElement;return t?t.index:-1}get selected(){const t=this.listElement;return t?t.selected:null}render(){return l`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
          <mwc-list
            rootTabbable
            .innerRole=${this.innerRole}
            .multi=${this.multi}
            class="mdc-list"
            .itemRoles=${"menu"===this.innerRole?"menuitem":"option"}
            .wrapFocus=${this.wrapFocus}
            .activatable=${this.activatable}
            @action=${this.onAction}>
          <slot></slot>
        </mwc-list>
      </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const c=i.items[t];c&&("mdc-menu-item--selected"===e?this.forceGroupSelection&&!c.selected&&i.toggle(t,!0):c.classList.add(e))},removeClassFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const c=i.items[t];c&&("mdc-menu-item--selected"===e?c.selected&&i.toggle(t,!1):c.classList.remove(e))},addAttributeToElementAtIndex:(t,e,i)=>{const c=this.listElement;if(!c)return;const o=c.items[t];o&&o.setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const c=i.items[t];c&&c.removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>{this.open=!1},getElementIndex:t=>{const e=this.listElement;return e?e.items.indexOf(t):-1},notifySelected:()=>{},getMenuItemCount:()=>{const t=this.listElement;return t?t.items.length:0},focusItemAtIndex:t=>{const e=this.listElement;if(!e)return;const i=e.items[t];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:t=>{const e=this.listElement;if(!e)return-1;const i=e.items[t];if(!i||!i.group)return-1;for(let c=0;c<e.items.length;c++){if(c===t)continue;const o=e.items[c];if(o.selected&&o.group===i.group)return c}return-1},isSelectableItemAtIndex:t=>{const e=this.listElement;if(!e)return!1;const i=e.items[t];return!!i&&i.hasAttribute("group")}}}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onAction(t){const e=this.listElement;if(this.mdcFoundation&&e){const i=e.items[t.detail.index];i&&this.mdcFoundation.handleItemAction(i)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}select(t){const e=this.listElement;e&&e.select(t)}close(){this.open=!1}show(){this.open=!0}layout(t=!0){const e=this.listElement;e&&e.layout(t)}}a([d(".mdc-menu")],Ct.prototype,"mdcRoot",void 0),a([d("slot")],Ct.prototype,"slotElement",void 0),a([h({type:Object})],Ct.prototype,"anchor",void 0),a([h({type:Boolean,reflect:!0})],Ct.prototype,"open",void 0),a([h({type:Boolean})],Ct.prototype,"quick",void 0),a([h({type:Boolean})],Ct.prototype,"wrapFocus",void 0),a([h({type:String})],Ct.prototype,"innerRole",void 0),a([h({type:String})],Ct.prototype,"corner",void 0),a([h({type:Number})],Ct.prototype,"x",void 0),a([h({type:Number})],Ct.prototype,"y",void 0),a([h({type:Boolean})],Ct.prototype,"absolute",void 0),a([h({type:Boolean})],Ct.prototype,"multi",void 0),a([h({type:Boolean})],Ct.prototype,"activatable",void 0),a([h({type:Boolean})],Ct.prototype,"fixed",void 0),a([h({type:Boolean})],Ct.prototype,"forceGroupSelection",void 0),a([h({type:Boolean})],Ct.prototype,"fullwidth",void 0),a([h({type:String}),A((function(t){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(Et[t])}))],Ct.prototype,"defaultFocus",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ot=u`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let St=class extends Ct{};St.styles=Ot,St=a([b("mwc-menu")],St);
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
class Rt extends s{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.boundOnClick=this.onClick.bind(this)}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():l``,i=this.hasMeta?this.renderMeta():l``;return l`
      ${e}
      ${t}
      ${i}`}renderGraphic(){return l`
      <span class="mdc-list-item__graphic material-icons">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return l`
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return l`
      <span class="mdc-list-item__text">
        ${t}
      </span>`}renderSingleLine(){return l`<slot></slot>`}renderTwoline(){return l`
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestDetail(!1,!this.selected)}fireRequestDetail(t,e){const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{isClick:t,selected:e}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.toggleAttribute("mwc-list-item",!0),this.addEventListener("click",this.boundOnClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.boundOnClick)}firstUpdated(){this.dispatchEvent(new Event("list-item-rendered",{bubbles:!0,composed:!0})),m({surfaceNode:this,unbounded:!1})}}a([d("slot")],Rt.prototype,"slotElement",void 0),a([h({type:String})],Rt.prototype,"value",void 0),a([h({type:String,reflect:!0})],Rt.prototype,"group",void 0),a([h({type:Number,reflect:!0})],Rt.prototype,"tabindex",void 0),a([h({type:Boolean,reflect:!0}),A((function(t){this.setAttribute("aria-disabled",t?"true":"false")}))],Rt.prototype,"disabled",void 0),a([h({type:Boolean,reflect:!0})],Rt.prototype,"twoline",void 0),a([h({type:Boolean,reflect:!0})],Rt.prototype,"activated",void 0),a([h({type:String,reflect:!0})],Rt.prototype,"graphic",void 0),a([h({type:Boolean})],Rt.prototype,"hasMeta",void 0),a([h({type:Boolean,reflect:!0}),A((function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.toggleAttribute("mwc-list-item",!0)}))],Rt.prototype,"noninteractive",void 0),a([h({type:Boolean,reflect:!0}),A((function(t){this.setAttribute("aria-selected",t?"true":"false")}))],Rt.prototype,"selected",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Nt=u`:host{cursor:pointer;user-select:none;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;padding:0 16px;overflow:hidden;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta ::slotted(*){line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{display:block;margin-top:0;line-height:normal;font-size:inherit}.mdc-list--dense .mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host(:not([disabled])){--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([disabled]))::before,:host(:not([disabled]))::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:"";top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:host(:not([disabled]))::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:host(:not([disabled]))::before,:host(:not([disabled]))::after{background-color:#000}:host(.mdc-ripple-upgraded:not([disabled]))::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:host(.mdc-ripple-upgraded:not([disabled]))::after{top:0;left:0;transform:scale(0);transform-origin:center center;width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:host(.mdc-ripple-upgraded--unbounded:not([disabled]))::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:host(.mdc-ripple-upgraded--foreground-activation:not([disabled]))::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:host(.mdc-ripple-upgraded--foreground-deactivation:not([disabled]))::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:host([disabled],[noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}:host(:not([disabled]):hover)::before{opacity:.04}:host(:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host(:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.12}:host(:not([disabled]):not(.mdc-ripple-upgraded))::after{transition:opacity 150ms linear}:host(:not([disabled]):not(.mdc-ripple-upgraded):active)::after{transition-duration:75ms;opacity:.12}:host(:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.12}:host([activated]:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.2}:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):active)::after{opacity:.2}:host([activated]:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.2}:host([activated]:not([disabled]))::before{opacity:.12}:host([activated]:not([disabled]))::before,:host([activated]:not([disabled]))::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}:host([activated]:not([disabled]):hover)::before{opacity:.16}:host([activated]:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.24}:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):active)::after{opacity:.24}:host([activated]:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.24}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Lt=class extends Rt{};Lt.styles=Nt,Lt=a([b("mwc-list-item")],Lt);const Dt=class{constructor(e){t(this,e),this.options=[],this.fontSize="16px"}componentDidLoad(){const t=this.el.shadowRoot.querySelector("button");this.menu=this.el.shadowRoot.querySelector("mwc-menu"),this.menu.anchor=t}render(){return e(i,{style:{"--menu-item-font-size":this.fontSize}},e("button",{onClick:t=>{t.stopPropagation(),this.menu.open=!0}},e("mwc-icon",null,"more_vert")),e("mwc-menu",{onAction:t=>{this.options[t.detail.index].action(t)}},this.options.map(({label:t})=>e("mwc-list-item",null,t))))}get el(){return o(this)}static get style(){return":host{--mdc-theme-primary:var(--color-main);--mdc-theme-secondary:var(--color-sec);--mdc-icon-size:24px;display:inline-block;position:relative}button{-ms-flex-align:center;align-items:center;background:none;border-radius:50%;border:0;color:var(--color-gray);cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;height:32px;padding:0;width:32px}mwc-list-item{font-size:var(--menu-item-font-size)}"}};export{_ as dot_badge,x as dot_card,V as dot_card_contentlet,Z as dot_contentlet_icon,J as dot_contentlet_lock_icon,Q as dot_contentlet_state_icon,tt as dot_contentlet_thumbnail,Dt as dot_context_menu};