(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi",mealsLoading:"AvailableMeals_mealsLoading__Yyvu4",mealsError:"AvailableMeals_mealsError__3Alfu"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},,function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(28),n(2)),i=n(1),s=n.n(i),o=n(3),l=Object(i.createContext)({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(12),u=n.n(d),j=n(0),m=function(e){return Object(j.jsx)("div",{className:u.a.backdrop,onClick:e.hideCartHandler})},b=function(e){return Object(j.jsx)("div",{className:u.a.modal,children:Object(j.jsx)("div",{className:u.a.content,children:e.children})})},h=document.getElementById("overlays");function O(e){return Object(j.jsxs)(j.Fragment,{children:[c.a.createPortal(Object(j.jsx)(m,{hideCartHandler:e.hideCartHandler}),h),c.a.createPortal(Object(j.jsx)(b,{children:e.children}),h)]})}var x=n(6),f=n.n(x),p=n(7),_=n.n(p),v=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:_.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:_.a.summary,children:[Object(j.jsx)("span",{className:_.a.price,children:t}),Object(j.jsxs)("span",{className:_.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:_.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},C=n(4),N=n.n(C);function g(e){return Object(j.jsxs)("form",{className:N.a.form,onSubmit:function(e){e.preventDefault()},children:[Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(j.jsx)("input",{type:"text",id:"name"})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"street",children:"Street"}),Object(j.jsx)("input",{type:"text",id:"street"})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(j.jsx)("input",{type:"text",id:"postal"})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"city",children:"City"}),Object(j.jsx)("input",{type:"text",id:"city"})]}),Object(j.jsxs)("div",{className:N.a.actions,children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{className:N.a.submit,children:"Confirm"})]})]})}var y=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(l),d="$".concat(s.totalAmount.toFixed(2)),u=s.items.length>0,m=function(e){s.removeItem(e)},b=function(e){s.addItem(Object(o.a)(Object(o.a)({},e),{},{amount:1}))},h=Object(j.jsx)("ul",{className:f.a["cart-items"],children:s.items.map((function(e){return Object(j.jsx)(v,{name:e.name,amount:e.amount,price:e.price,onRemove:m.bind(null,e.id),onAdd:b.bind(null,e)},e.id)}))}),x=Object(j.jsxs)("div",{className:f.a.actions,children:[Object(j.jsx)("button",{className:f.a["button--alt"],onClick:e.hideCartHandler,children:"Close"}),u&&Object(j.jsx)("button",{className:f.a.button,onClick:function(){c(!0)},children:"Order"})]});return Object(j.jsxs)(O,{hideCartHandler:e.hideCartHandler,children:[h,Object(j.jsxs)("div",{className:f.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:d})]}),a?Object(j.jsx)(g,{onCancel:e.hideCartHandler}):x]})},A=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},w=n(10),H=n.n(w),I=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(l),o=s.items,d=s.items.reduce((function(e,t){return e+t.amount}),0),u="".concat(H.a.button," ").concat(a?H.a.bump:"");return Object(i.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(j.jsxs)("button",{className:u,onClick:e.showCartHandler,children:[Object(j.jsx)("span",{className:H.a.icon,children:Object(j.jsx)(A,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:H.a.badge,children:d})]})},k=n.p+"static/media/meals.2971f633.jpg",M=n(16),F=n.n(M),S=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:F.a.header,children:[Object(j.jsx)("h1",{children:"ReactMeals"}),Object(j.jsx)(I,{showCartHandler:e.showCartHandler})]}),Object(j.jsx)("div",{className:F.a["main-image"],children:Object(j.jsx)("img",{src:k,alt:"A table full of delicious food!"})})]})},E=n(19),D=n.n(E),B=function(){return Object(j.jsxs)("section",{className:D.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},L=n(17),R=n(20),T=n(21),P=n.n(T),Y=function(e){return Object(j.jsx)("div",{className:P.a.card,children:e.children})},z=n(22),U=n.n(z),V=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:U.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(o.a)({ref:t},e.input))]})})),Z=n(23),q=n.n(Z),J=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(j.jsxs)("form",{className:q.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.addToCartHandler(a)},children:[Object(j.jsx)(V,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"+ Add"}),!a&&Object(j.jsx)("p",{children:"please enter valid number (1,5)."})]})},Q=n(13),X=n.n(Q),$=function(e){var t=Object(i.useContext)(l),n="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:X.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:X.a.description,children:e.description}),Object(j.jsx)("div",{className:X.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(J,{id:e.id,addToCartHandler:function(n){console.log("hi"),t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},G=n(14),K=n.n(G),W=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),o=s[0],l=s[1],d=Object(i.useState)(!1),u=Object(r.a)(d,2),m=u[0],b=u[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(R.a)(Object(L.a)().mark((function e(){var t,n,c,r;return Object(L.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-dfd12-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Somthing is wrong, coudn't fetch the available meal");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){l(!1),b(e.message)}))}),[]),o)return Object(j.jsx)("section",{className:K.a.mealsLoading,children:Object(j.jsx)("h4",{children:"Loading..."})});if(m)return Object(j.jsx)("section",{className:K.a.mealsError,children:Object(j.jsx)("h4",{children:m})});var h=n.map((function(e){return Object(j.jsx)($,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return console.log(n),Object(j.jsx)("section",{className:K.a.meals,children:Object(j.jsx)(Y,{children:Object(j.jsx)("ul",{children:h})})})},ee=function(){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)(B,{}),Object(j.jsx)(W,{})]})},te=n(18),ne={items:[],totalAmount:0},ae=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(o.a)(Object(o.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(te.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,l=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[l],u=e.totalAmount-d.price;if(console.log(u),1===d.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(o.a)(Object(o.a)({},d),{},{amount:d.amount-1});(s=Object(te.a)(e.items))[l]=j}return{items:s,totalAmount:u}}return ne},ce=function(e){var t=Object(i.useReducer)(ae,ne),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(j.jsx)(l.Provider,{value:s,children:e.children})};var re=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(ce,{children:[n&&Object(j.jsx)(y,{hideCartHandler:function(){a(!1)}}),Object(j.jsx)(S,{showCartHandler:function(){a(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(ee,{})})]})};c.a.render(Object(j.jsx)(re,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.2f98e2db.chunk.js.map