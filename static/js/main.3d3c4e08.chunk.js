(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e,t,a){},65:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(24),r=a.n(i),d=(a(65),a.p,a(54),a(66),a(15)),c=a(16),l=a(22),o=a(21),h=a(79),u=a(32),p=a(1),j=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(h.a,{children:[Object(p.jsx)(h.a.Brand,{children:"Siddharth Shenoy's Personal Portfolio"}),Object(p.jsx)(u.b,{to:"/MemoryGame",className:"nav-link",children:"Memory Game"}),Object(p.jsx)(u.b,{to:"/VehicleDemo",className:"nav-link",children:"Vehicle Demo"})]})}}]),a}(s.Component),m=j,b=a(76),f=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={},s}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(b.a,{children:Object(p.jsxs)("section",{children:["Hey this is Siddharth Shenoy, I am an enthusiastic software-engineer from India and also have interest in the world of Computer Graphics and Physics. ",Object(p.jsx)("br",{}),"Some of my work includes: ",Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsxs)("ol",{children:[Object(p.jsx)("li",{children:"Creating a UCP (User Control Panel) using React.js and Express.js for SAMP gameserver."}),Object(p.jsx)("li",{children:"Memory game using React.js"})]})]})})})}}]),a}(s.Component),O=a(26),C=a(78),g=a(77),v=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={},s.state={VehicleNumber:e.VehicleNumber,SuperOnClickFunc:e.SuperOnClickFunc,Hidden:e.HiddenState,Index:e.UniqueIndex,TransformValue:"rotateY(0deg)"},s.cardOnClick=s.cardOnClick.bind(Object(O.a)(s)),s}return Object(c.a)(a,[{key:"cardOnClick",value:function(){this.state.SuperOnClickFunc({Number:this.state.VehicleNumber,Index:this.state.Index})}},{key:"componentDidUpdate",value:function(e,t){this.props.HiddenState!==t.Hidden&&this.setState({Hidden:this.props.HiddenState}),this.props.Transform!==t.TransformValue&&this.setState({TransformValue:this.props.Transform})}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"flip-card",onClick:this.cardOnClick,children:Object(p.jsxs)("div",{className:"flip-card-inner",style:{transform:this.state.TransformValue,visibility:"REMOVED"===this.state.Hidden?"hidden":"visible"},children:[Object(p.jsx)("div",{className:"flip-card-front",children:Object(p.jsx)("img",{alt:"cardfront",src:"/Personal-Webpage/images/cardfront.png",style:{width:"125px",height:"75px"}})}),Object(p.jsx)("div",{className:"flip-card-back",children:Object(p.jsx)("img",{alt:"cardrear",className:"flip-card",src:"/Personal-Webpage/images/Vehicle_"+this.state.VehicleNumber+".jpg",style:{width:"125px",height:"75px"}})})]})})}}]),a}(s.Component),x=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={CardStates:[],SelectedCards:[],GeneratedList:[],CardMappingList:[],CardList:[],RotateStates:[],IndexList:[],CardsLocked:!1,TimerTime:180,GameEnd:!1,GameEndTitle:"",GameEndReason:"",Timer:null},s.onCardClick=s.onCardClick.bind(Object(O.a)(s)),s.flipCard=s.flipCard.bind(Object(O.a)(s)),s.unflipCard=s.unflipCard.bind(Object(O.a)(s)),s.BackgroundTimer=s.BackgroundTimer.bind(Object(O.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.generateRandomNumbers(18,0,212),this.setState({Timer:setInterval(this.BackgroundTimer,1e3,!0)})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.Timer)}},{key:"generateRandomNumbers",value:function(e,t,a){for(var s=[],n=[];s.length<e;){var i=Math.round(1e3*Math.random())%(a+1)+t;s.includes(i)||s.push(i)}for(var r=this.shuffleList(s),d=0;d<r.length;d++)s.push(r[d]);for(var c=0;c<s.length;c++)n.push(c);for(var l=[],o=[],h=[],u=[],p=0,j=0;j<6;j++){l.push([]),o.push([]),u.push([]);for(var m=0;m<6;m++)l[j].push(s[p]),o[j].push("HIDDEN"),h.push([s[p],j,m]),u[j].push("rotateY(0deg)"),p++}this.setState({GeneratedList:l,CardStates:o,CardMappingList:h,CardList:s,RotateStates:u,IndexList:n})}},{key:"shuffleList",value:function(e){for(var t=[];t.length<e.length;){var a=Math.round(100*Math.random())%e.length;t.includes(a)||t.push(a)}for(var s=[],n=0;n<t.length;n++)s[n]=e[t[n]];return s}},{key:"flipCard",value:function(e,t){var a=this.state.RotateStates;a[e][t]="rotateY(180deg)",this.setState({RotateStates:a})}},{key:"unflipCard",value:function(e,t){var a=this.state.RotateStates;a[e][t]="rotateY(0deg)",this.setState({RotateStates:a})}},{key:"onCardClick",value:function(e){if(!this.state.CardsLocked){for(var t=e.Number,a=e.Index,s=this.state.SelectedCards,n=this.state.RotateStates,i=0;i<this.state.CardMappingList.length;i++)if(this.state.CardMappingList[i][0]===t&&this.state.IndexList[i]===a){var r=this.state.CardMappingList[i][1],d=this.state.CardMappingList[i][2];n[r][d]="rotateY(180deg)"}if(s.push([t,a]),s.length>1&&s[0][1]===a&&s.splice(1,1),this.setState({SelectedCards:s,RotateStates:n}),this.state.SelectedCards.length>=2)if(this.state.SelectedCards[0][0]!==this.state.SelectedCards[1][0]){this.setState({CardsLocked:!0});var c=this;setTimeout((function(){for(var e=0;e<c.state.CardMappingList.length;e++){if(c.state.CardMappingList[e][0]===c.state.SelectedCards[0][0]){var t=c.state.CardMappingList[e][1],a=c.state.CardMappingList[e][2];n[t][a]="rotateY(0deg)"}if(c.state.CardMappingList[e][0]===c.state.SelectedCards[1][0]){var s=c.state.CardMappingList[e][1],i=c.state.CardMappingList[e][2];n[s][i]="rotateY(0deg)"}}c.setState({SelectedCards:[],RotateStates:n,CardsLocked:!1})}),1e3)}else{var l=this;setTimeout((function(){for(var e=l.state.CardStates,t=l.state.CardList,a=0;a<l.state.CardMappingList.length;a++)if(l.state.CardMappingList[a][0]===l.state.SelectedCards[0][0]){var s=l.state.CardMappingList[a][1],n=l.state.CardMappingList[a][2];"REMOVED"!==e[s][n]&&(e[s][n]="REMOVED")}t.splice(t.indexOf(l.state.SelectedCards[0][0]),1),t.splice(t.indexOf(l.state.SelectedCards[0][0]),1),l.setState({SelectedCards:[],CardStates:e}),t.length<=0&&(l.setState({GameEnd:!0,GameEndTitle:"You've won!",GameEndReason:"You have won the game, you may restart it by refreshing this page!"}),clearInterval(l.state.Timer))}),500)}}}},{key:"BackgroundTimer",value:function(){var e=this.state.TimerTime;e>0?(e--,this.setState({TimerTime:e})):this.setState({GameEnd:!0,GameEndTitle:"Time's up!",GameEndReason:"You could not outrun the clock, time's up and you lose the game. You may restart it by refreshing this page!"})}},{key:"render",value:function(){var e=this,t=-1;return Object(p.jsxs)("div",{children:[Object(p.jsxs)(b.a,{align:"center",children:[Object(p.jsxs)(h.a,{children:[Object(p.jsx)(h.a.Brand,{children:"Memory Game - By Siddharth Shenoy"}),Object(p.jsx)(C.a.Link,{href:"#",children:function(){var t=Math.floor(e.state.TimerTime/60),a=e.state.TimerTime%60;return t<10&&(t="0"+t),a<10&&(a="0"+a),t+":"+a}()})]}),Object(p.jsx)("table",{children:Object(p.jsx)("tbody",{children:this.state.GeneratedList.map((function(a,s){return Object(p.jsx)("tr",{children:a.map((function(a,n){return t++,Object(p.jsx)("td",{style:{width:"125px",height:"75px",padding:"5px"},children:Object(p.jsx)(v,{VehicleNumber:a,UniqueIndex:e.state.IndexList[t],SuperOnClickFunc:e.onCardClick,HiddenState:e.state.CardStates[s][n],Transform:e.state.RotateStates[s][n]})},n)}))},s)}))})})]}),Object(p.jsxs)(g.a,{show:this.state.GameEnd,onHide:this.hideModal,children:[Object(p.jsx)(g.a.Header,{children:Object(p.jsx)(g.a.Title,{children:this.state.GameEndTitle})}),Object(p.jsx)(g.a.Body,{children:this.state.GameEndReason})]})]})}}]),a}(s.Component),S=a(8);var k=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(m,{}),Object(p.jsxs)(S.b,{children:[Object(p.jsx)(u.a,{path:"/MemoryGame",children:Object(p.jsx)(x,{})}),Object(p.jsx)(u.a,{path:"/",children:Object(p.jsx)(f,{})})]})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),y()}},[[74,1,2]]]);
//# sourceMappingURL=main.3d3c4e08.chunk.js.map