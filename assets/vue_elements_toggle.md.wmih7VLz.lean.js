import{v as r,o as s,c as t,j as p,M as g,t as h,e as k,s as u,I as d,a5 as c,k as E}from"./chunks/framework.C2QCpDA7.js";const m={class:"lesli-toggle"},y=["checked","disabled"],_={class:"slider"},b={key:0},f={key:0,class:"enabled-text"},v={key:1,class:"disabled-text"},x={__name:"Toggle",props:{modelValue:{type:Boolean,required:!0},disabled:{type:Boolean,default:!1},disabledText:{type:String,default:""},enabledText:{type:String,default:""},showText:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(n,{emit:a}){/*

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
*/const i=a,e=n;return r(()=>e.modelValue,(l,o)=>{i("change",e.modelValue)}),(l,o)=>(s(),t("label",m,[p("input",g(l.$attrs,{onInput:o[0]||(o[0]=V=>i("update:modelValue",!e.modelValue)),type:"checkbox",checked:e.modelValue,disabled:e.disabled}),null,16,y),p("span",_,[e.showText?(s(),t("div",b,[e.modelValue?(s(),t("p",f,h(e.enabledText),1)):(s(),t("p",v,h(e.disabledText),1))])):k("",!0)])]))}},T=c("",19);JSON.parse('{"title":"Toggle","description":"","frontmatter":{},"headers":[],"relativePath":"../../lesli-vue/source/elements/toggle/Toggle.md","filePath":"../../lesli-vue/source/elements/toggle/Toggle.md","lastUpdated":1718250671000}');const F={name:"../../lesli-vue/source/elements/toggle/Toggle.md"},q=Object.assign(F,{setup(n){const a=u(!1);return(i,e)=>(s(),t("div",null,[T,d(x,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l)},null,8,["modelValue"])]))}}),P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/elements/toggle.md","filePath":"vue/elements/toggle.md","lastUpdated":1715574060000}'),C={name:"vue/elements/toggle.md"},A=Object.assign(C,{setup(n){return(a,i)=>(s(),t("div",null,[d(E(q))]))}});export{P as __pageData,A as default};
