import{s as r,y as u,v as m,o as n,c as h,n as v,t as F,P as _,I as i,a5 as E,j as l,k as A}from"./chunks/framework.C2QCpDA7.js";const f=["src"],a={__name:"Avatar",props:{image:{type:String,default:null},name:{type:String,default:""},size:{type:String,required:!0,default:"medium"}},setup(e){/*

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
*/const s=e,t=r(""),p=r(""),k=r("?");function d(){if(!s.name||s.name=="")return k.value="";const g=s.name.trim().split(/\s+/).slice(0,2).map(y=>y.charAt(0).toUpperCase());k.value=g.join("")}function o(){if(s.size==="small"){t.value="is-size-5",p.value="height: 60px; width: 60px;";return}if(s.size==="medium"){t.value="is-size-3",p.value="height: 120px; width: 120px;";return}s.size==="large"&&(t.value="is-size-1",p.value="height: 180px; width: 180px;")}return u(()=>{o(),s.image||d()}),m(()=>s.name,()=>{s.image||d()}),(c,g)=>(n(),h("figure",{class:"lesli-element-avatar has-background-grey-lighter",style:_(p.value)},[e.image?(n(),h("img",{key:0,src:e.image},null,8,f)):(n(),h("span",{key:1,class:v(["has-text-weight-bold",t.value])},F(k.value),3))],4))}},C=E("",8),q=l("br",null,null,-1),b=E("",3),B=E("",3),D=l("br",null,null,-1),z=l("br",null,null,-1),T=l("br",null,null,-1),x=l("br",null,null,-1),S=l("br",null,null,-1);JSON.parse('{"title":"Avatar","description":"","frontmatter":{},"headers":[],"relativePath":"../../lesli-vue/source/elements/avatar/Avatar.md","filePath":"../../lesli-vue/source/elements/avatar/Avatar.md","lastUpdated":null}');const P={name:"../../lesli-vue/source/elements/avatar/Avatar.md"},I=Object.assign(P,{setup(e){return(s,t)=>(n(),h("div",null,[C,i(a,{name:"Lesli"}),q,i(a,{name:"Lesli Tech"}),b,i(a,{image:"https://picsum.photos/128/128"}),B,i(a,{name:"Lesli Tech",size:"small"}),D,i(a,{name:"Lesli Tech",size:"medium"}),z,i(a,{name:"Lesli Tech",size:"large"}),T,i(a,{image:"https://picsum.photos/128/128",size:"large"}),x,i(a,{image:"https://picsum.photos/128/128",size:"medium"}),S,i(a,{image:"https://picsum.photos/128/128",size:"small"})]))}}),N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/elements/avatar.md","filePath":"vue/elements/avatar.md","lastUpdated":1714955990000}'),L={name:"vue/elements/avatar.md"},V=Object.assign(L,{setup(e){return(s,t)=>(n(),h("div",null,[i(A(I))]))}});export{N as __pageData,V as default};
