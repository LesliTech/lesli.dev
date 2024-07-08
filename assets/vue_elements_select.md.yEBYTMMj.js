import{j as m,k as y,x as g,o as l,c as a,l as r,aG as E,aI as v,t as p,e as k,F,E as q,n as b,I as _,a7 as S,m as C}from"./chunks/framework.1gbG0lGE.js";const B={class:"select is-fullwidth"},V=["required","disabled"],P={value:"",disabled:""},w={key:0,value:{value:"reset",label:"reset"}},N=["value"],T={key:0,class:"icon is-small is-left"},x={class:"material-icons"},A={__name:"Select",props:{modelValue:{type:[Number,String,Boolean],required:!1},options:{type:Array,required:!0},placeholder:{type:String,required:!1,default:"Select..."},icon:{type:String,required:!1},reset:{type:String,required:!1},required:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(d,{emit:i}){/*

Lesli

Copyright (c) 2023, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Your Smart Business Assistant. 

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 

*/const n=i,s=d,t=m("");function c(e){e.target.value===""?t.value="":t.value=e.target.value}function u(e){e===null||e===""?t.value="":t.value=e}return y(()=>{u(s.modelValue)}),g(()=>s.modelValue,e=>{u(e)}),g(()=>t.value,e=>{e===null||e===""?n("update:modelValue",""):n("update:modelValue",e)}),(e,h)=>(l(),a("div",{class:b(["control",{"has-icons-left":s.icon}])},[r("div",B,[E(r("select",{onChange:c,"onUpdate:modelValue":h[0]||(h[0]=o=>t.value=o),required:s.required,disabled:s.disabled},[r("option",P,p(s.placeholder),1),s.reset?(l(),a("option",w,p(s.reset),1)):k("",!0),(l(!0),a(F,null,q(s.options,(o,f)=>(l(),a("option",{value:o.value,key:f},p(o.label),9,N))),128))],40,V),[[v,t.value]])]),s.icon?(l(),a("div",T,[r("span",x,p(s.icon),1)])):k("",!0)],2))}},D=S(`<h1 id="select" tabindex="-1">Select <a class="header-anchor" href="#select" aria-label="Permalink to &quot;Select&quot;">​</a></h1><p>The component lesli select is registered globally and is meant to be used in all the vue apps as lesli-select. The difference between this component and the lesli-dropdown component is that lesli-select is used to display a list of options in a form.</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><p><strong>:options</strong> prop that contains the options to be shown in the select component</p><ul><li><strong>type</strong>: Array</li><li><strong>required</strong>: true</li></ul><p><strong>:placeholder</strong> prop that contains the placeholder for the select</p><ul><li><strong>type</strong>: String</li><li><strong>required</strong>: false</li><li><strong>default</strong>: &quot;Select...&quot;</li></ul><p><strong>:icon</strong> prop that contains the icon to be set on the select component</p><ul><li><strong>type</strong>: String</li><li><strong>required</strong>: false</li></ul><p><strong>:required</strong> prop that allows to set the select component as required in a form</p><ul><li><strong>type</strong>: Boolean</li><li><strong>required</strong>: false</li><li><strong>default</strong>: false</li></ul><p><strong>:disabled</strong> prop that allows to disable the select component</p><ul><li><strong>type</strong>: Boolean</li><li><strong>required</strong>: false</li><li><strong>default</strong>: false</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lesli-select</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;selection&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    required</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    :options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        label: &#39;Primera opcion&#39;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        value: &#39;option_one&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }, {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        label: &#39;Segunda opcion&#39;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        value: &#39;option_two&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lesli-select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,14);JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"../../lesli-vue/source/elements/select/Select.md","filePath":"../../lesli-vue/source/elements/select/Select.md","lastUpdated":1714877105000}');const I={name:"../../lesli-vue/source/elements/select/Select.md"},O=Object.assign(I,{setup(d){const i=m(null);function n(){console.log(i)}return(s,t)=>(l(),a("div",null,[D,_(A,{onChange:n,modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=c=>i.value=c),icon:"public",required:"",options:[{label:"Primera opcion",value:"option_one"},{label:"Segunda opcion",value:"option_two"}]},null,8,["modelValue"])]))}}),j=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/elements/select.md","filePath":"vue/elements/select.md","lastUpdated":1713843057000}'),U={name:"vue/elements/select.md"},J=Object.assign(U,{setup(d){return(i,n)=>(l(),a("div",null,[_(C(O))]))}});export{j as __pageData,J as default};
