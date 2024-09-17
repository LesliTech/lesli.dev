import{s as E,o as n,c as h,j as s,ae as m,ah as _,r as b,e as v,I as l,w as f,a5 as r,k as F}from"./chunks/framework.C2QCpDA7.js";const x={class:"lesli-toolbar mb-5"},T={class:"field is-grouped"},q={class:"control is-expanded has-icons-right has-icons-left"},C=["placeholder"],A=s("span",{class:"icon is-small is-left has-text-grey-light"},[s("span",{class:"material-icons"}," search ")],-1),D={key:0,class:"select"},B=s("select",null,[s("option",null,"10"),s("option",null,"20")],-1),S=[B],o={__name:"Toolbar",props:{searchPlaceholder:{type:String,default:"Search..."},initialValue:{type:String,default:null},pagination:{type:Object,required:!1}},emits:["search"],setup(t,{emit:p}){/*

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

*/const a=p,c=t,k=E(setTimeout),i=E("");function g(){clearTimeout(k.value),k.value=setTimeout(()=>a("search",i.value),800)}function u(){i.value="",a("search",i.value)}return(y,e)=>(n(),h("div",x,[s("div",T,[s("div",q,[m(s("input",{type:"text",name:"search",class:"input is-shadowless","onUpdate:modelValue":e[0]||(e[0]=d=>i.value=d),placeholder:t.searchPlaceholder,onInput:e[1]||(e[1]=d=>g())},null,40,C),[[_,i.value]]),A,s("span",{class:"icon is-right"},[s("a",{class:"delete",onClick:u})])]),b(y.$slots,"default"),c.pagination?(n(),h("div",D,S)):v("",!0)])]))}},P=r("",16),w=r("",3),V=r("",2),I=s("div",{class:"control"},[s("div",{class:"select"},[s("select",{name:"projects-filters-per-page"},[s("option",{value:"10"},"10"),s("option",{value:"15"},"15"),s("option",{value:"30"},"30"),s("option",{value:"50"},"50")])])],-1),N=s("button",{class:"button is-primary"},"save",-1);JSON.parse('{"title":"Toolbar","description":"","frontmatter":{},"headers":[],"relativePath":"../../lesli-vue/source/elements/toolbar/Toolbar.md","filePath":"../../lesli-vue/source/elements/toolbar/Toolbar.md","lastUpdated":1706582462000}');const j={name:"../../lesli-vue/source/elements/toolbar/Toolbar.md"},O=Object.assign(j,{setup(t){return(p,a)=>(n(),h("div",null,[P,l(o),w,l(o,{placeholder:"Filter projects by code"}),V,l(o,null,{default:f(()=>[I,N]),_:1})]))}}),R=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/elements/toolbar.md","filePath":"vue/elements/toolbar.md","lastUpdated":1726535515000}'),$={name:"vue/elements/toolbar.md"},H=Object.assign($,{setup(t){return(p,a)=>(n(),h("div",null,[l(F(O))]))}});export{R as __pageData,H as default};
