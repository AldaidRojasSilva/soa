(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1747],{31747:function(e,a,t){"use strict";t.d(a,{Z:function(){return eM}});var i=t(99221),r=t(50959),n=t(91968),o=t.n(n),l=t(83357),c=t(45924),s=t(79247),d=t(60173),m=t(5477),u=t(41734),p=t(46989),h=t(83982),Z=t.n(h),g=t(57479),v=t(67165),_=t(13893),f=t(29531),x=t(40863),b=t(23722),y=t(92787),w=t(8304),N=t(66004),k=t(66467);let C=e=>"/"!==e&&!["/programas/viva+","/programas/maternidad","/citas/agendar","/libro-de-reclamaciones","/politica-tratamiento-datos","/terminos-y-condiciones","/especialidades","/directorio-medico","/nosotros","/citas","/convenios","/sedes"].find(a=>e.includes(a)),B=e=>["/programas","/programas/viva+","/programas/maternidad"].includes(e)?"Solicitar m\xe1s informaci\xf3n":"Cont\xe1ctenos",X=e=>{if(e.includes("/especialidades"))return"57963486620";if(e.includes("/programas/viva+"))return"51993472773";if(e.includes("/programas/maternidad"))return"51992084274";let a="/procedimientos",t="51963486620",i="51915159056",r="51991521454";if(e.includes(a)){var n;return null!==(n=({["".concat(a,"/cirugia-bariatrica")]:i,["".concat(a,"/gracias-bariatrica")]:i,["".concat(a,"/medicina-fetal")]:"51963485496",["".concat(a,"/gastro-2")]:r,["".concat(a,"/gracias-gastro")]:r,["".concat(a,"/parto-humanizado")]:"51992084274"})[e])&&void 0!==n?n:t}return t};var L=t(66427),O=t(75612);let P=e=>{let{className:a}=e,t=(0,l.useRouter)(),{openSidebar:r,isMobile:n}=(0,w.$)(),{openDialog:o,openConfirmAlert:c,handleOpenContactModal:s,onTryCloseForm:d,onCloseForm:m,onBackToForm:u,setIsSended:p,setOpenConfirmAlert:h}=(0,O.Z)(),P=(0,L.G)("(min-width: 960px)",!1),F=(0,L.G)("(min-width: 648px)",!1);return r?null:(0,i.BX)(g.Z,{className:a,sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.8rem",position:"fixed",right:n?5:30,bottom:20,zIndex:100},children:[(0,i.tZ)(g.Z,{component:Z(),...(0,k.g)({name:"whatsapp-flotante",pathname:t.asPath,type:"link"}),target:"_blank",width:"fit-content",href:"https://api.whatsapp.com/send?phone=".concat(X(t.asPath)),children:(0,i.tZ)(b.N6,{size:n?60:64})}),C(t.asPath)&&(0,i.BX)(g.Z,{component:"button",display:"flex",alignItems:"center",position:"relative",...(0,k.g)({name:"contactenos-flotante",pathname:t.asPath,type:"button"}),gap:"1.9rem",sx:{cursor:"pointer"},onClick:s,children:[(0,i.BX)(g.Z,{display:"flex",justifyContent:"center",alignItems:"center",bgcolor:N.O9.primary_dark,p:"0.8rem 1.6rem",borderRadius:"2.4rem",position:"relative",children:[(0,i.tZ)(v.Z,{variant:n?"body3_semi_bold":"body2_bold",color:N.O9.white,component:"p",children:B(t.asPath)}),(0,i.tZ)(g.Z,{position:"absolute",right:-12,children:(0,i.tZ)(b.gY,{size:16,color:N.O9.primary_dark})})]}),(0,i.tZ)(g.Z,{bgcolor:N.O9.primary_dark,borderRadius:"3.2rem",display:"flex",p:P?"1.26rem":"1.276rem",children:(0,i.tZ)(b.i_,{size:P?36:30})})]}),(0,i.tZ)(y.P0,{id:"contactanos",open:o,onClose:d,fullScreen:n,children:(0,i.tZ)(x.PU,{modalFn:()=>{t.push("".concat(t.asPath,"/gracias")),p(!0),m()}})}),(0,i.tZ)(y.aR,{title:"\xbfSeguro que deseas cerrar el formulario?",description:"Tus datos a\xfan han sido enviados",open:c,setOpen:h,customFooter:(0,i.BX)(_.Z,{width:"100%",justifyContent:"center",alignItems:"center",direction:F?"row":"column-reverse",spacing:n?"0.8rem":"2.4rem",children:[(0,i.tZ)(f.Z,{onClick:u,variant:F?"outlined":"text",sx:{width:F?"14.8rem":"100%",alignSelf:"center"},children:"Cancelar"}),(0,i.tZ)(f.Z,{...(0,k.g)({name:"cerrar-formulario-contacto",pathname:t.asPath,description:"Se abri\xf3 el formulario de contacto flotante, pero se cerr\xf3 sin enviarlo",type:"button"}),onClick:m,sx:{width:F?"14.8rem":"100%",alignSelf:"center"},children:"Aceptar"})]})})]})};var F=t(33929),I=t.n(F),M=t(43176),S=t(53922),z=t(42674),E=t(78375);let R={closed:{rotate:0,translateY:0},opened:{rotate:45,translateY:2}},D={closed:{opacity:1},opened:{opacity:0}},q={closed:{rotate:0,translateY:0},opened:{rotate:-45,translateY:-2}};function A(e){let{isOpen:a=!1,closedColor:t="#000",openedColor:r="#000",width:n=24,height:o=24,...l}=e,c=4*n/o,s={stroke:a?r:t,strokeWidth:2.67,vectorEffect:"non-scaling-stroke",initial:"closed",animate:a?"opened":"closed",strokeLinecap:"round",transition:{type:"spring",stiffness:260,damping:20}};return(0,i.BX)(E.E.svg,{viewBox:"0 0 ".concat(c," ").concat(4),overflow:"visible",preserveAspectRatio:"none",width:n,height:o,...l,children:[(0,i.tZ)(E.E.line,{x1:"0",x2:c,y1:"0",y2:"0",variants:R,...s}),(0,i.tZ)(E.E.line,{x1:"0",x2:c,y1:"2",y2:"2",variants:D,...s}),(0,i.tZ)(E.E.line,{x1:"0",x2:c,y1:"4",y2:"4",variants:q,...s})]})}var j=t(71937),Y=t.n(j);let T=()=>{let{openSidebar:e,toggleSidebar:a}=(0,w.$)();return(0,i.tZ)(i.HY,{children:(0,i.tZ)("button",{onClick:a,className:Y().root,children:(0,i.tZ)(A,{isOpen:e,closedColor:"var(--color-primary)",openedColor:"var(--color-primary)",width:22,height:18})})})};var W=t(23202),G=t(48496),H=t(57331),U=t(68063);let K={isLoading:!1},$=(0,U.Ue)(e=>({...K,openLoader:()=>e(()=>({isLoading:!0})),closeLoader:()=>e(()=>({isLoading:!1}))})),V=()=>{let{isLoading:e,openLoader:a,closeLoader:t}=$(),i=(0,l.useRouter)();(0,r.useEffect)(()=>(i.events.on("routeChangeStart",n),i.events.on("routeChangeComplete",o),()=>{i.events.off("routeChangeStart",n),i.events.off("routeChangeComplete",o)}),[]);let n=()=>{a()},o=()=>{t()};return{isLoadingPage:e}};var J=t(87109),Q=t(65248),ee=t(57775),ea=t.n(ee),et=e=>{let{setKeyList:a,setIsDrawerOpen:t,itemsNavbar:n}=e,{isMobile:o}=(0,w.$)(),{user:l}=(0,W.aC)(),{isLoadingPage:c}=V(),[s,d]=(0,r.useState)(null),m=(0,r.useRef)(null),u=(e,i)=>{a(e),d(e),m.current=setTimeout(()=>{t(i)},400)},p=()=>{m.current&&clearTimeout(m.current),setTimeout(()=>{d(null)},400)};return(0,i.BX)(i.HY,{children:[(0,i.tZ)("section",{className:ea()["navbar-wrapper"],children:(0,i.BX)("nav",{className:ea()["nav-container"],children:[(0,i.tZ)("section",{className:ea()["logo-container"],children:(0,i.tZ)(Z(),{href:"/",onClick:()=>t(!1),children:(0,i.tZ)(I(),{className:ea().logo,src:H.fd,alt:"Aviva logo",quality:100,loading:"eager",width:o?88:130,height:o?33:50})})}),(0,i.BX)("section",{className:ea()["nav-bar"],children:[(0,i.tZ)("ul",{children:null==n?void 0:n.slice(1).filter(e=>"Sedes"!==e.name).map(e=>{var a;return e.sub_pages.length>0||e.more_items.length>0?(0,i.tZ)(g.Z,{component:"li",onMouseOver:()=>u(e.name,!0),onMouseLeave:p,children:(0,i.tZ)(S.u6,{href:"/".concat(e.page.slug),size:"large",color:"var(--color-black)",text:"".concat(e.name),classNameLink:ea()["dropdown-item"],customIcon:a=>(0,i.tZ)(z.c,{color:a,rotate:s===e.name})})},e.id):(0,i.tZ)(g.Z,{component:"li",onMouseOver:()=>u(e.name,!1),children:(null===(a=e.page)||void 0===a?void 0:a.slug)?(0,i.tZ)(S.u6,{classNameLink:ea()["nav-item"],href:"/".concat(e.page.slug),color:N.O9.black,text:e.name,size:"large",disableIcon:!0}):(0,i.tZ)(v.Z,{variant:"body3",sx:{fontWeight:400,color:"var(--color-neutral-1000)"},children:e.name})},e.id)})}),(0,i.tZ)(f.Z,{variant:"outlined",className:ea()["schedule-btn"],size:"small",LinkComponent:Z(),href:"/citas",onClick:()=>(0,J.Z)("inicio_reserva_cita",{origen:"menu"}),children:"Reserva tu cita"}),l?(0,i.tZ)(Q.G,{user:l}):(0,i.tZ)(f.Z,{className:ea()["login-btn"],size:"small",LinkComponent:Z(),href:G.wm,children:"Portal Mi aviva"}),(0,i.tZ)(T,{})]})]})}),c&&(0,i.tZ)(M.Z,{sx:{width:"100%",position:"relative"}})]})},ei=t(71778),er=t(59727),en=t.n(er);let eo=()=>(0,i.tZ)("section",{className:en().root,children:(0,i.tZ)(v.Z,{variant:"label1",component:"p",children:"Copyright 2023 - Todos los derechos reservados"})});var el=t(37380),ec=t(39496),es=t(81403),ed=t(62319),em=t.n(ed);let eu=()=>{let{isMobile:e}=(0,w.$)();return(0,i.BX)("section",{className:em().root,children:[(0,i.BX)("div",{children:[(0,i.tZ)(v.Z,{component:"h6",variant:e?"body1_semi_bold":"body2_semi_bold",children:"Estamos para ayudarte"}),(0,i.tZ)(v.Z,{component:"p",variant:"label1",children:"Comun\xedcate con nosotros a trav\xe9s de nuestros canales de atenci\xf3n"})]}),(0,i.BX)("div",{className:em().container,children:[(0,i.BX)("div",{children:[(0,i.tZ)(es.q,{size:20}),(0,i.tZ)(el.Z,{variant:"body3_semi_bold",href:"tel:+5117154600",className:em().link,children:"(01) 7154600"})]}),(0,i.BX)("div",{children:[(0,i.tZ)(ec.b,{size:20}),(0,i.tZ)(el.Z,{variant:"body3_semi_bold",className:em().link,href:"mailto:informes@aviva.pe",children:"informes@aviva.pe"})]})]})]})};var ep=t(27097),eh=t.n(ep);let eZ=()=>{let[e,a]=(0,r.useState)([]),t=(0,u.A)(e=>e.itemsMenu);(0,r.useEffect)(()=>{a(null==t?void 0:t.filter(e=>"footbar"===e.placement))},[t]);let n=e=>{var a;return"Libro de reclamaciones"===e.name?(0,i.tZ)(el.Z,{component:Z(),href:"https://www.aviva.pe/libro-de-reclamaciones",className:eh().title,sx:{color:N.O9.primary_darkest},children:e.name}):e.page?(0,i.tZ)(el.Z,{component:Z(),href:"/".concat(e.page.slug),className:eh().title,sx:{color:N.O9.primary_darkest},children:(0,i.tZ)(v.Z,{className:eh().title,component:"h6",children:e.name})}):e.sub_pages?(0,i.tZ)(v.Z,{className:eh().title,component:"h6",children:e.name}):(0,i.tZ)(el.Z,{component:Z(),className:eh().title,href:null!==(a="/".concat(e.url))&&void 0!==a?a:"/",sx:{color:N.O9.primary_darkest},children:e.name})};return(0,i.BX)("nav",{className:eh().root,children:[(0,i.tZ)("section",{className:eh()["img-container"],children:(0,i.tZ)(Z(),{href:"/",children:(0,i.tZ)(I(),{src:H.fd,alt:"Aviva logo",width:128,height:48})})}),(0,i.tZ)("section",{className:eh()["columns-container"],children:e.map(e=>{var a,t;return(0,i.BX)("div",{className:"".concat(eh().submenu," ").concat(eh().column),children:[n(e),(0,i.BX)("ul",{children:[null===(a=e.more_items)||void 0===a?void 0:a.map(e=>(0,i.tZ)("li",{children:e.url?(0,i.tZ)(Z(),{href:"".concat(e.url),target:e.destination,children:e.name}):(0,i.tZ)(v.Z,{variant:"body3",sx:{fontWeight:400,color:"var(--color-neutral-1000)"},children:e.name})},e.id)),null===(t=e.sub_pages)||void 0===t?void 0:t.map(e=>{var a;return(0,i.tZ)("li",{children:e.slug?(0,i.tZ)(Z(),{href:(null===(a=e.parent)||void 0===a?void 0:a.slug)?"/".concat(e.parent.slug,"/").concat(e.slug):"/".concat(e.slug),children:e.title}):(0,i.tZ)(v.Z,{variant:"body3",sx:{fontWeight:400,color:"var(--color-neutral-1000)"},children:e.title})},e.id)})]})]},e.name)})}),(0,i.tZ)("section",{className:eh()["contact-container"],children:(0,i.tZ)(eu,{})})]})};var eg=t(26644),ev=t.n(eg);let e_=()=>{let{isDesktop:e}=(0,w.$)();return e?(0,i.BX)("section",{className:ev()["footer-wrapper-desktop"],children:[(0,i.tZ)(eZ,{}),(0,i.tZ)(ei.Z,{sx:{alignSelf:"center",my:1},className:ev().divider,flexItem:!0}),(0,i.BX)("div",{className:ev()["bottom-bar"],children:[(0,i.tZ)(eo,{}),(0,i.tZ)(eb,{})]})]}):(0,i.BX)("section",{className:ev()["footer-wrapper-mobile"],children:[(0,i.tZ)(ei.Z,{className:ev().divider,sx:{alignSelf:"center",my:2},flexItem:!0}),(0,i.tZ)(eu,{}),(0,i.tZ)(ei.Z,{className:ev()["divider-without-margin"],flexItem:!0,sx:{alignSelf:"center"}}),(0,i.tZ)(eB,{}),(0,i.tZ)(ei.Z,{className:ev()["divider-without-margin"],flexItem:!0,sx:{alignSelf:"center"}}),(0,i.tZ)(eb,{}),(0,i.tZ)(ei.Z,{className:ev()["divider-without-margin"],flexItem:!0,sx:{alignSelf:"center"}}),(0,i.tZ)(eo,{})]})};var ef=t(81194),ex=t.n(ef);let eb=()=>{let{data:e}=(0,d.a0)({url:"".concat(p.e_,"/social")});return(0,i.BX)("section",{className:ex().root,children:[(0,i.tZ)(v.Z,{variant:"label1",component:"p",children:"S\xedguenos en:"}),null==e?void 0:e.map(e=>(0,i.tZ)(Z(),{href:e.url,target:"_blank",children:(0,i.tZ)(I(),{src:e.icon,width:24,height:24,alt:"\xcdcono red social"})},e.id))]})};var ey=t(63934),ew=t(82518),eN=t(43160),ek=t(11398),eC=t.n(ek);let eB=()=>{let[e,a]=(0,r.useState)([]),t=(0,u.A)(e=>e.itemsMenu);return(0,r.useEffect)(()=>{a(null==t?void 0:t.filter(e=>"footbar"===e.placement))},[t]),(0,i.tZ)("nav",{className:eC().root,children:e.map((e,a)=>{var t,n,o;return e.sub_pages.length>0||e.more_items.length>0?(0,i.BX)(ey.Z,{elevation:0,children:[(0,i.tZ)(ew.Z,{expandIcon:e.sub_pages?(0,i.tZ)(z.c,{color:"var(--color-primary"}):null,id:e.name,children:(null===(t=e.page)||void 0===t?void 0:t.slug)?(0,i.tZ)(el.Z,{href:e.page.slug,component:Z(),children:(0,i.tZ)(v.Z,{variant:"body1_semi_bold",component:"h6",children:e.page.title})}):(0,i.tZ)(v.Z,{variant:"body1_semi_bold",component:"h6",children:e.name})}),(0,i.tZ)(eN.Z,{children:(0,i.BX)("ul",{children:[null===(n=e.more_items)||void 0===n?void 0:n.sort((e,a)=>e.name.localeCompare(a.name)).map(e=>(0,i.BX)(r.Fragment,{children:[(0,i.tZ)(ei.Z,{}),(0,i.tZ)(g.Z,{component:"li",p:"1.6rem 2.4rem",children:e.url?(0,i.tZ)(el.Z,{href:e.url,target:e.destination,component:Z(),children:(0,i.tZ)(v.Z,{variant:"body2",color:N.O9.text_body_b1,children:e.name})}):(0,i.tZ)(v.Z,{variant:"body2",color:N.O9.text_body_b1,children:e.name})},e.name)]},e.name)),null===(o=e.sub_pages)||void 0===o?void 0:o.sort((e,a)=>e.title.localeCompare(a.title)).map(e=>{var a,t;return(0,i.BX)(r.Fragment,{children:[(0,i.tZ)(ei.Z,{}),(0,i.tZ)(g.Z,{component:"li",p:"1.6rem 2.4rem",children:e.slug?(0,i.tZ)(el.Z,{href:(null===(a=e.parent)||void 0===a?void 0:a.slug)?"/".concat(null===(t=e.parent)||void 0===t?void 0:t.slug,"/").concat(e.slug):"/".concat(e.slug),component:Z(),children:(0,i.tZ)(v.Z,{variant:"body2",color:N.O9.text_body_b1,children:e.title})}):(0,i.tZ)(v.Z,{variant:"body2",color:N.O9.text_body_b1,children:e.title})},e.title)]},e.title)})]})})]},a):(0,i.BX)(r.Fragment,{children:[(0,i.tZ)(ei.Z,{}),(0,i.tZ)(_.Z,{px:"1.6rem",my:"1.2rem",children:(0,i.tZ)(el.Z,{sx:{color:N.O9.primary_darkest},href:"/libro-de-reclamaciones",variant:"body1_semi_bold",component:Z(),children:e.name},a)})]},a)})})};var eX=t(44945);let eL={email:{required_error:"Este campo es requerido",invalid_type_error:"Ingresa una direcci\xf3n de correo v\xe1lida"}};eX.Ry({email:eX.Z_(eL.email).nonempty(eL.email.required_error).email(eL.email.invalid_type_error)});var eO=t(92641),eP=t(34435),eF=t(83419),eI=t.n(eF);let eM=e=>{var a;let{children:t,title:n,hidden:h=!1,description:Z="Sitio web oficial de la cl\xednica aviva, donde reservar tus citas es f\xe1cil y r\xe1pido",widthWrapper:g=!0}=e,{isLoading:v,loadingMessage:_}=(0,m.Z)(),{isDrawerOpen:f,keyList:x,setIsDrawerOpen:b,setKeyList:y,setItemsMenu:w}=(0,u.A)(),[N,k]=(0,r.useState)(!1),[C,B]=(0,r.useState)(),X=(0,l.useRouter)(),{data:L}=(0,d.a0)({url:"".concat(p.e_,"/menu")}),O=null!==(a=null==L?void 0:L.filter(e=>"navbar"===e.placement))&&void 0!==a?a:[],F=()=>{window.scrollY>=100?k(!0):k(!1)};return(0,r.useEffect)(()=>{if("/"!==X.asPath){k(!0);return}return window.addEventListener("scroll",F),()=>window.removeEventListener("scroll",F)},[]),(0,r.useEffect)(()=>{let e=O.find(e=>e.name===x);B(e)},[O,x]),(0,r.useEffect)(()=>{L&&w(L)},[L]),(0,i.BX)(i.HY,{children:[(0,i.BX)(o(),{children:[(0,i.tZ)("title",{children:n}),(0,i.tZ)("meta",{name:"description",content:Z})]}),(0,i.tZ)("header",{className:(0,c.Z)(eI().wrapper,eI().header,{[eI().hidden]:h}),id:"header",children:(0,i.tZ)(et,{setKeyList:y,setIsDrawerOpen:b,itemsNavbar:null!=O?O:[]})}),(0,i.tZ)("main",{className:eI().wrapper,children:g?(0,i.tZ)("section",{className:eI()["main-wrapper"],children:t}):(0,i.BX)(i.HY,{children:[t,(0,i.tZ)(P,{className:(0,c.Z)(eI()["sticky-content"],{[eI().active]:N,[eI().hidden]:h})})]})}),(0,i.tZ)("footer",{className:(0,c.Z)(eI()["wrapper-footer"],{[eI().hidden]:h}),children:(0,i.tZ)(e_,{})}),(0,i.tZ)(eO.Y,{}),(0,i.tZ)(s.E,{loading:v,title:_}),(0,i.tZ)(eP.oL,{item:C,keyList:x,isDrawerOpen:f,onClose:()=>b(!1)})]})}},71202:function(e,a,t){"use strict";t.r(a);var i=t(99221),r=t(50959),n=t(33929),o=t.n(n),l=t(83982),c=t.n(l),s=t(13893),d=t(63934),m=t(57479),u=t(37380),p=t(67165),h=t(82518),Z=t(43160),g=t(71778),v=t(29531),_=t(83608),f=t(65622),x=t(43372),b=t(8304),y=t(66004),w=t(60173),N=t(48496),k=t(41734),C=t(2237),B=t.n(C);a.default=()=>{var e,a;let{openSidebar:t,toggleSidebar:n}=(0,b.$)(),l=(0,k.A)(e=>e.itemsMenu),C=null!==(a=null==l?void 0:l.filter(e=>"navbar"===e.placement))&&void 0!==a?a:[],{data:X}=(0,w.a0)({url:"publicity",params:{publicity_type:"banner_sidebar",is_active:"Active"}}),L=()=>{n()},O=e=>e.sub_pages&&e.sub_pages.length>0||e.more_items&&e.more_items.length>0;return(0,i.tZ)(_.ZP,{anchor:"right",open:t,sx:{zIndex:500},onClose:L,children:(0,i.BX)("div",{className:B().wrapper,children:[(0,i.tZ)("div",{className:"flex justify-end mb-24",children:(0,i.tZ)(f.Z,{onClick:L,children:(0,i.tZ)(x.Tw,{color:"var(--color-primary)",size:24})})}),(0,i.BX)(s.Z,{flex:1,justifyContent:"space-between",py:"2.4rem",children:[(0,i.tZ)(s.Z,{children:C.slice(1).map((e,a)=>{var t,n;return O(e)?(0,i.BX)(d.Z,{elevation:0,sx:{"&.Mui-expanded":{margin:0}},children:[(0,i.BX)(m.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,i.tZ)(u.Z,{href:"/".concat(e.page.slug),flex:1,component:c(),onClick:L,children:(0,i.tZ)(p.Z,{variant:"body2_semi_bold",color:y.O9.text_title,component:"h6",children:e.name})}),(0,i.tZ)(h.Z,{expandIcon:e.sub_pages?(0,i.tZ)(m.Z,{children:(0,i.tZ)(x.ch,{size:24,color:"var(--color-primary"})}):null,id:e.name,sx:{"& .Mui-expanded":{margin:0}}})]}),(0,i.tZ)(Z.Z,{sx:{p:0},children:(0,i.BX)("ul",{children:[null===(t=e.more_items)||void 0===t?void 0:t.sort((e,a)=>e.name.localeCompare(a.name)).map(e=>(0,i.BX)(r.Fragment,{children:[(0,i.tZ)(g.Z,{}),(0,i.tZ)(m.Z,{component:"li",p:"1.6rem 2.4rem",children:(0,i.tZ)(u.Z,{href:e.url,target:e.destination,component:c(),onClick:L,children:(0,i.tZ)(p.Z,{variant:"body2",color:y.O9.text_body_b1,children:e.name})})},e.name)]},e.name)),null===(n=e.sub_pages)||void 0===n?void 0:n.sort((e,a)=>e.title.localeCompare(a.title)).map(a=>(0,i.BX)(r.Fragment,{children:[(0,i.tZ)(g.Z,{}),(0,i.tZ)(m.Z,{component:"li",p:"1.6rem 2.4rem",children:(0,i.tZ)(u.Z,{href:"".concat("Nosotros"===e.name?"":"/".concat(e.page.slug),"/").concat(a.slug),component:c(),onClick:L,children:(0,i.tZ)(p.Z,{variant:"body2",color:y.O9.text_body_b1,children:a.title})})},a.title)]},a.title))]})})]},a):(0,i.BX)(r.Fragment,{children:[(0,i.tZ)(g.Z,{}),(0,i.tZ)(s.Z,{my:"1.2rem",children:e.page.slug?(0,i.tZ)(u.Z,{sx:{color:y.O9.primary_darkest},href:"/".concat(e.page.slug),variant:"body1_semi_bold",component:c(),onClick:L,children:(0,i.tZ)(p.Z,{variant:"body2_semi_bold",color:y.O9.text_title,children:e.name})},a):(0,i.tZ)(p.Z,{variant:"body2_semi_bold",color:y.O9.text_title,children:e.name})})]},a)})}),(0,i.tZ)("div",{className:"py-32",children:X&&X.length>0&&((null===(e=X[0])||void 0===e?void 0:e.url)?(0,i.tZ)(u.Z,{component:c(),href:X[0].url,passHref:!0,children:(0,i.tZ)(o(),{src:X[0].image,quality:100,style:{objectFit:"contain"},alt:"Banner que explica los beneficios de los acompa\xf1antes",height:178,width:557})}):(0,i.tZ)(o(),{src:X[0].image,quality:100,style:{objectFit:"contain"},alt:"Banner que explica los beneficios de los acompa\xf1antes",height:178,width:557}))}),(0,i.BX)(m.Z,{display:"flex",gap:"0.8rem",justifyContent:"center",children:[(0,i.tZ)(v.Z,{size:"small",variant:"outlined",sx:{px:"1.65rem"},LinkComponent:c(),href:N.wm,children:"Reserva tu cita"}),(0,i.tZ)(v.Z,{size:"small",sx:{px:"1.65rem"},LinkComponent:c(),href:N.wm,children:"Ir a portal mi aviva"})]})]})]})})}},92641:function(e,a,t){"use strict";t.d(a,{Y:function(){return i.default}});var i=t(71202)},34435:function(e,a,t){"use strict";t.d(a,{oL:function(){return x}});var i=t(83982),r=t.n(i),n=t(59336),o=t(23722),l=t(66004),c=t(41734);let s=[{name:"Nosotros",url:"/nosotros",submenu:[{name:"Convenios",url:"/convenios"},{name:"Sedes",url:"/sedes"},{name:"Trabaja con nosotros",url:"/trabaja-con-nosotros"},{name:"Latidos",url:"/latidos"},{name:"Blog",url:"/blog"}]},{name:"Especialidades",url:"/especialidades",submenu:[{name:"Ginecolog\xeda Preventiva",url:"/especialidades/ginecologia"},{name:"Nutrici\xf3n",url:"/especialidades/nutricion"},{name:"Pediatr\xeda preventiva",url:"/especialidades/pediatria"},{name:"Psicolog\xeda",url:"/especialidades/psicologia"},{name:"Cardiolog\xeda",url:"/especialidades/cardiologia"},{name:"Cardiolog\xeda Pedi\xe1trica",url:"/especialidades/cardiologiapediatrica"},{name:"Cirug\xeda de cabeza, cuello y maxilofacial",url:"/especialidades/cabeza-y-cuello-y-maxilofacial"},{name:"Cirug\xeda General",url:"/especialidades/cirugia-general"},{name:"Cirug\xeda Pedi\xe1trica",url:"/especialidades/cirugia-pediatrica"},{name:"Dermatolog\xeda",url:"/especialidades/dermatologia"},{name:"Endocrinolog\xeda",url:"/especialidades/endocrinologia"},{name:"Gastroenterolog\xeda",url:"/especialidades/gastroenterologia"},{name:"Geriatr\xeda",url:"/especialidades/geriatria"},{name:"Hematolog\xeda",url:"/especialidades/hematologia"},{name:"Infectolog\xeda",url:"/especialidades/infectologia"},{name:"Medicina f\xedsica y rehabilitaci\xf3n",url:"/especialidades/medicina-fisica-y-rehabilitacion"},{name:"Medicina Interna",url:"/especialidades/medicina-interna"},{name:"Nefrolog\xeda",url:"/especialidades/nefrologia"},{name:"Neumolog\xeda",url:"/especialidades/neumologia"},{name:"Neumolog\xeda Pedi\xe1trica",url:"/especialidades/neumologiapediatrica"},{name:"Neurolog\xeda",url:"/especialidades/neurologia"},{name:"Odontolog\xeda",url:"/especialidades/odontologia"},{name:"Oftalmolog\xeda",url:"/especialidades/oftalmologia"},{name:"Ortodoncia",url:"/especialidades/ortodoncia"},{name:"Otorrinolaringolog\xeda",url:"/especialidades/otorrinolaringologia"},{name:"Psiquiatr\xeda",url:"/especialidades/psiquiatria"},{name:"Rehabilitaci\xf3n suelo p\xe9lvico",url:"/especialidades/rehabilitacion-suelo-pelvico"},{name:"Reumatolog\xeda",url:"/especialidades/reumatologia"},{name:"Traumatolog\xeda",url:"/especialidades/traumatologia"},{name:"Urolog\xeda",url:"/especialidades/urologia"},{name:"Neonatolog\xeda",url:"/especialidades/neonatologiacura"}]},{name:"Procedimientos",url:"/procedimientos",submenu:[{name:"Presupuestos",url:"/presupuestos"},{name:"Cirug\xeda Bari\xe1trica",url:"/procedimientos/cirugia-bariatrica"},{name:"Medicina Fetal",url:"/procedimientos/medicina-fetal"},{name:"Parto Humanizado",url:"/procedimientos/parto-humanizado"},{name:"Rehabilitaci\xf3n y Terapia F\xedsica",url:"/procedimientos/rehabilitacion-y-terapia-fisica"}]},{name:"Directorio m\xe9dico",url:"/directorio-medico"},{name:"Programas",url:"/programas",submenu:[{name:"Programa Viva+",url:"/programas/viva"},{name:"Programa materno",url:"/programas/maternidad"}]},{name:"Servicios",url:"/servicios",submenu:[{name:"Banco de sangre",url:"#"},{name:"Laboratorio",url:"#"},{name:"Urgencias",url:"#"},{name:"Im\xe1genes",url:"#"},{name:"Centro quir\xfargico",url:"#"},{name:"Hospitalizaci\xf3n",url:"#"},{name:"Farmacia",url:"#"},{name:"Rehabilitaci\xf3n f\xedsica",url:"#"}]}];s.find(e=>"Especialidades"===e.name);var d=t(33929),m=t.n(d);t(83357),t(60173),s.find(e=>"Nosotros"===e.name),t(48496),s.find(e=>"Procedimientos"===e.name),s.find(e=>"Programas"===e.name),s.find(e=>"Servicios"===e.name);var u=t(99221),p=t(44660),h=t(57479),Z=t(85437),g=t(67165);let v=e=>{let{item:a}=e,t=(0,n.usePathname)(),{advertising:i,name:s,sub_pages:d,more_items:p}=a,{setIsDrawerOpen:v}=(0,c.A)(),_=window.location.href,f=()=>"Especialidades"===s?3:"Procedimientos"===s?4:6;return(0,u.BX)(Z.ZP,{container:!0,display:"flex",onMouseLeave:()=>{v(!1)},children:[(0,u.tZ)(Z.ZP,{item:!0,min:i?7:12,display:"flex",alignItems:"center",children:(0,u.BX)(Z.ZP,{container:!0,rowGap:"1.6rem",display:"flex",alignItems:"center",children:[p.length>0&&p.map(e=>(0,u.tZ)(Z.ZP,{item:!0,min:f(),component:h.Z,onClick:()=>v(!1),children:e.url?(0,u.BX)(r(),{href:e.url,target:e.destination,style:{display:"flex",gap:"1rem",marginRight:5},children:[_.includes(e.url)&&(0,u.tZ)(o.ol,{size:24,color:l.O9.primary_dark}),(0,u.tZ)(g.Z,{variant:"body2",color:_.includes(e.url)?l.O9.text_title_p2:l.O9.text_body_b2,children:e.name})]}):(0,u.tZ)(h.Z,{style:{display:"flex",gap:"1rem"},children:(0,u.tZ)(g.Z,{variant:"body2",color:l.O9.text_body_b2,children:e.name})})},e.id)),d.sort((e,a)=>e.title.localeCompare(a.title)).map(e=>{var a;return(0,u.tZ)(Z.ZP,{item:!0,min:f(),component:h.Z,onClick:()=>v(!1),children:(0,u.BX)(r(),{href:(null===(a=e.parent)||void 0===a?void 0:a.slug)?"/".concat(e.parent.slug,"/").concat(e.slug):"/".concat(e.slug),style:{display:"flex",gap:"1rem",marginRight:5},children:[e.slug===t&&(0,u.tZ)(o.ol,{size:24,color:l.O9.primary_dark}),(0,u.tZ)(g.Z,{variant:"body2",color:e.slug===t?l.O9.text_title_p2:l.O9.text_body_b2,children:e.title})]})},e.id)})]})}),i&&(0,u.tZ)(Z.ZP,{item:!0,min:5,display:"flex",justifyContent:"flex-end",maxWidth:"28.8rem",children:i.url?(0,u.tZ)(r(),{href:i.url,children:(0,u.tZ)(m(),{src:i.image,alt:"Banner que explica los beneficios de los acompa\xf1antes",height:99,width:288,quality:100,style:{width:"100%",height:"auto"}})}):(0,u.tZ)(m(),{src:i.image,alt:"Banner que explica los beneficios de los acompa\xf1antes",height:99,width:288,quality:100,style:{width:"100%",height:"auto"}})})]})};var _=t(3792),f=t.n(_);let x=e=>{let{keyList:a="",isDrawerOpen:t=!1,item:i}=e,{setIsDrawerOpen:r}=(0,c.A)();return(0,u.tZ)(p.Z,{open:t,sx:{zIndex:500},onClick:()=>r(!1),children:(0,u.tZ)(h.Z,{className:"".concat(f()["topdrawer-container"]," ").concat(t?f().open:""),component:"article",display:"flex",justifyContent:"center",bgcolor:"white",onMouseLeave:()=>r(!1),children:(0,u.tZ)(h.Z,{maxWidth:"144rem",display:"flex",width:"90%",justifyContent:"center",children:(0,u.tZ)(h.Z,{width:"Especialidades"===a?"88%":"78%",p:"2.4rem",children:i&&(0,u.tZ)(v,{item:i})})})})})}},41734:function(e,a,t){"use strict";t.d(a,{A:function(){return r}});var i=t(68063);let r=(0,i.Ue)(e=>({isDrawerOpen:!1,keyList:"",itemsMenu:[],setIsDrawerOpen:a=>e(()=>({isDrawerOpen:a})),setKeyList:a=>e(()=>({keyList:a})),setItemsMenu:a=>e(()=>({itemsMenu:a}))}))},26644:function(e){e.exports={"footer-wrapper-mobile":"Footer_footer-wrapper-mobile__MdPnf",divider:"Footer_divider__R_LiP","divider-without-margin":"Footer_divider-without-margin__RYU24","footer-wrapper-desktop":"Footer_footer-wrapper-desktop__1mt4_","bottom-bar":"Footer_bottom-bar__CnTzI"}},62319:function(e){e.exports={root:"FooterContact_root__4kKc8",link:"FooterContact_link__iXGgP",container:"FooterContact_container__Sq0tO"}},59727:function(e){e.exports={root:"FooterCopyright_root__hNLxO"}},81194:function(e){e.exports={root:"FooterFollowUs_root__yU7iI"}},27097:function(e){e.exports={submenu:"FooterNavDesktop_submenu___d0Qe",title:"FooterNavDesktop_title__9iYyI",root:"FooterNavDesktop_root__EKKro","img-container":"FooterNavDesktop_img-container__IWnl1","columns-container":"FooterNavDesktop_columns-container__4JDW0","contact-container":"FooterNavDesktop_contact-container__D7pPt",column:"FooterNavDesktop_column__8tlFS"}},11398:function(e){e.exports={root:"FooterNavMobile_root__im2NL",links:"FooterNavMobile_links__0XnCD","accordion-details":"FooterNavMobile_accordion-details__nm_6b"}},83419:function(e){e.exports={wrapper:"MainLayout_wrapper___juVf",header:"MainLayout_header__CR1Yk",hidden:"MainLayout_hidden__JqMzn","main-wrapper":"MainLayout_main-wrapper__TX3rz","sticky-content":"MainLayout_sticky-content__fU01L",active:"MainLayout_active___IpIo","wrapper-footer":"MainLayout_wrapper-footer__4RmHo"}},57775:function(e){e.exports={"nav-item":"Navbar_nav-item__jg_lf","dropdown-item":"Navbar_dropdown-item__4Fo30","navbar-wrapper":"Navbar_navbar-wrapper__v8cZS","nav-container":"Navbar_nav-container__Wc_PP","logo-container":"Navbar_logo-container__yv4zF",logo:"Navbar_logo__R9L1A","nav-bar":"Navbar_nav-bar__b4WoY","schedule-btn":"Navbar_schedule-btn__uyq_f","login-btn":"Navbar_login-btn__PhAmt"}},2237:function(e){e.exports={wrapper:"Sidebar_wrapper__kv3LL","MuiAccordion-root":"Sidebar_MuiAccordion-root__NX_2F","Mui-expanded":"Sidebar_Mui-expanded___3AD0"}},3792:function(e){e.exports={"topdrawer-container":"TopDrawer_topdrawer-container__Sj5VT",open:"TopDrawer_open__KOxZz"}},71937:function(e){e.exports={root:"MenuButton_root__wVVix"}}}]);