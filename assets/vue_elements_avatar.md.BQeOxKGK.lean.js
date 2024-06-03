import{j as k,k as c,x as m,o as e,c as n,n as v,t as F,P as _,I as i,a7 as r,l as E,m as f}from"./chunks/framework.DBXbKTwi.js";const q=["src"],t={__name:"Avatar",props:{image:{type:String,default:null},name:{type:String,default:""},size:{type:String,required:!0,default:"medium"}},setup(l){/*

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
*/const s=l,a=k(""),h=k(""),p=k("?");function d(){if(!s.name||s.name=="")return p.value="";const g=s.name.trim().split(/\s+/).slice(0,2).map(y=>y.charAt(0).toUpperCase());p.value=g.join("")}function o(){if(s.size==="small"){a.value="is-size-5",h.value="height: 60px; width: 60px;";return}if(s.size==="medium"){a.value="is-size-3",h.value="height: 120px; width: 120px;";return}s.size==="large"&&(a.value="is-size-1",h.value="height: 180px; width: 180px;")}return c(()=>{o(),s.image||d()}),m(()=>s.name,()=>{s.image||d()}),(u,g)=>(e(),n("figure",{class:"lesli-element-avatar has-background-grey-lighter",style:_(h.value)},[l.image?(e(),n("img",{key:0,src:l.image},null,8,q)):(e(),n("span",{key:1,class:v(["has-text-weight-bold",a.value])},F(p.value),3))],4))}},A=r("",15),C=E("br",null,null,-1),b=r("",3),B=r("",3),T=E("br",null,null,-1),D=E("br",null,null,-1);JSON.parse('{"title":"Avatar","description":"","frontmatter":{},"headers":[],"relativePath":"../../lesli-vue/source/elements/avatar/Avatar.md","filePath":"../../lesli-vue/source/elements/avatar/Avatar.md","lastUpdated":null}');const z={name:"../../lesli-vue/source/elements/avatar/Avatar.md"},S=Object.assign(z,{setup(l){return(s,a)=>(e(),n("div",null,[A,i(t,{name:"Lesli"}),C,i(t,{name:"Lesli Tech"}),b,i(t,{image:"https://picsum.photos/128/128"}),B,i(t,{name:"Lesli Tech",size:"small"}),T,i(t,{name:"Lesli Tech",size:"medium"}),D,i(t,{name:"Lesli Tech",size:"large"})]))}}),L=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/elements/avatar.md","filePath":"vue/elements/avatar.md","lastUpdated":1714955990000}'),x={name:"vue/elements/avatar.md"},w=Object.assign(x,{setup(l){return(s,a)=>(e(),n("div",null,[i(f(S))]))}});export{L as __pageData,w as default};
