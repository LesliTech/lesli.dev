import{_ as k}from"./chunks/Button.6Ng2BB4h.js";import{o as y,c as o,I as h,w as p,a as E,k as e,a5 as g}from"./chunks/framework.C2QCpDA7.js";/*
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
@website  https://www.lesli.dev
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/function c(){function i(a,s="success",n=0){n===0&&(n=1e4);var t=document.getElementById("lesli-msg-container");t||(t=document.createElement("div"),t.id="lesli-msg-container",t.className="lesli-msg");var l=document.createElement("div");l.className="lesli-msg-content";var r=document.createElement("div");r.innerHTML=a,r.classList.add("notification",`is-${s}`),l.appendChild(r),t.prepend(l),document.body.appendChild(t),setTimeout(function(){l.classList.add("hide"),setTimeout(()=>{l.parentNode.removeChild(l)},200)},n)}return{info:(a,s=0)=>i(a,"info",s),danger:(a,s=0)=>i(a,"danger",s),success:(a,s=0)=>i(a,"success",s),warning:(a,s=0)=>i(a,"warning",s)}}const m=g("",10),u=g("",3),F=g("",3),C=g("",3),_=g("",3);JSON.parse('{"title":"Messages","description":"","frontmatter":{},"headers":[],"relativePath":"../../lesli-vue/source/composables/msg/Msg.md","filePath":"../../lesli-vue/source/composables/msg/Msg.md","lastUpdated":1710639346000}');const b={name:"../../lesli-vue/source/composables/msg/Msg.md"},f=Object.assign(b,{setup(d){const i=c();return(a,s)=>(y(),o("div",null,[m,h(k,{onClick:s[0]||(s[0]=n=>e(i).info("My simple information message"))},{default:p(()=>[E(" show information ")]),_:1}),u,h(k,{success:"",onClick:s[1]||(s[1]=n=>e(i).success("My simple success message"))},{default:p(()=>[E(" show success ")]),_:1}),F,h(k,{warning:"",onClick:s[2]||(s[2]=n=>e(i).warning("My simple warning message"))},{default:p(()=>[E(" show warning ")]),_:1}),C,h(k,{danger:"",onClick:s[3]||(s[3]=n=>e(i).danger("My simple danger message"))},{default:p(()=>[E(" show danger ")]),_:1}),_,h(k,{onClick:s[4]||(s[4]=n=>e(i).info("My simple and fast message",500))},{default:p(()=>[E(" show and fast ")]),_:1})]))}}),D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/composables/msg.md","filePath":"vue/composables/msg.md","lastUpdated":1710734409000}'),B={name:"vue/composables/msg.md"},q=Object.assign(B,{setup(d){return(i,a)=>(y(),o("div",null,[h(e(f))]))}});export{D as __pageData,q as default};
