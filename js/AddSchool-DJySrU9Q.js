import{u as E,c as N,ao as h,N as T,M as w,e as S,O as k,a as D,b as C,d as I,_ as L}from"./common-e1xAIXUA.js";import{u as b}from"./other-Dexeccg7.js";import"./vendor-BbAUxlw8.js";const a=i=>(Vue.pushScopeId("data-v-4a9e4109"),i=i(),Vue.popScopeId(),i),A={class:"school"},Y=a(()=>Vue.createElementVNode("span",{class:"f16"},"添加学校",-1)),j={class:"content"},x=a(()=>Vue.createElementVNode("div",{class:"left"},"学校",-1)),B={class:"right"},P=a(()=>Vue.createElementVNode("div",{class:"left"},"院系",-1)),M={class:"right"},H=a(()=>Vue.createElementVNode("div",{class:"left"},"入学时间",-1)),J={class:"right"},O={id:"trigger1"},$=a(()=>Vue.createElementVNode("div",{class:"left"},"学历",-1)),R={class:"right"},z=a(()=>Vue.createElementVNode("div",{class:"left"},"展示范围",-1)),F={class:"right"},G=Vue.defineComponent({name:"AddSchool",__name:"AddSchool",setup(i){const s=E(),d=VueRouter.useRouter(),V=b(),e=Vue.reactive({localSchool:N(s.userinfo.school),educationList:[{id:1,name:"专科"},{id:2,name:"本科"},{id:3,name:"硕士"},{id:4,name:"博士"}]});Vue.onMounted(()=>{let t=localStorage.getItem("changeSchool"),o=localStorage.getItem("changeDepartment"),u=localStorage.getItem("changeDisplayType"),l=localStorage.getItem("changeJoinTime"),n=localStorage.getItem("changeEducation");t!==null&&(e.localSchool.name=t),o!==null&&(e.localSchool.department=o),u!==null&&(e.localSchool.displayType=~~u),l!==null&&(e.localSchool.joinTime=~~l),n!==null&&(e.localSchool.education=n)});const c=Vue.computed(()=>s.userinfo.school),m=Vue.computed(()=>c.value.name!==e.localSchool.name||c.value.department!==e.localSchool.department||c.value.joinTime!==e.localSchool.joinTime||c.value.education!==e.localSchool.education?!0:c.value.displayType!==e.localSchool.displayType),g=Vue.computed(()=>e.localSchool.displayType===h.DISPLAY_TYPE.ALL?"公开可见":e.localSchool.displayType===h.DISPLAY_TYPE.SCHOOL?"校友可见":e.localSchool.displayType===h.DISPLAY_TYPE.ME?"仅自己可见":"");function _(){new T({trigger:"#trigger1",title:"学历",wheels:[{data:Array.apply(null,{length:50}).map((t,o)=>new Date().getFullYear()-o)}],callback:(t,o)=>{localStorage.setItem("changeJoinTime",o[0]),o.localSchool.joinTime=~~o[0]}}).show()}function f(){w(e.educationList,t=>{localStorage.setItem("changeEducation",t.name),e.localSchool.education=t.name})}function r(t){return t||"点击设置"}function v(t){if(!e.localSchool.name)return S("请先选择学校 ");V(t)}function y(){m.value?k("学校信息30天内只允许修改一次，是否保存修改",p,()=>{localStorage.clear(),d.back()}):(localStorage.clear(),d.back())}async function p(){m.value&&(D(),s.userinfo={...s.userinfo,school:e.localSchool},await C(500),I(),localStorage.clear(),d.back(),S("修改成功"))}return(t,o)=>{const u=Vue.resolveComponent("BaseHeader"),l=Vue.resolveComponent("dy-back");return Vue.openBlock(),Vue.createElementBlock("div",A,[Vue.createVNode(u,{onBack:y},{center:Vue.withCtx(()=>[Y]),right:Vue.withCtx(()=>[Vue.createElementVNode("div",null,[Vue.createElementVNode("span",{class:Vue.normalizeClass(["f16",m.value?"save-yes":"save-no"]),onClick:p},"保存",2)])]),_:1}),Vue.createElementVNode("div",j,[Vue.createElementVNode("div",{class:"row",onClick:o[0]||(o[0]=n=>Vue.unref(V)("/me/choose-school"))},[x,Vue.createElementVNode("div",B,[Vue.createElementVNode("span",null,Vue.toDisplayString(r(e.localSchool.name)),1),Vue.createVNode(l,{scale:"1",direction:"right"})])]),Vue.createElementVNode("div",{class:"row",onClick:o[1]||(o[1]=n=>v("/me/choose-department"))},[P,Vue.createElementVNode("div",M,[Vue.createElementVNode("span",null,Vue.toDisplayString(r(e.localSchool.department)),1),Vue.createVNode(l,{scale:"1",direction:"right"})])]),Vue.createElementVNode("div",{class:"row",onClick:_},[H,Vue.createElementVNode("div",J,[Vue.createElementVNode("span",null,Vue.toDisplayString(r(e.localSchool.joinTime)),1),Vue.createVNode(l,{scale:"1",direction:"right"}),Vue.withDirectives(Vue.createElementVNode("div",O,null,512),[[Vue.vShow,!1]])])]),Vue.createElementVNode("div",{class:"row",onClick:f},[$,Vue.createElementVNode("div",R,[Vue.createElementVNode("span",null,Vue.toDisplayString(r(e.localSchool.education)),1),Vue.createVNode(l,{scale:"1",direction:"right"})])]),Vue.createElementVNode("div",{class:"row",onClick:o[2]||(o[2]=n=>Vue.unref(V)("/me/display-type",{displayType:e.localSchool.displayType}))},[z,Vue.createElementVNode("div",F,[Vue.createElementVNode("span",null,Vue.toDisplayString(g.value),1),Vue.createVNode(l,{scale:"1",direction:"right"})])])])])}}}),U=L(G,[["__scopeId","data-v-4a9e4109"]]);export{U as default};
