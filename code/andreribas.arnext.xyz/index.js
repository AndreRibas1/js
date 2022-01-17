;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="cfb1e75d651c89653767560244775c34";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["bwhslvbv4G9O"]={appId:"Y7XQHZ2XJNLN",scope:{}};;CloudflareApps.installs["bwhslvbv4G9O"].options={"css":"*{\n  margin: 0;\n  padding: 0;\n  font-family: \"Ubuntu\", sans-serif;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\nbody{\n  height: 100vh;\n  background: linear-gradient(130deg, #FF0202, #0227FF) no-repeat center;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.profile-card{\n  width: 400px;\n  text-align: center;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.card-header{\n  background: #2c3a47;\n  padding: 60px 40px;\n}\n\n.pic{\n  display: inline-block;\n  padding: 8px;\n  background: linear-gradient(130deg, #FF0202, #0227FF);\n  margin: auto;\n  border-radius: 50%;\n  background-size: 200% 200%;\n  animation: animated-gradient 3s linear infinite;\n}\n\n@keyframes animated-gradient{\n  25%{\n    background-position: left bottom;\n  }\n  50%{\n    background-position: right bottom;\n  }\n  75%{\n    background-position: right top;\n  }\n  100%{\n    background-position: left top;\n  }\n}\n\n.pic img{\n  display: block;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n.name{\n  color: #f2f2f2;\n  font-size: 28px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.desc{\n  font-size: 18px;\n  color: #FF0202;\n}\n\n.sm{\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n}\n\n.sm a{\n  color: #f2f2f2;\n  width: 56px;\n  font-size: 22px;\n  transition: .3s linear;\n}\n\n.sm a:hover{\n  color: #E66767;\n}\n\n.contact-btn{\n  display: inline-block;\n  padding: 12px 50px;\n  color: #E66767;\n  border: 2px solid #E66767;\n  border-radius: 6px;\n  margin-top: 16px;\n  transition: .3s linear;\n}\n\n.contact-btn:hover{\n  background: #E66767;\n  color: #f2f2f2;\n}\n\n.card-footer{\n  background: #f4f4f4;\n  padding: 60px 10px;\n}\n\n.numbers{\n  display: flex;\n  align-items: center;\n}\n\n.item{\n  flex: 1;\n  text-transform: uppercase;\n  font-size: 13px;\n  color: #E66767;\n}\n\n.item span{\n  display: block;\n  color: #2c3a47;\n  font-size: 30px;\n}\n\n.border{\n  width: 1px;\n  height: 30px;\n  background: #bbb;\n}"};;CloudflareApps.installs["bwhslvbv4G9O"].URLPatterns=["^js.arnext.xyz/?.*$"];;CloudflareApps.installs["hIdUtESNPPB1"]={appId:"nt4L5NPJq1za",scope:{}};;CloudflareApps.installs["hIdUtESNPPB1"].options={"blocks":[{"code":"\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"pt-BR\"\u003e\n\u003chead\u003e\n  \u003cmeta charset=\"UTF-8\"\u003e\n  \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n  \u003ctitle\u003ePortfolio - André Ribas\u003c/title\u003e\n  \u003clink rel=\"shortcut icon\" href=\"person-outline.svg\"\u003e \n  \u003cmeta name=\"author\" content=\"André Ribas\"\u003e\n  \u003cmeta name=\"description\" content=\"Portfolio de André Ribas\"\u003e\n  \u003cmeta name=\"keywords\" content=\"portfolio, portifolio, andré, ribas\"\u003e\n  \u003cmeta name=\"copyright\" content=\"© 2021 André Ribas\" /\u003e\n  \u003cmeta name=\"robots\" content=\"index,follow\"\u003e\n  \u003clink rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\"/\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003cdiv class=\"profile-card\"\u003e\n    \u003cdiv class=\"card-header\"\u003e\n      \u003cdiv class=\"pic\"\u003e\n        \u003cimg src=\"/photo-profile.jpg\" alt=\"\"\u003e\n      \u003c/div\u003e\n      \u003cdiv class=\"name\"\u003eAndré Ribas\u003c/div\u003e\n      \u003cdiv class=\"desc\"\u003eTelegram Bot Developer, Web Developer, CEO \u0026 Founder of ARNext Robot\u003c/div\u003e\n      \u003cdiv class=\"sm\"\u003e\n        \u003ca href=\"https://t.me/andre_ribas1\" class=\"fab fa-telegram\"\u003e\u003c/a\u003e\n        \u003ca href=\"https://twitter.com/andre_ribas1\" class=\"fab fa-twitter\"\u003e\u003c/a\u003e\n        \u003ca href=\"https://github.com/andreribas15\" class=\"fab fa-github\"\u003e\u003c/a\u003e\n        \u003ca href=\"https://new.andreribas.arnext.xyz\" class=\"fas fa-globe\"\u003e\u003c/a\u003e\n      \u003c/div\u003e\n      \u003ca href=\"https://new.andreribas.arnext.xyz/contact\" class=\"contact-btn\"\u003eContact Me\u003c/a\u003e\n    \u003c/div\u003e\n    \u003cdiv class=\"card-footer\"\u003e\n      \u003cdiv class=\"numbers\"\u003e\n        \u003cdiv class=\"item\"\u003e\n          \u003cspan\u003e12\u003c/span\u003e\n          Posts\n        \u003c/div\u003e\n        \u003cdiv class=\"border\"\u003e\u003c/div\u003e\n        \u003cdiv class=\"item\"\u003e\n          \u003cspan\u003e284\u003c/span\u003e\n          Following\n        \u003c/div\u003e\n        \u003cdiv class=\"border\"\u003e\u003c/div\u003e\n        \u003cdiv class=\"item\"\u003e\n          \u003cspan\u003e291\u003c/span\u003e\n          Followers\n        \u003c/div\u003e\n      \u003c/div\u003e\n    \u003c/div\u003e\n  \u003c/div\u003e\n  \u003caudio autoplay=\"autoplay\"\u003e\u003csource src=\"https://drive.google.com/file/d/1YOWuLEWRYhzTBeND0bQ5OW5Es7L0dXvV/view?usp=drivesdk\" type=\"audio/mp3\" /\u003e\u003c/audio\u003e\n\u003c/body\u003e\n\u003c/html\u003e","location":{"method":"append","selector":"body"}}]};;CloudflareApps.installs["hIdUtESNPPB1"].URLPatterns=["^js.arnext.xyz/?.*$"];;CloudflareApps.installs["hIdUtESNPPB1"].selectors={"blocks[0].location.selector":"body"};;CloudflareApps.installs["oyM4mAtXqpZy"]={appId:"t8Sk01am_9iA",scope:{}};;CloudflareApps.installs["oyM4mAtXqpZy"].options={"advancedOptions":{"disableOnAJAX":true,"disableOnPushState":true},"color":"red","hidePage":true,"showAdvanced":true,"theme":"loading-bar"};;CloudflareApps.installs["oyM4mAtXqpZy"].URLPatterns=["^blog.ar.arnext.xyz/?.*$","^calculo.bot.arnext.xyz/?.*$","^dns.arnext.xyz/?.*$","^mobile.arnext.xyz/?.*$","^www.arnext.xyz/?.*$"];;if(CloudflareApps.matchPage(CloudflareApps.installs['bwhslvbv4G9O'].URLPatterns)){(function(){var options=CloudflareApps.installs['bwhslvbv4G9O'].options
var style=document.createElement('style')
document.head.appendChild(style)
function updateStyle(){style.innerHTML=options.css}
updateStyle()
window.CloudflareApps.installs['bwhslvbv4G9O'].scope={setOptions:function(nextOptions){options=nextOptions
updateStyle()}}})()};if(CloudflareApps.matchPage(CloudflareApps.installs['hIdUtESNPPB1'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['hIdUtESNPPB1'].options
var elements={}
var prevElements={}
var initialized=false;function updateElements(){options.blocks.forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.foundInBlocks=true
element.innerHTML=block.code
var scripts=Array.prototype.slice.call(element.querySelectorAll('script'))
if(scripts){scripts.forEach(function(script){var newScript=document.createElement('script')
for(var key=script.attributes.length;key--;){var attr=script.attributes[key]
if(attr.specified){newScript.setAttribute(attr.name,attr.value)}}
newScript.innerHTML=script.innerHTML
element.replaceChild(newScript,script)})}})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){if(initialized==false){initialized=true;updateElements();}})}else{updateElements()}
window.CloudflareApps.installs['hIdUtESNPPB1'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['oyM4mAtXqpZy'].URLPatterns)){window.paceOptions=window.paceOptions||{};window.paceOptions.restartOnPushState=false;};if(CloudflareApps.matchPage(CloudflareApps.installs['oyM4mAtXqpZy'].URLPatterns)){window.paceOptions=window.paceOptions||{};window.paceOptions.restartOnRequestAfter=false;};if(CloudflareApps.matchPage(CloudflareApps.installs['oyM4mAtXqpZy'].URLPatterns)){window.paceOptions=window.paceOptions||{};window.paceOptions.hidePage=true;};if(CloudflareApps.matchPage(CloudflareApps.installs['oyM4mAtXqpZy'].URLPatterns)){(function(){var AjaxMonitor,Bar,DocumentMonitor,ElementMonitor,ElementTracker,EventLagMonitor,Evented,Events,NoTargetError,Pace,RequestIntercept,SOURCE_KEYS,Scaler,SocketRequestTracker,XHRRequestTracker,animation,avgAmplitude,bar,cancelAnimation,cancelAnimationFrame,defaultOptions,extend,extendNative,getFromDOM,getIntercept,handlePushState,ignoreStack,init,now,options,paceHideStyle,requestAnimationFrame,result,runAnimation,scalers,shouldIgnoreURL,shouldTrack,source,sources,uniScaler,_WebSocket,_XDomainRequest,_XMLHttpRequest,_i,_intercept,_len,_pushState,_ref,_ref1,_replaceState,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};defaultOptions={hidePage:false,catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:true,restartOnPushState:true,restartOnRequestAfter:500,target:'body',elements:{checkInterval:100,selectors:['body']},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:['GET'],trackWebSockets:true,ignoreURLs:[]}};now=function(){var _ref;return(_ref=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?_ref:+(new Date);};requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame;if(requestAnimationFrame==null){requestAnimationFrame=function(fn){return setTimeout(fn,50);};cancelAnimationFrame=function(id){return clearTimeout(id);};}
runAnimation=function(fn){var last,tick;last=now();tick=function(){var diff;diff=now()-last;if(diff>=33){last=now();return fn(diff,function(){return requestAnimationFrame(tick);});}else{return setTimeout(tick,33-diff);}};return tick();};result=function(){var args,key,obj;obj=arguments[0],key=arguments[1],args=3<=arguments.length?__slice.call(arguments,2):[];if(typeof obj[key]==='function'){return obj[key].apply(obj,args);}else{return obj[key];}};extend=function(){var key,out,source,sources,val,_i,_len;out=arguments[0],sources=2<=arguments.length?__slice.call(arguments,1):[];for(_i=0,_len=sources.length;_i<_len;_i++){source=sources[_i];if(source){for(key in source){if(!__hasProp.call(source,key))continue;val=source[key];if((out[key]!=null)&&typeof out[key]==='object'&&(val!=null)&&typeof val==='object'){extend(out[key],val);}else{out[key]=val;}}}}
return out;};avgAmplitude=function(arr){var count,sum,v,_i,_len;sum=count=0;for(_i=0,_len=arr.length;_i<_len;_i++){v=arr[_i];sum+=Math.abs(v);count++;}
return sum/count;};getFromDOM=function(key,json){var data,e,el;if(key==null){key='options';}
if(json==null){json=true;}
el=document.querySelector("[data-pace-"+key+"]");if(!el){return;}
data=el.getAttribute("data-pace-"+key);if(!json){return data;}
try{return JSON.parse(data);}catch(_error){e=_error;return typeof console!=="undefined"&&console!==null?console.error("Error parsing inline pace options",e):void 0;}};Evented=(function(){function Evented(){}
Evented.prototype.on=function(event,handler,ctx,once){var _base;if(once==null){once=false;}
if(this.bindings==null){this.bindings={};}
if((_base=this.bindings)[event]==null){_base[event]=[];}
return this.bindings[event].push({handler:handler,ctx:ctx,once:once});};Evented.prototype.once=function(event,handler,ctx){return this.on(event,handler,ctx,true);};Evented.prototype.off=function(event,handler){var i,_ref,_results;if(((_ref=this.bindings)!=null?_ref[event]:void 0)==null){return;}
if(handler==null){return delete this.bindings[event];}else{i=0;_results=[];while(i<this.bindings[event].length){if(this.bindings[event][i].handler===handler){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}
return _results;}};Evented.prototype.trigger=function(){var args,ctx,event,handler,i,once,_ref,_ref1,_results;event=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if((_ref=this.bindings)!=null?_ref[event]:void 0){i=0;_results=[];while(i<this.bindings[event].length){_ref1=this.bindings[event][i],handler=_ref1.handler,ctx=_ref1.ctx,once=_ref1.once;handler.apply(ctx!=null?ctx:this,args);if(once){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}
return _results;}};return Evented;})();Pace=window.Pace||{};window.Pace=Pace;extend(Pace,Evented.prototype);options=Pace.options=extend({},defaultOptions,window.paceOptions,getFromDOM());_ref=['ajax','document','eventLag','elements'];for(_i=0,_len=_ref.length;_i<_len;_i++){source=_ref[_i];if(options[source]===true){options[source]=defaultOptions[source];}}
NoTargetError=(function(_super){__extends(NoTargetError,_super);function NoTargetError(){_ref1=NoTargetError.__super__.constructor.apply(this,arguments);return _ref1;}
return NoTargetError;})(Error);Bar=(function(){function Bar(){this.progress=0;}
Bar.prototype.getElement=function(){var targetElement;if(this.el==null){targetElement=document.querySelector(options.target);if(!targetElement){throw new NoTargetError;}
this.el=document.createElement('div');this.el.className="pace pace-active";document.body.className=document.body.className.replace(/pace-done/g,'');document.body.className+=' pace-running';this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';if(targetElement.firstChild!=null){targetElement.insertBefore(this.el,targetElement.firstChild);}else{targetElement.appendChild(this.el);}}
return this.el;};Bar.prototype.finish=function(){var el;el=this.getElement();el.className=el.className.replace('pace-active','');el.className+=' pace-inactive';document.body.className=document.body.className.replace('pace-running','');return document.body.className+=' pace-done';};Bar.prototype.update=function(prog){this.progress=prog;return this.render();};Bar.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement());}catch(_error){NoTargetError=_error;}
return this.el=void 0;};Bar.prototype.render=function(){var el,progressStr;if(document.querySelector(options.target)==null){return false;}
el=this.getElement();el.children[0].style.width=""+this.progress+"%";if(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0){el.children[0].setAttribute('data-progress-text',""+(this.progress|0)+"%");if(this.progress>=100){progressStr='99';}else{progressStr=this.progress<10?"0":"";progressStr+=this.progress|0;}
el.children[0].setAttribute('data-progress',""+progressStr);}
return this.lastRenderedProgress=this.progress;};Bar.prototype.done=function(){return this.progress>=100;};return Bar;})();Events=(function(){function Events(){this.bindings={};}
Events.prototype.trigger=function(name,val){var binding,_j,_len1,_ref2,_results;if(this.bindings[name]!=null){_ref2=this.bindings[name];_results=[];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){binding=_ref2[_j];_results.push(binding.call(this,val));}
return _results;}};Events.prototype.on=function(name,fn){var _base;if((_base=this.bindings)[name]==null){_base[name]=[];}
return this.bindings[name].push(fn);};return Events;})();_XMLHttpRequest=window.XMLHttpRequest;_XDomainRequest=window.XDomainRequest;_WebSocket=window.WebSocket;extendNative=function(to,from){var e,key,val,_results;_results=[];for(key in from.prototype){try{val=from.prototype[key];if((to[key]==null)&&typeof val!=='function'){_results.push(to[key]=val);}else{_results.push(void 0);}}catch(_error){e=_error;}}
return _results;};ignoreStack=[];Pace.ignore=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('ignore');ret=fn.apply(null,args);ignoreStack.shift();return ret;};Pace.track=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('track');ret=fn.apply(null,args);ignoreStack.shift();return ret;};shouldTrack=function(method){var _ref2;if(method==null){method='GET';}
if(ignoreStack[0]==='track'){return'force';}
if(!ignoreStack.length&&options.ajax){if(method==='socket'&&options.ajax.trackWebSockets){return true;}else if(_ref2=method.toUpperCase(),__indexOf.call(options.ajax.trackMethods,_ref2)>=0){return true;}}
return false;};RequestIntercept=(function(_super){__extends(RequestIntercept,_super);function RequestIntercept(){var monitorXHR,_this=this;RequestIntercept.__super__.constructor.apply(this,arguments);monitorXHR=function(req){var _open;_open=req.open;return req.open=function(type,url,async){if(shouldTrack(type)){_this.trigger('request',{type:type,url:url,request:req});}
return _open.apply(req,arguments);};};window.XMLHttpRequest=function(flags){var req;req=new _XMLHttpRequest(flags);monitorXHR(req);return req;};try{extendNative(window.XMLHttpRequest,_XMLHttpRequest);}catch(_error){}
if(_XDomainRequest!=null){window.XDomainRequest=function(){var req;req=new _XDomainRequest;monitorXHR(req);return req;};try{extendNative(window.XDomainRequest,_XDomainRequest);}catch(_error){}}
if((_WebSocket!=null)&&options.ajax.trackWebSockets){window.WebSocket=function(url,protocols){var req;if(protocols!=null){req=new _WebSocket(url,protocols);}else{req=new _WebSocket(url);}
if(shouldTrack('socket')){_this.trigger('request',{type:'socket',url:url,protocols:protocols,request:req});}
return req;};try{extendNative(window.WebSocket,_WebSocket);}catch(_error){}}}
return RequestIntercept;})(Events);_intercept=null;getIntercept=function(){if(_intercept==null){_intercept=new RequestIntercept;}
return _intercept;};shouldIgnoreURL=function(url){var pattern,_j,_len1,_ref2;_ref2=options.ajax.ignoreURLs;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){pattern=_ref2[_j];if(typeof pattern==='string'){if(url.indexOf(pattern)!==-1){return true;}}else{if(pattern.test(url)){return true;}}}
return false;};getIntercept().on('request',function(_arg){var after,args,request,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}
if(!Pace.running&&(options.restartOnRequestAfter!==false||shouldTrack(type)==='force')){args=arguments;after=options.restartOnRequestAfter||0;if(typeof after==='boolean'){after=0;}
return setTimeout(function(){var stillActive,_j,_len1,_ref2,_ref3,_results;if(type==='socket'){stillActive=request.readyState<2;}else{stillActive=(0<(_ref2=request.readyState)&&_ref2<4);}
if(stillActive){Pace.restart();_ref3=Pace.sources;_results=[];for(_j=0,_len1=_ref3.length;_j<_len1;_j++){source=_ref3[_j];if(source instanceof AjaxMonitor){source.watch.apply(source,args);break;}else{_results.push(void 0);}}
return _results;}},after);}});AjaxMonitor=(function(){function AjaxMonitor(){var _this=this;this.elements=[];getIntercept().on('request',function(){return _this.watch.apply(_this,arguments);});}
AjaxMonitor.prototype.watch=function(_arg){var request,tracker,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}
if(type==='socket'){tracker=new SocketRequestTracker(request);}else{tracker=new XHRRequestTracker(request);}
return this.elements.push(tracker);};return AjaxMonitor;})();XHRRequestTracker=(function(){function XHRRequestTracker(request){var event,size,_j,_len1,_onreadystatechange,_ref2,_this=this;this.progress=0;if(window.ProgressEvent!=null){size=null;request.addEventListener('progress',function(evt){if(evt.lengthComputable){return _this.progress=100*evt.loaded/evt.total;}else{return _this.progress=_this.progress+(100-_this.progress)/2;}},false);_ref2=['load','abort','timeout','error'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}else{_onreadystatechange=request.onreadystatechange;request.onreadystatechange=function(){var _ref3;if((_ref3=request.readyState)===0||_ref3===4){_this.progress=100;}else if(request.readyState===3){_this.progress=50;}
return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}}
return XHRRequestTracker;})();SocketRequestTracker=(function(){function SocketRequestTracker(request){var event,_j,_len1,_ref2,_this=this;this.progress=0;_ref2=['error','open'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}
return SocketRequestTracker;})();ElementMonitor=(function(){function ElementMonitor(options){var selector,_j,_len1,_ref2;if(options==null){options={};}
this.elements=[];if(options.selectors==null){options.selectors=[];}
_ref2=options.selectors;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){selector=_ref2[_j];this.elements.push(new ElementTracker(selector));}}
return ElementMonitor;})();ElementTracker=(function(){function ElementTracker(selector){this.selector=selector;this.progress=0;this.check();}
ElementTracker.prototype.check=function(){var _this=this;if(document.querySelector(this.selector)){return this.done();}else{return setTimeout((function(){return _this.check();}),options.elements.checkInterval);}};ElementTracker.prototype.done=function(){return this.progress=100;};return ElementTracker;})();DocumentMonitor=(function(){DocumentMonitor.prototype.states={loading:0,interactive:50,complete:100};function DocumentMonitor(){var _onreadystatechange,_ref2,_this=this;this.progress=(_ref2=this.states[document.readyState])!=null?_ref2:100;_onreadystatechange=document.onreadystatechange;document.onreadystatechange=function(){if(_this.states[document.readyState]!=null){_this.progress=_this.states[document.readyState];}
return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}
return DocumentMonitor;})();EventLagMonitor=(function(){function EventLagMonitor(){var avg,interval,last,points,samples,_this=this;this.progress=0;avg=0;samples=[];points=0;last=now();interval=setInterval(function(){var diff;diff=now()-last-50;last=now();samples.push(diff);if(samples.length>options.eventLag.sampleCount){samples.shift();}
avg=avgAmplitude(samples);if(++points>=options.eventLag.minSamples&&avg<options.eventLag.lagThreshold){_this.progress=100;return clearInterval(interval);}else{return _this.progress=100*(3/(avg+3));}},50);}
return EventLagMonitor;})();Scaler=(function(){function Scaler(source){this.source=source;this.last=this.sinceLastUpdate=0;this.rate=options.initialRate;this.catchup=0;this.progress=this.lastProgress=0;if(this.source!=null){this.progress=result(this.source,'progress');}}
Scaler.prototype.tick=function(frameTime,val){var scaling;if(val==null){val=result(this.source,'progress');}
if(val>=100){this.done=true;}
if(val===this.last){this.sinceLastUpdate+=frameTime;}else{if(this.sinceLastUpdate){this.rate=(val-this.last)/this.sinceLastUpdate;}
this.catchup=(val-this.progress)/options.catchupTime;this.sinceLastUpdate=0;this.last=val;}
if(val>this.progress){this.progress+=this.catchup*frameTime;}
scaling=1-Math.pow(this.progress/100,options.easeFactor);this.progress+=scaling*this.rate*frameTime;this.progress=Math.min(this.lastProgress+options.maxProgressPerFrame,this.progress);this.progress=Math.max(0,this.progress);this.progress=Math.min(100,this.progress);this.lastProgress=this.progress;return this.progress;};return Scaler;})();sources=null;scalers=null;bar=null;uniScaler=null;animation=null;cancelAnimation=null;Pace.running=false;handlePushState=function(){if(options.restartOnPushState){return Pace.restart();}};if(window.history.pushState!=null){_pushState=window.history.pushState;window.history.pushState=function(){handlePushState();return _pushState.apply(window.history,arguments);};}
if(window.history.replaceState!=null){_replaceState=window.history.replaceState;window.history.replaceState=function(){handlePushState();return _replaceState.apply(window.history,arguments);};}
SOURCE_KEYS={ajax:AjaxMonitor,elements:ElementMonitor,document:DocumentMonitor,eventLag:EventLagMonitor};(init=function(){var type,_j,_k,_len1,_len2,_ref2,_ref3,_ref4;Pace.sources=sources=[];_ref2=['ajax','elements','document','eventLag'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){type=_ref2[_j];if(options[type]!==false){sources.push(new SOURCE_KEYS[type](options[type]));}}
_ref4=(_ref3=options.extraSources)!=null?_ref3:[];for(_k=0,_len2=_ref4.length;_k<_len2;_k++){source=_ref4[_k];sources.push(new source(options));}
Pace.bar=bar=new Bar;scalers=[];return uniScaler=new Scaler;})();Pace.stop=function(){Pace.trigger('stop');Pace.running=false;bar.destroy();cancelAnimation=true;if(animation!=null){if(typeof cancelAnimationFrame==="function"){cancelAnimationFrame(animation);}
animation=null;}
return init();};Pace.restart=function(){Pace.trigger('restart');Pace.stop();return Pace.start();};Pace.go=function(){var start;Pace.running=true;bar.render();start=now();cancelAnimation=false;return animation=runAnimation(function(frameTime,enqueueNextFrame){var avg,count,done,element,elements,i,j,remaining,scaler,scalerList,sum,_j,_k,_len1,_len2,_ref2;remaining=100-bar.progress;count=sum=0;done=true;for(i=_j=0,_len1=sources.length;_j<_len1;i=++_j){source=sources[i];scalerList=scalers[i]!=null?scalers[i]:scalers[i]=[];elements=(_ref2=source.elements)!=null?_ref2:[source];for(j=_k=0,_len2=elements.length;_k<_len2;j=++_k){element=elements[j];scaler=scalerList[j]!=null?scalerList[j]:scalerList[j]=new Scaler(element);done&=scaler.done;if(scaler.done){continue;}
count++;sum+=scaler.tick(frameTime);}}
avg=sum/count;bar.update(uniScaler.tick(frameTime,avg));if(bar.done()||done||cancelAnimation){bar.update(100);Pace.trigger('done');return setTimeout(function(){bar.finish();Pace.running=false;return Pace.trigger('hide');},Math.max(options.ghostTime,Math.max(options.minTime-(now()-start),0)));}else{return enqueueNextFrame();}});};paceHideStyle=null;Pace.start=function(_options){extend(options,_options);if(options.hidePage){if(!paceHideStyle){paceHideStyle=document.createElement('style');document.head.appendChild(paceHideStyle);}
paceHideStyle.innerHTML="body > *:not(.pace), body:before, body:after { -webkit-transition: opacity .4s ease-in-out; -moz-transition: opacity .4s ease-in-out; -o-transition: opacity .4s ease-in-out; -ms-transition: opacity .4s ease-in-out; transition: opacity .4s ease-in-out } body:not(.pace-done) > *:not(.pace), body:not(.pace-done):before, body:not(.pace-done):after { opacity: 0 }";}else{if(paceHideStyle!=null){paceHideStyle.innerHTML='';}}
Pace.running=true;try{bar.render();}catch(_error){NoTargetError=_error;}
if(!document.querySelector('.pace')){return setTimeout(Pace.start,50);}else{Pace.trigger('start');return Pace.go();}};if(typeof define==='function'&&define.amd){define(function(){return Pace;});}else if(typeof exports==='object'){module.exports=Pace;}else{if(options.startOnPageLoad){Pace.start();}}}).call(this);};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,LyogVGhpcyBpcyBhIGNvbXBpbGVkIGZpbGUsIHlvdSBzaG91bGQgYmUgZWRpdGluZyB0aGUgZmlsZSBpbiB0aGUgdGVtcGxhdGVzIGRpcmVjdG9yeSAqLwoucGFjZSB7CiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OwogIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsKICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDsKICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94OwogIGJveC1zaXppbmc6IGJvcmRlci1ib3g7CgogIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDsKICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7CiAgYm9yZGVyLXJhZGl1czogMTBweDsKCiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7CiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OwogIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7CgogIC13ZWJraXQtcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAtbW96LXVzZXItc2VsZWN0OiBub25lOwogIHVzZXItc2VsZWN0OiBub25lOwoKICB6LWluZGV4OiAyMDAwOwogIHBvc2l0aW9uOiBmaXhlZDsKICBtYXJnaW46IGF1dG87CiAgdG9wOiAxMnB4OwogIGxlZnQ6IDA7CiAgcmlnaHQ6IDA7CiAgYm90dG9tOiAwOwogIHdpZHRoOiAyMDBweDsKICBoZWlnaHQ6IDI1cHg7CiAgYm9yZGVyOiAycHggc29saWQgI2VlMzE0ODsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOwp9CgoucGFjZSAucGFjZS1wcm9ncmVzcyB7CiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OwogIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsKICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDsKICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94OwogIGJveC1zaXppbmc6IGJvcmRlci1ib3g7CgogIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4OwogIC1tb3otYm9yZGVyLXJhZGl1czogNXB4OwogIGJvcmRlci1yYWRpdXM6IDVweDsKCiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OwogIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nOwogIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7CgogIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOwoKICBtYXgtd2lkdGg6IDE5MHB4OwogIHBvc2l0aW9uOiBmaXhlZDsKICB6LWluZGV4OiAyMDAwOwogIGRpc3BsYXk6IGJsb2NrOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBsZWZ0OiAzcHg7CiAgdG9wOiAzcHg7CiAgaGVpZ2h0OiAxNXB4OwogIGZvbnQtc2l6ZTogMTJweDsKICBiYWNrZ3JvdW5kOiAjZWUzMTQ4OwogIGNvbG9yOiAjZWUzMTQ4OwogIGxpbmUtaGVpZ2h0OiA2MHB4OwogIGZvbnQtd2VpZ2h0OiBib2xkOwogIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBBcmlhbCwgIkx1Y2lkYSBHcmFuZGUiLCBzYW5zLXNlcmlmOwp9CgoucGFjZSAucGFjZS1wcm9ncmVzczphZnRlciB7CiAgY29udGVudDogYXR0cihkYXRhLXByb2dyZXNzLXRleHQpOwogIGRpc3BsYXk6IGlubGluZS1ibG9jazsKfQoKLnBhY2UucGFjZS1pbmFjdGl2ZSB7CiAgZGlzcGxheTogbm9uZTsKfQ==';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();
