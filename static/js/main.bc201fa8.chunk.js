(this.webpackJsonpmyportfolioreworked=this.webpackJsonpmyportfolioreworked||[]).push([[0],{165:function(e,t,a){e.exports=a(374)},170:function(e,t,a){},171:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},172:function(e,t,a){},374:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),o=a.n(l),i=(a(170),a(171),a(172),a(99)),c=a.n(i),s=a(59),m=a(60),h=a(65),g=a(61),u=a(67),d=a(379),p=a(383),E=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(d.a,{textAlign:"left",style:{height:"100%"}},r.a.createElement(p.a,{as:"h1",style:{fontSize:"5em",marginLeft:"2vw",marginTop:"70vh",color:"#3BBA9C"}},"Alexander Ma"),r.a.createElement(p.a,{as:"h2",style:{fontSize:"3em",marginLeft:"2vw",color:"#3BBA9C"}},"Aspiring Software Engineer")))}}]),t}(r.a.Component),y=a(66),v=a(384),f=a(385),C=a(382),w=a(37),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleClick=function(e){e.preventDefault(),a.setState({cur:e.target.value})},a.state={name:[],date:[],languages:[],description:[],link:[],cur:"Slate"},a.state.name.Slate="Slate",a.state.date.Slate="Sep 2019 - Jan 2020",a.state.languages.Slate=["React","Flask","HTML/CSS","Firebase"],a.state.description.Slate="Slate is an online platform allowing users to dynamically create time schedules and generate comparsions between peer schedules that automate the time management aspect of group work.",a.state.link.Slate="https://github.com/TheZombieCloud/SlateWebApp",a.state.name.SP="Smart Pharmacy",a.state.date.SP="Sep 2019 - Dec 2019",a.state.languages.SP=["Java","JavaScript","Firebase"],a.state.description.SP="Smart Pharmacy is a project that allows users to access prescription medication easily through facial recognition and a vending machine.",a.state.link.SP="https://git.uwaterloo.ca/arka/smart-pharmacy",a.state.name.Econumy="Econumy",a.state.date.Econumy="July 2019 - Sep 2019",a.state.languages.Econumy=["Python","Discord API","SQLite 3"],a.state.description.Econumy="Econumy is a Discord bot that allows users to build a base, generate money, and infiltrate other bases to steal their money. There are also minigames that the user can play to earn more money, or lose it all.",a.state.link.Econumy="https://github.com/TheZombieCloud/Econumy",a.state.name.HDD="Heart Disease Detector",a.state.date.HDD="June 2019",a.state.languages.HDD=["Python"],a.state.description.HDD="Heart Disease Detector is a group project composed of an artificial neural network as well as a K-Nearest Neighbours model to detect the chance for heart disease given certain variables.",a.state.link.HDD="https://github.com/TheZombieCloud/Heart-Disease-Detector-TOHacks2019-AI-",a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=[this.state.languages[this.state.cur].length],t=0;t<this.state.languages[this.state.cur].length;t++)e[t]=r.a.createElement(y.a,{style:{backgroundColor:"#43455C",color:"#707793"}},this.state.languages[this.state.cur][t]);return r.a.createElement(v.a.Row,null,r.a.createElement(d.a,{textAlign:"left",style:{width:"75%"}},r.a.createElement(f.a,{minWidth:650},r.a.createElement(p.a,{textAlign:"left",as:"h1",style:{marginTop:"20vh",color:"#3BBA9C",fontSize:"3em"}},"Projects"))),r.a.createElement(d.a,{textAlign:"left",style:{marginTop:"20vh",width:"75%",backgroundColor:"#3C3F58",marginBottom:"7vh"}},r.a.createElement(f.a,{minWidth:650},r.a.createElement(v.a,{columns:2},r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Column,{width:3,style:{backgroundColor:"#43455C"}},r.a.createElement(C.a.Group,{vertical:!0,style:{backgroundColor:"#43455C"}},r.a.createElement(C.a,{onClick:this.handleClick,value:"Slate",style:{backgroundColor:"#43455C",color:"Slate"==this.state.cur?"#8F91A8":"#707793",paddingTop:"5vh"}},"Slate"),r.a.createElement(C.a,{onClick:this.handleClick,value:"SP",style:{backgroundColor:"#43455C",color:"SP"==this.state.cur?"#8E90A7":"#707793",paddingTop:"5vh"}},"Smart Pharmacy"),r.a.createElement(C.a,{onClick:this.handleClick,value:"Econumy",style:{backgroundColor:"#43455C",color:"Econumy"==this.state.cur?"#8E90A7":"#707793",paddingTop:"5vh"}},"Econumy"),r.a.createElement(C.a,{onClick:this.handleClick,value:"HDD",style:{backgroundColor:"#43455C",color:"HDD"==this.state.cur?"#8E90A7":"#707793",paddingTop:"5vh"}},"Heart Disease Detector"))),r.a.createElement(v.a.Column,{width:10},r.a.createElement(p.a,{as:"h1",style:{fontSize:"3.5em",marginTop:"4vh",marginLeft:"1vw",color:"#707793"}},this.state.name[this.state.cur]),r.a.createElement(y.a,{style:{backgroundColor:"#43455C",color:"#707793",marginLeft:"1vw",marginTop:"2vh"}},this.state.date[this.state.cur]),r.a.createElement(p.a,{as:"h6",style:{fontSize:"2em",color:"#707793",marginLeft:"1vw"}},"Languages & Tools"),r.a.createElement(y.a.Group,{style:{marginLeft:"1vw",marginTop:"4vh"}},e),r.a.createElement(p.a,{as:"h1",style:{fontSize:"2em",marginTop:"4vh",marginLeft:"1vw",color:"#707793"}},"About"),r.a.createElement("p",{style:{fontSize:"1.5em",marginTop:"4vh",marginLeft:"1vw",color:"#707793"}},this.state.description[this.state.cur]),r.a.createElement(C.a,{href:this.state.link[this.state.cur],icon:!0,labelPosition:"left",style:{marginLeft:"1vw",marginTop:"2vh",marginBottom:"5vh",backgroundColor:"#43455C",color:"#707793"}},"Repo",r.a.createElement(w.a,{name:"github square"})))))),r.a.createElement(f.a,{maxWidth:649},r.a.createElement("div",{style:{backgroundColor:"#43455C",textAlign:"center"}},r.a.createElement(C.a.Group,{horizontal:!0,style:{backgroundColor:"#43455C"}},r.a.createElement(C.a,{onClick:this.handleClick,value:"Slate",style:{backgroundColor:"#43455C",color:"Slate"==this.state.cur?"#8F91A8":"#707793",paddingTop:"2vh",paddingBottom:"2vh"}},"Slate"),r.a.createElement(C.a,{onClick:this.handleClick,value:"SP",style:{backgroundColor:"#43455C",color:"SP"==this.state.cur?"#8F91A8":"#707793",paddingTop:"2vh",paddingBottom:"2vh"}},"Smart Pharmacy"),r.a.createElement(C.a,{onClick:this.handleClick,value:"Econumy",style:{backgroundColor:"#43455C",color:"Econumy"==this.state.cur?"#8F91A8":"#707793",paddingTop:"2vh",paddingBottom:"2vh"}},"Econumy")),r.a.createElement(C.a,{onClick:this.handleClick,value:"HDD",style:{backgroundColor:"#43455C",color:"HDD"==this.state.cur?"#8F91A8":"#707793",paddingTop:"2vh",paddingBottom:"2vh"}},"Heart Disease Detector")),r.a.createElement(p.a,{as:"h1",style:{textAlign:"center",fontSize:"3.5em",marginTop:"4vh",marginLeft:"1vw",color:"#707793"}},this.state.name[this.state.cur]),r.a.createElement(y.a.Group,{style:{textAlign:"center"}},r.a.createElement(y.a,{c:!0,style:{textAlign:"center",backgroundColor:"#43455C",color:"#707793",marginLeft:"1vw",marginTop:"2vh"}},this.state.date[this.state.cur])),r.a.createElement(p.a,{as:"h6",style:{textAlign:"center",fontSize:"2em",color:"#707793",marginLeft:"1vw"}},"Languages & Tools"),r.a.createElement(y.a.Group,{style:{textAlign:"center",marginLeft:"1vw",marginTop:"4vh"}},e),r.a.createElement(p.a,{as:"h1",style:{textAlign:"center",fontSize:"2em",marginTop:"4vh",marginLeft:"1vw",color:"#707793"}},"About"),r.a.createElement("p",{style:{textAlign:"center",fontSize:"1.5em",marginTop:"4vh",marginLeft:"1vw",color:"#707793"}},this.state.description[this.state.cur]),r.a.createElement(v.a,null,r.a.createElement(v.a.Column,{style:{textAlign:"center"}},r.a.createElement(C.a,{href:this.state.link[this.state.cur],icon:!0,labelPosition:"left",style:{align:"center",marginLeft:"1vw",marginTop:"2vh",marginBottom:"5vh",backgroundColor:"#43455C",color:"#707793"}},"Repo",r.a.createElement(w.a,{name:"github square"})))))))}}]),t}(r.a.Component),k=a(381);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{minWidth:650},r.a.createElement(v.a,{columns:2,style:{height:"100%",background:"#2E3047",color:"#3BBA9C"}},r.a.createElement(c.a,{style:{position:"absolute",height:"102%"},params:{particles:{color:{value:"#707793"},line_linked:{color:"#707793"}}}}),r.a.createElement(v.a.Row,{style:{height:"100%"}},r.a.createElement(v.a.Column,null,r.a.createElement(E,null)),r.a.createElement(v.a.Column,null,r.a.createElement(d.a,{textAlign:"right"},r.a.createElement(k.a,null,r.a.createElement(k.a.Content,{style:{marginTop:"3vh",marginRight:"2vw"}},r.a.createElement("iframe",{src:"https://open.spotify.com/embed/track/72FofeAHlloNFTdaCJVp3x",width:"300",height:"380",frameBorder:"0",allowTransparency:"true",allow:"encrypted-media"}))),r.a.createElement(k.a,{style:{marginTop:"30vh",marginRight:"2vw"}},r.a.createElement(k.a.Content,null,r.a.createElement("a",{href:"https://github.com/TheZombieCloud"},r.a.createElement(w.a,{style:{color:"#3BBA9C"},name:"github square",size:"huge"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/alexyma/"},r.a.createElement(w.a,{style:{color:"#3BBA9C"},name:"linkedin square",size:"huge"})),r.a.createElement("a",{href:"Resume%20for%20Programming.pdf"},r.a.createElement(w.a,{style:{color:"#3BBA9C"},name:"file alternate",size:"huge"}))))))),r.a.createElement(v.a.Row,null,r.a.createElement(d.a,{textAlign:"left",style:{marginTop:"20vh",width:"75%",backgroundColor:"#3C3F58"}},r.a.createElement(p.a,{as:"h1",style:{color:"#707793",fontSize:"3em",marginTop:"7vh",marginLeft:"3vw"}},"About Me"),r.a.createElement("p",{style:{marginLeft:"3vw",marginTop:"6vh",marginRight:"2vw",color:"#707793",fontSize:"2em"}},"Hi! I am currently a Software Engineer studying at the University of Waterloo! I love to code and explore the vast world of technology, learning more each step I take. Right now, I'm interested in Full Stack Development, particulary involving the use of Firebase and React.JS."),r.a.createElement(p.a,{as:"h1",style:{color:"#707793",fontSize:"3em",marginLeft:"3vw"}},"Contact Me"),r.a.createElement("p",{style:{marginBottom:"7vh",marginLeft:"3vw",marginTop:"6vh",marginRight:"2vw",color:"#707793",fontSize:"2em"}},"Email: alex.magamer@gmail.com",r.a.createElement("br",null),"Phone: (416)219-7460"))),r.a.createElement(b,null))),r.a.createElement(f.a,{maxWidth:649},r.a.createElement(v.a,{columns:2,style:{height:"100%",background:"#2E3047",color:"#3BBA9C"}},r.a.createElement(c.a,{style:{position:"absolute",height:"102%"},params:{particles:{color:{value:"#707793"},line_linked:{color:"#707793"}}}}),r.a.createElement(v.a.Row,{style:{height:"100%"},centered:!0},r.a.createElement(k.a,null,r.a.createElement(k.a.Content,{style:{marginTop:"7vh"}},r.a.createElement("iframe",{src:"https://open.spotify.com/embed/track/72FofeAHlloNFTdaCJVp3x",width:"300",height:"380",frameBorder:"0",allowTransparency:"true",allow:"encrypted-media"}))),r.a.createElement("div",{style:{height:"100%",textAlign:"center"}},r.a.createElement(d.a,{textAlign:"left",style:{height:"100%",marginTop:"5vh"}},r.a.createElement(p.a,{as:"h1",style:{fontSize:"5em",color:"#3BBA9C",textAlign:"center"}},"Alexander Ma"),r.a.createElement(p.a,{as:"h2",style:{fontSize:"3em",color:"#3BBA9C",textAlign:"center"}},"Aspiring Software Engineer"))),r.a.createElement(d.a,{textAlign:"center"},r.a.createElement(k.a,{style:{marginRight:"2vw",marginTop:"5vh"}},r.a.createElement("a",{href:"https://github.com/TheZombieCloud"},r.a.createElement(w.a,{style:{color:"#3BBA9C"},name:"github square",size:"huge"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/alexyma/"},r.a.createElement(w.a,{style:{color:"#3BBA9C"},name:"linkedin square",size:"huge"})),r.a.createElement("a",{href:"Resume%20for%20Programming.pdf"},r.a.createElement(w.a,{style:{color:"#3BBA9C"},name:"file alternate",size:"huge"}))))),r.a.createElement(v.a.Row,null,r.a.createElement(d.a,{textAlign:"left",style:{marginTop:"5vh",width:"75%",backgroundColor:"#3C3F58"}},r.a.createElement(p.a,{as:"h1",style:{color:"#707793",fontSize:"3em",marginTop:"7vh",marginLeft:"3vw",textAlign:"center"}},"About Me"),r.a.createElement("p",{style:{marginLeft:"3vw",marginTop:"6vh",marginRight:"2vw",color:"#707793",fontSize:"2em",textAlign:"center"}},"Hi! I am currently a Software Engineer studying at the University of Waterloo! I love to code and explore the vast world of technology, learning more each step I take. Right now, I'm interested in Full Stack Development, particulary involving the use of Firebase and React.JS."),r.a.createElement(p.a,{as:"h1",style:{color:"#707793",fontSize:"3em",marginLeft:"3vw",textAlign:"center"}},"Contact Me"),r.a.createElement("p",{style:{textAlign:"center",marginBottom:"7vh",marginLeft:"3vw",marginTop:"6vh",marginRight:"2vw",color:"#707793",fontSize:"2em"}},"Email: alex.magamer@gmail.com",r.a.createElement("br",null),"Phone: (416)219-7460"))),r.a.createElement(f.a,{style:{width:"100%",textAlign:"center",marginTop:"20vh"},maxWidth:649},r.a.createElement(v.a,null,r.a.createElement(v.a.Column,{style:{textAlign:"center"}},r.a.createElement(p.a,{textAlign:"left",as:"h1",style:{color:"#3BBA9C",fontSize:"3em",textAlign:"center"}},"Projects")))),r.a.createElement(b,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[165,1,2]]]);
//# sourceMappingURL=main.bc201fa8.chunk.js.map