(this["webpackJsonpdb-clothing"]=this["webpackJsonpdb-clothing"]||[]).push([[0],{42:function(e,t,a){e.exports=a(84)},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),i=a.n(c),l=a(12),s=a(5),o=a(37),m=a(13),u=a(25),p=a(38),d=a.n(p),b=a(39),h=a.n(b),g=a(4),f="SET_CURRENT_USER",E={currentUser:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(g.a)(Object(g.a)({},e),{},{currentUser:t.payload});default:return e}},y={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},O=a(41),k=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(O.a)(e),[Object(g.a)(Object(g.a)({},t),{},{quantity:1})])},j=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{quantity:e.quantity-1}):e}))},N={hidden:!0,cartItems:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE_CART_HIDDEN:return Object(g.a)(Object(g.a)({},e),{},{hidden:!e.hidden});case y.ADD_ITEM:return Object(g.a)(Object(g.a)({},e),{},{cartItems:k(e.cartItems,t.payload)});case y.REMOVE_ITEM:return Object(g.a)(Object(g.a)({},e),{},{cartItems:j(e.cartItems,t.payload)});case y.CLEAR_ITEM_FROM_CART:return Object(g.a)(Object(g.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},S={key:"root",storage:h.a,whitelist:["cart"]},x=Object(m.c)({user:v,cart:w,directory:U,shop:T}),R=Object(u.a)(S,x),A=[d.a];var M=Object(m.d)(R,m.a.apply(void 0,A)),P=Object(u.b)(M),B=(u.b,a(53),a(10)),_=a.n(B),D=a(14),G=a(19),q=a(20),L=a(22),W=a(21),H=a(6),J=a(3),V=(a(55),a(15)),z=Object(J.a)([function(e){return e.directory}],(function(e){return e.sections})),F=(a(56),Object(H.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),K=(a(58),Object(J.b)({sections:z})),Q=Object(s.b)(K)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(V.a)(e,["id"]);return r.a.createElement(F,Object.assign({key:t},a))})))})),Y=(a(59),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(Q,null))}),X=(a(60),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(V.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),Z=function(){return{type:y.TOGGLE_CART_HIDDEN}},$=function(e){return{type:y.ADD_ITEM,payload:e}},ee=(a(61),Object(s.b)(null,(function(e){return{addItem:function(t){return e($(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c)),r.a.createElement(X,{onClick:function(){return a(t)},inverted:!0},"Add to cart"))}))),te=(a(62),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(ee,{key:e.id,item:e})}))))}),ae=Object(J.a)([function(e){return e.shop}],(function(e){return e.collections})),ne=Object(J.a)([ae],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),re=(a(63),Object(J.b)({collections:ne})),ce=Object(s.b)(re)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,a=Object(V.a)(e,["id"]);return r.a.createElement(te,Object.assign({key:t},a))})))})),ie=(a(64),Object(s.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(J.a)([ae],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(ee,{key:e.id,item:e})}))))}))),le=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(H.b,{exact:!0,path:"".concat(t.path),component:ce}),r.a.createElement(H.b,{path:"".concat(t.path,"/:collectionId"),component:ie}))},se=a(18),oe=(a(65),function(e){var t=e.handleChange,a=e.label,n=Object(V.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),me=a(23),ue=a.n(me);a(69),a(73);ue.a.initializeApp({apiKey:"AIzaSyD7y0-lOH4LH4-iA11t940uJPXP8j0fc70",authDomain:"aqua-db.firebaseapp.com",databaseURL:"https://aqua-db.firebaseio.com",projectId:"aqua-db",storageBucket:"aqua-db.appspot.com",messagingSenderId:"680436503129",appId:"1:680436503129:web:50bbeb30e7c082aa585748",measurementId:"G-RFZBG3FTND"});var pe=function(){var e=Object(D.a)(_.a.mark((function e(t,a){var n,r,c,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=be.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,n.set(Object(g.a)({displayName:r,email:c,createdAt:i},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}(),de=ue.a.auth(),be=ue.a.firestore(),he=new ue.a.auth.GoogleAuthProvider;he.setCustomParameters({prompt:"select_account"});var ge=function(){return de.signInWithPopup(he)},fe=(ue.a,a(75),function(e){Object(L.a)(a,e);var t=Object(W.a)(a);function a(e){var n;return Object(G.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(D.a)(_.a.mark((function e(t){var a,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,de.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(se.a)({},r,a))},n.state={email:"",password:""},n}return Object(q.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(oe,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(oe,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(X,{type:"submit"}," Sign in "),r.a.createElement(X,{onClick:ge,isGoogleSignIn:!0},"Sign in with Google"))))}}]),a}(r.a.Component)),Ee=(a(76),function(e){Object(L.a)(a,e);var t=Object(W.a)(a);function a(){var e;return Object(G.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(D.a)(_.a.mark((function t(a){var n,r,c,i,l,s,o;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,i=n.password,l=n.confirmPassword,i===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,de.createUserWithEmailAndPassword(c,i);case 8:return s=t.sent,o=s.user,t.next=12,pe(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(se.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(q.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(oe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(oe,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(oe,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(oe,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(X,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component)),ve=(a(77),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(fe,null),r.a.createElement(Ee,null))}),ye=(a(78),Object(s.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:y.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e($(t))},removeItem:function(t){return e(function(e){return{type:y.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,s=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),Oe=a(40),ke=a.n(Oe),je=function(e){var t=e.price,a=100*t;return r.a.createElement(ke.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Succesful!")},stripeKey:"pk_test_WBqax2FWVzS9QlpJScO07iuL"})},Ne=function(e){return e.cart},we=Object(J.a)([Ne],(function(e){return e.cartItems})),Ce=Object(J.a)([Ne],(function(e){return e.hidden})),Ue=Object(J.a)([we],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ie=Object(J.a)([we],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Te=(a(79),Object(J.b)({cartItems:we,total:Ie})),Se=Object(s.b)(Te)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(ye,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},"TOTAL: $",a),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(je,{price:a}))}));function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Re(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ae=r.a.createElement("g",null),Me=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Be=r.a.createElement("g",null),_e=r.a.createElement("g",null),De=r.a.createElement("g",null),Ge=r.a.createElement("g",null),qe=r.a.createElement("g",null),Le=r.a.createElement("g",null),We=r.a.createElement("g",null),He=r.a.createElement("g",null),Je=r.a.createElement("g",null),Ve=r.a.createElement("g",null),ze=r.a.createElement("g",null),Fe=r.a.createElement("g",null),Ke=function(e){var t=e.svgRef,a=e.title,n=Re(e,["svgRef","title"]);return r.a.createElement("svg",xe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ae,Me,Pe,Be,_e,De,Ge,qe,Le,We,He,Je,Ve,ze,Fe)},Qe=r.a.forwardRef((function(e,t){return r.a.createElement(Ke,xe({svgRef:t},e))})),Ye=(a.p,a(80),Object(J.b)({itemCount:Ue})),Xe=Object(s.b)(Ye,(function(e){return{toggleCartHidden:function(){return e(Z())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Qe,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),Ze=(a(81),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",n)))}),$e=(a(82),Object(J.b)({cartItems:we})),et=Object(H.g)(Object(s.b)($e)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Ze,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(X,{onClick:function(){a.push("/checkout"),n(Z())}},"GO TO CHECKOUT"))}))),tt=Object(J.a)([function(e){return e.user}],(function(e){return e.currentUser}));function at(){return(at=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function nt(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var rt=r.a.createElement("title",null,"Group"),ct=r.a.createElement("desc",null,"Created with Sketch."),it=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),lt=function(e){var t=e.svgRef,a=e.title,n=nt(e,["svgRef","title"]);return r.a.createElement("svg",at({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?rt:a?r.a.createElement("title",null,a):null,ct,it)},st=r.a.forwardRef((function(e,t){return r.a.createElement(lt,at({svgRef:t},e))})),ot=(a.p,a(83),Object(J.b)({currentUser:tt,hidden:Ce})),mt=Object(s.b)(ot)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(st,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return de.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(Xe,null)),a?null:r.a.createElement(et,null))})),ut=function(e){Object(L.a)(a,e);var t=Object(W.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(q.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=de.onAuthStateChanged(function(){var t=Object(D.a)(_.a.mark((function t(a){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,pe(a);case 3:t.sent.onSnapshot((function(t){e(Object(g.a)({id:t.id},t.data()))}));case 5:e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(mt,null),r.a.createElement(H.d,null,r.a.createElement(H.b,{exact:!0,path:"/",component:Y}),r.a.createElement(H.b,{path:"/shop",component:le}),r.a.createElement(H.b,{exact:!0,path:"/checkout",component:Se}),r.a.createElement(H.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(H.a,{to:"/"}):r.a.createElement(ve,null)}})))}}]),a}(r.a.Component),pt=Object(J.b)({currentUser:tt}),dt=Object(s.b)(pt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))(ut);i.a.render(r.a.createElement(s.a,{store:M},r.a.createElement(l.a,null,r.a.createElement(o.a,{persistor:P},r.a.createElement(dt,null)))),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.17323577.chunk.js.map