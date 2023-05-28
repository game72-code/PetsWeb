(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ad_atlas_1", frames: [[0,64,116,62],[0,0,233,62],[118,64,111,28],[0,128,146,44]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["ad_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["ad_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["ad_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["ad_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,376);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,376);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,376);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,376);


(lib._6 = function() {
	this.initialize(img._6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,376);


(lib.bcpngcopy2 = function() {
	this.initialize(img.bcpngcopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,376);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.types = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_9
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(501.8,128.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(580));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,618.3,159.6);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(8.55,4.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,73,22), null);


(lib.logoback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// __png
	this.instance = new lib._6();
	this.instance.setTransform(0,0,0.2513,0.2513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(580));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,762.6,94.5);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// __png
	this.instance = new lib._4();
	this.instance.setTransform(0,0,0.2513,0.2513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(580));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,762.6,94.5);


(lib.dog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// __png
	this.instance = new lib._1();
	this.instance.setTransform(0,0,0.2513,0.2513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(580));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,762.6,94.5);


(lib.discount = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// __png
	this.instance = new lib._3();
	this.instance.setTransform(0,0,0.2513,0.2513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(580));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,762.6,94.5);


(lib.bc1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bc_png_copy_2
	this.instance = new lib.bcpngcopy2();
	this.instance.setTransform(0,0,0.2513,0.2513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(580));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,762.6,94.5);


(lib._100organic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// __png
	this.instance = new lib._2();
	this.instance.setTransform(0,0,0.2513,0.2513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(580));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,762.6,94.5);


// stage content:
(lib.Untitled4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [91];
	// timeline functions:
	this.frame_91 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.cozymeal.com/magazine/learn-to-cook", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(91).call(this.frame_91).wait(489));

	// Layer_10
	this.instance = new lib.Symbol1();
	this.instance.setTransform(266.8,-24.85,1,1,0,0,0,36.4,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:36.5,regY:11,x:266.9,y:-20.25},0).wait(1).to({y:-15.8},0).wait(1).to({y:-11.35},0).wait(1).to({y:-6.85},0).wait(1).to({y:-2.4},0).wait(1).to({y:2.05},0).wait(1).to({y:6.55},0).wait(1).to({y:11},0).wait(1).to({y:15.4},0).wait(1).to({y:19.9},0).wait(1).to({y:24.35},0).wait(1).to({y:28.8},0).wait(1).to({y:33.25},0).wait(1).to({y:37.75},0).wait(1).to({y:42.2},0).wait(1).to({y:46.65},0).wait(1).to({y:51.15},0).wait(1).to({y:55.6},0).wait(1).to({y:60.05},0).wait(1).to({y:64.55},0).wait(560));

	// types
	this.instance_1 = new lib.types();
	this.instance_1.setTransform(546.6,-1.2,1,1,0,0,0,309.1,79.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:4.2},0).wait(1).to({y:9.6},0).wait(1).to({y:15},0).wait(1).to({y:20.4},0).wait(1).to({y:25.8},0).wait(1).to({y:31.2},0).wait(1).to({y:36.6},0).wait(1).to({y:42},0).wait(1).to({y:47.4},0).wait(1).to({y:52.8},0).wait(1).to({y:58.2},0).wait(1).to({y:63.6},0).wait(1).to({y:69},0).wait(1).to({y:74.4},0).wait(1).to({y:79.8},0).wait(1).to({y:85.15},0).wait(1).to({y:90.55},0).wait(1).to({y:95.95},0).wait(562));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(-381.8,47.2,1,1,0,0,0,381.2,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:381.3,regY:47.3,x:-323,y:47.3},0).wait(1).to({x:-264.3},0).wait(1).to({x:-205.6},0).wait(1).to({x:-146.9},0).wait(1).to({x:-88.2},0).wait(1).to({x:-29.5},0).wait(1).to({x:29.15},0).wait(1).to({x:87.85},0).wait(1).to({x:146.55},0).wait(1).to({x:205.25},0).wait(1).to({x:263.95},0).wait(1).to({x:322.65},0).wait(1).to({x:381.3},0).wait(567));

	// logo_back
	this.instance_3 = new lib.logoback();
	this.instance_3.setTransform(-1111.8,47.2,1,1,0,0,0,381.2,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:381.3,regY:47.3,x:-987.25,y:47.3},0).wait(1).to({x:-862.85},0).wait(1).to({x:-738.45},0).wait(1).to({x:-614},0).wait(1).to({x:-489.6},0).wait(1).to({x:-365.2},0).wait(1).to({x:-240.75},0).wait(1).to({x:-116.35},0).wait(1).to({x:8.05},0).wait(1).to({x:132.5},0).wait(1).to({x:256.9},0).wait(1).to({x:381.3},0).wait(568));

	// discount
	this.instance_4 = new lib.discount();
	this.instance_4.setTransform(1134.2,47.2,1,1,0,0,0,381.2,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:381.3,regY:47.3,x:1094.2,y:47.3},0).wait(1).to({x:1054.1},0).wait(1).to({x:1014},0).wait(1).to({x:973.9},0).wait(1).to({x:933.8},0).wait(1).to({x:893.7},0).wait(1).to({x:853.65},0).wait(1).to({x:813.55},0).wait(1).to({x:773.45},0).wait(1).to({x:733.35},0).wait(1).to({x:693.25},0).wait(1).to({x:653.15},0).wait(1).to({x:613.1},0).wait(1).to({x:573},0).wait(1).to({x:532.9},0).wait(1).to({x:492.8},0).wait(1).to({x:452.7},0).wait(1).to({x:412.6},0).wait(1).to({x:372.55},0).wait(561));

	// _00__organic
	this.instance_5 = new lib._100organic();
	this.instance_5.setTransform(402.2,-111.8,1,1,0,0,0,381.2,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(580));

	// dog
	this.instance_6 = new lib.dog();
	this.instance_6.setTransform(1442.2,47.2,1,1,0,0,0,381.2,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:381.3,regY:47.3,x:1383.35,y:47.3},0).wait(1).to({x:1324.4},0).wait(1).to({x:1265.45},0).wait(1).to({x:1206.5},0).wait(1).to({x:1147.55},0).wait(1).to({x:1088.6},0).wait(1).to({x:1029.65},0).wait(1).to({x:970.7},0).wait(1).to({x:911.8},0).wait(1).to({x:852.85},0).wait(1).to({x:793.9},0).wait(1).to({x:734.95},0).wait(1).to({x:676},0).wait(1).to({x:617.05},0).wait(1).to({x:558.1},0).wait(1).to({x:499.15},0).wait(1).to({x:440.2},0).wait(1).to({x:381.3},0).wait(562));

	// bc_1
	this.instance_7 = new lib.bc1();
	this.instance_7.setTransform(346.2,175.2,1,1,0,0,0,381.2,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:381.3,regY:47.3,x:346.35,y:166.15},0).wait(1).to({x:346.4,y:157},0).wait(1).to({y:147.85},0).wait(1).to({x:346.45,y:138.7},0).wait(1).to({x:346.5,y:129.55},0).wait(1).to({y:120.4},0).wait(1).to({x:346.55,y:111.3},0).wait(1).to({x:346.6,y:102.15},0).wait(1).to({y:93},0).wait(1).to({x:346.65,y:83.85},0).wait(1).to({x:346.7,y:74.7},0).wait(1).to({y:65.55},0).wait(1).to({x:346.75,y:56.4},0).wait(1).to({y:47.3},0).wait(566));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1129,-114,2952.6,336.5);
// library properties:
lib.properties = {
	id: '6392E929F10D334BA067511B7A21CA89',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_1.png", id:"_1"},
		{src:"images/_2.png", id:"_2"},
		{src:"images/_3.png", id:"_3"},
		{src:"images/_4.png", id:"_4"},
		{src:"images/_6.png", id:"_6"},
		{src:"images/bcpngcopy2.png", id:"bcpngcopy2"},
		{src:"images/ad_atlas_1.png", id:"ad_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6392E929F10D334BA067511B7A21CA89'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;