(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"a":"Hi there, my name is Michelle Wong and this is my website! I am a fresh graduate from the University of Toronto with degrees in Computer Science and Mathematics. During my time at UofT, I\'ve had the opportunity to be a TA for second year theory courses (CSC236) and more practical ones (CSC209, CSC384). My hobbies include mahjong, rhythm games, and dancing. You can contact me at: chellewsa@gmail.com.","e":[{"name":"React Website","dev_cycle":"2017-2019","link":"https:///github.com/jellyfishe/jellyfishe.github.io","desc":"I made this website in React! This has been something I wanted to try doing for a while; ever since I created my first website years ago using purely HTML and CSS."},{"name":"Discord Bot","dev_cycle":"2018-2020","link":"https://github.com/jellyfishe/UOFTDiscordBot","desc":"I made this bot for my school. It was used to help out with courses and shuttle bus routes."},{"name":"Filename Scrambler","dev_cycle":"2019","link":"https://github.com/jellyfishe/filescrambler","desc":"Small little bash script I wrote to help manage my background images."},{"name":"DDR Recorder","dev_cycle":"2020","link":"https://github.com/jellyfishe/DDRSnap","desc":"I made this sideproject for my passion at DDR. I always wanted a way to collect my scores in an easy format. I plan to add number recognition to it so that people can take photos and it will automatically score a song you just played. This would be a convenience for those too tired to input their scores after a long session."}],"b":{"Github":"www.github.ca","HackerRank":"hackerrank.com"},"d":{"Twitter":"www.twitter.com"},"c":{"r/unixporn":"www.reddit.com/r/unixporn"}}')},,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/profilepic.b5c48fbf.jpg"},,,,,function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),i=a.n(s),c=(a(33),a(14)),l=(a(34),a(23)),o=a.n(l),m=(a(35),a(10)),u=a(2),h=a(24);a(38);function d(e){var t=Object.keys(e.items).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(m.b,{to:"/"+e,className:"sidebar-link"},e))}));return r.a.createElement("ul",{className:"sidebar-list"},t)}function p(e){return r.a.createElement("div",{className:"sidebar-card"},r.a.createElement("div",{id:"squareimg"},r.a.createElement("img",{className:"sidebar-pic",src:e.profile,alt:"logo"})),r.a.createElement("h1",{id:"sidetitle"},e.name),r.a.createElement("span",{className:"position"},e.position))}function g(e){return r.a.createElement("div",{className:"sidebar-footer"},r.a.createElement("p",null,r.a.createElement("small",null,"\xa9 Copyright \xa9 2020")))}var f=function(e){return r.a.createElement("aside",{className:"sidebar"},r.a.createElement(p,{profile:e.logo,name:e.name,position:e.position}),r.a.createElement(d,{items:e.sideItems}),r.a.createElement(g,null))},v=a(7);a(41);function E(e){var t=v.e.map((function(e,t){return r.a.createElement("article",{className:"entry",key:t},r.a.createElement("div",{className:"inner-entry"},r.a.createElement("div",{id:"icon"},r.a.createElement("i",null)),r.a.createElement("h2",{className:"proj-title"},r.a.createElement("a",{href:e.link},e.name)," ",r.a.createElement("span",null,e.dev_cycle)),r.a.createElement("p",{className:"desc"},e.desc)))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"projects-centered"},t))}var y=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4",style:{textAlign:"left"}},"Projects"),r.a.createElement(E,null))};var b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4",style:{textAlign:"left"}},"About"),r.a.createElement("p",{style:{paddingRight:"3em",textAlign:"left"}},v.a))},w=a(11),k=a(12),N=a(16),j=a(15),S=(a(42),function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(e){var n;Object(w.a)(this,a),n=t.call(this,e);var r=new Date;return n.state={hours:n._pad(r.getHours().toString()),minutes:n._pad(r.getMinutes().toString())},n}return Object(k.a)(a,[{key:"_setTime",value:function(){var e=new Date;this.setState({hours:this._pad(e.getHours().toString()),minutes:this._pad(e.getMinutes().toString())})}},{key:"_pad",value:function(e){return("0"+e).slice(-2)}},{key:"render",value:function(){return r.a.createElement("div",{className:"center_clock"},r.a.createElement("time",{id:"clock"},this.state.hours,":",this.state.minutes))}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e._setTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}}]),a}(r.a.Component));a(43);var C=function(e){var t=Object.entries(e.items).map((function(e,t){var a=Object(c.a)(e,2),n=a[0],s=a[1];return r.a.createElement("a",{key:t,className:"bookmark-link",href:"http://"+s},r.a.createElement("p",null,n))}));return r.a.createElement("div",{style:{display:"table-cell",minWidth:"15vw"}},r.a.createElement("p",{className:"bookmark-header",style:{background:"#0099FF",margin:"3px"}},e.header),t)},I=a(13);a(44);function O(e){var t=e.suggestions.length>=3?e.suggestions.slice(0,3).map((function(e,t){return r.a.createElement("li",{key:t,className:"search-suggestions"},e)})):[];return r.a.createElement("ul",{id:"search-suggestions"},t)}var D=function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(w.a)(this,a),(n=t.call(this,e)).state={value:"",suggestions:[],showSuggestions:!0},n.handleChange=n.handleChange.bind(Object(I.a)(n)),n}return Object(k.a)(a,[{key:"handleChange",value:function(e){var t=this;if(this.setState({value:e.target.value}),""!==e.target.value){fetch("https://cors-anywhere.herokuapp.com/https://duckduckgo.com/ac/?q="+e.target.value).then((function(e){return e.ok?e.json():console.log("Something went wrong")})).then((function(e){console.log(e.map((function(e){return e.phrase}))),t.setState({suggestions:e.map((function(e){return e.phrase}))})})).catch((function(e){return console.log(e)}))}else this.setState({suggestions:[]})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{autoComplete:"off",spellCheck:"false",action:"https://www.google.ca/search",method:"get",target:"_blank",id:"search-form"},r.a.createElement("input",{name:"q",type:"text",value:this.state.value,onChange:this.handleChange,className:"searchbar"}),r.a.createElement(O,{suggestions:this.state.suggestions})))}}]),a}(r.a.Component);a(45);var x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wave-container"},r.a.createElement("div",{className:"wave wave1"}),r.a.createElement("div",{className:"wave wave2"}),r.a.createElement("div",{className:"wave wave3"}),r.a.createElement("div",{className:"wave wave4"})))};a(46);var T=function(e){return r.a.createElement("div",{className:"startpage"},r.a.createElement(S,null),r.a.createElement("div",{style:{display:"table",margin:"0 auto",tableLayout:"fixed"}},r.a.createElement(C,{header:"Dev",items:v.b}),r.a.createElement(C,{header:"Fun",items:v.d}),r.a.createElement(C,{header:"Reddit",items:v.c})),r.a.createElement(D,null),r.a.createElement(x,null))};function _(e){var t=e.items,a=Object.entries(t).map((function(e,t){var a=Object(c.a)(e,2),n=a[0],s=a[1];return s.prototype.isReactComponent?r.a.createElement(u.a,{key:t,path:"/"+n,component:s}):r.a.createElement(u.a,{key:t,path:"/"+n,render:s})}));return r.a.createElement(r.a.Fragment,null,a)}var R=function(){var e={name:"Michelle Wong",position:"Software Developer",pic:o.a},t={ABOUT:b,PROJECTS:y,STARTPAGE:T};return r.a.createElement(m.a,{basename:""},r.a.createElement(h.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Michelle's Site")),r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"}),r.a.createElement("div",{className:"App"},r.a.createElement(f,{logo:e.pic,name:e.name,position:e.position,sideItems:t}),r.a.createElement(u.c,null,r.a.createElement("div",{style:{marginLeft:"30%",height:"100vh"}},r.a.createElement(_,{items:t})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.8cccf214.chunk.js.map