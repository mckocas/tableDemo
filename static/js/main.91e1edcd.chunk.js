(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,a){e.exports=a(551)},216:function(e,t,a){},547:function(e,t,a){},551:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(3),o=a.n(r),s=(a(216),a(206)),c=a(207),i=a(209),u=a(208),m=a(210),d=a(25),h=a(7),p=a(557),g=a(554),E=a(555),k=a(556),y=(a(547),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=a.state.temp;t[e.target.name]=e.target.value,a.setState(t)},a.state={users:[{name:"Mehmet Can",surname:"Kocas",in:12345678901},{name:"Murat",surname:"Korkmaz",in:65498732156},{name:"Ayse",surname:"Ozturk",in:15975398712}],temp:{name:"",surname:"",in:-1},addModal:!1,updateModal:!1,currentUser:-1},a.addToggle=a.addToggle.bind(Object(d.a)(Object(d.a)(a))),a.addUser=a.addUser.bind(Object(d.a)(Object(d.a)(a))),a.updateToggle=a.updateToggle.bind(Object(d.a)(Object(d.a)(a))),a.updateUser=a.updateUser.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"addToggle",value:function(){this.setState({addModal:!this.state.addModal})}},{key:"updateToggle",value:function(){this.setState({updateModal:!this.state.updateModal})}},{key:"updateNew",value:function(e,t,a,n){var l={name:t,surname:a,in:n};this.setState({currentUser:e,temp:l}),this.updateToggle()}},{key:"updateUser",value:function(){var e=this.state.temp,t=this.state.users;t[this.state.currentUser]=e,this.setState({users:t}),this.updateToggle()}},{key:"addUser",value:function(){var e=this.state.temp,t=this.state.users.concat(e);if(-1===this.state.temp.in||""===this.state.temp.name||""===this.state.temp.surname)return alert("Bo\u015f b\u0131rakmay\u0131n."),!1;this.setState({users:t,temp:{name:"",surname:"",in:-1}}),this.addToggle(),console.log(this.state.temp)}},{key:"deleteUser",value:function(e){var t=this.state.users;t.splice(e,1),this.setState({users:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(h.Button,{color:"primary",className:"addButton",size:"lg",block:!0,onClick:this.addToggle},"Yeni kay\u0131t eklemek i\xe7in t\u0131klay\u0131n\u0131z."),l.a.createElement(p.a,{isOpen:this.state.addModal,toggle:this.addToggle,className:this.props.className},l.a.createElement(g.a,{toggle:this.addToggle},"Yeni"),l.a.createElement(E.a,null,l.a.createElement(h.Input,{type:"text",icon:"fa-check",id:"uN",IconColor:"primary",name:"name",placeholder:"isim",onChange:this.handleChange,required:!0}),l.a.createElement(h.Input,{type:"text",icon:"fa-check",id:"uS",IconColor:"primary",name:"surname",placeholder:"soyisim",onChange:this.handleChange}),l.a.createElement(h.Input,{type:"text",icon:"fa-check",id:"uI",IconColor:"primary",name:"in",placeholder:"tck no",onChange:this.handleChange})),l.a.createElement(k.a,null,l.a.createElement(h.Button,{color:"primary",onClick:this.addUser},"Ekle"),l.a.createElement(h.Button,{color:"secondary",onClick:this.addToggle},"Vazge\xe7"))),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",{className:"tableHeader"},l.a.createElement("th",null,"\u0130sim"),l.a.createElement("th",null,"Soyisim"),l.a.createElement("th",null,"TCK No"),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.state.users.map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.surname),l.a.createElement("td",null,t.in),l.a.createElement("td",{className:"addDeleteBts"},l.a.createElement(h.Button,{className:"deleteBt",onClick:function(){return e.deleteUser(a)},color:"danger"},"Sil"),l.a.createElement(h.Button,{className:"updateBt",onClick:function(){return e.updateNew(a,t.name,t.surname,t.in)},color:"info"},"De\u011fi\u015ftir"),l.a.createElement(p.a,{isOpen:e.state.updateModal,toggle:e.updateToggle,className:e.props.className},l.a.createElement(g.a,{toggle:e.updateToggle},"G\xfcncelle"),l.a.createElement(E.a,null,l.a.createElement(h.Input,{type:"text",icon:"fa-check",id:"uN",IconColor:"primary",name:"name",placeholder:e.state.temp.name,onChange:e.handleChange,requireText:!0}),l.a.createElement(h.Input,{type:"text",icon:"fa-check",id:"uS",IconColor:"primary",name:"surname",placeholder:e.state.temp.surname,onChange:e.handleChange,requireText:!0}),l.a.createElement(h.Input,{type:"text",icon:"fa-check",id:"uI",IconColor:"primary",name:"in",placeholder:e.state.temp.in,onChange:e.handleChange,requireText:!0})),l.a.createElement(k.a,null,l.a.createElement(h.Button,{color:"primary",onClick:e.updateUser},"G\xfcncelle"),l.a.createElement(h.Button,{color:"secondary",onClick:e.updateToggle},"Vazge\xe7")))))}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[211,2,1]]]);
//# sourceMappingURL=main.91e1edcd.chunk.js.map