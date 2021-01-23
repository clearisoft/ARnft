!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ARNFT={})}(this,(function(e){"use strict";class t{constructor(e){this.canvas_process=document.createElement("canvas"),this.context_process=this.canvas_process.getContext("2d"),this.video=e}getHeight(){return this.vh}getWidth(){return this.vw}getImage(){return this.context_process.drawImage(this.video,0,0,this.vw,this.vh,this.ox,this.oy,this.w,this.h),this.context_process.getImageData(0,0,this.pw,this.ph)}initialize(e){return this._facing=e.facingMode||"environment",new Promise((async(e,t)=>{if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var i={audio:!1,video:{facingMode:this._facing,width:{min:480,max:640}}};navigator.mediaDevices.getUserMedia(i).then((async i=>{this.video.srcObject=i,this.video=await new Promise(((e,t)=>{this.video.onloadedmetadata=()=>e(this.video)})).then((t=>{this.vw=this.video.videoWidth,this.vh=this.video.videoHeight;var i=320/Math.max(this.vw,this.vh/3*4);return this.w=this.vw*i,this.h=this.vh*i,this.pw=Math.max(this.w,this.h/3*4),this.ph=Math.max(this.h,this.w/4*3),this.ox=(this.pw-this.w)/2,this.oy=(this.ph-this.h)/2,this.canvas_process.width=this.pw,this.canvas_process.height=this.ph,this.context_process.fillStyle="black",this.context_process.fillRect(0,0,this.pw,this.ph),e(!0),t})).catch((e=>(console.log(e),t(e),null)))})).catch((e=>{console.error(e),t(e)}))}else t("Sorry, Your device does not support this experince.")}))}}var i={name:"InsectaAR",assetURL:"resources/",workerURL:"./resources/jsartoolkit5/artoolkit/artoolkit.wasm_worker.js",cameraDataURL:"../../data/camera_para.dat",sounds:[{id:"Hoowdy",file:"resources/data/sounds/mynameiswoody.wav"}],videoSettings:{width:{min:640,max:800},height:{min:480,max:600},facingMode:"environment"},characters:[{id:"mantis",modelURL:"resources/data/mantis/",file:"Mantis.glb",name:"Mantis",scale:250,offset:{x:90,y:90},animations:[],videoData:{videoURL:"praying-mantis.mp4"},markerData:{width:1637,height:2048,dpi:600,url:"../../data/mantis/mantis-marker",offsetX:0,offsetY:0}},{id:"beetle",modelURL:"resources/data/beetle/",file:"Beetle.glb",name:"Beetle",scale:330,offset:{x:50,y:50},animations:[],videoData:{videoURL:""},markerData:{width:1637,height:2048,dpi:600,url:"../../data/beetle/beetle-marker",offsetX:0,offsetY:0}},{id:"spider",modelURL:"resources/data/spider/",file:"Spider.glb",name:"Spider",scale:65,offset:{x:100,y:100},animations:[],videoData:{videoURL:""},markerData:{width:1637,height:2048,dpi:600,url:"../../data/spider/wolfspider-marker",offsetX:0,offsetY:0}}]};class s{constructor(e,t,s){this.count=0,this._controllers=new Map,this._fps=15,this._lastTime=0,this.appData=i,this._videoRenderer=e,this._cameraDataURL=t,this._workerURL=s,this.setFPS(this._fps)}addNFTEntity(e,t){return t||(t="entity-"+this.count++),this._controllers.set(t,e),e}getEntityByName(e){return this._controllers.has(e)?this._controllers.get(e):null}getCameraView(){return this._videoRenderer}setFPS(e){this._fps=1e3/e}async init(e,i,a){await function(e,t){return fetch(e).then((e=>{if(!e.ok)throw new Error("HTTP error, status = "+e.status);return e.json()})).then((e=>{})).catch((function(e){return console.error(e),Promise.reject(!1)})),!0}(e,this.appData),this._videoRenderer=new t(document.getElementById("video")),await this._videoRenderer.initialize(this.appData.videoSettings).catch((e=>(console.log(e),Promise.reject(!1))));const o=new s(this._videoRenderer,i,a);return await o.initialize().catch((e=>(console.log(e),Promise.reject(!1)))),!0}initialize(){console.log("init ARnft");let e=[];return this._controllers.forEach((t=>{e.push(t.initialize(this._workerURL,this._cameraDataURL))})),Promise.all(e).then((()=>!0))}update(){let e,t=Date.now();t-this._lastTime>this._fps&&(e=this._videoRenderer.getImage(),this._lastTime=t),this._controllers.forEach((t=>{t.update(),e&&t.process(e)}))}destroy(){this._controllers.forEach((e=>{e.destroy()})),this._controllers.clear(),this._videoRenderer=null}}s.EVENT_SET_CAMERA="ARNFT_SET_CAMERA_EVENT",s.EVENT_FOUND_MARKER="ARNFT_FOUND_MARKER_EVENT",s.EVENT_LOST_MARKER="ARNFT_LOST_MARKER_EVENT",e.ARnft=s,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=ARnft.js.map
