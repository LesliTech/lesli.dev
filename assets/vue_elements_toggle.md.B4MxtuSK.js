import{x as r,o as s,c as t,l as p,M as g,t as h,e as k,j as u,I as d,a7 as c,m as E}from"./chunks/framework.DBXbKTwi.js";const m={class:"lesli-toggle"},y=["checked","disabled"],_={class:"slider"},b={key:0},f={key:0,class:"enabled-text"},v={key:1,class:"disabled-text"},x={__name:"Toggle",props:{modelValue:{type:Boolean,required:!0},disabled:{type:Boolean,default:!1},disabledText:{type:String,default:""},enabledText:{type:String,default:""},showText:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(n,{emit:a}){/*

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

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by LesliTech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/const i=a,e=n;return r(()=>e.modelValue,(l,o)=>{i("change",e.modelValue)}),(l,o)=>(s(),t("label",m,[p("input",g(l.$attrs,{onInput:o[0]||(o[0]=V=>i("update:modelValue",!e.modelValue)),type:"checkbox",checked:e.modelValue,disabled:e.disabled}),null,16,y),p("span",_,[e.showText?(s(),t("div",b,[e.modelValue?(s(),t("p",f,h(e.enabledText),1)):(s(),t("p",v,h(e.disabledText),1))])):k("",!0)])]))}},T=c(`<h1 id="toggle" tabindex="-1">Toggle <a class="header-anchor" href="#toggle" aria-label="Permalink to &quot;Toggle&quot;">​</a></h1><p>The component lesli toggle is registered globally and is meant to be used in all the vue apps as lesli-toggle. This component is used to create a toggle, and needs to be used like a input type checkbox.</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><p><strong>:disabled</strong> This prop is used to disable the toggle.</p><ul><li><strong>type</strong>: Boolean</li><li><strong>required</strong>: false</li><li><strong>default</strong>: false</li></ul><p><strong>:disabledText</strong>: This prop is used to indicate the text to be displayed when the toggle is disabled</p><ul><li><strong>type</strong>: String,</li><li><strong>default</strong>: No</li></ul><p><strong>:enabledText</strong> This prop is used to indicate the text to be displayed when the toggle is enabled</p><ul><li><strong>type</strong>: String,</li><li><strong>default</strong>: yes</li></ul><p><strong>:showText</strong>: This prop is used to show text when the toggle is enabled or disabled</p><ul><li><strong>type</strong>: Boolean,</li><li><strong>default</strong>: false</li></ul><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>No events are defined for this component.</p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><p>No slots are defined for this component.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>v-model is required because it is the only way to control the state of the toggle.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LesliToggle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./Avatar.vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isChecked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lesli-toggle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;isChecked&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Results:</strong></p>`,19);JSON.parse('{"title":"Toggle","description":"","frontmatter":{},"headers":[],"relativePath":"../../lesli-vue/source/elements/toggle/Toggle.md","filePath":"../../lesli-vue/source/elements/toggle/Toggle.md","lastUpdated":null}');const F={name:"../../lesli-vue/source/elements/toggle/Toggle.md"},q=Object.assign(F,{setup(n){const a=u(!1);return(i,e)=>(s(),t("div",null,[T,d(x,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l)},null,8,["modelValue"])]))}}),P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/elements/toggle.md","filePath":"vue/elements/toggle.md","lastUpdated":1715574060000}'),C={name:"vue/elements/toggle.md"},A=Object.assign(C,{setup(n){return(a,i)=>(s(),t("div",null,[d(E(q))]))}});export{P as __pageData,A as default};
