(this["webpackJsonphigher-order-func"]=this["webpackJsonphigher-order-func"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),a=s(4),i=s.n(a),c=(s(13),s(3),s(5)),l=s(6),d=s(8),j=s(7),u=s(0),h=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).renderItems=function(){return e.state.userData.map((function(e){return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsxs)("li",{className:"list-elements",children:[Object(u.jsxs)("span",{children:["Id: ",e.id]}),Object(u.jsxs)("span",{children:["Name : ",e.name]}),Object(u.jsxs)("span",{children:["User Type: ",e.user_type]})]})},e.id)}))},e.renderItemUserType=function(){return e.state.userData.filter((function(e){return"Designer"===e.user_type})).map((function(e){return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsxs)("li",{className:"list-elements",children:[Object(u.jsxs)("span",{children:["Id: ",e.id]}),Object(u.jsxs)("span",{children:["Name: ",e.name]}),Object(u.jsxs)("span",{children:["User Type:",e.user_type]})]})},e.id)}))},e.renderItemsStartingWithJ=function(){return e.state.userData.filter((function(e){return e.name.startsWith("J")})).map((function(e){return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsxs)("li",{className:"list-elements",children:[Object(u.jsxs)("span",{children:["Id: ",e.id]}),Object(u.jsxs)("span",{children:["Name: ",e.name]}),Object(u.jsxs)("span",{children:["User Type: ",e.user_type]})]})},e.id)}))},e.renderItemsWithAge=function(){return e.state.userData.filter((function(e){return e.age>28&&e.age<=50})).map((function(e){return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsxs)("li",{className:"list-elements",children:[Object(u.jsxs)("span",{children:["Id: ",e.id]}),Object(u.jsxs)("span",{children:["Name: ",e.name]}),Object(u.jsxs)("span",{children:["User Type: ",e.user_type]})]})},e.id)}))},e.renderItemsTotalYears=function(){return e.state.userData.filter((function(e){return"Designer"===e.user_type})).map((function(e){return e.years})).reduce((function(e,t){var s=e+t;return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsx)("li",{className:"list-elements",children:Object(u.jsxs)("span",{children:["Ans: ",s]})})})}))},e.state={userData:[{id:"1",name:"Joe",user_type:"Developer",age:31,years:11},{id:"2",name:"Hill",user_type:"Designer",age:26,years:4},{id:"3",name:"John",user_type:"Teacher",age:24,years:2},{id:"4",name:"Sam",user_type:"Entreprenuer",age:58,years:25},{id:"5",name:"Jack",user_type:"Designer",age:43,years:18}]},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)("h1",{children:"Display all items"}),Object(u.jsx)("div",{className:"display-box",children:Object(u.jsxs)("ul",{children:[this.renderItems()," "]})}),Object(u.jsx)("h1",{children:"Display data based on user type"}),Object(u.jsx)("div",{className:"display-box",children:Object(u.jsx)("ul",{children:this.renderItemUserType()})}),Object(u.jsx)("h1",{children:"Filter all data starting with J"}),Object(u.jsx)("div",{className:"display-box",children:Object(u.jsxs)("ul",{children:[this.renderItemsStartingWithJ()," "]})}),Object(u.jsx)("h1",{children:"Filter data based on age, greater than 28 and less or equal to 50"}),Object(u.jsx)("div",{className:"display-box",children:Object(u.jsxs)("ul",{children:[this.renderItemsWithAge()," "]})}),Object(u.jsx)("h1",{children:"Find the total years of the designers"}),Object(u.jsx)("div",{className:"display-box",children:Object(u.jsx)("ul",{children:this.renderItemsTotalYears()})})]})}}]),s}(r.a.Component);var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(h,{})})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),m()},3:function(e,t,s){}},[[15,1,2]]]);
//# sourceMappingURL=main.53ac2986.chunk.js.map