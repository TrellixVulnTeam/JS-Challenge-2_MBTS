/*! modernizr 3.11.8 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/
!function(n,e,s,o){function a(n,e){return typeof n===e}var i=[],t={_version:"3.11.8",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){i.push({name:n,fn:e,options:s})},addAsyncTest:function(n){i.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=t,Modernizr=new Modernizr;var l=[],f=s.documentElement,r="svg"===f.nodeName.toLowerCase();!function(){var n,e,s,o,t,f,r;for(var c in i)if(i.hasOwnProperty(c)){if(n=[],e=i[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(o=a(e.fn,"function")?e.fn():e.fn,t=0;t<n.length;t++)f=n[t],r=f.split("."),1===r.length?Modernizr[r[0]]=o:(Modernizr[r[0]]&&(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean)||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),l.push((o?"":"no-")+r.join("-"))}}(),function(n){var e=f.className,s=Modernizr._config.classPrefix||"";if(r&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n.length>0&&(e+=" "+s+n.join(" "+s)),r?f.className.baseVal=e:f.className=e)}(l),delete t.addTest,delete t.addAsyncTest;for(var c=0;c<Modernizr._q.length;c++)Modernizr._q[c]();n.Modernizr=Modernizr}(window,window,document);