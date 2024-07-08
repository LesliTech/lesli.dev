import{a3 as m,j as y,h as g,k as B,o as t,c as l,n as o,l as k,t as q,e as r,r as h}from"./framework.1gbG0lGE.js";const b={class:"material-icons"},v={key:1},w={__name:"Button",props:{icon:{type:String,required:!1},loading:{type:Boolean,default:!1,required:!1},solid:{type:Boolean,default:!1,required:!1},info:{type:Boolean,default:!1,required:!1},success:{type:Boolean,default:!1,required:!1},warning:{type:Boolean,default:!1,required:!1},danger:{type:Boolean,default:!1,required:!1},small:{type:Boolean,default:!1,required:!1}},emits:["click"],setup(a,{emit:u}){/*

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

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/const f=m(),c=u,e=a,n=y(!1);function d(){return e.warning?"is-warning":e.success?"is-success":e.danger?"is-danger":e.info?"is-info":"is-primary"}const p=g(()=>{let s=["button",d()];return e.solid||(s.push("is-light"),s.push("is-outlined")),e.loading&&s.push("is-loading"),e.small&&s.push("is-small"),s});return B(()=>{!("default"in f)&&e.icon&&(n.value=!0)}),(s,i)=>(t(),l("button",{onClick:i[0]||(i[0]=C=>c("click")),class:o(p.value)},[a.icon?(t(),l("span",{key:0,class:o(["icon",{"is-small":a.small}])},[k("span",b,q(a.icon),1)],2)):r("",!0),n.value?r("",!0):(t(),l("span",v,[h(s.$slots,"default")]))],2))}};export{w as _};
