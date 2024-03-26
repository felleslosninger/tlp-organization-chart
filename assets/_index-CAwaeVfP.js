import{r as W,j as C}from"./jsx-runtime-BgQc5Su6.js";import{c as U,$ as oe,u as Re,P as fe}from"./useId-B_G5XTao.js";import{u as ie,H as Ne,L as Oe}from"./Link-C1VM7m9A.js";import{L as pe}from"./components-BdZnk4IM.js";var Y={button:"fds-button-button-13ece2ef",small:"fds-button-small-13ece2ef",medium:"fds-button-medium-13ece2ef",large:"fds-button-large-13ece2ef",fullWidth:"fds-button-fullWidth-13ece2ef",secondary:"fds-button-secondary-13ece2ef",tertiary:"fds-button-tertiary-13ece2ef",onlyIcon:"fds-button-onlyIcon-13ece2ef",primary:"fds-button-primary-13ece2ef",first:"fds-button-first-13ece2ef",second:"fds-button-second-13ece2ef",success:"fds-button-success-13ece2ef",danger:"fds-button-danger-13ece2ef",inverted:"fds-button-inverted-13ece2ef"};const ue=W.forwardRef(({children:d,color:w="first",variant:f="primary",size:g="medium",fullWidth:m=!1,icon:p=!1,type:x="button",className:L,as:N="button",asChild:j,...P},B)=>{const M=j?oe:N;return C.jsx(M,{ref:B,type:x,className:U(Y.button,ie.focusable,Y[g],Y[f],Y[w],{[Y.fullWidth]:m},{[Y.onlyIcon]:p},L),...P,children:d})});ue.displayName="Button";var re={label:"fds-label-label-b9d81987",spacing:"fds-label-spacing-b9d81987",large:"fds-label-large-b9d81987",medium:"fds-label-medium-b9d81987",small:"fds-label-small-b9d81987",xsmall:"fds-label-xsmall-b9d81987",regularWeight:"fds-label-regularWeight-b9d81987",mediumWeight:"fds-label-mediumWeight-b9d81987",semiboldWeight:"fds-label-semiboldWeight-b9d81987"};const Pe={regular:re.regularWeight,medium:re.mediumWeight,semibold:re.semiboldWeight},ge=W.forwardRef(({className:d,size:w="medium",spacing:f,as:g="label",weight:m="medium",asChild:p,...x},L)=>{const N=p?oe:g;return C.jsx(N,{ref:L,className:U(re.label,re[w],f&&re.spacing,m&&[Pe[m]],d),...x})});ge.displayName="Label";var ne={errorMessage:"fds-errormessage-errorMessage-a030a5d1",error:"fds-errormessage-error-a030a5d1",spacing:"fds-errormessage-spacing-a030a5d1",large:"fds-errormessage-large-a030a5d1",medium:"fds-errormessage-medium-a030a5d1",small:"fds-errormessage-small-a030a5d1",xsmall:"fds-errormessage-xsmall-a030a5d1"};const he=W.forwardRef(({className:d,size:w="medium",spacing:f,as:g="div",asChild:m,error:p=!0,...x},L)=>{const N=m?oe:g;return C.jsx(N,{ref:L,className:U(ne.errorMessage,ne[w],{[ne.spacing]:!!f},p&&ne.error,d),...x})});he.displayName="ErrorMessage";var We=function(d,w){var f={};for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&w.indexOf(g)<0&&(f[g]=d[g]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,g=Object.getOwnPropertySymbols(d);m<g.length;m++)w.indexOf(g[m])<0&&Object.prototype.propertyIsEnumerable.call(d,g[m])&&(f[g[m]]=d[g[m]]);return f};const Me=W.forwardRef((d,w)=>{var{title:f,titleId:g}=d,m=We(d,["title","titleId"]);let p=Re();return p=f?g||"title-"+p:void 0,W.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:w,"aria-labelledby":p},m),f?W.createElement("title",{id:p},f):null,W.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25Zm3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25h6.5ZM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13Z",fill:"currentColor"}))}),_e=Me;var Z={select:"fds-nativeselect-select-88cf3fbc",multiple:"fds-nativeselect-multiple-88cf3fbc",small:"fds-nativeselect-small-88cf3fbc",medium:"fds-nativeselect-medium-88cf3fbc",large:"fds-nativeselect-large-88cf3fbc",formField:"fds-nativeselect-formField-88cf3fbc",disabled:"fds-nativeselect-disabled-88cf3fbc",readOnly:"fds-nativeselect-readOnly-88cf3fbc",error:"fds-nativeselect-error-88cf3fbc",padlock:"fds-nativeselect-padlock-88cf3fbc",errorMessage:"fds-nativeselect-errorMessage-88cf3fbc",label:"fds-nativeselect-label-88cf3fbc"};const Te=d=>{const w=Be(d,"fieldset"),{inputProps:f}=w;return{...w,fieldsetProps:{"aria-invalid":f["aria-invalid"],"aria-describedby":f["aria-describedby"]}}};var q={fieldset:"fds-fieldset-fieldset-4ef8e1c",withSpacing:"fds-fieldset-withSpacing-4ef8e1c",description:"fds-fieldset-description-4ef8e1c",legend:"fds-fieldset-legend-4ef8e1c",readonly:"fds-fieldset-readonly-4ef8e1c",legendContent:"fds-fieldset-legendContent-4ef8e1c",padlock:"fds-fieldset-padlock-4ef8e1c",disabled:"fds-fieldset-disabled-4ef8e1c",errorWrapper:"fds-fieldset-errorWrapper-4ef8e1c"};const de=W.createContext(null),ze=W.forwardRef((d,w)=>{const{children:f,legend:g,description:m,error:p,hideLegend:x,className:L,...N}=d,{fieldsetProps:j,size:P,readOnly:B,errorId:M,hasError:H,descriptionId:le}=Te(d),X=W.useContext(de);return C.jsx(de.Provider,{value:{error:p??(X==null?void 0:X.error),errorId:H?M:void 0,size:P,disabled:d==null?void 0:d.disabled,readOnly:B},children:C.jsxs("fieldset",{...j,className:U(q.fieldset,!x&&q.withSpacing,B&&q.readonly,(d==null?void 0:d.disabled)&&q.disabled,L),ref:w,...N,children:[C.jsx(ge,{asChild:!0,size:P,children:C.jsx("legend",{className:q.legend,children:C.jsxs("span",{className:U(q.legendContent,x&&ie.visuallyHidden),children:[B&&C.jsx(_e,{className:q.padlock,"aria-hidden":!0}),g]})})}),m&&C.jsx(fe,{size:P,asChild:!0,short:!0,children:C.jsx("div",{id:le,className:U(q.description,x&&ie.visuallyHidden),children:m})}),f,C.jsx("div",{id:M,"aria-live":"polite","aria-relevant":"additions removals",className:q.errorWrapper,children:H&&C.jsx(he,{size:P,children:p})})]})})});ze.displayName="Fieldset";const Be=(d,w)=>{const f=W.useContext(de),g=W.useId(),m=d.id??`${w}-${g}`,p=d.errorId??`${w}-error-${g}`,x=`${w}-description-${g}`,L=(f==null?void 0:f.disabled)||(d==null?void 0:d.disabled),N=((f==null?void 0:f.readOnly)||(d==null?void 0:d.readOnly))&&!L||void 0,j=!L&&!N&&!!(d.error||f!=null&&f.error);return{readOnly:N,hasError:j,errorId:p,descriptionId:x,size:(d==null?void 0:d.size)??(f==null?void 0:f.size)??"medium",inputProps:{id:m,disabled:L,"aria-invalid":j?!0:void 0,"aria-describedby":U(d["aria-describedby"],{[x]:!!(d!=null&&d.description)&&typeof(d==null?void 0:d.description)=="string",[p]:j&&!(f!=null&&f.error),[(f==null?void 0:f.errorId)??""]:j&&!!(f!=null&&f.error)})||void 0}}},Fe=d=>{const w=W.useContext(de),{inputProps:f,readOnly:g,...m}=Be(d,"select");return{...m,readOnly:g,size:(w==null?void 0:w.size)??d.size,selectProps:{...f,readOnly:g,onClick:p=>{var x;if(g){p.preventDefault();return}(x=d==null?void 0:d.onClick)==null||x.call(d,p)},onChange:p=>{var x;if(g){p.preventDefault();return}(x=d==null?void 0:d.onChange)==null||x.call(d,p)}}}},ke=(d,w)=>{const f={},g={};let m=0;const p=d.length;for(;m<p;)g[d[m]]=1,m+=1;for(const x in w)Object.prototype.hasOwnProperty.call(g,x)||(f[x]=w[x]);return f},Ae=W.forwardRef((d,w)=>{const{children:f,disabled:g=!1,label:m,hideLabel:p=!1,error:x,className:L,htmlSize:N=0,...j}=d,{selectProps:P,errorId:B,readOnly:M=!1,size:H="medium"}=Fe(d);return C.jsx(fe,{asChild:!0,size:H,children:C.jsxs("div",{className:U(Z.formField,g&&Z.disabled,M&&Z.readOnly,x&&Z.error),children:[m&&C.jsxs(ge,{weight:"medium",size:H,htmlFor:P.id,className:U(Z.label,p&&ie.visuallyHidden),children:[M&&C.jsx(_e,{"aria-hidden":!0,className:Z.padlock}),m]}),C.jsx("select",{disabled:g||M,ref:w,size:N,className:U(Z.select,Z[H],ie.focusable,d.multiple&&Z.multiple,L),...ke(["size","error","errorId"],j),...ke(["readOnly","disabled"],P),children:f}),x&&C.jsx("div",{id:B,className:Z.errorMessage,"aria-live":"polite","aria-relevant":"additions removals",children:C.jsx(he,{size:H,children:x})})]})})});Ae.displayName="NativeSelect";var ae={xsmallShadow:"fds-box-xsmallShadow-22dfa097",smallShadow:"fds-box-smallShadow-22dfa097",mediumShadow:"fds-box-mediumShadow-22dfa097",largeShadow:"fds-box-largeShadow-22dfa097",xlargeShadow:"fds-box-xlargeShadow-22dfa097",defaultBorderColor:"fds-box-defaultBorderColor-22dfa097",subtleBorderColor:"fds-box-subtleBorderColor-22dfa097",strongBorderColor:"fds-box-strongBorderColor-22dfa097",smallBorderRadius:"fds-box-smallBorderRadius-22dfa097",mediumBorderRadius:"fds-box-mediumBorderRadius-22dfa097",largeBorderRadius:"fds-box-largeBorderRadius-22dfa097",xlargeBorderRadius:"fds-box-xlargeBorderRadius-22dfa097",xxlargeBorderRadius:"fds-box-xxlargeBorderRadius-22dfa097",xxxlargeBorderRadius:"fds-box-xxxlargeBorderRadius-22dfa097",xxxxlargeBorderRadius:"fds-box-xxxxlargeBorderRadius-22dfa097",fullBorderRadius:"fds-box-fullBorderRadius-22dfa097",defaultBackground:"fds-box-defaultBackground-22dfa097",subtleBackground:"fds-box-subtleBackground-22dfa097"};const Le=W.forwardRef(({shadow:d,borderColor:w,borderRadius:f,background:g="default",children:m,asChild:p=!1,as:x="div",className:L,...N},j)=>{const P=p?oe:x;return C.jsx(P,{ref:j,className:U(d&&ae[d+"Shadow"],f&&ae[f+"BorderRadius"],w&&ae[w+"BorderColor"],ae[g+"Background"],L),...N,children:m})});Le.displayName="Box";const b="och";function Ee(d,w){var xe;const{nodes:f,layouts:g,meta:m,toc:p}=d,x=m.customIdPrefix?m.customIdPrefix:b;let L=0,N={main:1500,laptop:992,tablet:768},j=((xe=document.getElementById(w))==null?void 0:xe.offsetWidth)||0,P=X(j,N).providedLayout,B=!1,M=!1,H=!1,le=!1;function X($,D){let S=g.main,_="main";const{main:O,laptop:R}=D;return $<O&&g.laptop&&(S=g.laptop,_="laptop"),$<R&&g.tablet&&(S=g.tablet,_="tablet"),{providedLayout:S,layoutName:_}}function se($){return f.find(D=>D.id===$)}function be($,D,S){const _=F("div");return _.className=`${b}-node-children`,$<=2&&!B&&(_.style.width="290px"),D.forEach((O,R)=>{const v=se(O),A=F("div");if(A.className=`${b}-node`,v){const y=v.url?F("a"):F("div");v.url&&y instanceof HTMLAnchorElement&&(y.href=v.url,y.classList.add(`${b}-node-children-anchor`)),y.id=`${x}-${v.id}`,y.setAttribute("role","treeitem"),y.setAttribute("aria-level","3"),v.url||(y.tabIndex=-1),y.innerHTML=v.title,y.className=`${b}-node ${b}-inner-node ${b}-node-child`,y.style.color=v.textColor,y.style.backgroundColor=v.backgroundColor,function(r,a,l){const n=[];return I(n,"data-arrow-down",a[r+1]||""),I(n,"data-arrow-up",r===0?l[l.length-1]:a[r-1]),n}(R,D,S).forEach(r=>{y.setAttribute(r.key,`${x}-${r.id}`)}),A.appendChild(y),_.appendChild(A)}}),_}function me($,D,S,_,O,R){const v=se($.id[0]);if(v){const A=F("div"),y=document.createElement(v.url?"a":"div");return y.id=`${x}-${v.id}`,$.children&&!R?y.setAttribute("aria-owns",je($.children,x).join(" ")):R&&y.setAttribute("aria-owns",function(r,a){const l=[];for(const n of r.rows)for(const c of n.row)l.push(...c.id.map(o=>`${a}-${o}`));return l.shift(),l}(P,x).join(" ")),y.setAttribute("role","treeitem"),y.setAttribute("aria-level",""+(R?1:2)),function(r,a,l,n,c,o,h){const u=[];if(h&&!a&&I(u,"data-arrow-down",h[0]),a)I(u,"data-arrow-right",r.rows[1].row[0].id[0]);else if(l!==1&&l!==n)I(u,"data-arrow-right",r.rows[c].row[l].id[0]),I(u,"data-arrow-left",r.rows[c].row[l-2].id[r.rows[c].row[l-2].id.length-1]);else if(l===1){const t=r.rows[c-1].row.length,e=r.rows[c-1].row[t-1].id[r.rows[c-1].row[t-1].id.length-1];n>1?(I(u,"data-arrow-right",r.rows[c].row[l].id[0]),I(u,"data-arrow-left",e)):n!==1||a?(I(u,"data-arrow-right",r.rows[c+1].row[0].id[0]),I(u,"data-arrow-left",e)):(I(u,"data-arrow-right",o?"":r.rows[c+1].row[0].id[0]),I(u,"data-arrow-left",e))}else l===n&&(I(u,"data-arrow-left",r.rows[c].row[l-2].id[r.rows[c].row[l-2].id.length-1]),o||I(u,"data-arrow-right",r.rows[c+1].row[0].id[0]));return u}(P,!!R,S,D,L,_,$.children?$.children:null).forEach(r=>{y.setAttribute(r.key,`${x}-${r.id}`)}),R&&!v.url?y.tabIndex=0:v.url||(y.tabIndex=-1),v.border&&(y.style.border=`2px ${v.border} #000`),v.url&&y instanceof HTMLAnchorElement&&(y.href=v.url),y.style.backgroundColor=v.backgroundColor,y.style.color=v.textColor,y.innerHTML=v.title,v.opacity&&(y.style.opacity=v.opacity+"%"),y.className=`${b}-node ${b}-inner-node`,A.appendChild(y),A.className=`${b}-node `,D&&D<=2&&!B&&(A.style.width="290px"),B||(A.className+=function(r,a,l,n,c,o,h,u){let t="";const e=`${b}-node-line-up`;if(!(o.length<=0))return h?t=n&&r===a-1&&J(r)?` ${e}-long`:` ${e}-${J(r)?"right-half":"left-half"} ${e}`:(a+=o.length-1)===3?t=r===1?` ${e}-right-half ${e}`:` ${e}-left-half ${e}`:a===4?n&&o.includes(2)?t=r===1?` ${e}-right ${e}`:` ${e}-left ${e}`:o.includes(1)?t=r===2?` ${e}-left-half ${e}`:` ${e}-left ${e}`:o.includes(2)?t=u?r===1?` ${e}-right ${e}`:` ${e}-left-half ${e}`:r===1?` ${e}-right-half ${e}`:` ${e}-left ${e}`:o.includes(3)&&(t=r===1?` ${e}-right ${e}`:` ${e}-right-half ${e}`):a===5?o.length===2?o.includes(1)&&o.includes(2)?t=` ${e}-${u?"right-half":"left"} ${e}`:o.includes(2)&&o.includes(3)?t=` ${e}-${u?"right-half":"right"} ${e}`:o.includes(1)&&o.includes(3)&&(t=` ${e}-${u?"left-half":"right-half"} ${e}`):n&&o.includes(4)||n&&o.includes(3)?r===1?t=` ${e}-right-half ${e}`:r===2?t=` ${e}-left-half ${e}`:r===3?t=` ${e}-right ${e}`:r===4&&(t=` ${e}-left ${e}`):o.includes(1)?t=r===2?` ${e}-${u?"left-half":"right-half"} ${e}`:r===3?` ${e}-${u?"right-half":"left-half"} ${e}`:` ${e}-${u?"left-half":"left"} ${e}`:o.includes(2)?t=r===1?` ${e}-${u?"right-half":"right"} ${e}`:r===3?` ${e}-${u?"right":"left-half"} ${e}`:n?` ${e}-${u?"left-half":"left"} ${e}`:` ${e}-${u?"right-half":"left"} ${e}`:o.includes(3)?t=r===1?` ${e}-${u?"right-half":"right"} ${e}`:r===2?` ${e}-${u?"left-half":"right-half"} ${e}`:` ${e}-${u?"left-half":"left"} ${e}`:o.includes(4)&&(t=r===1?` ${e}-right ${e}`:r===2?` ${e}-right-half ${e}`:` ${e}-left ${e}`):a===6&&(o.length===2?o.includes(1)&&o.includes(2)?t=u?n?` ${e}-${r===3?"right-half":"left-half"} ${e}`:` ${e}-${r===3?"right":"right-half"} ${e}`:` ${e}-left ${e}`:o.includes(3)&&o.includes(4)?t=u?` ${e}-${r===2?"right-half":"right"} ${e}`:` ${e}-${r===1?"right":"right-half"} ${e}`:o.includes(2)&&o.includes(3)?t=u?` ${e}-${r===1?"right-half":"left-half"} ${e}`:` ${e}-${r===1?"right":"left"} ${e}`:o.includes(2)&&o.includes(4)?t=u?` ${e}-${r===1?"right-half":"right"} ${e}`:` ${e}-${r===1?"right":"left-half"} ${e}`:o.includes(1)&&o.includes(3)?t=u?` ${e}-left-half ${e}`:` ${e}-${r===2?"right-half":"left"} ${e}`:o.includes(1)&&o.includes(4)&&(t=u?` ${e}-${r===2?"left-half":"right"} ${e}`:` ${e}-${r===2?"right-half":"left-half"} ${e}`):o.includes(1)?t=u?` ${e}-${r===3?"right":r===2?"left-half":"left"} ${e}`:` ${e}-${r===2?"right-half":r===3?"left-half":"left"} ${e}`:o.includes(2)?t=u?` ${e}-${r===1||r===4?"right-half":r===3?"right":"left-half"} ${e}`:` ${e}-${r===1?"right":r===3?"left-half":"left"} ${e}`:o.includes(3)?t=u?` ${e}-${r===1||r===4?"right":"right-half"} ${e}`:` ${e}-${r===1?"right":r===2?"right-half":"left"} ${e}`:o.includes(4)?t=u?` ${e}-${r===1?"right":r===2?"right-half":"left-half"} ${e}`:` ${e}-${r===3?"right-half":r===5?"left":"right"} ${e}`:o.includes(5)&&(t=` ${e}-${r===3?"right-half":r===4?"left-half":"right"} ${e}`)),t;if(a===1)return c==="left"?t=` ${b}-node-line-right`:c==="right"&&(t=` ${b}-node-line-left`),t;if(a===2&&c!=="offset-left"&&c!=="offset-right")return t=r===1?` ${b}-node-line-right`:` ${b}-node-line-left`,t;if(a>2&&J(a)){if(!h&&!u)return t=r<=(a-1)/2?` ${e}-right ${e}`:` ${e}-left ${e}`,t;if(u){let E=(a-1)/2,i=a-E;return t=n?r===1||J(r)&&r!==a?` ${e}-right ${e}`:` ${e}-left ${e}`:r<=E?` ${e}-right ${e}`:r>i&&!J(r)?` ${e}-left ${e}`:r===a&&a>3?` ${e}-right-long ${e}`:r===3?` ${e}-left-half ${e}`:` ${e}-right-half ${e}`,t}if(h)return t=J(r)?` ${e}-right-half ${e}`:` ${e}-left-half ${e}`,t}else{if(!(a>2))return t="",t;if(!h&&!u)return t=r<=a/2?` ${e}-right ${e}`:` ${e}-left ${e}`,t;if(u)return t=a<=4?r<=a/2?` ${e}-right ${e}`:` ${e}-left ${e}`:r===1||r===5?` ${e}-right-long ${e}`:r===a?` ${e}-right-half ${e}`:` ${e}-left ${e}`,t;if(h)return t=J(r)||r===1?` ${e}-right ${e}`:` ${e}-left ${e}`,t}}(S,D,0,_,$.alignment?$.alignment:void 0,O,M,H)),A}return null}function Ie($,D,S,_,O,R,v,A,y){const V=F("div");if(V.className=`${b}-column`,V.style.width=B?"100%":`calc(${D}% + ${_}px)`,Array.isArray($.id)&&$.id.length>1){const r=F("div");r.setAttribute("role","group"),$.children&&r.setAttribute("aria-owns",je($.children,x).join(" ")),B||M?R&&O===S&&!B?A.length===1?A.includes(4)||A.includes(2)&&S===2?r.className=`${b}-nodes-container-wrap`:r.className=`${b}-nodes-container`:A.length===2&&A.includes(4)||A.length===2&&A.includes(2)&&S===2?r.className=`${b}-nodes-container-wrap`:r.className=`${b}-nodes-container`:r.className=`${b}-nodes-container-wrap`:r.className=`${b}-nodes-container`,v===!0&&r.classList.add(`${b}-nodes-container-wrap`),B||r.classList.add(function(a,l,n,c,o,h,u){let t=`${b}-special-column`,e=n;if(n+=a.length,c||h)if(c&&!h)t+=o||l===2?"-3-right-short":"-3-left-long";else if(u&&l===n-a.length)a.length===1&&a.includes(4)||a.length===1&&a.includes(2)||a.length===2&&a.includes(4)||a.length===2&&a.includes(2)&&e===2&&l===2?t+="-3-left-short":t+="-3-center";else{let E="";J(l)||l===1?E="right":E+="left",t+=`-3-${E}-short`}else e===a.length||l===1&&n<=4?a.includes(3)&&l===3?t+=o?u?"-3-center":"-1":"-2-long":t+=`-${l}`:n===3?t+=`-${l}`:n===4?a.length===1&&(a.includes(1)&&l===1?t+="-1":t+="-2"):n===5?o?a.length===2?t+=u?l===3?"-3-center":l===1?"-1":"-2":l===1?"-1":l===2?"-2":"-1":t+=u?l>=3?"-3-center":l===1?"-1":"-2":l===1?"-1":l===2?"-2":"-1":a.length===2?a.includes(1)&&a.includes(2)?t+=`-${l}`:a.includes(2)&&a.includes(3)?t+=l===2?"-1":"-2":a.includes(1)&&a.includes(3)&&(t+=l===1?"-1-long":"-2"):a.includes(1)||a.includes(2)?a.includes(2)?t+="-1":t+="-1-long":a.includes(4)?t+="-2-long":t+="-2":n===6&&(o?a.length===2&&l===e&&u||a.length===1&&l===e&&u?t+="-3-center":a.length===2?a.includes(2)&&a.includes(1)?t+=l===1?"-1":"-2":a.includes(2)&&a.includes(3)?t+=l===2?"-2":"-1":a.includes(3)&&a.includes(4)?t+=l===3?"-2":"-1":a.includes(2)&&a.includes(4)?t+="-2":a.includes(1)&&a.includes(3)?t+="-1":a.includes(1)&&a.includes(4)&&(t+="-"+(l===1?"1":"2")):t+=l===1||l===4||l===5?"-1":"-2":a.length===2?a.includes(1)&&l===1?t+="-1-long":a.includes(2)&&!a.includes(1)&&l===2?t+="-1":a.includes(4)&&l===4?t+="-2-long":(a.includes(3),t+="-2"):t+=l<=2?"-"+(l===1?"1-long":"1"):"-"+(l===4?"2":"2-long"));return t}(A,O,S,v,H,M,R)),$.id.forEach((a,l)=>{const n=se(a);if(n){const c=F("div");c.className=`${b}-node `;const o=document.createElement(n.url?"a":"div");o.className=`${b}-inner-node`,o.id=`${x}-${a}`,n.border&&(o.style.border=`2px ${n.border} #000`),n.url&&o instanceof HTMLAnchorElement&&(o.href=n.url),function(u,t,e,E,i,s,G){const z=[];let T=E;if(s&&I(z,"data-arrow-down",s[0]),G===0)if(I(z,"data-arrow-right",u.rows[T].row[t-1].id[1]),t===1){const Q=u.rows[T-1].row.length;I(z,"data-arrow-left",u.rows[T-1].row[Q-1].id[u.rows[T-1].row[Q-1].id.length-1])}else I(z,"data-arrow-left",u.rows[T].row[t-2].id[u.rows[T].row[t-2].id.length-1]);else I(z,"data-arrow-left",u.rows[T].row[t-1].id[0]),e===t&&i?I(z,"data-arrow-right",""):e===t?I(z,"data-arrow-right",u.rows[T+1].row[0].id[0]):I(z,"data-arrow-right",u.rows[T].row[t].id[0]);return z}(P,O,S,L,R,$.children?$.children:null,l).forEach(u=>{o.setAttribute(u.key,`${x}-${u.id}`)}),!n.url&&(o.tabIndex=-1),o.style.backgroundColor=n.backgroundColor,o.style.color=n.textColor,o.innerHTML=n.title,o.setAttribute("role","treeitem"),o.setAttribute("aria-level","2"),c.appendChild(o),r.appendChild(c)}}),V.appendChild(r)}else{const r=me($,S+1,O,R,A);r!==null&&V.appendChild(r)}return $.children&&!y&&V.appendChild(be(3,$.children?$.children:[],$.id)),V}function Se($,D,S){const _=F("div");let O=`${b}-row ${b}-row-normal`;var R;(R=$.row.length)%2!=0&&R!==1||B||$.row.length<=2&&(O+=` ${b}-row-center`);let v=0,A=!1;$.row.forEach(r=>{Array.isArray(r.id)&&r.id.length>1&&(A=!0)});let y=[];A&&$.row.forEach((r,a)=>{r.id.length>1&&y.push(a+1)}),D&&(O=function(r,a,l,n,c,o){let h=r.row.length;return c&&o&&(h+=o.length),!a&&h>=5?o.length>=2?`${b}-row ${b}-row-last-${h}${l?"-laptop":n?"-tablet":""}-2-s-cols`:h===5&&o.length>=1?`${b}-row ${b}-row-last-${h}${l?"-laptop":n?"-tablet":""}-1-s-cols`:`${b}-row ${b}-row-last-${h}${l?"-laptop":n?"-tablet":""}`:!a&&h>=2?o.length&&h===3&&n||o.length&&h===3&&l?`${b}-row ${b}-row-last-${h}-1-s-cols`:c?`${b}-row`:`${b}-row ${b}-row-last-${h}${n?"-tablet":""}`:!a&&h<=2?`${b}-row ${b}-row-last-${h}`:`${b}-row`}($,B,H,M,A,y)),_.className=O;let V=!1;return $.row.forEach(r=>{r.alignment!=="offset-left"&&r.alignment!=="offset-right"||(V=!0)}),$.row.forEach(r=>{v++;const a=function(l,n,c,o,h,u,t,e){let E="",i=100,s=0,G=!1;const{main:z,laptop:T,tablet:Q}=o;return u?(E=` ${b}-special-row`,(l+=t.length)===2&&(i=50,s=-12,h||(s=-12,E+=` ${b}-special-row-1-column`)),c>z?l===3?h?t.includes(n)?(i=100/3*2,s=24):i=100/3:(i=50,s=-12):l===4?t.length<2?h?i=t.includes(n)?50:25:t.includes(2)?n===1?(i=50,s=-12):n===2?(i=50/3*2,s=-18):n===3?(i=50/3,s=-18):(i=50,s=-24):t.includes(n)?(i=50,s=-12):(i=25,s=-18):h?i=t.includes(n)?50:25:(i=50,s=-12):l===5?t.length===2?h?t.includes(n)?(i=40,s=24):i=20:t.includes(1)?t.includes(2)?t.includes(3)||(n===1?(i=50,s=-12):n===2?(i=50/3*2,s=-18):(i=50/3,s=-18)):n===1?(i=50/3*2,s=-18):n===2?(i=50/3,s=-18):(i=50,s=-12):n===1?(i=50/3,s=-18):n===2?(i=50/3*2,s=-18):(i=50,s=-12):h?t.includes(n)?(i=40,s=26):i=20:t.includes(n)?(i=50/3*2,s=-24):t[0]>=3?n<3?(i=25,s=-18):(i=50/3,s=-12):t[0]<=2&&(n>2?(i=25,s=-18):(i=50/3,s=-12)):l===6&&(t.length===3?h?i=100/3:n===1?(i=50,s=-12):n===2?(i=50/3*2,s=-18):(i=50/3,s=-18,G=!0):t.length===2?h?i=t.includes(n)?100/6*2:100/6:t.includes(1)&&t.includes(2)?n===1?i=50/3*2:n===2?(i=50/3,G=!0):i=25:t.includes(3)&&t.includes(4)?n<=2?i=25:n===3?i=50/3*2:(i=50/3,G=!0):i=t.includes(n)?50/3*2:50/3:h?i=t.includes(n)?100/6*2:100/6:t.includes(3)?n<=2?(i=25,s=-18):(i=50/3,G=!0,s=-20):t.includes(n)?(i=50/3*2,s=26):i=50/3):c<=z&&c>T?l===3?h?t.includes(n)?(i=100/3*2,s=24):i=100/3:i=50:l===4?h?t.includes(n)?(i=50,s=-12):(i=25,s=-18):t.length===2?i=50:t.includes(2)?n===3?(i=50,s=-12):(i=25,s=-18,G=!0):t.includes(n)?(i=50,s=-12):(i=25,s=-18):l===5?h?t.length===1?t.includes(3)||t.includes(4)?t.includes(n)?(i=100/3*2,s=-8):n<3?(i=50,s=-12):(i=100/3,s=-16):(i=50,s=-12):n===3&&t.includes(n)?i=100:(i=50,s=-12):t.length===2||t.includes(n)||n===1||t.includes(3)||t.includes(1)?(i=50,s=-12):(i=25,s=-18):l===6&&(t.length===3?h&&n===3?i=100:(i=50,s=-12):t.length===2?h?t.includes(1)&&t.includes(2)?(i=50,s=-12):t.includes(3)&&t.includes(4)?t.includes(n)?n===3?(i=50,s=-12):i=100:(i=25,s=-18):(t.includes(1)&&!t.includes(2)||t.includes(2)&&!t.includes(1))&&(n<=2?(i=50,s=-12):t.includes(n)?(i=100/3*2,s=-8):(i=100/3,s=-16)):t.includes(1)&&t.includes(2)||t.includes(3)&&t.includes(4)?t.includes(n)?(i=50,s=-12):(i=25,s=-18):(i=50,s=-12):t.includes(n)?n===5&&h?i=100:(i=50,s=-12):t[0]<=2?n<=2||n===5?(i=50,s=-12):(i=25,s=-18):t[0]===4?n>=3?(i=50,s=-12):(i=25,s=-18):t.includes(n)?(i=50,s=-12):(i=25,s=-18)):c<=T&&c>Q&&(h&&l-1===n?l===5&&t.includes(l-2)||l===5&&t.length===1||l===3&&t.length===1?(i=50,s=-12):i=100:n===3&&t.length===3&&h||t.length===2&&l===5&&n===3&&h?i=100:(i=50,s=-12))):(l<=2&&e&&(i=50),l>2&&J(l)?(c>z&&(h?i=100/l:n<l/2?(i=100/(l-1),s=24/((l-1)/2)):i=50/(l-(l-1)/2)),c<=z&&c>T&&(h?l>3?n<=2?(i=50,s=-12):(i=100/3,s=-16):(i=100/3,s=-(24-24/l)):l>4?(i=25,s=-(24-(l+1))):n<l/2?(i=100/(l-1),s=-12):(i=50/(l-(l-1)/2),s=-(24-(l+3)))),c<=T&&c>Q&&(l>2?(i=50,s=-12):n<l/2?(i=100/(l-1),s=-12):(i=50/(l-(l-1)/2),s=-(24-(l+3))))):l>2&&(c>Q&&(i=100/l),c<=z&&c>T&&(i=25,s=-18),c<=T&&c>Q&&(i=50,s=-12))),{width:i,additionalWidth:s,additionalClass:E,wrapNodesWrapper:G}}($.row.length,v,j,N,D,A,y,V);A?_.appendChild(Ie(r,a.width,$.row.length,a.additionalWidth,v,D,a.wrapNodesWrapper,y,!1)):_.appendChild(function(l,n,c,o,h,u,t,e){const E=F("div");E.className=`${b}-column`,l.alignment&&c<=2&&!B&&(E.className+=` ${b}-column-alignment-${c}-${l.alignment}`,c<=2&&(l.alignment==="offset-left"||l.alignment==="offset-right")&&E.classList.add(`${b}-column-line-${l.alignment}`)),c!==2||h!==1||B?c!==2||h!==2||B||(E.className+=` ${b}-column-flex-start`):E.className+=` ${b}-column-flex-end`;const i=me(l,c,h,u,t,e);return E.style.width=B?"100%":`calc(${n}% + ${o}px)`,i!==null&&E.appendChild(i),l.children&&!e&&E.appendChild(be(c,l.children,l.id)),E}(r,a.width,$.row.length,a.additionalWidth,v,D,y,S)),_.className+=" "+a.additionalClass}),!B&&!D&&_.classList.add(`${b}-row-line`),!le&&$.row.length>2&&_.classList.add(`${b}-wrap`),B&&$.row.length===2&&_.classList.add(`${b}-wrap`),!B&&D&&_.style.setProperty("--diff",function(r,a,l,n,c){let o=0;if(c.length>0){if(a+=c.length,l){if(a===4)o=k(r,0,1);else if(a===5)if(c.length===1)o=k(r,0,1)-k(r,2,3);else{let h=k(r,0,0),u=k(r,1,1),t=k(r,2,2);o=ee(h,u)-t}else if(a===6){let h=0;h=c.length>=2||c.includes(4)||c.includes(3)?k(r,0,2):c.includes(2)||c.includes(1)?k(r,0,1):k(r,0,3),o=h}}else if(n){if(a===4)o=k(r,0,1)-k(r,2,2);else if(a===5)if(c.length===1){let h=c.includes(1)?k(r,0,0)+1:k(r,0,0),u=c.includes(2)?k(r,1,1)+1:k(r,1,1),t=c.includes(3)?k(r,2,2)+1:k(r,2,2),e=c.includes(4)?k(r,3,3)+1:k(r,3,3);o=ee(h,u)-ee(t,e)}else{let h=c.includes(1)?k(r,0,0)+1:k(r,0,0),u=c.includes(2)?k(r,1,1)+1:k(r,1,1),t=k(r,2,2);o=ee(h,u)-t}else if(a===6)if(c.length===3)o=k(r,0,1)+1-k(r,2,2);else if(c.length>=2){let h=c.includes(1)?k(r,0,0)+1:k(r,0,0),u=c.includes(2)?k(r,1,1)+1:k(r,1,1),t=c.includes(3)?k(r,2,2)+1:k(r,2,2),e=c.includes(4)?k(r,3,3)+1:k(r,3,3);o=ee(h,u)-ee(t,e)}else o=k(r,0,1)+k(r,2,3)}}else l&&(a===5&&(o=k(r,0,1)),a===6&&(o=k(r,0,2))),n&&(a>=5&&(o=k(r,0,1)+k(r,2,3)),a===4&&(o=k(r,0,1)-k(r,2,3)),a===3&&(o=k(r,0,1)-k(r,2,2)));return o.toString()}($,$.row.length,H,M,y).toString()),_}function $e($){const D=F("div");D.className=`${b}-rows`,D.setAttribute("role","tree"),D.setAttribute("aria-label",m.title),D.role="tree";const S=$.rows.length;let _=!1,O=!1;return $.rows.forEach((R,v)=>{v===S-1&&(_=!0),O=v===0,D.appendChild(Se(R,_,O)),L=v+1}),D}function we($){let D=`${b}-org-chart`;return $<N.main&&g.laptop&&(D=`${b}-org-chart`),$<N.laptop&&g.tablet&&(D=`${b}-org-chart`),D}const K=document.getElementById(w);if(K){const $=document.createElement("div");$.className=we(j),$.setAttribute("lang",m.langcode),$.setAttribute("aria-label",m.title),j=K.offsetWidth,B=j<N.tablet,H=j<N.main&&j>N.laptop,M=j<N.laptop&&j>N.tablet,le=j>N.main,$.appendChild(ye(p,B)),$.appendChild($e(P));let D=ve(j);const S=()=>{j=K.offsetWidth,B=j<N.tablet,H=j<N.main&&j>N.laptop,M=j<N.laptop&&j>N.tablet,le=j>N.main,function(R,v){switch(R){case"main":return v<1500;case"laptop":return v>1500||v<992;case"tablet":return v>992||v<768;case"mobile":return v>768;default:return!1}}(D,j)&&(D=ve(j),P=X(j,N).providedLayout,$.className=we(j),$.innerHTML="",$.appendChild(ye(p,B)),$.appendChild($e(P)),Ce(K))};let _=null;const O=()=>{_===null&&(_=setTimeout(()=>{S(),_=null},100))};return new ResizeObserver(()=>{requestAnimationFrame(O)}).observe(K),K.innerHTML="",K.appendChild($),K.className=`${b}-org-chart-main-container`,Ce(K),K}return null}function Ce(d){const w=new MutationObserver(()=>{d.removeEventListener("keydown",f)}),f=g=>{const m=document.activeElement;let p;switch(g.key){case"ArrowRight":p=m==null?void 0:m.getAttribute("data-arrow-right");break;case"ArrowLeft":p=m==null?void 0:m.getAttribute("data-arrow-left");break;case"ArrowDown":p=m==null?void 0:m.getAttribute("data-arrow-down");break;case"ArrowUp":p=m==null?void 0:m.getAttribute("data-arrow-up")}if(p){const x=document.getElementById(p);x&&(x.focus(),g.preventDefault())}};d.addEventListener("keydown",f),w.observe(d,{childList:!0,subtree:!0})}function F(d){return document.createElement(d)}function J(d){return d%2!=0}function ve(d){return d>1500?"main":d>992?"laptop":d>768?"tablet":"mobile"}function ee(d,w){return d>=w?d:w}function k(d,w,f){var m,p;let g=0;for(let x=w;x<=f;x++){const L=((p=(m=d.row[x])==null?void 0:m.children)==null?void 0:p.length)??0;L>g&&(g=L)}return g}function ye(d,w){const f=F("ul");return f.classList.add(`${b}-toc-box`),w&&f.classList.add(`${b}-toc-box-mobile`),d.forEach(g=>{const m=F("li");m.className=`${b}-toc-item`;const p=F("span");p.className=`${b}-toc-item-color`,p.style.background=g.color,m.appendChild(p);const x=F("span");x.innerHTML=g.title,m.appendChild(x),f.appendChild(m)}),f}function I(d,w,f){d.push({key:w,id:f})}function je(d,w){const f=[];return d.forEach(g=>{f.push(`${w}-${g}`)}),f}(function(d,w,f){d.generateOrgChart=Ee})(window);const He={title:"Avdelinger og seksjoner",langcode:"no",customIdPrefix:"avdSek"},Ve=[{title:"Direktør",color:"#0062BA"},{title:"Avdeling",color:"#1e2b3c"},{title:"Seksjon",color:"#D2D5D8"}],Ue=[{title:"Direktør",id:"dir",backgroundColor:"#0062BA",textColor:"white",url:"https://www.digdir.no/digdir/leiinga/928"},{title:"Kommunikasjon",id:"kom",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=1"},{title:"Tilsynet for universell utforming av ikt",id:"tuu",backgroundColor:"#95227D",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=4"},{title:"Verksomhetsstyring",id:"verk",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=3"},{title:"HR",id:"hr",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=2"},{title:"Samanhengande tjenester og livshendelser",id:"sam",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=5"},{title:"Seksjon 1",id:"sek1",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Seksjon 2",id:"sek2",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Digital strategi og samhandling",id:"dig",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=6"},{title:"Nasjonal arkitektur",id:"ark",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Internasjonalt og analyse",id:"int",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Nasjonalt ressurssenter for deling og bruk av data",id:"nasjRes",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Statends kompetansemiljø for infomrasjonssikkerhet",id:"ski",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Fellesløsninger",id:"fel",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=7"},{title:"Strategi og forretningsutvikling",id:"str",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Utvikling",id:"utvlFel",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Marknad- og tjenesteoppfølgning",id:"mar",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Brukerstøtte og service",id:"bru",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Drift og sikkerhet",id:"dri",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Brukaropplevning og datadeling",id:"bod",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=8"},{title:"Strategi og forretningsutvikling",id:"str2",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Utvikling",id:"utvBod",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Plattform og styring",id:"platt",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Brukerstøtte og service",id:"bruSer",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"},{title:"Brukaropplevning",id:"bruk",backgroundColor:"#D2D5D8",textColor:"#1e2b3c"}],Ke={main:{rows:[{row:[{id:["dir"],alignment:"center"}]},{row:[{id:["kom"],alignment:"center"},{id:["tuu"],alignment:"offset-right"}]},{row:[{id:["verk"],alignment:"center"},{id:["hr"],alignment:"center"}]},{row:[{id:["sam"],alignment:"center",children:["sek1","sek2"]},{id:["dig"],alignment:"center",children:["ark","int","nasjRes","ski"]},{id:["fel"],alignment:"center",children:["str","utvlFel","mar","bru","dri"]},{id:["bod"],alignment:"center",children:["str2","utvBod","platt","bruSer","bruk"]}]}]}},Ze={meta:He,toc:Ve,nodes:Ue,layouts:Ke},qe={title:"Leveranseområder",langcode:"no",customIdPrefix:"lev"},Je=[{title:"Direktør",color:"#0062BA"},{title:"Avdeling",color:"#1e2b3c"},{title:"Leveranseområde",color:"#f28b82"},{title:"Produktgruppe",color:"#aecbfa"}],Ge=[{title:"Direktør",id:"dir",backgroundColor:"#0062BA",textColor:"white",opacity:"70",url:"https://www.digdir.no/digdir/leiinga/928"},{title:"Kommunikasjon",id:"kom",backgroundColor:"#1e2b3c",textColor:"white",opacity:"70",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=1"},{title:"Tilsynet for universell utforming av ikt",id:"tuu",backgroundColor:"#95227D",textColor:"white",opacity:"70",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=4"},{title:"Verksomhetsstyring",id:"verk",backgroundColor:"#1e2b3c",textColor:"white",opacity:"70",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=3"},{title:"HR",id:"hr",backgroundColor:"#1e2b3c",textColor:"white",opacity:"70",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=2"},{title:"Tverrgåande tjenester",id:"tverr",backgroundColor:"white",textColor:"#1e2b3c",border:"dashed"},{title:"Samanhengande tjenester og livshendelser",id:"sam",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=5"},{title:"Livshendingar",id:"liv",backgroundColor:"#f28b82",textColor:"black"},{title:"Digitaliseringsrådet",id:"dig",backgroundColor:"#f28b82",textColor:"black"},{title:"Medfinansieringsordninga",id:"medf",backgroundColor:"#f28b82",textColor:"black"},{title:"Stimulab",id:"stim",backgroundColor:"#f28b82",textColor:"black"},{title:"Digihjelpen",id:"digihjelpen",backgroundColor:"#f28b82",textColor:"black"},{title:"Innovation@digdir.no",id:"inno",backgroundColor:"#f28b82",textColor:"black"},{title:"Digital strategi og samhandling",id:"digss",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=6"},{title:"Fellessystem",id:"felles",backgroundColor:"#f28b82",textColor:"black"},{title:"Deling av data og informasjonsforvaltning",id:"deling",backgroundColor:"#f28b82",textColor:"black"},{title:"Internasjonalt arbeid",id:"inter",backgroundColor:"#f28b82",textColor:"black"},{title:"Informasjonssikkerhet",id:"info",backgroundColor:"#f28b82",textColor:"black"},{title:"Kunnskap og analyse",id:"kunn",backgroundColor:"#f28b82",textColor:"black"},{title:"Skate",id:"skate",backgroundColor:"#f28b82",textColor:"black"},{title:"Fellesløsninger",id:"fel",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=7"},{title:"Brukaropplevning og datadeling",id:"bod",backgroundColor:"#1e2b3c",textColor:"white",url:"https://www.digdir.no/digdir/ansatte/942?combine=&field_department_value=8"},{title:"Tillitstjenester",id:"tillit",backgroundColor:"#aecbfa",textColor:"black"},{title:"Datadeling",id:"data",backgroundColor:"#aecbfa",textColor:"black"},{title:"Meldingsutveksling",id:"meld",backgroundColor:"#aecbfa",textColor:"black"},{title:"Portaler og brukeropplevelse",id:"port",backgroundColor:"#aecbfa",textColor:"black"},{title:"Tjenesteutvikling",id:"tjen",backgroundColor:"#aecbfa",textColor:"black"},{title:"Innsyn og oppslag",id:"innsyn",backgroundColor:"#aecbfa",textColor:"black"}],Qe={main:{rows:[{row:[{id:["dir"],alignment:"center"}]},{row:[{id:["tuu"],alignment:"offset-right"}]},{row:[{id:["kom"],alignment:"center"},{id:["hr"],alignment:"center"}]},{row:[{id:["verk"],alignment:"center"},{id:["tverr"],alignment:"center"}]},{row:[{id:["sam"],alignment:"center",children:["liv","dig","medf","stim","digihjelpen","inno"]},{id:["digss"],alignment:"center",children:["felles","deling","inter","info","kunn","skate"]},{id:["fel","bod"],alignment:"center",children:["tillit","data","meld","port","tjen","innsyn"]}]}]}},Xe={meta:qe,toc:Je,nodes:Ge,layouts:Qe},ce={avdelinger:Ze,leveranseomrader:Xe},Ye="_wrapper_1p5kw_1",et="_select_1p5kw_9",De={wrapper:Ye,select:et},tt=()=>{const[d,w]=W.useState(ce.avdelinger);W.useEffect(()=>{Ee(d,"chart")},[d]);const f=g=>{const m=g.target.value;w(ce[m])};return C.jsxs(C.Fragment,{children:[C.jsx("div",{className:De.select,children:C.jsx(Ae,{label:"Velg ett kart",onChange:f,children:Object.keys(ce).map(g=>C.jsx("option",{value:g,children:g.charAt(0).toUpperCase()+g.slice(1)},g))})}),C.jsx("div",{className:De.wrapper,children:C.jsx("div",{id:"chart"})})]})},rt="_box_1gcyp_1",lt="_heading_1gcyp_6",it="_subheading_1gcyp_20",nt="_buttons_1gcyp_25",at="_whiteButton_1gcyp_31",dt="_betaTag_1gcyp_40",te={box:rt,heading:lt,subheading:it,buttons:nt,whiteButton:at,betaTag:dt};function ot(){return C.jsxs(Le,{borderRadius:"xxlarge",className:te.box,children:[C.jsx("div",{className:te.betaTag,children:"Beta"}),C.jsxs(Ne,{className:te.heading,size:"3xlarge",children:["Tilgjengelige ",C.jsx("span",{children:"organisasjonskart"})," på nett"]}),C.jsx(fe,{className:te.subheading,children:"Et lett og tilgjengelig JavaScript bibliotek for å vise organisasjonskart på nettsider."}),C.jsx(Oe,{href:"https://www.npmjs.com/package/@digdir/organisation-chart",target:"_blank",title:"Latest release of npm package",children:C.jsx("img",{src:"https://img.shields.io/npm/v/@digdir/organisation-chart?label=latest%20release&color=0051be",alt:"Latest release of npm package"})}),C.jsxs("div",{className:te.buttons,children:[C.jsx(ue,{asChild:!0,className:te.whiteButton,children:C.jsx(pe,{to:"/dokumentasjon",children:"Dokumentasjon"})}),C.jsx(ue,{asChild:!0,variant:"secondary",color:"inverted",children:C.jsx(pe,{to:"/endringslogg",children:"Endringslogg"})})]})]})}const gt=()=>[{title:"Organisation Chart"},{name:"description",content:"Display an accessible organisational chart on any website"}];function ht(){return C.jsxs("div",{style:{width:"100%"},children:[C.jsx(ot,{}),C.jsx(Ne,{level:2,size:"large",spacing:!0,children:"Eksempel på et organisasjonskart"}),C.jsx(tt,{})]})}export{ht as default,gt as meta};
