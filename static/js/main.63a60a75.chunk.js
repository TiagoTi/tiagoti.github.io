(this["webpackJsonppes-ui"]=this["webpackJsonppes-ui"]||[]).push([[0],{258:function(e,t,a){e.exports=a(471)},345:function(e,t,a){},471:function(e,t,a){"use strict";a.r(t);a(259);var r,n,o,s=a(0),c=a.n(s),i=a(38),u=a.n(i),l=a(25),h=a(42),m=a(58),d=a(492),p=a(488),b=a(485),f=a(22),g=a(23),v=a(26),O=a(27),y=a(28),w=Object(l.b)("AuthStore")(r=Object(l.c)(r=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return this.props.AuthStore.isAuthenticated?c.a.createElement(h.b,{"data-cy":"signout",to:"/signout"},"Sair"):c.a.createElement(h.b,{to:"/signin"},"Entrar")}}]),t}(c.a.Component))||r)||r,E=a(29),j=a.n(E),C=a(493),S=a(494),x=a(114),k=a.n(x),I=a(486),_=a(489),D=a(484),P=a(483),z=a(491),A=a(84),L=a(487),R=a(225),q=function(e){var t=e.columns,a=e.data,r=e.getTrProps,n=Object(R.useTable)({columns:t,data:a}),o=n.getTableProps,s=n.headerGroups,i=n.getTableBodyProps,u=n.rows,l=n.prepareRow;return c.a.createElement(L.a,o(),c.a.createElement(L.a.Header,null,s.map((function(e){return c.a.createElement(L.a.Row,e.getHeaderGroupProps(),e.headers.map((function(e){return c.a.createElement(L.a.HeaderCell,e.getHeaderProps(),e.render("Header"))})))}))),c.a.createElement(L.a.Body,i(),u.map((function(e){return l(e),c.a.createElement(L.a.Row,Object.assign({},e.getRowProps(),{onClick:function(){return r(e)}}),e.cells.map((function(e){return c.a.createElement(L.a.Cell,e.getCellProps(),e.render("Cell"))})))}))))},T=(a(345),a(145),[{Header:"ID",accessor:"id"},{Header:"Nome",accessor:"user.first_name"},{Header:"Profissao",accessor:"profession"},{Header:"Email",accessor:"user.email"},{Header:"Tipo",accessor:"is_seller",Cell:function(e){return e.cell.value?"Profissional":"Consumidor"}},{Header:"Inica\xe7\xe3o",accessor:"who_indicated"}]),F=Object(l.b)("CustomerStore")(o=Object(l.c)(o=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(O.a)(t).call(this,e))).customerStore=a.props.CustomerStore,a.customerStore.professionsLoad(),a.customerStore.updateCustomerBirthDate(),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement(C.a,null,c.a.createElement(I.a,{onSubmit:this.customerStore.handleCustomerForm},c.a.createElement(_.a,{active:this.customerStore.isLoading,inverted:!0},c.a.createElement(D.a,null)),c.a.createElement(I.a.Group,{widths:"equal"},c.a.createElement(I.a.Field,null,c.a.createElement("label",{data2:"ok",data1:this.customerStore.customer.user.last_name},"\xc9 Profissional?"),c.a.createElement(P.a,{checked:this.customerStore.customer.is_seller,name:"is_seller",onChange:this.customerStore.handleRadioIsSeller,toggle:!0,type:"radio"})),c.a.createElement(I.a.Input,{id:"customer_name",label:"Nome:",name:"first_name",onChange:this.customerStore.handleUserChange,placeholder:"Informe o nome do cliente",value:this.customerStore.customer.user.first_name}),c.a.createElement(I.a.Input,{id:"customer_lastname",label:"Sobreneme:",name:"last_name",onChange:this.customerStore.handleUserChange,placeholder:"Informe o sobrenome completo do cliente",value:this.customerStore.customer.user.last_name}),c.a.createElement(I.a.Input,{id:"customer_cpf",label:"CPF:",name:"cpf",onChange:this.customerStore.handleGenericChange,placeholder:"Informe o n\xfamero do cnpj do cliente",value:this.customerStore.customer.cpf}),c.a.createElement(I.a.Field,null,c.a.createElement("label",{htmlFor:"customer_birth"},"Data Nasc"),c.a.createElement(k.a,{id:"customer_birth",name:"birth_date",onChange:this.customerStore.handleDatePicker,selected:this.customerStore.birthDate}))),c.a.createElement(I.a.Group,{widths:"equal"},c.a.createElement(I.a.Field,null,c.a.createElement("label",{htmlFor:"customer_profession"},"Profiss\xe3o"),c.a.createElement(p.a,{id:"customer_profession",name:"profession",clearable:!0,selection:!0,options:this.customerStore.professionsOptions,onChange:this.customerStore.handleGenericChange})),c.a.createElement(I.a.Input,{id:"customer_email",label:"Email",type:"email",name:"email",onChange:this.customerStore.handleUserChange,value:this.customerStore.customer.user.email}),c.a.createElement(I.a.Input,{id:"customer_cellphone",label:"Celular:",name:"cellphone",onChange:this.customerStore.handleGenericChange,placeholder:"Informe o ceular do cliente",value:this.customerStore.customer.cellphone}),c.a.createElement(I.a.Field,null,c.a.createElement("label",{htmlFor:"customer_who_indicated"},"Indica\xe7\xe3o"),c.a.createElement(p.a,{clearable:!0,id:"customer_who_indicated",name:"who_indicated",onChange:this.customerStore.handleGenericChange,onSearchChange:this.customerStore.whoIndicatedSearchEvent,options:this.customerStore.whoIndicatedOptions,search:!0,selection:!0}))),c.a.createElement(I.a.Group,null,c.a.createElement(N,null)),c.a.createElement(I.a.Group,null,c.a.createElement(z.a,{className:"signin-button",color:"teal",fluid:!0,size:"large",type:"submit"},"Salvar"))),c.a.createElement(q,{data:this.customerStore.customersList,columns:T,getTrProps:this.customerStore.onClickTableRow}))}}]),t}(c.a.Component))||o)||o,N=Object(l.b)("CustomerStore")(n=Object(l.c)(n=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(O.a)(t).call(this,e))).customerStore=a.props.CustomerStore,a.customerStore.getCustomers(),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement("h3",null,"Endere\xe7o"),c.a.createElement(C.a,{divided:"vertically"},c.a.createElement(C.a.Row,{columns:2},c.a.createElement(C.a.Column,null,c.a.createElement(I.a.Input,{label:"Pesquisar",icon:c.a.createElement(A.a,{name:"search",inverted:!0,circular:!0,link:!0,onClick:this.customerStore.handleSearchAddressChange}),onChange:this.customerStore.handleSearchAddressChange,value:this.customerStore.search_address,name:"search_address",type:"text"})),c.a.createElement(C.a.Column,null,c.a.createElement(I.a.Input,{id:"customer_postcode",label:"CEP",type:"text",name:"postcode",onChange:this.customerStore.handleAddressChange,value:this.customerStore.customer.address.postcode}))),c.a.createElement(C.a.Row,{columns:4},c.a.createElement(C.a.Column,null,c.a.createElement(I.a.Input,{id:"customer_city",label:"Cidade",type:"text",name:"city",onChange:this.customerStore.handleAddressChange,value:this.customerStore.customer.address.city})),c.a.createElement(C.a.Column,null,c.a.createElement(I.a.Input,{id:"customer_state",label:"UF",type:"text",name:"state",onChange:this.customerStore.handleAddressChange,value:this.customerStore.customer.address.state})),c.a.createElement(C.a.Column,null,c.a.createElement(I.a.Input,{id:"customer_country",label:"Pais",type:"text",name:"country",onChange:this.customerStore.handleAddressChange,value:this.customerStore.customer.address.country})),c.a.createElement(C.a.Column,null,c.a.createElement(I.a.Input,{id:"customer_neighborhood",label:"Bairro",type:"text",name:"neighborhood",onChange:this.customerStore.handleAddressChange,value:this.customerStore.customer.address.neighborhood}))),c.a.createElement(C.a.Row,{columns:3},c.a.createElement(C.a.Column,null,c.a.createElement(I.a.Input,{id:"customer_street_address",label:"Endere\xe7o",type:"text",name:"street_address",onChange:this.customerStore.handleAddressChange,value:this.customerStore.customer.address.street_address})),c.a.createElement(C.a.Column,null,c.a.createElement(I.a.Input,{id:"customer_number",label:"Numero",type:"text",name:"number",onChange:this.customerStore.handleAddressChange,value:this.customerStore.customer.address.number})),c.a.createElement(C.a.Column,null,c.a.createElement(I.a.Input,{id:"customer_complement",label:"Complemento",type:"text",name:"complement",onChange:this.customerStore.handleAddressChange,value:this.customerStore.customer.address.complement})))))}}]),t}(c.a.Component))||n)||n,V=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement(C.a.Row,null,c.a.createElement(S.a,{as:"h1"},"Cadastro de Clientes"),c.a.createElement(j.a,null),c.a.createElement(C.a.Column,null,c.a.createElement(F,null)))}}]),t}(c.a.Component);var G,H,Y,Q,U,B=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Home Page"))},M=Object(l.b)("AuthStore")(G=Object(l.c)(G=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(m.b,Object.assign({},this.props.rest,{render:function(t){var a=t.location;return e.props.AuthStore.isAuthenticated?e.props.children:c.a.createElement(m.a,{to:{pathname:"/signin",state:{from:a}}})}}))}}]),t}(c.a.Component))||G)||G,J=a(490),W=Object(l.b)("SaleStore")(H=Object(l.c)(H=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(O.a)(t).call(this,e))).store=a.props.SaleStore,a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement(C.a,null,c.a.createElement(_.a,{page:!0,active:this.store.isLoading,inverted:!0},c.a.createElement(D.a,null)),c.a.createElement(I.a,{onSubmit:this.store.handleSaleForm},c.a.createElement(I.a.Group,{width:"equal"},c.a.createElement(I.a.Dropdown,{label:"Cliente",onChange:this.store.handleCustomerChange,onSearchChange:this.store.handleCustomerSearchChange,options:this.store.customers,placeholder:"Pesquise cliente por nome",search:!0,selection:!0}),c.a.createElement(I.a.Field,null,c.a.createElement("label",{htmlFor:"customer_birth"},"Data Nasc"),c.a.createElement(k.a,{onChange:this.store.handleDatePicker,selected:this.store.sale.date})),c.a.createElement(I.a.Dropdown,{label:"Produtos",onChange:this.store.handleProductChange,onSearchChange:this.store.handleProductSearchChange,options:this.store.products,placeholder:"Pesquise cliente por nome",search:!0,selection:!0})),c.a.createElement(I.a.Group,null,c.a.createElement(I.a.Input,{type:"number",label:"Quantidade",min:1,value:parseInt(this.store.sale.products[0].quantity),onChange:this.store.onChageSaleQuantity}),c.a.createElement(I.a.Input,{type:"number",step:".01",label:"Total",value:this.store.sale.amount}),c.a.createElement(J.a.Group,null,c.a.createElement(J.a,{completed:!0},c.a.createElement(J.a.Content,null,c.a.createElement(J.a.Title,null,"Status Do Pedido"),c.a.createElement(J.a.Description,null,this.store.sale_status))))),c.a.createElement(z.a,{color:"teal",fluid:!0,size:"large",type:"submit"},"Salvar")))}}]),t}(c.a.Component))||H)||H,K=Object(l.b)("SaleStore")(Y=Object(l.c)(Y=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement(C.a,null,c.a.createElement(_.a,{page:!0,active:this.props.SaleStore.isLoading,inverted:!0},c.a.createElement(D.a,null)))}}]),t}(c.a.Component))||Y)||Y,X=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement(C.a.Row,null,c.a.createElement(S.a,{as:"h1"},"Cadastro de Vendas"),c.a.createElement(j.a,null),c.a.createElement(C.a.Column,null,c.a.createElement(W,null)),c.a.createElement(C.a.Column,null,c.a.createElement(K,null)))}}]),t}(c.a.Component),Z=a(12),$=a.n(Z),ee=a(245),te=a(495),ae=Object(l.b)("AuthStore")(Q=Object(l.c)(Q=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(O.a)(t).call(this,e))).handleSignIn=function(e){var t,r,n;return $.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.preventDefault(),t=a.state,r=t.username,n=t.password,r&&n){o.next=6;break}a.setState({error:"Preencha username e senha para continuar!"}),o.next=15;break;case 6:return o.prev=6,o.next=9,$.a.awrap(a.props.AuthStore.signIn({username:r,password:n}));case 9:a.props.AuthStore.isAuthenticated&&a.props.history.push("/"),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(6),a.setState({error:"Houve um problema com o login, verifique suas credenciais. T.T"});case 15:case"end":return o.stop()}}),null,null,[[6,12]])},a.state={username:"",password:"",error:""},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(C.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},c.a.createElement(C.a.Column,{style:{maxWidth:450}},c.a.createElement(S.a,{as:"h2",color:"teal",textAlign:"center"},c.a.createElement(ee.a,{src:"/logo.png"})," Entre com seus dados"),c.a.createElement(I.a,{size:"large",onSubmit:this.handleSignIn},c.a.createElement(te.a,{stacked:!0},this.state.error&&c.a.createElement("p",null,this.state.error),c.a.createElement(I.a.Input,{className:"username",fluid:!0,icon:"user",iconPosition:"left",onChange:function(t){return e.setState({username:t.target.value})},placeholder:"Usu\xe1rio",type:"text"}),c.a.createElement(I.a.Input,{className:"password",fluid:!0,icon:"lock",iconPosition:"left",onChange:function(t){return e.setState({password:t.target.value})},placeholder:"Senha",type:"password"}),c.a.createElement(z.a,{className:"signin-button",color:"teal",fluid:!0,size:"large",type:"submit"},"Entrar")))))}}]),t}(s.Component))||Q)||Q,re=Object(m.g)(ae),ne=Object(l.b)("AuthStore")(U=Object(l.c)(U=function(e){function t(e){var a;return Object(f.a)(this,t),a=Object(v.a)(this,Object(O.a)(t).call(this,e)),e.AuthStore.signOut(),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement(m.a,{to:"/"})}}]),t}(c.a.Component))||U)||U;var oe=function(){return c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(d.a.Item,{as:h.b,to:"/"},"Home"),c.a.createElement(p.a,{item:!0,text:"Clientes"},c.a.createElement(p.a.Menu,null,c.a.createElement(p.a.Item,null,c.a.createElement(h.b,{to:"/customers",className:"menu-item-customers"},"Cadastro De Cliente")))),c.a.createElement(p.a,{item:!0,text:"Vendas"},c.a.createElement(p.a.Menu,null,c.a.createElement(p.a.Item,null,c.a.createElement(h.b,{to:"/sales",className:"menu-item-sales"},"Cadastro De Vendas")))),c.a.createElement(d.a.Item,{position:"right"},c.a.createElement(w,null)))),c.a.createElement(b.a,null,c.a.createElement(m.d,null,c.a.createElement(M,{path:"/customers"},c.a.createElement(V,null)),c.a.createElement(M,{path:"/sales"},c.a.createElement(X,null)),c.a.createElement(m.b,{exact:!0,path:"/signin",component:re}),c.a.createElement(m.b,{exact:!0,path:"/signout",component:ne}),c.a.createElement(m.b,{path:"/",exact:!0,component:B}),c.a.createElement(m.b,{path:"*",component:function(){return c.a.createElement("h1",null,"Page not found")}}))))},se=a(16),ce=a(14),ie=(a(150),a(11)),ue=a(244),le=a.n(ue),he=a(70),me={apiGateway:{URL:"https://pes-prod.herokuapp.com"}},de=Object(he.a)({VERSION:"0.0.0"},me),pe=le.a.create({baseURL:de.apiGateway.URL});pe.interceptors.request.use((function(e){var t,a;return $.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=localStorage.getItem("@pes-backend"),a=e,t&&(a.headers.Authorization="Bearer ".concat(t)),r.abrupt("return",a);case 4:case"end":return r.stop()}}))}));var be,fe,ge,ve,Oe,ye,we,Ee,je,Ce,Se,xe,ke,Ie,_e,De,Pe,ze,Ae,Le,Re,qe,Te,Fe,Ne,Ve,Ge,He,Ye,Qe,Ue,Be,Me,Je,We,Ke,Xe,Ze,$e,et=pe,tt=new(be=function(){function e(){Object(f.a)(this,e),Object(se.a)(this,"isAuthenticated",fe,this)}return Object(g.a)(e,[{key:"signIn",value:function(e){var t;return $.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,$.a.awrap(et.post("/api/token/",e));case 2:t=a.sent,localStorage.setItem("@pes-backend",t.data.access),localStorage.setItem("@pes-backend-r",t.data.refresh),this.isAuthenticated=!0;case 6:case"end":return a.stop()}}),null,this)}},{key:"signOut",value:function(){localStorage.removeItem("@pes-backend"),localStorage.removeItem("@pes-backend-r"),this.isAuthenticated=!1}},{key:"getToken",value:function(){return localStorage.getItem("@pes-backend")}}]),e}(),fe=Object(ce.a)(be.prototype,"isAuthenticated",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null!==localStorage.getItem("@pes-backend")}}),Object(ce.a)(be.prototype,"signIn",[ie.d],Object.getOwnPropertyDescriptor(be.prototype,"signIn"),be.prototype),Object(ce.a)(be.prototype,"signOut",[ie.d],Object.getOwnPropertyDescriptor(be.prototype,"signOut"),be.prototype),Object(ce.a)(be.prototype,"getToken",[ie.d],Object.getOwnPropertyDescriptor(be.prototype,"getToken"),be.prototype),be),at=a(83),rt=a.n(at),nt=function(e){var t,a;return $.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return mt.isLoading=!0,r.prev=1,r.next=4,$.a.awrap(et.post("/api/v1/customers/",e));case 4:E.notify.show("Salvo com sucesso","success"),r.next=13;break;case 7:r.prev=7,r.t0=r.catch(1),t=r.t0.response,a="",401===t.status?E.notify.show("Sua sess\xe3o expirou, logar novamente","error"):t.data&&(Object.keys(t.data).forEach((function(e){"user"!==e?(a="".concat(a," Campo: ").concat(e,": "),t.data[e].forEach((function(e){return a="".concat(a,"; ").concat(e)}))):Object.keys(t.data[e]).forEach((function(r){a="".concat(a," Campo: ").concat(r,": "),t.data[e][r].forEach((function(e){return a="".concat(a,"; ").concat(e)}))}))})),E.notify.show(a,"error",8e3)),console.error(r.t0);case 13:return r.prev=13,mt.isLoading=!1,r.finish(13);case 16:case"end":return r.stop()}}),null,null,[[1,7,13,16]])},ot=function(){var e;return $.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.prev=1,t.t0=$.a,t.next=5,$.a.awrap(et.get("/api/v1/professions/"));case 5:return t.t1=t.sent.data,t.next=8,t.t0.awrap.call(t.t0,t.t1);case 8:e=t.sent,t.next=14;break;case 11:t.prev=11,t.t2=t.catch(1),console.error(t.t2);case 14:return t.abrupt("return",e);case 15:case"end":return t.stop()}}),null,null,[[1,11]])},st=function(e){var t;return $.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],a.prev=1,a.t0=$.a,a.next=5,$.a.awrap(et.get("/api/v1/who_indicated/?username=".concat(e)));case 5:return a.t1=a.sent.data,a.next=8,a.t0.awrap.call(a.t0,a.t1);case 8:t=a.sent,a.next=14;break;case 11:a.prev=11,a.t2=a.catch(1),console.error(a.t2);case 14:return a.abrupt("return",t);case 15:case"end":return a.stop()}}),null,null,[[1,11]])},ct=function(e){var t;return $.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=null,a.prev=1,a.t0=$.a,a.next=5,$.a.awrap(et.get("/api/v1/addresses/search/".concat(e)));case 5:return a.t1=a.sent.data,a.next=8,a.t0.awrap.call(a.t0,a.t1);case 8:t=a.sent,a.next=14;break;case 11:a.prev=11,a.t2=a.catch(1),console.error(a.t2);case 14:return a.abrupt("return",t);case 15:case"end":return a.stop()}}),null,null,[[1,11]])},it="/api/v1/customers",ut=function(e,t){return{error:{user:t,tech:e}}},lt=function(e){var t,a,r;return $.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t="Falha ao consultar o cliente ID ".concat(e," Tente Novamente!"),a={},n.prev=2,n.next=5,$.a.awrap(et.get("".concat(it,"/").concat(e,"/")));case 5:if(200!==(r=n.sent).status){n.next=10;break}a=r.data,n.next=11;break;case 10:throw new Error("Resposta do servidor ".concat(r.status));case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),a=ut(n.t0,t);case 16:return n.prev=16,n.abrupt("return",a);case 19:case"end":return n.stop()}}),null,null,[[2,13,16,19]])},ht=function(){var e,t,a,r,n=arguments;return $.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=n.length>0&&void 0!==n[0]?n[0]:{},n.length>1&&void 0!==n[1]?n[1]:1,n.length>2&&void 0!==n[2]?n[2]:10,t="N\xe3o foi possivel encontrar o cliente",a=[],r=null,o.prev=6,!e.name){o.next=13;break}return o.next=10,$.a.awrap(et.get("".concat(it,"/?name=").concat(e.name)));case 10:r=o.sent,o.next=16;break;case 13:return o.next=15,$.a.awrap(et.get(it));case 15:r=o.sent;case 16:if(200!==r.status){o.next=20;break}a=r.data,o.next=21;break;case 20:throw new Error("Resposta do servidor ".concat(r.status));case 21:o.next=26;break;case 23:o.prev=23,o.t0=o.catch(6),a=ut(o.t0,t);case 26:return o.prev=26,o.abrupt("return",a);case 29:case"end":return o.stop()}}),null,null,[[6,23,26,29]])},mt=new(ge=function e(){Object(f.a)(this,e),Object(se.a)(this,"birthDate",ve,this),Object(se.a)(this,"customersList",Oe,this),Object(se.a)(this,"isLoading",ye,this),Object(se.a)(this,"professionsList",we,this),Object(se.a)(this,"professionsOptions",Ee,this),Object(se.a)(this,"professionsValue",je,this),Object(se.a)(this,"search_address",Ce,this),Object(se.a)(this,"whoIndicated",Se,this),Object(se.a)(this,"whoIndicatedOptions",xe,this),Object(se.a)(this,"whoIndicatedValue",ke,this),Object(se.a)(this,"customer",Ie,this),Object(se.a)(this,"professionsLoad",_e,this),Object(se.a)(this,"whoIndicatedSearchEvent",De,this),Object(se.a)(this,"handleCustomerForm",Pe,this),Object(se.a)(this,"handleDatePicker",ze,this),Object(se.a)(this,"updateCustomerBirthDate",Ae,this),Object(se.a)(this,"handleGenericChange",Le,this),Object(se.a)(this,"handleRadioIsSeller",Re,this),Object(se.a)(this,"handleUserChange",qe,this),Object(se.a)(this,"handleAddressChange",Te,this),Object(se.a)(this,"handleSearchAddressChange",Fe,this),Object(se.a)(this,"getCustomers",Ne,this),Object(se.a)(this,"onClickTableRow",Ve,this)},ve=Object(ce.a)(ge.prototype,"birthDate",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Date("2004")}}),Oe=Object(ce.a)(ge.prototype,"customersList",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ye=Object(ce.a)(ge.prototype,"isLoading",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),we=Object(ce.a)(ge.prototype,"professionsList",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ee=Object(ce.a)(ge.prototype,"professionsOptions",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),je=Object(ce.a)(ge.prototype,"professionsValue",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ce=Object(ce.a)(ge.prototype,"search_address",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Se=Object(ce.a)(ge.prototype,"whoIndicated",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),xe=Object(ce.a)(ge.prototype,"whoIndicatedOptions",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ke=Object(ce.a)(ge.prototype,"whoIndicatedValue",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ie=Object(ce.a)(ge.prototype,"customer",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{bio:"",birth_date:new Date,cellphone:"",cpf:"",is_seller:!1,profession:"",user:{email:"",first_name:"",last_name:"",password:"",username:""},who_indicated:"",address:{city:".",complement:".",country:".",neighborhood:".",number:".",postcode:".",state:".",street_address:"."}}}}),_e=Object(ce.a)(ge.prototype,"professionsLoad",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t;return $.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,$.a.awrap(ot());case 2:t=a.sent,e.professionsOptions=t.map((function(e){return{key:e.id,text:e.name,value:e.id}}));case 4:case"end":return a.stop()}}))}}}),De=Object(ce.a)(ge.prototype,"whoIndicatedSearchEvent",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){var r;return $.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),!(a.searchQuery.length>0)){n.next=6;break}return n.next=4,$.a.awrap(st(a.searchQuery));case 4:r=n.sent,e.whoIndicatedOptions=r.map((function(e){return{key:e.id,text:"".concat(e.first_name," ").concat(e.last_name),value:e.id}}));case 6:case"end":return n.stop()}}))}}}),Pe=Object(ce.a)(ge.prototype,"handleCustomerForm",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return $.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),e.customer.username=e.customer.cpf,e.customer.password=e.customer.cpf,nt(e.customer);case 4:case"end":return a.stop()}}))}}}),ze=Object(ce.a)(ge.prototype,"handleDatePicker",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.birthDate=t,e.updateCustomerBirthDate()}}}),Ae=Object(ce.a)(ge.prototype,"updateCustomerBirthDate",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.customer.birth_date=rt()(e.birthDate).format("YYYY-MM-DD")}}}),Le=Object(ce.a)(ge.prototype,"handleGenericChange",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){var r=a.name,n=a.value;e.customer[r]=n,"cpf"===r&&(e.customer.user.username=n)}}}),Re=Object(ce.a)(ge.prototype,"handleRadioIsSeller",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){var r=a.checked;e.customer.is_seller=r}}}),qe=Object(ce.a)(ge.prototype,"handleUserChange",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){var r=a.name,n=a.value;e.customer.user[r]=n}}}),Te=Object(ce.a)(ge.prototype,"handleAddressChange",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){var r=a.name,n=a.value;e.customer.address[r]=n}}}),Fe=Object(ce.a)(ge.prototype,"handleSearchAddressChange",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var a,r;return $.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),a=e.search_address.replace("-",""),void 0!==t.target.name){n.next=10;break}if(8!==a.length){n.next=8;break}return n.next=6,$.a.awrap(ct(a));case 6:r=n.sent,e.customer.address=r;case 8:n.next=11;break;case 10:e.search_address=t.target.value;case 11:case"end":return n.stop()}}))}}}),Ne=Object(ce.a)(ge.prototype,"getCustomers",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t;return $.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,$.a.awrap(ht());case 2:t=a.sent,e.customersList=t;case 4:case"end":return a.stop()}}))}}}),Ve=Object(ce.a)(ge.prototype,"onClickTableRow",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var a;return $.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.isLoading=!0,r.next=3,$.a.awrap(lt(t.values.id));case 3:(a=r.sent).error?E.notify.show(a.error.user+"=="+a.error.tech,"error"):(a.address={city:".",complement:".",country:".",neighborhood:".",number:".",postcode:".",state:".",street_address:"."},e.customer=Object(he.a)({},a)),e.isLoading=!1;case 6:case"end":return r.stop()}}))}}}),ge),dt=function(e,t){return{error:{user:t,tech:e}}},pt=function(e){var t,a,r;return $.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t="Falha ao consultar o produto ID ".concat(e," Tente Novamente!"),a={},n.prev=2,n.next=5,$.a.awrap(et.get("".concat("/api/v1/products","/").concat(e,"/")));case 5:if(200!==(r=n.sent).status){n.next=10;break}a=r.data,n.next=11;break;case 10:throw new Error("Resposta do servidor ".concat(r.status));case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),a=dt(n.t0,t);case 16:return n.prev=16,n.abrupt("return",a);case 19:case"end":return n.stop()}}),null,null,[[2,13,16,19]])},bt=function(){var e,t,a,r,n=arguments;return $.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=n.length>0&&void 0!==n[0]?n[0]:{},n.length>1&&void 0!==n[1]?n[1]:1,n.length>2&&void 0!==n[2]?n[2]:10,t="N\xe3o foi possivel encontrar o produto",a=[],r=null,o.prev=6,!e.name){o.next=13;break}return o.next=10,$.a.awrap(et.get("".concat("/api/v1/products","/?name=").concat(e.name)));case 10:r=o.sent,o.next=16;break;case 13:return o.next=15,$.a.awrap(et.get("/api/v1/products"));case 15:r=o.sent;case 16:if(200!==r.status){o.next=20;break}a=r.data,o.next=21;break;case 20:throw new Error("Resposta do servidor ".concat(r.status));case 21:o.next=26;break;case 23:o.prev=23,o.t0=o.catch(6),a=dt(o.t0,t);case 26:return o.prev=26,o.abrupt("return",a);case 29:case"end":return o.stop()}}),null,null,[[6,23,26,29]])},ft={createSale:function(e){return $.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.info(e),t.next=4,$.a.awrap(et.post("".concat("/api/v1/sales","/"),e));case 4:if(201!==t.sent.status){t.next=7;break}return t.abrupt("return",!0);case 7:return t.abrupt("return",!1);case 10:throw t.prev=10,t.t0=t.catch(0),t.t0;case 13:case"end":return t.stop()}}),null,null,[[0,10]])}},gt={customer:{id:null},date:new Date,products:[{quantity:1}],amount:0},vt=new(Ge=function e(){var t=this;Object(f.a)(this,e),Object(se.a)(this,"sale",He,this),Object(se.a)(this,"customers",Ye,this),Object(se.a)(this,"isLoading",Qe,this),Object(se.a)(this,"products",Ue,this),Object(se.a)(this,"sale_status",Be,this),Object(se.a)(this,"handleCustomerChange",Me,this),Object(se.a)(this,"handleCustomerSearchChange",Je,this),Object(se.a)(this,"handleDatePicker",We,this),Object(se.a)(this,"handleProductChange",Ke,this),Object(se.a)(this,"handleProductSearchChange",Xe,this),Object(se.a)(this,"handleSaleForm",Ze,this),this.loadCustomerToSale=function(e){var a;return $.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.isLoading=!0,r.next=3,$.a.awrap(lt(e));case 3:(a=r.sent).error?E.notify.show(a.error.user+"=="+a.error.tech,"error"):t.sale.customer=Object(he.a)({},a),t.isLoading=!1;case 6:case"end":return r.stop()}}))},this.loadProductToSale=function(e){var a,r;return $.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.isLoading=!0,n.next=3,$.a.awrap(pt(e));case 3:(a=n.sent).error?E.notify.show(a.error.user+"=="+a.error.tech,"error"):(r=t.sale.products[0].quantity,a.quantity=r,t.sale.products[0]=Object(he.a)({},a)),t.isLoading=!1;case 6:case"end":return n.stop()}}))},Object(se.a)(this,"onChageSaleQuantity",$e,this),this.recalculateAmout=function(){if(void 0!==t.sale.products[0].price)try{t.sale.amount=t.sale.products[0].quantity*t.sale.products[0].price}catch(e){console.err(e)}},this.isCustomerValid=function(){return null!==t.sale.customer.id||(E.notify.show("Para venda o campo cliente \xe9 obrigat\xf3rio","error"),!1)},this.showDisableCustomerErrorValidate=function(){t.customerError=null},this.isSaleDateValid=function(e){var t=rt()(new Date).format("YYYY-MM-DD");return!!rt()(e).isSameOrAfter(t,"day")||(E.notify.show("A data n\xe3o pode ser menor que a data corrente","error"),!1)},this.areProductsValid=function(){var e=t.sale.products;return void 0===e[0].id||void 0===e[0].quantity||void 0===e[0].price?(E.notify.show("Escolha um produto","error"),!1):1===e.length||(E.notify.show("erro ao processar o produto, verifique se algum foi selecionado","error"),!1)},this.isSaleQuantityValid=function(){return!(t.sale.quantity<1)||(E.notify.show("A quantidade deve ser de um ou mais","error"),!1)},this.cleanScreen=function(){t.sale=gt,t.customers=[],t.isLoading=!1,t.products=[]},this.service=ft},He=Object(ce.a)(Ge.prototype,"sale",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return gt}}),Ye=Object(ce.a)(Ge.prototype,"customers",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Qe=Object(ce.a)(Ge.prototype,"isLoading",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Ue=Object(ce.a)(Ge.prototype,"products",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Be=Object(ce.a)(Ge.prototype,"sale_status",[ie.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"Em an\xe1lise"}}),Me=Object(ce.a)(Ge.prototype,"handleCustomerChange",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){return $.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:t.preventDefault(),null!==a.value&&(e.customerError=null,e.loadCustomerToSale(parseInt(a.value)));case 2:case"end":return r.stop()}}))}}}),Je=Object(ce.a)(Ge.prototype,"handleCustomerSearchChange",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){var r,n;return $.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.preventDefault(),!e.isLoading){o.next=3;break}return o.abrupt("return");case 3:if(e.isLoading=!0,r=a.searchQuery,n=[],e.showDisableCustomerErrorValidate(),!(isNaN(r)&&r.length>0)){o.next=14;break}if(!(r.length>2)){o.next=14;break}return o.next=12,$.a.awrap(ht({name:r}));case 12:(n=o.sent).length>0&&(e.customers=n.map((function(e){return{key:e.id,text:"".concat(e.id," - ").concat(e.user.first_name," - ").concat(e.user.last_name),value:e.id}})));case 14:e.isLoading=!1;case 15:case"end":return o.stop()}}))}}}),We=Object(ce.a)(Ge.prototype,"handleDatePicker",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return $.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.sale.date=t;case 1:case"end":return a.stop()}}))}}}),Ke=Object(ce.a)(Ge.prototype,"handleProductChange",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){return $.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),null===a.value){r.next=4;break}return r.next=4,$.a.awrap(e.loadProductToSale(parseInt(a.value)));case 4:e.recalculateAmout();case 5:case"end":return r.stop()}}))}}}),Xe=Object(ce.a)(Ge.prototype,"handleProductSearchChange",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){var r,n;return $.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.preventDefault(),!e.isLoading){o.next=3;break}return o.abrupt("return");case 3:if(e.isLoading=!0,!((r=a.searchQuery).length>2)){o.next=10;break}return o.next=8,$.a.awrap(bt({name:r}));case 8:(n=o.sent).length>0&&(e.products=n.map((function(e){return{key:e.id,text:"".concat(e.name),value:e.id}})));case 10:e.isLoading=!1;case 11:case"end":return o.stop()}}))}}}),Ze=Object(ce.a)(Ge.prototype,"handleSaleForm",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var a,r;return $.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),a={status:1},e.isCustomerValid()){n.next=4;break}return n.abrupt("return");case 4:if(a.customer=e.sale.customer.id,r=rt()(e.sale.date).format("YYYY-MM-DD"),e.isSaleDateValid(r)){n.next=8;break}return n.abrupt("return");case 8:if(a.date=r,e.areProductsValid()){n.next=11;break}return n.abrupt("return");case 11:if(e.isSaleQuantityValid()){n.next=13;break}return n.abrupt("return");case 13:return a.products=[{product:e.sale.products[0].id,price:parseFloat(e.sale.products[0].price),quantity:parseInt(e.sale.products[0].quantity)}],a.amount=e.sale.products[0].price*e.sale.products[0].quantity,n.prev=15,n.next=18,$.a.awrap(e.service.createSale(a));case 18:n.sent&&(E.notify.show("Venda registrada com sucesso","success"),e.cleanScreen()),n.next=26;break;case 22:n.prev=22,n.t0=n.catch(15),E.notify.show("Houve uma falha ao registrar a Venda , tente novamente","error"),console.error(n.t0);case 26:case"end":return n.stop()}}),null,null,[[15,22]])}}}),$e=Object(ce.a)(Ge.prototype,"onChageSaleQuantity",[ie.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){t.preventDefault();var r=a.value;!isNaN(r)&&parseInt(r)>0&&(e.sale.products[0].quantity=parseInt(r),e.recalculateAmout())}}}),Ge),Ot={AuthStore:tt,CustomerStore:mt,SaleStore:vt};u.a.render(c.a.createElement(l.a,Object.assign({},Ot,{children:oe}),c.a.createElement(oe,null)),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.63a60a75.chunk.js.map